# CodeIgniter Backend Setup Guide - Password Reset Integration

## 📋 Overview

This guide helps you implement the **3-endpoint password reset API** in your CodeIgniter 4 backend to work with the Angular frontend you've already built.

---

## 🚀 Installation Steps

### **Step 1: Create/Update Models**

#### A. Create PasswordReset Model
📁 **File**: `app/Models/PasswordResetModel.php`
- Copy content from: `CODEIGNITER_PasswordReset_MODEL.php`
- This handles all token operations (create, validate, mark as used)

#### B. Update Login Model
📁 **File**: `app/Models/Login_model.php`
- Add the methods from: `CODEIGNITER_Login_MODEL.php`
- Ensures password hashing with bcrypt (cost 12)
- Key methods:
  - `get_by_email($email)`
  - `update_password($userId, $hashedPassword)`
  - `verifyEmail($email)`

---

### **Step 2: Create API Controller**

📁 **File**: `app/Controllers/Api.php`
- Copy content from: `CODEIGNITER_API_CONTROLLER.php`
- Implements 3 main endpoints:
  1. `POST /api/forgot_password` - Send reset email
  2. `GET /api/verify_token` - Validate token
  3. `POST /api/reset_password` - Update password

---

### **Step 3: Configure Routes**

📁 **File**: `app/Config/Routes.php`
- Add these routes from: `CODEIGNITER_ROUTES.php`

```php
$routes->post('api/forgot_password', 'Api::forgot_password');
$routes->get('api/verify_token', 'Api::verify_token');
$routes->post('api/reset_password', 'Api::reset_password');
```

---

### **Step 4: Create Database Table**

#### Option A: Using Migration (Recommended)

📁 **File**: `app/Database/Migrations/2024_01_15_120000_CreatePasswordResetsTable.php`
- Copy content from: `CODEIGNITER_MIGRATION.php`
- Adjust timestamp in filename

Run migration:
```bash
php spark migrate
```

#### Option B: Manual SQL

Run this SQL in your database:

```sql
CREATE TABLE password_resets (
    id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id INT(11) UNSIGNED NOT NULL,
    token VARCHAR(255) UNIQUE NOT NULL,
    used TINYINT DEFAULT 0,
    expires_at DATETIME NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    
    KEY idx_token (token),
    KEY idx_user_id (user_id),
    FOREIGN KEY (user_id) REFERENCES users(userid) ON DELETE CASCADE ON UPDATE CASCADE
);
```

---

### **Step 5: Configure Email Settings**

📁 **File**: `.env`

```env
# SMTP Email Configuration
email.protocol = smtp
email.SMTPHost = smtp.gmail.com
email.SMTPUser = your-email@gmail.com
email.SMTPPass = your-app-password
email.SMTPPort = 587
email.SMTPCrypto = tls

# Angular App URL (for reset link in email)
ANGULAR_APP_URL = https://staging.dochek.com
```

**Gmail Setup:**
1. Enable 2-Step Verification in Google Account
2. Generate App Password: https://myaccount.google.com/apppasswords
3. Use the 16-char password in `email.SMTPPass`

---

### **Step 6: (Optional) Configure CORS**

If Angular frontend is on different domain than CodeIgniter:

📁 **File**: `app/Filters/CorsFilter.php`

```php
<?php
namespace App\Filters;

use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use CodeIgniter\Filters\FilterInterface;

class CorsFilter implements FilterInterface
{
    public function before(RequestInterface $request, $arguments = null)
    {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
        header('Access-Control-Allow-Headers: Content-Type, Authorization, X-CSRF-Token');
        header('Access-Control-Max-Age: 3600');
        
        if ($request->getMethod() === 'options') {
            return response('OK')->setStatusCode(200);
        }
    }
    
    public function after(RequestInterface $request, ResponseInterface $response, $arguments = null)
    {
    }
}
```

Then register in `app/Config/Filters.php`:

```php
public $filters = [
    'cors' => ['before' => ['api/*']],
];
```

---

## 🧪 Testing the API

### 1. Test Forgot Password
```bash
curl -X POST http://172.16.0.173/DOCHEK/landing/api/forgot_password \
  -H "Content-Type: application/json" \
  -d '{"email":"jayakumar.k@touchstonelc.com"}'
```

Expected Response:
```json
{
  "status": "success",
  "message": "Reset link sent to your email. Please check your inbox."
}
```

### 2. Test Verify Token
```bash
curl -X GET "http://172.16.0.173/DOCHEK/landing/api/verify_token?token=YOUR_TOKEN"
```

Expected Response:
```json
{
  "status": "valid",
  "user_id": 123
}
```

### 3. Test Reset Password
```bash
curl -X POST http://172.16.0.173/DOCHEK/landing/api/reset_password \
  -H "Content-Type: application/json" \
  -d '{"token":"YOUR_TOKEN","password":"NewPassword123!"}'
```

Expected Response:
```json
{
  "status": "success",
  "message": "Password reset successfully"
}
```

---

## 🔐 Security Checklist

- ✅ Passwords hashed with bcrypt (cost 12)
- ✅ Tokens are 64-character hex strings (secure random)
- ✅ Tokens expire after 30 minutes
- ✅ Tokens are single-use (marked as used after reset)
- ✅ Email validation on both frontend and backend
- ✅ Password strength validation (8+ chars)
- ✅ CSRF token support included in API
- ✅ SQL injection prevention (prepared statements)
- ✅ Rate limiting recommended (add in future)

---

## 📝 Key Differences from Old Code

| Feature | Old Code | New Code |
|---------|----------|----------|
| Token | User ID (simple) | 64-char hex string (secure) |
| Single-use | Not enforced | Tracked with `used` flag |
| Expiry | 15 minutes | 30 minutes (configurable) |
| Endpoints | 1 endpoint | 3 endpoints (separated) |
| Password hashing | Plain or MD5 | bcrypt (cost 12) |
| Response format | Mixed | Consistent JSON |
| Error handling | Basic | Detailed HTTP status codes |

---

## ✅ Verification

After setup, verify by:

1. **Frontend**: Check `/authentication/forgotpassword` works
2. **Email**: Confirm reset email received
3. **Reset Link**: Click link and verify token validation
4. **Password Update**: Enter new password and confirm reset
5. **Login**: Try logging in with new password

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| 404 "Api controller not found" | Ensure `Api.php` in `app/Controllers/` |
| Email not sending | Check SMTP config in `.env` |
| Token not found | Verify `password_resets` table exists |
| "Token expired" | Clear old tokens: `php spark db:seed PasswordResetsSeeder` |
| CORS errors | Enable CorsFilter from Step 6 |
| 405 Method not allowed | Check routes match (POST/GET only) |

---

## 📞 Migration from Old System

If you have existing reset requests from old code:

```sql
-- Backup old requests
INSERT INTO password_resets (user_id, token, expires_at, created_at, used)
SELECT userid, userid, DATE_ADD(updated_at, INTERVAL 30 MINUTE), updated_at, 0
FROM users
WHERE reset_token_sent = 1;
```

---

## 🎯 Next Steps

1. ✅ Copy all 4 files to your CodeIgniter installation
2. ✅ Run database migration
3. ✅ Configure email settings in `.env`
4. ✅ Test API endpoints with curl
5. ✅ Test end-to-end in Angular app
6. ✅ Deploy to production server

---

**Questions?** Check the detailed implementation guide in `BACKEND_IMPLEMENTATION.md`
