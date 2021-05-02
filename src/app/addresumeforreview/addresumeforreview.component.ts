import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-addresumeforreview',
  templateUrl: './addresumeforreview.component.html',
  styleUrls: ['./addresumeforreview.component.scss']
})
export class AddresumeforreviewComponent implements OnInit {


  constructor(private fb: FormBuilder, private as: AuthService, private db: AngularFirestore, private router: Router) { }

  receiptUpload: any;

  type: string;
  addresdeets = this.fb.group({
    Description: [''],
    Name: [''],
    Profession: ['']
  })
  userID: any;
  userEmail: any;

  ngOnInit(): void {
    this.as.getUserState()
      .subscribe(user => {
        this.userID = user.uid;
        this.userEmail = user.email;
        //console.log(farm, id);
      })
  }


  submit(){
    let data = this.addresdeets.value;
    console.log(data);
    data["Email"] = this.userEmail;
    data["AddedForReview"] = "Yes";
    this.db.collection("Resumes").snapshotChanges().subscribe((res: any) => {
      for (let x of res){
        console.log(x.payload.doc.data().uid == this.userID)
        if(x.payload.doc.data().uid == this.userID){
          this.db.collection("Resumes").doc(x.payload.doc.id).update(data).then(res => {
            this.router.navigate(['/resume']);
            console.log(res);
          })
          .catch(e => {
            console.log(e);
          })
          break;
        }
      }
    })
  }

}
