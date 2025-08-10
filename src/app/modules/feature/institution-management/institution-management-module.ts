import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { BaseChartDirective } from 'ng2-charts';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';

import { InstitutionManagementRoutingModule } from './institution-management-routing-module';
import { Summary } from './components/summary/summary';
import { CampusDetails } from './components/campus-details/campus-details';
import { AddCampus } from './components/add-campus/add-campus';
import { MatCalendarHeader } from "@angular/material/datepicker";


@NgModule({
  declarations: [
    Summary,
    CampusDetails,
    AddCampus
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    BaseChartDirective,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatListModule,
    InstitutionManagementRoutingModule,
    MatCalendarHeader
  ],
  providers: [
    provideHttpClient()
  ]
})
export class InstitutionManagementModule { }
