// Compiled by ClojureScript 1.10.520 {}
goog.provide('io.tronica.bootstrap.launcher');
goog.require('cljs.core');
goog.require('io.tronica.sketches.watercolors');
io.tronica.bootstrap.launcher.sketch_list = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watercolors","watercolors",-1044837180),io.tronica.sketches.watercolors.run_sketch], null);
io.tronica.bootstrap.launcher.invoke = (function io$tronica$bootstrap$launcher$invoke(fn){
return fn.call(null);
});
io.tronica.bootstrap.launcher.js_array = (function io$tronica$bootstrap$launcher$js_array(arr){
return cljs.core.clj__GT_js.call(null,arr);
});
io.tronica.bootstrap.launcher.start_sketch = (function io$tronica$bootstrap$launcher$start_sketch(name){
cljs.core.prn.call(null,["Starting sketch: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));

return io.tronica.bootstrap.launcher.invoke.call(null,cljs.core.get.call(null,io.tronica.bootstrap.launcher.sketch_list,cljs.core.keyword.call(null,name)));
});
io.tronica.bootstrap.launcher.list_sketches = (function io$tronica$bootstrap$launcher$list_sketches(){
return io.tronica.bootstrap.launcher.js_array.call(null,cljs.core.map.call(null,(function (p1__34891_SHARP_){
return cljs.core.name.call(null,p1__34891_SHARP_);
}),cljs.core.keys.call(null,io.tronica.bootstrap.launcher.sketch_list)));
});

//# sourceMappingURL=launcher.js.map?rel=1704789642849
