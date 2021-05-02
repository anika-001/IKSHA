import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  days: any[] = [];
  week=["Sat","Sun","Mon","Tue","Wed","Thur","Fri"];
  showform: boolean=false;
  todoshow: boolean=false;
  type: string;
  addexp = this.fb.group({
    ActivityName: [''],
    ActivityTime: ['']
  })
  todoform = this.fb.group({
    TodoName: ['']
  })

  catoptions = [
    {
      name: "1",
      displayname: "Activity"
    },
    {
      name: "2",
      displayname: "Reminder"
    }
  ]

  ngOnInit(): void {
    for(let x=0; x<31; x++){
       this.days.push({"date": x + 1, "day":this.week[x%7]});
    }
    console.log(this.days);
  }
  toggle(val:boolean){
    this.showform = val;
  }
  todoggle(val:boolean){
    this.todoshow = val;
  }

}
