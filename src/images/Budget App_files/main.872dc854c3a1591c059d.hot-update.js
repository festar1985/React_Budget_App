webpackHotUpdate("main",{

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
/* harmony import */ var _images_apple_logo_48_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/apple-logo-48.png */ "./src/images/apple-logo-48.png");
/* harmony import */ var _images_github_48_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/github-48.png */ "./src/images/github-48.png");
/* harmony import */ var _images_logo_main_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/logo_main.png */ "./src/images/logo_main.png");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/gkonstantinov/Desktop/React/03/React_Budget_App/src/components/LoggingPage.js";









const LoggingPage = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
    className: "box-layout",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      className: "box-layout__box",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("img", {
        className: "box-main_logo",
        src: _images_logo_main_png__WEBPACK_IMPORTED_MODULE_6__["default"],
        alt: "logo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h1", {
        className: "box-layout__title",
        children: "Welcome to your Budget Application"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
        children: "Here you will control your expenses"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
        className: "button-login",
        onClick: props.startLogin,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("img", {
          className: "logging_logo",
          src: _images_google_48_png__WEBPACK_IMPORTED_MODULE_3__["default"],
          alt: "GLogo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          children: "Login with Google"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
        className: "button-login",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("img", {
          className: "logging_logo",
          src: _images_apple_logo_48_png__WEBPACK_IMPORTED_MODULE_4__["default"],
          alt: "ALogo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          children: "Login with Google"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
        className: "button-login",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("img", {
          className: "logging_logo",
          src: _images_github_48_png__WEBPACK_IMPORTED_MODULE_5__["default"],
          alt: "GitLogo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          children: "Login with Google"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
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

/***/ "./src/images/apple-logo-48.png":
/*!**************************************!*\
  !*** ./src/images/apple-logo-48.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEeUlEQVRoge2ZX4gVVRzHP7+Zu9fZXV1XsZeVFUM3LQuKNE0kMIzSEsm0ggjxIcKHMq3EZJNRKoj+mPZP88F60B4q0kALK5US0UWSoFBbw8racE0t3fbevXvn/HqRFdeZO2funbv24Odxft9z5vu9Z87MOecKV4A6/0iTcWUBMAcYm6+va2Zpc66cvjLpWothw8Ear7NhmUFbAe/C1aBc8zCQAV75vt7r9LaCzri0IIcr6XZgAvi7M17e2wHc0b8konsq6dqppLEtntP0PCHmAQ1EN1bSt1TS2IbaF46OVOUYF5/5PlT1k56V4+dV0n/VR8CoLibEPNBRk3EXVdp/1QMIMivk8jlHdE7XipZTlfZf3QB+ewNwQ7+rf4iYmd2t4w+mcYuqBhiMePTNMzkr8GY+yN6Ya71+X1r3qGwSq8rgVT9fQ1a1qzD2NL6Y/vXaF4/OU+N25hvZz5MtPZfU/eNePd2N/3pejuVj/inHQuIAQ/yjI4ouCxTuByYCgy6Uzit86SCbc0Nl+2VmAfyOumzm3F0OMguV6aBjuPgUnBdllxH5vCfo3Yw/oSvdAP7ujOc2PQs8BwyJUXeqyvuiutPUOH86JrgFlfuA2UC9xd1OIzydbx33QZzQKkCD/+PwgpvZBkyz0aeFIO/mxrU8wYMSRGniJ7F/vLHXzexhgM0DKLpo0JH2l0ppSgdQFc8pbFG4KVVnCRDRO/E76qLqbqnGXuaRhQjPpG/LDlG25U32XvxRkcvt6BHYcLAG0ZVVcWaBIh/nTMc8/GvzpXSRAWpPDnkAZXT61myQ9p6gdyH+9GKcMjKAisxN15Q9AsttvwPhAVQFmBFaqzbCL7nWlk9t5aEBalcdGwk6LD1X9ojRzxBRW31oAHWLY9OzlAzFOZREHx4AaUjHTnJUpCOJPjSAI30LtP89oacShb/Odg3AdjkUVR0P7LTVh4+AciY1RwkR5PYk+tAAvUFwIh07ZSDcw7K9ccv1PsK/A29N6wDOpeUpIY1OwX3MVlxqNdqWgpmyEGQ1S/ZZvcqjlxKqX6VnKTH1jjofsejb2I9pZABX5UoGQOBmJ5v9mqVtzTG6CHx13L8PnARGpG0uIWdUZYUZNngT/oRC/2L0HPDFCGyuqjU7hovo+uyZ7uvCiiW3lEXD24D1wqqKHCism/RDWKH0nnjdlHZEd1XFUhJU3okqxZ5KCPpqum4S82uQcz+MKsYGKK6Z+gXKjnQ9JUBp5b2JvVFlq8PdwDGLQS4/Kqw+3wRrJ5d8kdidTq+ZekxEX07Fkj25wDWPQ+ndmfXxevH331aj7K7clx2qupzXph6J0yVb9C9ta3aN2Q80lWvMku3BG5Nnx/36kPQPjtdvO+Ea926Es2Vbi0Hhu6CQe9jGPJS57apZ3DbJiNlKxEgI/GSQLY6RvY6YUyqOY9DRoDOBh4ChEV0fCJQ5rJ1y0tZL+fvGpw41ZuhZpjAfGAV0ArtE2VhcO2VvZLsl+2pd485H9FGEWzHUKnIYMZtMd836Uq/Mq1ylCvwH7tpnbEwlSrAAAAAASUVORK5CYII=");

/***/ }),

/***/ "./src/images/github-48.png":
/*!**********************************!*\
  !*** ./src/images/github-48.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADIUlEQVRoge2ZS0hVQRjHfz7rSkYvKLhhmqteCyuSMAIToZ0Ld0WLSIwiCDKIqCBolURPotqWEbTTddDGMivoSRC9iLDoYWVkQVm3xZxDh3Hu+WbOnaNQ9w8fwp2Z////nTNnZr4Riiji/0aJR66FQCOwHGgA5gMzgArgMzAMPAbuAleA+0DOo34iVAMdwHWUGZd4CRwEshPuGvVUu4ARS7Nx8R04DsyeKPPNwCMPxvV4C7Snbb4T+JmC+WicQ71hrygHzqRsPBp9QKXPBM5OoPkweoEyH+Z3T4L5MI4Uar4V+JWHfCtQH/y9l8DcE2AXsARoi+nXltT81EAkH3Gd1r8dtZJIxr+iFoPSyNhsTP8h1IbojAOCkYxhTA1qc2oJTGWCyAJrgf3ASsO4SkGr29X8TGBUIPW5SkgJjAJzTQNLTT8Cm4AqQTTRa82DWUJ7FbDFhdDmo2xxtpkf6yz0nmJ5+FxsQfYOv4ewbMAp6S7VB5qm0CoLwR2o1cEXhoBtFv1abchOEf8U7uC3jghRAgwK2j36INMbaBCEzgdkvpEDLgh9FtkQPcdxHnqE9P29sSH5JJBM9+06gmpBe1QfYJpCvwWRNKaPLcadTk0JfBNIavx4MaJWaH+v/2BKQJpn663tuEPiHpeACT3Ez8MXmA9yhaIKdVMRp92nDzK9gduCUC1wtBCneXAMeXr22xAtQ97Sc6irkPKEZqMoB05Yajbakkp7QRiDQFMB5tcAtyy1PuDwwKRiRo8B1Fmm3oK7HtgO3HDUOGxrHmAO6j4zSrARddB7GCPSZcHd7Wg8B4wBC1wSANhrINqAOvq+NrT1WvKW8fdi1zakM5IRGeCVRvQMdWpsAn5obS4FToeD+Y/AvCQJEJga0whXBG3NwAPUzt2PXIJGUeeQQGdS8yH0i63LhRKi7j5tzF/EU+0R1gBh7PTAKZm/CkzxoAOoHfukJjAA7EOVl4cScMaZv4a62vGOPeS/anRF3Irj7cmbsBr18fpO4AtqaqZRb49DBWqfGMZPApeYpP+VZYDNwM0EY0eA06RbY6eKaZNtoIgi/gX8AWjxX6lOgHeJAAAAAElFTkSuQmCC");

/***/ })

})
//# sourceMappingURL=main.872dc854c3a1591c059d.hot-update.js.map