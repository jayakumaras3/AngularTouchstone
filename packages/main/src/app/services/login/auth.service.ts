import { Injectable, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap, timeout } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { withCompanyName } from '../../shared/utils/company-name.util';

export interface AuthStatus {
  loggedIn: boolean;
  user?: { id_user: string; username: string; name: string } | null;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  private forgotUrl = environment.forgotUrl;
  private contactApiUrl = environment.contactApiUrl;
  // Base URL without endpoint path for API calls
  private baseUrl = environment.apiUrl.replace('/landing', '');

  constructor(private http: HttpClient) {}

  /**
   * Single source of truth for whether the user is authenticated in the
   * shared PHP session. Backed by GET {apiUrl}/authStatus, which reads the
   * same server-side session the PHP marketplace already uses.
   */
  private readonly _loggedIn = signal(false);
  readonly authState = this._loggedIn.asReadonly();

  /**
   * True once the first refreshAuthState() call (success or failure) has
   * resolved. Guest-only CTAs (Login, Member Login, Sign Up, Sign Up Now)
   * must stay out of the DOM until this flips true, so a logged-in user
   * never sees them flash before the PHP session check completes.
   */
  private readonly _authInitialized = signal(false);
  readonly authInitialized = this._authInitialized.asReadonly();

  isLoggedIn(): boolean {
    try {
      return this._loggedIn();
    } catch (error) {
      console.error('AuthService.isLoggedIn failed; defaulting to guest', error);
      return false;
    }
  }

  setLoginState(): void {
    this._loggedIn.set(true);
  }

  clearLoginState(): void {
    this._loggedIn.set(false);
  }

  /**
   * Re-checks the PHP session and updates the signal. Always resolves to a
   * value (never throws, never hangs indefinitely) so callers — including
   * route guards — can safely subscribe with no error handling of their own.
   * A network failure, non-2xx response, CORS block, or timeout all fall
   * back to guest mode rather than leaving the app waiting.
   */
  refreshAuthState(): Observable<AuthStatus> {
    try {
      return this.http.get<AuthStatus>(`${this.apiUrl}/authStatus`).pipe(
        timeout(8000),
        tap((status) => {
          this._loggedIn.set(!!status.loggedIn);
          this._authInitialized.set(true);
        }),
        catchError((error) => {
          console.error('AuthService.refreshAuthState failed; defaulting to guest', error);
          this._loggedIn.set(false);
          this._authInitialized.set(true);
          return of({ loggedIn: false } as AuthStatus);
        })
      );
    } catch (error) {
      console.error('AuthService.refreshAuthState threw synchronously; defaulting to guest', error);
      this._loggedIn.set(false);
      this._authInitialized.set(true);
      return of({ loggedIn: false } as AuthStatus);
    }
  }

  /**
   * @param turnstileToken Cloudflare Turnstile response token, verified server-side
   *   against https://challenges.cloudflare.com/turnstile/v0/siteverify before authenticating.
   */
  login(username: string, password: string, turnstileToken: string): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/login_register`,
      { username, password, turnstileToken },
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'X-CSRF-Token': this.getCsrfToken()
        }),
      }
    );
  }

  /**
   * Quick Access Login — legacy endpoint (token-based flow preferred)
   */
  quickAccessLogin(username: string, password: string): Observable<any> {
    return this.http.post<any>(
      `${this.baseUrl}/api/quickaccess/login`,
      { username, password },
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'X-CSRF-Token': this.getCsrfToken()
        }),
      }
    );
  }

  /**
   * Validate a one-time quickaccess token and authenticate the demo user.
   * API: POST /api/quickaccess/validate-token
   * Body: { token, password }
   * The token is server-issued and maps to the user internally — no sensitive
   * data is ever stored in or read from the URL.
   */
  validateQuickAccessToken(token: string, password: string): Observable<any> {
    return this.http.post<any>(
      `${this.baseUrl}/api/quickaccess/validate-token`,
      { token, password },
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'X-CSRF-Token': this.getCsrfToken()
        }),
      }
    );
  }

  /**
   * Authenticate a demo user using the numeric demo ID and their password.
   * API: POST /api/quickaccess/authenticate
   * Body: { demoid: number, password: string }
   * Backend derives the username from demoid and validates the cart — Angular
   * never sees or sends the username.
   */
  quickAccessAuthenticate(demoid: string, password: string): Observable<any> {
    return this.http.post<any>(
      `${this.baseUrl}/api/quickaccess/authenticate`,
      { demoid: Number(demoid), password },
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'X-CSRF-Token': this.getCsrfToken()
        }),
      }
    );
  }

  /**
   * ✅ Send password reset link to user email
   * API: POST /api/forgot_password
   */
  forgotPassword(email: string): Observable<any> {
    const csrfToken = this.getCsrfToken();
    
    return this.http.post<any>(
      `${this.forgotUrl}/api/forgot_password`,
      { email },
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken
        })
      }
    );
  }

  /**
   * ✅ Verify reset token validity
   * API: GET /api/verify_token
   */
  verifyResetToken(token: string): Observable<any> {
    const csrfToken = this.getCsrfToken();
    
    return this.http.get<any>(
      `${this.forgotUrl}/api/verify_token`,
      {
        params: { token },
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken
        })
      }
    );
  }

  /**
   * ✅ Reset password with token and new password
   * API: POST /api/reset_password
   */
  resetPassword(token: string, password: string): Observable<any> {
    const csrfToken = this.getCsrfToken();
    
    return this.http.post<any>(
      `${this.forgotUrl}/api/reset_password`,
      { token, password },
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken
        })
      }
    );
  }

  /**
   * @param formData Passed through `withCompanyName`, so a form that collects a
   *   company name has it forwarded as `company_name` and a form that does not
   *   keeps its payload byte-for-byte unchanged. See company-name.util.ts.
   */
  sendContact(formData: any): Observable<any> {
    const csrfToken = this.getCsrfToken();

    return this.http.post<any>(
      `${this.contactApiUrl}/angualr_contact_us`,
      withCompanyName(formData),
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken
        })
      }
    );
  }

  /**
   * @param formData Includes `turnstileToken`, the Cloudflare Turnstile response
   *   token, verified server-side before the enquiry is processed. Passed
   *   through `withCompanyName`, so a form that collects a company name has it
   *   forwarded as `company_name` and a form that does not keeps its payload
   *   byte-for-byte unchanged. See company-name.util.ts.
   */
  sendProductEnquiry(formData: any): Observable<any> {
    const csrfToken = this.getCsrfToken();

    return this.http.post<any>(
      `${this.contactApiUrl}/angualr_product_enquiry`,
      withCompanyName(formData),
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken
        })
      }
    );
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/users`);
  }

  getUser(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/user/${id}`);
  }

  updateUser(id: number, user: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/user/${id}`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/user/${id}`);
  }

  register(payload: {
    firstName: string;
    lastName: string;
    email: string;
    confirmEmail: string;
    password: string;
    confirmPassword: string;
  }): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/signup`,
      payload,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'X-CSRF-Token': this.getCsrfToken()
        })
      }
    );
  }

  /**
   * ✅ Logout user and clear session data
   */
  logout(): void {
    localStorage.clear();
    sessionStorage.clear();
    this.clearLoginState();

    this.http.post(`${this.apiUrl}/logout`, {}).subscribe(
      () => console.log('✅ Logged out successfully'),
      (err) => console.warn('⚠️ Logout warning (backend may be offline)')
    );
  }

  /**
   * ✅ Refresh authentication token before expiration
   */
  refreshToken(): Observable<any> {
    const csrfToken = this.getCsrfToken();
    
    return this.http.post<any>(
      `${this.apiUrl}/refresh_token`,
      {},
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken
        }),
      }
    );
  }

  /**
   * ✅ Check if token has expired
   */
  isTokenExpired(): boolean {
    const expirationTime = sessionStorage.getItem('token_expiry');
    if (!expirationTime) {
      return true;
    }
    return Date.now() > parseInt(expirationTime, 10);
  }

  /**
   * ✅ Get stored user ID (safe, non-sensitive data)
   */
  getUserId(): string | null {
    return sessionStorage.getItem('userId');
  }

  /**
   * ✅ Check if user is authenticated
   */
  isAuthenticated(): boolean {
    return !this.isTokenExpired() && this.getUserId() !== null;
  }

  /**
   * ✅ Extract CSRF token from cookie or meta tag
   */
  private getCsrfToken(): string {
    // Try meta tag first
    const metaTag = document.querySelector('meta[name="csrf-token"]');
    if (metaTag) {
      return metaTag.getAttribute('content') || '';
    }

    // Fallback to cookie
    const name = 'csrf_token=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    
    for (let cookie of cookieArray) {
      cookie = cookie.trim();
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length);
      }
    }
    
    return '';
  }
}