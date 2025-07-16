import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout } from './components/layout/layout';
import { Dashboard } from './components/dashboard/dashboard';

const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: Dashboard
      },
      {
        path: 'institution',
        loadChildren: () => import('../../modules/feature/institution-management/institution-management-module').then(module => module.InstitutionManagementModule)
      },
      {
        path: 'users',
        loadChildren: () => import('../../modules/feature/users-management/users-management-module').then(module => module.UsersManagementModule)
      },
      {
        path: 'calendar',
        loadChildren: () => import('../../modules/feature/calendar-management/calendar-management-module').then(module => module.CalendarManagementModule)
      },
      {
        path: 'fees',
        loadChildren: () => import('../../modules/feature/fees-management/fees-management-module').then(module => module.FeesManagementModule)
      },
      {
        path: 'announcements',
        loadChildren: () => import('../../modules/feature/announcements-management/announcements-management-module').then(module => module.AnnouncementsManagementModule)
      },
      {
        path: 'tickets',
        loadChildren: () => import('../../modules/feature/tickets-management/tickets-management-module').then(module => module.TicketsManagementModule)
      },
      {
        path: '**',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'layout',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
