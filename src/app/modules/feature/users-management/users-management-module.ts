import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersManagementRoutingModule } from './users-management-routing-module';
import { Summary } from './components/summary/summary';


@NgModule({
  declarations: [
    Summary
  ],
  imports: [
    CommonModule,
    UsersManagementRoutingModule
  ]
})
export class UsersManagementModule { }
