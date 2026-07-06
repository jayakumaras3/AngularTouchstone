import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/login/auth.service';
import { NoCodeInputDirective } from '../../../directives/no-code-input.directive';
import { environment } from '../../../../environments/environment';
import { TurnstileService, TurnstileFailureReason } from '../../../services/turnstile/turnstile.service';

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
    NoCodeInputDirective,
  ],
  templateUrl: './popupwindow.component.html',
  styleUrls: ['./popupwindow.component.scss'],
})
export class PopupwindowComponent implements AfterViewInit, OnDestroy {
  form: FormGroup;
  isSubmitting = false;
statusMessage: string | null = null;
statusType: 'success' | 'error' | null = null;

  // Cloudflare Turnstile — token kept in memory only (never localStorage/sessionStorage).
  @ViewChild('turnstileContainer') turnstileContainer!: ElementRef<HTMLDivElement>;
  readonly turnstileSiteKey = environment.turnstileSiteKey;
  turnstileToken = '';
  captchaError: string | null = null;
  private turnstileWidgetId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<PopupwindowComponent>,
    private authService: AuthService,
    private turnstileService: TurnstileService
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      company: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      city: ['', Validators.required],
      phone: [''],
      message: [''],
    });
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

      onSubmit() {
      if (this.form.valid && !this.isSubmitting) {

        if (!this.turnstileToken) {
          this.captchaError = 'Please complete CAPTCHA verification.';
          return;
        }

        this.isSubmitting = true;

        this.authService.sendContact({ ...this.form.value, turnstileToken: this.turnstileToken }).subscribe({
          next: (res: any) => {
            if (res.success) {

              this.statusMessage = res.message || 'Message sent successfully!';
              this.statusType = 'success';

              // Auto-close dialog after 3 sec
              setTimeout(() => {
                this.dialogRef.close(res);
              }, 3000);

              this.form.reset();
              this.resetTurnstile();

            } else {
              this.statusMessage = res.message || 'Submission failed';
              this.statusType = 'error';
              this.resetTurnstile();
            }
          },

          error: (err) => {
            console.error('HTTP Error:', err);

            this.statusMessage = 'Server error. Please try again.';
            this.statusType = 'error';
            this.resetTurnstile();
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
