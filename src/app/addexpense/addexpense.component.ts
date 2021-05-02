import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-addexpense',
  templateUrl: './addexpense.component.html',
  styleUrls: ['./addexpense.component.scss']
})
export class AddexpenseComponent implements OnInit {

  constructor(private fb: FormBuilder, private as: AuthService, private db: AngularFirestore, private router: Router) { }

  receiptUpload: any;

  type: string;
  addexp = this.fb.group({
    ExpenseName: [''],
    Amount: ['']
  })

  catoptions = [
    {
      name: "Travel",
      displayname: "Travel"
    },
    {
      name: "Food",
      displayname: "Food"
    },
    {
      name: "Personal",
      displayname: "Personal" 
    },
    {
      name: "Health",
      displayname: "Health"
    },
    {
      name: "Subscriptions and Bills",
      displayname: "Subscriptions and Bills"
    },
    {
      name: "Savings",
      displayname: "Savings"
    },
    {
      name: "Loans",
      displayname: "Loans" 
    },
    {
      name: "Miscellaneous",
      displayname: "Miscellaneous" 
    }
  ]

  userID: any;

  ngOnInit(): void {
    this.as.getUserState()
      .subscribe(user => {
        this.userID = user.uid;
        if(user == null){this.router.navigate(['/login'])}
        //console.log(farm, id);
      })
  }
  submitexpense(){
    let data = this.addexp.value;
    console.log(data);
    data["ExpenseCategory"] = this.type;
    data["pdflink"] = "empty";
    this.db.collection("Finance").doc(this.userID).collection("Expenses").add(data).then(res => {
      this.router.navigate(['/finance']);
      console.log(res);
    })
    .catch(e => {

    })
  }

  uploadreceipt(files: FileList) {
    this.receiptUpload = files.item(0);
  }
}
