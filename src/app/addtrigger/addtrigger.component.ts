import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-addtrigger',
  templateUrl: './addtrigger.component.html',
  styleUrls: ['./addtrigger.component.scss']
})
export class AddtriggerComponent implements OnInit {

  constructor(private fb: FormBuilder, private as: AuthService, private db: AngularFirestore, private router: Router) { }

  type: string;

  addtrig = this.fb.group({
    Amount: ['']
  })

  catoptions = [
    {
      name: "Travel",
      displayname: "Travel"
    },
    {
      name: "Food",
      displayname: "Food"
    },
    {
      name: "Personal",
      displayname: "Personal" 
    },
    {
      name: "Health",
      displayname: "Health"
    },
    {
      name: "Subscriptions and Bills",
      displayname: "Subscriptions and Bills"
    },
    {
      name: "Savings",
      displayname: "Savings"
    },
    {
      name: "Loans",
      displayname: "Loans" 
    },
    {
      name: "Miscellaneous",
      displayname: "Miscellaneous" 
    },
    {
      name: "Total",
      displayname: "Total" 
    }
  ]

  userID: any;

  ngOnInit(): void {
    this.as.getUserState()
      .subscribe(user => {
        this.userID = user.uid;
        //console.log(farm, id);
      })
  }
  submittrigger(){
    let data = this.addtrig.value;
    console.log(data);
    data["Type"] = this.type;
    this.db.collection("Finance").doc(this.userID).collection("Trigger").add(data).then(res => {
      this.router.navigate(['/finance']);
      console.log(res);
    })
    .catch(e => {

    })
  }

}
