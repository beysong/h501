import React from 'react';
import styles from './share.less';
const shareBg = require('../assets/shareWechat.png');

export default class Index extends React.PureComponent {
  render() {
    return (
      <div className={styles.normal} onClick={this.props.click}>
        <img style={{ width: 400 }} src={shareBg} alt="微信分享" />
      </div>
    );
  }
}
