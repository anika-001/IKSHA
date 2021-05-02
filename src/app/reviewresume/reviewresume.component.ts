import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-reviewresume',
  templateUrl: './reviewresume.component.html',
  styleUrls: ['./reviewresume.component.scss']
})
export class ReviewresumeComponent implements OnInit {

  constructor(private fb: FormBuilder, private as: AuthService, private db: AngularFirestore, private router: Router, private route: ActivatedRoute) { }

  addrev = this.fb.group({
    Review: [''],
  })

  id: any;
  url: any;
  userID: any;
  userEmail: any;
  reviews: any;
  ngOnInit(): void {
    this.id = this.route.snapshot.queryParams['id'];
    this.url = this.route.snapshot.queryParams['url'];
    this.as.getUserState()
      .subscribe(user => {
        this.getreviews();
        this.userID = user.uid;
        this.userEmail = user.email;
      })
  }

  gotoresume(){
    this.router.navigate(['/pdf'], { queryParams: {url: this.url}});
  }

  addreview(){
    let data = this.addrev.value;
    data["email"] = this.userEmail;
    data["uid"] = this.userID;
    this.db.collection("Resumes").doc(this.id).collection("Reviews").add(data).then(res => {
      this.addrev.get('Review').setValue("");
    })
  }

  getreviews(){
    this.db.collection("Resumes").doc(this.id).collection("Reviews").snapshotChanges().subscribe(res => {
      this.reviews = res;
    })
  }
}
