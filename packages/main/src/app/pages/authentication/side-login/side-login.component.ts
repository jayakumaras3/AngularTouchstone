import { Component, AfterViewInit, OnInit, OnDestroy, ViewChild, ElementRef, NgZone } from '@angular/core';
//import { CoreService } from 'src/app/services/core.service';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { MaterialModule } from '../../../material.module';
import { AuthService } from '../../../services/login/auth.service';
import { LoginUrl } from '../../../config';
import { FooterComponent } from '../../front-pages/footer/footer.component';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';

/** Cloudflare Turnstile — https://developers.cloudflare.com/turnstile/get-started/client-side-rendering/ */
interface TurnstileRenderOptions {
  sitekey: string;
  theme?: 'light' | 'dark' | 'auto';
  size?: 'normal' | 'compact' | 'flexible';
  callback?: (token: string) => void;
  'expired-callback'?: () => void;
  'error-callback'?: () => void;
  'timeout-callback'?: () => void;
}

interface TurnstileApi {
  render: (container: HTMLElement, options: TurnstileRenderOptions) => string;
  reset: (widgetId?: string) => void;
  remove: (widgetId: string) => void;
  getResponse: (widgetId?: string) => string | undefined;
}

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

@Component({
  selector: 'app-side-login',
  imports: [CommonModule, RouterModule, FooterComponent, MaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: './side-login.component.html',
  styleUrl: './side-login.component.scss'
})
export class AppSideLoginComponent implements AfterViewInit, OnInit, OnDestroy {
  //  options = this.settings.getOptions();
  //baseUrlpath:string="DOCHEKDOTCOM/app/Views/angular_view/";
  baseUrlpath: string = LoginUrl;

  // Error message handling
  errorMessage: string = '';
  successMessage: string = '';
  showPassword: boolean = false;
  private successTimer: ReturnType<typeof setTimeout> | null = null;

  // Template references for autofill workaround (Edge IE mode compatibility)
  @ViewChild('usernameInput') usernameInput!: ElementRef<HTMLInputElement>;
  @ViewChild('passwordInput') passwordInput!: ElementRef<HTMLInputElement>;

  // Cloudflare Turnstile
  @ViewChild('turnstileContainer') turnstileContainer!: ElementRef<HTMLDivElement>;
  readonly turnstileSiteKey = environment.turnstileSiteKey;
  turnstileToken: string = '';
  captchaError: string = '';
  private turnstileWidgetId: string | null = null;
  private turnstileRenderAttempts = 0;

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
      Validators.minLength(3)  // ✅ Require at least 3 characters
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

    // Cloudflare Turnstile — explicit render (script is loaded via index.html)
    this.renderTurnstileWidget();
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      const message = params.get('message');
      if (message) {
        this.errorMessage = message;
      }

      const success = params.get('success');
      if (success) {
        this.successMessage = success;
        // Auto-dismiss after 5 seconds
        this.successTimer = setTimeout(() => {
          this.successMessage = '';
        }, 5000);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.successTimer !== null) {
      clearTimeout(this.successTimer);
    }
    if (this.turnstileWidgetId !== null && window.turnstile) {
      window.turnstile.remove(this.turnstileWidgetId);
    }
  }

  /**
   * Renders the Cloudflare Turnstile widget explicitly into #turnstileContainer.
   * The api.js script (loaded with `render=explicit` in index.html) may still be
   * downloading when this runs, so poll briefly until `window.turnstile` exists.
   */
  private renderTurnstileWidget(): void {
    const turnstile = window.turnstile;
    if (turnstile && this.turnstileContainer?.nativeElement) {
      this.turnstileWidgetId = turnstile.render(this.turnstileContainer.nativeElement, {
        sitekey: this.turnstileSiteKey,
        theme: 'auto',
        size: 'flexible',
        callback: (token: string) => {
          this.ngZone.run(() => {
            this.turnstileToken = token;
            this.captchaError = '';
          });
        },
        'expired-callback': () => {
          this.ngZone.run(() => {
            this.turnstileToken = '';
            this.captchaError = 'Please complete the CAPTCHA verification.';
          });
        },
        'error-callback': () => {
          this.ngZone.run(() => {
            this.turnstileToken = '';
            this.captchaError = 'CAPTCHA verification failed. Please try again.';
            this.resetTurnstile();
          });
        },
        'timeout-callback': () => {
          this.ngZone.run(() => {
            this.turnstileToken = '';
            this.captchaError = 'CAPTCHA verification failed. Please try again.';
            this.resetTurnstile();
          });
        },
      });
    } else if (this.turnstileRenderAttempts < 30) {
      this.turnstileRenderAttempts++;
      setTimeout(() => this.renderTurnstileWidget(), 200);
    } else {
      // api.js never became available (e.g. blocked by network/extension) — surface a message
      // rather than leaving the Sign In button silently disabled with no explanation.
      this.ngZone.run(() => {
        this.captchaError = 'Network error. Please try again.';
      });
    }
  }

  /** Resets the widget and clears any stored token, forcing re-verification (tokens are single-use). */
  private resetTurnstile(): void {
    this.turnstileToken = '';
    if (this.turnstileWidgetId !== null && window.turnstile) {
      window.turnstile.reset(this.turnstileWidgetId);
    }
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

  /** Prevent the space bar from entering a space in the password field. */
  blockSpace(event: KeyboardEvent): void {
    if (event.key === ' ' || event.code === 'Space') {
      event.preventDefault();
    }
  }

  /** Strip whitespace from anything pasted into the password field. */
  stripPastedSpaces(event: ClipboardEvent): void {
    const pasted = event.clipboardData?.getData('text') ?? '';
    if (!/\s/.test(pasted)) return;
    event.preventDefault();
    const input = event.target as HTMLInputElement;
    const cleaned =
      input.value.slice(0, input.selectionStart ?? input.value.length) +
      pasted.replace(/\s/g, '') +
      input.value.slice(input.selectionEnd ?? input.value.length);
    this.form.patchValue({ password: cleaned });
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

    if (!this.turnstileToken) {
      this.captchaError = 'Please complete the CAPTCHA verification.';
      return;
    }

    if (this.form.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.errorMessage = '';
      this.lastAttemptTime = Date.now();

      this.authservice.login(this.form.value.username!, this.form.value.password!, this.turnstileToken)
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
              this.authservice.setLoginState();

              if (res.redirect_url && this.isValidRedirectUrl(res.redirect_url)) {
                window.location.href = res.redirect_url;
              } else {
                this.router.navigate(['/home']);
              }
            } else {
              this.loginAttempts++;
              // Turnstile tokens are single-use — force re-verification on any failed attempt.
              this.resetTurnstile();
              if (res.errors) {
                // Get error text and sanitize it
                const errorText = Object.values(res.errors).join(' ');
                // This ensures only plain text, no HTML/JS execution
                this.errorMessage = this.sanitizer.sanitize(1, errorText) || 'Login failed';
              } else {
                this.errorMessage = res?.message || 'Username or Password don\'t match.';
              }
            }
          },
          error: (err: HttpErrorResponse) => {
            this.loginAttempts++;
            this.isSubmitting = false;

            // Defensive: a throw anywhere in here (turnstile widget, sanitizer, a
            // malformed error body) must never leave the user staring at a blank
            // form with no feedback, so fall back to a generic message on failure.
            try {
              // Turnstile tokens are single-use — force re-verification on any failed attempt.
              this.resetTurnstile();

              switch (err.status) {
                case 401:
                  // Never trust the backend text for invalid credentials — always generic.
                  this.errorMessage = 'Invalid username or password.';
                  break;

                case 403:
                  // Deactivated-account message is safe to show as-is: the backend only
                  // returns 403 once the password has already matched, so this can't be
                  // used to probe usernames for account status.
                  this.errorMessage = err.error?.message || 'Your account has been deactivated, contact admin.';
                  break;

                case 429:
                  this.errorMessage = err.error?.message || 'Too many login attempts. Please try again after 5 minutes.';
                  break;

                case 422:
                  if (err.error?.errors) {
                    const errorText = Object.values(err.error.errors).join(' ');
                    this.errorMessage = this.sanitizer.sanitize(1, errorText) || 'Validation failed.';
                  } else {
                    this.errorMessage = err.error?.message || 'Validation failed.';
                  }
                  break;

                default:
                  this.errorMessage = err.error?.message || 'Something went wrong. Please try again.';
              }
            } catch (uiError) {
              console.error('Login error-handling failed unexpectedly', uiError);
              this.errorMessage = 'Something went wrong. Please try again.';
            }
          }
        });
    }
  }


}
