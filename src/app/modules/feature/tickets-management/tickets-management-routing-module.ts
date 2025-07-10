import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Summary } from './components/summary/summary';
import { TicketDetails } from './components/ticket-details/ticket-details';

const routes: Routes = [
  {
    path: '',
    component: Summary
  },
  {
    path: ':id',
    component: TicketDetails
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsManagementRoutingModule { }
