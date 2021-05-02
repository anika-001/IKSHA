import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

  constructor(private fb: FormBuilder, private as: AuthService, private db: AngularFirestore, private router: Router, private route: ActivatedRoute) { }

  userID: any;
  userEmail: any;
  addres = this.fb.group({
    Link: [''],
    Description: ['']
  })
  id: string;
  Thread: any;
  resources: any;
  ngOnInit(): void {
    this.id = this.route.snapshot.queryParams['id'];
    this.getthread();
    this.getresources();
    this.as.getUserState()
      .subscribe(user => {
        if(user == null){this.router.navigate(['/login'])}
        this.userID = user.uid;
        this.userEmail = user.email;
      })
  }

  getresources(){
    this.db.collection("Resources").doc(this.id).collection("Resources_").snapshotChanges().subscribe(res => {
      this.resources = res;
    })
  }

  getthread(){
    this.db.collection("Resources").doc(this.id).snapshotChanges().subscribe(res => {
      this.Thread = res;
    })
  }
  answer(){
    let data = this.addres.value;
    data["uid"] = this.userID;
    data["email"] = this.userEmail;
    data["likes"] = 0;
    data["dislikes"] = 0;
    this.db.collection("Resources").doc(this.id).collection("Resources_").add(data).then(res => {
      this.addres.get('Link').setValue('');
      this.addres.get('Description').setValue('');
    })
    console.log()
    this.db.collection("Resources").doc(this.id).update({NoOfResources: this.Thread.payload.data().NoOfResources + 1});
  }

  like(docid: string, likes: number){
    this.db.collection("Resources").doc(this.id).collection("Resources_").doc(docid).update({likes: likes + 1});
  }

  dislike(docid: string, dislikes: number){
    this.db.collection("Resources").doc(this.id).collection("Resources_").doc(docid).update({dislikes: dislikes + 1});
  }


}
