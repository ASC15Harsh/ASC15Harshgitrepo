import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private router: Router) {}

  // Check if the user is authenticated (this could involve checking a token or user session)
  isUserAuthenticated(): boolean {
    return !!localStorage.getItem('user_token');  // User token check
  }

  isAdminAuthenticated(): boolean {
    return !!localStorage.getItem('admin_token');  // Admin token check
  }

  // Login method (simplified for this example)
  login(username: string, password: string): boolean {
    // Mock users for simplicity
    const user = this.getUser(username, password);
    if (user) {
      const token = `mock-token-${new Date().getTime()}`;  // Mock token
      localStorage.setItem(`${user.role}_token`, token);  // Store token based on role
      localStorage.setItem('role', user.role);  // Store user role
      return true;
    }
    return false;
  }

  // Get the user based on username and password (simplified mock users)
  private getUser(username: string, password: string) {
    const users = [
      { username: 'user', password: '123', role: 'user' },
      { username: 'admin', password: '123', role: 'admin' }
    ];
    return users.find((u) => u.username === username && u.password === password);
  }

  // Logout method
  logout(): void {
    localStorage.removeItem('user_token');
    localStorage.removeItem('admin_token');
    localStorage.removeItem('role');
    this.router.navigate(['/login']);  // Redirect to login page after logging out
  }
}
