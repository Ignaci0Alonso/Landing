(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var f,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function ba(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var n=ba(this),p;
if("function"==typeof Object.setPrototypeOf)p=Object.setPrototypeOf;else{var q;a:{var ca={a:!0},t={};try{t.__proto__=ca;q=t.a;break a}catch(a){}q=!1}p=q?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var u=p,v=this||self;function w(a){return a};function x(a,b){a=parseInt(a.getAttribute(b),10);isNaN(a)&&(a=1);return a}function y(a,b,c){a=z(a,b,c);return 0<a?a:c}function z(a,b,c){a=parseFloat(a.getAttribute(b));isFinite(a)||(a=c);return a}function A(a,b,c){return a.hasAttribute(b)?a.getAttribute(b):c};var da="gwd-blinds gwd-door-wipe gwd-fade gwd-iris-wipe gwd-push gwd-radial-wipe gwd-rotate gwd-slice gwd-split-push gwd-stripe-wipe gwd-venetian-blinds gwd-wipe gwd-zigzag".split(" ");var B;function E(a,b){this.g=b===F?a:""}E.prototype.i=!0;E.prototype.h=function(){return this.g.toString()};E.prototype.toString=function(){return this.g.toString()};var ea=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,F={};var G={};function H(a,b,c){this.g=c===G?a:"";this.i=!0}H.prototype.h=function(){return this.g.toString()};H.prototype.toString=function(){return this.g.toString()};function I(a){return"gwd-page"==a.tagName.toLowerCase()||"gwd-page"==a.getAttribute("is")}function fa(a){if(I(a))return a;for(;a&&9!=a.nodeType;)if((a=a.parentElement)&&I(a))return a;return null}function J(a,b,c,d){d=(void 0===d?"":d)||b;a.hasAttribute(b)?(a=a.getAttribute(b),c.setAttribute(d,a)):c.removeAttribute(d)}function L(a,b){return(a=A(a,b,""))?a.split(",").map(function(c){return c.trim()}):[]};function M(a,b,c){c=void 0===c?null:c;var d=document.createEvent("CustomEvent");d.initCustomEvent(a,!0,!0,c);b.dispatchEvent(d);return d};function ha(a,b,c,d){var e=new XMLHttpRequest;e.open("GET",b);e.setRequestHeader("Content-Type","image/svg+xml");e.addEventListener("load",function(){var k=e.responseText,l=new DOMParser;if(void 0===B){var g=null;var h=v.trustedTypes;if(h&&h.createPolicy){try{g=h.createPolicy("goog#html",{createHTML:w,createScript:w,createScriptURL:w})}catch(r){v.console&&v.console.error(r.message)}B=g}else B=g}k=(g=B)?g.createHTML(k):k;k=new H(k,null,G);if(l=l.parseFromString(k instanceof H&&k.constructor===H?k.g:
"type_error:SafeHtml","image/svg+xml").getElementsByTagName("svg")[0])if(l.hasAttribute("width")&&l.hasAttribute("height"))a.src=b;else{k=c;g=d;if(h=l.getAttribute("viewBox")){var m=h.match(/[\d,\.]+ [\d,\.]+ ([\d,\.]+) ([\d,\.]+)/);m&&(h=parseFloat(m[1]),m=parseFloat(m[2]),h&&m&&(g=Math.min(c/h,d/m),k=h*g,g*=m))}l.setAttribute("width",k);l.setAttribute("height",g);l=(new XMLSerializer).serializeToString(l);a.src="data:image/svg+xml;base64,"+window.btoa(l)}});e.send()};var ia=["easing","exit-urls","images","scaling","transition-duration"];function N(){var a=HTMLElement.call(this)||this;a.B=[];a.v=[];a.K=a.ja.bind(a);a.A=!1;a.W=0;a.h=0;a.U=null;a.s=null;a.M=null;a.P=0;a.u=0;a.J=!1;a.I=!1;a.o=null;a.ba=a.ka.bind(a);a.ea=a.na.bind(a);a.da=a.ma.bind(a);a.ca=a.la.bind(a);a.O=!1;a.m=!1;a.C=null;a.D=null;a.S=!1;return a}var O=HTMLElement;N.prototype=aa(O.prototype);N.prototype.constructor=N;
if(u)u(N,O);else for(var P in O)if("prototype"!=P)if(Object.defineProperties){var Q=Object.getOwnPropertyDescriptor(O,P);Q&&Object.defineProperty(N,P,Q)}else N[P]=O[P];f=N.prototype;
f.connectedCallback=function(){var a=this;this.l=this.clientWidth;this.i=this.clientHeight;var b=z(this,"swipe-committed-threshold",.25);this.ia=b*this.l;this.oa=b*this.i;this.pa=z(this,"swipe-threshold",.3);this.H=L(this,"images");this.N=x(this,"start-frame");this.T=1E3*y(this,"transition-duration",1);this.ga=1E3*y(this,"autoplay-frame-interval",1.5);this.X=x(this,"autoplay-loop-count");this.fa=this.hasAttribute("wrap");this.L=A(this,"scaling","stretch");this.$=A(this,"easing","linear");this.G=A(this,
"gesture","click");this.R=this.hasAttribute("enable-interactive-transition");this.ha=this.hasAttribute("ignore-reverse-swipe");this.aa=L(this,"exit-urls");setTimeout(function(){a.j=a.firstElementChild&&-1!==da.indexOf(a.firstElementChild.tagName.toLowerCase())?a.firstElementChild:null;a.hasAttribute("has-navigation")&&!a.o&&(a.i-=36,a.o=a.ownerDocument.createElement("gwd-gallerynavigation"),a.o.setAttribute("for",a.id),a.appendChild(a.o),J(a,"navigation-highlight",a.o,"highlight"),J(a,"navigation-thumbnails",
a.o,"use-thumbnails"));a.C||(a.C=a.ownerDocument.createElement("canvas"),a.appendChild(a.C));R(a,a.C);a.Y=a.C.getBoundingClientRect();a.Z=a.C.getContext("2d");a.D||(a.D=a.ownerDocument.createElement("gwd-gesture"),a.appendChild(a.D));var c=a.D;c.addEventListener("tap",a.ba,!1);if("swipe"===a.G||"click"===a.G&&a.R)c.addEventListener("trackstart",a.ea,!1),c.addEventListener("track",a.da,!1),c.addEventListener("trackend",a.ca,!1);a.A?(a.g=-1,S(a)):(a.S=!0,a.gwdIsLoaded()||((c=fa(a))?c.gwdIsLoaded()&&
a.gwdLoad():a.gwdLoad()))},0)};f.disconnectedCallback=function(){if(this.D){var a=this.D;a.removeEventListener("tap",this.ba,!1);if("swipe"===this.G||"click"===this.G&&this.R)a.removeEventListener("trackstart",this.ea,!1),a.removeEventListener("track",this.da,!1),a.removeEventListener("trackend",this.ca,!1)}this.o&&(this.removeChild(this.o),this.o=null)};
f.attributeChangedCallback=function(a,b,c){var d=this;if(b!==c&&this.S)switch(a){case "transition-duration":this.T=1E3*y(this,"transition-duration",1);break;case "easing":this.$=A(this,"easing","linear");break;case "scaling":this.L=A(this,"scaling","stretch");T(this);U(this,this.g,!1);break;case "exit-urls":this.aa=L(this,"exit-urls");break;case "images":this.H=L(this,"images"),this.A=!1,setTimeout(function(){d.gwdLoad()})}};
f.gwdLoad=function(){if(!this.A||this.S)if(this.h=this.W=0,this.v=[],this.H.length)for(var a=this.B.length=0;a<this.H.length;a++){var b=this.ownerDocument.createElement("img");b.addEventListener("load",this.K,!1);b.addEventListener("error",this.K,!1);var c=this.H[a];"svg"===c.split(".").pop().toLowerCase()?ha(b,c,this.l,this.i):b.src=c;this.B.push(b)}else this.A=!0,M("ready",this)};f.gwdIsLoaded=function(){return this.A};
function R(a,b){var c=window.devicePixelRatio;b.width=a.l*c;b.height=a.i*c;b.style.width=a.l+"px";b.style.height=a.i+"px";b.getContext("2d").scale(c,c)}f.ja=function(a){var b=this,c=a.target;c.removeEventListener("load",this.K,!1);c.removeEventListener("error",this.K,!1);c=this.B.indexOf(c);0<=c&&("error"===a.type&&this.B.splice(c,1),++this.W==this.H.length&&setTimeout(function(){S(b)}))};
function S(a){T(a);a.hasAttribute("autoplay")?a.startAutoplay():a.goToFrame(a.N,!1);a.A||(a.A=!0,M("ready",a))}f.getFrame=function(a){if(0!=this.h)return this.B[a-1]};f.goToFrame=function(a,b){b=void 0===b?!!this.j:b;this.stop(!1);this.h&&(a=V(this,a),a!=this.g&&U(this,a,b))};function U(a,b,c){c=void 0===c?!!a.j:c;M("frameactivated",a,{id:b+1});c?(a.F=b,a.U=Date.now()-(a.m?a.u*a.T:0),a.m=!1,a.V()):(a.Z.clearRect(0,0,a.l,a.i),a.Z.drawImage(a.v[b],0,0,a.l,a.i),ja(a,b))}
function T(a){a.v=[];for(var b=0;b<a.B.length;b++){var c=a.B[b],d=c.naturalWidth,e=c.naturalHeight,k=!1;d&&e||(a.appendChild(c),k=!0,d=c.width,e=c.height);var l=0,g=0,h=d,m=e,r=0,K=0,C=a.l,D=a.i;"contain"===a.L?(r=Math.min(a.l/d,a.i/e),C=r*d,D=r*e,r=(a.l-C)/2,K=(a.i-D)/2):"cover"===a.L?(l=Math.max(a.l/d,a.i/e),h=a.l/l,m=a.i/l,l=(d-h)/2,g=(e-m)/2):"none"===a.L&&(g=d-a.l,h=e-a.i,l=Math.max(g/2,0),r=Math.max(-g/2,0),g=Math.max(h/2,0),K=Math.max(-h/2,0),h=Math.min(d,a.l),m=Math.min(e,a.i),C=h,D=m);d=
a.ownerDocument.createElement("canvas");R(a,d);d.getContext("2d").drawImage(c,l,g,h,m,r,K,C,D);a.v.push(d);k&&a.removeChild(c)}a.h=a.v.length}function ja(a,b){a.g!=b&&(a.g=b,M("frameshown",a,{frameIndex:a.g}),0==a.g?M("reachleftend",a):a.g==a.h-1&&M("reachrightend",a))}f.goForwards=function(){this.stop(!1);(this.fa||this.g!=this.h-1)&&this.h&&U(this,W(this,!0))};f.goBackwards=function(){this.stop(!1);(this.fa||0!=this.g)&&this.h&&U(this,W(this,!1))};
function W(a,b){return((b?a.g+1:a.g-1)+a.h)%a.h}function V(a,b){1>b?b=1:b>a.h&&(b=a.h);return b-1}f.V=function(){this.m||null===this.U||(this.u=ka(this,Math.min(1,(Date.now()-this.U)/this.T)),this.s=requestAnimationFrame(this.V.bind(this)));this.j.renderAnimation(this.v[this.g],this.v[this.F],this.u);1!=this.u||this.m||(this.s&&(cancelAnimationFrame(this.s),this.s=null),this.j.resetDirection(),ja(this,this.F),(this.I||this.J)&&X(this))};
function ka(a,b){switch(a.$){case "ease-in":return b*b*b;case "ease-in-out":return 3*b*b-2*b*b*b;case "ease-out":return a=1-b,1-a*a*a;default:return b}}f.startAutoplay=function(a){this.P=0;(void 0===a?0:a)||this.goToFrame(this.N,!1);this.I=!0;X(this)};f.rotateOnce=function(a){(void 0===a?0:a)||this.goToFrame(this.N,!1);this.J=!0;X(this)};function la(a){var b=V(a,a.N);return 0==b?a.h:b}f.updateAnimationElement=function(a){this.j=a};
function X(a){if(a.J){if(a.g==la(a)-1){a.stop(!0);return}}else if(a.I&&0!=a.X&&(a.g==la(a)-1&&a.P++,a.P>=a.X)){a.stop(!0);return}a.M=setTimeout(function(){requestAnimationFrame(function(){a.h&&U(a,W(a,!0));a.j||X(a)})},a.ga)}function ma(a){.5<=a.u?U(a,a.F,!1):U(a,a.g,!1)}
f.stop=function(a,b){b=null!=b?b:!0;this.s&&(cancelAnimationFrame(this.s),this.s=null,ma(this));this.m&&(this.m=!1,ma(this),this.j.resetDirection());this.M&&(clearTimeout(this.M),this.M=null);this.J?(this.J=!1,b&&M("rotateonceended",this,{completed:!!a})):this.I&&(this.I=!1,b&&M("autoplayended",this,{completed:!!a}))};
f.ka=function(){if(this.h){M("frametap",this,{id:this.g+1});var a=this.aa[this.g];a?(this.stop(!1),M("frameexit",this,{url:a}).detail.handled||(a instanceof E||a instanceof E||(a="object"==typeof a&&a.i?a.h():String(a),ea.test(a)||(a="about:invalid#zClosurez"),a=new E(a,F)),v.open(a instanceof E&&a.constructor===E?a.g:"type_error:SafeUrl",""))):"click"==this.G&&this.goForwards()}};f.na=function(){this.stop(!1)};
f.ma=function(a){var b=this;if(!this.O)if(this.R&&Y(this,a.dx,a.dy,!1)){this.m||(this.m=!0,Z(this,a.dx,a.dy,function(){b.F=W(b,!0)},function(){b.F=W(b,!1)}));a=Math.abs(a.dy)>Math.abs(a.dx)?(a.clientY-this.Y.top)/this.i:(a.clientX-this.Y.left)/this.l;var c=this.j.getSupportedSwipeDirection();0>c[0]+c[1]&&(a=1-a);this.u=a;this.V()}else Y(this,a.dx,a.dy,!0)&&(this.O=!0,Z(this,a.dx,a.dy,this.goForwards.bind(this),this.goBackwards.bind(this)))};
f.la=function(a){this.O?this.O=!1:this.m?this.u>=this.pa?U(this,this.F):this.stop(!1,!1):Y(this,a.dx,a.dy,!1)&&Z(this,a.dx,a.dy,this.goForwards.bind(this),this.goBackwards.bind(this))};function Y(a,b,c,d){var e=Math.abs(c)>Math.abs(b),k=a.j?a.j.getSupportedSwipeDirection():[0,0];b*=k[0];c*=k[1];return(e?c:b)?a.ha&&(e?0>c:0>b)?!1:d?e?Math.abs(c)>=a.oa:Math.abs(b)>=a.ia:!0:!1}
function Z(a,b,c,d,e){Math.abs(c)>Math.abs(b)?0<c?(a.j.setDirection("toptobottom"),e()):(a.j.setDirection("bottomtotop"),d()):0<b?(a.j.setDirection("lefttoright"),e()):(a.j.setDirection("righttoleft"),d())}n.Object.defineProperties(N.prototype,{frameCount:{configurable:!0,enumerable:!0,get:function(){return this.h}},currentIndex:{configurable:!0,enumerable:!0,get:function(){return 0<this.h?this.g+1:void 0}}});n.Object.defineProperties(N,{observedAttributes:{configurable:!0,enumerable:!0,get:function(){return ia}}});
customElements.define("gwd-transitiongallery",N);}).call(this);
