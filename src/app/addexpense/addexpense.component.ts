import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-addexpense',
  templateUrl: './addexpense.component.html',
  styleUrls: ['./addexpense.component.scss']
})
export class AddexpenseComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  addexp = this.fb.group({
    ExpenseName: [''],
    ExpenseCategory: [''],
    Amount: ['']
  })

  ngOnInit(): void {
  }

}
