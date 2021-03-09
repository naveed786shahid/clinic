(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\waqar work\clinic\src\main.ts */"zUnb");


/***/ }),

/***/ "3LUQ":
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");



let AlertService = class AlertService {
    constructor(toastController) {
        this.toastController = toastController;
    }
    presentToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 2000,
                position: 'top',
                color: 'dark'
            });
            toast.present();
        });
    }
};
AlertService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
AlertService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AlertService);



/***/ }),

/***/ "40d1":
/*!********************************************************!*\
  !*** ./src/app/pages/auth/register/register.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "5zL6":
/*!*****************************************!*\
  !*** ./src/app/services/env.service.ts ***!
  \*****************************************/
/*! exports provided: EnvService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvService", function() { return EnvService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let EnvService = class EnvService {
    constructor() {
        this.API_URL = 'https://chamakcraft.com/v1/';
        this.BASE_URL = 'https://chamakcraft.com/';
    }
};
EnvService.ctorParameters = () => [];
EnvService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EnvService);



/***/ }),

/***/ "6ckw":
/*!***************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.ts ***!
  \***************************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dashboard.page.html */ "spzo");
/* harmony import */ var _dashboard_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.page.scss */ "ws6Y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _clinic_detail_clinic_detail_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../clinic-detail/clinic-detail.page */ "sP0v");









//import { CallNumber } from '@ionic-native/call-number/ngx';
const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Plugins"];
let DashboardPage = class DashboardPage {
    constructor(authService, activatedRoute, modalController, loadingController
    //,private callNumber: CallNumber
    ) {
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.pageNumber = 1;
    }
    ngOnInit() {
        this.pageId = this.activatedRoute.snapshot.paramMap.get('id');
        if (this.pageId == "" || this.pageId == null)
            this.pageId = "today";
        this.changePage(this.pageId);
    }
    changePage(pageId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
            });
            yield loading.present();
            this.pageId = pageId;
            this.authService.getCurrentUser().then(d => {
                if (this.authService.user) {
                    this.user = this.authService.user;
                    if (this.pageId == "today") {
                        this.page = "Today Clinic";
                        this.authService.getTodayClinic(this.user.id).subscribe((data) => {
                            this.clinics = data.clinics;
                            loading.dismiss();
                        }, error => {
                            console.log(error);
                            loading.dismiss();
                        }, () => {
                        });
                    }
                    else {
                        this.page = "Future Clinic";
                        this.authService.getFutureClinic(this.user.id).subscribe((data) => {
                            console.log(data.clinics);
                            this.clinics = data.clinics.docs;
                            ;
                            console.log(this.clinics);
                            loading.dismiss();
                        }, error => {
                            console.log(error);
                            loading.dismiss();
                        }, () => {
                        });
                    }
                }
            });
        });
    }
    loadFuture(event) {
        this.pageNumber = this.pageNumber + 1;
        this.authService.getFutureClinic(this.user.id, this.pageNumber, 15).subscribe((data) => {
            console.log(data.clinics);
            this.clinics = [...this.clinics, ...data.clinics.docs];
            console.log(this.clinics);
            event.target.complete();
        }, error => {
            console.log(error);
        }, () => {
        });
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
    openDialPad() {
        // this.callNumber.callNumber("18001010101", true)
        // .then(res => console.log('Launched dialer!', res))
        //  .catch(err => console.log('Error launching dialer', err));
    }
    toggleSection(index, venueId, date) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //this.isLoad=false;
            const modal = yield this.modalController.create({
                component: _clinic_detail_clinic_detail_page__WEBPACK_IMPORTED_MODULE_8__["ClinicDetailPage"],
                swipeToClose: true,
                componentProps: {
                    'venue': venueId,
                    'date': date,
                    'id': this.user.id
                }
            });
            return yield modal.present();
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
        });
    }
};
DashboardPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
DashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DashboardPage);



/***/ }),

/***/ "7aGv":
/*!*************************************************!*\
  !*** ./src/app/model/clinicDetailRequestDto.ts ***!
  \*************************************************/
/*! exports provided: ClinicDetailRequestDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicDetailRequestDto", function() { return ClinicDetailRequestDto; });
class ClinicDetailRequestDto {
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Gthm":
/*!***************************************!*\
  !*** ./src/app/model/emailSendDto.ts ***!
  \***************************************/
/*! exports provided: EmailSendDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailSendDto", function() { return EmailSendDto; });
class EmailSendDto {
}


/***/ }),

/***/ "NKrf":
/*!************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.ts ***!
  \************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "tvH6");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "faZD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/alert.service */ "3LUQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");









let LoginPage = class LoginPage {
    constructor(alertService, authService, router, formBuilder, loadingController) {
        this.alertService = alertService;
        this.authService = authService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.loadingController = loadingController;
        this.submitted = false;
        this.username = "";
        this.password = "";
    }
    ngOnInit() {
        this.myForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
        });
    }
    ionViewWillEnter() {
        this.authService.getToken().then(() => {
            if (this.authService.isLoggedIn) {
                this.router.navigateByUrl('/dashboard');
            }
        });
    }
    registerModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        });
    }
    get errorCtr() {
        return this.myForm.controls;
    }
    login() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            debugger;
            this.submitted = true;
            if (!this.myForm.valid) {
                this.alertService.presentToast("form is not valid.");
                return false;
            }
            else {
                const loading = yield this.loadingController.create({
                    cssClass: 'my-custom-class',
                    message: 'Please wait...',
                });
                yield loading.present();
                this.authService.login(this.myForm.value.username, this.myForm.value.password).subscribe(data => {
                    loading.dismiss();
                    // this.navCtrl.navigateRoot(['/dashboard']);
                    this.router.navigateByUrl('/dashboard');
                    this.alertService.presentToast("Logged In");
                }, error => {
                    console.log(error);
                    loading.dismiss();
                });
            }
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginPage);



/***/ }),

/***/ "OBoW":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/email/email.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title slot=\"start\">Clinic List</ion-title>\n    <ion-title slot=\"end\" (click)=\"dismiss()\">Close</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <form [formGroup]=\"myForm\" >\n        <ion-item lines=\"full\">\n            <ion-label>Select  Date</ion-label>\n            <ion-datetime formControlName=\"date\" displayFormat=\"DD-MM-YYYY\" placeholder=\"Select Date\" ></ion-datetime>\n            <ion-text color=\"danger\">\n                <span *ngIf=\"submitted && errorCtr.date.errors?.required\">\n                  Date is required.\n                </span>\n                </ion-text>\n          </ion-item>\n        <ion-item lines=\"full\">\n          <ion-label position=\"floating\">To</ion-label>\n          <ion-input formControlName=\"to\" type=\"text\"></ion-input>\n          <ion-text color=\"danger\">\n              <span *ngIf=\"submitted && errorCtr.to.errors?.required\">\n                To is required.\n              </span>\n              </ion-text>\n        </ion-item>\n         <ion-item >\n          <ion-label position=\"floating\">Subject</ion-label>\n          <ion-input formControlName=\"subject\" type=\"text\"></ion-input>\n          <ion-text color=\"danger\">\n              <span  *ngIf=\"submitted && errorCtr.subject.errors?.required\">\n                Subject is required.\n              </span>\n            </ion-text>\n        </ion-item>\n        <ion-item lines=\"full\">\n            <ion-label position=\"floating\">Body</ion-label>\n            <ion-textarea formControlName=\"body\" type=\"text\"></ion-textarea>\n            <ion-text color=\"danger\">\n                <span  *ngIf=\"submitted && errorCtr.body.errors?.required\">\n                  Body is required.\n                </span>\n              </ion-text>\n          </ion-item>\n        \n        \n    \n        <ion-row>\n          <ion-col>\n            <ion-button  color=\"dark\" expand=\"block\" (click)=\"sendEmail()\">Send</ion-button>\n          </ion-col>\n        </ion-row>\n      </form>\n  \n</ion-content>\n");

/***/ }),

/***/ "PyPS":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/clinic-detail/clinic-detail.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar style=\" color: white\">\n      \n      <ion-buttons slot=\"end\" (click)=\"logout()\">\n          <ion-icon slot=\"end\" name=\"log-out\"></ion-icon>\n      </ion-buttons>\n      <ion-title>Clinic Detail</ion-title>\n      <ion-buttons slot=\"start\" (click)=\"back()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content padding>\n      <ion-row>\n          <ion-col>\n    \n          </ion-col>\n          <ion-col >\n              <ion-button   color=\"dark\"  (click)=\"openEmail($event)\">\n                  <ion-icon name=\"mail\"></ion-icon> Email list\n              </ion-button>\n           \n          </ion-col>\n           \n        </ion-row>\n         \n   <ion-item>\n    <ion-label>\n      <h2 style=\"color:#4a4646\"> {{clinicDetail?.clinic?.venue.name}}</h2>\n      <h3>  {{clinicDetail?.clinic?.venue.address[0]}},\n          {{clinicDetail?.clinic?.venue.address[1]}},\n          {{clinicDetail?.clinic?.venue.address[2]}}</h3>\n      <h3> {{clinicDetail?.clinic?.venue?.postCode}}</h3>\n      <h3>{{date | date :  \"dd/MM/y\" }}</h3>\n      </ion-label>\n   </ion-item>\n    <span> \n    <ion-card  *ngFor=\"let clinic of clinicDetail.slots;let i=index\">\n      <ion-card-header>\n        <ion-card-title>{{clinic.case?.title}} {{clinic.case?.firstName}} {{clinic.case?.lastName}}</ion-card-title>\n      </ion-card-header>\n      \n      <ion-card-content>\n            <ion-label>\n                 <div>Time : {{clinic.time}}</div>\n                  <div>Accident Date : {{clinic.case?.claimantInfo?.accidentDate | date :  \"dd/MM/y\"}} </div>\n                  <div>DOB : {{clinic.case?.claimantInfo?.dateOfBirth | date :  \"dd/MM/y\"}} </div>\n              </ion-label>\n          \n              <ion-label>\n                  <div>Instruction :</div>\n                  <p ion-text>{{clinic.case?.claimantInfo?.clinicListInstructions}} </p>\n              </ion-label>\n          \n      <!-- case->  claimantInfo\n          accidentDate: string;\n          clinicListInstructions: string;\n          homePhone:string;\n          workPhone:string; -->\n      </ion-card-content>\n    \n      <ion-footer>\n        <ion-row>\n          <ion-col center text-center>\n              <!-- <ion-fab color=\"success\"  vertical=\"center\" horizontal=\"center\" >\n                  <ion-fab-button >\n                      <ion-icon name=\"call-outline\" ></ion-icon>\n                  </ion-fab-button>\n                  <ion-fab-list  side=\"end\" *ngIf=\"clinic.case?.claimantInfo?.workPhone!=''\">\n                      <ion-fab-button><a  href=\"'tel:'{clinic.case?.claimantInfo?.workPhone}\">Work Phone</a></ion-fab-button>\n                    </ion-fab-list>\n                    <ion-fab-list side=\"start\" *ngIf=\"clinic.case?.claimantInfo?.homePhone!=''\">\n                        <ion-fab-button><a [href]=\"'tel:'+clinic.case?.claimantInfo?.homePhone\">Home Phone</a></ion-fab-button>\n                      </ion-fab-list>\n                      <ion-fab-list side=\"top\" *ngIf=\"clinic.case?.mobile!=''\">\n                          <ion-fab-button><a [href]=\"'tel:'+clinic.case?.mobile\">Mobile Phone</a></ion-fab-button>\n                        </ion-fab-list>\n                </ion-fab> -->\n            <ion-button  color=\"dark\"  expand=\"block\" (click)=\"openDialPad(clinic.case?.mobile,clinic.case?.claimantInfo?.homePhone,clinic.case?.claimantInfo?.workPhone)\">\n                <ion-icon name=\"call-outline\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        \n          \n        </ion-row>\n      </ion-footer>\n   \n    </ion-card>\n    </span>\n  </ion-content>\n  <!-- <ion-footer>\n    <ion-row style=\"background: #27292d;text-align: center\">\n      <ion-col center text-center style=\"color:beige\">\n          \n        <span (click)=\"changePage('today')\">\n        <ion-icon name=\"calendar\" >\n         \n        </ion-icon>\n         <div style=\"font-size: x-small\">Today Clinic</div>\n        </span>\n       \n      </ion-col>\n      <ion-col center text-center style=\"color:beige\">\n         \n        <span (click)=\"changePage('future')\">\n          <ion-icon name=\"home\" ></ion-icon>\n           <div  style=\"font-size: x-small\">Future Clinic</div>\n          </span>\n             \n        \n  \n        \n        </ion-col>\n      \n    </ion-row>\n  </ion-footer> -->");

/***/ }),

/***/ "SixS":
/*!******************************************************!*\
  !*** ./src/app/pages/auth/register/register.page.ts ***!
  \******************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.page.html */ "ak2j");
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.page.scss */ "40d1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _login_login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login/login.page */ "NKrf");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/alert.service */ "3LUQ");








let RegisterPage = class RegisterPage {
    constructor(modalController, authService, navCtrl, alertService) {
        this.modalController = modalController;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.alertService = alertService;
    }
    ngOnInit() {
    }
    // Dismiss Register Modal
    dismissRegister() {
        this.modalController.dismiss();
    }
    // On Login button tap, dismiss Register modal and open login Modal
    loginModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dismissRegister();
            const loginModal = yield this.modalController.create({
                component: _login_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"],
            });
            return yield loginModal.present();
        });
    }
    register(form) {
        this.authService.register(form.value.fName, form.value.lName, form.value.email, form.value.password).subscribe(data => {
            this.authService.login(form.value.email, form.value.password).subscribe(data => {
            }, error => {
                console.log(error);
            }, () => {
                this.dismissRegister();
                this.navCtrl.navigateRoot('/dashboard');
            });
            this.alertService.presentToast(data['message']);
        }, error => {
            console.log(error);
        }, () => {
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] }
];
RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegisterPage);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/alert.service */ "3LUQ");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/core */ "gcOT");








const { SplashScreen } = _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Plugins"];
const { StatusBar } = _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Plugins"];
let AppComponent = class AppComponent {
    constructor(platform, authService, navCtrl, alertService) {
        this.platform = platform;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.alertService = alertService;
        this.appPages = [
            { title: 'Today Clinic', url: '/dashboard/today', icon: 'mail' },
            { title: 'Future Clinic', url: '/dashboard/future', icon: 'mail' },
            { title: 'Clinic List', url: '/email', icon: 'paper-plane' },
        ];
        this.labels = ['LogOut'];
        this.isStatusBarLight = true;
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.authService.getToken().then(() => {
                if (this.authService.isLoggedIn) {
                    this.navCtrl.navigateRoot('/dashboard/today');
                }
            });
        });
    }
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
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-split-pane contentId=\"main\">\n    <!-- <ion-menu contentId=\"main\">\n      <ion-header>\n        <ion-toolbar>\n          <ion-title>Menu</ion-title>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content>\n        <ion-list>\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages\">\n            <ion-item [routerDirection]=\"'root'\" [routerLink]=\"[p.url]\">\n              <ion-icon slot=\"start\" [name]=\"p.icon\"></ion-icon>\n              <ion-label>\n                {{p.title}}\n              </ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n          <ion-item (click)=\"logout()\">\n            <ion-icon slot=\"start\" name=\"log-out\"></ion-icon>\n            <ion-label>\n              Logout\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-content>\n    </ion-menu> -->\n    <ion-router-outlet id=\"main\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pages_auth_login_login_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/auth/login/login.page */ "NKrf");
/* harmony import */ var _pages_dashboard_dashboard_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/dashboard/dashboard.page */ "6ckw");
/* harmony import */ var _pages_email_email_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/email/email.page */ "yVUI");
/* harmony import */ var _pages_clinic_detail_clinic_detail_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/clinic-detail/clinic-detail.page */ "sP0v");














//import { CallNumber } from '@ionic-native/call-number/ngx';
//import { EmailComposer } from '@ionic-native/email-composer/ngx';
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _pages_auth_login_login_page__WEBPACK_IMPORTED_MODULE_10__["LoginPage"], _pages_dashboard_dashboard_page__WEBPACK_IMPORTED_MODULE_11__["DashboardPage"], _pages_email_email_page__WEBPACK_IMPORTED_MODULE_12__["EmailPage"], _pages_clinic_detail_clinic_detail_page__WEBPACK_IMPORTED_MODULE_13__["ClinicDetailPage"]],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "ak2j":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/register/register.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-button color=\"light\" (click)=\"dismissRegister()\">Close</ion-button>\n    <ion-title>Register</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <form #form=\"ngForm\" (ngSubmit)=\"register(form)\" method=\"post\">\n    <ion-item>\n        <ion-label position=\"floating\">First Name</ion-label>\n        <ion-input ngModel name=\"fName\"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label position=\"floating\">Last Name</ion-label>\n      <ion-input ngModel name=\"lName\"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input type=\"email\" ngModel name=\"email\"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label position=\"floating\">Password</ion-label>\n      <ion-input type=\"password\" ngModel name=\"password\"></ion-input>\n    </ion-item>\n  \n    <ion-button type=\"submit\" expand=\"full\" color=\"danger\">Register</ion-button>\n  </form>\n  <p text-center>Already have a account?</p>\n  <ion-button expand=\"full\" color=\"primary\" (click)=\"loginModal()\">Login</ion-button>\n</ion-content>  \n");

/***/ }),

/***/ "cT6d":
/*!*************************************!*\
  !*** ./src/app/guard/auth.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");




let AuthGuard = class AuthGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate(next, state) {
        var result = false;
        if (this.authService.isLoggedIn) {
            result = true;
        }
        else {
            this.router.navigate(['/login']);
            result = false;
        }
        return result;
        // not logged in so redirect to login page with the return url
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "faZD":
/*!**************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background-color:#27292d;\n  --background:#27292d;\n  color: beige;\n  --ion-background-color: var( --ion-color-fth);\n}\n\nion-icon {\n  font-size: 25px;\n}\n\nion-button {\n  color: beige;\n  background: #27292d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSw2Q0FBQTtBQUNKOztBQUNFO0VBQ0UsZUFBQTtBQUVKOztBQUFBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FBR0oiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiMyNzI5MmQ7XHJcbiAgICAtLWJhY2tncm91bmQ6IzI3MjkyZDtcclxuICAgIGNvbG9yOmJlaWdlO1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdmFyKCAtLWlvbi1jb2xvci1mdGgpO1xyXG4gIH1cclxuICBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7IC8vUHJlZmVycmVkIHNpemUgaGVyZVxyXG59XHJcbmlvbi1idXR0b257XHJcbiAgICBjb2xvcjpiZWlnZTtcclxuICAgIGJhY2tncm91bmQ6IzI3MjkyZDsgIFxyXG59Il19 */");

/***/ }),

/***/ "fte0":
/*!*********************************************!*\
  !*** ./src/app/pages/email/email.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background-color:#27292d;\n  --background:#27292d;\n  color: beige;\n  --ion-background-color: var( --ion-color-fth);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxlbWFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLDZDQUFBO0FBQ0oiLCJmaWxlIjoiZW1haWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiMyNzI5MmQ7XHJcbiAgICAtLWJhY2tncm91bmQ6IzI3MjkyZDtcclxuICAgIGNvbG9yOmJlaWdlO1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdmFyKCAtLWlvbi1jb2xvci1mdGgpO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "fvsK":
/*!*************************************************************!*\
  !*** ./src/app/pages/clinic-detail/clinic-detail.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".custom-skeleton ion-skeleton-text {\n  line-height: 13px;\n}\n\n.custom-skeleton ion-skeleton-text:last-child {\n  margin-bottom: 5px;\n}\n\nion-toolbar {\n  --background-color:#27292d;\n  --background:#27292d;\n  color: beige;\n  --ion-background-color: var( --ion-color-fth);\n}\n\nion-icon {\n  font-size: 25px;\n}\n\nion-card {\n  background: #dccdea;\n}\n\napp-clinic-detail {\n  width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjbGluaWMtZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQkFBQTtBQUNKOztBQUNFO0VBQ0UsMEJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSw2Q0FBQTtBQUVKOztBQUFFO0VBQ0UsZUFBQTtBQUdKOztBQURBO0VBQ0UsbUJBQUE7QUFJRjs7QUFGQTtFQUNJLHNCQUFBO0FBS0oiLCJmaWxlIjoiY2xpbmljLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLXNrZWxldG9uIGlvbi1za2VsZXRvbi10ZXh0IHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xyXG4gIH1cclxuICBcclxuICAuY3VzdG9tLXNrZWxldG9uIGlvbi1za2VsZXRvbi10ZXh0Omxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuICBpb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQtY29sb3I6IzI3MjkyZDtcclxuICAgIC0tYmFja2dyb3VuZDojMjcyOTJkO1xyXG4gICAgY29sb3I6YmVpZ2U7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoIC0taW9uLWNvbG9yLWZ0aCk7XHJcbiAgfVxyXG4gIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDsgLy9QcmVmZXJyZWQgc2l6ZSBoZXJlXHJcbn1cclxuaW9uLWNhcmR7XHJcbiAgYmFja2dyb3VuZDojZGNjZGVhO1xyXG59XHJcbmFwcC1jbGluaWMtZGV0YWlse1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./env.service */ "5zL6");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"];


let AuthService = class AuthService {
    constructor(http, navCtrl, env) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.env = env;
        this.isLoggedIn = false;
    }
    login(username, password) {
        return this.http.post(this.env.API_URL + 'login', { username: username, password: password }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((data) => {
            if (data.token)
                Storage.set({
                    key: 'token',
                    value: data.token
                })
                    .then(() => {
                    console.log('Token Stored');
                    Storage.set({
                        key: 'curUser',
                        value: JSON.stringify(data.user)
                    });
                    this.token = data.token;
                    this.user = data.user;
                    this.isLoggedIn = true;
                    return data;
                }, error => console.error('Error storing item', error));
        }));
    }
    clinicDetail(requestDto) {
        return this.http.get(this.env.API_URL +
            'appointment/clinic-detail?expertId=' + requestDto.expertId + '&venueId=' + requestDto.venueId + '&date=' + requestDto.date).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((data) => {
            return data;
        }));
    }
    getTodayClinic(expertId) {
        return this.http.get(this.env.API_URL + 'appointment/today-clinic?expertId=' + expertId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((data) => {
            return data;
        }));
    }
    getFutureClinic(expertId, page = 1, size = 15) {
        return this.http.get(this.env.API_URL + 'appointment/future-clinic?expertId=' + expertId + '&page=' + page + '&paginate=' + size).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((data) => {
            return data;
        }));
    }
    getClinicList(requestDto) {
        return this.http.get(this.env.API_URL +
            'appointment/clinic-list?expertId=' + requestDto.expertId + '&venueId=' + requestDto.venueId + '&date=' + requestDto.date).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((data) => {
            return data;
        }));
    }
    sendEmail(dto) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Authorization': "barear " + this.token
        });
        return this.http.post(this.env.BASE_URL + 'send-cliniclist-mail', dto, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((data) => {
            return data;
        }));
    }
    register(fName, lName, email, password) {
        return this.http.post(this.env.API_URL + 'auth/register', { fName: fName, lName: lName, email: email, password: password });
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
        return Storage.get({ key: 'token' }).then(data => {
            this.token = data.value;
            if (this.token != null) {
                this.isLoggedIn = true;
            }
            else {
                this.isLoggedIn = false;
            }
        }, error => {
            this.token = null;
            this.isLoggedIn = false;
        });
    }
    getCurrentUser() {
        return Storage.get({ key: 'curUser' }).then((data) => {
            console.log(data.value);
            this.user = JSON.parse(data.value);
        }, error => {
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _env_service__WEBPACK_IMPORTED_MODULE_5__["EnvService"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "sP0v":
/*!***********************************************************!*\
  !*** ./src/app/pages/clinic-detail/clinic-detail.page.ts ***!
  \***********************************************************/
/*! exports provided: ClinicDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicDetailPage", function() { return ClinicDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_clinic_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./clinic-detail.page.html */ "PyPS");
/* harmony import */ var _clinic_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clinic-detail.page.scss */ "fvsK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _model_clinicDetailRequestDto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../model/clinicDetailRequestDto */ "7aGv");
/* harmony import */ var _email_email_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../email/email.page */ "yVUI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");









let ClinicDetailPage = class ClinicDetailPage {
    constructor(authService, modalController, loadingController, alertCtrl, datepipe) {
        this.authService = authService;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.datepipe = datepipe;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var request = new _model_clinicDetailRequestDto__WEBPACK_IMPORTED_MODULE_6__["ClinicDetailRequestDto"]();
            request.expertId = this.id; //this.activatedRoute.snapshot.paramMap.get('id');
            request.venueId = this.venue; //this.activatedRoute.snapshot.paramMap.get('venue');
            request.date = this.date; //this.activatedRoute.snapshot.paramMap.get('date');
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
            });
            yield loading.present();
            this.authService.clinicDetail(request).subscribe((data) => {
                this.clinicDetail = data;
                loading.dismiss();
            }, error => {
                console.log(error);
                loading.dismiss();
            });
        });
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        });
    }
    logout() {
        this.authService.logout();
        this.modalController.dismiss();
    }
    openDialPad(m, h, w) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                cssClass: 'my-custom-class',
                header: 'Call',
                message: `<a href="tel:` + m + `">Mobile: ` + m + `</a><br /><br />
      <a href="tel:` + h + `">Home: ` + h + `</a><br /><br />
      <a href="tel:` + w + `">Work: ` + w + `</a><br />
      `,
                buttons: ['Cancle']
            });
            yield alert.present();
        });
    }
    back() {
        this.modalController.dismiss();
    }
    openEmail(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _email_email_page__WEBPACK_IMPORTED_MODULE_7__["EmailPage"],
                swipeToClose: true,
                componentProps: {
                    'venueId': this.venue,
                    'date': this.datepipe.transform(this.date, "dd/MM/y"),
                    'venueName': this.clinicDetail.clinic.venue.name,
                    'postCode': this.clinicDetail.clinic.venue.postCode,
                    'email': '',
                }
            });
            return yield modal.present();
        });
    }
};
ClinicDetailPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"] }
];
ClinicDetailPage.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    venue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    date: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ClinicDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-clinic-detail',
        template: _raw_loader_clinic_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]],
        styles: [_clinic_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ClinicDetailPage);



/***/ }),

/***/ "spzo":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar style=\" color: white\">\n      <!-- <img src=\"/assets/logo.jpg\" alt=\"image\" style=\"text-align: center\"> -->\n    <ion-buttons slot=\"end\" (click)=\"logout()\">\n        <ion-icon slot=\"start\" name=\"log-out\"></ion-icon>\n    </ion-buttons>\n    <ion-title>{{page}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n <ion-item>\n  <ion-label>\n    <h3 style=\"color:#4a4646\">Welcome </h3>\n    \n    <h3>Dr. {{user?.firstName+' '+user?.lastName}}</h3>\n    </ion-label>\n </ion-item>\n    \n  \n  \n  <ion-card *ngFor=\"let clinic of clinics;let i=index\">\n   <span tappable (click)=\"toggleSection(i,clinic?.clinic?.venueId,clinic?.date)\" [ngClass]=\"{'section-active': open==i, 'section': open!=i}\">\n   <ion-card-header>\n      <ion-card-title>{{clinic?.clinic?.venue.venue}}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n        <ion-label>\n            <h3>\n              {{clinic?.clinic?.venue.address[0]}},\n              {{clinic?.clinic?.venue.address[1]}},\n              {{clinic?.clinic?.venue.address[2]}}</h3>\n         </ion-label>\n         <ion-label>\n               <h3>\n                 {{clinic?.clinic?.venue?.postCode}}</h3>\n            </ion-label>\n          <ion-label>\n                <div>{{clinic?.date | date :  \"dd/MM/y\"}}</div>\n                <div>Booked : {{clinic?.bookedclients}} </div>\n            </ion-label>\n        \n    </ion-card-content>\n    \n   \n        <!-- <ion-icon slot=\"start\" name=\"arrow-forward\" *ngIf=\"open!=i\"></ion-icon>\n        <ion-icon slot=\"start\" name=\"arrow-down\" *ngIf=\"open==i\"></ion-icon> -->\n     \n    <!-- <span *ngIf=\"open==i && isLoad\">\n    <ion-card-header>\n      <ion-card-title>{{clinicDetail.slots[0].case?.title}} {{clinicDetail.slots[0].case?.firstName}} {{clinicDetail.slots[0].case?.lastName}}</ion-card-title>\n    </ion-card-header>\n    \n    <ion-card-content>\n        <ion-item>\n            <ion-label>\n                <div>Time : {{clinicDetail?.slots[0].time}}</div>\n                <div>Accident Date : {{clinicDetail?.slots[0].case?.claimantInfo?.accidentDate}} </div>\n            </ion-label>\n        </ion-item>\n        <ion-item *ngIf=\"clinicDetail?.slots[0].case?.claimantInfo?.clinicListInstructions\">\n            <ion-label>\n                <div>Instruction</div>\n                <p ion-text>{{clinicDetail?.slots[0].case?.claimantInfo?.clinicListInstructions}} </p>\n            </ion-label>\n        </ion-item>\n    <!-- case->  claimantInfo\n        accidentDate: string;\n        clinicListInstructions: string;\n        homePhone:string;\n        workPhone:string; -->\n    <!-- </ion-card-content>\n  \n    <ion-footer>\n      <ion-row>\n        <ion-col center text-center>\n            <ion-fab vertical=\"top\" horizontal=\"end\" edge slot=\"fixed\">\n                <ion-fab-button >\n                    <ion-icon name=\"call-outline\"></ion-icon>\n                </ion-fab-button>\n              </ion-fab>\n          <ion-button  color=\"saccess\" expand=\"block\">\n              <ion-icon name=\"call-outline\"></ion-icon>\n          </ion-button>\n        </ion-col>\n        <ion-col center text-center>\n            <ion-button  color=\"dark\" expand=\"block\" (click)=\"openEmail($event,clinic?.clinic?.venueId)\">\n                Send Email\n            </ion-button>\n          </ion-col>\n        \n      </ion-row>\n    </ion-footer>\n  </span> -->\n</span>\n  </ion-card>\n  <ion-infinite-scroll *ngIf=\"pageId!='today'\" threshold=\"100px\" (ionInfinite)=\"loadFuture($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  \n  <!-- <p *ngIf=\"clinics.length == 0 \" text-center>Sorry, nothing in here!</p> -->\n  <!-- Skeleton screen -->\n<!-- <div *ngIf=\"!data\">\n  <div class=\"ion-padding custom-skeleton\">\n    <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n    <ion-skeleton-text animated></ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n  </div>\n\n  <ion-list>\n    <ion-list-header>\n      <ion-label>\n        <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\n      </ion-label>\n    </ion-list-header>\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-avatar>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-thumbnail>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-skeleton-text animated style=\"width: 27px; height: 27px\" slot=\"start\"></ion-skeleton-text>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  </div> -->\n  \n</ion-content>\n<ion-footer>\n  <ion-row style=\"background: #27292d;text-align: center\">\n    <ion-col center text-center style=\"color:beige\">\n        \n      <span (click)=\"changePage('today')\">\n      <ion-icon name=\"calendar\" >\n       \n      </ion-icon>\n       <div style=\"font-size: x-small\">Today Clinic</div>\n      </span>\n     \n    </ion-col>\n    <ion-col center text-center style=\"color:beige\">\n       \n      <span (click)=\"changePage('future')\">\n        <ion-icon name=\"home\" ></ion-icon>\n         <div  style=\"font-size: x-small\">Future Clinic</div>\n        </span>\n           \n      \n\n      \n      </ion-col>\n    \n  </ion-row>\n</ion-footer>");

/***/ }),

/***/ "tvH6":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/login/login.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header>\n  <ion-toolbar>\n    <ion-title>Login Page</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    \n  <form [formGroup]=\"myForm\" >\n      <ion-avatar style=\"width: 35%; height: 50%;margin-top: 50px;margin-left: 30%;\">\n          <img src=\"/assets/logo.jpg\" alt=\"image\" style=\"text-align: center\">\n        </ion-avatar>\n        \n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Username</ion-label>\n      <ion-input formControlName=\"username\" type=\"text\"></ion-input>\n    </ion-item>\n    <ion-text color=\"danger\">\n    <span class=\"error ion-padding\"  color=\"danger\" *ngIf=\"submitted && errorCtr.username.errors?.required\">\n      Username is required.\n    </span>\n    </ion-text>\n    <!-- <span class=\"error ion-padding\" [ngIf]=\"submitted && errorCtr.username.errors?.minlength\">\n      Min 3 chars long.\n    </span> -->\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Password</ion-label>\n      <ion-input formControlName=\"password\" type=\"password\"></ion-input>\n    </ion-item>\n    <ion-text color=\"danger\">\n    <span class=\"error ion-padding\"  color=\"danger\" *ngIf=\"submitted && errorCtr.password.errors?.required\">\n      Password is required.\n    </span>\n  </ion-text>\n    <!-- <span class=\"error ion-padding\" [ngIf]=\"submitted && errorCtr.password.errors?.pattern\">\n      Enter valid email.\n    </span> -->\n\n    <!-- <ion-item lines=\"full\">\n      <ion-label position=\"floating\">DOB</ion-label>\n      <ion-datetime (ionChange)=\"fetchDate($event)\" formControlName=\"dob\" [value]=\"defaultDate\"></ion-datetime>\n    </ion-item>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Phone</ion-label>\n      <ion-input maxlength=\"10\" formControlName=\"phone\" type=\"text\" required></ion-input>\n    </ion-item>\n    <span class=\"error ion-padding\" *ngIf=\"submitted && errorCtr.phone.errors?.required\">\n      Phone number is required.\n    </span>\n    <span class=\"error ion-padding\" *ngIf=\"submitted && errorCtr.phone.errors?.pattern\">\n      Number values allowed.\n    </span> -->\n\n    <ion-row>\n      <ion-col>\n        <ion-button  color=\"fth\" expand=\"block\" (click)=\"login()\">Login</ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>\n\n<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>Login</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding style=\"height: 100%;\">\n  <form [formGroup]=\"form\"  >\n    <ion-item>\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input ngModel type=\"text\" name=\"username\"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label position=\"floating\">Password</ion-label>\n      <ion-input ngModel type=\"password\" name=\"password\"></ion-input>\n    </ion-item>\n  \n    <p text-right>Forgot Password?</p>\n  \n    <ion-button  expand=\"full\" color=\"primary\" (click)=\"login(form)\">Login</ion-button>\n  </form>\n  <p text-center>Don't have a account?</p>\n  <ion-button expand=\"full\" color=\"danger\" (click)=\"registerModal()\">Register</ion-button>\n</ion-content> -->");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/guard/auth.guard */ "cT6d");
/* harmony import */ var _pages_auth_login_login_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/auth/login/login.page */ "NKrf");
/* harmony import */ var _pages_auth_register_register_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/auth/register/register.page */ "SixS");
/* harmony import */ var _pages_dashboard_dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/dashboard/dashboard.page */ "6ckw");







const routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    { path: 'login', component: _pages_auth_login_login_page__WEBPACK_IMPORTED_MODULE_4__["LoginPage"] },
    { path: 'register', component: _pages_auth_register_register_page__WEBPACK_IMPORTED_MODULE_5__["RegisterPage"] },
    { path: 'dashboard',
        component: _pages_dashboard_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"],
        canActivate: [src_app_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        pathMatch: 'full'
    },
    { path: 'dashboard/:id',
        component: _pages_dashboard_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"],
        canActivate: [src_app_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    {
        path: 'email',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-email-email-module */ "pages-email-email-module").then(__webpack_require__.bind(null, /*! ./pages/email/email.module */ "NgxI")).then(m => m.EmailPageModule),
        canActivate: [src_app_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'clinic-detail/:id/:date/:venue',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-clinic-detail-clinic-detail-module */ "pages-clinic-detail-clinic-detail-module").then(__webpack_require__.bind(null, /*! ./pages/clinic-detail/clinic-detail.module */ "mCi8")).then(m => m.ClinicDetailPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ws6Y":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".custom-skeleton ion-skeleton-text {\n  line-height: 13px;\n}\n\n.custom-skeleton ion-skeleton-text:last-child {\n  margin-bottom: 5px;\n}\n\nion-toolbar {\n  --background-color:#27292d;\n  --background:#27292d;\n  color: beige;\n  --ion-background-color: var( --ion-color-fth);\n}\n\nion-icon {\n  font-size: 25px;\n}\n\nion-card {\n  background: #dccdea;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkYXNoYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0FBQ0o7O0FBQ0U7RUFDRSwwQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLDZDQUFBO0FBRUo7O0FBQUU7RUFDRSxlQUFBO0FBR0o7O0FBREE7RUFDRSxtQkFBQTtBQUlGIiwiZmlsZSI6ImRhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLXNrZWxldG9uIGlvbi1za2VsZXRvbi10ZXh0IHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xyXG4gIH1cclxuICBcclxuICAuY3VzdG9tLXNrZWxldG9uIGlvbi1za2VsZXRvbi10ZXh0Omxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuICBpb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQtY29sb3I6IzI3MjkyZDtcclxuICAgIC0tYmFja2dyb3VuZDojMjcyOTJkO1xyXG4gICAgY29sb3I6YmVpZ2U7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoIC0taW9uLWNvbG9yLWZ0aCk7XHJcbiAgfVxyXG4gIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDsgLy9QcmVmZXJyZWQgc2l6ZSBoZXJlXHJcbn1cclxuaW9uLWNhcmR7XHJcbiAgYmFja2dyb3VuZDojZGNjZGVhO1xyXG59Il19 */");

/***/ }),

/***/ "yVUI":
/*!*******************************************!*\
  !*** ./src/app/pages/email/email.page.ts ***!
  \*******************************************/
/*! exports provided: EmailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailPage", function() { return EmailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_email_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./email.page.html */ "OBoW");
/* harmony import */ var _email_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email.page.scss */ "fte0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_model_clinicDetailRequestDto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/clinicDetailRequestDto */ "7aGv");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_model_emailSendDto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/model/emailSendDto */ "Gthm");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/env.service */ "5zL6");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/alert.service */ "3LUQ");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _model_attachmentDto__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../model/attachmentDto */ "yoHL");












let EmailPage = class EmailPage {
    constructor(env, alertService, authService, modalController, loadingController, formBuilder) {
        this.env = env;
        this.alertService = alertService;
        this.authService = authService;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.formBuilder = formBuilder;
        this.submitted = false;
    }
    ngOnInit() {
        this.myForm = this.formBuilder.group({
            to: [this.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            subject: ['Clinic List ' + this.date + '  ' + this.venueName + '(' + this.postCode + ')',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            body: ['Please find the attached Clinic List ' + this.date + '  ' + this.venueName + '(' + this.postCode + ')',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]]
        });
        this.authService.getCurrentUser().then(d => {
            if (this.authService.user) {
                this.user = this.authService.user;
            }
        });
    }
    DateChange(event) {
        var request = new src_app_model_clinicDetailRequestDto__WEBPACK_IMPORTED_MODULE_5__["ClinicDetailRequestDto"]();
        request.expertId = this.user.id.toString();
        request.venueId = '136';
        request.date = event.target.value;
        this.authService.getClinicList(request).subscribe((data) => {
            debugger;
        }, error => {
            console.log(error);
        }, () => {
        });
    }
    get errorCtr() {
        return this.myForm.controls;
    }
    sendEmail() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            debugger;
            this.submitted = true;
            if (!this.myForm.valid) {
                this.alertService.presentToast("form is not valid.");
                return false;
            }
            else {
                const loading = yield this.loadingController.create({
                    cssClass: 'my-custom-class',
                    message: 'Please wait...',
                });
                yield loading.present();
                var dto = new src_app_model_emailSendDto__WEBPACK_IMPORTED_MODULE_7__["EmailSendDto"]();
                dto.body = this.myForm.value.body;
                dto.to = this.myForm.value.to;
                dto.subject = this.myForm.value.subject;
                //dto.body=this.myForm.value.body;
                var attachments = new _model_attachmentDto__WEBPACK_IMPORTED_MODULE_11__["AttachmentDto"]();
                attachments.originalname = "cliniclist.pdf";
                attachments.contentType = "application/pdf";
                attachments.path = this.env.API_URL + 'appointment/clinic-list?expertId=' + this.user.id + '&venueId=' + this.venueId + '&date=' + this.myForm.value.date;
                dto.attachments = Array();
                dto.attachments.push(attachments);
                this.authService.sendEmail(dto).subscribe((data) => {
                    loading.dismiss();
                    if (data.success)
                        this.alertService.presentToast(data.message);
                    else
                        this.alertService.presentToast(data.msg);
                    this.dismiss();
                }, error => {
                    loading.dismiss();
                    this.alertService.presentToast(error.msg);
                });
            }
        });
    }
    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            'dismissed': true
        });
    }
};
EmailPage.ctorParameters = () => [
    { type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_8__["EnvService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["LoadingController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
];
EmailPage.propDecorators = {
    venueId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    date: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    venueName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    postCode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    email: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
EmailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-email',
        template: _raw_loader_email_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_email_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EmailPage);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkVBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBOztFQUVFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyREFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBRUEsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFFQSxtQkFBQTtFQUVBLGNBQUE7RUFFQSxnQkFBQTtBQUhGOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxzREFBQTtBQUhGOztBQU1BO0VBQ0UsK0JBQUE7QUFIRjs7QUFNQTtFQUNFLGNBQUE7QUFIRjs7QUFNQTtFQUNFLGdCQUFBO0FBSEY7O0FBTUE7RUFDRSxzQkFBQTtBQUhGOztBQU1BO0VBQ0UsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsK0JBQUE7QUFIRjs7QUFNQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BOztFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtBQUpGOztBQU9BO0VBQ0UsaUNBQUE7QUFKRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudSBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLS1wYWRkaW5nLWVuZDogOHB4O1xuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICBtaW4taGVpZ2h0OiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgbWFyZ2luLWJvdHRvbTogMThweDtcblxuICBjb2xvcjogIzc1NzU3NTtcblxuICBtaW4taGVpZ2h0OiAyNnB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XG4gIGNvbG9yOiAjNjE2ZTdlO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM3Mzg0OWE7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW5vdGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcblxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG5cbmlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufSJdfQ== */");

/***/ }),

/***/ "yoHL":
/*!****************************************!*\
  !*** ./src/app/model/attachmentDto.ts ***!
  \****************************************/
/*! exports provided: AttachmentDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachmentDto", function() { return AttachmentDto; });
class AttachmentDto {
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map