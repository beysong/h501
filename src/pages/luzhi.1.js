import styles from './luzhi.1.less';

const QINGHUIDA = require('../assets/qinghuida.png');
const Label = require('../assets/Label.png');
const wenzi2 = require('../assets/wenzi2.png');

export default function() {
  return (
    <div className={styles.normal}>
      <div
        style={{
          display: 'flex',
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{ height: 80 }}>
          <img style={{ width: 500 }} src={QINGHUIDA} alt="请回答2029" />
        </div>
        <div
          style={{
            textAlign: 'left',
            width: 500,
            marginTop: 30,
            lineHeight: 1.6,
            fontSize: 23,
            fontWeight: 100,
          }}
        >
          <div>对人、物、网的想象是无限趋近自己的过程</div>
          <div>多想象一点 </div>
          <div>就离未来更近一点</div>
        </div>
        <div style={{ width: 500, marginTop: 80, textAlign: 'left' }}>
          <img style={{ width: 450 }} src={Label} alt="黑胶唱片" />
        </div>
        <div style={{ height: 100, marginTop: 140 }}>
          <img style={{ width: 260 }} src={wenzi2} alt="向现在 说未来" />
        </div>

        {/* <div className={styles.btnWrap}>
          <div className={styles.btn}>开始录制</div>
        </div>
        <div className={styles.btnWrap}>
          <div className={styles.btn}>试听</div>
          <div className={styles.btn}>重录</div>
          <div className={styles.btn}>上传</div>
        </div>
        <div className={styles.btnWrap}>
          <div className={styles.btn}>叫人来听</div>
        </div> */}
      </div>
    </div>
  );
}
