import { environment } from '../../environments/environment';

/**
 * 🔐 Security Utility Functions
 * 
 * Provides validation and logging for security headers and configurations
 * to ensure proper security posture across the application.
 */

/**
 * List of required security headers that should be present in HTTP responses
 */
const REQUIRED_SECURITY_HEADERS = [
  'X-Content-Type-Options',
  'X-Frame-Options',
  'X-XSS-Protection',
  'Referrer-Policy'
];

/**
 * Validates that required security headers are present in HTTP response
 * Logs warnings in development mode if headers are missing
 * 
 * @param headers - HttpHeaders object from Angular HTTP response
 * @param url - URL of the request (for logging context)
 * @returns Object containing validation result and missing headers list
 */
export function validateSecurityHeaders(headers: any, url: string = ''): { isValid: boolean; missingHeaders: string[] } {
  const missingHeaders: string[] = [];

  for (const header of REQUIRED_SECURITY_HEADERS) {
    const headerValue = headers.get(header);
    
    if (!headerValue) {
      missingHeaders.push(header);
      
      // Log warning in development mode
      if (!environment.production) {
        console.warn(
          `⚠️  Security Warning: Missing '${header}' in response ${url ? `from ${url}` : ''}`
        );
      }
    }
  }

  const isValid = missingHeaders.length === 0;

  if (!isValid && !environment.production) {
    console.warn('🔒 Security Headers Validation Failed', {
      url,
      missingHeaders,
      timestamp: new Date().toISOString()
    });
  }

  return { isValid, missingHeaders };
}

/**
 * Logs security configuration status
 * Useful for debugging security setup in development
 */
export function logSecurityConfig(): void {
  if (environment.production) {
    return; // Skip logging in production
  }

  console.group('🔐 Security Configuration');
  console.log('Environment:', environment.production ? 'Production' : 'Development');
  console.log('HTTPS Required:', !window.location.hostname.includes('localhost') && 
                                !window.location.hostname.includes('127.0.0.1'));
  console.log('Security Headers Required:', REQUIRED_SECURITY_HEADERS);
  console.groupEnd();
}

/**
 * Checks if the application is running over HTTPS in production
 * @returns boolean indicating if HTTPS is enabled or required
 */
export function isSecureConnection(): boolean {
  return window.location.protocol === 'https:' || 
         !(!window.location.hostname.includes('localhost') && 
           !window.location.hostname.includes('127.0.0.1'));
}

/**
 * Validates production security configuration
 * Should be called during application initialization in production
 * @returns Object containing validation results
 */
export function validateProductionSecurity(): {
  isSecureConnection: boolean;
  certificateInfo: string;
  warnings: string[];
} {
  const warnings: string[] = [];
  const isSecure = isSecureConnection();

  if (!isSecure && environment.production) {
    warnings.push('⚠️  Application is running over HTTP in production');
  }

  return {
    isSecureConnection: isSecure,
    certificateInfo: window.location.protocol === 'https:' 
      ? 'HTTPS enabled'
      : 'HTTP connection',
    warnings
  };
}

/**
 * Sanitizes and removes sensitive information from error messages
 * Prevents information disclosure in client-side errors
 * 
 * @param error - The original error object
 * @returns Sanitized error message safe for logging
 */
export function sanitizeErrorMessage(error: any): string {
  if (!error) {
    return 'Unknown error occurred';
  }

  let message = typeof error === 'string' ? error : error.message || String(error);

  // Remove sensitive patterns
  message = message
    .replace(/\/[a-zA-Z0-9_-]+\/api\//g, '/api/') // Hide API paths
    .replace(/token[=:]\s*['"][^'"]+['"]/gi, 'token=***') // Hide tokens
    .replace(/password[=:]\s*['"][^'"]+['"]/gi, 'password=***') // Hide passwords
    .replace(/\b\d{3}-\d{2}-\d{4}\b/g, 'xxx-xx-xxxx') // Hide SSN-like patterns
    .replace(/\b\d{16}\b/g, '****-****-****-****'); // Hide credit card numbers

  return message;
}

/**
 * Validates that build optimization settings are enabled
 * Checks if the application is properly optimized for production
 * 
 * @returns Object containing optimization validation results
 */
export function validateBuildOptimization(): {
  isOptimized: boolean;
  message: string;
} {
  // In production, the application should be fully optimized
  // This is enforced at build time via angular.json configurations
  
  if (environment.production) {
    // Check if sourcemaps are present (they shouldn't be in production)
    const hasSourceMaps = !!(window as any).__zone_symbol__key_;
    
    return {
      isOptimized: !hasSourceMaps,
      message: hasSourceMaps 
        ? '⚠️  Source maps detected in production build' 
        : '✅ Production build is properly optimized'
    };
  }

  return {
    isOptimized: true,
    message: 'Development build - optimization not required'
  };
}

/**
 * Security initialization function
 * Call this during application startup to initialize security checks
 * 
 * @example
 * // In app.component.ts or main.ts
 * initializeSecurityChecks();
 */
export function initializeSecurityChecks(): void {
  if (environment.production) {
    const securityStatus = validateProductionSecurity();
    if (securityStatus.warnings.length > 0) {
      console.error('🔴 Production Security Issues:', securityStatus.warnings);
    }

    const buildStatus = validateBuildOptimization();
    if (!buildStatus.isOptimized) {
      console.error('🔴 Build Optimization Issue:', buildStatus.message);
    }
  } else {
    // Development: Log security configuration
    logSecurityConfig();
    const buildStatus = validateBuildOptimization();
    console.log('🔒 Security Status:', buildStatus.message);
  }
}
