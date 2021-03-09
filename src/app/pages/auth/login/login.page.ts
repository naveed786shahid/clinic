import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, MenuController, LoadingController } from '@ionic/angular';
import { RegisterPage } from '../register/register.page';
import { NgForm,FormBuilder, Validators  ,FormGroup, FormControl } from '@angular/forms';

import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  myForm: FormGroup;
  submitted = false;
  username ="";
  password="";

  constructor(
    private alertService: AlertService,
    private authService: AuthService,
    private router: NavController,
    public formBuilder: FormBuilder,
    public loadingController: LoadingController
  ) { 
  
    
  }
  
 
  ngOnInit() {
     
    this.myForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
      });
  }
  ionViewWillEnter() {
    this.authService.getToken().then(() => {
      if(this.authService.isLoggedIn) {
        this.router.navigateRoot('/dashboard');
      }
    });
  }
  async registerModal() {
    
  }
  get errorCtr() {
    return this.myForm.controls;
  }
  async login() {
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
      this.authService.login(this.myForm.value.username, this.myForm.value.password).subscribe(
        data => {
          loading.dismiss();
         // this.navCtrl.navigateRoot(['/dashboard']);
          this.router.navigateRoot('/dashboard');
          this.alertService.presentToast("Logged In");
        },
        error => {
          console.log(error);
          loading.dismiss();
        }
       );}
  }
}
