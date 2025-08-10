import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';

import { PatientssManagementRoutingModule } from './patientss-management-routing-module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PatientssManagementRoutingModule
  ],
  providers: [
    provideHttpClient()
  ]
})
export class PatientssManagementModule { }
