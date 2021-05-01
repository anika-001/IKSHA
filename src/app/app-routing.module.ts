import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddexpenseComponent } from './addexpense/addexpense.component';
import { AddtriggerComponent } from './addtrigger/addtrigger.component';
import { FinanceComponent } from './finance/finance.component';
import { LoginComponent } from './login/login.component';
import { ResumeBuilderComponent } from './resume-builder/resume-builder.component';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
 {
   path:'resume',
   component: ResumeBuilderComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
