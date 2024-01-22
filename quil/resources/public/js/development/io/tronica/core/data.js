// Compiled by ClojureScript 1.10.520 {}
goog.provide('io.tronica.core.data');
goog.require('cljs.core');
io.tronica.core.data.in_array_QMARK_ = (function io$tronica$core$data$in_array_QMARK_(array,obj){
return cljs.core.not_EQ_.call(null,null,cljs.core.some.call(null,(function (p1__27134_SHARP_){
return cljs.core._EQ_.call(null,p1__27134_SHARP_,obj);
}),array));
});
io.tronica.core.data.mutable = (function io$tronica$core$data$mutable(obj){
return cljs.core.volatile_BANG_.call(null,obj);
});
io.tronica.core.data.mset_BANG_ = (function io$tronica$core$data$mset_BANG_(var_args){
var G__27136 = arguments.length;
switch (G__27136) {
case 2:
return io.tronica.core.data.mset_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return io.tronica.core.data.mset_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

io.tronica.core.data.mset_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (v,val){
cljs.core.vreset_BANG_.call(null,v,val);

return v;
});

io.tronica.core.data.mset_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (v,k,val){
cljs.core._vreset_BANG_.call(null,v,cljs.core.assoc.call(null,cljs.core._deref.call(null,v),k,val));

return v;
});

io.tronica.core.data.mset_BANG_.cljs$lang$maxFixedArity = 3;

io.tronica.core.data.mget = (function io$tronica$core$data$mget(var_args){
var G__27139 = arguments.length;
switch (G__27139) {
case 1:
return io.tronica.core.data.mget.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return io.tronica.core.data.mget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

io.tronica.core.data.mget.cljs$core$IFn$_invoke$arity$1 = (function (v){
return cljs.core.deref.call(null,v);
});

io.tronica.core.data.mget.cljs$core$IFn$_invoke$arity$2 = (function (v,k){
return cljs.core.get.call(null,cljs.core.deref.call(null,v),k);
});

io.tronica.core.data.mget.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=data.js.map?rel=1704785441366
