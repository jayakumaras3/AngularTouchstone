import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popupwindow',
  imports: [CommonModule,
    ReactiveFormsModule,
    MatDialogModule,   // ✅ Add this
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule],
  templateUrl: './popupwindow.component.html',
  styleUrl: './popupwindow.component.scss'
})
export class PopupwindowComponent {
form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<PopupwindowComponent>
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      company: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contact: [''],
      city: ['', Validators.required],
      message: ['']
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted:', this.form.value);
      this.dialogRef.close(this.form.value);
    }
  }
}