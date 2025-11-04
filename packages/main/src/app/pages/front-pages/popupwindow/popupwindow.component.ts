import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/login/auth.service';

@Component({
  selector: 'app-popupwindow',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './popupwindow.component.html',
  styleUrls: ['./popupwindow.component.scss'],
})
export class PopupwindowComponent {
  form: FormGroup;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<PopupwindowComponent>,
    private authService: AuthService
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      company: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      city: ['', Validators.required],
      message: [''],
    });
  }

  onSubmit() {
    if (this.form.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      console.log('Submitting contact form:', this.form.value);

      this.authService.sendContact(this.form.value).subscribe({
        next: (res: any) => {
          console.log('Response:', res);

          if (res.success) {
            alert(res.message || '✅ Message sent successfully!');
            this.dialogRef.close(res);
            this.form.reset();
          } else {
            alert(res.message || '❌ Submission failed');
          }
        },
        error: (err) => {
          console.error('HTTP Error:', err);
          alert('Server error. Please check the console.');
        },
        complete: () => {
          this.isSubmitting = false;
        },
      });
    } else if (!this.form.valid) {
      alert('⚠️ Please fill all required fields');
    }
  }
}
