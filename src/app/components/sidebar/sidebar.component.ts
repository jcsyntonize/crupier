import { Component, OnInit, Input } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'cru-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() toggleSidebar: any;
  @Input() menuRoutes: any;

  constructor(private _router: Router) {}
  
  ngOnInit(): void {
  }

}
