import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allresources',
  templateUrl: './allresources.component.html',
  styleUrls: ['./allresources.component.scss']
})
export class AllresourcesComponent implements OnInit {

  constructor(private db: AngularFirestore, private router: Router) { }
  cards: any[] = [];

  resources: any;
  ngOnInit(): void {
    this.getresources();
    for(let x=0; x<10; x++){
       this.cards.push({"num": x + 1});
    }
    console.log(this.cards);
  }

  getresources(){
    this.db.collection("Resources").snapshotChanges().subscribe(res =>{
      this.resources = res;
    })
  }

  next(id: string){
    this.router.navigate(['/resources'], { queryParams: {id: id}});
  }
}
