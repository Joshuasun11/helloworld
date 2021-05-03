(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var n=this||self,ca="closure_uid_"+(1E9*Math.random()>>>0),da=0;function p(a,b){function c(){}c.prototype=b.prototype;a.H=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.G=function(d,e,f){for(var g=Array(arguments.length-2),k=2;k<arguments.length;k++)g[k-2]=arguments[k];return b.prototype[e].apply(d,g)}};function q(a,b){return a.a?a.f.slice(0,a.a.index)+b+a.f.slice(a.a.index):a.f+b}function ea(a,b){return a.c&&a.b||a.g?1==b?a.c?a.b:q(a,"&dct=1"):2==b?q(a,"&ri=2"):q(a,"&ri=16"):a.f}var fa=class{constructor({url:a}){this.f=a;const b=/[?&]dsh=1(&|$)/.test(a);this.c=!b&&/[?&]ae=1(&|$)/.test(a);this.g=!b&&/[?&]ae=2(&|$)/.test(a);if((this.a=/[?&]adurl=([^&]*)/.exec(a))&&this.a[1]){let c;try{c=decodeURIComponent(this.a[1])}catch(d){c=null}this.b=c}}};function ha(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]};var t=class{constructor(a,b){this.a=b===ia?a:""}};t.prototype.c=!0;t.prototype.b=function(){return this.a.toString()};var ka=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,ia={};var u;a:{var la=n.navigator;if(la){var ma=la.userAgent;if(ma){u=ma;break a}}u=""};function na(a){let b=!1,c;return function(){b||(c=a(),b=!0);return c}};function v(a,b){b instanceof t||b instanceof t||(b="object"==typeof b&&b.c?b.b():String(b),ka.test(b)||(b="about:invalid#zClosurez"),b=new t(b,ia));a.href=b instanceof t&&b.constructor===t?b.a:"type_error:SafeUrl"};function oa(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)};function pa(){return-1!=u.indexOf("iPhone")&&-1==u.indexOf("iPod")&&-1==u.indexOf("iPad")};function qa(a){qa[" "](a);return a}qa[" "]=function(){};var ra=pa(),sa=-1!=u.indexOf("iPad");var ta=pa()||-1!=u.indexOf("iPod"),ua=-1!=u.indexOf("iPad");var va={},wa=null;function xa(a){if(a.c){if(a.f){var b=a.a;for(d in b)if(Object.prototype.hasOwnProperty.call(b,d)){var c=b[d].a;c&&c.i()}}}else{a.b.length=0;var d=w(a);d.sort();for(b=0;b<d.length;b++){let e=a.a[d[b]];(c=e.a)&&c.i();a.b.push([e.key,e.value])}a.c=!0}return a.b}function w(a){a=a.a;var b=[],c;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.push(c);return b}function ya(a,b){return a.f?(b.a||(b.a=new a.f(b.value),a.isFrozen()&&null(b.a)),b.a):b.value}
function za(a,b){var c=w(a);c.sort();for(var d=0;d<c.length;d++){let e=a.a[c[d]];b.call(void 0,ya(a,e),e.key,a)}}
class Aa{constructor(a,b){this.b=a;this.f=b;this.a={};this.c=!0;if(0<this.b.length){for(a=0;a<this.b.length;a++){b=this.b[a];var c=b[0];this.a[c.toString()]=new Ba(c,b[1])}this.c=!0}}isFrozen(){return!1}i(){return xa(this)}D(){return xa(this)}entries(){var a=[],b=w(this);b.sort();for(var c=0;c<b.length;c++){let d=this.a[b[c]];a.push([d.key,ya(this,d)])}return new Ca(a)}keys(){var a=[],b=w(this);b.sort();for(var c=0;c<b.length;c++)a.push(this.a[b[c]].key);return new Ca(a)}values(){var a=[],b=w(this);
b.sort();for(var c=0;c<b.length;c++)a.push(ya(this,this.a[b[c]]));return new Ca(a)}set(a,b){var c=new Ba(a);this.f?(c.a=b,c.value=b.D()):c.value=b;this.a[a.toString()]=c;this.c=!1;return this}get(a){if(a=this.a[a.toString()])return ya(this,a)}has(a){return a.toString()in this.a}}class Ba{constructor(a,b){this.key=a;this.value=b;this.a=void 0}}class Ca{constructor(a){this.a=0;this.b=a}next(){return this.a<this.b.length?{done:!1,value:this.b[this.a++]}:{done:!0,value:void 0}}}
"undefined"!=typeof Symbol&&"undefined"!=typeof Symbol.iterator&&(Ca.prototype[Symbol.iterator]=function(){return this});function x(){}var Da="function"==typeof Uint8Array;function y(a,b,c){a.a=null;b||(b=[]);a.o=void 0;a.f=-1;a.b=b;a:{if(b=a.b.length){--b;var d=a.b[b];if(!(null===d||"object"!=typeof d||Array.isArray(d)||Da&&d instanceof Uint8Array)){a.g=b-a.f;a.c=d;break a}}a.g=Number.MAX_VALUE}a.m={};if(c)for(b=0;b<c.length;b++)d=c[b],d<a.g?(d+=a.f,a.b[d]=a.b[d]||z):(Ea(a),a.c[d]=a.c[d]||z)}var z=[];function Ea(a){var b=a.g+a.f;a.b[b]||(a.c=a.b[b]={})}
function A(a,b){if(b<a.g){b+=a.f;var c=a.b[b];return c!==z?c:a.b[b]=[]}if(a.c)return c=a.c[b],c===z?a.c[b]=[]:c}function B(a,b,c){a=A(a,b);return null==a?c:a}function F(a,b){return B(a,b,"")}function G(a,b){a=A(a,b);a=null==a?a:!!a;return null==a?!1:a}function H(a,b,c){a.a||(a.a={});if(b in a.a)return a.a[b];var d=A(a,b);d||(d=[],I(a,b,d));c=new Aa(d,c);return a.a[b]=c}function I(a,b,c){b<a.g?a.b[b+a.f]=c:(Ea(a),a.c[b]=c);return a}
function J(a,b,c){a.a||(a.a={});if(!a.a[c]){var d=A(a,c);d&&(a.a[c]=new b(d))}return a.a[c]}function Fa(a){var b=Ga;a.a||(a.a={});if(!a.a[7]){let e=A(a,7);for(var c=[],d=0;d<e.length;d++)c[d]=new b(e[d]);a.a[7]=c}b=a.a[7];b==z&&(b=a.a[7]=[]);return b}function Ha(a){if(a.a)for(var b in a.a){var c=a.a[b];if(Array.isArray(c))for(var d=0;d<c.length;d++)c[d]&&c[d].i();else c&&c.i()}}x.prototype.i=function(){Ha(this);return this.b};x.prototype.D=function(){Ha(this);return this.b};
x.prototype.j=Da?function(){var a=Uint8Array.prototype.toJSON;Uint8Array.prototype.toJSON=function(){var b;void 0===b&&(b=0);if(!wa){wa={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));va[e]=f;for(var g=0;g<f.length;g++){var k=f[g];void 0===wa[k]&&(wa[k]=g)}}}b=va[b];c=[];for(d=0;d<this.length;d+=3){var h=this[d],l=(e=d+1<this.length)?this[d+1]:0;k=(f=d+2<this.length)?this[d+2]:0;g=h>>
2;h=(h&3)<<4|l>>4;l=(l&15)<<2|k>>6;k&=63;f||(k=64,e||(l=64));c.push(b[g],b[h],b[l]||"",b[k]||"")}return c.join("")};try{return JSON.stringify(this.b&&this.i(),Ia)}finally{Uint8Array.prototype.toJSON=a}}:function(){return JSON.stringify(this.b&&this.i(),Ia)};function Ia(a,b){return"number"!==typeof b||!isNaN(b)&&Infinity!==b&&-Infinity!==b?b:String(b)}x.prototype.toString=function(){return this.i().toString()};
function Ma(a){if(Array.isArray(a)){for(var b=Array(a.length),c=0;c<a.length;c++){var d=a[c];null!=d&&(b[c]="object"==typeof d?Ma(d):d)}return b}if(Da&&a instanceof Uint8Array)return new Uint8Array(a);b={};for(c in a)d=a[c],null!=d&&(b[c]="object"==typeof d?Ma(d):d);return b};function Na(a){y(this,a,null)}p(Na,x);function Oa(a){y(this,a,Pa)}p(Oa,x);function Ga(a){y(this,a,null)}p(Ga,x);function K(a){y(this,a,null)}p(K,x);function Qa(a){y(this,a,null)}p(Qa,x);var Pa=[6,7];Ga.prototype.l=function(){return F(this,3)};Ga.prototype.C=function(a){I(this,5,a)};K.prototype.l=function(){return F(this,1)};K.prototype.C=function(a){I(this,2,a)};function Ra(a){y(this,a,Sa)}p(Ra,x);var Sa=[17];class Ta{constructor(a,b){this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta={}}};var Ua={capture:!0},Va={passive:!0},Wa=na(function(){let a=!1;try{const b=Object.defineProperty({},"passive",{get:function(){a=!0}});n.addEventListener("test",null,b)}catch(b){}return a});function Xa(a){return a?a.passive&&Wa()?a:a.capture||!1:!1}function M(a,b,c,d){a.addEventListener&&a.addEventListener(b,c,Xa(d))}function Ya(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,Xa(void 0))};var Za=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function $a(a){var b=a.indexOf("#");0>b&&(b=a.length);var c=a.indexOf("?");if(0>c||c>b){c=b;var d=""}else d=a.substring(c+1,b);return[a.substr(0,c),d,a.substr(b)]}function ab(a,b){return b?a?a+"&"+b:b:a}function bb(a,b){if(!b)return a;a=$a(a);a[1]=ab(a[1],b);return a[0]+(a[1]?"?"+a[1]:"")+a[2]}
function cb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)cb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}function db(a){var b=[],c;for(c in a)cb(c,a[c],b);return b.join("&")}function eb(a,b){a=$a(a);var c=a[1],d=[];c&&c.split("&").forEach(function(e){var f=e.indexOf("=");b.hasOwnProperty(0<=f?e.substr(0,f):e)||d.push(e)});a[1]=ab(d.join("&"),db(b));return a[0]+(a[1]?"?"+a[1]:"")+a[2]};function fb(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{qa(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}function gb(a,b){if(a)for(const c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)}var ib=a=>{a.preventDefault?a.preventDefault():a.returnValue=!1};let jb=[];const kb=()=>{const a=jb;jb=[];for(const b of a)try{b()}catch(c){}};
var lb=a=>{var b=N;"complete"===b.readyState||"interactive"===b.readyState?(jb.push(a),1==jb.length&&(window.Promise?Promise.resolve().then(kb):window.setImmediate?setImmediate(kb):setTimeout(kb,0))):b.addEventListener("DOMContentLoaded",a)};function P(a,b,c=null){nb(a,b,c)}function nb(a,b,c){a.google_image_requests||(a.google_image_requests=[]);const d=a.document.createElement("img");if(c){const e=f=>{c&&c(f);Ya(d,"load",e);Ya(d,"error",e)};M(d,"load",e);M(d,"error",e)}d.src=b;a.google_image_requests.push(d)};let ob=0;function pb(a,b=null){return b&&b.getAttribute("data-jc")===String(a)?b:document.querySelector(`[${"data-jc"}="${a}"]`)}
function qb(a){if(!(.01<Math.random())){var b=(b=pb(a,document.currentScript))&&b.getAttribute("data-jc-version")||"unknown";a=`https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=jca&jc=${a}&version=${b}&sample=${.01}`;b=window;var c;if(c=b.navigator)c=b.navigator.userAgent,c=/Chrome/.test(c)&&!/Edge/.test(c)?!0:!1;c&&b.navigator.sendBeacon?b.navigator.sendBeacon(a):P(b,a)}};var N=document,Q=window;var rb={};function sb(){if(rb!==rb)throw Error("Bad secret");};function tb(){var a="undefined"!==typeof window?window.trustedTypes:void 0;return null!==a&&void 0!==a?a:null};var ub,vb=class{};class wb extends vb{constructor(){var a=null!==xb&&void 0!==xb?xb:"";super();sb();this.a=a}toString(){return this.a.toString()}}var xb=null===(ub=tb())||void 0===ub?void 0:ub.emptyHTML;new wb;var yb,zb=class{};class Ab extends zb{constructor(){var a=null!==Bb&&void 0!==Bb?Bb:"";super();sb();this.a=a}toString(){return this.a.toString()}}var Bb=null===(yb=tb())||void 0===yb?void 0:yb.emptyScript;new Ab;var Gb=class{};class Hb extends Gb{constructor(a){super();sb();this.a=a}toString(){return this.a}};new Hb("about:blank");var Ib=new Hb("about:invalid#zTSz");const Jb="DATA HTTP HTTPS MAILTO FTP RELATIVE".split(" ");function Kb(a,b=Jb){var c;var d=a.substring(0,14).indexOf(":");d=null!==(c=Lb[0>d?"":a.substr(0,d).toLowerCase()])&&void 0!==c?c:Mb;if(b.includes(d.scheme)&&d.h(a))return new Hb(a)}function Nb(a,b=Jb){return Kb(a,b)||Ib}
const Mb={scheme:"RELATIVE",h:a=>/^[^:/?#]*(?:[/?#]|$)/i.test(a)},Lb={tel:{scheme:"TEL",h:R("tel:")},callto:{scheme:"CALLTO",h:a=>/^callto:\+?\d*$/i.test(a)},ssh:{scheme:"SSH",h:R("ssh://")},rtsp:{scheme:"RTSP",h:R("rtsp://")},data:{scheme:"DATA",h:a=>{{const b=a.match(/^data:(.*);base64,[a-z0-9+\/]+=*$/i);if(a=2===(null===b||void 0===b?void 0:b.length))a=b[1].match(/^([^;]+)(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i),a=2===(null===a||void 0===a?void 0:a.length)&&(/^image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)$/i.test(a[1])||
/^video\/(?:mpeg|mp4|ogg|webm|x-matroska)$/i.test(a[1])||/^audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)$/i.test(a[1]))}return a}},http:{scheme:"HTTP",h:R("http:")},https:{scheme:"HTTPS",h:R("https:")},ftp:{scheme:"FTP",h:R("ftp:")},mailto:{scheme:"MAILTO",h:R("mailto:")},intent:{scheme:"INTENT",h:R("intent:")},market:{scheme:"MARKET",h:R("market:")},itms:{scheme:"ITMS",h:R("itms:")},"itms-appss":{scheme:"ITMS_APPSS",h:R("itms-appss:")},"itms-services":{scheme:"ITMS_SERVICES",
h:R("itms-services:")}};function R(a){return b=>b.substr(0,a.length).toLowerCase()===a};const Ob="HTTP HTTPS MAILTO FTP RELATIVE MARKET ITMS INTENT ITMS_APPSS".split(" ");function S(a,b){if(a instanceof t)return a;const c=Nb(a,Ob);c===Ib&&b(a);if(c instanceof Hb)a=c.a;else throw Error("wrong type");return new t(a,ia)}var T=a=>{var b=`${"http:"===Q.location.protocol?"http:":"https:"}//${"pagead2.googlesyndication.com"}/pagead/gen_204`;return c=>{c=db({id:"unsafeurl",ctx:a,url:c});c=bb(b,c);navigator.sendBeacon&&navigator.sendBeacon(c,"")}};var Pb=!!window.google_async_iframe_id;let U=Pb&&window.parent||window;var Qb=a=>{var b=N;try{return b.querySelectorAll("*["+a+"]")}catch(c){return[]}};const Rb=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;var Sb=class{constructor(a,b){this.a=a;this.b=b}},Tb=class{constructor(a,b){this.url=a;this.s=!!b;this.depth=null}};function Ub(a,b){const c={};c[a]=b;return[c]}function Vb(a,b,c,d,e){const f=[];gb(a,function(g,k){(g=Wb(g,b,c,d,e))&&f.push(k+"="+g)});return f.join(b)}
function Wb(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){const f=[];for(let g=0;g<a.length;g++)f.push(Wb(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(Vb(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))}function Xb(a){let b=1;for(const c in a.b)b=c.length>b?c.length:b;return 3997-b-a.c.length-1}
function Yb(a,b,c){b=b+"//pagead2.googlesyndication.com"+c;let d=Xb(a)-c.length;if(0>d)return"";a.a.sort(function(f,g){return f-g});c=null;let e="";for(let f=0;f<a.a.length;f++){const g=a.a[f],k=a.b[g];for(let h=0;h<k.length;h++){if(!d){c=null==c?g:c;break}let l=Vb(k[h],a.c,",$");if(l){l=e+l;if(d>=l.length){d-=l.length;b+=l;e=a.c;break}c=null==c?g:c}}}a="";null!=c&&(a=e+"trn="+c);return b+a}class Zb{constructor(){this.c="&";this.b={};this.f=0;this.a=[]}};function $b(a,b,c,d,e,f){if((d?a.a:Math.random())<(e||.01))try{let g;c instanceof Zb?g=c:(g=new Zb,gb(c,(h,l)=>{var m=g,r=m.f++;h=Ub(l,h);m.a.push(r);m.b[r]=h}));const k=Yb(g,a.b,"/pagead/gen_204?id="+b+"&");k&&("undefined"!==typeof f?P(n,k,f):P(n,k))}catch(g){}}class ac{constructor(){this.b="http:"===Q.location.protocol?"http:":"https:";this.a=Math.random()}};let bc=null;var cc=()=>{const a=n.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):Date.now()},dc=()=>{const a=n.performance;return a&&a.now?a.now():null};class ec{constructor(a,b){var c=dc()||cc();this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.slotId=void 0}};const V=n.performance,fc=!!(V&&V.mark&&V.measure&&V.clearMarks),W=na(()=>{var a;if(a=fc){var b;if(null===bc){bc="";try{a="";try{a=n.top.location.hash}catch(c){a=n.location.hash}a&&(bc=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=bc;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});function gc(a){a&&V&&W()&&(V.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),V.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))}
class hc{constructor(){var a=X;this.b=[];this.c=a||n;let b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.b=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.a=W()||(null!=b?b:1>Math.random())}start(a,b){if(!this.a)return null;a=new ec(a,b);b=`goog_${a.label}_${a.uniqueId}_start`;V&&W()&&V.mark(b);return a}};function ic(a){let b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;try{-1==a.indexOf(b)&&(a=b+"\n"+a);let c;for(;a!=c;)c=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(c){}}return b}
function jc(a,b,c){let d,e;try{if(a.a&&a.a.a){e=a.a.start(b.toString(),3);d=c();var f=a.a;c=e;if(f.a&&"number"===typeof c.value){c.duration=(dc()||cc())-c.value;var g=`goog_${c.label}_${c.uniqueId}_end`;V&&W()&&V.mark(g);!f.a||2048<f.b.length||f.b.push(c)}}else d=c()}catch(k){f=!0;try{gc(e),f=a.j(b,new Ta(k,{message:ic(k)}),void 0,void 0)}catch(h){a.g(217,h)}if(!f)throw k;}return d}function kc(a,b){var c=lc;return(...d)=>jc(c,a,()=>b.apply(void 0,d))}
class mc{constructor(a=null){this.c=Y;this.b=null;this.j=this.g;this.a=a;this.f=!1}pinger(){return this.c}g(a,b,c,d,e){e=e||"jserror";let f;try{const C=new Zb;var g=C;g.a.push(1);g.b[1]=Ub("context",a);b.error&&b.meta&&b.id||(b=new Ta(b,{message:ic(b)}));if(b.msg){g=C;var k=b.msg.substring(0,512);g.a.push(2);g.b[2]=Ub("msg",k)}var h=b.meta||{};b=h;if(this.b)try{this.b(b)}catch(O){}if(d)try{d(b)}catch(O){}d=C;h=[h];d.a.push(3);d.b[3]=h;{d=n;h=[];b=null;do{var l=d;if(fb(l)){var m=l.location.href;b=
l.document&&l.document.referrer||null}else m=b,b=null;h.push(new Tb(m||""));try{d=l.parent}catch(aa){d=null}}while(d&&l!=d);for(let aa=0,Cb=h.length-1;aa<=Cb;++aa)h[aa].depth=Cb-aa;l=n;if(l.location&&l.location.ancestorOrigins&&l.location.ancestorOrigins.length==h.length-1)for(m=1;m<h.length;++m){var r=h[m];r.url||(r.url=l.location.ancestorOrigins[m-1]||"",r.s=!0)}var D=h;let O=new Tb(n.location.href,!1);l=null;const Ja=D.length-1;for(r=Ja;0<=r;--r){var E=D[r];!l&&Rb.test(E.url)&&(l=E);if(E.url&&
!E.s){O=E;break}}E=null;const Ac=D.length&&D[Ja].url;0!=O.depth&&Ac&&(E=D[Ja]);f=new Sb(O,E)}if(f.b){D=C;var L=f.b.url||"";D.a.push(4);D.b[4]=Ub("top",L)}var Ka={url:f.a.url||""};if(f.a.url){var La=f.a.url.match(Za),ba=La[1],Db=La[3],Eb=La[4];L="";ba&&(L+=ba+":");Db&&(L+="//",L+=Db,Eb&&(L+=":"+Eb));var Fb=L}else Fb="";ba=C;Ka=[Ka,{url:Fb}];ba.a.push(5);ba.b[5]=Ka;$b(this.c,e,C,this.f,c)}catch(C){try{$b(this.c,e,{context:"ecmserr",rctx:a,msg:ic(C),url:f&&f.a.url},this.f,c)}catch(O){}}return!0}};let Y,lc;if(Pb&&!fb(U)){let a="."+N.domain;try{for(;2<a.split(".").length&&!fb(U);)N.domain=a=a.substr(a.indexOf(".")+1),U=window.parent}catch(b){}fb(U)||(U=window)}const X=U,Z=new hc;var nc=()=>{X.google_measure_js_timing||(Z.a=!1,Z.b!=Z.c.google_js_reporting_queue&&(W()&&Array.prototype.forEach.call(Z.b,gc,void 0),Z.b.length=0))};Y=new ac;"number"!==typeof X.google_srt&&(X.google_srt=Math.random());var oc=Y,pc=X.google_srt;0<=pc&&1>=pc&&(oc.a=pc);lc=new mc(Z);
lc.b=a=>{var b=Q.jerExpIds;if(Array.isArray(b)&&0!==b.length){var c=a.eid;if(c){c=[...c.split(","),...b];b={};for(var d=0,e=0;e<c.length;){var f=c[e++];var g=f;var k=typeof g;g="object"==k&&null!=g||"function"==k?"o"+(Object.prototype.hasOwnProperty.call(g,ca)&&g[ca]||(g[ca]=++da)):(typeof g).charAt(0)+g;Object.prototype.hasOwnProperty.call(b,g)||(b[g]=!0,c[d++]=f)}c.length=d;a.eid=c.join(",")}else a.eid=b.join(",")}0!==ob&&(a.jc=String(ob));(c=Q.jerUserAgent)&&(a.useragent=c)};lc.f=!0;
"complete"==X.document.readyState?nc():Z.a&&M(X,"load",()=>{nc()});var qc=(a,b)=>kc(a,b);var rc=(a,b)=>{b=F(a,2)||b;if(!b)return"";if(G(a,13))return b;const c=/[?&]adurl=([^&]+)/.exec(b);if(!c)return b;const d=[b.slice(0,c.index+1)];za(H(a,4,null),(e,f)=>{d.push(encodeURIComponent(f)+"="+encodeURIComponent(e)+"&")});d.push(b.slice(c.index+1));return d.join("")},sc=(a,b=[])=>{b=0<b.length?b:Qb("data-asoch-targets");a=H(a,1,Oa);const c=[];for(let k=0;k<b.length;++k){var d=b[k].getAttribute("data-asoch-targets"),e=d.split(","),f=!0;for(let h of e)if(!a.has(h)){f=!1;break}if(f){f=a.get(e[0]);
for(d=1;d<e.length;++d){{var g=a.get(e[d]);f=(new f.constructor(Ma(f.i()))).i();g=g.i();const h=Math.max(f.length,g.length);for(let l=0;l<h;++l)null==f[l]&&(f[l]=g[l]);f=new Oa(f)}}e=H(f,4,null);null!=A(f,5)&&e.set("nb",B(f,5,0).toString());c.push({element:b[k],data:f})}else $b(Y,"gdn-asoch",{type:1,data:d},!0,void 0,void 0)}return c},tc=a=>{for(const b of a)if(a=b.data,"A"==b.element.tagName&&!G(a,1)){const c=b.element,d=rc(a,c.href);0<d.length&&(v(c,S(d,T(609))),c.target||(c.target=null!=A(a,11)?
F(a,11):"_top"))}},uc=a=>{for(const b of Fa(a))if(2===B(b,1,0)||1===B(b,1,0))return!0;return!1};function vc(a){y(this,a,wc)}p(vc,x);var wc=[6];const xc=["platform","platformVersion","architecture","model","uaFullVersion"];var yc=()=>{var a=window;return a.navigator&&a.navigator.userAgentData&&"function"===typeof a.navigator.userAgentData.getHighEntropyValues?a.navigator.userAgentData.getHighEntropyValues(xc).then(b=>{var c=new vc;c=I(c,1,b.platform);c=I(c,2,b.platformVersion);c=I(c,3,b.architecture);c=I(c,4,b.model);return I(c,5,b.uaFullVersion)}):null};function zc(a){for(const b of a)if("A"==b.element.tagName){a=b.element;const c=b.data;null!=A(c,2)||I(c,2,a.href)}}function Bc(a){const b=[],c=[];for(var d of a)(a=d.data)&&null!=A(a,12)&&(c.push(J(a,K,12)),b.push(J(a,K,12).l()));d=(e,f)=>{if(f)for(const g of c)g.C(f[g.l()]||!1)};a=window.oneAfmaInstance;for(const e of b)a.canOpenAndroidApp(e,d)}function Cc(a){const b=window.oneAfmaInstance;if(b)for(const c of a)if((a=c.data)&&null!=A(a,8)&&(a=F(J(a,Qa,8),4))){b.fetchAppStoreOverlay(a);break}}
function Dc(a,b){return ha(a,c=>c.element===b)}function Ec(a){Q.fetch?Q.fetch(a,{method:"GET",keepalive:!0,mode:"no-cors"}).then(b=>{b.ok||P(Q,a)}):P(Q,a)}function Fc(a){var b=oa();b=null!=b?"="+encodeURIComponent(String(b)):"";b=bb("https://pagead2.googlesyndication.com/pagead/gen_204","zx"+b);Ec(eb(b,a))}
function Gc(a,b=null){if(null!==b){const c=new fa({url:a});if(c.c&&c.b||c.g)return b(q(c,"&act=1&ri=1")),ea(c,1)}else return b=new fa({url:a}),a=b.c&&b.b||b.g?navigator.sendBeacon?navigator.sendBeacon(q(b,"&act=1&ri=1"),"")?ea(b,1):ea(b,2):ea(b,0):a;return a}function Hc(a){lb(qc(556,()=>{new Ic(a||{})}))}
function Jc(a,b,c,d){if(!G(d,13)){var e=c.href;var f=/[?&]adurl=([^&]+)/.exec(e);e=f?[e.slice(0,f.index),e.slice(f.index)]:[e,""];for(v(c,S(e[0],T(557)));!c.id;)if(f="asoch-id-"+oa(),!N.getElementById(f)){c.id=f;break}f=c.id;"function"===typeof window.xy&&window.xy(b,c,N.body);"function"===typeof window.mb&&window.mb(c);"function"===typeof window.bgz&&window.bgz(f);"function"===typeof window.ja&&window.ja(f,d?B(d,5,0):0);a.f&&"function"===typeof window.ss&&(a.A?window.ss(f,1,a.f):window.ss(a.f,1));
0<e.length&&(a=0<a.o.length?c.href+"&uach="+encodeURIComponent(a.o)+e[1]:c.href+e[1],v(c,S(a,T(557))))}}async function Kc(a,b,c,d){let e="";window.oneAfmaInstance&&(e=await window.oneAfmaInstance.appendClickSignalsAsync(c.href)||"");Lc(a,b,c,d,e)}
function Lc(a,b,c,d,e){const f=G(a.a,2),g=f&&Date.now()-a.v>a.F;if(window.oneAfmaInstance){ib(b);const k=window.oneAfmaInstance,h=a.b&&G(a.b,14)||!1;a.b&&G(a.b,18);(()=>{let l=k.logScionEventAndAddParam(e);if(!a.g&&d&&null!=A(d,12)){const r=J(d,K,12).l();if(G(J(d,K,12),2)){Fc({id:"gmob-apps",event:"och-open-android-app-before-click",appId:r,isDeepLinkPath:!1});k.click(l);k.openAndroidApp(r);setTimeout(()=>{Fc({id:"gmob-apps",event:"och-open-android-app",appId:r,isDeepLinkPath:!1})},1E3);return}Fc({id:"gmob-apps",
event:"och-open-android-app-validated-false",appId:r,isDeepLinkPath:!1})}if(!d||null==A(d,8)||!Mc(a,l,d,k)){var m=uc(d);m=h&&m&&!G(d,14);f&&g&&!m&&(l=Gc(l,k.click));l.startsWith("intent:")?(k.openIntentOrNativeApp(l),Fc({id:"gmob-apps",event:"och-open-intent-or-native-app",appId:null!=A(d,8)&&F(J(d,Qa,8),4)||"",isIos:a.g,isDeepLinkPath:!1})):G(a.a,13)||a.b&&G(a.b,13)?k.openChromeCustomTab(l):k.openSystemBrowser(l,{useFirstPackage:!0,useRunningProcess:!0})}})()}else g&&(b=Gc(c.href),b!==c.href&&v(c,
S(b,T(599))));g&&(a.v=Date.now());qb(a.u)}
function Mc(a,b,c,d){const e=J(c,Qa,8);let f=F(e,2);za(H(c,10,null),(g,k)=>{{var h=f;k=encodeURIComponent(k);const l=encodeURIComponent(g);g=new RegExp("[?&]"+k+"=([^&]+)");const m=g.exec(h);console.log(m);k=k+"="+l;f=m?h.replace(g,m[0].charAt(0)+k):h.replace("?","?"+k+"&")}});Fc({id:"gmob-apps",event:"och-try-u2-redirect",appId:F(e,4)||"",isIos:a.g,isDeepLinkPath:!1});return d.redirectForStoreU2({clickUrl:b,trackingUrl:F(e,3),finalUrl:f,pingFunc:d.click,openFunc:a.B?d.openStoreOverlay:d.openIntentOrNativeApp})}
var Ic=class{constructor(a){this.g=ta||ra||ua||sa;var b=Qb("data-asoch-meta");if(1!==b.length)$b(Y,"gdn-asoch",{type:2,data:b.length},!0,void 0,void 0);else{this.u=70;this.a=new Ra(JSON.parse(b[0].getAttribute("data-asoch-meta"))||[]);this.b=a["extra-meta"]?new Ra(JSON.parse(a["extra-meta"])):null;this.B=this.g&&"true"===a["ios-store-overlay"];this.o="";if(G(this.a,15)||this.b&&G(this.b,15))b=yc(),null!=b&&b.then(c=>{this.o=c.j()});this.c=sc(this.a);this.F=Number(a["async-click-timeout"])||300;this.v=
-Infinity;this.f=F(this.a,5)||"";this.A=G(this.a,11);this.b&&(this.A=G(this.b,11));this.m=this.j=null;G(this.a,3)||(tc(this.c),I(this.a,3,!0));zc(this.c);!this.g&&window.oneAfmaInstance&&Bc(this.c);window.oneAfmaInstance&&this.B&&"true"===a["prefetch-ios-store-overlay"]&&Cc(this.c);M(N,"click",qc(557,c=>{a:if(!c.defaultPrevented||this.j===c){for(var d,e,f=c.target;(!d||!e)&&f;){e||"A"!=f.tagName||(e=f);var g=f.hasAttribute("data-asoch-targets");!d&&("A"==f.tagName||g)&&(g=g&&"true"===f.getAttribute("data-asoch-is-dynamic")?
sc(this.a,[f]):this.c,g=Dc(g,f))&&(d=g.data);f=f.parentElement}if(f=d&&!G(d,1)){if(c.defaultPrevented){var k=e;if(this.j===c&&this.m){var h=new Na(this.m);e=F(d,9);f="";switch(B(h,4,1)){case 2:if(B(h,2,0))f="blocked_fast_click";else if(F(h,1)||F(h,7))f="blocked_border_click";break;case 3:h=N,h=h.getElementById?h.getElementById("common_15click_anchor"):null,"function"===typeof window.copfcChm&&h&&(d=new d.constructor(Ma(d.i())),I(d,5,12),H(d,4,null).set("nb",(12).toString()),(f=Dc(this.c,h))?f.data=
d:this.c.push({element:h,data:d}),k&&(Jc(this,c,k,d),I(d,2,k.href)),window.copfcChm(c,rc(d,h.href))),f="onepointfiveclick_first_click"}e&&f&&Ec(e+"&label="+f);qb(this.u)}break a}g=d;for(h of A(g,6))Ec(h)}if(e&&f){d=f?d:null;(h=Dc(this.c,e))?h=h.data:(h=new Oa,I(h,2,e.href),I(h,11,e.target||"_top"),this.c.push({element:e,data:h}));h=rc(d||h,F(h,2));0<h.length&&(v(e,S(h,T(557))),e.target||(e.target=d&&null!=A(d,11)?F(d,11):"_top"));Jc(this,c,e,d);for(k of A(this.a,17)){{let l;h=k;f=N.body;g={};"function"===
typeof window.CustomEvent?l=new CustomEvent(h,g):(l=document.createEvent("CustomEvent"),l.initCustomEvent(h,!!g.bubbles,!!g.cancelable,g.detail));f.dispatchEvent(l)}}G(this.a,16)?Kc(this,c,e,d):(k="",window.oneAfmaInstance&&(k=window.oneAfmaInstance.appendClickSignals(e.href)),Lc(this,c,e,d,k))}}}),Ua);this.f&&"function"===typeof window.ss&&M(N.body,"mouseover",qc(626,()=>{window.ss(this.f,0)}),Va);a=window;a.googqscp&&"function"===typeof a.googqscp.registerCallback&&a.googqscp.registerCallback((c,
d)=>{this.j=c;this.m=d})}}};{var Nc=qc(555,b=>Hc(b));ob=70;const a=pb(70,document.currentScript);if(null==a)throw Error("JSC not found 70");var Oc;{const b={},c=a.attributes;for(let d=c.length-1;0<=d;d--){const e=c[d].name;0===e.indexOf("data-jcp-")&&(b[e.substring(9)]=c[d].value)}Oc=b}Nc(Oc)};}).call(this);
