(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))u(p);new MutationObserver(p=>{for(const y of p)if(y.type==="childList")for(const E of y.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&u(E)}).observe(document,{childList:!0,subtree:!0});function o(p){const y={};return p.integrity&&(y.integrity=p.integrity),p.referrerPolicy&&(y.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?y.credentials="include":p.crossOrigin==="anonymous"?y.credentials="omit":y.credentials="same-origin",y}function u(p){if(p.ep)return;p.ep=!0;const y=o(p);fetch(p.href,y)}})();function rb(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var go={exports:{}},Sr={},vo={exports:{}},Eo={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _f;function ib(){return _f||(_f=1,function(r){function i(X,me){var re=X.length;X.push(me);e:for(;0<re;){var Me=re-1>>>1,S=X[Me];if(0<p(S,me))X[Me]=me,X[re]=S,re=Me;else break e}}function o(X){return X.length===0?null:X[0]}function u(X){if(X.length===0)return null;var me=X[0],re=X.pop();if(re!==me){X[0]=re;e:for(var Me=0,S=X.length,V=S>>>1;Me<V;){var ae=2*(Me+1)-1,te=X[ae],K=ae+1,Ee=X[K];if(0>p(te,re))K<S&&0>p(Ee,te)?(X[Me]=Ee,X[K]=re,Me=K):(X[Me]=te,X[ae]=re,Me=ae);else if(K<S&&0>p(Ee,re))X[Me]=Ee,X[K]=re,Me=K;else break e}}return me}function p(X,me){var re=X.sortIndex-me.sortIndex;return re!==0?re:X.id-me.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var y=performance;r.unstable_now=function(){return y.now()}}else{var E=Date,w=E.now();r.unstable_now=function(){return E.now()-w}}var D=[],N=[],z=1,M=null,q=3,B=!1,Q=!1,Z=!1,W=typeof setTimeout=="function"?setTimeout:null,ge=typeof clearTimeout=="function"?clearTimeout:null,ce=typeof setImmediate<"u"?setImmediate:null;function ze(X){for(var me=o(N);me!==null;){if(me.callback===null)u(N);else if(me.startTime<=X)u(N),me.sortIndex=me.expirationTime,i(D,me);else break;me=o(N)}}function Be(X){if(Z=!1,ze(X),!Q)if(o(D)!==null)Q=!0,pn();else{var me=o(N);me!==null&&gt(Be,me.startTime-X)}}var se=!1,ct=-1,Bn=5,qn=-1;function le(){return!(r.unstable_now()-qn<Bn)}function xe(){if(se){var X=r.unstable_now();qn=X;var me=!0;try{e:{Q=!1,Z&&(Z=!1,ge(ct),ct=-1),B=!0;var re=q;try{t:{for(ze(X),M=o(D);M!==null&&!(M.expirationTime>X&&le());){var Me=M.callback;if(typeof Me=="function"){M.callback=null,q=M.priorityLevel;var S=Me(M.expirationTime<=X);if(X=r.unstable_now(),typeof S=="function"){M.callback=S,ze(X),me=!0;break t}M===o(D)&&u(D),ze(X)}else u(D);M=o(D)}if(M!==null)me=!0;else{var V=o(N);V!==null&&gt(Be,V.startTime-X),me=!1}}break e}finally{M=null,q=re,B=!1}me=void 0}}finally{me?zt():se=!1}}}var zt;if(typeof ce=="function")zt=function(){ce(xe)};else if(typeof MessageChannel<"u"){var hn=new MessageChannel,nn=hn.port2;hn.port1.onmessage=xe,zt=function(){nn.postMessage(null)}}else zt=function(){W(xe,0)};function pn(){se||(se=!0,zt())}function gt(X,me){ct=W(function(){X(r.unstable_now())},me)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(X){X.callback=null},r.unstable_continueExecution=function(){Q||B||(Q=!0,pn())},r.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Bn=0<X?Math.floor(1e3/X):5},r.unstable_getCurrentPriorityLevel=function(){return q},r.unstable_getFirstCallbackNode=function(){return o(D)},r.unstable_next=function(X){switch(q){case 1:case 2:case 3:var me=3;break;default:me=q}var re=q;q=me;try{return X()}finally{q=re}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(X,me){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var re=q;q=X;try{return me()}finally{q=re}},r.unstable_scheduleCallback=function(X,me,re){var Me=r.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?Me+re:Me):re=Me,X){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=re+S,X={id:z++,callback:me,priorityLevel:X,startTime:re,expirationTime:S,sortIndex:-1},re>Me?(X.sortIndex=re,i(N,X),o(D)===null&&X===o(N)&&(Z?(ge(ct),ct=-1):Z=!0,gt(Be,re-Me))):(X.sortIndex=S,i(D,X),Q||B||(Q=!0,pn())),X},r.unstable_shouldYield=le,r.unstable_wrapCallback=function(X){var me=q;return function(){var re=q;q=me;try{return X.apply(this,arguments)}finally{q=re}}}}(Eo)),Eo}var Hf;function cb(){return Hf||(Hf=1,vo.exports=ib()),vo.exports}var Ao={exports:{}},fe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tf;function sb(){if(Tf)return fe;Tf=1;var r=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),y=Symbol.for("react.consumer"),E=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),N=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),M=Symbol.iterator;function q(S){return S===null||typeof S!="object"?null:(S=M&&S[M]||S["@@iterator"],typeof S=="function"?S:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q=Object.assign,Z={};function W(S,V,ae){this.props=S,this.context=V,this.refs=Z,this.updater=ae||B}W.prototype.isReactComponent={},W.prototype.setState=function(S,V){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,V,"setState")},W.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function ge(){}ge.prototype=W.prototype;function ce(S,V,ae){this.props=S,this.context=V,this.refs=Z,this.updater=ae||B}var ze=ce.prototype=new ge;ze.constructor=ce,Q(ze,W.prototype),ze.isPureReactComponent=!0;var Be=Array.isArray,se={H:null,A:null,T:null,S:null},ct=Object.prototype.hasOwnProperty;function Bn(S,V,ae,te,K,Ee){return ae=Ee.ref,{$$typeof:r,type:S,key:V,ref:ae!==void 0?ae:null,props:Ee}}function qn(S,V){return Bn(S.type,V,void 0,void 0,void 0,S.props)}function le(S){return typeof S=="object"&&S!==null&&S.$$typeof===r}function xe(S){var V={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(ae){return V[ae]})}var zt=/\/+/g;function hn(S,V){return typeof S=="object"&&S!==null&&S.key!=null?xe(""+S.key):V.toString(36)}function nn(){}function pn(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(nn,nn):(S.status="pending",S.then(function(V){S.status==="pending"&&(S.status="fulfilled",S.value=V)},function(V){S.status==="pending"&&(S.status="rejected",S.reason=V)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function gt(S,V,ae,te,K){var Ee=typeof S;(Ee==="undefined"||Ee==="boolean")&&(S=null);var he=!1;if(S===null)he=!0;else switch(Ee){case"bigint":case"string":case"number":he=!0;break;case"object":switch(S.$$typeof){case r:case i:he=!0;break;case z:return he=S._init,gt(he(S._payload),V,ae,te,K)}}if(he)return K=K(S),he=te===""?"."+hn(S,0):te,Be(K)?(ae="",he!=null&&(ae=he.replace(zt,"$&/")+"/"),gt(K,V,ae,"",function(Je){return Je})):K!=null&&(le(K)&&(K=qn(K,ae+(K.key==null||S&&S.key===K.key?"":(""+K.key).replace(zt,"$&/")+"/")+he)),V.push(K)),1;he=0;var pt=te===""?".":te+":";if(Be(S))for(var Ce=0;Ce<S.length;Ce++)te=S[Ce],Ee=pt+hn(te,Ce),he+=gt(te,V,ae,Ee,K);else if(Ce=q(S),typeof Ce=="function")for(S=Ce.call(S),Ce=0;!(te=S.next()).done;)te=te.value,Ee=pt+hn(te,Ce++),he+=gt(te,V,ae,Ee,K);else if(Ee==="object"){if(typeof S.then=="function")return gt(pn(S),V,ae,te,K);throw V=String(S),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return he}function X(S,V,ae){if(S==null)return S;var te=[],K=0;return gt(S,te,"","",function(Ee){return V.call(ae,Ee,K++)}),te}function me(S){if(S._status===-1){var V=S._result;V=V(),V.then(function(ae){(S._status===0||S._status===-1)&&(S._status=1,S._result=ae)},function(ae){(S._status===0||S._status===-1)&&(S._status=2,S._result=ae)}),S._status===-1&&(S._status=0,S._result=V)}if(S._status===1)return S._result.default;throw S._result}var re=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)};function Me(){}return fe.Children={map:X,forEach:function(S,V,ae){X(S,function(){V.apply(this,arguments)},ae)},count:function(S){var V=0;return X(S,function(){V++}),V},toArray:function(S){return X(S,function(V){return V})||[]},only:function(S){if(!le(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},fe.Component=W,fe.Fragment=o,fe.Profiler=p,fe.PureComponent=ce,fe.StrictMode=u,fe.Suspense=D,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=se,fe.act=function(){throw Error("act(...) is not supported in production builds of React.")},fe.cache=function(S){return function(){return S.apply(null,arguments)}},fe.cloneElement=function(S,V,ae){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var te=Q({},S.props),K=S.key,Ee=void 0;if(V!=null)for(he in V.ref!==void 0&&(Ee=void 0),V.key!==void 0&&(K=""+V.key),V)!ct.call(V,he)||he==="key"||he==="__self"||he==="__source"||he==="ref"&&V.ref===void 0||(te[he]=V[he]);var he=arguments.length-2;if(he===1)te.children=ae;else if(1<he){for(var pt=Array(he),Ce=0;Ce<he;Ce++)pt[Ce]=arguments[Ce+2];te.children=pt}return Bn(S.type,K,void 0,void 0,Ee,te)},fe.createContext=function(S){return S={$$typeof:E,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:y,_context:S},S},fe.createElement=function(S,V,ae){var te,K={},Ee=null;if(V!=null)for(te in V.key!==void 0&&(Ee=""+V.key),V)ct.call(V,te)&&te!=="key"&&te!=="__self"&&te!=="__source"&&(K[te]=V[te]);var he=arguments.length-2;if(he===1)K.children=ae;else if(1<he){for(var pt=Array(he),Ce=0;Ce<he;Ce++)pt[Ce]=arguments[Ce+2];K.children=pt}if(S&&S.defaultProps)for(te in he=S.defaultProps,he)K[te]===void 0&&(K[te]=he[te]);return Bn(S,Ee,void 0,void 0,null,K)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(S){return{$$typeof:w,render:S}},fe.isValidElement=le,fe.lazy=function(S){return{$$typeof:z,_payload:{_status:-1,_result:S},_init:me}},fe.memo=function(S,V){return{$$typeof:N,type:S,compare:V===void 0?null:V}},fe.startTransition=function(S){var V=se.T,ae={};se.T=ae;try{var te=S(),K=se.S;K!==null&&K(ae,te),typeof te=="object"&&te!==null&&typeof te.then=="function"&&te.then(Me,re)}catch(Ee){re(Ee)}finally{se.T=V}},fe.unstable_useCacheRefresh=function(){return se.H.useCacheRefresh()},fe.use=function(S){return se.H.use(S)},fe.useActionState=function(S,V,ae){return se.H.useActionState(S,V,ae)},fe.useCallback=function(S,V){return se.H.useCallback(S,V)},fe.useContext=function(S){return se.H.useContext(S)},fe.useDebugValue=function(){},fe.useDeferredValue=function(S,V){return se.H.useDeferredValue(S,V)},fe.useEffect=function(S,V){return se.H.useEffect(S,V)},fe.useId=function(){return se.H.useId()},fe.useImperativeHandle=function(S,V,ae){return se.H.useImperativeHandle(S,V,ae)},fe.useInsertionEffect=function(S,V){return se.H.useInsertionEffect(S,V)},fe.useLayoutEffect=function(S,V){return se.H.useLayoutEffect(S,V)},fe.useMemo=function(S,V){return se.H.useMemo(S,V)},fe.useOptimistic=function(S,V){return se.H.useOptimistic(S,V)},fe.useReducer=function(S,V,ae){return se.H.useReducer(S,V,ae)},fe.useRef=function(S){return se.H.useRef(S)},fe.useState=function(S){return se.H.useState(S)},fe.useSyncExternalStore=function(S,V,ae){return se.H.useSyncExternalStore(S,V,ae)},fe.useTransition=function(){return se.H.useTransition()},fe.version="19.0.0",fe}var kf;function tc(){return kf||(kf=1,Ao.exports=sb()),Ao.exports}var No={exports:{}},ht={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zf;function ob(){if(zf)return ht;zf=1;var r=tc();function i(D){var N="https://react.dev/errors/"+D;if(1<arguments.length){N+="?args[]="+encodeURIComponent(arguments[1]);for(var z=2;z<arguments.length;z++)N+="&args[]="+encodeURIComponent(arguments[z])}return"Minified React error #"+D+"; visit "+N+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var u={d:{f:o,r:function(){throw Error(i(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},p=Symbol.for("react.portal");function y(D,N,z){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:p,key:M==null?null:""+M,children:D,containerInfo:N,implementation:z}}var E=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function w(D,N){if(D==="font")return"";if(typeof N=="string")return N==="use-credentials"?N:""}return ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,ht.createPortal=function(D,N){var z=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!N||N.nodeType!==1&&N.nodeType!==9&&N.nodeType!==11)throw Error(i(299));return y(D,N,null,z)},ht.flushSync=function(D){var N=E.T,z=u.p;try{if(E.T=null,u.p=2,D)return D()}finally{E.T=N,u.p=z,u.d.f()}},ht.preconnect=function(D,N){typeof D=="string"&&(N?(N=N.crossOrigin,N=typeof N=="string"?N==="use-credentials"?N:"":void 0):N=null,u.d.C(D,N))},ht.prefetchDNS=function(D){typeof D=="string"&&u.d.D(D)},ht.preinit=function(D,N){if(typeof D=="string"&&N&&typeof N.as=="string"){var z=N.as,M=w(z,N.crossOrigin),q=typeof N.integrity=="string"?N.integrity:void 0,B=typeof N.fetchPriority=="string"?N.fetchPriority:void 0;z==="style"?u.d.S(D,typeof N.precedence=="string"?N.precedence:void 0,{crossOrigin:M,integrity:q,fetchPriority:B}):z==="script"&&u.d.X(D,{crossOrigin:M,integrity:q,fetchPriority:B,nonce:typeof N.nonce=="string"?N.nonce:void 0})}},ht.preinitModule=function(D,N){if(typeof D=="string")if(typeof N=="object"&&N!==null){if(N.as==null||N.as==="script"){var z=w(N.as,N.crossOrigin);u.d.M(D,{crossOrigin:z,integrity:typeof N.integrity=="string"?N.integrity:void 0,nonce:typeof N.nonce=="string"?N.nonce:void 0})}}else N==null&&u.d.M(D)},ht.preload=function(D,N){if(typeof D=="string"&&typeof N=="object"&&N!==null&&typeof N.as=="string"){var z=N.as,M=w(z,N.crossOrigin);u.d.L(D,z,{crossOrigin:M,integrity:typeof N.integrity=="string"?N.integrity:void 0,nonce:typeof N.nonce=="string"?N.nonce:void 0,type:typeof N.type=="string"?N.type:void 0,fetchPriority:typeof N.fetchPriority=="string"?N.fetchPriority:void 0,referrerPolicy:typeof N.referrerPolicy=="string"?N.referrerPolicy:void 0,imageSrcSet:typeof N.imageSrcSet=="string"?N.imageSrcSet:void 0,imageSizes:typeof N.imageSizes=="string"?N.imageSizes:void 0,media:typeof N.media=="string"?N.media:void 0})}},ht.preloadModule=function(D,N){if(typeof D=="string")if(N){var z=w(N.as,N.crossOrigin);u.d.m(D,{as:typeof N.as=="string"&&N.as!=="script"?N.as:void 0,crossOrigin:z,integrity:typeof N.integrity=="string"?N.integrity:void 0})}else u.d.m(D)},ht.requestFormReset=function(D){u.d.r(D)},ht.unstable_batchedUpdates=function(D,N){return D(N)},ht.useFormState=function(D,N,z){return E.H.useFormState(D,N,z)},ht.useFormStatus=function(){return E.H.useHostTransitionStatus()},ht.version="19.0.0",ht}var Mf;function ub(){if(Mf)return No.exports;Mf=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(i){console.error(i)}}return r(),No.exports=ob(),No.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Of;function db(){if(Of)return Sr;Of=1;var r=cb(),i=tc(),o=ub();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var y=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),N=Symbol.for("react.strict_mode"),z=Symbol.for("react.profiler"),M=Symbol.for("react.provider"),q=Symbol.for("react.consumer"),B=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),ge=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),ze=Symbol.for("react.offscreen"),Be=Symbol.for("react.memo_cache_sentinel"),se=Symbol.iterator;function ct(e){return e===null||typeof e!="object"?null:(e=se&&e[se]||e["@@iterator"],typeof e=="function"?e:null)}var Bn=Symbol.for("react.client.reference");function qn(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Bn?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case D:return"Fragment";case w:return"Portal";case z:return"Profiler";case N:return"StrictMode";case Z:return"Suspense";case W:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case B:return(e.displayName||"Context")+".Provider";case q:return(e._context.displayName||"Context")+".Consumer";case Q:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ge:return t=e.displayName||null,t!==null?t:qn(e.type)||"Memo";case ce:t=e._payload,e=e._init;try{return qn(e(t))}catch{}}return null}var le=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,xe=Object.assign,zt,hn;function nn(e){if(zt===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);zt=t&&t[1]||"",hn=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+zt+e+hn}var pn=!1;function gt(e,t){if(!e||pn)return"";pn=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var G=function(){throw Error()};if(Object.defineProperty(G.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(G,[])}catch(R){var k=R}Reflect.construct(e,[],G)}else{try{G.call()}catch(R){k=R}e.call(G.prototype)}}else{try{throw Error()}catch(R){k=R}(G=e())&&typeof G.catch=="function"&&G.catch(function(){})}}catch(R){if(R&&k&&typeof R.stack=="string")return[R.stack,k.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=l.DetermineComponentFrameRoot(),f=s[0],g=s[1];if(f&&g){var A=f.split(`
`),C=g.split(`
`);for(c=l=0;l<A.length&&!A[l].includes("DetermineComponentFrameRoot");)l++;for(;c<C.length&&!C[c].includes("DetermineComponentFrameRoot");)c++;if(l===A.length||c===C.length)for(l=A.length-1,c=C.length-1;1<=l&&0<=c&&A[l]!==C[c];)c--;for(;1<=l&&0<=c;l--,c--)if(A[l]!==C[c]){if(l!==1||c!==1)do if(l--,c--,0>c||A[l]!==C[c]){var U=`
`+A[l].replace(" at new "," at ");return e.displayName&&U.includes("<anonymous>")&&(U=U.replace("<anonymous>",e.displayName)),U}while(1<=l&&0<=c);break}}}finally{pn=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?nn(n):""}function X(e){switch(e.tag){case 26:case 27:case 5:return nn(e.type);case 16:return nn("Lazy");case 13:return nn("Suspense");case 19:return nn("SuspenseList");case 0:case 15:return e=gt(e.type,!1),e;case 11:return e=gt(e.type.render,!1),e;case 1:return e=gt(e.type,!0),e;default:return""}}function me(e){try{var t="";do t+=X(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function re(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Me(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function S(e){if(re(e)!==e)throw Error(u(188))}function V(e){var t=e.alternate;if(!t){if(t=re(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,l=t;;){var c=n.return;if(c===null)break;var s=c.alternate;if(s===null){if(l=c.return,l!==null){n=l;continue}break}if(c.child===s.child){for(s=c.child;s;){if(s===n)return S(c),e;if(s===l)return S(c),t;s=s.sibling}throw Error(u(188))}if(n.return!==l.return)n=c,l=s;else{for(var f=!1,g=c.child;g;){if(g===n){f=!0,n=c,l=s;break}if(g===l){f=!0,l=c,n=s;break}g=g.sibling}if(!f){for(g=s.child;g;){if(g===n){f=!0,n=s,l=c;break}if(g===l){f=!0,l=s,n=c;break}g=g.sibling}if(!f)throw Error(u(189))}}if(n.alternate!==l)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function ae(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=ae(e),t!==null)return t;e=e.sibling}return null}var te=Array.isArray,K=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ee={pending:!1,data:null,method:null,action:null},he=[],pt=-1;function Ce(e){return{current:e}}function Je(e){0>pt||(e.current=he[pt],he[pt]=null,pt--)}function qe(e,t){pt++,he[pt]=e.current,e.current=t}var ln=Ce(null),Da=Ce(null),Ln=Ce(null),zr=Ce(null);function Mr(e,t){switch(qe(Ln,t),qe(Da,e),qe(ln,null),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)&&(t=t.namespaceURI)?nf(t):0;break;default:if(e=e===8?t.parentNode:t,t=e.tagName,e=e.namespaceURI)e=nf(e),t=lf(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Je(ln),qe(ln,t)}function Ul(){Je(ln),Je(Da),Je(Ln)}function sc(e){e.memoizedState!==null&&qe(zr,e);var t=ln.current,n=lf(t,e.type);t!==n&&(qe(Da,e),qe(ln,n))}function Or(e){Da.current===e&&(Je(ln),Je(Da)),zr.current===e&&(Je(zr),gr._currentValue=Ee)}var oc=Object.prototype.hasOwnProperty,uc=r.unstable_scheduleCallback,dc=r.unstable_cancelCallback,Bh=r.unstable_shouldYield,qh=r.unstable_requestPaint,an=r.unstable_now,Lh=r.unstable_getCurrentPriorityLevel,Xo=r.unstable_ImmediatePriority,Zo=r.unstable_UserBlockingPriority,Rr=r.unstable_NormalPriority,Gh=r.unstable_LowPriority,Ko=r.unstable_IdlePriority,Vh=r.log,jh=r.unstable_setDisableYieldValue,wa=null,Nt=null;function Yh(e){if(Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(wa,e,void 0,(e.current.flags&128)===128)}catch{}}function Gn(e){if(typeof Vh=="function"&&jh(e),Nt&&typeof Nt.setStrictMode=="function")try{Nt.setStrictMode(wa,e)}catch{}}var St=Math.clz32?Math.clz32:Zh,Qh=Math.log,Xh=Math.LN2;function Zh(e){return e>>>=0,e===0?32:31-(Qh(e)/Xh|0)|0}var Ur=128,Br=4194304;function dl(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function qr(e,t){var n=e.pendingLanes;if(n===0)return 0;var l=0,c=e.suspendedLanes,s=e.pingedLanes,f=e.warmLanes;e=e.finishedLanes!==0;var g=n&134217727;return g!==0?(n=g&~c,n!==0?l=dl(n):(s&=g,s!==0?l=dl(s):e||(f=g&~f,f!==0&&(l=dl(f))))):(g=n&~c,g!==0?l=dl(g):s!==0?l=dl(s):e||(f=n&~f,f!==0&&(l=dl(f)))),l===0?0:t!==0&&t!==l&&(t&c)===0&&(c=l&-l,f=t&-t,c>=f||c===32&&(f&4194176)!==0)?t:l}function _a(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Kh(e,t){switch(e){case 1:case 2:case 4:case 8:return t+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fo(){var e=Ur;return Ur<<=1,(Ur&4194176)===0&&(Ur=128),e}function Jo(){var e=Br;return Br<<=1,(Br&62914560)===0&&(Br=4194304),e}function mc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ha(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Fh(e,t,n,l,c,s){var f=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var g=e.entanglements,A=e.expirationTimes,C=e.hiddenUpdates;for(n=f&~n;0<n;){var U=31-St(n),G=1<<U;g[U]=0,A[U]=-1;var k=C[U];if(k!==null)for(C[U]=null,U=0;U<k.length;U++){var R=k[U];R!==null&&(R.lane&=-536870913)}n&=~G}l!==0&&$o(e,l,0),s!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=s&~(f&~t))}function $o(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-St(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|n&4194218}function Wo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-St(n),c=1<<l;c&t|e[l]&t&&(e[l]|=t),n&=~c}}function Io(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Po(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:Nf(e.type))}function Jh(e,t){var n=K.p;try{return K.p=e,t()}finally{K.p=n}}var Vn=Math.random().toString(36).slice(2),mt="__reactFiber$"+Vn,vt="__reactProps$"+Vn,Bl="__reactContainer$"+Vn,fc="__reactEvents$"+Vn,$h="__reactListeners$"+Vn,Wh="__reactHandles$"+Vn,eu="__reactResources$"+Vn,Ta="__reactMarker$"+Vn;function hc(e){delete e[mt],delete e[vt],delete e[fc],delete e[$h],delete e[Wh]}function ml(e){var t=e[mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Bl]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=cf(e);e!==null;){if(n=e[mt])return n;e=cf(e)}return t}e=n,n=e.parentNode}return null}function ql(e){if(e=e[mt]||e[Bl]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function ka(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function Ll(e){var t=e[eu];return t||(t=e[eu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function tt(e){e[Ta]=!0}var tu=new Set,nu={};function fl(e,t){Gl(e,t),Gl(e+"Capture",t)}function Gl(e,t){for(nu[e]=t,e=0;e<t.length;e++)tu.add(t[e])}var yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ih=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lu={},au={};function Ph(e){return oc.call(au,e)?!0:oc.call(lu,e)?!1:Ih.test(e)?au[e]=!0:(lu[e]=!0,!1)}function Lr(e,t,n){if(Ph(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Gr(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function bn(e,t,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+l)}}function Mt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ru(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ep(e){var t=ru(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var c=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(f){l=""+f,s.call(this,f)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return l},setValue:function(f){l=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vr(e){e._valueTracker||(e._valueTracker=ep(e))}function iu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=ru(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function jr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var tp=/[\n"\\]/g;function Ot(e){return e.replace(tp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function pc(e,t,n,l,c,s,f,g){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Mt(t)):e.value!==""+Mt(t)&&(e.value=""+Mt(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?yc(e,f,Mt(t)):n!=null?yc(e,f,Mt(n)):l!=null&&e.removeAttribute("value"),c==null&&s!=null&&(e.defaultChecked=!!s),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+Mt(g):e.removeAttribute("name")}function cu(e,t,n,l,c,s,f,g){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null))return;n=n!=null?""+Mt(n):"",t=t!=null?""+Mt(t):n,g||t===e.value||(e.value=t),e.defaultValue=t}l=l??c,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=g?e.checked:!!l,e.defaultChecked=!!l,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f)}function yc(e,t,n){t==="number"&&jr(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Vl(e,t,n,l){if(e=e.options,t){t={};for(var c=0;c<n.length;c++)t["$"+n[c]]=!0;for(n=0;n<e.length;n++)c=t.hasOwnProperty("$"+e[n].value),e[n].selected!==c&&(e[n].selected=c),c&&l&&(e[n].defaultSelected=!0)}else{for(n=""+Mt(n),t=null,c=0;c<e.length;c++){if(e[c].value===n){e[c].selected=!0,l&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function su(e,t,n){if(t!=null&&(t=""+Mt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Mt(n):""}function ou(e,t,n,l){if(t==null){if(l!=null){if(n!=null)throw Error(u(92));if(te(l)){if(1<l.length)throw Error(u(93));l=l[0]}n=l}n==null&&(n=""),t=n}n=Mt(t),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l)}function jl(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var np=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function uu(e,t,n){var l=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,n):typeof n!="number"||n===0||np.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function du(e,t,n){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var c in t)l=t[c],t.hasOwnProperty(c)&&n[c]!==l&&uu(e,c,l)}else for(var s in t)t.hasOwnProperty(s)&&uu(e,s,t[s])}function bc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ap=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yr(e){return ap.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var gc=null;function vc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Yl=null,Ql=null;function mu(e){var t=ql(e);if(t&&(e=t.stateNode)){var n=e[vt]||null;e:switch(e=t.stateNode,t.type){case"input":if(pc(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ot(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var c=l[vt]||null;if(!c)throw Error(u(90));pc(l,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(t=0;t<n.length;t++)l=n[t],l.form===e.form&&iu(l)}break e;case"textarea":su(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Vl(e,!!n.multiple,t,!1)}}}var Ec=!1;function fu(e,t,n){if(Ec)return e(t,n);Ec=!0;try{var l=e(t);return l}finally{if(Ec=!1,(Yl!==null||Ql!==null)&&(Di(),Yl&&(t=Yl,e=Ql,Ql=Yl=null,mu(t),e)))for(t=0;t<e.length;t++)mu(e[t])}}function za(e,t){var n=e.stateNode;if(n===null)return null;var l=n[vt]||null;if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var Ac=!1;if(yn)try{var Ma={};Object.defineProperty(Ma,"passive",{get:function(){Ac=!0}}),window.addEventListener("test",Ma,Ma),window.removeEventListener("test",Ma,Ma)}catch{Ac=!1}var jn=null,Nc=null,Qr=null;function hu(){if(Qr)return Qr;var e,t=Nc,n=t.length,l,c="value"in jn?jn.value:jn.textContent,s=c.length;for(e=0;e<n&&t[e]===c[e];e++);var f=n-e;for(l=1;l<=f&&t[n-l]===c[s-l];l++);return Qr=c.slice(e,1<l?1-l:void 0)}function Xr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zr(){return!0}function pu(){return!1}function Et(e){function t(n,l,c,s,f){this._reactName=n,this._targetInst=c,this.type=l,this.nativeEvent=s,this.target=f,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(n=e[g],this[g]=n?n(s):s[g]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Zr:pu,this.isPropagationStopped=pu,this}return xe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zr)},persist:function(){},isPersistent:Zr}),t}var hl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kr=Et(hl),Oa=xe({},hl,{view:0,detail:0}),rp=Et(Oa),Sc,xc,Ra,Fr=xe({},Oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ra&&(Ra&&e.type==="mousemove"?(Sc=e.screenX-Ra.screenX,xc=e.screenY-Ra.screenY):xc=Sc=0,Ra=e),Sc)},movementY:function(e){return"movementY"in e?e.movementY:xc}}),yu=Et(Fr),ip=xe({},Fr,{dataTransfer:0}),cp=Et(ip),sp=xe({},Oa,{relatedTarget:0}),Cc=Et(sp),op=xe({},hl,{animationName:0,elapsedTime:0,pseudoElement:0}),up=Et(op),dp=xe({},hl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),mp=Et(dp),fp=xe({},hl,{data:0}),bu=Et(fp),hp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yp[e])?!!t[e]:!1}function Dc(){return bp}var gp=xe({},Oa,{key:function(e){if(e.key){var t=hp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Xr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dc,charCode:function(e){return e.type==="keypress"?Xr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vp=Et(gp),Ep=xe({},Fr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gu=Et(Ep),Ap=xe({},Oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dc}),Np=Et(Ap),Sp=xe({},hl,{propertyName:0,elapsedTime:0,pseudoElement:0}),xp=Et(Sp),Cp=xe({},Fr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Dp=Et(Cp),wp=xe({},hl,{newState:0,oldState:0}),_p=Et(wp),Hp=[9,13,27,32],wc=yn&&"CompositionEvent"in window,Ua=null;yn&&"documentMode"in document&&(Ua=document.documentMode);var Tp=yn&&"TextEvent"in window&&!Ua,vu=yn&&(!wc||Ua&&8<Ua&&11>=Ua),Eu=" ",Au=!1;function Nu(e,t){switch(e){case"keyup":return Hp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Su(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xl=!1;function kp(e,t){switch(e){case"compositionend":return Su(t);case"keypress":return t.which!==32?null:(Au=!0,Eu);case"textInput":return e=t.data,e===Eu&&Au?null:e;default:return null}}function zp(e,t){if(Xl)return e==="compositionend"||!wc&&Nu(e,t)?(e=hu(),Qr=Nc=jn=null,Xl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return vu&&t.locale!=="ko"?null:t.data;default:return null}}var Mp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Mp[e.type]:t==="textarea"}function Cu(e,t,n,l){Yl?Ql?Ql.push(l):Ql=[l]:Yl=l,t=ki(t,"onChange"),0<t.length&&(n=new Kr("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var Ba=null,qa=null;function Op(e){Wm(e,0)}function Jr(e){var t=ka(e);if(iu(t))return e}function Du(e,t){if(e==="change")return t}var wu=!1;if(yn){var _c;if(yn){var Hc="oninput"in document;if(!Hc){var _u=document.createElement("div");_u.setAttribute("oninput","return;"),Hc=typeof _u.oninput=="function"}_c=Hc}else _c=!1;wu=_c&&(!document.documentMode||9<document.documentMode)}function Hu(){Ba&&(Ba.detachEvent("onpropertychange",Tu),qa=Ba=null)}function Tu(e){if(e.propertyName==="value"&&Jr(qa)){var t=[];Cu(t,qa,e,vc(e)),fu(Op,t)}}function Rp(e,t,n){e==="focusin"?(Hu(),Ba=t,qa=n,Ba.attachEvent("onpropertychange",Tu)):e==="focusout"&&Hu()}function Up(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Jr(qa)}function Bp(e,t){if(e==="click")return Jr(t)}function qp(e,t){if(e==="input"||e==="change")return Jr(t)}function Lp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var xt=typeof Object.is=="function"?Object.is:Lp;function La(e,t){if(xt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var c=n[l];if(!oc.call(t,c)||!xt(e[c],t[c]))return!1}return!0}function ku(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zu(e,t){var n=ku(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ku(n)}}function Mu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Mu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ou(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=jr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=jr(e.document)}return t}function Tc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Gp(e,t){var n=Ou(t);t=e.focusedElem;var l=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Mu(t.ownerDocument.documentElement,t)){if(l!==null&&Tc(t)){if(e=l.start,n=l.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var c=t.textContent.length,s=Math.min(l.start,c);l=l.end===void 0?s:Math.min(l.end,c),!n.extend&&s>l&&(c=l,l=s,s=c),c=zu(t,s);var f=zu(t,l);c&&f&&(n.rangeCount!==1||n.anchorNode!==c.node||n.anchorOffset!==c.offset||n.focusNode!==f.node||n.focusOffset!==f.offset)&&(e=e.createRange(),e.setStart(c.node,c.offset),n.removeAllRanges(),s>l?(n.addRange(e),n.extend(f.node,f.offset)):(e.setEnd(f.node,f.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Vp=yn&&"documentMode"in document&&11>=document.documentMode,Zl=null,kc=null,Ga=null,zc=!1;function Ru(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zc||Zl==null||Zl!==jr(l)||(l=Zl,"selectionStart"in l&&Tc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ga&&La(Ga,l)||(Ga=l,l=ki(kc,"onSelect"),0<l.length&&(t=new Kr("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=Zl)))}function pl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Kl={animationend:pl("Animation","AnimationEnd"),animationiteration:pl("Animation","AnimationIteration"),animationstart:pl("Animation","AnimationStart"),transitionrun:pl("Transition","TransitionRun"),transitionstart:pl("Transition","TransitionStart"),transitioncancel:pl("Transition","TransitionCancel"),transitionend:pl("Transition","TransitionEnd")},Mc={},Uu={};yn&&(Uu=document.createElement("div").style,"AnimationEvent"in window||(delete Kl.animationend.animation,delete Kl.animationiteration.animation,delete Kl.animationstart.animation),"TransitionEvent"in window||delete Kl.transitionend.transition);function yl(e){if(Mc[e])return Mc[e];if(!Kl[e])return e;var t=Kl[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Uu)return Mc[e]=t[n];return e}var Bu=yl("animationend"),qu=yl("animationiteration"),Lu=yl("animationstart"),jp=yl("transitionrun"),Yp=yl("transitionstart"),Qp=yl("transitioncancel"),Gu=yl("transitionend"),Vu=new Map,ju="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Ft(e,t){Vu.set(e,t),fl(t,[e])}var Rt=[],Fl=0,Oc=0;function $r(){for(var e=Fl,t=Oc=Fl=0;t<e;){var n=Rt[t];Rt[t++]=null;var l=Rt[t];Rt[t++]=null;var c=Rt[t];Rt[t++]=null;var s=Rt[t];if(Rt[t++]=null,l!==null&&c!==null){var f=l.pending;f===null?c.next=c:(c.next=f.next,f.next=c),l.pending=c}s!==0&&Yu(n,c,s)}}function Wr(e,t,n,l){Rt[Fl++]=e,Rt[Fl++]=t,Rt[Fl++]=n,Rt[Fl++]=l,Oc|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Rc(e,t,n,l){return Wr(e,t,n,l),Ir(e)}function Yn(e,t){return Wr(e,null,null,t),Ir(e)}function Yu(e,t,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var c=!1,s=e.return;s!==null;)s.childLanes|=n,l=s.alternate,l!==null&&(l.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(c=!0)),e=s,s=s.return;c&&t!==null&&e.tag===3&&(s=e.stateNode,c=31-St(n),s=s.hiddenUpdates,e=s[c],e===null?s[c]=[t]:e.push(t),t.lane=n|536870912)}function Ir(e){if(50<dr)throw dr=0,Vs=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Jl={},Qu=new WeakMap;function Ut(e,t){if(typeof e=="object"&&e!==null){var n=Qu.get(e);return n!==void 0?n:(t={value:e,source:t,stack:me(t)},Qu.set(e,t),t)}return{value:e,source:t,stack:me(t)}}var $l=[],Wl=0,Pr=null,ei=0,Bt=[],qt=0,bl=null,gn=1,vn="";function gl(e,t){$l[Wl++]=ei,$l[Wl++]=Pr,Pr=e,ei=t}function Xu(e,t,n){Bt[qt++]=gn,Bt[qt++]=vn,Bt[qt++]=bl,bl=e;var l=gn;e=vn;var c=32-St(l)-1;l&=~(1<<c),n+=1;var s=32-St(t)+c;if(30<s){var f=c-c%5;s=(l&(1<<f)-1).toString(32),l>>=f,c-=f,gn=1<<32-St(t)+c|n<<c|l,vn=s+e}else gn=1<<s|n<<c|l,vn=e}function Uc(e){e.return!==null&&(gl(e,1),Xu(e,1,0))}function Bc(e){for(;e===Pr;)Pr=$l[--Wl],$l[Wl]=null,ei=$l[--Wl],$l[Wl]=null;for(;e===bl;)bl=Bt[--qt],Bt[qt]=null,vn=Bt[--qt],Bt[qt]=null,gn=Bt[--qt],Bt[qt]=null}var yt=null,st=null,Ne=!1,Jt=null,rn=!1,qc=Error(u(519));function vl(e){var t=Error(u(418,""));throw Ya(Ut(t,e)),qc}function Zu(e){var t=e.stateNode,n=e.type,l=e.memoizedProps;switch(t[mt]=e,t[vt]=l,n){case"dialog":ve("cancel",t),ve("close",t);break;case"iframe":case"object":case"embed":ve("load",t);break;case"video":case"audio":for(n=0;n<fr.length;n++)ve(fr[n],t);break;case"source":ve("error",t);break;case"img":case"image":case"link":ve("error",t),ve("load",t);break;case"details":ve("toggle",t);break;case"input":ve("invalid",t),cu(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Vr(t);break;case"select":ve("invalid",t);break;case"textarea":ve("invalid",t),ou(t,l.value,l.defaultValue,l.children),Vr(t)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||l.suppressHydrationWarning===!0||tf(t.textContent,n)?(l.popover!=null&&(ve("beforetoggle",t),ve("toggle",t)),l.onScroll!=null&&ve("scroll",t),l.onScrollEnd!=null&&ve("scrollend",t),l.onClick!=null&&(t.onclick=zi),t=!0):t=!1,t||vl(e)}function Ku(e){for(yt=e.return;yt;)switch(yt.tag){case 3:case 27:rn=!0;return;case 5:case 13:rn=!1;return;default:yt=yt.return}}function Va(e){if(e!==yt)return!1;if(!Ne)return Ku(e),Ne=!0,!1;var t=!1,n;if((n=e.tag!==3&&e.tag!==27)&&((n=e.tag===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||ao(e.type,e.memoizedProps)),n=!n),n&&(t=!0),t&&st&&vl(e),Ku(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){st=Wt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}st=null}}else st=yt?Wt(e.stateNode.nextSibling):null;return!0}function ja(){st=yt=null,Ne=!1}function Ya(e){Jt===null?Jt=[e]:Jt.push(e)}var Qa=Error(u(460)),Fu=Error(u(474)),Lc={then:function(){}};function Ju(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ti(){}function $u(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ti,ti),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,e===Qa?Error(u(483)):e;default:if(typeof t.status=="string")t.then(ti,ti);else{if(e=Oe,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var c=t;c.status="fulfilled",c.value=l}},function(l){if(t.status==="pending"){var c=t;c.status="rejected",c.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,e===Qa?Error(u(483)):e}throw Xa=t,Qa}}var Xa=null;function Wu(){if(Xa===null)throw Error(u(459));var e=Xa;return Xa=null,e}var Il=null,Za=0;function ni(e){var t=Za;return Za+=1,Il===null&&(Il=[]),$u(Il,e,t)}function Ka(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function li(e,t){throw t.$$typeof===y?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Iu(e){var t=e._init;return t(e._payload)}function Pu(e){function t(_,x){if(e){var T=_.deletions;T===null?(_.deletions=[x],_.flags|=16):T.push(x)}}function n(_,x){if(!e)return null;for(;x!==null;)t(_,x),x=x.sibling;return null}function l(_){for(var x=new Map;_!==null;)_.key!==null?x.set(_.key,_):x.set(_.index,_),_=_.sibling;return x}function c(_,x){return _=tl(_,x),_.index=0,_.sibling=null,_}function s(_,x,T){return _.index=T,e?(T=_.alternate,T!==null?(T=T.index,T<x?(_.flags|=33554434,x):T):(_.flags|=33554434,x)):(_.flags|=1048576,x)}function f(_){return e&&_.alternate===null&&(_.flags|=33554434),_}function g(_,x,T,L){return x===null||x.tag!==6?(x=Ms(T,_.mode,L),x.return=_,x):(x=c(x,T),x.return=_,x)}function A(_,x,T,L){var F=T.type;return F===D?U(_,x,T.props.children,L,T.key):x!==null&&(x.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===ce&&Iu(F)===x.type)?(x=c(x,T.props),Ka(x,T),x.return=_,x):(x=Ai(T.type,T.key,T.props,null,_.mode,L),Ka(x,T),x.return=_,x)}function C(_,x,T,L){return x===null||x.tag!==4||x.stateNode.containerInfo!==T.containerInfo||x.stateNode.implementation!==T.implementation?(x=Os(T,_.mode,L),x.return=_,x):(x=c(x,T.children||[]),x.return=_,x)}function U(_,x,T,L,F){return x===null||x.tag!==7?(x=Hl(T,_.mode,L,F),x.return=_,x):(x=c(x,T),x.return=_,x)}function G(_,x,T){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=Ms(""+x,_.mode,T),x.return=_,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case E:return T=Ai(x.type,x.key,x.props,null,_.mode,T),Ka(T,x),T.return=_,T;case w:return x=Os(x,_.mode,T),x.return=_,x;case ce:var L=x._init;return x=L(x._payload),G(_,x,T)}if(te(x)||ct(x))return x=Hl(x,_.mode,T,null),x.return=_,x;if(typeof x.then=="function")return G(_,ni(x),T);if(x.$$typeof===B)return G(_,gi(_,x),T);li(_,x)}return null}function k(_,x,T,L){var F=x!==null?x.key:null;if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return F!==null?null:g(_,x,""+T,L);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case E:return T.key===F?A(_,x,T,L):null;case w:return T.key===F?C(_,x,T,L):null;case ce:return F=T._init,T=F(T._payload),k(_,x,T,L)}if(te(T)||ct(T))return F!==null?null:U(_,x,T,L,null);if(typeof T.then=="function")return k(_,x,ni(T),L);if(T.$$typeof===B)return k(_,x,gi(_,T),L);li(_,T)}return null}function R(_,x,T,L,F){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return _=_.get(T)||null,g(x,_,""+L,F);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case E:return _=_.get(L.key===null?T:L.key)||null,A(x,_,L,F);case w:return _=_.get(L.key===null?T:L.key)||null,C(x,_,L,F);case ce:var ye=L._init;return L=ye(L._payload),R(_,x,T,L,F)}if(te(L)||ct(L))return _=_.get(T)||null,U(x,_,L,F,null);if(typeof L.then=="function")return R(_,x,T,ni(L),F);if(L.$$typeof===B)return R(_,x,T,gi(x,L),F);li(x,L)}return null}function I(_,x,T,L){for(var F=null,ye=null,P=x,ne=x=0,at=null;P!==null&&ne<T.length;ne++){P.index>ne?(at=P,P=null):at=P.sibling;var Se=k(_,P,T[ne],L);if(Se===null){P===null&&(P=at);break}e&&P&&Se.alternate===null&&t(_,P),x=s(Se,x,ne),ye===null?F=Se:ye.sibling=Se,ye=Se,P=at}if(ne===T.length)return n(_,P),Ne&&gl(_,ne),F;if(P===null){for(;ne<T.length;ne++)P=G(_,T[ne],L),P!==null&&(x=s(P,x,ne),ye===null?F=P:ye.sibling=P,ye=P);return Ne&&gl(_,ne),F}for(P=l(P);ne<T.length;ne++)at=R(P,_,ne,T[ne],L),at!==null&&(e&&at.alternate!==null&&P.delete(at.key===null?ne:at.key),x=s(at,x,ne),ye===null?F=at:ye.sibling=at,ye=at);return e&&P.forEach(function(sl){return t(_,sl)}),Ne&&gl(_,ne),F}function oe(_,x,T,L){if(T==null)throw Error(u(151));for(var F=null,ye=null,P=x,ne=x=0,at=null,Se=T.next();P!==null&&!Se.done;ne++,Se=T.next()){P.index>ne?(at=P,P=null):at=P.sibling;var sl=k(_,P,Se.value,L);if(sl===null){P===null&&(P=at);break}e&&P&&sl.alternate===null&&t(_,P),x=s(sl,x,ne),ye===null?F=sl:ye.sibling=sl,ye=sl,P=at}if(Se.done)return n(_,P),Ne&&gl(_,ne),F;if(P===null){for(;!Se.done;ne++,Se=T.next())Se=G(_,Se.value,L),Se!==null&&(x=s(Se,x,ne),ye===null?F=Se:ye.sibling=Se,ye=Se);return Ne&&gl(_,ne),F}for(P=l(P);!Se.done;ne++,Se=T.next())Se=R(P,_,ne,Se.value,L),Se!==null&&(e&&Se.alternate!==null&&P.delete(Se.key===null?ne:Se.key),x=s(Se,x,ne),ye===null?F=Se:ye.sibling=Se,ye=Se);return e&&P.forEach(function(ab){return t(_,ab)}),Ne&&gl(_,ne),F}function Ye(_,x,T,L){if(typeof T=="object"&&T!==null&&T.type===D&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case E:e:{for(var F=T.key;x!==null;){if(x.key===F){if(F=T.type,F===D){if(x.tag===7){n(_,x.sibling),L=c(x,T.props.children),L.return=_,_=L;break e}}else if(x.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===ce&&Iu(F)===x.type){n(_,x.sibling),L=c(x,T.props),Ka(L,T),L.return=_,_=L;break e}n(_,x);break}else t(_,x);x=x.sibling}T.type===D?(L=Hl(T.props.children,_.mode,L,T.key),L.return=_,_=L):(L=Ai(T.type,T.key,T.props,null,_.mode,L),Ka(L,T),L.return=_,_=L)}return f(_);case w:e:{for(F=T.key;x!==null;){if(x.key===F)if(x.tag===4&&x.stateNode.containerInfo===T.containerInfo&&x.stateNode.implementation===T.implementation){n(_,x.sibling),L=c(x,T.children||[]),L.return=_,_=L;break e}else{n(_,x);break}else t(_,x);x=x.sibling}L=Os(T,_.mode,L),L.return=_,_=L}return f(_);case ce:return F=T._init,T=F(T._payload),Ye(_,x,T,L)}if(te(T))return I(_,x,T,L);if(ct(T)){if(F=ct(T),typeof F!="function")throw Error(u(150));return T=F.call(T),oe(_,x,T,L)}if(typeof T.then=="function")return Ye(_,x,ni(T),L);if(T.$$typeof===B)return Ye(_,x,gi(_,T),L);li(_,T)}return typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint"?(T=""+T,x!==null&&x.tag===6?(n(_,x.sibling),L=c(x,T),L.return=_,_=L):(n(_,x),L=Ms(T,_.mode,L),L.return=_,_=L),f(_)):n(_,x)}return function(_,x,T,L){try{Za=0;var F=Ye(_,x,T,L);return Il=null,F}catch(P){if(P===Qa)throw P;var ye=jt(29,P,null,_.mode);return ye.lanes=L,ye.return=_,ye}finally{}}}var El=Pu(!0),ed=Pu(!1),Pl=Ce(null),ai=Ce(0);function td(e,t){e=Tn,qe(ai,e),qe(Pl,t),Tn=e|t.baseLanes}function Gc(){qe(ai,Tn),qe(Pl,Pl.current)}function Vc(){Tn=ai.current,Je(Pl),Je(ai)}var Lt=Ce(null),cn=null;function Qn(e){var t=e.alternate;qe(Pe,Pe.current&1),qe(Lt,e),cn===null&&(t===null||Pl.current!==null||t.memoizedState!==null)&&(cn=e)}function nd(e){if(e.tag===22){if(qe(Pe,Pe.current),qe(Lt,e),cn===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(cn=e)}}else Xn()}function Xn(){qe(Pe,Pe.current),qe(Lt,Lt.current)}function En(e){Je(Lt),cn===e&&(cn=null),Je(Pe)}var Pe=Ce(0);function ri(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Xp=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Zp=r.unstable_scheduleCallback,Kp=r.unstable_NormalPriority,et={$$typeof:B,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function jc(){return{controller:new Xp,data:new Map,refCount:0}}function Fa(e){e.refCount--,e.refCount===0&&Zp(Kp,function(){e.controller.abort()})}var Ja=null,Yc=0,ea=0,ta=null;function Fp(e,t){if(Ja===null){var n=Ja=[];Yc=0,ea=Js(),ta={status:"pending",value:void 0,then:function(l){n.push(l)}}}return Yc++,t.then(ld,ld),t}function ld(){if(--Yc===0&&Ja!==null){ta!==null&&(ta.status="fulfilled");var e=Ja;Ja=null,ea=0,ta=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Jp(e,t){var n=[],l={status:"pending",value:null,reason:null,then:function(c){n.push(c)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var c=0;c<n.length;c++)(0,n[c])(t)},function(c){for(l.status="rejected",l.reason=c,c=0;c<n.length;c++)(0,n[c])(void 0)}),l}var ad=le.S;le.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Fp(e,t),ad!==null&&ad(e,t)};var Al=Ce(null);function Qc(){var e=Al.current;return e!==null?e:Oe.pooledCache}function ii(e,t){t===null?qe(Al,Al.current):qe(Al,t.pool)}function rd(){var e=Qc();return e===null?null:{parent:et._currentValue,pool:e}}var Zn=0,pe=null,_e=null,$e=null,ci=!1,na=!1,Nl=!1,si=0,$a=0,la=null,$p=0;function Ze(){throw Error(u(321))}function Xc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!xt(e[n],t[n]))return!1;return!0}function Zc(e,t,n,l,c,s){return Zn=s,pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,le.H=e===null||e.memoizedState===null?Sl:Kn,Nl=!1,s=n(l,c),Nl=!1,na&&(s=cd(t,n,l,c)),id(e),s}function id(e){le.H=sn;var t=_e!==null&&_e.next!==null;if(Zn=0,$e=_e=pe=null,ci=!1,$a=0,la=null,t)throw Error(u(300));e===null||nt||(e=e.dependencies,e!==null&&bi(e)&&(nt=!0))}function cd(e,t,n,l){pe=e;var c=0;do{if(na&&(la=null),$a=0,na=!1,25<=c)throw Error(u(301));if(c+=1,$e=_e=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}le.H=xl,s=t(n,l)}while(na);return s}function Wp(){var e=le.H,t=e.useState()[0];return t=typeof t.then=="function"?Wa(t):t,e=e.useState()[0],(_e!==null?_e.memoizedState:null)!==e&&(pe.flags|=1024),t}function Kc(){var e=si!==0;return si=0,e}function Fc(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Jc(e){if(ci){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ci=!1}Zn=0,$e=_e=pe=null,na=!1,$a=si=0,la=null}function At(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?pe.memoizedState=$e=e:$e=$e.next=e,$e}function We(){if(_e===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=_e.next;var t=$e===null?pe.memoizedState:$e.next;if(t!==null)$e=t,_e=e;else{if(e===null)throw pe.alternate===null?Error(u(467)):Error(u(310));_e=e,e={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},$e===null?pe.memoizedState=$e=e:$e=$e.next=e}return $e}var oi;oi=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Wa(e){var t=$a;return $a+=1,la===null&&(la=[]),e=$u(la,e,t),t=pe,($e===null?t.memoizedState:$e.next)===null&&(t=t.alternate,le.H=t===null||t.memoizedState===null?Sl:Kn),e}function ui(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Wa(e);if(e.$$typeof===B)return ft(e)}throw Error(u(438,String(e)))}function $c(e){var t=null,n=pe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var l=pe.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(c){return c.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=oi(),pe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),l=0;l<e;l++)n[l]=Be;return t.index++,n}function An(e,t){return typeof t=="function"?t(e):t}function di(e){var t=We();return Wc(t,_e,e)}function Wc(e,t,n){var l=e.queue;if(l===null)throw Error(u(311));l.lastRenderedReducer=n;var c=e.baseQueue,s=l.pending;if(s!==null){if(c!==null){var f=c.next;c.next=s.next,s.next=f}t.baseQueue=c=s,l.pending=null}if(s=e.baseState,c===null)e.memoizedState=s;else{t=c.next;var g=f=null,A=null,C=t,U=!1;do{var G=C.lane&-536870913;if(G!==C.lane?(Ae&G)===G:(Zn&G)===G){var k=C.revertLane;if(k===0)A!==null&&(A=A.next={lane:0,revertLane:0,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),G===ea&&(U=!0);else if((Zn&k)===k){C=C.next,k===ea&&(U=!0);continue}else G={lane:0,revertLane:C.revertLane,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},A===null?(g=A=G,f=s):A=A.next=G,pe.lanes|=k,nl|=k;G=C.action,Nl&&n(s,G),s=C.hasEagerState?C.eagerState:n(s,G)}else k={lane:G,revertLane:C.revertLane,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},A===null?(g=A=k,f=s):A=A.next=k,pe.lanes|=G,nl|=G;C=C.next}while(C!==null&&C!==t);if(A===null?f=s:A.next=g,!xt(s,e.memoizedState)&&(nt=!0,U&&(n=ta,n!==null)))throw n;e.memoizedState=s,e.baseState=f,e.baseQueue=A,l.lastRenderedState=s}return c===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Ic(e){var t=We(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var l=n.dispatch,c=n.pending,s=t.memoizedState;if(c!==null){n.pending=null;var f=c=c.next;do s=e(s,f.action),f=f.next;while(f!==c);xt(s,t.memoizedState)||(nt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,l]}function sd(e,t,n){var l=pe,c=We(),s=Ne;if(s){if(n===void 0)throw Error(u(407));n=n()}else n=t();var f=!xt((_e||c).memoizedState,n);if(f&&(c.memoizedState=n,nt=!0),c=c.queue,ts(dd.bind(null,l,c,e),[e]),c.getSnapshot!==t||f||$e!==null&&$e.memoizedState.tag&1){if(l.flags|=2048,aa(9,ud.bind(null,l,c,n,t),{destroy:void 0},null),Oe===null)throw Error(u(349));s||(Zn&60)!==0||od(l,t,n)}return n}function od(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=pe.updateQueue,t===null?(t=oi(),pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ud(e,t,n,l){t.value=n,t.getSnapshot=l,md(t)&&fd(e)}function dd(e,t,n){return n(function(){md(t)&&fd(e)})}function md(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!xt(e,n)}catch{return!0}}function fd(e){var t=Yn(e,2);t!==null&&bt(t,e,2)}function Pc(e){var t=At();if(typeof e=="function"){var n=e;if(e=n(),Nl){Gn(!0);try{n()}finally{Gn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:e},t}function hd(e,t,n,l){return e.baseState=n,Wc(e,_e,typeof l=="function"?l:An)}function Ip(e,t,n,l,c){if(hi(e))throw Error(u(485));if(e=t.action,e!==null){var s={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){s.listeners.push(f)}};le.T!==null?n(!0):s.isTransition=!1,l(s),n=t.pending,n===null?(s.next=t.pending=s,pd(t,s)):(s.next=n.next,t.pending=n.next=s)}}function pd(e,t){var n=t.action,l=t.payload,c=e.state;if(t.isTransition){var s=le.T,f={};le.T=f;try{var g=n(c,l),A=le.S;A!==null&&A(f,g),yd(e,t,g)}catch(C){es(e,t,C)}finally{le.T=s}}else try{s=n(c,l),yd(e,t,s)}catch(C){es(e,t,C)}}function yd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){bd(e,t,l)},function(l){return es(e,t,l)}):bd(e,t,n)}function bd(e,t,n){t.status="fulfilled",t.value=n,gd(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,pd(e,n)))}function es(e,t,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=n,gd(t),t=t.next;while(t!==l)}e.action=null}function gd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function vd(e,t){return t}function Ed(e,t){if(Ne){var n=Oe.formState;if(n!==null){e:{var l=pe;if(Ne){if(st){t:{for(var c=st,s=rn;c.nodeType!==8;){if(!s){c=null;break t}if(c=Wt(c.nextSibling),c===null){c=null;break t}}s=c.data,c=s==="F!"||s==="F"?c:null}if(c){st=Wt(c.nextSibling),l=c.data==="F!";break e}}vl(l)}l=!1}l&&(t=n[0])}}return n=At(),n.memoizedState=n.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vd,lastRenderedState:t},n.queue=l,n=qd.bind(null,pe,l),l.dispatch=n,l=Pc(!1),s=is.bind(null,pe,!1,l.queue),l=At(),c={state:t,dispatch:null,action:e,pending:null},l.queue=c,n=Ip.bind(null,pe,c,s,n),c.dispatch=n,l.memoizedState=e,[t,n,!1]}function Ad(e){var t=We();return Nd(t,_e,e)}function Nd(e,t,n){t=Wc(e,t,vd)[0],e=di(An)[0],t=typeof t=="object"&&t!==null&&typeof t.then=="function"?Wa(t):t;var l=We(),c=l.queue,s=c.dispatch;return n!==l.memoizedState&&(pe.flags|=2048,aa(9,Pp.bind(null,c,n),{destroy:void 0},null)),[t,s,e]}function Pp(e,t){e.action=t}function Sd(e){var t=We(),n=_e;if(n!==null)return Nd(t,n,e);We(),t=t.memoizedState,n=We();var l=n.queue.dispatch;return n.memoizedState=e,[t,l,!1]}function aa(e,t,n,l){return e={tag:e,create:t,inst:n,deps:l,next:null},t=pe.updateQueue,t===null&&(t=oi(),pe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e),e}function xd(){return We().memoizedState}function mi(e,t,n,l){var c=At();pe.flags|=e,c.memoizedState=aa(1|t,n,{destroy:void 0},l===void 0?null:l)}function fi(e,t,n,l){var c=We();l=l===void 0?null:l;var s=c.memoizedState.inst;_e!==null&&l!==null&&Xc(l,_e.memoizedState.deps)?c.memoizedState=aa(t,n,s,l):(pe.flags|=e,c.memoizedState=aa(1|t,n,s,l))}function Cd(e,t){mi(8390656,8,e,t)}function ts(e,t){fi(2048,8,e,t)}function Dd(e,t){return fi(4,2,e,t)}function wd(e,t){return fi(4,4,e,t)}function _d(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Hd(e,t,n){n=n!=null?n.concat([e]):null,fi(4,4,_d.bind(null,t,e),n)}function ns(){}function Td(e,t){var n=We();t=t===void 0?null:t;var l=n.memoizedState;return t!==null&&Xc(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function kd(e,t){var n=We();t=t===void 0?null:t;var l=n.memoizedState;if(t!==null&&Xc(t,l[1]))return l[0];if(l=e(),Nl){Gn(!0);try{e()}finally{Gn(!1)}}return n.memoizedState=[l,t],l}function ls(e,t,n){return n===void 0||(Zn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=Mm(),pe.lanes|=e,nl|=e,n)}function zd(e,t,n,l){return xt(n,t)?n:Pl.current!==null?(e=ls(e,n,l),xt(e,t)||(nt=!0),e):(Zn&42)===0?(nt=!0,e.memoizedState=n):(e=Mm(),pe.lanes|=e,nl|=e,t)}function Md(e,t,n,l,c){var s=K.p;K.p=s!==0&&8>s?s:8;var f=le.T,g={};le.T=g,is(e,!1,t,n);try{var A=c(),C=le.S;if(C!==null&&C(g,A),A!==null&&typeof A=="object"&&typeof A.then=="function"){var U=Jp(A,l);Ia(e,t,U,_t(e))}else Ia(e,t,l,_t(e))}catch(G){Ia(e,t,{then:function(){},status:"rejected",reason:G},_t())}finally{K.p=s,le.T=f}}function ey(){}function as(e,t,n,l){if(e.tag!==5)throw Error(u(476));var c=Od(e).queue;Md(e,c,t,Ee,n===null?ey:function(){return Rd(e),n(l)})}function Od(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Ee,baseState:Ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:Ee},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Rd(e){var t=Od(e).next.queue;Ia(e,t,{},_t())}function rs(){return ft(gr)}function Ud(){return We().memoizedState}function Bd(){return We().memoizedState}function ty(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=_t();e=$n(n);var l=Wn(t,e,n);l!==null&&(bt(l,t,n),tr(l,t,n)),t={cache:jc()},e.payload=t;return}t=t.return}}function ny(e,t,n){var l=_t();n={lane:l,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},hi(e)?Ld(t,n):(n=Rc(e,t,n,l),n!==null&&(bt(n,e,l),Gd(n,t,l)))}function qd(e,t,n){var l=_t();Ia(e,t,n,l)}function Ia(e,t,n,l){var c={lane:l,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(hi(e))Ld(t,c);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var f=t.lastRenderedState,g=s(f,n);if(c.hasEagerState=!0,c.eagerState=g,xt(g,f))return Wr(e,t,c,0),Oe===null&&$r(),!1}catch{}finally{}if(n=Rc(e,t,c,l),n!==null)return bt(n,e,l),Gd(n,t,l),!0}return!1}function is(e,t,n,l){if(l={lane:2,revertLane:Js(),action:l,hasEagerState:!1,eagerState:null,next:null},hi(e)){if(t)throw Error(u(479))}else t=Rc(e,n,l,2),t!==null&&bt(t,e,2)}function hi(e){var t=e.alternate;return e===pe||t!==null&&t===pe}function Ld(e,t){na=ci=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Gd(e,t,n){if((n&4194176)!==0){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,Wo(e,n)}}var sn={readContext:ft,use:ui,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useLayoutEffect:Ze,useInsertionEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useSyncExternalStore:Ze,useId:Ze};sn.useCacheRefresh=Ze,sn.useMemoCache=Ze,sn.useHostTransitionStatus=Ze,sn.useFormState=Ze,sn.useActionState=Ze,sn.useOptimistic=Ze;var Sl={readContext:ft,use:ui,useCallback:function(e,t){return At().memoizedState=[e,t===void 0?null:t],e},useContext:ft,useEffect:Cd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,mi(4194308,4,_d.bind(null,t,e),n)},useLayoutEffect:function(e,t){return mi(4194308,4,e,t)},useInsertionEffect:function(e,t){mi(4,2,e,t)},useMemo:function(e,t){var n=At();t=t===void 0?null:t;var l=e();if(Nl){Gn(!0);try{e()}finally{Gn(!1)}}return n.memoizedState=[l,t],l},useReducer:function(e,t,n){var l=At();if(n!==void 0){var c=n(t);if(Nl){Gn(!0);try{n(t)}finally{Gn(!1)}}}else c=t;return l.memoizedState=l.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},l.queue=e,e=e.dispatch=ny.bind(null,pe,e),[l.memoizedState,e]},useRef:function(e){var t=At();return e={current:e},t.memoizedState=e},useState:function(e){e=Pc(e);var t=e.queue,n=qd.bind(null,pe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ns,useDeferredValue:function(e,t){var n=At();return ls(n,e,t)},useTransition:function(){var e=Pc(!1);return e=Md.bind(null,pe,e.queue,!0,!1),At().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var l=pe,c=At();if(Ne){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),Oe===null)throw Error(u(349));(Ae&60)!==0||od(l,t,n)}c.memoizedState=n;var s={value:n,getSnapshot:t};return c.queue=s,Cd(dd.bind(null,l,s,e),[e]),l.flags|=2048,aa(9,ud.bind(null,l,s,n,t),{destroy:void 0},null),n},useId:function(){var e=At(),t=Oe.identifierPrefix;if(Ne){var n=vn,l=gn;n=(l&~(1<<32-St(l)-1)).toString(32)+n,t=":"+t+"R"+n,n=si++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=$p++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},useCacheRefresh:function(){return At().memoizedState=ty.bind(null,pe)}};Sl.useMemoCache=$c,Sl.useHostTransitionStatus=rs,Sl.useFormState=Ed,Sl.useActionState=Ed,Sl.useOptimistic=function(e){var t=At();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=is.bind(null,pe,!0,n),n.dispatch=t,[e,t]};var Kn={readContext:ft,use:ui,useCallback:Td,useContext:ft,useEffect:ts,useImperativeHandle:Hd,useInsertionEffect:Dd,useLayoutEffect:wd,useMemo:kd,useReducer:di,useRef:xd,useState:function(){return di(An)},useDebugValue:ns,useDeferredValue:function(e,t){var n=We();return zd(n,_e.memoizedState,e,t)},useTransition:function(){var e=di(An)[0],t=We().memoizedState;return[typeof e=="boolean"?e:Wa(e),t]},useSyncExternalStore:sd,useId:Ud};Kn.useCacheRefresh=Bd,Kn.useMemoCache=$c,Kn.useHostTransitionStatus=rs,Kn.useFormState=Ad,Kn.useActionState=Ad,Kn.useOptimistic=function(e,t){var n=We();return hd(n,_e,e,t)};var xl={readContext:ft,use:ui,useCallback:Td,useContext:ft,useEffect:ts,useImperativeHandle:Hd,useInsertionEffect:Dd,useLayoutEffect:wd,useMemo:kd,useReducer:Ic,useRef:xd,useState:function(){return Ic(An)},useDebugValue:ns,useDeferredValue:function(e,t){var n=We();return _e===null?ls(n,e,t):zd(n,_e.memoizedState,e,t)},useTransition:function(){var e=Ic(An)[0],t=We().memoizedState;return[typeof e=="boolean"?e:Wa(e),t]},useSyncExternalStore:sd,useId:Ud};xl.useCacheRefresh=Bd,xl.useMemoCache=$c,xl.useHostTransitionStatus=rs,xl.useFormState=Sd,xl.useActionState=Sd,xl.useOptimistic=function(e,t){var n=We();return _e!==null?hd(n,_e,e,t):(n.baseState=e,[e,n.queue.dispatch])};function cs(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:xe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ss={isMounted:function(e){return(e=e._reactInternals)?re(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var l=_t(),c=$n(l);c.payload=t,n!=null&&(c.callback=n),t=Wn(e,c,l),t!==null&&(bt(t,e,l),tr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=_t(),c=$n(l);c.tag=1,c.payload=t,n!=null&&(c.callback=n),t=Wn(e,c,l),t!==null&&(bt(t,e,l),tr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=_t(),l=$n(n);l.tag=2,t!=null&&(l.callback=t),t=Wn(e,l,n),t!==null&&(bt(t,e,n),tr(t,e,n))}};function Vd(e,t,n,l,c,s,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,s,f):t.prototype&&t.prototype.isPureReactComponent?!La(n,l)||!La(c,s):!0}function jd(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&ss.enqueueReplaceState(t,t.state,null)}function Cl(e,t){var n=t;if("ref"in t){n={};for(var l in t)l!=="ref"&&(n[l]=t[l])}if(e=e.defaultProps){n===t&&(n=xe({},n));for(var c in e)n[c]===void 0&&(n[c]=e[c])}return n}var pi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Yd(e){pi(e)}function Qd(e){console.error(e)}function Xd(e){pi(e)}function yi(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Zd(e,t,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function os(e,t,n){return n=$n(n),n.tag=3,n.payload={element:null},n.callback=function(){yi(e,t)},n}function Kd(e){return e=$n(e),e.tag=3,e}function Fd(e,t,n,l){var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var s=l.value;e.payload=function(){return c(s)},e.callback=function(){Zd(t,n,l)}}var f=n.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){Zd(t,n,l),typeof c!="function"&&(ll===null?ll=new Set([this]):ll.add(this));var g=l.stack;this.componentDidCatch(l.value,{componentStack:g!==null?g:""})})}function ly(e,t,n,l,c){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=n.alternate,t!==null&&er(t,n,c,!0),n=Lt.current,n!==null){switch(n.tag){case 13:return cn===null?Qs():n.alternate===null&&je===0&&(je=3),n.flags&=-257,n.flags|=65536,n.lanes=c,l===Lc?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([l]):t.add(l),Zs(e,l,c)),!1;case 22:return n.flags|=65536,l===Lc?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([l]):n.add(l)),Zs(e,l,c)),!1}throw Error(u(435,n.tag))}return Zs(e,l,c),Qs(),!1}if(Ne)return t=Lt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=c,l!==qc&&(e=Error(u(422),{cause:l}),Ya(Ut(e,n)))):(l!==qc&&(t=Error(u(423),{cause:l}),Ya(Ut(t,n))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,l=Ut(l,n),c=os(e.stateNode,l,c),xs(e,c),je!==4&&(je=2)),!1;var s=Error(u(520),{cause:l});if(s=Ut(s,n),or===null?or=[s]:or.push(s),je!==4&&(je=2),t===null)return!0;l=Ut(l,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=c&-c,n.lanes|=e,e=os(n.stateNode,l,e),xs(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(ll===null||!ll.has(s))))return n.flags|=65536,c&=-c,n.lanes|=c,c=Kd(c),Fd(c,e,n,l),xs(n,c),!1}n=n.return}while(n!==null);return!1}var Jd=Error(u(461)),nt=!1;function ot(e,t,n,l){t.child=e===null?ed(t,null,n,l):El(t,e.child,n,l)}function $d(e,t,n,l,c){n=n.render;var s=t.ref;if("ref"in l){var f={};for(var g in l)g!=="ref"&&(f[g]=l[g])}else f=l;return wl(t),l=Zc(e,t,n,f,s,c),g=Kc(),e!==null&&!nt?(Fc(e,t,c),Nn(e,t,c)):(Ne&&g&&Uc(t),t.flags|=1,ot(e,t,l,c),t.child)}function Wd(e,t,n,l,c){if(e===null){var s=n.type;return typeof s=="function"&&!zs(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,Id(e,t,s,l,c)):(e=Ai(n.type,null,l,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!gs(e,c)){var f=s.memoizedProps;if(n=n.compare,n=n!==null?n:La,n(f,l)&&e.ref===t.ref)return Nn(e,t,c)}return t.flags|=1,e=tl(s,l),e.ref=t.ref,e.return=t,t.child=e}function Id(e,t,n,l,c){if(e!==null){var s=e.memoizedProps;if(La(s,l)&&e.ref===t.ref)if(nt=!1,t.pendingProps=l=s,gs(e,c))(e.flags&131072)!==0&&(nt=!0);else return t.lanes=e.lanes,Nn(e,t,c)}return us(e,t,n,l,c)}function Pd(e,t,n){var l=t.pendingProps,c=l.children,s=(t.stateNode._pendingVisibility&2)!==0,f=e!==null?e.memoizedState:null;if(Pa(e,t),l.mode==="hidden"||s){if((t.flags&128)!==0){if(l=f!==null?f.baseLanes|n:n,e!==null){for(c=t.child=e.child,s=0;c!==null;)s=s|c.lanes|c.childLanes,c=c.sibling;t.childLanes=s&~l}else t.childLanes=0,t.child=null;return em(e,t,l,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ii(t,f!==null?f.cachePool:null),f!==null?td(t,f):Gc(),nd(t);else return t.lanes=t.childLanes=536870912,em(e,t,f!==null?f.baseLanes|n:n,n)}else f!==null?(ii(t,f.cachePool),td(t,f),Xn(),t.memoizedState=null):(e!==null&&ii(t,null),Gc(),Xn());return ot(e,t,c,n),t.child}function em(e,t,n,l){var c=Qc();return c=c===null?null:{parent:et._currentValue,pool:c},t.memoizedState={baseLanes:n,cachePool:c},e!==null&&ii(t,null),Gc(),nd(t),e!==null&&er(e,t,l,!0),null}function Pa(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=2097664);else{if(typeof n!="function"&&typeof n!="object")throw Error(u(284));(e===null||e.ref!==n)&&(t.flags|=2097664)}}function us(e,t,n,l,c){return wl(t),n=Zc(e,t,n,l,void 0,c),l=Kc(),e!==null&&!nt?(Fc(e,t,c),Nn(e,t,c)):(Ne&&l&&Uc(t),t.flags|=1,ot(e,t,n,c),t.child)}function tm(e,t,n,l,c,s){return wl(t),t.updateQueue=null,n=cd(t,l,n,c),id(e),l=Kc(),e!==null&&!nt?(Fc(e,t,s),Nn(e,t,s)):(Ne&&l&&Uc(t),t.flags|=1,ot(e,t,n,s),t.child)}function nm(e,t,n,l,c){if(wl(t),t.stateNode===null){var s=Jl,f=n.contextType;typeof f=="object"&&f!==null&&(s=ft(f)),s=new n(l,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=ss,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=l,s.state=t.memoizedState,s.refs={},Ns(t),f=n.contextType,s.context=typeof f=="object"&&f!==null?ft(f):Jl,s.state=t.memoizedState,f=n.getDerivedStateFromProps,typeof f=="function"&&(cs(t,n,f,l),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(f=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),f!==s.state&&ss.enqueueReplaceState(s,s.state,null),lr(t,l,s,c),nr(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){s=t.stateNode;var g=t.memoizedProps,A=Cl(n,g);s.props=A;var C=s.context,U=n.contextType;f=Jl,typeof U=="object"&&U!==null&&(f=ft(U));var G=n.getDerivedStateFromProps;U=typeof G=="function"||typeof s.getSnapshotBeforeUpdate=="function",g=t.pendingProps!==g,U||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(g||C!==f)&&jd(t,s,l,f),Jn=!1;var k=t.memoizedState;s.state=k,lr(t,l,s,c),nr(),C=t.memoizedState,g||k!==C||Jn?(typeof G=="function"&&(cs(t,n,G,l),C=t.memoizedState),(A=Jn||Vd(t,n,A,l,k,C,f))?(U||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=C),s.props=l,s.state=C,s.context=f,l=A):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{s=t.stateNode,Ss(e,t),f=t.memoizedProps,U=Cl(n,f),s.props=U,G=t.pendingProps,k=s.context,C=n.contextType,A=Jl,typeof C=="object"&&C!==null&&(A=ft(C)),g=n.getDerivedStateFromProps,(C=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(f!==G||k!==A)&&jd(t,s,l,A),Jn=!1,k=t.memoizedState,s.state=k,lr(t,l,s,c),nr();var R=t.memoizedState;f!==G||k!==R||Jn||e!==null&&e.dependencies!==null&&bi(e.dependencies)?(typeof g=="function"&&(cs(t,n,g,l),R=t.memoizedState),(U=Jn||Vd(t,n,U,l,k,R,A)||e!==null&&e.dependencies!==null&&bi(e.dependencies))?(C||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(l,R,A),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(l,R,A)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||f===e.memoizedProps&&k===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&k===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=R),s.props=l,s.state=R,s.context=A,l=U):(typeof s.componentDidUpdate!="function"||f===e.memoizedProps&&k===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&k===e.memoizedState||(t.flags|=1024),l=!1)}return s=l,Pa(e,t),l=(t.flags&128)!==0,s||l?(s=t.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&l?(t.child=El(t,e.child,null,c),t.child=El(t,null,n,c)):ot(e,t,n,c),t.memoizedState=s.state,e=t.child):e=Nn(e,t,c),e}function lm(e,t,n,l){return ja(),t.flags|=256,ot(e,t,n,l),t.child}var ds={dehydrated:null,treeContext:null,retryLane:0};function ms(e){return{baseLanes:e,cachePool:rd()}}function fs(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Yt),e}function am(e,t,n){var l=t.pendingProps,c=!1,s=(t.flags&128)!==0,f;if((f=s)||(f=e!==null&&e.memoizedState===null?!1:(Pe.current&2)!==0),f&&(c=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ne){if(c?Qn(t):Xn(),Ne){var g=st,A;if(A=g){e:{for(A=g,g=rn;A.nodeType!==8;){if(!g){g=null;break e}if(A=Wt(A.nextSibling),A===null){g=null;break e}}g=A}g!==null?(t.memoizedState={dehydrated:g,treeContext:bl!==null?{id:gn,overflow:vn}:null,retryLane:536870912},A=jt(18,null,null,0),A.stateNode=g,A.return=t,t.child=A,yt=t,st=null,A=!0):A=!1}A||vl(t)}if(g=t.memoizedState,g!==null&&(g=g.dehydrated,g!==null))return g.data==="$!"?t.lanes=16:t.lanes=536870912,null;En(t)}return g=l.children,l=l.fallback,c?(Xn(),c=t.mode,g=ps({mode:"hidden",children:g},c),l=Hl(l,c,n,null),g.return=t,l.return=t,g.sibling=l,t.child=g,c=t.child,c.memoizedState=ms(n),c.childLanes=fs(e,f,n),t.memoizedState=ds,l):(Qn(t),hs(t,g))}if(A=e.memoizedState,A!==null&&(g=A.dehydrated,g!==null)){if(s)t.flags&256?(Qn(t),t.flags&=-257,t=ys(e,t,n)):t.memoizedState!==null?(Xn(),t.child=e.child,t.flags|=128,t=null):(Xn(),c=l.fallback,g=t.mode,l=ps({mode:"visible",children:l.children},g),c=Hl(c,g,n,null),c.flags|=2,l.return=t,c.return=t,l.sibling=c,t.child=l,El(t,e.child,null,n),l=t.child,l.memoizedState=ms(n),l.childLanes=fs(e,f,n),t.memoizedState=ds,t=c);else if(Qn(t),g.data==="$!"){if(f=g.nextSibling&&g.nextSibling.dataset,f)var C=f.dgst;f=C,l=Error(u(419)),l.stack="",l.digest=f,Ya({value:l,source:null,stack:null}),t=ys(e,t,n)}else if(nt||er(e,t,n,!1),f=(n&e.childLanes)!==0,nt||f){if(f=Oe,f!==null){if(l=n&-n,(l&42)!==0)l=1;else switch(l){case 2:l=1;break;case 8:l=4;break;case 32:l=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:l=64;break;case 268435456:l=134217728;break;default:l=0}if(l=(l&(f.suspendedLanes|n))!==0?0:l,l!==0&&l!==A.retryLane)throw A.retryLane=l,Yn(e,l),bt(f,e,l),Jd}g.data==="$?"||Qs(),t=ys(e,t,n)}else g.data==="$?"?(t.flags|=128,t.child=e.child,t=gy.bind(null,e),g._reactRetry=t,t=null):(e=A.treeContext,st=Wt(g.nextSibling),yt=t,Ne=!0,Jt=null,rn=!1,e!==null&&(Bt[qt++]=gn,Bt[qt++]=vn,Bt[qt++]=bl,gn=e.id,vn=e.overflow,bl=t),t=hs(t,l.children),t.flags|=4096);return t}return c?(Xn(),c=l.fallback,g=t.mode,A=e.child,C=A.sibling,l=tl(A,{mode:"hidden",children:l.children}),l.subtreeFlags=A.subtreeFlags&31457280,C!==null?c=tl(C,c):(c=Hl(c,g,n,null),c.flags|=2),c.return=t,l.return=t,l.sibling=c,t.child=l,l=c,c=t.child,g=e.child.memoizedState,g===null?g=ms(n):(A=g.cachePool,A!==null?(C=et._currentValue,A=A.parent!==C?{parent:C,pool:C}:A):A=rd(),g={baseLanes:g.baseLanes|n,cachePool:A}),c.memoizedState=g,c.childLanes=fs(e,f,n),t.memoizedState=ds,l):(Qn(t),n=e.child,e=n.sibling,n=tl(n,{mode:"visible",children:l.children}),n.return=t,n.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=n,t.memoizedState=null,n)}function hs(e,t){return t=ps({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ps(e,t){return Tm(e,t,0,null)}function ys(e,t,n){return El(t,e.child,null,n),e=hs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function rm(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Es(e.return,t,n)}function bs(e,t,n,l,c){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:c}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=l,s.tail=n,s.tailMode=c)}function im(e,t,n){var l=t.pendingProps,c=l.revealOrder,s=l.tail;if(ot(e,t,l.children,n),l=Pe.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rm(e,n,t);else if(e.tag===19)rm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(qe(Pe,l),c){case"forwards":for(n=t.child,c=null;n!==null;)e=n.alternate,e!==null&&ri(e)===null&&(c=n),n=n.sibling;n=c,n===null?(c=t.child,t.child=null):(c=n.sibling,n.sibling=null),bs(t,!1,c,n,s);break;case"backwards":for(n=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&ri(e)===null){t.child=c;break}e=c.sibling,c.sibling=n,n=c,c=e}bs(t,!0,n,null,s);break;case"together":bs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Nn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),nl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(er(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=tl(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=tl(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function gs(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&bi(e)))}function ay(e,t,n){switch(t.tag){case 3:Mr(t,t.stateNode.containerInfo),Fn(t,et,e.memoizedState.cache),ja();break;case 27:case 5:sc(t);break;case 4:Mr(t,t.stateNode.containerInfo);break;case 10:Fn(t,t.type,t.memoizedProps.value);break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Qn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?am(e,t,n):(Qn(t),e=Nn(e,t,n),e!==null?e.sibling:null);Qn(t);break;case 19:var c=(e.flags&128)!==0;if(l=(n&t.childLanes)!==0,l||(er(e,t,n,!1),l=(n&t.childLanes)!==0),c){if(l)return im(e,t,n);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),qe(Pe,Pe.current),l)break;return null;case 22:case 23:return t.lanes=0,Pd(e,t,n);case 24:Fn(t,et,e.memoizedState.cache)}return Nn(e,t,n)}function cm(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)nt=!0;else{if(!gs(e,n)&&(t.flags&128)===0)return nt=!1,ay(e,t,n);nt=(e.flags&131072)!==0}else nt=!1,Ne&&(t.flags&1048576)!==0&&Xu(t,ei,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var l=t.elementType,c=l._init;if(l=c(l._payload),t.type=l,typeof l=="function")zs(l)?(e=Cl(l,e),t.tag=1,t=nm(null,t,l,e,n)):(t.tag=0,t=us(null,t,l,e,n));else{if(l!=null){if(c=l.$$typeof,c===Q){t.tag=11,t=$d(null,t,l,e,n);break e}else if(c===ge){t.tag=14,t=Wd(null,t,l,e,n);break e}}throw t=qn(l)||l,Error(u(306,t,""))}}return t;case 0:return us(e,t,t.type,t.pendingProps,n);case 1:return l=t.type,c=Cl(l,t.pendingProps),nm(e,t,l,c,n);case 3:e:{if(Mr(t,t.stateNode.containerInfo),e===null)throw Error(u(387));var s=t.pendingProps;c=t.memoizedState,l=c.element,Ss(e,t),lr(t,s,null,n);var f=t.memoizedState;if(s=f.cache,Fn(t,et,s),s!==c.cache&&As(t,[et],n,!0),nr(),s=f.element,c.isDehydrated)if(c={element:s,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=lm(e,t,s,n);break e}else if(s!==l){l=Ut(Error(u(424)),t),Ya(l),t=lm(e,t,s,n);break e}else for(st=Wt(t.stateNode.containerInfo.firstChild),yt=t,Ne=!0,Jt=null,rn=!0,n=ed(t,null,s,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ja(),s===l){t=Nn(e,t,n);break e}ot(e,t,s,n)}t=t.child}return t;case 26:return Pa(e,t),e===null?(n=df(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ne||(n=t.type,e=t.pendingProps,l=Mi(Ln.current).createElement(n),l[mt]=t,l[vt]=e,ut(l,n,e),tt(l),t.stateNode=l):t.memoizedState=df(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return sc(t),e===null&&Ne&&(l=t.stateNode=sf(t.type,t.pendingProps,Ln.current),yt=t,rn=!0,st=Wt(l.firstChild)),l=t.pendingProps.children,e!==null||Ne?ot(e,t,l,n):t.child=El(t,null,l,n),Pa(e,t),t.child;case 5:return e===null&&Ne&&((c=l=st)&&(l=Oy(l,t.type,t.pendingProps,rn),l!==null?(t.stateNode=l,yt=t,st=Wt(l.firstChild),rn=!1,c=!0):c=!1),c||vl(t)),sc(t),c=t.type,s=t.pendingProps,f=e!==null?e.memoizedProps:null,l=s.children,ao(c,s)?l=null:f!==null&&ao(c,f)&&(t.flags|=32),t.memoizedState!==null&&(c=Zc(e,t,Wp,null,null,n),gr._currentValue=c),Pa(e,t),ot(e,t,l,n),t.child;case 6:return e===null&&Ne&&((e=n=st)&&(n=Ry(n,t.pendingProps,rn),n!==null?(t.stateNode=n,yt=t,st=null,e=!0):e=!1),e||vl(t)),null;case 13:return am(e,t,n);case 4:return Mr(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=El(t,null,l,n):ot(e,t,l,n),t.child;case 11:return $d(e,t,t.type,t.pendingProps,n);case 7:return ot(e,t,t.pendingProps,n),t.child;case 8:return ot(e,t,t.pendingProps.children,n),t.child;case 12:return ot(e,t,t.pendingProps.children,n),t.child;case 10:return l=t.pendingProps,Fn(t,t.type,l.value),ot(e,t,l.children,n),t.child;case 9:return c=t.type._context,l=t.pendingProps.children,wl(t),c=ft(c),l=l(c),t.flags|=1,ot(e,t,l,n),t.child;case 14:return Wd(e,t,t.type,t.pendingProps,n);case 15:return Id(e,t,t.type,t.pendingProps,n);case 19:return im(e,t,n);case 22:return Pd(e,t,n);case 24:return wl(t),l=ft(et),e===null?(c=Qc(),c===null&&(c=Oe,s=jc(),c.pooledCache=s,s.refCount++,s!==null&&(c.pooledCacheLanes|=n),c=s),t.memoizedState={parent:l,cache:c},Ns(t),Fn(t,et,c)):((e.lanes&n)!==0&&(Ss(e,t),lr(t,null,null,n),nr()),c=e.memoizedState,s=t.memoizedState,c.parent!==l?(c={parent:l,cache:l},t.memoizedState=c,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=c),Fn(t,et,l)):(l=s.cache,Fn(t,et,l),l!==c.cache&&As(t,[et],n,!0))),ot(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}var vs=Ce(null),Dl=null,Sn=null;function Fn(e,t,n){qe(vs,t._currentValue),t._currentValue=n}function xn(e){e._currentValue=vs.current,Je(vs)}function Es(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function As(e,t,n,l){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var s=c.dependencies;if(s!==null){var f=c.child;s=s.firstContext;e:for(;s!==null;){var g=s;s=c;for(var A=0;A<t.length;A++)if(g.context===t[A]){s.lanes|=n,g=s.alternate,g!==null&&(g.lanes|=n),Es(s.return,n,e),l||(f=null);break e}s=g.next}}else if(c.tag===18){if(f=c.return,f===null)throw Error(u(341));f.lanes|=n,s=f.alternate,s!==null&&(s.lanes|=n),Es(f,n,e),f=null}else f=c.child;if(f!==null)f.return=c;else for(f=c;f!==null;){if(f===e){f=null;break}if(c=f.sibling,c!==null){c.return=f.return,f=c;break}f=f.return}c=f}}function er(e,t,n,l){e=null;for(var c=t,s=!1;c!==null;){if(!s){if((c.flags&524288)!==0)s=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var f=c.alternate;if(f===null)throw Error(u(387));if(f=f.memoizedProps,f!==null){var g=c.type;xt(c.pendingProps.value,f.value)||(e!==null?e.push(g):e=[g])}}else if(c===zr.current){if(f=c.alternate,f===null)throw Error(u(387));f.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(gr):e=[gr])}c=c.return}e!==null&&As(t,e,n,l),t.flags|=262144}function bi(e){for(e=e.firstContext;e!==null;){if(!xt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function wl(e){Dl=e,Sn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ft(e){return sm(Dl,e)}function gi(e,t){return Dl===null&&wl(e),sm(e,t)}function sm(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Sn===null){if(e===null)throw Error(u(308));Sn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Sn=Sn.next=t;return n}var Jn=!1;function Ns(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ss(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function $n(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Wn(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ge&2)!==0){var c=l.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),l.pending=t,t=Ir(e),Yu(e,null,n),t}return Wr(e,l,t,n),Ir(e)}function tr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194176)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,Wo(e,n)}}function xs(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var c=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var f={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?c=s=f:s=s.next=f,n=n.next}while(n!==null);s===null?c=s=t:s=s.next=t}else c=s=t;n={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:s,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Cs=!1;function nr(){if(Cs){var e=ta;if(e!==null)throw e}}function lr(e,t,n,l){Cs=!1;var c=e.updateQueue;Jn=!1;var s=c.firstBaseUpdate,f=c.lastBaseUpdate,g=c.shared.pending;if(g!==null){c.shared.pending=null;var A=g,C=A.next;A.next=null,f===null?s=C:f.next=C,f=A;var U=e.alternate;U!==null&&(U=U.updateQueue,g=U.lastBaseUpdate,g!==f&&(g===null?U.firstBaseUpdate=C:g.next=C,U.lastBaseUpdate=A))}if(s!==null){var G=c.baseState;f=0,U=C=A=null,g=s;do{var k=g.lane&-536870913,R=k!==g.lane;if(R?(Ae&k)===k:(l&k)===k){k!==0&&k===ea&&(Cs=!0),U!==null&&(U=U.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var I=e,oe=g;k=t;var Ye=n;switch(oe.tag){case 1:if(I=oe.payload,typeof I=="function"){G=I.call(Ye,G,k);break e}G=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=oe.payload,k=typeof I=="function"?I.call(Ye,G,k):I,k==null)break e;G=xe({},G,k);break e;case 2:Jn=!0}}k=g.callback,k!==null&&(e.flags|=64,R&&(e.flags|=8192),R=c.callbacks,R===null?c.callbacks=[k]:R.push(k))}else R={lane:k,tag:g.tag,payload:g.payload,callback:g.callback,next:null},U===null?(C=U=R,A=G):U=U.next=R,f|=k;if(g=g.next,g===null){if(g=c.shared.pending,g===null)break;R=g,g=R.next,R.next=null,c.lastBaseUpdate=R,c.shared.pending=null}}while(!0);U===null&&(A=G),c.baseState=A,c.firstBaseUpdate=C,c.lastBaseUpdate=U,s===null&&(c.shared.lanes=0),nl|=f,e.lanes=f,e.memoizedState=G}}function om(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function um(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)om(n[e],t)}function ar(e,t){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var c=l.next;n=c;do{if((n.tag&e)===e){l=void 0;var s=n.create,f=n.inst;l=s(),f.destroy=l}n=n.next}while(n!==c)}}catch(g){Te(t,t.return,g)}}function In(e,t,n){try{var l=t.updateQueue,c=l!==null?l.lastEffect:null;if(c!==null){var s=c.next;l=s;do{if((l.tag&e)===e){var f=l.inst,g=f.destroy;if(g!==void 0){f.destroy=void 0,c=t;var A=n;try{g()}catch(C){Te(c,A,C)}}}l=l.next}while(l!==s)}}catch(C){Te(t,t.return,C)}}function dm(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{um(t,n)}catch(l){Te(e,e.return,l)}}}function mm(e,t,n){n.props=Cl(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){Te(e,t,l)}}function _l(e,t){try{var n=e.ref;if(n!==null){var l=e.stateNode;switch(e.tag){case 26:case 27:case 5:var c=l;break;default:c=l}typeof n=="function"?e.refCleanup=n(c):n.current=c}}catch(s){Te(e,t,s)}}function Ct(e,t){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(c){Te(e,t,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(c){Te(e,t,c)}else n.current=null}function fm(e){var t=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(c){Te(e,e.return,c)}}function hm(e,t,n){try{var l=e.stateNode;Hy(l,e.type,n,t),l[vt]=t}catch(c){Te(e,e.return,c)}}function pm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function Ds(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||pm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ws(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=zi));else if(l!==4&&l!==27&&(e=e.child,e!==null))for(ws(e,t,n),e=e.sibling;e!==null;)ws(e,t,n),e=e.sibling}function vi(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&l!==27&&(e=e.child,e!==null))for(vi(e,t,n),e=e.sibling;e!==null;)vi(e,t,n),e=e.sibling}var Cn=!1,Ve=!1,_s=!1,ym=typeof WeakSet=="function"?WeakSet:Set,lt=null,bm=!1;function ry(e,t){if(e=e.containerInfo,no=Li,e=Ou(e),Tc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var c=l.anchorOffset,s=l.focusNode;l=l.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var f=0,g=-1,A=-1,C=0,U=0,G=e,k=null;t:for(;;){for(var R;G!==n||c!==0&&G.nodeType!==3||(g=f+c),G!==s||l!==0&&G.nodeType!==3||(A=f+l),G.nodeType===3&&(f+=G.nodeValue.length),(R=G.firstChild)!==null;)k=G,G=R;for(;;){if(G===e)break t;if(k===n&&++C===c&&(g=f),k===s&&++U===l&&(A=f),(R=G.nextSibling)!==null)break;G=k,k=G.parentNode}G=R}n=g===-1||A===-1?null:{start:g,end:A}}else n=null}n=n||{start:0,end:0}}else n=null;for(lo={focusedElem:e,selectionRange:n},Li=!1,lt=t;lt!==null;)if(t=lt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,lt=e;else for(;lt!==null;){switch(t=lt,s=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,n=t,c=s.memoizedProps,s=s.memoizedState,l=n.stateNode;try{var I=Cl(n.type,c,n.elementType===n.type);e=l.getSnapshotBeforeUpdate(I,s),l.__reactInternalSnapshotBeforeUpdate=e}catch(oe){Te(n,n.return,oe)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)co(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":co(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,lt=e;break}lt=t.return}return I=bm,bm=!1,I}function gm(e,t,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:wn(e,n),l&4&&ar(5,n);break;case 1:if(wn(e,n),l&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(g){Te(n,n.return,g)}else{var c=Cl(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(c,t,e.__reactInternalSnapshotBeforeUpdate)}catch(g){Te(n,n.return,g)}}l&64&&dm(n),l&512&&_l(n,n.return);break;case 3:if(wn(e,n),l&64&&(l=n.updateQueue,l!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{um(l,e)}catch(g){Te(n,n.return,g)}}break;case 26:wn(e,n),l&512&&_l(n,n.return);break;case 27:case 5:wn(e,n),t===null&&l&4&&fm(n),l&512&&_l(n,n.return);break;case 12:wn(e,n);break;case 13:wn(e,n),l&4&&Am(e,n);break;case 22:if(c=n.memoizedState!==null||Cn,!c){t=t!==null&&t.memoizedState!==null||Ve;var s=Cn,f=Ve;Cn=c,(Ve=t)&&!f?Pn(e,n,(n.subtreeFlags&8772)!==0):wn(e,n),Cn=s,Ve=f}l&512&&(n.memoizedProps.mode==="manual"?_l(n,n.return):Ct(n,n.return));break;default:wn(e,n)}}function vm(e){var t=e.alternate;t!==null&&(e.alternate=null,vm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&hc(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ie=null,Dt=!1;function Dn(e,t,n){for(n=n.child;n!==null;)Em(e,t,n),n=n.sibling}function Em(e,t,n){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(wa,n)}catch{}switch(n.tag){case 26:Ve||Ct(n,t),Dn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ve||Ct(n,t);var l=Ie,c=Dt;for(Ie=n.stateNode,Dn(e,t,n),n=n.stateNode,t=n.attributes;t.length;)n.removeAttributeNode(t[0]);hc(n),Ie=l,Dt=c;break;case 5:Ve||Ct(n,t);case 6:c=Ie;var s=Dt;if(Ie=null,Dn(e,t,n),Ie=c,Dt=s,Ie!==null)if(Dt)try{e=Ie,l=n.stateNode,e.nodeType===8?e.parentNode.removeChild(l):e.removeChild(l)}catch(f){Te(n,t,f)}else try{Ie.removeChild(n.stateNode)}catch(f){Te(n,t,f)}break;case 18:Ie!==null&&(Dt?(t=Ie,n=n.stateNode,t.nodeType===8?io(t.parentNode,n):t.nodeType===1&&io(t,n),Nr(t)):io(Ie,n.stateNode));break;case 4:l=Ie,c=Dt,Ie=n.stateNode.containerInfo,Dt=!0,Dn(e,t,n),Ie=l,Dt=c;break;case 0:case 11:case 14:case 15:Ve||In(2,n,t),Ve||In(4,n,t),Dn(e,t,n);break;case 1:Ve||(Ct(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"&&mm(n,t,l)),Dn(e,t,n);break;case 21:Dn(e,t,n);break;case 22:Ve||Ct(n,t),Ve=(l=Ve)||n.memoizedState!==null,Dn(e,t,n),Ve=l;break;default:Dn(e,t,n)}}function Am(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Nr(e)}catch(n){Te(t,t.return,n)}}function iy(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ym),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ym),t;default:throw Error(u(435,e.tag))}}function Hs(e,t){var n=iy(e);t.forEach(function(l){var c=vy.bind(null,e,l);n.has(l)||(n.add(l),l.then(c,c))})}function Gt(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var c=n[l],s=e,f=t,g=f;e:for(;g!==null;){switch(g.tag){case 27:case 5:Ie=g.stateNode,Dt=!1;break e;case 3:Ie=g.stateNode.containerInfo,Dt=!0;break e;case 4:Ie=g.stateNode.containerInfo,Dt=!0;break e}g=g.return}if(Ie===null)throw Error(u(160));Em(s,f,c),Ie=null,Dt=!1,s=c.alternate,s!==null&&(s.return=null),c.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Nm(t,e),t=t.sibling}var $t=null;function Nm(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Gt(t,e),Vt(e),l&4&&(In(3,e,e.return),ar(3,e),In(5,e,e.return));break;case 1:Gt(t,e),Vt(e),l&512&&(Ve||n===null||Ct(n,n.return)),l&64&&Cn&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var c=$t;if(Gt(t,e),Vt(e),l&512&&(Ve||n===null||Ct(n,n.return)),l&4){var s=n!==null?n.memoizedState:null;if(l=e.memoizedState,n===null)if(l===null)if(e.stateNode===null){e:{l=e.type,n=e.memoizedProps,c=c.ownerDocument||c;t:switch(l){case"title":s=c.getElementsByTagName("title")[0],(!s||s[Ta]||s[mt]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=c.createElement(l),c.head.insertBefore(s,c.querySelector("head > title"))),ut(s,l,n),s[mt]=e,tt(s),l=s;break e;case"link":var f=hf("link","href",c).get(l+(n.href||""));if(f){for(var g=0;g<f.length;g++)if(s=f[g],s.getAttribute("href")===(n.href==null?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){f.splice(g,1);break t}}s=c.createElement(l),ut(s,l,n),c.head.appendChild(s);break;case"meta":if(f=hf("meta","content",c).get(l+(n.content||""))){for(g=0;g<f.length;g++)if(s=f[g],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){f.splice(g,1);break t}}s=c.createElement(l),ut(s,l,n),c.head.appendChild(s);break;default:throw Error(u(468,l))}s[mt]=e,tt(s),l=s}e.stateNode=l}else pf(c,e.type,e.stateNode);else e.stateNode=ff(c,l,e.memoizedProps);else s!==l?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,l===null?pf(c,e.type,e.stateNode):ff(c,l,e.memoizedProps)):l===null&&e.stateNode!==null&&hm(e,e.memoizedProps,n.memoizedProps)}break;case 27:if(l&4&&e.alternate===null){c=e.stateNode,s=e.memoizedProps;try{for(var A=c.firstChild;A;){var C=A.nextSibling,U=A.nodeName;A[Ta]||U==="HEAD"||U==="BODY"||U==="SCRIPT"||U==="STYLE"||U==="LINK"&&A.rel.toLowerCase()==="stylesheet"||c.removeChild(A),A=C}for(var G=e.type,k=c.attributes;k.length;)c.removeAttributeNode(k[0]);ut(c,G,s),c[mt]=e,c[vt]=s}catch(I){Te(e,e.return,I)}}case 5:if(Gt(t,e),Vt(e),l&512&&(Ve||n===null||Ct(n,n.return)),e.flags&32){c=e.stateNode;try{jl(c,"")}catch(I){Te(e,e.return,I)}}l&4&&e.stateNode!=null&&(c=e.memoizedProps,hm(e,c,n!==null?n.memoizedProps:c)),l&1024&&(_s=!0);break;case 6:if(Gt(t,e),Vt(e),l&4){if(e.stateNode===null)throw Error(u(162));l=e.memoizedProps,n=e.stateNode;try{n.nodeValue=l}catch(I){Te(e,e.return,I)}}break;case 3:if(Ui=null,c=$t,$t=Oi(t.containerInfo),Gt(t,e),$t=c,Vt(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{Nr(t.containerInfo)}catch(I){Te(e,e.return,I)}_s&&(_s=!1,Sm(e));break;case 4:l=$t,$t=Oi(e.stateNode.containerInfo),Gt(t,e),Vt(e),$t=l;break;case 12:Gt(t,e),Vt(e);break;case 13:Gt(t,e),Vt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(qs=an()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Hs(e,l)));break;case 22:if(l&512&&(Ve||n===null||Ct(n,n.return)),A=e.memoizedState!==null,C=n!==null&&n.memoizedState!==null,U=Cn,G=Ve,Cn=U||A,Ve=G||C,Gt(t,e),Ve=G,Cn=U,Vt(e),t=e.stateNode,t._current=e,t._visibility&=-3,t._visibility|=t._pendingVisibility&2,l&8192&&(t._visibility=A?t._visibility&-2:t._visibility|1,A&&(t=Cn||Ve,n===null||C||t||ra(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))e:for(n=null,t=e;;){if(t.tag===5||t.tag===26||t.tag===27){if(n===null){C=n=t;try{if(c=C.stateNode,A)s=c.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{f=C.stateNode,g=C.memoizedProps.style;var R=g!=null&&g.hasOwnProperty("display")?g.display:null;f.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch(I){Te(C,C.return,I)}}}else if(t.tag===6){if(n===null){C=t;try{C.stateNode.nodeValue=A?"":C.memoizedProps}catch(I){Te(C,C.return,I)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,Hs(e,n))));break;case 19:Gt(t,e),Vt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Hs(e,l)));break;case 21:break;default:Gt(t,e),Vt(e)}}function Vt(e){var t=e.flags;if(t&2){try{if(e.tag!==27){e:{for(var n=e.return;n!==null;){if(pm(n)){var l=n;break e}n=n.return}throw Error(u(160))}switch(l.tag){case 27:var c=l.stateNode,s=Ds(e);vi(e,s,c);break;case 5:var f=l.stateNode;l.flags&32&&(jl(f,""),l.flags&=-33);var g=Ds(e);vi(e,g,f);break;case 3:case 4:var A=l.stateNode.containerInfo,C=Ds(e);ws(e,C,A);break;default:throw Error(u(161))}}}catch(U){Te(e,e.return,U)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Sm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function wn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)gm(e,t.alternate,t),t=t.sibling}function ra(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:In(4,t,t.return),ra(t);break;case 1:Ct(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&mm(t,t.return,n),ra(t);break;case 26:case 27:case 5:Ct(t,t.return),ra(t);break;case 22:Ct(t,t.return),t.memoizedState===null&&ra(t);break;default:ra(t)}e=e.sibling}}function Pn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,c=e,s=t,f=s.flags;switch(s.tag){case 0:case 11:case 15:Pn(c,s,n),ar(4,s);break;case 1:if(Pn(c,s,n),l=s,c=l.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(C){Te(l,l.return,C)}if(l=s,c=l.updateQueue,c!==null){var g=l.stateNode;try{var A=c.shared.hiddenCallbacks;if(A!==null)for(c.shared.hiddenCallbacks=null,c=0;c<A.length;c++)om(A[c],g)}catch(C){Te(l,l.return,C)}}n&&f&64&&dm(s),_l(s,s.return);break;case 26:case 27:case 5:Pn(c,s,n),n&&l===null&&f&4&&fm(s),_l(s,s.return);break;case 12:Pn(c,s,n);break;case 13:Pn(c,s,n),n&&f&4&&Am(c,s);break;case 22:s.memoizedState===null&&Pn(c,s,n),_l(s,s.return);break;default:Pn(c,s,n)}t=t.sibling}}function Ts(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Fa(n))}function ks(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Fa(e))}function el(e,t,n,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)xm(e,t,n,l),t=t.sibling}function xm(e,t,n,l){var c=t.flags;switch(t.tag){case 0:case 11:case 15:el(e,t,n,l),c&2048&&ar(9,t);break;case 3:el(e,t,n,l),c&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Fa(e)));break;case 12:if(c&2048){el(e,t,n,l),e=t.stateNode;try{var s=t.memoizedProps,f=s.id,g=s.onPostCommit;typeof g=="function"&&g(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(A){Te(t,t.return,A)}}else el(e,t,n,l);break;case 23:break;case 22:s=t.stateNode,t.memoizedState!==null?s._visibility&4?el(e,t,n,l):rr(e,t):s._visibility&4?el(e,t,n,l):(s._visibility|=4,ia(e,t,n,l,(t.subtreeFlags&10256)!==0)),c&2048&&Ts(t.alternate,t);break;case 24:el(e,t,n,l),c&2048&&ks(t.alternate,t);break;default:el(e,t,n,l)}}function ia(e,t,n,l,c){for(c=c&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var s=e,f=t,g=n,A=l,C=f.flags;switch(f.tag){case 0:case 11:case 15:ia(s,f,g,A,c),ar(8,f);break;case 23:break;case 22:var U=f.stateNode;f.memoizedState!==null?U._visibility&4?ia(s,f,g,A,c):rr(s,f):(U._visibility|=4,ia(s,f,g,A,c)),c&&C&2048&&Ts(f.alternate,f);break;case 24:ia(s,f,g,A,c),c&&C&2048&&ks(f.alternate,f);break;default:ia(s,f,g,A,c)}t=t.sibling}}function rr(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,l=t,c=l.flags;switch(l.tag){case 22:rr(n,l),c&2048&&Ts(l.alternate,l);break;case 24:rr(n,l),c&2048&&ks(l.alternate,l);break;default:rr(n,l)}t=t.sibling}}var ir=8192;function ca(e){if(e.subtreeFlags&ir)for(e=e.child;e!==null;)Cm(e),e=e.sibling}function Cm(e){switch(e.tag){case 26:ca(e),e.flags&ir&&e.memoizedState!==null&&Fy($t,e.memoizedState,e.memoizedProps);break;case 5:ca(e);break;case 3:case 4:var t=$t;$t=Oi(e.stateNode.containerInfo),ca(e),$t=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=ir,ir=16777216,ca(e),ir=t):ca(e));break;default:ca(e)}}function Dm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function cr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];lt=l,_m(l,e)}Dm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)wm(e),e=e.sibling}function wm(e){switch(e.tag){case 0:case 11:case 15:cr(e),e.flags&2048&&In(9,e,e.return);break;case 3:cr(e);break;case 12:cr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&4&&(e.return===null||e.return.tag!==13)?(t._visibility&=-5,Ei(e)):cr(e);break;default:cr(e)}}function Ei(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];lt=l,_m(l,e)}Dm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:In(8,t,t.return),Ei(t);break;case 22:n=t.stateNode,n._visibility&4&&(n._visibility&=-5,Ei(t));break;default:Ei(t)}e=e.sibling}}function _m(e,t){for(;lt!==null;){var n=lt;switch(n.tag){case 0:case 11:case 15:In(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Fa(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,lt=l;else e:for(n=e;lt!==null;){l=lt;var c=l.sibling,s=l.return;if(vm(l),l===n){lt=null;break e}if(c!==null){c.return=s,lt=c;break e}lt=s}}}function cy(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(e,t,n,l){return new cy(e,t,n,l)}function zs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function tl(e,t){var n=e.alternate;return n===null?(n=jt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&31457280,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Hm(e,t){e.flags&=31457282;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ai(e,t,n,l,c,s){var f=0;if(l=e,typeof e=="function")zs(e)&&(f=1);else if(typeof e=="string")f=Zy(e,n,ln.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case D:return Hl(n.children,c,s,t);case N:f=8,c|=24;break;case z:return e=jt(12,n,t,c|2),e.elementType=z,e.lanes=s,e;case Z:return e=jt(13,n,t,c),e.elementType=Z,e.lanes=s,e;case W:return e=jt(19,n,t,c),e.elementType=W,e.lanes=s,e;case ze:return Tm(n,c,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case M:case B:f=10;break e;case q:f=9;break e;case Q:f=11;break e;case ge:f=14;break e;case ce:f=16,l=null;break e}f=29,n=Error(u(130,e===null?"null":typeof e,"")),l=null}return t=jt(f,n,t,c),t.elementType=e,t.type=l,t.lanes=s,t}function Hl(e,t,n,l){return e=jt(7,e,l,t),e.lanes=n,e}function Tm(e,t,n,l){e=jt(22,e,l,t),e.elementType=ze,e.lanes=n;var c={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var s=c._current;if(s===null)throw Error(u(456));if((c._pendingVisibility&2)===0){var f=Yn(s,2);f!==null&&(c._pendingVisibility|=2,bt(f,s,2))}},attach:function(){var s=c._current;if(s===null)throw Error(u(456));if((c._pendingVisibility&2)!==0){var f=Yn(s,2);f!==null&&(c._pendingVisibility&=-3,bt(f,s,2))}}};return e.stateNode=c,e}function Ms(e,t,n){return e=jt(6,e,null,t),e.lanes=n,e}function Os(e,t,n){return t=jt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function _n(e){e.flags|=4}function km(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!yf(t)){if(t=Lt.current,t!==null&&((Ae&4194176)===Ae?cn!==null:(Ae&62914560)!==Ae&&(Ae&536870912)===0||t!==cn))throw Xa=Lc,Fu;e.flags|=8192}}function Ni(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Jo():536870912,e.lanes|=t,oa|=t)}function sr(e,t){if(!Ne)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var c=e.child;c!==null;)n|=c.lanes|c.childLanes,l|=c.subtreeFlags&31457280,l|=c.flags&31457280,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)n|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function sy(e,t,n){var l=t.pendingProps;switch(Bc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return Le(t),null;case 3:return n=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),xn(et),Ul(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Va(t)?_n(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Jt!==null&&(js(Jt),Jt=null))),Le(t),null;case 26:return n=t.memoizedState,e===null?(_n(t),n!==null?(Le(t),km(t,n)):(Le(t),t.flags&=-16777217)):n?n!==e.memoizedState?(_n(t),Le(t),km(t,n)):(Le(t),t.flags&=-16777217):(e.memoizedProps!==l&&_n(t),Le(t),t.flags&=-16777217),null;case 27:Or(t),n=Ln.current;var c=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==l&&_n(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return Le(t),null}e=ln.current,Va(t)?Zu(t):(e=sf(c,l,n),t.stateNode=e,_n(t))}return Le(t),null;case 5:if(Or(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&_n(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return Le(t),null}if(e=ln.current,Va(t))Zu(t);else{switch(c=Mi(Ln.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?c.createElement("select",{is:l.is}):c.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?c.createElement(n,{is:l.is}):c.createElement(n)}}e[mt]=t,e[vt]=l;e:for(c=t.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}t.stateNode=e;e:switch(ut(e,n,l),n){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&_n(t)}}return Le(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&_n(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(u(166));if(e=Ln.current,Va(t)){if(e=t.stateNode,n=t.memoizedProps,l=null,c=yt,c!==null)switch(c.tag){case 27:case 5:l=c.memoizedProps}e[mt]=t,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||tf(e.nodeValue,n)),e||vl(t)}else e=Mi(e).createTextNode(l),e[mt]=t,t.stateNode=e}return Le(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Va(t),l!==null&&l.dehydrated!==null){if(e===null){if(!c)throw Error(u(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(u(317));c[mt]=t}else ja(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Le(t),c=!1}else Jt!==null&&(js(Jt),Jt=null),c=!0;if(!c)return t.flags&256?(En(t),t):(En(t),null)}if(En(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=l!==null,e=e!==null&&e.memoizedState!==null,n){l=t.child,c=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(c=l.alternate.memoizedState.cachePool.pool);var s=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(s=l.memoizedState.cachePool.pool),s!==c&&(l.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),Ni(t,t.updateQueue),Le(t),null;case 4:return Ul(),e===null&&Ps(t.stateNode.containerInfo),Le(t),null;case 10:return xn(t.type),Le(t),null;case 19:if(Je(Pe),c=t.memoizedState,c===null)return Le(t),null;if(l=(t.flags&128)!==0,s=c.rendering,s===null)if(l)sr(c,!1);else{if(je!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=ri(e),s!==null){for(t.flags|=128,sr(c,!1),e=s.updateQueue,t.updateQueue=e,Ni(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Hm(n,e),n=n.sibling;return qe(Pe,Pe.current&1|2),t.child}e=e.sibling}c.tail!==null&&an()>Si&&(t.flags|=128,l=!0,sr(c,!1),t.lanes=4194304)}else{if(!l)if(e=ri(s),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Ni(t,e),sr(c,!0),c.tail===null&&c.tailMode==="hidden"&&!s.alternate&&!Ne)return Le(t),null}else 2*an()-c.renderingStartTime>Si&&n!==536870912&&(t.flags|=128,l=!0,sr(c,!1),t.lanes=4194304);c.isBackwards?(s.sibling=t.child,t.child=s):(e=c.last,e!==null?e.sibling=s:t.child=s,c.last=s)}return c.tail!==null?(t=c.tail,c.rendering=t,c.tail=t.sibling,c.renderingStartTime=an(),t.sibling=null,e=Pe.current,qe(Pe,l?e&1|2:e&1),t):(Le(t),null);case 22:case 23:return En(t),Vc(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(n&536870912)!==0&&(t.flags&128)===0&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),n=t.updateQueue,n!==null&&Ni(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==n&&(t.flags|=2048),e!==null&&Je(Al),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),xn(et),Le(t),null;case 25:return null}throw Error(u(156,t.tag))}function oy(e,t){switch(Bc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xn(et),Ul(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Or(t),null;case 13:if(En(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));ja()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Je(Pe),null;case 4:return Ul(),null;case 10:return xn(t.type),null;case 22:case 23:return En(t),Vc(),e!==null&&Je(Al),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return xn(et),null;case 25:return null;default:return null}}function zm(e,t){switch(Bc(t),t.tag){case 3:xn(et),Ul();break;case 26:case 27:case 5:Or(t);break;case 4:Ul();break;case 13:En(t);break;case 19:Je(Pe);break;case 10:xn(t.type);break;case 22:case 23:En(t),Vc(),e!==null&&Je(Al);break;case 24:xn(et)}}var uy={getCacheForType:function(e){var t=ft(et),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},dy=typeof WeakMap=="function"?WeakMap:Map,Ge=0,Oe=null,be=null,Ae=0,Re=0,wt=null,Hn=!1,sa=!1,Rs=!1,Tn=0,je=0,nl=0,Tl=0,Us=0,Yt=0,oa=0,or=null,on=null,Bs=!1,qs=0,Si=1/0,xi=null,ll=null,Ci=!1,kl=null,ur=0,Ls=0,Gs=null,dr=0,Vs=null;function _t(){if((Ge&2)!==0&&Ae!==0)return Ae&-Ae;if(le.T!==null){var e=ea;return e!==0?e:Js()}return Po()}function Mm(){Yt===0&&(Yt=(Ae&536870912)===0||Ne?Fo():536870912);var e=Lt.current;return e!==null&&(e.flags|=32),Yt}function bt(e,t,n){(e===Oe&&Re===2||e.cancelPendingCommit!==null)&&(ua(e,0),kn(e,Ae,Yt,!1)),Ha(e,n),((Ge&2)===0||e!==Oe)&&(e===Oe&&((Ge&2)===0&&(Tl|=n),je===4&&kn(e,Ae,Yt,!1)),un(e))}function Om(e,t,n){if((Ge&6)!==0)throw Error(u(327));var l=!n&&(t&60)===0&&(t&e.expiredLanes)===0||_a(e,t),c=l?hy(e,t):Xs(e,t,!0),s=l;do{if(c===0){sa&&!l&&kn(e,t,0,!1);break}else if(c===6)kn(e,t,0,!Hn);else{if(n=e.current.alternate,s&&!my(n)){c=Xs(e,t,!1),s=!1;continue}if(c===2){if(s=t,e.errorRecoveryDisabledLanes&s)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var g=e;c=or;var A=g.current.memoizedState.isDehydrated;if(A&&(ua(g,f).flags|=256),f=Xs(g,f,!1),f!==2){if(Rs&&!A){g.errorRecoveryDisabledLanes|=s,Tl|=s,c=4;break e}s=on,on=c,s!==null&&js(s)}c=f}if(s=!1,c!==2)continue}}if(c===1){ua(e,0),kn(e,t,0,!0);break}e:{switch(l=e,c){case 0:case 1:throw Error(u(345));case 4:if((t&4194176)===t){kn(l,t,Yt,!Hn);break e}break;case 2:on=null;break;case 3:case 5:break;default:throw Error(u(329))}if(l.finishedWork=n,l.finishedLanes=t,(t&62914560)===t&&(s=qs+300-an(),10<s)){if(kn(l,t,Yt,!Hn),qr(l,0)!==0)break e;l.timeoutHandle=af(Rm.bind(null,l,n,on,xi,Bs,t,Yt,Tl,oa,Hn,2,-0,0),s);break e}Rm(l,n,on,xi,Bs,t,Yt,Tl,oa,Hn,0,-0,0)}}break}while(!0);un(e)}function js(e){on===null?on=e:on.push.apply(on,e)}function Rm(e,t,n,l,c,s,f,g,A,C,U,G,k){var R=t.subtreeFlags;if((R&8192||(R&16785408)===16785408)&&(br={stylesheets:null,count:0,unsuspend:Ky},Cm(t),t=Jy(),t!==null)){e.cancelPendingCommit=t(jm.bind(null,e,n,l,c,f,g,A,1,G,k)),kn(e,s,f,!C);return}jm(e,n,l,c,f,g,A,U,G,k)}function my(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var c=n[l],s=c.getSnapshot;c=c.value;try{if(!xt(s(),c))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function kn(e,t,n,l){t&=~Us,t&=~Tl,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var c=t;0<c;){var s=31-St(c),f=1<<s;l[s]=-1,c&=~f}n!==0&&$o(e,n,t)}function Di(){return(Ge&6)===0?(mr(0),!1):!0}function Ys(){if(be!==null){if(Re===0)var e=be.return;else e=be,Sn=Dl=null,Jc(e),Il=null,Za=0,e=be;for(;e!==null;)zm(e.alternate,e),e=e.return;be=null}}function ua(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,ky(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Ys(),Oe=e,be=n=tl(e.current,null),Ae=t,Re=0,wt=null,Hn=!1,sa=_a(e,t),Rs=!1,oa=Yt=Us=Tl=nl=je=0,on=or=null,Bs=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var c=31-St(l),s=1<<c;t|=e[c],l&=~s}return Tn=t,$r(),n}function Um(e,t){pe=null,le.H=sn,t===Qa?(t=Wu(),Re=3):t===Fu?(t=Wu(),Re=4):Re=t===Jd?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,wt=t,be===null&&(je=1,yi(e,Ut(t,e.current)))}function Bm(){var e=le.H;return le.H=sn,e===null?sn:e}function qm(){var e=le.A;return le.A=uy,e}function Qs(){je=4,Hn||(Ae&4194176)!==Ae&&Lt.current!==null||(sa=!0),(nl&134217727)===0&&(Tl&134217727)===0||Oe===null||kn(Oe,Ae,Yt,!1)}function Xs(e,t,n){var l=Ge;Ge|=2;var c=Bm(),s=qm();(Oe!==e||Ae!==t)&&(xi=null,ua(e,t)),t=!1;var f=je;e:do try{if(Re!==0&&be!==null){var g=be,A=wt;switch(Re){case 8:Ys(),f=6;break e;case 3:case 2:case 6:Lt.current===null&&(t=!0);var C=Re;if(Re=0,wt=null,da(e,g,A,C),n&&sa){f=0;break e}break;default:C=Re,Re=0,wt=null,da(e,g,A,C)}}fy(),f=je;break}catch(U){Um(e,U)}while(!0);return t&&e.shellSuspendCounter++,Sn=Dl=null,Ge=l,le.H=c,le.A=s,be===null&&(Oe=null,Ae=0,$r()),f}function fy(){for(;be!==null;)Lm(be)}function hy(e,t){var n=Ge;Ge|=2;var l=Bm(),c=qm();Oe!==e||Ae!==t?(xi=null,Si=an()+500,ua(e,t)):sa=_a(e,t);e:do try{if(Re!==0&&be!==null){t=be;var s=wt;t:switch(Re){case 1:Re=0,wt=null,da(e,t,s,1);break;case 2:if(Ju(s)){Re=0,wt=null,Gm(t);break}t=function(){Re===2&&Oe===e&&(Re=7),un(e)},s.then(t,t);break e;case 3:Re=7;break e;case 4:Re=5;break e;case 7:Ju(s)?(Re=0,wt=null,Gm(t)):(Re=0,wt=null,da(e,t,s,7));break;case 5:var f=null;switch(be.tag){case 26:f=be.memoizedState;case 5:case 27:var g=be;if(!f||yf(f)){Re=0,wt=null;var A=g.sibling;if(A!==null)be=A;else{var C=g.return;C!==null?(be=C,wi(C)):be=null}break t}}Re=0,wt=null,da(e,t,s,5);break;case 6:Re=0,wt=null,da(e,t,s,6);break;case 8:Ys(),je=6;break e;default:throw Error(u(462))}}py();break}catch(U){Um(e,U)}while(!0);return Sn=Dl=null,le.H=l,le.A=c,Ge=n,be!==null?0:(Oe=null,Ae=0,$r(),je)}function py(){for(;be!==null&&!Bh();)Lm(be)}function Lm(e){var t=cm(e.alternate,e,Tn);e.memoizedProps=e.pendingProps,t===null?wi(e):be=t}function Gm(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=tm(n,t,t.pendingProps,t.type,void 0,Ae);break;case 11:t=tm(n,t,t.pendingProps,t.type.render,t.ref,Ae);break;case 5:Jc(t);default:zm(n,t),t=be=Hm(t,Tn),t=cm(n,t,Tn)}e.memoizedProps=e.pendingProps,t===null?wi(e):be=t}function da(e,t,n,l){Sn=Dl=null,Jc(t),Il=null,Za=0;var c=t.return;try{if(ly(e,c,t,n,Ae)){je=1,yi(e,Ut(n,e.current)),be=null;return}}catch(s){if(c!==null)throw be=c,s;je=1,yi(e,Ut(n,e.current)),be=null;return}t.flags&32768?(Ne||l===1?e=!0:sa||(Ae&536870912)!==0?e=!1:(Hn=e=!0,(l===2||l===3||l===6)&&(l=Lt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Vm(t,e)):wi(t)}function wi(e){var t=e;do{if((t.flags&32768)!==0){Vm(t,Hn);return}e=t.return;var n=sy(t.alternate,t,Tn);if(n!==null){be=n;return}if(t=t.sibling,t!==null){be=t;return}be=t=e}while(t!==null);je===0&&(je=5)}function Vm(e,t){do{var n=oy(e.alternate,e);if(n!==null){n.flags&=32767,be=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){be=e;return}be=e=n}while(e!==null);je=6,be=null}function jm(e,t,n,l,c,s,f,g,A,C){var U=le.T,G=K.p;try{K.p=2,le.T=null,yy(e,t,n,l,G,c,s,f,g,A,C)}finally{le.T=U,K.p=G}}function yy(e,t,n,l,c,s,f,g){do ma();while(kl!==null);if((Ge&6)!==0)throw Error(u(327));var A=e.finishedWork;if(l=e.finishedLanes,A===null)return null;if(e.finishedWork=null,e.finishedLanes=0,A===e.current)throw Error(u(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var C=A.lanes|A.childLanes;if(C|=Oc,Fh(e,l,C,s,f,g),e===Oe&&(be=Oe=null,Ae=0),(A.subtreeFlags&10256)===0&&(A.flags&10256)===0||Ci||(Ci=!0,Ls=C,Gs=n,Ey(Rr,function(){return ma(),null})),n=(A.flags&15990)!==0,(A.subtreeFlags&15990)!==0||n?(n=le.T,le.T=null,s=K.p,K.p=2,f=Ge,Ge|=4,ry(e,A),Nm(A,e),Gp(lo,e.containerInfo),Li=!!no,lo=no=null,e.current=A,gm(e,A.alternate,A),qh(),Ge=f,K.p=s,le.T=n):e.current=A,Ci?(Ci=!1,kl=e,ur=l):Ym(e,C),C=e.pendingLanes,C===0&&(ll=null),Yh(A.stateNode),un(e),t!==null)for(c=e.onRecoverableError,A=0;A<t.length;A++)C=t[A],c(C.value,{componentStack:C.stack});return(ur&3)!==0&&ma(),C=e.pendingLanes,(l&4194218)!==0&&(C&42)!==0?e===Vs?dr++:(dr=0,Vs=e):dr=0,mr(0),null}function Ym(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Fa(t)))}function ma(){if(kl!==null){var e=kl,t=Ls;Ls=0;var n=Io(ur),l=le.T,c=K.p;try{if(K.p=32>n?32:n,le.T=null,kl===null)var s=!1;else{n=Gs,Gs=null;var f=kl,g=ur;if(kl=null,ur=0,(Ge&6)!==0)throw Error(u(331));var A=Ge;if(Ge|=4,wm(f.current),xm(f,f.current,g,n),Ge=A,mr(0,!1),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(wa,f)}catch{}s=!0}return s}finally{K.p=c,le.T=l,Ym(e,t)}}return!1}function Qm(e,t,n){t=Ut(n,t),t=os(e.stateNode,t,2),e=Wn(e,t,2),e!==null&&(Ha(e,2),un(e))}function Te(e,t,n){if(e.tag===3)Qm(e,e,n);else for(;t!==null;){if(t.tag===3){Qm(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ll===null||!ll.has(l))){e=Ut(n,e),n=Kd(2),l=Wn(t,n,2),l!==null&&(Fd(n,l,t,e),Ha(l,2),un(l));break}}t=t.return}}function Zs(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new dy;var c=new Set;l.set(t,c)}else c=l.get(t),c===void 0&&(c=new Set,l.set(t,c));c.has(n)||(Rs=!0,c.add(n),e=by.bind(null,e,t,n),t.then(e,e))}function by(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Oe===e&&(Ae&n)===n&&(je===4||je===3&&(Ae&62914560)===Ae&&300>an()-qs?(Ge&2)===0&&ua(e,0):Us|=n,oa===Ae&&(oa=0)),un(e)}function Xm(e,t){t===0&&(t=Jo()),e=Yn(e,t),e!==null&&(Ha(e,t),un(e))}function gy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Xm(e,n)}function vy(e,t){var n=0;switch(e.tag){case 13:var l=e.stateNode,c=e.memoizedState;c!==null&&(n=c.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(u(314))}l!==null&&l.delete(t),Xm(e,n)}function Ey(e,t){return uc(e,t)}var _i=null,fa=null,Ks=!1,Hi=!1,Fs=!1,zl=0;function un(e){e!==fa&&e.next===null&&(fa===null?_i=fa=e:fa=fa.next=e),Hi=!0,Ks||(Ks=!0,Ny(Ay))}function mr(e,t){if(!Fs&&Hi){Fs=!0;do for(var n=!1,l=_i;l!==null;){if(e!==0){var c=l.pendingLanes;if(c===0)var s=0;else{var f=l.suspendedLanes,g=l.pingedLanes;s=(1<<31-St(42|e)+1)-1,s&=c&~(f&~g),s=s&201326677?s&201326677|1:s?s|2:0}s!==0&&(n=!0,Fm(l,s))}else s=Ae,s=qr(l,l===Oe?s:0),(s&3)===0||_a(l,s)||(n=!0,Fm(l,s));l=l.next}while(n);Fs=!1}}function Ay(){Hi=Ks=!1;var e=0;zl!==0&&(Ty()&&(e=zl),zl=0);for(var t=an(),n=null,l=_i;l!==null;){var c=l.next,s=Zm(l,t);s===0?(l.next=null,n===null?_i=c:n.next=c,c===null&&(fa=n)):(n=l,(e!==0||(s&3)!==0)&&(Hi=!0)),l=c}mr(e)}function Zm(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,c=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var f=31-St(s),g=1<<f,A=c[f];A===-1?((g&n)===0||(g&l)!==0)&&(c[f]=Kh(g,t)):A<=t&&(e.expiredLanes|=g),s&=~g}if(t=Oe,n=Ae,n=qr(e,e===t?n:0),l=e.callbackNode,n===0||e===t&&Re===2||e.cancelPendingCommit!==null)return l!==null&&l!==null&&dc(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||_a(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(l!==null&&dc(l),Io(n)){case 2:case 8:n=Zo;break;case 32:n=Rr;break;case 268435456:n=Ko;break;default:n=Rr}return l=Km.bind(null,e),n=uc(n,l),e.callbackPriority=t,e.callbackNode=n,t}return l!==null&&l!==null&&dc(l),e.callbackPriority=2,e.callbackNode=null,2}function Km(e,t){var n=e.callbackNode;if(ma()&&e.callbackNode!==n)return null;var l=Ae;return l=qr(e,e===Oe?l:0),l===0?null:(Om(e,l,t),Zm(e,an()),e.callbackNode!=null&&e.callbackNode===n?Km.bind(null,e):null)}function Fm(e,t){if(ma())return null;Om(e,t,!0)}function Ny(e){zy(function(){(Ge&6)!==0?uc(Xo,e):e()})}function Js(){return zl===0&&(zl=Fo()),zl}function Jm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Yr(""+e)}function $m(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Sy(e,t,n,l,c){if(t==="submit"&&n&&n.stateNode===c){var s=Jm((c[vt]||null).action),f=l.submitter;f&&(t=(t=f[vt]||null)?Jm(t.formAction):f.getAttribute("formAction"),t!==null&&(s=t,f=null));var g=new Kr("action","action",null,l,c);e.push({event:g,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(zl!==0){var A=f?$m(c,f):new FormData(c);as(n,{pending:!0,data:A,method:c.method,action:s},null,A)}}else typeof s=="function"&&(g.preventDefault(),A=f?$m(c,f):new FormData(c),as(n,{pending:!0,data:A,method:c.method,action:s},s,A))},currentTarget:c}]})}}for(var $s=0;$s<ju.length;$s++){var Ws=ju[$s],xy=Ws.toLowerCase(),Cy=Ws[0].toUpperCase()+Ws.slice(1);Ft(xy,"on"+Cy)}Ft(Bu,"onAnimationEnd"),Ft(qu,"onAnimationIteration"),Ft(Lu,"onAnimationStart"),Ft("dblclick","onDoubleClick"),Ft("focusin","onFocus"),Ft("focusout","onBlur"),Ft(jp,"onTransitionRun"),Ft(Yp,"onTransitionStart"),Ft(Qp,"onTransitionCancel"),Ft(Gu,"onTransitionEnd"),Gl("onMouseEnter",["mouseout","mouseover"]),Gl("onMouseLeave",["mouseout","mouseover"]),Gl("onPointerEnter",["pointerout","pointerover"]),Gl("onPointerLeave",["pointerout","pointerover"]),fl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),fl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),fl("onBeforeInput",["compositionend","keypress","textInput","paste"]),fl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),fl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),fl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fr));function Wm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],c=l.event;l=l.listeners;e:{var s=void 0;if(t)for(var f=l.length-1;0<=f;f--){var g=l[f],A=g.instance,C=g.currentTarget;if(g=g.listener,A!==s&&c.isPropagationStopped())break e;s=g,c.currentTarget=C;try{s(c)}catch(U){pi(U)}c.currentTarget=null,s=A}else for(f=0;f<l.length;f++){if(g=l[f],A=g.instance,C=g.currentTarget,g=g.listener,A!==s&&c.isPropagationStopped())break e;s=g,c.currentTarget=C;try{s(c)}catch(U){pi(U)}c.currentTarget=null,s=A}}}}function ve(e,t){var n=t[fc];n===void 0&&(n=t[fc]=new Set);var l=e+"__bubble";n.has(l)||(Im(t,e,2,!1),n.add(l))}function Is(e,t,n){var l=0;t&&(l|=4),Im(n,e,l,t)}var Ti="_reactListening"+Math.random().toString(36).slice(2);function Ps(e){if(!e[Ti]){e[Ti]=!0,tu.forEach(function(n){n!=="selectionchange"&&(Dy.has(n)||Is(n,!1,e),Is(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ti]||(t[Ti]=!0,Is("selectionchange",!1,t))}}function Im(e,t,n,l){switch(Nf(t)){case 2:var c=Iy;break;case 8:c=Py;break;default:c=fo}n=c.bind(null,t,n,e),c=void 0,!Ac||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),l?c!==void 0?e.addEventListener(t,n,{capture:!0,passive:c}):e.addEventListener(t,n,!0):c!==void 0?e.addEventListener(t,n,{passive:c}):e.addEventListener(t,n,!1)}function eo(e,t,n,l,c){var s=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var f=l.tag;if(f===3||f===4){var g=l.stateNode.containerInfo;if(g===c||g.nodeType===8&&g.parentNode===c)break;if(f===4)for(f=l.return;f!==null;){var A=f.tag;if((A===3||A===4)&&(A=f.stateNode.containerInfo,A===c||A.nodeType===8&&A.parentNode===c))return;f=f.return}for(;g!==null;){if(f=ml(g),f===null)return;if(A=f.tag,A===5||A===6||A===26||A===27){l=s=f;continue e}g=g.parentNode}}l=l.return}fu(function(){var C=s,U=vc(n),G=[];e:{var k=Vu.get(e);if(k!==void 0){var R=Kr,I=e;switch(e){case"keypress":if(Xr(n)===0)break e;case"keydown":case"keyup":R=vp;break;case"focusin":I="focus",R=Cc;break;case"focusout":I="blur",R=Cc;break;case"beforeblur":case"afterblur":R=Cc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=yu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=cp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=Np;break;case Bu:case qu:case Lu:R=up;break;case Gu:R=xp;break;case"scroll":case"scrollend":R=rp;break;case"wheel":R=Dp;break;case"copy":case"cut":case"paste":R=mp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=gu;break;case"toggle":case"beforetoggle":R=_p}var oe=(t&4)!==0,Ye=!oe&&(e==="scroll"||e==="scrollend"),_=oe?k!==null?k+"Capture":null:k;oe=[];for(var x=C,T;x!==null;){var L=x;if(T=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||T===null||_===null||(L=za(x,_),L!=null&&oe.push(hr(x,L,T))),Ye)break;x=x.return}0<oe.length&&(k=new R(k,I,null,n,U),G.push({event:k,listeners:oe}))}}if((t&7)===0){e:{if(k=e==="mouseover"||e==="pointerover",R=e==="mouseout"||e==="pointerout",k&&n!==gc&&(I=n.relatedTarget||n.fromElement)&&(ml(I)||I[Bl]))break e;if((R||k)&&(k=U.window===U?U:(k=U.ownerDocument)?k.defaultView||k.parentWindow:window,R?(I=n.relatedTarget||n.toElement,R=C,I=I?ml(I):null,I!==null&&(Ye=re(I),oe=I.tag,I!==Ye||oe!==5&&oe!==27&&oe!==6)&&(I=null)):(R=null,I=C),R!==I)){if(oe=yu,L="onMouseLeave",_="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(oe=gu,L="onPointerLeave",_="onPointerEnter",x="pointer"),Ye=R==null?k:ka(R),T=I==null?k:ka(I),k=new oe(L,x+"leave",R,n,U),k.target=Ye,k.relatedTarget=T,L=null,ml(U)===C&&(oe=new oe(_,x+"enter",I,n,U),oe.target=T,oe.relatedTarget=Ye,L=oe),Ye=L,R&&I)t:{for(oe=R,_=I,x=0,T=oe;T;T=ha(T))x++;for(T=0,L=_;L;L=ha(L))T++;for(;0<x-T;)oe=ha(oe),x--;for(;0<T-x;)_=ha(_),T--;for(;x--;){if(oe===_||_!==null&&oe===_.alternate)break t;oe=ha(oe),_=ha(_)}oe=null}else oe=null;R!==null&&Pm(G,k,R,oe,!1),I!==null&&Ye!==null&&Pm(G,Ye,I,oe,!0)}}e:{if(k=C?ka(C):window,R=k.nodeName&&k.nodeName.toLowerCase(),R==="select"||R==="input"&&k.type==="file")var F=Du;else if(xu(k))if(wu)F=qp;else{F=Up;var ye=Rp}else R=k.nodeName,!R||R.toLowerCase()!=="input"||k.type!=="checkbox"&&k.type!=="radio"?C&&bc(C.elementType)&&(F=Du):F=Bp;if(F&&(F=F(e,C))){Cu(G,F,n,U);break e}ye&&ye(e,k,C),e==="focusout"&&C&&k.type==="number"&&C.memoizedProps.value!=null&&yc(k,"number",k.value)}switch(ye=C?ka(C):window,e){case"focusin":(xu(ye)||ye.contentEditable==="true")&&(Zl=ye,kc=C,Ga=null);break;case"focusout":Ga=kc=Zl=null;break;case"mousedown":zc=!0;break;case"contextmenu":case"mouseup":case"dragend":zc=!1,Ru(G,n,U);break;case"selectionchange":if(Vp)break;case"keydown":case"keyup":Ru(G,n,U)}var P;if(wc)e:{switch(e){case"compositionstart":var ne="onCompositionStart";break e;case"compositionend":ne="onCompositionEnd";break e;case"compositionupdate":ne="onCompositionUpdate";break e}ne=void 0}else Xl?Nu(e,n)&&(ne="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ne="onCompositionStart");ne&&(vu&&n.locale!=="ko"&&(Xl||ne!=="onCompositionStart"?ne==="onCompositionEnd"&&Xl&&(P=hu()):(jn=U,Nc="value"in jn?jn.value:jn.textContent,Xl=!0)),ye=ki(C,ne),0<ye.length&&(ne=new bu(ne,e,null,n,U),G.push({event:ne,listeners:ye}),P?ne.data=P:(P=Su(n),P!==null&&(ne.data=P)))),(P=Tp?kp(e,n):zp(e,n))&&(ne=ki(C,"onBeforeInput"),0<ne.length&&(ye=new bu("onBeforeInput","beforeinput",null,n,U),G.push({event:ye,listeners:ne}),ye.data=P)),Sy(G,e,C,n,U)}Wm(G,t)})}function hr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ki(e,t){for(var n=t+"Capture",l=[];e!==null;){var c=e,s=c.stateNode;c=c.tag,c!==5&&c!==26&&c!==27||s===null||(c=za(e,n),c!=null&&l.unshift(hr(e,c,s)),c=za(e,t),c!=null&&l.push(hr(e,c,s))),e=e.return}return l}function ha(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Pm(e,t,n,l,c){for(var s=t._reactName,f=[];n!==null&&n!==l;){var g=n,A=g.alternate,C=g.stateNode;if(g=g.tag,A!==null&&A===l)break;g!==5&&g!==26&&g!==27||C===null||(A=C,c?(C=za(n,s),C!=null&&f.unshift(hr(n,C,A))):c||(C=za(n,s),C!=null&&f.push(hr(n,C,A)))),n=n.return}f.length!==0&&e.push({event:t,listeners:f})}var wy=/\r\n?/g,_y=/\u0000|\uFFFD/g;function ef(e){return(typeof e=="string"?e:""+e).replace(wy,`
`).replace(_y,"")}function tf(e,t){return t=ef(t),ef(e)===t}function zi(){}function He(e,t,n,l,c,s){switch(n){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||jl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&jl(e,""+l);break;case"className":Gr(e,"class",l);break;case"tabIndex":Gr(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Gr(e,n,l);break;case"style":du(e,l,s);break;case"data":if(t!=="object"){Gr(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=Yr(""+l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&He(e,t,"name",c.name,c,null),He(e,t,"formEncType",c.formEncType,c,null),He(e,t,"formMethod",c.formMethod,c,null),He(e,t,"formTarget",c.formTarget,c,null)):(He(e,t,"encType",c.encType,c,null),He(e,t,"method",c.method,c,null),He(e,t,"target",c.target,c,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=Yr(""+l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=zi);break;case"onScroll":l!=null&&ve("scroll",e);break;case"onScrollEnd":l!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(n=l.__html,n!=null){if(c.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=Yr(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""+l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":ve("beforetoggle",e),ve("toggle",e),Lr(e,"popover",l);break;case"xlinkActuate":bn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":bn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":bn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":bn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":bn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":bn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":bn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":bn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":bn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Lr(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=lp.get(n)||n,Lr(e,n,l))}}function to(e,t,n,l,c,s){switch(n){case"style":du(e,l,s);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(n=l.__html,n!=null){if(c.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"children":typeof l=="string"?jl(e,l):(typeof l=="number"||typeof l=="bigint")&&jl(e,""+l);break;case"onScroll":l!=null&&ve("scroll",e);break;case"onScrollEnd":l!=null&&ve("scrollend",e);break;case"onClick":l!=null&&(e.onclick=zi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!nu.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(c=n.endsWith("Capture"),t=n.slice(2,c?n.length-7:void 0),s=e[vt]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,c),typeof l=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,l,c);break e}n in e?e[n]=l:l===!0?e.setAttribute(n,""):Lr(e,n,l)}}}function ut(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var l=!1,c=!1,s;for(s in n)if(n.hasOwnProperty(s)){var f=n[s];if(f!=null)switch(s){case"src":l=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:He(e,t,s,f,n,null)}}c&&He(e,t,"srcSet",n.srcSet,n,null),l&&He(e,t,"src",n.src,n,null);return;case"input":ve("invalid",e);var g=s=f=c=null,A=null,C=null;for(l in n)if(n.hasOwnProperty(l)){var U=n[l];if(U!=null)switch(l){case"name":c=U;break;case"type":f=U;break;case"checked":A=U;break;case"defaultChecked":C=U;break;case"value":s=U;break;case"defaultValue":g=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(u(137,t));break;default:He(e,t,l,U,n,null)}}cu(e,s,g,A,C,f,c,!1),Vr(e);return;case"select":ve("invalid",e),l=f=s=null;for(c in n)if(n.hasOwnProperty(c)&&(g=n[c],g!=null))switch(c){case"value":s=g;break;case"defaultValue":f=g;break;case"multiple":l=g;default:He(e,t,c,g,n,null)}t=s,n=f,e.multiple=!!l,t!=null?Vl(e,!!l,t,!1):n!=null&&Vl(e,!!l,n,!0);return;case"textarea":ve("invalid",e),s=c=l=null;for(f in n)if(n.hasOwnProperty(f)&&(g=n[f],g!=null))switch(f){case"value":l=g;break;case"defaultValue":c=g;break;case"children":s=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(u(91));break;default:He(e,t,f,g,n,null)}ou(e,l,c,s),Vr(e);return;case"option":for(A in n)if(n.hasOwnProperty(A)&&(l=n[A],l!=null))switch(A){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:He(e,t,A,l,n,null)}return;case"dialog":ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(l=0;l<fr.length;l++)ve(fr[l],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(C in n)if(n.hasOwnProperty(C)&&(l=n[C],l!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:He(e,t,C,l,n,null)}return;default:if(bc(t)){for(U in n)n.hasOwnProperty(U)&&(l=n[U],l!==void 0&&to(e,t,U,l,n,void 0));return}}for(g in n)n.hasOwnProperty(g)&&(l=n[g],l!=null&&He(e,t,g,l,n,null))}function Hy(e,t,n,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,s=null,f=null,g=null,A=null,C=null,U=null;for(R in n){var G=n[R];if(n.hasOwnProperty(R)&&G!=null)switch(R){case"checked":break;case"value":break;case"defaultValue":A=G;default:l.hasOwnProperty(R)||He(e,t,R,null,l,G)}}for(var k in l){var R=l[k];if(G=n[k],l.hasOwnProperty(k)&&(R!=null||G!=null))switch(k){case"type":s=R;break;case"name":c=R;break;case"checked":C=R;break;case"defaultChecked":U=R;break;case"value":f=R;break;case"defaultValue":g=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(u(137,t));break;default:R!==G&&He(e,t,k,R,l,G)}}pc(e,f,g,A,C,U,s,c);return;case"select":R=f=g=k=null;for(s in n)if(A=n[s],n.hasOwnProperty(s)&&A!=null)switch(s){case"value":break;case"multiple":R=A;default:l.hasOwnProperty(s)||He(e,t,s,null,l,A)}for(c in l)if(s=l[c],A=n[c],l.hasOwnProperty(c)&&(s!=null||A!=null))switch(c){case"value":k=s;break;case"defaultValue":g=s;break;case"multiple":f=s;default:s!==A&&He(e,t,c,s,l,A)}t=g,n=f,l=R,k!=null?Vl(e,!!n,k,!1):!!l!=!!n&&(t!=null?Vl(e,!!n,t,!0):Vl(e,!!n,n?[]:"",!1));return;case"textarea":R=k=null;for(g in n)if(c=n[g],n.hasOwnProperty(g)&&c!=null&&!l.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:He(e,t,g,null,l,c)}for(f in l)if(c=l[f],s=n[f],l.hasOwnProperty(f)&&(c!=null||s!=null))switch(f){case"value":k=c;break;case"defaultValue":R=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(u(91));break;default:c!==s&&He(e,t,f,c,l,s)}su(e,k,R);return;case"option":for(var I in n)if(k=n[I],n.hasOwnProperty(I)&&k!=null&&!l.hasOwnProperty(I))switch(I){case"selected":e.selected=!1;break;default:He(e,t,I,null,l,k)}for(A in l)if(k=l[A],R=n[A],l.hasOwnProperty(A)&&k!==R&&(k!=null||R!=null))switch(A){case"selected":e.selected=k&&typeof k!="function"&&typeof k!="symbol";break;default:He(e,t,A,k,l,R)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var oe in n)k=n[oe],n.hasOwnProperty(oe)&&k!=null&&!l.hasOwnProperty(oe)&&He(e,t,oe,null,l,k);for(C in l)if(k=l[C],R=n[C],l.hasOwnProperty(C)&&k!==R&&(k!=null||R!=null))switch(C){case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(u(137,t));break;default:He(e,t,C,k,l,R)}return;default:if(bc(t)){for(var Ye in n)k=n[Ye],n.hasOwnProperty(Ye)&&k!==void 0&&!l.hasOwnProperty(Ye)&&to(e,t,Ye,void 0,l,k);for(U in l)k=l[U],R=n[U],!l.hasOwnProperty(U)||k===R||k===void 0&&R===void 0||to(e,t,U,k,l,R);return}}for(var _ in n)k=n[_],n.hasOwnProperty(_)&&k!=null&&!l.hasOwnProperty(_)&&He(e,t,_,null,l,k);for(G in l)k=l[G],R=n[G],!l.hasOwnProperty(G)||k===R||k==null&&R==null||He(e,t,G,k,l,R)}var no=null,lo=null;function Mi(e){return e.nodeType===9?e:e.ownerDocument}function nf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function lf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ao(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ro=null;function Ty(){var e=window.event;return e&&e.type==="popstate"?e===ro?!1:(ro=e,!0):(ro=null,!1)}var af=typeof setTimeout=="function"?setTimeout:void 0,ky=typeof clearTimeout=="function"?clearTimeout:void 0,rf=typeof Promise=="function"?Promise:void 0,zy=typeof queueMicrotask=="function"?queueMicrotask:typeof rf<"u"?function(e){return rf.resolve(null).then(e).catch(My)}:af;function My(e){setTimeout(function(){throw e})}function io(e,t){var n=t,l=0;do{var c=n.nextSibling;if(e.removeChild(n),c&&c.nodeType===8)if(n=c.data,n==="/$"){if(l===0){e.removeChild(c),Nr(t);return}l--}else n!=="$"&&n!=="$?"&&n!=="$!"||l++;n=c}while(n);Nr(t)}function co(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":co(n),hc(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Oy(e,t,n,l){for(;e.nodeType===1;){var c=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Ta])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==c.rel||e.getAttribute("href")!==(c.href==null?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Wt(e.nextSibling),e===null)break}return null}function Ry(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Wt(e.nextSibling),e===null))return null;return e}function Wt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}function cf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function sf(e,t,n){switch(t=Mi(n),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}var Qt=new Map,of=new Set;function Oi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var zn=K.d;K.d={f:Uy,r:By,D:qy,C:Ly,L:Gy,m:Vy,X:Yy,S:jy,M:Qy};function Uy(){var e=zn.f(),t=Di();return e||t}function By(e){var t=ql(e);t!==null&&t.tag===5&&t.type==="form"?Rd(t):zn.r(e)}var pa=typeof document>"u"?null:document;function uf(e,t,n){var l=pa;if(l&&typeof t=="string"&&t){var c=Ot(t);c='link[rel="'+e+'"][href="'+c+'"]',typeof n=="string"&&(c+='[crossorigin="'+n+'"]'),of.has(c)||(of.add(c),e={rel:e,crossOrigin:n,href:t},l.querySelector(c)===null&&(t=l.createElement("link"),ut(t,"link",e),tt(t),l.head.appendChild(t)))}}function qy(e){zn.D(e),uf("dns-prefetch",e,null)}function Ly(e,t){zn.C(e,t),uf("preconnect",e,t)}function Gy(e,t,n){zn.L(e,t,n);var l=pa;if(l&&e&&t){var c='link[rel="preload"][as="'+Ot(t)+'"]';t==="image"&&n&&n.imageSrcSet?(c+='[imagesrcset="'+Ot(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(c+='[imagesizes="'+Ot(n.imageSizes)+'"]')):c+='[href="'+Ot(e)+'"]';var s=c;switch(t){case"style":s=ya(e);break;case"script":s=ba(e)}Qt.has(s)||(e=xe({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Qt.set(s,e),l.querySelector(c)!==null||t==="style"&&l.querySelector(pr(s))||t==="script"&&l.querySelector(yr(s))||(t=l.createElement("link"),ut(t,"link",e),tt(t),l.head.appendChild(t)))}}function Vy(e,t){zn.m(e,t);var n=pa;if(n&&e){var l=t&&typeof t.as=="string"?t.as:"script",c='link[rel="modulepreload"][as="'+Ot(l)+'"][href="'+Ot(e)+'"]',s=c;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=ba(e)}if(!Qt.has(s)&&(e=xe({rel:"modulepreload",href:e},t),Qt.set(s,e),n.querySelector(c)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(yr(s)))return}l=n.createElement("link"),ut(l,"link",e),tt(l),n.head.appendChild(l)}}}function jy(e,t,n){zn.S(e,t,n);var l=pa;if(l&&e){var c=Ll(l).hoistableStyles,s=ya(e);t=t||"default";var f=c.get(s);if(!f){var g={loading:0,preload:null};if(f=l.querySelector(pr(s)))g.loading=5;else{e=xe({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Qt.get(s))&&so(e,n);var A=f=l.createElement("link");tt(A),ut(A,"link",e),A._p=new Promise(function(C,U){A.onload=C,A.onerror=U}),A.addEventListener("load",function(){g.loading|=1}),A.addEventListener("error",function(){g.loading|=2}),g.loading|=4,Ri(f,t,l)}f={type:"stylesheet",instance:f,count:1,state:g},c.set(s,f)}}}function Yy(e,t){zn.X(e,t);var n=pa;if(n&&e){var l=Ll(n).hoistableScripts,c=ba(e),s=l.get(c);s||(s=n.querySelector(yr(c)),s||(e=xe({src:e,async:!0},t),(t=Qt.get(c))&&oo(e,t),s=n.createElement("script"),tt(s),ut(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},l.set(c,s))}}function Qy(e,t){zn.M(e,t);var n=pa;if(n&&e){var l=Ll(n).hoistableScripts,c=ba(e),s=l.get(c);s||(s=n.querySelector(yr(c)),s||(e=xe({src:e,async:!0,type:"module"},t),(t=Qt.get(c))&&oo(e,t),s=n.createElement("script"),tt(s),ut(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},l.set(c,s))}}function df(e,t,n,l){var c=(c=Ln.current)?Oi(c):null;if(!c)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=ya(n.href),n=Ll(c).hoistableStyles,l=n.get(t),l||(l={type:"style",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ya(n.href);var s=Ll(c).hoistableStyles,f=s.get(e);if(f||(c=c.ownerDocument||c,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,f),(s=c.querySelector(pr(e)))&&!s._p&&(f.instance=s,f.state.loading=5),Qt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Qt.set(e,n),s||Xy(c,e,n,f.state))),t&&l===null)throw Error(u(528,""));return f}if(t&&l!==null)throw Error(u(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ba(n),n=Ll(c).hoistableScripts,l=n.get(t),l||(l={type:"script",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function ya(e){return'href="'+Ot(e)+'"'}function pr(e){return'link[rel="stylesheet"]['+e+"]"}function mf(e){return xe({},e,{"data-precedence":e.precedence,precedence:null})}function Xy(e,t,n,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),ut(t,"link",n),tt(t),e.head.appendChild(t))}function ba(e){return'[src="'+Ot(e)+'"]'}function yr(e){return"script[async]"+e}function ff(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Ot(n.href)+'"]');if(l)return t.instance=l,tt(l),l;var c=xe({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),tt(l),ut(l,"style",c),Ri(l,n.precedence,e),t.instance=l;case"stylesheet":c=ya(n.href);var s=e.querySelector(pr(c));if(s)return t.state.loading|=4,t.instance=s,tt(s),s;l=mf(n),(c=Qt.get(c))&&so(l,c),s=(e.ownerDocument||e).createElement("link"),tt(s);var f=s;return f._p=new Promise(function(g,A){f.onload=g,f.onerror=A}),ut(s,"link",l),t.state.loading|=4,Ri(s,n.precedence,e),t.instance=s;case"script":return s=ba(n.src),(c=e.querySelector(yr(s)))?(t.instance=c,tt(c),c):(l=n,(c=Qt.get(s))&&(l=xe({},n),oo(l,c)),e=e.ownerDocument||e,c=e.createElement("script"),tt(c),ut(c,"link",l),e.head.appendChild(c),t.instance=c);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Ri(l,n.precedence,e));return t.instance}function Ri(e,t,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=l.length?l[l.length-1]:null,s=c,f=0;f<l.length;f++){var g=l[f];if(g.dataset.precedence===t)s=g;else if(s!==c)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function so(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function oo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ui=null;function hf(e,t,n){if(Ui===null){var l=new Map,c=Ui=new Map;c.set(n,l)}else c=Ui,l=c.get(n),l||(l=new Map,c.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),c=0;c<n.length;c++){var s=n[c];if(!(s[Ta]||s[mt]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var f=s.getAttribute(t)||"";f=e+f;var g=l.get(f);g?g.push(s):l.set(f,[s])}}return l}function pf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Zy(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function yf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var br=null;function Ky(){}function Fy(e,t,n){if(br===null)throw Error(u(475));var l=br;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var c=ya(n.href),s=e.querySelector(pr(c));if(s){e=s._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=Bi.bind(l),e.then(l,l)),t.state.loading|=4,t.instance=s,tt(s);return}s=e.ownerDocument||e,n=mf(n),(c=Qt.get(c))&&so(n,c),s=s.createElement("link"),tt(s);var f=s;f._p=new Promise(function(g,A){f.onload=g,f.onerror=A}),ut(s,"link",n),t.instance=s}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(l.count++,t=Bi.bind(l),e.addEventListener("load",t),e.addEventListener("error",t))}}function Jy(){if(br===null)throw Error(u(475));var e=br;return e.stylesheets&&e.count===0&&uo(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&uo(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function Bi(){if(this.count--,this.count===0){if(this.stylesheets)uo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var qi=null;function uo(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,qi=new Map,t.forEach($y,e),qi=null,Bi.call(e))}function $y(e,t){if(!(t.state.loading&4)){var n=qi.get(e);if(n)var l=n.get(null);else{n=new Map,qi.set(e,n);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<c.length;s++){var f=c[s];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(n.set(f.dataset.precedence,f),l=f)}l&&n.set(null,l)}c=t.instance,f=c.getAttribute("data-precedence"),s=n.get(f)||l,s===l&&n.set(null,c),n.set(f,c),this.count++,l=Bi.bind(this),c.addEventListener("load",l),c.addEventListener("error",l),s?s.parentNode.insertBefore(c,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),t.state.loading|=4}}var gr={$$typeof:B,Provider:null,Consumer:null,_currentValue:Ee,_currentValue2:Ee,_threadCount:0};function Wy(e,t,n,l,c,s,f,g){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=mc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mc(0),this.hiddenUpdates=mc(null),this.identifierPrefix=l,this.onUncaughtError=c,this.onCaughtError=s,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=g,this.incompleteTransitions=new Map}function bf(e,t,n,l,c,s,f,g,A,C,U,G){return e=new Wy(e,t,n,f,g,A,C,G),t=1,s===!0&&(t|=24),s=jt(3,null,null,t),e.current=s,s.stateNode=e,t=jc(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:l,isDehydrated:n,cache:t},Ns(s),e}function gf(e){return e?(e=Jl,e):Jl}function vf(e,t,n,l,c,s){c=gf(c),l.context===null?l.context=c:l.pendingContext=c,l=$n(t),l.payload={element:n},s=s===void 0?null:s,s!==null&&(l.callback=s),n=Wn(e,l,t),n!==null&&(bt(n,e,t),tr(n,e,t))}function Ef(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function mo(e,t){Ef(e,t),(e=e.alternate)&&Ef(e,t)}function Af(e){if(e.tag===13){var t=Yn(e,67108864);t!==null&&bt(t,e,67108864),mo(e,67108864)}}var Li=!0;function Iy(e,t,n,l){var c=le.T;le.T=null;var s=K.p;try{K.p=2,fo(e,t,n,l)}finally{K.p=s,le.T=c}}function Py(e,t,n,l){var c=le.T;le.T=null;var s=K.p;try{K.p=8,fo(e,t,n,l)}finally{K.p=s,le.T=c}}function fo(e,t,n,l){if(Li){var c=ho(l);if(c===null)eo(e,t,l,Gi,n),Sf(e,l);else if(tb(c,e,t,n,l))l.stopPropagation();else if(Sf(e,l),t&4&&-1<eb.indexOf(e)){for(;c!==null;){var s=ql(c);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var f=dl(s.pendingLanes);if(f!==0){var g=s;for(g.pendingLanes|=2,g.entangledLanes|=2;f;){var A=1<<31-St(f);g.entanglements[1]|=A,f&=~A}un(s),(Ge&6)===0&&(Si=an()+500,mr(0))}}break;case 13:g=Yn(s,2),g!==null&&bt(g,s,2),Di(),mo(s,2)}if(s=ho(l),s===null&&eo(e,t,l,Gi,n),s===c)break;c=s}c!==null&&l.stopPropagation()}else eo(e,t,l,null,n)}}function ho(e){return e=vc(e),po(e)}var Gi=null;function po(e){if(Gi=null,e=ml(e),e!==null){var t=re(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=Me(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Gi=e,null}function Nf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Lh()){case Xo:return 2;case Zo:return 8;case Rr:case Gh:return 32;case Ko:return 268435456;default:return 32}default:return 32}}var yo=!1,al=null,rl=null,il=null,vr=new Map,Er=new Map,cl=[],eb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Sf(e,t){switch(e){case"focusin":case"focusout":al=null;break;case"dragenter":case"dragleave":rl=null;break;case"mouseover":case"mouseout":il=null;break;case"pointerover":case"pointerout":vr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Er.delete(t.pointerId)}}function Ar(e,t,n,l,c,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:s,targetContainers:[c]},t!==null&&(t=ql(t),t!==null&&Af(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function tb(e,t,n,l,c){switch(t){case"focusin":return al=Ar(al,e,t,n,l,c),!0;case"dragenter":return rl=Ar(rl,e,t,n,l,c),!0;case"mouseover":return il=Ar(il,e,t,n,l,c),!0;case"pointerover":var s=c.pointerId;return vr.set(s,Ar(vr.get(s)||null,e,t,n,l,c)),!0;case"gotpointercapture":return s=c.pointerId,Er.set(s,Ar(Er.get(s)||null,e,t,n,l,c)),!0}return!1}function xf(e){var t=ml(e.target);if(t!==null){var n=re(t);if(n!==null){if(t=n.tag,t===13){if(t=Me(n),t!==null){e.blockedOn=t,Jh(e.priority,function(){if(n.tag===13){var l=_t(),c=Yn(n,l);c!==null&&bt(c,n,l),mo(n,l)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ho(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);gc=l,n.target.dispatchEvent(l),gc=null}else return t=ql(n),t!==null&&Af(t),e.blockedOn=n,!1;t.shift()}return!0}function Cf(e,t,n){Vi(e)&&n.delete(t)}function nb(){yo=!1,al!==null&&Vi(al)&&(al=null),rl!==null&&Vi(rl)&&(rl=null),il!==null&&Vi(il)&&(il=null),vr.forEach(Cf),Er.forEach(Cf)}function ji(e,t){e.blockedOn===t&&(e.blockedOn=null,yo||(yo=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,nb)))}var Yi=null;function Df(e){Yi!==e&&(Yi=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Yi===e&&(Yi=null);for(var t=0;t<e.length;t+=3){var n=e[t],l=e[t+1],c=e[t+2];if(typeof l!="function"){if(po(l||n)===null)continue;break}var s=ql(n);s!==null&&(e.splice(t,3),t-=3,as(s,{pending:!0,data:c,method:n.method,action:l},l,c))}}))}function Nr(e){function t(A){return ji(A,e)}al!==null&&ji(al,e),rl!==null&&ji(rl,e),il!==null&&ji(il,e),vr.forEach(t),Er.forEach(t);for(var n=0;n<cl.length;n++){var l=cl[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<cl.length&&(n=cl[0],n.blockedOn===null);)xf(n),n.blockedOn===null&&cl.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var c=n[l],s=n[l+1],f=c[vt]||null;if(typeof s=="function")f||Df(n);else if(f){var g=null;if(s&&s.hasAttribute("formAction")){if(c=s,f=s[vt]||null)g=f.formAction;else if(po(c)!==null)continue}else g=f.action;typeof g=="function"?n[l+1]=g:(n.splice(l,3),l-=3),Df(n)}}}function bo(e){this._internalRoot=e}Qi.prototype.render=bo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var n=t.current,l=_t();vf(n,l,e,t,null,null)},Qi.prototype.unmount=bo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;e.tag===0&&ma(),vf(e.current,2,null,e,null,null),Di(),t[Bl]=null}};function Qi(e){this._internalRoot=e}Qi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Po();e={blockedOn:null,target:e,priority:t};for(var n=0;n<cl.length&&t!==0&&t<cl[n].priority;n++);cl.splice(n,0,e),n===0&&xf(e)}};var wf=i.version;if(wf!=="19.0.0")throw Error(u(527,wf,"19.0.0"));K.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=V(t),e=e!==null?ae(e):null,e=e===null?null:e.stateNode,e};var lb={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:le,findFiberByHostInstance:ml,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xi.isDisabled&&Xi.supportsFiber)try{wa=Xi.inject(lb),Nt=Xi}catch{}}return Sr.createRoot=function(e,t){if(!p(e))throw Error(u(299));var n=!1,l="",c=Yd,s=Qd,f=Xd,g=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(c=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(g=t.unstable_transitionCallbacks)),t=bf(e,1,!1,null,null,n,l,c,s,f,g,null),e[Bl]=t.current,Ps(e.nodeType===8?e.parentNode:e),new bo(t)},Sr.hydrateRoot=function(e,t,n){if(!p(e))throw Error(u(299));var l=!1,c="",s=Yd,f=Qd,g=Xd,A=null,C=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(c=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(A=n.unstable_transitionCallbacks),n.formState!==void 0&&(C=n.formState)),t=bf(e,1,!0,t,n??null,l,c,s,f,g,A,C),t.context=gf(null),n=t.current,l=_t(),c=$n(l),c.callback=null,Wn(n,c,l),t.current.lanes=l,Ha(t,l),un(t),e[Bl]=t.current,Ps(e),new Qi(t)},Sr.version="19.0.0",Sr}var Rf;function mb(){if(Rf)return go.exports;Rf=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(i){console.error(i)}}return r(),go.exports=db(),go.exports}var fb=mb(),a=tc();const hb=rb(a);function Mn(r){return Array.isArray(r)||ArrayBuffer.isView(r)}function pb(r){return r!=null&&typeof r.GetEnumerator=="function"}function yb(r){return r!=null&&typeof r.CompareTo=="function"}function bb(r){return r!=null&&typeof r.Equals=="function"}function gb(r){return r!=null&&typeof r.GetHashCode=="function"}function wo(r){return r!=null&&typeof r.Dispose=="function"}function dt(r){wo(r)&&r.Dispose()}function mn(){return null}function Ki(r,i){var o,u;return((o=Object.getPrototypeOf(r))==null?void 0:o.constructor)===((u=Object.getPrototypeOf(i))==null?void 0:u.constructor)}class vb{constructor(i){this.iter=i,this.current=mn()}"System.Collections.Generic.IEnumerator`1.get_Current"(){return this.current}"System.Collections.IEnumerator.get_Current"(){return this.current}"System.Collections.IEnumerator.MoveNext"(){const i=this.iter.next();return this.current=i.value,!i.done}"System.Collections.IEnumerator.Reset"(){throw new Error("JS iterators cannot be reset")}Dispose(){}}function kt(r){return pb(r)?r.GetEnumerator():new vb(r[Symbol.iterator]())}function Bo(r){return{next(){const i=r["System.Collections.IEnumerator.MoveNext"](),o=i?r["System.Collections.Generic.IEnumerator`1.get_Current"]():void 0;return{done:!i,value:o}}}}function Uf(r,i){return r.toString(10).padStart(i,"0")}function Bf(r){const i=r;return typeof i.offset=="number"?i.offset:r.kind===1?0:r.getTimezoneOffset()*-6e4}function Eb(r,i){return r=r,r.toString(i)}class ul{static id(i){return ul.idMap.has(i)||ul.idMap.set(i,++ul.count),ul.idMap.get(i)}}ul.idMap=new WeakMap;ul.count=0;function ih(r){let i=0,o=5381;const u=r.length;for(;i<u;)o=o*33^r.charCodeAt(i++);return o}function _o(r){return r*2654435761|0}function Ab(r){return ih(r.toString(32))}function nc(r){let i=0;const o=r.length;for(let u=0;u<o;u++){const p=r[u];i=(i<<5)+i^p}return i}function Nb(r){return r.getTime()}function Sb(r){const i=r.length,o=new Array(i);for(let u=0;u<i;u++)o[u]=Rl(r[u]);return nc(o)}function Rl(r){var i;if(r==null)return 0;switch(typeof r){case"boolean":return r?1:0;case"number":return _o(r);case"bigint":return Ab(r);case"string":return ih(r);default:{if(gb(r))return r.GetHashCode();if(Mn(r))return Sb(r);if(r instanceof Date)return Nb(r);if(((i=Object.getPrototypeOf(r))==null?void 0:i.constructor)===Object){const o=Object.values(r).map(u=>Rl(u));return nc(o)}else return _o(ul.id(r))}}}function xb(r,i,o){if(r==null)return i==null;if(i==null||r.length!==i.length)return!1;for(let u=0;u<r.length;u++)if(!o(r[u],i[u]))return!1;return!0}function ch(r,i){return xb(r,i,On)}function Cb(r,i){const o=Object.keys(r),u=Object.keys(i);if(o.length!==u.length)return!1;o.sort(),u.sort();for(let p=0;p<o.length;p++)if(o[p]!==u[p]||!On(r[o[p]],i[u[p]]))return!1;return!0}function On(r,i){var o;return r===i?!0:r==null?i==null:i==null?!1:bb(r)?r.Equals(i):Mn(r)?Mn(i)&&ch(r,i):typeof r!="object"?!1:r instanceof Date?i instanceof Date&&sh(r,i)===0:((o=Object.getPrototypeOf(r))==null?void 0:o.constructor)===Object&&Cb(r,i)}function sh(r,i){let o,u;return"offset"in r&&"offset"in i?(o=r.getTime(),u=i.getTime()):(o=r.getTime()+Bf(r),u=i.getTime()+Bf(i)),o===u?0:o<u?-1:1}function Db(r,i,o){if(r==null)return i==null?0:1;if(i==null)return-1;if(r.length!==i.length)return r.length<i.length?-1:1;for(let u=0,p=0;u<r.length;u++)if(p=o(r[u],i[u]),p!==0)return p;return 0}function oh(r,i){return Db(r,i,Rn)}function wb(r,i){const o=Object.keys(r),u=Object.keys(i);if(o.length!==u.length)return o.length<u.length?-1:1;o.sort(),u.sort();for(let p=0,y=0;p<o.length;p++){const E=o[p];if(E!==u[p])return E<u[p]?-1:1;if(y=Rn(r[E],i[E]),y!==0)return y}return 0}function Rn(r,i){var o;return r===i?0:r==null?i==null?0:-1:i==null?1:yb(r)?r.CompareTo(i):Mn(r)?Mn(i)?oh(r,i):-1:typeof r!="object"?r<i?-1:1:r instanceof Date?i instanceof Date?sh(r,i):-1:((o=Object.getPrototypeOf(r))==null?void 0:o.constructor)===Object?wb(r,i):-1}function h(r){const i={};for(const o of r)i[o[0]]=o[1];return i}function _b(r){Mn(r)?r.splice(0):r.clear()}const lc=new WeakMap;function Ol(r){if(r==null)return null;const i=(o,u)=>r(o)(u);return lc.set(i,r),i}function ol(r){return lc.get(r)??(i=>o=>r(i,o))}function qf(r){if(r==null)return null;const i=(o,u,p)=>r(o)(u)(p);return lc.set(i,r),i}function So(r){return lc.get(r)??(i=>o=>u=>r(i,o,u))}function Hb(r){let i=0,o="[";for(const u of r){if(i===0)o+=en(u);else if(i===100){o+="; ...";break}else o+="; "+en(u);i++}return o+"]"}function en(r,i=0){var o;if(r!=null&&typeof r=="object"){if(typeof r.toString=="function")return r.toString();if(Symbol.iterator in r)return Hb(r);{const u=(o=Object.getPrototypeOf(r))==null?void 0:o.constructor;return u===Object&&i<10?"{ "+Object.entries(r).map(([p,y])=>p+" = "+en(y,i+1)).join(`
  `)+" }":(u==null?void 0:u.name)??""}}return String(r)}function Tb(r,i){if(i.length===0)return r;{let o,u=!0;return i.length===1?(o=en(i[0]),u=o.indexOf(" ")>=0):o=i.map(p=>en(p)).join(", "),r+(u?" (":" ")+o+(u?")":"")}}class ac{get name(){return this.cases()[this.tag]}toJSON(){return this.fields.length===0?this.name:[this.name].concat(this.fields)}toString(){return Tb(this.name,this.fields)}GetHashCode(){const i=this.fields.map(o=>Rl(o));return i.splice(0,0,_o(this.tag)),nc(i)}Equals(i){return this===i?!0:Ki(this,i)&&this.tag===i.tag?ch(this.fields,i.fields):!1}CompareTo(i){return this===i?0:Ki(this,i)?this.tag===i.tag?oh(this.fields,i.fields):this.tag<i.tag?-1:1:-1}}function kb(r){const i={},o=Object.keys(r);for(let u=0;u<o.length;u++)i[o[u]]=r[o[u]];return i}function zb(r){return"{ "+Object.entries(r).map(([i,o])=>i+" = "+en(o)).join(`
  `)+" }"}function Mb(r){const i=Object.values(r).map(o=>Rl(o));return nc(i)}function Ob(r,i){if(r===i)return!0;if(Ki(r,i)){const o=Object.keys(r);for(let u=0;u<o.length;u++)if(!On(r[o[u]],i[o[u]]))return!1;return!0}else return!1}function Rb(r,i){if(r===i)return 0;if(Ki(r,i)){const o=Object.keys(r);for(let u=0;u<o.length;u++){const p=Rn(r[o[u]],i[o[u]]);if(p!==0)return p}return 0}else return-1}class Hr{toJSON(){return kb(this)}toString(){return zb(this)}GetHashCode(){return Mb(this)}Equals(i){return Ob(this,i)}CompareTo(i){return Rb(this,i)}}const xa=Symbol("numeric");function Ub(r){return typeof r=="number"||typeof r=="bigint"||(r==null?void 0:r[xa])}function Bb(r,i){return typeof r=="number"||typeof r=="bigint"?r<i?-1:r>i?1:0:r.CompareTo(i)}function qb(r,i){return typeof r=="number"?r*i:typeof r=="bigint"?r*BigInt(i):r[xa]().multiply(i)}function Lb(r,i){return typeof r=="number"?r.toFixed(i):typeof r=="bigint"?r:r[xa]().toFixed(i)}function Lf(r,i){return typeof r=="number"?r.toPrecision(i):typeof r=="bigint"?r:r[xa]().toPrecision(i)}function Gf(r,i){return typeof r=="number"?r.toExponential(i):typeof r=="bigint"?r:r[xa]().toExponential(i)}function Vf(r){return typeof r=="number"?(Number(r)>>>0).toString(16):typeof r=="bigint"?BigInt.asUintN(64,r).toString(16):r[xa]().toHex()}function Gb(r){const i=r<0;r=Math.abs(r);const o=~~(r/36e5),u=r%36e5/6e4;return(i?"-":"+")+Uf(o,2)+":"+Uf(u,2)}function Vb(r,i){return new Date(r.getTime()+(r.offset??0)).toISOString().replace(/\.\d+/,"").replace(/[A-Z]|\.\d+/g," ")+Gb(r.offset??0)}function jb(r,i){return r.kind===1?r.toUTCString():r.toLocaleString()}function Yb(r,i,o){return r.offset!=null?Vb(r):jb(r)}function uh(r){return r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}const xr=/(^|[^%])%([0+\- ]*)(\*|\d+)?(?:\.(\d+))?(\w)/g;function Qb(r,i){return Bb(r,i)<0}function Fi(r){return{input:r,cont:Kb(r)}}function Xb(r,i){return typeof i=="string"?r(i):i.cont(r)}function Ji(r){return Xb(i=>i,r)}function Zb(r,i,o,u,p){let y="";if(i=i||"",p=p||"",Ub(r))switch(p.toLowerCase()!=="x"&&(Qb(r,0)?(r=qb(r,-1),y="-"):i.indexOf(" ")>=0?y=" ":i.indexOf("+")>=0&&(y="+")),u=u==null?null:parseInt(u,10),p){case"f":case"F":u=u??6,r=Lb(r,u);break;case"g":case"G":r=u!=null?Lf(r,u):Lf(r);break;case"e":case"E":r=u!=null?Gf(r,u):Gf(r);break;case"x":r=Vf(r);break;case"X":r=Vf(r).toUpperCase();break;default:r=String(r);break}else r instanceof Date?r=Yb(r):r=en(r);if(o=typeof o=="number"?o:parseInt(o,10),isNaN(o))r=y+r;else{const E=i.indexOf("0")>=0,w=i.indexOf("-")>=0,D=w||!E?" ":"0";D==="0"?(r=jf(r,o-y.length,D,w),r=y+r):r=jf(y+r,o,D,w)}return r}function dh(r,i,o,u="",p=-1){return(...y)=>{let E=u;const w=i.slice(),D=o.slice();for(const N of y){const[,,z,M,q,B]=D[0];let Q=M;if(p>=0)Q=p,p=-1;else if(Q==="*"){if(N<0)throw new Error("Non-negative number required");p=N;continue}E+=w[0],E+=Zb(N,z,Q,q,B),w.splice(0,1),D.splice(0,1)}return D.length===0?(E+=w[0],r(E)):dh(r,w,D,E,p)}}function Kb(r){return i=>{xr.lastIndex=0;const o=[],u=[];let p=0,y=xr.exec(r);for(;y;){const E=y.index+(y[1]||"").length;o.push(r.substring(p,E).replace(/%%/g,"%")),u.push(y),p=xr.lastIndex,xr.lastIndex-=1,y=xr.exec(r)}return o.length===0?i(r.replace(/%%/g,"%")):(o.push(r.substring(p).replace(/%%/g,"%")),dh(i,o,u))}}function Fb(r){return typeof r!="string"||/^\s*$/.test(r)}function fn(r,i){return Array.isArray(i)?i.join(r):Array.from(i).join(r)}function jf(r,i,o,u){o=o||" ",i=i-r.length;for(let p=0;p<i;p++)r=u?r+o:o+r;return r}function mh(r,i,o,u){if(o=typeof o=="number"?o:void 0,u=typeof u=="number"?u:0,o&&o<0)throw new Error("Count cannot be less than zero");if(o===0)return[];const p=(u&1)===1,y=(u&2)===2;i=i||[],i=i.filter(z=>z).map(uh),i=i.length>0?i:["\\s"];const E=[],w=new RegExp(i.join("|"),"g");let D=!0,N=0;do{const z=w.exec(r);if(z===null){const M=y?r.substring(N).trim():r.substring(N);(!p||M.length>0)&&E.push(M),D=!1}else{const M=y?r.substring(N,z.index).trim():r.substring(N,z.index);(!p||M.length>0)&&(o!=null&&E.length+1===o?(E.push(y?r.substring(N).trim():r.substring(N)),D=!1):E.push(M)),N=w.lastIndex}}while(D);return E}function Jb(r,...i){return i.length===0?r.trimEnd():r.replace(new RegExp("["+uh(i.join(""))+"]+$"),"")}function fh(r,i,o){if(i+(o||0)>r.length)throw new Error("Invalid startIndex and/or length");return o!=null?r.substr(i,o):r.substr(i)}class Na{constructor(i){this.value=i}toJSON(){return this.value}toString(){return String(this.value)}GetHashCode(){return Rl(this.value)}Equals(i){return i==null?!1:On(this.value,i instanceof Na?i.value:i)}CompareTo(i){return i==null?1:Rn(this.value,i instanceof Na?i.value:i)}}function $(r){if(r==null)throw new Error("Option has no value");return r instanceof Na?r.value:r}function tn(r){return r==null||r instanceof Na?new Na(r):r}function hh(r){return r==null?[]:[$(r)]}function Ho(r,i){return r!=null?$(r):i}function To(r,i){return r!=null?$(r):i()}function $i(r,i){return i!=null?tn(r($(i))):void 0}const ph="Collection was empty.";function $b(r,i){return new Array(i)}function Yf(r,i){return r>i?r:i}function yh(r,i,o,u){const p=i|0;return r.fill(u,p,p+o)}function Wb(r,i){const o=$b(i,1);return wr(o,0,r),o}function Ib(r,i,o){const u=r;return o.reduce(u,i)}function Qf(r,i,o){return i==null}function Ml(r,i){if(r<0||r>=i.length)throw new Error("Index was outside the bounds of the array.\\nParameter name: index");return i[r]}function wr(r,i,o){if(i<0||i>=r.length)throw new Error("Index was outside the bounds of the array.\\nParameter name: index");r[i]=o}function Pb(r,i,o){return i.reduceRight((u,p)=>r(p,u),o)}class Kt extends Hr{constructor(i,o){super(),this.head=i,this.tail=o}toString(){return"["+fn("; ",this)+"]"}Equals(i){const o=this;return o===i?!0:((p,y)=>{e:for(;;){const E=p,w=y,D=E.tail,N=w.tail;if(D!=null)if(N!=null){const z=$(D),M=$(N);if(On(E.head,w.head)){p=z,y=M;continue e}else return!1}else return!1;else return N==null}})(o,i)}GetHashCode(){return((u,p,y)=>{e:for(;;){const E=u,w=p,D=y,N=D.tail;if(N!=null){const z=$(N);if(E>18)return w|0;u=E+1,p=(w<<1)+Rl(D.head)+631*E,y=z;continue e}else return w|0}})(0,0,this)|0}toJSON(){const i=this;return Array.from(i)}CompareTo(i){return((p,y)=>{e:for(;;){const E=p,w=y,D=E.tail,N=w.tail;if(D!=null)if(N!=null){const z=$(D),M=$(N),q=Rn(E.head,w.head)|0;if(q===0){p=z,y=M;continue e}else return q|0}else return 1;else return N!=null?-1:0}})(this,i)|0}GetEnumerator(){return tg(this)}[Symbol.iterator](){return Bo(kt(this))}"System.Collections.IEnumerable.GetEnumerator"(){return kt(this)}}class eg{constructor(i){this.xs=i,this.it=this.xs,this.current=mn()}"System.Collections.Generic.IEnumerator`1.get_Current"(){return this.current}"System.Collections.IEnumerator.get_Current"(){return this.current}"System.Collections.IEnumerator.MoveNext"(){const i=this,o=i.it.tail;if(o!=null){const u=$(o);return i.current=i.it.head,i.it=u,!0}else return!1}"System.Collections.IEnumerator.Reset"(){const i=this;i.it=i.xs,i.current=mn()}Dispose(){}}function tg(r){return new eg(r)}function it(){return new Kt(mn(),void 0)}function Tr(r,i){return new Kt(r,i)}function _r(r){return r.tail==null}function ng(r){return((o,u)=>{e:for(;;){const p=o,E=u.tail;if(E!=null){o=p+1,u=$(E);continue e}else return p|0}})(0,r)|0}function Wi(r){if(r.tail!=null)return r.head;throw new Error(ph+"\\nParameter name: list")}function Zt(r){const i=r.tail;if(i!=null)return $(i);throw new Error(ph+"\\nParameter name: list")}function Fe(){return it()}function Xt(r,i){return Tr(r,i)}function v(r){return Tr(r,it())}function Y(r){return _r(r)}function ie(r){return Wi(r)}function j(r){return Zt(r)}function lg(r){const i=ng(r)|0,o=yh(new Array(i),0,i,null);return((p,y)=>{e:for(;;){const E=p,w=y;if(!_r(w)){wr(o,E,Wi(w)),p=E+1,y=Zt(w);continue e}break}})(0,r),o}function Un(r,i,o){let u=i,p=o;for(;!_r(p);)u=r(u,ie(p)),p=Zt(p);return u}function Ii(r){return Un((i,o)=>Tr(o,i),it(),r)}function ag(r,i,o){return Pb(r,lg(i),o)}function Pi(r,i){Un((o,u)=>{r(u)},void 0,i)}function Qe(r,i){let o=i;for(let u=r.length-1;u>=0;u--)o=Tr(Ml(u,r),o);return o}function d(r){return Qe(r,it())}function rg(r){let i,o;if(Mn(r))return d(r);if(r instanceof Kt)return r;{const u=it();let p=u;const y=kt(r);try{for(;y["System.Collections.IEnumerator.MoveNext"]();){const D=y["System.Collections.Generic.IEnumerator`1.get_Current"]();p=(i=p,o=new Kt(D,void 0),i.tail=o,o)}}finally{dt(y)}const E=p,w=it();return E.tail=w,Zt(u)}}function ec(r,i){return Un((o,u)=>Tr(u,o),i,Ii(r))}function ig(r,i){let o,u;const p=it();let y=p,E=i;for(;!_r(E);){let N=r(Wi(E));for(;!_r(N);)y=(o=y,u=new Kt(Wi(N),void 0),o.tail=u,u),N=Zt(N);E=Zt(E)}const w=y,D=it();return w.tail=D,Zt(p)}function rc(r,i){const o=it(),u=Un((y,E)=>{const w=new Kt(r(E),void 0);return y.tail=w,w},o,i),p=it();return u.tail=p,Zt(o)}function cg(r,i){const o=it(),u=Un((y,E)=>{if(r(E)){const w=new Kt(E,void 0);return y.tail=w,w}else return y},o,i),p=it();return u.tail=p,Zt(o)}function sg(r,i){const o=it(),u=it(),p=o,y=Un((D,N)=>{let z,M;const q=D[0],B=D[1];return r(N)?[(z=new Kt(N,void 0),q.tail=z,z),B]:[q,(M=new Kt(N,void 0),B.tail=M,M)]},[p,u],i),E=it();y[0].tail=E;const w=it();return y[1].tail=w,[Zt(p),Zt(u)]}function bh(r,i){const o=it(),u=Un((y,E)=>{const w=r(E);if(w==null)return y;{const D=new Kt($(w),void 0);return y.tail=D,D}},o,i),p=it();return u.tail=p,Zt(o)}function og(r){throw new Error(r)}const ug="Enumeration already finished.",dg="Enumeration has not started. Call MoveNext.",gh="The input sequence has an insufficient number of elements.",mg="Reset is not supported on this enumerator.";function fg(){throw new Error(mg)}function qo(){throw new Error(dg)}function ko(){throw new Error(ug)}class hg{constructor(i){this.f=i}toString(){const i=this;let o=0,u="seq [";const p=kt(i);try{for(;o<4&&p["System.Collections.IEnumerator.MoveNext"]();)o>0&&(u=u+"; "),u=u+en(p["System.Collections.Generic.IEnumerator`1.get_Current"]()),o=o+1|0;return o===4&&(u=u+"; ..."),u+"]"}finally{dt(p)}}GetEnumerator(){return this.f()}[Symbol.iterator](){return Bo(kt(this))}"System.Collections.IEnumerable.GetEnumerator"(){return this.f()}}function pg(r){return new hg(r)}class yg{constructor(i,o,u){this.current=i,this.next=o,this.dispose=u}"System.Collections.Generic.IEnumerator`1.get_Current"(){return this.current()}"System.Collections.IEnumerator.get_Current"(){return this.current()}"System.Collections.IEnumerator.MoveNext"(){return this.next()}"System.Collections.IEnumerator.Reset"(){fg()}Dispose(){this.dispose()}}function ic(r,i,o){return new yg(r,i,o)}function bg(r){let i,o,u=!1,p=!1,y;const E=()=>{if(p=!0,o!=null){const w=$(o);try{dt(w)}finally{o=void 0}}if(i!=null){const w=$(i);try{dt(w)}finally{i=void 0}}};return ic(()=>(u?p&&ko():qo(),y!=null?$(y):ko()),()=>{let w;if(u||(u=!0),p)return!1;{let D;for(;D==null;){const N=i,z=o;if(N!=null)if(z!=null){const M=$(z);if(M["System.Collections.IEnumerator.MoveNext"]())y=tn(M["System.Collections.Generic.IEnumerator`1.get_Current"]()),D=!0;else try{dt(M)}finally{o=void 0}}else{const M=$(N);M["System.Collections.IEnumerator.MoveNext"]()?o=(w=M["System.Collections.Generic.IEnumerator`1.get_Current"](),kt(w)):(E(),D=!1)}else i=kt(r)}return $(D)}},()=>{p||E()})}function gg(r,i){return ic(()=>i["System.Collections.Generic.IEnumerator`1.get_Current"](),()=>i["System.Collections.IEnumerator.MoveNext"](),()=>{try{dt(i)}finally{}})}function vh(r,i,o){let u=!1,p,y=tn(r());const E=()=>{if(y!=null){const D=$(y);try{o(D)}finally{y=void 0}}},w=()=>{try{E()}finally{p=void 0}};return ic(()=>(u||qo(),p!=null?$(p):ko()),()=>{if(u||(u=!0),y!=null){const D=$(y);let N;try{N=i(D)}catch(z){throw w(),z}return N!=null?(p=N,!0):(w(),!1)}else return!1},E)}function vg(r,i){let o,u=i;return ic(()=>{if(o!=null){const p=$(o)[0];return $(o)[1],p}else return qo()},()=>(o=r(u),o!=null?($(o)[0],u=$(o)[1],!0):!1),()=>{})}function Eg(r,i){i==null&&og(r)}function Ca(r){return pg(r)}function kr(r){return Eg("source",r),kt(r)}function ee(r){return Ca(()=>kt(r()))}function Eh(r){return Ca(()=>bg(r))}function Ag(r,i){return Ca(()=>vg(r,i))}function Ah(){return ee(()=>new Array(0))}function ue(r){return ee(()=>Wb(r))}function we(r){return Mn(r)?d(r):r instanceof Kt?r:rg(r)}function Ng(r,i,o){return Ca(()=>vh(r,i,o))}function Nh(r,i,o){return Ca(()=>{let u=-1;return vh(r,p=>(u=u+1|0,i(u,p)),o)})}function Ke(r,i){return Eh([r,i])}function Sg(r,i,o){const u=kr(o);try{let p=i;for(;u["System.Collections.IEnumerator.MoveNext"]();)p=r(p,u["System.Collections.Generic.IEnumerator`1.get_Current"]());return p}finally{dt(u)}}function Lo(r,i){Sg((o,u)=>{r(u)},void 0,i)}function dn(r,i){return Ng(()=>kr(i),o=>o["System.Collections.IEnumerator.MoveNext"]()?tn(r(o["System.Collections.Generic.IEnumerator`1.get_Current"]())):void 0,o=>{dt(o)})}function xg(r,i){return Nh(()=>kr(i),(o,u)=>u["System.Collections.IEnumerator.MoveNext"]()?tn(r(o,u["System.Collections.Generic.IEnumerator`1.get_Current"]())):void 0,o=>{dt(o)})}function Cg(r,i){return Ca(()=>{const o=kr(i);try{for(let u=1;u<=r;u++)if(!o["System.Collections.IEnumerator.MoveNext"]())throw new Error(gh+"\\nParameter name: source");return gg(()=>{},o)}catch(u){throw dt(o),u}})}function Dg(r,i){return Nh(()=>kr(i),(o,u)=>{if(o<r){if(u["System.Collections.IEnumerator.MoveNext"]())return tn(u["System.Collections.Generic.IEnumerator`1.get_Current"]());throw new Error(gh+"\\nParameter name: source")}else return},o=>{dt(o)})}function Xe(r,i){return ee(()=>Eh(dn(r,i)))}const m=hb,wg=(r,i)=>{a.useEffect(()=>{const o=r();return()=>{o.Dispose()}},i)},_g=r=>{a.useLayoutEffect(()=>{const i=r();return()=>{i.Dispose()}})};function Hg(r){return{Dispose(){Lo(i=>{dt(i)},hh(r))}}}function Tg(r,i){return i}function kg(r,i,o,u){const p=m.memo(r,Ol(Ho($i(ol,o),mn())));return Lo(y=>{r.displayName=y},hh(i)),y=>{const E=Tg(u,y);return m.createElement(p,E)}}function Sh(r){return{Dispose(){r()}}}function zg(r){const i=m.useRef(!1);m.useEffect(()=>{i.current||(i.current=!0,r())},[])}function Mg(r){const i=m.useRef(void 0),o=m.useRef(!1),u=m.useRef(!1);o.current&&(u.current=!0),wg(()=>Hg(o.current?void 0:(o.current=!0,i.current=tn(r()),u.current?i.current:void 0)),[])}function Og(r){const i=m.useRef(r),o=m.useCallback(u=>i.current(u),[]);return _g(u=>(i.current=r,Sh(()=>{}))),o}function Dr(r,i){if(i.startsWith(r))return i}function Xf(r,i){if(i.endsWith(r))return i}function ga(r){const i=fn("&",rc(o=>fn("=",[encodeURIComponent(o[0]),encodeURIComponent(o[1])]),r));return i===""?"":"?"+i}function Rg(r){return i=>{let o,u,p,y,E,w;return o=Dr("/",i),o!=null?(u=o,"#"+u):(p=Dr("#/",i),p!=null?(y=p,y):(E=Dr("#",i),E!=null?(w=E,"#/"+fh(w,1,w.length-1)):"#/"+i))}}function Cr(r,i){return Rg()(fn("/",rc(o=>o.indexOf("?")>=0||o.startsWith("#")||o.startsWith("/")?o:encodeURIComponent(o),r)))}function zo(r){const i=Ii(r);if(!Y(i))return Y(j(i))?[Fe(),ie(i)]:[Ii(j(i)),ie(i)]}function Mo(r,i,o){history.pushState(void 0,"",Cr(r));const u=document.createEvent("CustomEvent");u.initEvent("CUSTOM_NAVIGATION_EVENT",!0,!0),window.dispatchEvent(u)}function xh(r,i){return ig(o=>{if(Fb(o))return Fe();{const u=Jb(o,"#");if(u==="?")return Fe();if(Dr("?",u)!=null)return v(u);{const p=u.split("?");if(!Qf((y,E)=>y===E,p)&&p.length===1){const y=Ml(0,p);return v(decodeURIComponent(y))}else if(!Qf((y,E)=>y===E,p)&&p.length===2)if(Ml(1,p)===""){const y=Ml(0,p);return v(decodeURIComponent(y))}else{const y=Ml(0,p),E=Ml(1,p);return d([decodeURIComponent(y),"?"+E])}else return Fe()}}},d(mh(Dr("#",r)!=null?fh(r,1,r.length-1):i===1&&(Xf("#",r)!=null||Xf("#/",r)!=null)?"":r,["/"],void 0,0)))}function Ug(r,i,o){return i(xh(r===2?window.location.pathname+window.location.search:window.location.hash,r))}const Bg=kg(r=>{const i=Og(u=>{const p=Ho(r.onUrlChanged,y=>{});Ug(Ho(r.hashMode,1),p)});Mg(()=>(window.navigator.userAgent.indexOf("Trident")>=0||window.navigator.userAgent.indexOf("MSIE")>=0?window.addEventListener("hashchange",i):window.addEventListener("popstate",i),window.addEventListener("CUSTOM_NAVIGATION_EVENT",i),Sh(()=>{window.navigator.userAgent.indexOf("Trident")>=0||window.navigator.userAgent.indexOf("MSIE")>=0?window.removeEventListener("hashchange",i):window.removeEventListener("popstate",i),window.removeEventListener("CUSTOM_NAVIGATION_EVENT",i)}))),zg(()=>{const u=document.createEvent("CustomEvent");u.initEvent("CUSTOM_NAVIGATION_EVENT",!0,!0),window.dispatchEvent(u)});const o=r.application;return o??mn()},void 0,void 0,void 0);function qg(r,i){console.error(tn(r),i)}function Zf(r,i,o){Pi(u=>{try{u(i)}catch(p){r(p)}},o)}function cc(){return Fe()}function Lg(r){return v(r)}class O extends ac{constructor(i,o){super(),this.tag=i,this.fields=o}cases(){return["Install","Use","Themes","Colors","Accordion","Alert","Avatar","Badge","Breadcrumbs","Button","Card","Carousel","ChatBubble","Collapse","Countdown","Diff","Divider","Dock","Drawer","Dropdown","Fieldset","Filter","Footer","Hero","Join","Indicator","Kbd","Label","Link","List","Loading","Mask","Menu","Modal","Navbar","Pagination","Progress","RadialProgress","Skeleton","Stack","Stat","Status","Steps","Swap","Tab","Table","ThemeController","Timeline","Toast","Tooltip","Validator","FileInput","FormCheckbox","FormInput","FormRadio","FormRange","FormSelect","FormTextarea","FormToggle","MockupCode","MockupPhone","MockupWindow","Rating"]}}const Gg=new O(0,[]);function Ch(r){let i;if(Y(r))i=62;else switch(ie(r)){case"use":{Y(j(r))?i=0:i=63;break}case"themes":{Y(j(r))?i=1:i=63;break}case"colors":{Y(j(r))?i=2:i=63;break}case"alert":{Y(j(r))?i=3:i=63;break}case"accordion":{Y(j(r))?i=4:i=63;break}case"avatar":{Y(j(r))?i=5:i=63;break}case"badge":{Y(j(r))?i=6:i=63;break}case"breadcrumbs":{Y(j(r))?i=7:i=63;break}case"button":{Y(j(r))?i=8:i=63;break}case"card":{Y(j(r))?i=9:i=63;break}case"carousel":{Y(j(r))?i=10:i=63;break}case"chatbubble":{Y(j(r))?i=11:i=63;break}case"collapse":{Y(j(r))?i=12:i=63;break}case"countdown":{Y(j(r))?i=13:i=63;break}case"diff":{Y(j(r))?i=14:i=63;break}case"divider":{Y(j(r))?i=15:i=63;break}case"dock":{Y(j(r))?i=16:i=63;break}case"drawer":{Y(j(r))?i=17:i=63;break}case"dropdown":{Y(j(r))?i=18:i=63;break}case"fieldset":{Y(j(r))?i=19:i=63;break}case"filter":{Y(j(r))?i=20:i=63;break}case"footer":{Y(j(r))?i=21:i=63;break}case"hero":{Y(j(r))?i=22:i=63;break}case"indicator":{Y(j(r))?i=23:i=63;break}case"join":{Y(j(r))?i=24:i=63;break}case"kbd":{Y(j(r))?i=25:i=63;break}case"label":{Y(j(r))?i=26:i=63;break}case"link":{Y(j(r))?i=27:i=63;break}case"list":{Y(j(r))?i=28:i=63;break}case"loading":{Y(j(r))?i=29:i=63;break}case"mask":{Y(j(r))?i=30:i=63;break}case"menu":{Y(j(r))?i=31:i=63;break}case"modal":{Y(j(r))?i=32:i=63;break}case"navbar":{Y(j(r))?i=33:i=63;break}case"pagination":{Y(j(r))?i=34:i=63;break}case"progress":{Y(j(r))?i=35:i=63;break}case"radialprogress":{Y(j(r))?i=36:i=63;break}case"skeleton":{Y(j(r))?i=37:i=63;break}case"stack":{Y(j(r))?i=38:i=63;break}case"stat":{Y(j(r))?i=39:i=63;break}case"status":{Y(j(r))?i=40:i=63;break}case"steps":{Y(j(r))?i=41:i=63;break}case"swap":{Y(j(r))?i=42:i=63;break}case"tab":{Y(j(r))?i=43:i=63;break}case"table":{Y(j(r))?i=44:i=63;break}case"themecontroller":{Y(j(r))?i=45:i=63;break}case"timeline":{Y(j(r))?i=46:i=63;break}case"toast":{Y(j(r))?i=47:i=63;break}case"tooltip":{Y(j(r))?i=48:i=63;break}case"validator":{Y(j(r))?i=49:i=63;break}case"fileinput":{Y(j(r))?i=50:i=63;break}case"formcheckbox":{Y(j(r))?i=51:i=63;break}case"forminput":{Y(j(r))?i=52:i=63;break}case"formradio":{Y(j(r))?i=53:i=63;break}case"formrange":{Y(j(r))?i=54:i=63;break}case"formselect":{Y(j(r))?i=55:i=63;break}case"formtextarea":{Y(j(r))?i=56:i=63;break}case"formtoggle":{Y(j(r))?i=57:i=63;break}case"mockupcode":{Y(j(r))?i=58:i=63;break}case"mockupphone":{Y(j(r))?i=59:i=63;break}case"mockupwindow":{Y(j(r))?i=60:i=63;break}case"rating":{Y(j(r))?i=61:i=63;break}default:i=63}switch(i){case 0:return new O(1,[]);case 1:return new O(2,[]);case 2:return new O(3,[]);case 3:return new O(5,[]);case 4:return new O(4,[]);case 5:return new O(6,[]);case 6:return new O(7,[]);case 7:return new O(8,[]);case 8:return new O(9,[]);case 9:return new O(10,[]);case 10:return new O(11,[]);case 11:return new O(12,[]);case 12:return new O(13,[]);case 13:return new O(14,[]);case 14:return new O(15,[]);case 15:return new O(16,[]);case 16:return new O(17,[]);case 17:return new O(18,[]);case 18:return new O(19,[]);case 19:return new O(20,[]);case 20:return new O(21,[]);case 21:return new O(22,[]);case 22:return new O(23,[]);case 23:return new O(25,[]);case 24:return new O(24,[]);case 25:return new O(26,[]);case 26:return new O(27,[]);case 27:return new O(28,[]);case 28:return new O(29,[]);case 29:return new O(30,[]);case 30:return new O(31,[]);case 31:return new O(32,[]);case 32:return new O(33,[]);case 33:return new O(34,[]);case 34:return new O(35,[]);case 35:return new O(36,[]);case 36:return new O(37,[]);case 37:return new O(38,[]);case 38:return new O(39,[]);case 39:return new O(40,[]);case 40:return new O(41,[]);case 41:return new O(42,[]);case 42:return new O(43,[]);case 43:return new O(44,[]);case 44:return new O(45,[]);case 45:return new O(46,[]);case 46:return new O(47,[]);case 47:return new O(48,[]);case 48:return new O(49,[]);case 49:return new O(50,[]);case 50:return new O(51,[]);case 51:return new O(52,[]);case 52:return new O(53,[]);case 53:return new O(54,[]);case 54:return new O(55,[]);case 55:return new O(56,[]);case 56:return new O(57,[]);case 57:return new O(58,[]);case 58:return new O(59,[]);case 59:return new O(60,[]);case 60:return new O(61,[]);case 61:return new O(62,[]);case 62:return new O(0,[]);default:return Gg}}function J(r){return[r,Fe()]}function Oo(r){switch(r.tag){case 1:return J(v("use"));case 2:return J(v("themes"));case 3:return J(v("colors"));case 4:return J(v("accordion"));case 5:return J(v("alert"));case 6:return J(v("avatar"));case 7:return J(v("badge"));case 8:return J(v("breadcrumbs"));case 9:return J(v("button"));case 10:return J(v("card"));case 11:return J(v("carousel"));case 13:return J(v("collapse"));case 12:return J(v("chatbubble"));case 14:return J(v("countdown"));case 15:return J(v("diff"));case 16:return J(v("divider"));case 17:return J(v("dock"));case 18:return J(v("drawer"));case 19:return J(v("dropdown"));case 20:return J(v("fieldset"));case 21:return J(v("filter"));case 22:return J(v("footer"));case 23:return J(v("hero"));case 25:return J(v("indicator"));case 24:return J(v("join"));case 26:return J(v("kbd"));case 27:return J(v("label"));case 28:return J(v("link"));case 29:return J(v("list"));case 30:return J(v("loading"));case 31:return J(v("mask"));case 32:return J(v("menu"));case 33:return J(v("modal"));case 34:return J(v("navbar"));case 35:return J(v("pagination"));case 36:return J(v("progress"));case 37:return J(v("radialprogress"));case 38:return J(v("skeleton"));case 39:return J(v("stack"));case 40:return J(v("stat"));case 41:return J(v("status"));case 42:return J(v("steps"));case 43:return J(v("swap"));case 44:return J(v("tab"));case 45:return J(v("table"));case 46:return J(v("themecontroller"));case 47:return J(v("timeline"));case 48:return J(v("toast"));case 49:return J(v("tooltip"));case 50:return J(v("validator"));case 51:return J(v("fileinput"));case 52:return J(v("formcheckbox"));case 53:return J(v("forminput"));case 54:return J(v("formradio"));case 55:return J(v("formrange"));case 56:return J(v("formselect"));case 57:return J(v("formtextarea"));case 58:return J(v("formtoggle"));case 59:return J(v("mockupcode"));case 60:return J(v("mockupphone"));case 61:return J(v("mockupwindow"));case 62:return J(v("rating"));default:return J(Fe())}}function Kf(r){r.preventDefault(),Mo(v(r.currentTarget.attributes.href.value))}function Vg(r){const i=Oo(r);return Lg(o=>{const u=i[1];To($i(p=>{Mo(ec(p[0],v(p[1]+ga(u))))},zo(i[0])),()=>{Mo(v(ga(u)))})})}function jg(r){return Un((i,o)=>{const u=i[0],p=i[1],y=o;return y[0]==="className"?[Xt(en(y[1]),u),p]:[u,Xt(o,p)]},[Fe(),Fe()],Ii(r))}function b(r,i){const o=jg(i);return Xt(["className",fn(" ",Xt(r,o[0]))],o[1])}function Ro(r){return a.createElement("div",h(b("status",r)))}function rt(r,i){return["className",fn(" ",bh(o=>{const u=o;if(u[0]==="className")return en(u[1])},d([r,i])))]}class Dh{constructor(i){this.k=i}}function Ht(r){return new Dh(r)}function de(r){return r.k}class De extends Dh{constructor(i,o,u,p){super(i),this.left=o,this.right=u,this.h=p|0}}function Tt(r,i,o,u){return new De(r,i,o,u)}function Ue(r){return r.left}function ke(r){return r.right}function va(r){return r.h}function wh(r,i){e:for(;;){const o=r,u=i;if(o!=null){const p=$(o);if(p instanceof De){const y=p;r=Ue(y),i=wh(ke(y),u+1);continue e}else return u+1|0}else return u|0}}function Yg(r){return wh(r,0)}function It(r,i,o){let u,p,y;const E=r;if(E!=null){const z=$(E);y=z instanceof De?(u=z,va(u)):1}else y=0;let w;const D=o;if(D!=null){const z=$(D);w=z instanceof De?(p=z,va(p)):1}else w=0;const N=(y<w?w:y)|0;return N===0?Ht(i):Tt(i,r,o,N+1)}function Ff(r,i,o){let u,p,y,E,w,D,N,z,M;const q=r;if(q!=null){const Z=$(q);M=Z instanceof De?(u=Z,va(u)):1}else M=0;let B;const Q=o;if(Q!=null){const Z=$(Q);B=Z instanceof De?(p=Z,va(p)):1}else B=0;if(B>M+2){const Z=$(o);if(Z instanceof De){const W=Z;if(y=Ue(W),(y!=null?(E=$(y),E instanceof De?(w=E,va(w)):1):0)>M+1){const ge=$(Ue(W));if(ge instanceof De){const ce=ge;return It(It(r,i,Ue(ce)),de(ce),It(ke(ce),de(W),ke(W)))}else throw new Error("internal error: Set.rebalance")}else return It(It(r,i,Ue(W)),de(W),ke(W))}else throw new Error("internal error: Set.rebalance")}else if(M>B+2){const Z=$(r);if(Z instanceof De){const W=Z;if(D=ke(W),(D!=null?(N=$(D),N instanceof De?(z=N,va(z)):1):0)>B+1){const ge=$(ke(W));if(ge instanceof De){const ce=ge;return It(It(Ue(W),de(W),Ue(ce)),de(ce),It(ke(ce),i,o))}else throw new Error("internal error: Set.rebalance")}else return It(Ue(W),de(W),It(ke(W),i,o))}else throw new Error("internal error: Set.rebalance")}else return It(r,i,o)}function Sa(r,i,o){if(o!=null){const u=$(o),p=r.Compare(i,de(u))|0;if(u instanceof De){const y=u;return p<0?Ff(Sa(r,i,Ue(y)),de(y),ke(y)):p===0?o:Ff(Ue(y),de(y),Sa(r,i,ke(y)))}else{const y=r.Compare(i,de(u))|0;return y<0?Tt(i,void 0,o,2):y===0?o:Tt(i,o,void 0,2)}}else return Ht(i)}function _h(r,i,o){e:for(;;){const u=r,p=i,y=o;if(y!=null){const E=$(y),w=u.Compare(p,de(E))|0;if(E instanceof De){const D=E;if(w<0){r=u,i=p,o=Ue(D);continue e}else{if(w===0)return!0;r=u,i=p,o=ke(D);continue e}}else return w===0}else return!1}}function Hh(r,i){e:for(;;){const o=r,u=i;if(u!=null){const p=$(u);if(p instanceof De){const y=p;Hh(o,Ue(y)),o(de(y)),r=o,i=ke(y);continue e}else o(de(p))}break}}class Qg extends Hr{constructor(i,o){super(),this.stack=i,this.started=o}}function Th(r){e:for(;;){const i=r;if(Y(i))return Fe();{const o=ie(i),u=j(i);if(o!=null){const p=$(o);if(p instanceof De){const y=p;r=Qe([Ue(y),Ht(de(y)),ke(y)],u);continue e}else return i}else{r=u;continue e}}}}function Jf(r){return new Qg(Th(v(r)),!1)}function Xg(){throw new Error("Enumeration not started")}function Zg(){throw new Error("Enumeration already started")}function $f(r){if(r.started){const i=r.stack;if(Y(i))return Zg();if(ie(i)!=null){const o=$(ie(i));return de(o)}else throw new Error("Please report error: Set iterator, unexpected stack for current")}else return Xg()}function Kg(r){if(r.started){const i=r.stack;if(Y(i))return!1;if(ie(i)!=null){if($(ie(i))instanceof De)throw new Error("Please report error: Set iterator, unexpected stack for moveNext");return r.stack=Th(j(i)),!Y(r.stack)}else throw new Error("Please report error: Set iterator, unexpected stack for moveNext")}else return r.started=!0,!Y(r.stack)}function Wf(r){let i=Jf(r);return{"System.Collections.Generic.IEnumerator`1.get_Current"(){return $f(i)},"System.Collections.IEnumerator.get_Current"(){return $f(i)},"System.Collections.IEnumerator.MoveNext"(){return Kg(i)},"System.Collections.IEnumerator.Reset"(){i=Jf(r)},Dispose(){}}}function Fg(r,i,o){e:for(;;){const u=r,p=i,y=o;if(Y(p))return Y(y)?0:-1;if(Y(y))return 1;if(ie(y)!=null)if(ie(p)!=null){const E=$(ie(p)),w=$(ie(y));if(E instanceof De){const D=E;if(Ue(D)==null)if(w instanceof De){const N=w;if(Ue(N)==null){const z=u.Compare(de(D),de(N))|0;if(z!==0)return z|0;r=u,i=Xt(ke(D),j(p)),o=Xt(ke(N),j(y));continue e}else{let z,M,q,B,Q;switch(Y(p)?Y(y)?z=2:ie(y)!=null?(z=1,B=j(y),Q=$(ie(y))):z=2:ie(p)!=null?(z=0,M=j(p),q=$(ie(p))):Y(y)?z=2:ie(y)!=null?(z=1,B=j(y),Q=$(ie(y))):z=2,z){case 0:if(q instanceof De){const Z=q;r=u,i=Qe([Ue(Z),Tt(de(Z),void 0,ke(Z),0)],M),o=y;continue e}else{r=u,i=Qe([void 0,Ht(de(q))],M),o=y;continue e}case 1:if(Q instanceof De){const Z=Q;r=u,i=p,o=Qe([Ue(Z),Tt(de(Z),void 0,ke(Z),0)],B);continue e}else{r=u,i=p,o=Qe([void 0,Ht(de(Q))],B);continue e}default:throw new Error("unexpected state in SetTree.compareStacks")}}}else{const N=u.Compare(de(D),de(w))|0;if(N!==0)return N|0;r=u,i=Xt(ke(D),j(p)),o=Xt(void 0,j(y));continue e}else{let N,z,M,q,B;switch(Y(p)?Y(y)?N=2:ie(y)!=null?(N=1,q=j(y),B=$(ie(y))):N=2:ie(p)!=null?(N=0,z=j(p),M=$(ie(p))):Y(y)?N=2:ie(y)!=null?(N=1,q=j(y),B=$(ie(y))):N=2,N){case 0:if(M instanceof De){const Q=M;r=u,i=Qe([Ue(Q),Tt(de(Q),void 0,ke(Q),0)],z),o=y;continue e}else{r=u,i=Qe([void 0,Ht(de(M))],z),o=y;continue e}case 1:if(B instanceof De){const Q=B;r=u,i=p,o=Qe([Ue(Q),Tt(de(Q),void 0,ke(Q),0)],q);continue e}else{r=u,i=p,o=Qe([void 0,Ht(de(B))],q);continue e}default:throw new Error("unexpected state in SetTree.compareStacks")}}}else if(w instanceof De){const D=w;if(Ue(D)==null){const N=u.Compare(de(E),de(D))|0;if(N!==0)return N|0;r=u,i=Xt(void 0,j(p)),o=Xt(ke(D),j(y));continue e}else{let N,z,M,q,B;switch(Y(p)?Y(y)?N=2:ie(y)!=null?(N=1,q=j(y),B=$(ie(y))):N=2:ie(p)!=null?(N=0,z=j(p),M=$(ie(p))):Y(y)?N=2:ie(y)!=null?(N=1,q=j(y),B=$(ie(y))):N=2,N){case 0:if(M instanceof De){const Q=M;r=u,i=Qe([Ue(Q),Tt(de(Q),void 0,ke(Q),0)],z),o=y;continue e}else{r=u,i=Qe([void 0,Ht(de(M))],z),o=y;continue e}case 1:if(B instanceof De){const Q=B;r=u,i=p,o=Qe([Ue(Q),Tt(de(Q),void 0,ke(Q),0)],q);continue e}else{r=u,i=p,o=Qe([void 0,Ht(de(B))],q);continue e}default:throw new Error("unexpected state in SetTree.compareStacks")}}}else{const D=u.Compare(de(E),de(w))|0;if(D!==0)return D|0;r=u,i=j(p),o=j(y);continue e}}else{$(ie(y));let E,w,D,N,z;switch(Y(p)?Y(y)?E=2:ie(y)!=null?(E=1,N=j(y),z=$(ie(y))):E=2:ie(p)!=null?(E=0,w=j(p),D=$(ie(p))):Y(y)?E=2:ie(y)!=null?(E=1,N=j(y),z=$(ie(y))):E=2,E){case 0:if(D instanceof De){const M=D;r=u,i=Qe([Ue(M),Tt(de(M),void 0,ke(M),0)],w),o=y;continue e}else{r=u,i=Qe([void 0,Ht(de(D))],w),o=y;continue e}case 1:if(z instanceof De){const M=z;r=u,i=p,o=Qe([Ue(M),Tt(de(M),void 0,ke(M),0)],N);continue e}else{r=u,i=p,o=Qe([void 0,Ht(de(z))],N);continue e}default:throw new Error("unexpected state in SetTree.compareStacks")}}else if(ie(p)!=null){$(ie(p));let E,w,D,N,z;switch(Y(p)?Y(y)?E=2:ie(y)!=null?(E=1,N=j(y),z=$(ie(y))):E=2:ie(p)!=null?(E=0,w=j(p),D=$(ie(p))):Y(y)?E=2:ie(y)!=null?(E=1,N=j(y),z=$(ie(y))):E=2,E){case 0:if(D instanceof De){const M=D;r=u,i=Qe([Ue(M),Tt(de(M),void 0,ke(M),0)],w),o=y;continue e}else{r=u,i=Qe([void 0,Ht(de(D))],w),o=y;continue e}case 1:if(z instanceof De){const M=z;r=u,i=p,o=Qe([Ue(M),Tt(de(M),void 0,ke(M),0)],N);continue e}else{r=u,i=p,o=Qe([void 0,Ht(de(z))],N);continue e}default:throw new Error("unexpected state in SetTree.compareStacks")}}else{r=u,i=j(p),o=j(y);continue e}}}function If(r,i,o){return i==null?o==null?0:-1:o==null?1:Fg(r,v(i),v(o))|0}function Jg(r,i,o){let u=o;Hh(p=>{wr(i,u,p),u=u+1|0},r)}function $g(r,i,o){e:for(;;){const u=r,p=i,y=o;if(y["System.Collections.IEnumerator.MoveNext"]()){r=u,i=Sa(u,y["System.Collections.Generic.IEnumerator`1.get_Current"](),p),o=y;continue e}else return p}}function Wg(r,i){return Ib((o,u)=>Sa(r,u,o),void 0,i)}function Ig(r,i){return Un((o,u)=>Sa(r,u,o),void 0,i)}function Pg(r,i){if(Mn(i))return Wg(r,i);if(i instanceof Kt)return Ig(r,i);{const o=kt(i);try{return $g(r,void 0,o)}finally{dt(o)}}}class Go{constructor(i,o){this.comparer=i,this.tree=o}GetHashCode(){return n0(this)|0}Equals(i){let o;const u=this;return i instanceof Go&&(o=i,If(Ea(u),Pt(u),Pt(o))===0)}toString(){return"set ["+fn("; ",dn(o=>en(o),this))+"]"}get[Symbol.toStringTag](){return"FSharpSet"}toJSON(){const i=this;return Array.from(i)}CompareTo(i){const o=this;return If(Ea(o),Pt(o),Pt(i))|0}"System.Collections.Generic.ICollection`1.Add2B595"(i){throw new Error("ReadOnlyCollection")}"System.Collections.Generic.ICollection`1.Clear"(){throw new Error("ReadOnlyCollection")}"System.Collections.Generic.ICollection`1.Remove2B595"(i){throw new Error("ReadOnlyCollection")}"System.Collections.Generic.ICollection`1.Contains2B595"(i){const o=this;return _h(Ea(o),i,Pt(o))}"System.Collections.Generic.ICollection`1.CopyToZ3B4C077E"(i,o){Jg(Pt(this),i,o)}"System.Collections.Generic.ICollection`1.get_IsReadOnly"(){return!0}"System.Collections.Generic.ICollection`1.get_Count"(){return xo(this)|0}"System.Collections.Generic.IReadOnlyCollection`1.get_Count"(){return xo(this)|0}GetEnumerator(){return Wf(Pt(this))}[Symbol.iterator](){return Bo(kt(this))}"System.Collections.IEnumerable.GetEnumerator"(){return Wf(Pt(this))}get size(){return xo(this)|0}add(i){throw new Error("Set cannot be mutated")}clear(){throw new Error("Set cannot be mutated")}delete(i){throw new Error("Set cannot be mutated")}has(i){return kh(this,i)}keys(){return dn(o=>o,this)}values(){return dn(o=>o,this)}entries(){return dn(o=>[o,o],this)}forEach(i,o){const u=this;Lo(p=>{i(p,p,u)},u)}}function Vo(r,i){return new Go(r,i)}function Ea(r){return r.comparer}function Pt(r){return r.tree}function e0(r){return Vo(r,void 0)}function t0(r,i){return Vo(Ea(r),Sa(Ea(r),i,Pt(r)))}function xo(r){return Yg(Pt(r))}function kh(r,i){return _h(Ea(r),i,Pt(r))}function n0(r){let i=0;const o=kt(r);try{for(;o["System.Collections.IEnumerator.MoveNext"]();){const u=o["System.Collections.Generic.IEnumerator`1.get_Current"]();i=(i<<1)+Rl(u)+631|0}}finally{dt(o)}return Math.abs(i)|0}function Uo(r,i){return kh(i,r)}function l0(r,i){return t0(i,r)}function a0(r){return e0(r)}function r0(r,i){return Vo(i,Pg(i,r))}function i0(){return Fe()}function jo(r){return fn("/",r)}function c0(r,i){const o=new Error("Duplicate SubId");return r(["Duplicate SubId: "+jo(i),o])}function zh(r,i,o){try{dt(o)}catch(u){r(["Error stopping subscription: "+jo(i),u])}}function s0(r,i,o,u){try{return[o,u(i)]}catch(p){r(["Error starting subscription: "+jo(o),p]);return}}function o0(r,i){Pi(o=>{zh(r,o[0],o[1])},i)}function Pf(r,i,o,u,p,y){return Pi(E=>{c0(r,E)},o),Pi(E=>{zh(r,E[0],E[1])},u),ec(p,bh(E=>s0(r,i,E[0],E[1]),y))}function u0(){return[Fe(),a0({Compare:Rn}),Fe()]}function d0(r,i,o,u,p){return Uo(r,u)?[Xt(r,o),u,p]:[o,l0(r,u),Xt([r,i],p)]}function m0(r){return ag((i,o)=>d0(i[0],i[1],o[0],o[1],o[2]),r,u0())}const f0=Fe();function eh(r,i){const o=r0(rc(E=>E[0],r),{Compare:Rn}),u=m0(i),p=u[1],y=u[0];if(o.Equals(p))return[y,Fe(),r,Fe()];{const E=sg(w=>Uo(w[0],p),r);return[y,E[1],E[0],cg(w=>!Uo(w[0],o),u[2])]}}function h0(r,i,o,u){const p=Rn(r,o)|0;if(p===0)throw new Error("The step of a range cannot be zero");const y=p>0;return E=>{const w=Rn(E,i)|0;return y&&w<=0||!y&&w>=0?[E,u(E,r)]:void 0}}function p0(r,i,o,u,p){const y=h0(i,o,u,p);return ee(()=>Ag(y,r))}function y0(r,i,o){return p0(r,i,o,0,(u,p)=>u+p)}class Aa extends ac{constructor(i,o){super(),this.tag=i,this.fields=o}cases(){return["Writable","ReadWritable"]}}class b0{constructor(i){this.state=new Aa(0,[yh(new Array(Yf(i,10)),0,Yf(i,10),null),0])}}function g0(r){return new b0(r)}function th(r){const i=r.state;if(i.tag===1){const o=i.fields[1]|0,u=i.fields[2]|0,p=i.fields[0],y=(u+1)%p.length|0;return y===o?r.state=new Aa(0,[p,o]):r.state=new Aa(1,[p,o,y]),tn(Ml(u,p))}else return}function v0(r,i){const o=r.state;if(o.tag===1){const u=o.fields[1]|0,p=o.fields[2]|0,y=o.fields[0];wr(y,u,i);const E=(u+1)%y.length|0;E===p?r.state=new Aa(1,[E0(r,p,y),y.length,0]):r.state=new Aa(1,[y,E,p])}else{const u=o.fields[1]|0,p=o.fields[0];wr(p,u,i);const y=(u+1)%p.length|0;r.state=new Aa(1,[p,y,u])}}function E0(r,i,o){return Array.from(ee(()=>Ke(Cg(i,o),ee(()=>Ke(Dg(i,o),ee(()=>Xe(u=>ue(mn()),y0(0,1,o.length))))))))}class Yo extends Hr{constructor(i,o,u,p,y,E,w){super(),this.init=i,this.update=o,this.subscribe=u,this.view=p,this.setState=y,this.onError=E,this.termination=w}}function Mh(r,i,o){return new Yo(r,i,u=>i0(),o,Ol(u=>{const p=ol(o)(u);return y=>{p(y)}}),u=>{qg(u[0],u[1])},[u=>!1,u=>{}])}function A0(r,i){return new Yo(i.init,i.update,i.subscribe,i.view,r,i.onError,i.termination)}function N0(r){return r.init}function S0(r,i,o,u,p,y,E){const w=ol(r)(E.init),D=So(i)(ol(E.update)),N=So(o)(ol(E.view)),z=So(u)(ol(E.setState));return new Yo(w,Ol(D),ol(p)(E.subscribe),Ol(N),Ol(z),E.onError,y(E.termination))}function x0(r,i,o){let u;const p=o.init(i),y=p[0],E=o.subscribe(y),w=o.termination,D=g0(10);let N=!1,z=y,M=f0,q=!1;const B=W=>{q||(v0(D,W),N||(N=!0,Z(),N=!1))},Q=ol(r)(B),Z=()=>{let W,ge=th(D);for(;!q&&ge!=null;){const ce=$(ge);if(w[0](ce))o0(o.onError,M),w[1](z),q=!0;else{const ze=o.update(ce,z),Be=ze[0],se=o.subscribe(Be);o.setState(Be,Q),Zf(ct=>{o.onError([Ji(Fi("Error handling the message: %A"))(ce),ct])},Q,ze[1]),z=Be,M=(W=eh(M,se),Pf(o.onError,Q,W[0],W[1],W[2],W[3])),ge=th(D)}}};N=!0,o.setState(y,Q),Zf(W=>{o.onError([Ji(Fi("Error intitializing:")),W])},Q,p[1]),M=(u=eh(M,E),Pf(o.onError,Q,u[0],u[1],u[2],u[3])),Z(),N=!1}function C0(r,i){x0(Ol(o=>o),r,i)}var Co={exports:{}},Do={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nh;function D0(){if(nh)return Do;nh=1;var r=tc();function i(M,q){return M===q&&(M!==0||1/M===1/q)||M!==M&&q!==q}var o=typeof Object.is=="function"?Object.is:i,u=r.useState,p=r.useEffect,y=r.useLayoutEffect,E=r.useDebugValue;function w(M,q){var B=q(),Q=u({inst:{value:B,getSnapshot:q}}),Z=Q[0].inst,W=Q[1];return y(function(){Z.value=B,Z.getSnapshot=q,D(Z)&&W({inst:Z})},[M,B,q]),p(function(){return D(Z)&&W({inst:Z}),M(function(){D(Z)&&W({inst:Z})})},[M]),E(B),B}function D(M){var q=M.getSnapshot;M=M.value;try{var B=q();return!o(M,B)}catch{return!0}}function N(M,q){return q()}var z=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?N:w;return Do.useSyncExternalStore=r.useSyncExternalStore!==void 0?r.useSyncExternalStore:z,Do}var lh;function w0(){return lh||(lh=1,Co.exports=D0()),Co.exports}var _0=w0();class H0{constructor(i,o,u){this.arg=o,this.dependencies=u;const p=i(),y=[];this.finalDispatch=void 0;let E;const w=N0(p)(this.arg);let D=w[0],N=w[1];E=[[D,z=>{const M=this.finalDispatch;M==null?y.push(z):M(z)},!1,y],N],this.state=E[0],this.cmd=E[1],this.subscribe=z=>{let M=!1;const q=wo(this.state[0]);return C0(this.arg,A0((B,Q)=>{const Z=this.state;this.finalDispatch=Q,this.state=[B,Z[1],!0,y],B!==Z[0]&&z()},S0((B,Q)=>{const Z=this.cmd;return this.cmd=cc(),[this.state[0],Z]},(B,Q,Z)=>B(Q)(this.state[0]),qf(B=>B),qf(B=>B),Ol(B=>B),B=>[Q=>B[0](Q)?!0:q&&M,Q=>{const Z=Q;wo(Z)?dt(Z):B[1](Q)}],p))),()=>{M=!0}}}}function ah(r,i,o){return new H0(r,i,o)}function T0(r){return r.state}function k0(r){return r.subscribe}function z0(r,i,o){return On(r.arg,i)?!On(r.dependencies,o):!0}function Oh(r,i,o){const u=a.useState(()=>ah(r,i,o)),p=u[0];z0(p,i,o)&&u[1](ah(r,i,o));const y=_0.useSyncExternalStore(k0(p),()=>T0(p)),E=y[2],w=y[3],D=y[1];return a.useEffect(()=>{if(E&&w.length>0){let N=kt(w);try{for(;N["System.Collections.IEnumerator.MoveNext"]();){const z=N["System.Collections.Generic.IEnumerator`1.get_Current"]();setTimeout(()=>{D(z)})}}finally{dt(N)}_b(w)}},[E,w]),[y[0],D]}function Zi(r){const i=xg((o,u)=>a.createElement("pre",h(we(ee(()=>Ke(ue(["data-prefix",Eb(o+1)]),ee(()=>Ke(u.indexOf("// ")>=0?ue(["className","text-warning"]):Ah(),ee(()=>{let p;return ue((p=[a.createElement("code",{children:[u]})],["children",m.Children.toArray(Array.from(p))]))})))))))),mh(r,[`
`],void 0,0));return a.createElement("div",{className:"mockup-code",children:m.Children.toArray(Array.from(i))})}function H(r,i,o){let u,p;const y=d([a.createElement("div",{className:"description",children:m.Children.toArray([r])}),(u=d([(p=v(Zi(i)),a.createElement("div",{className:"grid flex-1 h-full",children:m.Children.toArray(Array.from(p))})),a.createElement("div",h(b("divider",d([["children","👉"],["className","text-neutral"],["className","after:bg-opacity-30 before:bg-opacity-30 md:divider-horizontal"]])))),a.createElement("div",{className:"grid flex-1 min-h-[10rem]",children:m.Children.toArray([o])})]),a.createElement("div",{className:"flex flex-col md:flex-row w-full",children:m.Children.toArray(Array.from(u))}))]);return a.createElement("div",{className:"mb-10",children:m.Children.toArray(Array.from(y))})}function M0(){let r,i,o,u,p;const y=[a.createElement("div",{className:"description",children:m.Children.toArray(["After installation just open proper namespace:"])}),(r=v(Zi("open Feliz.DaisyUI")),a.createElement("div",{className:"max-w-xl",children:m.Children.toArray(Array.from(r))})),(i=d(["Now you can start using library. Everything important starts with ",a.createElement("code",{className:"code",children:"Daisy.*"})," module."]),a.createElement("div",{className:"description",children:m.Children.toArray(Array.from(i))})),(o=v(Zi(`Daisy.button.button [
    button.primary
    prop.text "This is button"
]`)),a.createElement("div",{className:"max-w-xl",children:m.Children.toArray(Array.from(o))})),(u=d(["For applying helpers to non-daisy elements, you need to use custom operator ",a.createElement("code",{className:"code",children:"++"})," from ",a.createElement("code",{className:"code",children:"Feliz.DaisyUI.Operators"})," namespace."]),a.createElement("div",{className:"description",children:m.Children.toArray(Array.from(u))})),(p=v(Zi(`open Feliz.DaisyUI.Operators

Html.div [
    prop.className "my-class"
    ++ color.success // note usage of custom operator here
]`)),a.createElement("div",{className:"max-w-xl",children:m.Children.toArray(Array.from(p))}))];return a.createElement(a.Fragment,{},...y)}const O0=(()=>{let r,i;const o=a.createElement("div",h(d([["data-theme","cupcake"],(r=[a.createElement("button",h(b("btn",d([["className","btn-primary"],["children","This is cupcake style button"]]))))],["children",m.Children.toArray(Array.from(r))])])));return H(a.createElement("div",h(v((i="Use <code class='code'>theme.YOUR_THEME</code> to apply one of existing themes to any element on a page.",["dangerouslySetInnerHTML",{__html:i}])))),`Html.div [
    theme.cupcake // <-- this is the theme
    prop.children [
        Daisy.button.button [
            button.primary
            prop.text "This is cupcake style button"
        ]
    ]
]`,o)})(),R0=(()=>{let r,i,o,u,p,y;const E=v(a.createElement("div",h(b("card",d([["data-theme","cyberpunk"],["className","card-border"],(r=[a.createElement("figure",h(d([["className","pt-10"],(i=[a.createElement("img",{src:"https://picsum.photos/id/1005/400/250"})],["children",m.Children.toArray(Array.from(i))])]))),(o=d([a.createElement("h2",{className:"card-title",children:"Some title"}),a.createElement("p",{children:["What a cool library, isn't it?"]}),(u=v(a.createElement("button",h(b("btn",d([["className","btn-primary"],["children","Click or something"]]))))),a.createElement("div",{className:"card-actions",children:m.Children.toArray(Array.from(u))}))]),a.createElement("div",{className:"card-body",children:m.Children.toArray(Array.from(o))}))],["children",m.Children.toArray(Array.from(r))])])))));return y=a.createElement("div",{children:m.Children.toArray(Array.from(E))}),H(a.createElement("div",h(v((p="You can use it on any element or any part of page. Yes, even for whole <code class='code'>&lt;body&gt;</code>!",["dangerouslySetInnerHTML",{__html:p}])))),`Daisy.card [
    theme.cyberpunk // <-- use cyberpunk here
    card.border
    prop.children [
        Html.figure [
            prop.className "pt-10"
            prop.children [
                Html.img [ prop.src "https://picsum.photos/id/1005/400/250" ]
            ]
        ]
        Daisy.cardBody [
            Daisy.cardTitle "Some title"
            Html.p "What a cool library, isn't it?"
            Daisy.cardActions [
                Daisy.button.button [
                    button.primary
                    prop.text "Click or something"
                ]
            ]
        ]
    ]
]`,y)})();function U0(){return a.createElement(a.Fragment,{},O0,R0)}const B0=(()=>{let r,i;const o=d([a.createElement("div",{className:"text-primary",children:"I am primary!"}),a.createElement("div",{className:"text-success",children:"I am success!"}),a.createElement("div",{className:"bg-accent",children:"Background accent"}),a.createElement("div",h(d([rt(["className","bg-error"],["className","text-success"]),["children","Success with error background 🤦"]])))]);return i=a.createElement("div",{className:"flex flex-col space-y-4",children:m.Children.toArray(Array.from(o))}),H((r=d([a.createElement("span",{children:["To select one of predefined "]}),a.createElement("a",{className:"link",children:"colors",href:"https://daisyui.com/core/colors"}),a.createElement("span",{dangerouslySetInnerHTML:{__html:", use the <code class='code'>color.YOUR_COLOR</code>"}})]),a.createElement("div",{children:m.Children.toArray(Array.from(r))})),`Html.div [
    Html.div [ color.textPrimary; prop.text "I am primary!" ]
    Html.div [ color.textSuccess; prop.text "I am success!" ]
    Html.div [ color.bgAccent; prop.text "Background accent" ]
    Html.div [
        // Note the usage of custom operator ++
        (color.bgError ++ color.textSuccess)
        prop.text "Success with error background 🤦"
    ]
]`,i)})();function q0(){return a.createElement(a.Fragment,{},B0)}const L0=(()=>{let r,i,o,u,p;return H("Accordion is cool and easy to use",`Html.div [
    Daisy.collapse [
        color.bgBase200
        prop.className "mb-2"
        prop.children [
            Html.input [ prop.type'.radio; prop.isChecked true; prop.name "my-accordion" ]
            Daisy.collapseTitle [
                prop.className "text-xl"
                prop.text "Click to open this one and close others"
            ]
            Daisy.collapseContent [
                Html.p "Hello"
            ]
        ]
    ]
    Daisy.collapse [
        color.bgBase200
        prop.children [
            Html.input [ prop.type'.radio; prop.isChecked true; prop.name "my-accordion" ]
            Daisy.collapseTitle [
                prop.className "text-xl"
                prop.text "Click to open this one and close others"
            ]
            Daisy.collapseContent [
                Html.p "Hello"
            ]
        ]
    ]
]`,(r=d([a.createElement("div",h(b("collapse",d([["className","bg-base-200"],["className","mb-2"],(i=[a.createElement("input",{type:"radio",checked:!0,name:"my-accordion"}),a.createElement("div",h(b("collapse-title",d([["className","text-xl"],["children","Click to open this one and close others"]])))),(o=v(a.createElement("p",{children:["Hello"]})),a.createElement("div",{className:"collapse-content",children:m.Children.toArray(Array.from(o))}))],["children",m.Children.toArray(Array.from(i))])])))),a.createElement("div",h(b("collapse",d([["className","bg-base-200"],(u=[a.createElement("input",{type:"radio",checked:!0,name:"my-accordion"}),a.createElement("div",h(b("collapse-title",d([["className","text-xl"],["children","Click to open this one and close others"]])))),(p=v(a.createElement("p",{children:["Hello"]})),a.createElement("div",{className:"collapse-content",children:m.Children.toArray(Array.from(p))}))],["children",m.Children.toArray(Array.from(u))])]))))]),a.createElement("div",{children:m.Children.toArray(Array.from(r))})))})();function G0(){let r,i,o;const u=[(r=d([(i="Accordion uses the same style as the collapse component but it works with radio inputs. You can control which item to be open by checking/unchecking the hidden radio input.",a.createElement("div",{className:"alert",children:i})),(o="All radio inputs with the same name work together and only one of them can be open at a time. If you have more than one set of accordion items on a page, use different names for the radio inputs on each set.",a.createElement("div",{className:"alert",children:o}))]),a.createElement("div",{className:"flex flex-col gap-2",children:m.Children.toArray(Array.from(r))})),L0];return a.createElement(a.Fragment,{},...u)}const V0=H("Use of Alert is rather straightforward.",`Daisy.alert [
    alert.info
    prop.text "This is info"
]`,a.createElement("div",{children:[a.createElement("div",h(b("alert",d([["className","alert-info"],["children","This is info"]]))))]})),j0=(()=>{const r=a.createElement("div",{children:[a.createElement("div",h(b("alert",d([["className","alert-success"],["children","Wow it works so great!"]]))))]});return H(mn(),`Daisy.alert [
    alert.success
    prop.text "Wow it works so great!"
]`,r)})(),Y0=(()=>{const r=a.createElement("div",{children:[a.createElement("div",h(b("alert",d([["className","alert-error"],["children","OMG, something went wrong!"]]))))]});return H(mn(),`Daisy.alert [
    alert.error
    prop.text "OMG, something went wrong!"
]`,r)})(),Q0=(()=>{let r;const i=a.createElement("div",{children:[a.createElement("div",h(b("alert",d([["className","alert-warning"],["className","justify-start"],(r=[a.createElement("i",{className:"fas fa-exclamation-triangle mr-2"}),a.createElement("label",{children:"Warning with cool icon"})],["children",m.Children.toArray(Array.from(r))])]))))]});return H(mn(),`Daisy.alert [
    alert.warning
    prop.className "justify-start"
    prop.children [
        Html.i [ prop.className "fas fa-exclamation-triangle mr-2" ]
        Html.label [ prop.text "Warning with cool icon" ]
    ]
]`,i)})();function X0(){return a.createElement(a.Fragment,{},V0,j0,Y0,Q0)}const Z0=(()=>{let r,i;return H("Avatars are also quite easy to use!",`Daisy.avatar [
    Html.div [
        prop.className "mb-8 w-24 h-24"
        prop.children [
            Html.img [
                prop.src "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            ]
        ]
    ]
]`,a.createElement("div",{children:[(r=v(a.createElement("div",h(d([["className","mb-8 w-24 h-24"],(i=[a.createElement("img",{src:"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"})],["children",m.Children.toArray(Array.from(i))])])))),a.createElement("div",{className:"avatar",children:m.Children.toArray(Array.from(r))}))]}))})(),K0=(()=>{let r,i,o,u,p,y,E;return H("Group all the avatars!",`Daisy.avatarGroup [
    prop.className "-space-x-6"
    prop.children [
        Daisy.avatar [
            Html.div [
                prop.className "w-12"
                prop.children [
                    Html.img [
                        prop.src "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    ]
                ]
            ]
        ]
        Daisy.avatar [
            Html.div [
                prop.className "w-12"
                prop.children [
                    Html.img [
                        prop.src "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    ]
                ]
            ]
        ]
        Daisy.avatar [
            Html.div [
                prop.className "w-12"
                prop.children [
                    Html.img [
                        prop.src "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    ]
                ]
            ]
        ]
    ]
]`,a.createElement("div",{children:[a.createElement("div",h(b("avatar-group",d([["className","-space-x-6"],(r=[(i=v(a.createElement("div",h(d([["className","w-12"],(o=[a.createElement("img",{src:"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"})],["children",m.Children.toArray(Array.from(o))])])))),a.createElement("div",{className:"avatar",children:m.Children.toArray(Array.from(i))})),(u=v(a.createElement("div",h(d([["className","w-12"],(p=[a.createElement("img",{src:"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"})],["children",m.Children.toArray(Array.from(p))])])))),a.createElement("div",{className:"avatar",children:m.Children.toArray(Array.from(u))})),(y=v(a.createElement("div",h(d([["className","w-12"],(E=[a.createElement("img",{src:"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"})],["children",m.Children.toArray(Array.from(E))])])))),a.createElement("div",{className:"avatar",children:m.Children.toArray(Array.from(y))}))],["children",m.Children.toArray(Array.from(r))])]))))]}))})();function F0(){return a.createElement(a.Fragment,{},Z0,K0)}const J0=H("Just a badge.",`Daisy.badge [
    badge.lg
    badge.error
    prop.text "Big error badge"
]`,a.createElement("div",{children:[a.createElement("div",h(b("badge",d([["className","badge-lg"],["className","badge-error"],["children","Big error badge"]]))))]})),$0=H("Just a badge. Yup. Again.",`Daisy.badge [
    badge.sm
    badge.success
    prop.text "Success badge"
]`,a.createElement("div",{children:[a.createElement("div",h(b("badge",d([["className","badge-sm"],["className","badge-success"],["children","Success badge"]]))))]})),W0=(()=>{let r;return H("And now inside a button!",`Daisy.button.button [
    Html.text "This is button"
    Daisy.badge [
        badge.sm
        badge.success
        prop.text "NEW"
    ]
]`,a.createElement("div",{children:[(r=d(["This is button",a.createElement("div",h(b("badge",d([["className","badge-sm"],["className","badge-success"],["children","NEW"]]))))]),a.createElement("button",{className:"btn",children:m.Children.toArray(Array.from(r))}))]}))})();function I0(){return a.createElement(a.Fragment,{},J0,$0,W0)}const P0=(()=>{let r,i;return H("Turn ul/li into beautiful breadcrumbs.",`Daisy.breadcrumbs [
    Html.ul [
        Html.li "New project"
        Html.li ".NET"
        Html.li "F# as always"
    ]
]`,a.createElement("div",{children:[(r=v((i=d([a.createElement("li",{children:["New project"]}),a.createElement("li",{children:[".NET"]}),a.createElement("li",{children:["F# as always"]})]),a.createElement("ul",{children:m.Children.toArray(Array.from(i))}))),a.createElement("div",{className:"breadcrumbs",children:m.Children.toArray(Array.from(r))}))]}))})();function ev(){return a.createElement(a.Fragment,{},P0)}const tv=H("Nicely styled buttons at your service.",`Daisy.button.button [
    button.outline
    button.primary
    button.lg
    prop.text "Do NOT click on me!"
]`,a.createElement("div",{children:[a.createElement("button",h(b("btn",d([["className","btn-outline"],["className","btn-primary"],["className","btn-lg"],["onClick",i=>{window.alert(tn("Oh, we have a rebel here!"))}],["children","Do NOT click on me!"]]))))]})),nv=(()=>{let r,i;return H("Colors are nice.",`[ "neutral", button.neutral
  "primary", button.primary
  "secondary", button.secondary
  "accent", button.accent
  "ghost", button.ghost
  "link", button.link ]
|> List.map (fun (n,c) ->
    Daisy.button.button [
        c
        prop.text n
    ]
)
|> (fun btns ->
    Html.div [
        prop.className "flex gap-2"
        prop.children [
            Daisy.button.button [ prop.text "Default" ]
            yield! btns
        ]
    ]
)`,(r=rc(u=>a.createElement("button",h(b("btn",d([u[1],["children",u[0]]])))),d([["neutral",["className","btn-neutral"]],["primary",["className","btn-primary"]],["secondary",["className","btn-secondary"]],["accent",["className","btn-accent"]],["ghost",["className","btn-ghost"]],["link",["className","btn-link"]]])),a.createElement("div",h(d([["className","flex gap-2"],(i=we(ee(()=>Ke(ue(a.createElement("button",h(b("btn",v(["children","Default"]))))),ee(()=>r)))),["children",m.Children.toArray(Array.from(i))])])))))})(),lv=(()=>{let r,i;const o=a.createElement("div",{children:[a.createElement("div",h(d([["className","p-20 bg-cover card bg-base-200"],["style",{backgroundImage:"url('https://picsum.photos/id/314/400/300')"}],(r=[a.createElement("button",h(b("btn",d([["className","glass"],["className","btn-lg"],["onClick",p=>{window.alert(tn("One keep clickin' right?"))}],["children","Glassy is very classy"]]))))],["children",m.Children.toArray(Array.from(r))])])))]});return H((i=d(["See ",a.createElement("a",{className:"link",href:"https://daisyui.com/components/button",children:"original docs"})," for more combinations."]),a.createElement("div",{children:m.Children.toArray(Array.from(i))})),`Html.div [
    prop.className "p-20 bg-cover card bg-base-200"
    prop.style [ style.backgroundImage "url('https://picsum.photos/id/314/400/300')" ]
    prop.children [
        Daisy.button.button [
            button.glass
            button.lg
            prop.text "Glassy is very classy"
        ]
    ]
]`,o)})();function av(){return a.createElement(a.Fragment,{},tv,nv,lv)}const rv=(()=>{let r,i,o,u,p;return H("Card with full image",`Daisy.card [
    card.border
    card.full
    prop.children [
        Html.figure [Html.img [prop.src "https://picsum.photos/id/1005/400/250"]]
        Daisy.cardBody [
            Daisy.cardTitle "Image overlay"
            Html.p "Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
            Daisy.cardActions [
                Daisy.button.button [prop.text "Get started"; button.primary]
            ]
        ]
    ]
]`,a.createElement("div",{children:[a.createElement("div",h(b("card",d([["className","card-border"],["className","image-full"],(r=[(i=v(a.createElement("img",{src:"https://picsum.photos/id/1005/400/250"})),a.createElement("figure",{children:m.Children.toArray(Array.from(i))})),(o=d([a.createElement("h2",{className:"card-title",children:"Image overlay"}),(u="Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.",a.createElement("p",{children:[u]})),(p=v(a.createElement("button",h(b("btn",d([["children","Get started"],["className","btn-primary"]]))))),a.createElement("div",{className:"card-actions",children:m.Children.toArray(Array.from(p))}))]),a.createElement("div",{className:"card-body",children:m.Children.toArray(Array.from(o))}))],["children",m.Children.toArray(Array.from(r))])]))))]}))})(),iv=(()=>{let r,i,o,u,p,y;return H("Card with top image",`Daisy.card [
    card.border
    prop.children [
        Html.figure [Html.img [prop.src "https://picsum.photos/id/1005/400/250"]]
        Daisy.cardBody [
            Daisy.cardTitle [
                prop.children [
                    Html.span "Top image "
                    Daisy.badge [
                        badge.lg
                        badge.secondary
                        prop.text "NEW"
                    ]
                ]
            ]
            Html.p "Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
            Daisy.cardActions [
                Daisy.button.button [prop.text "More info"; button.secondary]
            ]
        ]
    ]
]`,a.createElement("div",{children:[a.createElement("div",h(b("card",d([["className","card-border"],(r=[(i=v(a.createElement("img",{src:"https://picsum.photos/id/1005/400/250"})),a.createElement("figure",{children:m.Children.toArray(Array.from(i))})),(o=d([a.createElement("h2",h(b("card-title",v((u=[a.createElement("span",{children:["Top image "]}),a.createElement("div",h(b("badge",d([["className","badge-lg"],["className","badge-secondary"],["children","NEW"]]))))],["children",m.Children.toArray(Array.from(u))]))))),(p="Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.",a.createElement("p",{children:[p]})),(y=v(a.createElement("button",h(b("btn",d([["children","More info"],["className","btn-secondary"]]))))),a.createElement("div",{className:"card-actions",children:m.Children.toArray(Array.from(y))}))]),a.createElement("div",{className:"card-body",children:m.Children.toArray(Array.from(o))}))],["children",m.Children.toArray(Array.from(r))])]))))]}))})(),cv=(()=>{let r,i,o,u;return H("Card with shadow no image",`Daisy.card [
    prop.className "shadow-lg"
    prop.children [
        Daisy.cardBody [
            Daisy.cardTitle "No Images"
            Html.p "Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
            Daisy.cardActions [
                Daisy.button.button [prop.text "Get Started"; button.primary]
                Daisy.button.button [prop.text "More info"; button.ghost]
            ]
        ]
    ]
]`,a.createElement("div",{children:[a.createElement("div",h(b("card",d([["className","shadow-lg"],(r=[(i=d([a.createElement("h2",{className:"card-title",children:"Card with shadow no image"}),(o="Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.",a.createElement("p",{children:[o]})),(u=d([a.createElement("button",h(b("btn",d([["children","Get Started"],["className","btn-primary"]])))),a.createElement("button",h(b("btn",d([["children","More info"],["className","btn-ghost"]]))))]),a.createElement("div",{className:"card-actions",children:m.Children.toArray(Array.from(u))}))]),a.createElement("div",{className:"card-body",children:m.Children.toArray(Array.from(i))}))],["children",m.Children.toArray(Array.from(r))])]))))]}))})(),sv=(()=>{let r,i,o,u;return H("Card with border no image",`Daisy.card [
    card.border
    prop.children [
        Daisy.cardBody [
            Daisy.cardTitle "No Images"
            Html.p "Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
            Daisy.cardActions [
                Daisy.button.button [prop.text "Get Started"; button.primary]
                Daisy.button.button [prop.text "More info"; button.ghost]
            ]
        ]
    ]
]`,a.createElement("div",{children:[a.createElement("div",h(b("card",d([["className","card-border"],(r=[(i=d([a.createElement("h2",{className:"card-title",children:"Card with border no image"}),(o="Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.",a.createElement("p",{children:[o]})),(u=d([a.createElement("button",h(b("btn",d([["children","Get Started"],["className","btn-primary"]])))),a.createElement("button",h(b("btn",d([["children","More info"],["className","btn-ghost"]]))))]),a.createElement("div",{className:"card-actions",children:m.Children.toArray(Array.from(u))}))]),a.createElement("div",{className:"card-body",children:m.Children.toArray(Array.from(i))}))],["children",m.Children.toArray(Array.from(r))])]))))]}))})();function ov(){return a.createElement(a.Fragment,{},sv,cv,iv,rv)}const uv=(()=>{let r,i,o,u,p,y,E;return H("Horizontal",`Daisy.carousel [
    Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/500/256/144"]]
    Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/501/256/144"]]
    Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/502/256/144"]]
    Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/503/256/144"]]
    Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/505/256/144"]]
    Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/506/256/144"]]
]`,a.createElement("div",{children:[(r=d([(i=v(a.createElement("img",{src:"https://picsum.photos/id/500/256/144"})),a.createElement("div",{className:"carousel-item",children:m.Children.toArray(Array.from(i))})),(o=v(a.createElement("img",{src:"https://picsum.photos/id/501/256/144"})),a.createElement("div",{className:"carousel-item",children:m.Children.toArray(Array.from(o))})),(u=v(a.createElement("img",{src:"https://picsum.photos/id/502/256/144"})),a.createElement("div",{className:"carousel-item",children:m.Children.toArray(Array.from(u))})),(p=v(a.createElement("img",{src:"https://picsum.photos/id/503/256/144"})),a.createElement("div",{className:"carousel-item",children:m.Children.toArray(Array.from(p))})),(y=v(a.createElement("img",{src:"https://picsum.photos/id/505/256/144"})),a.createElement("div",{className:"carousel-item",children:m.Children.toArray(Array.from(y))})),(E=v(a.createElement("img",{src:"https://picsum.photos/id/506/256/144"})),a.createElement("div",{className:"carousel-item",children:m.Children.toArray(Array.from(E))}))]),a.createElement("div",{className:"carousel",children:m.Children.toArray(Array.from(r))}))]}))})(),dv=(()=>{let r,i,o,u,p,y,E;return H("Vertical",`Daisy.carousel [
    prop.classes ["w-64"; "h-36"]
    carousel.vertical
    prop.children [
        Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/500/256/144"]]
        Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/501/256/144"]]
        Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/502/256/144"]]
        Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/503/256/144"]]
        Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/505/256/144"]]
        Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/506/256/144"]]
    ]
]`,a.createElement("div",{children:[a.createElement("div",h(b("carousel",d([["className",fn(" ",["w-64","h-36"])],["className","carousel-vertical"],(r=[(i=v(a.createElement("img",{src:"https://picsum.photos/id/500/256/144"})),a.createElement("div",{className:"carousel-item",children:m.Children.toArray(Array.from(i))})),(o=v(a.createElement("img",{src:"https://picsum.photos/id/501/256/144"})),a.createElement("div",{className:"carousel-item",children:m.Children.toArray(Array.from(o))})),(u=v(a.createElement("img",{src:"https://picsum.photos/id/502/256/144"})),a.createElement("div",{className:"carousel-item",children:m.Children.toArray(Array.from(u))})),(p=v(a.createElement("img",{src:"https://picsum.photos/id/503/256/144"})),a.createElement("div",{className:"carousel-item",children:m.Children.toArray(Array.from(p))})),(y=v(a.createElement("img",{src:"https://picsum.photos/id/505/256/144"})),a.createElement("div",{className:"carousel-item",children:m.Children.toArray(Array.from(y))})),(E=v(a.createElement("img",{src:"https://picsum.photos/id/506/256/144"})),a.createElement("div",{className:"carousel-item",children:m.Children.toArray(Array.from(E))}))],["children",m.Children.toArray(Array.from(r))])]))))]}))})();function mv(){return a.createElement(a.Fragment,{},uv,dv)}const fv=(()=>{let r,i,o;return H("With start and end",`Html.div [
    Daisy.chat [
        chat.start
        prop.children [
            Daisy.chatBubble "Is there anything better than Fable & F#?"
        ]
    ]
    Daisy.chat [
        chat.end'
        prop.children [
            Daisy.chatBubble "No."
        ]
    ]
]`,(r=d([a.createElement("div",h(b("chat",d([["className","chat-start"],(i=[a.createElement("div",{className:"chat-bubble",children:"Is there anything better than Fable & F#?"})],["children",m.Children.toArray(Array.from(i))])])))),a.createElement("div",h(b("chat",d([["className","chat-end"],(o=[a.createElement("div",{className:"chat-bubble",children:"No."})],["children",m.Children.toArray(Array.from(o))])]))))]),a.createElement("div",{children:m.Children.toArray(Array.from(r))})))})(),hv=(()=>{let r,i,o,u,p,y,E;return H("With images",`Html.div [
    Daisy.chat [
        chat.start
        prop.children [
            Daisy.chatImage [
                avatar.className
                prop.children [
                    Html.div [
                        prop.className "w-10 rounded-full"
                        prop.children [ Html.img [ prop.src "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" ] ]
                    ]
                ]
            ]
            Daisy.chatBubble "Is anyone here?"
        ]
    ]
    Daisy.chat [
        chat.start
        prop.children [
            Daisy.chatImage [
                avatar.className
                prop.children [
                    Html.div [
                        prop.className "w-10 rounded-full"
                        prop.children [ Html.img [ prop.src "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" ] ]
                    ]
                ]
            ]
            Daisy.chatBubble "Helloooooo!"
        ]
    ]
]`,(r=d([a.createElement("div",h(b("chat",d([["className","chat-start"],(i=[a.createElement("div",h(b("chat-image",d([["className","avatar"],(o=[a.createElement("div",h(d([["className","w-10 rounded-full"],(u=[a.createElement("img",{src:"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"})],["children",m.Children.toArray(Array.from(u))])])))],["children",m.Children.toArray(Array.from(o))])])))),a.createElement("div",{className:"chat-bubble",children:"Is anyone here?"})],["children",m.Children.toArray(Array.from(i))])])))),a.createElement("div",h(b("chat",d([["className","chat-start"],(p=[a.createElement("div",h(b("chat-image",d([["className","avatar"],(y=[a.createElement("div",h(d([["className","w-10 rounded-full"],(E=[a.createElement("img",{src:"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"})],["children",m.Children.toArray(Array.from(E))])])))],["children",m.Children.toArray(Array.from(y))])])))),a.createElement("div",{className:"chat-bubble",children:"Helloooooo!"})],["children",m.Children.toArray(Array.from(p))])]))))]),a.createElement("div",{children:m.Children.toArray(Array.from(r))})))})(),pv=(()=>{let r,i,o,u,p,y,E,w,D;return H("With images",`Html.div [
    Daisy.chat [
        chat.start
        prop.children [
            Daisy.chatImage [
                avatar.className
                prop.children [
                    Html.div [
                        prop.className "w-10 rounded-full"
                        prop.children [ Html.img [ prop.src "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" ] ]
                    ]
                ]
            ]
            Daisy.chatHeader [
                Html.text "Vincent Noir "
                Html.time [ prop.className "text-xs opacity-50"; prop.text "2 hours ago" ]
            ]
            Daisy.chatBubble "Wind. My only friend!"
            Daisy.chatFooter [
                prop.className "opacity-50"
                prop.text "Delivered"
            ]
        ]
    ]
    Daisy.chat [
        chat.end'
        prop.children [
            Daisy.chatImage [
                avatar.className
                prop.children [
                    Html.div [
                        prop.className "w-10 rounded-full"
                        prop.children [ Html.img [ prop.src "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" ] ]
                    ]
                ]
            ]
            Daisy.chatHeader [
                Html.text "Wind "
                Html.time [ prop.className "text-xs opacity-50"; prop.text "2 hours ago" ]
            ]
            Daisy.chatBubble "I HATE YOU!"
            Daisy.chatFooter [
                prop.className "opacity-50"
                prop.text "Delivered"
            ]
        ]
    ]
]`,(r=d([a.createElement("div",h(b("chat",d([["className","chat-start"],(i=[a.createElement("div",h(b("chat-image",d([["className","avatar"],(o=[a.createElement("div",h(d([["className","w-10 rounded-full"],(u=[a.createElement("img",{src:"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"})],["children",m.Children.toArray(Array.from(u))])])))],["children",m.Children.toArray(Array.from(o))])])))),(p=d(["Vincent Noir ",a.createElement("time",{className:"text-xs opacity-50",children:"2 hours ago"})]),a.createElement("div",{className:"chat-header",children:m.Children.toArray(Array.from(p))})),a.createElement("div",{className:"chat-bubble",children:"Wind. My only friend!"}),a.createElement("div",h(b("chat-footer",d([["className","opacity-50"],["children","Delivered"]]))))],["children",m.Children.toArray(Array.from(i))])])))),a.createElement("div",h(b("chat",d([["className","chat-end"],(y=[a.createElement("div",h(b("chat-image",d([["className","avatar"],(E=[a.createElement("div",h(d([["className","w-10 rounded-full"],(w=[a.createElement("img",{src:"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"})],["children",m.Children.toArray(Array.from(w))])])))],["children",m.Children.toArray(Array.from(E))])])))),(D=d(["Wind ",a.createElement("time",{className:"text-xs opacity-50",children:"2 hours ago"})]),a.createElement("div",{className:"chat-header",children:m.Children.toArray(Array.from(D))})),a.createElement("div",{className:"chat-bubble",children:"I HATE YOU!"}),a.createElement("div",h(b("chat-footer",d([["className","opacity-50"],["children","Delivered"]]))))],["children",m.Children.toArray(Array.from(y))])]))))]),a.createElement("div",{children:m.Children.toArray(Array.from(r))})))})(),yv=(()=>{let r;return H("With colors",`let colors = [
    "primary", chatBubble.primary
    "secondary", chatBubble.secondary
    "accent", chatBubble.accent
    "info", chatBubble.info
    "success", chatBubble.success
    "warning", chatBubble.warning
    "error", chatBubble.error
]
Html.div [
    for (n,c) in colors do
        Daisy.chat [
            chat.start
            prop.children [
                Daisy.chatBubble [
                    c
                    prop.text $"This is {n} color"
                ]
            ]
        ]
]`,(r=we(ee(()=>Xe(o=>{let u;return ue(a.createElement("div",h(b("chat",d([["className","chat-start"],(u=[a.createElement("div",h(b("chat-bubble",d([o[1],["children",`This is ${o[0]} color`]]))))],["children",m.Children.toArray(Array.from(u))])])))))},[["primary",["className","chat-bubble-primary"]],["secondary",["className","chat-bubble-secondary"]],["accent",["className","chat-bubble-accent"]],["info",["className","chat-bubble-info"]],["success",["className","chat-bubble-success"]],["warning",["className","chat-bubble-warning"]],["error",["className","chat-bubble-error"]]]))),a.createElement("div",{children:m.Children.toArray(Array.from(r))})))})();function bv(){return a.createElement(a.Fragment,{},fv,hv,pv,yv)}const gv=(()=>{let r,i,o;return H("Basic",`Daisy.collapse [
    prop.tabIndex 0
    prop.children [
        Daisy.collapseTitle "I open with focus"
        Daisy.collapseContent [Html.p "Collapse content reveals with focus. If you add a checkbox, you can control it using checkbox instead of focus. Or you can force-open/force-close using collapse-open and collapse-close classes. Adding a tabIndex will allow focus."]
    ]
]`,a.createElement("div",{children:[a.createElement("div",h(b("collapse",d([["tabIndex",0],(r=[a.createElement("div",{className:"collapse-title",children:"I open with focus"}),(i=v((o="Collapse content reveals with focus. If you add a checkbox, you can control it using checkbox instead of focus. Or you can force-open/force-close using collapse-open and collapse-close classes. Adding a tabIndex will allow focus.",a.createElement("p",{children:[o]}))),a.createElement("div",{className:"collapse-content",children:m.Children.toArray(Array.from(i))}))],["children",m.Children.toArray(Array.from(r))])]))))]}))})(),vv=(()=>{let r,i,o;return H("Arrow",`Daisy.collapse [
    prop.tabIndex 0
    collapse.arrow
    prop.className "border"
    prop.children [
        Daisy.collapseTitle "I open with focus"
        Daisy.collapseContent [Html.p "Collapse content reveals with focus. If you add a checkbox, you can control it using checkbox instead of focus. Or you can force-open/force-close using collapse-open and collapse-close classes. Adding a tabIndex will allow focus."]
    ]
]`,a.createElement("div",{children:[a.createElement("div",h(b("collapse",d([["tabIndex",0],["className","collapse-arrow"],["className","border"],(r=[a.createElement("div",{className:"collapse-title",children:"I open with focus"}),(i=v((o="Collapse content reveals with focus. If you add a checkbox, you can control it using checkbox instead of focus. Or you can force-open/force-close using collapse-open and collapse-close classes. Adding a tabIndex will allow focus.",a.createElement("p",{children:[o]}))),a.createElement("div",{className:"collapse-content",children:m.Children.toArray(Array.from(i))}))],["children",m.Children.toArray(Array.from(r))])]))))]}))})(),Ev=(()=>{let r,i,o;return H("With checkbox",`Daisy.collapse [
    collapse.arrow
    prop.className "border"
    prop.children [
        Html.input [prop.type' "checkbox"]
        Daisy.collapseTitle "I open with a checkbox"
        Daisy.collapseContent [Html.p "Collapse content reveals with focus. If you add a checkbox, you can control it using checkbox instead of focus. Or you can force-open/force-close using collapse-open and collapse-close classes."]
    ]
]`,a.createElement("div",{children:[a.createElement("div",h(b("collapse",d([["className","collapse-plus"],["className","border"],(r=[a.createElement("input",{type:"checkbox"}),a.createElement("div",{className:"collapse-title",children:"I open with a checkbox"}),(i=v((o="Collapse content reveals with focus. If you add a checkbox, you can control it using checkbox instead of focus. Or you can force-open/force-close using collapse-open and collapse-close classes.",a.createElement("p",{children:[o]}))),a.createElement("div",{className:"collapse-content",children:m.Children.toArray(Array.from(i))}))],["children",m.Children.toArray(Array.from(r))])]))))]}))})();function Av(){return a.createElement(a.Fragment,{},gv,vv,Ev)}let rh=class extends ac{constructor(i){super(),this.tag=0,this.fields=[i]}cases(){return["CountdownChange"]}},Rh=class extends Hr{constructor(i){super(),this.Countdown=i|0}};function Nv(){return[new Rh(60),cc()]}function Sv(r,i){return[new Rh(r.fields[0]),cc()]}function xv(r,i){let o,u;return H("Basic",`Html.div [
    Daisy.countdown [Daisy.countdownValue state.Countdown]

    Daisy.button.button [
        button.xs
        button.primary
        prop.onClick (fun _ -> CountdownChange(state.Countdown + 1) |> dispatch)
        prop.text "⬆️ Up"
    ]

    Daisy.button.button [
        button.xs
        button.secondary
        prop.onClick (fun _ -> CountdownChange(state.Countdown - 1) |> dispatch)
        prop.text "⬇️ Down"
    ]
]`,(o=d([(u=v(a.createElement("span",{style:{"--value":r.Countdown}})),a.createElement("span",{className:"countdown",children:m.Children.toArray(Array.from(u))})),a.createElement("button",h(b("btn",d([["className","btn-xs"],["className","btn-primary"],["onClick",y=>{i(new rh(r.Countdown+1))}],["children","⬆️ Up"]])))),a.createElement("button",h(b("btn",d([["className","btn-xs"],["className","btn-secondary"],["onClick",y=>{i(new rh(r.Countdown-1))}],["children","⬇️ Down"]]))))]),a.createElement("div",{children:m.Children.toArray(Array.from(o))})))}function Cv(){const r=Oh(()=>Mh(Nv,Sv,(o,u)=>{}),void 0,[]),i=[xv(r[0],r[1])];return a.createElement(a.Fragment,{},...i)}const Dv=(()=>{let r,i,o;return H("Diff component shows a side-by-side comparison of two items.",`Daisy.diff [
    prop.className "aspect-[16/9]"
    prop.children [
        Daisy.diffItem1 [
            Html.img [ prop.src "https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp" ]
        ]
        Daisy.diffItem2 [
            Html.img [ prop.src "https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp" ]
        ]
        Daisy.diffResizer []
    ]
]`,a.createElement("div",h(b("diff",d([["className","aspect-[16/9]"],(r=[(i=v(a.createElement("img",{src:"https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp"})),a.createElement("div",{className:"diff-item-1",children:m.Children.toArray(Array.from(i))})),(o=v(a.createElement("img",{src:"https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp"})),a.createElement("div",{className:"diff-item-2",children:m.Children.toArray(Array.from(o))})),a.createElement("div",h(b("diff-resizer",Fe())))],["children",m.Children.toArray(Array.from(r))])])))))})(),wv=(()=>{let r,i,o;return H("Diff text",`Daisy.diff [
    prop.className "aspect-[16/9]"
    prop.children [
        Daisy.diffItem1 [
            Html.div [
                prop.className "bg-primary text-primary-content text-9xl font-black grid place-content-center"
                prop.text "F# rulez!"
            ]
        ]
        Daisy.diffItem2 [
            Html.div [
                prop.className "bg-base-200 text-9xl font-black grid place-content-center"
                prop.text "F# rulez!"
            ]
        ]
        Daisy.diffResizer []
    ]
]`,a.createElement("div",h(b("diff",d([["className","aspect-[16/9]"],(r=[(i=v(a.createElement("div",{className:"bg-primary text-primary-content text-9xl font-black grid place-content-center",children:"F# rulez!"})),a.createElement("div",{className:"diff-item-1",children:m.Children.toArray(Array.from(i))})),(o=v(a.createElement("div",{className:"bg-base-200 text-9xl font-black grid place-content-center",children:"F# rulez!"})),a.createElement("div",{className:"diff-item-2",children:m.Children.toArray(Array.from(o))})),a.createElement("div",h(b("diff-resizer",Fe())))],["children",m.Children.toArray(Array.from(r))])])))))})();function _v(){return a.createElement(a.Fragment,{},Dv,wv)}const Hv=(()=>{let r;return H("Vertical (default)",`Html.div [
    prop.className "flex flex-col w-full"
    prop.children [
        Html.div [
            prop.className "grid h-20 card bg-base-300 rounded-box place-items-center"
            prop.text "content"
        ]
        Daisy.divider "OR"
        Html.div [
            prop.className "grid h-20 card bg-base-300 rounded-box place-items-center"
            prop.text "content"
        ]
    ]
]`,a.createElement("div",h(d([["className","flex flex-col w-full"],(r=[a.createElement("div",{className:"grid h-20 card bg-base-300 rounded-box place-items-center",children:"content"}),a.createElement("div",{className:"divider",children:"OR"}),a.createElement("div",{className:"grid h-20 card bg-base-300 rounded-box place-items-center",children:"content"})],["children",m.Children.toArray(Array.from(r))])]))))})(),Tv=(()=>{let r;return H("Vertical",`Html.div [
    prop.className "flex flex-row w-full"
    prop.children [
        Html.div [
            prop.className "grid flex-grow h-32 card bg-base-300 rounded-box place-items-center"
            prop.text "content"
        ]
        Daisy.divider [
            divider.horizontal
            prop.text "OR"
        ]
        Html.div [
            prop.className "grid flex-grow h-32 card bg-base-300 rounded-box place-items-center"
            prop.text "content"
        ]
    ]
]`,a.createElement("div",{children:[a.createElement("div",h(d([["className","flex flex-row w-full"],(r=[a.createElement("div",{className:"grid flex-grow h-32 card bg-base-300 rounded-box place-items-center",children:"content"}),a.createElement("div",h(b("divider",d([["className","divider-horizontal"],["children","OR"]])))),a.createElement("div",{className:"grid flex-grow h-32 card bg-base-300 rounded-box place-items-center",children:"content"})],["children",m.Children.toArray(Array.from(r))])])))]}))})();function kv(){return a.createElement(a.Fragment,{},Hv,Tv)}const zv=(()=>{let r,i,o,u,p,y,E;return H("Docked navigation bar",`Daisy.dock [
    dock.xl
    prop.children [
        Html.button [
            prop.children [
                Svg.svg [
                    svg.className "size-[1.2em]"
                    svg.viewBox (0, 0, 24, 24)
                    svg.children [
                        Svg.g [
                            svg.fill "currentColor"
                            svg.strokeLineJoin "miter"
                            svg.strokeLineCap "butt"
                            svg.children [
                                Svg.polyline [
                                    svg.points "3 14 9 14 9 17 15 17 15 14 21 14"
                                    svg.strokeMitterLimit 10
                                    svg.strokeWidth 2
                                ]
                                Svg.rect [
                                    svg.x 3
                                    svg.y 3
                                    svg.width 18
                                    svg.height 18
                                    svg.rx 2
                                    svg.ry 2
                                    svg.fill "none"
                                    svg.stroke "currentColor"
                                    svg.strokeLineCap "square"
                                    svg.strokeMitterLimit 10
                                    svg.strokeWidth 2
                                ]
                            ]
                        ]
                    ]
                ]
                Daisy.dockLabel "Inbox"
            ]
        ]
        Html.button [
            dock.active
            prop.children [
                Svg.svg [
                    svg.className "size-[1.2em]"
                    svg.viewBox (0, 0, 24, 24)
                    svg.children [
                        Svg.g [
                            svg.fill "currentColor"
                            svg.strokeLineJoin "miter"
                            svg.strokeLineCap "butt"
                            svg.children [
                                Svg.polyline [
                                    svg.points "3 14 9 14 9 17 15 17 15 14 21 14"
                                    svg.strokeMitterLimit 10
                                    svg.strokeWidth 2
                                ]
                                Svg.rect [
                                    svg.x 3
                                    svg.y 3
                                    svg.width 18
                                    svg.height 18
                                    svg.rx 2
                                    svg.ry 2
                                    svg.fill "none"
                                    svg.stroke "currentColor"
                                    svg.strokeLineCap "square"
                                    svg.strokeMitterLimit 10
                                    svg.strokeWidth 2
                                ]
                            ]
                        ]
                    ]
                ]
                Daisy.dockLabel "Inbox active"
            ]
        ]
    ]
]`,a.createElement("div",h(b("dock",d([["className","dock-xl"],(r=[a.createElement("button",h(v((i=[a.createElement("svg",h(d([["className","size-[1.2em]"],["viewBox","0 0 24 24"],(o=v(a.createElement("g",h(d([["fill","currentColor"],["strokeLinejoin","miter"],["strokeLinecap","butt"],(u=d([a.createElement("polyline",{points:"3 14 9 14 9 17 15 17 15 14 21 14",strokeMiterlimit:10,strokeWidth:2}),a.createElement("rect",{x:3,y:3,width:18,height:18,rx:2,ry:2,fill:"none",stroke:"currentColor",strokeLinecap:"square",strokeMiterlimit:10,strokeWidth:2})]),["children",m.Children.toArray(Array.from(u))])])))),["children",m.Children.toArray(Array.from(o))])]))),a.createElement("span",{className:"dock-label",children:"Inbox"})],["children",m.Children.toArray(Array.from(i))])))),a.createElement("button",h(d([["className","dock-active"],(p=[a.createElement("svg",h(d([["className","size-[1.2em]"],["viewBox","0 0 24 24"],(y=v(a.createElement("g",h(d([["fill","currentColor"],["strokeLinejoin","miter"],["strokeLinecap","butt"],(E=d([a.createElement("polyline",{points:"3 14 9 14 9 17 15 17 15 14 21 14",strokeMiterlimit:10,strokeWidth:2}),a.createElement("rect",{x:3,y:3,width:18,height:18,rx:2,ry:2,fill:"none",stroke:"currentColor",strokeLinecap:"square",strokeMiterlimit:10,strokeWidth:2})]),["children",m.Children.toArray(Array.from(E))])])))),["children",m.Children.toArray(Array.from(y))])]))),a.createElement("span",{className:"dock-label",children:"Inbox active"})],["children",m.Children.toArray(Array.from(p))])])))],["children",m.Children.toArray(Array.from(r))])])))))})();function Mv(){return a.createElement(a.Fragment,{},zv)}const Ov=(()=>{let r,i,o,u;return H("Simple",`Daisy.drawer [
    prop.className "rounded-lg shadow bg-base-200 h-52"
    prop.children [
        Daisy.drawerToggle [prop.id "my-drawer"]
        Daisy.drawerContent [
            prop.className "flex flex-col items-center justify-center"
            prop.children [
                Daisy.label [
                    button.primary
                    prop.htmlFor "my-drawer"
                    prop.text "Open Menu"
                ]
            ]
        ]
        Daisy.drawerSide [
            prop.className "absolute h-full"
            prop.children [
                Daisy.drawerOverlay [prop.htmlFor "my-drawer"]
                Daisy.menu [
                    prop.className "p-4 h-full overflow-y-auto w-80 bg-base-100 text-base-content"
                    prop.children [
                        Html.li "Menu item 1"
                        Html.li "Menu item 2"
                    ]
                ]
            ]
        ]
    ]
]`,a.createElement("div",h(b("drawer",d([["className","rounded-lg shadow bg-base-200 h-52"],(r=[a.createElement("input",h(b("drawer-toggle",d([["type","checkbox"],["id","my-drawer"]])))),a.createElement("div",h(b("drawer-content",d([["className","flex flex-col items-center justify-center"],(i=[a.createElement("span",h(b("label",d([["className","btn-primary"],["htmlFor","my-drawer"],["children","Open Menu"]]))))],["children",m.Children.toArray(Array.from(i))])])))),a.createElement("div",h(b("drawer-side",d([["className","absolute h-full"],(o=[a.createElement("label",h(b("drawer-overlay",v(["htmlFor","my-drawer"])))),a.createElement("ul",h(b("menu",d([["className","p-4 h-full overflow-y-auto w-80 bg-base-100 text-base-content"],(u=[a.createElement("li",{children:["Menu item 1"]}),a.createElement("li",{children:["Menu item 2"]})],["children",m.Children.toArray(Array.from(u))])]))))],["children",m.Children.toArray(Array.from(o))])]))))],["children",m.Children.toArray(Array.from(r))])])))))})();function Rv(){return a.createElement(a.Fragment,{},Ov)}const Uv=(()=>{let r,i,o,u,p;return H("Simple",`Daisy.dropdown [
    Daisy.button.button [
        button.primary
        prop.text "Dropdown"
    ]
    Daisy.dropdownContent [
        prop.className "p-2 shadow menu bg-base-100 rounded-box w-52"
        prop.tabIndex 0
        prop.children [
            Html.li [Html.a [prop.text "Item 1"]]
            Html.li [Html.a [prop.text "Item 2"]]
            Html.li [Html.a [prop.text "Item 3"]]
        ]
    ]
]
`,(r=d([a.createElement("button",h(b("btn",d([["className","btn-primary"],["children","Dropdown"]])))),a.createElement("ul",h(b("dropdown-content",d([["className","p-2 shadow menu bg-base-100 rounded-box w-52"],["tabIndex",0],(i=[(o=v(a.createElement("a",{children:"Item 1"})),a.createElement("li",{children:m.Children.toArray(Array.from(o))})),(u=v(a.createElement("a",{children:"Item 2"})),a.createElement("li",{children:m.Children.toArray(Array.from(u))})),(p=v(a.createElement("a",{children:"Item 3"})),a.createElement("li",{children:m.Children.toArray(Array.from(p))}))],["children",m.Children.toArray(Array.from(i))])]))))]),a.createElement("div",{className:"dropdown",children:m.Children.toArray(Array.from(r))})))})(),Bv=(()=>{let r,i,o,u,p;return H("Hover",`Daisy.dropdown [
    dropdown.hover
    prop.children [
        Daisy.button.button [
            button.primary
            prop.text "Hover"
        ]
        Daisy.dropdownContent [
            prop.className "p-2 shadow menu bg-base-100 rounded-box w-52"
            prop.tabIndex 0
            prop.children [
                Html.li [Html.a [prop.text "Item 1"]]
                Html.li [Html.a [prop.text "Item 2"]]
                Html.li [Html.a [prop.text "Item 3"]]
            ]
        ]
    ]
]
`,a.createElement("div",{children:[a.createElement("div",h(b("dropdown",d([["className","dropdown-hover"],(r=[a.createElement("button",h(b("btn",d([["className","btn-primary"],["children","Hover"]])))),a.createElement("ul",h(b("dropdown-content",d([["className","p-2 shadow menu bg-base-100 rounded-box w-52"],["tabIndex",0],(i=[(o=v(a.createElement("a",{children:"Item 1"})),a.createElement("li",{children:m.Children.toArray(Array.from(o))})),(u=v(a.createElement("a",{children:"Item 2"})),a.createElement("li",{children:m.Children.toArray(Array.from(u))})),(p=v(a.createElement("a",{children:"Item 3"})),a.createElement("li",{children:m.Children.toArray(Array.from(p))}))],["children",m.Children.toArray(Array.from(i))])]))))],["children",m.Children.toArray(Array.from(r))])]))))]}))})(),qv=(()=>{let r,i,o,u,p;return H("Opened",`Daisy.dropdown [
    dropdown.open'
    prop.children [
        Daisy.button.button [
            button.primary
            prop.text "Opened"
        ]
        Daisy.dropdownContent [
            prop.className "p-2 shadow menu bg-base-100 rounded-box w-52"
            prop.tabIndex 0
            prop.children [
                Html.li [Html.a [prop.text "Item 1"]]
                Html.li [Html.a [prop.text "Item 2"]]
                Html.li [Html.a [prop.text "Item 3"]]
            ]
        ]
    ]
]
`,a.createElement("div",h(b("dropdown",d([["className","dropdown-open"],(r=[a.createElement("button",h(b("btn",d([["className","btn-primary"],["children","Opened"]])))),a.createElement("ul",h(b("dropdown-content",d([["className","p-2 shadow menu bg-base-100 rounded-box w-52"],["tabIndex",0],(i=[(o=v(a.createElement("a",{children:"Item 1"})),a.createElement("li",{children:m.Children.toArray(Array.from(o))})),(u=v(a.createElement("a",{children:"Item 2"})),a.createElement("li",{children:m.Children.toArray(Array.from(u))})),(p=v(a.createElement("a",{children:"Item 3"})),a.createElement("li",{children:m.Children.toArray(Array.from(p))}))],["children",m.Children.toArray(Array.from(i))])]))))],["children",m.Children.toArray(Array.from(r))])])))))})(),Lv=(()=>{let r;return H("Directions",`let dirs = [
    dropdown.left , "left" , button.primary
    dropdown.end' , "end"  , button.secondary
    dropdown.top  , "top"  , button.accent
    dropdown.right, "right", button.success
]

Html.div [
    for dir, dirText, buttonColor in dirs do
        Daisy.dropdown [
            dir
            prop.children [
                Daisy.button.button [
                    buttonColor
                    prop.text dirText
                ]
                Daisy.dropdownContent [
                    prop.className "p-2 shadow menu bg-base-100 rounded-box w-52"
                    prop.tabIndex 0
                    prop.children [
                        Html.li [Html.a [prop.text "Item 1"]]
                        Html.li [Html.a [prop.text "Item 2"]]
                        Html.li [Html.a [prop.text "Item 3"]]
                    ]
                ]
            ]
        ]
]`,(r=we(ee(()=>Xe(o=>{let u,p,y,E,w;return ue(a.createElement("div",h(b("dropdown",d([o[0],(u=[a.createElement("button",h(b("btn",d([o[2],["children",o[1]]])))),a.createElement("ul",h(b("dropdown-content",d([["className","p-2 shadow menu bg-base-100 rounded-box w-52"],["tabIndex",0],(p=[(y=v(a.createElement("a",{children:"Item 1"})),a.createElement("li",{children:m.Children.toArray(Array.from(y))})),(E=v(a.createElement("a",{children:"Item 2"})),a.createElement("li",{children:m.Children.toArray(Array.from(E))})),(w=v(a.createElement("a",{children:"Item 3"})),a.createElement("li",{children:m.Children.toArray(Array.from(w))}))],["children",m.Children.toArray(Array.from(p))])]))))],["children",m.Children.toArray(Array.from(u))])])))))},[[["className","dropdown-left"],"left",["className","btn-primary"]],[["className","dropdown-end"],"end",["className","btn-secondary"]],[["className","dropdown-top"],"top",["className","btn-accent"]],[["className","dropdown-right"],"right",["className","btn-success"]]]))),a.createElement("div",{children:m.Children.toArray(Array.from(r))})))})();function Gv(){return a.createElement(a.Fragment,{},Uv,Bv,qv,Lv)}const Vv=(()=>{let r;return H("With label and legend",`Daisy.fieldset [
    prop.className "bg-base-200 border border-base-300 rounded-box p-4"

    prop.children [
        Daisy.fieldsetLegend "Page title"
        Daisy.input [ prop.placeholder "My awesome page" ]
        Daisy.fieldsetLabel "You can edit page title later on from settings"
    ]
]`,a.createElement("div",{children:[a.createElement("fieldset",h(b("fieldset",d([["className","bg-base-200 border border-base-300 rounded-box p-4"],(r=[a.createElement("legend",{className:"fieldset-legend",children:"Page title"}),a.createElement("input",h(b("input",d([["type","text"],["placeholder","My awesome page"]])))),a.createElement("label",{className:"fieldset-label",children:"You can edit page title later on from settings"})],["children",m.Children.toArray(Array.from(r))])]))))]}))})(),jv=(()=>{let r;return H("Multiple inputs",`Daisy.fieldset [
    prop.className "bg-base-200 border border-base-300 rounded-box p-4"

    prop.children [
        Daisy.fieldsetLegend "Page details"
        Daisy.fieldsetLabel "Title"
        Daisy.input [ prop.placeholder "My awesome page" ]
        Daisy.fieldsetLabel "Slug"
        Daisy.input [ prop.placeholder "my-awesome-page" ]
        Daisy.fieldsetLabel "Author"
        Daisy.input [ prop.placeholder "Name" ]
    ]
]`,a.createElement("div",{children:[a.createElement("fieldset",h(b("fieldset",d([["className","bg-base-200 border border-base-300 rounded-box p-4"],(r=[a.createElement("legend",{className:"fieldset-legend",children:"Page details"}),a.createElement("label",{className:"fieldset-label",children:"Title"}),a.createElement("input",h(b("input",d([["type","text"],["placeholder","My awesome page"]])))),a.createElement("label",{className:"fieldset-label",children:"Slug"}),a.createElement("input",h(b("input",d([["type","text"],["placeholder","my-awesome-page"]])))),a.createElement("label",{className:"fieldset-label",children:"Author"}),a.createElement("input",h(b("input",d([["type","text"],["placeholder","Name"]]))))],["children",m.Children.toArray(Array.from(r))])]))))]}))})(),Yv=(()=>{let r,i;return H("With joined items",`Daisy.fieldset [
    prop.className "bg-base-200 border border-base-300 rounded-box p-4"

    prop.children [
        Daisy.fieldsetLegend "Settings"
        Daisy.join [
            Daisy.input [
                join.item
                prop.text "Product name"
            ]
            Daisy.button.button [
                join.item
                prop.text "Save"
            ]
        ]
    ]
]`,a.createElement("div",{children:[a.createElement("fieldset",h(b("fieldset",d([["className","bg-base-200 border border-base-300 rounded-box p-4"],(r=[a.createElement("legend",{className:"fieldset-legend",children:"Settings"}),(i=d([a.createElement("input",h(b("input",d([["type","text"],["className","join-item"],["placeholder","Product name"]])))),a.createElement("button",h(b("btn",d([["className","join-item"],["children","Save"]]))))]),a.createElement("div",{className:"join",children:m.Children.toArray(Array.from(i))}))],["children",m.Children.toArray(Array.from(r))])]))))]}))})();function Qv(){return a.createElement(a.Fragment,{},Vv,jv,Yv)}const Xv=(()=>{let r;return H("As form",`Daisy.filter.form [
    Daisy.button.value [ prop.text "x" ]
    Daisy.button.radio [ prop.name "frameworks"; prop.ariaLabel "Svelte" ]
    Daisy.button.radio [ prop.name "frameworks"; prop.ariaLabel "Vue" ]
    Daisy.button.radio [ prop.name "frameworks"; prop.ariaLabel "React" ]
]`,(r=d([a.createElement("input",h(b("btn",d([["type","reset"],["value","x"]])))),a.createElement("input",h(b("btn",d([["type","radio"],["name","frameworks"],["aria-label","Svelte"]])))),a.createElement("input",h(b("btn",d([["type","radio"],["name","frameworks"],["aria-label","Vue"]])))),a.createElement("input",h(b("btn",d([["type","radio"],["name","frameworks"],["aria-label","React"]]))))]),a.createElement("form",{className:"filter",children:m.Children.toArray(Array.from(r))})))})(),Zv=(()=>{let r;return H("As div",`Daisy.filter.div [
    Daisy.filterReset [ prop.name "frameworks2" ]
    Daisy.button.radio [ prop.name "frameworks2"; prop.ariaLabel "Svelte" ]
    Daisy.button.radio [ prop.name "frameworks2"; prop.ariaLabel "Vue" ]
    Daisy.button.radio [ prop.name "frameworks2"; prop.ariaLabel "React" ]
]`,(r=d([a.createElement("input",h(b("btn filter-reset",d([["type","radio"],["name","frameworks2"]])))),a.createElement("input",h(b("btn",d([["type","radio"],["name","frameworks2"],["aria-label","Svelte"]])))),a.createElement("input",h(b("btn",d([["type","radio"],["name","frameworks2"],["aria-label","Vue"]])))),a.createElement("input",h(b("btn",d([["type","radio"],["name","frameworks2"],["aria-label","React"]]))))]),a.createElement("div",{className:"filter",children:m.Children.toArray(Array.from(r))})))})();function Kv(){return a.createElement(a.Fragment,{},Xv,Zv)}const Fv=(()=>{let r,i,o,u;return H("Simple, horizontal",`Daisy.footer [
    footer.horizontal
    prop.className "p-10 bg-neutral text-neutral-content"
    prop.children [
        Html.div [
            Daisy.footerTitle "Services"
            Daisy.link [link.hover; prop.text "Branding"]
            Daisy.link [link.hover; prop.text "Design"]
            Daisy.link [link.hover; prop.text "Marketing"]
            Daisy.link [link.hover; prop.text "Advertisement"]
        ]
        Html.div [
            Daisy.footerTitle "Company"
            Daisy.link [link.hover; prop.text "About us"]
            Daisy.link [link.hover; prop.text "Contact"]
            Daisy.link [link.hover; prop.text "Jobs"]
            Daisy.link [link.hover; prop.text "Press kit"]
        ]
        Html.div [
            Daisy.footerTitle "Legal"
            Daisy.link [link.hover; prop.text "Legal"]
            Daisy.link [link.hover; prop.text "Terms of use"]
            Daisy.link [link.hover; prop.text "Privacy policy"]
            Daisy.link [link.hover; prop.text "Cookie policy"]
        ]
    ]
]`,a.createElement("div",{children:[a.createElement("footer",h(b("footer",d([["className","footer-horizontal"],["className","p-10 bg-neutral text-neutral-content"],(r=[(i=d([a.createElement("span",{className:"footer-title",children:"Services"}),a.createElement("a",h(b("link",d([["className","link-hover"],["children","Branding"]])))),a.createElement("a",h(b("link",d([["className","link-hover"],["children","Design"]])))),a.createElement("a",h(b("link",d([["className","link-hover"],["children","Marketing"]])))),a.createElement("a",h(b("link",d([["className","link-hover"],["children","Advertisement"]]))))]),a.createElement("div",{children:m.Children.toArray(Array.from(i))})),(o=d([a.createElement("span",{className:"footer-title",children:"Company"}),a.createElement("a",h(b("link",d([["className","link-hover"],["children","About us"]])))),a.createElement("a",h(b("link",d([["className","link-hover"],["children","Contact"]])))),a.createElement("a",h(b("link",d([["className","link-hover"],["children","Jobs"]])))),a.createElement("a",h(b("link",d([["className","link-hover"],["children","Press kit"]]))))]),a.createElement("div",{children:m.Children.toArray(Array.from(o))})),(u=d([a.createElement("span",{className:"footer-title",children:"Legal"}),a.createElement("a",h(b("link",d([["className","link-hover"],["children","Legal"]])))),a.createElement("a",h(b("link",d([["className","link-hover"],["children","Terms of use"]])))),a.createElement("a",h(b("link",d([["className","link-hover"],["children","Privacy policy"]])))),a.createElement("a",h(b("link",d([["className","link-hover"],["children","Cookie policy"]]))))]),a.createElement("div",{children:m.Children.toArray(Array.from(u))}))],["children",m.Children.toArray(Array.from(r))])]))))]}))})();function Jv(){return a.createElement(a.Fragment,{},Fv)}const $v=(()=>{let r,i,o,u;return H("Advanced",`Daisy.hero [
    prop.className "min-h-screen"
    prop.style [style.backgroundImageUrl "https://picsum.photos/id/1005/1600/1400"]
    prop.children [
        Html.div [prop.className "hero-overlay bg-opacity-60"]
        Daisy.heroContent [
            prop.className "text-center text-neutral-content"
            prop.children [
                Html.div [
                    prop.className "max-w-md"
                    prop.children [
                        Html.h1 [prop.className "mb-5 text-5xl font-bold"; prop.text "Hello there"]
                        Html.p "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."
                        Daisy.button.button [button.primary; prop.text "Get Started"]
                    ]
                ]
            ]
        ]
    ]
]`,a.createElement("div",{children:[a.createElement("div",h(b("hero",d([["className","min-h-screen"],["style",{backgroundImage:"url('https://picsum.photos/id/1005/1600/1400')"}],(r=[a.createElement("div",{className:"hero-overlay bg-opacity-60"}),a.createElement("div",h(b("hero-content",d([["className","text-center text-neutral-content"],(i=[a.createElement("div",h(d([["className","max-w-md"],(o=[a.createElement("h1",{className:"mb-5 text-5xl font-bold",children:"Hello there"}),(u="Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.",a.createElement("p",{children:[u]})),a.createElement("button",h(b("btn",d([["className","btn-primary"],["children","Get Started"]]))))],["children",m.Children.toArray(Array.from(o))])])))],["children",m.Children.toArray(Array.from(i))])]))))],["children",m.Children.toArray(Array.from(r))])]))))]}))})();function Wv(){return a.createElement(a.Fragment,{},$v)}const Iv=(()=>{let r;return H("Simple",`Daisy.indicator [
    Daisy.indicatorItem [
        prop.className "badge badge-secondary"
        prop.text "New"
    ]
    Html.div [
        prop.className "grid w-32 h-32 bg-base-300 place-items-center"
        prop.text "Content"
    ]
]`,(r=d([a.createElement("div",h(b("indicator-item",d([["className","badge badge-secondary"],["children","New"]])))),a.createElement("div",{className:"grid w-32 h-32 bg-base-300 place-items-center",children:"Content"})]),a.createElement("div",{className:"indicator",children:m.Children.toArray(Array.from(r))})))})(),Pv=(()=>{let r;return H("Button",`Daisy.indicator [
    Daisy.indicatorItem [prop.text "99+"; prop.className "badge"]
    Daisy.button.button [button.primary; prop.text "Inbox"]
]`,(r=d([a.createElement("div",h(b("indicator-item",d([["children","99+"],["className","badge"]])))),a.createElement("button",h(b("btn",d([["className","btn-primary"],["children","Inbox"]]))))]),a.createElement("div",{className:"indicator",children:m.Children.toArray(Array.from(r))})))})(),eE=(()=>{let r,i;return H("Avatar",`Daisy.indicator [
    prop.className "avatar"
    prop.children [
        Daisy.indicatorItem [prop.text "typing..."; prop.className "badge"]
        Html.div [
            prop.className "w-24 h-24 rounded-btn"
            prop.children [
                Html.img [prop.src "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"]
            ]
        ]
    ]
]`,a.createElement("div",h(b("indicator",d([["className","avatar"],(r=[a.createElement("div",h(b("indicator-item",d([["children","typing..."],["className","badge"]])))),a.createElement("div",h(d([["className","w-24 h-24 rounded-btn"],(i=[a.createElement("img",{src:"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"})],["children",m.Children.toArray(Array.from(i))])])))],["children",m.Children.toArray(Array.from(r))])])))))})(),tE=(()=>{let r;return H("All Positions",`Daisy.indicator [
    prop.className "m-6"
    prop.children [
        Daisy.indicatorItem [indicator.top;    indicator.start ; badge.secondary; prop.className "badge"; prop.text "1"]
        Daisy.indicatorItem [indicator.top;    indicator.center; badge.secondary; prop.className "badge"; prop.text "2"]
        Daisy.indicatorItem [indicator.top;    indicator.end'  ; badge.secondary; prop.className "badge"; prop.text "3"]
        Daisy.indicatorItem [indicator.middle; indicator.start ; badge.secondary; prop.className "badge"; prop.text "4"]
        Daisy.indicatorItem [indicator.middle; indicator.center; badge.secondary; prop.className "badge"; prop.text "5"]
        Daisy.indicatorItem [indicator.middle; indicator.end'  ; badge.secondary; prop.className "badge"; prop.text "6"]
        Daisy.indicatorItem [indicator.bottom; indicator.start ; badge.secondary; prop.className "badge"; prop.text "7"]
        Daisy.indicatorItem [indicator.bottom; indicator.center; badge.secondary; prop.className "badge"; prop.text "8"]
        Daisy.indicatorItem [indicator.bottom; indicator.end'  ; badge.secondary; prop.className "badge"; prop.text "9"]
        Html.div [prop.className "grid w-32 h-32 bg-base-300 place-items-center"]
    ]
]`,a.createElement("div",{children:[a.createElement("div",h(b("indicator",d([["className","m-6"],(r=[a.createElement("div",h(b("indicator-item",d([["className","indicator-top"],["className","indicator-start"],["className","badge-secondary"],["className","badge"],["children","1"]])))),a.createElement("div",h(b("indicator-item",d([["className","indicator-top"],["className","indicator-center"],["className","badge-secondary"],["className","badge"],["children","2"]])))),a.createElement("div",h(b("indicator-item",d([["className","indicator-top"],["className","indicator-end"],["className","badge-secondary"],["className","badge"],["children","3"]])))),a.createElement("div",h(b("indicator-item",d([["className","indicator-middle"],["className","indicator-start"],["className","badge-secondary"],["className","badge"],["children","4"]])))),a.createElement("div",h(b("indicator-item",d([["className","indicator-middle"],["className","indicator-center"],["className","badge-secondary"],["className","badge"],["children","5"]])))),a.createElement("div",h(b("indicator-item",d([["className","indicator-middle"],["className","indicator-end"],["className","badge-secondary"],["className","badge"],["children","6"]])))),a.createElement("div",h(b("indicator-item",d([["className","indicator-bottom"],["className","indicator-start"],["className","badge-secondary"],["className","badge"],["children","7"]])))),a.createElement("div",h(b("indicator-item",d([["className","indicator-bottom"],["className","indicator-center"],["className","badge-secondary"],["className","badge"],["children","8"]])))),a.createElement("div",h(b("indicator-item",d([["className","indicator-bottom"],["className","indicator-end"],["className","badge-secondary"],["className","badge"],["children","9"]])))),a.createElement("div",{className:"grid w-32 h-32 bg-base-300 place-items-center"})],["children",m.Children.toArray(Array.from(r))])]))))]}))})();function nE(){return a.createElement(a.Fragment,{},Iv,Pv,eE,tE)}const lE=(()=>{let r,i;return H("Join is the new ButtonGroup",`Html.div [
    Daisy.join [
        Daisy.button.button [
            button.primary
            join.item // note here
            prop.text "A"
        ]
        Daisy.button.button [
            button.secondary
            join.item // note here
            prop.text "B"
        ]
        Daisy.button.button [
            button.warning
            join.item // note here
            prop.text "C"
        ]
    ]
]`,(r=v((i=d([a.createElement("button",h(b("btn",d([["className","btn-primary"],["className","join-item"],["children","A"]])))),a.createElement("button",h(b("btn",d([["className","btn-secondary"],["className","join-item"],["children","B"]])))),a.createElement("button",h(b("btn",d([["className","btn-warning"],["className","join-item"],["children","C"]]))))]),a.createElement("div",{className:"join",children:m.Children.toArray(Array.from(i))}))),a.createElement("div",{children:m.Children.toArray(Array.from(r))})))})();function aE(){return a.createElement(a.Fragment,{},lE)}const rE=H("Single",'Daisy.kbd "a" ',a.createElement("div",{children:[a.createElement("kbd",{className:"kbd",children:"a"})]})),iE=H("Sizes",`for size in [kbd.lg; kbd.md; kbd.sm; kbd.xs] do
    Daisy.kbd [size; prop.text "shift"]`,(()=>{const r=we(ee(()=>dn(i=>a.createElement("kbd",h(b("kbd",d([i,["children","shift"]])))),[["className","kbd-lg"],["className","kbd-md"],["className","kbd-sm"],["className","kbd-xs"]])));return a.createElement("div",{children:m.Children.toArray(Array.from(r))})})()),cE=H("Key Combination",`Daisy.kbd "ctrl"
Html.span "+"
Daisy.kbd "shift"
Html.span "+"
Daisy.kbd "del" `,(()=>{const r=d([a.createElement("kbd",{className:"kbd",children:"ctrl"}),a.createElement("span",{children:["+"]}),a.createElement("kbd",{className:"kbd",children:"shift"}),a.createElement("span",{children:["+"]}),a.createElement("kbd",{className:"kbd",children:"del"})]);return a.createElement("div",{children:m.Children.toArray(Array.from(r))})})());function sE(){return a.createElement(a.Fragment,{},rE,iE,cE)}const oE=H("Label for input",`Daisy.label.input [
    Daisy.label "https://"
    Html.input [ prop.placeholder "URL" ]
]`,(()=>{const r=d([a.createElement("span",{className:"label",children:"https://"}),a.createElement("input",{placeholder:"URL"})]);return a.createElement("label",{className:"input",children:m.Children.toArray(Array.from(r))})})()),uE=H("Label for input at the end",`Daisy.label.input [
    Html.input [ prop.placeholder "domain name" ]
    Daisy.label ".com"
] `,(()=>{const r=d([a.createElement("input",{placeholder:"domain name"}),a.createElement("span",{className:"label",children:".com"})]);return a.createElement("label",{className:"input",children:m.Children.toArray(Array.from(r))})})()),dE=(()=>{let r,i;return H("Label for select",`Daisy.label.select [
    Daisy.label "Type"
    Html.select [
        Html.option "Personal"
        Html.option "Business"
    ]
]`,(r=d([a.createElement("span",{className:"label",children:"Type"}),(i=d([a.createElement("option",{children:["Personal"]}),a.createElement("option",{children:["Business"]})]),a.createElement("select",{children:m.Children.toArray(Array.from(i))}))]),a.createElement("label",{className:"select",children:m.Children.toArray(Array.from(r))})))})(),mE=(()=>{let r;return H("Floating label",`Daisy.floatingLabel [
    Html.span "Your email"
    Daisy.input [ prop.placeholder "mail@site.com" ]
]`,(r=d([a.createElement("span",{children:["Your email"]}),a.createElement("input",h(b("input",d([["type","text"],["placeholder","mail@site.com"]]))))]),a.createElement("label",{className:"floating-label",children:m.Children.toArray(Array.from(r))})))})(),fE=(()=>{let r,i,o,u,p,y;return H("Floating label with different sizes",`Html.div [
    prop.className "flex flex-col gap-4"

    prop.children [
        Daisy.floatingLabel [
            Daisy.input [ input.xs; prop.placeholder "xs" ]
            Html.span "xs"
        ]
        Daisy.floatingLabel [
            Daisy.input [ input.sm; prop.placeholder "sm" ]
            Html.span "sm"
        ]
        Daisy.floatingLabel [
            Daisy.input [ input.md; prop.placeholder "md" ]
            Html.span "md"
        ]
        Daisy.floatingLabel [
            Daisy.input [ input.lg; prop.placeholder "lg" ]
            Html.span "xl"
        ]
        Daisy.floatingLabel [
            Daisy.input [ input.xl; prop.placeholder "xl" ]
            Html.span "xl"
        ]
    ]
]`,a.createElement("div",{children:[a.createElement("div",h(d([["className","flex flex-col gap-4"],(r=[(i=d([a.createElement("input",h(b("input",d([["type","text"],["className","input-xs"],["placeholder","xs"]])))),a.createElement("span",{children:["xs"]})]),a.createElement("label",{className:"floating-label",children:m.Children.toArray(Array.from(i))})),(o=d([a.createElement("input",h(b("input",d([["type","text"],["className","input-sm"],["placeholder","sm"]])))),a.createElement("span",{children:["sm"]})]),a.createElement("label",{className:"floating-label",children:m.Children.toArray(Array.from(o))})),(u=d([a.createElement("input",h(b("input",d([["type","text"],["className","input-md"],["placeholder","md"]])))),a.createElement("span",{children:["md"]})]),a.createElement("label",{className:"floating-label",children:m.Children.toArray(Array.from(u))})),(p=d([a.createElement("input",h(b("input",d([["type","text"],["className","input-lg"],["placeholder","lg"]])))),a.createElement("span",{children:["lg"]})]),a.createElement("label",{className:"floating-label",children:m.Children.toArray(Array.from(p))})),(y=d([a.createElement("input",h(b("input",d([["type","text"],["className","input-xl"],["placeholder","xl"]])))),a.createElement("span",{children:["xl"]})]),a.createElement("label",{className:"floating-label",children:m.Children.toArray(Array.from(y))}))],["children",m.Children.toArray(Array.from(r))])])))]}))})();function hE(){return a.createElement(a.Fragment,{},oE,uE,dE,mE,fE)}const pE=H("Basic",'Daisy.link "This is a link" ',a.createElement("div",{children:[a.createElement("a",{className:"link",children:"This is a link"})]})),yE=H("Color",`Daisy.link [
    link.secondary
    prop.text "This is a link"
]`,a.createElement("div",{children:[a.createElement("a",h(b("link",d([["className","link-secondary"],["children","This is a link with color"]]))))]})),bE=H("Hover",`Daisy.link [
    link.hover
    link.accent
    prop.text "This is a link"
]
`,a.createElement("div",{children:[a.createElement("a",h(b("link",d([["className","link-hover"],["className","link-accent"],["children","This is a link color and hover"]]))))]})),gE=(()=>{let r;return H("Colors",`Html.ol [
    let colors =
        [ link.primary  , "primary"
          link.secondary, "secondary"
          link.accent   , "accent"
          link.neutral  , "neutral" ]

    for color, text in colors do
        Html.li [Daisy.link [color; prop.text text]]
]`,a.createElement("div",{children:[(r=we(ee(()=>Xe(o=>{let u;return ue((u=v(a.createElement("a",h(b("link",d([o[0],["children",o[1]]]))))),a.createElement("li",{children:m.Children.toArray(Array.from(u))})))},[[["className","link-primary"],"primary"],[["className","link-secondary"],"secondary"],[["className","link-accent"],"accent"],[["className","link-neutral"],"neutral"]]))),a.createElement("ol",{children:m.Children.toArray(Array.from(r))}))]}))})();function vE(){return a.createElement(a.Fragment,{},pE,yE,bE,gE)}const EE=(()=>{let r,i,o,u,p,y,E,w,D,N,z,M,q,B,Q,Z,W,ge,ce;return H("List (third column grows)",`Daisy.list [
    prop.className "bg-base-100 rounded-box shadow-md"

    prop.children [
        Html.li [
            prop.className "p-4 pb-2 text-xs opacity-60 tracking-wide"
            prop.text "Most played songs this week"
        ]

        Daisy.listRow [
            Html.div [
                prop.className "text-4xl font-thin opacity-30 tabular-nums"
                prop.text "01"
            ]
            Html.div [
                Html.img [
                    prop.className "size-10 rounded-box"
                    prop.src "https://img.daisyui.com/images/profile/demo/1@94.webp"
                ]
            ]
            Html.div [
                list.colGrow

                prop.children [
                    Html.div "Dio Lupa"
                    Html.div [
                        prop.className "text-xs uppercase font-semibold opacity-60"
                        prop.text "Remaining Reason"
                    ]
                ]
            ]
            Daisy.button.button [
                button.ghost
                button.square

                prop.children [
                    Svg.svg [
                        svg.className "size-[1.2em]"
                        svg.viewBox (0, 0, 24, 24)

                        svg.children [
                            Svg.g [
                                svg.strokeLineJoin "round"
                                svg.strokeLineCap "round"
                                svg.strokeWidth 2
                                svg.fill "none"
                                svg.stroke "currentColor"

                                svg.children [
                                    Svg.path [ svg.d "M6 3L20 12 6 21 6 3z" ]
                                ]
                            ]
                        ]
                    ]
                ]
            ]                    
        ]

        Daisy.listRow [
            Html.div [
                prop.className "text-4xl font-thin opacity-30 tabular-nums"
                prop.text "02"
            ]
            Html.div [
                Html.img [
                    prop.className "size-10 rounded-box"
                    prop.src "https://img.daisyui.com/images/profile/demo/4@94.webp"
                ]
            ]
            Html.div [
                list.colGrow

                prop.children [
                    Html.div "Ellie Beilish"
                    Html.div [
                        prop.className "text-xs uppercase font-semibold opacity-60"
                        prop.text "Bears of a fever"
                    ]
                ]
            ]
            Daisy.button.button [
                button.ghost
                button.square

                prop.children [
                    Svg.svg [
                        svg.className "size-[1.2em]"
                        svg.viewBox (0, 0, 24, 24)

                        svg.children [
                            Svg.g [
                                svg.strokeLineJoin "round"
                                svg.strokeLineCap "round"
                                svg.strokeWidth 2
                                svg.fill "none"
                                svg.stroke "currentColor"

                                svg.children [
                                    Svg.path [ svg.d "M6 3L20 12 6 21 6 3z" ]
                                ]
                            ]
                        ]
                    ]
                ]
            ]                    
        ]

        Daisy.listRow [
            Html.div [
                prop.className "text-4xl font-thin opacity-30 tabular-nums"
                prop.text "03"
            ]
            Html.div [
                Html.img [
                    prop.className "size-10 rounded-box"
                    prop.src "https://img.daisyui.com/images/profile/demo/3@94.webp"
                ]
            ]
            Html.div [
                list.colGrow

                prop.children [
                    Html.div "Sabrino Gardener"
                    Html.div [
                        prop.className "text-xs uppercase font-semibold opacity-60"
                        prop.text "Cappuccino"
                    ]
                ]
            ]
            Daisy.button.button [
                button.ghost
                button.square

                prop.children [
                    Svg.svg [
                        svg.className "size-[1.2em]"
                        svg.viewBox (0, 0, 24, 24)

                        svg.children [
                            Svg.g [
                                svg.strokeLineJoin "round"
                                svg.strokeLineCap "round"
                                svg.strokeWidth 2
                                svg.fill "none"
                                svg.stroke "currentColor"

                                svg.children [
                                    Svg.path [ svg.d "M6 3L20 12 6 21 6 3z" ]
                                ]
                            ]
                        ]
                    ]
                ]
            ]                    
        ]
    ]
]`,a.createElement("div",{children:[a.createElement("ul",h(b("list",d([["className","bg-base-100 rounded-box shadow-md"],(r=[a.createElement("li",{className:"p-4 pb-2 text-xs opacity-60 tracking-wide",children:"Most played songs this week"}),(i=d([a.createElement("div",{className:"text-4xl font-thin opacity-30 tabular-nums",children:"01"}),(o=v(a.createElement("img",{className:"size-10 rounded-box",src:"https://img.daisyui.com/images/profile/demo/1@94.webp"})),a.createElement("div",{children:m.Children.toArray(Array.from(o))})),a.createElement("div",h(d([["className","list-col-grow"],(u=[a.createElement("div",{children:["Dio Lupa"]}),a.createElement("div",{className:"text-xs uppercase font-semibold opacity-60",children:"Remaining Reason"})],["children",m.Children.toArray(Array.from(u))])]))),a.createElement("button",h(b("btn",d([["className","btn-ghost"],["className","btn-square"],(p=[a.createElement("svg",h(d([["className","size-[1.2em]"],["viewBox","0 0 24 24"],(y=v(a.createElement("g",h(d([["strokeLinejoin","round"],["strokeLinecap","round"],["strokeWidth",2],["fill","none"],["stroke","currentColor"],(E=v(a.createElement("path",{d:"M6 3L20 12 6 21 6 3z"})),["children",m.Children.toArray(Array.from(E))])])))),["children",m.Children.toArray(Array.from(y))])])))],["children",m.Children.toArray(Array.from(p))])]))))]),a.createElement("li",{className:"list-row",children:m.Children.toArray(Array.from(i))})),(w=d([a.createElement("div",{className:"text-4xl font-thin opacity-30 tabular-nums",children:"02"}),(D=v(a.createElement("img",{className:"size-10 rounded-box",src:"https://img.daisyui.com/images/profile/demo/4@94.webp"})),a.createElement("div",{children:m.Children.toArray(Array.from(D))})),a.createElement("div",h(d([["className","list-col-grow"],(N=[a.createElement("div",{children:["Ellie Beilish"]}),a.createElement("div",{className:"text-xs uppercase font-semibold opacity-60",children:"Bears of a fever"})],["children",m.Children.toArray(Array.from(N))])]))),a.createElement("button",h(b("btn",d([["className","btn-ghost"],["className","btn-square"],(z=[a.createElement("svg",h(d([["className","size-[1.2em]"],["viewBox","0 0 24 24"],(M=v(a.createElement("g",h(d([["strokeLinejoin","round"],["strokeLinecap","round"],["strokeWidth",2],["fill","none"],["stroke","currentColor"],(q=v(a.createElement("path",{d:"M6 3L20 12 6 21 6 3z"})),["children",m.Children.toArray(Array.from(q))])])))),["children",m.Children.toArray(Array.from(M))])])))],["children",m.Children.toArray(Array.from(z))])]))))]),a.createElement("li",{className:"list-row",children:m.Children.toArray(Array.from(w))})),(B=d([a.createElement("div",{className:"text-4xl font-thin opacity-30 tabular-nums",children:"03"}),(Q=v(a.createElement("img",{className:"size-10 rounded-box",src:"https://img.daisyui.com/images/profile/demo/3@94.webp"})),a.createElement("div",{children:m.Children.toArray(Array.from(Q))})),a.createElement("div",h(d([["className","list-col-grow"],(Z=[a.createElement("div",{children:["Sabrino Gardener"]}),a.createElement("div",{className:"text-xs uppercase font-semibold opacity-60",children:"Cappuccino"})],["children",m.Children.toArray(Array.from(Z))])]))),a.createElement("button",h(b("btn",d([["className","btn-ghost"],["className","btn-square"],(W=[a.createElement("svg",h(d([["className","size-[1.2em]"],["viewBox","0 0 24 24"],(ge=v(a.createElement("g",h(d([["strokeLinejoin","round"],["strokeLinecap","round"],["strokeWidth",2],["fill","none"],["stroke","currentColor"],(ce=v(a.createElement("path",{d:"M6 3L20 12 6 21 6 3z"})),["children",m.Children.toArray(Array.from(ce))])])))),["children",m.Children.toArray(Array.from(ge))])])))],["children",m.Children.toArray(Array.from(W))])]))))]),a.createElement("li",{className:"list-row",children:m.Children.toArray(Array.from(B))}))],["children",m.Children.toArray(Array.from(r))])]))))]}))})(),AE=(()=>{let r,i,o,u,p,y,E,w,D,N,z,M,q,B,Q,Z,W,ge,ce,ze,Be,se;return H("List (third column wraps to next row)",`Daisy.list [
    prop.className "bg-base-100 rounded-box shadow-md"

    prop.children [
        Html.li [
            prop.className "p-4 pb-2 text-xs opacity-60 tracking-wide"
            prop.text "Most played songs this week"
        ]

        Daisy.listRow [
            Html.div [
                Html.img [
                    prop.className "size-10 rounded-box"
                    prop.src "https://img.daisyui.com/images/profile/demo/1@94.webp"
                ]
            ]
            Html.div [
                Html.div "Dio Lupa"
                Html.div [
                    prop.className "text-xs uppercase font-semibold opacity-60"
                    prop.text "Remaining Reason"
                ]
            ]
            Html.p [
                list.colWrap
                prop.text "\\"Remaining Reason\\" became an instant hit, praised for its haunting sound and emotional depth. A viral performance brought it widespread recognition, making it one of Dio Lupa’s most iconic tracks."
            ]
            Daisy.button.button [
                button.ghost
                button.square

                prop.children [
                    Svg.svg [
                        svg.className "size-[1.2em]"
                        svg.viewBox (0, 0, 24, 24)

                        svg.children [
                            Svg.g [
                                svg.strokeLineJoin "round"
                                svg.strokeLineCap "round"
                                svg.strokeWidth 2
                                svg.fill "none"
                                svg.stroke "currentColor"

                                svg.children [
                                    Svg.path [ svg.d "M6 3L20 12 6 21 6 3z" ]
                                ]
                            ]
                        ]
                    ]
                ]
            ]                    
        ]

        Daisy.listRow [
            Html.div [
                Html.img [
                    prop.className "size-10 rounded-box"
                    prop.src "https://img.daisyui.com/images/profile/demo/4@94.webp"
                ]
            ]
            Html.div [
                Html.div "Ellie Beilish"
                Html.div [
                    prop.className "text-xs uppercase font-semibold opacity-60"
                    prop.text "Bears of a fever"
                ]
            ]
            Html.p [
                list.colWrap
                prop.text "\\"Bears of a Fever\\" captivated audiences with its intense energy and mysterious lyrics. Its popularity skyrocketed after fans shared it widely online, earning Ellie critical acclaim."
            ]
            Daisy.button.button [
                button.ghost
                button.square

                prop.children [
                    Svg.svg [
                        svg.className "size-[1.2em]"
                        svg.viewBox (0, 0, 24, 24)

                        svg.children [
                            Svg.g [
                                svg.strokeLineJoin "round"
                                svg.strokeLineCap "round"
                                svg.strokeWidth 2
                                svg.fill "none"
                                svg.stroke "currentColor"

                                svg.children [
                                    Svg.path [ svg.d "M6 3L20 12 6 21 6 3z" ]
                                ]
                            ]
                        ]
                    ]
                ]
            ]                    
        ]

        Daisy.listRow [
            Html.div [
                Html.img [
                    prop.className "size-10 rounded-box"
                    prop.src "https://img.daisyui.com/images/profile/demo/3@94.webp"
                ]
            ]
            Html.div [
                Html.div "Sabrino Gardener"
                Html.div [
                    prop.className "text-xs uppercase font-semibold opacity-60"
                    prop.text "Cappuccino"
                ]
            ]
            Html.p [
                list.colWrap
                prop.text "\\"Cappuccino\\" quickly gained attention for its smooth melody and relatable themes. The song’s success propelled Sabrino into the spotlight, solidifying their status as a rising star."
            ]
            Daisy.button.button [
                button.ghost
                button.square

                prop.children [
                    Svg.svg [
                        svg.className "size-[1.2em]"
                        svg.viewBox (0, 0, 24, 24)

                        svg.children [
                            Svg.g [
                                svg.strokeLineJoin "round"
                                svg.strokeLineCap "round"
                                svg.strokeWidth 2
                                svg.fill "none"
                                svg.stroke "currentColor"

                                svg.children [
                                    Svg.path [ svg.d "M6 3L20 12 6 21 6 3z" ]
                                ]
                            ]
                        ]
                    ]
                ]
            ]                    
        ]
    ]
]`,a.createElement("div",{children:[a.createElement("ul",h(b("list",d([["className","bg-base-100 rounded-box shadow-md"],(r=[a.createElement("li",{className:"p-4 pb-2 text-xs opacity-60 tracking-wide",children:"Most played songs this week"}),(i=d([(o=v(a.createElement("img",{className:"size-10 rounded-box",src:"https://img.daisyui.com/images/profile/demo/1@94.webp"})),a.createElement("div",{children:m.Children.toArray(Array.from(o))})),(u=d([a.createElement("div",{children:["Dio Lupa"]}),a.createElement("div",{className:"text-xs uppercase font-semibold opacity-60",children:"Remaining Reason"})]),a.createElement("div",{children:m.Children.toArray(Array.from(u))})),a.createElement("p",h(d([["className","list-col-wrap"],(p='"Remaining Reason" became an instant hit, praised for its haunting sound and emotional depth. A viral performance brought it widespread recognition, making it one of Dio Lupa’s most iconic tracks.',["children",p])]))),a.createElement("button",h(b("btn",d([["className","btn-ghost"],["className","btn-square"],(y=[a.createElement("svg",h(d([["className","size-[1.2em]"],["viewBox","0 0 24 24"],(E=v(a.createElement("g",h(d([["strokeLinejoin","round"],["strokeLinecap","round"],["strokeWidth",2],["fill","none"],["stroke","currentColor"],(w=v(a.createElement("path",{d:"M6 3L20 12 6 21 6 3z"})),["children",m.Children.toArray(Array.from(w))])])))),["children",m.Children.toArray(Array.from(E))])])))],["children",m.Children.toArray(Array.from(y))])]))))]),a.createElement("li",{className:"list-row",children:m.Children.toArray(Array.from(i))})),(D=d([(N=v(a.createElement("img",{className:"size-10 rounded-box",src:"https://img.daisyui.com/images/profile/demo/4@94.webp"})),a.createElement("div",{children:m.Children.toArray(Array.from(N))})),(z=d([a.createElement("div",{children:["Ellie Beilish"]}),a.createElement("div",{className:"text-xs uppercase font-semibold opacity-60",children:"Bears of a fever"})]),a.createElement("div",{children:m.Children.toArray(Array.from(z))})),a.createElement("p",h(d([["className","list-col-wrap"],(M='"Bears of a Fever" captivated audiences with its intense energy and mysterious lyrics. Its popularity skyrocketed after fans shared it widely online, earning Ellie critical acclaim.',["children",M])]))),a.createElement("button",h(b("btn",d([["className","btn-ghost"],["className","btn-square"],(q=[a.createElement("svg",h(d([["className","size-[1.2em]"],["viewBox","0 0 24 24"],(B=v(a.createElement("g",h(d([["strokeLinejoin","round"],["strokeLinecap","round"],["strokeWidth",2],["fill","none"],["stroke","currentColor"],(Q=v(a.createElement("path",{d:"M6 3L20 12 6 21 6 3z"})),["children",m.Children.toArray(Array.from(Q))])])))),["children",m.Children.toArray(Array.from(B))])])))],["children",m.Children.toArray(Array.from(q))])]))))]),a.createElement("li",{className:"list-row",children:m.Children.toArray(Array.from(D))})),(Z=d([(W=v(a.createElement("img",{className:"size-10 rounded-box",src:"https://img.daisyui.com/images/profile/demo/3@94.webp"})),a.createElement("div",{children:m.Children.toArray(Array.from(W))})),(ge=d([a.createElement("div",{children:["Sabrino Gardener"]}),a.createElement("div",{className:"text-xs uppercase font-semibold opacity-60",children:"Cappuccino"})]),a.createElement("div",{children:m.Children.toArray(Array.from(ge))})),a.createElement("p",h(d([["className","list-col-wrap"],(ce='"Cappuccino" quickly gained attention for its smooth melody and relatable themes. The song’s success propelled Sabrino into the spotlight, solidifying their status as a rising star.',["children",ce])]))),a.createElement("button",h(b("btn",d([["className","btn-ghost"],["className","btn-square"],(ze=[a.createElement("svg",h(d([["className","size-[1.2em]"],["viewBox","0 0 24 24"],(Be=v(a.createElement("g",h(d([["strokeLinejoin","round"],["strokeLinecap","round"],["strokeWidth",2],["fill","none"],["stroke","currentColor"],(se=v(a.createElement("path",{d:"M6 3L20 12 6 21 6 3z"})),["children",m.Children.toArray(Array.from(se))])])))),["children",m.Children.toArray(Array.from(Be))])])))],["children",m.Children.toArray(Array.from(ze))])]))))]),a.createElement("li",{className:"list-row",children:m.Children.toArray(Array.from(Z))}))],["children",m.Children.toArray(Array.from(r))])]))))]}))})();function NE(){return a.createElement(a.Fragment,{},EE,AE)}const SE=(()=>{let r;return H("Use Loading for cool spinners with different sizes",`Html.div [
    Daisy.loading [ loading.spinner; loading.xs ]
    Daisy.loading [ loading.spinner; loading.sm ]
    Daisy.loading [ loading.spinner; loading.md ]
    Daisy.loading [ loading.spinner; loading.lg ]
]`,(r=d([a.createElement("span",h(b("loading",d([["className","loading-spinner"],["className","loading-xs"]])))),a.createElement("span",h(b("loading",d([["className","loading-spinner"],["className","loading-sm"]])))),a.createElement("span",h(b("loading",d([["className","loading-spinner"],["className","loading-md"]])))),a.createElement("span",h(b("loading",d([["className","loading-spinner"],["className","loading-lg"]]))))]),a.createElement("div",{children:m.Children.toArray(Array.from(r))})))})(),xE=(()=>{let r;return H("And many others",`Html.div [
    Daisy.loading [ loading.dots ]
    Daisy.loading [ loading.ring ]
    Daisy.loading [ loading.ball ]
    Daisy.loading [ loading.bars ]
    Daisy.loading [ loading.infinity ]
]`,(r=d([a.createElement("span",h(b("loading",v(["className","loading-dots"])))),a.createElement("span",h(b("loading",v(["className","loading-ring"])))),a.createElement("span",h(b("loading",v(["className","loading-ball"])))),a.createElement("span",h(b("loading",v(["className","loading-bars"])))),a.createElement("span",h(b("loading",v(["className","loading-infinity"]))))]),a.createElement("div",{children:m.Children.toArray(Array.from(r))})))})(),CE=(()=>{let r;return H("Fancy colors? Oh yeah!",`Html.div [
    Daisy.loading [ loading.dots; color.textAccent ]
    Daisy.loading [ loading.ring; color.textWarning ]
    Daisy.loading [ loading.ball; color.textSecondary ]
    Daisy.loading [ loading.bars; color.textSuccess ]
    Daisy.loading [ loading.infinity; color.textError ]
]`,(r=d([a.createElement("span",h(b("loading",d([["className","loading-dots"],["className","text-accent"]])))),a.createElement("span",h(b("loading",d([["className","loading-ring"],["className","text-warning"]])))),a.createElement("span",h(b("loading",d([["className","loading-ball"],["className","text-secondary"]])))),a.createElement("span",h(b("loading",d([["className","loading-bars"],["className","text-success"]])))),a.createElement("span",h(b("loading",d([["className","loading-infinity"],["className","text-error"]]))))]),a.createElement("div",{children:m.Children.toArray(Array.from(r))})))})();function DE(){return a.createElement(a.Fragment,{},SE,xE,CE)}const wE=H("Basic Shape",`Html.img [
    mask.circle
    prop.src "https://picsum.photos/id/1005/200/200"
]`,a.createElement("div",{children:[a.createElement("img",{className:"mask mask-circle",src:"https://picsum.photos/id/1005/200/200"})]})),_E=(()=>{let r;return H("All Shapes",`let shapes = [
    mask.squircle       , "squircle"
    mask.heart          , "heart"
    mask.hexagon        , "hexagon"
    mask.hexagon2       , "hexagon2"
    mask.decagon        , "decagon"
    mask.pentagon       , "pentagon"
    mask.diamond        , "diamond"
    mask.square         , "square"
    mask.circle         , "circle"
    mask.star           , "star"
    mask.star2          , "star2"
    mask.triangle       , "triangle"
    mask.triangle2      , "triangle2"
    mask.triangle3      , "triangle3"
    mask.triangle4      , "triangle4"
]

Html.div [
    for shape, text in shapes do
        Html.div [
            Html.span text
            Html.img [shape; prop.src "https://picsum.photos/id/1005/200/200"]
        ]
]`,(r=we(ee(()=>Xe(o=>{let u;return ue((u=d([a.createElement("span",{children:[o[1]]}),a.createElement("img",h(d([o[0],["src","https://picsum.photos/id/1005/200/200"]])))]),a.createElement("div",{children:m.Children.toArray(Array.from(u))})))},[[["className","mask mask-squircle"],"squircle"],[["className","mask mask-heart"],"heart"],[["className","mask mask-hexagon"],"hexagon"],[["className","mask mask-hexagon-2"],"hexagon2"],[["className","mask mask-decagon"],"decagon"],[["className","mask mask-pentagon"],"pentagon"],[["className","mask mask-diamond"],"diamond"],[["className","mask mask-square"],"square"],[["className","mask mask-circle"],"circle"],[["className","mask mask-star"],"star"],[["className","mask mask-star-2"],"star2"],[["className","mask mask-triangle"],"triangle"],[["className","mask mask-triangle-2"],"triangle2"],[["className","mask mask-triangle-3"],"triangle3"],[["className","mask mask-triangle-4"],"triangle4"]]))),a.createElement("div",{children:m.Children.toArray(Array.from(r))})))})();function HE(){return a.createElement(a.Fragment,{},wE,_E)}const TE=(()=>{let r,i,o,u,p,y,E,w;return H("Basic",`Html.div [
    prop.className "grid place-content-center rounded-box bg-base-200"
    prop.children [
        Daisy.menu [
            prop.className "bg-base-100 rounded-box"
            prop.children [
                Daisy.menuTitle "Menu title"
                Html.li [Html.a [prop.text "Item without icon"]]
                Html.li [
                    Html.a [
                        Html.i [ prop.className "fas fa-exclamation-triangle mr-2" ]
                        Html.span "Item with icon"
                    ]
                ]
                Html.li [
                    Html.a [
                        Html.i [ prop.className "fas fa-angry mr-2" ]
                        Html.span "Item with icon"
                        Daisy.badge [badge.success; prop.text "3"]
                    ]
                ]
            ]
        ]
    ]
]`,a.createElement("div",h(d([["className","grid place-content-center rounded-box bg-base-200"],(r=[a.createElement("ul",h(b("menu",d([["className","bg-base-100 rounded-box"],(i=[(o=[a.createElement("span",{children:["Menu title"]})],a.createElement("li",{className:"menu-title",children:m.Children.toArray(Array.from(o))})),(u=v(a.createElement("a",{children:"Item without icon"})),a.createElement("li",{children:m.Children.toArray(Array.from(u))})),(p=v((y=d([a.createElement("i",{className:"fas fa-exclamation-triangle mr-2"}),a.createElement("span",{children:["Item with icon"]})]),a.createElement("a",{children:m.Children.toArray(Array.from(y))}))),a.createElement("li",{children:m.Children.toArray(Array.from(p))})),(E=v((w=d([a.createElement("i",{className:"fas fa-angry mr-2"}),a.createElement("span",{children:["Item with icon"]}),a.createElement("div",h(b("badge",d([["className","badge-success"],["children","3"]]))))]),a.createElement("a",{children:m.Children.toArray(Array.from(w))}))),a.createElement("li",{children:m.Children.toArray(Array.from(E))}))],["children",m.Children.toArray(Array.from(i))])]))))],["children",m.Children.toArray(Array.from(r))])]))))})(),kE=(()=>{let r,i,o,u,p,y;return H("Bordered",`Html.div [
    prop.className "grid place-content-center rounded-box bg-base-200"
    prop.children [
        Daisy.menu [
            prop.className "py-3 bg-base-100 rounded-box"
            prop.children [
                Daisy.menuTitle "Menu title"
                Html.li [Html.a [prop.text "Non Bordered"]]
                Html.li [
                    prop.className "bordered"
                    prop.children [
                        Html.a [ prop.text "Bordered"]
                    ]
                ]
                Html.li [
                    menuItem.disabled
                    prop.children [
                        Html.a [ prop.text "Disabled" ]
                    ]
                ]
            ]
        ]
    ]
]`,a.createElement("div",h(d([["className","grid place-content-center rounded-box bg-base-200"],(r=[a.createElement("ul",h(b("menu",d([["className","bg-base-100 rounded-box"],(i=[(o=[a.createElement("span",{children:["Menu title"]})],a.createElement("li",{className:"menu-title",children:m.Children.toArray(Array.from(o))})),(u=v(a.createElement("a",{children:"Non Bordered"})),a.createElement("li",{children:m.Children.toArray(Array.from(u))})),a.createElement("li",h(d([["className","border"],(p=[a.createElement("a",{children:"Bordered"})],["children",m.Children.toArray(Array.from(p))])]))),a.createElement("li",h(d([["className","menu-disabled"],(y=[a.createElement("a",{children:"Disabled"})],["children",m.Children.toArray(Array.from(y))])])))],["children",m.Children.toArray(Array.from(i))])]))))],["children",m.Children.toArray(Array.from(r))])]))))})(),zE=(()=>{let r,i,o,u,p,y,E;return H("Horizontal",`Html.div [
    prop.className "grid place-content-center rounded-box bg-base-200"
    prop.children [
        Daisy.menu [
            menu.horizontal
            prop.className "items-stretch shadow-lg bg-base-100 rounded-box"
            prop.children [
                Html.li [Html.a [prop.text "With link"]]
                Html.li [
                    prop.className "bordered"
                    prop.children [
                        Html.a [ prop.text "Bordered"]
                    ]
                ]
                Html.li [Html.span "With a span"]
                Html.li [
                    Html.a [
                        Html.i [ prop.className "fas fa-exclamation-triangle mr-2" ]
                        Html.span "With an icon"
                    ]
                ]
            ]
        ]
    ]
]`,a.createElement("div",h(d([["className","grid place-content-center rounded-box bg-base-200"],(r=[a.createElement("ul",h(b("menu",d([["className","menu-horizontal"],["className","items-stretch shadow-lg bg-base-100 rounded-box"],(i=[(o=v(a.createElement("a",{children:"With link"})),a.createElement("li",{children:m.Children.toArray(Array.from(o))})),a.createElement("li",h(d([["className","bordered"],(u=[a.createElement("a",{children:"Bordered"})],["children",m.Children.toArray(Array.from(u))])]))),(p=v(a.createElement("span",{children:["With a span"]})),a.createElement("li",{children:m.Children.toArray(Array.from(p))})),(y=v((E=d([a.createElement("i",{className:"fas fa-exclamation-triangle mr-2"}),a.createElement("span",{children:["With an icon"]})]),a.createElement("a",{children:m.Children.toArray(Array.from(E))}))),a.createElement("li",{children:m.Children.toArray(Array.from(y))}))],["children",m.Children.toArray(Array.from(i))])]))))],["children",m.Children.toArray(Array.from(r))])]))))})(),ME=(()=>{let r,i,o,u,p,y,E,w,D;return H("Tree",`Html.div [
    prop.className "grid place-content-center py-4 rounded-box bg-base-200"
    prop.children [
        Daisy.menu [
            prop.className "bg-base-100 rounded-box"
            prop.children [
                Daisy.menuTitle "Menu title"
                Html.li [Html.a [prop.text "Level 1"]]
                Html.li [
                    Html.span "Parent"
                    Html.ul [
                        prop.className "rounded-box p-2 bg-base-100"
                        prop.children [
                            Html.li [Html.a [prop.text "Level 2/1"]]
                            Html.li [Html.a [prop.text "Level 2/2"]]
                        ]
                    ]
                ]
            ]
        ]
    ]
]`,a.createElement("div",h(d([["className","grid place-content-center py-4 rounded-box bg-base-200"],(r=[a.createElement("ul",h(b("menu",d([["className","bg-base-100 rounded-box"],(i=[(o=[a.createElement("span",{children:["Menu title"]})],a.createElement("li",{className:"menu-title",children:m.Children.toArray(Array.from(o))})),(u=v(a.createElement("a",{children:"Level 1"})),a.createElement("li",{children:m.Children.toArray(Array.from(u))})),(p=v((y=d([a.createElement("summary",{children:["Parent"]}),a.createElement("ul",h(d([["className","rounded-box p-2 bg-base-100"],(E=[(w=v(a.createElement("a",{children:"Level 2/1"})),a.createElement("li",{children:m.Children.toArray(Array.from(w))})),(D=v(a.createElement("a",{children:"Level 2/2"})),a.createElement("li",{children:m.Children.toArray(Array.from(D))}))],["children",m.Children.toArray(Array.from(E))])])))]),a.createElement("details",{children:m.Children.toArray(Array.from(y))}))),a.createElement("li",{children:m.Children.toArray(Array.from(p))}))],["children",m.Children.toArray(Array.from(i))])]))))],["children",m.Children.toArray(Array.from(r))])]))))})();function OE(){return a.createElement(a.Fragment,{},TE,kE,zE,ME)}const RE=(()=>{let r,i,o,u,p;return H("Modal with toggle",`Html.div [
    Daisy.button.label [
        prop.htmlFor "my-modal"
        button.primary
        prop.text "Open Modal"
    ]
    Daisy.modalToggle [prop.id "my-modal"]
    Daisy.modal.div [
        prop.children [
            Daisy.modalBox.div [
                Html.p "Enim dolorem dolorum omnis atque necessitatibus. Consequatur aut adipisci qui iusto illo eaque. Consequatur repudiandae et. Nulla ea quasi eligendi. Saepe velit autem minima."
                Daisy.modalAction [
                    Daisy.button.label [
                        prop.htmlFor "my-modal"
                        button.primary
                        prop.text "Accept"
                    ]
                ]
            ]
        ]
    ]
]`,(r=d([a.createElement("label",h(b("btn",d([["htmlFor","my-modal"],["className","btn-primary"],["children","Open Modal"]])))),a.createElement("input",h(b("modal-toggle",d([["type","checkbox"],["id","my-modal"]])))),a.createElement("div",h(b("modal",v((i=[(o=d([(u="Enim dolorem dolorum omnis atque necessitatibus. Consequatur aut adipisci qui iusto illo eaque. Consequatur repudiandae et. Nulla ea quasi eligendi. Saepe velit autem minima.",a.createElement("p",{children:[u]})),(p=v(a.createElement("label",h(b("btn",d([["htmlFor","my-modal"],["className","btn-primary"],["children","Accept"]]))))),a.createElement("div",{className:"modal-action",children:m.Children.toArray(Array.from(p))}))]),a.createElement("div",{className:"modal-box",children:m.Children.toArray(Array.from(o))}))],["children",m.Children.toArray(Array.from(i))])))))]),a.createElement("div",{children:m.Children.toArray(Array.from(r))})))})();function UE(){return a.createElement(a.Fragment,{},RE)}const BE=(()=>{let r,i,o,u;return H("Icon and text",`Daisy.navbar [
    prop.className "mb-2 shadow-lg bg-neutral text-neutral-content rounded-box"
    prop.children [
        Html.div [
            prop.className "flex-none"
            prop.children [
                Daisy.button.button [
                    button.square
                    button.ghost
                    prop.children [
                        Html.i [ prop.className "fas fa-arrow-left" ++ color.textSuccess ]
                    ]
                ]
            ]
        ]
        Html.div [
            prop.className "flex-1 px-2 mx-2"
            prop.children [
                Html.span [prop.className "text-lg font-bold"; prop.text "With one icon"]
            ]
        ]
    ]
]`,a.createElement("div",{children:[a.createElement("div",h(b("navbar",d([["className","mb-2 shadow-lg bg-neutral text-neutral-content rounded-box"],(r=[a.createElement("div",h(d([["className","flex-none"],(i=[a.createElement("button",h(b("btn",d([["className","btn-square"],["className","btn-ghost"],(o=[a.createElement("i",h(v(rt(["className","fas fa-arrow-left"],["className","text-success"]))))],["children",m.Children.toArray(Array.from(o))])]))))],["children",m.Children.toArray(Array.from(i))])]))),a.createElement("div",h(d([["className","flex-1 px-2 mx-2"],(u=[a.createElement("span",{className:"text-lg font-bold",children:"With one icon"})],["children",m.Children.toArray(Array.from(u))])])))],["children",m.Children.toArray(Array.from(r))])]))))]}))})(),qE=(()=>{let r,i,o,u,p,y;return H("Start / Center / End",`Daisy.navbar [
    prop.className "mb-2 shadow-lg bg-neutral text-neutral-content rounded-box"
    prop.children [
        Daisy.navbarStart [
            Daisy.button.button [
                button.square
                button.ghost
                prop.children [
                    Html.i [ prop.className "fas fa-bars" ]
                ]
            ]
        ]
        Daisy.navbarCenter [Html.span "With two icons"]
        Daisy.navbarEnd [
            Daisy.button.button [
                button.square
                button.ghost
                prop.children [
                    Html.i [ prop.className "fas fa-ellipsis-h" ]
                ]
            ]
        ]
    ]
]`,a.createElement("div",{children:[a.createElement("div",h(b("navbar",d([["className","mb-2 shadow-lg bg-neutral text-neutral-content rounded-box"],(r=[(i=v(a.createElement("button",h(b("btn",d([["className","btn-square"],["className","btn-ghost"],(o=[a.createElement("i",{className:"fas fa-bars"})],["children",m.Children.toArray(Array.from(o))])]))))),a.createElement("div",{className:"navbar-start",children:m.Children.toArray(Array.from(i))})),(u=v(a.createElement("span",{children:["With two icons"]})),a.createElement("div",{className:"navbar-center",children:m.Children.toArray(Array.from(u))})),(p=v(a.createElement("button",h(b("btn",d([["className","btn-square"],["className","btn-ghost"],(y=[a.createElement("i",{className:"fas fa-ellipsis-h"})],["children",m.Children.toArray(Array.from(y))])]))))),a.createElement("div",{className:"navbar-end",children:m.Children.toArray(Array.from(p))}))],["children",m.Children.toArray(Array.from(r))])]))))]}))})(),LE=(()=>{let r,i,o,u,p;return H("With input",`Daisy.navbar [
    prop.className "mb-2 shadow-lg bg-neutral text-neutral-content rounded-box"
    prop.children [
        Html.div [
            prop.className "flex-none"
            prop.children [
                Daisy.fieldset [
                    Daisy.input [ input.ghost; prop.placeholder "Search" ]
                ]
            ]
        ]
        Html.div [
            prop.className "flex-none"
            prop.children [
                Daisy.button.button [
                    button.square
                    button.ghost
                    prop.children [
                        Html.i [ prop.className "fas fa-search" ]
                    ]
                ]
            ]
        ]
    ]
]`,a.createElement("div",{children:[a.createElement("div",h(b("navbar",d([["className","mb-2 shadow-lg bg-neutral text-neutral-content rounded-box"],(r=[a.createElement("div",h(d([["className","flex-none"],(i=[(o=v(a.createElement("input",h(b("input",d([["type","text"],["className","input-ghost"],["placeholder","Search"]]))))),a.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(o))}))],["children",m.Children.toArray(Array.from(i))])]))),a.createElement("div",h(d([["className","flex-none"],(u=[a.createElement("button",h(b("btn",d([["className","btn-square"],["className","btn-ghost"],(p=[a.createElement("i",{className:"fas fa-search"})],["children",m.Children.toArray(Array.from(p))])]))))],["children",m.Children.toArray(Array.from(u))])])))],["children",m.Children.toArray(Array.from(r))])]))))]}))})();function GE(){return a.createElement(a.Fragment,{},BE,qE,LE)}const VE=(()=>{let r;return H("Simple pagination",`Daisy.join [
    Daisy.button.button "Previous"
    Daisy.button.button "1"
    Daisy.button.button [button.active; prop.text "2"]
    Daisy.button.button "3"
    Daisy.button.button "4"
    Daisy.button.button "Next"
]`,(r=d([a.createElement("button",{className:"btn",children:"Previous"}),a.createElement("button",{className:"btn",children:"1"}),a.createElement("button",h(b("btn",d([["className","btn-active"],["children","2"]])))),a.createElement("button",{className:"btn",children:"3"}),a.createElement("button",{className:"btn",children:"4"}),a.createElement("button",{className:"btn",children:"Next"})]),a.createElement("div",{className:"join",children:m.Children.toArray(Array.from(r))})))})(),jE=(()=>{let r;return H("Sizes",`let sizes = [
    button.xs, nameof button.xs
    button.sm, nameof button.sm
    button.md, nameof button.md
    button.lg, nameof button.lg
]
Html.div [
    for size, sizeText in sizes do
        Daisy.join [
            Daisy.button.button [size; prop.text "Previous"]
            Daisy.button.button [size; prop.text "1"]
            Daisy.button.button [size; button.active; prop.text "2"]
            Daisy.button.button [size; prop.text "3"]
            Daisy.button.button [size; prop.text "4"]
            Daisy.button.button [size; prop.text "Next"]
        ]
]`,(r=we(ee(()=>Xe(o=>{let u;const p=o[0];return ue((u=d([a.createElement("button",h(b("btn",d([p,["children","Previous"]])))),a.createElement("button",h(b("btn",d([p,["children","1"]])))),a.createElement("button",h(b("btn",d([p,["className","btn-active"],["children","2"]])))),a.createElement("button",h(b("btn",d([p,["children","3"]])))),a.createElement("button",h(b("btn",d([p,["children","4"]])))),a.createElement("button",h(b("btn",d([p,["children","Next"]]))))]),a.createElement("div",{className:"join",children:m.Children.toArray(Array.from(u))})))},[[["className","btn-xs"],"xs"],[["className","btn-sm"],"sm"],[["className","btn-md"],"md"],[["className","btn-lg"],"lg"]]))),a.createElement("div",{children:m.Children.toArray(Array.from(r))})))})();function YE(){return a.createElement(a.Fragment,{},VE,jE)}const QE=(()=>{let r;return H("Simple",`Daisy.progress [prop.value 0; prop.max 100]
Daisy.progress [prop.value 25; prop.max 100]
Daisy.progress [prop.value 50; prop.max 100]
Daisy.progress [prop.value 75; prop.max 100]
Daisy.progress [prop.value 100; prop.max 100]`,(r=d([a.createElement("progress",h(b("progress",d([["value",0],["max",100]])))),a.createElement("progress",h(b("progress",d([["value",25],["max",100]])))),a.createElement("progress",h(b("progress",d([["value",50],["max",100]])))),a.createElement("progress",h(b("progress",d([["value",75],["max",100]])))),a.createElement("progress",h(b("progress",d([["value",100],["max",100]]))))]),a.createElement("div",{children:m.Children.toArray(Array.from(r))})))})(),XE=(()=>{let r;return H("Colors",`let colors =
    [ progress.primary  , "primary"
      progress.secondary, "secondary"
      progress.accent   , "accent"
      progress.info     , "info"
      progress.success  , "success"
      progress.warning  , "warning"
      progress.error    , "error" ]

Html.div [
    for color, text in colors do
        Html.h3 text
        Daisy.progress [color; prop.value 0; prop.max 100]
        Daisy.progress [color; prop.value 25; prop.max 100]
        Daisy.progress [color; prop.value 50; prop.max 100]
        Daisy.progress [color; prop.value 75; prop.max 100]
        Daisy.progress [color; prop.value 100; prop.max 100]
]`,(r=we(ee(()=>Xe(o=>{const u=o[0];return Ke(ue(a.createElement("h3",{children:[o[1]]})),ee(()=>Ke(ue(a.createElement("progress",h(b("progress",d([u,["value",0],["max",100]]))))),ee(()=>Ke(ue(a.createElement("progress",h(b("progress",d([u,["value",25],["max",100]]))))),ee(()=>Ke(ue(a.createElement("progress",h(b("progress",d([u,["value",50],["max",100]]))))),ee(()=>Ke(ue(a.createElement("progress",h(b("progress",d([u,["value",75],["max",100]]))))),ee(()=>ue(a.createElement("progress",h(b("progress",d([u,["value",100],["max",100]])))))))))))))))},[[["className","progress-primary"],"primary"],[["className","progress-secondary"],"secondary"],[["className","progress-accent"],"accent"],[["className","progress-info"],"info"],[["className","progress-success"],"success"],[["className","progress-warning"],"warning"],[["className","progress-error"],"error"]]))),a.createElement("div",{children:m.Children.toArray(Array.from(r))})))})();function ZE(){return a.createElement(a.Fragment,{},QE,XE)}const KE=(()=>{let r;return H("Simple",`Daisy.radialProgress [
    prop.style [ style.custom("--value",100) ]
    prop.text "100%"
]
Daisy.radialProgress [
    prop.style [ style.custom("--value",70) ]
    prop.text "70%"
]
Daisy.radialProgress [
    prop.style [ style.custom("--value",10) ]
    prop.text "10%"
]
Daisy.radialProgress [
    prop.style [ style.custom("--value",50) ]
    prop.text "50%"
]`,(r=d([a.createElement("div",h(b("radial-progress",d([["style",{"--value":100}],["children","100%"]])))),a.createElement("div",h(b("radial-progress",d([["style",{"--value":70}],["children","70%"]])))),a.createElement("div",h(b("radial-progress",d([["style",{"--value":10}],["children","10%"]])))),a.createElement("div",h(b("radial-progress",d([["style",{"--value":50}],["children","50%"]]))))]),a.createElement("div",{children:m.Children.toArray(Array.from(r))})))})(),FE=(()=>{let r;return H("Colors and different sizes",`Daisy.radialProgress [
    color.bgPrimary
    color.textPrimaryContent
    color.borderPrimary
    prop.className "border-4"
    prop.style [ style.custom("--value",70); style.custom("--size","12rem") ]
    prop.text "70%"
]`,(r=v(a.createElement("div",h(b("radial-progress",d([["className","bg-primary"],["className","text-primary-content"],["className","border-primary"],["className","border-4"],["style",{"--value":70,"--size":"12rem"}],["children","70%"]]))))),a.createElement("div",{children:m.Children.toArray(Array.from(r))})))})();function JE(){return a.createElement(a.Fragment,{},KE,FE)}const $E=(()=>{let r,i;return H("Large stars",`Daisy.rating [
    rating.lg
    prop.children [
        Html.input [ prop.type'.radio; prop.name "rating-1"; color.bgWarning ++ mask.star ]
        Html.input [ prop.type'.radio; prop.name "rating-1"; color.bgWarning ++ mask.star ]
        Html.input [ prop.type'.radio; prop.name "rating-1"; color.bgWarning ++ mask.star ]
        Html.input [ prop.type'.radio; prop.name "rating-1"; color.bgWarning ++ mask.star; prop.defaultChecked true ]
        Html.input [ prop.type'.radio; prop.name "rating-1"; color.bgWarning ++ mask.star ]
    ]
]`,(r=v(a.createElement("div",h(b("rating",d([["className","rating-lg"],(i=[a.createElement("input",h(d([["type","radio"],["name","rating-1"],rt(["className","bg-warning"],["className","mask mask-star"])]))),a.createElement("input",h(d([["type","radio"],["name","rating-1"],rt(["className","bg-warning"],["className","mask mask-star"])]))),a.createElement("input",h(d([["type","radio"],["name","rating-1"],rt(["className","bg-warning"],["className","mask mask-star"])]))),a.createElement("input",h(d([["type","radio"],["name","rating-1"],rt(["className","bg-warning"],["className","mask mask-star"]),["defaultChecked",!0]]))),a.createElement("input",h(d([["type","radio"],["name","rating-1"],rt(["className","bg-warning"],["className","mask mask-star"])])))],["children",m.Children.toArray(Array.from(i))])]))))),a.createElement("div",{children:m.Children.toArray(Array.from(r))})))})(),WE=(()=>{let r,i;return H("Small hearts",`Daisy.rating [
    prop.className "gap-1"
    ++ rating.sm
    prop.children [
        Html.input [ prop.type'.radio; prop.name "rating-1"; color.bgWarning ++ mask.star ]
        Html.input [ prop.type'.radio; prop.name "rating-1"; color.bgWarning ++ mask.star; prop.defaultChecked true ]
        Html.input [ prop.type'.radio; prop.name "rating-1"; color.bgWarning ++ mask.star ]
        Html.input [ prop.type'.radio; prop.name "rating-1"; color.bgWarning ++ mask.star ]
        Html.input [ prop.type'.radio; prop.name "rating-1"; color.bgWarning ++ mask.star ]
    ]
]`,(r=v(a.createElement("div",h(b("rating",d([rt(["className","gap-1"],["className","rating-sm"]),(i=[a.createElement("input",h(d([["type","radio"],["name","rating-2"],rt(["className","bg-error"],["className","mask mask-heart"])]))),a.createElement("input",h(d([["type","radio"],["name","rating-2"],rt(["className","bg-error"],["className","mask mask-heart"]),["defaultChecked",!0]]))),a.createElement("input",h(d([["type","radio"],["name","rating-2"],rt(["className","bg-error"],["className","mask mask-heart"])]))),a.createElement("input",h(d([["type","radio"],["name","rating-2"],rt(["className","bg-error"],["className","mask mask-heart"])]))),a.createElement("input",h(d([["type","radio"],["name","rating-2"],rt(["className","bg-error"],["className","mask mask-heart"])])))],["children",m.Children.toArray(Array.from(i))])]))))),a.createElement("div",{children:m.Children.toArray(Array.from(r))})))})();function IE(){return a.createElement(a.Fragment,{},$E,WE)}const PE=H("Skeleton is a component that can be used to show a loading state of a component.",`Daisy.skeleton [
    prop.className "w-32 h-32"
]`,a.createElement("div",h(b("skeleton",v(["className","w-32 h-32"]))))),e1=(()=>{let r;return H("Skeleton - rectangle with content",`Html.div [
    prop.className "flex flex-col gap-4 w-52"
    prop.children [
        Daisy.skeleton [ prop.className "h-32 w-full" ]
        Daisy.skeleton [ prop.className "h-4 w-28" ]
        Daisy.skeleton [ prop.className "h-4 w-full" ]
        Daisy.skeleton [ prop.className "h-4 w-full" ]
    ]
]`,a.createElement("div",h(d([["className","flex flex-col gap-4 w-52"],(r=[a.createElement("div",h(b("skeleton",v(["className","h-32 w-full"])))),a.createElement("div",h(b("skeleton",v(["className","h-4 w-28"])))),a.createElement("div",h(b("skeleton",v(["className","h-4 w-full"])))),a.createElement("div",h(b("skeleton",v(["className","h-4 w-full"]))))],["children",m.Children.toArray(Array.from(r))])]))))})();function t1(){return a.createElement(a.Fragment,{},PE,e1)}const n1=(()=>{let r;return H("Without stack",`Html.div [
    Html.div [
        prop.className "grid w-32 h-20 rounded bg-primary text-primary-content place-content-center"
        prop.text "1"
    ]
    Html.div [
        prop.className "grid w-32 h-20 rounded bg-accent text-accent-content place-content-center"
        prop.text "2"
    ]
    Html.div [
        prop.className "grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center"
        prop.text "3"
    ]
]`,(r=d([a.createElement("div",{className:"grid w-32 h-20 rounded bg-primary text-primary-content place-content-center",children:"1"}),a.createElement("div",{className:"grid w-32 h-20 rounded bg-accent text-accent-content place-content-center",children:"2"}),a.createElement("div",{className:"grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center",children:"3"})]),a.createElement("div",{children:m.Children.toArray(Array.from(r))})))})(),l1=(()=>{let r;return H("With stack",`Daisy.stack [
    prop.className "w-32 h-20"
    prop.children [
        Html.div [
            prop.className "grid rounded bg-primary text-primary-content place-content-center"
            prop.text "1"
        ]
        Html.div [
            prop.className "grid rounded bg-accent text-accent-content place-content-center"
            prop.text "2"
        ]
        Html.div [
            prop.className "grid rounded bg-secondary text-secondary-content place-content-center"
            prop.text "3"
        ]
    ]
]`,a.createElement("div",{children:[a.createElement("div",h(b("stack",d([["className","w-32 h-20"],(r=[a.createElement("div",{className:"grid rounded bg-primary text-primary-content place-content-center",children:"1"}),a.createElement("div",{className:"grid rounded bg-accent text-accent-content place-content-center",children:"2"}),a.createElement("div",{className:"grid rounded bg-secondary text-secondary-content place-content-center",children:"3"})],["children",m.Children.toArray(Array.from(r))])]))))]}))})(),a1=(()=>{let r;return H("Stacked images",`Daisy.stack [
    Html.img [
        prop.src "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
    ]
    Html.img [
        prop.src "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
    ]
    Html.img [
        prop.src "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
    ]
]`,a.createElement("div",{children:[(r=d([a.createElement("img",{src:"https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"}),a.createElement("img",{src:"https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"}),a.createElement("img",{src:"https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"})]),a.createElement("div",{className:"stack",children:m.Children.toArray(Array.from(r))}))]}))})();function r1(){return a.createElement(a.Fragment,{},n1,l1,a1)}const i1=(()=>{let r,i;return H("Simple",`Daisy.stats [
    Daisy.stat [
        Daisy.statTitle "Total Page Views"
        Daisy.statValue "89,400"
        Daisy.statDesc "21% more than last month"
    ]
]`,a.createElement("div",{children:[(r=v((i=d([a.createElement("div",{className:"stat-title",children:"Total Page Views"}),a.createElement("div",{className:"stat-value",children:"89,400"}),a.createElement("div",{className:"stat-desc",children:"21% more than last month"})]),a.createElement("div",{className:"stat",children:m.Children.toArray(Array.from(i))}))),a.createElement("div",{className:"stats",children:m.Children.toArray(Array.from(r))}))]}))})(),c1=(()=>{let r,i,o,u,p,y,E;return H("With Figure",`Daisy.stats [
    prop.className "w-full"
    prop.children [
        Daisy.stat [
            Daisy.statFigure [
                Html.i [ prop.className "fas fa-exclamation-triangle mr-2" ]
            ]
            Daisy.statTitle "Downloads"
            Daisy.statValue "310M"
            Daisy.statDesc "Jan 1st - Feb 1st"
        ]
        Daisy.stat [
            Daisy.statFigure [
                Html.i [ prop.className "fas fa-hand-spock mr-2" ]
            ]
            Daisy.statTitle "New Users"
            Daisy.statValue "4,200"
            Daisy.statDesc [prop.className "text-success"; prop.text "↗︎ 400 (22%)"]
        ]
        Daisy.stat [
            Daisy.statFigure [
                Html.i [ prop.className "fas fa-layer-group mr-2" ]
            ]
            Daisy.statTitle "New Registers"
            Daisy.statValue "1,200"
            Daisy.statDesc [prop.className "text-error"; prop.text "↘︎ 90 (14%)"]
        ]
    ]
]`,a.createElement("div",{children:[a.createElement("div",h(b("stats",d([["className","w-full"],(r=[(i=d([(o=v(a.createElement("i",{className:"fas fa-exclamation-triangle mr-2"})),a.createElement("div",{className:"stat-figure",children:m.Children.toArray(Array.from(o))})),a.createElement("div",{className:"stat-title",children:"Downloads"}),a.createElement("div",{className:"stat-value",children:"310M"}),a.createElement("div",{className:"stat-desc",children:"Jan 1st - Feb 1st"})]),a.createElement("div",{className:"stat",children:m.Children.toArray(Array.from(i))})),(u=d([(p=v(a.createElement("i",{className:"fas fa-hand-spock mr-2"})),a.createElement("div",{className:"stat-figure",children:m.Children.toArray(Array.from(p))})),a.createElement("div",{className:"stat-title",children:"New Users"}),a.createElement("div",{className:"stat-value",children:"4,200"}),a.createElement("div",h(b("stat-desc",d([["className","text-success"],["children","↗︎ 400 (22%)"]]))))]),a.createElement("div",{className:"stat",children:m.Children.toArray(Array.from(u))})),(y=d([(E=v(a.createElement("i",{className:"fas fa-layer-group mr-2"})),a.createElement("div",{className:"stat-figure",children:m.Children.toArray(Array.from(E))})),a.createElement("div",{className:"stat-title",children:"New Registers"}),a.createElement("div",{className:"stat-value",children:"1,200"}),a.createElement("div",h(b("stat-desc",d([["className","text-error"],["children","↘︎ 90 (14%)"]]))))]),a.createElement("div",{className:"stat",children:m.Children.toArray(Array.from(y))}))],["children",m.Children.toArray(Array.from(r))])]))))]}))})(),s1=(()=>{let r,i,o,u;return H("Centered",`Daisy.stats [
    prop.className "w-full"
    prop.children [
        Daisy.stat [
            prop.className "place-items-center place-content-center"
            prop.children [
                Daisy.statTitle "Downloads"
                Daisy.statValue "310M"
                Daisy.statDesc "Jan 1st - Feb 1st"
            ]
        ]
        Daisy.stat [
            prop.className "place-items-center place-content-center"
            prop.children [
                Daisy.statTitle "New Users"
                Daisy.statValue "4,200"
                Daisy.statDesc [prop.className "text-success"; prop.text "↗︎ 400 (22%)"]
            ]
        ]
        Daisy.stat [
            prop.className "place-items-center place-content-center"
            prop.children [
                Daisy.statTitle "New Registers"
                Daisy.statValue "1,200"
                Daisy.statDesc [prop.className "text-error"; prop.text "↘︎ 90 (14%)"]
            ]
        ]
    ]
]`,a.createElement("div",{children:[a.createElement("div",h(b("stats",d([["className","w-full"],(r=[a.createElement("div",h(b("stat",d([["className","place-items-center place-content-center"],(i=[a.createElement("div",{className:"stat-title",children:"Downloads"}),a.createElement("div",{className:"stat-value",children:"310M"}),a.createElement("div",{className:"stat-desc",children:"Jan 1st - Feb 1st"})],["children",m.Children.toArray(Array.from(i))])])))),a.createElement("div",h(b("stat",d([["className","place-items-center place-content-center"],(o=[a.createElement("div",{className:"stat-title",children:"New Users"}),a.createElement("div",{className:"stat-value",children:"4,200"}),a.createElement("div",h(b("stat-desc",d([["className","text-success"],["children","↗︎ 400 (22%)"]]))))],["children",m.Children.toArray(Array.from(o))])])))),a.createElement("div",h(b("stat",d([["className","place-items-center place-content-center"],(u=[a.createElement("div",{className:"stat-title",children:"New Registers"}),a.createElement("div",{className:"stat-value",children:"1,200"}),a.createElement("div",h(b("stat-desc",d([["className","text-error"],["children","↘︎ 90 (14%)"]]))))],["children",m.Children.toArray(Array.from(u))])]))))],["children",m.Children.toArray(Array.from(r))])]))))]}))})();function o1(){return a.createElement(a.Fragment,{},i1,c1,s1)}const u1=H("Basic",`Daisy.status [
    status.error
    status.xl
]`,a.createElement("div",{children:[Ro(d([["className","status-error"],["className","status-xl"]]))]})),d1=(()=>{let r,i;return H("Ping animation",`Html.div [
    Html.div [
        prop.className "inline-grid *:[grid-area:1/1]"
        prop.children [
            Daisy.status [ status.primary; prop.className "animate-ping" ]
            Daisy.status [ status.primary ]
        ]
    ]
    Html.text " Unread messages"
]`,(r=d([a.createElement("div",h(d([["className","inline-grid *:[grid-area:1/1]"],(i=[Ro(d([["className","status-primary"],["className","animate-ping"]])),Ro(v(["className","status-primary"]))],["children",m.Children.toArray(Array.from(i))])])))," Unread messages"]),a.createElement("div",{children:m.Children.toArray(Array.from(r))})))})();function m1(){return a.createElement(a.Fragment,{},u1,d1)}const f1=(()=>{let r;return H("Horizontal Steps",`Daisy.steps [
    Daisy.step [step.primary; prop.text "Register"]
    Daisy.step [step.primary; prop.text "Choose Plan"]
    Daisy.step "Purchase"
    Daisy.step "Receive Product"
]`,a.createElement("div",{children:[(r=d([a.createElement("li",h(b("step",d([["className","step-primary"],["children","Register"]])))),a.createElement("li",h(b("step",d([["className","step-primary"],["children","Choose Plan"]])))),a.createElement("li",{className:"step",children:"Purchase"}),a.createElement("li",{className:"step",children:"Receive Product"})]),a.createElement("ul",{className:"steps",children:m.Children.toArray(Array.from(r))}))]}))})(),h1=(()=>{let r;return H("Vertical Steps",`Daisy.steps [
    steps.vertical
    prop.children [
        Daisy.step [step.primary; prop.text "Register"]
        Daisy.step [step.primary; prop.text "Choose Plan"]
        Daisy.step "Purchase"
        Daisy.step "Receive Product"
    ]
]`,a.createElement("div",{children:[a.createElement("ul",h(b("steps",d([["className","steps-vertical"],(r=[a.createElement("li",h(b("step",d([["className","step-primary"],["children","Register"]])))),a.createElement("li",h(b("step",d([["className","step-primary"],["children","Choose Plan"]])))),a.createElement("li",{className:"step",children:"Purchase"}),a.createElement("li",{className:"step",children:"Receive Product"})],["children",m.Children.toArray(Array.from(r))])]))))]}))})(),p1=(()=>{let r,i,o,u;return H("Icons",`Daisy.steps [
    Daisy.step [
        Daisy.stepIcon (Html.text "😕")
        Html.text "Step 1"
    ]
    Daisy.step [
        Daisy.stepIcon (Html.text "😃")
        Html.text "Step 2"
    ]
    Daisy.step [
        Daisy.stepIcon (Html.text "😍")
        Html.text "Step 3"
    ]
]`,a.createElement("div",{children:[(r=d([(i=d([a.createElement("span",{className:"step-icon",children:m.Children.toArray(["😕"])}),"Step 1"]),a.createElement("li",{className:"step",children:m.Children.toArray(Array.from(i))})),(o=d([a.createElement("span",{className:"step-icon",children:m.Children.toArray(["😃"])}),"Step 2"]),a.createElement("li",{className:"step",children:m.Children.toArray(Array.from(o))})),(u=d([a.createElement("span",{className:"step-icon",children:m.Children.toArray(["😍"])}),"Step 3"]),a.createElement("li",{className:"step",children:m.Children.toArray(Array.from(u))}))]),a.createElement("ul",{className:"steps",children:m.Children.toArray(Array.from(r))}))]}))})(),y1=(()=>{let r;return H("Custom Content",`Daisy.steps [
    Daisy.step [step.content "?"; step.primary; prop.text "Step 1"]
    Daisy.step [step.content "!"; step.secondary; prop.text "Step 2"]
    Daisy.step [step.content "✓"; step.accent; prop.text "Step 3"]
    Daisy.step [step.content "✕"; step.error; prop.text "Step 4"]
    Daisy.step [step.content "★"; step.info; prop.text "Step 5"]
    Daisy.step [step.content ""; step.success; prop.text "Step 6"]
    Daisy.step [step.content "✕"; step.warning; prop.text "Step 7"]
    Daisy.step [step.content "●"; prop.text "Step 8"]
]`,a.createElement("div",{children:[(r=d([a.createElement("li",h(b("step",d([["data-content","?"],["className","step-primary"],["children","Step 1"]])))),a.createElement("li",h(b("step",d([["data-content","!"],["className","step-secondary"],["children","Step 2"]])))),a.createElement("li",h(b("step",d([["data-content","✓"],["className","step-accent"],["children","Step 3"]])))),a.createElement("li",h(b("step",d([["data-content","✕"],["className","step-error"],["children","Step 4"]])))),a.createElement("li",h(b("step",d([["data-content","★"],["className","step-info"],["children","Step 5"]])))),a.createElement("li",h(b("step",d([["data-content",""],["className","step-success"],["children","Step 6"]])))),a.createElement("li",h(b("step",d([["data-content","✕"],["className","step-warning"],["children","Step 7"]])))),a.createElement("li",h(b("step",d([["data-content","●"],["children","Step 8"]]))))]),a.createElement("ul",{className:"steps",children:m.Children.toArray(Array.from(r))}))]}))})();function b1(){return a.createElement(a.Fragment,{},f1,h1,y1,p1)}const g1=(()=>{let r;return H("Swapping is so easy!",`Daisy.swap [
    swap.flip
    prop.children [
        Html.input [ prop.type'.checkbox ]
        Daisy.swapOn "Ha! 😈 SWAPPED!"
        Daisy.swapOff "Click me to swap"
    ]
]`,a.createElement("div",{children:[a.createElement("label",h(b("swap",d([["className","swap-flip"],(r=[a.createElement("input",{type:"checkbox"}),a.createElement("div",{className:"swap-on",children:"Ha! 😈 SWAPPED!"}),a.createElement("div",{className:"swap-off",children:"Click me to swap"})],["children",m.Children.toArray(Array.from(r))])]))))]}))})(),v1=(()=>{let r;return H("",`Daisy.swap [
    swap.rotate
    prop.className "text-9xl"
    prop.children [
        Html.input [ prop.type'.checkbox ]
        Daisy.swapOn "😈"
        Daisy.swapOff "😅"
    ]
]`,a.createElement("div",{children:[a.createElement("label",h(b("swap",d([["className","swap-rotate"],["className","text-9xl"],(r=[a.createElement("input",{type:"checkbox"}),a.createElement("div",{className:"swap-on",children:"😈"}),a.createElement("div",{className:"swap-off",children:"😅"})],["children",m.Children.toArray(Array.from(r))])]))))]}))})();function E1(){return a.createElement(a.Fragment,{},g1,v1)}const A1=(()=>{let r;return H("Simple",`Daisy.tabs [
    Daisy.tab "Tab 1"
    Daisy.tab [tab.active; prop.text "Tab 2"]
    Daisy.tab "Tab 3"
]`,a.createElement("div",{children:[(r=d([a.createElement("a",{className:"tab",children:"Tab 1"}),a.createElement("a",h(b("tab",d([["className","tab-active"],["children","Tab 2"]])))),a.createElement("a",{className:"tab",children:"Tab 3"})]),a.createElement("div",{className:"tabs",children:m.Children.toArray(Array.from(r))}))]}))})(),N1=(()=>{let r;return H("Bordered",`Daisy.tabs [
    tabs.border
    prop.children [
        Daisy.tab [prop.text "Tab 1"]
        Daisy.tab [tab.active; prop.text "Tab 2"]
        Daisy.tab [prop.text "Tab 3"]
    ]
]`,a.createElement("div",{children:[a.createElement("div",h(b("tabs",d([["className","tabs-border"],(r=[a.createElement("a",h(b("tab",v(["children","Tab 1"])))),a.createElement("a",h(b("tab",d([["className","tab-active"],["children","Tab 2"]])))),a.createElement("a",h(b("tab",v(["children","Tab 3"]))))],["children",m.Children.toArray(Array.from(r))])]))))]}))})(),S1=(()=>{let r;return H("Lifted",`Daisy.tabs [
    tabs.lift
    prop.children [
        Daisy.tab [prop.text "Tab 1"]
        Daisy.tab [tab.active; prop.text "Tab 2"]
        Daisy.tab [prop.text "Tab 3"]
    ]
]`,a.createElement("div",{children:[a.createElement("div",h(b("tabs",d([["className","tabs-lift"],(r=[a.createElement("a",h(b("tab",v(["children","Tab 1"])))),a.createElement("a",h(b("tab",d([["className","tab-active"],["children","Tab 2"]])))),a.createElement("a",h(b("tab",v(["children","Tab 3"]))))],["children",m.Children.toArray(Array.from(r))])]))))]}))})(),x1=(()=>{let r;return H("Boxed",`Daisy.tabs [
    tabs.box
    prop.children [
        Daisy.tab [prop.text "Tab 1"]
        Daisy.tab [tab.active; prop.text "Tab 2"]
        Daisy.tab [prop.text "Tab 3"]
    ]
]`,a.createElement("div",{children:[a.createElement("div",h(b("tabs",d([["className","tabs-box"],(r=[a.createElement("a",h(b("tab",v(["children","Tab 1"])))),a.createElement("a",h(b("tab",d([["className","tab-active"],["children","Tab 2"]])))),a.createElement("a",h(b("tab",v(["children","Tab 3"]))))],["children",m.Children.toArray(Array.from(r))])]))))]}))})(),C1=(()=>{let r;return H("Sizes",`let sizes = [
    tabs.xs, "xs"
    tabs.sm, "sm"
    tabs.md, "md"
    tabs.lg, "lg"
]
Html.div [
    for size, sizeText in sizes do
       Html.div [
            Daisy.tabs [
                size
                tabs.lift
                prop.children [
                    Daisy.tab [prop.text sizeText]
                    Daisy.tab [tab.active; prop.text sizeText]
                    Daisy.tab [prop.text sizeText]
                ]
            ]
       ]
]`,(r=we(ee(()=>Xe(o=>{let u,p;const y=o[1];return ue((u=v(a.createElement("div",h(b("tabs",d([o[0],["className","tabs-lift"],(p=[a.createElement("a",h(b("tab",v(["children",y])))),a.createElement("a",h(b("tab",d([["className","tab-active"],["children",y]])))),a.createElement("a",h(b("tab",v(["children",y]))))],["children",m.Children.toArray(Array.from(p))])]))))),a.createElement("div",{children:m.Children.toArray(Array.from(u))})))},[[["className","tabs-xs"],"xs"],[["className","tabs-sm"],"sm"],[["className","tabs-md"],"md"],[["className","tabs-lg"],"lg"]]))),a.createElement("div",{children:m.Children.toArray(Array.from(r))})))})();function D1(){return a.createElement(a.Fragment,{},A1,N1,S1,x1,C1)}const w1=(()=>{let r,i,o,u,p,y,E,w;return H("Simple",`Daisy.table [
    Html.thead [Html.tr [Html.th ""; Html.th "Name"; Html.th "Job"; Html.th "Favorite Color"]]
    Html.tbody [
        Html.tr [Html.td "1"; Html.td "Cy Ganderton"; Html.td "Quality Control Specialist"; Html.td "Blue"]
        Html.tr [Html.td "2"; Html.td "Hart Hagerty"; Html.td "Desktop Support Technician"; Html.td "Purple"]
        Html.tr [Html.td "3"; Html.td "Brice Swyre"; Html.td "Tax Accountant"; Html.td "Red"]
        Html.tr [Html.td "4"; Html.td "Marjy Ferencz"; Html.td "Office Assistant I"; Html.td "Crimson"]
    ]
]`,a.createElement("div",{children:[(r=d([(i=v((o=d([a.createElement("th",{children:[""]}),a.createElement("th",{children:["Name"]}),a.createElement("th",{children:["Job"]}),a.createElement("th",{children:["Favorite Color"]})]),a.createElement("tr",{children:m.Children.toArray(Array.from(o))}))),a.createElement("thead",{children:m.Children.toArray(Array.from(i))})),(u=d([(p=d([a.createElement("td",{children:["1"]}),a.createElement("td",{children:["Cy Ganderton"]}),a.createElement("td",{children:["Quality Control Specialist"]}),a.createElement("td",{children:["Blue"]})]),a.createElement("tr",{children:m.Children.toArray(Array.from(p))})),(y=d([a.createElement("td",{children:["2"]}),a.createElement("td",{children:["Hart Hagerty"]}),a.createElement("td",{children:["Desktop Support Technician"]}),a.createElement("td",{children:["Purple"]})]),a.createElement("tr",{children:m.Children.toArray(Array.from(y))})),(E=d([a.createElement("td",{children:["3"]}),a.createElement("td",{children:["Brice Swyre"]}),a.createElement("td",{children:["Tax Accountant"]}),a.createElement("td",{children:["Red"]})]),a.createElement("tr",{children:m.Children.toArray(Array.from(E))})),(w=d([a.createElement("td",{children:["4"]}),a.createElement("td",{children:["Marjy Ferencz"]}),a.createElement("td",{children:["Office Assistant I"]}),a.createElement("td",{children:["Crimson"]})]),a.createElement("tr",{children:m.Children.toArray(Array.from(w))}))]),a.createElement("tbody",{children:m.Children.toArray(Array.from(u))}))]),a.createElement("table",{className:"table",children:m.Children.toArray(Array.from(r))}))]}))})(),_1=(()=>{let r,i,o,u,p,y,E,w;return H("Use your favourite color for making row active",`Daisy.table [
    Html.thead [Html.tr [Html.th ""; Html.th "Name"; Html.th "Job"; Html.th "Favorite Color"]]
    Html.tbody [
        Html.tr [Html.td "1"; Html.td "Cy Ganderton"; Html.td "Quality Control Specialist"; Html.td "Blue"]
        Html.tr [prop.className "bg-yellow-300"; prop.children [Html.td "2"; Html.td "Hart Hagerty"; Html.td "Desktop Support Technician"; Html.td "Purple"]]
        Html.tr [Html.td "3"; Html.td "Brice Swyre"; Html.td "Tax Accountant"; Html.td "Red"]
        Html.tr [Html.td "4"; Html.td "Marjy Ferencz"; Html.td "Office Assistant I"; Html.td "Crimson"]
    ]
]`,a.createElement("div",{children:[(r=d([(i=v((o=d([a.createElement("th",{children:[""]}),a.createElement("th",{children:["Name"]}),a.createElement("th",{children:["Job"]}),a.createElement("th",{children:["Favorite Color"]})]),a.createElement("tr",{children:m.Children.toArray(Array.from(o))}))),a.createElement("thead",{children:m.Children.toArray(Array.from(i))})),(u=d([(p=d([a.createElement("td",{children:["1"]}),a.createElement("td",{children:["Cy Ganderton"]}),a.createElement("td",{children:["Quality Control Specialist"]}),a.createElement("td",{children:["Blue"]})]),a.createElement("tr",{children:m.Children.toArray(Array.from(p))})),a.createElement("tr",h(d([["className","bg-yellow-300"],(y=[a.createElement("td",{children:["2"]}),a.createElement("td",{children:["Hart Hagerty"]}),a.createElement("td",{children:["Desktop Support Technician"]}),a.createElement("td",{children:["Purple"]})],["children",m.Children.toArray(Array.from(y))])]))),(E=d([a.createElement("td",{children:["3"]}),a.createElement("td",{children:["Brice Swyre"]}),a.createElement("td",{children:["Tax Accountant"]}),a.createElement("td",{children:["Red"]})]),a.createElement("tr",{children:m.Children.toArray(Array.from(E))})),(w=d([a.createElement("td",{children:["4"]}),a.createElement("td",{children:["Marjy Ferencz"]}),a.createElement("td",{children:["Office Assistant I"]}),a.createElement("td",{children:["Crimson"]})]),a.createElement("tr",{children:m.Children.toArray(Array.from(w))}))]),a.createElement("tbody",{children:m.Children.toArray(Array.from(u))}))]),a.createElement("table",{className:"table",children:m.Children.toArray(Array.from(r))}))]}))})(),H1=(()=>{let r,i,o,u,p,y,E,w;return H("Hover row using classic Tailwind approach",`Daisy.table [
    Html.thead [Html.tr [Html.th ""; Html.th "Name"; Html.th "Job"; Html.th "Favorite Color"]]
    Html.tbody [
        Html.tr [Html.td "1"; Html.td "Cy Ganderton"; Html.td "Quality Control Specialist"; Html.td "Blue"]
        Html.tr [prop.className "hover:bg-yellow-300"; prop.children [Html.td "2"; Html.td "Hart Hagerty"; Html.td "Desktop Support Technician"; Html.td "Purple"]]
        Html.tr [Html.td "3"; Html.td "Brice Swyre"; Html.td "Tax Accountant"; Html.td "Red"]
        Html.tr [Html.td "4"; Html.td "Marjy Ferencz"; Html.td "Office Assistant I"; Html.td "Crimson"]
    ]
]`,a.createElement("div",{children:[(r=d([(i=v((o=d([a.createElement("th",{children:[""]}),a.createElement("th",{children:["Name"]}),a.createElement("th",{children:["Job"]}),a.createElement("th",{children:["Favorite Color"]})]),a.createElement("tr",{children:m.Children.toArray(Array.from(o))}))),a.createElement("thead",{children:m.Children.toArray(Array.from(i))})),(u=d([(p=d([a.createElement("td",{children:["1"]}),a.createElement("td",{children:["Cy Ganderton"]}),a.createElement("td",{children:["Quality Control Specialist"]}),a.createElement("td",{children:["Blue"]})]),a.createElement("tr",{children:m.Children.toArray(Array.from(p))})),a.createElement("tr",h(d([["className","hover:bg-yellow-300"],(y=[a.createElement("td",{children:["2"]}),a.createElement("td",{children:["Hart Hagerty"]}),a.createElement("td",{children:["Desktop Support Technician"]}),a.createElement("td",{children:["Purple"]})],["children",m.Children.toArray(Array.from(y))])]))),(E=d([a.createElement("td",{children:["3"]}),a.createElement("td",{children:["Brice Swyre"]}),a.createElement("td",{children:["Tax Accountant"]}),a.createElement("td",{children:["Red"]})]),a.createElement("tr",{children:m.Children.toArray(Array.from(E))})),(w=d([a.createElement("td",{children:["4"]}),a.createElement("td",{children:["Marjy Ferencz"]}),a.createElement("td",{children:["Office Assistant I"]}),a.createElement("td",{children:["Crimson"]})]),a.createElement("tr",{children:m.Children.toArray(Array.from(w))}))]),a.createElement("tbody",{children:m.Children.toArray(Array.from(u))}))]),a.createElement("table",{className:"table",children:m.Children.toArray(Array.from(r))}))]}))})(),T1=(()=>{let r,i,o,u,p,y,E,w;return H("Zebra",`Daisy.table [
    table.zebra
    prop.children [
        Html.thead [Html.tr [Html.th ""; Html.th "Name"; Html.th "Job"; Html.th "Favorite Color"]]
        Html.tbody [
            Html.tr [Html.td "1"; Html.td "Cy Ganderton"; Html.td "Quality Control Specialist"; Html.td "Blue"]
            Html.tr [Html.td "2"; Html.td "Hart Hagerty"; Html.td "Desktop Support Technician"; Html.td "Purple"]
            Html.tr [Html.td "3"; Html.td "Brice Swyre"; Html.td "Tax Accountant"; Html.td "Red"]
            Html.tr [Html.td "4"; Html.td "Marjy Ferencz"; Html.td "Office Assistant I"; Html.td "Crimson"]
        ]
    ]
]`,a.createElement("div",{children:[a.createElement("table",h(b("table",d([["className","table-zebra"],(r=[(i=v((o=d([a.createElement("th",{children:[""]}),a.createElement("th",{children:["Name"]}),a.createElement("th",{children:["Job"]}),a.createElement("th",{children:["Favorite Color"]})]),a.createElement("tr",{children:m.Children.toArray(Array.from(o))}))),a.createElement("thead",{children:m.Children.toArray(Array.from(i))})),(u=d([(p=d([a.createElement("td",{children:["1"]}),a.createElement("td",{children:["Cy Ganderton"]}),a.createElement("td",{children:["Quality Control Specialist"]}),a.createElement("td",{children:["Blue"]})]),a.createElement("tr",{children:m.Children.toArray(Array.from(p))})),(y=d([a.createElement("td",{children:["2"]}),a.createElement("td",{children:["Hart Hagerty"]}),a.createElement("td",{children:["Desktop Support Technician"]}),a.createElement("td",{children:["Purple"]})]),a.createElement("tr",{children:m.Children.toArray(Array.from(y))})),(E=d([a.createElement("td",{children:["3"]}),a.createElement("td",{children:["Brice Swyre"]}),a.createElement("td",{children:["Tax Accountant"]}),a.createElement("td",{children:["Red"]})]),a.createElement("tr",{children:m.Children.toArray(Array.from(E))})),(w=d([a.createElement("td",{children:["4"]}),a.createElement("td",{children:["Marjy Ferencz"]}),a.createElement("td",{children:["Office Assistant I"]}),a.createElement("td",{children:["Crimson"]})]),a.createElement("tr",{children:m.Children.toArray(Array.from(w))}))]),a.createElement("tbody",{children:m.Children.toArray(Array.from(u))}))],["children",m.Children.toArray(Array.from(r))])]))))]}))})(),k1=(()=>{let r,i,o,u,p,y,E,w;return H("Table With Visuals",`let row (url: string, name: string, country: string, group: string, title: string, color: string) =
    Html.tr [
        Html.td [Daisy.checkbox []]
        Html.td [
            Html.div [
                prop.classes ["flex"; "items-center"; "space-x-3"]
                prop.children [
                    Daisy.avatar [
                        Html.div [
                            mask.squircle ++ prop.className "w-12 h-12"

                            prop.children [
                                Html.img [
                                    prop.src url
                                ]
                            ]
                        ]
                    ]
                    Html.div [
                        Html.div name
                        Html.div country
                    ]
                ]
            ]
        ]
        Html.td [
            Html.span group
            Html.br []
            Daisy.badge [badge.sm; badge.outline; prop.text title]
        ]
        Html.td color
        Html.td [Daisy.button.button [button.ghost; button.xs; prop.text "Details"]]
    ]

Daisy.table [
    prop.children [
        Html.thead [
            Html.tr [
                Html.th [Daisy.checkbox []]
                Html.th "Name"
                Html.th "Job"
                Html.th "Favorite Color"
                Html.th ""
            ]
        ]


        Html.tbody [
            row ("https://img.daisyui.com/images/profile/demo/2@94.webp", "Hart Hagerty", "United States", "Zemlak, Daniel and Leannon", "Desktop Support Technician", "Purple")
            row ("https://img.daisyui.com/images/profile/demo/3@94.webp", "Brice Swyre", "China", "Carroll Group", "Tax Accountant", "Red")
            row ("https://img.daisyui.com/images/profile/demo/4@94.webp", "Marjy Ferencz", "Russia", "Rowe-Schoen", "Office Assistant I", "Crimson")
            row ("https://img.daisyui.com/images/profile/demo/5@94.webp", "Yancy Tear", "Brazil", "Wyman-Ledner", "Community Outreach Specialist", "Indigo")
        ]
        Html.thead [
            Html.tr [
                Html.th ""
                Html.th "Name"
                Html.th "Job"
                Html.th "Favorite Color"
                Html.th ""
            ]
        ]
    ]
]`,(r=N=>{let z,M,q,B,Q,Z,W,ge;const ce=d([(z=v(a.createElement("input",h(b("checkbox",v(["type","checkbox"]))))),a.createElement("td",{children:m.Children.toArray(Array.from(z))})),(M=v(a.createElement("div",h(d([["className",fn(" ",["flex","items-center","space-x-3"])],(q=[(B=v(a.createElement("div",h(d([rt(["className","mask mask-squircle"],["className","w-12 h-12"]),(Q=[a.createElement("img",{src:N[0]})],["children",m.Children.toArray(Array.from(Q))])])))),a.createElement("div",{className:"avatar",children:m.Children.toArray(Array.from(B))})),(Z=d([a.createElement("div",{children:[N[1]]}),a.createElement("div",{children:[N[2]]})]),a.createElement("div",{children:m.Children.toArray(Array.from(Z))}))],["children",m.Children.toArray(Array.from(q))])])))),a.createElement("td",{children:m.Children.toArray(Array.from(M))})),(W=d([a.createElement("span",{children:[N[3]]}),a.createElement("br",{}),a.createElement("div",h(b("badge",d([["className","badge-sm"],["className","badge-outline"],["children",N[4]]]))))]),a.createElement("td",{children:m.Children.toArray(Array.from(W))})),a.createElement("td",{children:[N[5]]}),(ge=v(a.createElement("button",h(b("btn",d([["className","btn-ghost"],["className","btn-xs"],["children","Details"]]))))),a.createElement("td",{children:m.Children.toArray(Array.from(ge))}))]);return a.createElement("tr",{children:m.Children.toArray(Array.from(ce))})},a.createElement("div",{children:[a.createElement("table",h(b("table",v((i=[(o=v((u=d([(p=v(a.createElement("input",h(b("checkbox",v(["type","checkbox"]))))),a.createElement("th",{children:m.Children.toArray(Array.from(p))})),a.createElement("th",{children:["Name"]}),a.createElement("th",{children:["Job"]}),a.createElement("th",{children:["Favorite Color"]}),a.createElement("th",{children:[""]})]),a.createElement("tr",{children:m.Children.toArray(Array.from(u))}))),a.createElement("thead",{children:m.Children.toArray(Array.from(o))})),(y=d([r(["https://img.daisyui.com/images/profile/demo/2@94.webp","Hart Hagerty","United States","Zemlak, Daniel and Leannon","Desktop Support Technician","Purple"]),r(["https://img.daisyui.com/images/profile/demo/3@94.webp","Brice Swyre","China","Carroll Group","Tax Accountant","Red"]),r(["https://img.daisyui.com/images/profile/demo/4@94.webp","Marjy Ferencz","Russia","Rowe-Schoen","Office Assistant I","Crimson"]),r(["https://img.daisyui.com/images/profile/demo/5@94.webp","Yancy Tear","Brazil","Wyman-Ledner","Community Outreach Specialist","Indigo"])]),a.createElement("tbody",{children:m.Children.toArray(Array.from(y))})),(E=v((w=d([a.createElement("th",{children:[""]}),a.createElement("th",{children:["Name"]}),a.createElement("th",{children:["Job"]}),a.createElement("th",{children:["Favorite Color"]}),a.createElement("th",{children:[""]})]),a.createElement("tr",{children:m.Children.toArray(Array.from(w))}))),a.createElement("thead",{children:m.Children.toArray(Array.from(E))}))],["children",m.Children.toArray(Array.from(i))])))))]})))})(),z1=(()=>{let r,i,o,u,p,y,E;return H("Very tiny table",`let header = ["";"NAME";"JOB";"COMPANY";"LOCATION";"LAST LOGIN";"FAVORITE COLOR"]
let data = [
    ["1";"Cy Ganderton";"Quality Control Specialist";"Littel; Schaden and Vandervort";"Canada";"12/16/2020";"Blue"]
    ["2";"Hart Hagerty";"Desktop Support Technician";"Zemlak; Daniel and Leannon";"United States";"12/5/2020";"Purple"]
    ["3";"Brice Swyre";"Tax Accountant";"Carroll Group";"China";"8/15/2020";"Red"]
    ["4";"Marjy Ferencz";"Office Assistant I";"Rowe-Schoen";"Russia";"3/25/2021";"Crimson"]
    ["5";"Yancy Tear";"Community Outreach Specialist";"Wyman-Ledner";"Brazil";"5/22/2020";"Indigo"]
    ["6";"Irma Vasilik";"Editor";"Wiza; Bins and Emard";"Venezuela";"12/8/2020";"Purple"]
    ["7";"Meghann Durtnal";"Staff Accountant IV";"Schuster-Schimmel";"Philippines";"2/17/2021";"Yellow"]
    ["8";"Sammy Seston";"Accountant I";"O'Hara; Welch and Keebler";"Indonesia";"5/23/2020";"Crimson"]
    ["9";"Lesya Tinham";"Safety Technician IV";"Turner-Kuhlman";"Philippines";"2/21/2021";"Maroon"]
    ["10";"Zaneta Tewkesbury";"VP Marketing";"Sauer LLC";"Chad";"6/23/2020";"Green"]
    ["11";"Andy Tipple";"Librarian";"Hilpert Group";"Poland";"7/9/2020";"Indigo"]
    ["12";"Sophi Biles";"Recruiting Manager";"Gutmann Inc";"Indonesia";"2/12/2021";"Maroon"]
    ["13";"Florida Garces";"Web Developer IV";"Gaylord; Pacocha and Baumbach";"Poland";"5/31/2020";"Purple"]
    ["14";"Maribeth Popping";"Analyst Programmer";"Deckow-Pouros";"Portugal";"4/27/2021";"Aquamarine"]
    ["15";"Moritz Dryburgh";"Dental Hygienist";"Schiller; Cole and Hackett";"Sri Lanka";"8/8/2020";"Crimson"]
    ["16";"Reid Semiras";"Teacher";"Sporer; Sipes and Rogahn";"Poland";"7/30/2020";"Green"]
    ["17";"Alec Lethby";"Teacher";"Reichel; Glover and Hamill";"China";"2/28/2021";"Khaki"]
    ["18";"Aland Wilber";"Quality Control Specialist";"Kshlerin; Rogahn and Swaniawski";"Czech Republic";"9/29/2020";"Purple"]
    ["19";"Teddie Duerden";"Staff Accountant III";"Pouros; Ullrich and Windler";"France";"10/27/2020";"Aquamarine"]
    ["20";"Lorelei Blackstone";"Data Coordiator";"Witting; Kutch and Greenfelder";"Kazakhstan";"6/3/2020";"Red"]
]

Daisy.table [
    table.xs // note sizing here
    prop.children [
        Html.thead [Html.tr [for h in header do Html.th h]]
        Html.tbody [
            for row in data do
                Html.tr [
                    for col in row do Html.td col
                ]
        ]
        Html.tfoot [Html.tr [for h in header do Html.th h]]
    ]
]`,(r=d(["","NAME","JOB","COMPANY","LOCATION","LAST LOGIN","FAVORITE COLOR"]),a.createElement("div",{children:[a.createElement("table",h(b("table",d([["className","table-xs"],(i=[(o=v((u=we(ee(()=>dn(D=>a.createElement("th",{children:[D]}),r))),a.createElement("tr",{children:m.Children.toArray(Array.from(u))}))),a.createElement("thead",{children:m.Children.toArray(Array.from(o))})),(p=we(ee(()=>dn(D=>{const N=we(ee(()=>dn(z=>a.createElement("td",{children:[z]}),D)));return a.createElement("tr",{children:m.Children.toArray(Array.from(N))})},[d(["1","Cy Ganderton","Quality Control Specialist","Littel; Schaden and Vandervort","Canada","12/16/2020","Blue"]),d(["2","Hart Hagerty","Desktop Support Technician","Zemlak; Daniel and Leannon","United States","12/5/2020","Purple"]),d(["3","Brice Swyre","Tax Accountant","Carroll Group","China","8/15/2020","Red"]),d(["4","Marjy Ferencz","Office Assistant I","Rowe-Schoen","Russia","3/25/2021","Crimson"]),d(["5","Yancy Tear","Community Outreach Specialist","Wyman-Ledner","Brazil","5/22/2020","Indigo"]),d(["6","Irma Vasilik","Editor","Wiza; Bins and Emard","Venezuela","12/8/2020","Purple"]),d(["7","Meghann Durtnal","Staff Accountant IV","Schuster-Schimmel","Philippines","2/17/2021","Yellow"]),d(["8","Sammy Seston","Accountant I","O'Hara; Welch and Keebler","Indonesia","5/23/2020","Crimson"]),d(["9","Lesya Tinham","Safety Technician IV","Turner-Kuhlman","Philippines","2/21/2021","Maroon"]),d(["10","Zaneta Tewkesbury","VP Marketing","Sauer LLC","Chad","6/23/2020","Green"]),d(["11","Andy Tipple","Librarian","Hilpert Group","Poland","7/9/2020","Indigo"]),d(["12","Sophi Biles","Recruiting Manager","Gutmann Inc","Indonesia","2/12/2021","Maroon"]),d(["13","Florida Garces","Web Developer IV","Gaylord; Pacocha and Baumbach","Poland","5/31/2020","Purple"]),d(["14","Maribeth Popping","Analyst Programmer","Deckow-Pouros","Portugal","4/27/2021","Aquamarine"]),d(["15","Moritz Dryburgh","Dental Hygienist","Schiller; Cole and Hackett","Sri Lanka","8/8/2020","Crimson"]),d(["16","Reid Semiras","Teacher","Sporer; Sipes and Rogahn","Poland","7/30/2020","Green"]),d(["17","Alec Lethby","Teacher","Reichel; Glover and Hamill","China","2/28/2021","Khaki"]),d(["18","Aland Wilber","Quality Control Specialist","Kshlerin; Rogahn and Swaniawski","Czech Republic","9/29/2020","Purple"]),d(["19","Teddie Duerden","Staff Accountant III","Pouros; Ullrich and Windler","France","10/27/2020","Aquamarine"]),d(["20","Lorelei Blackstone","Data Coordiator","Witting; Kutch and Greenfelder","Kazakhstan","6/3/2020","Red"])]))),a.createElement("tbody",{children:m.Children.toArray(Array.from(p))})),(y=v((E=we(ee(()=>dn(D=>a.createElement("th",{children:[D]}),r))),a.createElement("tr",{children:m.Children.toArray(Array.from(E))}))),a.createElement("tfoot",{children:m.Children.toArray(Array.from(y))}))],["children",m.Children.toArray(Array.from(i))])]))))]})))})();function M1(){return a.createElement(a.Fragment,{},w1,_1,H1,T1,k1,z1)}const O1=H("If a checked checkbox input or a checked radio input with theme-controller class exists in the page, The page will have the same theme as that input's value.",`Daisy.toggle [
    theme.controller
    prop.value "synthwave"
]`,a.createElement("input",h(b("toggle",d([["type","checkbox"],["className","theme-controller"],["value","synthwave"]])))));function R1(){return a.createElement(a.Fragment,{},O1)}const U1=(()=>{let r,i,o,u,p,y,E;return H("Create easy timeline",`Daisy.timeline [
    Html.li [
        Daisy.timelineStart "1984"
        Daisy.timelineMiddle [ Html.faIcon "fa-solid fa-check-circle" ]
        Daisy.timelineEnd [ timeline.box; prop.text "First Macintosh computer" ]
        Html.hr []
    ]
    Html.li [
        Html.hr []
        Daisy.timelineStart "1998"
        Daisy.timelineMiddle [ Html.faIcon "fa-solid fa-check-circle" ]
        Daisy.timelineEnd [ timeline.box; prop.text "iMac" ]
        Html.hr []
    ]
    Html.li [
        Html.hr []
        Daisy.timelineStart "2001"
        Daisy.timelineMiddle [ Html.faIcon "fa-solid fa-check-circle" ]
        Daisy.timelineEnd [ timeline.box; prop.text "iPod" ]
    ]
]`,(r=d([(i=d([a.createElement("div",{className:"timeline-start",children:"1984"}),(o=v(a.createElement("i",{className:"fa-solid fa-check-circle"})),a.createElement("div",{className:"timeline-middle",children:m.Children.toArray(Array.from(o))})),a.createElement("div",h(b("timeline-end",d([["className","timeline-box"],["children","First Macintosh computer"]])))),a.createElement("hr",{})]),a.createElement("li",{children:m.Children.toArray(Array.from(i))})),(u=d([a.createElement("hr",{}),a.createElement("div",{className:"timeline-start",children:"1998"}),(p=v(a.createElement("i",{className:"fa-solid fa-check-circle"})),a.createElement("div",{className:"timeline-middle",children:m.Children.toArray(Array.from(p))})),a.createElement("div",h(b("timeline-end",d([["className","timeline-box"],["children","iMac"]])))),a.createElement("hr",{})]),a.createElement("li",{children:m.Children.toArray(Array.from(u))})),(y=d([a.createElement("hr",{}),a.createElement("div",{className:"timeline-start",children:"2001"}),(E=v(a.createElement("i",{className:"fa-solid fa-check-circle"})),a.createElement("div",{className:"timeline-middle",children:m.Children.toArray(Array.from(E))})),a.createElement("div",h(b("timeline-end",d([["className","timeline-box"],["children","iPod"]]))))]),a.createElement("li",{children:m.Children.toArray(Array.from(y))}))]),a.createElement("ul",{className:"timeline",children:m.Children.toArray(Array.from(r))})))})(),B1=(()=>{let r,i,o,u,p,y,E;return H("Timeline can be also vertical and from both sides",`Daisy.timeline [
    timeline.vertical
    prop.children [
        Html.li [
            Daisy.timelineStart [ timeline.box; prop.text "1984" ]
            Daisy.timelineMiddle [ Html.faIcon "fa-solid fa-check-circle" ]
            Html.hr []
        ]
        Html.li [
            Html.hr []
            Daisy.timelineMiddle [ Html.faIcon "fa-solid fa-check-circle" ]
            Daisy.timelineEnd [ timeline.box; prop.text "iMac" ]
            Html.hr [ color.bgPrimary ]
        ]
        Html.li [
            Html.hr [ color.bgPrimary ]
            Daisy.timelineStart [ timeline.box; prop.text "iPod" ]
            Daisy.timelineMiddle [ Html.faIcon "fa-solid fa-check-circle text-primary" ]
        ]

    ]
]`,a.createElement("ul",h(b("timeline",d([["className","timeline-vertical"],(r=[(i=d([a.createElement("div",h(b("timeline-start",d([["className","timeline-box"],["children","1984"]])))),(o=v(a.createElement("i",{className:"fa-solid fa-check-circle"})),a.createElement("div",{className:"timeline-middle",children:m.Children.toArray(Array.from(o))})),a.createElement("hr",{})]),a.createElement("li",{children:m.Children.toArray(Array.from(i))})),(u=d([a.createElement("hr",{}),(p=v(a.createElement("i",{className:"fa-solid fa-check-circle"})),a.createElement("div",{className:"timeline-middle",children:m.Children.toArray(Array.from(p))})),a.createElement("div",h(b("timeline-end",d([["className","timeline-box"],["children","iMac"]])))),a.createElement("hr",{className:"bg-primary"})]),a.createElement("li",{children:m.Children.toArray(Array.from(u))})),(y=d([a.createElement("hr",{className:"bg-primary"}),a.createElement("div",h(b("timeline-start",d([["className","timeline-box"],["children","iPod"]])))),(E=v(a.createElement("i",{className:"fa-solid fa-check-circle text-primary"})),a.createElement("div",{className:"timeline-middle",children:m.Children.toArray(Array.from(E))}))]),a.createElement("li",{children:m.Children.toArray(Array.from(y))}))],["children",m.Children.toArray(Array.from(r))])])))))})();function q1(){return a.createElement(a.Fragment,{},U1,B1)}function Qo(r){return a.createElement("div",{className:"relative",children:r})}const L1=(()=>{let r;return H("In the middle",`Daisy.toast [
    toast.center
    toast.middle
    prop.children [
        Daisy.alert [
            alert.info
            prop.text "New mail arrived."
        ]
    ]
]`,Qo(a.createElement("div",h(b("toast",d([["className","toast-center"],["className","toast-middle"],["className","absolute"],(r=[a.createElement("div",h(b("alert",d([["className","alert-info"],["children","New mail arrived."]]))))],["children",m.Children.toArray(Array.from(r))])]))))))})(),G1=(()=>{let r;return H("On the bottom right",`Daisy.toast [
    toast.bottom
    prop.children [
        Daisy.alert [
            alert.warning
            prop.text "F# is awesome!"
        ]
    ]
]`,Qo(a.createElement("div",h(b("toast",d([["className","toast-bottom"],["className","absolute"],(r=[a.createElement("div",h(b("alert",d([["className","alert-warning"],["children","F# is awesome!"]]))))],["children",m.Children.toArray(Array.from(r))])]))))))})(),V1=(()=>{let r;return H("Top left",`Daisy.toast [
    toast.top
    toast.start
    prop.children [
        Daisy.alert [
            alert.success
            prop.text "Payment successful"
        ]
    ]
]`,Qo(a.createElement("div",h(b("toast",d([["className","toast-top"],["className","toast-start"],["className","absolute"],(r=[a.createElement("div",h(b("alert",d([["className","alert-success"],["children","Payment successful"]]))))],["children",m.Children.toArray(Array.from(r))])]))))))})();function j1(){return a.createElement(a.Fragment,{},L1,G1,V1)}const Y1=H("Simple",`Daisy.tooltip [
    tooltip.text "hello"
    prop.children [Daisy.button.button "Hover me"]
]`,a.createElement("div",{children:[a.createElement("div",h(b("tooltip",d([["data-tip","hello"],(()=>{const r=[a.createElement("button",{className:"btn",children:"Hover me"})];return["children",m.Children.toArray(Array.from(r))]})()]))))]})),Q1=(()=>{let r;return H("Directions",`let directions =
    [ tooltip.left  , "left"
      tooltip.bottom, "bottom"
      tooltip.right , "right" ]

Html.div [
    for direction, directionText in directions do
        Daisy.tooltip [
            prop.className "ml-8"
            tooltip.text directionText
            direction
            prop.children [Daisy.button.button directionText]
        ]
]`,(r=we(ee(()=>Xe(o=>{let u;const p=o[1];return ue(a.createElement("div",h(b("tooltip",d([["className","ml-8"],["data-tip",p],o[0],(u=[a.createElement("button",{className:"btn",children:p})],["children",m.Children.toArray(Array.from(u))])])))))},[[["className","tooltip-left"],"left"],[["className","tooltip-bottom"],"bottom"],[["className","tooltip-right"],"right"]]))),a.createElement("div",{children:m.Children.toArray(Array.from(r))})))})(),X1=(()=>{let r;return H("Colors",`let colors =
    [ tooltip.primary  , button.primary  , "primary"
      tooltip.secondary, button.secondary, "secondary"
      tooltip.accent   , button.accent   , "accent"
      tooltip.info     , button.info     , "info"
      tooltip.success  , button.success  , "success"
      tooltip.warning  , button.warning  , "warning"
      tooltip.error    , button.error    , "error" ]

Html.div [
    for color, buttonColor, colorText in colors do
        Daisy.tooltip [
            prop.className "mt-8"
            color
            tooltip.open'
            tooltip.text colorText
            prop.children [Daisy.button.button [buttonColor; prop.text colorText]]
        ]
]`,(r=we(ee(()=>Xe(o=>{let u;const p=o[2];return ue(a.createElement("div",h(b("tooltip",d([["className","mt-8"],o[0],["className","tooltip-open"],["data-tip",p],(u=[a.createElement("button",h(b("btn",d([o[1],["children",p]]))))],["children",m.Children.toArray(Array.from(u))])])))))},[[["className","tooltip-primary"],["className","btn-primary"],"primary"],[["className","tooltip-secondary"],["className","btn-secondary"],"secondary"],[["className","tooltip-accent"],["className","btn-accent"],"accent"],[["className","tooltip-info"],["className","btn-info"],"info"],[["className","tooltip-success"],["className","btn-success"],"success"],[["className","tooltip-warning"],["className","btn-warning"],"warning"],[["className","tooltip-error"],["className","btn-error"],"error"]]))),a.createElement("div",{children:m.Children.toArray(Array.from(r))})))})();function Z1(){return a.createElement(a.Fragment,{},Y1,Q1,X1)}const K1=(()=>{let r;return H("Validator with hint - try typing an invalid email address and then click away",`Html.div [
    Daisy.validator.email [
        prop.required true
        prop.placeholder "mail@site.com"
    ]
    Daisy.validatorHint "Enter valid email address"
]`,(r=d([a.createElement("input",h(b("input validator",d([["type","email"],["required",!0],["placeholder","mail@site.com"]])))),a.createElement("div",{className:"validator-hint",children:"Enter valid email address"})]),a.createElement("div",{children:m.Children.toArray(Array.from(r))})))})(),F1=(()=>{let r,i;return H("Password validator with hint - try typing something and then click away",`Html.div [
    Daisy.validator.password [
        prop.required true
        prop.placeholder "Password"
        prop.minLength 8
        prop.pattern (Regex "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")
        prop.title "Must be more than 8 characters, including number, lowercase letter, uppercase letter"
    ]
    Daisy.validatorHint [
        Html.text "Must be more than 8 characters, including"
        Html.br []
        Html.text "At least one number"
        Html.br []
        Html.text "At least one lowercase letter"
        Html.br []
        Html.text "At least one uppercase number"
        Html.br []
    ]
]`,(r=d([a.createElement("input",h(b("input validator",d([["type","password"],["required",!0],["placeholder","Password"],["minLength",8],["pattern",/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/gu],["title","Must be more than 8 characters, including number, lowercase letter, uppercase letter"]])))),(i=d(["Must be more than 8 characters, including",a.createElement("br",{}),"At least one number",a.createElement("br",{}),"At least one lowercase letter",a.createElement("br",{}),"At least one uppercase number",a.createElement("br",{})]),a.createElement("div",{className:"validator-hint",children:m.Children.toArray(Array.from(i))}))]),a.createElement("div",{children:m.Children.toArray(Array.from(r))})))})(),J1=(()=>{let r;return H("Toggle validator with hint - try toggling and untoggling",`Html.div [
    Daisy.validator.toggle [
        prop.required true
        prop.title "Required"
    ]
    Daisy.validatorHint "Required"
]`,(r=d([a.createElement("input",h(b("toggle validator",d([["type","checkbox"],["required",!0],["title","Required"]])))),a.createElement("div",{className:"validator-hint",children:"Required"})]),a.createElement("div",{children:m.Children.toArray(Array.from(r))})))})();function $1(){return a.createElement(a.Fragment,{},K1,F1,J1)}const W1=H("File Input with border",`Daisy.fieldset [
    Daisy.fieldsetLabel "File Selection"
    Daisy.file [file.bordered]
]`,a.createElement("div",{children:[(()=>{const r=d([a.createElement("label",{className:"fieldset-label",children:"File Selection"}),a.createElement("input",h(b("file-input",d([["type","file"],["className","file-input-bordered"]]))))]);return a.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(r))})})()]})),I1=(()=>{let r,i;return H("File Input with border",`Daisy.card [
    prop.className "p-10 bg-base-200"
    prop.children [
        Daisy.fieldset [
            Daisy.fieldsetLabel "File Selection"
            Daisy.file [file.bordered]
        ]
    ]
]`,a.createElement("div",h(b("card",d([["className","p-10 bg-base-200"],(r=[(i=d([a.createElement("label",{className:"fieldset-label",children:"File Selection"}),a.createElement("input",h(b("file-input",d([["type","file"],["className","file-input-bordered"]]))))]),a.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(i))}))],["children",m.Children.toArray(Array.from(r))])])))))})(),P1=(()=>{let r,i;return H("File Input ghost (no background)",`Daisy.card [
    prop.className "p-10 bg-base-200"
    prop.children [
        Daisy.fieldset [
            Daisy.fieldsetLabel "File Selection"
            Daisy.file [file.ghost]
        ]
    ]
]`,a.createElement("div",h(b("card",d([["className","p-10 bg-base-200"],(r=[(i=d([a.createElement("label",{className:"fieldset-label",children:"File Selection"}),a.createElement("input",h(b("file-input",d([["type","file"],["className","file-input-ghost"]]))))]),a.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(i))}))],["children",m.Children.toArray(Array.from(r))])])))))})(),eA=(()=>{let r;return H("File Input ghost (no background)",`Daisy.fieldset [
    Daisy.fieldsetLabel "Disabled file"
    Daisy.file [file.bordered; prop.disabled true]
]`,(r=d([a.createElement("label",{className:"fieldset-label",children:"Disabled file"}),a.createElement("input",h(b("file-input",d([["type","file"],["className","file-input-bordered"],["disabled",!0]]))))]),a.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(r))})))})(),tA=(()=>{let r;return H("File Input with colors",`let colors = [
    file.primary  , "primary"
    file.secondary, "secondary"
    file.accent   , "accent"
    file.info     , "info"
    file.success  , "success"
    file.warning  , "warning"
    file.error    , "error"
]
Daisy.fieldset [
    for color, colorText in colors do
        Daisy.fieldsetLabel colorText
        Daisy.file [color; file.bordered]
]`,(r=we(ee(()=>Xe(o=>Ke(ue(a.createElement("label",{className:"fieldset-label",children:o[1]})),ee(()=>ue(a.createElement("input",h(b("file-input",d([["type","file"],o[0],["className","file-input-bordered"]]))))))),[[["className","file-input-primary"],"primary"],[["className","file-input-secondary"],"secondary"],[["className","file-input-accent"],"accent"],[["className","file-input-info"],"info"],[["className","file-input-success"],"success"],[["className","file-input-warning"],"warning"],[["className","file-input-error"],"error"]]))),a.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(r))})))})(),nA=(()=>{let r;return H("File Input with sizes",`let sizes = [
    file.xs, "xs"
    file.sm, "sm"
    file.md, "md"
    file.lg, "lg"
]
Daisy.fieldset [
    for size, sizeText in sizes do
        Daisy.fieldsetLabel sizeText
        Daisy.file [size; file.bordered]
]`,(r=we(ee(()=>Xe(o=>Ke(ue(a.createElement("label",{className:"fieldset-label",children:o[1]})),ee(()=>ue(a.createElement("input",h(b("file-input",d([["type","file"],o[0],["className","file-input-bordered"]]))))))),[[["className","file-input-xs"],"xs"],[["className","file-input-sm"],"sm"],[["className","file-input-md"],"md"],[["className","file-input-lg"],"lg"]]))),a.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(r))})))})(),lA=(()=>{let r,i;return H("File Input with sizes",`Daisy.fieldset [
    Daisy.fieldsetLabel "Connected"
    Html.div [
        prop.className "relative"
        prop.children [
            Daisy.file [file.bordered; file.primary]
            Daisy.button.button [
                button.primary
                prop.className "absolute top-0 right-0 rounded-l-none"
                prop.text "Upload"
            ]
        ]
    ]
]`,(r=d([a.createElement("label",{className:"fieldset-label",children:"Connected"}),a.createElement("div",h(d([["className","relative"],(i=[a.createElement("input",h(b("file-input",d([["type","file"],["className","file-input-bordered"],["className","file-input-primary"],["className","w-full pr-16"]])))),a.createElement("button",h(b("btn",d([["className","btn-primary"],["className","absolute top-0 right-0 rounded-l-none"],["children","Upload"]]))))],["children",m.Children.toArray(Array.from(i))])])))]),a.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(r))})))})();function aA(){return a.createElement(a.Fragment,{},W1,I1,P1,eA,tA,nA,lA)}const rA=H("Basic","Daisy.checkbox []",a.createElement("input",h(b("checkbox",v(["type","checkbox"]))))),iA=H("Checked","Daisy.checkbox [prop.defaultChecked true]",a.createElement("input",h(b("checkbox",d([["type","checkbox"],["defaultChecked",!0]]))))),cA=(()=>{let r,i;return H("Basic Label",`Daisy.fieldset [
    Daisy.fieldsetLabel [
        prop.className "justify-between"
        prop.children [
            Html.text "Remember me"
            Daisy.checkbox []
        ]
    ]
]`,(r=v(a.createElement("label",h(b("fieldset-label",d([["className","justify-between"],(i=["Remember me",a.createElement("input",h(b("checkbox",v(["type","checkbox"]))))],["children",m.Children.toArray(Array.from(i))])]))))),a.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(r))})))})(),sA=(()=>{let r;return H("All Sizes and Colors",`let colors = [
    checkbox.primary  , "primary"
    checkbox.secondary, "secondary"
    checkbox.accent   , "accent"
]

let sizes = [
    checkbox.lg, "lg"
    checkbox.md, "md"
    checkbox.sm, "sm"
    checkbox.xs, "xs"
]

Html.div [
    for size, sizeText in sizes do
        for color, colorText in colors do
            Daisy.fieldset [
                Daisy.fieldsetLabel [
                    prop.className "justify-between"
                    prop.children [
                        Html.text (sprintf "%s - %s" sizeText colorText)
                        Daisy.checkbox [color; size; prop.defaultChecked true]
                    ]
                ]
            ]
            Daisy.fieldset [
                Daisy.fieldsetLabel [
                    prop.className "justify-between"
                    prop.children [
                        Html.text (sprintf "%s - %s (disabled)" sizeText colorText)
                        Daisy.checkbox [color; size; prop.disabled true; prop.defaultChecked true]
                    ]
                ]
            ]
]`,(r=we(ee(()=>Xe(o=>{const u=o[1],p=o[0];return Xe(y=>{let E,w;const D=y[1],N=y[0];return Ke(ue((E=v(a.createElement("label",h(b("fieldset-label",d([["className","justify-between"],(w=[Ji(Fi("%s - %s"))(u)(D),a.createElement("input",h(b("checkbox",d([["type","checkbox"],N,p,["defaultChecked",!0]]))))],["children",m.Children.toArray(Array.from(w))])]))))),a.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(E))}))),ee(()=>{let z,M;return ue((z=v(a.createElement("label",h(b("fieldset-label",d([["className","justify-between"],(M=[Ji(Fi("%s - %s (disabled)"))(u)(D),a.createElement("input",h(b("checkbox",d([["type","checkbox"],N,p,["disabled",!0],["defaultChecked",!0]]))))],["children",m.Children.toArray(Array.from(M))])]))))),a.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(z))})))}))},[[["className","checkbox-primary"],"primary"],[["className","checkbox-secondary"],"secondary"],[["className","checkbox-accent"],"accent"]])},[[["className","checkbox-lg"],"lg"],[["className","checkbox-md"],"md"],[["className","checkbox-sm"],"sm"],[["className","checkbox-xs"],"xs"]]))),a.createElement("div",{children:m.Children.toArray(Array.from(r))})))})();function oA(){return a.createElement(a.Fragment,{},rA,iA,cA,sA)}const uA=(()=>{let r;return H("Input with border",`Daisy.fieldset [
    Daisy.fieldsetLabel "Username"
    Daisy.input [ prop.placeholder "Username" ]
]`,a.createElement("div",{children:[(r=d([a.createElement("label",{className:"fieldset-label",children:"Username"}),a.createElement("input",h(b("input",d([["type","text"],["placeholder","Username"]]))))]),a.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(r))}))]}))})(),dA=(()=>{let r,i;return H("Input with border",`Daisy.card [
    prop.className "p-10 bg-base-200"
    prop.children [
        Daisy.fieldset [
            Daisy.fieldsetLabel "Username"
            Daisy.input [prop.placeholder "Username"]
        ]
    ]
]`,a.createElement("div",h(b("card",d([["className","p-10 bg-base-200"],(r=[(i=d([a.createElement("label",{className:"fieldset-label",children:"Username"}),a.createElement("input",h(b("input",d([["type","text"],["placeholder","Username"]]))))]),a.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(i))}))],["children",m.Children.toArray(Array.from(r))])])))))})(),mA=(()=>{let r,i;return H("Input ghost (no background)",`Daisy.card [
    prop.className "p-10 bg-base-200"
    prop.children [
        Daisy.fieldset [
            Daisy.fieldsetLabel "Username"
            Daisy.input [input.ghost; prop.placeholder "Username"]
        ]
    ]
]`,a.createElement("div",h(b("card",d([["className","p-10 bg-base-200"],(r=[(i=d([a.createElement("label",{className:"fieldset-label",children:"Username"}),a.createElement("input",h(b("input",d([["type","text"],["className","input-ghost"],["placeholder","Username"]]))))]),a.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(i))}))],["children",m.Children.toArray(Array.from(r))])])))))})(),fA=(()=>{let r;return H("Input ghost (no background)",`Daisy.fieldset [
    Daisy.fieldsetLabel "Disabled input"
    Daisy.input [prop.disabled true; prop.placeholder "Username"]
]`,(r=d([a.createElement("label",{className:"fieldset-label",children:"Disabled input"}),a.createElement("input",h(b("input",d([["type","text"],["disabled",!0],["placeholder","Username"]]))))]),a.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(r))})))})(),hA=(()=>{let r;return H("Input with colors",`let colors = [
    input.primary  , "primary"
    input.secondary, "secondary"
    input.accent   , "accent"
    input.info     , "info"
    input.success  , "success"
    input.warning  , "warning"
    input.error    , "error"
]
Daisy.fieldset [
    for color, colorText in colors do
        Daisy.fieldsetLabel colorText
        Daisy.input [color; prop.placeholder "Username"]
]`,(r=we(ee(()=>Xe(o=>Ke(ue(a.createElement("label",{className:"fieldset-label",children:o[1]})),ee(()=>ue(a.createElement("input",h(b("input",d([["type","text"],o[0],["placeholder","Username"]]))))))),[[["className","input-primary"],"primary"],[["className","input-secondary"],"secondary"],[["className","input-accent"],"accent"],[["className","input-info"],"info"],[["className","input-success"],"success"],[["className","input-warning"],"warning"],[["className","input-error"],"error"]]))),a.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(r))})))})(),pA=(()=>{let r;return H("Input with sizes",`let sizes = [
    input.xs, "xs"
    input.sm, "sm"
    input.md, "md"
    input.lg, "lg"
]
Daisy.fieldset [
    for size, sizeText in sizes do
        Daisy.fieldsetLabel sizeText
        Daisy.input [size; prop.placeholder "Username"]
]`,(r=we(ee(()=>Xe(o=>Ke(ue(a.createElement("label",{className:"fieldset-label",children:o[1]})),ee(()=>ue(a.createElement("input",h(b("input",d([["type","text"],o[0],["placeholder","Username"]]))))))),[[["className","input-xs"],"xs"],[["className","input-sm"],"sm"],[["className","input-md"],"md"],[["className","input-lg"],"lg"]]))),a.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(r))})))})(),yA=(()=>{let r,i;return H("Input with sizes",`Daisy.fieldset [
    Daisy.fieldsetLabel "Connected"
    Html.div [
        prop.className "relative"
        prop.children [
            Daisy.input [
                input.primary
                prop.placeholder "Search"
                prop.className "w-full pr-16"
            ]
            Daisy.button.button [
                button.primary
                prop.className "absolute top-0 right-0 rounded-l-none"
                prop.text "Go"
            ]
        ]
    ]
]`,(r=d([a.createElement("label",{className:"fieldset-label",children:"Connected"}),a.createElement("div",h(d([["className","relative"],(i=[a.createElement("input",h(b("input",d([["type","text"],["className","input-primary"],["placeholder","Search"],["className","w-full pr-16"]])))),a.createElement("button",h(b("btn",d([["className","btn-primary"],["className","absolute top-0 right-0 rounded-l-none"],["children","Go"]]))))],["children",m.Children.toArray(Array.from(i))])])))]),a.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(r))})))})();function bA(){return a.createElement(a.Fragment,{},uA,dA,mA,fA,hA,pA,yA)}const gA=(()=>{let r,i,o,u,p,y,E,w,D,N,z;return H("Colors",`Daisy.card [
    prop.children [
        Daisy.fieldset [
            Daisy.fieldsetLabel [
                prop.className "justify-between"
                prop.children [
                    Html.text "Neutral"
                    Daisy.radio [ prop.name "colors" ]
                ]
            ]
        ]
        Daisy.fieldset [
            Daisy.fieldsetLabel [
                prop.className "justify-between"
                prop.children [
                    Html.text "Primary"
                    Daisy.radio [ radio.primary; prop.name "colors" ]
                ]
            ]
        ]
        Daisy.fieldset [
            Daisy.fieldsetLabel [
                prop.className "justify-between"
                prop.children [
                    Html.text "Secondary"
                    Daisy.radio [ radio.secondary; prop.name "colors" ]
                ]
            ]
        ]
        Daisy.fieldset [
            Daisy.fieldsetLabel [
                prop.className "justify-between"
                prop.children [
                    Html.text "Accent"
                    Daisy.radio [ radio.accent; prop.name "colors" ]
                ]
            ]
        ]
        Daisy.fieldset [
            Daisy.fieldsetLabel [
                prop.className "justify-between"
                prop.children [
                    Html.text "Disabled"
                    Daisy.radio [ prop.disabled true; prop.name "colors" ]
                ]
            ]
        ]
    ]
]`,a.createElement("div",h(b("card",v((r=[(i=v(a.createElement("label",h(b("fieldset-label",d([["className","justify-between"],(o=["Neutral",a.createElement("input",h(b("radio",d([["type","radio"],["name","colors"]]))))],["children",m.Children.toArray(Array.from(o))])]))))),a.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(i))})),(u=v(a.createElement("label",h(b("fieldset-label",d([["className","justify-between"],(p=["Primary",a.createElement("input",h(b("radio",d([["type","radio"],["className","radio-primary"],["name","colors"]]))))],["children",m.Children.toArray(Array.from(p))])]))))),a.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(u))})),(y=v(a.createElement("label",h(b("fieldset-label",d([["className","justify-between"],(E=["Secondary",a.createElement("input",h(b("radio",d([["type","radio"],["className","radio-secondary"],["name","colors"]]))))],["children",m.Children.toArray(Array.from(E))])]))))),a.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(y))})),(w=v(a.createElement("label",h(b("fieldset-label",d([["className","justify-between"],(D=["Accent",a.createElement("input",h(b("radio",d([["type","radio"],["className","radio-accent"],["name","colors"]]))))],["children",m.Children.toArray(Array.from(D))])]))))),a.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(w))})),(N=v(a.createElement("label",h(b("fieldset-label",d([["className","justify-between"],(z=["Disabled",a.createElement("input",h(b("radio",d([["type","radio"],["disabled",!0],["name","colors"]]))))],["children",m.Children.toArray(Array.from(z))])]))))),a.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(N))}))],["children",m.Children.toArray(Array.from(r))]))))))})(),vA=(()=>{let r,i,o,u,p;return H("Sizes",`Html.div [
    Daisy.fieldset [Daisy.radio [radio.xs]]
    Daisy.fieldset [Daisy.radio [radio.sm]]
    Daisy.fieldset [Daisy.radio [radio.md]]
    Daisy.fieldset [Daisy.radio [radio.lg]]
]`,(r=d([(i=v(a.createElement("input",h(b("radio",d([["type","radio"],["name","sizes"],["className","radio-xs"]]))))),a.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(i))})),(o=v(a.createElement("input",h(b("radio",d([["type","radio"],["name","sizes"],["className","radio-sm"]]))))),a.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(o))})),(u=v(a.createElement("input",h(b("radio",d([["type","radio"],["name","sizes"],["className","radio-md"]]))))),a.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(u))})),(p=v(a.createElement("input",h(b("radio",d([["type","radio"],["name","sizes"],["className","radio-lg"]]))))),a.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(p))}))]),a.createElement("div",{children:m.Children.toArray(Array.from(r))})))})();function EA(){return a.createElement(a.Fragment,{},gA,vA)}const AA=(()=>{let r;return H("Colors",`Html.div [
    Daisy.range [prop.max 100; prop.defaultValue 40]
    Daisy.range [prop.max 100; prop.defaultValue 50; range.primary]
    Daisy.range [prop.max 100; prop.defaultValue 60; range.secondary]
    Daisy.range [prop.max 100; prop.defaultValue 70; range.accent]
]`,(r=d([a.createElement("input",h(b("range",d([["type","range"],["max",100],["defaultValue",40]])))),a.createElement("input",h(b("range",d([["type","range"],["max",100],["defaultValue",50],["className","range-primary"]])))),a.createElement("input",h(b("range",d([["type","range"],["max",100],["defaultValue",60],["className","range-secondary"]])))),a.createElement("input",h(b("range",d([["type","range"],["max",100],["defaultValue",70],["className","range-accent"]]))))]),a.createElement("div",{children:m.Children.toArray(Array.from(r))})))})(),NA=(()=>{let r;return H("Sizes",`Html.div [
    Daisy.range [prop.max 100; prop.defaultValue 40; range.xs]
    Daisy.range [prop.max 100; prop.defaultValue 50; range.sm]
    Daisy.range [prop.max 100; prop.defaultValue 60; range.md]
    Daisy.range [prop.max 100; prop.defaultValue 70; range.lg]
]`,(r=d([a.createElement("input",h(b("range",d([["type","range"],["max",100],["defaultValue",40],["className","range-xs"]])))),a.createElement("input",h(b("range",d([["type","range"],["max",100],["defaultValue",50],["className","range-sm"]])))),a.createElement("input",h(b("range",d([["type","range"],["max",100],["defaultValue",60],["className","range-md"]])))),a.createElement("input",h(b("range",d([["type","range"],["max",100],["defaultValue",70],["className","range-lg"]]))))]),a.createElement("div",{children:m.Children.toArray(Array.from(r))})))})();function SA(){return a.createElement(a.Fragment,{},AA,NA)}const xA=(()=>{let r;return H("Basic",`Daisy.select [
    prop.className "w-full max-w-xs"
    prop.children [
        Html.option "Choose your superpower"
        Html.option "telekenesis"
        Html.option "time travel"
        Html.option "invisibility"
    ]
]`,a.createElement("select",h(b("select",d([["className","w-full max-w-xs"],(r=[a.createElement("option",{children:["Choose your superpower"]}),a.createElement("option",{children:["telekenesis"]}),a.createElement("option",{children:["time travel"]}),a.createElement("option",{children:["invisibility"]})],["children",m.Children.toArray(Array.from(r))])])))))})(),CA=(()=>{let r;return H("Colors",`let colors = [
    select.primary  , "primary"
    select.secondary, "secondary"
    select.accent   , "accent"
    select.ghost    , "ghost"
    select.error    , "error"
    select.info     , "info"
    select.success  , "success"
    select.warning  , "warning"
]

Html.div [
    for color, colorText in colors do
        Daisy.select [
            color
            prop.className "w-full max-w-xs"
            prop.children [
                Html.option colorText
                Html.option "telekenesis"
                Html.option "time travel"
                Html.option "invisibility"
            ]
        ]
]`,(r=we(ee(()=>Xe(o=>{let u;return ue(a.createElement("select",h(b("select",d([o[0],["className","w-full max-w-xs"],(u=[a.createElement("option",{children:[o[1]]}),a.createElement("option",{children:["telekenesis"]}),a.createElement("option",{children:["time travel"]}),a.createElement("option",{children:["invisibility"]})],["children",m.Children.toArray(Array.from(u))])])))))},[[["className","select-primary"],"primary"],[["className","select-secondary"],"secondary"],[["className","select-accent"],"accent"],[["className","select-ghost"],"ghost"],[["className","select-error"],"error"],[["className","select-info"],"info"],[["className","select-success"],"success"],[["className","select-warning"],"warning"]]))),a.createElement("div",{children:m.Children.toArray(Array.from(r))})))})(),DA=(()=>{let r;return H("Sizes",`let colors = [
    select.primary  , "primary"
    select.secondary, "secondary"
    select.accent   , "accent"
    select.ghost    , "ghost"
    select.error    , "error"
    select.info     , "info"
    select.success  , "success"
    select.warning  , "warning"
]

Html.div [
    for color, colorText in colors do
        Daisy.select [
            color
            prop.className "w-full max-w-xs"
            prop.children [
                Html.option colorText
                Html.option "telekenesis"
                Html.option "time travel"
                Html.option "invisibility"
            ]
        ]
]`,(r=we(ee(()=>Xe(o=>{let u;return ue(a.createElement("select",h(b("select",d([o[0],["className","w-full max-w-xs"],(u=[a.createElement("option",{children:[o[1]]}),a.createElement("option",{children:["telekenesis"]}),a.createElement("option",{children:["time travel"]}),a.createElement("option",{children:["invisibility"]})],["children",m.Children.toArray(Array.from(u))])])))))},[[["className","select-xs"],"xs"],[["className","select-sm"],"sm"],[["className","select-md"],"md"],[["className","select-lg"],"lg"]]))),a.createElement("div",{children:m.Children.toArray(Array.from(r))})))})(),wA=(()=>{let r;return H("Disabled",`Daisy.select [
    prop.disabled true
    prop.className "w-full max-w-xs"
    prop.children [
        Html.option "Choose your superpower"
        Html.option "telekinesis"
        Html.option "time travel"
        Html.option "invisibility"
    ]
]
`,a.createElement("select",h(b("select",d([["disabled",!0],["className","w-full max-w-xs"],(r=[a.createElement("option",{children:["Choose your superpower"]}),a.createElement("option",{children:["telekinesis"]}),a.createElement("option",{children:["time travel"]}),a.createElement("option",{children:["invisibility"]})],["children",m.Children.toArray(Array.from(r))])])))))})();function _A(){return a.createElement(a.Fragment,{},xA,CA,DA,wA)}const HA=(()=>{let r;return H("Basic",`Daisy.fieldset [
    Daisy.fieldsetLabel "Your bio"
    Daisy.textarea [
        prop.placeholder "Bio"
        prop.className "h-24"
    ]
]`,(r=d([a.createElement("label",{className:"fieldset-label",children:"Your bio"}),a.createElement("textarea",h(b("textarea",d([["placeholder","Bio"],["className","h-24"]]))))]),a.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(r))})))})(),TA=(()=>{let r;return H("Colors",`let colors = [
    textarea.primary  , "primary"
    textarea.secondary, "secondary"
    textarea.accent   , "accent"
    textarea.info     , "info"
    textarea.success  , "success"
    textarea.warning  , "warning"
    textarea.error    , "error"
]
Html.div [
    for color, colorText in colors do
        Daisy.fieldset [
            Daisy.fieldsetLabel colorText
            Daisy.textarea [
                color
                prop.placeholder colorText
                prop.className "h-24"
            ]
        ]
]`,(r=we(ee(()=>Xe(o=>{let u;const p=o[1];return ue((u=d([a.createElement("label",{className:"fieldset-label",children:p}),a.createElement("textarea",h(b("textarea",d([o[0],["placeholder",p],["className","h-24"]]))))]),a.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(u))})))},[[["className","textarea-primary"],"primary"],[["className","textarea-secondary"],"secondary"],[["className","textarea-accent"],"accent"],[["className","textarea-info"],"info"],[["className","textarea-success"],"success"],[["className","textarea-warning"],"warning"],[["className","textarea-error"],"error"]]))),a.createElement("div",{children:m.Children.toArray(Array.from(r))})))})();function kA(){return a.createElement(a.Fragment,{},HA,TA)}const zA=H("Basic","Daisy.toggle []",a.createElement("input",h(b("toggle",v(["type","checkbox"]))))),MA=(()=>{let r,i,o;return H("Toggle with label and container",`Daisy.card [
    prop.children [
        card.border
        Daisy.fieldset [
            Daisy.fieldsetLabel [
                prop.className "justify-between"
                prop.children [
                    Html.text "Remember me"
                    Daisy.toggle []
                ]
            ]
        ]
    ]
]`,a.createElement("div",h(b("card",d([["className","card-border"],(r=[(i=v(a.createElement("label",h(b("fieldset-label",d([["className","justify-between"],(o=["Remember me",a.createElement("input",h(b("toggle",v(["type","checkbox"]))))],["children",m.Children.toArray(Array.from(o))])]))))),a.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(i))}))],["children",m.Children.toArray(Array.from(r))])])))))})(),OA=(()=>{let r;return H("Toggle with label and container",`let colors = [
    toggle.primary  , nameof toggle.primary
    toggle.secondary, nameof toggle.secondary
    toggle.accent   , nameof toggle.accent
]
Daisy.card [
    prop.children [
        for color, colorText in colors do
            Daisy.fieldset [
                Daisy.fieldsetLabel [
                    prop.className "justify-between"
                    prop.children [
                        Html.text colorText
                        Daisy.toggle [color; prop.defaultChecked true]
                    ]
                ]
            ]
    ]
]`,a.createElement("div",h(b("card",d([["className","card-border"],(r=we(ee(()=>Xe(o=>{let u,p;return ue((u=v(a.createElement("label",h(b("fieldset-label",d([["className","justify-between"],(p=[o[1],a.createElement("input",h(b("toggle",d([["type","checkbox"],o[0],["defaultChecked",!0]]))))],["children",m.Children.toArray(Array.from(p))])]))))),a.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(u))})))},[[["className","toggle-primary"],"primary"],[["className","toggle-secondary"],"secondary"],[["className","toggle-accent"],"accent"]]))),["children",m.Children.toArray(Array.from(r))])])))))})();function RA(){return a.createElement(a.Fragment,{},zA,MA,OA)}const UA=H("No prefix",'Daisy.mockupCode [Html.pre [Html.code [prop.text "npm i daisyui"]]]',(()=>{let r;const i=v((r=v(a.createElement("code",{children:"npm i daisyui"})),a.createElement("pre",{children:m.Children.toArray(Array.from(r))})));return a.createElement("div",{className:"mockup-code",children:m.Children.toArray(Array.from(i))})})()),BA=(()=>{let r,i;return H("Prefix",`Daisy.mockupCode [
    Html.pre [
        mockupCode.prefix "$"
        prop.children [
            Html.code [prop.text "npm i daisyui"]
        ]
    ]
]`,(r=v(a.createElement("pre",h(d([["data-prefix","$"],(i=[a.createElement("code",{children:"npm i daisyui"})],["children",m.Children.toArray(Array.from(i))])])))),a.createElement("div",{className:"mockup-code",children:m.Children.toArray(Array.from(r))})))})();function qA(){return a.createElement(a.Fragment,{},UA,BA)}const LA=(()=>{let r,i;return H("iPhone mockup",`Html.div [
    Daisy.mockupPhone [
        prop.children [
            prop.className "bg-base-300"
            Daisy.mockupPhoneCamera []
            Daisy.mockupPhoneDisplay [
                prop.className "grid place-content-center"
                prop.text "Hi."
            ]
        ]
    ]
]`,(r=v(a.createElement("div",h(b("mockup-phone",d([["className","bg-base-300"],(i=[a.createElement("div",h(b("mockup-phone-camera",Fe()))),a.createElement("div",h(b("mockup-phone-display",d([["className","grid place-content-center"],["children","Hi."]]))))],["children",m.Children.toArray(Array.from(i))])]))))),a.createElement("div",{children:m.Children.toArray(Array.from(r))})))})(),GA=(()=>{let r,i;return H("iPhone with color",`Html.div [
    Daisy.mockupPhone [
        prop.className "bg-base-300"
        color.borderPrimary
        prop.children [
            Daisy.mockupPhoneCamera []
            Daisy.mockupPhoneDisplay [
                prop.className "grid place-content-center"
                prop.text "Hi."
            ]
        ]
    ]
]`,(r=v(a.createElement("div",h(b("mockup-phone",d([["className","bg-base-300"],["className","border-primary"],(i=[a.createElement("div",h(b("mockup-phone-camera",Fe()))),a.createElement("div",h(b("mockup-phone-display",d([["className","grid place-content-center"],["children","Hi."]]))))],["children",m.Children.toArray(Array.from(i))])]))))),a.createElement("div",{children:m.Children.toArray(Array.from(r))})))})(),VA=(()=>{let r;return H("Phone sizes",`let phones = [
    "w-[320px] h-[568px]", "phone1", color.borderPrimary
    "w-[375px] h-[667px]", "phone2", color.borderAccent
    "w-[414px] h-[736px]", "phone3", color.borderError
    "w-[375px] h-[812px]", "phone4", color.borderInfo
    "w-[414px] h-[896px]", "phone5", color.borderSuccess
    "w-[320px] h-[1024px]", "phone6", color.borderWarning
]
Html.div [
    for phone, phoneText, borderColor in phones do 
        Daisy.mockupPhone [
            prop.className "bg-base-300"
            borderColor
            prop.children [
                Daisy.mockupPhoneCamera []
                Daisy.mockupPhoneDisplay [
                    prop.className $"grid place-content-center {phone}"
                    prop.text phoneText
                ]
            ]
        ]
]`,(r=we(ee(()=>Xe(o=>{let u;return ue(a.createElement("div",h(b("mockup-phone",d([["className","bg-base-300"],o[2],(u=[a.createElement("div",h(b("mockup-phone-camera",Fe()))),a.createElement("div",h(b("mockup-phone-display",d([["className",`grid place-content-center ${o[0]}`],["children",o[1]]]))))],["children",m.Children.toArray(Array.from(u))])])))))},[["w-[320px] h-[568px]","phone1",["className","border-primary"]],["w-[375px] h-[667px]","phone2",["className","border-accent"]],["w-[414px] h-[736px]","phone3",["className","border-error"]],["w-[375px] h-[812px]","phone4",["className","border-info"]],["w-[414px] h-[896px]","phone5",["className","border-success"]],["w-[320px] h-[1024px]","phone6",["className","border-warning"]]]))),a.createElement("div",{children:m.Children.toArray(Array.from(r))})))})();function jA(){return a.createElement(a.Fragment,{},LA,GA,VA)}const YA=(()=>{let r;return H("Simple",`Daisy.mockupWindow [
    prop.className "border" ++ color.borderBase300
    prop.children [
        Html.div [
            prop.className "flex justify-center px-4 py-16 border-t border-base-300"
            prop.text "Hello!"
        ]
    ]
]]`,a.createElement("div",{children:[a.createElement("div",h(b("mockup-window",d([rt(["className","border"],["className","border-base-300"]),(r=[a.createElement("div",{className:"flex justify-center px-4 py-16 border-t border-base-300",children:"Hello!"})],["children",m.Children.toArray(Array.from(r))])]))))]}))})(),QA=(()=>{let r;return H("With background color",`Daisy.mockupWindow [
    color.bgBase300
    prop.children [
        Html.div [
            prop.className "flex justify-center px-4 py-16" ++ color.bgBase200
            prop.text "Hello!"
        ]
    ]
]`,a.createElement("div",{children:[a.createElement("div",h(b("mockup-window",d([["className","bg-base-300"],(r=[a.createElement("div",h(d([rt(["className","flex justify-center px-4 py-16"],["className","bg-base-200"]),["children","Hello!"]])))],["children",m.Children.toArray(Array.from(r))])]))))]}))})();function XA(){return a.createElement(a.Fragment,{},YA,QA)}function ZA(){let r,i,o,u,p,y,E;const w=[(r=d(["First of all you need to follow the ",a.createElement("a",{className:"link",href:"https://daisyui.com/docs/install",children:"DaisyUI installation steps"})," and then proceed with installing ",a.createElement("a",{className:"link",href:"https://www.nuget.org/packages/Feliz.DaisyUI",children:"Feliz.DaisyUI NuGet"}),"."]),a.createElement("div",{className:"description",children:m.Children.toArray(Array.from(r))})),a.createElement("div",{className:"description",children:m.Children.toArray(["Using NuGet package command"])}),(i=v((o=v(a.createElement("pre",h(d([["data-prefix","$"],(u=[a.createElement("code",{children:["Install-Package Feliz.DaisyUI"]})],["children",m.Children.toArray(Array.from(u))])])))),a.createElement("div",{className:"mockup-code",children:m.Children.toArray(Array.from(o))}))),a.createElement("div",{className:"max-w-xl",children:m.Children.toArray(Array.from(i))})),a.createElement("div",{className:"description",children:m.Children.toArray(["or Paket"])}),(p=v((y=v(a.createElement("pre",h(d([["data-prefix","$"],(E=[a.createElement("code",{children:["paket add Feliz.DaisyUI"]})],["children",m.Children.toArray(Array.from(E))])])))),a.createElement("div",{className:"mockup-code",children:m.Children.toArray(Array.from(y))}))),a.createElement("div",{className:"max-w-xl",children:m.Children.toArray(Array.from(p))}))];return a.createElement(a.Fragment,{},...w)}class KA extends ac{constructor(i){super(),this.tag=0,this.fields=[i]}cases(){return["UrlChanged"]}}class Uh extends Hr{constructor(i){super(),this.Page=i}}function FA(){const r=Ch(xh(window.location.hash,1));return[new Uh(r),Vg(r)]}function JA(r,i){return[new Uh(r.fields[0]),cc()]}function $A(r,i,o,u,p){let y,E,w,D,N,z,M,q,B,Q,Z;const W=d([(y=d([(E=v((w=v(a.createElement("label",h(b("btn",d([["className","btn-square"],["className","btn-ghost"],["htmlFor","main-menu"],(D=[a.createElement("svg",h(d([["viewBox","0 0 24 24"],["className","inline-block w-6 h-6 stroke-current"],(N=v(a.createElement("path",{d:"M4 6h16M4 12h16M4 18h16",strokeWidth:2})),["children",m.Children.toArray(Array.from(N))])])))],["children",m.Children.toArray(Array.from(D))])]))))),a.createElement("div",{className:"lg:hidden",children:m.Children.toArray(Array.from(w))}))),a.createElement("div",{className:"navbar-start",children:m.Children.toArray(Array.from(E))})),(z=v(a.createElement("div",h(b("dropdown",d([["className","dropdown-end"],["className","z-50"],(M=[a.createElement("div",h(b("btn",d([["tabIndex",0],["className","btn-secondary"],["children","Change Theme"]])))),a.createElement("ul",h(b("dropdown-content",d([["tabIndex",0],(q=[a.createElement("ul",h(b("menu",d([["className","menu-md"],["className","bg-base-200"],["className","text-base-content"],["className","p-4 w-96 h-120 rounded-b-box overflow-y-auto"],(B=we(ee(()=>Xe(ge=>{let ce;return ue((ce=v(a.createElement("input",h(b("input",d([["type","text"],["type","radio"],["className","theme-controller"],["value",ge[0]],["name","theme"],["className","btn btn-sm btn-block btn-ghost justify-start"],["aria-label",ge[1]]]))))),a.createElement("li",{children:m.Children.toArray(Array.from(ce))})))},[["light","🌝 light"],["dark","🌚 dark"],["cupcake","🧁 cupcake"],["bumblebee","🐝 bumblebee"],["emerald","✳️ emerald"],["corporate","🏢 corporate"],["synthwave","🌃 synthwave"],["retro","👴 retro"],["cyberpunk","🤖 cyberpunk"],["valentine","🌸 valentine"],["halloween","🎃 halloween"],["garden","🌷 garden"],["forest","🌲 forest"],["aqua","🐟 aqua"],["lofi","👓 lofi"],["pastel","🖍 pastel"],["️fantasy","🧚‍️ fantasy"],["wireframe","📝 wireframe"],["black","🏴 black"],["luxury","💎 luxury"],["️dracula","🧛‍️ dracula"],["cmyk","🖨 CMYK"],["autumn","🍁 autumn"],["business","💼 business"],["acid","💊 acid"],["lemonade","🍋 lemonade"],["night","🌃 night"],["coffee","☕ coffee"],["winter","❄ winter"],["dim","🔅 dim"],["nord","⛰️ nord"],["sunset","🌆 sunset"],["abyss","🕳️ abyss"],["caramellatte","☕ caramellatte"],["silk","👗 silk"]]))),["children",m.Children.toArray(Array.from(B))])]))))],["children",m.Children.toArray(Array.from(q))])]))))],["children",m.Children.toArray(Array.from(M))])]))))),a.createElement("div",{className:"navbar-end",children:m.Children.toArray(Array.from(z))}))]),a.createElement("div",{className:"navbar",children:m.Children.toArray(Array.from(y))})),(Q=d([a.createElement("h2",h(d([rt(["className","text-primary"],["className","my-6 text-5xl font-bold"]),(Z=[o,a.createElement("a",h(b("btn",d([["className","ml-2"],["className","btn-warning"],["className","btn-outline"],["className","btn-xs"],["href",`https://daisyui.com${u}`],["children",m.Children.toArray(["daisyui docs"])]]))))],["children",m.Children.toArray(Array.from(Z))])]))),p]),a.createElement("div",{className:"px-5 py-5 bg-base-100",children:m.Children.toArray(Array.from(Q))}))]);return a.createElement("div",{className:"drawer-content",children:m.Children.toArray(Array.from(W))})}function WA(r){let i,o,u,p,y,E,w,D,N,z,M;const q=(Z,W,ge)=>{const ce=v(a.createElement("a",h(we(ee(()=>{let ze,Be;return Ke(ue(["href",(ze=Oo(ge),Be=ze[1],To($i(se=>Cr(ec(se[0],v(se[1]+ga(Be)))),zo(ze[0])),()=>Cr(v(ga(Be)))))]),ee(()=>Ke(ue(["onClick",se=>{Kf(se)}]),ee(()=>Ke(On(r,ge)?ue(rt(["className","menu-active"],["className","justify-between"])):ue(["className","justify-between"]),ee(()=>{let se;return ue((se=[a.createElement("span",{children:[W]}),a.createElement("span",{className:"badge",children:Z})],["children",m.Children.toArray(Array.from(se))]))}))))))})))));return a.createElement("li",{children:m.Children.toArray(Array.from(ce))})},B=(Z,W)=>{const ge=v(a.createElement("a",h(we(ee(()=>Ke(On(r,W)?ue(["className","menu-active"]):Ah(),ee(()=>Ke(ue(["children",Z]),ee(()=>{let ce,ze;return Ke(ue(["href",(ce=Oo(W),ze=ce[1],To($i(Be=>Cr(ec(Be[0],v(Be[1]+ga(ze)))),zo(ce[0])),()=>Cr(v(ga(ze)))))]),ee(()=>ue(["onClick",Be=>{Kf(Be)}])))})))))))));return a.createElement("li",{children:m.Children.toArray(Array.from(ge))})},Q=d([a.createElement("label",h(b("drawer-overlay",v(["htmlFor","main-menu"])))),a.createElement("aside",h(d([["className","flex flex-col border-r w-80 bg-base-100 text-base-content"],(i=[(o=d([a.createElement("span",{className:"text-primary",children:"Feliz."}),"DaisyUI",a.createElement("a",h(d([["href","https://www.nuget.org/packages/Feliz.DaisyUI"],(u=[a.createElement("img",{src:"https://img.shields.io/nuget/v/Feliz.DaisyUI.svg?style=flat-square"})],["children",m.Children.toArray(Array.from(u))])])))]),a.createElement("div",{className:"inline-block text-3xl font-title px-5 py-5 font-bold",children:m.Children.toArray(Array.from(o))})),(p=v(a.createElement("div",h(b("alert",d([["className","alert-info"],(y=[(E=d([a.createElement("div",{dangerouslySetInnerHTML:{__html:"🎉 Now based on <strong>DaisyUI v5!</strong>"}}),(w=v(a.createElement("a",{children:"Read the change log",href:"https://daisyui.com/docs/changelog/#500"})),a.createElement("div",{className:"text-sm self-center underline",children:m.Children.toArray(Array.from(w))}))]),a.createElement("div",{className:"flex flex-col gap-2",children:m.Children.toArray(Array.from(E))}))],["children",m.Children.toArray(Array.from(y))])]))))),a.createElement("div",{className:"p-4",children:m.Children.toArray(Array.from(p))})),a.createElement("ul",h(b("menu",d([["className","menu-md"],["className","flex flex-col p-4 pt-0 w-full"],(D=[(N=v(a.createElement("span",{children:["Docs"]})),a.createElement("li",{className:"menu-title",children:m.Children.toArray(Array.from(N))})),B("Install",new O(0,[])),B("Use",new O(1,[])),B("Themes",new O(2,[])),B("Colors",new O(3,[]))],["children",m.Children.toArray(Array.from(D))])])))),a.createElement("ul",h(b("menu",d([["className","menu-md"],["className","flex flex-col p-4 pt-0 w-full"],(z=[(M=v(a.createElement("span",{children:["Components"]})),a.createElement("li",{className:"menu-title",children:m.Children.toArray(Array.from(M))})),B("Accordion",new O(4,[])),q("updated","Alert",new O(5,[])),B("Avatar",new O(6,[])),q("updated","Badge",new O(7,[])),B("Breadcrumbs",new O(8,[])),q("updated","Button",new O(9,[])),q("updated","Card",new O(10,[])),B("Carousel",new O(11,[])),B("Chat bubble",new O(12,[])),B("Collapse",new O(13,[])),B("Countdown",new O(14,[])),B("Diff",new O(15,[])),B("Divider",new O(16,[])),q("new","Dock",new O(17,[])),B("Drawer",new O(18,[])),q("updated","Dropdown",new O(19,[])),q("new","Fieldset",new O(20,[])),q("new","Filter",new O(21,[])),q("updated","Footer",new O(22,[])),B("Hero",new O(23,[])),B("Indicator",new O(25,[])),B("Join (group items)",new O(24,[])),B("Kbd",new O(26,[])),q("new","Label",new O(27,[])),B("Link",new O(28,[])),q("new","List",new O(29,[])),B("Loading",new O(30,[])),q("updated","Mask",new O(31,[])),q("updated","Menu",new O(32,[])),q("updated","Modal",new O(33,[])),q("updated","Navbar",new O(34,[])),B("Pagination",new O(35,[])),B("Progress",new O(36,[])),B("Radial Progress",new O(37,[])),B("Rating",new O(62,[])),B("Skeleton",new O(38,[])),q("updated","Stack",new O(39,[])),B("Stat",new O(40,[])),q("new","Status",new O(41,[])),q("updated","Steps",new O(42,[])),B("Swap",new O(43,[])),q("updated","Tab",new O(44,[])),B("Table",new O(45,[])),B("Theme Controller",new O(46,[])),B("Timeline",new O(47,[])),B("Toast",new O(48,[])),B("Tooltip",new O(49,[])),q("new","Validator",new O(50,[])),q("updated","File - Input",new O(51,[])),q("updated","Form - Checkbox",new O(52,[])),q("updated","Form - Input",new O(53,[])),q("updated","Form - Radio",new O(54,[])),B("Form - Range",new O(55,[])),q("updated","Form - Select",new O(56,[])),q("updated","Form - Textarea",new O(57,[])),q("updated","Form - Toggle",new O(58,[])),B("MockupCode",new O(59,[])),q("updated","MockupPhone",new O(60,[])),B("MockupWindow",new O(61,[]))],["children",m.Children.toArray(Array.from(z))])]))))],["children",m.Children.toArray(Array.from(i))])])))]);return a.createElement("div",{className:"drawer-side",children:m.Children.toArray(Array.from(Q))})}function IA(r,i,o,u,p,y){let E,w;return a.createElement("div",h(d([["className","bg-base-100 text-base-content h-screen"],(E=[a.createElement("div",h(b("drawer",d([["className","lg:drawer-open"],(w=[a.createElement("input",h(b("drawer-toggle",d([["type","checkbox"],["id","main-menu"]])))),$A(r,i,o,u,y),WA(p)],["children",m.Children.toArray(Array.from(w))])]))))],["children",m.Children.toArray(Array.from(E))])])))}function PA(){let r;const i=Oh(()=>Mh(FA,JA,(E,w)=>{}),void 0,void 0),o=i[0],u=i[1];let p;const y=o.Page;return p=y.tag===1?["How to use","/docs/use",a.createElement(M0,null)]:y.tag===2?["Themes","/docs/default-themes",a.createElement(U0,null)]:y.tag===3?["Colors","/core/colors",a.createElement(q0,null)]:y.tag===4?["Accordion","/components/accordion",a.createElement(G0,null)]:y.tag===5?["Alert","/components/alert",a.createElement(X0,null)]:y.tag===6?["Avatar","/components/avatar",a.createElement(F0,null)]:y.tag===7?["Badge","/components/badge",a.createElement(I0,null)]:y.tag===8?["Breadcrumbs","/components/breadcrumbs",a.createElement(ev,null)]:y.tag===9?["Button","/components/button",a.createElement(av,null)]:y.tag===10?["Card","/components/card",a.createElement(ov,null)]:y.tag===11?["Carousel","/components/carousel",a.createElement(mv,null)]:y.tag===12?["ChatBubble","/components/chat",a.createElement(bv,null)]:y.tag===13?["Collapse","/components/collapse",a.createElement(Av,null)]:y.tag===14?["Countdown","/components/countdown",a.createElement(Cv,null)]:y.tag===15?["Diff","/components/diff",a.createElement(_v,null)]:y.tag===16?["Divider","/components/divider",a.createElement(kv,null)]:y.tag===17?["Dock","/components/dock",a.createElement(Mv,null)]:y.tag===18?["Drawer","/components/drawer",a.createElement(Rv,null)]:y.tag===19?["Dropdown","/components/dropdown",a.createElement(Gv,null)]:y.tag===20?["Fieldset","/components/fieldset",a.createElement(Qv,null)]:y.tag===21?["Filter","/components/filter",a.createElement(Kv,null)]:y.tag===22?["Footer","/components/footer",a.createElement(Jv,null)]:y.tag===23?["Hero","/components/hero",a.createElement(Wv,null)]:y.tag===25?["Indicator","/components/indicator",a.createElement(nE,null)]:y.tag===24?["Join","/components/join",a.createElement(aE,null)]:y.tag===26?["Kbd","/components/kdb",a.createElement(sE,null)]:y.tag===27?["Label","/components/label",a.createElement(hE,null)]:y.tag===28?["Link","/components/link",a.createElement(vE,null)]:y.tag===29?["List","/components/list",a.createElement(NE,null)]:y.tag===30?["Loading","/components/loading",a.createElement(DE,null)]:y.tag===31?["Mask","/components/mask",a.createElement(HE,null)]:y.tag===32?["Menu","/components/menu",a.createElement(OE,null)]:y.tag===33?["Modal","/components/modal",a.createElement(UE,null)]:y.tag===34?["Navbar","/components/navbar",a.createElement(GE,null)]:y.tag===35?["Pagination","/components/pagination",a.createElement(YE,null)]:y.tag===36?["Progress","/components/progress",a.createElement(ZE,null)]:y.tag===37?["RadialProgress","/components/radial-progress",a.createElement(JE,null)]:y.tag===62?["Rating","/components/rating",a.createElement(IE,null)]:y.tag===38?["Skeleton","/components/skeleton",a.createElement(t1,null)]:y.tag===39?["Stack","/components/stack",a.createElement(r1,null)]:y.tag===40?["Stat","/components/stat",a.createElement(o1,null)]:y.tag===41?["Status","/components/status",a.createElement(m1,null)]:y.tag===42?["Steps","/components/steps",a.createElement(b1,null)]:y.tag===43?["Swap","/components/swap",a.createElement(E1,null)]:y.tag===44?["Tab","/components/tab",a.createElement(D1,null)]:y.tag===45?["Table","/components/table",a.createElement(M1,null)]:y.tag===46?["Theme Controller","/components/theme-controller",a.createElement(R1,null)]:y.tag===47?["Timeline","/components/timeline",a.createElement(q1,null)]:y.tag===48?["Toast","/components/toast",a.createElement(j1,null)]:y.tag===49?["Tooltip","/components/tooltip",a.createElement(Z1,null)]:y.tag===50?["Validator","/components/validator",a.createElement($1,null)]:y.tag===51?["File - Input","/components/file-input",a.createElement(aA,null)]:y.tag===52?["Form - Checkbox","/components/form/checkbox",a.createElement(oA,null)]:y.tag===53?["Form - Input","/components/form/input",a.createElement(bA,null)]:y.tag===54?["Form - Radio","/components/form/radio",a.createElement(EA,null)]:y.tag===55?["Form - Range","/components/form/range",a.createElement(SA,null)]:y.tag===56?["Form - Select","/components/form/select",a.createElement(_A,null)]:y.tag===57?["Form - Textarea","/components/form/textarea",a.createElement(kA,null)]:y.tag===58?["Form - Toggle","/components/form/toggle",a.createElement(RA,null)]:y.tag===59?["MockupCode","/components/mockup/code",a.createElement(qA,null)]:y.tag===60?["MockupPhone","/components/mockup/phone",a.createElement(jA,null)]:y.tag===61?["MockupWindow","/components/mockup/window",a.createElement(XA,null)]:["Installation","/docs/install",a.createElement(ZA,null)],Bg(h(d([["hashMode",1],["onUrlChanged",E=>{u(new KA(Ch(E)))}],(r=v(IA(o,u,p[0],p[1],o.Page,p[2])),["application",a.createElement(a.Fragment,{},...r)])])))}fb.createRoot(document.getElementById("safer-app")).render(a.createElement(PA,null));
