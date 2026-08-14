import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { FormGroupDirective } from '@angular/forms';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';

import { ContactComponent } from './contact.component';
import { AuthService } from '../../../services/login/auth.service';

const VALID_VALUES = {
  firstName: 'Jay',
  lastName: 'Kumar',
  email: 'jay@touchstonelc.com',
  enquiry: 'Partnership',
  comment: 'We would like to discuss migrating our learning platform.',
  captchaVerified: true,
};

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let auth: { sendProductEnquiry: jasmine.Spy };
  let turnstileReset: jasmine.Spy;

  beforeEach(async () => {
    // Stub the global Turnstile script so the component's explicit-render
    // pattern resolves immediately instead of polling on a timer.
    turnstileReset = jasmine.createSpy('reset');
    (window as any).turnstile = {
      render: () => 'widget-1',
      reset: turnstileReset,
      remove: jasmine.createSpy('remove'),
    };

    spyOn(window, 'alert'); // the component's existing success/error UX

    await TestBed.configureTestingModule({
      imports: [ContactComponent],
      providers: [
        provideNoopAnimations(),
        provideRouter([]), // the imported FooterComponent renders routerLinks
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    }).compileComponents();

    // The real AuthService (its constructor only takes HttpClient) so the
    // FooterComponent's authInitialized()/isLoggedIn() signals still work —
    // only the one method under test is spied on.
    auth = {
      sendProductEnquiry: spyOn(
        TestBed.inject(AuthService),
        'sendProductEnquiry'
      ).and.returnValue(of({ success: true })),
    };

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    delete (window as any).turnstile;
  });

  const formDirective = () =>
    fixture.debugElement.children[0].injector.get(FormGroupDirective, null) ??
    (fixture.debugElement.query((n) => n.name === 'form').injector.get(FormGroupDirective) as
      FormGroupDirective);

  /** How many mat-form-fields are currently painted in the error state. */
  const invalidFieldCount = () =>
    (fixture.nativeElement as HTMLElement).querySelectorAll('.mat-form-field-invalid').length;

  const visibleValidationMessages = () =>
    (fixture.nativeElement as HTMLElement).querySelectorAll(
      '.message-field-status, .captcha-error-msg, mat-error'
    ).length;

  function fillValid(): void {
    component.form.setValue(VALID_VALUES);
    fixture.detectChanges();
  }

  function submitViaTemplate(): void {
    const form: HTMLFormElement = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));
    fixture.detectChanges();
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Scenario 1 — empty form submitted', () => {
    it('does not call the API and shows the existing required-field validation', () => {
      submitViaTemplate();

      expect(auth.sendProductEnquiry).not.toHaveBeenCalled();
      expect(component.form.valid).toBeFalse();
      expect(invalidFieldCount()).toBeGreaterThan(0);
    });
  });

  describe('Scenario 2 — invalid data submitted', () => {
    it('does not call the API when the email is malformed', () => {
      fillValid();
      component.form.get('email')!.setValue('not-an-email');
      submitViaTemplate();

      expect(auth.sendProductEnquiry).not.toHaveBeenCalled();
      expect(component.form.get('email')!.invalid).toBeTrue();
    });

    it('does not call the API when the CAPTCHA is not verified', () => {
      fillValid();
      component.form.get('captchaVerified')!.setValue(false);
      submitViaTemplate();

      expect(auth.sendProductEnquiry).not.toHaveBeenCalled();
    });

    it('keeps the short-message rule working', () => {
      fillValid();
      component.form.get('comment')!.setValue('too short');
      submitViaTemplate();

      expect(auth.sendProductEnquiry).not.toHaveBeenCalled();
    });
  });

  describe('Scenario 3 — successful submission', () => {
    beforeEach(() => {
      fillValid();
      submitViaTemplate();
    });

    it('calls the API once with the existing payload shape', () => {
      expect(auth.sendProductEnquiry).toHaveBeenCalledTimes(1);
      expect(auth.sendProductEnquiry).toHaveBeenCalledWith({
        firstName: 'Jay',
        lastName: 'Kumar',
        email: 'jay@touchstonelc.com',
        enquiry: 'Partnership',
        comment: 'We would like to discuss migrating our learning platform.',
      });
    });

    it('leaves NO field painted in the error state — the reported bug', () => {
      expect(invalidFieldCount()).toBe(0);
    });

    it('leaves no validation message visible', () => {
      expect(visibleValidationMessages()).toBe(0);
    });

    it('clears the submitted flag that Material reads for error styling', () => {
      expect(formDirective().submitted).toBeFalse();
    });

    it('marks every control pristine and untouched', () => {
      for (const [name, control] of Object.entries(component.form.controls)) {
        expect(control.touched).withContext(`${name}.touched`).toBeFalse();
        expect(control.dirty).withContext(`${name}.dirty`).toBeFalse();
      }
      expect(component.form.touched).toBeFalse();
      expect(component.form.dirty).toBeFalse();
    });

    it('restores the initial values, including the Partnership default', () => {
      expect(component.form.getRawValue()).toEqual({
        firstName: '',
        lastName: '',
        email: '',
        enquiry: 'Partnership',
        comment: '',
        captchaVerified: false,
      });
    });

    it('resets the CAPTCHA widget and re-enables the submit button', () => {
      expect(turnstileReset).toHaveBeenCalled();
      expect(component.isSubmitting).toBeFalse();
    });
  });

  describe('Scenario 4 — submitting again after a success', () => {
    beforeEach(() => {
      fillValid();
      submitViaTemplate();
      auth.sendProductEnquiry.calls.reset();
    });

    it('blocks the second submit while the reset form is empty, and shows validation again', () => {
      submitViaTemplate();

      expect(auth.sendProductEnquiry).not.toHaveBeenCalled();
      expect(invalidFieldCount()).toBeGreaterThan(0);
    });

    it('submits successfully a second time once refilled', () => {
      fillValid();
      submitViaTemplate();

      expect(auth.sendProductEnquiry).toHaveBeenCalledTimes(1);
      expect(invalidFieldCount()).toBe(0);
      expect(formDirective().submitted).toBeFalse();
    });
  });

  describe('Scenario 5 — API failure and server-reported failure', () => {
    it('keeps the entered values and does not reset on a transport error', () => {
      auth.sendProductEnquiry.and.returnValue(throwError(() => new Error('network down')));
      fillValid();
      submitViaTemplate();

      expect(component.form.get('firstName')!.value).toBe('Jay');
      expect(component.form.get('comment')!.value).toBe(VALID_VALUES.comment);
      expect(window.alert).toHaveBeenCalledWith('Server error. Check console for details.');
      expect(component.isSubmitting).toBeFalse();
    });

    it('keeps the entered values when the API reports success: false', () => {
      auth.sendProductEnquiry.and.returnValue(of({ success: false, message: 'Mail failed.' }));
      fillValid();
      submitViaTemplate();

      expect(component.form.get('firstName')!.value).toBe('Jay');
      expect(window.alert).toHaveBeenCalledWith('Mail failed.');
      expect(turnstileReset).not.toHaveBeenCalled();
    });

    it('does not clear the submitted flag on failure, so validation styling still shows', () => {
      auth.sendProductEnquiry.and.returnValue(throwError(() => new Error('network down')));
      fillValid();
      component.form.get('firstName')!.setValue('');
      submitViaTemplate();

      expect(auth.sendProductEnquiry).not.toHaveBeenCalled();
      expect(invalidFieldCount()).toBeGreaterThan(0);
    });
  });
});
