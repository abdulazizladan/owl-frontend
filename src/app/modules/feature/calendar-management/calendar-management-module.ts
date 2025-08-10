import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatToolbarModule} from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';

import { CalendarManagementRoutingModule } from './calendar-management-routing-module';
import { Summary } from './components/summary/summary';
import { AddHoliday } from './components/add-holiday/add-holiday';
import { AddSession } from './components/add-session/add-session';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
//import { MatDatepickerModule } from '@angular/material/datepicker';


@NgModule({
  declarations: [
    Summary,
    AddHoliday,
    AddSession
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatButtonModule,
    CalendarManagementRoutingModule,
    MatCardModule,
    MatIconModule,
    //MatDatepickerModule
  ],
  providers: [
    provideHttpClient()
  ]
})
export class CalendarManagementModule { }
