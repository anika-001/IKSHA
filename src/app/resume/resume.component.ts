import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  constructor(private as: AuthService, private db: AngularFirestore, private router: Router) { }

  userID: any;
  resume: any;
  resumes: any;
  ngOnInit(): void {
    this.as.getUserState()
      .subscribe(user => {
        if(user == null){this.router.navigate(['/login'])}
        this.getresume();
        this.userID = user.uid;
      })
  }

  addforreview(){
    
  }

  getresume(){
    this.db.collection("Resumes").snapshotChanges().subscribe((res: any) => {
      // this.resume = res;(
        this.resumes = res;
        console.log(this.resumes[0].payload.doc.data())
      for(let x of res){
        if(x.payload.doc.data().uid == this.userID){
          this.resume = x;
        }
      }
      console.log(this.resume);
    })
  }
  gotopdf(){
    this.router.navigate(['/pdf'], { queryParams: {url: this.resume.payload.doc.data().Link}});
  }

  reviewresume(url: string, id: string){
    this.router.navigate(['/resume/review'], { queryParams: {url: url, id: id}});
  }

  
}
