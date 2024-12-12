import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  constructor(private router: Router) {}

  navigateToUserLogin() {
    this.router.navigate(['/login']);
  }

  navigateToAdminLogin() {
    this.router.navigate(['/login']);
  }
  navigateToview(){
    this.router.navigate(['/view']);
  }
  navigateToorder(){
    this.router.navigate(['/make']);
  }
}
