(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-clinic-detail-clinic-detail-module"],{

/***/ "NueO":
/*!*********************************************************************!*\
  !*** ./src/app/pages/clinic-detail/clinic-detail-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ClinicDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicDetailPageRoutingModule", function() { return ClinicDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _clinic_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clinic-detail.page */ "sP0v");




const routes = [
    {
        path: '',
        component: _clinic_detail_page__WEBPACK_IMPORTED_MODULE_3__["ClinicDetailPage"]
    }
];
let ClinicDetailPageRoutingModule = class ClinicDetailPageRoutingModule {
};
ClinicDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ClinicDetailPageRoutingModule);



/***/ }),

/***/ "mCi8":
/*!*************************************************************!*\
  !*** ./src/app/pages/clinic-detail/clinic-detail.module.ts ***!
  \*************************************************************/
/*! exports provided: ClinicDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicDetailPageModule", function() { return ClinicDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _clinic_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clinic-detail-routing.module */ "NueO");
/* harmony import */ var _clinic_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clinic-detail.page */ "sP0v");







let ClinicDetailPageModule = class ClinicDetailPageModule {
};
ClinicDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _clinic_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ClinicDetailPageRoutingModule"]
        ],
        declarations: [_clinic_detail_page__WEBPACK_IMPORTED_MODULE_6__["ClinicDetailPage"]]
    })
], ClinicDetailPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-clinic-detail-clinic-detail-module.js.map