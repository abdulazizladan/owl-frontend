import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';

import { EnrolmentManagementRoutingModule } from './enrolment-management-routing-module';
import { EnrolmentSummary } from './components/enrolment-summary/enrolment-summary';
import { NewEnrolment } from './components/new-enrolment/new-enrolment';


@NgModule({
  declarations: [
    EnrolmentSummary,
    NewEnrolment
  ],
  imports: [
    CommonModule,
    EnrolmentManagementRoutingModule
  ],
  providers: [
    provideHttpClient()
  ]
})
export class EnrolmentManagementModule { }
