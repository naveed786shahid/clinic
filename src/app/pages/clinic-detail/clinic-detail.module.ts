import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClinicDetailPageRoutingModule } from './clinic-detail-routing.module';

import { ClinicDetailPage } from './clinic-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClinicDetailPageRoutingModule
  ],
  declarations: [ClinicDetailPage]
})
export class ClinicDetailPageModule {}
