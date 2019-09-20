import React from 'react';
import router from 'umi/router';
import styles from './make.less';
import Loading from '../components/loading';
import { wxConfig2, isAndroid, weixinVersion } from '../utils/index';

import { uploadVoice } from '../services/index';

const QINGHUIDA = require('../assets/qinghuida.png');
const Label = require('../assets/Label.png');
const wenzi = require('../assets/wenzi.png');
const tryImg = require('../assets/start.png');
const uploadImg = require('../assets/duihao.png');
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
      st: 0,
      et: 0,
    };
  }
  componentDidMount() {
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
            let sourceId = res.localId;

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
              let sourceId = res.localId;

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
  }

  /* global wx */
  // 开始录音
  toggleStart = () => {
    const { processing, playing } = this.state;
    if (playing) {
      return;
    }
    if (processing) {
      if (this.timeroutRef) {
        clearInterval(this.timeroutRef);
      }
      let et = new Date().getTime();
      wx.stopRecord({
        success: res => {
          console.log('res', res);
          let sourceId = res.localId;
          this.setState({
            sourceId,
            processing: false,
            finished: true,
            et,
          });
        },
      });
      // this.setState({
      //   sourceId: '21',
      //   processing: false,
      //   finished: true,
      // });
    } else {
      let st = new Date().getTime();
      wx.startRecord();
      this.setState({
        processing: true,
        timer: 0,
        st,
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
    const { sourceId, timer, st, et } = this.state;
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
          sec: Math.round((et - st) / 1000),
        }).then(r => {
          if (r.status === 200) {
            localStorage.sourceId = sourceId;
            router.push('share?localId=' + sourceId + '&code=' + location.query.code || '');
          }
          this.setState({
            uploading: false,
          });
        });
        wx.downloadVoice({
          serverId, // 需要下载的音频的服务器端ID，由uploadVoice接口获得
          isShowProgressTips: 1, // 默认为1，显示进度提示
          success: function(res) {
            console.log('9999999999:', res);
            var localId = res.localId; // 返回音频的本地ID
          },
        });
      },
    });
  };

  render() {
    const { sourceId, processing, uploading, playing, timer, finished } = this.state;
    return (
      <div className={styles.normal}>
        {uploading ? <Loading text="正在接收未来信号..." /> : false}
        <div className={styles.contentWrap}>
          <div className={styles.logowrap}>
            <img src={LOGO} alt="远景" />
            <img src={SOLOGN} alt="2020年校园招聘" />
          </div>
          <div className={styles.layer01}>
            <img src={QINGHUIDA} alt="请回答2029" />
          </div>
          <div className={styles.show10}>
            <img src={wenzi} alt="向现在 说未来" />
          </div>
          {/* <div className={styles.show20}>
            <div>对人、物、网的想象是无限趋近自己的过程</div>
            <div>多想象一点 </div>
            <div>就离未来更近一点</div>
          </div> */}
          <div className={styles.layer02}>
            <img src={Label} alt="黑胶唱片" />
          </div>
          {/* <div className={styles.show21}>
            <img src={wenzi2} alt="向现在 说未来" />
          </div> */}

          {/* <div className={styles.show11}>
            <div className={styles.inshow11}>说出你的2029</div>
            <div className={styles.inshow11}>未来想象力</div>
            <div className={styles.inshow11}>生成专属唱片</div>
          </div> */}
          <div className={styles.show11}>
            <div className={styles.inshow11}>现在，向未来发声，</div>
            <div className={styles.inshow11}>2029，让未来发生。</div>
            <div className={styles.inshow11}>&nbsp;</div>
            {processing ? (
              <div className={styles.timer} style={{ textAlign: 'center' }}>
                00 : 00 : {timer > 9 ? timer : `0${timer}`}
              </div>
            ) : (
              false
            )}
          </div>
          {sourceId ? (
            <>
              <div className={styles.show12}>
                <div className={styles.btn} onClick={this.togglePlay}>
                  <div className={styles.try}>
                    {playing ? (
                      <div className={styles.process}></div>
                    ) : (
                      <img src={tryImg} alt="试听" />
                    )}
                  </div>
                </div>
                <div className={styles.btn} onClick={this.toggleStart}>
                  <div className={processing ? styles.process : styles.restart}></div>
                </div>
                <div className={styles.btn} onClick={this.upload}>
                  <div className={styles.upload}>
                    <img src={uploadImg} alt="上传" />
                  </div>
                </div>
              </div>
              <div className={styles.show12}>
                <div onClick={this.togglePlay}>试听</div>
                <div onClick={this.toggleStart}>{processing ? '完成' : '重录'}</div>
                <div onClick={this.upload}>上传</div>
              </div>
            </>
          ) : (
            <>
              <div className={styles.show12} onClick={this.toggleStart}>
                <div className={styles.btn}>
                  <div className={processing ? styles.process : styles.start}></div>
                </div>
              </div>
              <div className={styles.show12} onClick={this.toggleStart}>
                <div>{processing ? '完成' : '录制'}</div>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}
