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
statusMessage: string | null = null;
statusType: 'success' | 'error' | null = null;

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

        this.authService.sendContact(this.form.value).subscribe({
          next: (res: any) => {
            if (res.success) {

              this.statusMessage = res.message || 'Message sent successfully!';
              this.statusType = 'success';

              // Auto-close dialog after 3 sec
              setTimeout(() => {
                this.dialogRef.close(res);
              }, 3000);

              this.form.reset();

            } else {
              this.statusMessage = res.message || 'Submission failed';
              this.statusType = 'error';
            }
          },

          error: (err) => {
            console.error('HTTP Error:', err);

            this.statusMessage = 'Server error. Please try again.';
            this.statusType = 'error';
          },

          complete: () => {
            this.isSubmitting = false;

            // Hide error message after 4 sec
            setTimeout(() => {
              this.statusMessage = null;
            }, 4000);
          },
        });

      } else {
        this.statusMessage = '⚠️ Please fill all required fields';
        this.statusType = 'error';

        setTimeout(() => this.statusMessage = null, 3000);
      }
    }

}
