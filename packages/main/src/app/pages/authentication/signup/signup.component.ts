import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  ViewChild,
  signal,
  inject
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material.module';
import { FooterComponent } from '../../front-pages/footer/footer.component';
import { LoginUrl } from '../../../config';
import { Subscription } from 'rxjs';
import { CertificationSignupState } from '../../front-pages/certifications/certifications.model';
import { AuthService } from '../../../services/login/auth.service';

const TURNSTILE_SITE_KEY = '0x4AAAAAADh_GIYrBeeJ7VaM';

function passwordStrengthValidator(control: AbstractControl): ValidationErrors | null {
  const v: string = control.value ?? '';
  if (!v) return null;
  const errors: ValidationErrors = {};
  if (v.length < 8) errors['minLength'] = true;
  if (!/[A-Z]/.test(v)) errors['uppercase'] = true;
  if (!/[a-z]/.test(v)) errors['lowercase'] = true;
  if (!/[0-9]/.test(v)) errors['number'] = true;
  if (!/[!@#$%^&*]/.test(v)) errors['specialChar'] = true;
  return Object.keys(errors).length ? errors : null;
}

function matchFieldValidator(matchTo: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const sibling = control.parent?.get(matchTo);
    if (!sibling) return null;
    return control.value && sibling.value && control.value !== sibling.value
      ? { mismatch: true }
      : null;
  };
}

@Component({
  selector: 'app-signup',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FooterComponent
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit, AfterViewInit, OnDestroy {
  readonly baseUrlpath = LoginUrl;

  @ViewChild('turnstileContainer') private turnstileContainer!: ElementRef;
  private turnstileWidgetId: string | null = null;

  readonly showPassword = signal(false);
  readonly showConfirmPassword = signal(false);
  readonly isSubmitting = signal(false);
  readonly errorMessage = signal('');
  readonly successMessage = signal('');
  readonly passwordValue = signal('');

  readonly selectedCertification = signal<CertificationSignupState | null>(null);

  readonly passwordRules = [
    { key: 'minLength',   label: 'Minimum 8 characters',        check: (v: string) => v.length >= 8 },
    { key: 'uppercase',   label: 'One uppercase letter',         check: (v: string) => /[A-Z]/.test(v) },
    { key: 'lowercase',   label: 'One lowercase letter',         check: (v: string) => /[a-z]/.test(v) },
    { key: 'number',      label: 'One number',                   check: (v: string) => /[0-9]/.test(v) },
    { key: 'specialChar', label: 'Special character (!@#$%^&*)', check: (v: string) => /[!@#$%^&*]/.test(v) },
  ] as const;

  private readonly fb = inject(FormBuilder);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);
private readonly subs = new Subscription();

  readonly form = this.fb.group({
    firstName:       ['', [Validators.required, Validators.minLength(2)]],
    lastName:        ['', [Validators.required, Validators.minLength(2)]],
    email:           ['', [Validators.required, Validators.email]],
    confirmEmail:    ['', [Validators.required, Validators.email, matchFieldValidator('email')]],
    password:        ['', [Validators.required, passwordStrengthValidator]],
    confirmPassword: ['', [Validators.required, matchFieldValidator('password')]],
    captchaVerified: [false, Validators.requiredTrue],
  });

  get f() { return this.form.controls; }

  constructor() {
    // Read certification context passed via router navigation state
    const nav = this.router.getCurrentNavigation();
    const certState = nav?.extras?.state?.['certification'] as CertificationSignupState | undefined;
    if (certState) {
      this.selectedCertification.set(certState);
    }

    // Re-validate confirmEmail when email changes
    this.subs.add(
      this.f.email.valueChanges.subscribe(() => {
        this.f.confirmEmail.updateValueAndValidity({ emitEvent: false });
        this.cdr.markForCheck();
      })
    );
    // Update password checklist signal and re-validate confirmPassword when password changes
    this.subs.add(
      this.f.password.valueChanges.subscribe(val => {
        this.passwordValue.set(val ?? '');
        this.f.confirmPassword.updateValueAndValidity({ emitEvent: false });
        this.cdr.markForCheck();
      })
    );
  }

  ngOnInit(): void { /* script loaded via index.html */ }

  ngAfterViewInit(): void {
    this.waitForTurnstile();
  }

  private waitForTurnstile(attempts = 0): void {
    const turnstile = (window as any).turnstile;
    if (turnstile) {
      this.turnstileWidgetId = turnstile.render(this.turnstileContainer.nativeElement, {
        sitekey: TURNSTILE_SITE_KEY,
        theme: 'auto',
        callback: () => {
          this.form.patchValue({ captchaVerified: true });
          this.cdr.markForCheck();
        },
        'expired-callback': () => {
          this.form.patchValue({ captchaVerified: false });
          this.cdr.markForCheck();
        },
      });
    } else if (attempts < 30) {
      setTimeout(() => this.waitForTurnstile(attempts + 1), 200);
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
    if (this.turnstileWidgetId !== null && (window as any).turnstile) {
      (window as any).turnstile.remove(this.turnstileWidgetId);
    }
  }

  togglePassword(): void { this.showPassword.update(v => !v); }
  toggleConfirmPassword(): void { this.showConfirmPassword.update(v => !v); }

  submit(): void {
    this.form.markAllAsTouched();
    this.cdr.markForCheck();
    if (this.form.invalid || this.isSubmitting()) return;

    this.isSubmitting.set(true);
    this.errorMessage.set('');
    this.successMessage.set('');

    const { firstName, lastName, email, confirmEmail, password, confirmPassword } = this.form.value;

    this.subs.add(
      this.authService.register({
        firstName:       firstName!,
        lastName:        lastName!,
        email:           email!,
        confirmEmail:    confirmEmail!,
        password:        password!,
        confirmPassword: confirmPassword!
      }).subscribe({
        next: (res) => {
          this.isSubmitting.set(false);
          this.successMessage.set(res?.message ?? 'Registration successful! Please sign in.');
          this.cdr.markForCheck();
          //setTimeout(() => this.router.navigate(['/authentication/login']), 2500);
        },
        error: (err) => {
          this.isSubmitting.set(false);
          const body = err?.error;
          if (body?.errors) {
            this.errorMessage.set(Object.values(body.errors).join(' '));
          } else {
            this.errorMessage.set(body?.message ?? 'Registration failed. Please try again.');
          }
          this.cdr.markForCheck();
        }
      })
    );
  }
}
