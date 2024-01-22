// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4131__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27230_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27230_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__27231 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27232 = null;
var count__27233 = (0);
var i__27234 = (0);
while(true){
if((i__27234 < count__27233)){
var n = cljs.core._nth.call(null,chunk__27232,i__27234);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__27235 = seq__27231;
var G__27236 = chunk__27232;
var G__27237 = count__27233;
var G__27238 = (i__27234 + (1));
seq__27231 = G__27235;
chunk__27232 = G__27236;
count__27233 = G__27237;
i__27234 = G__27238;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__27231);
if(temp__5735__auto__){
var seq__27231__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27231__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__27231__$1);
var G__27239 = cljs.core.chunk_rest.call(null,seq__27231__$1);
var G__27240 = c__4550__auto__;
var G__27241 = cljs.core.count.call(null,c__4550__auto__);
var G__27242 = (0);
seq__27231 = G__27239;
chunk__27232 = G__27240;
count__27233 = G__27241;
i__27234 = G__27242;
continue;
} else {
var n = cljs.core.first.call(null,seq__27231__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__27243 = cljs.core.next.call(null,seq__27231__$1);
var G__27244 = null;
var G__27245 = (0);
var G__27246 = (0);
seq__27231 = G__27243;
chunk__27232 = G__27244;
count__27233 = G__27245;
i__27234 = G__27246;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__27247){
var vec__27248 = p__27247;
var _ = cljs.core.nth.call(null,vec__27248,(0),null);
var v = cljs.core.nth.call(null,vec__27248,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__27251){
var vec__27252 = p__27251;
var k = cljs.core.nth.call(null,vec__27252,(0),null);
var v = cljs.core.nth.call(null,vec__27252,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__27264_27272 = cljs.core.seq.call(null,deps);
var chunk__27265_27273 = null;
var count__27266_27274 = (0);
var i__27267_27275 = (0);
while(true){
if((i__27267_27275 < count__27266_27274)){
var dep_27276 = cljs.core._nth.call(null,chunk__27265_27273,i__27267_27275);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_27276;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27276));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27276,(depth + (1)),state);
} else {
}


var G__27277 = seq__27264_27272;
var G__27278 = chunk__27265_27273;
var G__27279 = count__27266_27274;
var G__27280 = (i__27267_27275 + (1));
seq__27264_27272 = G__27277;
chunk__27265_27273 = G__27278;
count__27266_27274 = G__27279;
i__27267_27275 = G__27280;
continue;
} else {
var temp__5735__auto___27281 = cljs.core.seq.call(null,seq__27264_27272);
if(temp__5735__auto___27281){
var seq__27264_27282__$1 = temp__5735__auto___27281;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27264_27282__$1)){
var c__4550__auto___27283 = cljs.core.chunk_first.call(null,seq__27264_27282__$1);
var G__27284 = cljs.core.chunk_rest.call(null,seq__27264_27282__$1);
var G__27285 = c__4550__auto___27283;
var G__27286 = cljs.core.count.call(null,c__4550__auto___27283);
var G__27287 = (0);
seq__27264_27272 = G__27284;
chunk__27265_27273 = G__27285;
count__27266_27274 = G__27286;
i__27267_27275 = G__27287;
continue;
} else {
var dep_27288 = cljs.core.first.call(null,seq__27264_27282__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_27288;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27288));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27288,(depth + (1)),state);
} else {
}


var G__27289 = cljs.core.next.call(null,seq__27264_27282__$1);
var G__27290 = null;
var G__27291 = (0);
var G__27292 = (0);
seq__27264_27272 = G__27289;
chunk__27265_27273 = G__27290;
count__27266_27274 = G__27291;
i__27267_27275 = G__27292;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27268){
var vec__27269 = p__27268;
var seq__27270 = cljs.core.seq.call(null,vec__27269);
var first__27271 = cljs.core.first.call(null,seq__27270);
var seq__27270__$1 = cljs.core.next.call(null,seq__27270);
var x = first__27271;
var xs = seq__27270__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27269,seq__27270,first__27271,seq__27270__$1,x,xs,get_deps__$1){
return (function (p1__27255_SHARP_){
return clojure.set.difference.call(null,p1__27255_SHARP_,x);
});})(vec__27269,seq__27270,first__27271,seq__27270__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__27293 = cljs.core.seq.call(null,provides);
var chunk__27294 = null;
var count__27295 = (0);
var i__27296 = (0);
while(true){
if((i__27296 < count__27295)){
var prov = cljs.core._nth.call(null,chunk__27294,i__27296);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27305_27313 = cljs.core.seq.call(null,requires);
var chunk__27306_27314 = null;
var count__27307_27315 = (0);
var i__27308_27316 = (0);
while(true){
if((i__27308_27316 < count__27307_27315)){
var req_27317 = cljs.core._nth.call(null,chunk__27306_27314,i__27308_27316);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27317,prov);


var G__27318 = seq__27305_27313;
var G__27319 = chunk__27306_27314;
var G__27320 = count__27307_27315;
var G__27321 = (i__27308_27316 + (1));
seq__27305_27313 = G__27318;
chunk__27306_27314 = G__27319;
count__27307_27315 = G__27320;
i__27308_27316 = G__27321;
continue;
} else {
var temp__5735__auto___27322 = cljs.core.seq.call(null,seq__27305_27313);
if(temp__5735__auto___27322){
var seq__27305_27323__$1 = temp__5735__auto___27322;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27305_27323__$1)){
var c__4550__auto___27324 = cljs.core.chunk_first.call(null,seq__27305_27323__$1);
var G__27325 = cljs.core.chunk_rest.call(null,seq__27305_27323__$1);
var G__27326 = c__4550__auto___27324;
var G__27327 = cljs.core.count.call(null,c__4550__auto___27324);
var G__27328 = (0);
seq__27305_27313 = G__27325;
chunk__27306_27314 = G__27326;
count__27307_27315 = G__27327;
i__27308_27316 = G__27328;
continue;
} else {
var req_27329 = cljs.core.first.call(null,seq__27305_27323__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27329,prov);


var G__27330 = cljs.core.next.call(null,seq__27305_27323__$1);
var G__27331 = null;
var G__27332 = (0);
var G__27333 = (0);
seq__27305_27313 = G__27330;
chunk__27306_27314 = G__27331;
count__27307_27315 = G__27332;
i__27308_27316 = G__27333;
continue;
}
} else {
}
}
break;
}


var G__27334 = seq__27293;
var G__27335 = chunk__27294;
var G__27336 = count__27295;
var G__27337 = (i__27296 + (1));
seq__27293 = G__27334;
chunk__27294 = G__27335;
count__27295 = G__27336;
i__27296 = G__27337;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__27293);
if(temp__5735__auto__){
var seq__27293__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27293__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__27293__$1);
var G__27338 = cljs.core.chunk_rest.call(null,seq__27293__$1);
var G__27339 = c__4550__auto__;
var G__27340 = cljs.core.count.call(null,c__4550__auto__);
var G__27341 = (0);
seq__27293 = G__27338;
chunk__27294 = G__27339;
count__27295 = G__27340;
i__27296 = G__27341;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27293__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27309_27342 = cljs.core.seq.call(null,requires);
var chunk__27310_27343 = null;
var count__27311_27344 = (0);
var i__27312_27345 = (0);
while(true){
if((i__27312_27345 < count__27311_27344)){
var req_27346 = cljs.core._nth.call(null,chunk__27310_27343,i__27312_27345);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27346,prov);


var G__27347 = seq__27309_27342;
var G__27348 = chunk__27310_27343;
var G__27349 = count__27311_27344;
var G__27350 = (i__27312_27345 + (1));
seq__27309_27342 = G__27347;
chunk__27310_27343 = G__27348;
count__27311_27344 = G__27349;
i__27312_27345 = G__27350;
continue;
} else {
var temp__5735__auto___27351__$1 = cljs.core.seq.call(null,seq__27309_27342);
if(temp__5735__auto___27351__$1){
var seq__27309_27352__$1 = temp__5735__auto___27351__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27309_27352__$1)){
var c__4550__auto___27353 = cljs.core.chunk_first.call(null,seq__27309_27352__$1);
var G__27354 = cljs.core.chunk_rest.call(null,seq__27309_27352__$1);
var G__27355 = c__4550__auto___27353;
var G__27356 = cljs.core.count.call(null,c__4550__auto___27353);
var G__27357 = (0);
seq__27309_27342 = G__27354;
chunk__27310_27343 = G__27355;
count__27311_27344 = G__27356;
i__27312_27345 = G__27357;
continue;
} else {
var req_27358 = cljs.core.first.call(null,seq__27309_27352__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27358,prov);


var G__27359 = cljs.core.next.call(null,seq__27309_27352__$1);
var G__27360 = null;
var G__27361 = (0);
var G__27362 = (0);
seq__27309_27342 = G__27359;
chunk__27310_27343 = G__27360;
count__27311_27344 = G__27361;
i__27312_27345 = G__27362;
continue;
}
} else {
}
}
break;
}


var G__27363 = cljs.core.next.call(null,seq__27293__$1);
var G__27364 = null;
var G__27365 = (0);
var G__27366 = (0);
seq__27293 = G__27363;
chunk__27294 = G__27364;
count__27295 = G__27365;
i__27296 = G__27366;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__27367_27371 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27368_27372 = null;
var count__27369_27373 = (0);
var i__27370_27374 = (0);
while(true){
if((i__27370_27374 < count__27369_27373)){
var ns_27375 = cljs.core._nth.call(null,chunk__27368_27372,i__27370_27374);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27375);


var G__27376 = seq__27367_27371;
var G__27377 = chunk__27368_27372;
var G__27378 = count__27369_27373;
var G__27379 = (i__27370_27374 + (1));
seq__27367_27371 = G__27376;
chunk__27368_27372 = G__27377;
count__27369_27373 = G__27378;
i__27370_27374 = G__27379;
continue;
} else {
var temp__5735__auto___27380 = cljs.core.seq.call(null,seq__27367_27371);
if(temp__5735__auto___27380){
var seq__27367_27381__$1 = temp__5735__auto___27380;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27367_27381__$1)){
var c__4550__auto___27382 = cljs.core.chunk_first.call(null,seq__27367_27381__$1);
var G__27383 = cljs.core.chunk_rest.call(null,seq__27367_27381__$1);
var G__27384 = c__4550__auto___27382;
var G__27385 = cljs.core.count.call(null,c__4550__auto___27382);
var G__27386 = (0);
seq__27367_27371 = G__27383;
chunk__27368_27372 = G__27384;
count__27369_27373 = G__27385;
i__27370_27374 = G__27386;
continue;
} else {
var ns_27387 = cljs.core.first.call(null,seq__27367_27381__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27387);


var G__27388 = cljs.core.next.call(null,seq__27367_27381__$1);
var G__27389 = null;
var G__27390 = (0);
var G__27391 = (0);
seq__27367_27371 = G__27388;
chunk__27368_27372 = G__27389;
count__27369_27373 = G__27390;
i__27370_27374 = G__27391;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4131__auto__ = goog.require__;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__27392__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27392 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27393__i = 0, G__27393__a = new Array(arguments.length -  0);
while (G__27393__i < G__27393__a.length) {G__27393__a[G__27393__i] = arguments[G__27393__i + 0]; ++G__27393__i;}
  args = new cljs.core.IndexedSeq(G__27393__a,0,null);
} 
return G__27392__delegate.call(this,args);};
G__27392.cljs$lang$maxFixedArity = 0;
G__27392.cljs$lang$applyTo = (function (arglist__27394){
var args = cljs.core.seq(arglist__27394);
return G__27392__delegate(args);
});
G__27392.cljs$core$IFn$_invoke$arity$variadic = G__27392__delegate;
return G__27392;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__27395_SHARP_,p2__27396_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27395_SHARP_)),p2__27396_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__27397_SHARP_,p2__27398_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27397_SHARP_),p2__27398_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__27399 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__27399.addCallback(((function (G__27399){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__27399))
);

G__27399.addErrback(((function (G__27399){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__27399))
);

return G__27399;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e27400){if((e27400 instanceof Error)){
var e = e27400;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27400;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e27401){if((e27401 instanceof Error)){
var e = e27401;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27401;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27402 = cljs.core._EQ_;
var expr__27403 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27402.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27403))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__27402.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27403))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__27402.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__27403))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__27402,expr__27403){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27402,expr__27403))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27405,callback){
var map__27406 = p__27405;
var map__27406__$1 = (((((!((map__27406 == null))))?(((((map__27406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27406.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27406):map__27406);
var file_msg = map__27406__$1;
var request_url = cljs.core.get.call(null,map__27406__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__27406,map__27406__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27406,map__27406__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__23789__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23789__auto__){
return (function (){
var f__23790__auto__ = (function (){var switch__23694__auto__ = ((function (c__23789__auto__){
return (function (state_27444){
var state_val_27445 = (state_27444[(1)]);
if((state_val_27445 === (7))){
var inst_27440 = (state_27444[(2)]);
var state_27444__$1 = state_27444;
var statearr_27446_27472 = state_27444__$1;
(statearr_27446_27472[(2)] = inst_27440);

(statearr_27446_27472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27445 === (1))){
var state_27444__$1 = state_27444;
var statearr_27447_27473 = state_27444__$1;
(statearr_27447_27473[(2)] = null);

(statearr_27447_27473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27445 === (4))){
var inst_27410 = (state_27444[(7)]);
var inst_27410__$1 = (state_27444[(2)]);
var state_27444__$1 = (function (){var statearr_27448 = state_27444;
(statearr_27448[(7)] = inst_27410__$1);

return statearr_27448;
})();
if(cljs.core.truth_(inst_27410__$1)){
var statearr_27449_27474 = state_27444__$1;
(statearr_27449_27474[(1)] = (5));

} else {
var statearr_27450_27475 = state_27444__$1;
(statearr_27450_27475[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27445 === (15))){
var inst_27423 = (state_27444[(8)]);
var inst_27425 = (state_27444[(9)]);
var inst_27427 = inst_27425.call(null,inst_27423);
var state_27444__$1 = state_27444;
var statearr_27451_27476 = state_27444__$1;
(statearr_27451_27476[(2)] = inst_27427);

(statearr_27451_27476[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27445 === (13))){
var inst_27434 = (state_27444[(2)]);
var state_27444__$1 = state_27444;
var statearr_27452_27477 = state_27444__$1;
(statearr_27452_27477[(2)] = inst_27434);

(statearr_27452_27477[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27445 === (6))){
var state_27444__$1 = state_27444;
var statearr_27453_27478 = state_27444__$1;
(statearr_27453_27478[(2)] = null);

(statearr_27453_27478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27445 === (17))){
var inst_27431 = (state_27444[(2)]);
var state_27444__$1 = state_27444;
var statearr_27454_27479 = state_27444__$1;
(statearr_27454_27479[(2)] = inst_27431);

(statearr_27454_27479[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27445 === (3))){
var inst_27442 = (state_27444[(2)]);
var state_27444__$1 = state_27444;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27444__$1,inst_27442);
} else {
if((state_val_27445 === (12))){
var state_27444__$1 = state_27444;
var statearr_27455_27480 = state_27444__$1;
(statearr_27455_27480[(2)] = null);

(statearr_27455_27480[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27445 === (2))){
var state_27444__$1 = state_27444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27444__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27445 === (11))){
var inst_27415 = (state_27444[(10)]);
var inst_27421 = figwheel.client.file_reloading.blocking_load.call(null,inst_27415);
var state_27444__$1 = state_27444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27444__$1,(14),inst_27421);
} else {
if((state_val_27445 === (9))){
var inst_27415 = (state_27444[(10)]);
var state_27444__$1 = state_27444;
if(cljs.core.truth_(inst_27415)){
var statearr_27456_27481 = state_27444__$1;
(statearr_27456_27481[(1)] = (11));

} else {
var statearr_27457_27482 = state_27444__$1;
(statearr_27457_27482[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27445 === (5))){
var inst_27410 = (state_27444[(7)]);
var inst_27416 = (state_27444[(11)]);
var inst_27415 = cljs.core.nth.call(null,inst_27410,(0),null);
var inst_27416__$1 = cljs.core.nth.call(null,inst_27410,(1),null);
var state_27444__$1 = (function (){var statearr_27458 = state_27444;
(statearr_27458[(10)] = inst_27415);

(statearr_27458[(11)] = inst_27416__$1);

return statearr_27458;
})();
if(cljs.core.truth_(inst_27416__$1)){
var statearr_27459_27483 = state_27444__$1;
(statearr_27459_27483[(1)] = (8));

} else {
var statearr_27460_27484 = state_27444__$1;
(statearr_27460_27484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27445 === (14))){
var inst_27415 = (state_27444[(10)]);
var inst_27425 = (state_27444[(9)]);
var inst_27423 = (state_27444[(2)]);
var inst_27424 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27425__$1 = cljs.core.get.call(null,inst_27424,inst_27415);
var state_27444__$1 = (function (){var statearr_27461 = state_27444;
(statearr_27461[(8)] = inst_27423);

(statearr_27461[(9)] = inst_27425__$1);

return statearr_27461;
})();
if(cljs.core.truth_(inst_27425__$1)){
var statearr_27462_27485 = state_27444__$1;
(statearr_27462_27485[(1)] = (15));

} else {
var statearr_27463_27486 = state_27444__$1;
(statearr_27463_27486[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27445 === (16))){
var inst_27423 = (state_27444[(8)]);
var inst_27429 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27423);
var state_27444__$1 = state_27444;
var statearr_27464_27487 = state_27444__$1;
(statearr_27464_27487[(2)] = inst_27429);

(statearr_27464_27487[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27445 === (10))){
var inst_27436 = (state_27444[(2)]);
var state_27444__$1 = (function (){var statearr_27465 = state_27444;
(statearr_27465[(12)] = inst_27436);

return statearr_27465;
})();
var statearr_27466_27488 = state_27444__$1;
(statearr_27466_27488[(2)] = null);

(statearr_27466_27488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27445 === (8))){
var inst_27416 = (state_27444[(11)]);
var inst_27418 = eval(inst_27416);
var state_27444__$1 = state_27444;
var statearr_27467_27489 = state_27444__$1;
(statearr_27467_27489[(2)] = inst_27418);

(statearr_27467_27489[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23789__auto__))
;
return ((function (switch__23694__auto__,c__23789__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23695__auto__ = null;
var figwheel$client$file_reloading$state_machine__23695__auto____0 = (function (){
var statearr_27468 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27468[(0)] = figwheel$client$file_reloading$state_machine__23695__auto__);

(statearr_27468[(1)] = (1));

return statearr_27468;
});
var figwheel$client$file_reloading$state_machine__23695__auto____1 = (function (state_27444){
while(true){
var ret_value__23696__auto__ = (function (){try{while(true){
var result__23697__auto__ = switch__23694__auto__.call(null,state_27444);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23697__auto__;
}
break;
}
}catch (e27469){if((e27469 instanceof Object)){
var ex__23698__auto__ = e27469;
var statearr_27470_27490 = state_27444;
(statearr_27470_27490[(5)] = ex__23698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27491 = state_27444;
state_27444 = G__27491;
continue;
} else {
return ret_value__23696__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23695__auto__ = function(state_27444){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23695__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23695__auto____1.call(this,state_27444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23695__auto____0;
figwheel$client$file_reloading$state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23695__auto____1;
return figwheel$client$file_reloading$state_machine__23695__auto__;
})()
;})(switch__23694__auto__,c__23789__auto__))
})();
var state__23791__auto__ = (function (){var statearr_27471 = f__23790__auto__.call(null);
(statearr_27471[(6)] = c__23789__auto__);

return statearr_27471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23791__auto__);
});})(c__23789__auto__))
);

return c__23789__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__27493 = arguments.length;
switch (G__27493) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27495,callback){
var map__27496 = p__27495;
var map__27496__$1 = (((((!((map__27496 == null))))?(((((map__27496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27496):map__27496);
var file_msg = map__27496__$1;
var namespace = cljs.core.get.call(null,map__27496__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27496,map__27496__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27496,map__27496__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__27498){
var map__27499 = p__27498;
var map__27499__$1 = (((((!((map__27499 == null))))?(((((map__27499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27499):map__27499);
var file_msg = map__27499__$1;
var namespace = cljs.core.get.call(null,map__27499__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27501){
var map__27502 = p__27501;
var map__27502__$1 = (((((!((map__27502 == null))))?(((((map__27502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27502):map__27502);
var file_msg = map__27502__$1;
var namespace = cljs.core.get.call(null,map__27502__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4120__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4120__auto__){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27504,callback){
var map__27505 = p__27504;
var map__27505__$1 = (((((!((map__27505 == null))))?(((((map__27505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27505):map__27505);
var file_msg = map__27505__$1;
var request_url = cljs.core.get.call(null,map__27505__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27505__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__23789__auto___27555 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23789__auto___27555,out){
return (function (){
var f__23790__auto__ = (function (){var switch__23694__auto__ = ((function (c__23789__auto___27555,out){
return (function (state_27540){
var state_val_27541 = (state_27540[(1)]);
if((state_val_27541 === (1))){
var inst_27514 = cljs.core.seq.call(null,files);
var inst_27515 = cljs.core.first.call(null,inst_27514);
var inst_27516 = cljs.core.next.call(null,inst_27514);
var inst_27517 = files;
var state_27540__$1 = (function (){var statearr_27542 = state_27540;
(statearr_27542[(7)] = inst_27515);

(statearr_27542[(8)] = inst_27517);

(statearr_27542[(9)] = inst_27516);

return statearr_27542;
})();
var statearr_27543_27556 = state_27540__$1;
(statearr_27543_27556[(2)] = null);

(statearr_27543_27556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27541 === (2))){
var inst_27517 = (state_27540[(8)]);
var inst_27523 = (state_27540[(10)]);
var inst_27522 = cljs.core.seq.call(null,inst_27517);
var inst_27523__$1 = cljs.core.first.call(null,inst_27522);
var inst_27524 = cljs.core.next.call(null,inst_27522);
var inst_27525 = (inst_27523__$1 == null);
var inst_27526 = cljs.core.not.call(null,inst_27525);
var state_27540__$1 = (function (){var statearr_27544 = state_27540;
(statearr_27544[(10)] = inst_27523__$1);

(statearr_27544[(11)] = inst_27524);

return statearr_27544;
})();
if(inst_27526){
var statearr_27545_27557 = state_27540__$1;
(statearr_27545_27557[(1)] = (4));

} else {
var statearr_27546_27558 = state_27540__$1;
(statearr_27546_27558[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27541 === (3))){
var inst_27538 = (state_27540[(2)]);
var state_27540__$1 = state_27540;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27540__$1,inst_27538);
} else {
if((state_val_27541 === (4))){
var inst_27523 = (state_27540[(10)]);
var inst_27528 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27523);
var state_27540__$1 = state_27540;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27540__$1,(7),inst_27528);
} else {
if((state_val_27541 === (5))){
var inst_27534 = cljs.core.async.close_BANG_.call(null,out);
var state_27540__$1 = state_27540;
var statearr_27547_27559 = state_27540__$1;
(statearr_27547_27559[(2)] = inst_27534);

(statearr_27547_27559[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27541 === (6))){
var inst_27536 = (state_27540[(2)]);
var state_27540__$1 = state_27540;
var statearr_27548_27560 = state_27540__$1;
(statearr_27548_27560[(2)] = inst_27536);

(statearr_27548_27560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27541 === (7))){
var inst_27524 = (state_27540[(11)]);
var inst_27530 = (state_27540[(2)]);
var inst_27531 = cljs.core.async.put_BANG_.call(null,out,inst_27530);
var inst_27517 = inst_27524;
var state_27540__$1 = (function (){var statearr_27549 = state_27540;
(statearr_27549[(8)] = inst_27517);

(statearr_27549[(12)] = inst_27531);

return statearr_27549;
})();
var statearr_27550_27561 = state_27540__$1;
(statearr_27550_27561[(2)] = null);

(statearr_27550_27561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__23789__auto___27555,out))
;
return ((function (switch__23694__auto__,c__23789__auto___27555,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23695__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23695__auto____0 = (function (){
var statearr_27551 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27551[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23695__auto__);

(statearr_27551[(1)] = (1));

return statearr_27551;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23695__auto____1 = (function (state_27540){
while(true){
var ret_value__23696__auto__ = (function (){try{while(true){
var result__23697__auto__ = switch__23694__auto__.call(null,state_27540);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23697__auto__;
}
break;
}
}catch (e27552){if((e27552 instanceof Object)){
var ex__23698__auto__ = e27552;
var statearr_27553_27562 = state_27540;
(statearr_27553_27562[(5)] = ex__23698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27540);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27563 = state_27540;
state_27540 = G__27563;
continue;
} else {
return ret_value__23696__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23695__auto__ = function(state_27540){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23695__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23695__auto____1.call(this,state_27540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23695__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23695__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23695__auto__;
})()
;})(switch__23694__auto__,c__23789__auto___27555,out))
})();
var state__23791__auto__ = (function (){var statearr_27554 = f__23790__auto__.call(null);
(statearr_27554[(6)] = c__23789__auto___27555);

return statearr_27554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23791__auto__);
});})(c__23789__auto___27555,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27564,opts){
var map__27565 = p__27564;
var map__27565__$1 = (((((!((map__27565 == null))))?(((((map__27565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27565):map__27565);
var eval_body = cljs.core.get.call(null,map__27565__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27565__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4120__auto__ = eval_body;
if(cljs.core.truth_(and__4120__auto__)){
return typeof eval_body === 'string';
} else {
return and__4120__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e27567){var e = e27567;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__27568_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27568_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5733__auto__)){
var file_msg = temp__5733__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__27569){
var vec__27570 = p__27569;
var k = cljs.core.nth.call(null,vec__27570,(0),null);
var v = cljs.core.nth.call(null,vec__27570,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27573){
var vec__27574 = p__27573;
var k = cljs.core.nth.call(null,vec__27574,(0),null);
var v = cljs.core.nth.call(null,vec__27574,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27580,p__27581){
var map__27582 = p__27580;
var map__27582__$1 = (((((!((map__27582 == null))))?(((((map__27582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27582):map__27582);
var opts = map__27582__$1;
var before_jsload = cljs.core.get.call(null,map__27582__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27582__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27582__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27583 = p__27581;
var map__27583__$1 = (((((!((map__27583 == null))))?(((((map__27583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27583):map__27583);
var msg = map__27583__$1;
var files = cljs.core.get.call(null,map__27583__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27583__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27583__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23789__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23789__auto__,map__27582,map__27582__$1,opts,before_jsload,on_jsload,reload_dependents,map__27583,map__27583__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__23790__auto__ = (function (){var switch__23694__auto__ = ((function (c__23789__auto__,map__27582,map__27582__$1,opts,before_jsload,on_jsload,reload_dependents,map__27583,map__27583__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27737){
var state_val_27738 = (state_27737[(1)]);
if((state_val_27738 === (7))){
var inst_27599 = (state_27737[(7)]);
var inst_27598 = (state_27737[(8)]);
var inst_27597 = (state_27737[(9)]);
var inst_27600 = (state_27737[(10)]);
var inst_27605 = cljs.core._nth.call(null,inst_27598,inst_27600);
var inst_27606 = figwheel.client.file_reloading.eval_body.call(null,inst_27605,opts);
var inst_27607 = (inst_27600 + (1));
var tmp27739 = inst_27599;
var tmp27740 = inst_27598;
var tmp27741 = inst_27597;
var inst_27597__$1 = tmp27741;
var inst_27598__$1 = tmp27740;
var inst_27599__$1 = tmp27739;
var inst_27600__$1 = inst_27607;
var state_27737__$1 = (function (){var statearr_27742 = state_27737;
(statearr_27742[(7)] = inst_27599__$1);

(statearr_27742[(8)] = inst_27598__$1);

(statearr_27742[(11)] = inst_27606);

(statearr_27742[(9)] = inst_27597__$1);

(statearr_27742[(10)] = inst_27600__$1);

return statearr_27742;
})();
var statearr_27743_27826 = state_27737__$1;
(statearr_27743_27826[(2)] = null);

(statearr_27743_27826[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27738 === (20))){
var inst_27640 = (state_27737[(12)]);
var inst_27648 = figwheel.client.file_reloading.sort_files.call(null,inst_27640);
var state_27737__$1 = state_27737;
var statearr_27744_27827 = state_27737__$1;
(statearr_27744_27827[(2)] = inst_27648);

(statearr_27744_27827[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27738 === (27))){
var state_27737__$1 = state_27737;
var statearr_27745_27828 = state_27737__$1;
(statearr_27745_27828[(2)] = null);

(statearr_27745_27828[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27738 === (1))){
var inst_27589 = (state_27737[(13)]);
var inst_27586 = before_jsload.call(null,files);
var inst_27587 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27588 = (function (){return ((function (inst_27589,inst_27586,inst_27587,state_val_27738,c__23789__auto__,map__27582,map__27582__$1,opts,before_jsload,on_jsload,reload_dependents,map__27583,map__27583__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27577_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27577_SHARP_);
});
;})(inst_27589,inst_27586,inst_27587,state_val_27738,c__23789__auto__,map__27582,map__27582__$1,opts,before_jsload,on_jsload,reload_dependents,map__27583,map__27583__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27589__$1 = cljs.core.filter.call(null,inst_27588,files);
var inst_27590 = cljs.core.not_empty.call(null,inst_27589__$1);
var state_27737__$1 = (function (){var statearr_27746 = state_27737;
(statearr_27746[(14)] = inst_27587);

(statearr_27746[(13)] = inst_27589__$1);

(statearr_27746[(15)] = inst_27586);

return statearr_27746;
})();
if(cljs.core.truth_(inst_27590)){
var statearr_27747_27829 = state_27737__$1;
(statearr_27747_27829[(1)] = (2));

} else {
var statearr_27748_27830 = state_27737__$1;
(statearr_27748_27830[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27738 === (24))){
var state_27737__$1 = state_27737;
var statearr_27749_27831 = state_27737__$1;
(statearr_27749_27831[(2)] = null);

(statearr_27749_27831[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27738 === (39))){
var inst_27690 = (state_27737[(16)]);
var state_27737__$1 = state_27737;
var statearr_27750_27832 = state_27737__$1;
(statearr_27750_27832[(2)] = inst_27690);

(statearr_27750_27832[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27738 === (46))){
var inst_27732 = (state_27737[(2)]);
var state_27737__$1 = state_27737;
var statearr_27751_27833 = state_27737__$1;
(statearr_27751_27833[(2)] = inst_27732);

(statearr_27751_27833[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27738 === (4))){
var inst_27634 = (state_27737[(2)]);
var inst_27635 = cljs.core.List.EMPTY;
var inst_27636 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27635);
var inst_27637 = (function (){return ((function (inst_27634,inst_27635,inst_27636,state_val_27738,c__23789__auto__,map__27582,map__27582__$1,opts,before_jsload,on_jsload,reload_dependents,map__27583,map__27583__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27578_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27578_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27578_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__27578_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_27634,inst_27635,inst_27636,state_val_27738,c__23789__auto__,map__27582,map__27582__$1,opts,before_jsload,on_jsload,reload_dependents,map__27583,map__27583__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27638 = cljs.core.filter.call(null,inst_27637,files);
var inst_27639 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27640 = cljs.core.concat.call(null,inst_27638,inst_27639);
var state_27737__$1 = (function (){var statearr_27752 = state_27737;
(statearr_27752[(12)] = inst_27640);

(statearr_27752[(17)] = inst_27636);

(statearr_27752[(18)] = inst_27634);

return statearr_27752;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27753_27834 = state_27737__$1;
(statearr_27753_27834[(1)] = (16));

} else {
var statearr_27754_27835 = state_27737__$1;
(statearr_27754_27835[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27738 === (15))){
var inst_27624 = (state_27737[(2)]);
var state_27737__$1 = state_27737;
var statearr_27755_27836 = state_27737__$1;
(statearr_27755_27836[(2)] = inst_27624);

(statearr_27755_27836[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27738 === (21))){
var inst_27650 = (state_27737[(19)]);
var inst_27650__$1 = (state_27737[(2)]);
var inst_27651 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27650__$1);
var state_27737__$1 = (function (){var statearr_27756 = state_27737;
(statearr_27756[(19)] = inst_27650__$1);

return statearr_27756;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27737__$1,(22),inst_27651);
} else {
if((state_val_27738 === (31))){
var inst_27735 = (state_27737[(2)]);
var state_27737__$1 = state_27737;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27737__$1,inst_27735);
} else {
if((state_val_27738 === (32))){
var inst_27690 = (state_27737[(16)]);
var inst_27695 = inst_27690.cljs$lang$protocol_mask$partition0$;
var inst_27696 = (inst_27695 & (64));
var inst_27697 = inst_27690.cljs$core$ISeq$;
var inst_27698 = (cljs.core.PROTOCOL_SENTINEL === inst_27697);
var inst_27699 = ((inst_27696) || (inst_27698));
var state_27737__$1 = state_27737;
if(cljs.core.truth_(inst_27699)){
var statearr_27757_27837 = state_27737__$1;
(statearr_27757_27837[(1)] = (35));

} else {
var statearr_27758_27838 = state_27737__$1;
(statearr_27758_27838[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27738 === (40))){
var inst_27712 = (state_27737[(20)]);
var inst_27711 = (state_27737[(2)]);
var inst_27712__$1 = cljs.core.get.call(null,inst_27711,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27713 = cljs.core.get.call(null,inst_27711,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27714 = cljs.core.not_empty.call(null,inst_27712__$1);
var state_27737__$1 = (function (){var statearr_27759 = state_27737;
(statearr_27759[(21)] = inst_27713);

(statearr_27759[(20)] = inst_27712__$1);

return statearr_27759;
})();
if(cljs.core.truth_(inst_27714)){
var statearr_27760_27839 = state_27737__$1;
(statearr_27760_27839[(1)] = (41));

} else {
var statearr_27761_27840 = state_27737__$1;
(statearr_27761_27840[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27738 === (33))){
var state_27737__$1 = state_27737;
var statearr_27762_27841 = state_27737__$1;
(statearr_27762_27841[(2)] = false);

(statearr_27762_27841[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27738 === (13))){
var inst_27610 = (state_27737[(22)]);
var inst_27614 = cljs.core.chunk_first.call(null,inst_27610);
var inst_27615 = cljs.core.chunk_rest.call(null,inst_27610);
var inst_27616 = cljs.core.count.call(null,inst_27614);
var inst_27597 = inst_27615;
var inst_27598 = inst_27614;
var inst_27599 = inst_27616;
var inst_27600 = (0);
var state_27737__$1 = (function (){var statearr_27763 = state_27737;
(statearr_27763[(7)] = inst_27599);

(statearr_27763[(8)] = inst_27598);

(statearr_27763[(9)] = inst_27597);

(statearr_27763[(10)] = inst_27600);

return statearr_27763;
})();
var statearr_27764_27842 = state_27737__$1;
(statearr_27764_27842[(2)] = null);

(statearr_27764_27842[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27738 === (22))){
var inst_27658 = (state_27737[(23)]);
var inst_27653 = (state_27737[(24)]);
var inst_27650 = (state_27737[(19)]);
var inst_27654 = (state_27737[(25)]);
var inst_27653__$1 = (state_27737[(2)]);
var inst_27654__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27653__$1);
var inst_27655 = (function (){var all_files = inst_27650;
var res_SINGLEQUOTE_ = inst_27653__$1;
var res = inst_27654__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27658,inst_27653,inst_27650,inst_27654,inst_27653__$1,inst_27654__$1,state_val_27738,c__23789__auto__,map__27582,map__27582__$1,opts,before_jsload,on_jsload,reload_dependents,map__27583,map__27583__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27579_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27579_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27658,inst_27653,inst_27650,inst_27654,inst_27653__$1,inst_27654__$1,state_val_27738,c__23789__auto__,map__27582,map__27582__$1,opts,before_jsload,on_jsload,reload_dependents,map__27583,map__27583__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27656 = cljs.core.filter.call(null,inst_27655,inst_27653__$1);
var inst_27657 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27658__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27657);
var inst_27659 = cljs.core.not_empty.call(null,inst_27658__$1);
var state_27737__$1 = (function (){var statearr_27765 = state_27737;
(statearr_27765[(23)] = inst_27658__$1);

(statearr_27765[(26)] = inst_27656);

(statearr_27765[(24)] = inst_27653__$1);

(statearr_27765[(25)] = inst_27654__$1);

return statearr_27765;
})();
if(cljs.core.truth_(inst_27659)){
var statearr_27766_27843 = state_27737__$1;
(statearr_27766_27843[(1)] = (23));

} else {
var statearr_27767_27844 = state_27737__$1;
(statearr_27767_27844[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27738 === (36))){
var state_27737__$1 = state_27737;
var statearr_27768_27845 = state_27737__$1;
(statearr_27768_27845[(2)] = false);

(statearr_27768_27845[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27738 === (41))){
var inst_27712 = (state_27737[(20)]);
var inst_27716 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27717 = cljs.core.map.call(null,inst_27716,inst_27712);
var inst_27718 = cljs.core.pr_str.call(null,inst_27717);
var inst_27719 = ["figwheel-no-load meta-data: ",inst_27718].join('');
var inst_27720 = figwheel.client.utils.log.call(null,inst_27719);
var state_27737__$1 = state_27737;
var statearr_27769_27846 = state_27737__$1;
(statearr_27769_27846[(2)] = inst_27720);

(statearr_27769_27846[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27738 === (43))){
var inst_27713 = (state_27737[(21)]);
var inst_27723 = (state_27737[(2)]);
var inst_27724 = cljs.core.not_empty.call(null,inst_27713);
var state_27737__$1 = (function (){var statearr_27770 = state_27737;
(statearr_27770[(27)] = inst_27723);

return statearr_27770;
})();
if(cljs.core.truth_(inst_27724)){
var statearr_27771_27847 = state_27737__$1;
(statearr_27771_27847[(1)] = (44));

} else {
var statearr_27772_27848 = state_27737__$1;
(statearr_27772_27848[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27738 === (29))){
var inst_27658 = (state_27737[(23)]);
var inst_27690 = (state_27737[(16)]);
var inst_27656 = (state_27737[(26)]);
var inst_27653 = (state_27737[(24)]);
var inst_27650 = (state_27737[(19)]);
var inst_27654 = (state_27737[(25)]);
var inst_27686 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27689 = (function (){var all_files = inst_27650;
var res_SINGLEQUOTE_ = inst_27653;
var res = inst_27654;
var files_not_loaded = inst_27656;
var dependencies_that_loaded = inst_27658;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27658,inst_27690,inst_27656,inst_27653,inst_27650,inst_27654,inst_27686,state_val_27738,c__23789__auto__,map__27582,map__27582__$1,opts,before_jsload,on_jsload,reload_dependents,map__27583,map__27583__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27688){
var map__27773 = p__27688;
var map__27773__$1 = (((((!((map__27773 == null))))?(((((map__27773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27773.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27773):map__27773);
var namespace = cljs.core.get.call(null,map__27773__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27658,inst_27690,inst_27656,inst_27653,inst_27650,inst_27654,inst_27686,state_val_27738,c__23789__auto__,map__27582,map__27582__$1,opts,before_jsload,on_jsload,reload_dependents,map__27583,map__27583__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27690__$1 = cljs.core.group_by.call(null,inst_27689,inst_27656);
var inst_27692 = (inst_27690__$1 == null);
var inst_27693 = cljs.core.not.call(null,inst_27692);
var state_27737__$1 = (function (){var statearr_27775 = state_27737;
(statearr_27775[(16)] = inst_27690__$1);

(statearr_27775[(28)] = inst_27686);

return statearr_27775;
})();
if(inst_27693){
var statearr_27776_27849 = state_27737__$1;
(statearr_27776_27849[(1)] = (32));

} else {
var statearr_27777_27850 = state_27737__$1;
(statearr_27777_27850[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27738 === (44))){
var inst_27713 = (state_27737[(21)]);
var inst_27726 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27713);
var inst_27727 = cljs.core.pr_str.call(null,inst_27726);
var inst_27728 = ["not required: ",inst_27727].join('');
var inst_27729 = figwheel.client.utils.log.call(null,inst_27728);
var state_27737__$1 = state_27737;
var statearr_27778_27851 = state_27737__$1;
(statearr_27778_27851[(2)] = inst_27729);

(statearr_27778_27851[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27738 === (6))){
var inst_27631 = (state_27737[(2)]);
var state_27737__$1 = state_27737;
var statearr_27779_27852 = state_27737__$1;
(statearr_27779_27852[(2)] = inst_27631);

(statearr_27779_27852[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27738 === (28))){
var inst_27656 = (state_27737[(26)]);
var inst_27683 = (state_27737[(2)]);
var inst_27684 = cljs.core.not_empty.call(null,inst_27656);
var state_27737__$1 = (function (){var statearr_27780 = state_27737;
(statearr_27780[(29)] = inst_27683);

return statearr_27780;
})();
if(cljs.core.truth_(inst_27684)){
var statearr_27781_27853 = state_27737__$1;
(statearr_27781_27853[(1)] = (29));

} else {
var statearr_27782_27854 = state_27737__$1;
(statearr_27782_27854[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27738 === (25))){
var inst_27654 = (state_27737[(25)]);
var inst_27670 = (state_27737[(2)]);
var inst_27671 = cljs.core.not_empty.call(null,inst_27654);
var state_27737__$1 = (function (){var statearr_27783 = state_27737;
(statearr_27783[(30)] = inst_27670);

return statearr_27783;
})();
if(cljs.core.truth_(inst_27671)){
var statearr_27784_27855 = state_27737__$1;
(statearr_27784_27855[(1)] = (26));

} else {
var statearr_27785_27856 = state_27737__$1;
(statearr_27785_27856[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27738 === (34))){
var inst_27706 = (state_27737[(2)]);
var state_27737__$1 = state_27737;
if(cljs.core.truth_(inst_27706)){
var statearr_27786_27857 = state_27737__$1;
(statearr_27786_27857[(1)] = (38));

} else {
var statearr_27787_27858 = state_27737__$1;
(statearr_27787_27858[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27738 === (17))){
var state_27737__$1 = state_27737;
var statearr_27788_27859 = state_27737__$1;
(statearr_27788_27859[(2)] = recompile_dependents);

(statearr_27788_27859[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27738 === (3))){
var state_27737__$1 = state_27737;
var statearr_27789_27860 = state_27737__$1;
(statearr_27789_27860[(2)] = null);

(statearr_27789_27860[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27738 === (12))){
var inst_27627 = (state_27737[(2)]);
var state_27737__$1 = state_27737;
var statearr_27790_27861 = state_27737__$1;
(statearr_27790_27861[(2)] = inst_27627);

(statearr_27790_27861[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27738 === (2))){
var inst_27589 = (state_27737[(13)]);
var inst_27596 = cljs.core.seq.call(null,inst_27589);
var inst_27597 = inst_27596;
var inst_27598 = null;
var inst_27599 = (0);
var inst_27600 = (0);
var state_27737__$1 = (function (){var statearr_27791 = state_27737;
(statearr_27791[(7)] = inst_27599);

(statearr_27791[(8)] = inst_27598);

(statearr_27791[(9)] = inst_27597);

(statearr_27791[(10)] = inst_27600);

return statearr_27791;
})();
var statearr_27792_27862 = state_27737__$1;
(statearr_27792_27862[(2)] = null);

(statearr_27792_27862[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27738 === (23))){
var inst_27658 = (state_27737[(23)]);
var inst_27656 = (state_27737[(26)]);
var inst_27653 = (state_27737[(24)]);
var inst_27650 = (state_27737[(19)]);
var inst_27654 = (state_27737[(25)]);
var inst_27661 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27663 = (function (){var all_files = inst_27650;
var res_SINGLEQUOTE_ = inst_27653;
var res = inst_27654;
var files_not_loaded = inst_27656;
var dependencies_that_loaded = inst_27658;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27658,inst_27656,inst_27653,inst_27650,inst_27654,inst_27661,state_val_27738,c__23789__auto__,map__27582,map__27582__$1,opts,before_jsload,on_jsload,reload_dependents,map__27583,map__27583__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27662){
var map__27793 = p__27662;
var map__27793__$1 = (((((!((map__27793 == null))))?(((((map__27793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27793):map__27793);
var request_url = cljs.core.get.call(null,map__27793__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27658,inst_27656,inst_27653,inst_27650,inst_27654,inst_27661,state_val_27738,c__23789__auto__,map__27582,map__27582__$1,opts,before_jsload,on_jsload,reload_dependents,map__27583,map__27583__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27664 = cljs.core.reverse.call(null,inst_27658);
var inst_27665 = cljs.core.map.call(null,inst_27663,inst_27664);
var inst_27666 = cljs.core.pr_str.call(null,inst_27665);
var inst_27667 = figwheel.client.utils.log.call(null,inst_27666);
var state_27737__$1 = (function (){var statearr_27795 = state_27737;
(statearr_27795[(31)] = inst_27661);

return statearr_27795;
})();
var statearr_27796_27863 = state_27737__$1;
(statearr_27796_27863[(2)] = inst_27667);

(statearr_27796_27863[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27738 === (35))){
var state_27737__$1 = state_27737;
var statearr_27797_27864 = state_27737__$1;
(statearr_27797_27864[(2)] = true);

(statearr_27797_27864[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27738 === (19))){
var inst_27640 = (state_27737[(12)]);
var inst_27646 = figwheel.client.file_reloading.expand_files.call(null,inst_27640);
var state_27737__$1 = state_27737;
var statearr_27798_27865 = state_27737__$1;
(statearr_27798_27865[(2)] = inst_27646);

(statearr_27798_27865[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27738 === (11))){
var state_27737__$1 = state_27737;
var statearr_27799_27866 = state_27737__$1;
(statearr_27799_27866[(2)] = null);

(statearr_27799_27866[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27738 === (9))){
var inst_27629 = (state_27737[(2)]);
var state_27737__$1 = state_27737;
var statearr_27800_27867 = state_27737__$1;
(statearr_27800_27867[(2)] = inst_27629);

(statearr_27800_27867[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27738 === (5))){
var inst_27599 = (state_27737[(7)]);
var inst_27600 = (state_27737[(10)]);
var inst_27602 = (inst_27600 < inst_27599);
var inst_27603 = inst_27602;
var state_27737__$1 = state_27737;
if(cljs.core.truth_(inst_27603)){
var statearr_27801_27868 = state_27737__$1;
(statearr_27801_27868[(1)] = (7));

} else {
var statearr_27802_27869 = state_27737__$1;
(statearr_27802_27869[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27738 === (14))){
var inst_27610 = (state_27737[(22)]);
var inst_27619 = cljs.core.first.call(null,inst_27610);
var inst_27620 = figwheel.client.file_reloading.eval_body.call(null,inst_27619,opts);
var inst_27621 = cljs.core.next.call(null,inst_27610);
var inst_27597 = inst_27621;
var inst_27598 = null;
var inst_27599 = (0);
var inst_27600 = (0);
var state_27737__$1 = (function (){var statearr_27803 = state_27737;
(statearr_27803[(7)] = inst_27599);

(statearr_27803[(8)] = inst_27598);

(statearr_27803[(32)] = inst_27620);

(statearr_27803[(9)] = inst_27597);

(statearr_27803[(10)] = inst_27600);

return statearr_27803;
})();
var statearr_27804_27870 = state_27737__$1;
(statearr_27804_27870[(2)] = null);

(statearr_27804_27870[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27738 === (45))){
var state_27737__$1 = state_27737;
var statearr_27805_27871 = state_27737__$1;
(statearr_27805_27871[(2)] = null);

(statearr_27805_27871[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27738 === (26))){
var inst_27658 = (state_27737[(23)]);
var inst_27656 = (state_27737[(26)]);
var inst_27653 = (state_27737[(24)]);
var inst_27650 = (state_27737[(19)]);
var inst_27654 = (state_27737[(25)]);
var inst_27673 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27675 = (function (){var all_files = inst_27650;
var res_SINGLEQUOTE_ = inst_27653;
var res = inst_27654;
var files_not_loaded = inst_27656;
var dependencies_that_loaded = inst_27658;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27658,inst_27656,inst_27653,inst_27650,inst_27654,inst_27673,state_val_27738,c__23789__auto__,map__27582,map__27582__$1,opts,before_jsload,on_jsload,reload_dependents,map__27583,map__27583__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27674){
var map__27806 = p__27674;
var map__27806__$1 = (((((!((map__27806 == null))))?(((((map__27806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27806):map__27806);
var namespace = cljs.core.get.call(null,map__27806__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27806__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27658,inst_27656,inst_27653,inst_27650,inst_27654,inst_27673,state_val_27738,c__23789__auto__,map__27582,map__27582__$1,opts,before_jsload,on_jsload,reload_dependents,map__27583,map__27583__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27676 = cljs.core.map.call(null,inst_27675,inst_27654);
var inst_27677 = cljs.core.pr_str.call(null,inst_27676);
var inst_27678 = figwheel.client.utils.log.call(null,inst_27677);
var inst_27679 = (function (){var all_files = inst_27650;
var res_SINGLEQUOTE_ = inst_27653;
var res = inst_27654;
var files_not_loaded = inst_27656;
var dependencies_that_loaded = inst_27658;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27658,inst_27656,inst_27653,inst_27650,inst_27654,inst_27673,inst_27675,inst_27676,inst_27677,inst_27678,state_val_27738,c__23789__auto__,map__27582,map__27582__$1,opts,before_jsload,on_jsload,reload_dependents,map__27583,map__27583__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27658,inst_27656,inst_27653,inst_27650,inst_27654,inst_27673,inst_27675,inst_27676,inst_27677,inst_27678,state_val_27738,c__23789__auto__,map__27582,map__27582__$1,opts,before_jsload,on_jsload,reload_dependents,map__27583,map__27583__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27680 = setTimeout(inst_27679,(10));
var state_27737__$1 = (function (){var statearr_27808 = state_27737;
(statearr_27808[(33)] = inst_27673);

(statearr_27808[(34)] = inst_27678);

return statearr_27808;
})();
var statearr_27809_27872 = state_27737__$1;
(statearr_27809_27872[(2)] = inst_27680);

(statearr_27809_27872[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27738 === (16))){
var state_27737__$1 = state_27737;
var statearr_27810_27873 = state_27737__$1;
(statearr_27810_27873[(2)] = reload_dependents);

(statearr_27810_27873[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27738 === (38))){
var inst_27690 = (state_27737[(16)]);
var inst_27708 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27690);
var state_27737__$1 = state_27737;
var statearr_27811_27874 = state_27737__$1;
(statearr_27811_27874[(2)] = inst_27708);

(statearr_27811_27874[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27738 === (30))){
var state_27737__$1 = state_27737;
var statearr_27812_27875 = state_27737__$1;
(statearr_27812_27875[(2)] = null);

(statearr_27812_27875[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27738 === (10))){
var inst_27610 = (state_27737[(22)]);
var inst_27612 = cljs.core.chunked_seq_QMARK_.call(null,inst_27610);
var state_27737__$1 = state_27737;
if(inst_27612){
var statearr_27813_27876 = state_27737__$1;
(statearr_27813_27876[(1)] = (13));

} else {
var statearr_27814_27877 = state_27737__$1;
(statearr_27814_27877[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27738 === (18))){
var inst_27644 = (state_27737[(2)]);
var state_27737__$1 = state_27737;
if(cljs.core.truth_(inst_27644)){
var statearr_27815_27878 = state_27737__$1;
(statearr_27815_27878[(1)] = (19));

} else {
var statearr_27816_27879 = state_27737__$1;
(statearr_27816_27879[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27738 === (42))){
var state_27737__$1 = state_27737;
var statearr_27817_27880 = state_27737__$1;
(statearr_27817_27880[(2)] = null);

(statearr_27817_27880[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27738 === (37))){
var inst_27703 = (state_27737[(2)]);
var state_27737__$1 = state_27737;
var statearr_27818_27881 = state_27737__$1;
(statearr_27818_27881[(2)] = inst_27703);

(statearr_27818_27881[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27738 === (8))){
var inst_27610 = (state_27737[(22)]);
var inst_27597 = (state_27737[(9)]);
var inst_27610__$1 = cljs.core.seq.call(null,inst_27597);
var state_27737__$1 = (function (){var statearr_27819 = state_27737;
(statearr_27819[(22)] = inst_27610__$1);

return statearr_27819;
})();
if(inst_27610__$1){
var statearr_27820_27882 = state_27737__$1;
(statearr_27820_27882[(1)] = (10));

} else {
var statearr_27821_27883 = state_27737__$1;
(statearr_27821_27883[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23789__auto__,map__27582,map__27582__$1,opts,before_jsload,on_jsload,reload_dependents,map__27583,map__27583__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23694__auto__,c__23789__auto__,map__27582,map__27582__$1,opts,before_jsload,on_jsload,reload_dependents,map__27583,map__27583__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23695__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23695__auto____0 = (function (){
var statearr_27822 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27822[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23695__auto__);

(statearr_27822[(1)] = (1));

return statearr_27822;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23695__auto____1 = (function (state_27737){
while(true){
var ret_value__23696__auto__ = (function (){try{while(true){
var result__23697__auto__ = switch__23694__auto__.call(null,state_27737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23697__auto__;
}
break;
}
}catch (e27823){if((e27823 instanceof Object)){
var ex__23698__auto__ = e27823;
var statearr_27824_27884 = state_27737;
(statearr_27824_27884[(5)] = ex__23698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27885 = state_27737;
state_27737 = G__27885;
continue;
} else {
return ret_value__23696__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23695__auto__ = function(state_27737){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23695__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23695__auto____1.call(this,state_27737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23695__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23695__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23695__auto__;
})()
;})(switch__23694__auto__,c__23789__auto__,map__27582,map__27582__$1,opts,before_jsload,on_jsload,reload_dependents,map__27583,map__27583__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__23791__auto__ = (function (){var statearr_27825 = f__23790__auto__.call(null);
(statearr_27825[(6)] = c__23789__auto__);

return statearr_27825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23791__auto__);
});})(c__23789__auto__,map__27582,map__27582__$1,opts,before_jsload,on_jsload,reload_dependents,map__27583,map__27583__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__23789__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27888,link){
var map__27889 = p__27888;
var map__27889__$1 = (((((!((map__27889 == null))))?(((((map__27889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27889):map__27889);
var file = cljs.core.get.call(null,map__27889__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5735__auto__,map__27889,map__27889__$1,file){
return (function (p1__27886_SHARP_,p2__27887_SHARP_){
if(cljs.core._EQ_.call(null,p1__27886_SHARP_,p2__27887_SHARP_)){
return p1__27886_SHARP_;
} else {
return false;
}
});})(link_href,temp__5735__auto__,map__27889,map__27889__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27892){
var map__27893 = p__27892;
var map__27893__$1 = (((((!((map__27893 == null))))?(((((map__27893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27893):map__27893);
var match_length = cljs.core.get.call(null,map__27893__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27893__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27891_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27891_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5735__auto__)){
var res = temp__5735__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27895_SHARP_,p2__27896_SHARP_){
return cljs.core.assoc.call(null,p1__27895_SHARP_,cljs.core.get.call(null,p2__27896_SHARP_,key),p2__27896_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5733__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5733__auto__)){
var link = temp__5733__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5733__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5733__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_27897 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_27897);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_27897);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27898,p__27899){
var map__27900 = p__27898;
var map__27900__$1 = (((((!((map__27900 == null))))?(((((map__27900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27900):map__27900);
var on_cssload = cljs.core.get.call(null,map__27900__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__27901 = p__27899;
var map__27901__$1 = (((((!((map__27901 == null))))?(((((map__27901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27901):map__27901);
var files_msg = map__27901__$1;
var files = cljs.core.get.call(null,map__27901__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5735__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5735__auto__)){
var f_datas = temp__5735__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1704783952897
