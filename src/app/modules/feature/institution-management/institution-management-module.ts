import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstitutionManagementRoutingModule } from './institution-management-routing-module';
import { Summary } from './components/summary/summary';


@NgModule({
  declarations: [
    Summary
  ],
  imports: [
    CommonModule,
    InstitutionManagementRoutingModule
  ]
})
export class InstitutionManagementModule { }
