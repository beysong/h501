import React from 'react';
import router from 'umi/router';
import styles from './loading.less';
import Loading from '../components/loading';
import { wxConfig2, isAndroid, weixinVersion } from '../utils/index';
const Label = require('../assets/Label.png');

const audioSource = require('../assets/speak2.mp3');

export default class Index extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      audioLoading: true,
    };
  }
  componentDidMount() {
    if (isAndroid() && !weixinVersion()) {
      wxConfig2();
    }
    const { match, location } = this.props;
    console.log('match', match, location);
    localStorage.token = location.query.token || '';
    localStorage.code = location.query.code || '';
    setTimeout(() => {
      // router.push('make?code=' + location.query.code || '');

      window.location.href = './premake.html?code=' + location.query.code || '';
    }, 31000);

    // let x = document.createElement('AUDIO');
    // x.setAttribute('id', 'audioLabel2');
    // x.setAttribute('style', 'z-index: -1;');
    // x.setAttribute('preload', 'load');
    // // x.setAttribute('loop', true);
    // x.setAttribute('src', audioSource);
    // x.setAttribute('controls', 'controls');
    // document.body.appendChild(x);
    // let audioRef = document.getElementById('audioLabel2');

    // audioRef.play();

    let audioRef = new Audio();
    audioRef.src = audioSource;
    audioRef.preload = 'auto';
    audioRef.addEventListener('loadeddata', event => {
      setTimeout(() => {
        this.setState({
          audioLoading: false,
        });
      }, 100);
      // audioRef.play();
    });
    audioRef.play();

    /* global wx */
    wx.ready(() => {
      try {
        audioRef.play();
      } catch (error) {}
    });

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
          window.location.href = './premake.html?code=' + location.query.code || '';
        }
      }
    });
  }
  render() {
    const { audioLoading } = this.state;
    return audioLoading ? (
      <div className={styles.normal} id="touchid">
        <Loading />
      </div>
    ) : (
      <div className={styles.normal} id="touchid">
        {/* <div className={styles.loading}>
          <div className={styles.bars}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>
          <br />
          <div style={{ textAlign: 'center' }} onClick={() => {}}>
            正在接收未来信号···
          </div>
          <br />
          <br />
        </div> */}
        <div className={styles.start1}>
          <div className={styles.bars}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>
          <br />
          <div style={{ textAlign: 'left' }} onClick={() => {}}>
            未来是被想象出来的
            <br />
            未来不是通过一些线性的规划
          </div>
        </div>
        <br />
        <br />
        <div className={styles.start2}>
          <div className={styles.bars}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>
          <br />
          <div style={{ textAlign: 'left' }} onClick={() => {}}>
            其实很多时候 <br />
            是由艺术家 设计师 包括这些哲学家 <br />
            他们在重新定义未来
          </div>
        </div>
        <br />
        <br />
        <div className={styles.start3}>
          <div className={styles.bars}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>
          <br />
          <div style={{ textAlign: 'left' }} onClick={() => {}}>
            他不会去重复过去的东西
            <br />
            他永远是用他的想象力
            <br />
            在引领未来的发生
          </div>
        </div>
        <div className={styles.start4}>
          <div className={styles.bars}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>
          <br />
          <div style={{ textAlign: 'left' }} onClick={() => {}}>
            与任何一种能源相比 <br />
            <span className={styles.fontSize30}>想象力</span> <br />
            才是最好的<span className={styles.fontSize30}>驱动力</span>
          </div>
        </div>
        <div className={styles.arrow}></div>
        <div className={styles.arrow2}></div>

        <img style={{ width: 0 }} src={Label} alt="黑胶唱片" />
      </div>
    );
  }
}
