// Compiled by ClojureScript 1.10.520 {}
goog.provide('pastel_flows.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('io.tronica.creative_core.vector');
goog.require('io.tronica.creative_core.core');

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
pastel_flows.core.Grid = (function (data,w,h,__meta,__extmap,__hash){
this.data = data;
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
pastel_flows.core.Grid.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

pastel_flows.core.Grid.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k1826,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__1830 = k1826;
var G__1830__$1 = (((G__1830 instanceof cljs.core.Keyword))?G__1830.fqn:null);
switch (G__1830__$1) {
case "data":
return self__.data;

break;
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k1826,else__4388__auto__);

}
});

pastel_flows.core.Grid.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__1831){
var vec__1832 = p__1831;
var k__4408__auto__ = cljs.core.nth.call(null,vec__1832,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__1832,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

pastel_flows.core.Grid.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#pastel-flows.core.Grid{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

pastel_flows.core.Grid.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__1825){
var self__ = this;
var G__1825__$1 = this;
return (new cljs.core.RecordIter((0),G__1825__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

pastel_flows.core.Grid.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

pastel_flows.core.Grid.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new pastel_flows.core.Grid(self__.data,self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

pastel_flows.core.Grid.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

pastel_flows.core.Grid.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-89647313 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

pastel_flows.core.Grid.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this1827,other1828){
var self__ = this;
var this1827__$1 = this;
return (((!((other1828 == null)))) && ((this1827__$1.constructor === other1828.constructor)) && (cljs.core._EQ_.call(null,this1827__$1.data,other1828.data)) && (cljs.core._EQ_.call(null,this1827__$1.w,other1828.w)) && (cljs.core._EQ_.call(null,this1827__$1.h,other1828.h)) && (cljs.core._EQ_.call(null,this1827__$1.__extmap,other1828.__extmap)));
});

pastel_flows.core.Grid.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new pastel_flows.core.Grid(self__.data,self__.w,self__.h,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

pastel_flows.core.Grid.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__1825){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__1835 = cljs.core.keyword_identical_QMARK_;
var expr__1836 = k__4393__auto__;
if(cljs.core.truth_(pred__1835.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__1836))){
return (new pastel_flows.core.Grid(G__1825,self__.w,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1835.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__1836))){
return (new pastel_flows.core.Grid(self__.data,G__1825,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1835.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__1836))){
return (new pastel_flows.core.Grid(self__.data,self__.w,G__1825,self__.__meta,self__.__extmap,null));
} else {
return (new pastel_flows.core.Grid(self__.data,self__.w,self__.h,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__1825),null));
}
}
}
});

pastel_flows.core.Grid.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

pastel_flows.core.Grid.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__1825){
var self__ = this;
var this__4384__auto____$1 = this;
return (new pastel_flows.core.Grid(self__.data,self__.w,self__.h,G__1825,self__.__extmap,self__.__hash));
});

pastel_flows.core.Grid.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

pastel_flows.core.Grid.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

pastel_flows.core.Grid.cljs$lang$type = true;

pastel_flows.core.Grid.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"pastel-flows.core/Grid",null,(1),null));
});

pastel_flows.core.Grid.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"pastel-flows.core/Grid");
});

/**
 * Positional factory function for pastel-flows.core/Grid.
 */
pastel_flows.core.__GT_Grid = (function pastel_flows$core$__GT_Grid(data,w,h){
return (new pastel_flows.core.Grid(data,w,h,null,null,null));
});

/**
 * Factory function for pastel-flows.core/Grid, taking a map of keywords to field values.
 */
pastel_flows.core.map__GT_Grid = (function pastel_flows$core$map__GT_Grid(G__1829){
var extmap__4424__auto__ = (function (){var G__1838 = cljs.core.dissoc.call(null,G__1829,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740));
if(cljs.core.record_QMARK_.call(null,G__1829)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__1838);
} else {
return G__1838;
}
})();
return (new pastel_flows.core.Grid(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__1829),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__1829),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__1829),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});

pastel_flows.core.create_grid = (function pastel_flows$core$create_grid(w,h){
return pastel_flows.core.__GT_Grid.call(null,io.tronica.creative_core.core.mutable.call(null,cljs.core.vec.call(null,cljs.core.repeat.call(null,(w * h),null))),w,h);
});
pastel_flows.core.noise_scale = (500);
pastel_flows.core.scale = 0.5;
pastel_flows.core.w = ((1080) * pastel_flows.core.scale);
pastel_flows.core.h = ((1920) * pastel_flows.core.scale);
pastel_flows.core.cell_size = (pastel_flows.core.w / (20));
pastel_flows.core.trail_weight = (pastel_flows.core.scale * (10));
pastel_flows.core.collision_radius = ((1) * pastel_flows.core.trail_weight);
pastel_flows.core.vector_grid_rows = Math.floor((pastel_flows.core.h / pastel_flows.core.cell_size));
pastel_flows.core.vector_grid_cols = Math.floor((pastel_flows.core.w / pastel_flows.core.cell_size));
pastel_flows.core.vector_grid = pastel_flows.core.create_grid.call(null,pastel_flows.core.vector_grid_cols,pastel_flows.core.vector_grid_rows);
pastel_flows.core.debug = false;
pastel_flows.core.particle_count = (1);
pastel_flows.core.particle_ttl = (100);
pastel_flows.core.particles = io.tronica.creative_core.core.mutable.call(null,cljs.core.PersistentVector.EMPTY);
pastel_flows.core.gfx = (new cljs.core.Delay((function (){
return quil.core.create_graphics.call(null,pastel_flows.core.w,pastel_flows.core.h);
}),null));
pastel_flows.core.palette = (new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),(38),new cljs.core.Keyword(null,"g","g",1738089905),(70),new cljs.core.Keyword(null,"b","b",1482224470),(83)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),(42),new cljs.core.Keyword(null,"g","g",1738089905),(157),new cljs.core.Keyword(null,"b","b",1482224470),(143)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),(233),new cljs.core.Keyword(null,"g","g",1738089905),(196),new cljs.core.Keyword(null,"b","b",1482224470),(70)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),(244),new cljs.core.Keyword(null,"g","g",1738089905),(162),new cljs.core.Keyword(null,"b","b",1482224470),(97)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),(231),new cljs.core.Keyword(null,"g","g",1738089905),(111),new cljs.core.Keyword(null,"b","b",1482224470),(81)], null)], null);
}),null));
pastel_flows.core.get_color = (function pastel_flows$core$get_color(i){
var c = cljs.core.nth.call(null,cljs.core.deref.call(null,pastel_flows.core.palette),cljs.core.mod.call(null,i,cljs.core.count.call(null,cljs.core.deref.call(null,pastel_flows.core.palette))));
var alpha = ((5) + cljs.core.mod.call(null,i,(50)));
return quil.core.color.call(null,new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"g","g",1738089905).cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(c),alpha);
});
pastel_flows.core.oob_QMARK_ = (function pastel_flows$core$oob_QMARK_(pos){
return (((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pos) <= (0))) || ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pos) <= (0))) || ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pos) >= pastel_flows.core.w)) || ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pos) >= pastel_flows.core.h)));
});
/**
 * Determines if two circles intersect.
 *   The arguments are the x, y coordinates and radius for each of the two circles.
 */
pastel_flows.core.circles_intersect_QMARK_ = (function pastel_flows$core$circles_intersect_QMARK_(pos1,r1,pos2,r2){
var dx = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pos2) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pos1));
var dy = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pos2) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pos1));
var distance = Math.sqrt(((dx * dx) + (dy * dy)));
return (distance <= (r1 + r2));
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
pastel_flows.core.Particle = (function (pos,t,trail,alive,__meta,__extmap,__hash){
this.pos = pos;
this.t = t;
this.trail = trail;
this.alive = alive;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
pastel_flows.core.Particle.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

pastel_flows.core.Particle.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k1841,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__1845 = k1841;
var G__1845__$1 = (((G__1845 instanceof cljs.core.Keyword))?G__1845.fqn:null);
switch (G__1845__$1) {
case "pos":
return self__.pos;

break;
case "t":
return self__.t;

break;
case "trail":
return self__.trail;

break;
case "alive":
return self__.alive;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k1841,else__4388__auto__);

}
});

pastel_flows.core.Particle.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__1846){
var vec__1847 = p__1846;
var k__4408__auto__ = cljs.core.nth.call(null,vec__1847,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__1847,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

pastel_flows.core.Particle.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#pastel-flows.core.Particle{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"t","t",-1397832519),self__.t],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"trail","trail",-272340561),self__.trail],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"alive","alive",1424929930),self__.alive],null))], null),self__.__extmap));
});

pastel_flows.core.Particle.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__1840){
var self__ = this;
var G__1840__$1 = this;
return (new cljs.core.RecordIter((0),G__1840__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword(null,"trail","trail",-272340561),new cljs.core.Keyword(null,"alive","alive",1424929930)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

pastel_flows.core.Particle.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

pastel_flows.core.Particle.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new pastel_flows.core.Particle(self__.pos,self__.t,self__.trail,self__.alive,self__.__meta,self__.__extmap,self__.__hash));
});

pastel_flows.core.Particle.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

pastel_flows.core.Particle.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-521449192 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

pastel_flows.core.Particle.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this1842,other1843){
var self__ = this;
var this1842__$1 = this;
return (((!((other1843 == null)))) && ((this1842__$1.constructor === other1843.constructor)) && (cljs.core._EQ_.call(null,this1842__$1.pos,other1843.pos)) && (cljs.core._EQ_.call(null,this1842__$1.t,other1843.t)) && (cljs.core._EQ_.call(null,this1842__$1.trail,other1843.trail)) && (cljs.core._EQ_.call(null,this1842__$1.alive,other1843.alive)) && (cljs.core._EQ_.call(null,this1842__$1.__extmap,other1843.__extmap)));
});

pastel_flows.core.Particle.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"alive","alive",1424929930),null,new cljs.core.Keyword(null,"pos","pos",-864607220),null,new cljs.core.Keyword(null,"trail","trail",-272340561),null,new cljs.core.Keyword(null,"t","t",-1397832519),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new pastel_flows.core.Particle(self__.pos,self__.t,self__.trail,self__.alive,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

pastel_flows.core.Particle.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__1840){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__1850 = cljs.core.keyword_identical_QMARK_;
var expr__1851 = k__4393__auto__;
if(cljs.core.truth_(pred__1850.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220),expr__1851))){
return (new pastel_flows.core.Particle(G__1840,self__.t,self__.trail,self__.alive,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1850.call(null,new cljs.core.Keyword(null,"t","t",-1397832519),expr__1851))){
return (new pastel_flows.core.Particle(self__.pos,G__1840,self__.trail,self__.alive,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1850.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__1851))){
return (new pastel_flows.core.Particle(self__.pos,self__.t,G__1840,self__.alive,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1850.call(null,new cljs.core.Keyword(null,"alive","alive",1424929930),expr__1851))){
return (new pastel_flows.core.Particle(self__.pos,self__.t,self__.trail,G__1840,self__.__meta,self__.__extmap,null));
} else {
return (new pastel_flows.core.Particle(self__.pos,self__.t,self__.trail,self__.alive,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__1840),null));
}
}
}
}
});

pastel_flows.core.Particle.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"t","t",-1397832519),self__.t,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"trail","trail",-272340561),self__.trail,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"alive","alive",1424929930),self__.alive,null))], null),self__.__extmap));
});

pastel_flows.core.Particle.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__1840){
var self__ = this;
var this__4384__auto____$1 = this;
return (new pastel_flows.core.Particle(self__.pos,self__.t,self__.trail,self__.alive,G__1840,self__.__extmap,self__.__hash));
});

pastel_flows.core.Particle.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

pastel_flows.core.Particle.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pos","pos",775924307,null),new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"trail","trail",1368190966,null),new cljs.core.Symbol(null,"alive","alive",-1229505839,null)], null);
});

pastel_flows.core.Particle.cljs$lang$type = true;

pastel_flows.core.Particle.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"pastel-flows.core/Particle",null,(1),null));
});

pastel_flows.core.Particle.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"pastel-flows.core/Particle");
});

/**
 * Positional factory function for pastel-flows.core/Particle.
 */
pastel_flows.core.__GT_Particle = (function pastel_flows$core$__GT_Particle(pos,t,trail,alive){
return (new pastel_flows.core.Particle(pos,t,trail,alive,null,null,null));
});

/**
 * Factory function for pastel-flows.core/Particle, taking a map of keywords to field values.
 */
pastel_flows.core.map__GT_Particle = (function pastel_flows$core$map__GT_Particle(G__1844){
var extmap__4424__auto__ = (function (){var G__1853 = cljs.core.dissoc.call(null,G__1844,new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword(null,"trail","trail",-272340561),new cljs.core.Keyword(null,"alive","alive",1424929930));
if(cljs.core.record_QMARK_.call(null,G__1844)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__1853);
} else {
return G__1853;
}
})();
return (new pastel_flows.core.Particle(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(G__1844),new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(G__1844),new cljs.core.Keyword(null,"trail","trail",-272340561).cljs$core$IFn$_invoke$arity$1(G__1844),new cljs.core.Keyword(null,"alive","alive",1424929930).cljs$core$IFn$_invoke$arity$1(G__1844),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});

pastel_flows.core.create_particle = (function pastel_flows$core$create_particle(var_args){
var G__1856 = arguments.length;
switch (G__1856) {
case 3:
return pastel_flows.core.create_particle.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return pastel_flows.core.create_particle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

pastel_flows.core.create_particle.cljs$core$IFn$_invoke$arity$3 = (function (x,y,trail){
return pastel_flows.core.__GT_Particle.call(null,io.tronica.creative_core.vector.create_vector.call(null,x,y),quil.core.frame_count.call(null),trail,true);
});

pastel_flows.core.create_particle.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return pastel_flows.core.create_particle.call(null,x,y,cljs.core.PersistentVector.EMPTY);
});

pastel_flows.core.create_particle.cljs$lang$maxFixedArity = 3;

pastel_flows.core.particle_dead_QMARK_ = (function pastel_flows$core$particle_dead_QMARK_(p){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"alive","alive",1424929930).cljs$core$IFn$_invoke$arity$1(p));
});
pastel_flows.core.grid_idx = (function pastel_flows$core$grid_idx(x,y,cols){
return (x + (y * cols));
});
/**
 * Get an element from the grid using xy coordinates
 */
pastel_flows.core.grid_get = (function pastel_flows$core$grid_get(grid,x,y){
return io.tronica.creative_core.core.mget.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(grid),pastel_flows.core.grid_idx.call(null,x,y,new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(grid)));
});
/**
 * Sets an element in the grid using xy coordinates
 */
pastel_flows.core.grid_set_BANG_ = (function pastel_flows$core$grid_set_BANG_(grid,x,y,val){
return io.tronica.creative_core.core.mset_BANG_.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(grid),pastel_flows.core.grid_idx.call(null,x,y,new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(grid)),val);
});
/**
 * Given an x and a y, will compute a vector for the flow field
 */
pastel_flows.core.compute_vector = (function pastel_flows$core$compute_vector(x,y){
var noise = quil.core.noise.call(null,(x / pastel_flows.core.noise_scale),(y / pastel_flows.core.noise_scale));
var angle = (noise * quil.core.TWO_PI);
return io.tronica.creative_core.vector.create_vector.call(null,quil.core.cos.call(null,angle),quil.core.sin.call(null,angle));
});
/**
 * Goes through every x/y combination and assigns a vector to the location in the grid
 */
pastel_flows.core.init_vectors = (function pastel_flows$core$init_vectors(){
var seq__1858 = cljs.core.seq.call(null,cljs.core.range.call(null,pastel_flows.core.vector_grid_cols));
var chunk__1863 = null;
var count__1864 = (0);
var i__1865 = (0);
while(true){
if((i__1865 < count__1864)){
var x = cljs.core._nth.call(null,chunk__1863,i__1865);
var seq__1866_1870 = cljs.core.seq.call(null,cljs.core.range.call(null,pastel_flows.core.vector_grid_rows));
var chunk__1867_1871 = null;
var count__1868_1872 = (0);
var i__1869_1873 = (0);
while(true){
if((i__1869_1873 < count__1868_1872)){
var y_1874 = cljs.core._nth.call(null,chunk__1867_1871,i__1869_1873);
pastel_flows.core.grid_set_BANG_.call(null,pastel_flows.core.vector_grid,x,y_1874,pastel_flows.core.compute_vector.call(null,x,y_1874));


var G__1875 = seq__1866_1870;
var G__1876 = chunk__1867_1871;
var G__1877 = count__1868_1872;
var G__1878 = (i__1869_1873 + (1));
seq__1866_1870 = G__1875;
chunk__1867_1871 = G__1876;
count__1868_1872 = G__1877;
i__1869_1873 = G__1878;
continue;
} else {
var temp__5735__auto___1879 = cljs.core.seq.call(null,seq__1866_1870);
if(temp__5735__auto___1879){
var seq__1866_1880__$1 = temp__5735__auto___1879;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1866_1880__$1)){
var c__4550__auto___1881 = cljs.core.chunk_first.call(null,seq__1866_1880__$1);
var G__1882 = cljs.core.chunk_rest.call(null,seq__1866_1880__$1);
var G__1883 = c__4550__auto___1881;
var G__1884 = cljs.core.count.call(null,c__4550__auto___1881);
var G__1885 = (0);
seq__1866_1870 = G__1882;
chunk__1867_1871 = G__1883;
count__1868_1872 = G__1884;
i__1869_1873 = G__1885;
continue;
} else {
var y_1886 = cljs.core.first.call(null,seq__1866_1880__$1);
pastel_flows.core.grid_set_BANG_.call(null,pastel_flows.core.vector_grid,x,y_1886,pastel_flows.core.compute_vector.call(null,x,y_1886));


var G__1887 = cljs.core.next.call(null,seq__1866_1880__$1);
var G__1888 = null;
var G__1889 = (0);
var G__1890 = (0);
seq__1866_1870 = G__1887;
chunk__1867_1871 = G__1888;
count__1868_1872 = G__1889;
i__1869_1873 = G__1890;
continue;
}
} else {
}
}
break;
}

var G__1891 = seq__1858;
var G__1892 = chunk__1863;
var G__1893 = count__1864;
var G__1894 = (i__1865 + (1));
seq__1858 = G__1891;
chunk__1863 = G__1892;
count__1864 = G__1893;
i__1865 = G__1894;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__1858);
if(temp__5735__auto__){
var seq__1858__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1858__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__1858__$1);
var G__1895 = cljs.core.chunk_rest.call(null,seq__1858__$1);
var G__1896 = c__4550__auto__;
var G__1897 = cljs.core.count.call(null,c__4550__auto__);
var G__1898 = (0);
seq__1858 = G__1895;
chunk__1863 = G__1896;
count__1864 = G__1897;
i__1865 = G__1898;
continue;
} else {
var x = cljs.core.first.call(null,seq__1858__$1);
var seq__1859_1899 = cljs.core.seq.call(null,cljs.core.range.call(null,pastel_flows.core.vector_grid_rows));
var chunk__1860_1900 = null;
var count__1861_1901 = (0);
var i__1862_1902 = (0);
while(true){
if((i__1862_1902 < count__1861_1901)){
var y_1903 = cljs.core._nth.call(null,chunk__1860_1900,i__1862_1902);
pastel_flows.core.grid_set_BANG_.call(null,pastel_flows.core.vector_grid,x,y_1903,pastel_flows.core.compute_vector.call(null,x,y_1903));


var G__1904 = seq__1859_1899;
var G__1905 = chunk__1860_1900;
var G__1906 = count__1861_1901;
var G__1907 = (i__1862_1902 + (1));
seq__1859_1899 = G__1904;
chunk__1860_1900 = G__1905;
count__1861_1901 = G__1906;
i__1862_1902 = G__1907;
continue;
} else {
var temp__5735__auto___1908__$1 = cljs.core.seq.call(null,seq__1859_1899);
if(temp__5735__auto___1908__$1){
var seq__1859_1909__$1 = temp__5735__auto___1908__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1859_1909__$1)){
var c__4550__auto___1910 = cljs.core.chunk_first.call(null,seq__1859_1909__$1);
var G__1911 = cljs.core.chunk_rest.call(null,seq__1859_1909__$1);
var G__1912 = c__4550__auto___1910;
var G__1913 = cljs.core.count.call(null,c__4550__auto___1910);
var G__1914 = (0);
seq__1859_1899 = G__1911;
chunk__1860_1900 = G__1912;
count__1861_1901 = G__1913;
i__1862_1902 = G__1914;
continue;
} else {
var y_1915 = cljs.core.first.call(null,seq__1859_1909__$1);
pastel_flows.core.grid_set_BANG_.call(null,pastel_flows.core.vector_grid,x,y_1915,pastel_flows.core.compute_vector.call(null,x,y_1915));


var G__1916 = cljs.core.next.call(null,seq__1859_1909__$1);
var G__1917 = null;
var G__1918 = (0);
var G__1919 = (0);
seq__1859_1899 = G__1916;
chunk__1860_1900 = G__1917;
count__1861_1901 = G__1918;
i__1862_1902 = G__1919;
continue;
}
} else {
}
}
break;
}

var G__1920 = cljs.core.next.call(null,seq__1858__$1);
var G__1921 = null;
var G__1922 = (0);
var G__1923 = (0);
seq__1858 = G__1920;
chunk__1863 = G__1921;
count__1864 = G__1922;
i__1865 = G__1923;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given coordinates, find the vector that'll define their direction
 */
pastel_flows.core.closest_vector = (function pastel_flows$core$closest_vector(x,y){
var i = quil.core.floor.call(null,(x / pastel_flows.core.cell_size));
var j = quil.core.floor.call(null,(y / pastel_flows.core.cell_size));
return pastel_flows.core.grid_get.call(null,pastel_flows.core.vector_grid,i,j);
});
pastel_flows.core.draw_vectors = (function pastel_flows$core$draw_vectors(){
quil.core.stroke.call(null,(255),(50));

var seq__1924 = cljs.core.seq.call(null,cljs.core.range.call(null,pastel_flows.core.vector_grid_cols));
var chunk__1929 = null;
var count__1930 = (0);
var i__1931 = (0);
while(true){
if((i__1931 < count__1930)){
var x = cljs.core._nth.call(null,chunk__1929,i__1931);
var seq__1932_1936 = cljs.core.seq.call(null,cljs.core.range.call(null,pastel_flows.core.vector_grid_rows));
var chunk__1933_1937 = null;
var count__1934_1938 = (0);
var i__1935_1939 = (0);
while(true){
if((i__1935_1939 < count__1934_1938)){
var y_1940 = cljs.core._nth.call(null,chunk__1933_1937,i__1935_1939);
var vector_1941 = pastel_flows.core.grid_get.call(null,pastel_flows.core.vector_grid,x,y_1940);
var scaled_vector_1942 = io.tronica.creative_core.vector.scale.call(null,vector_1941,(5));
quil.core.push_matrix.call(null);

quil.core.translate.call(null,(x * pastel_flows.core.cell_size),(y_1940 * pastel_flows.core.cell_size));

quil.core.line.call(null,(0),(0),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(scaled_vector_1942),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(scaled_vector_1942));

quil.core.pop_matrix.call(null);


var G__1943 = seq__1932_1936;
var G__1944 = chunk__1933_1937;
var G__1945 = count__1934_1938;
var G__1946 = (i__1935_1939 + (1));
seq__1932_1936 = G__1943;
chunk__1933_1937 = G__1944;
count__1934_1938 = G__1945;
i__1935_1939 = G__1946;
continue;
} else {
var temp__5735__auto___1947 = cljs.core.seq.call(null,seq__1932_1936);
if(temp__5735__auto___1947){
var seq__1932_1948__$1 = temp__5735__auto___1947;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1932_1948__$1)){
var c__4550__auto___1949 = cljs.core.chunk_first.call(null,seq__1932_1948__$1);
var G__1950 = cljs.core.chunk_rest.call(null,seq__1932_1948__$1);
var G__1951 = c__4550__auto___1949;
var G__1952 = cljs.core.count.call(null,c__4550__auto___1949);
var G__1953 = (0);
seq__1932_1936 = G__1950;
chunk__1933_1937 = G__1951;
count__1934_1938 = G__1952;
i__1935_1939 = G__1953;
continue;
} else {
var y_1954 = cljs.core.first.call(null,seq__1932_1948__$1);
var vector_1955 = pastel_flows.core.grid_get.call(null,pastel_flows.core.vector_grid,x,y_1954);
var scaled_vector_1956 = io.tronica.creative_core.vector.scale.call(null,vector_1955,(5));
quil.core.push_matrix.call(null);

quil.core.translate.call(null,(x * pastel_flows.core.cell_size),(y_1954 * pastel_flows.core.cell_size));

quil.core.line.call(null,(0),(0),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(scaled_vector_1956),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(scaled_vector_1956));

quil.core.pop_matrix.call(null);


var G__1957 = cljs.core.next.call(null,seq__1932_1948__$1);
var G__1958 = null;
var G__1959 = (0);
var G__1960 = (0);
seq__1932_1936 = G__1957;
chunk__1933_1937 = G__1958;
count__1934_1938 = G__1959;
i__1935_1939 = G__1960;
continue;
}
} else {
}
}
break;
}

var G__1961 = seq__1924;
var G__1962 = chunk__1929;
var G__1963 = count__1930;
var G__1964 = (i__1931 + (1));
seq__1924 = G__1961;
chunk__1929 = G__1962;
count__1930 = G__1963;
i__1931 = G__1964;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__1924);
if(temp__5735__auto__){
var seq__1924__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1924__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__1924__$1);
var G__1965 = cljs.core.chunk_rest.call(null,seq__1924__$1);
var G__1966 = c__4550__auto__;
var G__1967 = cljs.core.count.call(null,c__4550__auto__);
var G__1968 = (0);
seq__1924 = G__1965;
chunk__1929 = G__1966;
count__1930 = G__1967;
i__1931 = G__1968;
continue;
} else {
var x = cljs.core.first.call(null,seq__1924__$1);
var seq__1925_1969 = cljs.core.seq.call(null,cljs.core.range.call(null,pastel_flows.core.vector_grid_rows));
var chunk__1926_1970 = null;
var count__1927_1971 = (0);
var i__1928_1972 = (0);
while(true){
if((i__1928_1972 < count__1927_1971)){
var y_1973 = cljs.core._nth.call(null,chunk__1926_1970,i__1928_1972);
var vector_1974 = pastel_flows.core.grid_get.call(null,pastel_flows.core.vector_grid,x,y_1973);
var scaled_vector_1975 = io.tronica.creative_core.vector.scale.call(null,vector_1974,(5));
quil.core.push_matrix.call(null);

quil.core.translate.call(null,(x * pastel_flows.core.cell_size),(y_1973 * pastel_flows.core.cell_size));

quil.core.line.call(null,(0),(0),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(scaled_vector_1975),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(scaled_vector_1975));

quil.core.pop_matrix.call(null);


var G__1976 = seq__1925_1969;
var G__1977 = chunk__1926_1970;
var G__1978 = count__1927_1971;
var G__1979 = (i__1928_1972 + (1));
seq__1925_1969 = G__1976;
chunk__1926_1970 = G__1977;
count__1927_1971 = G__1978;
i__1928_1972 = G__1979;
continue;
} else {
var temp__5735__auto___1980__$1 = cljs.core.seq.call(null,seq__1925_1969);
if(temp__5735__auto___1980__$1){
var seq__1925_1981__$1 = temp__5735__auto___1980__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1925_1981__$1)){
var c__4550__auto___1982 = cljs.core.chunk_first.call(null,seq__1925_1981__$1);
var G__1983 = cljs.core.chunk_rest.call(null,seq__1925_1981__$1);
var G__1984 = c__4550__auto___1982;
var G__1985 = cljs.core.count.call(null,c__4550__auto___1982);
var G__1986 = (0);
seq__1925_1969 = G__1983;
chunk__1926_1970 = G__1984;
count__1927_1971 = G__1985;
i__1928_1972 = G__1986;
continue;
} else {
var y_1987 = cljs.core.first.call(null,seq__1925_1981__$1);
var vector_1988 = pastel_flows.core.grid_get.call(null,pastel_flows.core.vector_grid,x,y_1987);
var scaled_vector_1989 = io.tronica.creative_core.vector.scale.call(null,vector_1988,(5));
quil.core.push_matrix.call(null);

quil.core.translate.call(null,(x * pastel_flows.core.cell_size),(y_1987 * pastel_flows.core.cell_size));

quil.core.line.call(null,(0),(0),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(scaled_vector_1989),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(scaled_vector_1989));

quil.core.pop_matrix.call(null);


var G__1990 = cljs.core.next.call(null,seq__1925_1981__$1);
var G__1991 = null;
var G__1992 = (0);
var G__1993 = (0);
seq__1925_1969 = G__1990;
chunk__1926_1970 = G__1991;
count__1927_1971 = G__1992;
i__1928_1972 = G__1993;
continue;
}
} else {
}
}
break;
}

var G__1994 = cljs.core.next.call(null,seq__1924__$1);
var G__1995 = null;
var G__1996 = (0);
var G__1997 = (0);
seq__1924 = G__1994;
chunk__1929 = G__1995;
count__1930 = G__1996;
i__1931 = G__1997;
continue;
}
} else {
return null;
}
}
break;
}
});
pastel_flows.core.draw_particles = (function pastel_flows$core$draw_particles(){
quil.core.no_fill.call(null);

quil.core.stroke_weight.call(null,pastel_flows.core.trail_weight);

var seq__1998 = cljs.core.seq.call(null,cljs.core.deref.call(null,pastel_flows.core.particles));
var chunk__1999 = null;
var count__2000 = (0);
var i__2001 = (0);
while(true){
if((i__2001 < count__2000)){
var p = cljs.core._nth.call(null,chunk__1999,i__2001);
if(cljs.core.truth_((function (){var and__4120__auto__ = p;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"alive","alive",1424929930).cljs$core$IFn$_invoke$arity$1(p));
} else {
return and__4120__auto__;
}
})())){
quil.core.stroke.call(null,pastel_flows.core.get_color.call(null,new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(p)));

quil.core.begin_shape.call(null);

var seq__2010_2018 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561).cljs$core$IFn$_invoke$arity$1(p));
var chunk__2011_2019 = null;
var count__2012_2020 = (0);
var i__2013_2021 = (0);
while(true){
if((i__2013_2021 < count__2012_2020)){
var pt_2022 = cljs.core._nth.call(null,chunk__2011_2019,i__2013_2021);
quil.core.curve_vertex.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pt_2022),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pt_2022));


var G__2023 = seq__2010_2018;
var G__2024 = chunk__2011_2019;
var G__2025 = count__2012_2020;
var G__2026 = (i__2013_2021 + (1));
seq__2010_2018 = G__2023;
chunk__2011_2019 = G__2024;
count__2012_2020 = G__2025;
i__2013_2021 = G__2026;
continue;
} else {
var temp__5735__auto___2027 = cljs.core.seq.call(null,seq__2010_2018);
if(temp__5735__auto___2027){
var seq__2010_2028__$1 = temp__5735__auto___2027;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2010_2028__$1)){
var c__4550__auto___2029 = cljs.core.chunk_first.call(null,seq__2010_2028__$1);
var G__2030 = cljs.core.chunk_rest.call(null,seq__2010_2028__$1);
var G__2031 = c__4550__auto___2029;
var G__2032 = cljs.core.count.call(null,c__4550__auto___2029);
var G__2033 = (0);
seq__2010_2018 = G__2030;
chunk__2011_2019 = G__2031;
count__2012_2020 = G__2032;
i__2013_2021 = G__2033;
continue;
} else {
var pt_2034 = cljs.core.first.call(null,seq__2010_2028__$1);
quil.core.curve_vertex.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pt_2034),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pt_2034));


var G__2035 = cljs.core.next.call(null,seq__2010_2028__$1);
var G__2036 = null;
var G__2037 = (0);
var G__2038 = (0);
seq__2010_2018 = G__2035;
chunk__2011_2019 = G__2036;
count__2012_2020 = G__2037;
i__2013_2021 = G__2038;
continue;
}
} else {
}
}
break;
}

quil.core.end_shape.call(null);
} else {
}


var G__2039 = seq__1998;
var G__2040 = chunk__1999;
var G__2041 = count__2000;
var G__2042 = (i__2001 + (1));
seq__1998 = G__2039;
chunk__1999 = G__2040;
count__2000 = G__2041;
i__2001 = G__2042;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__1998);
if(temp__5735__auto__){
var seq__1998__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1998__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__1998__$1);
var G__2043 = cljs.core.chunk_rest.call(null,seq__1998__$1);
var G__2044 = c__4550__auto__;
var G__2045 = cljs.core.count.call(null,c__4550__auto__);
var G__2046 = (0);
seq__1998 = G__2043;
chunk__1999 = G__2044;
count__2000 = G__2045;
i__2001 = G__2046;
continue;
} else {
var p = cljs.core.first.call(null,seq__1998__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = p;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"alive","alive",1424929930).cljs$core$IFn$_invoke$arity$1(p));
} else {
return and__4120__auto__;
}
})())){
quil.core.stroke.call(null,pastel_flows.core.get_color.call(null,new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(p)));

quil.core.begin_shape.call(null);

var seq__2014_2047 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561).cljs$core$IFn$_invoke$arity$1(p));
var chunk__2015_2048 = null;
var count__2016_2049 = (0);
var i__2017_2050 = (0);
while(true){
if((i__2017_2050 < count__2016_2049)){
var pt_2051 = cljs.core._nth.call(null,chunk__2015_2048,i__2017_2050);
quil.core.curve_vertex.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pt_2051),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pt_2051));


var G__2052 = seq__2014_2047;
var G__2053 = chunk__2015_2048;
var G__2054 = count__2016_2049;
var G__2055 = (i__2017_2050 + (1));
seq__2014_2047 = G__2052;
chunk__2015_2048 = G__2053;
count__2016_2049 = G__2054;
i__2017_2050 = G__2055;
continue;
} else {
var temp__5735__auto___2056__$1 = cljs.core.seq.call(null,seq__2014_2047);
if(temp__5735__auto___2056__$1){
var seq__2014_2057__$1 = temp__5735__auto___2056__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2014_2057__$1)){
var c__4550__auto___2058 = cljs.core.chunk_first.call(null,seq__2014_2057__$1);
var G__2059 = cljs.core.chunk_rest.call(null,seq__2014_2057__$1);
var G__2060 = c__4550__auto___2058;
var G__2061 = cljs.core.count.call(null,c__4550__auto___2058);
var G__2062 = (0);
seq__2014_2047 = G__2059;
chunk__2015_2048 = G__2060;
count__2016_2049 = G__2061;
i__2017_2050 = G__2062;
continue;
} else {
var pt_2063 = cljs.core.first.call(null,seq__2014_2057__$1);
quil.core.curve_vertex.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pt_2063),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pt_2063));


var G__2064 = cljs.core.next.call(null,seq__2014_2057__$1);
var G__2065 = null;
var G__2066 = (0);
var G__2067 = (0);
seq__2014_2047 = G__2064;
chunk__2015_2048 = G__2065;
count__2016_2049 = G__2066;
i__2017_2050 = G__2067;
continue;
}
} else {
}
}
break;
}

quil.core.end_shape.call(null);
} else {
}


var G__2068 = cljs.core.next.call(null,seq__1998__$1);
var G__2069 = null;
var G__2070 = (0);
var G__2071 = (0);
seq__1998 = G__2068;
chunk__1999 = G__2069;
count__2000 = G__2070;
i__2001 = G__2071;
continue;
}
} else {
return null;
}
}
break;
}
});
pastel_flows.core.collision_QMARK_ = (function pastel_flows$core$collision_QMARK_(p,other){
if((other instanceof pastel_flows.core.Particle)){
var and__4120__auto__ = cljs.core.not_EQ_.call(null,p,other);
if(and__4120__auto__){
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (and__4120__auto__){
return (function (p1__2072_SHARP_){
return pastel_flows.core.collision_QMARK_.call(null,p,p1__2072_SHARP_);
});})(and__4120__auto__))
,new cljs.core.Keyword(null,"trail","trail",-272340561).cljs$core$IFn$_invoke$arity$1(other)));
} else {
return and__4120__auto__;
}
} else {
if((other instanceof io.tronica.creative_core.vector.Vector3D)){
return pastel_flows.core.circles_intersect_QMARK_.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(p),pastel_flows.core.collision_radius,other,pastel_flows.core.collision_radius);
} else {
if(cljs.core.vector_QMARK_.call(null,other)){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__2073_SHARP_){
return pastel_flows.core.collision_QMARK_.call(null,p,p1__2073_SHARP_);
}),other));
} else {
return false;

}
}
}
});
