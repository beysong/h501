import React from 'react';
import { WEB_URL, WECHATOPTIONS } from '../utils/config';
import { getVoice } from '../services/index';
import styles from './shared.less';

const QINGHUIDA = require('../assets/qinghuida.png');
const Label = require('../assets/Label.png');
const wenzi = require('../assets/wenzi.png');
const tryImg = require('../assets/start.png');
const joinImg = require('../assets/join.png');

export default class Shared extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      sourceId: props.location.query.sourceid || '',
      isshow: false, // 分享背景图
      playing: false, // 播放中
      dataInfo: {},
      lineWidth: 0,
    };
  }

  componentDidMount() {
    const { location } = this.props;
    getVoice({ mediaId: location.query.sourceid || '' }).then(r => {
      if (r.status === 200) {
        this.setState({ dataInfo: r.body });
      }
      this.createAudio();
    });

    wx.ready(function() {
      //需在用户可能点击分享按钮前就先调用
      wx.updateAppMessageShareData({
        title: WECHATOPTIONS.title || '加入远景', // 分享标题
        desc: WECHATOPTIONS.desc || '加入远景2019', // 分享描述
        link: WECHATOPTIONS.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: WECHATOPTIONS.img, // 分享图标
        success: function() {
          // 设置成功
        },
      });
      wx.updateTimelineShareData({
        title: WECHATOPTIONS.title || '加入远景', // 分享标题
        link: WECHATOPTIONS.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: WECHATOPTIONS.img, // 分享图标
        success: function() {
          // 设置成功
        },
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
  togglePlay = () => {
    const { playing } = this.state;
    const { location } = this.props;
    let audioRef = document.getElementById('audioLabel');
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    } else {
      this.interval = setInterval(() => {
        this.setState((state, props) => ({
          lineWidth: state.lineWidth + 400 / audioRef.duration,
        }));
      }, 1000);
    }

    if (playing) {
      audioRef.pause();
      this.setState({
        playing: false,
      });
    } else {
      audioRef.play();
      this.setState({
        playing: true,
      });
    }
  };

  toJoin = () => {
    window.location.href = 'http://www.baidu.com';
  };

  createAudio = () => {
    let x = document.createElement('AUDIO');
    x.setAttribute('id', 'audioLabel');
    x.setAttribute('src', '/test.mp3');
    x.setAttribute('controls', 'controls');
    document.body.appendChild(x);
  };

  render() {
    const { playing, dataInfo, lineWidth } = this.state;
    return (
      <div className={styles.normal}>
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
            <div className={styles.progressWrap}>
              <div className={styles.line}>
                <div
                  ref={r => {
                    this.refLine = r;
                  }}
                  className={styles.whiteLine}
                  style={{ width: lineWidth }}
                ></div>
                <div className={styles.circle}></div>
              </div>
            </div>
            <div className={styles.inshow11}>听到{dataInfo.name || ''}的未来想象力</div>
          </div>

          <div className={styles.show12}>
            <div onClick={this.togglePlay} className={styles.btn}>
              <div className={styles.try}>
                {playing ? (
                  <div className={styles.process}></div>
                ) : (
                  <img src={tryImg} alt="按下播放" />
                )}
              </div>
            </div>
            <div onClick={this.toJoin} className={styles.btn}>
              <div className={styles.upload}>
                <img src={joinImg} alt="加入远景" />
              </div>
            </div>
          </div>
          <div className={styles.show12}>
            <div style={{ flex: 1, textAlign: 'center' }}>按下播放</div>
            <div onClick={this.toJoin} style={{ flex: 1, textAlign: 'center' }}>
              加入远景
            </div>
          </div>
        </div>
        {/* <audio controls>
          <source src="/test.mp3" type="audio/mpeg" />
          您的浏览器不支持 audio 元素。
        </audio> */}
      </div>
    );
  }
}
