import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { countMeaningfulCharacters } from '../utils/meaningful-characters.util';

/**
 * Reactive Forms validator for free-text fields (Message, Project Details,
 * Comments, Description, Notes, Requirements, ...) that must contain at least
 * `min` meaningful characters (whitespace trimmed, internal runs collapsed).
 *
 * Empty/whitespace-only values are left to `Validators.required` /
 * `noWhitespaceValidator()` so callers can show a distinct "is required"
 * message instead of "must contain at least N characters".
 */
export function minimumMeaningfulCharacters(min: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (typeof value !== 'string') {
      return null;
    }
    const actualLength = countMeaningfulCharacters(value);
    if (actualLength === 0 || actualLength >= min) {
      return null;
    }
    return { minMeaningfulLength: { requiredLength: min, actualLength } };
  };
}
