import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'E-Com';
  isLoginPage: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isLoginPage = this.route.snapshot.firstChild?.routeConfig?.path === 'login';
      }
    });
  }


}
