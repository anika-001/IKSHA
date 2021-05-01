import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-addtrigger',
  templateUrl: './addtrigger.component.html',
  styleUrls: ['./addtrigger.component.scss']
})
export class AddtriggerComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  type: string;

  addtrig = this.fb.group({
    ExpenseName: [''],
    ExpenseCategory: [''],
    Amount: ['']
  })

  catoptions = [
    {
      name: "1",
      displayname: "Travel"
    },
    {
      name: "2",
      displayname: "Food"
    },
    {
      name: "3",
      displayname: "Personal" 
    },
    {
      name: "4",
      displayname: "Health"
    },
    {
      name: "5",
      displayname: "Subscriptions and Bills"
    },
    {
      name: "6",
      displayname: "Savings"
    },
    {
      name: "7",
      displayname: "Loans" 
    },
    {
      name: "8",
      displayname: "Miscellaneous" 
    },
    {
      name: "9",
      displayname: "Total" 
    }
  ]

  ngOnInit(): void {
  }

}
