import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  currentRoute: string = '/'; // Initialize the property

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
      }
    });
  }

  isProductsMenuSelected(): boolean {
    return this.currentRoute === '/products';
  }

  isOrdersMenuSelected(): boolean {
    return this.currentRoute === '/order-list';
  }

  logout(): void {
    this.router.navigate(['/login']); // Navigate to the login component
  }
  
}