// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__23849 = arguments.length;
switch (G__23849) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23850 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23850 = (function (f,blockable,meta23851){
this.f = f;
this.blockable = blockable;
this.meta23851 = meta23851;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23850.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23852,meta23851__$1){
var self__ = this;
var _23852__$1 = this;
return (new cljs.core.async.t_cljs$core$async23850(self__.f,self__.blockable,meta23851__$1));
});

cljs.core.async.t_cljs$core$async23850.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23852){
var self__ = this;
var _23852__$1 = this;
return self__.meta23851;
});

cljs.core.async.t_cljs$core$async23850.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23850.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23850.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23850.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23850.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23851","meta23851",-1329624898,null)], null);
});

cljs.core.async.t_cljs$core$async23850.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23850.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23850";

cljs.core.async.t_cljs$core$async23850.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23850");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23850.
 */
cljs.core.async.__GT_t_cljs$core$async23850 = (function cljs$core$async$__GT_t_cljs$core$async23850(f__$1,blockable__$1,meta23851){
return (new cljs.core.async.t_cljs$core$async23850(f__$1,blockable__$1,meta23851));
});

}

return (new cljs.core.async.t_cljs$core$async23850(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__23856 = arguments.length;
switch (G__23856) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__23859 = arguments.length;
switch (G__23859) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__23862 = arguments.length;
switch (G__23862) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23864 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23864);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23864,ret){
return (function (){
return fn1.call(null,val_23864);
});})(val_23864,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__23866 = arguments.length;
switch (G__23866) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5733__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___23868 = n;
var x_23869 = (0);
while(true){
if((x_23869 < n__4607__auto___23868)){
(a[x_23869] = (0));

var G__23870 = (x_23869 + (1));
x_23869 = G__23870;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__23871 = (i + (1));
i = G__23871;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23872 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23872 = (function (flag,meta23873){
this.flag = flag;
this.meta23873 = meta23873;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23872.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23874,meta23873__$1){
var self__ = this;
var _23874__$1 = this;
return (new cljs.core.async.t_cljs$core$async23872(self__.flag,meta23873__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23872.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23874){
var self__ = this;
var _23874__$1 = this;
return self__.meta23873;
});})(flag))
;

cljs.core.async.t_cljs$core$async23872.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23872.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23872.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23872.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23872.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23873","meta23873",525088100,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23872.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23872.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23872";

cljs.core.async.t_cljs$core$async23872.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23872");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23872.
 */
cljs.core.async.__GT_t_cljs$core$async23872 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23872(flag__$1,meta23873){
return (new cljs.core.async.t_cljs$core$async23872(flag__$1,meta23873));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23872(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23875 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23875 = (function (flag,cb,meta23876){
this.flag = flag;
this.cb = cb;
this.meta23876 = meta23876;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23877,meta23876__$1){
var self__ = this;
var _23877__$1 = this;
return (new cljs.core.async.t_cljs$core$async23875(self__.flag,self__.cb,meta23876__$1));
});

cljs.core.async.t_cljs$core$async23875.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23877){
var self__ = this;
var _23877__$1 = this;
return self__.meta23876;
});

cljs.core.async.t_cljs$core$async23875.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23875.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23875.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23875.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23875.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23876","meta23876",1762778402,null)], null);
});

cljs.core.async.t_cljs$core$async23875.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23875.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23875";

cljs.core.async.t_cljs$core$async23875.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23875");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23875.
 */
cljs.core.async.__GT_t_cljs$core$async23875 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23875(flag__$1,cb__$1,meta23876){
return (new cljs.core.async.t_cljs$core$async23875(flag__$1,cb__$1,meta23876));
});

}

return (new cljs.core.async.t_cljs$core$async23875(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23878_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23878_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23879_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23879_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23880 = (i + (1));
i = G__23880;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23886 = arguments.length;
var i__4731__auto___23887 = (0);
while(true){
if((i__4731__auto___23887 < len__4730__auto___23886)){
args__4736__auto__.push((arguments[i__4731__auto___23887]));

var G__23888 = (i__4731__auto___23887 + (1));
i__4731__auto___23887 = G__23888;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23883){
var map__23884 = p__23883;
var map__23884__$1 = (((((!((map__23884 == null))))?(((((map__23884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23884):map__23884);
var opts = map__23884__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23881){
var G__23882 = cljs.core.first.call(null,seq23881);
var seq23881__$1 = cljs.core.next.call(null,seq23881);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23882,seq23881__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__23890 = arguments.length;
switch (G__23890) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23789__auto___23936 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23789__auto___23936){
return (function (){
var f__23790__auto__ = (function (){var switch__23694__auto__ = ((function (c__23789__auto___23936){
return (function (state_23914){
var state_val_23915 = (state_23914[(1)]);
if((state_val_23915 === (7))){
var inst_23910 = (state_23914[(2)]);
var state_23914__$1 = state_23914;
var statearr_23916_23937 = state_23914__$1;
(statearr_23916_23937[(2)] = inst_23910);

(statearr_23916_23937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23915 === (1))){
var state_23914__$1 = state_23914;
var statearr_23917_23938 = state_23914__$1;
(statearr_23917_23938[(2)] = null);

(statearr_23917_23938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23915 === (4))){
var inst_23893 = (state_23914[(7)]);
var inst_23893__$1 = (state_23914[(2)]);
var inst_23894 = (inst_23893__$1 == null);
var state_23914__$1 = (function (){var statearr_23918 = state_23914;
(statearr_23918[(7)] = inst_23893__$1);

return statearr_23918;
})();
if(cljs.core.truth_(inst_23894)){
var statearr_23919_23939 = state_23914__$1;
(statearr_23919_23939[(1)] = (5));

} else {
var statearr_23920_23940 = state_23914__$1;
(statearr_23920_23940[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23915 === (13))){
var state_23914__$1 = state_23914;
var statearr_23921_23941 = state_23914__$1;
(statearr_23921_23941[(2)] = null);

(statearr_23921_23941[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23915 === (6))){
var inst_23893 = (state_23914[(7)]);
var state_23914__$1 = state_23914;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23914__$1,(11),to,inst_23893);
} else {
if((state_val_23915 === (3))){
var inst_23912 = (state_23914[(2)]);
var state_23914__$1 = state_23914;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23914__$1,inst_23912);
} else {
if((state_val_23915 === (12))){
var state_23914__$1 = state_23914;
var statearr_23922_23942 = state_23914__$1;
(statearr_23922_23942[(2)] = null);

(statearr_23922_23942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23915 === (2))){
var state_23914__$1 = state_23914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23914__$1,(4),from);
} else {
if((state_val_23915 === (11))){
var inst_23903 = (state_23914[(2)]);
var state_23914__$1 = state_23914;
if(cljs.core.truth_(inst_23903)){
var statearr_23923_23943 = state_23914__$1;
(statearr_23923_23943[(1)] = (12));

} else {
var statearr_23924_23944 = state_23914__$1;
(statearr_23924_23944[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23915 === (9))){
var state_23914__$1 = state_23914;
var statearr_23925_23945 = state_23914__$1;
(statearr_23925_23945[(2)] = null);

(statearr_23925_23945[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23915 === (5))){
var state_23914__$1 = state_23914;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23926_23946 = state_23914__$1;
(statearr_23926_23946[(1)] = (8));

} else {
var statearr_23927_23947 = state_23914__$1;
(statearr_23927_23947[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23915 === (14))){
var inst_23908 = (state_23914[(2)]);
var state_23914__$1 = state_23914;
var statearr_23928_23948 = state_23914__$1;
(statearr_23928_23948[(2)] = inst_23908);

(statearr_23928_23948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23915 === (10))){
var inst_23900 = (state_23914[(2)]);
var state_23914__$1 = state_23914;
var statearr_23929_23949 = state_23914__$1;
(statearr_23929_23949[(2)] = inst_23900);

(statearr_23929_23949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23915 === (8))){
var inst_23897 = cljs.core.async.close_BANG_.call(null,to);
var state_23914__$1 = state_23914;
var statearr_23930_23950 = state_23914__$1;
(statearr_23930_23950[(2)] = inst_23897);

(statearr_23930_23950[(1)] = (10));


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
});})(c__23789__auto___23936))
;
return ((function (switch__23694__auto__,c__23789__auto___23936){
return (function() {
var cljs$core$async$state_machine__23695__auto__ = null;
var cljs$core$async$state_machine__23695__auto____0 = (function (){
var statearr_23931 = [null,null,null,null,null,null,null,null];
(statearr_23931[(0)] = cljs$core$async$state_machine__23695__auto__);

(statearr_23931[(1)] = (1));

return statearr_23931;
});
var cljs$core$async$state_machine__23695__auto____1 = (function (state_23914){
while(true){
var ret_value__23696__auto__ = (function (){try{while(true){
var result__23697__auto__ = switch__23694__auto__.call(null,state_23914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23697__auto__;
}
break;
}
}catch (e23932){if((e23932 instanceof Object)){
var ex__23698__auto__ = e23932;
var statearr_23933_23951 = state_23914;
(statearr_23933_23951[(5)] = ex__23698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23952 = state_23914;
state_23914 = G__23952;
continue;
} else {
return ret_value__23696__auto__;
}
break;
}
});
cljs$core$async$state_machine__23695__auto__ = function(state_23914){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23695__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23695__auto____1.call(this,state_23914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23695__auto____0;
cljs$core$async$state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23695__auto____1;
return cljs$core$async$state_machine__23695__auto__;
})()
;})(switch__23694__auto__,c__23789__auto___23936))
})();
var state__23791__auto__ = (function (){var statearr_23934 = f__23790__auto__.call(null);
(statearr_23934[(6)] = c__23789__auto___23936);

return statearr_23934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23791__auto__);
});})(c__23789__auto___23936))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__23953){
var vec__23954 = p__23953;
var v = cljs.core.nth.call(null,vec__23954,(0),null);
var p = cljs.core.nth.call(null,vec__23954,(1),null);
var job = vec__23954;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23789__auto___24125 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23789__auto___24125,res,vec__23954,v,p,job,jobs,results){
return (function (){
var f__23790__auto__ = (function (){var switch__23694__auto__ = ((function (c__23789__auto___24125,res,vec__23954,v,p,job,jobs,results){
return (function (state_23961){
var state_val_23962 = (state_23961[(1)]);
if((state_val_23962 === (1))){
var state_23961__$1 = state_23961;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23961__$1,(2),res,v);
} else {
if((state_val_23962 === (2))){
var inst_23958 = (state_23961[(2)]);
var inst_23959 = cljs.core.async.close_BANG_.call(null,res);
var state_23961__$1 = (function (){var statearr_23963 = state_23961;
(statearr_23963[(7)] = inst_23958);

return statearr_23963;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23961__$1,inst_23959);
} else {
return null;
}
}
});})(c__23789__auto___24125,res,vec__23954,v,p,job,jobs,results))
;
return ((function (switch__23694__auto__,c__23789__auto___24125,res,vec__23954,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23695__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23695__auto____0 = (function (){
var statearr_23964 = [null,null,null,null,null,null,null,null];
(statearr_23964[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23695__auto__);

(statearr_23964[(1)] = (1));

return statearr_23964;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23695__auto____1 = (function (state_23961){
while(true){
var ret_value__23696__auto__ = (function (){try{while(true){
var result__23697__auto__ = switch__23694__auto__.call(null,state_23961);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23697__auto__;
}
break;
}
}catch (e23965){if((e23965 instanceof Object)){
var ex__23698__auto__ = e23965;
var statearr_23966_24126 = state_23961;
(statearr_23966_24126[(5)] = ex__23698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24127 = state_23961;
state_23961 = G__24127;
continue;
} else {
return ret_value__23696__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23695__auto__ = function(state_23961){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23695__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23695__auto____1.call(this,state_23961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23695__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23695__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23695__auto__;
})()
;})(switch__23694__auto__,c__23789__auto___24125,res,vec__23954,v,p,job,jobs,results))
})();
var state__23791__auto__ = (function (){var statearr_23967 = f__23790__auto__.call(null);
(statearr_23967[(6)] = c__23789__auto___24125);

return statearr_23967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23791__auto__);
});})(c__23789__auto___24125,res,vec__23954,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23968){
var vec__23969 = p__23968;
var v = cljs.core.nth.call(null,vec__23969,(0),null);
var p = cljs.core.nth.call(null,vec__23969,(1),null);
var job = vec__23969;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___24128 = n;
var __24129 = (0);
while(true){
if((__24129 < n__4607__auto___24128)){
var G__23972_24130 = type;
var G__23972_24131__$1 = (((G__23972_24130 instanceof cljs.core.Keyword))?G__23972_24130.fqn:null);
switch (G__23972_24131__$1) {
case "compute":
var c__23789__auto___24133 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24129,c__23789__auto___24133,G__23972_24130,G__23972_24131__$1,n__4607__auto___24128,jobs,results,process,async){
return (function (){
var f__23790__auto__ = (function (){var switch__23694__auto__ = ((function (__24129,c__23789__auto___24133,G__23972_24130,G__23972_24131__$1,n__4607__auto___24128,jobs,results,process,async){
return (function (state_23985){
var state_val_23986 = (state_23985[(1)]);
if((state_val_23986 === (1))){
var state_23985__$1 = state_23985;
var statearr_23987_24134 = state_23985__$1;
(statearr_23987_24134[(2)] = null);

(statearr_23987_24134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23986 === (2))){
var state_23985__$1 = state_23985;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23985__$1,(4),jobs);
} else {
if((state_val_23986 === (3))){
var inst_23983 = (state_23985[(2)]);
var state_23985__$1 = state_23985;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23985__$1,inst_23983);
} else {
if((state_val_23986 === (4))){
var inst_23975 = (state_23985[(2)]);
var inst_23976 = process.call(null,inst_23975);
var state_23985__$1 = state_23985;
if(cljs.core.truth_(inst_23976)){
var statearr_23988_24135 = state_23985__$1;
(statearr_23988_24135[(1)] = (5));

} else {
var statearr_23989_24136 = state_23985__$1;
(statearr_23989_24136[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23986 === (5))){
var state_23985__$1 = state_23985;
var statearr_23990_24137 = state_23985__$1;
(statearr_23990_24137[(2)] = null);

(statearr_23990_24137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23986 === (6))){
var state_23985__$1 = state_23985;
var statearr_23991_24138 = state_23985__$1;
(statearr_23991_24138[(2)] = null);

(statearr_23991_24138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23986 === (7))){
var inst_23981 = (state_23985[(2)]);
var state_23985__$1 = state_23985;
var statearr_23992_24139 = state_23985__$1;
(statearr_23992_24139[(2)] = inst_23981);

(statearr_23992_24139[(1)] = (3));


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
});})(__24129,c__23789__auto___24133,G__23972_24130,G__23972_24131__$1,n__4607__auto___24128,jobs,results,process,async))
;
return ((function (__24129,switch__23694__auto__,c__23789__auto___24133,G__23972_24130,G__23972_24131__$1,n__4607__auto___24128,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23695__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23695__auto____0 = (function (){
var statearr_23993 = [null,null,null,null,null,null,null];
(statearr_23993[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23695__auto__);

(statearr_23993[(1)] = (1));

return statearr_23993;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23695__auto____1 = (function (state_23985){
while(true){
var ret_value__23696__auto__ = (function (){try{while(true){
var result__23697__auto__ = switch__23694__auto__.call(null,state_23985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23697__auto__;
}
break;
}
}catch (e23994){if((e23994 instanceof Object)){
var ex__23698__auto__ = e23994;
var statearr_23995_24140 = state_23985;
(statearr_23995_24140[(5)] = ex__23698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23994;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24141 = state_23985;
state_23985 = G__24141;
continue;
} else {
return ret_value__23696__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23695__auto__ = function(state_23985){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23695__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23695__auto____1.call(this,state_23985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23695__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23695__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23695__auto__;
})()
;})(__24129,switch__23694__auto__,c__23789__auto___24133,G__23972_24130,G__23972_24131__$1,n__4607__auto___24128,jobs,results,process,async))
})();
var state__23791__auto__ = (function (){var statearr_23996 = f__23790__auto__.call(null);
(statearr_23996[(6)] = c__23789__auto___24133);

return statearr_23996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23791__auto__);
});})(__24129,c__23789__auto___24133,G__23972_24130,G__23972_24131__$1,n__4607__auto___24128,jobs,results,process,async))
);


break;
case "async":
var c__23789__auto___24142 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24129,c__23789__auto___24142,G__23972_24130,G__23972_24131__$1,n__4607__auto___24128,jobs,results,process,async){
return (function (){
var f__23790__auto__ = (function (){var switch__23694__auto__ = ((function (__24129,c__23789__auto___24142,G__23972_24130,G__23972_24131__$1,n__4607__auto___24128,jobs,results,process,async){
return (function (state_24009){
var state_val_24010 = (state_24009[(1)]);
if((state_val_24010 === (1))){
var state_24009__$1 = state_24009;
var statearr_24011_24143 = state_24009__$1;
(statearr_24011_24143[(2)] = null);

(statearr_24011_24143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24010 === (2))){
var state_24009__$1 = state_24009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24009__$1,(4),jobs);
} else {
if((state_val_24010 === (3))){
var inst_24007 = (state_24009[(2)]);
var state_24009__$1 = state_24009;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24009__$1,inst_24007);
} else {
if((state_val_24010 === (4))){
var inst_23999 = (state_24009[(2)]);
var inst_24000 = async.call(null,inst_23999);
var state_24009__$1 = state_24009;
if(cljs.core.truth_(inst_24000)){
var statearr_24012_24144 = state_24009__$1;
(statearr_24012_24144[(1)] = (5));

} else {
var statearr_24013_24145 = state_24009__$1;
(statearr_24013_24145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24010 === (5))){
var state_24009__$1 = state_24009;
var statearr_24014_24146 = state_24009__$1;
(statearr_24014_24146[(2)] = null);

(statearr_24014_24146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24010 === (6))){
var state_24009__$1 = state_24009;
var statearr_24015_24147 = state_24009__$1;
(statearr_24015_24147[(2)] = null);

(statearr_24015_24147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24010 === (7))){
var inst_24005 = (state_24009[(2)]);
var state_24009__$1 = state_24009;
var statearr_24016_24148 = state_24009__$1;
(statearr_24016_24148[(2)] = inst_24005);

(statearr_24016_24148[(1)] = (3));


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
});})(__24129,c__23789__auto___24142,G__23972_24130,G__23972_24131__$1,n__4607__auto___24128,jobs,results,process,async))
;
return ((function (__24129,switch__23694__auto__,c__23789__auto___24142,G__23972_24130,G__23972_24131__$1,n__4607__auto___24128,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23695__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23695__auto____0 = (function (){
var statearr_24017 = [null,null,null,null,null,null,null];
(statearr_24017[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23695__auto__);

(statearr_24017[(1)] = (1));

return statearr_24017;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23695__auto____1 = (function (state_24009){
while(true){
var ret_value__23696__auto__ = (function (){try{while(true){
var result__23697__auto__ = switch__23694__auto__.call(null,state_24009);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23697__auto__;
}
break;
}
}catch (e24018){if((e24018 instanceof Object)){
var ex__23698__auto__ = e24018;
var statearr_24019_24149 = state_24009;
(statearr_24019_24149[(5)] = ex__23698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24150 = state_24009;
state_24009 = G__24150;
continue;
} else {
return ret_value__23696__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23695__auto__ = function(state_24009){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23695__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23695__auto____1.call(this,state_24009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23695__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23695__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23695__auto__;
})()
;})(__24129,switch__23694__auto__,c__23789__auto___24142,G__23972_24130,G__23972_24131__$1,n__4607__auto___24128,jobs,results,process,async))
})();
var state__23791__auto__ = (function (){var statearr_24020 = f__23790__auto__.call(null);
(statearr_24020[(6)] = c__23789__auto___24142);

return statearr_24020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23791__auto__);
});})(__24129,c__23789__auto___24142,G__23972_24130,G__23972_24131__$1,n__4607__auto___24128,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23972_24131__$1)].join('')));

}

var G__24151 = (__24129 + (1));
__24129 = G__24151;
continue;
} else {
}
break;
}

var c__23789__auto___24152 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23789__auto___24152,jobs,results,process,async){
return (function (){
var f__23790__auto__ = (function (){var switch__23694__auto__ = ((function (c__23789__auto___24152,jobs,results,process,async){
return (function (state_24042){
var state_val_24043 = (state_24042[(1)]);
if((state_val_24043 === (7))){
var inst_24038 = (state_24042[(2)]);
var state_24042__$1 = state_24042;
var statearr_24044_24153 = state_24042__$1;
(statearr_24044_24153[(2)] = inst_24038);

(statearr_24044_24153[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24043 === (1))){
var state_24042__$1 = state_24042;
var statearr_24045_24154 = state_24042__$1;
(statearr_24045_24154[(2)] = null);

(statearr_24045_24154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24043 === (4))){
var inst_24023 = (state_24042[(7)]);
var inst_24023__$1 = (state_24042[(2)]);
var inst_24024 = (inst_24023__$1 == null);
var state_24042__$1 = (function (){var statearr_24046 = state_24042;
(statearr_24046[(7)] = inst_24023__$1);

return statearr_24046;
})();
if(cljs.core.truth_(inst_24024)){
var statearr_24047_24155 = state_24042__$1;
(statearr_24047_24155[(1)] = (5));

} else {
var statearr_24048_24156 = state_24042__$1;
(statearr_24048_24156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24043 === (6))){
var inst_24023 = (state_24042[(7)]);
var inst_24028 = (state_24042[(8)]);
var inst_24028__$1 = cljs.core.async.chan.call(null,(1));
var inst_24029 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24030 = [inst_24023,inst_24028__$1];
var inst_24031 = (new cljs.core.PersistentVector(null,2,(5),inst_24029,inst_24030,null));
var state_24042__$1 = (function (){var statearr_24049 = state_24042;
(statearr_24049[(8)] = inst_24028__$1);

return statearr_24049;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24042__$1,(8),jobs,inst_24031);
} else {
if((state_val_24043 === (3))){
var inst_24040 = (state_24042[(2)]);
var state_24042__$1 = state_24042;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24042__$1,inst_24040);
} else {
if((state_val_24043 === (2))){
var state_24042__$1 = state_24042;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24042__$1,(4),from);
} else {
if((state_val_24043 === (9))){
var inst_24035 = (state_24042[(2)]);
var state_24042__$1 = (function (){var statearr_24050 = state_24042;
(statearr_24050[(9)] = inst_24035);

return statearr_24050;
})();
var statearr_24051_24157 = state_24042__$1;
(statearr_24051_24157[(2)] = null);

(statearr_24051_24157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24043 === (5))){
var inst_24026 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24042__$1 = state_24042;
var statearr_24052_24158 = state_24042__$1;
(statearr_24052_24158[(2)] = inst_24026);

(statearr_24052_24158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24043 === (8))){
var inst_24028 = (state_24042[(8)]);
var inst_24033 = (state_24042[(2)]);
var state_24042__$1 = (function (){var statearr_24053 = state_24042;
(statearr_24053[(10)] = inst_24033);

return statearr_24053;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24042__$1,(9),results,inst_24028);
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
});})(c__23789__auto___24152,jobs,results,process,async))
;
return ((function (switch__23694__auto__,c__23789__auto___24152,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23695__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23695__auto____0 = (function (){
var statearr_24054 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24054[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23695__auto__);

(statearr_24054[(1)] = (1));

return statearr_24054;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23695__auto____1 = (function (state_24042){
while(true){
var ret_value__23696__auto__ = (function (){try{while(true){
var result__23697__auto__ = switch__23694__auto__.call(null,state_24042);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23697__auto__;
}
break;
}
}catch (e24055){if((e24055 instanceof Object)){
var ex__23698__auto__ = e24055;
var statearr_24056_24159 = state_24042;
(statearr_24056_24159[(5)] = ex__23698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24160 = state_24042;
state_24042 = G__24160;
continue;
} else {
return ret_value__23696__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23695__auto__ = function(state_24042){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23695__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23695__auto____1.call(this,state_24042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23695__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23695__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23695__auto__;
})()
;})(switch__23694__auto__,c__23789__auto___24152,jobs,results,process,async))
})();
var state__23791__auto__ = (function (){var statearr_24057 = f__23790__auto__.call(null);
(statearr_24057[(6)] = c__23789__auto___24152);

return statearr_24057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23791__auto__);
});})(c__23789__auto___24152,jobs,results,process,async))
);


var c__23789__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23789__auto__,jobs,results,process,async){
return (function (){
var f__23790__auto__ = (function (){var switch__23694__auto__ = ((function (c__23789__auto__,jobs,results,process,async){
return (function (state_24095){
var state_val_24096 = (state_24095[(1)]);
if((state_val_24096 === (7))){
var inst_24091 = (state_24095[(2)]);
var state_24095__$1 = state_24095;
var statearr_24097_24161 = state_24095__$1;
(statearr_24097_24161[(2)] = inst_24091);

(statearr_24097_24161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (20))){
var state_24095__$1 = state_24095;
var statearr_24098_24162 = state_24095__$1;
(statearr_24098_24162[(2)] = null);

(statearr_24098_24162[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (1))){
var state_24095__$1 = state_24095;
var statearr_24099_24163 = state_24095__$1;
(statearr_24099_24163[(2)] = null);

(statearr_24099_24163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (4))){
var inst_24060 = (state_24095[(7)]);
var inst_24060__$1 = (state_24095[(2)]);
var inst_24061 = (inst_24060__$1 == null);
var state_24095__$1 = (function (){var statearr_24100 = state_24095;
(statearr_24100[(7)] = inst_24060__$1);

return statearr_24100;
})();
if(cljs.core.truth_(inst_24061)){
var statearr_24101_24164 = state_24095__$1;
(statearr_24101_24164[(1)] = (5));

} else {
var statearr_24102_24165 = state_24095__$1;
(statearr_24102_24165[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (15))){
var inst_24073 = (state_24095[(8)]);
var state_24095__$1 = state_24095;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24095__$1,(18),to,inst_24073);
} else {
if((state_val_24096 === (21))){
var inst_24086 = (state_24095[(2)]);
var state_24095__$1 = state_24095;
var statearr_24103_24166 = state_24095__$1;
(statearr_24103_24166[(2)] = inst_24086);

(statearr_24103_24166[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (13))){
var inst_24088 = (state_24095[(2)]);
var state_24095__$1 = (function (){var statearr_24104 = state_24095;
(statearr_24104[(9)] = inst_24088);

return statearr_24104;
})();
var statearr_24105_24167 = state_24095__$1;
(statearr_24105_24167[(2)] = null);

(statearr_24105_24167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (6))){
var inst_24060 = (state_24095[(7)]);
var state_24095__$1 = state_24095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24095__$1,(11),inst_24060);
} else {
if((state_val_24096 === (17))){
var inst_24081 = (state_24095[(2)]);
var state_24095__$1 = state_24095;
if(cljs.core.truth_(inst_24081)){
var statearr_24106_24168 = state_24095__$1;
(statearr_24106_24168[(1)] = (19));

} else {
var statearr_24107_24169 = state_24095__$1;
(statearr_24107_24169[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (3))){
var inst_24093 = (state_24095[(2)]);
var state_24095__$1 = state_24095;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24095__$1,inst_24093);
} else {
if((state_val_24096 === (12))){
var inst_24070 = (state_24095[(10)]);
var state_24095__$1 = state_24095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24095__$1,(14),inst_24070);
} else {
if((state_val_24096 === (2))){
var state_24095__$1 = state_24095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24095__$1,(4),results);
} else {
if((state_val_24096 === (19))){
var state_24095__$1 = state_24095;
var statearr_24108_24170 = state_24095__$1;
(statearr_24108_24170[(2)] = null);

(statearr_24108_24170[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (11))){
var inst_24070 = (state_24095[(2)]);
var state_24095__$1 = (function (){var statearr_24109 = state_24095;
(statearr_24109[(10)] = inst_24070);

return statearr_24109;
})();
var statearr_24110_24171 = state_24095__$1;
(statearr_24110_24171[(2)] = null);

(statearr_24110_24171[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (9))){
var state_24095__$1 = state_24095;
var statearr_24111_24172 = state_24095__$1;
(statearr_24111_24172[(2)] = null);

(statearr_24111_24172[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (5))){
var state_24095__$1 = state_24095;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24112_24173 = state_24095__$1;
(statearr_24112_24173[(1)] = (8));

} else {
var statearr_24113_24174 = state_24095__$1;
(statearr_24113_24174[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (14))){
var inst_24073 = (state_24095[(8)]);
var inst_24075 = (state_24095[(11)]);
var inst_24073__$1 = (state_24095[(2)]);
var inst_24074 = (inst_24073__$1 == null);
var inst_24075__$1 = cljs.core.not.call(null,inst_24074);
var state_24095__$1 = (function (){var statearr_24114 = state_24095;
(statearr_24114[(8)] = inst_24073__$1);

(statearr_24114[(11)] = inst_24075__$1);

return statearr_24114;
})();
if(inst_24075__$1){
var statearr_24115_24175 = state_24095__$1;
(statearr_24115_24175[(1)] = (15));

} else {
var statearr_24116_24176 = state_24095__$1;
(statearr_24116_24176[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (16))){
var inst_24075 = (state_24095[(11)]);
var state_24095__$1 = state_24095;
var statearr_24117_24177 = state_24095__$1;
(statearr_24117_24177[(2)] = inst_24075);

(statearr_24117_24177[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (10))){
var inst_24067 = (state_24095[(2)]);
var state_24095__$1 = state_24095;
var statearr_24118_24178 = state_24095__$1;
(statearr_24118_24178[(2)] = inst_24067);

(statearr_24118_24178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (18))){
var inst_24078 = (state_24095[(2)]);
var state_24095__$1 = state_24095;
var statearr_24119_24179 = state_24095__$1;
(statearr_24119_24179[(2)] = inst_24078);

(statearr_24119_24179[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (8))){
var inst_24064 = cljs.core.async.close_BANG_.call(null,to);
var state_24095__$1 = state_24095;
var statearr_24120_24180 = state_24095__$1;
(statearr_24120_24180[(2)] = inst_24064);

(statearr_24120_24180[(1)] = (10));


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
});})(c__23789__auto__,jobs,results,process,async))
;
return ((function (switch__23694__auto__,c__23789__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23695__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23695__auto____0 = (function (){
var statearr_24121 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24121[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23695__auto__);

(statearr_24121[(1)] = (1));

return statearr_24121;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23695__auto____1 = (function (state_24095){
while(true){
var ret_value__23696__auto__ = (function (){try{while(true){
var result__23697__auto__ = switch__23694__auto__.call(null,state_24095);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23697__auto__;
}
break;
}
}catch (e24122){if((e24122 instanceof Object)){
var ex__23698__auto__ = e24122;
var statearr_24123_24181 = state_24095;
(statearr_24123_24181[(5)] = ex__23698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24122;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24182 = state_24095;
state_24095 = G__24182;
continue;
} else {
return ret_value__23696__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23695__auto__ = function(state_24095){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23695__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23695__auto____1.call(this,state_24095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23695__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23695__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23695__auto__;
})()
;})(switch__23694__auto__,c__23789__auto__,jobs,results,process,async))
})();
var state__23791__auto__ = (function (){var statearr_24124 = f__23790__auto__.call(null);
(statearr_24124[(6)] = c__23789__auto__);

return statearr_24124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23791__auto__);
});})(c__23789__auto__,jobs,results,process,async))
);

return c__23789__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__24184 = arguments.length;
switch (G__24184) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__24187 = arguments.length;
switch (G__24187) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__24190 = arguments.length;
switch (G__24190) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23789__auto___24239 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23789__auto___24239,tc,fc){
return (function (){
var f__23790__auto__ = (function (){var switch__23694__auto__ = ((function (c__23789__auto___24239,tc,fc){
return (function (state_24216){
var state_val_24217 = (state_24216[(1)]);
if((state_val_24217 === (7))){
var inst_24212 = (state_24216[(2)]);
var state_24216__$1 = state_24216;
var statearr_24218_24240 = state_24216__$1;
(statearr_24218_24240[(2)] = inst_24212);

(statearr_24218_24240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24217 === (1))){
var state_24216__$1 = state_24216;
var statearr_24219_24241 = state_24216__$1;
(statearr_24219_24241[(2)] = null);

(statearr_24219_24241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24217 === (4))){
var inst_24193 = (state_24216[(7)]);
var inst_24193__$1 = (state_24216[(2)]);
var inst_24194 = (inst_24193__$1 == null);
var state_24216__$1 = (function (){var statearr_24220 = state_24216;
(statearr_24220[(7)] = inst_24193__$1);

return statearr_24220;
})();
if(cljs.core.truth_(inst_24194)){
var statearr_24221_24242 = state_24216__$1;
(statearr_24221_24242[(1)] = (5));

} else {
var statearr_24222_24243 = state_24216__$1;
(statearr_24222_24243[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24217 === (13))){
var state_24216__$1 = state_24216;
var statearr_24223_24244 = state_24216__$1;
(statearr_24223_24244[(2)] = null);

(statearr_24223_24244[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24217 === (6))){
var inst_24193 = (state_24216[(7)]);
var inst_24199 = p.call(null,inst_24193);
var state_24216__$1 = state_24216;
if(cljs.core.truth_(inst_24199)){
var statearr_24224_24245 = state_24216__$1;
(statearr_24224_24245[(1)] = (9));

} else {
var statearr_24225_24246 = state_24216__$1;
(statearr_24225_24246[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24217 === (3))){
var inst_24214 = (state_24216[(2)]);
var state_24216__$1 = state_24216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24216__$1,inst_24214);
} else {
if((state_val_24217 === (12))){
var state_24216__$1 = state_24216;
var statearr_24226_24247 = state_24216__$1;
(statearr_24226_24247[(2)] = null);

(statearr_24226_24247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24217 === (2))){
var state_24216__$1 = state_24216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24216__$1,(4),ch);
} else {
if((state_val_24217 === (11))){
var inst_24193 = (state_24216[(7)]);
var inst_24203 = (state_24216[(2)]);
var state_24216__$1 = state_24216;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24216__$1,(8),inst_24203,inst_24193);
} else {
if((state_val_24217 === (9))){
var state_24216__$1 = state_24216;
var statearr_24227_24248 = state_24216__$1;
(statearr_24227_24248[(2)] = tc);

(statearr_24227_24248[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24217 === (5))){
var inst_24196 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24197 = cljs.core.async.close_BANG_.call(null,fc);
var state_24216__$1 = (function (){var statearr_24228 = state_24216;
(statearr_24228[(8)] = inst_24196);

return statearr_24228;
})();
var statearr_24229_24249 = state_24216__$1;
(statearr_24229_24249[(2)] = inst_24197);

(statearr_24229_24249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24217 === (14))){
var inst_24210 = (state_24216[(2)]);
var state_24216__$1 = state_24216;
var statearr_24230_24250 = state_24216__$1;
(statearr_24230_24250[(2)] = inst_24210);

(statearr_24230_24250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24217 === (10))){
var state_24216__$1 = state_24216;
var statearr_24231_24251 = state_24216__$1;
(statearr_24231_24251[(2)] = fc);

(statearr_24231_24251[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24217 === (8))){
var inst_24205 = (state_24216[(2)]);
var state_24216__$1 = state_24216;
if(cljs.core.truth_(inst_24205)){
var statearr_24232_24252 = state_24216__$1;
(statearr_24232_24252[(1)] = (12));

} else {
var statearr_24233_24253 = state_24216__$1;
(statearr_24233_24253[(1)] = (13));

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
});})(c__23789__auto___24239,tc,fc))
;
return ((function (switch__23694__auto__,c__23789__auto___24239,tc,fc){
return (function() {
var cljs$core$async$state_machine__23695__auto__ = null;
var cljs$core$async$state_machine__23695__auto____0 = (function (){
var statearr_24234 = [null,null,null,null,null,null,null,null,null];
(statearr_24234[(0)] = cljs$core$async$state_machine__23695__auto__);

(statearr_24234[(1)] = (1));

return statearr_24234;
});
var cljs$core$async$state_machine__23695__auto____1 = (function (state_24216){
while(true){
var ret_value__23696__auto__ = (function (){try{while(true){
var result__23697__auto__ = switch__23694__auto__.call(null,state_24216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23697__auto__;
}
break;
}
}catch (e24235){if((e24235 instanceof Object)){
var ex__23698__auto__ = e24235;
var statearr_24236_24254 = state_24216;
(statearr_24236_24254[(5)] = ex__23698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24235;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24255 = state_24216;
state_24216 = G__24255;
continue;
} else {
return ret_value__23696__auto__;
}
break;
}
});
cljs$core$async$state_machine__23695__auto__ = function(state_24216){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23695__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23695__auto____1.call(this,state_24216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23695__auto____0;
cljs$core$async$state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23695__auto____1;
return cljs$core$async$state_machine__23695__auto__;
})()
;})(switch__23694__auto__,c__23789__auto___24239,tc,fc))
})();
var state__23791__auto__ = (function (){var statearr_24237 = f__23790__auto__.call(null);
(statearr_24237[(6)] = c__23789__auto___24239);

return statearr_24237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23791__auto__);
});})(c__23789__auto___24239,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23789__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23789__auto__){
return (function (){
var f__23790__auto__ = (function (){var switch__23694__auto__ = ((function (c__23789__auto__){
return (function (state_24276){
var state_val_24277 = (state_24276[(1)]);
if((state_val_24277 === (7))){
var inst_24272 = (state_24276[(2)]);
var state_24276__$1 = state_24276;
var statearr_24278_24296 = state_24276__$1;
(statearr_24278_24296[(2)] = inst_24272);

(statearr_24278_24296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24277 === (1))){
var inst_24256 = init;
var state_24276__$1 = (function (){var statearr_24279 = state_24276;
(statearr_24279[(7)] = inst_24256);

return statearr_24279;
})();
var statearr_24280_24297 = state_24276__$1;
(statearr_24280_24297[(2)] = null);

(statearr_24280_24297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24277 === (4))){
var inst_24259 = (state_24276[(8)]);
var inst_24259__$1 = (state_24276[(2)]);
var inst_24260 = (inst_24259__$1 == null);
var state_24276__$1 = (function (){var statearr_24281 = state_24276;
(statearr_24281[(8)] = inst_24259__$1);

return statearr_24281;
})();
if(cljs.core.truth_(inst_24260)){
var statearr_24282_24298 = state_24276__$1;
(statearr_24282_24298[(1)] = (5));

} else {
var statearr_24283_24299 = state_24276__$1;
(statearr_24283_24299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24277 === (6))){
var inst_24259 = (state_24276[(8)]);
var inst_24263 = (state_24276[(9)]);
var inst_24256 = (state_24276[(7)]);
var inst_24263__$1 = f.call(null,inst_24256,inst_24259);
var inst_24264 = cljs.core.reduced_QMARK_.call(null,inst_24263__$1);
var state_24276__$1 = (function (){var statearr_24284 = state_24276;
(statearr_24284[(9)] = inst_24263__$1);

return statearr_24284;
})();
if(inst_24264){
var statearr_24285_24300 = state_24276__$1;
(statearr_24285_24300[(1)] = (8));

} else {
var statearr_24286_24301 = state_24276__$1;
(statearr_24286_24301[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24277 === (3))){
var inst_24274 = (state_24276[(2)]);
var state_24276__$1 = state_24276;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24276__$1,inst_24274);
} else {
if((state_val_24277 === (2))){
var state_24276__$1 = state_24276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24276__$1,(4),ch);
} else {
if((state_val_24277 === (9))){
var inst_24263 = (state_24276[(9)]);
var inst_24256 = inst_24263;
var state_24276__$1 = (function (){var statearr_24287 = state_24276;
(statearr_24287[(7)] = inst_24256);

return statearr_24287;
})();
var statearr_24288_24302 = state_24276__$1;
(statearr_24288_24302[(2)] = null);

(statearr_24288_24302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24277 === (5))){
var inst_24256 = (state_24276[(7)]);
var state_24276__$1 = state_24276;
var statearr_24289_24303 = state_24276__$1;
(statearr_24289_24303[(2)] = inst_24256);

(statearr_24289_24303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24277 === (10))){
var inst_24270 = (state_24276[(2)]);
var state_24276__$1 = state_24276;
var statearr_24290_24304 = state_24276__$1;
(statearr_24290_24304[(2)] = inst_24270);

(statearr_24290_24304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24277 === (8))){
var inst_24263 = (state_24276[(9)]);
var inst_24266 = cljs.core.deref.call(null,inst_24263);
var state_24276__$1 = state_24276;
var statearr_24291_24305 = state_24276__$1;
(statearr_24291_24305[(2)] = inst_24266);

(statearr_24291_24305[(1)] = (10));


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
});})(c__23789__auto__))
;
return ((function (switch__23694__auto__,c__23789__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23695__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23695__auto____0 = (function (){
var statearr_24292 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24292[(0)] = cljs$core$async$reduce_$_state_machine__23695__auto__);

(statearr_24292[(1)] = (1));

return statearr_24292;
});
var cljs$core$async$reduce_$_state_machine__23695__auto____1 = (function (state_24276){
while(true){
var ret_value__23696__auto__ = (function (){try{while(true){
var result__23697__auto__ = switch__23694__auto__.call(null,state_24276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23697__auto__;
}
break;
}
}catch (e24293){if((e24293 instanceof Object)){
var ex__23698__auto__ = e24293;
var statearr_24294_24306 = state_24276;
(statearr_24294_24306[(5)] = ex__23698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24293;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24307 = state_24276;
state_24276 = G__24307;
continue;
} else {
return ret_value__23696__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23695__auto__ = function(state_24276){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23695__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23695__auto____1.call(this,state_24276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23695__auto____0;
cljs$core$async$reduce_$_state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23695__auto____1;
return cljs$core$async$reduce_$_state_machine__23695__auto__;
})()
;})(switch__23694__auto__,c__23789__auto__))
})();
var state__23791__auto__ = (function (){var statearr_24295 = f__23790__auto__.call(null);
(statearr_24295[(6)] = c__23789__auto__);

return statearr_24295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23791__auto__);
});})(c__23789__auto__))
);

return c__23789__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__23789__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23789__auto__,f__$1){
return (function (){
var f__23790__auto__ = (function (){var switch__23694__auto__ = ((function (c__23789__auto__,f__$1){
return (function (state_24313){
var state_val_24314 = (state_24313[(1)]);
if((state_val_24314 === (1))){
var inst_24308 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_24313__$1 = state_24313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24313__$1,(2),inst_24308);
} else {
if((state_val_24314 === (2))){
var inst_24310 = (state_24313[(2)]);
var inst_24311 = f__$1.call(null,inst_24310);
var state_24313__$1 = state_24313;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24313__$1,inst_24311);
} else {
return null;
}
}
});})(c__23789__auto__,f__$1))
;
return ((function (switch__23694__auto__,c__23789__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__23695__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23695__auto____0 = (function (){
var statearr_24315 = [null,null,null,null,null,null,null];
(statearr_24315[(0)] = cljs$core$async$transduce_$_state_machine__23695__auto__);

(statearr_24315[(1)] = (1));

return statearr_24315;
});
var cljs$core$async$transduce_$_state_machine__23695__auto____1 = (function (state_24313){
while(true){
var ret_value__23696__auto__ = (function (){try{while(true){
var result__23697__auto__ = switch__23694__auto__.call(null,state_24313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23697__auto__;
}
break;
}
}catch (e24316){if((e24316 instanceof Object)){
var ex__23698__auto__ = e24316;
var statearr_24317_24319 = state_24313;
(statearr_24317_24319[(5)] = ex__23698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24320 = state_24313;
state_24313 = G__24320;
continue;
} else {
return ret_value__23696__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23695__auto__ = function(state_24313){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23695__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23695__auto____1.call(this,state_24313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23695__auto____0;
cljs$core$async$transduce_$_state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23695__auto____1;
return cljs$core$async$transduce_$_state_machine__23695__auto__;
})()
;})(switch__23694__auto__,c__23789__auto__,f__$1))
})();
var state__23791__auto__ = (function (){var statearr_24318 = f__23790__auto__.call(null);
(statearr_24318[(6)] = c__23789__auto__);

return statearr_24318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23791__auto__);
});})(c__23789__auto__,f__$1))
);

return c__23789__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__24322 = arguments.length;
switch (G__24322) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23789__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23789__auto__){
return (function (){
var f__23790__auto__ = (function (){var switch__23694__auto__ = ((function (c__23789__auto__){
return (function (state_24347){
var state_val_24348 = (state_24347[(1)]);
if((state_val_24348 === (7))){
var inst_24329 = (state_24347[(2)]);
var state_24347__$1 = state_24347;
var statearr_24349_24370 = state_24347__$1;
(statearr_24349_24370[(2)] = inst_24329);

(statearr_24349_24370[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24348 === (1))){
var inst_24323 = cljs.core.seq.call(null,coll);
var inst_24324 = inst_24323;
var state_24347__$1 = (function (){var statearr_24350 = state_24347;
(statearr_24350[(7)] = inst_24324);

return statearr_24350;
})();
var statearr_24351_24371 = state_24347__$1;
(statearr_24351_24371[(2)] = null);

(statearr_24351_24371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24348 === (4))){
var inst_24324 = (state_24347[(7)]);
var inst_24327 = cljs.core.first.call(null,inst_24324);
var state_24347__$1 = state_24347;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24347__$1,(7),ch,inst_24327);
} else {
if((state_val_24348 === (13))){
var inst_24341 = (state_24347[(2)]);
var state_24347__$1 = state_24347;
var statearr_24352_24372 = state_24347__$1;
(statearr_24352_24372[(2)] = inst_24341);

(statearr_24352_24372[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24348 === (6))){
var inst_24332 = (state_24347[(2)]);
var state_24347__$1 = state_24347;
if(cljs.core.truth_(inst_24332)){
var statearr_24353_24373 = state_24347__$1;
(statearr_24353_24373[(1)] = (8));

} else {
var statearr_24354_24374 = state_24347__$1;
(statearr_24354_24374[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24348 === (3))){
var inst_24345 = (state_24347[(2)]);
var state_24347__$1 = state_24347;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24347__$1,inst_24345);
} else {
if((state_val_24348 === (12))){
var state_24347__$1 = state_24347;
var statearr_24355_24375 = state_24347__$1;
(statearr_24355_24375[(2)] = null);

(statearr_24355_24375[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24348 === (2))){
var inst_24324 = (state_24347[(7)]);
var state_24347__$1 = state_24347;
if(cljs.core.truth_(inst_24324)){
var statearr_24356_24376 = state_24347__$1;
(statearr_24356_24376[(1)] = (4));

} else {
var statearr_24357_24377 = state_24347__$1;
(statearr_24357_24377[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24348 === (11))){
var inst_24338 = cljs.core.async.close_BANG_.call(null,ch);
var state_24347__$1 = state_24347;
var statearr_24358_24378 = state_24347__$1;
(statearr_24358_24378[(2)] = inst_24338);

(statearr_24358_24378[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24348 === (9))){
var state_24347__$1 = state_24347;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24359_24379 = state_24347__$1;
(statearr_24359_24379[(1)] = (11));

} else {
var statearr_24360_24380 = state_24347__$1;
(statearr_24360_24380[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24348 === (5))){
var inst_24324 = (state_24347[(7)]);
var state_24347__$1 = state_24347;
var statearr_24361_24381 = state_24347__$1;
(statearr_24361_24381[(2)] = inst_24324);

(statearr_24361_24381[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24348 === (10))){
var inst_24343 = (state_24347[(2)]);
var state_24347__$1 = state_24347;
var statearr_24362_24382 = state_24347__$1;
(statearr_24362_24382[(2)] = inst_24343);

(statearr_24362_24382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24348 === (8))){
var inst_24324 = (state_24347[(7)]);
var inst_24334 = cljs.core.next.call(null,inst_24324);
var inst_24324__$1 = inst_24334;
var state_24347__$1 = (function (){var statearr_24363 = state_24347;
(statearr_24363[(7)] = inst_24324__$1);

return statearr_24363;
})();
var statearr_24364_24383 = state_24347__$1;
(statearr_24364_24383[(2)] = null);

(statearr_24364_24383[(1)] = (2));


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
});})(c__23789__auto__))
;
return ((function (switch__23694__auto__,c__23789__auto__){
return (function() {
var cljs$core$async$state_machine__23695__auto__ = null;
var cljs$core$async$state_machine__23695__auto____0 = (function (){
var statearr_24365 = [null,null,null,null,null,null,null,null];
(statearr_24365[(0)] = cljs$core$async$state_machine__23695__auto__);

(statearr_24365[(1)] = (1));

return statearr_24365;
});
var cljs$core$async$state_machine__23695__auto____1 = (function (state_24347){
while(true){
var ret_value__23696__auto__ = (function (){try{while(true){
var result__23697__auto__ = switch__23694__auto__.call(null,state_24347);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23697__auto__;
}
break;
}
}catch (e24366){if((e24366 instanceof Object)){
var ex__23698__auto__ = e24366;
var statearr_24367_24384 = state_24347;
(statearr_24367_24384[(5)] = ex__23698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24366;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24385 = state_24347;
state_24347 = G__24385;
continue;
} else {
return ret_value__23696__auto__;
}
break;
}
});
cljs$core$async$state_machine__23695__auto__ = function(state_24347){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23695__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23695__auto____1.call(this,state_24347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23695__auto____0;
cljs$core$async$state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23695__auto____1;
return cljs$core$async$state_machine__23695__auto__;
})()
;})(switch__23694__auto__,c__23789__auto__))
})();
var state__23791__auto__ = (function (){var statearr_24368 = f__23790__auto__.call(null);
(statearr_24368[(6)] = c__23789__auto__);

return statearr_24368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23791__auto__);
});})(c__23789__auto__))
);

return c__23789__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24386 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24386 = (function (ch,cs,meta24387){
this.ch = ch;
this.cs = cs;
this.meta24387 = meta24387;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24388,meta24387__$1){
var self__ = this;
var _24388__$1 = this;
return (new cljs.core.async.t_cljs$core$async24386(self__.ch,self__.cs,meta24387__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24386.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24388){
var self__ = this;
var _24388__$1 = this;
return self__.meta24387;
});})(cs))
;

cljs.core.async.t_cljs$core$async24386.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24386.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24386.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24386.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24386.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24386.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24386.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24387","meta24387",-1778816857,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24386.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24386.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24386";

cljs.core.async.t_cljs$core$async24386.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24386");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24386.
 */
cljs.core.async.__GT_t_cljs$core$async24386 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24386(ch__$1,cs__$1,meta24387){
return (new cljs.core.async.t_cljs$core$async24386(ch__$1,cs__$1,meta24387));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24386(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__23789__auto___24608 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23789__auto___24608,cs,m,dchan,dctr,done){
return (function (){
var f__23790__auto__ = (function (){var switch__23694__auto__ = ((function (c__23789__auto___24608,cs,m,dchan,dctr,done){
return (function (state_24523){
var state_val_24524 = (state_24523[(1)]);
if((state_val_24524 === (7))){
var inst_24519 = (state_24523[(2)]);
var state_24523__$1 = state_24523;
var statearr_24525_24609 = state_24523__$1;
(statearr_24525_24609[(2)] = inst_24519);

(statearr_24525_24609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (20))){
var inst_24422 = (state_24523[(7)]);
var inst_24434 = cljs.core.first.call(null,inst_24422);
var inst_24435 = cljs.core.nth.call(null,inst_24434,(0),null);
var inst_24436 = cljs.core.nth.call(null,inst_24434,(1),null);
var state_24523__$1 = (function (){var statearr_24526 = state_24523;
(statearr_24526[(8)] = inst_24435);

return statearr_24526;
})();
if(cljs.core.truth_(inst_24436)){
var statearr_24527_24610 = state_24523__$1;
(statearr_24527_24610[(1)] = (22));

} else {
var statearr_24528_24611 = state_24523__$1;
(statearr_24528_24611[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (27))){
var inst_24466 = (state_24523[(9)]);
var inst_24471 = (state_24523[(10)]);
var inst_24391 = (state_24523[(11)]);
var inst_24464 = (state_24523[(12)]);
var inst_24471__$1 = cljs.core._nth.call(null,inst_24464,inst_24466);
var inst_24472 = cljs.core.async.put_BANG_.call(null,inst_24471__$1,inst_24391,done);
var state_24523__$1 = (function (){var statearr_24529 = state_24523;
(statearr_24529[(10)] = inst_24471__$1);

return statearr_24529;
})();
if(cljs.core.truth_(inst_24472)){
var statearr_24530_24612 = state_24523__$1;
(statearr_24530_24612[(1)] = (30));

} else {
var statearr_24531_24613 = state_24523__$1;
(statearr_24531_24613[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (1))){
var state_24523__$1 = state_24523;
var statearr_24532_24614 = state_24523__$1;
(statearr_24532_24614[(2)] = null);

(statearr_24532_24614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (24))){
var inst_24422 = (state_24523[(7)]);
var inst_24441 = (state_24523[(2)]);
var inst_24442 = cljs.core.next.call(null,inst_24422);
var inst_24400 = inst_24442;
var inst_24401 = null;
var inst_24402 = (0);
var inst_24403 = (0);
var state_24523__$1 = (function (){var statearr_24533 = state_24523;
(statearr_24533[(13)] = inst_24441);

(statearr_24533[(14)] = inst_24401);

(statearr_24533[(15)] = inst_24400);

(statearr_24533[(16)] = inst_24402);

(statearr_24533[(17)] = inst_24403);

return statearr_24533;
})();
var statearr_24534_24615 = state_24523__$1;
(statearr_24534_24615[(2)] = null);

(statearr_24534_24615[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (39))){
var state_24523__$1 = state_24523;
var statearr_24538_24616 = state_24523__$1;
(statearr_24538_24616[(2)] = null);

(statearr_24538_24616[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (4))){
var inst_24391 = (state_24523[(11)]);
var inst_24391__$1 = (state_24523[(2)]);
var inst_24392 = (inst_24391__$1 == null);
var state_24523__$1 = (function (){var statearr_24539 = state_24523;
(statearr_24539[(11)] = inst_24391__$1);

return statearr_24539;
})();
if(cljs.core.truth_(inst_24392)){
var statearr_24540_24617 = state_24523__$1;
(statearr_24540_24617[(1)] = (5));

} else {
var statearr_24541_24618 = state_24523__$1;
(statearr_24541_24618[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (15))){
var inst_24401 = (state_24523[(14)]);
var inst_24400 = (state_24523[(15)]);
var inst_24402 = (state_24523[(16)]);
var inst_24403 = (state_24523[(17)]);
var inst_24418 = (state_24523[(2)]);
var inst_24419 = (inst_24403 + (1));
var tmp24535 = inst_24401;
var tmp24536 = inst_24400;
var tmp24537 = inst_24402;
var inst_24400__$1 = tmp24536;
var inst_24401__$1 = tmp24535;
var inst_24402__$1 = tmp24537;
var inst_24403__$1 = inst_24419;
var state_24523__$1 = (function (){var statearr_24542 = state_24523;
(statearr_24542[(18)] = inst_24418);

(statearr_24542[(14)] = inst_24401__$1);

(statearr_24542[(15)] = inst_24400__$1);

(statearr_24542[(16)] = inst_24402__$1);

(statearr_24542[(17)] = inst_24403__$1);

return statearr_24542;
})();
var statearr_24543_24619 = state_24523__$1;
(statearr_24543_24619[(2)] = null);

(statearr_24543_24619[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (21))){
var inst_24445 = (state_24523[(2)]);
var state_24523__$1 = state_24523;
var statearr_24547_24620 = state_24523__$1;
(statearr_24547_24620[(2)] = inst_24445);

(statearr_24547_24620[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (31))){
var inst_24471 = (state_24523[(10)]);
var inst_24475 = done.call(null,null);
var inst_24476 = cljs.core.async.untap_STAR_.call(null,m,inst_24471);
var state_24523__$1 = (function (){var statearr_24548 = state_24523;
(statearr_24548[(19)] = inst_24475);

return statearr_24548;
})();
var statearr_24549_24621 = state_24523__$1;
(statearr_24549_24621[(2)] = inst_24476);

(statearr_24549_24621[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (32))){
var inst_24466 = (state_24523[(9)]);
var inst_24463 = (state_24523[(20)]);
var inst_24465 = (state_24523[(21)]);
var inst_24464 = (state_24523[(12)]);
var inst_24478 = (state_24523[(2)]);
var inst_24479 = (inst_24466 + (1));
var tmp24544 = inst_24463;
var tmp24545 = inst_24465;
var tmp24546 = inst_24464;
var inst_24463__$1 = tmp24544;
var inst_24464__$1 = tmp24546;
var inst_24465__$1 = tmp24545;
var inst_24466__$1 = inst_24479;
var state_24523__$1 = (function (){var statearr_24550 = state_24523;
(statearr_24550[(9)] = inst_24466__$1);

(statearr_24550[(20)] = inst_24463__$1);

(statearr_24550[(21)] = inst_24465__$1);

(statearr_24550[(22)] = inst_24478);

(statearr_24550[(12)] = inst_24464__$1);

return statearr_24550;
})();
var statearr_24551_24622 = state_24523__$1;
(statearr_24551_24622[(2)] = null);

(statearr_24551_24622[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (40))){
var inst_24491 = (state_24523[(23)]);
var inst_24495 = done.call(null,null);
var inst_24496 = cljs.core.async.untap_STAR_.call(null,m,inst_24491);
var state_24523__$1 = (function (){var statearr_24552 = state_24523;
(statearr_24552[(24)] = inst_24495);

return statearr_24552;
})();
var statearr_24553_24623 = state_24523__$1;
(statearr_24553_24623[(2)] = inst_24496);

(statearr_24553_24623[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (33))){
var inst_24482 = (state_24523[(25)]);
var inst_24484 = cljs.core.chunked_seq_QMARK_.call(null,inst_24482);
var state_24523__$1 = state_24523;
if(inst_24484){
var statearr_24554_24624 = state_24523__$1;
(statearr_24554_24624[(1)] = (36));

} else {
var statearr_24555_24625 = state_24523__$1;
(statearr_24555_24625[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (13))){
var inst_24412 = (state_24523[(26)]);
var inst_24415 = cljs.core.async.close_BANG_.call(null,inst_24412);
var state_24523__$1 = state_24523;
var statearr_24556_24626 = state_24523__$1;
(statearr_24556_24626[(2)] = inst_24415);

(statearr_24556_24626[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (22))){
var inst_24435 = (state_24523[(8)]);
var inst_24438 = cljs.core.async.close_BANG_.call(null,inst_24435);
var state_24523__$1 = state_24523;
var statearr_24557_24627 = state_24523__$1;
(statearr_24557_24627[(2)] = inst_24438);

(statearr_24557_24627[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (36))){
var inst_24482 = (state_24523[(25)]);
var inst_24486 = cljs.core.chunk_first.call(null,inst_24482);
var inst_24487 = cljs.core.chunk_rest.call(null,inst_24482);
var inst_24488 = cljs.core.count.call(null,inst_24486);
var inst_24463 = inst_24487;
var inst_24464 = inst_24486;
var inst_24465 = inst_24488;
var inst_24466 = (0);
var state_24523__$1 = (function (){var statearr_24558 = state_24523;
(statearr_24558[(9)] = inst_24466);

(statearr_24558[(20)] = inst_24463);

(statearr_24558[(21)] = inst_24465);

(statearr_24558[(12)] = inst_24464);

return statearr_24558;
})();
var statearr_24559_24628 = state_24523__$1;
(statearr_24559_24628[(2)] = null);

(statearr_24559_24628[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (41))){
var inst_24482 = (state_24523[(25)]);
var inst_24498 = (state_24523[(2)]);
var inst_24499 = cljs.core.next.call(null,inst_24482);
var inst_24463 = inst_24499;
var inst_24464 = null;
var inst_24465 = (0);
var inst_24466 = (0);
var state_24523__$1 = (function (){var statearr_24560 = state_24523;
(statearr_24560[(27)] = inst_24498);

(statearr_24560[(9)] = inst_24466);

(statearr_24560[(20)] = inst_24463);

(statearr_24560[(21)] = inst_24465);

(statearr_24560[(12)] = inst_24464);

return statearr_24560;
})();
var statearr_24561_24629 = state_24523__$1;
(statearr_24561_24629[(2)] = null);

(statearr_24561_24629[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (43))){
var state_24523__$1 = state_24523;
var statearr_24562_24630 = state_24523__$1;
(statearr_24562_24630[(2)] = null);

(statearr_24562_24630[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (29))){
var inst_24507 = (state_24523[(2)]);
var state_24523__$1 = state_24523;
var statearr_24563_24631 = state_24523__$1;
(statearr_24563_24631[(2)] = inst_24507);

(statearr_24563_24631[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (44))){
var inst_24516 = (state_24523[(2)]);
var state_24523__$1 = (function (){var statearr_24564 = state_24523;
(statearr_24564[(28)] = inst_24516);

return statearr_24564;
})();
var statearr_24565_24632 = state_24523__$1;
(statearr_24565_24632[(2)] = null);

(statearr_24565_24632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (6))){
var inst_24455 = (state_24523[(29)]);
var inst_24454 = cljs.core.deref.call(null,cs);
var inst_24455__$1 = cljs.core.keys.call(null,inst_24454);
var inst_24456 = cljs.core.count.call(null,inst_24455__$1);
var inst_24457 = cljs.core.reset_BANG_.call(null,dctr,inst_24456);
var inst_24462 = cljs.core.seq.call(null,inst_24455__$1);
var inst_24463 = inst_24462;
var inst_24464 = null;
var inst_24465 = (0);
var inst_24466 = (0);
var state_24523__$1 = (function (){var statearr_24566 = state_24523;
(statearr_24566[(30)] = inst_24457);

(statearr_24566[(9)] = inst_24466);

(statearr_24566[(20)] = inst_24463);

(statearr_24566[(21)] = inst_24465);

(statearr_24566[(29)] = inst_24455__$1);

(statearr_24566[(12)] = inst_24464);

return statearr_24566;
})();
var statearr_24567_24633 = state_24523__$1;
(statearr_24567_24633[(2)] = null);

(statearr_24567_24633[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (28))){
var inst_24463 = (state_24523[(20)]);
var inst_24482 = (state_24523[(25)]);
var inst_24482__$1 = cljs.core.seq.call(null,inst_24463);
var state_24523__$1 = (function (){var statearr_24568 = state_24523;
(statearr_24568[(25)] = inst_24482__$1);

return statearr_24568;
})();
if(inst_24482__$1){
var statearr_24569_24634 = state_24523__$1;
(statearr_24569_24634[(1)] = (33));

} else {
var statearr_24570_24635 = state_24523__$1;
(statearr_24570_24635[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (25))){
var inst_24466 = (state_24523[(9)]);
var inst_24465 = (state_24523[(21)]);
var inst_24468 = (inst_24466 < inst_24465);
var inst_24469 = inst_24468;
var state_24523__$1 = state_24523;
if(cljs.core.truth_(inst_24469)){
var statearr_24571_24636 = state_24523__$1;
(statearr_24571_24636[(1)] = (27));

} else {
var statearr_24572_24637 = state_24523__$1;
(statearr_24572_24637[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (34))){
var state_24523__$1 = state_24523;
var statearr_24573_24638 = state_24523__$1;
(statearr_24573_24638[(2)] = null);

(statearr_24573_24638[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (17))){
var state_24523__$1 = state_24523;
var statearr_24574_24639 = state_24523__$1;
(statearr_24574_24639[(2)] = null);

(statearr_24574_24639[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (3))){
var inst_24521 = (state_24523[(2)]);
var state_24523__$1 = state_24523;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24523__$1,inst_24521);
} else {
if((state_val_24524 === (12))){
var inst_24450 = (state_24523[(2)]);
var state_24523__$1 = state_24523;
var statearr_24575_24640 = state_24523__$1;
(statearr_24575_24640[(2)] = inst_24450);

(statearr_24575_24640[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (2))){
var state_24523__$1 = state_24523;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24523__$1,(4),ch);
} else {
if((state_val_24524 === (23))){
var state_24523__$1 = state_24523;
var statearr_24576_24641 = state_24523__$1;
(statearr_24576_24641[(2)] = null);

(statearr_24576_24641[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (35))){
var inst_24505 = (state_24523[(2)]);
var state_24523__$1 = state_24523;
var statearr_24577_24642 = state_24523__$1;
(statearr_24577_24642[(2)] = inst_24505);

(statearr_24577_24642[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (19))){
var inst_24422 = (state_24523[(7)]);
var inst_24426 = cljs.core.chunk_first.call(null,inst_24422);
var inst_24427 = cljs.core.chunk_rest.call(null,inst_24422);
var inst_24428 = cljs.core.count.call(null,inst_24426);
var inst_24400 = inst_24427;
var inst_24401 = inst_24426;
var inst_24402 = inst_24428;
var inst_24403 = (0);
var state_24523__$1 = (function (){var statearr_24578 = state_24523;
(statearr_24578[(14)] = inst_24401);

(statearr_24578[(15)] = inst_24400);

(statearr_24578[(16)] = inst_24402);

(statearr_24578[(17)] = inst_24403);

return statearr_24578;
})();
var statearr_24579_24643 = state_24523__$1;
(statearr_24579_24643[(2)] = null);

(statearr_24579_24643[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (11))){
var inst_24400 = (state_24523[(15)]);
var inst_24422 = (state_24523[(7)]);
var inst_24422__$1 = cljs.core.seq.call(null,inst_24400);
var state_24523__$1 = (function (){var statearr_24580 = state_24523;
(statearr_24580[(7)] = inst_24422__$1);

return statearr_24580;
})();
if(inst_24422__$1){
var statearr_24581_24644 = state_24523__$1;
(statearr_24581_24644[(1)] = (16));

} else {
var statearr_24582_24645 = state_24523__$1;
(statearr_24582_24645[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (9))){
var inst_24452 = (state_24523[(2)]);
var state_24523__$1 = state_24523;
var statearr_24583_24646 = state_24523__$1;
(statearr_24583_24646[(2)] = inst_24452);

(statearr_24583_24646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (5))){
var inst_24398 = cljs.core.deref.call(null,cs);
var inst_24399 = cljs.core.seq.call(null,inst_24398);
var inst_24400 = inst_24399;
var inst_24401 = null;
var inst_24402 = (0);
var inst_24403 = (0);
var state_24523__$1 = (function (){var statearr_24584 = state_24523;
(statearr_24584[(14)] = inst_24401);

(statearr_24584[(15)] = inst_24400);

(statearr_24584[(16)] = inst_24402);

(statearr_24584[(17)] = inst_24403);

return statearr_24584;
})();
var statearr_24585_24647 = state_24523__$1;
(statearr_24585_24647[(2)] = null);

(statearr_24585_24647[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (14))){
var state_24523__$1 = state_24523;
var statearr_24586_24648 = state_24523__$1;
(statearr_24586_24648[(2)] = null);

(statearr_24586_24648[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (45))){
var inst_24513 = (state_24523[(2)]);
var state_24523__$1 = state_24523;
var statearr_24587_24649 = state_24523__$1;
(statearr_24587_24649[(2)] = inst_24513);

(statearr_24587_24649[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (26))){
var inst_24455 = (state_24523[(29)]);
var inst_24509 = (state_24523[(2)]);
var inst_24510 = cljs.core.seq.call(null,inst_24455);
var state_24523__$1 = (function (){var statearr_24588 = state_24523;
(statearr_24588[(31)] = inst_24509);

return statearr_24588;
})();
if(inst_24510){
var statearr_24589_24650 = state_24523__$1;
(statearr_24589_24650[(1)] = (42));

} else {
var statearr_24590_24651 = state_24523__$1;
(statearr_24590_24651[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (16))){
var inst_24422 = (state_24523[(7)]);
var inst_24424 = cljs.core.chunked_seq_QMARK_.call(null,inst_24422);
var state_24523__$1 = state_24523;
if(inst_24424){
var statearr_24591_24652 = state_24523__$1;
(statearr_24591_24652[(1)] = (19));

} else {
var statearr_24592_24653 = state_24523__$1;
(statearr_24592_24653[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (38))){
var inst_24502 = (state_24523[(2)]);
var state_24523__$1 = state_24523;
var statearr_24593_24654 = state_24523__$1;
(statearr_24593_24654[(2)] = inst_24502);

(statearr_24593_24654[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (30))){
var state_24523__$1 = state_24523;
var statearr_24594_24655 = state_24523__$1;
(statearr_24594_24655[(2)] = null);

(statearr_24594_24655[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (10))){
var inst_24401 = (state_24523[(14)]);
var inst_24403 = (state_24523[(17)]);
var inst_24411 = cljs.core._nth.call(null,inst_24401,inst_24403);
var inst_24412 = cljs.core.nth.call(null,inst_24411,(0),null);
var inst_24413 = cljs.core.nth.call(null,inst_24411,(1),null);
var state_24523__$1 = (function (){var statearr_24595 = state_24523;
(statearr_24595[(26)] = inst_24412);

return statearr_24595;
})();
if(cljs.core.truth_(inst_24413)){
var statearr_24596_24656 = state_24523__$1;
(statearr_24596_24656[(1)] = (13));

} else {
var statearr_24597_24657 = state_24523__$1;
(statearr_24597_24657[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (18))){
var inst_24448 = (state_24523[(2)]);
var state_24523__$1 = state_24523;
var statearr_24598_24658 = state_24523__$1;
(statearr_24598_24658[(2)] = inst_24448);

(statearr_24598_24658[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (42))){
var state_24523__$1 = state_24523;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24523__$1,(45),dchan);
} else {
if((state_val_24524 === (37))){
var inst_24482 = (state_24523[(25)]);
var inst_24491 = (state_24523[(23)]);
var inst_24391 = (state_24523[(11)]);
var inst_24491__$1 = cljs.core.first.call(null,inst_24482);
var inst_24492 = cljs.core.async.put_BANG_.call(null,inst_24491__$1,inst_24391,done);
var state_24523__$1 = (function (){var statearr_24599 = state_24523;
(statearr_24599[(23)] = inst_24491__$1);

return statearr_24599;
})();
if(cljs.core.truth_(inst_24492)){
var statearr_24600_24659 = state_24523__$1;
(statearr_24600_24659[(1)] = (39));

} else {
var statearr_24601_24660 = state_24523__$1;
(statearr_24601_24660[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (8))){
var inst_24402 = (state_24523[(16)]);
var inst_24403 = (state_24523[(17)]);
var inst_24405 = (inst_24403 < inst_24402);
var inst_24406 = inst_24405;
var state_24523__$1 = state_24523;
if(cljs.core.truth_(inst_24406)){
var statearr_24602_24661 = state_24523__$1;
(statearr_24602_24661[(1)] = (10));

} else {
var statearr_24603_24662 = state_24523__$1;
(statearr_24603_24662[(1)] = (11));

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
});})(c__23789__auto___24608,cs,m,dchan,dctr,done))
;
return ((function (switch__23694__auto__,c__23789__auto___24608,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23695__auto__ = null;
var cljs$core$async$mult_$_state_machine__23695__auto____0 = (function (){
var statearr_24604 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24604[(0)] = cljs$core$async$mult_$_state_machine__23695__auto__);

(statearr_24604[(1)] = (1));

return statearr_24604;
});
var cljs$core$async$mult_$_state_machine__23695__auto____1 = (function (state_24523){
while(true){
var ret_value__23696__auto__ = (function (){try{while(true){
var result__23697__auto__ = switch__23694__auto__.call(null,state_24523);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23697__auto__;
}
break;
}
}catch (e24605){if((e24605 instanceof Object)){
var ex__23698__auto__ = e24605;
var statearr_24606_24663 = state_24523;
(statearr_24606_24663[(5)] = ex__23698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24605;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24664 = state_24523;
state_24523 = G__24664;
continue;
} else {
return ret_value__23696__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23695__auto__ = function(state_24523){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23695__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23695__auto____1.call(this,state_24523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23695__auto____0;
cljs$core$async$mult_$_state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23695__auto____1;
return cljs$core$async$mult_$_state_machine__23695__auto__;
})()
;})(switch__23694__auto__,c__23789__auto___24608,cs,m,dchan,dctr,done))
})();
var state__23791__auto__ = (function (){var statearr_24607 = f__23790__auto__.call(null);
(statearr_24607[(6)] = c__23789__auto___24608);

return statearr_24607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23791__auto__);
});})(c__23789__auto___24608,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__24666 = arguments.length;
switch (G__24666) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___24678 = arguments.length;
var i__4731__auto___24679 = (0);
while(true){
if((i__4731__auto___24679 < len__4730__auto___24678)){
args__4736__auto__.push((arguments[i__4731__auto___24679]));

var G__24680 = (i__4731__auto___24679 + (1));
i__4731__auto___24679 = G__24680;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24672){
var map__24673 = p__24672;
var map__24673__$1 = (((((!((map__24673 == null))))?(((((map__24673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24673):map__24673);
var opts = map__24673__$1;
var statearr_24675_24681 = state;
(statearr_24675_24681[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__24673,map__24673__$1,opts){
return (function (val){
var statearr_24676_24682 = state;
(statearr_24676_24682[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24673,map__24673__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_24677_24683 = state;
(statearr_24677_24683[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24668){
var G__24669 = cljs.core.first.call(null,seq24668);
var seq24668__$1 = cljs.core.next.call(null,seq24668);
var G__24670 = cljs.core.first.call(null,seq24668__$1);
var seq24668__$2 = cljs.core.next.call(null,seq24668__$1);
var G__24671 = cljs.core.first.call(null,seq24668__$2);
var seq24668__$3 = cljs.core.next.call(null,seq24668__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24669,G__24670,G__24671,seq24668__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24684 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24684 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24685){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta24685 = meta24685;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24686,meta24685__$1){
var self__ = this;
var _24686__$1 = this;
return (new cljs.core.async.t_cljs$core$async24684(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24685__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24684.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24686){
var self__ = this;
var _24686__$1 = this;
return self__.meta24685;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24684.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24684.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24684.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24684.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24684.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24684.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24684.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24684.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24684.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24685","meta24685",-1209493178,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24684.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24684.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24684";

cljs.core.async.t_cljs$core$async24684.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24684");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24684.
 */
cljs.core.async.__GT_t_cljs$core$async24684 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24684(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24685){
return (new cljs.core.async.t_cljs$core$async24684(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24685));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24684(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23789__auto___24848 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23789__auto___24848,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23790__auto__ = (function (){var switch__23694__auto__ = ((function (c__23789__auto___24848,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24788){
var state_val_24789 = (state_24788[(1)]);
if((state_val_24789 === (7))){
var inst_24703 = (state_24788[(2)]);
var state_24788__$1 = state_24788;
var statearr_24790_24849 = state_24788__$1;
(statearr_24790_24849[(2)] = inst_24703);

(statearr_24790_24849[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (20))){
var inst_24715 = (state_24788[(7)]);
var state_24788__$1 = state_24788;
var statearr_24791_24850 = state_24788__$1;
(statearr_24791_24850[(2)] = inst_24715);

(statearr_24791_24850[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (27))){
var state_24788__$1 = state_24788;
var statearr_24792_24851 = state_24788__$1;
(statearr_24792_24851[(2)] = null);

(statearr_24792_24851[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (1))){
var inst_24690 = (state_24788[(8)]);
var inst_24690__$1 = calc_state.call(null);
var inst_24692 = (inst_24690__$1 == null);
var inst_24693 = cljs.core.not.call(null,inst_24692);
var state_24788__$1 = (function (){var statearr_24793 = state_24788;
(statearr_24793[(8)] = inst_24690__$1);

return statearr_24793;
})();
if(inst_24693){
var statearr_24794_24852 = state_24788__$1;
(statearr_24794_24852[(1)] = (2));

} else {
var statearr_24795_24853 = state_24788__$1;
(statearr_24795_24853[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (24))){
var inst_24762 = (state_24788[(9)]);
var inst_24748 = (state_24788[(10)]);
var inst_24739 = (state_24788[(11)]);
var inst_24762__$1 = inst_24739.call(null,inst_24748);
var state_24788__$1 = (function (){var statearr_24796 = state_24788;
(statearr_24796[(9)] = inst_24762__$1);

return statearr_24796;
})();
if(cljs.core.truth_(inst_24762__$1)){
var statearr_24797_24854 = state_24788__$1;
(statearr_24797_24854[(1)] = (29));

} else {
var statearr_24798_24855 = state_24788__$1;
(statearr_24798_24855[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (4))){
var inst_24706 = (state_24788[(2)]);
var state_24788__$1 = state_24788;
if(cljs.core.truth_(inst_24706)){
var statearr_24799_24856 = state_24788__$1;
(statearr_24799_24856[(1)] = (8));

} else {
var statearr_24800_24857 = state_24788__$1;
(statearr_24800_24857[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (15))){
var inst_24733 = (state_24788[(2)]);
var state_24788__$1 = state_24788;
if(cljs.core.truth_(inst_24733)){
var statearr_24801_24858 = state_24788__$1;
(statearr_24801_24858[(1)] = (19));

} else {
var statearr_24802_24859 = state_24788__$1;
(statearr_24802_24859[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (21))){
var inst_24738 = (state_24788[(12)]);
var inst_24738__$1 = (state_24788[(2)]);
var inst_24739 = cljs.core.get.call(null,inst_24738__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24740 = cljs.core.get.call(null,inst_24738__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24741 = cljs.core.get.call(null,inst_24738__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24788__$1 = (function (){var statearr_24803 = state_24788;
(statearr_24803[(12)] = inst_24738__$1);

(statearr_24803[(11)] = inst_24739);

(statearr_24803[(13)] = inst_24740);

return statearr_24803;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24788__$1,(22),inst_24741);
} else {
if((state_val_24789 === (31))){
var inst_24770 = (state_24788[(2)]);
var state_24788__$1 = state_24788;
if(cljs.core.truth_(inst_24770)){
var statearr_24804_24860 = state_24788__$1;
(statearr_24804_24860[(1)] = (32));

} else {
var statearr_24805_24861 = state_24788__$1;
(statearr_24805_24861[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (32))){
var inst_24747 = (state_24788[(14)]);
var state_24788__$1 = state_24788;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24788__$1,(35),out,inst_24747);
} else {
if((state_val_24789 === (33))){
var inst_24738 = (state_24788[(12)]);
var inst_24715 = inst_24738;
var state_24788__$1 = (function (){var statearr_24806 = state_24788;
(statearr_24806[(7)] = inst_24715);

return statearr_24806;
})();
var statearr_24807_24862 = state_24788__$1;
(statearr_24807_24862[(2)] = null);

(statearr_24807_24862[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (13))){
var inst_24715 = (state_24788[(7)]);
var inst_24722 = inst_24715.cljs$lang$protocol_mask$partition0$;
var inst_24723 = (inst_24722 & (64));
var inst_24724 = inst_24715.cljs$core$ISeq$;
var inst_24725 = (cljs.core.PROTOCOL_SENTINEL === inst_24724);
var inst_24726 = ((inst_24723) || (inst_24725));
var state_24788__$1 = state_24788;
if(cljs.core.truth_(inst_24726)){
var statearr_24808_24863 = state_24788__$1;
(statearr_24808_24863[(1)] = (16));

} else {
var statearr_24809_24864 = state_24788__$1;
(statearr_24809_24864[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (22))){
var inst_24747 = (state_24788[(14)]);
var inst_24748 = (state_24788[(10)]);
var inst_24746 = (state_24788[(2)]);
var inst_24747__$1 = cljs.core.nth.call(null,inst_24746,(0),null);
var inst_24748__$1 = cljs.core.nth.call(null,inst_24746,(1),null);
var inst_24749 = (inst_24747__$1 == null);
var inst_24750 = cljs.core._EQ_.call(null,inst_24748__$1,change);
var inst_24751 = ((inst_24749) || (inst_24750));
var state_24788__$1 = (function (){var statearr_24810 = state_24788;
(statearr_24810[(14)] = inst_24747__$1);

(statearr_24810[(10)] = inst_24748__$1);

return statearr_24810;
})();
if(cljs.core.truth_(inst_24751)){
var statearr_24811_24865 = state_24788__$1;
(statearr_24811_24865[(1)] = (23));

} else {
var statearr_24812_24866 = state_24788__$1;
(statearr_24812_24866[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (36))){
var inst_24738 = (state_24788[(12)]);
var inst_24715 = inst_24738;
var state_24788__$1 = (function (){var statearr_24813 = state_24788;
(statearr_24813[(7)] = inst_24715);

return statearr_24813;
})();
var statearr_24814_24867 = state_24788__$1;
(statearr_24814_24867[(2)] = null);

(statearr_24814_24867[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (29))){
var inst_24762 = (state_24788[(9)]);
var state_24788__$1 = state_24788;
var statearr_24815_24868 = state_24788__$1;
(statearr_24815_24868[(2)] = inst_24762);

(statearr_24815_24868[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (6))){
var state_24788__$1 = state_24788;
var statearr_24816_24869 = state_24788__$1;
(statearr_24816_24869[(2)] = false);

(statearr_24816_24869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (28))){
var inst_24758 = (state_24788[(2)]);
var inst_24759 = calc_state.call(null);
var inst_24715 = inst_24759;
var state_24788__$1 = (function (){var statearr_24817 = state_24788;
(statearr_24817[(15)] = inst_24758);

(statearr_24817[(7)] = inst_24715);

return statearr_24817;
})();
var statearr_24818_24870 = state_24788__$1;
(statearr_24818_24870[(2)] = null);

(statearr_24818_24870[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (25))){
var inst_24784 = (state_24788[(2)]);
var state_24788__$1 = state_24788;
var statearr_24819_24871 = state_24788__$1;
(statearr_24819_24871[(2)] = inst_24784);

(statearr_24819_24871[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (34))){
var inst_24782 = (state_24788[(2)]);
var state_24788__$1 = state_24788;
var statearr_24820_24872 = state_24788__$1;
(statearr_24820_24872[(2)] = inst_24782);

(statearr_24820_24872[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (17))){
var state_24788__$1 = state_24788;
var statearr_24821_24873 = state_24788__$1;
(statearr_24821_24873[(2)] = false);

(statearr_24821_24873[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (3))){
var state_24788__$1 = state_24788;
var statearr_24822_24874 = state_24788__$1;
(statearr_24822_24874[(2)] = false);

(statearr_24822_24874[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (12))){
var inst_24786 = (state_24788[(2)]);
var state_24788__$1 = state_24788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24788__$1,inst_24786);
} else {
if((state_val_24789 === (2))){
var inst_24690 = (state_24788[(8)]);
var inst_24695 = inst_24690.cljs$lang$protocol_mask$partition0$;
var inst_24696 = (inst_24695 & (64));
var inst_24697 = inst_24690.cljs$core$ISeq$;
var inst_24698 = (cljs.core.PROTOCOL_SENTINEL === inst_24697);
var inst_24699 = ((inst_24696) || (inst_24698));
var state_24788__$1 = state_24788;
if(cljs.core.truth_(inst_24699)){
var statearr_24823_24875 = state_24788__$1;
(statearr_24823_24875[(1)] = (5));

} else {
var statearr_24824_24876 = state_24788__$1;
(statearr_24824_24876[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (23))){
var inst_24747 = (state_24788[(14)]);
var inst_24753 = (inst_24747 == null);
var state_24788__$1 = state_24788;
if(cljs.core.truth_(inst_24753)){
var statearr_24825_24877 = state_24788__$1;
(statearr_24825_24877[(1)] = (26));

} else {
var statearr_24826_24878 = state_24788__$1;
(statearr_24826_24878[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (35))){
var inst_24773 = (state_24788[(2)]);
var state_24788__$1 = state_24788;
if(cljs.core.truth_(inst_24773)){
var statearr_24827_24879 = state_24788__$1;
(statearr_24827_24879[(1)] = (36));

} else {
var statearr_24828_24880 = state_24788__$1;
(statearr_24828_24880[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (19))){
var inst_24715 = (state_24788[(7)]);
var inst_24735 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24715);
var state_24788__$1 = state_24788;
var statearr_24829_24881 = state_24788__$1;
(statearr_24829_24881[(2)] = inst_24735);

(statearr_24829_24881[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (11))){
var inst_24715 = (state_24788[(7)]);
var inst_24719 = (inst_24715 == null);
var inst_24720 = cljs.core.not.call(null,inst_24719);
var state_24788__$1 = state_24788;
if(inst_24720){
var statearr_24830_24882 = state_24788__$1;
(statearr_24830_24882[(1)] = (13));

} else {
var statearr_24831_24883 = state_24788__$1;
(statearr_24831_24883[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (9))){
var inst_24690 = (state_24788[(8)]);
var state_24788__$1 = state_24788;
var statearr_24832_24884 = state_24788__$1;
(statearr_24832_24884[(2)] = inst_24690);

(statearr_24832_24884[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (5))){
var state_24788__$1 = state_24788;
var statearr_24833_24885 = state_24788__$1;
(statearr_24833_24885[(2)] = true);

(statearr_24833_24885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (14))){
var state_24788__$1 = state_24788;
var statearr_24834_24886 = state_24788__$1;
(statearr_24834_24886[(2)] = false);

(statearr_24834_24886[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (26))){
var inst_24748 = (state_24788[(10)]);
var inst_24755 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24748);
var state_24788__$1 = state_24788;
var statearr_24835_24887 = state_24788__$1;
(statearr_24835_24887[(2)] = inst_24755);

(statearr_24835_24887[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (16))){
var state_24788__$1 = state_24788;
var statearr_24836_24888 = state_24788__$1;
(statearr_24836_24888[(2)] = true);

(statearr_24836_24888[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (38))){
var inst_24778 = (state_24788[(2)]);
var state_24788__$1 = state_24788;
var statearr_24837_24889 = state_24788__$1;
(statearr_24837_24889[(2)] = inst_24778);

(statearr_24837_24889[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (30))){
var inst_24748 = (state_24788[(10)]);
var inst_24739 = (state_24788[(11)]);
var inst_24740 = (state_24788[(13)]);
var inst_24765 = cljs.core.empty_QMARK_.call(null,inst_24739);
var inst_24766 = inst_24740.call(null,inst_24748);
var inst_24767 = cljs.core.not.call(null,inst_24766);
var inst_24768 = ((inst_24765) && (inst_24767));
var state_24788__$1 = state_24788;
var statearr_24838_24890 = state_24788__$1;
(statearr_24838_24890[(2)] = inst_24768);

(statearr_24838_24890[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (10))){
var inst_24690 = (state_24788[(8)]);
var inst_24711 = (state_24788[(2)]);
var inst_24712 = cljs.core.get.call(null,inst_24711,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24713 = cljs.core.get.call(null,inst_24711,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24714 = cljs.core.get.call(null,inst_24711,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24715 = inst_24690;
var state_24788__$1 = (function (){var statearr_24839 = state_24788;
(statearr_24839[(16)] = inst_24713);

(statearr_24839[(7)] = inst_24715);

(statearr_24839[(17)] = inst_24712);

(statearr_24839[(18)] = inst_24714);

return statearr_24839;
})();
var statearr_24840_24891 = state_24788__$1;
(statearr_24840_24891[(2)] = null);

(statearr_24840_24891[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (18))){
var inst_24730 = (state_24788[(2)]);
var state_24788__$1 = state_24788;
var statearr_24841_24892 = state_24788__$1;
(statearr_24841_24892[(2)] = inst_24730);

(statearr_24841_24892[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (37))){
var state_24788__$1 = state_24788;
var statearr_24842_24893 = state_24788__$1;
(statearr_24842_24893[(2)] = null);

(statearr_24842_24893[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (8))){
var inst_24690 = (state_24788[(8)]);
var inst_24708 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24690);
var state_24788__$1 = state_24788;
var statearr_24843_24894 = state_24788__$1;
(statearr_24843_24894[(2)] = inst_24708);

(statearr_24843_24894[(1)] = (10));


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
});})(c__23789__auto___24848,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23694__auto__,c__23789__auto___24848,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23695__auto__ = null;
var cljs$core$async$mix_$_state_machine__23695__auto____0 = (function (){
var statearr_24844 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24844[(0)] = cljs$core$async$mix_$_state_machine__23695__auto__);

(statearr_24844[(1)] = (1));

return statearr_24844;
});
var cljs$core$async$mix_$_state_machine__23695__auto____1 = (function (state_24788){
while(true){
var ret_value__23696__auto__ = (function (){try{while(true){
var result__23697__auto__ = switch__23694__auto__.call(null,state_24788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23697__auto__;
}
break;
}
}catch (e24845){if((e24845 instanceof Object)){
var ex__23698__auto__ = e24845;
var statearr_24846_24895 = state_24788;
(statearr_24846_24895[(5)] = ex__23698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24845;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24896 = state_24788;
state_24788 = G__24896;
continue;
} else {
return ret_value__23696__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23695__auto__ = function(state_24788){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23695__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23695__auto____1.call(this,state_24788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23695__auto____0;
cljs$core$async$mix_$_state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23695__auto____1;
return cljs$core$async$mix_$_state_machine__23695__auto__;
})()
;})(switch__23694__auto__,c__23789__auto___24848,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23791__auto__ = (function (){var statearr_24847 = f__23790__auto__.call(null);
(statearr_24847[(6)] = c__23789__auto___24848);

return statearr_24847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23791__auto__);
});})(c__23789__auto___24848,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__24898 = arguments.length;
switch (G__24898) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__24902 = arguments.length;
switch (G__24902) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__24900_SHARP_){
if(cljs.core.truth_(p1__24900_SHARP_.call(null,topic))){
return p1__24900_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24900_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24903 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24903 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24904){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24904 = meta24904;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24903.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24905,meta24904__$1){
var self__ = this;
var _24905__$1 = this;
return (new cljs.core.async.t_cljs$core$async24903(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24904__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24903.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24905){
var self__ = this;
var _24905__$1 = this;
return self__.meta24904;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24903.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24903.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24903.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24903.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24903.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24903.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24903.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24903.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24904","meta24904",1327938962,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24903.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24903.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24903";

cljs.core.async.t_cljs$core$async24903.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24903");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24903.
 */
cljs.core.async.__GT_t_cljs$core$async24903 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24903(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24904){
return (new cljs.core.async.t_cljs$core$async24903(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24904));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24903(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23789__auto___25023 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23789__auto___25023,mults,ensure_mult,p){
return (function (){
var f__23790__auto__ = (function (){var switch__23694__auto__ = ((function (c__23789__auto___25023,mults,ensure_mult,p){
return (function (state_24977){
var state_val_24978 = (state_24977[(1)]);
if((state_val_24978 === (7))){
var inst_24973 = (state_24977[(2)]);
var state_24977__$1 = state_24977;
var statearr_24979_25024 = state_24977__$1;
(statearr_24979_25024[(2)] = inst_24973);

(statearr_24979_25024[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (20))){
var state_24977__$1 = state_24977;
var statearr_24980_25025 = state_24977__$1;
(statearr_24980_25025[(2)] = null);

(statearr_24980_25025[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (1))){
var state_24977__$1 = state_24977;
var statearr_24981_25026 = state_24977__$1;
(statearr_24981_25026[(2)] = null);

(statearr_24981_25026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (24))){
var inst_24956 = (state_24977[(7)]);
var inst_24965 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24956);
var state_24977__$1 = state_24977;
var statearr_24982_25027 = state_24977__$1;
(statearr_24982_25027[(2)] = inst_24965);

(statearr_24982_25027[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (4))){
var inst_24908 = (state_24977[(8)]);
var inst_24908__$1 = (state_24977[(2)]);
var inst_24909 = (inst_24908__$1 == null);
var state_24977__$1 = (function (){var statearr_24983 = state_24977;
(statearr_24983[(8)] = inst_24908__$1);

return statearr_24983;
})();
if(cljs.core.truth_(inst_24909)){
var statearr_24984_25028 = state_24977__$1;
(statearr_24984_25028[(1)] = (5));

} else {
var statearr_24985_25029 = state_24977__$1;
(statearr_24985_25029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (15))){
var inst_24950 = (state_24977[(2)]);
var state_24977__$1 = state_24977;
var statearr_24986_25030 = state_24977__$1;
(statearr_24986_25030[(2)] = inst_24950);

(statearr_24986_25030[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (21))){
var inst_24970 = (state_24977[(2)]);
var state_24977__$1 = (function (){var statearr_24987 = state_24977;
(statearr_24987[(9)] = inst_24970);

return statearr_24987;
})();
var statearr_24988_25031 = state_24977__$1;
(statearr_24988_25031[(2)] = null);

(statearr_24988_25031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (13))){
var inst_24932 = (state_24977[(10)]);
var inst_24934 = cljs.core.chunked_seq_QMARK_.call(null,inst_24932);
var state_24977__$1 = state_24977;
if(inst_24934){
var statearr_24989_25032 = state_24977__$1;
(statearr_24989_25032[(1)] = (16));

} else {
var statearr_24990_25033 = state_24977__$1;
(statearr_24990_25033[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (22))){
var inst_24962 = (state_24977[(2)]);
var state_24977__$1 = state_24977;
if(cljs.core.truth_(inst_24962)){
var statearr_24991_25034 = state_24977__$1;
(statearr_24991_25034[(1)] = (23));

} else {
var statearr_24992_25035 = state_24977__$1;
(statearr_24992_25035[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (6))){
var inst_24908 = (state_24977[(8)]);
var inst_24958 = (state_24977[(11)]);
var inst_24956 = (state_24977[(7)]);
var inst_24956__$1 = topic_fn.call(null,inst_24908);
var inst_24957 = cljs.core.deref.call(null,mults);
var inst_24958__$1 = cljs.core.get.call(null,inst_24957,inst_24956__$1);
var state_24977__$1 = (function (){var statearr_24993 = state_24977;
(statearr_24993[(11)] = inst_24958__$1);

(statearr_24993[(7)] = inst_24956__$1);

return statearr_24993;
})();
if(cljs.core.truth_(inst_24958__$1)){
var statearr_24994_25036 = state_24977__$1;
(statearr_24994_25036[(1)] = (19));

} else {
var statearr_24995_25037 = state_24977__$1;
(statearr_24995_25037[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (25))){
var inst_24967 = (state_24977[(2)]);
var state_24977__$1 = state_24977;
var statearr_24996_25038 = state_24977__$1;
(statearr_24996_25038[(2)] = inst_24967);

(statearr_24996_25038[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (17))){
var inst_24932 = (state_24977[(10)]);
var inst_24941 = cljs.core.first.call(null,inst_24932);
var inst_24942 = cljs.core.async.muxch_STAR_.call(null,inst_24941);
var inst_24943 = cljs.core.async.close_BANG_.call(null,inst_24942);
var inst_24944 = cljs.core.next.call(null,inst_24932);
var inst_24918 = inst_24944;
var inst_24919 = null;
var inst_24920 = (0);
var inst_24921 = (0);
var state_24977__$1 = (function (){var statearr_24997 = state_24977;
(statearr_24997[(12)] = inst_24943);

(statearr_24997[(13)] = inst_24918);

(statearr_24997[(14)] = inst_24919);

(statearr_24997[(15)] = inst_24921);

(statearr_24997[(16)] = inst_24920);

return statearr_24997;
})();
var statearr_24998_25039 = state_24977__$1;
(statearr_24998_25039[(2)] = null);

(statearr_24998_25039[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (3))){
var inst_24975 = (state_24977[(2)]);
var state_24977__$1 = state_24977;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24977__$1,inst_24975);
} else {
if((state_val_24978 === (12))){
var inst_24952 = (state_24977[(2)]);
var state_24977__$1 = state_24977;
var statearr_24999_25040 = state_24977__$1;
(statearr_24999_25040[(2)] = inst_24952);

(statearr_24999_25040[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (2))){
var state_24977__$1 = state_24977;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24977__$1,(4),ch);
} else {
if((state_val_24978 === (23))){
var state_24977__$1 = state_24977;
var statearr_25000_25041 = state_24977__$1;
(statearr_25000_25041[(2)] = null);

(statearr_25000_25041[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (19))){
var inst_24908 = (state_24977[(8)]);
var inst_24958 = (state_24977[(11)]);
var inst_24960 = cljs.core.async.muxch_STAR_.call(null,inst_24958);
var state_24977__$1 = state_24977;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24977__$1,(22),inst_24960,inst_24908);
} else {
if((state_val_24978 === (11))){
var inst_24918 = (state_24977[(13)]);
var inst_24932 = (state_24977[(10)]);
var inst_24932__$1 = cljs.core.seq.call(null,inst_24918);
var state_24977__$1 = (function (){var statearr_25001 = state_24977;
(statearr_25001[(10)] = inst_24932__$1);

return statearr_25001;
})();
if(inst_24932__$1){
var statearr_25002_25042 = state_24977__$1;
(statearr_25002_25042[(1)] = (13));

} else {
var statearr_25003_25043 = state_24977__$1;
(statearr_25003_25043[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (9))){
var inst_24954 = (state_24977[(2)]);
var state_24977__$1 = state_24977;
var statearr_25004_25044 = state_24977__$1;
(statearr_25004_25044[(2)] = inst_24954);

(statearr_25004_25044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (5))){
var inst_24915 = cljs.core.deref.call(null,mults);
var inst_24916 = cljs.core.vals.call(null,inst_24915);
var inst_24917 = cljs.core.seq.call(null,inst_24916);
var inst_24918 = inst_24917;
var inst_24919 = null;
var inst_24920 = (0);
var inst_24921 = (0);
var state_24977__$1 = (function (){var statearr_25005 = state_24977;
(statearr_25005[(13)] = inst_24918);

(statearr_25005[(14)] = inst_24919);

(statearr_25005[(15)] = inst_24921);

(statearr_25005[(16)] = inst_24920);

return statearr_25005;
})();
var statearr_25006_25045 = state_24977__$1;
(statearr_25006_25045[(2)] = null);

(statearr_25006_25045[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (14))){
var state_24977__$1 = state_24977;
var statearr_25010_25046 = state_24977__$1;
(statearr_25010_25046[(2)] = null);

(statearr_25010_25046[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (16))){
var inst_24932 = (state_24977[(10)]);
var inst_24936 = cljs.core.chunk_first.call(null,inst_24932);
var inst_24937 = cljs.core.chunk_rest.call(null,inst_24932);
var inst_24938 = cljs.core.count.call(null,inst_24936);
var inst_24918 = inst_24937;
var inst_24919 = inst_24936;
var inst_24920 = inst_24938;
var inst_24921 = (0);
var state_24977__$1 = (function (){var statearr_25011 = state_24977;
(statearr_25011[(13)] = inst_24918);

(statearr_25011[(14)] = inst_24919);

(statearr_25011[(15)] = inst_24921);

(statearr_25011[(16)] = inst_24920);

return statearr_25011;
})();
var statearr_25012_25047 = state_24977__$1;
(statearr_25012_25047[(2)] = null);

(statearr_25012_25047[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (10))){
var inst_24918 = (state_24977[(13)]);
var inst_24919 = (state_24977[(14)]);
var inst_24921 = (state_24977[(15)]);
var inst_24920 = (state_24977[(16)]);
var inst_24926 = cljs.core._nth.call(null,inst_24919,inst_24921);
var inst_24927 = cljs.core.async.muxch_STAR_.call(null,inst_24926);
var inst_24928 = cljs.core.async.close_BANG_.call(null,inst_24927);
var inst_24929 = (inst_24921 + (1));
var tmp25007 = inst_24918;
var tmp25008 = inst_24919;
var tmp25009 = inst_24920;
var inst_24918__$1 = tmp25007;
var inst_24919__$1 = tmp25008;
var inst_24920__$1 = tmp25009;
var inst_24921__$1 = inst_24929;
var state_24977__$1 = (function (){var statearr_25013 = state_24977;
(statearr_25013[(13)] = inst_24918__$1);

(statearr_25013[(17)] = inst_24928);

(statearr_25013[(14)] = inst_24919__$1);

(statearr_25013[(15)] = inst_24921__$1);

(statearr_25013[(16)] = inst_24920__$1);

return statearr_25013;
})();
var statearr_25014_25048 = state_24977__$1;
(statearr_25014_25048[(2)] = null);

(statearr_25014_25048[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (18))){
var inst_24947 = (state_24977[(2)]);
var state_24977__$1 = state_24977;
var statearr_25015_25049 = state_24977__$1;
(statearr_25015_25049[(2)] = inst_24947);

(statearr_25015_25049[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (8))){
var inst_24921 = (state_24977[(15)]);
var inst_24920 = (state_24977[(16)]);
var inst_24923 = (inst_24921 < inst_24920);
var inst_24924 = inst_24923;
var state_24977__$1 = state_24977;
if(cljs.core.truth_(inst_24924)){
var statearr_25016_25050 = state_24977__$1;
(statearr_25016_25050[(1)] = (10));

} else {
var statearr_25017_25051 = state_24977__$1;
(statearr_25017_25051[(1)] = (11));

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
});})(c__23789__auto___25023,mults,ensure_mult,p))
;
return ((function (switch__23694__auto__,c__23789__auto___25023,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23695__auto__ = null;
var cljs$core$async$state_machine__23695__auto____0 = (function (){
var statearr_25018 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25018[(0)] = cljs$core$async$state_machine__23695__auto__);

(statearr_25018[(1)] = (1));

return statearr_25018;
});
var cljs$core$async$state_machine__23695__auto____1 = (function (state_24977){
while(true){
var ret_value__23696__auto__ = (function (){try{while(true){
var result__23697__auto__ = switch__23694__auto__.call(null,state_24977);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23697__auto__;
}
break;
}
}catch (e25019){if((e25019 instanceof Object)){
var ex__23698__auto__ = e25019;
var statearr_25020_25052 = state_24977;
(statearr_25020_25052[(5)] = ex__23698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25019;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25053 = state_24977;
state_24977 = G__25053;
continue;
} else {
return ret_value__23696__auto__;
}
break;
}
});
cljs$core$async$state_machine__23695__auto__ = function(state_24977){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23695__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23695__auto____1.call(this,state_24977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23695__auto____0;
cljs$core$async$state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23695__auto____1;
return cljs$core$async$state_machine__23695__auto__;
})()
;})(switch__23694__auto__,c__23789__auto___25023,mults,ensure_mult,p))
})();
var state__23791__auto__ = (function (){var statearr_25021 = f__23790__auto__.call(null);
(statearr_25021[(6)] = c__23789__auto___25023);

return statearr_25021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23791__auto__);
});})(c__23789__auto___25023,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__25055 = arguments.length;
switch (G__25055) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__25058 = arguments.length;
switch (G__25058) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__25061 = arguments.length;
switch (G__25061) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__23789__auto___25128 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23789__auto___25128,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23790__auto__ = (function (){var switch__23694__auto__ = ((function (c__23789__auto___25128,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25100){
var state_val_25101 = (state_25100[(1)]);
if((state_val_25101 === (7))){
var state_25100__$1 = state_25100;
var statearr_25102_25129 = state_25100__$1;
(statearr_25102_25129[(2)] = null);

(statearr_25102_25129[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25101 === (1))){
var state_25100__$1 = state_25100;
var statearr_25103_25130 = state_25100__$1;
(statearr_25103_25130[(2)] = null);

(statearr_25103_25130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25101 === (4))){
var inst_25064 = (state_25100[(7)]);
var inst_25066 = (inst_25064 < cnt);
var state_25100__$1 = state_25100;
if(cljs.core.truth_(inst_25066)){
var statearr_25104_25131 = state_25100__$1;
(statearr_25104_25131[(1)] = (6));

} else {
var statearr_25105_25132 = state_25100__$1;
(statearr_25105_25132[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25101 === (15))){
var inst_25096 = (state_25100[(2)]);
var state_25100__$1 = state_25100;
var statearr_25106_25133 = state_25100__$1;
(statearr_25106_25133[(2)] = inst_25096);

(statearr_25106_25133[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25101 === (13))){
var inst_25089 = cljs.core.async.close_BANG_.call(null,out);
var state_25100__$1 = state_25100;
var statearr_25107_25134 = state_25100__$1;
(statearr_25107_25134[(2)] = inst_25089);

(statearr_25107_25134[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25101 === (6))){
var state_25100__$1 = state_25100;
var statearr_25108_25135 = state_25100__$1;
(statearr_25108_25135[(2)] = null);

(statearr_25108_25135[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25101 === (3))){
var inst_25098 = (state_25100[(2)]);
var state_25100__$1 = state_25100;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25100__$1,inst_25098);
} else {
if((state_val_25101 === (12))){
var inst_25086 = (state_25100[(8)]);
var inst_25086__$1 = (state_25100[(2)]);
var inst_25087 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25086__$1);
var state_25100__$1 = (function (){var statearr_25109 = state_25100;
(statearr_25109[(8)] = inst_25086__$1);

return statearr_25109;
})();
if(cljs.core.truth_(inst_25087)){
var statearr_25110_25136 = state_25100__$1;
(statearr_25110_25136[(1)] = (13));

} else {
var statearr_25111_25137 = state_25100__$1;
(statearr_25111_25137[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25101 === (2))){
var inst_25063 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25064 = (0);
var state_25100__$1 = (function (){var statearr_25112 = state_25100;
(statearr_25112[(7)] = inst_25064);

(statearr_25112[(9)] = inst_25063);

return statearr_25112;
})();
var statearr_25113_25138 = state_25100__$1;
(statearr_25113_25138[(2)] = null);

(statearr_25113_25138[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25101 === (11))){
var inst_25064 = (state_25100[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25100,(10),Object,null,(9));
var inst_25073 = chs__$1.call(null,inst_25064);
var inst_25074 = done.call(null,inst_25064);
var inst_25075 = cljs.core.async.take_BANG_.call(null,inst_25073,inst_25074);
var state_25100__$1 = state_25100;
var statearr_25114_25139 = state_25100__$1;
(statearr_25114_25139[(2)] = inst_25075);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25100__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25101 === (9))){
var inst_25064 = (state_25100[(7)]);
var inst_25077 = (state_25100[(2)]);
var inst_25078 = (inst_25064 + (1));
var inst_25064__$1 = inst_25078;
var state_25100__$1 = (function (){var statearr_25115 = state_25100;
(statearr_25115[(7)] = inst_25064__$1);

(statearr_25115[(10)] = inst_25077);

return statearr_25115;
})();
var statearr_25116_25140 = state_25100__$1;
(statearr_25116_25140[(2)] = null);

(statearr_25116_25140[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25101 === (5))){
var inst_25084 = (state_25100[(2)]);
var state_25100__$1 = (function (){var statearr_25117 = state_25100;
(statearr_25117[(11)] = inst_25084);

return statearr_25117;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25100__$1,(12),dchan);
} else {
if((state_val_25101 === (14))){
var inst_25086 = (state_25100[(8)]);
var inst_25091 = cljs.core.apply.call(null,f,inst_25086);
var state_25100__$1 = state_25100;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25100__$1,(16),out,inst_25091);
} else {
if((state_val_25101 === (16))){
var inst_25093 = (state_25100[(2)]);
var state_25100__$1 = (function (){var statearr_25118 = state_25100;
(statearr_25118[(12)] = inst_25093);

return statearr_25118;
})();
var statearr_25119_25141 = state_25100__$1;
(statearr_25119_25141[(2)] = null);

(statearr_25119_25141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25101 === (10))){
var inst_25068 = (state_25100[(2)]);
var inst_25069 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25100__$1 = (function (){var statearr_25120 = state_25100;
(statearr_25120[(13)] = inst_25068);

return statearr_25120;
})();
var statearr_25121_25142 = state_25100__$1;
(statearr_25121_25142[(2)] = inst_25069);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25100__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25101 === (8))){
var inst_25082 = (state_25100[(2)]);
var state_25100__$1 = state_25100;
var statearr_25122_25143 = state_25100__$1;
(statearr_25122_25143[(2)] = inst_25082);

(statearr_25122_25143[(1)] = (5));


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
});})(c__23789__auto___25128,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23694__auto__,c__23789__auto___25128,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23695__auto__ = null;
var cljs$core$async$state_machine__23695__auto____0 = (function (){
var statearr_25123 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25123[(0)] = cljs$core$async$state_machine__23695__auto__);

(statearr_25123[(1)] = (1));

return statearr_25123;
});
var cljs$core$async$state_machine__23695__auto____1 = (function (state_25100){
while(true){
var ret_value__23696__auto__ = (function (){try{while(true){
var result__23697__auto__ = switch__23694__auto__.call(null,state_25100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23697__auto__;
}
break;
}
}catch (e25124){if((e25124 instanceof Object)){
var ex__23698__auto__ = e25124;
var statearr_25125_25144 = state_25100;
(statearr_25125_25144[(5)] = ex__23698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25124;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25145 = state_25100;
state_25100 = G__25145;
continue;
} else {
return ret_value__23696__auto__;
}
break;
}
});
cljs$core$async$state_machine__23695__auto__ = function(state_25100){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23695__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23695__auto____1.call(this,state_25100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23695__auto____0;
cljs$core$async$state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23695__auto____1;
return cljs$core$async$state_machine__23695__auto__;
})()
;})(switch__23694__auto__,c__23789__auto___25128,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23791__auto__ = (function (){var statearr_25126 = f__23790__auto__.call(null);
(statearr_25126[(6)] = c__23789__auto___25128);

return statearr_25126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23791__auto__);
});})(c__23789__auto___25128,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__25148 = arguments.length;
switch (G__25148) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23789__auto___25202 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23789__auto___25202,out){
return (function (){
var f__23790__auto__ = (function (){var switch__23694__auto__ = ((function (c__23789__auto___25202,out){
return (function (state_25180){
var state_val_25181 = (state_25180[(1)]);
if((state_val_25181 === (7))){
var inst_25159 = (state_25180[(7)]);
var inst_25160 = (state_25180[(8)]);
var inst_25159__$1 = (state_25180[(2)]);
var inst_25160__$1 = cljs.core.nth.call(null,inst_25159__$1,(0),null);
var inst_25161 = cljs.core.nth.call(null,inst_25159__$1,(1),null);
var inst_25162 = (inst_25160__$1 == null);
var state_25180__$1 = (function (){var statearr_25182 = state_25180;
(statearr_25182[(7)] = inst_25159__$1);

(statearr_25182[(8)] = inst_25160__$1);

(statearr_25182[(9)] = inst_25161);

return statearr_25182;
})();
if(cljs.core.truth_(inst_25162)){
var statearr_25183_25203 = state_25180__$1;
(statearr_25183_25203[(1)] = (8));

} else {
var statearr_25184_25204 = state_25180__$1;
(statearr_25184_25204[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25181 === (1))){
var inst_25149 = cljs.core.vec.call(null,chs);
var inst_25150 = inst_25149;
var state_25180__$1 = (function (){var statearr_25185 = state_25180;
(statearr_25185[(10)] = inst_25150);

return statearr_25185;
})();
var statearr_25186_25205 = state_25180__$1;
(statearr_25186_25205[(2)] = null);

(statearr_25186_25205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25181 === (4))){
var inst_25150 = (state_25180[(10)]);
var state_25180__$1 = state_25180;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25180__$1,(7),inst_25150);
} else {
if((state_val_25181 === (6))){
var inst_25176 = (state_25180[(2)]);
var state_25180__$1 = state_25180;
var statearr_25187_25206 = state_25180__$1;
(statearr_25187_25206[(2)] = inst_25176);

(statearr_25187_25206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25181 === (3))){
var inst_25178 = (state_25180[(2)]);
var state_25180__$1 = state_25180;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25180__$1,inst_25178);
} else {
if((state_val_25181 === (2))){
var inst_25150 = (state_25180[(10)]);
var inst_25152 = cljs.core.count.call(null,inst_25150);
var inst_25153 = (inst_25152 > (0));
var state_25180__$1 = state_25180;
if(cljs.core.truth_(inst_25153)){
var statearr_25189_25207 = state_25180__$1;
(statearr_25189_25207[(1)] = (4));

} else {
var statearr_25190_25208 = state_25180__$1;
(statearr_25190_25208[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25181 === (11))){
var inst_25150 = (state_25180[(10)]);
var inst_25169 = (state_25180[(2)]);
var tmp25188 = inst_25150;
var inst_25150__$1 = tmp25188;
var state_25180__$1 = (function (){var statearr_25191 = state_25180;
(statearr_25191[(10)] = inst_25150__$1);

(statearr_25191[(11)] = inst_25169);

return statearr_25191;
})();
var statearr_25192_25209 = state_25180__$1;
(statearr_25192_25209[(2)] = null);

(statearr_25192_25209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25181 === (9))){
var inst_25160 = (state_25180[(8)]);
var state_25180__$1 = state_25180;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25180__$1,(11),out,inst_25160);
} else {
if((state_val_25181 === (5))){
var inst_25174 = cljs.core.async.close_BANG_.call(null,out);
var state_25180__$1 = state_25180;
var statearr_25193_25210 = state_25180__$1;
(statearr_25193_25210[(2)] = inst_25174);

(statearr_25193_25210[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25181 === (10))){
var inst_25172 = (state_25180[(2)]);
var state_25180__$1 = state_25180;
var statearr_25194_25211 = state_25180__$1;
(statearr_25194_25211[(2)] = inst_25172);

(statearr_25194_25211[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25181 === (8))){
var inst_25159 = (state_25180[(7)]);
var inst_25160 = (state_25180[(8)]);
var inst_25150 = (state_25180[(10)]);
var inst_25161 = (state_25180[(9)]);
var inst_25164 = (function (){var cs = inst_25150;
var vec__25155 = inst_25159;
var v = inst_25160;
var c = inst_25161;
return ((function (cs,vec__25155,v,c,inst_25159,inst_25160,inst_25150,inst_25161,state_val_25181,c__23789__auto___25202,out){
return (function (p1__25146_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25146_SHARP_);
});
;})(cs,vec__25155,v,c,inst_25159,inst_25160,inst_25150,inst_25161,state_val_25181,c__23789__auto___25202,out))
})();
var inst_25165 = cljs.core.filterv.call(null,inst_25164,inst_25150);
var inst_25150__$1 = inst_25165;
var state_25180__$1 = (function (){var statearr_25195 = state_25180;
(statearr_25195[(10)] = inst_25150__$1);

return statearr_25195;
})();
var statearr_25196_25212 = state_25180__$1;
(statearr_25196_25212[(2)] = null);

(statearr_25196_25212[(1)] = (2));


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
});})(c__23789__auto___25202,out))
;
return ((function (switch__23694__auto__,c__23789__auto___25202,out){
return (function() {
var cljs$core$async$state_machine__23695__auto__ = null;
var cljs$core$async$state_machine__23695__auto____0 = (function (){
var statearr_25197 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25197[(0)] = cljs$core$async$state_machine__23695__auto__);

(statearr_25197[(1)] = (1));

return statearr_25197;
});
var cljs$core$async$state_machine__23695__auto____1 = (function (state_25180){
while(true){
var ret_value__23696__auto__ = (function (){try{while(true){
var result__23697__auto__ = switch__23694__auto__.call(null,state_25180);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23697__auto__;
}
break;
}
}catch (e25198){if((e25198 instanceof Object)){
var ex__23698__auto__ = e25198;
var statearr_25199_25213 = state_25180;
(statearr_25199_25213[(5)] = ex__23698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25214 = state_25180;
state_25180 = G__25214;
continue;
} else {
return ret_value__23696__auto__;
}
break;
}
});
cljs$core$async$state_machine__23695__auto__ = function(state_25180){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23695__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23695__auto____1.call(this,state_25180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23695__auto____0;
cljs$core$async$state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23695__auto____1;
return cljs$core$async$state_machine__23695__auto__;
})()
;})(switch__23694__auto__,c__23789__auto___25202,out))
})();
var state__23791__auto__ = (function (){var statearr_25200 = f__23790__auto__.call(null);
(statearr_25200[(6)] = c__23789__auto___25202);

return statearr_25200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23791__auto__);
});})(c__23789__auto___25202,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__25216 = arguments.length;
switch (G__25216) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23789__auto___25261 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23789__auto___25261,out){
return (function (){
var f__23790__auto__ = (function (){var switch__23694__auto__ = ((function (c__23789__auto___25261,out){
return (function (state_25240){
var state_val_25241 = (state_25240[(1)]);
if((state_val_25241 === (7))){
var inst_25222 = (state_25240[(7)]);
var inst_25222__$1 = (state_25240[(2)]);
var inst_25223 = (inst_25222__$1 == null);
var inst_25224 = cljs.core.not.call(null,inst_25223);
var state_25240__$1 = (function (){var statearr_25242 = state_25240;
(statearr_25242[(7)] = inst_25222__$1);

return statearr_25242;
})();
if(inst_25224){
var statearr_25243_25262 = state_25240__$1;
(statearr_25243_25262[(1)] = (8));

} else {
var statearr_25244_25263 = state_25240__$1;
(statearr_25244_25263[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25241 === (1))){
var inst_25217 = (0);
var state_25240__$1 = (function (){var statearr_25245 = state_25240;
(statearr_25245[(8)] = inst_25217);

return statearr_25245;
})();
var statearr_25246_25264 = state_25240__$1;
(statearr_25246_25264[(2)] = null);

(statearr_25246_25264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25241 === (4))){
var state_25240__$1 = state_25240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25240__$1,(7),ch);
} else {
if((state_val_25241 === (6))){
var inst_25235 = (state_25240[(2)]);
var state_25240__$1 = state_25240;
var statearr_25247_25265 = state_25240__$1;
(statearr_25247_25265[(2)] = inst_25235);

(statearr_25247_25265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25241 === (3))){
var inst_25237 = (state_25240[(2)]);
var inst_25238 = cljs.core.async.close_BANG_.call(null,out);
var state_25240__$1 = (function (){var statearr_25248 = state_25240;
(statearr_25248[(9)] = inst_25237);

return statearr_25248;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25240__$1,inst_25238);
} else {
if((state_val_25241 === (2))){
var inst_25217 = (state_25240[(8)]);
var inst_25219 = (inst_25217 < n);
var state_25240__$1 = state_25240;
if(cljs.core.truth_(inst_25219)){
var statearr_25249_25266 = state_25240__$1;
(statearr_25249_25266[(1)] = (4));

} else {
var statearr_25250_25267 = state_25240__$1;
(statearr_25250_25267[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25241 === (11))){
var inst_25217 = (state_25240[(8)]);
var inst_25227 = (state_25240[(2)]);
var inst_25228 = (inst_25217 + (1));
var inst_25217__$1 = inst_25228;
var state_25240__$1 = (function (){var statearr_25251 = state_25240;
(statearr_25251[(10)] = inst_25227);

(statearr_25251[(8)] = inst_25217__$1);

return statearr_25251;
})();
var statearr_25252_25268 = state_25240__$1;
(statearr_25252_25268[(2)] = null);

(statearr_25252_25268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25241 === (9))){
var state_25240__$1 = state_25240;
var statearr_25253_25269 = state_25240__$1;
(statearr_25253_25269[(2)] = null);

(statearr_25253_25269[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25241 === (5))){
var state_25240__$1 = state_25240;
var statearr_25254_25270 = state_25240__$1;
(statearr_25254_25270[(2)] = null);

(statearr_25254_25270[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25241 === (10))){
var inst_25232 = (state_25240[(2)]);
var state_25240__$1 = state_25240;
var statearr_25255_25271 = state_25240__$1;
(statearr_25255_25271[(2)] = inst_25232);

(statearr_25255_25271[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25241 === (8))){
var inst_25222 = (state_25240[(7)]);
var state_25240__$1 = state_25240;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25240__$1,(11),out,inst_25222);
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
});})(c__23789__auto___25261,out))
;
return ((function (switch__23694__auto__,c__23789__auto___25261,out){
return (function() {
var cljs$core$async$state_machine__23695__auto__ = null;
var cljs$core$async$state_machine__23695__auto____0 = (function (){
var statearr_25256 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25256[(0)] = cljs$core$async$state_machine__23695__auto__);

(statearr_25256[(1)] = (1));

return statearr_25256;
});
var cljs$core$async$state_machine__23695__auto____1 = (function (state_25240){
while(true){
var ret_value__23696__auto__ = (function (){try{while(true){
var result__23697__auto__ = switch__23694__auto__.call(null,state_25240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23697__auto__;
}
break;
}
}catch (e25257){if((e25257 instanceof Object)){
var ex__23698__auto__ = e25257;
var statearr_25258_25272 = state_25240;
(statearr_25258_25272[(5)] = ex__23698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25273 = state_25240;
state_25240 = G__25273;
continue;
} else {
return ret_value__23696__auto__;
}
break;
}
});
cljs$core$async$state_machine__23695__auto__ = function(state_25240){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23695__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23695__auto____1.call(this,state_25240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23695__auto____0;
cljs$core$async$state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23695__auto____1;
return cljs$core$async$state_machine__23695__auto__;
})()
;})(switch__23694__auto__,c__23789__auto___25261,out))
})();
var state__23791__auto__ = (function (){var statearr_25259 = f__23790__auto__.call(null);
(statearr_25259[(6)] = c__23789__auto___25261);

return statearr_25259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23791__auto__);
});})(c__23789__auto___25261,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25275 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25275 = (function (f,ch,meta25276){
this.f = f;
this.ch = ch;
this.meta25276 = meta25276;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25277,meta25276__$1){
var self__ = this;
var _25277__$1 = this;
return (new cljs.core.async.t_cljs$core$async25275(self__.f,self__.ch,meta25276__$1));
});

cljs.core.async.t_cljs$core$async25275.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25277){
var self__ = this;
var _25277__$1 = this;
return self__.meta25276;
});

cljs.core.async.t_cljs$core$async25275.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25275.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25275.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25275.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25275.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25278 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25278 = (function (f,ch,meta25276,_,fn1,meta25279){
this.f = f;
this.ch = ch;
this.meta25276 = meta25276;
this._ = _;
this.fn1 = fn1;
this.meta25279 = meta25279;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25280,meta25279__$1){
var self__ = this;
var _25280__$1 = this;
return (new cljs.core.async.t_cljs$core$async25278(self__.f,self__.ch,self__.meta25276,self__._,self__.fn1,meta25279__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25278.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25280){
var self__ = this;
var _25280__$1 = this;
return self__.meta25279;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25278.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25278.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25278.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25278.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25274_SHARP_){
return f1.call(null,(((p1__25274_SHARP_ == null))?null:self__.f.call(null,p1__25274_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25278.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25276","meta25276",-1863931124,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25275","cljs.core.async/t_cljs$core$async25275",125704316,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25279","meta25279",-419311101,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25278.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25278.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25278";

cljs.core.async.t_cljs$core$async25278.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25278");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25278.
 */
cljs.core.async.__GT_t_cljs$core$async25278 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25278(f__$1,ch__$1,meta25276__$1,___$2,fn1__$1,meta25279){
return (new cljs.core.async.t_cljs$core$async25278(f__$1,ch__$1,meta25276__$1,___$2,fn1__$1,meta25279));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25278(self__.f,self__.ch,self__.meta25276,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async25275.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25275.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25275.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25276","meta25276",-1863931124,null)], null);
});

cljs.core.async.t_cljs$core$async25275.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25275.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25275";

cljs.core.async.t_cljs$core$async25275.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25275");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25275.
 */
cljs.core.async.__GT_t_cljs$core$async25275 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25275(f__$1,ch__$1,meta25276){
return (new cljs.core.async.t_cljs$core$async25275(f__$1,ch__$1,meta25276));
});

}

return (new cljs.core.async.t_cljs$core$async25275(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25281 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25281 = (function (f,ch,meta25282){
this.f = f;
this.ch = ch;
this.meta25282 = meta25282;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25283,meta25282__$1){
var self__ = this;
var _25283__$1 = this;
return (new cljs.core.async.t_cljs$core$async25281(self__.f,self__.ch,meta25282__$1));
});

cljs.core.async.t_cljs$core$async25281.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25283){
var self__ = this;
var _25283__$1 = this;
return self__.meta25282;
});

cljs.core.async.t_cljs$core$async25281.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25281.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25281.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25281.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25281.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25281.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25281.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25282","meta25282",-1824093511,null)], null);
});

cljs.core.async.t_cljs$core$async25281.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25281.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25281";

cljs.core.async.t_cljs$core$async25281.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25281");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25281.
 */
cljs.core.async.__GT_t_cljs$core$async25281 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25281(f__$1,ch__$1,meta25282){
return (new cljs.core.async.t_cljs$core$async25281(f__$1,ch__$1,meta25282));
});

}

return (new cljs.core.async.t_cljs$core$async25281(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25284 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25284 = (function (p,ch,meta25285){
this.p = p;
this.ch = ch;
this.meta25285 = meta25285;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25284.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25286,meta25285__$1){
var self__ = this;
var _25286__$1 = this;
return (new cljs.core.async.t_cljs$core$async25284(self__.p,self__.ch,meta25285__$1));
});

cljs.core.async.t_cljs$core$async25284.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25286){
var self__ = this;
var _25286__$1 = this;
return self__.meta25285;
});

cljs.core.async.t_cljs$core$async25284.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25284.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25284.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25284.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25284.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25284.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25284.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25284.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25285","meta25285",-1529950698,null)], null);
});

cljs.core.async.t_cljs$core$async25284.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25284.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25284";

cljs.core.async.t_cljs$core$async25284.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25284");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25284.
 */
cljs.core.async.__GT_t_cljs$core$async25284 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25284(p__$1,ch__$1,meta25285){
return (new cljs.core.async.t_cljs$core$async25284(p__$1,ch__$1,meta25285));
});

}

return (new cljs.core.async.t_cljs$core$async25284(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__25288 = arguments.length;
switch (G__25288) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23789__auto___25328 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23789__auto___25328,out){
return (function (){
var f__23790__auto__ = (function (){var switch__23694__auto__ = ((function (c__23789__auto___25328,out){
return (function (state_25309){
var state_val_25310 = (state_25309[(1)]);
if((state_val_25310 === (7))){
var inst_25305 = (state_25309[(2)]);
var state_25309__$1 = state_25309;
var statearr_25311_25329 = state_25309__$1;
(statearr_25311_25329[(2)] = inst_25305);

(statearr_25311_25329[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (1))){
var state_25309__$1 = state_25309;
var statearr_25312_25330 = state_25309__$1;
(statearr_25312_25330[(2)] = null);

(statearr_25312_25330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (4))){
var inst_25291 = (state_25309[(7)]);
var inst_25291__$1 = (state_25309[(2)]);
var inst_25292 = (inst_25291__$1 == null);
var state_25309__$1 = (function (){var statearr_25313 = state_25309;
(statearr_25313[(7)] = inst_25291__$1);

return statearr_25313;
})();
if(cljs.core.truth_(inst_25292)){
var statearr_25314_25331 = state_25309__$1;
(statearr_25314_25331[(1)] = (5));

} else {
var statearr_25315_25332 = state_25309__$1;
(statearr_25315_25332[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (6))){
var inst_25291 = (state_25309[(7)]);
var inst_25296 = p.call(null,inst_25291);
var state_25309__$1 = state_25309;
if(cljs.core.truth_(inst_25296)){
var statearr_25316_25333 = state_25309__$1;
(statearr_25316_25333[(1)] = (8));

} else {
var statearr_25317_25334 = state_25309__$1;
(statearr_25317_25334[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (3))){
var inst_25307 = (state_25309[(2)]);
var state_25309__$1 = state_25309;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25309__$1,inst_25307);
} else {
if((state_val_25310 === (2))){
var state_25309__$1 = state_25309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25309__$1,(4),ch);
} else {
if((state_val_25310 === (11))){
var inst_25299 = (state_25309[(2)]);
var state_25309__$1 = state_25309;
var statearr_25318_25335 = state_25309__$1;
(statearr_25318_25335[(2)] = inst_25299);

(statearr_25318_25335[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (9))){
var state_25309__$1 = state_25309;
var statearr_25319_25336 = state_25309__$1;
(statearr_25319_25336[(2)] = null);

(statearr_25319_25336[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (5))){
var inst_25294 = cljs.core.async.close_BANG_.call(null,out);
var state_25309__$1 = state_25309;
var statearr_25320_25337 = state_25309__$1;
(statearr_25320_25337[(2)] = inst_25294);

(statearr_25320_25337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (10))){
var inst_25302 = (state_25309[(2)]);
var state_25309__$1 = (function (){var statearr_25321 = state_25309;
(statearr_25321[(8)] = inst_25302);

return statearr_25321;
})();
var statearr_25322_25338 = state_25309__$1;
(statearr_25322_25338[(2)] = null);

(statearr_25322_25338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25310 === (8))){
var inst_25291 = (state_25309[(7)]);
var state_25309__$1 = state_25309;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25309__$1,(11),out,inst_25291);
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
});})(c__23789__auto___25328,out))
;
return ((function (switch__23694__auto__,c__23789__auto___25328,out){
return (function() {
var cljs$core$async$state_machine__23695__auto__ = null;
var cljs$core$async$state_machine__23695__auto____0 = (function (){
var statearr_25323 = [null,null,null,null,null,null,null,null,null];
(statearr_25323[(0)] = cljs$core$async$state_machine__23695__auto__);

(statearr_25323[(1)] = (1));

return statearr_25323;
});
var cljs$core$async$state_machine__23695__auto____1 = (function (state_25309){
while(true){
var ret_value__23696__auto__ = (function (){try{while(true){
var result__23697__auto__ = switch__23694__auto__.call(null,state_25309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23697__auto__;
}
break;
}
}catch (e25324){if((e25324 instanceof Object)){
var ex__23698__auto__ = e25324;
var statearr_25325_25339 = state_25309;
(statearr_25325_25339[(5)] = ex__23698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25340 = state_25309;
state_25309 = G__25340;
continue;
} else {
return ret_value__23696__auto__;
}
break;
}
});
cljs$core$async$state_machine__23695__auto__ = function(state_25309){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23695__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23695__auto____1.call(this,state_25309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23695__auto____0;
cljs$core$async$state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23695__auto____1;
return cljs$core$async$state_machine__23695__auto__;
})()
;})(switch__23694__auto__,c__23789__auto___25328,out))
})();
var state__23791__auto__ = (function (){var statearr_25326 = f__23790__auto__.call(null);
(statearr_25326[(6)] = c__23789__auto___25328);

return statearr_25326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23791__auto__);
});})(c__23789__auto___25328,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__25342 = arguments.length;
switch (G__25342) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23789__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23789__auto__){
return (function (){
var f__23790__auto__ = (function (){var switch__23694__auto__ = ((function (c__23789__auto__){
return (function (state_25405){
var state_val_25406 = (state_25405[(1)]);
if((state_val_25406 === (7))){
var inst_25401 = (state_25405[(2)]);
var state_25405__$1 = state_25405;
var statearr_25407_25445 = state_25405__$1;
(statearr_25407_25445[(2)] = inst_25401);

(statearr_25407_25445[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25406 === (20))){
var inst_25371 = (state_25405[(7)]);
var inst_25382 = (state_25405[(2)]);
var inst_25383 = cljs.core.next.call(null,inst_25371);
var inst_25357 = inst_25383;
var inst_25358 = null;
var inst_25359 = (0);
var inst_25360 = (0);
var state_25405__$1 = (function (){var statearr_25408 = state_25405;
(statearr_25408[(8)] = inst_25357);

(statearr_25408[(9)] = inst_25358);

(statearr_25408[(10)] = inst_25360);

(statearr_25408[(11)] = inst_25382);

(statearr_25408[(12)] = inst_25359);

return statearr_25408;
})();
var statearr_25409_25446 = state_25405__$1;
(statearr_25409_25446[(2)] = null);

(statearr_25409_25446[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25406 === (1))){
var state_25405__$1 = state_25405;
var statearr_25410_25447 = state_25405__$1;
(statearr_25410_25447[(2)] = null);

(statearr_25410_25447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25406 === (4))){
var inst_25346 = (state_25405[(13)]);
var inst_25346__$1 = (state_25405[(2)]);
var inst_25347 = (inst_25346__$1 == null);
var state_25405__$1 = (function (){var statearr_25411 = state_25405;
(statearr_25411[(13)] = inst_25346__$1);

return statearr_25411;
})();
if(cljs.core.truth_(inst_25347)){
var statearr_25412_25448 = state_25405__$1;
(statearr_25412_25448[(1)] = (5));

} else {
var statearr_25413_25449 = state_25405__$1;
(statearr_25413_25449[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25406 === (15))){
var state_25405__$1 = state_25405;
var statearr_25417_25450 = state_25405__$1;
(statearr_25417_25450[(2)] = null);

(statearr_25417_25450[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25406 === (21))){
var state_25405__$1 = state_25405;
var statearr_25418_25451 = state_25405__$1;
(statearr_25418_25451[(2)] = null);

(statearr_25418_25451[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25406 === (13))){
var inst_25357 = (state_25405[(8)]);
var inst_25358 = (state_25405[(9)]);
var inst_25360 = (state_25405[(10)]);
var inst_25359 = (state_25405[(12)]);
var inst_25367 = (state_25405[(2)]);
var inst_25368 = (inst_25360 + (1));
var tmp25414 = inst_25357;
var tmp25415 = inst_25358;
var tmp25416 = inst_25359;
var inst_25357__$1 = tmp25414;
var inst_25358__$1 = tmp25415;
var inst_25359__$1 = tmp25416;
var inst_25360__$1 = inst_25368;
var state_25405__$1 = (function (){var statearr_25419 = state_25405;
(statearr_25419[(8)] = inst_25357__$1);

(statearr_25419[(9)] = inst_25358__$1);

(statearr_25419[(10)] = inst_25360__$1);

(statearr_25419[(14)] = inst_25367);

(statearr_25419[(12)] = inst_25359__$1);

return statearr_25419;
})();
var statearr_25420_25452 = state_25405__$1;
(statearr_25420_25452[(2)] = null);

(statearr_25420_25452[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25406 === (22))){
var state_25405__$1 = state_25405;
var statearr_25421_25453 = state_25405__$1;
(statearr_25421_25453[(2)] = null);

(statearr_25421_25453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25406 === (6))){
var inst_25346 = (state_25405[(13)]);
var inst_25355 = f.call(null,inst_25346);
var inst_25356 = cljs.core.seq.call(null,inst_25355);
var inst_25357 = inst_25356;
var inst_25358 = null;
var inst_25359 = (0);
var inst_25360 = (0);
var state_25405__$1 = (function (){var statearr_25422 = state_25405;
(statearr_25422[(8)] = inst_25357);

(statearr_25422[(9)] = inst_25358);

(statearr_25422[(10)] = inst_25360);

(statearr_25422[(12)] = inst_25359);

return statearr_25422;
})();
var statearr_25423_25454 = state_25405__$1;
(statearr_25423_25454[(2)] = null);

(statearr_25423_25454[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25406 === (17))){
var inst_25371 = (state_25405[(7)]);
var inst_25375 = cljs.core.chunk_first.call(null,inst_25371);
var inst_25376 = cljs.core.chunk_rest.call(null,inst_25371);
var inst_25377 = cljs.core.count.call(null,inst_25375);
var inst_25357 = inst_25376;
var inst_25358 = inst_25375;
var inst_25359 = inst_25377;
var inst_25360 = (0);
var state_25405__$1 = (function (){var statearr_25424 = state_25405;
(statearr_25424[(8)] = inst_25357);

(statearr_25424[(9)] = inst_25358);

(statearr_25424[(10)] = inst_25360);

(statearr_25424[(12)] = inst_25359);

return statearr_25424;
})();
var statearr_25425_25455 = state_25405__$1;
(statearr_25425_25455[(2)] = null);

(statearr_25425_25455[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25406 === (3))){
var inst_25403 = (state_25405[(2)]);
var state_25405__$1 = state_25405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25405__$1,inst_25403);
} else {
if((state_val_25406 === (12))){
var inst_25391 = (state_25405[(2)]);
var state_25405__$1 = state_25405;
var statearr_25426_25456 = state_25405__$1;
(statearr_25426_25456[(2)] = inst_25391);

(statearr_25426_25456[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25406 === (2))){
var state_25405__$1 = state_25405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25405__$1,(4),in$);
} else {
if((state_val_25406 === (23))){
var inst_25399 = (state_25405[(2)]);
var state_25405__$1 = state_25405;
var statearr_25427_25457 = state_25405__$1;
(statearr_25427_25457[(2)] = inst_25399);

(statearr_25427_25457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25406 === (19))){
var inst_25386 = (state_25405[(2)]);
var state_25405__$1 = state_25405;
var statearr_25428_25458 = state_25405__$1;
(statearr_25428_25458[(2)] = inst_25386);

(statearr_25428_25458[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25406 === (11))){
var inst_25371 = (state_25405[(7)]);
var inst_25357 = (state_25405[(8)]);
var inst_25371__$1 = cljs.core.seq.call(null,inst_25357);
var state_25405__$1 = (function (){var statearr_25429 = state_25405;
(statearr_25429[(7)] = inst_25371__$1);

return statearr_25429;
})();
if(inst_25371__$1){
var statearr_25430_25459 = state_25405__$1;
(statearr_25430_25459[(1)] = (14));

} else {
var statearr_25431_25460 = state_25405__$1;
(statearr_25431_25460[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25406 === (9))){
var inst_25393 = (state_25405[(2)]);
var inst_25394 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25405__$1 = (function (){var statearr_25432 = state_25405;
(statearr_25432[(15)] = inst_25393);

return statearr_25432;
})();
if(cljs.core.truth_(inst_25394)){
var statearr_25433_25461 = state_25405__$1;
(statearr_25433_25461[(1)] = (21));

} else {
var statearr_25434_25462 = state_25405__$1;
(statearr_25434_25462[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25406 === (5))){
var inst_25349 = cljs.core.async.close_BANG_.call(null,out);
var state_25405__$1 = state_25405;
var statearr_25435_25463 = state_25405__$1;
(statearr_25435_25463[(2)] = inst_25349);

(statearr_25435_25463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25406 === (14))){
var inst_25371 = (state_25405[(7)]);
var inst_25373 = cljs.core.chunked_seq_QMARK_.call(null,inst_25371);
var state_25405__$1 = state_25405;
if(inst_25373){
var statearr_25436_25464 = state_25405__$1;
(statearr_25436_25464[(1)] = (17));

} else {
var statearr_25437_25465 = state_25405__$1;
(statearr_25437_25465[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25406 === (16))){
var inst_25389 = (state_25405[(2)]);
var state_25405__$1 = state_25405;
var statearr_25438_25466 = state_25405__$1;
(statearr_25438_25466[(2)] = inst_25389);

(statearr_25438_25466[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25406 === (10))){
var inst_25358 = (state_25405[(9)]);
var inst_25360 = (state_25405[(10)]);
var inst_25365 = cljs.core._nth.call(null,inst_25358,inst_25360);
var state_25405__$1 = state_25405;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25405__$1,(13),out,inst_25365);
} else {
if((state_val_25406 === (18))){
var inst_25371 = (state_25405[(7)]);
var inst_25380 = cljs.core.first.call(null,inst_25371);
var state_25405__$1 = state_25405;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25405__$1,(20),out,inst_25380);
} else {
if((state_val_25406 === (8))){
var inst_25360 = (state_25405[(10)]);
var inst_25359 = (state_25405[(12)]);
var inst_25362 = (inst_25360 < inst_25359);
var inst_25363 = inst_25362;
var state_25405__$1 = state_25405;
if(cljs.core.truth_(inst_25363)){
var statearr_25439_25467 = state_25405__$1;
(statearr_25439_25467[(1)] = (10));

} else {
var statearr_25440_25468 = state_25405__$1;
(statearr_25440_25468[(1)] = (11));

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
});})(c__23789__auto__))
;
return ((function (switch__23694__auto__,c__23789__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23695__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23695__auto____0 = (function (){
var statearr_25441 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25441[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23695__auto__);

(statearr_25441[(1)] = (1));

return statearr_25441;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23695__auto____1 = (function (state_25405){
while(true){
var ret_value__23696__auto__ = (function (){try{while(true){
var result__23697__auto__ = switch__23694__auto__.call(null,state_25405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23697__auto__;
}
break;
}
}catch (e25442){if((e25442 instanceof Object)){
var ex__23698__auto__ = e25442;
var statearr_25443_25469 = state_25405;
(statearr_25443_25469[(5)] = ex__23698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25470 = state_25405;
state_25405 = G__25470;
continue;
} else {
return ret_value__23696__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23695__auto__ = function(state_25405){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23695__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23695__auto____1.call(this,state_25405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23695__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23695__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23695__auto__;
})()
;})(switch__23694__auto__,c__23789__auto__))
})();
var state__23791__auto__ = (function (){var statearr_25444 = f__23790__auto__.call(null);
(statearr_25444[(6)] = c__23789__auto__);

return statearr_25444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23791__auto__);
});})(c__23789__auto__))
);

return c__23789__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__25472 = arguments.length;
switch (G__25472) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__25475 = arguments.length;
switch (G__25475) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__25478 = arguments.length;
switch (G__25478) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23789__auto___25525 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23789__auto___25525,out){
return (function (){
var f__23790__auto__ = (function (){var switch__23694__auto__ = ((function (c__23789__auto___25525,out){
return (function (state_25502){
var state_val_25503 = (state_25502[(1)]);
if((state_val_25503 === (7))){
var inst_25497 = (state_25502[(2)]);
var state_25502__$1 = state_25502;
var statearr_25504_25526 = state_25502__$1;
(statearr_25504_25526[(2)] = inst_25497);

(statearr_25504_25526[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25503 === (1))){
var inst_25479 = null;
var state_25502__$1 = (function (){var statearr_25505 = state_25502;
(statearr_25505[(7)] = inst_25479);

return statearr_25505;
})();
var statearr_25506_25527 = state_25502__$1;
(statearr_25506_25527[(2)] = null);

(statearr_25506_25527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25503 === (4))){
var inst_25482 = (state_25502[(8)]);
var inst_25482__$1 = (state_25502[(2)]);
var inst_25483 = (inst_25482__$1 == null);
var inst_25484 = cljs.core.not.call(null,inst_25483);
var state_25502__$1 = (function (){var statearr_25507 = state_25502;
(statearr_25507[(8)] = inst_25482__$1);

return statearr_25507;
})();
if(inst_25484){
var statearr_25508_25528 = state_25502__$1;
(statearr_25508_25528[(1)] = (5));

} else {
var statearr_25509_25529 = state_25502__$1;
(statearr_25509_25529[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25503 === (6))){
var state_25502__$1 = state_25502;
var statearr_25510_25530 = state_25502__$1;
(statearr_25510_25530[(2)] = null);

(statearr_25510_25530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25503 === (3))){
var inst_25499 = (state_25502[(2)]);
var inst_25500 = cljs.core.async.close_BANG_.call(null,out);
var state_25502__$1 = (function (){var statearr_25511 = state_25502;
(statearr_25511[(9)] = inst_25499);

return statearr_25511;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25502__$1,inst_25500);
} else {
if((state_val_25503 === (2))){
var state_25502__$1 = state_25502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25502__$1,(4),ch);
} else {
if((state_val_25503 === (11))){
var inst_25482 = (state_25502[(8)]);
var inst_25491 = (state_25502[(2)]);
var inst_25479 = inst_25482;
var state_25502__$1 = (function (){var statearr_25512 = state_25502;
(statearr_25512[(10)] = inst_25491);

(statearr_25512[(7)] = inst_25479);

return statearr_25512;
})();
var statearr_25513_25531 = state_25502__$1;
(statearr_25513_25531[(2)] = null);

(statearr_25513_25531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25503 === (9))){
var inst_25482 = (state_25502[(8)]);
var state_25502__$1 = state_25502;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25502__$1,(11),out,inst_25482);
} else {
if((state_val_25503 === (5))){
var inst_25482 = (state_25502[(8)]);
var inst_25479 = (state_25502[(7)]);
var inst_25486 = cljs.core._EQ_.call(null,inst_25482,inst_25479);
var state_25502__$1 = state_25502;
if(inst_25486){
var statearr_25515_25532 = state_25502__$1;
(statearr_25515_25532[(1)] = (8));

} else {
var statearr_25516_25533 = state_25502__$1;
(statearr_25516_25533[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25503 === (10))){
var inst_25494 = (state_25502[(2)]);
var state_25502__$1 = state_25502;
var statearr_25517_25534 = state_25502__$1;
(statearr_25517_25534[(2)] = inst_25494);

(statearr_25517_25534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25503 === (8))){
var inst_25479 = (state_25502[(7)]);
var tmp25514 = inst_25479;
var inst_25479__$1 = tmp25514;
var state_25502__$1 = (function (){var statearr_25518 = state_25502;
(statearr_25518[(7)] = inst_25479__$1);

return statearr_25518;
})();
var statearr_25519_25535 = state_25502__$1;
(statearr_25519_25535[(2)] = null);

(statearr_25519_25535[(1)] = (2));


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
});})(c__23789__auto___25525,out))
;
return ((function (switch__23694__auto__,c__23789__auto___25525,out){
return (function() {
var cljs$core$async$state_machine__23695__auto__ = null;
var cljs$core$async$state_machine__23695__auto____0 = (function (){
var statearr_25520 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25520[(0)] = cljs$core$async$state_machine__23695__auto__);

(statearr_25520[(1)] = (1));

return statearr_25520;
});
var cljs$core$async$state_machine__23695__auto____1 = (function (state_25502){
while(true){
var ret_value__23696__auto__ = (function (){try{while(true){
var result__23697__auto__ = switch__23694__auto__.call(null,state_25502);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23697__auto__;
}
break;
}
}catch (e25521){if((e25521 instanceof Object)){
var ex__23698__auto__ = e25521;
var statearr_25522_25536 = state_25502;
(statearr_25522_25536[(5)] = ex__23698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25537 = state_25502;
state_25502 = G__25537;
continue;
} else {
return ret_value__23696__auto__;
}
break;
}
});
cljs$core$async$state_machine__23695__auto__ = function(state_25502){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23695__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23695__auto____1.call(this,state_25502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23695__auto____0;
cljs$core$async$state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23695__auto____1;
return cljs$core$async$state_machine__23695__auto__;
})()
;})(switch__23694__auto__,c__23789__auto___25525,out))
})();
var state__23791__auto__ = (function (){var statearr_25523 = f__23790__auto__.call(null);
(statearr_25523[(6)] = c__23789__auto___25525);

return statearr_25523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23791__auto__);
});})(c__23789__auto___25525,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__25539 = arguments.length;
switch (G__25539) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23789__auto___25605 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23789__auto___25605,out){
return (function (){
var f__23790__auto__ = (function (){var switch__23694__auto__ = ((function (c__23789__auto___25605,out){
return (function (state_25577){
var state_val_25578 = (state_25577[(1)]);
if((state_val_25578 === (7))){
var inst_25573 = (state_25577[(2)]);
var state_25577__$1 = state_25577;
var statearr_25579_25606 = state_25577__$1;
(statearr_25579_25606[(2)] = inst_25573);

(statearr_25579_25606[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25578 === (1))){
var inst_25540 = (new Array(n));
var inst_25541 = inst_25540;
var inst_25542 = (0);
var state_25577__$1 = (function (){var statearr_25580 = state_25577;
(statearr_25580[(7)] = inst_25541);

(statearr_25580[(8)] = inst_25542);

return statearr_25580;
})();
var statearr_25581_25607 = state_25577__$1;
(statearr_25581_25607[(2)] = null);

(statearr_25581_25607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25578 === (4))){
var inst_25545 = (state_25577[(9)]);
var inst_25545__$1 = (state_25577[(2)]);
var inst_25546 = (inst_25545__$1 == null);
var inst_25547 = cljs.core.not.call(null,inst_25546);
var state_25577__$1 = (function (){var statearr_25582 = state_25577;
(statearr_25582[(9)] = inst_25545__$1);

return statearr_25582;
})();
if(inst_25547){
var statearr_25583_25608 = state_25577__$1;
(statearr_25583_25608[(1)] = (5));

} else {
var statearr_25584_25609 = state_25577__$1;
(statearr_25584_25609[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25578 === (15))){
var inst_25567 = (state_25577[(2)]);
var state_25577__$1 = state_25577;
var statearr_25585_25610 = state_25577__$1;
(statearr_25585_25610[(2)] = inst_25567);

(statearr_25585_25610[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25578 === (13))){
var state_25577__$1 = state_25577;
var statearr_25586_25611 = state_25577__$1;
(statearr_25586_25611[(2)] = null);

(statearr_25586_25611[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25578 === (6))){
var inst_25542 = (state_25577[(8)]);
var inst_25563 = (inst_25542 > (0));
var state_25577__$1 = state_25577;
if(cljs.core.truth_(inst_25563)){
var statearr_25587_25612 = state_25577__$1;
(statearr_25587_25612[(1)] = (12));

} else {
var statearr_25588_25613 = state_25577__$1;
(statearr_25588_25613[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25578 === (3))){
var inst_25575 = (state_25577[(2)]);
var state_25577__$1 = state_25577;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25577__$1,inst_25575);
} else {
if((state_val_25578 === (12))){
var inst_25541 = (state_25577[(7)]);
var inst_25565 = cljs.core.vec.call(null,inst_25541);
var state_25577__$1 = state_25577;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25577__$1,(15),out,inst_25565);
} else {
if((state_val_25578 === (2))){
var state_25577__$1 = state_25577;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25577__$1,(4),ch);
} else {
if((state_val_25578 === (11))){
var inst_25557 = (state_25577[(2)]);
var inst_25558 = (new Array(n));
var inst_25541 = inst_25558;
var inst_25542 = (0);
var state_25577__$1 = (function (){var statearr_25589 = state_25577;
(statearr_25589[(7)] = inst_25541);

(statearr_25589[(8)] = inst_25542);

(statearr_25589[(10)] = inst_25557);

return statearr_25589;
})();
var statearr_25590_25614 = state_25577__$1;
(statearr_25590_25614[(2)] = null);

(statearr_25590_25614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25578 === (9))){
var inst_25541 = (state_25577[(7)]);
var inst_25555 = cljs.core.vec.call(null,inst_25541);
var state_25577__$1 = state_25577;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25577__$1,(11),out,inst_25555);
} else {
if((state_val_25578 === (5))){
var inst_25545 = (state_25577[(9)]);
var inst_25541 = (state_25577[(7)]);
var inst_25550 = (state_25577[(11)]);
var inst_25542 = (state_25577[(8)]);
var inst_25549 = (inst_25541[inst_25542] = inst_25545);
var inst_25550__$1 = (inst_25542 + (1));
var inst_25551 = (inst_25550__$1 < n);
var state_25577__$1 = (function (){var statearr_25591 = state_25577;
(statearr_25591[(11)] = inst_25550__$1);

(statearr_25591[(12)] = inst_25549);

return statearr_25591;
})();
if(cljs.core.truth_(inst_25551)){
var statearr_25592_25615 = state_25577__$1;
(statearr_25592_25615[(1)] = (8));

} else {
var statearr_25593_25616 = state_25577__$1;
(statearr_25593_25616[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25578 === (14))){
var inst_25570 = (state_25577[(2)]);
var inst_25571 = cljs.core.async.close_BANG_.call(null,out);
var state_25577__$1 = (function (){var statearr_25595 = state_25577;
(statearr_25595[(13)] = inst_25570);

return statearr_25595;
})();
var statearr_25596_25617 = state_25577__$1;
(statearr_25596_25617[(2)] = inst_25571);

(statearr_25596_25617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25578 === (10))){
var inst_25561 = (state_25577[(2)]);
var state_25577__$1 = state_25577;
var statearr_25597_25618 = state_25577__$1;
(statearr_25597_25618[(2)] = inst_25561);

(statearr_25597_25618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25578 === (8))){
var inst_25541 = (state_25577[(7)]);
var inst_25550 = (state_25577[(11)]);
var tmp25594 = inst_25541;
var inst_25541__$1 = tmp25594;
var inst_25542 = inst_25550;
var state_25577__$1 = (function (){var statearr_25598 = state_25577;
(statearr_25598[(7)] = inst_25541__$1);

(statearr_25598[(8)] = inst_25542);

return statearr_25598;
})();
var statearr_25599_25619 = state_25577__$1;
(statearr_25599_25619[(2)] = null);

(statearr_25599_25619[(1)] = (2));


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
});})(c__23789__auto___25605,out))
;
return ((function (switch__23694__auto__,c__23789__auto___25605,out){
return (function() {
var cljs$core$async$state_machine__23695__auto__ = null;
var cljs$core$async$state_machine__23695__auto____0 = (function (){
var statearr_25600 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25600[(0)] = cljs$core$async$state_machine__23695__auto__);

(statearr_25600[(1)] = (1));

return statearr_25600;
});
var cljs$core$async$state_machine__23695__auto____1 = (function (state_25577){
while(true){
var ret_value__23696__auto__ = (function (){try{while(true){
var result__23697__auto__ = switch__23694__auto__.call(null,state_25577);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23697__auto__;
}
break;
}
}catch (e25601){if((e25601 instanceof Object)){
var ex__23698__auto__ = e25601;
var statearr_25602_25620 = state_25577;
(statearr_25602_25620[(5)] = ex__23698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25601;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25621 = state_25577;
state_25577 = G__25621;
continue;
} else {
return ret_value__23696__auto__;
}
break;
}
});
cljs$core$async$state_machine__23695__auto__ = function(state_25577){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23695__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23695__auto____1.call(this,state_25577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23695__auto____0;
cljs$core$async$state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23695__auto____1;
return cljs$core$async$state_machine__23695__auto__;
})()
;})(switch__23694__auto__,c__23789__auto___25605,out))
})();
var state__23791__auto__ = (function (){var statearr_25603 = f__23790__auto__.call(null);
(statearr_25603[(6)] = c__23789__auto___25605);

return statearr_25603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23791__auto__);
});})(c__23789__auto___25605,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__25623 = arguments.length;
switch (G__25623) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23789__auto___25693 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23789__auto___25693,out){
return (function (){
var f__23790__auto__ = (function (){var switch__23694__auto__ = ((function (c__23789__auto___25693,out){
return (function (state_25665){
var state_val_25666 = (state_25665[(1)]);
if((state_val_25666 === (7))){
var inst_25661 = (state_25665[(2)]);
var state_25665__$1 = state_25665;
var statearr_25667_25694 = state_25665__$1;
(statearr_25667_25694[(2)] = inst_25661);

(statearr_25667_25694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (1))){
var inst_25624 = [];
var inst_25625 = inst_25624;
var inst_25626 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25665__$1 = (function (){var statearr_25668 = state_25665;
(statearr_25668[(7)] = inst_25626);

(statearr_25668[(8)] = inst_25625);

return statearr_25668;
})();
var statearr_25669_25695 = state_25665__$1;
(statearr_25669_25695[(2)] = null);

(statearr_25669_25695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (4))){
var inst_25629 = (state_25665[(9)]);
var inst_25629__$1 = (state_25665[(2)]);
var inst_25630 = (inst_25629__$1 == null);
var inst_25631 = cljs.core.not.call(null,inst_25630);
var state_25665__$1 = (function (){var statearr_25670 = state_25665;
(statearr_25670[(9)] = inst_25629__$1);

return statearr_25670;
})();
if(inst_25631){
var statearr_25671_25696 = state_25665__$1;
(statearr_25671_25696[(1)] = (5));

} else {
var statearr_25672_25697 = state_25665__$1;
(statearr_25672_25697[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (15))){
var inst_25655 = (state_25665[(2)]);
var state_25665__$1 = state_25665;
var statearr_25673_25698 = state_25665__$1;
(statearr_25673_25698[(2)] = inst_25655);

(statearr_25673_25698[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (13))){
var state_25665__$1 = state_25665;
var statearr_25674_25699 = state_25665__$1;
(statearr_25674_25699[(2)] = null);

(statearr_25674_25699[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (6))){
var inst_25625 = (state_25665[(8)]);
var inst_25650 = inst_25625.length;
var inst_25651 = (inst_25650 > (0));
var state_25665__$1 = state_25665;
if(cljs.core.truth_(inst_25651)){
var statearr_25675_25700 = state_25665__$1;
(statearr_25675_25700[(1)] = (12));

} else {
var statearr_25676_25701 = state_25665__$1;
(statearr_25676_25701[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (3))){
var inst_25663 = (state_25665[(2)]);
var state_25665__$1 = state_25665;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25665__$1,inst_25663);
} else {
if((state_val_25666 === (12))){
var inst_25625 = (state_25665[(8)]);
var inst_25653 = cljs.core.vec.call(null,inst_25625);
var state_25665__$1 = state_25665;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25665__$1,(15),out,inst_25653);
} else {
if((state_val_25666 === (2))){
var state_25665__$1 = state_25665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25665__$1,(4),ch);
} else {
if((state_val_25666 === (11))){
var inst_25629 = (state_25665[(9)]);
var inst_25633 = (state_25665[(10)]);
var inst_25643 = (state_25665[(2)]);
var inst_25644 = [];
var inst_25645 = inst_25644.push(inst_25629);
var inst_25625 = inst_25644;
var inst_25626 = inst_25633;
var state_25665__$1 = (function (){var statearr_25677 = state_25665;
(statearr_25677[(11)] = inst_25643);

(statearr_25677[(7)] = inst_25626);

(statearr_25677[(12)] = inst_25645);

(statearr_25677[(8)] = inst_25625);

return statearr_25677;
})();
var statearr_25678_25702 = state_25665__$1;
(statearr_25678_25702[(2)] = null);

(statearr_25678_25702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (9))){
var inst_25625 = (state_25665[(8)]);
var inst_25641 = cljs.core.vec.call(null,inst_25625);
var state_25665__$1 = state_25665;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25665__$1,(11),out,inst_25641);
} else {
if((state_val_25666 === (5))){
var inst_25626 = (state_25665[(7)]);
var inst_25629 = (state_25665[(9)]);
var inst_25633 = (state_25665[(10)]);
var inst_25633__$1 = f.call(null,inst_25629);
var inst_25634 = cljs.core._EQ_.call(null,inst_25633__$1,inst_25626);
var inst_25635 = cljs.core.keyword_identical_QMARK_.call(null,inst_25626,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25636 = ((inst_25634) || (inst_25635));
var state_25665__$1 = (function (){var statearr_25679 = state_25665;
(statearr_25679[(10)] = inst_25633__$1);

return statearr_25679;
})();
if(cljs.core.truth_(inst_25636)){
var statearr_25680_25703 = state_25665__$1;
(statearr_25680_25703[(1)] = (8));

} else {
var statearr_25681_25704 = state_25665__$1;
(statearr_25681_25704[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (14))){
var inst_25658 = (state_25665[(2)]);
var inst_25659 = cljs.core.async.close_BANG_.call(null,out);
var state_25665__$1 = (function (){var statearr_25683 = state_25665;
(statearr_25683[(13)] = inst_25658);

return statearr_25683;
})();
var statearr_25684_25705 = state_25665__$1;
(statearr_25684_25705[(2)] = inst_25659);

(statearr_25684_25705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (10))){
var inst_25648 = (state_25665[(2)]);
var state_25665__$1 = state_25665;
var statearr_25685_25706 = state_25665__$1;
(statearr_25685_25706[(2)] = inst_25648);

(statearr_25685_25706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (8))){
var inst_25629 = (state_25665[(9)]);
var inst_25633 = (state_25665[(10)]);
var inst_25625 = (state_25665[(8)]);
var inst_25638 = inst_25625.push(inst_25629);
var tmp25682 = inst_25625;
var inst_25625__$1 = tmp25682;
var inst_25626 = inst_25633;
var state_25665__$1 = (function (){var statearr_25686 = state_25665;
(statearr_25686[(7)] = inst_25626);

(statearr_25686[(14)] = inst_25638);

(statearr_25686[(8)] = inst_25625__$1);

return statearr_25686;
})();
var statearr_25687_25707 = state_25665__$1;
(statearr_25687_25707[(2)] = null);

(statearr_25687_25707[(1)] = (2));


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
});})(c__23789__auto___25693,out))
;
return ((function (switch__23694__auto__,c__23789__auto___25693,out){
return (function() {
var cljs$core$async$state_machine__23695__auto__ = null;
var cljs$core$async$state_machine__23695__auto____0 = (function (){
var statearr_25688 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25688[(0)] = cljs$core$async$state_machine__23695__auto__);

(statearr_25688[(1)] = (1));

return statearr_25688;
});
var cljs$core$async$state_machine__23695__auto____1 = (function (state_25665){
while(true){
var ret_value__23696__auto__ = (function (){try{while(true){
var result__23697__auto__ = switch__23694__auto__.call(null,state_25665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23697__auto__;
}
break;
}
}catch (e25689){if((e25689 instanceof Object)){
var ex__23698__auto__ = e25689;
var statearr_25690_25708 = state_25665;
(statearr_25690_25708[(5)] = ex__23698__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25689;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25709 = state_25665;
state_25665 = G__25709;
continue;
} else {
return ret_value__23696__auto__;
}
break;
}
});
cljs$core$async$state_machine__23695__auto__ = function(state_25665){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23695__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23695__auto____1.call(this,state_25665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23695__auto____0;
cljs$core$async$state_machine__23695__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23695__auto____1;
return cljs$core$async$state_machine__23695__auto__;
})()
;})(switch__23694__auto__,c__23789__auto___25693,out))
})();
var state__23791__auto__ = (function (){var statearr_25691 = f__23790__auto__.call(null);
(statearr_25691[(6)] = c__23789__auto___25693);

return statearr_25691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23791__auto__);
});})(c__23789__auto___25693,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1704783952046
