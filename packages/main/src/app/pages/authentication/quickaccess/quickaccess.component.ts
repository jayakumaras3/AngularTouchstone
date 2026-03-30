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

  /** Numeric demo ID from the route parameter (/authentication/quickaccess/:id) */
  demoId: string = '';

  /** Set when the :id param is structurally invalid */
  idError: string = '';

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
    // Read demo ID from route segment first, then query params for backward compatibility.
    // Supports:
    //  - /authentication/quickaccess/44272
    //  - /authentication/quickaccess?demoid=44272
    //  - /authentication/quickaccess?id=44272
    const id =
      this.route.snapshot.paramMap.get('id') ||
      this.route.snapshot.queryParamMap.get('demoid') ||
      this.route.snapshot.queryParamMap.get('id') ||
      '';

    if (/^\d+$/.test(id) && parseInt(id, 10) > 0) {
      this.demoId = id;
    } else {
      this.idError = 'Invalid or missing access link. Please use the original demo link.';
    }
  }

  get f() {
    return this.form.controls;
  }

  submit(): void {
    this.submitted = true;

    if (this.form.invalid || !this.demoId) {
      return;
    }

    this.loading = true;
    this.errorMessage = '';
    const password = this.form.get('password')?.value;

    this.authService
      .quickAccessAuthenticate(this.demoId, password)
      .subscribe(
        (response: any) => {
          this.loading = false;
          if (response.success) {
            this.successMessage = response.message || 'Login successful!';

            if (response.user) {
              sessionStorage.setItem('userId', response.user.id_user);
              sessionStorage.setItem('userName', response.user.name);
            }

            // Hard-navigate so CodeIgniter session cookie is sent correctly
            setTimeout(() => {
              window.location.href = response.redirectUrl || '/';
            }, 1000);
          } else {
            this.errorMessage = response.message || 'Login failed. Please try again.';
          }
        },
        (error: any) => {
          this.loading = false;
          const msg = error?.error?.message || '';
          const debug = error?.error?.debug;
          
          // ✅ Log debug info to browser console for troubleshooting
          if (debug) {
            console.log('🔍 Quickaccess Debug Info:', debug);
          }
          
          // Link-level errors (expired / invalid demo ID) → hide the form
          if (error?.status === 401 && msg.toLowerCase().includes('link')) {
            this.idError = msg;
            this.demoId = '';  // clear so form disappears
          } else {
            this.errorMessage = msg || 'An error occurred. Please try again.';
          }
        }
      );
  }
}
