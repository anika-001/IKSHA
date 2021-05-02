import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-hashtag',
  templateUrl: './hashtag.component.html',
  styleUrls: ['./hashtag.component.scss']
})
export class HashtagComponent implements OnInit {

  constructor(private as: AuthService, private db: AngularFirestore, private router: Router, private route: ActivatedRoute) { }
  cards: any[] = [];
  userID: any;
  hashtag: any;
  events: any;
  ifsubscribe = "subscribe";
  subscriptions: any;
  ngOnInit(): void {
    this.hashtag = this.route.snapshot.queryParams['hashtag'];
    this.gethashtags();
    
    this.as.getUserState()
      .subscribe(user => {
        this.userID = user.uid;
        this.getsubscriptions();
      })
    for(let x=0; x<4; x++){
      this.cards.push({"num": x + 1});
   }
   console.log(this.cards);
 }

 gethashtags(){
   this.db.collection("Events").snapshotChanges().subscribe(res => {
    this.events = res;
   })
 }

 getsubscriptions(){
  this.db.collection("HashtagSubscription").doc(this.userID).collection("hashtags").snapshotChanges().subscribe(res => {
    this.subscriptions = res;
    for(let i of this.subscriptions){
      console.log(i.payload.doc.data().hashtag, this.hashtag)
      if(i.payload.doc.data().hashtag == this.hashtag){
        this.ifsubscribe = "Subscribed";
      }
    }
  })
 }

 subscribe(){
  this.db.collection("HashtagSubscription").doc(this.userID).collection("hashtags").add({hashtag: this.hashtag});
 }

}
