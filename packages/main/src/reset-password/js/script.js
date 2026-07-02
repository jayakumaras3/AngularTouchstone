/* Minimal reset password interactions */

// Cache elements once after page load
// ──────────────────────────────────────────────────────────
// DOCHEK – Reset Password  |  script.js
// Matches element IDs in index.html (toggleNew / toggleConfirm,
// eyeOffNew / eyeOnNew, eyeOffConfirm / eyeOnConfirm)
// ──────────────────────────────────────────────────────────

(function () {
    'use strict';

    // Cloudflare Turnstile — public site key (safe to expose client-side).
    // Shared with the Angular login page; if this static page is ever served
    // from a different hostname, add that hostname to the widget in the
    // Cloudflare dashboard (or issue it a dedicated site key).
    var TURNSTILE_SITE_KEY = '0x4AAAAAADuaw8KeeasZQeVF';
    var turnstileToken = '';
    var turnstileWidgetId = null;
    var turnstileRenderAttempts = 0;

    var header         = document.querySelector('.header');
    var formCard       = document.querySelector('.form-card');
    var formTitle      = document.getElementById('formTitle');
    var statusCard     = document.getElementById('statusCard');
    var statusTitle    = document.getElementById('statusTitle');
    var statusMessage  = document.getElementById('statusMessage');
    var requestLinkBtn = document.getElementById('requestLinkBtn');
    var form           = document.getElementById('resetPasswordForm');
    var newInput       = document.getElementById('newPassword');
    var confInput      = document.getElementById('confirmPassword');
    var toggleNew      = document.getElementById('toggleNew');
    var toggleConfirm  = document.getElementById('toggleConfirm');
    var eyeOffNew      = document.getElementById('eyeOffNew');
    var eyeOnNew       = document.getElementById('eyeOnNew');
    var eyeOffConfirm  = document.getElementById('eyeOffConfirm');
    var eyeOnConfirm   = document.getElementById('eyeOnConfirm');
    var resetBtn       = document.getElementById('resetBtn');
    var backBtn        = document.getElementById('backBtn');
    var turnstileContainer = document.getElementById('turnstileContainer');
    var captchaError       = document.getElementById('captchaError');

    function getQueryParam(name) {
        var query = window.location.search || '';
        if (!query || query.length < 2) {
            return '';
        }

        var parts = query.substring(1).split('&');
        for (var i = 0; i < parts.length; i++) {
            var pair = parts[i].split('=');
            if (decodeURIComponent(pair[0] || '') === name) {
                return decodeURIComponent((pair[1] || '').replace(/\+/g, ' '));
            }
        }

        return '';
    }

    function showInvalidState(title, message) {
        if (!formCard || !statusCard || !form || !formTitle) {
            return;
        }

        formCard.classList.add('is-status-view');
        formTitle.textContent = title;
        statusTitle.textContent = title;
        statusMessage.textContent = message;
        statusCard.classList.remove('is-hidden');
        form.classList.add('is-hidden');
    }

    function initLinkState() {
        var status = String(getQueryParam('status') || '').toLowerCase();
        var error = String(getQueryParam('error') || '').toLowerCase();
        var message = getQueryParam('message');

        if (status === 'expired' || error === 'expired') {
            showInvalidState(
                'Session Expired',
                message || 'This password reset link has expired. Please request a new reset link.'
            );
            return;
        }

        if (status === 'invalid' || error === 'invalid' || status === 'used' || error === 'used') {
            showInvalidState(
                'Reset Link Invalid',
                message || 'This password reset link is no longer valid.'
            );
        }
    }

    // ── Validation ──────────────────────────────────────────
    // Enable Reset button only when:
    //   • both fields are non-empty
    //   • new password is at least 8 characters
    //   • both passwords match
    //   • Turnstile CAPTCHA verification is completed
    function validate() {
        var np = newInput.value;
        var cp = confInput.value;
        var ok = np.length >= 8 && cp.length > 0 && np === cp && !!turnstileToken;
        resetBtn.disabled = !ok;
    }

    function showCaptchaError(message) {
        if (!captchaError) {
            return;
        }
        captchaError.textContent = message;
        captchaError.classList.remove('is-hidden');
    }

    function clearCaptchaError() {
        if (!captchaError) {
            return;
        }
        captchaError.textContent = '';
        captchaError.classList.add('is-hidden');
    }

    // ── Cloudflare Turnstile ──────────────────────────────────
    // Explicit render: api.js is loaded with `render=explicit` in index.html,
    // so the widget must be rendered manually once window.turnstile is ready.
    function renderTurnstileWidget() {
        var turnstile = window.turnstile;
        if (turnstile && turnstileContainer) {
            turnstileWidgetId = turnstile.render(turnstileContainer, {
                sitekey: TURNSTILE_SITE_KEY,
                // This page forces its theme via a .theme-dark/.theme-light class
                // (set before this script runs — see the inline bootstrap in
                // index.html), not just prefers-color-scheme, so read it directly
                // instead of using Turnstile's 'auto' to keep the widget in sync.
                theme: document.documentElement.classList.contains('theme-dark') ? 'dark' : 'light',
                size: 'flexible',
                callback: function (token) {
                    turnstileToken = token;
                    clearCaptchaError();
                    validate();
                },
                'expired-callback': function () {
                    turnstileToken = '';
                    showCaptchaError('Please complete the CAPTCHA verification.');
                    validate();
                },
                'error-callback': function () {
                    turnstileToken = '';
                    showCaptchaError('CAPTCHA verification failed. Please try again.');
                    resetTurnstile();
                    validate();
                },
                'timeout-callback': function () {
                    turnstileToken = '';
                    showCaptchaError('CAPTCHA verification failed. Please try again.');
                    resetTurnstile();
                    validate();
                }
            });
        } else if (turnstileRenderAttempts < 30) {
            turnstileRenderAttempts++;
            setTimeout(renderTurnstileWidget, 200);
        } else {
            // api.js never became available (e.g. blocked by network/extension).
            showCaptchaError('Network error. Please try again.');
        }
    }

    // Resets the widget and clears the stored token — Turnstile tokens are
    // single-use, so any failed/expired attempt needs a fresh verification.
    function resetTurnstile() {
        turnstileToken = '';
        if (turnstileWidgetId !== null && window.turnstile) {
            window.turnstile.reset(turnstileWidgetId);
        }
    }

    function updateHeaderState() {
        if (!header) {
            return;
        }

        header.classList.toggle('is-scrolled', window.scrollY > 8);
    }

    // ── Event listeners ──────────────────────────────────────
    function bindPasswordToggle(button, input, eyeOff, eyeOn, labelPrefix) {
        if (!button || !input || !eyeOff || !eyeOn) {
            return;
        }

        button.addEventListener('click', function () {
            var willShow = input.type === 'password';
            input.type = willShow ? 'text' : 'password';
            eyeOff.classList.toggle('hidden', willShow);
            eyeOn.classList.toggle('hidden', !willShow);
            button.setAttribute('aria-label', (willShow ? 'Hide ' : 'Show ') + labelPrefix);
            input.focus();
        });
    }

    newInput.addEventListener('input', validate);
    confInput.addEventListener('input', validate);
    bindPasswordToggle(toggleNew, newInput, eyeOffNew, eyeOnNew, 'new password');
    bindPasswordToggle(toggleConfirm, confInput, eyeOffConfirm, eyeOnConfirm, 'confirm password');
    window.addEventListener('scroll', updateHeaderState, { passive: true });

    backBtn.addEventListener('click', function () {
        window.history.back();
    });

    requestLinkBtn.addEventListener('click', function () {
        window.location.href = '../index.html#/authentication/forgotpassword';
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (!turnstileToken) {
            showCaptchaError('Please complete the CAPTCHA verification.');
            return;
        }
        if (!resetBtn.disabled) {
            // TODO: wire up real API call — include turnstileToken in the payload
            // (e.g. { password: newInput.value, turnstileToken: turnstileToken })
            // and verify it server-side before accepting the new password.
            alert('Password reset successfully!');
        }
    });

    updateHeaderState();
    initLinkState();
    renderTurnstileWidget();

}());
