import { Component, OnInit, Input } from '@angular/core';
import { HeaderComponent } from 'src/app/components/header/header.component'

@Component({
  selector: 'cru-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  
  @Input() toggleSidebar: any;
  
  constructor() {}
  
  ngOnInit(): void {
  }

}
