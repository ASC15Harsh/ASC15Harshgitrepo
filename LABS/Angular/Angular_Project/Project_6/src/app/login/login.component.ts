import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service'; 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  errorMessage: string = ''; 

  private correctUsername = 'admin';
  private correctPassword = '123';

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['']);
    }
  }

  onSubmit() {
    if (this.username === this.correctUsername && this.password === this.correctPassword) {
      this.authService.login('fake-jwt-token');
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }

}
