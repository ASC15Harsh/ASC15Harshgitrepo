import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
isMenuOpen = false;
toggleMenu() {
  this.isMenuOpen = !this.isMenuOpen;
}

constructor(private authService: AuthService, private router: Router) {}

logout(): void {
  this.authService.logout();
}
}
