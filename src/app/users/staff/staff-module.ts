import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { BaseChartDirective } from 'ng2-charts';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';


import { StaffRoutingModule } from './staff-routing-module';
import { Layout } from './components/layout/layout';
import { Dashboard } from './components/dashboard/dashboard';


@NgModule({
  declarations: [
    Layout,
    Dashboard
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    BaseChartDirective,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    StaffRoutingModule
  ]
})
export class StaffModule { }
