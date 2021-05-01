import { BrowserModule, HammerModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
import { Injectable, NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";


import firebase from 'firebase/app';
import { LoginComponent } from './login/login.component';

//import { ProfilebuildComponent } from './profilebuild/profilebuild.component';
import { FinanceComponent } from './finance/finance.component';
<<<<<<< HEAD
import { ManagementComponent } from './management/management.component';
=======
import { AddexpenseComponent } from './addexpense/addexpense.component';
import { ResumeBuilderComponent } from './resume-builder/resume-builder.component';
>>>>>>> 91b95ebf48a27a4d594aa3bada867b3dc5b92074

firebase.initializeApp(environment.firebaseConfig);



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FinanceComponent,
<<<<<<< HEAD
    ManagementComponent
=======
    AddexpenseComponent,
    ResumeBuilderComponent
>>>>>>> 91b95ebf48a27a4d594aa3bada867b3dc5b92074
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HammerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'Krishi Bazaar'),
    AngularFirestoreModule,
    ChartsModule,
    MatSidenavModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
