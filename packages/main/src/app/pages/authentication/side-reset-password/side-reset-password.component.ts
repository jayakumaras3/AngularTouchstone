import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { CoreService } from '../../../services/core.service';
import { AuthService } from '../../../services/login/auth.service';
import { LoginUrl } from '../../../config';
import { MaterialModule } from '../../../material.module';
import { FooterComponent } from '../../front-pages/footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-reset-password',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    FooterComponent
  ],
  templateUrl: './side-reset-password.component.html',
  styleUrl: './side-reset-password.component.scss'
})
export class AppSideResetPasswordComponent implements OnInit {
  baseUrlpath: string = LoginUrl;
  token: string = '';
  loading: boolean = false;
  submitting: boolean = false;
  tokenValid: boolean = false;
  tokenExpired: boolean = false;
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  successMessage: string = '';
  errorMessage: string = '';

  options: any;

  constructor(
    private settings: CoreService,
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {
    this.options = this.settings.getOptions();
  }

  private passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.parent?.get('password');
    const confirmPassword = control;

    if (!password || !confirmPassword) {
      return null;
    }

    return password.value === confirmPassword.value ? null : { passwordMismatch: true };
  }

  form = new FormGroup({
    password: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/)
    ]),
    confirmPassword: new FormControl<string>('', [
      Validators.required,
      this.passwordMatchValidator.bind(this)
    ]),
  });

  get f() {
    return this.form.controls;
  }

  ngOnInit(): void {
    // Read token from query param: ?token=...
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
      if (this.token) {
        this.verifyToken();
      } else {
        this.tokenExpired = true;
        this.errorMessage = 'No reset token provided. Please request a new password reset link.';
      }
    });
  }

  verifyToken(): void {
    this.loading = true;
    this.errorMessage = '';
    
    console.log('Verifying token:', this.token);
    
    this.authService.verifyResetToken(this.token).subscribe({
      next: (res) => {
        console.log('Token verification response:', res);
        
        // Check for success: status can be true (boolean) or 'valid' (string)
        if (res && (res.status === true || res.status === 'valid' || res.success === true)) {
          this.tokenValid = true;
          this.tokenExpired = false;
          this.errorMessage = '';
          console.log('Token is valid');
        } else {
          this.tokenExpired = true;
          this.tokenValid = false;
          this.errorMessage = res?.message || 'Reset link has expired or is invalid. Please request a new password reset.';
          console.warn('Token validation failed:', this.errorMessage);
        }
      },
      error: (err) => {
        this.tokenExpired = true;
        this.tokenValid = false;
        
        // Extract error message from response
        let errorMsg = 'Unable to verify reset link. Please request a new password reset.';
        if (err?.error?.message) {
          errorMsg = err.error.message;
        } else if (err?.message) {
          errorMsg = err.message;
        }
        
        this.errorMessage = errorMsg;
        console.error('Token verification error:', err);
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  submit(): void {
    if (this.form.valid && this.token && !this.submitting) {
      const password = this.form.value.password ?? '';
      this.submitting = true;
      this.successMessage = '';
      this.errorMessage = '';

      console.log('Submitting password reset with token:', this.token.substring(0, 10) + '...');

      this.authService.resetPassword(this.token, password).subscribe({
        next: (res) => {
          console.log('Reset password response:', res);
          
          // Check for success: status can be true (boolean), 'success' or 'true' (string)
          if (res && (res.status === true || res.status === 'success' || res.success === true)) {
            this.successMessage = 'Password reset successful! Redirecting to login...';
            setTimeout(() => {
              this.router.navigate(['/authentication/login']);
            }, 2000);
          } else {
            this.errorMessage = res?.message || 'Failed to reset password. Please try again.';
            console.warn('Password reset failed:', this.errorMessage);
          }
        },
        error: (err) => {
          console.error('Reset error:', err);
          
          let errorMsg = 'Server error. Please try again later.';
          if (err?.error?.message) {
            errorMsg = err.error.message;
          } else if (err?.message) {
            errorMsg = err.message;
          }
          
          this.errorMessage = errorMsg;
        },
        complete: () => {
          this.submitting = false;
        }
      });
    }
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  passwordsMatch(): boolean {
    const password = this.form.get('password');
    const confirmPassword = this.form.get('confirmPassword');
    if (!password || !confirmPassword) {
      return false;
    }
    return password.value === confirmPassword.value;
  }
}
