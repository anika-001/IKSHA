import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-askaways',
  templateUrl: './askaways.component.html',
  styleUrls: ['./askaways.component.scss']
})
export class AskawaysComponent implements OnInit {

  constructor() { }
  cards: any[] = [];

  ngOnInit(): void {
    for(let x=0; x<10; x++){
       this.cards.push({"num": x + 1});
    }
    console.log(this.cards);
  }
}