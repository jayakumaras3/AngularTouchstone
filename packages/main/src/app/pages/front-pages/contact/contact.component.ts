import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { AuthService } from '../../../services/login/auth.service';
import { baseUrlPathslash } from '../../../config';
import { FooterComponent } from '../footer/footer.component';

import { IconModule } from '../../../icon/icon.module';
import { MaterialModule } from '../../../material.module';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatDividerModule,
    MaterialModule,
    IconModule,
    FooterComponent
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  form: FormGroup;
  backgroundStyle: any;

   constructor(private fb: FormBuilder, private authService: AuthService) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      enquiry: ['Partnership', Validators.required],
      comment: ['']
    });
  }

  ngOnInit() {
    this.setBackground();
  }

  setBackground() {
    this.backgroundStyle = {
      'background-image': `url('${baseUrlPathslash}/assets/images/backgrounds/profilebg.png')`,
      'background-size': 'cover',
      'background-position': 'center',
      'background-repeat': 'no-repeat'
    };
  }

 submit() {
    if (this.form.valid) {
      this.authService.sendProductEnquiry(this.form.value).subscribe({
        next: (res) => {
          if (res.success) {
            alert('✅ Product enquiry submitted successfully!');
            this.form.reset();
          } else {
            alert(res.message || 'Failed to submit enquiry.');
          }
        },
        error: (err) => {
          console.error('HTTP Error:', err);
          alert('Server error. Check console for details.');
        }
      });
    }
  }
}
