import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  private users = [
    { username: 'user', password: '123', role: 'user' },
    { username: 'admin', password: '123', role: 'admin' }
  ];

  constructor(private router: Router, private authService: AuthService) {}

  onLogin(form: NgForm) {
    if (form.invalid) {
      this.errorMessage = 'Please enter valid credentials!';
      return;
    }

    const user = this.users.find(
      (u) => u.username === this.username && u.password === this.password
    );

    if (user) {
      const success = this.authService.login(this.username, this.password);
      if (success) {
        // Redirect to the appropriate portal based on the user's role
        if (user.role === 'user') {
          this.router.navigate(['/user-portal']);
        } else if (user.role === 'admin') {
          this.router.navigate(['/admin-portal']);
        }
      }
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
  navigate(): void {
    this.router.navigate(['']);
  }
}
