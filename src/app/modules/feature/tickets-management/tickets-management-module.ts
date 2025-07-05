import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsManagementRoutingModule } from './tickets-management-routing-module';
import { Summary } from './components/summary/summary';


@NgModule({
  declarations: [
    Summary
  ],
  imports: [
    CommonModule,
    TicketsManagementRoutingModule
  ]
})
export class TicketsManagementModule { }
