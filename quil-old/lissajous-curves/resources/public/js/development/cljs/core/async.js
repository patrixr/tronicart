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
var G__23428 = arguments.length;
switch (G__23428) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23429 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23429 = (function (f,blockable,meta23430){
this.f = f;
this.blockable = blockable;
this.meta23430 = meta23430;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23431,meta23430__$1){
var self__ = this;
var _23431__$1 = this;
return (new cljs.core.async.t_cljs$core$async23429(self__.f,self__.blockable,meta23430__$1));
});

cljs.core.async.t_cljs$core$async23429.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23431){
var self__ = this;
var _23431__$1 = this;
return self__.meta23430;
});

cljs.core.async.t_cljs$core$async23429.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23429.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23429.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23429.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23429.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23430","meta23430",74335198,null)], null);
});

cljs.core.async.t_cljs$core$async23429.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23429.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23429";

cljs.core.async.t_cljs$core$async23429.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23429");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23429.
 */
cljs.core.async.__GT_t_cljs$core$async23429 = (function cljs$core$async$__GT_t_cljs$core$async23429(f__$1,blockable__$1,meta23430){
return (new cljs.core.async.t_cljs$core$async23429(f__$1,blockable__$1,meta23430));
});

}

return (new cljs.core.async.t_cljs$core$async23429(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__23435 = arguments.length;
switch (G__23435) {
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
var G__23438 = arguments.length;
switch (G__23438) {
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
var G__23441 = arguments.length;
switch (G__23441) {
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
var val_23443 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23443);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23443,ret){
return (function (){
return fn1.call(null,val_23443);
});})(val_23443,ret))
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
var G__23445 = arguments.length;
switch (G__23445) {
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
var n__4607__auto___23447 = n;
var x_23448 = (0);
while(true){
if((x_23448 < n__4607__auto___23447)){
(a[x_23448] = (0));

var G__23449 = (x_23448 + (1));
x_23448 = G__23449;
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

var G__23450 = (i + (1));
i = G__23450;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23451 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23451 = (function (flag,meta23452){
this.flag = flag;
this.meta23452 = meta23452;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23453,meta23452__$1){
var self__ = this;
var _23453__$1 = this;
return (new cljs.core.async.t_cljs$core$async23451(self__.flag,meta23452__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23451.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23453){
var self__ = this;
var _23453__$1 = this;
return self__.meta23452;
});})(flag))
;

cljs.core.async.t_cljs$core$async23451.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23451.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23451.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23451.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23451.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23452","meta23452",-894285404,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23451.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23451.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23451";

cljs.core.async.t_cljs$core$async23451.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23451");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23451.
 */
cljs.core.async.__GT_t_cljs$core$async23451 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23451(flag__$1,meta23452){
return (new cljs.core.async.t_cljs$core$async23451(flag__$1,meta23452));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23451(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23454 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23454 = (function (flag,cb,meta23455){
this.flag = flag;
this.cb = cb;
this.meta23455 = meta23455;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23456,meta23455__$1){
var self__ = this;
var _23456__$1 = this;
return (new cljs.core.async.t_cljs$core$async23454(self__.flag,self__.cb,meta23455__$1));
});

cljs.core.async.t_cljs$core$async23454.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23456){
var self__ = this;
var _23456__$1 = this;
return self__.meta23455;
});

cljs.core.async.t_cljs$core$async23454.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23454.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23454.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23454.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23454.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23455","meta23455",338000142,null)], null);
});

cljs.core.async.t_cljs$core$async23454.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23454.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23454";

cljs.core.async.t_cljs$core$async23454.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23454");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23454.
 */
cljs.core.async.__GT_t_cljs$core$async23454 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23454(flag__$1,cb__$1,meta23455){
return (new cljs.core.async.t_cljs$core$async23454(flag__$1,cb__$1,meta23455));
});

}

return (new cljs.core.async.t_cljs$core$async23454(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__23457_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23457_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23458_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23458_SHARP_,port], null));
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
var G__23459 = (i + (1));
i = G__23459;
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
var len__4730__auto___23465 = arguments.length;
var i__4731__auto___23466 = (0);
while(true){
if((i__4731__auto___23466 < len__4730__auto___23465)){
args__4736__auto__.push((arguments[i__4731__auto___23466]));

var G__23467 = (i__4731__auto___23466 + (1));
i__4731__auto___23466 = G__23467;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23462){
var map__23463 = p__23462;
var map__23463__$1 = (((((!((map__23463 == null))))?(((((map__23463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23463.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23463):map__23463);
var opts = map__23463__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23460){
var G__23461 = cljs.core.first.call(null,seq23460);
var seq23460__$1 = cljs.core.next.call(null,seq23460);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23461,seq23460__$1);
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
var G__23469 = arguments.length;
switch (G__23469) {
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
var c__23368__auto___23515 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23368__auto___23515){
return (function (){
var f__23369__auto__ = (function (){var switch__23273__auto__ = ((function (c__23368__auto___23515){
return (function (state_23493){
var state_val_23494 = (state_23493[(1)]);
if((state_val_23494 === (7))){
var inst_23489 = (state_23493[(2)]);
var state_23493__$1 = state_23493;
var statearr_23495_23516 = state_23493__$1;
(statearr_23495_23516[(2)] = inst_23489);

(statearr_23495_23516[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23494 === (1))){
var state_23493__$1 = state_23493;
var statearr_23496_23517 = state_23493__$1;
(statearr_23496_23517[(2)] = null);

(statearr_23496_23517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23494 === (4))){
var inst_23472 = (state_23493[(7)]);
var inst_23472__$1 = (state_23493[(2)]);
var inst_23473 = (inst_23472__$1 == null);
var state_23493__$1 = (function (){var statearr_23497 = state_23493;
(statearr_23497[(7)] = inst_23472__$1);

return statearr_23497;
})();
if(cljs.core.truth_(inst_23473)){
var statearr_23498_23518 = state_23493__$1;
(statearr_23498_23518[(1)] = (5));

} else {
var statearr_23499_23519 = state_23493__$1;
(statearr_23499_23519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23494 === (13))){
var state_23493__$1 = state_23493;
var statearr_23500_23520 = state_23493__$1;
(statearr_23500_23520[(2)] = null);

(statearr_23500_23520[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23494 === (6))){
var inst_23472 = (state_23493[(7)]);
var state_23493__$1 = state_23493;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23493__$1,(11),to,inst_23472);
} else {
if((state_val_23494 === (3))){
var inst_23491 = (state_23493[(2)]);
var state_23493__$1 = state_23493;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23493__$1,inst_23491);
} else {
if((state_val_23494 === (12))){
var state_23493__$1 = state_23493;
var statearr_23501_23521 = state_23493__$1;
(statearr_23501_23521[(2)] = null);

(statearr_23501_23521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23494 === (2))){
var state_23493__$1 = state_23493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23493__$1,(4),from);
} else {
if((state_val_23494 === (11))){
var inst_23482 = (state_23493[(2)]);
var state_23493__$1 = state_23493;
if(cljs.core.truth_(inst_23482)){
var statearr_23502_23522 = state_23493__$1;
(statearr_23502_23522[(1)] = (12));

} else {
var statearr_23503_23523 = state_23493__$1;
(statearr_23503_23523[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23494 === (9))){
var state_23493__$1 = state_23493;
var statearr_23504_23524 = state_23493__$1;
(statearr_23504_23524[(2)] = null);

(statearr_23504_23524[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23494 === (5))){
var state_23493__$1 = state_23493;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23505_23525 = state_23493__$1;
(statearr_23505_23525[(1)] = (8));

} else {
var statearr_23506_23526 = state_23493__$1;
(statearr_23506_23526[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23494 === (14))){
var inst_23487 = (state_23493[(2)]);
var state_23493__$1 = state_23493;
var statearr_23507_23527 = state_23493__$1;
(statearr_23507_23527[(2)] = inst_23487);

(statearr_23507_23527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23494 === (10))){
var inst_23479 = (state_23493[(2)]);
var state_23493__$1 = state_23493;
var statearr_23508_23528 = state_23493__$1;
(statearr_23508_23528[(2)] = inst_23479);

(statearr_23508_23528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23494 === (8))){
var inst_23476 = cljs.core.async.close_BANG_.call(null,to);
var state_23493__$1 = state_23493;
var statearr_23509_23529 = state_23493__$1;
(statearr_23509_23529[(2)] = inst_23476);

(statearr_23509_23529[(1)] = (10));


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
});})(c__23368__auto___23515))
;
return ((function (switch__23273__auto__,c__23368__auto___23515){
return (function() {
var cljs$core$async$state_machine__23274__auto__ = null;
var cljs$core$async$state_machine__23274__auto____0 = (function (){
var statearr_23510 = [null,null,null,null,null,null,null,null];
(statearr_23510[(0)] = cljs$core$async$state_machine__23274__auto__);

(statearr_23510[(1)] = (1));

return statearr_23510;
});
var cljs$core$async$state_machine__23274__auto____1 = (function (state_23493){
while(true){
var ret_value__23275__auto__ = (function (){try{while(true){
var result__23276__auto__ = switch__23273__auto__.call(null,state_23493);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23276__auto__;
}
break;
}
}catch (e23511){if((e23511 instanceof Object)){
var ex__23277__auto__ = e23511;
var statearr_23512_23530 = state_23493;
(statearr_23512_23530[(5)] = ex__23277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23531 = state_23493;
state_23493 = G__23531;
continue;
} else {
return ret_value__23275__auto__;
}
break;
}
});
cljs$core$async$state_machine__23274__auto__ = function(state_23493){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23274__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23274__auto____1.call(this,state_23493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23274__auto____0;
cljs$core$async$state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23274__auto____1;
return cljs$core$async$state_machine__23274__auto__;
})()
;})(switch__23273__auto__,c__23368__auto___23515))
})();
var state__23370__auto__ = (function (){var statearr_23513 = f__23369__auto__.call(null);
(statearr_23513[(6)] = c__23368__auto___23515);

return statearr_23513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23370__auto__);
});})(c__23368__auto___23515))
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
return (function (p__23532){
var vec__23533 = p__23532;
var v = cljs.core.nth.call(null,vec__23533,(0),null);
var p = cljs.core.nth.call(null,vec__23533,(1),null);
var job = vec__23533;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23368__auto___23704 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23368__auto___23704,res,vec__23533,v,p,job,jobs,results){
return (function (){
var f__23369__auto__ = (function (){var switch__23273__auto__ = ((function (c__23368__auto___23704,res,vec__23533,v,p,job,jobs,results){
return (function (state_23540){
var state_val_23541 = (state_23540[(1)]);
if((state_val_23541 === (1))){
var state_23540__$1 = state_23540;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23540__$1,(2),res,v);
} else {
if((state_val_23541 === (2))){
var inst_23537 = (state_23540[(2)]);
var inst_23538 = cljs.core.async.close_BANG_.call(null,res);
var state_23540__$1 = (function (){var statearr_23542 = state_23540;
(statearr_23542[(7)] = inst_23537);

return statearr_23542;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23540__$1,inst_23538);
} else {
return null;
}
}
});})(c__23368__auto___23704,res,vec__23533,v,p,job,jobs,results))
;
return ((function (switch__23273__auto__,c__23368__auto___23704,res,vec__23533,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23274__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23274__auto____0 = (function (){
var statearr_23543 = [null,null,null,null,null,null,null,null];
(statearr_23543[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23274__auto__);

(statearr_23543[(1)] = (1));

return statearr_23543;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23274__auto____1 = (function (state_23540){
while(true){
var ret_value__23275__auto__ = (function (){try{while(true){
var result__23276__auto__ = switch__23273__auto__.call(null,state_23540);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23276__auto__;
}
break;
}
}catch (e23544){if((e23544 instanceof Object)){
var ex__23277__auto__ = e23544;
var statearr_23545_23705 = state_23540;
(statearr_23545_23705[(5)] = ex__23277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23540);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23544;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23706 = state_23540;
state_23540 = G__23706;
continue;
} else {
return ret_value__23275__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23274__auto__ = function(state_23540){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23274__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23274__auto____1.call(this,state_23540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23274__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23274__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23274__auto__;
})()
;})(switch__23273__auto__,c__23368__auto___23704,res,vec__23533,v,p,job,jobs,results))
})();
var state__23370__auto__ = (function (){var statearr_23546 = f__23369__auto__.call(null);
(statearr_23546[(6)] = c__23368__auto___23704);

return statearr_23546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23370__auto__);
});})(c__23368__auto___23704,res,vec__23533,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23547){
var vec__23548 = p__23547;
var v = cljs.core.nth.call(null,vec__23548,(0),null);
var p = cljs.core.nth.call(null,vec__23548,(1),null);
var job = vec__23548;
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
var n__4607__auto___23707 = n;
var __23708 = (0);
while(true){
if((__23708 < n__4607__auto___23707)){
var G__23551_23709 = type;
var G__23551_23710__$1 = (((G__23551_23709 instanceof cljs.core.Keyword))?G__23551_23709.fqn:null);
switch (G__23551_23710__$1) {
case "compute":
var c__23368__auto___23712 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23708,c__23368__auto___23712,G__23551_23709,G__23551_23710__$1,n__4607__auto___23707,jobs,results,process,async){
return (function (){
var f__23369__auto__ = (function (){var switch__23273__auto__ = ((function (__23708,c__23368__auto___23712,G__23551_23709,G__23551_23710__$1,n__4607__auto___23707,jobs,results,process,async){
return (function (state_23564){
var state_val_23565 = (state_23564[(1)]);
if((state_val_23565 === (1))){
var state_23564__$1 = state_23564;
var statearr_23566_23713 = state_23564__$1;
(statearr_23566_23713[(2)] = null);

(statearr_23566_23713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23565 === (2))){
var state_23564__$1 = state_23564;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23564__$1,(4),jobs);
} else {
if((state_val_23565 === (3))){
var inst_23562 = (state_23564[(2)]);
var state_23564__$1 = state_23564;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23564__$1,inst_23562);
} else {
if((state_val_23565 === (4))){
var inst_23554 = (state_23564[(2)]);
var inst_23555 = process.call(null,inst_23554);
var state_23564__$1 = state_23564;
if(cljs.core.truth_(inst_23555)){
var statearr_23567_23714 = state_23564__$1;
(statearr_23567_23714[(1)] = (5));

} else {
var statearr_23568_23715 = state_23564__$1;
(statearr_23568_23715[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23565 === (5))){
var state_23564__$1 = state_23564;
var statearr_23569_23716 = state_23564__$1;
(statearr_23569_23716[(2)] = null);

(statearr_23569_23716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23565 === (6))){
var state_23564__$1 = state_23564;
var statearr_23570_23717 = state_23564__$1;
(statearr_23570_23717[(2)] = null);

(statearr_23570_23717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23565 === (7))){
var inst_23560 = (state_23564[(2)]);
var state_23564__$1 = state_23564;
var statearr_23571_23718 = state_23564__$1;
(statearr_23571_23718[(2)] = inst_23560);

(statearr_23571_23718[(1)] = (3));


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
});})(__23708,c__23368__auto___23712,G__23551_23709,G__23551_23710__$1,n__4607__auto___23707,jobs,results,process,async))
;
return ((function (__23708,switch__23273__auto__,c__23368__auto___23712,G__23551_23709,G__23551_23710__$1,n__4607__auto___23707,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23274__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23274__auto____0 = (function (){
var statearr_23572 = [null,null,null,null,null,null,null];
(statearr_23572[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23274__auto__);

(statearr_23572[(1)] = (1));

return statearr_23572;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23274__auto____1 = (function (state_23564){
while(true){
var ret_value__23275__auto__ = (function (){try{while(true){
var result__23276__auto__ = switch__23273__auto__.call(null,state_23564);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23276__auto__;
}
break;
}
}catch (e23573){if((e23573 instanceof Object)){
var ex__23277__auto__ = e23573;
var statearr_23574_23719 = state_23564;
(statearr_23574_23719[(5)] = ex__23277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23720 = state_23564;
state_23564 = G__23720;
continue;
} else {
return ret_value__23275__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23274__auto__ = function(state_23564){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23274__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23274__auto____1.call(this,state_23564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23274__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23274__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23274__auto__;
})()
;})(__23708,switch__23273__auto__,c__23368__auto___23712,G__23551_23709,G__23551_23710__$1,n__4607__auto___23707,jobs,results,process,async))
})();
var state__23370__auto__ = (function (){var statearr_23575 = f__23369__auto__.call(null);
(statearr_23575[(6)] = c__23368__auto___23712);

return statearr_23575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23370__auto__);
});})(__23708,c__23368__auto___23712,G__23551_23709,G__23551_23710__$1,n__4607__auto___23707,jobs,results,process,async))
);


break;
case "async":
var c__23368__auto___23721 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23708,c__23368__auto___23721,G__23551_23709,G__23551_23710__$1,n__4607__auto___23707,jobs,results,process,async){
return (function (){
var f__23369__auto__ = (function (){var switch__23273__auto__ = ((function (__23708,c__23368__auto___23721,G__23551_23709,G__23551_23710__$1,n__4607__auto___23707,jobs,results,process,async){
return (function (state_23588){
var state_val_23589 = (state_23588[(1)]);
if((state_val_23589 === (1))){
var state_23588__$1 = state_23588;
var statearr_23590_23722 = state_23588__$1;
(statearr_23590_23722[(2)] = null);

(statearr_23590_23722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (2))){
var state_23588__$1 = state_23588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23588__$1,(4),jobs);
} else {
if((state_val_23589 === (3))){
var inst_23586 = (state_23588[(2)]);
var state_23588__$1 = state_23588;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23588__$1,inst_23586);
} else {
if((state_val_23589 === (4))){
var inst_23578 = (state_23588[(2)]);
var inst_23579 = async.call(null,inst_23578);
var state_23588__$1 = state_23588;
if(cljs.core.truth_(inst_23579)){
var statearr_23591_23723 = state_23588__$1;
(statearr_23591_23723[(1)] = (5));

} else {
var statearr_23592_23724 = state_23588__$1;
(statearr_23592_23724[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (5))){
var state_23588__$1 = state_23588;
var statearr_23593_23725 = state_23588__$1;
(statearr_23593_23725[(2)] = null);

(statearr_23593_23725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (6))){
var state_23588__$1 = state_23588;
var statearr_23594_23726 = state_23588__$1;
(statearr_23594_23726[(2)] = null);

(statearr_23594_23726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (7))){
var inst_23584 = (state_23588[(2)]);
var state_23588__$1 = state_23588;
var statearr_23595_23727 = state_23588__$1;
(statearr_23595_23727[(2)] = inst_23584);

(statearr_23595_23727[(1)] = (3));


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
});})(__23708,c__23368__auto___23721,G__23551_23709,G__23551_23710__$1,n__4607__auto___23707,jobs,results,process,async))
;
return ((function (__23708,switch__23273__auto__,c__23368__auto___23721,G__23551_23709,G__23551_23710__$1,n__4607__auto___23707,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23274__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23274__auto____0 = (function (){
var statearr_23596 = [null,null,null,null,null,null,null];
(statearr_23596[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23274__auto__);

(statearr_23596[(1)] = (1));

return statearr_23596;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23274__auto____1 = (function (state_23588){
while(true){
var ret_value__23275__auto__ = (function (){try{while(true){
var result__23276__auto__ = switch__23273__auto__.call(null,state_23588);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23276__auto__;
}
break;
}
}catch (e23597){if((e23597 instanceof Object)){
var ex__23277__auto__ = e23597;
var statearr_23598_23728 = state_23588;
(statearr_23598_23728[(5)] = ex__23277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23588);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23729 = state_23588;
state_23588 = G__23729;
continue;
} else {
return ret_value__23275__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23274__auto__ = function(state_23588){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23274__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23274__auto____1.call(this,state_23588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23274__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23274__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23274__auto__;
})()
;})(__23708,switch__23273__auto__,c__23368__auto___23721,G__23551_23709,G__23551_23710__$1,n__4607__auto___23707,jobs,results,process,async))
})();
var state__23370__auto__ = (function (){var statearr_23599 = f__23369__auto__.call(null);
(statearr_23599[(6)] = c__23368__auto___23721);

return statearr_23599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23370__auto__);
});})(__23708,c__23368__auto___23721,G__23551_23709,G__23551_23710__$1,n__4607__auto___23707,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23551_23710__$1)].join('')));

}

var G__23730 = (__23708 + (1));
__23708 = G__23730;
continue;
} else {
}
break;
}

var c__23368__auto___23731 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23368__auto___23731,jobs,results,process,async){
return (function (){
var f__23369__auto__ = (function (){var switch__23273__auto__ = ((function (c__23368__auto___23731,jobs,results,process,async){
return (function (state_23621){
var state_val_23622 = (state_23621[(1)]);
if((state_val_23622 === (7))){
var inst_23617 = (state_23621[(2)]);
var state_23621__$1 = state_23621;
var statearr_23623_23732 = state_23621__$1;
(statearr_23623_23732[(2)] = inst_23617);

(statearr_23623_23732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23622 === (1))){
var state_23621__$1 = state_23621;
var statearr_23624_23733 = state_23621__$1;
(statearr_23624_23733[(2)] = null);

(statearr_23624_23733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23622 === (4))){
var inst_23602 = (state_23621[(7)]);
var inst_23602__$1 = (state_23621[(2)]);
var inst_23603 = (inst_23602__$1 == null);
var state_23621__$1 = (function (){var statearr_23625 = state_23621;
(statearr_23625[(7)] = inst_23602__$1);

return statearr_23625;
})();
if(cljs.core.truth_(inst_23603)){
var statearr_23626_23734 = state_23621__$1;
(statearr_23626_23734[(1)] = (5));

} else {
var statearr_23627_23735 = state_23621__$1;
(statearr_23627_23735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23622 === (6))){
var inst_23602 = (state_23621[(7)]);
var inst_23607 = (state_23621[(8)]);
var inst_23607__$1 = cljs.core.async.chan.call(null,(1));
var inst_23608 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23609 = [inst_23602,inst_23607__$1];
var inst_23610 = (new cljs.core.PersistentVector(null,2,(5),inst_23608,inst_23609,null));
var state_23621__$1 = (function (){var statearr_23628 = state_23621;
(statearr_23628[(8)] = inst_23607__$1);

return statearr_23628;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23621__$1,(8),jobs,inst_23610);
} else {
if((state_val_23622 === (3))){
var inst_23619 = (state_23621[(2)]);
var state_23621__$1 = state_23621;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23621__$1,inst_23619);
} else {
if((state_val_23622 === (2))){
var state_23621__$1 = state_23621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23621__$1,(4),from);
} else {
if((state_val_23622 === (9))){
var inst_23614 = (state_23621[(2)]);
var state_23621__$1 = (function (){var statearr_23629 = state_23621;
(statearr_23629[(9)] = inst_23614);

return statearr_23629;
})();
var statearr_23630_23736 = state_23621__$1;
(statearr_23630_23736[(2)] = null);

(statearr_23630_23736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23622 === (5))){
var inst_23605 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23621__$1 = state_23621;
var statearr_23631_23737 = state_23621__$1;
(statearr_23631_23737[(2)] = inst_23605);

(statearr_23631_23737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23622 === (8))){
var inst_23607 = (state_23621[(8)]);
var inst_23612 = (state_23621[(2)]);
var state_23621__$1 = (function (){var statearr_23632 = state_23621;
(statearr_23632[(10)] = inst_23612);

return statearr_23632;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23621__$1,(9),results,inst_23607);
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
});})(c__23368__auto___23731,jobs,results,process,async))
;
return ((function (switch__23273__auto__,c__23368__auto___23731,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23274__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23274__auto____0 = (function (){
var statearr_23633 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23633[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23274__auto__);

(statearr_23633[(1)] = (1));

return statearr_23633;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23274__auto____1 = (function (state_23621){
while(true){
var ret_value__23275__auto__ = (function (){try{while(true){
var result__23276__auto__ = switch__23273__auto__.call(null,state_23621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23276__auto__;
}
break;
}
}catch (e23634){if((e23634 instanceof Object)){
var ex__23277__auto__ = e23634;
var statearr_23635_23738 = state_23621;
(statearr_23635_23738[(5)] = ex__23277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23634;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23739 = state_23621;
state_23621 = G__23739;
continue;
} else {
return ret_value__23275__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23274__auto__ = function(state_23621){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23274__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23274__auto____1.call(this,state_23621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23274__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23274__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23274__auto__;
})()
;})(switch__23273__auto__,c__23368__auto___23731,jobs,results,process,async))
})();
var state__23370__auto__ = (function (){var statearr_23636 = f__23369__auto__.call(null);
(statearr_23636[(6)] = c__23368__auto___23731);

return statearr_23636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23370__auto__);
});})(c__23368__auto___23731,jobs,results,process,async))
);


var c__23368__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23368__auto__,jobs,results,process,async){
return (function (){
var f__23369__auto__ = (function (){var switch__23273__auto__ = ((function (c__23368__auto__,jobs,results,process,async){
return (function (state_23674){
var state_val_23675 = (state_23674[(1)]);
if((state_val_23675 === (7))){
var inst_23670 = (state_23674[(2)]);
var state_23674__$1 = state_23674;
var statearr_23676_23740 = state_23674__$1;
(statearr_23676_23740[(2)] = inst_23670);

(statearr_23676_23740[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23675 === (20))){
var state_23674__$1 = state_23674;
var statearr_23677_23741 = state_23674__$1;
(statearr_23677_23741[(2)] = null);

(statearr_23677_23741[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23675 === (1))){
var state_23674__$1 = state_23674;
var statearr_23678_23742 = state_23674__$1;
(statearr_23678_23742[(2)] = null);

(statearr_23678_23742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23675 === (4))){
var inst_23639 = (state_23674[(7)]);
var inst_23639__$1 = (state_23674[(2)]);
var inst_23640 = (inst_23639__$1 == null);
var state_23674__$1 = (function (){var statearr_23679 = state_23674;
(statearr_23679[(7)] = inst_23639__$1);

return statearr_23679;
})();
if(cljs.core.truth_(inst_23640)){
var statearr_23680_23743 = state_23674__$1;
(statearr_23680_23743[(1)] = (5));

} else {
var statearr_23681_23744 = state_23674__$1;
(statearr_23681_23744[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23675 === (15))){
var inst_23652 = (state_23674[(8)]);
var state_23674__$1 = state_23674;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23674__$1,(18),to,inst_23652);
} else {
if((state_val_23675 === (21))){
var inst_23665 = (state_23674[(2)]);
var state_23674__$1 = state_23674;
var statearr_23682_23745 = state_23674__$1;
(statearr_23682_23745[(2)] = inst_23665);

(statearr_23682_23745[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23675 === (13))){
var inst_23667 = (state_23674[(2)]);
var state_23674__$1 = (function (){var statearr_23683 = state_23674;
(statearr_23683[(9)] = inst_23667);

return statearr_23683;
})();
var statearr_23684_23746 = state_23674__$1;
(statearr_23684_23746[(2)] = null);

(statearr_23684_23746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23675 === (6))){
var inst_23639 = (state_23674[(7)]);
var state_23674__$1 = state_23674;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23674__$1,(11),inst_23639);
} else {
if((state_val_23675 === (17))){
var inst_23660 = (state_23674[(2)]);
var state_23674__$1 = state_23674;
if(cljs.core.truth_(inst_23660)){
var statearr_23685_23747 = state_23674__$1;
(statearr_23685_23747[(1)] = (19));

} else {
var statearr_23686_23748 = state_23674__$1;
(statearr_23686_23748[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23675 === (3))){
var inst_23672 = (state_23674[(2)]);
var state_23674__$1 = state_23674;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23674__$1,inst_23672);
} else {
if((state_val_23675 === (12))){
var inst_23649 = (state_23674[(10)]);
var state_23674__$1 = state_23674;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23674__$1,(14),inst_23649);
} else {
if((state_val_23675 === (2))){
var state_23674__$1 = state_23674;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23674__$1,(4),results);
} else {
if((state_val_23675 === (19))){
var state_23674__$1 = state_23674;
var statearr_23687_23749 = state_23674__$1;
(statearr_23687_23749[(2)] = null);

(statearr_23687_23749[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23675 === (11))){
var inst_23649 = (state_23674[(2)]);
var state_23674__$1 = (function (){var statearr_23688 = state_23674;
(statearr_23688[(10)] = inst_23649);

return statearr_23688;
})();
var statearr_23689_23750 = state_23674__$1;
(statearr_23689_23750[(2)] = null);

(statearr_23689_23750[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23675 === (9))){
var state_23674__$1 = state_23674;
var statearr_23690_23751 = state_23674__$1;
(statearr_23690_23751[(2)] = null);

(statearr_23690_23751[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23675 === (5))){
var state_23674__$1 = state_23674;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23691_23752 = state_23674__$1;
(statearr_23691_23752[(1)] = (8));

} else {
var statearr_23692_23753 = state_23674__$1;
(statearr_23692_23753[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23675 === (14))){
var inst_23652 = (state_23674[(8)]);
var inst_23654 = (state_23674[(11)]);
var inst_23652__$1 = (state_23674[(2)]);
var inst_23653 = (inst_23652__$1 == null);
var inst_23654__$1 = cljs.core.not.call(null,inst_23653);
var state_23674__$1 = (function (){var statearr_23693 = state_23674;
(statearr_23693[(8)] = inst_23652__$1);

(statearr_23693[(11)] = inst_23654__$1);

return statearr_23693;
})();
if(inst_23654__$1){
var statearr_23694_23754 = state_23674__$1;
(statearr_23694_23754[(1)] = (15));

} else {
var statearr_23695_23755 = state_23674__$1;
(statearr_23695_23755[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23675 === (16))){
var inst_23654 = (state_23674[(11)]);
var state_23674__$1 = state_23674;
var statearr_23696_23756 = state_23674__$1;
(statearr_23696_23756[(2)] = inst_23654);

(statearr_23696_23756[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23675 === (10))){
var inst_23646 = (state_23674[(2)]);
var state_23674__$1 = state_23674;
var statearr_23697_23757 = state_23674__$1;
(statearr_23697_23757[(2)] = inst_23646);

(statearr_23697_23757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23675 === (18))){
var inst_23657 = (state_23674[(2)]);
var state_23674__$1 = state_23674;
var statearr_23698_23758 = state_23674__$1;
(statearr_23698_23758[(2)] = inst_23657);

(statearr_23698_23758[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23675 === (8))){
var inst_23643 = cljs.core.async.close_BANG_.call(null,to);
var state_23674__$1 = state_23674;
var statearr_23699_23759 = state_23674__$1;
(statearr_23699_23759[(2)] = inst_23643);

(statearr_23699_23759[(1)] = (10));


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
});})(c__23368__auto__,jobs,results,process,async))
;
return ((function (switch__23273__auto__,c__23368__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23274__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23274__auto____0 = (function (){
var statearr_23700 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23700[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23274__auto__);

(statearr_23700[(1)] = (1));

return statearr_23700;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23274__auto____1 = (function (state_23674){
while(true){
var ret_value__23275__auto__ = (function (){try{while(true){
var result__23276__auto__ = switch__23273__auto__.call(null,state_23674);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23276__auto__;
}
break;
}
}catch (e23701){if((e23701 instanceof Object)){
var ex__23277__auto__ = e23701;
var statearr_23702_23760 = state_23674;
(statearr_23702_23760[(5)] = ex__23277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23701;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23761 = state_23674;
state_23674 = G__23761;
continue;
} else {
return ret_value__23275__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23274__auto__ = function(state_23674){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23274__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23274__auto____1.call(this,state_23674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23274__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23274__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23274__auto__;
})()
;})(switch__23273__auto__,c__23368__auto__,jobs,results,process,async))
})();
var state__23370__auto__ = (function (){var statearr_23703 = f__23369__auto__.call(null);
(statearr_23703[(6)] = c__23368__auto__);

return statearr_23703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23370__auto__);
});})(c__23368__auto__,jobs,results,process,async))
);

return c__23368__auto__;
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
var G__23763 = arguments.length;
switch (G__23763) {
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
var G__23766 = arguments.length;
switch (G__23766) {
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
var G__23769 = arguments.length;
switch (G__23769) {
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
var c__23368__auto___23818 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23368__auto___23818,tc,fc){
return (function (){
var f__23369__auto__ = (function (){var switch__23273__auto__ = ((function (c__23368__auto___23818,tc,fc){
return (function (state_23795){
var state_val_23796 = (state_23795[(1)]);
if((state_val_23796 === (7))){
var inst_23791 = (state_23795[(2)]);
var state_23795__$1 = state_23795;
var statearr_23797_23819 = state_23795__$1;
(statearr_23797_23819[(2)] = inst_23791);

(statearr_23797_23819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23796 === (1))){
var state_23795__$1 = state_23795;
var statearr_23798_23820 = state_23795__$1;
(statearr_23798_23820[(2)] = null);

(statearr_23798_23820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23796 === (4))){
var inst_23772 = (state_23795[(7)]);
var inst_23772__$1 = (state_23795[(2)]);
var inst_23773 = (inst_23772__$1 == null);
var state_23795__$1 = (function (){var statearr_23799 = state_23795;
(statearr_23799[(7)] = inst_23772__$1);

return statearr_23799;
})();
if(cljs.core.truth_(inst_23773)){
var statearr_23800_23821 = state_23795__$1;
(statearr_23800_23821[(1)] = (5));

} else {
var statearr_23801_23822 = state_23795__$1;
(statearr_23801_23822[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23796 === (13))){
var state_23795__$1 = state_23795;
var statearr_23802_23823 = state_23795__$1;
(statearr_23802_23823[(2)] = null);

(statearr_23802_23823[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23796 === (6))){
var inst_23772 = (state_23795[(7)]);
var inst_23778 = p.call(null,inst_23772);
var state_23795__$1 = state_23795;
if(cljs.core.truth_(inst_23778)){
var statearr_23803_23824 = state_23795__$1;
(statearr_23803_23824[(1)] = (9));

} else {
var statearr_23804_23825 = state_23795__$1;
(statearr_23804_23825[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23796 === (3))){
var inst_23793 = (state_23795[(2)]);
var state_23795__$1 = state_23795;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23795__$1,inst_23793);
} else {
if((state_val_23796 === (12))){
var state_23795__$1 = state_23795;
var statearr_23805_23826 = state_23795__$1;
(statearr_23805_23826[(2)] = null);

(statearr_23805_23826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23796 === (2))){
var state_23795__$1 = state_23795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23795__$1,(4),ch);
} else {
if((state_val_23796 === (11))){
var inst_23772 = (state_23795[(7)]);
var inst_23782 = (state_23795[(2)]);
var state_23795__$1 = state_23795;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23795__$1,(8),inst_23782,inst_23772);
} else {
if((state_val_23796 === (9))){
var state_23795__$1 = state_23795;
var statearr_23806_23827 = state_23795__$1;
(statearr_23806_23827[(2)] = tc);

(statearr_23806_23827[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23796 === (5))){
var inst_23775 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23776 = cljs.core.async.close_BANG_.call(null,fc);
var state_23795__$1 = (function (){var statearr_23807 = state_23795;
(statearr_23807[(8)] = inst_23775);

return statearr_23807;
})();
var statearr_23808_23828 = state_23795__$1;
(statearr_23808_23828[(2)] = inst_23776);

(statearr_23808_23828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23796 === (14))){
var inst_23789 = (state_23795[(2)]);
var state_23795__$1 = state_23795;
var statearr_23809_23829 = state_23795__$1;
(statearr_23809_23829[(2)] = inst_23789);

(statearr_23809_23829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23796 === (10))){
var state_23795__$1 = state_23795;
var statearr_23810_23830 = state_23795__$1;
(statearr_23810_23830[(2)] = fc);

(statearr_23810_23830[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23796 === (8))){
var inst_23784 = (state_23795[(2)]);
var state_23795__$1 = state_23795;
if(cljs.core.truth_(inst_23784)){
var statearr_23811_23831 = state_23795__$1;
(statearr_23811_23831[(1)] = (12));

} else {
var statearr_23812_23832 = state_23795__$1;
(statearr_23812_23832[(1)] = (13));

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
});})(c__23368__auto___23818,tc,fc))
;
return ((function (switch__23273__auto__,c__23368__auto___23818,tc,fc){
return (function() {
var cljs$core$async$state_machine__23274__auto__ = null;
var cljs$core$async$state_machine__23274__auto____0 = (function (){
var statearr_23813 = [null,null,null,null,null,null,null,null,null];
(statearr_23813[(0)] = cljs$core$async$state_machine__23274__auto__);

(statearr_23813[(1)] = (1));

return statearr_23813;
});
var cljs$core$async$state_machine__23274__auto____1 = (function (state_23795){
while(true){
var ret_value__23275__auto__ = (function (){try{while(true){
var result__23276__auto__ = switch__23273__auto__.call(null,state_23795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23276__auto__;
}
break;
}
}catch (e23814){if((e23814 instanceof Object)){
var ex__23277__auto__ = e23814;
var statearr_23815_23833 = state_23795;
(statearr_23815_23833[(5)] = ex__23277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23814;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23834 = state_23795;
state_23795 = G__23834;
continue;
} else {
return ret_value__23275__auto__;
}
break;
}
});
cljs$core$async$state_machine__23274__auto__ = function(state_23795){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23274__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23274__auto____1.call(this,state_23795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23274__auto____0;
cljs$core$async$state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23274__auto____1;
return cljs$core$async$state_machine__23274__auto__;
})()
;})(switch__23273__auto__,c__23368__auto___23818,tc,fc))
})();
var state__23370__auto__ = (function (){var statearr_23816 = f__23369__auto__.call(null);
(statearr_23816[(6)] = c__23368__auto___23818);

return statearr_23816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23370__auto__);
});})(c__23368__auto___23818,tc,fc))
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
var c__23368__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23368__auto__){
return (function (){
var f__23369__auto__ = (function (){var switch__23273__auto__ = ((function (c__23368__auto__){
return (function (state_23855){
var state_val_23856 = (state_23855[(1)]);
if((state_val_23856 === (7))){
var inst_23851 = (state_23855[(2)]);
var state_23855__$1 = state_23855;
var statearr_23857_23875 = state_23855__$1;
(statearr_23857_23875[(2)] = inst_23851);

(statearr_23857_23875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (1))){
var inst_23835 = init;
var state_23855__$1 = (function (){var statearr_23858 = state_23855;
(statearr_23858[(7)] = inst_23835);

return statearr_23858;
})();
var statearr_23859_23876 = state_23855__$1;
(statearr_23859_23876[(2)] = null);

(statearr_23859_23876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (4))){
var inst_23838 = (state_23855[(8)]);
var inst_23838__$1 = (state_23855[(2)]);
var inst_23839 = (inst_23838__$1 == null);
var state_23855__$1 = (function (){var statearr_23860 = state_23855;
(statearr_23860[(8)] = inst_23838__$1);

return statearr_23860;
})();
if(cljs.core.truth_(inst_23839)){
var statearr_23861_23877 = state_23855__$1;
(statearr_23861_23877[(1)] = (5));

} else {
var statearr_23862_23878 = state_23855__$1;
(statearr_23862_23878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (6))){
var inst_23838 = (state_23855[(8)]);
var inst_23842 = (state_23855[(9)]);
var inst_23835 = (state_23855[(7)]);
var inst_23842__$1 = f.call(null,inst_23835,inst_23838);
var inst_23843 = cljs.core.reduced_QMARK_.call(null,inst_23842__$1);
var state_23855__$1 = (function (){var statearr_23863 = state_23855;
(statearr_23863[(9)] = inst_23842__$1);

return statearr_23863;
})();
if(inst_23843){
var statearr_23864_23879 = state_23855__$1;
(statearr_23864_23879[(1)] = (8));

} else {
var statearr_23865_23880 = state_23855__$1;
(statearr_23865_23880[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (3))){
var inst_23853 = (state_23855[(2)]);
var state_23855__$1 = state_23855;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23855__$1,inst_23853);
} else {
if((state_val_23856 === (2))){
var state_23855__$1 = state_23855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23855__$1,(4),ch);
} else {
if((state_val_23856 === (9))){
var inst_23842 = (state_23855[(9)]);
var inst_23835 = inst_23842;
var state_23855__$1 = (function (){var statearr_23866 = state_23855;
(statearr_23866[(7)] = inst_23835);

return statearr_23866;
})();
var statearr_23867_23881 = state_23855__$1;
(statearr_23867_23881[(2)] = null);

(statearr_23867_23881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (5))){
var inst_23835 = (state_23855[(7)]);
var state_23855__$1 = state_23855;
var statearr_23868_23882 = state_23855__$1;
(statearr_23868_23882[(2)] = inst_23835);

(statearr_23868_23882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (10))){
var inst_23849 = (state_23855[(2)]);
var state_23855__$1 = state_23855;
var statearr_23869_23883 = state_23855__$1;
(statearr_23869_23883[(2)] = inst_23849);

(statearr_23869_23883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (8))){
var inst_23842 = (state_23855[(9)]);
var inst_23845 = cljs.core.deref.call(null,inst_23842);
var state_23855__$1 = state_23855;
var statearr_23870_23884 = state_23855__$1;
(statearr_23870_23884[(2)] = inst_23845);

(statearr_23870_23884[(1)] = (10));


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
});})(c__23368__auto__))
;
return ((function (switch__23273__auto__,c__23368__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23274__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23274__auto____0 = (function (){
var statearr_23871 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23871[(0)] = cljs$core$async$reduce_$_state_machine__23274__auto__);

(statearr_23871[(1)] = (1));

return statearr_23871;
});
var cljs$core$async$reduce_$_state_machine__23274__auto____1 = (function (state_23855){
while(true){
var ret_value__23275__auto__ = (function (){try{while(true){
var result__23276__auto__ = switch__23273__auto__.call(null,state_23855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23276__auto__;
}
break;
}
}catch (e23872){if((e23872 instanceof Object)){
var ex__23277__auto__ = e23872;
var statearr_23873_23885 = state_23855;
(statearr_23873_23885[(5)] = ex__23277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23872;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23886 = state_23855;
state_23855 = G__23886;
continue;
} else {
return ret_value__23275__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23274__auto__ = function(state_23855){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23274__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23274__auto____1.call(this,state_23855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23274__auto____0;
cljs$core$async$reduce_$_state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23274__auto____1;
return cljs$core$async$reduce_$_state_machine__23274__auto__;
})()
;})(switch__23273__auto__,c__23368__auto__))
})();
var state__23370__auto__ = (function (){var statearr_23874 = f__23369__auto__.call(null);
(statearr_23874[(6)] = c__23368__auto__);

return statearr_23874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23370__auto__);
});})(c__23368__auto__))
);

return c__23368__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__23368__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23368__auto__,f__$1){
return (function (){
var f__23369__auto__ = (function (){var switch__23273__auto__ = ((function (c__23368__auto__,f__$1){
return (function (state_23892){
var state_val_23893 = (state_23892[(1)]);
if((state_val_23893 === (1))){
var inst_23887 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_23892__$1 = state_23892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23892__$1,(2),inst_23887);
} else {
if((state_val_23893 === (2))){
var inst_23889 = (state_23892[(2)]);
var inst_23890 = f__$1.call(null,inst_23889);
var state_23892__$1 = state_23892;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23892__$1,inst_23890);
} else {
return null;
}
}
});})(c__23368__auto__,f__$1))
;
return ((function (switch__23273__auto__,c__23368__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__23274__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23274__auto____0 = (function (){
var statearr_23894 = [null,null,null,null,null,null,null];
(statearr_23894[(0)] = cljs$core$async$transduce_$_state_machine__23274__auto__);

(statearr_23894[(1)] = (1));

return statearr_23894;
});
var cljs$core$async$transduce_$_state_machine__23274__auto____1 = (function (state_23892){
while(true){
var ret_value__23275__auto__ = (function (){try{while(true){
var result__23276__auto__ = switch__23273__auto__.call(null,state_23892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23276__auto__;
}
break;
}
}catch (e23895){if((e23895 instanceof Object)){
var ex__23277__auto__ = e23895;
var statearr_23896_23898 = state_23892;
(statearr_23896_23898[(5)] = ex__23277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23899 = state_23892;
state_23892 = G__23899;
continue;
} else {
return ret_value__23275__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23274__auto__ = function(state_23892){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23274__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23274__auto____1.call(this,state_23892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23274__auto____0;
cljs$core$async$transduce_$_state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23274__auto____1;
return cljs$core$async$transduce_$_state_machine__23274__auto__;
})()
;})(switch__23273__auto__,c__23368__auto__,f__$1))
})();
var state__23370__auto__ = (function (){var statearr_23897 = f__23369__auto__.call(null);
(statearr_23897[(6)] = c__23368__auto__);

return statearr_23897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23370__auto__);
});})(c__23368__auto__,f__$1))
);

return c__23368__auto__;
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
var G__23901 = arguments.length;
switch (G__23901) {
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
var c__23368__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23368__auto__){
return (function (){
var f__23369__auto__ = (function (){var switch__23273__auto__ = ((function (c__23368__auto__){
return (function (state_23926){
var state_val_23927 = (state_23926[(1)]);
if((state_val_23927 === (7))){
var inst_23908 = (state_23926[(2)]);
var state_23926__$1 = state_23926;
var statearr_23928_23949 = state_23926__$1;
(statearr_23928_23949[(2)] = inst_23908);

(statearr_23928_23949[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23927 === (1))){
var inst_23902 = cljs.core.seq.call(null,coll);
var inst_23903 = inst_23902;
var state_23926__$1 = (function (){var statearr_23929 = state_23926;
(statearr_23929[(7)] = inst_23903);

return statearr_23929;
})();
var statearr_23930_23950 = state_23926__$1;
(statearr_23930_23950[(2)] = null);

(statearr_23930_23950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23927 === (4))){
var inst_23903 = (state_23926[(7)]);
var inst_23906 = cljs.core.first.call(null,inst_23903);
var state_23926__$1 = state_23926;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23926__$1,(7),ch,inst_23906);
} else {
if((state_val_23927 === (13))){
var inst_23920 = (state_23926[(2)]);
var state_23926__$1 = state_23926;
var statearr_23931_23951 = state_23926__$1;
(statearr_23931_23951[(2)] = inst_23920);

(statearr_23931_23951[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23927 === (6))){
var inst_23911 = (state_23926[(2)]);
var state_23926__$1 = state_23926;
if(cljs.core.truth_(inst_23911)){
var statearr_23932_23952 = state_23926__$1;
(statearr_23932_23952[(1)] = (8));

} else {
var statearr_23933_23953 = state_23926__$1;
(statearr_23933_23953[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23927 === (3))){
var inst_23924 = (state_23926[(2)]);
var state_23926__$1 = state_23926;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23926__$1,inst_23924);
} else {
if((state_val_23927 === (12))){
var state_23926__$1 = state_23926;
var statearr_23934_23954 = state_23926__$1;
(statearr_23934_23954[(2)] = null);

(statearr_23934_23954[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23927 === (2))){
var inst_23903 = (state_23926[(7)]);
var state_23926__$1 = state_23926;
if(cljs.core.truth_(inst_23903)){
var statearr_23935_23955 = state_23926__$1;
(statearr_23935_23955[(1)] = (4));

} else {
var statearr_23936_23956 = state_23926__$1;
(statearr_23936_23956[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23927 === (11))){
var inst_23917 = cljs.core.async.close_BANG_.call(null,ch);
var state_23926__$1 = state_23926;
var statearr_23937_23957 = state_23926__$1;
(statearr_23937_23957[(2)] = inst_23917);

(statearr_23937_23957[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23927 === (9))){
var state_23926__$1 = state_23926;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23938_23958 = state_23926__$1;
(statearr_23938_23958[(1)] = (11));

} else {
var statearr_23939_23959 = state_23926__$1;
(statearr_23939_23959[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23927 === (5))){
var inst_23903 = (state_23926[(7)]);
var state_23926__$1 = state_23926;
var statearr_23940_23960 = state_23926__$1;
(statearr_23940_23960[(2)] = inst_23903);

(statearr_23940_23960[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23927 === (10))){
var inst_23922 = (state_23926[(2)]);
var state_23926__$1 = state_23926;
var statearr_23941_23961 = state_23926__$1;
(statearr_23941_23961[(2)] = inst_23922);

(statearr_23941_23961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23927 === (8))){
var inst_23903 = (state_23926[(7)]);
var inst_23913 = cljs.core.next.call(null,inst_23903);
var inst_23903__$1 = inst_23913;
var state_23926__$1 = (function (){var statearr_23942 = state_23926;
(statearr_23942[(7)] = inst_23903__$1);

return statearr_23942;
})();
var statearr_23943_23962 = state_23926__$1;
(statearr_23943_23962[(2)] = null);

(statearr_23943_23962[(1)] = (2));


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
});})(c__23368__auto__))
;
return ((function (switch__23273__auto__,c__23368__auto__){
return (function() {
var cljs$core$async$state_machine__23274__auto__ = null;
var cljs$core$async$state_machine__23274__auto____0 = (function (){
var statearr_23944 = [null,null,null,null,null,null,null,null];
(statearr_23944[(0)] = cljs$core$async$state_machine__23274__auto__);

(statearr_23944[(1)] = (1));

return statearr_23944;
});
var cljs$core$async$state_machine__23274__auto____1 = (function (state_23926){
while(true){
var ret_value__23275__auto__ = (function (){try{while(true){
var result__23276__auto__ = switch__23273__auto__.call(null,state_23926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23276__auto__;
}
break;
}
}catch (e23945){if((e23945 instanceof Object)){
var ex__23277__auto__ = e23945;
var statearr_23946_23963 = state_23926;
(statearr_23946_23963[(5)] = ex__23277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23964 = state_23926;
state_23926 = G__23964;
continue;
} else {
return ret_value__23275__auto__;
}
break;
}
});
cljs$core$async$state_machine__23274__auto__ = function(state_23926){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23274__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23274__auto____1.call(this,state_23926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23274__auto____0;
cljs$core$async$state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23274__auto____1;
return cljs$core$async$state_machine__23274__auto__;
})()
;})(switch__23273__auto__,c__23368__auto__))
})();
var state__23370__auto__ = (function (){var statearr_23947 = f__23369__auto__.call(null);
(statearr_23947[(6)] = c__23368__auto__);

return statearr_23947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23370__auto__);
});})(c__23368__auto__))
);

return c__23368__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23965 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23965 = (function (ch,cs,meta23966){
this.ch = ch;
this.cs = cs;
this.meta23966 = meta23966;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23967,meta23966__$1){
var self__ = this;
var _23967__$1 = this;
return (new cljs.core.async.t_cljs$core$async23965(self__.ch,self__.cs,meta23966__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23965.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23967){
var self__ = this;
var _23967__$1 = this;
return self__.meta23966;
});})(cs))
;

cljs.core.async.t_cljs$core$async23965.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23965.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23965.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23965.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23965.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23965.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23965.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23966","meta23966",352493834,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23965.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23965.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23965";

cljs.core.async.t_cljs$core$async23965.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23965");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23965.
 */
cljs.core.async.__GT_t_cljs$core$async23965 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23965(ch__$1,cs__$1,meta23966){
return (new cljs.core.async.t_cljs$core$async23965(ch__$1,cs__$1,meta23966));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23965(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__23368__auto___24187 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23368__auto___24187,cs,m,dchan,dctr,done){
return (function (){
var f__23369__auto__ = (function (){var switch__23273__auto__ = ((function (c__23368__auto___24187,cs,m,dchan,dctr,done){
return (function (state_24102){
var state_val_24103 = (state_24102[(1)]);
if((state_val_24103 === (7))){
var inst_24098 = (state_24102[(2)]);
var state_24102__$1 = state_24102;
var statearr_24104_24188 = state_24102__$1;
(statearr_24104_24188[(2)] = inst_24098);

(statearr_24104_24188[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24103 === (20))){
var inst_24001 = (state_24102[(7)]);
var inst_24013 = cljs.core.first.call(null,inst_24001);
var inst_24014 = cljs.core.nth.call(null,inst_24013,(0),null);
var inst_24015 = cljs.core.nth.call(null,inst_24013,(1),null);
var state_24102__$1 = (function (){var statearr_24105 = state_24102;
(statearr_24105[(8)] = inst_24014);

return statearr_24105;
})();
if(cljs.core.truth_(inst_24015)){
var statearr_24106_24189 = state_24102__$1;
(statearr_24106_24189[(1)] = (22));

} else {
var statearr_24107_24190 = state_24102__$1;
(statearr_24107_24190[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24103 === (27))){
var inst_24050 = (state_24102[(9)]);
var inst_23970 = (state_24102[(10)]);
var inst_24045 = (state_24102[(11)]);
var inst_24043 = (state_24102[(12)]);
var inst_24050__$1 = cljs.core._nth.call(null,inst_24043,inst_24045);
var inst_24051 = cljs.core.async.put_BANG_.call(null,inst_24050__$1,inst_23970,done);
var state_24102__$1 = (function (){var statearr_24108 = state_24102;
(statearr_24108[(9)] = inst_24050__$1);

return statearr_24108;
})();
if(cljs.core.truth_(inst_24051)){
var statearr_24109_24191 = state_24102__$1;
(statearr_24109_24191[(1)] = (30));

} else {
var statearr_24110_24192 = state_24102__$1;
(statearr_24110_24192[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24103 === (1))){
var state_24102__$1 = state_24102;
var statearr_24111_24193 = state_24102__$1;
(statearr_24111_24193[(2)] = null);

(statearr_24111_24193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24103 === (24))){
var inst_24001 = (state_24102[(7)]);
var inst_24020 = (state_24102[(2)]);
var inst_24021 = cljs.core.next.call(null,inst_24001);
var inst_23979 = inst_24021;
var inst_23980 = null;
var inst_23981 = (0);
var inst_23982 = (0);
var state_24102__$1 = (function (){var statearr_24112 = state_24102;
(statearr_24112[(13)] = inst_23982);

(statearr_24112[(14)] = inst_23980);

(statearr_24112[(15)] = inst_23979);

(statearr_24112[(16)] = inst_24020);

(statearr_24112[(17)] = inst_23981);

return statearr_24112;
})();
var statearr_24113_24194 = state_24102__$1;
(statearr_24113_24194[(2)] = null);

(statearr_24113_24194[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24103 === (39))){
var state_24102__$1 = state_24102;
var statearr_24117_24195 = state_24102__$1;
(statearr_24117_24195[(2)] = null);

(statearr_24117_24195[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24103 === (4))){
var inst_23970 = (state_24102[(10)]);
var inst_23970__$1 = (state_24102[(2)]);
var inst_23971 = (inst_23970__$1 == null);
var state_24102__$1 = (function (){var statearr_24118 = state_24102;
(statearr_24118[(10)] = inst_23970__$1);

return statearr_24118;
})();
if(cljs.core.truth_(inst_23971)){
var statearr_24119_24196 = state_24102__$1;
(statearr_24119_24196[(1)] = (5));

} else {
var statearr_24120_24197 = state_24102__$1;
(statearr_24120_24197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24103 === (15))){
var inst_23982 = (state_24102[(13)]);
var inst_23980 = (state_24102[(14)]);
var inst_23979 = (state_24102[(15)]);
var inst_23981 = (state_24102[(17)]);
var inst_23997 = (state_24102[(2)]);
var inst_23998 = (inst_23982 + (1));
var tmp24114 = inst_23980;
var tmp24115 = inst_23979;
var tmp24116 = inst_23981;
var inst_23979__$1 = tmp24115;
var inst_23980__$1 = tmp24114;
var inst_23981__$1 = tmp24116;
var inst_23982__$1 = inst_23998;
var state_24102__$1 = (function (){var statearr_24121 = state_24102;
(statearr_24121[(13)] = inst_23982__$1);

(statearr_24121[(18)] = inst_23997);

(statearr_24121[(14)] = inst_23980__$1);

(statearr_24121[(15)] = inst_23979__$1);

(statearr_24121[(17)] = inst_23981__$1);

return statearr_24121;
})();
var statearr_24122_24198 = state_24102__$1;
(statearr_24122_24198[(2)] = null);

(statearr_24122_24198[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24103 === (21))){
var inst_24024 = (state_24102[(2)]);
var state_24102__$1 = state_24102;
var statearr_24126_24199 = state_24102__$1;
(statearr_24126_24199[(2)] = inst_24024);

(statearr_24126_24199[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24103 === (31))){
var inst_24050 = (state_24102[(9)]);
var inst_24054 = done.call(null,null);
var inst_24055 = cljs.core.async.untap_STAR_.call(null,m,inst_24050);
var state_24102__$1 = (function (){var statearr_24127 = state_24102;
(statearr_24127[(19)] = inst_24054);

return statearr_24127;
})();
var statearr_24128_24200 = state_24102__$1;
(statearr_24128_24200[(2)] = inst_24055);

(statearr_24128_24200[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24103 === (32))){
var inst_24044 = (state_24102[(20)]);
var inst_24045 = (state_24102[(11)]);
var inst_24043 = (state_24102[(12)]);
var inst_24042 = (state_24102[(21)]);
var inst_24057 = (state_24102[(2)]);
var inst_24058 = (inst_24045 + (1));
var tmp24123 = inst_24044;
var tmp24124 = inst_24043;
var tmp24125 = inst_24042;
var inst_24042__$1 = tmp24125;
var inst_24043__$1 = tmp24124;
var inst_24044__$1 = tmp24123;
var inst_24045__$1 = inst_24058;
var state_24102__$1 = (function (){var statearr_24129 = state_24102;
(statearr_24129[(22)] = inst_24057);

(statearr_24129[(20)] = inst_24044__$1);

(statearr_24129[(11)] = inst_24045__$1);

(statearr_24129[(12)] = inst_24043__$1);

(statearr_24129[(21)] = inst_24042__$1);

return statearr_24129;
})();
var statearr_24130_24201 = state_24102__$1;
(statearr_24130_24201[(2)] = null);

(statearr_24130_24201[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24103 === (40))){
var inst_24070 = (state_24102[(23)]);
var inst_24074 = done.call(null,null);
var inst_24075 = cljs.core.async.untap_STAR_.call(null,m,inst_24070);
var state_24102__$1 = (function (){var statearr_24131 = state_24102;
(statearr_24131[(24)] = inst_24074);

return statearr_24131;
})();
var statearr_24132_24202 = state_24102__$1;
(statearr_24132_24202[(2)] = inst_24075);

(statearr_24132_24202[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24103 === (33))){
var inst_24061 = (state_24102[(25)]);
var inst_24063 = cljs.core.chunked_seq_QMARK_.call(null,inst_24061);
var state_24102__$1 = state_24102;
if(inst_24063){
var statearr_24133_24203 = state_24102__$1;
(statearr_24133_24203[(1)] = (36));

} else {
var statearr_24134_24204 = state_24102__$1;
(statearr_24134_24204[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24103 === (13))){
var inst_23991 = (state_24102[(26)]);
var inst_23994 = cljs.core.async.close_BANG_.call(null,inst_23991);
var state_24102__$1 = state_24102;
var statearr_24135_24205 = state_24102__$1;
(statearr_24135_24205[(2)] = inst_23994);

(statearr_24135_24205[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24103 === (22))){
var inst_24014 = (state_24102[(8)]);
var inst_24017 = cljs.core.async.close_BANG_.call(null,inst_24014);
var state_24102__$1 = state_24102;
var statearr_24136_24206 = state_24102__$1;
(statearr_24136_24206[(2)] = inst_24017);

(statearr_24136_24206[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24103 === (36))){
var inst_24061 = (state_24102[(25)]);
var inst_24065 = cljs.core.chunk_first.call(null,inst_24061);
var inst_24066 = cljs.core.chunk_rest.call(null,inst_24061);
var inst_24067 = cljs.core.count.call(null,inst_24065);
var inst_24042 = inst_24066;
var inst_24043 = inst_24065;
var inst_24044 = inst_24067;
var inst_24045 = (0);
var state_24102__$1 = (function (){var statearr_24137 = state_24102;
(statearr_24137[(20)] = inst_24044);

(statearr_24137[(11)] = inst_24045);

(statearr_24137[(12)] = inst_24043);

(statearr_24137[(21)] = inst_24042);

return statearr_24137;
})();
var statearr_24138_24207 = state_24102__$1;
(statearr_24138_24207[(2)] = null);

(statearr_24138_24207[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24103 === (41))){
var inst_24061 = (state_24102[(25)]);
var inst_24077 = (state_24102[(2)]);
var inst_24078 = cljs.core.next.call(null,inst_24061);
var inst_24042 = inst_24078;
var inst_24043 = null;
var inst_24044 = (0);
var inst_24045 = (0);
var state_24102__$1 = (function (){var statearr_24139 = state_24102;
(statearr_24139[(20)] = inst_24044);

(statearr_24139[(27)] = inst_24077);

(statearr_24139[(11)] = inst_24045);

(statearr_24139[(12)] = inst_24043);

(statearr_24139[(21)] = inst_24042);

return statearr_24139;
})();
var statearr_24140_24208 = state_24102__$1;
(statearr_24140_24208[(2)] = null);

(statearr_24140_24208[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24103 === (43))){
var state_24102__$1 = state_24102;
var statearr_24141_24209 = state_24102__$1;
(statearr_24141_24209[(2)] = null);

(statearr_24141_24209[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24103 === (29))){
var inst_24086 = (state_24102[(2)]);
var state_24102__$1 = state_24102;
var statearr_24142_24210 = state_24102__$1;
(statearr_24142_24210[(2)] = inst_24086);

(statearr_24142_24210[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24103 === (44))){
var inst_24095 = (state_24102[(2)]);
var state_24102__$1 = (function (){var statearr_24143 = state_24102;
(statearr_24143[(28)] = inst_24095);

return statearr_24143;
})();
var statearr_24144_24211 = state_24102__$1;
(statearr_24144_24211[(2)] = null);

(statearr_24144_24211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24103 === (6))){
var inst_24034 = (state_24102[(29)]);
var inst_24033 = cljs.core.deref.call(null,cs);
var inst_24034__$1 = cljs.core.keys.call(null,inst_24033);
var inst_24035 = cljs.core.count.call(null,inst_24034__$1);
var inst_24036 = cljs.core.reset_BANG_.call(null,dctr,inst_24035);
var inst_24041 = cljs.core.seq.call(null,inst_24034__$1);
var inst_24042 = inst_24041;
var inst_24043 = null;
var inst_24044 = (0);
var inst_24045 = (0);
var state_24102__$1 = (function (){var statearr_24145 = state_24102;
(statearr_24145[(30)] = inst_24036);

(statearr_24145[(20)] = inst_24044);

(statearr_24145[(29)] = inst_24034__$1);

(statearr_24145[(11)] = inst_24045);

(statearr_24145[(12)] = inst_24043);

(statearr_24145[(21)] = inst_24042);

return statearr_24145;
})();
var statearr_24146_24212 = state_24102__$1;
(statearr_24146_24212[(2)] = null);

(statearr_24146_24212[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24103 === (28))){
var inst_24061 = (state_24102[(25)]);
var inst_24042 = (state_24102[(21)]);
var inst_24061__$1 = cljs.core.seq.call(null,inst_24042);
var state_24102__$1 = (function (){var statearr_24147 = state_24102;
(statearr_24147[(25)] = inst_24061__$1);

return statearr_24147;
})();
if(inst_24061__$1){
var statearr_24148_24213 = state_24102__$1;
(statearr_24148_24213[(1)] = (33));

} else {
var statearr_24149_24214 = state_24102__$1;
(statearr_24149_24214[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24103 === (25))){
var inst_24044 = (state_24102[(20)]);
var inst_24045 = (state_24102[(11)]);
var inst_24047 = (inst_24045 < inst_24044);
var inst_24048 = inst_24047;
var state_24102__$1 = state_24102;
if(cljs.core.truth_(inst_24048)){
var statearr_24150_24215 = state_24102__$1;
(statearr_24150_24215[(1)] = (27));

} else {
var statearr_24151_24216 = state_24102__$1;
(statearr_24151_24216[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24103 === (34))){
var state_24102__$1 = state_24102;
var statearr_24152_24217 = state_24102__$1;
(statearr_24152_24217[(2)] = null);

(statearr_24152_24217[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24103 === (17))){
var state_24102__$1 = state_24102;
var statearr_24153_24218 = state_24102__$1;
(statearr_24153_24218[(2)] = null);

(statearr_24153_24218[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24103 === (3))){
var inst_24100 = (state_24102[(2)]);
var state_24102__$1 = state_24102;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24102__$1,inst_24100);
} else {
if((state_val_24103 === (12))){
var inst_24029 = (state_24102[(2)]);
var state_24102__$1 = state_24102;
var statearr_24154_24219 = state_24102__$1;
(statearr_24154_24219[(2)] = inst_24029);

(statearr_24154_24219[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24103 === (2))){
var state_24102__$1 = state_24102;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24102__$1,(4),ch);
} else {
if((state_val_24103 === (23))){
var state_24102__$1 = state_24102;
var statearr_24155_24220 = state_24102__$1;
(statearr_24155_24220[(2)] = null);

(statearr_24155_24220[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24103 === (35))){
var inst_24084 = (state_24102[(2)]);
var state_24102__$1 = state_24102;
var statearr_24156_24221 = state_24102__$1;
(statearr_24156_24221[(2)] = inst_24084);

(statearr_24156_24221[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24103 === (19))){
var inst_24001 = (state_24102[(7)]);
var inst_24005 = cljs.core.chunk_first.call(null,inst_24001);
var inst_24006 = cljs.core.chunk_rest.call(null,inst_24001);
var inst_24007 = cljs.core.count.call(null,inst_24005);
var inst_23979 = inst_24006;
var inst_23980 = inst_24005;
var inst_23981 = inst_24007;
var inst_23982 = (0);
var state_24102__$1 = (function (){var statearr_24157 = state_24102;
(statearr_24157[(13)] = inst_23982);

(statearr_24157[(14)] = inst_23980);

(statearr_24157[(15)] = inst_23979);

(statearr_24157[(17)] = inst_23981);

return statearr_24157;
})();
var statearr_24158_24222 = state_24102__$1;
(statearr_24158_24222[(2)] = null);

(statearr_24158_24222[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24103 === (11))){
var inst_24001 = (state_24102[(7)]);
var inst_23979 = (state_24102[(15)]);
var inst_24001__$1 = cljs.core.seq.call(null,inst_23979);
var state_24102__$1 = (function (){var statearr_24159 = state_24102;
(statearr_24159[(7)] = inst_24001__$1);

return statearr_24159;
})();
if(inst_24001__$1){
var statearr_24160_24223 = state_24102__$1;
(statearr_24160_24223[(1)] = (16));

} else {
var statearr_24161_24224 = state_24102__$1;
(statearr_24161_24224[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24103 === (9))){
var inst_24031 = (state_24102[(2)]);
var state_24102__$1 = state_24102;
var statearr_24162_24225 = state_24102__$1;
(statearr_24162_24225[(2)] = inst_24031);

(statearr_24162_24225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24103 === (5))){
var inst_23977 = cljs.core.deref.call(null,cs);
var inst_23978 = cljs.core.seq.call(null,inst_23977);
var inst_23979 = inst_23978;
var inst_23980 = null;
var inst_23981 = (0);
var inst_23982 = (0);
var state_24102__$1 = (function (){var statearr_24163 = state_24102;
(statearr_24163[(13)] = inst_23982);

(statearr_24163[(14)] = inst_23980);

(statearr_24163[(15)] = inst_23979);

(statearr_24163[(17)] = inst_23981);

return statearr_24163;
})();
var statearr_24164_24226 = state_24102__$1;
(statearr_24164_24226[(2)] = null);

(statearr_24164_24226[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24103 === (14))){
var state_24102__$1 = state_24102;
var statearr_24165_24227 = state_24102__$1;
(statearr_24165_24227[(2)] = null);

(statearr_24165_24227[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24103 === (45))){
var inst_24092 = (state_24102[(2)]);
var state_24102__$1 = state_24102;
var statearr_24166_24228 = state_24102__$1;
(statearr_24166_24228[(2)] = inst_24092);

(statearr_24166_24228[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24103 === (26))){
var inst_24034 = (state_24102[(29)]);
var inst_24088 = (state_24102[(2)]);
var inst_24089 = cljs.core.seq.call(null,inst_24034);
var state_24102__$1 = (function (){var statearr_24167 = state_24102;
(statearr_24167[(31)] = inst_24088);

return statearr_24167;
})();
if(inst_24089){
var statearr_24168_24229 = state_24102__$1;
(statearr_24168_24229[(1)] = (42));

} else {
var statearr_24169_24230 = state_24102__$1;
(statearr_24169_24230[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24103 === (16))){
var inst_24001 = (state_24102[(7)]);
var inst_24003 = cljs.core.chunked_seq_QMARK_.call(null,inst_24001);
var state_24102__$1 = state_24102;
if(inst_24003){
var statearr_24170_24231 = state_24102__$1;
(statearr_24170_24231[(1)] = (19));

} else {
var statearr_24171_24232 = state_24102__$1;
(statearr_24171_24232[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24103 === (38))){
var inst_24081 = (state_24102[(2)]);
var state_24102__$1 = state_24102;
var statearr_24172_24233 = state_24102__$1;
(statearr_24172_24233[(2)] = inst_24081);

(statearr_24172_24233[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24103 === (30))){
var state_24102__$1 = state_24102;
var statearr_24173_24234 = state_24102__$1;
(statearr_24173_24234[(2)] = null);

(statearr_24173_24234[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24103 === (10))){
var inst_23982 = (state_24102[(13)]);
var inst_23980 = (state_24102[(14)]);
var inst_23990 = cljs.core._nth.call(null,inst_23980,inst_23982);
var inst_23991 = cljs.core.nth.call(null,inst_23990,(0),null);
var inst_23992 = cljs.core.nth.call(null,inst_23990,(1),null);
var state_24102__$1 = (function (){var statearr_24174 = state_24102;
(statearr_24174[(26)] = inst_23991);

return statearr_24174;
})();
if(cljs.core.truth_(inst_23992)){
var statearr_24175_24235 = state_24102__$1;
(statearr_24175_24235[(1)] = (13));

} else {
var statearr_24176_24236 = state_24102__$1;
(statearr_24176_24236[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24103 === (18))){
var inst_24027 = (state_24102[(2)]);
var state_24102__$1 = state_24102;
var statearr_24177_24237 = state_24102__$1;
(statearr_24177_24237[(2)] = inst_24027);

(statearr_24177_24237[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24103 === (42))){
var state_24102__$1 = state_24102;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24102__$1,(45),dchan);
} else {
if((state_val_24103 === (37))){
var inst_24061 = (state_24102[(25)]);
var inst_23970 = (state_24102[(10)]);
var inst_24070 = (state_24102[(23)]);
var inst_24070__$1 = cljs.core.first.call(null,inst_24061);
var inst_24071 = cljs.core.async.put_BANG_.call(null,inst_24070__$1,inst_23970,done);
var state_24102__$1 = (function (){var statearr_24178 = state_24102;
(statearr_24178[(23)] = inst_24070__$1);

return statearr_24178;
})();
if(cljs.core.truth_(inst_24071)){
var statearr_24179_24238 = state_24102__$1;
(statearr_24179_24238[(1)] = (39));

} else {
var statearr_24180_24239 = state_24102__$1;
(statearr_24180_24239[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24103 === (8))){
var inst_23982 = (state_24102[(13)]);
var inst_23981 = (state_24102[(17)]);
var inst_23984 = (inst_23982 < inst_23981);
var inst_23985 = inst_23984;
var state_24102__$1 = state_24102;
if(cljs.core.truth_(inst_23985)){
var statearr_24181_24240 = state_24102__$1;
(statearr_24181_24240[(1)] = (10));

} else {
var statearr_24182_24241 = state_24102__$1;
(statearr_24182_24241[(1)] = (11));

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
});})(c__23368__auto___24187,cs,m,dchan,dctr,done))
;
return ((function (switch__23273__auto__,c__23368__auto___24187,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23274__auto__ = null;
var cljs$core$async$mult_$_state_machine__23274__auto____0 = (function (){
var statearr_24183 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24183[(0)] = cljs$core$async$mult_$_state_machine__23274__auto__);

(statearr_24183[(1)] = (1));

return statearr_24183;
});
var cljs$core$async$mult_$_state_machine__23274__auto____1 = (function (state_24102){
while(true){
var ret_value__23275__auto__ = (function (){try{while(true){
var result__23276__auto__ = switch__23273__auto__.call(null,state_24102);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23276__auto__;
}
break;
}
}catch (e24184){if((e24184 instanceof Object)){
var ex__23277__auto__ = e24184;
var statearr_24185_24242 = state_24102;
(statearr_24185_24242[(5)] = ex__23277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24184;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24243 = state_24102;
state_24102 = G__24243;
continue;
} else {
return ret_value__23275__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23274__auto__ = function(state_24102){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23274__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23274__auto____1.call(this,state_24102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23274__auto____0;
cljs$core$async$mult_$_state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23274__auto____1;
return cljs$core$async$mult_$_state_machine__23274__auto__;
})()
;})(switch__23273__auto__,c__23368__auto___24187,cs,m,dchan,dctr,done))
})();
var state__23370__auto__ = (function (){var statearr_24186 = f__23369__auto__.call(null);
(statearr_24186[(6)] = c__23368__auto___24187);

return statearr_24186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23370__auto__);
});})(c__23368__auto___24187,cs,m,dchan,dctr,done))
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
var G__24245 = arguments.length;
switch (G__24245) {
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
var len__4730__auto___24257 = arguments.length;
var i__4731__auto___24258 = (0);
while(true){
if((i__4731__auto___24258 < len__4730__auto___24257)){
args__4736__auto__.push((arguments[i__4731__auto___24258]));

var G__24259 = (i__4731__auto___24258 + (1));
i__4731__auto___24258 = G__24259;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24251){
var map__24252 = p__24251;
var map__24252__$1 = (((((!((map__24252 == null))))?(((((map__24252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24252):map__24252);
var opts = map__24252__$1;
var statearr_24254_24260 = state;
(statearr_24254_24260[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__24252,map__24252__$1,opts){
return (function (val){
var statearr_24255_24261 = state;
(statearr_24255_24261[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24252,map__24252__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_24256_24262 = state;
(statearr_24256_24262[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24247){
var G__24248 = cljs.core.first.call(null,seq24247);
var seq24247__$1 = cljs.core.next.call(null,seq24247);
var G__24249 = cljs.core.first.call(null,seq24247__$1);
var seq24247__$2 = cljs.core.next.call(null,seq24247__$1);
var G__24250 = cljs.core.first.call(null,seq24247__$2);
var seq24247__$3 = cljs.core.next.call(null,seq24247__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24248,G__24249,G__24250,seq24247__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24263 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24263 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24264){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta24264 = meta24264;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24263.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24265,meta24264__$1){
var self__ = this;
var _24265__$1 = this;
return (new cljs.core.async.t_cljs$core$async24263(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24264__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24263.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24265){
var self__ = this;
var _24265__$1 = this;
return self__.meta24264;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24263.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24263.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24263.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24263.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24263.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24263.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24263.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24263.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async24263.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24264","meta24264",1563984170,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24263.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24263.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24263";

cljs.core.async.t_cljs$core$async24263.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24263");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24263.
 */
cljs.core.async.__GT_t_cljs$core$async24263 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24263(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24264){
return (new cljs.core.async.t_cljs$core$async24263(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24264));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24263(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23368__auto___24427 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23368__auto___24427,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23369__auto__ = (function (){var switch__23273__auto__ = ((function (c__23368__auto___24427,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24367){
var state_val_24368 = (state_24367[(1)]);
if((state_val_24368 === (7))){
var inst_24282 = (state_24367[(2)]);
var state_24367__$1 = state_24367;
var statearr_24369_24428 = state_24367__$1;
(statearr_24369_24428[(2)] = inst_24282);

(statearr_24369_24428[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (20))){
var inst_24294 = (state_24367[(7)]);
var state_24367__$1 = state_24367;
var statearr_24370_24429 = state_24367__$1;
(statearr_24370_24429[(2)] = inst_24294);

(statearr_24370_24429[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (27))){
var state_24367__$1 = state_24367;
var statearr_24371_24430 = state_24367__$1;
(statearr_24371_24430[(2)] = null);

(statearr_24371_24430[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (1))){
var inst_24269 = (state_24367[(8)]);
var inst_24269__$1 = calc_state.call(null);
var inst_24271 = (inst_24269__$1 == null);
var inst_24272 = cljs.core.not.call(null,inst_24271);
var state_24367__$1 = (function (){var statearr_24372 = state_24367;
(statearr_24372[(8)] = inst_24269__$1);

return statearr_24372;
})();
if(inst_24272){
var statearr_24373_24431 = state_24367__$1;
(statearr_24373_24431[(1)] = (2));

} else {
var statearr_24374_24432 = state_24367__$1;
(statearr_24374_24432[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (24))){
var inst_24327 = (state_24367[(9)]);
var inst_24318 = (state_24367[(10)]);
var inst_24341 = (state_24367[(11)]);
var inst_24341__$1 = inst_24318.call(null,inst_24327);
var state_24367__$1 = (function (){var statearr_24375 = state_24367;
(statearr_24375[(11)] = inst_24341__$1);

return statearr_24375;
})();
if(cljs.core.truth_(inst_24341__$1)){
var statearr_24376_24433 = state_24367__$1;
(statearr_24376_24433[(1)] = (29));

} else {
var statearr_24377_24434 = state_24367__$1;
(statearr_24377_24434[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (4))){
var inst_24285 = (state_24367[(2)]);
var state_24367__$1 = state_24367;
if(cljs.core.truth_(inst_24285)){
var statearr_24378_24435 = state_24367__$1;
(statearr_24378_24435[(1)] = (8));

} else {
var statearr_24379_24436 = state_24367__$1;
(statearr_24379_24436[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (15))){
var inst_24312 = (state_24367[(2)]);
var state_24367__$1 = state_24367;
if(cljs.core.truth_(inst_24312)){
var statearr_24380_24437 = state_24367__$1;
(statearr_24380_24437[(1)] = (19));

} else {
var statearr_24381_24438 = state_24367__$1;
(statearr_24381_24438[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (21))){
var inst_24317 = (state_24367[(12)]);
var inst_24317__$1 = (state_24367[(2)]);
var inst_24318 = cljs.core.get.call(null,inst_24317__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24319 = cljs.core.get.call(null,inst_24317__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24320 = cljs.core.get.call(null,inst_24317__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24367__$1 = (function (){var statearr_24382 = state_24367;
(statearr_24382[(10)] = inst_24318);

(statearr_24382[(13)] = inst_24319);

(statearr_24382[(12)] = inst_24317__$1);

return statearr_24382;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24367__$1,(22),inst_24320);
} else {
if((state_val_24368 === (31))){
var inst_24349 = (state_24367[(2)]);
var state_24367__$1 = state_24367;
if(cljs.core.truth_(inst_24349)){
var statearr_24383_24439 = state_24367__$1;
(statearr_24383_24439[(1)] = (32));

} else {
var statearr_24384_24440 = state_24367__$1;
(statearr_24384_24440[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (32))){
var inst_24326 = (state_24367[(14)]);
var state_24367__$1 = state_24367;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24367__$1,(35),out,inst_24326);
} else {
if((state_val_24368 === (33))){
var inst_24317 = (state_24367[(12)]);
var inst_24294 = inst_24317;
var state_24367__$1 = (function (){var statearr_24385 = state_24367;
(statearr_24385[(7)] = inst_24294);

return statearr_24385;
})();
var statearr_24386_24441 = state_24367__$1;
(statearr_24386_24441[(2)] = null);

(statearr_24386_24441[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (13))){
var inst_24294 = (state_24367[(7)]);
var inst_24301 = inst_24294.cljs$lang$protocol_mask$partition0$;
var inst_24302 = (inst_24301 & (64));
var inst_24303 = inst_24294.cljs$core$ISeq$;
var inst_24304 = (cljs.core.PROTOCOL_SENTINEL === inst_24303);
var inst_24305 = ((inst_24302) || (inst_24304));
var state_24367__$1 = state_24367;
if(cljs.core.truth_(inst_24305)){
var statearr_24387_24442 = state_24367__$1;
(statearr_24387_24442[(1)] = (16));

} else {
var statearr_24388_24443 = state_24367__$1;
(statearr_24388_24443[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (22))){
var inst_24327 = (state_24367[(9)]);
var inst_24326 = (state_24367[(14)]);
var inst_24325 = (state_24367[(2)]);
var inst_24326__$1 = cljs.core.nth.call(null,inst_24325,(0),null);
var inst_24327__$1 = cljs.core.nth.call(null,inst_24325,(1),null);
var inst_24328 = (inst_24326__$1 == null);
var inst_24329 = cljs.core._EQ_.call(null,inst_24327__$1,change);
var inst_24330 = ((inst_24328) || (inst_24329));
var state_24367__$1 = (function (){var statearr_24389 = state_24367;
(statearr_24389[(9)] = inst_24327__$1);

(statearr_24389[(14)] = inst_24326__$1);

return statearr_24389;
})();
if(cljs.core.truth_(inst_24330)){
var statearr_24390_24444 = state_24367__$1;
(statearr_24390_24444[(1)] = (23));

} else {
var statearr_24391_24445 = state_24367__$1;
(statearr_24391_24445[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (36))){
var inst_24317 = (state_24367[(12)]);
var inst_24294 = inst_24317;
var state_24367__$1 = (function (){var statearr_24392 = state_24367;
(statearr_24392[(7)] = inst_24294);

return statearr_24392;
})();
var statearr_24393_24446 = state_24367__$1;
(statearr_24393_24446[(2)] = null);

(statearr_24393_24446[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (29))){
var inst_24341 = (state_24367[(11)]);
var state_24367__$1 = state_24367;
var statearr_24394_24447 = state_24367__$1;
(statearr_24394_24447[(2)] = inst_24341);

(statearr_24394_24447[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (6))){
var state_24367__$1 = state_24367;
var statearr_24395_24448 = state_24367__$1;
(statearr_24395_24448[(2)] = false);

(statearr_24395_24448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (28))){
var inst_24337 = (state_24367[(2)]);
var inst_24338 = calc_state.call(null);
var inst_24294 = inst_24338;
var state_24367__$1 = (function (){var statearr_24396 = state_24367;
(statearr_24396[(15)] = inst_24337);

(statearr_24396[(7)] = inst_24294);

return statearr_24396;
})();
var statearr_24397_24449 = state_24367__$1;
(statearr_24397_24449[(2)] = null);

(statearr_24397_24449[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (25))){
var inst_24363 = (state_24367[(2)]);
var state_24367__$1 = state_24367;
var statearr_24398_24450 = state_24367__$1;
(statearr_24398_24450[(2)] = inst_24363);

(statearr_24398_24450[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (34))){
var inst_24361 = (state_24367[(2)]);
var state_24367__$1 = state_24367;
var statearr_24399_24451 = state_24367__$1;
(statearr_24399_24451[(2)] = inst_24361);

(statearr_24399_24451[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (17))){
var state_24367__$1 = state_24367;
var statearr_24400_24452 = state_24367__$1;
(statearr_24400_24452[(2)] = false);

(statearr_24400_24452[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (3))){
var state_24367__$1 = state_24367;
var statearr_24401_24453 = state_24367__$1;
(statearr_24401_24453[(2)] = false);

(statearr_24401_24453[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (12))){
var inst_24365 = (state_24367[(2)]);
var state_24367__$1 = state_24367;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24367__$1,inst_24365);
} else {
if((state_val_24368 === (2))){
var inst_24269 = (state_24367[(8)]);
var inst_24274 = inst_24269.cljs$lang$protocol_mask$partition0$;
var inst_24275 = (inst_24274 & (64));
var inst_24276 = inst_24269.cljs$core$ISeq$;
var inst_24277 = (cljs.core.PROTOCOL_SENTINEL === inst_24276);
var inst_24278 = ((inst_24275) || (inst_24277));
var state_24367__$1 = state_24367;
if(cljs.core.truth_(inst_24278)){
var statearr_24402_24454 = state_24367__$1;
(statearr_24402_24454[(1)] = (5));

} else {
var statearr_24403_24455 = state_24367__$1;
(statearr_24403_24455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (23))){
var inst_24326 = (state_24367[(14)]);
var inst_24332 = (inst_24326 == null);
var state_24367__$1 = state_24367;
if(cljs.core.truth_(inst_24332)){
var statearr_24404_24456 = state_24367__$1;
(statearr_24404_24456[(1)] = (26));

} else {
var statearr_24405_24457 = state_24367__$1;
(statearr_24405_24457[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (35))){
var inst_24352 = (state_24367[(2)]);
var state_24367__$1 = state_24367;
if(cljs.core.truth_(inst_24352)){
var statearr_24406_24458 = state_24367__$1;
(statearr_24406_24458[(1)] = (36));

} else {
var statearr_24407_24459 = state_24367__$1;
(statearr_24407_24459[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (19))){
var inst_24294 = (state_24367[(7)]);
var inst_24314 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24294);
var state_24367__$1 = state_24367;
var statearr_24408_24460 = state_24367__$1;
(statearr_24408_24460[(2)] = inst_24314);

(statearr_24408_24460[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (11))){
var inst_24294 = (state_24367[(7)]);
var inst_24298 = (inst_24294 == null);
var inst_24299 = cljs.core.not.call(null,inst_24298);
var state_24367__$1 = state_24367;
if(inst_24299){
var statearr_24409_24461 = state_24367__$1;
(statearr_24409_24461[(1)] = (13));

} else {
var statearr_24410_24462 = state_24367__$1;
(statearr_24410_24462[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (9))){
var inst_24269 = (state_24367[(8)]);
var state_24367__$1 = state_24367;
var statearr_24411_24463 = state_24367__$1;
(statearr_24411_24463[(2)] = inst_24269);

(statearr_24411_24463[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (5))){
var state_24367__$1 = state_24367;
var statearr_24412_24464 = state_24367__$1;
(statearr_24412_24464[(2)] = true);

(statearr_24412_24464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (14))){
var state_24367__$1 = state_24367;
var statearr_24413_24465 = state_24367__$1;
(statearr_24413_24465[(2)] = false);

(statearr_24413_24465[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (26))){
var inst_24327 = (state_24367[(9)]);
var inst_24334 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24327);
var state_24367__$1 = state_24367;
var statearr_24414_24466 = state_24367__$1;
(statearr_24414_24466[(2)] = inst_24334);

(statearr_24414_24466[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (16))){
var state_24367__$1 = state_24367;
var statearr_24415_24467 = state_24367__$1;
(statearr_24415_24467[(2)] = true);

(statearr_24415_24467[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (38))){
var inst_24357 = (state_24367[(2)]);
var state_24367__$1 = state_24367;
var statearr_24416_24468 = state_24367__$1;
(statearr_24416_24468[(2)] = inst_24357);

(statearr_24416_24468[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (30))){
var inst_24327 = (state_24367[(9)]);
var inst_24318 = (state_24367[(10)]);
var inst_24319 = (state_24367[(13)]);
var inst_24344 = cljs.core.empty_QMARK_.call(null,inst_24318);
var inst_24345 = inst_24319.call(null,inst_24327);
var inst_24346 = cljs.core.not.call(null,inst_24345);
var inst_24347 = ((inst_24344) && (inst_24346));
var state_24367__$1 = state_24367;
var statearr_24417_24469 = state_24367__$1;
(statearr_24417_24469[(2)] = inst_24347);

(statearr_24417_24469[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (10))){
var inst_24269 = (state_24367[(8)]);
var inst_24290 = (state_24367[(2)]);
var inst_24291 = cljs.core.get.call(null,inst_24290,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24292 = cljs.core.get.call(null,inst_24290,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24293 = cljs.core.get.call(null,inst_24290,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24294 = inst_24269;
var state_24367__$1 = (function (){var statearr_24418 = state_24367;
(statearr_24418[(16)] = inst_24293);

(statearr_24418[(7)] = inst_24294);

(statearr_24418[(17)] = inst_24292);

(statearr_24418[(18)] = inst_24291);

return statearr_24418;
})();
var statearr_24419_24470 = state_24367__$1;
(statearr_24419_24470[(2)] = null);

(statearr_24419_24470[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (18))){
var inst_24309 = (state_24367[(2)]);
var state_24367__$1 = state_24367;
var statearr_24420_24471 = state_24367__$1;
(statearr_24420_24471[(2)] = inst_24309);

(statearr_24420_24471[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (37))){
var state_24367__$1 = state_24367;
var statearr_24421_24472 = state_24367__$1;
(statearr_24421_24472[(2)] = null);

(statearr_24421_24472[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (8))){
var inst_24269 = (state_24367[(8)]);
var inst_24287 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24269);
var state_24367__$1 = state_24367;
var statearr_24422_24473 = state_24367__$1;
(statearr_24422_24473[(2)] = inst_24287);

(statearr_24422_24473[(1)] = (10));


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
});})(c__23368__auto___24427,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23273__auto__,c__23368__auto___24427,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23274__auto__ = null;
var cljs$core$async$mix_$_state_machine__23274__auto____0 = (function (){
var statearr_24423 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24423[(0)] = cljs$core$async$mix_$_state_machine__23274__auto__);

(statearr_24423[(1)] = (1));

return statearr_24423;
});
var cljs$core$async$mix_$_state_machine__23274__auto____1 = (function (state_24367){
while(true){
var ret_value__23275__auto__ = (function (){try{while(true){
var result__23276__auto__ = switch__23273__auto__.call(null,state_24367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23276__auto__;
}
break;
}
}catch (e24424){if((e24424 instanceof Object)){
var ex__23277__auto__ = e24424;
var statearr_24425_24474 = state_24367;
(statearr_24425_24474[(5)] = ex__23277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24475 = state_24367;
state_24367 = G__24475;
continue;
} else {
return ret_value__23275__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23274__auto__ = function(state_24367){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23274__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23274__auto____1.call(this,state_24367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23274__auto____0;
cljs$core$async$mix_$_state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23274__auto____1;
return cljs$core$async$mix_$_state_machine__23274__auto__;
})()
;})(switch__23273__auto__,c__23368__auto___24427,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23370__auto__ = (function (){var statearr_24426 = f__23369__auto__.call(null);
(statearr_24426[(6)] = c__23368__auto___24427);

return statearr_24426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23370__auto__);
});})(c__23368__auto___24427,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__24477 = arguments.length;
switch (G__24477) {
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
var G__24481 = arguments.length;
switch (G__24481) {
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
return (function (p1__24479_SHARP_){
if(cljs.core.truth_(p1__24479_SHARP_.call(null,topic))){
return p1__24479_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24479_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24482 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24482 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24483){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24483 = meta24483;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24484,meta24483__$1){
var self__ = this;
var _24484__$1 = this;
return (new cljs.core.async.t_cljs$core$async24482(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24483__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24482.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24484){
var self__ = this;
var _24484__$1 = this;
return self__.meta24483;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24482.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24482.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24482.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24482.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24482.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async24482.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24482.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24482.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24483","meta24483",423255864,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24482.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24482.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24482";

cljs.core.async.t_cljs$core$async24482.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24482");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24482.
 */
cljs.core.async.__GT_t_cljs$core$async24482 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24482(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24483){
return (new cljs.core.async.t_cljs$core$async24482(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24483));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24482(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23368__auto___24602 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23368__auto___24602,mults,ensure_mult,p){
return (function (){
var f__23369__auto__ = (function (){var switch__23273__auto__ = ((function (c__23368__auto___24602,mults,ensure_mult,p){
return (function (state_24556){
var state_val_24557 = (state_24556[(1)]);
if((state_val_24557 === (7))){
var inst_24552 = (state_24556[(2)]);
var state_24556__$1 = state_24556;
var statearr_24558_24603 = state_24556__$1;
(statearr_24558_24603[(2)] = inst_24552);

(statearr_24558_24603[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24557 === (20))){
var state_24556__$1 = state_24556;
var statearr_24559_24604 = state_24556__$1;
(statearr_24559_24604[(2)] = null);

(statearr_24559_24604[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24557 === (1))){
var state_24556__$1 = state_24556;
var statearr_24560_24605 = state_24556__$1;
(statearr_24560_24605[(2)] = null);

(statearr_24560_24605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24557 === (24))){
var inst_24535 = (state_24556[(7)]);
var inst_24544 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24535);
var state_24556__$1 = state_24556;
var statearr_24561_24606 = state_24556__$1;
(statearr_24561_24606[(2)] = inst_24544);

(statearr_24561_24606[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24557 === (4))){
var inst_24487 = (state_24556[(8)]);
var inst_24487__$1 = (state_24556[(2)]);
var inst_24488 = (inst_24487__$1 == null);
var state_24556__$1 = (function (){var statearr_24562 = state_24556;
(statearr_24562[(8)] = inst_24487__$1);

return statearr_24562;
})();
if(cljs.core.truth_(inst_24488)){
var statearr_24563_24607 = state_24556__$1;
(statearr_24563_24607[(1)] = (5));

} else {
var statearr_24564_24608 = state_24556__$1;
(statearr_24564_24608[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24557 === (15))){
var inst_24529 = (state_24556[(2)]);
var state_24556__$1 = state_24556;
var statearr_24565_24609 = state_24556__$1;
(statearr_24565_24609[(2)] = inst_24529);

(statearr_24565_24609[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24557 === (21))){
var inst_24549 = (state_24556[(2)]);
var state_24556__$1 = (function (){var statearr_24566 = state_24556;
(statearr_24566[(9)] = inst_24549);

return statearr_24566;
})();
var statearr_24567_24610 = state_24556__$1;
(statearr_24567_24610[(2)] = null);

(statearr_24567_24610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24557 === (13))){
var inst_24511 = (state_24556[(10)]);
var inst_24513 = cljs.core.chunked_seq_QMARK_.call(null,inst_24511);
var state_24556__$1 = state_24556;
if(inst_24513){
var statearr_24568_24611 = state_24556__$1;
(statearr_24568_24611[(1)] = (16));

} else {
var statearr_24569_24612 = state_24556__$1;
(statearr_24569_24612[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24557 === (22))){
var inst_24541 = (state_24556[(2)]);
var state_24556__$1 = state_24556;
if(cljs.core.truth_(inst_24541)){
var statearr_24570_24613 = state_24556__$1;
(statearr_24570_24613[(1)] = (23));

} else {
var statearr_24571_24614 = state_24556__$1;
(statearr_24571_24614[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24557 === (6))){
var inst_24535 = (state_24556[(7)]);
var inst_24537 = (state_24556[(11)]);
var inst_24487 = (state_24556[(8)]);
var inst_24535__$1 = topic_fn.call(null,inst_24487);
var inst_24536 = cljs.core.deref.call(null,mults);
var inst_24537__$1 = cljs.core.get.call(null,inst_24536,inst_24535__$1);
var state_24556__$1 = (function (){var statearr_24572 = state_24556;
(statearr_24572[(7)] = inst_24535__$1);

(statearr_24572[(11)] = inst_24537__$1);

return statearr_24572;
})();
if(cljs.core.truth_(inst_24537__$1)){
var statearr_24573_24615 = state_24556__$1;
(statearr_24573_24615[(1)] = (19));

} else {
var statearr_24574_24616 = state_24556__$1;
(statearr_24574_24616[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24557 === (25))){
var inst_24546 = (state_24556[(2)]);
var state_24556__$1 = state_24556;
var statearr_24575_24617 = state_24556__$1;
(statearr_24575_24617[(2)] = inst_24546);

(statearr_24575_24617[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24557 === (17))){
var inst_24511 = (state_24556[(10)]);
var inst_24520 = cljs.core.first.call(null,inst_24511);
var inst_24521 = cljs.core.async.muxch_STAR_.call(null,inst_24520);
var inst_24522 = cljs.core.async.close_BANG_.call(null,inst_24521);
var inst_24523 = cljs.core.next.call(null,inst_24511);
var inst_24497 = inst_24523;
var inst_24498 = null;
var inst_24499 = (0);
var inst_24500 = (0);
var state_24556__$1 = (function (){var statearr_24576 = state_24556;
(statearr_24576[(12)] = inst_24498);

(statearr_24576[(13)] = inst_24497);

(statearr_24576[(14)] = inst_24522);

(statearr_24576[(15)] = inst_24500);

(statearr_24576[(16)] = inst_24499);

return statearr_24576;
})();
var statearr_24577_24618 = state_24556__$1;
(statearr_24577_24618[(2)] = null);

(statearr_24577_24618[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24557 === (3))){
var inst_24554 = (state_24556[(2)]);
var state_24556__$1 = state_24556;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24556__$1,inst_24554);
} else {
if((state_val_24557 === (12))){
var inst_24531 = (state_24556[(2)]);
var state_24556__$1 = state_24556;
var statearr_24578_24619 = state_24556__$1;
(statearr_24578_24619[(2)] = inst_24531);

(statearr_24578_24619[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24557 === (2))){
var state_24556__$1 = state_24556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24556__$1,(4),ch);
} else {
if((state_val_24557 === (23))){
var state_24556__$1 = state_24556;
var statearr_24579_24620 = state_24556__$1;
(statearr_24579_24620[(2)] = null);

(statearr_24579_24620[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24557 === (19))){
var inst_24537 = (state_24556[(11)]);
var inst_24487 = (state_24556[(8)]);
var inst_24539 = cljs.core.async.muxch_STAR_.call(null,inst_24537);
var state_24556__$1 = state_24556;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24556__$1,(22),inst_24539,inst_24487);
} else {
if((state_val_24557 === (11))){
var inst_24497 = (state_24556[(13)]);
var inst_24511 = (state_24556[(10)]);
var inst_24511__$1 = cljs.core.seq.call(null,inst_24497);
var state_24556__$1 = (function (){var statearr_24580 = state_24556;
(statearr_24580[(10)] = inst_24511__$1);

return statearr_24580;
})();
if(inst_24511__$1){
var statearr_24581_24621 = state_24556__$1;
(statearr_24581_24621[(1)] = (13));

} else {
var statearr_24582_24622 = state_24556__$1;
(statearr_24582_24622[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24557 === (9))){
var inst_24533 = (state_24556[(2)]);
var state_24556__$1 = state_24556;
var statearr_24583_24623 = state_24556__$1;
(statearr_24583_24623[(2)] = inst_24533);

(statearr_24583_24623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24557 === (5))){
var inst_24494 = cljs.core.deref.call(null,mults);
var inst_24495 = cljs.core.vals.call(null,inst_24494);
var inst_24496 = cljs.core.seq.call(null,inst_24495);
var inst_24497 = inst_24496;
var inst_24498 = null;
var inst_24499 = (0);
var inst_24500 = (0);
var state_24556__$1 = (function (){var statearr_24584 = state_24556;
(statearr_24584[(12)] = inst_24498);

(statearr_24584[(13)] = inst_24497);

(statearr_24584[(15)] = inst_24500);

(statearr_24584[(16)] = inst_24499);

return statearr_24584;
})();
var statearr_24585_24624 = state_24556__$1;
(statearr_24585_24624[(2)] = null);

(statearr_24585_24624[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24557 === (14))){
var state_24556__$1 = state_24556;
var statearr_24589_24625 = state_24556__$1;
(statearr_24589_24625[(2)] = null);

(statearr_24589_24625[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24557 === (16))){
var inst_24511 = (state_24556[(10)]);
var inst_24515 = cljs.core.chunk_first.call(null,inst_24511);
var inst_24516 = cljs.core.chunk_rest.call(null,inst_24511);
var inst_24517 = cljs.core.count.call(null,inst_24515);
var inst_24497 = inst_24516;
var inst_24498 = inst_24515;
var inst_24499 = inst_24517;
var inst_24500 = (0);
var state_24556__$1 = (function (){var statearr_24590 = state_24556;
(statearr_24590[(12)] = inst_24498);

(statearr_24590[(13)] = inst_24497);

(statearr_24590[(15)] = inst_24500);

(statearr_24590[(16)] = inst_24499);

return statearr_24590;
})();
var statearr_24591_24626 = state_24556__$1;
(statearr_24591_24626[(2)] = null);

(statearr_24591_24626[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24557 === (10))){
var inst_24498 = (state_24556[(12)]);
var inst_24497 = (state_24556[(13)]);
var inst_24500 = (state_24556[(15)]);
var inst_24499 = (state_24556[(16)]);
var inst_24505 = cljs.core._nth.call(null,inst_24498,inst_24500);
var inst_24506 = cljs.core.async.muxch_STAR_.call(null,inst_24505);
var inst_24507 = cljs.core.async.close_BANG_.call(null,inst_24506);
var inst_24508 = (inst_24500 + (1));
var tmp24586 = inst_24498;
var tmp24587 = inst_24497;
var tmp24588 = inst_24499;
var inst_24497__$1 = tmp24587;
var inst_24498__$1 = tmp24586;
var inst_24499__$1 = tmp24588;
var inst_24500__$1 = inst_24508;
var state_24556__$1 = (function (){var statearr_24592 = state_24556;
(statearr_24592[(17)] = inst_24507);

(statearr_24592[(12)] = inst_24498__$1);

(statearr_24592[(13)] = inst_24497__$1);

(statearr_24592[(15)] = inst_24500__$1);

(statearr_24592[(16)] = inst_24499__$1);

return statearr_24592;
})();
var statearr_24593_24627 = state_24556__$1;
(statearr_24593_24627[(2)] = null);

(statearr_24593_24627[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24557 === (18))){
var inst_24526 = (state_24556[(2)]);
var state_24556__$1 = state_24556;
var statearr_24594_24628 = state_24556__$1;
(statearr_24594_24628[(2)] = inst_24526);

(statearr_24594_24628[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24557 === (8))){
var inst_24500 = (state_24556[(15)]);
var inst_24499 = (state_24556[(16)]);
var inst_24502 = (inst_24500 < inst_24499);
var inst_24503 = inst_24502;
var state_24556__$1 = state_24556;
if(cljs.core.truth_(inst_24503)){
var statearr_24595_24629 = state_24556__$1;
(statearr_24595_24629[(1)] = (10));

} else {
var statearr_24596_24630 = state_24556__$1;
(statearr_24596_24630[(1)] = (11));

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
});})(c__23368__auto___24602,mults,ensure_mult,p))
;
return ((function (switch__23273__auto__,c__23368__auto___24602,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23274__auto__ = null;
var cljs$core$async$state_machine__23274__auto____0 = (function (){
var statearr_24597 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24597[(0)] = cljs$core$async$state_machine__23274__auto__);

(statearr_24597[(1)] = (1));

return statearr_24597;
});
var cljs$core$async$state_machine__23274__auto____1 = (function (state_24556){
while(true){
var ret_value__23275__auto__ = (function (){try{while(true){
var result__23276__auto__ = switch__23273__auto__.call(null,state_24556);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23276__auto__;
}
break;
}
}catch (e24598){if((e24598 instanceof Object)){
var ex__23277__auto__ = e24598;
var statearr_24599_24631 = state_24556;
(statearr_24599_24631[(5)] = ex__23277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24598;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24632 = state_24556;
state_24556 = G__24632;
continue;
} else {
return ret_value__23275__auto__;
}
break;
}
});
cljs$core$async$state_machine__23274__auto__ = function(state_24556){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23274__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23274__auto____1.call(this,state_24556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23274__auto____0;
cljs$core$async$state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23274__auto____1;
return cljs$core$async$state_machine__23274__auto__;
})()
;})(switch__23273__auto__,c__23368__auto___24602,mults,ensure_mult,p))
})();
var state__23370__auto__ = (function (){var statearr_24600 = f__23369__auto__.call(null);
(statearr_24600[(6)] = c__23368__auto___24602);

return statearr_24600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23370__auto__);
});})(c__23368__auto___24602,mults,ensure_mult,p))
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
var G__24634 = arguments.length;
switch (G__24634) {
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
var G__24637 = arguments.length;
switch (G__24637) {
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
var G__24640 = arguments.length;
switch (G__24640) {
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
var c__23368__auto___24707 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23368__auto___24707,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23369__auto__ = (function (){var switch__23273__auto__ = ((function (c__23368__auto___24707,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24679){
var state_val_24680 = (state_24679[(1)]);
if((state_val_24680 === (7))){
var state_24679__$1 = state_24679;
var statearr_24681_24708 = state_24679__$1;
(statearr_24681_24708[(2)] = null);

(statearr_24681_24708[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (1))){
var state_24679__$1 = state_24679;
var statearr_24682_24709 = state_24679__$1;
(statearr_24682_24709[(2)] = null);

(statearr_24682_24709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (4))){
var inst_24643 = (state_24679[(7)]);
var inst_24645 = (inst_24643 < cnt);
var state_24679__$1 = state_24679;
if(cljs.core.truth_(inst_24645)){
var statearr_24683_24710 = state_24679__$1;
(statearr_24683_24710[(1)] = (6));

} else {
var statearr_24684_24711 = state_24679__$1;
(statearr_24684_24711[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (15))){
var inst_24675 = (state_24679[(2)]);
var state_24679__$1 = state_24679;
var statearr_24685_24712 = state_24679__$1;
(statearr_24685_24712[(2)] = inst_24675);

(statearr_24685_24712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (13))){
var inst_24668 = cljs.core.async.close_BANG_.call(null,out);
var state_24679__$1 = state_24679;
var statearr_24686_24713 = state_24679__$1;
(statearr_24686_24713[(2)] = inst_24668);

(statearr_24686_24713[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (6))){
var state_24679__$1 = state_24679;
var statearr_24687_24714 = state_24679__$1;
(statearr_24687_24714[(2)] = null);

(statearr_24687_24714[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (3))){
var inst_24677 = (state_24679[(2)]);
var state_24679__$1 = state_24679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24679__$1,inst_24677);
} else {
if((state_val_24680 === (12))){
var inst_24665 = (state_24679[(8)]);
var inst_24665__$1 = (state_24679[(2)]);
var inst_24666 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24665__$1);
var state_24679__$1 = (function (){var statearr_24688 = state_24679;
(statearr_24688[(8)] = inst_24665__$1);

return statearr_24688;
})();
if(cljs.core.truth_(inst_24666)){
var statearr_24689_24715 = state_24679__$1;
(statearr_24689_24715[(1)] = (13));

} else {
var statearr_24690_24716 = state_24679__$1;
(statearr_24690_24716[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (2))){
var inst_24642 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24643 = (0);
var state_24679__$1 = (function (){var statearr_24691 = state_24679;
(statearr_24691[(7)] = inst_24643);

(statearr_24691[(9)] = inst_24642);

return statearr_24691;
})();
var statearr_24692_24717 = state_24679__$1;
(statearr_24692_24717[(2)] = null);

(statearr_24692_24717[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (11))){
var inst_24643 = (state_24679[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24679,(10),Object,null,(9));
var inst_24652 = chs__$1.call(null,inst_24643);
var inst_24653 = done.call(null,inst_24643);
var inst_24654 = cljs.core.async.take_BANG_.call(null,inst_24652,inst_24653);
var state_24679__$1 = state_24679;
var statearr_24693_24718 = state_24679__$1;
(statearr_24693_24718[(2)] = inst_24654);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24679__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (9))){
var inst_24643 = (state_24679[(7)]);
var inst_24656 = (state_24679[(2)]);
var inst_24657 = (inst_24643 + (1));
var inst_24643__$1 = inst_24657;
var state_24679__$1 = (function (){var statearr_24694 = state_24679;
(statearr_24694[(10)] = inst_24656);

(statearr_24694[(7)] = inst_24643__$1);

return statearr_24694;
})();
var statearr_24695_24719 = state_24679__$1;
(statearr_24695_24719[(2)] = null);

(statearr_24695_24719[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (5))){
var inst_24663 = (state_24679[(2)]);
var state_24679__$1 = (function (){var statearr_24696 = state_24679;
(statearr_24696[(11)] = inst_24663);

return statearr_24696;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24679__$1,(12),dchan);
} else {
if((state_val_24680 === (14))){
var inst_24665 = (state_24679[(8)]);
var inst_24670 = cljs.core.apply.call(null,f,inst_24665);
var state_24679__$1 = state_24679;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24679__$1,(16),out,inst_24670);
} else {
if((state_val_24680 === (16))){
var inst_24672 = (state_24679[(2)]);
var state_24679__$1 = (function (){var statearr_24697 = state_24679;
(statearr_24697[(12)] = inst_24672);

return statearr_24697;
})();
var statearr_24698_24720 = state_24679__$1;
(statearr_24698_24720[(2)] = null);

(statearr_24698_24720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (10))){
var inst_24647 = (state_24679[(2)]);
var inst_24648 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24679__$1 = (function (){var statearr_24699 = state_24679;
(statearr_24699[(13)] = inst_24647);

return statearr_24699;
})();
var statearr_24700_24721 = state_24679__$1;
(statearr_24700_24721[(2)] = inst_24648);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24679__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (8))){
var inst_24661 = (state_24679[(2)]);
var state_24679__$1 = state_24679;
var statearr_24701_24722 = state_24679__$1;
(statearr_24701_24722[(2)] = inst_24661);

(statearr_24701_24722[(1)] = (5));


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
});})(c__23368__auto___24707,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23273__auto__,c__23368__auto___24707,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23274__auto__ = null;
var cljs$core$async$state_machine__23274__auto____0 = (function (){
var statearr_24702 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24702[(0)] = cljs$core$async$state_machine__23274__auto__);

(statearr_24702[(1)] = (1));

return statearr_24702;
});
var cljs$core$async$state_machine__23274__auto____1 = (function (state_24679){
while(true){
var ret_value__23275__auto__ = (function (){try{while(true){
var result__23276__auto__ = switch__23273__auto__.call(null,state_24679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23276__auto__;
}
break;
}
}catch (e24703){if((e24703 instanceof Object)){
var ex__23277__auto__ = e24703;
var statearr_24704_24723 = state_24679;
(statearr_24704_24723[(5)] = ex__23277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24703;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24724 = state_24679;
state_24679 = G__24724;
continue;
} else {
return ret_value__23275__auto__;
}
break;
}
});
cljs$core$async$state_machine__23274__auto__ = function(state_24679){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23274__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23274__auto____1.call(this,state_24679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23274__auto____0;
cljs$core$async$state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23274__auto____1;
return cljs$core$async$state_machine__23274__auto__;
})()
;})(switch__23273__auto__,c__23368__auto___24707,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23370__auto__ = (function (){var statearr_24705 = f__23369__auto__.call(null);
(statearr_24705[(6)] = c__23368__auto___24707);

return statearr_24705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23370__auto__);
});})(c__23368__auto___24707,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__24727 = arguments.length;
switch (G__24727) {
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
var c__23368__auto___24781 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23368__auto___24781,out){
return (function (){
var f__23369__auto__ = (function (){var switch__23273__auto__ = ((function (c__23368__auto___24781,out){
return (function (state_24759){
var state_val_24760 = (state_24759[(1)]);
if((state_val_24760 === (7))){
var inst_24738 = (state_24759[(7)]);
var inst_24739 = (state_24759[(8)]);
var inst_24738__$1 = (state_24759[(2)]);
var inst_24739__$1 = cljs.core.nth.call(null,inst_24738__$1,(0),null);
var inst_24740 = cljs.core.nth.call(null,inst_24738__$1,(1),null);
var inst_24741 = (inst_24739__$1 == null);
var state_24759__$1 = (function (){var statearr_24761 = state_24759;
(statearr_24761[(7)] = inst_24738__$1);

(statearr_24761[(8)] = inst_24739__$1);

(statearr_24761[(9)] = inst_24740);

return statearr_24761;
})();
if(cljs.core.truth_(inst_24741)){
var statearr_24762_24782 = state_24759__$1;
(statearr_24762_24782[(1)] = (8));

} else {
var statearr_24763_24783 = state_24759__$1;
(statearr_24763_24783[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24760 === (1))){
var inst_24728 = cljs.core.vec.call(null,chs);
var inst_24729 = inst_24728;
var state_24759__$1 = (function (){var statearr_24764 = state_24759;
(statearr_24764[(10)] = inst_24729);

return statearr_24764;
})();
var statearr_24765_24784 = state_24759__$1;
(statearr_24765_24784[(2)] = null);

(statearr_24765_24784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24760 === (4))){
var inst_24729 = (state_24759[(10)]);
var state_24759__$1 = state_24759;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24759__$1,(7),inst_24729);
} else {
if((state_val_24760 === (6))){
var inst_24755 = (state_24759[(2)]);
var state_24759__$1 = state_24759;
var statearr_24766_24785 = state_24759__$1;
(statearr_24766_24785[(2)] = inst_24755);

(statearr_24766_24785[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24760 === (3))){
var inst_24757 = (state_24759[(2)]);
var state_24759__$1 = state_24759;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24759__$1,inst_24757);
} else {
if((state_val_24760 === (2))){
var inst_24729 = (state_24759[(10)]);
var inst_24731 = cljs.core.count.call(null,inst_24729);
var inst_24732 = (inst_24731 > (0));
var state_24759__$1 = state_24759;
if(cljs.core.truth_(inst_24732)){
var statearr_24768_24786 = state_24759__$1;
(statearr_24768_24786[(1)] = (4));

} else {
var statearr_24769_24787 = state_24759__$1;
(statearr_24769_24787[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24760 === (11))){
var inst_24729 = (state_24759[(10)]);
var inst_24748 = (state_24759[(2)]);
var tmp24767 = inst_24729;
var inst_24729__$1 = tmp24767;
var state_24759__$1 = (function (){var statearr_24770 = state_24759;
(statearr_24770[(11)] = inst_24748);

(statearr_24770[(10)] = inst_24729__$1);

return statearr_24770;
})();
var statearr_24771_24788 = state_24759__$1;
(statearr_24771_24788[(2)] = null);

(statearr_24771_24788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24760 === (9))){
var inst_24739 = (state_24759[(8)]);
var state_24759__$1 = state_24759;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24759__$1,(11),out,inst_24739);
} else {
if((state_val_24760 === (5))){
var inst_24753 = cljs.core.async.close_BANG_.call(null,out);
var state_24759__$1 = state_24759;
var statearr_24772_24789 = state_24759__$1;
(statearr_24772_24789[(2)] = inst_24753);

(statearr_24772_24789[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24760 === (10))){
var inst_24751 = (state_24759[(2)]);
var state_24759__$1 = state_24759;
var statearr_24773_24790 = state_24759__$1;
(statearr_24773_24790[(2)] = inst_24751);

(statearr_24773_24790[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24760 === (8))){
var inst_24738 = (state_24759[(7)]);
var inst_24739 = (state_24759[(8)]);
var inst_24729 = (state_24759[(10)]);
var inst_24740 = (state_24759[(9)]);
var inst_24743 = (function (){var cs = inst_24729;
var vec__24734 = inst_24738;
var v = inst_24739;
var c = inst_24740;
return ((function (cs,vec__24734,v,c,inst_24738,inst_24739,inst_24729,inst_24740,state_val_24760,c__23368__auto___24781,out){
return (function (p1__24725_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24725_SHARP_);
});
;})(cs,vec__24734,v,c,inst_24738,inst_24739,inst_24729,inst_24740,state_val_24760,c__23368__auto___24781,out))
})();
var inst_24744 = cljs.core.filterv.call(null,inst_24743,inst_24729);
var inst_24729__$1 = inst_24744;
var state_24759__$1 = (function (){var statearr_24774 = state_24759;
(statearr_24774[(10)] = inst_24729__$1);

return statearr_24774;
})();
var statearr_24775_24791 = state_24759__$1;
(statearr_24775_24791[(2)] = null);

(statearr_24775_24791[(1)] = (2));


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
});})(c__23368__auto___24781,out))
;
return ((function (switch__23273__auto__,c__23368__auto___24781,out){
return (function() {
var cljs$core$async$state_machine__23274__auto__ = null;
var cljs$core$async$state_machine__23274__auto____0 = (function (){
var statearr_24776 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24776[(0)] = cljs$core$async$state_machine__23274__auto__);

(statearr_24776[(1)] = (1));

return statearr_24776;
});
var cljs$core$async$state_machine__23274__auto____1 = (function (state_24759){
while(true){
var ret_value__23275__auto__ = (function (){try{while(true){
var result__23276__auto__ = switch__23273__auto__.call(null,state_24759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23276__auto__;
}
break;
}
}catch (e24777){if((e24777 instanceof Object)){
var ex__23277__auto__ = e24777;
var statearr_24778_24792 = state_24759;
(statearr_24778_24792[(5)] = ex__23277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24777;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24793 = state_24759;
state_24759 = G__24793;
continue;
} else {
return ret_value__23275__auto__;
}
break;
}
});
cljs$core$async$state_machine__23274__auto__ = function(state_24759){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23274__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23274__auto____1.call(this,state_24759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23274__auto____0;
cljs$core$async$state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23274__auto____1;
return cljs$core$async$state_machine__23274__auto__;
})()
;})(switch__23273__auto__,c__23368__auto___24781,out))
})();
var state__23370__auto__ = (function (){var statearr_24779 = f__23369__auto__.call(null);
(statearr_24779[(6)] = c__23368__auto___24781);

return statearr_24779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23370__auto__);
});})(c__23368__auto___24781,out))
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
var G__24795 = arguments.length;
switch (G__24795) {
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
var c__23368__auto___24840 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23368__auto___24840,out){
return (function (){
var f__23369__auto__ = (function (){var switch__23273__auto__ = ((function (c__23368__auto___24840,out){
return (function (state_24819){
var state_val_24820 = (state_24819[(1)]);
if((state_val_24820 === (7))){
var inst_24801 = (state_24819[(7)]);
var inst_24801__$1 = (state_24819[(2)]);
var inst_24802 = (inst_24801__$1 == null);
var inst_24803 = cljs.core.not.call(null,inst_24802);
var state_24819__$1 = (function (){var statearr_24821 = state_24819;
(statearr_24821[(7)] = inst_24801__$1);

return statearr_24821;
})();
if(inst_24803){
var statearr_24822_24841 = state_24819__$1;
(statearr_24822_24841[(1)] = (8));

} else {
var statearr_24823_24842 = state_24819__$1;
(statearr_24823_24842[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24820 === (1))){
var inst_24796 = (0);
var state_24819__$1 = (function (){var statearr_24824 = state_24819;
(statearr_24824[(8)] = inst_24796);

return statearr_24824;
})();
var statearr_24825_24843 = state_24819__$1;
(statearr_24825_24843[(2)] = null);

(statearr_24825_24843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24820 === (4))){
var state_24819__$1 = state_24819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24819__$1,(7),ch);
} else {
if((state_val_24820 === (6))){
var inst_24814 = (state_24819[(2)]);
var state_24819__$1 = state_24819;
var statearr_24826_24844 = state_24819__$1;
(statearr_24826_24844[(2)] = inst_24814);

(statearr_24826_24844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24820 === (3))){
var inst_24816 = (state_24819[(2)]);
var inst_24817 = cljs.core.async.close_BANG_.call(null,out);
var state_24819__$1 = (function (){var statearr_24827 = state_24819;
(statearr_24827[(9)] = inst_24816);

return statearr_24827;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24819__$1,inst_24817);
} else {
if((state_val_24820 === (2))){
var inst_24796 = (state_24819[(8)]);
var inst_24798 = (inst_24796 < n);
var state_24819__$1 = state_24819;
if(cljs.core.truth_(inst_24798)){
var statearr_24828_24845 = state_24819__$1;
(statearr_24828_24845[(1)] = (4));

} else {
var statearr_24829_24846 = state_24819__$1;
(statearr_24829_24846[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24820 === (11))){
var inst_24796 = (state_24819[(8)]);
var inst_24806 = (state_24819[(2)]);
var inst_24807 = (inst_24796 + (1));
var inst_24796__$1 = inst_24807;
var state_24819__$1 = (function (){var statearr_24830 = state_24819;
(statearr_24830[(10)] = inst_24806);

(statearr_24830[(8)] = inst_24796__$1);

return statearr_24830;
})();
var statearr_24831_24847 = state_24819__$1;
(statearr_24831_24847[(2)] = null);

(statearr_24831_24847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24820 === (9))){
var state_24819__$1 = state_24819;
var statearr_24832_24848 = state_24819__$1;
(statearr_24832_24848[(2)] = null);

(statearr_24832_24848[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24820 === (5))){
var state_24819__$1 = state_24819;
var statearr_24833_24849 = state_24819__$1;
(statearr_24833_24849[(2)] = null);

(statearr_24833_24849[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24820 === (10))){
var inst_24811 = (state_24819[(2)]);
var state_24819__$1 = state_24819;
var statearr_24834_24850 = state_24819__$1;
(statearr_24834_24850[(2)] = inst_24811);

(statearr_24834_24850[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24820 === (8))){
var inst_24801 = (state_24819[(7)]);
var state_24819__$1 = state_24819;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24819__$1,(11),out,inst_24801);
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
});})(c__23368__auto___24840,out))
;
return ((function (switch__23273__auto__,c__23368__auto___24840,out){
return (function() {
var cljs$core$async$state_machine__23274__auto__ = null;
var cljs$core$async$state_machine__23274__auto____0 = (function (){
var statearr_24835 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24835[(0)] = cljs$core$async$state_machine__23274__auto__);

(statearr_24835[(1)] = (1));

return statearr_24835;
});
var cljs$core$async$state_machine__23274__auto____1 = (function (state_24819){
while(true){
var ret_value__23275__auto__ = (function (){try{while(true){
var result__23276__auto__ = switch__23273__auto__.call(null,state_24819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23276__auto__;
}
break;
}
}catch (e24836){if((e24836 instanceof Object)){
var ex__23277__auto__ = e24836;
var statearr_24837_24851 = state_24819;
(statearr_24837_24851[(5)] = ex__23277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24852 = state_24819;
state_24819 = G__24852;
continue;
} else {
return ret_value__23275__auto__;
}
break;
}
});
cljs$core$async$state_machine__23274__auto__ = function(state_24819){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23274__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23274__auto____1.call(this,state_24819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23274__auto____0;
cljs$core$async$state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23274__auto____1;
return cljs$core$async$state_machine__23274__auto__;
})()
;})(switch__23273__auto__,c__23368__auto___24840,out))
})();
var state__23370__auto__ = (function (){var statearr_24838 = f__23369__auto__.call(null);
(statearr_24838[(6)] = c__23368__auto___24840);

return statearr_24838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23370__auto__);
});})(c__23368__auto___24840,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24854 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24854 = (function (f,ch,meta24855){
this.f = f;
this.ch = ch;
this.meta24855 = meta24855;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24856,meta24855__$1){
var self__ = this;
var _24856__$1 = this;
return (new cljs.core.async.t_cljs$core$async24854(self__.f,self__.ch,meta24855__$1));
});

cljs.core.async.t_cljs$core$async24854.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24856){
var self__ = this;
var _24856__$1 = this;
return self__.meta24855;
});

cljs.core.async.t_cljs$core$async24854.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24854.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24854.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24854.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24854.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24857 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24857 = (function (f,ch,meta24855,_,fn1,meta24858){
this.f = f;
this.ch = ch;
this.meta24855 = meta24855;
this._ = _;
this.fn1 = fn1;
this.meta24858 = meta24858;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24859,meta24858__$1){
var self__ = this;
var _24859__$1 = this;
return (new cljs.core.async.t_cljs$core$async24857(self__.f,self__.ch,self__.meta24855,self__._,self__.fn1,meta24858__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24857.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24859){
var self__ = this;
var _24859__$1 = this;
return self__.meta24858;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24857.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24857.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24857.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24857.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24853_SHARP_){
return f1.call(null,(((p1__24853_SHARP_ == null))?null:self__.f.call(null,p1__24853_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24857.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24855","meta24855",-1782144990,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24854","cljs.core.async/t_cljs$core$async24854",66827712,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24858","meta24858",-1186882562,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24857.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24857.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24857";

cljs.core.async.t_cljs$core$async24857.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24857");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24857.
 */
cljs.core.async.__GT_t_cljs$core$async24857 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24857(f__$1,ch__$1,meta24855__$1,___$2,fn1__$1,meta24858){
return (new cljs.core.async.t_cljs$core$async24857(f__$1,ch__$1,meta24855__$1,___$2,fn1__$1,meta24858));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24857(self__.f,self__.ch,self__.meta24855,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async24854.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24854.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24854.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24855","meta24855",-1782144990,null)], null);
});

cljs.core.async.t_cljs$core$async24854.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24854.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24854";

cljs.core.async.t_cljs$core$async24854.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24854");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24854.
 */
cljs.core.async.__GT_t_cljs$core$async24854 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24854(f__$1,ch__$1,meta24855){
return (new cljs.core.async.t_cljs$core$async24854(f__$1,ch__$1,meta24855));
});

}

return (new cljs.core.async.t_cljs$core$async24854(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24860 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24860 = (function (f,ch,meta24861){
this.f = f;
this.ch = ch;
this.meta24861 = meta24861;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24860.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24862,meta24861__$1){
var self__ = this;
var _24862__$1 = this;
return (new cljs.core.async.t_cljs$core$async24860(self__.f,self__.ch,meta24861__$1));
});

cljs.core.async.t_cljs$core$async24860.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24862){
var self__ = this;
var _24862__$1 = this;
return self__.meta24861;
});

cljs.core.async.t_cljs$core$async24860.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24860.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24860.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24860.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24860.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24860.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24860.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24861","meta24861",-1376652649,null)], null);
});

cljs.core.async.t_cljs$core$async24860.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24860.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24860";

cljs.core.async.t_cljs$core$async24860.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24860");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24860.
 */
cljs.core.async.__GT_t_cljs$core$async24860 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24860(f__$1,ch__$1,meta24861){
return (new cljs.core.async.t_cljs$core$async24860(f__$1,ch__$1,meta24861));
});

}

return (new cljs.core.async.t_cljs$core$async24860(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24863 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24863 = (function (p,ch,meta24864){
this.p = p;
this.ch = ch;
this.meta24864 = meta24864;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24865,meta24864__$1){
var self__ = this;
var _24865__$1 = this;
return (new cljs.core.async.t_cljs$core$async24863(self__.p,self__.ch,meta24864__$1));
});

cljs.core.async.t_cljs$core$async24863.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24865){
var self__ = this;
var _24865__$1 = this;
return self__.meta24864;
});

cljs.core.async.t_cljs$core$async24863.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24863.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24863.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24863.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24863.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24863.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24863.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24863.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24864","meta24864",1279487709,null)], null);
});

cljs.core.async.t_cljs$core$async24863.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24863.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24863";

cljs.core.async.t_cljs$core$async24863.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24863");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24863.
 */
cljs.core.async.__GT_t_cljs$core$async24863 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24863(p__$1,ch__$1,meta24864){
return (new cljs.core.async.t_cljs$core$async24863(p__$1,ch__$1,meta24864));
});

}

return (new cljs.core.async.t_cljs$core$async24863(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__24867 = arguments.length;
switch (G__24867) {
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
var c__23368__auto___24907 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23368__auto___24907,out){
return (function (){
var f__23369__auto__ = (function (){var switch__23273__auto__ = ((function (c__23368__auto___24907,out){
return (function (state_24888){
var state_val_24889 = (state_24888[(1)]);
if((state_val_24889 === (7))){
var inst_24884 = (state_24888[(2)]);
var state_24888__$1 = state_24888;
var statearr_24890_24908 = state_24888__$1;
(statearr_24890_24908[(2)] = inst_24884);

(statearr_24890_24908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24889 === (1))){
var state_24888__$1 = state_24888;
var statearr_24891_24909 = state_24888__$1;
(statearr_24891_24909[(2)] = null);

(statearr_24891_24909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24889 === (4))){
var inst_24870 = (state_24888[(7)]);
var inst_24870__$1 = (state_24888[(2)]);
var inst_24871 = (inst_24870__$1 == null);
var state_24888__$1 = (function (){var statearr_24892 = state_24888;
(statearr_24892[(7)] = inst_24870__$1);

return statearr_24892;
})();
if(cljs.core.truth_(inst_24871)){
var statearr_24893_24910 = state_24888__$1;
(statearr_24893_24910[(1)] = (5));

} else {
var statearr_24894_24911 = state_24888__$1;
(statearr_24894_24911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24889 === (6))){
var inst_24870 = (state_24888[(7)]);
var inst_24875 = p.call(null,inst_24870);
var state_24888__$1 = state_24888;
if(cljs.core.truth_(inst_24875)){
var statearr_24895_24912 = state_24888__$1;
(statearr_24895_24912[(1)] = (8));

} else {
var statearr_24896_24913 = state_24888__$1;
(statearr_24896_24913[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24889 === (3))){
var inst_24886 = (state_24888[(2)]);
var state_24888__$1 = state_24888;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24888__$1,inst_24886);
} else {
if((state_val_24889 === (2))){
var state_24888__$1 = state_24888;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24888__$1,(4),ch);
} else {
if((state_val_24889 === (11))){
var inst_24878 = (state_24888[(2)]);
var state_24888__$1 = state_24888;
var statearr_24897_24914 = state_24888__$1;
(statearr_24897_24914[(2)] = inst_24878);

(statearr_24897_24914[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24889 === (9))){
var state_24888__$1 = state_24888;
var statearr_24898_24915 = state_24888__$1;
(statearr_24898_24915[(2)] = null);

(statearr_24898_24915[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24889 === (5))){
var inst_24873 = cljs.core.async.close_BANG_.call(null,out);
var state_24888__$1 = state_24888;
var statearr_24899_24916 = state_24888__$1;
(statearr_24899_24916[(2)] = inst_24873);

(statearr_24899_24916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24889 === (10))){
var inst_24881 = (state_24888[(2)]);
var state_24888__$1 = (function (){var statearr_24900 = state_24888;
(statearr_24900[(8)] = inst_24881);

return statearr_24900;
})();
var statearr_24901_24917 = state_24888__$1;
(statearr_24901_24917[(2)] = null);

(statearr_24901_24917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24889 === (8))){
var inst_24870 = (state_24888[(7)]);
var state_24888__$1 = state_24888;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24888__$1,(11),out,inst_24870);
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
});})(c__23368__auto___24907,out))
;
return ((function (switch__23273__auto__,c__23368__auto___24907,out){
return (function() {
var cljs$core$async$state_machine__23274__auto__ = null;
var cljs$core$async$state_machine__23274__auto____0 = (function (){
var statearr_24902 = [null,null,null,null,null,null,null,null,null];
(statearr_24902[(0)] = cljs$core$async$state_machine__23274__auto__);

(statearr_24902[(1)] = (1));

return statearr_24902;
});
var cljs$core$async$state_machine__23274__auto____1 = (function (state_24888){
while(true){
var ret_value__23275__auto__ = (function (){try{while(true){
var result__23276__auto__ = switch__23273__auto__.call(null,state_24888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23276__auto__;
}
break;
}
}catch (e24903){if((e24903 instanceof Object)){
var ex__23277__auto__ = e24903;
var statearr_24904_24918 = state_24888;
(statearr_24904_24918[(5)] = ex__23277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24919 = state_24888;
state_24888 = G__24919;
continue;
} else {
return ret_value__23275__auto__;
}
break;
}
});
cljs$core$async$state_machine__23274__auto__ = function(state_24888){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23274__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23274__auto____1.call(this,state_24888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23274__auto____0;
cljs$core$async$state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23274__auto____1;
return cljs$core$async$state_machine__23274__auto__;
})()
;})(switch__23273__auto__,c__23368__auto___24907,out))
})();
var state__23370__auto__ = (function (){var statearr_24905 = f__23369__auto__.call(null);
(statearr_24905[(6)] = c__23368__auto___24907);

return statearr_24905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23370__auto__);
});})(c__23368__auto___24907,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__24921 = arguments.length;
switch (G__24921) {
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
var c__23368__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23368__auto__){
return (function (){
var f__23369__auto__ = (function (){var switch__23273__auto__ = ((function (c__23368__auto__){
return (function (state_24984){
var state_val_24985 = (state_24984[(1)]);
if((state_val_24985 === (7))){
var inst_24980 = (state_24984[(2)]);
var state_24984__$1 = state_24984;
var statearr_24986_25024 = state_24984__$1;
(statearr_24986_25024[(2)] = inst_24980);

(statearr_24986_25024[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24985 === (20))){
var inst_24950 = (state_24984[(7)]);
var inst_24961 = (state_24984[(2)]);
var inst_24962 = cljs.core.next.call(null,inst_24950);
var inst_24936 = inst_24962;
var inst_24937 = null;
var inst_24938 = (0);
var inst_24939 = (0);
var state_24984__$1 = (function (){var statearr_24987 = state_24984;
(statearr_24987[(8)] = inst_24936);

(statearr_24987[(9)] = inst_24939);

(statearr_24987[(10)] = inst_24961);

(statearr_24987[(11)] = inst_24938);

(statearr_24987[(12)] = inst_24937);

return statearr_24987;
})();
var statearr_24988_25025 = state_24984__$1;
(statearr_24988_25025[(2)] = null);

(statearr_24988_25025[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24985 === (1))){
var state_24984__$1 = state_24984;
var statearr_24989_25026 = state_24984__$1;
(statearr_24989_25026[(2)] = null);

(statearr_24989_25026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24985 === (4))){
var inst_24925 = (state_24984[(13)]);
var inst_24925__$1 = (state_24984[(2)]);
var inst_24926 = (inst_24925__$1 == null);
var state_24984__$1 = (function (){var statearr_24990 = state_24984;
(statearr_24990[(13)] = inst_24925__$1);

return statearr_24990;
})();
if(cljs.core.truth_(inst_24926)){
var statearr_24991_25027 = state_24984__$1;
(statearr_24991_25027[(1)] = (5));

} else {
var statearr_24992_25028 = state_24984__$1;
(statearr_24992_25028[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24985 === (15))){
var state_24984__$1 = state_24984;
var statearr_24996_25029 = state_24984__$1;
(statearr_24996_25029[(2)] = null);

(statearr_24996_25029[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24985 === (21))){
var state_24984__$1 = state_24984;
var statearr_24997_25030 = state_24984__$1;
(statearr_24997_25030[(2)] = null);

(statearr_24997_25030[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24985 === (13))){
var inst_24936 = (state_24984[(8)]);
var inst_24939 = (state_24984[(9)]);
var inst_24938 = (state_24984[(11)]);
var inst_24937 = (state_24984[(12)]);
var inst_24946 = (state_24984[(2)]);
var inst_24947 = (inst_24939 + (1));
var tmp24993 = inst_24936;
var tmp24994 = inst_24938;
var tmp24995 = inst_24937;
var inst_24936__$1 = tmp24993;
var inst_24937__$1 = tmp24995;
var inst_24938__$1 = tmp24994;
var inst_24939__$1 = inst_24947;
var state_24984__$1 = (function (){var statearr_24998 = state_24984;
(statearr_24998[(8)] = inst_24936__$1);

(statearr_24998[(14)] = inst_24946);

(statearr_24998[(9)] = inst_24939__$1);

(statearr_24998[(11)] = inst_24938__$1);

(statearr_24998[(12)] = inst_24937__$1);

return statearr_24998;
})();
var statearr_24999_25031 = state_24984__$1;
(statearr_24999_25031[(2)] = null);

(statearr_24999_25031[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24985 === (22))){
var state_24984__$1 = state_24984;
var statearr_25000_25032 = state_24984__$1;
(statearr_25000_25032[(2)] = null);

(statearr_25000_25032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24985 === (6))){
var inst_24925 = (state_24984[(13)]);
var inst_24934 = f.call(null,inst_24925);
var inst_24935 = cljs.core.seq.call(null,inst_24934);
var inst_24936 = inst_24935;
var inst_24937 = null;
var inst_24938 = (0);
var inst_24939 = (0);
var state_24984__$1 = (function (){var statearr_25001 = state_24984;
(statearr_25001[(8)] = inst_24936);

(statearr_25001[(9)] = inst_24939);

(statearr_25001[(11)] = inst_24938);

(statearr_25001[(12)] = inst_24937);

return statearr_25001;
})();
var statearr_25002_25033 = state_24984__$1;
(statearr_25002_25033[(2)] = null);

(statearr_25002_25033[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24985 === (17))){
var inst_24950 = (state_24984[(7)]);
var inst_24954 = cljs.core.chunk_first.call(null,inst_24950);
var inst_24955 = cljs.core.chunk_rest.call(null,inst_24950);
var inst_24956 = cljs.core.count.call(null,inst_24954);
var inst_24936 = inst_24955;
var inst_24937 = inst_24954;
var inst_24938 = inst_24956;
var inst_24939 = (0);
var state_24984__$1 = (function (){var statearr_25003 = state_24984;
(statearr_25003[(8)] = inst_24936);

(statearr_25003[(9)] = inst_24939);

(statearr_25003[(11)] = inst_24938);

(statearr_25003[(12)] = inst_24937);

return statearr_25003;
})();
var statearr_25004_25034 = state_24984__$1;
(statearr_25004_25034[(2)] = null);

(statearr_25004_25034[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24985 === (3))){
var inst_24982 = (state_24984[(2)]);
var state_24984__$1 = state_24984;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24984__$1,inst_24982);
} else {
if((state_val_24985 === (12))){
var inst_24970 = (state_24984[(2)]);
var state_24984__$1 = state_24984;
var statearr_25005_25035 = state_24984__$1;
(statearr_25005_25035[(2)] = inst_24970);

(statearr_25005_25035[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24985 === (2))){
var state_24984__$1 = state_24984;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24984__$1,(4),in$);
} else {
if((state_val_24985 === (23))){
var inst_24978 = (state_24984[(2)]);
var state_24984__$1 = state_24984;
var statearr_25006_25036 = state_24984__$1;
(statearr_25006_25036[(2)] = inst_24978);

(statearr_25006_25036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24985 === (19))){
var inst_24965 = (state_24984[(2)]);
var state_24984__$1 = state_24984;
var statearr_25007_25037 = state_24984__$1;
(statearr_25007_25037[(2)] = inst_24965);

(statearr_25007_25037[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24985 === (11))){
var inst_24936 = (state_24984[(8)]);
var inst_24950 = (state_24984[(7)]);
var inst_24950__$1 = cljs.core.seq.call(null,inst_24936);
var state_24984__$1 = (function (){var statearr_25008 = state_24984;
(statearr_25008[(7)] = inst_24950__$1);

return statearr_25008;
})();
if(inst_24950__$1){
var statearr_25009_25038 = state_24984__$1;
(statearr_25009_25038[(1)] = (14));

} else {
var statearr_25010_25039 = state_24984__$1;
(statearr_25010_25039[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24985 === (9))){
var inst_24972 = (state_24984[(2)]);
var inst_24973 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24984__$1 = (function (){var statearr_25011 = state_24984;
(statearr_25011[(15)] = inst_24972);

return statearr_25011;
})();
if(cljs.core.truth_(inst_24973)){
var statearr_25012_25040 = state_24984__$1;
(statearr_25012_25040[(1)] = (21));

} else {
var statearr_25013_25041 = state_24984__$1;
(statearr_25013_25041[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24985 === (5))){
var inst_24928 = cljs.core.async.close_BANG_.call(null,out);
var state_24984__$1 = state_24984;
var statearr_25014_25042 = state_24984__$1;
(statearr_25014_25042[(2)] = inst_24928);

(statearr_25014_25042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24985 === (14))){
var inst_24950 = (state_24984[(7)]);
var inst_24952 = cljs.core.chunked_seq_QMARK_.call(null,inst_24950);
var state_24984__$1 = state_24984;
if(inst_24952){
var statearr_25015_25043 = state_24984__$1;
(statearr_25015_25043[(1)] = (17));

} else {
var statearr_25016_25044 = state_24984__$1;
(statearr_25016_25044[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24985 === (16))){
var inst_24968 = (state_24984[(2)]);
var state_24984__$1 = state_24984;
var statearr_25017_25045 = state_24984__$1;
(statearr_25017_25045[(2)] = inst_24968);

(statearr_25017_25045[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24985 === (10))){
var inst_24939 = (state_24984[(9)]);
var inst_24937 = (state_24984[(12)]);
var inst_24944 = cljs.core._nth.call(null,inst_24937,inst_24939);
var state_24984__$1 = state_24984;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24984__$1,(13),out,inst_24944);
} else {
if((state_val_24985 === (18))){
var inst_24950 = (state_24984[(7)]);
var inst_24959 = cljs.core.first.call(null,inst_24950);
var state_24984__$1 = state_24984;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24984__$1,(20),out,inst_24959);
} else {
if((state_val_24985 === (8))){
var inst_24939 = (state_24984[(9)]);
var inst_24938 = (state_24984[(11)]);
var inst_24941 = (inst_24939 < inst_24938);
var inst_24942 = inst_24941;
var state_24984__$1 = state_24984;
if(cljs.core.truth_(inst_24942)){
var statearr_25018_25046 = state_24984__$1;
(statearr_25018_25046[(1)] = (10));

} else {
var statearr_25019_25047 = state_24984__$1;
(statearr_25019_25047[(1)] = (11));

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
});})(c__23368__auto__))
;
return ((function (switch__23273__auto__,c__23368__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23274__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23274__auto____0 = (function (){
var statearr_25020 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25020[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23274__auto__);

(statearr_25020[(1)] = (1));

return statearr_25020;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23274__auto____1 = (function (state_24984){
while(true){
var ret_value__23275__auto__ = (function (){try{while(true){
var result__23276__auto__ = switch__23273__auto__.call(null,state_24984);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23276__auto__;
}
break;
}
}catch (e25021){if((e25021 instanceof Object)){
var ex__23277__auto__ = e25021;
var statearr_25022_25048 = state_24984;
(statearr_25022_25048[(5)] = ex__23277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25021;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25049 = state_24984;
state_24984 = G__25049;
continue;
} else {
return ret_value__23275__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23274__auto__ = function(state_24984){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23274__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23274__auto____1.call(this,state_24984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23274__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23274__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23274__auto__;
})()
;})(switch__23273__auto__,c__23368__auto__))
})();
var state__23370__auto__ = (function (){var statearr_25023 = f__23369__auto__.call(null);
(statearr_25023[(6)] = c__23368__auto__);

return statearr_25023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23370__auto__);
});})(c__23368__auto__))
);

return c__23368__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__25051 = arguments.length;
switch (G__25051) {
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
var G__25054 = arguments.length;
switch (G__25054) {
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
var G__25057 = arguments.length;
switch (G__25057) {
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
var c__23368__auto___25104 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23368__auto___25104,out){
return (function (){
var f__23369__auto__ = (function (){var switch__23273__auto__ = ((function (c__23368__auto___25104,out){
return (function (state_25081){
var state_val_25082 = (state_25081[(1)]);
if((state_val_25082 === (7))){
var inst_25076 = (state_25081[(2)]);
var state_25081__$1 = state_25081;
var statearr_25083_25105 = state_25081__$1;
(statearr_25083_25105[(2)] = inst_25076);

(statearr_25083_25105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25082 === (1))){
var inst_25058 = null;
var state_25081__$1 = (function (){var statearr_25084 = state_25081;
(statearr_25084[(7)] = inst_25058);

return statearr_25084;
})();
var statearr_25085_25106 = state_25081__$1;
(statearr_25085_25106[(2)] = null);

(statearr_25085_25106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25082 === (4))){
var inst_25061 = (state_25081[(8)]);
var inst_25061__$1 = (state_25081[(2)]);
var inst_25062 = (inst_25061__$1 == null);
var inst_25063 = cljs.core.not.call(null,inst_25062);
var state_25081__$1 = (function (){var statearr_25086 = state_25081;
(statearr_25086[(8)] = inst_25061__$1);

return statearr_25086;
})();
if(inst_25063){
var statearr_25087_25107 = state_25081__$1;
(statearr_25087_25107[(1)] = (5));

} else {
var statearr_25088_25108 = state_25081__$1;
(statearr_25088_25108[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25082 === (6))){
var state_25081__$1 = state_25081;
var statearr_25089_25109 = state_25081__$1;
(statearr_25089_25109[(2)] = null);

(statearr_25089_25109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25082 === (3))){
var inst_25078 = (state_25081[(2)]);
var inst_25079 = cljs.core.async.close_BANG_.call(null,out);
var state_25081__$1 = (function (){var statearr_25090 = state_25081;
(statearr_25090[(9)] = inst_25078);

return statearr_25090;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25081__$1,inst_25079);
} else {
if((state_val_25082 === (2))){
var state_25081__$1 = state_25081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25081__$1,(4),ch);
} else {
if((state_val_25082 === (11))){
var inst_25061 = (state_25081[(8)]);
var inst_25070 = (state_25081[(2)]);
var inst_25058 = inst_25061;
var state_25081__$1 = (function (){var statearr_25091 = state_25081;
(statearr_25091[(7)] = inst_25058);

(statearr_25091[(10)] = inst_25070);

return statearr_25091;
})();
var statearr_25092_25110 = state_25081__$1;
(statearr_25092_25110[(2)] = null);

(statearr_25092_25110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25082 === (9))){
var inst_25061 = (state_25081[(8)]);
var state_25081__$1 = state_25081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25081__$1,(11),out,inst_25061);
} else {
if((state_val_25082 === (5))){
var inst_25058 = (state_25081[(7)]);
var inst_25061 = (state_25081[(8)]);
var inst_25065 = cljs.core._EQ_.call(null,inst_25061,inst_25058);
var state_25081__$1 = state_25081;
if(inst_25065){
var statearr_25094_25111 = state_25081__$1;
(statearr_25094_25111[(1)] = (8));

} else {
var statearr_25095_25112 = state_25081__$1;
(statearr_25095_25112[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25082 === (10))){
var inst_25073 = (state_25081[(2)]);
var state_25081__$1 = state_25081;
var statearr_25096_25113 = state_25081__$1;
(statearr_25096_25113[(2)] = inst_25073);

(statearr_25096_25113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25082 === (8))){
var inst_25058 = (state_25081[(7)]);
var tmp25093 = inst_25058;
var inst_25058__$1 = tmp25093;
var state_25081__$1 = (function (){var statearr_25097 = state_25081;
(statearr_25097[(7)] = inst_25058__$1);

return statearr_25097;
})();
var statearr_25098_25114 = state_25081__$1;
(statearr_25098_25114[(2)] = null);

(statearr_25098_25114[(1)] = (2));


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
});})(c__23368__auto___25104,out))
;
return ((function (switch__23273__auto__,c__23368__auto___25104,out){
return (function() {
var cljs$core$async$state_machine__23274__auto__ = null;
var cljs$core$async$state_machine__23274__auto____0 = (function (){
var statearr_25099 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25099[(0)] = cljs$core$async$state_machine__23274__auto__);

(statearr_25099[(1)] = (1));

return statearr_25099;
});
var cljs$core$async$state_machine__23274__auto____1 = (function (state_25081){
while(true){
var ret_value__23275__auto__ = (function (){try{while(true){
var result__23276__auto__ = switch__23273__auto__.call(null,state_25081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23276__auto__;
}
break;
}
}catch (e25100){if((e25100 instanceof Object)){
var ex__23277__auto__ = e25100;
var statearr_25101_25115 = state_25081;
(statearr_25101_25115[(5)] = ex__23277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25116 = state_25081;
state_25081 = G__25116;
continue;
} else {
return ret_value__23275__auto__;
}
break;
}
});
cljs$core$async$state_machine__23274__auto__ = function(state_25081){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23274__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23274__auto____1.call(this,state_25081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23274__auto____0;
cljs$core$async$state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23274__auto____1;
return cljs$core$async$state_machine__23274__auto__;
})()
;})(switch__23273__auto__,c__23368__auto___25104,out))
})();
var state__23370__auto__ = (function (){var statearr_25102 = f__23369__auto__.call(null);
(statearr_25102[(6)] = c__23368__auto___25104);

return statearr_25102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23370__auto__);
});})(c__23368__auto___25104,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__25118 = arguments.length;
switch (G__25118) {
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
var c__23368__auto___25184 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23368__auto___25184,out){
return (function (){
var f__23369__auto__ = (function (){var switch__23273__auto__ = ((function (c__23368__auto___25184,out){
return (function (state_25156){
var state_val_25157 = (state_25156[(1)]);
if((state_val_25157 === (7))){
var inst_25152 = (state_25156[(2)]);
var state_25156__$1 = state_25156;
var statearr_25158_25185 = state_25156__$1;
(statearr_25158_25185[(2)] = inst_25152);

(statearr_25158_25185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (1))){
var inst_25119 = (new Array(n));
var inst_25120 = inst_25119;
var inst_25121 = (0);
var state_25156__$1 = (function (){var statearr_25159 = state_25156;
(statearr_25159[(7)] = inst_25121);

(statearr_25159[(8)] = inst_25120);

return statearr_25159;
})();
var statearr_25160_25186 = state_25156__$1;
(statearr_25160_25186[(2)] = null);

(statearr_25160_25186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (4))){
var inst_25124 = (state_25156[(9)]);
var inst_25124__$1 = (state_25156[(2)]);
var inst_25125 = (inst_25124__$1 == null);
var inst_25126 = cljs.core.not.call(null,inst_25125);
var state_25156__$1 = (function (){var statearr_25161 = state_25156;
(statearr_25161[(9)] = inst_25124__$1);

return statearr_25161;
})();
if(inst_25126){
var statearr_25162_25187 = state_25156__$1;
(statearr_25162_25187[(1)] = (5));

} else {
var statearr_25163_25188 = state_25156__$1;
(statearr_25163_25188[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (15))){
var inst_25146 = (state_25156[(2)]);
var state_25156__$1 = state_25156;
var statearr_25164_25189 = state_25156__$1;
(statearr_25164_25189[(2)] = inst_25146);

(statearr_25164_25189[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (13))){
var state_25156__$1 = state_25156;
var statearr_25165_25190 = state_25156__$1;
(statearr_25165_25190[(2)] = null);

(statearr_25165_25190[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (6))){
var inst_25121 = (state_25156[(7)]);
var inst_25142 = (inst_25121 > (0));
var state_25156__$1 = state_25156;
if(cljs.core.truth_(inst_25142)){
var statearr_25166_25191 = state_25156__$1;
(statearr_25166_25191[(1)] = (12));

} else {
var statearr_25167_25192 = state_25156__$1;
(statearr_25167_25192[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (3))){
var inst_25154 = (state_25156[(2)]);
var state_25156__$1 = state_25156;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25156__$1,inst_25154);
} else {
if((state_val_25157 === (12))){
var inst_25120 = (state_25156[(8)]);
var inst_25144 = cljs.core.vec.call(null,inst_25120);
var state_25156__$1 = state_25156;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25156__$1,(15),out,inst_25144);
} else {
if((state_val_25157 === (2))){
var state_25156__$1 = state_25156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25156__$1,(4),ch);
} else {
if((state_val_25157 === (11))){
var inst_25136 = (state_25156[(2)]);
var inst_25137 = (new Array(n));
var inst_25120 = inst_25137;
var inst_25121 = (0);
var state_25156__$1 = (function (){var statearr_25168 = state_25156;
(statearr_25168[(7)] = inst_25121);

(statearr_25168[(8)] = inst_25120);

(statearr_25168[(10)] = inst_25136);

return statearr_25168;
})();
var statearr_25169_25193 = state_25156__$1;
(statearr_25169_25193[(2)] = null);

(statearr_25169_25193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (9))){
var inst_25120 = (state_25156[(8)]);
var inst_25134 = cljs.core.vec.call(null,inst_25120);
var state_25156__$1 = state_25156;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25156__$1,(11),out,inst_25134);
} else {
if((state_val_25157 === (5))){
var inst_25124 = (state_25156[(9)]);
var inst_25121 = (state_25156[(7)]);
var inst_25129 = (state_25156[(11)]);
var inst_25120 = (state_25156[(8)]);
var inst_25128 = (inst_25120[inst_25121] = inst_25124);
var inst_25129__$1 = (inst_25121 + (1));
var inst_25130 = (inst_25129__$1 < n);
var state_25156__$1 = (function (){var statearr_25170 = state_25156;
(statearr_25170[(12)] = inst_25128);

(statearr_25170[(11)] = inst_25129__$1);

return statearr_25170;
})();
if(cljs.core.truth_(inst_25130)){
var statearr_25171_25194 = state_25156__$1;
(statearr_25171_25194[(1)] = (8));

} else {
var statearr_25172_25195 = state_25156__$1;
(statearr_25172_25195[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (14))){
var inst_25149 = (state_25156[(2)]);
var inst_25150 = cljs.core.async.close_BANG_.call(null,out);
var state_25156__$1 = (function (){var statearr_25174 = state_25156;
(statearr_25174[(13)] = inst_25149);

return statearr_25174;
})();
var statearr_25175_25196 = state_25156__$1;
(statearr_25175_25196[(2)] = inst_25150);

(statearr_25175_25196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (10))){
var inst_25140 = (state_25156[(2)]);
var state_25156__$1 = state_25156;
var statearr_25176_25197 = state_25156__$1;
(statearr_25176_25197[(2)] = inst_25140);

(statearr_25176_25197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (8))){
var inst_25129 = (state_25156[(11)]);
var inst_25120 = (state_25156[(8)]);
var tmp25173 = inst_25120;
var inst_25120__$1 = tmp25173;
var inst_25121 = inst_25129;
var state_25156__$1 = (function (){var statearr_25177 = state_25156;
(statearr_25177[(7)] = inst_25121);

(statearr_25177[(8)] = inst_25120__$1);

return statearr_25177;
})();
var statearr_25178_25198 = state_25156__$1;
(statearr_25178_25198[(2)] = null);

(statearr_25178_25198[(1)] = (2));


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
});})(c__23368__auto___25184,out))
;
return ((function (switch__23273__auto__,c__23368__auto___25184,out){
return (function() {
var cljs$core$async$state_machine__23274__auto__ = null;
var cljs$core$async$state_machine__23274__auto____0 = (function (){
var statearr_25179 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25179[(0)] = cljs$core$async$state_machine__23274__auto__);

(statearr_25179[(1)] = (1));

return statearr_25179;
});
var cljs$core$async$state_machine__23274__auto____1 = (function (state_25156){
while(true){
var ret_value__23275__auto__ = (function (){try{while(true){
var result__23276__auto__ = switch__23273__auto__.call(null,state_25156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23276__auto__;
}
break;
}
}catch (e25180){if((e25180 instanceof Object)){
var ex__23277__auto__ = e25180;
var statearr_25181_25199 = state_25156;
(statearr_25181_25199[(5)] = ex__23277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25180;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25200 = state_25156;
state_25156 = G__25200;
continue;
} else {
return ret_value__23275__auto__;
}
break;
}
});
cljs$core$async$state_machine__23274__auto__ = function(state_25156){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23274__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23274__auto____1.call(this,state_25156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23274__auto____0;
cljs$core$async$state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23274__auto____1;
return cljs$core$async$state_machine__23274__auto__;
})()
;})(switch__23273__auto__,c__23368__auto___25184,out))
})();
var state__23370__auto__ = (function (){var statearr_25182 = f__23369__auto__.call(null);
(statearr_25182[(6)] = c__23368__auto___25184);

return statearr_25182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23370__auto__);
});})(c__23368__auto___25184,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__25202 = arguments.length;
switch (G__25202) {
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
var c__23368__auto___25272 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23368__auto___25272,out){
return (function (){
var f__23369__auto__ = (function (){var switch__23273__auto__ = ((function (c__23368__auto___25272,out){
return (function (state_25244){
var state_val_25245 = (state_25244[(1)]);
if((state_val_25245 === (7))){
var inst_25240 = (state_25244[(2)]);
var state_25244__$1 = state_25244;
var statearr_25246_25273 = state_25244__$1;
(statearr_25246_25273[(2)] = inst_25240);

(statearr_25246_25273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25245 === (1))){
var inst_25203 = [];
var inst_25204 = inst_25203;
var inst_25205 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25244__$1 = (function (){var statearr_25247 = state_25244;
(statearr_25247[(7)] = inst_25204);

(statearr_25247[(8)] = inst_25205);

return statearr_25247;
})();
var statearr_25248_25274 = state_25244__$1;
(statearr_25248_25274[(2)] = null);

(statearr_25248_25274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25245 === (4))){
var inst_25208 = (state_25244[(9)]);
var inst_25208__$1 = (state_25244[(2)]);
var inst_25209 = (inst_25208__$1 == null);
var inst_25210 = cljs.core.not.call(null,inst_25209);
var state_25244__$1 = (function (){var statearr_25249 = state_25244;
(statearr_25249[(9)] = inst_25208__$1);

return statearr_25249;
})();
if(inst_25210){
var statearr_25250_25275 = state_25244__$1;
(statearr_25250_25275[(1)] = (5));

} else {
var statearr_25251_25276 = state_25244__$1;
(statearr_25251_25276[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25245 === (15))){
var inst_25234 = (state_25244[(2)]);
var state_25244__$1 = state_25244;
var statearr_25252_25277 = state_25244__$1;
(statearr_25252_25277[(2)] = inst_25234);

(statearr_25252_25277[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25245 === (13))){
var state_25244__$1 = state_25244;
var statearr_25253_25278 = state_25244__$1;
(statearr_25253_25278[(2)] = null);

(statearr_25253_25278[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25245 === (6))){
var inst_25204 = (state_25244[(7)]);
var inst_25229 = inst_25204.length;
var inst_25230 = (inst_25229 > (0));
var state_25244__$1 = state_25244;
if(cljs.core.truth_(inst_25230)){
var statearr_25254_25279 = state_25244__$1;
(statearr_25254_25279[(1)] = (12));

} else {
var statearr_25255_25280 = state_25244__$1;
(statearr_25255_25280[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25245 === (3))){
var inst_25242 = (state_25244[(2)]);
var state_25244__$1 = state_25244;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25244__$1,inst_25242);
} else {
if((state_val_25245 === (12))){
var inst_25204 = (state_25244[(7)]);
var inst_25232 = cljs.core.vec.call(null,inst_25204);
var state_25244__$1 = state_25244;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25244__$1,(15),out,inst_25232);
} else {
if((state_val_25245 === (2))){
var state_25244__$1 = state_25244;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25244__$1,(4),ch);
} else {
if((state_val_25245 === (11))){
var inst_25212 = (state_25244[(10)]);
var inst_25208 = (state_25244[(9)]);
var inst_25222 = (state_25244[(2)]);
var inst_25223 = [];
var inst_25224 = inst_25223.push(inst_25208);
var inst_25204 = inst_25223;
var inst_25205 = inst_25212;
var state_25244__$1 = (function (){var statearr_25256 = state_25244;
(statearr_25256[(7)] = inst_25204);

(statearr_25256[(11)] = inst_25224);

(statearr_25256[(8)] = inst_25205);

(statearr_25256[(12)] = inst_25222);

return statearr_25256;
})();
var statearr_25257_25281 = state_25244__$1;
(statearr_25257_25281[(2)] = null);

(statearr_25257_25281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25245 === (9))){
var inst_25204 = (state_25244[(7)]);
var inst_25220 = cljs.core.vec.call(null,inst_25204);
var state_25244__$1 = state_25244;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25244__$1,(11),out,inst_25220);
} else {
if((state_val_25245 === (5))){
var inst_25205 = (state_25244[(8)]);
var inst_25212 = (state_25244[(10)]);
var inst_25208 = (state_25244[(9)]);
var inst_25212__$1 = f.call(null,inst_25208);
var inst_25213 = cljs.core._EQ_.call(null,inst_25212__$1,inst_25205);
var inst_25214 = cljs.core.keyword_identical_QMARK_.call(null,inst_25205,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25215 = ((inst_25213) || (inst_25214));
var state_25244__$1 = (function (){var statearr_25258 = state_25244;
(statearr_25258[(10)] = inst_25212__$1);

return statearr_25258;
})();
if(cljs.core.truth_(inst_25215)){
var statearr_25259_25282 = state_25244__$1;
(statearr_25259_25282[(1)] = (8));

} else {
var statearr_25260_25283 = state_25244__$1;
(statearr_25260_25283[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25245 === (14))){
var inst_25237 = (state_25244[(2)]);
var inst_25238 = cljs.core.async.close_BANG_.call(null,out);
var state_25244__$1 = (function (){var statearr_25262 = state_25244;
(statearr_25262[(13)] = inst_25237);

return statearr_25262;
})();
var statearr_25263_25284 = state_25244__$1;
(statearr_25263_25284[(2)] = inst_25238);

(statearr_25263_25284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25245 === (10))){
var inst_25227 = (state_25244[(2)]);
var state_25244__$1 = state_25244;
var statearr_25264_25285 = state_25244__$1;
(statearr_25264_25285[(2)] = inst_25227);

(statearr_25264_25285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25245 === (8))){
var inst_25204 = (state_25244[(7)]);
var inst_25212 = (state_25244[(10)]);
var inst_25208 = (state_25244[(9)]);
var inst_25217 = inst_25204.push(inst_25208);
var tmp25261 = inst_25204;
var inst_25204__$1 = tmp25261;
var inst_25205 = inst_25212;
var state_25244__$1 = (function (){var statearr_25265 = state_25244;
(statearr_25265[(7)] = inst_25204__$1);

(statearr_25265[(14)] = inst_25217);

(statearr_25265[(8)] = inst_25205);

return statearr_25265;
})();
var statearr_25266_25286 = state_25244__$1;
(statearr_25266_25286[(2)] = null);

(statearr_25266_25286[(1)] = (2));


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
});})(c__23368__auto___25272,out))
;
return ((function (switch__23273__auto__,c__23368__auto___25272,out){
return (function() {
var cljs$core$async$state_machine__23274__auto__ = null;
var cljs$core$async$state_machine__23274__auto____0 = (function (){
var statearr_25267 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25267[(0)] = cljs$core$async$state_machine__23274__auto__);

(statearr_25267[(1)] = (1));

return statearr_25267;
});
var cljs$core$async$state_machine__23274__auto____1 = (function (state_25244){
while(true){
var ret_value__23275__auto__ = (function (){try{while(true){
var result__23276__auto__ = switch__23273__auto__.call(null,state_25244);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23276__auto__;
}
break;
}
}catch (e25268){if((e25268 instanceof Object)){
var ex__23277__auto__ = e25268;
var statearr_25269_25287 = state_25244;
(statearr_25269_25287[(5)] = ex__23277__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25244);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25288 = state_25244;
state_25244 = G__25288;
continue;
} else {
return ret_value__23275__auto__;
}
break;
}
});
cljs$core$async$state_machine__23274__auto__ = function(state_25244){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23274__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23274__auto____1.call(this,state_25244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23274__auto____0;
cljs$core$async$state_machine__23274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23274__auto____1;
return cljs$core$async$state_machine__23274__auto__;
})()
;})(switch__23273__auto__,c__23368__auto___25272,out))
})();
var state__23370__auto__ = (function (){var statearr_25270 = f__23369__auto__.call(null);
(statearr_25270[(6)] = c__23368__auto___25272);

return statearr_25270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23370__auto__);
});})(c__23368__auto___25272,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1703259697416
