import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule }    from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginPage } from './pages/auth/login/login.page';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { EmailPage } from './pages/email/email.page';
import { ClinicDetailPage } from './pages/clinic-detail/clinic-detail.page';
//import { CallNumber } from '@ionic-native/call-number/ngx';
//import { EmailComposer } from '@ionic-native/email-composer/ngx';

@NgModule({
  declarations: [AppComponent,LoginPage,DashboardPage,EmailPage,ClinicDetailPage],
  entryComponents: [],
  imports: [
      BrowserModule, IonicModule.forRoot(), AppRoutingModule,
      FormsModule,CommonModule,
      HttpClientModule,
      ReactiveFormsModule
     
    ],
  exports: [RouterModule],  
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
