(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modulepages-module-page5-module-page5-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modulepages/module-page5/module-page5.page.html":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modulepages/module-page5/module-page5.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulepagesModulePage5ModulePage5PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>modulePage5</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/modulepages/module-page5/module-page5-routing.module.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/modulepages/module-page5/module-page5-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: ModulePage5PageRoutingModule */

    /***/
    function srcAppModulepagesModulePage5ModulePage5RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModulePage5PageRoutingModule", function () {
        return ModulePage5PageRoutingModule;
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


      var _module_page5_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./module-page5.page */
      "./src/app/modulepages/module-page5/module-page5.page.ts");

      var routes = [{
        path: '',
        component: _module_page5_page__WEBPACK_IMPORTED_MODULE_3__["ModulePage5Page"]
      }];

      var ModulePage5PageRoutingModule = function ModulePage5PageRoutingModule() {
        _classCallCheck(this, ModulePage5PageRoutingModule);
      };

      ModulePage5PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ModulePage5PageRoutingModule);
      /***/
    },

    /***/
    "./src/app/modulepages/module-page5/module-page5.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/modulepages/module-page5/module-page5.module.ts ***!
      \*****************************************************************/

    /*! exports provided: ModulePage5PageModule */

    /***/
    function srcAppModulepagesModulePage5ModulePage5ModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModulePage5PageModule", function () {
        return ModulePage5PageModule;
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


      var _module_page5_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./module-page5-routing.module */
      "./src/app/modulepages/module-page5/module-page5-routing.module.ts");
      /* harmony import */


      var _module_page5_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./module-page5.page */
      "./src/app/modulepages/module-page5/module-page5.page.ts");

      var ModulePage5PageModule = function ModulePage5PageModule() {
        _classCallCheck(this, ModulePage5PageModule);
      };

      ModulePage5PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _module_page5_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModulePage5PageRoutingModule"]],
        declarations: [_module_page5_page__WEBPACK_IMPORTED_MODULE_6__["ModulePage5Page"]]
      })], ModulePage5PageModule);
      /***/
    },

    /***/
    "./src/app/modulepages/module-page5/module-page5.page.scss":
    /*!*****************************************************************!*\
      !*** ./src/app/modulepages/module-page5/module-page5.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulepagesModulePage5ModulePage5PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXBhZ2VzL21vZHVsZS1wYWdlNS9tb2R1bGUtcGFnZTUucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/modulepages/module-page5/module-page5.page.ts":
    /*!***************************************************************!*\
      !*** ./src/app/modulepages/module-page5/module-page5.page.ts ***!
      \***************************************************************/

    /*! exports provided: ModulePage5Page */

    /***/
    function srcAppModulepagesModulePage5ModulePage5PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModulePage5Page", function () {
        return ModulePage5Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");

      var ModulePage5Page = /*#__PURE__*/function () {
        function ModulePage5Page() {
          _classCallCheck(this, ModulePage5Page);
        }

        _createClass(ModulePage5Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ModulePage5Page;
      }();

      ModulePage5Page.ctorParameters = function () {
        return [];
      };

      ModulePage5Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-module-page5',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./module-page5.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modulepages/module-page5/module-page5.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./module-page5.page.scss */
        "./src/app/modulepages/module-page5/module-page5.page.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ModulePage5Page);
      /***/
    }
  }]);
})();
//# sourceMappingURL=modulepages-module-page5-module-page5-module-es5.js.map