import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss']
})
export class FinanceComponent implements OnInit {

  constructor() { }

  chartdata = [{
    Label: ['Travel', 'Food', 'Personal', 'Health', 'Subscriptions & bills', 'Savings', 'Loans', 'Miscellanous'],
    Data: [7, 19, 15, 25, 20, 4, 6, 4],
    Type:'doughnut', 
    Name: 'Category wise monthly distribution'
  },
  {
    Label: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    Data: [120, 150, 180, 90, 50],
    Type: 'pie',
    Name: 'Savings per month'
  },
  {
    Labels: ['T', 'F', 'P', 'H', 'S & B', 'S', 'L', 'M'],
    Type: 'bar',
    Data: [
      {data: [65, 59, 80, 71, 56, 55, 40, 23], label: 'Jan'},
      {data: [28, 48, 40, 19, 76, 27, 80, 17], label: 'Feb'},
      {data: [21, 78, 64, 75, 26, 42, 40, 13], label: 'Mar'},
      {data: [58, 69, 40, 9, 26, 27, 12, 14], label: 'Apr'},
      {data: [47, 40, 59, 59, 63, 29, 67, 22], label: 'May'},
    ],
    Name: 'Expense Comparision for different months',
    Legend: true,
    Options: {
      scaleShowVerticalLines: false,
      responsive: true
    }
  }
  ]
  ngOnInit(): void {
  }

}
