import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-viewexpenses',
  templateUrl: './viewexpenses.component.html',
  styleUrls: ['./viewexpenses.component.scss']
})
export class ViewexpensesComponent implements OnInit {

  constructor(private db: AngularFirestore, private as: AuthService, private router: Router) { }
  cards: any[] = [];

  userID: any;
  expenses: any;
  triggers: any;
  total: number = 0;
  ngOnInit(): void {
    this.as.getUserState()
      .subscribe(user => {
        if(user == null){this.router.navigate(['/login'])}
        this.userID = user.uid;
        this.getexpenses();
        this.gettriggers();
        //console.log(farm, id);
      })
  }

  getexpenses() {
    this.db.collection("Finance").doc(this.userID).collection("Expenses").snapshotChanges().subscribe(res => {
      this.expenses = res;
      for(let x of this.expenses){
        this.total += x.payload.doc.data().Amount;
      }
    })
  }

  gettriggers(){
    this.db.collection("Finance").doc(this.userID).collection("Trigger").snapshotChanges().subscribe(res => {
      this.triggers = res;
    })
  }
  // ngOnInit(): void {

  //   for(let x=0; x < 3; x++){
  //      this.cards.push({"num": x + 1});
  //   }
  //   console.log(this.cards);
  // }

}
