// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__28770){
var map__28771 = p__28770;
var map__28771__$1 = (((((!((map__28771 == null))))?(((((map__28771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28771):map__28771);
var m = map__28771__$1;
var n = cljs.core.get.call(null,map__28771__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__28771__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__28773_28805 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28774_28806 = null;
var count__28775_28807 = (0);
var i__28776_28808 = (0);
while(true){
if((i__28776_28808 < count__28775_28807)){
var f_28809 = cljs.core._nth.call(null,chunk__28774_28806,i__28776_28808);
cljs.core.println.call(null,"  ",f_28809);


var G__28810 = seq__28773_28805;
var G__28811 = chunk__28774_28806;
var G__28812 = count__28775_28807;
var G__28813 = (i__28776_28808 + (1));
seq__28773_28805 = G__28810;
chunk__28774_28806 = G__28811;
count__28775_28807 = G__28812;
i__28776_28808 = G__28813;
continue;
} else {
var temp__5735__auto___28814 = cljs.core.seq.call(null,seq__28773_28805);
if(temp__5735__auto___28814){
var seq__28773_28815__$1 = temp__5735__auto___28814;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28773_28815__$1)){
var c__4550__auto___28816 = cljs.core.chunk_first.call(null,seq__28773_28815__$1);
var G__28817 = cljs.core.chunk_rest.call(null,seq__28773_28815__$1);
var G__28818 = c__4550__auto___28816;
var G__28819 = cljs.core.count.call(null,c__4550__auto___28816);
var G__28820 = (0);
seq__28773_28805 = G__28817;
chunk__28774_28806 = G__28818;
count__28775_28807 = G__28819;
i__28776_28808 = G__28820;
continue;
} else {
var f_28821 = cljs.core.first.call(null,seq__28773_28815__$1);
cljs.core.println.call(null,"  ",f_28821);


var G__28822 = cljs.core.next.call(null,seq__28773_28815__$1);
var G__28823 = null;
var G__28824 = (0);
var G__28825 = (0);
seq__28773_28805 = G__28822;
chunk__28774_28806 = G__28823;
count__28775_28807 = G__28824;
i__28776_28808 = G__28825;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28826 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28826);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28826)))?cljs.core.second.call(null,arglists_28826):arglists_28826));
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
var seq__28777_28827 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28778_28828 = null;
var count__28779_28829 = (0);
var i__28780_28830 = (0);
while(true){
if((i__28780_28830 < count__28779_28829)){
var vec__28791_28831 = cljs.core._nth.call(null,chunk__28778_28828,i__28780_28830);
var name_28832 = cljs.core.nth.call(null,vec__28791_28831,(0),null);
var map__28794_28833 = cljs.core.nth.call(null,vec__28791_28831,(1),null);
var map__28794_28834__$1 = (((((!((map__28794_28833 == null))))?(((((map__28794_28833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28794_28833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28794_28833):map__28794_28833);
var doc_28835 = cljs.core.get.call(null,map__28794_28834__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28836 = cljs.core.get.call(null,map__28794_28834__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28832);

cljs.core.println.call(null," ",arglists_28836);

if(cljs.core.truth_(doc_28835)){
cljs.core.println.call(null," ",doc_28835);
} else {
}


var G__28837 = seq__28777_28827;
var G__28838 = chunk__28778_28828;
var G__28839 = count__28779_28829;
var G__28840 = (i__28780_28830 + (1));
seq__28777_28827 = G__28837;
chunk__28778_28828 = G__28838;
count__28779_28829 = G__28839;
i__28780_28830 = G__28840;
continue;
} else {
var temp__5735__auto___28841 = cljs.core.seq.call(null,seq__28777_28827);
if(temp__5735__auto___28841){
var seq__28777_28842__$1 = temp__5735__auto___28841;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28777_28842__$1)){
var c__4550__auto___28843 = cljs.core.chunk_first.call(null,seq__28777_28842__$1);
var G__28844 = cljs.core.chunk_rest.call(null,seq__28777_28842__$1);
var G__28845 = c__4550__auto___28843;
var G__28846 = cljs.core.count.call(null,c__4550__auto___28843);
var G__28847 = (0);
seq__28777_28827 = G__28844;
chunk__28778_28828 = G__28845;
count__28779_28829 = G__28846;
i__28780_28830 = G__28847;
continue;
} else {
var vec__28796_28848 = cljs.core.first.call(null,seq__28777_28842__$1);
var name_28849 = cljs.core.nth.call(null,vec__28796_28848,(0),null);
var map__28799_28850 = cljs.core.nth.call(null,vec__28796_28848,(1),null);
var map__28799_28851__$1 = (((((!((map__28799_28850 == null))))?(((((map__28799_28850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28799_28850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28799_28850):map__28799_28850);
var doc_28852 = cljs.core.get.call(null,map__28799_28851__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28853 = cljs.core.get.call(null,map__28799_28851__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28849);

cljs.core.println.call(null," ",arglists_28853);

if(cljs.core.truth_(doc_28852)){
cljs.core.println.call(null," ",doc_28852);
} else {
}


var G__28854 = cljs.core.next.call(null,seq__28777_28842__$1);
var G__28855 = null;
var G__28856 = (0);
var G__28857 = (0);
seq__28777_28827 = G__28854;
chunk__28778_28828 = G__28855;
count__28779_28829 = G__28856;
i__28780_28830 = G__28857;
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

var seq__28801 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__28802 = null;
var count__28803 = (0);
var i__28804 = (0);
while(true){
if((i__28804 < count__28803)){
var role = cljs.core._nth.call(null,chunk__28802,i__28804);
var temp__5735__auto___28858__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___28858__$1)){
var spec_28859 = temp__5735__auto___28858__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28859));
} else {
}


var G__28860 = seq__28801;
var G__28861 = chunk__28802;
var G__28862 = count__28803;
var G__28863 = (i__28804 + (1));
seq__28801 = G__28860;
chunk__28802 = G__28861;
count__28803 = G__28862;
i__28804 = G__28863;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__28801);
if(temp__5735__auto____$1){
var seq__28801__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28801__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28801__$1);
var G__28864 = cljs.core.chunk_rest.call(null,seq__28801__$1);
var G__28865 = c__4550__auto__;
var G__28866 = cljs.core.count.call(null,c__4550__auto__);
var G__28867 = (0);
seq__28801 = G__28864;
chunk__28802 = G__28865;
count__28803 = G__28866;
i__28804 = G__28867;
continue;
} else {
var role = cljs.core.first.call(null,seq__28801__$1);
var temp__5735__auto___28868__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___28868__$2)){
var spec_28869 = temp__5735__auto___28868__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28869));
} else {
}


var G__28870 = cljs.core.next.call(null,seq__28801__$1);
var G__28871 = null;
var G__28872 = (0);
var G__28873 = (0);
seq__28801 = G__28870;
chunk__28802 = G__28871;
count__28803 = G__28872;
i__28804 = G__28873;
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
var G__28874 = cljs.core.conj.call(null,via,t);
var G__28875 = cljs.core.ex_cause.call(null,t);
via = G__28874;
t = G__28875;
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
var map__28878 = datafied_throwable;
var map__28878__$1 = (((((!((map__28878 == null))))?(((((map__28878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28878):map__28878);
var via = cljs.core.get.call(null,map__28878__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__28878__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__28878__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__28879 = cljs.core.last.call(null,via);
var map__28879__$1 = (((((!((map__28879 == null))))?(((((map__28879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28879):map__28879);
var type = cljs.core.get.call(null,map__28879__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__28879__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__28879__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__28880 = data;
var map__28880__$1 = (((((!((map__28880 == null))))?(((((map__28880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28880):map__28880);
var problems = cljs.core.get.call(null,map__28880__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__28880__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__28880__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__28881 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__28881__$1 = (((((!((map__28881 == null))))?(((((map__28881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28881):map__28881);
var top_data = map__28881__$1;
var source = cljs.core.get.call(null,map__28881__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__28886 = phase;
var G__28886__$1 = (((G__28886 instanceof cljs.core.Keyword))?G__28886.fqn:null);
switch (G__28886__$1) {
case "read-source":
var map__28887 = data;
var map__28887__$1 = (((((!((map__28887 == null))))?(((((map__28887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28887):map__28887);
var line = cljs.core.get.call(null,map__28887__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__28887__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__28889 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__28889__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__28889,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__28889);
var G__28889__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__28889__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__28889__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__28889__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__28889__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__28890 = top_data;
var G__28890__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__28890,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__28890);
var G__28890__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__28890__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__28890__$1);
var G__28890__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__28890__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__28890__$2);
var G__28890__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__28890__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__28890__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__28890__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__28890__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__28891 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__28891,(0),null);
var method = cljs.core.nth.call(null,vec__28891,(1),null);
var file = cljs.core.nth.call(null,vec__28891,(2),null);
var line = cljs.core.nth.call(null,vec__28891,(3),null);
var G__28894 = top_data;
var G__28894__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__28894,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__28894);
var G__28894__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__28894__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__28894__$1);
var G__28894__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__28894__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__28894__$2);
var G__28894__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__28894__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__28894__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__28894__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__28894__$4;
}

break;
case "execution":
var vec__28895 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__28895,(0),null);
var method = cljs.core.nth.call(null,vec__28895,(1),null);
var file = cljs.core.nth.call(null,vec__28895,(2),null);
var line = cljs.core.nth.call(null,vec__28895,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__28895,source__$1,method,file,line,G__28886,G__28886__$1,map__28878,map__28878__$1,via,trace,phase,map__28879,map__28879__$1,type,message,data,map__28880,map__28880__$1,problems,fn,caller,map__28881,map__28881__$1,top_data,source){
return (function (p1__28877_SHARP_){
var or__4131__auto__ = (p1__28877_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__28877_SHARP_);
}
});})(vec__28895,source__$1,method,file,line,G__28886,G__28886__$1,map__28878,map__28878__$1,via,trace,phase,map__28879,map__28879__$1,type,message,data,map__28880,map__28880__$1,problems,fn,caller,map__28881,map__28881__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__28898 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__28898__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__28898,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__28898);
var G__28898__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__28898__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__28898__$1);
var G__28898__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__28898__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__28898__$2);
var G__28898__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__28898__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__28898__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__28898__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__28898__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28886__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__28902){
var map__28903 = p__28902;
var map__28903__$1 = (((((!((map__28903 == null))))?(((((map__28903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28903):map__28903);
var triage_data = map__28903__$1;
var phase = cljs.core.get.call(null,map__28903__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__28903__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__28903__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__28903__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__28903__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__28903__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__28903__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__28903__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__28905 = phase;
var G__28905__$1 = (((G__28905 instanceof cljs.core.Keyword))?G__28905.fqn:null);
switch (G__28905__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28906_28915 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28907_28916 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28908_28917 = true;
var _STAR_print_fn_STAR__temp_val__28909_28918 = ((function (_STAR_print_newline_STAR__orig_val__28906_28915,_STAR_print_fn_STAR__orig_val__28907_28916,_STAR_print_newline_STAR__temp_val__28908_28917,sb__4661__auto__,G__28905,G__28905__$1,loc,class_name,simple_class,cause_type,format,map__28903,map__28903__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__28906_28915,_STAR_print_fn_STAR__orig_val__28907_28916,_STAR_print_newline_STAR__temp_val__28908_28917,sb__4661__auto__,G__28905,G__28905__$1,loc,class_name,simple_class,cause_type,format,map__28903,map__28903__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28908_28917;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28909_28918;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__28906_28915,_STAR_print_fn_STAR__orig_val__28907_28916,_STAR_print_newline_STAR__temp_val__28908_28917,_STAR_print_fn_STAR__temp_val__28909_28918,sb__4661__auto__,G__28905,G__28905__$1,loc,class_name,simple_class,cause_type,format,map__28903,map__28903__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__28906_28915,_STAR_print_fn_STAR__orig_val__28907_28916,_STAR_print_newline_STAR__temp_val__28908_28917,_STAR_print_fn_STAR__temp_val__28909_28918,sb__4661__auto__,G__28905,G__28905__$1,loc,class_name,simple_class,cause_type,format,map__28903,map__28903__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__28900_SHARP_){
return cljs.core.dissoc.call(null,p1__28900_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__28906_28915,_STAR_print_fn_STAR__orig_val__28907_28916,_STAR_print_newline_STAR__temp_val__28908_28917,_STAR_print_fn_STAR__temp_val__28909_28918,sb__4661__auto__,G__28905,G__28905__$1,loc,class_name,simple_class,cause_type,format,map__28903,map__28903__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__28906_28915,_STAR_print_fn_STAR__orig_val__28907_28916,_STAR_print_newline_STAR__temp_val__28908_28917,_STAR_print_fn_STAR__temp_val__28909_28918,sb__4661__auto__,G__28905,G__28905__$1,loc,class_name,simple_class,cause_type,format,map__28903,map__28903__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28907_28916;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28906_28915;
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
var _STAR_print_newline_STAR__orig_val__28910_28919 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28911_28920 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28912_28921 = true;
var _STAR_print_fn_STAR__temp_val__28913_28922 = ((function (_STAR_print_newline_STAR__orig_val__28910_28919,_STAR_print_fn_STAR__orig_val__28911_28920,_STAR_print_newline_STAR__temp_val__28912_28921,sb__4661__auto__,G__28905,G__28905__$1,loc,class_name,simple_class,cause_type,format,map__28903,map__28903__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__28910_28919,_STAR_print_fn_STAR__orig_val__28911_28920,_STAR_print_newline_STAR__temp_val__28912_28921,sb__4661__auto__,G__28905,G__28905__$1,loc,class_name,simple_class,cause_type,format,map__28903,map__28903__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28912_28921;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28913_28922;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__28910_28919,_STAR_print_fn_STAR__orig_val__28911_28920,_STAR_print_newline_STAR__temp_val__28912_28921,_STAR_print_fn_STAR__temp_val__28913_28922,sb__4661__auto__,G__28905,G__28905__$1,loc,class_name,simple_class,cause_type,format,map__28903,map__28903__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__28910_28919,_STAR_print_fn_STAR__orig_val__28911_28920,_STAR_print_newline_STAR__temp_val__28912_28921,_STAR_print_fn_STAR__temp_val__28913_28922,sb__4661__auto__,G__28905,G__28905__$1,loc,class_name,simple_class,cause_type,format,map__28903,map__28903__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__28901_SHARP_){
return cljs.core.dissoc.call(null,p1__28901_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__28910_28919,_STAR_print_fn_STAR__orig_val__28911_28920,_STAR_print_newline_STAR__temp_val__28912_28921,_STAR_print_fn_STAR__temp_val__28913_28922,sb__4661__auto__,G__28905,G__28905__$1,loc,class_name,simple_class,cause_type,format,map__28903,map__28903__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__28910_28919,_STAR_print_fn_STAR__orig_val__28911_28920,_STAR_print_newline_STAR__temp_val__28912_28921,_STAR_print_fn_STAR__temp_val__28913_28922,sb__4661__auto__,G__28905,G__28905__$1,loc,class_name,simple_class,cause_type,format,map__28903,map__28903__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28911_28920;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28910_28919;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28905__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1704783953406
