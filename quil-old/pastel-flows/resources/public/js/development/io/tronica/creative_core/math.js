// Compiled by ClojureScript 1.10.520 {}
goog.provide('io.tronica.creative_core.math');
goog.require('cljs.core');

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
io.tronica.creative_core.math.Vec2D = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
io.tronica.creative_core.math.Vec2D.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

io.tronica.creative_core.math.Vec2D.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k32105,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__32109 = k32105;
var G__32109__$1 = (((G__32109 instanceof cljs.core.Keyword))?G__32109.fqn:null);
switch (G__32109__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32105,else__4388__auto__);

}
});

io.tronica.creative_core.math.Vec2D.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__32110){
var vec__32111 = p__32110;
var k__4408__auto__ = cljs.core.nth.call(null,vec__32111,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__32111,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

io.tronica.creative_core.math.Vec2D.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#io.tronica.creative-core.math.Vec2D{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

io.tronica.creative_core.math.Vec2D.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32104){
var self__ = this;
var G__32104__$1 = this;
return (new cljs.core.RecordIter((0),G__32104__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

io.tronica.creative_core.math.Vec2D.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

io.tronica.creative_core.math.Vec2D.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new io.tronica.creative_core.math.Vec2D(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

io.tronica.creative_core.math.Vec2D.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

io.tronica.creative_core.math.Vec2D.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1704532108 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

io.tronica.creative_core.math.Vec2D.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32106,other32107){
var self__ = this;
var this32106__$1 = this;
return (((!((other32107 == null)))) && ((this32106__$1.constructor === other32107.constructor)) && (cljs.core._EQ_.call(null,this32106__$1.x,other32107.x)) && (cljs.core._EQ_.call(null,this32106__$1.y,other32107.y)) && (cljs.core._EQ_.call(null,this32106__$1.__extmap,other32107.__extmap)));
});

io.tronica.creative_core.math.Vec2D.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new io.tronica.creative_core.math.Vec2D(self__.x,self__.y,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

io.tronica.creative_core.math.Vec2D.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__32104){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__32114 = cljs.core.keyword_identical_QMARK_;
var expr__32115 = k__4393__auto__;
if(cljs.core.truth_(pred__32114.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__32115))){
return (new io.tronica.creative_core.math.Vec2D(G__32104,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32114.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__32115))){
return (new io.tronica.creative_core.math.Vec2D(self__.x,G__32104,self__.__meta,self__.__extmap,null));
} else {
return (new io.tronica.creative_core.math.Vec2D(self__.x,self__.y,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__32104),null));
}
}
});

io.tronica.creative_core.math.Vec2D.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

io.tronica.creative_core.math.Vec2D.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__32104){
var self__ = this;
var this__4384__auto____$1 = this;
return (new io.tronica.creative_core.math.Vec2D(self__.x,self__.y,G__32104,self__.__extmap,self__.__hash));
});

io.tronica.creative_core.math.Vec2D.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

io.tronica.creative_core.math.Vec2D.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

io.tronica.creative_core.math.Vec2D.cljs$lang$type = true;

io.tronica.creative_core.math.Vec2D.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"io.tronica.creative-core.math/Vec2D",null,(1),null));
});

io.tronica.creative_core.math.Vec2D.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"io.tronica.creative-core.math/Vec2D");
});

/**
 * Positional factory function for io.tronica.creative-core.math/Vec2D.
 */
io.tronica.creative_core.math.__GT_Vec2D = (function io$tronica$creative_core$math$__GT_Vec2D(x,y){
return (new io.tronica.creative_core.math.Vec2D(x,y,null,null,null));
});

/**
 * Factory function for io.tronica.creative-core.math/Vec2D, taking a map of keywords to field values.
 */
io.tronica.creative_core.math.map__GT_Vec2D = (function io$tronica$creative_core$math$map__GT_Vec2D(G__32108){
var extmap__4424__auto__ = (function (){var G__32117 = cljs.core.dissoc.call(null,G__32108,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776));
if(cljs.core.record_QMARK_.call(null,G__32108)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__32117);
} else {
return G__32117;
}
})();
return (new io.tronica.creative_core.math.Vec2D(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__32108),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__32108),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});

io.tronica.creative_core.math.vec2 = (function io$tronica$creative_core$math$vec2(var_args){
var G__32120 = arguments.length;
switch (G__32120) {
case 0:
return io.tronica.creative_core.math.vec2.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return io.tronica.creative_core.math.vec2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

io.tronica.creative_core.math.vec2.cljs$core$IFn$_invoke$arity$0 = (function (){
return io.tronica.creative_core.math.__GT_Vec2D.call(null,(0),(0));
});

io.tronica.creative_core.math.vec2.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return io.tronica.creative_core.math.__GT_Vec2D.call(null,x,y);
});

io.tronica.creative_core.math.vec2.cljs$lang$maxFixedArity = 2;

/**
 * Returns a random number between min and max
 */
io.tronica.creative_core.math.random = (function io$tronica$creative_core$math$random(min,max){
return (min + (cljs.core.rand.call(null) * (max - min)));
});
/**
 * Distance between two Vec2D points
 */
io.tronica.creative_core.math.dist = (function io$tronica$creative_core$math$dist(v1,v2){
var dx = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(v2) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(v1));
var dy = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(v2) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(v1));
return Math.sqrt(((dx * dx) + (dy * dy)));
});
io.tronica.creative_core.math.magnitude = (function io$tronica$creative_core$math$magnitude(v){
return Math.sqrt(((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(v) * new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(v)) + (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(v) * new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(v))));
});
io.tronica.creative_core.math.normalize = (function io$tronica$creative_core$math$normalize(v){
var mag = io.tronica.creative_core.math.magnitude.call(null,v);
if((mag === (0))){
return v;
} else {
return io.tronica.creative_core.math.__GT_Vec2D.call(null,(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(v) / mag),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(v) / mag));
}
});
io.tronica.creative_core.math.scale = (function io$tronica$creative_core$math$scale(v,scalar){
return io.tronica.creative_core.math.__GT_Vec2D.call(null,(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(v) * scalar),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(v) * scalar));
});
/**
 * Subtract either two Vec2D points or a Vec2D point by a scalar
 */
io.tronica.creative_core.math.sub = (function io$tronica$creative_core$math$sub(v1,v2){
if(typeof v2 === 'number'){
var dx = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(v1) - v2);
var dy = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(v1) - v2);
return io.tronica.creative_core.math.vec2.call(null,dx,dy);
} else {
var dx = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(v1) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(v2));
var dy = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(v1) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(v2));
return io.tronica.creative_core.math.vec2.call(null,dx,dy);
}
});
/**
 * Add either two Vec2D points or a Vec2D point to a scalar
 */
io.tronica.creative_core.math.add = (function io$tronica$creative_core$math$add(v1,v2){
if(typeof v2 === 'number'){
var dx = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(v1) + v2);
var dy = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(v1) + v2);
return io.tronica.creative_core.math.vec2.call(null,dx,dy);
} else {
var dx = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(v1) + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(v2));
var dy = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(v1) + new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(v2));
return io.tronica.creative_core.math.vec2.call(null,dx,dy);
}
});
/**
 * Multiply either two Vec2D points or a Vec2D point by a scalar
 */
io.tronica.creative_core.math.mul = (function io$tronica$creative_core$math$mul(v1,v2){
if(typeof v2 === 'number'){
var dx = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(v1) * v2);
var dy = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(v1) * v2);
return io.tronica.creative_core.math.vec2.call(null,dx,dy);
} else {
var dx = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(v1) * new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(v2));
var dy = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(v1) * new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(v2));
return io.tronica.creative_core.math.vec2.call(null,dx,dy);
}
});
/**
 * Divide a Vec2D point by a scalar
 */
io.tronica.creative_core.math.div = (function io$tronica$creative_core$math$div(v1,d){
var dx = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(v1) / d);
var dy = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(v1) / d);
return io.tronica.creative_core.math.vec2.call(null,dx,dy);
});
io.tronica.creative_core.math.limit = (function io$tronica$creative_core$math$limit(v,max){
var mag = io.tronica.creative_core.math.magnitude.call(null,v);
if((mag > max)){
return io.tronica.creative_core.math.scale.call(null,io.tronica.creative_core.math.normalize.call(null,v),max);
} else {
return v;
}
});

//# sourceMappingURL=math.js.map?rel=1703742260941
