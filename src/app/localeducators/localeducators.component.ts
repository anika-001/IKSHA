import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-localeducators',
  templateUrl: './localeducators.component.html',
  styleUrls: ['./localeducators.component.scss']
})
export class LocaleducatorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    public map: any = { lat: 51.678418, lng: 7.809007 };
    
    
}
