(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"5/ko":function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABHCAMAAADGBBL+AAAAAXNSR0IB2cksfwAAAAlwSFlzAAAXEgAAFxIBZ5/SUgAAAVxQTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Y2H17gAAAHR0Uk5TAAceKiIGIJ3d6eGuNzTK/+UjLMS6DNzxMrv9PfU24CH8ZgHujwnLdg4LHavvOzWsrcz7Fgq8iZyym2uCdQRiwv752oQtM5MQ8JL233omGgWUqtl7CBUpuI7bD1zGwcjkd7M5G/dU0BRJhp/FVuMvw+y5EkoPxICqAAACfklEQVR4nNXYa1PTQBQG4KVIUQEXi5USUJAWUKymEgFRAblVixWslyr1hvVW5aLI/5+RJbU9J8HNbjcnM74facI7TzfZ01nGCNMWaz/VQVlwlHjn6TNnu7pJO3rOcZHe84QdiT7u5kKSruNivYP3p8g6Bv52cGuQqqPh4HzoElFH08H55WGaDuDgI1dGKTp6+kBHOjNG0ZEYh46JqxQdHsc1io7JKBzXQUc2CkeGxHEDdqQn/lvHTbzmJI6YDTtyNI5bETumaBwOdtym6EhMw46ZNooO7JglcTjYQdNxB3RYUThyNGsO12OKZm+PwhGLwjGn6ojdvXd/cL6VDuyQ7O2jC4tDD5aWVyb1O1bhfpXNSP7DWtq15h/qduA9UTajxrrqVz0qaP7EX7XXwXrIHCz+uHFdUcuis7c/6W1+q3kNi8cRl168sQyuVbcghxU0ozafwidEdV0c5CjJHUfZeAbfp+cvlBzwHbRyL4PvKL+Cd7xWsLQyo8pb8DkpBloq2o7jFmwJaGl1RmHLG2kLdrxVdBy3vIMtMovHodHBWOo9vLf4z9U3m1FqlgpylLQcIioWz4wKfAf9KX+Alu0TLJWPZg6RKrRk/RZzh8gn2DJS8OyW6jNKHo8FfebMfQYf2i06RLAF7vzYYRv99qnC1U83LR6H4ZFfGVvqzxieUWYOEWz54v4ROb6GcHTp3/nxjLK/mXcwVoM7THY76djAoTBr1YIt33+E7xBBlvUl0BGWQwRZQMdOaA6R2vhJHaWQz5FrfkvIDhE0xVxH6B0+i7VDcuaOphiJQ2R3i9oh0rCQOUSqe26JyYwKzv7Pfs5/Hfym7GAsmTo8TBie9f0BKUihDqzFbJ8AAAAASUVORK5CYII="},SV7k:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return A});var s=t("q1tI"),l=t.n(s),c=t("3a4m"),i=t.n(c),n=t("WiiX"),r=t.n(n),o=t("KZ7y"),m=t("3eXy"),d=t("RFlg"),h=t("L7ew"),g=t("INmS"),u=t("3+UD"),p=t("/Zik"),v=t("5/ko");class A extends l.a.PureComponent{constructor(e){super(e),this.toggleStart=(()=>{var e=this.state,a=e.processing,t=e.playing;t||(a?(wx.stopRecord({success:e=>{var a=e.localId;this.setState({sourceId:a,processing:!1,finished:!0})}}),this.setState({sourceId:"21",processing:!1,finished:!0})):(wx.startRecord(),this.setState({processing:!0})))}),this.togglePlay=(()=>{var e=this.state,a=e.playing,t=e.processing,s=e.sourceId;t||(a?(wx.pauseVoice({localId:s}),this.setState({playing:!1})):(wx.playVoice({localId:s}),this.setState({playing:!0})))}),this.upload=(()=>{this.setState({uploading:!0}),Object(m["b"])({sourceId:this.state.sourceId}).then(e=>{200===e.status&&(localStorage.sourceId=this.state.sourceId,i.a.push("share")),this.setState({uploading:!1})})}),this.state={sourceId:"",processing:!1,finished:!1,uploading:!1,playing:!1}}componentDidMount(){wx.onVoicePlayEnd({success:e=>{this.setState({playing:!1})}})}render(){var e=this.state,a=e.sourceId,t=e.processing,s=e.uploading,c=e.playing;return l.a.createElement("div",{className:r.a.normal},!!s&&l.a.createElement(o["default"],{text:"\u4e0a\u4f20\u4e2d..."}),l.a.createElement("div",{className:r.a.contentWrap},l.a.createElement("div",{className:r.a.layer01},l.a.createElement("img",{src:d,alt:"\u8bf7\u56de\u7b542029"})),l.a.createElement("div",{className:r.a.show10},l.a.createElement("img",{src:g,alt:"\u5411\u73b0\u5728 \u8bf4\u672a\u6765"})),l.a.createElement("div",{className:r.a.show20},l.a.createElement("div",null,"\u5bf9\u4eba\u3001\u7269\u3001\u7f51\u7684\u60f3\u8c61\u662f\u65e0\u9650\u8d8b\u8fd1\u81ea\u5df1\u7684\u8fc7\u7a0b"),l.a.createElement("div",null,"\u591a\u60f3\u8c61\u4e00\u70b9 "),l.a.createElement("div",null,"\u5c31\u79bb\u672a\u6765\u66f4\u8fd1\u4e00\u70b9")),l.a.createElement("div",{className:r.a.layer02},l.a.createElement("img",{src:h,alt:"\u9ed1\u80f6\u5531\u7247"})),l.a.createElement("div",{className:r.a.show21},l.a.createElement("img",{src:u,alt:"\u5411\u73b0\u5728 \u8bf4\u672a\u6765"})),l.a.createElement("div",{className:r.a.show11},l.a.createElement("div",{className:r.a.inshow11},"\u8bf4\u51fa\u4f60\u76842029"),l.a.createElement("div",{className:r.a.inshow11},"\u672a\u6765\u60f3\u8c61\u529b"),l.a.createElement("div",{className:r.a.inshow11},"\u751f\u6210\u4e13\u5c5e\u5531\u7247")),a?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:r.a.show12},l.a.createElement("div",{className:r.a.btn,onClick:this.togglePlay},l.a.createElement("div",{className:r.a.try},c?l.a.createElement("div",{className:r.a.process}):l.a.createElement("img",{src:p,alt:"\u8bd5\u542c"}))),l.a.createElement("div",{className:r.a.btn,onClick:this.toggleStart},l.a.createElement("div",{className:t?r.a.process:r.a.restart})),l.a.createElement("div",{className:r.a.btn,onClick:this.upload},l.a.createElement("div",{className:r.a.upload},l.a.createElement("img",{src:v,alt:"\u4e0a\u4f20"})))),l.a.createElement("div",{className:r.a.show12},l.a.createElement("div",{onClick:this.togglePlay},"\u8bd5\u542c"),l.a.createElement("div",{onClick:this.toggleStart},"\u91cd\u5f55"),l.a.createElement("div",{onClick:this.upload},"\u4e0a\u4f20"))):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:r.a.show12,onClick:this.toggleStart},l.a.createElement("div",{className:r.a.btn},l.a.createElement("div",{className:t?r.a.process:r.a.start}))),l.a.createElement("div",{className:r.a.show12,onClick:this.toggleStart},l.a.createElement("div",null,"\u5f55\u5236")))))}}},WiiX:function(e,a,t){e.exports={normal:"normal___2womO",contentWrap:"contentWrap___3QzY7",layer01:"layer01___3QKRi",layer02:"layer02___DJAYW",show12:"show12___2Bqfs",btn:"btn___3skna",start:"start___23zRv",process:"process___BQRQ_",try:"try___3PG7g",restart:"restart___iVaGE",upload:"upload___1cowR",show10:"show10___3ZpM7",show11:"show11___1xBKt",inshow11:"inshow11___AuVkl",show20:"show20___3z8ig",show21:"show21___b-3qz"}}}]);