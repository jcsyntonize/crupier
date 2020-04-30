import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'cru-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() menuRoutes: any;
  @Input() open: boolean;
  @Output() toggle = new EventEmitter();

  constructor(private _router: Router) {}
  
  ngOnInit(): void {
  }

}
