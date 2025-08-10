import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { FacilitiesManagementRoutingModule } from './facilities-management-routing-module';
import { Summary } from './components/summary/summary';
import { AddSite } from './components/add-site/add-site';
import { AddBuilding } from './components/add-building/add-building';
import { AddRoom } from './components/add-room/add-room';
import { SitesList } from './components/sites-list/sites-list';
import { BuildingsList } from './components/buildings-list/buildings-list';
import { RoomsList } from './components/rooms-list/rooms-list';


@NgModule({
  declarations: [
    Summary,
    AddSite,
    AddBuilding,
    AddRoom,
    SitesList,
    BuildingsList,
    RoomsList
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FacilitiesManagementRoutingModule
  ],
  providers: [
    provideHttpClient()
  ]
})
export class FacilitiesManagementModule { }
