(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["landing-page-landing-page-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page/landing-page.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page/landing-page.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLandingPageLandingPagePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header translucent>\r\n  <ion-toolbar>\r\n    <!-- <ion-title>Landing-Page</ion-title> -->\r\n    <ion-title> {{ 'LandingPage.Title' | translate }}</ion-title>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"openLanguagePopover($event)\">\r\n        <ion-icon name=\"more\" slot=\"icon-only\" ios=\"ellipsis-horizontal\"  md=\"ellipsis-vertical\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content style=\"text-align: center;\" [fullscreen]=\"true\" padding>\r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar>\r\n      <ion-title size=\"large\">This is a landing page</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <div id=\"container\">\r\n    <!-- <strong>This is a landing page</strong> -->\r\n\r\n    <strong>{{ 'LandingPage.TextValue' | translate }}</strong>\r\n\r\n  </div>\r\n  <span > \r\n  <div>\r\n    <span> \r\n<button type=\"button\" class=\"btn btn-primary\"  (click)=\"user()\">{{ 'UserHomePage.ButtonValue1' | translate }} </button>\r\n</span>\r\n</div>\r\n<div style=\"margin-top: 10px;\"> \r\n  <span> \r\n  <button type=\"button\" class=\"btn btn-primary\"    (click)=\"admin_user()\">{{ 'UserHomePage.ButtonValue2' | translate }}</button>\r\n</span>\r\n</div>\r\n</span>\r\n\r\n<div class=\"myImg\">\r\n  <span ><a href=\"#\"> Terms  </a> </span> \r\n  <span ><a href=\"#\"> Privacy  </a> </span> \r\n  <span ><a href=\"#\"> Security  </a> </span> \r\n  <span ><a href=\"#\">  Contact Goldspot  </a> </span>\r\n  </div>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/landing-page/landing-page-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/landing-page/landing-page-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: LandingPagePageRoutingModule */

    /***/
    function srcAppLandingPageLandingPageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LandingPagePageRoutingModule", function () {
        return LandingPagePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _landing_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./landing-page.page */
      "./src/app/landing-page/landing-page.page.ts");

      var routes = [{
        path: '',
        component: _landing_page_page__WEBPACK_IMPORTED_MODULE_3__["LandingPagePage"]
      }];

      var LandingPagePageRoutingModule = function LandingPagePageRoutingModule() {
        _classCallCheck(this, LandingPagePageRoutingModule);
      };

      LandingPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LandingPagePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/landing-page/landing-page.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/landing-page/landing-page.module.ts ***!
      \*****************************************************/

    /*! exports provided: LandingPagePageModule */

    /***/
    function srcAppLandingPageLandingPageModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LandingPagePageModule", function () {
        return LandingPagePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
      /* harmony import */


      var _landing_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./landing-page-routing.module */
      "./src/app/landing-page/landing-page-routing.module.ts");
      /* harmony import */


      var _landing_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./landing-page.page */
      "./src/app/landing-page/landing-page.page.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

      var LandingPagePageModule = function LandingPagePageModule() {
        _classCallCheck(this, LandingPagePageModule);
      };

      LandingPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _landing_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["LandingPagePageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]],
        declarations: [_landing_page_page__WEBPACK_IMPORTED_MODULE_6__["LandingPagePage"]]
      })], LandingPagePageModule);
      /***/
    },

    /***/
    "./src/app/landing-page/landing-page.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/landing-page/landing-page.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLandingPageLandingPagePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/landing-page/landing-page.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/landing-page/landing-page.page.ts ***!
      \***************************************************/

    /*! exports provided: LandingPagePage */

    /***/
    function srcAppLandingPageLandingPagePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LandingPagePage", function () {
        return LandingPagePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
      /* harmony import */


      var _pages_language_popover_language_popover_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../pages/language-popover/language-popover.page */
      "./src/app/pages/language-popover/language-popover.page.ts");

      var LandingPagePage = /*#__PURE__*/function () {
        function LandingPagePage(popoverCtrl, navCtrl) {
          _classCallCheck(this, LandingPagePage);

          this.popoverCtrl = popoverCtrl;
          this.navCtrl = navCtrl;
        }

        _createClass(LandingPagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "user",
          value: function user() {
            this.navCtrl.navigateForward('user-home');
          }
        }, {
          key: "admin_user",
          value: function admin_user() {
            this.navCtrl.navigateForward('admin-user-home');
          }
        }, {
          key: "openLanguagePopover",
          value: function openLanguagePopover(ev) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var popover;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.popoverCtrl.create({
                        component: _pages_language_popover_language_popover_page__WEBPACK_IMPORTED_MODULE_3__["LanguagePopoverPage"],
                        event: ev
                      });

                    case 2:
                      popover = _context.sent;
                      _context.next = 5;
                      return popover.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return LandingPagePage;
      }();

      LandingPagePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }];
      };

      LandingPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing-page',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./landing-page.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page/landing-page.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./landing-page.page.scss */
        "./src/app/landing-page/landing-page.page.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], LandingPagePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=landing-page-landing-page-module-es5.js.map