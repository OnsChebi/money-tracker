import { Component } from '@angular/core';
import { SignupModel } from '../../models/Signup';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signup:SignupModel=new SignupModel();
  users:any;
  onRegister() {
    const localUser=localStorage.getItem('angular17users');
    if(localUser!=null){
      this.users=JSON.parse(localUser);
    }
    else{
        this.users=[];
    }
      if(this.signup.pass== this.signup.Confirmpass)
      {  
        this.users.push(this.signup);
        localStorage.setItem('angular17users',JSON.stringify(this.users));
      }
      else{
        alert("Password and Confirm Password are not the same");
        return;
      }
    alert("Registration Success!");
  }
}