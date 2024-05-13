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
  notifications = [
    { header: 'You have 4 new notifications' },
    { icon: 'bi bi-exclamation-circle text-warning', title: 'Lorem Ipsum', message: 'Quae dolorem earum veritatis oditseno', time: '30 min. ago' },
    { icon: 'bi bi-x-circle text-danger', title: 'Atque rerum nesciunt', message: 'Quae dolorem earum veritatis oditseno', time: '1 hr. ago' },
    { icon: 'bi bi-check-circle text-success', title: 'Sit rerum fuga', message: 'Quae dolorem earum veritatis oditseno', time: '2 hrs. ago' },
    { icon: 'bi bi-info-circle text-primary', title: 'Dicta reprehenderit', message: 'Quae dolorem earum veritatis oditseno', time: '4 hrs. ago' }
  ];
}
