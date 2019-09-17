import React from 'react';
import styles from './join.less';
const shareBg = require('../assets/yuanjing.jpeg');

export default class Index extends React.PureComponent {
  render() {
    return (
      <div className={styles.normal} onClick={this.props.click}>
        <img src={shareBg} alt="加入远景" />
      </div>
    );
  }
}
