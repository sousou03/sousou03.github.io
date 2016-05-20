// ------------------------------------------------------------
//
//  config
//
// ------------------------------------------------------------
if(jp === undefined) var jp = {'co': {'sjPlus': {}}};

jp.co.sjPlus.val = {};
jp.co.sjPlus.func = {};
jp.co.sjPlus.x = 0;
jp.co.sjPlus.y = 0;

// ------------------------------------------------------------
//
//  target
//
// ------------------------------------------------------------

$(function(){

  $('.blank').attr('target', '_blank');

});

// ------------------------------------------------------------
//
//  log
//
// ------------------------------------------------------------
var log = console.log.bind(console);

//--------------------------------------------------
//
//  Modernizr
//
//--------------------------------------------------

window.Modernizr=function(at,ae,aj){function ag(a){aw.cssText=a}function ai(b,a){return ag(B.join(b+";")+(a||""))}function ax(b,a){return typeof b===a}function ao(b,a){return !!~(""+b).indexOf(a)}function av(c,a){for(var b in c){var d=c[b];if(!ao(d,"-")&&aw[d]!==aj){return"pfx"==a?d:!0}}return !1}function af(d,b,c){for(var f in d){var a=b[d[f]];if(a!==aj){return c===!1?d[f]:ax(a,"function")?a.bind(c||b):a}}return !1}function ad(c,a,f){var b=c.charAt(0).toUpperCase()+c.slice(1),d=(c+" "+am.join(b+" ")+b).split(" ");return ax(a,"string")||ax(a,"undefined")?av(d,a):(d=(c+" "+q.join(b+" ")+b).split(" "),af(d,a,f))}function al(){ah.input=function(c){for(var a=0,b=c.length;b>a;a++){an[c[a]]=!!(c[a] in R)}return an.list&&(an.list=!(!ae.createElement("datalist")||!at.HTMLDataListElement)),an}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),ah.inputtypes=function(g){for(var f,h,b,d=0,j=g.length;j>d;d++){R.setAttribute("type",h=g[d]),f="text"!==R.type,f&&(R.value=aa,R.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(h)&&R.style.WebkitAppearance!==aj?(aq.appendChild(R),b=ae.defaultView,f=b.getComputedStyle&&"textfield"!==b.getComputedStyle(R,null).WebkitAppearance&&0!==R.offsetHeight,aq.removeChild(R)):/^(search|tel)$/.test(h)||(f=/^(url|email)$/.test(h)?R.checkValidity&&R.checkValidity()===!1:R.value!=aa)),G[g[d]]=!!f}return G}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var au,ar,ak="2.8.3",ah={},ap=!0,aq=ae.documentElement,ac="modernizr",Z=ae.createElement(ac),aw=Z.style,R=ae.createElement("input"),aa=":)",ab={}.toString,B=" -webkit- -moz- -o- -ms- ".split(" "),V="Webkit Moz O ms",am=V.split(" "),q=V.toLowerCase().split(" "),I={svg:"http://www.w3.org/2000/svg"},J={},G={},an={},X=[],U=X.slice,Q=function(k,g,b,f){var t,j,p,w,v=ae.createElement("div"),h=ae.body,m=h||ae.createElement("body");if(parseInt(b,10)){for(;b--;){p=ae.createElement("div"),p.id=f?f[b]:ac+(b+1),v.appendChild(p)}}return t=["",'<style id="s',ac,'">',k,"</style>"].join(""),v.id=ac,(h?v:m).innerHTML+=t,m.appendChild(v),h||(m.style.background="",m.style.overflow="hidden",w=aq.style.overflow,aq.style.overflow="hidden",aq.appendChild(m)),j=g(v,k),h?v.parentNode.removeChild(v):(m.parentNode.removeChild(m),aq.style.overflow=w),!!j},Y=function(a){var c=at.matchMedia||at.msMatchMedia;if(c){return c(a)&&c(a).matches||!1}var b;return Q("@media "+a+" { #"+ac+" { position: absolute; } }",function(d){b="absolute"==(at.getComputedStyle?getComputedStyle(d,null):d.currentStyle).position}),b},W=function(){function b(d,f){f=f||ae.createElement(a[d]||"div"),d="on"+d;var c=d in f;return c||(f.setAttribute||(f=ae.createElement("div")),f.setAttribute&&f.removeAttribute&&(f.setAttribute(d,""),c=ax(f[d],"function"),ax(f[d],"undefined")||(f[d]=aj),f.removeAttribute(d))),f=null,c}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return b}(),K={}.hasOwnProperty;ar=ax(K,"undefined")||ax(K.call,"undefined")?function(b,a){return a in b&&ax(b.constructor.prototype[a],"undefined")}:function(b,a){return K.call(b,a)},Function.prototype.bind||(Function.prototype.bind=function(c){var a=this;if("function"!=typeof a){throw new TypeError}var d=U.call(arguments,1),b=function(){if(this instanceof b){var g=function(){};g.prototype=a.prototype;var e=new g,f=a.apply(e,d.concat(U.call(arguments)));return Object(f)===f?f:e}return a.apply(c,d.concat(U.call(arguments)))};return b}),J.flexbox=function(){return ad("flexWrap")},J.flexboxlegacy=function(){return ad("boxDirection")},J.canvas=function(){var a=ae.createElement("canvas");return !(!a.getContext||!a.getContext("2d"))},J.canvastext=function(){return !(!ah.canvas||!ax(ae.createElement("canvas").getContext("2d").fillText,"function"))},J.webgl=function(){return !!at.WebGLRenderingContext},J.touch=function(){var a;return"ontouchstart" in at||at.DocumentTouch&&ae instanceof DocumentTouch?a=!0:Q(["@media (",B.join("touch-enabled),("),ac,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(b){a=9===b.offsetTop}),a},J.geolocation=function(){return"geolocation" in navigator},J.postmessage=function(){return !!at.postMessage},J.websqldatabase=function(){return !!at.openDatabase},J.indexedDB=function(){return !!ad("indexedDB",at)},J.hashchange=function(){return W("hashchange",at)&&(ae.documentMode===aj||ae.documentMode>7)},J.history=function(){return !(!at.history||!history.pushState)},J.draganddrop=function(){var a=ae.createElement("div");return"draggable" in a||"ondragstart" in a&&"ondrop" in a},J.websjPluss=function(){return"WebsjPlus" in at||"MozWebsjPlus" in at},J.rgba=function(){return ag("background-color:rgba(150,255,150,.5)"),ao(aw.backgroundColor,"rgba")},J.hsla=function(){return ag("background-color:hsla(120,40%,100%,.5)"),ao(aw.backgroundColor,"rgba")||ao(aw.backgroundColor,"hsla")},J.multiplebgs=function(){return ag("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(aw.background)},J.backgroundsize=function(){return ad("backgroundSize")},J.borderimage=function(){return ad("borderImage")},J.borderradius=function(){return ad("borderRadius")},J.boxshadow=function(){return ad("boxShadow")},J.textshadow=function(){return""===ae.createElement("div").style.textShadow},J.opacity=function(){return ai("opacity:.55"),/^0.55$/.test(aw.opacity)},J.cssanimations=function(){return ad("animationName")},J.csscolumns=function(){return ad("columnCount")},J.cssgradients=function(){var b="background-image:",a="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return ag((b+"-webkit- ".split(" ").join(a+b)+B.join(c+b)).slice(0,-b.length)),ao(aw.backgroundImage,"gradient")},J.cssreflections=function(){return ad("boxReflect")},J.csstransforms=function(){return !!ad("transform")},J.csstransforms3d=function(){var a=!!ad("perspective");return a&&"webkitPerspective" in aq.style&&Q("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b){a=9===b.offsetLeft&&3===b.offsetHeight}),a},J.csstransitions=function(){return ad("transition")},J.fontface=function(){var a;return Q('@font-face {font-family:"font";src:url("https://")}',function(f,d){var e=ae.getElementById("smodernizr"),b=e.sheet||e.styleSheet,c=b?b.cssRules&&b.cssRules[0]?b.cssRules[0].cssText:b.cssText||"":"";a=/src/i.test(c)&&0===c.indexOf(d.split(" ")[0])}),a},J.generatedcontent=function(){var a;return Q(["#",ac,"{font:0/0 a}#",ac,':after{content:"',aa,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},J.video=function(){var b=ae.createElement("video"),c=!1;try{(c=!!b.canPlayType)&&(c=new Boolean(c),c.ogg=b.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=b.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=b.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(a){}return c},J.audio=function(){var b=ae.createElement("audio"),c=!1;try{(c=!!b.canPlayType)&&(c=new Boolean(c),c.ogg=b.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=b.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=b.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(b.canPlayType("audio/x-m4a;")||b.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(a){}return c},J.localstorage=function(){try{return localStorage.setItem(ac,ac),localStorage.removeItem(ac),!0}catch(a){return !1}},J.sessionstorage=function(){try{return sessionStorage.setItem(ac,ac),sessionStorage.removeItem(ac),!0}catch(a){return !1}},J.webworkers=function(){return !!at.Worker},J.applicationcache=function(){return !!at.applicationCache},J.svg=function(){return !!ae.createElementNS&&!!ae.createElementNS(I.svg,"svg").createSVGRect},J.inlinesvg=function(){var a=ae.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==I.svg},J.smil=function(){return !!ae.createElementNS&&/SVGAnimate/.test(ab.call(ae.createElementNS(I.svg,"animate")))},J.svgclippaths=function(){return !!ae.createElementNS&&/SVGClipPath/.test(ab.call(ae.createElementNS(I.svg,"clipPath")))};for(var O in J){ar(J,O)&&(au=O.toLowerCase(),ah[au]=J[O](),X.push((ah[au]?"":"no-")+au))}return ah.input||al(),ah.addTest=function(c,a){if("object"==typeof c){for(var b in c){ar(c,b)&&ah.addTest(b,c[b])}}else{if(c=c.toLowerCase(),ah[c]!==aj){return ah}a="function"==typeof a?a():a,"undefined"!=typeof ap&&ap&&(aq.className+=" "+(a?"":"no-")+c),ah[c]=a}return ah},ag(""),Z=R=null,function(P,w){function D(d,a){var f=d.createElement("p"),c=d.getElementsByTagName("head")[0]||d.documentElement;return f.innerHTML="x<style>"+a+"</style>",c.insertBefore(f.lastChild,c.firstChild)}function z(){var a=b.elements;return"string"==typeof a?a.split(" "):a}function C(c){var a=j[c[L]];return a||(a={},M++,c[L]=M,j[M]=a),a}function ay(f,g,d){if(g||(g=w),F){return g.createElement(f)}d||(d=C(g));var c;return c=d.cache[f]?d.cache[f].cloneNode():A.test(f)?(d.cache[f]=d.createElem(f)).cloneNode():d.createElem(f),!c.canHaveChildren||E.test(f)||c.tagUrn?c:d.frag.appendChild(c)}function H(h,m){if(h||(h=w),F){return h.createDocumentFragment()}m=m||C(h);for(var d=m.frag.cloneNode(),f=0,l=z(),g=l.length;g>f;f++){d.createElement(l[f])}return d}function T(c,a){a.cache||(a.cache={},a.createElem=c.createElement,a.createFrag=c.createDocumentFragment,a.frag=a.createFrag()),c.createElement=function(d){return b.shivMethods?ay(d,c,a):a.createElem(d)},c.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+z().join().replace(/[\w\-]+/g,function(d){return a.createElem(d),a.frag.createElement(d),'c("'+d+'")'})+");return n}")(b,a.frag)}function x(c){c||(c=w);var a=C(c);return !b.shivCSS||k||a.hasCSS||(a.hasCSS=!!D(c,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),F||T(c,a),c}var k,F,S="3.7.0",N=P.html5||{},E=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,A=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,L="_html5shiv",M=0,j={};!function(){try{var a=w.createElement("a");a.innerHTML="<xyz></xyz>",k="hidden" in a,F=1==a.childNodes.length||function(){w.createElement("a");var d=w.createDocumentFragment();return"undefined"==typeof d.cloneNode||"undefined"==typeof d.createDocumentFragment||"undefined"==typeof d.createElement}()}catch(c){k=!0,F=!0}}();var b={elements:N.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:S,shivCSS:N.shivCSS!==!1,supportsUnknownElements:F,shivMethods:N.shivMethods!==!1,type:"default",shivDocument:x,createElement:ay,createDocumentFragment:H};P.html5=b,x(w)}(this,ae),ah._version=ak,ah._prefixes=B,ah._domPrefixes=q,ah._cssomPrefixes=am,ah.mq=Y,ah.hasEvent=W,ah.testProp=function(a){return av([a])},ah.testAllProps=ad,ah.testStyles=Q,ah.prefixed=function(b,a,c){return a?ad(b,a,c):ad(b,"pfx")},aq.className=aq.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(ap?" js "+X.join(" "):""),ah}(this,this.document);


// ------------------------------------------------------------
//
//  jquery拡張
//
// ------------------------------------------------------------´

jQuery.fn.extend({
  w:0, 
  h:0, 
  adjust: function(){
      w = $(this).innerWidth();
      h = $(this).innerHeight();
      $(this).css({
        'position':'absolute',
        'left':'50%',
        'top':'50%',
        'margin-left':'-' + (w / 2) + 'px',
        'margin-top':'-' + (h / 2) + 'px'
      });
  },
  adjustW: function(){
      w = $(this).innerWidth();
      h = $(this).innerHeight();
      $(this).css({
        'position':'absolute',
        'left':'50%',
        'margin-left':'-' + (w / 2) + 'px'
      });
  },
  adjustH: function(){
      w = $(this).innerWidth();
      h = $(this).innerHeight();
      $(this).css({
        'position':'absolute',
        'top':'50%',
        'margin-top':'-' + (h / 2) + 'px'
      });
  }
});

// ------------------------------------------------------------
//
//  request animation frame
//
// ------------------------------------------------------------
var FPS = 1000/60;

window.requestAnimationFrame = window.requestAnimationFrame || // chromeや最新の
                               window.mozRequestAnimationFrame || // 古いfirefox用
                               window.webkitRequestAnimationFrame ||  // safari6以前、iOS6 safari用
                               function( callback ) {
                                 window.setTimeout(callback, FPS);
                               };

window.cancelAnimationFrame = window.cancelAnimationFrame ||
                              window.mozCancelAnimationFrame ||
                              window.webkitCancelAnimationFrame ||
                              function( timer ) {
                                window.clearTimeout(timer);
                              };      

// ------------------------------------------------------------
//
//  Data type check
//
// ------------------------------------------------------------

(function(){

  var gb = jp.co.sjPlus;

  function isObject(value, ignoreArray) {
      return typeof value === 'object' && value !== null;
  }

  function isNumber(value) {
      return typeof value === 'number';
  }

  function isString(value) {
      return typeof value === 'string';
  }

  function isFunction(value) {
      return typeof value === 'function';
  }

  function isArray(value) {
      return Object.prototype.toString.call(value) === '[object Array]';
  }

  function isNull(value) {
      return value === null;
  }

  function isUndefined(value) {
      return typeof value === 'undefined';
  }

  gb.isObject = isObject;
  gb.isNumber = isNumber;
  gb.isString = isString;
  gb.isFunction = isFunction;
  gb.isArray = isArray;
  gb.isNull = isNull;
  gb.isUndefined = isUndefined;

})();

// ------------------------------------------------------------
//
//  Vec クラス
//
// ------------------------------------------------------------
(function(){

  var gb = jp.co.sjPlus;

  function Vec(x, y) {
      this.x = x || 0;
      this.y = y || 0;
  }

  Vec.create = function(o, y) {
      if (isArray(o)) return new Vec(o[0], o[1]);
      if (isObject(o)) return new Vec(o.x, o.y);
      return new Vec(o, y);
  };

  Vec.add = function(p1, p2) {
      return new Vec(p1.x + p2.x, p1.y + p2.y);
  };

  Vec.subtract = function(p1, p2) {
      return new Vec(p1.x - p2.x, p1.y - p2.y);
  };

  Vec.scale = function(p, scaleX, scaleY) {
      if (isObject(scaleX)) {
          scaleY = scaleX.y;
          scaleX = scaleX.x;
      } else if (!isNumber(scaleY)) {
          scaleY = scaleX;
      }
      return new Vec(p.x * scaleX, p.y * scaleY);
  };

  Vec.equals = function(p1, p2) {
      return p1.x == p2.x && p1.y == p2.y;
  };

  Vec.angle = function(p) {
      return Math.atan2(p.y, p.x);
  };

  Vec.distance = function(p1, p2) {
      var a = p1.x - p2.x;
      var b = p1.y - p2.y;
      return Math.sqrt(a * a + b * b);
  };

  Vec.dot = function(p1, p2) {
      return p1.x * p2.x + p1.y * p2.y;
  };

  Vec.cross = function(p1, p2) {
      return p1.x * p2.y - p1.y * p2.x;
  };

  Vec.interpolate = function(p1, p2, f) {
      var dx = p2.x - p1.x;
      var dy = p2.y - p1.y;
      return new Vec(p1.x + dx * f, p1.y + dy * f);
  };

  // Test
  Vec.polar = function(length, radian) {
      return new Vec(length * Math.sin(radian), length * Math.cos(radian));
  };

  Vec.prototype = {    
      add: function(p) {
          return Vec.add(this, p);
      },
      
      subtract: function(p) {
          return Vec.subtract(this, p);
      },
      
      scale: function(scaleX, scaleY) {
          return Vec.scale(this, scaleX, scaleY);
      },
      
      equals: function(p) {
          return Vec.equals(this, p);
      },
      
      angle: function() {
          return Vec.angle(this);
      },
      
      distance: function(p) {
          return Vec.distance(this, p);
      },
      
      length: function() {
          return Math.sqrt(this.x * this.x + this.y * this.y);
      },
      
      set: function(x, y) {
          if (isObject(x)) {
              y = x.y;
              x = x.x;
          }
          
          this.x = x || 0;
          this.y = y || 0;
          
          return this;
      },
      
      offset: function(x, y) {
          if (isObject(x)) {
              y = x.y;
              x = x.x;
          }
          
          this.x += x || 0;
          this.y += y || 0;
          
          return this;
      },
      
      normalize: function(thickness) {
          if (isNull(thickness) || isUndefined(thickness)) {
              thickness = 1;
          }
          
          var length = this.length();
          
          if (length > 0) {
              this.x = this.x / length * thickness;
              this.y = this.y / length * thickness;
          }
          
          return this;
      },
      
      negate: function() {
          this.x *= -1;
          this.y *= -1;
          
          return this;
      },
      
      perp: function() {
          this.x = - y;
          this.y = x;
          
          return this;
      },
      
      clone: function() {
          return Vec.create(this);
      },

      toArray: function() {
          return [this.x, this.y];
      },
      
      toString: function() {
          return '(x:' + this.x + ', y:' + this.y + ')';
      }
  };

  gb.Vec = Vec;

})();

//--------------------------------------------------
//
//  util.class(Date)
//
//--------------------------------------------------
(function(){

  var gb = jp.co.sjPlus

  var obj = {}

  obj = {

    startTime: null,
    elapsedTime: null,
    now: new Date(),

    start: function() {

      this.startTime = this.now.getTime();

    },

    elapsed: function() {

      this.elapsedTime = this.now.getTime() - this.startTime;

    },

    m: function() {

      return Math.floor( this.elapsedTime + 100 / 60 );

    },

    s: function() {

      return Math.floor(this.elapsedTime / 1000);

    },

    ms: function() {

      return this.elapsedTime;
      
    },

    time: function() {

      var hour = this.now.getHours() ;          // 時
      var minute = this.now.getMinutes() ;      // 分
      var second = this.now.getSeconds() ;

    },

    date: function() {

      return this.now.getDate();

    },

    months: function() {

      var monthdays = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);

      return this.now.getMonth() + 1;

    },

    year: function() {

      return this.now.getFullYear();

    },

    day: function() {

      // 曜日 (日本語)
      var weekDayJP = ["日","月","火","水","木","金","土"] ;
      var wDJ = weekDayJP[this.now.getDay()] ;

      // 曜日 (英語)
      var weekDayEN = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"] ;
      var wDE = weekDayEN[this.now.getDay()] ;

    },

  };

  // 公開API
  gb.Date = obj;

})();

//--------------------------------------------------
//
//  util.class(Math)
//
//--------------------------------------------------
(function(){

  var gb = jp.co.sjPlus

  var obj = {}

  obj = {

    clamp: function(numerator,denominator,val) {

      return val * (numerator / denominator);

    },

    toAng: function(radians) {

      return radians * 180 / Math.PI; //1ラジアンが何度か

    },

    // to radians
    toRad: function(angle) { 

      return angle * Math.PI / 180; //1度何ラジアンか

    },

    dist: function(p1, p2) {

      return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));

    },

    ascend: function(arr) {

      arr.sort(function(a,b){
        if( a > b ) return -1;
        if( a < b ) return 1;
        return 0;
      });
      // var a = [5,3,9,1,10]
      // 結果:10,9,5,3,1

    },

    descend: function(arr) {

      arr.sort(function(a,b){
        if( a < b ) return -1;
        if( a > b ) return 1;
        return 0;
      });

      // var a = [5,3,9,1,10]
      // 結果:1,3,5,9,10

    },

    map: function(value, min01, max01, min02, max02) {

      var dis01 = max01 - min01;
      var dis02 = max02 - min02

      var rate = dis02 / dis01;

      value = value * rate;

      return value;
    },

    constrain: function(value, low, high) {

      
      if (value <= low) value = low;
      if (value >= high) value = high;
     
      return value;

    },

  }

  // 公開API
  gb.Math = obj;

})();

//--------------------------------------------------
//
//  util.class(String)
//
//--------------------------------------------------
// clamp(分子、分母、対象数値)
(function(){

  var gb = jp.co.sjPlus

  var obj = {}

  obj = {

    isContain: function(str,contain) {

      // strの中に,containが存在したら
      if ( str.indexOf(contain) != -1 ) {
        return true;
      }

      return false;

    },

    // 0埋めで2桁にする関数
    add0: function(str){
      
      return ( "0" + str ).substr( -2 ) ;

    },

  }

  // 公開API
  gb.String = obj;

})();

// ------------------------------------------------------------
//
//  Color
//
// ------------------------------------------------------------
(function(){

  var gb = jp.co.sjPlus;

  // ------------------------------------------------------------
  //  RGBA
  // ------------------------------------------------------------
  function RGBA(r, g, b, a) {
      if (gb.isArray(r)) {
          g = r[1];
          b = r[2];
          a = r[3];
          r = r[0];
      } else if (gb.isObject(r)) {
          g = r.g;
          b = r.b;
          a = r.a;
          r = r.r;
      }
      
      this.r = r || 0;
      this.g = g || 0;
      this.b = b || 0;
      this.a = !isNumber(a) ? 1 : a;
  };

  RGBA.prototype = {        
      toHSLA: function() {
          var hsl = rgbToHsl(Math.round(this.r), Math.round(this.g), Math.round(this.b));
          return new HSLA(hsl[0], hsl[1], hsl[2], this.a);
      },
      
      toArray: function() {
          return [Math.round(this.r), Math.round(this.g), Math.round(this.b), this.a];
      },
      
      clone: function() {
          return new Color.RGBA(this);
      },
      
      toString: function() {
          return 'rgba(' + Math.round(this.r) + ', ' + Math.round(this.g) + ', ' + Math.round(this.b) + ', ' + this.a + ')';
      }
  };


  // ------------------------------------------------------------
  //  HSLA
  // ------------------------------------------------------------
  function HSLA(h, s, l, a) {
      if (gb.isArray(h)) {
          s = h[1];
          l = h[2];
          a = h[3];
          h = h[0];
      } else if (gb.isObject(h)) {
          s = h.s;
          l = h.l;
          a = h.a;
          h = h.h;
      }
      
      this.h = h || 0;
      this.s = s || 0;
      this.l = l || 0;
      this.a = !isNumber(a) ? 1 : a;
  };

  HSLA.prototype = {
      toRGBA: function() {
          var rgb = hslToRgb(this.h, this.s, this.l);
          return new RGBA(rgb[0], rgb[1], rgb[2], this.a);
      },
      
      toArray: function() {
          return [this.h, this.s, this.l, this.a];
      },
      
      clone: function() {
          return new Color.HSLA(this);
      },
      
      toString: function() {
          return 'hsla(' + this.h + ', ' + this.s + '%, ' + this.l + '%, ' + this.a + ')';
      }
  };


  // ------------------------------------------------------------
  //  helpers
  // ------------------------------------------------------------
  function rgbToHsl(r, g, b) {
      r /= 255;
      g /= 255;
      b /= 255;

      var max = Math.max(r, g, b);
      var min = Math.min(r, g, b);
      var h, s, l;

      l = (max + min) / 2;

      if (max === min) {
          h = s = 0;
      } else {
          var d = max - min;
          switch (max) {
              case r: h = ((g - b) / d * 60 + 360) % 360; break;
              case g: h = (b - r) / d * 60 + 120; break;
              case b: h = (r - g) / d * 60 + 240; break;
          }
          s = l <= 0.5 ? d / (max + min) : d / (2 - max  - min);
      }

      return [h, s * 100, l * 100];
  }

  function hslToRgb(h, s, l) {
   s /= 100;
   l /= 100;

      var r, g, b;

      if(s === 0){
          r = g = b = l * 255;
      } else {
          var v2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
          var v1 = 2 * l - v2;
          r = Math.round(hueToRgb(v1, v2, h + 120) * 255);
          g = Math.round(hueToRgb(v1, v2, h) * 255);
          b = Math.round(hueToRgb(v1, v2, h - 120) * 255);
      }

      return [r, g, b];
  }

  function hueToRgb(v1, v2, vh) {
      vh /= 360;
      if (vh < 0) vh++;
      if (vh > 1) vh--;
      if (vh < 1 / 6) return v1 + (v2 - v1) * 6 * vh;
      if (vh < 1 / 2) return v2;
      if (vh < 2 / 3) return v1 + (v2 - v1) * (2 / 3 - vh) * 6;
      return v1;
  }

  gb.RGBA = RGBA;
  gb.HSLA = HSLA;

})();

//--------------------------------------------------
//
// 画像1/2倍
//
//--------------------------------------------------

(function(){

  var gb = jp.co.sjPlus;

  function setImgSPSize($target){

      var $img = $target,
          len = $img.length;

      $img.each(function(i) {

          var w = Math.floor($(this).width() / 2),
              h = Math.floor($(this).height() / 2);

          $(this).attr({
              'width': w,
              'height': h,
          });

          if (len == i + 1) $(window).trigger('end');

      });

  }

  gb.setImgSPSize = setImgSPSize;

})();

//--------------------------------------------------
//
//  デバイス、ブラウザ、バージョン判定
//
//--------------------------------------------------
(function(){

  var gb = jp.co.sjPlus;

  var ua = {};
  var userAgent = window.navigator.userAgent.toLowerCase();
  var appVersion = window.navigator.appVersion.toLowerCase();

  //--------------------------------------------------
  //
  //  デバイス判定
  //
  //--------------------------------------------------

  function isDevice() {

    ua.deviceSP = (function(){
      var media = ["iphone","ipod","ipad","android","dream","cupcake","blackberry9500","blackberry9530","blackberry9520","blackberry9550","blackberry9800","webos","incognito","webmate"];
      var pattern = new RegExp(media.join("|"),"i");
      return pattern.test(userAgent);
    })();

    ua.deviceTab = (function(){
      var u = userAgent;

      return (u.indexOf("windows") != -1 && u.indexOf("touch") != -1)
        || u.indexOf("ipad") != -1
        || (u.indexOf("android") != -1 && u.indexOf("mobile") == -1)
        || (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1)
        || u.indexOf("kindle") != -1
        || u.indexOf("silk") != -1
        || u.indexOf("playbook") != -1;
    })();

    ua.deviceMB = (function(){
      var u = userAgent;

      return (u.indexOf("windows") != -1 && u.indexOf("phone") != -1)
        || u.indexOf("iphone") != -1
        || u.indexOf("ipod") != -1
        || (u.indexOf("android") != -1 && u.indexOf("mobile") != -1)
        || (u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1)
        || u.indexOf("blackberry") != -1;
    })();

    if (ua.deviceSP) $('body').addClass('deviceSP');
    if (ua.deviceTAB) $('body').addClass('deviceTAB');
    if (ua.deviceMB) $('body').addClass('deviceMB');

    ua.isiPad = (function(){
      var pattern = new RegExp("ipad","i");
      return pattern.test(userAgent);
    })();

    ua.isiPhone = (function(){
      var pattern = new RegExp("iphone","i");
      return pattern.test(userAgent);
    })();

    ua.isiOS = (function(){
      return (ua.isiPad || ua.isiPhone);
    })();

    ua.isWin = (function(){
      if (navigator.platform.indexOf("Win") > -1) return true;
      else return false;
    })();

  }

  //--------------------------------------------------
  //
  // ブラウザ・バージョン判定
  //
  //--------------------------------------------------

  function isBrowserVersion() {

    ua.isIE = (function(){
        var pattern = new RegExp("msie","i");
        var pattern2 = new RegExp("trident","i");
        return pattern.test(userAgent) || pattern2.test(userAgent);
    })();

    ua.isIEVersion = (function(){
        
        if (appVersion.indexOf("msie 10.") != -1) return 'ie10';
        else if (appVersion.indexOf("msie 9.") != -1) return 'ie9';
        else if (appVersion.indexOf("msie 8.") != -1) return 'ie8';
        else if (appVersion.indexOf("msie 7.") != -1) return 'ie7';
        else if (appVersion.indexOf("msie 6.") != -1) return 'ie6';
        else if (appVersion.indexOf("trident") != -1) return 'ie11';
        else return 'notIE';

    })();

    if (ua.isIE) $('body').addClass('ie');
    if (ua.isIEVersion == 'ie9') $('body').addClass('ie9');
    if (ua.isIEVersion == 'ie10') $('body').addClass('ie10');
    if (ua.isIEVersion == 'ie11') $('body').addClass('ie11');

    ua.isSafari = (function(){
        if(userAgent.indexOf("chrome") != -1) return false;
        if(userAgent.indexOf("lunascape") != -1) return false;
        var pattern = new RegExp("safari","i");
        return pattern.test(userAgent);
    })();

    ua.isChrome = (function(){
        var pattern = new RegExp("chrome","i");
        return pattern.test(userAgent);
    })();

    ua.isFirefox = (function(){
        var pattern = new RegExp("firefox","i");
        return pattern.test(userAgent);
    })();

    ua.isOpera = (function(){
        var pattern = new RegExp("opera","i");
        return pattern.test(userAgent);
    })();

  }

  //--------------------------------------------------
  //
  // レスポンシブ判定,ランドスケープ判定
  //
  //--------------------------------------------------
  
  function isResizeOrientation() {

    var W = window.innerWidth,
        H = window.innerHeight,

        isSP = false,
        cnt = 0,

        bp = 850;

    // 最初ポートレートかランドスケープか判定

    // function init() {

    //   getSize();

    //   if (W > H) cnt = 1;
    //   else cnt = 0;

    //   log('init');

    // }

    function getSize() {
      W = window.innerWidth;
      H = window.innerHeight;   
    }

    function onResize() {

      getSize();

      if (W > bp) {
        isSP = false;
        $('body').removeClass('isSP')
      } else {
        isSP = true;
        $('body').addClass('isSP');
      }

      if (window.innerHeight > window.innerWidth) {
      // if (cnt%2==0) {
        $("body").addClass("portrait");
        $("body").removeClass("landscape");
      }else{
        $("body").addClass("landscape");
        $("body").removeClass("portrait");
      }
      
      // cnt++;
      // log(cnt);
      // $(window).trigger('orient');

    }

    // init();

    gb.isResizeOrient = onResize;
    // gb.isResizeOrientInit = init;

  }

  // ------------------------------------------------------------
  //
  //  各個別デバイスチェック
  //
  // ------------------------------------------------------------

  function isIndividual() {

    if (androidVersion() < 5.6) {
      $('body').addClass('forAndroid');
      $('.logo img').attr({src: '/assets/img/common/logo.png'});
    } 
    // if (iphoneVersion() < 7 && url.indexOf('error') == -1) {
    //   location.href = '/error.html';
    // } 

    // 標準ブラウザ判定
    function isAndroidBrowser() {
      var ua = window.navigator.userAgent
      if (/Android/.test(ua) && /Linux; U;/.test(ua) && !/Chrome/.test(ua)) {
        return true;
      }
      return false;
    }


    function androidVersion() {
      var uat = navigator.userAgent;
      if( uat.indexOf("Android") > 0 ) {

          var version = parseFloat(uat.slice(uat.indexOf("Android")+8));
          return version;
          
      }
    }

    function iphoneVersion() {
      var uat = navigator.userAgent;
      if( uat.indexOf("iPhone OS") > 0 ) {

          var version = parseFloat(uat.slice(uat.indexOf("iPhone OS")+10));
          return version;

      }
    }

  }

  gb.isDevice = isDevice;
  gb.isBrowserVersion = isBrowserVersion;
  gb.isResizeOrientation = isResizeOrientation;
  gb.isIndividual = isIndividual;

}());
//--------------------------------------------------
//
//  updateManager
//
//--------------------------------------------------

(function(){

  var gb = jp.co.sjPlus;

  function updateMgr() {

    this.cnt = 0;
    this.updateList = [];
    this.len = 0;
    this.Timer = null;
    this.isStop = false;

  }

  updateMgr.prototype.setup = function() {

    for (var i in this.updateList) this.updateList[i].setup();

  };

  updateMgr.prototype.update = function() {

    for (var i in this.updateList) this.updateList[i].loop();

  };

  updateMgr.prototype.loop = function() {

    var self = this;

    this.update();
    this.cnt++;

    this.Timer = requestAnimationFrame(function(){

      self.loop.call(self);

    });

    console.log('loop');


  };

  updateMgr.prototype.stop = function() {

    cancelAnimationFrame(this.Timer);

  };

  updateMgr.prototype.resume = function() {

    this.loop();

  };

  updateMgr.prototype.add = function(func) {

    this.updateList.push(func);
    
  };

  updateMgr.prototype.remove = function(target) {

    this.updateList = updateMgr.arrRemove(this.updateList, target);

  };

  updateMgr.arrRemove = function(arr , target) {

    var len = arr.length;
    var check ;
    for( i = 0 ; i < len; i++ ) {
      check = arr[ i ];

      if( check.name == target.name ){
        arr.splice( i , 1 ) ;
        i--;
        len--;
      }
    }

    return arr;
  };

  // 公開api
  gb.updateMgr = updateMgr;
  
})();
//--------------------------------------------------
//
//  pjax
//
//--------------------------------------------------

(function(){

  var gb = jp.co.sjPlus;

  function Pjax(param) {

    this.param = param;

    this.id = null;
    gb.pjax = {count:0};
    gb.Timer = null;

    this.setEvents();

  }

  Pjax.prototype = {

    setID: function () {

        this.id = $('.pjaxWrap').data('id');
        $('body').attr('id', this.id);

    },

    onReady: function () {

        $.pjax(this.param);
        
    },

    onFetch: function () {

      // alert('fetch');
      // イベント解除
      $(document).off('ready');
      $(window).off('render load resize orientationchange');

      // ページ離脱時のモーション
      TweenMax.to($('.pjaxMotion'), 0.6, {
          y: -50,
          opacity: 0,
          ease: Power3.easeIn,
          onComplete: function(){

            // 非表示
            $('.pjaxMotion').css({opacity: 0});

          }
        });
        
    },

    onRender: function () {

      // alert('render');

      $('.bodyInner').scrollTop(0);
      $('.contentsWrap').scrollTop(0);

      this.setID();

      switch (this.id){
        case 'top':
          $(window).trigger('renderTop');
          break;
        case 'about':
          $(window).trigger('renderAbout');
          break;
        case 'technology':
          $(window).trigger('renderTechnology');
          break;
        case 'project':
          $(window).trigger('renderProject');
          break;
        case 'detail':
          $(window).trigger('renderDetail');
          break;
        case 'contact':
          $(window).trigger('renderContact');
          break;
      } 

    },

    setEvents: function () {

      var self = this;

      this.onReady();

      $(document).on('pjax:fetch', function(){self.onFetch.call(self)});
      $(document).on('pjax:render', function(){self.onRender.call(self)});

    },

  }

  gb.Pjax = Pjax;

})();
//--------------------------------------------------
//
//  position center
//
//--------------------------------------------------
(function(){

  var gb = jp.co.sjPlus;

  function PosCenter($target,$targetH,$targetW) {

    this.$target = $target;
    this.$targetH = $targetH;
    this.$targetW = $targetW;

    this.onLoad();

  }

  PosCenter.prototype = {

    onLoad: function() {

      this.$target.each(function(index, el) {
        $(this).adjust();
      });
      this.$targetH.each(function(index, el) {
        $(this).adjustH();
      });
      this.$targetW.each(function(index, el) {
        $(this).adjustW();
      });

    },

    onResize: function() {

      this.onLoad();

    },

  }

  gb.PosCenter = PosCenter;

})();
//--------------------------------------------------
//
//  Size
//
//--------------------------------------------------
(function(){

  var gb = jp.co.sjPlus;

  function Size($obj,list,win,notObj,flag,notList){

    if (!notObj) {
      this.$target = $obj;  
    } else {
      this.$target = $obj.not(notObj);  
    }

    this.defList = [
              'width','height',
              'top','right','bottom','left',
              'margin-top','margin-right','margin-bottom','margin-left',
              'padding-top','padding-right','padding-bottom','padding-left',

              'background-size'
            ];

    this.list = this.defList.concat(list);
    // 重複削除
    this.list = this.list.filter(function (x, i, self) {
              return self.indexOf(x) === i;
           });
    // 対象から外す
    for (var i = 0; i < notList.length; i++) {
      for(j=0; j<this.list.length; j++){
          if(this.list[j] == notList[i]){
              this.list.splice(j--, 1);
          }
      }
    }
    this.tempList = [];
    this.len = this.list.length;

    this.win = win;
    this.defW = win.def;
    this.maxW = win.max;
    this.minW = win.min;

    if (!win.hFlag) this.W = window.innerWidth;
    else this.W = window.innerHeight;
    this.rate = this.W / this.defW;

    this.flag = flag;

    this.getDef();

  }

  Size.prototype = {

    getDef: function () {

      var self = this;

      this.$target.each(function(index) {

        self.tempList[index] = [];

        for (var i = 0; i < self.len; i++) {

          var css = $(this).css(self.list[i]);
          if (css !== '0px' && css !== 'auto') {

            if (self.flag == 'inner' && self.list[i] == 'width') {
              var val = parseInt($(this).innerWidth());
            } else {
              var val = parseInt(css);
            }

            $(this).data(self.list[i],val);
            self.tempList[index].push(self.list[i]);
          };

        };

      });

    },

    setVal: function () {

      var self = this

      this.$target.each(function(index) {

        var len = self.tempList[index].length;

        for (var i = 0; i < len; i++) {

          $(this).css(self.tempList[index][i],$(this).data(self.tempList[index][i]) * self.rate);  

        };

      });

    },

    update: function () {

      if (!this.win.hFlag) this.W = window.innerWidth;
      else this.W = window.innerHeight;

      if (this.W > this.maxW) this.W = this.maxW;
      if (this.W < this.minW) this.W = this.minW;

      this.rate = this.W / this.defW;

    },

    onResize: function () {

      this.update();
      this.setVal();

    },

    main: function () {

      this.update();
      this.setVal();

    }

  }
  // 公開api
  gb.Size = Size;

}());
//--------------------------------------------------
//
//  menu
//
//--------------------------------------------------
(function(){

  var gb = jp.co.sjPlus;

  function Menu($btn,$close) {

    this.$btn = $btn;
    this.$close = $close;
    this.$menu = $('.ui__menu');
    this.$item = $('.ui__menu .item a');

    this.dur = 2000,
    this.ease = 'easeOutQuad';

    this.W = $(window).width(),
    this.H = $(window).height();

    this.setEvents();
    this.ready();

  }

  Menu.prototype = {

    ready: function() {

      this.$menu.find('.itemWrap').adjust();

    },

    toggle: function() {

      if (this.$btn.hasClass('on')) {

        this.close();

      } else {

        this.open();

      };

      $btn.toggleClass('on');

    },

    open: function() {

      this.$menu.show();
      this.ready();
      
    },

    close: function() {

      this.$menu.hide();

    },

    getWindowSize: function() {

      W = $(window).width();
      H = $(window).height();

    },

    stopProp: function(e) {

      e.stopPropagation();

    },

    onResize : function() {

      this.getWindowSize();

    },

    setEvents: function() {

      var self = this;

      var e;
      if ($('body').attr('id') == 'top') e = 'click';
      else e = 'touchstart';
      this.$btn.on(e, function(){self.open.call(self);});
      this.$close.on(e, function(){self.close.call(self);});
      // this.$item.on('click', function(e){self.stopProp.call(self,e);});

    },

  }

  gb.Menu = Menu;

})();
//--------------------------------------------------
//
//  modal (detail)
//
//--------------------------------------------------
(function(){

  var gb = jp.co.sjPlus;

  function Modal($btn,$close) {

    this.$btn = $btn;
    this.$close = $close;
    this.$menu = $('.detail');

    this.dur = 2000,
    this.ease = 'easeOutQuad';

    this.W = $(window).width(),
    this.H = $(window).height();

    this.scrollY = 0;

    this.setEvents();
    this.ready();

  }

  Modal.prototype = {

    ready: function() {


    },

    toggle: function() {

      if (this.$btn.hasClass('on')) {

        this.close();

      } else {

        this.open();

      };

      $btn.toggleClass('on');

    },

    open: function() {

      // gb.Vimeo($('#player'),$('.playBox'));

      // 背景固定
      this.scrollY = $('.contentsWrap').scrollTop(); 

      $('.pjaxWrap').css( {
        position: 'fixed',
        width: '100%',
        top: -1 * this.scrollY
      } );

      // モーダル表示
      this.$menu.show();
      
    },

    close: function() {

      // 背景固定解除
      $('.pjaxWrap').attr( { style: '' } ).css({opacity: 1});
      $( '.bodyInner, .contentsWrap' ).scrollTop(this.scrollY);

      // モーダル非表示
      this.$menu.hide();

    },

    getWindowSize: function() {

      W = $(window).width();
      H = $(window).height();

    },

    onResize : function() {

      this.getWindowSize();

    },

    setEvents: function() {

      var self = this;

      this.$btn.on('touchstart click', function(){self.open.call(self);});
      this.$close.on('touchstart click', function(){self.close.call(self);});

    },

  }

  gb.Modal = Modal;

})();
//--------------------------------------------------
//
//  vimeo
//
//--------------------------------------------------
(function(){

  var gb = jp.co.sjPlus;

  function Vimeo($obj,$btn) {

    var iframe = $obj[0];
    this.player = $f(iframe);

    log(this.player);

    this.$btn = $btn;

    this.setEvents();
    this.ready();

  }

  Vimeo.prototype = {

    ready: function() {


    },

    onPause: function () {

    },

    onFinish: function () {

    },

    onPlayProgress: function (data) {

    },

    setEvents: function() {

      var self = this;

      this.player.addEvent('ready', function() {          
          self.player.addEvent('pause', onPause);
          self.player.addEvent('finish', onFinish);
          self.player.addEvent('playProgress', onPlayProgress);
      });

      this.$btn.on('click', function() {
          self.player.api('play');
      });

    },

  }

  gb.Vimeo = Vimeo;

})();
//--------------------------------------------------
//
//  Common
//
//--------------------------------------------------
(function(){

  var gb = jp.co.sjPlus;

  var param = {
        area : '.pjaxWrap, #header, #topVisualWrap, .ui__menu, .detail',
        link : 'a.pjax',
        ajax: { timeout: 2500},
        wait: 600,
        load : { script: true }
      }

  function onReady() {

    gb.isDevice();
    gb.isBrowserVersion();
    gb.isResizeOrientation();
    gb.isIndividual();

    // pjax
    new gb.Pjax(param)

  }

  function onLoad() {

  }

  function setEvents() {

    $(document).on('ready', onReady);
    $(window).on('load', onLoad);

  }


  function main() {

    setEvents();

  } 

  main();

}());