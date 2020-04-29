import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'cru-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {
    class: 'c-header'
  }
})
export class HeaderComponent implements OnInit {
  @Input() sidebarHidden: any;
  @Input() toggleMenu: any;

  constructor() { }

  ngOnInit(): void {
  }

}
