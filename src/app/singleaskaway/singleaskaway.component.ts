import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-singleaskaway',
  templateUrl: './singleaskaway.component.html',
  styleUrls: ['./singleaskaway.component.scss']
})
export class SingleaskawayComponent implements OnInit {

  cards: any[] = [];

  constructor(private fb: FormBuilder, private as: AuthService, private db: AngularFirestore, private router: Router, private route: ActivatedRoute) { }

  userID: any;
  userEmail: any;
  addans = this.fb.group({
    Answer: [''],
  })
  id: string;
  question: any;
  answers: any;
  ngOnInit(): void {
    this.id = this.route.snapshot.queryParams['id'];
    this.getquestion();
    this.getanswers();
    this.as.getUserState()
      .subscribe(user => {
        if(user == null){this.router.navigate(['/login'])}
        this.userID = user.uid;
        this.userEmail = user.email;
      })
    for(let x=0; x<7; x++){
       this.cards.push({"num": x + 1});
    }
    console.log(this.cards);
  }

  getanswers(){
    this.db.collection("Questions").doc(this.id).collection("Answers").snapshotChanges().subscribe(res => {
      this.answers = res;
    })
  }

  getquestion(){
    this.db.collection("Questions").doc(this.id).snapshotChanges().subscribe(res => {
      this.question = res;
    })
  }
  answer(){
    let data = this.addans.value;
    data["uid"] = this.userID;
    data["email"] = this.userEmail;
    data["likes"] = 0;
    data["dislikes"] = 0;
    this.db.collection("Questions").doc(this.id).collection("Answers").add(data).then(res => {
      this.addans.get('Answer').setValue('');
    })
    console.log()
    this.db.collection("Questions").doc(this.id).update({NoOfAnswers: this.question.payload.data().NoOfAnswers + 1});
  }

  like(docid: string, likes: number){
    this.db.collection("Questions").doc(this.id).collection("Answers").doc(docid).update({likes: likes + 1});
  }

  dislike(docid: string, dislikes: number){
    this.db.collection("Questions").doc(this.id).collection("Answers").doc(docid).update({dislikes: dislikes + 1});
  }

}