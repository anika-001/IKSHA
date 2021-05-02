import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-uploadsched',
  templateUrl: './uploadsched.component.html',
  styleUrls: ['./uploadsched.component.scss']
})
export class UploadschedComponent implements OnInit {

  constructor(private fb: FormBuilder, private as: AuthService, private db: AngularFirestore, private router: Router) { }

  receiptUpload: any;

  type: string;
  upsched = this.fb.group({
    ScheduleName: ['']
  })

  typeoptions = [
    {
      name: "Daily",
      displayname: "Daily"
    },
    {
      name: "Weekly",
      displayname: "Weekly"
    },
    {
      name: "Monthly",
      displayname: "Monthly" 
    }
  ]

  userID: any;

  ngOnInit(): void {

    this.as.getUserState()
      .subscribe(user => {
        if(user == null){this.router.navigate(['/login'])}
        this.userID = user.uid;
        //console.log(farm, id);
      })
  }

  submitsch(){
    let data = this.upsched.value;
    console.log(data);
    data["type"] = this.type;
    data["pdflink"] = "empty";
    //data["date"] = new Date(2021, 5, Number(this.date));
    //this.date = null;
    //this.toggle(false, null);
    this.db.collection("Management").doc(this.userID).collection("Schedule").add(data).then(res => {
      this.router.navigate(['/management']);
      console.log(res);
    })
    .catch(e => {

    })
  }

}

