import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-teamupcards',
  templateUrl: './teamupcards.component.html',
  styleUrls: ['./teamupcards.component.scss']
})
export class TeamupcardsComponent implements OnInit {

  constructor(private db: AngularFirestore) { }

  teamups: any;

  ngOnInit(): void {

    this.gettemups();
  }

  gettemups(){
    this.db.collection("Teamup").snapshotChanges().subscribe(res => {
      this.teamups = res;
    }) 
  }

}
