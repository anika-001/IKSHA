import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-uploadsched',
  templateUrl: './uploadsched.component.html',
  styleUrls: ['./uploadsched.component.scss']
})
export class UploadschedComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  receiptUpload: any;

  type: string;
  upsched = this.fb.group({
    ScheuleName: [''],
    ScheduleCategory: [''],
    //Amount: ['']
  })

  typeoptions = [
    {
      name: "1",
      displayname: "Daily"
    },
    {
      name: "2",
      displayname: "Weekly"
    },
    {
      name: "3",
      displayname: "Monthly" 
    }
  ]

  ngOnInit(): void {
  }

  // uploadreceipt(files: FileList) {
  //   this.receiptUpload = files.item(0);
  // }
}

