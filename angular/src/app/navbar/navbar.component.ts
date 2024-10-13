import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router for navigation

@Component({
  standalone: true,
  selector: 'app-navbar',
  template: `
    <nav>
      <a routerLink="/login" (click)="onLinkClick()">Login</a>
      <a routerLink="/signup" (click)="onLinkClick()">Signup</a>
      <a routerLink="/" (click)="goToHome()">Home</a>
      <a routerLink="/about" (click)="goToAbout()">About</a>
      <a routerLink="/projects" (click)="goToProjects()">Projects</a>
      <a routerLink="/contact" (click)="goToContact()">Contact</a>
    </nav>
  `,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router) {} // Inject the Router service

  onLinkClick() {
    console.log('Navigation link clicked.'); // Optional: Log the click for debugging
  }

  goToContact() {
    this.router.navigate(['/contact']);
  }
  goToProjects() {
    this.router.navigate(['/projects']);
  }
  goToHome() {
    this.router.navigate(['/home']);
  }
  goToAbout() {
    this.router.navigate(['/about']);
  }
}
