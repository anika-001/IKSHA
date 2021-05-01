import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-addexpense',
  templateUrl: './addexpense.component.html',
  styleUrls: ['./addexpense.component.scss']
})
export class AddexpenseComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  receiptUpload: any;

  type: string;
  addexp = this.fb.group({
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
    }
  ]

  ngOnInit(): void {
  }

  uploadreceipt(files: FileList) {
    this.receiptUpload = files.item(0);
  }
}
