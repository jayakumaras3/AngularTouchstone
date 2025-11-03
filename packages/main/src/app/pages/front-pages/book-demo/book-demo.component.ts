import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/login/auth.service';

@Component({
  selector: 'app-book-demo',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  template: `
    <div class="popup-container p-4">
      <h2 class="text-center mb-4">Get in Touch</h2>
      <form [formGroup]="form" (ngSubmit)="onSubmit()" class="demo-form">
        <mat-form-field appearance="outline" class="w-100 mb-3">
          <mat-label>Name</mat-label>
          <input matInput formControlName="name" required>
        </mat-form-field>

        <mat-form-field appearance="outline" class="w-100 mb-3">
          <mat-label>Company</mat-label>
          <input matInput formControlName="company" required>
        </mat-form-field>

        <mat-form-field appearance="outline" class="w-100 mb-3">
          <mat-label>Email</mat-label>
          <input matInput formControlName="email" required type="email">
        </mat-form-field>

        <mat-form-field appearance="outline" class="w-100 mb-3">
          <mat-label>City</mat-label>
          <input matInput formControlName="city" required>
        </mat-form-field>

        <mat-form-field appearance="outline" class="w-100 mb-3">
          <mat-label>Message (Optional)</mat-label>
          <textarea matInput formControlName="message" rows="3"></textarea>
        </mat-form-field>

        <div class="d-flex justify-content-between mt-4">
          <button mat-button type="button" (click)="onCancel()">Cancel</button>
          <button mat-flat-button color="primary" type="submit" [disabled]="!form.valid || isSubmitting">
            Submit
          </button>
        </div>
      </form>
    </div>
  `,
  styles: [`
    .popup-container {
      max-width: 500px;
      margin: 0 auto;
      padding: 20px;
    }
    .demo-form {
      display: flex;
      flex-direction: column;
    }
    mat-form-field {
      width: 100%;
    }
  `]
})
export class BookDemoComponent {
  form: FormGroup;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      company: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      city: ['', Validators.required],
      message: ['']
    });
  }

  onSubmit() {
    if (this.form.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      console.log('Submitting contact form:', this.form.value);

      this.authService.sendContact(this.form.value).subscribe({
        next: (res: any) => {
          console.log('Response:', res);
          window.close(); // Close the popup window on success
        },
        error: (error: any) => {
          console.error('Error:', error);
          this.isSubmitting = false;
        }
      });
    }
  }

  onCancel() {
    window.close();
  }
}