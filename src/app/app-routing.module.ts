import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinanceComponent } from './finance/finance.component';
import { LoginComponent } from './login/login.component';
import { ManagementComponent } from './management/management.component';

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
    path: 'management',
    component: ManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
