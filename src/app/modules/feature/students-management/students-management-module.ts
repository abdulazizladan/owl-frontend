import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';

import { StudentsManagementRoutingModule } from './students-management-routing-module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StudentsManagementRoutingModule
  ],
  providers: [
    provideHttpClient()
  ]
})
export class StudentsManagementModule { }
