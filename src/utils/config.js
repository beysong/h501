const WEB_HOST = process.env.TEST ? '//yuanjing.icuch.com' : '//recruit.gobrand.top';
const API_HOST = process.env.TEST ? '//yuanjing.icuch.com' : '//recruit.gobrand.top';

// console.log('111', process.env);
// const WEB_URL = 'http://recruit.gobrand.top/';

const WEB_URL = process.env.TEST
  ? 'http://yuanjing.icuch.com/web'
  : 'http://recruit.gobrand.top/web';

const WECHATOPTIONS = {
  title: '请回答2029',
  desc: '“未来源于你”远景2020届校园招聘',
  img: WEB_URL + '/shareicon.png',
  link: window.location.href,
};

export { API_HOST, WEB_HOST, WEB_URL, WECHATOPTIONS };
