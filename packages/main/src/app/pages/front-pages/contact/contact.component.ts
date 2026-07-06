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
import { TurnstileService, TurnstileFailureReason } from '../../../services/turnstile/turnstile.service';

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
export class ContactComponent implements OnInit, AfterViewInit, OnDestroy {
  form: FormGroup;
  backgroundStyle: any;

  // Cloudflare Turnstile — token kept in memory only (never localStorage/sessionStorage).
  @ViewChild('turnstileContainer') turnstileContainer!: ElementRef<HTMLDivElement>;
  readonly turnstileSiteKey = environment.turnstileSiteKey;
  turnstileToken = '';
  captchaError: string | null = null;
  private turnstileWidgetId: string | null = null;

   constructor(
     private fb: FormBuilder,
     private authService: AuthService,
     private turnstileService: TurnstileService
   ) {
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

  ngAfterViewInit(): void {
    this.turnstileService
      .render(this.turnstileContainer.nativeElement, {
        sitekey: this.turnstileSiteKey,
        theme: 'auto',
        size: 'flexible',
        onVerify: (token) => {
          this.turnstileToken = token;
          this.captchaError = null;
        },
        onFailure: (reason) => this.handleCaptchaFailure(reason),
      })
      .then((widgetId) => {
        this.turnstileWidgetId = widgetId;
      });
  }

  ngOnDestroy(): void {
    this.turnstileService.remove(this.turnstileWidgetId);
  }

  private handleCaptchaFailure(reason: TurnstileFailureReason): void {
    this.turnstileToken = '';

    if (reason === 'expired') {
      this.captchaError = 'Please complete CAPTCHA verification.';
    } else if (reason === 'network') {
      this.captchaError = 'Unable to verify CAPTCHA. Please try again.';
    } else {
      this.captchaError = 'CAPTCHA verification failed.';
      this.resetTurnstile();
    }
  }

  /** Turnstile tokens are single-use — force re-verification after any failed attempt. */
  private resetTurnstile(): void {
    this.turnstileToken = '';
    this.turnstileService.reset(this.turnstileWidgetId);
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
  if (this.form.valid && !this.isSubmitting) {

    if (!this.turnstileToken) {
      this.captchaError = 'Please complete CAPTCHA verification.';
      return;
    }

    this.isSubmitting = true; // disable button immediately

    this.authService.sendProductEnquiry({ ...this.form.value, turnstileToken: this.turnstileToken }).subscribe({
      next: (res) => {
        if (res.success) {
          alert('✅ Product enquiry submitted successfully!');
          this.form.reset();
          this.resetTurnstile();
        } else {
          alert(res.message || 'Failed to submit enquiry.');
          this.resetTurnstile();
        }
      },
      error: (err) => {
        console.error('HTTP Error:', err);
        alert('Server error. Check console for details.');
        this.resetTurnstile();
      },
      complete: () => {
        this.isSubmitting = false; // re-enable button after response
      }
    });
  }
}

}
