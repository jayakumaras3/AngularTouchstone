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
baseUrlpath:string="DOCHEKDOTCOM/app/Views/angular_view/";
  constructor(private authservice:AuthService, private router: Router) { }

  form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  get f() {
    return this.form.controls;
  }

submit() {
  if (this.form.valid) {
    this.authservice.login(this.form.value.username!, this.form.value.password!)
      .subscribe({
        next: res => {
          console.log('Login Response:', res);
          if (res.success) {
            // Save user in localStorage if needed
            localStorage.setItem('user', JSON.stringify(res.user));
            
            // Redirect to the URL from response
            if (res.redirect_url) {
              window.location.href = res.redirect_url;
            } else {
              // Fallback to default route if no redirect_url provided
            //  this.router.navigate(['/dashboards/dashboard1']);
            console.log("jk error");
            }
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
