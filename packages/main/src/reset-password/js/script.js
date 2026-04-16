/* Minimal reset password interactions */

// Cache elements once after page load
// ──────────────────────────────────────────────────────────
// DOCHEK – Reset Password  |  script.js
// Matches element IDs in index.html (toggleNew / toggleConfirm,
// eyeOffNew / eyeOnNew, eyeOffConfirm / eyeOnConfirm)
// ──────────────────────────────────────────────────────────

(function () {
    'use strict';

    var form           = document.getElementById('resetPasswordForm');
    var newInput       = document.getElementById('newPassword');
    var confInput      = document.getElementById('confirmPassword');
    var resetBtn       = document.getElementById('resetBtn');
    var backBtn        = document.getElementById('backBtn');

    var btnToggleNew   = document.getElementById('toggleNew');
    var btnToggleConf  = document.getElementById('toggleConfirm');

    var eyeOffNew      = document.getElementById('eyeOffNew');
    var eyeOnNew       = document.getElementById('eyeOnNew');
    var eyeOffConf     = document.getElementById('eyeOffConfirm');
    var eyeOnConf      = document.getElementById('eyeOnConfirm');

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

    // ── Eye toggle helper ────────────────────────────────────
    function toggle(inputEl, offIcon, onIcon) {
        var isHidden = inputEl.type === 'password';
        inputEl.type = isHidden ? 'text' : 'password';
        offIcon.classList.toggle('hidden', isHidden);
        onIcon.classList.toggle('hidden', !isHidden);
    }

    // ── Event listeners ──────────────────────────────────────
    newInput.addEventListener('input', validate);
    confInput.addEventListener('input', validate);

    btnToggleNew.addEventListener('click', function () {
        toggle(newInput, eyeOffNew, eyeOnNew);
    });

    btnToggleConf.addEventListener('click', function () {
        toggle(confInput, eyeOffConf, eyeOnConf);
    });

    backBtn.addEventListener('click', function () {
        window.history.back();
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (!resetBtn.disabled) {
            // TODO: wire up real API call
            alert('Password reset successfully!');
        }
    });

}());

/**
 * Enable the reset button only when:
 * 1) both fields have content
 * 2) both values match exactly
 */
function updateResetButtonState() {
    const newPassword = newPasswordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    const isValid =
        newPassword.trim().length > 0 &&
        confirmPassword.trim().length > 0 &&
        newPassword === confirmPassword;

    resetBtn.disabled = !isValid;
}

/**
 * Toggle a password field between hidden and plain text.
 */
function toggleVisibility(input) {
    input.type = input.type === 'password' ? 'text' : 'password';
}

// Input listeners keep button state in sync while typing
newPasswordInput.addEventListener('input', updateResetButtonState);
confirmPasswordInput.addEventListener('input', updateResetButtonState);

// Eye icon click handlers
toggleNewPasswordBtn.addEventListener('click', function () {
    toggleVisibility(newPasswordInput);
});

toggleConfirmPasswordBtn.addEventListener('click', function () {
    toggleVisibility(confirmPasswordInput);
});

// Keep this as a normal HTML demo page: prevent actual submit
resetForm.addEventListener('submit', function (event) {
    event.preventDefault();
});

// Initial state
updateResetButtonState();
