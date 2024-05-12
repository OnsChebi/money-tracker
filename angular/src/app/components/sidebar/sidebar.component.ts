import { Component } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  

})
export class SidebarComponent {
  collapsed = false;
  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    
  }
  navData=[
    {routeLink: 'chart',
    icon: 'donut_small',
    text: 'Dashboard'},
    {
      routeLink: 'bill',
      icon: 'view_headline',
      text: 'Bill'
    },
    {
  
      routeLink: 'category',
      icon: ' dashboard',
      text: 'Categories'
    },
  ]

  
}