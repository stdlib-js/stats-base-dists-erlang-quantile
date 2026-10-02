"use strict";var a=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var n=a(function(x,i){
var c=require('@stdlib/math-base-assert-is-nonnegative-integer/dist'),q=require('@stdlib/stats-base-dists-gamma-quantile/dist');function v(e,r,t){return c(r)?q(e,r,t):NaN}i.exports=v
});var o=a(function(G,u){
var f=require('@stdlib/math-base-assert-is-nonnegative-integer/dist'),N=require('@stdlib/utils-constant-function/dist'),y=require('@stdlib/stats-base-dists-gamma-quantile/dist').factory;function m(e,r){return f(e)?y(e,r):N(NaN)}u.exports=m
});var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),s=n(),l=o();g(s,"factory",l);module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
