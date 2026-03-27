<?php

namespace App\Models;

use CodeIgniter\Model;

class Login_model extends Model
{
    protected $table = 'users';  // Adjust table name if different
    protected $primaryKey = 'userid';  // Adjust to your primary key
    protected $useAutoIncrement = true;
    protected $returnType = 'array';
    protected $useSoftDeletes = false;
    protected $allowedFields = ['username', 'email', 'password', 'name', 'status', 'created_at'];
    protected $useTimestamps = true;

    /**
     * Verify if email exists in database
     */
    public function verifyEmail($email)
    {
        return $this->where('email', $email)->first();
    }

    /**
     * Get user by email
     */
    public function get_by_email($email)
    {
        return $this->where('email', $email)->first();
    }

    /**
     * Get user by ID
     */
    public function get_by_id($id)
    {
        return $this->where('userid', $id)->first();
    }

    /**
     * Verify username and password
     */
    public function verify_login($username, $password)
    {
        $user = $this->where('username', $username)->first();
        
        if (!$user) {
            return false;
        }

        // Use password_verify for bcrypt hashed passwords
        // OR use direct comparison if using md5/plain (not recommended)
        if (password_verify($password, $user['password'])) {
            return $user;
        }

        return false;
    }

    /**
     * Update user password (with bcrypt hashing)
     */
    public function update_password($userId, $hashedPassword)
    {
        return $this->update($userId, ['password' => $hashedPassword]);
    }

    /**
     * Update user last login time
     */
    public function update_last_login($userId)
    {
        return $this->update($userId, ['last_login' => date('Y-m-d H:i:s')]);
    }

    /**
     * Get user status (active/inactive/banned)
     */
    public function is_user_active($userId)
    {
        $user = $this->find($userId);
        return $user && $user['status'] == 'active';
    }
}
