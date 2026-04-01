import { Component, AfterViewInit, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
//import { CoreService } from 'src/app/services/core.service';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material.module';
import { AuthService } from '../../../services/login/auth.service';
import { LoginUrl } from '../../../config';
import { FooterComponent } from '../../front-pages/footer/footer.component';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-side-login',
  imports: [CommonModule, RouterModule, FooterComponent, MaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: './side-login.component.html'
})
export class AppSideLoginComponent implements AfterViewInit, OnInit {
  //  options = this.settings.getOptions();
  //baseUrlpath:string="DOCHEKDOTCOM/app/Views/angular_view/";
  baseUrlpath: string = LoginUrl;

  // Error message handling
  errorMessage: string = '';
  showPassword: boolean = false;

  // Template references for autofill workaround (Edge IE mode compatibility)
  @ViewChild('usernameInput') usernameInput!: ElementRef<HTMLInputElement>;
  @ViewChild('passwordInput') passwordInput!: ElementRef<HTMLInputElement>;

  constructor(
    private authservice: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private ngZone: NgZone,
    private sanitizer: DomSanitizer  // Add this
  ) { }

  // Form controls created synchronously (not in ngOnInit) for browser autofill detection
  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      // Allow alphanumeric, dots, underscores, hyphens, and @ for emails
      Validators.pattern(/^[a-zA-Z0-9._@-]+$/)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)  // ✅ Require at least 6 characters
    ])
  });

  get f() {
    return this.form.controls;
  }

  /**
   * Edge IE Mode Autofill Workaround:
   * Legacy browsers may autofill values without triggering Angular's change detection.
   * This manually syncs autofilled values with the reactive form after view initialization.
   */
  ngAfterViewInit(): void {
    // Delay to allow browser autofill to complete
    setTimeout(() => {
      this.syncAutofillValues();
    }, 100);

    // Additional check after a longer delay for slower autofill
    setTimeout(() => {
      this.syncAutofillValues();
    }, 500);
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      const message = params.get('message');

      if (message) {
        this.errorMessage = message;
      }
    });
  }

  /**
   * Syncs browser-autofilled values with Angular reactive form.
   * Required because Edge IE mode and some legacy browsers don't trigger
   * input events when autofilling credentials.
   */
  private syncAutofillValues(): void {
    this.ngZone.run(() => {
      if (this.usernameInput?.nativeElement) {
        const usernameValue = this.usernameInput.nativeElement.value;
        if (usernameValue && usernameValue !== this.form.get('username')?.value) {
          this.form.patchValue({ username: usernameValue });
        }
      }

      if (this.passwordInput?.nativeElement) {
        const passwordValue = this.passwordInput.nativeElement.value;
        if (passwordValue && passwordValue !== this.form.get('password')?.value) {
          this.form.patchValue({ password: passwordValue });
        }
      }
    });
  }

  isActiveRoute(route: string): boolean {
    return this.router.url.includes(`/front-pages/${route}`);
  }
  isSubmitting = false;
  loginAttempts = 0;
  maxLoginAttempts = 5;
  lockoutTime = 5 * 60 * 1000; // 5 minutes
  lastAttemptTime = 0;

  /**
   * Clears the error message from the form.
   * Called when user starts typing in username or password fields.
   */
  clearErrorMessage(): void {
    this.errorMessage = '';
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  private isValidRedirectUrl(url: string): boolean {
    try {
      const parsedUrl = new URL(url, window.location.href);
      // Only allow same-origin redirects
      return parsedUrl.origin === window.location.origin;
    } catch {
      return false;
    }
  }

  submit() {
    // Check rate limiting
    if (this.loginAttempts >= this.maxLoginAttempts) {
      const timeSinceLastAttempt = Date.now() - this.lastAttemptTime;
      if (timeSinceLastAttempt < this.lockoutTime) {
        this.errorMessage = `Too many attempts. Try again in ${Math.ceil((this.lockoutTime - timeSinceLastAttempt) / 1000)} seconds.`;
        return;
      }
      this.loginAttempts = 0; // Reset after lockout period
    }

    this.syncAutofillValues();

    if (this.form.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.errorMessage = '';
      this.lastAttemptTime = Date.now();

      this.authservice.login(this.form.value.username!, this.form.value.password!)
        .subscribe({
          next: res => {
            this.isSubmitting = false;

            if (res.success) {
              this.loginAttempts = 0;
              this.errorMessage = '';

              // ❌ DON'T store sensitive data
              // localStorage.setItem('user', JSON.stringify(res.user));

              // ✅ ONLY store non-sensitive data in sessionStorage
              if (res.user && res.user.id) {
                sessionStorage.setItem('userId', res.user.id);
              }

              // ✅ Token should be stored in httpOnly cookie by backend
              // (Backend needs to set this header: Set-Cookie: token=xxx; HttpOnly; Secure; SameSite=Strict)

              if (res.redirect_url && this.isValidRedirectUrl(res.redirect_url)) {
                window.location.href = res.redirect_url;
              } else {
                this.router.navigate(['/home']);
              }
            } else {
              this.loginAttempts++;
              if (res.errors) {
                // Get error text and sanitize it
                const errorText = Object.values(res.errors).join(' ');
                // This ensures only plain text, no HTML/JS execution
                this.errorMessage = this.sanitizer.sanitize(1, errorText) || 'Login failed';
              } else {
               // this.errorMessage = 'Username or Password don\'t match.';
               
               this.errorMessage = res?.message || 'Username or Password don\'t match.';
              }
            }
          },
          error: err => {
            this.loginAttempts++;
            this.isSubmitting = false;
          //  this.errorMessage = 'Server error. Please try again later.';
              this.errorMessage = err.error?.message || 'Server error. Please try again later.';
          }
        });
    }
  }


}
