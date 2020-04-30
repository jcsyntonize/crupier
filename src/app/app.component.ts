import { Component } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'CrupBeer';
  public menuRoutes: any[];
  public sidebarOpen: boolean = false;
  
  constructor(private _router: Router) {
    
    this.menuRoutes = [
      { path: '/home', name: 'Home' },
      { path: '/beers', name: 'Beers' },
      { path: '/about', name: 'About' }
    ];

  }
  
  toggleMenu() {
    this.sidebarOpen = !this.sidebarOpen;
  }

}
