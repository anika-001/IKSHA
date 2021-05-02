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
  submit(){
    let data = this.addexp.value;
    console.log(data);
    this.db.collection("").doc(this.userID).collection("").add(data).then(res => {
      this.router.navigate(['/teamupform']);
      console.log(res);
    }

}
