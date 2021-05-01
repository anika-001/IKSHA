import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

  constructor() { }

  cards: any[] = [];

  ngOnInit(): void {
    for(let x=0; x<6; x++){
       this.cards.push({"num": x + 1});
    }
    console.log(this.cards);
  }


}
