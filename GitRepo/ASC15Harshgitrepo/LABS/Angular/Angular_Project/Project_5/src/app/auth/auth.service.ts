import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }
  isAuthenticated(): boolean {
    return !!localStorage.getItem('auth_token');
  }

  login(token: string): void {
    localStorage.setItem('auth_token', token);
  }
  
  logout(): void {
    localStorage.removeItem('auth_token');
    this.router.navigate(['']); 
  }
}
