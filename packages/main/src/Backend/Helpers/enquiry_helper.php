<?php

/**
 * Shared helpers for the Angular enquiry / contact endpoints
 * (Landing::angualr_product_enquiry and Landing::angualr_contact_us).
 *
 * Company Name is optional across the site: the campaign lead forms
 * (/microlearning, /smartlms, /Dochek_awareness_207), the demo popup and Book a
 * Demo collect one, while the Contact page deliberately does not. These helpers
 * therefore only read whatever the request happened to send — there is no
 * validation rule, and a payload without a company name is just as valid as one
 * with it. Keeping the logic here means every controller and every future form
 * shares one behaviour instead of repeating it per endpoint.
 */

if (!function_exists('enquiry_company_name')) {
    /**
     * Pulls the company name out of a decoded JSON request body.
     *
     * Accepts every control name the front end uses for this field — the
     * canonical `company_name` that AuthService now normalises onto, plus the
     * older `companyName` and `company` — so an older or hand-built client
     * keeps working. Returns '' when the form has no company field, sent it
     * empty, or sent whitespace only.
     *
     * @param mixed $json Decoded request body, normally an array.
     */
    function enquiry_company_name($json): string
    {
        if (!is_array($json)) {
            return '';
        }

        foreach (['company_name', 'companyName', 'company'] as $key) {
            // Text or a number only. is_scalar() would also let a boolean through
            // and render it as "1"; arrays and objects are not names either.
            if (!isset($json[$key])) {
                continue;
            }

            if (!is_string($json[$key]) && !is_int($json[$key]) && !is_float($json[$key])) {
                continue;
            }

            $value = trim((string) $json[$key]);

            if ($value !== '') {
                return $value;
            }
        }

        return '';
    }
}

if (!function_exists('enquiry_company_line')) {
    /**
     * Builds the Company Name row for an admin email, or '' when the request
     * carried no company name — so forms without the field produce exactly the
     * email they produce today, with no stray empty "Company Name:" label.
     *
     * The value is escaped because it is user input being interpolated into an
     * HTML email body.
     *
     * @param mixed  $json  Decoded request body.
     * @param string $label Row label, so each endpoint keeps its existing wording.
     */
    function enquiry_company_line($json, string $label = 'Company Name'): string
    {
        $company = enquiry_company_name($json);

        if ($company === '') {
            return '';
        }

        return '<strong>' . $label . ':</strong> ' . esc($company) . '<br>';
    }
}
