import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-addresume',
  templateUrl: './addresume.component.html',
  styleUrls: ['./addresume.component.scss']
})
export class AddresumeComponent implements OnInit {


  constructor(private as: AuthService, private db: AngularFirestore, private router: Router, private storage: AngularFireStorage) { }

  pdfupload: any;

  userID: any;


  downloadUrl: any;

  ngOnInit(): void {
    this.as.getUserState()
      .subscribe(user => {
        this.userID = user.uid;
        //  this.store("...");
        //console.log(farm, id);
      })
  }
  submit() {
    const path = `${this.userID}/resume/${this.pdfupload.name}`;
    const ref = this.storage.ref(path);
    this.storage.upload(path, this.pdfupload).then(
      ress => {
        ref.getDownloadURL().subscribe(res => {
          console.log(res);
          this.db.collection("Resumes").add({Link: res, AddedForReview: "No", uid: this.userID}).then(e => {
            console.log(e)
            this.router.navigate(['/resume'])
          }).
            catch(e => { console.log(e) });
        })

      });
  }

  uploadresume(files: FileList) {
    this.pdfupload = files.item(0);
  }

}
