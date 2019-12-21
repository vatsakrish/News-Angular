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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-top-bar></app-top-bar>\r\n\r\n<div class=\"row\">\r\n  <app-news-sidebar-drawer></app-news-sidebar-drawer>\r\n  <div class=\"row\">\r\n      <div class=\"col-md-2\">\r\n        <span></span>\r\n      </div>\r\n      <div class=\"col-md-10\">\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<!-- \r\nCopyright Google LLC. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n-->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/error-page/error-page.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/error-page/error-page.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"error-template\">\n                <h1>\n                    Oops!</h1>\n                <h2>\n                    404 Not Found</h2>\n                <div class=\"error-details\">\n                    Sorry, an error has occured, Requested page not found!\n                </div>\n                <div class=\"error-actions\">\n                    <a routerLink=\"\" class=\"btn btn-primary btn-lg\"><span class=\"glyphicon glyphicon-home\"></span>\n                        Take Me Home </a>\n                </div>\n            </div>\n        </div>\n      </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\n  <title>Home - News Maikli</title>\n</head>\n\n<div class=\"jumbotron text-center \">\n  <h1 class=\"display-3\">Welcome to News Maikli!</h1>\n  <p class=\"lead\">This is a simple news site which will keep you up-to date with the current news. Also has categories\n    which you can pick.</p>\n  <hr class=\"my-2\">\n  <p>Click the below button and get ready to see what's happening around the world.</p>\n  <p class=\"lead\">\n    <a class=\"btn btn-primary btn-lg\" href=\"/news/\" role=\"button\">Latest News</a>\n  </p>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/news-content/news-content.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/news-content/news-content.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\n  <title>New from around the world</title>\n</head>\n\n\n<div class=\"p-2 p-md-5\">\n  <div class=\"row mb-2\">\n    <div class=\"col-md-6\" *ngFor=\"let set of dataSet\">\n      <div class=\"card flex-md-row mb-4 box-shadow h-md-250\">\n        <div class=\"card-body d-flex flex-column align-items-start\">\n          <strong class=\"d-inline-block mb-2 text-secondary\">{{currentDate | date:'MMM - dd'}}</strong>\n          <h3 class=\"mb-0\">\n            <a class=\"text-dark\">{{set.source.name}}</a>\n          </h3>\n          <div class=\"mb-1 text-muted\"></div>\n          <p class=\"card-text mb-auto\">{{set.title}}</p>\n          <a href={{set.url}}>Continue reading</a>\n        </div>\n        <div class =\"img-border\">\n            <a href={{set.url}}><img class=\"card-img-right flex-auto d-none d-md-block\" data-src=\"holder.js/200x250?theme=thumb\"\n            alt=\"Thumbnail [200x250]\" style=\"width: 200px; height:200px\" src={{set.urlToImage}}\n            data-holder-rendered=\"true\"></a>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/news-display/news-display.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/news-display/news-display.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <nav class=\"col-md-2 d-none d-md-block bg-light sidebar\">\n    <div class=\"sidebar-sticky\">\n      <ul class=\"nav flex-column\">\n        <li class=\"nav-item\">\n          <span class=\"btn\">\n            <select (change)=\"onDrpDwnChange($event)\">\n              <option *ngFor=\"let valCntry of array_of_Cntry\" [value]=\"valCntry.id\">{{valCntry.name}}</option>\n            </select>\n          </span>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"btn\" routerLink=\"home\" >\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25\" height=\"25\" viewBox=\"0 0 24 24\" fill=\"none\"\n              stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n              class=\"feather feather-home\">\n              <path d=\"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"></path>\n              <polyline points=\"9 22 9 12 15 12 15 22\"></polyline>\n            </svg>\n            News Dashboard\n          </a>\n        </li>\n        <!-- (click)=\"getNewsCatgTrigger ('business')\"-->\n        <li class=\"nav-item\">\n            <a class=\"btn \" (click)=\"getNewsCatgTrigger ('top')\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"\n                stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n                class=\"feather feather-layers\">\n                <polygon points=\"12 2 2 7 12 12 22 7 12 2\"></polygon>\n                <polyline points=\"2 17 12 22 22 17\"></polyline>\n                <polyline points=\"2 12 12 17 22 12\"></polyline>\n              </svg>\n              Top News\n            </a>\n          </li>\n        <li class=\"nav-item\">\n          <a class=\"btn \" (click)=\"getNewsCatgTrigger ('business')\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"\n              stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n              class=\"feather feather-layers\">\n              <polygon points=\"12 2 2 7 12 12 22 7 12 2\"></polygon>\n              <polyline points=\"2 17 12 22 22 17\"></polyline>\n              <polyline points=\"2 12 12 17 22 12\"></polyline>\n            </svg>\n            Business\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"btn \" (click)=\"getNewsCatgTrigger ('entertainment')\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"\n              stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n              class=\"feather feather-layers\">\n              <polygon points=\"12 2 2 7 12 12 22 7 12 2\"></polygon>\n              <polyline points=\"2 17 12 22 22 17\"></polyline>\n              <polyline points=\"2 12 12 17 22 12\"></polyline>\n            </svg>\n            Entertainment\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"btn \" (click)=\"getNewsCatgTrigger ('health')\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"\n              stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n              class=\"feather feather-layers\">\n              <polygon points=\"12 2 2 7 12 12 22 7 12 2\"></polygon>\n              <polyline points=\"2 17 12 22 22 17\"></polyline>\n              <polyline points=\"2 12 12 17 22 12\"></polyline>\n            </svg>\n            Health\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"btn \" (click)=\"getNewsCatgTrigger ('science')\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"\n              stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n              class=\"feather feather-layers\">\n              <polygon points=\"12 2 2 7 12 12 22 7 12 2\"></polygon>\n              <polyline points=\"2 17 12 22 22 17\"></polyline>\n              <polyline points=\"2 12 12 17 22 12\"></polyline>\n            </svg>\n            Science\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"btn \" (click)=\"getNewsCatgTrigger ('sports')\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"\n              stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n              class=\"feather feather-layers\">\n              <polygon points=\"12 2 2 7 12 12 22 7 12 2\"></polygon>\n              <polyline points=\"2 17 12 22 22 17\"></polyline>\n              <polyline points=\"2 12 12 17 22 12\"></polyline>\n            </svg>\n            Sports\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"btn \" (click)=\"getNewsCatgTrigger ('technology')\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"\n              stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n              class=\"feather feather-layers\">\n              <polygon points=\"12 2 2 7 12 12 22 7 12 2\"></polygon>\n              <polyline points=\"2 17 12 22 22 17\"></polyline>\n              <polyline points=\"2 12 12 17 22 12\"></polyline>\n            </svg>\n            Technology\n          </a>\n        </li>\n      </ul>\n      <div class=\"col-md-6\" *ngFor=\"let set of dataSet\">\n        <a class=\"text-dark\">{{set.source.name}}</a>\n      </div>\n\n    </div>\n  </nav>\n\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/top-bar/top-bar.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/top-bar/top-bar.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <header class=\"blog-header py-3\">\r\n    <div class=\"row flex-row justify-content-between align-items-center\">\r\n      <div class=\"col-4 p-2\">\r\n      </div>\r\n      <div class=\"p-2\">\r\n          <img class=\"\"\r\n          alt=\"Thumbnail\" style=\"height:50px\" src=\"../../assets/LogoMakr_5yBpzH.png\" />\r\n        <!-- <a class=\"blog-header-logo text-dark\" href=\"/news\">News Maikli</a> -->\r\n      </div>\r\n      <div class=\"p-2 \">\r\n        <div class=\"form-inline my-2 my-lg-0\">\r\n          <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\r\n          <button class=\"btn btm-sm btn-outline-secondary my-2 my-sm-0\" type=\"submit\">Sign Up</button>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </header>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comp-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        })
    ], AppComponent);
    return AppComponent;
}());

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./top-bar/top-bar.component */ "./src/app/top-bar/top-bar.component.ts");
/* harmony import */ var _news_content_news_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./news-content/news-content.component */ "./src/app/news-content/news-content.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _news_display_news_display_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./news-display/news-display.component */ "./src/app/news-display/news-display.component.ts");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./error-page/error-page.component */ "./src/app/error-page/error-page.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./error-interceptor */ "./src/app/error-interceptor.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};












var routes = [
    { path: 'news', component: _news_content_news_content_component__WEBPACK_IMPORTED_MODULE_6__["NewsContentComponent"] },
    { path: 'news/:cntry/:catg', component: _news_content_news_content_component__WEBPACK_IMPORTED_MODULE_6__["NewsContentComponent"] },
    { path: 'home', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_10__["HomePageComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_10__["HomePageComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            providers: [{
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                    useClass: _error_interceptor__WEBPACK_IMPORTED_MODULE_11__["ErrorIntercept"],
                    multi: true
                }],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_5__["TopBarComponent"],
                _news_content_news_content_component__WEBPACK_IMPORTED_MODULE_6__["NewsContentComponent"],
                _news_display_news_display_component__WEBPACK_IMPORTED_MODULE_8__["NewsDisplayComponent"],
                _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_9__["ErrorPageComponent"],
                _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_10__["HomePageComponent"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/error-interceptor.ts":
/*!**************************************!*\
  !*** ./src/app/error-interceptor.ts ***!
  \**************************************/
/*! exports provided: ErrorIntercept */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorIntercept", function() { return ErrorIntercept; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var ErrorIntercept = /** @class */ (function () {
    function ErrorIntercept() {
    }
    ErrorIntercept.prototype.intercept = function (request, next) {
        return next.handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
            var errorMessage = '';
            if (error.error instanceof ErrorEvent) {
                // client-side error
                errorMessage = "Error: " + error.error.message;
            }
            else {
                // server-side error
                errorMessage = "Error Status: " + error.status + "\nMessage: " + error.message;
            }
            console.log(errorMessage);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(errorMessage);
        }));
    };
    return ErrorIntercept;
}());



/***/ }),

/***/ "./src/app/error-page/error-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/error-page/error-page.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yLXBhZ2UvZXJyb3ItcGFnZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/error-page/error-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/error-page/error-page.component.ts ***!
  \****************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ErrorPageComponent = /** @class */ (function () {
    function ErrorPageComponent() {
    }
    ErrorPageComponent.prototype.ngOnInit = function () {
    };
    ErrorPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error-page',
            template: __importDefault(__webpack_require__(/*! raw-loader!./error-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/error-page/error-page.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./error-page.component.css */ "./src/app/error-page/error-page.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorPageComponent);
    return ErrorPageComponent;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-page/home-page.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n    min-height: 75rem; /* Can be removed; just added for demo purposes */\n  }\n  \n  .navbar {\n    margin-bottom: 0;\n  }\n  \n  .jumbotron {\n    padding-top: 6rem;\n    padding-bottom: 6rem;\n    margin-bottom: 0;\n    background-color: #fff;\n  }\n  \n  .jumbotron p:last-child {\n    margin-bottom: 0;\n  }\n  \n  .jumbotron-heading {\n    font-weight: 300;\n  }\n  \n  .jumbotron .container {\n    max-width: 40rem;\n  }\n  \n  .album {\n    min-height: 50rem; /* Can be removed; just added for demo purposes */\n    padding-top: 3rem;\n    padding-bottom: 3rem;\n    background-color: #f7f7f7;\n  }\n  \n  .card {\n    float: left;\n    width: 33.333%;\n    padding: .75rem;\n    margin-bottom: 2rem;\n    border: 0;\n  }\n  \n  .card > img {\n    margin-bottom: .75rem;\n  }\n  \n  .card-text {\n    font-size: 85%;\n  }\n  \n  footer {\n    padding-top: 3rem;\n    padding-bottom: 3rem;\n  }\n  \n  footer p {\n    margin-bottom: .25rem;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCLEVBQUUsaURBQWlEO0VBQ3RFOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsaUJBQWlCLEVBQUUsaURBQWlEO0lBQ3BFLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFNBQVM7RUFDWDs7RUFFQTtJQUNFLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gICAgbWluLWhlaWdodDogNzVyZW07IC8qIENhbiBiZSByZW1vdmVkOyBqdXN0IGFkZGVkIGZvciBkZW1vIHB1cnBvc2VzICovXG4gIH1cbiAgXG4gIC5uYXZiYXIge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbiAgXG4gIC5qdW1ib3Ryb24ge1xuICAgIHBhZGRpbmctdG9wOiA2cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiA2cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgfVxuICBcbiAgLmp1bWJvdHJvbiBwOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbiAgXG4gIC5qdW1ib3Ryb24taGVhZGluZyB7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxuICBcbiAgLmp1bWJvdHJvbiAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDQwcmVtO1xuICB9XG4gIFxuICAuYWxidW0ge1xuICAgIG1pbi1oZWlnaHQ6IDUwcmVtOyAvKiBDYW4gYmUgcmVtb3ZlZDsganVzdCBhZGRlZCBmb3IgZGVtbyBwdXJwb3NlcyAqL1xuICAgIHBhZGRpbmctdG9wOiAzcmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG4gIH1cbiAgXG4gIC5jYXJkIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMzMuMzMzJTtcbiAgICBwYWRkaW5nOiAuNzVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICBib3JkZXI6IDA7XG4gIH1cbiAgXG4gIC5jYXJkID4gaW1nIHtcbiAgICBtYXJnaW4tYm90dG9tOiAuNzVyZW07XG4gIH1cbiAgXG4gIC5jYXJkLXRleHQge1xuICAgIGZvbnQtc2l6ZTogODUlO1xuICB9XG4gIFxuICBmb290ZXIge1xuICAgIHBhZGRpbmctdG9wOiAzcmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xuICB9XG4gIFxuICBmb290ZXIgcCB7XG4gICAgbWFyZ2luLWJvdHRvbTogLjI1cmVtO1xuICB9XG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __importDefault(__webpack_require__(/*! raw-loader!./home-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./home-page.component.css */ "./src/app/home-page/home-page.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/news-content/news-content.component.css":
/*!*********************************************************!*\
  !*** ./src/app/news-content/news-content.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pricing-header {\n  max-width: 700px;\n}\n\n.card-deck .card {\n  width: 220px;\n  height: 300px;\n  border: 0px solid rgba(0, 0, 0, .125);\n}\n\n.card-header-resize {\n  font-size: 12px;\n  height: 100px;\n  border: 1px solid rgba(0, 0, 0, .125);\n}\n\n.card-body-resize {\n  padding: 0.5rem;\n  max-height: 170px;\n}\n\n.btn-custom {\n  padding: .20rem .4rem;\n  font-size: 0.65rem;\n  line-height: 1.0;\n  border-radius: .2rem;\n}\n\n.mainImg {\n  width: 200px;\n}\n\n.border-top {\n  border-top: 1px solid #e5e5e5;\n}\n\n.border-bottom {\n  border-bottom: 1px solid #e5e5e5;\n}\n\n.box-shadow {\n  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\n}\n\n.img-border {\n  box-shadow: -20px 0rem .75rem rgba(0, 0, 0, .05);\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy1jb250ZW50L25ld3MtY29udGVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSxnREFBZ0Q7O0FBRWxEIiwiZmlsZSI6InNyYy9hcHAvbmV3cy1jb250ZW50L25ld3MtY29udGVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByaWNpbmctaGVhZGVyIHtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbn1cblxuLmNhcmQtZGVjayAuY2FyZCB7XG4gIHdpZHRoOiAyMjBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYm9yZGVyOiAwcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMTI1KTtcbn1cblxuLmNhcmQtaGVhZGVyLXJlc2l6ZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMTI1KTtcbn1cblxuLmNhcmQtYm9keS1yZXNpemUge1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIG1heC1oZWlnaHQ6IDE3MHB4O1xufVxuXG4uYnRuLWN1c3RvbSB7XG4gIHBhZGRpbmc6IC4yMHJlbSAuNHJlbTtcbiAgZm9udC1zaXplOiAwLjY1cmVtO1xuICBsaW5lLWhlaWdodDogMS4wO1xuICBib3JkZXItcmFkaXVzOiAuMnJlbTtcbn1cblxuLm1haW5JbWcge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5ib3JkZXItdG9wIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNWU1ZTU7XG59XG5cbi5ib3JkZXItYm90dG9tIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNWU1ZTU7XG59XG5cbi5ib3gtc2hhZG93IHtcbiAgYm94LXNoYWRvdzogMCAuMjVyZW0gLjc1cmVtIHJnYmEoMCwgMCwgMCwgLjA1KTtcbn1cblxuLmltZy1ib3JkZXIge1xuICBib3gtc2hhZG93OiAtMjBweCAwcmVtIC43NXJlbSByZ2JhKDAsIDAsIDAsIC4wNSk7XG5cbn0iXX0= */");

/***/ }),

/***/ "./src/app/news-content/news-content.component.ts":
/*!********************************************************!*\
  !*** ./src/app/news-content/news-content.component.ts ***!
  \********************************************************/
/*! exports provided: NewsContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsContentComponent", function() { return NewsContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_apihandler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/apihandler.service */ "./src/app/service/apihandler.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var NewsContentComponent = /** @class */ (function () {
    function NewsContentComponent(var_apiHandler, activatedRoute) {
        this.var_apiHandler = var_apiHandler;
        this.activatedRoute = activatedRoute;
    }
    NewsContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subroutine = this.activatedRoute.params.subscribe(function (params) {
            _this.category = params['catg'];
            _this.country = params['cntry'];
            _this.sortNewsCatgData();
        });
    };
    //Load Categories
    NewsContentComponent.prototype.sortNewsCatgData = function () {
        var _this = this;
        console.log('Incoming category/country is - ' + this.category + '/' + this.country);
        this.currentDate = new Date();
        //If category is Top then set it to empty
        if (this.category === 'top' || this.category == undefined) {
            this.category = '';
        }
        if (this.country === '' || this.country == undefined) {
            this.country = 'ca';
        }
        //service call
        this.var_apiHandler.getData(this.country, this.category).subscribe(function (data) {
            var status = data['status'];
            console.log("Status is - " + status);
            if (status === 'ok') {
                _this.dataSet = data['articles'];
            }
            else {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])("Error: Status of the response is not valid - Verify the Content.ts");
            }
        });
    };
    NewsContentComponent.prototype.ngOnDestroy = function () {
        this.subroutine.unsubscribe();
        //throw new Error("Method not implemented.");
    };
    NewsContentComponent.ctorParameters = function () { return [
        { type: _service_apihandler_service__WEBPACK_IMPORTED_MODULE_1__["ApihandlerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    NewsContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news-content',
            template: __importDefault(__webpack_require__(/*! raw-loader!./news-content.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/news-content/news-content.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./news-content.component.css */ "./src/app/news-content/news-content.component.css")).default]
        }),
        __metadata("design:paramtypes", [_service_apihandler_service__WEBPACK_IMPORTED_MODULE_1__["ApihandlerService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], NewsContentComponent);
    return NewsContentComponent;
}());



/***/ }),

/***/ "./src/app/news-display/news-display.component.css":
/*!*********************************************************!*\
  !*** ./src/app/news-display/news-display.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n    font-size: .875rem;\n  }\n  \n  .feather {\n    width: 16px;\n    height: 16px;\n    vertical-align: text-bottom;\n  }\n  \n  /*\n   * Sidebar\n   */\n  \n  .sidebar {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 100; /* Behind the navbar */\n    padding: 0;\n    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\n  }\n  \n  .sidebar-sticky {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 48px; /* Height of navbar */\n    height: calc(100vh - 48px);\n    padding-top: .5rem;\n    overflow-x: hidden;\n    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\n  }\n  \n  .sidebar .nav-link {\n    font-weight: 500;\n    color: #333;\n  }\n  \n  .sidebar .nav-link .feather {\n    margin-right: 4px;\n    color: #999;\n  }\n  \n  .sidebar .nav-link.active {\n    color: #007bff;\n  }\n  \n  .sidebar .nav-link.disabled {\n    color: #c3c5c7;\n  }\n  \n  .sidebar .nav-link:hover .feather,\n  .sidebar .nav-link.active .feather {\n    color: #007bff;\n  }\n  \n  .sidebar-heading {\n    font-size: .75rem;\n    text-transform: uppercase;\n  }\n  \n  /*\n   * Navbar\n   */\n  \n  .navbar-brand {\n    padding-top: .75rem;\n    padding-bottom: .75rem;\n    font-size: 1rem;\n    background-color: rgba(0, 0, 0, .25);\n    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);\n  }\n  \n  .navbar .form-control {\n    padding: .75rem 1rem;\n    border-width: 0;\n    border-radius: 0;\n  }\n  \n  .form-control-dark {\n    color: #fff;\n    background-color: rgba(255, 255, 255, .1);\n    border-color: rgba(255, 255, 255, .1);\n  }\n  \n  .form-control-dark:focus {\n    border-color: transparent;\n    box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);\n  }\n  \n  /*\n   * Utilities\n   */\n  \n  .border-top { border-top: 1px solid #e5e5e5; }\n  \n  .border-bottom { border-bottom: 1px solid #e5e5e5; }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy1kaXNwbGF5L25ld3MtZGlzcGxheS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWiwyQkFBMkI7RUFDN0I7O0VBRUE7O0lBRUU7O0VBRUY7SUFDRSxlQUFlO0lBQ2YsTUFBTTtJQUNOLFNBQVM7SUFDVCxPQUFPO0lBQ1AsWUFBWSxFQUFFLHNCQUFzQjtJQUNwQyxVQUFVO0lBQ1YsNENBQTRDO0VBQzlDOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixTQUFTLEVBQUUscUJBQXFCO0lBQ2hDLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQixFQUFFLDZEQUE2RDtFQUNqRjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsV0FBVztFQUNiOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7O0lBRUUsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQix5QkFBeUI7RUFDM0I7O0VBRUE7O0lBRUU7O0VBRUY7SUFDRSxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixvQ0FBb0M7SUFDcEMsNkNBQTZDO0VBQy9DOztFQUVBO0lBQ0Usb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gseUNBQXlDO0lBQ3pDLHFDQUFxQztFQUN2Qzs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6Qiw4Q0FBOEM7RUFDaEQ7O0VBRUE7O0lBRUU7O0VBRUYsY0FBYyw2QkFBNkIsRUFBRTs7RUFDN0MsaUJBQWlCLGdDQUFnQyxFQUFFIiwiZmlsZSI6InNyYy9hcHAvbmV3cy1kaXNwbGF5L25ld3MtZGlzcGxheS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gICAgZm9udC1zaXplOiAuODc1cmVtO1xuICB9XG4gIFxuICAuZmVhdGhlciB7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbiAgfVxuICBcbiAgLypcbiAgICogU2lkZWJhclxuICAgKi9cbiAgXG4gIC5zaWRlYmFyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IDEwMDsgLyogQmVoaW5kIHRoZSBuYXZiYXIgKi9cbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCAwIHJnYmEoMCwgMCwgMCwgLjEpO1xuICB9XG4gIFxuICAuc2lkZWJhci1zdGlja3kge1xuICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogNDhweDsgLyogSGVpZ2h0IG9mIG5hdmJhciAqL1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDQ4cHgpO1xuICAgIHBhZGRpbmctdG9wOiAuNXJlbTtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteTogYXV0bzsgLyogU2Nyb2xsYWJsZSBjb250ZW50cyBpZiB2aWV3cG9ydCBpcyBzaG9ydGVyIHRoYW4gY29udGVudC4gKi9cbiAgfVxuICBcbiAgLnNpZGViYXIgLm5hdi1saW5rIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjMzMzO1xuICB9XG4gIFxuICAuc2lkZWJhciAubmF2LWxpbmsgLmZlYXRoZXIge1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIGNvbG9yOiAjOTk5O1xuICB9XG4gIFxuICAuc2lkZWJhciAubmF2LWxpbmsuYWN0aXZlIHtcbiAgICBjb2xvcjogIzAwN2JmZjtcbiAgfVxuXG4gIC5zaWRlYmFyIC5uYXYtbGluay5kaXNhYmxlZCB7XG4gICAgY29sb3I6ICNjM2M1Yzc7XG4gIH1cbiAgXG4gIC5zaWRlYmFyIC5uYXYtbGluazpob3ZlciAuZmVhdGhlcixcbiAgLnNpZGViYXIgLm5hdi1saW5rLmFjdGl2ZSAuZmVhdGhlciB7XG4gICAgY29sb3I6ICMwMDdiZmY7XG4gIH1cbiAgXG4gIC5zaWRlYmFyLWhlYWRpbmcge1xuICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbiAgXG4gIC8qXG4gICAqIE5hdmJhclxuICAgKi9cbiAgXG4gIC5uYXZiYXItYnJhbmQge1xuICAgIHBhZGRpbmctdG9wOiAuNzVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IC43NXJlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMjUpO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCAwIHJnYmEoMCwgMCwgMCwgLjI1KTtcbiAgfVxuICBcbiAgLm5hdmJhciAuZm9ybS1jb250cm9sIHtcbiAgICBwYWRkaW5nOiAuNzVyZW0gMXJlbTtcbiAgICBib3JkZXItd2lkdGg6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxuICBcbiAgLmZvcm0tY29udHJvbC1kYXJrIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xKTtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjEpO1xuICB9XG4gIFxuICAuZm9ybS1jb250cm9sLWRhcms6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjI1KTtcbiAgfVxuICBcbiAgLypcbiAgICogVXRpbGl0aWVzXG4gICAqL1xuICBcbiAgLmJvcmRlci10b3AgeyBib3JkZXItdG9wOiAxcHggc29saWQgI2U1ZTVlNTsgfVxuICAuYm9yZGVyLWJvdHRvbSB7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTVlNWU1OyB9XG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/news-display/news-display.component.ts":
/*!********************************************************!*\
  !*** ./src/app/news-display/news-display.component.ts ***!
  \********************************************************/
/*! exports provided: NewsDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsDisplayComponent", function() { return NewsDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_apihandler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/apihandler.service */ "./src/app/service/apihandler.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var NewsDisplayComponent = /** @class */ (function () {
    function NewsDisplayComponent(var_apiHandler, router) {
        this.var_apiHandler = var_apiHandler;
        this.router = router;
        this.array_of_Cntry = [
            { id: 'ca', name: "Canada" },
            { id: 'in', name: "India" },
            { id: 'us', name: "United States" }
        ];
    }
    NewsDisplayComponent.prototype.ngOnInit = function () {
        this.cntryVal = 'ca';
        this.catg = 'top';
    };
    // newsContent = new NewsContentComponent(this.var_apiHandler);
    // public getNewsCatgTrigger (catg: any){
    //   console.log (catg + ' - triggered in News Display Component');
    //   this.newsContent.sortNewsCatgData(catg);
    // }
    NewsDisplayComponent.prototype.onDrpDwnChange = function (event) {
        this.cntryVal = event.target.value;
        console.log(this.cntryVal);
        this.router.navigate(['news/' + this.cntryVal + '/' + this.catg]);
    };
    NewsDisplayComponent.prototype.getNewsCatgTrigger = function (catg) {
        this.catg = catg;
        this.router.navigate(['news/' + this.cntryVal + '/' + catg]);
    };
    NewsDisplayComponent.ctorParameters = function () { return [
        { type: _service_apihandler_service__WEBPACK_IMPORTED_MODULE_1__["ApihandlerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    NewsDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news-sidebar-drawer',
            template: __importDefault(__webpack_require__(/*! raw-loader!./news-display.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/news-display/news-display.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./news-display.component.css */ "./src/app/news-display/news-display.component.css")).default]
        }),
        __metadata("design:paramtypes", [_service_apihandler_service__WEBPACK_IMPORTED_MODULE_1__["ApihandlerService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NewsDisplayComponent);
    return NewsDisplayComponent;
}());



/***/ }),

/***/ "./src/app/service/apihandler.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/apihandler.service.ts ***!
  \***********************************************/
/*! exports provided: ApihandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApihandlerService", function() { return ApihandlerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var ApihandlerService = /** @class */ (function () {
    function ApihandlerService(httpclient) {
        this.httpclient = httpclient;
        this.API_KEY = 'd0b40bc0b87f4c82aff416c6d59ac3da';
    }
    ApihandlerService.prototype.getData = function (country, catg) {
        if (catg === '') {
            console.log('https://newsapi.org/v2/top-headlines?country=' + country + '&apiKey=' + this.API_KEY);
            return this.httpclient.get('https://newsapi.org/v2/top-headlines?country=' + country + '&apiKey=' + this.API_KEY);
        }
        else {
            console.log('https://newsapi.org/v2/top-headlines?country=' + country + '&category=' + catg + '&apiKey=' + this.API_KEY);
            return this.httpclient.get('https://newsapi.org/v2/top-headlines?country=' + country + '&category=' + catg + '&apiKey=' + this.API_KEY);
        }
    };
    ApihandlerService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    ApihandlerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApihandlerService);
    return ApihandlerService;
}());



/***/ }),

/***/ "./src/app/top-bar/top-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/top-bar/top-bar.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n \r\n/*\r\nCopyright Google LLC. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n*/\r\n\r\nbody {\r\n    width: 100%;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wLWJhci90b3AtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTs7OztDQUlDOztBQUVEO0lBQ0ksV0FBVztFQUNiIiwiZmlsZSI6InNyYy9hcHAvdG9wLWJhci90b3AtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuIFxyXG4vKlxyXG5Db3B5cmlnaHQgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdFxyXG5jYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwOi8vYW5ndWxhci5pby9saWNlbnNlXHJcbiovXHJcblxyXG5ib2R5IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAiXX0= */");

/***/ }),

/***/ "./src/app/top-bar/top-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/top-bar/top-bar.component.ts ***!
  \**********************************************/
/*! exports provided: TopBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopBarComponent", function() { return TopBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var TopBarComponent = /** @class */ (function () {
    function TopBarComponent() {
    }
    TopBarComponent.prototype.ngOnInit = function () {
    };
    TopBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-top-bar',
            template: __importDefault(__webpack_require__(/*! raw-loader!./top-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/top-bar/top-bar.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./top-bar.component.css */ "./src/app/top-bar/top-bar.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], TopBarComponent);
    return TopBarComponent;
}());

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var environment = {
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
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sridharsrivatsan/angular/Git/News-Angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map