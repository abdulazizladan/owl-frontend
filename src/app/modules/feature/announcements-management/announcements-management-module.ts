import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { BaseChartDirective } from 'ng2-charts';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AnnouncementsManagementRoutingModule } from './announcements-management-routing-module';
import { AnnouncementDetails } from './components/announcement-details/announcement-details';
import { AnnouncementsList } from './components/announcements-list/announcements-list';
import { AddAnnouncement } from './components/add-announcement/add-announcement';
import { Summary } from './components/summary/summary';


@NgModule({
  declarations: [
    AnnouncementDetails,
    AnnouncementsList,
    AddAnnouncement,
    Summary
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BaseChartDirective,
    FlexLayoutModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatProgressBarModule,
    MatInputModule,
    MatFormFieldModule,
    AnnouncementsManagementRoutingModule
  ],
  providers: [
    provideHttpClient()
  ]
})
export class AnnouncementsManagementModule { }
