import { Component } from '@angular/core';
import { SignupModel } from '../../models/Signup';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/Auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  isRegister=true;
  constructor(private authSer:AuthService){}

submitHandler(f: NgForm) {
this.authSer.inscription(f.value).subscribe({
  next: (response) => {
    f.reset();
    this.isRegister = false;
  },
  error: (err) => {
    console.log(err);
  },
});
}
  onRegister(){
}}