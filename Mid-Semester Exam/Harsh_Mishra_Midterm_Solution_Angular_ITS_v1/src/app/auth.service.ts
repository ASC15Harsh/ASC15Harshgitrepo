import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {}
  login(username: string, password: string): boolean {
    if (username === 'admin' && password === '123') {
      localStorage.setItem('isAuthenticated', 'true'); 
      return true;
    }
    return false;
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('isAuthenticated') === 'true';
  }

  logout(): void {
    localStorage.removeItem('isAuthenticated');
    this.router.navigate(['/login']);
  }
}
