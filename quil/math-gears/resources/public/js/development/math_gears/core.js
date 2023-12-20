// Compiled by ClojureScript 1.10.520 {}
goog.provide('math_gears.core');
goog.require('cljs.core');
goog.require('quil.core');

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
math_gears.core.Point = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
math_gears.core.Point.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

math_gears.core.Point.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k87085,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__87089 = k87085;
var G__87089__$1 = (((G__87089 instanceof cljs.core.Keyword))?G__87089.fqn:null);
switch (G__87089__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k87085,else__4388__auto__);

}
});

math_gears.core.Point.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__87090){
var vec__87091 = p__87090;
var k__4408__auto__ = cljs.core.nth.call(null,vec__87091,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__87091,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

math_gears.core.Point.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#math-gears.core.Point{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

math_gears.core.Point.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__87084){
var self__ = this;
var G__87084__$1 = this;
return (new cljs.core.RecordIter((0),G__87084__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

math_gears.core.Point.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

math_gears.core.Point.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new math_gears.core.Point(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

math_gears.core.Point.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

math_gears.core.Point.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (1438100964 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

math_gears.core.Point.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this87086,other87087){
var self__ = this;
var this87086__$1 = this;
return (((!((other87087 == null)))) && ((this87086__$1.constructor === other87087.constructor)) && (cljs.core._EQ_.call(null,this87086__$1.x,other87087.x)) && (cljs.core._EQ_.call(null,this87086__$1.y,other87087.y)) && (cljs.core._EQ_.call(null,this87086__$1.__extmap,other87087.__extmap)));
});

math_gears.core.Point.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new math_gears.core.Point(self__.x,self__.y,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

math_gears.core.Point.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__87084){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__87094 = cljs.core.keyword_identical_QMARK_;
var expr__87095 = k__4393__auto__;
if(cljs.core.truth_(pred__87094.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__87095))){
return (new math_gears.core.Point(G__87084,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__87094.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__87095))){
return (new math_gears.core.Point(self__.x,G__87084,self__.__meta,self__.__extmap,null));
} else {
return (new math_gears.core.Point(self__.x,self__.y,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__87084),null));
}
}
});

math_gears.core.Point.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

math_gears.core.Point.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__87084){
var self__ = this;
var this__4384__auto____$1 = this;
return (new math_gears.core.Point(self__.x,self__.y,G__87084,self__.__extmap,self__.__hash));
});

math_gears.core.Point.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

math_gears.core.Point.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

math_gears.core.Point.cljs$lang$type = true;

math_gears.core.Point.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"math-gears.core/Point",null,(1),null));
});

math_gears.core.Point.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"math-gears.core/Point");
});

/**
 * Positional factory function for math-gears.core/Point.
 */
math_gears.core.__GT_Point = (function math_gears$core$__GT_Point(x,y){
return (new math_gears.core.Point(x,y,null,null,null));
});

/**
 * Factory function for math-gears.core/Point, taking a map of keywords to field values.
 */
math_gears.core.map__GT_Point = (function math_gears$core$map__GT_Point(G__87088){
var extmap__4424__auto__ = (function (){var G__87097 = cljs.core.dissoc.call(null,G__87088,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776));
if(cljs.core.record_QMARK_.call(null,G__87088)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__87097);
} else {
return G__87097;
}
})();
return (new math_gears.core.Point(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__87088),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__87088),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
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
math_gears.core.Gear = (function (x,y,radius,diameter,angle,angle_step,ctrl_point,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.radius = radius;
this.diameter = diameter;
this.angle = angle;
this.angle_step = angle_step;
this.ctrl_point = ctrl_point;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
math_gears.core.Gear.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

math_gears.core.Gear.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k87100,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__87104 = k87100;
var G__87104__$1 = (((G__87104 instanceof cljs.core.Keyword))?G__87104.fqn:null);
switch (G__87104__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
case "radius":
return self__.radius;

break;
case "diameter":
return self__.diameter;

break;
case "angle":
return self__.angle;

break;
case "angle-step":
return self__.angle_step;

break;
case "ctrl-point":
return self__.ctrl_point;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k87100,else__4388__auto__);

}
});

math_gears.core.Gear.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__87105){
var vec__87106 = p__87105;
var k__4408__auto__ = cljs.core.nth.call(null,vec__87106,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__87106,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

math_gears.core.Gear.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#math-gears.core.Gear{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"radius","radius",-2073122258),self__.radius],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"diameter","diameter",1560913323),self__.diameter],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"angle","angle",1622094254),self__.angle],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"angle-step","angle-step",1369583146),self__.angle_step],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ctrl-point","ctrl-point",-1570009400),self__.ctrl_point],null))], null),self__.__extmap));
});

math_gears.core.Gear.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__87099){
var self__ = this;
var G__87099__$1 = this;
return (new cljs.core.RecordIter((0),G__87099__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Keyword(null,"diameter","diameter",1560913323),new cljs.core.Keyword(null,"angle","angle",1622094254),new cljs.core.Keyword(null,"angle-step","angle-step",1369583146),new cljs.core.Keyword(null,"ctrl-point","ctrl-point",-1570009400)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

math_gears.core.Gear.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

math_gears.core.Gear.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new math_gears.core.Gear(self__.x,self__.y,self__.radius,self__.diameter,self__.angle,self__.angle_step,self__.ctrl_point,self__.__meta,self__.__extmap,self__.__hash));
});

math_gears.core.Gear.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});

math_gears.core.Gear.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1408418554 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

math_gears.core.Gear.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this87101,other87102){
var self__ = this;
var this87101__$1 = this;
return (((!((other87102 == null)))) && ((this87101__$1.constructor === other87102.constructor)) && (cljs.core._EQ_.call(null,this87101__$1.x,other87102.x)) && (cljs.core._EQ_.call(null,this87101__$1.y,other87102.y)) && (cljs.core._EQ_.call(null,this87101__$1.radius,other87102.radius)) && (cljs.core._EQ_.call(null,this87101__$1.diameter,other87102.diameter)) && (cljs.core._EQ_.call(null,this87101__$1.angle,other87102.angle)) && (cljs.core._EQ_.call(null,this87101__$1.angle_step,other87102.angle_step)) && (cljs.core._EQ_.call(null,this87101__$1.ctrl_point,other87102.ctrl_point)) && (cljs.core._EQ_.call(null,this87101__$1.__extmap,other87102.__extmap)));
});

math_gears.core.Gear.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"ctrl-point","ctrl-point",-1570009400),null,new cljs.core.Keyword(null,"angle-step","angle-step",1369583146),null,new cljs.core.Keyword(null,"diameter","diameter",1560913323),null,new cljs.core.Keyword(null,"angle","angle",1622094254),null,new cljs.core.Keyword(null,"radius","radius",-2073122258),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new math_gears.core.Gear(self__.x,self__.y,self__.radius,self__.diameter,self__.angle,self__.angle_step,self__.ctrl_point,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

math_gears.core.Gear.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__87099){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__87109 = cljs.core.keyword_identical_QMARK_;
var expr__87110 = k__4393__auto__;
if(cljs.core.truth_(pred__87109.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__87110))){
return (new math_gears.core.Gear(G__87099,self__.y,self__.radius,self__.diameter,self__.angle,self__.angle_step,self__.ctrl_point,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__87109.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__87110))){
return (new math_gears.core.Gear(self__.x,G__87099,self__.radius,self__.diameter,self__.angle,self__.angle_step,self__.ctrl_point,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__87109.call(null,new cljs.core.Keyword(null,"radius","radius",-2073122258),expr__87110))){
return (new math_gears.core.Gear(self__.x,self__.y,G__87099,self__.diameter,self__.angle,self__.angle_step,self__.ctrl_point,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__87109.call(null,new cljs.core.Keyword(null,"diameter","diameter",1560913323),expr__87110))){
return (new math_gears.core.Gear(self__.x,self__.y,self__.radius,G__87099,self__.angle,self__.angle_step,self__.ctrl_point,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__87109.call(null,new cljs.core.Keyword(null,"angle","angle",1622094254),expr__87110))){
return (new math_gears.core.Gear(self__.x,self__.y,self__.radius,self__.diameter,G__87099,self__.angle_step,self__.ctrl_point,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__87109.call(null,new cljs.core.Keyword(null,"angle-step","angle-step",1369583146),expr__87110))){
return (new math_gears.core.Gear(self__.x,self__.y,self__.radius,self__.diameter,self__.angle,G__87099,self__.ctrl_point,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__87109.call(null,new cljs.core.Keyword(null,"ctrl-point","ctrl-point",-1570009400),expr__87110))){
return (new math_gears.core.Gear(self__.x,self__.y,self__.radius,self__.diameter,self__.angle,self__.angle_step,G__87099,self__.__meta,self__.__extmap,null));
} else {
return (new math_gears.core.Gear(self__.x,self__.y,self__.radius,self__.diameter,self__.angle,self__.angle_step,self__.ctrl_point,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__87099),null));
}
}
}
}
}
}
}
});

math_gears.core.Gear.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"radius","radius",-2073122258),self__.radius,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"diameter","diameter",1560913323),self__.diameter,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"angle","angle",1622094254),self__.angle,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"angle-step","angle-step",1369583146),self__.angle_step,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ctrl-point","ctrl-point",-1570009400),self__.ctrl_point,null))], null),self__.__extmap));
});

math_gears.core.Gear.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__87099){
var self__ = this;
var this__4384__auto____$1 = this;
return (new math_gears.core.Gear(self__.x,self__.y,self__.radius,self__.diameter,self__.angle,self__.angle_step,self__.ctrl_point,G__87099,self__.__extmap,self__.__hash));
});

math_gears.core.Gear.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

math_gears.core.Gear.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"radius","radius",-432590731,null),new cljs.core.Symbol(null,"diameter","diameter",-1093522446,null),new cljs.core.Symbol(null,"angle","angle",-1032341515,null),new cljs.core.Symbol(null,"angle-step","angle-step",-1284852623,null),new cljs.core.Symbol(null,"ctrl-point","ctrl-point",70522127,null)], null);
});

math_gears.core.Gear.cljs$lang$type = true;

math_gears.core.Gear.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"math-gears.core/Gear",null,(1),null));
});

math_gears.core.Gear.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"math-gears.core/Gear");
});

/**
 * Positional factory function for math-gears.core/Gear.
 */
math_gears.core.__GT_Gear = (function math_gears$core$__GT_Gear(x,y,radius,diameter,angle,angle_step,ctrl_point){
return (new math_gears.core.Gear(x,y,radius,diameter,angle,angle_step,ctrl_point,null,null,null));
});

/**
 * Factory function for math-gears.core/Gear, taking a map of keywords to field values.
 */
math_gears.core.map__GT_Gear = (function math_gears$core$map__GT_Gear(G__87103){
var extmap__4424__auto__ = (function (){var G__87112 = cljs.core.dissoc.call(null,G__87103,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Keyword(null,"diameter","diameter",1560913323),new cljs.core.Keyword(null,"angle","angle",1622094254),new cljs.core.Keyword(null,"angle-step","angle-step",1369583146),new cljs.core.Keyword(null,"ctrl-point","ctrl-point",-1570009400));
if(cljs.core.record_QMARK_.call(null,G__87103)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__87112);
} else {
return G__87112;
}
})();
return (new math_gears.core.Gear(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__87103),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__87103),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(G__87103),new cljs.core.Keyword(null,"diameter","diameter",1560913323).cljs$core$IFn$_invoke$arity$1(G__87103),new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(G__87103),new cljs.core.Keyword(null,"angle-step","angle-step",1369583146).cljs$core$IFn$_invoke$arity$1(G__87103),new cljs.core.Keyword(null,"ctrl-point","ctrl-point",-1570009400).cljs$core$IFn$_invoke$arity$1(G__87103),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
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
math_gears.core.Shape = (function (i,j,points,__meta,__extmap,__hash){
this.i = i;
this.j = j;
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
math_gears.core.Shape.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

math_gears.core.Shape.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k87115,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__87119 = k87115;
var G__87119__$1 = (((G__87119 instanceof cljs.core.Keyword))?G__87119.fqn:null);
switch (G__87119__$1) {
case "i":
return self__.i;

break;
case "j":
return self__.j;

break;
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k87115,else__4388__auto__);

}
});

math_gears.core.Shape.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__87120){
var vec__87121 = p__87120;
var k__4408__auto__ = cljs.core.nth.call(null,vec__87121,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__87121,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

math_gears.core.Shape.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#math-gears.core.Shape{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"i","i",-1386841315),self__.i],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"j","j",-1397974765),self__.j],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

math_gears.core.Shape.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__87114){
var self__ = this;
var G__87114__$1 = this;
return (new cljs.core.RecordIter((0),G__87114__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"j","j",-1397974765),new cljs.core.Keyword(null,"points","points",-1486596883)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

math_gears.core.Shape.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

math_gears.core.Shape.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new math_gears.core.Shape(self__.i,self__.j,self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

math_gears.core.Shape.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

math_gears.core.Shape.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (270860791 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

math_gears.core.Shape.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this87116,other87117){
var self__ = this;
var this87116__$1 = this;
return (((!((other87117 == null)))) && ((this87116__$1.constructor === other87117.constructor)) && (cljs.core._EQ_.call(null,this87116__$1.i,other87117.i)) && (cljs.core._EQ_.call(null,this87116__$1.j,other87117.j)) && (cljs.core._EQ_.call(null,this87116__$1.points,other87117.points)) && (cljs.core._EQ_.call(null,this87116__$1.__extmap,other87117.__extmap)));
});

math_gears.core.Shape.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"points","points",-1486596883),null,new cljs.core.Keyword(null,"j","j",-1397974765),null,new cljs.core.Keyword(null,"i","i",-1386841315),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new math_gears.core.Shape(self__.i,self__.j,self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

math_gears.core.Shape.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__87114){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__87124 = cljs.core.keyword_identical_QMARK_;
var expr__87125 = k__4393__auto__;
if(cljs.core.truth_(pred__87124.call(null,new cljs.core.Keyword(null,"i","i",-1386841315),expr__87125))){
return (new math_gears.core.Shape(G__87114,self__.j,self__.points,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__87124.call(null,new cljs.core.Keyword(null,"j","j",-1397974765),expr__87125))){
return (new math_gears.core.Shape(self__.i,G__87114,self__.points,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__87124.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__87125))){
return (new math_gears.core.Shape(self__.i,self__.j,G__87114,self__.__meta,self__.__extmap,null));
} else {
return (new math_gears.core.Shape(self__.i,self__.j,self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__87114),null));
}
}
}
});

math_gears.core.Shape.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"i","i",-1386841315),self__.i,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"j","j",-1397974765),self__.j,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"points","points",-1486596883),self__.points,null))], null),self__.__extmap));
});

math_gears.core.Shape.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__87114){
var self__ = this;
var this__4384__auto____$1 = this;
return (new math_gears.core.Shape(self__.i,self__.j,self__.points,G__87114,self__.__extmap,self__.__hash));
});

math_gears.core.Shape.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

math_gears.core.Shape.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"j","j",242556762,null),new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

math_gears.core.Shape.cljs$lang$type = true;

math_gears.core.Shape.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"math-gears.core/Shape",null,(1),null));
});

math_gears.core.Shape.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"math-gears.core/Shape");
});

/**
 * Positional factory function for math-gears.core/Shape.
 */
math_gears.core.__GT_Shape = (function math_gears$core$__GT_Shape(i,j,points){
return (new math_gears.core.Shape(i,j,points,null,null,null));
});

/**
 * Factory function for math-gears.core/Shape, taking a map of keywords to field values.
 */
math_gears.core.map__GT_Shape = (function math_gears$core$map__GT_Shape(G__87118){
var extmap__4424__auto__ = (function (){var G__87127 = cljs.core.dissoc.call(null,G__87118,new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"j","j",-1397974765),new cljs.core.Keyword(null,"points","points",-1486596883));
if(cljs.core.record_QMARK_.call(null,G__87118)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__87127);
} else {
return G__87127;
}
})();
return (new math_gears.core.Shape(new cljs.core.Keyword(null,"i","i",-1386841315).cljs$core$IFn$_invoke$arity$1(G__87118),new cljs.core.Keyword(null,"j","j",-1397974765).cljs$core$IFn$_invoke$arity$1(G__87118),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__87118),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});

math_gears.core.recording_enabled = false;
math_gears.core.canvas_size = (800);
math_gears.core.w = math_gears.core.canvas_size;
math_gears.core.h = math_gears.core.canvas_size;
math_gears.core.gear_count = (7);
math_gears.core.rotation_speed = 0.0125;
math_gears.core.gear_size = (math_gears.core.canvas_size / (math_gears.core.gear_count + (1)));
math_gears.core.gear_diameter = (math_gears.core.gear_size * 0.8);
math_gears.core.gear_radius = (math_gears.core.gear_diameter / (2));
math_gears.core.stroke_buffer = (new cljs.core.Delay((function (){
return quil.core.create_graphics.call(null,math_gears.core.w,math_gears.core.h);
}),null));
math_gears.core.get_shape = cljs.core.memoize.call(null,(function (i,j){
return math_gears.core.__GT_Shape.call(null,i,j,cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY));
}));
math_gears.core.background_color = (new cljs.core.Delay((function (){
return quil.core.color.call(null,"#000000");
}),null));
math_gears.core.gear_color = (new cljs.core.Delay((function (){
return quil.core.color.call(null,"#ffcdb2");
}),null));
math_gears.core.shape_stroke_colors = (new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.core.color.call(null,"#ffb4a2"),quil.core.color.call(null,"#e5989b"),quil.core.color.call(null,"#b5838d"),quil.core.color.call(null,"#ffffff")], null);
}),null));
/**
 * Small circle helper
 */
math_gears.core.circle = (function math_gears$core$circle(x,y,r){
return quil.core.ellipse.call(null,x,y,r,r);
});
/**
 * If a gear has rotated enough times, we deem it done
 */
math_gears.core.rotation_done_QMARK_ = (function math_gears$core$rotation_done_QMARK_(gear){
return (new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(gear) > ((6) * quil.core.TWO_PI));
});
/**
 * Converts and angle and radius to xy coordinates
 */
math_gears.core.polar_to_cartesian = (function math_gears$core$polar_to_cartesian(r,theta){
var x = (r * Math.cos(theta));
var y = (r * Math.sin(theta));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});
/**
 * Adds a point to the shape
 */
math_gears.core.inc_shape_BANG_ = (function math_gears$core$inc_shape_BANG_(shape,x,y){
return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(shape),(function (p1__87129_SHARP_){
return cljs.core.conj.call(null,p1__87129_SHARP_,math_gears.core.__GT_Point.call(null,x,y));
}));
});
/**
 * Finds the control point based on the angle of the gear
 */
math_gears.core.compute_gear_ctrl_point = (function math_gears$core$compute_gear_ctrl_point(gearx,geary,radius,angle){
var vec__87130 = math_gears.core.polar_to_cartesian.call(null,radius,angle);
var x = cljs.core.nth.call(null,vec__87130,(0),null);
var y = cljs.core.nth.call(null,vec__87130,(1),null);
return math_gears.core.__GT_Point.call(null,(x + gearx),(y + geary));
});
/**
 * Bumps the angle of a gear and recomputes the control point. To be used with swap!
 */
math_gears.core.inc_angle_BANG_ = (function math_gears$core$inc_angle_BANG_(gear){
var rec = gear;
var rec__$1 = cljs.core.assoc.call(null,rec,new cljs.core.Keyword(null,"angle","angle",1622094254),(new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(rec) + new cljs.core.Keyword(null,"angle-step","angle-step",1369583146).cljs$core$IFn$_invoke$arity$1(rec)));
return cljs.core.assoc.call(null,rec__$1,new cljs.core.Keyword(null,"ctrl-point","ctrl-point",-1570009400),math_gears.core.compute_gear_ctrl_point.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(rec__$1),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(rec__$1),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(rec__$1),new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(rec__$1)));
});
/**
 * Creates a new gear record
 */
math_gears.core.new_gear = (function math_gears$core$new_gear(x,y,n){
return cljs.core.atom.call(null,math_gears.core.__GT_Gear.call(null,x,y,math_gears.core.gear_radius,math_gears.core.gear_diameter,(- (quil.core.PI / (2))),(n * math_gears.core.rotation_speed),math_gears.core.compute_gear_ctrl_point.call(null,x,y,math_gears.core.gear_radius,(0))));
});
math_gears.core.draw_shape = (function math_gears$core$draw_shape(shape){
quil.core.push_style.call(null);

quil.core.stroke_weight.call(null,(2));

quil.core.begin_shape.call(null);

quil.core.no_fill.call(null);

quil.core.stroke.call(null,cljs.core.nth.call(null,cljs.core.deref.call(null,math_gears.core.shape_stroke_colors),cljs.core.mod.call(null,new cljs.core.Keyword(null,"i","i",-1386841315).cljs$core$IFn$_invoke$arity$1(shape),cljs.core.count.call(null,cljs.core.deref.call(null,math_gears.core.shape_stroke_colors)))));

var seq__87133_87137 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(shape)));
var chunk__87134_87138 = null;
var count__87135_87139 = (0);
var i__87136_87140 = (0);
while(true){
if((i__87136_87140 < count__87135_87139)){
var pt_87141 = cljs.core._nth.call(null,chunk__87134_87138,i__87136_87140);
quil.core.curve_vertex.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pt_87141),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pt_87141));


var G__87142 = seq__87133_87137;
var G__87143 = chunk__87134_87138;
var G__87144 = count__87135_87139;
var G__87145 = (i__87136_87140 + (1));
seq__87133_87137 = G__87142;
chunk__87134_87138 = G__87143;
count__87135_87139 = G__87144;
i__87136_87140 = G__87145;
continue;
} else {
var temp__5735__auto___87146 = cljs.core.seq.call(null,seq__87133_87137);
if(temp__5735__auto___87146){
var seq__87133_87147__$1 = temp__5735__auto___87146;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__87133_87147__$1)){
var c__4550__auto___87148 = cljs.core.chunk_first.call(null,seq__87133_87147__$1);
var G__87149 = cljs.core.chunk_rest.call(null,seq__87133_87147__$1);
var G__87150 = c__4550__auto___87148;
var G__87151 = cljs.core.count.call(null,c__4550__auto___87148);
var G__87152 = (0);
seq__87133_87137 = G__87149;
chunk__87134_87138 = G__87150;
count__87135_87139 = G__87151;
i__87136_87140 = G__87152;
continue;
} else {
var pt_87153 = cljs.core.first.call(null,seq__87133_87147__$1);
quil.core.curve_vertex.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pt_87153),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pt_87153));


var G__87154 = cljs.core.next.call(null,seq__87133_87147__$1);
var G__87155 = null;
var G__87156 = (0);
var G__87157 = (0);
seq__87133_87137 = G__87154;
chunk__87134_87138 = G__87155;
count__87135_87139 = G__87156;
i__87136_87140 = G__87157;
continue;
}
} else {
}
}
break;
}

quil.core.end_shape.call(null);

return quil.core.pop_style.call(null);
});
math_gears.core.draw_cross = (function math_gears$core$draw_cross(x,y){
quil.core.push_style.call(null);

quil.core.stroke_weight.call(null,(2));

quil.core.stroke.call(null,(255));

var size_87158 = (math_gears.core.gear_size / (20));
quil.core.line.call(null,x,(y - size_87158),x,(y + size_87158));

quil.core.line.call(null,(x - size_87158),y,(x + size_87158),y);

return quil.core.pop_style.call(null);
});
math_gears.core.draw_gear = (function math_gears$core$draw_gear(gear,guideline_type){
quil.core.push_style.call(null);

quil.core.no_fill.call(null);

quil.core.stroke.call(null,cljs.core.deref.call(null,math_gears.core.gear_color));

cljs.core.swap_BANG_.call(null,gear,math_gears.core.inc_angle_BANG_);

math_gears.core.circle.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gear)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gear)),new cljs.core.Keyword(null,"diameter","diameter",1560913323).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gear)));

var vec__87159_87162 = math_gears.core.polar_to_cartesian.call(null,new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gear)),new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gear)));
var x_87163 = cljs.core.nth.call(null,vec__87159_87162,(0),null);
var y_87164 = cljs.core.nth.call(null,vec__87159_87162,(1),null);
quil.core.stroke.call(null,(255),(100));

quil.core.line.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gear)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gear)),(x_87163 + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gear))),(y_87164 + new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gear))));

quil.core.stroke_weight.call(null,(6));

quil.core.stroke.call(null,(255));

quil.core.point.call(null,(x_87163 + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gear))),(y_87164 + new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gear))));

quil.core.stroke_weight.call(null,(1));

if(cljs.core._EQ_.call(null,guideline_type,new cljs.core.Keyword(null,"vertical","vertical",718696748))){
quil.core.line.call(null,(x_87163 + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gear))),(0),(x_87163 + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gear))),((y_87164 + math_gears.core.h) + new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gear))));
} else {
if(cljs.core._EQ_.call(null,guideline_type,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475))){
quil.core.line.call(null,(0),(y_87164 + new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gear))),((x_87163 + math_gears.core.w) + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gear))),(y_87164 + new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gear))));
} else {
}
}

return quil.core.pop_style.call(null);
});
math_gears.core.xgears = cljs.core.mapv.call(null,(function (p1__87165_SHARP_){
return math_gears.core.new_gear.call(null,((p1__87165_SHARP_ * math_gears.core.gear_size) + (math_gears.core.gear_size * 1.5)),(math_gears.core.gear_size / (2)),((1) + p1__87165_SHARP_));
}),cljs.core.range.call(null,math_gears.core.gear_count));
math_gears.core.ygears = cljs.core.mapv.call(null,(function (p1__87166_SHARP_){
return math_gears.core.new_gear.call(null,(math_gears.core.gear_size / (2)),((p1__87166_SHARP_ * math_gears.core.gear_size) + (math_gears.core.gear_size * 1.5)),((1) + p1__87166_SHARP_));
}),cljs.core.range.call(null,math_gears.core.gear_count));
math_gears.core.init_canvas_capture = (function math_gears$core$init_canvas_capture(){
if(math_gears.core.recording_enabled){
var canvas_element = document.getElementById("defaultCanvas0");
var options = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"showRecDot","showRecDot",2034283658),true], null));
return CanvasCaptureLib.CanvasCapture.init(canvas_element,options);
} else {
return null;
}
});
math_gears.core.begin_video_record = (function math_gears$core$begin_video_record(){
if(math_gears.core.recording_enabled){
return CanvasCaptureLib.CanvasCapture.beginVideoRecord(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"format","format",-1306924766),CanvasCaptureLib.CanvasCapture.WEBM], null)));
} else {
return null;
}
});
math_gears.core.is_recording = (function math_gears$core$is_recording(){
return CanvasCaptureLib.CanvasCapture.isRecording();
});
math_gears.core.end_recording = (function math_gears$core$end_recording(){
return CanvasCaptureLib.CanvasCapture.stopRecord();
});
math_gears.core.record_frame = (function math_gears$core$record_frame(){
if(cljs.core._EQ_.call(null,quil.core.frame_count.call(null),(1000))){
math_gears.core.end_recording.call(null);
} else {
}

if(cljs.core.truth_(math_gears.core.is_recording.call(null))){
return CanvasCaptureLib.CanvasCapture.recordFrame();
} else {
return null;
}
});
math_gears.core.setup = (function math_gears$core$setup(){
math_gears.core.init_canvas_capture.call(null);

math_gears.core.begin_video_record.call(null);

quil.core.pixel_density.call(null,(2));

quil.core.smooth.call(null);

return quil.core.frame_rate.call(null,(60));
});
math_gears.core.draw = (function math_gears$core$draw(){
math_gears.core.record_frame.call(null);

quil.core.background.call(null,cljs.core.deref.call(null,math_gears.core.background_color));

quil.core.image.call(null,cljs.core.deref.call(null,math_gears.core.stroke_buffer),(0),(0));

var seq__87167_87219 = cljs.core.seq.call(null,math_gears.core.xgears);
var chunk__87168_87220 = null;
var count__87169_87221 = (0);
var i__87170_87222 = (0);
while(true){
if((i__87170_87222 < count__87169_87221)){
var gear_87223 = cljs.core._nth.call(null,chunk__87168_87220,i__87170_87222);
math_gears.core.draw_gear.call(null,gear_87223,new cljs.core.Keyword(null,"vertical","vertical",718696748));


var G__87224 = seq__87167_87219;
var G__87225 = chunk__87168_87220;
var G__87226 = count__87169_87221;
var G__87227 = (i__87170_87222 + (1));
seq__87167_87219 = G__87224;
chunk__87168_87220 = G__87225;
count__87169_87221 = G__87226;
i__87170_87222 = G__87227;
continue;
} else {
var temp__5735__auto___87228 = cljs.core.seq.call(null,seq__87167_87219);
if(temp__5735__auto___87228){
var seq__87167_87229__$1 = temp__5735__auto___87228;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__87167_87229__$1)){
var c__4550__auto___87230 = cljs.core.chunk_first.call(null,seq__87167_87229__$1);
var G__87231 = cljs.core.chunk_rest.call(null,seq__87167_87229__$1);
var G__87232 = c__4550__auto___87230;
var G__87233 = cljs.core.count.call(null,c__4550__auto___87230);
var G__87234 = (0);
seq__87167_87219 = G__87231;
chunk__87168_87220 = G__87232;
count__87169_87221 = G__87233;
i__87170_87222 = G__87234;
continue;
} else {
var gear_87235 = cljs.core.first.call(null,seq__87167_87229__$1);
math_gears.core.draw_gear.call(null,gear_87235,new cljs.core.Keyword(null,"vertical","vertical",718696748));


var G__87236 = cljs.core.next.call(null,seq__87167_87229__$1);
var G__87237 = null;
var G__87238 = (0);
var G__87239 = (0);
seq__87167_87219 = G__87236;
chunk__87168_87220 = G__87237;
count__87169_87221 = G__87238;
i__87170_87222 = G__87239;
continue;
}
} else {
}
}
break;
}

var seq__87171_87240 = cljs.core.seq.call(null,math_gears.core.ygears);
var chunk__87172_87241 = null;
var count__87173_87242 = (0);
var i__87174_87243 = (0);
while(true){
if((i__87174_87243 < count__87173_87242)){
var gear_87244 = cljs.core._nth.call(null,chunk__87172_87241,i__87174_87243);
math_gears.core.draw_gear.call(null,gear_87244,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475));


var G__87245 = seq__87171_87240;
var G__87246 = chunk__87172_87241;
var G__87247 = count__87173_87242;
var G__87248 = (i__87174_87243 + (1));
seq__87171_87240 = G__87245;
chunk__87172_87241 = G__87246;
count__87173_87242 = G__87247;
i__87174_87243 = G__87248;
continue;
} else {
var temp__5735__auto___87249 = cljs.core.seq.call(null,seq__87171_87240);
if(temp__5735__auto___87249){
var seq__87171_87250__$1 = temp__5735__auto___87249;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__87171_87250__$1)){
var c__4550__auto___87251 = cljs.core.chunk_first.call(null,seq__87171_87250__$1);
var G__87252 = cljs.core.chunk_rest.call(null,seq__87171_87250__$1);
var G__87253 = c__4550__auto___87251;
var G__87254 = cljs.core.count.call(null,c__4550__auto___87251);
var G__87255 = (0);
seq__87171_87240 = G__87252;
chunk__87172_87241 = G__87253;
count__87173_87242 = G__87254;
i__87174_87243 = G__87255;
continue;
} else {
var gear_87256 = cljs.core.first.call(null,seq__87171_87250__$1);
math_gears.core.draw_gear.call(null,gear_87256,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475));


var G__87257 = cljs.core.next.call(null,seq__87171_87250__$1);
var G__87258 = null;
var G__87259 = (0);
var G__87260 = (0);
seq__87171_87240 = G__87257;
chunk__87172_87241 = G__87258;
count__87173_87242 = G__87259;
i__87174_87243 = G__87260;
continue;
}
} else {
}
}
break;
}

var seq__87175 = cljs.core.seq.call(null,cljs.core.range.call(null,math_gears.core.gear_count));
var chunk__87180 = null;
var count__87181 = (0);
var i__87182 = (0);
while(true){
if((i__87182 < count__87181)){
var i = cljs.core._nth.call(null,chunk__87180,i__87182);
var seq__87183_87261 = cljs.core.seq.call(null,cljs.core.range.call(null,math_gears.core.gear_count));
var chunk__87184_87262 = null;
var count__87185_87263 = (0);
var i__87186_87264 = (0);
while(true){
if((i__87186_87264 < count__87185_87263)){
var j_87265 = cljs.core._nth.call(null,chunk__87184_87262,i__87186_87264);
var xgear_87266 = cljs.core.deref.call(null,cljs.core.nth.call(null,math_gears.core.xgears,i));
var ygear_87267 = cljs.core.deref.call(null,cljs.core.nth.call(null,math_gears.core.ygears,j_87265));
var x_87268 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ctrl-point","ctrl-point",-1570009400).cljs$core$IFn$_invoke$arity$1(xgear_87266));
var y_87269 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ctrl-point","ctrl-point",-1570009400).cljs$core$IFn$_invoke$arity$1(ygear_87267));
var shape_87270 = math_gears.core.get_shape.call(null,i,j_87265);
if(((math_gears.core.rotation_done_QMARK_.call(null,xgear_87266)) && (math_gears.core.rotation_done_QMARK_.call(null,ygear_87267)))){
} else {
math_gears.core.draw_cross.call(null,x_87268,y_87269);

math_gears.core.inc_shape_BANG_.call(null,shape_87270,x_87268,y_87269);
}

var gr__29253__auto___87271 = cljs.core.deref.call(null,math_gears.core.stroke_buffer);
var _STAR_graphics_STAR__orig_val__87207_87272 = quil.core._STAR_graphics_STAR_;
var _STAR_graphics_STAR__temp_val__87208_87273 = gr__29253__auto___87271;
quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__temp_val__87208_87273;

try{quil.core.begin_draw.call(null,gr__29253__auto___87271);

math_gears.core.draw_shape.call(null,shape_87270);

quil.core.end_draw.call(null,gr__29253__auto___87271);
}finally {quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__orig_val__87207_87272;
}

var G__87274 = seq__87183_87261;
var G__87275 = chunk__87184_87262;
var G__87276 = count__87185_87263;
var G__87277 = (i__87186_87264 + (1));
seq__87183_87261 = G__87274;
chunk__87184_87262 = G__87275;
count__87185_87263 = G__87276;
i__87186_87264 = G__87277;
continue;
} else {
var temp__5735__auto___87278 = cljs.core.seq.call(null,seq__87183_87261);
if(temp__5735__auto___87278){
var seq__87183_87279__$1 = temp__5735__auto___87278;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__87183_87279__$1)){
var c__4550__auto___87280 = cljs.core.chunk_first.call(null,seq__87183_87279__$1);
var G__87281 = cljs.core.chunk_rest.call(null,seq__87183_87279__$1);
var G__87282 = c__4550__auto___87280;
var G__87283 = cljs.core.count.call(null,c__4550__auto___87280);
var G__87284 = (0);
seq__87183_87261 = G__87281;
chunk__87184_87262 = G__87282;
count__87185_87263 = G__87283;
i__87186_87264 = G__87284;
continue;
} else {
var j_87285 = cljs.core.first.call(null,seq__87183_87279__$1);
var xgear_87286 = cljs.core.deref.call(null,cljs.core.nth.call(null,math_gears.core.xgears,i));
var ygear_87287 = cljs.core.deref.call(null,cljs.core.nth.call(null,math_gears.core.ygears,j_87285));
var x_87288 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ctrl-point","ctrl-point",-1570009400).cljs$core$IFn$_invoke$arity$1(xgear_87286));
var y_87289 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ctrl-point","ctrl-point",-1570009400).cljs$core$IFn$_invoke$arity$1(ygear_87287));
var shape_87290 = math_gears.core.get_shape.call(null,i,j_87285);
if(((math_gears.core.rotation_done_QMARK_.call(null,xgear_87286)) && (math_gears.core.rotation_done_QMARK_.call(null,ygear_87287)))){
} else {
math_gears.core.draw_cross.call(null,x_87288,y_87289);

math_gears.core.inc_shape_BANG_.call(null,shape_87290,x_87288,y_87289);
}

var gr__29253__auto___87291 = cljs.core.deref.call(null,math_gears.core.stroke_buffer);
var _STAR_graphics_STAR__orig_val__87209_87292 = quil.core._STAR_graphics_STAR_;
var _STAR_graphics_STAR__temp_val__87210_87293 = gr__29253__auto___87291;
quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__temp_val__87210_87293;

try{quil.core.begin_draw.call(null,gr__29253__auto___87291);

math_gears.core.draw_shape.call(null,shape_87290);

quil.core.end_draw.call(null,gr__29253__auto___87291);
}finally {quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__orig_val__87209_87292;
}

var G__87294 = cljs.core.next.call(null,seq__87183_87279__$1);
var G__87295 = null;
var G__87296 = (0);
var G__87297 = (0);
seq__87183_87261 = G__87294;
chunk__87184_87262 = G__87295;
count__87185_87263 = G__87296;
i__87186_87264 = G__87297;
continue;
}
} else {
}
}
break;
}

var G__87298 = seq__87175;
var G__87299 = chunk__87180;
var G__87300 = count__87181;
var G__87301 = (i__87182 + (1));
seq__87175 = G__87298;
chunk__87180 = G__87299;
count__87181 = G__87300;
i__87182 = G__87301;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__87175);
if(temp__5735__auto__){
var seq__87175__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__87175__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__87175__$1);
var G__87302 = cljs.core.chunk_rest.call(null,seq__87175__$1);
var G__87303 = c__4550__auto__;
var G__87304 = cljs.core.count.call(null,c__4550__auto__);
var G__87305 = (0);
seq__87175 = G__87302;
chunk__87180 = G__87303;
count__87181 = G__87304;
i__87182 = G__87305;
continue;
} else {
var i = cljs.core.first.call(null,seq__87175__$1);
var seq__87176_87306 = cljs.core.seq.call(null,cljs.core.range.call(null,math_gears.core.gear_count));
var chunk__87177_87307 = null;
var count__87178_87308 = (0);
var i__87179_87309 = (0);
while(true){
if((i__87179_87309 < count__87178_87308)){
var j_87310 = cljs.core._nth.call(null,chunk__87177_87307,i__87179_87309);
var xgear_87311 = cljs.core.deref.call(null,cljs.core.nth.call(null,math_gears.core.xgears,i));
var ygear_87312 = cljs.core.deref.call(null,cljs.core.nth.call(null,math_gears.core.ygears,j_87310));
var x_87313 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ctrl-point","ctrl-point",-1570009400).cljs$core$IFn$_invoke$arity$1(xgear_87311));
var y_87314 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ctrl-point","ctrl-point",-1570009400).cljs$core$IFn$_invoke$arity$1(ygear_87312));
var shape_87315 = math_gears.core.get_shape.call(null,i,j_87310);
if(((math_gears.core.rotation_done_QMARK_.call(null,xgear_87311)) && (math_gears.core.rotation_done_QMARK_.call(null,ygear_87312)))){
} else {
math_gears.core.draw_cross.call(null,x_87313,y_87314);

math_gears.core.inc_shape_BANG_.call(null,shape_87315,x_87313,y_87314);
}

var gr__29253__auto___87316 = cljs.core.deref.call(null,math_gears.core.stroke_buffer);
var _STAR_graphics_STAR__orig_val__87215_87317 = quil.core._STAR_graphics_STAR_;
var _STAR_graphics_STAR__temp_val__87216_87318 = gr__29253__auto___87316;
quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__temp_val__87216_87318;

try{quil.core.begin_draw.call(null,gr__29253__auto___87316);

math_gears.core.draw_shape.call(null,shape_87315);

quil.core.end_draw.call(null,gr__29253__auto___87316);
}finally {quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__orig_val__87215_87317;
}

var G__87319 = seq__87176_87306;
var G__87320 = chunk__87177_87307;
var G__87321 = count__87178_87308;
var G__87322 = (i__87179_87309 + (1));
seq__87176_87306 = G__87319;
chunk__87177_87307 = G__87320;
count__87178_87308 = G__87321;
i__87179_87309 = G__87322;
continue;
} else {
var temp__5735__auto___87323__$1 = cljs.core.seq.call(null,seq__87176_87306);
if(temp__5735__auto___87323__$1){
var seq__87176_87324__$1 = temp__5735__auto___87323__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__87176_87324__$1)){
var c__4550__auto___87325 = cljs.core.chunk_first.call(null,seq__87176_87324__$1);
var G__87326 = cljs.core.chunk_rest.call(null,seq__87176_87324__$1);
var G__87327 = c__4550__auto___87325;
var G__87328 = cljs.core.count.call(null,c__4550__auto___87325);
var G__87329 = (0);
seq__87176_87306 = G__87326;
chunk__87177_87307 = G__87327;
count__87178_87308 = G__87328;
i__87179_87309 = G__87329;
continue;
} else {
var j_87330 = cljs.core.first.call(null,seq__87176_87324__$1);
var xgear_87331 = cljs.core.deref.call(null,cljs.core.nth.call(null,math_gears.core.xgears,i));
var ygear_87332 = cljs.core.deref.call(null,cljs.core.nth.call(null,math_gears.core.ygears,j_87330));
var x_87333 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ctrl-point","ctrl-point",-1570009400).cljs$core$IFn$_invoke$arity$1(xgear_87331));
var y_87334 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ctrl-point","ctrl-point",-1570009400).cljs$core$IFn$_invoke$arity$1(ygear_87332));
var shape_87335 = math_gears.core.get_shape.call(null,i,j_87330);
if(((math_gears.core.rotation_done_QMARK_.call(null,xgear_87331)) && (math_gears.core.rotation_done_QMARK_.call(null,ygear_87332)))){
} else {
math_gears.core.draw_cross.call(null,x_87333,y_87334);

math_gears.core.inc_shape_BANG_.call(null,shape_87335,x_87333,y_87334);
}

var gr__29253__auto___87336 = cljs.core.deref.call(null,math_gears.core.stroke_buffer);
var _STAR_graphics_STAR__orig_val__87217_87337 = quil.core._STAR_graphics_STAR_;
var _STAR_graphics_STAR__temp_val__87218_87338 = gr__29253__auto___87336;
quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__temp_val__87218_87338;

try{quil.core.begin_draw.call(null,gr__29253__auto___87336);

math_gears.core.draw_shape.call(null,shape_87335);

quil.core.end_draw.call(null,gr__29253__auto___87336);
}finally {quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__orig_val__87217_87337;
}

var G__87339 = cljs.core.next.call(null,seq__87176_87324__$1);
var G__87340 = null;
var G__87341 = (0);
var G__87342 = (0);
seq__87176_87306 = G__87339;
chunk__87177_87307 = G__87340;
count__87178_87308 = G__87341;
i__87179_87309 = G__87342;
continue;
}
} else {
}
}
break;
}

var G__87343 = cljs.core.next.call(null,seq__87175__$1);
var G__87344 = null;
var G__87345 = (0);
var G__87346 = (0);
seq__87175 = G__87343;
chunk__87180 = G__87344;
count__87181 = G__87345;
i__87182 = G__87346;
continue;
}
} else {
return null;
}
}
break;
}
});
math_gears.core.run_sketch = (function math_gears$core$run_sketch(){
math_gears.core.math_gears = (function math_gears$core$run_sketch_$_math_gears(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"math-gears",new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"p2d","p2d",-2106175755),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [math_gears.core.w,math_gears.core.h], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,math_gears.core.setup))?(function() { 
var G__87347__delegate = function (args){
return cljs.core.apply.call(null,math_gears.core.setup,args);
};
var G__87347 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__87348__i = 0, G__87348__a = new Array(arguments.length -  0);
while (G__87348__i < G__87348__a.length) {G__87348__a[G__87348__i] = arguments[G__87348__i + 0]; ++G__87348__i;}
  args = new cljs.core.IndexedSeq(G__87348__a,0,null);
} 
return G__87347__delegate.call(this,args);};
G__87347.cljs$lang$maxFixedArity = 0;
G__87347.cljs$lang$applyTo = (function (arglist__87349){
var args = cljs.core.seq(arglist__87349);
return G__87347__delegate(args);
});
G__87347.cljs$core$IFn$_invoke$arity$variadic = G__87347__delegate;
return G__87347;
})()
:math_gears.core.setup),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,math_gears.core.draw))?(function() { 
var G__87350__delegate = function (args){
return cljs.core.apply.call(null,math_gears.core.draw,args);
};
var G__87350 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__87351__i = 0, G__87351__a = new Array(arguments.length -  0);
while (G__87351__i < G__87351__a.length) {G__87351__a[G__87351__i] = arguments[G__87351__i + 0]; ++G__87351__i;}
  args = new cljs.core.IndexedSeq(G__87351__a,0,null);
} 
return G__87350__delegate.call(this,args);};
G__87350.cljs$lang$maxFixedArity = 0;
G__87350.cljs$lang$applyTo = (function (arglist__87352){
var args = cljs.core.seq(arglist__87352);
return G__87350__delegate(args);
});
G__87350.cljs$core$IFn$_invoke$arity$variadic = G__87350__delegate;
return G__87350;
})()
:math_gears.core.draw));
});
goog.exportSymbol('math_gears.core.math_gears', math_gears.core.math_gears);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__28833__28834__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__28833__28834__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),math_gears.core.math_gears,new cljs.core.Keyword(null,"host-id","host-id",742376279),"math-gears"], null));
}
});
goog.exportSymbol('math_gears.core.run_sketch', math_gears.core.run_sketch);

//# sourceMappingURL=core.js.map?rel=1702980931159
