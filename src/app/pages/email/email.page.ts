import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ClinicDetailRequestDto } from 'src/app/model/clinicDetailRequestDto';
import { User } from 'src/app/model/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmailSendDto } from 'src/app/model/emailSendDto';
import { EnvService } from 'src/app/services/env.service';
import { AlertService } from 'src/app/services/alert.service';
import { MenuController, ModalController, LoadingController } from '@ionic/angular';
import { AttachmentDto } from '../../model/attachmentDto';

@Component({
  selector: 'app-email',
  templateUrl: './email.page.html',
  styleUrls: ['./email.page.scss'],
  
})
export class EmailPage implements OnInit {
  user: User;
  @Input() venueId:string;
  @Input() date:string;
  @Input() venueName:string;
  @Input() postCode:string;
  @Input() email:string;

  myForm: FormGroup;
  
  submitted = false;
  constructor(
   
    private env: EnvService,
    private alertService: AlertService,
    private authService: AuthService,
    public modalController: ModalController,
    public loadingController: LoadingController,
    public formBuilder: FormBuilder) { 
      
    }
   
  ngOnInit() {
    this.myForm = this.formBuilder.group({
      to: [this.email, [Validators.required]],
      subject: ['Clinic List ' +this.date+'  '+this.venueName+'('+this.postCode+')'
      , [Validators.required]],
      body: ['Please find the attached Clinic List ' +this.date+'  '+this.venueName+'('+this.postCode+')'
      , [Validators.required]],
      date: [this.date, [Validators.required]]
      });
    this.authService.getCurrentUser().then(d=>{
      if(this.authService.user){
        this.user=this.authService.user;
      }
    });
  }
  DateChange(event){
    var request=new ClinicDetailRequestDto();
      request.expertId=this.user.id.toString();
      request.venueId='136';
      request.date=event.target.value;
    this.authService.getClinicList(request).subscribe(
      (data:any) => {
        debugger;
       
      },
      error => {
        console.log(error);
        
      },
      () => {
        
      }
     );
  }
  get errorCtr() {
    return this.myForm.controls;
  }
 async sendEmail() {
    debugger;
    this.submitted = true;
    if (!this.myForm.valid) {
      this.alertService.presentToast("form is not valid.");
      return false;
    } else {
      const loading = await this.loadingController.create({
        cssClass: 'my-custom-class',
        message: 'Please wait...',
      });
      await loading.present();
      var dto=new EmailSendDto();
      dto.body=this.myForm.value.body;
      dto.to=this.myForm.value.to;
      dto.subject=this.myForm.value.subject;
      //dto.body=this.myForm.value.body;
      var attachments=new AttachmentDto();
      attachments.originalname="cliniclist.pdf";
      attachments.contentType="application/pdf";
      attachments.path=this.env.API_URL + 'appointment/clinic-list?expertId='+this.user.id+'&venueId='+this.venueId+'&date='+this.myForm.value.date;
      dto.attachments= Array<AttachmentDto>();
      dto.attachments.push(attachments);
      this.authService.sendEmail(dto).subscribe(
        (data:any) => {
          loading.dismiss();
          if(data.success)
          this.alertService.presentToast(data.message);
          else this.alertService.presentToast(data.msg);
           this.dismiss();
        },
        error => {
          loading.dismiss();
          this.alertService.presentToast(error.msg);
        }
       );}

  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
