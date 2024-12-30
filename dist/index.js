"use strict";var d=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var l=d(function(_e,I){I.exports={objectMode:!1,encoding:null,sep:"\n",copy:!0,siter:1e308}});var y=d(function(je,b){
var C=require('@stdlib/assert-is-plain-object/dist'),a=require('@stdlib/assert-has-own-property/dist'),J=require('@stdlib/assert-is-boolean/dist').isPrimitive,z=require('@stdlib/assert-is-nonnegative-number/dist').isPrimitive,m=require('@stdlib/assert-is-string/dist').isPrimitive,B=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,D=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,o=require('@stdlib/error-tools-fmtprodmsg/dist');function U(e,r){return C(r)?a(r,"sep")&&(e.sep=r.sep,!m(e.sep))?new TypeError(o('0qt2W',"sep",e.sep)):a(r,"objectMode")&&(e.objectMode=r.objectMode,!J(e.objectMode))?new TypeError(o('0qt2o',"objectMode",e.objectMode)):a(r,"encoding")&&(e.encoding=r.encoding,!m(e.encoding)&&e.encoding!==null)?new TypeError(o('0qt7n',"encoding",e.encoding)):a(r,"highWaterMark")&&(e.highWaterMark=r.highWaterMark,!z(e.highWaterMark))?new TypeError(o('0qt4k',"highWaterMark",e.highWaterMark)):a(r,"iter")&&(e.iter=r.iter,!D(e.iter))?new TypeError(o('0qt2t',"iter",e.iter)):a(r,"siter")&&(e.siter=r.siter,!B(e.siter))?new TypeError(o('0qt3P',"siter",e.siter)):(a(r,"prng")&&(e.prng=r.prng),a(r,"seed")&&(e.seed=r.seed),a(r,"state")&&(e.state=r.state),a(r,"copy")&&(e.copy=r.copy),null):new TypeError(o('0qt2V',r));}b.exports=U
});var q=d(function(Me,p){
var H=require("debug"),K=H("random:streams:cauchy");p.exports=K
});var v=d(function(Oe,O){
var M=require("readable-stream").Readable,Q=require('@stdlib/assert-is-positive-number/dist').isPrimitive,X=require('@stdlib/assert-is-number/dist').isPrimitive,Y=require('@stdlib/math-base-assert-is-nan/dist'),Z=require('@stdlib/assert-is-error/dist'),$=require('@stdlib/object-assign/dist'),x=require('@stdlib/utils-inherit/dist'),w=require('@stdlib/utils-define-nonenumerable-property/dist'),u=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),h=require('@stdlib/utils-define-read-only-accessor/dist'),ee=require('@stdlib/utils-define-read-write-accessor/dist'),re=require('@stdlib/random-base-cauchy/dist').factory,_=require('@stdlib/buffer-from-string/dist'),te=require('@stdlib/utils-next-tick/dist'),j=require('@stdlib/error-tools-fmtprodmsg/dist'),ie=l(),ne=y(),g=q();function ae(){return this._prng.seed}function se(){return this._prng.seedLength}function ue(){return this._prng.stateLength}function oe(){return this._prng.byteLength}function de(){return this._prng.state}function ge(e){this._prng.state=e}function he(){var e,r;if(!this._destroyed)for(e=!0;e;){if(this._i+=1,this._i>this._iter)return g("Finished generating pseudorandom numbers."),this.push(null);r=this._prng(),g("Generated a new pseudorandom number. Value: %d. Iter: %d.",r,this._i),this._objectMode===!1&&(r=r.toString(),this._i===1?r=_(r):r=_(this._sep+r)),e=this.push(r),this._i%this._siter===0&&this.emit("state",this.state)}}function ve(e){var r;if(this._destroyed)return g("Attempted to destroy an already destroyed stream."),this;return r=this,this._destroyed=!0,te(n),this;function n(){e&&(g("Stream was destroyed due to an error. Error: %s.",Z(e)?e.message:JSON.stringify(e)),r.emit("error",e)),g("Closing the stream..."),r.emit("close")}}function i(e,r,n){var t,s;if(!(this instanceof i))return arguments.length>2?new i(e,r,n):new i(e,r);if(!X(e)||Y(e))throw new TypeError(j('0qt6v',e));if(!Q(r))throw new TypeError(j('0qt72',r));if(t=$({},ie),arguments.length>2&&(s=ne(t,n),s))throw s;return g("Creating a readable stream configured with the following options: %s.",JSON.stringify(t)),M.call(this,t),w(this,"_destroyed",!1),u(this,"_objectMode",t.objectMode),u(this,"_sep",t.sep),u(this,"_iter",t.iter),u(this,"_siter",t.siter),w(this,"_i",0),u(this,"_prng",re(e,r,t)),u(this,"PRNG",this._prng.PRNG),this}x(i,M);h(i.prototype,"seed",ae);h(i.prototype,"seedLength",se);ee(i.prototype,"state",de,ge);h(i.prototype,"stateLength",ue);h(i.prototype,"byteLength",oe);u(i.prototype,"_read",he);u(i.prototype,"destroy",ve);O.exports=i
});var E=d(function(Se,S){
var ce=require('@stdlib/assert-is-plain-object/dist'),fe=require('@stdlib/object-assign/dist'),le=require('@stdlib/error-tools-fmtprodmsg/dist'),me=v();function be(e,r,n){var t;if(arguments.length>2){if(t=n,!ce(t))throw new TypeError(le('0qt2V',t));t=fe({},n)}else t={};return t.objectMode=!0,new me(e,r,t)}S.exports=be
});var k=d(function(Ee,L){
var N=require('@stdlib/assert-is-plain-object/dist'),T=require('@stdlib/object-assign/dist'),P=require('@stdlib/error-tools-fmtprodmsg/dist'),R=v();function ye(e,r,n){var t,s,c;if(t=arguments.length,t===1){if(!N(e))throw new TypeError(P('0qt2V',e));s=T({},e)}else if(t>2){if(!N(n))throw new TypeError(P('0qt2V',n));s=T({},n)}else s={};return t<2?c=W:c=A,c;function W(F,G){return new R(F,G,s)}function A(){return new R(e,r,s)}}L.exports=ye
});var V=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),f=v(),pe=E(),qe=k();V(f,"objectMode",pe);V(f,"factory",qe);module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
