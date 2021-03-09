import { Component } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { AlertService } from './services/alert.service';
import { AuthService } from 'src/app/services/auth.service';

import {
  Plugins,
  StatusBarStyle,
} from '@capacitor/core';
const { SplashScreen } = Plugins;
const { StatusBar } = Plugins;
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Today Clinic', url: '/dashboard/today', icon: 'mail' },
    { title: 'Future Clinic', url: '/dashboard/future', icon: 'mail' },
    { title: 'Clinic List', url: '/email', icon: 'paper-plane' },
    // { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    // { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    
  ];
  public labels = ['LogOut'];
  constructor(
    private platform: Platform,
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService
  ) {
    this.initializeApp();
  }
  
  initializeApp() {
    
    this.platform.ready().then(() => {
     
      this.authService.getToken().then(() => {
        if(this.authService.isLoggedIn) {
          this.navCtrl.navigateRoot('/dashboard/today');
        }
      });
    });
  }
  isStatusBarLight = true

  changeStatusBar() {
    // StatusBar.setStyle({
    //   style: this.isStatusBarLight ? StatusBarStyle.Dark : StatusBarStyle.Light
    // });
    // this.isStatusBarLight = !this.isStatusBarLight;

    // // Display content under transparent status bar (Android only)
    // StatusBar.setOverlaysWebView({
    //   overlay: true
    // });
  }

  hideStatusBar() {
    StatusBar.hide();
  }

  showStatusBar() {
    StatusBar.show();
  }
  // When Logout Button is pressed 
  logout() {
    this.authService.logout();
   
  }
}
