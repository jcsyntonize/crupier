import { Component, OnInit, Output, EventEmitter, HostBinding } from '@angular/core';

@Component({
  selector: 'cru-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @HostBinding('class') css: string = 'c-header';
  @HostBinding('attr.role') att: string = 'banner';
  
  @Output() toggle = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }

}