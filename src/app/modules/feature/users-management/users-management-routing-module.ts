import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Summary } from './components/summary/summary';
import { UserDetails } from './components/user-details/user-details';

const routes: Routes = [
  {
    path: '',
    component: Summary
  },
  {
    path: ':id',
    component: UserDetails
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersManagementRoutingModule { }
