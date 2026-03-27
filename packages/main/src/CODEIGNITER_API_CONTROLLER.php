<?php

namespace App\Controllers;

use CodeIgniter\Controller;
use Exception;

class Api extends Controller
{
    protected $userModel;
    protected $passwordResetModel;
    protected $email;

    public function __construct()
    {
        $this->userModel = model('App\Models\Login_model');
        $this->passwordResetModel = model('App\Models\PasswordReset_model');
        $this->email = \Config\Services::email();
        
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
    public function forgot_password()
    {
        try {
            // Only accept POST
            if ($this->request->getMethod() !== 'post') {
                http_response_code(405);
                echo json_encode(['status' => 'error', 'message' => 'Method not allowed']);
                return;
            }

            // Get JSON input
            $json = $this->request->getJSON(true);
            $email = isset($json['email']) ? filter_var($json['email'], FILTER_SANITIZE_EMAIL) : null;

            // Validate email
            if (empty($email)) {
                http_response_code(400);
                echo json_encode(['status' => 'error', 'message' => 'Email is required']);
                return;
            }

            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                http_response_code(400);
                echo json_encode(['status' => 'error', 'message' => 'Invalid email address']);
                return;
            }

            // Check if email exists
            $user = $this->userModel->verifyEmail($email);
            if (empty($user)) {
                http_response_code(404);
                echo json_encode(['status' => 'error', 'message' => 'Email not registered']);
                return;
            }

            // Get user details
            $user = $this->userModel->get_by_email($email);

            // Generate secure token (64 character hex string)
            $token = bin2hex(random_bytes(32));

            // Store token in database (30 minute expiry)
            $this->passwordResetModel->create_reset_token($user['userid'], $token, 30);

            // Send reset email
            $resetLink = getenv('ANGULAR_APP_URL') . '/reset-password/' . $token;
            // Or use fixed URL if env variable not set:
            if (!$resetLink || strpos($resetLink, 'reset-password') === false) {
                $resetLink = 'https://staging.dochek.com/reset-password/' . $token;
            }

            if ($this->send_reset_email($user['email'], $user['name'] ?? 'User', $resetLink)) {
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
    public function verify_token()
    {
        try {
            $token = $this->request->getGet('token');

            if (!$token) {
                http_response_code(400);
                echo json_encode(['status' => 'invalid', 'message' => 'Token not provided']);
                return;
            }

            // Check if token is valid
            if (!$this->passwordResetModel->is_token_valid($token)) {
                http_response_code(400);
                echo json_encode(['status' => 'invalid', 'message' => 'Token has expired or is invalid']);
                return;
            }

            // Get user ID
            $user_id = $this->passwordResetModel->get_user_id_by_token($token);

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
    public function reset_password()
    {
        try {
            // Only accept POST
            if ($this->request->getMethod() !== 'post') {
                http_response_code(405);
                echo json_encode(['status' => 'error', 'message' => 'Method not allowed']);
                return;
            }

            $json = $this->request->getJSON(true);
            $token = isset($json['token']) ? trim($json['token']) : null;
            $password = isset($json['password']) ? $json['password'] : null;

            // Validate input
            if (empty($token) || empty($password)) {
                http_response_code(400);
                echo json_encode(['status' => 'error', 'message' => 'Token and password are required']);
                return;
            }

            // Validate password strength
            if (strlen($password) < 8) {
                http_response_code(400);
                echo json_encode(['status' => 'error', 'message' => 'Password must be at least 8 characters']);
                return;
            }

            // Validate token
            if (!$this->passwordResetModel->is_token_valid($token)) {
                http_response_code(400);
                echo json_encode(['status' => 'error', 'message' => 'Token has expired or is invalid']);
                return;
            }

            // Get user ID from token
            $user_id = $this->passwordResetModel->get_user_id_by_token($token);

            if (!$user_id) {
                http_response_code(400);
                echo json_encode(['status' => 'error', 'message' => 'Invalid token']);
                return;
            }

            // Hash password with bcrypt (cost 12)
            $hashedPassword = password_hash($password, PASSWORD_BCRYPT, ['cost' => 12]);

            // Update user password
            if ($this->userModel->update_password($user_id, $hashedPassword)) {
                // Mark token as used
                $this->passwordResetModel->mark_as_used($token);

                http_response_code(200);
                echo json_encode([
                    'status' => 'success',
                    'message' => 'Password reset successfully'
                ]);
            } else {
                http_response_code(500);
                echo json_encode(['status' => 'error', 'message' => 'Failed to reset password']);
            }

        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['status' => 'error', 'message' => 'Server error: ' . $e->getMessage()]);
        }
    }

    // ============================================
    // Helper Functions
    // ============================================

    /**
     * Send password reset email
     */
    private function send_reset_email($to, $userName, $resetLink)
    {
        try {
            $subject = 'Reset Your Password - Dochek';
            
            $message = '
            <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                    <h2>Reset Your Password</h2>
                    <p>Hi ' . htmlspecialchars($userName) . ',</p>
                    <p>We received a request to reset your password. Click the button below to set a new password:</p>
                    <p style="margin: 30px 0;">
                        <a href="' . htmlspecialchars($resetLink) . '" 
                           style="background-color: #007bff; color: white; padding: 12px 30px; 
                           text-decoration: none; border-radius: 4px; display: inline-block;">
                            Reset Password
                        </a>
                    </p>
                    <p style="color: #666; font-size: 14px;">
                        <strong>Or copy this link:</strong><br>
                        ' . htmlspecialchars($resetLink) . '
                    </p>
                    <p style="color: #999; font-size: 12px; margin-top: 30px;">
                        <strong>⏰ Important:</strong> This link expires in 30 minutes.<br>
                        If you did not request a password reset, please ignore this email.
                    </p>
                    <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
                    <p style="color: #999; font-size: 12px;">
                        © ' . date('Y') . ' Dochek. All rights reserved.<br>
                        <a href="https://dochek.com/privacy" style="color: #007bff; text-decoration: none;">Privacy Policy</a> | 
                        <a href="https://dochek.com/terms" style="color: #007bff; text-decoration: none;">Terms of Service</a>
                    </p>
                </div>
            </body>
            </html>';

            $this->email->setFrom('do-not-reply@touchstonelc.com', 'Dochek');
            $this->email->setTo($to);
            $this->email->setSubject($subject);
            $this->email->setMessage($message);

            return $this->email->send();
        } catch (Exception $e) {
            log_message('error', 'Email sending failed: ' . $e->getMessage());
            return false;
        }
    }
}
