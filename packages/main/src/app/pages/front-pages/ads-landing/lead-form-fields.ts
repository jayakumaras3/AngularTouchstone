import { LeadFormFieldConfig, LeadFormFieldOption } from './models/ads-landing.model';

/**
 * Shared "Primary Need / Training Type" options for the campaign lead forms.
 */
export const PRIMARY_NEED_OPTIONS: LeadFormFieldOption[] = [
  { label: 'LMS', value: 'lms' },
  { label: 'Microlearning Library', value: 'microlearning-library' },
  { label: 'Custom Training Content', value: 'custom-training-content' },
  { label: 'Immersive Learning', value: 'immersive-learning' },
  { label: 'Other', value: 'other' },
];

/**
 * Contact-style lead-form field set used by the /Dochek_awareness_207, /smartlms
 * and /microlearning campaign pages — and by nothing else, so changes here stay
 * scoped to those three pages. Every field is mandatory on these pages; the
 * LeadFormComponent turns `required` into Validators.required and adds
 * Validators.email for the email field. Kept in one place so the three pages
 * stay in sync and the CRM receives a consistent payload.
 *
 * Deliberately shorter than the site's other contact forms: these campaign
 * pages ask for a single "Name" only (no separate last name) and skip City, to
 * keep the ad-traffic form as low-friction as possible. The control is still
 * named `firstName` so the existing `angualr_product_enquiry` PHP mapping keeps
 * working untouched; the endpoint reads `lastName` with `?? ''`, so its absence
 * from the payload is harmless. The Contact page, the demo popup and Book a
 * Demo build their own controls and are unaffected by this list.
 *
 * Message is the one optional field here (`required: false`), and it carries no
 * length validation of any kind — see LeadFormComponent.buildForm(). Material
 * derives the "*" marker from `Validators.required`, so leaving that validator
 * off is also what renders the label as "Message" rather than "Message*". The
 * other forms on the site keep their own required + 20-character Message rules.
 */
// No `placeholder` values on purpose: with Material's outline appearance a
// placeholder appears inside the field as soon as it is focused, sitting right
// under the floated label and reading like an overlapping pre-filled value.
// The floating mat-label alone gives clean, standard behaviour — it rests
// inside the empty field and floats above once focused or filled.
export const LEAD_FORM_FIELDS: LeadFormFieldConfig[] = [
  { name: 'firstName', label: 'Name', type: 'text', required: true },
  { name: 'companyName', label: 'Company name', type: 'text', required: true },
  { name: 'workEmail', label: 'Work email', type: 'email', required: true },
  {
    name: 'primaryNeed',
    label: 'Primary Need',
    type: 'select',
    required: true,
    options: PRIMARY_NEED_OPTIONS,
  },
  { name: 'message', label: 'Message', type: 'textarea', required: false, rows: 4 },
];
