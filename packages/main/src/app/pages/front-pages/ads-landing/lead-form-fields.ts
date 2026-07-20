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
 * Contact-style lead-form field set shared by the /dochek-lms, /smartlms and
 * /microlearning campaign pages. Every field is mandatory on these pages; the
 * LeadFormComponent turns `required` into Validators.required and adds
 * Validators.email for the email field. Kept in one place so the three pages
 * stay in sync and the CRM receives a consistent payload.
 */
// No `placeholder` values on purpose: with Material's outline appearance a
// placeholder appears inside the field as soon as it is focused, sitting right
// under the floated label and reading like an overlapping pre-filled value.
// The floating mat-label alone gives clean, standard behaviour — it rests
// inside the empty field and floats above once focused or filled.
export const LEAD_FORM_FIELDS: LeadFormFieldConfig[] = [
  { name: 'firstName', label: 'First name', type: 'text', required: true },
  { name: 'lastName', label: 'Last name', type: 'text', required: true },
  { name: 'city', label: 'City', type: 'text', required: true },
  { name: 'companyName', label: 'Company name', type: 'text', required: true },
  { name: 'workEmail', label: 'Work email', type: 'email', required: true },
  {
    name: 'primaryNeed',
    label: 'Primary Need',
    type: 'select',
    required: true,
    options: PRIMARY_NEED_OPTIONS,
  },
  { name: 'message', label: 'Message', type: 'textarea', required: true, rows: 4 },
];
