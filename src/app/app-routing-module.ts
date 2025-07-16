import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(module => module.AuthModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./users/admin/admin-module').then(module => module.AdminModule)
  },
  {
    path: 'staff',
    loadChildren: () => import('./users/staff/staff-module').then(module => module.StaffModule)
  },
  {
    path: 'guardian',
    loadChildren: () => import('./users/guardian/guardian-module').then(module => module.GuardianModule)
  },
  {
    path: 'student',
    loadChildren: () => import('./users/student/student-module').then(module => module.StudentModule)
  },
  {
    path: '**',
    redirectTo: 'auth',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
