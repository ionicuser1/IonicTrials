(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-user-home-admin-user-home-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-user-home/admin-user-home.page.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-user-home/admin-user-home.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAdminUserHomeAdminUserHomePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n  <!--added code-->\r\n \r\n  <ion-content >\r\n  \r\n    <h4 style=\"text-align: center;\">{{ 'UserHomePage.AdminTitle' | translate }}</h4>\r\n    <ion-card style=\"margin-top: 20px;max-height: 400px;\">\r\n      <div style=\"position: absolute;top: 30%;left: 16px;font-size: 25px;z-index: 2;\" (click)=\"slidePrev()\">\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </div>\r\n      <div style=\"position: absolute;top: 30%;right: 16px;font-size: 25px;z-index: 2;\" (click)=\"slideNext()\">\r\n        <ion-icon name=\"arrow-forward\"></ion-icon>\r\n      </div>\r\n      <ion-slides  [options]=\"slideOpts\" paginationType=\"bullets\" class=\"full-width\">\r\n        <ion-slide carouselSlide>\r\n          <img src=\"https://study-eu.s3.amazonaws.com/uploads/image/path/383/wide_fullhd_48144084411_469615a2bc_o.jpg\" >\r\n        </ion-slide>\r\n        <ion-slide carouselSlide>\r\n          <img src=\"https://study-eu.s3.amazonaws.com/uploads/image/path/383/wide_fullhd_48144084411_469615a2bc_o.jpg \" >\r\n        </ion-slide>\r\n        <ion-slide carouselSlide>\r\n          <img src=\"https://study-eu.s3.amazonaws.com/uploads/image/path/383/wide_fullhd_48144084411_469615a2bc_o.jpg \" >\r\n        </ion-slide>\r\n      </ion-slides> \r\n    </ion-card>\r\n  \r\n\r\n\r\n   <app-other-collections> </app-other-collections>\r\n  \r\n\r\n     \r\n    \r\n  </ion-content>\r\n  \r\n  \r\n  \r\n  ";
      /***/
    },

    /***/
    "./src/app/admin-user-home/admin-user-home-routing.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/admin-user-home/admin-user-home-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: AdminUserHomePageRoutingModule */

    /***/
    function srcAppAdminUserHomeAdminUserHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminUserHomePageRoutingModule", function () {
        return AdminUserHomePageRoutingModule;
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


      var _admin_user_home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./admin-user-home.page */
      "./src/app/admin-user-home/admin-user-home.page.ts");

      var routes = [{
        path: '',
        component: _admin_user_home_page__WEBPACK_IMPORTED_MODULE_3__["AdminUserHomePage"]
      }];

      var AdminUserHomePageRoutingModule = function AdminUserHomePageRoutingModule() {
        _classCallCheck(this, AdminUserHomePageRoutingModule);
      };

      AdminUserHomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AdminUserHomePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/admin-user-home/admin-user-home.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/admin-user-home/admin-user-home.module.ts ***!
      \***********************************************************/

    /*! exports provided: AdminUserHomePageModule */

    /***/
    function srcAppAdminUserHomeAdminUserHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminUserHomePageModule", function () {
        return AdminUserHomePageModule;
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


      var _admin_user_home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./admin-user-home-routing.module */
      "./src/app/admin-user-home/admin-user-home-routing.module.ts");
      /* harmony import */


      var _admin_user_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./admin-user-home.page */
      "./src/app/admin-user-home/admin-user-home.page.ts");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

      var AdminUserHomePageModule = function AdminUserHomePageModule() {
        _classCallCheck(this, AdminUserHomePageModule);
      };

      AdminUserHomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _admin_user_home_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdminUserHomePageRoutingModule"]],
        declarations: [_admin_user_home_page__WEBPACK_IMPORTED_MODULE_6__["AdminUserHomePage"]]
      })], AdminUserHomePageModule);
      /***/
    },

    /***/
    "./src/app/admin-user-home/admin-user-home.page.scss":
    /*!***********************************************************!*\
      !*** ./src/app/admin-user-home/admin-user-home.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAdminUserHomeAdminUserHomePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXVzZXItaG9tZS9hZG1pbi11c2VyLWhvbWUucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/admin-user-home/admin-user-home.page.ts":
    /*!*********************************************************!*\
      !*** ./src/app/admin-user-home/admin-user-home.page.ts ***!
      \*********************************************************/

    /*! exports provided: AdminUserHomePage */

    /***/
    function srcAppAdminUserHomeAdminUserHomePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminUserHomePage", function () {
        return AdminUserHomePage;
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


      var _core_data_service_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../core/data.service/data.service */
      "./src/app/core/data.service/data.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

      var AdminUserHomePage = /*#__PURE__*/function () {
        function AdminUserHomePage(dataService) {
          _classCallCheck(this, AdminUserHomePage);

          this.dataService = dataService;
          this.name = "Admin Home Page";
          this.slideOpts = {
            initialSlide: 1,
            autoplay: true,
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true,
            speed: 400
          };
          this.userCollectioN = this.dataService.userCollection;
        }

        _createClass(AdminUserHomePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "slidePrev",
          value: function slidePrev() {
            this.slider.slidePrev();
          }
        }, {
          key: "slideNext",
          value: function slideNext() {
            this.slider.slideNext();
          }
        }]);

        return AdminUserHomePage;
      }();

      AdminUserHomePage.ctorParameters = function () {
        return [{
          type: _core_data_service_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }];
      };

      AdminUserHomePage.propDecorators = {
        slider: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"]]
        }]
      };
      AdminUserHomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-user-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./admin-user-home.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-user-home/admin-user-home.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./admin-user-home.page.scss */
        "./src/app/admin-user-home/admin-user-home.page.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_core_data_service_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])], AdminUserHomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=admin-user-home-admin-user-home-module-es5.js.map