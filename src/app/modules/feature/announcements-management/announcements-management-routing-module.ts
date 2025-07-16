import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Summary } from './components/summary/summary';
import { AnnouncementsList } from './components/announcements-list/announcements-list';
import { AnnouncementDetails } from './components/announcement-details/announcement-details';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'summary',
    pathMatch: 'full'
  },
  {
    path: 'summary',
    component: Summary
  },
  {
    path: 'list',
    component: AnnouncementsList
  },
  {
    path: ':id',
    component: AnnouncementDetails
  },
  {
    path: '**',
    redirectTo: 'summary',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnnouncementsManagementRoutingModule { }
