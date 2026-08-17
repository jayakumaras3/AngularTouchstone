import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

/**
 * The one email-format rule for the whole application. Every form with an email
 * control uses this instead of `Validators.email`, so a new form picks up the
 * same behaviour by using the same validator — and the config-driven
 * LeadFormComponent applies it automatically to any field declared
 * `type: 'email'`.
 *
 * Why not `Validators.email` on its own? It is correct about almost everything
 * — it already rejects `sad@`, `sad`, `@sad.com`, `sad@.`, `sad@com.`,
 * `sad@.com`, `sad..name@example.com` and `name@ example.com` — but its domain
 * rule makes the dotted suffix optional, so it accepts single-label domains:
 *
 *     sad@com        -> Validators.email says VALID
 *     name@example   -> Validators.email says VALID
 *
 * Those are the only two gaps, verified by running Angular's own EMAIL_REGEXP
 * (node_modules/@angular/forms/fesm2022/forms.mjs) against the full case list.
 * So this validator deliberately *delegates* to `Validators.email` first and
 * only adds the missing requirement: a real dotted TLD. Composing rather than
 * rewriting means we cannot accidentally become stricter than Angular about
 * local parts (`john+test`, `john_doe`, `test.name` all still pass) — the only
 * behavioural difference is the TLD.
 */

/**
 * Requires the address to end in a dot followed by an alphabetic TLD of at
 * least two characters — `.com`, `.in`, `.co.in`, `.museum`. Intentionally not
 * checked against a TLD registry list: that would reject new and internal
 * business domains for no real benefit.
 */
const TLD_PATTERN = /\.[a-zA-Z]{2,}$/;

/** The single user-facing wording for a badly formatted address. */
export const EMAIL_FORMAT_MESSAGE = 'Please enter a valid email address.';

/**
 * Validates email format, and nothing else.
 *
 * An empty value returns null — exactly like `Validators.email` — so this never
 * makes a control required. A form that wants email to be mandatory keeps
 * pairing it with `Validators.required`; a form where email is optional can use
 * this alone and an empty field stays valid.
 *
 * Reports the standard `email` error key rather than a new one, so any existing
 * `hasError('email')` check in a template keeps working unchanged.
 */
export function emailFormatValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    // Delegate first: Angular returns null for empty values and for addresses
    // it considers well-formed, and { email: true } for everything else.
    const angularResult = Validators.email(control);
    if (angularResult) {
      return angularResult;
    }

    const value = control.value;

    // Angular returned null either because the value is empty (optional control
    // — stay out of it) or because it is well-formed. Only the latter needs the
    // extra TLD check. Empty is tested the same way Angular tests it, so a
    // whitespace-only value keeps failing exactly as it does today.
    if (value === null || value === undefined || value === '') {
      return null;
    }

    return TLD_PATTERN.test(String(value)) ? null : { email: true };
  };
}
