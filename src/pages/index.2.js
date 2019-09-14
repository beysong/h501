import React from 'react';

import styles from './index.less';

export default class Index extends React.PureComponent {
  componentDidMount() {
    setTimeout(() => {
      // router.push('luzhi');
    }, 5100);
  }
  render() {
    return (
      <div className={styles.normal}>
        <div className={styles.loading}>
          <div className={styles.loader}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <br />
          <div style={{ textAlign: 'center' }} onClick={() => {}}>
            正在接收未来信号···
          </div>
          <br />
          <br />
        </div>
        <div className={styles.start1}>
          <div className={styles.loader}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <br />
          <div style={{ textAlign: 'center' }} onClick={() => {}}>
            正在接收未来信号···
          </div>
        </div>

        <div className={styles.start2}>
          <div className={styles.loader}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <br />
          <div style={{ textAlign: 'left' }} onClick={() => {}}>
            与任何一种能源相比
          </div>
          <div style={{ textAlign: 'left' }} onClick={() => {}}>
            <span style={{ fontSize: 18 }}>想象力</span>
          </div>
          <div style={{ textAlign: 'left' }} onClick={() => {}}>
            才是最好的<span style={{ fontSize: 18 }}>驱动力</span>
          </div>
        </div>
      </div>
    );
  }
}
