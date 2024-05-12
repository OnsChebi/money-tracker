import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  myDate = new Date().toLocaleDateString();

  // currentTime=new Date().toLocaleTimeString();

  // ngOnInit() {
  //   setInterval(() => {
  //     this.currentTime = new Date().toLocaleTimeString();
  //   }, 1000);}

}
