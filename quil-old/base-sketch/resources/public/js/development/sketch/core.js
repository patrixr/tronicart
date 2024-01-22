// Compiled by ClojureScript 1.10.520 {}
goog.provide('sketch.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
sketch.core.setup = (function sketch$core$setup(){
quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(0),new cljs.core.Keyword(null,"angle","angle",1622094254),(0)], null);
});
sketch.core.update_state = (function sketch$core$update_state(state){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state) + 0.7),(255)),new cljs.core.Keyword(null,"angle","angle",1622094254),(new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state) + 0.1)], null);
});
sketch.core.draw_state = (function sketch$core$draw_state(state){
quil.core.background.call(null,(240));

quil.core.fill.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state),(255),(255));

var angle = new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state);
var x = ((150) * quil.core.cos.call(null,angle));
var y = ((150) * quil.core.sin.call(null,angle));
var tr__21761__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__21761__auto__);

return quil.core.ellipse.call(null,x,y,(100),(100));
}finally {quil.core.pop_matrix.call(null);
}});
sketch.core.run_sketch = (function sketch$core$run_sketch(){
sketch.core.sketch = (function sketch$core$run_sketch_$_sketch(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"sketch",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,sketch.core.update_state))?(function() { 
var G__21876__delegate = function (args){
return cljs.core.apply.call(null,sketch.core.update_state,args);
};
var G__21876 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21877__i = 0, G__21877__a = new Array(arguments.length -  0);
while (G__21877__i < G__21877__a.length) {G__21877__a[G__21877__i] = arguments[G__21877__i + 0]; ++G__21877__i;}
  args = new cljs.core.IndexedSeq(G__21877__a,0,null);
} 
return G__21876__delegate.call(this,args);};
G__21876.cljs$lang$maxFixedArity = 0;
G__21876.cljs$lang$applyTo = (function (arglist__21878){
var args = cljs.core.seq(arglist__21878);
return G__21876__delegate(args);
});
G__21876.cljs$core$IFn$_invoke$arity$variadic = G__21876__delegate;
return G__21876;
})()
:sketch.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,sketch.core.setup))?(function() { 
var G__21879__delegate = function (args){
return cljs.core.apply.call(null,sketch.core.setup,args);
};
var G__21879 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21880__i = 0, G__21880__a = new Array(arguments.length -  0);
while (G__21880__i < G__21880__a.length) {G__21880__a[G__21880__i] = arguments[G__21880__i + 0]; ++G__21880__i;}
  args = new cljs.core.IndexedSeq(G__21880__a,0,null);
} 
return G__21879__delegate.call(this,args);};
G__21879.cljs$lang$maxFixedArity = 0;
G__21879.cljs$lang$applyTo = (function (arglist__21881){
var args = cljs.core.seq(arglist__21881);
return G__21879__delegate(args);
});
G__21879.cljs$core$IFn$_invoke$arity$variadic = G__21879__delegate;
return G__21879;
})()
:sketch.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,sketch.core.draw_state))?(function() { 
var G__21882__delegate = function (args){
return cljs.core.apply.call(null,sketch.core.draw_state,args);
};
var G__21882 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21883__i = 0, G__21883__a = new Array(arguments.length -  0);
while (G__21883__i < G__21883__a.length) {G__21883__a[G__21883__i] = arguments[G__21883__i + 0]; ++G__21883__i;}
  args = new cljs.core.IndexedSeq(G__21883__a,0,null);
} 
return G__21882__delegate.call(this,args);};
G__21882.cljs$lang$maxFixedArity = 0;
G__21882.cljs$lang$applyTo = (function (arglist__21884){
var args = cljs.core.seq(arglist__21884);
return G__21882__delegate(args);
});
G__21882.cljs$core$IFn$_invoke$arity$variadic = G__21882__delegate;
return G__21882;
})()
:sketch.core.draw_state));
});
goog.exportSymbol('sketch.core.sketch', sketch.core.sketch);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__20916__20917__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__20916__20917__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),sketch.core.sketch,new cljs.core.Keyword(null,"host-id","host-id",742376279),"sketch"], null));
}
});
goog.exportSymbol('sketch.core.run_sketch', sketch.core.run_sketch);

//# sourceMappingURL=core.js.map?rel=1704617301348
