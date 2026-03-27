# Password Reset Email Template

This document contains the email template for password reset requests.

## HTML Email Template

Use this template in your CodeIgniter email sending function:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: #333;
            background-color: #f5f5f5;
            margin: 0;
            padding: 0;
        }
        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px 20px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 600;
        }
        .content {
            padding: 30px 20px;
            line-height: 1.6;
        }
        .content h2 {
            color: #333;
            font-size: 18px;
            margin-top: 0;
        }
        .content p {
            margin: 15px 0;
            color: #666;
        }
        .button-container {
            text-align: center;
            margin: 30px 0;
        }
        .reset-button {
            display: inline-block;
            background-color: #667eea;
            color: white;
            padding: 12px 30px;
            text-decoration: none;
            border-radius: 4px;
            font-weight: 600;
            font-size: 16px;
        }
        .reset-button:hover {
            background-color: #5568d3;
        }
        .divider {
            border-top: 1px solid #eee;
            margin: 20px 0;
        }
        .fallback-link {
            background-color: #f9f9f9;
            padding: 15px;
            border-radius: 4px;
            margin: 20px 0;
            word-break: break-all;
        }
        .fallback-link p {
            margin: 5px 0;
            font-size: 12px;
        }
        .fallback-link a {
            color: #667eea;
            text-decoration: none;
        }
        .warning-box {
            background-color: #fff3cd;
            border: 1px solid #ffc107;
            border-radius: 4px;
            padding: 15px;
            margin: 20px 0;
            color: #856404;
        }
        .warning-box strong {
            display: block;
            margin-bottom: 5px;
        }
        .footer {
            background-color: #f9f9f9;
            padding: 20px;
            text-align: center;
            border-top: 1px solid #eee;
            font-size: 12px;
            color: #999;
        }
        .footer-link {
            color: #667eea;
            text-decoration: none;
        }
        .unsubscribe {
            margin-top: 10px;
            font-size: 11px;
        }
        @media (max-width: 600px) {
            .email-container {
                margin: 10px;
            }
            .content {
                padding: 20px 15px;
            }
            .reset-button {
                display: block;
                width: 100%;
                box-sizing: border-box;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <!-- Header -->
        <div class="header">
            <h1>🔐 Password Reset Request</h1>
        </div>

        <!-- Content -->
        <div class="content">
            <h2>Hello {USER_NAME},</h2>

            <p>We received a request to reset your password for your DOCHEK account. Click the button below to reset your password:</p>

            <!-- Reset Button -->
            <div class="button-container">
                <a href="{RESET_LINK}" class="reset-button">Reset Your Password</a>
            </div>

            <p style="text-align: center; color: #999; font-size: 12px;">or copy this link in your browser:</p>

            <!-- Fallback Link -->
            <div class="fallback-link">
                <a href="{RESET_LINK}">{RESET_LINK}</a>
            </div>

            <!-- Warning Box -->
            <div class="warning-box">
                <strong>⏰ Important:</strong>
                This password reset link will expire in <strong>30 minutes</strong>. Make sure to reset your password before the link expires.
            </div>

            <p>If you did not request this password reset, please ignore this email. Your account remains secure.</p>

            <p>For security reasons, we never send passwords via email. Always reset your password through our secure link.</p>

            <div class="divider"></div>

            <p style="text-align: center; color: #999; font-size: 12px;">This is an automated message, please do not reply to this email.</p>
        </div>

        <!-- Footer -->
        <div class="footer">
            <p>© {CURRENT_YEAR} DOCHEK. All rights reserved.</p>
            <p class="unsubscribe">
                <a href="{UNSUBSCRIBE_LINK}" class="footer-link">Unsubscribe from notifications</a>
            </p>
        </div>
    </div>
</body>
</html>
```

## Plain Text Template (Alternative)

For email clients that don't support HTML, provide a plain text version:

```
DOCHEK - Password Reset Request

Hello {USER_NAME},

We received a request to reset your password for your DOCHEK account.

To reset your password, please click on the link below:

{RESET_LINK}

IMPORTANT: This password reset link will expire in 30 minutes.

If you did not request this password reset, please ignore this email. Your account remains secure.

For security reasons, we never send passwords via email. Always reset your password through our secure link.

---

© {CURRENT_YEAR} DOCHEK. All rights reserved.

This is an automated message, please do not reply to this email.
```

## CodeIgniter Implementation

```php
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
            'newline' => "\r\n",
            'crlf' => "\r\n"
        ];

        $this->email->initialize($config);

        // Set email parameters
        $this->email->from(getenv('SMTP_USER'), 'DOCHEK Support');
        $this->email->to($email);
        $this->email->subject('Password Reset Request - DOCHEK');

        // Replace placeholders in template
        $html = $this->get_reset_email_template([
            'USER_NAME' => htmlspecialchars($name),
            'RESET_LINK' => $reset_link,
            'CURRENT_YEAR' => date('Y'),
            'UNSUBSCRIBE_LINK' => base_url('account/unsubscribe') // Optional
        ]);

        $this->email->message($html);

        // Send email
        if ($this->email->send()) {
            return true;
        } else {
            log_message('error', 'Email send failed: ' . $this->email->print_debugger());
            return false;
        }

    } catch (Exception $e) {
        log_message('error', 'Email send exception: ' . $e->getMessage());
        return false;
    }
}

private function get_reset_email_template($variables) {
    $template = <<<'HTML'
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; }
        .email-container { max-width: 600px; margin: 0 auto; background: white; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px 20px; text-align: center; }
        .content { padding: 30px 20px; line-height: 1.6; }
        .button-container { text-align: center; margin: 30px 0; }
        .reset-button { display: inline-block; background: #667eea; color: white; padding: 12px 30px; text-decoration: none; border-radius: 4px; font-weight: 600; }
        .warning-box { background: #fff3cd; border: 1px solid #ffc107; padding: 15px; margin: 20px 0; border-radius: 4px; }
        .footer { background: #f9f9f9; padding: 20px; text-align: center; font-size: 12px; color: #999; }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1>🔐 Password Reset Request</h1>
        </div>
        <div class="content">
            <h2>Hello {USER_NAME},</h2>
            <p>We received a request to reset your password for your DOCHEK account.</p>
            <div class="button-container">
                <a href="{RESET_LINK}" class="reset-button">Reset Your Password</a>
            </div>
            <p>Or copy this link: {RESET_LINK}</p>
            <div class="warning-box">
                <strong>⏰ Important:</strong> This link expires in 30 minutes.
            </div>
            <p>If you didn't request this, ignore this email.</p>
        </div>
        <div class="footer">
            <p>© {CURRENT_YEAR} DOCHEK. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
HTML;
    
    foreach ($variables as $key => $value) {
        $template = str_replace('{' . $key . '}', $value, $template);
    }
    
    return $template;
}
```

## Email Sending Testing

Test your email configuration:

```php
public function test_email() {
    $config = [
        'protocol' => 'smtp',
        'smtp_host' => getenv('SMTP_HOST'),
        'smtp_port' => getenv('SMTP_PORT'),
        'smtp_user' => getenv('SMTP_USER'),
        'smtp_pass' => getenv('SMTP_PASSWORD'),
        'mailtype' => 'html',
        'charset' => 'utf-8',
    ];

    $this->email->initialize($config);
    $this->email->from(getenv('SMTP_USER'), 'DOCHEK');
    $this->email->to('your-test-email@example.com');
    $this->email->subject('Test Email');
    $this->email->message('This is a test email.');

    if ($this->email->send()) {
        echo 'Email sent successfully!';
    } else {
        echo $this->email->print_debugger();
    }
}
```

## Gmail SMTP Configuration

If using Gmail:

1. Enable 2-Factor Authentication
2. Generate an App Password at [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
3. Use the App Password in `.env`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-16-char-app-password
```

## Alternative Email Services

For other email providers:

| Service | SMTP Host | Port | SSL |
|---------|-----------|------|-----|
| Gmail | smtp.gmail.com | 587 | TLS |
| Outlook | smtp-mail.outlook.com | 587 | TLS |
| SendGrid | smtp.sendgrid.net | 587 | TLS |
| Mailgun | smtp.mailgun.org | 587 | TLS |
| AWS SES | email-smtp.region.amazonaws.com | 587 | TLS |

---

## Email Best Practices

1. ✅ Always use secure TLS/SSL connection
2. ✅ Include unsubscribe link (CAN-SPAM compliance)
3. ✅ Test email templates on multiple clients
4. ✅ Include both HTML and plain text versions
5. ✅ Make reset link clickable and prominent
6. ✅ Include fallback URL for email clients without link support
7. ✅ Set reasonable token expiry (30 minutes recommended)
8. ✅ Never include password in email
9. ✅ Include clear security warnings
10. ✅ Test email configuration before production
