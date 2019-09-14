import React from 'react';
import styles from './loading.less';

export default class Index extends React.PureComponent {
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
            {this.props.text || '正在接收未来信号···'}
          </div>
          <br />
          <br />
        </div>
      </div>
    );
  }
}
