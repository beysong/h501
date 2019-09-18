import React from 'react';
import router from 'umi/router';
import styles from './loading.less';
import { wxConfig2 } from '../utils/index';
const Label = require('../assets/Label.png');

export default class Index extends React.PureComponent {
  componentDidMount() {
    wxConfig2();
    const { match, location } = this.props;
    console.log('match', match, location);
    localStorage.token = location.query.token || '';
    localStorage.code = location.query.code || '';
    setTimeout(() => {
      router.push('make?code=' + location.query.code || '');
    }, 16000);

    let x = document.createElement('AUDIO');
    x.setAttribute('id', 'audioLabel2');
    // x.setAttribute('loop', true);
    x.setAttribute('src', '/speak.mp3');
    x.setAttribute('controls', 'controls');
    document.body.appendChild(x);
    setTimeout(() => {
      let audioRef = document.getElementById('audioLabel2');
      audioRef.play();
    }, 0);
  }
  render() {
    return (
      <div className={styles.normal}>
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
        <img style={{ width: 0 }} src={Label} alt="黑胶唱片" />
      </div>
    );
  }
}
