import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;
import { EnvService } from './env.service';
import { User } from '../model/user';
import { ClinicDetailRequestDto } from 'src/app/model/clinicDetailRequestDto';
import { Clinic } from '../model/clinic';
import { NavController } from '@ionic/angular';
import { EmailSendDto } from '../model/emailSendDto';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  token:any;
  user:User;
  constructor(
    private http: HttpClient,
    private navCtrl: NavController,
    private env: EnvService,
  ) { }
  login(username: String, password: String) {
    return this.http.post(this.env.API_URL + 'login',
      {username: username, password: password}
    ).pipe(
      tap((data:any) => {
      if(data.token)
        Storage.set({
          key: 'token',
          value: data.token
        })
        .then(
          () => {
            console.log('Token Stored');
            Storage.set({
              key: 'curUser',
              value: JSON.stringify(data.user)
            });
            this.token = data.token;
            this.user=data.user;
            this.isLoggedIn = true;
            return data;
          },
          error => console.error('Error storing item', error)
        );
        
      }),
    );
  }
  clinicDetail(requestDto:ClinicDetailRequestDto){
    return this.http.get(this.env.API_URL + 
      'appointment/clinic-detail?expertId='+requestDto.expertId+'&venueId='+requestDto.venueId+'&date='+requestDto.date
  ).pipe(
    tap((data:any) => {
      return data;
    }),
  );
  }
  getTodayClinic(expertId){
    return this.http.get(this.env.API_URL + 'appointment/today-clinic?expertId='+expertId
  ).pipe(
    tap((data:Clinic) => {
      return data;
    }),
  );
  }
  getFutureClinic(expertId,page=1,size=15){
    return this.http.get(this.env.API_URL + 'appointment/future-clinic?expertId='+expertId+'&page='+page+'&paginate='+size
  ).pipe(
    tap((data:Clinic[]) => {
     return data;
    }),
  );
  }
  getClinicList(requestDto:ClinicDetailRequestDto){
    return this.http.get(this.env.API_URL + 
      'appointment/clinic-list?expertId='+requestDto.expertId+'&venueId='+requestDto.venueId+'&date='+requestDto.date
  ).pipe(
    tap((data:Clinic[]) => {
     return data;
    }),
  );
  }
  sendEmail(dto:EmailSendDto){
    const headers = new HttpHeaders({
         'Authorization': "barear "+this.token
       });
    return this.http.post(this.env.BASE_URL + 'send-cliniclist-mail',dto,{headers:headers}
  ).pipe(
    tap((data) => {
     return data;
    }),
  );
  }

 
  register(fName: String, lName: String, email: String, password: String) {
    return this.http.post(this.env.API_URL + 'auth/register',
      {fName: fName, lName: lName, email: email, password: password}
    )
  }
  logout() {
    // const headers = new HttpHeaders({
    //   'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    // });
    // return this.http.get(this.env.API_URL + 'auth/logout', { headers: headers })
    // .pipe(
    //   tap(data => {
        Storage.clear();
        this.isLoggedIn = false;
        delete this.token;
        delete this.user;
        delete this.isLoggedIn;
        this.navCtrl.navigateRoot('/login');
        //return data;
    //   })
    // )
  }
 
  getToken() {
    return Storage.get({ key: 'token' }).then(
      data => {
        this.token = data.value;
        if(this.token != null) {
          this.isLoggedIn=true;
        } else {
          this.isLoggedIn=false;
        }
      },
      error => {
        this.token = null;
        this.isLoggedIn=false;
      }
    );
  }
  getCurrentUser() {
    return Storage.get({ key: 'curUser' }).then(
      (data:any) => {
        console.log(data.value);
        this.user=JSON.parse(data.value);
      },
      error => {
       
      }
    );
  }
}