import { Component } from '@angular/core';
//import { CoreService } from 'src/app/services/core.service';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material.module';
import { BrandingComponent } from '../../../layouts/full/vertical/sidebar/branding.component';
import { AuthService } from '../../../services/login/auth.service';
import { emailFormatValidator } from '../../../shared/validators/email.validator';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-side-register',
  imports: [RouterModule, MaterialModule, FormsModule, ReactiveFormsModule, BrandingComponent],
  templateUrl: './side-register.component.html'
})


export class AppSideRegisterComponent {
  //options = this.settings.getOptions();

  constructor(
    private setting: AuthService,
    private router: Router,
    private http: HttpClient
  ) { }

 form = new FormGroup({
  first_name: new FormControl('', [Validators.required]),
  last_name: new FormControl('', [Validators.required]),
  email: new FormControl('', [Validators.required, emailFormatValidator()]),
  password: new FormControl('', [Validators.required]),
});

  get f() {
    return this.form.controls;
  }

  submit_1() {
    if (this.form.invalid) return;

    const userData = this.form.value;

    this.http.post('http://localhost/AngularCRUD_PHP/user/register.php', userData).subscribe({
      next: (res: any) => {
        console.log('Response:', res);
        if (res.success) {
          alert('User registered successfully!');
          this.router.navigate(['/login']);
        } else {
          alert(res.message || 'Registration failed');
        }
      },
      error: (err) => {
        console.error('HTTP Error:', err);
        alert('Server error. Try again later.');
      }
    });

  }
}
