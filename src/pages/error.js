import React from 'react';
import styles from './error.less';
const CP = require('../assets/error.png');

export default class ErrorCls extends React.PureComponent {
  render() {
    const { location } = this.props;
    return (
      <div className={styles.normal}>
        <div>
          <img style={{ width: '52%' }} src={CP} />
        </div>
        <br />
        {location.query.type == 1 ? (
          <div style={{ textAlign: 'left', width: '30%', margin: '0 auto' }}>
            <div>啊噢·· </div>
            <div>你已经成功认领一张</div>
            <div>请把机会留给别人</div>
          </div>
        ) : (
          <div style={{ textAlign: 'left', width: '30%', margin: '0 auto' }}>
            <div>啊噢·· </div>
            <div>未来唱片已被认领</div>
            <div>主人未完成录制</div>
          </div>
        )}
      </div>
    );
  }
}
