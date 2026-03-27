<?php

/**
 * CodeIgniter Database Migration for Password Reset Table
 * 
 * File: app/Database/Migrations/YYYY-MM-DD-HHMMSS_CreatePasswordResetsTable.php
 * Run: php spark migrate
 */

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreatePasswordResetsTable extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'id'          => [
                'type'           => 'INT',
                'constraint'     => 11,
                'unsigned'       => true,
                'auto_increment' => true,
            ],
            'user_id'     => [
                'type'       => 'INT',
                'constraint' => 11,
                'unsigned'   => true,
            ],
            'token'       => [
                'type'       => 'VARCHAR',
                'constraint' => 255,
                'unique'     => true,
            ],
            'used'        => [
                'type'    => 'TINYINT',
                'default' => 0,
            ],
            'expires_at'  => [
                'type' => 'DATETIME',
            ],
            'created_at'  => [
                'type' => 'DATETIME',
            ],
        ]);

        $this->forge->addKey('id', false, true);
        $this->forge->addKey('token');
        $this->forge->addKey('user_id');
        $this->forge->addForeignKey('user_id', 'users', 'userid', 'CASCADE', 'CASCADE');
        
        $this->forge->createTable('password_resets');
    }

    public function down()
    {
        $this->forge->dropTable('password_resets');
    }
}
