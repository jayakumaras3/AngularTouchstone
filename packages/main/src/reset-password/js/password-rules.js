/* ──────────────────────────────────────────────────────────
   DOCHEK – Password rule definitions
   Single source of truth for this static page's password
   checklist/validation. Kept in sync with the Angular Sign Up
   page's `passwordRules` in
   app/pages/authentication/signup/signup.component.ts — the
   Angular app and this static micro-site build separately, so
   the rule set is mirrored here rather than imported directly.
   ────────────────────────────────────────────────────────── */
(function (global) {
    'use strict';

    var RULES = [
        { key: 'minLength',   label: 'Minimum 8 characters',        test: function (v) { return v.length >= 8; } },
        { key: 'uppercase',   label: 'One uppercase letter',         test: function (v) { return /[A-Z]/.test(v); } },
        { key: 'lowercase',   label: 'One lowercase letter',         test: function (v) { return /[a-z]/.test(v); } },
        { key: 'number',      label: 'One number',                   test: function (v) { return /[0-9]/.test(v); } },
        { key: 'specialChar', label: 'Special character (!@#$%^&*()_+-=[]{}|;:<>?.)', test: function (v) { return /!@#$%^&*()_+-=[]{}|;:<>?./.test(v); } }
    ];

    function isValid(value) {
        var v = value || '';
        for (var i = 0; i < RULES.length; i++) {
            if (!RULES[i].test(v)) {
                return false;
            }
        }
        return true;
    }

    global.PasswordRules = {
        rules: RULES,
        isValid: isValid
    };
}(window));
