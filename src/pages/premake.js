import React from 'react';
import router from 'umi/router';
import styles from './premake.less';
import Loading from '../components/loading';
import { wxConfig2, isAndroid, weixinVersion } from '../utils/index';

import { uploadVoice } from '../services/index';

const QINGHUIDA = require('../assets/qinghuida.png');
const Label = require('../assets/Label.png');
const wenzi2 = require('../assets/wenzi2.png');
const LOGO = require('../assets/logo.png');
const SOLOGN = require('../assets/sologn.png');

export default class Make extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      sourceId: '',
      serverId: '',
      processing: false, // 录制中
      finished: false, // 录制完成
      uploading: false, // 上传中
      playing: false, // 播放中
      timer: 0,
    };
  }
  componentDidMount() {
    const { match, location } = this.props;
    if (isAndroid() && !weixinVersion()) {
      wx.ready(() => {
        wx.onVoicePlayEnd({
          success: res => {
            this.setState({
              playing: false,
            });
            // var localId = res.localId; // 返回音频的本地ID
          },
        });
        wx.onVoiceRecordEnd({
          // 录音时间超过一分钟没有停止的时候会执行 complete 回调
          complete: res => {
            var sourceId = res.localId;

            this.setState({
              sourceId,
              processing: false,
              finished: true,
            });
          },
        });
      });
    } else {
      wxConfig2().then(r => {
        wx.ready(() => {
          wx.onVoicePlayEnd({
            success: res => {
              this.setState({
                playing: false,
              });
              // var localId = res.localId; // 返回音频的本地ID
            },
          });
          wx.onVoiceRecordEnd({
            // 录音时间超过一分钟没有停止的时候会执行 complete 回调
            complete: res => {
              var sourceId = res.localId;

              this.setState({
                sourceId,
                processing: false,
                finished: true,
              });
            },
          });
        });
      });
    }

    let ele = document.getElementById('touchid');
    let beginX, beginY, endX, endY, swipeLeft, swipeRight;
    ele.addEventListener('touchstart', function(event) {
      event.stopPropagation();
      event.preventDefault();
      beginX = event.targetTouches[0].screenX;
      beginY = event.targetTouches[0].screenY;
      swipeLeft = false;
      swipeRight = false;
    });

    ele.addEventListener('touchmove', function(event) {
      event.stopPropagation();
      event.preventDefault();
      endX = event.targetTouches[0].screenX;
      endY = event.targetTouches[0].screenY;
      // 左右滑动
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
    ele.addEventListener('touchend', function(event) {
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
          window.location.href = './make.html?code=' + location.query.code || '';
        }
      }
    });
  }

  /* global wx */
  // 开始录音
  toggleStart = () => {
    const { processing, playing, timer } = this.state;
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
          let sourceId = res.localId;
          this.setState({
            sourceId,
            processing: false,
            finished: true,
            timer: 0,
          });
        },
      });
      // this.setState({
      //   sourceId: '21',
      //   processing: false,
      //   finished: true,
      // });
    } else {
      wx.startRecord();
      this.setState({
        processing: true,
      });
      this.timeroutRef = setInterval(() => {
        this.setState((state, props) => ({
          timer: state.timer + 1,
        }));
      }, 1000);
    }
  };
  // timeCount = () => {
  //   setTimeout(() => {
  //     this.setState((state, props) => ({
  //       timer: state.timer + 1,
  //     }));
  //   }, 1000);
  // };
  // 播放录音
  togglePlay = () => {
    const { playing, processing, sourceId, serverId } = this.state;
    if (processing) {
      return;
    }
    if (playing) {
      wx.pauseVoice({
        localId: sourceId, // 需要暂停的音频的本地ID，由stopRecord接口获得
      });
      this.setState({
        playing: false,
      });
    } else {
      wx.playVoice({
        localId: sourceId,
      });
      this.setState({
        playing: true,
      });
    }
  };

  // 上传录音
  upload = () => {
    const { sourceId } = this.state;
    const { location } = this.props;

    this.setState({
      uploading: true,
    });
    wx.uploadVoice({
      localId: sourceId, // 需要上传的音频的本地ID，由stopRecord接口获得
      isShowProgressTips: 1, // 默认为1，显示进度提示
      success: res => {
        let serverId = res.serverId; // 返回音频的服务器端ID
        this.setState({
          serverId,
        });
        uploadVoice({
          serverId,
          code: location.query.code || '',
        }).then(r => {
          if (r.status === 200) {
            localStorage.sourceId = sourceId;
            router.push('share?localId=' + sourceId + '&code=' + location.query.code || '');
          }
          this.setState({
            uploading: false,
          });
        });
      },
    });
  };

  render() {
    const { sourceId, processing, uploading, playing, timer, finished } = this.state;
    return (
      <div className={styles.normal} id="touchid">
        {uploading ? <Loading text="正在接收未来信号..." /> : false}
        <div className={styles.contentWrap}>
          <div className={styles.logowrap}>
            <img src={LOGO} alt="远景" />
            <img src={SOLOGN} alt="2020年校园招聘" />
          </div>
          <div className={styles.layer01}>
            <img src={QINGHUIDA} alt="请回答2029" />
          </div>
          <div className={styles.show20}>
            <div>对人、物、网的想象是无限趋近自己的过程</div>
            <div>多想象一点 </div>
            <div>就离未来更近一点</div>
          </div>
          <div className={styles.layer02}>
            <img src={Label} alt="黑胶唱片" />
          </div>
          <div className={styles.show21}>
            <img src={wenzi2} alt="向现在 说未来" />
          </div>
        </div>
        <div className={styles.arrow}></div>
        <div className={styles.arrow2}></div>
      </div>
    );
  }
}
