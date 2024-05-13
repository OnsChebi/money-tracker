import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent  {
  budget=0;
  expenses=0;
  income=0;
  cards=[
    {title:'Budget',amount:this.budget},
    {title:'Expenses',amount:this.expenses},
    {title:'Income',amount:this.income}

  ]
  

}
