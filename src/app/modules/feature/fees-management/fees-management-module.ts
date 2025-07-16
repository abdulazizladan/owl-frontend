import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeesManagementRoutingModule } from './fees-management-routing-module';
import { Summary } from './components/summary/summary';
import { SetFee } from './components/set-fee/set-fee';
import { PaymentHistory } from './components/payment-history/payment-history';
import { PendingList } from './components/pending-list/pending-list';


@NgModule({
  declarations: [
    Summary,
    SetFee,
    PaymentHistory,
    PendingList
  ],
  imports: [
    CommonModule,
    FeesManagementRoutingModule
  ]
})
export class FeesManagementModule { }
