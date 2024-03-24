import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { User } from '../user/user.interface';
import { LoginService } from './login.service';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
loginClicked() {
  this.login = true;
  this.signup = false;
}


  constructor(
    private loginService: LoginService,
    private apiService: ApiService
    ) {}

  @Output() userDataEvent: EventEmitter<any> = new EventEmitter<any>();
  
  login: boolean = true;
  signup: boolean = false;

  loginMessage = "";
  userError: string = '';
  isLoggedIn: boolean = false;
  userId!: any;
  signupSuccess = '';

  authForm = new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', Validators.required),
  confirmPassword: new FormControl(''),
  contactNumber: new FormControl('', Validators.pattern(/^-?\d+$/))
  });

  loginClick() {
    if (this.authForm.valid) {
      console.log('Logging in...');
      const { email, password } = this.authForm.value;
      // Implement login logic using user service
      this.loginService.login(email, password).subscribe(response => {
        // Handle login response
        console.log(response);
        if(response.statusCode == 200){
          this.userError = '';
          // console.log("Ok");
          // console.log("user", response.userId);
          // console.log("userName:", response.userName);
          this.userId= response.userId;
          this.isLoggedIn= true;
          this.apiService.updateUser(this.userId);
          this.apiService.updateUserName(response.userName);
          // console.log(response);
          this.loginMessage = `Logged in as ${response.userName}`;
          setTimeout(() => {
            this.loginMessage = '';
          }, 3000);
          // console.log("loggedin");
        }else{
          this.userError = "Invalid credentials. Try again or signup";
          setTimeout(() => {
            this.userError = "";
          }, 3000);
        }
      });
    }
  }

  signupClick() {
    if (this.authForm.valid) {
      console.log('Signing up...');
      const {email, password, contactNumber } = this.authForm.value;
      const userData = this.authForm.value;
      // Implement signup logic using user service

      this.loginService.signup(email, password, contactNumber).subscribe(response => {
        // Handle signup response
        console.log('Signup response:', response);
        if (response && response.id) {
          this.signupSuccess = "signup successful, login";
          setTimeout(() => {
            this.signupSuccess = "";

          }, 3000);
        } else {
          this.userError = "Signup unsuccessful. Please try again.";
          setTimeout(() => {
            this.userError = "";
            this.signup=false;
            this.login=true;
          }, 3000);
          
        }
        console.log("signup successful, login");
        
      });
    }
  }

  signupClicked(){
    this.loginMessage = '';
    this.login = false;
    this.signup = true;
    console.log("clicked");
  }

}
