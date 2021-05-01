import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
