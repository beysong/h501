import React from 'react';
import ShareBg from '../components/share';
import styles from './share.less';
import { WEB_URL, WECHATOPTIONS } from '../utils/config';

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
      sourceId: localStorage.sourceId || '',
      isshow: false, // 分享背景图
      playing: false, // 播放中
    };
  }

  componentDidMount() {
    wx.ready(function() {
      //需在用户可能点击分享按钮前就先调用
      wx.updateAppMessageShareData({
        title: WECHATOPTIONS.title || '加入远景', // 分享标题
        desc: WECHATOPTIONS.desc || '加入远景2019', // 分享描述
        link: WEB_URL + 'shared?sourceid=sourceid', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: WECHATOPTIONS.img, // 分享图标
        success: function() {
          // 设置成功
        },
      });
      wx.updateTimelineShareData({
        title: WECHATOPTIONS.title, // 分享标题
        link: WEB_URL + 'shared?sourceid=sourceid', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: WECHATOPTIONS.img, // 分享图标
        success: function() {
          // 设置成功
        },
      });
    });
    wx.onVoicePlayEnd({
      success: res => {
        this.setState({
          playing: false,
        });
        // var localId = res.localId; // 返回音频的本地ID
      },
    });
  }

  /* global wx */
  // 播放录音
  togglePlay = () => {
    const { playing, sourceId } = this.state;
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

  toggleShare = () => {
    const { isshow } = this.state;
    this.setState({
      isshow: !isshow,
    });
  };

  toJoin = () => {
    window.location.href = 'http://www.baidu.com';
  };

  render() {
    const { sourceId, isshow, playing } = this.state;
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
        <div
          style={{
            height: 1000,
          }}
        >
          <div style={{ height: 80 }}>
            <img style={{ width: 500 }} src={QINGHUIDA} alt="请回答2029" />
          </div>
          <div className={styles.show10}>
            <img style={{ width: 290 }} src={wenzi} alt="向现在 说未来" />
          </div>

          <div style={{ width: 500, marginTop: 80, textAlign: 'left' }}>
            <img style={{ width: 450 }} src={Label} alt="黑胶唱片" />
          </div>

          <div className={styles.show11}>
            <div className={styles.inshow11}>&nbsp;</div>
            <div className={styles.inshow11}>&nbsp;</div>
            <div className={styles.inshow11}>&nbsp;</div>
          </div>

          <div className={styles.show12}>
            <div onClick={this.toggleShare} className={styles.btn}>
              <div className={styles.try}>
                <img src={shareImg} alt="叫人试听" style={{ width: 50 }} />
              </div>
            </div>
            <div onClick={this.togglePlay} className={styles.btn}>
              <div className={styles.try}>
                {playing ? (
                  <div className={styles.process}></div>
                ) : (
                  <img src={tryImg} alt="播放" style={{ width: 50 }} />
                )}
              </div>
            </div>
            <div onClick={this.toJoin} className={styles.btn}>
              <div className={styles.upload}>
                <img src={joinImg} alt="加入远景" style={{ width: 50 }} />
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
