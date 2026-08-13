import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { FormControl, Validators } from '@angular/forms';
import { of } from 'rxjs';

import { LeadFormComponent } from './lead-form.component';
import { AuthService } from '../../../../../services/login/auth.service';
import { TurnstileService } from '../../../../../services/turnstile/turnstile.service';
import { MessageFieldStatusComponent } from '../../../../../shared/message-field-status/message-field-status.component';
import { noWhitespaceValidator } from '../../../../../shared/validators/no-whitespace.validator';
import { minimumMeaningfulCharacters } from '../../../../../shared/validators/minimum-meaningful-characters.validator';
import { LEAD_FORM_FIELDS } from '../../lead-form-fields';
import { LeadFormConfig } from '../../models/ads-landing.model';

const MIN_MESSAGE = 'Please enter at least 20 characters.';

/** The exact field set the three campaign pages render. */
const CONFIG: LeadFormConfig = {
  heading: 'Want to see how it works?',
  subheading: "Leave your details and we'll walk you through DOCHEK.",
  submitLabel: 'Learn more about DOCHEK',
  successMessage: 'Thanks!',
  fields: LEAD_FORM_FIELDS,
};

describe('LeadFormComponent — campaign pages (/Dochek_awareness_207, /smartlms, /microlearning)', () => {
  let fixture: ComponentFixture<LeadFormComponent>;
  let component: LeadFormComponent;

  beforeEach(async () => {
    const turnstileStub = {
      render: jasmine.createSpy('render'),
      remove: jasmine.createSpy('remove'),
      reset: jasmine.createSpy('reset'),
    };
    const authStub = {
      sendProductEnquiry: jasmine
        .createSpy('sendProductEnquiry')
        .and.returnValue(of({ success: true })),
    };

    await TestBed.configureTestingModule({
      imports: [LeadFormComponent],
      providers: [
        provideNoopAnimations(),
        { provide: AuthService, useValue: authStub },
        { provide: TurnstileService, useValue: turnstileStub },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LeadFormComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('config', CONFIG);
    fixture.detectChanges();
  });

  const message = () => component.form.get('message')!;

  /** Simulates typing: sets the value, marks dirty AND touched, re-renders. */
  function type(value: string): void {
    message().setValue(value);
    message().markAsDirty();
    message().markAsTouched();
    fixture.detectChanges();
  }

  /** Every piece of text rendered anywhere in the form. */
  function renderedText(): string {
    return (fixture.nativeElement as HTMLElement).textContent ?? '';
  }

  /** Fills the four mandatory fields, leaving Message untouched. */
  function fillMandatoryFields(): void {
    component.form.patchValue({
      firstName: 'Jay',
      companyName: 'Touchstone',
      workEmail: 'jay@touchstonelc.com',
      primaryNeed: 'lms',
    });
    fixture.detectChanges();
  }

  describe('Message has zero length validation', () => {
    const cases: { label: string; value: string }[] = [
      { label: 'empty', value: '' },
      { label: '1 character', value: 'a' },
      { label: '2 characters', value: 'ab' },
      { label: '5 characters', value: 'hello' },
      { label: '10 characters', value: 'abcdefghij' },
      { label: '19 characters', value: 'abcdefghijklmnopqrs' },
      { label: '20 characters', value: 'abcdefghijklmnopqrst' },
      { label: '21 characters', value: 'abcdefghijklmnopqrstu' },
      { label: '100+ characters', value: 'x'.repeat(150) },
      { label: 'a very long message', value: 'We need an LMS. '.repeat(500) },
      { label: 'whitespace only', value: '     ' },
    ];

    for (const { label, value } of cases) {
      it(`is valid with ${label}, and shows no message-length error`, () => {
        type(value);

        expect(message().valid).withContext('control validity').toBeTrue();
        expect(message().errors).withContext('control errors').toBeNull();
        expect(renderedText()).not.toContain(MIN_MESSAGE);
        expect(renderedText()).not.toContain('Message is required');
      });
    }

    it('never truncates a long value', () => {
      const veryLong = 'We need an LMS for our team. '.repeat(400);
      type(veryLong);

      expect(message().value.length).toBe(veryLong.length);
    });

    it('carries no required, minlength or maxlength validator at all', () => {
      expect(message().hasValidator(Validators.required)).toBeFalse();
      // A control with no validators reports no errors for any input.
      for (const value of ['', 'a', 'x'.repeat(5000)]) {
        message().setValue(value);
        expect(message().errors).withContext(`value of length ${value.length}`).toBeNull();
      }
    });

    it('puts no minlength or maxlength attribute on the textarea', () => {
      const textarea: HTMLTextAreaElement = fixture.nativeElement.querySelector('textarea');

      expect(textarea.getAttribute('maxlength')).toBeNull();
      expect(textarea.getAttribute('minlength')).toBeNull();
      expect(textarea.maxLength).toBe(-1);
    });

    it('shows no error even after submit marks every control as touched', () => {
      fillMandatoryFields();
      component.captchaToken = 'test-token';
      component.submit();
      fixture.detectChanges();

      expect(renderedText()).not.toContain(MIN_MESSAGE);
    });
  });

  describe('labels and required markers', () => {
    it('renders exactly Name, Company name, Work email, Primary Need, Message in order', () => {
      const labels = Array.from(
        fixture.nativeElement.querySelectorAll('mat-label') as NodeListOf<HTMLElement>
      ).map((el) => el.textContent!.trim());

      expect(labels).toEqual(['Name', 'Company name', 'Work email', 'Primary Need', 'Message']);
    });

    it('renders Message without the required "*" marker, and the other four with it', () => {
      const fields = Array.from(
        fixture.nativeElement.querySelectorAll('mat-form-field') as NodeListOf<HTMLElement>
      );
      const marked = fields.map(
        (f) => f.querySelector('.mat-mdc-form-field-required-marker') !== null
      );

      // Name, Company name, Work email, Primary Need, then Message.
      expect(marked).toEqual([true, true, true, true, false]);
    });

    it('has no Last name or City control', () => {
      expect(component.form.get('lastName')).toBeNull();
      expect(component.form.get('city')).toBeNull();
    });
  });

  describe('the other four fields stay mandatory', () => {
    it('is invalid while Name, Company name, Work email or Primary Need is blank', () => {
      expect(component.form.valid).toBeFalse();

      for (const control of ['firstName', 'companyName', 'workEmail', 'primaryNeed']) {
        expect(component.form.get(control)!.hasValidator(Validators.required))
          .withContext(control)
          .toBeTrue();
      }
    });

    it('becomes valid once the four mandatory fields are filled, with Message left empty', () => {
      fillMandatoryFields();

      expect(component.form.valid).toBeTrue();
      expect(message().value).toBe('');
    });

    it('still rejects a malformed work email', () => {
      fillMandatoryFields();
      component.form.get('workEmail')!.setValue('not-an-email');

      expect(component.form.valid).toBeFalse();
    });
  });

  describe('submit', () => {
    beforeEach(() => {
      fillMandatoryFields();
      component.captchaToken = 'test-token';
    });

    const payload = () =>
      (TestBed.inject(AuthService).sendProductEnquiry as jasmine.Spy).calls.mostRecent().args[0];

    it('submits with an empty Message', () => {
      component.submit();

      expect(TestBed.inject(AuthService).sendProductEnquiry).toHaveBeenCalledTimes(1);
      expect(payload().comment).toBe('');
    });

    it('submits with a short Message', () => {
      type('hi');
      component.submit();

      expect(TestBed.inject(AuthService).sendProductEnquiry).toHaveBeenCalledTimes(1);
      expect(payload().comment).toBe('hi');
    });

    it('submits with a long Message and preserves the API field mapping', () => {
      const long = 'We would like a walkthrough of the bundle for our team. '.repeat(20);
      type(long);
      component.submit();

      const sent = payload();
      expect(sent.comment).toBe(long.trim());
      expect(sent.email).toBe('jay@touchstonelc.com');
      expect(sent.enquiry).toBe('lms');
      expect(sent.turnstileToken).toBe('test-token');
      expect(sent.lastName).toBeUndefined();
      expect(sent.city).toBeUndefined();
    });

    it('still blocks submit when the CAPTCHA token is missing', () => {
      component.captchaToken = '';
      component.submit();

      expect(TestBed.inject(AuthService).sendProductEnquiry).not.toHaveBeenCalled();
      expect(component.captchaError).toBe('Please complete the verification above.');
    });

    it('still blocks submit when a mandatory field is blank', () => {
      component.form.get('companyName')!.setValue('');
      component.submit();

      expect(TestBed.inject(AuthService).sendProductEnquiry).not.toHaveBeenCalled();
    });
  });
});

/**
 * Regression guard for the other pages. The Contact page, the demo popup and
 * Book a Demo all render the shared MessageFieldStatusComponent and use
 * minimumMeaningfulCharacters() — none of which this change touches, so their
 * required + 20-character Message rules must still behave exactly as before.
 */
describe('other pages — shared Message validation is unchanged', () => {
  it('MessageFieldStatusComponent still reports required / minimum exactly as before', () => {
    const fixture = TestBed.createComponent(MessageFieldStatusComponent);
    const status = fixture.componentInstance;
    const control = new FormControl('', [
      Validators.required,
      noWhitespaceValidator(),
      minimumMeaningfulCharacters(20),
    ]);
    fixture.componentRef.setInput('control', control);
    fixture.componentRef.setInput('min', 20);

    expect(status.message).withContext('untouched').toBeNull();

    control.markAsTouched();
    expect(status.message).withContext('empty + touched').toBe('Message is required.');

    control.setValue('hello');
    expect(status.message).withContext('5 chars').toBe(MIN_MESSAGE);

    control.setValue('abcdefghijklmnopqrst');
    expect(status.message).withContext('20 chars').toBeNull();
  });

  it('minimumMeaningfulCharacters() still ignores empty values and still collapses whitespace', () => {
    const validator = minimumMeaningfulCharacters(20);

    expect(validator(new FormControl(''))).withContext('empty').toBeNull();
    expect(validator(new FormControl('a'.repeat(20)))).withContext('20 chars').toBeNull();
    expect(validator(new FormControl('a'))).withContext('1 char').not.toBeNull();
    expect(validator(new FormControl('a' + ' '.repeat(30))))
      .withContext('space padded')
      .not.toBeNull();
  });
});
