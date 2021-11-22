webpackHotUpdate("main",{

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
___CSS_LOADER_EXPORT___.push([module.i, "* {\n  box-sizing: border-box;\n}\n\nhtml {\n  font-size: 62.5%;\n  height: 100%;\n}\n\nbody {\n  min-height: 100vh;\n  font-family: Roboto, Helvetica, Arial, sans-serif;\n  font-size: 1.6rem;\n  line-height: 1.6;\n}\n\nh1 {\n  font-size: 2.2rem;\n}\n\nbutton {\n  cursor: pointer;\n}\n\nbutton:disabled {\n  cursor: default;\n}\n\n.is-active {\n  color: red;\n}\n\n.box-layout {\n  background: #27ad63;\n  height: 100vh;\n  width: 100vw;\n  background-size: cover;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.button-login {\n  background-color: floralwhite;\n  border: none;\n  color: green;\n  text-align: center;\n  text-decoration: none;\n  font-size: 1.6rem;\n  padding: 10px 24px;\n  border-radius: 8px;\n  transition-duration: 0.4s;\n}\n\n.button-login:hover {\n  background-color: green;\n  color: white;\n}\n\n.header {\n  background: #4a4d57;\n  background-color: #4a4d57;\n  text-align: center;\n  height: 80px;\n}\n\n.header__buttons {\n  background-color: #4a4d57;\n  border: none;\n  color: #27ad63;\n  text-align: center;\n  text-decoration: none;\n  font-size: 1.6rem;\n  padding: 30px;\n  width: auto;\n  line-height: 1.6;\n  display: inline-block;\n  margin: 0;\n}\n\n.header__title {\n  color: #27ad63;\n  margin-top: 15px;\n  font-size: 3.2rem;\n}\n\n.header-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: stretch;\n  height: 80px;\n}\n\n.button-container {\n  display: flex;\n  justify-content: flex-end;\n  align-items: stretch;\n}\n\n.header__logo {\n  width: auto;\n}\n\n.logo {\n  float: left;\n}\n\n.content-container {\n  max-width: 80rem;\n  margin: 0 auto;\n  padding: 0 1.6rem;\n}\n\n.page-header {\n  text-align: center;\n  background-color: lightgreen;\n  padding: 3.2rem 0;\n  margin-bottom: 3.2rem;\n}\n\n.page-header__title {\n  text-align: center;\n  margin: 0;\n  font-weight: 300;\n}\n\n.page-variable {\n  font-weight: 700;\n}\n\n.input-group-container {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 3.2rem;\n}\n\n.input-group__item {\n  margin-right: 10px;\n}\n\n.text-input, .text-area-input, .select-input {\n  border: 1px solid #cacccd;\n  height: 48px;\n  padding: 1.2rem;\n  font-size: 16px;\n}\n\n.text-area-input {\n  height: 10rem;\n}\n\n.form__error {\n  margin: 0 0 1.6rem 0;\n  font-style: italic;\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n}\n.form > * {\n  margin: 0 0 1.6rem 0;\n}\n\n.form-button {\n  background-color: #4a4d57;\n  border: none;\n  color: #27ad63;\n  text-align: center;\n  text-decoration: none;\n  font-size: 1.6rem;\n  padding: 15px;\n  width: auto;\n  display: inline-block;\n  width: 160px;\n}\n\n@media (min-width: 45.1rem) {\n  .show-on-mobile {\n    display: none;\n  }\n}\n\n@media (max-width: 45rem) {\n  .show-on-desktop {\n    display: none;\n  }\n}\n\n.list-header {\n  background: #f7f7f7;\n  border: 1px solid grey;\n  color: grey;\n  display: flex;\n  justify-content: space-between;\n  padding: 1.2rem 1.6rem;\n}\n\n.list-item {\n  display: flex;\n  border: 1px solid grey;\n  border-top: none;\n  padding: 1.6rem;\n  text-decoration: none;\n  justify-content: space-between;\n}\n.list-item:hover {\n  background: #f7f7f7;\n}\n.list-item > * {\n  flex: 1 1;\n}\n\n.lits-item__category {\n  text-align: center;\n}\n\n.lits-item__amount {\n  text-align: right;\n}\n\n.lits-item__title {\n  margin: 0;\n  word-break: break-all;\n}\n\n.lits-item__message {\n  align-items: center;\n  justify-content: center;\n  padding: 1.6rem;\n}\n.lits-item__message:hover {\n  background: none;\n}\n.lits-item__message > * {\n  text-align: center;\n}\n\n.loader--container {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.loader--image {\n  height: 30rem;\n  width: 30rem;\n}", "",{"version":3,"sources":["webpack://src/styles/base/base.scss","webpack://src/styles/style.scss","webpack://src/styles/base/settings.scss","webpack://src/styles/components/_box-layout.scss","webpack://src/styles/components/_button-login.scss","webpack://src/styles/components/_header.scss","webpack://src/styles/components/_content-container.scss","webpack://src/styles/components/_page-header.scss","webpack://src/styles/components/_input-group.scss","webpack://src/styles/components/_inputs.scss","webpack://src/styles/components/_form.scss","webpack://src/styles/components/_visability.scss","webpack://src/styles/components/_list-data.scss","webpack://src/styles/components/_loader.scss"],"names":[],"mappings":"AAAA;EACE,sBAAA;ACCF;;ADEA;EACE,gBAAA;EACA,YAAA;ACCF;;ADEA;EACE,iBAAA;EACA,iDAAA;EACA,iBEVO;EFWP,gBAAA;ACCF;;ADEA;EACE,iBAAA;ACCF;;ADEA;EACE,eAAA;ACCF;;ADEA;EACE,eAAA;ACCF;;ADEA;EACE,UAAA;ACCF;;AE9BA;EACE,mBDUgB;ECThB,aAAA;EACA,YAAA;EACA,sBAAA;EACA,mBAAA;EACA,aAAA;EACA,uBAAA;AFiCF;;AGxCA;EACE,6BAAA;EACA,YAAA;EACA,YAAA;EACA,kBAAA;EACA,qBAAA;EACA,iBFJO;EEKP,kBAAA;EACA,kBAAA;EACA,yBAAA;AH2CF;;AGxCA;EACE,uBAAA;EACA,YAAA;AH2CF;;AIzDA;EACE,mBHSW;EGRX,yBHQW;EGPX,kBAAA;EACA,YAAA;AJ4DF;;AIzDA;EACE,yBHEW;EGDX,YAAA;EACA,cHCgB;EGAhB,kBAAA;EACA,qBAAA;EACA,iBHXO;EGYP,aAAA;EACA,WAAA;EACA,gBAAA;EACA,qBAAA;EACA,SAAA;AJ4DF;;AIzDA;EACE,cHXgB;EGYhB,gBAAA;EACA,iBHnBO;AD+ET;;AIzDA;EACE,aAAA;EACA,8BAAA;EACA,oBAAA;EACA,YAAA;AJ4DF;;AIzDA;EACE,aAAA;EACA,yBAAA;EACA,oBAAA;AJ4DF;;AIzDA;EACE,WAAA;AJ4DF;;AI1DA;EACE,WAAA;AJ6DF;;AKzGA;EACE,gBAAA;EACA,cAAA;EACA,iBAAA;AL4GF;;AM/GA;EACE,kBAAA;EACA,4BAAA;EACA,iBAAA;EACA,qBLCO;ADiHT;;AM/GA;EACE,kBAAA;EACA,SAAA;EACA,gBAAA;ANkHF;;AM/GA;EACE,gBAAA;ANkHF;;AOhIA;EACE,aAAA;EACA,uBAAA;EACA,qBNEO;ADiIT;;AOhIA;EACE,kBAAA;APmIF;;AQ1IA;EACE,yBAAA;EACA,YAAA;EACA,ePFO;EOGP,eAAA;AR6IF;;AQtIA;EAEE,aAAA;ARwIF;;ASrJA;EACE,oBAAA;EACA,kBAAA;ATwJF;;ASrJA;EACE,aAAA;EACA,sBAAA;ATwJF;ASvJE;EACE,oBAAA;ATyJJ;;ASrJA;EACE,yBRJW;EQKX,YAAA;EACA,cRLgB;EQMhB,kBAAA;EACA,qBAAA;EACA,iBRjBO;EQkBP,aAAA;EACA,WAAA;EACA,qBAAA;EACA,YAAA;ATwJF;;AU9KE;EADF;IAEI,aAAA;EVkLF;AACF;;AU9KE;EADF;IAEI,aAAA;EVkLF;AACF;;AW3LA;EACE,mBAAA;EACA,sBAAA;EACA,WAAA;EACA,aAAA;EACA,8BAAA;EACA,sBAAA;AX8LF;;AW3LA;EACE,aAAA;EACA,sBAAA;EACA,gBAAA;EACA,eVXO;EUYP,qBAAA;EACA,8BAAA;AX8LF;AW7LE;EACE,mBAAA;AX+LJ;AW7LE;EACE,SAAA;AX+LJ;;AW3LA;EACE,kBAAA;AX8LF;;AW3LA;EACE,iBAAA;AX8LF;;AW3LA;EACE,SAAA;EACA,qBAAA;AX8LF;;AW3LA;EACE,mBAAA;EACA,uBAAA;EACA,eVtCO;ADoOT;AW7LE;EACE,gBAAA;AX+LJ;AW7LE;EACE,kBAAA;AX+LJ;;AY5OA;EACE,aAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AZ+OF;;AY5OA;EACE,aAAA;EACA,YAAA;AZ+OF","sourcesContent":["* {\n  box-sizing: border-box;\n}\n\nhtml {\n  font-size: 62.5%;\n  height: 100%;\n}\n\nbody {\n  min-height: 100vh;\n  font-family: Roboto, Helvetica, Arial, sans-serif;\n  font-size: $m-size;\n  line-height: 1.6;\n}\n\nh1 {\n  font-size: 2.2rem;\n}\n\nbutton {\n  cursor: pointer;\n}\n\nbutton:disabled {\n  cursor: default;\n}\n\n.is-active {\n  color: red;\n}\n","* {\n  box-sizing: border-box;\n}\n\nhtml {\n  font-size: 62.5%;\n  height: 100%;\n}\n\nbody {\n  min-height: 100vh;\n  font-family: Roboto, Helvetica, Arial, sans-serif;\n  font-size: 1.6rem;\n  line-height: 1.6;\n}\n\nh1 {\n  font-size: 2.2rem;\n}\n\nbutton {\n  cursor: pointer;\n}\n\nbutton:disabled {\n  cursor: default;\n}\n\n.is-active {\n  color: red;\n}\n\n.box-layout {\n  background: #27ad63;\n  height: 100vh;\n  width: 100vw;\n  background-size: cover;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.button-login {\n  background-color: floralwhite;\n  border: none;\n  color: green;\n  text-align: center;\n  text-decoration: none;\n  font-size: 1.6rem;\n  padding: 10px 24px;\n  border-radius: 8px;\n  transition-duration: 0.4s;\n}\n\n.button-login:hover {\n  background-color: green;\n  color: white;\n}\n\n.header {\n  background: #4a4d57;\n  background-color: #4a4d57;\n  text-align: center;\n  height: 80px;\n}\n\n.header__buttons {\n  background-color: #4a4d57;\n  border: none;\n  color: #27ad63;\n  text-align: center;\n  text-decoration: none;\n  font-size: 1.6rem;\n  padding: 30px;\n  width: auto;\n  line-height: 1.6;\n  display: inline-block;\n  margin: 0;\n}\n\n.header__title {\n  color: #27ad63;\n  margin-top: 15px;\n  font-size: 3.2rem;\n}\n\n.header-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: stretch;\n  height: 80px;\n}\n\n.button-container {\n  display: flex;\n  justify-content: flex-end;\n  align-items: stretch;\n}\n\n.header__logo {\n  width: auto;\n}\n\n.logo {\n  float: left;\n}\n\n.content-container {\n  max-width: 80rem;\n  margin: 0 auto;\n  padding: 0 1.6rem;\n}\n\n.page-header {\n  text-align: center;\n  background-color: lightgreen;\n  padding: 3.2rem 0;\n  margin-bottom: 3.2rem;\n}\n\n.page-header__title {\n  text-align: center;\n  margin: 0;\n  font-weight: 300;\n}\n\n.page-variable {\n  font-weight: 700;\n}\n\n.input-group-container {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 3.2rem;\n}\n\n.input-group__item {\n  margin-right: 10px;\n}\n\n.text-input, .text-area-input, .select-input {\n  border: 1px solid #cacccd;\n  height: 48px;\n  padding: 1.2rem;\n  font-size: 16px;\n}\n\n.text-area-input {\n  height: 10rem;\n}\n\n.form__error {\n  margin: 0 0 1.6rem 0;\n  font-style: italic;\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n}\n.form > * {\n  margin: 0 0 1.6rem 0;\n}\n\n.form-button {\n  background-color: #4a4d57;\n  border: none;\n  color: #27ad63;\n  text-align: center;\n  text-decoration: none;\n  font-size: 1.6rem;\n  padding: 15px;\n  width: auto;\n  display: inline-block;\n  width: 160px;\n}\n\n@media (min-width: 45.1rem) {\n  .show-on-mobile {\n    display: none;\n  }\n}\n\n@media (max-width: 45rem) {\n  .show-on-desktop {\n    display: none;\n  }\n}\n\n.list-header {\n  background: #f7f7f7;\n  border: 1px solid grey;\n  color: grey;\n  display: flex;\n  justify-content: space-between;\n  padding: 1.2rem 1.6rem;\n}\n\n.list-item {\n  display: flex;\n  border: 1px solid grey;\n  border-top: none;\n  padding: 1.6rem;\n  text-decoration: none;\n  justify-content: space-between;\n}\n.list-item:hover {\n  background: #f7f7f7;\n}\n.list-item > * {\n  flex: 1 1 0;\n}\n\n.lits-item__category {\n  text-align: center;\n}\n\n.lits-item__amount {\n  text-align: right;\n}\n\n.lits-item__title {\n  margin: 0;\n  word-break: break-all;\n}\n\n.lits-item__message {\n  align-items: center;\n  justify-content: center;\n  padding: 1.6rem;\n}\n.lits-item__message:hover {\n  background: none;\n}\n.lits-item__message > * {\n  text-align: center;\n}\n\n.loader--container {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.loader--image {\n  height: 30rem;\n  width: 30rem;\n}","//size\n$s-size: 1.2rem;\n$m-size: 1.6rem;\n$m2-size: 2.2rem;\n$l-mobile-size: 2.4rem;\n$l-size: 3.2rem;\n$xl-size: 4.8rem;\n$desktop_breakpoint: 45rem;\n\n//color\n$main-color: #4a4d57;\n$secondary-color: #27ad63;\n",".box-layout {\n  background: $secondary-color;\n  height: 100vh;\n  width: 100vw;\n  background-size: cover;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n// .box-layout__box {\n//   background: $main-color;\n//   border-radius: 5px;\n//   text-align: center;\n//   width: 25rem;\n//   padding: $l-size;\n//   display: flex;\n//   flex-direction: column;\n//   justify-content: space-between;\n// }\n\n// .box-layout__title {\n//   margin: $m-size 0;\n// }\n\n// .main_logo {\n//   width: 100px;\n//   height: 100px;\n//   display: block;\n// }\n",".button-login {\n  background-color: floralwhite;\n  border: none;\n  color: green;\n  text-align: center;\n  text-decoration: none;\n  font-size: $m-size;\n  padding: 10px 24px;\n  border-radius: 8px;\n  transition-duration: 0.4s;\n}\n\n.button-login:hover {\n  background-color: green;\n  color: white;\n}\n",".header {\n  background: $main-color;\n  background-color: $main-color;\n  text-align: center;\n  height: 80px;\n}\n\n.header__buttons {\n  background-color: $main-color;\n  border: none;\n  color: $secondary-color;\n  text-align: center;\n  text-decoration: none;\n  font-size: $m-size;\n  padding: 30px;\n  width: auto;\n  line-height: 1.6;\n  display: inline-block;\n  margin: 0;\n}\n\n.header__title {\n  color: $secondary-color;\n  margin-top: 15px;\n  font-size: $l-size;\n}\n\n.header-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: stretch;\n  height: 80px;\n}\n\n.button-container {\n  display: flex;\n  justify-content: flex-end;\n  align-items: stretch;\n}\n\n.header__logo {\n  width: auto;\n}\n.logo {\n  float: left;\n}\n",".content-container {\n  max-width: 80rem;\n  margin: 0 auto;\n  padding: 0 $m-size;\n}\n",".page-header {\n  text-align: center;\n  background-color: lightgreen;\n  padding: $l-size 0;\n  margin-bottom: $l-size;\n}\n\n.page-header__title {\n  text-align: center;\n  margin: 0;\n  font-weight: 300;\n}\n\n.page-variable {\n  font-weight: 700;\n}\n",".input-group-container {\n  display: flex;\n  justify-content: center;\n  margin-bottom: $l-size;\n}\n\n.input-group__item {\n  margin-right: 10px;\n}\n",".text-input {\n  border: 1px solid #cacccd;\n  height: 48px;\n  padding: $s-size;\n  font-size: 16px;\n}\n\n.select-input {\n  @extend .text-input;\n}\n\n.text-area-input {\n  @extend .text-input;\n  height: 10rem;\n}\n",".form__error {\n  margin: 0 0 $m-size 0;\n  font-style: italic;\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n  > * {\n    margin: 0 0 $m-size 0;\n  }\n}\n\n.form-button {\n  background-color: $main-color;\n  border: none;\n  color: $secondary-color;\n  text-align: center;\n  text-decoration: none;\n  font-size: $m-size;\n  padding: 15px;\n  width: auto;\n  display: inline-block;\n  width: 160px;\n}\n",".show-on-mobile {\n  @media (min-width: $desktop_breakpoint + 0.1rem) {\n    display: none;\n  }\n}\n\n.show-on-desktop {\n  @media (max-width: $desktop_breakpoint) {\n    display: none;\n  }\n}\n",".list-header {\n  background: #f7f7f7;\n  border: 1px solid grey;\n  color: grey;\n  display: flex;\n  justify-content: space-between;\n  padding: $s-size $m-size;\n}\n\n.list-item {\n  display: flex;\n  border: 1px solid grey;\n  border-top: none;\n  padding: $m-size;\n  text-decoration: none;\n  justify-content: space-between;\n  &:hover {\n    background: #f7f7f7;\n  }\n  > * {\n    flex: 1 1 0;\n  }\n}\n\n.lits-item__category {\n  text-align: center;\n}\n\n.lits-item__amount {\n  text-align: right;\n}\n\n.lits-item__title {\n  margin: 0;\n  word-break: break-all;\n}\n\n.lits-item__message {\n  align-items: center;\n  justify-content: center;\n  padding: $m-size;\n  &:hover {\n    background: none;\n  }\n  > * {\n    text-align: center;\n  }\n}\n",".loader--container {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.loader--image {\n  height: 30rem;\n  width: 30rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=main.bacd87a036faa5796767.hot-update.js.map