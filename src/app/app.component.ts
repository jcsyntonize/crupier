import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crupier';
  sidebarHidden: boolean = true;
  
  toggleMenu($event) {
    this.sidebarHidden = !this.sidebarHidden;
  }

}
