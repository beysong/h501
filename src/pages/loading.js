import React from 'react';
import router from 'umi/router';
import styles from './loading.less';

const CP = require('../assets/changpian.jpg');

export default class Index extends React.PureComponent {
  componentDidMount() {
    setTimeout(() => {
      router.push('make');
    }, 12000);
  }
  render() {
    return (
      <div className={styles.normal}>
        <div className={styles.loading}>
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
        </div>
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
            <span style={{ fontSize: 30 }}>想象力</span> <br />
            才是最好的<span style={{ fontSize: 30 }}>驱动力</span>
          </div>
        </div>
      </div>
    );
  }
}
