(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modulepages-module-page2-module-page2-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modulepages/module-page2/module-page2.page.html":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modulepages/module-page2/module-page2.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulepagesModulePage2ModulePage2PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>modulePage2</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/modulepages/module-page2/module-page2-routing.module.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/modulepages/module-page2/module-page2-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: ModulePage2PageRoutingModule */

    /***/
    function srcAppModulepagesModulePage2ModulePage2RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModulePage2PageRoutingModule", function () {
        return ModulePage2PageRoutingModule;
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


      var _module_page2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./module-page2.page */
      "./src/app/modulepages/module-page2/module-page2.page.ts");

      var routes = [{
        path: '',
        component: _module_page2_page__WEBPACK_IMPORTED_MODULE_3__["ModulePage2Page"]
      }];

      var ModulePage2PageRoutingModule = function ModulePage2PageRoutingModule() {
        _classCallCheck(this, ModulePage2PageRoutingModule);
      };

      ModulePage2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ModulePage2PageRoutingModule);
      /***/
    },

    /***/
    "./src/app/modulepages/module-page2/module-page2.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/modulepages/module-page2/module-page2.module.ts ***!
      \*****************************************************************/

    /*! exports provided: ModulePage2PageModule */

    /***/
    function srcAppModulepagesModulePage2ModulePage2ModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModulePage2PageModule", function () {
        return ModulePage2PageModule;
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


      var _module_page2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./module-page2-routing.module */
      "./src/app/modulepages/module-page2/module-page2-routing.module.ts");
      /* harmony import */


      var _module_page2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./module-page2.page */
      "./src/app/modulepages/module-page2/module-page2.page.ts");

      var ModulePage2PageModule = function ModulePage2PageModule() {
        _classCallCheck(this, ModulePage2PageModule);
      };

      ModulePage2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _module_page2_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModulePage2PageRoutingModule"]],
        declarations: [_module_page2_page__WEBPACK_IMPORTED_MODULE_6__["ModulePage2Page"]]
      })], ModulePage2PageModule);
      /***/
    },

    /***/
    "./src/app/modulepages/module-page2/module-page2.page.scss":
    /*!*****************************************************************!*\
      !*** ./src/app/modulepages/module-page2/module-page2.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulepagesModulePage2ModulePage2PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXBhZ2VzL21vZHVsZS1wYWdlMi9tb2R1bGUtcGFnZTIucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/modulepages/module-page2/module-page2.page.ts":
    /*!***************************************************************!*\
      !*** ./src/app/modulepages/module-page2/module-page2.page.ts ***!
      \***************************************************************/

    /*! exports provided: ModulePage2Page */

    /***/
    function srcAppModulepagesModulePage2ModulePage2PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModulePage2Page", function () {
        return ModulePage2Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");

      var ModulePage2Page = /*#__PURE__*/function () {
        function ModulePage2Page() {
          _classCallCheck(this, ModulePage2Page);
        }

        _createClass(ModulePage2Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ModulePage2Page;
      }();

      ModulePage2Page.ctorParameters = function () {
        return [];
      };

      ModulePage2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-module-page2',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./module-page2.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modulepages/module-page2/module-page2.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./module-page2.page.scss */
        "./src/app/modulepages/module-page2/module-page2.page.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ModulePage2Page);
      /***/
    }
  }]);
})();
//# sourceMappingURL=modulepages-module-page2-module-page2-module-es5.js.map