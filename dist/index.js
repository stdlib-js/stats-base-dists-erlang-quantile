"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var i=t(function(x,a){
var c=require('@stdlib/math-base-assert-is-nonnegative-integer/dist'),q=require('@stdlib/stats-base-dists-gamma-quantile/dist');function v(e,r,s){return c(r)?q(e,r,s):NaN}a.exports=v
});var u=t(function(G,n){
var f=require('@stdlib/math-base-assert-is-nonnegative-integer/dist'),N=require('@stdlib/utils-constant-function/dist'),y=require('@stdlib/stats-base-dists-gamma-quantile/dist').factory;function m(e,r){return f(e)?y(e,r):N(NaN)}n.exports=m
});var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=i(),l=u();g(o,"factory",l);module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
