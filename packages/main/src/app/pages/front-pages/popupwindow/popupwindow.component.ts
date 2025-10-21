import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-popupwindow',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './popupwindow.component.html',
  styleUrls: ['./popupwindow.component.scss']
})
export class PopupwindowComponent {
  form: FormGroup;

  // ✅ Use your CodeIgniter controller route here (not a PHP file directly)
  private apiUrl = 'http://172.16.0.99/DOCHEKDOTCOM/landing/contact_us';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private dialogRef: MatDialogRef<PopupwindowComponent>
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
  if (this.form.invalid) {
    this.form.markAllAsTouched();
    return;
  }

  const formData = this.form.value;

  // ✅ Important: tell backend it's JSON
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  this.http.post(this.apiUrl, JSON.stringify(formData), { headers }).subscribe({
    next: (response: any) => {
      console.log('✅ Response:', response);
      if (response.success) {
        alert('✅ Your message has been sent successfully!');
        this.dialogRef.close(response);
      } else {
        alert('⚠️ ' + response.message);
      }
    },
    error: (error) => {
      console.error('❌ Error:', error);
      alert('Something went wrong. Please try again later.');
    }
  });
}
}
