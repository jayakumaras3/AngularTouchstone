import { Component } from '@angular/core';
import { CoreService } from '../../../services/core.service';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material.module';
import { AuthService } from '../../../services/login/auth.service';
import { LoginUrl } from '../../../config';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FooterComponent } from '../../front-pages/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-forgot-password',
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
  templateUrl: './side-forgot-password.component.html',
  styleUrl: './side-forgot-password.component.scss'
})
export class AppSideForgotPasswordComponent {
  baseUrlpath: string = LoginUrl;
  options: any;
  loading: boolean = false;
  successMessage: string = '';
  errorMessage: string = '';
  resetLinkSent: boolean = false;

  constructor(
    private settings: CoreService,
    private router: Router,
    private authService: AuthService
  ) {
    this.options = this.settings.getOptions();
  }

  form = new FormGroup({
    email: new FormControl<string>('', [Validators.required, Validators.email]),
  });

  get f() {
    return this.form.controls;
  }

  submit(): void {
    if (this.form.valid) {
      const email = this.form.value.email ?? '';
      this.loading = true;
      this.errorMessage = '';
      this.successMessage = '';

      this.authService.forgotPassword(email).subscribe({
        next: (res) => {
          console.log('Forgot Password Response:', res);

          // API may return boolean success flags or string status values.
          const isSuccess =
            res?.status === true ||
            res?.success === true ||
            res?.status === 'success' ||
            res?.status === 'ok';

          if (isSuccess) {
            this.resetLinkSent = true;
            this.successMessage = res.message || 'Reset link has been sent to your email. Please check your inbox.';
            this.form.reset();
          } else {
            // Handle specific error responses
            this.errorMessage = res.message || 'Failed to send reset link. Please try again.';
          }
        },
        error: (err) => {
          console.error('Forgot Password Error:', err);
          
          // Handle HTTP error responses
          if (err.error?.message) {
            this.errorMessage = err.error.message;
          } else if (err.status === 404) {
            this.errorMessage = 'Email address not registered.';
          } else if (err.status === 400) {
            this.errorMessage = 'Invalid email address.';
          } else {
            this.errorMessage = 'Server error. Please try again later.';
          }
        },
        complete: () => {
          this.loading = false;
        },
      });
    }
  }

  /**
   * Reset the form and hide success message
   */
  resetForm(): void {
    this.resetLinkSent = false;
    this.successMessage = '';
    this.errorMessage = '';
    this.form.reset();
  }
}
