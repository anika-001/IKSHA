import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allresources',
  templateUrl: './allresources.component.html',
  styleUrls: ['./allresources.component.scss']
})
export class AllresourcesComponent implements OnInit {

  constructor() { }
  cards: any[] = [];

  ngOnInit(): void {
    for(let x=0; x<10; x++){
       this.cards.push({"num": x + 1});
    }
    console.log(this.cards);
  }
}
