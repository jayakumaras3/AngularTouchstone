import { Directive, Input, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { minimumMeaningfulCharacters } from './minimum-meaningful-characters.validator';

/**
 * Template-driven forms (ngModel) equivalent of `minimumMeaningfulCharacters()`.
 * Delegates to the same validator function used by Reactive Forms so the
 * meaningful-character counting logic exists in exactly one place.
 *
 * Usage: <textarea ngModel [appMinMeaningfulChars]="30" name="message"></textarea>
 */
@Directive({
  selector: '[appMinMeaningfulChars]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MinMeaningfulCharsDirective),
      multi: true,
    },
  ],
})
export class MinMeaningfulCharsDirective implements Validator {
  @Input('appMinMeaningfulChars') min = 30;

  validate(control: AbstractControl): ValidationErrors | null {
    return minimumMeaningfulCharacters(this.min)(control);
  }
}
