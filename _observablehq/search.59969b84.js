var Ce=Object.defineProperty;var O=(r,e)=>Ce(r,"name",{value:e,configurable:!0});var ze=Object.defineProperty,A=O((r,e)=>ze(r,"name",{value:e,configurable:!0}),"A"),k=A(function(){return k=Object.assign||A(function(r){for(var e,t=1,i=arguments.length;t<i;t++){e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o])}return r},"__assign"),k.apply(this,arguments)},"__assign");function ce(r,e,t,i){function o(n){return n instanceof t?n:new t(function(u){u(n)})}return O(o,"a"),A(o,"adopt"),new(t||(t=Promise))(function(n,u){function a(c){try{l(i.next(c))}catch(d){u(d)}}O(a,"o"),A(a,"fulfilled");function s(c){try{l(i.throw(c))}catch(d){u(d)}}O(s,"l"),A(s,"rejected");function l(c){c.done?n(c.value):o(c.value).then(a,s)}O(l,"h"),A(l,"step"),l((i=i.apply(r,e||[])).next())})}O(ce,"vt"),A(ce,"__awaiter");function de(r,e){var t={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},i,o,n,u;return u={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(u[Symbol.iterator]=function(){return this}),u;function a(l){return function(c){return s([l,c])}}function s(l){if(i)throw new TypeError("Generator is already executing.");for(;u&&(u=0,l[0]&&(t=0)),t;)try{if(i=1,o&&(n=l[0]&2?o.return:l[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,l[1])).done)return n;switch(o=0,n&&(l=[l[0]&2,n.value]),l[0]){case 0:case 1:n=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,o=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(n=t.trys,!(n=n.length>0&&n[n.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!n||l[1]>n[0]&&l[1]<n[3])){t.label=l[1];break}if(l[0]===6&&t.label<n[1]){t.label=n[1],n=l;break}if(n&&t.label<n[2]){t.label=n[2],t.ops.push(l);break}n[2]&&t.ops.pop(),t.trys.pop();continue}l=e.call(r,t)}catch(c){l=[6,c],o=0}finally{i=n=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}O(de,"dt"),A(de,"__generator");function g(r){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&r[e],i=0;if(t)return t.call(r);if(r&&typeof r.length=="number")return{next:function(){return r&&i>=r.length&&(r=void 0),{value:r&&r[i++],done:!r}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}O(g,"g$1"),A(g,"__values");function V(r,e){var t=typeof Symbol=="function"&&r[Symbol.iterator];if(!t)return r;var i=t.call(r),o,n=[],u;try{for(;(e===void 0||e-- >0)&&!(o=i.next()).done;)n.push(o.value)}catch(a){u={error:a}}finally{try{o&&!o.done&&(t=i.return)&&t.call(i)}finally{if(u)throw u.error}}return n}O(V,"I"),A(V,"__read"),typeof SuppressedError=="function"&&SuppressedError;var Ie="ENTRIES",fe="KEYS",he="VALUES",L="",Y=function(){function r(e,t){var i=e._tree,o=Array.from(i.keys());this.set=e,this._type=t,this._path=o.length>0?[{node:i,keys:o}]:[]}return O(r,"i"),A(r,"TreeIterator"),r.prototype.next=function(){var e=this.dive();return this.backtrack(),e},r.prototype.dive=function(){if(this._path.length===0)return{done:!0,value:void 0};var e=R(this._path),t=e.node,i=e.keys;if(R(i)===L)return{done:!1,value:this.result()};var o=t.get(R(i));return this._path.push({node:o,keys:Array.from(o.keys())}),this.dive()},r.prototype.backtrack=function(){if(this._path.length!==0){var e=R(this._path).keys;e.pop(),!(e.length>0)&&(this._path.pop(),this.backtrack())}},r.prototype.key=function(){return this.set._prefix+this._path.map(function(e){var t=e.keys;return R(t)}).filter(function(e){return e!==L}).join("")},r.prototype.value=function(){return R(this._path).node.get(L)},r.prototype.result=function(){switch(this._type){case he:return this.value();case fe:return this.key();default:return[this.key(),this.value()]}},r.prototype[Symbol.iterator]=function(){return this},r}(),R=A(function(r){return r[r.length-1]},"last$1"),ke=A(function(r,e,t){var i=new Map;if(e===void 0)return i;for(var o=e.length+1,n=o+t,u=new Uint8Array(n*o).fill(t+1),a=0;a<o;++a)u[a]=a;for(var s=1;s<n;++s)u[s*o]=s;return ye(r,e,t,i,u,1,o,""),i},"fuzzySearch"),ye=A(function(r,e,t,i,o,n,u,a){var s,l,c=n*u;try{e:for(var d=g(r.keys()),f=d.next();!f.done;f=d.next()){var h=f.value;if(h===L){var p=o[c-1];p<=t&&i.set(a,[r.get(h),p])}else{for(var v=n,y=0;y<h.length;++y,++v){for(var _=h[y],F=u*v,m=F-u,S=o[F],E=Math.max(0,v-t-1),M=Math.min(u-1,v+t),w=E;w<M;++w){var b=_!==e[w],C=o[m+w]+ +b,z=o[m+w+1]+1,D=o[F+w]+1,x=o[F+w+1]=Math.min(C,z,D);x<S&&(S=x)}if(S>t)continue e}ye(r.get(h),e,t,i,o,v,u,a+h)}}}catch(T){s={error:T}}finally{try{f&&!f.done&&(l=d.return)&&l.call(d)}finally{if(s)throw s.error}}},"recurse"),X=function(){function r(e,t){e===void 0&&(e=new Map),t===void 0&&(t=""),this._size=void 0,this._tree=e,this._prefix=t}return O(r,"i"),A(r,"SearchableMap"),r.prototype.atPrefix=function(e){var t,i;if(!e.startsWith(this._prefix))throw new Error("Mismatched prefix");var o=V(U(this._tree,e.slice(this._prefix.length)),2),n=o[0],u=o[1];if(n===void 0){var a=V(te(u),2),s=a[0],l=a[1];try{for(var c=g(s.keys()),d=c.next();!d.done;d=c.next()){var f=d.value;if(f!==L&&f.startsWith(l)){var h=new Map;return h.set(f.slice(l.length),s.get(f)),new r(h,e)}}}catch(p){t={error:p}}finally{try{d&&!d.done&&(i=c.return)&&i.call(c)}finally{if(t)throw t.error}}}return new r(n,e)},r.prototype.clear=function(){this._size=void 0,this._tree.clear()},r.prototype.delete=function(e){return this._size=void 0,De(this._tree,e)},r.prototype.entries=function(){return new Y(this,Ie)},r.prototype.forEach=function(e){var t,i;try{for(var o=g(this),n=o.next();!n.done;n=o.next()){var u=V(n.value,2),a=u[0],s=u[1];e(a,s,this)}}catch(l){t={error:l}}finally{try{n&&!n.done&&(i=o.return)&&i.call(o)}finally{if(t)throw t.error}}},r.prototype.fuzzyGet=function(e,t){return ke(this._tree,e,t)},r.prototype.get=function(e){var t=Z(this._tree,e);return t!==void 0?t.get(L):void 0},r.prototype.has=function(e){var t=Z(this._tree,e);return t!==void 0&&t.has(L)},r.prototype.keys=function(){return new Y(this,fe)},r.prototype.set=function(e,t){if(typeof e!="string")throw new Error("key must be a string");this._size=void 0;var i=ee(this._tree,e);return i.set(L,t),this},Object.defineProperty(r.prototype,"size",{get:function(){if(this._size)return this._size;this._size=0;for(var e=this.entries();!e.next().done;)this._size+=1;return this._size},enumerable:!1,configurable:!0}),r.prototype.update=function(e,t){if(typeof e!="string")throw new Error("key must be a string");this._size=void 0;var i=ee(this._tree,e);return i.set(L,t(i.get(L))),this},r.prototype.fetch=function(e,t){if(typeof e!="string")throw new Error("key must be a string");this._size=void 0;var i=ee(this._tree,e),o=i.get(L);return o===void 0&&i.set(L,o=t()),o},r.prototype.values=function(){return new Y(this,he)},r.prototype[Symbol.iterator]=function(){return this.entries()},r.from=function(e){var t,i,o=new r;try{for(var n=g(e),u=n.next();!u.done;u=n.next()){var a=V(u.value,2),s=a[0],l=a[1];o.set(s,l)}}catch(c){t={error:c}}finally{try{u&&!u.done&&(i=n.return)&&i.call(n)}finally{if(t)throw t.error}}return o},r.fromObject=function(e){return r.from(Object.entries(e))},r}(),U=A(function(r,e,t){var i,o;if(t===void 0&&(t=[]),e.length===0||r==null)return[r,t];try{for(var n=g(r.keys()),u=n.next();!u.done;u=n.next()){var a=u.value;if(a!==L&&e.startsWith(a))return t.push([r,a]),U(r.get(a),e.slice(a.length),t)}}catch(s){i={error:s}}finally{try{u&&!u.done&&(o=n.return)&&o.call(n)}finally{if(i)throw i.error}}return t.push([r,e]),U(void 0,"",t)},"trackDown"),Z=A(function(r,e){var t,i;if(e.length===0||r==null)return r;try{for(var o=g(r.keys()),n=o.next();!n.done;n=o.next()){var u=n.value;if(u!==L&&e.startsWith(u))return Z(r.get(u),e.slice(u.length))}}catch(a){t={error:a}}finally{try{n&&!n.done&&(i=o.return)&&i.call(o)}finally{if(t)throw t.error}}},"lookup"),ee=A(function(r,e){var t,i,o=e.length;e:for(var n=0;r&&n<o;){try{for(var u=(t=void 0,g(r.keys())),a=u.next();!a.done;a=u.next()){var s=a.value;if(s!==L&&e[n]===s[0]){for(var l=Math.min(o-n,s.length),c=1;c<l&&e[n+c]===s[c];)++c;var d=r.get(s);if(c===s.length)r=d;else{var f=new Map;f.set(s.slice(c),d),r.set(e.slice(n,n+c),f),r.delete(s),r=f}n+=c;continue e}}}catch(p){t={error:p}}finally{try{a&&!a.done&&(i=u.return)&&i.call(u)}finally{if(t)throw t.error}}var h=new Map;return r.set(e.slice(n),h),h}return r},"createPath"),De=A(function(r,e){var t=V(U(r,e),2),i=t[0],o=t[1];if(i!==void 0){if(i.delete(L),i.size===0)pe(o);else if(i.size===1){var n=V(i.entries().next().value,2),u=n[0],a=n[1];ve(o,u,a)}}},"remove"),pe=A(function(r){if(r.length!==0){var e=V(te(r),2),t=e[0],i=e[1];if(t.delete(i),t.size===0)pe(r.slice(0,-1));else if(t.size===1){var o=V(t.entries().next().value,2),n=o[0],u=o[1];n!==L&&ve(r.slice(0,-1),n,u)}}},"cleanup"),ve=A(function(r,e,t){if(r.length!==0){var i=V(te(r),2),o=i[0],n=i[1];o.set(n+e,t),o.delete(n)}},"merge"),te=A(function(r){return r[r.length-1]},"last"),J,re="or",me="and",Me="and_not",Te=function(){function r(e){if(e?.fields==null)throw new Error('MiniSearch: option "fields" must be provided');var t=e.autoVacuum==null||e.autoVacuum===!0?ae:e.autoVacuum;this._options=k(k(k({},ie),e),{autoVacuum:t,searchOptions:k(k({},ge),e.searchOptions||{}),autoSuggestOptions:k(k({},qe),e.autoSuggestOptions||{})}),this._index=new X,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldIds={},this._fieldLength=new Map,this._avgFieldLength=[],this._nextId=0,this._storedFields=new Map,this._dirtCount=0,this._currentVacuum=null,this._enqueuedVacuum=null,this._enqueuedVacuumConditions=ue,this.addFields(this._options.fields)}return O(r,"i"),A(r,"MiniSearch"),r.prototype.add=function(e){var t,i,o,n,u,a,s=this._options,l=s.extractField,c=s.tokenize,d=s.processTerm,f=s.fields,h=s.idField,p=l(e,h);if(p==null)throw new Error('MiniSearch: document does not have ID field "'.concat(h,'"'));if(this._idToShortId.has(p))throw new Error("MiniSearch: duplicate ID ".concat(p));var v=this.addDocumentId(p);this.saveStoredFields(v,e);try{for(var y=g(f),_=y.next();!_.done;_=y.next()){var F=_.value,m=l(e,F);if(m!=null){var S=c(m.toString(),F),E=this._fieldIds[F],M=new Set(S).size;this.addFieldLength(v,E,this._documentCount-1,M);try{for(var w=(o=void 0,g(S)),b=w.next();!b.done;b=w.next()){var C=b.value,z=d(C,F);if(Array.isArray(z))try{for(var D=(u=void 0,g(z)),x=D.next();!x.done;x=D.next()){var T=x.value;this.addTerm(E,v,T)}}catch(I){u={error:I}}finally{try{x&&!x.done&&(a=D.return)&&a.call(D)}finally{if(u)throw u.error}}else z&&this.addTerm(E,v,z)}}catch(I){o={error:I}}finally{try{b&&!b.done&&(n=w.return)&&n.call(w)}finally{if(o)throw o.error}}}}}catch(I){t={error:I}}finally{try{_&&!_.done&&(i=y.return)&&i.call(y)}finally{if(t)throw t.error}}},r.prototype.addAll=function(e){var t,i;try{for(var o=g(e),n=o.next();!n.done;n=o.next()){var u=n.value;this.add(u)}}catch(a){t={error:a}}finally{try{n&&!n.done&&(i=o.return)&&i.call(o)}finally{if(t)throw t.error}}},r.prototype.addAllAsync=function(e,t){var i=this;t===void 0&&(t={});var o=t.chunkSize,n=o===void 0?10:o,u={chunk:[],promise:Promise.resolve()},a=e.reduce(function(c,d,f){var h=c.chunk,p=c.promise;return h.push(d),(f+1)%n===0?{chunk:[],promise:p.then(function(){return new Promise(function(v){return setTimeout(v,0)})}).then(function(){return i.addAll(h)})}:{chunk:h,promise:p}},u),s=a.chunk,l=a.promise;return l.then(function(){return i.addAll(s)})},r.prototype.remove=function(e){var t,i,o,n,u,a,s=this._options,l=s.tokenize,c=s.processTerm,d=s.extractField,f=s.fields,h=s.idField,p=d(e,h);if(p==null)throw new Error('MiniSearch: document does not have ID field "'.concat(h,'"'));var v=this._idToShortId.get(p);if(v==null)throw new Error("MiniSearch: cannot remove document with ID ".concat(p,": it is not in the index"));try{for(var y=g(f),_=y.next();!_.done;_=y.next()){var F=_.value,m=d(e,F);if(m!=null){var S=l(m.toString(),F),E=this._fieldIds[F],M=new Set(S).size;this.removeFieldLength(v,E,this._documentCount,M);try{for(var w=(o=void 0,g(S)),b=w.next();!b.done;b=w.next()){var C=b.value,z=c(C,F);if(Array.isArray(z))try{for(var D=(u=void 0,g(z)),x=D.next();!x.done;x=D.next()){var T=x.value;this.removeTerm(E,v,T)}}catch(I){u={error:I}}finally{try{x&&!x.done&&(a=D.return)&&a.call(D)}finally{if(u)throw u.error}}else z&&this.removeTerm(E,v,z)}}catch(I){o={error:I}}finally{try{b&&!b.done&&(n=w.return)&&n.call(w)}finally{if(o)throw o.error}}}}}catch(I){t={error:I}}finally{try{_&&!_.done&&(i=y.return)&&i.call(y)}finally{if(t)throw t.error}}this._storedFields.delete(v),this._documentIds.delete(v),this._idToShortId.delete(p),this._fieldLength.delete(v),this._documentCount-=1},r.prototype.removeAll=function(e){var t,i;if(e)try{for(var o=g(e),n=o.next();!n.done;n=o.next()){var u=n.value;this.remove(u)}}catch(a){t={error:a}}finally{try{n&&!n.done&&(i=o.return)&&i.call(o)}finally{if(t)throw t.error}}else{if(arguments.length>0)throw new Error("Expected documents to be present. Omit the argument to remove all documents.");this._index=new X,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldLength=new Map,this._avgFieldLength=[],this._storedFields=new Map,this._nextId=0}},r.prototype.discard=function(e){var t=this,i=this._idToShortId.get(e);if(i==null)throw new Error("MiniSearch: cannot discard document with ID ".concat(e,": it is not in the index"));this._idToShortId.delete(e),this._documentIds.delete(i),this._storedFields.delete(i),(this._fieldLength.get(i)||[]).forEach(function(o,n){t.removeFieldLength(i,n,t._documentCount,o)}),this._fieldLength.delete(i),this._documentCount-=1,this._dirtCount+=1,this.maybeAutoVacuum()},r.prototype.maybeAutoVacuum=function(){if(this._options.autoVacuum!==!1){var e=this._options.autoVacuum,t=e.minDirtFactor,i=e.minDirtCount,o=e.batchSize,n=e.batchWait;this.conditionalVacuum({batchSize:o,batchWait:n},{minDirtCount:i,minDirtFactor:t})}},r.prototype.discardAll=function(e){var t,i,o=this._options.autoVacuum;try{this._options.autoVacuum=!1;try{for(var n=g(e),u=n.next();!u.done;u=n.next()){var a=u.value;this.discard(a)}}catch(s){t={error:s}}finally{try{u&&!u.done&&(i=n.return)&&i.call(n)}finally{if(t)throw t.error}}}finally{this._options.autoVacuum=o}this.maybeAutoVacuum()},r.prototype.replace=function(e){var t=this._options,i=t.idField,o=t.extractField,n=o(e,i);this.discard(n),this.add(e)},r.prototype.vacuum=function(e){return e===void 0&&(e={}),this.conditionalVacuum(e)},r.prototype.conditionalVacuum=function(e,t){var i=this;return this._currentVacuum?(this._enqueuedVacuumConditions=this._enqueuedVacuumConditions&&t,this._enqueuedVacuum!=null?this._enqueuedVacuum:(this._enqueuedVacuum=this._currentVacuum.then(function(){var o=i._enqueuedVacuumConditions;return i._enqueuedVacuumConditions=ue,i.performVacuuming(e,o)}),this._enqueuedVacuum)):this.vacuumConditionsMet(t)===!1?Promise.resolve():(this._currentVacuum=this.performVacuuming(e),this._currentVacuum)},r.prototype.performVacuuming=function(e,t){return ce(this,void 0,void 0,function(){var i,o,n,u,a,s,l,c,d,f,h,p,v,y,_,F,m,S,E,M,w,b,C,z,D;return de(this,function(x){switch(x.label){case 0:if(i=this._dirtCount,!this.vacuumConditionsMet(t))return[3,10];o=e.batchSize||oe.batchSize,n=e.batchWait||oe.batchWait,u=1,x.label=1;case 1:x.trys.push([1,7,8,9]),a=g(this._index),s=a.next(),x.label=2;case 2:if(s.done)return[3,6];l=V(s.value,2),c=l[0],d=l[1];try{for(f=(b=void 0,g(d)),h=f.next();!h.done;h=f.next()){p=V(h.value,2),v=p[0],y=p[1];try{for(_=(z=void 0,g(y)),F=_.next();!F.done;F=_.next())m=V(F.value,1),S=m[0],!this._documentIds.has(S)&&(y.size<=1?d.delete(v):y.delete(S))}catch(T){z={error:T}}finally{try{F&&!F.done&&(D=_.return)&&D.call(_)}finally{if(z)throw z.error}}}}catch(T){b={error:T}}finally{try{h&&!h.done&&(C=f.return)&&C.call(f)}finally{if(b)throw b.error}}return this._index.get(c).size===0&&this._index.delete(c),u%o!==0?[3,4]:[4,new Promise(function(T){return setTimeout(T,n)})];case 3:x.sent(),x.label=4;case 4:u+=1,x.label=5;case 5:return s=a.next(),[3,2];case 6:return[3,9];case 7:return E=x.sent(),M={error:E},[3,9];case 8:try{s&&!s.done&&(w=a.return)&&w.call(a)}finally{if(M)throw M.error}return[7];case 9:this._dirtCount-=i,x.label=10;case 10:return[4,null];case 11:return x.sent(),this._currentVacuum=this._enqueuedVacuum,this._enqueuedVacuum=null,[2]}})})},r.prototype.vacuumConditionsMet=function(e){if(e==null)return!0;var t=e.minDirtCount,i=e.minDirtFactor;return t=t||ae.minDirtCount,i=i||ae.minDirtFactor,this.dirtCount>=t&&this.dirtFactor>=i},Object.defineProperty(r.prototype,"isVacuuming",{get:function(){return this._currentVacuum!=null},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"dirtCount",{get:function(){return this._dirtCount},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"dirtFactor",{get:function(){return this._dirtCount/(1+this._documentCount+this._dirtCount)},enumerable:!1,configurable:!0}),r.prototype.has=function(e){return this._idToShortId.has(e)},r.prototype.getStoredFields=function(e){var t=this._idToShortId.get(e);if(t!=null)return this._storedFields.get(t)},r.prototype.search=function(e,t){var i,o;t===void 0&&(t={});var n=this.executeQuery(e,t),u=[];try{for(var a=g(n),s=a.next();!s.done;s=a.next()){var l=V(s.value,2),c=l[0],d=l[1],f=d.score,h=d.terms,p=d.match,v=h.length||1,y={id:this._documentIds.get(c),score:f*v,terms:Object.keys(p),queryTerms:h,match:p};Object.assign(y,this._storedFields.get(c)),(t.filter==null||t.filter(y))&&u.push(y)}}catch(_){i={error:_}}finally{try{s&&!s.done&&(o=a.return)&&o.call(a)}finally{if(i)throw i.error}}return e===r.wildcard&&t.boostDocument==null&&this._options.searchOptions.boostDocument==null||u.sort(Fe),u},r.prototype.autoSuggest=function(e,t){var i,o,n,u;t===void 0&&(t={}),t=k(k({},this._options.autoSuggestOptions),t);var a=new Map;try{for(var s=g(this.search(e,t)),l=s.next();!l.done;l=s.next()){var c=l.value,d=c.score,f=c.terms,h=f.join(" "),p=a.get(h);p!=null?(p.score+=d,p.count+=1):a.set(h,{score:d,terms:f,count:1})}}catch(E){i={error:E}}finally{try{l&&!l.done&&(o=s.return)&&o.call(s)}finally{if(i)throw i.error}}var v=[];try{for(var y=g(a),_=y.next();!_.done;_=y.next()){var F=V(_.value,2),p=F[0],m=F[1],d=m.score,f=m.terms,S=m.count;v.push({suggestion:p,terms:f,score:d/S})}}catch(E){n={error:E}}finally{try{_&&!_.done&&(u=y.return)&&u.call(y)}finally{if(n)throw n.error}}return v.sort(Fe),v},Object.defineProperty(r.prototype,"documentCount",{get:function(){return this._documentCount},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"termCount",{get:function(){return this._index.size},enumerable:!1,configurable:!0}),r.loadJSON=function(e,t){if(t==null)throw new Error("MiniSearch: loadJSON should be given the same options used when serializing the index");return this.loadJS(JSON.parse(e),t)},r.getDefault=function(e){if(ie.hasOwnProperty(e))return ne(ie,e);throw new Error('MiniSearch: unknown option "'.concat(e,'"'))},r.loadJS=function(e,t){var i,o,n,u,a,s,l=e.index,c=e.documentCount,d=e.nextId,f=e.documentIds,h=e.fieldIds,p=e.fieldLength,v=e.averageFieldLength,y=e.storedFields,_=e.dirtCount,F=e.serializationVersion;if(F!==1&&F!==2)throw new Error("MiniSearch: cannot deserialize an index created with an incompatible version");var m=new r(t);m._documentCount=c,m._nextId=d,m._documentIds=Q(f),m._idToShortId=new Map,m._fieldIds=h,m._fieldLength=Q(p),m._avgFieldLength=v,m._storedFields=Q(y),m._dirtCount=_||0,m._index=new X;try{for(var S=g(m._documentIds),E=S.next();!E.done;E=S.next()){var M=V(E.value,2),w=M[0],b=M[1];m._idToShortId.set(b,w)}}catch(B){i={error:B}}finally{try{E&&!E.done&&(o=S.return)&&o.call(S)}finally{if(i)throw i.error}}try{for(var C=g(l),z=C.next();!z.done;z=C.next()){var D=V(z.value,2),x=D[0],T=D[1],I=new Map;try{for(var q=(a=void 0,g(Object.keys(T))),j=q.next();!j.done;j=q.next()){var P=j.value,W=T[P];F===1&&(W=W.ds),I.set(parseInt(P,10),Q(W))}}catch(B){a={error:B}}finally{try{j&&!j.done&&(s=q.return)&&s.call(q)}finally{if(a)throw a.error}}m._index.set(x,I)}}catch(B){n={error:B}}finally{try{z&&!z.done&&(u=C.return)&&u.call(C)}finally{if(n)throw n.error}}return m},r.prototype.executeQuery=function(e,t){var i=this;if(t===void 0&&(t={}),e===r.wildcard)return this.executeWildcardQuery(t);if(typeof e!="string"){var o=k(k(k({},t),e),{queries:void 0}),n=e.queries.map(function(y){return i.executeQuery(y,o)});return this.combineResults(n,o.combineWith)}var u=this._options,a=u.tokenize,s=u.processTerm,l=u.searchOptions,c=k(k({tokenize:a,processTerm:s},l),t),d=c.tokenize,f=c.processTerm,h=d(e).flatMap(function(y){return f(y)}).filter(function(y){return!!y}),p=h.map(je(c)),v=p.map(function(y){return i.executeQuerySpec(y,c)});return this.combineResults(v,c.combineWith)},r.prototype.executeQuerySpec=function(e,t){var i,o,n,u,a=k(k({},this._options.searchOptions),t),s=(a.fields||this._options.fields).reduce(function(P,W){var B;return k(k({},P),(B={},B[W]=ne(a.boost,W)||1,B))},{}),l=a.boostDocument,c=a.weights,d=a.maxFuzzy,f=a.bm25,h=k(k({},ge.weights),c),p=h.fuzzy,v=h.prefix,y=this._index.get(e.term),_=this.termResults(e.term,e.term,1,y,s,l,f),F,m;if(e.prefix&&(F=this._index.atPrefix(e.term)),e.fuzzy){var S=e.fuzzy===!0?.2:e.fuzzy,E=S<1?Math.min(d,Math.round(e.term.length*S)):S;E&&(m=this._index.fuzzyGet(e.term,E))}if(F)try{for(var M=g(F),w=M.next();!w.done;w=M.next()){var b=V(w.value,2),C=b[0],z=b[1],D=C.length-e.term.length;if(D){m?.delete(C);var x=v*C.length/(C.length+.3*D);this.termResults(e.term,C,x,z,s,l,f,_)}}}catch(P){i={error:P}}finally{try{w&&!w.done&&(o=M.return)&&o.call(M)}finally{if(i)throw i.error}}if(m)try{for(var T=g(m.keys()),I=T.next();!I.done;I=T.next()){var C=I.value,q=V(m.get(C),2),j=q[0],D=q[1];if(D){var x=p*C.length/(C.length+D);this.termResults(e.term,C,x,j,s,l,f,_)}}}catch(P){n={error:P}}finally{try{I&&!I.done&&(u=T.return)&&u.call(T)}finally{if(n)throw n.error}}return _},r.prototype.executeWildcardQuery=function(e){var t,i,o=new Map,n=k(k({},this._options.searchOptions),e);try{for(var u=g(this._documentIds),a=u.next();!a.done;a=u.next()){var s=V(a.value,2),l=s[0],c=s[1],d=n.boostDocument?n.boostDocument(c,"",this._storedFields.get(l)):1;o.set(l,{score:d,terms:[],match:{}})}}catch(f){t={error:f}}finally{try{a&&!a.done&&(i=u.return)&&i.call(u)}finally{if(t)throw t.error}}return o},r.prototype.combineResults=function(e,t){if(t===void 0&&(t=re),e.length===0)return new Map;var i=t.toLowerCase();return e.reduce(Ve[i])||new Map},r.prototype.toJSON=function(){var e,t,i,o,n=[];try{for(var u=g(this._index),a=u.next();!a.done;a=u.next()){var s=V(a.value,2),l=s[0],c=s[1],d={};try{for(var f=(i=void 0,g(c)),h=f.next();!h.done;h=f.next()){var p=V(h.value,2),v=p[0],y=p[1];d[v]=Object.fromEntries(y)}}catch(_){i={error:_}}finally{try{h&&!h.done&&(o=f.return)&&o.call(f)}finally{if(i)throw i.error}}n.push([l,d])}}catch(_){e={error:_}}finally{try{a&&!a.done&&(t=u.return)&&t.call(u)}finally{if(e)throw e.error}}return{documentCount:this._documentCount,nextId:this._nextId,documentIds:Object.fromEntries(this._documentIds),fieldIds:this._fieldIds,fieldLength:Object.fromEntries(this._fieldLength),averageFieldLength:this._avgFieldLength,storedFields:Object.fromEntries(this._storedFields),dirtCount:this._dirtCount,index:n,serializationVersion:2}},r.prototype.termResults=function(e,t,i,o,n,u,a,s){var l,c,d,f,h;if(s===void 0&&(s=new Map),o==null)return s;try{for(var p=g(Object.keys(n)),v=p.next();!v.done;v=p.next()){var y=v.value,_=n[y],F=this._fieldIds[y],m=o.get(F);if(m!=null){var S=m.size,E=this._avgFieldLength[F];try{for(var M=(d=void 0,g(m.keys())),w=M.next();!w.done;w=M.next()){var b=w.value;if(!this._documentIds.has(b)){this.removeTerm(F,b,t),S-=1;continue}var C=u?u(this._documentIds.get(b),t,this._storedFields.get(b)):1;if(C){var z=m.get(b),D=this._fieldLength.get(b)[F],x=Le(z,S,this._documentCount,D,E,a),T=i*_*C*x,I=s.get(b);if(I){I.score+=T,Be(I.terms,e);var q=ne(I.match,t);q?q.push(y):I.match[t]=[y]}else s.set(b,{score:T,terms:[e],match:(h={},h[t]=[y],h)})}}}catch(j){d={error:j}}finally{try{w&&!w.done&&(f=M.return)&&f.call(M)}finally{if(d)throw d.error}}}}}catch(j){l={error:j}}finally{try{v&&!v.done&&(c=p.return)&&c.call(p)}finally{if(l)throw l.error}}return s},r.prototype.addTerm=function(e,t,i){var o=this._index.fetch(i,we),n=o.get(e);if(n==null)n=new Map,n.set(t,1),o.set(e,n);else{var u=n.get(t);n.set(t,(u||0)+1)}},r.prototype.removeTerm=function(e,t,i){if(!this._index.has(i)){this.warnDocumentChanged(t,e,i);return}var o=this._index.fetch(i,we),n=o.get(e);n==null||n.get(t)==null?this.warnDocumentChanged(t,e,i):n.get(t)<=1?n.size<=1?o.delete(e):n.delete(t):n.set(t,n.get(t)-1),this._index.get(i).size===0&&this._index.delete(i)},r.prototype.warnDocumentChanged=function(e,t,i){var o,n;try{for(var u=g(Object.keys(this._fieldIds)),a=u.next();!a.done;a=u.next()){var s=a.value;if(this._fieldIds[s]===t){this._options.logger("warn","MiniSearch: document with ID ".concat(this._documentIds.get(e),' has changed before removal: term "').concat(i,'" was not present in field "').concat(s,'". Removing a document after it has changed can corrupt the index!'),"version_conflict");return}}}catch(l){o={error:l}}finally{try{a&&!a.done&&(n=u.return)&&n.call(u)}finally{if(o)throw o.error}}},r.prototype.addDocumentId=function(e){var t=this._nextId;return this._idToShortId.set(e,t),this._documentIds.set(t,e),this._documentCount+=1,this._nextId+=1,t},r.prototype.addFields=function(e){for(var t=0;t<e.length;t++)this._fieldIds[e[t]]=t},r.prototype.addFieldLength=function(e,t,i,o){var n=this._fieldLength.get(e);n==null&&this._fieldLength.set(e,n=[]),n[t]=o;var u=this._avgFieldLength[t]||0,a=u*i+o;this._avgFieldLength[t]=a/(i+1)},r.prototype.removeFieldLength=function(e,t,i,o){if(i===1){this._avgFieldLength[t]=0;return}var n=this._avgFieldLength[t]*i-o;this._avgFieldLength[t]=n/(i-1)},r.prototype.saveStoredFields=function(e,t){var i,o,n=this._options,u=n.storeFields,a=n.extractField;if(!(u==null||u.length===0)){var s=this._storedFields.get(e);s==null&&this._storedFields.set(e,s={});try{for(var l=g(u),c=l.next();!c.done;c=l.next()){var d=c.value,f=a(t,d);f!==void 0&&(s[d]=f)}}catch(h){i={error:h}}finally{try{c&&!c.done&&(o=l.return)&&o.call(l)}finally{if(i)throw i.error}}}},r.wildcard=Symbol("*"),r}(),ne=A(function(r,e){return Object.prototype.hasOwnProperty.call(r,e)?r[e]:void 0},"getOwnProperty"),Ve=(J={},J[re]=function(r,e){var t,i;try{for(var o=g(e.keys()),n=o.next();!n.done;n=o.next()){var u=n.value,a=r.get(u);if(a==null)r.set(u,e.get(u));else{var s=e.get(u),l=s.score,c=s.terms,d=s.match;a.score=a.score+l,a.match=Object.assign(a.match,d),_e(a.terms,c)}}}catch(f){t={error:f}}finally{try{n&&!n.done&&(i=o.return)&&i.call(o)}finally{if(t)throw t.error}}return r},J[me]=function(r,e){var t,i,o=new Map;try{for(var n=g(e.keys()),u=n.next();!u.done;u=n.next()){var a=u.value,s=r.get(a);if(s!=null){var l=e.get(a),c=l.score,d=l.terms,f=l.match;_e(s.terms,d),o.set(a,{score:s.score+c,terms:s.terms,match:Object.assign(s.match,f)})}}}catch(h){t={error:h}}finally{try{u&&!u.done&&(i=n.return)&&i.call(n)}finally{if(t)throw t.error}}return o},J[Me]=function(r,e){var t,i;try{for(var o=g(e.keys()),n=o.next();!n.done;n=o.next()){var u=n.value;r.delete(u)}}catch(a){t={error:a}}finally{try{n&&!n.done&&(i=o.return)&&i.call(o)}finally{if(t)throw t.error}}return r},J),Oe={k:1.2,b:.7,d:.5},Le=A(function(r,e,t,i,o,n){var u=n.k,a=n.b,s=n.d,l=Math.log(1+(t-e+.5)/(e+.5));return l*(s+r*(u+1)/(r+u*(1-a+a*i/o)))},"calcBM25Score"),je=A(function(r){return function(e,t,i){var o=typeof r.fuzzy=="function"?r.fuzzy(e,t,i):r.fuzzy||!1,n=typeof r.prefix=="function"?r.prefix(e,t,i):r.prefix===!0;return{term:e,fuzzy:o,prefix:n}}},"termToQuerySpec"),ie={idField:"id",extractField:function(r,e){return r[e]},tokenize:function(r){return r.split(Pe)},processTerm:function(r){return r.toLowerCase()},fields:void 0,searchOptions:void 0,storeFields:[],logger:function(r,e){typeof console?.[r]=="function"&&console[r](e)},autoVacuum:!0},ge={combineWith:re,prefix:!1,fuzzy:!1,maxFuzzy:6,boost:{},weights:{fuzzy:.45,prefix:.375},bm25:Oe},qe={combineWith:me,prefix:function(r,e,t){return e===t.length-1}},oe={batchSize:1e3,batchWait:10},ue={minDirtFactor:.1,minDirtCount:20},ae=k(k({},oe),ue),Be=A(function(r,e){r.includes(e)||r.push(e)},"assignUniqueTerm"),_e=A(function(r,e){var t,i;try{for(var o=g(e),n=o.next();!n.done;n=o.next()){var u=n.value;r.includes(u)||r.push(u)}}catch(a){t={error:a}}finally{try{n&&!n.done&&(i=o.return)&&i.call(o)}finally{if(t)throw t.error}}},"assignUniqueTerms"),Fe=A(function(r,e){var t=r.score,i=e.score;return i-t},"byScore"),we=A(function(){return new Map},"createMap"),Q=A(function(r){var e,t,i=new Map;try{for(var o=g(Object.keys(r)),n=o.next();!n.done;n=o.next()){var u=n.value;i.set(parseInt(u,10),r[u])}}catch(a){e={error:a}}finally{try{n&&!n.done&&(t=o.return)&&t.call(o)}finally{if(e)throw e.error}}return i},"objectToNumericMap"),Pe=/[\n\r -#%-*,-/:;?@[-\]_{}\u00A0\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]+/u,$e=Object.defineProperty,N=O((r,e)=>$e(r,"name",{value:e,configurable:!0}),"o");const G=document.querySelector("#observablehq-search"),xe=document.querySelector("#observablehq-sidebar"),We=G.getAttribute("data-shortcut"),$=G.querySelector("input"),se=document.querySelector("#observablehq-search-results"),K="observablehq-link-active";let H;const Re=await fetch(import.meta.resolve("./minisearch.2c0111f8.json")).then(r=>{if(!r.ok)throw new Error(`unable to load minisearch.json: ${r.status}`);return r.json()}).then(r=>Te.loadJS(r,{...r.options,searchOptions:{boostDocument:e=>be(e)?1/3:1},processTerm:e=>e.slice(0,15).normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}));$.addEventListener("input",()=>{if(H===$.value)return;if(H=$.value,!H.length){G.setAttribute("data-shortcut",We),xe.classList.remove("observablehq-search-results"),se.innerHTML="";return}G.setAttribute("data-shortcut",""),xe.classList.add("observablehq-search-results");const r=Re.search(H,{boost:{title:4,keywords:4},fuzzy:.15,prefix:!0});se.innerHTML=r.length===0?"<div>no results</div>":`<div>${r.length.toLocaleString("en-US")} result${r.length===1?"":"s"}</div><ol>${r.map(Ae).join("")}</ol>`});function be(r){return/^\w+:/.test(r)}O(be,"f"),N(be,"isExternal");function Ae({id:r,score:e,title:t},i){const o=/^\w+:/.test(r);return`<li data-score="${Math.min(5,Math.round(.6*e))}" class="observablehq-link${i===0?` ${K}`:""}"><a href="${Se(o?r:import.meta.resolve(`..${r}`))}"${o?' target="_blank"':""}><span>${Ee(String(t??"\u2014"))}</span></a></li>`}O(Ae,"g"),N(Ae,"renderResult");function Se(r){return r.replace(/["&]/g,le)}O(Se,"q"),N(Se,"escapeDoubleQuote");function Ee(r){return r.replace(/[<&]/g,le)}O(Ee,"S"),N(Ee,"escapeText");function le(r){return`&#${r.charCodeAt(0).toString()};`}O(le,"b"),N(le,"entity"),$.dispatchEvent(new Event("input")),$.addEventListener("keydown",r=>{const{code:e}=r;if(e==="Escape"&&$.value==="")return $.blur();if(e==="ArrowDown"||e==="ArrowUp"||e==="Enter"){const t=se.querySelector("ol");if(!t)return;let i=t.querySelector(`.${K}`);if(e==="Enter"){const o=i.querySelector("a");(/Mac|iPhone/.test(navigator.platform)?r.metaKey:r.ctrlKey)?open(o.href,"_blank"):o.click();return}i.classList.remove(K),e==="ArrowUp"?i=i.previousElementSibling??t.lastElementChild:i=i.nextElementSibling??t.firstElementChild,i.classList.add(K),i.scrollIntoView({block:"nearest"})}});