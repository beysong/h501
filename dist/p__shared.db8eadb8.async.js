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
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/index */ "./src/services/index.js");








var QINGHUIDA = __webpack_require__(/*! ../assets/qinghuida.png */ "./src/assets/qinghuida.png");

var Label = __webpack_require__(/*! ../assets/Label.png */ "./src/assets/Label.png");

var wenzi = __webpack_require__(/*! ../assets/wenzi.png */ "./src/assets/wenzi.png");

var tryImg = __webpack_require__(/*! ../assets/start.png */ "./src/assets/start.png");

var joinImg = __webpack_require__(/*! ../assets/join.png */ "./src/assets/join.png");

var LOGO = __webpack_require__(/*! ../assets/logo.png */ "./src/assets/logo.png");

var SOLOGN = __webpack_require__(/*! ../assets/sologn.png */ "./src/assets/sologn.png");

var TING = __webpack_require__(/*! ../assets/ting.png */ "./src/assets/ting.png");

var speakSource = __webpack_require__(/*! ../assets/speak2.mp3 */ "./src/assets/speak2.mp3");

class Shared extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {
  constructor(props) {
    super(props);

    this.togglePlay = () => {
      var _this$state = this.state,
          playing = _this$state.playing,
          speaking = _this$state.speaking,
          localId = _this$state.localId,
          dataInfo = _this$state.dataInfo;
      var speakRef = document.getElementById('speakAudio');

      if (localId) {
        if (speaking) {
          speakRef.pause();
          this.setState({
            speaking: false
          });
        }

        if (this.interval) {
          clearInterval(this.interval);
          this.interval = null;
        } else {
          this.interval = setInterval(() => {
            this.setState((state, props) => ({
              lineWidth: state.lineWidth + 400 / dataInfo.sec
            }));
          }, 1000);
        }

        if (playing) {
          wx.pauseVoice({
            localId // 需要播放的音频的本地ID，由stopRecord接口获得

          });
          this.setState({
            playing: false
          });
        } else {
          wx.playVoice({
            localId // 需要播放的音频的本地ID，由stopRecord接口获得

          });
          this.setState({
            playing: true
          });
        }
      } else {
        var audioRef = document.getElementById('audioLabel');

        if (speaking) {
          speakRef.pause();
          this.setState({
            speaking: false
          });
        }

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
      }
    };

    this.toJoin = () => {
      // this.setState({
      //   joinShow: true,
      // });
      window.location.href = 'https://campus.envisioncn.com/dream_par_stu_mob/html/get_post_postLis.html';
    };

    this.createAudio = () => {
      var location = this.props.location;
      var dataInfo = this.state.dataInfo;
      var x = document.createElement('AUDIO');
      x.setAttribute('id', 'audioLabel');
      x.setAttribute('style', 'z-index: -1;'); // x.setAttribute('loop', true);

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

    this.createSpeakAutio = () => {
      var x = document.createElement('AUDIO');
      x.setAttribute('id', 'speakAudio');
      x.setAttribute('style', 'z-index: -1;');
      x.setAttribute('src', speakSource);
      x.setAttribute('controls', 'controls');
      document.body.appendChild(x);
      var speakRef = document.getElementById('speakAudio');
      speakRef.addEventListener('ended', () => {
        //当播放完一首歌曲时也会触发
        console.log('event ended: ' + new Date().getTime());
        this.setState({
          speaking: false
        });
      });
    };

    this.toggleSpeak = () => {
      var _this$state2 = this.state,
          speaking = _this$state2.speaking,
          playing = _this$state2.playing,
          localId = _this$state2.localId;
      var speakRef = document.getElementById('speakAudio');

      if (localId) {
        if (playing) {
          wx.pauseVoice({
            localId
          });
          this.setState({
            playing: false
          });
        }

        if (speaking) {
          speakRef.pause();
          this.setState({
            speaking: false
          });
        } else {
          speakRef.play();
          this.setState({
            speaking: true
          });
        }
      } else {
        var audioRef = document.getElementById('audioLabel');

        if (playing) {
          audioRef.pause();
          this.setState({
            playing: false
          });
        }

        if (speaking) {
          speakRef.pause();
          this.setState({
            speaking: false
          });
        } else {
          speakRef.play();
          this.setState({
            speaking: true
          });
        }
      }
    };

    this.state = {
      code: props.location.query.code || '',
      isshow: false,
      // 分享背景图
      playing: false,
      // 播放中
      dataInfo: {},
      lineWidth: 0,
      speaking: false,
      loading: false,
      localId: ''
    };
  }

  componentDidMount() {
    var location = this.props.location;
    console.log('location', location);

    if (!location.query.code) {
      umi_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('error');
    }

    this.createAudio();
    this.createSpeakAutio();

    if (Object(_utils_index__WEBPACK_IMPORTED_MODULE_5__[/* isAndroid */ "a"])() && !Object(_utils_index__WEBPACK_IMPORTED_MODULE_5__[/* weixinVersion */ "b"])()) {
      Object(_utils_index__WEBPACK_IMPORTED_MODULE_5__[/* wxConfig2 */ "c"])().then(r => {
        wx.ready(() => {
          wx.onVoicePlayEnd({
            success: res => {
              var localId = res.localId; // 返回音频的本地ID

              this.setState({
                playing: false,
                lineWidth: 0
              });
            }
          }); //需在用户可能点击分享按钮前就先调用

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
    } else {
      wx.ready(() => {
        wx.onVoicePlayEnd({
          success: res => {
            var localId = res.localId; // 返回音频的本地ID

            this.setState({
              playing: false,
              lineWidth: 0
            });
          }
        }); //需在用户可能点击分享按钮前就先调用

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
    }

    this.setState({
      loading: true
    });
    Object(_services_index__WEBPACK_IMPORTED_MODULE_6__[/* getName */ "a"])({
      code: location.query.code || ''
    }).then(r => {
      if (r.status === 200) {
        this.setState({
          dataInfo: r.body || {}
        });
        wx.ready(() => {
          wx.downloadVoice({
            serverId: r.body.media_id,
            // 需要下载的音频的服务器端ID，由uploadVoice接口获得
            isShowProgressTips: 0,
            // 默认为1，显示进度提示
            success: res => {
              console.log('888888', res);
              var localId = res.localId; // 返回音频的本地ID

              this.setState({
                localId
              });
            }
          });
        });
      }

      this.setState({
        loading: false
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
    var _this$state3 = this.state,
        playing = _this$state3.playing,
        dataInfo = _this$state3.dataInfo,
        lineWidth = _this$state3.lineWidth,
        joinShow = _this$state3.joinShow,
        loading = _this$state3.loading;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _shared_less__WEBPACK_IMPORTED_MODULE_4___default.a.normal
    }, joinShow ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_join__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
      click: () => {
        this.setState({
          joinShow: false
        });
      }
    }) : false, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _shared_less__WEBPACK_IMPORTED_MODULE_4___default.a.logowrap
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: LOGO,
      alt: "\u8FDC\u666F"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: SOLOGN,
      alt: "2020\u5E74\u6821\u56ED\u62DB\u8058"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      onClick: this.toggleSpeak,
      className: _shared_less__WEBPACK_IMPORTED_MODULE_4___default.a.btn
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _shared_less__WEBPACK_IMPORTED_MODULE_4___default.a.upload
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: TING,
      alt: "\u8046\u542C\u8FDC\u666F"
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _shared_less__WEBPACK_IMPORTED_MODULE_4___default.a.show12
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      onClick: this.togglePlay,
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
    }, "\u52A0\u5165\u8FDC\u666F"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      onClick: this.toggleSpeak,
      style: {
        flex: 1,
        textAlign: 'center'
      }
    }, "\u8046\u542C\u8FDC\u666F"))));
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
module.exports = {"normal":"normal___1NOLf","logowrap":"logowrap___s_5GO","layer01":"layer01___2Mb5Z","layer02":"layer02___1-X8d","show12":"show12___21CKd","btn":"btn___24jaP","start":"start___fENL1","process":"process___2YJs3","try":"try___3xotJ","restart":"restart___s9NJi","upload":"upload___3rhJ4","progressWrap":"progressWrap___2-c53","line":"line___12LUW","whiteLine":"whiteLine___3-NcO","circle":"circle___2c76j","show10":"show10___16F5j","show11":"show11___10z88","inshow11":"inshow11___28-DE"};

/***/ })

}]);