import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { AuthService } from '../../services/Auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent {
  isRegister = true;
  allSections = ['', 'GL', 'DMWM', 'DSEN'];
  defaultSection = 'DMWM';
  myComment = 'RAS...';
  showError = false;
  constructor(private authSer: AuthService, private router: Router) {}
  
  toggleIsRegister() {
    this.isRegister = !this.isRegister;
  }
  submitHandler(f:any) {
    if (this.isRegister) {
      this.router.navigateByUrl('/signup');
      
    } else {
      this.authSer.seConnecter(f.value).subscribe({
        next: (response:any) => {
          console.log(response);
          const decoded = jwtDecode(response['token']);
          console.log('decoded Token', decoded);

          localStorage.setItem('access_token', response['token']);
          this.router.navigateByUrl('/dashboard');
        },
        error: (err) => {
          console.log(err);
          this.showError = true;
          f.reset();
        },
      });
    }
  }

  generatePwd(f: NgForm) {
    f.setValue({
      login: '',
      password: 'azerty123',
      MySection: '',
      commentaire: '',
      erreurs: '',
    });
  }

  generatePwd2(f: NgForm) {
    f.form.patchValue({
      password: 'azerty123',
    });
  }

  onReset(f: NgForm) {
    f.reset();
  }
}