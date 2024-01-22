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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26809_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26809_SHARP_));
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
var seq__26810 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26811 = null;
var count__26812 = (0);
var i__26813 = (0);
while(true){
if((i__26813 < count__26812)){
var n = cljs.core._nth.call(null,chunk__26811,i__26813);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__26814 = seq__26810;
var G__26815 = chunk__26811;
var G__26816 = count__26812;
var G__26817 = (i__26813 + (1));
seq__26810 = G__26814;
chunk__26811 = G__26815;
count__26812 = G__26816;
i__26813 = G__26817;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__26810);
if(temp__5735__auto__){
var seq__26810__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26810__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__26810__$1);
var G__26818 = cljs.core.chunk_rest.call(null,seq__26810__$1);
var G__26819 = c__4550__auto__;
var G__26820 = cljs.core.count.call(null,c__4550__auto__);
var G__26821 = (0);
seq__26810 = G__26818;
chunk__26811 = G__26819;
count__26812 = G__26820;
i__26813 = G__26821;
continue;
} else {
var n = cljs.core.first.call(null,seq__26810__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__26822 = cljs.core.next.call(null,seq__26810__$1);
var G__26823 = null;
var G__26824 = (0);
var G__26825 = (0);
seq__26810 = G__26822;
chunk__26811 = G__26823;
count__26812 = G__26824;
i__26813 = G__26825;
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
return cljs.core.some.call(null,(function (p__26826){
var vec__26827 = p__26826;
var _ = cljs.core.nth.call(null,vec__26827,(0),null);
var v = cljs.core.nth.call(null,vec__26827,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__26830){
var vec__26831 = p__26830;
var k = cljs.core.nth.call(null,vec__26831,(0),null);
var v = cljs.core.nth.call(null,vec__26831,(1),null);
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

var seq__26843_26851 = cljs.core.seq.call(null,deps);
var chunk__26844_26852 = null;
var count__26845_26853 = (0);
var i__26846_26854 = (0);
while(true){
if((i__26846_26854 < count__26845_26853)){
var dep_26855 = cljs.core._nth.call(null,chunk__26844_26852,i__26846_26854);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_26855;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_26855));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_26855,(depth + (1)),state);
} else {
}


var G__26856 = seq__26843_26851;
var G__26857 = chunk__26844_26852;
var G__26858 = count__26845_26853;
var G__26859 = (i__26846_26854 + (1));
seq__26843_26851 = G__26856;
chunk__26844_26852 = G__26857;
count__26845_26853 = G__26858;
i__26846_26854 = G__26859;
continue;
} else {
var temp__5735__auto___26860 = cljs.core.seq.call(null,seq__26843_26851);
if(temp__5735__auto___26860){
var seq__26843_26861__$1 = temp__5735__auto___26860;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26843_26861__$1)){
var c__4550__auto___26862 = cljs.core.chunk_first.call(null,seq__26843_26861__$1);
var G__26863 = cljs.core.chunk_rest.call(null,seq__26843_26861__$1);
var G__26864 = c__4550__auto___26862;
var G__26865 = cljs.core.count.call(null,c__4550__auto___26862);
var G__26866 = (0);
seq__26843_26851 = G__26863;
chunk__26844_26852 = G__26864;
count__26845_26853 = G__26865;
i__26846_26854 = G__26866;
continue;
} else {
var dep_26867 = cljs.core.first.call(null,seq__26843_26861__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_26867;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_26867));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_26867,(depth + (1)),state);
} else {
}


var G__26868 = cljs.core.next.call(null,seq__26843_26861__$1);
var G__26869 = null;
var G__26870 = (0);
var G__26871 = (0);
seq__26843_26851 = G__26868;
chunk__26844_26852 = G__26869;
count__26845_26853 = G__26870;
i__26846_26854 = G__26871;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26847){
var vec__26848 = p__26847;
var seq__26849 = cljs.core.seq.call(null,vec__26848);
var first__26850 = cljs.core.first.call(null,seq__26849);
var seq__26849__$1 = cljs.core.next.call(null,seq__26849);
var x = first__26850;
var xs = seq__26849__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__26848,seq__26849,first__26850,seq__26849__$1,x,xs,get_deps__$1){
return (function (p1__26834_SHARP_){
return clojure.set.difference.call(null,p1__26834_SHARP_,x);
});})(vec__26848,seq__26849,first__26850,seq__26849__$1,x,xs,get_deps__$1))
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
var seq__26872 = cljs.core.seq.call(null,provides);
var chunk__26873 = null;
var count__26874 = (0);
var i__26875 = (0);
while(true){
if((i__26875 < count__26874)){
var prov = cljs.core._nth.call(null,chunk__26873,i__26875);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26884_26892 = cljs.core.seq.call(null,requires);
var chunk__26885_26893 = null;
var count__26886_26894 = (0);
var i__26887_26895 = (0);
while(true){
if((i__26887_26895 < count__26886_26894)){
var req_26896 = cljs.core._nth.call(null,chunk__26885_26893,i__26887_26895);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26896,prov);


var G__26897 = seq__26884_26892;
var G__26898 = chunk__26885_26893;
var G__26899 = count__26886_26894;
var G__26900 = (i__26887_26895 + (1));
seq__26884_26892 = G__26897;
chunk__26885_26893 = G__26898;
count__26886_26894 = G__26899;
i__26887_26895 = G__26900;
continue;
} else {
var temp__5735__auto___26901 = cljs.core.seq.call(null,seq__26884_26892);
if(temp__5735__auto___26901){
var seq__26884_26902__$1 = temp__5735__auto___26901;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26884_26902__$1)){
var c__4550__auto___26903 = cljs.core.chunk_first.call(null,seq__26884_26902__$1);
var G__26904 = cljs.core.chunk_rest.call(null,seq__26884_26902__$1);
var G__26905 = c__4550__auto___26903;
var G__26906 = cljs.core.count.call(null,c__4550__auto___26903);
var G__26907 = (0);
seq__26884_26892 = G__26904;
chunk__26885_26893 = G__26905;
count__26886_26894 = G__26906;
i__26887_26895 = G__26907;
continue;
} else {
var req_26908 = cljs.core.first.call(null,seq__26884_26902__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26908,prov);


var G__26909 = cljs.core.next.call(null,seq__26884_26902__$1);
var G__26910 = null;
var G__26911 = (0);
var G__26912 = (0);
seq__26884_26892 = G__26909;
chunk__26885_26893 = G__26910;
count__26886_26894 = G__26911;
i__26887_26895 = G__26912;
continue;
}
} else {
}
}
break;
}


var G__26913 = seq__26872;
var G__26914 = chunk__26873;
var G__26915 = count__26874;
var G__26916 = (i__26875 + (1));
seq__26872 = G__26913;
chunk__26873 = G__26914;
count__26874 = G__26915;
i__26875 = G__26916;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__26872);
if(temp__5735__auto__){
var seq__26872__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26872__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__26872__$1);
var G__26917 = cljs.core.chunk_rest.call(null,seq__26872__$1);
var G__26918 = c__4550__auto__;
var G__26919 = cljs.core.count.call(null,c__4550__auto__);
var G__26920 = (0);
seq__26872 = G__26917;
chunk__26873 = G__26918;
count__26874 = G__26919;
i__26875 = G__26920;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26872__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26888_26921 = cljs.core.seq.call(null,requires);
var chunk__26889_26922 = null;
var count__26890_26923 = (0);
var i__26891_26924 = (0);
while(true){
if((i__26891_26924 < count__26890_26923)){
var req_26925 = cljs.core._nth.call(null,chunk__26889_26922,i__26891_26924);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26925,prov);


var G__26926 = seq__26888_26921;
var G__26927 = chunk__26889_26922;
var G__26928 = count__26890_26923;
var G__26929 = (i__26891_26924 + (1));
seq__26888_26921 = G__26926;
chunk__26889_26922 = G__26927;
count__26890_26923 = G__26928;
i__26891_26924 = G__26929;
continue;
} else {
var temp__5735__auto___26930__$1 = cljs.core.seq.call(null,seq__26888_26921);
if(temp__5735__auto___26930__$1){
var seq__26888_26931__$1 = temp__5735__auto___26930__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26888_26931__$1)){
var c__4550__auto___26932 = cljs.core.chunk_first.call(null,seq__26888_26931__$1);
var G__26933 = cljs.core.chunk_rest.call(null,seq__26888_26931__$1);
var G__26934 = c__4550__auto___26932;
var G__26935 = cljs.core.count.call(null,c__4550__auto___26932);
var G__26936 = (0);
seq__26888_26921 = G__26933;
chunk__26889_26922 = G__26934;
count__26890_26923 = G__26935;
i__26891_26924 = G__26936;
continue;
} else {
var req_26937 = cljs.core.first.call(null,seq__26888_26931__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26937,prov);


var G__26938 = cljs.core.next.call(null,seq__26888_26931__$1);
var G__26939 = null;
var G__26940 = (0);
var G__26941 = (0);
seq__26888_26921 = G__26938;
chunk__26889_26922 = G__26939;
count__26890_26923 = G__26940;
i__26891_26924 = G__26941;
continue;
}
} else {
}
}
break;
}


var G__26942 = cljs.core.next.call(null,seq__26872__$1);
var G__26943 = null;
var G__26944 = (0);
var G__26945 = (0);
seq__26872 = G__26942;
chunk__26873 = G__26943;
count__26874 = G__26944;
i__26875 = G__26945;
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
var seq__26946_26950 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__26947_26951 = null;
var count__26948_26952 = (0);
var i__26949_26953 = (0);
while(true){
if((i__26949_26953 < count__26948_26952)){
var ns_26954 = cljs.core._nth.call(null,chunk__26947_26951,i__26949_26953);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26954);


var G__26955 = seq__26946_26950;
var G__26956 = chunk__26947_26951;
var G__26957 = count__26948_26952;
var G__26958 = (i__26949_26953 + (1));
seq__26946_26950 = G__26955;
chunk__26947_26951 = G__26956;
count__26948_26952 = G__26957;
i__26949_26953 = G__26958;
continue;
} else {
var temp__5735__auto___26959 = cljs.core.seq.call(null,seq__26946_26950);
if(temp__5735__auto___26959){
var seq__26946_26960__$1 = temp__5735__auto___26959;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26946_26960__$1)){
var c__4550__auto___26961 = cljs.core.chunk_first.call(null,seq__26946_26960__$1);
var G__26962 = cljs.core.chunk_rest.call(null,seq__26946_26960__$1);
var G__26963 = c__4550__auto___26961;
var G__26964 = cljs.core.count.call(null,c__4550__auto___26961);
var G__26965 = (0);
seq__26946_26950 = G__26962;
chunk__26947_26951 = G__26963;
count__26948_26952 = G__26964;
i__26949_26953 = G__26965;
continue;
} else {
var ns_26966 = cljs.core.first.call(null,seq__26946_26960__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26966);


var G__26967 = cljs.core.next.call(null,seq__26946_26960__$1);
var G__26968 = null;
var G__26969 = (0);
var G__26970 = (0);
seq__26946_26950 = G__26967;
chunk__26947_26951 = G__26968;
count__26948_26952 = G__26969;
i__26949_26953 = G__26970;
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
var G__26971__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__26971 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26972__i = 0, G__26972__a = new Array(arguments.length -  0);
while (G__26972__i < G__26972__a.length) {G__26972__a[G__26972__i] = arguments[G__26972__i + 0]; ++G__26972__i;}
  args = new cljs.core.IndexedSeq(G__26972__a,0,null);
} 
return G__26971__delegate.call(this,args);};
G__26971.cljs$lang$maxFixedArity = 0;
G__26971.cljs$lang$applyTo = (function (arglist__26973){
var args = cljs.core.seq(arglist__26973);
return G__26971__delegate(args);
});
G__26971.cljs$core$IFn$_invoke$arity$variadic = G__26971__delegate;
return G__26971;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__26974_SHARP_,p2__26975_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26974_SHARP_)),p2__26975_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__26976_SHARP_,p2__26977_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26976_SHARP_),p2__26977_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__26978 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__26978.addCallback(((function (G__26978){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__26978))
);

G__26978.addErrback(((function (G__26978){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__26978))
);

return G__26978;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e26979){if((e26979 instanceof Error)){
var e = e26979;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26979;

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
}catch (e26980){if((e26980 instanceof Error)){
var e = e26980;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26980;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__26981 = cljs.core._EQ_;
var expr__26982 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__26981.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__26982))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__26981.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__26982))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__26981.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__26982))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__26981,expr__26982){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__26981,expr__26982))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26984,callback){
var map__26985 = p__26984;
var map__26985__$1 = (((((!((map__26985 == null))))?(((((map__26985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26985):map__26985);
var file_msg = map__26985__$1;
var request_url = cljs.core.get.call(null,map__26985__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__26985,map__26985__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26985,map__26985__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__23368__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23368__auto__){
return (function (){
var f__23369__auto__ = (function (){var switch__23273__auto__ = ((function (c__23368__auto__){
return (function (state_27023){
var state_val_27024 = (state_27023[(1)]);
if((state_val_27024 === (7))){
var inst_27019 = (state_27023[(2)]);
var state_27023__$1 = state_27023;
var statearr_27025_27051 = state_27023__$1;
(statearr_27025_27051[(2)] = inst_27019);

(statearr_27025_27051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27024 === (1))){
var state_27023__$1 = state_27023;
var statearr_27026_27052 = state_27023__$1;
(statearr_27026_27052[(2)] = null);

(statearr_27026_27052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27024 === (4))){
var inst_26989 = (state_27023[(7)]);
var inst_26989__$1 = (state_27023[(2)]);
var state_27023__$1 = (function (){var statearr_27027 = state_27023;
(statearr_27027[(7)] = inst_26989__$1);

return statearr_27027;
})();
if(cljs.core.truth_(inst_26989__$1)){
var statearr_27028_27053 = state_27023__$1;
(statearr_27028_27053[(1)] = (5));

} else {
var statearr_27029_27054 = state_27023__$1;
(statearr_27029_27054[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27024 === (15))){
var inst_27004 = (state_27023[(8)]);
var inst_27002 = (state_27023[(9)]);
var inst_27006 = inst_27004.call(null,inst_27002);
var state_27023__$1 = state_27023;
var statearr_27030_27055 = state_27023__$1;
(statearr_27030_27055[(2)] = inst_27006);

(statearr_27030_27055[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27024 === (13))){
var inst_27013 = (state_27023[(2)]);
var state_27023__$1 = state_27023;
var statearr_27031_27056 = state_27023__$1;
(statearr_27031_27056[(2)] = inst_27013);

(statearr_27031_27056[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27024 === (6))){
var state_27023__$1 = state_27023;
var statearr_27032_27057 = state_27023__$1;
(statearr_27032_27057[(2)] = null);

(statearr_27032_27057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27024 === (17))){
var inst_27010 = (state_27023[(2)]);
var state_27023__$1 = state_27023;
var statearr_27033_27058 = state_27023__$1;
(statearr_27033_27058[(2)] = inst_27010);

(statearr_27033_27058[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27024 === (3))){
var inst_27021 = (state_27023[(2)]);
var state_27023__$1 = state_27023;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27023__$1,inst_27021);
} else {
if((state_val_27024 === (12))){
var state_27023__$1 = state_27023;
var statearr_27034_27059 = state_27023__$1;
(statearr_27034_27059[(2)] = null);

(statearr_27034_27059[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27024 === (2))){
var state_27023__$1 = state_27023;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27023__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27024 === (11))){
var inst_26994 = (state_27023[(10)]);
var inst_27000 = figwheel.client.file_reloading.blocking_load.call(null,inst_26994);
var state_27023__$1 = state_27023;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27023__$1,(14),inst_27000);
} else {
if((state_val_27024 === (9))){
var inst_26994 = (state_27023[(10)]);
var state_27023__$1 = state_27023;
if(cljs.core.truth_(inst_26994)){
var statearr_27035_27060 = state_27023__$1;
(statearr_27035_27060[(1)] = (11));

} else {
var statearr_27036_27061 = state_27023__$1;
(statearr_27036_27061[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27024 === (5))){
var inst_26989 = (state_27023[(7)]);
var inst_26995 = (state_27023[(11)]);
var inst_26994 = cljs.core.nth.call(null,inst_26989,(0),null);
var inst_26995__$1 = cljs.core.nth.call(null,inst_26989,(1),null);
var state_27023__$1 = (function (){var statearr_27037 = state_27023;
(statearr_27037[(11)] = inst_26995__$1);

(statearr_27037[(10)] = inst_26994);

return statearr_27037;
})();
if(cljs.core.truth_(inst_26995__$1)){
var statearr_27038_27062 = state_27023__$1;
(statearr_27038_27062[(1)] = (8));

} else {
var statearr_27039_27063 = state_27023__$1;
(statearr_27039_27063[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27024 === (14))){
var inst_27004 = (state_27023[(8)]);
var inst_26994 = (state_27023[(10)]);
var inst_27002 = (state_27023[(2)]);
var inst_27003 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27004__$1 = cljs.core.get.call(null,inst_27003,inst_26994);
var state_27023__$1 = (function (){var statearr_27040 = state_27023;
(statearr_27040[(8)] = inst_27004__$1);

(statearr_27040[(9)] = inst_27002);

return statearr_27040;
})();
if(cljs.core.truth_(inst_27004__$1)){
var statearr_27041_27064 = state_27023__$1;
(statearr_27041_27064[(1)] = (15));

} else {
var statearr_27042_27065 = state_27023__$1;
(statearr_27042_27065[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27024 === (16))){
var inst_27002 = (state_27023[(9)]);
var inst_27008 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27002);
var state_27023__$1 = state_27023;
var statearr_27043_27066 = state_27023__$1;
(statearr_27043_27066[(2)] = inst_27008);

(statearr_27043_27066[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27024 === (10))){
var inst_27015 = (state_27023[(2)]);
var state_27023__$1 = (function (){var statearr_27044 = state_27023;
(statearr_27044[(12)] = inst_27015);

return statearr_27044;
})();
var statearr_27045_27067 = state_27023__$1;
(statearr_27045_27067[(2)] = null);

(statearr_27045_27067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27024 === (8))){
var inst_26995 = (state_27023[(11)]);
var inst_26997 = eval(inst_26995);
var state_27023__$1 = state_27023;
var statearr_27046_27068 = state_27023__$1;
(statearr_27046_27068[(2)] = inst_26997);

(statearr_27046_27068[(1)] = (10));


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
});})(c__23368__auto__))
;
return ((function (switch__23273__auto__,c__23368__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23274__auto__ = null;
var figwheel$client$file_reloading$state_machine__23274__auto____0 = (function (){
var statearr_27047 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27047[(0)] = figwheel$client$file_reloading$state_machine__23274__auto__);

(statearr_27047[(1)] = (1));

return statearr_27047;
});
var figwheel$client$file_reloading$state_machine__23274__auto____1 = (function (state_27023){
while(true){
var ret_value__23275__auto__ = (function (){try{while(true){
var result__23276__auto__ = switch__23273__auto__.call(null,state_27023);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23276__auto__;
}
break;
}
}catch (e27048){if((e27048 instanceof Object)){
var ex__23277__auto__ = e27048;
var statearr_27049_27069 = state_27023;
(statearr_27049_27069[(5)] = ex__23277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27048;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27070 = state_27023;
state_27023 = G__27070;
continue;
} else {
return ret_value__23275__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23274__auto__ = function(state_27023){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23274__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23274__auto____1.call(this,state_27023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23274__auto____0;
figwheel$client$file_reloading$state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23274__auto____1;
return figwheel$client$file_reloading$state_machine__23274__auto__;
})()
;})(switch__23273__auto__,c__23368__auto__))
})();
var state__23370__auto__ = (function (){var statearr_27050 = f__23369__auto__.call(null);
(statearr_27050[(6)] = c__23368__auto__);

return statearr_27050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23370__auto__);
});})(c__23368__auto__))
);

return c__23368__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__27072 = arguments.length;
switch (G__27072) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27074,callback){
var map__27075 = p__27074;
var map__27075__$1 = (((((!((map__27075 == null))))?(((((map__27075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27075):map__27075);
var file_msg = map__27075__$1;
var namespace = cljs.core.get.call(null,map__27075__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27075,map__27075__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27075,map__27075__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__27077){
var map__27078 = p__27077;
var map__27078__$1 = (((((!((map__27078 == null))))?(((((map__27078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27078):map__27078);
var file_msg = map__27078__$1;
var namespace = cljs.core.get.call(null,map__27078__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27080){
var map__27081 = p__27080;
var map__27081__$1 = (((((!((map__27081 == null))))?(((((map__27081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27081):map__27081);
var file_msg = map__27081__$1;
var namespace = cljs.core.get.call(null,map__27081__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27083,callback){
var map__27084 = p__27083;
var map__27084__$1 = (((((!((map__27084 == null))))?(((((map__27084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27084):map__27084);
var file_msg = map__27084__$1;
var request_url = cljs.core.get.call(null,map__27084__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27084__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__23368__auto___27134 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23368__auto___27134,out){
return (function (){
var f__23369__auto__ = (function (){var switch__23273__auto__ = ((function (c__23368__auto___27134,out){
return (function (state_27119){
var state_val_27120 = (state_27119[(1)]);
if((state_val_27120 === (1))){
var inst_27093 = cljs.core.seq.call(null,files);
var inst_27094 = cljs.core.first.call(null,inst_27093);
var inst_27095 = cljs.core.next.call(null,inst_27093);
var inst_27096 = files;
var state_27119__$1 = (function (){var statearr_27121 = state_27119;
(statearr_27121[(7)] = inst_27095);

(statearr_27121[(8)] = inst_27094);

(statearr_27121[(9)] = inst_27096);

return statearr_27121;
})();
var statearr_27122_27135 = state_27119__$1;
(statearr_27122_27135[(2)] = null);

(statearr_27122_27135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27120 === (2))){
var inst_27102 = (state_27119[(10)]);
var inst_27096 = (state_27119[(9)]);
var inst_27101 = cljs.core.seq.call(null,inst_27096);
var inst_27102__$1 = cljs.core.first.call(null,inst_27101);
var inst_27103 = cljs.core.next.call(null,inst_27101);
var inst_27104 = (inst_27102__$1 == null);
var inst_27105 = cljs.core.not.call(null,inst_27104);
var state_27119__$1 = (function (){var statearr_27123 = state_27119;
(statearr_27123[(10)] = inst_27102__$1);

(statearr_27123[(11)] = inst_27103);

return statearr_27123;
})();
if(inst_27105){
var statearr_27124_27136 = state_27119__$1;
(statearr_27124_27136[(1)] = (4));

} else {
var statearr_27125_27137 = state_27119__$1;
(statearr_27125_27137[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27120 === (3))){
var inst_27117 = (state_27119[(2)]);
var state_27119__$1 = state_27119;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27119__$1,inst_27117);
} else {
if((state_val_27120 === (4))){
var inst_27102 = (state_27119[(10)]);
var inst_27107 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27102);
var state_27119__$1 = state_27119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27119__$1,(7),inst_27107);
} else {
if((state_val_27120 === (5))){
var inst_27113 = cljs.core.async.close_BANG_.call(null,out);
var state_27119__$1 = state_27119;
var statearr_27126_27138 = state_27119__$1;
(statearr_27126_27138[(2)] = inst_27113);

(statearr_27126_27138[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27120 === (6))){
var inst_27115 = (state_27119[(2)]);
var state_27119__$1 = state_27119;
var statearr_27127_27139 = state_27119__$1;
(statearr_27127_27139[(2)] = inst_27115);

(statearr_27127_27139[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27120 === (7))){
var inst_27103 = (state_27119[(11)]);
var inst_27109 = (state_27119[(2)]);
var inst_27110 = cljs.core.async.put_BANG_.call(null,out,inst_27109);
var inst_27096 = inst_27103;
var state_27119__$1 = (function (){var statearr_27128 = state_27119;
(statearr_27128[(9)] = inst_27096);

(statearr_27128[(12)] = inst_27110);

return statearr_27128;
})();
var statearr_27129_27140 = state_27119__$1;
(statearr_27129_27140[(2)] = null);

(statearr_27129_27140[(1)] = (2));


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
});})(c__23368__auto___27134,out))
;
return ((function (switch__23273__auto__,c__23368__auto___27134,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23274__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23274__auto____0 = (function (){
var statearr_27130 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27130[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23274__auto__);

(statearr_27130[(1)] = (1));

return statearr_27130;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23274__auto____1 = (function (state_27119){
while(true){
var ret_value__23275__auto__ = (function (){try{while(true){
var result__23276__auto__ = switch__23273__auto__.call(null,state_27119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23276__auto__;
}
break;
}
}catch (e27131){if((e27131 instanceof Object)){
var ex__23277__auto__ = e27131;
var statearr_27132_27141 = state_27119;
(statearr_27132_27141[(5)] = ex__23277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27142 = state_27119;
state_27119 = G__27142;
continue;
} else {
return ret_value__23275__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23274__auto__ = function(state_27119){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23274__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23274__auto____1.call(this,state_27119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23274__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23274__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23274__auto__;
})()
;})(switch__23273__auto__,c__23368__auto___27134,out))
})();
var state__23370__auto__ = (function (){var statearr_27133 = f__23369__auto__.call(null);
(statearr_27133[(6)] = c__23368__auto___27134);

return statearr_27133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23370__auto__);
});})(c__23368__auto___27134,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27143,opts){
var map__27144 = p__27143;
var map__27144__$1 = (((((!((map__27144 == null))))?(((((map__27144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27144):map__27144);
var eval_body = cljs.core.get.call(null,map__27144__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27144__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e27146){var e = e27146;
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
return (function (p1__27147_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27147_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__27148){
var vec__27149 = p__27148;
var k = cljs.core.nth.call(null,vec__27149,(0),null);
var v = cljs.core.nth.call(null,vec__27149,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27152){
var vec__27153 = p__27152;
var k = cljs.core.nth.call(null,vec__27153,(0),null);
var v = cljs.core.nth.call(null,vec__27153,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27159,p__27160){
var map__27161 = p__27159;
var map__27161__$1 = (((((!((map__27161 == null))))?(((((map__27161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27161):map__27161);
var opts = map__27161__$1;
var before_jsload = cljs.core.get.call(null,map__27161__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27161__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27161__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27162 = p__27160;
var map__27162__$1 = (((((!((map__27162 == null))))?(((((map__27162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27162):map__27162);
var msg = map__27162__$1;
var files = cljs.core.get.call(null,map__27162__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27162__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27162__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23368__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23368__auto__,map__27161,map__27161__$1,opts,before_jsload,on_jsload,reload_dependents,map__27162,map__27162__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__23369__auto__ = (function (){var switch__23273__auto__ = ((function (c__23368__auto__,map__27161,map__27161__$1,opts,before_jsload,on_jsload,reload_dependents,map__27162,map__27162__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27316){
var state_val_27317 = (state_27316[(1)]);
if((state_val_27317 === (7))){
var inst_27179 = (state_27316[(7)]);
var inst_27178 = (state_27316[(8)]);
var inst_27176 = (state_27316[(9)]);
var inst_27177 = (state_27316[(10)]);
var inst_27184 = cljs.core._nth.call(null,inst_27177,inst_27179);
var inst_27185 = figwheel.client.file_reloading.eval_body.call(null,inst_27184,opts);
var inst_27186 = (inst_27179 + (1));
var tmp27318 = inst_27178;
var tmp27319 = inst_27176;
var tmp27320 = inst_27177;
var inst_27176__$1 = tmp27319;
var inst_27177__$1 = tmp27320;
var inst_27178__$1 = tmp27318;
var inst_27179__$1 = inst_27186;
var state_27316__$1 = (function (){var statearr_27321 = state_27316;
(statearr_27321[(7)] = inst_27179__$1);

(statearr_27321[(8)] = inst_27178__$1);

(statearr_27321[(11)] = inst_27185);

(statearr_27321[(9)] = inst_27176__$1);

(statearr_27321[(10)] = inst_27177__$1);

return statearr_27321;
})();
var statearr_27322_27405 = state_27316__$1;
(statearr_27322_27405[(2)] = null);

(statearr_27322_27405[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (20))){
var inst_27219 = (state_27316[(12)]);
var inst_27227 = figwheel.client.file_reloading.sort_files.call(null,inst_27219);
var state_27316__$1 = state_27316;
var statearr_27323_27406 = state_27316__$1;
(statearr_27323_27406[(2)] = inst_27227);

(statearr_27323_27406[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (27))){
var state_27316__$1 = state_27316;
var statearr_27324_27407 = state_27316__$1;
(statearr_27324_27407[(2)] = null);

(statearr_27324_27407[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (1))){
var inst_27168 = (state_27316[(13)]);
var inst_27165 = before_jsload.call(null,files);
var inst_27166 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27167 = (function (){return ((function (inst_27168,inst_27165,inst_27166,state_val_27317,c__23368__auto__,map__27161,map__27161__$1,opts,before_jsload,on_jsload,reload_dependents,map__27162,map__27162__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27156_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27156_SHARP_);
});
;})(inst_27168,inst_27165,inst_27166,state_val_27317,c__23368__auto__,map__27161,map__27161__$1,opts,before_jsload,on_jsload,reload_dependents,map__27162,map__27162__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27168__$1 = cljs.core.filter.call(null,inst_27167,files);
var inst_27169 = cljs.core.not_empty.call(null,inst_27168__$1);
var state_27316__$1 = (function (){var statearr_27325 = state_27316;
(statearr_27325[(13)] = inst_27168__$1);

(statearr_27325[(14)] = inst_27166);

(statearr_27325[(15)] = inst_27165);

return statearr_27325;
})();
if(cljs.core.truth_(inst_27169)){
var statearr_27326_27408 = state_27316__$1;
(statearr_27326_27408[(1)] = (2));

} else {
var statearr_27327_27409 = state_27316__$1;
(statearr_27327_27409[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (24))){
var state_27316__$1 = state_27316;
var statearr_27328_27410 = state_27316__$1;
(statearr_27328_27410[(2)] = null);

(statearr_27328_27410[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (39))){
var inst_27269 = (state_27316[(16)]);
var state_27316__$1 = state_27316;
var statearr_27329_27411 = state_27316__$1;
(statearr_27329_27411[(2)] = inst_27269);

(statearr_27329_27411[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (46))){
var inst_27311 = (state_27316[(2)]);
var state_27316__$1 = state_27316;
var statearr_27330_27412 = state_27316__$1;
(statearr_27330_27412[(2)] = inst_27311);

(statearr_27330_27412[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (4))){
var inst_27213 = (state_27316[(2)]);
var inst_27214 = cljs.core.List.EMPTY;
var inst_27215 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27214);
var inst_27216 = (function (){return ((function (inst_27213,inst_27214,inst_27215,state_val_27317,c__23368__auto__,map__27161,map__27161__$1,opts,before_jsload,on_jsload,reload_dependents,map__27162,map__27162__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27157_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27157_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27157_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__27157_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_27213,inst_27214,inst_27215,state_val_27317,c__23368__auto__,map__27161,map__27161__$1,opts,before_jsload,on_jsload,reload_dependents,map__27162,map__27162__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27217 = cljs.core.filter.call(null,inst_27216,files);
var inst_27218 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27219 = cljs.core.concat.call(null,inst_27217,inst_27218);
var state_27316__$1 = (function (){var statearr_27331 = state_27316;
(statearr_27331[(17)] = inst_27213);

(statearr_27331[(18)] = inst_27215);

(statearr_27331[(12)] = inst_27219);

return statearr_27331;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27332_27413 = state_27316__$1;
(statearr_27332_27413[(1)] = (16));

} else {
var statearr_27333_27414 = state_27316__$1;
(statearr_27333_27414[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (15))){
var inst_27203 = (state_27316[(2)]);
var state_27316__$1 = state_27316;
var statearr_27334_27415 = state_27316__$1;
(statearr_27334_27415[(2)] = inst_27203);

(statearr_27334_27415[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (21))){
var inst_27229 = (state_27316[(19)]);
var inst_27229__$1 = (state_27316[(2)]);
var inst_27230 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27229__$1);
var state_27316__$1 = (function (){var statearr_27335 = state_27316;
(statearr_27335[(19)] = inst_27229__$1);

return statearr_27335;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27316__$1,(22),inst_27230);
} else {
if((state_val_27317 === (31))){
var inst_27314 = (state_27316[(2)]);
var state_27316__$1 = state_27316;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27316__$1,inst_27314);
} else {
if((state_val_27317 === (32))){
var inst_27269 = (state_27316[(16)]);
var inst_27274 = inst_27269.cljs$lang$protocol_mask$partition0$;
var inst_27275 = (inst_27274 & (64));
var inst_27276 = inst_27269.cljs$core$ISeq$;
var inst_27277 = (cljs.core.PROTOCOL_SENTINEL === inst_27276);
var inst_27278 = ((inst_27275) || (inst_27277));
var state_27316__$1 = state_27316;
if(cljs.core.truth_(inst_27278)){
var statearr_27336_27416 = state_27316__$1;
(statearr_27336_27416[(1)] = (35));

} else {
var statearr_27337_27417 = state_27316__$1;
(statearr_27337_27417[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (40))){
var inst_27291 = (state_27316[(20)]);
var inst_27290 = (state_27316[(2)]);
var inst_27291__$1 = cljs.core.get.call(null,inst_27290,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27292 = cljs.core.get.call(null,inst_27290,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27293 = cljs.core.not_empty.call(null,inst_27291__$1);
var state_27316__$1 = (function (){var statearr_27338 = state_27316;
(statearr_27338[(20)] = inst_27291__$1);

(statearr_27338[(21)] = inst_27292);

return statearr_27338;
})();
if(cljs.core.truth_(inst_27293)){
var statearr_27339_27418 = state_27316__$1;
(statearr_27339_27418[(1)] = (41));

} else {
var statearr_27340_27419 = state_27316__$1;
(statearr_27340_27419[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (33))){
var state_27316__$1 = state_27316;
var statearr_27341_27420 = state_27316__$1;
(statearr_27341_27420[(2)] = false);

(statearr_27341_27420[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (13))){
var inst_27189 = (state_27316[(22)]);
var inst_27193 = cljs.core.chunk_first.call(null,inst_27189);
var inst_27194 = cljs.core.chunk_rest.call(null,inst_27189);
var inst_27195 = cljs.core.count.call(null,inst_27193);
var inst_27176 = inst_27194;
var inst_27177 = inst_27193;
var inst_27178 = inst_27195;
var inst_27179 = (0);
var state_27316__$1 = (function (){var statearr_27342 = state_27316;
(statearr_27342[(7)] = inst_27179);

(statearr_27342[(8)] = inst_27178);

(statearr_27342[(9)] = inst_27176);

(statearr_27342[(10)] = inst_27177);

return statearr_27342;
})();
var statearr_27343_27421 = state_27316__$1;
(statearr_27343_27421[(2)] = null);

(statearr_27343_27421[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (22))){
var inst_27237 = (state_27316[(23)]);
var inst_27233 = (state_27316[(24)]);
var inst_27229 = (state_27316[(19)]);
var inst_27232 = (state_27316[(25)]);
var inst_27232__$1 = (state_27316[(2)]);
var inst_27233__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27232__$1);
var inst_27234 = (function (){var all_files = inst_27229;
var res_SINGLEQUOTE_ = inst_27232__$1;
var res = inst_27233__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27237,inst_27233,inst_27229,inst_27232,inst_27232__$1,inst_27233__$1,state_val_27317,c__23368__auto__,map__27161,map__27161__$1,opts,before_jsload,on_jsload,reload_dependents,map__27162,map__27162__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27158_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27158_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27237,inst_27233,inst_27229,inst_27232,inst_27232__$1,inst_27233__$1,state_val_27317,c__23368__auto__,map__27161,map__27161__$1,opts,before_jsload,on_jsload,reload_dependents,map__27162,map__27162__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27235 = cljs.core.filter.call(null,inst_27234,inst_27232__$1);
var inst_27236 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27237__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27236);
var inst_27238 = cljs.core.not_empty.call(null,inst_27237__$1);
var state_27316__$1 = (function (){var statearr_27344 = state_27316;
(statearr_27344[(23)] = inst_27237__$1);

(statearr_27344[(24)] = inst_27233__$1);

(statearr_27344[(25)] = inst_27232__$1);

(statearr_27344[(26)] = inst_27235);

return statearr_27344;
})();
if(cljs.core.truth_(inst_27238)){
var statearr_27345_27422 = state_27316__$1;
(statearr_27345_27422[(1)] = (23));

} else {
var statearr_27346_27423 = state_27316__$1;
(statearr_27346_27423[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (36))){
var state_27316__$1 = state_27316;
var statearr_27347_27424 = state_27316__$1;
(statearr_27347_27424[(2)] = false);

(statearr_27347_27424[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (41))){
var inst_27291 = (state_27316[(20)]);
var inst_27295 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27296 = cljs.core.map.call(null,inst_27295,inst_27291);
var inst_27297 = cljs.core.pr_str.call(null,inst_27296);
var inst_27298 = ["figwheel-no-load meta-data: ",inst_27297].join('');
var inst_27299 = figwheel.client.utils.log.call(null,inst_27298);
var state_27316__$1 = state_27316;
var statearr_27348_27425 = state_27316__$1;
(statearr_27348_27425[(2)] = inst_27299);

(statearr_27348_27425[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (43))){
var inst_27292 = (state_27316[(21)]);
var inst_27302 = (state_27316[(2)]);
var inst_27303 = cljs.core.not_empty.call(null,inst_27292);
var state_27316__$1 = (function (){var statearr_27349 = state_27316;
(statearr_27349[(27)] = inst_27302);

return statearr_27349;
})();
if(cljs.core.truth_(inst_27303)){
var statearr_27350_27426 = state_27316__$1;
(statearr_27350_27426[(1)] = (44));

} else {
var statearr_27351_27427 = state_27316__$1;
(statearr_27351_27427[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (29))){
var inst_27237 = (state_27316[(23)]);
var inst_27233 = (state_27316[(24)]);
var inst_27269 = (state_27316[(16)]);
var inst_27229 = (state_27316[(19)]);
var inst_27232 = (state_27316[(25)]);
var inst_27235 = (state_27316[(26)]);
var inst_27265 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27268 = (function (){var all_files = inst_27229;
var res_SINGLEQUOTE_ = inst_27232;
var res = inst_27233;
var files_not_loaded = inst_27235;
var dependencies_that_loaded = inst_27237;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27237,inst_27233,inst_27269,inst_27229,inst_27232,inst_27235,inst_27265,state_val_27317,c__23368__auto__,map__27161,map__27161__$1,opts,before_jsload,on_jsload,reload_dependents,map__27162,map__27162__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27267){
var map__27352 = p__27267;
var map__27352__$1 = (((((!((map__27352 == null))))?(((((map__27352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27352):map__27352);
var namespace = cljs.core.get.call(null,map__27352__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27237,inst_27233,inst_27269,inst_27229,inst_27232,inst_27235,inst_27265,state_val_27317,c__23368__auto__,map__27161,map__27161__$1,opts,before_jsload,on_jsload,reload_dependents,map__27162,map__27162__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27269__$1 = cljs.core.group_by.call(null,inst_27268,inst_27235);
var inst_27271 = (inst_27269__$1 == null);
var inst_27272 = cljs.core.not.call(null,inst_27271);
var state_27316__$1 = (function (){var statearr_27354 = state_27316;
(statearr_27354[(28)] = inst_27265);

(statearr_27354[(16)] = inst_27269__$1);

return statearr_27354;
})();
if(inst_27272){
var statearr_27355_27428 = state_27316__$1;
(statearr_27355_27428[(1)] = (32));

} else {
var statearr_27356_27429 = state_27316__$1;
(statearr_27356_27429[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (44))){
var inst_27292 = (state_27316[(21)]);
var inst_27305 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27292);
var inst_27306 = cljs.core.pr_str.call(null,inst_27305);
var inst_27307 = ["not required: ",inst_27306].join('');
var inst_27308 = figwheel.client.utils.log.call(null,inst_27307);
var state_27316__$1 = state_27316;
var statearr_27357_27430 = state_27316__$1;
(statearr_27357_27430[(2)] = inst_27308);

(statearr_27357_27430[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (6))){
var inst_27210 = (state_27316[(2)]);
var state_27316__$1 = state_27316;
var statearr_27358_27431 = state_27316__$1;
(statearr_27358_27431[(2)] = inst_27210);

(statearr_27358_27431[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (28))){
var inst_27235 = (state_27316[(26)]);
var inst_27262 = (state_27316[(2)]);
var inst_27263 = cljs.core.not_empty.call(null,inst_27235);
var state_27316__$1 = (function (){var statearr_27359 = state_27316;
(statearr_27359[(29)] = inst_27262);

return statearr_27359;
})();
if(cljs.core.truth_(inst_27263)){
var statearr_27360_27432 = state_27316__$1;
(statearr_27360_27432[(1)] = (29));

} else {
var statearr_27361_27433 = state_27316__$1;
(statearr_27361_27433[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (25))){
var inst_27233 = (state_27316[(24)]);
var inst_27249 = (state_27316[(2)]);
var inst_27250 = cljs.core.not_empty.call(null,inst_27233);
var state_27316__$1 = (function (){var statearr_27362 = state_27316;
(statearr_27362[(30)] = inst_27249);

return statearr_27362;
})();
if(cljs.core.truth_(inst_27250)){
var statearr_27363_27434 = state_27316__$1;
(statearr_27363_27434[(1)] = (26));

} else {
var statearr_27364_27435 = state_27316__$1;
(statearr_27364_27435[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (34))){
var inst_27285 = (state_27316[(2)]);
var state_27316__$1 = state_27316;
if(cljs.core.truth_(inst_27285)){
var statearr_27365_27436 = state_27316__$1;
(statearr_27365_27436[(1)] = (38));

} else {
var statearr_27366_27437 = state_27316__$1;
(statearr_27366_27437[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (17))){
var state_27316__$1 = state_27316;
var statearr_27367_27438 = state_27316__$1;
(statearr_27367_27438[(2)] = recompile_dependents);

(statearr_27367_27438[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (3))){
var state_27316__$1 = state_27316;
var statearr_27368_27439 = state_27316__$1;
(statearr_27368_27439[(2)] = null);

(statearr_27368_27439[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (12))){
var inst_27206 = (state_27316[(2)]);
var state_27316__$1 = state_27316;
var statearr_27369_27440 = state_27316__$1;
(statearr_27369_27440[(2)] = inst_27206);

(statearr_27369_27440[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (2))){
var inst_27168 = (state_27316[(13)]);
var inst_27175 = cljs.core.seq.call(null,inst_27168);
var inst_27176 = inst_27175;
var inst_27177 = null;
var inst_27178 = (0);
var inst_27179 = (0);
var state_27316__$1 = (function (){var statearr_27370 = state_27316;
(statearr_27370[(7)] = inst_27179);

(statearr_27370[(8)] = inst_27178);

(statearr_27370[(9)] = inst_27176);

(statearr_27370[(10)] = inst_27177);

return statearr_27370;
})();
var statearr_27371_27441 = state_27316__$1;
(statearr_27371_27441[(2)] = null);

(statearr_27371_27441[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (23))){
var inst_27237 = (state_27316[(23)]);
var inst_27233 = (state_27316[(24)]);
var inst_27229 = (state_27316[(19)]);
var inst_27232 = (state_27316[(25)]);
var inst_27235 = (state_27316[(26)]);
var inst_27240 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27242 = (function (){var all_files = inst_27229;
var res_SINGLEQUOTE_ = inst_27232;
var res = inst_27233;
var files_not_loaded = inst_27235;
var dependencies_that_loaded = inst_27237;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27237,inst_27233,inst_27229,inst_27232,inst_27235,inst_27240,state_val_27317,c__23368__auto__,map__27161,map__27161__$1,opts,before_jsload,on_jsload,reload_dependents,map__27162,map__27162__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27241){
var map__27372 = p__27241;
var map__27372__$1 = (((((!((map__27372 == null))))?(((((map__27372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27372):map__27372);
var request_url = cljs.core.get.call(null,map__27372__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27237,inst_27233,inst_27229,inst_27232,inst_27235,inst_27240,state_val_27317,c__23368__auto__,map__27161,map__27161__$1,opts,before_jsload,on_jsload,reload_dependents,map__27162,map__27162__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27243 = cljs.core.reverse.call(null,inst_27237);
var inst_27244 = cljs.core.map.call(null,inst_27242,inst_27243);
var inst_27245 = cljs.core.pr_str.call(null,inst_27244);
var inst_27246 = figwheel.client.utils.log.call(null,inst_27245);
var state_27316__$1 = (function (){var statearr_27374 = state_27316;
(statearr_27374[(31)] = inst_27240);

return statearr_27374;
})();
var statearr_27375_27442 = state_27316__$1;
(statearr_27375_27442[(2)] = inst_27246);

(statearr_27375_27442[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (35))){
var state_27316__$1 = state_27316;
var statearr_27376_27443 = state_27316__$1;
(statearr_27376_27443[(2)] = true);

(statearr_27376_27443[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (19))){
var inst_27219 = (state_27316[(12)]);
var inst_27225 = figwheel.client.file_reloading.expand_files.call(null,inst_27219);
var state_27316__$1 = state_27316;
var statearr_27377_27444 = state_27316__$1;
(statearr_27377_27444[(2)] = inst_27225);

(statearr_27377_27444[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (11))){
var state_27316__$1 = state_27316;
var statearr_27378_27445 = state_27316__$1;
(statearr_27378_27445[(2)] = null);

(statearr_27378_27445[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (9))){
var inst_27208 = (state_27316[(2)]);
var state_27316__$1 = state_27316;
var statearr_27379_27446 = state_27316__$1;
(statearr_27379_27446[(2)] = inst_27208);

(statearr_27379_27446[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (5))){
var inst_27179 = (state_27316[(7)]);
var inst_27178 = (state_27316[(8)]);
var inst_27181 = (inst_27179 < inst_27178);
var inst_27182 = inst_27181;
var state_27316__$1 = state_27316;
if(cljs.core.truth_(inst_27182)){
var statearr_27380_27447 = state_27316__$1;
(statearr_27380_27447[(1)] = (7));

} else {
var statearr_27381_27448 = state_27316__$1;
(statearr_27381_27448[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (14))){
var inst_27189 = (state_27316[(22)]);
var inst_27198 = cljs.core.first.call(null,inst_27189);
var inst_27199 = figwheel.client.file_reloading.eval_body.call(null,inst_27198,opts);
var inst_27200 = cljs.core.next.call(null,inst_27189);
var inst_27176 = inst_27200;
var inst_27177 = null;
var inst_27178 = (0);
var inst_27179 = (0);
var state_27316__$1 = (function (){var statearr_27382 = state_27316;
(statearr_27382[(7)] = inst_27179);

(statearr_27382[(32)] = inst_27199);

(statearr_27382[(8)] = inst_27178);

(statearr_27382[(9)] = inst_27176);

(statearr_27382[(10)] = inst_27177);

return statearr_27382;
})();
var statearr_27383_27449 = state_27316__$1;
(statearr_27383_27449[(2)] = null);

(statearr_27383_27449[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (45))){
var state_27316__$1 = state_27316;
var statearr_27384_27450 = state_27316__$1;
(statearr_27384_27450[(2)] = null);

(statearr_27384_27450[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (26))){
var inst_27237 = (state_27316[(23)]);
var inst_27233 = (state_27316[(24)]);
var inst_27229 = (state_27316[(19)]);
var inst_27232 = (state_27316[(25)]);
var inst_27235 = (state_27316[(26)]);
var inst_27252 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27254 = (function (){var all_files = inst_27229;
var res_SINGLEQUOTE_ = inst_27232;
var res = inst_27233;
var files_not_loaded = inst_27235;
var dependencies_that_loaded = inst_27237;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27237,inst_27233,inst_27229,inst_27232,inst_27235,inst_27252,state_val_27317,c__23368__auto__,map__27161,map__27161__$1,opts,before_jsload,on_jsload,reload_dependents,map__27162,map__27162__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27253){
var map__27385 = p__27253;
var map__27385__$1 = (((((!((map__27385 == null))))?(((((map__27385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27385):map__27385);
var namespace = cljs.core.get.call(null,map__27385__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27385__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27237,inst_27233,inst_27229,inst_27232,inst_27235,inst_27252,state_val_27317,c__23368__auto__,map__27161,map__27161__$1,opts,before_jsload,on_jsload,reload_dependents,map__27162,map__27162__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27255 = cljs.core.map.call(null,inst_27254,inst_27233);
var inst_27256 = cljs.core.pr_str.call(null,inst_27255);
var inst_27257 = figwheel.client.utils.log.call(null,inst_27256);
var inst_27258 = (function (){var all_files = inst_27229;
var res_SINGLEQUOTE_ = inst_27232;
var res = inst_27233;
var files_not_loaded = inst_27235;
var dependencies_that_loaded = inst_27237;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27237,inst_27233,inst_27229,inst_27232,inst_27235,inst_27252,inst_27254,inst_27255,inst_27256,inst_27257,state_val_27317,c__23368__auto__,map__27161,map__27161__$1,opts,before_jsload,on_jsload,reload_dependents,map__27162,map__27162__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27237,inst_27233,inst_27229,inst_27232,inst_27235,inst_27252,inst_27254,inst_27255,inst_27256,inst_27257,state_val_27317,c__23368__auto__,map__27161,map__27161__$1,opts,before_jsload,on_jsload,reload_dependents,map__27162,map__27162__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27259 = setTimeout(inst_27258,(10));
var state_27316__$1 = (function (){var statearr_27387 = state_27316;
(statearr_27387[(33)] = inst_27257);

(statearr_27387[(34)] = inst_27252);

return statearr_27387;
})();
var statearr_27388_27451 = state_27316__$1;
(statearr_27388_27451[(2)] = inst_27259);

(statearr_27388_27451[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (16))){
var state_27316__$1 = state_27316;
var statearr_27389_27452 = state_27316__$1;
(statearr_27389_27452[(2)] = reload_dependents);

(statearr_27389_27452[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (38))){
var inst_27269 = (state_27316[(16)]);
var inst_27287 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27269);
var state_27316__$1 = state_27316;
var statearr_27390_27453 = state_27316__$1;
(statearr_27390_27453[(2)] = inst_27287);

(statearr_27390_27453[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (30))){
var state_27316__$1 = state_27316;
var statearr_27391_27454 = state_27316__$1;
(statearr_27391_27454[(2)] = null);

(statearr_27391_27454[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (10))){
var inst_27189 = (state_27316[(22)]);
var inst_27191 = cljs.core.chunked_seq_QMARK_.call(null,inst_27189);
var state_27316__$1 = state_27316;
if(inst_27191){
var statearr_27392_27455 = state_27316__$1;
(statearr_27392_27455[(1)] = (13));

} else {
var statearr_27393_27456 = state_27316__$1;
(statearr_27393_27456[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (18))){
var inst_27223 = (state_27316[(2)]);
var state_27316__$1 = state_27316;
if(cljs.core.truth_(inst_27223)){
var statearr_27394_27457 = state_27316__$1;
(statearr_27394_27457[(1)] = (19));

} else {
var statearr_27395_27458 = state_27316__$1;
(statearr_27395_27458[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (42))){
var state_27316__$1 = state_27316;
var statearr_27396_27459 = state_27316__$1;
(statearr_27396_27459[(2)] = null);

(statearr_27396_27459[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (37))){
var inst_27282 = (state_27316[(2)]);
var state_27316__$1 = state_27316;
var statearr_27397_27460 = state_27316__$1;
(statearr_27397_27460[(2)] = inst_27282);

(statearr_27397_27460[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (8))){
var inst_27189 = (state_27316[(22)]);
var inst_27176 = (state_27316[(9)]);
var inst_27189__$1 = cljs.core.seq.call(null,inst_27176);
var state_27316__$1 = (function (){var statearr_27398 = state_27316;
(statearr_27398[(22)] = inst_27189__$1);

return statearr_27398;
})();
if(inst_27189__$1){
var statearr_27399_27461 = state_27316__$1;
(statearr_27399_27461[(1)] = (10));

} else {
var statearr_27400_27462 = state_27316__$1;
(statearr_27400_27462[(1)] = (11));

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
});})(c__23368__auto__,map__27161,map__27161__$1,opts,before_jsload,on_jsload,reload_dependents,map__27162,map__27162__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23273__auto__,c__23368__auto__,map__27161,map__27161__$1,opts,before_jsload,on_jsload,reload_dependents,map__27162,map__27162__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23274__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23274__auto____0 = (function (){
var statearr_27401 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27401[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23274__auto__);

(statearr_27401[(1)] = (1));

return statearr_27401;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23274__auto____1 = (function (state_27316){
while(true){
var ret_value__23275__auto__ = (function (){try{while(true){
var result__23276__auto__ = switch__23273__auto__.call(null,state_27316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23276__auto__;
}
break;
}
}catch (e27402){if((e27402 instanceof Object)){
var ex__23277__auto__ = e27402;
var statearr_27403_27463 = state_27316;
(statearr_27403_27463[(5)] = ex__23277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27464 = state_27316;
state_27316 = G__27464;
continue;
} else {
return ret_value__23275__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23274__auto__ = function(state_27316){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23274__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23274__auto____1.call(this,state_27316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23274__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23274__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23274__auto__;
})()
;})(switch__23273__auto__,c__23368__auto__,map__27161,map__27161__$1,opts,before_jsload,on_jsload,reload_dependents,map__27162,map__27162__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__23370__auto__ = (function (){var statearr_27404 = f__23369__auto__.call(null);
(statearr_27404[(6)] = c__23368__auto__);

return statearr_27404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23370__auto__);
});})(c__23368__auto__,map__27161,map__27161__$1,opts,before_jsload,on_jsload,reload_dependents,map__27162,map__27162__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__23368__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27467,link){
var map__27468 = p__27467;
var map__27468__$1 = (((((!((map__27468 == null))))?(((((map__27468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27468):map__27468);
var file = cljs.core.get.call(null,map__27468__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5735__auto__,map__27468,map__27468__$1,file){
return (function (p1__27465_SHARP_,p2__27466_SHARP_){
if(cljs.core._EQ_.call(null,p1__27465_SHARP_,p2__27466_SHARP_)){
return p1__27465_SHARP_;
} else {
return false;
}
});})(link_href,temp__5735__auto__,map__27468,map__27468__$1,file))
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
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27471){
var map__27472 = p__27471;
var map__27472__$1 = (((((!((map__27472 == null))))?(((((map__27472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27472.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27472):map__27472);
var match_length = cljs.core.get.call(null,map__27472__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27472__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27470_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27470_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27474_SHARP_,p2__27475_SHARP_){
return cljs.core.assoc.call(null,p1__27474_SHARP_,cljs.core.get.call(null,p2__27475_SHARP_,key),p2__27475_SHARP_);
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
var loaded_f_datas_27476 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_27476);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_27476);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27477,p__27478){
var map__27479 = p__27477;
var map__27479__$1 = (((((!((map__27479 == null))))?(((((map__27479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27479):map__27479);
var on_cssload = cljs.core.get.call(null,map__27479__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__27480 = p__27478;
var map__27480__$1 = (((((!((map__27480 == null))))?(((((map__27480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27480.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27480):map__27480);
var files_msg = map__27480__$1;
var files = cljs.core.get.call(null,map__27480__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1703259698849
