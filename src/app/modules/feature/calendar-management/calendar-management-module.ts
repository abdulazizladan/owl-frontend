import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule} from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { CalendarManagementRoutingModule } from './calendar-management-routing-module';
import { Summary } from './components/summary/summary';
import { AddHoliday } from './components/add-holiday/add-holiday';
import { AddSession } from './components/add-session/add-session';
import { MatCardModule } from '@angular/material/card';
//import { MatDatepickerModule } from '@angular/material/datepicker';


@NgModule({
  declarations: [
    Summary,
    AddHoliday,
    AddSession
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatProgressBarModule,
    CalendarManagementRoutingModule,
    MatCardModule,
    //MatDatepickerModule
  ]
})
export class CalendarManagementModule { }
