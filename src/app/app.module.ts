import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from "src/environments/environment";

import firebase from 'firebase/app';
import { AngularFireModule } from "@angular/fire";
import { LoginComponent } from './login/login.component';
import { FinanceComponent } from './finance/finance.component';
import { ManagementComponent } from './management/management.component';

firebase.initializeApp(environment.firebaseConfig);


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FinanceComponent,
    ManagementComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'educationapp'),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
