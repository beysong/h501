(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["p__premake"],{

/***/ "./src/pages/premake.js":
/*!******************************!*\
  !*** ./src/pages/premake.js ***!
  \******************************/
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
/* harmony import */ var _premake_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./premake.less */ "./src/pages/premake.less");
/* harmony import */ var _premake_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_premake_less__WEBPACK_IMPORTED_MODULE_2__);
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
    var _this$props = this.props,
        match = _this$props.match,
        location = _this$props.location;

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

    var ele = document.getElementById('touchid');
    var beginX, beginY, endX, endY, swipeLeft, swipeRight;
    ele.addEventListener('touchstart', function (event) {
      event.stopPropagation();
      event.preventDefault();
      beginX = event.targetTouches[0].screenX;
      beginY = event.targetTouches[0].screenY;
      swipeLeft = false;
      swipeRight = false;
    });
    ele.addEventListener('touchmove', function (event) {
      event.stopPropagation();
      event.preventDefault();
      endX = event.targetTouches[0].screenX;
      endY = event.targetTouches[0].screenY; // 左右滑动

      if (Math.abs(endX - beginX) - Math.abs(endY - beginY) > 0) {
        /*向右滑动*/
        // if (endX - beginX > 0) {
        //   swipeRight = true;
        //   swipeLeft = false;
        // } else {
        //   /*向左滑动*/
        //   swipeLeft = true;
        //   swipeRight = false;
        // }
      } else if (Math.abs(endX - beginX) - Math.abs(endY - beginY) < 0) {
        // 上下滑动
        console.log('11111');
      }
    });
    ele.addEventListener('touchend', function (event) {
      event.stopPropagation();
      event.preventDefault();

      if (Math.abs(endX - beginX) - Math.abs(endY - beginY) > 0) {
        event.stopPropagation();
        event.preventDefault();

        if (swipeRight) {
          swipeRight = !swipeRight;
          /*向右滑动*/
        }

        if (swipeLeft) {
          swipeLeft = !swipeLeft;
          /*向左滑动*/
        }
      } else {
        console.log('222', endY - beginY);

        if (endY - beginY < 0) {
          // router.push('make?code=' + location.query.code || '');
          window.location.href = './make.html?code=' + location.query.code || false;
        }
      }
    });
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
      className: _premake_less__WEBPACK_IMPORTED_MODULE_2___default.a.normal,
      id: "touchid"
    }, uploading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_loading__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "\u6B63\u5728\u63A5\u6536\u672A\u6765\u4FE1\u53F7..."
    }) : false, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _premake_less__WEBPACK_IMPORTED_MODULE_2___default.a.contentWrap
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _premake_less__WEBPACK_IMPORTED_MODULE_2___default.a.layer01
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: QINGHUIDA,
      alt: "\u8BF7\u56DE\u7B542029"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _premake_less__WEBPACK_IMPORTED_MODULE_2___default.a.show20
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "\u5BF9\u4EBA\u3001\u7269\u3001\u7F51\u7684\u60F3\u8C61\u662F\u65E0\u9650\u8D8B\u8FD1\u81EA\u5DF1\u7684\u8FC7\u7A0B"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "\u591A\u60F3\u8C61\u4E00\u70B9 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "\u5C31\u79BB\u672A\u6765\u66F4\u8FD1\u4E00\u70B9")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _premake_less__WEBPACK_IMPORTED_MODULE_2___default.a.layer02
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: Label,
      alt: "\u9ED1\u80F6\u5531\u7247"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _premake_less__WEBPACK_IMPORTED_MODULE_2___default.a.show21
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: wenzi2,
      alt: "\u5411\u73B0\u5728 \u8BF4\u672A\u6765"
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _premake_less__WEBPACK_IMPORTED_MODULE_2___default.a.arrow
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _premake_less__WEBPACK_IMPORTED_MODULE_2___default.a.arrow2
    }));
  }

}

/***/ }),

/***/ "./src/pages/premake.less":
/*!********************************!*\
  !*** ./src/pages/premake.less ***!
  \********************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"normal":"normal___3RukW","contentWrap":"contentWrap___3vmde","layer01":"layer01___-ZvqO","layer02":"layer02___k8jd2","show12":"show12___2MZ0C","btn":"btn___1EE-J","start":"start___1zCXb","process":"process___3g9Ho","try":"try___227eE","restart":"restart___1n7L9","upload":"upload___27j0L","show10":"show10___1YsIa","show11":"show11___1qmAV","inshow11":"inshow11___iXWL3","show20":"show20___2oLIP","show21":"show21___19jIx","timer":"timer___3tzT_","fadeinout":"fadeinout___1UM3x","arrow":"arrow___2_ZRt","arrow2":"arrow2___1Y4m2"};

/***/ })

}]);