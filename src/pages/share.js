import React from 'react';
import ShareBg from '../components/share';
import Join from '../components/join';
import styles from './share.less';
import { WEB_URL, WEB_HOST, WECHATOPTIONS } from '../utils/config';
import { wxConfig2, isAndroid, weixinVersion } from '../utils/index';

const QINGHUIDA = require('../assets/qinghuida.png');
const Label = require('../assets/Label.png');
const wenzi = require('../assets/wenzi.png');
const tryImg = require('../assets/start.png');
const shareImg = require('../assets/share.png');
const joinImg = require('../assets/join.png');

export default class Share extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      sourceId: localStorage.sourceId || props.location.query.localId || '',
      isshow: false, // 分享背景图
      playing: false, // 播放中
      code: props.location.query.code || '',
      joinShow: false,
    };
  }

  componentDidMount() {
    this.createAudio();
    if (isAndroid() && !weixinVersion()) {
      wxConfig2().then(r => {
        let _this = this;
        wx.ready(() => {
          //需在用户可能点击分享按钮前就先调用
          wx.updateAppMessageShareData({
            title: WECHATOPTIONS.title || '加入远景', // 分享标题
            desc: WECHATOPTIONS.desc || '加入远景2019', // 分享描述
            link: WEB_URL + '/shared.html?code=' + _this.state.code, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: WECHATOPTIONS.img, // 分享图标
            success: () => {
              // 设置成功
            },
          });
          wx.updateTimelineShareData({
            title: WECHATOPTIONS.title, // 分享标题
            link: WEB_URL + '/shared.html?code=' + _this.state.code, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: WECHATOPTIONS.img, // 分享图标
            success: () => {
              // 设置成功
            },
          });

          console.log('0-0-0-0-1');
          // wx.onVoicePlayEnd({
          //   success: res => {
          //     console.log('0-0-0-0-2');
          //     this.setState({
          //       playing: false,
          //     });
          //     // var localId = res.localId; // 返回音频的本地ID
          //   },
          // });
        });
      });
    } else {
      let _this = this;
      wx.ready(() => {
        //需在用户可能点击分享按钮前就先调用
        wx.updateAppMessageShareData({
          title: WECHATOPTIONS.title || '加入远景', // 分享标题
          desc: WECHATOPTIONS.desc || '加入远景2019', // 分享描述
          link: WEB_URL + '/shared.html?code=' + _this.state.code, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: WECHATOPTIONS.img, // 分享图标
          success: () => {
            // 设置成功
          },
        });
        wx.updateTimelineShareData({
          title: WECHATOPTIONS.title, // 分享标题
          link: WEB_URL + '/shared.html?code=' + _this.state.code, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: WECHATOPTIONS.img, // 分享图标
          success: () => {
            // 设置成功
          },
        });

        console.log('0-0-0-0-1');
        // wx.onVoicePlayEnd({
        //   success: res => {
        //     console.log('0-0-0-0-2');
        //     this.setState({
        //       playing: false,
        //     });
        //     // var localId = res.localId; // 返回音频的本地ID
        //   },
        // });
      });
    }
  }

  /* global wx */
  // 播放录音
  togglePlay = () => {
    const { playing, sourceId } = this.state;

    let audioRef = document.getElementById('audioLabel3');

    if (playing) {
      // wx.pauseVoice({
      //   localId: sourceId, // 需要暂停的音频的本地ID，由stopRecord接口获得
      // });

      audioRef.pause();
      this.setState({
        playing: false,
      });
    } else {
      // wx.playVoice({
      //   localId: sourceId,
      // });
      console.log('audioRef', audioRef);
      audioRef.play();
      this.setState({
        playing: true,
      });
    }
  };

  toggleShare = () => {
    const { isshow } = this.state;
    this.setState({
      isshow: !isshow,
    });
  };

  toJoin = () => {
    this.setState({
      joinShow: true,
    });

    // window.location.href = 'http://www.baidu.com';
  };

  createAudio = () => {
    const { location } = this.props;
    let x = document.createElement('AUDIO');
    x.setAttribute('id', 'audioLabel3');
    x.setAttribute('style', 'z-index: -1;');
    x.setAttribute('src', `http:${WEB_HOST}/get/${location.query.code || ''}`);
    x.setAttribute('controls', 'controls');
    document.body.appendChild(x);

    let audioRef = document.getElementById('audioLabel3');
    audioRef.addEventListener('ended', () => {
      //当播放完一首歌曲时也会触发
      console.log('event ended: ' + new Date().getTime());
      if (this.interval) {
        clearInterval(this.interval);
        this.interval = null;
      }
      this.setState({
        playing: false,
        lineWidth: 0,
      });
    });
  };

  render() {
    const { sourceId, isshow, joinShow, playing } = this.state;
    return (
      <div className={styles.normal}>
        {isshow ? (
          <ShareBg
            click={() => {
              this.setState({ isshow: false });
            }}
          />
        ) : (
          false
        )}
        {joinShow ? (
          <Join
            click={() => {
              this.setState({ joinShow: false });
            }}
          />
        ) : (
          false
        )}
        <div>
          <div className={styles.layer01}>
            <img src={QINGHUIDA} alt="请回答2029" />
          </div>
          <div className={styles.show10}>
            <img src={wenzi} alt="向现在 说未来" />
          </div>

          <div className={styles.layer02}>
            <img src={Label} alt="黑胶唱片" />
          </div>

          <div className={styles.show11}>
            <div className={styles.inshow11}>&nbsp;</div>
            <div className={styles.inshow11}>&nbsp;</div>
            <div className={styles.inshow11}>&nbsp;</div>
          </div>

          <div className={styles.show12}>
            <div onClick={this.toggleShare} className={styles.btn}>
              <div className={styles.try}>
                <img src={shareImg} alt="叫人试听" />
              </div>
            </div>
            <div onClick={this.togglePlay} className={styles.btn}>
              <div className={styles.try}>
                {playing ? <div className={styles.process}></div> : <img src={tryImg} alt="播放" />}
              </div>
            </div>
            <div onClick={this.toJoin} className={styles.btn}>
              <div className={styles.upload}>
                <img src={joinImg} alt="加入远景" />
              </div>
            </div>
          </div>
          <div className={styles.show12}>
            <div onClick={this.toggleShare} style={{ flex: 1, textAlign: 'center' }}>
              叫人试听
            </div>
            <div onClick={this.togglePlay} style={{ flex: 1, textAlign: 'center' }}>
              播放
            </div>
            <div onClick={this.toJoin} style={{ flex: 1, textAlign: 'center' }}>
              加入远景
            </div>
          </div>
        </div>
      </div>
    );
  }
}
