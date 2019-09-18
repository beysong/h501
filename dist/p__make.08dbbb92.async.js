(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["p__make"],{

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

var wenzi2 = __webpack_require__(/*! ../assets/wenzi2.png */ "./src/assets/wenzi2.png");

var tryImg = __webpack_require__(/*! ../assets/start.png */ "./src/assets/start.png");

var uploadImg = __webpack_require__(/*! ../assets/duihao.png */ "./src/assets/duihao.png");

class Make extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {
  constructor(props) {
    super(props);

    this.toggleStart = () => {
      var _this$state = this.state,
          processing = _this$state.processing,
          playing = _this$state.playing,
          timer = _this$state.timer;

      if (playing) {
        return;
      }

      if (processing) {
        if (this.timeroutRef) {
          clearInterval(this.timeroutRef);
        }

        wx.stopRecord({
          success: res => {
            console.log('res', res);
            var sourceId = res.localId;
            this.setState({
              sourceId,
              processing: false,
              finished: true,
              timer: 0
            });
          }
        }); // this.setState({
        //   sourceId: '21',
        //   processing: false,
        //   finished: true,
        // });
      } else {
        wx.startRecord();
        this.setState({
          processing: true
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
      var sourceId = this.state.sourceId;
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
          Object(_services_index__WEBPACK_IMPORTED_MODULE_5__[/* uploadVoice */ "a"])({
            serverId,
            code: location.query.code || ''
          }).then(r => {
            if (r.status === 200) {
              localStorage.sourceId = sourceId;
              umi_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('share?localId=' + sourceId + '&code=' + location.query.code || false);
            }

            this.setState({
              uploading: false
            });
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
      timer: 0
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
    var _this$state3 = this.state,
        sourceId = _this$state3.sourceId,
        processing = _this$state3.processing,
        uploading = _this$state3.uploading,
        playing = _this$state3.playing,
        timer = _this$state3.timer,
        finished = _this$state3.finished;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _make_less__WEBPACK_IMPORTED_MODULE_2___default.a.normal
    }, uploading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_loading__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "\u6B63\u5728\u63A5\u6536\u672A\u6765\u4FE1\u53F7..."
    }) : false, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _make_less__WEBPACK_IMPORTED_MODULE_2___default.a.contentWrap
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
      className: _make_less__WEBPACK_IMPORTED_MODULE_2___default.a.show20
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "\u5BF9\u4EBA\u3001\u7269\u3001\u7F51\u7684\u60F3\u8C61\u662F\u65E0\u9650\u8D8B\u8FD1\u81EA\u5DF1\u7684\u8FC7\u7A0B"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "\u591A\u60F3\u8C61\u4E00\u70B9 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "\u5C31\u79BB\u672A\u6765\u66F4\u8FD1\u4E00\u70B9")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _make_less__WEBPACK_IMPORTED_MODULE_2___default.a.layer02
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: Label,
      alt: "\u9ED1\u80F6\u5531\u7247"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _make_less__WEBPACK_IMPORTED_MODULE_2___default.a.show21
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: wenzi2,
      alt: "\u5411\u73B0\u5728 \u8BF4\u672A\u6765"
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
    }, finished ? '完成' : '重录'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "\u5F55\u5236")))));
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
module.exports = {"normal":"normal___2womO","contentWrap":"contentWrap___3QzY7","layer01":"layer01___3QKRi","layer02":"layer02___DJAYW","show12":"show12___2Bqfs","btn":"btn___3skna","start":"start___23zRv","process":"process___BQRQ_","try":"try___3PG7g","restart":"restart___iVaGE","upload":"upload___1cowR","show10":"show10___3ZpM7","show11":"show11___1xBKt","inshow11":"inshow11___AuVkl","show20":"show20___3z8ig","show21":"show21___b-3qz","timer":"timer___ifSiu","fadeinout":"fadeinout___CylBp"};

/***/ })

}]);