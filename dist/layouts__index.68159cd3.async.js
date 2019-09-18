(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts__index"],{

/***/ "./src/layouts/index.js":
/*!******************************!*\
  !*** ./src/layouts/index.js ***!
  \******************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./src/pages/.umi-production/router.js (referenced with import()) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ "./src/layouts/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var umi_withRouter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! umi/withRouter */ "./node_modules/umi/withRouter.js");
/* harmony import */ var umi_withRouter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(umi_withRouter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/TransitionGroup.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/CSSTransition.js");





var audioSource = __webpack_require__(/*! ../assets/speak.mp3 */ "./src/assets/speak.mp3"); // function BasicLayout(props) {
//   return <div className={styles.normal}>{props.children}</div>;
// }


var BasicLayout = umi_withRouter__WEBPACK_IMPORTED_MODULE_2___default()((_ref) => {
  var location = _ref.location,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    component: null
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    key: location.pathname,
    classNames: "swipe",
    timeout: 300
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _index_less__WEBPACK_IMPORTED_MODULE_1___default.a.pageWrapper
  }, children)));
});
/* harmony default export */ __webpack_exports__["default"] = (BasicLayout);

/***/ }),

/***/ "./src/layouts/index.less":
/*!********************************!*\
  !*** ./src/layouts/index.less ***!
  \********************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"pageWrapper":"pageWrapper___3H3c1"};

/***/ })

}]);