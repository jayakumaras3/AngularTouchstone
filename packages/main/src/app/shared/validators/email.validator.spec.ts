import { FormControl, Validators } from '@angular/forms';
import { emailFormatValidator } from './email.validator';

/**
 * The full case list from the ticket, plus the optional/required contract that
 * must not change: this validator reports format only and never makes a control
 * required.
 */
describe('emailFormatValidator', () => {
  const validate = (value: unknown) => emailFormatValidator()(new FormControl(value));

  const VALID = [
    'user@example.com',
    'john.doe@example.com',
    'john_doe@example.com',
    'john+test@example.com',
    'user123@company.co.in',
    'test.name@company.com',
  ];

  const INVALID = [
    'sad@',
    'sad',
    '@sad.com',
    'sad@.',
    'sad@com',
    'sad@com.',
    '@sad',
    'sad@.com',
    'sad..name@example.com',
    'name@ example.com',
    'name@example',
  ];

  describe('accepts real business addresses', () => {
    for (const value of VALID) {
      it(`accepts ${value}`, () => expect(validate(value)).toBeNull());
    }
  });

  describe('rejects malformed addresses', () => {
    for (const value of INVALID) {
      it(`rejects ${value}`, () => expect(validate(value)).toEqual({ email: true }));
    }
  });

  describe('the two gaps this validator exists to close', () => {
    // If Angular ever tightens its own regex these will start failing, which is
    // the signal that the extra TLD rule is no longer carrying its weight.
    it('Validators.email accepts sad@com but this validator does not', () => {
      expect(Validators.email(new FormControl('sad@com'))).toBeNull();
      expect(validate('sad@com')).toEqual({ email: true });
    });

    it('Validators.email accepts name@example but this validator does not', () => {
      expect(Validators.email(new FormControl('name@example'))).toBeNull();
      expect(validate('name@example')).toEqual({ email: true });
    });
  });

  describe('never makes a control required', () => {
    it('treats an empty string as valid, leaving required to Validators.required', () => {
      expect(validate('')).toBeNull();
    });

    it('treats null as valid', () => {
      expect(validate(null)).toBeNull();
    });

    it('an optional email control is valid while empty and invalid once filled badly', () => {
      const optional = new FormControl('', [emailFormatValidator()]);
      expect(optional.valid).toBeTrue();

      optional.setValue('sad@');
      expect(optional.valid).toBeFalse();
      expect(optional.hasError('email')).toBeTrue();

      optional.setValue('user@example.com');
      expect(optional.valid).toBeTrue();
    });

    it('a required email control still reports required when empty, not email', () => {
      const required = new FormControl('', [Validators.required, emailFormatValidator()]);
      expect(required.hasError('required')).toBeTrue();
      expect(required.hasError('email')).toBeFalse();
    });
  });

  describe('matches Angular for whitespace-only values', () => {
    it('reports a format error for whitespace, exactly as Validators.email does', () => {
      expect(validate('   ')).toEqual({ email: true });
      expect(Validators.email(new FormControl('   '))).toEqual({ email: true });
    });
  });
});
