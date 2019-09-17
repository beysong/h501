const IMG_HOST = process.env.TEST
  ? '//baidu.img-cn-shanghai.aliyuncs.com'
  : '//baidu.img-cn-hangzhou.aliyuncs.com';
const WEB_HOST = process.env.TEST
  ? '//yuanjing.icuch.com/future'
  : '//recruit.envisioncn.com/future';
const API_HOST = process.env.TEST
  ? '//yuanjing.icuch.com/future'
  : '//recruit.envisioncn.com/future';

// console.log('111', process.env);
// const WEB_URL = 'http://recruit.envisioncn.com/future/';

const WEB_URL = process.env.TEST
  ? 'http://yuanjing.icuch.com/future/web'
  : 'http://recruit.envisioncn.com/future/web';

const WECHATOPTIONS = {
  title: '请回答2029',
  desc: '现在，向未来发声；2029，让未来发生。',
  img: WEB_URL + '/shareicon.png',
  link: window.location.href,
};

export { IMG_HOST, API_HOST, WEB_HOST, WEB_URL, WECHATOPTIONS };
