import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { MaterialModule } from '../../../material.module';
import { AuthService } from '../../../services/login/auth.service';

@Component({
  selector: 'app-quickaccess',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './quickaccess.component.html',
  styleUrls: ['./quickaccess.component.scss'],
})
export class QuickAccessComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;
  username: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = new FormGroup({
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    // Get username from route params or query params
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'] || '';
      if (!this.username) {
        this.errorMessage = 'Username not provided. Invalid access link.';
      }
    });
  }

  get f() {
    return this.form.controls;
  }

  submit(): void {
    this.submitted = true;

    if (this.form.invalid || !this.username) {
      return;
    }

    this.loading = true;
    const password = this.form.get('password')?.value;

    this.authService
      .quickAccessLogin(this.username, password)
      .subscribe(
        (response: any) => {
          this.loading = false;
          if (response.success) {
            this.successMessage = response.message || 'Login successful!';
            
            // Store session/token if provided
            if (response.user) {
              sessionStorage.setItem('userId', response.user.id_user);
              sessionStorage.setItem('username', response.user.username);
              sessionStorage.setItem('userName', response.user.name);
            }
            
            // Redirect to the URL provided by backend, or dashboard
            setTimeout(() => {
              if (response.redirectUrl) {
                // If backend provides redirect URL, use it
                window.location.href = response.redirectUrl;
              } else {
                // Otherwise navigate to dashboard
                this.router.navigate(['/dashboards/dashboard1']);
              }
            }, 1500);
          } else {
            this.errorMessage = response.message || 'Login failed. Please try again.';
          }
        },
        (error: any) => {
          this.loading = false;
          this.errorMessage =
            error?.error?.message || 'An error occurred. Please try again.';
        }
      );
  }
}
