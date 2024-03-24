import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ToyformService {

  private apiUrl = 'http://localhost:3000/toys';

  constructor(private http: HttpClient) {}

  donateToy(toyData: any): Observable<any> {
    console.log("SEnding to backend", toyData);
    
    return this.http.post<any>(this.apiUrl, toyData);
  }

  sellToy(toyData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, toyData);
  }

}
