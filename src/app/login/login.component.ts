import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  login: boolean = true;
  signup: boolean = false;

  signupClicked(){
    this.login = false;
    this.signup = true;
    console.log("clicked");
  }
}
