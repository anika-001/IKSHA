import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddexpenseComponent } from './addexpense/addexpense.component';
import { AddtriggerComponent } from './addtrigger/addtrigger.component';
import { FinanceComponent } from './finance/finance.component';
import { LoginComponent } from './login/login.component';
import { ManagementComponent } from './management/management.component';
import { UploadschedComponent } from './uploadsched/uploadsched.component';
import { ResourcesComponent } from './resources/resources.component';

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
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
