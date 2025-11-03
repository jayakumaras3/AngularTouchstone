import { Component } from '@angular/core';
import { CoreService } from '../../../services/core.service';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material.module';
import { BrandingComponent } from '../../../layouts/full/vertical/sidebar/branding.component';
import { AuthService } from '../../../services/login/auth.service';
import { LoginUrl } from '../../../config';
import { baseUrlPath } from '../../../config';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FooterComponent } from '../../front-pages/footer/footer.component';


@Component({
  selector: 'app-side-forgot-password',
   imports: [
     RouterModule, 
     MaterialModule, 
     FormsModule, 
     ReactiveFormsModule, 
     BrandingComponent,
     MatButtonModule,  
     MatProgressSpinnerModule,
     FooterComponent
   ],
  templateUrl: './side-forgot-password.component.html',
})
export class AppSideForgotPasswordComponent {
  baseUrlPath = baseUrlPath;
  options;

  constructor(private settings: CoreService, private router: Router, private authService: AuthService) {
    this.options = this.settings.getOptions();
  }

  // Define the form with just the email field
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  // Getter for form controls
  get f() {
    return this.form.controls;
  }

   loading = false; // Tracks loading state

submit() {
  if (this.form.valid) {
    const email = this.form.value.email ?? '';
    this.loading = true; // Show loading state and disable button

    this.authService.forgotPassword(email).subscribe({
      next: (res) => {
        console.log('Password Reset Response:', res);
        if (res.success) {
          alert('Password reset link has been sent to your email.');
          this.router.navigate(['/login']);
        } else {
          alert(res.message || 'Failed to send reset link');
        }
      },
      error: (err) => {
        console.error('HTTP Error:', err);
        alert('Server error, please try again later.');
      },
      complete: () => {
        this.loading = false; // Hide loading state and re-enable button
      },
    });
  }
}





}
