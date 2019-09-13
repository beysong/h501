import styles from './shared.less';

const QINGHUIDA = require('../assets/qinghuida.png');
const Label = require('../assets/Label.png');
const wenzi = require('../assets/wenzi.png');
const tryImg = require('../assets/start.png');
const joinImg = require('../assets/join.png');

export default function() {
  return (
    <div className={styles.normal}>
      <div
        style={{
          height: 1000,
        }}
      >
        <div style={{ height: 80 }}>
          <img style={{ width: 500 }} src={QINGHUIDA} alt="请回答2029" />
        </div>
        <div className={styles.show10}>
          <img style={{ width: 290 }} src={wenzi} alt="向现在 说未来" />
        </div>

        <div style={{ width: 500, marginTop: 80, textAlign: 'left' }}>
          <img style={{ width: 450 }} src={Label} alt="黑胶唱片" />
        </div>

        <div className={styles.show11}>
          <div className={styles.inshow11}>&nbsp;</div>
          <div className={styles.inshow11}>&nbsp;</div>
          <div className={styles.inshow11}>&nbsp;</div>
        </div>

        <div className={styles.show12}>
          <div className={styles.btn}>
            <div className={styles.try}>
              <img src={tryImg} alt="按下播放" style={{ width: 50 }} />
            </div>
          </div>
          <div className={styles.btn}>
            <div className={styles.upload}>
              <img src={joinImg} alt="加入远景" style={{ width: 50 }} />
            </div>
          </div>
        </div>
        <div className={styles.show12}>
          <div style={{ flex: 1, textAlign: 'center' }}>按下播放</div>
          <div style={{ flex: 1, textAlign: 'center' }}>加入远景</div>
        </div>
      </div>
    </div>
  );
}
