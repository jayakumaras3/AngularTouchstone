import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { MaterialModule } from '../../../../../material.module';
import { AuthService } from '../../../../../services/login/auth.service';
import { TurnstileService, TurnstileWidgetState } from '../../../../../services/turnstile/turnstile.service';
import { noWhitespaceValidator, trimFormGroupValues } from '../../../../../shared/validators/no-whitespace.validator';
import { minimumMeaningfulCharacters } from '../../../../../shared/validators/minimum-meaningful-characters.validator';
import { RequiredFieldsNoteComponent } from '../../../../../shared/required-fields-note/required-fields-note.component';
import { MessageFieldStatusComponent } from '../../../../../shared/message-field-status/message-field-status.component';
import { LeadFormConfig } from '../../models/ads-landing.model';

@Component({
  selector: 'app-lead-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, RequiredFieldsNoteComponent, MessageFieldStatusComponent],
  templateUrl: './lead-form.component.html',
  styleUrl: './lead-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeadFormComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  @Input({ required: true }) config!: LeadFormConfig;
  @Input() formId = 'ads-lead-form';
  @Input() source = 'ads-landing';
  @Input() campaign = '';
  @Output() leadSubmitted = new EventEmitter<Record<string, string>>();

  @ViewChild('turnstileContainer') private turnstileContainer!: ElementRef<HTMLDivElement>;

  form!: FormGroup;
  isSubmitting = false;
  submitted = false;
  submitError: string | null = null;

  captchaState: TurnstileWidgetState = 'loading';
  captchaError: string | null = null;
  captchaToken = '';
  private turnstileWidgetId: string | null = null;
  private turnstileRendered = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly authService: AuthService,
    private readonly turnstileService: TurnstileService,
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  ngAfterViewInit(): void {
    this.renderCaptcha();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['config'] && !changes['config'].firstChange) {
      this.buildForm();
    }
  }

  ngOnDestroy(): void {
    this.turnstileService.remove(this.turnstileWidgetId);
  }

  submit(): void {
    if (this.isSubmitting) {
      return;
    }

    trimFormGroupValues(this.form);

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    if (!this.captchaToken) {
      this.captchaError = 'Please complete the verification above.';
      return;
    }

    this.isSubmitting = true;
    this.submitError = null;
    this.captchaError = null;

    // The PHP endpoint (angualr_product_enquiry) reads `email` / `enquiry` / `comment` —
    // map the UI's workEmail / primaryNeed / message controls onto those names here so the
    // form itself can keep its user-friendly control names without touching the backend.
    const payload = {
      ...this.form.value,
      email: this.form.value.workEmail,
      enquiry: this.form.value.primaryNeed,
      comment: this.form.value.message,
      source: this.source,
      campaign: this.campaign,
      turnstileToken: this.captchaToken,
    };

    console.log('Form Value', this.form.value);
    console.log('API Payload', payload);

    this.authService
      .sendProductEnquiry(payload)
      .subscribe({
        next: (res: any) => {
          this.isSubmitting = false;
          if (res?.success === false) {
            this.submitError = res?.message || 'Something went wrong. Please try again.';
            this.resetCaptcha();
            this.cdr.markForCheck();
            return;
          }
          this.submitted = true;
          this.leadSubmitted.emit(this.form.value);
          this.form.reset();
          this.resetCaptcha();
          this.cdr.markForCheck();
        },
        error: () => {
          this.isSubmitting = false;
          this.submitError = 'Something went wrong. Please try again.';
          this.resetCaptcha();
          this.cdr.markForCheck();
        },
      });
  }

  private buildForm(): void {
    const controls: Record<string, [string, ValidatorFn[]]> = {};

    for (const field of this.config.fields) {
      const validators: ValidatorFn[] = [];
      if (field.required) {
        validators.push(Validators.required);
        if (field.type !== 'select') {
          validators.push(noWhitespaceValidator());
        }
      }
      if (field.type === 'email') {
        validators.push(Validators.email);
      }
      if (field.type === 'textarea') {
        validators.push(minimumMeaningfulCharacters(20));
      }
      controls[field.name] = ['', validators];
    }

    this.form = this.fb.group(controls);
    this.submitted = false;
    this.submitError = null;
  }

  private renderCaptcha(): void {
    if (this.turnstileRendered || !this.turnstileContainer?.nativeElement) {
      return;
    }
    this.turnstileRendered = true;

    this.turnstileService.render(this.turnstileContainer.nativeElement, {
      onToken: (token) => {
        this.captchaToken = token;
        this.captchaError = null;
        this.cdr.markForCheck();
      },
      onExpired: () => {
        this.captchaToken = '';
        this.cdr.markForCheck();
      },
      onError: () => {
        this.captchaToken = '';
        this.captchaError = 'Verification failed. Please try again.';
        this.resetCaptcha();
        this.cdr.markForCheck();
      },
      onReady: (widgetId) => {
        this.turnstileWidgetId = widgetId;
        this.captchaState = 'ready';
        this.cdr.markForCheck();
      },
      onLoadError: () => {
        this.captchaState = 'error';
        this.cdr.markForCheck();
      },
    });
  }

  /** Turnstile tokens are single-use — force re-verification after every submit attempt. */
  private resetCaptcha(): void {
    this.captchaToken = '';
    this.turnstileService.reset(this.turnstileWidgetId);
  }
}
