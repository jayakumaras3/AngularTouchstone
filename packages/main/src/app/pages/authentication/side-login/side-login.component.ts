import { Component } from '@angular/core';
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
    imports: [RouterModule,FooterComponent, MaterialModule, FormsModule, ReactiveFormsModule, BrandingComponent],
    templateUrl: './side-login.component.html'
})
export class AppSideLoginComponent {
//  options = this.settings.getOptions();
//baseUrlpath:string="DOCHEKDOTCOM/app/Views/angular_view/";
baseUrlpath:string=LoginUrl;
  constructor(private authservice:AuthService, private router: Router) { }

  form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(0)])
  });

  get f() {
    return this.form.controls;
  }
   isActiveRoute(route: string): boolean {
    return this.router.url.includes(`/front-pages/${route}`);
  }
  isSubmitting = false; // Add this property

  submit() {
    if (this.form.valid && !this.isSubmitting) {
      this.isSubmitting = true; // Disable button

      this.authservice.login(this.form.value.username!, this.form.value.password!)
        .subscribe({
          next: res => {
            console.log('Login Response:', res);
            this.isSubmitting = false; // Re-enable button

            if (res.success) {
              localStorage.setItem('user', JSON.stringify(res.user));

              if (res.redirect_url) {
                window.location.href = res.redirect_url;
              } else {
                console.log("error redirect");
                // this.router.navigate(['/dashboards/dashboard1']);
              }
            } else {
              alert(res.message || 'Login failed');
            }
          },
          error: err => {
            console.error('HTTP Error:', err);
            alert('Server error, check console for details');
            this.isSubmitting = false; // Re-enable button even on error
          }
        });
    }
  }


}
