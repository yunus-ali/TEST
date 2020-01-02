(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n<router-outlet></router-outlet>\n\n\n<!-- <button type=\"button\" class=\"btn btn-primary\">Primary</button> -->\n<!-- <input id=\"toggle-demo\" type=\"checkbox\" data-toggle=\"toggle\"> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div [ngClass]=\"scssCulture\">\n    <div class=\"patient-view-header\" >\n        <div class=\"postion-navigation\">\n            <img [src]='icon'  (mousedown)=\"onClick()\">\n        </div>\n        <div class=\"postion-title\">\n            title\n        </div>\n        <div class=\"postion-initials\">\n            logout\n        </div>\n    </div>\n    <div *ngIf=\"show\">\n        <app-menu></app-menu>\n    </div>\n</div> -->\n<nav class=\"navbar fixed-top navbar-expand-sm navbar-dark bg-dark\">\n    <!-- <a href=\"#\" class=\"navbar-brand\">\n        <button class=\"navbar-toggler-icon\" (click)=\"onClick()\"></button>\n    </a> -->\n    <div class=\"navbar-brand\">\n        <button class=\"navbar-toggler-icon\" (click)=\"onClick()\"></button>\n    </div>\n    <a class=\"navbar-nav mr-auto\"  href=\"#\">\n        <img src=\"assets/img/user.png\" width=\"30\" height=\"30\" alt=\"\">\n      </a>\n    <!-- <button class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbarMenu\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarMenu\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item\">\n                <a href=\"#\" class=\"nav-link\">Users</a>\n            </li>\n            <li class=\"nav-item\">\n                <a href=\"#\" class=\"nav-link\">Products</a>\n            </li>\n        </ul>\n    </div> -->\n\n\n</nav>\n<div *ngIf=\"show\">\n    <app-menu></app-menu>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"home\">\n    <img class=\"img\" src=\"assets/img/india.png\">\n</div> -->\n<agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n      </agm-map>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/menu/menu.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/menu/menu.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"menu\">\n  <!-- <div *ngFor=\"let i of item\" >\n        <div class=\"block\" (click)=\"onclickblock(i)\">\n                {{i}}\n        </div>  \n        \n    </div> -->\n  <!-- <div class=\"card\" style=\"width: 358px;\"> -->\n  <!-- <ul class=\"list-group list-group-flush\" *ngFor=\"let i of item\">\n          <li class=\"list-group-item\" (click)=\"onclickblock(i)\">{{i}}</li>\n        </ul> -->\n  <div *ngFor=\"let i of item\">\n    <div class=\"accordion\" id=\"accordionExample\">\n      <div class=\"card\">\n        <div class=\"card-header\" id=\"headingOne\" class=\"btn btn-link collapsed\"  data-toggle=\"collapse\" [attr.data-target]=\"'#'+i\"\n        aria-expanded=\"false\" aria-controls=\"collapseOne\">\n          <h5 class=\"menuname\">\n        \n              {{i}}\n          \n          </h5>\n        </div>\n\n        <div [id]=\"i\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordionExample\">\n          <div class=\"card-body\" *ngFor=\"let i of submenu\">\n            <table>\n              <tr>\n                <td width=\"70%\">\n                  {{i}}\n                </td>\n                <td width=\"10%\">\n                  <div class=\"togglemenu\">\n                    <ui-switch defaultBgColor=\"red\"></ui-switch>\n                  </div>\n                </td>\n              </tr>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- </div> -->\n  </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/page/karnataka/karnataka.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/karnataka/karnataka.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kar\">\n    <img class=\"img\" src=\"assets/img/Karnataka.jpg\">\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/page/maharashtra/maharashtra.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/maharashtra/maharashtra.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mahara\">\n    <img class=\"img\" src=\"assets/img/political_map_maharashtra.png\">\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _page_karnataka_karnataka_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page/karnataka/karnataka.component */ "./src/app/page/karnataka/karnataka.component.ts");
/* harmony import */ var _page_maharashtra_maharashtra_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page/maharashtra/maharashtra.component */ "./src/app/page/maharashtra/maharashtra.component.ts");








const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'header', component: _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"] },
    { path: 'menu', component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"] },
    { path: 'kar', component: _page_karnataka_karnataka_component__WEBPACK_IMPORTED_MODULE_6__["KarnatakaComponent"] },
    { path: 'mahara', component: _page_maharashtra_maharashtra_component__WEBPACK_IMPORTED_MODULE_7__["MaharashtraComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'TEST';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _page_karnataka_karnataka_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page/karnataka/karnataka.component */ "./src/app/page/karnataka/karnataka.component.ts");
/* harmony import */ var _page_maharashtra_maharashtra_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page/maharashtra/maharashtra.component */ "./src/app/page/maharashtra/maharashtra.component.ts");
/* harmony import */ var ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toggle-switch */ "./node_modules/ngx-toggle-switch/ui-switch.es2015.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
            _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _page_karnataka_karnataka_component__WEBPACK_IMPORTED_MODULE_8__["KarnatakaComponent"],
            _page_maharashtra_maharashtra_component__WEBPACK_IMPORTED_MODULE_9__["MaharashtraComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_10__["UiSwitchModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_11__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyAPkBZkndeTD_ZibPfpf7oTXRVXZBSNbYc'
            }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".patient-view-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  border-radius: 3px 3px 0px 0px;\n  background-color: #464646;\n  height: 31px;\n  font-size: 1.4rem;\n  padding: 0.8rem;\n  padding-left: unset;\n  color: #ffffff;\n}\n\n.postion-title {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  padding: 0 0.6rem;\n}\n\n.position-icon {\n  padding-left: 8px;\n  padding-right: 5px;\n  align-self: center;\n}\n\n.postion-navigation {\n  padding-top: 7px;\n}\n\n.navbar {\n  -webkit-box-orient: unset !important;\n  -webkit-box-direction: unset !important;\n          flex-direction: unset !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxNWVBST0pFQ1RcXFRFU1Qvc3JjXFxhcHBcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDQUo7O0FER0E7RUFDSSxtQkFBQTtVQUFBLFlBQUE7RUFDRixpQkFBQTtBQ0FGOztBREdBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxnQkFBQTtBQ0FKOztBRE1BO0VBQ1Esb0NBQUE7RUFBQSx1Q0FBQTtVQUFBLGdDQUFBO0FDSFIiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhdGllbnQtdmlldy1oZWFkZXJ7XHJcbiAgICAvL3Nob3VsZCBiZSBzZXQgYWNyb2RpbmcgdG8gY3VsdHVyZVxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDBweCAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY0NjQ2O1xyXG4gICAgaGVpZ2h0OiAzMXB4O1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICBwYWRkaW5nOiAuOHJlbTtcclxuICAgIHBhZGRpbmctbGVmdDp1bnNldDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG5cclxufVxyXG4ucG9zdGlvbi10aXRsZXtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICBwYWRkaW5nOiAwIC42cmVtO1xyXG5cclxufVxyXG4ucG9zaXRpb24taWNvbntcclxuICAgIHBhZGRpbmctbGVmdDo4cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wb3N0aW9uLW5hdmlnYXRpb24ge1xyXG4gICAgcGFkZGluZy10b3A6IDdweDtcclxuLy8gICBoZWlnaHQ6IDQwcHg7XHJcbi8vICAgd2lkdGg6IDQxcHg7XHJcbi8vICBib3JkZXItcmlnaHQ6KDFweCBzb2xpZCAjMDAwMDAwKTtcclxufVxyXG5cclxuLm5hdmJhcntcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogdW5zZXQgIWltcG9ydGFudDtcclxufSIsIi5wYXRpZW50LXZpZXctaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogM3B4IDNweCAwcHggMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY0NjQ2O1xuICBoZWlnaHQ6IDMxcHg7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBwYWRkaW5nOiAwLjhyZW07XG4gIHBhZGRpbmctbGVmdDogdW5zZXQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4ucG9zdGlvbi10aXRsZSB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgcGFkZGluZzogMCAwLjZyZW07XG59XG5cbi5wb3NpdGlvbi1pY29uIHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4ucG9zdGlvbi1uYXZpZ2F0aW9uIHtcbiAgcGFkZGluZy10b3A6IDdweDtcbn1cblxuLm5hdmJhciB7XG4gIGZsZXgtZGlyZWN0aW9uOiB1bnNldCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let HeaderComponent = class HeaderComponent {
    constructor(router) {
        this.router = router;
        this.show = false;
    }
    ngOnInit() {
        this.icon = 'assets/img/icons8-menu-64.png';
    }
    onClick() {
        this.show = this.show ? false : true;
        console.log("clicked");
        //  this.router.navigate(['/menu']);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home{\r\n   \r\n\r\n    /* Full height */\r\n    height: 100%; \r\n  \r\n    /* Center and scale the image nicely */\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n.img{\r\n    width: 100% !important;\r\n}\r\n\r\nagm-map {\r\n    height: 100vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztJQUdJLGdCQUFnQjtJQUNoQixZQUFZOztJQUVaLHNDQUFzQztJQUN0QywyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFDQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21le1xyXG4gICBcclxuXHJcbiAgICAvKiBGdWxsIGhlaWdodCAqL1xyXG4gICAgaGVpZ2h0OiAxMDAlOyBcclxuICBcclxuICAgIC8qIENlbnRlciBhbmQgc2NhbGUgdGhlIGltYWdlIG5pY2VseSAqL1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5pbWd7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcbmFnbS1tYXAge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() {
        this.lat = 20.5937;
        this.lng = 78.9629;
    }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/menu/menu.component.scss":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu {\n  width: 360px;\n  background: #e3e3e3;\n  border-radius: 3px;\n  background-color: white;\n  border: solid 1px #464646;\n  position: absolute;\n  z-index: 999999;\n  top: 55px;\n  position: fixed;\n}\n\n.block {\n  background-color: #d6ecee;\n  height: 30px;\n  border-bottom: 1px solid #000000;\n}\n\n.card-body {\n  background-color: cornsilk;\n  padding: 2px;\n}\n\n.menuname {\n  float: left;\n}\n\ntable, th {\n  border: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9DOlxcTVlQUk9KRUNUXFxURVNUL3NyY1xcYXBwXFxtZW51XFxtZW51LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQ0ZKOztBREtBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7QUNGSjs7QURJQTtFQUNJLDBCQUFBO0VBQ0EsWUFBQTtBQ0RKOztBRElBO0VBQ0ksV0FBQTtBQ0RKOztBRE1BO0VBQ0ksdUJBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLm1lbnV7XHJcbiBcclxuICAgIHdpZHRoOiAzNjBweDtcclxuICAgIGJhY2tncm91bmQ6ICNlM2UzZTM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICM0NjQ2NDY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiA5OTk5OTk7XHJcbiAgICB0b3A6IDU1cHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcblxyXG59XHJcbi5ibG9ja3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2Q2ZWNlZTtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJvcmRlci1ib3R0b206KDFweCBzb2xpZCAjMDAwMDAwKTtcclxufVxyXG4uY2FyZC1ib2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybnNpbGs7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcblxyXG59XHJcbi5tZW51bmFtZXtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi50b2dnbGVtZW51e1xyXG5cclxufVxyXG50YWJsZSwgdGh7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICB9XHJcblxyXG4iLCIubWVudSB7XG4gIHdpZHRoOiAzNjBweDtcbiAgYmFja2dyb3VuZDogI2UzZTNlMztcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzQ2NDY0NjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk5OTk7XG4gIHRvcDogNTVweDtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuXG4uYmxvY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZlY2VlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwMDAwO1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogY29ybnNpbGs7XG4gIHBhZGRpbmc6IDJweDtcbn1cblxuLm1lbnVuYW1lIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbnRhYmxlLCB0aCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let MenuComponent = class MenuComponent {
    constructor(router) {
        this.router = router;
        this.item = ['maps', 'Administrative_Boundary', 'Election_Info', 'LandUseLandCover', 'PropertyDetails', 'UtilityServices'];
        this.submenu = ['open_street_map', 'map', 'satellite'];
    }
    ngOnInit() {
    }
    onclickblock(name) {
        if (name === 'karnataka') {
            this.router.navigate(['kar']);
        }
        if (name === 'maharashtra') {
            this.router.navigate(['mahara']);
        }
        if (name === 'home') {
            this.router.navigate(['home']);
        }
    }
};
MenuComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/menu/menu.component.html"),
        styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/menu/menu.component.scss")]
    })
], MenuComponent);



/***/ }),

/***/ "./src/app/page/karnataka/karnataka.component.css":
/*!********************************************************!*\
  !*** ./src/app/page/karnataka/karnataka.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".kar{\r\n    margin-left: 389px;\r\n    margin-top: 67px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9rYXJuYXRha2Eva2FybmF0YWthLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcGFnZS9rYXJuYXRha2Eva2FybmF0YWthLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIua2Fye1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM4OXB4O1xyXG4gICAgbWFyZ2luLXRvcDogNjdweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/page/karnataka/karnataka.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/page/karnataka/karnataka.component.ts ***!
  \*******************************************************/
/*! exports provided: KarnatakaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KarnatakaComponent", function() { return KarnatakaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let KarnatakaComponent = class KarnatakaComponent {
    constructor() { }
    ngOnInit() {
    }
};
KarnatakaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-karnataka',
        template: __webpack_require__(/*! raw-loader!./karnataka.component.html */ "./node_modules/raw-loader/index.js!./src/app/page/karnataka/karnataka.component.html"),
        styles: [__webpack_require__(/*! ./karnataka.component.css */ "./src/app/page/karnataka/karnataka.component.css")]
    })
], KarnatakaComponent);



/***/ }),

/***/ "./src/app/page/maharashtra/maharashtra.component.css":
/*!************************************************************!*\
  !*** ./src/app/page/maharashtra/maharashtra.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".maraha{\r\n    margin-top: 85px;\r\n    width: 50%;\r\n    margin-left: 440px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9tYWhhcmFzaHRyYS9tYWhhcmFzaHRyYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlL21haGFyYXNodHJhL21haGFyYXNodHJhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFyYWhhe1xyXG4gICAgbWFyZ2luLXRvcDogODVweDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogNDQwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/page/maharashtra/maharashtra.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/page/maharashtra/maharashtra.component.ts ***!
  \***********************************************************/
/*! exports provided: MaharashtraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaharashtraComponent", function() { return MaharashtraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MaharashtraComponent = class MaharashtraComponent {
    constructor() { }
    ngOnInit() {
    }
};
MaharashtraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-maharashtra',
        template: __webpack_require__(/*! raw-loader!./maharashtra.component.html */ "./node_modules/raw-loader/index.js!./src/app/page/maharashtra/maharashtra.component.html"),
        styles: [__webpack_require__(/*! ./maharashtra.component.css */ "./src/app/page/maharashtra/maharashtra.component.css")]
    })
], MaharashtraComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\MYPROJECT\TEST\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map