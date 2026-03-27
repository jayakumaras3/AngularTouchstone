# CodeIgniter Backend Structure - Complete Reference

## Overview
The CodeIgniter backend provides REST APIs for the Angular frontend. The backend is deployed at:
- **Production**: `https://dochek.com/landing`
- **Staging**: `https://staging.dochek.com/landing`
- **Local**: `https://172.16.0.173/DOCHEK/landing`

---

## 📁 CodeIgniter 4 Directory Structure

Based on the implementation guide, the expected structure should be:

```
codeigniter-project/
├── app/
│   ├── Controllers/
│   │   ├── Api.php                          ← Main API Controller
│   │   └── Home.php
│   ├── Models/
│   │   ├── User_model.php                   ← User model
│   │   └── PasswordReset_model.php          ← Password reset model
│   ├── Config/
│   │   ├── Routes.php                       ← Route definitions
│   │   ├── Database.php                     ← Database config
│   │   └── Email.php                        ← Email configuration
│   ├── Views/
│   │   └── [Legacy PHP Views - mostly deprecated in favor of APIs]
│   └── Database/
│       └── Migrations/
│           └── [Migration files]
├── .env                                     ← Environment configuration
├── .gitignore
└── public/
    ├── index.php
    └── assets/
```

---

## 🔧 Database Schema

### Users Table
```sql
CREATE TABLE `users` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `email` VARCHAR(255) NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL,
  `name` VARCHAR(255),
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `email_idx` (`email`)
);
```

### Password Resets Table
```sql
CREATE TABLE IF NOT EXISTS `password_resets` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `user_id` INT NOT NULL,
  `token` VARCHAR(500) NOT NULL UNIQUE,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `expires_at` TIMESTAMP NULL,
  `used` TINYINT DEFAULT 0,
  FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE,
  INDEX `token_idx` (`token`),
  INDEX `user_id_idx` (`user_id`),
  INDEX `expires_at_idx` (`expires_at`)
);
```

---

## 🛣️ API Endpoints & Routes

### 1. **Forgot Password Endpoint**

**Route Configuration** (in `app/Config/Routes.php`):
```php
$route['api/forgot_password'] = 'api/forgot_password';
```

**Request:**
```
POST /api/forgot_password
Content-Type: application/json

{
  "email": "user@example.com"
}
```

**Success Response** (200):
```json
{
  "status": "success",
  "message": "Reset link sent to your email. Please check your inbox."
}
```

**Error Response** (404):
```json
{
  "status": "error",
  "message": "Email not registered"
}
```

**Error Response** (400):
```json
{
  "status": "error",
  "message": "Invalid email address"
}
```

---

### 2. **Verify Token Endpoint**

**Route Configuration** (in `app/Config/Routes.php`):
```php
$route['api/verify_token'] = 'api/verify_token';
```

**Request:**
```
GET /api/verify_token?token=ABC123DEF456
```

**Success Response** (200):
```json
{
  "status": "valid",
  "user_id": 123
}
```

**Error Response** (400):
```json
{
  "status": "invalid",
  "message": "Token has expired or is invalid"
}
```

---

### 3. **Reset Password Endpoint**

**Route Configuration** (in `app/Config/Routes.php`):
```php
$route['api/reset_password'] = 'api/reset_password';
```

**Request:**
```
POST /api/reset_password
Content-Type: application/json

{
  "token": "ABC123DEF456",
  "password": "newPassword123!"
}
```

**Success Response** (200):
```json
{
  "status": "success",
  "message": "Password reset successfully. You can now login with your new password."
}
```

**Error Response** (400):
```json
{
  "status": "error",
  "message": "Token has expired or is invalid"
}
```

---

## 📋 Controller Implementation

### File: `app/Controllers/Api.php`

**Key Methods:**
- `forgot_password()` - POST
- `verify_token()` - GET
- `reset_password()` - POST
- `generate_secure_token()` - Private helper
- `send_reset_email()` - Private helper

**Key Features:**
- JSON request/response handling
- CSRF token support
- HTTP status code management
- Exception handling with try-catch
- Email sending with HTML template
- Password hashing with bcrypt (cost 12)
- Secure token generation: `bin2hex(random_bytes(32))`

---

## 📦 Model Implementations

### File: `app/Models/User_model.php`

**Key Methods:**
```php
public function email_exists($email)
public function get_by_email($email)
public function get_by_id($user_id)
public function update_password($user_id, $hashed_password)
```

### File: `app/Models/PasswordReset_model.php`

**Key Methods:**
```php
public function create_reset_token($user_id, $token, $expiry_minutes = 30)
public function get_by_token($token)
public function is_token_valid($token)
public function mark_as_used($token)
public function cleanup_expired_tokens()
public function get_user_id_by_token($token)
```

---

## ⚙️ Configuration Files

### 1. **File: `.env`**

```env
# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
MAIL_FROM=noreply@dochek.com

# Angular App URL
ANGULAR_APP_URL=https://staging.dochek.com

# CodeIgniter Base URL
CI_ENVIRONMENT=production
```

### 2. **File: `app/Config/Routes.php`**

```php
// Password Reset APIs
$route['api/forgot_password'] = 'api/forgot_password';
$route['api/verify_token'] = 'api/verify_token';
$route['api/reset_password'] = 'api/reset_password';

// Legacy login endpoint (existing)
$route['api/login_register'] = 'api/login_register';
```

### 3. **File: `app/Config/Email.php`** (Optional - can use .env)

```php
public $default = [
    'protocol' => 'smtp',
    'SMTPHost' => 'smtp.gmail.com',
    'SMTPUser' => 'your-email@gmail.com',
    'SMTPPass' => 'your-app-password',
    'SMTPPort' => 587,
    'SMTPCrypto' => 'tls',
    'mailType' => 'html',
    'charset' => 'UTF-8',
    'newline' => "\r\n",
];
```

---

## 📧 Email Template

### Password Reset Email

The email is sent as HTML with the following structure:

**Key Elements:**
- Header with gradient background (purple/blue)
- User greeting with name
- Reset button link
- Fallback URL in plain text
- 30-minute expiry warning
- Support footer

**Email is sent by:**
```
From: DOCHEK Support <noreply@dochek.com>
Reply-To: support@dochek.com
Subject: Password Reset Request
```

**Template includes:**
- Professional HTML/CSS styling
- Responsive design
- Button with hover state
- Fallback text link
- Expiry warning box
- Plain text alternative

---

## 🔐 Security Features

✅ **Implemented Security:**
1. **Token Expiry**: 30 minutes
2. **Single-Use Tokens**: Marked as used after password reset
3. **Secure Hashing**: Bcrypt with cost factor 12
4. **Secure Token Generation**: `bin2hex(random_bytes(32))`
5. **Email Validation**: Before sending reset link
6. **HTTP Status Codes**: Proper error codes (400, 404, 405, 500)
7. **Input Validation**: Email and password strength checks
8. **CSRF Support**: Ready for CSRF token validation
9. **Exception Handling**: Try-catch with error logging
10. **Password Requirements**: 8+ characters

**Recommended Additional Security:**
- Enable HTTPS only
- Implement rate limiting on endpoints
- Log password reset events
- Enable two-factor authentication
- Use environment variables for all secrets
- Implement CORS headers if needed
- Add email verification step

---

## 🔗 Frontend Integration Points

### Angular Service Method Calls

All methods in `app/services/login/auth.service.ts`:

```typescript
// 1. Forgot Password
forgotPassword(email: string): Observable<any>
// Calls: POST /api/forgot_password

// 2. Verify Reset Token
verifyResetToken(token: string): Observable<any>
// Calls: GET /api/verify_token?token=XYZ

// 3. Reset Password
resetPassword(token: string, password: string): Observable<any>
// Calls: POST /api/reset_password
```

### Angular Components Using Backend

**Forgot Password Components:**
- `app/pages/authentication/side-forgot-password/`
- `app/pages/authentication/boxed-forgot-password/`

**Reset Password Components:**
- `app/pages/authentication/side-reset-password/`
- `app/pages/authentication/boxed-reset-password/`

---

## 📝 Testing the API

### 1. Test Forgot Password
```bash
curl -X POST https://staging.dochek.com/landing/api/forgot_password \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com"}'

# Expected Response:
# {"status":"success","message":"Reset link sent to your email. Please check your inbox."}
```

### 2. Test Verify Token
```bash
curl -X GET "https://staging.dochek.com/landing/api/verify_token?token=ABC123DEF456"

# Expected Response:
# {"status":"valid","user_id":123}
```

### 3. Test Reset Password
```bash
curl -X POST https://staging.dochek.com/landing/api/reset_password \
  -H "Content-Type: application/json" \
  -d '{"token":"ABC123DEF456","password":"newPassword123!"}'

# Expected Response:
# {"status":"success","message":"Password reset successfully. You can now login with your new password."}
```

---

## 🐛 Troubleshooting

| Issue | Cause | Solution |
|-------|-------|----------|
| Email not sending | SMTP config incorrect | Verify SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD in `.env` |
| "Email not registered" for valid email | User not in database | Check users table - email should be lowercase and exact match |
| Token validation fails | Token expired or invalid | Tokens expire after 30 minutes, check expires_at in database |
| CORS errors | Frontend on different domain | Add CORS headers in API Controller |
| Password not updating | Update query failed | Verify User_model->update_password() method exists and user_id is correct |
| Token not found in database | Password_resets table missing | Run migration to create password_resets table |
| 405 Method Not Allowed | Wrong HTTP method used | Forgot/Reset use POST, Verify uses GET |
| 500 Internal Server error | Exception in controller | Check CodeIgniter logs in `writable/logs/` |

---

## 🔄 Data Flow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│ FORGOT PASSWORD FLOW                                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1. User enters email in Angular form                      │
│  2. Angular calls: POST /api/forgot_password               │
│  3. Backend validates email exists in users table          │
│  4. Backend generates secure token (bin2hex random_bytes)  │
│  5. Backend stores token in password_resets table          │
│  6. Backend sends email with reset link (30 min expiry)    │
│  7. Angular shows success message                          │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ RESET PASSWORD FLOW                                         │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1. User clicks reset link from email                      │
│  2. URL contains token: /reset-password/:token             │
│  3. Angular calls: GET /api/verify_token?token=XYZ         │
│  4. Backend validates token not expired/used               │
│  5. Backend returns user_id if valid                       │
│  6. Angular shows reset password form                      │
│  7. User enters new password (8+ chars, mixed case, etc)   │
│  8. Angular calls: POST /api/reset_password                │
│  9. Backend validates token again                          │
│ 10. Backend hashes password with bcrypt (cost 12)          │
│ 11. Backend updates users.password                         │
│ 12. Backend marks token as used (single-use)               │
│ 13. Angular redirects to login page                        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 📚 Related Documentation

- [BACKEND_IMPLEMENTATION.md](BACKEND_IMPLEMENTATION.md) - Detailed code implementation
- [IMPLEMENTATION_SUMMARY.md](IMPLEMENTATION_SUMMARY.md) - Frontend and backend changes summary
- [EMAIL_TEMPLATE.md](EMAIL_TEMPLATE.md) - Complete email template with styling
- [IMPLEMENTATION_NOTES.md](IMPLEMENTATION_NOTES.md) - Additional implementation notes

---

## 🚀 Deployment Checklist

- [ ] Create `password_resets` table in production database
- [ ] Verify `users` table exists with `id`, `email`, `password` fields
- [ ] Configure `.env` with correct SMTP settings
- [ ] Set `ANGULAR_APP_URL` to production URL
- [ ] Test email sending with real SMTP account
- [ ] Deploy `Api.php` controller to production
- [ ] Deploy `User_model.php` and `PasswordReset_model.php` to production
- [ ] Update `app/Config/Routes.php` with new API routes
- [ ] Test all endpoints with curl or Postman
- [ ] Monitor error logs in `writable/logs/`
- [ ] Set up email rate limiting on endpoints
- [ ] Enable HTTPS only in production
- [ ] Add CSRF token validation if needed
- [ ] Implement request logging for security audit

---

**Last Updated**: March 25, 2026
**Framework**: CodeIgniter 4
**Frontend**: Angular (Standalone Components)
