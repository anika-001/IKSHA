import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.scss']
})
export class AddeventComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  event = this.fb.group({
    EventName: [''],
    Hashtag: [''],
    Link: ['']
  })

  ngOnInit(): void {
  }

}
