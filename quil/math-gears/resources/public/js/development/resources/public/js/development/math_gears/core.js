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

math_gears.core.Point.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k77554,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__77558 = k77554;
var G__77558__$1 = (((G__77558 instanceof cljs.core.Keyword))?G__77558.fqn:null);
switch (G__77558__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k77554,else__4388__auto__);

}
});

math_gears.core.Point.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__77559){
var vec__77560 = p__77559;
var k__4408__auto__ = cljs.core.nth.call(null,vec__77560,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__77560,(1),null);
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

math_gears.core.Point.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__77553){
var self__ = this;
var G__77553__$1 = this;
return (new cljs.core.RecordIter((0),G__77553__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

math_gears.core.Point.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this77555,other77556){
var self__ = this;
var this77555__$1 = this;
return (((!((other77556 == null)))) && ((this77555__$1.constructor === other77556.constructor)) && (cljs.core._EQ_.call(null,this77555__$1.x,other77556.x)) && (cljs.core._EQ_.call(null,this77555__$1.y,other77556.y)) && (cljs.core._EQ_.call(null,this77555__$1.__extmap,other77556.__extmap)));
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

math_gears.core.Point.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__77553){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__77563 = cljs.core.keyword_identical_QMARK_;
var expr__77564 = k__4393__auto__;
if(cljs.core.truth_(pred__77563.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__77564))){
return (new math_gears.core.Point(G__77553,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__77563.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__77564))){
return (new math_gears.core.Point(self__.x,G__77553,self__.__meta,self__.__extmap,null));
} else {
return (new math_gears.core.Point(self__.x,self__.y,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__77553),null));
}
}
});

math_gears.core.Point.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

math_gears.core.Point.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__77553){
var self__ = this;
var this__4384__auto____$1 = this;
return (new math_gears.core.Point(self__.x,self__.y,G__77553,self__.__extmap,self__.__hash));
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
math_gears.core.map__GT_Point = (function math_gears$core$map__GT_Point(G__77557){
var extmap__4424__auto__ = (function (){var G__77566 = cljs.core.dissoc.call(null,G__77557,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776));
if(cljs.core.record_QMARK_.call(null,G__77557)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__77566);
} else {
return G__77566;
}
})();
return (new math_gears.core.Point(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__77557),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__77557),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
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

math_gears.core.Gear.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k77569,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__77573 = k77569;
var G__77573__$1 = (((G__77573 instanceof cljs.core.Keyword))?G__77573.fqn:null);
switch (G__77573__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k77569,else__4388__auto__);

}
});

math_gears.core.Gear.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__77574){
var vec__77575 = p__77574;
var k__4408__auto__ = cljs.core.nth.call(null,vec__77575,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__77575,(1),null);
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

math_gears.core.Gear.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__77568){
var self__ = this;
var G__77568__$1 = this;
return (new cljs.core.RecordIter((0),G__77568__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Keyword(null,"diameter","diameter",1560913323),new cljs.core.Keyword(null,"angle","angle",1622094254),new cljs.core.Keyword(null,"angle-step","angle-step",1369583146),new cljs.core.Keyword(null,"ctrl-point","ctrl-point",-1570009400)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

math_gears.core.Gear.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this77570,other77571){
var self__ = this;
var this77570__$1 = this;
return (((!((other77571 == null)))) && ((this77570__$1.constructor === other77571.constructor)) && (cljs.core._EQ_.call(null,this77570__$1.x,other77571.x)) && (cljs.core._EQ_.call(null,this77570__$1.y,other77571.y)) && (cljs.core._EQ_.call(null,this77570__$1.radius,other77571.radius)) && (cljs.core._EQ_.call(null,this77570__$1.diameter,other77571.diameter)) && (cljs.core._EQ_.call(null,this77570__$1.angle,other77571.angle)) && (cljs.core._EQ_.call(null,this77570__$1.angle_step,other77571.angle_step)) && (cljs.core._EQ_.call(null,this77570__$1.ctrl_point,other77571.ctrl_point)) && (cljs.core._EQ_.call(null,this77570__$1.__extmap,other77571.__extmap)));
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

math_gears.core.Gear.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__77568){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__77578 = cljs.core.keyword_identical_QMARK_;
var expr__77579 = k__4393__auto__;
if(cljs.core.truth_(pred__77578.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__77579))){
return (new math_gears.core.Gear(G__77568,self__.y,self__.radius,self__.diameter,self__.angle,self__.angle_step,self__.ctrl_point,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__77578.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__77579))){
return (new math_gears.core.Gear(self__.x,G__77568,self__.radius,self__.diameter,self__.angle,self__.angle_step,self__.ctrl_point,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__77578.call(null,new cljs.core.Keyword(null,"radius","radius",-2073122258),expr__77579))){
return (new math_gears.core.Gear(self__.x,self__.y,G__77568,self__.diameter,self__.angle,self__.angle_step,self__.ctrl_point,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__77578.call(null,new cljs.core.Keyword(null,"diameter","diameter",1560913323),expr__77579))){
return (new math_gears.core.Gear(self__.x,self__.y,self__.radius,G__77568,self__.angle,self__.angle_step,self__.ctrl_point,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__77578.call(null,new cljs.core.Keyword(null,"angle","angle",1622094254),expr__77579))){
return (new math_gears.core.Gear(self__.x,self__.y,self__.radius,self__.diameter,G__77568,self__.angle_step,self__.ctrl_point,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__77578.call(null,new cljs.core.Keyword(null,"angle-step","angle-step",1369583146),expr__77579))){
return (new math_gears.core.Gear(self__.x,self__.y,self__.radius,self__.diameter,self__.angle,G__77568,self__.ctrl_point,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__77578.call(null,new cljs.core.Keyword(null,"ctrl-point","ctrl-point",-1570009400),expr__77579))){
return (new math_gears.core.Gear(self__.x,self__.y,self__.radius,self__.diameter,self__.angle,self__.angle_step,G__77568,self__.__meta,self__.__extmap,null));
} else {
return (new math_gears.core.Gear(self__.x,self__.y,self__.radius,self__.diameter,self__.angle,self__.angle_step,self__.ctrl_point,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__77568),null));
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

math_gears.core.Gear.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__77568){
var self__ = this;
var this__4384__auto____$1 = this;
return (new math_gears.core.Gear(self__.x,self__.y,self__.radius,self__.diameter,self__.angle,self__.angle_step,self__.ctrl_point,G__77568,self__.__extmap,self__.__hash));
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
math_gears.core.map__GT_Gear = (function math_gears$core$map__GT_Gear(G__77572){
var extmap__4424__auto__ = (function (){var G__77581 = cljs.core.dissoc.call(null,G__77572,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Keyword(null,"diameter","diameter",1560913323),new cljs.core.Keyword(null,"angle","angle",1622094254),new cljs.core.Keyword(null,"angle-step","angle-step",1369583146),new cljs.core.Keyword(null,"ctrl-point","ctrl-point",-1570009400));
if(cljs.core.record_QMARK_.call(null,G__77572)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__77581);
} else {
return G__77581;
}
})();
return (new math_gears.core.Gear(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__77572),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__77572),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(G__77572),new cljs.core.Keyword(null,"diameter","diameter",1560913323).cljs$core$IFn$_invoke$arity$1(G__77572),new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(G__77572),new cljs.core.Keyword(null,"angle-step","angle-step",1369583146).cljs$core$IFn$_invoke$arity$1(G__77572),new cljs.core.Keyword(null,"ctrl-point","ctrl-point",-1570009400).cljs$core$IFn$_invoke$arity$1(G__77572),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
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

math_gears.core.Shape.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k77584,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__77588 = k77584;
var G__77588__$1 = (((G__77588 instanceof cljs.core.Keyword))?G__77588.fqn:null);
switch (G__77588__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k77584,else__4388__auto__);

}
});

math_gears.core.Shape.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__77589){
var vec__77590 = p__77589;
var k__4408__auto__ = cljs.core.nth.call(null,vec__77590,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__77590,(1),null);
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

math_gears.core.Shape.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__77583){
var self__ = this;
var G__77583__$1 = this;
return (new cljs.core.RecordIter((0),G__77583__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"j","j",-1397974765),new cljs.core.Keyword(null,"points","points",-1486596883)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

math_gears.core.Shape.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this77585,other77586){
var self__ = this;
var this77585__$1 = this;
return (((!((other77586 == null)))) && ((this77585__$1.constructor === other77586.constructor)) && (cljs.core._EQ_.call(null,this77585__$1.i,other77586.i)) && (cljs.core._EQ_.call(null,this77585__$1.j,other77586.j)) && (cljs.core._EQ_.call(null,this77585__$1.points,other77586.points)) && (cljs.core._EQ_.call(null,this77585__$1.__extmap,other77586.__extmap)));
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

math_gears.core.Shape.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__77583){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__77593 = cljs.core.keyword_identical_QMARK_;
var expr__77594 = k__4393__auto__;
if(cljs.core.truth_(pred__77593.call(null,new cljs.core.Keyword(null,"i","i",-1386841315),expr__77594))){
return (new math_gears.core.Shape(G__77583,self__.j,self__.points,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__77593.call(null,new cljs.core.Keyword(null,"j","j",-1397974765),expr__77594))){
return (new math_gears.core.Shape(self__.i,G__77583,self__.points,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__77593.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__77594))){
return (new math_gears.core.Shape(self__.i,self__.j,G__77583,self__.__meta,self__.__extmap,null));
} else {
return (new math_gears.core.Shape(self__.i,self__.j,self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__77583),null));
}
}
}
});

math_gears.core.Shape.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"i","i",-1386841315),self__.i,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"j","j",-1397974765),self__.j,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"points","points",-1486596883),self__.points,null))], null),self__.__extmap));
});

math_gears.core.Shape.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__77583){
var self__ = this;
var this__4384__auto____$1 = this;
return (new math_gears.core.Shape(self__.i,self__.j,self__.points,G__77583,self__.__extmap,self__.__hash));
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
math_gears.core.map__GT_Shape = (function math_gears$core$map__GT_Shape(G__77587){
var extmap__4424__auto__ = (function (){var G__77596 = cljs.core.dissoc.call(null,G__77587,new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"j","j",-1397974765),new cljs.core.Keyword(null,"points","points",-1486596883));
if(cljs.core.record_QMARK_.call(null,G__77587)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__77596);
} else {
return G__77596;
}
})();
return (new math_gears.core.Shape(new cljs.core.Keyword(null,"i","i",-1386841315).cljs$core$IFn$_invoke$arity$1(G__77587),new cljs.core.Keyword(null,"j","j",-1397974765).cljs$core$IFn$_invoke$arity$1(G__77587),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__77587),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});

math_gears.core.canvas_size = (800);
math_gears.core.w = math_gears.core.canvas_size;
math_gears.core.h = math_gears.core.canvas_size;
math_gears.core.gear_count = (7);
math_gears.core.rotation_speed = 0.025;
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
return quil.core.color.call(null,"#6d6875");
}),null));
math_gears.core.gear_color = (new cljs.core.Delay((function (){
return quil.core.color.call(null,"#ffcdb2");
}),null));
math_gears.core.shape_stroke_colors = (new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.core.color.call(null,"#ffb4a2"),quil.core.color.call(null,"#e5989b"),quil.core.color.call(null,"#b5838d"),quil.core.color.call(null,"#ffffff")], null);
}),null));
math_gears.core.draw_shape = (function math_gears$core$draw_shape(shape){
quil.core.push_style.call(null);

quil.core.stroke_weight.call(null,(2));

quil.core.begin_shape.call(null);

quil.core.no_fill.call(null);

quil.core.stroke.call(null,cljs.core.nth.call(null,cljs.core.deref.call(null,math_gears.core.shape_stroke_colors),cljs.core.mod.call(null,new cljs.core.Keyword(null,"i","i",-1386841315).cljs$core$IFn$_invoke$arity$1(shape),cljs.core.count.call(null,cljs.core.deref.call(null,math_gears.core.shape_stroke_colors)))));

var seq__77598_77602 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(shape)));
var chunk__77599_77603 = null;
var count__77600_77604 = (0);
var i__77601_77605 = (0);
while(true){
if((i__77601_77605 < count__77600_77604)){
var pt_77606 = cljs.core._nth.call(null,chunk__77599_77603,i__77601_77605);
quil.core.curve_vertex.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pt_77606),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pt_77606));


var G__77607 = seq__77598_77602;
var G__77608 = chunk__77599_77603;
var G__77609 = count__77600_77604;
var G__77610 = (i__77601_77605 + (1));
seq__77598_77602 = G__77607;
chunk__77599_77603 = G__77608;
count__77600_77604 = G__77609;
i__77601_77605 = G__77610;
continue;
} else {
var temp__5735__auto___77611 = cljs.core.seq.call(null,seq__77598_77602);
if(temp__5735__auto___77611){
var seq__77598_77612__$1 = temp__5735__auto___77611;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__77598_77612__$1)){
var c__4550__auto___77613 = cljs.core.chunk_first.call(null,seq__77598_77612__$1);
var G__77614 = cljs.core.chunk_rest.call(null,seq__77598_77612__$1);
var G__77615 = c__4550__auto___77613;
var G__77616 = cljs.core.count.call(null,c__4550__auto___77613);
var G__77617 = (0);
seq__77598_77602 = G__77614;
chunk__77599_77603 = G__77615;
count__77600_77604 = G__77616;
i__77601_77605 = G__77617;
continue;
} else {
var pt_77618 = cljs.core.first.call(null,seq__77598_77612__$1);
quil.core.curve_vertex.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pt_77618),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pt_77618));


var G__77619 = cljs.core.next.call(null,seq__77598_77612__$1);
var G__77620 = null;
var G__77621 = (0);
var G__77622 = (0);
seq__77598_77602 = G__77619;
chunk__77599_77603 = G__77620;
count__77600_77604 = G__77621;
i__77601_77605 = G__77622;
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
math_gears.core.circle = (function math_gears$core$circle(x,y,r){
return quil.core.ellipse.call(null,x,y,r,r);
});
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
return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(shape),(function (p1__77623_SHARP_){
return cljs.core.conj.call(null,p1__77623_SHARP_,math_gears.core.__GT_Point.call(null,x,y));
}));
});
/**
 * Finds the control point based on the angle of the gear
 */
math_gears.core.compute_gear_ctrl_point = (function math_gears$core$compute_gear_ctrl_point(gearx,geary,radius,angle){
var vec__77624 = math_gears.core.polar_to_cartesian.call(null,radius,angle);
var x = cljs.core.nth.call(null,vec__77624,(0),null);
var y = cljs.core.nth.call(null,vec__77624,(1),null);
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
math_gears.core.draw_cross = (function math_gears$core$draw_cross(x,y){
quil.core.push_style.call(null);

quil.core.stroke_weight.call(null,(2));

quil.core.stroke.call(null,(255));

var size_77627 = (math_gears.core.gear_size / (20));
quil.core.line.call(null,x,(y - size_77627),x,(y + size_77627));

quil.core.line.call(null,(x - size_77627),y,(x + size_77627),y);

return quil.core.pop_style.call(null);
});
math_gears.core.draw_gear = (function math_gears$core$draw_gear(gear,guideline_type){
quil.core.push_style.call(null);

quil.core.no_fill.call(null);

quil.core.stroke.call(null,cljs.core.deref.call(null,math_gears.core.gear_color));

cljs.core.swap_BANG_.call(null,gear,math_gears.core.inc_angle_BANG_);

math_gears.core.circle.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gear)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gear)),new cljs.core.Keyword(null,"diameter","diameter",1560913323).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gear)));

var vec__77628_77631 = math_gears.core.polar_to_cartesian.call(null,new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gear)),new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gear)));
var x_77632 = cljs.core.nth.call(null,vec__77628_77631,(0),null);
var y_77633 = cljs.core.nth.call(null,vec__77628_77631,(1),null);
quil.core.stroke.call(null,(255),(100));

quil.core.line.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gear)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gear)),(x_77632 + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gear))),(y_77633 + new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gear))));

quil.core.stroke_weight.call(null,(6));

quil.core.stroke.call(null,(255));

quil.core.point.call(null,(x_77632 + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gear))),(y_77633 + new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gear))));

quil.core.stroke_weight.call(null,(1));

if(cljs.core._EQ_.call(null,guideline_type,new cljs.core.Keyword(null,"vertical","vertical",718696748))){
quil.core.line.call(null,(x_77632 + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gear))),(0),(x_77632 + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gear))),((y_77633 + math_gears.core.h) + new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gear))));
} else {
if(cljs.core._EQ_.call(null,guideline_type,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475))){
quil.core.line.call(null,(0),(y_77633 + new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gear))),((x_77632 + math_gears.core.w) + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gear))),(y_77633 + new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gear))));
} else {
}
}

return quil.core.pop_style.call(null);
});
math_gears.core.xgears = cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__77634_SHARP_){
return math_gears.core.new_gear.call(null,((p1__77634_SHARP_ * math_gears.core.gear_size) + (math_gears.core.gear_size * 1.5)),(math_gears.core.gear_size / (2)),((1) + p1__77634_SHARP_));
}),cljs.core.range.call(null,math_gears.core.gear_count)));
math_gears.core.ygears = cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__77635_SHARP_){
return math_gears.core.new_gear.call(null,(math_gears.core.gear_size / (2)),((p1__77635_SHARP_ * math_gears.core.gear_size) + (math_gears.core.gear_size * 1.5)),((1) + p1__77635_SHARP_));
}),cljs.core.range.call(null,math_gears.core.gear_count)));
math_gears.core.setup = (function math_gears$core$setup(){
quil.core.pixel_density.call(null,(2));

quil.core.smooth.call(null);

return quil.core.frame_rate.call(null,(30));
});
math_gears.core.draw = (function math_gears$core$draw(){
quil.core.background.call(null,cljs.core.deref.call(null,math_gears.core.background_color));

quil.core.image.call(null,cljs.core.deref.call(null,math_gears.core.stroke_buffer),(0),(0));

var seq__77636_77688 = cljs.core.seq.call(null,math_gears.core.xgears);
var chunk__77637_77689 = null;
var count__77638_77690 = (0);
var i__77639_77691 = (0);
while(true){
if((i__77639_77691 < count__77638_77690)){
var gear_77692 = cljs.core._nth.call(null,chunk__77637_77689,i__77639_77691);
math_gears.core.draw_gear.call(null,gear_77692,new cljs.core.Keyword(null,"vertical","vertical",718696748));


var G__77693 = seq__77636_77688;
var G__77694 = chunk__77637_77689;
var G__77695 = count__77638_77690;
var G__77696 = (i__77639_77691 + (1));
seq__77636_77688 = G__77693;
chunk__77637_77689 = G__77694;
count__77638_77690 = G__77695;
i__77639_77691 = G__77696;
continue;
} else {
var temp__5735__auto___77697 = cljs.core.seq.call(null,seq__77636_77688);
if(temp__5735__auto___77697){
var seq__77636_77698__$1 = temp__5735__auto___77697;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__77636_77698__$1)){
var c__4550__auto___77699 = cljs.core.chunk_first.call(null,seq__77636_77698__$1);
var G__77700 = cljs.core.chunk_rest.call(null,seq__77636_77698__$1);
var G__77701 = c__4550__auto___77699;
var G__77702 = cljs.core.count.call(null,c__4550__auto___77699);
var G__77703 = (0);
seq__77636_77688 = G__77700;
chunk__77637_77689 = G__77701;
count__77638_77690 = G__77702;
i__77639_77691 = G__77703;
continue;
} else {
var gear_77704 = cljs.core.first.call(null,seq__77636_77698__$1);
math_gears.core.draw_gear.call(null,gear_77704,new cljs.core.Keyword(null,"vertical","vertical",718696748));


var G__77705 = cljs.core.next.call(null,seq__77636_77698__$1);
var G__77706 = null;
var G__77707 = (0);
var G__77708 = (0);
seq__77636_77688 = G__77705;
chunk__77637_77689 = G__77706;
count__77638_77690 = G__77707;
i__77639_77691 = G__77708;
continue;
}
} else {
}
}
break;
}

var seq__77640_77709 = cljs.core.seq.call(null,math_gears.core.ygears);
var chunk__77641_77710 = null;
var count__77642_77711 = (0);
var i__77643_77712 = (0);
while(true){
if((i__77643_77712 < count__77642_77711)){
var gear_77713 = cljs.core._nth.call(null,chunk__77641_77710,i__77643_77712);
math_gears.core.draw_gear.call(null,gear_77713,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475));


var G__77714 = seq__77640_77709;
var G__77715 = chunk__77641_77710;
var G__77716 = count__77642_77711;
var G__77717 = (i__77643_77712 + (1));
seq__77640_77709 = G__77714;
chunk__77641_77710 = G__77715;
count__77642_77711 = G__77716;
i__77643_77712 = G__77717;
continue;
} else {
var temp__5735__auto___77718 = cljs.core.seq.call(null,seq__77640_77709);
if(temp__5735__auto___77718){
var seq__77640_77719__$1 = temp__5735__auto___77718;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__77640_77719__$1)){
var c__4550__auto___77720 = cljs.core.chunk_first.call(null,seq__77640_77719__$1);
var G__77721 = cljs.core.chunk_rest.call(null,seq__77640_77719__$1);
var G__77722 = c__4550__auto___77720;
var G__77723 = cljs.core.count.call(null,c__4550__auto___77720);
var G__77724 = (0);
seq__77640_77709 = G__77721;
chunk__77641_77710 = G__77722;
count__77642_77711 = G__77723;
i__77643_77712 = G__77724;
continue;
} else {
var gear_77725 = cljs.core.first.call(null,seq__77640_77719__$1);
math_gears.core.draw_gear.call(null,gear_77725,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475));


var G__77726 = cljs.core.next.call(null,seq__77640_77719__$1);
var G__77727 = null;
var G__77728 = (0);
var G__77729 = (0);
seq__77640_77709 = G__77726;
chunk__77641_77710 = G__77727;
count__77642_77711 = G__77728;
i__77643_77712 = G__77729;
continue;
}
} else {
}
}
break;
}

var seq__77644 = cljs.core.seq.call(null,cljs.core.range.call(null,math_gears.core.gear_count));
var chunk__77649 = null;
var count__77650 = (0);
var i__77651 = (0);
while(true){
if((i__77651 < count__77650)){
var i = cljs.core._nth.call(null,chunk__77649,i__77651);
var seq__77652_77730 = cljs.core.seq.call(null,cljs.core.range.call(null,math_gears.core.gear_count));
var chunk__77653_77731 = null;
var count__77654_77732 = (0);
var i__77655_77733 = (0);
while(true){
if((i__77655_77733 < count__77654_77732)){
var j_77734 = cljs.core._nth.call(null,chunk__77653_77731,i__77655_77733);
var xgear_77735 = cljs.core.deref.call(null,cljs.core.nth.call(null,math_gears.core.xgears,i));
var ygear_77736 = cljs.core.deref.call(null,cljs.core.nth.call(null,math_gears.core.ygears,j_77734));
var x_77737 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ctrl-point","ctrl-point",-1570009400).cljs$core$IFn$_invoke$arity$1(xgear_77735));
var y_77738 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ctrl-point","ctrl-point",-1570009400).cljs$core$IFn$_invoke$arity$1(ygear_77736));
var shape_77739 = math_gears.core.get_shape.call(null,i,j_77734);
if(((math_gears.core.rotation_done_QMARK_.call(null,xgear_77735)) && (math_gears.core.rotation_done_QMARK_.call(null,ygear_77736)))){
} else {
math_gears.core.draw_cross.call(null,x_77737,y_77738);

math_gears.core.inc_shape_BANG_.call(null,shape_77739,x_77737,y_77738);
}

var gr__29253__auto___77740 = cljs.core.deref.call(null,math_gears.core.stroke_buffer);
var _STAR_graphics_STAR__orig_val__77676_77741 = quil.core._STAR_graphics_STAR_;
var _STAR_graphics_STAR__temp_val__77677_77742 = gr__29253__auto___77740;
quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__temp_val__77677_77742;

try{quil.core.begin_draw.call(null,gr__29253__auto___77740);

math_gears.core.draw_shape.call(null,shape_77739);

quil.core.end_draw.call(null,gr__29253__auto___77740);
}finally {quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__orig_val__77676_77741;
}

var G__77743 = seq__77652_77730;
var G__77744 = chunk__77653_77731;
var G__77745 = count__77654_77732;
var G__77746 = (i__77655_77733 + (1));
seq__77652_77730 = G__77743;
chunk__77653_77731 = G__77744;
count__77654_77732 = G__77745;
i__77655_77733 = G__77746;
continue;
} else {
var temp__5735__auto___77747 = cljs.core.seq.call(null,seq__77652_77730);
if(temp__5735__auto___77747){
var seq__77652_77748__$1 = temp__5735__auto___77747;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__77652_77748__$1)){
var c__4550__auto___77749 = cljs.core.chunk_first.call(null,seq__77652_77748__$1);
var G__77750 = cljs.core.chunk_rest.call(null,seq__77652_77748__$1);
var G__77751 = c__4550__auto___77749;
var G__77752 = cljs.core.count.call(null,c__4550__auto___77749);
var G__77753 = (0);
seq__77652_77730 = G__77750;
chunk__77653_77731 = G__77751;
count__77654_77732 = G__77752;
i__77655_77733 = G__77753;
continue;
} else {
var j_77754 = cljs.core.first.call(null,seq__77652_77748__$1);
var xgear_77755 = cljs.core.deref.call(null,cljs.core.nth.call(null,math_gears.core.xgears,i));
var ygear_77756 = cljs.core.deref.call(null,cljs.core.nth.call(null,math_gears.core.ygears,j_77754));
var x_77757 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ctrl-point","ctrl-point",-1570009400).cljs$core$IFn$_invoke$arity$1(xgear_77755));
var y_77758 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ctrl-point","ctrl-point",-1570009400).cljs$core$IFn$_invoke$arity$1(ygear_77756));
var shape_77759 = math_gears.core.get_shape.call(null,i,j_77754);
if(((math_gears.core.rotation_done_QMARK_.call(null,xgear_77755)) && (math_gears.core.rotation_done_QMARK_.call(null,ygear_77756)))){
} else {
math_gears.core.draw_cross.call(null,x_77757,y_77758);

math_gears.core.inc_shape_BANG_.call(null,shape_77759,x_77757,y_77758);
}

var gr__29253__auto___77760 = cljs.core.deref.call(null,math_gears.core.stroke_buffer);
var _STAR_graphics_STAR__orig_val__77678_77761 = quil.core._STAR_graphics_STAR_;
var _STAR_graphics_STAR__temp_val__77679_77762 = gr__29253__auto___77760;
quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__temp_val__77679_77762;

try{quil.core.begin_draw.call(null,gr__29253__auto___77760);

math_gears.core.draw_shape.call(null,shape_77759);

quil.core.end_draw.call(null,gr__29253__auto___77760);
}finally {quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__orig_val__77678_77761;
}

var G__77763 = cljs.core.next.call(null,seq__77652_77748__$1);
var G__77764 = null;
var G__77765 = (0);
var G__77766 = (0);
seq__77652_77730 = G__77763;
chunk__77653_77731 = G__77764;
count__77654_77732 = G__77765;
i__77655_77733 = G__77766;
continue;
}
} else {
}
}
break;
}

var G__77767 = seq__77644;
var G__77768 = chunk__77649;
var G__77769 = count__77650;
var G__77770 = (i__77651 + (1));
seq__77644 = G__77767;
chunk__77649 = G__77768;
count__77650 = G__77769;
i__77651 = G__77770;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__77644);
if(temp__5735__auto__){
var seq__77644__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__77644__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__77644__$1);
var G__77771 = cljs.core.chunk_rest.call(null,seq__77644__$1);
var G__77772 = c__4550__auto__;
var G__77773 = cljs.core.count.call(null,c__4550__auto__);
var G__77774 = (0);
seq__77644 = G__77771;
chunk__77649 = G__77772;
count__77650 = G__77773;
i__77651 = G__77774;
continue;
} else {
var i = cljs.core.first.call(null,seq__77644__$1);
var seq__77645_77775 = cljs.core.seq.call(null,cljs.core.range.call(null,math_gears.core.gear_count));
var chunk__77646_77776 = null;
var count__77647_77777 = (0);
var i__77648_77778 = (0);
while(true){
if((i__77648_77778 < count__77647_77777)){
var j_77779 = cljs.core._nth.call(null,chunk__77646_77776,i__77648_77778);
var xgear_77780 = cljs.core.deref.call(null,cljs.core.nth.call(null,math_gears.core.xgears,i));
var ygear_77781 = cljs.core.deref.call(null,cljs.core.nth.call(null,math_gears.core.ygears,j_77779));
var x_77782 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ctrl-point","ctrl-point",-1570009400).cljs$core$IFn$_invoke$arity$1(xgear_77780));
var y_77783 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ctrl-point","ctrl-point",-1570009400).cljs$core$IFn$_invoke$arity$1(ygear_77781));
var shape_77784 = math_gears.core.get_shape.call(null,i,j_77779);
if(((math_gears.core.rotation_done_QMARK_.call(null,xgear_77780)) && (math_gears.core.rotation_done_QMARK_.call(null,ygear_77781)))){
} else {
math_gears.core.draw_cross.call(null,x_77782,y_77783);

math_gears.core.inc_shape_BANG_.call(null,shape_77784,x_77782,y_77783);
}

var gr__29253__auto___77785 = cljs.core.deref.call(null,math_gears.core.stroke_buffer);
var _STAR_graphics_STAR__orig_val__77684_77786 = quil.core._STAR_graphics_STAR_;
var _STAR_graphics_STAR__temp_val__77685_77787 = gr__29253__auto___77785;
quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__temp_val__77685_77787;

try{quil.core.begin_draw.call(null,gr__29253__auto___77785);

math_gears.core.draw_shape.call(null,shape_77784);

quil.core.end_draw.call(null,gr__29253__auto___77785);
}finally {quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__orig_val__77684_77786;
}

var G__77788 = seq__77645_77775;
var G__77789 = chunk__77646_77776;
var G__77790 = count__77647_77777;
var G__77791 = (i__77648_77778 + (1));
seq__77645_77775 = G__77788;
chunk__77646_77776 = G__77789;
count__77647_77777 = G__77790;
i__77648_77778 = G__77791;
continue;
} else {
var temp__5735__auto___77792__$1 = cljs.core.seq.call(null,seq__77645_77775);
if(temp__5735__auto___77792__$1){
var seq__77645_77793__$1 = temp__5735__auto___77792__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__77645_77793__$1)){
var c__4550__auto___77794 = cljs.core.chunk_first.call(null,seq__77645_77793__$1);
var G__77795 = cljs.core.chunk_rest.call(null,seq__77645_77793__$1);
var G__77796 = c__4550__auto___77794;
var G__77797 = cljs.core.count.call(null,c__4550__auto___77794);
var G__77798 = (0);
seq__77645_77775 = G__77795;
chunk__77646_77776 = G__77796;
count__77647_77777 = G__77797;
i__77648_77778 = G__77798;
continue;
} else {
var j_77799 = cljs.core.first.call(null,seq__77645_77793__$1);
var xgear_77800 = cljs.core.deref.call(null,cljs.core.nth.call(null,math_gears.core.xgears,i));
var ygear_77801 = cljs.core.deref.call(null,cljs.core.nth.call(null,math_gears.core.ygears,j_77799));
var x_77802 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ctrl-point","ctrl-point",-1570009400).cljs$core$IFn$_invoke$arity$1(xgear_77800));
var y_77803 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ctrl-point","ctrl-point",-1570009400).cljs$core$IFn$_invoke$arity$1(ygear_77801));
var shape_77804 = math_gears.core.get_shape.call(null,i,j_77799);
if(((math_gears.core.rotation_done_QMARK_.call(null,xgear_77800)) && (math_gears.core.rotation_done_QMARK_.call(null,ygear_77801)))){
} else {
math_gears.core.draw_cross.call(null,x_77802,y_77803);

math_gears.core.inc_shape_BANG_.call(null,shape_77804,x_77802,y_77803);
}

var gr__29253__auto___77805 = cljs.core.deref.call(null,math_gears.core.stroke_buffer);
var _STAR_graphics_STAR__orig_val__77686_77806 = quil.core._STAR_graphics_STAR_;
var _STAR_graphics_STAR__temp_val__77687_77807 = gr__29253__auto___77805;
quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__temp_val__77687_77807;

try{quil.core.begin_draw.call(null,gr__29253__auto___77805);

math_gears.core.draw_shape.call(null,shape_77804);

quil.core.end_draw.call(null,gr__29253__auto___77805);
}finally {quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__orig_val__77686_77806;
}

var G__77808 = cljs.core.next.call(null,seq__77645_77793__$1);
var G__77809 = null;
var G__77810 = (0);
var G__77811 = (0);
seq__77645_77775 = G__77808;
chunk__77646_77776 = G__77809;
count__77647_77777 = G__77810;
i__77648_77778 = G__77811;
continue;
}
} else {
}
}
break;
}

var G__77812 = cljs.core.next.call(null,seq__77644__$1);
var G__77813 = null;
var G__77814 = (0);
var G__77815 = (0);
seq__77644 = G__77812;
chunk__77649 = G__77813;
count__77650 = G__77814;
i__77651 = G__77815;
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
var G__77816__delegate = function (args){
return cljs.core.apply.call(null,math_gears.core.setup,args);
};
var G__77816 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__77817__i = 0, G__77817__a = new Array(arguments.length -  0);
while (G__77817__i < G__77817__a.length) {G__77817__a[G__77817__i] = arguments[G__77817__i + 0]; ++G__77817__i;}
  args = new cljs.core.IndexedSeq(G__77817__a,0,null);
} 
return G__77816__delegate.call(this,args);};
G__77816.cljs$lang$maxFixedArity = 0;
G__77816.cljs$lang$applyTo = (function (arglist__77818){
var args = cljs.core.seq(arglist__77818);
return G__77816__delegate(args);
});
G__77816.cljs$core$IFn$_invoke$arity$variadic = G__77816__delegate;
return G__77816;
})()
:math_gears.core.setup),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,math_gears.core.draw))?(function() { 
var G__77819__delegate = function (args){
return cljs.core.apply.call(null,math_gears.core.draw,args);
};
var G__77819 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__77820__i = 0, G__77820__a = new Array(arguments.length -  0);
while (G__77820__i < G__77820__a.length) {G__77820__a[G__77820__i] = arguments[G__77820__i + 0]; ++G__77820__i;}
  args = new cljs.core.IndexedSeq(G__77820__a,0,null);
} 
return G__77819__delegate.call(this,args);};
G__77819.cljs$lang$maxFixedArity = 0;
G__77819.cljs$lang$applyTo = (function (arglist__77821){
var args = cljs.core.seq(arglist__77821);
return G__77819__delegate(args);
});
G__77819.cljs$core$IFn$_invoke$arity$variadic = G__77819__delegate;
return G__77819;
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

//# sourceMappingURL=core.js.map?rel=1702977118601
