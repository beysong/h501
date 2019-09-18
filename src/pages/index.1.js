import React from 'react';
import router from 'umi/router';
import styles from './index.1.less';

const CP = require('../assets/Label.png');

export default class Index extends React.PureComponent {
  componentDidMount() {
    setTimeout(() => {
      router.push('luzhi');
    }, 3100);
  }
  render() {
    return (
      <div className={styles.normal}>
        <div className={styles.goods}>
          <img src={CP} />
        </div>

        <div style={{ textAlign: 'center', marginTop: 200 }} onClick={() => {}}>
          开始录音
        </div>
      </div>
    );
  }
}
