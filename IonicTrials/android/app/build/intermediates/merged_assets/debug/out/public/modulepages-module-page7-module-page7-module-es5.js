(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modulepages-module-page7-module-page7-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modulepages/module-page7/module-page7.page.html":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modulepages/module-page7/module-page7.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulepagesModulePage7ModulePage7PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>modulePage7</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<h4 style=\"text-align: center;\">{{CollectionName}} </h4>\n<h4 style=\"text-align: center;\">{{cardName}} </h4>\n<h4 style=\"text-align: center;\">{{cardDetails}} </h4>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/modulepages/module-page7/module-page7-routing.module.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/modulepages/module-page7/module-page7-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: ModulePage7PageRoutingModule */

    /***/
    function srcAppModulepagesModulePage7ModulePage7RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModulePage7PageRoutingModule", function () {
        return ModulePage7PageRoutingModule;
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


      var _module_page7_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./module-page7.page */
      "./src/app/modulepages/module-page7/module-page7.page.ts");

      var routes = [{
        path: '',
        component: _module_page7_page__WEBPACK_IMPORTED_MODULE_3__["ModulePage7Page"]
      }];

      var ModulePage7PageRoutingModule = function ModulePage7PageRoutingModule() {
        _classCallCheck(this, ModulePage7PageRoutingModule);
      };

      ModulePage7PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ModulePage7PageRoutingModule);
      /***/
    },

    /***/
    "./src/app/modulepages/module-page7/module-page7.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/modulepages/module-page7/module-page7.module.ts ***!
      \*****************************************************************/

    /*! exports provided: ModulePage7PageModule */

    /***/
    function srcAppModulepagesModulePage7ModulePage7ModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModulePage7PageModule", function () {
        return ModulePage7PageModule;
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


      var _module_page7_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./module-page7-routing.module */
      "./src/app/modulepages/module-page7/module-page7-routing.module.ts");
      /* harmony import */


      var _module_page7_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./module-page7.page */
      "./src/app/modulepages/module-page7/module-page7.page.ts");

      var ModulePage7PageModule = function ModulePage7PageModule() {
        _classCallCheck(this, ModulePage7PageModule);
      };

      ModulePage7PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _module_page7_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModulePage7PageRoutingModule"]],
        declarations: [_module_page7_page__WEBPACK_IMPORTED_MODULE_6__["ModulePage7Page"]]
      })], ModulePage7PageModule);
      /***/
    },

    /***/
    "./src/app/modulepages/module-page7/module-page7.page.scss":
    /*!*****************************************************************!*\
      !*** ./src/app/modulepages/module-page7/module-page7.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulepagesModulePage7ModulePage7PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXBhZ2VzL21vZHVsZS1wYWdlNy9tb2R1bGUtcGFnZTcucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/modulepages/module-page7/module-page7.page.ts":
    /*!***************************************************************!*\
      !*** ./src/app/modulepages/module-page7/module-page7.page.ts ***!
      \***************************************************************/

    /*! exports provided: ModulePage7Page */

    /***/
    function srcAppModulepagesModulePage7ModulePage7PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModulePage7Page", function () {
        return ModulePage7Page;
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


      var src_app_core_data_service_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/data.service/data.service */
      "./src/app/core/data.service/data.service.ts");

      var ModulePage7Page = /*#__PURE__*/function () {
        function ModulePage7Page(dataService) {
          _classCallCheck(this, ModulePage7Page);

          this.dataService = dataService;
          this.CollectionName = this.dataService.freeCollectionName; // this.freeCollections = this.dataService.freeCollectionName

          this.publicCollections = this.dataService.publicCollectionName;
          this.privateCollections = this.dataService.privateCollectionName;
        }

        _createClass(ModulePage7Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log("CollectionName ===" + this.CollectionName);
          }
        }]);

        return ModulePage7Page;
      }();

      ModulePage7Page.ctorParameters = function () {
        return [{
          type: src_app_core_data_service_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }];
      };

      ModulePage7Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-module-page7',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./module-page7.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modulepages/module-page7/module-page7.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./module-page7.page.scss */
        "./src/app/modulepages/module-page7/module-page7.page.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_core_data_service_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])], ModulePage7Page);
      /***/
    }
  }]);
})();
//# sourceMappingURL=modulepages-module-page7-module-page7-module-es5.js.map