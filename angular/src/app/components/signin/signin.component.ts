import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { NotFoundError } from 'rxjs';
import { SigninModel } from '../../models/Signin';
import { SignupModel } from '../../models/Signup';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent {
  signin:SigninModel=new SigninModel();
  constructor( private router: Router) {}
  onLogin() {
    const localUsers=localStorage.getItem('angular17users');
    if(localUsers!=null){
      const users=JSON.parse(localUsers);
      const isUserPresent=users.find((user:SignupModel)=> user.Email == this.signin.Email && user.pass==this.signin.pass)
      if(isUserPresent){
        alert("Welcome!");
        localStorage.setItem('loggedUser',JSON.stringify(isUserPresent));
        this.router.navigateByUrl('/home');
      }
      else{
        alert('No User Find with this Email Adress,Please Create an account!');
        this.router.navigateByUrl('/register');
      }
    }
  }
}