/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/color-scheme@1.0.1/lib/color-scheme.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var t,e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},r={exports:{}};t=r,function(){var e,r=[].slice;e=function(){var t,e,n,o,a,i;for(a=Array.isArray||function(t){return"[object Array]"==={}.toString.call(t)},s.SCHEMES={},e=0,n=(o="mono monochromatic contrast triade tetrade analogic".split(/\s+/)).length;e<n;e++)i=o[e],s.SCHEMES[i]=!0;function s(){var t,e;for(t=[],e=1;e<=4;e++)t.push(new s.mutablecolor(60));this.col=t,this._scheme="mono",this._distance=.5,this._web_safe=!1,this._add_complement=!1}return s.PRESETS={default:[-1,-1,1,-.7,.25,1,.5,1],pastel:[.5,-.9,.5,.5,.1,.9,.75,.75],soft:[.3,-.8,.3,.5,.1,.9,.5,.75],light:[.25,1,.5,.75,.1,1,.5,1],hard:[1,-1,1,-.6,.1,1,.6,1],pale:[.1,-.85,.1,.5,.1,1,.1,.75]},s.COLOR_WHEEL={0:[255,0,0,100],15:[255,51,0,100],30:[255,102,0,100],45:[255,128,0,100],60:[255,153,0,100],75:[255,178,0,100],90:[255,204,0,100],105:[255,229,0,100],120:[255,255,0,100],135:[204,255,0,100],150:[153,255,0,100],165:[51,255,0,100],180:[0,204,0,80],195:[0,178,102,70],210:[0,153,153,60],225:[0,102,178,70],240:[0,51,204,80],255:[25,25,178,70],270:[51,0,153,60],285:[64,0,153,60],300:[102,0,153,60],315:[153,0,153,60],330:[204,0,153,80],345:[229,0,102,90]},s.prototype.colors=function(){var t,e,r,n,o,a,i,s,u,h;if(u=1,e=this.col[0].get_hue(),(t={mono:function(){},contrast:(h=this,function(){return u=2,h.col[1].set_hue(e),h.col[1].rotate(180)}),triade:function(t){return function(){var r;return u=3,r=60*t._distance,t.col[1].set_hue(e),t.col[1].rotate(180-r),t.col[2].set_hue(e),t.col[2].rotate(180+r)}}(this),tetrade:function(t){return function(){var r;return u=4,r=90*t._distance,t.col[1].set_hue(e),t.col[1].rotate(180),t.col[2].set_hue(e),t.col[2].rotate(180+r),t.col[3].set_hue(e),t.col[3].rotate(r)}}(this),analogic:function(t){return function(){var r;return u=t._add_complement?4:3,r=60*t._distance,t.col[1].set_hue(e),t.col[1].rotate(r),t.col[2].set_hue(e),t.col[2].rotate(360-r),t.col[3].set_hue(e),t.col[3].rotate(180)}}(this)}).monochromatic=t.mono,null==t[this._scheme])throw"Unknown color scheme name: "+this._scheme;for(t[this._scheme](),i=[],r=o=0,s=u-1;0<=s?o<=s:o>=s;r=0<=s?++o:--o)for(n=a=0;a<=3;n=++a)i[4*r+n]=this.col[r].get_hex(this._web_safe,n);return i},s.prototype.colorset=function(){var e,r;for(e=t(this.colors()),r=[];e.length>0;)r.push(e.splice(0,4));return r},s.prototype.from_hue=function(t){if(null==t)throw"from_hue needs an argument";return this.col[0].set_hue(t),this},s.prototype.rgb2ryb=function(){var t,e,n,o,i,s,u,h,l;return null!=(u=1<=arguments.length?r.call(arguments,0):[])[0]&&a(u[0])&&(u=u[0]),s=u[0],e=u[1],t=u[2],s-=h=Math.min(s,e,t),e-=h,t-=h,o=Math.max(s,e,t),s-=l=Math.min(s,e),e-=l,t>0&&e>0&&(t/=2,e/=2),l+=e,t+=e,(i=Math.max(s,l,t))>0&&(s*=n=o/i,l*=n,t*=n),s+=h,l+=h,t+=h,[Math.floor(s),Math.floor(l),Math.floor(t)]},s.prototype.rgb2hsv=function(){var t,e,n,o,i,s,u,h,l;return null!=(h=1<=arguments.length?r.call(arguments,0):[])[0]&&a(h[0])&&(h=h[0]),u=h[0],n=h[1],t=h[2],u/=255,n/=255,t/=255,s=Math.min.apply(Math,[u,n,t]),l=i=Math.max.apply(Math,[u,n,t]),(e=i-s)>0?(o=u===i?(n-t)/e:n===i?2+(t-u)/e:4+(u-n)/e,o*=60,[o%=360,e/i,l]):[0,0,l]},s.prototype.rgbToHsv=function(){var t,e,n,o,i,s,u,h,l,c;if(null!=(h=1<=arguments.length?r.call(arguments,0):[])[0]&&a(h[0])&&(h=h[0]),u=h[0],n=h[1],t=h[2],u/=255,n/=255,t/=255,o=void 0,c=i=Math.max(u,n,t),e=i-(s=Math.min(u,n,t)),l=0===i?0:e/i,i===s)o=0;else{switch(i){case u:o=(n-t)/e+(n<t?6:0);break;case n:o=(t-u)/e+2;break;case t:o=(u-n)/e+4}o/=6}return[o,l,c]},s.prototype.from_hex=function(t){var e,r,n,o,a,i,s,u,h,l,c;if(null==t)throw"from_hex needs an argument";if(!/^([0-9A-F]{2}){3}$/im.test(t))throw"from_hex("+t+") - argument must be in the form of RRGGBB";return h=/(..)(..)(..)/.exec(t).slice(1,4),i=(s=function(){var t,e,r;for(r=[],e=0,t=h.length;e<t;e++)a=h[e],r.push(parseInt(a,16));return r}())[0],r=s[1],e=s[2],i=(u=this.rgb2ryb([i,r,e]))[0],r=u[1],e=u[2],(o=this.rgbToHsv(i,r,e))[0],n=o[0],l=o[1],c=o[2],this.from_hue(360*n),this._set_variant_preset([l,c,l,.7*c,.25*l,1,.5*l,1]),this},s.prototype.add_complement=function(t){if(null==t)throw"add_complement needs an argument";return this._add_complement=t,this},s.prototype.web_safe=function(t){if(null==t)throw"web_safe needs an argument";return this._web_safe=t,this},s.prototype.distance=function(t){if(null==t)throw"distance needs an argument";if(t<0)throw"distance("+t+") - argument must be >= 0";if(t>1)throw"distance("+t+") - argument must be <= 1";return this._distance=t,this},s.prototype.scheme=function(t){if(null==t)return this._scheme;if(null==s.SCHEMES[t])throw"'"+t+"' isn't a valid scheme name";return this._scheme=t,this},s.prototype.variation=function(t){if(null==t)throw"variation needs an argument";if(null==s.PRESETS[t])throw"'$v' isn't a valid variation name";return this._set_variant_preset(s.PRESETS[t]),this},s.prototype._set_variant_preset=function(t){var e,r,n;for(n=[],e=r=0;r<=3;e=++r)n.push(this.col[e].set_variant_preset(t));return n},t=function(e){var r,n,o;if(null==e||"object"!=typeof e)return e;if(e instanceof Date)return new Date(e.getTime());if(e instanceof RegExp)return r="",null!=e.global&&(r+="g"),null!=e.ignoreCase&&(r+="i"),null!=e.multiline&&(r+="m"),null!=e.sticky&&(r+="y"),new RegExp(e.source,r);for(n in o=new e.constructor,e)o[n]=t(e[n]);return o},s.mutablecolor=function(){function t(t){if(null==t)throw"No hue specified";this.saturation=[],this.value=[],this.base_red=0,this.base_green=0,this.base_blue=0,this.base_saturation=0,this.base_value=0,this.set_hue(t),this.set_variant_preset(s.PRESETS.default)}return t.prototype.hue=0,t.prototype.saturation=[],t.prototype.value=[],t.prototype.base_red=0,t.prototype.base_green=0,t.prototype.base_saturation=0,t.prototype.base_value=0,t.prototype.get_hue=function(){return this.hue},t.prototype.set_hue=function(t){var e,r,n,o,a,i,u,h,l,c;for(r in e=function(t,e,r){return t+Math.round((e-t)*r)},this.hue=Math.round(t%360),c=(a=this.hue%15+(this.hue-Math.floor(this.hue)))/15,u=(15+(i=this.hue-Math.floor(a)))%360,360===i&&(i=0),360===u&&(u=0),n=s.COLOR_WHEEL[i],o=s.COLOR_WHEEL[u],h={red:0,green:1,blue:2,value:3})l=h[r],this["base_"+r]=e(n[l],o[l],c);return this.base_saturation=e(100,100,c)/100,this.base_value/=100},t.prototype.rotate=function(t){var e;return e=(this.hue+t)%360,this.set_hue(e)},t.prototype.get_saturation=function(t){var e,r;return(e=(r=this.saturation[t])<0?-r*this.base_saturation:r)>1&&(e=1),e<0&&(e=0),e},t.prototype.get_value=function(t){var e,r;return(e=(r=this.value[t])<0?-r*this.base_value:r)>1&&(e=1),e<0&&(e=0),e},t.prototype.set_variant=function(t,e,r){return this.saturation[t]=e,this.value[t]=r},t.prototype.set_variant_preset=function(t){var e,r,n;for(n=[],e=r=0;r<=3;e=++r)n.push(this.set_variant(e,t[2*e],t[2*e+1]));return n},t.prototype.get_hex=function(t,e){var r,n,o,a,i,s,u,h,l,c,f,p,_,m,d;for(h=Math.max.apply(Math,function(){var t,e,r,o;for(o=[],e=0,t=(r=["red","green","blue"]).length;e<t;e++)n=r[e],o.push(this["base_"+n]);return o}.call(this)),Math.min.apply(Math,function(){var t,e,r,o;for(o=[],e=0,t=(r=["red","green","blue"]).length;e<t;e++)n=r[e],o.push(this["base_"+n]);return o}.call(this)),d=255*(e<0?this.base_value:this.get_value(e)),_=e<0?this.base_saturation:this.get_saturation(e),a=h>0?d/h:0,f=[],u=0,i=(c=["red","green","blue"]).length;u<i;u++)n=c[u],p=Math.min.apply(Math,[255,Math.round(d-(d-this["base_"+n]*a)*_)]),f.push(p);for(t&&(f=function(){var t,e,n;for(n=[],e=0,t=f.length;e<t;e++)r=f[e],n.push(51*Math.round(r/51));return n}()),o="",l=0,s=f.length;l<s;l++)(m=f[l].toString(16)).length<2&&(m="0"+m),o+=m;return o},t}(),s}(),null!==t&&null!=t.exports?t.exports=e:window.ColorScheme=e}.call(e);var n=r.exports;export{n as default};
