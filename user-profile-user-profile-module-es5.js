function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-profile-user-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserProfileUserProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>user-profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"auth.user$ | async; then authenticated else guest\">\n   \n  </div> \n\n\n  <!-- User NOT logged in -->\n  <ng-template #guest>\n    <h3>Howdy, GUEST</h3>\n    <p>Login to get started...</p>\n\n    <button (click)=\"auth.googleSignin()\">\n      <i class=\"fa fa-google\"></i> Connect Google\n    </button>\n  </ng-template>\n\n  <!-- User logged in -->\n  <ng-template #authenticated>\n    <div *ngIf=\"auth.user$ | async as user\">\n      <h3>Howdy, {{ user.displayName }}</h3>\n      <img [src]=\"user.photoURL\" />\n      <p>UID: {{ user.uid }}</p>\n      <button (click)=\"auth.signOut()\">Logout</button>\n    </div>\n  </ng-template>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/user-profile/user-profile-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/user-profile/user-profile-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: UserProfilePageRoutingModule */

  /***/
  function srcAppUserProfileUserProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfilePageRoutingModule", function () {
      return UserProfilePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _user_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user-profile.page */
    "./src/app/user-profile/user-profile.page.ts");

    var routes = [{
      path: '',
      component: _user_profile_page__WEBPACK_IMPORTED_MODULE_3__["UserProfilePage"]
    }];

    var UserProfilePageRoutingModule = function UserProfilePageRoutingModule() {
      _classCallCheck(this, UserProfilePageRoutingModule);
    };

    UserProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UserProfilePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/user-profile/user-profile.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/user-profile/user-profile.module.ts ***!
    \*****************************************************/

  /*! exports provided: UserProfilePageModule */

  /***/
  function srcAppUserProfileUserProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfilePageModule", function () {
      return UserProfilePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user-profile-routing.module */
    "./src/app/user-profile/user-profile-routing.module.ts");
    /* harmony import */


    var _user_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user-profile.page */
    "./src/app/user-profile/user-profile.page.ts");

    var UserProfilePageModule = function UserProfilePageModule() {
      _classCallCheck(this, UserProfilePageModule);
    };

    UserProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserProfilePageRoutingModule"]],
      declarations: [_user_profile_page__WEBPACK_IMPORTED_MODULE_6__["UserProfilePage"]]
    })], UserProfilePageModule);
    /***/
  },

  /***/
  "./src/app/user-profile/user-profile.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/user-profile/user-profile.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserProfileUserProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/user-profile/user-profile.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/user-profile/user-profile.page.ts ***!
    \***************************************************/

  /*! exports provided: UserProfilePage */

  /***/
  function srcAppUserProfileUserProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfilePage", function () {
      return UserProfilePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! services/auth.service */
    "./services/auth.service.ts");

    var UserProfilePage = /*#__PURE__*/function () {
      function UserProfilePage(auth) {
        _classCallCheck(this, UserProfilePage);

        this.auth = null;
        this.auth = auth;
      }

      _createClass(UserProfilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserProfilePage;
    }();

    UserProfilePage.ctorParameters = function () {
      return [{
        type: services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    UserProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-profile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./user-profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./user-profile.page.scss */
      "./src/app/user-profile/user-profile.page.scss"))["default"]]
    })], UserProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=user-profile-user-profile-module-es5.js.map