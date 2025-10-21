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
    MatDialogModule,   // ✅ Required for mat-dialog-* elements
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './popupwindow.component.html',
  styleUrls: ['./popupwindow.component.scss']
})
export class PopupwindowComponent {
  form: FormGroup;

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
      message: ['']
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Submitting contact form:', this.form.value);

      this.authService.sendContact(this.form.value).subscribe({
        next: (res: any) => {
          console.log('Response:', res);

          if (res.success) {
            alert(res.message || '✅ Message sent successfully!');
            this.dialogRef.close(res);
          } else {
            alert(res.message || '❌ Submission failed');
          }
        },
        error: (err) => {
          console.error('HTTP Error:', err);
          alert('Server error. Please check the console.');
        },
      });
    } else {
      alert('⚠️ Please fill all required fields');
    }
  }
}