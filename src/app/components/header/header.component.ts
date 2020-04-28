import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cru-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {
    class: 'c-header'
  }
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
