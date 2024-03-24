import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Toy } from './product/product'; // Assuming you have a Toy model


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  isloggedIn: boolean = false;
  userId: number = -1;
  private baseUrl = 'http://localhost:3000';
  userName: string = '';

  checkUser(){
    return this.isloggedIn;
  }

  updateUser(id: number){
    this.userId = id;
  }

  returnUser(){
    return this.userId;
  }

  updateUserName(name: string){
    this.userName = name;
  }

  returnUserName(){
    return this.userName;
  }

  getToysByUserId(userId: number): Observable<Toy[]> {
    return this.http.get<Toy[]>(`${this.baseUrl}/toys/user/${userId}`);
  }

  returnUserDetails(){

  }
  
}
