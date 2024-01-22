// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__28349){
var map__28350 = p__28349;
var map__28350__$1 = (((((!((map__28350 == null))))?(((((map__28350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28350):map__28350);
var m = map__28350__$1;
var n = cljs.core.get.call(null,map__28350__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__28350__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28352_28384 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28353_28385 = null;
var count__28354_28386 = (0);
var i__28355_28387 = (0);
while(true){
if((i__28355_28387 < count__28354_28386)){
var f_28388 = cljs.core._nth.call(null,chunk__28353_28385,i__28355_28387);
cljs.core.println.call(null,"  ",f_28388);


var G__28389 = seq__28352_28384;
var G__28390 = chunk__28353_28385;
var G__28391 = count__28354_28386;
var G__28392 = (i__28355_28387 + (1));
seq__28352_28384 = G__28389;
chunk__28353_28385 = G__28390;
count__28354_28386 = G__28391;
i__28355_28387 = G__28392;
continue;
} else {
var temp__5735__auto___28393 = cljs.core.seq.call(null,seq__28352_28384);
if(temp__5735__auto___28393){
var seq__28352_28394__$1 = temp__5735__auto___28393;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28352_28394__$1)){
var c__4550__auto___28395 = cljs.core.chunk_first.call(null,seq__28352_28394__$1);
var G__28396 = cljs.core.chunk_rest.call(null,seq__28352_28394__$1);
var G__28397 = c__4550__auto___28395;
var G__28398 = cljs.core.count.call(null,c__4550__auto___28395);
var G__28399 = (0);
seq__28352_28384 = G__28396;
chunk__28353_28385 = G__28397;
count__28354_28386 = G__28398;
i__28355_28387 = G__28399;
continue;
} else {
var f_28400 = cljs.core.first.call(null,seq__28352_28394__$1);
cljs.core.println.call(null,"  ",f_28400);


var G__28401 = cljs.core.next.call(null,seq__28352_28394__$1);
var G__28402 = null;
var G__28403 = (0);
var G__28404 = (0);
seq__28352_28384 = G__28401;
chunk__28353_28385 = G__28402;
count__28354_28386 = G__28403;
i__28355_28387 = G__28404;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28405 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28405);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28405)))?cljs.core.second.call(null,arglists_28405):arglists_28405));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28356_28406 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28357_28407 = null;
var count__28358_28408 = (0);
var i__28359_28409 = (0);
while(true){
if((i__28359_28409 < count__28358_28408)){
var vec__28370_28410 = cljs.core._nth.call(null,chunk__28357_28407,i__28359_28409);
var name_28411 = cljs.core.nth.call(null,vec__28370_28410,(0),null);
var map__28373_28412 = cljs.core.nth.call(null,vec__28370_28410,(1),null);
var map__28373_28413__$1 = (((((!((map__28373_28412 == null))))?(((((map__28373_28412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28373_28412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28373_28412):map__28373_28412);
var doc_28414 = cljs.core.get.call(null,map__28373_28413__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28415 = cljs.core.get.call(null,map__28373_28413__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28411);

cljs.core.println.call(null," ",arglists_28415);

if(cljs.core.truth_(doc_28414)){
cljs.core.println.call(null," ",doc_28414);
} else {
}


var G__28416 = seq__28356_28406;
var G__28417 = chunk__28357_28407;
var G__28418 = count__28358_28408;
var G__28419 = (i__28359_28409 + (1));
seq__28356_28406 = G__28416;
chunk__28357_28407 = G__28417;
count__28358_28408 = G__28418;
i__28359_28409 = G__28419;
continue;
} else {
var temp__5735__auto___28420 = cljs.core.seq.call(null,seq__28356_28406);
if(temp__5735__auto___28420){
var seq__28356_28421__$1 = temp__5735__auto___28420;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28356_28421__$1)){
var c__4550__auto___28422 = cljs.core.chunk_first.call(null,seq__28356_28421__$1);
var G__28423 = cljs.core.chunk_rest.call(null,seq__28356_28421__$1);
var G__28424 = c__4550__auto___28422;
var G__28425 = cljs.core.count.call(null,c__4550__auto___28422);
var G__28426 = (0);
seq__28356_28406 = G__28423;
chunk__28357_28407 = G__28424;
count__28358_28408 = G__28425;
i__28359_28409 = G__28426;
continue;
} else {
var vec__28375_28427 = cljs.core.first.call(null,seq__28356_28421__$1);
var name_28428 = cljs.core.nth.call(null,vec__28375_28427,(0),null);
var map__28378_28429 = cljs.core.nth.call(null,vec__28375_28427,(1),null);
var map__28378_28430__$1 = (((((!((map__28378_28429 == null))))?(((((map__28378_28429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28378_28429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28378_28429):map__28378_28429);
var doc_28431 = cljs.core.get.call(null,map__28378_28430__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28432 = cljs.core.get.call(null,map__28378_28430__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28428);

cljs.core.println.call(null," ",arglists_28432);

if(cljs.core.truth_(doc_28431)){
cljs.core.println.call(null," ",doc_28431);
} else {
}


var G__28433 = cljs.core.next.call(null,seq__28356_28421__$1);
var G__28434 = null;
var G__28435 = (0);
var G__28436 = (0);
seq__28356_28406 = G__28433;
chunk__28357_28407 = G__28434;
count__28358_28408 = G__28435;
i__28359_28409 = G__28436;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__28380 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__28381 = null;
var count__28382 = (0);
var i__28383 = (0);
while(true){
if((i__28383 < count__28382)){
var role = cljs.core._nth.call(null,chunk__28381,i__28383);
var temp__5735__auto___28437__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___28437__$1)){
var spec_28438 = temp__5735__auto___28437__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28438));
} else {
}


var G__28439 = seq__28380;
var G__28440 = chunk__28381;
var G__28441 = count__28382;
var G__28442 = (i__28383 + (1));
seq__28380 = G__28439;
chunk__28381 = G__28440;
count__28382 = G__28441;
i__28383 = G__28442;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__28380);
if(temp__5735__auto____$1){
var seq__28380__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28380__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28380__$1);
var G__28443 = cljs.core.chunk_rest.call(null,seq__28380__$1);
var G__28444 = c__4550__auto__;
var G__28445 = cljs.core.count.call(null,c__4550__auto__);
var G__28446 = (0);
seq__28380 = G__28443;
chunk__28381 = G__28444;
count__28382 = G__28445;
i__28383 = G__28446;
continue;
} else {
var role = cljs.core.first.call(null,seq__28380__$1);
var temp__5735__auto___28447__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___28447__$2)){
var spec_28448 = temp__5735__auto___28447__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28448));
} else {
}


var G__28449 = cljs.core.next.call(null,seq__28380__$1);
var G__28450 = null;
var G__28451 = (0);
var G__28452 = (0);
seq__28380 = G__28449;
chunk__28381 = G__28450;
count__28382 = G__28451;
i__28383 = G__28452;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__28453 = cljs.core.conj.call(null,via,t);
var G__28454 = cljs.core.ex_cause.call(null,t);
via = G__28453;
t = G__28454;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__28457 = datafied_throwable;
var map__28457__$1 = (((((!((map__28457 == null))))?(((((map__28457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28457):map__28457);
var via = cljs.core.get.call(null,map__28457__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__28457__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__28457__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__28458 = cljs.core.last.call(null,via);
var map__28458__$1 = (((((!((map__28458 == null))))?(((((map__28458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28458.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28458):map__28458);
var type = cljs.core.get.call(null,map__28458__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__28458__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__28458__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__28459 = data;
var map__28459__$1 = (((((!((map__28459 == null))))?(((((map__28459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28459):map__28459);
var problems = cljs.core.get.call(null,map__28459__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__28459__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__28459__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__28460 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__28460__$1 = (((((!((map__28460 == null))))?(((((map__28460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28460):map__28460);
var top_data = map__28460__$1;
var source = cljs.core.get.call(null,map__28460__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__28465 = phase;
var G__28465__$1 = (((G__28465 instanceof cljs.core.Keyword))?G__28465.fqn:null);
switch (G__28465__$1) {
case "read-source":
var map__28466 = data;
var map__28466__$1 = (((((!((map__28466 == null))))?(((((map__28466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28466.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28466):map__28466);
var line = cljs.core.get.call(null,map__28466__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__28466__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__28468 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__28468__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__28468,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__28468);
var G__28468__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__28468__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__28468__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__28468__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__28468__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__28469 = top_data;
var G__28469__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__28469,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__28469);
var G__28469__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__28469__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__28469__$1);
var G__28469__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__28469__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__28469__$2);
var G__28469__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__28469__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__28469__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__28469__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__28469__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__28470 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__28470,(0),null);
var method = cljs.core.nth.call(null,vec__28470,(1),null);
var file = cljs.core.nth.call(null,vec__28470,(2),null);
var line = cljs.core.nth.call(null,vec__28470,(3),null);
var G__28473 = top_data;
var G__28473__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__28473,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__28473);
var G__28473__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__28473__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__28473__$1);
var G__28473__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__28473__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__28473__$2);
var G__28473__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__28473__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__28473__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__28473__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__28473__$4;
}

break;
case "execution":
var vec__28474 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__28474,(0),null);
var method = cljs.core.nth.call(null,vec__28474,(1),null);
var file = cljs.core.nth.call(null,vec__28474,(2),null);
var line = cljs.core.nth.call(null,vec__28474,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__28474,source__$1,method,file,line,G__28465,G__28465__$1,map__28457,map__28457__$1,via,trace,phase,map__28458,map__28458__$1,type,message,data,map__28459,map__28459__$1,problems,fn,caller,map__28460,map__28460__$1,top_data,source){
return (function (p1__28456_SHARP_){
var or__4131__auto__ = (p1__28456_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__28456_SHARP_);
}
});})(vec__28474,source__$1,method,file,line,G__28465,G__28465__$1,map__28457,map__28457__$1,via,trace,phase,map__28458,map__28458__$1,type,message,data,map__28459,map__28459__$1,problems,fn,caller,map__28460,map__28460__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__28477 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__28477__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__28477,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__28477);
var G__28477__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__28477__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__28477__$1);
var G__28477__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__28477__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__28477__$2);
var G__28477__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__28477__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__28477__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__28477__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__28477__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28465__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__28481){
var map__28482 = p__28481;
var map__28482__$1 = (((((!((map__28482 == null))))?(((((map__28482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28482):map__28482);
var triage_data = map__28482__$1;
var phase = cljs.core.get.call(null,map__28482__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__28482__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__28482__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__28482__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__28482__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__28482__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__28482__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__28482__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__28484 = phase;
var G__28484__$1 = (((G__28484 instanceof cljs.core.Keyword))?G__28484.fqn:null);
switch (G__28484__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28485_28494 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28486_28495 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28487_28496 = true;
var _STAR_print_fn_STAR__temp_val__28488_28497 = ((function (_STAR_print_newline_STAR__orig_val__28485_28494,_STAR_print_fn_STAR__orig_val__28486_28495,_STAR_print_newline_STAR__temp_val__28487_28496,sb__4661__auto__,G__28484,G__28484__$1,loc,class_name,simple_class,cause_type,format,map__28482,map__28482__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__28485_28494,_STAR_print_fn_STAR__orig_val__28486_28495,_STAR_print_newline_STAR__temp_val__28487_28496,sb__4661__auto__,G__28484,G__28484__$1,loc,class_name,simple_class,cause_type,format,map__28482,map__28482__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28487_28496;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28488_28497;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__28485_28494,_STAR_print_fn_STAR__orig_val__28486_28495,_STAR_print_newline_STAR__temp_val__28487_28496,_STAR_print_fn_STAR__temp_val__28488_28497,sb__4661__auto__,G__28484,G__28484__$1,loc,class_name,simple_class,cause_type,format,map__28482,map__28482__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__28485_28494,_STAR_print_fn_STAR__orig_val__28486_28495,_STAR_print_newline_STAR__temp_val__28487_28496,_STAR_print_fn_STAR__temp_val__28488_28497,sb__4661__auto__,G__28484,G__28484__$1,loc,class_name,simple_class,cause_type,format,map__28482,map__28482__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__28479_SHARP_){
return cljs.core.dissoc.call(null,p1__28479_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__28485_28494,_STAR_print_fn_STAR__orig_val__28486_28495,_STAR_print_newline_STAR__temp_val__28487_28496,_STAR_print_fn_STAR__temp_val__28488_28497,sb__4661__auto__,G__28484,G__28484__$1,loc,class_name,simple_class,cause_type,format,map__28482,map__28482__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__28485_28494,_STAR_print_fn_STAR__orig_val__28486_28495,_STAR_print_newline_STAR__temp_val__28487_28496,_STAR_print_fn_STAR__temp_val__28488_28497,sb__4661__auto__,G__28484,G__28484__$1,loc,class_name,simple_class,cause_type,format,map__28482,map__28482__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28486_28495;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28485_28494;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28489_28498 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28490_28499 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28491_28500 = true;
var _STAR_print_fn_STAR__temp_val__28492_28501 = ((function (_STAR_print_newline_STAR__orig_val__28489_28498,_STAR_print_fn_STAR__orig_val__28490_28499,_STAR_print_newline_STAR__temp_val__28491_28500,sb__4661__auto__,G__28484,G__28484__$1,loc,class_name,simple_class,cause_type,format,map__28482,map__28482__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__28489_28498,_STAR_print_fn_STAR__orig_val__28490_28499,_STAR_print_newline_STAR__temp_val__28491_28500,sb__4661__auto__,G__28484,G__28484__$1,loc,class_name,simple_class,cause_type,format,map__28482,map__28482__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28491_28500;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28492_28501;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__28489_28498,_STAR_print_fn_STAR__orig_val__28490_28499,_STAR_print_newline_STAR__temp_val__28491_28500,_STAR_print_fn_STAR__temp_val__28492_28501,sb__4661__auto__,G__28484,G__28484__$1,loc,class_name,simple_class,cause_type,format,map__28482,map__28482__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__28489_28498,_STAR_print_fn_STAR__orig_val__28490_28499,_STAR_print_newline_STAR__temp_val__28491_28500,_STAR_print_fn_STAR__temp_val__28492_28501,sb__4661__auto__,G__28484,G__28484__$1,loc,class_name,simple_class,cause_type,format,map__28482,map__28482__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__28480_SHARP_){
return cljs.core.dissoc.call(null,p1__28480_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__28489_28498,_STAR_print_fn_STAR__orig_val__28490_28499,_STAR_print_newline_STAR__temp_val__28491_28500,_STAR_print_fn_STAR__temp_val__28492_28501,sb__4661__auto__,G__28484,G__28484__$1,loc,class_name,simple_class,cause_type,format,map__28482,map__28482__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__28489_28498,_STAR_print_fn_STAR__orig_val__28490_28499,_STAR_print_newline_STAR__temp_val__28491_28500,_STAR_print_fn_STAR__temp_val__28492_28501,sb__4661__auto__,G__28484,G__28484__$1,loc,class_name,simple_class,cause_type,format,map__28482,map__28482__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28490_28499;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28489_28498;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28484__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1703259699718
