import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { EMAIL_FORMAT_MESSAGE } from './email.validator';

/**
 * Maps a control's ValidationErrors to the single message to show, so the
 * wording lives in one place instead of being retyped into every template.
 *
 * Deliberately narrow: it only speaks for the `email` error key. Required,
 * whitespace and minimum-length messages are left alone, because each form
 * already has its own established behaviour for those (the Contact page and the
 * campaign pages show nothing for an empty field; the Message textarea uses
 * MessageFieldStatusComponent). Returning null for those keys means adding this
 * pipe to a form cannot start surfacing messages that were not shown before.
 *
 * Take the input from `control.errors`, not the control itself — Angular builds
 * a fresh errors object on every validation run, so a pure pipe re-evaluates
 * exactly when the errors change.
 *
 * Usage:
 *   @if (form.get('email')!.errors | fieldError; as message) {
 *     <mat-error>{{ message }}</mat-error>
 *   }
 */
@Pipe({
  name: 'fieldError',
  standalone: true,
})
export class FieldErrorPipe implements PipeTransform {
  transform(errors: ValidationErrors | null | undefined): string | null {
    if (!errors) {
      return null;
    }

    if (errors['email']) {
      return EMAIL_FORMAT_MESSAGE;
    }

    return null;
  }
}
