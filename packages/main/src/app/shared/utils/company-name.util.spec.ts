import { COMPANY_NAME_PAYLOAD_KEY, readCompanyName, withCompanyName } from './company-name.util';

/**
 * The two contracts every form on the site depends on:
 *   A. a form WITH a Company Name field forwards it as `company_name`;
 *   B. a form WITHOUT one submits exactly the payload it submits today.
 */
describe('company-name util', () => {
  describe('Scenario A — form has a Company Name field', () => {
    it('forwards the campaign lead forms\' `companyName` as `company_name`', () => {
      const sent = withCompanyName({
        firstName: 'Test User',
        companyName: 'ABC Technologies',
        email: 'test@example.com',
        enquiry: 'Training',
        comment: 'Test message',
      });

      expect(sent[COMPANY_NAME_PAYLOAD_KEY]).toBe('ABC Technologies');
    });

    it('forwards the demo popup / Book a Demo `company` control too', () => {
      expect(withCompanyName({ name: 'Test User', company: 'ABC Technologies' })['company_name'])
        .toBe('ABC Technologies');
    });

    it('trims the value so padded input still arrives clean', () => {
      expect(withCompanyName({ companyName: '  ABC Technologies  ' })['company_name'])
        .toBe('ABC Technologies');
    });

    it('leaves every other field untouched', () => {
      const original = {
        firstName: 'Test User',
        companyName: 'ABC Technologies',
        email: 'test@example.com',
        enquiry: 'Training',
        comment: 'Test message',
        turnstileToken: 'token',
      };
      const sent = withCompanyName(original);

      expect(sent).toEqual({ ...original, company_name: 'ABC Technologies' });
      // Never mutates the caller's object — the form value is reused after submit.
      expect(original as Record<string, any>).not.toEqual(
        jasmine.objectContaining({ company_name: 'ABC Technologies' })
      );
    });

    it('prefers an already-canonical `company_name` over the aliases', () => {
      expect(withCompanyName({ company_name: 'Canonical', companyName: 'Alias' })['company_name'])
        .toBe('Canonical');
    });
  });

  describe('Scenario B — form has no Company Name field', () => {
    const contactPagePayload = {
      firstName: 'Jaya',
      lastName: 'KUMAR',
      email: 'jayakumaras3@gmail.com',
      enquiry: 'Migration & Setup',
      comment: 'test contact',
    };

    it('adds no `company_name` key at all', () => {
      const sent = withCompanyName(contactPagePayload);

      expect(COMPANY_NAME_PAYLOAD_KEY in sent).toBeFalse();
      expect(sent).toEqual(contactPagePayload);
    });

    it('adds no key when the field exists but is empty or whitespace', () => {
      expect('company_name' in withCompanyName({ companyName: '' })).toBeFalse();
      expect('company_name' in withCompanyName({ companyName: '   ' })).toBeFalse();
    });

    it('adds no key for a control reset to null or undefined', () => {
      expect('company_name' in withCompanyName({ companyName: null })).toBeFalse();
      expect('company_name' in withCompanyName({ companyName: undefined })).toBeFalse();
    });

    it('never throws on a missing or empty payload', () => {
      expect(withCompanyName(null)).toEqual({});
      expect(withCompanyName(undefined)).toEqual({});
      expect(withCompanyName({})).toEqual({});
    });
  });

  describe('readCompanyName', () => {
    it('returns null rather than an empty string when there is nothing to send', () => {
      expect(readCompanyName({ firstName: 'Jaya' })).toBeNull();
      expect(readCompanyName({ companyName: '  ' })).toBeNull();
      expect(readCompanyName(null)).toBeNull();
    });

    it('ignores non-text values that could never be a typed company name', () => {
      expect(readCompanyName({ companyName: { name: 'ABC' } })).toBeNull();
      expect(readCompanyName({ companyName: true })).toBeNull();
    });

    it('accepts a numeric company name', () => {
      expect(readCompanyName({ companyName: 360 })).toBe('360');
    });
  });
});
