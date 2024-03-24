import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  signup(email: string | null | undefined, password: string | null | undefined, contactNumber: string | null | undefined): Observable<any> {
    const name = "sendingTo backend";
    console.log(name);
    return this.http.post<any>(this.apiUrl, {
    "email": email,
    "password": password,
    "number": contactNumber
  });
  }

  login(email: string | null | undefined, password: string | null | undefined): Observable<any> {
    // Assuming your backend expects email and password fields in the request body
    const loginData = { email, password };
    return this.http.post<any>(`${this.apiUrl}/login`, loginData);
    
  }
}
