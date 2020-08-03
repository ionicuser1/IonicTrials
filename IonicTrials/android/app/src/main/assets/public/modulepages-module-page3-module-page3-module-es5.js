(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modulepages-module-page3-module-page3-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modulepages/module-page3/module-page3.page.html":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modulepages/module-page3/module-page3.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulepagesModulePage3ModulePage3PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>modulePage3</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/modulepages/module-page3/module-page3-routing.module.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/modulepages/module-page3/module-page3-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: ModulePage3PageRoutingModule */

    /***/
    function srcAppModulepagesModulePage3ModulePage3RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModulePage3PageRoutingModule", function () {
        return ModulePage3PageRoutingModule;
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


      var _module_page3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./module-page3.page */
      "./src/app/modulepages/module-page3/module-page3.page.ts");

      var routes = [{
        path: '',
        component: _module_page3_page__WEBPACK_IMPORTED_MODULE_3__["ModulePage3Page"]
      }];

      var ModulePage3PageRoutingModule = function ModulePage3PageRoutingModule() {
        _classCallCheck(this, ModulePage3PageRoutingModule);
      };

      ModulePage3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ModulePage3PageRoutingModule);
      /***/
    },

    /***/
    "./src/app/modulepages/module-page3/module-page3.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/modulepages/module-page3/module-page3.module.ts ***!
      \*****************************************************************/

    /*! exports provided: ModulePage3PageModule */

    /***/
    function srcAppModulepagesModulePage3ModulePage3ModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModulePage3PageModule", function () {
        return ModulePage3PageModule;
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


      var _module_page3_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./module-page3-routing.module */
      "./src/app/modulepages/module-page3/module-page3-routing.module.ts");
      /* harmony import */


      var _module_page3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./module-page3.page */
      "./src/app/modulepages/module-page3/module-page3.page.ts");

      var ModulePage3PageModule = function ModulePage3PageModule() {
        _classCallCheck(this, ModulePage3PageModule);
      };

      ModulePage3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _module_page3_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModulePage3PageRoutingModule"]],
        declarations: [_module_page3_page__WEBPACK_IMPORTED_MODULE_6__["ModulePage3Page"]]
      })], ModulePage3PageModule);
      /***/
    },

    /***/
    "./src/app/modulepages/module-page3/module-page3.page.scss":
    /*!*****************************************************************!*\
      !*** ./src/app/modulepages/module-page3/module-page3.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulepagesModulePage3ModulePage3PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXBhZ2VzL21vZHVsZS1wYWdlMy9tb2R1bGUtcGFnZTMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/modulepages/module-page3/module-page3.page.ts":
    /*!***************************************************************!*\
      !*** ./src/app/modulepages/module-page3/module-page3.page.ts ***!
      \***************************************************************/

    /*! exports provided: ModulePage3Page */

    /***/
    function srcAppModulepagesModulePage3ModulePage3PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModulePage3Page", function () {
        return ModulePage3Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");

      var ModulePage3Page = /*#__PURE__*/function () {
        function ModulePage3Page() {
          _classCallCheck(this, ModulePage3Page);
        }

        _createClass(ModulePage3Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ModulePage3Page;
      }();

      ModulePage3Page.ctorParameters = function () {
        return [];
      };

      ModulePage3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-module-page3',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./module-page3.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modulepages/module-page3/module-page3.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./module-page3.page.scss */
        "./src/app/modulepages/module-page3/module-page3.page.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ModulePage3Page);
      /***/
    }
  }]);
})();
//# sourceMappingURL=modulepages-module-page3-module-page3-module-es5.js.map