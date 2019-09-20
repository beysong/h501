import { wxConfig } from './services/index';

wxConfig({
  url: window.location.href.split('#')[0],
}).then(res => {
  if (res) {
    /* global wx */
    wx.config({
      debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。

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
  }
});
