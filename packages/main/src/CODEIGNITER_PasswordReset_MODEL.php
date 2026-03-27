<?php

namespace App\Models;

use CodeIgniter\Model;

class PasswordResetModel extends Model
{
    protected $table = 'password_resets';
    protected $primaryKey = 'id';
    protected $useAutoIncrement = true;
    protected $returnType = 'array';
    protected $useSoftDeletes = false;
    protected $allowedFields = ['user_id', 'token', 'used', 'expires_at', 'created_at'];
    protected $useTimestamps = true;
    protected $createdField = 'created_at';
    protected $updatedField = null;

    /**
     * Create a reset token for user with expiry time
     */
    public function create_reset_token($userId, $token, $expiryMinutes = 30)
    {
        $expiresAt = date('Y-m-d H:i:s', strtotime("+{$expiryMinutes} minutes"));
        
        return $this->insert([
            'user_id' => $userId,
            'token' => $token,
            'used' => 0,
            'expires_at' => $expiresAt
        ]);
    }

    /**
     * Get token record by token string
     */
    public function get_by_token($token)
    {
        return $this->where('token', $token)->first();
    }

    /**
     * Check if token is valid (not expired and not used)
     */
    public function is_token_valid($token)
    {
        $record = $this->get_by_token($token);
        
        if (!$record) {
            return false;
        }

        // Check if expired
        $now = date('Y-m-d H:i:s');
        if ($record['expires_at'] < $now) {
            return false;
        }

        // Check if already used
        if ($record['used'] == 1) {
            return false;
        }

        return true;
    }

    /**
     * Get user ID by token
     */
    public function get_user_id_by_token($token)
    {
        $record = $this->get_by_token($token);
        return $record ? $record['user_id'] : null;
    }

    /**
     * Mark token as used
     */
    public function mark_as_used($token)
    {
        return $this->where('token', $token)->update(['used' => 1]);
    }

    /**
     * Delete expired tokens (maintenance)
     */
    public function cleanup_expired_tokens()
    {
        $now = date('Y-m-d H:i:s');
        return $this->where('expires_at <', $now)->delete();
    }

    /**
     * Get active reset request for user
     */
    public function get_active_reset($userId)
    {
        $now = date('Y-m-d H:i:s');
        return $this->where('user_id', $userId)
                    ->where('used', 0)
                    ->where('expires_at >', $now)
                    ->first();
    }
}
