import { Component, AfterViewInit, ViewChild, ElementRef, NgZone } from '@angular/core';
//import { CoreService } from 'src/app/services/core.service';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material.module';
import { BrandingComponent } from '../../../layouts/full/vertical/sidebar/branding.component';
import { AuthService } from '../../../services/login/auth.service';
import { LoginUrl } from '../../../config';
import { FooterComponent } from '../../front-pages/footer/footer.component';

@Component({
  selector: 'app-side-login',
  imports: [RouterModule, FooterComponent, MaterialModule, FormsModule, ReactiveFormsModule, BrandingComponent],
  templateUrl: './side-login.component.html'
})
export class AppSideLoginComponent implements AfterViewInit {
  //  options = this.settings.getOptions();
  //baseUrlpath:string="DOCHEKDOTCOM/app/Views/angular_view/";
  baseUrlpath: string = LoginUrl;

  // Error message handling
  errorMessage: string = '';

  // Template references for autofill workaround (Edge IE mode compatibility)
  @ViewChild('usernameInput') usernameInput!: ElementRef<HTMLInputElement>;
  @ViewChild('passwordInput') passwordInput!: ElementRef<HTMLInputElement>;

  constructor(
    private authservice: AuthService,
    private router: Router,
    private ngZone: NgZone
  ) { }

  // Form controls created synchronously (not in ngOnInit) for browser autofill detection
  form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(0)])
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
  isSubmitting = false; // Add this property

  /**
   * Clears the error message from the form.
   * Called when user starts typing in username or password fields.
   */
  clearErrorMessage(): void {
    this.errorMessage = '';
  }

  submit() {
    // Sync autofill values one more time before submission
    this.syncAutofillValues();

    if (this.form.valid && !this.isSubmitting) {
      this.isSubmitting = true; // Disable button
      this.errorMessage = ''; // Clear any previous error messages

      this.authservice.login(this.form.value.username!, this.form.value.password!)
        .subscribe({
          next: res => {
            console.log('Login Response:', res);
            this.isSubmitting = false; // Re-enable button

            if (res.success) {
              this.errorMessage = ''; // Clear error on successful login
              localStorage.setItem('user', JSON.stringify(res.user));

              if (res.redirect_url) {
                window.location.href = res.redirect_url;
              } else {
                console.log("error redirect");
                // this.router.navigate(['/dashboards/dashboard1']);
              }
            } else {
              if (res.errors) {
                this.errorMessage = Object.values(res.errors).join(' ');
              } else {
                this.errorMessage = 'Username or Password don\'t match.';
              }
            }
          },
          error: err => {
            console.error('HTTP Error:', err);
            this.errorMessage = 'Server error, check console for details';
            this.isSubmitting = false; // Re-enable button even on error
          }
        });
    }
  }


}
