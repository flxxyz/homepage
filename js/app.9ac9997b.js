(function(t){function e(e){for(var n,s,a=e[0],u=e[1],c=e[2],d=0,p=[];d<a.length;d++)s=a[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,a=1;a<r.length;a++){var u=r[a];0!==i[u]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},i={app:0},o=[];function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var l=u;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"019e":function(t,e,r){"use strict";var n=r("c051"),i=r.n(n);i.a},"102d":function(t,e,r){"use strict";var n=r("d80a"),i=r.n(n);i.a},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[t._l(t.blocks,(function(e,n){return r("Block",{key:n,attrs:{t:e.type,nofollow:e.nofollow,href:e.href,text:e.text,direction:t.direction}})})),r("Background",{attrs:{url:t.url,mimeType:t.mimeType,direction:t.direction}})],2)},o=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.style},["link"===t.t?r("a",{ref:"link",staticClass:"link",attrs:{href:t.href,target:"_blank"}},[t._v(t._s(t.text))]):"like"===t.t?r("Like",{attrs:{text:t.text,direction:t.direction}}):r("div",{staticClass:"nb"},[t._v(t._s(t.text))])],1)},a=[],u=(r("b54a"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{ref:"like",class:t.style},[r("div",{staticClass:"like-vote"},[r("p",[t._v(t._s(t.content))]),r("div",[t._v("♥"+t._s(t.counter))])])])}),c=[],l=(r("96cf"),r("3b8d")),d=(r("c5f6"),r("7f7f"),r("ac6a"),r("456d"),r("d225")),p=r("b0b4"),f=function(){function t(){Object(d["a"])(this,t)}return Object(p["a"])(t,[{key:"new",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.url=t.url||"",this.method=t.method||"get",this.body=t.body||{},this.type=t.type||"www",this.types={json:"application/json",www:"application/x-www-form-urlencoded",formdata:"application/x-www-form-urlencoded"},this.header={"content-type":this.types[this.type]},this.request=new XMLHttpRequest,this.handler()}},{key:"handler",value:function(){var t=this;return new Promise((function(e,r){t.request.open(t.method,t.url,!0),Object.keys(t.header).map((function(e){t.request.setRequestHeader(e,t.header[e])})),t.request.onload=function(){4===t.request.readyState?t.request.status>=200&&t.request.status<300&&e(t.request.response):r({status:t.request.status,statusText:t.request.statusText})},t.request.onerror=function(){r({status:t.request.status,statusText:t.request.statusText})},t.request.send(t.encode(t.type,t.body))}))}},{key:"encode",value:function(t,e){var r;switch(t){case"formdata":r=new FormData,Object.keys(e).map((function(t){r.append(t,e[t])}));break;case"www":case"text":r=this.paramsToString(e);break;case"json":r=JSON.stringify(e);break}return r}},{key:"paramsToString",value:function(t){return Object.keys(t).map((function(e){return"".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(t[e]))})).join("&")}}]),t}(),h=new f,m={getLike:function(t){var e=h.encode("text",{key:t});return h.new({url:"https://ywsupyylinnq.cn-e1.leanapp.cn/get?".concat(e),method:"get"})},addLike:function(t){return h.new({url:"https://ywsupyylinnq.cn-e1.leanapp.cn/add",method:"post",body:{key:t}})}},y={name:"Like",props:{text:{type:String,default:""},direction:{required:!0,type:String}},watch:{result:function(t){return this.requestId=requestAnimationFrame(this.up),t}},data:function(){return{time:5,updateTime:10,counter:0,result:0,startValue:0,startTime:0,frame:0,requestId:null,content:this.text,lastClickTime:0}},mounted:function(){var t=this;setTimeout((function(){t.$refs.like.addEventListener("click",t.addLike,!1)}),this.duration),this.getLike(),this.requestId=requestAnimationFrame(this.up)},methods:{up:function(t){this.startTime||(this.startTime=t);var e=t-this.startTime;this.startValue>this.result?(this.frame=this.startValue-this.easing(e,0,this.startValue-this.result),this.frame=this.frame<this.result?this.result:this.frame):(this.frame=this.easing(e,0,this.result-this.startValue),this.frame=this.frame>this.result?this.result:this.frame),this.frame=Math.round(this.frame),this.counter=this.startValue+this.frame,e<this.duration&&(this.requestId=requestAnimationFrame(this.up))},update:function(t){t=Number(t),t!==this.frame&&(cancelAnimationFrame(this.requestId),this.startTime=0,this.startValue=this.counter,this.result=t,this.requestId=requestAnimationFrame(this.up))},easing:function(t,e,r){return r*(1-Math.pow(2,-10*t/this.duration))*1024/1023+e},getLike:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,m.getLike("5e54eeacff028300082a8d02");case 2:e=t.sent;try{e=JSON.parse(e),e.hasOwnProperty("count")&&this.update(e.count)}catch(r){console.error(r)}setTimeout(this.getLike,this.updateDuration);case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),addLike:function(){var t=(new Date).getTime(),e=t-this.lastClickTime>300;this.lastClickTime=(new Date).getTime(),this.content=e?"爱你哟(´▽`ʃ♡ƪ)":"∑( 口 ||要坏掉了",m.addLike("5e54eeacff028300082a8d02"),this.update(this.counter+=1)}},computed:{duration:function(){return 1e3*Number(this.time)},updateDuration:function(){return 1e3*Number(this.updateTime)},style:function(){return"like"}}},b=y,g=(r("102d"),r("2877")),k=Object(g["a"])(b,u,c,!1,null,"6419e276",null),x=k.exports,v={name:"block",data:function(){return{}},props:{t:{required:!0,type:String,default:""},href:{type:String,default:""},text:{required:!0,type:String},nofollow:{type:Boolean,default:!1},direction:{required:!0,type:String}},mounted:function(){this.nofollow&&this.$refs.link.setAttribute("rel","external nofollow")},computed:{style:function(){return"block ".concat(this.direction)}},components:{Like:x}},w=v,q=(r("019e"),Object(g["a"])(w,s,a,!1,null,"c087577a",null)),T=q.exports,O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("video",{ref:"background",class:t.style},[r("source",{attrs:{src:t.url,type:t.mimeType}})])},j=[],S={name:"Background",data:function(){return{mimeTypes:["mp4","webm","ogg"]}},props:{url:{required:!0,type:String},mimeType:String,direction:{required:!0,type:String}},mounted:function(){var t=this;this.$refs.background.onloadstart=function(){console.log("开始加载这个视频")},this.$refs.background.onloadedmetadata=function(){console.log("开始加载视频元数据")},this.$refs.background.oncanplay=function(){console.log("这个视频可以播放了")},this.$refs.background.preload="auto",this.$refs.background.volume=.5,this.$refs.background.loop=!0,this.$refs.background.autoplay=!0,this.$refs.background.load(),this.timer=setInterval((function(){console.log("video readyState:",t.$refs.background.readyState),0!=t.$refs.background.readyState?clearInterval(t.timer):t.$refs.background.load()}),1e3)},destroyed:function(){clearInterval(this.timer)},computed:{style:function(){return"background ".concat(this.direction)}}},_=S,$=(r("b3d1"),Object(g["a"])(_,O,j,!1,null,"f6724a50",null)),L=$.exports,z={name:"app",data:function(){return{blocks:[{type:"",href:"https://flxxyz.com",text:"🌈 彩虹海是我哒"},{type:"link",href:"https://blog.flxxyz.com",text:"🏠 Blog"},{type:"link",href:"http://wot.flxxyz.com/",text:"👻 Websocket"},{type:"link",href:"https://status.flxxyz.com/",text:"👀 Status"},{type:"link",link:"https://mirror.flxxyz.com/",text:"💿 Mirror"},{type:"",text:"未完待续"},{type:"",text:"未完待续"},{type:"like",text:"Do You Like Me?"}],direction:"vertical",url:"https://static.flxxyz.com/video/Forever-Friends.webm"}},created:function(){this.resize(),window.addEventListener("resize",this.resize,!1),console.log("%cflxxyz.com","text-shadow:0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:2em"),console.log("%c图片来源:","color:red","DAOKO - Forever Friends"),console.log("%c视频来源:","color:red","https://youtu.be/SKZWU-mj8No")},methods:{resize:function(){this.direction=window.innerWidth/window.innerHeight>16/9?"horizontal":"vertical"}},computed:{mimeType:function(){var t=this.url.slice(this.url.lastIndexOf(".")+1,this.url.length);return"video/".concat(t)}},components:{Block:T,Background:L}},I=z,F=(r("5c0b"),Object(g["a"])(I,i,o,!1,null,null,null)),M=F.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(M)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var n=r("e332"),i=r.n(n);i.a},b3d1:function(t,e,r){"use strict";var n=r("c831"),i=r.n(n);i.a},c051:function(t,e,r){},c831:function(t,e,r){},d80a:function(t,e,r){},e332:function(t,e,r){}});
//# sourceMappingURL=app.9ac9997b.js.map