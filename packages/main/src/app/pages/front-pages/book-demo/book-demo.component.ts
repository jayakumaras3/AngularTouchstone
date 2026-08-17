import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/login/auth.service';
import { noWhitespaceValidator, trimFormGroupValues } from '../../../shared/validators/no-whitespace.validator';
import { emailFormatValidator } from '../../../shared/validators/email.validator';
import { FieldErrorPipe } from '../../../shared/validators/field-error.pipe';
import { minimumMeaningfulCharacters } from '../../../shared/validators/minimum-meaningful-characters.validator';
import { RequiredFieldsNoteComponent } from '../../../shared/required-fields-note/required-fields-note.component';
import { MessageFieldStatusComponent } from '../../../shared/message-field-status/message-field-status.component';

@Component({
  selector: 'app-book-demo',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RequiredFieldsNoteComponent,
    MessageFieldStatusComponent,
    FieldErrorPipe
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
          @if (form.get('email')!.errors | fieldError; as message) {
            <mat-error>{{ message }}</mat-error>
          }
        </mat-form-field>

        <mat-form-field appearance="outline" class="w-100 mb-3">
          <mat-label>City</mat-label>
          <input matInput formControlName="city" required>
        </mat-form-field>

        <mat-form-field appearance="outline" class="w-100 hide-hint">
          <mat-label>Message</mat-label>
          <textarea matInput formControlName="message" rows="3"></textarea>
        </mat-form-field>
        <app-message-field-status [control]="form.get('message')!" [min]="20"></app-message-field-status>

        @if (submitError) {
          <p class="text-error f-s-14 m-b-0" role="alert" aria-live="assertive">{{ submitError }}</p>
        }

        <div class="d-flex justify-content-between mt-4">
          <button mat-button type="button" (click)="onCancel()">Cancel</button>
          <button mat-flat-button color="primary" type="submit" [disabled]="isSubmitting">
            Submit
          </button>
        </div>
        <app-required-fields-note></app-required-fields-note>
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
  submitError: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required, noWhitespaceValidator()]],
      company: ['', [Validators.required, noWhitespaceValidator()]],
      email: ['', [Validators.required, emailFormatValidator(), noWhitespaceValidator()]],
      city: ['', [Validators.required, noWhitespaceValidator()]],
      message: ['', [Validators.required, noWhitespaceValidator(), minimumMeaningfulCharacters(20)]]
    });
  }

  onSubmit() {
    trimFormGroupValues(this.form);

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    if (!this.isSubmitting) {
      this.isSubmitting = true;
      console.log('Submitting contact form:', this.form.value);

      this.authService.sendContact(this.form.value).subscribe({
        next: (res: any) => {
          this.isSubmitting = false;
          // The endpoint answers HTTP 200 with { success: false } for a rejected
          // email or an SMTP failure. Treating that as success left the button
          // stuck disabled with no message — window.close() is a no-op here,
          // because this is a routed page, not a popup.
          if (res?.success === false) {
            this.submitError = res?.message || 'Something went wrong. Please try again.';
            return;
          }
          window.close();
        },
        error: (error: any) => {
          console.error('Error:', error);
          this.isSubmitting = false;
          this.submitError = 'Something went wrong. Please try again.';
        }
      });
    }
  }

  onCancel() {
    window.close();
  }
}