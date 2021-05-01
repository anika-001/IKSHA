import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinanceComponent } from './finance/finance.component';
import { LoginComponent } from './login/login.component';
import { ResumeBuilderComponent } from './resume-builder/resume-builder.component';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
<<<<<<< HEAD
 {
   path:'resume',
   component: ResumeBuilderComponent
 }
=======
  {
    path: 'finance',
    component: FinanceComponent
  }
>>>>>>> 555830de3b03c715251fb574bc00fed457af9232
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
