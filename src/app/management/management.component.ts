import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {

  constructor() { }
  days: any[] = [];
  week=["Sat","Sun","Mon","Tue","Wed","Thur","Fri"];

  ngOnInit(): void {
    for(let x=0; x<31; x++){
       this.days.push({"date": x + 1, "day":this.week[x%7]});
    }
    console.log(this.days);
  }

}
