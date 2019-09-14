const IMG_HOST = process.env.TEST
  ? '//baidu.img-cn-shanghai.aliyuncs.com'
  : '//baidu.img-cn-hangzhou.aliyuncs.com';
const WEB_HOST = process.env.TEST ? '//open-test.wehome.net.cn' : '//open-test.wehome.net.cn';
const API_HOST = process.env.TEST ? '//open-test.wehome.net.cn' : '//open-api.wehome.net.cn';

// console.log('111', process.env);
const WEB_URL = 'http://recruit.envisioncn.com/future/';

const WECHATOPTIONS = {
  title: '加入远景',
  desc: '加入远景2019',
  img: WEB_URL + 'shareicon.png',
  link: window.location.href,
};

export { IMG_HOST, API_HOST, WEB_HOST, WEB_URL, WECHATOPTIONS };
