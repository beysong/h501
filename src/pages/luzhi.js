import styles from './luzhi.less';
const CP = require('../assets/changpian.jpg');

export default function() {
  return (
    <div className={styles.normal}>
      <div>未来源于你</div>
      <div>听·说想象之外 </div>
      <div>未来，用你的声音表态</div>
      <div>
        <img style={{ width: '36%' }} src={CP} />
      </div>
      <div></div>
      <div className={styles.btnWrap}>
        <div className={styles.btn}>开始录制</div>
      </div>
      <div>
        留下想对未来自己说的话，
        <br /> 刻下专属未来声纹。
      </div>
      <div className={styles.btnWrap}>
        <div className={styles.btn}>试听</div>
        <div className={styles.btn}>重录</div>
        <div className={styles.btn}>上传</div>
      </div>
      <div className={styles.btnWrap}>
        <div className={styles.btn}>叫人来听</div>
      </div>
    </div>
  );
}
