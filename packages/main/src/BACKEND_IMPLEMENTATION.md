# Password Reset Flow - Backend Implementation Guide

## Overview
This guide explains how to implement the password reset and forgot password APIs in CodeIgniter to work with the Angular frontend.

---

## Database Setup

### 1. Create Password Reset Tokens Table

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

### 2. Update Users Table (if needed)

Ensure your users table has these fields:
- `id` (primary key)
- `email` (unique)
- `password` (for storing hashed passwords)
- `created_at` (optional)
- `updated_at` (optional)

---

## Backend Implementation (CodeIgniter)

### Step 1: Create PasswordReset Model

**File: `application/models/PasswordReset_model.php`**

```php
<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class PasswordReset_model extends CI_Model {
    
    private $table = 'password_resets';
    
    public function __construct() {
        parent::__construct();
        $this->load->database();
    }
    
    /**
     * Create a password reset token
     * 
     * @param int $user_id
     * @param string $token
     * @param int $expiry_minutes Default 30 minutes
     * @return bool
     */
    public function create_reset_token($user_id, $token, $expiry_minutes = 30) {
        // First, invalidate any existing tokens for this user
        $this->db->update($this->table, ['used' => 1], ['user_id' => $user_id, 'used' => 0]);
        
        $data = [
            'user_id' => $user_id,
            'token' => $token,
            'created_at' => date('Y-m-d H:i:s'),
            'expires_at' => date('Y-m-d H:i:s', strtotime("+{$expiry_minutes} minutes")),
            'used' => 0
        ];
        
        return $this->db->insert($this->table, $data);
    }
    
    /**
     * Get reset record by token
     * 
     * @param string $token
     * @return array|null
     */
    public function get_by_token($token) {
        $query = $this->db->get_where($this->table, ['token' => $token]);
        return $query->row_array();
    }
    
    /**
     * Check if token is valid and not expired
     * 
     * @param string $token
     * @return bool
     */
    public function is_token_valid($token) {
        $reset = $this->get_by_token($token);
        
        if (!$reset) {
            return false;
        }
        
        // Check if already used
        if ($reset['used']) {
            return false;
        }
        
        // Check if expired
        if (strtotime($reset['expires_at']) < time()) {
            return false;
        }
        
        return true;
    }
    
    /**
     * Mark token as used
     * 
     * @param string $token
     * @return bool
     */
    public function mark_as_used($token) {
        return $this->db->update($this->table, ['used' => 1], ['token' => $token]);
    }
    
    /**
     * Clean expired tokens
     * 
     * @return bool
     */
    public function cleanup_expired_tokens() {
        return $this->db->delete($this->table, ['expires_at <' => date('Y-m-d H:i:s')]);
    }
    
    /**
     * Get user ID by token
     * 
     * @param string $token
     * @return int|null
     */
    public function get_user_id_by_token($token) {
        $reset = $this->get_by_token($token);
        return $reset ? $reset['user_id'] : null;
    }
}
?>
```

---

### Step 2: Create/Update User Model

**File: `application/models/User_model.php`**

Add or update these methods:

```php
/**
 * Check if email exists in database
 * 
 * @param string $email
 * @return bool
 */
public function email_exists($email) {
    $query = $this->db->get_where('users', ['email' => $email]);
    return $query->num_rows() > 0;
}

/**
 * Get user by email
 * 
 * @param string $email
 * @return array|null
 */
public function get_by_email($email) {
    $query = $this->db->get_where('users', ['email' => $email]);
    return $query->row_array();
}

/**
 * Update user password
 * 
 * @param int $user_id
 * @param string $hashed_password
 * @return bool
 */
public function update_password($user_id, $hashed_password) {
    return $this->db->update('users', 
        ['password' => $hashed_password, 'updated_at' => date('Y-m-d H:i:s')],
        ['id' => $user_id]
    );
}

/**
 * Get user by ID
 * 
 * @param int $user_id
 * @return array|null
 */
public function get_by_id($user_id) {
    $query = $this->db->get_where('users', ['id' => $user_id]);
    return $query->row_array();
}
```

---

### Step 3: Create API Controller

**File: `application/controllers/Api.php`** (or update existing)

```php
<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Api extends CI_Controller {
    
    public function __construct() {
        parent::__construct();
        $this->load->model('User_model');
        $this->load->model('PasswordReset_model');
        $this->load->library('email');
        
        // Set JSON response header
        header('Content-Type: application/json');
    }

    // ============================================
    // 1. Forgot Password API
    // ============================================
    
    /**
     * POST /api/forgot_password
     * 
     * Request:
     * {
     *   "email": "user@example.com"
     * }
     * 
     * Response Success:
     * {
     *   "status": "success",
     *   "message": "Reset link sent to your email"
     * }
     * 
     * Response Error:
     * {
     *   "status": "error",
     *   "message": "Email not registered"
     * }
     */
    public function forgot_password() {
        try {
            // Only accept POST method
            if ($this->input->server('REQUEST_METHOD') !== 'POST') {
                http_response_code(405);
                echo json_encode(['status' => 'error', 'message' => 'Method not allowed']);
                return;
            }

            // Get JSON input
            $json_data = json_decode($this->input->raw_input_stream, true);
            $email = $json_data['email'] ?? null;

            // Validate input
            if (!$email || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
                http_response_code(400);
                echo json_encode(['status' => 'error', 'message' => 'Invalid email address']);
                return;
            }

            // Check if email exists
            if (!$this->User_model->email_exists($email)) {
                http_response_code(404);
                echo json_encode(['status' => 'error', 'message' => 'Email not registered']);
                return;
            }

            // Get user details
            $user = $this->User_model->get_by_email($email);

            // Generate secure token
            $token = $this->generate_secure_token();

            // Store token in database
            $this->PasswordReset_model->create_reset_token($user['id'], $token, 30);

            // Send reset email
            $reset_link = getenv('ANGULAR_APP_URL') . '/reset-password/' . $token;
            // Or use fixed URL:
            // $reset_link = 'https://staging.dochek.com/reset-password/' . $token;

            if ($this->send_reset_email($user['email'], $user['name'] ?? 'User', $reset_link)) {
                http_response_code(200);
                echo json_encode([
                    'status' => 'success',
                    'message' => 'Reset link sent to your email. Please check your inbox.'
                ]);
            } else {
                http_response_code(500);
                echo json_encode(['status' => 'error', 'message' => 'Failed to send email']);
            }

        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['status' => 'error', 'message' => 'Server error: ' . $e->getMessage()]);
        }
    }

    // ============================================
    // 2. Verify Token API
    // ============================================
    
    /**
     * GET /api/verify_token?token=XYZ
     * 
     * Response Valid:
     * {
     *   "status": "valid",
     *   "user_id": 123
     * }
     * 
     * Response Invalid:
     * {
     *   "status": "invalid",
     *   "message": "Token has expired"
     * }
     */
    public function verify_token() {
        try {
            $token = $this->input->get('token');

            if (!$token) {
                http_response_code(400);
                echo json_encode(['status' => 'invalid', 'message' => 'Token not provided']);
                return;
            }

            // Check if token is valid
            if (!$this->PasswordReset_model->is_token_valid($token)) {
                http_response_code(400);
                echo json_encode(['status' => 'invalid', 'message' => 'Token has expired or is invalid']);
                return;
            }

            // Get user ID
            $user_id = $this->PasswordReset_model->get_user_id_by_token($token);

            http_response_code(200);
            echo json_encode([
                'status' => 'valid',
                'user_id' => $user_id
            ]);

        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['status' => 'invalid', 'message' => 'Server error']);
        }
    }

    // ============================================
    // 3. Reset Password API
    // ============================================
    
    /**
     * POST /api/reset_password
     * 
     * Request:
     * {
     *   "token": "XYZ",
     *   "password": "newPassword"
     * }
     * 
     * Response Success:
     * {
     *   "status": "success",
     *   "message": "Password reset successfully"
     * }
     * 
     * Response Error:
     * {
     *   "status": "error",
     *   "message": "Token has expired"
     * }
     */
    public function reset_password() {
        try {
            // Only accept POST
            if ($this->input->server('REQUEST_METHOD') !== 'POST') {
                http_response_code(405);
                echo json_encode(['status' => 'error', 'message' => 'Method not allowed']);
                return;
            }

            // Get JSON input
            $json_data = json_decode($this->input->raw_input_stream, true);
            $token = $json_data['token'] ?? null;
            $password = $json_data['password'] ?? null;

            // Validate input
            if (!$token || !$password) {
                http_response_code(400);
                echo json_encode(['status' => 'error', 'message' => 'Missing token or password']);
                return;
            }

            // Validate password strength
            if (strlen($password) < 8) {
                http_response_code(400);
                echo json_encode(['status' => 'error', 'message' => 'Password must be at least 8 characters']);
                return;
            }

            // Verify token
            if (!$this->PasswordReset_model->is_token_valid($token)) {
                http_response_code(400);
                echo json_encode(['status' => 'error', 'message' => 'Token has expired or is invalid']);
                return;
            }

            // Get user ID from token
            $user_id = $this->PasswordReset_model->get_user_id_by_token($token);

            if (!$user_id) {
                http_response_code(400);
                echo json_encode(['status' => 'error', 'message' => 'Invalid token']);
                return;
            }

            // Hash password using bcrypt
            $hashed_password = password_hash($password, PASSWORD_BCRYPT, ['cost' => 12]);

            // Update user password
            if (!$this->User_model->update_password($user_id, $hashed_password)) {
                http_response_code(500);
                echo json_encode(['status' => 'error', 'message' => 'Failed to update password']);
                return;
            }

            // Mark token as used (single-use)
            $this->PasswordReset_model->mark_as_used($token);

            http_response_code(200);
            echo json_encode([
                'status' => 'success',
                'message' => 'Password reset successfully. You can now login with your new password.'
            ]);

        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['status' => 'error', 'message' => 'Server error: ' . $e->getMessage()]);
        }
    }

    // ============================================
    // Helper Methods
    // ============================================
    
    /**
     * Generate a secure token
     * 
     * @return string
     */
    private function generate_secure_token() {
        return bin2hex(random_bytes(32));
    }

    /**
     * Send password reset email
     * 
     * @param string $email
     * @param string $name
     * @param string $reset_link
     * @return bool
     */
    private function send_reset_email($email, $name, $reset_link) {
        try {
            // Configure email
            $config = [
                'protocol' => 'smtp',
                'smtp_host' => getenv('SMTP_HOST'),
                'smtp_port' => getenv('SMTP_PORT'),
                'smtp_user' => getenv('SMTP_USER'),
                'smtp_pass' => getenv('SMTP_PASSWORD'),
                'mailtype' => 'html',
                'charset' => 'utf-8',
                'newline' => "\r\n"
            ];

            $this->email->initialize($config);

            // Set email parameters
            $this->email->from(getenv('SMTP_USER'), 'DOCHEK Support');
            $this->email->to($email);
            $this->email->subject('Password Reset Request');

            // Email HTML template
            $html = "
                <html>
                <body style='font-family: Arial, sans-serif; color: #333;'>
                    <h2>Password Reset Request</h2>
                    <p>Hello {$name},</p>
                    <p>We received a request to reset your password. Click the link below to reset it:</p>
                    <p style='margin: 20px 0;'>
                        <a href='{$reset_link}' style='background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; display: inline-block;'>
                            Reset Password
                        </a>
                    </p>
                    <p>Or copy this link in your browser:</p>
                    <p><code>{$reset_link}</code></p>
                    <p><strong>This link will expire in 30 minutes.</strong></p>
                    <p>If you did not request this, please ignore this email.</p>
                    <hr>
                    <p><small>DOCHEK Support Team</small></p>
                </body>
                </html>
            ";

            $this->email->message($html);

            // Send email
            return $this->email->send();

        } catch (Exception $e) {
            log_message('error', 'Email send failed: ' . $e->getMessage());
            return false;
        }
    }
}
?>
```

---

## Configuration

### 1. Update `.env` file

```env
# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
MAIL_FROM=noreply@dochek.com

# Angular App URL
ANGULAR_APP_URL=https://staging.dochek.com
```

### 2. Update Routes

Add to `application/config/routes.php`:

```php
// Password Reset APIs
$route['api/forgot_password'] = 'api/forgot_password';
$route['api/verify_token'] = 'api/verify_token';
$route['api/reset_password'] = 'api/reset_password';
```

---

## Testing the API

### 1. Test Forgot Password
```bash
curl -X POST https://staging.dochek.com/landing/api/forgot_password \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com"}'
```

### 2. Test Verify Token
```bash
curl -X GET "https://staging.dochek.com/landing/api/verify_token?token=YOUR_TOKEN"
```

### 3. Test Reset Password
```bash
curl -X POST https://staging.dochek.com/landing/api/reset_password \
  -H "Content-Type: application/json" \
  -d '{"token":"YOUR_TOKEN","password":"newPassword123"}'
```

---

## Security Considerations

✅ **Implemented:**
1. Tokens expire after 30 minutes
2. Tokens are single-use (marked as used after password reset)
3. Passwords are hashed using bcrypt with cost factor 12
4. Tokens are cryptographically secure (bin2hex(random_bytes(32)))
5. Email validation before sending reset link
6. HTTP status codes properly set

**Additional Security Measures You Should Consider:**
1. Enable HTTPS only
2. Implement rate limiting on API endpoints
3. Log password reset events
4. Add email confirmation for sensitive operations
5. Implement CSRF token validation
6. Use environment variables for secrets

---

## Frontend Integration

The Angular app will:
1. Call `POST /api/forgot_password` with user email
2. Call `GET /api/verify_token?token=XYZ` to verify token on reset page
3. Call `POST /api/reset_password` with token and new password
4. Redirect to login page on successful reset

All endpoints return JSON responses with `status` field: `"success"` or `"error"`.

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Email not sending | Check SMTP config in `.env` and enable "Less secure apps" if using Gmail |
| Token not found | Check database table `password_resets` exists and has correct schema |
| Password not updating | Verify User_model update_password method is implemented correctly |
| CORS errors | Add CORS headers in API controller if frontend is on different domain |

---

## References

- [CodeIgniter Documentation](https://codeigniter.com/user_guide/)
- [PHP password_hash](https://www.php.net/manual/en/function.password-hash.php)
- [Secure Token Generation](https://www.php.net/manual/en/function.random-bytes.php)
