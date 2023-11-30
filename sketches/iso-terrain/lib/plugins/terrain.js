var J=Object.defineProperty;var d=(o,a)=>J(o,"name",{value:a,configurable:!0});var K=Object.create,$=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,X=Object.getOwnPropertyNames,Y=Object.getPrototypeOf,Z=Object.prototype.hasOwnProperty,ee=d((o,a)=>()=>(a||o((a={exports:{}}).exports,a),a.exports),"J"),te=d((o,a)=>{for(var p in a)$(o,p,{get:a[p],enumerable:!0})},"K"),W=d((o,a,p,v)=>{if(a&&typeof a=="object"||typeof a=="function")for(let g of X(a))!Z.call(o,g)&&g!==p&&$(o,g,{get:()=>a[g],enumerable:!(v=Q(a,g))||v.enumerable});return o},"I"),re=d((o,a,p)=>(W(o,a,"default"),p&&W(p,a,"default")),"T"),N=d((o,a,p)=>(p=o!=null?K(Y(o)):{},W(a||!o||!o.__esModule?$(p,"default",{value:o,enumerable:!0}):p,o)),"G"),B=ee((o,a)=>{(function(){var p,v=[].slice;p=function(){var g,E,k,b,y,O;for(y=Array.isArray||function(e){return{}.toString.call(e)==="[object Array]"},h.SCHEMES={},b="mono monochromatic contrast triade tetrade analogic".split(/\s+/),E=0,k=b.length;E<k;E++)O=b[E],h.SCHEMES[O]=!0;h.PRESETS={default:[-1,-1,1,-.7,.25,1,.5,1],pastel:[.5,-.9,.5,.5,.1,.9,.75,.75],soft:[.3,-.8,.3,.5,.1,.9,.5,.75],light:[.25,1,.5,.75,.1,1,.5,1],hard:[1,-1,1,-.6,.1,1,.6,1],pale:[.1,-.85,.1,.5,.1,1,.1,.75]},h.COLOR_WHEEL={0:[255,0,0,100],15:[255,51,0,100],30:[255,102,0,100],45:[255,128,0,100],60:[255,153,0,100],75:[255,178,0,100],90:[255,204,0,100],105:[255,229,0,100],120:[255,255,0,100],135:[204,255,0,100],150:[153,255,0,100],165:[51,255,0,100],180:[0,204,0,80],195:[0,178,102,70],210:[0,153,153,60],225:[0,102,178,70],240:[0,51,204,80],255:[25,25,178,70],270:[51,0,153,60],285:[64,0,153,60],300:[102,0,153,60],315:[153,0,153,60],330:[204,0,153,80],345:[229,0,102,90]};function h(){var e,t;for(e=[],t=1;t<=4;t++)e.push(new h.mutablecolor(60));this.col=e,this._scheme="mono",this._distance=.5,this._web_safe=!1,this._add_complement=!1}return d(h,"h"),h.prototype.colors=function(){var e,t,r,n,l,m,c,s,f;if(f=1,t=this.col[0].get_hue(),e={mono:function(i){return function(){}}(this),contrast:function(i){return function(){return f=2,i.col[1].set_hue(t),i.col[1].rotate(180)}}(this),triade:function(i){return function(){var _;return f=3,_=60*i._distance,i.col[1].set_hue(t),i.col[1].rotate(180-_),i.col[2].set_hue(t),i.col[2].rotate(180+_)}}(this),tetrade:function(i){return function(){var _;return f=4,_=90*i._distance,i.col[1].set_hue(t),i.col[1].rotate(180),i.col[2].set_hue(t),i.col[2].rotate(180+_),i.col[3].set_hue(t),i.col[3].rotate(_)}}(this),analogic:function(i){return function(){var _;return f=i._add_complement?4:3,_=60*i._distance,i.col[1].set_hue(t),i.col[1].rotate(_),i.col[2].set_hue(t),i.col[2].rotate(360-_),i.col[3].set_hue(t),i.col[3].rotate(180)}}(this)},e.monochromatic=e.mono,e[this._scheme]!=null)e[this._scheme]();else throw"Unknown color scheme name: "+this._scheme;for(c=[],r=l=0,s=f-1;0<=s?l<=s:l>=s;r=0<=s?++l:--l)for(n=m=0;m<=3;n=++m)c[r*4+n]=this.col[r].get_hex(this._web_safe,n);return c},h.prototype.colorset=function(){var e,t;for(e=g(this.colors()),t=[];e.length>0;)t.push(e.splice(0,4));return t},h.prototype.from_hue=function(e){if(e==null)throw"from_hue needs an argument";return this.col[0].set_hue(e),this},h.prototype.rgb2ryb=function(){var e,t,r,n,l,m,c,s,f;return c=1<=arguments.length?v.call(arguments,0):[],c[0]!=null&&y(c[0])&&(c=c[0]),m=c[0],t=c[1],e=c[2],s=Math.min(m,t,e),m-=s,t-=s,e-=s,n=Math.max(m,t,e),f=Math.min(m,t),m-=f,t-=f,e>0&&t>0&&(e/=2,t/=2),f+=t,e+=t,l=Math.max(m,f,e),l>0&&(r=n/l,m*=r,f*=r,e*=r),m+=s,f+=s,e+=s,[Math.floor(m),Math.floor(f),Math.floor(e)]},h.prototype.rgb2hsv=function(){var e,t,r,n,l,m,c,s,f,i;if(s=1<=arguments.length?v.call(arguments,0):[],s[0]!=null&&y(s[0])&&(s=s[0]),c=s[0],r=s[1],e=s[2],c/=255,r/=255,e/=255,m=Math.min.apply(Math,[c,r,e]),l=Math.max.apply(Math,[c,r,e]),t=l-m,i=l,t>0)f=t/l;else return[0,0,i];return n=c===l?(r-e)/t:r===l?2+(e-c)/t:4+(c-r)/t,n*=60,n%=360,[n,f,i]},h.prototype.rgbToHsv=function(){var e,t,r,n,l,m,c,s,f,i;if(s=1<=arguments.length?v.call(arguments,0):[],s[0]!=null&&y(s[0])&&(s=s[0]),c=s[0],r=s[1],e=s[2],c/=255,r/=255,e/=255,l=Math.max(c,r,e),m=Math.min(c,r,e),n=void 0,f=void 0,i=l,t=l-m,f=l===0?0:t/l,l===m)n=0;else{switch(l){case c:n=(r-e)/t+(r<e?6:0);break;case r:n=(e-c)/t+2;break;case e:n=(c-r)/t+4}n/=6}return[n,f,i]},h.prototype.from_hex=function(e){var t,r,n,l,m,c,s,f,i,_,M,T,w,L,x,A;if(e==null)throw"from_hex needs an argument";if(!/^([0-9A-F]{2}){3}$/im.test(e))throw"from_hex("+e+") - argument must be in the form of RRGGBB";return L=/(..)(..)(..)/.exec(e).slice(1,4),T=function(){var I,P,z;for(z=[],P=0,I=L.length;P<I;P++)_=L[P],z.push(parseInt(_,16));return z}(),M=T[0],r=T[1],t=T[2],w=this.rgb2ryb([M,r,t]),M=w[0],r=w[1],t=w[2],s=this.rgbToHsv(M,r,t),l=s[0],m=0,c=1e3,f=null,i=null,n=null,x=null,A=null,n=s[0],x=s[1],A=s[2],this.from_hue(n*360),this._set_variant_preset([x,A,x,A*.7,x*.25,1,x*.5,1]),this},h.prototype.add_complement=function(e){if(e==null)throw"add_complement needs an argument";return this._add_complement=e,this},h.prototype.web_safe=function(e){if(e==null)throw"web_safe needs an argument";return this._web_safe=e,this},h.prototype.distance=function(e){if(e==null)throw"distance needs an argument";if(e<0)throw"distance("+e+") - argument must be >= 0";if(e>1)throw"distance("+e+") - argument must be <= 1";return this._distance=e,this},h.prototype.scheme=function(e){if(e==null)return this._scheme;if(h.SCHEMES[e]==null)throw"'"+e+"' isn't a valid scheme name";return this._scheme=e,this},h.prototype.variation=function(e){if(e==null)throw"variation needs an argument";if(h.PRESETS[e]==null)throw"'$v' isn't a valid variation name";return this._set_variant_preset(h.PRESETS[e]),this},h.prototype._set_variant_preset=function(e){var t,r,n;for(n=[],t=r=0;r<=3;t=++r)n.push(this.col[t].set_variant_preset(e));return n},g=d(function(e){var t,r,n;if(e==null||typeof e!="object")return e;if(e instanceof Date)return new Date(e.getTime());if(e instanceof RegExp)return t="",e.global!=null&&(t+="g"),e.ignoreCase!=null&&(t+="i"),e.multiline!=null&&(t+="m"),e.sticky!=null&&(t+="y"),new RegExp(e.source,t);n=new e.constructor;for(r in e)n[r]=g(e[r]);return n},"m"),h.mutablecolor=function(){e.prototype.hue=0,e.prototype.saturation=[],e.prototype.value=[],e.prototype.base_red=0,e.prototype.base_green=0,e.prototype.base_saturation=0,e.prototype.base_value=0;function e(t){if(t==null)throw"No hue specified";this.saturation=[],this.value=[],this.base_red=0,this.base_green=0,this.base_blue=0,this.base_saturation=0,this.base_value=0,this.set_hue(t),this.set_variant_preset(h.PRESETS.default)}return d(e,"t"),e.prototype.get_hue=function(){return this.hue},e.prototype.set_hue=function(t){var r,n,l,m,c,s,f,i,_,M;r=d(function(T,w,L){return T+Math.round((w-T)*L)},"r"),this.hue=Math.round(t%360),c=this.hue%15+(this.hue-Math.floor(this.hue)),M=c/15,s=this.hue-Math.floor(c),f=(s+15)%360,s===360&&(s=0),f===360&&(f=0),l=h.COLOR_WHEEL[s],m=h.COLOR_WHEEL[f],i={red:0,green:1,blue:2,value:3};for(n in i)_=i[n],this["base_"+n]=r(l[_],m[_],M);return this.base_saturation=r(100,100,M)/100,this.base_value/=100},e.prototype.rotate=function(t){var r;return r=(this.hue+t)%360,this.set_hue(r)},e.prototype.get_saturation=function(t){var r,n;return n=this.saturation[t],r=n<0?-n*this.base_saturation:n,r>1&&(r=1),r<0&&(r=0),r},e.prototype.get_value=function(t){var r,n;return n=this.value[t],r=n<0?-n*this.base_value:n,r>1&&(r=1),r<0&&(r=0),r},e.prototype.set_variant=function(t,r,n){return this.saturation[t]=r,this.value[t]=n},e.prototype.set_variant_preset=function(t){var r,n,l;for(l=[],r=n=0;n<=3;r=++n)l.push(this.set_variant(r,t[2*r],t[2*r+1]));return l},e.prototype.get_hex=function(t,r){var n,l,m,c,s,f,i,_,M,T,w,L,x,A,I,P,z;for(M=Math.max.apply(Math,function(){var H,S,C,R;for(C=["red","green","blue"],R=[],S=0,H=C.length;S<H;S++)l=C[S],R.push(this["base_"+l]);return R}.call(this)),T=Math.min.apply(Math,function(){var H,S,C,R;for(C=["red","green","blue"],R=[],S=0,H=C.length;S<H;S++)l=C[S],R.push(this["base_"+l]);return R}.call(this)),z=(r<0?this.base_value:this.get_value(r))*255,I=r<0?this.base_saturation:this.get_saturation(r),s=M>0?z/M:0,x=[],L=["red","green","blue"],_=0,f=L.length;_<f;_++)l=L[_],A=Math.min.apply(Math,[255,Math.round(z-(z-this["base_"+l]*s)*I)]),x.push(A);for(t&&(x=function(){var H,S,C;for(C=[],S=0,H=x.length;S<H;S++)n=x[S],C.push(Math.round(n/51)*51);return C}()),m="",w=0,i=x.length;w<i;w++)c=x[w],P=c.toString(16),P.length<2&&(P="0"+P),m+=P;return m},e}(),h}(),typeof a<"u"&&a!==null&&a.exports!=null?a.exports=p:typeof define=="function"&&define.amd?define([],function(){return p}):window.ColorScheme=p}).call(o)}),V={};te(V,{default:()=>j});var oe=N(B());re(V,N(B()));var{default:G,...ne}=oe,j=G!==void 0?G:ne;var ae=window;var F=d(()=>ae,"getGlobalP5");var u={ALL_SCHEMES:["mono","contrast","triade","tetrade","analogic"],ALL_VARIATIONS:["default","pastel","soft","light","hard","pale"],p5:null,index:0,colors:[],configured:!1,savedConfig:null,configure(o={}){u.p5=o.p5??F();let{hue:a=u.p5.floor(u.p5.random(0,360)),variation:p=u.p5.random([...u.ALL_VARIATIONS]),scheme:v=u.p5.random([...u.ALL_SCHEMES]),distance:g=u.p5.random(0,1)}=o;console.log("Palette config:"),console.log({hue:a,variation:p,scheme:v,distance:g}),u.colors=new j().from_hue(a).distance(g).scheme(v).variation(p).colors().map(E=>`#${E}`),u.colors=u.p5.shuffle(u.colors),u.configured=!0,u.savedConfig={...o}},reload(){u.prepare(),u.configure(u.savedConfig)},prepare(){u.configured||u.configure()},nextColor(){return u.prepare(),u.p5.color(u.colors[u.index++%u.colors.length])},intToColor(o){return u.prepare(),u.p5.color(u.colors[Math.floor(o)%u.colors.length])},peekNextColor(){return u.prepare(),u.p5.color(u.colors[(u.index+1)%u.colors.length])},allColors(){return u.prepare(),u.colors.map(o=>u.p5.color(o))},colorCount(){return u.prepare(),u.colors.length}};function U(o){let a;return(...p)=>(a!==void 0||(a=o(...p)),a)}d(U,"cache");function D(o,a){for(let p=0;p<o;++p)a(p)}d(D,"repeat");var se=U(o=>o.shuffle([o.color(173,193,120),o.color(244,244,249),o.color(222,49,99),o.color(242,232,99)]).slice(0,2)),q=d((o,a)=>(p,v,g=1)=>{let E={treeTrunk:o.random([o.color(169,132,103)]),treeLeaves:o.random(se(o))},k=o.random(3,7),b=o.random(a.cellSize/4,a.cellSize/2),y=b/a.cellSize;p+=(a.cellSize-b)/2/a.cellSize,v+=(a.cellSize-b)/2/a.cellSize,D(k,h=>{a.cube(p,v,g+h*y,{color:E.treeTrunk,strokes:[!1,!1,!1],size:b,opacity:255})});let O=o.random(5,15);D(O*3,h=>{let e=h/30;a.cube(p+o.random(-e,e),v+o.random(-e,e),g+k*y-y+o.random(0,e*2),{strokes:[!1,!1,!1],color:E.treeLeaves,opacity:o.random(200,255),size:o.random(a.cellSize/10,a.cellSize/1.5)})})},"tree");var Te=d((o,a)=>(p={})=>{let{size:v=50,maxHeight:g=15}=p,E=q(o,a),k=Date.now();for(let b=0;b<v;++b)for(let y=0;y<v;++y){let O=Math.floor(o.map(o.noise(b/20,y/20),0,1,0,g));console.log(`[Terrain] x=${b} y=${y} height=${O}`);for(let h=0;h<=O;++h)a.cube(b,y,h,{color:u.intToColor(h),strokes:[!1,!1,!1]});o.random()<.025&&E(b,y,O+1)}console.log(`[Terrain] generation time: ${(Date.now()-k)/1e3} seconds`)},"terrain");export{Te as terrain};
