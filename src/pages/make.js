import styles from './make.less';

const QINGHUIDA = require('../assets/qinghuida.png');
const Label = require('../assets/Label.png');
const wenzi = require('../assets/wenzi.png');
const wenzi2 = require('../assets/wenzi2.png');
const tryImg = require('../assets/start.png');
const uploadImg = require('../assets/duihao.png');

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
        <div className={styles.show20}>
          <div>对人、物、网的想象是无限趋近自己的过程</div>
          <div>多想象一点 </div>
          <div>就离未来更近一点</div>
        </div>
        <div style={{ width: 500, marginTop: 80, textAlign: 'left' }}>
          <img style={{ width: 450 }} src={Label} alt="黑胶唱片" />
        </div>
        <div className={styles.show21}>
          <img style={{ width: 260 }} src={wenzi2} alt="向现在 说未来" />
        </div>

        <div className={styles.show11}>
          <div className={styles.inshow11}>说出你的2029</div>
          <div className={styles.inshow11}>未来想象力</div>
          <div className={styles.inshow11}>生成专属唱片</div>
        </div>

        {/* <div className={styles.show12}>
          <div className={styles.btn}>
            <div className={styles.start}></div>
          </div>
        </div>
        <div className={styles.show12}>
          <div>录制</div>
        </div> */}

        <div className={styles.show12}>
          <div className={styles.btn}>
            <div className={styles.try}>
              <img src={tryImg} alt="试听" style={{ width: 50 }} />
            </div>
          </div>
          <div className={styles.btn}>
            <div className={styles.restart}></div>
          </div>
          <div className={styles.btn}>
            <div className={styles.upload}>
              <img src={uploadImg} alt="上传" style={{ width: 50 }} />
            </div>
          </div>
        </div>
        <div className={styles.show12}>
          <div>试听</div>
          <div>重录</div>
          <div>上传</div>
        </div>
        {/* <div className={styles.btnWrap}>
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
