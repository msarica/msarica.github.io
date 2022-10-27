"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_about_about_module_ts"],{

/***/ 8057:
/*!***********************************************!*\
  !*** ./src/app/about/about-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPageRoutingModule": () => (/* binding */ AboutPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.page */ 4518);




const routes = [
    {
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_0__.AboutPage
    }
];
let AboutPageRoutingModule = class AboutPageRoutingModule {
};
AboutPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AboutPageRoutingModule);



/***/ }),

/***/ 6985:
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPageModule": () => (/* binding */ AboutPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-routing.module */ 8057);
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.page */ 4518);







let AboutPageModule = class AboutPageModule {
};
AboutPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _about_routing_module__WEBPACK_IMPORTED_MODULE_0__.AboutPageRoutingModule
        ],
        declarations: [_about_page__WEBPACK_IMPORTED_MODULE_1__.AboutPage]
    })
], AboutPageModule);



/***/ }),

/***/ 4518:
/*!*************************************!*\
  !*** ./src/app/about/about.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPage": () => (/* binding */ AboutPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _about_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.page.html?ngResource */ 4687);
/* harmony import */ var _about_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.page.scss?ngResource */ 3792);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/game.service */ 3629);
/* harmony import */ var src_services_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/utils.service */ 5089);






let AboutPage = class AboutPage {
    constructor(gameService, utils) {
        this.gameService = gameService;
        this.utils = utils;
        this.zipped = '';
    }
    ngOnInit() {
    }
    generate() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.zipped = yield this.utils.getCompressedGame();
                console.log(this.zipped.length);
            }
            catch (err) {
                this.zipped = err.message;
            }
        });
    }
    restore() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield this.utils.loadStory(this.zipped);
            }
            catch (err) {
                console.error(err);
            }
        });
    }
};
AboutPage.ctorParameters = () => [
    { type: src_services_game_service__WEBPACK_IMPORTED_MODULE_2__.GameService },
    { type: src_services_utils_service__WEBPACK_IMPORTED_MODULE_3__.UtilsService }
];
AboutPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-about',
        template: _about_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_about_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AboutPage);



/***/ }),

/***/ 3792:
/*!**************************************************!*\
  !*** ./src/app/about/about.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 4687:
/*!**************************************************!*\
  !*** ./src/app/about/about.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">\n        About\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-button (click)=\"generate()\">\n    Generate\n  </ion-button>\n\n  <ion-button (click)=\"restore()\">\n    Restore\n  </ion-button>\n  <br>\n\n  <textarea name=\"\" id=\"\" cols=\"30\" rows=\"10\">{{zipped }}</textarea>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_about_about_module_ts.js.map