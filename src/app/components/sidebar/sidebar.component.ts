import { Component, OnInit, HostBinding, EventEmitter, Input, Output } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'cru-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @HostBinding('class') css: string = 'c-sidebar';
  @HostBinding('class.active') get show(): boolean {
    return this.open;
  }
  @HostBinding('attr.aria-controls') attr: string = 'IDREF';
  // @HostBinding('attr.aria-expanded.true') get show(): boolean {
  //   return this.open;
  // }
  @Input() open: boolean;
  @Input() routes: any;
  @Output() toggle = new EventEmitter();

  constructor(private _router: Router) {}
  
  ngOnInit(): void {
  }

}


///