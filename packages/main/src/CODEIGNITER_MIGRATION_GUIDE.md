# Migration Guide: Old Forgot Password → New Password Reset API

## 🔄 What Changed?

You had a single method `forgotpasswordVerify()` that handled forgot password requests. The new system uses **3 separate, REST-ful endpoints**:

```
OLD:  POST /forgot_password/verify → HTML form response
NEW:  
      POST /api/forgot_password       → JSON response
      GET  /api/verify_token         → JSON response  
      POST /api/reset_password       → JSON response
```

---

## 📊 Side-by-Side Comparison

### **OLD CODE:**
```php
public function forgotpasswordVerify()
{
    $email = $this->request->getJSON(true)['email'];
    
    // Check if email exists
    $userdata = $this->login_model->verifyEmail($email);
    
    if (empty($userdata)) {
        return $this->response->setJSON([
            'status' => false,
            'message' => "Email doesn't exist"
        ]);
    }
    
    // Token = just the userid
    $token = $userdata['userid'];
    
    // Send email with link
    $resetLink = base_url('forgot_password/reset_password/' . $token);
    
    // No token storage - relies on session
    // Email sent immediately
}
```

### **NEW CODE:**
```php
public function forgot_password()
{
    $email = $this->request->getJSON(true)['email'];
    
    // Check if email exists
    $user = $this->userModel->verifyEmail($email);
    
    if (empty($user)) {
        http_response_code(404);
        return $this->response->setJSON([
            'status' => 'error',
            'message' => 'Email not registered'
        ]);
    }
    
    // Token = 64-char secure random string
    $token = bin2hex(random_bytes(32));
    
    // Store token with expiry in database
    $this->passwordResetModel->create_reset_token($user['userid'], $token, 30);
    
    // Send email with link
    $resetLink = getenv('ANGULAR_APP_URL') . '/reset-password/' . $token;
    
    // Token is now stored and can be validated later
    $this->send_reset_email($user['email'], $user['name'], $resetLink);
}
```

---

## 🔑 Key Improvements

| Aspect | Old | New |
|--------|-----|-----|
| **Token Type** | User ID (123) | Secure random (64-char hex) |
| **Token Storage** | Not stored (security risk) | Stored in `password_resets` table |
| **Token Expiry** | Not enforced | 30 minutes (configurable) |
| **Single-use** | Not enforced | Tracked with `used` flag |
| **Endpoint** | POST /forgot_password/verify | POST /api/forgot_password |
| **Verification Step** | Skipped | GET /api/verify_token (separate) |
| **Reset Step** | Form submission | POST /api/reset_password (API) |
| **Response Codes** | Always 200 | 200/400/404/500 per HTTP spec |
| **Password Update** | Direct update | Stored after verification |

---

## 📂 File Structure Changes

### **OLD STRUCTURE:**
```
app/Controllers/
├── Forgot_Password.php (1 controller)
│   ├── forgotpassword()
│   ├── forgotpasswordVerify()
│   └── reset_password() (form-based)
```

### **NEW STRUCTURE:**
```
app/Controllers/
├── Api.php (REST API)
│   ├── forgot_password()    [step 1]
│   ├── verify_token()       [step 2]
│   └── reset_password()     [step 3]

app/Models/
├── Login_model.php (updated)
│   ├── verifyEmail()
│   ├── get_by_email()
│   └── update_password()
│
└── PasswordResetModel.php (new)
    ├── create_reset_token()
    ├── is_token_valid()
    ├── mark_as_used()
    └── cleanup_expired_tokens()
```

---

## 🔄 Migration Path

### **Option 1: Keep Old Code + Add New API (Recommended)**

Your old form-based reset can coexist with new API:

```php
// app/Controllers/Forgot_Password.php (keep as-is for backward compatibility)
public function forgotpasswordVerify() { ... }

// app/Controllers/Api.php (new REST API)
public function forgot_password() { ... }
```

Then in Routes:
```php
$routes->post('forgot_password/verify', 'Forgot_Password::forgotpasswordVerify'); // Old
$routes->post('api/forgot_password', 'Api::forgot_password');                    // New
```

### **Option 2: Replace Old Code Completely**

Remove the old Forgot_Password controller and routes completely, use only new API.

---

## 🔗 URL Changes for Email Links

### **OLD EMAIL LINK:**
```
https://172.16.0.173/DOCHEK/landing/forgot_password/reset_password/123
```

### **NEW EMAIL LINK:**
```
https://staging.dochek.com/reset-password/abc123def456...xyz789
```

The new link points directly to Angular app, not CodeIgniter!

---

## 🔐 Database Changes

### **OLD APPROACH:**
- Stored user `reset_token_sent` flag in `users` table
- Token = userid (visible in URL)
- No expiry enforcement

### **NEW APPROACH:**
- Dedicated `password_resets` table
- Token = secure random string (invisible in code)
- Expiry enforced in database
- Single-use tracked with `used` flag

**New Table Schema:**
```sql
CREATE TABLE password_resets (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    token VARCHAR(255) UNIQUE,      -- 64-char hex string
    used TINYINT DEFAULT 0,          -- 0 = unused, 1 = used
    expires_at DATETIME,             -- 30 min from creation
    created_at DATETIME,
    FOREIGN KEY (user_id) REFERENCES users(userid)
);
```

---

## ✏️ Update Checklist

- [ ] Create new `PasswordResetModel.php`
- [ ] Update `Login_model.php` with new methods
- [ ] Create new `Api.php` controller with 3 endpoints
- [ ] Add routes to `app/Config/Routes.php`
- [ ] Create/run database migration
- [ ] Update `.env` with email config and `ANGULAR_APP_URL`
- [ ] Test all 3 endpoints with curl
- [ ] Test email sending
- [ ] Test end-to-end in Angular app
- [ ] (Optional) Keep old controller for backward compatibility

---

## 🧪 Testing Old vs New

### **OLD FLOW (still works):**
```
1. POST /forgot_password/verify {"email":"..."}
2. Receive reset link in email
3. Click link → Form page
4. Submit new password → Password updated
```

### **NEW FLOW (what Angular uses):**
```
1. POST /api/forgot_password {"email":"..."}
2. Receive reset link in email
3. Click link → Angular reset page
4. GET /api/verify_token?token=... → Validate
5. POST /api/reset_password {"token":"...", "password":"..."}
```

---

## 💾 Data Migration (if needed)

To migrate existing users who have reset tokens pending:

```php
// app/Database/Seeders/MigrateResetTokens.php
<?php

namespace App\Database\Seeders;

use CodeIgniter\I18n\Time;

class MigrateResetTokens extends Seeder
{
    public function run()
    {
        // Find users with pending reset requests
        $db = \Config\Database::connect();
        $builder = $db->table('users');
        $users = $builder->where('reset_token_sent', 1)
                         ->where('reset_requested_at >', date('Y-m-d H:i:s', strtotime('-30 minutes')))
                         ->get()
                         ->getResultArray();

        foreach ($users as $user) {
            // Generate new secure token
            $token = bin2hex(random_bytes(32));
            
            // Insert into password_resets
            $db->table('password_resets')->insert([
                'user_id' => $user['userid'],
                'token' => $token,
                'used' => 0,
                'expires_at' => date('Y-m-d H:i:s', strtotime('+30 minutes')),
                'created_at' => date('Y-m-d H:i:s')
            ]);
        }
    }
}
```

Run with: `php spark db:seed MigrateResetTokens`

---

## 🚀 Next Steps

1. Copy files from reference documents
2. Follow **CODEIGNITER_SETUP_GUIDE.md** for installation
3. Test each endpoint individually
4. Test end-to-end with Angular app
5. Deploy to production

---

**Don't delete old code immediately** - test new API alongside old system first!
