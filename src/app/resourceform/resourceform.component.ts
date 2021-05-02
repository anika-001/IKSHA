import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-resourceform',
  templateUrl: './resourceform.component.html',
  styleUrls: ['./resourceform.component.scss']
})
export class ResourceformComponent implements OnInit {

  constructor(private fb: FormBuilder, private as: AuthService, private db: AngularFirestore, private router: Router) { }
  type: string;
  addres = this.fb.group({
    Thread: ['']
  })

  userID: any;
  userEmail: any;

  ngOnInit(): void {
    this.as.getUserState()
      .subscribe(user => {
        this.userID = user.uid;
        this.userEmail = user.email;
      })
  }

  submit(){
    let data = this.addres.value;
    data["uid"] = this.userID;
    data["email"] = this.userEmail;
    data["NoOfResources"] = 0;
    this.db.collection("Resources").add(data).then(res => {
      this.router.navigate(['/allresources'])
    })
  }

}
