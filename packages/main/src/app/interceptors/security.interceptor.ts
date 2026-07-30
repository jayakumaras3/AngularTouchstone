import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

/**
 * 🔐 Security HTTP Interceptor
 * 
 * This interceptor adds security headers to all HTTP requests
 * and handles authentication errors properly.
 * 
 * Security Headers Applied:
 * - X-Content-Type-Options: nosniff - Prevents MIME type sniffing
 * - X-Frame-Options: DENY - Prevents clickjacking attacks
 * - X-XSS-Protection: 1; mode=block - Enable XSS protection
 * - Referrer-Policy: strict-origin-when-cross-origin - Controls referrer information
 * - X-Requested-With: XMLHttpRequest - Identifies AJAX requests
 * 
 * Note: X-Powered-By header is removed by dropping it from responses
 */
@Injectable()
export class SecurityHttpInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // ✅ Only check HTTPS in production
    const isProduction = !window.location.hostname.includes('172.16') && 
                        !window.location.hostname.includes('localhost') &&
                        !window.location.hostname.includes('127.0.0.1');

    if (isProduction && req.url.startsWith('http://') && req.url.includes('/login_register')) {
      console.error('❌ SECURITY ERROR: Login request over HTTP!');
      return throwError(() => new Error('HTTPS required for login'));
    }

    // ✅ Add comprehensive security headers to outgoing requests
    const secureRequest = req.clone({
      headers: req.headers
        .set('X-Requested-With', 'XMLHttpRequest') // Identify AJAX requests
        .set('X-Content-Type-Options', 'nosniff') // Prevent MIME sniffing
        .set('X-Frame-Options', 'DENY') // Prevent clickjacking
        .set('X-XSS-Protection', '1; mode=block') // Browser XSS protection
        .set('Referrer-Policy', 'strict-origin-when-cross-origin') // Control referrer info
        // Remove X-Powered-By header if present
        .delete('X-Powered-By')
    });

    return next.handle(secureRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        // ✅ Allow quickaccess API errors to pass through to component for proper error handling
        const isQuickAccessRequest = req.url.includes('/api/quickaccess/authenticate');

        // ✅ Allow login API errors (invalid credentials, deactivated account, etc.) to pass
        // through to the login component for proper in-page error handling. Without this,
        // a failed login attempt (401/403) triggers a redirect back to the login page itself,
        // which looks like a page refresh and loses entered values + the mapped error message.
        const isLoginRequest = req.url.includes('/login_register');

        // ✅ Check if response has redirect URL in the body — but NOT for login itself.
        // A failed login (deactivated account, etc.) must never trigger a hard browser
        // navigation; it was doing exactly that here, bypassing the component entirely
        // (and everything below it, including preventDefault) before it could ever run.
        if (!isLoginRequest && (error.error?.redirect || error.error?.redirect_url)) {
          const redirectUrl = error.error.redirect || error.error.redirect_url;
          console.warn('🔄 Redirecting to:', redirectUrl);
          window.location.href = redirectUrl;
          return throwError(() => error);
        }
        
        // ✅ Handle 401 Unauthorized (expired token) — but NOT for quickaccess or login itself
        if (error.status === 401 && !isQuickAccessRequest && !isLoginRequest) {
          console.warn('🔄 401 Unauthorized - Redirecting to login');
          this.router.navigate(['/authentication/login'], {
            queryParams: {
              reason: 'session-expired',
              message: error.error?.message || 'Session expired. Please login again.'
            }
          });
        }

        // ✅ Handle 403 Forbidden — but NOT for login itself (e.g. deactivated account)
        if (error.status === 403 && !isLoginRequest) {
          console.warn('🔄 403 Forbidden - Redirecting to login');
          this.router.navigate(['/authentication/login'], {
            queryParams: {
              reason: 'access-denied',
              message: error.error?.message || 'You do not have permission.'
            }
          });
        }

        return throwError(() => error);
      })
    );
  }
}
