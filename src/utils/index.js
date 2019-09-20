import { wxConfig } from '../services/index';

// wxConfig({
//   url: window.location.href.split('#')[0],
// }).then(res => {
//   if (res) {
//     /* global wx */
//     wx.config({
//       debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。

//       // debug: process.env.NODE_ENV !== 'production',
//       appId: res.appid, // 必填，公众号的唯一标识
//       timestamp: res.timestamp, // 必填，生成签名的时间戳
//       nonceStr: res.noncestr, // 必填，生成签名的随机串
//       signature: res.signature, // 必填，签名

//       jsApiList: [
//         'updateTimelineShareData',
//         'updateAppMessageShareData',
//         'startRecord', // 开始录音接口
//         'stopRecord', // 停止录音接口
//         'onVoiceRecordEnd', // 监听录音自动停止接口
//         'playVoice', // 播放语音接口
//         'pauseVoice', //  暂停播放接口
//         'stopVoice', // 停止播放接口
//         'onVoicePlayEnd', // 监听语音播放完毕接口
//         'uploadVoice', // 上传语音接口
//       ], // 必填，需要使用的JS接口列表
//     });
//   }
// });

export const isAndroid = () => {
  var u = window.navigator.userAgent;
  return u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
};

export const weixinVersion = () => {
  var str = window.navigator.userAgent;
  var v0 = [6, 3, 31];
  var regExp = /MicroMessenger\/([\d|\.]+)/;
  if (regExp.exec(str) === null) {
    return;
  }
  var v1 = regExp.exec(str)[1].split('.');
  if (v1.length >= 4) {
    v1 = v1.slice(0, 3);
  }
  v1 = v1.map(function(v) {
    return parseInt(v, 10);
  });
  if (v1[0] > v0[0]) {
    return true;
  }
  if (v1[0] === v0[0] && v1[1] > v0[1]) {
    return true;
  }
  if (v1[0] === v0[0] && v1[1] === v0[1] && v1[2] >= v0[2]) {
    return true;
  }
  return false;
};

export const wxConfig2 = () => {
  return new Promise(function(resolve, reject) {
    wxConfig({
      url: window.location.href.split('#')[0],
    }).then(res => {
      if (res) {
        resolve(true);
        /* global wx */
        wx.config({
          debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          // debug: process.env.NODE_ENV !== 'production',
          appId: res.appid, // 必填，公众号的唯一标识
          timestamp: res.timestamp, // 必填，生成签名的时间戳
          nonceStr: res.noncestr, // 必填，生成签名的随机串
          signature: res.signature, // 必填，签名
          jsApiList: [
            'updateTimelineShareData',
            'updateAppMessageShareData',
            'startRecord', // 开始录音接口
            'stopRecord', // 停止录音接口
            'onVoiceRecordEnd', // 监听录音自动停止接口
            'playVoice', // 播放语音接口
            'pauseVoice', //  暂停播放接口
            'stopVoice', // 停止播放接口
            'onVoicePlayEnd', // 监听语音播放完毕接口
            'uploadVoice', // 上传语音接口
          ], // 必填，需要使用的JS接口列表
        });
      } else {
        reject();
      }
    });
  });
};
