import { Component, OnInit, AfterViewInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { finalize } from 'rxjs/operators';
import { FormBuilder, FormGroup, FormGroupDirective, Validators, ReactiveFormsModule } from '@angular/forms';
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
import { emailFormatValidator } from '../../../shared/validators/email.validator';
import { FieldErrorPipe } from '../../../shared/validators/field-error.pipe';
import { minimumMeaningfulCharacters } from '../../../shared/validators/minimum-meaningful-characters.validator';
import { RequiredFieldsNoteComponent } from '../../../shared/required-fields-note/required-fields-note.component';
import { MessageFieldStatusComponent } from '../../../shared/message-field-status/message-field-status.component';

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
    RequiredFieldsNoteComponent,
    MessageFieldStatusComponent,
    FieldErrorPipe
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

  // The directive bound to <form [formGroup]>. Needed because the `submitted`
  // flag Material reads when deciding whether to paint a field red lives here,
  // on the directive, and not on the FormGroup — see resetAfterSuccess().
  @ViewChild(FormGroupDirective) private formDirective?: FormGroupDirective;

  /** Pristine control values, captured at construction and restored on success. */
  private readonly initialFormValues: Record<string, unknown>;

   constructor(private fb: FormBuilder, private authService: AuthService) {
    this.form = this.fb.group({
      firstName: ['', [Validators.required, noWhitespaceValidator()]],
      lastName: ['', [Validators.required, noWhitespaceValidator()]],
      email: ['', [Validators.required, emailFormatValidator(), noWhitespaceValidator()]],
      enquiry: ['Partnership', Validators.required],
      comment: ['', [Validators.required, noWhitespaceValidator(), minimumMeaningfulCharacters(20)]],
      captchaVerified: [false, Validators.requiredTrue],
    });

    this.initialFormValues = this.form.getRawValue();
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

    this.authService.sendProductEnquiry({ firstName, lastName, email, enquiry, comment })
      // finalize() runs on success AND on error; the previous `complete`
      // callback did not, because RxJS never completes a stream that errored.
      // That left isSubmitting stuck at true after any network failure, so the
      // button stayed disabled on "Submitting..." and the user could not retry.
      .pipe(finalize(() => (this.isSubmitting = false)))
      .subscribe({
      next: (res) => {
        if (res.success) {
          alert('✅ Product enquiry submitted successfully!');
          this.resetAfterSuccess();
          if (this.turnstileWidgetId !== null && (window as any).turnstile) {
            (window as any).turnstile.reset(this.turnstileWidgetId);
          }
        } else {
          // Not a success: leave the form exactly as the user left it — values,
          // touched state and validation messages all intact — so they can fix
          // whatever the server objected to and retry.
          alert(res.message || 'Failed to submit enquiry.');
        }
      },
      error: (err) => {
        console.error('HTTP Error:', err);
        alert('Server error. Check console for details.');
      },
    });
  }
}

/**
 * Returns the form to its freshly-loaded state after a confirmed success.
 *
 * `this.form.reset()` on its own was not enough, and that was the bug. It does
 * clear the values and mark every control pristine + untouched, but the
 * `submitted` flag lives on the FormGroupDirective attached to the <form>
 * element rather than on the FormGroup, and nothing clears it. Material's
 * default ErrorStateMatcher paints a field red when
 * `control.invalid && (control.touched || form.submitted)`, so with `submitted`
 * stuck at true every emptied required control satisfied that condition and the
 * whole form rendered in the error state even though the user had touched
 * nothing. `resetForm()` clears the values and that flag together.
 *
 * Feeding the captured initial values back in also restores the `enquiry`
 * select's 'Partnership' default, which a bare `reset()` blanked out.
 */
private resetAfterSuccess(): void {
  if (this.formDirective) {
    this.formDirective.resetForm(this.initialFormValues);
    return;
  }
  // Defensive: the directive is always present in this template, but never let
  // a missing ViewChild turn a successful submit into a form left dirty.
  this.form.reset(this.initialFormValues);
}

}
