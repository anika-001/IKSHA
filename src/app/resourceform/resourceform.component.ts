import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-resourceform',
  templateUrl: './resourceform.component.html',
  styleUrls: ['./resourceform.component.scss']
})
export class ResourceformComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  type: string;
  teamup = this.fb.group({
    url: [''],
    DescriptionName: ['']
  })

  ngOnInit(): void {
  }

}
