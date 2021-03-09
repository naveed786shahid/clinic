import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClinicDetailPage } from './clinic-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ClinicDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClinicDetailPageRoutingModule {}
