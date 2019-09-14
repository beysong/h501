import { wxConfig } from './services/index';

wxConfig({
  url: window.location.href.split('#')[0],
}).then(r => {
  /* global wx */
  wx.config({
    debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: '', // 必填，公众号的唯一标识
    timestamp: '', // 必填，生成签名的时间戳
    nonceStr: '', // 必填，生成签名的随机串
    signature: '', // 必填，签名
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
      'downloadVoice', // 下载语音接口
    ], // 必填，需要使用的JS接口列表
  });
});
