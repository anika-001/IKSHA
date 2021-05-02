import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewschedule',
  templateUrl: './viewschedule.component.html',
  styleUrls: ['./viewschedule.component.scss']
})
export class ViewscheduleComponent implements OnInit {

  constructor() { }
  cards: any[] = [];

  ngOnInit(): void {
    for(let x=0; x<10; x++){
       this.cards.push({"num": x + 1});
    }
    console.log(this.cards);
  }
}