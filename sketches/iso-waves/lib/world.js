var g=Object.defineProperty;var c=(m,r)=>g(m,"name",{value:r,configurable:!0});var f=c((m,r,b)=>({quads:0,type:2,draw(s){let{color:a=s.color(255,100,80),opacity:n=255,weight:y=1}=b;s.noFill(),s.stroke(a),s.strokeWeight(y),s.line(0,0,m,r)}}),"createLine");var h=c(m=>({quads:0,type:3,draw(r){let{color:b=r.color(255,100,80),opacity:s=255,weight:a=1}=m;r.noFill(),r.stroke(b),r.strokeWeight(a),r.circle(0,0,1)}}),"createPoint");var P=(n=>(n[n.Cube=0]="Cube",n[n.Plane=1]="Plane",n[n.Line=2]="Line",n[n.Point=3]="Point",n[n.Composition=4]="Composition",n))(P||{});function N(m){let r=[],b={},s=c((o,t,e)=>`${Math.floor(o)}-${Math.floor(t)}-${Math.floor(e)}`,"hashKey"),a=c((o,t,e,i)=>{let p=s(o,t,e);b[p]??=0,b[p]++;for(let u=0;u<r.length;++u){let{location:l,obj:d}=r[u];if(!(o>l.x)&&!(t>l.y)&&!(e>l.z)&&!(i.quads>d.quads)){r.splice(u,0,{location:{x:o,y:t,z:e},obj:i});return}}r.push({location:{x:o,y:t,z:e},obj:i})},"add"),n=c((o,t,e)=>{let i=(o-t)*m*Math.sqrt(3)/2,p=(o+t)*m/2-m*e;return{x:i,y:p}},"convertCoordinates");return{draw:c((o,t,e)=>{r.forEach(({location:i,obj:p})=>{let{x:u,y:l}=n(i.x,i.y,i.z);o.push(),o.translate(t+u,e+l),p.draw(o),o.pop()})},"draw"),add:a,point:c((o,t,e=0,i={})=>{a(o,t,e,h(i))},"point"),clear:c(()=>r.length=0,"clear"),line:c((o,t,e,i,p,u,l={})=>{let d=i-o,C=p-t,x=u-e,{x:I,y:w}=n(d,C,x);a(o,t,e,f(I,w,l))},"line"),cellSize:m,lookup:c(o=>o?r.find(t=>t.obj.type===o):r,"lookup")}}c(N,"createIsometricWorld");export{P as IsoObjectTypes,N as createIsometricWorld};
