<?php

/**
 * CodeIgniter Routes Configuration for Password Reset API
 * 
 * Add these routes to: app/Config/Routes.php
 */

// ============================================
// Password Reset API Routes
// ============================================

$routes->post('api/forgot_password', 'Api::forgot_password');
$routes->get('api/verify_token', 'Api::verify_token');
$routes->post('api/reset_password', 'Api::reset_password');

// Optional: Health check endpoint
$routes->get('api/health', 'Api::health');

// ============================================
// Optional: CORS Headers Middleware
// ============================================
// If Angular frontend is on different domain, add CORS headers:
// 
// In app/Filters/CorsFilter.php:
// <?php
// namespace App\Filters;
// 
// use CodeIgniter\HTTP\RequestInterface;
// use CodeIgniter\HTTP\ResponseInterface;
// use CodeIgniter\Filters\FilterInterface;
// 
// class CorsFilter implements FilterInterface
// {
//     public function before(RequestInterface $request, $arguments = null)
//     {
//         header('Access-Control-Allow-Origin: *');
//         header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
//         header('Access-Control-Allow-Headers: Content-Type, Authorization, X-CSRF-Token');
//         header('Access-Control-Max-Age: 3600');
//         
//         if ($request->getMethod() === 'options') {
//             exit(0);
//         }
//     }
//     
//     public function after(RequestInterface $request, ResponseInterface $response, $arguments = null)
//     {
//     }
// }
//
// Then register in app/Config/Filters.php:
// public $filters = [
//     'cors' => ['before' => ['api/*']],
// ];
