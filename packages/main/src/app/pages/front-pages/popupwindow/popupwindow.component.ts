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
import { noWhitespaceValidator, trimFormGroupValues } from '../../../shared/validators/no-whitespace.validator';
import { emailFormatValidator } from '../../../shared/validators/email.validator';
import { FieldErrorPipe } from '../../../shared/validators/field-error.pipe';
import { minimumMeaningfulCharacters } from '../../../shared/validators/minimum-meaningful-characters.validator';
import { RequiredFieldsNoteComponent } from '../../../shared/required-fields-note/required-fields-note.component';
import { MessageFieldStatusComponent } from '../../../shared/message-field-status/message-field-status.component';

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
    RequiredFieldsNoteComponent,
    MessageFieldStatusComponent,
    FieldErrorPipe,
  ],
  templateUrl: './popupwindow.component.html',
  styleUrls: ['./popupwindow.component.scss'],
})
export class PopupwindowComponent implements AfterViewInit, OnDestroy {
  form: FormGroup;
  isSubmitting = false;
statusMessage: string | null = null;
statusType: 'success' | 'error' | null = null;

  // Cloudflare Turnstile — same explicit-render pattern used in SignupComponent.
  @ViewChild('turnstileContainer') private turnstileContainer!: ElementRef;
  private turnstileWidgetId: string | null = null;
  private readonly turnstileSiteKey = environment.turnstileSiteKey;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<PopupwindowComponent>,
    private authService: AuthService
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required, noWhitespaceValidator()]],
      company: ['', [Validators.required, noWhitespaceValidator()]],
      email: ['', [Validators.required, emailFormatValidator(), noWhitespaceValidator()]],
      city: ['', [Validators.required, noWhitespaceValidator()]],
      phone: [''],
      message: ['', [Validators.required, noWhitespaceValidator(), minimumMeaningfulCharacters(20)]],
      captchaVerified: [false, Validators.requiredTrue],
    });
  }

  get f() {
    return this.form.controls;
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

      onSubmit() {
      trimFormGroupValues(this.form);
      this.form.markAllAsTouched();

      if (this.form.valid && !this.isSubmitting) {
        this.isSubmitting = true;

        const { name, company, email, city, phone, message } = this.form.value;

        this.authService.sendContact({ name, company, email, city, phone, message }).subscribe({
          next: (res: any) => {
            if (res.success) {

              this.statusMessage = res.message || 'Message sent successfully!';
              this.statusType = 'success';

              // Auto-close dialog after 3 sec
              setTimeout(() => {
                this.dialogRef.close(res);
              }, 3000);

              this.form.reset();
              if (this.turnstileWidgetId !== null && (window as any).turnstile) {
                (window as any).turnstile.reset(this.turnstileWidgetId);
              }

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
