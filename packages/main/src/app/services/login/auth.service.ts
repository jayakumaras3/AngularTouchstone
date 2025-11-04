import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import{apiUrl,forgotUrl,contactApiUrl} from '../../config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Base URLs
   /*private apiUrl = 'http://172.16.0.173/landing';
  
  private forgotUrl = 'http://172.16.0.173/landing';
  private contactApiUrl = 'http://172.16.0.173/landing';
  // Dochek
 private apiUrl = 'https://dochek.com/landing';
  
  private forgotUrl = 'https://dochek.com/landing';
  private contactApiUrl = 'https://dochek.com/landing'*/
  private apiUrl = apiUrl;
  
  private forgotUrl = forgotUrl;
  private contactApiUrl = contactApiUrl

  constructor(private http: HttpClient) {}

  // LOGIN
  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/login_register`,
      { username, password },
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      }
    );
  }

  // FORGOT PASSWORD - Send email to backend for password reset
    forgotPassword(email: string): Observable<any> {
      console.log('Sending forgot password request to:', `${this.forgotUrl}/forgotpasswordVerify`, { email });
      return this.http.post<any>(
        `${this.forgotUrl}/forgotpasswordVerify`,
        { email },
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      );
    }


  // CONTACT US (popup form)
  sendContact(formData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });

    return this.http.post<any>(
      `${this.contactApiUrl}/angualr_contact_us`,
      formData,
      { headers }
    );
  }

  // ✅ NEW: PRODUCT ENQUIRY
  sendProductEnquiry(formData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });

    console.log('Sending product enquiry data:', formData);

    return this.http.post<any>(
      `${this.contactApiUrl}/angualr_product_enquiry`,
      formData,
      { headers }
    );
  }

  // GET all users
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/users`);
  }

  // GET single user
  getUser(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/user/${id}`);
  }

  // UPDATE user
  updateUser(id: number, user: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/user/${id}`, user);
  }

  // DELETE user
  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/user/${id}`);
  }

  // REGISTER (Example with JSON data)
  register(data: any): Observable<any> {
    return this.http.post<any>(
      'http://localhost/AngularCRUD_PHP/user/register.php',
      data,
      { headers: { 'Content-Type': 'application/json' } }
    );
  }
}
