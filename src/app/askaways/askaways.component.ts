import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-askaways',
  templateUrl: './askaways.component.html',
  styleUrls: ['./askaways.component.scss']
})
export class AskawaysComponent implements OnInit {

  constructor(private router: Router, private db: AngularFirestore) { }
  cards: any[] = [];
  questions: any;

  ngOnInit(): void {
    for(let x=0; x<10; x++){
       this.cards.push({"num": x + 1});
    }
    this.getquestions();
    console.log(this.cards);
  }

  getquestions(){
    this.db.collection("Questions").snapshotChanges().subscribe((res: any) => {
      console.log(res)
      this.questions = res;
    })
  }
  gotoquestion(id: string){
    this.router.navigate(['/askaway/ask'], { queryParams: {id: id}});
  }
}