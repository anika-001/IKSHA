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
import { AngularFireAuthModule } from "@angular/fire/auth"
import {AngularFireStorageModule } from "@angular/fire/storage"


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
import { ProfilesiteComponent } from './profilesite/profilesite.component';
import { TemplatesComponent } from './templates/templates.component';
import { AddeventComponent } from './addevent/addevent.component';
import { EventsComponent } from './events/events.component';
import { AllresourcesComponent } from './allresources/allresources.component';
import { AskawaysComponent } from './askaways/askaways.component';
import { SingleaskawayComponent } from './singleaskaway/singleaskaway.component';
import { TeamupformComponent } from './teamupform/teamupform.component';
//import { ChatroomComponent } from './chatroom/chatroom.component';
import { ResumeComponent } from './resume/resume.component';
import { ChatComponent } from './chat/chat.component';
import { TeamupcardsComponent } from './teamupcards/teamupcards.component';

import { ViewscheduleComponent } from './viewschedule/viewschedule.component';
import { AddquestionComponent } from './addquestion/addquestion.component';
import { ResourceformComponent } from './resourceform/resourceform.component';
import { ViewexpensesComponent } from './viewexpenses/viewexpenses.component';
import { HashtagComponent } from './hashtag/hashtag.component';
import { AddresumeforreviewComponent } from './addresumeforreview/addresumeforreview.component';
import { AddresumeComponent } from './addresume/addresume.component';
import { ViewpdfComponent } from './viewpdf/viewpdf.component';


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
    HomeComponent,
    ManagementComponent,
    UploadschedComponent,
    ResourcesComponent,
    ProfilesiteComponent,
    TemplatesComponent,
    AddeventComponent,
    EventsComponent,
    AllresourcesComponent,
    AskawaysComponent,
    SingleaskawayComponent,
    TeamupformComponent,
    ResumeComponent,
    ChatComponent,
    TeamupcardsComponent,
 
    ViewscheduleComponent,
    AddquestionComponent,
    ResourceformComponent,
    ViewexpensesComponent,
    HashtagComponent,
    AddresumeforreviewComponent,
    AddresumeComponent,
    ViewpdfComponent
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
    MatSelectModule,
    AngularFireAuthModule,
    AngularFireStorageModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
