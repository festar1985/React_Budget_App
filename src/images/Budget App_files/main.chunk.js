(this["webpackJsonpbudget-app"] = this["webpackJsonpbudget-app"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles/style.scss":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./src/styles/style.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "* {\n  box-sizing: border-box;\n}\n\nhtml {\n  font-size: 62.5%;\n  height: 100%;\n}\n\nbody {\n  min-height: 100vh;\n  font-family: Roboto, Helvetica, Arial, sans-serif;\n  font-size: 1.6rem;\n  line-height: 1.6;\n}\n\nh1 {\n  font-size: 2.2rem;\n}\n\nbutton {\n  cursor: pointer;\n}\n\nbutton:disabled {\n  cursor: default;\n}\n\n.is-active {\n  color: red;\n}\n\n.box-layout {\n  background: #4a4d57;\n  height: 100vh;\n  width: 100vw;\n  background-size: cover;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.box-layout__box {\n  background: rgba(74, 77, 87, 0.65);\n  border-radius: 5px;\n  text-align: center;\n  width: 25rem;\n  padding: 3.2rem;\n}\n\n.box-layout__title {\n  margin: 1.6rem 0;\n}\n\n.button-login {\n  background-color: floralwhite;\n  border: none;\n  color: green;\n  text-align: center;\n  text-decoration: none;\n  font-size: 1.6rem;\n  padding: 10px 24px;\n  border-radius: 8px;\n  transition-duration: 0.4s;\n}\n\n.button-login:hover {\n  background-color: green;\n  color: white;\n}\n\n.header {\n  background: #4a4d57;\n  background-color: #4a4d57;\n  text-align: center;\n  height: 80px;\n}\n\n.header__buttons {\n  background-color: #4a4d57;\n  border: none;\n  color: #27ad63;\n  text-align: center;\n  text-decoration: none;\n  font-size: 1.6rem;\n  padding: 30px;\n  width: auto;\n  line-height: 1.6;\n  display: inline-block;\n  margin: 0;\n}\n\n.header__title {\n  color: #27ad63;\n  margin-top: 15px;\n  font-size: 3.2rem;\n}\n\n.header-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: stretch;\n  height: 80px;\n}\n\n.button-container {\n  display: flex;\n  justify-content: flex-end;\n  align-items: stretch;\n}\n\n.header__logo {\n  width: auto;\n}\n\n.logo {\n  float: left;\n}\n\n.content-container {\n  max-width: 80rem;\n  margin: 0 auto;\n  padding: 0 1.6rem;\n}\n\n.page-header {\n  text-align: center;\n  background-color: lightgreen;\n  padding: 3.2rem 0;\n  margin-bottom: 3.2rem;\n}\n\n.page-header__title {\n  text-align: center;\n  margin: 0;\n  font-weight: 300;\n}\n\n.page-variable {\n  font-weight: 700;\n}\n\n.input-group-container {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 3.2rem;\n}\n\n.input-group__item {\n  margin-right: 10px;\n}\n\n.text-input, .text-area-input, .select-input {\n  border: 1px solid #cacccd;\n  height: 48px;\n  padding: 1.2rem;\n  font-size: 16px;\n}\n\n.text-area-input {\n  height: 10rem;\n}\n\n.form__error {\n  margin: 0 0 1.6rem 0;\n  font-style: italic;\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n}\n.form > * {\n  margin: 0 0 1.6rem 0;\n}\n\n.form-button {\n  background-color: #4a4d57;\n  border: none;\n  color: #27ad63;\n  text-align: center;\n  text-decoration: none;\n  font-size: 1.6rem;\n  padding: 15px;\n  width: auto;\n  display: inline-block;\n  width: 160px;\n}\n\n@media (min-width: 45.1rem) {\n  .show-on-mobile {\n    display: none;\n  }\n}\n\n@media (max-width: 45rem) {\n  .show-on-desktop {\n    display: none;\n  }\n}\n\n.list-header {\n  background: #f7f7f7;\n  border: 1px solid grey;\n  color: grey;\n  display: flex;\n  justify-content: space-between;\n  padding: 1.2rem 1.6rem;\n}\n\n.list-item {\n  display: flex;\n  border: 1px solid grey;\n  border-top: none;\n  padding: 1.6rem;\n  text-decoration: none;\n  justify-content: space-between;\n}\n.list-item:hover {\n  background: #f7f7f7;\n}\n.list-item > * {\n  flex: 1 1;\n}\n\n.lits-item__category {\n  text-align: center;\n}\n\n.lits-item__amount {\n  text-align: right;\n}\n\n.lits-item__title {\n  margin: 0;\n  word-break: break-all;\n}\n\n.lits-item__message {\n  align-items: center;\n  justify-content: center;\n  padding: 1.6rem;\n}\n.lits-item__message:hover {\n  background: none;\n}\n.lits-item__message > * {\n  text-align: center;\n}\n\n.loader--container {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.loader--image {\n  height: 30rem;\n  width: 30rem;\n}", "",{"version":3,"sources":["webpack://src/styles/base/base.scss","webpack://src/styles/style.scss","webpack://src/styles/base/settings.scss","webpack://src/styles/components/_box-layout.scss","webpack://src/styles/components/_button-login.scss","webpack://src/styles/components/_header.scss","webpack://src/styles/components/_content-container.scss","webpack://src/styles/components/_page-header.scss","webpack://src/styles/components/_input-group.scss","webpack://src/styles/components/_inputs.scss","webpack://src/styles/components/_form.scss","webpack://src/styles/components/_visability.scss","webpack://src/styles/components/_list-data.scss","webpack://src/styles/components/_loader.scss"],"names":[],"mappings":"AAAA;EACE,sBAAA;ACCF;;ADEA;EACE,gBAAA;EACA,YAAA;ACCF;;ADEA;EACE,iBAAA;EACA,iDAAA;EACA,iBEVO;EFWP,gBAAA;ACCF;;ADEA;EACE,iBAAA;ACCF;;ADEA;EACE,eAAA;ACCF;;ADEA;EACE,eAAA;ACCF;;ADEA;EACE,UAAA;ACCF;;AE9BA;EACE,mBDSW;ECRX,aAAA;EACA,YAAA;EACA,sBAAA;EACA,mBAAA;EACA,aAAA;EACA,uBAAA;AFiCF;;AE9BA;EACE,kCAAA;EACA,kBAAA;EACA,kBAAA;EACA,YAAA;EACA,eDVO;AD2CT;;AE9BA;EACE,gBAAA;AFiCF;;AGpDA;EACE,6BAAA;EACA,YAAA;EACA,YAAA;EACA,kBAAA;EACA,qBAAA;EACA,iBFJO;EEKP,kBAAA;EACA,kBAAA;EACA,yBAAA;AHuDF;;AGpDA;EACE,uBAAA;EACA,YAAA;AHuDF;;AIrEA;EACE,mBHSW;EGRX,yBHQW;EGPX,kBAAA;EACA,YAAA;AJwEF;;AIrEA;EACE,yBHEW;EGDX,YAAA;EACA,cHCgB;EGAhB,kBAAA;EACA,qBAAA;EACA,iBHXO;EGYP,aAAA;EACA,WAAA;EACA,gBAAA;EACA,qBAAA;EACA,SAAA;AJwEF;;AIrEA;EACE,cHXgB;EGYhB,gBAAA;EACA,iBHnBO;AD2FT;;AIrEA;EACE,aAAA;EACA,8BAAA;EACA,oBAAA;EACA,YAAA;AJwEF;;AIrEA;EACE,aAAA;EACA,yBAAA;EACA,oBAAA;AJwEF;;AIrEA;EACE,WAAA;AJwEF;;AItEA;EACE,WAAA;AJyEF;;AKrHA;EACE,gBAAA;EACA,cAAA;EACA,iBAAA;ALwHF;;AM3HA;EACE,kBAAA;EACA,4BAAA;EACA,iBAAA;EACA,qBLCO;AD6HT;;AM3HA;EACE,kBAAA;EACA,SAAA;EACA,gBAAA;AN8HF;;AM3HA;EACE,gBAAA;AN8HF;;AO5IA;EACE,aAAA;EACA,uBAAA;EACA,qBNEO;AD6IT;;AO5IA;EACE,kBAAA;AP+IF;;AQtJA;EACE,yBAAA;EACA,YAAA;EACA,ePFO;EOGP,eAAA;ARyJF;;AQlJA;EAEE,aAAA;ARoJF;;ASjKA;EACE,oBAAA;EACA,kBAAA;AToKF;;ASjKA;EACE,aAAA;EACA,sBAAA;AToKF;ASnKE;EACE,oBAAA;ATqKJ;;ASjKA;EACE,yBRJW;EQKX,YAAA;EACA,cRLgB;EQMhB,kBAAA;EACA,qBAAA;EACA,iBRjBO;EQkBP,aAAA;EACA,WAAA;EACA,qBAAA;EACA,YAAA;AToKF;;AU1LE;EADF;IAEI,aAAA;EV8LF;AACF;;AU1LE;EADF;IAEI,aAAA;EV8LF;AACF;;AWvMA;EACE,mBAAA;EACA,sBAAA;EACA,WAAA;EACA,aAAA;EACA,8BAAA;EACA,sBAAA;AX0MF;;AWvMA;EACE,aAAA;EACA,sBAAA;EACA,gBAAA;EACA,eVXO;EUYP,qBAAA;EACA,8BAAA;AX0MF;AWzME;EACE,mBAAA;AX2MJ;AWzME;EACE,SAAA;AX2MJ;;AWvMA;EACE,kBAAA;AX0MF;;AWvMA;EACE,iBAAA;AX0MF;;AWvMA;EACE,SAAA;EACA,qBAAA;AX0MF;;AWvMA;EACE,mBAAA;EACA,uBAAA;EACA,eVtCO;ADgPT;AWzME;EACE,gBAAA;AX2MJ;AWzME;EACE,kBAAA;AX2MJ;;AYxPA;EACE,aAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AZ2PF;;AYxPA;EACE,aAAA;EACA,YAAA;AZ2PF","sourcesContent":["* {\n  box-sizing: border-box;\n}\n\nhtml {\n  font-size: 62.5%;\n  height: 100%;\n}\n\nbody {\n  min-height: 100vh;\n  font-family: Roboto, Helvetica, Arial, sans-serif;\n  font-size: $m-size;\n  line-height: 1.6;\n}\n\nh1 {\n  font-size: 2.2rem;\n}\n\nbutton {\n  cursor: pointer;\n}\n\nbutton:disabled {\n  cursor: default;\n}\n\n.is-active {\n  color: red;\n}\n","* {\n  box-sizing: border-box;\n}\n\nhtml {\n  font-size: 62.5%;\n  height: 100%;\n}\n\nbody {\n  min-height: 100vh;\n  font-family: Roboto, Helvetica, Arial, sans-serif;\n  font-size: 1.6rem;\n  line-height: 1.6;\n}\n\nh1 {\n  font-size: 2.2rem;\n}\n\nbutton {\n  cursor: pointer;\n}\n\nbutton:disabled {\n  cursor: default;\n}\n\n.is-active {\n  color: red;\n}\n\n.box-layout {\n  background: #4a4d57;\n  height: 100vh;\n  width: 100vw;\n  background-size: cover;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.box-layout__box {\n  background: rgba(74, 77, 87, 0.65);\n  border-radius: 5px;\n  text-align: center;\n  width: 25rem;\n  padding: 3.2rem;\n}\n\n.box-layout__title {\n  margin: 1.6rem 0;\n}\n\n.button-login {\n  background-color: floralwhite;\n  border: none;\n  color: green;\n  text-align: center;\n  text-decoration: none;\n  font-size: 1.6rem;\n  padding: 10px 24px;\n  border-radius: 8px;\n  transition-duration: 0.4s;\n}\n\n.button-login:hover {\n  background-color: green;\n  color: white;\n}\n\n.header {\n  background: #4a4d57;\n  background-color: #4a4d57;\n  text-align: center;\n  height: 80px;\n}\n\n.header__buttons {\n  background-color: #4a4d57;\n  border: none;\n  color: #27ad63;\n  text-align: center;\n  text-decoration: none;\n  font-size: 1.6rem;\n  padding: 30px;\n  width: auto;\n  line-height: 1.6;\n  display: inline-block;\n  margin: 0;\n}\n\n.header__title {\n  color: #27ad63;\n  margin-top: 15px;\n  font-size: 3.2rem;\n}\n\n.header-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: stretch;\n  height: 80px;\n}\n\n.button-container {\n  display: flex;\n  justify-content: flex-end;\n  align-items: stretch;\n}\n\n.header__logo {\n  width: auto;\n}\n\n.logo {\n  float: left;\n}\n\n.content-container {\n  max-width: 80rem;\n  margin: 0 auto;\n  padding: 0 1.6rem;\n}\n\n.page-header {\n  text-align: center;\n  background-color: lightgreen;\n  padding: 3.2rem 0;\n  margin-bottom: 3.2rem;\n}\n\n.page-header__title {\n  text-align: center;\n  margin: 0;\n  font-weight: 300;\n}\n\n.page-variable {\n  font-weight: 700;\n}\n\n.input-group-container {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 3.2rem;\n}\n\n.input-group__item {\n  margin-right: 10px;\n}\n\n.text-input, .text-area-input, .select-input {\n  border: 1px solid #cacccd;\n  height: 48px;\n  padding: 1.2rem;\n  font-size: 16px;\n}\n\n.text-area-input {\n  height: 10rem;\n}\n\n.form__error {\n  margin: 0 0 1.6rem 0;\n  font-style: italic;\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n}\n.form > * {\n  margin: 0 0 1.6rem 0;\n}\n\n.form-button {\n  background-color: #4a4d57;\n  border: none;\n  color: #27ad63;\n  text-align: center;\n  text-decoration: none;\n  font-size: 1.6rem;\n  padding: 15px;\n  width: auto;\n  display: inline-block;\n  width: 160px;\n}\n\n@media (min-width: 45.1rem) {\n  .show-on-mobile {\n    display: none;\n  }\n}\n\n@media (max-width: 45rem) {\n  .show-on-desktop {\n    display: none;\n  }\n}\n\n.list-header {\n  background: #f7f7f7;\n  border: 1px solid grey;\n  color: grey;\n  display: flex;\n  justify-content: space-between;\n  padding: 1.2rem 1.6rem;\n}\n\n.list-item {\n  display: flex;\n  border: 1px solid grey;\n  border-top: none;\n  padding: 1.6rem;\n  text-decoration: none;\n  justify-content: space-between;\n}\n.list-item:hover {\n  background: #f7f7f7;\n}\n.list-item > * {\n  flex: 1 1 0;\n}\n\n.lits-item__category {\n  text-align: center;\n}\n\n.lits-item__amount {\n  text-align: right;\n}\n\n.lits-item__title {\n  margin: 0;\n  word-break: break-all;\n}\n\n.lits-item__message {\n  align-items: center;\n  justify-content: center;\n  padding: 1.6rem;\n}\n.lits-item__message:hover {\n  background: none;\n}\n.lits-item__message > * {\n  text-align: center;\n}\n\n.loader--container {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.loader--image {\n  height: 30rem;\n  width: 30rem;\n}","//size\n$s-size: 1.2rem;\n$m-size: 1.6rem;\n$m2-size: 2.2rem;\n$l-mobile-size: 2.4rem;\n$l-size: 3.2rem;\n$xl-size: 4.8rem;\n$desktop_breakpoint: 45rem;\n\n//color\n$main-color: #4a4d57;\n$secondary-color: #27ad63;\n",".box-layout {\n  background: $main-color;\n  height: 100vh;\n  width: 100vw;\n  background-size: cover;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.box-layout__box {\n  background: fade-out($color: $main-color, $amount: 0.35);\n  border-radius: 5px;\n  text-align: center;\n  width: 25rem;\n  padding: $l-size;\n}\n\n.box-layout__title {\n  margin: $m-size 0;\n}\n",".button-login {\n  background-color: floralwhite;\n  border: none;\n  color: green;\n  text-align: center;\n  text-decoration: none;\n  font-size: $m-size;\n  padding: 10px 24px;\n  border-radius: 8px;\n  transition-duration: 0.4s;\n}\n\n.button-login:hover {\n  background-color: green;\n  color: white;\n}\n",".header {\n  background: $main-color;\n  background-color: $main-color;\n  text-align: center;\n  height: 80px;\n}\n\n.header__buttons {\n  background-color: $main-color;\n  border: none;\n  color: $secondary-color;\n  text-align: center;\n  text-decoration: none;\n  font-size: $m-size;\n  padding: 30px;\n  width: auto;\n  line-height: 1.6;\n  display: inline-block;\n  margin: 0;\n}\n\n.header__title {\n  color: $secondary-color;\n  margin-top: 15px;\n  font-size: $l-size;\n}\n\n.header-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: stretch;\n  height: 80px;\n}\n\n.button-container {\n  display: flex;\n  justify-content: flex-end;\n  align-items: stretch;\n}\n\n.header__logo {\n  width: auto;\n}\n.logo {\n  float: left;\n}\n",".content-container {\n  max-width: 80rem;\n  margin: 0 auto;\n  padding: 0 $m-size;\n}\n",".page-header {\n  text-align: center;\n  background-color: lightgreen;\n  padding: $l-size 0;\n  margin-bottom: $l-size;\n}\n\n.page-header__title {\n  text-align: center;\n  margin: 0;\n  font-weight: 300;\n}\n\n.page-variable {\n  font-weight: 700;\n}\n",".input-group-container {\n  display: flex;\n  justify-content: center;\n  margin-bottom: $l-size;\n}\n\n.input-group__item {\n  margin-right: 10px;\n}\n",".text-input {\n  border: 1px solid #cacccd;\n  height: 48px;\n  padding: $s-size;\n  font-size: 16px;\n}\n\n.select-input {\n  @extend .text-input;\n}\n\n.text-area-input {\n  @extend .text-input;\n  height: 10rem;\n}\n",".form__error {\n  margin: 0 0 $m-size 0;\n  font-style: italic;\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n  > * {\n    margin: 0 0 $m-size 0;\n  }\n}\n\n.form-button {\n  background-color: $main-color;\n  border: none;\n  color: $secondary-color;\n  text-align: center;\n  text-decoration: none;\n  font-size: $m-size;\n  padding: 15px;\n  width: auto;\n  display: inline-block;\n  width: 160px;\n}\n",".show-on-mobile {\n  @media (min-width: $desktop_breakpoint + 0.1rem) {\n    display: none;\n  }\n}\n\n.show-on-desktop {\n  @media (max-width: $desktop_breakpoint) {\n    display: none;\n  }\n}\n",".list-header {\n  background: #f7f7f7;\n  border: 1px solid grey;\n  color: grey;\n  display: flex;\n  justify-content: space-between;\n  padding: $s-size $m-size;\n}\n\n.list-item {\n  display: flex;\n  border: 1px solid grey;\n  border-top: none;\n  padding: $m-size;\n  text-decoration: none;\n  justify-content: space-between;\n  &:hover {\n    background: #f7f7f7;\n  }\n  > * {\n    flex: 1 1 0;\n  }\n}\n\n.lits-item__category {\n  text-align: center;\n}\n\n.lits-item__amount {\n  text-align: right;\n}\n\n.lits-item__title {\n  margin: 0;\n  word-break: break-all;\n}\n\n.lits-item__message {\n  align-items: center;\n  justify-content: center;\n  padding: $m-size;\n  &:hover {\n    background: none;\n  }\n  > * {\n    text-align: center;\n  }\n}\n",".loader--container {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.loader--image {\n  height: 30rem;\n  width: 30rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/actions/authentication.js":
/*!***************************************!*\
  !*** ./src/actions/authentication.js ***!
  \***************************************/
/*! exports provided: login, startLogin, logout, clearExpenseState, startLogOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startLogin", function() { return startLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearExpenseState", function() { return clearExpenseState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startLogOut", function() { return startLogOut; });
/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../firebase/firebase */ "./src/firebase/firebase.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



const login = uid => ({
  type: "LOGIN",
  uid
});
const startLogin = () => {
  return () => Object(firebase_auth__WEBPACK_IMPORTED_MODULE_1__["signInWithPopup"])(Object(firebase_auth__WEBPACK_IMPORTED_MODULE_1__["getAuth"])(), _firebase_firebase__WEBPACK_IMPORTED_MODULE_0__["googleProvider"]);
};
const logout = () => ({
  type: "LOGOUT"
});
const clearExpenseState = () => ({
  type: "CLEAR"
});
const startLogOut = () => {
  return () => Object(firebase_auth__WEBPACK_IMPORTED_MODULE_1__["signOut"])(Object(firebase_auth__WEBPACK_IMPORTED_MODULE_1__["getAuth"])());
};

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/AddExpense.js":
/*!**************************************!*\
  !*** ./src/components/AddExpense.js ***!
  \**************************************/
/*! exports provided: AddExpense, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddExpense", function() { return AddExpense; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ExpenseForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExpenseForm */ "./src/components/ExpenseForm.js");
/* harmony import */ var _redux_actions_expenses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actions/expenses */ "./src/redux/actions/expenses.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/gkonstantinov/Desktop/React/03/React_Budget_App/src/components/AddExpense.js";





const AddExpense = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    className: "page-header",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "content-container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h1", {
        children: "Add an expense"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ExpenseForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onSubmit: expense => {
      props.onSubmit(expense);
      props.history.push("/dashboard");
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 3
}, undefined);
_c = AddExpense;

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: expense => dispatch(Object(_redux_actions_expenses__WEBPACK_IMPORTED_MODULE_3__["startAddExpense"])(expense))
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(undefined, mapDispatchToProps)(AddExpense));

var _c;

__webpack_require__.$Refresh$.register(_c, "AddExpense");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/EditExpense.js":
/*!***************************************!*\
  !*** ./src/components/EditExpense.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ExpenseForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExpenseForm */ "./src/components/ExpenseForm.js");
/* harmony import */ var _redux_actions_expenses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actions/expenses */ "./src/redux/actions/expenses.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/gkonstantinov/Desktop/React/03/React_Budget_App/src/components/EditExpense.js";






const EditExpense = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "page-header",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "content-container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h1", {
          children: "Modify an expense"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ExpenseForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
      modify: true,
      expense: props.expenses,
      onSubmit: expense => {
        props.dispatch(Object(_redux_actions_expenses__WEBPACK_IMPORTED_MODULE_3__["startModifyExpense"])(props.expenses.id, expense));
        props.history.push("/dashboard");
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "content-container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
        className: "form-button",
        onClick: () => {
          props.dispatch(Object(_redux_actions_expenses__WEBPACK_IMPORTED_MODULE_3__["startRemoveExpense"])(props.expenses.id));
          props.history.push("/dashboard");
        },
        children: "Remove Expense"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined);
};

_c = EditExpense;

const mapStateToProps = (state, props) => {
  return {
    expenses: state.expenses.find(expense => expense.id === props.match.params.id)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(EditExpense));

var _c;

__webpack_require__.$Refresh$.register(_c, "EditExpense");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/ExpenseForm.js":
/*!***************************************!*\
  !*** ./src/components/ExpenseForm.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_dates_initialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dates/initialize */ "./node_modules/react-dates/initialize.js");
/* harmony import */ var react_dates_initialize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dates_initialize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dates */ "./node_modules/react-dates/index.js");
/* harmony import */ var react_dates__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dates__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/gkonstantinov/Desktop/React/03/React_Budget_App/src/components/ExpenseForm.js",
    _s = __webpack_require__.$Refresh$.signature();








const ExpenseForm = props => {
  _s();

  const [state, setState] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    description: props.expense ? props.expense.description : "",
    note: props.expense ? props.expense.note : "",
    amount: props.expense ? (props.expense.amount / 100).toString() : "",
    calendarFocused: false
  });
  const [dateState, setDateState] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    createdAt: props.expense ? moment__WEBPACK_IMPORTED_MODULE_2___default()(props.expense.createdAt) : moment__WEBPACK_IMPORTED_MODULE_2___default()()
  });
  const [errorState, setErrorState] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    error: false
  });

  const onDateChange = date => date ? setDateState({
    createdAt: date
  }) : dateState.createdAt;

  const onFocusChange = ({
    focused
  }) => {
    setState({ ...state,
      calendarFocused: focused
    });
  };

  const onSubmit = e => {
    e.preventDefault();

    if (!state.description || !state.amount) {
      setErrorState({
        error: true
      });
    } else {
      setErrorState({
        error: false
      });
      props.onSubmit({ ...state,
        amount: parseFloat(state.amount, 10) * 100,
        createdAt: dateState.createdAt.valueOf()
      });
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    className: "content-container",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("form", {
      className: "form",
      onSubmit: onSubmit,
      children: [errorState.error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
        className: "form__error",
        children: "Please note that both description and amount are mandatory"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
        className: "text-input form__element",
        type: "text",
        placeholder: "Description",
        autoFocus: true,
        value: state.description,
        onChange: e => setState({ ...state,
          description: e.target.value
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
        className: "text-input form__element",
        type: "text",
        placeholder: "Amount",
        value: state.amount,
        onChange: e => {
          let amount = e.target.value;

          if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/gm)) {
            setState({ ...state,
              amount: amount
            });
          }
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_dates__WEBPACK_IMPORTED_MODULE_3__["SingleDatePicker"], {
        date: dateState.createdAt,
        onDateChange: onDateChange,
        focused: state.calendarFocused,
        onFocusChange: onFocusChange,
        numberOfMonths: 1,
        isOutsideRange: () => false
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("textarea", {
        className: "text-area-input form__element",
        placeholder: "Add a note (optional)",
        value: state.note,
        onChange: e => setState({ ...state,
          note: e.target.value
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
          className: "form-button ",
          children: props.modify ? "Modify Expense" : "Add Expense"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, undefined);
};

_s(ExpenseForm, "MaAt/FZ81ROP98Rg3i6rheREJSg=");

_c = ExpenseForm;
/* harmony default export */ __webpack_exports__["default"] = (ExpenseForm);

var _c;

__webpack_require__.$Refresh$.register(_c, "ExpenseForm");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/ExpenseList.js":
/*!***************************************!*\
  !*** ./src/components/ExpenseList.js ***!
  \***************************************/
/*! exports provided: ExpenseList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseList", function() { return ExpenseList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ExpenseListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExpenseListItem */ "./src/components/ExpenseListItem.js");
/* harmony import */ var _redux_selectors_expenses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/selectors/expenses */ "./src/redux/selectors/expenses.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/gkonstantinov/Desktop/React/03/React_Budget_App/src/components/ExpenseList.js";





const ExpenseList = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
  className: "content-container ",
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    className: "list-header",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "show-on-mobile",
      children: "Expenses"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "show-on-desktop",
      children: "Expense"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "show-on-desktop",
      children: "Category"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "show-on-desktop",
      children: "Amount"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined), props.expenses.length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    className: "list-item lits-item__message",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
      children: "There are no expenses to show"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 7
  }, undefined) : props.expenses.map(element => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ExpenseListItem__WEBPACK_IMPORTED_MODULE_2__["default"], { ...element
    }, element.id, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 16
    }, undefined);
  })]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 3
}, undefined);
_c = ExpenseList;

const mapStateToProps = state => {
  return {
    expenses: Object(_redux_selectors_expenses__WEBPACK_IMPORTED_MODULE_3__["default"])(state.expenses, state.filters)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(ExpenseList));

var _c;

__webpack_require__.$Refresh$.register(_c, "ExpenseList");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/ExpenseListFilters.js":
/*!**********************************************!*\
  !*** ./src/components/ExpenseListFilters.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/actions/filters */ "./src/redux/actions/filters.js");
/* harmony import */ var react_dates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dates */ "./node_modules/react-dates/index.js");
/* harmony import */ var react_dates__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dates__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/gkonstantinov/Desktop/React/03/React_Budget_App/src/components/ExpenseListFilters.js",
    _s = __webpack_require__.$Refresh$.signature();








const ExpenseListFilters = props => {
  _s();

  const [state, setState] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    calendarFocus: null
  });

  const onDatesChange = ({
    startDate,
    endDate
  }) => {
    props.dispatch(Object(_redux_actions_filters__WEBPACK_IMPORTED_MODULE_2__["setStartDate"])(startDate));
    props.dispatch(Object(_redux_actions_filters__WEBPACK_IMPORTED_MODULE_2__["setEndDate"])(endDate));
  };

  const onFocusChange = calendarFocus => {
    setState(() => ({
      calendarFocus
    }));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    className: "content-container",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "input-group-container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "input-group__item",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
          className: "text-input",
          type: "text",
          placeholder: "Search expense",
          value: props.filters.text,
          onChange: event => {
            props.dispatch(Object(_redux_actions_filters__WEBPACK_IMPORTED_MODULE_2__["filterText"])(event.target.value));
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "input-group__item",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("select", {
          className: "select-input",
          value: props.filters.sortBy,
          onChange: event => {
            if (event.target.value === "date") {
              props.dispatch(Object(_redux_actions_filters__WEBPACK_IMPORTED_MODULE_2__["sortByDate"])(event.target.value));
            } else if (event.target.value === "amount") {
              props.dispatch(Object(_redux_actions_filters__WEBPACK_IMPORTED_MODULE_2__["sortByAmount"])(event.target.value));
            }
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("option", {
            value: "date",
            children: "Date"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("option", {
            value: "amount",
            children: "Amount"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "input-group__item",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_dates__WEBPACK_IMPORTED_MODULE_3__["DateRangePicker"], {
          startDate: props.filters.startDate // momentPropTypes.momentObj or null,
          ,
          endDate: props.filters.endDate // momentPropTypes.momentObj or null,
          ,
          onDatesChange: onDatesChange // PropTypes.func.isRequired,
          ,
          focusedInput: state.calendarFocus // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          ,
          onFocusChange: onFocusChange // PropTypes.func.isRequired,
          ,
          numberOfMonths: 1,
          isOutsideRange: () => false,
          showClearDates: true,
          keepOpenOnDateSelect: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, undefined);
};

_s(ExpenseListFilters, "hV0AdN1l+F+juoS81OVDHTagHUI=");

_c = ExpenseListFilters;

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(ExpenseListFilters));

var _c;

__webpack_require__.$Refresh$.register(_c, "ExpenseListFilters");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/ExpenseListItem.js":
/*!*******************************************!*\
  !*** ./src/components/ExpenseListItem.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/gkonstantinov/Desktop/React/03/React_Budget_App/src/components/ExpenseListItem.js";






const ExpensesListItem = ({
  id,
  description,
  category,
  amount,
  createdAt
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
  className: "list-item",
  to: `/edit/${id}`,
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h3", {
      className: "lits-item__title",
      children: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
      children: moment__WEBPACK_IMPORTED_MODULE_1___default()(createdAt).format("DD.MMM.YYYY")
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    className: "lits-item__category",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h3", {
      children: category
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    className: "lits-item__amount",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h3", {
      children: ["\u20AC", numeral__WEBPACK_IMPORTED_MODULE_3___default()(amount / 100).format("0,0.00")]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 3
}, undefined);

_c = ExpensesListItem;
/* harmony default export */ __webpack_exports__["default"] = (ExpensesListItem);

var _c;

__webpack_require__.$Refresh$.register(_c, "ExpensesListItem");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/ExpensesDashboard.js":
/*!*********************************************!*\
  !*** ./src/components/ExpensesDashboard.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ExpenseList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExpenseList */ "./src/components/ExpenseList.js");
/* harmony import */ var _ExpenseListFilters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExpenseListFilters */ "./src/components/ExpenseListFilters.js");
/* harmony import */ var _ExpensesSummary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ExpensesSummary */ "./src/components/ExpensesSummary.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/gkonstantinov/Desktop/React/03/React_Budget_App/src/components/ExpensesDashboard.js";






const ExpensesDashboard = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ExpensesSummary__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ExpenseListFilters__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ExpenseList__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 3
}, undefined);

_c = ExpensesDashboard;
/* harmony default export */ __webpack_exports__["default"] = (ExpensesDashboard);

var _c;

__webpack_require__.$Refresh$.register(_c, "ExpensesDashboard");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/ExpensesSummary.js":
/*!*******************************************!*\
  !*** ./src/components/ExpensesSummary.js ***!
  \*******************************************/
/*! exports provided: ExpensesSummary, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensesSummary", function() { return ExpensesSummary; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_selectors_expenses_total__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/selectors/expenses-total */ "./src/redux/selectors/expenses-total.js");
/* harmony import */ var _redux_selectors_expenses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/selectors/expenses */ "./src/redux/selectors/expenses.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/gkonstantinov/Desktop/React/03/React_Budget_App/src/components/ExpensesSummary.js";






const ExpensesSummary = props => {
  const totalAmount = numeral__WEBPACK_IMPORTED_MODULE_4___default()(Object(_redux_selectors_expenses_total__WEBPACK_IMPORTED_MODULE_1__["getExpensesTotal"])(props.expenses) / 100).format("0,0.00");
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
    className: "page-header",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: "content-container",
      children: props.expenses.length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 11
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h1", {
        className: "page-header__title",
        children: props.expenses.length === 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          children: ["Viewing 1 expense in total = \u20AC", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
            className: "page-variable",
            children: totalAmount
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 15
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          children: ["Viewing", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
            className: "page-variable",
            children: props.expenses.length
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 17
          }, undefined), " ", "expenses in total =", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
            className: "page-variable",
            children: ["\u20AC", totalAmount]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined);
};
_c = ExpensesSummary;

const mapStateToProps = state => {
  return {
    expenses: Object(_redux_selectors_expenses__WEBPACK_IMPORTED_MODULE_2__["default"])(state.expenses, state.filters)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(ExpensesSummary));

var _c;

__webpack_require__.$Refresh$.register(_c, "ExpensesSummary");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _actions_authentication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/authentication */ "./src/actions/authentication.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _images_logo03_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/logo03.png */ "./src/images/logo03.png");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/gkonstantinov/Desktop/React/03/React_Budget_App/src/components/Header.js";







const Header = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("header", {
  className: "header",
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
    className: "header-container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: "header__logo",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
        className: "logo",
        src: _images_logo03_png__WEBPACK_IMPORTED_MODULE_4__["default"],
        alt: "Logo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h1", {
        className: "header__title",
        children: "Budget App"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: "button-container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        className: "header__buttons",
        to: "/dashboard",
        activeClassName: "is-active",
        children: "DASHBOARD"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        className: "header__buttons",
        to: "/create",
        activeClassName: "is-active",
        children: "CREATE"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        className: "header__buttons",
        to: "/help",
        activeClassName: "is-active",
        children: "HELP"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("button", {
        className: "header__buttons",
        onClick: props.signOut,
        children: "LOGOUT"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 8,
  columnNumber: 3
}, undefined);

_c = Header;

const mapDispatchToProps = dispatch => ({
  signOut: () => {
    dispatch(Object(_actions_authentication__WEBPACK_IMPORTED_MODULE_2__["startLogOut"])());
  }
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(undefined, mapDispatchToProps)(Header));

var _c;

__webpack_require__.$Refresh$.register(_c, "Header");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Help.js":
/*!********************************!*\
  !*** ./src/components/Help.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/gkonstantinov/Desktop/React/03/React_Budget_App/src/components/Help.js";



const Help = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
  children: "Test Help"
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 3,
  columnNumber: 20
}, undefined);

_c = Help;
/* harmony default export */ __webpack_exports__["default"] = (Help);

var _c;

__webpack_require__.$Refresh$.register(_c, "Help");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/LoadingPage.js":
/*!***************************************!*\
  !*** ./src/components/LoadingPage.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_material_design_loading_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/material_design_loading.gif */ "./src/images/material_design_loading.gif");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/gkonstantinov/Desktop/React/03/React_Budget_App/src/components/LoadingPage.js";




const LoadingPage = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
  className: "loader--container",
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
    className: "loader--image",
    src: _images_material_design_loading_gif__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: "Loading"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 5,
  columnNumber: 3
}, undefined);

_c = LoadingPage;
/* harmony default export */ __webpack_exports__["default"] = (LoadingPage);

var _c;

__webpack_require__.$Refresh$.register(_c, "LoadingPage");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/LoggingPage.js":
/*!***************************************!*\
  !*** ./src/components/LoggingPage.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_authentication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/authentication */ "./src/actions/authentication.js");
/* harmony import */ var _images_google_48_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/google-48.png */ "./src/images/google-48.png");
/* harmony import */ var _images_logo_main_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/logo_main.png */ "./src/images/logo_main.png");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/gkonstantinov/Desktop/React/03/React_Budget_App/src/components/LoggingPage.js";







const LoggingPage = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
    className: "box-layout",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: "box-layout__box",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("image", {
        className: "main_logo",
        src: _images_logo_main_png__WEBPACK_IMPORTED_MODULE_4__["default"],
        alt: "logo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h1", {
        className: "box-layout__title",
        children: "Welcome to your Budget Application"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
        children: "Here you will control your expenses"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("button", {
        className: "button-login",
        onClick: props.startLogin,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
          className: "logging_logo",
          src: _images_google_48_png__WEBPACK_IMPORTED_MODULE_3__["default"],
          alt: "GLogo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          children: "Login with Google"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

_c = LoggingPage;

const mapDispatchToProps = dispatch => ({
  startLogin: () => {
    dispatch(Object(_actions_authentication__WEBPACK_IMPORTED_MODULE_2__["startLogin"])());
  }
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(undefined, mapDispatchToProps)(LoggingPage));

var _c;

__webpack_require__.$Refresh$.register(_c, "LoggingPage");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/PageNotFound.js":
/*!****************************************!*\
  !*** ./src/components/PageNotFound.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/gkonstantinov/Desktop/React/03/React_Budget_App/src/components/PageNotFound.js";




const PageNotFound = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
  children: ["404 Page Not found ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/dashboard",
    children: "Go Home"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 24
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 5,
  columnNumber: 3
}, undefined);

_c = PageNotFound;
/* harmony default export */ __webpack_exports__["default"] = (PageNotFound);

var _c;

__webpack_require__.$Refresh$.register(_c, "PageNotFound");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/firebase/firebase.js":
/*!**********************************!*\
  !*** ./src/firebase/firebase.js ***!
  \**********************************/
/*! exports provided: myDatabase, databaseReference, googleProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myDatabase", function() { return myDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "databaseReference", function() { return databaseReference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "googleProvider", function() { return googleProvider; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/database */ "./node_modules/firebase/database/dist/index.esm.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);




const envConfig = {
  apiKey: "AIzaSyByOJ50yZpIeoelHKdlQ1Ho-yUUxs8W7g4",
  authDomain: "my-budget-app-8771a.firebaseapp.com",
  databaseURL: "https://my-budget-app-8771a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "my-budget-app-8771a",
  storageBucket: "my-budget-app-8771a.appspot.com",
  messagingSenderId: "239784903467",
  appId: "1:239784903467:web:70aba8e327ede755d87b6e",
  measurementId: "G-CG0CTE9NLL"
};
const app = Object(firebase_app__WEBPACK_IMPORTED_MODULE_0__["initializeApp"])(envConfig);
const googleProvider = new firebase_auth__WEBPACK_IMPORTED_MODULE_2__["GoogleAuthProvider"]();
const myDatabase = Object(firebase_database__WEBPACK_IMPORTED_MODULE_1__["getDatabase"])(app);
const databaseReference = Object(firebase_database__WEBPACK_IMPORTED_MODULE_1__["ref"])(myDatabase);


const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/images/google-48.png":
/*!**********************************!*\
  !*** ./src/images/google-48.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/images/logo03.png":
/*!*******************************!*\
  !*** ./src/images/logo03.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/logo03.3069dcac.png");

/***/ }),

/***/ "./src/images/logo_main.png":
/*!**********************************!*\
  !*** ./src/images/logo_main.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/images/material_design_loading.gif":
/*!************************************************!*\
  !*** ./src/images/material_design_loading.gif ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/material_design_loading.6497b438.gif");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_app_polyfill_ie9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-app-polyfill/ie9 */ "./node_modules/react-app-polyfill/ie9.js");
/* harmony import */ var react_app_polyfill_ie9__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_app_polyfill_ie9__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _routers_AppRouter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routers/AppRouter */ "./src/routers/AppRouter.js");
/* harmony import */ var _redux_store_configureStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./redux/store/configureStore */ "./src/redux/store/configureStore.js");
/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./firebase/firebase */ "./src/firebase/firebase.js");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dates_lib_css_datepicker_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dates/lib/css/_datepicker.css */ "./node_modules/react-dates/lib/css/_datepicker.css");
/* harmony import */ var react_dates_lib_css_datepicker_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dates_lib_css_datepicker_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _src_redux_actions_expenses__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/redux/actions/expenses */ "./src/redux/actions/expenses.js");
/* harmony import */ var _src_actions_authentication__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/actions/authentication */ "./src/actions/authentication.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var typeface_roboto__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! typeface-roboto */ "./node_modules/typeface-roboto/index.css");
/* harmony import */ var typeface_roboto__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(typeface_roboto__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_LoadingPage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/LoadingPage */ "./src/components/LoadingPage.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/gkonstantinov/Desktop/React/03/React_Budget_App/src/index.js";
















const store = Object(_redux_store_configureStore__WEBPACK_IMPORTED_MODULE_5__["default"])();
let hasRendered = false;

const rederApp = () => {
  if (!hasRendered) {
    react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render(jsx, document.getElementById("root"));
    hasRendered = true;
  }
};

const jsx = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
  store: store,
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_routers_AppRouter__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 33,
  columnNumber: 3
}, undefined);

react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_components_LoadingPage__WEBPACK_IMPORTED_MODULE_14__["default"], {}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 38,
  columnNumber: 17
}, undefined), document.getElementById("root"));

const loading = async () => {
  store.dispatch(Object(_src_redux_actions_expenses__WEBPACK_IMPORTED_MODULE_10__["startSetExpenses"])());
  return true;
};

Object(firebase_auth__WEBPACK_IMPORTED_MODULE_12__["onAuthStateChanged"])(Object(firebase_auth__WEBPACK_IMPORTED_MODULE_12__["getAuth"])(), user => {
  if (user) {
    store.dispatch(Object(_src_actions_authentication__WEBPACK_IMPORTED_MODULE_11__["login"])(user.uid));
    loading().then(() => {
      rederApp();

      if (_routers_AppRouter__WEBPACK_IMPORTED_MODULE_4__["history"].location.pathname === "/") {
        _routers_AppRouter__WEBPACK_IMPORTED_MODULE_4__["history"].push("/dashboard");
      }
    });
  } else {
    store.dispatch(Object(_src_actions_authentication__WEBPACK_IMPORTED_MODULE_11__["logout"])());
    store.dispatch(Object(_src_actions_authentication__WEBPACK_IMPORTED_MODULE_11__["clearExpenseState"])());
    rederApp();
    _routers_AppRouter__WEBPACK_IMPORTED_MODULE_4__["history"].push("/");
  }
});

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/redux/actions/expenses.js":
/*!***************************************!*\
  !*** ./src/redux/actions/expenses.js ***!
  \***************************************/
/*! exports provided: addExpense, startAddExpense, removeExpense, startRemoveExpense, modifyExpense, startModifyExpense, setExpenses, startSetExpenses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addExpense", function() { return addExpense; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startAddExpense", function() { return startAddExpense; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeExpense", function() { return removeExpense; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startRemoveExpense", function() { return startRemoveExpense; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifyExpense", function() { return modifyExpense; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startModifyExpense", function() { return startModifyExpense; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setExpenses", function() { return setExpenses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startSetExpenses", function() { return startSetExpenses; });
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/database */ "./node_modules/firebase/database/dist/index.esm.js");
/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../firebase/firebase */ "./src/firebase/firebase.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



const addExpense = expenses => ({
  type: "ADD_EXPENSE",
  expenses
});
const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const userUid = getState().auth.uid;
    const {
      description = "Description not available",
      category = "Others",
      note = "",
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = {
      description,
      category,
      note,
      amount,
      createdAt
    };
    Object(firebase_database__WEBPACK_IMPORTED_MODULE_0__["push"])(Object(firebase_database__WEBPACK_IMPORTED_MODULE_0__["child"])(_firebase_firebase__WEBPACK_IMPORTED_MODULE_1__["databaseReference"], `users/${userUid}`), expense).then(reference => {
      dispatch(addExpense({
        id: reference.key,
        ...expense
      }));
    });
  };
};
const removeExpense = (id = "") => ({
  type: "REMOVE_EXPENSE",
  id
});
const startRemoveExpense = id => {
  return async (dispatch, getState) => {
    const userUid = getState().auth.uid;
    await Object(firebase_database__WEBPACK_IMPORTED_MODULE_0__["remove"])(Object(firebase_database__WEBPACK_IMPORTED_MODULE_0__["ref"])(_firebase_firebase__WEBPACK_IMPORTED_MODULE_1__["myDatabase"], `users/${userUid}/${id}`));
    dispatch(removeExpense(id));
  };
};
const modifyExpense = (id, updates) => ({
  type: "MODIFY_EXPENSE",
  id,
  updates
});
const startModifyExpense = (id, updates) => {
  return async (dispatch, getState) => {
    const userUid = getState().auth.uid;
    await Object(firebase_database__WEBPACK_IMPORTED_MODULE_0__["update"])(Object(firebase_database__WEBPACK_IMPORTED_MODULE_0__["ref"])(_firebase_firebase__WEBPACK_IMPORTED_MODULE_1__["myDatabase"], `users/${userUid}/${id}`), updates);
    dispatch(modifyExpense(id, updates));
  };
};
const setExpenses = expenses => ({
  type: "SET_EXPENSES",
  expenses
});
const startSetExpenses = () => {
  return (dispatch, getState) => {
    const userUid = getState().auth.uid;
    Object(firebase_database__WEBPACK_IMPORTED_MODULE_0__["onValue"])(Object(firebase_database__WEBPACK_IMPORTED_MODULE_0__["child"])(_firebase_firebase__WEBPACK_IMPORTED_MODULE_1__["databaseReference"], `users/${userUid}`), snapshot => {
      const expenses = [];
      const snapshotValue = snapshot.val() ? snapshot.val() : [];
      Object.entries(snapshotValue).forEach(([key, val]) => {
        const expense = {
          id: key,
          ...val
        };
        expenses.push(expense);
      });
      dispatch(setExpenses([...expenses]));
    }, {
      onlyOnce: true
    });
  };
};

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/redux/actions/filters.js":
/*!**************************************!*\
  !*** ./src/redux/actions/filters.js ***!
  \**************************************/
/*! exports provided: filterText, sortByAmount, sortByDate, setStartDate, setEndDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterText", function() { return filterText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByAmount", function() { return sortByAmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByDate", function() { return sortByDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStartDate", function() { return setStartDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEndDate", function() { return setEndDate; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const filterText = (text = "") => ({
  type: "FILTER_TEXT",
  text
});
const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
});
const sortByDate = () => ({
  type: "SORT_BY_DATE"
});
const setStartDate = date => ({
  type: "SET_START_DATE",
  date
});
const setEndDate = date => ({
  type: "SET_END_DATE",
  date
});

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/redux/redusers/auth.js":
/*!************************************!*\
  !*** ./src/redux/redusers/auth.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        uid: action.uid
      };

    case "LOGOUT":
      return {};

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (authReducer);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/redux/redusers/expenses.js":
/*!****************************************!*\
  !*** ./src/redux/redusers/expenses.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const expenseReducerDefaultState = [];

const expensesReducer = (state = expenseReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expenses];

    case "REMOVE_EXPENSE":
      return state.filter(element => element.id !== action.id);

    case "SET_EXPENSES":
      return state.concat(action.expenses);

    case "MODIFY_EXPENSE":
      return state.map(expenses => {
        if (expenses.id === action.id) {
          return { ...expenses,
            ...action.updates
          };
        } else {
          return expenses;
        }
      });

    case "CLEAR":
      return [];

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (expensesReducer);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/redux/redusers/filters.js":
/*!***************************************!*\
  !*** ./src/redux/redusers/filters.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("month"),
  endDate: moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf("month")
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "FILTER_TEXT":
      return { ...state,
        text: action.text
      };

    case "SORT_BY_AMOUNT":
      return { ...state,
        sortBy: "amount"
      };

    case "SORT_BY_DATE":
      return { ...state,
        sortBy: "date"
      };

    case "SET_START_DATE":
      return { ...state,
        startDate: action.date
      };

    case "SET_END_DATE":
      return { ...state,
        endDate: action.date
      };

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (filtersReducer);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/redux/selectors/expenses-total.js":
/*!***********************************************!*\
  !*** ./src/redux/selectors/expenses-total.js ***!
  \***********************************************/
/*! exports provided: getExpensesTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExpensesTotal", function() { return getExpensesTotal; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const getExpensesTotal = (expenses = []) => expenses.map(expense => expense.amount).reduce((total, expense) => total + expense, 0);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/redux/selectors/expenses.js":
/*!*****************************************!*\
  !*** ./src/redux/selectors/expenses.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



const getVisibleExpenses = (expenses, {
  text,
  sortBy,
  startDate,
  endDate
}) => {
  return expenses.filter(element => {
    const createdAtMoment = moment__WEBPACK_IMPORTED_MODULE_0___default()(element.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, "day") : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, "day") : true;
    const textMatch = element.description.toLowerCase().includes(text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === "date") {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === "amount") {
      return a.amount < b.amount ? 1 : -1;
    } else {
      return 1;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (getVisibleExpenses);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/redux/store/configureStore.js":
/*!*******************************************!*\
  !*** ./src/redux/store/configureStore.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _redusers_expenses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redusers/expenses */ "./src/redux/redusers/expenses.js");
/* harmony import */ var _redusers_filters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redusers/filters */ "./src/redux/redusers/filters.js");
/* harmony import */ var _redusers_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redusers/auth */ "./src/redux/redusers/auth.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);






const composeEnhancers = typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : redux__WEBPACK_IMPORTED_MODULE_0__["compose"];

const configureStore = () => {
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
    expenses: _redusers_expenses__WEBPACK_IMPORTED_MODULE_2__["default"],
    filters: _redusers_filters__WEBPACK_IMPORTED_MODULE_3__["default"],
    auth: _redusers_auth__WEBPACK_IMPORTED_MODULE_4__["default"]
  }), composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"])) //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};

/* harmony default export */ __webpack_exports__["default"] = (configureStore);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/routers/AppRouter.js":
/*!**********************************!*\
  !*** ./src/routers/AppRouter.js ***!
  \**********************************/
/*! exports provided: history, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "history", function() { return history; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_AddExpense__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AddExpense */ "./src/components/AddExpense.js");
/* harmony import */ var _components_EditExpense__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/EditExpense */ "./src/components/EditExpense.js");
/* harmony import */ var _components_ExpensesDashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ExpensesDashboard */ "./src/components/ExpensesDashboard.js");
/* harmony import */ var _components_Help__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Help */ "./src/components/Help.js");
/* harmony import */ var _components_PageNotFound__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PageNotFound */ "./src/components/PageNotFound.js");
/* harmony import */ var _components_LoggingPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/LoggingPage */ "./src/components/LoggingPage.js");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var _PrivatRoute__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PrivatRoute */ "./src/routers/PrivatRoute.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/gkonstantinov/Desktop/React/03/React_Budget_App/src/routers/AppRouter.js";











const history = Object(history__WEBPACK_IMPORTED_MODULE_8__["createBrowserHistory"])();

const AppRouter = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Router"], {
  history: history,
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/",
        component: _components_LoggingPage__WEBPACK_IMPORTED_MODULE_7__["default"],
        exact: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_PrivatRoute__WEBPACK_IMPORTED_MODULE_9__["default"], {
        path: "/dashboard",
        component: _components_ExpensesDashboard__WEBPACK_IMPORTED_MODULE_4__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_PrivatRoute__WEBPACK_IMPORTED_MODULE_9__["default"], {
        path: "/create",
        component: _components_AddExpense__WEBPACK_IMPORTED_MODULE_2__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_PrivatRoute__WEBPACK_IMPORTED_MODULE_9__["default"], {
        path: "/edit/:id",
        component: _components_EditExpense__WEBPACK_IMPORTED_MODULE_3__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_PrivatRoute__WEBPACK_IMPORTED_MODULE_9__["default"], {
        path: "/help",
        component: _components_Help__WEBPACK_IMPORTED_MODULE_5__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        component: _components_PageNotFound__WEBPACK_IMPORTED_MODULE_6__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 15,
  columnNumber: 3
}, undefined);

_c = AppRouter;
/* harmony default export */ __webpack_exports__["default"] = (AppRouter);

var _c;

__webpack_require__.$Refresh$.register(_c, "AppRouter");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/routers/PrivatRoute.js":
/*!************************************!*\
  !*** ./src/routers/PrivatRoute.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./src/components/Header.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/gkonstantinov/Desktop/React/03/React_Budget_App/src/routers/PrivatRoute.js";






const PrivatRoute = ({
  isAuthenticated,
  component: Component,
  ...restProps
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { ...restProps,
  component: props => isAuthenticated ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Component, { ...props
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
    to: "/"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 11,
  columnNumber: 3
}, undefined);

_c = PrivatRoute;

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(PrivatRoute));

var _c;

__webpack_require__.$Refresh$.register(_c, "PrivatRoute");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./style.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles/style.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./style.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles/style.scss",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./style.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles/style.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ 1:
/*!**********************************************************************************************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/gkonstantinov/Desktop/React/03/React_Budget_App/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/gkonstantinov/Desktop/React/03/React_Budget_App/node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js */"./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
__webpack_require__(/*! /Users/gkonstantinov/Desktop/React/03/React_Budget_App/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/gkonstantinov/Desktop/React/03/React_Budget_App/src/index.js */"./src/index.js");


/***/ }),

/***/ 2:
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[1,"runtime-main","vendors~main"]]]);
//# sourceMappingURL=main.chunk.js.map