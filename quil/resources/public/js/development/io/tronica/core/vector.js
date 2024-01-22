// Compiled by ClojureScript 1.10.520 {}
goog.provide('io.tronica.core.vector');
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
io.tronica.core.vector.Vector3D = (function (x,y,z,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.z = z;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
io.tronica.core.vector.Vector3D.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

io.tronica.core.vector.Vector3D.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k26444,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__26448 = k26444;
var G__26448__$1 = (((G__26448 instanceof cljs.core.Keyword))?G__26448.fqn:null);
switch (G__26448__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
case "z":
return self__.z;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26444,else__4388__auto__);

}
});

io.tronica.core.vector.Vector3D.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__26449){
var vec__26450 = p__26449;
var k__4408__auto__ = cljs.core.nth.call(null,vec__26450,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__26450,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

io.tronica.core.vector.Vector3D.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#io.tronica.core.vector.Vector3D{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"z","z",-789527183),self__.z],null))], null),self__.__extmap));
});

io.tronica.core.vector.Vector3D.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26443){
var self__ = this;
var G__26443__$1 = this;
return (new cljs.core.RecordIter((0),G__26443__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"z","z",-789527183)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

io.tronica.core.vector.Vector3D.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

io.tronica.core.vector.Vector3D.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new io.tronica.core.vector.Vector3D(self__.x,self__.y,self__.z,self__.__meta,self__.__extmap,self__.__hash));
});

io.tronica.core.vector.Vector3D.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

io.tronica.core.vector.Vector3D.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-419063980 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

io.tronica.core.vector.Vector3D.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this26445,other26446){
var self__ = this;
var this26445__$1 = this;
return (((!((other26446 == null)))) && ((this26445__$1.constructor === other26446.constructor)) && (cljs.core._EQ_.call(null,this26445__$1.x,other26446.x)) && (cljs.core._EQ_.call(null,this26445__$1.y,other26446.y)) && (cljs.core._EQ_.call(null,this26445__$1.z,other26446.z)) && (cljs.core._EQ_.call(null,this26445__$1.__extmap,other26446.__extmap)));
});

io.tronica.core.vector.Vector3D.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"z","z",-789527183),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new io.tronica.core.vector.Vector3D(self__.x,self__.y,self__.z,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

io.tronica.core.vector.Vector3D.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__26443){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__26453 = cljs.core.keyword_identical_QMARK_;
var expr__26454 = k__4393__auto__;
if(cljs.core.truth_(pred__26453.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__26454))){
return (new io.tronica.core.vector.Vector3D(G__26443,self__.y,self__.z,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26453.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__26454))){
return (new io.tronica.core.vector.Vector3D(self__.x,G__26443,self__.z,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26453.call(null,new cljs.core.Keyword(null,"z","z",-789527183),expr__26454))){
return (new io.tronica.core.vector.Vector3D(self__.x,self__.y,G__26443,self__.__meta,self__.__extmap,null));
} else {
return (new io.tronica.core.vector.Vector3D(self__.x,self__.y,self__.z,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__26443),null));
}
}
}
});

io.tronica.core.vector.Vector3D.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"z","z",-789527183),self__.z,null))], null),self__.__extmap));
});

io.tronica.core.vector.Vector3D.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__26443){
var self__ = this;
var this__4384__auto____$1 = this;
return (new io.tronica.core.vector.Vector3D(self__.x,self__.y,self__.z,G__26443,self__.__extmap,self__.__hash));
});

io.tronica.core.vector.Vector3D.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

io.tronica.core.vector.Vector3D.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"z","z",851004344,null)], null);
});

io.tronica.core.vector.Vector3D.cljs$lang$type = true;

io.tronica.core.vector.Vector3D.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"io.tronica.core.vector/Vector3D",null,(1),null));
});

io.tronica.core.vector.Vector3D.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"io.tronica.core.vector/Vector3D");
});

/**
 * Positional factory function for io.tronica.core.vector/Vector3D.
 */
io.tronica.core.vector.__GT_Vector3D = (function io$tronica$core$vector$__GT_Vector3D(x,y,z){
return (new io.tronica.core.vector.Vector3D(x,y,z,null,null,null));
});

/**
 * Factory function for io.tronica.core.vector/Vector3D, taking a map of keywords to field values.
 */
io.tronica.core.vector.map__GT_Vector3D = (function io$tronica$core$vector$map__GT_Vector3D(G__26447){
var extmap__4424__auto__ = (function (){var G__26456 = cljs.core.dissoc.call(null,G__26447,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"z","z",-789527183));
if(cljs.core.record_QMARK_.call(null,G__26447)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__26456);
} else {
return G__26456;
}
})();
return (new io.tronica.core.vector.Vector3D(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__26447),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__26447),new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$1(G__26447),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});

io.tronica.core.vector.create_vector = (function io$tronica$core$vector$create_vector(var_args){
var G__26459 = arguments.length;
switch (G__26459) {
case 0:
return io.tronica.core.vector.create_vector.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return io.tronica.core.vector.create_vector.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return io.tronica.core.vector.create_vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return io.tronica.core.vector.create_vector.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

io.tronica.core.vector.create_vector.cljs$core$IFn$_invoke$arity$0 = (function (){
return io.tronica.core.vector.__GT_Vector3D.call(null,(0),(0),(0));
});

io.tronica.core.vector.create_vector.cljs$core$IFn$_invoke$arity$1 = (function (n){
return io.tronica.core.vector.__GT_Vector3D.call(null,n,n,n);
});

io.tronica.core.vector.create_vector.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return io.tronica.core.vector.__GT_Vector3D.call(null,x,y,(0));
});

io.tronica.core.vector.create_vector.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return io.tronica.core.vector.__GT_Vector3D.call(null,x,y,z);
});

io.tronica.core.vector.create_vector.cljs$lang$maxFixedArity = 3;

/**
 * Distance between two Vector3D points
 */
io.tronica.core.vector.dist = (function io$tronica$core$vector$dist(v1,v2){
var dx = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(v2) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(v1));
var dy = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(v2) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(v1));
var dz = (new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$1(v2) - new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$1(v1));
return Math.sqrt((((dx * dx) + (dy * dy)) + (dz * dz)));
});
io.tronica.core.vector.magnitude = (function io$tronica$core$vector$magnitude(v){
return Math.sqrt((((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(v) * new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(v)) + (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(v) * new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(v))) + (new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$1(v) * new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$1(v))));
});
io.tronica.core.vector.normalize = (function io$tronica$core$vector$normalize(v){
var mag = io.tronica.core.vector.magnitude.call(null,v);
if((mag === (0))){
return v;
} else {
return io.tronica.core.vector.__GT_Vector3D.call(null,(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(v) / mag),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(v) / mag),(new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$1(v) / mag));
}
});
io.tronica.core.vector.scale = (function io$tronica$core$vector$scale(v,scalar){
return io.tronica.core.vector.__GT_Vector3D.call(null,(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(v) * scalar),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(v) * scalar),(new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$1(v) * scalar));
});
/**
 * Subtract two Vector3D points
 */
io.tronica.core.vector.sub = (function io$tronica$core$vector$sub(v1,v2){
return io.tronica.core.vector.__GT_Vector3D.call(null,(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(v1) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(v2)),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(v1) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(v2)),(new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$1(v1) - new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$1(v2)));
});
/**
 * Add two Vector3D points
 */
io.tronica.core.vector.add = (function io$tronica$core$vector$add(v1,v2){
return io.tronica.core.vector.__GT_Vector3D.call(null,(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(v1) + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(v2)),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(v1) + new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(v2)),(new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$1(v1) + new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$1(v2)));
});
/**
 * Multiply two Vector3D points
 */
io.tronica.core.vector.mul = (function io$tronica$core$vector$mul(v1,v2){
return io.tronica.core.vector.__GT_Vector3D.call(null,(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(v1) * new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(v2)),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(v1) * new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(v2)),(new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$1(v1) * new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$1(v2)));
});
/**
 * Divide a Vector3D point by a scalar
 */
io.tronica.core.vector.div = (function io$tronica$core$vector$div(v1,d){
return io.tronica.core.vector.__GT_Vector3D.call(null,(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(v1) / d),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(v1) / d),(new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$1(v1) / d));
});
io.tronica.core.vector.limit = (function io$tronica$core$vector$limit(v,max){
var mag = io.tronica.core.vector.magnitude.call(null,v);
if((mag > max)){
return io.tronica.core.vector.scale.call(null,io.tronica.core.vector.normalize.call(null,v),max);
} else {
return v;
}
});

//# sourceMappingURL=vector.js.map?rel=1704785441015
