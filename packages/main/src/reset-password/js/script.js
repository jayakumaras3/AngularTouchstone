/* Minimal reset password interactions */

// Cache elements once after page load
// ──────────────────────────────────────────────────────────
// DOCHEK – Reset Password  |  script.js
// Matches element IDs in index.html (toggleNew / toggleConfirm,
// eyeOffNew / eyeOnNew, eyeOffConfirm / eyeOnConfirm)
// ──────────────────────────────────────────────────────────

(function () {
    'use strict';

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
    function validate() {
        var np = newInput.value;
        var cp = confInput.value;
        var ok = np.length >= 8 && cp.length > 0 && np === cp;
        resetBtn.disabled = !ok;
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
        if (!resetBtn.disabled) {
            // TODO: wire up real API call
            alert('Password reset successfully!');
        }
    });

    updateHeaderState();
    initLinkState();

}());
