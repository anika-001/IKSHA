import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddexpenseComponent } from './addexpense/addexpense.component';
import { AddtriggerComponent } from './addtrigger/addtrigger.component';
import { FinanceComponent } from './finance/finance.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManagementComponent } from './management/management.component';
import { UploadschedComponent } from './uploadsched/uploadsched.component';
import { ResourcesComponent } from './resources/resources.component';

import { ResumeBuilderComponent } from './resume-builder/resume-builder.component';
import { ProfilesiteComponent } from './profilesite/profilesite.component';
import { TemplatesComponent } from './templates/templates.component';
import { AddeventComponent } from './addevent/addevent.component';
import {EventsComponent} from './events/events.component';
import { ResumeComponent } from './resume/resume.component';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'finance',
    component: FinanceComponent
  },
  {
    path: 'finance/addexpense',
    component: AddexpenseComponent
  },
  {
    path: 'finance/addtrigger',
    component: AddtriggerComponent
  },
  {
    path: 'management',
    component: ManagementComponent
  },
  {
    path: 'management/uploadsched',
    component: UploadschedComponent
  },
  {
    path: 'resources',
    component: ResourcesComponent
  },
  {
    path: 'home',
    component: HomeComponent

  },

  {
    path:'profilesite',
    component: ProfilesiteComponent
  },
  {
    path: 'templates',
    component: TemplatesComponent
  },
  {
    path: 'addevent',
    component: AddeventComponent
  },
  {
    path:'events',
    component: EventsComponent
  },
  {
    path:'resume',
    component:ResumeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
