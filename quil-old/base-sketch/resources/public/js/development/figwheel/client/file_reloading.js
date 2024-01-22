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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27077_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27077_SHARP_));
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
var seq__27078 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27079 = null;
var count__27080 = (0);
var i__27081 = (0);
while(true){
if((i__27081 < count__27080)){
var n = cljs.core._nth.call(null,chunk__27079,i__27081);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__27082 = seq__27078;
var G__27083 = chunk__27079;
var G__27084 = count__27080;
var G__27085 = (i__27081 + (1));
seq__27078 = G__27082;
chunk__27079 = G__27083;
count__27080 = G__27084;
i__27081 = G__27085;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__27078);
if(temp__5735__auto__){
var seq__27078__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27078__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__27078__$1);
var G__27086 = cljs.core.chunk_rest.call(null,seq__27078__$1);
var G__27087 = c__4550__auto__;
var G__27088 = cljs.core.count.call(null,c__4550__auto__);
var G__27089 = (0);
seq__27078 = G__27086;
chunk__27079 = G__27087;
count__27080 = G__27088;
i__27081 = G__27089;
continue;
} else {
var n = cljs.core.first.call(null,seq__27078__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__27090 = cljs.core.next.call(null,seq__27078__$1);
var G__27091 = null;
var G__27092 = (0);
var G__27093 = (0);
seq__27078 = G__27090;
chunk__27079 = G__27091;
count__27080 = G__27092;
i__27081 = G__27093;
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
return cljs.core.some.call(null,(function (p__27094){
var vec__27095 = p__27094;
var _ = cljs.core.nth.call(null,vec__27095,(0),null);
var v = cljs.core.nth.call(null,vec__27095,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__27098){
var vec__27099 = p__27098;
var k = cljs.core.nth.call(null,vec__27099,(0),null);
var v = cljs.core.nth.call(null,vec__27099,(1),null);
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

var seq__27111_27119 = cljs.core.seq.call(null,deps);
var chunk__27112_27120 = null;
var count__27113_27121 = (0);
var i__27114_27122 = (0);
while(true){
if((i__27114_27122 < count__27113_27121)){
var dep_27123 = cljs.core._nth.call(null,chunk__27112_27120,i__27114_27122);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_27123;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27123));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27123,(depth + (1)),state);
} else {
}


var G__27124 = seq__27111_27119;
var G__27125 = chunk__27112_27120;
var G__27126 = count__27113_27121;
var G__27127 = (i__27114_27122 + (1));
seq__27111_27119 = G__27124;
chunk__27112_27120 = G__27125;
count__27113_27121 = G__27126;
i__27114_27122 = G__27127;
continue;
} else {
var temp__5735__auto___27128 = cljs.core.seq.call(null,seq__27111_27119);
if(temp__5735__auto___27128){
var seq__27111_27129__$1 = temp__5735__auto___27128;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27111_27129__$1)){
var c__4550__auto___27130 = cljs.core.chunk_first.call(null,seq__27111_27129__$1);
var G__27131 = cljs.core.chunk_rest.call(null,seq__27111_27129__$1);
var G__27132 = c__4550__auto___27130;
var G__27133 = cljs.core.count.call(null,c__4550__auto___27130);
var G__27134 = (0);
seq__27111_27119 = G__27131;
chunk__27112_27120 = G__27132;
count__27113_27121 = G__27133;
i__27114_27122 = G__27134;
continue;
} else {
var dep_27135 = cljs.core.first.call(null,seq__27111_27129__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_27135;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27135));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27135,(depth + (1)),state);
} else {
}


var G__27136 = cljs.core.next.call(null,seq__27111_27129__$1);
var G__27137 = null;
var G__27138 = (0);
var G__27139 = (0);
seq__27111_27119 = G__27136;
chunk__27112_27120 = G__27137;
count__27113_27121 = G__27138;
i__27114_27122 = G__27139;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27115){
var vec__27116 = p__27115;
var seq__27117 = cljs.core.seq.call(null,vec__27116);
var first__27118 = cljs.core.first.call(null,seq__27117);
var seq__27117__$1 = cljs.core.next.call(null,seq__27117);
var x = first__27118;
var xs = seq__27117__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27116,seq__27117,first__27118,seq__27117__$1,x,xs,get_deps__$1){
return (function (p1__27102_SHARP_){
return clojure.set.difference.call(null,p1__27102_SHARP_,x);
});})(vec__27116,seq__27117,first__27118,seq__27117__$1,x,xs,get_deps__$1))
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
var seq__27140 = cljs.core.seq.call(null,provides);
var chunk__27141 = null;
var count__27142 = (0);
var i__27143 = (0);
while(true){
if((i__27143 < count__27142)){
var prov = cljs.core._nth.call(null,chunk__27141,i__27143);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27152_27160 = cljs.core.seq.call(null,requires);
var chunk__27153_27161 = null;
var count__27154_27162 = (0);
var i__27155_27163 = (0);
while(true){
if((i__27155_27163 < count__27154_27162)){
var req_27164 = cljs.core._nth.call(null,chunk__27153_27161,i__27155_27163);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27164,prov);


var G__27165 = seq__27152_27160;
var G__27166 = chunk__27153_27161;
var G__27167 = count__27154_27162;
var G__27168 = (i__27155_27163 + (1));
seq__27152_27160 = G__27165;
chunk__27153_27161 = G__27166;
count__27154_27162 = G__27167;
i__27155_27163 = G__27168;
continue;
} else {
var temp__5735__auto___27169 = cljs.core.seq.call(null,seq__27152_27160);
if(temp__5735__auto___27169){
var seq__27152_27170__$1 = temp__5735__auto___27169;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27152_27170__$1)){
var c__4550__auto___27171 = cljs.core.chunk_first.call(null,seq__27152_27170__$1);
var G__27172 = cljs.core.chunk_rest.call(null,seq__27152_27170__$1);
var G__27173 = c__4550__auto___27171;
var G__27174 = cljs.core.count.call(null,c__4550__auto___27171);
var G__27175 = (0);
seq__27152_27160 = G__27172;
chunk__27153_27161 = G__27173;
count__27154_27162 = G__27174;
i__27155_27163 = G__27175;
continue;
} else {
var req_27176 = cljs.core.first.call(null,seq__27152_27170__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27176,prov);


var G__27177 = cljs.core.next.call(null,seq__27152_27170__$1);
var G__27178 = null;
var G__27179 = (0);
var G__27180 = (0);
seq__27152_27160 = G__27177;
chunk__27153_27161 = G__27178;
count__27154_27162 = G__27179;
i__27155_27163 = G__27180;
continue;
}
} else {
}
}
break;
}


var G__27181 = seq__27140;
var G__27182 = chunk__27141;
var G__27183 = count__27142;
var G__27184 = (i__27143 + (1));
seq__27140 = G__27181;
chunk__27141 = G__27182;
count__27142 = G__27183;
i__27143 = G__27184;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__27140);
if(temp__5735__auto__){
var seq__27140__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27140__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__27140__$1);
var G__27185 = cljs.core.chunk_rest.call(null,seq__27140__$1);
var G__27186 = c__4550__auto__;
var G__27187 = cljs.core.count.call(null,c__4550__auto__);
var G__27188 = (0);
seq__27140 = G__27185;
chunk__27141 = G__27186;
count__27142 = G__27187;
i__27143 = G__27188;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27140__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27156_27189 = cljs.core.seq.call(null,requires);
var chunk__27157_27190 = null;
var count__27158_27191 = (0);
var i__27159_27192 = (0);
while(true){
if((i__27159_27192 < count__27158_27191)){
var req_27193 = cljs.core._nth.call(null,chunk__27157_27190,i__27159_27192);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27193,prov);


var G__27194 = seq__27156_27189;
var G__27195 = chunk__27157_27190;
var G__27196 = count__27158_27191;
var G__27197 = (i__27159_27192 + (1));
seq__27156_27189 = G__27194;
chunk__27157_27190 = G__27195;
count__27158_27191 = G__27196;
i__27159_27192 = G__27197;
continue;
} else {
var temp__5735__auto___27198__$1 = cljs.core.seq.call(null,seq__27156_27189);
if(temp__5735__auto___27198__$1){
var seq__27156_27199__$1 = temp__5735__auto___27198__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27156_27199__$1)){
var c__4550__auto___27200 = cljs.core.chunk_first.call(null,seq__27156_27199__$1);
var G__27201 = cljs.core.chunk_rest.call(null,seq__27156_27199__$1);
var G__27202 = c__4550__auto___27200;
var G__27203 = cljs.core.count.call(null,c__4550__auto___27200);
var G__27204 = (0);
seq__27156_27189 = G__27201;
chunk__27157_27190 = G__27202;
count__27158_27191 = G__27203;
i__27159_27192 = G__27204;
continue;
} else {
var req_27205 = cljs.core.first.call(null,seq__27156_27199__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27205,prov);


var G__27206 = cljs.core.next.call(null,seq__27156_27199__$1);
var G__27207 = null;
var G__27208 = (0);
var G__27209 = (0);
seq__27156_27189 = G__27206;
chunk__27157_27190 = G__27207;
count__27158_27191 = G__27208;
i__27159_27192 = G__27209;
continue;
}
} else {
}
}
break;
}


var G__27210 = cljs.core.next.call(null,seq__27140__$1);
var G__27211 = null;
var G__27212 = (0);
var G__27213 = (0);
seq__27140 = G__27210;
chunk__27141 = G__27211;
count__27142 = G__27212;
i__27143 = G__27213;
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
var seq__27214_27218 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27215_27219 = null;
var count__27216_27220 = (0);
var i__27217_27221 = (0);
while(true){
if((i__27217_27221 < count__27216_27220)){
var ns_27222 = cljs.core._nth.call(null,chunk__27215_27219,i__27217_27221);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27222);


var G__27223 = seq__27214_27218;
var G__27224 = chunk__27215_27219;
var G__27225 = count__27216_27220;
var G__27226 = (i__27217_27221 + (1));
seq__27214_27218 = G__27223;
chunk__27215_27219 = G__27224;
count__27216_27220 = G__27225;
i__27217_27221 = G__27226;
continue;
} else {
var temp__5735__auto___27227 = cljs.core.seq.call(null,seq__27214_27218);
if(temp__5735__auto___27227){
var seq__27214_27228__$1 = temp__5735__auto___27227;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27214_27228__$1)){
var c__4550__auto___27229 = cljs.core.chunk_first.call(null,seq__27214_27228__$1);
var G__27230 = cljs.core.chunk_rest.call(null,seq__27214_27228__$1);
var G__27231 = c__4550__auto___27229;
var G__27232 = cljs.core.count.call(null,c__4550__auto___27229);
var G__27233 = (0);
seq__27214_27218 = G__27230;
chunk__27215_27219 = G__27231;
count__27216_27220 = G__27232;
i__27217_27221 = G__27233;
continue;
} else {
var ns_27234 = cljs.core.first.call(null,seq__27214_27228__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27234);


var G__27235 = cljs.core.next.call(null,seq__27214_27228__$1);
var G__27236 = null;
var G__27237 = (0);
var G__27238 = (0);
seq__27214_27218 = G__27235;
chunk__27215_27219 = G__27236;
count__27216_27220 = G__27237;
i__27217_27221 = G__27238;
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
var G__27239__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27239 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27240__i = 0, G__27240__a = new Array(arguments.length -  0);
while (G__27240__i < G__27240__a.length) {G__27240__a[G__27240__i] = arguments[G__27240__i + 0]; ++G__27240__i;}
  args = new cljs.core.IndexedSeq(G__27240__a,0,null);
} 
return G__27239__delegate.call(this,args);};
G__27239.cljs$lang$maxFixedArity = 0;
G__27239.cljs$lang$applyTo = (function (arglist__27241){
var args = cljs.core.seq(arglist__27241);
return G__27239__delegate(args);
});
G__27239.cljs$core$IFn$_invoke$arity$variadic = G__27239__delegate;
return G__27239;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__27242_SHARP_,p2__27243_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27242_SHARP_)),p2__27243_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__27244_SHARP_,p2__27245_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27244_SHARP_),p2__27245_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__27246 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__27246.addCallback(((function (G__27246){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__27246))
);

G__27246.addErrback(((function (G__27246){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__27246))
);

return G__27246;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e27247){if((e27247 instanceof Error)){
var e = e27247;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27247;

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
}catch (e27248){if((e27248 instanceof Error)){
var e = e27248;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27248;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27249 = cljs.core._EQ_;
var expr__27250 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27249.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27250))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__27249.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27250))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__27249.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__27250))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__27249,expr__27250){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27249,expr__27250))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27252,callback){
var map__27253 = p__27252;
var map__27253__$1 = (((((!((map__27253 == null))))?(((((map__27253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27253):map__27253);
var file_msg = map__27253__$1;
var request_url = cljs.core.get.call(null,map__27253__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__27253,map__27253__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27253,map__27253__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__23635__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23635__auto__){
return (function (){
var f__23636__auto__ = (function (){var switch__23540__auto__ = ((function (c__23635__auto__){
return (function (state_27291){
var state_val_27292 = (state_27291[(1)]);
if((state_val_27292 === (7))){
var inst_27287 = (state_27291[(2)]);
var state_27291__$1 = state_27291;
var statearr_27293_27319 = state_27291__$1;
(statearr_27293_27319[(2)] = inst_27287);

(statearr_27293_27319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27292 === (1))){
var state_27291__$1 = state_27291;
var statearr_27294_27320 = state_27291__$1;
(statearr_27294_27320[(2)] = null);

(statearr_27294_27320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27292 === (4))){
var inst_27257 = (state_27291[(7)]);
var inst_27257__$1 = (state_27291[(2)]);
var state_27291__$1 = (function (){var statearr_27295 = state_27291;
(statearr_27295[(7)] = inst_27257__$1);

return statearr_27295;
})();
if(cljs.core.truth_(inst_27257__$1)){
var statearr_27296_27321 = state_27291__$1;
(statearr_27296_27321[(1)] = (5));

} else {
var statearr_27297_27322 = state_27291__$1;
(statearr_27297_27322[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27292 === (15))){
var inst_27272 = (state_27291[(8)]);
var inst_27270 = (state_27291[(9)]);
var inst_27274 = inst_27272.call(null,inst_27270);
var state_27291__$1 = state_27291;
var statearr_27298_27323 = state_27291__$1;
(statearr_27298_27323[(2)] = inst_27274);

(statearr_27298_27323[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27292 === (13))){
var inst_27281 = (state_27291[(2)]);
var state_27291__$1 = state_27291;
var statearr_27299_27324 = state_27291__$1;
(statearr_27299_27324[(2)] = inst_27281);

(statearr_27299_27324[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27292 === (6))){
var state_27291__$1 = state_27291;
var statearr_27300_27325 = state_27291__$1;
(statearr_27300_27325[(2)] = null);

(statearr_27300_27325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27292 === (17))){
var inst_27278 = (state_27291[(2)]);
var state_27291__$1 = state_27291;
var statearr_27301_27326 = state_27291__$1;
(statearr_27301_27326[(2)] = inst_27278);

(statearr_27301_27326[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27292 === (3))){
var inst_27289 = (state_27291[(2)]);
var state_27291__$1 = state_27291;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27291__$1,inst_27289);
} else {
if((state_val_27292 === (12))){
var state_27291__$1 = state_27291;
var statearr_27302_27327 = state_27291__$1;
(statearr_27302_27327[(2)] = null);

(statearr_27302_27327[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27292 === (2))){
var state_27291__$1 = state_27291;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27291__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27292 === (11))){
var inst_27262 = (state_27291[(10)]);
var inst_27268 = figwheel.client.file_reloading.blocking_load.call(null,inst_27262);
var state_27291__$1 = state_27291;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27291__$1,(14),inst_27268);
} else {
if((state_val_27292 === (9))){
var inst_27262 = (state_27291[(10)]);
var state_27291__$1 = state_27291;
if(cljs.core.truth_(inst_27262)){
var statearr_27303_27328 = state_27291__$1;
(statearr_27303_27328[(1)] = (11));

} else {
var statearr_27304_27329 = state_27291__$1;
(statearr_27304_27329[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27292 === (5))){
var inst_27263 = (state_27291[(11)]);
var inst_27257 = (state_27291[(7)]);
var inst_27262 = cljs.core.nth.call(null,inst_27257,(0),null);
var inst_27263__$1 = cljs.core.nth.call(null,inst_27257,(1),null);
var state_27291__$1 = (function (){var statearr_27305 = state_27291;
(statearr_27305[(11)] = inst_27263__$1);

(statearr_27305[(10)] = inst_27262);

return statearr_27305;
})();
if(cljs.core.truth_(inst_27263__$1)){
var statearr_27306_27330 = state_27291__$1;
(statearr_27306_27330[(1)] = (8));

} else {
var statearr_27307_27331 = state_27291__$1;
(statearr_27307_27331[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27292 === (14))){
var inst_27272 = (state_27291[(8)]);
var inst_27262 = (state_27291[(10)]);
var inst_27270 = (state_27291[(2)]);
var inst_27271 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27272__$1 = cljs.core.get.call(null,inst_27271,inst_27262);
var state_27291__$1 = (function (){var statearr_27308 = state_27291;
(statearr_27308[(8)] = inst_27272__$1);

(statearr_27308[(9)] = inst_27270);

return statearr_27308;
})();
if(cljs.core.truth_(inst_27272__$1)){
var statearr_27309_27332 = state_27291__$1;
(statearr_27309_27332[(1)] = (15));

} else {
var statearr_27310_27333 = state_27291__$1;
(statearr_27310_27333[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27292 === (16))){
var inst_27270 = (state_27291[(9)]);
var inst_27276 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27270);
var state_27291__$1 = state_27291;
var statearr_27311_27334 = state_27291__$1;
(statearr_27311_27334[(2)] = inst_27276);

(statearr_27311_27334[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27292 === (10))){
var inst_27283 = (state_27291[(2)]);
var state_27291__$1 = (function (){var statearr_27312 = state_27291;
(statearr_27312[(12)] = inst_27283);

return statearr_27312;
})();
var statearr_27313_27335 = state_27291__$1;
(statearr_27313_27335[(2)] = null);

(statearr_27313_27335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27292 === (8))){
var inst_27263 = (state_27291[(11)]);
var inst_27265 = eval(inst_27263);
var state_27291__$1 = state_27291;
var statearr_27314_27336 = state_27291__$1;
(statearr_27314_27336[(2)] = inst_27265);

(statearr_27314_27336[(1)] = (10));


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
});})(c__23635__auto__))
;
return ((function (switch__23540__auto__,c__23635__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23541__auto__ = null;
var figwheel$client$file_reloading$state_machine__23541__auto____0 = (function (){
var statearr_27315 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27315[(0)] = figwheel$client$file_reloading$state_machine__23541__auto__);

(statearr_27315[(1)] = (1));

return statearr_27315;
});
var figwheel$client$file_reloading$state_machine__23541__auto____1 = (function (state_27291){
while(true){
var ret_value__23542__auto__ = (function (){try{while(true){
var result__23543__auto__ = switch__23540__auto__.call(null,state_27291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23543__auto__;
}
break;
}
}catch (e27316){if((e27316 instanceof Object)){
var ex__23544__auto__ = e27316;
var statearr_27317_27337 = state_27291;
(statearr_27317_27337[(5)] = ex__23544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27338 = state_27291;
state_27291 = G__27338;
continue;
} else {
return ret_value__23542__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23541__auto__ = function(state_27291){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23541__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23541__auto____1.call(this,state_27291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23541__auto____0;
figwheel$client$file_reloading$state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23541__auto____1;
return figwheel$client$file_reloading$state_machine__23541__auto__;
})()
;})(switch__23540__auto__,c__23635__auto__))
})();
var state__23637__auto__ = (function (){var statearr_27318 = f__23636__auto__.call(null);
(statearr_27318[(6)] = c__23635__auto__);

return statearr_27318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23637__auto__);
});})(c__23635__auto__))
);

return c__23635__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__27340 = arguments.length;
switch (G__27340) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27342,callback){
var map__27343 = p__27342;
var map__27343__$1 = (((((!((map__27343 == null))))?(((((map__27343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27343):map__27343);
var file_msg = map__27343__$1;
var namespace = cljs.core.get.call(null,map__27343__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27343,map__27343__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27343,map__27343__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__27345){
var map__27346 = p__27345;
var map__27346__$1 = (((((!((map__27346 == null))))?(((((map__27346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27346):map__27346);
var file_msg = map__27346__$1;
var namespace = cljs.core.get.call(null,map__27346__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27348){
var map__27349 = p__27348;
var map__27349__$1 = (((((!((map__27349 == null))))?(((((map__27349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27349):map__27349);
var file_msg = map__27349__$1;
var namespace = cljs.core.get.call(null,map__27349__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27351,callback){
var map__27352 = p__27351;
var map__27352__$1 = (((((!((map__27352 == null))))?(((((map__27352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27352):map__27352);
var file_msg = map__27352__$1;
var request_url = cljs.core.get.call(null,map__27352__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27352__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__23635__auto___27402 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23635__auto___27402,out){
return (function (){
var f__23636__auto__ = (function (){var switch__23540__auto__ = ((function (c__23635__auto___27402,out){
return (function (state_27387){
var state_val_27388 = (state_27387[(1)]);
if((state_val_27388 === (1))){
var inst_27361 = cljs.core.seq.call(null,files);
var inst_27362 = cljs.core.first.call(null,inst_27361);
var inst_27363 = cljs.core.next.call(null,inst_27361);
var inst_27364 = files;
var state_27387__$1 = (function (){var statearr_27389 = state_27387;
(statearr_27389[(7)] = inst_27363);

(statearr_27389[(8)] = inst_27362);

(statearr_27389[(9)] = inst_27364);

return statearr_27389;
})();
var statearr_27390_27403 = state_27387__$1;
(statearr_27390_27403[(2)] = null);

(statearr_27390_27403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27388 === (2))){
var inst_27370 = (state_27387[(10)]);
var inst_27364 = (state_27387[(9)]);
var inst_27369 = cljs.core.seq.call(null,inst_27364);
var inst_27370__$1 = cljs.core.first.call(null,inst_27369);
var inst_27371 = cljs.core.next.call(null,inst_27369);
var inst_27372 = (inst_27370__$1 == null);
var inst_27373 = cljs.core.not.call(null,inst_27372);
var state_27387__$1 = (function (){var statearr_27391 = state_27387;
(statearr_27391[(11)] = inst_27371);

(statearr_27391[(10)] = inst_27370__$1);

return statearr_27391;
})();
if(inst_27373){
var statearr_27392_27404 = state_27387__$1;
(statearr_27392_27404[(1)] = (4));

} else {
var statearr_27393_27405 = state_27387__$1;
(statearr_27393_27405[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27388 === (3))){
var inst_27385 = (state_27387[(2)]);
var state_27387__$1 = state_27387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27387__$1,inst_27385);
} else {
if((state_val_27388 === (4))){
var inst_27370 = (state_27387[(10)]);
var inst_27375 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27370);
var state_27387__$1 = state_27387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27387__$1,(7),inst_27375);
} else {
if((state_val_27388 === (5))){
var inst_27381 = cljs.core.async.close_BANG_.call(null,out);
var state_27387__$1 = state_27387;
var statearr_27394_27406 = state_27387__$1;
(statearr_27394_27406[(2)] = inst_27381);

(statearr_27394_27406[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27388 === (6))){
var inst_27383 = (state_27387[(2)]);
var state_27387__$1 = state_27387;
var statearr_27395_27407 = state_27387__$1;
(statearr_27395_27407[(2)] = inst_27383);

(statearr_27395_27407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27388 === (7))){
var inst_27371 = (state_27387[(11)]);
var inst_27377 = (state_27387[(2)]);
var inst_27378 = cljs.core.async.put_BANG_.call(null,out,inst_27377);
var inst_27364 = inst_27371;
var state_27387__$1 = (function (){var statearr_27396 = state_27387;
(statearr_27396[(9)] = inst_27364);

(statearr_27396[(12)] = inst_27378);

return statearr_27396;
})();
var statearr_27397_27408 = state_27387__$1;
(statearr_27397_27408[(2)] = null);

(statearr_27397_27408[(1)] = (2));


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
});})(c__23635__auto___27402,out))
;
return ((function (switch__23540__auto__,c__23635__auto___27402,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23541__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23541__auto____0 = (function (){
var statearr_27398 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27398[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23541__auto__);

(statearr_27398[(1)] = (1));

return statearr_27398;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23541__auto____1 = (function (state_27387){
while(true){
var ret_value__23542__auto__ = (function (){try{while(true){
var result__23543__auto__ = switch__23540__auto__.call(null,state_27387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23543__auto__;
}
break;
}
}catch (e27399){if((e27399 instanceof Object)){
var ex__23544__auto__ = e27399;
var statearr_27400_27409 = state_27387;
(statearr_27400_27409[(5)] = ex__23544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27410 = state_27387;
state_27387 = G__27410;
continue;
} else {
return ret_value__23542__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23541__auto__ = function(state_27387){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23541__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23541__auto____1.call(this,state_27387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23541__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23541__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23541__auto__;
})()
;})(switch__23540__auto__,c__23635__auto___27402,out))
})();
var state__23637__auto__ = (function (){var statearr_27401 = f__23636__auto__.call(null);
(statearr_27401[(6)] = c__23635__auto___27402);

return statearr_27401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23637__auto__);
});})(c__23635__auto___27402,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27411,opts){
var map__27412 = p__27411;
var map__27412__$1 = (((((!((map__27412 == null))))?(((((map__27412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27412):map__27412);
var eval_body = cljs.core.get.call(null,map__27412__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27412__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e27414){var e = e27414;
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
return (function (p1__27415_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27415_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__27416){
var vec__27417 = p__27416;
var k = cljs.core.nth.call(null,vec__27417,(0),null);
var v = cljs.core.nth.call(null,vec__27417,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27420){
var vec__27421 = p__27420;
var k = cljs.core.nth.call(null,vec__27421,(0),null);
var v = cljs.core.nth.call(null,vec__27421,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27427,p__27428){
var map__27429 = p__27427;
var map__27429__$1 = (((((!((map__27429 == null))))?(((((map__27429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27429):map__27429);
var opts = map__27429__$1;
var before_jsload = cljs.core.get.call(null,map__27429__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27429__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27429__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27430 = p__27428;
var map__27430__$1 = (((((!((map__27430 == null))))?(((((map__27430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27430):map__27430);
var msg = map__27430__$1;
var files = cljs.core.get.call(null,map__27430__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27430__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27430__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23635__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23635__auto__,map__27429,map__27429__$1,opts,before_jsload,on_jsload,reload_dependents,map__27430,map__27430__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__23636__auto__ = (function (){var switch__23540__auto__ = ((function (c__23635__auto__,map__27429,map__27429__$1,opts,before_jsload,on_jsload,reload_dependents,map__27430,map__27430__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27584){
var state_val_27585 = (state_27584[(1)]);
if((state_val_27585 === (7))){
var inst_27446 = (state_27584[(7)]);
var inst_27445 = (state_27584[(8)]);
var inst_27444 = (state_27584[(9)]);
var inst_27447 = (state_27584[(10)]);
var inst_27452 = cljs.core._nth.call(null,inst_27445,inst_27447);
var inst_27453 = figwheel.client.file_reloading.eval_body.call(null,inst_27452,opts);
var inst_27454 = (inst_27447 + (1));
var tmp27586 = inst_27446;
var tmp27587 = inst_27445;
var tmp27588 = inst_27444;
var inst_27444__$1 = tmp27588;
var inst_27445__$1 = tmp27587;
var inst_27446__$1 = tmp27586;
var inst_27447__$1 = inst_27454;
var state_27584__$1 = (function (){var statearr_27589 = state_27584;
(statearr_27589[(7)] = inst_27446__$1);

(statearr_27589[(8)] = inst_27445__$1);

(statearr_27589[(11)] = inst_27453);

(statearr_27589[(9)] = inst_27444__$1);

(statearr_27589[(10)] = inst_27447__$1);

return statearr_27589;
})();
var statearr_27590_27673 = state_27584__$1;
(statearr_27590_27673[(2)] = null);

(statearr_27590_27673[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (20))){
var inst_27487 = (state_27584[(12)]);
var inst_27495 = figwheel.client.file_reloading.sort_files.call(null,inst_27487);
var state_27584__$1 = state_27584;
var statearr_27591_27674 = state_27584__$1;
(statearr_27591_27674[(2)] = inst_27495);

(statearr_27591_27674[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (27))){
var state_27584__$1 = state_27584;
var statearr_27592_27675 = state_27584__$1;
(statearr_27592_27675[(2)] = null);

(statearr_27592_27675[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (1))){
var inst_27436 = (state_27584[(13)]);
var inst_27433 = before_jsload.call(null,files);
var inst_27434 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27435 = (function (){return ((function (inst_27436,inst_27433,inst_27434,state_val_27585,c__23635__auto__,map__27429,map__27429__$1,opts,before_jsload,on_jsload,reload_dependents,map__27430,map__27430__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27424_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27424_SHARP_);
});
;})(inst_27436,inst_27433,inst_27434,state_val_27585,c__23635__auto__,map__27429,map__27429__$1,opts,before_jsload,on_jsload,reload_dependents,map__27430,map__27430__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27436__$1 = cljs.core.filter.call(null,inst_27435,files);
var inst_27437 = cljs.core.not_empty.call(null,inst_27436__$1);
var state_27584__$1 = (function (){var statearr_27593 = state_27584;
(statearr_27593[(13)] = inst_27436__$1);

(statearr_27593[(14)] = inst_27433);

(statearr_27593[(15)] = inst_27434);

return statearr_27593;
})();
if(cljs.core.truth_(inst_27437)){
var statearr_27594_27676 = state_27584__$1;
(statearr_27594_27676[(1)] = (2));

} else {
var statearr_27595_27677 = state_27584__$1;
(statearr_27595_27677[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (24))){
var state_27584__$1 = state_27584;
var statearr_27596_27678 = state_27584__$1;
(statearr_27596_27678[(2)] = null);

(statearr_27596_27678[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (39))){
var inst_27537 = (state_27584[(16)]);
var state_27584__$1 = state_27584;
var statearr_27597_27679 = state_27584__$1;
(statearr_27597_27679[(2)] = inst_27537);

(statearr_27597_27679[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (46))){
var inst_27579 = (state_27584[(2)]);
var state_27584__$1 = state_27584;
var statearr_27598_27680 = state_27584__$1;
(statearr_27598_27680[(2)] = inst_27579);

(statearr_27598_27680[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (4))){
var inst_27481 = (state_27584[(2)]);
var inst_27482 = cljs.core.List.EMPTY;
var inst_27483 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27482);
var inst_27484 = (function (){return ((function (inst_27481,inst_27482,inst_27483,state_val_27585,c__23635__auto__,map__27429,map__27429__$1,opts,before_jsload,on_jsload,reload_dependents,map__27430,map__27430__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27425_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27425_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27425_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__27425_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_27481,inst_27482,inst_27483,state_val_27585,c__23635__auto__,map__27429,map__27429__$1,opts,before_jsload,on_jsload,reload_dependents,map__27430,map__27430__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27485 = cljs.core.filter.call(null,inst_27484,files);
var inst_27486 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27487 = cljs.core.concat.call(null,inst_27485,inst_27486);
var state_27584__$1 = (function (){var statearr_27599 = state_27584;
(statearr_27599[(17)] = inst_27481);

(statearr_27599[(12)] = inst_27487);

(statearr_27599[(18)] = inst_27483);

return statearr_27599;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27600_27681 = state_27584__$1;
(statearr_27600_27681[(1)] = (16));

} else {
var statearr_27601_27682 = state_27584__$1;
(statearr_27601_27682[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (15))){
var inst_27471 = (state_27584[(2)]);
var state_27584__$1 = state_27584;
var statearr_27602_27683 = state_27584__$1;
(statearr_27602_27683[(2)] = inst_27471);

(statearr_27602_27683[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (21))){
var inst_27497 = (state_27584[(19)]);
var inst_27497__$1 = (state_27584[(2)]);
var inst_27498 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27497__$1);
var state_27584__$1 = (function (){var statearr_27603 = state_27584;
(statearr_27603[(19)] = inst_27497__$1);

return statearr_27603;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27584__$1,(22),inst_27498);
} else {
if((state_val_27585 === (31))){
var inst_27582 = (state_27584[(2)]);
var state_27584__$1 = state_27584;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27584__$1,inst_27582);
} else {
if((state_val_27585 === (32))){
var inst_27537 = (state_27584[(16)]);
var inst_27542 = inst_27537.cljs$lang$protocol_mask$partition0$;
var inst_27543 = (inst_27542 & (64));
var inst_27544 = inst_27537.cljs$core$ISeq$;
var inst_27545 = (cljs.core.PROTOCOL_SENTINEL === inst_27544);
var inst_27546 = ((inst_27543) || (inst_27545));
var state_27584__$1 = state_27584;
if(cljs.core.truth_(inst_27546)){
var statearr_27604_27684 = state_27584__$1;
(statearr_27604_27684[(1)] = (35));

} else {
var statearr_27605_27685 = state_27584__$1;
(statearr_27605_27685[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (40))){
var inst_27559 = (state_27584[(20)]);
var inst_27558 = (state_27584[(2)]);
var inst_27559__$1 = cljs.core.get.call(null,inst_27558,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27560 = cljs.core.get.call(null,inst_27558,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27561 = cljs.core.not_empty.call(null,inst_27559__$1);
var state_27584__$1 = (function (){var statearr_27606 = state_27584;
(statearr_27606[(20)] = inst_27559__$1);

(statearr_27606[(21)] = inst_27560);

return statearr_27606;
})();
if(cljs.core.truth_(inst_27561)){
var statearr_27607_27686 = state_27584__$1;
(statearr_27607_27686[(1)] = (41));

} else {
var statearr_27608_27687 = state_27584__$1;
(statearr_27608_27687[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (33))){
var state_27584__$1 = state_27584;
var statearr_27609_27688 = state_27584__$1;
(statearr_27609_27688[(2)] = false);

(statearr_27609_27688[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (13))){
var inst_27457 = (state_27584[(22)]);
var inst_27461 = cljs.core.chunk_first.call(null,inst_27457);
var inst_27462 = cljs.core.chunk_rest.call(null,inst_27457);
var inst_27463 = cljs.core.count.call(null,inst_27461);
var inst_27444 = inst_27462;
var inst_27445 = inst_27461;
var inst_27446 = inst_27463;
var inst_27447 = (0);
var state_27584__$1 = (function (){var statearr_27610 = state_27584;
(statearr_27610[(7)] = inst_27446);

(statearr_27610[(8)] = inst_27445);

(statearr_27610[(9)] = inst_27444);

(statearr_27610[(10)] = inst_27447);

return statearr_27610;
})();
var statearr_27611_27689 = state_27584__$1;
(statearr_27611_27689[(2)] = null);

(statearr_27611_27689[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (22))){
var inst_27497 = (state_27584[(19)]);
var inst_27501 = (state_27584[(23)]);
var inst_27500 = (state_27584[(24)]);
var inst_27505 = (state_27584[(25)]);
var inst_27500__$1 = (state_27584[(2)]);
var inst_27501__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27500__$1);
var inst_27502 = (function (){var all_files = inst_27497;
var res_SINGLEQUOTE_ = inst_27500__$1;
var res = inst_27501__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27497,inst_27501,inst_27500,inst_27505,inst_27500__$1,inst_27501__$1,state_val_27585,c__23635__auto__,map__27429,map__27429__$1,opts,before_jsload,on_jsload,reload_dependents,map__27430,map__27430__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27426_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27426_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27497,inst_27501,inst_27500,inst_27505,inst_27500__$1,inst_27501__$1,state_val_27585,c__23635__auto__,map__27429,map__27429__$1,opts,before_jsload,on_jsload,reload_dependents,map__27430,map__27430__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27503 = cljs.core.filter.call(null,inst_27502,inst_27500__$1);
var inst_27504 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27505__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27504);
var inst_27506 = cljs.core.not_empty.call(null,inst_27505__$1);
var state_27584__$1 = (function (){var statearr_27612 = state_27584;
(statearr_27612[(26)] = inst_27503);

(statearr_27612[(23)] = inst_27501__$1);

(statearr_27612[(24)] = inst_27500__$1);

(statearr_27612[(25)] = inst_27505__$1);

return statearr_27612;
})();
if(cljs.core.truth_(inst_27506)){
var statearr_27613_27690 = state_27584__$1;
(statearr_27613_27690[(1)] = (23));

} else {
var statearr_27614_27691 = state_27584__$1;
(statearr_27614_27691[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (36))){
var state_27584__$1 = state_27584;
var statearr_27615_27692 = state_27584__$1;
(statearr_27615_27692[(2)] = false);

(statearr_27615_27692[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (41))){
var inst_27559 = (state_27584[(20)]);
var inst_27563 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27564 = cljs.core.map.call(null,inst_27563,inst_27559);
var inst_27565 = cljs.core.pr_str.call(null,inst_27564);
var inst_27566 = ["figwheel-no-load meta-data: ",inst_27565].join('');
var inst_27567 = figwheel.client.utils.log.call(null,inst_27566);
var state_27584__$1 = state_27584;
var statearr_27616_27693 = state_27584__$1;
(statearr_27616_27693[(2)] = inst_27567);

(statearr_27616_27693[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (43))){
var inst_27560 = (state_27584[(21)]);
var inst_27570 = (state_27584[(2)]);
var inst_27571 = cljs.core.not_empty.call(null,inst_27560);
var state_27584__$1 = (function (){var statearr_27617 = state_27584;
(statearr_27617[(27)] = inst_27570);

return statearr_27617;
})();
if(cljs.core.truth_(inst_27571)){
var statearr_27618_27694 = state_27584__$1;
(statearr_27618_27694[(1)] = (44));

} else {
var statearr_27619_27695 = state_27584__$1;
(statearr_27619_27695[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (29))){
var inst_27503 = (state_27584[(26)]);
var inst_27497 = (state_27584[(19)]);
var inst_27501 = (state_27584[(23)]);
var inst_27537 = (state_27584[(16)]);
var inst_27500 = (state_27584[(24)]);
var inst_27505 = (state_27584[(25)]);
var inst_27533 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27536 = (function (){var all_files = inst_27497;
var res_SINGLEQUOTE_ = inst_27500;
var res = inst_27501;
var files_not_loaded = inst_27503;
var dependencies_that_loaded = inst_27505;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27503,inst_27497,inst_27501,inst_27537,inst_27500,inst_27505,inst_27533,state_val_27585,c__23635__auto__,map__27429,map__27429__$1,opts,before_jsload,on_jsload,reload_dependents,map__27430,map__27430__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27535){
var map__27620 = p__27535;
var map__27620__$1 = (((((!((map__27620 == null))))?(((((map__27620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27620):map__27620);
var namespace = cljs.core.get.call(null,map__27620__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27503,inst_27497,inst_27501,inst_27537,inst_27500,inst_27505,inst_27533,state_val_27585,c__23635__auto__,map__27429,map__27429__$1,opts,before_jsload,on_jsload,reload_dependents,map__27430,map__27430__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27537__$1 = cljs.core.group_by.call(null,inst_27536,inst_27503);
var inst_27539 = (inst_27537__$1 == null);
var inst_27540 = cljs.core.not.call(null,inst_27539);
var state_27584__$1 = (function (){var statearr_27622 = state_27584;
(statearr_27622[(16)] = inst_27537__$1);

(statearr_27622[(28)] = inst_27533);

return statearr_27622;
})();
if(inst_27540){
var statearr_27623_27696 = state_27584__$1;
(statearr_27623_27696[(1)] = (32));

} else {
var statearr_27624_27697 = state_27584__$1;
(statearr_27624_27697[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (44))){
var inst_27560 = (state_27584[(21)]);
var inst_27573 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27560);
var inst_27574 = cljs.core.pr_str.call(null,inst_27573);
var inst_27575 = ["not required: ",inst_27574].join('');
var inst_27576 = figwheel.client.utils.log.call(null,inst_27575);
var state_27584__$1 = state_27584;
var statearr_27625_27698 = state_27584__$1;
(statearr_27625_27698[(2)] = inst_27576);

(statearr_27625_27698[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (6))){
var inst_27478 = (state_27584[(2)]);
var state_27584__$1 = state_27584;
var statearr_27626_27699 = state_27584__$1;
(statearr_27626_27699[(2)] = inst_27478);

(statearr_27626_27699[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (28))){
var inst_27503 = (state_27584[(26)]);
var inst_27530 = (state_27584[(2)]);
var inst_27531 = cljs.core.not_empty.call(null,inst_27503);
var state_27584__$1 = (function (){var statearr_27627 = state_27584;
(statearr_27627[(29)] = inst_27530);

return statearr_27627;
})();
if(cljs.core.truth_(inst_27531)){
var statearr_27628_27700 = state_27584__$1;
(statearr_27628_27700[(1)] = (29));

} else {
var statearr_27629_27701 = state_27584__$1;
(statearr_27629_27701[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (25))){
var inst_27501 = (state_27584[(23)]);
var inst_27517 = (state_27584[(2)]);
var inst_27518 = cljs.core.not_empty.call(null,inst_27501);
var state_27584__$1 = (function (){var statearr_27630 = state_27584;
(statearr_27630[(30)] = inst_27517);

return statearr_27630;
})();
if(cljs.core.truth_(inst_27518)){
var statearr_27631_27702 = state_27584__$1;
(statearr_27631_27702[(1)] = (26));

} else {
var statearr_27632_27703 = state_27584__$1;
(statearr_27632_27703[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (34))){
var inst_27553 = (state_27584[(2)]);
var state_27584__$1 = state_27584;
if(cljs.core.truth_(inst_27553)){
var statearr_27633_27704 = state_27584__$1;
(statearr_27633_27704[(1)] = (38));

} else {
var statearr_27634_27705 = state_27584__$1;
(statearr_27634_27705[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (17))){
var state_27584__$1 = state_27584;
var statearr_27635_27706 = state_27584__$1;
(statearr_27635_27706[(2)] = recompile_dependents);

(statearr_27635_27706[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (3))){
var state_27584__$1 = state_27584;
var statearr_27636_27707 = state_27584__$1;
(statearr_27636_27707[(2)] = null);

(statearr_27636_27707[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (12))){
var inst_27474 = (state_27584[(2)]);
var state_27584__$1 = state_27584;
var statearr_27637_27708 = state_27584__$1;
(statearr_27637_27708[(2)] = inst_27474);

(statearr_27637_27708[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (2))){
var inst_27436 = (state_27584[(13)]);
var inst_27443 = cljs.core.seq.call(null,inst_27436);
var inst_27444 = inst_27443;
var inst_27445 = null;
var inst_27446 = (0);
var inst_27447 = (0);
var state_27584__$1 = (function (){var statearr_27638 = state_27584;
(statearr_27638[(7)] = inst_27446);

(statearr_27638[(8)] = inst_27445);

(statearr_27638[(9)] = inst_27444);

(statearr_27638[(10)] = inst_27447);

return statearr_27638;
})();
var statearr_27639_27709 = state_27584__$1;
(statearr_27639_27709[(2)] = null);

(statearr_27639_27709[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (23))){
var inst_27503 = (state_27584[(26)]);
var inst_27497 = (state_27584[(19)]);
var inst_27501 = (state_27584[(23)]);
var inst_27500 = (state_27584[(24)]);
var inst_27505 = (state_27584[(25)]);
var inst_27508 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27510 = (function (){var all_files = inst_27497;
var res_SINGLEQUOTE_ = inst_27500;
var res = inst_27501;
var files_not_loaded = inst_27503;
var dependencies_that_loaded = inst_27505;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27503,inst_27497,inst_27501,inst_27500,inst_27505,inst_27508,state_val_27585,c__23635__auto__,map__27429,map__27429__$1,opts,before_jsload,on_jsload,reload_dependents,map__27430,map__27430__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27509){
var map__27640 = p__27509;
var map__27640__$1 = (((((!((map__27640 == null))))?(((((map__27640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27640):map__27640);
var request_url = cljs.core.get.call(null,map__27640__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27503,inst_27497,inst_27501,inst_27500,inst_27505,inst_27508,state_val_27585,c__23635__auto__,map__27429,map__27429__$1,opts,before_jsload,on_jsload,reload_dependents,map__27430,map__27430__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27511 = cljs.core.reverse.call(null,inst_27505);
var inst_27512 = cljs.core.map.call(null,inst_27510,inst_27511);
var inst_27513 = cljs.core.pr_str.call(null,inst_27512);
var inst_27514 = figwheel.client.utils.log.call(null,inst_27513);
var state_27584__$1 = (function (){var statearr_27642 = state_27584;
(statearr_27642[(31)] = inst_27508);

return statearr_27642;
})();
var statearr_27643_27710 = state_27584__$1;
(statearr_27643_27710[(2)] = inst_27514);

(statearr_27643_27710[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (35))){
var state_27584__$1 = state_27584;
var statearr_27644_27711 = state_27584__$1;
(statearr_27644_27711[(2)] = true);

(statearr_27644_27711[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (19))){
var inst_27487 = (state_27584[(12)]);
var inst_27493 = figwheel.client.file_reloading.expand_files.call(null,inst_27487);
var state_27584__$1 = state_27584;
var statearr_27645_27712 = state_27584__$1;
(statearr_27645_27712[(2)] = inst_27493);

(statearr_27645_27712[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (11))){
var state_27584__$1 = state_27584;
var statearr_27646_27713 = state_27584__$1;
(statearr_27646_27713[(2)] = null);

(statearr_27646_27713[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (9))){
var inst_27476 = (state_27584[(2)]);
var state_27584__$1 = state_27584;
var statearr_27647_27714 = state_27584__$1;
(statearr_27647_27714[(2)] = inst_27476);

(statearr_27647_27714[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (5))){
var inst_27446 = (state_27584[(7)]);
var inst_27447 = (state_27584[(10)]);
var inst_27449 = (inst_27447 < inst_27446);
var inst_27450 = inst_27449;
var state_27584__$1 = state_27584;
if(cljs.core.truth_(inst_27450)){
var statearr_27648_27715 = state_27584__$1;
(statearr_27648_27715[(1)] = (7));

} else {
var statearr_27649_27716 = state_27584__$1;
(statearr_27649_27716[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (14))){
var inst_27457 = (state_27584[(22)]);
var inst_27466 = cljs.core.first.call(null,inst_27457);
var inst_27467 = figwheel.client.file_reloading.eval_body.call(null,inst_27466,opts);
var inst_27468 = cljs.core.next.call(null,inst_27457);
var inst_27444 = inst_27468;
var inst_27445 = null;
var inst_27446 = (0);
var inst_27447 = (0);
var state_27584__$1 = (function (){var statearr_27650 = state_27584;
(statearr_27650[(7)] = inst_27446);

(statearr_27650[(8)] = inst_27445);

(statearr_27650[(32)] = inst_27467);

(statearr_27650[(9)] = inst_27444);

(statearr_27650[(10)] = inst_27447);

return statearr_27650;
})();
var statearr_27651_27717 = state_27584__$1;
(statearr_27651_27717[(2)] = null);

(statearr_27651_27717[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (45))){
var state_27584__$1 = state_27584;
var statearr_27652_27718 = state_27584__$1;
(statearr_27652_27718[(2)] = null);

(statearr_27652_27718[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (26))){
var inst_27503 = (state_27584[(26)]);
var inst_27497 = (state_27584[(19)]);
var inst_27501 = (state_27584[(23)]);
var inst_27500 = (state_27584[(24)]);
var inst_27505 = (state_27584[(25)]);
var inst_27520 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27522 = (function (){var all_files = inst_27497;
var res_SINGLEQUOTE_ = inst_27500;
var res = inst_27501;
var files_not_loaded = inst_27503;
var dependencies_that_loaded = inst_27505;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27503,inst_27497,inst_27501,inst_27500,inst_27505,inst_27520,state_val_27585,c__23635__auto__,map__27429,map__27429__$1,opts,before_jsload,on_jsload,reload_dependents,map__27430,map__27430__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27521){
var map__27653 = p__27521;
var map__27653__$1 = (((((!((map__27653 == null))))?(((((map__27653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27653):map__27653);
var namespace = cljs.core.get.call(null,map__27653__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27653__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27503,inst_27497,inst_27501,inst_27500,inst_27505,inst_27520,state_val_27585,c__23635__auto__,map__27429,map__27429__$1,opts,before_jsload,on_jsload,reload_dependents,map__27430,map__27430__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27523 = cljs.core.map.call(null,inst_27522,inst_27501);
var inst_27524 = cljs.core.pr_str.call(null,inst_27523);
var inst_27525 = figwheel.client.utils.log.call(null,inst_27524);
var inst_27526 = (function (){var all_files = inst_27497;
var res_SINGLEQUOTE_ = inst_27500;
var res = inst_27501;
var files_not_loaded = inst_27503;
var dependencies_that_loaded = inst_27505;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27503,inst_27497,inst_27501,inst_27500,inst_27505,inst_27520,inst_27522,inst_27523,inst_27524,inst_27525,state_val_27585,c__23635__auto__,map__27429,map__27429__$1,opts,before_jsload,on_jsload,reload_dependents,map__27430,map__27430__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27503,inst_27497,inst_27501,inst_27500,inst_27505,inst_27520,inst_27522,inst_27523,inst_27524,inst_27525,state_val_27585,c__23635__auto__,map__27429,map__27429__$1,opts,before_jsload,on_jsload,reload_dependents,map__27430,map__27430__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27527 = setTimeout(inst_27526,(10));
var state_27584__$1 = (function (){var statearr_27655 = state_27584;
(statearr_27655[(33)] = inst_27520);

(statearr_27655[(34)] = inst_27525);

return statearr_27655;
})();
var statearr_27656_27719 = state_27584__$1;
(statearr_27656_27719[(2)] = inst_27527);

(statearr_27656_27719[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (16))){
var state_27584__$1 = state_27584;
var statearr_27657_27720 = state_27584__$1;
(statearr_27657_27720[(2)] = reload_dependents);

(statearr_27657_27720[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (38))){
var inst_27537 = (state_27584[(16)]);
var inst_27555 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27537);
var state_27584__$1 = state_27584;
var statearr_27658_27721 = state_27584__$1;
(statearr_27658_27721[(2)] = inst_27555);

(statearr_27658_27721[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (30))){
var state_27584__$1 = state_27584;
var statearr_27659_27722 = state_27584__$1;
(statearr_27659_27722[(2)] = null);

(statearr_27659_27722[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (10))){
var inst_27457 = (state_27584[(22)]);
var inst_27459 = cljs.core.chunked_seq_QMARK_.call(null,inst_27457);
var state_27584__$1 = state_27584;
if(inst_27459){
var statearr_27660_27723 = state_27584__$1;
(statearr_27660_27723[(1)] = (13));

} else {
var statearr_27661_27724 = state_27584__$1;
(statearr_27661_27724[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (18))){
var inst_27491 = (state_27584[(2)]);
var state_27584__$1 = state_27584;
if(cljs.core.truth_(inst_27491)){
var statearr_27662_27725 = state_27584__$1;
(statearr_27662_27725[(1)] = (19));

} else {
var statearr_27663_27726 = state_27584__$1;
(statearr_27663_27726[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (42))){
var state_27584__$1 = state_27584;
var statearr_27664_27727 = state_27584__$1;
(statearr_27664_27727[(2)] = null);

(statearr_27664_27727[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (37))){
var inst_27550 = (state_27584[(2)]);
var state_27584__$1 = state_27584;
var statearr_27665_27728 = state_27584__$1;
(statearr_27665_27728[(2)] = inst_27550);

(statearr_27665_27728[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (8))){
var inst_27457 = (state_27584[(22)]);
var inst_27444 = (state_27584[(9)]);
var inst_27457__$1 = cljs.core.seq.call(null,inst_27444);
var state_27584__$1 = (function (){var statearr_27666 = state_27584;
(statearr_27666[(22)] = inst_27457__$1);

return statearr_27666;
})();
if(inst_27457__$1){
var statearr_27667_27729 = state_27584__$1;
(statearr_27667_27729[(1)] = (10));

} else {
var statearr_27668_27730 = state_27584__$1;
(statearr_27668_27730[(1)] = (11));

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
});})(c__23635__auto__,map__27429,map__27429__$1,opts,before_jsload,on_jsload,reload_dependents,map__27430,map__27430__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23540__auto__,c__23635__auto__,map__27429,map__27429__$1,opts,before_jsload,on_jsload,reload_dependents,map__27430,map__27430__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23541__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23541__auto____0 = (function (){
var statearr_27669 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27669[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23541__auto__);

(statearr_27669[(1)] = (1));

return statearr_27669;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23541__auto____1 = (function (state_27584){
while(true){
var ret_value__23542__auto__ = (function (){try{while(true){
var result__23543__auto__ = switch__23540__auto__.call(null,state_27584);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23543__auto__;
}
break;
}
}catch (e27670){if((e27670 instanceof Object)){
var ex__23544__auto__ = e27670;
var statearr_27671_27731 = state_27584;
(statearr_27671_27731[(5)] = ex__23544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27732 = state_27584;
state_27584 = G__27732;
continue;
} else {
return ret_value__23542__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23541__auto__ = function(state_27584){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23541__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23541__auto____1.call(this,state_27584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23541__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23541__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23541__auto__;
})()
;})(switch__23540__auto__,c__23635__auto__,map__27429,map__27429__$1,opts,before_jsload,on_jsload,reload_dependents,map__27430,map__27430__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__23637__auto__ = (function (){var statearr_27672 = f__23636__auto__.call(null);
(statearr_27672[(6)] = c__23635__auto__);

return statearr_27672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23637__auto__);
});})(c__23635__auto__,map__27429,map__27429__$1,opts,before_jsload,on_jsload,reload_dependents,map__27430,map__27430__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__23635__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27735,link){
var map__27736 = p__27735;
var map__27736__$1 = (((((!((map__27736 == null))))?(((((map__27736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27736):map__27736);
var file = cljs.core.get.call(null,map__27736__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5735__auto__,map__27736,map__27736__$1,file){
return (function (p1__27733_SHARP_,p2__27734_SHARP_){
if(cljs.core._EQ_.call(null,p1__27733_SHARP_,p2__27734_SHARP_)){
return p1__27733_SHARP_;
} else {
return false;
}
});})(link_href,temp__5735__auto__,map__27736,map__27736__$1,file))
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
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27739){
var map__27740 = p__27739;
var map__27740__$1 = (((((!((map__27740 == null))))?(((((map__27740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27740.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27740):map__27740);
var match_length = cljs.core.get.call(null,map__27740__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27740__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27738_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27738_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27742_SHARP_,p2__27743_SHARP_){
return cljs.core.assoc.call(null,p1__27742_SHARP_,cljs.core.get.call(null,p2__27743_SHARP_,key),p2__27743_SHARP_);
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
var loaded_f_datas_27744 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_27744);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_27744);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27745,p__27746){
var map__27747 = p__27745;
var map__27747__$1 = (((((!((map__27747 == null))))?(((((map__27747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27747):map__27747);
var on_cssload = cljs.core.get.call(null,map__27747__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__27748 = p__27746;
var map__27748__$1 = (((((!((map__27748 == null))))?(((((map__27748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27748):map__27748);
var files_msg = map__27748__$1;
var files = cljs.core.get.call(null,map__27748__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1704617303213
