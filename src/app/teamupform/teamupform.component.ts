import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-teamupform',
  templateUrl: './teamupform.component.html',
  styleUrls: ['./teamupform.component.scss']
})
export class TeamupformComponent implements OnInit {

  constructor(private fb: FormBuilder,private as:AuthService, private db:AngularFirestore, private router:Router) { }
  userID:any;
  userEmail:any;
  //type: string;
  teamup = this.fb.group({
    OccassionName: [''],
    DescriptionName: [''],
    Emailid: ['']
    //Amount: ['']
  })
  ngOnInit(): void {
    this.as.getUserState()
      .subscribe(user => {
        if(user == null){this.router.navigate(['/login'])}
        this.userID = user.uid;
        this.userEmail=user.email;
        //console.log(farm, id);
      })
  }
  submitform(){
    let data = this.teamup.value ;
    console.log(data);
    data["uid"]=this.userID;
    data['email']=this.userEmail;
    this.db.collection("Teamup").add(data).then(res => {
      this.router.navigate(['/joinevent']);
      console.log(res);
    })
    .catch(e => {

    })
  }
    

}
