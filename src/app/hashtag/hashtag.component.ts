import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hashtag',
  templateUrl: './hashtag.component.html',
  styleUrls: ['./hashtag.component.scss']
})
export class HashtagComponent implements OnInit {

  constructor() { }
  cards: any[] = [];

  ngOnInit(): void {
    for(let x=0; x<4; x++){
      this.cards.push({"num": x + 1});
   }
   console.log(this.cards);
 }



}
