import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singleaskaway',
  templateUrl: './singleaskaway.component.html',
  styleUrls: ['./singleaskaway.component.scss']
})
export class SingleaskawayComponent implements OnInit {

  constructor() { }
  cards: any[] = [];

  ngOnInit(): void {
    for(let x=0; x<7; x++){
       this.cards.push({"num": x + 1});
    }
    console.log(this.cards);
  }


}