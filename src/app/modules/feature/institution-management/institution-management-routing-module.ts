import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Summary } from './components/summary/summary';

const routes: Routes = [
  {
    path: '',
    component: Summary
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstitutionManagementRoutingModule { }
