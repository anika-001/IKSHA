import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.scss']
})
export class AddeventComponent implements OnInit {

  constructor(private fb: FormBuilder, private as :AuthService, private db:AngularFirestore, private router:Router) {
     }
userID:any;
userEmail:any;
  event = this.fb.group({
    EventName: [''],
    Hashtag: [''],
    Link: ['']
  })
 
  ngOnInit(): void {
    this.as.getUserState()
      .subscribe(user => {
        this.userID = user.uid;
        this.userEmail=user.email;
        //console.log(farm, id);
      })
  
  }
  submitevent(){
    let data = this.event.value;
    console.log(data);
    data["uid"]=this.userID;
    data['email']=this.userEmail;
    this.db.collection("Events").add(data).then(res => {
      this.router.navigate(['/events']);
      console.log(res);
    })
    .catch(e => {

    })
    
  }

}
