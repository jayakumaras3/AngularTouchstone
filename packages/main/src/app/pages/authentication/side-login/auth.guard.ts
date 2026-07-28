import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from '../../../services/login/auth.service';

/**
 * Guards the /login route. If the shared PHP session is already
 * authenticated, redirect away instead of showing the login form again.
 * Always re-checks the server (not the cached signal) so a direct hit on
 * /login reflects the real session state.
 *
 * Always resolves to `true`, `false`, or a UrlTree — never throws and never
 * hangs — so a broken/unreachable auth-status endpoint can never strand a
 * guest on a blank screen instead of the login form. `refreshAuthState()`
 * already falls back to guest mode internally; the catchError/try-catch here
 * are a second layer in case anything upstream of it changes.
 */
export const authGuard: CanActivateFn = () => {
  try {
    const authService = inject(AuthService);
    const router = inject(Router);

    return authService.refreshAuthState().pipe(
      map((status) => (status.loggedIn ? router.createUrlTree(['/coursecatalog']) : true)),
      catchError((error) => {
        console.error('authGuard: auth check failed; allowing guest access to /login', error);
        return of(true);
      })
    );
  } catch (error) {
    console.error('authGuard: unexpected error; allowing guest access to /login', error);
    return true;
  }
};
