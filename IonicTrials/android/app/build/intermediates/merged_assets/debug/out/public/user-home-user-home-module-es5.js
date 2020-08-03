(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-home-user-home-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/user-home/user-home.page.html":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-home/user-home.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppUserHomeUserHomePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n  <!--added code-->\r\n \r\n  <ion-content >\r\n  \r\n    <h4 style=\"text-align: center;\">{{ 'UserHomePage.userTitle' | translate }}</h4>\r\n    <ion-card style=\"margin-top: 20px;max-height: 400px;\">\r\n      <div style=\"position: absolute;top: 30%;left: 16px;font-size: 25px;z-index: 2;\" (click)=\"slidePrev()\">\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </div>\r\n      <div style=\"position: absolute;top: 30%;right: 16px;font-size: 25px;z-index: 2;\" (click)=\"slideNext()\">\r\n        <ion-icon name=\"arrow-forward\"></ion-icon>\r\n      </div>\r\n      <ion-slides  [options]=\"slideOpts\" paginationType=\"bullets\" class=\"full-width\">\r\n        <ion-slide carouselSlide>\r\n          <img src=\"https://study-eu.s3.amazonaws.com/uploads/image/path/383/wide_fullhd_48144084411_469615a2bc_o.jpg\" >\r\n        </ion-slide>\r\n        <ion-slide carouselSlide>\r\n          <img src=\"https://study-eu.s3.amazonaws.com/uploads/image/path/383/wide_fullhd_48144084411_469615a2bc_o.jpg \" >\r\n        </ion-slide>\r\n        <ion-slide carouselSlide>\r\n          <img src=\"https://study-eu.s3.amazonaws.com/uploads/image/path/383/wide_fullhd_48144084411_469615a2bc_o.jpg \" >\r\n        </ion-slide>\r\n      </ion-slides> \r\n    </ion-card>\r\n  \r\n\r\n\r\n   <app-user-collections> </app-user-collections>\r\n\r\n   <app-other-collections> </app-other-collections>\r\n  \r\n\r\n     \r\n    \r\n  </ion-content>\r\n  \r\n  \r\n  \r\n  ";
      /***/
    },

    /***/
    "./src/app/user-home/user-home-routing.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/user-home/user-home-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: UserHomePageRoutingModule */

    /***/
    function srcAppUserHomeUserHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserHomePageRoutingModule", function () {
        return UserHomePageRoutingModule;
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


      var _user_home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-home.page */
      "./src/app/user-home/user-home.page.ts");

      var routes = [{
        path: '',
        component: _user_home_page__WEBPACK_IMPORTED_MODULE_3__["UserHomePage"]
      }];

      var UserHomePageRoutingModule = function UserHomePageRoutingModule() {
        _classCallCheck(this, UserHomePageRoutingModule);
      };

      UserHomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UserHomePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/user-home/user-home.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/user-home/user-home.module.ts ***!
      \***********************************************/

    /*! exports provided: UserHomePageModule */

    /***/
    function srcAppUserHomeUserHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserHomePageModule", function () {
        return UserHomePageModule;
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


      var ng_image_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-image-slider */
      "./node_modules/ng-image-slider/fesm2015/ng-image-slider.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
      /* harmony import */


      var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-owl-carousel-o */
      "./node_modules/ngx-owl-carousel-o/fesm2015/ngx-owl-carousel-o.js");
      /* harmony import */


      var _user_home_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./user-home-routing.module */
      "./src/app/user-home/user-home-routing.module.ts");
      /* harmony import */


      var _user_home_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./user-home.page */
      "./src/app/user-home/user-home.page.ts");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

      var UserHomePageModule = function UserHomePageModule() {
        _classCallCheck(this, UserHomePageModule);
      };

      UserHomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], ng_image_slider__WEBPACK_IMPORTED_MODULE_4__["NgImageSliderModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__["CarouselModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _user_home_routing_module__WEBPACK_IMPORTED_MODULE_7__["UserHomePageRoutingModule"]],
        declarations: [_user_home_page__WEBPACK_IMPORTED_MODULE_8__["UserHomePage"]]
      })], UserHomePageModule);
      /***/
    },

    /***/
    "./src/app/user-home/user-home.page.scss":
    /*!***********************************************!*\
      !*** ./src/app/user-home/user-home.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function srcAppUserHomeUserHomePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".owl-carousel {\n  width: 90% !important;\n  margin: 10% auto;\n}\n\n.owl-carousel .owl-nav {\n  overflow: hidden;\n  height: 0px;\n}\n\n.owl-carousel .nav-btn {\n  height: 47px;\n  position: absolute;\n  width: 26px;\n  cursor: pointer;\n  top: 30% !important;\n}\n\n.owl-carousel .owl-prev.disabled,\n.owl-carousel .owl-next.disabled {\n  pointer-events: none;\n  opacity: 0.2;\n}\n\n.owl-carousel .prev-slide:hover {\n  background-position: 0px -53px;\n}\n\n.owl-carousel .next-slide:hover {\n  background-position: -24px -53px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1ob21lL3VzZXItaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ3BCOztBQUVFO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDZjs7QUFFRTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7RUFDZixtQkFBbUI7QUFDdkI7O0FBRUU7O0VBRUUsb0JBQW9CO0VBQ3BCLFlBQVk7QUFDaEI7O0FBRUU7RUFDRSw4QkFBOEI7QUFDbEM7O0FBRUU7RUFDRSxnQ0FBZ0M7QUFDcEMiLCJmaWxlIjoic3JjL2FwcC91c2VyLWhvbWUvdXNlci1ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vd2wtY2Fyb3VzZWwge1xyXG4gICAgd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAxMCUgYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLm93bC1jYXJvdXNlbCAub3dsLW5hdiB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5vd2wtY2Fyb3VzZWwgLm5hdi1idG4ge1xyXG4gICAgaGVpZ2h0OiA0N3B4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDI2cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0b3A6IDMwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAub3dsLWNhcm91c2VsIC5vd2wtcHJldi5kaXNhYmxlZCxcclxuICAub3dsLWNhcm91c2VsIC5vd2wtbmV4dC5kaXNhYmxlZCB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIG9wYWNpdHk6IDAuMjtcclxuICB9XHJcbiAgICBcclxuICAub3dsLWNhcm91c2VsIC5wcmV2LXNsaWRlOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAtNTNweDtcclxuICB9XHJcbiAgXHJcbiAgLm93bC1jYXJvdXNlbCAubmV4dC1zbGlkZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjRweCAtNTNweDtcclxuICB9Il19 */";
      /***/
    },

    /***/
    "./src/app/user-home/user-home.page.ts":
    /*!*********************************************!*\
      !*** ./src/app/user-home/user-home.page.ts ***!
      \*********************************************/

    /*! exports provided: UserHomePage */

    /***/
    function srcAppUserHomeUserHomePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserHomePage", function () {
        return UserHomePage;
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


      var _core_data_service_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../core/data.service/data.service */
      "./src/app/core/data.service/data.service.ts");

      var UserHomePage = /*#__PURE__*/function () {
        function UserHomePage(dataService) {
          _classCallCheck(this, UserHomePage);

          this.dataService = dataService;
          this.name = "User Home Page";
          this.arraySize = this.dataService.public_collection.length;
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

        _createClass(UserHomePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log("arraysize=" + this.arraySize);
          }
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

        return UserHomePage;
      }();

      UserHomePage.ctorParameters = function () {
        return [{
          type: _core_data_service_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
        }];
      };

      UserHomePage.propDecorators = {
        slider: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"]]
        }]
      };
      UserHomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./user-home.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/user-home/user-home.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./user-home.page.scss */
        "./src/app/user-home/user-home.page.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_core_data_service_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])], UserHomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=user-home-user-home-module-es5.js.map