import { Component } from '@angular/core';
//import { CoreService } from 'src/app/services/core.service';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material.module';
import { BrandingComponent } from '../../../layouts/full/vertical/sidebar/branding.component';
import { AuthService } from '../../../services/login/auth.service';

@Component({
    selector: 'app-side-login',
    imports: [RouterModule, MaterialModule, FormsModule, ReactiveFormsModule, BrandingComponent],
    templateUrl: './side-login.component.html'
})
export class AppSideLoginComponent {
//  options = this.settings.getOptions();

  constructor(private authservice:AuthService, private router: Router) { }

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  get f() {
    return this.form.controls;
  }

submit() {
  if (this.form.valid) {
    this.authservice.login(this.form.value.email!, this.form.value.password!)
      .subscribe({
        next: res => {
          console.log('Login Response:', res);
          if (res.success) {
            localStorage.setItem('token', res.token);
            this.router.navigate(['/dashboards/dashboard1']);
          } else {
            alert(res.message || 'Login failed');
          }
        },
        error: err => {
          console.error('HTTP Error:', err);
          alert('Server error, check console for details');
        }
      });
  }
}

}
