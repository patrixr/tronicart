// Compiled by ClojureScript 1.10.520 {}
goog.provide('io.tronica.core.colors');
goog.require('cljs.core');
goog.require('quil.core');
io.tronica.core.colors.SAGE = "#c9cba3";
io.tronica.core.colors.PEACH_YELLOW = "#ffe1a8";
io.tronica.core.colors.BITTER_SWEET = "#e26d5c";
io.tronica.core.colors.WINE = "#723d46";
io.tronica.core.colors.VAN_DYKE = "#472d30";
/**
 * Returns a copy of a color but with a different opacity
 */
io.tronica.core.colors.with_opacity = (function io$tronica$core$colors$with_opacity(color,opacity){
return quil.core.color.call(null,quil.core.red.call(null,color),quil.core.green.call(null,color),quil.core.blue.call(null,color),opacity);
});
/**
 * Returns a random Quil color
 */
io.tronica.core.colors.random_color = (function io$tronica$core$colors$random_color(){
return quil.core.color.call(null,quil.core.random.call(null,(0),(255)),quil.core.random.call(null,(0),(255)),quil.core.random.call(null,(0),(255)));
});

//# sourceMappingURL=colors.js.map?rel=1704789532720
