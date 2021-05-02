import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.scss']
})
export class AddquestionComponent implements OnInit {

  constructor(private fb: FormBuilder, private as: AuthService, private db: AngularFirestore, private router: Router) { }

  userID: any;
  ngOnInit(): void {
    this.as.getUserState()
      .subscribe(user => {
        if(user == null){this.router.navigate(['/login'])}
        this.userID = user.uid;
        
      })
  }

  addques = this.fb.group({
    Question: [''],
  })

  submit(){
    let data = this.addques.value;
    data["uid"] = this.userID;
    data["NoOfAnswers"] = 0;
    this.db.collection("Questions").add(data).then(res => {
      this.router.navigate(['/askaway']);
    })
  }
}
