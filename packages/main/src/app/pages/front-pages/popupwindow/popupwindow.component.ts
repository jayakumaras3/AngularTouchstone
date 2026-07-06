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
      name: ['', Validators.required],
      company: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      city: ['', Validators.required],
      phone: [''],
      message: [''],
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
