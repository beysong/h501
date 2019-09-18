(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["p__loading"],{

/***/ "./src/pages/loading.js":
/*!******************************!*\
  !*** ./src/pages/loading.js ***!
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
/* harmony import */ var _loading_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loading.less */ "./src/pages/loading.less");
/* harmony import */ var _loading_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_loading_less__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/index */ "./src/utils/index.js");





var Label = __webpack_require__(/*! ../assets/Label.png */ "./src/assets/Label.png");

class Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {
  componentDidMount() {
    Object(_utils_index__WEBPACK_IMPORTED_MODULE_3__[/* wxConfig2 */ "a"])();
    var _this$props = this.props,
        match = _this$props.match,
        location = _this$props.location;
    console.log('match', match, location);
    localStorage.token = location.query.token || '';
    localStorage.code = location.query.code || '';
    setTimeout(() => {
      umi_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('make?code=' + location.query.code || false);
    }, 16000);
    setTimeout(() => {
      var x = document.createElement('AUDIO');
      x.setAttribute('id', 'audioLabel2'); // x.setAttribute('loop', true);

      x.setAttribute('src', '/future/web/speak.mp3');
      x.setAttribute('controls', 'controls');
      document.body.appendChild(x);
      var audioRef = document.getElementById('audioLabel2');
      audioRef.play();
    }, 0);
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _loading_less__WEBPACK_IMPORTED_MODULE_2___default.a.normal
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _loading_less__WEBPACK_IMPORTED_MODULE_2___default.a.start1
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _loading_less__WEBPACK_IMPORTED_MODULE_2___default.a.bars
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _loading_less__WEBPACK_IMPORTED_MODULE_2___default.a.bar
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _loading_less__WEBPACK_IMPORTED_MODULE_2___default.a.bar
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _loading_less__WEBPACK_IMPORTED_MODULE_2___default.a.bar
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _loading_less__WEBPACK_IMPORTED_MODULE_2___default.a.bar
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _loading_less__WEBPACK_IMPORTED_MODULE_2___default.a.bar
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _loading_less__WEBPACK_IMPORTED_MODULE_2___default.a.bar
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _loading_less__WEBPACK_IMPORTED_MODULE_2___default.a.bar
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _loading_less__WEBPACK_IMPORTED_MODULE_2___default.a.bar
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _loading_less__WEBPACK_IMPORTED_MODULE_2___default.a.bar
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _loading_less__WEBPACK_IMPORTED_MODULE_2___default.a.bar
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        textAlign: 'left'
      },
      onClick: () => {}
    }, "\u672A\u6765\u662F\u88AB\u60F3\u8C61\u51FA\u6765\u7684", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "\u672A\u6765\u4E0D\u662F\u901A\u8FC7\u4E00\u4E9B\u7EBF\u6027\u7684\u89C4\u5212")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _loading_less__WEBPACK_IMPORTED_MODULE_2___default.a.start2
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _loading_less__WEBPACK_IMPORTED_MODULE_2___default.a.bars
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _loading_less__WEBPACK_IMPORTED_MODULE_2___default.a.bar
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _loading_less__WEBPACK_IMPORTED_MODULE_2___default.a.bar
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _loading_less__WEBPACK_IMPORTED_MODULE_2___default.a.bar
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _loading_less__WEBPACK_IMPORTED_MODULE_2___default.a.bar
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _loading_less__WEBPACK_IMPORTED_MODULE_2___default.a.bar
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _loading_less__WEBPACK_IMPORTED_MODULE_2___default.a.bar
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _loading_less__WEBPACK_IMPORTED_MODULE_2___default.a.bar
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _loading_less__WEBPACK_IMPORTED_MODULE_2___default.a.bar
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _loading_less__WEBPACK_IMPORTED_MODULE_2___default.a.bar
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _loading_less__WEBPACK_IMPORTED_MODULE_2___default.a.bar
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        textAlign: 'left'
      },
      onClick: () => {}
    }, "\u5176\u5B9E\u5F88\u591A\u65F6\u5019 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "\u662F\u7531\u827A\u672F\u5BB6 \u8BBE\u8BA1\u5E08 \u5305\u62EC\u8FD9\u4E9B\u54F2\u5B66\u5BB6 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "\u4ED6\u4EEC\u5728\u91CD\u65B0\u5B9A\u4E49\u672A\u6765")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _loading_less__WEBPACK_IMPORTED_MODULE_2___default.a.start3
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _loading_less__WEBPACK_IMPORTED_MODULE_2___default.a.bars
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _loading_less__WEBPACK_IMPORTED_MODULE_2___default.a.bar
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _loading_less__WEBPACK_IMPORTED_MODULE_2___default.a.bar
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _loading_less__WEBPACK_IMPORTED_MODULE_2___default.a.bar
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _loading_less__WEBPACK_IMPORTED_MODULE_2___default.a.bar
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _loading_less__WEBPACK_IMPORTED_MODULE_2___default.a.bar
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _loading_less__WEBPACK_IMPORTED_MODULE_2___default.a.bar
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _loading_less__WEBPACK_IMPORTED_MODULE_2___default.a.bar
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _loading_less__WEBPACK_IMPORTED_MODULE_2___default.a.bar
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _loading_less__WEBPACK_IMPORTED_MODULE_2___default.a.bar
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _loading_less__WEBPACK_IMPORTED_MODULE_2___default.a.bar
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        textAlign: 'left'
      },
      onClick: () => {}
    }, "\u4ED6\u4E0D\u4F1A\u53BB\u91CD\u590D\u8FC7\u53BB\u7684\u4E1C\u897F", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "\u4ED6\u6C38\u8FDC\u662F\u7528\u4ED6\u7684\u60F3\u8C61\u529B", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "\u5728\u5F15\u9886\u672A\u6765\u7684\u53D1\u751F")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _loading_less__WEBPACK_IMPORTED_MODULE_2___default.a.start4
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _loading_less__WEBPACK_IMPORTED_MODULE_2___default.a.bars
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _loading_less__WEBPACK_IMPORTED_MODULE_2___default.a.bar
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _loading_less__WEBPACK_IMPORTED_MODULE_2___default.a.bar
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _loading_less__WEBPACK_IMPORTED_MODULE_2___default.a.bar
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _loading_less__WEBPACK_IMPORTED_MODULE_2___default.a.bar
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _loading_less__WEBPACK_IMPORTED_MODULE_2___default.a.bar
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _loading_less__WEBPACK_IMPORTED_MODULE_2___default.a.bar
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _loading_less__WEBPACK_IMPORTED_MODULE_2___default.a.bar
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _loading_less__WEBPACK_IMPORTED_MODULE_2___default.a.bar
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _loading_less__WEBPACK_IMPORTED_MODULE_2___default.a.bar
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _loading_less__WEBPACK_IMPORTED_MODULE_2___default.a.bar
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        textAlign: 'left'
      },
      onClick: () => {}
    }, "\u4E0E\u4EFB\u4F55\u4E00\u79CD\u80FD\u6E90\u76F8\u6BD4 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _loading_less__WEBPACK_IMPORTED_MODULE_2___default.a.fontSize30
    }, "\u60F3\u8C61\u529B"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "\u624D\u662F\u6700\u597D\u7684", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _loading_less__WEBPACK_IMPORTED_MODULE_2___default.a.fontSize30
    }, "\u9A71\u52A8\u529B"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      style: {
        width: 0
      },
      src: Label,
      alt: "\u9ED1\u80F6\u5531\u7247"
    }));
  }

}

/***/ }),

/***/ "./src/pages/loading.less":
/*!********************************!*\
  !*** ./src/pages/loading.less ***!
  \********************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"normal":"normal___2vJoQ","loading":"loading___1roU7","disapear":"disapear___2E8NW","fontSize30":"fontSize30___2aBm6","start1":"start1___tJyhd","movein1":"movein1___Qa3rN","start2":"start2___2F6_s","movein2":"movein2___1Ngly","start3":"start3___iwCG1","movein3":"movein3___bODOb","start4":"start4___2JrDi","movein4":"movein4___3RUxX","bars":"bars___1h-GG","bar":"bar___1lLg1","sound":"sound___3U-Y0"};

/***/ })

}]);