import { Component, OnInit, Input } from '@angular/core';
import {ModalController, LoadingController, AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

import { ClinicDetailRequestDto } from '../../model/clinicDetailRequestDto';
import { ClinicDetailDto } from '../../model/clinicDetailDto';
import { EmailPage } from '../email/email.page';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-clinic-detail',
  templateUrl: './clinic-detail.page.html',
  styleUrls: ['./clinic-detail.page.scss'],
  providers: [DatePipe]
})
export class ClinicDetailPage implements OnInit {
  @Input() id:string;
  @Input() venue:string;
  @Input() date:string;
  isLoad:boolean;
  clinicDetail:ClinicDetailDto;

  constructor(private authService: AuthService,
    public modalController: ModalController,
    public loadingController: LoadingController,
    public alertCtrl:AlertController,
    public datepipe: DatePipe
    
  ) { 
  
  }
  async ngOnInit() {
     var request=new ClinicDetailRequestDto();
    request.expertId=this.id;//this.activatedRoute.snapshot.paramMap.get('id');
    request.venueId=this.venue;//this.activatedRoute.snapshot.paramMap.get('venue');
    request.date=this.date;//this.activatedRoute.snapshot.paramMap.get('date');
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });
    await loading.present();

    this.authService.clinicDetail(request).subscribe(
      (data:any) => {
       this.clinicDetail=data;
       loading.dismiss();
      },
      error => {
        console.log(error);
        loading.dismiss();
      });
   
  }
 
  async presentLoading() {
    
   }
  logout() {
    this.authService.logout();
    this.modalController.dismiss();
  }
 
 async openDialPad(m,h,w){
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Call',
      message: `<a href="tel:`+m+`">Mobile: `+m+`</a><br /><br />
      <a href="tel:`+h+`">Home: `+h+`</a><br /><br />
      <a href="tel:`+w+`">Work: `+w+`</a><br />
      `,
      buttons: ['Cancle']
    });

    await alert.present();
  }
  back(){
    this.modalController.dismiss();
  }
  async openEmail(event:Event){

    const modal = await this.modalController.create({
      component: EmailPage,
      swipeToClose: true,
      componentProps: {
        'venueId':this.venue,
        'date':this.datepipe.transform(this.date,"dd/MM/y"),
        'venueName':this.clinicDetail.clinic.venue.name,
        'postCode':this.clinicDetail.clinic.venue.postCode,
        'email':this.clinicDetail.expert.email,
        }
    });
    return await modal.present();
  
  }

}
