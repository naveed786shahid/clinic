(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-email-email-module"],{

/***/ "NgxI":
/*!*********************************************!*\
  !*** ./src/app/pages/email/email.module.ts ***!
  \*********************************************/
/*! exports provided: EmailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailPageModule", function() { return EmailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _email_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./email-routing.module */ "vI87");
/* harmony import */ var _email_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./email.page */ "yVUI");







let EmailPageModule = class EmailPageModule {
};
EmailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _email_routing_module__WEBPACK_IMPORTED_MODULE_5__["EmailPageRoutingModule"]
        ],
        declarations: [_email_page__WEBPACK_IMPORTED_MODULE_6__["EmailPage"]]
    })
], EmailPageModule);



/***/ }),

/***/ "vI87":
/*!*****************************************************!*\
  !*** ./src/app/pages/email/email-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: EmailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailPageRoutingModule", function() { return EmailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _email_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./email.page */ "yVUI");




const routes = [
    {
        path: '',
        component: _email_page__WEBPACK_IMPORTED_MODULE_3__["EmailPage"]
    }
];
let EmailPageRoutingModule = class EmailPageRoutingModule {
};
EmailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EmailPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-email-email-module.js.map