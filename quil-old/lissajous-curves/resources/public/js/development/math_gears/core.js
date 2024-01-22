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

math_gears.core.Point.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k30820,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__30824 = k30820;
var G__30824__$1 = (((G__30824 instanceof cljs.core.Keyword))?G__30824.fqn:null);
switch (G__30824__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30820,else__4388__auto__);

}
});

math_gears.core.Point.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__30825){
var vec__30826 = p__30825;
var k__4408__auto__ = cljs.core.nth.call(null,vec__30826,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__30826,(1),null);
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

math_gears.core.Point.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30819){
var self__ = this;
var G__30819__$1 = this;
return (new cljs.core.RecordIter((0),G__30819__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

math_gears.core.Point.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30821,other30822){
var self__ = this;
var this30821__$1 = this;
return (((!((other30822 == null)))) && ((this30821__$1.constructor === other30822.constructor)) && (cljs.core._EQ_.call(null,this30821__$1.x,other30822.x)) && (cljs.core._EQ_.call(null,this30821__$1.y,other30822.y)) && (cljs.core._EQ_.call(null,this30821__$1.__extmap,other30822.__extmap)));
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

math_gears.core.Point.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__30819){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__30829 = cljs.core.keyword_identical_QMARK_;
var expr__30830 = k__4393__auto__;
if(cljs.core.truth_(pred__30829.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__30830))){
return (new math_gears.core.Point(G__30819,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30829.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__30830))){
return (new math_gears.core.Point(self__.x,G__30819,self__.__meta,self__.__extmap,null));
} else {
return (new math_gears.core.Point(self__.x,self__.y,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__30819),null));
}
}
});

math_gears.core.Point.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

math_gears.core.Point.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__30819){
var self__ = this;
var this__4384__auto____$1 = this;
return (new math_gears.core.Point(self__.x,self__.y,G__30819,self__.__extmap,self__.__hash));
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
math_gears.core.map__GT_Point = (function math_gears$core$map__GT_Point(G__30823){
var extmap__4424__auto__ = (function (){var G__30832 = cljs.core.dissoc.call(null,G__30823,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776));
if(cljs.core.record_QMARK_.call(null,G__30823)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__30832);
} else {
return G__30832;
}
})();
return (new math_gears.core.Point(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__30823),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__30823),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
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

math_gears.core.Gear.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k30835,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__30839 = k30835;
var G__30839__$1 = (((G__30839 instanceof cljs.core.Keyword))?G__30839.fqn:null);
switch (G__30839__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k30835,else__4388__auto__);

}
});

math_gears.core.Gear.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__30840){
var vec__30841 = p__30840;
var k__4408__auto__ = cljs.core.nth.call(null,vec__30841,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__30841,(1),null);
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

math_gears.core.Gear.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30834){
var self__ = this;
var G__30834__$1 = this;
return (new cljs.core.RecordIter((0),G__30834__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Keyword(null,"diameter","diameter",1560913323),new cljs.core.Keyword(null,"angle","angle",1622094254),new cljs.core.Keyword(null,"angle-step","angle-step",1369583146),new cljs.core.Keyword(null,"ctrl-point","ctrl-point",-1570009400)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

math_gears.core.Gear.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30836,other30837){
var self__ = this;
var this30836__$1 = this;
return (((!((other30837 == null)))) && ((this30836__$1.constructor === other30837.constructor)) && (cljs.core._EQ_.call(null,this30836__$1.x,other30837.x)) && (cljs.core._EQ_.call(null,this30836__$1.y,other30837.y)) && (cljs.core._EQ_.call(null,this30836__$1.radius,other30837.radius)) && (cljs.core._EQ_.call(null,this30836__$1.diameter,other30837.diameter)) && (cljs.core._EQ_.call(null,this30836__$1.angle,other30837.angle)) && (cljs.core._EQ_.call(null,this30836__$1.angle_step,other30837.angle_step)) && (cljs.core._EQ_.call(null,this30836__$1.ctrl_point,other30837.ctrl_point)) && (cljs.core._EQ_.call(null,this30836__$1.__extmap,other30837.__extmap)));
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

math_gears.core.Gear.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__30834){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__30844 = cljs.core.keyword_identical_QMARK_;
var expr__30845 = k__4393__auto__;
if(cljs.core.truth_(pred__30844.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__30845))){
return (new math_gears.core.Gear(G__30834,self__.y,self__.radius,self__.diameter,self__.angle,self__.angle_step,self__.ctrl_point,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30844.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__30845))){
return (new math_gears.core.Gear(self__.x,G__30834,self__.radius,self__.diameter,self__.angle,self__.angle_step,self__.ctrl_point,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30844.call(null,new cljs.core.Keyword(null,"radius","radius",-2073122258),expr__30845))){
return (new math_gears.core.Gear(self__.x,self__.y,G__30834,self__.diameter,self__.angle,self__.angle_step,self__.ctrl_point,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30844.call(null,new cljs.core.Keyword(null,"diameter","diameter",1560913323),expr__30845))){
return (new math_gears.core.Gear(self__.x,self__.y,self__.radius,G__30834,self__.angle,self__.angle_step,self__.ctrl_point,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30844.call(null,new cljs.core.Keyword(null,"angle","angle",1622094254),expr__30845))){
return (new math_gears.core.Gear(self__.x,self__.y,self__.radius,self__.diameter,G__30834,self__.angle_step,self__.ctrl_point,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30844.call(null,new cljs.core.Keyword(null,"angle-step","angle-step",1369583146),expr__30845))){
return (new math_gears.core.Gear(self__.x,self__.y,self__.radius,self__.diameter,self__.angle,G__30834,self__.ctrl_point,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30844.call(null,new cljs.core.Keyword(null,"ctrl-point","ctrl-point",-1570009400),expr__30845))){
return (new math_gears.core.Gear(self__.x,self__.y,self__.radius,self__.diameter,self__.angle,self__.angle_step,G__30834,self__.__meta,self__.__extmap,null));
} else {
return (new math_gears.core.Gear(self__.x,self__.y,self__.radius,self__.diameter,self__.angle,self__.angle_step,self__.ctrl_point,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__30834),null));
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

math_gears.core.Gear.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__30834){
var self__ = this;
var this__4384__auto____$1 = this;
return (new math_gears.core.Gear(self__.x,self__.y,self__.radius,self__.diameter,self__.angle,self__.angle_step,self__.ctrl_point,G__30834,self__.__extmap,self__.__hash));
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
math_gears.core.map__GT_Gear = (function math_gears$core$map__GT_Gear(G__30838){
var extmap__4424__auto__ = (function (){var G__30847 = cljs.core.dissoc.call(null,G__30838,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Keyword(null,"diameter","diameter",1560913323),new cljs.core.Keyword(null,"angle","angle",1622094254),new cljs.core.Keyword(null,"angle-step","angle-step",1369583146),new cljs.core.Keyword(null,"ctrl-point","ctrl-point",-1570009400));
if(cljs.core.record_QMARK_.call(null,G__30838)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__30847);
} else {
return G__30847;
}
})();
return (new math_gears.core.Gear(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__30838),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__30838),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(G__30838),new cljs.core.Keyword(null,"diameter","diameter",1560913323).cljs$core$IFn$_invoke$arity$1(G__30838),new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(G__30838),new cljs.core.Keyword(null,"angle-step","angle-step",1369583146).cljs$core$IFn$_invoke$arity$1(G__30838),new cljs.core.Keyword(null,"ctrl-point","ctrl-point",-1570009400).cljs$core$IFn$_invoke$arity$1(G__30838),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
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

math_gears.core.Shape.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k30850,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__30854 = k30850;
var G__30854__$1 = (((G__30854 instanceof cljs.core.Keyword))?G__30854.fqn:null);
switch (G__30854__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k30850,else__4388__auto__);

}
});

math_gears.core.Shape.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__30855){
var vec__30856 = p__30855;
var k__4408__auto__ = cljs.core.nth.call(null,vec__30856,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__30856,(1),null);
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

math_gears.core.Shape.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30849){
var self__ = this;
var G__30849__$1 = this;
return (new cljs.core.RecordIter((0),G__30849__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"j","j",-1397974765),new cljs.core.Keyword(null,"points","points",-1486596883)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

math_gears.core.Shape.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30851,other30852){
var self__ = this;
var this30851__$1 = this;
return (((!((other30852 == null)))) && ((this30851__$1.constructor === other30852.constructor)) && (cljs.core._EQ_.call(null,this30851__$1.i,other30852.i)) && (cljs.core._EQ_.call(null,this30851__$1.j,other30852.j)) && (cljs.core._EQ_.call(null,this30851__$1.points,other30852.points)) && (cljs.core._EQ_.call(null,this30851__$1.__extmap,other30852.__extmap)));
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

math_gears.core.Shape.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__30849){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__30859 = cljs.core.keyword_identical_QMARK_;
var expr__30860 = k__4393__auto__;
if(cljs.core.truth_(pred__30859.call(null,new cljs.core.Keyword(null,"i","i",-1386841315),expr__30860))){
return (new math_gears.core.Shape(G__30849,self__.j,self__.points,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30859.call(null,new cljs.core.Keyword(null,"j","j",-1397974765),expr__30860))){
return (new math_gears.core.Shape(self__.i,G__30849,self__.points,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30859.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__30860))){
return (new math_gears.core.Shape(self__.i,self__.j,G__30849,self__.__meta,self__.__extmap,null));
} else {
return (new math_gears.core.Shape(self__.i,self__.j,self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__30849),null));
}
}
}
});

math_gears.core.Shape.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"i","i",-1386841315),self__.i,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"j","j",-1397974765),self__.j,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"points","points",-1486596883),self__.points,null))], null),self__.__extmap));
});

math_gears.core.Shape.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__30849){
var self__ = this;
var this__4384__auto____$1 = this;
return (new math_gears.core.Shape(self__.i,self__.j,self__.points,G__30849,self__.__extmap,self__.__hash));
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
math_gears.core.map__GT_Shape = (function math_gears$core$map__GT_Shape(G__30853){
var extmap__4424__auto__ = (function (){var G__30862 = cljs.core.dissoc.call(null,G__30853,new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"j","j",-1397974765),new cljs.core.Keyword(null,"points","points",-1486596883));
if(cljs.core.record_QMARK_.call(null,G__30853)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__30862);
} else {
return G__30862;
}
})();
return (new math_gears.core.Shape(new cljs.core.Keyword(null,"i","i",-1386841315).cljs$core$IFn$_invoke$arity$1(G__30853),new cljs.core.Keyword(null,"j","j",-1397974765).cljs$core$IFn$_invoke$arity$1(G__30853),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__30853),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
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
return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(shape),(function (p1__30864_SHARP_){
return cljs.core.conj.call(null,p1__30864_SHARP_,math_gears.core.__GT_Point.call(null,x,y));
}));
});
/**
 * Finds the control point based on the angle of the gear
 */
math_gears.core.compute_gear_ctrl_point = (function math_gears$core$compute_gear_ctrl_point(gearx,geary,radius,angle){
var vec__30865 = math_gears.core.polar_to_cartesian.call(null,radius,angle);
var x = cljs.core.nth.call(null,vec__30865,(0),null);
var y = cljs.core.nth.call(null,vec__30865,(1),null);
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

var seq__30868_30872 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(shape)));
var chunk__30869_30873 = null;
var count__30870_30874 = (0);
var i__30871_30875 = (0);
while(true){
if((i__30871_30875 < count__30870_30874)){
var pt_30876 = cljs.core._nth.call(null,chunk__30869_30873,i__30871_30875);
quil.core.curve_vertex.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pt_30876),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pt_30876));


var G__30877 = seq__30868_30872;
var G__30878 = chunk__30869_30873;
var G__30879 = count__30870_30874;
var G__30880 = (i__30871_30875 + (1));
seq__30868_30872 = G__30877;
chunk__30869_30873 = G__30878;
count__30870_30874 = G__30879;
i__30871_30875 = G__30880;
continue;
} else {
var temp__5735__auto___30881 = cljs.core.seq.call(null,seq__30868_30872);
if(temp__5735__auto___30881){
var seq__30868_30882__$1 = temp__5735__auto___30881;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30868_30882__$1)){
var c__4550__auto___30883 = cljs.core.chunk_first.call(null,seq__30868_30882__$1);
var G__30884 = cljs.core.chunk_rest.call(null,seq__30868_30882__$1);
var G__30885 = c__4550__auto___30883;
var G__30886 = cljs.core.count.call(null,c__4550__auto___30883);
var G__30887 = (0);
seq__30868_30872 = G__30884;
chunk__30869_30873 = G__30885;
count__30870_30874 = G__30886;
i__30871_30875 = G__30887;
continue;
} else {
var pt_30888 = cljs.core.first.call(null,seq__30868_30882__$1);
quil.core.curve_vertex.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pt_30888),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pt_30888));


var G__30889 = cljs.core.next.call(null,seq__30868_30882__$1);
var G__30890 = null;
var G__30891 = (0);
var G__30892 = (0);
seq__30868_30872 = G__30889;
chunk__30869_30873 = G__30890;
count__30870_30874 = G__30891;
i__30871_30875 = G__30892;
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

var size_30893 = (math_gears.core.gear_size / (20));
quil.core.line.call(null,x,(y - size_30893),x,(y + size_30893));

quil.core.line.call(null,(x - size_30893),y,(x + size_30893),y);

return quil.core.pop_style.call(null);
});
math_gears.core.draw_gear = (function math_gears$core$draw_gear(gear,guideline_type){
quil.core.push_style.call(null);

quil.core.no_fill.call(null);

quil.core.stroke.call(null,cljs.core.deref.call(null,math_gears.core.gear_color));

cljs.core.swap_BANG_.call(null,gear,math_gears.core.inc_angle_BANG_);

math_gears.core.circle.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gear)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gear)),new cljs.core.Keyword(null,"diameter","diameter",1560913323).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gear)));

var vec__30894_30897 = math_gears.core.polar_to_cartesian.call(null,new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gear)),new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gear)));
var x_30898 = cljs.core.nth.call(null,vec__30894_30897,(0),null);
var y_30899 = cljs.core.nth.call(null,vec__30894_30897,(1),null);
quil.core.stroke.call(null,(255),(100));

quil.core.line.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gear)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gear)),(x_30898 + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gear))),(y_30899 + new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gear))));

quil.core.stroke_weight.call(null,(6));

quil.core.stroke.call(null,(255));

quil.core.point.call(null,(x_30898 + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gear))),(y_30899 + new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gear))));

quil.core.stroke_weight.call(null,(1));

if(cljs.core._EQ_.call(null,guideline_type,new cljs.core.Keyword(null,"vertical","vertical",718696748))){
quil.core.line.call(null,(x_30898 + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gear))),(0),(x_30898 + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gear))),((y_30899 + math_gears.core.h) + new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gear))));
} else {
if(cljs.core._EQ_.call(null,guideline_type,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475))){
quil.core.line.call(null,(0),(y_30899 + new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gear))),((x_30898 + math_gears.core.w) + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gear))),(y_30899 + new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gear))));
} else {
}
}

return quil.core.pop_style.call(null);
});
math_gears.core.xgears = cljs.core.mapv.call(null,(function (p1__30900_SHARP_){
return math_gears.core.new_gear.call(null,((p1__30900_SHARP_ * math_gears.core.gear_size) + (math_gears.core.gear_size * 1.5)),(math_gears.core.gear_size / (2)),((1) + p1__30900_SHARP_));
}),cljs.core.range.call(null,math_gears.core.gear_count));
math_gears.core.ygears = cljs.core.mapv.call(null,(function (p1__30901_SHARP_){
return math_gears.core.new_gear.call(null,(math_gears.core.gear_size / (2)),((p1__30901_SHARP_ * math_gears.core.gear_size) + (math_gears.core.gear_size * 1.5)),((1) + p1__30901_SHARP_));
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

var seq__30902_30954 = cljs.core.seq.call(null,math_gears.core.xgears);
var chunk__30903_30955 = null;
var count__30904_30956 = (0);
var i__30905_30957 = (0);
while(true){
if((i__30905_30957 < count__30904_30956)){
var gear_30958 = cljs.core._nth.call(null,chunk__30903_30955,i__30905_30957);
math_gears.core.draw_gear.call(null,gear_30958,new cljs.core.Keyword(null,"vertical","vertical",718696748));


var G__30959 = seq__30902_30954;
var G__30960 = chunk__30903_30955;
var G__30961 = count__30904_30956;
var G__30962 = (i__30905_30957 + (1));
seq__30902_30954 = G__30959;
chunk__30903_30955 = G__30960;
count__30904_30956 = G__30961;
i__30905_30957 = G__30962;
continue;
} else {
var temp__5735__auto___30963 = cljs.core.seq.call(null,seq__30902_30954);
if(temp__5735__auto___30963){
var seq__30902_30964__$1 = temp__5735__auto___30963;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30902_30964__$1)){
var c__4550__auto___30965 = cljs.core.chunk_first.call(null,seq__30902_30964__$1);
var G__30966 = cljs.core.chunk_rest.call(null,seq__30902_30964__$1);
var G__30967 = c__4550__auto___30965;
var G__30968 = cljs.core.count.call(null,c__4550__auto___30965);
var G__30969 = (0);
seq__30902_30954 = G__30966;
chunk__30903_30955 = G__30967;
count__30904_30956 = G__30968;
i__30905_30957 = G__30969;
continue;
} else {
var gear_30970 = cljs.core.first.call(null,seq__30902_30964__$1);
math_gears.core.draw_gear.call(null,gear_30970,new cljs.core.Keyword(null,"vertical","vertical",718696748));


var G__30971 = cljs.core.next.call(null,seq__30902_30964__$1);
var G__30972 = null;
var G__30973 = (0);
var G__30974 = (0);
seq__30902_30954 = G__30971;
chunk__30903_30955 = G__30972;
count__30904_30956 = G__30973;
i__30905_30957 = G__30974;
continue;
}
} else {
}
}
break;
}

var seq__30906_30975 = cljs.core.seq.call(null,math_gears.core.ygears);
var chunk__30907_30976 = null;
var count__30908_30977 = (0);
var i__30909_30978 = (0);
while(true){
if((i__30909_30978 < count__30908_30977)){
var gear_30979 = cljs.core._nth.call(null,chunk__30907_30976,i__30909_30978);
math_gears.core.draw_gear.call(null,gear_30979,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475));


var G__30980 = seq__30906_30975;
var G__30981 = chunk__30907_30976;
var G__30982 = count__30908_30977;
var G__30983 = (i__30909_30978 + (1));
seq__30906_30975 = G__30980;
chunk__30907_30976 = G__30981;
count__30908_30977 = G__30982;
i__30909_30978 = G__30983;
continue;
} else {
var temp__5735__auto___30984 = cljs.core.seq.call(null,seq__30906_30975);
if(temp__5735__auto___30984){
var seq__30906_30985__$1 = temp__5735__auto___30984;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30906_30985__$1)){
var c__4550__auto___30986 = cljs.core.chunk_first.call(null,seq__30906_30985__$1);
var G__30987 = cljs.core.chunk_rest.call(null,seq__30906_30985__$1);
var G__30988 = c__4550__auto___30986;
var G__30989 = cljs.core.count.call(null,c__4550__auto___30986);
var G__30990 = (0);
seq__30906_30975 = G__30987;
chunk__30907_30976 = G__30988;
count__30908_30977 = G__30989;
i__30909_30978 = G__30990;
continue;
} else {
var gear_30991 = cljs.core.first.call(null,seq__30906_30985__$1);
math_gears.core.draw_gear.call(null,gear_30991,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475));


var G__30992 = cljs.core.next.call(null,seq__30906_30985__$1);
var G__30993 = null;
var G__30994 = (0);
var G__30995 = (0);
seq__30906_30975 = G__30992;
chunk__30907_30976 = G__30993;
count__30908_30977 = G__30994;
i__30909_30978 = G__30995;
continue;
}
} else {
}
}
break;
}

var seq__30910 = cljs.core.seq.call(null,cljs.core.range.call(null,math_gears.core.gear_count));
var chunk__30915 = null;
var count__30916 = (0);
var i__30917 = (0);
while(true){
if((i__30917 < count__30916)){
var i = cljs.core._nth.call(null,chunk__30915,i__30917);
var seq__30918_30996 = cljs.core.seq.call(null,cljs.core.range.call(null,math_gears.core.gear_count));
var chunk__30919_30997 = null;
var count__30920_30998 = (0);
var i__30921_30999 = (0);
while(true){
if((i__30921_30999 < count__30920_30998)){
var j_31000 = cljs.core._nth.call(null,chunk__30919_30997,i__30921_30999);
var xgear_31001 = cljs.core.deref.call(null,cljs.core.nth.call(null,math_gears.core.xgears,i));
var ygear_31002 = cljs.core.deref.call(null,cljs.core.nth.call(null,math_gears.core.ygears,j_31000));
var x_31003 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ctrl-point","ctrl-point",-1570009400).cljs$core$IFn$_invoke$arity$1(xgear_31001));
var y_31004 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ctrl-point","ctrl-point",-1570009400).cljs$core$IFn$_invoke$arity$1(ygear_31002));
var shape_31005 = math_gears.core.get_shape.call(null,i,j_31000);
if(((math_gears.core.rotation_done_QMARK_.call(null,xgear_31001)) && (math_gears.core.rotation_done_QMARK_.call(null,ygear_31002)))){
} else {
math_gears.core.draw_cross.call(null,x_31003,y_31004);

math_gears.core.inc_shape_BANG_.call(null,shape_31005,x_31003,y_31004);
}

var gr__30185__auto___31006 = cljs.core.deref.call(null,math_gears.core.stroke_buffer);
var _STAR_graphics_STAR__orig_val__30942_31007 = quil.core._STAR_graphics_STAR_;
var _STAR_graphics_STAR__temp_val__30943_31008 = gr__30185__auto___31006;
quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__temp_val__30943_31008;

try{quil.core.begin_draw.call(null,gr__30185__auto___31006);

math_gears.core.draw_shape.call(null,shape_31005);

quil.core.end_draw.call(null,gr__30185__auto___31006);
}finally {quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__orig_val__30942_31007;
}

var G__31009 = seq__30918_30996;
var G__31010 = chunk__30919_30997;
var G__31011 = count__30920_30998;
var G__31012 = (i__30921_30999 + (1));
seq__30918_30996 = G__31009;
chunk__30919_30997 = G__31010;
count__30920_30998 = G__31011;
i__30921_30999 = G__31012;
continue;
} else {
var temp__5735__auto___31013 = cljs.core.seq.call(null,seq__30918_30996);
if(temp__5735__auto___31013){
var seq__30918_31014__$1 = temp__5735__auto___31013;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30918_31014__$1)){
var c__4550__auto___31015 = cljs.core.chunk_first.call(null,seq__30918_31014__$1);
var G__31016 = cljs.core.chunk_rest.call(null,seq__30918_31014__$1);
var G__31017 = c__4550__auto___31015;
var G__31018 = cljs.core.count.call(null,c__4550__auto___31015);
var G__31019 = (0);
seq__30918_30996 = G__31016;
chunk__30919_30997 = G__31017;
count__30920_30998 = G__31018;
i__30921_30999 = G__31019;
continue;
} else {
var j_31020 = cljs.core.first.call(null,seq__30918_31014__$1);
var xgear_31021 = cljs.core.deref.call(null,cljs.core.nth.call(null,math_gears.core.xgears,i));
var ygear_31022 = cljs.core.deref.call(null,cljs.core.nth.call(null,math_gears.core.ygears,j_31020));
var x_31023 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ctrl-point","ctrl-point",-1570009400).cljs$core$IFn$_invoke$arity$1(xgear_31021));
var y_31024 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ctrl-point","ctrl-point",-1570009400).cljs$core$IFn$_invoke$arity$1(ygear_31022));
var shape_31025 = math_gears.core.get_shape.call(null,i,j_31020);
if(((math_gears.core.rotation_done_QMARK_.call(null,xgear_31021)) && (math_gears.core.rotation_done_QMARK_.call(null,ygear_31022)))){
} else {
math_gears.core.draw_cross.call(null,x_31023,y_31024);

math_gears.core.inc_shape_BANG_.call(null,shape_31025,x_31023,y_31024);
}

var gr__30185__auto___31026 = cljs.core.deref.call(null,math_gears.core.stroke_buffer);
var _STAR_graphics_STAR__orig_val__30944_31027 = quil.core._STAR_graphics_STAR_;
var _STAR_graphics_STAR__temp_val__30945_31028 = gr__30185__auto___31026;
quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__temp_val__30945_31028;

try{quil.core.begin_draw.call(null,gr__30185__auto___31026);

math_gears.core.draw_shape.call(null,shape_31025);

quil.core.end_draw.call(null,gr__30185__auto___31026);
}finally {quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__orig_val__30944_31027;
}

var G__31029 = cljs.core.next.call(null,seq__30918_31014__$1);
var G__31030 = null;
var G__31031 = (0);
var G__31032 = (0);
seq__30918_30996 = G__31029;
chunk__30919_30997 = G__31030;
count__30920_30998 = G__31031;
i__30921_30999 = G__31032;
continue;
}
} else {
}
}
break;
}

var G__31033 = seq__30910;
var G__31034 = chunk__30915;
var G__31035 = count__30916;
var G__31036 = (i__30917 + (1));
seq__30910 = G__31033;
chunk__30915 = G__31034;
count__30916 = G__31035;
i__30917 = G__31036;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__30910);
if(temp__5735__auto__){
var seq__30910__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30910__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__30910__$1);
var G__31037 = cljs.core.chunk_rest.call(null,seq__30910__$1);
var G__31038 = c__4550__auto__;
var G__31039 = cljs.core.count.call(null,c__4550__auto__);
var G__31040 = (0);
seq__30910 = G__31037;
chunk__30915 = G__31038;
count__30916 = G__31039;
i__30917 = G__31040;
continue;
} else {
var i = cljs.core.first.call(null,seq__30910__$1);
var seq__30911_31041 = cljs.core.seq.call(null,cljs.core.range.call(null,math_gears.core.gear_count));
var chunk__30912_31042 = null;
var count__30913_31043 = (0);
var i__30914_31044 = (0);
while(true){
if((i__30914_31044 < count__30913_31043)){
var j_31045 = cljs.core._nth.call(null,chunk__30912_31042,i__30914_31044);
var xgear_31046 = cljs.core.deref.call(null,cljs.core.nth.call(null,math_gears.core.xgears,i));
var ygear_31047 = cljs.core.deref.call(null,cljs.core.nth.call(null,math_gears.core.ygears,j_31045));
var x_31048 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ctrl-point","ctrl-point",-1570009400).cljs$core$IFn$_invoke$arity$1(xgear_31046));
var y_31049 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ctrl-point","ctrl-point",-1570009400).cljs$core$IFn$_invoke$arity$1(ygear_31047));
var shape_31050 = math_gears.core.get_shape.call(null,i,j_31045);
if(((math_gears.core.rotation_done_QMARK_.call(null,xgear_31046)) && (math_gears.core.rotation_done_QMARK_.call(null,ygear_31047)))){
} else {
math_gears.core.draw_cross.call(null,x_31048,y_31049);

math_gears.core.inc_shape_BANG_.call(null,shape_31050,x_31048,y_31049);
}

var gr__30185__auto___31051 = cljs.core.deref.call(null,math_gears.core.stroke_buffer);
var _STAR_graphics_STAR__orig_val__30950_31052 = quil.core._STAR_graphics_STAR_;
var _STAR_graphics_STAR__temp_val__30951_31053 = gr__30185__auto___31051;
quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__temp_val__30951_31053;

try{quil.core.begin_draw.call(null,gr__30185__auto___31051);

math_gears.core.draw_shape.call(null,shape_31050);

quil.core.end_draw.call(null,gr__30185__auto___31051);
}finally {quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__orig_val__30950_31052;
}

var G__31054 = seq__30911_31041;
var G__31055 = chunk__30912_31042;
var G__31056 = count__30913_31043;
var G__31057 = (i__30914_31044 + (1));
seq__30911_31041 = G__31054;
chunk__30912_31042 = G__31055;
count__30913_31043 = G__31056;
i__30914_31044 = G__31057;
continue;
} else {
var temp__5735__auto___31058__$1 = cljs.core.seq.call(null,seq__30911_31041);
if(temp__5735__auto___31058__$1){
var seq__30911_31059__$1 = temp__5735__auto___31058__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30911_31059__$1)){
var c__4550__auto___31060 = cljs.core.chunk_first.call(null,seq__30911_31059__$1);
var G__31061 = cljs.core.chunk_rest.call(null,seq__30911_31059__$1);
var G__31062 = c__4550__auto___31060;
var G__31063 = cljs.core.count.call(null,c__4550__auto___31060);
var G__31064 = (0);
seq__30911_31041 = G__31061;
chunk__30912_31042 = G__31062;
count__30913_31043 = G__31063;
i__30914_31044 = G__31064;
continue;
} else {
var j_31065 = cljs.core.first.call(null,seq__30911_31059__$1);
var xgear_31066 = cljs.core.deref.call(null,cljs.core.nth.call(null,math_gears.core.xgears,i));
var ygear_31067 = cljs.core.deref.call(null,cljs.core.nth.call(null,math_gears.core.ygears,j_31065));
var x_31068 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ctrl-point","ctrl-point",-1570009400).cljs$core$IFn$_invoke$arity$1(xgear_31066));
var y_31069 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ctrl-point","ctrl-point",-1570009400).cljs$core$IFn$_invoke$arity$1(ygear_31067));
var shape_31070 = math_gears.core.get_shape.call(null,i,j_31065);
if(((math_gears.core.rotation_done_QMARK_.call(null,xgear_31066)) && (math_gears.core.rotation_done_QMARK_.call(null,ygear_31067)))){
} else {
math_gears.core.draw_cross.call(null,x_31068,y_31069);

math_gears.core.inc_shape_BANG_.call(null,shape_31070,x_31068,y_31069);
}

var gr__30185__auto___31071 = cljs.core.deref.call(null,math_gears.core.stroke_buffer);
var _STAR_graphics_STAR__orig_val__30952_31072 = quil.core._STAR_graphics_STAR_;
var _STAR_graphics_STAR__temp_val__30953_31073 = gr__30185__auto___31071;
quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__temp_val__30953_31073;

try{quil.core.begin_draw.call(null,gr__30185__auto___31071);

math_gears.core.draw_shape.call(null,shape_31070);

quil.core.end_draw.call(null,gr__30185__auto___31071);
}finally {quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__orig_val__30952_31072;
}

var G__31074 = cljs.core.next.call(null,seq__30911_31059__$1);
var G__31075 = null;
var G__31076 = (0);
var G__31077 = (0);
seq__30911_31041 = G__31074;
chunk__30912_31042 = G__31075;
count__30913_31043 = G__31076;
i__30914_31044 = G__31077;
continue;
}
} else {
}
}
break;
}

var G__31078 = cljs.core.next.call(null,seq__30910__$1);
var G__31079 = null;
var G__31080 = (0);
var G__31081 = (0);
seq__30910 = G__31078;
chunk__30915 = G__31079;
count__30916 = G__31080;
i__30917 = G__31081;
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
var G__31082__delegate = function (args){
return cljs.core.apply.call(null,math_gears.core.setup,args);
};
var G__31082 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31083__i = 0, G__31083__a = new Array(arguments.length -  0);
while (G__31083__i < G__31083__a.length) {G__31083__a[G__31083__i] = arguments[G__31083__i + 0]; ++G__31083__i;}
  args = new cljs.core.IndexedSeq(G__31083__a,0,null);
} 
return G__31082__delegate.call(this,args);};
G__31082.cljs$lang$maxFixedArity = 0;
G__31082.cljs$lang$applyTo = (function (arglist__31084){
var args = cljs.core.seq(arglist__31084);
return G__31082__delegate(args);
});
G__31082.cljs$core$IFn$_invoke$arity$variadic = G__31082__delegate;
return G__31082;
})()
:math_gears.core.setup),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,math_gears.core.draw))?(function() { 
var G__31085__delegate = function (args){
return cljs.core.apply.call(null,math_gears.core.draw,args);
};
var G__31085 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31086__i = 0, G__31086__a = new Array(arguments.length -  0);
while (G__31086__i < G__31086__a.length) {G__31086__a[G__31086__i] = arguments[G__31086__i + 0]; ++G__31086__i;}
  args = new cljs.core.IndexedSeq(G__31086__a,0,null);
} 
return G__31085__delegate.call(this,args);};
G__31085.cljs$lang$maxFixedArity = 0;
G__31085.cljs$lang$applyTo = (function (arglist__31087){
var args = cljs.core.seq(arglist__31087);
return G__31085__delegate(args);
});
G__31085.cljs$core$IFn$_invoke$arity$variadic = G__31085__delegate;
return G__31085;
})()
:math_gears.core.draw));
});
goog.exportSymbol('math_gears.core.math_gears', math_gears.core.math_gears);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__29773__29774__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__29773__29774__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),math_gears.core.math_gears,new cljs.core.Keyword(null,"host-id","host-id",742376279),"math-gears"], null));
}
});
goog.exportSymbol('math_gears.core.run_sketch', math_gears.core.run_sketch);

//# sourceMappingURL=core.js.map?rel=1703643710533
