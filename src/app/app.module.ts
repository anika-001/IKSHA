import { BrowserModule, HammerModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
import { Injectable, NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import * as Hammer from 'hammerjs';

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

firebase.initializeApp(environment.firebaseConfig);

@Injectable({ providedIn: 'root' })
export class HammerConfig extends HammerGestureConfig {
  buildHammer(element: HTMLElement) {
    let mc = new Hammer(element, {
      touchAction: "pan-y",
    });
    return mc;
  }
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FinanceComponent,
    AddexpenseComponent,
    ResumeBuilderComponent,
    AddtriggerComponent,
    HomeComponent
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
