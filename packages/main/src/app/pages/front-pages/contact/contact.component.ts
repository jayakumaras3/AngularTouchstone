import { Component, OnInit, AfterViewInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
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
import { environment } from '../../../../environments/environment';
import { noWhitespaceValidator, trimFormGroupValues } from '../../../shared/validators/no-whitespace.validator';
import { minimumMeaningfulCharacters } from '../../../shared/validators/minimum-meaningful-characters.validator';
import { RequiredFieldsNoteComponent } from '../../../shared/required-fields-note/required-fields-note.component';

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
    FooterComponent,
    RequiredFieldsNoteComponent
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterViewInit, OnDestroy {
  form: FormGroup;
  backgroundStyle: any;

  // Cloudflare Turnstile — same explicit-render pattern used in SignupComponent.
  @ViewChild('turnstileContainer') private turnstileContainer!: ElementRef;
  private turnstileWidgetId: string | null = null;
  private readonly turnstileSiteKey = environment.turnstileSiteKey;

   constructor(private fb: FormBuilder, private authService: AuthService) {
    this.form = this.fb.group({
      firstName: ['', [Validators.required, noWhitespaceValidator()]],
      lastName: ['', [Validators.required, noWhitespaceValidator()]],
      email: ['', [Validators.required, Validators.email, noWhitespaceValidator()]],
      enquiry: ['Partnership', Validators.required],
      comment: ['', [Validators.required, noWhitespaceValidator(), minimumMeaningfulCharacters(30)]],
      captchaVerified: [false, Validators.requiredTrue],
    });
  }

  get f() {
    return this.form.controls;
  }

  ngOnInit() {
    this.setBackground();
  }

  ngAfterViewInit(): void {
    this.waitForTurnstile();
  }

  private waitForTurnstile(attempts = 0): void {
    const turnstile = (window as any).turnstile;
    if (turnstile) {
      this.turnstileWidgetId = turnstile.render(this.turnstileContainer.nativeElement, {
        sitekey: this.turnstileSiteKey,
        theme: 'auto',
        callback: () => {
          this.form.patchValue({ captchaVerified: true });
        },
        'expired-callback': () => {
          this.form.patchValue({ captchaVerified: false });
        },
      });
    } else if (attempts < 30) {
      setTimeout(() => this.waitForTurnstile(attempts + 1), 200);
    }
  }

  ngOnDestroy(): void {
    if (this.turnstileWidgetId !== null && (window as any).turnstile) {
      (window as any).turnstile.remove(this.turnstileWidgetId);
    }
  }


setBackground() {
  this.backgroundStyle = {
    'background-image': `url('${baseUrlPathslash}/assets/images/backgrounds/profilebg.png')`,
    'background-size': 'contain',   // ensures full image visible
    'background-position': 'center',
    'background-repeat': 'no-repeat',

    'height': '100%',
    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'center'
  };
}


isSubmitting = false; // track submission state

submit() {
  trimFormGroupValues(this.form);
  this.form.markAllAsTouched();

  if (this.form.valid && !this.isSubmitting) {
    this.isSubmitting = true; // disable button immediately

    const { firstName, lastName, email, enquiry, comment } = this.form.value;

    this.authService.sendProductEnquiry({ firstName, lastName, email, enquiry, comment }).subscribe({
      next: (res) => {
        if (res.success) {
          alert('✅ Product enquiry submitted successfully!');
          this.form.reset();
          if (this.turnstileWidgetId !== null && (window as any).turnstile) {
            (window as any).turnstile.reset(this.turnstileWidgetId);
          }
        } else {
          alert(res.message || 'Failed to submit enquiry.');
        }
      },
      error: (err) => {
        console.error('HTTP Error:', err);
        alert('Server error. Check console for details.');
      },
      complete: () => {
        this.isSubmitting = false; // re-enable button after response
      }
    });
  }
}

}
