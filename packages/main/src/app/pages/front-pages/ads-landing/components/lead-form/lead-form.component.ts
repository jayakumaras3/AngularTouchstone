import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { MaterialModule } from '../../../../../material.module';
import { AuthService } from '../../../../../services/login/auth.service';
import { LeadFormConfig } from '../../models/ads-landing.model';

@Component({
  selector: 'app-lead-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './lead-form.component.html',
  styleUrl: './lead-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeadFormComponent implements OnInit, OnChanges {
  @Input({ required: true }) config!: LeadFormConfig;
  @Input() formId = 'ads-lead-form';
  @Input() source = 'ads-landing';
  @Input() campaign = '';
  @Output() leadSubmitted = new EventEmitter<Record<string, string>>();

  form!: FormGroup;
  isSubmitting = false;
  submitted = false;
  submitError: string | null = null;

  constructor(
    private readonly fb: FormBuilder,
    private readonly authService: AuthService
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['config'] && !changes['config'].firstChange) {
      this.buildForm();
    }
  }

  hasError(fieldName: string, error: string): boolean {
    const control = this.form.get(fieldName);
    return !!control && control.touched && control.hasError(error);
  }

  submit(): void {
    if (this.isSubmitting || this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.submitError = null;

    this.authService
      .sendProductEnquiry({ ...this.form.value, source: this.source, campaign: this.campaign })
      .subscribe({
        next: (res: any) => {
          this.isSubmitting = false;
          if (res?.success === false) {
            this.submitError = res?.message || 'Something went wrong. Please try again.';
            return;
          }
          this.submitted = true;
          this.leadSubmitted.emit(this.form.value);
          this.form.reset();
        },
        error: () => {
          this.isSubmitting = false;
          this.submitError = 'Something went wrong. Please try again.';
        },
      });
  }

  private buildForm(): void {
    const controls: Record<string, [string, ValidatorFn[]]> = {};

    for (const field of this.config.fields) {
      const validators: ValidatorFn[] = [];
      if (field.required) {
        validators.push(Validators.required);
      }
      if (field.type === 'email') {
        validators.push(Validators.email);
      }
      controls[field.name] = ['', validators];
    }

    this.form = this.fb.group(controls);
    this.submitted = false;
    this.submitError = null;
  }
}
