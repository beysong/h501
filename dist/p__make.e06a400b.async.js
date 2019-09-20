(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["p__make"],{

/***/ "./src/assets/duihao.png":
/*!*******************************!*\
  !*** ./src/assets/duihao.png ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABHCAMAAADGBBL+AAAAAXNSR0IB2cksfwAAAAlwSFlzAAAXEgAAFxIBZ5/SUgAAAVxQTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Y2H17gAAAHR0Uk5TAAceKiIGIJ3d6eGuNzTK/+UjLMS6DNzxMrv9PfU24CH8ZgHujwnLdg4LHavvOzWsrcz7Fgq8iZyym2uCdQRiwv752oQtM5MQ8JL233omGgWUqtl7CBUpuI7bD1zGwcjkd7M5G/dU0BRJhp/FVuMvw+y5EkoPxICqAAACfklEQVR4nNXYa1PTQBQG4KVIUQEXi5USUJAWUKymEgFRAblVixWslyr1hvVW5aLI/5+RJbU9J8HNbjcnM74facI7TzfZ01nGCNMWaz/VQVlwlHjn6TNnu7pJO3rOcZHe84QdiT7u5kKSruNivYP3p8g6Bv52cGuQqqPh4HzoElFH08H55WGaDuDgI1dGKTp6+kBHOjNG0ZEYh46JqxQdHsc1io7JKBzXQUc2CkeGxHEDdqQn/lvHTbzmJI6YDTtyNI5bETumaBwOdtym6EhMw46ZNooO7JglcTjYQdNxB3RYUThyNGsO12OKZm+PwhGLwjGn6ojdvXd/cL6VDuyQ7O2jC4tDD5aWVyb1O1bhfpXNSP7DWtq15h/qduA9UTajxrrqVz0qaP7EX7XXwXrIHCz+uHFdUcuis7c/6W1+q3kNi8cRl168sQyuVbcghxU0ozafwidEdV0c5CjJHUfZeAbfp+cvlBzwHbRyL4PvKL+Cd7xWsLQyo8pb8DkpBloq2o7jFmwJaGl1RmHLG2kLdrxVdBy3vIMtMovHodHBWOo9vLf4z9U3m1FqlgpylLQcIioWz4wKfAf9KX+Alu0TLJWPZg6RKrRk/RZzh8gn2DJS8OyW6jNKHo8FfebMfQYf2i06RLAF7vzYYRv99qnC1U83LR6H4ZFfGVvqzxieUWYOEWz54v4ROb6GcHTp3/nxjLK/mXcwVoM7THY76djAoTBr1YIt33+E7xBBlvUl0BGWQwRZQMdOaA6R2vhJHaWQz5FrfkvIDhE0xVxH6B0+i7VDcuaOphiJQ2R3i9oh0rCQOUSqe26JyYwKzv7Pfs5/Hfym7GAsmTo8TBie9f0BKUihDqzFbJ8AAAAASUVORK5CYII="

/***/ }),

/***/ "./src/pages/make.js":
/*!***************************!*\
  !*** ./src/pages/make.js ***!
  \***************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./src/pages/.umi-production/router.js (referenced with import()) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Make; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var umi_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! umi/router */ "./node_modules/umi/router.js");
/* harmony import */ var umi_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(umi_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _make_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./make.less */ "./src/pages/make.less");
/* harmony import */ var _make_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_make_less__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/loading */ "./src/components/loading.js");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/index */ "./src/utils/index.js");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/index */ "./src/services/index.js");







var QINGHUIDA = __webpack_require__(/*! ../assets/qinghuida.png */ "./src/assets/qinghuida.png");

var Label = __webpack_require__(/*! ../assets/Label.png */ "./src/assets/Label.png");

var wenzi = __webpack_require__(/*! ../assets/wenzi.png */ "./src/assets/wenzi.png");

var tryImg = __webpack_require__(/*! ../assets/start.png */ "./src/assets/start.png");

var uploadImg = __webpack_require__(/*! ../assets/duihao.png */ "./src/assets/duihao.png");

var LOGO = __webpack_require__(/*! ../assets/logo.png */ "./src/assets/logo.png");

var SOLOGN = __webpack_require__(/*! ../assets/sologn.png */ "./src/assets/sologn.png");

class Make extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {
  constructor(props) {
    super(props);

    this.toggleStart = () => {
      var _this$state = this.state,
          processing = _this$state.processing,
          playing = _this$state.playing;

      if (playing) {
        return;
      }

      if (processing) {
        if (this.timeroutRef) {
          clearInterval(this.timeroutRef);
        }

        var et = new Date().getTime();
        wx.stopRecord({
          success: res => {
            console.log('res', res);
            var sourceId = res.localId;
            this.setState({
              sourceId,
              processing: false,
              finished: true,
              et
            });
          }
        }); // this.setState({
        //   sourceId: '21',
        //   processing: false,
        //   finished: true,
        // });
      } else {
        var st = new Date().getTime();
        wx.startRecord();
        this.setState({
          processing: true,
          timer: 0,
          st
        });
        this.timeroutRef = setInterval(() => {
          this.setState((state, props) => ({
            timer: state.timer + 1
          }));
        }, 1000);
      }
    };

    this.togglePlay = () => {
      var _this$state2 = this.state,
          playing = _this$state2.playing,
          processing = _this$state2.processing,
          sourceId = _this$state2.sourceId,
          serverId = _this$state2.serverId;

      if (processing) {
        return;
      }

      if (playing) {
        wx.pauseVoice({
          localId: sourceId // 需要暂停的音频的本地ID，由stopRecord接口获得

        });
        this.setState({
          playing: false
        });
      } else {
        wx.playVoice({
          localId: sourceId
        });
        this.setState({
          playing: true
        });
      }
    };

    this.upload = () => {
      var _this$state3 = this.state,
          sourceId = _this$state3.sourceId,
          timer = _this$state3.timer,
          st = _this$state3.st,
          et = _this$state3.et;
      var location = this.props.location;
      this.setState({
        uploading: true
      });
      wx.uploadVoice({
        localId: sourceId,
        // 需要上传的音频的本地ID，由stopRecord接口获得
        isShowProgressTips: 1,
        // 默认为1，显示进度提示
        success: res => {
          var serverId = res.serverId; // 返回音频的服务器端ID

          this.setState({
            serverId
          });
          Object(_services_index__WEBPACK_IMPORTED_MODULE_5__[/* uploadVoice */ "b"])({
            serverId,
            code: location.query.code || '',
            sec: Math.round((et - st) / 1000)
          }).then(r => {
            if (r.status === 200) {
              localStorage.sourceId = sourceId;
              umi_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('share?localId=' + sourceId + '&code=' + location.query.code || false);
            }

            this.setState({
              uploading: false
            });
          });
          wx.downloadVoice({
            serverId,
            // 需要下载的音频的服务器端ID，由uploadVoice接口获得
            isShowProgressTips: 1,
            // 默认为1，显示进度提示
            success: function success(res) {
              console.log('9999999999:', res);
              var localId = res.localId; // 返回音频的本地ID
            }
          });
        }
      });
    };

    this.state = {
      sourceId: '',
      serverId: '',
      processing: false,
      // 录制中
      finished: false,
      // 录制完成
      uploading: false,
      // 上传中
      playing: false,
      // 播放中
      timer: 0,
      st: 0,
      et: 0
    };
  }

  componentDidMount() {
    if (Object(_utils_index__WEBPACK_IMPORTED_MODULE_4__[/* isAndroid */ "a"])() && !Object(_utils_index__WEBPACK_IMPORTED_MODULE_4__[/* weixinVersion */ "b"])()) {
      wx.ready(() => {
        wx.onVoicePlayEnd({
          success: res => {
            this.setState({
              playing: false
            }); // var localId = res.localId; // 返回音频的本地ID
          }
        });
        wx.onVoiceRecordEnd({
          // 录音时间超过一分钟没有停止的时候会执行 complete 回调
          complete: res => {
            var sourceId = res.localId;
            this.setState({
              sourceId,
              processing: false,
              finished: true
            });
          }
        });
      });
    } else {
      Object(_utils_index__WEBPACK_IMPORTED_MODULE_4__[/* wxConfig2 */ "c"])().then(r => {
        wx.ready(() => {
          wx.onVoicePlayEnd({
            success: res => {
              this.setState({
                playing: false
              }); // var localId = res.localId; // 返回音频的本地ID
            }
          });
          wx.onVoiceRecordEnd({
            // 录音时间超过一分钟没有停止的时候会执行 complete 回调
            complete: res => {
              var sourceId = res.localId;
              this.setState({
                sourceId,
                processing: false,
                finished: true
              });
            }
          });
        });
      });
    }
  }
  /* global wx */
  // 开始录音


  render() {
    var _this$state4 = this.state,
        sourceId = _this$state4.sourceId,
        processing = _this$state4.processing,
        uploading = _this$state4.uploading,
        playing = _this$state4.playing,
        timer = _this$state4.timer,
        finished = _this$state4.finished;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _make_less__WEBPACK_IMPORTED_MODULE_2___default.a.normal
    }, uploading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_loading__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "\u6B63\u5728\u63A5\u6536\u672A\u6765\u4FE1\u53F7..."
    }) : false, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _make_less__WEBPACK_IMPORTED_MODULE_2___default.a.contentWrap
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _make_less__WEBPACK_IMPORTED_MODULE_2___default.a.logowrap
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: LOGO,
      alt: "\u8FDC\u666F"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: SOLOGN,
      alt: "2020\u5E74\u6821\u56ED\u62DB\u8058"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _make_less__WEBPACK_IMPORTED_MODULE_2___default.a.layer01
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: QINGHUIDA,
      alt: "\u8BF7\u56DE\u7B542029"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _make_less__WEBPACK_IMPORTED_MODULE_2___default.a.show10
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: wenzi,
      alt: "\u5411\u73B0\u5728 \u8BF4\u672A\u6765"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _make_less__WEBPACK_IMPORTED_MODULE_2___default.a.layer02
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: Label,
      alt: "\u9ED1\u80F6\u5531\u7247"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _make_less__WEBPACK_IMPORTED_MODULE_2___default.a.show11
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _make_less__WEBPACK_IMPORTED_MODULE_2___default.a.inshow11
    }, "\u73B0\u5728\uFF0C\u5411\u672A\u6765\u53D1\u58F0\uFF0C"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _make_less__WEBPACK_IMPORTED_MODULE_2___default.a.inshow11
    }, "2029\uFF0C\u8BA9\u672A\u6765\u53D1\u751F\u3002"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _make_less__WEBPACK_IMPORTED_MODULE_2___default.a.inshow11
    }, "\xA0"), processing ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _make_less__WEBPACK_IMPORTED_MODULE_2___default.a.timer,
      style: {
        textAlign: 'center'
      }
    }, "00 : 00 : ", timer > 9 ? timer : "0".concat(timer)) : false), sourceId ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _make_less__WEBPACK_IMPORTED_MODULE_2___default.a.show12
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _make_less__WEBPACK_IMPORTED_MODULE_2___default.a.btn,
      onClick: this.togglePlay
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _make_less__WEBPACK_IMPORTED_MODULE_2___default.a.try
    }, playing ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _make_less__WEBPACK_IMPORTED_MODULE_2___default.a.process
    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: tryImg,
      alt: "\u8BD5\u542C"
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _make_less__WEBPACK_IMPORTED_MODULE_2___default.a.btn,
      onClick: this.toggleStart
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: processing ? _make_less__WEBPACK_IMPORTED_MODULE_2___default.a.process : _make_less__WEBPACK_IMPORTED_MODULE_2___default.a.restart
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _make_less__WEBPACK_IMPORTED_MODULE_2___default.a.btn,
      onClick: this.upload
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _make_less__WEBPACK_IMPORTED_MODULE_2___default.a.upload
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: uploadImg,
      alt: "\u4E0A\u4F20"
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _make_less__WEBPACK_IMPORTED_MODULE_2___default.a.show12
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      onClick: this.togglePlay
    }, "\u8BD5\u542C"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      onClick: this.toggleStart
    }, processing ? '完成' : '重录'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      onClick: this.upload
    }, "\u4E0A\u4F20"))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _make_less__WEBPACK_IMPORTED_MODULE_2___default.a.show12,
      onClick: this.toggleStart
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _make_less__WEBPACK_IMPORTED_MODULE_2___default.a.btn
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: processing ? _make_less__WEBPACK_IMPORTED_MODULE_2___default.a.process : _make_less__WEBPACK_IMPORTED_MODULE_2___default.a.start
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _make_less__WEBPACK_IMPORTED_MODULE_2___default.a.show12,
      onClick: this.toggleStart
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, processing ? '完成' : '录制')))));
  }

}

/***/ }),

/***/ "./src/pages/make.less":
/*!*****************************!*\
  !*** ./src/pages/make.less ***!
  \*****************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"normal":"normal___2womO","contentWrap":"contentWrap___3QzY7","logowrap":"logowrap___1FEIA","show12":"show12___2Bqfs","layer01":"layer01___3QKRi","layer02":"layer02___DJAYW","btn":"btn___3skna","start":"start___23zRv","process":"process___BQRQ_","try":"try___3PG7g","restart":"restart___iVaGE","upload":"upload___1cowR","show10":"show10___3ZpM7","show11":"show11___1xBKt","inshow11":"inshow11___AuVkl","show20":"show20___3z8ig","show21":"show21___b-3qz","timer":"timer___ifSiu","fadeinout":"fadeinout___CylBp"};

/***/ })

}]);