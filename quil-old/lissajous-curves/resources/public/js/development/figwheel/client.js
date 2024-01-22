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
}catch (e28696){if((e28696 instanceof Error)){
var e = e28696;
return "Error: Unable to stringify";
} else {
throw e28696;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__28699 = arguments.length;
switch (G__28699) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__28697_SHARP_){
if(typeof p1__28697_SHARP_ === 'string'){
return p1__28697_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__28697_SHARP_);
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
var len__4730__auto___28702 = arguments.length;
var i__4731__auto___28703 = (0);
while(true){
if((i__4731__auto___28703 < len__4730__auto___28702)){
args__4736__auto__.push((arguments[i__4731__auto___28703]));

var G__28704 = (i__4731__auto___28703 + (1));
i__4731__auto___28703 = G__28704;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq28701){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28701));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___28706 = arguments.length;
var i__4731__auto___28707 = (0);
while(true){
if((i__4731__auto___28707 < len__4730__auto___28706)){
args__4736__auto__.push((arguments[i__4731__auto___28707]));

var G__28708 = (i__4731__auto___28707 + (1));
i__4731__auto___28707 = G__28708;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq28705){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28705));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28709){
var map__28710 = p__28709;
var map__28710__$1 = (((((!((map__28710 == null))))?(((((map__28710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28710):map__28710);
var message = cljs.core.get.call(null,map__28710__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__28710__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__23368__auto___28789 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23368__auto___28789,ch){
return (function (){
var f__23369__auto__ = (function (){var switch__23273__auto__ = ((function (c__23368__auto___28789,ch){
return (function (state_28761){
var state_val_28762 = (state_28761[(1)]);
if((state_val_28762 === (7))){
var inst_28757 = (state_28761[(2)]);
var state_28761__$1 = state_28761;
var statearr_28763_28790 = state_28761__$1;
(statearr_28763_28790[(2)] = inst_28757);

(statearr_28763_28790[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28762 === (1))){
var state_28761__$1 = state_28761;
var statearr_28764_28791 = state_28761__$1;
(statearr_28764_28791[(2)] = null);

(statearr_28764_28791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28762 === (4))){
var inst_28714 = (state_28761[(7)]);
var inst_28714__$1 = (state_28761[(2)]);
var state_28761__$1 = (function (){var statearr_28765 = state_28761;
(statearr_28765[(7)] = inst_28714__$1);

return statearr_28765;
})();
if(cljs.core.truth_(inst_28714__$1)){
var statearr_28766_28792 = state_28761__$1;
(statearr_28766_28792[(1)] = (5));

} else {
var statearr_28767_28793 = state_28761__$1;
(statearr_28767_28793[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28762 === (15))){
var inst_28721 = (state_28761[(8)]);
var inst_28736 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28721);
var inst_28737 = cljs.core.first.call(null,inst_28736);
var inst_28738 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28737);
var inst_28739 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28738)].join('');
var inst_28740 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_28739);
var state_28761__$1 = state_28761;
var statearr_28768_28794 = state_28761__$1;
(statearr_28768_28794[(2)] = inst_28740);

(statearr_28768_28794[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28762 === (13))){
var inst_28745 = (state_28761[(2)]);
var state_28761__$1 = state_28761;
var statearr_28769_28795 = state_28761__$1;
(statearr_28769_28795[(2)] = inst_28745);

(statearr_28769_28795[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28762 === (6))){
var state_28761__$1 = state_28761;
var statearr_28770_28796 = state_28761__$1;
(statearr_28770_28796[(2)] = null);

(statearr_28770_28796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28762 === (17))){
var inst_28743 = (state_28761[(2)]);
var state_28761__$1 = state_28761;
var statearr_28771_28797 = state_28761__$1;
(statearr_28771_28797[(2)] = inst_28743);

(statearr_28771_28797[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28762 === (3))){
var inst_28759 = (state_28761[(2)]);
var state_28761__$1 = state_28761;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28761__$1,inst_28759);
} else {
if((state_val_28762 === (12))){
var inst_28720 = (state_28761[(9)]);
var inst_28734 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28720,opts);
var state_28761__$1 = state_28761;
if(inst_28734){
var statearr_28772_28798 = state_28761__$1;
(statearr_28772_28798[(1)] = (15));

} else {
var statearr_28773_28799 = state_28761__$1;
(statearr_28773_28799[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28762 === (2))){
var state_28761__$1 = state_28761;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28761__$1,(4),ch);
} else {
if((state_val_28762 === (11))){
var inst_28721 = (state_28761[(8)]);
var inst_28726 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28727 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28721);
var inst_28728 = cljs.core.async.timeout.call(null,(1000));
var inst_28729 = [inst_28727,inst_28728];
var inst_28730 = (new cljs.core.PersistentVector(null,2,(5),inst_28726,inst_28729,null));
var state_28761__$1 = state_28761;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28761__$1,(14),inst_28730);
} else {
if((state_val_28762 === (9))){
var inst_28721 = (state_28761[(8)]);
var inst_28747 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_28748 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28721);
var inst_28749 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28748);
var inst_28750 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28749)].join('');
var inst_28751 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_28750);
var state_28761__$1 = (function (){var statearr_28774 = state_28761;
(statearr_28774[(10)] = inst_28747);

return statearr_28774;
})();
var statearr_28775_28800 = state_28761__$1;
(statearr_28775_28800[(2)] = inst_28751);

(statearr_28775_28800[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28762 === (5))){
var inst_28714 = (state_28761[(7)]);
var inst_28716 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28717 = (new cljs.core.PersistentArrayMap(null,2,inst_28716,null));
var inst_28718 = (new cljs.core.PersistentHashSet(null,inst_28717,null));
var inst_28719 = figwheel.client.focus_msgs.call(null,inst_28718,inst_28714);
var inst_28720 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28719);
var inst_28721 = cljs.core.first.call(null,inst_28719);
var inst_28722 = figwheel.client.autoload_QMARK_.call(null);
var state_28761__$1 = (function (){var statearr_28776 = state_28761;
(statearr_28776[(8)] = inst_28721);

(statearr_28776[(9)] = inst_28720);

return statearr_28776;
})();
if(cljs.core.truth_(inst_28722)){
var statearr_28777_28801 = state_28761__$1;
(statearr_28777_28801[(1)] = (8));

} else {
var statearr_28778_28802 = state_28761__$1;
(statearr_28778_28802[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28762 === (14))){
var inst_28732 = (state_28761[(2)]);
var state_28761__$1 = state_28761;
var statearr_28779_28803 = state_28761__$1;
(statearr_28779_28803[(2)] = inst_28732);

(statearr_28779_28803[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28762 === (16))){
var state_28761__$1 = state_28761;
var statearr_28780_28804 = state_28761__$1;
(statearr_28780_28804[(2)] = null);

(statearr_28780_28804[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28762 === (10))){
var inst_28753 = (state_28761[(2)]);
var state_28761__$1 = (function (){var statearr_28781 = state_28761;
(statearr_28781[(11)] = inst_28753);

return statearr_28781;
})();
var statearr_28782_28805 = state_28761__$1;
(statearr_28782_28805[(2)] = null);

(statearr_28782_28805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28762 === (8))){
var inst_28720 = (state_28761[(9)]);
var inst_28724 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28720,opts);
var state_28761__$1 = state_28761;
if(cljs.core.truth_(inst_28724)){
var statearr_28783_28806 = state_28761__$1;
(statearr_28783_28806[(1)] = (11));

} else {
var statearr_28784_28807 = state_28761__$1;
(statearr_28784_28807[(1)] = (12));

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
});})(c__23368__auto___28789,ch))
;
return ((function (switch__23273__auto__,c__23368__auto___28789,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23274__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23274__auto____0 = (function (){
var statearr_28785 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28785[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23274__auto__);

(statearr_28785[(1)] = (1));

return statearr_28785;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23274__auto____1 = (function (state_28761){
while(true){
var ret_value__23275__auto__ = (function (){try{while(true){
var result__23276__auto__ = switch__23273__auto__.call(null,state_28761);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23276__auto__;
}
break;
}
}catch (e28786){if((e28786 instanceof Object)){
var ex__23277__auto__ = e28786;
var statearr_28787_28808 = state_28761;
(statearr_28787_28808[(5)] = ex__23277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28761);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28809 = state_28761;
state_28761 = G__28809;
continue;
} else {
return ret_value__23275__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23274__auto__ = function(state_28761){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23274__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23274__auto____1.call(this,state_28761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23274__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23274__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23274__auto__;
})()
;})(switch__23273__auto__,c__23368__auto___28789,ch))
})();
var state__23370__auto__ = (function (){var statearr_28788 = f__23369__auto__.call(null);
(statearr_28788[(6)] = c__23368__auto___28789);

return statearr_28788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23370__auto__);
});})(c__23368__auto___28789,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28810_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28810_SHARP_));
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
var base_path_28816 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28816){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28812 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28813 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28814 = true;
var _STAR_print_fn_STAR__temp_val__28815 = ((function (_STAR_print_newline_STAR__orig_val__28812,_STAR_print_fn_STAR__orig_val__28813,_STAR_print_newline_STAR__temp_val__28814,sb,base_path_28816){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__28812,_STAR_print_fn_STAR__orig_val__28813,_STAR_print_newline_STAR__temp_val__28814,sb,base_path_28816))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28814;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28815;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28813;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28812;
}}catch (e28811){if((e28811 instanceof Error)){
var e = e28811;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28816], null));
} else {
var e = e28811;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28816))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28817){
var map__28818 = p__28817;
var map__28818__$1 = (((((!((map__28818 == null))))?(((((map__28818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28818):map__28818);
var opts = map__28818__$1;
var build_id = cljs.core.get.call(null,map__28818__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28818,map__28818__$1,opts,build_id){
return (function (p__28820){
var vec__28821 = p__28820;
var seq__28822 = cljs.core.seq.call(null,vec__28821);
var first__28823 = cljs.core.first.call(null,seq__28822);
var seq__28822__$1 = cljs.core.next.call(null,seq__28822);
var map__28824 = first__28823;
var map__28824__$1 = (((((!((map__28824 == null))))?(((((map__28824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28824):map__28824);
var msg = map__28824__$1;
var msg_name = cljs.core.get.call(null,map__28824__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__28822__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__28821,seq__28822,first__28823,seq__28822__$1,map__28824,map__28824__$1,msg,msg_name,_,map__28818,map__28818__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28821,seq__28822,first__28823,seq__28822__$1,map__28824,map__28824__$1,msg,msg_name,_,map__28818,map__28818__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28818,map__28818__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28826){
var vec__28827 = p__28826;
var seq__28828 = cljs.core.seq.call(null,vec__28827);
var first__28829 = cljs.core.first.call(null,seq__28828);
var seq__28828__$1 = cljs.core.next.call(null,seq__28828);
var map__28830 = first__28829;
var map__28830__$1 = (((((!((map__28830 == null))))?(((((map__28830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28830):map__28830);
var msg = map__28830__$1;
var msg_name = cljs.core.get.call(null,map__28830__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__28828__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28832){
var map__28833 = p__28832;
var map__28833__$1 = (((((!((map__28833 == null))))?(((((map__28833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28833):map__28833);
var on_compile_warning = cljs.core.get.call(null,map__28833__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__28833__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__28833,map__28833__$1,on_compile_warning,on_compile_fail){
return (function (p__28835){
var vec__28836 = p__28835;
var seq__28837 = cljs.core.seq.call(null,vec__28836);
var first__28838 = cljs.core.first.call(null,seq__28837);
var seq__28837__$1 = cljs.core.next.call(null,seq__28837);
var map__28839 = first__28838;
var map__28839__$1 = (((((!((map__28839 == null))))?(((((map__28839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28839):map__28839);
var msg = map__28839__$1;
var msg_name = cljs.core.get.call(null,map__28839__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__28837__$1;
var pred__28841 = cljs.core._EQ_;
var expr__28842 = msg_name;
if(cljs.core.truth_(pred__28841.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28842))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28841.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28842))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28833,map__28833__$1,on_compile_warning,on_compile_fail))
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
var c__23368__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23368__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23369__auto__ = (function (){var switch__23273__auto__ = ((function (c__23368__auto__,msg_hist,msg_names,msg){
return (function (state_28931){
var state_val_28932 = (state_28931[(1)]);
if((state_val_28932 === (7))){
var inst_28851 = (state_28931[(2)]);
var state_28931__$1 = state_28931;
if(cljs.core.truth_(inst_28851)){
var statearr_28933_28980 = state_28931__$1;
(statearr_28933_28980[(1)] = (8));

} else {
var statearr_28934_28981 = state_28931__$1;
(statearr_28934_28981[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28932 === (20))){
var inst_28925 = (state_28931[(2)]);
var state_28931__$1 = state_28931;
var statearr_28935_28982 = state_28931__$1;
(statearr_28935_28982[(2)] = inst_28925);

(statearr_28935_28982[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28932 === (27))){
var inst_28921 = (state_28931[(2)]);
var state_28931__$1 = state_28931;
var statearr_28936_28983 = state_28931__$1;
(statearr_28936_28983[(2)] = inst_28921);

(statearr_28936_28983[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28932 === (1))){
var inst_28844 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28931__$1 = state_28931;
if(cljs.core.truth_(inst_28844)){
var statearr_28937_28984 = state_28931__$1;
(statearr_28937_28984[(1)] = (2));

} else {
var statearr_28938_28985 = state_28931__$1;
(statearr_28938_28985[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28932 === (24))){
var inst_28923 = (state_28931[(2)]);
var state_28931__$1 = state_28931;
var statearr_28939_28986 = state_28931__$1;
(statearr_28939_28986[(2)] = inst_28923);

(statearr_28939_28986[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28932 === (4))){
var inst_28929 = (state_28931[(2)]);
var state_28931__$1 = state_28931;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28931__$1,inst_28929);
} else {
if((state_val_28932 === (15))){
var inst_28927 = (state_28931[(2)]);
var state_28931__$1 = state_28931;
var statearr_28940_28987 = state_28931__$1;
(statearr_28940_28987[(2)] = inst_28927);

(statearr_28940_28987[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28932 === (21))){
var inst_28880 = (state_28931[(2)]);
var inst_28881 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28882 = figwheel.client.auto_jump_to_error.call(null,opts,inst_28881);
var state_28931__$1 = (function (){var statearr_28941 = state_28931;
(statearr_28941[(7)] = inst_28880);

return statearr_28941;
})();
var statearr_28942_28988 = state_28931__$1;
(statearr_28942_28988[(2)] = inst_28882);

(statearr_28942_28988[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28932 === (31))){
var inst_28910 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28931__$1 = state_28931;
if(inst_28910){
var statearr_28943_28989 = state_28931__$1;
(statearr_28943_28989[(1)] = (34));

} else {
var statearr_28944_28990 = state_28931__$1;
(statearr_28944_28990[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28932 === (32))){
var inst_28919 = (state_28931[(2)]);
var state_28931__$1 = state_28931;
var statearr_28945_28991 = state_28931__$1;
(statearr_28945_28991[(2)] = inst_28919);

(statearr_28945_28991[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28932 === (33))){
var inst_28906 = (state_28931[(2)]);
var inst_28907 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28908 = figwheel.client.auto_jump_to_error.call(null,opts,inst_28907);
var state_28931__$1 = (function (){var statearr_28946 = state_28931;
(statearr_28946[(8)] = inst_28906);

return statearr_28946;
})();
var statearr_28947_28992 = state_28931__$1;
(statearr_28947_28992[(2)] = inst_28908);

(statearr_28947_28992[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28932 === (13))){
var inst_28865 = figwheel.client.heads_up.clear.call(null);
var state_28931__$1 = state_28931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28931__$1,(16),inst_28865);
} else {
if((state_val_28932 === (22))){
var inst_28886 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28887 = figwheel.client.heads_up.append_warning_message.call(null,inst_28886);
var state_28931__$1 = state_28931;
var statearr_28948_28993 = state_28931__$1;
(statearr_28948_28993[(2)] = inst_28887);

(statearr_28948_28993[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28932 === (36))){
var inst_28917 = (state_28931[(2)]);
var state_28931__$1 = state_28931;
var statearr_28949_28994 = state_28931__$1;
(statearr_28949_28994[(2)] = inst_28917);

(statearr_28949_28994[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28932 === (29))){
var inst_28897 = (state_28931[(2)]);
var inst_28898 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28899 = figwheel.client.auto_jump_to_error.call(null,opts,inst_28898);
var state_28931__$1 = (function (){var statearr_28950 = state_28931;
(statearr_28950[(9)] = inst_28897);

return statearr_28950;
})();
var statearr_28951_28995 = state_28931__$1;
(statearr_28951_28995[(2)] = inst_28899);

(statearr_28951_28995[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28932 === (6))){
var inst_28846 = (state_28931[(10)]);
var state_28931__$1 = state_28931;
var statearr_28952_28996 = state_28931__$1;
(statearr_28952_28996[(2)] = inst_28846);

(statearr_28952_28996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28932 === (28))){
var inst_28893 = (state_28931[(2)]);
var inst_28894 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28895 = figwheel.client.heads_up.display_warning.call(null,inst_28894);
var state_28931__$1 = (function (){var statearr_28953 = state_28931;
(statearr_28953[(11)] = inst_28893);

return statearr_28953;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28931__$1,(29),inst_28895);
} else {
if((state_val_28932 === (25))){
var inst_28891 = figwheel.client.heads_up.clear.call(null);
var state_28931__$1 = state_28931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28931__$1,(28),inst_28891);
} else {
if((state_val_28932 === (34))){
var inst_28912 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28931__$1 = state_28931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28931__$1,(37),inst_28912);
} else {
if((state_val_28932 === (17))){
var inst_28871 = (state_28931[(2)]);
var inst_28872 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28873 = figwheel.client.auto_jump_to_error.call(null,opts,inst_28872);
var state_28931__$1 = (function (){var statearr_28954 = state_28931;
(statearr_28954[(12)] = inst_28871);

return statearr_28954;
})();
var statearr_28955_28997 = state_28931__$1;
(statearr_28955_28997[(2)] = inst_28873);

(statearr_28955_28997[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28932 === (3))){
var inst_28863 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28931__$1 = state_28931;
if(inst_28863){
var statearr_28956_28998 = state_28931__$1;
(statearr_28956_28998[(1)] = (13));

} else {
var statearr_28957_28999 = state_28931__$1;
(statearr_28957_28999[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28932 === (12))){
var inst_28859 = (state_28931[(2)]);
var state_28931__$1 = state_28931;
var statearr_28958_29000 = state_28931__$1;
(statearr_28958_29000[(2)] = inst_28859);

(statearr_28958_29000[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28932 === (2))){
var inst_28846 = (state_28931[(10)]);
var inst_28846__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_28931__$1 = (function (){var statearr_28959 = state_28931;
(statearr_28959[(10)] = inst_28846__$1);

return statearr_28959;
})();
if(cljs.core.truth_(inst_28846__$1)){
var statearr_28960_29001 = state_28931__$1;
(statearr_28960_29001[(1)] = (5));

} else {
var statearr_28961_29002 = state_28931__$1;
(statearr_28961_29002[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28932 === (23))){
var inst_28889 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28931__$1 = state_28931;
if(inst_28889){
var statearr_28962_29003 = state_28931__$1;
(statearr_28962_29003[(1)] = (25));

} else {
var statearr_28963_29004 = state_28931__$1;
(statearr_28963_29004[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28932 === (35))){
var state_28931__$1 = state_28931;
var statearr_28964_29005 = state_28931__$1;
(statearr_28964_29005[(2)] = null);

(statearr_28964_29005[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28932 === (19))){
var inst_28884 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28931__$1 = state_28931;
if(inst_28884){
var statearr_28965_29006 = state_28931__$1;
(statearr_28965_29006[(1)] = (22));

} else {
var statearr_28966_29007 = state_28931__$1;
(statearr_28966_29007[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28932 === (11))){
var inst_28855 = (state_28931[(2)]);
var state_28931__$1 = state_28931;
var statearr_28967_29008 = state_28931__$1;
(statearr_28967_29008[(2)] = inst_28855);

(statearr_28967_29008[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28932 === (9))){
var inst_28857 = figwheel.client.heads_up.clear.call(null);
var state_28931__$1 = state_28931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28931__$1,(12),inst_28857);
} else {
if((state_val_28932 === (5))){
var inst_28848 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28931__$1 = state_28931;
var statearr_28968_29009 = state_28931__$1;
(statearr_28968_29009[(2)] = inst_28848);

(statearr_28968_29009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28932 === (14))){
var inst_28875 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28931__$1 = state_28931;
if(inst_28875){
var statearr_28969_29010 = state_28931__$1;
(statearr_28969_29010[(1)] = (18));

} else {
var statearr_28970_29011 = state_28931__$1;
(statearr_28970_29011[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28932 === (26))){
var inst_28901 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28931__$1 = state_28931;
if(inst_28901){
var statearr_28971_29012 = state_28931__$1;
(statearr_28971_29012[(1)] = (30));

} else {
var statearr_28972_29013 = state_28931__$1;
(statearr_28972_29013[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28932 === (16))){
var inst_28867 = (state_28931[(2)]);
var inst_28868 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28869 = figwheel.client.heads_up.display_exception.call(null,inst_28868);
var state_28931__$1 = (function (){var statearr_28973 = state_28931;
(statearr_28973[(13)] = inst_28867);

return statearr_28973;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28931__$1,(17),inst_28869);
} else {
if((state_val_28932 === (30))){
var inst_28903 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28904 = figwheel.client.heads_up.display_warning.call(null,inst_28903);
var state_28931__$1 = state_28931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28931__$1,(33),inst_28904);
} else {
if((state_val_28932 === (10))){
var inst_28861 = (state_28931[(2)]);
var state_28931__$1 = state_28931;
var statearr_28974_29014 = state_28931__$1;
(statearr_28974_29014[(2)] = inst_28861);

(statearr_28974_29014[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28932 === (18))){
var inst_28877 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28878 = figwheel.client.heads_up.display_exception.call(null,inst_28877);
var state_28931__$1 = state_28931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28931__$1,(21),inst_28878);
} else {
if((state_val_28932 === (37))){
var inst_28914 = (state_28931[(2)]);
var state_28931__$1 = state_28931;
var statearr_28975_29015 = state_28931__$1;
(statearr_28975_29015[(2)] = inst_28914);

(statearr_28975_29015[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28932 === (8))){
var inst_28853 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28931__$1 = state_28931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28931__$1,(11),inst_28853);
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
});})(c__23368__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23273__auto__,c__23368__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23274__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23274__auto____0 = (function (){
var statearr_28976 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28976[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23274__auto__);

(statearr_28976[(1)] = (1));

return statearr_28976;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23274__auto____1 = (function (state_28931){
while(true){
var ret_value__23275__auto__ = (function (){try{while(true){
var result__23276__auto__ = switch__23273__auto__.call(null,state_28931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23276__auto__;
}
break;
}
}catch (e28977){if((e28977 instanceof Object)){
var ex__23277__auto__ = e28977;
var statearr_28978_29016 = state_28931;
(statearr_28978_29016[(5)] = ex__23277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29017 = state_28931;
state_28931 = G__29017;
continue;
} else {
return ret_value__23275__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23274__auto__ = function(state_28931){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23274__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23274__auto____1.call(this,state_28931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23274__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23274__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23274__auto__;
})()
;})(switch__23273__auto__,c__23368__auto__,msg_hist,msg_names,msg))
})();
var state__23370__auto__ = (function (){var statearr_28979 = f__23369__auto__.call(null);
(statearr_28979[(6)] = c__23368__auto__);

return statearr_28979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23370__auto__);
});})(c__23368__auto__,msg_hist,msg_names,msg))
);

return c__23368__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23368__auto___29046 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23368__auto___29046,ch){
return (function (){
var f__23369__auto__ = (function (){var switch__23273__auto__ = ((function (c__23368__auto___29046,ch){
return (function (state_29032){
var state_val_29033 = (state_29032[(1)]);
if((state_val_29033 === (1))){
var state_29032__$1 = state_29032;
var statearr_29034_29047 = state_29032__$1;
(statearr_29034_29047[(2)] = null);

(statearr_29034_29047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29033 === (2))){
var state_29032__$1 = state_29032;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29032__$1,(4),ch);
} else {
if((state_val_29033 === (3))){
var inst_29030 = (state_29032[(2)]);
var state_29032__$1 = state_29032;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29032__$1,inst_29030);
} else {
if((state_val_29033 === (4))){
var inst_29020 = (state_29032[(7)]);
var inst_29020__$1 = (state_29032[(2)]);
var state_29032__$1 = (function (){var statearr_29035 = state_29032;
(statearr_29035[(7)] = inst_29020__$1);

return statearr_29035;
})();
if(cljs.core.truth_(inst_29020__$1)){
var statearr_29036_29048 = state_29032__$1;
(statearr_29036_29048[(1)] = (5));

} else {
var statearr_29037_29049 = state_29032__$1;
(statearr_29037_29049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29033 === (5))){
var inst_29020 = (state_29032[(7)]);
var inst_29022 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29020);
var state_29032__$1 = state_29032;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29032__$1,(8),inst_29022);
} else {
if((state_val_29033 === (6))){
var state_29032__$1 = state_29032;
var statearr_29038_29050 = state_29032__$1;
(statearr_29038_29050[(2)] = null);

(statearr_29038_29050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29033 === (7))){
var inst_29028 = (state_29032[(2)]);
var state_29032__$1 = state_29032;
var statearr_29039_29051 = state_29032__$1;
(statearr_29039_29051[(2)] = inst_29028);

(statearr_29039_29051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29033 === (8))){
var inst_29024 = (state_29032[(2)]);
var state_29032__$1 = (function (){var statearr_29040 = state_29032;
(statearr_29040[(8)] = inst_29024);

return statearr_29040;
})();
var statearr_29041_29052 = state_29032__$1;
(statearr_29041_29052[(2)] = null);

(statearr_29041_29052[(1)] = (2));


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
});})(c__23368__auto___29046,ch))
;
return ((function (switch__23273__auto__,c__23368__auto___29046,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23274__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23274__auto____0 = (function (){
var statearr_29042 = [null,null,null,null,null,null,null,null,null];
(statearr_29042[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23274__auto__);

(statearr_29042[(1)] = (1));

return statearr_29042;
});
var figwheel$client$heads_up_plugin_$_state_machine__23274__auto____1 = (function (state_29032){
while(true){
var ret_value__23275__auto__ = (function (){try{while(true){
var result__23276__auto__ = switch__23273__auto__.call(null,state_29032);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23276__auto__;
}
break;
}
}catch (e29043){if((e29043 instanceof Object)){
var ex__23277__auto__ = e29043;
var statearr_29044_29053 = state_29032;
(statearr_29044_29053[(5)] = ex__23277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29032);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29054 = state_29032;
state_29032 = G__29054;
continue;
} else {
return ret_value__23275__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23274__auto__ = function(state_29032){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23274__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23274__auto____1.call(this,state_29032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23274__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23274__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23274__auto__;
})()
;})(switch__23273__auto__,c__23368__auto___29046,ch))
})();
var state__23370__auto__ = (function (){var statearr_29045 = f__23369__auto__.call(null);
(statearr_29045[(6)] = c__23368__auto___29046);

return statearr_29045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23370__auto__);
});})(c__23368__auto___29046,ch))
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
var c__23368__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23368__auto__){
return (function (){
var f__23369__auto__ = (function (){var switch__23273__auto__ = ((function (c__23368__auto__){
return (function (state_29060){
var state_val_29061 = (state_29060[(1)]);
if((state_val_29061 === (1))){
var inst_29055 = cljs.core.async.timeout.call(null,(3000));
var state_29060__$1 = state_29060;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29060__$1,(2),inst_29055);
} else {
if((state_val_29061 === (2))){
var inst_29057 = (state_29060[(2)]);
var inst_29058 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29060__$1 = (function (){var statearr_29062 = state_29060;
(statearr_29062[(7)] = inst_29057);

return statearr_29062;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29060__$1,inst_29058);
} else {
return null;
}
}
});})(c__23368__auto__))
;
return ((function (switch__23273__auto__,c__23368__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23274__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23274__auto____0 = (function (){
var statearr_29063 = [null,null,null,null,null,null,null,null];
(statearr_29063[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23274__auto__);

(statearr_29063[(1)] = (1));

return statearr_29063;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23274__auto____1 = (function (state_29060){
while(true){
var ret_value__23275__auto__ = (function (){try{while(true){
var result__23276__auto__ = switch__23273__auto__.call(null,state_29060);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23276__auto__;
}
break;
}
}catch (e29064){if((e29064 instanceof Object)){
var ex__23277__auto__ = e29064;
var statearr_29065_29067 = state_29060;
(statearr_29065_29067[(5)] = ex__23277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29060);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29068 = state_29060;
state_29060 = G__29068;
continue;
} else {
return ret_value__23275__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23274__auto__ = function(state_29060){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23274__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23274__auto____1.call(this,state_29060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23274__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23274__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23274__auto__;
})()
;})(switch__23273__auto__,c__23368__auto__))
})();
var state__23370__auto__ = (function (){var statearr_29066 = f__23369__auto__.call(null);
(statearr_29066[(6)] = c__23368__auto__);

return statearr_29066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23370__auto__);
});})(c__23368__auto__))
);

return c__23368__auto__;
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
var c__23368__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23368__auto__,figwheel_version,temp__5735__auto__){
return (function (){
var f__23369__auto__ = (function (){var switch__23273__auto__ = ((function (c__23368__auto__,figwheel_version,temp__5735__auto__){
return (function (state_29075){
var state_val_29076 = (state_29075[(1)]);
if((state_val_29076 === (1))){
var inst_29069 = cljs.core.async.timeout.call(null,(2000));
var state_29075__$1 = state_29075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29075__$1,(2),inst_29069);
} else {
if((state_val_29076 === (2))){
var inst_29071 = (state_29075[(2)]);
var inst_29072 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_29073 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_29072);
var state_29075__$1 = (function (){var statearr_29077 = state_29075;
(statearr_29077[(7)] = inst_29071);

return statearr_29077;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29075__$1,inst_29073);
} else {
return null;
}
}
});})(c__23368__auto__,figwheel_version,temp__5735__auto__))
;
return ((function (switch__23273__auto__,c__23368__auto__,figwheel_version,temp__5735__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23274__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23274__auto____0 = (function (){
var statearr_29078 = [null,null,null,null,null,null,null,null];
(statearr_29078[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23274__auto__);

(statearr_29078[(1)] = (1));

return statearr_29078;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23274__auto____1 = (function (state_29075){
while(true){
var ret_value__23275__auto__ = (function (){try{while(true){
var result__23276__auto__ = switch__23273__auto__.call(null,state_29075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23276__auto__;
}
break;
}
}catch (e29079){if((e29079 instanceof Object)){
var ex__23277__auto__ = e29079;
var statearr_29080_29082 = state_29075;
(statearr_29080_29082[(5)] = ex__23277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29079;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29083 = state_29075;
state_29075 = G__29083;
continue;
} else {
return ret_value__23275__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23274__auto__ = function(state_29075){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23274__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23274__auto____1.call(this,state_29075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23274__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23274__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23274__auto__;
})()
;})(switch__23273__auto__,c__23368__auto__,figwheel_version,temp__5735__auto__))
})();
var state__23370__auto__ = (function (){var statearr_29081 = f__23369__auto__.call(null);
(statearr_29081[(6)] = c__23368__auto__);

return statearr_29081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23370__auto__);
});})(c__23368__auto__,figwheel_version,temp__5735__auto__))
);

return c__23368__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__29084){
var map__29085 = p__29084;
var map__29085__$1 = (((((!((map__29085 == null))))?(((((map__29085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29085):map__29085);
var file = cljs.core.get.call(null,map__29085__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__29085__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__29085__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__29087 = "";
var G__29087__$1 = (cljs.core.truth_(file)?[G__29087,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__29087);
var G__29087__$2 = (cljs.core.truth_(line)?[G__29087__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__29087__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__29087__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__29087__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29088){
var map__29089 = p__29088;
var map__29089__$1 = (((((!((map__29089 == null))))?(((((map__29089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29089):map__29089);
var ed = map__29089__$1;
var exception_data = cljs.core.get.call(null,map__29089__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29089__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_29092 = (function (){var G__29091 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29091)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__29091;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_29092);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29093){
var map__29094 = p__29093;
var map__29094__$1 = (((((!((map__29094 == null))))?(((((map__29094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29094):map__29094);
var w = map__29094__$1;
var message = cljs.core.get.call(null,map__29094__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__29096 = cljs.core.seq.call(null,plugins);
var chunk__29097 = null;
var count__29098 = (0);
var i__29099 = (0);
while(true){
if((i__29099 < count__29098)){
var vec__29106 = cljs.core._nth.call(null,chunk__29097,i__29099);
var k = cljs.core.nth.call(null,vec__29106,(0),null);
var plugin = cljs.core.nth.call(null,vec__29106,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29112 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29096,chunk__29097,count__29098,i__29099,pl_29112,vec__29106,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29112.call(null,msg_hist);
});})(seq__29096,chunk__29097,count__29098,i__29099,pl_29112,vec__29106,k,plugin))
);
} else {
}


var G__29113 = seq__29096;
var G__29114 = chunk__29097;
var G__29115 = count__29098;
var G__29116 = (i__29099 + (1));
seq__29096 = G__29113;
chunk__29097 = G__29114;
count__29098 = G__29115;
i__29099 = G__29116;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__29096);
if(temp__5735__auto__){
var seq__29096__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29096__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29096__$1);
var G__29117 = cljs.core.chunk_rest.call(null,seq__29096__$1);
var G__29118 = c__4550__auto__;
var G__29119 = cljs.core.count.call(null,c__4550__auto__);
var G__29120 = (0);
seq__29096 = G__29117;
chunk__29097 = G__29118;
count__29098 = G__29119;
i__29099 = G__29120;
continue;
} else {
var vec__29109 = cljs.core.first.call(null,seq__29096__$1);
var k = cljs.core.nth.call(null,vec__29109,(0),null);
var plugin = cljs.core.nth.call(null,vec__29109,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29121 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29096,chunk__29097,count__29098,i__29099,pl_29121,vec__29109,k,plugin,seq__29096__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29121.call(null,msg_hist);
});})(seq__29096,chunk__29097,count__29098,i__29099,pl_29121,vec__29109,k,plugin,seq__29096__$1,temp__5735__auto__))
);
} else {
}


var G__29122 = cljs.core.next.call(null,seq__29096__$1);
var G__29123 = null;
var G__29124 = (0);
var G__29125 = (0);
seq__29096 = G__29122;
chunk__29097 = G__29123;
count__29098 = G__29124;
i__29099 = G__29125;
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
var G__29127 = arguments.length;
switch (G__29127) {
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

var seq__29128_29133 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__29129_29134 = null;
var count__29130_29135 = (0);
var i__29131_29136 = (0);
while(true){
if((i__29131_29136 < count__29130_29135)){
var msg_29137 = cljs.core._nth.call(null,chunk__29129_29134,i__29131_29136);
figwheel.client.socket.handle_incoming_message.call(null,msg_29137);


var G__29138 = seq__29128_29133;
var G__29139 = chunk__29129_29134;
var G__29140 = count__29130_29135;
var G__29141 = (i__29131_29136 + (1));
seq__29128_29133 = G__29138;
chunk__29129_29134 = G__29139;
count__29130_29135 = G__29140;
i__29131_29136 = G__29141;
continue;
} else {
var temp__5735__auto___29142 = cljs.core.seq.call(null,seq__29128_29133);
if(temp__5735__auto___29142){
var seq__29128_29143__$1 = temp__5735__auto___29142;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29128_29143__$1)){
var c__4550__auto___29144 = cljs.core.chunk_first.call(null,seq__29128_29143__$1);
var G__29145 = cljs.core.chunk_rest.call(null,seq__29128_29143__$1);
var G__29146 = c__4550__auto___29144;
var G__29147 = cljs.core.count.call(null,c__4550__auto___29144);
var G__29148 = (0);
seq__29128_29133 = G__29145;
chunk__29129_29134 = G__29146;
count__29130_29135 = G__29147;
i__29131_29136 = G__29148;
continue;
} else {
var msg_29149 = cljs.core.first.call(null,seq__29128_29143__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_29149);


var G__29150 = cljs.core.next.call(null,seq__29128_29143__$1);
var G__29151 = null;
var G__29152 = (0);
var G__29153 = (0);
seq__29128_29133 = G__29150;
chunk__29129_29134 = G__29151;
count__29130_29135 = G__29152;
i__29131_29136 = G__29153;
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
var len__4730__auto___29158 = arguments.length;
var i__4731__auto___29159 = (0);
while(true){
if((i__4731__auto___29159 < len__4730__auto___29158)){
args__4736__auto__.push((arguments[i__4731__auto___29159]));

var G__29160 = (i__4731__auto___29159 + (1));
i__4731__auto___29159 = G__29160;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29155){
var map__29156 = p__29155;
var map__29156__$1 = (((((!((map__29156 == null))))?(((((map__29156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29156):map__29156);
var opts = map__29156__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29154){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29154));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e29161){if((e29161 instanceof Error)){
var e = e29161;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e29161;

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
return (function (p__29162){
var map__29163 = p__29162;
var map__29163__$1 = (((((!((map__29163 == null))))?(((((map__29163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29163):map__29163);
var msg_name = cljs.core.get.call(null,map__29163__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1703259700015
