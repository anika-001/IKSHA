import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {

  constructor(private fb: FormBuilder, private as: AuthService, private db: AngularFirestore, private router: Router) { }
  days: any[] = [];
  week=["Sat","Sun","Mon","Tue","Wed","Thur","Fri"];
  showform: boolean=false;
  todoshow: boolean=false;
  type: string;
  date: string;
  addactorrem = this.fb.group({
    ActivityName: [''],
    ActivityTime: ['']
  })
  todoform = this.fb.group({
    TodoName: ['']
  })

  reminder: any;

  catoptions = [
    {
      name: "Activity",
      displayname: "Activity"
    },
    {
      name: "Reminder",
      displayname: "Reminder"
    }
  ]

  userID: any;

  ngOnInit(): void {

    this.as.getUserState()
      .subscribe(user => {
        if(user == null){this.router.navigate(['/login'])}
        this.userID = user.uid;
        this.getReminders();
        //console.log(farm, id);
      })


    for(let x=0; x<31; x++){
       this.days.push({"date": x + 1, "day":this.week[x%7]});
    }
    console.log(this.days);
  }
  toggle(val:boolean, date: any){
    if(val == true){
      this.date = date;
    }
    this.showform = val;
  }
  todoggle(val:boolean){
    this.todoshow = val;
  }

  getReminders(){
    this.db.collection("Management").doc(this.userID).collection("Reminder").snapshotChanges().subscribe(res => {
      this.reminder = res;
    })
  }

  submitactrem(){
    let data = this.addactorrem.value;
    console.log(data);
    data["type"] = this.type;
    data["date"] = new Date(2021, 5, Number(this.date));
    this.date = null;
    this.toggle(false, null);
    this.db.collection("Management").doc(this.userID).collection(this.type).add(data).then(res => {
      console.log(res);
    })
    .catch(e => {

    })
  }
}
