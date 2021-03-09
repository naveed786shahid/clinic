import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController, NavController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '../../model/user';
import { ActivatedRoute, Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
import { Clinic } from '../../model/clinic';
import { ClinicDetailRequestDto } from '../../model/clinicDetailRequestDto';
import { ClinicDetailDto } from '../../model/clinicDetailDto';
import { EmailPage } from '../email/email.page';
import { async } from 'q';
import { ClinicDetailPage } from '../clinic-detail/clinic-detail.page';
//import { CallNumber } from '@ionic-native/call-number/ngx';


const { Storage } = Plugins;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  user: User;
  clinics:Clinic[];
  public page: string;
  public pageId: string;
  pageNumber=1;
  open:number;
  isLoad:boolean;
  clinicDetail:ClinicDetailDto;

  constructor(private authService: AuthService,
    private activatedRoute: ActivatedRoute,public modalController: ModalController,
    public loadingController: LoadingController
    //,private callNumber: CallNumber
  ) { 
   
  }
  ngOnInit() {
    this.pageId = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.pageId=="" ||this.pageId==null)
    this.pageId="today";
    this.changePage(this.pageId);
   
  }
 async changePage(pageId ){
  
    const  loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });
    await loading.present();
   
    this.pageId=pageId;
    this.authService.getCurrentUser().then(d=>{
      if(this.authService.user){
        this.user=this.authService.user;
        if(this.pageId=="today"){
         this.page="Today Clinic";
         this.authService.getTodayClinic(this.user.id).subscribe(
           (data:any) => {
            this.clinics=data.clinics;
            loading.dismiss();
           },
           error => {
             console.log(error);
             loading.dismiss();
           },
           () => {
             
           }
          );
       }
       else
       {
         this.page="Future Clinic";
         this.authService.getFutureClinic(this.user.id).subscribe(
          (data:any) => {
            console.log(data.clinics);
            this.clinics=data.clinics.docs;;
            console.log(this.clinics);
            loading.dismiss();
           },
           error => {
             console.log(error);
             loading.dismiss();
           },
           () => {
             
           }
          );
       }
      }
    });
  }
  loadFuture(event:any){
    this.pageNumber=this.pageNumber +1;
    this.authService.getFutureClinic(this.user.id,this.pageNumber,15).subscribe(
      (data:any) => {
        console.log(data.clinics);
        this.clinics=[...this.clinics,...data.clinics.docs];
        console.log(this.clinics);
        event.target.complete();
       },
       error => {
         console.log(error);
         
       },
       () => {
         
       }
      );

  }
  logout() {
    this.authService.logout();
   
  }
  ionViewWillEnter() {
    // this.authService.user().subscribe(
    //   user => {
    //     this.user = user;
    //   }
    // );
  }
  openDialPad(){
    // this.callNumber.callNumber("18001010101", true)
    // .then(res => console.log('Launched dialer!', res))
    //  .catch(err => console.log('Error launching dialer', err));
  }
 async toggleSection(index,venueId,date) {
    //this.isLoad=false;
    const modal = await this.modalController.create({
      component: ClinicDetailPage,
      swipeToClose: true,
      componentProps: {
        'venue': venueId,
        'date':date,
        'id':this.user.id
        }
    });
    return await modal.present();
  //  this.navCtrl.navigate(['/clinic-detail/'+this.user.id+'/'+date+'/'+venueId]);
    // if(this.open==index){
    //  this.open=-1;
    //  this.isLoad=true;
    // }else{
    //   this.open = index;
    //   if(!this.clinicDetail|| !this.clinicDetail.clinic ||
    //     this.clinicDetail.clinic.venueId!=venueId){
    //   var request=new ClinicDetailRequestDto();
    //   request.expertId=this.user.id;
    //   request.venueId=venueId;
    //   request.date=date;
    //   this.authService.clinicDetail(request).subscribe(
    //     (data:any) => {
    //      this.clinicDetail=data;
    //      this.isLoad=true;
    //     },
    //     error => {
    //       console.log(error);
    //       this.isLoad=true;
    //     },
    //     () => {
          
    //     }
    //    );
    //   }else
    //   this.isLoad=true;
    // }
    

  }
 
}