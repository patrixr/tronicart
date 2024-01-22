// Compiled by ClojureScript 1.10.520 {}
goog.provide('io.tronica.sketches.watercolors');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('io.tronica.core.colors');
goog.require('quil.middleware');
io.tronica.sketches.watercolors.w = (500);
io.tronica.sketches.watercolors.h = (500);
io.tronica.sketches.watercolors.jitter_color = (function io$tronica$sketches$watercolors$jitter_color(color){
return quil.core.color.call(null,(quil.core.red.call(null,color) + quil.core.random.call(null,(-25),(25))),(quil.core.green.call(null,color) + quil.core.random.call(null,(-25),(25))),(quil.core.blue.call(null,color) + quil.core.random.call(null,(-25),(25))),quil.core.random.call(null,(1),(6)));
});
/**
 * Converts and angle and radius to xy coordinates
 */
io.tronica.sketches.watercolors.polar_to_cartesian = (function io$tronica$sketches$watercolors$polar_to_cartesian(r,theta){
var x = (r * Math.cos(theta));
var y = (r * Math.sin(theta));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});
/**
 * Places a vertex using polar coordinates instead of cartesian
 */
io.tronica.sketches.watercolors.polar_vertex = (function io$tronica$sketches$watercolors$polar_vertex(r,angle){
var vec__34844 = io.tronica.sketches.watercolors.polar_to_cartesian.call(null,r,angle);
var x = cljs.core.nth.call(null,vec__34844,(0),null);
var y = cljs.core.nth.call(null,vec__34844,(1),null);
return quil.core.vertex.call(null,x,y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
io.tronica.sketches.watercolors.Brush = (function (size,__meta,__extmap,__hash){
this.size = size;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
io.tronica.sketches.watercolors.Brush.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

io.tronica.sketches.watercolors.Brush.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k34848,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__34852 = k34848;
var G__34852__$1 = (((G__34852 instanceof cljs.core.Keyword))?G__34852.fqn:null);
switch (G__34852__$1) {
case "size":
return self__.size;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k34848,else__4388__auto__);

}
});

io.tronica.sketches.watercolors.Brush.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__34853){
var vec__34854 = p__34853;
var k__4408__auto__ = cljs.core.nth.call(null,vec__34854,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__34854,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

io.tronica.sketches.watercolors.Brush.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#io.tronica.sketches.watercolors.Brush{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null))], null),self__.__extmap));
});

io.tronica.sketches.watercolors.Brush.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34847){
var self__ = this;
var G__34847__$1 = this;
return (new cljs.core.RecordIter((0),G__34847__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"size","size",1098693007)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

io.tronica.sketches.watercolors.Brush.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

io.tronica.sketches.watercolors.Brush.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new io.tronica.sketches.watercolors.Brush(self__.size,self__.__meta,self__.__extmap,self__.__hash));
});

io.tronica.sketches.watercolors.Brush.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

io.tronica.sketches.watercolors.Brush.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-834272850 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

io.tronica.sketches.watercolors.Brush.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34849,other34850){
var self__ = this;
var this34849__$1 = this;
return (((!((other34850 == null)))) && ((this34849__$1.constructor === other34850.constructor)) && (cljs.core._EQ_.call(null,this34849__$1.size,other34850.size)) && (cljs.core._EQ_.call(null,this34849__$1.__extmap,other34850.__extmap)));
});

io.tronica.sketches.watercolors.Brush.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new io.tronica.sketches.watercolors.Brush(self__.size,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

io.tronica.sketches.watercolors.Brush.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__34847){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__34857 = cljs.core.keyword_identical_QMARK_;
var expr__34858 = k__4393__auto__;
if(cljs.core.truth_(pred__34857.call(null,new cljs.core.Keyword(null,"size","size",1098693007),expr__34858))){
return (new io.tronica.sketches.watercolors.Brush(G__34847,self__.__meta,self__.__extmap,null));
} else {
return (new io.tronica.sketches.watercolors.Brush(self__.size,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__34847),null));
}
});

io.tronica.sketches.watercolors.Brush.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"size","size",1098693007),self__.size,null))], null),self__.__extmap));
});

io.tronica.sketches.watercolors.Brush.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__34847){
var self__ = this;
var this__4384__auto____$1 = this;
return (new io.tronica.sketches.watercolors.Brush(self__.size,G__34847,self__.__extmap,self__.__hash));
});

io.tronica.sketches.watercolors.Brush.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

io.tronica.sketches.watercolors.Brush.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"size","size",-1555742762,null)], null);
});

io.tronica.sketches.watercolors.Brush.cljs$lang$type = true;

io.tronica.sketches.watercolors.Brush.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"io.tronica.sketches.watercolors/Brush",null,(1),null));
});

io.tronica.sketches.watercolors.Brush.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"io.tronica.sketches.watercolors/Brush");
});

/**
 * Positional factory function for io.tronica.sketches.watercolors/Brush.
 */
io.tronica.sketches.watercolors.__GT_Brush = (function io$tronica$sketches$watercolors$__GT_Brush(size){
return (new io.tronica.sketches.watercolors.Brush(size,null,null,null));
});

/**
 * Factory function for io.tronica.sketches.watercolors/Brush, taking a map of keywords to field values.
 */
io.tronica.sketches.watercolors.map__GT_Brush = (function io$tronica$sketches$watercolors$map__GT_Brush(G__34851){
var extmap__4424__auto__ = (function (){var G__34860 = cljs.core.dissoc.call(null,G__34851,new cljs.core.Keyword(null,"size","size",1098693007));
if(cljs.core.record_QMARK_.call(null,G__34851)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__34860);
} else {
return G__34860;
}
})();
return (new io.tronica.sketches.watercolors.Brush(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(G__34851),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});

io.tronica.sketches.watercolors.create_brush = (function io$tronica$sketches$watercolors$create_brush(size){
return io.tronica.sketches.watercolors.__GT_Brush.call(null,size);
});
io.tronica.sketches.watercolors.angle_step = (function io$tronica$sketches$watercolors$angle_step(){
return quil.core.random.call(null,0.7,1.3);
});
/**
 * Apply a brush at a given spot of the canvas
 */
io.tronica.sketches.watercolors.apply_brush = (function io$tronica$sketches$watercolors$apply_brush(var_args){
var G__34863 = arguments.length;
switch (G__34863) {
case 4:
return io.tronica.sketches.watercolors.apply_brush.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return io.tronica.sketches.watercolors.apply_brush.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

io.tronica.sketches.watercolors.apply_brush.cljs$core$IFn$_invoke$arity$4 = (function (x,y,brush,color){
return io.tronica.sketches.watercolors.apply_brush.call(null,x,y,brush,color,0.1);
});

io.tronica.sketches.watercolors.apply_brush.cljs$core$IFn$_invoke$arity$5 = (function (x,y,brush,color,pressure){
var start_angle = quil.core.random.call(null,(0),quil.core.TWO_PI);
var size = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(brush);
quil.core.push_matrix.call(null);

quil.core.translate.call(null,x,y);

quil.core.no_stroke.call(null);

var n__4607__auto___34865 = quil.core.floor.call(null,(pressure * (10)));
var __34866 = (0);
while(true){
if((__34866 < n__4607__auto___34865)){
quil.core.begin_shape.call(null);

quil.core.fill.call(null,io.tronica.sketches.watercolors.jitter_color.call(null,color));

var angle_34867 = (0);
while(true){
if((angle_34867 < quil.core.TWO_PI)){
io.tronica.sketches.watercolors.polar_vertex.call(null,quil.core.random.call(null,(size * 0.7),(size * 1.1)),(start_angle + angle_34867));

var G__34868 = (angle_34867 + io.tronica.sketches.watercolors.angle_step.call(null));
angle_34867 = G__34868;
continue;
} else {
}
break;
}

quil.core.end_shape.call(null);

var G__34869 = (__34866 + (1));
__34866 = G__34869;
continue;
} else {
}
break;
}

return quil.core.pop_matrix.call(null);
});

io.tronica.sketches.watercolors.apply_brush.cljs$lang$maxFixedArity = 5;

io.tronica.sketches.watercolors.create_watercolor_bg = (function io$tronica$sketches$watercolors$create_watercolor_bg(color){
cljs.core.prn.call(null,"Generating background of color",color);

var brush = io.tronica.sketches.watercolors.create_brush.call(null,(quil.core.width.call(null) / (10)));
var stroke_count = ((quil.core.width.call(null) * quil.core.height.call(null)) / ((1) * new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(brush)));
var texture = quil.core.create_graphics.call(null,io.tronica.sketches.watercolors.w,io.tronica.sketches.watercolors.h);
var gr__29356__auto___34872 = texture;
var _STAR_graphics_STAR__orig_val__34870_34873 = quil.core._STAR_graphics_STAR_;
var _STAR_graphics_STAR__temp_val__34871_34874 = gr__29356__auto___34872;
quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__temp_val__34871_34874;

try{quil.core.begin_draw.call(null,gr__29356__auto___34872);

quil.core.background.call(null,io.tronica.core.colors.with_opacity.call(null,color,(100)));

var n__4607__auto___34875 = stroke_count;
var __34876 = (0);
while(true){
if((__34876 < n__4607__auto___34875)){
var x_34877 = quil.core.random.call(null,io.tronica.sketches.watercolors.w);
var y_34878 = quil.core.random.call(null,io.tronica.sketches.watercolors.h);
io.tronica.sketches.watercolors.apply_brush.call(null,x_34877,y_34878,brush,color);

var G__34879 = (__34876 + (1));
__34876 = G__34879;
continue;
} else {
}
break;
}

quil.core.display_filter.call(null,new cljs.core.Keyword(null,"blur","blur",-453500461),(1));

quil.core.end_draw.call(null,gr__29356__auto___34872);
}finally {quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__orig_val__34870_34873;
}
return texture;
});
io.tronica.sketches.watercolors.setup = (function io$tronica$sketches$watercolors$setup(){
quil.core.frame_rate.call(null,(30));

quil.core.blend_mode.call(null,new cljs.core.Keyword(null,"blend","blend",249565561));

var bg = io.tronica.sketches.watercolors.create_watercolor_bg.call(null,quil.core.color.call(null,io.tronica.core.colors.PEACH_YELLOW));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bg","bg",-206688421),bg], null);
});
io.tronica.sketches.watercolors.update_state = (function io$tronica$sketches$watercolors$update_state(state){
return state;
});
io.tronica.sketches.watercolors.draw_state = (function io$tronica$sketches$watercolors$draw_state(state){
quil.core.image.call(null,new cljs.core.Keyword(null,"bg","bg",-206688421).cljs$core$IFn$_invoke$arity$1(state),(0),(0));

return quil.core.rect.call(null,(100),(100),(100),(100));
});
io.tronica.sketches.watercolors.run_sketch = (function io$tronica$sketches$watercolors$run_sketch(){
io.tronica.sketches.watercolors.watercolors = (function io$tronica$sketches$watercolors$run_sketch_$_watercolors(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"sketch",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,io.tronica.sketches.watercolors.update_state))?(function() { 
var G__34880__delegate = function (args){
return cljs.core.apply.call(null,io.tronica.sketches.watercolors.update_state,args);
};
var G__34880 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34881__i = 0, G__34881__a = new Array(arguments.length -  0);
while (G__34881__i < G__34881__a.length) {G__34881__a[G__34881__i] = arguments[G__34881__i + 0]; ++G__34881__i;}
  args = new cljs.core.IndexedSeq(G__34881__a,0,null);
} 
return G__34880__delegate.call(this,args);};
G__34880.cljs$lang$maxFixedArity = 0;
G__34880.cljs$lang$applyTo = (function (arglist__34882){
var args = cljs.core.seq(arglist__34882);
return G__34880__delegate(args);
});
G__34880.cljs$core$IFn$_invoke$arity$variadic = G__34880__delegate;
return G__34880;
})()
:io.tronica.sketches.watercolors.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [io.tronica.sketches.watercolors.w,io.tronica.sketches.watercolors.h], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,io.tronica.sketches.watercolors.setup))?(function() { 
var G__34883__delegate = function (args){
return cljs.core.apply.call(null,io.tronica.sketches.watercolors.setup,args);
};
var G__34883 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34884__i = 0, G__34884__a = new Array(arguments.length -  0);
while (G__34884__i < G__34884__a.length) {G__34884__a[G__34884__i] = arguments[G__34884__i + 0]; ++G__34884__i;}
  args = new cljs.core.IndexedSeq(G__34884__a,0,null);
} 
return G__34883__delegate.call(this,args);};
G__34883.cljs$lang$maxFixedArity = 0;
G__34883.cljs$lang$applyTo = (function (arglist__34885){
var args = cljs.core.seq(arglist__34885);
return G__34883__delegate(args);
});
G__34883.cljs$core$IFn$_invoke$arity$variadic = G__34883__delegate;
return G__34883;
})()
:io.tronica.sketches.watercolors.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,io.tronica.sketches.watercolors.draw_state))?(function() { 
var G__34886__delegate = function (args){
return cljs.core.apply.call(null,io.tronica.sketches.watercolors.draw_state,args);
};
var G__34886 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34887__i = 0, G__34887__a = new Array(arguments.length -  0);
while (G__34887__i < G__34887__a.length) {G__34887__a[G__34887__i] = arguments[G__34887__i + 0]; ++G__34887__i;}
  args = new cljs.core.IndexedSeq(G__34887__a,0,null);
} 
return G__34886__delegate.call(this,args);};
G__34886.cljs$lang$maxFixedArity = 0;
G__34886.cljs$lang$applyTo = (function (arglist__34888){
var args = cljs.core.seq(arglist__34888);
return G__34886__delegate(args);
});
G__34886.cljs$core$IFn$_invoke$arity$variadic = G__34886__delegate;
return G__34886;
})()
:io.tronica.sketches.watercolors.draw_state));
});
goog.exportSymbol('io.tronica.sketches.watercolors.watercolors', io.tronica.sketches.watercolors.watercolors);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__28944__28945__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__28944__28945__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),io.tronica.sketches.watercolors.watercolors,new cljs.core.Keyword(null,"host-id","host-id",742376279),"sketch"], null));
}
});
goog.exportSymbol('io.tronica.sketches.watercolors.run_sketch', io.tronica.sketches.watercolors.run_sketch);

//# sourceMappingURL=watercolors.js.map?rel=1704789642837
