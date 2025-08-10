import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';

import { WardManagementRoutingModule } from './ward-management-routing-module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WardManagementRoutingModule
  ],
  providers: [
    provideHttpClient()
  ]
})
export class WardManagementModule { }
