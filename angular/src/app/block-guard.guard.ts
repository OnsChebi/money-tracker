import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from './services/Auth.service';

export const blockGuard: CanActivateFn = (route, state) => {
  let authSer = inject(AuthService);
  return !authSer.estConnecte();
};