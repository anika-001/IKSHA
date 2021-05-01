import { BrowserModule, HammerModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
import { Injectable, NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";


import firebase from 'firebase/app';
import { LoginComponent } from './login/login.component';

//import { ProfilebuildComponent } from './profilebuild/profilebuild.component';
import { FinanceComponent } from './finance/finance.component';
import { AddexpenseComponent } from './addexpense/addexpense.component';
import { ResumeBuilderComponent } from './resume-builder/resume-builder.component';
import { AddtriggerComponent } from './addtrigger/addtrigger.component';
import { HomeComponent } from './home/home.component';
import {ManagementComponent} from './management/management.component';
import { UploadschedComponent } from './uploadsched/uploadsched.component';
import { ResourcesComponent } from './resources/resources.component';

firebase.initializeApp(environment.firebaseConfig);



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FinanceComponent,
    AddexpenseComponent,
    ResumeBuilderComponent,
    AddtriggerComponent,
    HomeComponent,
    ManagementComponent,
    UploadschedComponent,
    ResourcesComponent
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
    MatSidenavModule,
    MatSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
