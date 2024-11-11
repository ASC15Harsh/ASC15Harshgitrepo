import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const requiredRole = next.data['role']; // Use bracket notation to access 'role'

    if (requiredRole === 'user' && this.authService.isUserAuthenticated()) {
      return true;  // Allow access to user portal
    } else if (requiredRole === 'admin' && this.authService.isAdminAuthenticated()) {
      return true;  // Allow access to admin portal
    }

    this.router.navigate(['/login']);  // Redirect to login if not authenticated
    return false;
  }
}

