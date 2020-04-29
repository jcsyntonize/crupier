import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'cru-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {
    class: 'c-header bc-ui-600'
  }
})
export class HeaderComponent implements OnInit {
  @Input() toggleSidebar: any;

  constructor() { }

  ngOnInit(): void {
  }
  
  toggleMenu() {
  }

}
