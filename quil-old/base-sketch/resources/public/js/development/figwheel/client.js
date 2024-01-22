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
}catch (e28964){if((e28964 instanceof Error)){
var e = e28964;
return "Error: Unable to stringify";
} else {
throw e28964;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__28967 = arguments.length;
switch (G__28967) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__28965_SHARP_){
if(typeof p1__28965_SHARP_ === 'string'){
return p1__28965_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__28965_SHARP_);
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
var len__4730__auto___28970 = arguments.length;
var i__4731__auto___28971 = (0);
while(true){
if((i__4731__auto___28971 < len__4730__auto___28970)){
args__4736__auto__.push((arguments[i__4731__auto___28971]));

var G__28972 = (i__4731__auto___28971 + (1));
i__4731__auto___28971 = G__28972;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq28969){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28969));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___28974 = arguments.length;
var i__4731__auto___28975 = (0);
while(true){
if((i__4731__auto___28975 < len__4730__auto___28974)){
args__4736__auto__.push((arguments[i__4731__auto___28975]));

var G__28976 = (i__4731__auto___28975 + (1));
i__4731__auto___28975 = G__28976;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq28973){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28973));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28977){
var map__28978 = p__28977;
var map__28978__$1 = (((((!((map__28978 == null))))?(((((map__28978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28978):map__28978);
var message = cljs.core.get.call(null,map__28978__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__28978__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__23635__auto___29057 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23635__auto___29057,ch){
return (function (){
var f__23636__auto__ = (function (){var switch__23540__auto__ = ((function (c__23635__auto___29057,ch){
return (function (state_29029){
var state_val_29030 = (state_29029[(1)]);
if((state_val_29030 === (7))){
var inst_29025 = (state_29029[(2)]);
var state_29029__$1 = state_29029;
var statearr_29031_29058 = state_29029__$1;
(statearr_29031_29058[(2)] = inst_29025);

(statearr_29031_29058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29030 === (1))){
var state_29029__$1 = state_29029;
var statearr_29032_29059 = state_29029__$1;
(statearr_29032_29059[(2)] = null);

(statearr_29032_29059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29030 === (4))){
var inst_28982 = (state_29029[(7)]);
var inst_28982__$1 = (state_29029[(2)]);
var state_29029__$1 = (function (){var statearr_29033 = state_29029;
(statearr_29033[(7)] = inst_28982__$1);

return statearr_29033;
})();
if(cljs.core.truth_(inst_28982__$1)){
var statearr_29034_29060 = state_29029__$1;
(statearr_29034_29060[(1)] = (5));

} else {
var statearr_29035_29061 = state_29029__$1;
(statearr_29035_29061[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29030 === (15))){
var inst_28989 = (state_29029[(8)]);
var inst_29004 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28989);
var inst_29005 = cljs.core.first.call(null,inst_29004);
var inst_29006 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29005);
var inst_29007 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29006)].join('');
var inst_29008 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_29007);
var state_29029__$1 = state_29029;
var statearr_29036_29062 = state_29029__$1;
(statearr_29036_29062[(2)] = inst_29008);

(statearr_29036_29062[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29030 === (13))){
var inst_29013 = (state_29029[(2)]);
var state_29029__$1 = state_29029;
var statearr_29037_29063 = state_29029__$1;
(statearr_29037_29063[(2)] = inst_29013);

(statearr_29037_29063[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29030 === (6))){
var state_29029__$1 = state_29029;
var statearr_29038_29064 = state_29029__$1;
(statearr_29038_29064[(2)] = null);

(statearr_29038_29064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29030 === (17))){
var inst_29011 = (state_29029[(2)]);
var state_29029__$1 = state_29029;
var statearr_29039_29065 = state_29029__$1;
(statearr_29039_29065[(2)] = inst_29011);

(statearr_29039_29065[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29030 === (3))){
var inst_29027 = (state_29029[(2)]);
var state_29029__$1 = state_29029;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29029__$1,inst_29027);
} else {
if((state_val_29030 === (12))){
var inst_28988 = (state_29029[(9)]);
var inst_29002 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28988,opts);
var state_29029__$1 = state_29029;
if(inst_29002){
var statearr_29040_29066 = state_29029__$1;
(statearr_29040_29066[(1)] = (15));

} else {
var statearr_29041_29067 = state_29029__$1;
(statearr_29041_29067[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29030 === (2))){
var state_29029__$1 = state_29029;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29029__$1,(4),ch);
} else {
if((state_val_29030 === (11))){
var inst_28989 = (state_29029[(8)]);
var inst_28994 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28995 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28989);
var inst_28996 = cljs.core.async.timeout.call(null,(1000));
var inst_28997 = [inst_28995,inst_28996];
var inst_28998 = (new cljs.core.PersistentVector(null,2,(5),inst_28994,inst_28997,null));
var state_29029__$1 = state_29029;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29029__$1,(14),inst_28998);
} else {
if((state_val_29030 === (9))){
var inst_28989 = (state_29029[(8)]);
var inst_29015 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_29016 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28989);
var inst_29017 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29016);
var inst_29018 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29017)].join('');
var inst_29019 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_29018);
var state_29029__$1 = (function (){var statearr_29042 = state_29029;
(statearr_29042[(10)] = inst_29015);

return statearr_29042;
})();
var statearr_29043_29068 = state_29029__$1;
(statearr_29043_29068[(2)] = inst_29019);

(statearr_29043_29068[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29030 === (5))){
var inst_28982 = (state_29029[(7)]);
var inst_28984 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28985 = (new cljs.core.PersistentArrayMap(null,2,inst_28984,null));
var inst_28986 = (new cljs.core.PersistentHashSet(null,inst_28985,null));
var inst_28987 = figwheel.client.focus_msgs.call(null,inst_28986,inst_28982);
var inst_28988 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28987);
var inst_28989 = cljs.core.first.call(null,inst_28987);
var inst_28990 = figwheel.client.autoload_QMARK_.call(null);
var state_29029__$1 = (function (){var statearr_29044 = state_29029;
(statearr_29044[(9)] = inst_28988);

(statearr_29044[(8)] = inst_28989);

return statearr_29044;
})();
if(cljs.core.truth_(inst_28990)){
var statearr_29045_29069 = state_29029__$1;
(statearr_29045_29069[(1)] = (8));

} else {
var statearr_29046_29070 = state_29029__$1;
(statearr_29046_29070[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29030 === (14))){
var inst_29000 = (state_29029[(2)]);
var state_29029__$1 = state_29029;
var statearr_29047_29071 = state_29029__$1;
(statearr_29047_29071[(2)] = inst_29000);

(statearr_29047_29071[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29030 === (16))){
var state_29029__$1 = state_29029;
var statearr_29048_29072 = state_29029__$1;
(statearr_29048_29072[(2)] = null);

(statearr_29048_29072[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29030 === (10))){
var inst_29021 = (state_29029[(2)]);
var state_29029__$1 = (function (){var statearr_29049 = state_29029;
(statearr_29049[(11)] = inst_29021);

return statearr_29049;
})();
var statearr_29050_29073 = state_29029__$1;
(statearr_29050_29073[(2)] = null);

(statearr_29050_29073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29030 === (8))){
var inst_28988 = (state_29029[(9)]);
var inst_28992 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28988,opts);
var state_29029__$1 = state_29029;
if(cljs.core.truth_(inst_28992)){
var statearr_29051_29074 = state_29029__$1;
(statearr_29051_29074[(1)] = (11));

} else {
var statearr_29052_29075 = state_29029__$1;
(statearr_29052_29075[(1)] = (12));

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
});})(c__23635__auto___29057,ch))
;
return ((function (switch__23540__auto__,c__23635__auto___29057,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23541__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23541__auto____0 = (function (){
var statearr_29053 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29053[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23541__auto__);

(statearr_29053[(1)] = (1));

return statearr_29053;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23541__auto____1 = (function (state_29029){
while(true){
var ret_value__23542__auto__ = (function (){try{while(true){
var result__23543__auto__ = switch__23540__auto__.call(null,state_29029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23543__auto__;
}
break;
}
}catch (e29054){if((e29054 instanceof Object)){
var ex__23544__auto__ = e29054;
var statearr_29055_29076 = state_29029;
(statearr_29055_29076[(5)] = ex__23544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29077 = state_29029;
state_29029 = G__29077;
continue;
} else {
return ret_value__23542__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23541__auto__ = function(state_29029){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23541__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23541__auto____1.call(this,state_29029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23541__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23541__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23541__auto__;
})()
;})(switch__23540__auto__,c__23635__auto___29057,ch))
})();
var state__23637__auto__ = (function (){var statearr_29056 = f__23636__auto__.call(null);
(statearr_29056[(6)] = c__23635__auto___29057);

return statearr_29056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23637__auto__);
});})(c__23635__auto___29057,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29078_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29078_SHARP_));
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
var base_path_29084 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29084){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29080 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29081 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29082 = true;
var _STAR_print_fn_STAR__temp_val__29083 = ((function (_STAR_print_newline_STAR__orig_val__29080,_STAR_print_fn_STAR__orig_val__29081,_STAR_print_newline_STAR__temp_val__29082,sb,base_path_29084){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__29080,_STAR_print_fn_STAR__orig_val__29081,_STAR_print_newline_STAR__temp_val__29082,sb,base_path_29084))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29082;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29083;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29081;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29080;
}}catch (e29079){if((e29079 instanceof Error)){
var e = e29079;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29084], null));
} else {
var e = e29079;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_29084))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29085){
var map__29086 = p__29085;
var map__29086__$1 = (((((!((map__29086 == null))))?(((((map__29086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29086.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29086):map__29086);
var opts = map__29086__$1;
var build_id = cljs.core.get.call(null,map__29086__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29086,map__29086__$1,opts,build_id){
return (function (p__29088){
var vec__29089 = p__29088;
var seq__29090 = cljs.core.seq.call(null,vec__29089);
var first__29091 = cljs.core.first.call(null,seq__29090);
var seq__29090__$1 = cljs.core.next.call(null,seq__29090);
var map__29092 = first__29091;
var map__29092__$1 = (((((!((map__29092 == null))))?(((((map__29092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29092):map__29092);
var msg = map__29092__$1;
var msg_name = cljs.core.get.call(null,map__29092__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29090__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__29089,seq__29090,first__29091,seq__29090__$1,map__29092,map__29092__$1,msg,msg_name,_,map__29086,map__29086__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29089,seq__29090,first__29091,seq__29090__$1,map__29092,map__29092__$1,msg,msg_name,_,map__29086,map__29086__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29086,map__29086__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29094){
var vec__29095 = p__29094;
var seq__29096 = cljs.core.seq.call(null,vec__29095);
var first__29097 = cljs.core.first.call(null,seq__29096);
var seq__29096__$1 = cljs.core.next.call(null,seq__29096);
var map__29098 = first__29097;
var map__29098__$1 = (((((!((map__29098 == null))))?(((((map__29098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29098):map__29098);
var msg = map__29098__$1;
var msg_name = cljs.core.get.call(null,map__29098__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29096__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29100){
var map__29101 = p__29100;
var map__29101__$1 = (((((!((map__29101 == null))))?(((((map__29101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29101):map__29101);
var on_compile_warning = cljs.core.get.call(null,map__29101__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29101__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__29101,map__29101__$1,on_compile_warning,on_compile_fail){
return (function (p__29103){
var vec__29104 = p__29103;
var seq__29105 = cljs.core.seq.call(null,vec__29104);
var first__29106 = cljs.core.first.call(null,seq__29105);
var seq__29105__$1 = cljs.core.next.call(null,seq__29105);
var map__29107 = first__29106;
var map__29107__$1 = (((((!((map__29107 == null))))?(((((map__29107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29107):map__29107);
var msg = map__29107__$1;
var msg_name = cljs.core.get.call(null,map__29107__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29105__$1;
var pred__29109 = cljs.core._EQ_;
var expr__29110 = msg_name;
if(cljs.core.truth_(pred__29109.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29110))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29109.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29110))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29101,map__29101__$1,on_compile_warning,on_compile_fail))
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
var c__23635__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23635__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23636__auto__ = (function (){var switch__23540__auto__ = ((function (c__23635__auto__,msg_hist,msg_names,msg){
return (function (state_29199){
var state_val_29200 = (state_29199[(1)]);
if((state_val_29200 === (7))){
var inst_29119 = (state_29199[(2)]);
var state_29199__$1 = state_29199;
if(cljs.core.truth_(inst_29119)){
var statearr_29201_29248 = state_29199__$1;
(statearr_29201_29248[(1)] = (8));

} else {
var statearr_29202_29249 = state_29199__$1;
(statearr_29202_29249[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29200 === (20))){
var inst_29193 = (state_29199[(2)]);
var state_29199__$1 = state_29199;
var statearr_29203_29250 = state_29199__$1;
(statearr_29203_29250[(2)] = inst_29193);

(statearr_29203_29250[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29200 === (27))){
var inst_29189 = (state_29199[(2)]);
var state_29199__$1 = state_29199;
var statearr_29204_29251 = state_29199__$1;
(statearr_29204_29251[(2)] = inst_29189);

(statearr_29204_29251[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29200 === (1))){
var inst_29112 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29199__$1 = state_29199;
if(cljs.core.truth_(inst_29112)){
var statearr_29205_29252 = state_29199__$1;
(statearr_29205_29252[(1)] = (2));

} else {
var statearr_29206_29253 = state_29199__$1;
(statearr_29206_29253[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29200 === (24))){
var inst_29191 = (state_29199[(2)]);
var state_29199__$1 = state_29199;
var statearr_29207_29254 = state_29199__$1;
(statearr_29207_29254[(2)] = inst_29191);

(statearr_29207_29254[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29200 === (4))){
var inst_29197 = (state_29199[(2)]);
var state_29199__$1 = state_29199;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29199__$1,inst_29197);
} else {
if((state_val_29200 === (15))){
var inst_29195 = (state_29199[(2)]);
var state_29199__$1 = state_29199;
var statearr_29208_29255 = state_29199__$1;
(statearr_29208_29255[(2)] = inst_29195);

(statearr_29208_29255[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29200 === (21))){
var inst_29148 = (state_29199[(2)]);
var inst_29149 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29150 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29149);
var state_29199__$1 = (function (){var statearr_29209 = state_29199;
(statearr_29209[(7)] = inst_29148);

return statearr_29209;
})();
var statearr_29210_29256 = state_29199__$1;
(statearr_29210_29256[(2)] = inst_29150);

(statearr_29210_29256[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29200 === (31))){
var inst_29178 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29199__$1 = state_29199;
if(inst_29178){
var statearr_29211_29257 = state_29199__$1;
(statearr_29211_29257[(1)] = (34));

} else {
var statearr_29212_29258 = state_29199__$1;
(statearr_29212_29258[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29200 === (32))){
var inst_29187 = (state_29199[(2)]);
var state_29199__$1 = state_29199;
var statearr_29213_29259 = state_29199__$1;
(statearr_29213_29259[(2)] = inst_29187);

(statearr_29213_29259[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29200 === (33))){
var inst_29174 = (state_29199[(2)]);
var inst_29175 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29176 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29175);
var state_29199__$1 = (function (){var statearr_29214 = state_29199;
(statearr_29214[(8)] = inst_29174);

return statearr_29214;
})();
var statearr_29215_29260 = state_29199__$1;
(statearr_29215_29260[(2)] = inst_29176);

(statearr_29215_29260[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29200 === (13))){
var inst_29133 = figwheel.client.heads_up.clear.call(null);
var state_29199__$1 = state_29199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29199__$1,(16),inst_29133);
} else {
if((state_val_29200 === (22))){
var inst_29154 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29155 = figwheel.client.heads_up.append_warning_message.call(null,inst_29154);
var state_29199__$1 = state_29199;
var statearr_29216_29261 = state_29199__$1;
(statearr_29216_29261[(2)] = inst_29155);

(statearr_29216_29261[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29200 === (36))){
var inst_29185 = (state_29199[(2)]);
var state_29199__$1 = state_29199;
var statearr_29217_29262 = state_29199__$1;
(statearr_29217_29262[(2)] = inst_29185);

(statearr_29217_29262[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29200 === (29))){
var inst_29165 = (state_29199[(2)]);
var inst_29166 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29167 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29166);
var state_29199__$1 = (function (){var statearr_29218 = state_29199;
(statearr_29218[(9)] = inst_29165);

return statearr_29218;
})();
var statearr_29219_29263 = state_29199__$1;
(statearr_29219_29263[(2)] = inst_29167);

(statearr_29219_29263[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29200 === (6))){
var inst_29114 = (state_29199[(10)]);
var state_29199__$1 = state_29199;
var statearr_29220_29264 = state_29199__$1;
(statearr_29220_29264[(2)] = inst_29114);

(statearr_29220_29264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29200 === (28))){
var inst_29161 = (state_29199[(2)]);
var inst_29162 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29163 = figwheel.client.heads_up.display_warning.call(null,inst_29162);
var state_29199__$1 = (function (){var statearr_29221 = state_29199;
(statearr_29221[(11)] = inst_29161);

return statearr_29221;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29199__$1,(29),inst_29163);
} else {
if((state_val_29200 === (25))){
var inst_29159 = figwheel.client.heads_up.clear.call(null);
var state_29199__$1 = state_29199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29199__$1,(28),inst_29159);
} else {
if((state_val_29200 === (34))){
var inst_29180 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29199__$1 = state_29199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29199__$1,(37),inst_29180);
} else {
if((state_val_29200 === (17))){
var inst_29139 = (state_29199[(2)]);
var inst_29140 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29141 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29140);
var state_29199__$1 = (function (){var statearr_29222 = state_29199;
(statearr_29222[(12)] = inst_29139);

return statearr_29222;
})();
var statearr_29223_29265 = state_29199__$1;
(statearr_29223_29265[(2)] = inst_29141);

(statearr_29223_29265[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29200 === (3))){
var inst_29131 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29199__$1 = state_29199;
if(inst_29131){
var statearr_29224_29266 = state_29199__$1;
(statearr_29224_29266[(1)] = (13));

} else {
var statearr_29225_29267 = state_29199__$1;
(statearr_29225_29267[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29200 === (12))){
var inst_29127 = (state_29199[(2)]);
var state_29199__$1 = state_29199;
var statearr_29226_29268 = state_29199__$1;
(statearr_29226_29268[(2)] = inst_29127);

(statearr_29226_29268[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29200 === (2))){
var inst_29114 = (state_29199[(10)]);
var inst_29114__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_29199__$1 = (function (){var statearr_29227 = state_29199;
(statearr_29227[(10)] = inst_29114__$1);

return statearr_29227;
})();
if(cljs.core.truth_(inst_29114__$1)){
var statearr_29228_29269 = state_29199__$1;
(statearr_29228_29269[(1)] = (5));

} else {
var statearr_29229_29270 = state_29199__$1;
(statearr_29229_29270[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29200 === (23))){
var inst_29157 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29199__$1 = state_29199;
if(inst_29157){
var statearr_29230_29271 = state_29199__$1;
(statearr_29230_29271[(1)] = (25));

} else {
var statearr_29231_29272 = state_29199__$1;
(statearr_29231_29272[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29200 === (35))){
var state_29199__$1 = state_29199;
var statearr_29232_29273 = state_29199__$1;
(statearr_29232_29273[(2)] = null);

(statearr_29232_29273[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29200 === (19))){
var inst_29152 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29199__$1 = state_29199;
if(inst_29152){
var statearr_29233_29274 = state_29199__$1;
(statearr_29233_29274[(1)] = (22));

} else {
var statearr_29234_29275 = state_29199__$1;
(statearr_29234_29275[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29200 === (11))){
var inst_29123 = (state_29199[(2)]);
var state_29199__$1 = state_29199;
var statearr_29235_29276 = state_29199__$1;
(statearr_29235_29276[(2)] = inst_29123);

(statearr_29235_29276[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29200 === (9))){
var inst_29125 = figwheel.client.heads_up.clear.call(null);
var state_29199__$1 = state_29199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29199__$1,(12),inst_29125);
} else {
if((state_val_29200 === (5))){
var inst_29116 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29199__$1 = state_29199;
var statearr_29236_29277 = state_29199__$1;
(statearr_29236_29277[(2)] = inst_29116);

(statearr_29236_29277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29200 === (14))){
var inst_29143 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29199__$1 = state_29199;
if(inst_29143){
var statearr_29237_29278 = state_29199__$1;
(statearr_29237_29278[(1)] = (18));

} else {
var statearr_29238_29279 = state_29199__$1;
(statearr_29238_29279[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29200 === (26))){
var inst_29169 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29199__$1 = state_29199;
if(inst_29169){
var statearr_29239_29280 = state_29199__$1;
(statearr_29239_29280[(1)] = (30));

} else {
var statearr_29240_29281 = state_29199__$1;
(statearr_29240_29281[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29200 === (16))){
var inst_29135 = (state_29199[(2)]);
var inst_29136 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29137 = figwheel.client.heads_up.display_exception.call(null,inst_29136);
var state_29199__$1 = (function (){var statearr_29241 = state_29199;
(statearr_29241[(13)] = inst_29135);

return statearr_29241;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29199__$1,(17),inst_29137);
} else {
if((state_val_29200 === (30))){
var inst_29171 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29172 = figwheel.client.heads_up.display_warning.call(null,inst_29171);
var state_29199__$1 = state_29199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29199__$1,(33),inst_29172);
} else {
if((state_val_29200 === (10))){
var inst_29129 = (state_29199[(2)]);
var state_29199__$1 = state_29199;
var statearr_29242_29282 = state_29199__$1;
(statearr_29242_29282[(2)] = inst_29129);

(statearr_29242_29282[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29200 === (18))){
var inst_29145 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29146 = figwheel.client.heads_up.display_exception.call(null,inst_29145);
var state_29199__$1 = state_29199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29199__$1,(21),inst_29146);
} else {
if((state_val_29200 === (37))){
var inst_29182 = (state_29199[(2)]);
var state_29199__$1 = state_29199;
var statearr_29243_29283 = state_29199__$1;
(statearr_29243_29283[(2)] = inst_29182);

(statearr_29243_29283[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29200 === (8))){
var inst_29121 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29199__$1 = state_29199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29199__$1,(11),inst_29121);
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
});})(c__23635__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23540__auto__,c__23635__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23541__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23541__auto____0 = (function (){
var statearr_29244 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29244[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23541__auto__);

(statearr_29244[(1)] = (1));

return statearr_29244;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23541__auto____1 = (function (state_29199){
while(true){
var ret_value__23542__auto__ = (function (){try{while(true){
var result__23543__auto__ = switch__23540__auto__.call(null,state_29199);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23543__auto__;
}
break;
}
}catch (e29245){if((e29245 instanceof Object)){
var ex__23544__auto__ = e29245;
var statearr_29246_29284 = state_29199;
(statearr_29246_29284[(5)] = ex__23544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29245;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29285 = state_29199;
state_29199 = G__29285;
continue;
} else {
return ret_value__23542__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23541__auto__ = function(state_29199){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23541__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23541__auto____1.call(this,state_29199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23541__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23541__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23541__auto__;
})()
;})(switch__23540__auto__,c__23635__auto__,msg_hist,msg_names,msg))
})();
var state__23637__auto__ = (function (){var statearr_29247 = f__23636__auto__.call(null);
(statearr_29247[(6)] = c__23635__auto__);

return statearr_29247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23637__auto__);
});})(c__23635__auto__,msg_hist,msg_names,msg))
);

return c__23635__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23635__auto___29314 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23635__auto___29314,ch){
return (function (){
var f__23636__auto__ = (function (){var switch__23540__auto__ = ((function (c__23635__auto___29314,ch){
return (function (state_29300){
var state_val_29301 = (state_29300[(1)]);
if((state_val_29301 === (1))){
var state_29300__$1 = state_29300;
var statearr_29302_29315 = state_29300__$1;
(statearr_29302_29315[(2)] = null);

(statearr_29302_29315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (2))){
var state_29300__$1 = state_29300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29300__$1,(4),ch);
} else {
if((state_val_29301 === (3))){
var inst_29298 = (state_29300[(2)]);
var state_29300__$1 = state_29300;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29300__$1,inst_29298);
} else {
if((state_val_29301 === (4))){
var inst_29288 = (state_29300[(7)]);
var inst_29288__$1 = (state_29300[(2)]);
var state_29300__$1 = (function (){var statearr_29303 = state_29300;
(statearr_29303[(7)] = inst_29288__$1);

return statearr_29303;
})();
if(cljs.core.truth_(inst_29288__$1)){
var statearr_29304_29316 = state_29300__$1;
(statearr_29304_29316[(1)] = (5));

} else {
var statearr_29305_29317 = state_29300__$1;
(statearr_29305_29317[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (5))){
var inst_29288 = (state_29300[(7)]);
var inst_29290 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29288);
var state_29300__$1 = state_29300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29300__$1,(8),inst_29290);
} else {
if((state_val_29301 === (6))){
var state_29300__$1 = state_29300;
var statearr_29306_29318 = state_29300__$1;
(statearr_29306_29318[(2)] = null);

(statearr_29306_29318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (7))){
var inst_29296 = (state_29300[(2)]);
var state_29300__$1 = state_29300;
var statearr_29307_29319 = state_29300__$1;
(statearr_29307_29319[(2)] = inst_29296);

(statearr_29307_29319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (8))){
var inst_29292 = (state_29300[(2)]);
var state_29300__$1 = (function (){var statearr_29308 = state_29300;
(statearr_29308[(8)] = inst_29292);

return statearr_29308;
})();
var statearr_29309_29320 = state_29300__$1;
(statearr_29309_29320[(2)] = null);

(statearr_29309_29320[(1)] = (2));


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
});})(c__23635__auto___29314,ch))
;
return ((function (switch__23540__auto__,c__23635__auto___29314,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23541__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23541__auto____0 = (function (){
var statearr_29310 = [null,null,null,null,null,null,null,null,null];
(statearr_29310[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23541__auto__);

(statearr_29310[(1)] = (1));

return statearr_29310;
});
var figwheel$client$heads_up_plugin_$_state_machine__23541__auto____1 = (function (state_29300){
while(true){
var ret_value__23542__auto__ = (function (){try{while(true){
var result__23543__auto__ = switch__23540__auto__.call(null,state_29300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23543__auto__;
}
break;
}
}catch (e29311){if((e29311 instanceof Object)){
var ex__23544__auto__ = e29311;
var statearr_29312_29321 = state_29300;
(statearr_29312_29321[(5)] = ex__23544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29322 = state_29300;
state_29300 = G__29322;
continue;
} else {
return ret_value__23542__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23541__auto__ = function(state_29300){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23541__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23541__auto____1.call(this,state_29300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23541__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23541__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23541__auto__;
})()
;})(switch__23540__auto__,c__23635__auto___29314,ch))
})();
var state__23637__auto__ = (function (){var statearr_29313 = f__23636__auto__.call(null);
(statearr_29313[(6)] = c__23635__auto___29314);

return statearr_29313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23637__auto__);
});})(c__23635__auto___29314,ch))
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
var c__23635__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23635__auto__){
return (function (){
var f__23636__auto__ = (function (){var switch__23540__auto__ = ((function (c__23635__auto__){
return (function (state_29328){
var state_val_29329 = (state_29328[(1)]);
if((state_val_29329 === (1))){
var inst_29323 = cljs.core.async.timeout.call(null,(3000));
var state_29328__$1 = state_29328;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29328__$1,(2),inst_29323);
} else {
if((state_val_29329 === (2))){
var inst_29325 = (state_29328[(2)]);
var inst_29326 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29328__$1 = (function (){var statearr_29330 = state_29328;
(statearr_29330[(7)] = inst_29325);

return statearr_29330;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29328__$1,inst_29326);
} else {
return null;
}
}
});})(c__23635__auto__))
;
return ((function (switch__23540__auto__,c__23635__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23541__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23541__auto____0 = (function (){
var statearr_29331 = [null,null,null,null,null,null,null,null];
(statearr_29331[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23541__auto__);

(statearr_29331[(1)] = (1));

return statearr_29331;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23541__auto____1 = (function (state_29328){
while(true){
var ret_value__23542__auto__ = (function (){try{while(true){
var result__23543__auto__ = switch__23540__auto__.call(null,state_29328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23543__auto__;
}
break;
}
}catch (e29332){if((e29332 instanceof Object)){
var ex__23544__auto__ = e29332;
var statearr_29333_29335 = state_29328;
(statearr_29333_29335[(5)] = ex__23544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29336 = state_29328;
state_29328 = G__29336;
continue;
} else {
return ret_value__23542__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23541__auto__ = function(state_29328){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23541__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23541__auto____1.call(this,state_29328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23541__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23541__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23541__auto__;
})()
;})(switch__23540__auto__,c__23635__auto__))
})();
var state__23637__auto__ = (function (){var statearr_29334 = f__23636__auto__.call(null);
(statearr_29334[(6)] = c__23635__auto__);

return statearr_29334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23637__auto__);
});})(c__23635__auto__))
);

return c__23635__auto__;
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
var c__23635__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23635__auto__,figwheel_version,temp__5735__auto__){
return (function (){
var f__23636__auto__ = (function (){var switch__23540__auto__ = ((function (c__23635__auto__,figwheel_version,temp__5735__auto__){
return (function (state_29343){
var state_val_29344 = (state_29343[(1)]);
if((state_val_29344 === (1))){
var inst_29337 = cljs.core.async.timeout.call(null,(2000));
var state_29343__$1 = state_29343;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29343__$1,(2),inst_29337);
} else {
if((state_val_29344 === (2))){
var inst_29339 = (state_29343[(2)]);
var inst_29340 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_29341 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_29340);
var state_29343__$1 = (function (){var statearr_29345 = state_29343;
(statearr_29345[(7)] = inst_29339);

return statearr_29345;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29343__$1,inst_29341);
} else {
return null;
}
}
});})(c__23635__auto__,figwheel_version,temp__5735__auto__))
;
return ((function (switch__23540__auto__,c__23635__auto__,figwheel_version,temp__5735__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23541__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23541__auto____0 = (function (){
var statearr_29346 = [null,null,null,null,null,null,null,null];
(statearr_29346[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23541__auto__);

(statearr_29346[(1)] = (1));

return statearr_29346;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23541__auto____1 = (function (state_29343){
while(true){
var ret_value__23542__auto__ = (function (){try{while(true){
var result__23543__auto__ = switch__23540__auto__.call(null,state_29343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23543__auto__;
}
break;
}
}catch (e29347){if((e29347 instanceof Object)){
var ex__23544__auto__ = e29347;
var statearr_29348_29350 = state_29343;
(statearr_29348_29350[(5)] = ex__23544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29351 = state_29343;
state_29343 = G__29351;
continue;
} else {
return ret_value__23542__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23541__auto__ = function(state_29343){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23541__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23541__auto____1.call(this,state_29343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23541__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23541__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23541__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23541__auto__;
})()
;})(switch__23540__auto__,c__23635__auto__,figwheel_version,temp__5735__auto__))
})();
var state__23637__auto__ = (function (){var statearr_29349 = f__23636__auto__.call(null);
(statearr_29349[(6)] = c__23635__auto__);

return statearr_29349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23637__auto__);
});})(c__23635__auto__,figwheel_version,temp__5735__auto__))
);

return c__23635__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__29352){
var map__29353 = p__29352;
var map__29353__$1 = (((((!((map__29353 == null))))?(((((map__29353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29353):map__29353);
var file = cljs.core.get.call(null,map__29353__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__29353__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__29353__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__29355 = "";
var G__29355__$1 = (cljs.core.truth_(file)?[G__29355,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__29355);
var G__29355__$2 = (cljs.core.truth_(line)?[G__29355__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__29355__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__29355__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__29355__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29356){
var map__29357 = p__29356;
var map__29357__$1 = (((((!((map__29357 == null))))?(((((map__29357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29357):map__29357);
var ed = map__29357__$1;
var exception_data = cljs.core.get.call(null,map__29357__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29357__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_29360 = (function (){var G__29359 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29359)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__29359;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_29360);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29361){
var map__29362 = p__29361;
var map__29362__$1 = (((((!((map__29362 == null))))?(((((map__29362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29362):map__29362);
var w = map__29362__$1;
var message = cljs.core.get.call(null,map__29362__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__29364 = cljs.core.seq.call(null,plugins);
var chunk__29365 = null;
var count__29366 = (0);
var i__29367 = (0);
while(true){
if((i__29367 < count__29366)){
var vec__29374 = cljs.core._nth.call(null,chunk__29365,i__29367);
var k = cljs.core.nth.call(null,vec__29374,(0),null);
var plugin = cljs.core.nth.call(null,vec__29374,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29380 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29364,chunk__29365,count__29366,i__29367,pl_29380,vec__29374,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29380.call(null,msg_hist);
});})(seq__29364,chunk__29365,count__29366,i__29367,pl_29380,vec__29374,k,plugin))
);
} else {
}


var G__29381 = seq__29364;
var G__29382 = chunk__29365;
var G__29383 = count__29366;
var G__29384 = (i__29367 + (1));
seq__29364 = G__29381;
chunk__29365 = G__29382;
count__29366 = G__29383;
i__29367 = G__29384;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__29364);
if(temp__5735__auto__){
var seq__29364__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29364__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29364__$1);
var G__29385 = cljs.core.chunk_rest.call(null,seq__29364__$1);
var G__29386 = c__4550__auto__;
var G__29387 = cljs.core.count.call(null,c__4550__auto__);
var G__29388 = (0);
seq__29364 = G__29385;
chunk__29365 = G__29386;
count__29366 = G__29387;
i__29367 = G__29388;
continue;
} else {
var vec__29377 = cljs.core.first.call(null,seq__29364__$1);
var k = cljs.core.nth.call(null,vec__29377,(0),null);
var plugin = cljs.core.nth.call(null,vec__29377,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29389 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29364,chunk__29365,count__29366,i__29367,pl_29389,vec__29377,k,plugin,seq__29364__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29389.call(null,msg_hist);
});})(seq__29364,chunk__29365,count__29366,i__29367,pl_29389,vec__29377,k,plugin,seq__29364__$1,temp__5735__auto__))
);
} else {
}


var G__29390 = cljs.core.next.call(null,seq__29364__$1);
var G__29391 = null;
var G__29392 = (0);
var G__29393 = (0);
seq__29364 = G__29390;
chunk__29365 = G__29391;
count__29366 = G__29392;
i__29367 = G__29393;
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
var G__29395 = arguments.length;
switch (G__29395) {
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

var seq__29396_29401 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__29397_29402 = null;
var count__29398_29403 = (0);
var i__29399_29404 = (0);
while(true){
if((i__29399_29404 < count__29398_29403)){
var msg_29405 = cljs.core._nth.call(null,chunk__29397_29402,i__29399_29404);
figwheel.client.socket.handle_incoming_message.call(null,msg_29405);


var G__29406 = seq__29396_29401;
var G__29407 = chunk__29397_29402;
var G__29408 = count__29398_29403;
var G__29409 = (i__29399_29404 + (1));
seq__29396_29401 = G__29406;
chunk__29397_29402 = G__29407;
count__29398_29403 = G__29408;
i__29399_29404 = G__29409;
continue;
} else {
var temp__5735__auto___29410 = cljs.core.seq.call(null,seq__29396_29401);
if(temp__5735__auto___29410){
var seq__29396_29411__$1 = temp__5735__auto___29410;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29396_29411__$1)){
var c__4550__auto___29412 = cljs.core.chunk_first.call(null,seq__29396_29411__$1);
var G__29413 = cljs.core.chunk_rest.call(null,seq__29396_29411__$1);
var G__29414 = c__4550__auto___29412;
var G__29415 = cljs.core.count.call(null,c__4550__auto___29412);
var G__29416 = (0);
seq__29396_29401 = G__29413;
chunk__29397_29402 = G__29414;
count__29398_29403 = G__29415;
i__29399_29404 = G__29416;
continue;
} else {
var msg_29417 = cljs.core.first.call(null,seq__29396_29411__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_29417);


var G__29418 = cljs.core.next.call(null,seq__29396_29411__$1);
var G__29419 = null;
var G__29420 = (0);
var G__29421 = (0);
seq__29396_29401 = G__29418;
chunk__29397_29402 = G__29419;
count__29398_29403 = G__29420;
i__29399_29404 = G__29421;
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
var len__4730__auto___29426 = arguments.length;
var i__4731__auto___29427 = (0);
while(true){
if((i__4731__auto___29427 < len__4730__auto___29426)){
args__4736__auto__.push((arguments[i__4731__auto___29427]));

var G__29428 = (i__4731__auto___29427 + (1));
i__4731__auto___29427 = G__29428;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29423){
var map__29424 = p__29423;
var map__29424__$1 = (((((!((map__29424 == null))))?(((((map__29424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29424):map__29424);
var opts = map__29424__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29422){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29422));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e29429){if((e29429 instanceof Error)){
var e = e29429;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e29429;

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
return (function (p__29430){
var map__29431 = p__29430;
var map__29431__$1 = (((((!((map__29431 == null))))?(((((map__29431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29431.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29431):map__29431);
var msg_name = cljs.core.get.call(null,map__29431__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1704617303933
