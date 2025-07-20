import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';

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
    HttpClientModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatTableModule,
    FeesManagementRoutingModule
  ]
})
export class FeesManagementModule { }
