import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    AnnouncementsManagementRoutingModule
  ]
})
export class AnnouncementsManagementModule { }
