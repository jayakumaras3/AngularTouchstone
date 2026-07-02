import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

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

  sendContact(formData: any): Observable<any> {
    const csrfToken = this.getCsrfToken();
    
    return this.http.post<any>(
      `${this.contactApiUrl}/angualr_contact_us`,
      formData,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken
        })
      }
    );
  }

  sendProductEnquiry(formData: any): Observable<any> {
    const csrfToken = this.getCsrfToken();
    
    return this.http.post<any>(
      `${this.contactApiUrl}/angualr_product_enquiry`,
      formData,
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