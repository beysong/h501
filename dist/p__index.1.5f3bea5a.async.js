(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["p__index.1"],{

/***/ "./src/pages/index.1.js":
/*!******************************!*\
  !*** ./src/pages/index.1.js ***!
  \******************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./src/pages/.umi-production/router.js (referenced with import()) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var umi_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! umi/router */ "./node_modules/umi/router.js");
/* harmony import */ var umi_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(umi_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_1_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.1.less */ "./src/pages/index.1.less");
/* harmony import */ var _index_1_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_1_less__WEBPACK_IMPORTED_MODULE_2__);




var CP = __webpack_require__(/*! ../assets/Label.png */ "./src/assets/Label.png");

class Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {
  componentDidMount() {
    setTimeout(() => {
      umi_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('luzhi');
    }, 3100);
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _index_1_less__WEBPACK_IMPORTED_MODULE_2___default.a.normal
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _index_1_less__WEBPACK_IMPORTED_MODULE_2___default.a.goods
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: CP
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        textAlign: 'center',
        marginTop: 200
      },
      onClick: () => {}
    }, "\u5F00\u59CB\u5F55\u97F3"));
  }

}

/***/ }),

/***/ "./src/pages/index.1.less":
/*!********************************!*\
  !*** ./src/pages/index.1.less ***!
  \********************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"normal":"normal___ZLs2R","goods":"goods___2ePZW","bounce":"bounce___3Yuig","move1":"move1___2kuXD","lashen":"lashen___tmxrj"};

/***/ })

}]);