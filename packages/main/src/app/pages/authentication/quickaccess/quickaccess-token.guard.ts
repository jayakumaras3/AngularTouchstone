import { inject } from '@angular/core';
import {
  CanActivateFn,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';

/**
 * Guards the /authentication/quickaccess/:id route.
 * Allows activation only when the :id route parameter is a positive integer.
 * This matches the numeric demo IDs used in the original PHP link scheme
 * (/quickaccess/demo/{id}).  Real security (cart validation + password check)
 * is enforced server-side; this guard is a lightweight client-side sanity check.
 */
export const quickAccessTokenGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot
) => {
  const router = inject(Router);
  const id: string = route.paramMap.get('id') || '';

  // ID must be a non-empty sequence of digits representing a positive integer
  if (/^\d+$/.test(id) && parseInt(id, 10) > 0) {
    return true;
  }

  // Invalid or missing ID — redirect to the generic error page
  router.navigate(['/authentication/error']);
  return false;
};
