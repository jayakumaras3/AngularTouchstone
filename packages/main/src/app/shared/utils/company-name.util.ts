/**
 * Global, opt-in Company Name handling for every form that posts through
 * AuthService (`sendProductEnquiry` / `sendContact`).
 *
 * Some forms on the site collect a company name and some deliberately do not —
 * the Contact page, for instance, asks only for First Name / Last Name / Email /
 * Enquiry / Message. Company Name must therefore never be mandatory and must
 * never be injected into a form that does not have the field: this helper only
 * *reads* whatever the caller already submitted.
 *
 * The detection is purely value-based, so no form has to declare anything. A
 * payload that carries a non-empty company value under any of the control names
 * already in use across the app gets it normalised onto the single key the PHP
 * endpoints read; a payload without one is returned untouched, with no
 * `company_name` key added at all. That keeps "form has the field" and "form
 * does not have the field" distinguishable server-side, instead of collapsing
 * both onto an empty string.
 */

/** The canonical key the shared PHP endpoints read the company name from. */
export const COMPANY_NAME_PAYLOAD_KEY = 'company_name';

/**
 * Control/payload names that mean "company name" somewhere in the app, in
 * priority order: the canonical key first, then the campaign lead forms'
 * `companyName`, then the demo popup / Book a Demo `company`. Extending this
 * list is all a future form needs to opt in under a different control name.
 */
const COMPANY_NAME_KEYS = [COMPANY_NAME_PAYLOAD_KEY, 'companyName', 'company'] as const;

/**
 * Returns the trimmed company name a payload carries, or `null` when the form
 * has no company field, left it empty, or filled it with whitespace only.
 */
export function readCompanyName(source: Record<string, any> | null | undefined): string | null {
  if (!source) {
    return null;
  }

  for (const key of COMPANY_NAME_KEYS) {
    const raw = source[key];
    // Anything that is not text (null after form.reset(), objects, booleans) is
    // not a company name. Numbers are accepted because a company name may be
    // typed as digits and Angular can hand back a number for such a control.
    if (typeof raw !== 'string' && typeof raw !== 'number') {
      continue;
    }
    const value = String(raw).trim();
    if (value !== '') {
      return value;
    }
  }

  return null;
}

/**
 * Copies a payload, adding `company_name` only when the submitted form actually
 * supplied one. Never mutates the input and never adds an empty key, so forms
 * without a Company Name field keep their exact existing payload shape.
 */
export function withCompanyName(payload: Record<string, any> | null | undefined): Record<string, any> {
  const base = payload ?? {};
  const companyName = readCompanyName(base);

  if (companyName === null) {
    return base;
  }

  return { ...base, [COMPANY_NAME_PAYLOAD_KEY]: companyName };
}
