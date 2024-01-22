// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.19";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e29117){if((e29117 instanceof Error)){
var e = e29117;
return "Error: Unable to stringify";
} else {
throw e29117;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__29120 = arguments.length;
switch (G__29120) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__29118_SHARP_){
if(typeof p1__29118_SHARP_ === 'string'){
return p1__29118_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__29118_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___29123 = arguments.length;
var i__4731__auto___29124 = (0);
while(true){
if((i__4731__auto___29124 < len__4730__auto___29123)){
args__4736__auto__.push((arguments[i__4731__auto___29124]));

var G__29125 = (i__4731__auto___29124 + (1));
i__4731__auto___29124 = G__29125;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq29122){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29122));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___29127 = arguments.length;
var i__4731__auto___29128 = (0);
while(true){
if((i__4731__auto___29128 < len__4730__auto___29127)){
args__4736__auto__.push((arguments[i__4731__auto___29128]));

var G__29129 = (i__4731__auto___29128 + (1));
i__4731__auto___29128 = G__29129;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq29126){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29126));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__29130){
var map__29131 = p__29130;
var map__29131__$1 = (((((!((map__29131 == null))))?(((((map__29131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29131):map__29131);
var message = cljs.core.get.call(null,map__29131__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__29131__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4131__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4120__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4120__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4120__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__23789__auto___29210 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23789__auto___29210,ch){
return (function (){
var f__23790__auto__ = (function (){var switch__23694__auto__ = ((function (c__23789__auto___29210,ch){
return (function (state_29182){
var state_val_29183 = (state_29182[(1)]);
if((state_val_29183 === (7))){
var inst_29178 = (state_29182[(2)]);
var state_29182__$1 = state_29182;
var statearr_29184_29211 = state_29182__$1;
(statearr_29184_29211[(2)] = inst_29178);

(statearr_29184_29211[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29183 === (1))){
var state_29182__$1 = state_29182;
var statearr_29185_29212 = state_29182__$1;
(statearr_29185_29212[(2)] = null);

(statearr_29185_29212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29183 === (4))){
var inst_29135 = (state_29182[(7)]);
var inst_29135__$1 = (state_29182[(2)]);
var state_29182__$1 = (function (){var statearr_29186 = state_29182;
(statearr_29186[(7)] = inst_29135__$1);

return statearr_29186;
})();
if(cljs.core.truth_(inst_29135__$1)){
var statearr_29187_29213 = state_29182__$1;
(statearr_29187_29213[(1)] = (5));

} else {
var statearr_29188_29214 = state_29182__$1;
(statearr_29188_29214[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29183 === (15))){
var inst_29142 = (state_29182[(8)]);
var inst_29157 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29142);
var inst_29158 = cljs.core.first.call(null,inst_29157);
var inst_29159 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29158);
var inst_29160 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29159)].join('');
var inst_29161 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_29160);
var state_29182__$1 = state_29182;
var statearr_29189_29215 = state_29182__$1;
(statearr_29189_29215[(2)] = inst_29161);

(statearr_29189_29215[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29183 === (13))){
var inst_29166 = (state_29182[(2)]);
var state_29182__$1 = state_29182;
var statearr_29190_29216 = state_29182__$1;
(statearr_29190_29216[(2)] = inst_29166);

(statearr_29190_29216[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29183 === (6))){
var state_29182__$1 = state_29182;
var statearr_29191_29217 = state_29182__$1;
(statearr_29191_29217[(2)] = null);

(statearr_29191_29217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29183 === (17))){
var inst_29164 = (state_29182[(2)]);
var state_29182__$1 = state_29182;
var statearr_29192_29218 = state_29182__$1;
(statearr_29192_29218[(2)] = inst_29164);

(statearr_29192_29218[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29183 === (3))){
var inst_29180 = (state_29182[(2)]);
var state_29182__$1 = state_29182;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29182__$1,inst_29180);
} else {
if((state_val_29183 === (12))){
var inst_29141 = (state_29182[(9)]);
var inst_29155 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29141,opts);
var state_29182__$1 = state_29182;
if(inst_29155){
var statearr_29193_29219 = state_29182__$1;
(statearr_29193_29219[(1)] = (15));

} else {
var statearr_29194_29220 = state_29182__$1;
(statearr_29194_29220[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29183 === (2))){
var state_29182__$1 = state_29182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29182__$1,(4),ch);
} else {
if((state_val_29183 === (11))){
var inst_29142 = (state_29182[(8)]);
var inst_29147 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29148 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29142);
var inst_29149 = cljs.core.async.timeout.call(null,(1000));
var inst_29150 = [inst_29148,inst_29149];
var inst_29151 = (new cljs.core.PersistentVector(null,2,(5),inst_29147,inst_29150,null));
var state_29182__$1 = state_29182;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29182__$1,(14),inst_29151);
} else {
if((state_val_29183 === (9))){
var inst_29142 = (state_29182[(8)]);
var inst_29168 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_29169 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29142);
var inst_29170 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29169);
var inst_29171 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29170)].join('');
var inst_29172 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_29171);
var state_29182__$1 = (function (){var statearr_29195 = state_29182;
(statearr_29195[(10)] = inst_29168);

return statearr_29195;
})();
var statearr_29196_29221 = state_29182__$1;
(statearr_29196_29221[(2)] = inst_29172);

(statearr_29196_29221[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29183 === (5))){
var inst_29135 = (state_29182[(7)]);
var inst_29137 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29138 = (new cljs.core.PersistentArrayMap(null,2,inst_29137,null));
var inst_29139 = (new cljs.core.PersistentHashSet(null,inst_29138,null));
var inst_29140 = figwheel.client.focus_msgs.call(null,inst_29139,inst_29135);
var inst_29141 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29140);
var inst_29142 = cljs.core.first.call(null,inst_29140);
var inst_29143 = figwheel.client.autoload_QMARK_.call(null);
var state_29182__$1 = (function (){var statearr_29197 = state_29182;
(statearr_29197[(9)] = inst_29141);

(statearr_29197[(8)] = inst_29142);

return statearr_29197;
})();
if(cljs.core.truth_(inst_29143)){
var statearr_29198_29222 = state_29182__$1;
(statearr_29198_29222[(1)] = (8));

} else {
var statearr_29199_29223 = state_29182__$1;
(statearr_29199_29223[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29183 === (14))){
var inst_29153 = (state_29182[(2)]);
var state_29182__$1 = state_29182;
var statearr_29200_29224 = state_29182__$1;
(statearr_29200_29224[(2)] = inst_29153);

(statearr_29200_29224[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29183 === (16))){
var state_29182__$1 = state_29182;
var statearr_29201_29225 = state_29182__$1;
(statearr_29201_29225[(2)] = null);

(statearr_29201_29225[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29183 === (10))){
var inst_29174 = (state_29182[(2)]);
var state_29182__$1 = (function (){var statearr_29202 = state_29182;
(statearr_29202[(11)] = inst_29174);

return statearr_29202;
})();
var statearr_29203_29226 = state_29182__$1;
(statearr_29203_29226[(2)] = null);

(statearr_29203_29226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29183 === (8))){
var inst_29141 = (state_29182[(9)]);
var inst_29145 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29141,opts);
var state_29182__$1 = state_29182;
if(cljs.core.truth_(inst_29145)){
var statearr_29204_29227 = state_29182__$1;
(statearr_29204_29227[(1)] = (11));

} else {
var statearr_29205_29228 = state_29182__$1;
(statearr_29205_29228[(1)] = (12));

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
});})(c__23789__auto___29210,ch))
;
return ((function (switch__23694__auto__,c__23789__auto___29210,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23695__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23695__auto____0 = (function (){
var statearr_29206 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29206[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23695__auto__);

(statearr_29206[(1)] = (1));

return statearr_29206;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23695__auto____1 = (function (state_29182){
while(true){
var ret_value__23696__auto__ = (function (){try{while(true){
var result__23697__auto__ = switch__23694__auto__.call(null,state_29182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23697__auto__;
}
break;
}
}catch (e29207){if((e29207 instanceof Object)){
var ex__23698__auto__ = e29207;
var statearr_29208_29229 = state_29182;
(statearr_29208_29229[(5)] = ex__23698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29207;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29230 = state_29182;
state_29182 = G__29230;
continue;
} else {
return ret_value__23696__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23695__auto__ = function(state_29182){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23695__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23695__auto____1.call(this,state_29182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23695__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23695__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23695__auto__;
})()
;})(switch__23694__auto__,c__23789__auto___29210,ch))
})();
var state__23791__auto__ = (function (){var statearr_29209 = f__23790__auto__.call(null);
(statearr_29209[(6)] = c__23789__auto___29210);

return statearr_29209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23791__auto__);
});})(c__23789__auto___29210,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29231_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29231_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_29237 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29237){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29233 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29234 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29235 = true;
var _STAR_print_fn_STAR__temp_val__29236 = ((function (_STAR_print_newline_STAR__orig_val__29233,_STAR_print_fn_STAR__orig_val__29234,_STAR_print_newline_STAR__temp_val__29235,sb,base_path_29237){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__29233,_STAR_print_fn_STAR__orig_val__29234,_STAR_print_newline_STAR__temp_val__29235,sb,base_path_29237))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29235;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29236;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29234;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29233;
}}catch (e29232){if((e29232 instanceof Error)){
var e = e29232;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29237], null));
} else {
var e = e29232;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_29237))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29238){
var map__29239 = p__29238;
var map__29239__$1 = (((((!((map__29239 == null))))?(((((map__29239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29239):map__29239);
var opts = map__29239__$1;
var build_id = cljs.core.get.call(null,map__29239__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29239,map__29239__$1,opts,build_id){
return (function (p__29241){
var vec__29242 = p__29241;
var seq__29243 = cljs.core.seq.call(null,vec__29242);
var first__29244 = cljs.core.first.call(null,seq__29243);
var seq__29243__$1 = cljs.core.next.call(null,seq__29243);
var map__29245 = first__29244;
var map__29245__$1 = (((((!((map__29245 == null))))?(((((map__29245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29245):map__29245);
var msg = map__29245__$1;
var msg_name = cljs.core.get.call(null,map__29245__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29243__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__29242,seq__29243,first__29244,seq__29243__$1,map__29245,map__29245__$1,msg,msg_name,_,map__29239,map__29239__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29242,seq__29243,first__29244,seq__29243__$1,map__29245,map__29245__$1,msg,msg_name,_,map__29239,map__29239__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29239,map__29239__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29247){
var vec__29248 = p__29247;
var seq__29249 = cljs.core.seq.call(null,vec__29248);
var first__29250 = cljs.core.first.call(null,seq__29249);
var seq__29249__$1 = cljs.core.next.call(null,seq__29249);
var map__29251 = first__29250;
var map__29251__$1 = (((((!((map__29251 == null))))?(((((map__29251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29251):map__29251);
var msg = map__29251__$1;
var msg_name = cljs.core.get.call(null,map__29251__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29249__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29253){
var map__29254 = p__29253;
var map__29254__$1 = (((((!((map__29254 == null))))?(((((map__29254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29254):map__29254);
var on_compile_warning = cljs.core.get.call(null,map__29254__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29254__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__29254,map__29254__$1,on_compile_warning,on_compile_fail){
return (function (p__29256){
var vec__29257 = p__29256;
var seq__29258 = cljs.core.seq.call(null,vec__29257);
var first__29259 = cljs.core.first.call(null,seq__29258);
var seq__29258__$1 = cljs.core.next.call(null,seq__29258);
var map__29260 = first__29259;
var map__29260__$1 = (((((!((map__29260 == null))))?(((((map__29260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29260):map__29260);
var msg = map__29260__$1;
var msg_name = cljs.core.get.call(null,map__29260__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29258__$1;
var pred__29262 = cljs.core._EQ_;
var expr__29263 = msg_name;
if(cljs.core.truth_(pred__29262.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29263))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29262.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29263))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29254,map__29254__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23789__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23789__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23790__auto__ = (function (){var switch__23694__auto__ = ((function (c__23789__auto__,msg_hist,msg_names,msg){
return (function (state_29352){
var state_val_29353 = (state_29352[(1)]);
if((state_val_29353 === (7))){
var inst_29272 = (state_29352[(2)]);
var state_29352__$1 = state_29352;
if(cljs.core.truth_(inst_29272)){
var statearr_29354_29401 = state_29352__$1;
(statearr_29354_29401[(1)] = (8));

} else {
var statearr_29355_29402 = state_29352__$1;
(statearr_29355_29402[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29353 === (20))){
var inst_29346 = (state_29352[(2)]);
var state_29352__$1 = state_29352;
var statearr_29356_29403 = state_29352__$1;
(statearr_29356_29403[(2)] = inst_29346);

(statearr_29356_29403[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29353 === (27))){
var inst_29342 = (state_29352[(2)]);
var state_29352__$1 = state_29352;
var statearr_29357_29404 = state_29352__$1;
(statearr_29357_29404[(2)] = inst_29342);

(statearr_29357_29404[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29353 === (1))){
var inst_29265 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29352__$1 = state_29352;
if(cljs.core.truth_(inst_29265)){
var statearr_29358_29405 = state_29352__$1;
(statearr_29358_29405[(1)] = (2));

} else {
var statearr_29359_29406 = state_29352__$1;
(statearr_29359_29406[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29353 === (24))){
var inst_29344 = (state_29352[(2)]);
var state_29352__$1 = state_29352;
var statearr_29360_29407 = state_29352__$1;
(statearr_29360_29407[(2)] = inst_29344);

(statearr_29360_29407[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29353 === (4))){
var inst_29350 = (state_29352[(2)]);
var state_29352__$1 = state_29352;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29352__$1,inst_29350);
} else {
if((state_val_29353 === (15))){
var inst_29348 = (state_29352[(2)]);
var state_29352__$1 = state_29352;
var statearr_29361_29408 = state_29352__$1;
(statearr_29361_29408[(2)] = inst_29348);

(statearr_29361_29408[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29353 === (21))){
var inst_29301 = (state_29352[(2)]);
var inst_29302 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29303 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29302);
var state_29352__$1 = (function (){var statearr_29362 = state_29352;
(statearr_29362[(7)] = inst_29301);

return statearr_29362;
})();
var statearr_29363_29409 = state_29352__$1;
(statearr_29363_29409[(2)] = inst_29303);

(statearr_29363_29409[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29353 === (31))){
var inst_29331 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29352__$1 = state_29352;
if(inst_29331){
var statearr_29364_29410 = state_29352__$1;
(statearr_29364_29410[(1)] = (34));

} else {
var statearr_29365_29411 = state_29352__$1;
(statearr_29365_29411[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29353 === (32))){
var inst_29340 = (state_29352[(2)]);
var state_29352__$1 = state_29352;
var statearr_29366_29412 = state_29352__$1;
(statearr_29366_29412[(2)] = inst_29340);

(statearr_29366_29412[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29353 === (33))){
var inst_29327 = (state_29352[(2)]);
var inst_29328 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29329 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29328);
var state_29352__$1 = (function (){var statearr_29367 = state_29352;
(statearr_29367[(8)] = inst_29327);

return statearr_29367;
})();
var statearr_29368_29413 = state_29352__$1;
(statearr_29368_29413[(2)] = inst_29329);

(statearr_29368_29413[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29353 === (13))){
var inst_29286 = figwheel.client.heads_up.clear.call(null);
var state_29352__$1 = state_29352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29352__$1,(16),inst_29286);
} else {
if((state_val_29353 === (22))){
var inst_29307 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29308 = figwheel.client.heads_up.append_warning_message.call(null,inst_29307);
var state_29352__$1 = state_29352;
var statearr_29369_29414 = state_29352__$1;
(statearr_29369_29414[(2)] = inst_29308);

(statearr_29369_29414[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29353 === (36))){
var inst_29338 = (state_29352[(2)]);
var state_29352__$1 = state_29352;
var statearr_29370_29415 = state_29352__$1;
(statearr_29370_29415[(2)] = inst_29338);

(statearr_29370_29415[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29353 === (29))){
var inst_29318 = (state_29352[(2)]);
var inst_29319 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29320 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29319);
var state_29352__$1 = (function (){var statearr_29371 = state_29352;
(statearr_29371[(9)] = inst_29318);

return statearr_29371;
})();
var statearr_29372_29416 = state_29352__$1;
(statearr_29372_29416[(2)] = inst_29320);

(statearr_29372_29416[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29353 === (6))){
var inst_29267 = (state_29352[(10)]);
var state_29352__$1 = state_29352;
var statearr_29373_29417 = state_29352__$1;
(statearr_29373_29417[(2)] = inst_29267);

(statearr_29373_29417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29353 === (28))){
var inst_29314 = (state_29352[(2)]);
var inst_29315 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29316 = figwheel.client.heads_up.display_warning.call(null,inst_29315);
var state_29352__$1 = (function (){var statearr_29374 = state_29352;
(statearr_29374[(11)] = inst_29314);

return statearr_29374;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29352__$1,(29),inst_29316);
} else {
if((state_val_29353 === (25))){
var inst_29312 = figwheel.client.heads_up.clear.call(null);
var state_29352__$1 = state_29352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29352__$1,(28),inst_29312);
} else {
if((state_val_29353 === (34))){
var inst_29333 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29352__$1 = state_29352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29352__$1,(37),inst_29333);
} else {
if((state_val_29353 === (17))){
var inst_29292 = (state_29352[(2)]);
var inst_29293 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29294 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29293);
var state_29352__$1 = (function (){var statearr_29375 = state_29352;
(statearr_29375[(12)] = inst_29292);

return statearr_29375;
})();
var statearr_29376_29418 = state_29352__$1;
(statearr_29376_29418[(2)] = inst_29294);

(statearr_29376_29418[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29353 === (3))){
var inst_29284 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29352__$1 = state_29352;
if(inst_29284){
var statearr_29377_29419 = state_29352__$1;
(statearr_29377_29419[(1)] = (13));

} else {
var statearr_29378_29420 = state_29352__$1;
(statearr_29378_29420[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29353 === (12))){
var inst_29280 = (state_29352[(2)]);
var state_29352__$1 = state_29352;
var statearr_29379_29421 = state_29352__$1;
(statearr_29379_29421[(2)] = inst_29280);

(statearr_29379_29421[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29353 === (2))){
var inst_29267 = (state_29352[(10)]);
var inst_29267__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_29352__$1 = (function (){var statearr_29380 = state_29352;
(statearr_29380[(10)] = inst_29267__$1);

return statearr_29380;
})();
if(cljs.core.truth_(inst_29267__$1)){
var statearr_29381_29422 = state_29352__$1;
(statearr_29381_29422[(1)] = (5));

} else {
var statearr_29382_29423 = state_29352__$1;
(statearr_29382_29423[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29353 === (23))){
var inst_29310 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29352__$1 = state_29352;
if(inst_29310){
var statearr_29383_29424 = state_29352__$1;
(statearr_29383_29424[(1)] = (25));

} else {
var statearr_29384_29425 = state_29352__$1;
(statearr_29384_29425[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29353 === (35))){
var state_29352__$1 = state_29352;
var statearr_29385_29426 = state_29352__$1;
(statearr_29385_29426[(2)] = null);

(statearr_29385_29426[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29353 === (19))){
var inst_29305 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29352__$1 = state_29352;
if(inst_29305){
var statearr_29386_29427 = state_29352__$1;
(statearr_29386_29427[(1)] = (22));

} else {
var statearr_29387_29428 = state_29352__$1;
(statearr_29387_29428[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29353 === (11))){
var inst_29276 = (state_29352[(2)]);
var state_29352__$1 = state_29352;
var statearr_29388_29429 = state_29352__$1;
(statearr_29388_29429[(2)] = inst_29276);

(statearr_29388_29429[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29353 === (9))){
var inst_29278 = figwheel.client.heads_up.clear.call(null);
var state_29352__$1 = state_29352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29352__$1,(12),inst_29278);
} else {
if((state_val_29353 === (5))){
var inst_29269 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29352__$1 = state_29352;
var statearr_29389_29430 = state_29352__$1;
(statearr_29389_29430[(2)] = inst_29269);

(statearr_29389_29430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29353 === (14))){
var inst_29296 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29352__$1 = state_29352;
if(inst_29296){
var statearr_29390_29431 = state_29352__$1;
(statearr_29390_29431[(1)] = (18));

} else {
var statearr_29391_29432 = state_29352__$1;
(statearr_29391_29432[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29353 === (26))){
var inst_29322 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29352__$1 = state_29352;
if(inst_29322){
var statearr_29392_29433 = state_29352__$1;
(statearr_29392_29433[(1)] = (30));

} else {
var statearr_29393_29434 = state_29352__$1;
(statearr_29393_29434[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29353 === (16))){
var inst_29288 = (state_29352[(2)]);
var inst_29289 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29290 = figwheel.client.heads_up.display_exception.call(null,inst_29289);
var state_29352__$1 = (function (){var statearr_29394 = state_29352;
(statearr_29394[(13)] = inst_29288);

return statearr_29394;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29352__$1,(17),inst_29290);
} else {
if((state_val_29353 === (30))){
var inst_29324 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29325 = figwheel.client.heads_up.display_warning.call(null,inst_29324);
var state_29352__$1 = state_29352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29352__$1,(33),inst_29325);
} else {
if((state_val_29353 === (10))){
var inst_29282 = (state_29352[(2)]);
var state_29352__$1 = state_29352;
var statearr_29395_29435 = state_29352__$1;
(statearr_29395_29435[(2)] = inst_29282);

(statearr_29395_29435[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29353 === (18))){
var inst_29298 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29299 = figwheel.client.heads_up.display_exception.call(null,inst_29298);
var state_29352__$1 = state_29352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29352__$1,(21),inst_29299);
} else {
if((state_val_29353 === (37))){
var inst_29335 = (state_29352[(2)]);
var state_29352__$1 = state_29352;
var statearr_29396_29436 = state_29352__$1;
(statearr_29396_29436[(2)] = inst_29335);

(statearr_29396_29436[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29353 === (8))){
var inst_29274 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29352__$1 = state_29352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29352__$1,(11),inst_29274);
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
});})(c__23789__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23694__auto__,c__23789__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23695__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23695__auto____0 = (function (){
var statearr_29397 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29397[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23695__auto__);

(statearr_29397[(1)] = (1));

return statearr_29397;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23695__auto____1 = (function (state_29352){
while(true){
var ret_value__23696__auto__ = (function (){try{while(true){
var result__23697__auto__ = switch__23694__auto__.call(null,state_29352);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23697__auto__;
}
break;
}
}catch (e29398){if((e29398 instanceof Object)){
var ex__23698__auto__ = e29398;
var statearr_29399_29437 = state_29352;
(statearr_29399_29437[(5)] = ex__23698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29438 = state_29352;
state_29352 = G__29438;
continue;
} else {
return ret_value__23696__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23695__auto__ = function(state_29352){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23695__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23695__auto____1.call(this,state_29352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23695__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23695__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23695__auto__;
})()
;})(switch__23694__auto__,c__23789__auto__,msg_hist,msg_names,msg))
})();
var state__23791__auto__ = (function (){var statearr_29400 = f__23790__auto__.call(null);
(statearr_29400[(6)] = c__23789__auto__);

return statearr_29400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23791__auto__);
});})(c__23789__auto__,msg_hist,msg_names,msg))
);

return c__23789__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23789__auto___29467 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23789__auto___29467,ch){
return (function (){
var f__23790__auto__ = (function (){var switch__23694__auto__ = ((function (c__23789__auto___29467,ch){
return (function (state_29453){
var state_val_29454 = (state_29453[(1)]);
if((state_val_29454 === (1))){
var state_29453__$1 = state_29453;
var statearr_29455_29468 = state_29453__$1;
(statearr_29455_29468[(2)] = null);

(statearr_29455_29468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29454 === (2))){
var state_29453__$1 = state_29453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29453__$1,(4),ch);
} else {
if((state_val_29454 === (3))){
var inst_29451 = (state_29453[(2)]);
var state_29453__$1 = state_29453;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29453__$1,inst_29451);
} else {
if((state_val_29454 === (4))){
var inst_29441 = (state_29453[(7)]);
var inst_29441__$1 = (state_29453[(2)]);
var state_29453__$1 = (function (){var statearr_29456 = state_29453;
(statearr_29456[(7)] = inst_29441__$1);

return statearr_29456;
})();
if(cljs.core.truth_(inst_29441__$1)){
var statearr_29457_29469 = state_29453__$1;
(statearr_29457_29469[(1)] = (5));

} else {
var statearr_29458_29470 = state_29453__$1;
(statearr_29458_29470[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29454 === (5))){
var inst_29441 = (state_29453[(7)]);
var inst_29443 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29441);
var state_29453__$1 = state_29453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29453__$1,(8),inst_29443);
} else {
if((state_val_29454 === (6))){
var state_29453__$1 = state_29453;
var statearr_29459_29471 = state_29453__$1;
(statearr_29459_29471[(2)] = null);

(statearr_29459_29471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29454 === (7))){
var inst_29449 = (state_29453[(2)]);
var state_29453__$1 = state_29453;
var statearr_29460_29472 = state_29453__$1;
(statearr_29460_29472[(2)] = inst_29449);

(statearr_29460_29472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29454 === (8))){
var inst_29445 = (state_29453[(2)]);
var state_29453__$1 = (function (){var statearr_29461 = state_29453;
(statearr_29461[(8)] = inst_29445);

return statearr_29461;
})();
var statearr_29462_29473 = state_29453__$1;
(statearr_29462_29473[(2)] = null);

(statearr_29462_29473[(1)] = (2));


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
});})(c__23789__auto___29467,ch))
;
return ((function (switch__23694__auto__,c__23789__auto___29467,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23695__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23695__auto____0 = (function (){
var statearr_29463 = [null,null,null,null,null,null,null,null,null];
(statearr_29463[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23695__auto__);

(statearr_29463[(1)] = (1));

return statearr_29463;
});
var figwheel$client$heads_up_plugin_$_state_machine__23695__auto____1 = (function (state_29453){
while(true){
var ret_value__23696__auto__ = (function (){try{while(true){
var result__23697__auto__ = switch__23694__auto__.call(null,state_29453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23697__auto__;
}
break;
}
}catch (e29464){if((e29464 instanceof Object)){
var ex__23698__auto__ = e29464;
var statearr_29465_29474 = state_29453;
(statearr_29465_29474[(5)] = ex__23698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29475 = state_29453;
state_29453 = G__29475;
continue;
} else {
return ret_value__23696__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23695__auto__ = function(state_29453){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23695__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23695__auto____1.call(this,state_29453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23695__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23695__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23695__auto__;
})()
;})(switch__23694__auto__,c__23789__auto___29467,ch))
})();
var state__23791__auto__ = (function (){var statearr_29466 = f__23790__auto__.call(null);
(statearr_29466[(6)] = c__23789__auto___29467);

return statearr_29466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23791__auto__);
});})(c__23789__auto___29467,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23789__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23789__auto__){
return (function (){
var f__23790__auto__ = (function (){var switch__23694__auto__ = ((function (c__23789__auto__){
return (function (state_29481){
var state_val_29482 = (state_29481[(1)]);
if((state_val_29482 === (1))){
var inst_29476 = cljs.core.async.timeout.call(null,(3000));
var state_29481__$1 = state_29481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29481__$1,(2),inst_29476);
} else {
if((state_val_29482 === (2))){
var inst_29478 = (state_29481[(2)]);
var inst_29479 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29481__$1 = (function (){var statearr_29483 = state_29481;
(statearr_29483[(7)] = inst_29478);

return statearr_29483;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29481__$1,inst_29479);
} else {
return null;
}
}
});})(c__23789__auto__))
;
return ((function (switch__23694__auto__,c__23789__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23695__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23695__auto____0 = (function (){
var statearr_29484 = [null,null,null,null,null,null,null,null];
(statearr_29484[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23695__auto__);

(statearr_29484[(1)] = (1));

return statearr_29484;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23695__auto____1 = (function (state_29481){
while(true){
var ret_value__23696__auto__ = (function (){try{while(true){
var result__23697__auto__ = switch__23694__auto__.call(null,state_29481);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23697__auto__;
}
break;
}
}catch (e29485){if((e29485 instanceof Object)){
var ex__23698__auto__ = e29485;
var statearr_29486_29488 = state_29481;
(statearr_29486_29488[(5)] = ex__23698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29489 = state_29481;
state_29481 = G__29489;
continue;
} else {
return ret_value__23696__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23695__auto__ = function(state_29481){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23695__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23695__auto____1.call(this,state_29481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23695__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23695__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23695__auto__;
})()
;})(switch__23694__auto__,c__23789__auto__))
})();
var state__23791__auto__ = (function (){var statearr_29487 = f__23790__auto__.call(null);
(statearr_29487[(6)] = c__23789__auto__);

return statearr_29487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23791__auto__);
});})(c__23789__auto__))
);

return c__23789__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5735__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5735__auto__)){
var figwheel_version = temp__5735__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23789__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23789__auto__,figwheel_version,temp__5735__auto__){
return (function (){
var f__23790__auto__ = (function (){var switch__23694__auto__ = ((function (c__23789__auto__,figwheel_version,temp__5735__auto__){
return (function (state_29496){
var state_val_29497 = (state_29496[(1)]);
if((state_val_29497 === (1))){
var inst_29490 = cljs.core.async.timeout.call(null,(2000));
var state_29496__$1 = state_29496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29496__$1,(2),inst_29490);
} else {
if((state_val_29497 === (2))){
var inst_29492 = (state_29496[(2)]);
var inst_29493 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_29494 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_29493);
var state_29496__$1 = (function (){var statearr_29498 = state_29496;
(statearr_29498[(7)] = inst_29492);

return statearr_29498;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29496__$1,inst_29494);
} else {
return null;
}
}
});})(c__23789__auto__,figwheel_version,temp__5735__auto__))
;
return ((function (switch__23694__auto__,c__23789__auto__,figwheel_version,temp__5735__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23695__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23695__auto____0 = (function (){
var statearr_29499 = [null,null,null,null,null,null,null,null];
(statearr_29499[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23695__auto__);

(statearr_29499[(1)] = (1));

return statearr_29499;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23695__auto____1 = (function (state_29496){
while(true){
var ret_value__23696__auto__ = (function (){try{while(true){
var result__23697__auto__ = switch__23694__auto__.call(null,state_29496);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23697__auto__;
}
break;
}
}catch (e29500){if((e29500 instanceof Object)){
var ex__23698__auto__ = e29500;
var statearr_29501_29503 = state_29496;
(statearr_29501_29503[(5)] = ex__23698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29504 = state_29496;
state_29496 = G__29504;
continue;
} else {
return ret_value__23696__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23695__auto__ = function(state_29496){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23695__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23695__auto____1.call(this,state_29496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23695__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23695__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23695__auto__;
})()
;})(switch__23694__auto__,c__23789__auto__,figwheel_version,temp__5735__auto__))
})();
var state__23791__auto__ = (function (){var statearr_29502 = f__23790__auto__.call(null);
(statearr_29502[(6)] = c__23789__auto__);

return statearr_29502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23791__auto__);
});})(c__23789__auto__,figwheel_version,temp__5735__auto__))
);

return c__23789__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__29505){
var map__29506 = p__29505;
var map__29506__$1 = (((((!((map__29506 == null))))?(((((map__29506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29506):map__29506);
var file = cljs.core.get.call(null,map__29506__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__29506__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__29506__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__29508 = "";
var G__29508__$1 = (cljs.core.truth_(file)?[G__29508,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__29508);
var G__29508__$2 = (cljs.core.truth_(line)?[G__29508__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__29508__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__29508__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__29508__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29509){
var map__29510 = p__29509;
var map__29510__$1 = (((((!((map__29510 == null))))?(((((map__29510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29510):map__29510);
var ed = map__29510__$1;
var exception_data = cljs.core.get.call(null,map__29510__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29510__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_29513 = (function (){var G__29512 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29512)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__29512;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_29513);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29514){
var map__29515 = p__29514;
var map__29515__$1 = (((((!((map__29515 == null))))?(((((map__29515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29515):map__29515);
var w = map__29515__$1;
var message = cljs.core.get.call(null,map__29515__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/development/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/development/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4120__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__29517 = cljs.core.seq.call(null,plugins);
var chunk__29518 = null;
var count__29519 = (0);
var i__29520 = (0);
while(true){
if((i__29520 < count__29519)){
var vec__29527 = cljs.core._nth.call(null,chunk__29518,i__29520);
var k = cljs.core.nth.call(null,vec__29527,(0),null);
var plugin = cljs.core.nth.call(null,vec__29527,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29533 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29517,chunk__29518,count__29519,i__29520,pl_29533,vec__29527,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29533.call(null,msg_hist);
});})(seq__29517,chunk__29518,count__29519,i__29520,pl_29533,vec__29527,k,plugin))
);
} else {
}


var G__29534 = seq__29517;
var G__29535 = chunk__29518;
var G__29536 = count__29519;
var G__29537 = (i__29520 + (1));
seq__29517 = G__29534;
chunk__29518 = G__29535;
count__29519 = G__29536;
i__29520 = G__29537;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__29517);
if(temp__5735__auto__){
var seq__29517__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29517__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29517__$1);
var G__29538 = cljs.core.chunk_rest.call(null,seq__29517__$1);
var G__29539 = c__4550__auto__;
var G__29540 = cljs.core.count.call(null,c__4550__auto__);
var G__29541 = (0);
seq__29517 = G__29538;
chunk__29518 = G__29539;
count__29519 = G__29540;
i__29520 = G__29541;
continue;
} else {
var vec__29530 = cljs.core.first.call(null,seq__29517__$1);
var k = cljs.core.nth.call(null,vec__29530,(0),null);
var plugin = cljs.core.nth.call(null,vec__29530,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29542 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29517,chunk__29518,count__29519,i__29520,pl_29542,vec__29530,k,plugin,seq__29517__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29542.call(null,msg_hist);
});})(seq__29517,chunk__29518,count__29519,i__29520,pl_29542,vec__29530,k,plugin,seq__29517__$1,temp__5735__auto__))
);
} else {
}


var G__29543 = cljs.core.next.call(null,seq__29517__$1);
var G__29544 = null;
var G__29545 = (0);
var G__29546 = (0);
seq__29517 = G__29543;
chunk__29518 = G__29544;
count__29519 = G__29545;
i__29520 = G__29546;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__29548 = arguments.length;
switch (G__29548) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__29549_29554 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__29550_29555 = null;
var count__29551_29556 = (0);
var i__29552_29557 = (0);
while(true){
if((i__29552_29557 < count__29551_29556)){
var msg_29558 = cljs.core._nth.call(null,chunk__29550_29555,i__29552_29557);
figwheel.client.socket.handle_incoming_message.call(null,msg_29558);


var G__29559 = seq__29549_29554;
var G__29560 = chunk__29550_29555;
var G__29561 = count__29551_29556;
var G__29562 = (i__29552_29557 + (1));
seq__29549_29554 = G__29559;
chunk__29550_29555 = G__29560;
count__29551_29556 = G__29561;
i__29552_29557 = G__29562;
continue;
} else {
var temp__5735__auto___29563 = cljs.core.seq.call(null,seq__29549_29554);
if(temp__5735__auto___29563){
var seq__29549_29564__$1 = temp__5735__auto___29563;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29549_29564__$1)){
var c__4550__auto___29565 = cljs.core.chunk_first.call(null,seq__29549_29564__$1);
var G__29566 = cljs.core.chunk_rest.call(null,seq__29549_29564__$1);
var G__29567 = c__4550__auto___29565;
var G__29568 = cljs.core.count.call(null,c__4550__auto___29565);
var G__29569 = (0);
seq__29549_29554 = G__29566;
chunk__29550_29555 = G__29567;
count__29551_29556 = G__29568;
i__29552_29557 = G__29569;
continue;
} else {
var msg_29570 = cljs.core.first.call(null,seq__29549_29564__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_29570);


var G__29571 = cljs.core.next.call(null,seq__29549_29564__$1);
var G__29572 = null;
var G__29573 = (0);
var G__29574 = (0);
seq__29549_29554 = G__29571;
chunk__29550_29555 = G__29572;
count__29551_29556 = G__29573;
i__29552_29557 = G__29574;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4736__auto__ = [];
var len__4730__auto___29579 = arguments.length;
var i__4731__auto___29580 = (0);
while(true){
if((i__4731__auto___29580 < len__4730__auto___29579)){
args__4736__auto__.push((arguments[i__4731__auto___29580]));

var G__29581 = (i__4731__auto___29580 + (1));
i__4731__auto___29580 = G__29581;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29576){
var map__29577 = p__29576;
var map__29577__$1 = (((((!((map__29577 == null))))?(((((map__29577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29577):map__29577);
var opts = map__29577__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29575){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29575));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e29582){if((e29582 instanceof Error)){
var e = e29582;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e29582;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__29583){
var map__29584 = p__29583;
var map__29584__$1 = (((((!((map__29584 == null))))?(((((map__29584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29584):map__29584);
var msg_name = cljs.core.get.call(null,map__29584__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1704783953570
