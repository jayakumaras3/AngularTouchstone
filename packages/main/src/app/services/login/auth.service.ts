import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://172.16.0.162/'; // adjust if hosted differently

  constructor(private http: HttpClient) {}


   // LOGIN
    login(username: string, password: string): Observable<any> {
  return this.http.post<any>(
    `http://172.16.0.162/landing/login_register`,   // ✅ not _test
    { username :'srividya.a@touchstonelc.com', password:'qwer@1234' },
    { headers: { 'Content-Type': 'application/json' } }
  );
}



    // REGISTER (with image support)
    

    // GET all users
    getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}users`);
    }

    // GET single user
    getUser(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}user/${id}`);
    }

    // UPDATE user
    updateUser(id: number, user: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}user/${id}`, user);
    }

    // DELETE user
    deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}user/${id}`);
    }
    register(data: any): Observable<any> {
        return this.http.post<any>(
            'http://localhost/AngularCRUD_PHP/user/register.php',
            data,
            { headers: { 'Content-Type': 'application/json' } }
        );
        }
}
