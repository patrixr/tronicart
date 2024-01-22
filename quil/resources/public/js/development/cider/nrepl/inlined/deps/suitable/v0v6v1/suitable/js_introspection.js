// Compiled by ClojureScript 1.10.520 {}
goog.provide('cider.nrepl.inlined.deps.suitable.v0v6v1.suitable.js_introspection');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.object');
cider.nrepl.inlined.deps.suitable.v0v6v1.suitable.js_introspection.own_property_descriptors = (cljs.core.truth_("getOwnPropertyDescriptors" in Object)?(function (obj){
return Object.getOwnPropertyDescriptors(obj);
}):(function (obj){
return cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (key){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,Object.getOwnPropertyDescriptor(obj,key)], null);
}),Object.getOwnPropertyNames(obj))));
}));
cider.nrepl.inlined.deps.suitable.v0v6v1.suitable.js_introspection.properties_by_prototype = (function cider$nrepl$inlined$deps$suitable$v0v6v1$suitable$js_introspection$properties_by_prototype(obj){
var obj__$1 = obj;
var protos = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(obj__$1)){
var G__31695 = Object.getPrototypeOf(obj__$1);
var G__31696 = cljs.core.conj.call(null,protos,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"props","props",453281727),cider.nrepl.inlined.deps.suitable.v0v6v1.suitable.js_introspection.own_property_descriptors.call(null,obj__$1)], null));
obj__$1 = G__31695;
protos = G__31696;
continue;
} else {
return protos;
}
break;
}
});
cider.nrepl.inlined.deps.suitable.v0v6v1.suitable.js_introspection.property_names_and_types = (function cider$nrepl$inlined$deps$suitable$v0v6v1$suitable$js_introspection$property_names_and_types(var_args){
var G__31702 = arguments.length;
switch (G__31702) {
case 1:
return cider.nrepl.inlined.deps.suitable.v0v6v1.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cider.nrepl.inlined.deps.suitable.v0v6v1.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cider.nrepl.inlined.deps.suitable.v0v6v1.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$1 = (function (js_obj){
return cider.nrepl.inlined.deps.suitable.v0v6v1.suitable.js_introspection.property_names_and_types.call(null,js_obj,null);
});

cider.nrepl.inlined.deps.suitable.v0v6v1.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$2 = (function (js_obj,prefix){
var seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
var iter__4523__auto__ = ((function (seen){
return (function cider$nrepl$inlined$deps$suitable$v0v6v1$suitable$js_introspection$iter__31707(s__31708){
return (new cljs.core.LazySeq(null,((function (seen){
return (function (){
var s__31708__$1 = s__31708;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__31708__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var vec__31713 = cljs.core.first.call(null,xs__6292__auto__);
var i = cljs.core.nth.call(null,vec__31713,(0),null);
var map__31716 = cljs.core.nth.call(null,vec__31713,(1),null);
var map__31716__$1 = (((((!((map__31716 == null))))?(((((map__31716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31716):map__31716);
var _obj = cljs.core.get.call(null,map__31716__$1,new cljs.core.Keyword(null,"_obj","_obj",-592966725));
var props = cljs.core.get.call(null,map__31716__$1,new cljs.core.Keyword(null,"props","props",453281727));
var iterys__4519__auto__ = ((function (s__31708__$1,vec__31713,i,map__31716,map__31716__$1,_obj,props,xs__6292__auto__,temp__5735__auto__,seen){
return (function cider$nrepl$inlined$deps$suitable$v0v6v1$suitable$js_introspection$iter__31707_$_iter__31709(s__31710){
return (new cljs.core.LazySeq(null,((function (s__31708__$1,vec__31713,i,map__31716,map__31716__$1,_obj,props,xs__6292__auto__,temp__5735__auto__,seen){
return (function (){
var s__31710__$1 = s__31710;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__31710__$1);
if(temp__5735__auto____$1){
var s__31710__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31710__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__31710__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__31712 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__31711 = (0);
while(true){
if((i__31711 < size__4522__auto__)){
var key = cljs.core._nth.call(null,c__4521__auto__,i__31711);
if(((cljs.core.not.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,seen),key))) && (cljs.core.not.call(null,goog.object.get(goog.object.get(props,key),"enumerable"))) && (((cljs.core.empty_QMARK_.call(null,prefix)) || (clojure.string.starts_with_QMARK_.call(null,key,prefix)))))){
cljs.core.chunk_append.call(null,b__31712,(function (){var prop = goog.object.get(props,key);
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),key));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),key,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),i,new cljs.core.Keyword(null,"type","type",1174270348),(function (){try{var temp__5733__auto__ = (function (){var or__4131__auto__ = goog.object.get(prop,"value");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.apply.call(null,goog.object.get(prop,"get"),cljs.core.PersistentVector.EMPTY);
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var value = temp__5733__auto__;
if(cljs.core.fn_QMARK_.call(null,value)){
return "function";
} else {
return "var";
}
} else {
return "var";
}
}catch (e31719){if((e31719 instanceof Error)){
var _e = e31719;
return "var";
} else {
throw e31719;

}
}})()], null);
})());

var G__31725 = (i__31711 + (1));
i__31711 = G__31725;
continue;
} else {
var G__31727 = (i__31711 + (1));
i__31711 = G__31727;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31712),cider$nrepl$inlined$deps$suitable$v0v6v1$suitable$js_introspection$iter__31707_$_iter__31709.call(null,cljs.core.chunk_rest.call(null,s__31710__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31712),null);
}
} else {
var key = cljs.core.first.call(null,s__31710__$2);
if(((cljs.core.not.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,seen),key))) && (cljs.core.not.call(null,goog.object.get(goog.object.get(props,key),"enumerable"))) && (((cljs.core.empty_QMARK_.call(null,prefix)) || (clojure.string.starts_with_QMARK_.call(null,key,prefix)))))){
return cljs.core.cons.call(null,(function (){var prop = goog.object.get(props,key);
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),key));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),key,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),i,new cljs.core.Keyword(null,"type","type",1174270348),(function (){try{var temp__5733__auto__ = (function (){var or__4131__auto__ = goog.object.get(prop,"value");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.apply.call(null,goog.object.get(prop,"get"),cljs.core.PersistentVector.EMPTY);
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var value = temp__5733__auto__;
if(cljs.core.fn_QMARK_.call(null,value)){
return "function";
} else {
return "var";
}
} else {
return "var";
}
}catch (e31722){if((e31722 instanceof Error)){
var _e = e31722;
return "var";
} else {
throw e31722;

}
}})()], null);
})(),cider$nrepl$inlined$deps$suitable$v0v6v1$suitable$js_introspection$iter__31707_$_iter__31709.call(null,cljs.core.rest.call(null,s__31710__$2)));
} else {
var G__31729 = cljs.core.rest.call(null,s__31710__$2);
s__31710__$1 = G__31729;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__31708__$1,vec__31713,i,map__31716,map__31716__$1,_obj,props,xs__6292__auto__,temp__5735__auto__,seen))
,null,null));
});})(s__31708__$1,vec__31713,i,map__31716,map__31716__$1,_obj,props,xs__6292__auto__,temp__5735__auto__,seen))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.js_keys.call(null,props)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,cider$nrepl$inlined$deps$suitable$v0v6v1$suitable$js_introspection$iter__31707.call(null,cljs.core.rest.call(null,s__31708__$1)));
} else {
var G__31731 = cljs.core.rest.call(null,s__31708__$1);
s__31708__$1 = G__31731;
continue;
}
} else {
return null;
}
break;
}
});})(seen))
,null,null));
});})(seen))
;
return iter__4523__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cider.nrepl.inlined.deps.suitable.v0v6v1.suitable.js_introspection.properties_by_prototype.call(null,js_obj)));
});

cider.nrepl.inlined.deps.suitable.v0v6v1.suitable.js_introspection.property_names_and_types.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=js_introspection.js.map?rel=1704787797839
