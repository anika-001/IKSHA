import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

  constructor() { }

  cards: any[] = [];

  ngOnInit(): void {
    for(let x=0; x<7; x++){
       this.cards.push({"num": x + 1});
    }
    console.log(this.cards);
  }


}
