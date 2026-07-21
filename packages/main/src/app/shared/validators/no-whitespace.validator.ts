import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

/**
 * Fails required text fields that are null/undefined, or a string that is
 * empty or contains only whitespace (e.g. "   "). Leaves non-string values
 * (booleans, numbers) untouched so it is safe to combine with other validators.
 */
export function noWhitespaceValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (value === null || value === undefined) {
      return { whitespace: true };
    }
    if (typeof value === 'string' && value.trim().length === 0) {
      return { whitespace: true };
    }
    return null;
  };
}

/** Trims every string control's value in place before a form is read/submitted. */
export function trimFormGroupValues(form: FormGroup): void {
  Object.keys(form.controls).forEach((key) => {
    const control = form.get(key);
    const value = control?.value;
    if (typeof value === 'string') {
      control!.setValue(value.trim(), { emitEvent: false });
    }
  });
}
