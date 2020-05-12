import { Component, HostBinding } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'CrupBeer';
  public menuRoutes: any[];
  public beersRoutes: any[];
  public sidebarOpen: boolean = false;
  public dropdownOpen: boolean = false;
  // @HostBinding('class.dropdown-open') get expand(): boolean {
  //   return this.dropdownOpen
  // }
  
  constructor(private _router: Router) {
    this.menuRoutes = [
      { path: '/home', name: 'Home' },
      { path: '/beers', name: 'Beers', children: [
          { path: 'beers/ale', name: 'Ale' },
          { path: 'beers/lager', name: 'Lager' },
          { path: 'beers/pilsen', name: 'Pilsen' },
          { path: 'beers/pale', name: 'Pale' },
          { path: 'beers/weissbier', name: 'Weissbier' }
      ]},
      { path: '/about', name: 'About'}
    ];
  }
  
  toggleMenu() {
    this.sidebarOpen = !this.sidebarOpen;
  }
  
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
  
  testToggle(path) {
    path.children && path.children.length > 0
    ?
    this.toggleDropdown()
    :
    this.toggleMenu();
  }
  
  // testToggle(ruta) {
  //   if (ruta === 'Beers') {
  //     this.dropdownOpen = !this.dropdownOpen
  //   } else {
  //     this.sidebarOpen = !this.sidebarOpen
  //   }
  // }

}