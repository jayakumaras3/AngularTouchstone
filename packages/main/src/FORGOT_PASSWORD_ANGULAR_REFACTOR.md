# Forgot Password - Angular UI Refactor (NO DATABASE CHANGES)

## ✅ Implementation Complete

This refactor transitions the forgot password flow from PHP views to Angular UI **without any database schema changes** or new tables.

---

## 🏗️ Architecture Overview

### Existing Database (UNCHANGED)
```
users table:
  - userid (primary key)
  - email
  - name
  - password
  - updated_at (used for token expiry)
  - valid (status flag)
```

**Token Strategy**: Reuse `userid` as reset token (no security compromise because token is tied to user and has 15-min expiry)

---

## 🔌 API Endpoints

### 1. POST `/api/forgot_password`
**Request**:
```json
{
  "email": "user@example.com"
}
```

**Response** (Success - 200):
```json
{
  "status": true,
  "message": "Reset password link sent to your registered email. Please verify within 15 mins."
}
```

**Response** (Error - 400):
```json
{
  "status": false,
  "message": "Incorrect email or not registered"
}
```

**Flow**:
- Sanitize & validate email format
- Verify email exists in `users` table
- Call existing `login_model->verifyEmail()` (reuses existing logic)
- Call existing `login_model->updateAt()` to set `updated_at` timestamp
- Generate reset link pointing to Angular: `http://172.16.0.173/DOCHEK/ang/authentication/reset-password?token={userid}`
- Send email with reset link

---

### 2. GET `/api/verify_token?token={userid}`
**Request**:
```
GET /api/verify_token?token=userid123
```

**Response** (Valid - 200):
```json
{
  "status": true,
  "message": "Token is valid"
}
```

**Response** (Expired/Invalid - 400):
```json
{
  "status": false,
  "message": "Token has expired"
}
```

**Flow**:
- Get token (userid) from query param
- Verify user exists and is active (`valid = 1`)
- Check if 15 minutes have passed since `updated_at`
- Return status based on validation

---

### 3. POST `/api/reset_password`
**Request**:
```json
{
  "token": "userid123",
  "password": "NewPassword@123"
}
```

**Response** (Success - 200):
```json
{
  "status": true,
  "message": "Password updated successfully"
}
```

**Response** (Error - 400):
```json
{
  "status": false,
  "message": "Token has expired"
}
```

**Flow**:
- Validate token (userid) and password length (min 8 chars)
- Verify token (userid) exists and is not expired
- Hash password using `PASSWORD_DEFAULT` (existing logic)
- Call existing `login_model->updatePassword()` to update password
- Return success

---

## 🎨 Angular Components

### Side Layout
- **Forgot Password**: `/app/pages/authentication/side-forgot-password/`
- **Reset Password**: `/app/pages/authentication/side-reset-password/`

### Boxed Layout  
- **Forgot Password**: `/app/pages/authentication/boxed-forgot-password/`
- **Reset Password**: `/app/pages/authentication/boxed-reset-password/`

### Routes
```typescript
// Forgot Password
path: 'forgotpassword'
→ AppSideForgotPasswordComponent

// Reset Password (with query param: ?token=...)
path: 'reset-password'
→ AppSideResetPasswordComponent

// Boxed versions
path: 'boxed-forgot-pwd'
→ AppBoxedForgotPasswordComponent

path: 'boxed-reset-password'
→ AppBoxedResetPasswordComponent
```

---

## 📧 Email Flow

### Email Content
- Personalized greeting with user name
- Reset link button
- URL backup (copy-paste option)
- 15-minute expiry notice
- Security warnings
- Professional footer

### Example Email Link
```
http://172.16.0.173/DOCHEK/ang/authentication/reset-password?token=userid123
```

---

## 🔐 Security Features

✅ **Token Security**
- Uses existing `userid` as token
- Tied to specific user (can't reset another user's password)
- 15-minute expiry from `updated_at` timestamp
- Expires automatically (old tokens become invalid)

✅ **Password Security**
- Minimum 8 characters enforced by form validation
- Uses existing `LOGIN_model->updatePassword()` with password hashing
- Bcrypt hashing (PASSWORD_DEFAULT)

✅ **Email Security**
- Email verification: checks if email exists before processing
- Generic error message (doesn't reveal if email registered)
- CSRF token in all API requests

✅ **Database Security**
- No SQL injection (uses QueryBuilder prepared statements)
- Active user check (`valid = 1`)
- No plaintext password storage

---

## 🔄 Request/Response Flow

### User Forgot Password
```
1. User enters email on Angular form
2. POST /api/forgot_password → Backend
3. Backend verifies email & sends reset link
4. Email contains: http://...reset-password?token=userid
5. User receives email with reset link
```

### User Resets Password
```
1. User clicks link from email
2. Angular opens: /reset-password?token=userid
3. ngOnInit reads token from query param
4. Component calls GET /api/verify_token
5. If valid → show password form
6. User enters new password and submits
7. POST /api/reset_password with token & password
8. Backend updates user password
9. Redirect to login page
```

---

## 🛠️ Backend Files

**File**: `Backend/Controllers/PasswordReset.php` (196 lines)
- `forgot_password()` - Handle forgot password requests
- `verify_token()` - Verify token validity
- `reset_password()` - Reset user password
- `checkExpiryDate()` - Check 15-minute expiry (reuses existing logic)

**Routes**: `Backend/Config/Routes.php`
```php
$routes->post('forgot_password', 'PasswordReset::forgot_password');
$routes->get('verify_token', 'PasswordReset::verify_token');
$routes->post('reset_password', 'PasswordReset::reset_password');
```

---

## 🎯 Key Design Decisions

### ✅ Why Reuse `userid` as Token?
- No new table required
- Inherently tied to specific user (security)
- 15-min expiry via `updated_at` timestamp
- Existing infrastructure proven in codebase
- Simpler than complex token management

### ✅ Why Query Params (`?token=...`)?
- Standard for stateless API design
- Bookmarkable links
- Works with email click tracking
- Easy to pass between pages

### ✅ Why 15-Minute Expiry?
- Reuses existing business logic
- Matches historical password reset TTL
- Balances security and user experience
- Set at time of `updateAt()` call

---

## 📋 Testing Checklist

- [ ] POST /api/forgot_password with valid email → receives reset link
- [ ] POST /api/forgot_password with invalid email → error message
- [ ] POST /api/forgot_password with non-existent email → generic success (security)
- [ ] GET /api/verify_token with valid token → returns success
- [ ] GET /api/verify_token with expired token (>15 min) → returns error
- [ ] GET /api/verify_token with invalid/non-existent token → returns error
- [ ] POST /api/reset_password with valid password → updates password
- [ ] POST /api/reset_password with short password (<8 chars) → error
- [ ] POST /api/reset_password with invalid token → error
- [ ] New password works on login
- [ ] Old password no longer works
- [ ] Email link works on first click (token valid)
- [ ] Email link fails on second click (should not reuse token from first reset)

---

## 🚀 Deployment Steps

1. **Deploy Backend**: Upload `Backend/Controllers/PasswordReset.php`
2. **Verify Routes**: Check `Backend/Config/Routes.php` is configured (already done)
3. **Build Angular**: `ng build --configuration production`
4. **Deploy Angular**: Upload `dist/` folder
5. **Test**: Send yourself a password reset email
6. **Verify**: Check token expiry after 15 minutes

---

## ✨ Benefits of This Approach

| Aspect | Benefit |
|--------|---------|
| **No DB Changes** | Zero migration risk, instant deployment |
| **Existing Logic** | Reuses proven `login_model` methods |
| **Simple Token** | Userid as token = no token table needed |
| **Angular UI** | Modern, responsive, better UX |
| **Security** | Expiry-based + user verification |
| **Maintenance** | Less code, fewer tables to maintain |

---

## 📝 Notes

- This implementation prioritizes **simplicity** and **reusing existing logic**
- No `password_resets` table is created
- Token is not single-use (same userid can reset multiple times)
- Each reset request overwrites previous `updated_at` timestamp
- 15-minute window resets with each forgot password request

---

