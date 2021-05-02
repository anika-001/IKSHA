import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-teamupform',
  templateUrl: './teamupform.component.html',
  styleUrls: ['./teamupform.component.scss']
})
export class TeamupformComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  type: string;
  teamup = this.fb.group({
    OccassionName: [''],
    DescriptionName: [''],
    Emailid: ['']
    //Amount: ['']
  })
  ngOnInit(): void {
  }

}
