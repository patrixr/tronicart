var K=Object.defineProperty;var _=(o,a)=>K(o,"name",{value:a,configurable:!0});function N(o){let a;return(...f)=>(a!==void 0||(a=o(...f)),a)}_(N,"cache");function $(o,a){for(let f=0;f<o;++f)a(f)}_($,"repeat");var Q=N(o=>o.shuffle([o.color(173,193,120),o.color(244,244,249),o.color(222,49,99),o.color(242,232,99)]).slice(0,2)),A=_((o,a)=>(f,v,g=1)=>{let P={treeTrunk:o.random([o.color(169,132,103)]),treeLeaves:o.random(Q(o))},H=o.random(3,7),b=o.random(a.cellSize/4,a.cellSize/2),y=b/a.cellSize;f+=(a.cellSize-b)/2/a.cellSize,v+=(a.cellSize-b)/2/a.cellSize,$(H,h=>{a.cube(f,v,g+h*y,{color:P.treeTrunk,strokes:[!1,!1,!1],size:b,opacity:255})});let O=o.random(5,15);$(O*3,h=>{let e=h/30;a.cube(f+o.random(-e,e),v+o.random(-e,e),g+H*y-y+o.random(0,e*2),{strokes:[!1,!1,!1],color:P.treeLeaves,opacity:o.random(200,255),size:o.random(a.cellSize/10,a.cellSize/1.5)})})},"tree");var X=Object.create,G=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,Z=Object.getOwnPropertyNames,ee=Object.getPrototypeOf,te=Object.prototype.hasOwnProperty,re=_((o,a)=>()=>(a||o((a={exports:{}}).exports,a),a.exports),"J"),oe=_((o,a)=>{for(var f in a)G(o,f,{get:a[f],enumerable:!0})},"K"),D=_((o,a,f,v)=>{if(a&&typeof a=="object"||typeof a=="function")for(let g of Z(a))!te.call(o,g)&&g!==f&&G(o,g,{get:()=>a[g],enumerable:!(v=Y(a,g))||v.enumerable});return o},"I"),ne=_((o,a,f)=>(D(o,a,"default"),f&&D(f,a,"default")),"T"),F=_((o,a,f)=>(f=o!=null?X(ee(o)):{},D(a||!o||!o.__esModule?G(f,"default",{value:o,enumerable:!0}):f,o)),"G"),V=re((o,a)=>{(function(){var f,v=[].slice;f=function(){var g,P,H,b,y,O;for(y=Array.isArray||function(e){return{}.toString.call(e)==="[object Array]"},h.SCHEMES={},b="mono monochromatic contrast triade tetrade analogic".split(/\s+/),P=0,H=b.length;P<H;P++)O=b[P],h.SCHEMES[O]=!0;h.PRESETS={default:[-1,-1,1,-.7,.25,1,.5,1],pastel:[.5,-.9,.5,.5,.1,.9,.75,.75],soft:[.3,-.8,.3,.5,.1,.9,.5,.75],light:[.25,1,.5,.75,.1,1,.5,1],hard:[1,-1,1,-.6,.1,1,.6,1],pale:[.1,-.85,.1,.5,.1,1,.1,.75]},h.COLOR_WHEEL={0:[255,0,0,100],15:[255,51,0,100],30:[255,102,0,100],45:[255,128,0,100],60:[255,153,0,100],75:[255,178,0,100],90:[255,204,0,100],105:[255,229,0,100],120:[255,255,0,100],135:[204,255,0,100],150:[153,255,0,100],165:[51,255,0,100],180:[0,204,0,80],195:[0,178,102,70],210:[0,153,153,60],225:[0,102,178,70],240:[0,51,204,80],255:[25,25,178,70],270:[51,0,153,60],285:[64,0,153,60],300:[102,0,153,60],315:[153,0,153,60],330:[204,0,153,80],345:[229,0,102,90]};function h(){var e,t;for(e=[],t=1;t<=4;t++)e.push(new h.mutablecolor(60));this.col=e,this._scheme="mono",this._distance=.5,this._web_safe=!1,this._add_complement=!1}return _(h,"h"),h.prototype.colors=function(){var e,t,r,n,l,m,c,s,p;if(p=1,t=this.col[0].get_hue(),e={mono:function(i){return function(){}}(this),contrast:function(i){return function(){return p=2,i.col[1].set_hue(t),i.col[1].rotate(180)}}(this),triade:function(i){return function(){var d;return p=3,d=60*i._distance,i.col[1].set_hue(t),i.col[1].rotate(180-d),i.col[2].set_hue(t),i.col[2].rotate(180+d)}}(this),tetrade:function(i){return function(){var d;return p=4,d=90*i._distance,i.col[1].set_hue(t),i.col[1].rotate(180),i.col[2].set_hue(t),i.col[2].rotate(180+d),i.col[3].set_hue(t),i.col[3].rotate(d)}}(this),analogic:function(i){return function(){var d;return p=i._add_complement?4:3,d=60*i._distance,i.col[1].set_hue(t),i.col[1].rotate(d),i.col[2].set_hue(t),i.col[2].rotate(360-d),i.col[3].set_hue(t),i.col[3].rotate(180)}}(this)},e.monochromatic=e.mono,e[this._scheme]!=null)e[this._scheme]();else throw"Unknown color scheme name: "+this._scheme;for(c=[],r=l=0,s=p-1;0<=s?l<=s:l>=s;r=0<=s?++l:--l)for(n=m=0;m<=3;n=++m)c[r*4+n]=this.col[r].get_hex(this._web_safe,n);return c},h.prototype.colorset=function(){var e,t;for(e=g(this.colors()),t=[];e.length>0;)t.push(e.splice(0,4));return t},h.prototype.from_hue=function(e){if(e==null)throw"from_hue needs an argument";return this.col[0].set_hue(e),this},h.prototype.rgb2ryb=function(){var e,t,r,n,l,m,c,s,p;return c=1<=arguments.length?v.call(arguments,0):[],c[0]!=null&&y(c[0])&&(c=c[0]),m=c[0],t=c[1],e=c[2],s=Math.min(m,t,e),m-=s,t-=s,e-=s,n=Math.max(m,t,e),p=Math.min(m,t),m-=p,t-=p,e>0&&t>0&&(e/=2,t/=2),p+=t,e+=t,l=Math.max(m,p,e),l>0&&(r=n/l,m*=r,p*=r,e*=r),m+=s,p+=s,e+=s,[Math.floor(m),Math.floor(p),Math.floor(e)]},h.prototype.rgb2hsv=function(){var e,t,r,n,l,m,c,s,p,i;if(s=1<=arguments.length?v.call(arguments,0):[],s[0]!=null&&y(s[0])&&(s=s[0]),c=s[0],r=s[1],e=s[2],c/=255,r/=255,e/=255,m=Math.min.apply(Math,[c,r,e]),l=Math.max.apply(Math,[c,r,e]),t=l-m,i=l,t>0)p=t/l;else return[0,0,i];return n=c===l?(r-e)/t:r===l?2+(e-c)/t:4+(c-r)/t,n*=60,n%=360,[n,p,i]},h.prototype.rgbToHsv=function(){var e,t,r,n,l,m,c,s,p,i;if(s=1<=arguments.length?v.call(arguments,0):[],s[0]!=null&&y(s[0])&&(s=s[0]),c=s[0],r=s[1],e=s[2],c/=255,r/=255,e/=255,l=Math.max(c,r,e),m=Math.min(c,r,e),n=void 0,p=void 0,i=l,t=l-m,p=l===0?0:t/l,l===m)n=0;else{switch(l){case c:n=(r-e)/t+(r<e?6:0);break;case r:n=(e-c)/t+2;break;case e:n=(c-r)/t+4}n/=6}return[n,p,i]},h.prototype.from_hex=function(e){var t,r,n,l,m,c,s,p,i,d,M,T,E,L,x,R;if(e==null)throw"from_hex needs an argument";if(!/^([0-9A-F]{2}){3}$/im.test(e))throw"from_hex("+e+") - argument must be in the form of RRGGBB";return L=/(..)(..)(..)/.exec(e).slice(1,4),T=function(){var k,C,I;for(I=[],C=0,k=L.length;C<k;C++)d=L[C],I.push(parseInt(d,16));return I}(),M=T[0],r=T[1],t=T[2],E=this.rgb2ryb([M,r,t]),M=E[0],r=E[1],t=E[2],s=this.rgbToHsv(M,r,t),l=s[0],m=0,c=1e3,p=null,i=null,n=null,x=null,R=null,n=s[0],x=s[1],R=s[2],this.from_hue(n*360),this._set_variant_preset([x,R,x,R*.7,x*.25,1,x*.5,1]),this},h.prototype.add_complement=function(e){if(e==null)throw"add_complement needs an argument";return this._add_complement=e,this},h.prototype.web_safe=function(e){if(e==null)throw"web_safe needs an argument";return this._web_safe=e,this},h.prototype.distance=function(e){if(e==null)throw"distance needs an argument";if(e<0)throw"distance("+e+") - argument must be >= 0";if(e>1)throw"distance("+e+") - argument must be <= 1";return this._distance=e,this},h.prototype.scheme=function(e){if(e==null)return this._scheme;if(h.SCHEMES[e]==null)throw"'"+e+"' isn't a valid scheme name";return this._scheme=e,this},h.prototype.variation=function(e){if(e==null)throw"variation needs an argument";if(h.PRESETS[e]==null)throw"'$v' isn't a valid variation name";return this._set_variant_preset(h.PRESETS[e]),this},h.prototype._set_variant_preset=function(e){var t,r,n;for(n=[],t=r=0;r<=3;t=++r)n.push(this.col[t].set_variant_preset(e));return n},g=_(function(e){var t,r,n;if(e==null||typeof e!="object")return e;if(e instanceof Date)return new Date(e.getTime());if(e instanceof RegExp)return t="",e.global!=null&&(t+="g"),e.ignoreCase!=null&&(t+="i"),e.multiline!=null&&(t+="m"),e.sticky!=null&&(t+="y"),new RegExp(e.source,t);n=new e.constructor;for(r in e)n[r]=g(e[r]);return n},"m"),h.mutablecolor=function(){e.prototype.hue=0,e.prototype.saturation=[],e.prototype.value=[],e.prototype.base_red=0,e.prototype.base_green=0,e.prototype.base_saturation=0,e.prototype.base_value=0;function e(t){if(t==null)throw"No hue specified";this.saturation=[],this.value=[],this.base_red=0,this.base_green=0,this.base_blue=0,this.base_saturation=0,this.base_value=0,this.set_hue(t),this.set_variant_preset(h.PRESETS.default)}return _(e,"t"),e.prototype.get_hue=function(){return this.hue},e.prototype.set_hue=function(t){var r,n,l,m,c,s,p,i,d,M;r=_(function(T,E,L){return T+Math.round((E-T)*L)},"r"),this.hue=Math.round(t%360),c=this.hue%15+(this.hue-Math.floor(this.hue)),M=c/15,s=this.hue-Math.floor(c),p=(s+15)%360,s===360&&(s=0),p===360&&(p=0),l=h.COLOR_WHEEL[s],m=h.COLOR_WHEEL[p],i={red:0,green:1,blue:2,value:3};for(n in i)d=i[n],this["base_"+n]=r(l[d],m[d],M);return this.base_saturation=r(100,100,M)/100,this.base_value/=100},e.prototype.rotate=function(t){var r;return r=(this.hue+t)%360,this.set_hue(r)},e.prototype.get_saturation=function(t){var r,n;return n=this.saturation[t],r=n<0?-n*this.base_saturation:n,r>1&&(r=1),r<0&&(r=0),r},e.prototype.get_value=function(t){var r,n;return n=this.value[t],r=n<0?-n*this.base_value:n,r>1&&(r=1),r<0&&(r=0),r},e.prototype.set_variant=function(t,r,n){return this.saturation[t]=r,this.value[t]=n},e.prototype.set_variant_preset=function(t){var r,n,l;for(l=[],r=n=0;n<=3;r=++n)l.push(this.set_variant(r,t[2*r],t[2*r+1]));return l},e.prototype.get_hex=function(t,r){var n,l,m,c,s,p,i,d,M,T,E,L,x,R,k,C,I;for(M=Math.max.apply(Math,function(){var z,S,w,W;for(w=["red","green","blue"],W=[],S=0,z=w.length;S<z;S++)l=w[S],W.push(this["base_"+l]);return W}.call(this)),T=Math.min.apply(Math,function(){var z,S,w,W;for(w=["red","green","blue"],W=[],S=0,z=w.length;S<z;S++)l=w[S],W.push(this["base_"+l]);return W}.call(this)),I=(r<0?this.base_value:this.get_value(r))*255,k=r<0?this.base_saturation:this.get_saturation(r),s=M>0?I/M:0,x=[],L=["red","green","blue"],d=0,p=L.length;d<p;d++)l=L[d],R=Math.min.apply(Math,[255,Math.round(I-(I-this["base_"+l]*s)*k)]),x.push(R);for(t&&(x=function(){var z,S,w;for(w=[],S=0,z=x.length;S<z;S++)n=x[S],w.push(Math.round(n/51)*51);return w}()),m="",E=0,i=x.length;E<i;E++)c=x[E],C=c.toString(16),C.length<2&&(C="0"+C),m+=C;return m},e}(),h}(),typeof a<"u"&&a!==null&&a.exports!=null?a.exports=f:typeof define=="function"&&define.amd?define([],function(){return f}):window.ColorScheme=f}).call(o)}),U={};oe(U,{default:()=>j});var ae=F(V());ne(U,F(V()));var{default:B,...se}=ae,j=B!==void 0?B:se;var ie=window;var q=_(()=>ie,"getGlobalP5");var u={ALL_SCHEMES:["mono","contrast","triade","tetrade","analogic"],ALL_VARIATIONS:["default","pastel","soft","light","hard","pale"],p5:null,index:0,colors:[],configured:!1,savedConfig:null,configure(o={}){u.p5=o.p5??q();let{hue:a=u.p5.floor(u.p5.random(0,360)),variation:f=u.p5.random([...u.ALL_VARIATIONS]),scheme:v=u.p5.random([...u.ALL_SCHEMES]),distance:g=u.p5.random(0,1)}=o;console.log("Palette config:"),console.log({hue:a,variation:f,scheme:v,distance:g}),u.colors=new j().from_hue(a).distance(g).scheme(v).variation(f).colors().map(P=>`#${P}`),u.colors=u.p5.shuffle(u.colors),u.configured=!0,u.savedConfig={...o}},reload(){u.prepare(),u.configure(u.savedConfig)},prepare(){u.configured||u.configure()},nextColor(){return u.prepare(),u.p5.color(u.colors[u.index++%u.colors.length])},intToColor(o){return u.prepare(),u.p5.color(u.colors[Math.floor(o)%u.colors.length])},peekNextColor(){return u.prepare(),u.p5.color(u.colors[(u.index+1)%u.colors.length])},allColors(){return u.prepare(),u.colors.map(o=>u.p5.color(o))},colorCount(){return u.prepare(),u.colors.length}};var J=_((o,a)=>(f={})=>{let{size:v=50,maxHeight:g=15}=f,P=A(o,a),H=Date.now();for(let b=0;b<v;++b)for(let y=0;y<v;++y){let O=Math.floor(o.map(o.noise(b/20,y/20),0,1,0,g));console.log(`[Terrain] x=${b} y=${y} height=${O}`);for(let h=0;h<=O;++h)a.cube(b,y,h,{color:u.intToColor(h),strokes:[!1,!1,!1]});o.random()<.025&&P(b,y,O+1)}console.log(`[Terrain] generation time: ${(Date.now()-H)/1e3} seconds`)},"terrain");function He(o,a){return{tree:A(o,a),terrain:J(o,a)}}_(He,"plugins");export{He as plugins};
