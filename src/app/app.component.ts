import { Component } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'crupier';
  public sidebarHidden: boolean = true;
  public menuRoutes: any[];
  
  constructor(private _router: Router) {
    
    this.menuRoutes = [
      { path: '/home', name: 'Home' },
      { path: '/beers', name: 'Beers' },
      { path: '/about', name: 'About' }
    ];

  }
  
  toggleMenu($event) {
    this.sidebarHidden = !this.sidebarHidden;
  }

}
