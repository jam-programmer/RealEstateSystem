;window.Modernizr=function(a,b,c){function x(a){j.cssText=a}function y(a,b){return x(prefixes.join(a+";")+(b||""))}function z(a,b){return typeof a===b}function A(a,b){return!!~(""+a).indexOf(b)}function B(a,b){for(var d in a){var e=a[d];if(!A(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function C(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:z(f,"function")?f.bind(d||b):f}return!1}function D(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+n.join(d+" ")+d).split(" ");return z(b,"string")||z(b,"undefined")?B(e,b):(e=(a+" "+o.join(d+" ")+d).split(" "),C(e,b,c))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m="Webkit Moz O ms",n=m.split(" "),o=m.toLowerCase().split(" "),p={},q={},r={},s=[],t=s.slice,u,v={}.hasOwnProperty,w;!z(v,"undefined")&&!z(v.call,"undefined")?w=function(a,b){return v.call(a,b)}:w=function(a,b){return b in a&&z(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=t.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(t.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(t.call(arguments)))};return e}),p.csstransitions=function(){return D("transition")};for(var E in p)w(p,E)&&(u=E.toLowerCase(),e[u]=p[E](),s.push((e[u]?"":"no-")+u));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)w(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},x(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._domPrefixes=o,e._cssomPrefixes=n,e.testProp=function(a){return B([a])},e.testAllProps=D,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+s.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
/*! jQuery.easing*/
jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});

/*! lightgallery - v1.2.22 - 2016-07-20
* http://sachinchoolur.github.io/lightGallery/
* Copyright (c) 2016 Sachin N; Licensed Apache 2.0 */
!function(a,b,c,d){"use strict";function e(b,d){if(this.el=b,this.$el=a(b),this.s=a.extend({},f,d),this.s.dynamic&&"undefined"!==this.s.dynamicEl&&this.s.dynamicEl.constructor===Array&&!this.s.dynamicEl.length)throw"When using dynamic mode, you must also define dynamicEl as an Array.";return this.modules={},this.lGalleryOn=!1,this.lgBusy=!1,this.hideBartimeout=!1,this.isTouch="ontouchstart"in c.documentElement,this.s.slideEndAnimatoin&&(this.s.hideControlOnEnd=!1),this.s.dynamic?this.$items=this.s.dynamicEl:"this"===this.s.selector?this.$items=this.$el:""!==this.s.selector?this.s.selectWithin?this.$items=a(this.s.selectWithin).find(this.s.selector):this.$items=this.$el.find(a(this.s.selector)):this.$items=this.$el.children(),this.$slide="",this.$outer="",this.init(),this}var f={mode:"lg-slide",cssEasing:"ease",easing:"linear",speed:600,height:"100%",width:"100%",addClass:"",startClass:"lg-start-zoom",backdropDuration:150,hideBarsDelay:6e3,useLeft:!1,closable:!0,loop:!0,escKey:!0,keyPress:!0,controls:!0,slideEndAnimatoin:!0,hideControlOnEnd:!1,mousewheel:!0,getCaptionFromTitleOrAlt:!0,appendSubHtmlTo:".lg-sub-html",subHtmlSelectorRelative:!1,preload:1,showAfterLoad:!0,selector:"",selectWithin:"",nextHtml:"",prevHtml:"",index:!1,iframeMaxWidth:"100%",download:!0,counter:!0,appendCounterTo:".lg-toolbar",swipeThreshold:50,enableSwipe:!0,enableDrag:!0,dynamic:!1,dynamicEl:[],galleryId:1};e.prototype.init=function(){var c=this;c.s.preload>c.$items.length&&(c.s.preload=c.$items.length);var d=b.location.hash;d.indexOf("lg="+this.s.galleryId)>0&&(c.index=parseInt(d.split("&slide=")[1],10),a("body").addClass("lg-from-hash"),a("body").hasClass("lg-on")||(setTimeout(function(){c.build(c.index)}),a("body").addClass("lg-on"))),c.s.dynamic?(c.$el.trigger("onBeforeOpen.lg"),c.index=c.s.index||0,a("body").hasClass("lg-on")||setTimeout(function(){c.build(c.index),a("body").addClass("lg-on")})):c.$items.on("click.lgcustom",function(b){try{b.preventDefault(),b.preventDefault()}catch(a){b.returnValue=!1}c.$el.trigger("onBeforeOpen.lg"),c.index=c.s.index||c.$items.index(this),a("body").hasClass("lg-on")||(c.build(c.index),a("body").addClass("lg-on"))})},e.prototype.build=function(b){var c=this;c.structure(),a.each(a.fn.lightGallery.modules,function(b){c.modules[b]=new a.fn.lightGallery.modules[b](c.el)}),c.slide(b,!1,!1),c.s.keyPress&&c.keyPress(),c.$items.length>1&&(c.arrow(),setTimeout(function(){c.enableDrag(),c.enableSwipe()},50),c.s.mousewheel&&c.mousewheel()),c.counter(),c.closeGallery(),c.$el.trigger("onAfterOpen.lg"),c.$outer.on("mousemove.lg click.lg touchstart.lg",function(){c.$outer.removeClass("lg-hide-items"),clearTimeout(c.hideBartimeout),c.hideBartimeout=setTimeout(function(){c.$outer.addClass("lg-hide-items")},c.s.hideBarsDelay)})},e.prototype.structure=function(){var c,d="",e="",f=0,g="",h=this;for(a("body").append('<div class="lg-backdrop"></div>'),a(".lg-backdrop").css("transition-duration",this.s.backdropDuration+"ms"),f=0;f<this.$items.length;f++)d+='<div class="lg-item"></div>';if(this.s.controls&&this.$items.length>1&&(e='<div class="lg-actions"><div class="lg-prev lg-icon">'+this.s.prevHtml+'</div><div class="lg-next lg-icon">'+this.s.nextHtml+"</div></div>"),".lg-sub-html"===this.s.appendSubHtmlTo&&(g='<div class="lg-sub-html"></div>'),c='<div class="lg-outer '+this.s.addClass+" "+this.s.startClass+'"><div class="lg" style="width:'+this.s.width+"; height:"+this.s.height+'"><div class="lg-inner">'+d+'</div><div class="lg-toolbar group"><span class="lg-close lg-icon"></span></div>'+e+g+"</div></div>",a("body").append(c),this.$outer=a(".lg-outer"),this.$slide=this.$outer.find(".lg-item"),this.s.useLeft?(this.$outer.addClass("lg-use-left"),this.s.mode="lg-slide"):this.$outer.addClass("lg-use-css3"),h.setTop(),a(b).on("resize.lg orientationchange.lg",function(){setTimeout(function(){h.setTop()},100)}),this.$slide.eq(this.index).addClass("lg-current"),this.doCss()?this.$outer.addClass("lg-css3"):(this.$outer.addClass("lg-css"),this.s.speed=0),this.$outer.addClass(this.s.mode),this.s.enableDrag&&this.$items.length>1&&this.$outer.addClass("lg-grab"),this.s.showAfterLoad&&this.$outer.addClass("lg-show-after-load"),this.doCss()){var i=this.$outer.find(".lg-inner");i.css("transition-timing-function",this.s.cssEasing),i.css("transition-duration",this.s.speed+"ms")}a(".lg-backdrop").addClass("in"),setTimeout(function(){h.$outer.addClass("lg-visible")},this.s.backdropDuration),this.s.download&&this.$outer.find(".lg-toolbar").append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'),this.prevScrollTop=a(b).scrollTop()},e.prototype.setTop=function(){if("100%"!==this.s.height){var c=a(b).height(),d=(c-parseInt(this.s.height,10))/2,e=this.$outer.find(".lg");c>=parseInt(this.s.height,10)?e.css("top",d+"px"):e.css("top","0px")}},e.prototype.doCss=function(){var a=function(){var a=["transition","MozTransition","WebkitTransition","OTransition","msTransition","KhtmlTransition"],b=c.documentElement,d=0;for(d=0;d<a.length;d++)if(a[d]in b.style)return!0};return!!a()},e.prototype.isVideo=function(a,b){var c;if(c=this.s.dynamic?this.s.dynamicEl[b].html:this.$items.eq(b).attr("data-html"),!a&&c)return{html5:!0};var d=a.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),e=a.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),f=a.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),g=a.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);return d?{youtube:d}:e?{vimeo:e}:f?{dailymotion:f}:g?{vk:g}:void 0},e.prototype.counter=function(){this.s.counter&&a(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">'+(parseInt(this.index,10)+1)+'</span> / <span id="lg-counter-all">'+this.$items.length+"</span></div>")},e.prototype.addHtml=function(b){var c,d,e=null;if(this.s.dynamic?this.s.dynamicEl[b].subHtmlUrl?c=this.s.dynamicEl[b].subHtmlUrl:e=this.s.dynamicEl[b].subHtml:(d=this.$items.eq(b),d.attr("data-sub-html-url")?c=d.attr("data-sub-html-url"):(e=d.attr("data-sub-html"),this.s.getCaptionFromTitleOrAlt&&!e&&(e=d.attr("title")||d.find("img").first().attr("alt")))),!c)if("undefined"!=typeof e&&null!==e){var f=e.substring(0,1);"."!==f&&"#"!==f||(e=this.s.subHtmlSelectorRelative&&!this.s.dynamic?d.find(e).html():a(e).html())}else e="";".lg-sub-html"===this.s.appendSubHtmlTo?c?this.$outer.find(this.s.appendSubHtmlTo).load(c):this.$outer.find(this.s.appendSubHtmlTo).html(e):c?this.$slide.eq(b).load(c):this.$slide.eq(b).append(e),"undefined"!=typeof e&&null!==e&&(""===e?this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html"):this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")),this.$el.trigger("onAfterAppendSubHtml.lg",[b])},e.prototype.preload=function(a){var b=1,c=1;for(b=1;b<=this.s.preload&&!(b>=this.$items.length-a);b++)this.loadContent(a+b,!1,0);for(c=1;c<=this.s.preload&&!(a-c<0);c++)this.loadContent(a-c,!1,0)},e.prototype.loadContent=function(c,d,e){var f,g,h,i,j,k,l=this,m=!1,n=function(c){for(var d=[],e=[],f=0;f<c.length;f++){var h=c[f].split(" ");""===h[0]&&h.splice(0,1),e.push(h[0]),d.push(h[1])}for(var i=a(b).width(),j=0;j<d.length;j++)if(parseInt(d[j],10)>i){g=e[j];break}};if(l.s.dynamic){if(l.s.dynamicEl[c].poster&&(m=!0,h=l.s.dynamicEl[c].poster),k=l.s.dynamicEl[c].html,g=l.s.dynamicEl[c].src,l.s.dynamicEl[c].responsive){var o=l.s.dynamicEl[c].responsive.split(",");n(o)}i=l.s.dynamicEl[c].srcset,j=l.s.dynamicEl[c].sizes}else{if(l.$items.eq(c).attr("data-poster")&&(m=!0,h=l.$items.eq(c).attr("data-poster")),k=l.$items.eq(c).attr("data-html"),g=l.$items.eq(c).attr("href")||l.$items.eq(c).attr("data-src"),l.$items.eq(c).attr("data-responsive")){var p=l.$items.eq(c).attr("data-responsive").split(",");n(p)}i=l.$items.eq(c).attr("data-srcset"),j=l.$items.eq(c).attr("data-sizes")}var q=!1;l.s.dynamic?l.s.dynamicEl[c].iframe&&(q=!0):"true"===l.$items.eq(c).attr("data-iframe")&&(q=!0);var r=l.isVideo(g,c);if(!l.$slide.eq(c).hasClass("lg-loaded")){if(q)l.$slide.eq(c).prepend('<div class="lg-video-cont" style="max-width:'+l.s.iframeMaxWidth+'"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="'+g+'"  allowfullscreen="true"></iframe></div></div>');else if(m){var s="";s=r&&r.youtube?"lg-has-youtube":r&&r.vimeo?"lg-has-vimeo":"lg-has-html5",l.$slide.eq(c).prepend('<div class="lg-video-cont '+s+' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="'+h+'" /></div></div>')}else r?(l.$slide.eq(c).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'),l.$el.trigger("hasVideo.lg",[c,g,k])):l.$slide.eq(c).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="'+g+'" /></div>');if(l.$el.trigger("onAferAppendSlide.lg",[c]),f=l.$slide.eq(c).find(".lg-object"),j&&f.attr("sizes",j),i){f.attr("srcset",i);try{picturefill({elements:[f[0]]})}catch(a){console.error("Make sure you have included Picturefill version 2")}}".lg-sub-html"!==this.s.appendSubHtmlTo&&l.addHtml(c),l.$slide.eq(c).addClass("lg-loaded")}l.$slide.eq(c).find(".lg-object").on("load.lg error.lg",function(){var b=0;e&&!a("body").hasClass("lg-from-hash")&&(b=e),setTimeout(function(){l.$slide.eq(c).addClass("lg-complete"),l.$el.trigger("onSlideItemLoad.lg",[c,e||0])},b)}),r&&r.html5&&!m&&l.$slide.eq(c).addClass("lg-complete"),d===!0&&(l.$slide.eq(c).hasClass("lg-complete")?l.preload(c):l.$slide.eq(c).find(".lg-object").on("load.lg error.lg",function(){l.preload(c)}))},e.prototype.slide=function(b,c,d){var e=this.$outer.find(".lg-current").index(),f=this;if(!f.lGalleryOn||e!==b){var g=this.$slide.length,h=f.lGalleryOn?this.s.speed:0,i=!1,j=!1;if(!f.lgBusy){if(this.s.download){var k;k=f.s.dynamic?f.s.dynamicEl[b].downloadUrl!==!1&&(f.s.dynamicEl[b].downloadUrl||f.s.dynamicEl[b].src):"false"!==f.$items.eq(b).attr("data-download-url")&&(f.$items.eq(b).attr("data-download-url")||f.$items.eq(b).attr("href")||f.$items.eq(b).attr("data-src")),k?(a("#lg-download").attr("href",k),f.$outer.removeClass("lg-hide-download")):f.$outer.addClass("lg-hide-download")}if(this.$el.trigger("onBeforeSlide.lg",[e,b,c,d]),f.lgBusy=!0,clearTimeout(f.hideBartimeout),".lg-sub-html"===this.s.appendSubHtmlTo&&setTimeout(function(){f.addHtml(b)},h),this.arrowDisable(b),c){var l=b-1,m=b+1;0===b&&e===g-1?(m=0,l=g-1):b===g-1&&0===e&&(m=0,l=g-1),this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide"),f.$slide.eq(l).addClass("lg-prev-slide"),f.$slide.eq(m).addClass("lg-next-slide"),f.$slide.eq(b).addClass("lg-current")}else f.$outer.addClass("lg-no-trans"),this.$slide.removeClass("lg-prev-slide lg-next-slide"),b<e?(j=!0,0!==b||e!==g-1||d||(j=!1,i=!0)):b>e&&(i=!0,b!==g-1||0!==e||d||(j=!0,i=!1)),j?(this.$slide.eq(b).addClass("lg-prev-slide"),this.$slide.eq(e).addClass("lg-next-slide")):i&&(this.$slide.eq(b).addClass("lg-next-slide"),this.$slide.eq(e).addClass("lg-prev-slide")),setTimeout(function(){f.$slide.removeClass("lg-current"),f.$slide.eq(b).addClass("lg-current"),f.$outer.removeClass("lg-no-trans")},50);f.lGalleryOn?(setTimeout(function(){f.loadContent(b,!0,0)},this.s.speed+50),setTimeout(function(){f.lgBusy=!1,f.$el.trigger("onAfterSlide.lg",[e,b,c,d])},this.s.speed)):(f.loadContent(b,!0,f.s.backdropDuration),f.lgBusy=!1,f.$el.trigger("onAfterSlide.lg",[e,b,c,d])),f.lGalleryOn=!0,this.s.counter&&a("#lg-counter-current").text(b+1)}}},e.prototype.goToNextSlide=function(a){var b=this;b.lgBusy||(b.index+1<b.$slide.length?(b.index++,b.$el.trigger("onBeforeNextSlide.lg",[b.index]),b.slide(b.index,a,!1)):b.s.loop?(b.index=0,b.$el.trigger("onBeforeNextSlide.lg",[b.index]),b.slide(b.index,a,!1)):b.s.slideEndAnimatoin&&(b.$outer.addClass("lg-right-end"),setTimeout(function(){b.$outer.removeClass("lg-right-end")},400)))},e.prototype.goToPrevSlide=function(a){var b=this;b.lgBusy||(b.index>0?(b.index--,b.$el.trigger("onBeforePrevSlide.lg",[b.index,a]),b.slide(b.index,a,!1)):b.s.loop?(b.index=b.$items.length-1,b.$el.trigger("onBeforePrevSlide.lg",[b.index,a]),b.slide(b.index,a,!1)):b.s.slideEndAnimatoin&&(b.$outer.addClass("lg-left-end"),setTimeout(function(){b.$outer.removeClass("lg-left-end")},400)))},e.prototype.keyPress=function(){var c=this;this.$items.length>1&&a(b).on("keyup.lg",function(a){c.$items.length>1&&(37===a.keyCode&&(a.preventDefault(),c.goToPrevSlide()),39===a.keyCode&&(a.preventDefault(),c.goToNextSlide()))}),a(b).on("keydown.lg",function(a){c.s.escKey===!0&&27===a.keyCode&&(a.preventDefault(),c.$outer.hasClass("lg-thumb-open")?c.$outer.removeClass("lg-thumb-open"):c.destroy())})},e.prototype.arrow=function(){var a=this;this.$outer.find(".lg-prev").on("click.lg",function(){a.goToPrevSlide()}),this.$outer.find(".lg-next").on("click.lg",function(){a.goToNextSlide()})},e.prototype.arrowDisable=function(a){!this.s.loop&&this.s.hideControlOnEnd&&(a+1<this.$slide.length?this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled"):this.$outer.find(".lg-next").attr("disabled","disabled").addClass("disabled"),a>0?this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled"):this.$outer.find(".lg-prev").attr("disabled","disabled").addClass("disabled"))},e.prototype.setTranslate=function(a,b,c){this.s.useLeft?a.css("left",b):a.css({transform:"translate3d("+b+"px, "+c+"px, 0px)"})},e.prototype.touchMove=function(b,c){var d=c-b;Math.abs(d)>15&&(this.$outer.addClass("lg-dragging"),this.setTranslate(this.$slide.eq(this.index),d,0),this.setTranslate(a(".lg-prev-slide"),-this.$slide.eq(this.index).width()+d,0),this.setTranslate(a(".lg-next-slide"),this.$slide.eq(this.index).width()+d,0))},e.prototype.touchEnd=function(a){var b=this;"lg-slide"!==b.s.mode&&b.$outer.addClass("lg-slide"),this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity","0"),setTimeout(function(){b.$outer.removeClass("lg-dragging"),a<0&&Math.abs(a)>b.s.swipeThreshold?b.goToNextSlide(!0):a>0&&Math.abs(a)>b.s.swipeThreshold?b.goToPrevSlide(!0):Math.abs(a)<5&&b.$el.trigger("onSlideClick.lg"),b.$slide.removeAttr("style")}),setTimeout(function(){b.$outer.hasClass("lg-dragging")||"lg-slide"===b.s.mode||b.$outer.removeClass("lg-slide")},b.s.speed+100)},e.prototype.enableSwipe=function(){var a=this,b=0,c=0,d=!1;a.s.enableSwipe&&a.isTouch&&a.doCss()&&(a.$slide.on("touchstart.lg",function(c){a.$outer.hasClass("lg-zoomed")||a.lgBusy||(c.preventDefault(),a.manageSwipeClass(),b=c.originalEvent.targetTouches[0].pageX)}),a.$slide.on("touchmove.lg",function(e){a.$outer.hasClass("lg-zoomed")||(e.preventDefault(),c=e.originalEvent.targetTouches[0].pageX,a.touchMove(b,c),d=!0)}),a.$slide.on("touchend.lg",function(){a.$outer.hasClass("lg-zoomed")||(d?(d=!1,a.touchEnd(c-b)):a.$el.trigger("onSlideClick.lg"))}))},e.prototype.enableDrag=function(){var c=this,d=0,e=0,f=!1,g=!1;c.s.enableDrag&&!c.isTouch&&c.doCss()&&(c.$slide.on("mousedown.lg",function(b){c.$outer.hasClass("lg-zoomed")||(a(b.target).hasClass("lg-object")||a(b.target).hasClass("lg-video-play"))&&(b.preventDefault(),c.lgBusy||(c.manageSwipeClass(),d=b.pageX,f=!0,c.$outer.scrollLeft+=1,c.$outer.scrollLeft-=1,c.$outer.removeClass("lg-grab").addClass("lg-grabbing"),c.$el.trigger("onDragstart.lg")))}),a(b).on("mousemove.lg",function(a){f&&(g=!0,e=a.pageX,c.touchMove(d,e),c.$el.trigger("onDragmove.lg"))}),a(b).on("mouseup.lg",function(b){g?(g=!1,c.touchEnd(e-d),c.$el.trigger("onDragend.lg")):(a(b.target).hasClass("lg-object")||a(b.target).hasClass("lg-video-play"))&&c.$el.trigger("onSlideClick.lg"),f&&(f=!1,c.$outer.removeClass("lg-grabbing").addClass("lg-grab"))}))},e.prototype.manageSwipeClass=function(){var a=this.index+1,b=this.index-1,c=this.$slide.length;this.s.loop&&(0===this.index?b=c-1:this.index===c-1&&(a=0)),this.$slide.removeClass("lg-next-slide lg-prev-slide"),b>-1&&this.$slide.eq(b).addClass("lg-prev-slide"),this.$slide.eq(a).addClass("lg-next-slide")},e.prototype.mousewheel=function(){var a=this;a.$outer.on("mousewheel.lg",function(b){b.deltaY&&(b.deltaY>0?a.goToPrevSlide():a.goToNextSlide(),b.preventDefault())})},e.prototype.closeGallery=function(){var b=this,c=!1;this.$outer.find(".lg-close").on("click.lg",function(){b.destroy()}),b.s.closable&&(b.$outer.on("mousedown.lg",function(b){c=!!(a(b.target).is(".lg-outer")||a(b.target).is(".lg-item ")||a(b.target).is(".lg-img-wrap"))}),b.$outer.on("mouseup.lg",function(d){(a(d.target).is(".lg-outer")||a(d.target).is(".lg-item ")||a(d.target).is(".lg-img-wrap")&&c)&&(b.$outer.hasClass("lg-dragging")||b.destroy())}))},e.prototype.destroy=function(c){var d=this;c||d.$el.trigger("onBeforeClose.lg"),a(b).scrollTop(d.prevScrollTop),c&&(d.s.dynamic||this.$items.off("click.lg click.lgcustom"),a.removeData(d.el,"lightGallery")),this.$el.off(".lg.tm"),a.each(a.fn.lightGallery.modules,function(a){d.modules[a]&&d.modules[a].destroy()}),this.lGalleryOn=!1,clearTimeout(d.hideBartimeout),this.hideBartimeout=!1,a(b).off(".lg"),a("body").removeClass("lg-on lg-from-hash"),d.$outer&&d.$outer.removeClass("lg-visible"),a(".lg-backdrop").removeClass("in"),setTimeout(function(){d.$outer&&d.$outer.remove(),a(".lg-backdrop").remove(),c||d.$el.trigger("onCloseAfter.lg")},d.s.backdropDuration+50)},a.fn.lightGallery=function(b){return this.each(function(){if(a.data(this,"lightGallery"))try{a(this).data("lightGallery").init()}catch(a){console.error("lightGallery has not initiated properly")}else a.data(this,"lightGallery",new e(this,b))})},a.fn.lightGallery.modules={}}(jQuery,window,document);
/*! lg-zoom - v1.0.4 - 2016-12-20
* http://sachinchoolur.github.io/lightGallery
* Copyright (c) 2016 Sachin N; Licensed GPLv3 */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof exports?module.exports=b(require("jquery")):b(jQuery)}(this,function(a){!function(){"use strict";var b=function(){var a=!1,b=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);return b&&parseInt(b[2],10)<54&&(a=!0),a},c={scale:1,zoom:!0,actualSize:!0,enableZoomAfter:300,useLeftForZoom:b()},d=function(b){return this.core=a(b).data("lightGallery"),this.core.s=a.extend({},c,this.core.s),this.core.s.zoom&&this.core.doCss()&&(this.init(),this.zoomabletimeout=!1,this.pageX=a(window).width()/2,this.pageY=a(window).height()/2+a(window).scrollTop()),this};d.prototype.init=function(){var b=this,c='<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>';b.core.s.actualSize&&(c+='<span id="lg-actual-size" class="lg-icon"></span>'),b.core.s.useLeftForZoom?b.core.$outer.addClass("lg-use-left-for-zoom"):b.core.$outer.addClass("lg-use-transition-for-zoom"),this.core.$outer.find(".lg-toolbar").append(c),b.core.$el.on("onSlideItemLoad.lg.tm.zoom",function(c,d,e){var f=b.core.s.enableZoomAfter+e;a("body").hasClass("lg-from-hash")&&e?f=0:a("body").removeClass("lg-from-hash"),b.zoomabletimeout=setTimeout(function(){b.core.$slide.eq(d).addClass("lg-zoomable")},f+30)});var d=1,e=function(c){var e,f,d=b.core.$outer.find(".lg-current .lg-image"),g=(a(window).width()-d.prop("offsetWidth"))/2,h=(a(window).height()-d.prop("offsetHeight"))/2+a(window).scrollTop();e=b.pageX-g,f=b.pageY-h;var i=(c-1)*e,j=(c-1)*f;d.css("transform","scale3d("+c+", "+c+", 1)").attr("data-scale",c),b.core.s.useLeftForZoom?d.parent().css({left:-i+"px",top:-j+"px"}).attr("data-x",i).attr("data-y",j):d.parent().css("transform","translate3d(-"+i+"px, -"+j+"px, 0)").attr("data-x",i).attr("data-y",j)},f=function(){d>1?b.core.$outer.addClass("lg-zoomed"):b.resetZoom(),d<1&&(d=1),e(d)},g=function(c,e,g,h){var j,i=e.prop("offsetWidth");j=b.core.s.dynamic?b.core.s.dynamicEl[g].width||e[0].naturalWidth||i:b.core.$items.eq(g).attr("data-width")||e[0].naturalWidth||i;var k;b.core.$outer.hasClass("lg-zoomed")?d=1:j>i&&(k=j/i,d=k||2),h?(b.pageX=a(window).width()/2,b.pageY=a(window).height()/2+a(window).scrollTop()):(b.pageX=c.pageX||c.originalEvent.targetTouches[0].pageX,b.pageY=c.pageY||c.originalEvent.targetTouches[0].pageY),f(),setTimeout(function(){b.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")},10)},h=!1;b.core.$el.on("onAferAppendSlide.lg.tm.zoom",function(a,c){var d=b.core.$slide.eq(c).find(".lg-image");d.on("dblclick",function(a){g(a,d,c)}),d.on("touchstart",function(a){h?(clearTimeout(h),h=null,g(a,d,c)):h=setTimeout(function(){h=null},300),a.preventDefault()})}),a(window).on("resize.lg.zoom scroll.lg.zoom orientationchange.lg.zoom",function(){b.pageX=a(window).width()/2,b.pageY=a(window).height()/2+a(window).scrollTop(),e(d)}),a("#lg-zoom-out").on("click.lg",function(){b.core.$outer.find(".lg-current .lg-image").length&&(d-=b.core.s.scale,f())}),a("#lg-zoom-in").on("click.lg",function(){b.core.$outer.find(".lg-current .lg-image").length&&(d+=b.core.s.scale,f())}),a("#lg-actual-size").on("click.lg",function(a){g(a,b.core.$slide.eq(b.core.index).find(".lg-image"),b.core.index,!0)}),b.core.$el.on("onBeforeSlide.lg.tm",function(){d=1,b.resetZoom()}),b.core.isTouch||b.zoomDrag(),b.core.isTouch&&b.zoomSwipe()},d.prototype.resetZoom=function(){this.core.$outer.removeClass("lg-zoomed"),this.core.$slide.find(".lg-img-wrap").removeAttr("style data-x data-y"),this.core.$slide.find(".lg-image").removeAttr("style data-scale"),this.pageX=a(window).width()/2,this.pageY=a(window).height()/2+a(window).scrollTop()},d.prototype.zoomSwipe=function(){var a=this,b={},c={},d=!1,e=!1,f=!1;a.core.$slide.on("touchstart.lg",function(c){if(a.core.$outer.hasClass("lg-zoomed")){var d=a.core.$slide.eq(a.core.index).find(".lg-object");f=d.prop("offsetHeight")*d.attr("data-scale")>a.core.$outer.find(".lg").height(),e=d.prop("offsetWidth")*d.attr("data-scale")>a.core.$outer.find(".lg").width(),(e||f)&&(c.preventDefault(),b={x:c.originalEvent.targetTouches[0].pageX,y:c.originalEvent.targetTouches[0].pageY})}}),a.core.$slide.on("touchmove.lg",function(g){if(a.core.$outer.hasClass("lg-zoomed")){var i,j,h=a.core.$slide.eq(a.core.index).find(".lg-img-wrap");g.preventDefault(),d=!0,c={x:g.originalEvent.targetTouches[0].pageX,y:g.originalEvent.targetTouches[0].pageY},a.core.$outer.addClass("lg-zoom-dragging"),j=f?-Math.abs(h.attr("data-y"))+(c.y-b.y):-Math.abs(h.attr("data-y")),i=e?-Math.abs(h.attr("data-x"))+(c.x-b.x):-Math.abs(h.attr("data-x")),(Math.abs(c.x-b.x)>15||Math.abs(c.y-b.y)>15)&&(a.core.s.useLeftForZoom?h.css({left:i+"px",top:j+"px"}):h.css("transform","translate3d("+i+"px, "+j+"px, 0)"))}}),a.core.$slide.on("touchend.lg",function(){a.core.$outer.hasClass("lg-zoomed")&&d&&(d=!1,a.core.$outer.removeClass("lg-zoom-dragging"),a.touchendZoom(b,c,e,f))})},d.prototype.zoomDrag=function(){var b=this,c={},d={},e=!1,f=!1,g=!1,h=!1;b.core.$slide.on("mousedown.lg.zoom",function(d){var f=b.core.$slide.eq(b.core.index).find(".lg-object");h=f.prop("offsetHeight")*f.attr("data-scale")>b.core.$outer.find(".lg").height(),g=f.prop("offsetWidth")*f.attr("data-scale")>b.core.$outer.find(".lg").width(),b.core.$outer.hasClass("lg-zoomed")&&a(d.target).hasClass("lg-object")&&(g||h)&&(d.preventDefault(),c={x:d.pageX,y:d.pageY},e=!0,b.core.$outer.scrollLeft+=1,b.core.$outer.scrollLeft-=1,b.core.$outer.removeClass("lg-grab").addClass("lg-grabbing"))}),a(window).on("mousemove.lg.zoom",function(a){if(e){var j,k,i=b.core.$slide.eq(b.core.index).find(".lg-img-wrap");f=!0,d={x:a.pageX,y:a.pageY},b.core.$outer.addClass("lg-zoom-dragging"),k=h?-Math.abs(i.attr("data-y"))+(d.y-c.y):-Math.abs(i.attr("data-y")),j=g?-Math.abs(i.attr("data-x"))+(d.x-c.x):-Math.abs(i.attr("data-x")),b.core.s.useLeftForZoom?i.css({left:j+"px",top:k+"px"}):i.css("transform","translate3d("+j+"px, "+k+"px, 0)")}}),a(window).on("mouseup.lg.zoom",function(a){e&&(e=!1,b.core.$outer.removeClass("lg-zoom-dragging"),!f||c.x===d.x&&c.y===d.y||(d={x:a.pageX,y:a.pageY},b.touchendZoom(c,d,g,h)),f=!1),b.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")})},d.prototype.touchendZoom=function(a,b,c,d){var e=this,f=e.core.$slide.eq(e.core.index).find(".lg-img-wrap"),g=e.core.$slide.eq(e.core.index).find(".lg-object"),h=-Math.abs(f.attr("data-x"))+(b.x-a.x),i=-Math.abs(f.attr("data-y"))+(b.y-a.y),j=(e.core.$outer.find(".lg").height()-g.prop("offsetHeight"))/2,k=Math.abs(g.prop("offsetHeight")*Math.abs(g.attr("data-scale"))-e.core.$outer.find(".lg").height()+j),l=(e.core.$outer.find(".lg").width()-g.prop("offsetWidth"))/2,m=Math.abs(g.prop("offsetWidth")*Math.abs(g.attr("data-scale"))-e.core.$outer.find(".lg").width()+l);(Math.abs(b.x-a.x)>15||Math.abs(b.y-a.y)>15)&&(d&&(i<=-k?i=-k:i>=-j&&(i=-j)),c&&(h<=-m?h=-m:h>=-l&&(h=-l)),d?f.attr("data-y",Math.abs(i)):i=-Math.abs(f.attr("data-y")),c?f.attr("data-x",Math.abs(h)):h=-Math.abs(f.attr("data-x")),e.core.s.useLeftForZoom?f.css({left:h+"px",top:i+"px"}):f.css("transform","translate3d("+h+"px, "+i+"px, 0)"))},d.prototype.destroy=function(){var b=this;b.core.$el.off(".lg.zoom"),a(window).off(".lg.zoom"),b.core.$slide.off(".lg.zoom"),b.core.$el.off(".lg.tm.zoom"),b.resetZoom(),clearTimeout(b.zoomabletimeout),b.zoomabletimeout=!1},a.fn.lightGallery.modules.zoom=d}()});
/*!  lightGallery video */
!function(e,o,i,l){"use strict";var a={videoMaxWidth:"855px",youtubePlayerParams:!1,vimeoPlayerParams:!1,dailymotionPlayerParams:!1,videojs:!1},s=function(o){return this.core=e(o).data("lightGallery"),this.$el=e(o),this.core.s=e.extend({},a,this.core.s),this.videoLoaded=!1,this.init(),this};s.prototype.init=function(){var o=this;o.core.$el.on("hasVideo.lg.tm",function(e,i,l,a){if(o.core.$slide.eq(i).find(".lg-video").append(o.loadVideo(l,"lg-object",!0,i,a)),a)if(o.core.s.videojs)try{videojs(o.core.$slide.eq(i).find(".lg-html5").get(0),{},function(){o.videoLoaded||this.play()})}catch(s){console.error("Make sure you have included videojs")}else o.core.$slide.eq(i).find(".lg-html5").get(0).play()}),o.core.$el.on("onAferAppendSlide.lg.tm",function(e,i){o.core.$slide.eq(i).find(".lg-video-cont").css("max-width",o.core.s.videoMaxWidth),o.videoLoaded=!0});var i=function(e){if(e.find(".lg-object").hasClass("lg-has-poster")&&e.find(".lg-object").is(":visible"))if(e.hasClass("lg-has-video")){var i=e.find(".lg-youtube").get(0),l=e.find(".lg-vimeo").get(0),a=e.find(".lg-dailymotion").get(0),s=e.find(".lg-html5").get(0);if(i)i.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*");else if(l)try{$f(l).api("play")}catch(r){console.error("Make sure you have included froogaloop2 js")}else if(a)a.contentWindow.postMessage("play","*");else if(s)if(o.core.s.videojs)try{videojs(s).play()}catch(r){console.error("Make sure you have included videojs")}else s.play();e.addClass("lg-video-palying")}else{e.addClass("lg-video-palying lg-has-video");var t,d,c=function(i,l){if(e.find(".lg-video").append(o.loadVideo(i,"",!1,o.core.index,l)),l)if(o.core.s.videojs)try{videojs(o.core.$slide.eq(o.core.index).find(".lg-html5").get(0),{},function(){this.play()})}catch(a){console.error("Make sure you have included videojs")}else o.core.$slide.eq(o.core.index).find(".lg-html5").get(0).play()};o.core.s.dynamic?(t=o.core.s.dynamicEl[o.core.index].src,d=o.core.s.dynamicEl[o.core.index].html,c(t,d)):(t=o.core.$items.eq(o.core.index).attr("href")||o.core.$items.eq(o.core.index).attr("data-src"),d=o.core.$items.eq(o.core.index).attr("data-html"),c(t,d));var n=e.find(".lg-object");e.find(".lg-video").append(n),e.find(".lg-video-object").hasClass("lg-html5")||(e.removeClass("lg-complete"),e.find(".lg-video-object").on("load.lg error.lg",function(){e.addClass("lg-complete")}))}};o.core.doCss()&&o.core.$items.length>1&&(o.core.s.enableSwipe&&o.core.isTouch||o.core.s.enableDrag&&!o.core.isTouch)?o.core.$el.on("onSlideClick.lg.tm",function(){var e=o.core.$slide.eq(o.core.index);i(e)}):o.core.$slide.on("click.lg",function(){i(e(this))}),o.core.$el.on("onBeforeSlide.lg.tm",function(e,i,l){var a=o.core.$slide.eq(i),s=a.find(".lg-youtube").get(0),r=a.find(".lg-vimeo").get(0),t=a.find(".lg-dailymotion").get(0),d=a.find(".lg-html5").get(0);if(s)s.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*");else if(r)try{$f(r).api("pause")}catch(c){console.error("Make sure you have included froogaloop2 js")}else if(t)t.contentWindow.postMessage("pause","*");else if(d)if(o.core.s.videojs)try{videojs(d).pause()}catch(c){console.error("Make sure you have included videojs")}else d.pause();var n;n=o.core.s.dynamic?o.core.s.dynamicEl[l].src:o.core.$items.eq(l).attr("href")||o.core.$items.eq(l).attr("data-src");var m=o.core.isVideo(n,l)||{};(m.youtube||m.vimeo||m.dailymotion)&&o.core.$outer.addClass("lg-hide-download")}),o.core.$el.on("onAfterSlide.lg.tm",function(e,i){o.core.$slide.eq(i).removeClass("lg-video-palying")})},s.prototype.loadVideo=function(o,i,l,a,s){var r="",t=1,d="",c=this.core.isVideo(o,a)||{};if(l&&(t=this.videoLoaded?0:1),c.youtube)d="?wmode=opaque&autoplay="+t+"&enablejsapi=1",this.core.s.youtubePlayerParams&&(d=d+"&"+e.param(this.core.s.youtubePlayerParams)),r='<iframe class="lg-video-object lg-youtube '+i+'" width="560" height="315" src="//www.youtube.com/embed/'+c.youtube[1]+d+'" frameborder="0" allowfullscreen></iframe>';else if(c.vimeo)d="?autoplay="+t+"&api=1",this.core.s.vimeoPlayerParams&&(d=d+"&"+e.param(this.core.s.vimeoPlayerParams)),r='<iframe class="lg-video-object lg-vimeo '+i+'" width="560" height="315"  src="http://player.vimeo.com/video/'+c.vimeo[1]+d+'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';else if(c.dailymotion)d="?wmode=opaque&autoplay="+t+"&api=postMessage",this.core.s.dailymotionPlayerParams&&(d=d+"&"+e.param(this.core.s.dailymotionPlayerParams)),r='<iframe class="lg-video-object lg-dailymotion '+i+'" width="560" height="315" src="//www.dailymotion.com/embed/video/'+c.dailymotion[1]+d+'" frameborder="0" allowfullscreen></iframe>';else if(c.html5){var n=s.substring(0,1);("."===n||"#"===n)&&(s=e(s).html()),r=s}return r},s.prototype.destroy=function(){this.videoLoaded=!1},e.fn.lightGallery.modules.video=s}(jQuery,window,document);
/*!
 * Isotope PACKAGED v2.2.2
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2015 Metafizzy
 */
 
!function(a){function b(){}function c(a){function c(b){b.prototype.option||(b.prototype.option=function(b){a.isPlainObject(b)&&(this.options=a.extend(!0,this.options,b))})}function e(b,c){a.fn[b]=function(e){if("string"==typeof e){for(var g=d.call(arguments,1),h=0,i=this.length;i>h;h++){var j=this[h],k=a.data(j,b);if(k)if(a.isFunction(k[e])&&"_"!==e.charAt(0)){var l=k[e].apply(k,g);if(void 0!==l)return l}else f("no such method '"+e+"' for "+b+" instance");else f("cannot call methods on "+b+" prior to initialization; attempted to call '"+e+"'")}return this}return this.each(function(){var d=a.data(this,b);d?(d.option(e),d._init()):(d=new c(this,e),a.data(this,b,d))})}}if(a){var f="undefined"==typeof console?b:function(a){console.error(a)};return a.bridget=function(a,b){c(b),e(a,b)},a.bridget}}var d=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],c):c("object"==typeof exports?require("jquery"):a.jQuery)}(window),function(a){function b(b){var c=a.event;return c.target=c.target||c.srcElement||b,c}var c=document.documentElement,d=function(){};c.addEventListener?d=function(a,b,c){a.addEventListener(b,c,!1)}:c.attachEvent&&(d=function(a,c,d){a[c+d]=d.handleEvent?function(){var c=b(a);d.handleEvent.call(d,c)}:function(){var c=b(a);d.call(a,c)},a.attachEvent("on"+c,a[c+d])});var e=function(){};c.removeEventListener?e=function(a,b,c){a.removeEventListener(b,c,!1)}:c.detachEvent&&(e=function(a,b,c){a.detachEvent("on"+b,a[b+c]);try{delete a[b+c]}catch(d){a[b+c]=void 0}});var f={bind:d,unbind:e};"function"==typeof define&&define.amd?define("eventie/eventie",f):"object"==typeof exports?module.exports=f:a.eventie=f}(window),function(){"use strict";function a(){}function b(a,b){for(var c=a.length;c--;)if(a[c].listener===b)return c;return-1}function c(a){return function(){return this[a].apply(this,arguments)}}var d=a.prototype,e=this,f=e.EventEmitter;d.getListeners=function(a){var b,c,d=this._getEvents();if(a instanceof RegExp){b={};for(c in d)d.hasOwnProperty(c)&&a.test(c)&&(b[c]=d[c])}else b=d[a]||(d[a]=[]);return b},d.flattenListeners=function(a){var b,c=[];for(b=0;b<a.length;b+=1)c.push(a[b].listener);return c},d.getListenersAsObject=function(a){var b,c=this.getListeners(a);return c instanceof Array&&(b={},b[a]=c),b||c},d.addListener=function(a,c){var d,e=this.getListenersAsObject(a),f="object"==typeof c;for(d in e)e.hasOwnProperty(d)&&-1===b(e[d],c)&&e[d].push(f?c:{listener:c,once:!1});return this},d.on=c("addListener"),d.addOnceListener=function(a,b){return this.addListener(a,{listener:b,once:!0})},d.once=c("addOnceListener"),d.defineEvent=function(a){return this.getListeners(a),this},d.defineEvents=function(a){for(var b=0;b<a.length;b+=1)this.defineEvent(a[b]);return this},d.removeListener=function(a,c){var d,e,f=this.getListenersAsObject(a);for(e in f)f.hasOwnProperty(e)&&(d=b(f[e],c),-1!==d&&f[e].splice(d,1));return this},d.off=c("removeListener"),d.addListeners=function(a,b){return this.manipulateListeners(!1,a,b)},d.removeListeners=function(a,b){return this.manipulateListeners(!0,a,b)},d.manipulateListeners=function(a,b,c){var d,e,f=a?this.removeListener:this.addListener,g=a?this.removeListeners:this.addListeners;if("object"!=typeof b||b instanceof RegExp)for(d=c.length;d--;)f.call(this,b,c[d]);else for(d in b)b.hasOwnProperty(d)&&(e=b[d])&&("function"==typeof e?f.call(this,d,e):g.call(this,d,e));return this},d.removeEvent=function(a){var b,c=typeof a,d=this._getEvents();if("string"===c)delete d[a];else if(a instanceof RegExp)for(b in d)d.hasOwnProperty(b)&&a.test(b)&&delete d[b];else delete this._events;return this},d.removeAllListeners=c("removeEvent"),d.emitEvent=function(a,b){var c,d,e,f,g=this.getListenersAsObject(a);for(e in g)if(g.hasOwnProperty(e))for(d=g[e].length;d--;)c=g[e][d],c.once===!0&&this.removeListener(a,c.listener),f=c.listener.apply(this,b||[]),f===this._getOnceReturnValue()&&this.removeListener(a,c.listener);return this},d.trigger=c("emitEvent"),d.emit=function(a){var b=Array.prototype.slice.call(arguments,1);return this.emitEvent(a,b)},d.setOnceReturnValue=function(a){return this._onceReturnValue=a,this},d._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},d._getEvents=function(){return this._events||(this._events={})},a.noConflict=function(){return e.EventEmitter=f,a},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return a}):"object"==typeof module&&module.exports?module.exports=a:e.EventEmitter=a}.call(this),function(a){function b(a){if(a){if("string"==typeof d[a])return a;a=a.charAt(0).toUpperCase()+a.slice(1);for(var b,e=0,f=c.length;f>e;e++)if(b=c[e]+a,"string"==typeof d[b])return b}}var c="Webkit Moz ms Ms O".split(" "),d=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return b}):"object"==typeof exports?module.exports=b:a.getStyleProperty=b}(window),function(a,b){function c(a){var b=parseFloat(a),c=-1===a.indexOf("%")&&!isNaN(b);return c&&b}function d(){}function e(){for(var a={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},b=0,c=h.length;c>b;b++){var d=h[b];a[d]=0}return a}function f(b){function d(){if(!m){m=!0;var d=a.getComputedStyle;if(j=function(){var a=d?function(a){return d(a,null)}:function(a){return a.currentStyle};return function(b){var c=a(b);return c||g("Style returned "+c+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),c}}(),k=b("boxSizing")){var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style[k]="border-box";var f=document.body||document.documentElement;f.appendChild(e);var h=j(e);l=200===c(h.width),f.removeChild(e)}}}function f(a){if(d(),"string"==typeof a&&(a=document.querySelector(a)),a&&"object"==typeof a&&a.nodeType){var b=j(a);if("none"===b.display)return e();var f={};f.width=a.offsetWidth,f.height=a.offsetHeight;for(var g=f.isBorderBox=!(!k||!b[k]||"border-box"!==b[k]),m=0,n=h.length;n>m;m++){var o=h[m],p=b[o];p=i(a,p);var q=parseFloat(p);f[o]=isNaN(q)?0:q}var r=f.paddingLeft+f.paddingRight,s=f.paddingTop+f.paddingBottom,t=f.marginLeft+f.marginRight,u=f.marginTop+f.marginBottom,v=f.borderLeftWidth+f.borderRightWidth,w=f.borderTopWidth+f.borderBottomWidth,x=g&&l,y=c(b.width);y!==!1&&(f.width=y+(x?0:r+v));var z=c(b.height);return z!==!1&&(f.height=z+(x?0:s+w)),f.innerWidth=f.width-(r+v),f.innerHeight=f.height-(s+w),f.outerWidth=f.width+t,f.outerHeight=f.height+u,f}}function i(b,c){if(a.getComputedStyle||-1===c.indexOf("%"))return c;var d=b.style,e=d.right,f=b.runtimeStyle,g=f&&f.right;return g&&(f.right=b.currentStyle.right),d.right=c,c=d.pixelLeft,d.right=e,g&&(f.right=g),c}var j,k,l,m=!1;return f}var g="undefined"==typeof console?d:function(a){console.error(a)},h=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],f):"object"==typeof exports?module.exports=f(require("desandro-get-style-property")):a.getSize=f(a.getStyleProperty)}(window),function(a){function b(a){"function"==typeof a&&(b.isReady?a():g.push(a))}function c(a){var c="readystatechange"===a.type&&"complete"!==f.readyState;b.isReady||c||d()}function d(){b.isReady=!0;for(var a=0,c=g.length;c>a;a++){var d=g[a];d()}}function e(e){return"complete"===f.readyState?d():(e.bind(f,"DOMContentLoaded",c),e.bind(f,"readystatechange",c),e.bind(a,"load",c)),b}var f=a.document,g=[];b.isReady=!1,"function"==typeof define&&define.amd?define("doc-ready/doc-ready",["eventie/eventie"],e):"object"==typeof exports?module.exports=e(require("eventie")):a.docReady=e(a.eventie)}(window),function(a){"use strict";function b(a,b){return a[g](b)}function c(a){if(!a.parentNode){var b=document.createDocumentFragment();b.appendChild(a)}}function d(a,b){c(a);for(var d=a.parentNode.querySelectorAll(b),e=0,f=d.length;f>e;e++)if(d[e]===a)return!0;return!1}function e(a,d){return c(a),b(a,d)}var f,g=function(){if(a.matches)return"matches";if(a.matchesSelector)return"matchesSelector";for(var b=["webkit","moz","ms","o"],c=0,d=b.length;d>c;c++){var e=b[c],f=e+"MatchesSelector";if(a[f])return f}}();if(g){var h=document.createElement("div"),i=b(h,"div");f=i?b:e}else f=d;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return f}):"object"==typeof exports?module.exports=f:window.matchesSelector=f}(Element.prototype),function(a,b){"use strict";"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["doc-ready/doc-ready","matches-selector/matches-selector"],function(c,d){return b(a,c,d)}):"object"==typeof exports?module.exports=b(a,require("doc-ready"),require("desandro-matches-selector")):a.fizzyUIUtils=b(a,a.docReady,a.matchesSelector)}(window,function(a,b,c){var d={};d.extend=function(a,b){for(var c in b)a[c]=b[c];return a},d.modulo=function(a,b){return(a%b+b)%b};var e=Object.prototype.toString;d.isArray=function(a){return"[object Array]"==e.call(a)},d.makeArray=function(a){var b=[];if(d.isArray(a))b=a;else if(a&&"number"==typeof a.length)for(var c=0,e=a.length;e>c;c++)b.push(a[c]);else b.push(a);return b},d.indexOf=Array.prototype.indexOf?function(a,b){return a.indexOf(b)}:function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},d.removeFrom=function(a,b){var c=d.indexOf(a,b);-1!=c&&a.splice(c,1)},d.isElement="function"==typeof HTMLElement||"object"==typeof HTMLElement?function(a){return a instanceof HTMLElement}:function(a){return a&&"object"==typeof a&&1==a.nodeType&&"string"==typeof a.nodeName},d.setText=function(){function a(a,c){b=b||(void 0!==document.documentElement.textContent?"textContent":"innerText"),a[b]=c}var b;return a}(),d.getParent=function(a,b){for(;a!=document.body;)if(a=a.parentNode,c(a,b))return a},d.getQueryElement=function(a){return"string"==typeof a?document.querySelector(a):a},d.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},d.filterFindElements=function(a,b){a=d.makeArray(a);for(var e=[],f=0,g=a.length;g>f;f++){var h=a[f];if(d.isElement(h))if(b){c(h,b)&&e.push(h);for(var i=h.querySelectorAll(b),j=0,k=i.length;k>j;j++)e.push(i[j])}else e.push(h)}return e},d.debounceMethod=function(a,b,c){var d=a.prototype[b],e=b+"Timeout";a.prototype[b]=function(){var a=this[e];a&&clearTimeout(a);var b=arguments,f=this;this[e]=setTimeout(function(){d.apply(f,b),delete f[e]},c||100)}},d.toDashed=function(a){return a.replace(/(.)([A-Z])/g,function(a,b,c){return b+"-"+c}).toLowerCase()};var f=a.console;return d.htmlInit=function(c,e){b(function(){for(var b=d.toDashed(e),g=document.querySelectorAll(".js-"+b),h="data-"+b+"-options",i=0,j=g.length;j>i;i++){var k,l=g[i],m=l.getAttribute(h);try{k=m&&JSON.parse(m)}catch(n){f&&f.error("Error parsing "+h+" on "+l.nodeName.toLowerCase()+(l.id?"#"+l.id:"")+": "+n);continue}var o=new c(l,k),p=a.jQuery;p&&p.data(l,e,o)}})},d}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property","fizzy-ui-utils/utils"],function(c,d,e,f){return b(a,c,d,e,f)}):"object"==typeof exports?module.exports=b(a,require("wolfy87-eventemitter"),require("get-size"),require("desandro-get-style-property"),require("fizzy-ui-utils")):(a.Outlayer={},a.Outlayer.Item=b(a,a.EventEmitter,a.getSize,a.getStyleProperty,a.fizzyUIUtils))}(window,function(a,b,c,d,e){"use strict";function f(a){for(var b in a)return!1;return b=null,!0}function g(a,b){a&&(this.element=a,this.layout=b,this.position={x:0,y:0},this._create())}function h(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}var i=a.getComputedStyle,j=i?function(a){return i(a,null)}:function(a){return a.currentStyle},k=d("transition"),l=d("transform"),m=k&&l,n=!!d("perspective"),o={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[k],p=["transform","transition","transitionDuration","transitionProperty"],q=function(){for(var a={},b=0,c=p.length;c>b;b++){var e=p[b],f=d(e);f&&f!==e&&(a[e]=f)}return a}();e.extend(g.prototype,b.prototype),g.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},g.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},g.prototype.getSize=function(){this.size=c(this.element)},g.prototype.css=function(a){var b=this.element.style;for(var c in a){var d=q[c]||c;b[d]=a[c]}},g.prototype.getPosition=function(){var a=j(this.element),b=this.layout.options,c=b.isOriginLeft,d=b.isOriginTop,e=a[c?"right":"left"],f=a[d?"top":"bottom"],g=this.layout.size,h=-1!=e.indexOf("%")?parseFloat(e)/100*g.width:parseInt(e,10),i=-1!=f.indexOf("%")?parseFloat(f)/100*g.height:parseInt(f,10);h=isNaN(h)?0:h,i=isNaN(i)?0:i,h-=c?g.paddingLeft:g.paddingRight,i-=d?g.paddingTop:g.paddingBottom,this.position.x=h,this.position.y=i},g.prototype.layoutPosition=function(){var a=this.layout.size,b=this.layout.options,c={},d=b.isOriginLeft?"paddingLeft":"paddingRight",e=b.isOriginLeft?"right":"left",f=b.isOriginLeft?"left":"right",g=this.position.x+a[d];c[e]=this.getXValue(g),c[f]="";var h=b.isOriginTop?"paddingTop":"paddingBottom",i=b.isOriginTop?"top":"bottom",j=b.isOriginTop?"bottom":"top",k=this.position.y+a[h];c[i]=this.getYValue(k),c[j]="",this.css(c),this.emitEvent("layout",[this])},g.prototype.getXValue=function(a){var b=this.layout.options;return b.percentPosition&&!b.isHorizontal?a/this.layout.size.width*100+"%":a+"px"},g.prototype.getYValue=function(a){var b=this.layout.options;return b.percentPosition&&b.isHorizontal?a/this.layout.size.height*100+"%":a+"px"},g.prototype._transitionTo=function(a,b){this.getPosition();var c=this.position.x,d=this.position.y,e=parseInt(a,10),f=parseInt(b,10),g=e===this.position.x&&f===this.position.y;if(this.setPosition(a,b),g&&!this.isTransitioning)return void this.layoutPosition();var h=a-c,i=b-d,j={};j.transform=this.getTranslate(h,i),this.transition({to:j,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},g.prototype.getTranslate=function(a,b){var c=this.layout.options;return a=c.isOriginLeft?a:-a,b=c.isOriginTop?b:-b,n?"translate3d("+a+"px, "+b+"px, 0)":"translate("+a+"px, "+b+"px)"},g.prototype.goTo=function(a,b){this.setPosition(a,b),this.layoutPosition()},g.prototype.moveTo=m?g.prototype._transitionTo:g.prototype.goTo,g.prototype.setPosition=function(a,b){this.position.x=parseInt(a,10),this.position.y=parseInt(b,10)},g.prototype._nonTransition=function(a){this.css(a.to),a.isCleaning&&this._removeStyles(a.to);for(var b in a.onTransitionEnd)a.onTransitionEnd[b].call(this)},g.prototype._transition=function(a){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(a);var b=this._transn;for(var c in a.onTransitionEnd)b.onEnd[c]=a.onTransitionEnd[c];for(c in a.to)b.ingProperties[c]=!0,a.isCleaning&&(b.clean[c]=!0);if(a.from){this.css(a.from);var d=this.element.offsetHeight;d=null}this.enableTransition(a.to),this.css(a.to),this.isTransitioning=!0};var r="opacity,"+h(q.transform||"transform");g.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:r,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(o,this,!1))},g.prototype.transition=g.prototype[k?"_transition":"_nonTransition"],g.prototype.onwebkitTransitionEnd=function(a){this.ontransitionend(a)},g.prototype.onotransitionend=function(a){this.ontransitionend(a)};var s={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};g.prototype.ontransitionend=function(a){if(a.target===this.element){var b=this._transn,c=s[a.propertyName]||a.propertyName;if(delete b.ingProperties[c],f(b.ingProperties)&&this.disableTransition(),c in b.clean&&(this.element.style[a.propertyName]="",delete b.clean[c]),c in b.onEnd){var d=b.onEnd[c];d.call(this),delete b.onEnd[c]}this.emitEvent("transitionEnd",[this])}},g.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(o,this,!1),this.isTransitioning=!1},g.prototype._removeStyles=function(a){var b={};for(var c in a)b[c]="";this.css(b)};var t={transitionProperty:"",transitionDuration:""};return g.prototype.removeTransitionStyles=function(){this.css(t)},g.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},g.prototype.remove=function(){if(!k||!parseFloat(this.layout.options.transitionDuration))return void this.removeElem();var a=this;this.once("transitionEnd",function(){a.removeElem()}),this.hide()},g.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var a=this.layout.options,b={},c=this.getHideRevealTransitionEndProperty("visibleStyle");b[c]=this.onRevealTransitionEnd,this.transition({from:a.hiddenStyle,to:a.visibleStyle,isCleaning:!0,onTransitionEnd:b})},g.prototype.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},g.prototype.getHideRevealTransitionEndProperty=function(a){var b=this.layout.options[a];if(b.opacity)return"opacity";for(var c in b)return c},g.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var a=this.layout.options,b={},c=this.getHideRevealTransitionEndProperty("hiddenStyle");b[c]=this.onHideTransitionEnd,this.transition({from:a.visibleStyle,to:a.hiddenStyle,isCleaning:!0,onTransitionEnd:b})},g.prototype.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},g.prototype.destroy=function(){this.css({position:"",right:"",left:"",top:"",bottom:"",transition:"",transform:""})},g}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","eventEmitter/EventEmitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(c,d,e,f,g){return b(a,c,d,e,f,g)}):"object"==typeof exports?module.exports=b(a,require("eventie"),require("wolfy87-eventemitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):a.Outlayer=b(a,a.eventie,a.EventEmitter,a.getSize,a.fizzyUIUtils,a.Outlayer.Item)}(window,function(a,b,c,d,e,f){"use strict";function g(a,b){var c=e.getQueryElement(a);if(!c)return void(h&&h.error("Bad element for "+this.constructor.namespace+": "+(c||a)));this.element=c,i&&(this.$element=i(this.element)),this.options=e.extend({},this.constructor.defaults),this.option(b);var d=++k;this.element.outlayerGUID=d,l[d]=this,this._create(),this.options.isInitLayout&&this.layout()}var h=a.console,i=a.jQuery,j=function(){},k=0,l={};return g.namespace="outlayer",g.Item=f,g.defaults={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,isResizingContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},e.extend(g.prototype,c.prototype),g.prototype.option=function(a){e.extend(this.options,a)},g.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),e.extend(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},g.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},g.prototype._itemize=function(a){for(var b=this._filterFindItemElements(a),c=this.constructor.Item,d=[],e=0,f=b.length;f>e;e++){var g=b[e],h=new c(g,this);d.push(h)}return d},g.prototype._filterFindItemElements=function(a){return e.filterFindElements(a,this.options.itemSelector)},g.prototype.getItemElements=function(){for(var a=[],b=0,c=this.items.length;c>b;b++)a.push(this.items[b].element);return a},g.prototype.layout=function(){this._resetLayout(),this._manageStamps();var a=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,a),this._isLayoutInited=!0},g.prototype._init=g.prototype.layout,g.prototype._resetLayout=function(){this.getSize()},g.prototype.getSize=function(){this.size=d(this.element)},g.prototype._getMeasurement=function(a,b){var c,f=this.options[a];f?("string"==typeof f?c=this.element.querySelector(f):e.isElement(f)&&(c=f),this[a]=c?d(c)[b]:f):this[a]=0},g.prototype.layoutItems=function(a,b){a=this._getItemsForLayout(a),this._layoutItems(a,b),this._postLayout()},g.prototype._getItemsForLayout=function(a){for(var b=[],c=0,d=a.length;d>c;c++){var e=a[c];e.isIgnored||b.push(e)}return b},g.prototype._layoutItems=function(a,b){if(this._emitCompleteOnItems("layout",a),a&&a.length){for(var c=[],d=0,e=a.length;e>d;d++){var f=a[d],g=this._getItemLayoutPosition(f);g.item=f,g.isInstant=b||f.isLayoutInstant,c.push(g)}this._processLayoutQueue(c)}},g.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},g.prototype._processLayoutQueue=function(a){for(var b=0,c=a.length;c>b;b++){var d=a[b];this._positionItem(d.item,d.x,d.y,d.isInstant)}},g.prototype._positionItem=function(a,b,c,d){d?a.goTo(b,c):a.moveTo(b,c)},g.prototype._postLayout=function(){this.resizeContainer()},g.prototype.resizeContainer=function(){if(this.options.isResizingContainer){var a=this._getContainerSize();a&&(this._setContainerMeasure(a.width,!0),this._setContainerMeasure(a.height,!1))}},g.prototype._getContainerSize=j,g.prototype._setContainerMeasure=function(a,b){if(void 0!==a){var c=this.size;c.isBorderBox&&(a+=b?c.paddingLeft+c.paddingRight+c.borderLeftWidth+c.borderRightWidth:c.paddingBottom+c.paddingTop+c.borderTopWidth+c.borderBottomWidth),a=Math.max(a,0),this.element.style[b?"width":"height"]=a+"px"}},g.prototype._emitCompleteOnItems=function(a,b){function c(){e.dispatchEvent(a+"Complete",null,[b])}function d(){g++,g===f&&c()}var e=this,f=b.length;if(!b||!f)return void c();for(var g=0,h=0,i=b.length;i>h;h++){var j=b[h];j.once(a,d)}},g.prototype.dispatchEvent=function(a,b,c){var d=b?[b].concat(c):c;if(this.emitEvent(a,d),i)if(this.$element=this.$element||i(this.element),b){var e=i.Event(b);e.type=a,this.$element.trigger(e,c)}else this.$element.trigger(a,c)},g.prototype.ignore=function(a){var b=this.getItem(a);b&&(b.isIgnored=!0)},g.prototype.unignore=function(a){var b=this.getItem(a);b&&delete b.isIgnored},g.prototype.stamp=function(a){if(a=this._find(a)){this.stamps=this.stamps.concat(a);for(var b=0,c=a.length;c>b;b++){var d=a[b];this.ignore(d)}}},g.prototype.unstamp=function(a){if(a=this._find(a))for(var b=0,c=a.length;c>b;b++){var d=a[b];e.removeFrom(this.stamps,d),this.unignore(d)}},g.prototype._find=function(a){return a?("string"==typeof a&&(a=this.element.querySelectorAll(a)),a=e.makeArray(a)):void 0},g.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var a=0,b=this.stamps.length;b>a;a++){var c=this.stamps[a];this._manageStamp(c)}}},g.prototype._getBoundingRect=function(){var a=this.element.getBoundingClientRect(),b=this.size;this._boundingRect={right:a.right+b.paddingLeft+b.borderLeftWidth,top:a.top+b.paddingTop+b.borderTopWidth,left:a.left-(b.paddingRight+b.borderRightWidth),bottom:a.bottom-(b.paddingBottom+b.borderBottomWidth)}},g.prototype._manageStamp=j,g.prototype._getElementOffset=function(a){var b=a.getBoundingClientRect(),c=this._boundingRect,e=d(a),f={right:b.right-c.right-e.marginLeft,top:b.top-c.top-e.marginTop,left:c.left-b.left-e.marginRight,bottom:c.bottom-b.bottom-e.marginBottom};return f},g.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},g.prototype.bindResize=function(){this.isResizeBound||(b.bind(a,"resize",this),this.isResizeBound=!0)},g.prototype.unbindResize=function(){this.isResizeBound&&b.unbind(a,"resize",this),this.isResizeBound=!1},g.prototype.onresize=function(){function a(){b.resize(),delete b.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var b=this;this.resizeTimeout=setTimeout(a,100)},g.prototype.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},g.prototype.needsResizeLayout=function(){var a=d(this.element),b=this.size&&a;return b&&a.innerWidth!==this.size.innerWidth},g.prototype.addItems=function(a){var b=this._itemize(a);return b.length&&(this.items=this.items.concat(b)),b},g.prototype.appended=function(a){var b=this.addItems(a);b.length&&(this.layoutItems(b,!0),this.reveal(b))},g.prototype.prepended=function(a){var b=this._itemize(a);if(b.length){var c=this.items.slice(0);this.items=b.concat(c),this._resetLayout(),this._manageStamps(),this.layoutItems(b,!0),this.reveal(b),this.layoutItems(c)}},g.prototype.reveal=function(a){this._emitCompleteOnItems("reveal",a);for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.reveal()}},g.prototype.hide=function(a){this._emitCompleteOnItems("hide",a);for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.hide()}},g.prototype.revealItemElements=function(a){var b=this.getItems(a);this.reveal(b)},g.prototype.hideItemElements=function(a){var b=this.getItems(a);this.hide(b)},g.prototype.getItem=function(a){for(var b=0,c=this.items.length;c>b;b++){var d=this.items[b];if(d.element===a)return d}},g.prototype.getItems=function(a){a=e.makeArray(a);for(var b=[],c=0,d=a.length;d>c;c++){var f=a[c],g=this.getItem(f);g&&b.push(g)}return b},g.prototype.remove=function(a){var b=this.getItems(a);if(this._emitCompleteOnItems("remove",b),b&&b.length)for(var c=0,d=b.length;d>c;c++){var f=b[c];f.remove(),e.removeFrom(this.items,f)}},g.prototype.destroy=function(){var a=this.element.style;a.height="",a.position="",a.width="";for(var b=0,c=this.items.length;c>b;b++){var d=this.items[b];d.destroy()}this.unbindResize();var e=this.element.outlayerGUID;delete l[e],delete this.element.outlayerGUID,i&&i.removeData(this.element,this.constructor.namespace)},g.data=function(a){a=e.getQueryElement(a);var b=a&&a.outlayerGUID;return b&&l[b]},g.create=function(a,b){function c(){g.apply(this,arguments)}return Object.create?c.prototype=Object.create(g.prototype):e.extend(c.prototype,g.prototype),c.prototype.constructor=c,c.defaults=e.extend({},g.defaults),e.extend(c.defaults,b),c.prototype.settings={},c.namespace=a,c.data=g.data,c.Item=function(){f.apply(this,arguments)},c.Item.prototype=new f,e.htmlInit(c,a),i&&i.bridget&&i.bridget(a,c),c},g.Item=f,g}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/item",["outlayer/outlayer"],b):"object"==typeof exports?module.exports=b(require("outlayer")):(a.Isotope=a.Isotope||{},a.Isotope.Item=b(a.Outlayer))}(window,function(a){"use strict";function b(){a.Item.apply(this,arguments)}b.prototype=new a.Item,b.prototype._create=function(){this.id=this.layout.itemGUID++,a.Item.prototype._create.call(this),this.sortData={}},b.prototype.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var a=this.layout.options.getSortData,b=this.layout._sorters;for(var c in a){var d=b[c];this.sortData[c]=d(this.element,this)}}};var c=b.prototype.destroy;return b.prototype.destroy=function(){c.apply(this,arguments),this.css({display:""})},b}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/layout-mode",["get-size/get-size","outlayer/outlayer"],b):"object"==typeof exports?module.exports=b(require("get-size"),require("outlayer")):(a.Isotope=a.Isotope||{},a.Isotope.LayoutMode=b(a.getSize,a.Outlayer))}(window,function(a,b){"use strict";function c(a){this.isotope=a,a&&(this.options=a.options[this.namespace],this.element=a.element,this.items=a.filteredItems,this.size=a.size)}return function(){function a(a){return function(){return b.prototype[a].apply(this.isotope,arguments)}}for(var d=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout"],e=0,f=d.length;f>e;e++){var g=d[e];c.prototype[g]=a(g)}}(),c.prototype.needsVerticalResizeLayout=function(){var b=a(this.isotope.element),c=this.isotope.size&&b;return c&&b.innerHeight!=this.isotope.size.innerHeight},c.prototype._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},c.prototype.getColumnWidth=function(){this.getSegmentSize("column","Width")},c.prototype.getRowHeight=function(){this.getSegmentSize("row","Height")},c.prototype.getSegmentSize=function(a,b){var c=a+b,d="outer"+b;if(this._getMeasurement(c,d),!this[c]){var e=this.getFirstItemSize();this[c]=e&&e[d]||this.isotope.size["inner"+b]}},c.prototype.getFirstItemSize=function(){var b=this.isotope.filteredItems[0];return b&&b.element&&a(b.element)},c.prototype.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},c.prototype.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},c.modes={},c.create=function(a,b){function d(){c.apply(this,arguments)}return d.prototype=new c,b&&(d.options=b),d.prototype.namespace=a,c.modes[a]=d,d},c}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("masonry/masonry",["outlayer/outlayer","get-size/get-size","fizzy-ui-utils/utils"],b):"object"==typeof exports?module.exports=b(require("outlayer"),require("get-size"),require("fizzy-ui-utils")):a.Masonry=b(a.Outlayer,a.getSize,a.fizzyUIUtils)}(window,function(a,b,c){var d=a.create("masonry");return d.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var a=this.cols;for(this.colYs=[];a--;)this.colYs.push(0);this.maxY=0},d.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var a=this.items[0],c=a&&a.element;this.columnWidth=c&&b(c).outerWidth||this.containerWidth}var d=this.columnWidth+=this.gutter,e=this.containerWidth+this.gutter,f=e/d,g=d-e%d,h=g&&1>g?"round":"floor";f=Math[h](f),this.cols=Math.max(f,1)},d.prototype.getContainerWidth=function(){var a=this.options.isFitWidth?this.element.parentNode:this.element,c=b(a);this.containerWidth=c&&c.innerWidth},d.prototype._getItemLayoutPosition=function(a){a.getSize();var b=a.size.outerWidth%this.columnWidth,d=b&&1>b?"round":"ceil",e=Math[d](a.size.outerWidth/this.columnWidth);e=Math.min(e,this.cols);for(var f=this._getColGroup(e),g=Math.min.apply(Math,f),h=c.indexOf(f,g),i={x:this.columnWidth*h,y:g},j=g+a.size.outerHeight,k=this.cols+1-f.length,l=0;k>l;l++)this.colYs[h+l]=j;return i},d.prototype._getColGroup=function(a){if(2>a)return this.colYs;for(var b=[],c=this.cols+1-a,d=0;c>d;d++){var e=this.colYs.slice(d,d+a);b[d]=Math.max.apply(Math,e)}return b},d.prototype._manageStamp=function(a){var c=b(a),d=this._getElementOffset(a),e=this.options.isOriginLeft?d.right:d.left,f=e+c.outerWidth,g=Math.floor(e/this.columnWidth);g=Math.max(0,g);var h=Math.floor(f/this.columnWidth);h-=f%this.columnWidth?0:1,h=Math.min(this.cols-1,h);for(var i=(this.options.isOriginTop?d.top:d.bottom)+c.outerHeight,j=g;h>=j;j++)this.colYs[j]=Math.max(i,this.colYs[j])},d.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var a={height:this.maxY};return this.options.isFitWidth&&(a.width=this._getContainerFitWidth()),a},d.prototype._getContainerFitWidth=function(){for(var a=0,b=this.cols;--b&&0===this.colYs[b];)a++;return(this.cols-a)*this.columnWidth-this.gutter},d.prototype.needsResizeLayout=function(){var a=this.containerWidth;return this.getContainerWidth(),a!==this.containerWidth},d}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/layout-modes/masonry",["../layout-mode","masonry/masonry"],b):"object"==typeof exports?module.exports=b(require("../layout-mode"),require("masonry-layout")):b(a.Isotope.LayoutMode,a.Masonry)}(window,function(a,b){"use strict";function c(a,b){for(var c in b)a[c]=b[c];return a}var d=a.create("masonry"),e=d.prototype._getElementOffset,f=d.prototype.layout,g=d.prototype._getMeasurement;
c(d.prototype,b.prototype),d.prototype._getElementOffset=e,d.prototype.layout=f,d.prototype._getMeasurement=g;var h=d.prototype.measureColumns;d.prototype.measureColumns=function(){this.items=this.isotope.filteredItems,h.call(this)};var i=d.prototype._manageStamp;return d.prototype._manageStamp=function(){this.options.isOriginLeft=this.isotope.options.isOriginLeft,this.options.isOriginTop=this.isotope.options.isOriginTop,i.apply(this,arguments)},d}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/layout-modes/fit-rows",["../layout-mode"],b):"object"==typeof exports?module.exports=b(require("../layout-mode")):b(a.Isotope.LayoutMode)}(window,function(a){"use strict";var b=a.create("fitRows");return b.prototype._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},b.prototype._getItemLayoutPosition=function(a){a.getSize();var b=a.size.outerWidth+this.gutter,c=this.isotope.size.innerWidth+this.gutter;0!==this.x&&b+this.x>c&&(this.x=0,this.y=this.maxY);var d={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+a.size.outerHeight),this.x+=b,d},b.prototype._getContainerSize=function(){return{height:this.maxY}},b}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/layout-modes/vertical",["../layout-mode"],b):"object"==typeof exports?module.exports=b(require("../layout-mode")):b(a.Isotope.LayoutMode)}(window,function(a){"use strict";var b=a.create("vertical",{horizontalAlignment:0});return b.prototype._resetLayout=function(){this.y=0},b.prototype._getItemLayoutPosition=function(a){a.getSize();var b=(this.isotope.size.innerWidth-a.size.outerWidth)*this.options.horizontalAlignment,c=this.y;return this.y+=a.size.outerHeight,{x:b,y:c}},b.prototype._getContainerSize=function(){return{height:this.y}},b}),function(a,b){"use strict";"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","matches-selector/matches-selector","fizzy-ui-utils/utils","isotope/js/item","isotope/js/layout-mode","isotope/js/layout-modes/masonry","isotope/js/layout-modes/fit-rows","isotope/js/layout-modes/vertical"],function(c,d,e,f,g,h){return b(a,c,d,e,f,g,h)}):"object"==typeof exports?module.exports=b(a,require("outlayer"),require("get-size"),require("desandro-matches-selector"),require("fizzy-ui-utils"),require("./item"),require("./layout-mode"),require("./layout-modes/masonry"),require("./layout-modes/fit-rows"),require("./layout-modes/vertical")):a.Isotope=b(a,a.Outlayer,a.getSize,a.matchesSelector,a.fizzyUIUtils,a.Isotope.Item,a.Isotope.LayoutMode)}(window,function(a,b,c,d,e,f,g){function h(a,b){return function(c,d){for(var e=0,f=a.length;f>e;e++){var g=a[e],h=c.sortData[g],i=d.sortData[g];if(h>i||i>h){var j=void 0!==b[g]?b[g]:b,k=j?1:-1;return(h>i?1:-1)*k}}return 0}}var i=a.jQuery,j=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^\s+|\s+$/g,"")},k=document.documentElement,l=k.textContent?function(a){return a.textContent}:function(a){return a.innerText},m=b.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});m.Item=f,m.LayoutMode=g,m.prototype._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),b.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var a in g.modes)this._initLayoutMode(a)},m.prototype.reloadItems=function(){this.itemGUID=0,b.prototype.reloadItems.call(this)},m.prototype._itemize=function(){for(var a=b.prototype._itemize.apply(this,arguments),c=0,d=a.length;d>c;c++){var e=a[c];e.id=this.itemGUID++}return this._updateItemsSortData(a),a},m.prototype._initLayoutMode=function(a){var b=g.modes[a],c=this.options[a]||{};this.options[a]=b.options?e.extend(b.options,c):c,this.modes[a]=new b(this)},m.prototype.layout=function(){return!this._isLayoutInited&&this.options.isInitLayout?void this.arrange():void this._layout()},m.prototype._layout=function(){var a=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,a),this._isLayoutInited=!0},m.prototype.arrange=function(a){function b(){d.reveal(c.needReveal),d.hide(c.needHide)}this.option(a),this._getIsInstant();var c=this._filter(this.items);this.filteredItems=c.matches;var d=this;this._bindArrangeComplete(),this._isInstant?this._noTransition(b):b(),this._sort(),this._layout()},m.prototype._init=m.prototype.arrange,m.prototype._getIsInstant=function(){var a=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;return this._isInstant=a,a},m.prototype._bindArrangeComplete=function(){function a(){b&&c&&d&&e.dispatchEvent("arrangeComplete",null,[e.filteredItems])}var b,c,d,e=this;this.once("layoutComplete",function(){b=!0,a()}),this.once("hideComplete",function(){c=!0,a()}),this.once("revealComplete",function(){d=!0,a()})},m.prototype._filter=function(a){var b=this.options.filter;b=b||"*";for(var c=[],d=[],e=[],f=this._getFilterTest(b),g=0,h=a.length;h>g;g++){var i=a[g];if(!i.isIgnored){var j=f(i);j&&c.push(i),j&&i.isHidden?d.push(i):j||i.isHidden||e.push(i)}}return{matches:c,needReveal:d,needHide:e}},m.prototype._getFilterTest=function(a){return i&&this.options.isJQueryFiltering?function(b){return i(b.element).is(a)}:"function"==typeof a?function(b){return a(b.element)}:function(b){return d(b.element,a)}},m.prototype.updateSortData=function(a){var b;a?(a=e.makeArray(a),b=this.getItems(a)):b=this.items,this._getSorters(),this._updateItemsSortData(b)},m.prototype._getSorters=function(){var a=this.options.getSortData;for(var b in a){var c=a[b];this._sorters[b]=n(c)}},m.prototype._updateItemsSortData=function(a){for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.updateSortData()}};var n=function(){function a(a){if("string"!=typeof a)return a;var c=j(a).split(" "),d=c[0],e=d.match(/^\[(.+)\]$/),f=e&&e[1],g=b(f,d),h=m.sortDataParsers[c[1]];return a=h?function(a){return a&&h(g(a))}:function(a){return a&&g(a)}}function b(a,b){var c;return c=a?function(b){return b.getAttribute(a)}:function(a){var c=a.querySelector(b);return c&&l(c)}}return a}();m.sortDataParsers={parseInt:function(a){return parseInt(a,10)},parseFloat:function(a){return parseFloat(a)}},m.prototype._sort=function(){var a=this.options.sortBy;if(a){var b=[].concat.apply(a,this.sortHistory),c=h(b,this.options.sortAscending);this.filteredItems.sort(c),a!=this.sortHistory[0]&&this.sortHistory.unshift(a)}},m.prototype._mode=function(){var a=this.options.layoutMode,b=this.modes[a];if(!b)throw new Error("No layout mode: "+a);return b.options=this.options[a],b},m.prototype._resetLayout=function(){b.prototype._resetLayout.call(this),this._mode()._resetLayout()},m.prototype._getItemLayoutPosition=function(a){return this._mode()._getItemLayoutPosition(a)},m.prototype._manageStamp=function(a){this._mode()._manageStamp(a)},m.prototype._getContainerSize=function(){return this._mode()._getContainerSize()},m.prototype.needsResizeLayout=function(){return this._mode().needsResizeLayout()},m.prototype.appended=function(a){var b=this.addItems(a);if(b.length){var c=this._filterRevealAdded(b);this.filteredItems=this.filteredItems.concat(c)}},m.prototype.prepended=function(a){var b=this._itemize(a);if(b.length){this._resetLayout(),this._manageStamps();var c=this._filterRevealAdded(b);this.layoutItems(this.filteredItems),this.filteredItems=c.concat(this.filteredItems),this.items=b.concat(this.items)}},m.prototype._filterRevealAdded=function(a){var b=this._filter(a);return this.hide(b.needHide),this.reveal(b.matches),this.layoutItems(b.matches,!0),b.matches},m.prototype.insert=function(a){var b=this.addItems(a);if(b.length){var c,d,e=b.length;for(c=0;e>c;c++)d=b[c],this.element.appendChild(d.element);var f=this._filter(b).matches;for(c=0;e>c;c++)b[c].isLayoutInstant=!0;for(this.arrange(),c=0;e>c;c++)delete b[c].isLayoutInstant;this.reveal(f)}};var o=m.prototype.remove;return m.prototype.remove=function(a){a=e.makeArray(a);var b=this.getItems(a);o.call(this,a);var c=b&&b.length;if(c)for(var d=0;c>d;d++){var f=b[d];e.removeFrom(this.filteredItems,f)}},m.prototype.shuffle=function(){for(var a=0,b=this.items.length;b>a;a++){var c=this.items[a];c.sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},m.prototype._noTransition=function(a){var b=this.options.transitionDuration;this.options.transitionDuration=0;var c=a.call(this);return this.options.transitionDuration=b,c},m.prototype.getFilteredItemElements=function(){for(var a=[],b=0,c=this.filteredItems.length;c>b;b++)a.push(this.filteredItems[b].element);return a},m});

(function(){function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype,r=this,o=r.EventEmitter;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],n.once===!0&&this.removeListener(e,n.listener),o=n.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return r.EventEmitter=o,e},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,i=function(){};n.addEventListener?i=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(i=function(e,n,i){e[n+i]=i.handleEvent?function(){var n=t(e);i.handleEvent.call(i,n)}:function(){var n=t(e);i.call(e,n)},e.attachEvent("on"+n,e[n+i])});var r=function(){};n.removeEventListener?r=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(r=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var o={bind:i,unbind:r};"function"==typeof define&&define.amd?define("eventie/eventie",o):e.eventie=o}(this),function(e,t){"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(n,i){return t(e,n,i)}):"object"==typeof exports?module.exports=t(e,require("wolfy87-eventemitter"),require("eventie")):e.imagesLoaded=t(e,e.EventEmitter,e.eventie)}(window,function(e,t,n){function i(e,t){for(var n in t)e[n]=t[n];return e}function r(e){return"[object Array]"===d.call(e)}function o(e){var t=[];if(r(e))t=e;else if("number"==typeof e.length)for(var n=0,i=e.length;i>n;n++)t.push(e[n]);else t.push(e);return t}function s(e,t,n){if(!(this instanceof s))return new s(e,t);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=o(e),this.options=i({},this.options),"function"==typeof t?n=t:i(this.options,t),n&&this.on("always",n),this.getImages(),a&&(this.jqDeferred=new a.Deferred);var r=this;setTimeout(function(){r.check()})}function f(e){this.img=e}function c(e){this.src=e,v[e]=this}var a=e.jQuery,u=e.console,h=u!==void 0,d=Object.prototype.toString;s.prototype=new t,s.prototype.options={},s.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);var i=n.nodeType;if(i&&(1===i||9===i||11===i))for(var r=n.querySelectorAll("img"),o=0,s=r.length;s>o;o++){var f=r[o];this.addImage(f)}}},s.prototype.addImage=function(e){var t=new f(e);this.images.push(t)},s.prototype.check=function(){function e(e,r){return t.options.debug&&h&&u.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},s.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify&&t.jqDeferred.notify(t,e)})},s.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},a&&(a.fn.imagesLoaded=function(e,t){var n=new s(this,e,t);return n.jqDeferred.promise(a(this))}),f.prototype=new t,f.prototype.check=function(){var e=v[this.img.src]||new c(this.img.src);if(e.isConfirmed)return this.confirm(e.isLoaded,"cached was confirmed"),void 0;if(this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this;e.on("confirm",function(e,n){return t.confirm(e.isLoaded,n),!0}),e.check()},f.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("confirm",this,t)};var v={};return c.prototype=new t,c.prototype.check=function(){if(!this.isChecked){var e=new Image;n.bind(e,"load",this),n.bind(e,"error",this),e.src=this.src,this.isChecked=!0}},c.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},c.prototype.onload=function(e){this.confirm(!0,"onload"),this.unbindProxyEvents(e)},c.prototype.onerror=function(e){this.confirm(!1,"onerror"),this.unbindProxyEvents(e)},c.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},c.prototype.unbindProxyEvents=function(e){n.unbind(e.target,"load",this),n.unbind(e.target,"error",this)},s});
/*!
 * Packery layout mode PACKAGED v1.1.3
 * sub-classes Packery
 * http://packery.metafizzy.co
 */

!function(a){function b(a){return new RegExp("(^|\\s+)"+a+"(\\s+|$)")}function c(a,b){var c=d(a,b)?f:e;c(a,b)}var d,e,f;"classList"in document.documentElement?(d=function(a,b){return a.classList.contains(b)},e=function(a,b){a.classList.add(b)},f=function(a,b){a.classList.remove(b)}):(d=function(a,c){return b(c).test(a.className)},e=function(a,b){d(a,b)||(a.className=a.className+" "+b)},f=function(a,c){a.className=a.className.replace(b(c)," ")});var g={hasClass:d,addClass:e,removeClass:f,toggleClass:c,has:d,add:e,remove:f,toggle:c};"function"==typeof define&&define.amd?define("classie/classie",g):"object"==typeof exports?module.exports=g:a.classie=g}(window),function(a,b){"function"==typeof define&&define.amd?define("packery/js/rect",b):"object"==typeof exports?module.exports=b():(a.Packery=a.Packery||{},a.Packery.Rect=b())}(window,function(){function a(b){for(var c in a.defaults)this[c]=a.defaults[c];for(c in b)this[c]=b[c]}var b=window.Packery=function(){};return b.Rect=a,a.defaults={x:0,y:0,width:0,height:0},a.prototype.contains=function(a){var b=a.width||0,c=a.height||0;return this.x<=a.x&&this.y<=a.y&&this.x+this.width>=a.x+b&&this.y+this.height>=a.y+c},a.prototype.overlaps=function(a){var b=this.x+this.width,c=this.y+this.height,d=a.x+a.width,e=a.y+a.height;return this.x<d&&b>a.x&&this.y<e&&c>a.y},a.prototype.getMaximalFreeRects=function(b){if(!this.overlaps(b))return!1;var c,d=[],e=this.x+this.width,f=this.y+this.height,g=b.x+b.width,h=b.y+b.height;return this.y<b.y&&(c=new a({x:this.x,y:this.y,width:this.width,height:b.y-this.y}),d.push(c)),e>g&&(c=new a({x:g,y:this.y,width:e-g,height:this.height}),d.push(c)),f>h&&(c=new a({x:this.x,y:h,width:this.width,height:f-h}),d.push(c)),this.x<b.x&&(c=new a({x:this.x,y:this.y,width:b.x-this.x,height:this.height}),d.push(c)),d},a.prototype.canFit=function(a){return this.width>=a.width&&this.height>=a.height},a}),function(a,b){if("function"==typeof define&&define.amd)define("packery/js/packer",["./rect"],b);else if("object"==typeof exports)module.exports=b(require("./rect"));else{var c=a.Packery=a.Packery||{};c.Packer=b(c.Rect)}}(window,function(a){function b(a,b,c){this.width=a||0,this.height=b||0,this.sortDirection=c||"downwardLeftToRight",this.reset()}b.prototype.reset=function(){this.spaces=[],this.newSpaces=[];var b=new a({x:0,y:0,width:this.width,height:this.height});this.spaces.push(b),this.sorter=c[this.sortDirection]||c.downwardLeftToRight},b.prototype.pack=function(a){for(var b=0,c=this.spaces.length;c>b;b++){var d=this.spaces[b];if(d.canFit(a)){this.placeInSpace(a,d);break}}},b.prototype.placeInSpace=function(a,b){a.x=b.x,a.y=b.y,this.placed(a)},b.prototype.placed=function(a){for(var b=[],c=0,d=this.spaces.length;d>c;c++){var e=this.spaces[c],f=e.getMaximalFreeRects(a);f?b.push.apply(b,f):b.push(e)}this.spaces=b,this.mergeSortSpaces()},b.prototype.mergeSortSpaces=function(){b.mergeRects(this.spaces),this.spaces.sort(this.sorter)},b.prototype.addSpace=function(a){this.spaces.push(a),this.mergeSortSpaces()},b.mergeRects=function(a){for(var b=0,c=a.length;c>b;b++){var d=a[b];if(d){var e=a.slice(0);e.splice(b,1);for(var f=0,g=0,h=e.length;h>g;g++){var i=e[g],j=b>g?0:1;d.contains(i)&&(a.splice(g+j-f,1),f++)}}}return a};var c={downwardLeftToRight:function(a,b){return a.y-b.y||a.x-b.x},rightwardTopToBottom:function(a,b){return a.x-b.x||a.y-b.y}};return b}),function(a,b){"function"==typeof define&&define.amd?define("packery/js/item",["get-style-property/get-style-property","outlayer/outlayer","./rect"],b):"object"==typeof exports?module.exports=b(require("desandro-get-style-property"),require("outlayer"),require("./rect")):a.Packery.Item=b(a.getStyleProperty,a.Outlayer,a.Packery.Rect)}(window,function(a,b,c){var d=a("transform"),e=function(){b.Item.apply(this,arguments)};e.prototype=new b.Item;var f=e.prototype._create;return e.prototype._create=function(){f.call(this),this.rect=new c,this.placeRect=new c},e.prototype.dragStart=function(){this.getPosition(),this.removeTransitionStyles(),this.isTransitioning&&d&&(this.element.style[d]="none"),this.getSize(),this.isPlacing=!0,this.needsPositioning=!1,this.positionPlaceRect(this.position.x,this.position.y),this.isTransitioning=!1,this.didDrag=!1},e.prototype.dragMove=function(a,b){this.didDrag=!0;var c=this.layout.size;a-=c.paddingLeft,b-=c.paddingTop,this.positionPlaceRect(a,b)},e.prototype.dragStop=function(){this.getPosition();var a=this.position.x!=this.placeRect.x,b=this.position.y!=this.placeRect.y;this.needsPositioning=a||b,this.didDrag=!1},e.prototype.positionPlaceRect=function(a,b,c){this.placeRect.x=this.getPlaceRectCoord(a,!0),this.placeRect.y=this.getPlaceRectCoord(b,!1,c)},e.prototype.getPlaceRectCoord=function(a,b,c){var d=b?"Width":"Height",e=this.size["outer"+d],f=this.layout[b?"columnWidth":"rowHeight"],g=this.layout.size["inner"+d];b||(g=Math.max(g,this.layout.maxY),this.layout.rowHeight||(g-=this.layout.gutter));var h;if(f){f+=this.layout.gutter,g+=b?this.layout.gutter:0,a=Math.round(a/f);var i;i=this.layout.options.isHorizontal?b?"ceil":"floor":b?"floor":"ceil";var j=Math[i](g/f);j-=Math.ceil(e/f),h=j}else h=g-e;return a=c?a:Math.min(a,h),a*=f||1,Math.max(0,a)},e.prototype.copyPlaceRectPosition=function(){this.rect.x=this.placeRect.x,this.rect.y=this.placeRect.y},e.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.layout.packer.addSpace(this.rect),this.emitEvent("remove",[this])},e}),function(a,b){"function"==typeof define&&define.amd?define("packery/js/packery",["classie/classie","get-size/get-size","outlayer/outlayer","./rect","./packer","./item"],b):"object"==typeof exports?module.exports=b(require("desandro-classie"),require("get-size"),require("outlayer"),require("./rect"),require("./packer"),require("./item")):a.Packery=b(a.classie,a.getSize,a.Outlayer,a.Packery.Rect,a.Packery.Packer,a.Packery.Item)}(window,function(a,b,c,d,e,f){function g(a,b){return a.position.y-b.position.y||a.position.x-b.position.x}function h(a,b){return a.position.x-b.position.x||a.position.y-b.position.y}d.prototype.canFit=function(a){return this.width>=a.width-1&&this.height>=a.height-1};var i=c.create("packery");return i.Item=f,i.prototype._create=function(){c.prototype._create.call(this),this.packer=new e,this.stamp(this.options.stamped);var a=this;this.handleDraggabilly={dragStart:function(){a.itemDragStart(this.element)},dragMove:function(){a.itemDragMove(this.element,this.position.x,this.position.y)},dragEnd:function(){a.itemDragEnd(this.element)}},this.handleUIDraggable={start:function(b){a.itemDragStart(b.currentTarget)},drag:function(b,c){a.itemDragMove(b.currentTarget,c.position.left,c.position.top)},stop:function(b){a.itemDragEnd(b.currentTarget)}}},i.prototype._resetLayout=function(){this.getSize(),this._getMeasurements();var a=this.packer;this.options.isHorizontal?(a.width=Number.POSITIVE_INFINITY,a.height=this.size.innerHeight+this.gutter,a.sortDirection="rightwardTopToBottom"):(a.width=this.size.innerWidth+this.gutter,a.height=Number.POSITIVE_INFINITY,a.sortDirection="downwardLeftToRight"),a.reset(),this.maxY=0,this.maxX=0},i.prototype._getMeasurements=function(){this._getMeasurement("columnWidth","width"),this._getMeasurement("rowHeight","height"),this._getMeasurement("gutter","width")},i.prototype._getItemLayoutPosition=function(a){return this._packItem(a),a.rect},i.prototype._packItem=function(a){this._setRectSize(a.element,a.rect),this.packer.pack(a.rect),this._setMaxXY(a.rect)},i.prototype._setMaxXY=function(a){this.maxX=Math.max(a.x+a.width,this.maxX),this.maxY=Math.max(a.y+a.height,this.maxY)},i.prototype._setRectSize=function(a,c){var d=b(a),e=d.outerWidth,f=d.outerHeight;(e||f)&&(e=this._applyGridGutter(e,this.columnWidth),f=this._applyGridGutter(f,this.rowHeight)),c.width=Math.min(e,this.packer.width),c.height=Math.min(f,this.packer.height)},i.prototype._applyGridGutter=function(a,b){if(!b)return a+this.gutter;b+=this.gutter;var c=a%b,d=c&&1>c?"round":"ceil";return a=Math[d](a/b)*b},i.prototype._getContainerSize=function(){return this.options.isHorizontal?{width:this.maxX-this.gutter}:{height:this.maxY-this.gutter}},i.prototype._manageStamp=function(a){var b,c=this.getItem(a);if(c&&c.isPlacing)b=c.placeRect;else{var e=this._getElementOffset(a);b=new d({x:this.options.isOriginLeft?e.left:e.right,y:this.options.isOriginTop?e.top:e.bottom})}this._setRectSize(a,b),this.packer.placed(b),this._setMaxXY(b)},i.prototype.sortItemsByPosition=function(){var a=this.options.isHorizontal?h:g;this.items.sort(a)},i.prototype.fit=function(a,b,c){var d=this.getItem(a);d&&(this._getMeasurements(),this.stamp(d.element),d.getSize(),d.isPlacing=!0,b=void 0===b?d.rect.x:b,c=void 0===c?d.rect.y:c,d.positionPlaceRect(b,c,!0),this._bindFitEvents(d),d.moveTo(d.placeRect.x,d.placeRect.y),this.layout(),this.unstamp(d.element),this.sortItemsByPosition(),d.isPlacing=!1,d.copyPlaceRectPosition())},i.prototype._bindFitEvents=function(a){function b(){d++,2==d&&c.emitEvent("fitComplete",[a])}var c=this,d=0;a.on("layout",function(){return b(),!0}),this.on("layoutComplete",function(){return b(),!0})},i.prototype.resize=function(){var a=b(this.element),c=this.size&&a,d=this.options.isHorizontal?"innerHeight":"innerWidth";c&&a[d]==this.size[d]||this.layout()},i.prototype.itemDragStart=function(a){this.stamp(a);var b=this.getItem(a);b&&b.dragStart()},i.prototype.itemDragMove=function(a,b,c){function d(){f.layout(),delete f.dragTimeout}var e=this.getItem(a);e&&e.dragMove(b,c);var f=this;this.clearDragTimeout(),this.dragTimeout=setTimeout(d,40)},i.prototype.clearDragTimeout=function(){this.dragTimeout&&clearTimeout(this.dragTimeout)},i.prototype.itemDragEnd=function(b){var c,d=this.getItem(b);if(d&&(c=d.didDrag,d.dragStop()),!d||!c&&!d.needsPositioning)return void this.unstamp(b);a.add(d.element,"is-positioning-post-drag");var e=this._getDragEndLayoutComplete(b,d);d.needsPositioning?(d.on("layout",e),d.moveTo(d.placeRect.x,d.placeRect.y)):d&&d.copyPlaceRectPosition(),this.clearDragTimeout(),this.on("layoutComplete",e),this.layout()},i.prototype._getDragEndLayoutComplete=function(b,c){var d=c&&c.needsPositioning,e=0,f=d?2:1,g=this;return function(){return e++,e!=f?!0:(c&&(a.remove(c.element,"is-positioning-post-drag"),c.isPlacing=!1,c.copyPlaceRectPosition()),g.unstamp(b),g.sortItemsByPosition(),d&&g.emitEvent("dragItemPositioned",[c]),!0)}},i.prototype.bindDraggabillyEvents=function(a){a.on("dragStart",this.handleDraggabilly.dragStart),a.on("dragMove",this.handleDraggabilly.dragMove),a.on("dragEnd",this.handleDraggabilly.dragEnd)},i.prototype.bindUIDraggableEvents=function(a){a.on("dragstart",this.handleUIDraggable.start).on("drag",this.handleUIDraggable.drag).on("dragstop",this.handleUIDraggable.stop)},i.Rect=d,i.Packer=e,i}),function(a,b){"function"==typeof define&&define.amd?define(["isotope/js/layout-mode","packery/js/packery","get-size/get-size"],b):"object"==typeof exports?module.exports=b(require("isotope-layout/js/layout-mode"),require("packery"),require("get-size")):b(a.Isotope.LayoutMode,a.Packery,a.getSize)}(window,function(a,b,c){function d(a,b){for(var c in b)a[c]=b[c];return a}var e=a.create("packery"),f=e.prototype._getElementOffset,g=e.prototype._getMeasurement;d(e.prototype,b.prototype),e.prototype._getElementOffset=f,e.prototype._getMeasurement=g;var h=e.prototype._resetLayout;e.prototype._resetLayout=function(){this.packer=this.packer||new b.Packer,h.apply(this,arguments)};var i=e.prototype._getItemLayoutPosition;e.prototype._getItemLayoutPosition=function(a){return a.rect=a.rect||new b.Rect,i.call(this,a)};var j=e.prototype._manageStamp;return e.prototype._manageStamp=function(){this.options.isOriginLeft=this.isotope.options.isOriginLeft,this.options.isOriginTop=this.isotope.options.isOriginTop,j.apply(this,arguments)},e.prototype.needsResizeLayout=function(){var a=c(this.element),b=this.size&&a,d=this.options.isHorizontal?"innerHeight":"innerWidth";return b&&a[d]!=this.size[d]},e});
 /**
 * jQuery.share - social media sharing plugin
 * ---
 * @author Carol Skelly (http://in1.com)
 * @version 1.0
 * @license MIT license (http://opensource.org/licenses/mit-license.php)
 * ---
 */

!function(t,e){var s=e.document;t.fn.share=function(i){var r={init:function(i){this.share.settings=t.extend({},this.share.defaults,i);var r=(this.share.settings,this.share.settings.networks),o=this.share.settings.theme,a=this.share.settings.orientation,u=this.share.settings.affix,h=this.share.settings.margin,l=this.share.settings.title||t(s).attr("title"),c=this.share.settings.urlToShare||t(location).attr("href"),p="";return t.each(t(s).find('meta[name="description"]'),function(e,s){p=t(s).attr("content")}),this.each(function(){var s,i=t(this),m=i.attr("id"),d=encodeURIComponent(c),f=l.replace("|",""),g=p.substring(0,250);r.forEach(function(e){s=n.networkDefs[e].url,s=s.replace("|u|",d).replace("|t|",f).replace("|d|",g).replace("|140|",f.substring(0,130)),t("<a href='"+s+"'   class='pop share-"+o+" share-"+o+"-"+e+"'></a>").appendTo(i)}),t("#"+m+".share-"+o).css("margin",h),"horizontal"!=a?t("#"+m+" a.share-"+o).css("display","block"):t("#"+m+" a.share-"+o).css("display","inline-block"),"undefined"!=typeof u&&(i.addClass("share-affix"),-1!=u.indexOf("right")?(i.css("left","auto"),i.css("right","0px"),-1!=u.indexOf("center")&&i.css("top","40%")):-1!=u.indexOf("left center")&&i.css("top","40%"),-1!=u.indexOf("bottom")&&(i.css("bottom","0px"),i.css("top","auto"),-1!=u.indexOf("center")&&i.css("left","40%"))),t(".pop").click(function(){return e.open(t(this).attr("href"),"t","toolbar=0,resizable=1,status=0,width=640,height=528"),!1})})}},n={networkDefs:{facebook:{url:"http://www.facebook.com/share.php?u=|u|"},twitter:{url:"https://twitter.com/share?via=in1.com&text=|140|"},linkedin:{url:"http://www.linkedin.com/shareArticle?mini=true&url=|u|&title=|t|&summary=|d|&source=in1.com"},in1:{url:"http://www.in1.com/cast?u=|u|",w:"490",h:"529"},tumblr:{url:"http://www.tumblr.com/share?v=3&u=|u|"},digg:{url:"http://digg.com/submit?url=|u|&title=|t|"},googleplus:{url:"https://plusone.google.com/_/+1/confirm?hl=en&url=|u|"},reddit:{url:"http://reddit.com/submit?url=|u|"},pinterest:{url:"http://pinterest.com/pin/create/button/?url=|u|&media=&description=|d|"},posterous:{url:"http://posterous.com/share?linkto=|u|&title=|t|"},stumbleupon:{url:"http://www.stumbleupon.com/submit?url=|u|&title=|t|"},email:{url:"mailto:?subject=|t|"}}};return r[i]?r[i].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof i&&i?void t.error('Method "'+i+'" does not exist in social plugin'):r.init.apply(this,arguments)},t.fn.share.defaults={networks:["in1","facebook","twitter","linkedin"],theme:"icon",autoShow:!0,margin:"3px",orientation:"horizontal",useIn1:!0},t.fn.share.settings={}}(jQuery,window);
/** video**/
"function"!=typeof Object.create&&(Object.create=function(e){function t(){}return t.prototype=e,new t}),function(e,t,o){var a=function(e){var t=o.createElement("script"),a=o.getElementsByTagName("head")[0];t.src=location.protocol+"//www.youtube.com/iframe_api",a.appendChild(t),a=null,t=null,n(e)},n=function(o){"undefined"==typeof YT&&"undefined"==typeof t.loadingPlayer?(t.loadingPlayer=!0,t.dfd=e.Deferred(),t.onYouTubeIframeAPIReady=function(){t.onYouTubeIframeAPIReady=null,t.dfd.resolve("John"),o()}):t.dfd.done(function(e){o()})};YTPlayer={player:null,defaults:{ratio:16/9,videoId:"LSmgKRx5pBo",mute:!0,repeat:!0,width:e(t).width(),playButtonClass:"YTPlayer-play",pauseButtonClass:"YTPlayer-pause",muteButtonClass:"YTPlayer-mute",volumeUpClass:"YTPlayer-volume-up",volumeDownClass:"YTPlayer-volume-down",start:0,pauseOnScroll:!1,fitToBackground:!0,playerVars:{modestbranding:1,autoplay:1,controls:0,showinfo:0,wmode:"transparent",branding:0,rel:0,autohide:0,origin:t.location.origin},events:null},init:function(o,n){var i=this;return i.userOptions=n,i.$body=e("body"),i.$node=e(o),i.$window=e(t),i.defaults.events={onReady:function(e){i.onPlayerReady(e),i.options.pauseOnScroll&&i.pauseOnScroll(),"function"==typeof i.options.callback&&i.options.callback.call(this)},onStateChange:function(e){1===e.data?i.$node.addClass("loaded"):0===e.data&&i.options.repeat&&i.player.seekTo(i.options.start)}},i.options=e.extend(!0,{},i.defaults,i.userOptions),i.ID=(new Date).getTime(),i.holderID="YTPlayer-ID-"+i.ID,i.options.fitToBackground?i.createBackgroundVideo():i.createContainerVideo(),i.$window.on("resize.YTplayer"+i.ID,function(){i.resize(i)}),a(i.onYouTubeIframeAPIReady.bind(i)),i.resize(i),i},pauseOnScroll:function(){var e=this;e.$window.on("scroll.YTplayer"+e.ID,function(){var t=e.player.getPlayerState();1===t&&e.player.pauseVideo()}),e.$window.scrollStopped(function(){var t=e.player.getPlayerState();2===t&&e.player.playVideo()})},createContainerVideo:function(){var t=this,o=e('<div id="ytplayer-container'+t.ID+'" >                                    <div id="'+t.holderID+'" class="ytplayer-player"></div>                                     </div>                                     <div id="ytplayer-shield"></div>');t.$node.append(o),t.$YTPlayerString=o,o=null},createBackgroundVideo:function(){var t=this,o=e('<div id="ytplayer-container'+t.ID+'" class="ytplayer-container background">                                    <div id="'+t.holderID+'" class="ytplayer-player"></div>                                    </div>                                    <div id="ytplayer-shield"></div>');t.$node.append(o),t.$YTPlayerString=o,o=null},resize:function(t){var o=e(".media-container");t.options.fitToBackground||(o=t.$node);var a,n,i=o.width(),r=o.height(),l=e("#"+t.holderID);i/t.options.ratio<r?(a=Math.ceil(r*t.options.ratio),l.width(a).height(r).css({left:(i-a)/2,top:0})):(n=Math.ceil(i/t.options.ratio),l.width(i).height(n).css({left:0,top:0})),l=null,o=null},onYouTubeIframeAPIReady:function(){var e=this;e.player=new t.YT.Player(e.holderID,{width:e.options.width,height:Math.ceil(e.options.width/e.options.ratio),videoId:e.options.videoId,playerVars:e.options.playerVars,events:e.options.events})},onPlayerReady:function(e){this.options.mute&&e.target.mute(),e.target.playVideo()},getPlayer:function(){return this.player},destroy:function(){var o=this;o.$node.removeData("yt-init").removeData("ytPlayer").removeClass("loaded"),o.$YTPlayerString.remove(),e(t).off("resize.YTplayer"+o.ID),e(t).off("scroll.YTplayer"+o.ID),o.$body=null,o.$node=null,o.$YTPlayerString=null,o.player.destroy(),o.player=null}},e.fn.scrollStopped=function(t){var o=e(this),a=this;o.scroll(function(){o.data("scrollTimeout")&&clearTimeout(o.data("scrollTimeout")),o.data("scrollTimeout",setTimeout(t,250,a))})},e.fn.YTPlayer=function(t){return this.each(function(){var o=this;e(o).data("yt-init",!0);var a=Object.create(YTPlayer);a.init(o,t),e.data(o,"ytPlayer",a)})}}(jQuery,window,document);
/**
 *  Parallax Scrolling Library
 *
 */
(function(e){"function"===typeof define&&define.amd?define(["jquery"],e):"undefined"!==typeof exports?module.exports=e(require("jquery")):e(jQuery)})(function(e){function W(a){if(console&&console.warn)console.warn("Scrollax: "+a);else throw"Scrollax: "+a;}function ka(a){var g=!!("pageYOffset"in a);return{width:g?window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth:a.offsetWidth,height:g?window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight:
a.offsetHeight,left:a[g?"pageXOffset":"scrollLeft"],top:a[g?"pageYOffset":"scrollTop"]}}function X(a){return(a=a.data("scrollax"))&&eval("({"+a+"})")||{}}function Y(a){var g,c;return!!(a&&"object"===typeof a&&"object"===typeof a.window&&a.window==a&&a.setTimeout&&a.alert&&(g=a.document)&&"object"===typeof g&&(c=g.defaultView||g.parentWindow)&&"object"===typeof c&&c==a)}var v=Array.prototype,C=v.push,Z=v.splice,aa=Object.prototype.hasOwnProperty,la=/[-+]?\d+(\.\d+)?/g,ma="translateX translateY rotate rotateX rotateY rotateZ skewX skewY scaleX scaleY".split(" "),
ba=e(window),ca=e(document.body),da,ea,L,M,N,q=function(a,g,c){function k(){O=fa?ca.find(ga):P.find(ga);x.length=0;r=!!t.horizontal;O.each(na);d();t.performanceTrick&&(F=fa?ca:P);u("load");return f}function l(){G&&(G=clearTimeout(G));G=setTimeout(function(){f.reload()})}function d(){var ha=x.length;t.performanceTrick&&F&&(clearTimeout(ia),Q||(F.addClass("scrollax-performance"),Q=!0),ia=setTimeout(function(){F.removeClass("scrollax-performance");Q=!1},100));if(ha){H=ka(a);for(var c=0;c<ha;c++)I=x[c],
y=L(I.element,a),0>y[r?"right":"bottom"]||y[r?"left":"top"]>H[r?"width":"height"]||(ja=I.options,R=ja.offset||t.offset||0,J=y[r?"right":"bottom"],z=y[r?"width":"height"],A=(z-J+R)/z,0>A&&(J=y[r?"left":"top"],z=H[r?"width":"height"],A=-1+(z-J+R)/z),1<A||-1>A||b(I,A,r));u("scroll",H)}}function b(a,b){S=a.parallaxElements;var c=S.length;if(c)for(var f=0;f<c;f++){T=S[f];var g=oa=T.element,d=b;U=T.properties||(r?{translateX:"100%"}:{translateY:"100%"});D="";for(B in U){n=U[B];if("number"===typeof n)n*=
d;else if("string"===typeof n)for(K=n.match(la),m=0,E=K.length;m<E;m++)n=n.replace(K[m],parseFloat(K[m]*d));if(-1!==e.inArray(B,ma))D+=B+"("+n+")";else{var k=g.style,l=B,h;"opacity"===B?(h=0>d?1+n:1-n,h=0>h?0:1<h?1:h):h=n;k[l]=h}}D&&(g.style[da]=ea+D)}}function pa(a){return"undefined"!==typeof a?"number"!==typeof a&&"string"!==typeof a||""===a||isNaN(a)?O.index(a):0<=a&&a<x.length?a:-1:-1}function u(a,b){if(h[a]){E=h[a].length;for(m=V.length=0;m<E;m++)C.call(V,h[a][m]);for(m=0;m<E;m++)V[m].call(f,
a,b)}}function p(a,b){for(var c=0,f=h[a].length;c<f;c++)if(h[a][c]===b)return c;return-1}var f=this,P=a&&e(a).eq(0)||ba,w=q.instances,v=null;a=P[0];e.each(w,function(b,c){b&&b.frame===a&&(v=!0)});if(!a||v)v?W("Scrollax: Scrollax has been initialized for this frame!"):W("Scrollax: Frame is not available!");else{var t=e.extend({},q.defaults,g),x=[],O=null,ga=t.parentSelector||"[data-scrollax-parent]",qa=t.elementsSelector||"[data-scrollax]",h={},V=[],G,fa=Y(a),m,E,F,ia,Q,H,r,R,y,I,ja,A,J,z,S,T,oa,U,
B,n,D,K;f.frame=a;f.options=t;f.parents=x;f.initialized=!1;f.reload=k;var na=function(a,b){var c=e(b),f=X(e(b)),d={};d.element=b;d.options=f;d.parallaxElements=[];c.find(qa).each(function(a,b){var c=X(e(b));c.element=b;C.call(d.parallaxElements,c)});C.call(x,d)};f.scroll=d;f.getIndex=pa;f.one=function(a,b){function c(){b.apply(f,arguments);f.off(a,c)}f.on(a,c);return f};f.on=function(a,b){if("object"===typeof a)for(var c in a){if(aa.call(a,c))f.on(c,a[c])}else if("function"===typeof b){c=a.split(" ");
for(var d=0,g=c.length;d<g;d++)h[c[d]]=h[c[d]]||[],-1===p(c[d],b)&&C.call(h[c[d]],b)}else if("array"===typeof b)for(c=0,d=b.length;c<d;c++)f.on(a,b[c]);return f};f.off=function(a,c){if(c instanceof Array)for(var b=0,d=c.length;b<d;b++)f.off(a,c[b]);else for(var b=a.split(" "),d=0,g=b.length;d<g;d++)if(h[b[d]]=h[b[d]]||[],"undefined"===typeof c)h[b[d]].length=0;else{var k=p(b[d],c);-1!==k&&Z.call(h[b[d]],k,1)}return f};f.set=function(a,b){e.isPlainObject(a)?e.extend(t,a):aa.call(t,a)&&(t[a]=b);k();
return f};f.destroy=function(){N(window,"resize",l);N(a,"scroll",d);e.each(w,function(b,c){b&&b.frame===a&&Z.call(q.instances,c,1)});x.length=0;f.initialized=!1;u("destroy");return f};f.init=function(){if(!f.initialized)return f.on(c),k(),M(window,"resize",l),M(a,"scroll",d),C.call(q.instances,f),f.initialized=!0,u("initialized"),f}}};q.instances=[];(function(){var a,g,c,k,l,d,b,e;L=function(u,p){g=u.ownerDocument||u;c=g.documentElement;k=Y(p)?p:g.defaultView||window;p=p&&p!==g?p:c;l=(k.pageYOffset||
c.scrollTop)-c.clientTop;d=(k.pageXOffset||c.scrollLeft)-c.clientLeft;b={top:0,left:0};if(u&&u.getBoundingClientRect){var f={},q=u.getBoundingClientRect();for(a in q)f[a]=q[a];b=f;b.width=b.right-b.left;b.height=b.bottom-b.top}else return null;if(p===k)return b;b.top+=l;b.left+=d;b.right+=d;b.bottom+=l;if(p===c)return b;e=L(p);b.left-=e.left;b.right-=e.left;b.top-=e.top;b.bottom-=e.top;return b}})();(function(){function a(){this.returnValue=!1}function g(){this.cancelBubble=!0}M=window.addEventListener?
function(a,g,e,d){a.addEventListener(g,e,d||!1);return e}:function(c,e,l){var d=e+l;c[d]=c[d]||function(){var b=window.event;b.target=b.srcElement;b.preventDefault=a;b.stopPropagation=g;l.call(c,b)};c.attachEvent("on"+e,c[d]);return l};N=window.removeEventListener?function(a,g,e,d){a.removeEventListener(g,e,d||!1);return e}:function(a,g,e){var d=g+e;a.detachEvent("on"+g,a[d]);try{delete a[d]}catch(b){a[d]=void 0}return e}})();(function(){function a(a){for(var e=0,d=g.length;e<d;e++){var b=g[e]?g[e]+
a.charAt(0).toUpperCase()+a.slice(1):a;if(null!=c.style[b])return b}}var g=["","webkit","moz","ms","o"],c=document.createElement("div");da=a("transform");ea=a("perspective")?"translateZ(0) ":""})();q.defaults={horizontal:!1,offset:0,parentSelector:null,elementsSelector:null,performanceTrick:!1};window.Scrollax=q;e.fn.Scrollax=function(a,g){var c,k;if(!e.isPlainObject(a)){if("string"===typeof a||!1===a)c=!1===a?"destroy":a,k=slice.call(arguments,1);a={}}return this.each(function(l,d){var b=e.data(d,
"scrollax");b||c?b&&c&&b[c]&&b[c].apply(b,k):e.data(d,"scrollax",(new q(d,a,g)).init())})};e.Scrollax=function(a,e){ba.Scrollax(a,e)};var v=document.head||document.getElementsByTagName("head")[0],w=document.createElement("style");w.type="text/css";w.styleSheet?w.styleSheet.cssText=".scrollax-performance, .scrollax-performance *, .scrollax-performance *:before, .scrollax-performance *:after { pointer-events: none !important; -webkit-animation-play-state: paused !important; animation-play-state: paused !important; };":
w.appendChild(document.createTextNode(".scrollax-performance, .scrollax-performance *, .scrollax-performance *:before, .scrollax-performance *:after { pointer-events: none !important; -webkit-animation-play-state: paused !important; animation-play-state: paused !important; };"));v.appendChild(w);return q});
// appear
(function($){$.fn.appear=function(f,o){var s=$.extend({one:true},o);return this.each(function(){var t=$(this);t.appeared=false;if(!f){t.trigger('appear',s.data);return;}var w=$(window);var c=function(){if(!t.is(':visible')){t.appeared=false;return;}var a=w.scrollLeft();var b=w.scrollTop();var o=t.offset();var x=o.left;var y=o.top;if(y+t.height()>=b&&y<=b+w.height()&&x+t.width()>=a&&x<=a+w.width()){if(!t.appeared)t.trigger('appear',s.data);}else{t.appeared=false;}};var m=function(){t.appeared=true;if(s.one){w.unbind('scroll',c);var i=$.inArray(c,$.fn.appear.checks);if(i>=0)$.fn.appear.checks.splice(i,1);}f.apply(this,arguments);};if(s.one)t.one('appear',s.data,m);else t.bind('appear',s.data,m);w.scroll(c);$.fn.appear.checks.push(c);(c)();});};$.extend($.fn.appear,{checks:[],timeout:null,checkAll:function(){var l=$.fn.appear.checks.length;if(l>0)while(l--)($.fn.appear.checks[l])();},run:function(){if($.fn.appear.timeout)clearTimeout($.fn.appear.timeout);$.fn.appear.timeout=setTimeout($.fn.appear.checkAll,20);}});$.each(['append','prepend','after','before','attr','removeAttr','addClass','removeClass','toggleClass','remove','css','show','hide'],function(i,n){var u=$.fn[n];if(u){$.fn[n]=function(){var r=u.apply(this,arguments);$.fn.appear.run();return r;}}});})(jQuery);

/**
 * Single Page Nav Plugin
 * Copyright (c) 2014 Chris Wojcik <hello@chriswojcik.net>
 * Dual licensed under MIT and GPL.
 * @author Chris Wojcik
 * @version 1.2.0
 */

// Utility
if(typeof Object.create!=='function'){Object.create=function(obj){function F(){}F.prototype=obj;return new F()}}(function($,window,document,undefined){"use strict";var SinglePageNav={init:function(options,container){this.options=$.extend({},$.fn.singlePageNav.defaults,options);this.container=container;this.$container=$(container);this.$links=this.$container.find('a');if(this.options.filter!==''){this.$links=this.$links.filter(this.options.filter)}this.$window=$(window);this.$htmlbody=$('html, body');this.$links.on('click.singlePageNav',$.proxy(this.handleClick,this));this.didScroll=false;this.checkPosition();this.setTimer()},handleClick:function(e){var self=this,link=e.currentTarget,$elem=$(link.hash);e.preventDefault();if($elem.length){self.clearTimer();if(typeof self.options.beforeStart==='function'){self.options.beforeStart()}self.setActiveLink(link.hash);self.scrollTo($elem,function(){if(self.options.updateHash&&history.pushState){history.pushState(null,null,link.hash)}self.setTimer();if(typeof self.options.onComplete==='function'){self.options.onComplete()}})}},scrollTo:function($elem,callback){var self=this;var target=self.getCoords($elem).top;var called=false;self.$htmlbody.stop().animate({scrollTop:target},{duration:self.options.speed,easing:self.options.easing,complete:function(){if(typeof callback==='function'&&!called){callback()}called=true}})},setTimer:function(){var self=this;self.$window.on('scroll.singlePageNav',function(){self.didScroll=true});self.timer=setInterval(function(){if(self.didScroll){self.didScroll=false;self.checkPosition()}},250)},clearTimer:function(){clearInterval(this.timer);this.$window.off('scroll.singlePageNav');this.didScroll=false},checkPosition:function(){var scrollPos=this.$window.scrollTop();var currentSection=this.getCurrentSection(scrollPos);if(currentSection!==null){this.setActiveLink(currentSection)}},getCoords:function($elem){return{top:Math.round($elem.offset().top)-this.options.offset}},setActiveLink:function(href){var $activeLink=this.$container.find("a[href$='"+href+"']");if(!$activeLink.hasClass(this.options.currentClass)){this.$links.removeClass(this.options.currentClass);$activeLink.addClass(this.options.currentClass);if($(".scroll-nav  a").hasClass("act-link"))$(".scroll-nav  a.act-link").each(function(){var a=$(this).data("bgscr"),b=$(this).data("bgtex");var ua=window.navigator.userAgent;var msie=ua.indexOf("MSIE ");if(msie>0||!!navigator.userAgent.match(/Trident.*rv\:11\./)){$(".bg-title span").html(b)}setTimeout(function(){},700)})}},getCurrentSection:function(scrollPos){var i,hash,coords,section;for(i=0;i<this.$links.length;i++){hash=this.$links[i].hash;if($(hash).length){coords=this.getCoords($(hash));if(scrollPos>=coords.top-this.options.threshold){section=hash}}}return section||((this.$links.length===0)?(null):(this.$links[0].hash))}};$.fn.singlePageNav=function(options){return this.each(function(){var singlePageNav=Object.create(SinglePageNav);singlePageNav.init(options,this)})};$.fn.singlePageNav.defaults={offset:0,threshold:120,speed:400,currentClass:'current',easing:'swing',updateHash:false,filter:'',onComplete:false,beforeStart:false}})(jQuery,window,document);
// ScrollToFixed
(function(a){a.isScrollToFixed=function(b){return !!a(b).data("ScrollToFixed")};a.ScrollToFixed=function(d,i){var m=this;m.$el=a(d);m.el=d;m.$el.data("ScrollToFixed",m);var c=false;var H=m.$el;var I;var F;var k;var e;var z;var E=0;var r=0;var j=-1;var f=-1;var u=null;var A;var g;function v(){H.trigger("preUnfixed.ScrollToFixed");l();H.trigger("unfixed.ScrollToFixed");f=-1;E=H.offset().top;r=H.offset().left;if(m.options.offsets){r+=(H.offset().left-H.position().left)}if(j==-1){j=r}I=H.css("position");c=true;if(m.options.bottom!=-1){H.trigger("preFixed.ScrollToFixed");x();H.trigger("fixed.ScrollToFixed")}}function o(){var J=m.options.limit;if(!J){return 0}if(typeof(J)==="function"){return J.apply(H)}return J}function q(){return I==="fixed"}function y(){return I==="absolute"}function h(){return !(q()||y())}function x(){if(!q()){var J=H[0].getBoundingClientRect();u.css({display:H.css("display"),width:J.width,height:J.height,"float":H.css("float")});cssOptions={"z-index":m.options.zIndex,position:"fixed",top:m.options.bottom==-1?t():"",bottom:m.options.bottom==-1?"":m.options.bottom,"margin-left":"0px"};if(!m.options.dontSetWidth){cssOptions.width=H.css("width")}H.css(cssOptions);H.addClass(m.options.baseClassName);if(m.options.className){H.addClass(m.options.className)}I="fixed"}}function b(){var K=o();var J=r;if(m.options.removeOffsets){J="";K=K-E}cssOptions={position:"absolute",top:K,left:J,"margin-left":"0px",bottom:""};if(!m.options.dontSetWidth){cssOptions.width=H.css("width")}H.css(cssOptions);I="absolute"}function l(){if(!h()){f=-1;u.css("display","none");H.css({"z-index":z,width:"",position:F,left:"",top:e,"margin-left":""});H.removeClass("scroll-to-fixed-fixed");if(m.options.className){H.removeClass(m.options.className)}I=null}}function w(J){if(J!=f){H.css("left",r-J);f=J}}function t(){var J=m.options.marginTop;if(!J){return 0}if(typeof(J)==="function"){return J.apply(H)}return J}function B(){if(!a.isScrollToFixed(H)||H.is(":hidden")){return}var M=c;var L=h();if(!c){v()}else{if(h()){E=H.offset().top;r=H.offset().left}}var J=a(window).scrollLeft();var N=a(window).scrollTop();var K=o();if(m.options.minWidth&&a(window).width()<m.options.minWidth){if(!h()||!M){p();H.trigger("preUnfixed.ScrollToFixed");l();H.trigger("unfixed.ScrollToFixed")}}else{if(m.options.maxWidth&&a(window).width()>m.options.maxWidth){if(!h()||!M){p();H.trigger("preUnfixed.ScrollToFixed");l();H.trigger("unfixed.ScrollToFixed")}}else{if(m.options.bottom==-1){if(K>0&&N>=K-t()){if(!L&&(!y()||!M)){p();H.trigger("preAbsolute.ScrollToFixed");b();H.trigger("unfixed.ScrollToFixed")}}else{if(N>=E-t()){if(!q()||!M){p();H.trigger("preFixed.ScrollToFixed");x();f=-1;H.trigger("fixed.ScrollToFixed")}w(J)}else{if(!h()||!M){p();H.trigger("preUnfixed.ScrollToFixed");l();H.trigger("unfixed.ScrollToFixed")}}}}else{if(K>0){if(N+a(window).height()-H.outerHeight(true)>=K-(t()||-n())){if(q()){p();H.trigger("preUnfixed.ScrollToFixed");if(F==="absolute"){b()}else{l()}H.trigger("unfixed.ScrollToFixed")}}else{if(!q()){p();H.trigger("preFixed.ScrollToFixed");x()}w(J);H.trigger("fixed.ScrollToFixed")}}else{w(J)}}}}}function n(){if(!m.options.bottom){return 0}return m.options.bottom}function p(){var J=H.css("position");if(J=="absolute"){H.trigger("postAbsolute.ScrollToFixed")}else{if(J=="fixed"){H.trigger("postFixed.ScrollToFixed")}else{H.trigger("postUnfixed.ScrollToFixed")}}}var D=function(J){if(H.is(":visible")){c=false;B()}else{l()}};var G=function(J){(!!window.requestAnimationFrame)?requestAnimationFrame(B):B()};var C=function(){var K=document.body;if(document.createElement&&K&&K.appendChild&&K.removeChild){var M=document.createElement("div");if(!M.getBoundingClientRect){return null}M.innerHTML="x";M.style.cssText="position:fixed;top:100px;";K.appendChild(M);var N=K.style.height,O=K.scrollTop;K.style.height="3000px";K.scrollTop=500;var J=M.getBoundingClientRect().top;K.style.height=N;var L=(J===100);K.removeChild(M);K.scrollTop=O;return L}return null};var s=function(J){J=J||window.event;if(J.preventDefault){J.preventDefault()}J.returnValue=false};m.init=function(){m.options=a.extend({},a.ScrollToFixed.defaultOptions,i);z=H.css("z-index");m.$el.css("z-index",m.options.zIndex);u=a("<div />");I=H.css("position");F=H.css("position");k=H.css("float");e=H.css("top");if(h()){m.$el.after(u)}a(window).bind("resize.ScrollToFixed",D);a(window).bind("scroll.ScrollToFixed",G);if("ontouchmove" in window){a(window).bind("touchmove.ScrollToFixed",B)}if(m.options.preFixed){H.bind("preFixed.ScrollToFixed",m.options.preFixed)}if(m.options.postFixed){H.bind("postFixed.ScrollToFixed",m.options.postFixed)}if(m.options.preUnfixed){H.bind("preUnfixed.ScrollToFixed",m.options.preUnfixed)}if(m.options.postUnfixed){H.bind("postUnfixed.ScrollToFixed",m.options.postUnfixed)}if(m.options.preAbsolute){H.bind("preAbsolute.ScrollToFixed",m.options.preAbsolute)}if(m.options.postAbsolute){H.bind("postAbsolute.ScrollToFixed",m.options.postAbsolute)}if(m.options.fixed){H.bind("fixed.ScrollToFixed",m.options.fixed)}if(m.options.unfixed){H.bind("unfixed.ScrollToFixed",m.options.unfixed)}if(m.options.spacerClass){u.addClass(m.options.spacerClass)}H.bind("resize.ScrollToFixed",function(){u.height(H.height())});H.bind("scroll.ScrollToFixed",function(){H.trigger("preUnfixed.ScrollToFixed");l();H.trigger("unfixed.ScrollToFixed");B()});H.bind("detach.ScrollToFixed",function(J){s(J);H.trigger("preUnfixed.ScrollToFixed");l();H.trigger("unfixed.ScrollToFixed");a(window).unbind("resize.ScrollToFixed",D);a(window).unbind("scroll.ScrollToFixed",G);H.unbind(".ScrollToFixed");u.remove();m.$el.removeData("ScrollToFixed")});D()};m.init()};a.ScrollToFixed.defaultOptions={marginTop:0,limit:0,bottom:-1,zIndex:1000,baseClassName:"scroll-to-fixed-fixed"};a.fn.scrollToFixed=function(b){return this.each(function(){(new a.ScrollToFixed(this,b))})}})(jQuery);
// count
(function($){$.fn.countTo=function(options){options=options||{};return $(this).each(function(){var settings=$.extend({},$.fn.countTo.defaults,{from:$(this).data('from'),to:$(this).data('num'),speed:$(this).data('speed'),refreshInterval:$(this).data('refresh-interval'),decimals:$(this).data('decimals')},options);var loops=Math.ceil(settings.speed/settings.refreshInterval),increment=(settings.to-settings.from)/loops;var self=this,$self=$(this),loopCount=0,value=settings.from,data=$self.data('countTo')||{};$self.data('countTo',data);if(data.interval){clearInterval(data.interval)}data.interval=setInterval(updateTimer,settings.refreshInterval);render(value);function updateTimer(){value+=increment;loopCount++;render(value);if(typeof(settings.onUpdate)=='function'){settings.onUpdate.call(self,value)}if(loopCount>=loops){$self.removeData('countTo');clearInterval(data.interval);value=settings.to;if(typeof(settings.onComplete)=='function'){settings.onComplete.call(self,value)}}}function render(value){var formattedValue=settings.formatter.call(self,value,settings);$self.text(formattedValue)}})};$.fn.countTo.defaults={from:0,to:0,speed:2500,refreshInterval:100,decimals:0,formatter:formatter,onUpdate:null,onComplete:null};function formatter(value,settings){return value.toFixed(settings.decimals)}}(jQuery)); 
/**
	/*
	 *
	 *	jQuery Sliding Menu Plugin
	 *	Mobile app list-style navigation in the browser
	 *
	 *	Written by Ali Zahid
	 *	http://alizahid.github.io/jquery-sliding-menu/
	 *
	 */
(function($){var usedIds=[];$.fn.menu=function(options){var selector=this.selector;var settings=$.extend({dataJSON:false,backLabel:''},options);return this.each(function(){var self=this,menu=$(self),data;if(menu.hasClass('sliding-menu')){return}var menuWidth=menu.width();if(settings.dataJSON){data=processJSON(settings.dataJSON)}else{data=process(menu)}menu.empty().addClass('sliding-menu');var rootPanel;if(settings.dataJSON){$(data).each(function(index,item){var panel=$('<ul></ul>');if(item.root){rootPanel='#'+item.id}panel.attr('id',item.id);panel.addClass('menu-panel');panel.width(menuWidth);$(item.children).each(function(index,item){var link=$('<a></a>');link.attr('class',item.styleClass);link.attr('href',item.href);link.text(item.label);var li=$('<li></li>');li.append(link);panel.append(li)});menu.append(panel)})}else{$(data).each(function(index,item){var panel=$(item);if(panel.hasClass('menu-panel-root')){rootPanel='#'+panel.attr('id')}panel.width(menuWidth);menu.append(item)})}rootPanel=$(rootPanel);rootPanel.addClass('menu-panel-root');var currentPanel=rootPanel;menu.height(rootPanel.height());var wrapper=$('<div></div>').addClass('sliding-menu-wrapper').width(data.length*menuWidth);menu.wrapInner(wrapper);wrapper=$('.sliding-menu-wrapper',menu);$('a',self).on('click',function(e){var href=$(this).attr('href'),label=$(this).text();if(wrapper.is(':animated')){e.preventDefault();return}if(href=='#'){e.preventDefault()}else if(href.indexOf('#menu-panel')==0){var target=$(href),isBack=$(this).hasClass('back'),marginRight=parseInt(wrapper.css('margin-right'));if(isBack){if(href=='#menu-panel-back'){target=currentPanel.prev()}wrapper.stop(true,true).animate({marginRight:marginRight+menuWidth},'fast')}else{target.insertAfter(currentPanel);if(settings.backLabel===true){$('.back',target).text(label)}else{$('.back',target).text(settings.backLabel)}wrapper.stop(true,true).animate({marginRight:marginRight-menuWidth},'fast')}currentPanel=target;menu.stop(true,true).animate({height:target.height()},'fast');e.preventDefault()}});return this});function process(data){var ul=$('ul',data),panels=[];$(ul).each(function(index,item){var panel=$(item),handler=panel.prev(),id=getNewId();if(handler.length==1){handler.addClass('nav').attr('href','#menu-panel-'+id)}panel.attr('id','menu-panel-'+id);if(index==0){panel.addClass('menu-panel-root')}else{panel.addClass('menu-panel');var li=$('<li></li>'),back=$('<a></a>').addClass('back').attr('href','#menu-panel-back');panel.prepend(back)}panels.push(item)});return panels}function processJSON(data,parent){var root={id:'menu-panel-'+getNewId(),children:[],root:(parent?false:true)},panels=[];if(parent){root.children.push({styleClass:'back',href:'#'+parent.id})}$(data).each(function(index,item){root.children.push(item);if(item.children){var panel=processJSON(item.children,root);item.href='#'+panel[0].id;item.styleClass='nav';panels=panels.concat(panel)}});return[root].concat(panels)}function getNewId(){var id;do{id=Math.random().toString(36).substring(3,8)}while(usedIds.indexOf(id)>=0);usedIds.push(id);return id}}}(jQuery)); 
// slick=============================================
(function(factory){"use strict";if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else if(typeof exports!=="undefined"){module.exports=factory(require("jquery"))}else{factory(jQuery)}})(function($){"use strict";var Slick=window.Slick||{};Slick=function(){var instanceUid=0;function Slick(element,settings){var _=this,dataSettings;_.defaults={accessibility:true,adaptiveHeight:false,appendArrows:$(element),appendDots:$(element),arrows:true,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:false,autoplaySpeed:3e3,centerMode:false,centerPadding:"50px",cssEase:"ease",customPaging:function(slider,i){return $('<button type="button" />').text(i+1)},dots:false,dotsClass:"slick-dots",draggable:true,easing:"linear",edgeFriction:.35,fade:false,focusOnSelect:false,focusOnChange:false,infinite:true,initialSlide:0,lazyLoad:"ondemand",mobileFirst:false,pauseOnHover:true,pauseOnFocus:true,pauseOnDotsHover:false,respondTo:"window",responsive:null,rows:1,rtl:false,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:true,swipeToSlide:false,touchMove:true,touchThreshold:5,useCSS:true,useTransform:true,variableWidth:false,vertical:false,verticalSwiping:false,waitForAnimate:true,zIndex:1e3};_.initials={animating:false,dragging:false,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:false,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:false,slideOffset:0,swipeLeft:null,swiping:false,$list:null,touchObject:{},transformsEnabled:false,unslicked:false};$.extend(_,_.initials);_.activeBreakpoint=null;_.animType=null;_.animProp=null;_.breakpoints=[];_.breakpointSettings=[];_.cssTransitions=false;_.focussed=false;_.interrupted=false;_.hidden="hidden";_.paused=true;_.positionProp=null;_.respondTo=null;_.rowCount=1;_.shouldClick=true;_.$slider=$(element);_.$slidesCache=null;_.transformType=null;_.transitionType=null;_.visibilityChange="visibilitychange";_.windowWidth=0;_.windowTimer=null;dataSettings=$(element).data("slick")||{};_.options=$.extend({},_.defaults,settings,dataSettings);_.currentSlide=_.options.initialSlide;_.originalSettings=_.options;if(typeof document.mozHidden!=="undefined"){_.hidden="mozHidden";_.visibilityChange="mozvisibilitychange"}else if(typeof document.webkitHidden!=="undefined"){_.hidden="webkitHidden";_.visibilityChange="webkitvisibilitychange"}_.autoPlay=$.proxy(_.autoPlay,_);_.autoPlayClear=$.proxy(_.autoPlayClear,_);_.autoPlayIterator=$.proxy(_.autoPlayIterator,_);_.changeSlide=$.proxy(_.changeSlide,_);_.clickHandler=$.proxy(_.clickHandler,_);_.selectHandler=$.proxy(_.selectHandler,_);_.setPosition=$.proxy(_.setPosition,_);_.swipeHandler=$.proxy(_.swipeHandler,_);_.dragHandler=$.proxy(_.dragHandler,_);_.keyHandler=$.proxy(_.keyHandler,_);_.instanceUid=instanceUid++;_.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/;_.registerBreakpoints();_.init(true)}return Slick}();Slick.prototype.activateADA=function(){var _=this;_.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})};Slick.prototype.addSlide=Slick.prototype.slickAdd=function(markup,index,addBefore){var _=this;if(typeof index==="boolean"){addBefore=index;index=null}else if(index<0||index>=_.slideCount){return false}_.unload();if(typeof index==="number"){if(index===0&&_.$slides.length===0){$(markup).appendTo(_.$slideTrack)}else if(addBefore){$(markup).insertBefore(_.$slides.eq(index))}else{$(markup).insertAfter(_.$slides.eq(index))}}else{if(addBefore===true){$(markup).prependTo(_.$slideTrack)}else{$(markup).appendTo(_.$slideTrack)}}_.$slides=_.$slideTrack.children(this.options.slide);_.$slideTrack.children(this.options.slide).detach();_.$slideTrack.append(_.$slides);_.$slides.each(function(index,element){$(element).attr("data-slick-index",index)});_.$slidesCache=_.$slides;_.reinit()};Slick.prototype.animateHeight=function(){var _=this;if(_.options.slidesToShow===1&&_.options.adaptiveHeight===true&&_.options.vertical===false){var targetHeight=_.$slides.eq(_.currentSlide).outerHeight(true);_.$list.animate({height:targetHeight},_.options.speed)}};Slick.prototype.animateSlide=function(targetLeft,callback){var animProps={},_=this;_.animateHeight();if(_.options.rtl===true&&_.options.vertical===false){targetLeft=-targetLeft}if(_.transformsEnabled===false){if(_.options.vertical===false){_.$slideTrack.animate({left:targetLeft},_.options.speed,_.options.easing,callback)}else{_.$slideTrack.animate({top:targetLeft},_.options.speed,_.options.easing,callback)}}else{if(_.cssTransitions===false){if(_.options.rtl===true){_.currentLeft=-_.currentLeft}$({animStart:_.currentLeft}).animate({animStart:targetLeft},{duration:_.options.speed,easing:_.options.easing,step:function(now){now=Math.ceil(now);if(_.options.vertical===false){animProps[_.animType]="translate("+now+"px, 0px)";_.$slideTrack.css(animProps)}else{animProps[_.animType]="translate(0px,"+now+"px)";_.$slideTrack.css(animProps)}},complete:function(){if(callback){callback.call()}}})}else{_.applyTransition();targetLeft=Math.ceil(targetLeft);if(_.options.vertical===false){animProps[_.animType]="translate3d("+targetLeft+"px, 0px, 0px)"}else{animProps[_.animType]="translate3d(0px,"+targetLeft+"px, 0px)"}_.$slideTrack.css(animProps);if(callback){setTimeout(function(){_.disableTransition();callback.call()},_.options.speed)}}}};Slick.prototype.getNavTarget=function(){var _=this,asNavFor=_.options.asNavFor;if(asNavFor&&asNavFor!==null){asNavFor=$(asNavFor).not(_.$slider)}return asNavFor};Slick.prototype.asNavFor=function(index){var _=this,asNavFor=_.getNavTarget();if(asNavFor!==null&&typeof asNavFor==="object"){asNavFor.each(function(){var target=$(this).slick("getSlick");if(!target.unslicked){target.slideHandler(index,true)}})}};Slick.prototype.applyTransition=function(slide){var _=this,transition={};if(_.options.fade===false){transition[_.transitionType]=_.transformType+" "+_.options.speed+"ms "+_.options.cssEase}else{transition[_.transitionType]="opacity "+_.options.speed+"ms "+_.options.cssEase}if(_.options.fade===false){_.$slideTrack.css(transition)}else{_.$slides.eq(slide).css(transition)}};Slick.prototype.autoPlay=function(){var _=this;_.autoPlayClear();if(_.slideCount>_.options.slidesToShow){_.autoPlayTimer=setInterval(_.autoPlayIterator,_.options.autoplaySpeed)}};Slick.prototype.autoPlayClear=function(){var _=this;if(_.autoPlayTimer){clearInterval(_.autoPlayTimer)}};Slick.prototype.autoPlayIterator=function(){var _=this,slideTo=_.currentSlide+_.options.slidesToScroll;if(!_.paused&&!_.interrupted&&!_.focussed){if(_.options.infinite===false){if(_.direction===1&&_.currentSlide+1===_.slideCount-1){_.direction=0}else if(_.direction===0){slideTo=_.currentSlide-_.options.slidesToScroll;if(_.currentSlide-1===0){_.direction=1}}}_.slideHandler(slideTo)}};Slick.prototype.buildArrows=function(){var _=this;if(_.options.arrows===true){_.$prevArrow=$(_.options.prevArrow).addClass("slick-arrow");_.$nextArrow=$(_.options.nextArrow).addClass("slick-arrow");if(_.slideCount>_.options.slidesToShow){_.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex");_.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex");if(_.htmlExpr.test(_.options.prevArrow)){_.$prevArrow.prependTo(_.options.appendArrows)}if(_.htmlExpr.test(_.options.nextArrow)){_.$nextArrow.appendTo(_.options.appendArrows)}if(_.options.infinite!==true){_.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")}}else{_.$prevArrow.add(_.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"})}}};Slick.prototype.buildDots=function(){var _=this,i,dot;if(_.options.dots===true&&_.slideCount>_.options.slidesToShow){_.$slider.addClass("slick-dotted");dot=$("<ul />").addClass(_.options.dotsClass);for(i=0;i<=_.getDotCount();i+=1){dot.append($("<li />").append(_.options.customPaging.call(this,_,i)))}_.$dots=dot.appendTo(_.options.appendDots);_.$dots.find("li").first().addClass("slick-active")}};Slick.prototype.buildOut=function(){var _=this;_.$slides=_.$slider.children(_.options.slide+":not(.slick-cloned)").addClass("slick-slide");_.slideCount=_.$slides.length;_.$slides.each(function(index,element){$(element).attr("data-slick-index",index).data("originalStyling",$(element).attr("style")||"")});_.$slider.addClass("slick-slider");_.$slideTrack=_.slideCount===0?$('<div class="slick-track"/>').appendTo(_.$slider):_.$slides.wrapAll('<div class="slick-track"/>').parent();_.$list=_.$slideTrack.wrap('<div class="slick-list"/>').parent();_.$slideTrack.css("opacity",0);if(_.options.centerMode===true||_.options.swipeToSlide===true){_.options.slidesToScroll=1}$("img[data-lazy]",_.$slider).not("[src]").addClass("slick-loading");_.setupInfinite();_.buildArrows();_.buildDots();_.updateDots();_.setSlideClasses(typeof _.currentSlide==="number"?_.currentSlide:0);if(_.options.draggable===true){_.$list.addClass("draggable")}};Slick.prototype.buildRows=function(){var _=this,a,b,c,newSlides,numOfSlides,originalSlides,slidesPerSection;newSlides=document.createDocumentFragment();originalSlides=_.$slider.children();if(_.options.rows>0){slidesPerSection=_.options.slidesPerRow*_.options.rows;numOfSlides=Math.ceil(originalSlides.length/slidesPerSection);for(a=0;a<numOfSlides;a++){var slide=document.createElement("div");for(b=0;b<_.options.rows;b++){var row=document.createElement("div");for(c=0;c<_.options.slidesPerRow;c++){var target=a*slidesPerSection+(b*_.options.slidesPerRow+c);if(originalSlides.get(target)){row.appendChild(originalSlides.get(target))}}slide.appendChild(row)}newSlides.appendChild(slide)}_.$slider.empty().append(newSlides);_.$slider.children().children().children().css({width:100/_.options.slidesPerRow+"%",display:"inline-block"})}};Slick.prototype.checkResponsive=function(initial,forceUpdate){var _=this,breakpoint,targetBreakpoint,respondToWidth,triggerBreakpoint=false;var sliderWidth=_.$slider.width();var windowWidth=window.innerWidth||$(window).width();if(_.respondTo==="window"){respondToWidth=windowWidth}else if(_.respondTo==="slider"){respondToWidth=sliderWidth}else if(_.respondTo==="min"){respondToWidth=Math.min(windowWidth,sliderWidth)}if(_.options.responsive&&_.options.responsive.length&&_.options.responsive!==null){targetBreakpoint=null;for(breakpoint in _.breakpoints){if(_.breakpoints.hasOwnProperty(breakpoint)){if(_.originalSettings.mobileFirst===false){if(respondToWidth<_.breakpoints[breakpoint]){targetBreakpoint=_.breakpoints[breakpoint]}}else{if(respondToWidth>_.breakpoints[breakpoint]){targetBreakpoint=_.breakpoints[breakpoint]}}}}if(targetBreakpoint!==null){if(_.activeBreakpoint!==null){if(targetBreakpoint!==_.activeBreakpoint||forceUpdate){_.activeBreakpoint=targetBreakpoint;if(_.breakpointSettings[targetBreakpoint]==="unslick"){_.unslick(targetBreakpoint)}else{_.options=$.extend({},_.originalSettings,_.breakpointSettings[targetBreakpoint]);if(initial===true){_.currentSlide=_.options.initialSlide}_.refresh(initial)}triggerBreakpoint=targetBreakpoint}}else{_.activeBreakpoint=targetBreakpoint;if(_.breakpointSettings[targetBreakpoint]==="unslick"){_.unslick(targetBreakpoint)}else{_.options=$.extend({},_.originalSettings,_.breakpointSettings[targetBreakpoint]);if(initial===true){_.currentSlide=_.options.initialSlide}_.refresh(initial)}triggerBreakpoint=targetBreakpoint}}else{if(_.activeBreakpoint!==null){_.activeBreakpoint=null;_.options=_.originalSettings;if(initial===true){_.currentSlide=_.options.initialSlide}_.refresh(initial);triggerBreakpoint=targetBreakpoint}}if(!initial&&triggerBreakpoint!==false){_.$slider.trigger("breakpoint",[_,triggerBreakpoint])}}};Slick.prototype.changeSlide=function(event,dontAnimate){var _=this,$target=$(event.currentTarget),indexOffset,slideOffset,unevenOffset;if($target.is("a")){event.preventDefault()}if(!$target.is("li")){$target=$target.closest("li")}unevenOffset=_.slideCount%_.options.slidesToScroll!==0;indexOffset=unevenOffset?0:(_.slideCount-_.currentSlide)%_.options.slidesToScroll;switch(event.data.message){case"previous":slideOffset=indexOffset===0?_.options.slidesToScroll:_.options.slidesToShow-indexOffset;if(_.slideCount>_.options.slidesToShow){_.slideHandler(_.currentSlide-slideOffset,false,dontAnimate)}break;case"next":slideOffset=indexOffset===0?_.options.slidesToScroll:indexOffset;if(_.slideCount>_.options.slidesToShow){_.slideHandler(_.currentSlide+slideOffset,false,dontAnimate)}break;case"index":var index=event.data.index===0?0:event.data.index||$target.index()*_.options.slidesToScroll;_.slideHandler(_.checkNavigable(index),false,dontAnimate);$target.children().trigger("focus");break;default:return}};Slick.prototype.checkNavigable=function(index){var _=this,navigables,prevNavigable;navigables=_.getNavigableIndexes();prevNavigable=0;if(index>navigables[navigables.length-1]){index=navigables[navigables.length-1]}else{for(var n in navigables){if(index<navigables[n]){index=prevNavigable;break}prevNavigable=navigables[n]}}return index};Slick.prototype.cleanUpEvents=function(){var _=this;if(_.options.dots&&_.$dots!==null){$("li",_.$dots).off("click.slick",_.changeSlide).off("mouseenter.slick",$.proxy(_.interrupt,_,true)).off("mouseleave.slick",$.proxy(_.interrupt,_,false));if(_.options.accessibility===true){_.$dots.off("keydown.slick",_.keyHandler)}}_.$slider.off("focus.slick blur.slick");if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow){_.$prevArrow&&_.$prevArrow.off("click.slick",_.changeSlide);_.$nextArrow&&_.$nextArrow.off("click.slick",_.changeSlide);if(_.options.accessibility===true){_.$prevArrow&&_.$prevArrow.off("keydown.slick",_.keyHandler);_.$nextArrow&&_.$nextArrow.off("keydown.slick",_.keyHandler)}}_.$list.off("touchstart.slick mousedown.slick",_.swipeHandler);_.$list.off("touchmove.slick mousemove.slick",_.swipeHandler);_.$list.off("touchend.slick mouseup.slick",_.swipeHandler);_.$list.off("touchcancel.slick mouseleave.slick",_.swipeHandler);_.$list.off("click.slick",_.clickHandler);$(document).off(_.visibilityChange,_.visibility);_.cleanUpSlideEvents();if(_.options.accessibility===true){_.$list.off("keydown.slick",_.keyHandler)}if(_.options.focusOnSelect===true){$(_.$slideTrack).children().off("click.slick",_.selectHandler)}$(window).off("orientationchange.slick.slick-"+_.instanceUid,_.orientationChange);$(window).off("resize.slick.slick-"+_.instanceUid,_.resize);$("[draggable!=true]",_.$slideTrack).off("dragstart",_.preventDefault);$(window).off("load.slick.slick-"+_.instanceUid,_.setPosition)};Slick.prototype.cleanUpSlideEvents=function(){var _=this;_.$list.off("mouseenter.slick",$.proxy(_.interrupt,_,true));_.$list.off("mouseleave.slick",$.proxy(_.interrupt,_,false))};Slick.prototype.cleanUpRows=function(){var _=this,originalSlides;if(_.options.rows>0){originalSlides=_.$slides.children().children();originalSlides.removeAttr("style");_.$slider.empty().append(originalSlides)}};Slick.prototype.clickHandler=function(event){var _=this;if(_.shouldClick===false){event.stopImmediatePropagation();event.stopPropagation();event.preventDefault()}};Slick.prototype.destroy=function(refresh){var _=this;_.autoPlayClear();_.touchObject={};_.cleanUpEvents();$(".slick-cloned",_.$slider).detach();if(_.$dots){_.$dots.remove()}if(_.$prevArrow&&_.$prevArrow.length){_.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display","");if(_.htmlExpr.test(_.options.prevArrow)){_.$prevArrow.remove()}}if(_.$nextArrow&&_.$nextArrow.length){_.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display","");if(_.htmlExpr.test(_.options.nextArrow)){_.$nextArrow.remove()}}if(_.$slides){_.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){$(this).attr("style",$(this).data("originalStyling"))});_.$slideTrack.children(this.options.slide).detach();_.$slideTrack.detach();_.$list.detach();_.$slider.append(_.$slides)}_.cleanUpRows();_.$slider.removeClass("slick-slider");_.$slider.removeClass("slick-initialized");_.$slider.removeClass("slick-dotted");_.unslicked=true;if(!refresh){_.$slider.trigger("destroy",[_])}};Slick.prototype.disableTransition=function(slide){var _=this,transition={};transition[_.transitionType]="";if(_.options.fade===false){_.$slideTrack.css(transition)}else{_.$slides.eq(slide).css(transition)}};Slick.prototype.fadeSlide=function(slideIndex,callback){var _=this;if(_.cssTransitions===false){_.$slides.eq(slideIndex).css({zIndex:_.options.zIndex});_.$slides.eq(slideIndex).animate({opacity:1},_.options.speed,_.options.easing,callback)}else{_.applyTransition(slideIndex);_.$slides.eq(slideIndex).css({opacity:1,zIndex:_.options.zIndex});if(callback){setTimeout(function(){_.disableTransition(slideIndex);callback.call()},_.options.speed)}}};Slick.prototype.fadeSlideOut=function(slideIndex){var _=this;if(_.cssTransitions===false){_.$slides.eq(slideIndex).animate({opacity:0,zIndex:_.options.zIndex-2},_.options.speed,_.options.easing)}else{_.applyTransition(slideIndex);_.$slides.eq(slideIndex).css({opacity:0,zIndex:_.options.zIndex-2})}};Slick.prototype.filterSlides=Slick.prototype.slickFilter=function(filter){var _=this;if(filter!==null){_.$slidesCache=_.$slides;_.unload();_.$slideTrack.children(this.options.slide).detach();_.$slidesCache.filter(filter).appendTo(_.$slideTrack);_.reinit()}};Slick.prototype.focusHandler=function(){var _=this;_.$slider.off("focus.slick blur.slick").on("focus.slick","*",function(event){var $sf=$(this);setTimeout(function(){if(_.options.pauseOnFocus){if($sf.is(":focus")){_.focussed=true;_.autoPlay()}}},0)}).on("blur.slick","*",function(event){var $sf=$(this);if(_.options.pauseOnFocus){_.focussed=false;_.autoPlay()}})};Slick.prototype.getCurrent=Slick.prototype.slickCurrentSlide=function(){var _=this;return _.currentSlide};Slick.prototype.getDotCount=function(){var _=this;var breakPoint=0;var counter=0;var pagerQty=0;if(_.options.infinite===true){if(_.slideCount<=_.options.slidesToShow){++pagerQty}else{while(breakPoint<_.slideCount){++pagerQty;breakPoint=counter+_.options.slidesToScroll;counter+=_.options.slidesToScroll<=_.options.slidesToShow?_.options.slidesToScroll:_.options.slidesToShow}}}else if(_.options.centerMode===true){pagerQty=_.slideCount}else if(!_.options.asNavFor){pagerQty=1+Math.ceil((_.slideCount-_.options.slidesToShow)/_.options.slidesToScroll)}else{while(breakPoint<_.slideCount){++pagerQty;breakPoint=counter+_.options.slidesToScroll;counter+=_.options.slidesToScroll<=_.options.slidesToShow?_.options.slidesToScroll:_.options.slidesToShow}}return pagerQty-1};Slick.prototype.getLeft=function(slideIndex){var _=this,targetLeft,verticalHeight,verticalOffset=0,targetSlide,coef;_.slideOffset=0;verticalHeight=_.$slides.first().outerHeight(true);if(_.options.infinite===true){if(_.slideCount>_.options.slidesToShow){_.slideOffset=_.slideWidth*_.options.slidesToShow*-1;coef=-1;if(_.options.vertical===true&&_.options.centerMode===true){if(_.options.slidesToShow===2){coef=-1.5}else if(_.options.slidesToShow===1){coef=-2}}verticalOffset=verticalHeight*_.options.slidesToShow*coef}if(_.slideCount%_.options.slidesToScroll!==0){if(slideIndex+_.options.slidesToScroll>_.slideCount&&_.slideCount>_.options.slidesToShow){if(slideIndex>_.slideCount){_.slideOffset=(_.options.slidesToShow-(slideIndex-_.slideCount))*_.slideWidth*-1;verticalOffset=(_.options.slidesToShow-(slideIndex-_.slideCount))*verticalHeight*-1}else{_.slideOffset=_.slideCount%_.options.slidesToScroll*_.slideWidth*-1;verticalOffset=_.slideCount%_.options.slidesToScroll*verticalHeight*-1}}}}else{if(slideIndex+_.options.slidesToShow>_.slideCount){_.slideOffset=(slideIndex+_.options.slidesToShow-_.slideCount)*_.slideWidth;verticalOffset=(slideIndex+_.options.slidesToShow-_.slideCount)*verticalHeight}}if(_.slideCount<=_.options.slidesToShow){_.slideOffset=0;verticalOffset=0}if(_.options.centerMode===true&&_.slideCount<=_.options.slidesToShow){_.slideOffset=_.slideWidth*Math.floor(_.options.slidesToShow)/2-_.slideWidth*_.slideCount/2}else if(_.options.centerMode===true&&_.options.infinite===true){_.slideOffset+=_.slideWidth*Math.floor(_.options.slidesToShow/2)-_.slideWidth}else if(_.options.centerMode===true){_.slideOffset=0;_.slideOffset+=_.slideWidth*Math.floor(_.options.slidesToShow/2)}if(_.options.vertical===false){targetLeft=slideIndex*_.slideWidth*-1+_.slideOffset}else{targetLeft=slideIndex*verticalHeight*-1+verticalOffset}if(_.options.variableWidth===true){if(_.slideCount<=_.options.slidesToShow||_.options.infinite===false){targetSlide=_.$slideTrack.children(".slick-slide").eq(slideIndex)}else{targetSlide=_.$slideTrack.children(".slick-slide").eq(slideIndex+_.options.slidesToShow)}if(_.options.rtl===true){if(targetSlide[0]){targetLeft=(_.$slideTrack.width()-targetSlide[0].offsetLeft-targetSlide.width())*-1}else{targetLeft=0}}else{targetLeft=targetSlide[0]?targetSlide[0].offsetLeft*-1:0}if(_.options.centerMode===true){if(_.slideCount<=_.options.slidesToShow||_.options.infinite===false){targetSlide=_.$slideTrack.children(".slick-slide").eq(slideIndex)}else{targetSlide=_.$slideTrack.children(".slick-slide").eq(slideIndex+_.options.slidesToShow+1)}if(_.options.rtl===true){if(targetSlide[0]){targetLeft=(_.$slideTrack.width()-targetSlide[0].offsetLeft-targetSlide.width())*-1}else{targetLeft=0}}else{targetLeft=targetSlide[0]?targetSlide[0].offsetLeft*-1:0}targetLeft+=(_.$list.width()-targetSlide.outerWidth())/2}}return targetLeft};Slick.prototype.getOption=Slick.prototype.slickGetOption=function(option){var _=this;return _.options[option]};Slick.prototype.getNavigableIndexes=function(){var _=this,breakPoint=0,counter=0,indexes=[],max;if(_.options.infinite===false){max=_.slideCount}else{breakPoint=_.options.slidesToScroll*-1;counter=_.options.slidesToScroll*-1;max=_.slideCount*2}while(breakPoint<max){indexes.push(breakPoint);breakPoint=counter+_.options.slidesToScroll;counter+=_.options.slidesToScroll<=_.options.slidesToShow?_.options.slidesToScroll:_.options.slidesToShow}return indexes};Slick.prototype.getSlick=function(){return this};Slick.prototype.getSlideCount=function(){var _=this,slidesTraversed,swipedSlide,swipeTarget,centerOffset;centerOffset=_.options.centerMode===true?Math.floor(_.$list.width()/2):0;swipeTarget=_.swipeLeft*-1+centerOffset;if(_.options.swipeToSlide===true){_.$slideTrack.find(".slick-slide").each(function(index,slide){var slideOuterWidth,slideOffset,slideRightBoundary;slideOuterWidth=$(slide).outerWidth();slideOffset=slide.offsetLeft;if(_.options.centerMode!==true){slideOffset+=slideOuterWidth/2}slideRightBoundary=slideOffset+slideOuterWidth;if(swipeTarget<slideRightBoundary){swipedSlide=slide;return false}});slidesTraversed=Math.abs($(swipedSlide).attr("data-slick-index")-_.currentSlide)||1;return slidesTraversed}else{return _.options.slidesToScroll}};Slick.prototype.goTo=Slick.prototype.slickGoTo=function(slide,dontAnimate){var _=this;_.changeSlide({data:{message:"index",index:parseInt(slide)}},dontAnimate)};Slick.prototype.init=function(creation){var _=this;if(!$(_.$slider).hasClass("slick-initialized")){$(_.$slider).addClass("slick-initialized");_.buildRows();_.buildOut();_.setProps();_.startLoad();_.loadSlider();_.initializeEvents();_.updateArrows();_.updateDots();_.checkResponsive(true);_.focusHandler()}if(creation){_.$slider.trigger("init",[_])}if(_.options.accessibility===true){_.initADA()}if(_.options.autoplay){_.paused=false;_.autoPlay()}};Slick.prototype.initADA=function(){var _=this,numDotGroups=Math.ceil(_.slideCount/_.options.slidesToShow),tabControlIndexes=_.getNavigableIndexes().filter(function(val){return val>=0&&val<_.slideCount});_.$slides.add(_.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"});if(_.$dots!==null){_.$slides.not(_.$slideTrack.find(".slick-cloned")).each(function(i){var slideControlIndex=tabControlIndexes.indexOf(i);$(this).attr({role:"tabpanel",id:"slick-slide"+_.instanceUid+i,tabindex:-1});if(slideControlIndex!==-1){var ariaButtonControl="slick-slide-control"+_.instanceUid+slideControlIndex;if($("#"+ariaButtonControl).length){$(this).attr({"aria-describedby":ariaButtonControl})}}});_.$dots.attr("role","tablist").find("li").each(function(i){var mappedSlideIndex=tabControlIndexes[i];$(this).attr({role:"presentation"});$(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+_.instanceUid+i,"aria-controls":"slick-slide"+_.instanceUid+mappedSlideIndex,"aria-label":i+1+" of "+numDotGroups,"aria-selected":null,tabindex:"-1"})}).eq(_.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end()}for(var i=_.currentSlide,max=i+_.options.slidesToShow;i<max;i++){if(_.options.focusOnChange){_.$slides.eq(i).attr({tabindex:"0"})}else{_.$slides.eq(i).removeAttr("tabindex")}}_.activateADA()};Slick.prototype.initArrowEvents=function(){var _=this;if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow){_.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},_.changeSlide);_.$nextArrow.off("click.slick").on("click.slick",{message:"next"},_.changeSlide);if(_.options.accessibility===true){_.$prevArrow.on("keydown.slick",_.keyHandler);_.$nextArrow.on("keydown.slick",_.keyHandler)}}};Slick.prototype.initDotEvents=function(){var _=this;if(_.options.dots===true&&_.slideCount>_.options.slidesToShow){$("li",_.$dots).on("click.slick",{message:"index"},_.changeSlide);if(_.options.accessibility===true){_.$dots.on("keydown.slick",_.keyHandler)}}if(_.options.dots===true&&_.options.pauseOnDotsHover===true&&_.slideCount>_.options.slidesToShow){$("li",_.$dots).on("mouseenter.slick",$.proxy(_.interrupt,_,true)).on("mouseleave.slick",$.proxy(_.interrupt,_,false))}};Slick.prototype.initSlideEvents=function(){var _=this;if(_.options.pauseOnHover){_.$list.on("mouseenter.slick",$.proxy(_.interrupt,_,true));_.$list.on("mouseleave.slick",$.proxy(_.interrupt,_,false))}};Slick.prototype.initializeEvents=function(){var _=this;_.initArrowEvents();_.initDotEvents();_.initSlideEvents();_.$list.on("touchstart.slick mousedown.slick",{action:"start"},_.swipeHandler);_.$list.on("touchmove.slick mousemove.slick",{action:"move"},_.swipeHandler);_.$list.on("touchend.slick mouseup.slick",{action:"end"},_.swipeHandler);_.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},_.swipeHandler);_.$list.on("click.slick",_.clickHandler);$(document).on(_.visibilityChange,$.proxy(_.visibility,_));if(_.options.accessibility===true){_.$list.on("keydown.slick",_.keyHandler)}if(_.options.focusOnSelect===true){$(_.$slideTrack).children().on("click.slick",_.selectHandler)}$(window).on("orientationchange.slick.slick-"+_.instanceUid,$.proxy(_.orientationChange,_));$(window).on("resize.slick.slick-"+_.instanceUid,$.proxy(_.resize,_));$("[draggable!=true]",_.$slideTrack).on("dragstart",_.preventDefault);$(window).on("load.slick.slick-"+_.instanceUid,_.setPosition);$(_.setPosition)};Slick.prototype.initUI=function(){var _=this;if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow){_.$prevArrow.show();_.$nextArrow.show()}if(_.options.dots===true&&_.slideCount>_.options.slidesToShow){_.$dots.show()}};Slick.prototype.keyHandler=function(event){var _=this;if(!event.target.tagName.match("TEXTAREA|INPUT|SELECT")){if(event.keyCode===37&&_.options.accessibility===true){_.changeSlide({data:{message:_.options.rtl===true?"next":"previous"}})}else if(event.keyCode===39&&_.options.accessibility===true){_.changeSlide({data:{message:_.options.rtl===true?"previous":"next"}})}}};Slick.prototype.lazyLoad=function(){var _=this,loadRange,cloneRange,rangeStart,rangeEnd;function loadImages(imagesScope){$("img[data-lazy]",imagesScope).each(function(){var image=$(this),imageSource=$(this).attr("data-lazy"),imageSrcSet=$(this).attr("data-srcset"),imageSizes=$(this).attr("data-sizes")||_.$slider.attr("data-sizes"),imageToLoad=document.createElement("img");imageToLoad.onload=function(){image.animate({opacity:0},100,function(){if(imageSrcSet){image.attr("srcset",imageSrcSet);if(imageSizes){image.attr("sizes",imageSizes)}}image.attr("src",imageSource).animate({opacity:1},200,function(){image.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")});_.$slider.trigger("lazyLoaded",[_,image,imageSource])})};imageToLoad.onerror=function(){image.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error");_.$slider.trigger("lazyLoadError",[_,image,imageSource])};imageToLoad.src=imageSource})}if(_.options.centerMode===true){if(_.options.infinite===true){rangeStart=_.currentSlide+(_.options.slidesToShow/2+1);rangeEnd=rangeStart+_.options.slidesToShow+2}else{rangeStart=Math.max(0,_.currentSlide-(_.options.slidesToShow/2+1));rangeEnd=2+(_.options.slidesToShow/2+1)+_.currentSlide}}else{rangeStart=_.options.infinite?_.options.slidesToShow+_.currentSlide:_.currentSlide;rangeEnd=Math.ceil(rangeStart+_.options.slidesToShow);if(_.options.fade===true){if(rangeStart>0)rangeStart--;if(rangeEnd<=_.slideCount)rangeEnd++}}loadRange=_.$slider.find(".slick-slide").slice(rangeStart,rangeEnd);if(_.options.lazyLoad==="anticipated"){var prevSlide=rangeStart-1,nextSlide=rangeEnd,$slides=_.$slider.find(".slick-slide");for(var i=0;i<_.options.slidesToScroll;i++){if(prevSlide<0)prevSlide=_.slideCount-1;loadRange=loadRange.add($slides.eq(prevSlide));loadRange=loadRange.add($slides.eq(nextSlide));prevSlide--;nextSlide++}}loadImages(loadRange);if(_.slideCount<=_.options.slidesToShow){cloneRange=_.$slider.find(".slick-slide");loadImages(cloneRange)}else if(_.currentSlide>=_.slideCount-_.options.slidesToShow){cloneRange=_.$slider.find(".slick-cloned").slice(0,_.options.slidesToShow);loadImages(cloneRange)}else if(_.currentSlide===0){cloneRange=_.$slider.find(".slick-cloned").slice(_.options.slidesToShow*-1);loadImages(cloneRange)}};Slick.prototype.loadSlider=function(){var _=this;_.setPosition();_.$slideTrack.css({opacity:1});_.$slider.removeClass("slick-loading");_.initUI();if(_.options.lazyLoad==="progressive"){_.progressiveLazyLoad()}};Slick.prototype.next=Slick.prototype.slickNext=function(){var _=this;_.changeSlide({data:{message:"next"}})};Slick.prototype.orientationChange=function(){var _=this;_.checkResponsive();_.setPosition()};Slick.prototype.pause=Slick.prototype.slickPause=function(){var _=this;_.autoPlayClear();_.paused=true};Slick.prototype.play=Slick.prototype.slickPlay=function(){var _=this;_.autoPlay();_.options.autoplay=true;_.paused=false;_.focussed=false;_.interrupted=false};Slick.prototype.postSlide=function(index){var _=this;if(!_.unslicked){_.$slider.trigger("afterChange",[_,index]);_.animating=false;if(_.slideCount>_.options.slidesToShow){_.setPosition()}_.swipeLeft=null;if(_.options.autoplay){_.autoPlay()}if(_.options.accessibility===true){_.initADA();if(_.options.focusOnChange){var $currentSlide=$(_.$slides.get(_.currentSlide));$currentSlide.attr("tabindex",0).focus()}}}};Slick.prototype.prev=Slick.prototype.slickPrev=function(){var _=this;_.changeSlide({data:{message:"previous"}})};Slick.prototype.preventDefault=function(event){event.preventDefault()};Slick.prototype.progressiveLazyLoad=function(tryCount){tryCount=tryCount||1;var _=this,$imgsToLoad=$("img[data-lazy]",_.$slider),image,imageSource,imageSrcSet,imageSizes,imageToLoad;if($imgsToLoad.length){image=$imgsToLoad.first();imageSource=image.attr("data-lazy");imageSrcSet=image.attr("data-srcset");imageSizes=image.attr("data-sizes")||_.$slider.attr("data-sizes");imageToLoad=document.createElement("img");imageToLoad.onload=function(){if(imageSrcSet){image.attr("srcset",imageSrcSet);if(imageSizes){image.attr("sizes",imageSizes)}}image.attr("src",imageSource).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");if(_.options.adaptiveHeight===true){_.setPosition()}_.$slider.trigger("lazyLoaded",[_,image,imageSource]);_.progressiveLazyLoad()};imageToLoad.onerror=function(){if(tryCount<3){setTimeout(function(){_.progressiveLazyLoad(tryCount+1)},500)}else{image.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error");_.$slider.trigger("lazyLoadError",[_,image,imageSource]);_.progressiveLazyLoad()}};imageToLoad.src=imageSource}else{_.$slider.trigger("allImagesLoaded",[_])}};Slick.prototype.refresh=function(initializing){var _=this,currentSlide,lastVisibleIndex;lastVisibleIndex=_.slideCount-_.options.slidesToShow;if(!_.options.infinite&&_.currentSlide>lastVisibleIndex){_.currentSlide=lastVisibleIndex}if(_.slideCount<=_.options.slidesToShow){_.currentSlide=0}currentSlide=_.currentSlide;_.destroy(true);$.extend(_,_.initials,{currentSlide:currentSlide});_.init();if(!initializing){_.changeSlide({data:{message:"index",index:currentSlide}},false)}};Slick.prototype.registerBreakpoints=function(){var _=this,breakpoint,currentBreakpoint,l,responsiveSettings=_.options.responsive||null;if($.type(responsiveSettings)==="array"&&responsiveSettings.length){_.respondTo=_.options.respondTo||"window";for(breakpoint in responsiveSettings){l=_.breakpoints.length-1;if(responsiveSettings.hasOwnProperty(breakpoint)){currentBreakpoint=responsiveSettings[breakpoint].breakpoint;while(l>=0){if(_.breakpoints[l]&&_.breakpoints[l]===currentBreakpoint){_.breakpoints.splice(l,1)}l--}_.breakpoints.push(currentBreakpoint);_.breakpointSettings[currentBreakpoint]=responsiveSettings[breakpoint].settings}}_.breakpoints.sort(function(a,b){return _.options.mobileFirst?a-b:b-a})}};Slick.prototype.reinit=function(){var _=this;_.$slides=_.$slideTrack.children(_.options.slide).addClass("slick-slide");_.slideCount=_.$slides.length;if(_.currentSlide>=_.slideCount&&_.currentSlide!==0){_.currentSlide=_.currentSlide-_.options.slidesToScroll}if(_.slideCount<=_.options.slidesToShow){_.currentSlide=0}_.registerBreakpoints();_.setProps();_.setupInfinite();_.buildArrows();_.updateArrows();_.initArrowEvents();_.buildDots();_.updateDots();_.initDotEvents();_.cleanUpSlideEvents();_.initSlideEvents();_.checkResponsive(false,true);if(_.options.focusOnSelect===true){$(_.$slideTrack).children().on("click.slick",_.selectHandler)}_.setSlideClasses(typeof _.currentSlide==="number"?_.currentSlide:0);_.setPosition();_.focusHandler();_.paused=!_.options.autoplay;_.autoPlay();_.$slider.trigger("reInit",[_])};Slick.prototype.resize=function(){var _=this;if($(window).width()!==_.windowWidth){clearTimeout(_.windowDelay);_.windowDelay=window.setTimeout(function(){_.windowWidth=$(window).width();_.checkResponsive();if(!_.unslicked){_.setPosition()}},50)}};Slick.prototype.removeSlide=Slick.prototype.slickRemove=function(index,removeBefore,removeAll){var _=this;if(typeof index==="boolean"){removeBefore=index;index=removeBefore===true?0:_.slideCount-1}else{index=removeBefore===true?--index:index}if(_.slideCount<1||index<0||index>_.slideCount-1){return false}_.unload();if(removeAll===true){_.$slideTrack.children().remove()}else{_.$slideTrack.children(this.options.slide).eq(index).remove()}_.$slides=_.$slideTrack.children(this.options.slide);_.$slideTrack.children(this.options.slide).detach();_.$slideTrack.append(_.$slides);_.$slidesCache=_.$slides;_.reinit()};Slick.prototype.setCSS=function(position){var _=this,positionProps={},x,y;if(_.options.rtl===true){position=-position}x=_.positionProp=="left"?Math.ceil(position)+"px":"0px";y=_.positionProp=="top"?Math.ceil(position)+"px":"0px";positionProps[_.positionProp]=position;if(_.transformsEnabled===false){_.$slideTrack.css(positionProps)}else{positionProps={};if(_.cssTransitions===false){positionProps[_.animType]="translate("+x+", "+y+")";_.$slideTrack.css(positionProps)}else{positionProps[_.animType]="translate3d("+x+", "+y+", 0px)";_.$slideTrack.css(positionProps)}}};Slick.prototype.setDimensions=function(){var _=this;if(_.options.vertical===false){if(_.options.centerMode===true){_.$list.css({padding:"0px "+_.options.centerPadding})}}else{_.$list.height(_.$slides.first().outerHeight(true)*_.options.slidesToShow);if(_.options.centerMode===true){_.$list.css({padding:_.options.centerPadding+" 0px"})}}_.listWidth=_.$list.width();_.listHeight=_.$list.height();if(_.options.vertical===false&&_.options.variableWidth===false){_.slideWidth=Math.ceil(_.listWidth/_.options.slidesToShow);_.$slideTrack.width(Math.ceil(_.slideWidth*_.$slideTrack.children(".slick-slide").length))}else if(_.options.variableWidth===true){_.$slideTrack.width(5e3*_.slideCount)}else{_.slideWidth=Math.ceil(_.listWidth);_.$slideTrack.height(Math.ceil(_.$slides.first().outerHeight(true)*_.$slideTrack.children(".slick-slide").length))}var offset=_.$slides.first().outerWidth(true)-_.$slides.first().width();if(_.options.variableWidth===false)_.$slideTrack.children(".slick-slide").width(_.slideWidth-offset)};Slick.prototype.setFade=function(){var _=this,targetLeft;_.$slides.each(function(index,element){targetLeft=_.slideWidth*index*-1;if(_.options.rtl===true){$(element).css({position:"relative",right:targetLeft,top:0,zIndex:_.options.zIndex-2,opacity:0})}else{$(element).css({position:"relative",left:targetLeft,top:0,zIndex:_.options.zIndex-2,opacity:0})}});_.$slides.eq(_.currentSlide).css({zIndex:_.options.zIndex-1,opacity:1})};Slick.prototype.setHeight=function(){var _=this;if(_.options.slidesToShow===1&&_.options.adaptiveHeight===true&&_.options.vertical===false){var targetHeight=_.$slides.eq(_.currentSlide).outerHeight(true);_.$list.css("height",targetHeight)}};Slick.prototype.setOption=Slick.prototype.slickSetOption=function(){var _=this,l,item,option,value,refresh=false,type;if($.type(arguments[0])==="object"){option=arguments[0];refresh=arguments[1];type="multiple"}else if($.type(arguments[0])==="string"){option=arguments[0];value=arguments[1];refresh=arguments[2];if(arguments[0]==="responsive"&&$.type(arguments[1])==="array"){type="responsive"}else if(typeof arguments[1]!=="undefined"){type="single"}}if(type==="single"){_.options[option]=value}else if(type==="multiple"){$.each(option,function(opt,val){_.options[opt]=val})}else if(type==="responsive"){for(item in value){if($.type(_.options.responsive)!=="array"){_.options.responsive=[value[item]]}else{l=_.options.responsive.length-1;while(l>=0){if(_.options.responsive[l].breakpoint===value[item].breakpoint){_.options.responsive.splice(l,1)}l--}_.options.responsive.push(value[item])}}}if(refresh){_.unload();_.reinit()}};Slick.prototype.setPosition=function(){var _=this;_.setDimensions();_.setHeight();if(_.options.fade===false){_.setCSS(_.getLeft(_.currentSlide))}else{_.setFade()}_.$slider.trigger("setPosition",[_])};Slick.prototype.setProps=function(){var _=this,bodyStyle=document.body.style;_.positionProp=_.options.vertical===true?"top":"left";if(_.positionProp==="top"){_.$slider.addClass("slick-vertical")}else{_.$slider.removeClass("slick-vertical")}if(bodyStyle.WebkitTransition!==undefined||bodyStyle.MozTransition!==undefined||bodyStyle.msTransition!==undefined){if(_.options.useCSS===true){_.cssTransitions=true}}if(_.options.fade){if(typeof _.options.zIndex==="number"){if(_.options.zIndex<3){_.options.zIndex=3}}else{_.options.zIndex=_.defaults.zIndex}}if(bodyStyle.OTransform!==undefined){_.animType="OTransform";_.transformType="-o-transform";_.transitionType="OTransition";if(bodyStyle.perspectiveProperty===undefined&&bodyStyle.webkitPerspective===undefined)_.animType=false}if(bodyStyle.MozTransform!==undefined){_.animType="MozTransform";_.transformType="-moz-transform";_.transitionType="MozTransition";if(bodyStyle.perspectiveProperty===undefined&&bodyStyle.MozPerspective===undefined)_.animType=false}if(bodyStyle.webkitTransform!==undefined){_.animType="webkitTransform";_.transformType="-webkit-transform";_.transitionType="webkitTransition";if(bodyStyle.perspectiveProperty===undefined&&bodyStyle.webkitPerspective===undefined)_.animType=false}if(bodyStyle.msTransform!==undefined){_.animType="msTransform";_.transformType="-ms-transform";_.transitionType="msTransition";if(bodyStyle.msTransform===undefined)_.animType=false}if(bodyStyle.transform!==undefined&&_.animType!==false){_.animType="transform";_.transformType="transform";_.transitionType="transition"}_.transformsEnabled=_.options.useTransform&&(_.animType!==null&&_.animType!==false)};Slick.prototype.setSlideClasses=function(index){var _=this,centerOffset,allSlides,indexOffset,remainder;allSlides=_.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true");_.$slides.eq(index).addClass("slick-current");if(_.options.centerMode===true){var evenCoef=_.options.slidesToShow%2===0?1:0;centerOffset=Math.floor(_.options.slidesToShow/2);if(_.options.infinite===true){if(index>=centerOffset&&index<=_.slideCount-1-centerOffset){_.$slides.slice(index-centerOffset+evenCoef,index+centerOffset+1).addClass("slick-active").attr("aria-hidden","false")}else{indexOffset=_.options.slidesToShow+index;allSlides.slice(indexOffset-centerOffset+1+evenCoef,indexOffset+centerOffset+2).addClass("slick-active").attr("aria-hidden","false")}if(index===0){allSlides.eq(allSlides.length-1-_.options.slidesToShow).addClass("slick-center")}else if(index===_.slideCount-1){allSlides.eq(_.options.slidesToShow).addClass("slick-center")}}_.$slides.eq(index).addClass("slick-center")}else{if(index>=0&&index<=_.slideCount-_.options.slidesToShow){_.$slides.slice(index,index+_.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")}else if(allSlides.length<=_.options.slidesToShow){allSlides.addClass("slick-active").attr("aria-hidden","false")}else{remainder=_.slideCount%_.options.slidesToShow;indexOffset=_.options.infinite===true?_.options.slidesToShow+index:index;if(_.options.slidesToShow==_.options.slidesToScroll&&_.slideCount-index<_.options.slidesToShow){allSlides.slice(indexOffset-(_.options.slidesToShow-remainder),indexOffset+remainder).addClass("slick-active").attr("aria-hidden","false")}else{allSlides.slice(indexOffset,indexOffset+_.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")}}}if(_.options.lazyLoad==="ondemand"||_.options.lazyLoad==="anticipated"){_.lazyLoad()}};Slick.prototype.setupInfinite=function(){var _=this,i,slideIndex,infiniteCount;if(_.options.fade===true){_.options.centerMode=false}if(_.options.infinite===true&&_.options.fade===false){slideIndex=null;if(_.slideCount>_.options.slidesToShow){if(_.options.centerMode===true){infiniteCount=_.options.slidesToShow+1}else{infiniteCount=_.options.slidesToShow}for(i=_.slideCount;i>_.slideCount-infiniteCount;i-=1){slideIndex=i-1;$(_.$slides[slideIndex]).clone(true).attr("id","").attr("data-slick-index",slideIndex-_.slideCount).prependTo(_.$slideTrack).addClass("slick-cloned")}for(i=0;i<infiniteCount+_.slideCount;i+=1){slideIndex=i;$(_.$slides[slideIndex]).clone(true).attr("id","").attr("data-slick-index",slideIndex+_.slideCount).appendTo(_.$slideTrack).addClass("slick-cloned")}_.$slideTrack.find(".slick-cloned").find("[id]").each(function(){$(this).attr("id","")})}}};Slick.prototype.interrupt=function(toggle){var _=this;if(!toggle){_.autoPlay()}_.interrupted=toggle};Slick.prototype.selectHandler=function(event){var _=this;var targetElement=$(event.target).is(".slick-slide")?$(event.target):$(event.target).parents(".slick-slide");var index=parseInt(targetElement.attr("data-slick-index"));if(!index)index=0;if(_.slideCount<=_.options.slidesToShow){_.slideHandler(index,false,true);return}_.slideHandler(index)};Slick.prototype.slideHandler=function(index,sync,dontAnimate){var targetSlide,animSlide,oldSlide,slideLeft,targetLeft=null,_=this,navTarget;sync=sync||false;if(_.animating===true&&_.options.waitForAnimate===true){return}if(_.options.fade===true&&_.currentSlide===index){return}if(sync===false){_.asNavFor(index)}targetSlide=index;targetLeft=_.getLeft(targetSlide);slideLeft=_.getLeft(_.currentSlide);_.currentLeft=_.swipeLeft===null?slideLeft:_.swipeLeft;if(_.options.infinite===false&&_.options.centerMode===false&&(index<0||index>_.getDotCount()*_.options.slidesToScroll)){if(_.options.fade===false){targetSlide=_.currentSlide;if(dontAnimate!==true&&_.slideCount>_.options.slidesToShow){_.animateSlide(slideLeft,function(){_.postSlide(targetSlide)})}else{_.postSlide(targetSlide)}}return}else if(_.options.infinite===false&&_.options.centerMode===true&&(index<0||index>_.slideCount-_.options.slidesToScroll)){if(_.options.fade===false){targetSlide=_.currentSlide;if(dontAnimate!==true&&_.slideCount>_.options.slidesToShow){_.animateSlide(slideLeft,function(){_.postSlide(targetSlide)})}else{_.postSlide(targetSlide)}}return}if(_.options.autoplay){clearInterval(_.autoPlayTimer)}if(targetSlide<0){if(_.slideCount%_.options.slidesToScroll!==0){animSlide=_.slideCount-_.slideCount%_.options.slidesToScroll}else{animSlide=_.slideCount+targetSlide}}else if(targetSlide>=_.slideCount){if(_.slideCount%_.options.slidesToScroll!==0){animSlide=0}else{animSlide=targetSlide-_.slideCount}}else{animSlide=targetSlide}_.animating=true;_.$slider.trigger("beforeChange",[_,_.currentSlide,animSlide]);oldSlide=_.currentSlide;_.currentSlide=animSlide;_.setSlideClasses(_.currentSlide);if(_.options.asNavFor){navTarget=_.getNavTarget();navTarget=navTarget.slick("getSlick");if(navTarget.slideCount<=navTarget.options.slidesToShow){navTarget.setSlideClasses(_.currentSlide)}}_.updateDots();_.updateArrows();if(_.options.fade===true){if(dontAnimate!==true){_.fadeSlideOut(oldSlide);_.fadeSlide(animSlide,function(){_.postSlide(animSlide)})}else{_.postSlide(animSlide)}_.animateHeight();return}if(dontAnimate!==true&&_.slideCount>_.options.slidesToShow){_.animateSlide(targetLeft,function(){_.postSlide(animSlide)})}else{_.postSlide(animSlide)}};Slick.prototype.startLoad=function(){var _=this;if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow){_.$prevArrow.hide();_.$nextArrow.hide()}if(_.options.dots===true&&_.slideCount>_.options.slidesToShow){_.$dots.hide()}_.$slider.addClass("slick-loading")};Slick.prototype.swipeDirection=function(){var xDist,yDist,r,swipeAngle,_=this;xDist=_.touchObject.startX-_.touchObject.curX;yDist=_.touchObject.startY-_.touchObject.curY;r=Math.atan2(yDist,xDist);swipeAngle=Math.round(r*180/Math.PI);if(swipeAngle<0){swipeAngle=360-Math.abs(swipeAngle)}if(swipeAngle<=45&&swipeAngle>=0){return _.options.rtl===false?"left":"right"}if(swipeAngle<=360&&swipeAngle>=315){return _.options.rtl===false?"left":"right"}if(swipeAngle>=135&&swipeAngle<=225){return _.options.rtl===false?"right":"left"}if(_.options.verticalSwiping===true){if(swipeAngle>=35&&swipeAngle<=135){return"down"}else{return"up"}}return"vertical"};Slick.prototype.swipeEnd=function(event){var _=this,slideCount,direction;_.dragging=false;_.swiping=false;if(_.scrolling){_.scrolling=false;return false}_.interrupted=false;_.shouldClick=_.touchObject.swipeLength>10?false:true;if(_.touchObject.curX===undefined){return false}if(_.touchObject.edgeHit===true){_.$slider.trigger("edge",[_,_.swipeDirection()])}if(_.touchObject.swipeLength>=_.touchObject.minSwipe){direction=_.swipeDirection();switch(direction){case"left":case"down":slideCount=_.options.swipeToSlide?_.checkNavigable(_.currentSlide+_.getSlideCount()):_.currentSlide+_.getSlideCount();_.currentDirection=0;break;case"right":case"up":slideCount=_.options.swipeToSlide?_.checkNavigable(_.currentSlide-_.getSlideCount()):_.currentSlide-_.getSlideCount();_.currentDirection=1;break;default:}if(direction!="vertical"){_.slideHandler(slideCount);_.touchObject={};_.$slider.trigger("swipe",[_,direction])}}else{if(_.touchObject.startX!==_.touchObject.curX){_.slideHandler(_.currentSlide);_.touchObject={}}}};Slick.prototype.swipeHandler=function(event){var _=this;if(_.options.swipe===false||"ontouchend"in document&&_.options.swipe===false){return}else if(_.options.draggable===false&&event.type.indexOf("mouse")!==-1){return}_.touchObject.fingerCount=event.originalEvent&&event.originalEvent.touches!==undefined?event.originalEvent.touches.length:1;_.touchObject.minSwipe=_.listWidth/_.options.touchThreshold;if(_.options.verticalSwiping===true){_.touchObject.minSwipe=_.listHeight/_.options.touchThreshold}switch(event.data.action){case"start":_.swipeStart(event);break;case"move":_.swipeMove(event);break;case"end":_.swipeEnd(event);break}};Slick.prototype.swipeMove=function(event){var _=this,edgeWasHit=false,curLeft,swipeDirection,swipeLength,positionOffset,touches,verticalSwipeLength;touches=event.originalEvent!==undefined?event.originalEvent.touches:null;if(!_.dragging||_.scrolling||touches&&touches.length!==1){return false}curLeft=_.getLeft(_.currentSlide);_.touchObject.curX=touches!==undefined?touches[0].pageX:event.clientX;_.touchObject.curY=touches!==undefined?touches[0].pageY:event.clientY;_.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(_.touchObject.curX-_.touchObject.startX,2)));verticalSwipeLength=Math.round(Math.sqrt(Math.pow(_.touchObject.curY-_.touchObject.startY,2)));if(!_.options.verticalSwiping&&!_.swiping&&verticalSwipeLength>4){_.scrolling=true;return false}if(_.options.verticalSwiping===true){_.touchObject.swipeLength=verticalSwipeLength}swipeDirection=_.swipeDirection();if(event.originalEvent!==undefined&&_.touchObject.swipeLength>4){_.swiping=true;event.preventDefault()}positionOffset=(_.options.rtl===false?1:-1)*(_.touchObject.curX>_.touchObject.startX?1:-1);if(_.options.verticalSwiping===true){positionOffset=_.touchObject.curY>_.touchObject.startY?1:-1}swipeLength=_.touchObject.swipeLength;_.touchObject.edgeHit=false;if(_.options.infinite===false){if(_.currentSlide===0&&swipeDirection==="right"||_.currentSlide>=_.getDotCount()&&swipeDirection==="left"){swipeLength=_.touchObject.swipeLength*_.options.edgeFriction;_.touchObject.edgeHit=true}}if(_.options.vertical===false){_.swipeLeft=curLeft+swipeLength*positionOffset}else{_.swipeLeft=curLeft+swipeLength*(_.$list.height()/_.listWidth)*positionOffset}if(_.options.verticalSwiping===true){_.swipeLeft=curLeft+swipeLength*positionOffset}if(_.options.fade===true||_.options.touchMove===false){return false}if(_.animating===true){_.swipeLeft=null;return false}_.setCSS(_.swipeLeft)};Slick.prototype.swipeStart=function(event){var _=this,touches;_.interrupted=true;if(_.touchObject.fingerCount!==1||_.slideCount<=_.options.slidesToShow){_.touchObject={};return false}if(event.originalEvent!==undefined&&event.originalEvent.touches!==undefined){touches=event.originalEvent.touches[0]}_.touchObject.startX=_.touchObject.curX=touches!==undefined?touches.pageX:event.clientX;_.touchObject.startY=_.touchObject.curY=touches!==undefined?touches.pageY:event.clientY;_.dragging=true};Slick.prototype.unfilterSlides=Slick.prototype.slickUnfilter=function(){var _=this;if(_.$slidesCache!==null){_.unload();_.$slideTrack.children(this.options.slide).detach();_.$slidesCache.appendTo(_.$slideTrack);_.reinit()}};Slick.prototype.unload=function(){var _=this;$(".slick-cloned",_.$slider).remove();if(_.$dots){_.$dots.remove()}if(_.$prevArrow&&_.htmlExpr.test(_.options.prevArrow)){_.$prevArrow.remove()}if(_.$nextArrow&&_.htmlExpr.test(_.options.nextArrow)){_.$nextArrow.remove()}_.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")};Slick.prototype.unslick=function(fromBreakpoint){var _=this;_.$slider.trigger("unslick",[_,fromBreakpoint]);_.destroy()};Slick.prototype.updateArrows=function(){var _=this,centerOffset;centerOffset=Math.floor(_.options.slidesToShow/2);if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow&&!_.options.infinite){_.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false");_.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false");if(_.currentSlide===0){_.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true");_.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")}else if(_.currentSlide>=_.slideCount-_.options.slidesToShow&&_.options.centerMode===false){_.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true");_.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")}else if(_.currentSlide>=_.slideCount-1&&_.options.centerMode===true){_.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true");_.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")}}};Slick.prototype.updateDots=function(){var _=this;if(_.$dots!==null){_.$dots.find("li").removeClass("slick-active").end();_.$dots.find("li").eq(Math.floor(_.currentSlide/_.options.slidesToScroll)).addClass("slick-active")}};Slick.prototype.visibility=function(){var _=this;if(_.options.autoplay){if(document[_.hidden]){_.interrupted=true}else{_.interrupted=false}}};$.fn.slick=function(){var _=this,opt=arguments[0],args=Array.prototype.slice.call(arguments,1),l=_.length,i,ret;for(i=0;i<l;i++){if(typeof opt=="object"||typeof opt=="undefined")_[i].slick=new Slick(_[i],opt);else ret=_[i].slick[opt].apply(_[i].slick,args);if(typeof ret!="undefined")return ret}return _}});
/**
* jquery.matchHeight.js master
* http://brm.io/jquery-match-height/
* License: MIT
*/

!function(t){var e=-1,a=-1,o=function(t){return parseFloat(t)||0},i=function(e){var a=t(e),i=null,n=[];return a.each(function(){var e=t(this),a=e.offset().top-o(e.css("margin-top")),r=n.length>0?n[n.length-1]:null;null===r?n.push(e):Math.floor(Math.abs(i-a))<=1?n[n.length-1]=r.add(e):n.push(e),i=a}),n},n=function(e){var a={byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof e?t.extend(a,e):("boolean"==typeof e?a.byRow=e:"remove"===e&&(a.remove=!0),a)},r=t.fn.matchHeight=function(e){var a=n(e);if(a.remove){var o=this;return this.css(a.property,""),t.each(r._groups,function(t,e){e.elements=e.elements.not(o)}),this}return this.length<=1&&!a.target?this:(r._groups.push({elements:this,options:a}),r._apply(this,a),this)};r.version="master",r._groups=[],r._throttle=80,r._maintainScroll=!1,r._beforeUpdate=null,r._afterUpdate=null,r._rows=i,r._parse=o,r._parseOptions=n,r._apply=function(e,a){var s=n(a),h=t(e),c=[h],l=t(window).scrollTop(),p=t("html").outerHeight(!0),d=h.parents().filter(":hidden");return d.each(function(){var e=t(this);e.data("style-cache",e.attr("style"))}),d.css("display","block"),s.byRow&&!s.target&&(h.each(function(){var e=t(this),a=e.css("display");"inline-block"!==a&&"inline-flex"!==a&&(a="block"),e.data("style-cache",e.attr("style")),e.css({display:a,"padding-top":"0","padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),c=i(h),h.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||"")})),t.each(c,function(e,a){var i=t(a),n=0;if(s.target)n=s.target.outerHeight(!1);else{if(s.byRow&&i.length<=1)return void i.css(s.property,"");i.each(function(){var e=t(this),a=e.css("display");"inline-block"!==a&&"inline-flex"!==a&&(a="block");var o={display:a};o[s.property]="",e.css(o),e.outerHeight(!1)>n&&(n=e.outerHeight(!1)),e.css("display","")})}i.each(function(){var e=t(this),a=0;s.target&&e.is(s.target)||("border-box"!==e.css("box-sizing")&&(a+=o(e.css("border-top-width"))+o(e.css("border-bottom-width")),a+=o(e.css("padding-top"))+o(e.css("padding-bottom"))),e.css(s.property,n-a+"px"))})}),d.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||null)}),r._maintainScroll&&t(window).scrollTop(l/p*t("html").outerHeight(!0)),this},r._applyDataApi=function(){var e={};t("[data-match-height], [data-mh]").each(function(){var a=t(this),o=a.attr("data-mh")||a.attr("data-match-height");e[o]=o in e?e[o].add(a):a}),t.each(e,function(){this.matchHeight(!0)})};var s=function(e){r._beforeUpdate&&r._beforeUpdate(e,r._groups),t.each(r._groups,function(){r._apply(this.elements,this.options)}),r._afterUpdate&&r._afterUpdate(e,r._groups)};r._update=function(o,i){if(i&&"resize"===i.type){var n=t(window).width();if(n===e)return;e=n}o?-1===a&&(a=setTimeout(function(){s(i),a=-1},r._throttle)):s(i)},t(r._applyDataApi),t(window).bind("load",function(t){r._update(!1,t)}),t(window).bind("resize orientationchange",function(t){r._update(!0,t)})}(jQuery);
/*!
Mailchimp Ajax Submit
jQuery Plugin

*/
(function($){$.ajaxChimp={responses:{"We have sent you a confirmation email":0,"Please enter a value":1,"An email address must contain a single @":2,"The domain portion of the email address is invalid (the portion after the @: )":3,"The username portion of the email address is invalid (the portion before the @: )":4,"This email address looks fake or invalid. Please enter a real email address":5},translations:{en:null},init:function(selector,options){$(selector).ajaxChimp(options)}};$.fn.ajaxChimp=function(options){$(this).each(function(i,elem){var form=$(elem);var email=form.find("input[type=text]");var label=form.find("label[for="+email.attr("id")+"]");var settings=$.extend({url:form.attr("action"),language:"en"},options);var url=settings.url.replace("/post?","/post-json?").concat("&c=?");form.attr("novalidate","true");email.attr("name","EMAIL");form.submit(function(){var msg;function successCallback(resp){if(resp.result==="success"){msg="We have sent you a confirmation email";label.removeClass("error").addClass("valid");email.removeClass("error").addClass("valid")}else{email.removeClass("valid").addClass("error");label.removeClass("valid").addClass("error");var index=-1;try{var parts=resp.msg.split(" - ",2);if(parts[1]===undefined){msg=resp.msg}else{var i=parseInt(parts[0],10);if(i.toString()===parts[0]){index=parts[0];msg=parts[1]}else{index=-1;msg=resp.msg}}}catch(e){index=-1;msg=resp.msg}}if(settings.language!=="en"&&$.ajaxChimp.responses[msg]!==undefined&&$.ajaxChimp.translations&&$.ajaxChimp.translations[settings.language]&&$.ajaxChimp.translations[settings.language][$.ajaxChimp.responses[msg]]){msg=$.ajaxChimp.translations[settings.language][$.ajaxChimp.responses[msg]]}label.html(msg);label.show(2e3);if(settings.callback){settings.callback(resp)}}var data={};var dataArray=form.serializeArray();$.each(dataArray,function(index,item){data[item.name]=item.value});$.ajax({url:url,data:data,success:successCallback,dataType:"jsonp",error:function(resp,text){console.log("mailchimp ajax submit error: "+text)}});var submitMsg="Submitting...";if(settings.language!=="en"&&$.ajaxChimp.translations&&$.ajaxChimp.translations[settings.language]&&$.ajaxChimp.translations[settings.language]["submit"]){submitMsg=$.ajaxChimp.translations[settings.language]["submit"]}label.html(submitMsg).show(2e3);return false})});return this}})(jQuery);
/*!
niceSelect
*/
(function(a){a.fn.niceSelect=function(d){if(typeof d=="string"){if(d=="update"){this.each(function(){var f=a(this);var g=a(this).next(".nice-select");var e=g.hasClass("open");if(g.length){g.remove();c(f);if(e){f.next().trigger("click")}}})}else{if(d=="destroy"){this.each(function(){var e=a(this);var f=a(this).next(".nice-select");if(f.length){f.remove();e.css("display","")}});if(a(".nice-select").length==0){a(document).off(".nice_select")}}else{console.log('Method "'+d+'" does not exist.')}}return this}this.hide();this.each(function(){var e=a(this);if(!e.next().hasClass("nice-select")){c(e)}});function c(g){g.after(a("<div></div>").addClass("nice-select").addClass(g.attr("class")||"").addClass(g.attr("disabled")?"disabled":"").addClass(g.attr("multiple")?"has-multiple":"").attr("tabindex",g.attr("disabled")?null:"0").html(g.attr("multiple")?'<span class="multiple-options"></span><div class="nice-select-search-box"><input type="text" class="nice-select-search" placeholder="جستجو"/></div><ul class="list"></ul>':'<span class="current"></span><div class="nice-select-search-box"><input type="text" class="nice-select-search" placeholder="جستجو"/></div><ul class="list"></ul>'));var h=g.next();var e=g.find("option");if(g.attr("multiple")){var f=g.find("option:selected");var i="";f.each(function(){$selected_option=a(this);$selected_text=$selected_option.data("display")||$selected_option.text();i+='<span class="current">'+$selected_text+"</span>"});$select_placeholder=g.data("placeholder")||g.attr("placeholder");$select_placeholder=$select_placeholder==""?"Select":$select_placeholder;i=i==""?$select_placeholder:i;h.find(".multiple-options").html(i)}else{var f=g.find("option:selected");h.find(".current").html(f.data("display")||f.text())}e.each(function(j){var l=a(this);var k=l.data("display");h.find("ul").append(a("<li></li>").attr("data-value",l.val()).attr("data-display",(k||null)).addClass("option"+(l.is(":selected")?" selected":"")+(l.is(":disabled")?" disabled":"")).html(l.text()))})}a(document).off(".nice_select");a(document).on("click.nice_select",".nice-select",function(e){var f=a(this);a(".nice-select").not(f).removeClass("open");f.toggleClass("open");if(f.hasClass("open")){f.find(".option");f.find(".nice-select-search").val("");f.find(".nice-select-search").focus();f.find(".focus").removeClass("focus");f.find(".selected").addClass("focus");f.find("ul li").show()}else{f.focus()}});a(document).on("click",".nice-select-search-box",function(e){e.stopPropagation();return false});a(document).on("click.nice_select",function(e){if(a(e.target).closest(".nice-select").length===0){a(".nice-select").removeClass("open").find(".option")}});a(document).on("click.nice_select",".nice-select .option:not(.disabled)",function(e){var g=a(this);var f=g.closest(".nice-select");if(f.hasClass("has-multiple")){if(g.hasClass("selected")){g.removeClass("selected")}else{g.addClass("selected")}$selected_html="";$selected_values=[];f.find(".selected").each(function(){$selected_option=a(this);var i=$selected_option.data("display")||$selected_option.text();$selected_html+='<span class="current">'+i+"</span>";$selected_values.push($selected_option.data("value"))});$select_placeholder=f.prev("select").data("placeholder")||f.prev("select").attr("placeholder");$select_placeholder=$select_placeholder==""?"Select":$select_placeholder;$selected_html=$selected_html==""?$select_placeholder:$selected_html;f.find(".multiple-options").html($selected_html);f.prev("select").val($selected_values).trigger("change")}else{f.find(".selected").removeClass("selected");g.addClass("selected");var h=g.data("display")||g.text();f.find(".current").text(h);f.prev("select").val(g.data("value")).trigger("change")}});a(document).on("keydown.nice_select",".nice-select",function(g){var h=a(this);var i=a(h.find(".focus")||h.find(".list .option.selected"));if(g.keyCode==32||g.keyCode==13){if(h.hasClass("open")){i.trigger("click")}else{h.trigger("click")}return false}else{if(g.keyCode==40){if(!h.hasClass("open")){h.trigger("click")}else{var e=i.nextAll(".option:not(.disabled)").first();if(e.length>0){h.find(".focus").removeClass("focus");e.addClass("focus")}}return false}else{if(g.keyCode==38){if(!h.hasClass("open")){h.trigger("click")}else{var f=i.prevAll(".option:not(.disabled)").first();if(f.length>0){h.find(".focus").removeClass("focus");f.addClass("focus")}}return false}else{if(g.keyCode==27){if(h.hasClass("open")){h.trigger("click")}}else{if(g.keyCode==9){if(h.hasClass("open")){return false}}}}}}});a(document).on("keydown.nice-select-search",".nice-select",function(){var h=a(this);var g=h.find(".nice-select-search").val();var e=h.find("ul li");if(g==""){e.show()}else{if(h.hasClass("open")){g=g.toLowerCase();var f=new RegExp(g);if(0<e.length){e.each(function(){var j=a(this);var k=j.text().toLowerCase();var i=f.test(k);i?j.show():j.hide()})}else{e.show()}}}});var b=document.createElement("a").style;b.cssText="pointer-events:auto";if(b.pointerEvents!=="auto"){a("html").addClass("no-csspointerevents")}return this}}(jQuery));
// Ion.RangeSlider
// version 2.2.0 Build: 380
// © Denis Ineshin, 2017
// https://github.com/IonDen
//
// Project page:    http://ionden.com/a/plugins/ion.rangeSlider/en.html
// GitHub page:     https://github.com/IonDen/ion.rangeSlider
//
// Released under MIT licence:
// http://ionden.com/a/plugins/licence-en.html
// =====================================================================================================================

;(function(factory) {
	if (typeof define === "function" && define.amd) {
		define(["jquery"], function (jQuery) {
			return factory(jQuery, document, window, navigator);
		});
	} else if (typeof exports === "object") {
		factory(require("jquery"), document, window, navigator);
	} else {
		factory(jQuery, document, window, navigator);
	}
} (function ($, document, window, navigator, undefined) {
	"use strict";

	// =================================================================================================================
	// Service

	var plugin_count = 0;

	// IE8 fix
	var is_old_ie = (function () {
		var n = navigator.userAgent,
			r = /msie\s\d+/i,
			v;
		if (n.search(r) > 0) {
			v = r.exec(n).toString();
			v = v.split(" ")[1];
			if (v < 9) {
				$("html").addClass("lt-ie9");
				return true;
			}
		}
		return false;
	} ());
	if (!Function.prototype.bind) {
		Function.prototype.bind = function bind(that) {

			var target = this;
			var slice = [].slice;

			if (typeof target != "function") {
				throw new TypeError();
			}

			var args = slice.call(arguments, 1),
				bound = function () {

					if (this instanceof bound) {

						var F = function(){};
						F.prototype = target.prototype;
						var self = new F();

						var result = target.apply(
							self,
							args.concat(slice.call(arguments))
						);
						if (Object(result) === result) {
							return result;
						}
						return self;

					} else {

						return target.apply(
							that,
							args.concat(slice.call(arguments))
						);

					}

				};

			return bound;
		};
	}
	if (!Array.prototype.indexOf) {
		Array.prototype.indexOf = function(searchElement, fromIndex) {
			var k;
			if (this == null) {
				throw new TypeError('"this" is null or not defined');
			}
			var O = Object(this);
			var len = O.length >>> 0;
			if (len === 0) {
				return -1;
			}
			var n = +fromIndex || 0;
			if (Math.abs(n) === Infinity) {
				n = 0;
			}
			if (n >= len) {
				return -1;
			}
			k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
			while (k < len) {
				if (k in O && O[k] === searchElement) {
					return k;
				}
				k++;
			}
			return -1;
		};
	}



	// =================================================================================================================
	// Template

	var base_html =
		'<span class="irs">' +
		'<span class="irs-line" tabindex="0"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span>' +
		'<span class="irs-min">0</span><span class="irs-max">1</span>' +
		'<span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span>' +
		'</span>' +
		'<span class="irs-grid"></span>' +
		'<span class="irs-bar"></span>';

	var single_html =
		'<span class="irs-bar-edge"></span>' +
		'<span class="irs-shadow shadow-single"></span>' +
		'<span class="irs-slider single"></span>';

	var double_html =
		'<span class="irs-shadow shadow-from"></span>' +
		'<span class="irs-shadow shadow-to"></span>' +
		'<span class="irs-slider from"></span>' +
		'<span class="irs-slider to"></span>';

	var disable_html =
		'<span class="irs-disable-mask"></span>';



	// =================================================================================================================
	// Core

	/**
	 * Main plugin constructor
	 *
	 * @param input {Object} link to base input element
	 * @param options {Object} slider config
	 * @param plugin_count {Number}
	 * @constructor
	 */
	var IonRangeSlider = function (input, options, plugin_count) {
		this.VERSION = "2.2.0";
		this.input = input;
		this.plugin_count = plugin_count;
		this.current_plugin = 0;
		this.calc_count = 0;
		this.update_tm = 0;
		this.old_from = 0;
		this.old_to = 0;
		this.old_min_interval = null;
		this.raf_id = null;
		this.dragging = false;
		this.force_redraw = false;
		this.no_diapason = false;
		this.has_tab_index = true;
		this.is_key = false;
		this.is_update = false;
		this.is_start = true;
		this.is_finish = false;
		this.is_active = false;
		this.is_resize = false;
		this.is_click = false;

		options = options || {};

		// cache for links to all DOM elements
		this.$cache = {
			win: $(window),
			body: $(document.body),
			input: $(input),
			cont: null,
			rs: null,
			min: null,
			max: null,
			from: null,
			to: null,
			single: null,
			bar: null,
			line: null,
			s_single: null,
			s_from: null,
			s_to: null,
			shad_single: null,
			shad_from: null,
			shad_to: null,
			edge: null,
			grid: null,
			grid_labels: []
		};

		// storage for measure variables
		this.coords = {
			// left
			x_gap: 0,
			x_pointer: 0,

			// width
			w_rs: 0,
			w_rs_old: 0,
			w_handle: 0,

			// percents
			p_gap: 0,
			p_gap_left: 0,
			p_gap_right: 0,
			p_step: 0,
			p_pointer: 0,
			p_handle: 0,
			p_single_fake: 0,
			p_single_real: 0,
			p_from_fake: 0,
			p_from_real: 0,
			p_to_fake: 0,
			p_to_real: 0,
			p_bar_x: 0,
			p_bar_w: 0,

			// grid
			grid_gap: 0,
			big_num: 0,
			big: [],
			big_w: [],
			big_p: [],
			big_x: []
		};

		// storage for labels measure variables
		this.labels = {
			// width
			w_min: 0,
			w_max: 0,
			w_from: 0,
			w_to: 0,
			w_single: 0,

			// percents
			p_min: 0,
			p_max: 0,
			p_from_fake: 0,
			p_from_left: 0,
			p_to_fake: 0,
			p_to_left: 0,
			p_single_fake: 0,
			p_single_left: 0
		};



		/**
		 * get and validate config
		 */
		var $inp = this.$cache.input,
			val = $inp.prop("value"),
			config, config_from_data, prop;

		// default config
		config = {
			type: "single",

			min: 10,
			max: 100,
			from: null,
			to: null,
			step: 1,

			min_interval: 0,
			max_interval: 0,
			drag_interval: false,

			values: [],
			p_values: [],

			from_fixed: false,
			from_min: null,
			from_max: null,
			from_shadow: false,

			to_fixed: false,
			to_min: null,
			to_max: null,
			to_shadow: false,

			prettify_enabled: true,
			prettify_separator: " ",
			prettify: null,

			force_edges: false,

			keyboard: true,

			grid: false,
			grid_margin: true,
			grid_num: 4,
			grid_snap: false,

			hide_min_max: false,
			hide_from_to: false,

			prefix: "",
			postfix: "",
			max_postfix: "",
			decorate_both: true,
			values_separator: " — ",

			input_values_separator: ";",

			disable: false,
			block: false,

			extra_classes: "",

			scope: null,
			onStart: null,
			onChange: null,
			onFinish: null,
			onUpdate: null
		};


		// check if base element is input
		if ($inp[0].nodeName !== "INPUT") {
			console && console.warn && console.warn("Base element should be <input>!", $inp[0]);
		}


		// config from data-attributes extends js config
		config_from_data = {
			type: $inp.data("type"),

			min: $inp.data("min"),
			max: $inp.data("max"),
			from: $inp.data("from"),
			to: $inp.data("to"),
			step: $inp.data("step"),

			min_interval: $inp.data("minInterval"),
			max_interval: $inp.data("maxInterval"),
			drag_interval: $inp.data("dragInterval"),

			values: $inp.data("values"),

			from_fixed: $inp.data("fromFixed"),
			from_min: $inp.data("fromMin"),
			from_max: $inp.data("fromMax"),
			from_shadow: $inp.data("fromShadow"),

			to_fixed: $inp.data("toFixed"),
			to_min: $inp.data("toMin"),
			to_max: $inp.data("toMax"),
			to_shadow: $inp.data("toShadow"),

			prettify_enabled: $inp.data("prettifyEnabled"),
			prettify_separator: $inp.data("prettifySeparator"),

			force_edges: $inp.data("forceEdges"),

			keyboard: $inp.data("keyboard"),

			grid: $inp.data("grid"),
			grid_margin: $inp.data("gridMargin"),
			grid_num: $inp.data("gridNum"),
			grid_snap: $inp.data("gridSnap"),

			hide_min_max: $inp.data("hideMinMax"),
			hide_from_to: $inp.data("hideFromTo"),

			prefix: $inp.data("prefix"),
			postfix: $inp.data("postfix"),
			max_postfix: $inp.data("maxPostfix"),
			decorate_both: $inp.data("decorateBoth"),
			values_separator: $inp.data("valuesSeparator"),

			input_values_separator: $inp.data("inputValuesSeparator"),

			disable: $inp.data("disable"),
			block: $inp.data("block"),

			extra_classes: $inp.data("extraClasses"),
		};
		config_from_data.values = config_from_data.values && config_from_data.values.split(",");

		for (prop in config_from_data) {
			if (config_from_data.hasOwnProperty(prop)) {
				if (config_from_data[prop] === undefined || config_from_data[prop] === "") {
					delete config_from_data[prop];
				}
			}
		}


		// input value extends default config
		if (val !== undefined && val !== "") {
			val = val.split(config_from_data.input_values_separator || options.input_values_separator || ";");

			if (val[0] && val[0] == +val[0]) {
				val[0] = +val[0];
			}
			if (val[1] && val[1] == +val[1]) {
				val[1] = +val[1];
			}

			if (options && options.values && options.values.length) {
				config.from = val[0] && options.values.indexOf(val[0]);
				config.to = val[1] && options.values.indexOf(val[1]);
			} else {
				config.from = val[0] && +val[0];
				config.to = val[1] && +val[1];
			}
		}



		// js config extends default config
		$.extend(config, options);


		// data config extends config
		$.extend(config, config_from_data);
		this.options = config;



		// validate config, to be sure that all data types are correct
		this.update_check = {};
		this.validate();



		// default result object, returned to callbacks
		this.result = {
			input: this.$cache.input,
			slider: null,

			min: this.options.min,
			max: this.options.max,

			from: this.options.from,
			from_percent: 0,
			from_value: null,

			to: this.options.to,
			to_percent: 0,
			to_value: null
		};



		this.init();
	};

	IonRangeSlider.prototype = {

		/**
		 * Starts or updates the plugin instance
		 *
		 * @param [is_update] {boolean}
		 */
		init: function (is_update) {
			this.no_diapason = false;
			this.coords.p_step = this.convertToPercent(this.options.step, true);

			this.target = "base";

			this.toggleInput();
			this.append();
			this.setMinMax();

			if (is_update) {
				this.force_redraw = true;
				this.calc(true);

				// callbacks called
				this.callOnUpdate();
			} else {
				this.force_redraw = true;
				this.calc(true);

				// callbacks called
				this.callOnStart();
			}

			this.updateScene();
		},

		/**
		 * Appends slider template to a DOM
		 */
		append: function () {
			var container_html = '<span class="irs js-irs-' + this.plugin_count + ' ' + this.options.extra_classes + '"></span>';
			this.$cache.input.before(container_html);
			this.$cache.input.prop("readonly", true);
			this.$cache.cont = this.$cache.input.prev();
			this.result.slider = this.$cache.cont;

			this.$cache.cont.html(base_html);
			this.$cache.rs = this.$cache.cont.find(".irs");
			this.$cache.min = this.$cache.cont.find(".irs-min");
			this.$cache.max = this.$cache.cont.find(".irs-max");
			this.$cache.from = this.$cache.cont.find(".irs-from");
			this.$cache.to = this.$cache.cont.find(".irs-to");
			this.$cache.single = this.$cache.cont.find(".irs-single");
			this.$cache.bar = this.$cache.cont.find(".irs-bar");
			this.$cache.line = this.$cache.cont.find(".irs-line");
			this.$cache.grid = this.$cache.cont.find(".irs-grid");

			if (this.options.type === "single") {
				this.$cache.cont.append(single_html);
				this.$cache.edge = this.$cache.cont.find(".irs-bar-edge");
				this.$cache.s_single = this.$cache.cont.find(".single");
				this.$cache.from[0].style.visibility = "hidden";
				this.$cache.to[0].style.visibility = "hidden";
				this.$cache.shad_single = this.$cache.cont.find(".shadow-single");
			} else {
				this.$cache.cont.append(double_html);
				this.$cache.s_from = this.$cache.cont.find(".from");
				this.$cache.s_to = this.$cache.cont.find(".to");
				this.$cache.shad_from = this.$cache.cont.find(".shadow-from");
				this.$cache.shad_to = this.$cache.cont.find(".shadow-to");

				this.setTopHandler();
			}

			if (this.options.hide_from_to) {
				this.$cache.from[0].style.display = "none";
				this.$cache.to[0].style.display = "none";
				this.$cache.single[0].style.display = "none";
			}

			this.appendGrid();

			if (this.options.disable) {
				this.appendDisableMask();
				this.$cache.input[0].disabled = true;
			} else {
				this.$cache.input[0].disabled = false;
				this.removeDisableMask();
				this.bindEvents();
			}

			// block only if not disabled
			if (!this.options.disable) {
				if (this.options.block) {
					this.appendDisableMask();
				} else {
					this.removeDisableMask();
				}
			}

			if (this.options.drag_interval) {
				this.$cache.bar[0].style.cursor = "ew-resize";
			}
		},

		/**
		 * Determine which handler has a priority
		 * works only for double slider type
		 */
		setTopHandler: function () {
			var min = this.options.min,
				max = this.options.max,
				from = this.options.from,
				to = this.options.to;

			if (from > min && to === max) {
				this.$cache.s_from.addClass("type_last");
			} else if (to < max) {
				this.$cache.s_to.addClass("type_last");
			}
		},

		/**
		 * Determine which handles was clicked last
		 * and which handler should have hover effect
		 *
		 * @param target {String}
		 */
		changeLevel: function (target) {
			switch (target) {
				case "single":
					this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_single_fake);
					this.$cache.s_single.addClass("state_hover");
					break;
				case "from":
					this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake);
					this.$cache.s_from.addClass("state_hover");
					this.$cache.s_from.addClass("type_last");
					this.$cache.s_to.removeClass("type_last");
					break;
				case "to":
					this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_to_fake);
					this.$cache.s_to.addClass("state_hover");
					this.$cache.s_to.addClass("type_last");
					this.$cache.s_from.removeClass("type_last");
					break;
				case "both":
					this.coords.p_gap_left = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake);
					this.coords.p_gap_right = this.toFixed(this.coords.p_to_fake - this.coords.p_pointer);
					this.$cache.s_to.removeClass("type_last");
					this.$cache.s_from.removeClass("type_last");
					break;
			}
		},

		/**
		 * Then slider is disabled
		 * appends extra layer with opacity
		 */
		appendDisableMask: function () {
			this.$cache.cont.append(disable_html);
			this.$cache.cont.addClass("irs-disabled");
		},

		/**
		 * Then slider is not disabled
		 * remove disable mask
		 */
		removeDisableMask: function () {
			this.$cache.cont.remove(".irs-disable-mask");
			this.$cache.cont.removeClass("irs-disabled");
		},

		/**
		 * Remove slider instance
		 * and unbind all events
		 */
		remove: function () {
			this.$cache.cont.remove();
			this.$cache.cont = null;

			this.$cache.line.off("keydown.irs_" + this.plugin_count);

			this.$cache.body.off("touchmove.irs_" + this.plugin_count);
			this.$cache.body.off("mousemove.irs_" + this.plugin_count);

			this.$cache.win.off("touchend.irs_" + this.plugin_count);
			this.$cache.win.off("mouseup.irs_" + this.plugin_count);

			if (is_old_ie) {
				this.$cache.body.off("mouseup.irs_" + this.plugin_count);
				this.$cache.body.off("mouseleave.irs_" + this.plugin_count);
			}

			this.$cache.grid_labels = [];
			this.coords.big = [];
			this.coords.big_w = [];
			this.coords.big_p = [];
			this.coords.big_x = [];

			cancelAnimationFrame(this.raf_id);
		},

		/**
		 * bind all slider events
		 */
		bindEvents: function () {
			if (this.no_diapason) {
				return;
			}

			this.$cache.body.on("touchmove.irs_" + this.plugin_count, this.pointerMove.bind(this));
			this.$cache.body.on("mousemove.irs_" + this.plugin_count, this.pointerMove.bind(this));

			this.$cache.win.on("touchend.irs_" + this.plugin_count, this.pointerUp.bind(this));
			this.$cache.win.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this));

			this.$cache.line.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
			this.$cache.line.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));

			this.$cache.line.on("focus.irs_" + this.plugin_count, this.pointerFocus.bind(this));

			if (this.options.drag_interval && this.options.type === "double") {
				this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "both"));
				this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "both"));
			} else {
				this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
				this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
			}

			if (this.options.type === "single") {
				this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single"));
				this.$cache.s_single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single"));
				this.$cache.shad_single.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));

				this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single"));
				this.$cache.s_single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single"));
				this.$cache.edge.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
				this.$cache.shad_single.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
			} else {
				this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, null));
				this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, null));

				this.$cache.from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from"));
				this.$cache.s_from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from"));
				this.$cache.to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to"));
				this.$cache.s_to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to"));
				this.$cache.shad_from.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
				this.$cache.shad_to.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));

				this.$cache.from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from"));
				this.$cache.s_from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from"));
				this.$cache.to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to"));
				this.$cache.s_to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to"));
				this.$cache.shad_from.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
				this.$cache.shad_to.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
			}

			if (this.options.keyboard) {
				this.$cache.line.on("keydown.irs_" + this.plugin_count, this.key.bind(this, "keyboard"));
			}

			if (is_old_ie) {
				this.$cache.body.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this));
				this.$cache.body.on("mouseleave.irs_" + this.plugin_count, this.pointerUp.bind(this));
			}
		},

		/**
		 * Focus with tabIndex
		 *
		 * @param e {Object} event object
		 */
		pointerFocus: function (e) {
			if (!this.target) {
				var x;
				var $handle;

				if (this.options.type === "single") {
					$handle = this.$cache.single;
				} else {
					$handle = this.$cache.from;
				}

				x = $handle.offset().left;
				x += ($handle.width() / 2) - 1;

				this.pointerClick("single", {preventDefault: function () {}, pageX: x});
			}
		},

		/**
		 * Mousemove or touchmove
		 * only for handlers
		 *
		 * @param e {Object} event object
		 */
		pointerMove: function (e) {
			if (!this.dragging) {
				return;
			}

			var x = e.pageX || e.originalEvent.touches && e.originalEvent.touches[0].pageX;
			this.coords.x_pointer = x - this.coords.x_gap;

			this.calc();
		},

		/**
		 * Mouseup or touchend
		 * only for handlers
		 *
		 * @param e {Object} event object
		 */
		pointerUp: function (e) {
			if (this.current_plugin !== this.plugin_count) {
				return;
			}

			if (this.is_active) {
				this.is_active = false;
			} else {
				return;
			}

			this.$cache.cont.find(".state_hover").removeClass("state_hover");

			this.force_redraw = true;

			if (is_old_ie) {
				$("*").prop("unselectable", false);
			}

			this.updateScene();
			this.restoreOriginalMinInterval();

			// callbacks call
			if ($.contains(this.$cache.cont[0], e.target) || this.dragging) {
				this.callOnFinish();
			}

			this.dragging = false;
		},

		/**
		 * Mousedown or touchstart
		 * only for handlers
		 *
		 * @param target {String|null}
		 * @param e {Object} event object
		 */
		pointerDown: function (target, e) {
			e.preventDefault();
			var x = e.pageX || e.originalEvent.touches && e.originalEvent.touches[0].pageX;
			if (e.button === 2) {
				return;
			}

			if (target === "both") {
				this.setTempMinInterval();
			}

			if (!target) {
				target = this.target || "from";
			}

			this.current_plugin = this.plugin_count;
			this.target = target;

			this.is_active = true;
			this.dragging = true;

			this.coords.x_gap = this.$cache.rs.offset().left;
			this.coords.x_pointer = x - this.coords.x_gap;

			this.calcPointerPercent();
			this.changeLevel(target);

			if (is_old_ie) {
				$("*").prop("unselectable", true);
			}

			this.$cache.line.trigger("focus");

			this.updateScene();
		},

		/**
		 * Mousedown or touchstart
		 * for other slider elements, like diapason line
		 *
		 * @param target {String}
		 * @param e {Object} event object
		 */
		pointerClick: function (target, e) {
			e.preventDefault();
			var x = e.pageX || e.originalEvent.touches && e.originalEvent.touches[0].pageX;
			if (e.button === 2) {
				return;
			}

			this.current_plugin = this.plugin_count;
			this.target = target;

			this.is_click = true;
			this.coords.x_gap = this.$cache.rs.offset().left;
			this.coords.x_pointer = +(x - this.coords.x_gap).toFixed();

			this.force_redraw = true;
			this.calc();

			this.$cache.line.trigger("focus");
		},

		/**
		 * Keyborard controls for focused slider
		 *
		 * @param target {String}
		 * @param e {Object} event object
		 * @returns {boolean|undefined}
		 */
		key: function (target, e) {
			if (this.current_plugin !== this.plugin_count || e.altKey || e.ctrlKey || e.shiftKey || e.metaKey) {
				return;
			}

			switch (e.which) {
				case 83: // W
				case 65: // A
				case 40: // DOWN
				case 37: // LEFT
					e.preventDefault();
					this.moveByKey(false);
					break;

				case 87: // S
				case 68: // D
				case 38: // UP
				case 39: // RIGHT
					e.preventDefault();
					this.moveByKey(true);
					break;
			}

			return true;
		},

		/**
		 * Move by key
		 *
		 * @param right {boolean} direction to move
		 */
		moveByKey: function (right) {
			var p = this.coords.p_pointer;
			var p_step = (this.options.max - this.options.min) / 100;
			p_step = this.options.step / p_step;

			if (right) {
				p += p_step;
			} else {
				p -= p_step;
			}

			this.coords.x_pointer = this.toFixed(this.coords.w_rs / 100 * p);
			this.is_key = true;
			this.calc();
		},

		/**
		 * Set visibility and content
		 * of Min and Max labels
		 */
		setMinMax: function () {
			if (!this.options) {
				return;
			}

			if (this.options.hide_min_max) {
				this.$cache.min[0].style.display = "none";
				this.$cache.max[0].style.display = "none";
				return;
			}

			if (this.options.values.length) {
				this.$cache.min.html(this.decorate(this.options.p_values[this.options.min]));
				this.$cache.max.html(this.decorate(this.options.p_values[this.options.max]));
			} else {
				var min_pretty = this._prettify(this.options.min);
				var max_pretty = this._prettify(this.options.max);

				this.result.min_pretty = min_pretty;
				this.result.max_pretty = max_pretty;

				this.$cache.min.html(this.decorate(min_pretty, this.options.min));
				this.$cache.max.html(this.decorate(max_pretty, this.options.max));
			}

			this.labels.w_min = this.$cache.min.outerWidth(false);
			this.labels.w_max = this.$cache.max.outerWidth(false);
		},

		/**
		 * Then dragging interval, prevent interval collapsing
		 * using min_interval option
		 */
		setTempMinInterval: function () {
			var interval = this.result.to - this.result.from;

			if (this.old_min_interval === null) {
				this.old_min_interval = this.options.min_interval;
			}

			this.options.min_interval = interval;
		},

		/**
		 * Restore min_interval option to original
		 */
		restoreOriginalMinInterval: function () {
			if (this.old_min_interval !== null) {
				this.options.min_interval = this.old_min_interval;
				this.old_min_interval = null;
			}
		},



		// =============================================================================================================
		// Calculations

		/**
		 * All calculations and measures start here
		 *
		 * @param update {boolean=}
		 */
		calc: function (update) {
			if (!this.options) {
				return;
			}

			this.calc_count++;

			if (this.calc_count === 10 || update) {
				this.calc_count = 0;
				this.coords.w_rs = this.$cache.rs.outerWidth(false);

				this.calcHandlePercent();
			}

			if (!this.coords.w_rs) {
				return;
			}

			this.calcPointerPercent();
			var handle_x = this.getHandleX();


			if (this.target === "both") {
				this.coords.p_gap = 0;
				handle_x = this.getHandleX();
			}

			if (this.target === "click") {
				this.coords.p_gap = this.coords.p_handle / 2;
				handle_x = this.getHandleX();

				if (this.options.drag_interval) {
					this.target = "both_one";
				} else {
					this.target = this.chooseHandle(handle_x);
				}
			}

			switch (this.target) {
				case "base":
					var w = (this.options.max - this.options.min) / 100,
						f = (this.result.from - this.options.min) / w,
						t = (this.result.to - this.options.min) / w;

					this.coords.p_single_real = this.toFixed(f);
					this.coords.p_from_real = this.toFixed(f);
					this.coords.p_to_real = this.toFixed(t);

					this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max);
					this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);
					this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);

					this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real);
					this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);
					this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);

					this.target = null;

					break;

				case "single":
					if (this.options.from_fixed) {
						break;
					}

					this.coords.p_single_real = this.convertToRealPercent(handle_x);
					this.coords.p_single_real = this.calcWithStep(this.coords.p_single_real);
					this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max);

					this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real);

					break;

				case "from":
					if (this.options.from_fixed) {
						break;
					}

					this.coords.p_from_real = this.convertToRealPercent(handle_x);
					this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real);
					if (this.coords.p_from_real > this.coords.p_to_real) {
						this.coords.p_from_real = this.coords.p_to_real;
					}
					this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);
					this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from");
					this.coords.p_from_real = this.checkMaxInterval(this.coords.p_from_real, this.coords.p_to_real, "from");

					this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);

					break;

				case "to":
					if (this.options.to_fixed) {
						break;
					}

					this.coords.p_to_real = this.convertToRealPercent(handle_x);
					this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real);
					if (this.coords.p_to_real < this.coords.p_from_real) {
						this.coords.p_to_real = this.coords.p_from_real;
					}
					this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);
					this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to");
					this.coords.p_to_real = this.checkMaxInterval(this.coords.p_to_real, this.coords.p_from_real, "to");

					this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);

					break;

				case "both":
					if (this.options.from_fixed || this.options.to_fixed) {
						break;
					}

					handle_x = this.toFixed(handle_x + (this.coords.p_handle * 0.001));

					this.coords.p_from_real = this.convertToRealPercent(handle_x) - this.coords.p_gap_left;
					this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real);
					this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);
					this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from");
					this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);

					this.coords.p_to_real = this.convertToRealPercent(handle_x) + this.coords.p_gap_right;
					this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real);
					this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);
					this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to");
					this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);

					break;

				case "both_one":
					if (this.options.from_fixed || this.options.to_fixed) {
						break;
					}

					var real_x = this.convertToRealPercent(handle_x),
						from = this.result.from_percent,
						to = this.result.to_percent,
						full = to - from,
						half = full / 2,
						new_from = real_x - half,
						new_to = real_x + half;

					if (new_from < 0) {
						new_from = 0;
						new_to = new_from + full;
					}

					if (new_to > 100) {
						new_to = 100;
						new_from = new_to - full;
					}

					this.coords.p_from_real = this.calcWithStep(new_from);
					this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);
					this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);

					this.coords.p_to_real = this.calcWithStep(new_to);
					this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);
					this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);

					break;
			}

			if (this.options.type === "single") {
				this.coords.p_bar_x = (this.coords.p_handle / 2);
				this.coords.p_bar_w = this.coords.p_single_fake;

				this.result.from_percent = this.coords.p_single_real;
				this.result.from = this.convertToValue(this.coords.p_single_real);
				this.result.from_pretty = this._prettify(this.result.from);

				if (this.options.values.length) {
					this.result.from_value = this.options.values[this.result.from];
				}
			} else {
				this.coords.p_bar_x = this.toFixed(this.coords.p_from_fake + (this.coords.p_handle / 2));
				this.coords.p_bar_w = this.toFixed(this.coords.p_to_fake - this.coords.p_from_fake);

				this.result.from_percent = this.coords.p_from_real;
				this.result.from = this.convertToValue(this.coords.p_from_real);
				this.result.from_pretty = this._prettify(this.result.from);
				this.result.to_percent = this.coords.p_to_real;
				this.result.to = this.convertToValue(this.coords.p_to_real);
				this.result.to_pretty = this._prettify(this.result.to);

				if (this.options.values.length) {
					this.result.from_value = this.options.values[this.result.from];
					this.result.to_value = this.options.values[this.result.to];
				}
			}

			this.calcMinMax();
			this.calcLabels();
		},


		/**
		 * calculates pointer X in percent
		 */
		calcPointerPercent: function () {
			if (!this.coords.w_rs) {
				this.coords.p_pointer = 0;
				return;
			}

			if (this.coords.x_pointer < 0 || isNaN(this.coords.x_pointer)  ) {
				this.coords.x_pointer = 0;
			} else if (this.coords.x_pointer > this.coords.w_rs) {
				this.coords.x_pointer = this.coords.w_rs;
			}

			this.coords.p_pointer = this.toFixed(this.coords.x_pointer / this.coords.w_rs * 100);
		},

		convertToRealPercent: function (fake) {
			var full = 100 - this.coords.p_handle;
			return fake / full * 100;
		},

		convertToFakePercent: function (real) {
			var full = 100 - this.coords.p_handle;
			return real / 100 * full;
		},

		getHandleX: function () {
			var max = 100 - this.coords.p_handle,
				x = this.toFixed(this.coords.p_pointer - this.coords.p_gap);

			if (x < 0) {
				x = 0;
			} else if (x > max) {
				x = max;
			}

			return x;
		},

		calcHandlePercent: function () {
			if (this.options.type === "single") {
				this.coords.w_handle = this.$cache.s_single.outerWidth(false);
			} else {
				this.coords.w_handle = this.$cache.s_from.outerWidth(false);
			}

			this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100);
		},

		/**
		 * Find closest handle to pointer click
		 *
		 * @param real_x {Number}
		 * @returns {String}
		 */
		chooseHandle: function (real_x) {
			if (this.options.type === "single") {
				return "single";
			} else {
				var m_point = this.coords.p_from_real + ((this.coords.p_to_real - this.coords.p_from_real) / 2);
				if (real_x >= m_point) {
					return this.options.to_fixed ? "from" : "to";
				} else {
					return this.options.from_fixed ? "to" : "from";
				}
			}
		},

		/**
		 * Measure Min and Max labels width in percent
		 */
		calcMinMax: function () {
			if (!this.coords.w_rs) {
				return;
			}

			this.labels.p_min = this.labels.w_min / this.coords.w_rs * 100;
			this.labels.p_max = this.labels.w_max / this.coords.w_rs * 100;
		},

		/**
		 * Measure labels width and X in percent
		 */
		calcLabels: function () {
			if (!this.coords.w_rs || this.options.hide_from_to) {
				return;
			}

			if (this.options.type === "single") {

				this.labels.w_single = this.$cache.single.outerWidth(false);
				this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100;
				this.labels.p_single_left = this.coords.p_single_fake + (this.coords.p_handle / 2) - (this.labels.p_single_fake / 2);
				this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single_fake);

			} else {

				this.labels.w_from = this.$cache.from.outerWidth(false);
				this.labels.p_from_fake = this.labels.w_from / this.coords.w_rs * 100;
				this.labels.p_from_left = this.coords.p_from_fake + (this.coords.p_handle / 2) - (this.labels.p_from_fake / 2);
				this.labels.p_from_left = this.toFixed(this.labels.p_from_left);
				this.labels.p_from_left = this.checkEdges(this.labels.p_from_left, this.labels.p_from_fake);

				this.labels.w_to = this.$cache.to.outerWidth(false);
				this.labels.p_to_fake = this.labels.w_to / this.coords.w_rs * 100;
				this.labels.p_to_left = this.coords.p_to_fake + (this.coords.p_handle / 2) - (this.labels.p_to_fake / 2);
				this.labels.p_to_left = this.toFixed(this.labels.p_to_left);
				this.labels.p_to_left = this.checkEdges(this.labels.p_to_left, this.labels.p_to_fake);

				this.labels.w_single = this.$cache.single.outerWidth(false);
				this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100;
				this.labels.p_single_left = ((this.labels.p_from_left + this.labels.p_to_left + this.labels.p_to_fake) / 2) - (this.labels.p_single_fake / 2);
				this.labels.p_single_left = this.toFixed(this.labels.p_single_left);
				this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single_fake);

			}
		},



		// =============================================================================================================
		// Drawings

		/**
		 * Main function called in request animation frame
		 * to update everything
		 */
		updateScene: function () {
			if (this.raf_id) {
				cancelAnimationFrame(this.raf_id);
				this.raf_id = null;
			}

			clearTimeout(this.update_tm);
			this.update_tm = null;

			if (!this.options) {
				return;
			}

			this.drawHandles();

			if (this.is_active) {
				this.raf_id = requestAnimationFrame(this.updateScene.bind(this));
			} else {
				this.update_tm = setTimeout(this.updateScene.bind(this), 300);
			}
		},

		/**
		 * Draw handles
		 */
		drawHandles: function () {
			this.coords.w_rs = this.$cache.rs.outerWidth(false);

			if (!this.coords.w_rs) {
				return;
			}

			if (this.coords.w_rs !== this.coords.w_rs_old) {
				this.target = "base";
				this.is_resize = true;
			}

			if (this.coords.w_rs !== this.coords.w_rs_old || this.force_redraw) {
				this.setMinMax();
				this.calc(true);
				this.drawLabels();
				if (this.options.grid) {
					this.calcGridMargin();
					this.calcGridLabels();
				}
				this.force_redraw = true;
				this.coords.w_rs_old = this.coords.w_rs;
				this.drawShadow();
			}

			if (!this.coords.w_rs) {
				return;
			}

			if (!this.dragging && !this.force_redraw && !this.is_key) {
				return;
			}

			if (this.old_from !== this.result.from || this.old_to !== this.result.to || this.force_redraw || this.is_key) {

				this.drawLabels();

				this.$cache.bar[0].style.left = this.coords.p_bar_x + "%";
				this.$cache.bar[0].style.width = this.coords.p_bar_w + "%";

				if (this.options.type === "single") {
					this.$cache.s_single[0].style.left = this.coords.p_single_fake + "%";

					this.$cache.single[0].style.left = this.labels.p_single_left + "%";
				} else {
					this.$cache.s_from[0].style.left = this.coords.p_from_fake + "%";
					this.$cache.s_to[0].style.left = this.coords.p_to_fake + "%";

					if (this.old_from !== this.result.from || this.force_redraw) {
						this.$cache.from[0].style.left = this.labels.p_from_left + "%";
					}
					if (this.old_to !== this.result.to || this.force_redraw) {
						this.$cache.to[0].style.left = this.labels.p_to_left + "%";
					}

					this.$cache.single[0].style.left = this.labels.p_single_left + "%";
				}

				this.writeToInput();

				if ((this.old_from !== this.result.from || this.old_to !== this.result.to) && !this.is_start) {
					this.$cache.input.trigger("change");
					this.$cache.input.trigger("input");
				}

				this.old_from = this.result.from;
				this.old_to = this.result.to;

				// callbacks call
				if (!this.is_resize && !this.is_update && !this.is_start && !this.is_finish) {
					this.callOnChange();
				}
				if (this.is_key || this.is_click) {
					this.is_key = false;
					this.is_click = false;
					this.callOnFinish();
				}

				this.is_update = false;
				this.is_resize = false;
				this.is_finish = false;
			}

			this.is_start = false;
			this.is_key = false;
			this.is_click = false;
			this.force_redraw = false;
		},

		/**
		 * Draw labels
		 * measure labels collisions
		 * collapse close labels
		 */
		drawLabels: function () {
			if (!this.options) {
				return;
			}

			var values_num = this.options.values.length;
			var p_values = this.options.p_values;
			var text_single;
			var text_from;
			var text_to;
			var from_pretty;
			var to_pretty;

			if (this.options.hide_from_to) {
				return;
			}

			if (this.options.type === "single") {

				if (values_num) {
					text_single = this.decorate(p_values[this.result.from]);
					this.$cache.single.html(text_single);
				} else {
					from_pretty = this._prettify(this.result.from);

					text_single = this.decorate(from_pretty, this.result.from);
					this.$cache.single.html(text_single);
				}

				this.calcLabels();

				if (this.labels.p_single_left < this.labels.p_min + 1) {
					this.$cache.min[0].style.visibility = "hidden";
				} else {
					this.$cache.min[0].style.visibility = "visible";
				}

				if (this.labels.p_single_left + this.labels.p_single_fake > 100 - this.labels.p_max - 1) {
					this.$cache.max[0].style.visibility = "hidden";
				} else {
					this.$cache.max[0].style.visibility = "visible";
				}

			} else {

				if (values_num) {

					if (this.options.decorate_both) {
						text_single = this.decorate(p_values[this.result.from]);
						text_single += this.options.values_separator;
						text_single += this.decorate(p_values[this.result.to]);
					} else {
						text_single = this.decorate(p_values[this.result.from] + this.options.values_separator + p_values[this.result.to]);
					}
					text_from = this.decorate(p_values[this.result.from]);
					text_to = this.decorate(p_values[this.result.to]);

					this.$cache.single.html(text_single);
					this.$cache.from.html(text_from);
					this.$cache.to.html(text_to);

				} else {
					from_pretty = this._prettify(this.result.from);
					to_pretty = this._prettify(this.result.to);

					if (this.options.decorate_both) {
						text_single = this.decorate(from_pretty, this.result.from);
						text_single += this.options.values_separator;
						text_single += this.decorate(to_pretty, this.result.to);
					} else {
						text_single = this.decorate(from_pretty + this.options.values_separator + to_pretty, this.result.to);
					}
					text_from = this.decorate(from_pretty, this.result.from);
					text_to = this.decorate(to_pretty, this.result.to);

					this.$cache.single.html(text_single);
					this.$cache.from.html(text_from);
					this.$cache.to.html(text_to);

				}

				this.calcLabels();

				var min = Math.min(this.labels.p_single_left, this.labels.p_from_left),
					single_left = this.labels.p_single_left + this.labels.p_single_fake,
					to_left = this.labels.p_to_left + this.labels.p_to_fake,
					max = Math.max(single_left, to_left);

				if (this.labels.p_from_left + this.labels.p_from_fake >= this.labels.p_to_left) {
					this.$cache.from[0].style.visibility = "hidden";
					this.$cache.to[0].style.visibility = "hidden";
					this.$cache.single[0].style.visibility = "visible";

					if (this.result.from === this.result.to) {
						if (this.target === "from") {
							this.$cache.from[0].style.visibility = "visible";
						} else if (this.target === "to") {
							this.$cache.to[0].style.visibility = "visible";
						} else if (!this.target) {
							this.$cache.from[0].style.visibility = "visible";
						}
						this.$cache.single[0].style.visibility = "hidden";
						max = to_left;
					} else {
						this.$cache.from[0].style.visibility = "hidden";
						this.$cache.to[0].style.visibility = "hidden";
						this.$cache.single[0].style.visibility = "visible";
						max = Math.max(single_left, to_left);
					}
				} else {
					this.$cache.from[0].style.visibility = "visible";
					this.$cache.to[0].style.visibility = "visible";
					this.$cache.single[0].style.visibility = "hidden";
				}

				if (min < this.labels.p_min + 1) {
					this.$cache.min[0].style.visibility = "hidden";
				} else {
					this.$cache.min[0].style.visibility = "visible";
				}

				if (max > 100 - this.labels.p_max - 1) {
					this.$cache.max[0].style.visibility = "hidden";
				} else {
					this.$cache.max[0].style.visibility = "visible";
				}

			}
		},

		/**
		 * Draw shadow intervals
		 */
		drawShadow: function () {
			var o = this.options,
				c = this.$cache,

				is_from_min = typeof o.from_min === "number" && !isNaN(o.from_min),
				is_from_max = typeof o.from_max === "number" && !isNaN(o.from_max),
				is_to_min = typeof o.to_min === "number" && !isNaN(o.to_min),
				is_to_max = typeof o.to_max === "number" && !isNaN(o.to_max),

				from_min,
				from_max,
				to_min,
				to_max;

			if (o.type === "single") {
				if (o.from_shadow && (is_from_min || is_from_max)) {
					from_min = this.convertToPercent(is_from_min ? o.from_min : o.min);
					from_max = this.convertToPercent(is_from_max ? o.from_max : o.max) - from_min;
					from_min = this.toFixed(from_min - (this.coords.p_handle / 100 * from_min));
					from_max = this.toFixed(from_max - (this.coords.p_handle / 100 * from_max));
					from_min = from_min + (this.coords.p_handle / 2);

					c.shad_single[0].style.display = "block";
					c.shad_single[0].style.left = from_min + "%";
					c.shad_single[0].style.width = from_max + "%";
				} else {
					c.shad_single[0].style.display = "none";
				}
			} else {
				if (o.from_shadow && (is_from_min || is_from_max)) {
					from_min = this.convertToPercent(is_from_min ? o.from_min : o.min);
					from_max = this.convertToPercent(is_from_max ? o.from_max : o.max) - from_min;
					from_min = this.toFixed(from_min - (this.coords.p_handle / 100 * from_min));
					from_max = this.toFixed(from_max - (this.coords.p_handle / 100 * from_max));
					from_min = from_min + (this.coords.p_handle / 2);

					c.shad_from[0].style.display = "block";
					c.shad_from[0].style.left = from_min + "%";
					c.shad_from[0].style.width = from_max + "%";
				} else {
					c.shad_from[0].style.display = "none";
				}

				if (o.to_shadow && (is_to_min || is_to_max)) {
					to_min = this.convertToPercent(is_to_min ? o.to_min : o.min);
					to_max = this.convertToPercent(is_to_max ? o.to_max : o.max) - to_min;
					to_min = this.toFixed(to_min - (this.coords.p_handle / 100 * to_min));
					to_max = this.toFixed(to_max - (this.coords.p_handle / 100 * to_max));
					to_min = to_min + (this.coords.p_handle / 2);

					c.shad_to[0].style.display = "block";
					c.shad_to[0].style.left = to_min + "%";
					c.shad_to[0].style.width = to_max + "%";
				} else {
					c.shad_to[0].style.display = "none";
				}
			}
		},



		/**
		 * Write values to input element
		 */
		writeToInput: function () {
			if (this.options.type === "single") {
				if (this.options.values.length) {
					this.$cache.input.prop("value", this.result.from_value);
				} else {
					this.$cache.input.prop("value", this.result.from);
				}
				this.$cache.input.data("from", this.result.from);
			} else {
				if (this.options.values.length) {
					this.$cache.input.prop("value", this.result.from_value + this.options.input_values_separator + this.result.to_value);
				} else {
					this.$cache.input.prop("value", this.result.from + this.options.input_values_separator + this.result.to);
				}
				this.$cache.input.data("from", this.result.from);
				this.$cache.input.data("to", this.result.to);
			}
		},



		// =============================================================================================================
		// Callbacks

		callOnStart: function () {
			this.writeToInput();

			if (this.options.onStart && typeof this.options.onStart === "function") {
				if (this.options.scope) {
					this.options.onStart.call(this.options.scope, this.result);
				} else {
					this.options.onStart(this.result);
				}
			}
		},
		callOnChange: function () {
			this.writeToInput();

			if (this.options.onChange && typeof this.options.onChange === "function") {
				if (this.options.scope) {
					this.options.onChange.call(this.options.scope, this.result);
				} else {
					this.options.onChange(this.result);
				}
			}
		},
		callOnFinish: function () {
			this.writeToInput();

			if (this.options.onFinish && typeof this.options.onFinish === "function") {
				if (this.options.scope) {
					this.options.onFinish.call(this.options.scope, this.result);
				} else {
					this.options.onFinish(this.result);
				}
			}
		},
		callOnUpdate: function () {
			this.writeToInput();

			if (this.options.onUpdate && typeof this.options.onUpdate === "function") {
				if (this.options.scope) {
					this.options.onUpdate.call(this.options.scope, this.result);
				} else {
					this.options.onUpdate(this.result);
				}
			}
		},




		// =============================================================================================================
		// Service methods

		toggleInput: function () {
			this.$cache.input.toggleClass("irs-hidden-input");

			if (this.has_tab_index) {
				this.$cache.input.prop("tabindex", -1);
			} else {
				this.$cache.input.removeProp("tabindex");
			}

			this.has_tab_index = !this.has_tab_index;
		},

		/**
		 * Convert real value to percent
		 *
		 * @param value {Number} X in real
		 * @param no_min {boolean=} don't use min value
		 * @returns {Number} X in percent
		 */
		convertToPercent: function (value, no_min) {
			var diapason = this.options.max - this.options.min,
				one_percent = diapason / 100,
				val, percent;

			if (!diapason) {
				this.no_diapason = true;
				return 0;
			}

			if (no_min) {
				val = value;
			} else {
				val = value - this.options.min;
			}

			percent = val / one_percent;

			return this.toFixed(percent);
		},

		/**
		 * Convert percent to real values
		 *
		 * @param percent {Number} X in percent
		 * @returns {Number} X in real
		 */
		convertToValue: function (percent) {
			var min = this.options.min,
				max = this.options.max,
				min_decimals = min.toString().split(".")[1],
				max_decimals = max.toString().split(".")[1],
				min_length, max_length,
				avg_decimals = 0,
				abs = 0;

			if (percent === 0) {
				return this.options.min;
			}
			if (percent === 100) {
				return this.options.max;
			}


			if (min_decimals) {
				min_length = min_decimals.length;
				avg_decimals = min_length;
			}
			if (max_decimals) {
				max_length = max_decimals.length;
				avg_decimals = max_length;
			}
			if (min_length && max_length) {
				avg_decimals = (min_length >= max_length) ? min_length : max_length;
			}

			if (min < 0) {
				abs = Math.abs(min);
				min = +(min + abs).toFixed(avg_decimals);
				max = +(max + abs).toFixed(avg_decimals);
			}

			var number = ((max - min) / 100 * percent) + min,
				string = this.options.step.toString().split(".")[1],
				result;

			if (string) {
				number = +number.toFixed(string.length);
			} else {
				number = number / this.options.step;
				number = number * this.options.step;

				number = +number.toFixed(0);
			}

			if (abs) {
				number -= abs;
			}

			if (string) {
				result = +number.toFixed(string.length);
			} else {
				result = this.toFixed(number);
			}

			if (result < this.options.min) {
				result = this.options.min;
			} else if (result > this.options.max) {
				result = this.options.max;
			}

			return result;
		},

		/**
		 * Round percent value with step
		 *
		 * @param percent {Number}
		 * @returns percent {Number} rounded
		 */
		calcWithStep: function (percent) {
			var rounded = Math.round(percent / this.coords.p_step) * this.coords.p_step;

			if (rounded > 100) {
				rounded = 100;
			}
			if (percent === 100) {
				rounded = 100;
			}

			return this.toFixed(rounded);
		},

		checkMinInterval: function (p_current, p_next, type) {
			var o = this.options,
				current,
				next;

			if (!o.min_interval) {
				return p_current;
			}

			current = this.convertToValue(p_current);
			next = this.convertToValue(p_next);

			if (type === "from") {

				if (next - current < o.min_interval) {
					current = next - o.min_interval;
				}

			} else {

				if (current - next < o.min_interval) {
					current = next + o.min_interval;
				}

			}

			return this.convertToPercent(current);
		},

		checkMaxInterval: function (p_current, p_next, type) {
			var o = this.options,
				current,
				next;

			if (!o.max_interval) {
				return p_current;
			}

			current = this.convertToValue(p_current);
			next = this.convertToValue(p_next);

			if (type === "from") {

				if (next - current > o.max_interval) {
					current = next - o.max_interval;
				}

			} else {

				if (current - next > o.max_interval) {
					current = next + o.max_interval;
				}

			}

			return this.convertToPercent(current);
		},

		checkDiapason: function (p_num, min, max) {
			var num = this.convertToValue(p_num),
				o = this.options;

			if (typeof min !== "number") {
				min = o.min;
			}

			if (typeof max !== "number") {
				max = o.max;
			}

			if (num < min) {
				num = min;
			}

			if (num > max) {
				num = max;
			}

			return this.convertToPercent(num);
		},

		toFixed: function (num) {
			num = num.toFixed(20);
			return +num;
		},

		_prettify: function (num) {
			if (!this.options.prettify_enabled) {
				return num;
			}

			if (this.options.prettify && typeof this.options.prettify === "function") {
				return this.options.prettify(num);
			} else {
				return this.prettify(num);
			}
		},

		prettify: function (num) {
			var n = num.toString();
			return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + this.options.prettify_separator);
		},

		checkEdges: function (left, width) {
			if (!this.options.force_edges) {
				return this.toFixed(left);
			}

			if (left < 0) {
				left = 0;
			} else if (left > 100 - width) {
				left = 100 - width;
			}

			return this.toFixed(left);
		},

		validate: function () {
			var o = this.options,
				r = this.result,
				v = o.values,
				vl = v.length,
				value,
				i;

			if (typeof o.min === "string") o.min = +o.min;
			if (typeof o.max === "string") o.max = +o.max;
			if (typeof o.from === "string") o.from = +o.from;
			if (typeof o.to === "string") o.to = +o.to;
			if (typeof o.step === "string") o.step = +o.step;

			if (typeof o.from_min === "string") o.from_min = +o.from_min;
			if (typeof o.from_max === "string") o.from_max = +o.from_max;
			if (typeof o.to_min === "string") o.to_min = +o.to_min;
			if (typeof o.to_max === "string") o.to_max = +o.to_max;

			if (typeof o.grid_num === "string") o.grid_num = +o.grid_num;

			if (o.max < o.min) {
				o.max = o.min;
			}

			if (vl) {
				o.p_values = [];
				o.min = 0;
				o.max = vl - 1;
				o.step = 1;
				o.grid_num = o.max;
				o.grid_snap = true;

				for (i = 0; i < vl; i++) {
					value = +v[i];

					if (!isNaN(value)) {
						v[i] = value;
						value = this._prettify(value);
					} else {
						value = v[i];
					}

					o.p_values.push(value);
				}
			}

			if (typeof o.from !== "number" || isNaN(o.from)) {
				o.from = o.min;
			}

			if (typeof o.to !== "number" || isNaN(o.to)) {
				o.to = o.max;
			}

			if (o.type === "single") {

				if (o.from < o.min) o.from = o.min;
				if (o.from > o.max) o.from = o.max;

			} else {

				if (o.from < o.min) o.from = o.min;
				if (o.from > o.max) o.from = o.max;

				if (o.to < o.min) o.to = o.min;
				if (o.to > o.max) o.to = o.max;

				if (this.update_check.from) {

					if (this.update_check.from !== o.from) {
						if (o.from > o.to) o.from = o.to;
					}
					if (this.update_check.to !== o.to) {
						if (o.to < o.from) o.to = o.from;
					}

				}

				if (o.from > o.to) o.from = o.to;
				if (o.to < o.from) o.to = o.from;

			}

			if (typeof o.step !== "number" || isNaN(o.step) || !o.step || o.step < 0) {
				o.step = 1;
			}

			if (typeof o.from_min === "number" && o.from < o.from_min) {
				o.from = o.from_min;
			}

			if (typeof o.from_max === "number" && o.from > o.from_max) {
				o.from = o.from_max;
			}

			if (typeof o.to_min === "number" && o.to < o.to_min) {
				o.to = o.to_min;
			}

			if (typeof o.to_max === "number" && o.from > o.to_max) {
				o.to = o.to_max;
			}

			if (r) {
				if (r.min !== o.min) {
					r.min = o.min;
				}

				if (r.max !== o.max) {
					r.max = o.max;
				}

				if (r.from < r.min || r.from > r.max) {
					r.from = o.from;
				}

				if (r.to < r.min || r.to > r.max) {
					r.to = o.to;
				}
			}

			if (typeof o.min_interval !== "number" || isNaN(o.min_interval) || !o.min_interval || o.min_interval < 0) {
				o.min_interval = 0;
			}

			if (typeof o.max_interval !== "number" || isNaN(o.max_interval) || !o.max_interval || o.max_interval < 0) {
				o.max_interval = 0;
			}

			if (o.min_interval && o.min_interval > o.max - o.min) {
				o.min_interval = o.max - o.min;
			}

			if (o.max_interval && o.max_interval > o.max - o.min) {
				o.max_interval = o.max - o.min;
			}
		},

		decorate: function (num, original) {

			num=num.replace(" ", "");


			var decorated = " ",
				o = this.options;


			decorated += num;

			if (o.prefix) {
				decorated += ' '+o.prefix;
			}

			if (o.max_postfix) {
				if (o.values.length && num === o.p_values[o.max]) {
					decorated += o.max_postfix;
					if (o.postfix) {

						decorated += "";
					}
				} else if (original === o.max) {

					decorated += o.max_postfix;
					if (o.postfix) {

						decorated += "";
					}
				}
			}

			if (o.postfix) {
				decorated +=  ' '+o.postfix;
			}

			return decorated;
		},

		updateFrom: function () {
			this.result.from = this.options.from;
			this.result.from_percent = this.convertToPercent(this.result.from);
			this.result.from_pretty = this._prettify(this.result.from);
			if (this.options.values) {
				this.result.from_value = this.options.values[this.result.from];
			}
		},

		updateTo: function () {
			this.result.to = this.options.to;
			this.result.to_percent = this.convertToPercent(this.result.to);
			this.result.to_pretty = this._prettify(this.result.to);
			if (this.options.values) {
				this.result.to_value = this.options.values[this.result.to];
			}
		},

		updateResult: function () {
			this.result.min = this.options.min;
			this.result.max = this.options.max;
			this.updateFrom();
			this.updateTo();
		},


		// =============================================================================================================
		// Grid

		appendGrid: function () {
			if (!this.options.grid) {
				return;
			}

			var o = this.options,
				i, z,

				total = o.max - o.min,
				big_num = o.grid_num,
				big_p = 0,
				big_w = 0,

				small_max = 4,
				local_small_max,
				small_p,
				small_w = 0,

				result,
				html = '';



			this.calcGridMargin();

			if (o.grid_snap) {

				if (total > 50) {
					big_num = 50 / o.step;
					big_p = this.toFixed(o.step / 0.5);
				} else {
					big_num = total / o.step;
					big_p = this.toFixed(o.step / (total / 100));
				}

			} else {
				big_p = this.toFixed(100 / big_num);
			}

			if (big_num > 4) {
				small_max = 3;
			}
			if (big_num > 7) {
				small_max = 2;
			}
			if (big_num > 14) {
				small_max = 1;
			}
			if (big_num > 28) {
				small_max = 0;
			}

			for (i = 0; i < big_num + 1; i++) {
				local_small_max = small_max;

				big_w = this.toFixed(big_p * i);

				if (big_w > 100) {
					big_w = 100;
				}
				this.coords.big[i] = big_w;

				small_p = (big_w - (big_p * (i - 1))) / (local_small_max + 1);

				for (z = 1; z <= local_small_max; z++) {
					if (big_w === 0) {
						break;
					}

					small_w = this.toFixed(big_w - (small_p * z));

					html += '<span class="irs-grid-pol small" style="left: ' + small_w + '%"></span>';
				}

				html += '<span class="irs-grid-pol" style="left: ' + big_w + '%"></span>';

				result = this.convertToValue(big_w);
				if (o.values.length) {
					result = o.p_values[result];
				} else {
					result = this._prettify(result);
				}

				html += '<span class="irs-grid-text js-grid-text-' + i + '" style="left: ' + big_w + '%">' + result + '</span>';
			}
			this.coords.big_num = Math.ceil(big_num + 1);



			this.$cache.cont.addClass("irs-with-grid");
			this.$cache.grid.html(html);
			this.cacheGridLabels();
		},

		cacheGridLabels: function () {
			var $label, i,
				num = this.coords.big_num;

			for (i = 0; i < num; i++) {
				$label = this.$cache.grid.find(".js-grid-text-" + i);
				this.$cache.grid_labels.push($label);
			}

			this.calcGridLabels();
		},

		calcGridLabels: function () {
			var i, label, start = [], finish = [],
				num = this.coords.big_num;

			for (i = 0; i < num; i++) {
				this.coords.big_w[i] = this.$cache.grid_labels[i].outerWidth(false);
				this.coords.big_p[i] = this.toFixed(this.coords.big_w[i] / this.coords.w_rs * 100);
				this.coords.big_x[i] = this.toFixed(this.coords.big_p[i] / 2);

				start[i] = this.toFixed(this.coords.big[i] - this.coords.big_x[i]);
				finish[i] = this.toFixed(start[i] + this.coords.big_p[i]);
			}

			if (this.options.force_edges) {
				if (start[0] < -this.coords.grid_gap) {
					start[0] = -this.coords.grid_gap;
					finish[0] = this.toFixed(start[0] + this.coords.big_p[0]);

					this.coords.big_x[0] = this.coords.grid_gap;
				}

				if (finish[num - 1] > 100 + this.coords.grid_gap) {
					finish[num - 1] = 100 + this.coords.grid_gap;
					start[num - 1] = this.toFixed(finish[num - 1] - this.coords.big_p[num - 1]);

					this.coords.big_x[num - 1] = this.toFixed(this.coords.big_p[num - 1] - this.coords.grid_gap);
				}
			}

			this.calcGridCollision(2, start, finish);
			this.calcGridCollision(4, start, finish);

			for (i = 0; i < num; i++) {
				label = this.$cache.grid_labels[i][0];

				if (this.coords.big_x[i] !== Number.POSITIVE_INFINITY) {
					label.style.marginLeft = -this.coords.big_x[i] + "%";
				}
			}
		},

		// Collisions Calc Beta
		// TODO: Refactor then have plenty of time
		calcGridCollision: function (step, start, finish) {
			var i, next_i, label,
				num = this.coords.big_num;

			for (i = 0; i < num; i += step) {
				next_i = i + (step / 2);
				if (next_i >= num) {
					break;
				}

				label = this.$cache.grid_labels[next_i][0];

				if (finish[i] <= start[next_i]) {
					label.style.visibility = "visible";
				} else {
					label.style.visibility = "hidden";
				}
			}
		},

		calcGridMargin: function () {
			if (!this.options.grid_margin) {
				return;
			}

			this.coords.w_rs = this.$cache.rs.outerWidth(false);
			if (!this.coords.w_rs) {
				return;
			}

			if (this.options.type === "single") {
				this.coords.w_handle = this.$cache.s_single.outerWidth(false);
			} else {
				this.coords.w_handle = this.$cache.s_from.outerWidth(false);
			}
			this.coords.p_handle = this.toFixed(this.coords.w_handle  / this.coords.w_rs * 100);
			this.coords.grid_gap = this.toFixed((this.coords.p_handle / 2) - 0.1);

			this.$cache.grid[0].style.width = this.toFixed(100 - this.coords.p_handle) + "%";
			this.$cache.grid[0].style.left = this.coords.grid_gap + "%";
		},



		// =============================================================================================================
		// Public methods

		update: function (options) {
			if (!this.input) {
				return;
			}

			this.is_update = true;

			this.options.from = this.result.from;
			this.options.to = this.result.to;
			this.update_check.from = this.result.from;
			this.update_check.to = this.result.to;

			this.options = $.extend(this.options, options);
			this.validate();
			this.updateResult(options);

			this.toggleInput();
			this.remove();
			this.init(true);
		},

		reset: function () {
			if (!this.input) {
				return;
			}

			this.updateResult();
			this.update();
		},

		destroy: function () {
			if (!this.input) {
				return;
			}

			this.toggleInput();
			this.$cache.input.prop("readonly", false);
			$.data(this.input, "ionRangeSlider", null);

			this.remove();
			this.input = null;
			this.options = null;
		}
	};

	$.fn.ionRangeSlider = function (options) {
		return this.each(function() {
			if (!$.data(this, "ionRangeSlider")) {
				$.data(this, "ionRangeSlider", new IonRangeSlider(this, options, plugin_count++));
			}
		});
	};



	// =================================================================================================================
	// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

	// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel

	// MIT license

	(function() {
		var lastTime = 0;
		var vendors = ['ms', 'moz', 'webkit', 'o'];
		for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
			window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
			window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
				|| window[vendors[x]+'CancelRequestAnimationFrame'];
		}

		if (!window.requestAnimationFrame)
			window.requestAnimationFrame = function(callback, element) {
				var currTime = new Date().getTime();
				var timeToCall = Math.max(0, 16 - (currTime - lastTime));
				var id = window.setTimeout(function() { callback(currTime + timeToCall); },
					timeToCall);
				lastTime = currTime + timeToCall;
				return id;
			};

		if (!window.cancelAnimationFrame)
			window.cancelAnimationFrame = function(id) {
				clearTimeout(id);
			};
	}());

}));

// calendar
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.moment=t()}(this,function(){"use strict";var e,i;function c(){return e.apply(null,arguments)}function o(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function u(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function l(e){return void 0===e}function d(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}function h(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function f(e,t){var n,s=[];for(n=0;n<e.length;++n)s.push(t(e[n],n));return s}function m(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function _(e,t){for(var n in t)m(t,n)&&(e[n]=t[n]);return m(t,"toString")&&(e.toString=t.toString),m(t,"valueOf")&&(e.valueOf=t.valueOf),e}function y(e,t,n,s){return Ot(e,t,n,s,!0).utc()}function g(e){return null==e._pf&&(e._pf={empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}),e._pf}function p(e){if(null==e._isValid){var t=g(e),n=i.call(t.parsedDateParts,function(e){return null!=e}),s=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n);if(e._strict&&(s=s&&0===t.charsLeftOver&&0===t.unusedTokens.length&&void 0===t.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return s;e._isValid=s}return e._isValid}function v(e){var t=y(NaN);return null!=e?_(g(t),e):g(t).userInvalidated=!0,t}i=Array.prototype.some?Array.prototype.some:function(e){for(var t=Object(this),n=t.length>>>0,s=0;s<n;s++)if(s in t&&e.call(this,t[s],s,t))return!0;return!1};var r=c.momentProperties=[];function w(e,t){var n,s,i;if(l(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),l(t._i)||(e._i=t._i),l(t._f)||(e._f=t._f),l(t._l)||(e._l=t._l),l(t._strict)||(e._strict=t._strict),l(t._tzm)||(e._tzm=t._tzm),l(t._isUTC)||(e._isUTC=t._isUTC),l(t._offset)||(e._offset=t._offset),l(t._pf)||(e._pf=g(t)),l(t._locale)||(e._locale=t._locale),0<r.length)for(n=0;n<r.length;n++)l(i=t[s=r[n]])||(e[s]=i);return e}var t=!1;function M(e){w(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===t&&(t=!0,c.updateOffset(this),t=!1)}function S(e){return e instanceof M||null!=e&&null!=e._isAMomentObject}function D(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function k(e){var t=+e,n=0;return 0!==t&&isFinite(t)&&(n=D(t)),n}function a(e,t,n){var s,i=Math.min(e.length,t.length),r=Math.abs(e.length-t.length),a=0;for(s=0;s<i;s++)(n&&e[s]!==t[s]||!n&&k(e[s])!==k(t[s]))&&a++;return a+r}function Y(e){!1===c.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function n(i,r){var a=!0;return _(function(){if(null!=c.deprecationHandler&&c.deprecationHandler(null,i),a){for(var e,t=[],n=0;n<arguments.length;n++){if(e="","object"==typeof arguments[n]){for(var s in e+="\n["+n+"] ",arguments[0])e+=s+": "+arguments[0][s]+", ";e=e.slice(0,-2)}else e=arguments[n];t.push(e)}Y(i+"\nArguments: "+Array.prototype.slice.call(t).join("")+"\n"+(new Error).stack),a=!1}return r.apply(this,arguments)},r)}var s,O={};function T(e,t){null!=c.deprecationHandler&&c.deprecationHandler(e,t),O[e]||(Y(t),O[e]=!0)}function x(e){return e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function b(e,t){var n,s=_({},e);for(n in t)m(t,n)&&(u(e[n])&&u(t[n])?(s[n]={},_(s[n],e[n]),_(s[n],t[n])):null!=t[n]?s[n]=t[n]:delete s[n]);for(n in e)m(e,n)&&!m(t,n)&&u(e[n])&&(s[n]=_({},s[n]));return s}function P(e){null!=e&&this.set(e)}c.suppressDeprecationWarnings=!1,c.deprecationHandler=null,s=Object.keys?Object.keys:function(e){var t,n=[];for(t in e)m(e,t)&&n.push(t);return n};var W={};function H(e,t){var n=e.toLowerCase();W[n]=W[n+"s"]=W[t]=e}function R(e){return"string"==typeof e?W[e]||W[e.toLowerCase()]:void 0}function C(e){var t,n,s={};for(n in e)m(e,n)&&(t=R(n))&&(s[t]=e[n]);return s}var F={};function L(e,t){F[e]=t}function U(e,t,n){var s=""+Math.abs(e),i=t-s.length;return(0<=e?n?"+":"":"-")+Math.pow(10,Math.max(0,i)).toString().substr(1)+s}var N=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,G=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,V={},E={};function I(e,t,n,s){var i=s;"string"==typeof s&&(i=function(){return this[s]()}),e&&(E[e]=i),t&&(E[t[0]]=function(){return U(i.apply(this,arguments),t[1],t[2])}),n&&(E[n]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function A(e,t){return e.isValid()?(t=j(t,e.localeData()),V[t]=V[t]||function(s){var e,i,t,r=s.match(N);for(e=0,i=r.length;e<i;e++)E[r[e]]?r[e]=E[r[e]]:r[e]=(t=r[e]).match(/\[[\s\S]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"");return function(e){var t,n="";for(t=0;t<i;t++)n+=x(r[t])?r[t].call(e,s):r[t];return n}}(t),V[t](e)):e.localeData().invalidDate()}function j(e,t){var n=5;function s(e){return t.longDateFormat(e)||e}for(G.lastIndex=0;0<=n&&G.test(e);)e=e.replace(G,s),G.lastIndex=0,n-=1;return e}var Z=/\d/,z=/\d\d/,$=/\d{3}/,q=/\d{4}/,J=/[+-]?\d{6}/,B=/\d\d?/,Q=/\d\d\d\d?/,X=/\d\d\d\d\d\d?/,K=/\d{1,3}/,ee=/\d{1,4}/,te=/[+-]?\d{1,6}/,ne=/\d+/,se=/[+-]?\d+/,ie=/Z|[+-]\d\d:?\d\d/gi,re=/Z|[+-]\d\d(?::?\d\d)?/gi,ae=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,oe={};function ue(e,n,s){oe[e]=x(n)?n:function(e,t){return e&&s?s:n}}function le(e,t){return m(oe,e)?oe[e](t._strict,t._locale):new RegExp(de(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,s,i){return t||n||s||i})))}function de(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var he={};function ce(e,n){var t,s=n;for("string"==typeof e&&(e=[e]),d(n)&&(s=function(e,t){t[n]=k(e)}),t=0;t<e.length;t++)he[e[t]]=s}function fe(e,i){ce(e,function(e,t,n,s){n._w=n._w||{},i(e,n._w,n,s)})}var me=0,_e=1,ye=2,ge=3,pe=4,ve=5,we=6,Me=7,Se=8;function De(e){return ke(e)?366:365}function ke(e){return e%4==0&&e%100!=0||e%400==0}I("Y",0,0,function(){var e=this.year();return e<=9999?""+e:"+"+e}),I(0,["YY",2],0,function(){return this.year()%100}),I(0,["YYYY",4],0,"year"),I(0,["YYYYY",5],0,"year"),I(0,["YYYYYY",6,!0],0,"year"),H("year","y"),L("year",1),ue("Y",se),ue("YY",B,z),ue("YYYY",ee,q),ue("YYYYY",te,J),ue("YYYYYY",te,J),ce(["YYYYY","YYYYYY"],me),ce("YYYY",function(e,t){t[me]=2===e.length?c.parseTwoDigitYear(e):k(e)}),ce("YY",function(e,t){t[me]=c.parseTwoDigitYear(e)}),ce("Y",function(e,t){t[me]=parseInt(e,10)}),c.parseTwoDigitYear=function(e){return k(e)+(68<k(e)?1900:2e3)};var Ye,Oe=Te("FullYear",!0);function Te(t,n){return function(e){return null!=e?(be(this,t,e),c.updateOffset(this,n),this):xe(this,t)}}function xe(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function be(e,t,n){e.isValid()&&!isNaN(n)&&("FullYear"===t&&ke(e.year())&&1===e.month()&&29===e.date()?e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),Pe(n,e.month())):e._d["set"+(e._isUTC?"UTC":"")+t](n))}function Pe(e,t){if(isNaN(e)||isNaN(t))return NaN;var n,s=(t%(n=12)+n)%n;return e+=(t-s)/12,1===s?ke(e)?29:28:31-s%7%2}Ye=Array.prototype.indexOf?Array.prototype.indexOf:function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1},I("M",["MM",2],"Mo",function(){return this.month()+1}),I("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),I("MMMM",0,0,function(e){return this.localeData().months(this,e)}),H("month","M"),L("month",8),ue("M",B),ue("MM",B,z),ue("MMM",function(e,t){return t.monthsShortRegex(e)}),ue("MMMM",function(e,t){return t.monthsRegex(e)}),ce(["M","MM"],function(e,t){t[_e]=k(e)-1}),ce(["MMM","MMMM"],function(e,t,n,s){var i=n._locale.monthsParse(e,s,n._strict);null!=i?t[_e]=i:g(n).invalidMonth=e});var We=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,He="January_February_March_April_May_June_July_August_September_October_November_December".split("_");var Re="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");function Ce(e,t){var n;if(!e.isValid())return e;if("string"==typeof t)if(/^\d+$/.test(t))t=k(t);else if(!d(t=e.localeData().monthsParse(t)))return e;return n=Math.min(e.date(),Pe(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function Fe(e){return null!=e?(Ce(this,e),c.updateOffset(this,!0),this):xe(this,"Month")}var Le=ae;var Ue=ae;function Ne(){function e(e,t){return t.length-e.length}var t,n,s=[],i=[],r=[];for(t=0;t<12;t++)n=y([2e3,t]),s.push(this.monthsShort(n,"")),i.push(this.months(n,"")),r.push(this.months(n,"")),r.push(this.monthsShort(n,""));for(s.sort(e),i.sort(e),r.sort(e),t=0;t<12;t++)s[t]=de(s[t]),i[t]=de(i[t]);for(t=0;t<24;t++)r[t]=de(r[t]);this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+s.join("|")+")","i")}function Ge(e){var t=new Date(Date.UTC.apply(null,arguments));return e<100&&0<=e&&isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e),t}function Ve(e,t,n){var s=7+t-n;return-((7+Ge(e,0,s).getUTCDay()-t)%7)+s-1}function Ee(e,t,n,s,i){var r,a,o=1+7*(t-1)+(7+n-s)%7+Ve(e,s,i);return o<=0?a=De(r=e-1)+o:o>De(e)?(r=e+1,a=o-De(e)):(r=e,a=o),{year:r,dayOfYear:a}}function Ie(e,t,n){var s,i,r=Ve(e.year(),t,n),a=Math.floor((e.dayOfYear()-r-1)/7)+1;return a<1?s=a+Ae(i=e.year()-1,t,n):a>Ae(e.year(),t,n)?(s=a-Ae(e.year(),t,n),i=e.year()+1):(i=e.year(),s=a),{week:s,year:i}}function Ae(e,t,n){var s=Ve(e,t,n),i=Ve(e+1,t,n);return(De(e)-s+i)/7}I("w",["ww",2],"wo","week"),I("W",["WW",2],"Wo","isoWeek"),H("week","w"),H("isoWeek","W"),L("week",5),L("isoWeek",5),ue("w",B),ue("ww",B,z),ue("W",B),ue("WW",B,z),fe(["w","ww","W","WW"],function(e,t,n,s){t[s.substr(0,1)]=k(e)});I("d",0,"do","day"),I("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),I("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),I("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),I("e",0,0,"weekday"),I("E",0,0,"isoWeekday"),H("day","d"),H("weekday","e"),H("isoWeekday","E"),L("day",11),L("weekday",11),L("isoWeekday",11),ue("d",B),ue("e",B),ue("E",B),ue("dd",function(e,t){return t.weekdaysMinRegex(e)}),ue("ddd",function(e,t){return t.weekdaysShortRegex(e)}),ue("dddd",function(e,t){return t.weekdaysRegex(e)}),fe(["dd","ddd","dddd"],function(e,t,n,s){var i=n._locale.weekdaysParse(e,s,n._strict);null!=i?t.d=i:g(n).invalidWeekday=e}),fe(["d","e","E"],function(e,t,n,s){t[s]=k(e)});var je="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");var Ze="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");var ze="Su_Mo_Tu_We_Th_Fr_Sa".split("_");var $e=ae;var qe=ae;var Je=ae;function Be(){function e(e,t){return t.length-e.length}var t,n,s,i,r,a=[],o=[],u=[],l=[];for(t=0;t<7;t++)n=y([2e3,1]).day(t),s=this.weekdaysMin(n,""),i=this.weekdaysShort(n,""),r=this.weekdays(n,""),a.push(s),o.push(i),u.push(r),l.push(s),l.push(i),l.push(r);for(a.sort(e),o.sort(e),u.sort(e),l.sort(e),t=0;t<7;t++)o[t]=de(o[t]),u[t]=de(u[t]),l[t]=de(l[t]);this._weekdaysRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+u.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+o.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+a.join("|")+")","i")}function Qe(){return this.hours()%12||12}function Xe(e,t){I(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}function Ke(e,t){return t._meridiemParse}I("H",["HH",2],0,"hour"),I("h",["hh",2],0,Qe),I("k",["kk",2],0,function(){return this.hours()||24}),I("hmm",0,0,function(){return""+Qe.apply(this)+U(this.minutes(),2)}),I("hmmss",0,0,function(){return""+Qe.apply(this)+U(this.minutes(),2)+U(this.seconds(),2)}),I("Hmm",0,0,function(){return""+this.hours()+U(this.minutes(),2)}),I("Hmmss",0,0,function(){return""+this.hours()+U(this.minutes(),2)+U(this.seconds(),2)}),Xe("a",!0),Xe("A",!1),H("hour","h"),L("hour",13),ue("a",Ke),ue("A",Ke),ue("H",B),ue("h",B),ue("k",B),ue("HH",B,z),ue("hh",B,z),ue("kk",B,z),ue("hmm",Q),ue("hmmss",X),ue("Hmm",Q),ue("Hmmss",X),ce(["H","HH"],ge),ce(["k","kk"],function(e,t,n){var s=k(e);t[ge]=24===s?0:s}),ce(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e}),ce(["h","hh"],function(e,t,n){t[ge]=k(e),g(n).bigHour=!0}),ce("hmm",function(e,t,n){var s=e.length-2;t[ge]=k(e.substr(0,s)),t[pe]=k(e.substr(s)),g(n).bigHour=!0}),ce("hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[ge]=k(e.substr(0,s)),t[pe]=k(e.substr(s,2)),t[ve]=k(e.substr(i)),g(n).bigHour=!0}),ce("Hmm",function(e,t,n){var s=e.length-2;t[ge]=k(e.substr(0,s)),t[pe]=k(e.substr(s))}),ce("Hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[ge]=k(e.substr(0,s)),t[pe]=k(e.substr(s,2)),t[ve]=k(e.substr(i))});var et,tt=Te("Hours",!0),nt={calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},invalidDate:"Invalid date",ordinal:"%d",dayOfMonthOrdinalParse:/\d{1,2}/,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},months:He,monthsShort:Re,week:{dow:0,doy:6},weekdays:je,weekdaysMin:ze,weekdaysShort:Ze,meridiemParse:/[ap]\.?m?\.?/i},st={},it={};function rt(e){return e?e.toLowerCase().replace("_","-"):e}function at(e){var t=null;if(!st[e]&&"undefined"!=typeof module&&module&&module.exports)try{t=et._abbr,require("./locale/"+e),ot(t)}catch(e){}return st[e]}function ot(e,t){var n;return e&&((n=l(t)?lt(e):ut(e,t))?et=n:"undefined"!=typeof console&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),et._abbr}function ut(e,t){if(null!==t){var n,s=nt;if(t.abbr=e,null!=st[e])T("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),s=st[e]._config;else if(null!=t.parentLocale)if(null!=st[t.parentLocale])s=st[t.parentLocale]._config;else{if(null==(n=at(t.parentLocale)))return it[t.parentLocale]||(it[t.parentLocale]=[]),it[t.parentLocale].push({name:e,config:t}),null;s=n._config}return st[e]=new P(b(s,t)),it[e]&&it[e].forEach(function(e){ut(e.name,e.config)}),ot(e),st[e]}return delete st[e],null}function lt(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return et;if(!o(e)){if(t=at(e))return t;e=[e]}return function(e){for(var t,n,s,i,r=0;r<e.length;){for(t=(i=rt(e[r]).split("-")).length,n=(n=rt(e[r+1]))?n.split("-"):null;0<t;){if(s=at(i.slice(0,t).join("-")))return s;if(n&&n.length>=t&&a(i,n,!0)>=t-1)break;t--}r++}return et}(e)}function dt(e){var t,n=e._a;return n&&-2===g(e).overflow&&(t=n[_e]<0||11<n[_e]?_e:n[ye]<1||n[ye]>Pe(n[me],n[_e])?ye:n[ge]<0||24<n[ge]||24===n[ge]&&(0!==n[pe]||0!==n[ve]||0!==n[we])?ge:n[pe]<0||59<n[pe]?pe:n[ve]<0||59<n[ve]?ve:n[we]<0||999<n[we]?we:-1,g(e)._overflowDayOfYear&&(t<me||ye<t)&&(t=ye),g(e)._overflowWeeks&&-1===t&&(t=Me),g(e)._overflowWeekday&&-1===t&&(t=Se),g(e).overflow=t),e}function ht(e,t,n){return null!=e?e:null!=t?t:n}function ct(e){var t,n,s,i,r,a=[];if(!e._d){var o,u;for(o=e,u=new Date(c.now()),s=o._useUTC?[u.getUTCFullYear(),u.getUTCMonth(),u.getUTCDate()]:[u.getFullYear(),u.getMonth(),u.getDate()],e._w&&null==e._a[ye]&&null==e._a[_e]&&function(e){var t,n,s,i,r,a,o,u;if(null!=(t=e._w).GG||null!=t.W||null!=t.E)r=1,a=4,n=ht(t.GG,e._a[me],Ie(Tt(),1,4).year),s=ht(t.W,1),((i=ht(t.E,1))<1||7<i)&&(u=!0);else{r=e._locale._week.dow,a=e._locale._week.doy;var l=Ie(Tt(),r,a);n=ht(t.gg,e._a[me],l.year),s=ht(t.w,l.week),null!=t.d?((i=t.d)<0||6<i)&&(u=!0):null!=t.e?(i=t.e+r,(t.e<0||6<t.e)&&(u=!0)):i=r}s<1||s>Ae(n,r,a)?g(e)._overflowWeeks=!0:null!=u?g(e)._overflowWeekday=!0:(o=Ee(n,s,i,r,a),e._a[me]=o.year,e._dayOfYear=o.dayOfYear)}(e),null!=e._dayOfYear&&(r=ht(e._a[me],s[me]),(e._dayOfYear>De(r)||0===e._dayOfYear)&&(g(e)._overflowDayOfYear=!0),n=Ge(r,0,e._dayOfYear),e._a[_e]=n.getUTCMonth(),e._a[ye]=n.getUTCDate()),t=0;t<3&&null==e._a[t];++t)e._a[t]=a[t]=s[t];for(;t<7;t++)e._a[t]=a[t]=null==e._a[t]?2===t?1:0:e._a[t];24===e._a[ge]&&0===e._a[pe]&&0===e._a[ve]&&0===e._a[we]&&(e._nextDay=!0,e._a[ge]=0),e._d=(e._useUTC?Ge:function(e,t,n,s,i,r,a){var o=new Date(e,t,n,s,i,r,a);return e<100&&0<=e&&isFinite(o.getFullYear())&&o.setFullYear(e),o}).apply(null,a),i=e._useUTC?e._d.getUTCDay():e._d.getDay(),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[ge]=24),e._w&&void 0!==e._w.d&&e._w.d!==i&&(g(e).weekdayMismatch=!0)}}var ft=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,mt=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,_t=/Z|[+-]\d\d(?::?\d\d)?/,yt=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],gt=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],pt=/^\/?Date\((\-?\d+)/i;function vt(e){var t,n,s,i,r,a,o=e._i,u=ft.exec(o)||mt.exec(o);if(u){for(g(e).iso=!0,t=0,n=yt.length;t<n;t++)if(yt[t][1].exec(u[1])){i=yt[t][0],s=!1!==yt[t][2];break}if(null==i)return void(e._isValid=!1);if(u[3]){for(t=0,n=gt.length;t<n;t++)if(gt[t][1].exec(u[3])){r=(u[2]||" ")+gt[t][0];break}if(null==r)return void(e._isValid=!1)}if(!s&&null!=r)return void(e._isValid=!1);if(u[4]){if(!_t.exec(u[4]))return void(e._isValid=!1);a="Z"}e._f=i+(r||"")+(a||""),kt(e)}else e._isValid=!1}var wt=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;function Mt(e,t,n,s,i,r){var a=[function(e){var t=parseInt(e,10);{if(t<=49)return 2e3+t;if(t<=999)return 1900+t}return t}(e),Re.indexOf(t),parseInt(n,10),parseInt(s,10),parseInt(i,10)];return r&&a.push(parseInt(r,10)),a}var St={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function Dt(e){var t,n,s,i=wt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim());if(i){var r=Mt(i[4],i[3],i[2],i[5],i[6],i[7]);if(t=i[1],n=r,s=e,t&&Ze.indexOf(t)!==new Date(n[0],n[1],n[2]).getDay()&&(g(s).weekdayMismatch=!0,!(s._isValid=!1)))return;e._a=r,e._tzm=function(e,t,n){if(e)return St[e];if(t)return 0;var s=parseInt(n,10),i=s%100;return(s-i)/100*60+i}(i[8],i[9],i[10]),e._d=Ge.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),g(e).rfc2822=!0}else e._isValid=!1}function kt(e){if(e._f!==c.ISO_8601)if(e._f!==c.RFC_2822){e._a=[],g(e).empty=!0;var t,n,s,i,r,a,o,u,l=""+e._i,d=l.length,h=0;for(s=j(e._f,e._locale).match(N)||[],t=0;t<s.length;t++)i=s[t],(n=(l.match(le(i,e))||[])[0])&&(0<(r=l.substr(0,l.indexOf(n))).length&&g(e).unusedInput.push(r),l=l.slice(l.indexOf(n)+n.length),h+=n.length),E[i]?(n?g(e).empty=!1:g(e).unusedTokens.push(i),a=i,u=e,null!=(o=n)&&m(he,a)&&he[a](o,u._a,u,a)):e._strict&&!n&&g(e).unusedTokens.push(i);g(e).charsLeftOver=d-h,0<l.length&&g(e).unusedInput.push(l),e._a[ge]<=12&&!0===g(e).bigHour&&0<e._a[ge]&&(g(e).bigHour=void 0),g(e).parsedDateParts=e._a.slice(0),g(e).meridiem=e._meridiem,e._a[ge]=function(e,t,n){var s;if(null==n)return t;return null!=e.meridiemHour?e.meridiemHour(t,n):(null!=e.isPM&&((s=e.isPM(n))&&t<12&&(t+=12),s||12!==t||(t=0)),t)}(e._locale,e._a[ge],e._meridiem),ct(e),dt(e)}else Dt(e);else vt(e)}function Yt(e){var t,n,s,i,r=e._i,a=e._f;return e._locale=e._locale||lt(e._l),null===r||void 0===a&&""===r?v({nullInput:!0}):("string"==typeof r&&(e._i=r=e._locale.preparse(r)),S(r)?new M(dt(r)):(h(r)?e._d=r:o(a)?function(e){var t,n,s,i,r;if(0===e._f.length)return g(e).invalidFormat=!0,e._d=new Date(NaN);for(i=0;i<e._f.length;i++)r=0,t=w({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._f=e._f[i],kt(t),p(t)&&(r+=g(t).charsLeftOver,r+=10*g(t).unusedTokens.length,g(t).score=r,(null==s||r<s)&&(s=r,n=t));_(e,n||t)}(e):a?kt(e):l(n=(t=e)._i)?t._d=new Date(c.now()):h(n)?t._d=new Date(n.valueOf()):"string"==typeof n?(s=t,null===(i=pt.exec(s._i))?(vt(s),!1===s._isValid&&(delete s._isValid,Dt(s),!1===s._isValid&&(delete s._isValid,c.createFromInputFallback(s)))):s._d=new Date(+i[1])):o(n)?(t._a=f(n.slice(0),function(e){return parseInt(e,10)}),ct(t)):u(n)?function(e){if(!e._d){var t=C(e._i);e._a=f([t.year,t.month,t.day||t.date,t.hour,t.minute,t.second,t.millisecond],function(e){return e&&parseInt(e,10)}),ct(e)}}(t):d(n)?t._d=new Date(n):c.createFromInputFallback(t),p(e)||(e._d=null),e))}function Ot(e,t,n,s,i){var r,a={};return!0!==n&&!1!==n||(s=n,n=void 0),(u(e)&&function(e){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(e).length;var t;for(t in e)if(e.hasOwnProperty(t))return!1;return!0}(e)||o(e)&&0===e.length)&&(e=void 0),a._isAMomentObject=!0,a._useUTC=a._isUTC=i,a._l=n,a._i=e,a._f=t,a._strict=s,(r=new M(dt(Yt(a))))._nextDay&&(r.add(1,"d"),r._nextDay=void 0),r}function Tt(e,t,n,s){return Ot(e,t,n,s,!1)}c.createFromInputFallback=n("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))}),c.ISO_8601=function(){},c.RFC_2822=function(){};var xt=n("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Tt.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:v()}),bt=n("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Tt.apply(null,arguments);return this.isValid()&&e.isValid()?this<e?this:e:v()});function Pt(e,t){var n,s;if(1===t.length&&o(t[0])&&(t=t[0]),!t.length)return Tt();for(n=t[0],s=1;s<t.length;++s)t[s].isValid()&&!t[s][e](n)||(n=t[s]);return n}var Wt=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Ht(e){var t=C(e),n=t.year||0,s=t.quarter||0,i=t.month||0,r=t.week||0,a=t.day||0,o=t.hour||0,u=t.minute||0,l=t.second||0,d=t.millisecond||0;this._isValid=function(e){for(var t in e)if(-1===Ye.call(Wt,t)||null!=e[t]&&isNaN(e[t]))return!1;for(var n=!1,s=0;s<Wt.length;++s)if(e[Wt[s]]){if(n)return!1;parseFloat(e[Wt[s]])!==k(e[Wt[s]])&&(n=!0)}return!0}(t),this._milliseconds=+d+1e3*l+6e4*u+1e3*o*60*60,this._days=+a+7*r,this._months=+i+3*s+12*n,this._data={},this._locale=lt(),this._bubble()}function Rt(e){return e instanceof Ht}function Ct(e){return e<0?-1*Math.round(-1*e):Math.round(e)}function Ft(e,n){I(e,0,0,function(){var e=this.utcOffset(),t="+";return e<0&&(e=-e,t="-"),t+U(~~(e/60),2)+n+U(~~e%60,2)})}Ft("Z",":"),Ft("ZZ",""),ue("Z",re),ue("ZZ",re),ce(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=Ut(re,e)});var Lt=/([\+\-]|\d\d)/gi;function Ut(e,t){var n=(t||"").match(e);if(null===n)return null;var s=((n[n.length-1]||[])+"").match(Lt)||["-",0,0],i=60*s[1]+k(s[2]);return 0===i?0:"+"===s[0]?i:-i}function Nt(e,t){var n,s;return t._isUTC?(n=t.clone(),s=(S(e)||h(e)?e.valueOf():Tt(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+s),c.updateOffset(n,!1),n):Tt(e).local()}function Gt(e){return 15*-Math.round(e._d.getTimezoneOffset()/15)}function Vt(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}c.updateOffset=function(){};var Et=/^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,It=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function At(e,t){var n,s,i,r=e,a=null;return Rt(e)?r={ms:e._milliseconds,d:e._days,M:e._months}:d(e)?(r={},t?r[t]=e:r.milliseconds=e):(a=Et.exec(e))?(n="-"===a[1]?-1:1,r={y:0,d:k(a[ye])*n,h:k(a[ge])*n,m:k(a[pe])*n,s:k(a[ve])*n,ms:k(Ct(1e3*a[we]))*n}):(a=It.exec(e))?(n="-"===a[1]?-1:(a[1],1),r={y:jt(a[2],n),M:jt(a[3],n),w:jt(a[4],n),d:jt(a[5],n),h:jt(a[6],n),m:jt(a[7],n),s:jt(a[8],n)}):null==r?r={}:"object"==typeof r&&("from"in r||"to"in r)&&(i=function(e,t){var n;if(!e.isValid()||!t.isValid())return{milliseconds:0,months:0};t=Nt(t,e),e.isBefore(t)?n=Zt(e,t):((n=Zt(t,e)).milliseconds=-n.milliseconds,n.months=-n.months);return n}(Tt(r.from),Tt(r.to)),(r={}).ms=i.milliseconds,r.M=i.months),s=new Ht(r),Rt(e)&&m(e,"_locale")&&(s._locale=e._locale),s}function jt(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function Zt(e,t){var n={milliseconds:0,months:0};return n.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function zt(s,i){return function(e,t){var n;return null===t||isNaN(+t)||(T(i,"moment()."+i+"(period, number) is deprecated. Please use moment()."+i+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),n=e,e=t,t=n),$t(this,At(e="string"==typeof e?+e:e,t),s),this}}function $t(e,t,n,s){var i=t._milliseconds,r=Ct(t._days),a=Ct(t._months);e.isValid()&&(s=null==s||s,a&&Ce(e,xe(e,"Month")+a*n),r&&be(e,"Date",xe(e,"Date")+r*n),i&&e._d.setTime(e._d.valueOf()+i*n),s&&c.updateOffset(e,r||a))}At.fn=Ht.prototype,At.invalid=function(){return At(NaN)};var qt=zt(1,"add"),Jt=zt(-1,"subtract");function Bt(e,t){var n=12*(t.year()-e.year())+(t.month()-e.month()),s=e.clone().add(n,"months");return-(n+(t-s<0?(t-s)/(s-e.clone().add(n-1,"months")):(t-s)/(e.clone().add(n+1,"months")-s)))||0}function Qt(e){var t;return void 0===e?this._locale._abbr:(null!=(t=lt(e))&&(this._locale=t),this)}c.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",c.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Xt=n("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return void 0===e?this.localeData():this.locale(e)});function Kt(){return this._locale}function en(e,t){I(0,[e,e.length],0,t)}function tn(e,t,n,s,i){var r;return null==e?Ie(this,s,i).year:((r=Ae(e,s,i))<t&&(t=r),function(e,t,n,s,i){var r=Ee(e,t,n,s,i),a=Ge(r.year,0,r.dayOfYear);return this.year(a.getUTCFullYear()),this.month(a.getUTCMonth()),this.date(a.getUTCDate()),this}.call(this,e,t,n,s,i))}I(0,["gg",2],0,function(){return this.weekYear()%100}),I(0,["GG",2],0,function(){return this.isoWeekYear()%100}),en("gggg","weekYear"),en("ggggg","weekYear"),en("GGGG","isoWeekYear"),en("GGGGG","isoWeekYear"),H("weekYear","gg"),H("isoWeekYear","GG"),L("weekYear",1),L("isoWeekYear",1),ue("G",se),ue("g",se),ue("GG",B,z),ue("gg",B,z),ue("GGGG",ee,q),ue("gggg",ee,q),ue("GGGGG",te,J),ue("ggggg",te,J),fe(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,s){t[s.substr(0,2)]=k(e)}),fe(["gg","GG"],function(e,t,n,s){t[s]=c.parseTwoDigitYear(e)}),I("Q",0,"Qo","quarter"),H("quarter","Q"),L("quarter",7),ue("Q",Z),ce("Q",function(e,t){t[_e]=3*(k(e)-1)}),I("D",["DD",2],"Do","date"),H("date","D"),L("date",9),ue("D",B),ue("DD",B,z),ue("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient}),ce(["D","DD"],ye),ce("Do",function(e,t){t[ye]=k(e.match(B)[0])});var nn=Te("Date",!0);I("DDD",["DDDD",3],"DDDo","dayOfYear"),H("dayOfYear","DDD"),L("dayOfYear",4),ue("DDD",K),ue("DDDD",$),ce(["DDD","DDDD"],function(e,t,n){n._dayOfYear=k(e)}),I("m",["mm",2],0,"minute"),H("minute","m"),L("minute",14),ue("m",B),ue("mm",B,z),ce(["m","mm"],pe);var sn=Te("Minutes",!1);I("s",["ss",2],0,"second"),H("second","s"),L("second",15),ue("s",B),ue("ss",B,z),ce(["s","ss"],ve);var rn,an=Te("Seconds",!1);for(I("S",0,0,function(){return~~(this.millisecond()/100)}),I(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),I(0,["SSS",3],0,"millisecond"),I(0,["SSSS",4],0,function(){return 10*this.millisecond()}),I(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),I(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),I(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),I(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),I(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),H("millisecond","ms"),L("millisecond",16),ue("S",K,Z),ue("SS",K,z),ue("SSS",K,$),rn="SSSS";rn.length<=9;rn+="S")ue(rn,ne);function on(e,t){t[we]=k(1e3*("0."+e))}for(rn="S";rn.length<=9;rn+="S")ce(rn,on);var un=Te("Milliseconds",!1);I("z",0,0,"zoneAbbr"),I("zz",0,0,"zoneName");var ln=M.prototype;function dn(e){return e}ln.add=qt,ln.calendar=function(e,t){var n=e||Tt(),s=Nt(n,this).startOf("day"),i=c.calendarFormat(this,s)||"sameElse",r=t&&(x(t[i])?t[i].call(this,n):t[i]);return this.format(r||this.localeData().calendar(i,this,Tt(n)))},ln.clone=function(){return new M(this)},ln.diff=function(e,t,n){var s,i,r;if(!this.isValid())return NaN;if(!(s=Nt(e,this)).isValid())return NaN;switch(i=6e4*(s.utcOffset()-this.utcOffset()),t=R(t)){case"year":r=Bt(this,s)/12;break;case"month":r=Bt(this,s);break;case"quarter":r=Bt(this,s)/3;break;case"second":r=(this-s)/1e3;break;case"minute":r=(this-s)/6e4;break;case"hour":r=(this-s)/36e5;break;case"day":r=(this-s-i)/864e5;break;case"week":r=(this-s-i)/6048e5;break;default:r=this-s}return n?r:D(r)},ln.endOf=function(e){return void 0===(e=R(e))||"millisecond"===e?this:("date"===e&&(e="day"),this.startOf(e).add(1,"isoWeek"===e?"week":e).subtract(1,"ms"))},ln.format=function(e){e||(e=this.isUtc()?c.defaultFormatUtc:c.defaultFormat);var t=A(this,e);return this.localeData().postformat(t)},ln.from=function(e,t){return this.isValid()&&(S(e)&&e.isValid()||Tt(e).isValid())?At({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},ln.fromNow=function(e){return this.from(Tt(),e)},ln.to=function(e,t){return this.isValid()&&(S(e)&&e.isValid()||Tt(e).isValid())?At({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},ln.toNow=function(e){return this.to(Tt(),e)},ln.get=function(e){return x(this[e=R(e)])?this[e]():this},ln.invalidAt=function(){return g(this).overflow},ln.isAfter=function(e,t){var n=S(e)?e:Tt(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=R(l(t)?"millisecond":t))?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf())},ln.isBefore=function(e,t){var n=S(e)?e:Tt(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=R(l(t)?"millisecond":t))?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf())},ln.isBetween=function(e,t,n,s){return("("===(s=s||"()")[0]?this.isAfter(e,n):!this.isBefore(e,n))&&(")"===s[1]?this.isBefore(t,n):!this.isAfter(t,n))},ln.isSame=function(e,t){var n,s=S(e)?e:Tt(e);return!(!this.isValid()||!s.isValid())&&("millisecond"===(t=R(t||"millisecond"))?this.valueOf()===s.valueOf():(n=s.valueOf(),this.clone().startOf(t).valueOf()<=n&&n<=this.clone().endOf(t).valueOf()))},ln.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)},ln.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)},ln.isValid=function(){return p(this)},ln.lang=Xt,ln.locale=Qt,ln.localeData=Kt,ln.max=bt,ln.min=xt,ln.parsingFlags=function(){return _({},g(this))},ln.set=function(e,t){if("object"==typeof e)for(var n=function(e){var t=[];for(var n in e)t.push({unit:n,priority:F[n]});return t.sort(function(e,t){return e.priority-t.priority}),t}(e=C(e)),s=0;s<n.length;s++)this[n[s].unit](e[n[s].unit]);else if(x(this[e=R(e)]))return this[e](t);return this},ln.startOf=function(e){switch(e=R(e)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":case"date":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===e&&this.weekday(0),"isoWeek"===e&&this.isoWeekday(1),"quarter"===e&&this.month(3*Math.floor(this.month()/3)),this},ln.subtract=Jt,ln.toArray=function(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]},ln.toObject=function(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}},ln.toDate=function(){return new Date(this.valueOf())},ln.toISOString=function(e){if(!this.isValid())return null;var t=!0!==e,n=t?this.clone().utc():this;return n.year()<0||9999<n.year()?A(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):x(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+60*this.utcOffset()*1e3).toISOString().replace("Z",A(n,"Z")):A(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")},ln.inspect=function(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="";this.isLocal()||(e=0===this.utcOffset()?"moment.utc":"moment.parseZone",t="Z");var n="["+e+'("]',s=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",i=t+'[")]';return this.format(n+s+"-MM-DD[T]HH:mm:ss.SSS"+i)},ln.toJSON=function(){return this.isValid()?this.toISOString():null},ln.toString=function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},ln.unix=function(){return Math.floor(this.valueOf()/1e3)},ln.valueOf=function(){return this._d.valueOf()-6e4*(this._offset||0)},ln.creationData=function(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}},ln.year=Oe,ln.isLeapYear=function(){return ke(this.year())},ln.weekYear=function(e){return tn.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)},ln.isoWeekYear=function(e){return tn.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)},ln.quarter=ln.quarters=function(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)},ln.month=Fe,ln.daysInMonth=function(){return Pe(this.year(),this.month())},ln.week=ln.weeks=function(e){var t=this.localeData().week(this);return null==e?t:this.add(7*(e-t),"d")},ln.isoWeek=ln.isoWeeks=function(e){var t=Ie(this,1,4).week;return null==e?t:this.add(7*(e-t),"d")},ln.weeksInYear=function(){var e=this.localeData()._week;return Ae(this.year(),e.dow,e.doy)},ln.isoWeeksInYear=function(){return Ae(this.year(),1,4)},ln.date=nn,ln.day=ln.days=function(e){if(!this.isValid())return null!=e?this:NaN;var t,n,s=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(t=e,n=this.localeData(),e="string"!=typeof t?t:isNaN(t)?"number"==typeof(t=n.weekdaysParse(t))?t:null:parseInt(t,10),this.add(e-s,"d")):s},ln.weekday=function(e){if(!this.isValid())return null!=e?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return null==e?t:this.add(e-t,"d")},ln.isoWeekday=function(e){if(!this.isValid())return null!=e?this:NaN;if(null!=e){var t=(n=e,s=this.localeData(),"string"==typeof n?s.weekdaysParse(n)%7||7:isNaN(n)?null:n);return this.day(this.day()%7?t:t-7)}return this.day()||7;var n,s},ln.dayOfYear=function(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d")},ln.hour=ln.hours=tt,ln.minute=ln.minutes=sn,ln.second=ln.seconds=an,ln.millisecond=ln.milliseconds=un,ln.utcOffset=function(e,t,n){var s,i=this._offset||0;if(!this.isValid())return null!=e?this:NaN;if(null!=e){if("string"==typeof e){if(null===(e=Ut(re,e)))return this}else Math.abs(e)<16&&!n&&(e*=60);return!this._isUTC&&t&&(s=Gt(this)),this._offset=e,this._isUTC=!0,null!=s&&this.add(s,"m"),i!==e&&(!t||this._changeInProgress?$t(this,At(e-i,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,c.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?i:Gt(this)},ln.utc=function(e){return this.utcOffset(0,e)},ln.local=function(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Gt(this),"m")),this},ln.parseZone=function(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var e=Ut(ie,this._i);null!=e?this.utcOffset(e):this.utcOffset(0,!0)}return this},ln.hasAlignedHourOffset=function(e){return!!this.isValid()&&(e=e?Tt(e).utcOffset():0,(this.utcOffset()-e)%60==0)},ln.isDST=function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()},ln.isLocal=function(){return!!this.isValid()&&!this._isUTC},ln.isUtcOffset=function(){return!!this.isValid()&&this._isUTC},ln.isUtc=Vt,ln.isUTC=Vt,ln.zoneAbbr=function(){return this._isUTC?"UTC":""},ln.zoneName=function(){return this._isUTC?"Coordinated Universal Time":""},ln.dates=n("dates accessor is deprecated. Use date instead.",nn),ln.months=n("months accessor is deprecated. Use month instead",Fe),ln.years=n("years accessor is deprecated. Use year instead",Oe),ln.zone=n("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",function(e,t){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}),ln.isDSTShifted=n("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",function(){if(!l(this._isDSTShifted))return this._isDSTShifted;var e={};if(w(e,this),(e=Yt(e))._a){var t=e._isUTC?y(e._a):Tt(e._a);this._isDSTShifted=this.isValid()&&0<a(e._a,t.toArray())}else this._isDSTShifted=!1;return this._isDSTShifted});var hn=P.prototype;function cn(e,t,n,s){var i=lt(),r=y().set(s,t);return i[n](r,e)}function fn(e,t,n){if(d(e)&&(t=e,e=void 0),e=e||"",null!=t)return cn(e,t,n,"month");var s,i=[];for(s=0;s<12;s++)i[s]=cn(e,s,n,"month");return i}function mn(e,t,n,s){"boolean"==typeof e?d(t)&&(n=t,t=void 0):(t=e,e=!1,d(n=t)&&(n=t,t=void 0)),t=t||"";var i,r=lt(),a=e?r._week.dow:0;if(null!=n)return cn(t,(n+a)%7,s,"day");var o=[];for(i=0;i<7;i++)o[i]=cn(t,(i+a)%7,s,"day");return o}hn.calendar=function(e,t,n){var s=this._calendar[e]||this._calendar.sameElse;return x(s)?s.call(t,n):s},hn.longDateFormat=function(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e])},hn.invalidDate=function(){return this._invalidDate},hn.ordinal=function(e){return this._ordinal.replace("%d",e)},hn.preparse=dn,hn.postformat=dn,hn.relativeTime=function(e,t,n,s){var i=this._relativeTime[n];return x(i)?i(e,t,n,s):i.replace(/%d/i,e)},hn.pastFuture=function(e,t){var n=this._relativeTime[0<e?"future":"past"];return x(n)?n(t):n.replace(/%s/i,t)},hn.set=function(e){var t,n;for(n in e)x(t=e[n])?this[n]=t:this["_"+n]=t;this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)},hn.months=function(e,t){return e?o(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||We).test(t)?"format":"standalone"][e.month()]:o(this._months)?this._months:this._months.standalone},hn.monthsShort=function(e,t){return e?o(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[We.test(t)?"format":"standalone"][e.month()]:o(this._monthsShort)?this._monthsShort:this._monthsShort.standalone},hn.monthsParse=function(e,t,n){var s,i,r;if(this._monthsParseExact)return function(e,t,n){var s,i,r,a=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],s=0;s<12;++s)r=y([2e3,s]),this._shortMonthsParse[s]=this.monthsShort(r,"").toLocaleLowerCase(),this._longMonthsParse[s]=this.months(r,"").toLocaleLowerCase();return n?"MMM"===t?-1!==(i=Ye.call(this._shortMonthsParse,a))?i:null:-1!==(i=Ye.call(this._longMonthsParse,a))?i:null:"MMM"===t?-1!==(i=Ye.call(this._shortMonthsParse,a))?i:-1!==(i=Ye.call(this._longMonthsParse,a))?i:null:-1!==(i=Ye.call(this._longMonthsParse,a))?i:-1!==(i=Ye.call(this._shortMonthsParse,a))?i:null}.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),s=0;s<12;s++){if(i=y([2e3,s]),n&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[s]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),n||this._monthsParse[s]||(r="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[s]=new RegExp(r.replace(".",""),"i")),n&&"MMMM"===t&&this._longMonthsParse[s].test(e))return s;if(n&&"MMM"===t&&this._shortMonthsParse[s].test(e))return s;if(!n&&this._monthsParse[s].test(e))return s}},hn.monthsRegex=function(e){return this._monthsParseExact?(m(this,"_monthsRegex")||Ne.call(this),e?this._monthsStrictRegex:this._monthsRegex):(m(this,"_monthsRegex")||(this._monthsRegex=Ue),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)},hn.monthsShortRegex=function(e){return this._monthsParseExact?(m(this,"_monthsRegex")||Ne.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(m(this,"_monthsShortRegex")||(this._monthsShortRegex=Le),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)},hn.week=function(e){return Ie(e,this._week.dow,this._week.doy).week},hn.firstDayOfYear=function(){return this._week.doy},hn.firstDayOfWeek=function(){return this._week.dow},hn.weekdays=function(e,t){return e?o(this._weekdays)?this._weekdays[e.day()]:this._weekdays[this._weekdays.isFormat.test(t)?"format":"standalone"][e.day()]:o(this._weekdays)?this._weekdays:this._weekdays.standalone},hn.weekdaysMin=function(e){return e?this._weekdaysMin[e.day()]:this._weekdaysMin},hn.weekdaysShort=function(e){return e?this._weekdaysShort[e.day()]:this._weekdaysShort},hn.weekdaysParse=function(e,t,n){var s,i,r;if(this._weekdaysParseExact)return function(e,t,n){var s,i,r,a=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],s=0;s<7;++s)r=y([2e3,1]).day(s),this._minWeekdaysParse[s]=this.weekdaysMin(r,"").toLocaleLowerCase(),this._shortWeekdaysParse[s]=this.weekdaysShort(r,"").toLocaleLowerCase(),this._weekdaysParse[s]=this.weekdays(r,"").toLocaleLowerCase();return n?"dddd"===t?-1!==(i=Ye.call(this._weekdaysParse,a))?i:null:"ddd"===t?-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:null:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:null:"dddd"===t?-1!==(i=Ye.call(this._weekdaysParse,a))?i:-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:null:"ddd"===t?-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:-1!==(i=Ye.call(this._weekdaysParse,a))?i:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:null:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:-1!==(i=Ye.call(this._weekdaysParse,a))?i:-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:null}.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),s=0;s<7;s++){if(i=y([2e3,1]).day(s),n&&!this._fullWeekdaysParse[s]&&(this._fullWeekdaysParse[s]=new RegExp("^"+this.weekdays(i,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[s]=new RegExp("^"+this.weekdaysShort(i,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[s]=new RegExp("^"+this.weekdaysMin(i,"").replace(".",".?")+"$","i")),this._weekdaysParse[s]||(r="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[s]=new RegExp(r.replace(".",""),"i")),n&&"dddd"===t&&this._fullWeekdaysParse[s].test(e))return s;if(n&&"ddd"===t&&this._shortWeekdaysParse[s].test(e))return s;if(n&&"dd"===t&&this._minWeekdaysParse[s].test(e))return s;if(!n&&this._weekdaysParse[s].test(e))return s}},hn.weekdaysRegex=function(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Be.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(m(this,"_weekdaysRegex")||(this._weekdaysRegex=$e),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)},hn.weekdaysShortRegex=function(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Be.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(m(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=qe),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)},hn.weekdaysMinRegex=function(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Be.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(m(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Je),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)},hn.isPM=function(e){return"p"===(e+"").toLowerCase().charAt(0)},hn.meridiem=function(e,t,n){return 11<e?n?"pm":"PM":n?"am":"AM"},ot("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10;return e+(1===k(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")}}),c.lang=n("moment.lang is deprecated. Use moment.locale instead.",ot),c.langData=n("moment.langData is deprecated. Use moment.localeData instead.",lt);var _n=Math.abs;function yn(e,t,n,s){var i=At(t,n);return e._milliseconds+=s*i._milliseconds,e._days+=s*i._days,e._months+=s*i._months,e._bubble()}function gn(e){return e<0?Math.floor(e):Math.ceil(e)}function pn(e){return 4800*e/146097}function vn(e){return 146097*e/4800}function wn(e){return function(){return this.as(e)}}var Mn=wn("ms"),Sn=wn("s"),Dn=wn("m"),kn=wn("h"),Yn=wn("d"),On=wn("w"),Tn=wn("M"),xn=wn("y");function bn(e){return function(){return this.isValid()?this._data[e]:NaN}}var Pn=bn("milliseconds"),Wn=bn("seconds"),Hn=bn("minutes"),Rn=bn("hours"),Cn=bn("days"),Fn=bn("months"),Ln=bn("years");var Un=Math.round,Nn={ss:44,s:45,m:45,h:22,d:26,M:11};var Gn=Math.abs;function Vn(e){return(0<e)-(e<0)||+e}function En(){if(!this.isValid())return this.localeData().invalidDate();var e,t,n=Gn(this._milliseconds)/1e3,s=Gn(this._days),i=Gn(this._months);t=D((e=D(n/60))/60),n%=60,e%=60;var r=D(i/12),a=i%=12,o=s,u=t,l=e,d=n?n.toFixed(3).replace(/\.?0+$/,""):"",h=this.asSeconds();if(!h)return"P0D";var c=h<0?"-":"",f=Vn(this._months)!==Vn(h)?"-":"",m=Vn(this._days)!==Vn(h)?"-":"",_=Vn(this._milliseconds)!==Vn(h)?"-":"";return c+"P"+(r?f+r+"Y":"")+(a?f+a+"M":"")+(o?m+o+"D":"")+(u||l||d?"T":"")+(u?_+u+"H":"")+(l?_+l+"M":"")+(d?_+d+"S":"")}var In=Ht.prototype;return In.isValid=function(){return this._isValid},In.abs=function(){var e=this._data;return this._milliseconds=_n(this._milliseconds),this._days=_n(this._days),this._months=_n(this._months),e.milliseconds=_n(e.milliseconds),e.seconds=_n(e.seconds),e.minutes=_n(e.minutes),e.hours=_n(e.hours),e.months=_n(e.months),e.years=_n(e.years),this},In.add=function(e,t){return yn(this,e,t,1)},In.subtract=function(e,t){return yn(this,e,t,-1)},In.as=function(e){if(!this.isValid())return NaN;var t,n,s=this._milliseconds;if("month"===(e=R(e))||"year"===e)return t=this._days+s/864e5,n=this._months+pn(t),"month"===e?n:n/12;switch(t=this._days+Math.round(vn(this._months)),e){case"week":return t/7+s/6048e5;case"day":return t+s/864e5;case"hour":return 24*t+s/36e5;case"minute":return 1440*t+s/6e4;case"second":return 86400*t+s/1e3;case"millisecond":return Math.floor(864e5*t)+s;default:throw new Error("Unknown unit "+e)}},In.asMilliseconds=Mn,In.asSeconds=Sn,In.asMinutes=Dn,In.asHours=kn,In.asDays=Yn,In.asWeeks=On,In.asMonths=Tn,In.asYears=xn,In.valueOf=function(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*k(this._months/12):NaN},In._bubble=function(){var e,t,n,s,i,r=this._milliseconds,a=this._days,o=this._months,u=this._data;return 0<=r&&0<=a&&0<=o||r<=0&&a<=0&&o<=0||(r+=864e5*gn(vn(o)+a),o=a=0),u.milliseconds=r%1e3,e=D(r/1e3),u.seconds=e%60,t=D(e/60),u.minutes=t%60,n=D(t/60),u.hours=n%24,o+=i=D(pn(a+=D(n/24))),a-=gn(vn(i)),s=D(o/12),o%=12,u.days=a,u.months=o,u.years=s,this},In.clone=function(){return At(this)},In.get=function(e){return e=R(e),this.isValid()?this[e+"s"]():NaN},In.milliseconds=Pn,In.seconds=Wn,In.minutes=Hn,In.hours=Rn,In.days=Cn,In.weeks=function(){return D(this.days()/7)},In.months=Fn,In.years=Ln,In.humanize=function(e){if(!this.isValid())return this.localeData().invalidDate();var t,n,s,i,r,a,o,u,l,d,h,c=this.localeData(),f=(n=!e,s=c,i=At(t=this).abs(),r=Un(i.as("s")),a=Un(i.as("m")),o=Un(i.as("h")),u=Un(i.as("d")),l=Un(i.as("M")),d=Un(i.as("y")),(h=r<=Nn.ss&&["s",r]||r<Nn.s&&["ss",r]||a<=1&&["m"]||a<Nn.m&&["mm",a]||o<=1&&["h"]||o<Nn.h&&["hh",o]||u<=1&&["d"]||u<Nn.d&&["dd",u]||l<=1&&["M"]||l<Nn.M&&["MM",l]||d<=1&&["y"]||["yy",d])[2]=n,h[3]=0<+t,h[4]=s,function(e,t,n,s,i){return i.relativeTime(t||1,!!n,e,s)}.apply(null,h));return e&&(f=c.pastFuture(+this,f)),c.postformat(f)},In.toISOString=En,In.toString=En,In.toJSON=En,In.locale=Qt,In.localeData=Kt,In.toIsoString=n("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",En),In.lang=Xt,I("X",0,0,"unix"),I("x",0,0,"valueOf"),ue("x",se),ue("X",/[+-]?\d+(\.\d{1,3})?/),ce("X",function(e,t,n){n._d=new Date(1e3*parseFloat(e,10))}),ce("x",function(e,t,n){n._d=new Date(k(e))}),c.version="2.22.1",e=Tt,c.fn=ln,c.min=function(){return Pt("isBefore",[].slice.call(arguments,0))},c.max=function(){return Pt("isAfter",[].slice.call(arguments,0))},c.now=function(){return Date.now?Date.now():+new Date},c.utc=y,c.unix=function(e){return Tt(1e3*e)},c.months=function(e,t){return fn(e,t,"months")},c.isDate=h,c.locale=ot,c.invalid=v,c.duration=At,c.isMoment=S,c.weekdays=function(e,t,n){return mn(e,t,n,"weekdays")},c.parseZone=function(){return Tt.apply(null,arguments).parseZone()},c.localeData=lt,c.isDuration=Rt,c.monthsShort=function(e,t){return fn(e,t,"monthsShort")},c.weekdaysMin=function(e,t,n){return mn(e,t,n,"weekdaysMin")},c.defineLocale=ut,c.updateLocale=function(e,t){if(null!=t){var n,s,i=nt;null!=(s=at(e))&&(i=s._config),(n=new P(t=b(i,t))).parentLocale=st[e],st[e]=n,ot(e)}else null!=st[e]&&(null!=st[e].parentLocale?st[e]=st[e].parentLocale:null!=st[e]&&delete st[e]);return st[e]},c.locales=function(){return s(st)},c.weekdaysShort=function(e,t,n){return mn(e,t,n,"weekdaysShort")},c.normalizeUnits=R,c.relativeTimeRounding=function(e){return void 0===e?Un:"function"==typeof e&&(Un=e,!0)},c.relativeTimeThreshold=function(e,t){return void 0!==Nn[e]&&(void 0===t?Nn[e]:(Nn[e]=t,"s"===e&&(Nn.ss=t-1),!0))},c.calendarFormat=function(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"},c.prototype=ln,c.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"YYYY-[W]WW",MONTH:"YYYY-MM"},c});


// datepicker
!function(t,a){if("function"==typeof define&&define.amd)define(["moment","jquery"],function(t,e){return e.fn||(e.fn={}),a(t,e)});else if("object"==typeof module&&module.exports){var e="undefined"!=typeof window?window.jQuery:void 0;e||(e=require("jquery")).fn||(e.fn={});var i="undefined"!=typeof window&&void 0!==window.moment?window.moment:require("moment");module.exports=a(i,e)}else t.daterangepicker=a(t.moment,t.jQuery)}(this,function(H,R){var i=function(t,e,a){if(this.parentEl="body",this.element=R(t),this.startDate=H().startOf("day"),this.endDate=H().endOf("day"),this.minDate=!1,this.maxDate=!1,this.maxSpan=!1,this.autoApply=!1,this.singleDatePicker=!1,this.showDropdowns=!1,this.minYear=H().subtract(100,"year").format("YYYY"),this.maxYear=H().add(100,"year").format("YYYY"),this.showWeekNumbers=!1,this.showISOWeekNumbers=!1,this.showCustomRangeLabel=!0,this.timePicker=!1,this.timePicker24Hour=!1,this.timePickerIncrement=1,this.timePickerSeconds=!1,this.linkedCalendars=!0,this.autoUpdateInput=!0,this.alwaysShowCalendars=!1,this.ranges={},this.opens="right",this.element.hasClass("pull-right")&&(this.opens="left"),this.drops="down",this.element.hasClass("dropup")&&(this.drops="up"),this.buttonClasses="btn btn-sm",this.applyButtonClasses="btn-primary",this.cancelButtonClasses="btn-default",this.locale={direction:"ltr",format:H.localeData().longDateFormat("L"),separator:" - ",applyLabel:"Apply",cancelLabel:"Cancel",weekLabel:"W",customRangeLabel:"Custom Range",daysOfWeek:H.weekdaysMin(),monthNames:H.monthsShort(),firstDay:H.localeData().firstDayOfWeek()},this.callback=function(){},this.isShowing=!1,this.leftCalendar={},this.rightCalendar={},"object"==typeof e&&null!==e||(e={}),"string"==typeof(e=R.extend(this.element.data(),e)).template||e.template instanceof R||(e.template='<div class="daterangepicker"><div class="ranges"></div><div class="drp-calendar left"><div class="calendar-table"></div><div class="calendar-time"></div></div><div class="drp-calendar right"><div class="calendar-table"></div><div class="calendar-time"></div></div><div class="drp-buttons"><span class="drp-selected"></span><button class="cancelBtn" type="button"></button><button class="applyBtn" disabled="disabled" type="button"></button> </div></div>'),this.parentEl=e.parentEl&&R(e.parentEl).length?R(e.parentEl):R(this.parentEl),this.container=R(e.template).appendTo(this.parentEl),"object"==typeof e.locale&&("string"==typeof e.locale.direction&&(this.locale.direction=e.locale.direction),"string"==typeof e.locale.format&&(this.locale.format=e.locale.format),"string"==typeof e.locale.separator&&(this.locale.separator=e.locale.separator),"object"==typeof e.locale.daysOfWeek&&(this.locale.daysOfWeek=e.locale.daysOfWeek.slice()),"object"==typeof e.locale.monthNames&&(this.locale.monthNames=e.locale.monthNames.slice()),"number"==typeof e.locale.firstDay&&(this.locale.firstDay=e.locale.firstDay),"string"==typeof e.locale.applyLabel&&(this.locale.applyLabel=e.locale.applyLabel),"string"==typeof e.locale.cancelLabel&&(this.locale.cancelLabel=e.locale.cancelLabel),"string"==typeof e.locale.weekLabel&&(this.locale.weekLabel=e.locale.weekLabel),"string"==typeof e.locale.customRangeLabel)){(d=document.createElement("textarea")).innerHTML=e.locale.customRangeLabel;var i=d.value;this.locale.customRangeLabel=i}if(this.container.addClass(this.locale.direction),"string"==typeof e.startDate&&(this.startDate=H(e.startDate,this.locale.format)),"string"==typeof e.endDate&&(this.endDate=H(e.endDate,this.locale.format)),"string"==typeof e.minDate&&(this.minDate=H(e.minDate,this.locale.format)),"string"==typeof e.maxDate&&(this.maxDate=H(e.maxDate,this.locale.format)),"object"==typeof e.startDate&&(this.startDate=H(e.startDate)),"object"==typeof e.endDate&&(this.endDate=H(e.endDate)),"object"==typeof e.minDate&&(this.minDate=H(e.minDate)),"object"==typeof e.maxDate&&(this.maxDate=H(e.maxDate)),this.minDate&&this.startDate.isBefore(this.minDate)&&(this.startDate=this.minDate.clone()),this.maxDate&&this.endDate.isAfter(this.maxDate)&&(this.endDate=this.maxDate.clone()),"string"==typeof e.applyButtonClasses&&(this.applyButtonClasses=e.applyButtonClasses),"string"==typeof e.applyClass&&(this.applyButtonClasses=e.applyClass),"string"==typeof e.cancelButtonClasses&&(this.cancelButtonClasses=e.cancelButtonClasses),"string"==typeof e.cancelClass&&(this.cancelButtonClasses=e.cancelClass),"object"==typeof e.maxSpan&&(this.maxSpan=e.maxSpan),"object"==typeof e.dateLimit&&(this.maxSpan=e.dateLimit),"string"==typeof e.opens&&(this.opens=e.opens),"string"==typeof e.drops&&(this.drops=e.drops),"boolean"==typeof e.showWeekNumbers&&(this.showWeekNumbers=e.showWeekNumbers),"boolean"==typeof e.showISOWeekNumbers&&(this.showISOWeekNumbers=e.showISOWeekNumbers),"string"==typeof e.buttonClasses&&(this.buttonClasses=e.buttonClasses),"object"==typeof e.buttonClasses&&(this.buttonClasses=e.buttonClasses.join(" ")),"boolean"==typeof e.showDropdowns&&(this.showDropdowns=e.showDropdowns),"number"==typeof e.minYear&&(this.minYear=e.minYear),"number"==typeof e.maxYear&&(this.maxYear=e.maxYear),"boolean"==typeof e.showCustomRangeLabel&&(this.showCustomRangeLabel=e.showCustomRangeLabel),"boolean"==typeof e.singleDatePicker&&(this.singleDatePicker=e.singleDatePicker,this.singleDatePicker&&(this.endDate=this.startDate.clone())),"boolean"==typeof e.timePicker&&(this.timePicker=e.timePicker),"boolean"==typeof e.timePickerSeconds&&(this.timePickerSeconds=e.timePickerSeconds),"number"==typeof e.timePickerIncrement&&(this.timePickerIncrement=e.timePickerIncrement),"boolean"==typeof e.timePicker24Hour&&(this.timePicker24Hour=e.timePicker24Hour),"boolean"==typeof e.autoApply&&(this.autoApply=e.autoApply),"boolean"==typeof e.autoUpdateInput&&(this.autoUpdateInput=e.autoUpdateInput),"boolean"==typeof e.linkedCalendars&&(this.linkedCalendars=e.linkedCalendars),"function"==typeof e.isInvalidDate&&(this.isInvalidDate=e.isInvalidDate),"function"==typeof e.isCustomDate&&(this.isCustomDate=e.isCustomDate),"boolean"==typeof e.alwaysShowCalendars&&(this.alwaysShowCalendars=e.alwaysShowCalendars),0!=this.locale.firstDay)for(var s=this.locale.firstDay;0<s;)this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift()),s--;var n,r,o;if(void 0===e.startDate&&void 0===e.endDate&&R(this.element).is(":text")){var h=R(this.element).val(),l=h.split(this.locale.separator);n=r=null,2==l.length?(n=H(l[0],this.locale.format),r=H(l[1],this.locale.format)):this.singleDatePicker&&""!==h&&(n=H(h,this.locale.format),r=H(h,this.locale.format)),null!==n&&null!==r&&(this.setStartDate(n),this.setEndDate(r))}if("object"==typeof e.ranges){for(o in e.ranges){n="string"==typeof e.ranges[o][0]?H(e.ranges[o][0],this.locale.format):H(e.ranges[o][0]),r="string"==typeof e.ranges[o][1]?H(e.ranges[o][1],this.locale.format):H(e.ranges[o][1]),this.minDate&&n.isBefore(this.minDate)&&(n=this.minDate.clone());var c=this.maxDate;if(this.maxSpan&&c&&n.clone().add(this.maxSpan).isAfter(c)&&(c=n.clone().add(this.maxSpan)),c&&r.isAfter(c)&&(r=c.clone()),!(this.minDate&&r.isBefore(this.minDate,this.timepicker?"minute":"day")||c&&n.isAfter(c,this.timepicker?"minute":"day"))){var d;(d=document.createElement("textarea")).innerHTML=o;i=d.value;this.ranges[i]=[n,r]}}var m="<ul>";for(o in this.ranges)m+='<li data-range-key="'+o+'">'+o+"</li>";this.showCustomRangeLabel&&(m+='<li data-range-key="'+this.locale.customRangeLabel+'">'+this.locale.customRangeLabel+"</li>"),m+="</ul>",this.container.find(".ranges").prepend(m)}"function"==typeof a&&(this.callback=a),this.timePicker||(this.startDate=this.startDate.startOf("day"),this.endDate=this.endDate.endOf("day"),this.container.find(".calendar-time").hide()),this.timePicker&&this.autoApply&&(this.autoApply=!1),this.autoApply&&this.container.addClass("auto-apply"),"object"==typeof e.ranges&&this.container.addClass("show-ranges"),this.singleDatePicker&&(this.container.addClass("single"),this.container.find(".drp-calendar.left").addClass("single"),this.container.find(".drp-calendar.left").show(),this.container.find(".drp-calendar.right").hide(),this.timePicker||this.container.addClass("auto-apply")),(void 0===e.ranges&&!this.singleDatePicker||this.alwaysShowCalendars)&&this.container.addClass("show-calendar"),this.container.addClass("opens"+this.opens),this.container.find(".applyBtn, .cancelBtn").addClass(this.buttonClasses),this.applyButtonClasses.length&&this.container.find(".applyBtn").addClass(this.applyButtonClasses),this.cancelButtonClasses.length&&this.container.find(".cancelBtn").addClass(this.cancelButtonClasses),this.container.find(".applyBtn").html(this.locale.applyLabel),this.container.find(".cancelBtn").html(this.locale.cancelLabel),this.container.find(".drp-calendar").on("click.daterangepicker",".prev",R.proxy(this.clickPrev,this)).on("click.daterangepicker",".next",R.proxy(this.clickNext,this)).on("mousedown.daterangepicker","td.available",R.proxy(this.clickDate,this)).on("mouseenter.daterangepicker","td.available",R.proxy(this.hoverDate,this)).on("change.daterangepicker","select.yearselect",R.proxy(this.monthOrYearChanged,this)).on("change.daterangepicker","select.monthselect",R.proxy(this.monthOrYearChanged,this)).on("change.daterangepicker","select.hourselect,select.minuteselect,select.secondselect,select.ampmselect",R.proxy(this.timeChanged,this)),this.container.find(".ranges").on("click.daterangepicker","li",R.proxy(this.clickRange,this)),this.container.find(".drp-buttons").on("click.daterangepicker","button.applyBtn",R.proxy(this.clickApply,this)).on("click.daterangepicker","button.cancelBtn",R.proxy(this.clickCancel,this)),this.element.is("input")||this.element.is("button")?this.element.on({"click.daterangepicker":R.proxy(this.show,this),"focus.daterangepicker":R.proxy(this.show,this),"keyup.daterangepicker":R.proxy(this.elementChanged,this),"keydown.daterangepicker":R.proxy(this.keydown,this)}):(this.element.on("click.daterangepicker",R.proxy(this.toggle,this)),this.element.on("keydown.daterangepicker",R.proxy(this.toggle,this))),this.updateElement()};return i.prototype={constructor:i,setStartDate:function(t){"string"==typeof t&&(this.startDate=H(t,this.locale.format)),"object"==typeof t&&(this.startDate=H(t)),this.timePicker||(this.startDate=this.startDate.startOf("day")),this.timePicker&&this.timePickerIncrement&&this.startDate.minute(Math.round(this.startDate.minute()/this.timePickerIncrement)*this.timePickerIncrement),this.minDate&&this.startDate.isBefore(this.minDate)&&(this.startDate=this.minDate.clone(),this.timePicker&&this.timePickerIncrement&&this.startDate.minute(Math.round(this.startDate.minute()/this.timePickerIncrement)*this.timePickerIncrement)),this.maxDate&&this.startDate.isAfter(this.maxDate)&&(this.startDate=this.maxDate.clone(),this.timePicker&&this.timePickerIncrement&&this.startDate.minute(Math.floor(this.startDate.minute()/this.timePickerIncrement)*this.timePickerIncrement)),this.isShowing||this.updateElement(),this.updateMonthsInView()},setEndDate:function(t){"string"==typeof t&&(this.endDate=H(t,this.locale.format)),"object"==typeof t&&(this.endDate=H(t)),this.timePicker||(this.endDate=this.endDate.add(1,"d").startOf("day").subtract(1,"second")),this.timePicker&&this.timePickerIncrement&&this.endDate.minute(Math.round(this.endDate.minute()/this.timePickerIncrement)*this.timePickerIncrement),this.endDate.isBefore(this.startDate)&&(this.endDate=this.startDate.clone()),this.maxDate&&this.endDate.isAfter(this.maxDate)&&(this.endDate=this.maxDate.clone()),this.maxSpan&&this.startDate.clone().add(this.maxSpan).isBefore(this.endDate)&&(this.endDate=this.startDate.clone().add(this.maxSpan)),this.previousRightTime=this.endDate.clone(),this.container.find(".drp-selected").html(this.startDate.format(this.locale.format)+this.locale.separator+this.endDate.format(this.locale.format)),this.isShowing||this.updateElement(),this.updateMonthsInView()},isInvalidDate:function(){return!1},isCustomDate:function(){return!1},updateView:function(){this.timePicker&&(this.renderTimePicker("left"),this.renderTimePicker("right"),this.endDate?this.container.find(".right .calendar-time select").removeAttr("disabled").removeClass("disabled"):this.container.find(".right .calendar-time select").attr("disabled","disabled").addClass("disabled")),this.endDate&&this.container.find(".drp-selected").html(this.startDate.format(this.locale.format)+this.locale.separator+this.endDate.format(this.locale.format)),this.updateMonthsInView(),this.updateCalendars(),this.updateFormInputs()},updateMonthsInView:function(){if(this.endDate){if(!this.singleDatePicker&&this.leftCalendar.month&&this.rightCalendar.month&&(this.startDate.format("YYYY-MM")==this.leftCalendar.month.format("YYYY-MM")||this.startDate.format("YYYY-MM")==this.rightCalendar.month.format("YYYY-MM"))&&(this.endDate.format("YYYY-MM")==this.leftCalendar.month.format("YYYY-MM")||this.endDate.format("YYYY-MM")==this.rightCalendar.month.format("YYYY-MM")))return;this.leftCalendar.month=this.startDate.clone().date(2),this.linkedCalendars||this.endDate.month()==this.startDate.month()&&this.endDate.year()==this.startDate.year()?this.rightCalendar.month=this.startDate.clone().date(2).add(1,"month"):this.rightCalendar.month=this.endDate.clone().date(2)}else this.leftCalendar.month.format("YYYY-MM")!=this.startDate.format("YYYY-MM")&&this.rightCalendar.month.format("YYYY-MM")!=this.startDate.format("YYYY-MM")&&(this.leftCalendar.month=this.startDate.clone().date(2),this.rightCalendar.month=this.startDate.clone().date(2).add(1,"month"));this.maxDate&&this.linkedCalendars&&!this.singleDatePicker&&this.rightCalendar.month>this.maxDate&&(this.rightCalendar.month=this.maxDate.clone().date(2),this.leftCalendar.month=this.maxDate.clone().date(2).subtract(1,"month"))},updateCalendars:function(){if(this.timePicker){var t,e,a,i;if(this.endDate){if(t=parseInt(this.container.find(".left .hourselect").val(),10),e=parseInt(this.container.find(".left .minuteselect").val(),10),a=this.timePickerSeconds?parseInt(this.container.find(".left .secondselect").val(),10):0,!this.timePicker24Hour)"PM"===(i=this.container.find(".left .ampmselect").val())&&t<12&&(t+=12),"AM"===i&&12===t&&(t=0)}else if(t=parseInt(this.container.find(".right .hourselect").val(),10),e=parseInt(this.container.find(".right .minuteselect").val(),10),a=this.timePickerSeconds?parseInt(this.container.find(".right .secondselect").val(),10):0,!this.timePicker24Hour)"PM"===(i=this.container.find(".right .ampmselect").val())&&t<12&&(t+=12),"AM"===i&&12===t&&(t=0);this.leftCalendar.month.hour(t).minute(e).second(a),this.rightCalendar.month.hour(t).minute(e).second(a)}this.renderCalendar("left"),this.renderCalendar("right"),this.container.find(".ranges li").removeClass("active"),null!=this.endDate&&this.calculateChosenLabel()},renderCalendar:function(t){var e,a=(e="left"==t?this.leftCalendar:this.rightCalendar).month.month(),i=e.month.year(),s=e.month.hour(),n=e.month.minute(),r=e.month.second(),o=H([i,a]).daysInMonth(),h=H([i,a,1]),l=H([i,a,o]),c=H(h).subtract(1,"month").month(),d=H(h).subtract(1,"month").year(),m=H([d,c]).daysInMonth(),f=h.day();(e=[]).firstDay=h,e.lastDay=l;for(var p=0;p<6;p++)e[p]=[];var u=m-f+this.locale.firstDay+1;m<u&&(u-=7),f==this.locale.firstDay&&(u=m-6);for(var D=H([d,c,u,12,n,r]),g=(p=0,0),y=0;p<42;p++,g++,D=H(D).add(24,"hour"))0<p&&g%7==0&&(g=0,y++),e[y][g]=D.clone().hour(s).minute(n).second(r),D.hour(12),this.minDate&&e[y][g].format("YYYY-MM-DD")==this.minDate.format("YYYY-MM-DD")&&e[y][g].isBefore(this.minDate)&&"left"==t&&(e[y][g]=this.minDate.clone()),this.maxDate&&e[y][g].format("YYYY-MM-DD")==this.maxDate.format("YYYY-MM-DD")&&e[y][g].isAfter(this.maxDate)&&"right"==t&&(e[y][g]=this.maxDate.clone());"left"==t?this.leftCalendar.calendar=e:this.rightCalendar.calendar=e;var k="left"==t?this.minDate:this.startDate,b=this.maxDate,C=("left"==t?this.startDate:this.endDate,this.locale.direction,'<table class="table-condensed">');C+="<thead>",C+="<tr>",(this.showWeekNumbers||this.showISOWeekNumbers)&&(C+="<th></th>"),k&&!k.isBefore(e.firstDay)||this.linkedCalendars&&"left"!=t?C+="<th></th>":C+='<th class="prev available"><span></span></th>';var v=this.locale.monthNames[e[1][1].month()]+e[1][1].format(" YYYY");if(this.showDropdowns){for(var Y=e[1][1].month(),w=e[1][1].year(),P=b&&b.year()||this.maxYear,x=k&&k.year()||this.minYear,M=w==x,S=w==P,I='<select class="monthselect">',B=0;B<12;B++)(!M||B>=k.month())&&(!S||B<=b.month())?I+="<option value='"+B+"'"+(B===Y?" selected='selected'":"")+">"+this.locale.monthNames[B]+"</option>":I+="<option value='"+B+"'"+(B===Y?" selected='selected'":"")+" disabled='disabled'>"+this.locale.monthNames[B]+"</option>";I+="</select>";for(var A='<select class="yearselect">',L=x;L<=P;L++)A+='<option value="'+L+'"'+(L===w?' selected="selected"':"")+">"+L+"</option>";v=I+(A+="</select>")}if(C+='<th colspan="5" class="month">'+v+"</th>",b&&!b.isAfter(e.lastDay)||this.linkedCalendars&&"right"!=t&&!this.singleDatePicker?C+="<th></th>":C+='<th class="next available"><span></span></th>',C+="</tr>",C+="<tr>",(this.showWeekNumbers||this.showISOWeekNumbers)&&(C+='<th class="week">'+this.locale.weekLabel+"</th>"),R.each(this.locale.daysOfWeek,function(t,e){C+="<th>"+e+"</th>"}),C+="</tr>",C+="</thead>",C+="<tbody>",null==this.endDate&&this.maxSpan){var E=this.startDate.clone().add(this.maxSpan).endOf("day");b&&!E.isBefore(b)||(b=E)}for(y=0;y<6;y++){C+="<tr>",this.showWeekNumbers?C+='<td class="week">'+e[y][0].week()+"</td>":this.showISOWeekNumbers&&(C+='<td class="week">'+e[y][0].isoWeek()+"</td>");for(g=0;g<7;g++){var W=[];e[y][g].isSame(new Date,"day")&&W.push("today"),5<e[y][g].isoWeekday()&&W.push("weekend"),e[y][g].month()!=e[1][1].month()&&W.push("off"),this.minDate&&e[y][g].isBefore(this.minDate,"day")&&W.push("off","disabled"),b&&e[y][g].isAfter(b,"day")&&W.push("off","disabled"),this.isInvalidDate(e[y][g])&&W.push("off","disabled"),e[y][g].format("YYYY-MM-DD")==this.startDate.format("YYYY-MM-DD")&&W.push("active","start-date"),null!=this.endDate&&e[y][g].format("YYYY-MM-DD")==this.endDate.format("YYYY-MM-DD")&&W.push("active","end-date"),null!=this.endDate&&e[y][g]>this.startDate&&e[y][g]<this.endDate&&W.push("in-range");var O=this.isCustomDate(e[y][g]);!1!==O&&("string"==typeof O?W.push(O):Array.prototype.push.apply(W,O));var N="",j=!1;for(p=0;p<W.length;p++)N+=W[p]+" ","disabled"==W[p]&&(j=!0);j||(N+="available"),C+='<td class="'+N.replace(/^\s+|\s+$/g,"")+'" data-title="r'+y+"c"+g+'">'+e[y][g].date()+"</td>"}C+="</tr>"}C+="</tbody>",C+="</table>",this.container.find(".drp-calendar."+t+" .calendar-table").html(C)},renderTimePicker:function(t){if("right"!=t||this.endDate){var e,a,i,s=this.maxDate;if(!this.maxSpan||this.maxDate&&!this.startDate.clone().add(this.maxSpan).isAfter(this.maxDate)||(s=this.startDate.clone().add(this.maxSpan)),"left"==t)a=this.startDate.clone(),i=this.minDate;else if("right"==t){a=this.endDate.clone(),i=this.startDate;var n=this.container.find(".drp-calendar.right .calendar-time");if(""!=n.html()&&(a.hour(a.hour()||n.find(".hourselect option:selected").val()),a.minute(a.minute()||n.find(".minuteselect option:selected").val()),a.second(a.second()||n.find(".secondselect option:selected").val()),!this.timePicker24Hour)){var r=n.find(".ampmselect option:selected").val();"PM"===r&&a.hour()<12&&a.hour(a.hour()+12),"AM"===r&&12===a.hour()&&a.hour(0)}a.isBefore(this.startDate)&&(a=this.startDate.clone()),s&&a.isAfter(s)&&(a=s.clone())}e='<select class="hourselect">';for(var o=this.timePicker24Hour?0:1,h=this.timePicker24Hour?23:12,l=o;l<=h;l++){var c=l;this.timePicker24Hour||(c=12<=a.hour()?12==l?12:l+12:12==l?0:l);var d=a.clone().hour(c),m=!1;i&&d.minute(59).isBefore(i)&&(m=!0),s&&d.minute(0).isAfter(s)&&(m=!0),c!=a.hour()||m?e+=m?'<option value="'+l+'" disabled="disabled" class="disabled">'+l+"</option>":'<option value="'+l+'">'+l+"</option>":e+='<option value="'+l+'" selected="selected">'+l+"</option>"}e+="</select> ",e+=': <select class="minuteselect">';for(l=0;l<60;l+=this.timePickerIncrement){var f=l<10?"0"+l:l;d=a.clone().minute(l),m=!1;i&&d.second(59).isBefore(i)&&(m=!0),s&&d.second(0).isAfter(s)&&(m=!0),a.minute()!=l||m?e+=m?'<option value="'+l+'" disabled="disabled" class="disabled">'+f+"</option>":'<option value="'+l+'">'+f+"</option>":e+='<option value="'+l+'" selected="selected">'+f+"</option>"}if(e+="</select> ",this.timePickerSeconds){e+=': <select class="secondselect">';for(l=0;l<60;l++){f=l<10?"0"+l:l,d=a.clone().second(l),m=!1;i&&d.isBefore(i)&&(m=!0),s&&d.isAfter(s)&&(m=!0),a.second()!=l||m?e+=m?'<option value="'+l+'" disabled="disabled" class="disabled">'+f+"</option>":'<option value="'+l+'">'+f+"</option>":e+='<option value="'+l+'" selected="selected">'+f+"</option>"}e+="</select> "}if(!this.timePicker24Hour){e+='<select class="ampmselect">';var p="",u="";i&&a.clone().hour(12).minute(0).second(0).isBefore(i)&&(p=' disabled="disabled" class="disabled"'),s&&a.clone().hour(0).minute(0).second(0).isAfter(s)&&(u=' disabled="disabled" class="disabled"'),12<=a.hour()?e+='<option value="AM"'+p+'>AM</option><option value="PM" selected="selected"'+u+">PM</option>":e+='<option value="AM" selected="selected"'+p+'>AM</option><option value="PM"'+u+">PM</option>",e+="</select>"}this.container.find(".drp-calendar."+t+" .calendar-time").html(e)}},updateFormInputs:function(){this.singleDatePicker||this.endDate&&(this.startDate.isBefore(this.endDate)||this.startDate.isSame(this.endDate))?this.container.find("button.applyBtn").removeAttr("disabled"):this.container.find("button.applyBtn").attr("disabled","disabled")},move:function(){var t,e={top:0,left:0},a=R(window).width();this.parentEl.is("body")||(e={top:this.parentEl.offset().top-this.parentEl.scrollTop(),left:this.parentEl.offset().left-this.parentEl.scrollLeft()},a=this.parentEl[0].clientWidth+this.parentEl.offset().left),t="up"==this.drops?this.element.offset().top-this.container.outerHeight()-e.top:this.element.offset().top+this.element.outerHeight()-e.top,this.container["up"==this.drops?"addClass":"removeClass"]("drop-up"),"left"==this.opens?(this.container.css({top:t,right:a-this.element.offset().left-this.element.outerWidth(),left:"auto"}),this.container.offset().left<0&&this.container.css({right:"auto",left:9})):"center"==this.opens?(this.container.css({top:t,left:this.element.offset().left-e.left+this.element.outerWidth()/2-this.container.outerWidth()/2,right:"auto"}),this.container.offset().left<0&&this.container.css({right:"auto",left:9})):(this.container.css({top:t,left:this.element.offset().left-e.left,right:"auto"}),this.container.offset().left+this.container.outerWidth()>R(window).width()&&this.container.css({left:"auto",right:0}))},show:function(t){this.isShowing||(this._outsideClickProxy=R.proxy(function(t){this.outsideClick(t)},this),R(document).on("mousedown.daterangepicker",this._outsideClickProxy).on("touchend.daterangepicker",this._outsideClickProxy).on("click.daterangepicker","[data-toggle=dropdown]",this._outsideClickProxy).on("focusin.daterangepicker",this._outsideClickProxy),R(window).on("resize.daterangepicker",R.proxy(function(t){this.move(t)},this)),this.oldStartDate=this.startDate.clone(),this.oldEndDate=this.endDate.clone(),this.previousRightTime=this.endDate.clone(),this.updateView(),this.container.show(),this.move(),this.element.trigger("show.daterangepicker",this),this.isShowing=!0)},hide:function(t){this.isShowing&&(this.endDate||(this.startDate=this.oldStartDate.clone(),this.endDate=this.oldEndDate.clone()),this.startDate.isSame(this.oldStartDate)&&this.endDate.isSame(this.oldEndDate)||this.callback(this.startDate.clone(),this.endDate.clone(),this.chosenLabel),this.updateElement(),R(document).off(".daterangepicker"),R(window).off(".daterangepicker"),this.container.hide(),this.element.trigger("hide.daterangepicker",this),this.isShowing=!1)},toggle:function(t){this.isShowing?this.hide():this.show()},outsideClick:function(t){var e=R(t.target);"focusin"==t.type||e.closest(this.element).length||e.closest(this.container).length||e.closest(".calendar-table").length||(this.hide(),this.element.trigger("outsideClick.daterangepicker",this))},showCalendars:function(){this.container.addClass("show-calendar"),this.move(),this.element.trigger("showCalendar.daterangepicker",this)},hideCalendars:function(){this.container.removeClass("show-calendar"),this.element.trigger("hideCalendar.daterangepicker",this)},clickRange:function(t){var e=t.target.getAttribute("data-range-key");if((this.chosenLabel=e)==this.locale.customRangeLabel)this.showCalendars();else{var a=this.ranges[e];this.startDate=a[0],this.endDate=a[1],this.timePicker||(this.startDate.startOf("day"),this.endDate.endOf("day")),this.alwaysShowCalendars||this.hideCalendars(),this.clickApply()}},clickPrev:function(t){R(t.target).parents(".drp-calendar").hasClass("left")?(this.leftCalendar.month.subtract(1,"month"),this.linkedCalendars&&this.rightCalendar.month.subtract(1,"month")):this.rightCalendar.month.subtract(1,"month"),this.updateCalendars()},clickNext:function(t){R(t.target).parents(".drp-calendar").hasClass("left")?this.leftCalendar.month.add(1,"month"):(this.rightCalendar.month.add(1,"month"),this.linkedCalendars&&this.leftCalendar.month.add(1,"month")),this.updateCalendars()},hoverDate:function(t){if(R(t.target).hasClass("available")){var e=R(t.target).attr("data-title"),a=e.substr(1,1),i=e.substr(3,1),r=R(t.target).parents(".drp-calendar").hasClass("left")?this.leftCalendar.calendar[a][i]:this.rightCalendar.calendar[a][i],o=this.leftCalendar,h=this.rightCalendar,l=this.startDate;this.endDate||this.container.find(".drp-calendar tbody td").each(function(t,e){if(!R(e).hasClass("week")){var a=R(e).attr("data-title"),i=a.substr(1,1),s=a.substr(3,1),n=R(e).parents(".drp-calendar").hasClass("left")?o.calendar[i][s]:h.calendar[i][s];n.isAfter(l)&&n.isBefore(r)||n.isSame(r,"day")?R(e).addClass("in-range"):R(e).removeClass("in-range")}})}},clickDate:function(t){if(R(t.target).hasClass("available")){var e=R(t.target).attr("data-title"),a=e.substr(1,1),i=e.substr(3,1),s=R(t.target).parents(".drp-calendar").hasClass("left")?this.leftCalendar.calendar[a][i]:this.rightCalendar.calendar[a][i];if(this.endDate||s.isBefore(this.startDate,"day")){if(this.timePicker){var n=parseInt(this.container.find(".left .hourselect").val(),10);if(!this.timePicker24Hour)"PM"===(h=this.container.find(".left .ampmselect").val())&&n<12&&(n+=12),"AM"===h&&12===n&&(n=0);var r=parseInt(this.container.find(".left .minuteselect").val(),10),o=this.timePickerSeconds?parseInt(this.container.find(".left .secondselect").val(),10):0;s=s.clone().hour(n).minute(r).second(o)}this.endDate=null,this.setStartDate(s.clone())}else if(!this.endDate&&s.isBefore(this.startDate))this.setEndDate(this.startDate.clone());else{if(this.timePicker){var h;n=parseInt(this.container.find(".right .hourselect").val(),10);if(!this.timePicker24Hour)"PM"===(h=this.container.find(".right .ampmselect").val())&&n<12&&(n+=12),"AM"===h&&12===n&&(n=0);r=parseInt(this.container.find(".right .minuteselect").val(),10),o=this.timePickerSeconds?parseInt(this.container.find(".right .secondselect").val(),10):0;s=s.clone().hour(n).minute(r).second(o)}this.setEndDate(s.clone()),this.autoApply&&(this.calculateChosenLabel(),this.clickApply())}this.singleDatePicker&&(this.setEndDate(this.startDate),this.timePicker||this.clickApply()),this.updateView(),t.stopPropagation()}},calculateChosenLabel:function(){var t=!0,e=0;for(var a in this.ranges){if(this.timePicker){var i=this.timePickerSeconds?"YYYY-MM-DD hh:mm:ss":"YYYY-MM-DD hh:mm";if(this.startDate.format(i)==this.ranges[a][0].format(i)&&this.endDate.format(i)==this.ranges[a][1].format(i)){t=!1,this.chosenLabel=this.container.find(".ranges li:eq("+e+")").addClass("active").attr("data-range-key");break}}else if(this.startDate.format("YYYY-MM-DD")==this.ranges[a][0].format("YYYY-MM-DD")&&this.endDate.format("YYYY-MM-DD")==this.ranges[a][1].format("YYYY-MM-DD")){t=!1,this.chosenLabel=this.container.find(".ranges li:eq("+e+")").addClass("active").attr("data-range-key");break}e++}t&&(this.showCustomRangeLabel?this.chosenLabel=this.container.find(".ranges li:last").addClass("active").attr("data-range-key"):this.chosenLabel=null,this.showCalendars())},clickApply:function(t){this.hide(),this.element.trigger("apply.daterangepicker",this)},clickCancel:function(t){this.startDate=this.oldStartDate,this.endDate=this.oldEndDate,this.hide(),this.element.trigger("cancel.daterangepicker",this)},monthOrYearChanged:function(t){var e=R(t.target).closest(".drp-calendar").hasClass("left"),a=e?"left":"right",i=this.container.find(".drp-calendar."+a),s=parseInt(i.find(".monthselect").val(),10),n=i.find(".yearselect").val();e||(n<this.startDate.year()||n==this.startDate.year()&&s<this.startDate.month())&&(s=this.startDate.month(),n=this.startDate.year()),this.minDate&&(n<this.minDate.year()||n==this.minDate.year()&&s<this.minDate.month())&&(s=this.minDate.month(),n=this.minDate.year()),this.maxDate&&(n>this.maxDate.year()||n==this.maxDate.year()&&s>this.maxDate.month())&&(s=this.maxDate.month(),n=this.maxDate.year()),e?(this.leftCalendar.month.month(s).year(n),this.linkedCalendars&&(this.rightCalendar.month=this.leftCalendar.month.clone().add(1,"month"))):(this.rightCalendar.month.month(s).year(n),this.linkedCalendars&&(this.leftCalendar.month=this.rightCalendar.month.clone().subtract(1,"month"))),this.updateCalendars()},timeChanged:function(t){var e=R(t.target).closest(".drp-calendar"),a=e.hasClass("left"),i=parseInt(e.find(".hourselect").val(),10),s=parseInt(e.find(".minuteselect").val(),10),n=this.timePickerSeconds?parseInt(e.find(".secondselect").val(),10):0;if(!this.timePicker24Hour){var r=e.find(".ampmselect").val();"PM"===r&&i<12&&(i+=12),"AM"===r&&12===i&&(i=0)}if(a){var o=this.startDate.clone();o.hour(i),o.minute(s),o.second(n),this.setStartDate(o),this.singleDatePicker?this.endDate=this.startDate.clone():this.endDate&&this.endDate.format("YYYY-MM-DD")==o.format("YYYY-MM-DD")&&this.endDate.isBefore(o)&&this.setEndDate(o.clone())}else if(this.endDate){var h=this.endDate.clone();h.hour(i),h.minute(s),h.second(n),this.setEndDate(h)}this.updateCalendars(),this.updateFormInputs(),this.renderTimePicker("left"),this.renderTimePicker("right")},elementChanged:function(){if(this.element.is("input")&&this.element.val().length){var t=this.element.val().split(this.locale.separator),e=null,a=null;2===t.length&&(e=H(t[0],this.locale.format),a=H(t[1],this.locale.format)),(this.singleDatePicker||null===e||null===a)&&(a=e=H(this.element.val(),this.locale.format)),e.isValid()&&a.isValid()&&(this.setStartDate(e),this.setEndDate(a),this.updateView())}},keydown:function(t){9!==t.keyCode&&13!==t.keyCode||this.hide(),27===t.keyCode&&(t.preventDefault(),t.stopPropagation(),this.hide())},updateElement:function(){if(this.element.is("input")&&this.autoUpdateInput){var t=this.startDate.format(this.locale.format);this.singleDatePicker||(t+=this.locale.separator+this.endDate.format(this.locale.format)),t!==this.element.val()&&this.element.val(t).trigger("change")}},remove:function(){this.container.remove(),this.element.off(".daterangepicker"),this.element.removeData()}},R.fn.daterangepicker=function(t,e){var a=R.extend(!0,{},R.fn.daterangepicker.defaultOptions,t);return this.each(function(){var t=R(this);t.data("daterangepicker")&&t.data("daterangepicker").remove(),t.data("daterangepicker",new i(t,a,e))}),this},i});
// scrollbar
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).SimpleBar=e()}(this,function(){"use strict";var t=function(t){return"object"==typeof t?null!==t:"function"==typeof t},e=function(e){if(!t(e))throw TypeError(e+" is not an object!");return e},i=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t},r=function(t){return Object(i(t))},n=Math.ceil,o=Math.floor,s=function(t){return isNaN(t=+t)?0:(t>0?o:n)(t)},a=Math.min,l=function(t){return t>0?a(s(t),9007199254740991):0},c=function(t){return function(e,r){var n,o,a=String(i(e)),l=s(r),c=a.length;return l<0||l>=c?t?"":void 0:(n=a.charCodeAt(l))<55296||n>56319||l+1===c||(o=a.charCodeAt(l+1))<56320||o>57343?t?a.charAt(l):n:t?a.slice(l,l+2):o-56320+(n-55296<<10)+65536}},u=c(!0),h=function(t,e,i){return e+(i?u(t,e).length:1)},f={}.toString,d=function(t){return f.call(t).slice(8,-1)},p="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function v(t,e){return t(e={exports:{}},e.exports),e.exports}var y,b,g=v(function(t){var e=t.exports={version:"2.6.2"};"number"==typeof __e&&(__e=e)}),m=(g.version,v(function(t){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)})),x=v(function(t){var e=m["__core-js_shared__"]||(m["__core-js_shared__"]={});(t.exports=function(t,i){return e[t]||(e[t]=void 0!==i?i:{})})("versions",[]).push({version:g.version,mode:"global",copyright:"Â© 2019 Denis Pushkarev (zloirock.ru)"})}),E=0,w=Math.random(),_=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++E+w).toString(36))},O=v(function(t){var e=x("wks"),i=m.Symbol,r="function"==typeof i;(t.exports=function(t){return e[t]||(e[t]=r&&i[t]||(r?i:_)("Symbol."+t))}).store=e}),S=O("toStringTag"),k="Arguments"==d(function(){return arguments}()),A=function(t){var e,i,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(i=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),S))?i:k?d(e):"Object"==(r=d(e))&&"function"==typeof e.callee?"Arguments":r},M=RegExp.prototype.exec,L=function(t,e){var i=t.exec;if("function"==typeof i){var r=i.call(t,e);if("object"!=typeof r)throw new TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==A(t))throw new TypeError("RegExp#exec called on incompatible receiver");return M.call(t,e)},T=RegExp.prototype.exec,j=String.prototype.replace,R=T,N=(y=/a/,b=/b*/g,T.call(y,"a"),T.call(b,"a"),0!==y.lastIndex||0!==b.lastIndex),W=void 0!==/()??/.exec("")[1];(N||W)&&(R=function(t){var i,r,n,o,s=this;return W&&(r=new RegExp("^"+s.source+"$(?!\\s)",function(){var t=e(this),i="";return t.global&&(i+="g"),t.ignoreCase&&(i+="i"),t.multiline&&(i+="m"),t.unicode&&(i+="u"),t.sticky&&(i+="y"),i}.call(s))),N&&(i=s.lastIndex),n=T.call(s,t),N&&n&&(s.lastIndex=s.global?n.index+n[0].length:i),W&&n&&n.length>1&&j.call(n[0],r,function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(n[o]=void 0)}),n});var C=R,z=function(t){try{return!!t()}catch(t){return!0}},D=!z(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),V=m.document,B=t(V)&&t(V.createElement),P=function(t){return B?V.createElement(t):{}},F=!D&&!z(function(){return 7!=Object.defineProperty(P("div"),"a",{get:function(){return 7}}).a}),I=Object.defineProperty,H={f:D?Object.defineProperty:function(i,r,n){if(e(i),r=function(e,i){if(!t(e))return e;var r,n;if(i&&"function"==typeof(r=e.toString)&&!t(n=r.call(e)))return n;if("function"==typeof(r=e.valueOf)&&!t(n=r.call(e)))return n;if(!i&&"function"==typeof(r=e.toString)&&!t(n=r.call(e)))return n;throw TypeError("Can't convert object to primitive value")}(r,!0),e(n),F)try{return I(i,r,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(i[r]=n.value),i}},q=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},$=D?function(t,e,i){return H.f(t,e,q(1,i))}:function(t,e,i){return t[e]=i,t},X={}.hasOwnProperty,Y=function(t,e){return X.call(t,e)},G=v(function(t){var e=_("src"),i=Function.toString,r=(""+i).split("toString");g.inspectSource=function(t){return i.call(t)},(t.exports=function(t,i,n,o){var s="function"==typeof n;s&&(Y(n,"name")||$(n,"name",i)),t[i]!==n&&(s&&(Y(n,e)||$(n,e,t[i]?""+t[i]:r.join(String(i)))),t===m?t[i]=n:o?t[i]?t[i]=n:$(t,i,n):(delete t[i],$(t,i,n)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[e]||i.call(this)})}),U=function(t,e,i){if(function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!")}(t),void 0===e)return t;switch(i){case 1:return function(i){return t.call(e,i)};case 2:return function(i,r){return t.call(e,i,r)};case 3:return function(i,r,n){return t.call(e,i,r,n)}}return function(){return t.apply(e,arguments)}},J=function(t,e,i){var r,n,o,s,a=t&J.F,l=t&J.G,c=t&J.S,u=t&J.P,h=t&J.B,f=l?m:c?m[e]||(m[e]={}):(m[e]||{}).prototype,d=l?g:g[e]||(g[e]={}),p=d.prototype||(d.prototype={});for(r in l&&(i=e),i)o=((n=!a&&f&&void 0!==f[r])?f:i)[r],s=h&&n?U(o,m):u&&"function"==typeof o?U(Function.call,o):o,f&&G(f,r,o,t&J.U),d[r]!=o&&$(d,r,s),u&&p[r]!=o&&(p[r]=o)};m.core=g,J.F=1,J.G=2,J.S=4,J.P=8,J.B=16,J.W=32,J.U=64,J.R=128;var K=J;K({target:"RegExp",proto:!0,forced:C!==/./.exec},{exec:C});var Q=O("species"),Z=!z(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),tt=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var i="ab".split(t);return 2===i.length&&"a"===i[0]&&"b"===i[1]}(),et=function(t,e,r){var n=O(t),o=!z(function(){var e={};return e[n]=function(){return 7},7!=""[t](e)}),s=o?!z(function(){var e=!1,i=/a/;return i.exec=function(){return e=!0,null},"split"===t&&(i.constructor={},i.constructor[Q]=function(){return i}),i[n](""),!e}):void 0;if(!o||!s||"replace"===t&&!Z||"split"===t&&!tt){var a=/./[n],l=r(i,n,""[t],function(t,e,i,r,n){return e.exec===C?o&&!n?{done:!0,value:a.call(e,i,r)}:{done:!0,value:t.call(i,e,r)}:{done:!1}}),c=l[0],u=l[1];G(String.prototype,t,c),$(RegExp.prototype,n,2==e?function(t,e){return u.call(t,this,e)}:function(t){return u.call(t,this)})}},it=Math.max,rt=Math.min,nt=Math.floor,ot=/\$([$&`']|\d\d?|<[^>]*>)/g,st=/\$([$&`']|\d\d?)/g;et("replace",2,function(t,i,n,o){return[function(e,r){var o=t(this),s=null==e?void 0:e[i];return void 0!==s?s.call(e,o,r):n.call(String(o),e,r)},function(t,i){var r=o(n,t,this,i);if(r.done)return r.value;var c=e(t),u=String(this),f="function"==typeof i;f||(i=String(i));var d=c.global;if(d){var p=c.unicode;c.lastIndex=0}for(var v=[];;){var y=L(c,u);if(null===y)break;if(v.push(y),!d)break;""===String(y[0])&&(c.lastIndex=h(u,l(c.lastIndex),p))}for(var b,g="",m=0,x=0;x<v.length;x++){y=v[x];for(var E=String(y[0]),w=it(rt(s(y.index),u.length),0),_=[],O=1;O<y.length;O++)_.push(void 0===(b=y[O])?b:String(b));var S=y.groups;if(f){var k=[E].concat(_,w,u);void 0!==S&&k.push(S);var A=String(i.apply(void 0,k))}else A=a(E,u,w,_,S,i);w>=m&&(g+=u.slice(m,w)+A,m=w+E.length)}return g+u.slice(m)}];function a(t,e,i,o,s,a){var l=i+t.length,c=o.length,u=st;return void 0!==s&&(s=r(s),u=ot),n.call(a,u,function(r,n){var a;switch(n.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,i);case"'":return e.slice(l);case"<":a=s[n.slice(1,-1)];break;default:var u=+n;if(0===u)return r;if(u>c){var h=nt(u/10);return 0===h?r:h<=c?void 0===o[h-1]?n.charAt(1):o[h-1]+n.charAt(1):r}a=o[u-1]}return void 0===a?"":a})}});var at=H.f,lt=Function.prototype,ct=/^\s*function ([^ (]*)/;"name"in lt||D&&at(lt,"name",{configurable:!0,get:function(){try{return(""+this).match(ct)[1]}catch(t){return""}}}),et("match",1,function(t,i,r,n){return[function(e){var r=t(this),n=null==e?void 0:e[i];return void 0!==n?n.call(e,r):new RegExp(e)[i](String(r))},function(t){var i=n(r,t,this);if(i.done)return i.value;var o=e(t),s=String(this);if(!o.global)return L(o,s);var a=o.unicode;o.lastIndex=0;for(var c,u=[],f=0;null!==(c=L(o,s));){var d=String(c[0]);u[f]=d,""===d&&(o.lastIndex=h(s,l(o.lastIndex),a)),f++}return 0===f?null:u}]});var ut=O("unscopables"),ht=Array.prototype;null==ht[ut]&&$(ht,ut,{});var ft,dt=function(t){ht[ut][t]=!0},pt=function(t,e){return{value:e,done:!!t}},vt={},yt=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==d(t)?t.split(""):Object(t)},bt=function(t){return yt(i(t))},gt=Math.max,mt=Math.min,xt=x("keys"),Et=function(t){return xt[t]||(xt[t]=_(t))},wt=(ft=!1,function(t,e,i){var r,n=bt(t),o=l(n.length),a=function(t,e){return(t=s(t))<0?gt(t+e,0):mt(t,e)}(i,o);if(ft&&e!=e){for(;o>a;)if((r=n[a++])!=r)return!0}else for(;o>a;a++)if((ft||a in n)&&n[a]===e)return ft||a||0;return!ft&&-1}),_t=Et("IE_PROTO"),Ot="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),St=Object.keys||function(t){return function(t,e){var i,r=bt(t),n=0,o=[];for(i in r)i!=_t&&Y(r,i)&&o.push(i);for(;e.length>n;)Y(r,i=e[n++])&&(~wt(o,i)||o.push(i));return o}(t,Ot)},kt=D?Object.defineProperties:function(t,i){e(t);for(var r,n=St(i),o=n.length,s=0;o>s;)H.f(t,r=n[s++],i[r]);return t},At=m.document,Mt=At&&At.documentElement,Lt=Et("IE_PROTO"),Tt=function(){},jt=function(){var t,e=P("iframe"),i=Ot.length;for(e.style.display="none",Mt.appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),jt=t.F;i--;)delete jt.prototype[Ot[i]];return jt()},Rt=Object.create||function(t,i){var r;return null!==t?(Tt.prototype=e(t),r=new Tt,Tt.prototype=null,r[Lt]=t):r=jt(),void 0===i?r:kt(r,i)},Nt=H.f,Wt=O("toStringTag"),Ct=function(t,e,i){t&&!Y(t=i?t:t.prototype,Wt)&&Nt(t,Wt,{configurable:!0,value:e})},zt={};$(zt,O("iterator"),function(){return this});var Dt=function(t,e,i){t.prototype=Rt(zt,{next:q(1,i)}),Ct(t,e+" Iterator")},Vt=Et("IE_PROTO"),Bt=Object.prototype,Pt=Object.getPrototypeOf||function(t){return t=r(t),Y(t,Vt)?t[Vt]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?Bt:null},Ft=O("iterator"),It=!([].keys&&"next"in[].keys()),Ht=function(){return this},qt=function(t,e,i,r,n,o,s){Dt(i,e,r);var a,l,c,u=function(t){if(!It&&t in p)return p[t];switch(t){case"keys":case"values":return function(){return new i(this,t)}}return function(){return new i(this,t)}},h=e+" Iterator",f="values"==n,d=!1,p=t.prototype,v=p[Ft]||p["@@iterator"]||n&&p[n],y=v||u(n),b=n?f?u("entries"):y:void 0,g="Array"==e&&p.entries||v;if(g&&(c=Pt(g.call(new t)))!==Object.prototype&&c.next&&(Ct(c,h,!0),"function"!=typeof c[Ft]&&$(c,Ft,Ht)),f&&v&&"values"!==v.name&&(d=!0,y=function(){return v.call(this)}),(It||d||!p[Ft])&&$(p,Ft,y),vt[e]=y,vt[h]=Ht,n)if(a={values:f?y:u("values"),keys:o?y:u("keys"),entries:b},s)for(l in a)l in p||G(p,l,a[l]);else K(K.P+K.F*(It||d),e,a);return a},$t=qt(Array,"Array",function(t,e){this._t=bt(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,i=this._i++;return!t||i>=t.length?(this._t=void 0,pt(1)):pt(0,"keys"==e?i:"values"==e?t[i]:[i,t[i]])},"values");vt.Arguments=vt.Array,dt("keys"),dt("values"),dt("entries");for(var Xt=O("iterator"),Yt=O("toStringTag"),Gt=vt.Array,Ut={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},Jt=St(Ut),Kt=0;Kt<Jt.length;Kt++){var Qt,Zt=Jt[Kt],te=Ut[Zt],ee=m[Zt],ie=ee&&ee.prototype;if(ie&&(ie[Xt]||$(ie,Xt,Gt),ie[Yt]||$(ie,Yt,Zt),vt[Zt]=Gt,te))for(Qt in $t)ie[Qt]||G(ie,Qt,$t[Qt],!0)}var re=c(!0);qt(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,i=this._i;return i>=e.length?{value:void 0,done:!0}:(t=re(e,i),this._i+=t.length,{value:t,done:!1})});var ne=function(t,i,r,n){try{return n?i(e(r)[0],r[1]):i(r)}catch(i){var o=t.return;throw void 0!==o&&e(o.call(t)),i}},oe=O("iterator"),se=Array.prototype,ae=function(t,e,i){e in t?H.f(t,e,q(0,i)):t[e]=i},le=O("iterator"),ce=g.getIteratorMethod=function(t){if(null!=t)return t[le]||t["@@iterator"]||vt[A(t)]},ue=O("iterator"),he=!1;try{[7][ue]().return=function(){he=!0}}catch(t){}function fe(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function de(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function pe(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},r=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),r.forEach(function(e){de(t,e,i[e])})}return t}K(K.S+K.F*!function(t,e){if(!e&&!he)return!1;var i=!1;try{var r=[7],n=r[ue]();n.next=function(){return{done:i=!0}},r[ue]=function(){return n},t(r)}catch(t){}return i}(function(t){}),"Array",{from:function(t){var e,i,n,o,s,a=r(t),c="function"==typeof this?this:Array,u=arguments.length,h=u>1?arguments[1]:void 0,f=void 0!==h,d=0,p=ce(a);if(f&&(h=U(h,u>2?arguments[2]:void 0,2)),null!=p&&(c!=Array||(void 0===(s=p)||vt.Array!==s&&se[oe]!==s)))for(o=p.call(a),i=new c;!(n=o.next()).done;d++)ae(i,d,f?ne(o,h,[n.value,d],!0):n.value);else for(i=new c(e=l(a.length));e>d;d++)ae(i,d,f?h(a[d],d):a[d]);return i.length=d,i}});var ve=v(function(t,e){t.exports=function(){if("undefined"==typeof document)return 0;var t,e=document.body,i=document.createElement("div"),r=i.style;return r.position="absolute",r.top=r.left="-9999px",r.width=r.height="100px",r.overflow="scroll",e.appendChild(i),t=i.offsetWidth-i.clientWidth,e.removeChild(i),t}}),ye="Expected a function",be=NaN,ge="[object Symbol]",me=/^\s+|\s+$/g,xe=/^[-+]0x[0-9a-f]+$/i,Ee=/^0b[01]+$/i,we=/^0o[0-7]+$/i,_e=parseInt,Oe="object"==typeof p&&p&&p.Object===Object&&p,Se="object"==typeof self&&self&&self.Object===Object&&self,ke=Oe||Se||Function("return this")(),Ae=Object.prototype.toString,Me=Math.max,Le=Math.min,Te=function(){return ke.Date.now()};function je(t,e,i){var r,n,o,s,a,l,c=0,u=!1,h=!1,f=!0;if("function"!=typeof t)throw new TypeError(ye);function d(e){var i=r,o=n;return r=n=void 0,c=e,s=t.apply(o,i)}function p(t){var i=t-l;return void 0===l||i>=e||i<0||h&&t-c>=o}function v(){var t=Te();if(p(t))return y(t);a=setTimeout(v,function(t){var i=e-(t-l);return h?Le(i,o-(t-c)):i}(t))}function y(t){return a=void 0,f&&r?d(t):(r=n=void 0,s)}function b(){var t=Te(),i=p(t);if(r=arguments,n=this,l=t,i){if(void 0===a)return function(t){return c=t,a=setTimeout(v,e),u?d(t):s}(l);if(h)return a=setTimeout(v,e),d(l)}return void 0===a&&(a=setTimeout(v,e)),s}return e=Ne(e)||0,Re(i)&&(u=!!i.leading,o=(h="maxWait"in i)?Me(Ne(i.maxWait)||0,e):o,f="trailing"in i?!!i.trailing:f),b.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=l=n=a=void 0},b.flush=function(){return void 0===a?s:y(Te())},b}function Re(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Ne(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&Ae.call(t)==ge}(t))return be;if(Re(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=Re(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(me,"");var i=Ee.test(t);return i||we.test(t)?_e(t.slice(2),i?2:8):xe.test(t)?be:+t}var We=function(t,e,i){var r=!0,n=!0;if("function"!=typeof t)throw new TypeError(ye);return Re(i)&&(r="leading"in i?!!i.leading:r,n="trailing"in i?!!i.trailing:n),je(t,e,{leading:r,maxWait:e,trailing:n})},Ce="Expected a function",ze=NaN,De="[object Symbol]",Ve=/^\s+|\s+$/g,Be=/^[-+]0x[0-9a-f]+$/i,Pe=/^0b[01]+$/i,Fe=/^0o[0-7]+$/i,Ie=parseInt,He="object"==typeof p&&p&&p.Object===Object&&p,qe="object"==typeof self&&self&&self.Object===Object&&self,$e=He||qe||Function("return this")(),Xe=Object.prototype.toString,Ye=Math.max,Ge=Math.min,Ue=function(){return $e.Date.now()};function Je(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Ke(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&Xe.call(t)==De}(t))return ze;if(Je(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=Je(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(Ve,"");var i=Pe.test(t);return i||Fe.test(t)?Ie(t.slice(2),i?2:8):Be.test(t)?ze:+t}var Qe=function(t,e,i){var r,n,o,s,a,l,c=0,u=!1,h=!1,f=!0;if("function"!=typeof t)throw new TypeError(Ce);function d(e){var i=r,o=n;return r=n=void 0,c=e,s=t.apply(o,i)}function p(t){var i=t-l;return void 0===l||i>=e||i<0||h&&t-c>=o}function v(){var t=Ue();if(p(t))return y(t);a=setTimeout(v,function(t){var i=e-(t-l);return h?Ge(i,o-(t-c)):i}(t))}function y(t){return a=void 0,f&&r?d(t):(r=n=void 0,s)}function b(){var t=Ue(),i=p(t);if(r=arguments,n=this,l=t,i){if(void 0===a)return function(t){return c=t,a=setTimeout(v,e),u?d(t):s}(l);if(h)return a=setTimeout(v,e),d(l)}return void 0===a&&(a=setTimeout(v,e)),s}return e=Ke(e)||0,Je(i)&&(u=!!i.leading,o=(h="maxWait"in i)?Ye(Ke(i.maxWait)||0,e):o,f="trailing"in i?!!i.trailing:f),b.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=l=n=a=void 0},b.flush=function(){return void 0===a?s:y(Ue())},b},Ze="Expected a function",ti="__lodash_hash_undefined__",ei="[object Function]",ii="[object GeneratorFunction]",ri=/^\[object .+?Constructor\]$/,ni="object"==typeof p&&p&&p.Object===Object&&p,oi="object"==typeof self&&self&&self.Object===Object&&self,si=ni||oi||Function("return this")();var ai,li=Array.prototype,ci=Function.prototype,ui=Object.prototype,hi=si["__core-js_shared__"],fi=(ai=/[^.]+$/.exec(hi&&hi.keys&&hi.keys.IE_PROTO||""))?"Symbol(src)_1."+ai:"",di=ci.toString,pi=ui.hasOwnProperty,vi=ui.toString,yi=RegExp("^"+di.call(pi).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),bi=li.splice,gi=ki(si,"Map"),mi=ki(Object,"create");function xi(t){var e=-1,i=t?t.length:0;for(this.clear();++e<i;){var r=t[e];this.set(r[0],r[1])}}function Ei(t){var e=-1,i=t?t.length:0;for(this.clear();++e<i;){var r=t[e];this.set(r[0],r[1])}}function wi(t){var e=-1,i=t?t.length:0;for(this.clear();++e<i;){var r=t[e];this.set(r[0],r[1])}}function _i(t,e){for(var i,r,n=t.length;n--;)if((i=t[n][0])===(r=e)||i!=i&&r!=r)return n;return-1}function Oi(t){return!(!Mi(t)||(e=t,fi&&fi in e))&&(function(t){var e=Mi(t)?vi.call(t):"";return e==ei||e==ii}(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?yi:ri).test(function(t){if(null!=t){try{return di.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var e}function Si(t,e){var i,r,n=t.__data__;return("string"==(r=typeof(i=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==i:null===i)?n["string"==typeof e?"string":"hash"]:n.map}function ki(t,e){var i=function(t,e){return null==t?void 0:t[e]}(t,e);return Oi(i)?i:void 0}function Ai(t,e){if("function"!=typeof t||e&&"function"!=typeof e)throw new TypeError(Ze);var i=function(){var r=arguments,n=e?e.apply(this,r):r[0],o=i.cache;if(o.has(n))return o.get(n);var s=t.apply(this,r);return i.cache=o.set(n,s),s};return i.cache=new(Ai.Cache||wi),i}function Mi(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}xi.prototype.clear=function(){this.__data__=mi?mi(null):{}},xi.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},xi.prototype.get=function(t){var e=this.__data__;if(mi){var i=e[t];return i===ti?void 0:i}return pi.call(e,t)?e[t]:void 0},xi.prototype.has=function(t){var e=this.__data__;return mi?void 0!==e[t]:pi.call(e,t)},xi.prototype.set=function(t,e){return this.__data__[t]=mi&&void 0===e?ti:e,this},Ei.prototype.clear=function(){this.__data__=[]},Ei.prototype.delete=function(t){var e=this.__data__,i=_i(e,t);return!(i<0||(i==e.length-1?e.pop():bi.call(e,i,1),0))},Ei.prototype.get=function(t){var e=this.__data__,i=_i(e,t);return i<0?void 0:e[i][1]},Ei.prototype.has=function(t){return _i(this.__data__,t)>-1},Ei.prototype.set=function(t,e){var i=this.__data__,r=_i(i,t);return r<0?i.push([t,e]):i[r][1]=e,this},wi.prototype.clear=function(){this.__data__={hash:new xi,map:new(gi||Ei),string:new xi}},wi.prototype.delete=function(t){return Si(this,t).delete(t)},wi.prototype.get=function(t){return Si(this,t).get(t)},wi.prototype.has=function(t){return Si(this,t).has(t)},wi.prototype.set=function(t,e){return Si(this,t).set(t,e),this},Ai.Cache=wi;var Li=Ai,Ti=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var i=-1;return t.some(function(t,r){return t[0]===e&&(i=r,!0)}),i}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var i=t(this.__entries__,e),r=this.__entries__[i];return r&&r[1]},e.prototype.set=function(e,i){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=i:this.__entries__.push([e,i])},e.prototype.delete=function(e){var i=this.__entries__,r=t(i,e);~r&&i.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var i=0,r=this.__entries__;i<r.length;i++){var n=r[i];t.call(e,n[1],n[0])}},e}()}(),ji="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,Ri="undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),Ni="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(Ri):function(t){return setTimeout(function(){return t(Date.now())},1e3/60)},Wi=2;var Ci=20,zi=["top","right","bottom","left","width","height","size","weight"],Di="undefined"!=typeof MutationObserver,Vi=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var i=!1,r=!1,n=0;function o(){i&&(i=!1,t()),r&&a()}function s(){Ni(o)}function a(){var t=Date.now();if(i){if(t-n<Wi)return;r=!0}else i=!0,r=!1,setTimeout(s,e);n=t}return a}(this.refresh.bind(this),Ci)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,i=e.indexOf(t);~i&&e.splice(i,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter(function(t){return t.gatherActive(),t.hasActive()});return t.forEach(function(t){return t.broadcastActive()}),t.length>0},t.prototype.connect_=function(){ji&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),Di?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){ji&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,i=void 0===e?"":e;zi.some(function(t){return!!~i.indexOf(t)})&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),Bi=function(t,e){for(var i=0,r=Object.keys(e);i<r.length;i++){var n=r[i];Object.defineProperty(t,n,{value:e[n],enumerable:!1,writable:!1,configurable:!0})}return t},Pi=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||Ri},Fi=Yi(0,0,0,0);function Ii(t){return parseFloat(t)||0}function Hi(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];return e.reduce(function(e,i){return e+Ii(t["border-"+i+"-width"])},0)}function qi(t){var e=t.clientWidth,i=t.clientHeight;if(!e&&!i)return Fi;var r=Pi(t).getComputedStyle(t),n=function(t){for(var e={},i=0,r=["top","right","bottom","left"];i<r.length;i++){var n=r[i],o=t["padding-"+n];e[n]=Ii(o)}return e}(r),o=n.left+n.right,s=n.top+n.bottom,a=Ii(r.width),l=Ii(r.height);if("border-box"===r.boxSizing&&(Math.round(a+o)!==e&&(a-=Hi(r,"left","right")+o),Math.round(l+s)!==i&&(l-=Hi(r,"top","bottom")+s)),!function(t){return t===Pi(t).document.documentElement}(t)){var c=Math.round(a+o)-e,u=Math.round(l+s)-i;1!==Math.abs(c)&&(a-=c),1!==Math.abs(u)&&(l-=u)}return Yi(n.left,n.top,a,l)}var $i="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof Pi(t).SVGGraphicsElement}:function(t){return t instanceof Pi(t).SVGElement&&"function"==typeof t.getBBox};function Xi(t){return ji?$i(t)?function(t){var e=t.getBBox();return Yi(0,0,e.width,e.height)}(t):qi(t):Fi}function Yi(t,e,i,r){return{x:t,y:e,width:i,height:r}}var Gi=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Yi(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=Xi(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),Ui=function(){return function(t,e){var i,r,n,o,s,a,l,c=(r=(i=e).x,n=i.y,o=i.width,s=i.height,a="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,l=Object.create(a.prototype),Bi(l,{x:r,y:n,width:o,height:s,top:n,right:r+o,bottom:s+n,left:r}),l);Bi(this,{target:t,contentRect:c})}}(),Ji=function(){function t(t,e,i){if(this.activeObservations_=[],this.observations_=new Ti,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=i}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof Pi(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new Gi(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof Pi(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(e){e.isActive()&&t.activeObservations_.push(e)})},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map(function(t){return new Ui(t.target,t.broadcastRect())});this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),Ki="undefined"!=typeof WeakMap?new WeakMap:new Ti,Qi=function(){return function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var i=Vi.getInstance(),r=new Ji(e,i,this);Ki.set(this,r)}}();["observe","unobserve","disconnect"].forEach(function(t){Qi.prototype[t]=function(){var e;return(e=Ki.get(this))[t].apply(e,arguments)}});var Zi=void 0!==Ri.ResizeObserver?Ri.ResizeObserver:Qi,tr=!("undefined"==typeof window||!window.document||!window.document.createElement),er=function(){function t(e,i){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.onScroll=function(){r.scrollXTicking||(window.requestAnimationFrame(r.scrollX),r.scrollXTicking=!0),r.scrollYTicking||(window.requestAnimationFrame(r.scrollY),r.scrollYTicking=!0)},this.scrollX=function(){r.axis.x.isOverflowing&&(r.showScrollbar("x"),r.positionScrollbar("x")),r.scrollXTicking=!1},this.scrollY=function(){r.axis.y.isOverflowing&&(r.showScrollbar("y"),r.positionScrollbar("y")),r.scrollYTicking=!1},this.onMouseEnter=function(){r.showScrollbar("x"),r.showScrollbar("y")},this.onMouseMove=function(t){r.mouseX=t.clientX,r.mouseY=t.clientY,(r.axis.x.isOverflowing||r.axis.x.forceVisible)&&r.onMouseMoveForAxis("x"),(r.axis.y.isOverflowing||r.axis.y.forceVisible)&&r.onMouseMoveForAxis("y")},this.onMouseLeave=function(){r.onMouseMove.cancel(),(r.axis.x.isOverflowing||r.axis.x.forceVisible)&&r.onMouseLeaveForAxis("x"),(r.axis.y.isOverflowing||r.axis.y.forceVisible)&&r.onMouseLeaveForAxis("y"),r.mouseX=-1,r.mouseY=-1},this.onWindowResize=function(){r.scrollbarWidth=ve(),r.hideNativeScrollbar()},this.hideScrollbars=function(){r.axis.x.track.rect=r.axis.x.track.el.getBoundingClientRect(),r.axis.y.track.rect=r.axis.y.track.el.getBoundingClientRect(),r.isWithinBounds(r.axis.y.track.rect)||(r.axis.y.scrollbar.el.classList.remove(r.classNames.visible),r.axis.y.isVisible=!1),r.isWithinBounds(r.axis.x.track.rect)||(r.axis.x.scrollbar.el.classList.remove(r.classNames.visible),r.axis.x.isVisible=!1)},this.onPointerEvent=function(t){var e,i;r.axis.x.scrollbar.rect=r.axis.x.scrollbar.el.getBoundingClientRect(),r.axis.y.scrollbar.rect=r.axis.y.scrollbar.el.getBoundingClientRect(),(r.axis.x.isOverflowing||r.axis.x.forceVisible)&&(i=r.isWithinBounds(r.axis.x.scrollbar.rect)),(r.axis.y.isOverflowing||r.axis.y.forceVisible)&&(e=r.isWithinBounds(r.axis.y.scrollbar.rect)),(e||i)&&(t.preventDefault(),t.stopPropagation(),"mousedown"===t.type&&(e&&r.onDragStart(t,"y"),i&&r.onDragStart(t,"x")))},this.drag=function(e){var i=r.axis[r.draggedAxis].track,n=i.rect[r.axis[r.draggedAxis].sizeAttr],o=r.axis[r.draggedAxis].scrollbar;e.preventDefault(),e.stopPropagation();var s=(("y"===r.draggedAxis?e.pageY:e.pageX)-i.rect[r.axis[r.draggedAxis].offsetAttr]-r.axis[r.draggedAxis].dragOffset)/i.rect[r.axis[r.draggedAxis].sizeAttr]*r.contentEl[r.axis[r.draggedAxis].scrollSizeAttr];"x"===r.draggedAxis&&(s=r.isRtl&&t.getRtlHelpers().isRtlScrollbarInverted?s-(n+o.size):s,s=r.isRtl&&t.getRtlHelpers().isRtlScrollingInverted?-s:s),r.contentEl[r.axis[r.draggedAxis].scrollOffsetAttr]=s},this.onEndDrag=function(t){t.preventDefault(),t.stopPropagation(),document.removeEventListener("mousemove",r.drag),document.removeEventListener("mouseup",r.onEndDrag)},this.el=e,this.flashTimeout,this.contentEl,this.offsetEl,this.maskEl,this.globalObserver,this.mutationObserver,this.resizeObserver,this.scrollbarWidth,this.minScrollbarWidth=20,this.options=pe({},t.defaultOptions,i),this.classNames=pe({},t.defaultOptions.classNames,this.options.classNames),this.isRtl,this.axis={x:{scrollOffsetAttr:"scrollLeft",sizeAttr:"width",scrollSizeAttr:"scrollWidth",offsetAttr:"left",overflowAttr:"overflowX",dragOffset:0,isOverflowing:!0,isVisible:!1,forceVisible:!1,track:{},scrollbar:{}},y:{scrollOffsetAttr:"scrollTop",sizeAttr:"height",scrollSizeAttr:"scrollHeight",offsetAttr:"top",overflowAttr:"overflowY",dragOffset:0,isOverflowing:!0,isVisible:!1,forceVisible:!1,track:{},scrollbar:{}}},this.recalculate=We(this.recalculate.bind(this),64),this.onMouseMove=We(this.onMouseMove.bind(this),64),this.hideScrollbars=Qe(this.hideScrollbars.bind(this),this.options.timeout),this.onWindowResize=Qe(this.onWindowResize.bind(this),64,{leading:!0}),t.getRtlHelpers=Li(t.getRtlHelpers),this.getContentElement=this.getScrollElement,this.init()}var e,i,r;return e=t,r=[{key:"getRtlHelpers",value:function(){var e=document.createElement("div");e.innerHTML='<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';var i=e.firstElementChild;document.body.appendChild(i);var r=i.firstElementChild;i.scrollLeft=0;var n=t.getOffset(i),o=t.getOffset(r);i.scrollLeft=999;var s=t.getOffset(r);return{isRtlScrollingInverted:n.left!==o.left&&o.left-s.left!=0,isRtlScrollbarInverted:n.left!==o.left}}},{key:"initHtmlApi",value:function(){this.initDOMLoadedElements=this.initDOMLoadedElements.bind(this),"undefined"!=typeof MutationObserver&&(this.globalObserver=new MutationObserver(function(e){e.forEach(function(e){Array.from(e.addedNodes).forEach(function(e){1===e.nodeType&&(e.hasAttribute("data-simplebar")?!e.SimpleBar&&new t(e,t.getElOptions(e)):Array.from(e.querySelectorAll("[data-simplebar]")).forEach(function(e){!e.SimpleBar&&new t(e,t.getElOptions(e))}))}),Array.from(e.removedNodes).forEach(function(t){1===t.nodeType&&(t.hasAttribute("data-simplebar")?t.SimpleBar&&t.SimpleBar.unMount():Array.from(t.querySelectorAll("[data-simplebar]")).forEach(function(t){t.SimpleBar&&t.SimpleBar.unMount()}))})})}),this.globalObserver.observe(document,{childList:!0,subtree:!0})),"complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll?window.setTimeout(this.initDOMLoadedElements):(document.addEventListener("DOMContentLoaded",this.initDOMLoadedElements),window.addEventListener("load",this.initDOMLoadedElements))}},{key:"getElOptions",value:function(t){return Array.from(t.attributes).reduce(function(t,e){var i=e.name.match(/data-simplebar-(.+)/);if(i){var r=i[1].replace(/\W+(.)/g,function(t,e){return e.toUpperCase()});switch(e.value){case"true":t[r]=!0;break;case"false":t[r]=!1;break;case void 0:t[r]=!0;break;default:t[r]=e.value}}return t},{})}},{key:"removeObserver",value:function(){this.globalObserver.disconnect()}},{key:"initDOMLoadedElements",value:function(){document.removeEventListener("DOMContentLoaded",this.initDOMLoadedElements),window.removeEventListener("load",this.initDOMLoadedElements),Array.from(document.querySelectorAll("[data-simplebar]")).forEach(function(e){e.SimpleBar||new t(e,t.getElOptions(e))})}},{key:"getOffset",value:function(t){var e=t.getBoundingClientRect();return{top:e.top+(window.pageYOffset||document.documentElement.scrollTop),left:e.left+(window.pageXOffset||document.documentElement.scrollLeft)}}}],(i=[{key:"init",value:function(){this.el.SimpleBar=this,tr&&(this.initDOM(),this.scrollbarWidth=ve(),this.recalculate(),this.initListeners())}},{key:"initDOM",value:function(){var t=this;if(Array.from(this.el.children).filter(function(e){return e.classList.contains(t.classNames.wrapper)}).length)this.wrapperEl=this.el.querySelector(".".concat(this.classNames.wrapper)),this.contentEl=this.el.querySelector(".".concat(this.classNames.content)),this.offsetEl=this.el.querySelector(".".concat(this.classNames.offset)),this.maskEl=this.el.querySelector(".".concat(this.classNames.mask)),this.placeholderEl=this.el.querySelector(".".concat(this.classNames.placeholder)),this.heightAutoObserverWrapperEl=this.el.querySelector(".".concat(this.classNames.heightAutoObserverWrapperEl)),this.heightAutoObserverEl=this.el.querySelector(".".concat(this.classNames.heightAutoObserverEl)),this.axis.x.track.el=this.el.querySelector(".".concat(this.classNames.track,".").concat(this.classNames.horizontal)),this.axis.y.track.el=this.el.querySelector(".".concat(this.classNames.track,".").concat(this.classNames.vertical));else{for(this.wrapperEl=document.createElement("div"),this.contentEl=document.createElement("div"),this.offsetEl=document.createElement("div"),this.maskEl=document.createElement("div"),this.placeholderEl=document.createElement("div"),this.heightAutoObserverWrapperEl=document.createElement("div"),this.heightAutoObserverEl=document.createElement("div"),this.wrapperEl.classList.add(this.classNames.wrapper),this.contentEl.classList.add(this.classNames.content),this.offsetEl.classList.add(this.classNames.offset),this.maskEl.classList.add(this.classNames.mask),this.placeholderEl.classList.add(this.classNames.placeholder),this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl),this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl);this.el.firstChild;)this.contentEl.appendChild(this.el.firstChild);this.offsetEl.appendChild(this.contentEl),this.maskEl.appendChild(this.offsetEl),this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl),this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),this.wrapperEl.appendChild(this.maskEl),this.wrapperEl.appendChild(this.placeholderEl),this.el.appendChild(this.wrapperEl)}if(!this.axis.x.track.el||!this.axis.y.track.el){var e=document.createElement("div"),i=document.createElement("div");e.classList.add(this.classNames.track),i.classList.add(this.classNames.scrollbar),this.options.autoHide||i.classList.add(this.classNames.visible),e.appendChild(i),this.axis.x.track.el=e.cloneNode(!0),this.axis.x.track.el.classList.add(this.classNames.horizontal),this.axis.y.track.el=e.cloneNode(!0),this.axis.y.track.el.classList.add(this.classNames.vertical),this.el.appendChild(this.axis.x.track.el),this.el.appendChild(this.axis.y.track.el)}this.axis.x.scrollbar.el=this.axis.x.track.el.querySelector(".".concat(this.classNames.scrollbar)),this.axis.y.scrollbar.el=this.axis.y.track.el.querySelector(".".concat(this.classNames.scrollbar)),this.el.setAttribute("data-simplebar","init")}},{key:"initListeners",value:function(){var t=this;this.options.autoHide&&this.el.addEventListener("mouseenter",this.onMouseEnter),["mousedown","click","dblclick","touchstart","touchend","touchmove"].forEach(function(e){t.el.addEventListener(e,t.onPointerEvent,!0)}),this.el.addEventListener("mousemove",this.onMouseMove),this.el.addEventListener("mouseleave",this.onMouseLeave),this.contentEl.addEventListener("scroll",this.onScroll),window.addEventListener("resize",this.onWindowResize),"undefined"!=typeof MutationObserver&&(this.mutationObserver=new MutationObserver(function(e){e.forEach(function(e){(e.target===t.el||!t.isChildNode(e.target)||e.addedNodes.length||e.removedNodes.length)&&t.recalculate()})}),this.mutationObserver.observe(this.el,{attributes:!0,childList:!0,characterData:!0,subtree:!0})),this.resizeObserver=new Zi(this.recalculate),this.resizeObserver.observe(this.el)}},{key:"recalculate",value:function(){var t=this.heightAutoObserverEl.offsetHeight<=1;this.elStyles=window.getComputedStyle(this.el),this.isRtl="rtl"===this.elStyles.direction,this.contentEl.style.padding="".concat(this.elStyles.paddingTop," ").concat(this.elStyles.paddingRight," ").concat(this.elStyles.paddingBottom," ").concat(this.elStyles.paddingLeft),this.contentEl.style.height=t?"auto":"100%",this.placeholderEl.style.width="".concat(this.contentEl.scrollWidth,"px"),this.placeholderEl.style.height="".concat(this.contentEl.scrollHeight,"px"),this.wrapperEl.style.margin="-".concat(this.elStyles.paddingTop," -").concat(this.elStyles.paddingRight," -").concat(this.elStyles.paddingBottom," -").concat(this.elStyles.paddingLeft),this.axis.x.track.rect=this.axis.x.track.el.getBoundingClientRect(),this.axis.y.track.rect=this.axis.y.track.el.getBoundingClientRect(),this.axis.x.isOverflowing=(this.scrollbarWidth?this.contentEl.scrollWidth:this.contentEl.scrollWidth-this.minScrollbarWidth)>Math.ceil(this.axis.x.track.rect.width),this.axis.y.isOverflowing=(this.scrollbarWidth?this.contentEl.scrollHeight:this.contentEl.scrollHeight-this.minScrollbarWidth)>Math.ceil(this.axis.y.track.rect.height),this.axis.x.isOverflowing="hidden"!==this.elStyles.overflowX&&this.axis.x.isOverflowing,this.axis.y.isOverflowing="hidden"!==this.elStyles.overflowY&&this.axis.y.isOverflowing,this.axis.x.forceVisible="x"===this.options.forceVisible||!0===this.options.forceVisible,this.axis.y.forceVisible="y"===this.options.forceVisible||!0===this.options.forceVisible,this.axis.x.scrollbar.size=this.getScrollbarSize("x"),this.axis.y.scrollbar.size=this.getScrollbarSize("y"),this.axis.x.scrollbar.el.style.width="".concat(this.axis.x.scrollbar.size,"px"),this.axis.y.scrollbar.el.style.height="".concat(this.axis.y.scrollbar.size,"px"),this.positionScrollbar("x"),this.positionScrollbar("y"),this.toggleTrackVisibility("x"),this.toggleTrackVisibility("y"),this.hideNativeScrollbar()}},{key:"getScrollbarSize",value:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"y",i=this.scrollbarWidth?this.contentEl[this.axis[e].scrollSizeAttr]:this.contentEl[this.axis[e].scrollSizeAttr]-this.minScrollbarWidth,r=this.axis[e].track.rect[this.axis[e].sizeAttr];if(this.axis[e].isOverflowing){var n=r/i;return t=Math.max(~~(n*r),this.options.scrollbarMinSize),this.options.scrollbarMaxSize&&(t=Math.min(t,this.options.scrollbarMaxSize)),t}}},{key:"positionScrollbar",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"y",i=this.contentEl[this.axis[e].scrollSizeAttr],r=this.axis[e].track.rect[this.axis[e].sizeAttr],n=parseInt(this.elStyles[this.axis[e].sizeAttr],10),o=this.axis[e].scrollbar,s=this.contentEl[this.axis[e].scrollOffsetAttr],a=(s="x"===e&&this.isRtl&&t.getRtlHelpers().isRtlScrollingInverted?-s:s)/(i-n),l=~~((r-o.size)*a);l="x"===e&&this.isRtl&&t.getRtlHelpers().isRtlScrollbarInverted?l+(r-o.size):l,o.el.style.transform="x"===e?"translate3d(".concat(l,"px, 0, 0)"):"translate3d(0, ".concat(l,"px, 0)")}},{key:"toggleTrackVisibility",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"y",e=this.axis[t].track.el,i=this.axis[t].scrollbar.el;this.axis[t].isOverflowing||this.axis[t].forceVisible?(e.style.visibility="visible",this.contentEl.style[this.axis[t].overflowAttr]="scroll"):(e.style.visibility="hidden",this.contentEl.style[this.axis[t].overflowAttr]="hidden"),this.axis[t].isOverflowing?i.style.visibility="visible":i.style.visibility="hidden"}},{key:"hideNativeScrollbar",value:function(){if(this.offsetEl.style[this.isRtl?"left":"right"]=this.axis.y.isOverflowing||this.axis.y.forceVisible?"-".concat(this.scrollbarWidth||this.minScrollbarWidth,"px"):0,this.offsetEl.style.bottom=this.axis.x.isOverflowing||this.axis.x.forceVisible?"-".concat(this.scrollbarWidth||this.minScrollbarWidth,"px"):0,!this.scrollbarWidth){var t=[this.isRtl?"paddingLeft":"paddingRight"];this.contentEl.style[t]=this.axis.y.isOverflowing||this.axis.y.forceVisible?"calc(".concat(this.elStyles[t]," + ").concat(this.minScrollbarWidth,"px)"):this.elStyles[t],this.contentEl.style.paddingBottom=this.axis.x.isOverflowing||this.axis.x.forceVisible?"calc(".concat(this.elStyles.paddingBottom," + ").concat(this.minScrollbarWidth,"px)"):this.elStyles.paddingBottom}}},{key:"onMouseMoveForAxis",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"y";this.axis[t].track.rect=this.axis[t].track.el.getBoundingClientRect(),this.axis[t].scrollbar.rect=this.axis[t].scrollbar.el.getBoundingClientRect(),this.isWithinBounds(this.axis[t].scrollbar.rect)?this.axis[t].scrollbar.el.classList.add(this.classNames.hover):this.axis[t].scrollbar.el.classList.remove(this.classNames.hover),this.isWithinBounds(this.axis[t].track.rect)?(this.showScrollbar(t),this.axis[t].track.el.classList.add(this.classNames.hover)):this.axis[t].track.el.classList.remove(this.classNames.hover)}},{key:"onMouseLeaveForAxis",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"y";this.axis[t].track.el.classList.remove(this.classNames.hover),this.axis[t].scrollbar.el.classList.remove(this.classNames.hover)}},{key:"showScrollbar",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"y",e=this.axis[t].scrollbar.el;this.axis[t].isVisible||(e.classList.add(this.classNames.visible),this.axis[t].isVisible=!0),this.options.autoHide&&this.hideScrollbars()}},{key:"onDragStart",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"y",i=this.axis[e].scrollbar.el,r="y"===e?t.pageY:t.pageX;this.axis[e].dragOffset=r-i.getBoundingClientRect()[this.axis[e].offsetAttr],this.draggedAxis=e,document.addEventListener("mousemove",this.drag),document.addEventListener("mouseup",this.onEndDrag)}},{key:"getScrollElement",value:function(){return this.contentEl}},{key:"removeListeners",value:function(){var t=this;this.options.autoHide&&this.el.removeEventListener("mouseenter",this.onMouseEnter),["mousedown","click","dblclick","touchstart","touchend","touchmove"].forEach(function(e){t.el.removeEventListener(e,t.onPointerEvent)}),this.el.removeEventListener("mousemove",this.onMouseMove),this.el.removeEventListener("mouseleave",this.onMouseLeave),this.contentEl.removeEventListener("scroll",this.onScroll),window.removeEventListener("resize",this.onWindowResize),this.mutationObserver&&this.mutationObserver.disconnect(),this.resizeObserver.disconnect(),this.recalculate.cancel(),this.onMouseMove.cancel(),this.hideScrollbars.cancel(),this.onWindowResize.cancel()}},{key:"unMount",value:function(){this.removeListeners(),this.el.SimpleBar=null}},{key:"isChildNode",value:function(t){return null!==t&&(t===this.el||this.isChildNode(t.parentNode))}},{key:"isWithinBounds",value:function(t){return this.mouseX>=t.left&&this.mouseX<=t.left+t.width&&this.mouseY>=t.top&&this.mouseY<=t.top+t.height}}])&&fe(e.prototype,i),r&&fe(e,r),t}();return er.defaultOptions={autoHide:!0,forceVisible:!1,classNames:{content:"simplebar-content",offset:"simplebar-offset",mask:"simplebar-mask",wrapper:"simplebar-wrapper",placeholder:"simplebar-placeholder",scrollbar:"simplebar-scrollbar",track:"simplebar-track",heightAutoObserverWrapperEl:"simplebar-height-auto-observer-wrapper",heightAutoObserverEl:"simplebar-height-auto-observer",visible:"simplebar-visible",horizontal:"simplebar-horizontal",vertical:"simplebar-vertical",hover:"simplebar-hover"},scrollbarMinSize:25,scrollbarMaxSize:0,timeout:1e3},tr&&er.initHtmlApi(),er});
/*!
 * ztext.js v0.0.1
 * https://bennettfeely.com/ztext
 * Licensed MIT | (c) 2020 Bennett Feely
 */
if(CSS.supports("-moz-transform-style","preserve-3d")||CSS.supports("-ms-transform-style","preserve-3d")||CSS.supports("-webkit-transform-style","preserve-3d")||CSS.supports("transform-style","preserve-3d")){z_default={depth:"1rem",direction:"both",event:"none",eventRotation:"30deg",eventDirection:"default",fade:!1,layers:10,perspective:"500px",z:!0};var zs=document.querySelectorAll("[data-z]");function Ztextify(e,t){document.querySelectorAll(e).forEach(e=>{zDraw(e,t)})}function zDraw(e,t){if("false"!==(t.zEngaged||z_default.zEngaged)){var n=t.depth||z_default.depth,r=n.match(/[a-z]+/)[0],a=parseFloat(n.replace(r,"")),s=t.direction||z_default.direction,o=t.event||z_default.event,l=t.eventRotation||z_default.eventRotation,d=l.match(/[a-z]+/)[0],c=parseFloat(l.replace(d,"")),p=t.eventDirection||z_default.eventDirection,f=t.fade||z_default.fade,u=t.layers||z_default.layers,v=t.perspective||z_default.perspective,y=t.transform||z_default.transform,w=e.innerHTML;e.innerHTML="",e.style.display="inline-block",e.style.position="relative",e.style.webkitPerspective=v,e.style.perspective=v;var z=document.createElement("span");z.setAttribute("class","z-text"),z.style.display="inline-block",z.style.webkitTransformStyle="preserve-3d",z.style.transformStyle="preserve-3d";var h=document.createElement("span");for(h.setAttribute("class","z-layers"),h.style.display="inline-block",h.style.webkitTransformStyle="preserve-3d",h.style.transformStyle="preserve-3d",z.append(h),i=0;i<u;i++){let e=i/u;var m=document.createElement("span");if(m.setAttribute("class","z-layer"),m.innerHTML=w,m.style.display="inline-block","backwards"===s)var b=-e*a;if("both"===s)b=-e*a+a/2;if("forwards"===s)b=-e*a+a;y="translateZ("+b+r+")";m.style.webkitTransform=y,m.style.transform=y,i>=1&&(m.style.position="absolute",m.style.top=0,m.style.left=0,m.setAttribute("aria-hidden","true"),m.style.pointerEvents="none",m.style.mozUserSelect="none",m.style.msUserSelect="none",m.style.webkitUserSelect="none",m.style.userSelect="none",!0!==f&&"true"!==f||(m.style.opacity=(1-e)/2)),h.append(m)}function g(e,t){if("reverse"==p)var n=-1;else n=1;var r=e*c*n,i=-t*c*n,a=(Math.min(Math.max(r,-1),1),Math.min(Math.max(i,-1),1),"rotateX("+i+d+") rotateY("+r+d+")");h.style.webkitTransform=a,h.style.transform=a}if(e.append(z),"pointer"===o&&(window.addEventListener("mousemove",e=>{g(2*(e.clientX/window.innerWidth-.5),2*(e.clientY/window.innerHeight-.5))},!1),window.addEventListener("touchmove",e=>{g(2*(e.touches[0].clientX/window.innerWidth-.5),2*(e.touches[0].clientY/window.innerHeight-.5))},!1)),"scroll"==o){scroll(),window.addEventListener("scroll",(function(){var t=e.getBoundingClientRect(),n=t.left+t.width/2-window.innerWidth/2,r=t.top+t.height/2-window.innerHeight/2;g(n/window.innerWidth*-2,r/window.innerHeight*-2)}),!1)}if("scrollY"==o){scrollY(),window.addEventListener("scroll",(function(){var t=e.getBoundingClientRect();g(0,(t.top+t.height/2-window.innerHeight/2)/window.innerHeight*-2)}),!1)}if("scrollX"==o){scrollX(),window.addEventListener("scroll",(function(){var t=e.getBoundingClientRect();g((t.left+t.width/2-window.innerWidth/2)/window.innerWidth*-2,0)}),!1)}}}zs.forEach(e=>{options={depth:e.dataset.zDepth||z_default.depth,direction:e.dataset.zDirection||z_default.direction,event:e.dataset.zEvent||z_default.event,eventRotation:e.dataset.zEventrotation||z_default.eventRotation,eventDirection:e.dataset.zEventdirection||z_default.eventDirection,fade:e.dataset.zFade||z_default.fade,layers:parseFloat(e.dataset.zLayers)||z_default.layers,perspective:e.dataset.zPerspective||z_default.perspective,zEngaged:e.dataset.z||z_default.z},zDraw(e,options)})}else console.error("ztext is disabled because CSS transform-style: preserve3d; is unsupported.");
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).Parallax=t()}}(function(){return function t(e,i,n){function o(r,a){if(!i[r]){if(!e[r]){var l="function"==typeof require&&require;if(!a&&l)return l(r,!0);if(s)return s(r,!0);var h=new Error("Cannot find module '"+r+"'");throw h.code="MODULE_NOT_FOUND",h}var u=i[r]={exports:{}};e[r][0].call(u.exports,function(t){var i=e[r][1][t];return o(i||t)},u,u.exports,t,e,i,n)}return i[r].exports}for(var s="function"==typeof require&&require,r=0;r<n.length;r++)o(n[r]);return o}({1:[function(t,e,i){"use strict";function n(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}var o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},i=0;i<10;i++)e["_"+String.fromCharCode(i)]=i;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(t){n[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var i,a,l=n(t),h=1;h<arguments.length;h++){i=Object(arguments[h]);for(var u in i)s.call(i,u)&&(l[u]=i[u]);if(o){a=o(i);for(var c=0;c<a.length;c++)r.call(i,a[c])&&(l[a[c]]=i[a[c]])}}return l}},{}],2:[function(t,e,i){(function(t){(function(){var i,n,o,s,r,a;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:void 0!==t&&null!==t&&t.hrtime?(e.exports=function(){return(i()-r)/1e6},n=t.hrtime,s=(i=function(){var t;return 1e9*(t=n())[0]+t[1]})(),a=1e9*t.uptime(),r=s-a):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(this,t("_process"))},{_process:3}],3:[function(t,e,i){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(t){if(c===setTimeout)return setTimeout(t,0);if((c===n||!c)&&setTimeout)return c=setTimeout,setTimeout(t,0);try{return c(t,0)}catch(e){try{return c.call(null,t,0)}catch(e){return c.call(this,t,0)}}}function r(t){if(d===clearTimeout)return clearTimeout(t);if((d===o||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(t);try{return d(t)}catch(e){try{return d.call(null,t)}catch(e){return d.call(this,t)}}}function a(){v&&p&&(v=!1,p.length?f=p.concat(f):y=-1,f.length&&l())}function l(){if(!v){var t=s(a);v=!0;for(var e=f.length;e;){for(p=f,f=[];++y<e;)p&&p[y].run();y=-1,e=f.length}p=null,v=!1,r(t)}}function h(t,e){this.fun=t,this.array=e}function u(){}var c,d,m=e.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:n}catch(t){c=n}try{d="function"==typeof clearTimeout?clearTimeout:o}catch(t){d=o}}();var p,f=[],v=!1,y=-1;m.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)e[i-1]=arguments[i];f.push(new h(t,e)),1!==f.length||v||s(l)},h.prototype.run=function(){this.fun.apply(null,this.array)},m.title="browser",m.browser=!0,m.env={},m.argv=[],m.version="",m.versions={},m.on=u,m.addListener=u,m.once=u,m.off=u,m.removeListener=u,m.removeAllListeners=u,m.emit=u,m.prependListener=u,m.prependOnceListener=u,m.listeners=function(t){return[]},m.binding=function(t){throw new Error("process.binding is not supported")},m.cwd=function(){return"/"},m.chdir=function(t){throw new Error("process.chdir is not supported")},m.umask=function(){return 0}},{}],4:[function(t,e,i){(function(i){for(var n=t("performance-now"),o="undefined"==typeof window?i:window,s=["moz","webkit"],r="AnimationFrame",a=o["request"+r],l=o["cancel"+r]||o["cancelRequest"+r],h=0;!a&&h<s.length;h++)a=o[s[h]+"Request"+r],l=o[s[h]+"Cancel"+r]||o[s[h]+"CancelRequest"+r];if(!a||!l){var u=0,c=0,d=[];a=function(t){if(0===d.length){var e=n(),i=Math.max(0,1e3/60-(e-u));u=i+e,setTimeout(function(){var t=d.slice(0);d.length=0;for(var e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(u)}catch(t){setTimeout(function(){throw t},0)}},Math.round(i))}return d.push({handle:++c,callback:t,cancelled:!1}),c},l=function(t){for(var e=0;e<d.length;e++)d[e].handle===t&&(d[e].cancelled=!0)}}e.exports=function(t){return a.call(o,t)},e.exports.cancel=function(){l.apply(o,arguments)},e.exports.polyfill=function(){o.requestAnimationFrame=a,o.cancelAnimationFrame=l}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"performance-now":2}],5:[function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=t("raf"),r=t("object-assign"),a={propertyCache:{},vendors:[null,["-webkit-","webkit"],["-moz-","Moz"],["-o-","O"],["-ms-","ms"]],clamp:function(t,e,i){return e<i?t<e?e:t>i?i:t:t<i?i:t>e?e:t},data:function(t,e){return a.deserialize(t.getAttribute("data-"+e))},deserialize:function(t){return"true"===t||"false"!==t&&("null"===t?null:!isNaN(parseFloat(t))&&isFinite(t)?parseFloat(t):t)},camelCase:function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},accelerate:function(t){a.css(t,"transform","translate3d(0,0,0) rotate(0.0001deg)"),a.css(t,"transform-style","preserve-3d"),a.css(t,"backface-visibility","hidden")},transformSupport:function(t){for(var e=document.createElement("div"),i=!1,n=null,o=!1,s=null,r=null,l=0,h=a.vendors.length;l<h;l++)if(null!==a.vendors[l]?(s=a.vendors[l][0]+"transform",r=a.vendors[l][1]+"Transform"):(s="transform",r="transform"),void 0!==e.style[r]){i=!0;break}switch(t){case"2D":o=i;break;case"3D":if(i){var u=document.body||document.createElement("body"),c=document.documentElement,d=c.style.overflow,m=!1;document.body||(m=!0,c.style.overflow="hidden",c.appendChild(u),u.style.overflow="hidden",u.style.background=""),u.appendChild(e),e.style[r]="translate3d(1px,1px,1px)",o=void 0!==(n=window.getComputedStyle(e).getPropertyValue(s))&&n.length>0&&"none"!==n,c.style.overflow=d,u.removeChild(e),m&&(u.removeAttribute("style"),u.parentNode.removeChild(u))}}return o},css:function(t,e,i){var n=a.propertyCache[e];if(!n)for(var o=0,s=a.vendors.length;o<s;o++)if(n=null!==a.vendors[o]?a.camelCase(a.vendors[o][1]+"-"+e):e,void 0!==t.style[n]){a.propertyCache[e]=n;break}t.style[n]=i}},l={relativeInput:!1,clipRelativeInput:!1,inputElement:null,hoverOnly:!1,calibrationThreshold:100,calibrationDelay:500,supportDelay:500,calibrateX:!1,calibrateY:!0,invertX:!0,invertY:!0,limitX:!1,limitY:!1,scalarX:10,scalarY:10,frictionX:.1,frictionY:.1,originX:.5,originY:.5,pointerEvents:!1,precision:1,onReady:null,selector:null},h=function(){function t(e,i){n(this,t),this.element=e;var o={calibrateX:a.data(this.element,"calibrate-x"),calibrateY:a.data(this.element,"calibrate-y"),invertX:a.data(this.element,"invert-x"),invertY:a.data(this.element,"invert-y"),limitX:a.data(this.element,"limit-x"),limitY:a.data(this.element,"limit-y"),scalarX:a.data(this.element,"scalar-x"),scalarY:a.data(this.element,"scalar-y"),frictionX:a.data(this.element,"friction-x"),frictionY:a.data(this.element,"friction-y"),originX:a.data(this.element,"origin-x"),originY:a.data(this.element,"origin-y"),pointerEvents:a.data(this.element,"pointer-events"),precision:a.data(this.element,"precision"),relativeInput:a.data(this.element,"relative-input"),clipRelativeInput:a.data(this.element,"clip-relative-input"),hoverOnly:a.data(this.element,"hover-only"),inputElement:document.querySelector(a.data(this.element,"input-element")),selector:a.data(this.element,"selector")};for(var s in o)null===o[s]&&delete o[s];r(this,l,o,i),this.inputElement||(this.inputElement=this.element),this.calibrationTimer=null,this.calibrationFlag=!0,this.enabled=!1,this.depthsX=[],this.depthsY=[],this.raf=null,this.bounds=null,this.elementPositionX=0,this.elementPositionY=0,this.elementWidth=0,this.elementHeight=0,this.elementCenterX=0,this.elementCenterY=0,this.elementRangeX=0,this.elementRangeY=0,this.calibrationX=0,this.calibrationY=0,this.inputX=0,this.inputY=0,this.motionX=0,this.motionY=0,this.velocityX=0,this.velocityY=0,this.onMouseMove=this.onMouseMove.bind(this),this.onDeviceOrientation=this.onDeviceOrientation.bind(this),this.onDeviceMotion=this.onDeviceMotion.bind(this),this.onOrientationTimer=this.onOrientationTimer.bind(this),this.onMotionTimer=this.onMotionTimer.bind(this),this.onCalibrationTimer=this.onCalibrationTimer.bind(this),this.onAnimationFrame=this.onAnimationFrame.bind(this),this.onWindowResize=this.onWindowResize.bind(this),this.windowWidth=null,this.windowHeight=null,this.windowCenterX=null,this.windowCenterY=null,this.windowRadiusX=null,this.windowRadiusY=null,this.portrait=!1,this.desktop=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),this.motionSupport=!!window.DeviceMotionEvent&&!this.desktop,this.orientationSupport=!!window.DeviceOrientationEvent&&!this.desktop,this.orientationStatus=0,this.motionStatus=0,this.initialise()}return o(t,[{key:"initialise",value:function(){void 0===this.transform2DSupport&&(this.transform2DSupport=a.transformSupport("2D"),this.transform3DSupport=a.transformSupport("3D")),this.transform3DSupport&&a.accelerate(this.element),"static"===window.getComputedStyle(this.element).getPropertyValue("position")&&(this.element.style.position="relative"),this.pointerEvents||(this.element.style.pointerEvents="none"),this.updateLayers(),this.updateDimensions(),this.enable(),this.queueCalibration(this.calibrationDelay)}},{key:"doReadyCallback",value:function(){this.onReady&&this.onReady()}},{key:"updateLayers",value:function(){this.selector?this.layers=this.element.querySelectorAll(this.selector):this.layers=this.element.children,this.layers.length||console.warn("ParallaxJS: Your scene does not have any layers."),this.depthsX=[],this.depthsY=[];for(var t=0;t<this.layers.length;t++){var e=this.layers[t];this.transform3DSupport&&a.accelerate(e),e.style.position=t?"absolute":"relative",e.style.display="block",e.style.left=0,e.style.top=0;var i=a.data(e,"depth")||0;this.depthsX.push(a.data(e,"depth-x")||i),this.depthsY.push(a.data(e,"depth-y")||i)}}},{key:"updateDimensions",value:function(){this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight,this.windowCenterX=this.windowWidth*this.originX,this.windowCenterY=this.windowHeight*this.originY,this.windowRadiusX=Math.max(this.windowCenterX,this.windowWidth-this.windowCenterX),this.windowRadiusY=Math.max(this.windowCenterY,this.windowHeight-this.windowCenterY)}},{key:"updateBounds",value:function(){this.bounds=this.inputElement.getBoundingClientRect(),this.elementPositionX=this.bounds.left,this.elementPositionY=this.bounds.top,this.elementWidth=this.bounds.width,this.elementHeight=this.bounds.height,this.elementCenterX=this.elementWidth*this.originX,this.elementCenterY=this.elementHeight*this.originY,this.elementRangeX=Math.max(this.elementCenterX,this.elementWidth-this.elementCenterX),this.elementRangeY=Math.max(this.elementCenterY,this.elementHeight-this.elementCenterY)}},{key:"queueCalibration",value:function(t){clearTimeout(this.calibrationTimer),this.calibrationTimer=setTimeout(this.onCalibrationTimer,t)}},{key:"enable",value:function(){this.enabled||(this.enabled=!0,this.orientationSupport?(this.portrait=!1,window.addEventListener("deviceorientation",this.onDeviceOrientation),this.detectionTimer=setTimeout(this.onOrientationTimer,this.supportDelay)):this.motionSupport?(this.portrait=!1,window.addEventListener("devicemotion",this.onDeviceMotion),this.detectionTimer=setTimeout(this.onMotionTimer,this.supportDelay)):(this.calibrationX=0,this.calibrationY=0,this.portrait=!1,window.addEventListener("mousemove",this.onMouseMove),this.doReadyCallback()),window.addEventListener("resize",this.onWindowResize),this.raf=s(this.onAnimationFrame))}},{key:"disable",value:function(){this.enabled&&(this.enabled=!1,this.orientationSupport?window.removeEventListener("deviceorientation",this.onDeviceOrientation):this.motionSupport?window.removeEventListener("devicemotion",this.onDeviceMotion):window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("resize",this.onWindowResize),s.cancel(this.raf))}},{key:"calibrate",value:function(t,e){this.calibrateX=void 0===t?this.calibrateX:t,this.calibrateY=void 0===e?this.calibrateY:e}},{key:"invert",value:function(t,e){this.invertX=void 0===t?this.invertX:t,this.invertY=void 0===e?this.invertY:e}},{key:"friction",value:function(t,e){this.frictionX=void 0===t?this.frictionX:t,this.frictionY=void 0===e?this.frictionY:e}},{key:"scalar",value:function(t,e){this.scalarX=void 0===t?this.scalarX:t,this.scalarY=void 0===e?this.scalarY:e}},{key:"limit",value:function(t,e){this.limitX=void 0===t?this.limitX:t,this.limitY=void 0===e?this.limitY:e}},{key:"origin",value:function(t,e){this.originX=void 0===t?this.originX:t,this.originY=void 0===e?this.originY:e}},{key:"setInputElement",value:function(t){this.inputElement=t,this.updateDimensions()}},{key:"setPosition",value:function(t,e,i){e=e.toFixed(this.precision)+"px",i=i.toFixed(this.precision)+"px",this.transform3DSupport?a.css(t,"transform","translate3d("+e+","+i+",0)"):this.transform2DSupport?a.css(t,"transform","translate("+e+","+i+")"):(t.style.left=e,t.style.top=i)}},{key:"onOrientationTimer",value:function(){this.orientationSupport&&0===this.orientationStatus?(this.disable(),this.orientationSupport=!1,this.enable()):this.doReadyCallback()}},{key:"onMotionTimer",value:function(){this.motionSupport&&0===this.motionStatus?(this.disable(),this.motionSupport=!1,this.enable()):this.doReadyCallback()}},{key:"onCalibrationTimer",value:function(){this.calibrationFlag=!0}},{key:"onWindowResize",value:function(){this.updateDimensions()}},{key:"onAnimationFrame",value:function(){this.updateBounds();var t=this.inputX-this.calibrationX,e=this.inputY-this.calibrationY;(Math.abs(t)>this.calibrationThreshold||Math.abs(e)>this.calibrationThreshold)&&this.queueCalibration(0),this.portrait?(this.motionX=this.calibrateX?e:this.inputY,this.motionY=this.calibrateY?t:this.inputX):(this.motionX=this.calibrateX?t:this.inputX,this.motionY=this.calibrateY?e:this.inputY),this.motionX*=this.elementWidth*(this.scalarX/100),this.motionY*=this.elementHeight*(this.scalarY/100),isNaN(parseFloat(this.limitX))||(this.motionX=a.clamp(this.motionX,-this.limitX,this.limitX)),isNaN(parseFloat(this.limitY))||(this.motionY=a.clamp(this.motionY,-this.limitY,this.limitY)),this.velocityX+=(this.motionX-this.velocityX)*this.frictionX,this.velocityY+=(this.motionY-this.velocityY)*this.frictionY;for(var i=0;i<this.layers.length;i++){var n=this.layers[i],o=this.depthsX[i],r=this.depthsY[i],l=this.velocityX*(o*(this.invertX?-1:1)),h=this.velocityY*(r*(this.invertY?-1:1));this.setPosition(n,l,h)}this.raf=s(this.onAnimationFrame)}},{key:"rotate",value:function(t,e){var i=(t||0)/30,n=(e||0)/30,o=this.windowHeight>this.windowWidth;this.portrait!==o&&(this.portrait=o,this.calibrationFlag=!0),this.calibrationFlag&&(this.calibrationFlag=!1,this.calibrationX=i,this.calibrationY=n),this.inputX=i,this.inputY=n}},{key:"onDeviceOrientation",value:function(t){var e=t.beta,i=t.gamma;null!==e&&null!==i&&(this.orientationStatus=1,this.rotate(e,i))}},{key:"onDeviceMotion",value:function(t){var e=t.rotationRate.beta,i=t.rotationRate.gamma;null!==e&&null!==i&&(this.motionStatus=1,this.rotate(e,i))}},{key:"onMouseMove",value:function(t){var e=t.clientX,i=t.clientY;if(this.hoverOnly&&(e<this.elementPositionX||e>this.elementPositionX+this.elementWidth||i<this.elementPositionY||i>this.elementPositionY+this.elementHeight))return this.inputX=0,void(this.inputY=0);this.relativeInput?(this.clipRelativeInput&&(e=Math.max(e,this.elementPositionX),e=Math.min(e,this.elementPositionX+this.elementWidth),i=Math.max(i,this.elementPositionY),i=Math.min(i,this.elementPositionY+this.elementHeight)),this.elementRangeX&&this.elementRangeY&&(this.inputX=(e-this.elementPositionX-this.elementCenterX)/this.elementRangeX,this.inputY=(i-this.elementPositionY-this.elementCenterY)/this.elementRangeY)):this.windowRadiusX&&this.windowRadiusY&&(this.inputX=(e-this.windowCenterX)/this.windowRadiusX,this.inputY=(i-this.windowCenterY)/this.windowRadiusY)}},{key:"destroy",value:function(){this.disable(),clearTimeout(this.calibrationTimer),clearTimeout(this.detectionTimer),this.element.removeAttribute("style");for(var t=0;t<this.layers.length;t++)this.layers[t].removeAttribute("style");delete this.element,delete this.layers}},{key:"version",value:function(){return"3.1.0"}}]),t}();e.exports=h},{"object-assign":1,raf:4}]},{},[5])(5)});
 