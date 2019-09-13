import styles from './error.less';
const CP = require('../assets/error.png');

export default function() {
  return (
    <div className={styles.normal}>
      <div>
        <img style={{ width: '52%' }} src={CP} />
      </div>
      <br />
      <div style={{ textAlign: 'left', width: '30%', margin: '0 auto' }}>
        <div>啊噢·· </div>
        <div>未来唱片已被认领</div>
        <div>主人未完成录制</div>
      </div>
    </div>
  );
}
