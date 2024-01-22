// Compiled by ClojureScript 1.10.520 {}
goog.provide('io.tronica.creative_core.core');
goog.require('cljs.core');
io.tronica.creative_core.core.in_array_QMARK_ = (function io$tronica$creative_core$core$in_array_QMARK_(array,obj){
return cljs.core.not_EQ_.call(null,null,cljs.core.some.call(null,(function (p1__22031_SHARP_){
return cljs.core._EQ_.call(null,p1__22031_SHARP_,obj);
}),array));
});
io.tronica.creative_core.core.mutable = (function io$tronica$creative_core$core$mutable(obj){
return cljs.core.volatile_BANG_.call(null,obj);
});
io.tronica.creative_core.core.mset_BANG_ = (function io$tronica$creative_core$core$mset_BANG_(var_args){
var G__22033 = arguments.length;
switch (G__22033) {
case 2:
return io.tronica.creative_core.core.mset_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return io.tronica.creative_core.core.mset_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

io.tronica.creative_core.core.mset_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (v,val){
cljs.core.vreset_BANG_.call(null,v,val);

return v;
});

io.tronica.creative_core.core.mset_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (v,k,val){
cljs.core._vreset_BANG_.call(null,v,cljs.core.assoc.call(null,cljs.core._deref.call(null,v),k,val));

return v;
});

io.tronica.creative_core.core.mset_BANG_.cljs$lang$maxFixedArity = 3;

io.tronica.creative_core.core.mget = (function io$tronica$creative_core$core$mget(var_args){
var G__22036 = arguments.length;
switch (G__22036) {
case 1:
return io.tronica.creative_core.core.mget.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return io.tronica.creative_core.core.mget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

io.tronica.creative_core.core.mget.cljs$core$IFn$_invoke$arity$1 = (function (v){
return cljs.core.deref.call(null,v);
});

io.tronica.creative_core.core.mget.cljs$core$IFn$_invoke$arity$2 = (function (v,k){
return cljs.core.get.call(null,cljs.core.deref.call(null,v),k);
});

io.tronica.creative_core.core.mget.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=core.js.map?rel=1704783951034
