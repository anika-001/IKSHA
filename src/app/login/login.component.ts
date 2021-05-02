import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import 'firebase/auth'
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  login: boolean = true;
  constructor(private afAuth: AngularFireAuth, private fb: FormBuilder, private router: Router, private as : AuthService) { }

  Auth = this.fb.group({
    emaillogin: [''],
    passwordlogin: [''],
    emailreg: [''],
    passwordreg: ['']
  })

  ngOnInit(): void {
    this.as.getUserState()
    .subscribe(user => {
      if(user != null){this.router.navigate(['/home'])}
    })
  }


  togglelogin(bool: boolean){
    this.login = bool;
  }

  signin(){
    this.afAuth.signInWithEmailAndPassword(this.Auth.get("emaillogin").value, this.Auth.get("passwordlogin").value).then(res => {
      this.router.navigate(['/home'])
    })
    .catch(e => {
      console.log(e)
    })
  }

  signup(){
    this.afAuth.createUserWithEmailAndPassword(this.Auth.get("emailreg").value, this.Auth.get("passwordreg").value).then(res => {
      this.togglelogin(true);
    })
    .catch(e => {
      console.log(e)
    })
  }
}
