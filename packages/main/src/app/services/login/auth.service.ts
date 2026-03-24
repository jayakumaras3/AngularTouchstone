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

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/login_register`,
      { username, password },
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'X-CSRF-Token': this.getCsrfToken()
        }),
      }
    );
  }

  forgotPassword(email: string): Observable<any> {
    const csrfToken = this.getCsrfToken();
    
    return this.http.post<any>(
      `${this.forgotUrl}/forgotpasswordVerify`,
      { email },
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

  register(data: any): Observable<any> {
    return this.http.post<any>(
      'http://localhost/AngularCRUD_PHP/user/register.php',
      data,
      { headers: { 'Content-Type': 'application/json' } }
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