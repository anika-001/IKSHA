import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss']
})
export class FinanceComponent implements OnInit {

  constructor() { }

  chartdata = [{
    Label: ['Sangli', 'Pune', 'Nagpur', 'Mumbai'],
    Data: [80, 160, 200, 100],
    Type:'doughnut'
  },
  {
    Label: ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'],
    Data: [120, 150, 180, 90],
    Type: 'pie'
  },
  {
    Labels: ['Potatoes', 'Tomatoes', 'Onions', 'Banana', 'Apples', 'Oranges', 'Papaya'],
    Type: 'bar',
    Data: [
      {data: [65, 59, 80, 81, 56, 55, 40], label: 'Market Rate'},
      {data: [28, 48, 40, 19, 86, 27, 90], label: 'Your Rate'}
    ],
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
