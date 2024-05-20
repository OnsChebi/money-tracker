import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  link = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient) {}

  // create(identifiants : any) {
  //   return this.http.post(${this.link}/register, identifiants);
  // }

  // seConnecter(identifiants : any) {
  //   return this.http.post(${this.link}/login, identifiants);
  // }

  seDeconnecter() {
    localStorage.removeItem('access_token');
  }

  estConnecte() {
    let token = localStorage.getItem('access_token');
    if (token) return true;
    return false;
  }
}