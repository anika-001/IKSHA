import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from "src/environments/environment";

import firebase from 'firebase/app';
import { AngularFireModule } from "@angular/fire";
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
//import { ProfilebuildComponent } from './profilebuild/profilebuild.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResumeBuilderComponent } from './resume-builder/resume-builder.component';
=======
import { FinanceComponent } from './finance/finance.component';

>>>>>>> 555830de3b03c715251fb574bc00fed457af9232
firebase.initializeApp(environment.firebaseConfig);


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
<<<<<<< HEAD
    ResumeBuilderComponent,
    //ProfilebuildComponent
=======
    FinanceComponent
>>>>>>> 555830de3b03c715251fb574bc00fed457af9232
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'educationapp'),
    AppRoutingModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
