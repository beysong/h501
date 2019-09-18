(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["p__shared"],{

/***/ "./src/pages/shared.js":
/*!*****************************!*\
  !*** ./src/pages/shared.js ***!
  \*****************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./src/pages/.umi-production/router.js (referenced with import()) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Shared; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var umi_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! umi/router */ "./node_modules/umi/router.js");
/* harmony import */ var umi_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(umi_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_join__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/join */ "./src/components/join.js");
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/config */ "./src/utils/config.js");
/* harmony import */ var _shared_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared.less */ "./src/pages/shared.less");
/* harmony import */ var _shared_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shared_less__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/index */ "./src/utils/index.js");







var QINGHUIDA = __webpack_require__(/*! ../assets/qinghuida.png */ "./src/assets/qinghuida.png");

var Label = __webpack_require__(/*! ../assets/Label.png */ "./src/assets/Label.png");

var wenzi = __webpack_require__(/*! ../assets/wenzi.png */ "./src/assets/wenzi.png");

var tryImg = __webpack_require__(/*! ../assets/start.png */ "./src/assets/start.png");

var joinImg = __webpack_require__(/*! ../assets/join.png */ "./src/assets/join.png");

class Shared extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {
  constructor(props) {
    super(props);

    this.togglePlay = () => {
      var playing = this.state.playing;
      var location = this.props.location;
      var audioRef = document.getElementById('audioLabel');

      if (this.interval) {
        clearInterval(this.interval);
        this.interval = null;
      } else {
        this.interval = setInterval(() => {
          this.setState((state, props) => ({
            lineWidth: state.lineWidth + 400 / audioRef.duration
          }));
        }, 1000);
      }

      if (playing) {
        audioRef.pause();
        this.setState({
          playing: false
        });
      } else {
        audioRef.play();
        this.setState({
          playing: true
        });
      }
    };

    this.toJoin = () => {
      this.setState({
        joinShow: true
      }); // window.location.href = 'http://www.baidu.com';
    };

    this.createAudio = () => {
      var location = this.props.location;
      var dataInfo = this.state.dataInfo;
      var x = document.createElement('AUDIO');
      x.setAttribute('id', 'audioLabel'); // x.setAttribute('loop', true);

      x.setAttribute('src', "http:".concat(_utils_config__WEBPACK_IMPORTED_MODULE_3__[/* WEB_HOST */ "b"], "/get/").concat(location.query.code || ''));
      x.setAttribute('controls', 'controls');
      document.body.appendChild(x);
      var audioRef = document.getElementById('audioLabel');
      audioRef.addEventListener('ended', () => {
        //当播放完一首歌曲时也会触发
        console.log('event ended: ' + new Date().getTime());

        if (this.interval) {
          clearInterval(this.interval);
          this.interval = null;
        }

        this.setState({
          playing: false,
          lineWidth: 0
        });
      });
    };

    this.state = {
      code: props.location.query.code || '',
      isshow: false,
      // 分享背景图
      playing: false,
      // 播放中
      dataInfo: {},
      lineWidth: 0
    };
  }

  componentDidMount() {
    var location = this.props.location;
    console.log('location', location);

    if (!location.query.code) {
      umi_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('error');
    }

    this.createAudio();
    Object(_utils_index__WEBPACK_IMPORTED_MODULE_5__[/* wxConfig2 */ "a"])().then(r => {
      wx.ready(() => {
        //需在用户可能点击分享按钮前就先调用
        wx.updateAppMessageShareData({
          title: _utils_config__WEBPACK_IMPORTED_MODULE_3__[/* WECHATOPTIONS */ "d"].title || '加入远景',
          // 分享标题
          desc: _utils_config__WEBPACK_IMPORTED_MODULE_3__[/* WECHATOPTIONS */ "d"].desc || '加入远景2019',
          // 分享描述
          link: _utils_config__WEBPACK_IMPORTED_MODULE_3__[/* WEB_URL */ "c"] + '/shared.html?code=' + this.state.code,
          // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: _utils_config__WEBPACK_IMPORTED_MODULE_3__[/* WECHATOPTIONS */ "d"].img,
          // 分享图标
          success: function success() {// 设置成功
          }
        });
        wx.updateTimelineShareData({
          title: _utils_config__WEBPACK_IMPORTED_MODULE_3__[/* WECHATOPTIONS */ "d"].title || '加入远景',
          // 分享标题
          link: _utils_config__WEBPACK_IMPORTED_MODULE_3__[/* WEB_URL */ "c"] + '/shared.html?code=' + this.state.code,
          // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: _utils_config__WEBPACK_IMPORTED_MODULE_3__[/* WECHATOPTIONS */ "d"].img,
          // 分享图标
          success: function success() {// 设置成功
          }
        });
      });
    });
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
  /* global wx */
  // 播放录音


  render() {
    var _this$state = this.state,
        playing = _this$state.playing,
        dataInfo = _this$state.dataInfo,
        lineWidth = _this$state.lineWidth,
        joinShow = _this$state.joinShow;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _shared_less__WEBPACK_IMPORTED_MODULE_4___default.a.normal
    }, joinShow ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_join__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
      click: () => {
        this.setState({
          joinShow: false
        });
      }
    }) : false, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _shared_less__WEBPACK_IMPORTED_MODULE_4___default.a.layer01
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: QINGHUIDA,
      alt: "\u8BF7\u56DE\u7B542029"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _shared_less__WEBPACK_IMPORTED_MODULE_4___default.a.show10
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: wenzi,
      alt: "\u5411\u73B0\u5728 \u8BF4\u672A\u6765"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _shared_less__WEBPACK_IMPORTED_MODULE_4___default.a.layer02
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: Label,
      alt: "\u9ED1\u80F6\u5531\u7247"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _shared_less__WEBPACK_IMPORTED_MODULE_4___default.a.show11
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _shared_less__WEBPACK_IMPORTED_MODULE_4___default.a.progressWrap
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _shared_less__WEBPACK_IMPORTED_MODULE_4___default.a.line
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      ref: r => {
        this.refLine = r;
      },
      className: _shared_less__WEBPACK_IMPORTED_MODULE_4___default.a.whiteLine,
      style: {
        width: lineWidth
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _shared_less__WEBPACK_IMPORTED_MODULE_4___default.a.circle
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _shared_less__WEBPACK_IMPORTED_MODULE_4___default.a.inshow11
    }, "\u542C\u5230", dataInfo.name || '', "\u7684\u672A\u6765\u60F3\u8C61\u529B")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _shared_less__WEBPACK_IMPORTED_MODULE_4___default.a.show12
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      onClick: this.togglePlay,
      className: _shared_less__WEBPACK_IMPORTED_MODULE_4___default.a.btn
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _shared_less__WEBPACK_IMPORTED_MODULE_4___default.a.try
    }, playing ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _shared_less__WEBPACK_IMPORTED_MODULE_4___default.a.process
    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: tryImg,
      alt: "\u6309\u4E0B\u64AD\u653E"
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      onClick: this.toJoin,
      className: _shared_less__WEBPACK_IMPORTED_MODULE_4___default.a.btn
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _shared_less__WEBPACK_IMPORTED_MODULE_4___default.a.upload
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: joinImg,
      alt: "\u52A0\u5165\u8FDC\u666F"
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _shared_less__WEBPACK_IMPORTED_MODULE_4___default.a.show12
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        flex: 1,
        textAlign: 'center'
      }
    }, "\u6309\u4E0B\u64AD\u653E"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      onClick: this.toJoin,
      style: {
        flex: 1,
        textAlign: 'center'
      }
    }, "\u52A0\u5165\u8FDC\u666F"))));
  }

}

/***/ }),

/***/ "./src/pages/shared.less":
/*!*******************************!*\
  !*** ./src/pages/shared.less ***!
  \*******************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"normal":"normal___1NOLf","layer01":"layer01___2Mb5Z","layer02":"layer02___1-X8d","show12":"show12___21CKd","btn":"btn___24jaP","start":"start___fENL1","process":"process___2YJs3","try":"try___3xotJ","restart":"restart___s9NJi","upload":"upload___3rhJ4","progressWrap":"progressWrap___2-c53","line":"line___12LUW","whiteLine":"whiteLine___3-NcO","circle":"circle___2c76j","show10":"show10___16F5j","show11":"show11___10z88","inshow11":"inshow11___28-DE"};

/***/ })

}]);