(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"8slW":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return u});var s=a("q1tI"),i=a.n(s),l=a("Aeqt"),n=a("3eXy"),r=a("qRJF"),c=a.n(r),o=a("RFlg"),d=a("L7ew"),m=a("INmS"),h=a("/Zik"),_=a("80Ld");class u extends i.a.PureComponent{constructor(e){super(e),this.togglePlay=(()=>{var e=this.state.playing,t=(this.props.location,document.getElementById("audioLabel"));this.interval?(clearInterval(this.interval),this.interval=null):this.interval=setInterval(()=>{this.setState((e,a)=>({lineWidth:e.lineWidth+400/t.duration}))},1e3),e?(t.pause(),this.setState({playing:!1})):(t.play(),this.setState({playing:!0}))}),this.toJoin=(()=>{window.location.href="http://www.baidu.com"}),this.createAudio=(()=>{var e=document.createElement("AUDIO");e.setAttribute("id","audioLabel"),e.setAttribute("src","/test.mp3"),e.setAttribute("controls","controls"),document.body.appendChild(e)}),this.state={sourceId:e.location.query.sourceid||"",isshow:!1,playing:!1,dataInfo:{},lineWidth:0}}componentDidMount(){var e=this.props.location;Object(n["a"])({sourceid:e.query.sourceid||""}).then(e=>{200===e.status&&this.setState({dataInfo:e.body}),this.createAudio()}),wx.ready(function(){wx.updateAppMessageShareData({title:l["d"].title||"\u52a0\u5165\u8fdc\u666f",desc:l["d"].desc||"\u52a0\u5165\u8fdc\u666f2019",link:l["d"].link,imgUrl:l["d"].img,success:function(){}}),wx.updateTimelineShareData({title:l["d"].title||"\u52a0\u5165\u8fdc\u666f",link:l["d"].link,imgUrl:l["d"].img,success:function(){}})})}componentWillUnmount(){this.interval&&clearInterval(this.interval)}render(){var e=this.state,t=e.playing,a=e.dataInfo,s=e.lineWidth;return i.a.createElement("div",{className:c.a.normal},i.a.createElement("div",null,i.a.createElement("div",{className:c.a.layer01},i.a.createElement("img",{src:o,alt:"\u8bf7\u56de\u7b542029"})),i.a.createElement("div",{className:c.a.show10},i.a.createElement("img",{src:m,alt:"\u5411\u73b0\u5728 \u8bf4\u672a\u6765"})),i.a.createElement("div",{className:c.a.layer02},i.a.createElement("img",{src:d,alt:"\u9ed1\u80f6\u5531\u7247"})),i.a.createElement("div",{className:c.a.show11},i.a.createElement("div",{className:c.a.progressWrap},i.a.createElement("div",{className:c.a.line},i.a.createElement("div",{ref:e=>{this.refLine=e},className:c.a.whiteLine,style:{width:s}}),i.a.createElement("div",{className:c.a.circle}))),i.a.createElement("div",{className:c.a.inshow11},"\u542c\u5230",a.name||"","\u7684\u672a\u6765\u60f3\u8c61\u529b")),i.a.createElement("div",{className:c.a.show12},i.a.createElement("div",{onClick:this.togglePlay,className:c.a.btn},i.a.createElement("div",{className:c.a.try},t?i.a.createElement("div",{className:c.a.process}):i.a.createElement("img",{src:h,alt:"\u6309\u4e0b\u64ad\u653e"}))),i.a.createElement("div",{onClick:this.toJoin,className:c.a.btn},i.a.createElement("div",{className:c.a.upload},i.a.createElement("img",{src:_,alt:"\u52a0\u5165\u8fdc\u666f"})))),i.a.createElement("div",{className:c.a.show12},i.a.createElement("div",{style:{flex:1,textAlign:"center"}},"\u6309\u4e0b\u64ad\u653e"),i.a.createElement("div",{onClick:this.toJoin,style:{flex:1,textAlign:"center"}},"\u52a0\u5165\u8fdc\u666f"))))}}},qRJF:function(e,t,a){e.exports={normal:"normal___1NOLf",layer01:"layer01___2Mb5Z",layer02:"layer02___1-X8d",show12:"show12___21CKd",btn:"btn___24jaP",start:"start___fENL1",process:"process___2YJs3",try:"try___3xotJ",restart:"restart___s9NJi",upload:"upload___3rhJ4",progressWrap:"progressWrap___2-c53",line:"line___12LUW",whiteLine:"whiteLine___3-NcO",circle:"circle___2c76j",show10:"show10___16F5j",show11:"show11___10z88",inshow11:"inshow11___28-DE"}}}]);