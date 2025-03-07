(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))u(p);new MutationObserver(p=>{for(const y of p)if(y.type==="childList")for(const E of y.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&u(E)}).observe(document,{childList:!0,subtree:!0});function o(p){const y={};return p.integrity&&(y.integrity=p.integrity),p.referrerPolicy&&(y.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?y.credentials="include":p.crossOrigin==="anonymous"?y.credentials="omit":y.credentials="same-origin",y}function u(p){if(p.ep)return;p.ep=!0;const y=o(p);fetch(p.href,y)}})();function ab(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var go={exports:{}},Sa={},vo={exports:{}},Eo={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _f;function ib(){return _f||(_f=1,function(a){function i(X,me){var ae=X.length;X.push(me);e:for(;0<ae;){var Me=ae-1>>>1,S=X[Me];if(0<p(S,me))X[Me]=me,X[ae]=S,ae=Me;else break e}}function o(X){return X.length===0?null:X[0]}function u(X){if(X.length===0)return null;var me=X[0],ae=X.pop();if(ae!==me){X[0]=ae;e:for(var Me=0,S=X.length,V=S>>>1;Me<V;){var le=2*(Me+1)-1,te=X[le],K=le+1,Ee=X[K];if(0>p(te,ae))K<S&&0>p(Ee,te)?(X[Me]=Ee,X[K]=ae,Me=K):(X[Me]=te,X[le]=ae,Me=le);else if(K<S&&0>p(Ee,ae))X[Me]=Ee,X[K]=ae,Me=K;else break e}}return me}function p(X,me){var ae=X.sortIndex-me.sortIndex;return ae!==0?ae:X.id-me.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var y=performance;a.unstable_now=function(){return y.now()}}else{var E=Date,w=E.now();a.unstable_now=function(){return E.now()-w}}var D=[],N=[],z=1,M=null,q=3,B=!1,Q=!1,Z=!1,W=typeof setTimeout=="function"?setTimeout:null,ge=typeof clearTimeout=="function"?clearTimeout:null,ce=typeof setImmediate<"u"?setImmediate:null;function ze(X){for(var me=o(N);me!==null;){if(me.callback===null)u(N);else if(me.startTime<=X)u(N),me.sortIndex=me.expirationTime,i(D,me);else break;me=o(N)}}function Be(X){if(Z=!1,ze(X),!Q)if(o(D)!==null)Q=!0,pn();else{var me=o(N);me!==null&&gt(Be,me.startTime-X)}}var se=!1,ct=-1,Bn=5,qn=-1;function re(){return!(a.unstable_now()-qn<Bn)}function xe(){if(se){var X=a.unstable_now();qn=X;var me=!0;try{e:{Q=!1,Z&&(Z=!1,ge(ct),ct=-1),B=!0;var ae=q;try{t:{for(ze(X),M=o(D);M!==null&&!(M.expirationTime>X&&re());){var Me=M.callback;if(typeof Me=="function"){M.callback=null,q=M.priorityLevel;var S=Me(M.expirationTime<=X);if(X=a.unstable_now(),typeof S=="function"){M.callback=S,ze(X),me=!0;break t}M===o(D)&&u(D),ze(X)}else u(D);M=o(D)}if(M!==null)me=!0;else{var V=o(N);V!==null&&gt(Be,V.startTime-X),me=!1}}break e}finally{M=null,q=ae,B=!1}me=void 0}}finally{me?zt():se=!1}}}var zt;if(typeof ce=="function")zt=function(){ce(xe)};else if(typeof MessageChannel<"u"){var hn=new MessageChannel,nn=hn.port2;hn.port1.onmessage=xe,zt=function(){nn.postMessage(null)}}else zt=function(){W(xe,0)};function pn(){se||(se=!0,zt())}function gt(X,me){ct=W(function(){X(a.unstable_now())},me)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(X){X.callback=null},a.unstable_continueExecution=function(){Q||B||(Q=!0,pn())},a.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Bn=0<X?Math.floor(1e3/X):5},a.unstable_getCurrentPriorityLevel=function(){return q},a.unstable_getFirstCallbackNode=function(){return o(D)},a.unstable_next=function(X){switch(q){case 1:case 2:case 3:var me=3;break;default:me=q}var ae=q;q=me;try{return X()}finally{q=ae}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(X,me){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var ae=q;q=X;try{return me()}finally{q=ae}},a.unstable_scheduleCallback=function(X,me,ae){var Me=a.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?Me+ae:Me):ae=Me,X){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=ae+S,X={id:z++,callback:me,priorityLevel:X,startTime:ae,expirationTime:S,sortIndex:-1},ae>Me?(X.sortIndex=ae,i(N,X),o(D)===null&&X===o(N)&&(Z?(ge(ct),ct=-1):Z=!0,gt(Be,ae-Me))):(X.sortIndex=S,i(D,X),Q||B||(Q=!0,pn())),X},a.unstable_shouldYield=re,a.unstable_wrapCallback=function(X){var me=q;return function(){var ae=q;q=me;try{return X.apply(this,arguments)}finally{q=ae}}}}(Eo)),Eo}var Hf;function cb(){return Hf||(Hf=1,vo.exports=ib()),vo.exports}var Ao={exports:{}},fe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tf;function sb(){if(Tf)return fe;Tf=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),y=Symbol.for("react.consumer"),E=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),N=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),M=Symbol.iterator;function q(S){return S===null||typeof S!="object"?null:(S=M&&S[M]||S["@@iterator"],typeof S=="function"?S:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q=Object.assign,Z={};function W(S,V,le){this.props=S,this.context=V,this.refs=Z,this.updater=le||B}W.prototype.isReactComponent={},W.prototype.setState=function(S,V){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,V,"setState")},W.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function ge(){}ge.prototype=W.prototype;function ce(S,V,le){this.props=S,this.context=V,this.refs=Z,this.updater=le||B}var ze=ce.prototype=new ge;ze.constructor=ce,Q(ze,W.prototype),ze.isPureReactComponent=!0;var Be=Array.isArray,se={H:null,A:null,T:null,S:null},ct=Object.prototype.hasOwnProperty;function Bn(S,V,le,te,K,Ee){return le=Ee.ref,{$$typeof:a,type:S,key:V,ref:le!==void 0?le:null,props:Ee}}function qn(S,V){return Bn(S.type,V,void 0,void 0,void 0,S.props)}function re(S){return typeof S=="object"&&S!==null&&S.$$typeof===a}function xe(S){var V={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(le){return V[le]})}var zt=/\/+/g;function hn(S,V){return typeof S=="object"&&S!==null&&S.key!=null?xe(""+S.key):V.toString(36)}function nn(){}function pn(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(nn,nn):(S.status="pending",S.then(function(V){S.status==="pending"&&(S.status="fulfilled",S.value=V)},function(V){S.status==="pending"&&(S.status="rejected",S.reason=V)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function gt(S,V,le,te,K){var Ee=typeof S;(Ee==="undefined"||Ee==="boolean")&&(S=null);var he=!1;if(S===null)he=!0;else switch(Ee){case"bigint":case"string":case"number":he=!0;break;case"object":switch(S.$$typeof){case a:case i:he=!0;break;case z:return he=S._init,gt(he(S._payload),V,le,te,K)}}if(he)return K=K(S),he=te===""?"."+hn(S,0):te,Be(K)?(le="",he!=null&&(le=he.replace(zt,"$&/")+"/"),gt(K,V,le,"",function(Je){return Je})):K!=null&&(re(K)&&(K=qn(K,le+(K.key==null||S&&S.key===K.key?"":(""+K.key).replace(zt,"$&/")+"/")+he)),V.push(K)),1;he=0;var pt=te===""?".":te+":";if(Be(S))for(var Ce=0;Ce<S.length;Ce++)te=S[Ce],Ee=pt+hn(te,Ce),he+=gt(te,V,le,Ee,K);else if(Ce=q(S),typeof Ce=="function")for(S=Ce.call(S),Ce=0;!(te=S.next()).done;)te=te.value,Ee=pt+hn(te,Ce++),he+=gt(te,V,le,Ee,K);else if(Ee==="object"){if(typeof S.then=="function")return gt(pn(S),V,le,te,K);throw V=String(S),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return he}function X(S,V,le){if(S==null)return S;var te=[],K=0;return gt(S,te,"","",function(Ee){return V.call(le,Ee,K++)}),te}function me(S){if(S._status===-1){var V=S._result;V=V(),V.then(function(le){(S._status===0||S._status===-1)&&(S._status=1,S._result=le)},function(le){(S._status===0||S._status===-1)&&(S._status=2,S._result=le)}),S._status===-1&&(S._status=0,S._result=V)}if(S._status===1)return S._result.default;throw S._result}var ae=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)};function Me(){}return fe.Children={map:X,forEach:function(S,V,le){X(S,function(){V.apply(this,arguments)},le)},count:function(S){var V=0;return X(S,function(){V++}),V},toArray:function(S){return X(S,function(V){return V})||[]},only:function(S){if(!re(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},fe.Component=W,fe.Fragment=o,fe.Profiler=p,fe.PureComponent=ce,fe.StrictMode=u,fe.Suspense=D,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=se,fe.act=function(){throw Error("act(...) is not supported in production builds of React.")},fe.cache=function(S){return function(){return S.apply(null,arguments)}},fe.cloneElement=function(S,V,le){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var te=Q({},S.props),K=S.key,Ee=void 0;if(V!=null)for(he in V.ref!==void 0&&(Ee=void 0),V.key!==void 0&&(K=""+V.key),V)!ct.call(V,he)||he==="key"||he==="__self"||he==="__source"||he==="ref"&&V.ref===void 0||(te[he]=V[he]);var he=arguments.length-2;if(he===1)te.children=le;else if(1<he){for(var pt=Array(he),Ce=0;Ce<he;Ce++)pt[Ce]=arguments[Ce+2];te.children=pt}return Bn(S.type,K,void 0,void 0,Ee,te)},fe.createContext=function(S){return S={$$typeof:E,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:y,_context:S},S},fe.createElement=function(S,V,le){var te,K={},Ee=null;if(V!=null)for(te in V.key!==void 0&&(Ee=""+V.key),V)ct.call(V,te)&&te!=="key"&&te!=="__self"&&te!=="__source"&&(K[te]=V[te]);var he=arguments.length-2;if(he===1)K.children=le;else if(1<he){for(var pt=Array(he),Ce=0;Ce<he;Ce++)pt[Ce]=arguments[Ce+2];K.children=pt}if(S&&S.defaultProps)for(te in he=S.defaultProps,he)K[te]===void 0&&(K[te]=he[te]);return Bn(S,Ee,void 0,void 0,null,K)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(S){return{$$typeof:w,render:S}},fe.isValidElement=re,fe.lazy=function(S){return{$$typeof:z,_payload:{_status:-1,_result:S},_init:me}},fe.memo=function(S,V){return{$$typeof:N,type:S,compare:V===void 0?null:V}},fe.startTransition=function(S){var V=se.T,le={};se.T=le;try{var te=S(),K=se.S;K!==null&&K(le,te),typeof te=="object"&&te!==null&&typeof te.then=="function"&&te.then(Me,ae)}catch(Ee){ae(Ee)}finally{se.T=V}},fe.unstable_useCacheRefresh=function(){return se.H.useCacheRefresh()},fe.use=function(S){return se.H.use(S)},fe.useActionState=function(S,V,le){return se.H.useActionState(S,V,le)},fe.useCallback=function(S,V){return se.H.useCallback(S,V)},fe.useContext=function(S){return se.H.useContext(S)},fe.useDebugValue=function(){},fe.useDeferredValue=function(S,V){return se.H.useDeferredValue(S,V)},fe.useEffect=function(S,V){return se.H.useEffect(S,V)},fe.useId=function(){return se.H.useId()},fe.useImperativeHandle=function(S,V,le){return se.H.useImperativeHandle(S,V,le)},fe.useInsertionEffect=function(S,V){return se.H.useInsertionEffect(S,V)},fe.useLayoutEffect=function(S,V){return se.H.useLayoutEffect(S,V)},fe.useMemo=function(S,V){return se.H.useMemo(S,V)},fe.useOptimistic=function(S,V){return se.H.useOptimistic(S,V)},fe.useReducer=function(S,V,le){return se.H.useReducer(S,V,le)},fe.useRef=function(S){return se.H.useRef(S)},fe.useState=function(S){return se.H.useState(S)},fe.useSyncExternalStore=function(S,V,le){return se.H.useSyncExternalStore(S,V,le)},fe.useTransition=function(){return se.H.useTransition()},fe.version="19.0.0",fe}var kf;function tc(){return kf||(kf=1,Ao.exports=sb()),Ao.exports}var No={exports:{}},ht={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zf;function ob(){if(zf)return ht;zf=1;var a=tc();function i(D){var N="https://react.dev/errors/"+D;if(1<arguments.length){N+="?args[]="+encodeURIComponent(arguments[1]);for(var z=2;z<arguments.length;z++)N+="&args[]="+encodeURIComponent(arguments[z])}return"Minified React error #"+D+"; visit "+N+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var u={d:{f:o,r:function(){throw Error(i(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},p=Symbol.for("react.portal");function y(D,N,z){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:p,key:M==null?null:""+M,children:D,containerInfo:N,implementation:z}}var E=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function w(D,N){if(D==="font")return"";if(typeof N=="string")return N==="use-credentials"?N:""}return ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,ht.createPortal=function(D,N){var z=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!N||N.nodeType!==1&&N.nodeType!==9&&N.nodeType!==11)throw Error(i(299));return y(D,N,null,z)},ht.flushSync=function(D){var N=E.T,z=u.p;try{if(E.T=null,u.p=2,D)return D()}finally{E.T=N,u.p=z,u.d.f()}},ht.preconnect=function(D,N){typeof D=="string"&&(N?(N=N.crossOrigin,N=typeof N=="string"?N==="use-credentials"?N:"":void 0):N=null,u.d.C(D,N))},ht.prefetchDNS=function(D){typeof D=="string"&&u.d.D(D)},ht.preinit=function(D,N){if(typeof D=="string"&&N&&typeof N.as=="string"){var z=N.as,M=w(z,N.crossOrigin),q=typeof N.integrity=="string"?N.integrity:void 0,B=typeof N.fetchPriority=="string"?N.fetchPriority:void 0;z==="style"?u.d.S(D,typeof N.precedence=="string"?N.precedence:void 0,{crossOrigin:M,integrity:q,fetchPriority:B}):z==="script"&&u.d.X(D,{crossOrigin:M,integrity:q,fetchPriority:B,nonce:typeof N.nonce=="string"?N.nonce:void 0})}},ht.preinitModule=function(D,N){if(typeof D=="string")if(typeof N=="object"&&N!==null){if(N.as==null||N.as==="script"){var z=w(N.as,N.crossOrigin);u.d.M(D,{crossOrigin:z,integrity:typeof N.integrity=="string"?N.integrity:void 0,nonce:typeof N.nonce=="string"?N.nonce:void 0})}}else N==null&&u.d.M(D)},ht.preload=function(D,N){if(typeof D=="string"&&typeof N=="object"&&N!==null&&typeof N.as=="string"){var z=N.as,M=w(z,N.crossOrigin);u.d.L(D,z,{crossOrigin:M,integrity:typeof N.integrity=="string"?N.integrity:void 0,nonce:typeof N.nonce=="string"?N.nonce:void 0,type:typeof N.type=="string"?N.type:void 0,fetchPriority:typeof N.fetchPriority=="string"?N.fetchPriority:void 0,referrerPolicy:typeof N.referrerPolicy=="string"?N.referrerPolicy:void 0,imageSrcSet:typeof N.imageSrcSet=="string"?N.imageSrcSet:void 0,imageSizes:typeof N.imageSizes=="string"?N.imageSizes:void 0,media:typeof N.media=="string"?N.media:void 0})}},ht.preloadModule=function(D,N){if(typeof D=="string")if(N){var z=w(N.as,N.crossOrigin);u.d.m(D,{as:typeof N.as=="string"&&N.as!=="script"?N.as:void 0,crossOrigin:z,integrity:typeof N.integrity=="string"?N.integrity:void 0})}else u.d.m(D)},ht.requestFormReset=function(D){u.d.r(D)},ht.unstable_batchedUpdates=function(D,N){return D(N)},ht.useFormState=function(D,N,z){return E.H.useFormState(D,N,z)},ht.useFormStatus=function(){return E.H.useHostTransitionStatus()},ht.version="19.0.0",ht}var Mf;function ub(){if(Mf)return No.exports;Mf=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),No.exports=ob(),No.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Of;function db(){if(Of)return Sa;Of=1;var a=cb(),i=tc(),o=ub();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var y=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),N=Symbol.for("react.strict_mode"),z=Symbol.for("react.profiler"),M=Symbol.for("react.provider"),q=Symbol.for("react.consumer"),B=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),ge=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),ze=Symbol.for("react.offscreen"),Be=Symbol.for("react.memo_cache_sentinel"),se=Symbol.iterator;function ct(e){return e===null||typeof e!="object"?null:(e=se&&e[se]||e["@@iterator"],typeof e=="function"?e:null)}var Bn=Symbol.for("react.client.reference");function qn(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Bn?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case D:return"Fragment";case w:return"Portal";case z:return"Profiler";case N:return"StrictMode";case Z:return"Suspense";case W:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case B:return(e.displayName||"Context")+".Provider";case q:return(e._context.displayName||"Context")+".Consumer";case Q:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ge:return t=e.displayName||null,t!==null?t:qn(e.type)||"Memo";case ce:t=e._payload,e=e._init;try{return qn(e(t))}catch{}}return null}var re=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,xe=Object.assign,zt,hn;function nn(e){if(zt===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);zt=t&&t[1]||"",hn=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+zt+e+hn}var pn=!1;function gt(e,t){if(!e||pn)return"";pn=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var G=function(){throw Error()};if(Object.defineProperty(G.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(G,[])}catch(R){var k=R}Reflect.construct(e,[],G)}else{try{G.call()}catch(R){k=R}e.call(G.prototype)}}else{try{throw Error()}catch(R){k=R}(G=e())&&typeof G.catch=="function"&&G.catch(function(){})}}catch(R){if(R&&k&&typeof R.stack=="string")return[R.stack,k.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=r.DetermineComponentFrameRoot(),f=s[0],g=s[1];if(f&&g){var A=f.split(`
`),C=g.split(`
`);for(c=r=0;r<A.length&&!A[r].includes("DetermineComponentFrameRoot");)r++;for(;c<C.length&&!C[c].includes("DetermineComponentFrameRoot");)c++;if(r===A.length||c===C.length)for(r=A.length-1,c=C.length-1;1<=r&&0<=c&&A[r]!==C[c];)c--;for(;1<=r&&0<=c;r--,c--)if(A[r]!==C[c]){if(r!==1||c!==1)do if(r--,c--,0>c||A[r]!==C[c]){var U=`
`+A[r].replace(" at new "," at ");return e.displayName&&U.includes("<anonymous>")&&(U=U.replace("<anonymous>",e.displayName)),U}while(1<=r&&0<=c);break}}}finally{pn=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?nn(n):""}function X(e){switch(e.tag){case 26:case 27:case 5:return nn(e.type);case 16:return nn("Lazy");case 13:return nn("Suspense");case 19:return nn("SuspenseList");case 0:case 15:return e=gt(e.type,!1),e;case 11:return e=gt(e.type.render,!1),e;case 1:return e=gt(e.type,!0),e;default:return""}}function me(e){try{var t="";do t+=X(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function ae(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Me(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function S(e){if(ae(e)!==e)throw Error(u(188))}function V(e){var t=e.alternate;if(!t){if(t=ae(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,r=t;;){var c=n.return;if(c===null)break;var s=c.alternate;if(s===null){if(r=c.return,r!==null){n=r;continue}break}if(c.child===s.child){for(s=c.child;s;){if(s===n)return S(c),e;if(s===r)return S(c),t;s=s.sibling}throw Error(u(188))}if(n.return!==r.return)n=c,r=s;else{for(var f=!1,g=c.child;g;){if(g===n){f=!0,n=c,r=s;break}if(g===r){f=!0,r=c,n=s;break}g=g.sibling}if(!f){for(g=s.child;g;){if(g===n){f=!0,n=s,r=c;break}if(g===r){f=!0,r=s,n=c;break}g=g.sibling}if(!f)throw Error(u(189))}}if(n.alternate!==r)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function le(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=le(e),t!==null)return t;e=e.sibling}return null}var te=Array.isArray,K=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ee={pending:!1,data:null,method:null,action:null},he=[],pt=-1;function Ce(e){return{current:e}}function Je(e){0>pt||(e.current=he[pt],he[pt]=null,pt--)}function qe(e,t){pt++,he[pt]=e.current,e.current=t}var rn=Ce(null),Dl=Ce(null),Ln=Ce(null),za=Ce(null);function Ma(e,t){switch(qe(Ln,t),qe(Dl,e),qe(rn,null),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)&&(t=t.namespaceURI)?nf(t):0;break;default:if(e=e===8?t.parentNode:t,t=e.tagName,e=e.namespaceURI)e=nf(e),t=rf(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Je(rn),qe(rn,t)}function Ur(){Je(rn),Je(Dl),Je(Ln)}function sc(e){e.memoizedState!==null&&qe(za,e);var t=rn.current,n=rf(t,e.type);t!==n&&(qe(Dl,e),qe(rn,n))}function Oa(e){Dl.current===e&&(Je(rn),Je(Dl)),za.current===e&&(Je(za),ga._currentValue=Ee)}var oc=Object.prototype.hasOwnProperty,uc=a.unstable_scheduleCallback,dc=a.unstable_cancelCallback,Bh=a.unstable_shouldYield,qh=a.unstable_requestPaint,ln=a.unstable_now,Lh=a.unstable_getCurrentPriorityLevel,Xo=a.unstable_ImmediatePriority,Zo=a.unstable_UserBlockingPriority,Ra=a.unstable_NormalPriority,Gh=a.unstable_LowPriority,Ko=a.unstable_IdlePriority,Vh=a.log,jh=a.unstable_setDisableYieldValue,wl=null,Nt=null;function Yh(e){if(Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(wl,e,void 0,(e.current.flags&128)===128)}catch{}}function Gn(e){if(typeof Vh=="function"&&jh(e),Nt&&typeof Nt.setStrictMode=="function")try{Nt.setStrictMode(wl,e)}catch{}}var St=Math.clz32?Math.clz32:Zh,Qh=Math.log,Xh=Math.LN2;function Zh(e){return e>>>=0,e===0?32:31-(Qh(e)/Xh|0)|0}var Ua=128,Ba=4194304;function dr(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function qa(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,c=e.suspendedLanes,s=e.pingedLanes,f=e.warmLanes;e=e.finishedLanes!==0;var g=n&134217727;return g!==0?(n=g&~c,n!==0?r=dr(n):(s&=g,s!==0?r=dr(s):e||(f=g&~f,f!==0&&(r=dr(f))))):(g=n&~c,g!==0?r=dr(g):s!==0?r=dr(s):e||(f=n&~f,f!==0&&(r=dr(f)))),r===0?0:t!==0&&t!==r&&(t&c)===0&&(c=r&-r,f=t&-t,c>=f||c===32&&(f&4194176)!==0)?t:r}function _l(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Kh(e,t){switch(e){case 1:case 2:case 4:case 8:return t+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fo(){var e=Ua;return Ua<<=1,(Ua&4194176)===0&&(Ua=128),e}function Jo(){var e=Ba;return Ba<<=1,(Ba&62914560)===0&&(Ba=4194304),e}function mc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Hl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Fh(e,t,n,r,c,s){var f=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var g=e.entanglements,A=e.expirationTimes,C=e.hiddenUpdates;for(n=f&~n;0<n;){var U=31-St(n),G=1<<U;g[U]=0,A[U]=-1;var k=C[U];if(k!==null)for(C[U]=null,U=0;U<k.length;U++){var R=k[U];R!==null&&(R.lane&=-536870913)}n&=~G}r!==0&&$o(e,r,0),s!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=s&~(f&~t))}function $o(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-St(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&4194218}function Wo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-St(n),c=1<<r;c&t|e[r]&t&&(e[r]|=t),n&=~c}}function Io(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Po(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:Nf(e.type))}function Jh(e,t){var n=K.p;try{return K.p=e,t()}finally{K.p=n}}var Vn=Math.random().toString(36).slice(2),mt="__reactFiber$"+Vn,vt="__reactProps$"+Vn,Br="__reactContainer$"+Vn,fc="__reactEvents$"+Vn,$h="__reactListeners$"+Vn,Wh="__reactHandles$"+Vn,eu="__reactResources$"+Vn,Tl="__reactMarker$"+Vn;function hc(e){delete e[mt],delete e[vt],delete e[fc],delete e[$h],delete e[Wh]}function mr(e){var t=e[mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Br]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=cf(e);e!==null;){if(n=e[mt])return n;e=cf(e)}return t}e=n,n=e.parentNode}return null}function qr(e){if(e=e[mt]||e[Br]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function kl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function Lr(e){var t=e[eu];return t||(t=e[eu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function tt(e){e[Tl]=!0}var tu=new Set,nu={};function fr(e,t){Gr(e,t),Gr(e+"Capture",t)}function Gr(e,t){for(nu[e]=t,e=0;e<t.length;e++)tu.add(t[e])}var yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ih=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ru={},lu={};function Ph(e){return oc.call(lu,e)?!0:oc.call(ru,e)?!1:Ih.test(e)?lu[e]=!0:(ru[e]=!0,!1)}function La(e,t,n){if(Ph(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var r=t.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Ga(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function bn(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+r)}}function Mt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function au(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ep(e){var t=au(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var c=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(f){r=""+f,s.call(this,f)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(f){r=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Va(e){e._valueTracker||(e._valueTracker=ep(e))}function iu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=au(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ja(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var tp=/[\n"\\]/g;function Ot(e){return e.replace(tp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function pc(e,t,n,r,c,s,f,g){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Mt(t)):e.value!==""+Mt(t)&&(e.value=""+Mt(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?yc(e,f,Mt(t)):n!=null?yc(e,f,Mt(n)):r!=null&&e.removeAttribute("value"),c==null&&s!=null&&(e.defaultChecked=!!s),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+Mt(g):e.removeAttribute("name")}function cu(e,t,n,r,c,s,f,g){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null))return;n=n!=null?""+Mt(n):"",t=t!=null?""+Mt(t):n,g||t===e.value||(e.value=t),e.defaultValue=t}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=g?e.checked:!!r,e.defaultChecked=!!r,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f)}function yc(e,t,n){t==="number"&&ja(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Vr(e,t,n,r){if(e=e.options,t){t={};for(var c=0;c<n.length;c++)t["$"+n[c]]=!0;for(n=0;n<e.length;n++)c=t.hasOwnProperty("$"+e[n].value),e[n].selected!==c&&(e[n].selected=c),c&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Mt(n),t=null,c=0;c<e.length;c++){if(e[c].value===n){e[c].selected=!0,r&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function su(e,t,n){if(t!=null&&(t=""+Mt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Mt(n):""}function ou(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(u(92));if(te(r)){if(1<r.length)throw Error(u(93));r=r[0]}n=r}n==null&&(n=""),t=n}n=Mt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==""&&r!==null&&(e.value=r)}function jr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var np=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function uu(e,t,n){var r=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?r?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":r?e.setProperty(t,n):typeof n!="number"||n===0||np.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function du(e,t,n){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var c in t)r=t[c],t.hasOwnProperty(c)&&n[c]!==r&&uu(e,c,r)}else for(var s in t)t.hasOwnProperty(s)&&uu(e,s,t[s])}function bc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),lp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ya(e){return lp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var gc=null;function vc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Yr=null,Qr=null;function mu(e){var t=qr(e);if(t&&(e=t.stateNode)){var n=e[vt]||null;e:switch(e=t.stateNode,t.type){case"input":if(pc(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ot(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var c=r[vt]||null;if(!c)throw Error(u(90));pc(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&iu(r)}break e;case"textarea":su(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Vr(e,!!n.multiple,t,!1)}}}var Ec=!1;function fu(e,t,n){if(Ec)return e(t,n);Ec=!0;try{var r=e(t);return r}finally{if(Ec=!1,(Yr!==null||Qr!==null)&&(Di(),Yr&&(t=Yr,e=Qr,Qr=Yr=null,mu(t),e)))for(t=0;t<e.length;t++)mu(e[t])}}function zl(e,t){var n=e.stateNode;if(n===null)return null;var r=n[vt]||null;if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var Ac=!1;if(yn)try{var Ml={};Object.defineProperty(Ml,"passive",{get:function(){Ac=!0}}),window.addEventListener("test",Ml,Ml),window.removeEventListener("test",Ml,Ml)}catch{Ac=!1}var jn=null,Nc=null,Qa=null;function hu(){if(Qa)return Qa;var e,t=Nc,n=t.length,r,c="value"in jn?jn.value:jn.textContent,s=c.length;for(e=0;e<n&&t[e]===c[e];e++);var f=n-e;for(r=1;r<=f&&t[n-r]===c[s-r];r++);return Qa=c.slice(e,1<r?1-r:void 0)}function Xa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Za(){return!0}function pu(){return!1}function Et(e){function t(n,r,c,s,f){this._reactName=n,this._targetInst=c,this.type=r,this.nativeEvent=s,this.target=f,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(n=e[g],this[g]=n?n(s):s[g]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Za:pu,this.isPropagationStopped=pu,this}return xe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Za)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Za)},persist:function(){},isPersistent:Za}),t}var hr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ka=Et(hr),Ol=xe({},hr,{view:0,detail:0}),ap=Et(Ol),Sc,xc,Rl,Fa=xe({},Ol,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Rl&&(Rl&&e.type==="mousemove"?(Sc=e.screenX-Rl.screenX,xc=e.screenY-Rl.screenY):xc=Sc=0,Rl=e),Sc)},movementY:function(e){return"movementY"in e?e.movementY:xc}}),yu=Et(Fa),ip=xe({},Fa,{dataTransfer:0}),cp=Et(ip),sp=xe({},Ol,{relatedTarget:0}),Cc=Et(sp),op=xe({},hr,{animationName:0,elapsedTime:0,pseudoElement:0}),up=Et(op),dp=xe({},hr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),mp=Et(dp),fp=xe({},hr,{data:0}),bu=Et(fp),hp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yp[e])?!!t[e]:!1}function Dc(){return bp}var gp=xe({},Ol,{key:function(e){if(e.key){var t=hp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Xa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dc,charCode:function(e){return e.type==="keypress"?Xa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vp=Et(gp),Ep=xe({},Fa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gu=Et(Ep),Ap=xe({},Ol,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dc}),Np=Et(Ap),Sp=xe({},hr,{propertyName:0,elapsedTime:0,pseudoElement:0}),xp=Et(Sp),Cp=xe({},Fa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Dp=Et(Cp),wp=xe({},hr,{newState:0,oldState:0}),_p=Et(wp),Hp=[9,13,27,32],wc=yn&&"CompositionEvent"in window,Ul=null;yn&&"documentMode"in document&&(Ul=document.documentMode);var Tp=yn&&"TextEvent"in window&&!Ul,vu=yn&&(!wc||Ul&&8<Ul&&11>=Ul),Eu=" ",Au=!1;function Nu(e,t){switch(e){case"keyup":return Hp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Su(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xr=!1;function kp(e,t){switch(e){case"compositionend":return Su(t);case"keypress":return t.which!==32?null:(Au=!0,Eu);case"textInput":return e=t.data,e===Eu&&Au?null:e;default:return null}}function zp(e,t){if(Xr)return e==="compositionend"||!wc&&Nu(e,t)?(e=hu(),Qa=Nc=jn=null,Xr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return vu&&t.locale!=="ko"?null:t.data;default:return null}}var Mp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Mp[e.type]:t==="textarea"}function Cu(e,t,n,r){Yr?Qr?Qr.push(r):Qr=[r]:Yr=r,t=ki(t,"onChange"),0<t.length&&(n=new Ka("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Bl=null,ql=null;function Op(e){Wm(e,0)}function Ja(e){var t=kl(e);if(iu(t))return e}function Du(e,t){if(e==="change")return t}var wu=!1;if(yn){var _c;if(yn){var Hc="oninput"in document;if(!Hc){var _u=document.createElement("div");_u.setAttribute("oninput","return;"),Hc=typeof _u.oninput=="function"}_c=Hc}else _c=!1;wu=_c&&(!document.documentMode||9<document.documentMode)}function Hu(){Bl&&(Bl.detachEvent("onpropertychange",Tu),ql=Bl=null)}function Tu(e){if(e.propertyName==="value"&&Ja(ql)){var t=[];Cu(t,ql,e,vc(e)),fu(Op,t)}}function Rp(e,t,n){e==="focusin"?(Hu(),Bl=t,ql=n,Bl.attachEvent("onpropertychange",Tu)):e==="focusout"&&Hu()}function Up(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ja(ql)}function Bp(e,t){if(e==="click")return Ja(t)}function qp(e,t){if(e==="input"||e==="change")return Ja(t)}function Lp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var xt=typeof Object.is=="function"?Object.is:Lp;function Ll(e,t){if(xt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var c=n[r];if(!oc.call(t,c)||!xt(e[c],t[c]))return!1}return!0}function ku(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zu(e,t){var n=ku(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ku(n)}}function Mu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Mu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ou(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ja(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ja(e.document)}return t}function Tc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Gp(e,t){var n=Ou(t);t=e.focusedElem;var r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Mu(t.ownerDocument.documentElement,t)){if(r!==null&&Tc(t)){if(e=r.start,n=r.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var c=t.textContent.length,s=Math.min(r.start,c);r=r.end===void 0?s:Math.min(r.end,c),!n.extend&&s>r&&(c=r,r=s,s=c),c=zu(t,s);var f=zu(t,r);c&&f&&(n.rangeCount!==1||n.anchorNode!==c.node||n.anchorOffset!==c.offset||n.focusNode!==f.node||n.focusOffset!==f.offset)&&(e=e.createRange(),e.setStart(c.node,c.offset),n.removeAllRanges(),s>r?(n.addRange(e),n.extend(f.node,f.offset)):(e.setEnd(f.node,f.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Vp=yn&&"documentMode"in document&&11>=document.documentMode,Zr=null,kc=null,Gl=null,zc=!1;function Ru(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zc||Zr==null||Zr!==ja(r)||(r=Zr,"selectionStart"in r&&Tc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gl&&Ll(Gl,r)||(Gl=r,r=ki(kc,"onSelect"),0<r.length&&(t=new Ka("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Zr)))}function pr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Kr={animationend:pr("Animation","AnimationEnd"),animationiteration:pr("Animation","AnimationIteration"),animationstart:pr("Animation","AnimationStart"),transitionrun:pr("Transition","TransitionRun"),transitionstart:pr("Transition","TransitionStart"),transitioncancel:pr("Transition","TransitionCancel"),transitionend:pr("Transition","TransitionEnd")},Mc={},Uu={};yn&&(Uu=document.createElement("div").style,"AnimationEvent"in window||(delete Kr.animationend.animation,delete Kr.animationiteration.animation,delete Kr.animationstart.animation),"TransitionEvent"in window||delete Kr.transitionend.transition);function yr(e){if(Mc[e])return Mc[e];if(!Kr[e])return e;var t=Kr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Uu)return Mc[e]=t[n];return e}var Bu=yr("animationend"),qu=yr("animationiteration"),Lu=yr("animationstart"),jp=yr("transitionrun"),Yp=yr("transitionstart"),Qp=yr("transitioncancel"),Gu=yr("transitionend"),Vu=new Map,ju="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Ft(e,t){Vu.set(e,t),fr(t,[e])}var Rt=[],Fr=0,Oc=0;function $a(){for(var e=Fr,t=Oc=Fr=0;t<e;){var n=Rt[t];Rt[t++]=null;var r=Rt[t];Rt[t++]=null;var c=Rt[t];Rt[t++]=null;var s=Rt[t];if(Rt[t++]=null,r!==null&&c!==null){var f=r.pending;f===null?c.next=c:(c.next=f.next,f.next=c),r.pending=c}s!==0&&Yu(n,c,s)}}function Wa(e,t,n,r){Rt[Fr++]=e,Rt[Fr++]=t,Rt[Fr++]=n,Rt[Fr++]=r,Oc|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Rc(e,t,n,r){return Wa(e,t,n,r),Ia(e)}function Yn(e,t){return Wa(e,null,null,t),Ia(e)}function Yu(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var c=!1,s=e.return;s!==null;)s.childLanes|=n,r=s.alternate,r!==null&&(r.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(c=!0)),e=s,s=s.return;c&&t!==null&&e.tag===3&&(s=e.stateNode,c=31-St(n),s=s.hiddenUpdates,e=s[c],e===null?s[c]=[t]:e.push(t),t.lane=n|536870912)}function Ia(e){if(50<da)throw da=0,Vs=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Jr={},Qu=new WeakMap;function Ut(e,t){if(typeof e=="object"&&e!==null){var n=Qu.get(e);return n!==void 0?n:(t={value:e,source:t,stack:me(t)},Qu.set(e,t),t)}return{value:e,source:t,stack:me(t)}}var $r=[],Wr=0,Pa=null,ei=0,Bt=[],qt=0,br=null,gn=1,vn="";function gr(e,t){$r[Wr++]=ei,$r[Wr++]=Pa,Pa=e,ei=t}function Xu(e,t,n){Bt[qt++]=gn,Bt[qt++]=vn,Bt[qt++]=br,br=e;var r=gn;e=vn;var c=32-St(r)-1;r&=~(1<<c),n+=1;var s=32-St(t)+c;if(30<s){var f=c-c%5;s=(r&(1<<f)-1).toString(32),r>>=f,c-=f,gn=1<<32-St(t)+c|n<<c|r,vn=s+e}else gn=1<<s|n<<c|r,vn=e}function Uc(e){e.return!==null&&(gr(e,1),Xu(e,1,0))}function Bc(e){for(;e===Pa;)Pa=$r[--Wr],$r[Wr]=null,ei=$r[--Wr],$r[Wr]=null;for(;e===br;)br=Bt[--qt],Bt[qt]=null,vn=Bt[--qt],Bt[qt]=null,gn=Bt[--qt],Bt[qt]=null}var yt=null,st=null,Ne=!1,Jt=null,an=!1,qc=Error(u(519));function vr(e){var t=Error(u(418,""));throw Yl(Ut(t,e)),qc}function Zu(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[mt]=e,t[vt]=r,n){case"dialog":ve("cancel",t),ve("close",t);break;case"iframe":case"object":case"embed":ve("load",t);break;case"video":case"audio":for(n=0;n<fa.length;n++)ve(fa[n],t);break;case"source":ve("error",t);break;case"img":case"image":case"link":ve("error",t),ve("load",t);break;case"details":ve("toggle",t);break;case"input":ve("invalid",t),cu(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),Va(t);break;case"select":ve("invalid",t);break;case"textarea":ve("invalid",t),ou(t,r.value,r.defaultValue,r.children),Va(t)}n=r.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||r.suppressHydrationWarning===!0||tf(t.textContent,n)?(r.popover!=null&&(ve("beforetoggle",t),ve("toggle",t)),r.onScroll!=null&&ve("scroll",t),r.onScrollEnd!=null&&ve("scrollend",t),r.onClick!=null&&(t.onclick=zi),t=!0):t=!1,t||vr(e)}function Ku(e){for(yt=e.return;yt;)switch(yt.tag){case 3:case 27:an=!0;return;case 5:case 13:an=!1;return;default:yt=yt.return}}function Vl(e){if(e!==yt)return!1;if(!Ne)return Ku(e),Ne=!0,!1;var t=!1,n;if((n=e.tag!==3&&e.tag!==27)&&((n=e.tag===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||lo(e.type,e.memoizedProps)),n=!n),n&&(t=!0),t&&st&&vr(e),Ku(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){st=Wt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}st=null}}else st=yt?Wt(e.stateNode.nextSibling):null;return!0}function jl(){st=yt=null,Ne=!1}function Yl(e){Jt===null?Jt=[e]:Jt.push(e)}var Ql=Error(u(460)),Fu=Error(u(474)),Lc={then:function(){}};function Ju(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ti(){}function $u(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ti,ti),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,e===Ql?Error(u(483)):e;default:if(typeof t.status=="string")t.then(ti,ti);else{if(e=Oe,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(r){if(t.status==="pending"){var c=t;c.status="fulfilled",c.value=r}},function(r){if(t.status==="pending"){var c=t;c.status="rejected",c.reason=r}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,e===Ql?Error(u(483)):e}throw Xl=t,Ql}}var Xl=null;function Wu(){if(Xl===null)throw Error(u(459));var e=Xl;return Xl=null,e}var Ir=null,Zl=0;function ni(e){var t=Zl;return Zl+=1,Ir===null&&(Ir=[]),$u(Ir,e,t)}function Kl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ri(e,t){throw t.$$typeof===y?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Iu(e){var t=e._init;return t(e._payload)}function Pu(e){function t(_,x){if(e){var T=_.deletions;T===null?(_.deletions=[x],_.flags|=16):T.push(x)}}function n(_,x){if(!e)return null;for(;x!==null;)t(_,x),x=x.sibling;return null}function r(_){for(var x=new Map;_!==null;)_.key!==null?x.set(_.key,_):x.set(_.index,_),_=_.sibling;return x}function c(_,x){return _=tr(_,x),_.index=0,_.sibling=null,_}function s(_,x,T){return _.index=T,e?(T=_.alternate,T!==null?(T=T.index,T<x?(_.flags|=33554434,x):T):(_.flags|=33554434,x)):(_.flags|=1048576,x)}function f(_){return e&&_.alternate===null&&(_.flags|=33554434),_}function g(_,x,T,L){return x===null||x.tag!==6?(x=Ms(T,_.mode,L),x.return=_,x):(x=c(x,T),x.return=_,x)}function A(_,x,T,L){var F=T.type;return F===D?U(_,x,T.props.children,L,T.key):x!==null&&(x.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===ce&&Iu(F)===x.type)?(x=c(x,T.props),Kl(x,T),x.return=_,x):(x=Ai(T.type,T.key,T.props,null,_.mode,L),Kl(x,T),x.return=_,x)}function C(_,x,T,L){return x===null||x.tag!==4||x.stateNode.containerInfo!==T.containerInfo||x.stateNode.implementation!==T.implementation?(x=Os(T,_.mode,L),x.return=_,x):(x=c(x,T.children||[]),x.return=_,x)}function U(_,x,T,L,F){return x===null||x.tag!==7?(x=Hr(T,_.mode,L,F),x.return=_,x):(x=c(x,T),x.return=_,x)}function G(_,x,T){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=Ms(""+x,_.mode,T),x.return=_,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case E:return T=Ai(x.type,x.key,x.props,null,_.mode,T),Kl(T,x),T.return=_,T;case w:return x=Os(x,_.mode,T),x.return=_,x;case ce:var L=x._init;return x=L(x._payload),G(_,x,T)}if(te(x)||ct(x))return x=Hr(x,_.mode,T,null),x.return=_,x;if(typeof x.then=="function")return G(_,ni(x),T);if(x.$$typeof===B)return G(_,gi(_,x),T);ri(_,x)}return null}function k(_,x,T,L){var F=x!==null?x.key:null;if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return F!==null?null:g(_,x,""+T,L);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case E:return T.key===F?A(_,x,T,L):null;case w:return T.key===F?C(_,x,T,L):null;case ce:return F=T._init,T=F(T._payload),k(_,x,T,L)}if(te(T)||ct(T))return F!==null?null:U(_,x,T,L,null);if(typeof T.then=="function")return k(_,x,ni(T),L);if(T.$$typeof===B)return k(_,x,gi(_,T),L);ri(_,T)}return null}function R(_,x,T,L,F){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return _=_.get(T)||null,g(x,_,""+L,F);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case E:return _=_.get(L.key===null?T:L.key)||null,A(x,_,L,F);case w:return _=_.get(L.key===null?T:L.key)||null,C(x,_,L,F);case ce:var ye=L._init;return L=ye(L._payload),R(_,x,T,L,F)}if(te(L)||ct(L))return _=_.get(T)||null,U(x,_,L,F,null);if(typeof L.then=="function")return R(_,x,T,ni(L),F);if(L.$$typeof===B)return R(_,x,T,gi(x,L),F);ri(x,L)}return null}function I(_,x,T,L){for(var F=null,ye=null,P=x,ne=x=0,lt=null;P!==null&&ne<T.length;ne++){P.index>ne?(lt=P,P=null):lt=P.sibling;var Se=k(_,P,T[ne],L);if(Se===null){P===null&&(P=lt);break}e&&P&&Se.alternate===null&&t(_,P),x=s(Se,x,ne),ye===null?F=Se:ye.sibling=Se,ye=Se,P=lt}if(ne===T.length)return n(_,P),Ne&&gr(_,ne),F;if(P===null){for(;ne<T.length;ne++)P=G(_,T[ne],L),P!==null&&(x=s(P,x,ne),ye===null?F=P:ye.sibling=P,ye=P);return Ne&&gr(_,ne),F}for(P=r(P);ne<T.length;ne++)lt=R(P,_,ne,T[ne],L),lt!==null&&(e&&lt.alternate!==null&&P.delete(lt.key===null?ne:lt.key),x=s(lt,x,ne),ye===null?F=lt:ye.sibling=lt,ye=lt);return e&&P.forEach(function(sr){return t(_,sr)}),Ne&&gr(_,ne),F}function oe(_,x,T,L){if(T==null)throw Error(u(151));for(var F=null,ye=null,P=x,ne=x=0,lt=null,Se=T.next();P!==null&&!Se.done;ne++,Se=T.next()){P.index>ne?(lt=P,P=null):lt=P.sibling;var sr=k(_,P,Se.value,L);if(sr===null){P===null&&(P=lt);break}e&&P&&sr.alternate===null&&t(_,P),x=s(sr,x,ne),ye===null?F=sr:ye.sibling=sr,ye=sr,P=lt}if(Se.done)return n(_,P),Ne&&gr(_,ne),F;if(P===null){for(;!Se.done;ne++,Se=T.next())Se=G(_,Se.value,L),Se!==null&&(x=s(Se,x,ne),ye===null?F=Se:ye.sibling=Se,ye=Se);return Ne&&gr(_,ne),F}for(P=r(P);!Se.done;ne++,Se=T.next())Se=R(P,_,ne,Se.value,L),Se!==null&&(e&&Se.alternate!==null&&P.delete(Se.key===null?ne:Se.key),x=s(Se,x,ne),ye===null?F=Se:ye.sibling=Se,ye=Se);return e&&P.forEach(function(lb){return t(_,lb)}),Ne&&gr(_,ne),F}function Ye(_,x,T,L){if(typeof T=="object"&&T!==null&&T.type===D&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case E:e:{for(var F=T.key;x!==null;){if(x.key===F){if(F=T.type,F===D){if(x.tag===7){n(_,x.sibling),L=c(x,T.props.children),L.return=_,_=L;break e}}else if(x.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===ce&&Iu(F)===x.type){n(_,x.sibling),L=c(x,T.props),Kl(L,T),L.return=_,_=L;break e}n(_,x);break}else t(_,x);x=x.sibling}T.type===D?(L=Hr(T.props.children,_.mode,L,T.key),L.return=_,_=L):(L=Ai(T.type,T.key,T.props,null,_.mode,L),Kl(L,T),L.return=_,_=L)}return f(_);case w:e:{for(F=T.key;x!==null;){if(x.key===F)if(x.tag===4&&x.stateNode.containerInfo===T.containerInfo&&x.stateNode.implementation===T.implementation){n(_,x.sibling),L=c(x,T.children||[]),L.return=_,_=L;break e}else{n(_,x);break}else t(_,x);x=x.sibling}L=Os(T,_.mode,L),L.return=_,_=L}return f(_);case ce:return F=T._init,T=F(T._payload),Ye(_,x,T,L)}if(te(T))return I(_,x,T,L);if(ct(T)){if(F=ct(T),typeof F!="function")throw Error(u(150));return T=F.call(T),oe(_,x,T,L)}if(typeof T.then=="function")return Ye(_,x,ni(T),L);if(T.$$typeof===B)return Ye(_,x,gi(_,T),L);ri(_,T)}return typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint"?(T=""+T,x!==null&&x.tag===6?(n(_,x.sibling),L=c(x,T),L.return=_,_=L):(n(_,x),L=Ms(T,_.mode,L),L.return=_,_=L),f(_)):n(_,x)}return function(_,x,T,L){try{Zl=0;var F=Ye(_,x,T,L);return Ir=null,F}catch(P){if(P===Ql)throw P;var ye=jt(29,P,null,_.mode);return ye.lanes=L,ye.return=_,ye}finally{}}}var Er=Pu(!0),ed=Pu(!1),Pr=Ce(null),li=Ce(0);function td(e,t){e=Tn,qe(li,e),qe(Pr,t),Tn=e|t.baseLanes}function Gc(){qe(li,Tn),qe(Pr,Pr.current)}function Vc(){Tn=li.current,Je(Pr),Je(li)}var Lt=Ce(null),cn=null;function Qn(e){var t=e.alternate;qe(Pe,Pe.current&1),qe(Lt,e),cn===null&&(t===null||Pr.current!==null||t.memoizedState!==null)&&(cn=e)}function nd(e){if(e.tag===22){if(qe(Pe,Pe.current),qe(Lt,e),cn===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(cn=e)}}else Xn()}function Xn(){qe(Pe,Pe.current),qe(Lt,Lt.current)}function En(e){Je(Lt),cn===e&&(cn=null),Je(Pe)}var Pe=Ce(0);function ai(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Xp=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,r){e.push(r)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Zp=a.unstable_scheduleCallback,Kp=a.unstable_NormalPriority,et={$$typeof:B,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function jc(){return{controller:new Xp,data:new Map,refCount:0}}function Fl(e){e.refCount--,e.refCount===0&&Zp(Kp,function(){e.controller.abort()})}var Jl=null,Yc=0,el=0,tl=null;function Fp(e,t){if(Jl===null){var n=Jl=[];Yc=0,el=Js(),tl={status:"pending",value:void 0,then:function(r){n.push(r)}}}return Yc++,t.then(rd,rd),t}function rd(){if(--Yc===0&&Jl!==null){tl!==null&&(tl.status="fulfilled");var e=Jl;Jl=null,el=0,tl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Jp(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(c){n.push(c)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var c=0;c<n.length;c++)(0,n[c])(t)},function(c){for(r.status="rejected",r.reason=c,c=0;c<n.length;c++)(0,n[c])(void 0)}),r}var ld=re.S;re.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Fp(e,t),ld!==null&&ld(e,t)};var Ar=Ce(null);function Qc(){var e=Ar.current;return e!==null?e:Oe.pooledCache}function ii(e,t){t===null?qe(Ar,Ar.current):qe(Ar,t.pool)}function ad(){var e=Qc();return e===null?null:{parent:et._currentValue,pool:e}}var Zn=0,pe=null,_e=null,$e=null,ci=!1,nl=!1,Nr=!1,si=0,$l=0,rl=null,$p=0;function Ze(){throw Error(u(321))}function Xc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!xt(e[n],t[n]))return!1;return!0}function Zc(e,t,n,r,c,s){return Zn=s,pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,re.H=e===null||e.memoizedState===null?Sr:Kn,Nr=!1,s=n(r,c),Nr=!1,nl&&(s=cd(t,n,r,c)),id(e),s}function id(e){re.H=sn;var t=_e!==null&&_e.next!==null;if(Zn=0,$e=_e=pe=null,ci=!1,$l=0,rl=null,t)throw Error(u(300));e===null||nt||(e=e.dependencies,e!==null&&bi(e)&&(nt=!0))}function cd(e,t,n,r){pe=e;var c=0;do{if(nl&&(rl=null),$l=0,nl=!1,25<=c)throw Error(u(301));if(c+=1,$e=_e=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}re.H=xr,s=t(n,r)}while(nl);return s}function Wp(){var e=re.H,t=e.useState()[0];return t=typeof t.then=="function"?Wl(t):t,e=e.useState()[0],(_e!==null?_e.memoizedState:null)!==e&&(pe.flags|=1024),t}function Kc(){var e=si!==0;return si=0,e}function Fc(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Jc(e){if(ci){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ci=!1}Zn=0,$e=_e=pe=null,nl=!1,$l=si=0,rl=null}function At(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?pe.memoizedState=$e=e:$e=$e.next=e,$e}function We(){if(_e===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=_e.next;var t=$e===null?pe.memoizedState:$e.next;if(t!==null)$e=t,_e=e;else{if(e===null)throw pe.alternate===null?Error(u(467)):Error(u(310));_e=e,e={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},$e===null?pe.memoizedState=$e=e:$e=$e.next=e}return $e}var oi;oi=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Wl(e){var t=$l;return $l+=1,rl===null&&(rl=[]),e=$u(rl,e,t),t=pe,($e===null?t.memoizedState:$e.next)===null&&(t=t.alternate,re.H=t===null||t.memoizedState===null?Sr:Kn),e}function ui(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Wl(e);if(e.$$typeof===B)return ft(e)}throw Error(u(438,String(e)))}function $c(e){var t=null,n=pe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=pe.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(c){return c.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=oi(),pe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=Be;return t.index++,n}function An(e,t){return typeof t=="function"?t(e):t}function di(e){var t=We();return Wc(t,_e,e)}function Wc(e,t,n){var r=e.queue;if(r===null)throw Error(u(311));r.lastRenderedReducer=n;var c=e.baseQueue,s=r.pending;if(s!==null){if(c!==null){var f=c.next;c.next=s.next,s.next=f}t.baseQueue=c=s,r.pending=null}if(s=e.baseState,c===null)e.memoizedState=s;else{t=c.next;var g=f=null,A=null,C=t,U=!1;do{var G=C.lane&-536870913;if(G!==C.lane?(Ae&G)===G:(Zn&G)===G){var k=C.revertLane;if(k===0)A!==null&&(A=A.next={lane:0,revertLane:0,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),G===el&&(U=!0);else if((Zn&k)===k){C=C.next,k===el&&(U=!0);continue}else G={lane:0,revertLane:C.revertLane,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},A===null?(g=A=G,f=s):A=A.next=G,pe.lanes|=k,nr|=k;G=C.action,Nr&&n(s,G),s=C.hasEagerState?C.eagerState:n(s,G)}else k={lane:G,revertLane:C.revertLane,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},A===null?(g=A=k,f=s):A=A.next=k,pe.lanes|=G,nr|=G;C=C.next}while(C!==null&&C!==t);if(A===null?f=s:A.next=g,!xt(s,e.memoizedState)&&(nt=!0,U&&(n=tl,n!==null)))throw n;e.memoizedState=s,e.baseState=f,e.baseQueue=A,r.lastRenderedState=s}return c===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ic(e){var t=We(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var r=n.dispatch,c=n.pending,s=t.memoizedState;if(c!==null){n.pending=null;var f=c=c.next;do s=e(s,f.action),f=f.next;while(f!==c);xt(s,t.memoizedState)||(nt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function sd(e,t,n){var r=pe,c=We(),s=Ne;if(s){if(n===void 0)throw Error(u(407));n=n()}else n=t();var f=!xt((_e||c).memoizedState,n);if(f&&(c.memoizedState=n,nt=!0),c=c.queue,ts(dd.bind(null,r,c,e),[e]),c.getSnapshot!==t||f||$e!==null&&$e.memoizedState.tag&1){if(r.flags|=2048,ll(9,ud.bind(null,r,c,n,t),{destroy:void 0},null),Oe===null)throw Error(u(349));s||(Zn&60)!==0||od(r,t,n)}return n}function od(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=pe.updateQueue,t===null?(t=oi(),pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ud(e,t,n,r){t.value=n,t.getSnapshot=r,md(t)&&fd(e)}function dd(e,t,n){return n(function(){md(t)&&fd(e)})}function md(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!xt(e,n)}catch{return!0}}function fd(e){var t=Yn(e,2);t!==null&&bt(t,e,2)}function Pc(e){var t=At();if(typeof e=="function"){var n=e;if(e=n(),Nr){Gn(!0);try{n()}finally{Gn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:e},t}function hd(e,t,n,r){return e.baseState=n,Wc(e,_e,typeof r=="function"?r:An)}function Ip(e,t,n,r,c){if(hi(e))throw Error(u(485));if(e=t.action,e!==null){var s={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){s.listeners.push(f)}};re.T!==null?n(!0):s.isTransition=!1,r(s),n=t.pending,n===null?(s.next=t.pending=s,pd(t,s)):(s.next=n.next,t.pending=n.next=s)}}function pd(e,t){var n=t.action,r=t.payload,c=e.state;if(t.isTransition){var s=re.T,f={};re.T=f;try{var g=n(c,r),A=re.S;A!==null&&A(f,g),yd(e,t,g)}catch(C){es(e,t,C)}finally{re.T=s}}else try{s=n(c,r),yd(e,t,s)}catch(C){es(e,t,C)}}function yd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(r){bd(e,t,r)},function(r){return es(e,t,r)}):bd(e,t,n)}function bd(e,t,n){t.status="fulfilled",t.value=n,gd(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,pd(e,n)))}function es(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status="rejected",t.reason=n,gd(t),t=t.next;while(t!==r)}e.action=null}function gd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function vd(e,t){return t}function Ed(e,t){if(Ne){var n=Oe.formState;if(n!==null){e:{var r=pe;if(Ne){if(st){t:{for(var c=st,s=an;c.nodeType!==8;){if(!s){c=null;break t}if(c=Wt(c.nextSibling),c===null){c=null;break t}}s=c.data,c=s==="F!"||s==="F"?c:null}if(c){st=Wt(c.nextSibling),r=c.data==="F!";break e}}vr(r)}r=!1}r&&(t=n[0])}}return n=At(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vd,lastRenderedState:t},n.queue=r,n=qd.bind(null,pe,r),r.dispatch=n,r=Pc(!1),s=is.bind(null,pe,!1,r.queue),r=At(),c={state:t,dispatch:null,action:e,pending:null},r.queue=c,n=Ip.bind(null,pe,c,s,n),c.dispatch=n,r.memoizedState=e,[t,n,!1]}function Ad(e){var t=We();return Nd(t,_e,e)}function Nd(e,t,n){t=Wc(e,t,vd)[0],e=di(An)[0],t=typeof t=="object"&&t!==null&&typeof t.then=="function"?Wl(t):t;var r=We(),c=r.queue,s=c.dispatch;return n!==r.memoizedState&&(pe.flags|=2048,ll(9,Pp.bind(null,c,n),{destroy:void 0},null)),[t,s,e]}function Pp(e,t){e.action=t}function Sd(e){var t=We(),n=_e;if(n!==null)return Nd(t,n,e);We(),t=t.memoizedState,n=We();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function ll(e,t,n,r){return e={tag:e,create:t,inst:n,deps:r,next:null},t=pe.updateQueue,t===null&&(t=oi(),pe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function xd(){return We().memoizedState}function mi(e,t,n,r){var c=At();pe.flags|=e,c.memoizedState=ll(1|t,n,{destroy:void 0},r===void 0?null:r)}function fi(e,t,n,r){var c=We();r=r===void 0?null:r;var s=c.memoizedState.inst;_e!==null&&r!==null&&Xc(r,_e.memoizedState.deps)?c.memoizedState=ll(t,n,s,r):(pe.flags|=e,c.memoizedState=ll(1|t,n,s,r))}function Cd(e,t){mi(8390656,8,e,t)}function ts(e,t){fi(2048,8,e,t)}function Dd(e,t){return fi(4,2,e,t)}function wd(e,t){return fi(4,4,e,t)}function _d(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Hd(e,t,n){n=n!=null?n.concat([e]):null,fi(4,4,_d.bind(null,t,e),n)}function ns(){}function Td(e,t){var n=We();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Xc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function kd(e,t){var n=We();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Xc(t,r[1]))return r[0];if(r=e(),Nr){Gn(!0);try{e()}finally{Gn(!1)}}return n.memoizedState=[r,t],r}function rs(e,t,n){return n===void 0||(Zn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=Mm(),pe.lanes|=e,nr|=e,n)}function zd(e,t,n,r){return xt(n,t)?n:Pr.current!==null?(e=rs(e,n,r),xt(e,t)||(nt=!0),e):(Zn&42)===0?(nt=!0,e.memoizedState=n):(e=Mm(),pe.lanes|=e,nr|=e,t)}function Md(e,t,n,r,c){var s=K.p;K.p=s!==0&&8>s?s:8;var f=re.T,g={};re.T=g,is(e,!1,t,n);try{var A=c(),C=re.S;if(C!==null&&C(g,A),A!==null&&typeof A=="object"&&typeof A.then=="function"){var U=Jp(A,r);Il(e,t,U,_t(e))}else Il(e,t,r,_t(e))}catch(G){Il(e,t,{then:function(){},status:"rejected",reason:G},_t())}finally{K.p=s,re.T=f}}function ey(){}function ls(e,t,n,r){if(e.tag!==5)throw Error(u(476));var c=Od(e).queue;Md(e,c,t,Ee,n===null?ey:function(){return Rd(e),n(r)})}function Od(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Ee,baseState:Ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:Ee},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Rd(e){var t=Od(e).next.queue;Il(e,t,{},_t())}function as(){return ft(ga)}function Ud(){return We().memoizedState}function Bd(){return We().memoizedState}function ty(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=_t();e=$n(n);var r=Wn(t,e,n);r!==null&&(bt(r,t,n),ta(r,t,n)),t={cache:jc()},e.payload=t;return}t=t.return}}function ny(e,t,n){var r=_t();n={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},hi(e)?Ld(t,n):(n=Rc(e,t,n,r),n!==null&&(bt(n,e,r),Gd(n,t,r)))}function qd(e,t,n){var r=_t();Il(e,t,n,r)}function Il(e,t,n,r){var c={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(hi(e))Ld(t,c);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var f=t.lastRenderedState,g=s(f,n);if(c.hasEagerState=!0,c.eagerState=g,xt(g,f))return Wa(e,t,c,0),Oe===null&&$a(),!1}catch{}finally{}if(n=Rc(e,t,c,r),n!==null)return bt(n,e,r),Gd(n,t,r),!0}return!1}function is(e,t,n,r){if(r={lane:2,revertLane:Js(),action:r,hasEagerState:!1,eagerState:null,next:null},hi(e)){if(t)throw Error(u(479))}else t=Rc(e,n,r,2),t!==null&&bt(t,e,2)}function hi(e){var t=e.alternate;return e===pe||t!==null&&t===pe}function Ld(e,t){nl=ci=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Gd(e,t,n){if((n&4194176)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Wo(e,n)}}var sn={readContext:ft,use:ui,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useLayoutEffect:Ze,useInsertionEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useSyncExternalStore:Ze,useId:Ze};sn.useCacheRefresh=Ze,sn.useMemoCache=Ze,sn.useHostTransitionStatus=Ze,sn.useFormState=Ze,sn.useActionState=Ze,sn.useOptimistic=Ze;var Sr={readContext:ft,use:ui,useCallback:function(e,t){return At().memoizedState=[e,t===void 0?null:t],e},useContext:ft,useEffect:Cd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,mi(4194308,4,_d.bind(null,t,e),n)},useLayoutEffect:function(e,t){return mi(4194308,4,e,t)},useInsertionEffect:function(e,t){mi(4,2,e,t)},useMemo:function(e,t){var n=At();t=t===void 0?null:t;var r=e();if(Nr){Gn(!0);try{e()}finally{Gn(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=At();if(n!==void 0){var c=n(t);if(Nr){Gn(!0);try{n(t)}finally{Gn(!1)}}}else c=t;return r.memoizedState=r.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},r.queue=e,e=e.dispatch=ny.bind(null,pe,e),[r.memoizedState,e]},useRef:function(e){var t=At();return e={current:e},t.memoizedState=e},useState:function(e){e=Pc(e);var t=e.queue,n=qd.bind(null,pe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ns,useDeferredValue:function(e,t){var n=At();return rs(n,e,t)},useTransition:function(){var e=Pc(!1);return e=Md.bind(null,pe,e.queue,!0,!1),At().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=pe,c=At();if(Ne){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),Oe===null)throw Error(u(349));(Ae&60)!==0||od(r,t,n)}c.memoizedState=n;var s={value:n,getSnapshot:t};return c.queue=s,Cd(dd.bind(null,r,s,e),[e]),r.flags|=2048,ll(9,ud.bind(null,r,s,n,t),{destroy:void 0},null),n},useId:function(){var e=At(),t=Oe.identifierPrefix;if(Ne){var n=vn,r=gn;n=(r&~(1<<32-St(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=si++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=$p++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},useCacheRefresh:function(){return At().memoizedState=ty.bind(null,pe)}};Sr.useMemoCache=$c,Sr.useHostTransitionStatus=as,Sr.useFormState=Ed,Sr.useActionState=Ed,Sr.useOptimistic=function(e){var t=At();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=is.bind(null,pe,!0,n),n.dispatch=t,[e,t]};var Kn={readContext:ft,use:ui,useCallback:Td,useContext:ft,useEffect:ts,useImperativeHandle:Hd,useInsertionEffect:Dd,useLayoutEffect:wd,useMemo:kd,useReducer:di,useRef:xd,useState:function(){return di(An)},useDebugValue:ns,useDeferredValue:function(e,t){var n=We();return zd(n,_e.memoizedState,e,t)},useTransition:function(){var e=di(An)[0],t=We().memoizedState;return[typeof e=="boolean"?e:Wl(e),t]},useSyncExternalStore:sd,useId:Ud};Kn.useCacheRefresh=Bd,Kn.useMemoCache=$c,Kn.useHostTransitionStatus=as,Kn.useFormState=Ad,Kn.useActionState=Ad,Kn.useOptimistic=function(e,t){var n=We();return hd(n,_e,e,t)};var xr={readContext:ft,use:ui,useCallback:Td,useContext:ft,useEffect:ts,useImperativeHandle:Hd,useInsertionEffect:Dd,useLayoutEffect:wd,useMemo:kd,useReducer:Ic,useRef:xd,useState:function(){return Ic(An)},useDebugValue:ns,useDeferredValue:function(e,t){var n=We();return _e===null?rs(n,e,t):zd(n,_e.memoizedState,e,t)},useTransition:function(){var e=Ic(An)[0],t=We().memoizedState;return[typeof e=="boolean"?e:Wl(e),t]},useSyncExternalStore:sd,useId:Ud};xr.useCacheRefresh=Bd,xr.useMemoCache=$c,xr.useHostTransitionStatus=as,xr.useFormState=Sd,xr.useActionState=Sd,xr.useOptimistic=function(e,t){var n=We();return _e!==null?hd(n,_e,e,t):(n.baseState=e,[e,n.queue.dispatch])};function cs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:xe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ss={isMounted:function(e){return(e=e._reactInternals)?ae(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=_t(),c=$n(r);c.payload=t,n!=null&&(c.callback=n),t=Wn(e,c,r),t!==null&&(bt(t,e,r),ta(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=_t(),c=$n(r);c.tag=1,c.payload=t,n!=null&&(c.callback=n),t=Wn(e,c,r),t!==null&&(bt(t,e,r),ta(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=_t(),r=$n(n);r.tag=2,t!=null&&(r.callback=t),t=Wn(e,r,n),t!==null&&(bt(t,e,n),ta(t,e,n))}};function Vd(e,t,n,r,c,s,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,f):t.prototype&&t.prototype.isPureReactComponent?!Ll(n,r)||!Ll(c,s):!0}function jd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ss.enqueueReplaceState(t,t.state,null)}function Cr(e,t){var n=t;if("ref"in t){n={};for(var r in t)r!=="ref"&&(n[r]=t[r])}if(e=e.defaultProps){n===t&&(n=xe({},n));for(var c in e)n[c]===void 0&&(n[c]=e[c])}return n}var pi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Yd(e){pi(e)}function Qd(e){console.error(e)}function Xd(e){pi(e)}function yi(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(r){setTimeout(function(){throw r})}}function Zd(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function os(e,t,n){return n=$n(n),n.tag=3,n.payload={element:null},n.callback=function(){yi(e,t)},n}function Kd(e){return e=$n(e),e.tag=3,e}function Fd(e,t,n,r){var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var s=r.value;e.payload=function(){return c(s)},e.callback=function(){Zd(t,n,r)}}var f=n.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){Zd(t,n,r),typeof c!="function"&&(rr===null?rr=new Set([this]):rr.add(this));var g=r.stack;this.componentDidCatch(r.value,{componentStack:g!==null?g:""})})}function ry(e,t,n,r,c){if(n.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(t=n.alternate,t!==null&&ea(t,n,c,!0),n=Lt.current,n!==null){switch(n.tag){case 13:return cn===null?Qs():n.alternate===null&&je===0&&(je=3),n.flags&=-257,n.flags|=65536,n.lanes=c,r===Lc?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Zs(e,r,c)),!1;case 22:return n.flags|=65536,r===Lc?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Zs(e,r,c)),!1}throw Error(u(435,n.tag))}return Zs(e,r,c),Qs(),!1}if(Ne)return t=Lt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=c,r!==qc&&(e=Error(u(422),{cause:r}),Yl(Ut(e,n)))):(r!==qc&&(t=Error(u(423),{cause:r}),Yl(Ut(t,n))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,r=Ut(r,n),c=os(e.stateNode,r,c),xs(e,c),je!==4&&(je=2)),!1;var s=Error(u(520),{cause:r});if(s=Ut(s,n),oa===null?oa=[s]:oa.push(s),je!==4&&(je=2),t===null)return!0;r=Ut(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=c&-c,n.lanes|=e,e=os(n.stateNode,r,e),xs(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(rr===null||!rr.has(s))))return n.flags|=65536,c&=-c,n.lanes|=c,c=Kd(c),Fd(c,e,n,r),xs(n,c),!1}n=n.return}while(n!==null);return!1}var Jd=Error(u(461)),nt=!1;function ot(e,t,n,r){t.child=e===null?ed(t,null,n,r):Er(t,e.child,n,r)}function $d(e,t,n,r,c){n=n.render;var s=t.ref;if("ref"in r){var f={};for(var g in r)g!=="ref"&&(f[g]=r[g])}else f=r;return wr(t),r=Zc(e,t,n,f,s,c),g=Kc(),e!==null&&!nt?(Fc(e,t,c),Nn(e,t,c)):(Ne&&g&&Uc(t),t.flags|=1,ot(e,t,r,c),t.child)}function Wd(e,t,n,r,c){if(e===null){var s=n.type;return typeof s=="function"&&!zs(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,Id(e,t,s,r,c)):(e=Ai(n.type,null,r,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!gs(e,c)){var f=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ll,n(f,r)&&e.ref===t.ref)return Nn(e,t,c)}return t.flags|=1,e=tr(s,r),e.ref=t.ref,e.return=t,t.child=e}function Id(e,t,n,r,c){if(e!==null){var s=e.memoizedProps;if(Ll(s,r)&&e.ref===t.ref)if(nt=!1,t.pendingProps=r=s,gs(e,c))(e.flags&131072)!==0&&(nt=!0);else return t.lanes=e.lanes,Nn(e,t,c)}return us(e,t,n,r,c)}function Pd(e,t,n){var r=t.pendingProps,c=r.children,s=(t.stateNode._pendingVisibility&2)!==0,f=e!==null?e.memoizedState:null;if(Pl(e,t),r.mode==="hidden"||s){if((t.flags&128)!==0){if(r=f!==null?f.baseLanes|n:n,e!==null){for(c=t.child=e.child,s=0;c!==null;)s=s|c.lanes|c.childLanes,c=c.sibling;t.childLanes=s&~r}else t.childLanes=0,t.child=null;return em(e,t,r,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ii(t,f!==null?f.cachePool:null),f!==null?td(t,f):Gc(),nd(t);else return t.lanes=t.childLanes=536870912,em(e,t,f!==null?f.baseLanes|n:n,n)}else f!==null?(ii(t,f.cachePool),td(t,f),Xn(),t.memoizedState=null):(e!==null&&ii(t,null),Gc(),Xn());return ot(e,t,c,n),t.child}function em(e,t,n,r){var c=Qc();return c=c===null?null:{parent:et._currentValue,pool:c},t.memoizedState={baseLanes:n,cachePool:c},e!==null&&ii(t,null),Gc(),nd(t),e!==null&&ea(e,t,r,!0),null}function Pl(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=2097664);else{if(typeof n!="function"&&typeof n!="object")throw Error(u(284));(e===null||e.ref!==n)&&(t.flags|=2097664)}}function us(e,t,n,r,c){return wr(t),n=Zc(e,t,n,r,void 0,c),r=Kc(),e!==null&&!nt?(Fc(e,t,c),Nn(e,t,c)):(Ne&&r&&Uc(t),t.flags|=1,ot(e,t,n,c),t.child)}function tm(e,t,n,r,c,s){return wr(t),t.updateQueue=null,n=cd(t,r,n,c),id(e),r=Kc(),e!==null&&!nt?(Fc(e,t,s),Nn(e,t,s)):(Ne&&r&&Uc(t),t.flags|=1,ot(e,t,n,s),t.child)}function nm(e,t,n,r,c){if(wr(t),t.stateNode===null){var s=Jr,f=n.contextType;typeof f=="object"&&f!==null&&(s=ft(f)),s=new n(r,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=ss,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=r,s.state=t.memoizedState,s.refs={},Ns(t),f=n.contextType,s.context=typeof f=="object"&&f!==null?ft(f):Jr,s.state=t.memoizedState,f=n.getDerivedStateFromProps,typeof f=="function"&&(cs(t,n,f,r),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(f=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),f!==s.state&&ss.enqueueReplaceState(s,s.state,null),ra(t,r,s,c),na(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!0}else if(e===null){s=t.stateNode;var g=t.memoizedProps,A=Cr(n,g);s.props=A;var C=s.context,U=n.contextType;f=Jr,typeof U=="object"&&U!==null&&(f=ft(U));var G=n.getDerivedStateFromProps;U=typeof G=="function"||typeof s.getSnapshotBeforeUpdate=="function",g=t.pendingProps!==g,U||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(g||C!==f)&&jd(t,s,r,f),Jn=!1;var k=t.memoizedState;s.state=k,ra(t,r,s,c),na(),C=t.memoizedState,g||k!==C||Jn?(typeof G=="function"&&(cs(t,n,G,r),C=t.memoizedState),(A=Jn||Vd(t,n,A,r,k,C,f))?(U||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=C),s.props=r,s.state=C,s.context=f,r=A):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Ss(e,t),f=t.memoizedProps,U=Cr(n,f),s.props=U,G=t.pendingProps,k=s.context,C=n.contextType,A=Jr,typeof C=="object"&&C!==null&&(A=ft(C)),g=n.getDerivedStateFromProps,(C=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(f!==G||k!==A)&&jd(t,s,r,A),Jn=!1,k=t.memoizedState,s.state=k,ra(t,r,s,c),na();var R=t.memoizedState;f!==G||k!==R||Jn||e!==null&&e.dependencies!==null&&bi(e.dependencies)?(typeof g=="function"&&(cs(t,n,g,r),R=t.memoizedState),(U=Jn||Vd(t,n,U,r,k,R,A)||e!==null&&e.dependencies!==null&&bi(e.dependencies))?(C||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,R,A),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,R,A)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||f===e.memoizedProps&&k===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&k===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=R),s.props=r,s.state=R,s.context=A,r=U):(typeof s.componentDidUpdate!="function"||f===e.memoizedProps&&k===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&k===e.memoizedState||(t.flags|=1024),r=!1)}return s=r,Pl(e,t),r=(t.flags&128)!==0,s||r?(s=t.stateNode,n=r&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&r?(t.child=Er(t,e.child,null,c),t.child=Er(t,null,n,c)):ot(e,t,n,c),t.memoizedState=s.state,e=t.child):e=Nn(e,t,c),e}function rm(e,t,n,r){return jl(),t.flags|=256,ot(e,t,n,r),t.child}var ds={dehydrated:null,treeContext:null,retryLane:0};function ms(e){return{baseLanes:e,cachePool:ad()}}function fs(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Yt),e}function lm(e,t,n){var r=t.pendingProps,c=!1,s=(t.flags&128)!==0,f;if((f=s)||(f=e!==null&&e.memoizedState===null?!1:(Pe.current&2)!==0),f&&(c=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ne){if(c?Qn(t):Xn(),Ne){var g=st,A;if(A=g){e:{for(A=g,g=an;A.nodeType!==8;){if(!g){g=null;break e}if(A=Wt(A.nextSibling),A===null){g=null;break e}}g=A}g!==null?(t.memoizedState={dehydrated:g,treeContext:br!==null?{id:gn,overflow:vn}:null,retryLane:536870912},A=jt(18,null,null,0),A.stateNode=g,A.return=t,t.child=A,yt=t,st=null,A=!0):A=!1}A||vr(t)}if(g=t.memoizedState,g!==null&&(g=g.dehydrated,g!==null))return g.data==="$!"?t.lanes=16:t.lanes=536870912,null;En(t)}return g=r.children,r=r.fallback,c?(Xn(),c=t.mode,g=ps({mode:"hidden",children:g},c),r=Hr(r,c,n,null),g.return=t,r.return=t,g.sibling=r,t.child=g,c=t.child,c.memoizedState=ms(n),c.childLanes=fs(e,f,n),t.memoizedState=ds,r):(Qn(t),hs(t,g))}if(A=e.memoizedState,A!==null&&(g=A.dehydrated,g!==null)){if(s)t.flags&256?(Qn(t),t.flags&=-257,t=ys(e,t,n)):t.memoizedState!==null?(Xn(),t.child=e.child,t.flags|=128,t=null):(Xn(),c=r.fallback,g=t.mode,r=ps({mode:"visible",children:r.children},g),c=Hr(c,g,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Er(t,e.child,null,n),r=t.child,r.memoizedState=ms(n),r.childLanes=fs(e,f,n),t.memoizedState=ds,t=c);else if(Qn(t),g.data==="$!"){if(f=g.nextSibling&&g.nextSibling.dataset,f)var C=f.dgst;f=C,r=Error(u(419)),r.stack="",r.digest=f,Yl({value:r,source:null,stack:null}),t=ys(e,t,n)}else if(nt||ea(e,t,n,!1),f=(n&e.childLanes)!==0,nt||f){if(f=Oe,f!==null){if(r=n&-n,(r&42)!==0)r=1;else switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=64;break;case 268435456:r=134217728;break;default:r=0}if(r=(r&(f.suspendedLanes|n))!==0?0:r,r!==0&&r!==A.retryLane)throw A.retryLane=r,Yn(e,r),bt(f,e,r),Jd}g.data==="$?"||Qs(),t=ys(e,t,n)}else g.data==="$?"?(t.flags|=128,t.child=e.child,t=gy.bind(null,e),g._reactRetry=t,t=null):(e=A.treeContext,st=Wt(g.nextSibling),yt=t,Ne=!0,Jt=null,an=!1,e!==null&&(Bt[qt++]=gn,Bt[qt++]=vn,Bt[qt++]=br,gn=e.id,vn=e.overflow,br=t),t=hs(t,r.children),t.flags|=4096);return t}return c?(Xn(),c=r.fallback,g=t.mode,A=e.child,C=A.sibling,r=tr(A,{mode:"hidden",children:r.children}),r.subtreeFlags=A.subtreeFlags&31457280,C!==null?c=tr(C,c):(c=Hr(c,g,n,null),c.flags|=2),c.return=t,r.return=t,r.sibling=c,t.child=r,r=c,c=t.child,g=e.child.memoizedState,g===null?g=ms(n):(A=g.cachePool,A!==null?(C=et._currentValue,A=A.parent!==C?{parent:C,pool:C}:A):A=ad(),g={baseLanes:g.baseLanes|n,cachePool:A}),c.memoizedState=g,c.childLanes=fs(e,f,n),t.memoizedState=ds,r):(Qn(t),n=e.child,e=n.sibling,n=tr(n,{mode:"visible",children:r.children}),n.return=t,n.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=n,t.memoizedState=null,n)}function hs(e,t){return t=ps({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ps(e,t){return Tm(e,t,0,null)}function ys(e,t,n){return Er(t,e.child,null,n),e=hs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function am(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Es(e.return,t,n)}function bs(e,t,n,r,c){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:c}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=c)}function im(e,t,n){var r=t.pendingProps,c=r.revealOrder,s=r.tail;if(ot(e,t,r.children,n),r=Pe.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&am(e,n,t);else if(e.tag===19)am(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(qe(Pe,r),c){case"forwards":for(n=t.child,c=null;n!==null;)e=n.alternate,e!==null&&ai(e)===null&&(c=n),n=n.sibling;n=c,n===null?(c=t.child,t.child=null):(c=n.sibling,n.sibling=null),bs(t,!1,c,n,s);break;case"backwards":for(n=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&ai(e)===null){t.child=c;break}e=c.sibling,c.sibling=n,n=c,c=e}bs(t,!0,n,null,s);break;case"together":bs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Nn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),nr|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ea(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=tr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=tr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function gs(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&bi(e)))}function ly(e,t,n){switch(t.tag){case 3:Ma(t,t.stateNode.containerInfo),Fn(t,et,e.memoizedState.cache),jl();break;case 27:case 5:sc(t);break;case 4:Ma(t,t.stateNode.containerInfo);break;case 10:Fn(t,t.type,t.memoizedProps.value);break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated!==null?(Qn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?lm(e,t,n):(Qn(t),e=Nn(e,t,n),e!==null?e.sibling:null);Qn(t);break;case 19:var c=(e.flags&128)!==0;if(r=(n&t.childLanes)!==0,r||(ea(e,t,n,!1),r=(n&t.childLanes)!==0),c){if(r)return im(e,t,n);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),qe(Pe,Pe.current),r)break;return null;case 22:case 23:return t.lanes=0,Pd(e,t,n);case 24:Fn(t,et,e.memoizedState.cache)}return Nn(e,t,n)}function cm(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)nt=!0;else{if(!gs(e,n)&&(t.flags&128)===0)return nt=!1,ly(e,t,n);nt=(e.flags&131072)!==0}else nt=!1,Ne&&(t.flags&1048576)!==0&&Xu(t,ei,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var r=t.elementType,c=r._init;if(r=c(r._payload),t.type=r,typeof r=="function")zs(r)?(e=Cr(r,e),t.tag=1,t=nm(null,t,r,e,n)):(t.tag=0,t=us(null,t,r,e,n));else{if(r!=null){if(c=r.$$typeof,c===Q){t.tag=11,t=$d(null,t,r,e,n);break e}else if(c===ge){t.tag=14,t=Wd(null,t,r,e,n);break e}}throw t=qn(r)||r,Error(u(306,t,""))}}return t;case 0:return us(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,c=Cr(r,t.pendingProps),nm(e,t,r,c,n);case 3:e:{if(Ma(t,t.stateNode.containerInfo),e===null)throw Error(u(387));var s=t.pendingProps;c=t.memoizedState,r=c.element,Ss(e,t),ra(t,s,null,n);var f=t.memoizedState;if(s=f.cache,Fn(t,et,s),s!==c.cache&&As(t,[et],n,!0),na(),s=f.element,c.isDehydrated)if(c={element:s,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=rm(e,t,s,n);break e}else if(s!==r){r=Ut(Error(u(424)),t),Yl(r),t=rm(e,t,s,n);break e}else for(st=Wt(t.stateNode.containerInfo.firstChild),yt=t,Ne=!0,Jt=null,an=!0,n=ed(t,null,s,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(jl(),s===r){t=Nn(e,t,n);break e}ot(e,t,s,n)}t=t.child}return t;case 26:return Pl(e,t),e===null?(n=df(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ne||(n=t.type,e=t.pendingProps,r=Mi(Ln.current).createElement(n),r[mt]=t,r[vt]=e,ut(r,n,e),tt(r),t.stateNode=r):t.memoizedState=df(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return sc(t),e===null&&Ne&&(r=t.stateNode=sf(t.type,t.pendingProps,Ln.current),yt=t,an=!0,st=Wt(r.firstChild)),r=t.pendingProps.children,e!==null||Ne?ot(e,t,r,n):t.child=Er(t,null,r,n),Pl(e,t),t.child;case 5:return e===null&&Ne&&((c=r=st)&&(r=Oy(r,t.type,t.pendingProps,an),r!==null?(t.stateNode=r,yt=t,st=Wt(r.firstChild),an=!1,c=!0):c=!1),c||vr(t)),sc(t),c=t.type,s=t.pendingProps,f=e!==null?e.memoizedProps:null,r=s.children,lo(c,s)?r=null:f!==null&&lo(c,f)&&(t.flags|=32),t.memoizedState!==null&&(c=Zc(e,t,Wp,null,null,n),ga._currentValue=c),Pl(e,t),ot(e,t,r,n),t.child;case 6:return e===null&&Ne&&((e=n=st)&&(n=Ry(n,t.pendingProps,an),n!==null?(t.stateNode=n,yt=t,st=null,e=!0):e=!1),e||vr(t)),null;case 13:return lm(e,t,n);case 4:return Ma(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Er(t,null,r,n):ot(e,t,r,n),t.child;case 11:return $d(e,t,t.type,t.pendingProps,n);case 7:return ot(e,t,t.pendingProps,n),t.child;case 8:return ot(e,t,t.pendingProps.children,n),t.child;case 12:return ot(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Fn(t,t.type,r.value),ot(e,t,r.children,n),t.child;case 9:return c=t.type._context,r=t.pendingProps.children,wr(t),c=ft(c),r=r(c),t.flags|=1,ot(e,t,r,n),t.child;case 14:return Wd(e,t,t.type,t.pendingProps,n);case 15:return Id(e,t,t.type,t.pendingProps,n);case 19:return im(e,t,n);case 22:return Pd(e,t,n);case 24:return wr(t),r=ft(et),e===null?(c=Qc(),c===null&&(c=Oe,s=jc(),c.pooledCache=s,s.refCount++,s!==null&&(c.pooledCacheLanes|=n),c=s),t.memoizedState={parent:r,cache:c},Ns(t),Fn(t,et,c)):((e.lanes&n)!==0&&(Ss(e,t),ra(t,null,null,n),na()),c=e.memoizedState,s=t.memoizedState,c.parent!==r?(c={parent:r,cache:r},t.memoizedState=c,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=c),Fn(t,et,r)):(r=s.cache,Fn(t,et,r),r!==c.cache&&As(t,[et],n,!0))),ot(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}var vs=Ce(null),Dr=null,Sn=null;function Fn(e,t,n){qe(vs,t._currentValue),t._currentValue=n}function xn(e){e._currentValue=vs.current,Je(vs)}function Es(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function As(e,t,n,r){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var s=c.dependencies;if(s!==null){var f=c.child;s=s.firstContext;e:for(;s!==null;){var g=s;s=c;for(var A=0;A<t.length;A++)if(g.context===t[A]){s.lanes|=n,g=s.alternate,g!==null&&(g.lanes|=n),Es(s.return,n,e),r||(f=null);break e}s=g.next}}else if(c.tag===18){if(f=c.return,f===null)throw Error(u(341));f.lanes|=n,s=f.alternate,s!==null&&(s.lanes|=n),Es(f,n,e),f=null}else f=c.child;if(f!==null)f.return=c;else for(f=c;f!==null;){if(f===e){f=null;break}if(c=f.sibling,c!==null){c.return=f.return,f=c;break}f=f.return}c=f}}function ea(e,t,n,r){e=null;for(var c=t,s=!1;c!==null;){if(!s){if((c.flags&524288)!==0)s=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var f=c.alternate;if(f===null)throw Error(u(387));if(f=f.memoizedProps,f!==null){var g=c.type;xt(c.pendingProps.value,f.value)||(e!==null?e.push(g):e=[g])}}else if(c===za.current){if(f=c.alternate,f===null)throw Error(u(387));f.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(ga):e=[ga])}c=c.return}e!==null&&As(t,e,n,r),t.flags|=262144}function bi(e){for(e=e.firstContext;e!==null;){if(!xt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function wr(e){Dr=e,Sn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ft(e){return sm(Dr,e)}function gi(e,t){return Dr===null&&wr(e),sm(e,t)}function sm(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Sn===null){if(e===null)throw Error(u(308));Sn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Sn=Sn.next=t;return n}var Jn=!1;function Ns(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ss(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function $n(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Wn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Ge&2)!==0){var c=r.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),r.pending=t,t=Ia(e),Yu(e,null,n),t}return Wa(e,r,t,n),Ia(e)}function ta(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194176)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Wo(e,n)}}function xs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var c=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var f={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?c=s=f:s=s.next=f,n=n.next}while(n!==null);s===null?c=s=t:s=s.next=t}else c=s=t;n={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:s,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Cs=!1;function na(){if(Cs){var e=tl;if(e!==null)throw e}}function ra(e,t,n,r){Cs=!1;var c=e.updateQueue;Jn=!1;var s=c.firstBaseUpdate,f=c.lastBaseUpdate,g=c.shared.pending;if(g!==null){c.shared.pending=null;var A=g,C=A.next;A.next=null,f===null?s=C:f.next=C,f=A;var U=e.alternate;U!==null&&(U=U.updateQueue,g=U.lastBaseUpdate,g!==f&&(g===null?U.firstBaseUpdate=C:g.next=C,U.lastBaseUpdate=A))}if(s!==null){var G=c.baseState;f=0,U=C=A=null,g=s;do{var k=g.lane&-536870913,R=k!==g.lane;if(R?(Ae&k)===k:(r&k)===k){k!==0&&k===el&&(Cs=!0),U!==null&&(U=U.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var I=e,oe=g;k=t;var Ye=n;switch(oe.tag){case 1:if(I=oe.payload,typeof I=="function"){G=I.call(Ye,G,k);break e}G=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=oe.payload,k=typeof I=="function"?I.call(Ye,G,k):I,k==null)break e;G=xe({},G,k);break e;case 2:Jn=!0}}k=g.callback,k!==null&&(e.flags|=64,R&&(e.flags|=8192),R=c.callbacks,R===null?c.callbacks=[k]:R.push(k))}else R={lane:k,tag:g.tag,payload:g.payload,callback:g.callback,next:null},U===null?(C=U=R,A=G):U=U.next=R,f|=k;if(g=g.next,g===null){if(g=c.shared.pending,g===null)break;R=g,g=R.next,R.next=null,c.lastBaseUpdate=R,c.shared.pending=null}}while(!0);U===null&&(A=G),c.baseState=A,c.firstBaseUpdate=C,c.lastBaseUpdate=U,s===null&&(c.shared.lanes=0),nr|=f,e.lanes=f,e.memoizedState=G}}function om(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function um(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)om(n[e],t)}function la(e,t){try{var n=t.updateQueue,r=n!==null?n.lastEffect:null;if(r!==null){var c=r.next;n=c;do{if((n.tag&e)===e){r=void 0;var s=n.create,f=n.inst;r=s(),f.destroy=r}n=n.next}while(n!==c)}}catch(g){Te(t,t.return,g)}}function In(e,t,n){try{var r=t.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var s=c.next;r=s;do{if((r.tag&e)===e){var f=r.inst,g=f.destroy;if(g!==void 0){f.destroy=void 0,c=t;var A=n;try{g()}catch(C){Te(c,A,C)}}}r=r.next}while(r!==s)}}catch(C){Te(t,t.return,C)}}function dm(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{um(t,n)}catch(r){Te(e,e.return,r)}}}function mm(e,t,n){n.props=Cr(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){Te(e,t,r)}}function _r(e,t){try{var n=e.ref;if(n!==null){var r=e.stateNode;switch(e.tag){case 26:case 27:case 5:var c=r;break;default:c=r}typeof n=="function"?e.refCleanup=n(c):n.current=c}}catch(s){Te(e,t,s)}}function Ct(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r=="function")try{r()}catch(c){Te(e,t,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(c){Te(e,t,c)}else n.current=null}function fm(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(c){Te(e,e.return,c)}}function hm(e,t,n){try{var r=e.stateNode;Hy(r,e.type,n,t),r[vt]=t}catch(c){Te(e,e.return,c)}}function pm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function Ds(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||pm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ws(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=zi));else if(r!==4&&r!==27&&(e=e.child,e!==null))for(ws(e,t,n),e=e.sibling;e!==null;)ws(e,t,n),e=e.sibling}function vi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&r!==27&&(e=e.child,e!==null))for(vi(e,t,n),e=e.sibling;e!==null;)vi(e,t,n),e=e.sibling}var Cn=!1,Ve=!1,_s=!1,ym=typeof WeakSet=="function"?WeakSet:Set,rt=null,bm=!1;function ay(e,t){if(e=e.containerInfo,no=Li,e=Ou(e),Tc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var c=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var f=0,g=-1,A=-1,C=0,U=0,G=e,k=null;t:for(;;){for(var R;G!==n||c!==0&&G.nodeType!==3||(g=f+c),G!==s||r!==0&&G.nodeType!==3||(A=f+r),G.nodeType===3&&(f+=G.nodeValue.length),(R=G.firstChild)!==null;)k=G,G=R;for(;;){if(G===e)break t;if(k===n&&++C===c&&(g=f),k===s&&++U===r&&(A=f),(R=G.nextSibling)!==null)break;G=k,k=G.parentNode}G=R}n=g===-1||A===-1?null:{start:g,end:A}}else n=null}n=n||{start:0,end:0}}else n=null;for(ro={focusedElem:e,selectionRange:n},Li=!1,rt=t;rt!==null;)if(t=rt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,rt=e;else for(;rt!==null;){switch(t=rt,s=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,n=t,c=s.memoizedProps,s=s.memoizedState,r=n.stateNode;try{var I=Cr(n.type,c,n.elementType===n.type);e=r.getSnapshotBeforeUpdate(I,s),r.__reactInternalSnapshotBeforeUpdate=e}catch(oe){Te(n,n.return,oe)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)co(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":co(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,rt=e;break}rt=t.return}return I=bm,bm=!1,I}function gm(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:wn(e,n),r&4&&la(5,n);break;case 1:if(wn(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(g){Te(n,n.return,g)}else{var c=Cr(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(c,t,e.__reactInternalSnapshotBeforeUpdate)}catch(g){Te(n,n.return,g)}}r&64&&dm(n),r&512&&_r(n,n.return);break;case 3:if(wn(e,n),r&64&&(r=n.updateQueue,r!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{um(r,e)}catch(g){Te(n,n.return,g)}}break;case 26:wn(e,n),r&512&&_r(n,n.return);break;case 27:case 5:wn(e,n),t===null&&r&4&&fm(n),r&512&&_r(n,n.return);break;case 12:wn(e,n);break;case 13:wn(e,n),r&4&&Am(e,n);break;case 22:if(c=n.memoizedState!==null||Cn,!c){t=t!==null&&t.memoizedState!==null||Ve;var s=Cn,f=Ve;Cn=c,(Ve=t)&&!f?Pn(e,n,(n.subtreeFlags&8772)!==0):wn(e,n),Cn=s,Ve=f}r&512&&(n.memoizedProps.mode==="manual"?_r(n,n.return):Ct(n,n.return));break;default:wn(e,n)}}function vm(e){var t=e.alternate;t!==null&&(e.alternate=null,vm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&hc(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ie=null,Dt=!1;function Dn(e,t,n){for(n=n.child;n!==null;)Em(e,t,n),n=n.sibling}function Em(e,t,n){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(wl,n)}catch{}switch(n.tag){case 26:Ve||Ct(n,t),Dn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ve||Ct(n,t);var r=Ie,c=Dt;for(Ie=n.stateNode,Dn(e,t,n),n=n.stateNode,t=n.attributes;t.length;)n.removeAttributeNode(t[0]);hc(n),Ie=r,Dt=c;break;case 5:Ve||Ct(n,t);case 6:c=Ie;var s=Dt;if(Ie=null,Dn(e,t,n),Ie=c,Dt=s,Ie!==null)if(Dt)try{e=Ie,r=n.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)}catch(f){Te(n,t,f)}else try{Ie.removeChild(n.stateNode)}catch(f){Te(n,t,f)}break;case 18:Ie!==null&&(Dt?(t=Ie,n=n.stateNode,t.nodeType===8?io(t.parentNode,n):t.nodeType===1&&io(t,n),Na(t)):io(Ie,n.stateNode));break;case 4:r=Ie,c=Dt,Ie=n.stateNode.containerInfo,Dt=!0,Dn(e,t,n),Ie=r,Dt=c;break;case 0:case 11:case 14:case 15:Ve||In(2,n,t),Ve||In(4,n,t),Dn(e,t,n);break;case 1:Ve||(Ct(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"&&mm(n,t,r)),Dn(e,t,n);break;case 21:Dn(e,t,n);break;case 22:Ve||Ct(n,t),Ve=(r=Ve)||n.memoizedState!==null,Dn(e,t,n),Ve=r;break;default:Dn(e,t,n)}}function Am(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Na(e)}catch(n){Te(t,t.return,n)}}function iy(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ym),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ym),t;default:throw Error(u(435,e.tag))}}function Hs(e,t){var n=iy(e);t.forEach(function(r){var c=vy.bind(null,e,r);n.has(r)||(n.add(r),r.then(c,c))})}function Gt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var c=n[r],s=e,f=t,g=f;e:for(;g!==null;){switch(g.tag){case 27:case 5:Ie=g.stateNode,Dt=!1;break e;case 3:Ie=g.stateNode.containerInfo,Dt=!0;break e;case 4:Ie=g.stateNode.containerInfo,Dt=!0;break e}g=g.return}if(Ie===null)throw Error(u(160));Em(s,f,c),Ie=null,Dt=!1,s=c.alternate,s!==null&&(s.return=null),c.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Nm(t,e),t=t.sibling}var $t=null;function Nm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Gt(t,e),Vt(e),r&4&&(In(3,e,e.return),la(3,e),In(5,e,e.return));break;case 1:Gt(t,e),Vt(e),r&512&&(Ve||n===null||Ct(n,n.return)),r&64&&Cn&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var c=$t;if(Gt(t,e),Vt(e),r&512&&(Ve||n===null||Ct(n,n.return)),r&4){var s=n!==null?n.memoizedState:null;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){e:{r=e.type,n=e.memoizedProps,c=c.ownerDocument||c;t:switch(r){case"title":s=c.getElementsByTagName("title")[0],(!s||s[Tl]||s[mt]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=c.createElement(r),c.head.insertBefore(s,c.querySelector("head > title"))),ut(s,r,n),s[mt]=e,tt(s),r=s;break e;case"link":var f=hf("link","href",c).get(r+(n.href||""));if(f){for(var g=0;g<f.length;g++)if(s=f[g],s.getAttribute("href")===(n.href==null?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){f.splice(g,1);break t}}s=c.createElement(r),ut(s,r,n),c.head.appendChild(s);break;case"meta":if(f=hf("meta","content",c).get(r+(n.content||""))){for(g=0;g<f.length;g++)if(s=f[g],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){f.splice(g,1);break t}}s=c.createElement(r),ut(s,r,n),c.head.appendChild(s);break;default:throw Error(u(468,r))}s[mt]=e,tt(s),r=s}e.stateNode=r}else pf(c,e.type,e.stateNode);else e.stateNode=ff(c,r,e.memoizedProps);else s!==r?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,r===null?pf(c,e.type,e.stateNode):ff(c,r,e.memoizedProps)):r===null&&e.stateNode!==null&&hm(e,e.memoizedProps,n.memoizedProps)}break;case 27:if(r&4&&e.alternate===null){c=e.stateNode,s=e.memoizedProps;try{for(var A=c.firstChild;A;){var C=A.nextSibling,U=A.nodeName;A[Tl]||U==="HEAD"||U==="BODY"||U==="SCRIPT"||U==="STYLE"||U==="LINK"&&A.rel.toLowerCase()==="stylesheet"||c.removeChild(A),A=C}for(var G=e.type,k=c.attributes;k.length;)c.removeAttributeNode(k[0]);ut(c,G,s),c[mt]=e,c[vt]=s}catch(I){Te(e,e.return,I)}}case 5:if(Gt(t,e),Vt(e),r&512&&(Ve||n===null||Ct(n,n.return)),e.flags&32){c=e.stateNode;try{jr(c,"")}catch(I){Te(e,e.return,I)}}r&4&&e.stateNode!=null&&(c=e.memoizedProps,hm(e,c,n!==null?n.memoizedProps:c)),r&1024&&(_s=!0);break;case 6:if(Gt(t,e),Vt(e),r&4){if(e.stateNode===null)throw Error(u(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(I){Te(e,e.return,I)}}break;case 3:if(Ui=null,c=$t,$t=Oi(t.containerInfo),Gt(t,e),$t=c,Vt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Na(t.containerInfo)}catch(I){Te(e,e.return,I)}_s&&(_s=!1,Sm(e));break;case 4:r=$t,$t=Oi(e.stateNode.containerInfo),Gt(t,e),Vt(e),$t=r;break;case 12:Gt(t,e),Vt(e);break;case 13:Gt(t,e),Vt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(qs=ln()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Hs(e,r)));break;case 22:if(r&512&&(Ve||n===null||Ct(n,n.return)),A=e.memoizedState!==null,C=n!==null&&n.memoizedState!==null,U=Cn,G=Ve,Cn=U||A,Ve=G||C,Gt(t,e),Ve=G,Cn=U,Vt(e),t=e.stateNode,t._current=e,t._visibility&=-3,t._visibility|=t._pendingVisibility&2,r&8192&&(t._visibility=A?t._visibility&-2:t._visibility|1,A&&(t=Cn||Ve,n===null||C||t||al(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))e:for(n=null,t=e;;){if(t.tag===5||t.tag===26||t.tag===27){if(n===null){C=n=t;try{if(c=C.stateNode,A)s=c.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{f=C.stateNode,g=C.memoizedProps.style;var R=g!=null&&g.hasOwnProperty("display")?g.display:null;f.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch(I){Te(C,C.return,I)}}}else if(t.tag===6){if(n===null){C=t;try{C.stateNode.nodeValue=A?"":C.memoizedProps}catch(I){Te(C,C.return,I)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,Hs(e,n))));break;case 19:Gt(t,e),Vt(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Hs(e,r)));break;case 21:break;default:Gt(t,e),Vt(e)}}function Vt(e){var t=e.flags;if(t&2){try{if(e.tag!==27){e:{for(var n=e.return;n!==null;){if(pm(n)){var r=n;break e}n=n.return}throw Error(u(160))}switch(r.tag){case 27:var c=r.stateNode,s=Ds(e);vi(e,s,c);break;case 5:var f=r.stateNode;r.flags&32&&(jr(f,""),r.flags&=-33);var g=Ds(e);vi(e,g,f);break;case 3:case 4:var A=r.stateNode.containerInfo,C=Ds(e);ws(e,C,A);break;default:throw Error(u(161))}}}catch(U){Te(e,e.return,U)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Sm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function wn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)gm(e,t.alternate,t),t=t.sibling}function al(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:In(4,t,t.return),al(t);break;case 1:Ct(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&mm(t,t.return,n),al(t);break;case 26:case 27:case 5:Ct(t,t.return),al(t);break;case 22:Ct(t,t.return),t.memoizedState===null&&al(t);break;default:al(t)}e=e.sibling}}function Pn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var r=t.alternate,c=e,s=t,f=s.flags;switch(s.tag){case 0:case 11:case 15:Pn(c,s,n),la(4,s);break;case 1:if(Pn(c,s,n),r=s,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(C){Te(r,r.return,C)}if(r=s,c=r.updateQueue,c!==null){var g=r.stateNode;try{var A=c.shared.hiddenCallbacks;if(A!==null)for(c.shared.hiddenCallbacks=null,c=0;c<A.length;c++)om(A[c],g)}catch(C){Te(r,r.return,C)}}n&&f&64&&dm(s),_r(s,s.return);break;case 26:case 27:case 5:Pn(c,s,n),n&&r===null&&f&4&&fm(s),_r(s,s.return);break;case 12:Pn(c,s,n);break;case 13:Pn(c,s,n),n&&f&4&&Am(c,s);break;case 22:s.memoizedState===null&&Pn(c,s,n),_r(s,s.return);break;default:Pn(c,s,n)}t=t.sibling}}function Ts(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Fl(n))}function ks(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Fl(e))}function er(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)xm(e,t,n,r),t=t.sibling}function xm(e,t,n,r){var c=t.flags;switch(t.tag){case 0:case 11:case 15:er(e,t,n,r),c&2048&&la(9,t);break;case 3:er(e,t,n,r),c&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Fl(e)));break;case 12:if(c&2048){er(e,t,n,r),e=t.stateNode;try{var s=t.memoizedProps,f=s.id,g=s.onPostCommit;typeof g=="function"&&g(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(A){Te(t,t.return,A)}}else er(e,t,n,r);break;case 23:break;case 22:s=t.stateNode,t.memoizedState!==null?s._visibility&4?er(e,t,n,r):aa(e,t):s._visibility&4?er(e,t,n,r):(s._visibility|=4,il(e,t,n,r,(t.subtreeFlags&10256)!==0)),c&2048&&Ts(t.alternate,t);break;case 24:er(e,t,n,r),c&2048&&ks(t.alternate,t);break;default:er(e,t,n,r)}}function il(e,t,n,r,c){for(c=c&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var s=e,f=t,g=n,A=r,C=f.flags;switch(f.tag){case 0:case 11:case 15:il(s,f,g,A,c),la(8,f);break;case 23:break;case 22:var U=f.stateNode;f.memoizedState!==null?U._visibility&4?il(s,f,g,A,c):aa(s,f):(U._visibility|=4,il(s,f,g,A,c)),c&&C&2048&&Ts(f.alternate,f);break;case 24:il(s,f,g,A,c),c&&C&2048&&ks(f.alternate,f);break;default:il(s,f,g,A,c)}t=t.sibling}}function aa(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,c=r.flags;switch(r.tag){case 22:aa(n,r),c&2048&&Ts(r.alternate,r);break;case 24:aa(n,r),c&2048&&ks(r.alternate,r);break;default:aa(n,r)}t=t.sibling}}var ia=8192;function cl(e){if(e.subtreeFlags&ia)for(e=e.child;e!==null;)Cm(e),e=e.sibling}function Cm(e){switch(e.tag){case 26:cl(e),e.flags&ia&&e.memoizedState!==null&&Fy($t,e.memoizedState,e.memoizedProps);break;case 5:cl(e);break;case 3:case 4:var t=$t;$t=Oi(e.stateNode.containerInfo),cl(e),$t=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=ia,ia=16777216,cl(e),ia=t):cl(e));break;default:cl(e)}}function Dm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ca(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];rt=r,_m(r,e)}Dm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)wm(e),e=e.sibling}function wm(e){switch(e.tag){case 0:case 11:case 15:ca(e),e.flags&2048&&In(9,e,e.return);break;case 3:ca(e);break;case 12:ca(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&4&&(e.return===null||e.return.tag!==13)?(t._visibility&=-5,Ei(e)):ca(e);break;default:ca(e)}}function Ei(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];rt=r,_m(r,e)}Dm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:In(8,t,t.return),Ei(t);break;case 22:n=t.stateNode,n._visibility&4&&(n._visibility&=-5,Ei(t));break;default:Ei(t)}e=e.sibling}}function _m(e,t){for(;rt!==null;){var n=rt;switch(n.tag){case 0:case 11:case 15:In(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Fl(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,rt=r;else e:for(n=e;rt!==null;){r=rt;var c=r.sibling,s=r.return;if(vm(r),r===n){rt=null;break e}if(c!==null){c.return=s,rt=c;break e}rt=s}}}function cy(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(e,t,n,r){return new cy(e,t,n,r)}function zs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function tr(e,t){var n=e.alternate;return n===null?(n=jt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&31457280,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Hm(e,t){e.flags&=31457282;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ai(e,t,n,r,c,s){var f=0;if(r=e,typeof e=="function")zs(e)&&(f=1);else if(typeof e=="string")f=Zy(e,n,rn.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case D:return Hr(n.children,c,s,t);case N:f=8,c|=24;break;case z:return e=jt(12,n,t,c|2),e.elementType=z,e.lanes=s,e;case Z:return e=jt(13,n,t,c),e.elementType=Z,e.lanes=s,e;case W:return e=jt(19,n,t,c),e.elementType=W,e.lanes=s,e;case ze:return Tm(n,c,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case M:case B:f=10;break e;case q:f=9;break e;case Q:f=11;break e;case ge:f=14;break e;case ce:f=16,r=null;break e}f=29,n=Error(u(130,e===null?"null":typeof e,"")),r=null}return t=jt(f,n,t,c),t.elementType=e,t.type=r,t.lanes=s,t}function Hr(e,t,n,r){return e=jt(7,e,r,t),e.lanes=n,e}function Tm(e,t,n,r){e=jt(22,e,r,t),e.elementType=ze,e.lanes=n;var c={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var s=c._current;if(s===null)throw Error(u(456));if((c._pendingVisibility&2)===0){var f=Yn(s,2);f!==null&&(c._pendingVisibility|=2,bt(f,s,2))}},attach:function(){var s=c._current;if(s===null)throw Error(u(456));if((c._pendingVisibility&2)!==0){var f=Yn(s,2);f!==null&&(c._pendingVisibility&=-3,bt(f,s,2))}}};return e.stateNode=c,e}function Ms(e,t,n){return e=jt(6,e,null,t),e.lanes=n,e}function Os(e,t,n){return t=jt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function _n(e){e.flags|=4}function km(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!yf(t)){if(t=Lt.current,t!==null&&((Ae&4194176)===Ae?cn!==null:(Ae&62914560)!==Ae&&(Ae&536870912)===0||t!==cn))throw Xl=Lc,Fu;e.flags|=8192}}function Ni(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Jo():536870912,e.lanes|=t,ol|=t)}function sa(e,t){if(!Ne)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var c=e.child;c!==null;)n|=c.lanes|c.childLanes,r|=c.subtreeFlags&31457280,r|=c.flags&31457280,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)n|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function sy(e,t,n){var r=t.pendingProps;switch(Bc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return Le(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),xn(et),Ur(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Vl(t)?_n(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Jt!==null&&(js(Jt),Jt=null))),Le(t),null;case 26:return n=t.memoizedState,e===null?(_n(t),n!==null?(Le(t),km(t,n)):(Le(t),t.flags&=-16777217)):n?n!==e.memoizedState?(_n(t),Le(t),km(t,n)):(Le(t),t.flags&=-16777217):(e.memoizedProps!==r&&_n(t),Le(t),t.flags&=-16777217),null;case 27:Oa(t),n=Ln.current;var c=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==r&&_n(t);else{if(!r){if(t.stateNode===null)throw Error(u(166));return Le(t),null}e=rn.current,Vl(t)?Zu(t):(e=sf(c,r,n),t.stateNode=e,_n(t))}return Le(t),null;case 5:if(Oa(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&_n(t);else{if(!r){if(t.stateNode===null)throw Error(u(166));return Le(t),null}if(e=rn.current,Vl(t))Zu(t);else{switch(c=Mi(Ln.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof r.is=="string"?c.createElement("select",{is:r.is}):c.createElement("select"),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e=typeof r.is=="string"?c.createElement(n,{is:r.is}):c.createElement(n)}}e[mt]=t,e[vt]=r;e:for(c=t.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}t.stateNode=e;e:switch(ut(e,n,r),n){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&_n(t)}}return Le(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&_n(t);else{if(typeof r!="string"&&t.stateNode===null)throw Error(u(166));if(e=Ln.current,Vl(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,c=yt,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}e[mt]=t,e=!!(e.nodeValue===n||r!==null&&r.suppressHydrationWarning===!0||tf(e.nodeValue,n)),e||vr(t)}else e=Mi(e).createTextNode(r),e[mt]=t,t.stateNode=e}return Le(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Vl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!c)throw Error(u(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(u(317));c[mt]=t}else jl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Le(t),c=!1}else Jt!==null&&(js(Jt),Jt=null),c=!0;if(!c)return t.flags&256?(En(t),t):(En(t),null)}if(En(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=r!==null,e=e!==null&&e.memoizedState!==null,n){r=t.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool);var s=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(s=r.memoizedState.cachePool.pool),s!==c&&(r.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),Ni(t,t.updateQueue),Le(t),null;case 4:return Ur(),e===null&&Ps(t.stateNode.containerInfo),Le(t),null;case 10:return xn(t.type),Le(t),null;case 19:if(Je(Pe),c=t.memoizedState,c===null)return Le(t),null;if(r=(t.flags&128)!==0,s=c.rendering,s===null)if(r)sa(c,!1);else{if(je!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=ai(e),s!==null){for(t.flags|=128,sa(c,!1),e=s.updateQueue,t.updateQueue=e,Ni(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Hm(n,e),n=n.sibling;return qe(Pe,Pe.current&1|2),t.child}e=e.sibling}c.tail!==null&&ln()>Si&&(t.flags|=128,r=!0,sa(c,!1),t.lanes=4194304)}else{if(!r)if(e=ai(s),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,Ni(t,e),sa(c,!0),c.tail===null&&c.tailMode==="hidden"&&!s.alternate&&!Ne)return Le(t),null}else 2*ln()-c.renderingStartTime>Si&&n!==536870912&&(t.flags|=128,r=!0,sa(c,!1),t.lanes=4194304);c.isBackwards?(s.sibling=t.child,t.child=s):(e=c.last,e!==null?e.sibling=s:t.child=s,c.last=s)}return c.tail!==null?(t=c.tail,c.rendering=t,c.tail=t.sibling,c.renderingStartTime=ln(),t.sibling=null,e=Pe.current,qe(Pe,r?e&1|2:e&1),t):(Le(t),null);case 22:case 23:return En(t),Vc(),r=t.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?(n&536870912)!==0&&(t.flags&128)===0&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),n=t.updateQueue,n!==null&&Ni(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&Je(Ar),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),xn(et),Le(t),null;case 25:return null}throw Error(u(156,t.tag))}function oy(e,t){switch(Bc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xn(et),Ur(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Oa(t),null;case 13:if(En(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));jl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Je(Pe),null;case 4:return Ur(),null;case 10:return xn(t.type),null;case 22:case 23:return En(t),Vc(),e!==null&&Je(Ar),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return xn(et),null;case 25:return null;default:return null}}function zm(e,t){switch(Bc(t),t.tag){case 3:xn(et),Ur();break;case 26:case 27:case 5:Oa(t);break;case 4:Ur();break;case 13:En(t);break;case 19:Je(Pe);break;case 10:xn(t.type);break;case 22:case 23:En(t),Vc(),e!==null&&Je(Ar);break;case 24:xn(et)}}var uy={getCacheForType:function(e){var t=ft(et),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},dy=typeof WeakMap=="function"?WeakMap:Map,Ge=0,Oe=null,be=null,Ae=0,Re=0,wt=null,Hn=!1,sl=!1,Rs=!1,Tn=0,je=0,nr=0,Tr=0,Us=0,Yt=0,ol=0,oa=null,on=null,Bs=!1,qs=0,Si=1/0,xi=null,rr=null,Ci=!1,kr=null,ua=0,Ls=0,Gs=null,da=0,Vs=null;function _t(){if((Ge&2)!==0&&Ae!==0)return Ae&-Ae;if(re.T!==null){var e=el;return e!==0?e:Js()}return Po()}function Mm(){Yt===0&&(Yt=(Ae&536870912)===0||Ne?Fo():536870912);var e=Lt.current;return e!==null&&(e.flags|=32),Yt}function bt(e,t,n){(e===Oe&&Re===2||e.cancelPendingCommit!==null)&&(ul(e,0),kn(e,Ae,Yt,!1)),Hl(e,n),((Ge&2)===0||e!==Oe)&&(e===Oe&&((Ge&2)===0&&(Tr|=n),je===4&&kn(e,Ae,Yt,!1)),un(e))}function Om(e,t,n){if((Ge&6)!==0)throw Error(u(327));var r=!n&&(t&60)===0&&(t&e.expiredLanes)===0||_l(e,t),c=r?hy(e,t):Xs(e,t,!0),s=r;do{if(c===0){sl&&!r&&kn(e,t,0,!1);break}else if(c===6)kn(e,t,0,!Hn);else{if(n=e.current.alternate,s&&!my(n)){c=Xs(e,t,!1),s=!1;continue}if(c===2){if(s=t,e.errorRecoveryDisabledLanes&s)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var g=e;c=oa;var A=g.current.memoizedState.isDehydrated;if(A&&(ul(g,f).flags|=256),f=Xs(g,f,!1),f!==2){if(Rs&&!A){g.errorRecoveryDisabledLanes|=s,Tr|=s,c=4;break e}s=on,on=c,s!==null&&js(s)}c=f}if(s=!1,c!==2)continue}}if(c===1){ul(e,0),kn(e,t,0,!0);break}e:{switch(r=e,c){case 0:case 1:throw Error(u(345));case 4:if((t&4194176)===t){kn(r,t,Yt,!Hn);break e}break;case 2:on=null;break;case 3:case 5:break;default:throw Error(u(329))}if(r.finishedWork=n,r.finishedLanes=t,(t&62914560)===t&&(s=qs+300-ln(),10<s)){if(kn(r,t,Yt,!Hn),qa(r,0)!==0)break e;r.timeoutHandle=lf(Rm.bind(null,r,n,on,xi,Bs,t,Yt,Tr,ol,Hn,2,-0,0),s);break e}Rm(r,n,on,xi,Bs,t,Yt,Tr,ol,Hn,0,-0,0)}}break}while(!0);un(e)}function js(e){on===null?on=e:on.push.apply(on,e)}function Rm(e,t,n,r,c,s,f,g,A,C,U,G,k){var R=t.subtreeFlags;if((R&8192||(R&16785408)===16785408)&&(ba={stylesheets:null,count:0,unsuspend:Ky},Cm(t),t=Jy(),t!==null)){e.cancelPendingCommit=t(jm.bind(null,e,n,r,c,f,g,A,1,G,k)),kn(e,s,f,!C);return}jm(e,n,r,c,f,g,A,U,G,k)}function my(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var c=n[r],s=c.getSnapshot;c=c.value;try{if(!xt(s(),c))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function kn(e,t,n,r){t&=~Us,t&=~Tr,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var c=t;0<c;){var s=31-St(c),f=1<<s;r[s]=-1,c&=~f}n!==0&&$o(e,n,t)}function Di(){return(Ge&6)===0?(ma(0),!1):!0}function Ys(){if(be!==null){if(Re===0)var e=be.return;else e=be,Sn=Dr=null,Jc(e),Ir=null,Zl=0,e=be;for(;e!==null;)zm(e.alternate,e),e=e.return;be=null}}function ul(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,ky(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Ys(),Oe=e,be=n=tr(e.current,null),Ae=t,Re=0,wt=null,Hn=!1,sl=_l(e,t),Rs=!1,ol=Yt=Us=Tr=nr=je=0,on=oa=null,Bs=!1,(t&8)!==0&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var c=31-St(r),s=1<<c;t|=e[c],r&=~s}return Tn=t,$a(),n}function Um(e,t){pe=null,re.H=sn,t===Ql?(t=Wu(),Re=3):t===Fu?(t=Wu(),Re=4):Re=t===Jd?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,wt=t,be===null&&(je=1,yi(e,Ut(t,e.current)))}function Bm(){var e=re.H;return re.H=sn,e===null?sn:e}function qm(){var e=re.A;return re.A=uy,e}function Qs(){je=4,Hn||(Ae&4194176)!==Ae&&Lt.current!==null||(sl=!0),(nr&134217727)===0&&(Tr&134217727)===0||Oe===null||kn(Oe,Ae,Yt,!1)}function Xs(e,t,n){var r=Ge;Ge|=2;var c=Bm(),s=qm();(Oe!==e||Ae!==t)&&(xi=null,ul(e,t)),t=!1;var f=je;e:do try{if(Re!==0&&be!==null){var g=be,A=wt;switch(Re){case 8:Ys(),f=6;break e;case 3:case 2:case 6:Lt.current===null&&(t=!0);var C=Re;if(Re=0,wt=null,dl(e,g,A,C),n&&sl){f=0;break e}break;default:C=Re,Re=0,wt=null,dl(e,g,A,C)}}fy(),f=je;break}catch(U){Um(e,U)}while(!0);return t&&e.shellSuspendCounter++,Sn=Dr=null,Ge=r,re.H=c,re.A=s,be===null&&(Oe=null,Ae=0,$a()),f}function fy(){for(;be!==null;)Lm(be)}function hy(e,t){var n=Ge;Ge|=2;var r=Bm(),c=qm();Oe!==e||Ae!==t?(xi=null,Si=ln()+500,ul(e,t)):sl=_l(e,t);e:do try{if(Re!==0&&be!==null){t=be;var s=wt;t:switch(Re){case 1:Re=0,wt=null,dl(e,t,s,1);break;case 2:if(Ju(s)){Re=0,wt=null,Gm(t);break}t=function(){Re===2&&Oe===e&&(Re=7),un(e)},s.then(t,t);break e;case 3:Re=7;break e;case 4:Re=5;break e;case 7:Ju(s)?(Re=0,wt=null,Gm(t)):(Re=0,wt=null,dl(e,t,s,7));break;case 5:var f=null;switch(be.tag){case 26:f=be.memoizedState;case 5:case 27:var g=be;if(!f||yf(f)){Re=0,wt=null;var A=g.sibling;if(A!==null)be=A;else{var C=g.return;C!==null?(be=C,wi(C)):be=null}break t}}Re=0,wt=null,dl(e,t,s,5);break;case 6:Re=0,wt=null,dl(e,t,s,6);break;case 8:Ys(),je=6;break e;default:throw Error(u(462))}}py();break}catch(U){Um(e,U)}while(!0);return Sn=Dr=null,re.H=r,re.A=c,Ge=n,be!==null?0:(Oe=null,Ae=0,$a(),je)}function py(){for(;be!==null&&!Bh();)Lm(be)}function Lm(e){var t=cm(e.alternate,e,Tn);e.memoizedProps=e.pendingProps,t===null?wi(e):be=t}function Gm(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=tm(n,t,t.pendingProps,t.type,void 0,Ae);break;case 11:t=tm(n,t,t.pendingProps,t.type.render,t.ref,Ae);break;case 5:Jc(t);default:zm(n,t),t=be=Hm(t,Tn),t=cm(n,t,Tn)}e.memoizedProps=e.pendingProps,t===null?wi(e):be=t}function dl(e,t,n,r){Sn=Dr=null,Jc(t),Ir=null,Zl=0;var c=t.return;try{if(ry(e,c,t,n,Ae)){je=1,yi(e,Ut(n,e.current)),be=null;return}}catch(s){if(c!==null)throw be=c,s;je=1,yi(e,Ut(n,e.current)),be=null;return}t.flags&32768?(Ne||r===1?e=!0:sl||(Ae&536870912)!==0?e=!1:(Hn=e=!0,(r===2||r===3||r===6)&&(r=Lt.current,r!==null&&r.tag===13&&(r.flags|=16384))),Vm(t,e)):wi(t)}function wi(e){var t=e;do{if((t.flags&32768)!==0){Vm(t,Hn);return}e=t.return;var n=sy(t.alternate,t,Tn);if(n!==null){be=n;return}if(t=t.sibling,t!==null){be=t;return}be=t=e}while(t!==null);je===0&&(je=5)}function Vm(e,t){do{var n=oy(e.alternate,e);if(n!==null){n.flags&=32767,be=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){be=e;return}be=e=n}while(e!==null);je=6,be=null}function jm(e,t,n,r,c,s,f,g,A,C){var U=re.T,G=K.p;try{K.p=2,re.T=null,yy(e,t,n,r,G,c,s,f,g,A,C)}finally{re.T=U,K.p=G}}function yy(e,t,n,r,c,s,f,g){do ml();while(kr!==null);if((Ge&6)!==0)throw Error(u(327));var A=e.finishedWork;if(r=e.finishedLanes,A===null)return null;if(e.finishedWork=null,e.finishedLanes=0,A===e.current)throw Error(u(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var C=A.lanes|A.childLanes;if(C|=Oc,Fh(e,r,C,s,f,g),e===Oe&&(be=Oe=null,Ae=0),(A.subtreeFlags&10256)===0&&(A.flags&10256)===0||Ci||(Ci=!0,Ls=C,Gs=n,Ey(Ra,function(){return ml(),null})),n=(A.flags&15990)!==0,(A.subtreeFlags&15990)!==0||n?(n=re.T,re.T=null,s=K.p,K.p=2,f=Ge,Ge|=4,ay(e,A),Nm(A,e),Gp(ro,e.containerInfo),Li=!!no,ro=no=null,e.current=A,gm(e,A.alternate,A),qh(),Ge=f,K.p=s,re.T=n):e.current=A,Ci?(Ci=!1,kr=e,ua=r):Ym(e,C),C=e.pendingLanes,C===0&&(rr=null),Yh(A.stateNode),un(e),t!==null)for(c=e.onRecoverableError,A=0;A<t.length;A++)C=t[A],c(C.value,{componentStack:C.stack});return(ua&3)!==0&&ml(),C=e.pendingLanes,(r&4194218)!==0&&(C&42)!==0?e===Vs?da++:(da=0,Vs=e):da=0,ma(0),null}function Ym(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Fl(t)))}function ml(){if(kr!==null){var e=kr,t=Ls;Ls=0;var n=Io(ua),r=re.T,c=K.p;try{if(K.p=32>n?32:n,re.T=null,kr===null)var s=!1;else{n=Gs,Gs=null;var f=kr,g=ua;if(kr=null,ua=0,(Ge&6)!==0)throw Error(u(331));var A=Ge;if(Ge|=4,wm(f.current),xm(f,f.current,g,n),Ge=A,ma(0,!1),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(wl,f)}catch{}s=!0}return s}finally{K.p=c,re.T=r,Ym(e,t)}}return!1}function Qm(e,t,n){t=Ut(n,t),t=os(e.stateNode,t,2),e=Wn(e,t,2),e!==null&&(Hl(e,2),un(e))}function Te(e,t,n){if(e.tag===3)Qm(e,e,n);else for(;t!==null;){if(t.tag===3){Qm(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(rr===null||!rr.has(r))){e=Ut(n,e),n=Kd(2),r=Wn(t,n,2),r!==null&&(Fd(n,r,t,e),Hl(r,2),un(r));break}}t=t.return}}function Zs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new dy;var c=new Set;r.set(t,c)}else c=r.get(t),c===void 0&&(c=new Set,r.set(t,c));c.has(n)||(Rs=!0,c.add(n),e=by.bind(null,e,t,n),t.then(e,e))}function by(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Oe===e&&(Ae&n)===n&&(je===4||je===3&&(Ae&62914560)===Ae&&300>ln()-qs?(Ge&2)===0&&ul(e,0):Us|=n,ol===Ae&&(ol=0)),un(e)}function Xm(e,t){t===0&&(t=Jo()),e=Yn(e,t),e!==null&&(Hl(e,t),un(e))}function gy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Xm(e,n)}function vy(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,c=e.memoizedState;c!==null&&(n=c.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(u(314))}r!==null&&r.delete(t),Xm(e,n)}function Ey(e,t){return uc(e,t)}var _i=null,fl=null,Ks=!1,Hi=!1,Fs=!1,zr=0;function un(e){e!==fl&&e.next===null&&(fl===null?_i=fl=e:fl=fl.next=e),Hi=!0,Ks||(Ks=!0,Ny(Ay))}function ma(e,t){if(!Fs&&Hi){Fs=!0;do for(var n=!1,r=_i;r!==null;){if(e!==0){var c=r.pendingLanes;if(c===0)var s=0;else{var f=r.suspendedLanes,g=r.pingedLanes;s=(1<<31-St(42|e)+1)-1,s&=c&~(f&~g),s=s&201326677?s&201326677|1:s?s|2:0}s!==0&&(n=!0,Fm(r,s))}else s=Ae,s=qa(r,r===Oe?s:0),(s&3)===0||_l(r,s)||(n=!0,Fm(r,s));r=r.next}while(n);Fs=!1}}function Ay(){Hi=Ks=!1;var e=0;zr!==0&&(Ty()&&(e=zr),zr=0);for(var t=ln(),n=null,r=_i;r!==null;){var c=r.next,s=Zm(r,t);s===0?(r.next=null,n===null?_i=c:n.next=c,c===null&&(fl=n)):(n=r,(e!==0||(s&3)!==0)&&(Hi=!0)),r=c}ma(e)}function Zm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,c=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var f=31-St(s),g=1<<f,A=c[f];A===-1?((g&n)===0||(g&r)!==0)&&(c[f]=Kh(g,t)):A<=t&&(e.expiredLanes|=g),s&=~g}if(t=Oe,n=Ae,n=qa(e,e===t?n:0),r=e.callbackNode,n===0||e===t&&Re===2||e.cancelPendingCommit!==null)return r!==null&&r!==null&&dc(r),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||_l(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&dc(r),Io(n)){case 2:case 8:n=Zo;break;case 32:n=Ra;break;case 268435456:n=Ko;break;default:n=Ra}return r=Km.bind(null,e),n=uc(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&dc(r),e.callbackPriority=2,e.callbackNode=null,2}function Km(e,t){var n=e.callbackNode;if(ml()&&e.callbackNode!==n)return null;var r=Ae;return r=qa(e,e===Oe?r:0),r===0?null:(Om(e,r,t),Zm(e,ln()),e.callbackNode!=null&&e.callbackNode===n?Km.bind(null,e):null)}function Fm(e,t){if(ml())return null;Om(e,t,!0)}function Ny(e){zy(function(){(Ge&6)!==0?uc(Xo,e):e()})}function Js(){return zr===0&&(zr=Fo()),zr}function Jm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ya(""+e)}function $m(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Sy(e,t,n,r,c){if(t==="submit"&&n&&n.stateNode===c){var s=Jm((c[vt]||null).action),f=r.submitter;f&&(t=(t=f[vt]||null)?Jm(t.formAction):f.getAttribute("formAction"),t!==null&&(s=t,f=null));var g=new Ka("action","action",null,r,c);e.push({event:g,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(zr!==0){var A=f?$m(c,f):new FormData(c);ls(n,{pending:!0,data:A,method:c.method,action:s},null,A)}}else typeof s=="function"&&(g.preventDefault(),A=f?$m(c,f):new FormData(c),ls(n,{pending:!0,data:A,method:c.method,action:s},s,A))},currentTarget:c}]})}}for(var $s=0;$s<ju.length;$s++){var Ws=ju[$s],xy=Ws.toLowerCase(),Cy=Ws[0].toUpperCase()+Ws.slice(1);Ft(xy,"on"+Cy)}Ft(Bu,"onAnimationEnd"),Ft(qu,"onAnimationIteration"),Ft(Lu,"onAnimationStart"),Ft("dblclick","onDoubleClick"),Ft("focusin","onFocus"),Ft("focusout","onBlur"),Ft(jp,"onTransitionRun"),Ft(Yp,"onTransitionStart"),Ft(Qp,"onTransitionCancel"),Ft(Gu,"onTransitionEnd"),Gr("onMouseEnter",["mouseout","mouseover"]),Gr("onMouseLeave",["mouseout","mouseover"]),Gr("onPointerEnter",["pointerout","pointerover"]),Gr("onPointerLeave",["pointerout","pointerover"]),fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),fr("onBeforeInput",["compositionend","keypress","textInput","paste"]),fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fa));function Wm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],c=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var f=r.length-1;0<=f;f--){var g=r[f],A=g.instance,C=g.currentTarget;if(g=g.listener,A!==s&&c.isPropagationStopped())break e;s=g,c.currentTarget=C;try{s(c)}catch(U){pi(U)}c.currentTarget=null,s=A}else for(f=0;f<r.length;f++){if(g=r[f],A=g.instance,C=g.currentTarget,g=g.listener,A!==s&&c.isPropagationStopped())break e;s=g,c.currentTarget=C;try{s(c)}catch(U){pi(U)}c.currentTarget=null,s=A}}}}function ve(e,t){var n=t[fc];n===void 0&&(n=t[fc]=new Set);var r=e+"__bubble";n.has(r)||(Im(t,e,2,!1),n.add(r))}function Is(e,t,n){var r=0;t&&(r|=4),Im(n,e,r,t)}var Ti="_reactListening"+Math.random().toString(36).slice(2);function Ps(e){if(!e[Ti]){e[Ti]=!0,tu.forEach(function(n){n!=="selectionchange"&&(Dy.has(n)||Is(n,!1,e),Is(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ti]||(t[Ti]=!0,Is("selectionchange",!1,t))}}function Im(e,t,n,r){switch(Nf(t)){case 2:var c=Iy;break;case 8:c=Py;break;default:c=fo}n=c.bind(null,t,n,e),c=void 0,!Ac||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),r?c!==void 0?e.addEventListener(t,n,{capture:!0,passive:c}):e.addEventListener(t,n,!0):c!==void 0?e.addEventListener(t,n,{passive:c}):e.addEventListener(t,n,!1)}function eo(e,t,n,r,c){var s=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var f=r.tag;if(f===3||f===4){var g=r.stateNode.containerInfo;if(g===c||g.nodeType===8&&g.parentNode===c)break;if(f===4)for(f=r.return;f!==null;){var A=f.tag;if((A===3||A===4)&&(A=f.stateNode.containerInfo,A===c||A.nodeType===8&&A.parentNode===c))return;f=f.return}for(;g!==null;){if(f=mr(g),f===null)return;if(A=f.tag,A===5||A===6||A===26||A===27){r=s=f;continue e}g=g.parentNode}}r=r.return}fu(function(){var C=s,U=vc(n),G=[];e:{var k=Vu.get(e);if(k!==void 0){var R=Ka,I=e;switch(e){case"keypress":if(Xa(n)===0)break e;case"keydown":case"keyup":R=vp;break;case"focusin":I="focus",R=Cc;break;case"focusout":I="blur",R=Cc;break;case"beforeblur":case"afterblur":R=Cc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=yu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=cp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=Np;break;case Bu:case qu:case Lu:R=up;break;case Gu:R=xp;break;case"scroll":case"scrollend":R=ap;break;case"wheel":R=Dp;break;case"copy":case"cut":case"paste":R=mp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=gu;break;case"toggle":case"beforetoggle":R=_p}var oe=(t&4)!==0,Ye=!oe&&(e==="scroll"||e==="scrollend"),_=oe?k!==null?k+"Capture":null:k;oe=[];for(var x=C,T;x!==null;){var L=x;if(T=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||T===null||_===null||(L=zl(x,_),L!=null&&oe.push(ha(x,L,T))),Ye)break;x=x.return}0<oe.length&&(k=new R(k,I,null,n,U),G.push({event:k,listeners:oe}))}}if((t&7)===0){e:{if(k=e==="mouseover"||e==="pointerover",R=e==="mouseout"||e==="pointerout",k&&n!==gc&&(I=n.relatedTarget||n.fromElement)&&(mr(I)||I[Br]))break e;if((R||k)&&(k=U.window===U?U:(k=U.ownerDocument)?k.defaultView||k.parentWindow:window,R?(I=n.relatedTarget||n.toElement,R=C,I=I?mr(I):null,I!==null&&(Ye=ae(I),oe=I.tag,I!==Ye||oe!==5&&oe!==27&&oe!==6)&&(I=null)):(R=null,I=C),R!==I)){if(oe=yu,L="onMouseLeave",_="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(oe=gu,L="onPointerLeave",_="onPointerEnter",x="pointer"),Ye=R==null?k:kl(R),T=I==null?k:kl(I),k=new oe(L,x+"leave",R,n,U),k.target=Ye,k.relatedTarget=T,L=null,mr(U)===C&&(oe=new oe(_,x+"enter",I,n,U),oe.target=T,oe.relatedTarget=Ye,L=oe),Ye=L,R&&I)t:{for(oe=R,_=I,x=0,T=oe;T;T=hl(T))x++;for(T=0,L=_;L;L=hl(L))T++;for(;0<x-T;)oe=hl(oe),x--;for(;0<T-x;)_=hl(_),T--;for(;x--;){if(oe===_||_!==null&&oe===_.alternate)break t;oe=hl(oe),_=hl(_)}oe=null}else oe=null;R!==null&&Pm(G,k,R,oe,!1),I!==null&&Ye!==null&&Pm(G,Ye,I,oe,!0)}}e:{if(k=C?kl(C):window,R=k.nodeName&&k.nodeName.toLowerCase(),R==="select"||R==="input"&&k.type==="file")var F=Du;else if(xu(k))if(wu)F=qp;else{F=Up;var ye=Rp}else R=k.nodeName,!R||R.toLowerCase()!=="input"||k.type!=="checkbox"&&k.type!=="radio"?C&&bc(C.elementType)&&(F=Du):F=Bp;if(F&&(F=F(e,C))){Cu(G,F,n,U);break e}ye&&ye(e,k,C),e==="focusout"&&C&&k.type==="number"&&C.memoizedProps.value!=null&&yc(k,"number",k.value)}switch(ye=C?kl(C):window,e){case"focusin":(xu(ye)||ye.contentEditable==="true")&&(Zr=ye,kc=C,Gl=null);break;case"focusout":Gl=kc=Zr=null;break;case"mousedown":zc=!0;break;case"contextmenu":case"mouseup":case"dragend":zc=!1,Ru(G,n,U);break;case"selectionchange":if(Vp)break;case"keydown":case"keyup":Ru(G,n,U)}var P;if(wc)e:{switch(e){case"compositionstart":var ne="onCompositionStart";break e;case"compositionend":ne="onCompositionEnd";break e;case"compositionupdate":ne="onCompositionUpdate";break e}ne=void 0}else Xr?Nu(e,n)&&(ne="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ne="onCompositionStart");ne&&(vu&&n.locale!=="ko"&&(Xr||ne!=="onCompositionStart"?ne==="onCompositionEnd"&&Xr&&(P=hu()):(jn=U,Nc="value"in jn?jn.value:jn.textContent,Xr=!0)),ye=ki(C,ne),0<ye.length&&(ne=new bu(ne,e,null,n,U),G.push({event:ne,listeners:ye}),P?ne.data=P:(P=Su(n),P!==null&&(ne.data=P)))),(P=Tp?kp(e,n):zp(e,n))&&(ne=ki(C,"onBeforeInput"),0<ne.length&&(ye=new bu("onBeforeInput","beforeinput",null,n,U),G.push({event:ye,listeners:ne}),ye.data=P)),Sy(G,e,C,n,U)}Wm(G,t)})}function ha(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ki(e,t){for(var n=t+"Capture",r=[];e!==null;){var c=e,s=c.stateNode;c=c.tag,c!==5&&c!==26&&c!==27||s===null||(c=zl(e,n),c!=null&&r.unshift(ha(e,c,s)),c=zl(e,t),c!=null&&r.push(ha(e,c,s))),e=e.return}return r}function hl(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Pm(e,t,n,r,c){for(var s=t._reactName,f=[];n!==null&&n!==r;){var g=n,A=g.alternate,C=g.stateNode;if(g=g.tag,A!==null&&A===r)break;g!==5&&g!==26&&g!==27||C===null||(A=C,c?(C=zl(n,s),C!=null&&f.unshift(ha(n,C,A))):c||(C=zl(n,s),C!=null&&f.push(ha(n,C,A)))),n=n.return}f.length!==0&&e.push({event:t,listeners:f})}var wy=/\r\n?/g,_y=/\u0000|\uFFFD/g;function ef(e){return(typeof e=="string"?e:""+e).replace(wy,`
`).replace(_y,"")}function tf(e,t){return t=ef(t),ef(e)===t}function zi(){}function He(e,t,n,r,c,s){switch(n){case"children":typeof r=="string"?t==="body"||t==="textarea"&&r===""||jr(e,r):(typeof r=="number"||typeof r=="bigint")&&t!=="body"&&jr(e,""+r);break;case"className":Ga(e,"class",r);break;case"tabIndex":Ga(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Ga(e,n,r);break;case"style":du(e,r,s);break;case"data":if(t!=="object"){Ga(e,"data",r);break}case"src":case"href":if(r===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(n);break}r=Ya(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&He(e,t,"name",c.name,c,null),He(e,t,"formEncType",c.formEncType,c,null),He(e,t,"formMethod",c.formMethod,c,null),He(e,t,"formTarget",c.formTarget,c,null)):(He(e,t,"encType",c.encType,c,null),He(e,t,"method",c.method,c,null),He(e,t,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(n);break}r=Ya(""+r),e.setAttribute(n,r);break;case"onClick":r!=null&&(e.onclick=zi);break;case"onScroll":r!=null&&ve("scroll",e);break;case"onScrollEnd":r!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(u(61));if(n=r.__html,n!=null){if(c.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}n=Ya(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":r===!0?e.setAttribute(n,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":ve("beforetoggle",e),ve("toggle",e),La(e,"popover",r);break;case"xlinkActuate":bn(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":bn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":bn(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":bn(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":bn(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":bn(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":bn(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":bn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":bn(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":La(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=rp.get(n)||n,La(e,n,r))}}function to(e,t,n,r,c,s){switch(n){case"style":du(e,r,s);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(u(61));if(n=r.__html,n!=null){if(c.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"children":typeof r=="string"?jr(e,r):(typeof r=="number"||typeof r=="bigint")&&jr(e,""+r);break;case"onScroll":r!=null&&ve("scroll",e);break;case"onScrollEnd":r!=null&&ve("scrollend",e);break;case"onClick":r!=null&&(e.onclick=zi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!nu.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(c=n.endsWith("Capture"),t=n.slice(2,c?n.length-7:void 0),s=e[vt]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,c),typeof r=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,c);break e}n in e?e[n]=r:r===!0?e.setAttribute(n,""):La(e,n,r)}}}function ut(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var r=!1,c=!1,s;for(s in n)if(n.hasOwnProperty(s)){var f=n[s];if(f!=null)switch(s){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:He(e,t,s,f,n,null)}}c&&He(e,t,"srcSet",n.srcSet,n,null),r&&He(e,t,"src",n.src,n,null);return;case"input":ve("invalid",e);var g=s=f=c=null,A=null,C=null;for(r in n)if(n.hasOwnProperty(r)){var U=n[r];if(U!=null)switch(r){case"name":c=U;break;case"type":f=U;break;case"checked":A=U;break;case"defaultChecked":C=U;break;case"value":s=U;break;case"defaultValue":g=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(u(137,t));break;default:He(e,t,r,U,n,null)}}cu(e,s,g,A,C,f,c,!1),Va(e);return;case"select":ve("invalid",e),r=f=s=null;for(c in n)if(n.hasOwnProperty(c)&&(g=n[c],g!=null))switch(c){case"value":s=g;break;case"defaultValue":f=g;break;case"multiple":r=g;default:He(e,t,c,g,n,null)}t=s,n=f,e.multiple=!!r,t!=null?Vr(e,!!r,t,!1):n!=null&&Vr(e,!!r,n,!0);return;case"textarea":ve("invalid",e),s=c=r=null;for(f in n)if(n.hasOwnProperty(f)&&(g=n[f],g!=null))switch(f){case"value":r=g;break;case"defaultValue":c=g;break;case"children":s=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(u(91));break;default:He(e,t,f,g,n,null)}ou(e,r,c,s),Va(e);return;case"option":for(A in n)if(n.hasOwnProperty(A)&&(r=n[A],r!=null))switch(A){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:He(e,t,A,r,n,null)}return;case"dialog":ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(r=0;r<fa.length;r++)ve(fa[r],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(C in n)if(n.hasOwnProperty(C)&&(r=n[C],r!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:He(e,t,C,r,n,null)}return;default:if(bc(t)){for(U in n)n.hasOwnProperty(U)&&(r=n[U],r!==void 0&&to(e,t,U,r,n,void 0));return}}for(g in n)n.hasOwnProperty(g)&&(r=n[g],r!=null&&He(e,t,g,r,n,null))}function Hy(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,s=null,f=null,g=null,A=null,C=null,U=null;for(R in n){var G=n[R];if(n.hasOwnProperty(R)&&G!=null)switch(R){case"checked":break;case"value":break;case"defaultValue":A=G;default:r.hasOwnProperty(R)||He(e,t,R,null,r,G)}}for(var k in r){var R=r[k];if(G=n[k],r.hasOwnProperty(k)&&(R!=null||G!=null))switch(k){case"type":s=R;break;case"name":c=R;break;case"checked":C=R;break;case"defaultChecked":U=R;break;case"value":f=R;break;case"defaultValue":g=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(u(137,t));break;default:R!==G&&He(e,t,k,R,r,G)}}pc(e,f,g,A,C,U,s,c);return;case"select":R=f=g=k=null;for(s in n)if(A=n[s],n.hasOwnProperty(s)&&A!=null)switch(s){case"value":break;case"multiple":R=A;default:r.hasOwnProperty(s)||He(e,t,s,null,r,A)}for(c in r)if(s=r[c],A=n[c],r.hasOwnProperty(c)&&(s!=null||A!=null))switch(c){case"value":k=s;break;case"defaultValue":g=s;break;case"multiple":f=s;default:s!==A&&He(e,t,c,s,r,A)}t=g,n=f,r=R,k!=null?Vr(e,!!n,k,!1):!!r!=!!n&&(t!=null?Vr(e,!!n,t,!0):Vr(e,!!n,n?[]:"",!1));return;case"textarea":R=k=null;for(g in n)if(c=n[g],n.hasOwnProperty(g)&&c!=null&&!r.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:He(e,t,g,null,r,c)}for(f in r)if(c=r[f],s=n[f],r.hasOwnProperty(f)&&(c!=null||s!=null))switch(f){case"value":k=c;break;case"defaultValue":R=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(u(91));break;default:c!==s&&He(e,t,f,c,r,s)}su(e,k,R);return;case"option":for(var I in n)if(k=n[I],n.hasOwnProperty(I)&&k!=null&&!r.hasOwnProperty(I))switch(I){case"selected":e.selected=!1;break;default:He(e,t,I,null,r,k)}for(A in r)if(k=r[A],R=n[A],r.hasOwnProperty(A)&&k!==R&&(k!=null||R!=null))switch(A){case"selected":e.selected=k&&typeof k!="function"&&typeof k!="symbol";break;default:He(e,t,A,k,r,R)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var oe in n)k=n[oe],n.hasOwnProperty(oe)&&k!=null&&!r.hasOwnProperty(oe)&&He(e,t,oe,null,r,k);for(C in r)if(k=r[C],R=n[C],r.hasOwnProperty(C)&&k!==R&&(k!=null||R!=null))switch(C){case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(u(137,t));break;default:He(e,t,C,k,r,R)}return;default:if(bc(t)){for(var Ye in n)k=n[Ye],n.hasOwnProperty(Ye)&&k!==void 0&&!r.hasOwnProperty(Ye)&&to(e,t,Ye,void 0,r,k);for(U in r)k=r[U],R=n[U],!r.hasOwnProperty(U)||k===R||k===void 0&&R===void 0||to(e,t,U,k,r,R);return}}for(var _ in n)k=n[_],n.hasOwnProperty(_)&&k!=null&&!r.hasOwnProperty(_)&&He(e,t,_,null,r,k);for(G in r)k=r[G],R=n[G],!r.hasOwnProperty(G)||k===R||k==null&&R==null||He(e,t,G,k,r,R)}var no=null,ro=null;function Mi(e){return e.nodeType===9?e:e.ownerDocument}function nf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function rf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function lo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ao=null;function Ty(){var e=window.event;return e&&e.type==="popstate"?e===ao?!1:(ao=e,!0):(ao=null,!1)}var lf=typeof setTimeout=="function"?setTimeout:void 0,ky=typeof clearTimeout=="function"?clearTimeout:void 0,af=typeof Promise=="function"?Promise:void 0,zy=typeof queueMicrotask=="function"?queueMicrotask:typeof af<"u"?function(e){return af.resolve(null).then(e).catch(My)}:lf;function My(e){setTimeout(function(){throw e})}function io(e,t){var n=t,r=0;do{var c=n.nextSibling;if(e.removeChild(n),c&&c.nodeType===8)if(n=c.data,n==="/$"){if(r===0){e.removeChild(c),Na(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=c}while(n);Na(t)}function co(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":co(n),hc(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Oy(e,t,n,r){for(;e.nodeType===1;){var c=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Tl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==c.rel||e.getAttribute("href")!==(c.href==null?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Wt(e.nextSibling),e===null)break}return null}function Ry(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Wt(e.nextSibling),e===null))return null;return e}function Wt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}function cf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function sf(e,t,n){switch(t=Mi(n),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}var Qt=new Map,of=new Set;function Oi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var zn=K.d;K.d={f:Uy,r:By,D:qy,C:Ly,L:Gy,m:Vy,X:Yy,S:jy,M:Qy};function Uy(){var e=zn.f(),t=Di();return e||t}function By(e){var t=qr(e);t!==null&&t.tag===5&&t.type==="form"?Rd(t):zn.r(e)}var pl=typeof document>"u"?null:document;function uf(e,t,n){var r=pl;if(r&&typeof t=="string"&&t){var c=Ot(t);c='link[rel="'+e+'"][href="'+c+'"]',typeof n=="string"&&(c+='[crossorigin="'+n+'"]'),of.has(c)||(of.add(c),e={rel:e,crossOrigin:n,href:t},r.querySelector(c)===null&&(t=r.createElement("link"),ut(t,"link",e),tt(t),r.head.appendChild(t)))}}function qy(e){zn.D(e),uf("dns-prefetch",e,null)}function Ly(e,t){zn.C(e,t),uf("preconnect",e,t)}function Gy(e,t,n){zn.L(e,t,n);var r=pl;if(r&&e&&t){var c='link[rel="preload"][as="'+Ot(t)+'"]';t==="image"&&n&&n.imageSrcSet?(c+='[imagesrcset="'+Ot(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(c+='[imagesizes="'+Ot(n.imageSizes)+'"]')):c+='[href="'+Ot(e)+'"]';var s=c;switch(t){case"style":s=yl(e);break;case"script":s=bl(e)}Qt.has(s)||(e=xe({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Qt.set(s,e),r.querySelector(c)!==null||t==="style"&&r.querySelector(pa(s))||t==="script"&&r.querySelector(ya(s))||(t=r.createElement("link"),ut(t,"link",e),tt(t),r.head.appendChild(t)))}}function Vy(e,t){zn.m(e,t);var n=pl;if(n&&e){var r=t&&typeof t.as=="string"?t.as:"script",c='link[rel="modulepreload"][as="'+Ot(r)+'"][href="'+Ot(e)+'"]',s=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=bl(e)}if(!Qt.has(s)&&(e=xe({rel:"modulepreload",href:e},t),Qt.set(s,e),n.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ya(s)))return}r=n.createElement("link"),ut(r,"link",e),tt(r),n.head.appendChild(r)}}}function jy(e,t,n){zn.S(e,t,n);var r=pl;if(r&&e){var c=Lr(r).hoistableStyles,s=yl(e);t=t||"default";var f=c.get(s);if(!f){var g={loading:0,preload:null};if(f=r.querySelector(pa(s)))g.loading=5;else{e=xe({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Qt.get(s))&&so(e,n);var A=f=r.createElement("link");tt(A),ut(A,"link",e),A._p=new Promise(function(C,U){A.onload=C,A.onerror=U}),A.addEventListener("load",function(){g.loading|=1}),A.addEventListener("error",function(){g.loading|=2}),g.loading|=4,Ri(f,t,r)}f={type:"stylesheet",instance:f,count:1,state:g},c.set(s,f)}}}function Yy(e,t){zn.X(e,t);var n=pl;if(n&&e){var r=Lr(n).hoistableScripts,c=bl(e),s=r.get(c);s||(s=n.querySelector(ya(c)),s||(e=xe({src:e,async:!0},t),(t=Qt.get(c))&&oo(e,t),s=n.createElement("script"),tt(s),ut(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},r.set(c,s))}}function Qy(e,t){zn.M(e,t);var n=pl;if(n&&e){var r=Lr(n).hoistableScripts,c=bl(e),s=r.get(c);s||(s=n.querySelector(ya(c)),s||(e=xe({src:e,async:!0,type:"module"},t),(t=Qt.get(c))&&oo(e,t),s=n.createElement("script"),tt(s),ut(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},r.set(c,s))}}function df(e,t,n,r){var c=(c=Ln.current)?Oi(c):null;if(!c)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=yl(n.href),n=Lr(c).hoistableStyles,r=n.get(t),r||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=yl(n.href);var s=Lr(c).hoistableStyles,f=s.get(e);if(f||(c=c.ownerDocument||c,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,f),(s=c.querySelector(pa(e)))&&!s._p&&(f.instance=s,f.state.loading=5),Qt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Qt.set(e,n),s||Xy(c,e,n,f.state))),t&&r===null)throw Error(u(528,""));return f}if(t&&r!==null)throw Error(u(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=bl(n),n=Lr(c).hoistableScripts,r=n.get(t),r||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function yl(e){return'href="'+Ot(e)+'"'}function pa(e){return'link[rel="stylesheet"]['+e+"]"}function mf(e){return xe({},e,{"data-precedence":e.precedence,precedence:null})}function Xy(e,t,n,r){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?r.loading=1:(t=e.createElement("link"),r.preload=t,t.addEventListener("load",function(){return r.loading|=1}),t.addEventListener("error",function(){return r.loading|=2}),ut(t,"link",n),tt(t),e.head.appendChild(t))}function bl(e){return'[src="'+Ot(e)+'"]'}function ya(e){return"script[async]"+e}function ff(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+Ot(n.href)+'"]');if(r)return t.instance=r,tt(r),r;var c=xe({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),tt(r),ut(r,"style",c),Ri(r,n.precedence,e),t.instance=r;case"stylesheet":c=yl(n.href);var s=e.querySelector(pa(c));if(s)return t.state.loading|=4,t.instance=s,tt(s),s;r=mf(n),(c=Qt.get(c))&&so(r,c),s=(e.ownerDocument||e).createElement("link"),tt(s);var f=s;return f._p=new Promise(function(g,A){f.onload=g,f.onerror=A}),ut(s,"link",r),t.state.loading|=4,Ri(s,n.precedence,e),t.instance=s;case"script":return s=bl(n.src),(c=e.querySelector(ya(s)))?(t.instance=c,tt(c),c):(r=n,(c=Qt.get(s))&&(r=xe({},n),oo(r,c)),e=e.ownerDocument||e,c=e.createElement("script"),tt(c),ut(c,"link",r),e.head.appendChild(c),t.instance=c);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(r=t.instance,t.state.loading|=4,Ri(r,n.precedence,e));return t.instance}function Ri(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,s=c,f=0;f<r.length;f++){var g=r[f];if(g.dataset.precedence===t)s=g;else if(s!==c)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function so(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function oo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ui=null;function hf(e,t,n){if(Ui===null){var r=new Map,c=Ui=new Map;c.set(n,r)}else c=Ui,r=c.get(n),r||(r=new Map,c.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),c=0;c<n.length;c++){var s=n[c];if(!(s[Tl]||s[mt]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var f=s.getAttribute(t)||"";f=e+f;var g=r.get(f);g?g.push(s):r.set(f,[s])}}return r}function pf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Zy(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function yf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var ba=null;function Ky(){}function Fy(e,t,n){if(ba===null)throw Error(u(475));var r=ba;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var c=yl(n.href),s=e.querySelector(pa(c));if(s){e=s._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(r.count++,r=Bi.bind(r),e.then(r,r)),t.state.loading|=4,t.instance=s,tt(s);return}s=e.ownerDocument||e,n=mf(n),(c=Qt.get(c))&&so(n,c),s=s.createElement("link"),tt(s);var f=s;f._p=new Promise(function(g,A){f.onload=g,f.onerror=A}),ut(s,"link",n),t.instance=s}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(r.count++,t=Bi.bind(r),e.addEventListener("load",t),e.addEventListener("error",t))}}function Jy(){if(ba===null)throw Error(u(475));var e=ba;return e.stylesheets&&e.count===0&&uo(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&uo(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function Bi(){if(this.count--,this.count===0){if(this.stylesheets)uo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var qi=null;function uo(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,qi=new Map,t.forEach($y,e),qi=null,Bi.call(e))}function $y(e,t){if(!(t.state.loading&4)){var n=qi.get(e);if(n)var r=n.get(null);else{n=new Map,qi.set(e,n);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<c.length;s++){var f=c[s];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(n.set(f.dataset.precedence,f),r=f)}r&&n.set(null,r)}c=t.instance,f=c.getAttribute("data-precedence"),s=n.get(f)||r,s===r&&n.set(null,c),n.set(f,c),this.count++,r=Bi.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),s?s.parentNode.insertBefore(c,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),t.state.loading|=4}}var ga={$$typeof:B,Provider:null,Consumer:null,_currentValue:Ee,_currentValue2:Ee,_threadCount:0};function Wy(e,t,n,r,c,s,f,g){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=mc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mc(0),this.hiddenUpdates=mc(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=s,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=g,this.incompleteTransitions=new Map}function bf(e,t,n,r,c,s,f,g,A,C,U,G){return e=new Wy(e,t,n,f,g,A,C,G),t=1,s===!0&&(t|=24),s=jt(3,null,null,t),e.current=s,s.stateNode=e,t=jc(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:r,isDehydrated:n,cache:t},Ns(s),e}function gf(e){return e?(e=Jr,e):Jr}function vf(e,t,n,r,c,s){c=gf(c),r.context===null?r.context=c:r.pendingContext=c,r=$n(t),r.payload={element:n},s=s===void 0?null:s,s!==null&&(r.callback=s),n=Wn(e,r,t),n!==null&&(bt(n,e,t),ta(n,e,t))}function Ef(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function mo(e,t){Ef(e,t),(e=e.alternate)&&Ef(e,t)}function Af(e){if(e.tag===13){var t=Yn(e,67108864);t!==null&&bt(t,e,67108864),mo(e,67108864)}}var Li=!0;function Iy(e,t,n,r){var c=re.T;re.T=null;var s=K.p;try{K.p=2,fo(e,t,n,r)}finally{K.p=s,re.T=c}}function Py(e,t,n,r){var c=re.T;re.T=null;var s=K.p;try{K.p=8,fo(e,t,n,r)}finally{K.p=s,re.T=c}}function fo(e,t,n,r){if(Li){var c=ho(r);if(c===null)eo(e,t,r,Gi,n),Sf(e,r);else if(tb(c,e,t,n,r))r.stopPropagation();else if(Sf(e,r),t&4&&-1<eb.indexOf(e)){for(;c!==null;){var s=qr(c);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var f=dr(s.pendingLanes);if(f!==0){var g=s;for(g.pendingLanes|=2,g.entangledLanes|=2;f;){var A=1<<31-St(f);g.entanglements[1]|=A,f&=~A}un(s),(Ge&6)===0&&(Si=ln()+500,ma(0))}}break;case 13:g=Yn(s,2),g!==null&&bt(g,s,2),Di(),mo(s,2)}if(s=ho(r),s===null&&eo(e,t,r,Gi,n),s===c)break;c=s}c!==null&&r.stopPropagation()}else eo(e,t,r,null,n)}}function ho(e){return e=vc(e),po(e)}var Gi=null;function po(e){if(Gi=null,e=mr(e),e!==null){var t=ae(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=Me(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Gi=e,null}function Nf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Lh()){case Xo:return 2;case Zo:return 8;case Ra:case Gh:return 32;case Ko:return 268435456;default:return 32}default:return 32}}var yo=!1,lr=null,ar=null,ir=null,va=new Map,Ea=new Map,cr=[],eb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Sf(e,t){switch(e){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":va.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ea.delete(t.pointerId)}}function Aa(e,t,n,r,c,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[c]},t!==null&&(t=qr(t),t!==null&&Af(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function tb(e,t,n,r,c){switch(t){case"focusin":return lr=Aa(lr,e,t,n,r,c),!0;case"dragenter":return ar=Aa(ar,e,t,n,r,c),!0;case"mouseover":return ir=Aa(ir,e,t,n,r,c),!0;case"pointerover":var s=c.pointerId;return va.set(s,Aa(va.get(s)||null,e,t,n,r,c)),!0;case"gotpointercapture":return s=c.pointerId,Ea.set(s,Aa(Ea.get(s)||null,e,t,n,r,c)),!0}return!1}function xf(e){var t=mr(e.target);if(t!==null){var n=ae(t);if(n!==null){if(t=n.tag,t===13){if(t=Me(n),t!==null){e.blockedOn=t,Jh(e.priority,function(){if(n.tag===13){var r=_t(),c=Yn(n,r);c!==null&&bt(c,n,r),mo(n,r)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ho(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);gc=r,n.target.dispatchEvent(r),gc=null}else return t=qr(n),t!==null&&Af(t),e.blockedOn=n,!1;t.shift()}return!0}function Cf(e,t,n){Vi(e)&&n.delete(t)}function nb(){yo=!1,lr!==null&&Vi(lr)&&(lr=null),ar!==null&&Vi(ar)&&(ar=null),ir!==null&&Vi(ir)&&(ir=null),va.forEach(Cf),Ea.forEach(Cf)}function ji(e,t){e.blockedOn===t&&(e.blockedOn=null,yo||(yo=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,nb)))}var Yi=null;function Df(e){Yi!==e&&(Yi=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Yi===e&&(Yi=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],c=e[t+2];if(typeof r!="function"){if(po(r||n)===null)continue;break}var s=qr(n);s!==null&&(e.splice(t,3),t-=3,ls(s,{pending:!0,data:c,method:n.method,action:r},r,c))}}))}function Na(e){function t(A){return ji(A,e)}lr!==null&&ji(lr,e),ar!==null&&ji(ar,e),ir!==null&&ji(ir,e),va.forEach(t),Ea.forEach(t);for(var n=0;n<cr.length;n++){var r=cr[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<cr.length&&(n=cr[0],n.blockedOn===null);)xf(n),n.blockedOn===null&&cr.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var c=n[r],s=n[r+1],f=c[vt]||null;if(typeof s=="function")f||Df(n);else if(f){var g=null;if(s&&s.hasAttribute("formAction")){if(c=s,f=s[vt]||null)g=f.formAction;else if(po(c)!==null)continue}else g=f.action;typeof g=="function"?n[r+1]=g:(n.splice(r,3),r-=3),Df(n)}}}function bo(e){this._internalRoot=e}Qi.prototype.render=bo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var n=t.current,r=_t();vf(n,r,e,t,null,null)},Qi.prototype.unmount=bo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;e.tag===0&&ml(),vf(e.current,2,null,e,null,null),Di(),t[Br]=null}};function Qi(e){this._internalRoot=e}Qi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Po();e={blockedOn:null,target:e,priority:t};for(var n=0;n<cr.length&&t!==0&&t<cr[n].priority;n++);cr.splice(n,0,e),n===0&&xf(e)}};var wf=i.version;if(wf!=="19.0.0")throw Error(u(527,wf,"19.0.0"));K.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=V(t),e=e!==null?le(e):null,e=e===null?null:e.stateNode,e};var rb={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:re,findFiberByHostInstance:mr,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xi.isDisabled&&Xi.supportsFiber)try{wl=Xi.inject(rb),Nt=Xi}catch{}}return Sa.createRoot=function(e,t){if(!p(e))throw Error(u(299));var n=!1,r="",c=Yd,s=Qd,f=Xd,g=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(c=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(g=t.unstable_transitionCallbacks)),t=bf(e,1,!1,null,null,n,r,c,s,f,g,null),e[Br]=t.current,Ps(e.nodeType===8?e.parentNode:e),new bo(t)},Sa.hydrateRoot=function(e,t,n){if(!p(e))throw Error(u(299));var r=!1,c="",s=Yd,f=Qd,g=Xd,A=null,C=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(c=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(A=n.unstable_transitionCallbacks),n.formState!==void 0&&(C=n.formState)),t=bf(e,1,!0,t,n??null,r,c,s,f,g,A,C),t.context=gf(null),n=t.current,r=_t(),c=$n(r),c.callback=null,Wn(n,c,r),t.current.lanes=r,Hl(t,r),un(t),e[Br]=t.current,Ps(e),new Qi(t)},Sa.version="19.0.0",Sa}var Rf;function mb(){if(Rf)return go.exports;Rf=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),go.exports=db(),go.exports}var fb=mb(),l=tc();const hb=ab(l);function Mn(a){return Array.isArray(a)||ArrayBuffer.isView(a)}function pb(a){return a!=null&&typeof a.GetEnumerator=="function"}function yb(a){return a!=null&&typeof a.CompareTo=="function"}function bb(a){return a!=null&&typeof a.Equals=="function"}function gb(a){return a!=null&&typeof a.GetHashCode=="function"}function wo(a){return a!=null&&typeof a.Dispose=="function"}function dt(a){wo(a)&&a.Dispose()}function mn(){return null}function Ki(a,i){var o,u;return((o=Object.getPrototypeOf(a))==null?void 0:o.constructor)===((u=Object.getPrototypeOf(i))==null?void 0:u.constructor)}class vb{constructor(i){this.iter=i,this.current=mn()}"System.Collections.Generic.IEnumerator`1.get_Current"(){return this.current}"System.Collections.IEnumerator.get_Current"(){return this.current}"System.Collections.IEnumerator.MoveNext"(){const i=this.iter.next();return this.current=i.value,!i.done}"System.Collections.IEnumerator.Reset"(){throw new Error("JS iterators cannot be reset")}Dispose(){}}function kt(a){return pb(a)?a.GetEnumerator():new vb(a[Symbol.iterator]())}function Bo(a){return{next(){const i=a["System.Collections.IEnumerator.MoveNext"](),o=i?a["System.Collections.Generic.IEnumerator`1.get_Current"]():void 0;return{done:!i,value:o}}}}function Uf(a,i){return a.toString(10).padStart(i,"0")}function Bf(a){const i=a;return typeof i.offset=="number"?i.offset:a.kind===1?0:a.getTimezoneOffset()*-6e4}function Eb(a,i){return a=a,a.toString(i)}class ur{static id(i){return ur.idMap.has(i)||ur.idMap.set(i,++ur.count),ur.idMap.get(i)}}ur.idMap=new WeakMap;ur.count=0;function ih(a){let i=0,o=5381;const u=a.length;for(;i<u;)o=o*33^a.charCodeAt(i++);return o}function _o(a){return a*2654435761|0}function Ab(a){return ih(a.toString(32))}function nc(a){let i=0;const o=a.length;for(let u=0;u<o;u++){const p=a[u];i=(i<<5)+i^p}return i}function Nb(a){return a.getTime()}function Sb(a){const i=a.length,o=new Array(i);for(let u=0;u<i;u++)o[u]=Rr(a[u]);return nc(o)}function Rr(a){var i;if(a==null)return 0;switch(typeof a){case"boolean":return a?1:0;case"number":return _o(a);case"bigint":return Ab(a);case"string":return ih(a);default:{if(gb(a))return a.GetHashCode();if(Mn(a))return Sb(a);if(a instanceof Date)return Nb(a);if(((i=Object.getPrototypeOf(a))==null?void 0:i.constructor)===Object){const o=Object.values(a).map(u=>Rr(u));return nc(o)}else return _o(ur.id(a))}}}function xb(a,i,o){if(a==null)return i==null;if(i==null||a.length!==i.length)return!1;for(let u=0;u<a.length;u++)if(!o(a[u],i[u]))return!1;return!0}function ch(a,i){return xb(a,i,On)}function Cb(a,i){const o=Object.keys(a),u=Object.keys(i);if(o.length!==u.length)return!1;o.sort(),u.sort();for(let p=0;p<o.length;p++)if(o[p]!==u[p]||!On(a[o[p]],i[u[p]]))return!1;return!0}function On(a,i){var o;return a===i?!0:a==null?i==null:i==null?!1:bb(a)?a.Equals(i):Mn(a)?Mn(i)&&ch(a,i):typeof a!="object"?!1:a instanceof Date?i instanceof Date&&sh(a,i)===0:((o=Object.getPrototypeOf(a))==null?void 0:o.constructor)===Object&&Cb(a,i)}function sh(a,i){let o,u;return"offset"in a&&"offset"in i?(o=a.getTime(),u=i.getTime()):(o=a.getTime()+Bf(a),u=i.getTime()+Bf(i)),o===u?0:o<u?-1:1}function Db(a,i,o){if(a==null)return i==null?0:1;if(i==null)return-1;if(a.length!==i.length)return a.length<i.length?-1:1;for(let u=0,p=0;u<a.length;u++)if(p=o(a[u],i[u]),p!==0)return p;return 0}function oh(a,i){return Db(a,i,Rn)}function wb(a,i){const o=Object.keys(a),u=Object.keys(i);if(o.length!==u.length)return o.length<u.length?-1:1;o.sort(),u.sort();for(let p=0,y=0;p<o.length;p++){const E=o[p];if(E!==u[p])return E<u[p]?-1:1;if(y=Rn(a[E],i[E]),y!==0)return y}return 0}function Rn(a,i){var o;return a===i?0:a==null?i==null?0:-1:i==null?1:yb(a)?a.CompareTo(i):Mn(a)?Mn(i)?oh(a,i):-1:typeof a!="object"?a<i?-1:1:a instanceof Date?i instanceof Date?sh(a,i):-1:((o=Object.getPrototypeOf(a))==null?void 0:o.constructor)===Object?wb(a,i):-1}function h(a){const i={};for(const o of a)i[o[0]]=o[1];return i}function _b(a){Mn(a)?a.splice(0):a.clear()}const rc=new WeakMap;function Or(a){if(a==null)return null;const i=(o,u)=>a(o)(u);return rc.set(i,a),i}function or(a){return rc.get(a)??(i=>o=>a(i,o))}function qf(a){if(a==null)return null;const i=(o,u,p)=>a(o)(u)(p);return rc.set(i,a),i}function So(a){return rc.get(a)??(i=>o=>u=>a(i,o,u))}function Hb(a){let i=0,o="[";for(const u of a){if(i===0)o+=en(u);else if(i===100){o+="; ...";break}else o+="; "+en(u);i++}return o+"]"}function en(a,i=0){var o;if(a!=null&&typeof a=="object"){if(typeof a.toString=="function")return a.toString();if(Symbol.iterator in a)return Hb(a);{const u=(o=Object.getPrototypeOf(a))==null?void 0:o.constructor;return u===Object&&i<10?"{ "+Object.entries(a).map(([p,y])=>p+" = "+en(y,i+1)).join(`
  `)+" }":(u==null?void 0:u.name)??""}}return String(a)}function Tb(a,i){if(i.length===0)return a;{let o,u=!0;return i.length===1?(o=en(i[0]),u=o.indexOf(" ")>=0):o=i.map(p=>en(p)).join(", "),a+(u?" (":" ")+o+(u?")":"")}}class lc{get name(){return this.cases()[this.tag]}toJSON(){return this.fields.length===0?this.name:[this.name].concat(this.fields)}toString(){return Tb(this.name,this.fields)}GetHashCode(){const i=this.fields.map(o=>Rr(o));return i.splice(0,0,_o(this.tag)),nc(i)}Equals(i){return this===i?!0:Ki(this,i)&&this.tag===i.tag?ch(this.fields,i.fields):!1}CompareTo(i){return this===i?0:Ki(this,i)?this.tag===i.tag?oh(this.fields,i.fields):this.tag<i.tag?-1:1:-1}}function kb(a){const i={},o=Object.keys(a);for(let u=0;u<o.length;u++)i[o[u]]=a[o[u]];return i}function zb(a){return"{ "+Object.entries(a).map(([i,o])=>i+" = "+en(o)).join(`
  `)+" }"}function Mb(a){const i=Object.values(a).map(o=>Rr(o));return nc(i)}function Ob(a,i){if(a===i)return!0;if(Ki(a,i)){const o=Object.keys(a);for(let u=0;u<o.length;u++)if(!On(a[o[u]],i[o[u]]))return!1;return!0}else return!1}function Rb(a,i){if(a===i)return 0;if(Ki(a,i)){const o=Object.keys(a);for(let u=0;u<o.length;u++){const p=Rn(a[o[u]],i[o[u]]);if(p!==0)return p}return 0}else return-1}class Ha{toJSON(){return kb(this)}toString(){return zb(this)}GetHashCode(){return Mb(this)}Equals(i){return Ob(this,i)}CompareTo(i){return Rb(this,i)}}const xl=Symbol("numeric");function Ub(a){return typeof a=="number"||typeof a=="bigint"||(a==null?void 0:a[xl])}function Bb(a,i){return typeof a=="number"||typeof a=="bigint"?a<i?-1:a>i?1:0:a.CompareTo(i)}function qb(a,i){return typeof a=="number"?a*i:typeof a=="bigint"?a*BigInt(i):a[xl]().multiply(i)}function Lb(a,i){return typeof a=="number"?a.toFixed(i):typeof a=="bigint"?a:a[xl]().toFixed(i)}function Lf(a,i){return typeof a=="number"?a.toPrecision(i):typeof a=="bigint"?a:a[xl]().toPrecision(i)}function Gf(a,i){return typeof a=="number"?a.toExponential(i):typeof a=="bigint"?a:a[xl]().toExponential(i)}function Vf(a){return typeof a=="number"?(Number(a)>>>0).toString(16):typeof a=="bigint"?BigInt.asUintN(64,a).toString(16):a[xl]().toHex()}function Gb(a){const i=a<0;a=Math.abs(a);const o=~~(a/36e5),u=a%36e5/6e4;return(i?"-":"+")+Uf(o,2)+":"+Uf(u,2)}function Vb(a,i){return new Date(a.getTime()+(a.offset??0)).toISOString().replace(/\.\d+/,"").replace(/[A-Z]|\.\d+/g," ")+Gb(a.offset??0)}function jb(a,i){return a.kind===1?a.toUTCString():a.toLocaleString()}function Yb(a,i,o){return a.offset!=null?Vb(a):jb(a)}function uh(a){return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}const xa=/(^|[^%])%([0+\- ]*)(\*|\d+)?(?:\.(\d+))?(\w)/g;function Qb(a,i){return Bb(a,i)<0}function Fi(a){return{input:a,cont:Kb(a)}}function Xb(a,i){return typeof i=="string"?a(i):i.cont(a)}function Ji(a){return Xb(i=>i,a)}function Zb(a,i,o,u,p){let y="";if(i=i||"",p=p||"",Ub(a))switch(p.toLowerCase()!=="x"&&(Qb(a,0)?(a=qb(a,-1),y="-"):i.indexOf(" ")>=0?y=" ":i.indexOf("+")>=0&&(y="+")),u=u==null?null:parseInt(u,10),p){case"f":case"F":u=u??6,a=Lb(a,u);break;case"g":case"G":a=u!=null?Lf(a,u):Lf(a);break;case"e":case"E":a=u!=null?Gf(a,u):Gf(a);break;case"x":a=Vf(a);break;case"X":a=Vf(a).toUpperCase();break;default:a=String(a);break}else a instanceof Date?a=Yb(a):a=en(a);if(o=typeof o=="number"?o:parseInt(o,10),isNaN(o))a=y+a;else{const E=i.indexOf("0")>=0,w=i.indexOf("-")>=0,D=w||!E?" ":"0";D==="0"?(a=jf(a,o-y.length,D,w),a=y+a):a=jf(y+a,o,D,w)}return a}function dh(a,i,o,u="",p=-1){return(...y)=>{let E=u;const w=i.slice(),D=o.slice();for(const N of y){const[,,z,M,q,B]=D[0];let Q=M;if(p>=0)Q=p,p=-1;else if(Q==="*"){if(N<0)throw new Error("Non-negative number required");p=N;continue}E+=w[0],E+=Zb(N,z,Q,q,B),w.splice(0,1),D.splice(0,1)}return D.length===0?(E+=w[0],a(E)):dh(a,w,D,E,p)}}function Kb(a){return i=>{xa.lastIndex=0;const o=[],u=[];let p=0,y=xa.exec(a);for(;y;){const E=y.index+(y[1]||"").length;o.push(a.substring(p,E).replace(/%%/g,"%")),u.push(y),p=xa.lastIndex,xa.lastIndex-=1,y=xa.exec(a)}return o.length===0?i(a.replace(/%%/g,"%")):(o.push(a.substring(p).replace(/%%/g,"%")),dh(i,o,u))}}function Fb(a){return typeof a!="string"||/^\s*$/.test(a)}function fn(a,i){return Array.isArray(i)?i.join(a):Array.from(i).join(a)}function jf(a,i,o,u){o=o||" ",i=i-a.length;for(let p=0;p<i;p++)a=u?a+o:o+a;return a}function mh(a,i,o,u){if(o=typeof o=="number"?o:void 0,u=typeof u=="number"?u:0,o&&o<0)throw new Error("Count cannot be less than zero");if(o===0)return[];const p=(u&1)===1,y=(u&2)===2;i=i||[],i=i.filter(z=>z).map(uh),i=i.length>0?i:["\\s"];const E=[],w=new RegExp(i.join("|"),"g");let D=!0,N=0;do{const z=w.exec(a);if(z===null){const M=y?a.substring(N).trim():a.substring(N);(!p||M.length>0)&&E.push(M),D=!1}else{const M=y?a.substring(N,z.index).trim():a.substring(N,z.index);(!p||M.length>0)&&(o!=null&&E.length+1===o?(E.push(y?a.substring(N).trim():a.substring(N)),D=!1):E.push(M)),N=w.lastIndex}}while(D);return E}function Jb(a,...i){return i.length===0?a.trimEnd():a.replace(new RegExp("["+uh(i.join(""))+"]+$"),"")}function fh(a,i,o){if(i+(o||0)>a.length)throw new Error("Invalid startIndex and/or length");return o!=null?a.substr(i,o):a.substr(i)}class Nl{constructor(i){this.value=i}toJSON(){return this.value}toString(){return String(this.value)}GetHashCode(){return Rr(this.value)}Equals(i){return i==null?!1:On(this.value,i instanceof Nl?i.value:i)}CompareTo(i){return i==null?1:Rn(this.value,i instanceof Nl?i.value:i)}}function $(a){if(a==null)throw new Error("Option has no value");return a instanceof Nl?a.value:a}function tn(a){return a==null||a instanceof Nl?new Nl(a):a}function hh(a){return a==null?[]:[$(a)]}function Ho(a,i){return a!=null?$(a):i}function To(a,i){return a!=null?$(a):i()}function $i(a,i){return i!=null?tn(a($(i))):void 0}const ph="Collection was empty.";function $b(a,i){return new Array(i)}function Yf(a,i){return a>i?a:i}function yh(a,i,o,u){const p=i|0;return a.fill(u,p,p+o)}function Wb(a,i){const o=$b(i,1);return wa(o,0,a),o}function Ib(a,i,o){const u=a;return o.reduce(u,i)}function Qf(a,i,o){return i==null}function Mr(a,i){if(a<0||a>=i.length)throw new Error("Index was outside the bounds of the array.\\nParameter name: index");return i[a]}function wa(a,i,o){if(i<0||i>=a.length)throw new Error("Index was outside the bounds of the array.\\nParameter name: index");a[i]=o}function Pb(a,i,o){return i.reduceRight((u,p)=>a(p,u),o)}class Kt extends Ha{constructor(i,o){super(),this.head=i,this.tail=o}toString(){return"["+fn("; ",this)+"]"}Equals(i){const o=this;return o===i?!0:((p,y)=>{e:for(;;){const E=p,w=y,D=E.tail,N=w.tail;if(D!=null)if(N!=null){const z=$(D),M=$(N);if(On(E.head,w.head)){p=z,y=M;continue e}else return!1}else return!1;else return N==null}})(o,i)}GetHashCode(){return((u,p,y)=>{e:for(;;){const E=u,w=p,D=y,N=D.tail;if(N!=null){const z=$(N);if(E>18)return w|0;u=E+1,p=(w<<1)+Rr(D.head)+631*E,y=z;continue e}else return w|0}})(0,0,this)|0}toJSON(){const i=this;return Array.from(i)}CompareTo(i){return((p,y)=>{e:for(;;){const E=p,w=y,D=E.tail,N=w.tail;if(D!=null)if(N!=null){const z=$(D),M=$(N),q=Rn(E.head,w.head)|0;if(q===0){p=z,y=M;continue e}else return q|0}else return 1;else return N!=null?-1:0}})(this,i)|0}GetEnumerator(){return tg(this)}[Symbol.iterator](){return Bo(kt(this))}"System.Collections.IEnumerable.GetEnumerator"(){return kt(this)}}class eg{constructor(i){this.xs=i,this.it=this.xs,this.current=mn()}"System.Collections.Generic.IEnumerator`1.get_Current"(){return this.current}"System.Collections.IEnumerator.get_Current"(){return this.current}"System.Collections.IEnumerator.MoveNext"(){const i=this,o=i.it.tail;if(o!=null){const u=$(o);return i.current=i.it.head,i.it=u,!0}else return!1}"System.Collections.IEnumerator.Reset"(){const i=this;i.it=i.xs,i.current=mn()}Dispose(){}}function tg(a){return new eg(a)}function it(){return new Kt(mn(),void 0)}function Ta(a,i){return new Kt(a,i)}function _a(a){return a.tail==null}function ng(a){return((o,u)=>{e:for(;;){const p=o,E=u.tail;if(E!=null){o=p+1,u=$(E);continue e}else return p|0}})(0,a)|0}function Wi(a){if(a.tail!=null)return a.head;throw new Error(ph+"\\nParameter name: list")}function Zt(a){const i=a.tail;if(i!=null)return $(i);throw new Error(ph+"\\nParameter name: list")}function Fe(){return it()}function Xt(a,i){return Ta(a,i)}function v(a){return Ta(a,it())}function Y(a){return _a(a)}function ie(a){return Wi(a)}function j(a){return Zt(a)}function rg(a){const i=ng(a)|0,o=yh(new Array(i),0,i,null);return((p,y)=>{e:for(;;){const E=p,w=y;if(!_a(w)){wa(o,E,Wi(w)),p=E+1,y=Zt(w);continue e}break}})(0,a),o}function Un(a,i,o){let u=i,p=o;for(;!_a(p);)u=a(u,ie(p)),p=Zt(p);return u}function Ii(a){return Un((i,o)=>Ta(o,i),it(),a)}function lg(a,i,o){return Pb(a,rg(i),o)}function Pi(a,i){Un((o,u)=>{a(u)},void 0,i)}function Qe(a,i){let o=i;for(let u=a.length-1;u>=0;u--)o=Ta(Mr(u,a),o);return o}function d(a){return Qe(a,it())}function ag(a){let i,o;if(Mn(a))return d(a);if(a instanceof Kt)return a;{const u=it();let p=u;const y=kt(a);try{for(;y["System.Collections.IEnumerator.MoveNext"]();){const D=y["System.Collections.Generic.IEnumerator`1.get_Current"]();p=(i=p,o=new Kt(D,void 0),i.tail=o,o)}}finally{dt(y)}const E=p,w=it();return E.tail=w,Zt(u)}}function ec(a,i){return Un((o,u)=>Ta(u,o),i,Ii(a))}function ig(a,i){let o,u;const p=it();let y=p,E=i;for(;!_a(E);){let N=a(Wi(E));for(;!_a(N);)y=(o=y,u=new Kt(Wi(N),void 0),o.tail=u,u),N=Zt(N);E=Zt(E)}const w=y,D=it();return w.tail=D,Zt(p)}function ac(a,i){const o=it(),u=Un((y,E)=>{const w=new Kt(a(E),void 0);return y.tail=w,w},o,i),p=it();return u.tail=p,Zt(o)}function cg(a,i){const o=it(),u=Un((y,E)=>{if(a(E)){const w=new Kt(E,void 0);return y.tail=w,w}else return y},o,i),p=it();return u.tail=p,Zt(o)}function sg(a,i){const o=it(),u=it(),p=o,y=Un((D,N)=>{let z,M;const q=D[0],B=D[1];return a(N)?[(z=new Kt(N,void 0),q.tail=z,z),B]:[q,(M=new Kt(N,void 0),B.tail=M,M)]},[p,u],i),E=it();y[0].tail=E;const w=it();return y[1].tail=w,[Zt(p),Zt(u)]}function bh(a,i){const o=it(),u=Un((y,E)=>{const w=a(E);if(w==null)return y;{const D=new Kt($(w),void 0);return y.tail=D,D}},o,i),p=it();return u.tail=p,Zt(o)}function og(a){throw new Error(a)}const ug="Enumeration already finished.",dg="Enumeration has not started. Call MoveNext.",gh="The input sequence has an insufficient number of elements.",mg="Reset is not supported on this enumerator.";function fg(){throw new Error(mg)}function qo(){throw new Error(dg)}function ko(){throw new Error(ug)}class hg{constructor(i){this.f=i}toString(){const i=this;let o=0,u="seq [";const p=kt(i);try{for(;o<4&&p["System.Collections.IEnumerator.MoveNext"]();)o>0&&(u=u+"; "),u=u+en(p["System.Collections.Generic.IEnumerator`1.get_Current"]()),o=o+1|0;return o===4&&(u=u+"; ..."),u+"]"}finally{dt(p)}}GetEnumerator(){return this.f()}[Symbol.iterator](){return Bo(kt(this))}"System.Collections.IEnumerable.GetEnumerator"(){return this.f()}}function pg(a){return new hg(a)}class yg{constructor(i,o,u){this.current=i,this.next=o,this.dispose=u}"System.Collections.Generic.IEnumerator`1.get_Current"(){return this.current()}"System.Collections.IEnumerator.get_Current"(){return this.current()}"System.Collections.IEnumerator.MoveNext"(){return this.next()}"System.Collections.IEnumerator.Reset"(){fg()}Dispose(){this.dispose()}}function ic(a,i,o){return new yg(a,i,o)}function bg(a){let i,o,u=!1,p=!1,y;const E=()=>{if(p=!0,o!=null){const w=$(o);try{dt(w)}finally{o=void 0}}if(i!=null){const w=$(i);try{dt(w)}finally{i=void 0}}};return ic(()=>(u?p&&ko():qo(),y!=null?$(y):ko()),()=>{let w;if(u||(u=!0),p)return!1;{let D;for(;D==null;){const N=i,z=o;if(N!=null)if(z!=null){const M=$(z);if(M["System.Collections.IEnumerator.MoveNext"]())y=tn(M["System.Collections.Generic.IEnumerator`1.get_Current"]()),D=!0;else try{dt(M)}finally{o=void 0}}else{const M=$(N);M["System.Collections.IEnumerator.MoveNext"]()?o=(w=M["System.Collections.Generic.IEnumerator`1.get_Current"](),kt(w)):(E(),D=!1)}else i=kt(a)}return $(D)}},()=>{p||E()})}function gg(a,i){return ic(()=>i["System.Collections.Generic.IEnumerator`1.get_Current"](),()=>i["System.Collections.IEnumerator.MoveNext"](),()=>{try{dt(i)}finally{}})}function vh(a,i,o){let u=!1,p,y=tn(a());const E=()=>{if(y!=null){const D=$(y);try{o(D)}finally{y=void 0}}},w=()=>{try{E()}finally{p=void 0}};return ic(()=>(u||qo(),p!=null?$(p):ko()),()=>{if(u||(u=!0),y!=null){const D=$(y);let N;try{N=i(D)}catch(z){throw w(),z}return N!=null?(p=N,!0):(w(),!1)}else return!1},E)}function vg(a,i){let o,u=i;return ic(()=>{if(o!=null){const p=$(o)[0];return $(o)[1],p}else return qo()},()=>(o=a(u),o!=null?($(o)[0],u=$(o)[1],!0):!1),()=>{})}function Eg(a,i){i==null&&og(a)}function Cl(a){return pg(a)}function ka(a){return Eg("source",a),kt(a)}function ee(a){return Cl(()=>kt(a()))}function Eh(a){return Cl(()=>bg(a))}function Ag(a,i){return Cl(()=>vg(a,i))}function Ah(){return ee(()=>new Array(0))}function ue(a){return ee(()=>Wb(a))}function we(a){return Mn(a)?d(a):a instanceof Kt?a:ag(a)}function Ng(a,i,o){return Cl(()=>vh(a,i,o))}function Nh(a,i,o){return Cl(()=>{let u=-1;return vh(a,p=>(u=u+1|0,i(u,p)),o)})}function Ke(a,i){return Eh([a,i])}function Sg(a,i,o){const u=ka(o);try{let p=i;for(;u["System.Collections.IEnumerator.MoveNext"]();)p=a(p,u["System.Collections.Generic.IEnumerator`1.get_Current"]());return p}finally{dt(u)}}function Lo(a,i){Sg((o,u)=>{a(u)},void 0,i)}function dn(a,i){return Ng(()=>ka(i),o=>o["System.Collections.IEnumerator.MoveNext"]()?tn(a(o["System.Collections.Generic.IEnumerator`1.get_Current"]())):void 0,o=>{dt(o)})}function xg(a,i){return Nh(()=>ka(i),(o,u)=>u["System.Collections.IEnumerator.MoveNext"]()?tn(a(o,u["System.Collections.Generic.IEnumerator`1.get_Current"]())):void 0,o=>{dt(o)})}function Cg(a,i){return Cl(()=>{const o=ka(i);try{for(let u=1;u<=a;u++)if(!o["System.Collections.IEnumerator.MoveNext"]())throw new Error(gh+"\\nParameter name: source");return gg(()=>{},o)}catch(u){throw dt(o),u}})}function Dg(a,i){return Nh(()=>ka(i),(o,u)=>{if(o<a){if(u["System.Collections.IEnumerator.MoveNext"]())return tn(u["System.Collections.Generic.IEnumerator`1.get_Current"]());throw new Error(gh+"\\nParameter name: source")}else return},o=>{dt(o)})}function Xe(a,i){return ee(()=>Eh(dn(a,i)))}const m=hb,wg=(a,i)=>{l.useEffect(()=>{const o=a();return()=>{o.Dispose()}},i)},_g=a=>{l.useLayoutEffect(()=>{const i=a();return()=>{i.Dispose()}})};function Hg(a){return{Dispose(){Lo(i=>{dt(i)},hh(a))}}}function Tg(a,i){return i}function kg(a,i,o,u){const p=m.memo(a,Or(Ho($i(or,o),mn())));return Lo(y=>{a.displayName=y},hh(i)),y=>{const E=Tg(u,y);return m.createElement(p,E)}}function Sh(a){return{Dispose(){a()}}}function zg(a){const i=m.useRef(!1);m.useEffect(()=>{i.current||(i.current=!0,a())},[])}function Mg(a){const i=m.useRef(void 0),o=m.useRef(!1),u=m.useRef(!1);o.current&&(u.current=!0),wg(()=>Hg(o.current?void 0:(o.current=!0,i.current=tn(a()),u.current?i.current:void 0)),[])}function Og(a){const i=m.useRef(a),o=m.useCallback(u=>i.current(u),[]);return _g(u=>(i.current=a,Sh(()=>{}))),o}function Da(a,i){if(i.startsWith(a))return i}function Xf(a,i){if(i.endsWith(a))return i}function gl(a){const i=fn("&",ac(o=>fn("=",[encodeURIComponent(o[0]),encodeURIComponent(o[1])]),a));return i===""?"":"?"+i}function Rg(a){return i=>{let o,u,p,y,E,w;return o=Da("/",i),o!=null?(u=o,"#"+u):(p=Da("#/",i),p!=null?(y=p,y):(E=Da("#",i),E!=null?(w=E,"#/"+fh(w,1,w.length-1)):"#/"+i))}}function Ca(a,i){return Rg()(fn("/",ac(o=>o.indexOf("?")>=0||o.startsWith("#")||o.startsWith("/")?o:encodeURIComponent(o),a)))}function zo(a){const i=Ii(a);if(!Y(i))return Y(j(i))?[Fe(),ie(i)]:[Ii(j(i)),ie(i)]}function Mo(a,i,o){history.pushState(void 0,"",Ca(a));const u=document.createEvent("CustomEvent");u.initEvent("CUSTOM_NAVIGATION_EVENT",!0,!0),window.dispatchEvent(u)}function xh(a,i){return ig(o=>{if(Fb(o))return Fe();{const u=Jb(o,"#");if(u==="?")return Fe();if(Da("?",u)!=null)return v(u);{const p=u.split("?");if(!Qf((y,E)=>y===E,p)&&p.length===1){const y=Mr(0,p);return v(decodeURIComponent(y))}else if(!Qf((y,E)=>y===E,p)&&p.length===2)if(Mr(1,p)===""){const y=Mr(0,p);return v(decodeURIComponent(y))}else{const y=Mr(0,p),E=Mr(1,p);return d([decodeURIComponent(y),"?"+E])}else return Fe()}}},d(mh(Da("#",a)!=null?fh(a,1,a.length-1):i===1&&(Xf("#",a)!=null||Xf("#/",a)!=null)?"":a,["/"],void 0,0)))}function Ug(a,i,o){return i(xh(a===2?window.location.pathname+window.location.search:window.location.hash,a))}const Bg=kg(a=>{const i=Og(u=>{const p=Ho(a.onUrlChanged,y=>{});Ug(Ho(a.hashMode,1),p)});Mg(()=>(window.navigator.userAgent.indexOf("Trident")>=0||window.navigator.userAgent.indexOf("MSIE")>=0?window.addEventListener("hashchange",i):window.addEventListener("popstate",i),window.addEventListener("CUSTOM_NAVIGATION_EVENT",i),Sh(()=>{window.navigator.userAgent.indexOf("Trident")>=0||window.navigator.userAgent.indexOf("MSIE")>=0?window.removeEventListener("hashchange",i):window.removeEventListener("popstate",i),window.removeEventListener("CUSTOM_NAVIGATION_EVENT",i)}))),zg(()=>{const u=document.createEvent("CustomEvent");u.initEvent("CUSTOM_NAVIGATION_EVENT",!0,!0),window.dispatchEvent(u)});const o=a.application;return o??mn()},void 0,void 0,void 0);function qg(a,i){console.error(tn(a),i)}function Zf(a,i,o){Pi(u=>{try{u(i)}catch(p){a(p)}},o)}function cc(){return Fe()}function Lg(a){return v(a)}class O extends lc{constructor(i,o){super(),this.tag=i,this.fields=o}cases(){return["Install","Use","Themes","Colors","Accordion","Alert","Avatar","Badge","Breadcrumbs","Button","Card","Carousel","ChatBubble","Collapse","Countdown","Diff","Divider","Dock","Drawer","Dropdown","Fieldset","Filter","Footer","Hero","Join","Indicator","Kbd","Label","Link","List","Loading","Mask","Menu","Modal","Navbar","Pagination","Progress","RadialProgress","Skeleton","Stack","Stat","Status","Steps","Swap","Tab","Table","ThemeController","Timeline","Toast","Tooltip","Validator","FileInput","FormCheckbox","FormInput","FormRadio","FormRange","FormSelect","FormTextarea","FormToggle","MockupCode","MockupPhone","MockupWindow","Rating"]}}const Gg=new O(0,[]);function Ch(a){let i;if(Y(a))i=62;else switch(ie(a)){case"use":{Y(j(a))?i=0:i=63;break}case"themes":{Y(j(a))?i=1:i=63;break}case"colors":{Y(j(a))?i=2:i=63;break}case"alert":{Y(j(a))?i=3:i=63;break}case"accordion":{Y(j(a))?i=4:i=63;break}case"avatar":{Y(j(a))?i=5:i=63;break}case"badge":{Y(j(a))?i=6:i=63;break}case"breadcrumbs":{Y(j(a))?i=7:i=63;break}case"button":{Y(j(a))?i=8:i=63;break}case"card":{Y(j(a))?i=9:i=63;break}case"carousel":{Y(j(a))?i=10:i=63;break}case"chatbubble":{Y(j(a))?i=11:i=63;break}case"collapse":{Y(j(a))?i=12:i=63;break}case"countdown":{Y(j(a))?i=13:i=63;break}case"diff":{Y(j(a))?i=14:i=63;break}case"divider":{Y(j(a))?i=15:i=63;break}case"dock":{Y(j(a))?i=16:i=63;break}case"drawer":{Y(j(a))?i=17:i=63;break}case"dropdown":{Y(j(a))?i=18:i=63;break}case"fieldset":{Y(j(a))?i=19:i=63;break}case"filter":{Y(j(a))?i=20:i=63;break}case"footer":{Y(j(a))?i=21:i=63;break}case"hero":{Y(j(a))?i=22:i=63;break}case"indicator":{Y(j(a))?i=23:i=63;break}case"join":{Y(j(a))?i=24:i=63;break}case"kbd":{Y(j(a))?i=25:i=63;break}case"label":{Y(j(a))?i=26:i=63;break}case"link":{Y(j(a))?i=27:i=63;break}case"list":{Y(j(a))?i=28:i=63;break}case"loading":{Y(j(a))?i=29:i=63;break}case"mask":{Y(j(a))?i=30:i=63;break}case"menu":{Y(j(a))?i=31:i=63;break}case"modal":{Y(j(a))?i=32:i=63;break}case"navbar":{Y(j(a))?i=33:i=63;break}case"pagination":{Y(j(a))?i=34:i=63;break}case"progress":{Y(j(a))?i=35:i=63;break}case"radialprogress":{Y(j(a))?i=36:i=63;break}case"skeleton":{Y(j(a))?i=37:i=63;break}case"stack":{Y(j(a))?i=38:i=63;break}case"stat":{Y(j(a))?i=39:i=63;break}case"status":{Y(j(a))?i=40:i=63;break}case"steps":{Y(j(a))?i=41:i=63;break}case"swap":{Y(j(a))?i=42:i=63;break}case"tab":{Y(j(a))?i=43:i=63;break}case"table":{Y(j(a))?i=44:i=63;break}case"themecontroller":{Y(j(a))?i=45:i=63;break}case"timeline":{Y(j(a))?i=46:i=63;break}case"toast":{Y(j(a))?i=47:i=63;break}case"tooltip":{Y(j(a))?i=48:i=63;break}case"validator":{Y(j(a))?i=49:i=63;break}case"fileinput":{Y(j(a))?i=50:i=63;break}case"formcheckbox":{Y(j(a))?i=51:i=63;break}case"forminput":{Y(j(a))?i=52:i=63;break}case"formradio":{Y(j(a))?i=53:i=63;break}case"formrange":{Y(j(a))?i=54:i=63;break}case"formselect":{Y(j(a))?i=55:i=63;break}case"formtextarea":{Y(j(a))?i=56:i=63;break}case"formtoggle":{Y(j(a))?i=57:i=63;break}case"mockupcode":{Y(j(a))?i=58:i=63;break}case"mockupphone":{Y(j(a))?i=59:i=63;break}case"mockupwindow":{Y(j(a))?i=60:i=63;break}case"rating":{Y(j(a))?i=61:i=63;break}default:i=63}switch(i){case 0:return new O(1,[]);case 1:return new O(2,[]);case 2:return new O(3,[]);case 3:return new O(5,[]);case 4:return new O(4,[]);case 5:return new O(6,[]);case 6:return new O(7,[]);case 7:return new O(8,[]);case 8:return new O(9,[]);case 9:return new O(10,[]);case 10:return new O(11,[]);case 11:return new O(12,[]);case 12:return new O(13,[]);case 13:return new O(14,[]);case 14:return new O(15,[]);case 15:return new O(16,[]);case 16:return new O(17,[]);case 17:return new O(18,[]);case 18:return new O(19,[]);case 19:return new O(20,[]);case 20:return new O(21,[]);case 21:return new O(22,[]);case 22:return new O(23,[]);case 23:return new O(25,[]);case 24:return new O(24,[]);case 25:return new O(26,[]);case 26:return new O(27,[]);case 27:return new O(28,[]);case 28:return new O(29,[]);case 29:return new O(30,[]);case 30:return new O(31,[]);case 31:return new O(32,[]);case 32:return new O(33,[]);case 33:return new O(34,[]);case 34:return new O(35,[]);case 35:return new O(36,[]);case 36:return new O(37,[]);case 37:return new O(38,[]);case 38:return new O(39,[]);case 39:return new O(40,[]);case 40:return new O(41,[]);case 41:return new O(42,[]);case 42:return new O(43,[]);case 43:return new O(44,[]);case 44:return new O(45,[]);case 45:return new O(46,[]);case 46:return new O(47,[]);case 47:return new O(48,[]);case 48:return new O(49,[]);case 49:return new O(50,[]);case 50:return new O(51,[]);case 51:return new O(52,[]);case 52:return new O(53,[]);case 53:return new O(54,[]);case 54:return new O(55,[]);case 55:return new O(56,[]);case 56:return new O(57,[]);case 57:return new O(58,[]);case 58:return new O(59,[]);case 59:return new O(60,[]);case 60:return new O(61,[]);case 61:return new O(62,[]);case 62:return new O(0,[]);default:return Gg}}function J(a){return[a,Fe()]}function Oo(a){switch(a.tag){case 1:return J(v("use"));case 2:return J(v("themes"));case 3:return J(v("colors"));case 4:return J(v("accordion"));case 5:return J(v("alert"));case 6:return J(v("avatar"));case 7:return J(v("badge"));case 8:return J(v("breadcrumbs"));case 9:return J(v("button"));case 10:return J(v("card"));case 11:return J(v("carousel"));case 13:return J(v("collapse"));case 12:return J(v("chatbubble"));case 14:return J(v("countdown"));case 15:return J(v("diff"));case 16:return J(v("divider"));case 17:return J(v("dock"));case 18:return J(v("drawer"));case 19:return J(v("dropdown"));case 20:return J(v("fieldset"));case 21:return J(v("filter"));case 22:return J(v("footer"));case 23:return J(v("hero"));case 25:return J(v("indicator"));case 24:return J(v("join"));case 26:return J(v("kbd"));case 27:return J(v("label"));case 28:return J(v("link"));case 29:return J(v("list"));case 30:return J(v("loading"));case 31:return J(v("mask"));case 32:return J(v("menu"));case 33:return J(v("modal"));case 34:return J(v("navbar"));case 35:return J(v("pagination"));case 36:return J(v("progress"));case 37:return J(v("radialprogress"));case 38:return J(v("skeleton"));case 39:return J(v("stack"));case 40:return J(v("stat"));case 41:return J(v("status"));case 42:return J(v("steps"));case 43:return J(v("swap"));case 44:return J(v("tab"));case 45:return J(v("table"));case 46:return J(v("themecontroller"));case 47:return J(v("timeline"));case 48:return J(v("toast"));case 49:return J(v("tooltip"));case 50:return J(v("validator"));case 51:return J(v("fileinput"));case 52:return J(v("formcheckbox"));case 53:return J(v("forminput"));case 54:return J(v("formradio"));case 55:return J(v("formrange"));case 56:return J(v("formselect"));case 57:return J(v("formtextarea"));case 58:return J(v("formtoggle"));case 59:return J(v("mockupcode"));case 60:return J(v("mockupphone"));case 61:return J(v("mockupwindow"));case 62:return J(v("rating"));default:return J(Fe())}}function Kf(a){a.preventDefault(),Mo(v(a.currentTarget.attributes.href.value))}function Vg(a){const i=Oo(a);return Lg(o=>{const u=i[1];To($i(p=>{Mo(ec(p[0],v(p[1]+gl(u))))},zo(i[0])),()=>{Mo(v(gl(u)))})})}function jg(a){return Un((i,o)=>{const u=i[0],p=i[1],y=o;return y[0]==="className"?[Xt(en(y[1]),u),p]:[u,Xt(o,p)]},[Fe(),Fe()],Ii(a))}function b(a,i){const o=jg(i);return Xt(["className",fn(" ",Xt(a,o[0]))],o[1])}function Ro(a){return l.createElement("div",h(b("status",a)))}function at(a,i){return["className",fn(" ",bh(o=>{const u=o;if(u[0]==="className")return en(u[1])},d([a,i])))]}class Dh{constructor(i){this.k=i}}function Ht(a){return new Dh(a)}function de(a){return a.k}class De extends Dh{constructor(i,o,u,p){super(i),this.left=o,this.right=u,this.h=p|0}}function Tt(a,i,o,u){return new De(a,i,o,u)}function Ue(a){return a.left}function ke(a){return a.right}function vl(a){return a.h}function wh(a,i){e:for(;;){const o=a,u=i;if(o!=null){const p=$(o);if(p instanceof De){const y=p;a=Ue(y),i=wh(ke(y),u+1);continue e}else return u+1|0}else return u|0}}function Yg(a){return wh(a,0)}function It(a,i,o){let u,p,y;const E=a;if(E!=null){const z=$(E);y=z instanceof De?(u=z,vl(u)):1}else y=0;let w;const D=o;if(D!=null){const z=$(D);w=z instanceof De?(p=z,vl(p)):1}else w=0;const N=(y<w?w:y)|0;return N===0?Ht(i):Tt(i,a,o,N+1)}function Ff(a,i,o){let u,p,y,E,w,D,N,z,M;const q=a;if(q!=null){const Z=$(q);M=Z instanceof De?(u=Z,vl(u)):1}else M=0;let B;const Q=o;if(Q!=null){const Z=$(Q);B=Z instanceof De?(p=Z,vl(p)):1}else B=0;if(B>M+2){const Z=$(o);if(Z instanceof De){const W=Z;if(y=Ue(W),(y!=null?(E=$(y),E instanceof De?(w=E,vl(w)):1):0)>M+1){const ge=$(Ue(W));if(ge instanceof De){const ce=ge;return It(It(a,i,Ue(ce)),de(ce),It(ke(ce),de(W),ke(W)))}else throw new Error("internal error: Set.rebalance")}else return It(It(a,i,Ue(W)),de(W),ke(W))}else throw new Error("internal error: Set.rebalance")}else if(M>B+2){const Z=$(a);if(Z instanceof De){const W=Z;if(D=ke(W),(D!=null?(N=$(D),N instanceof De?(z=N,vl(z)):1):0)>B+1){const ge=$(ke(W));if(ge instanceof De){const ce=ge;return It(It(Ue(W),de(W),Ue(ce)),de(ce),It(ke(ce),i,o))}else throw new Error("internal error: Set.rebalance")}else return It(Ue(W),de(W),It(ke(W),i,o))}else throw new Error("internal error: Set.rebalance")}else return It(a,i,o)}function Sl(a,i,o){if(o!=null){const u=$(o),p=a.Compare(i,de(u))|0;if(u instanceof De){const y=u;return p<0?Ff(Sl(a,i,Ue(y)),de(y),ke(y)):p===0?o:Ff(Ue(y),de(y),Sl(a,i,ke(y)))}else{const y=a.Compare(i,de(u))|0;return y<0?Tt(i,void 0,o,2):y===0?o:Tt(i,o,void 0,2)}}else return Ht(i)}function _h(a,i,o){e:for(;;){const u=a,p=i,y=o;if(y!=null){const E=$(y),w=u.Compare(p,de(E))|0;if(E instanceof De){const D=E;if(w<0){a=u,i=p,o=Ue(D);continue e}else{if(w===0)return!0;a=u,i=p,o=ke(D);continue e}}else return w===0}else return!1}}function Hh(a,i){e:for(;;){const o=a,u=i;if(u!=null){const p=$(u);if(p instanceof De){const y=p;Hh(o,Ue(y)),o(de(y)),a=o,i=ke(y);continue e}else o(de(p))}break}}class Qg extends Ha{constructor(i,o){super(),this.stack=i,this.started=o}}function Th(a){e:for(;;){const i=a;if(Y(i))return Fe();{const o=ie(i),u=j(i);if(o!=null){const p=$(o);if(p instanceof De){const y=p;a=Qe([Ue(y),Ht(de(y)),ke(y)],u);continue e}else return i}else{a=u;continue e}}}}function Jf(a){return new Qg(Th(v(a)),!1)}function Xg(){throw new Error("Enumeration not started")}function Zg(){throw new Error("Enumeration already started")}function $f(a){if(a.started){const i=a.stack;if(Y(i))return Zg();if(ie(i)!=null){const o=$(ie(i));return de(o)}else throw new Error("Please report error: Set iterator, unexpected stack for current")}else return Xg()}function Kg(a){if(a.started){const i=a.stack;if(Y(i))return!1;if(ie(i)!=null){if($(ie(i))instanceof De)throw new Error("Please report error: Set iterator, unexpected stack for moveNext");return a.stack=Th(j(i)),!Y(a.stack)}else throw new Error("Please report error: Set iterator, unexpected stack for moveNext")}else return a.started=!0,!Y(a.stack)}function Wf(a){let i=Jf(a);return{"System.Collections.Generic.IEnumerator`1.get_Current"(){return $f(i)},"System.Collections.IEnumerator.get_Current"(){return $f(i)},"System.Collections.IEnumerator.MoveNext"(){return Kg(i)},"System.Collections.IEnumerator.Reset"(){i=Jf(a)},Dispose(){}}}function Fg(a,i,o){e:for(;;){const u=a,p=i,y=o;if(Y(p))return Y(y)?0:-1;if(Y(y))return 1;if(ie(y)!=null)if(ie(p)!=null){const E=$(ie(p)),w=$(ie(y));if(E instanceof De){const D=E;if(Ue(D)==null)if(w instanceof De){const N=w;if(Ue(N)==null){const z=u.Compare(de(D),de(N))|0;if(z!==0)return z|0;a=u,i=Xt(ke(D),j(p)),o=Xt(ke(N),j(y));continue e}else{let z,M,q,B,Q;switch(Y(p)?Y(y)?z=2:ie(y)!=null?(z=1,B=j(y),Q=$(ie(y))):z=2:ie(p)!=null?(z=0,M=j(p),q=$(ie(p))):Y(y)?z=2:ie(y)!=null?(z=1,B=j(y),Q=$(ie(y))):z=2,z){case 0:if(q instanceof De){const Z=q;a=u,i=Qe([Ue(Z),Tt(de(Z),void 0,ke(Z),0)],M),o=y;continue e}else{a=u,i=Qe([void 0,Ht(de(q))],M),o=y;continue e}case 1:if(Q instanceof De){const Z=Q;a=u,i=p,o=Qe([Ue(Z),Tt(de(Z),void 0,ke(Z),0)],B);continue e}else{a=u,i=p,o=Qe([void 0,Ht(de(Q))],B);continue e}default:throw new Error("unexpected state in SetTree.compareStacks")}}}else{const N=u.Compare(de(D),de(w))|0;if(N!==0)return N|0;a=u,i=Xt(ke(D),j(p)),o=Xt(void 0,j(y));continue e}else{let N,z,M,q,B;switch(Y(p)?Y(y)?N=2:ie(y)!=null?(N=1,q=j(y),B=$(ie(y))):N=2:ie(p)!=null?(N=0,z=j(p),M=$(ie(p))):Y(y)?N=2:ie(y)!=null?(N=1,q=j(y),B=$(ie(y))):N=2,N){case 0:if(M instanceof De){const Q=M;a=u,i=Qe([Ue(Q),Tt(de(Q),void 0,ke(Q),0)],z),o=y;continue e}else{a=u,i=Qe([void 0,Ht(de(M))],z),o=y;continue e}case 1:if(B instanceof De){const Q=B;a=u,i=p,o=Qe([Ue(Q),Tt(de(Q),void 0,ke(Q),0)],q);continue e}else{a=u,i=p,o=Qe([void 0,Ht(de(B))],q);continue e}default:throw new Error("unexpected state in SetTree.compareStacks")}}}else if(w instanceof De){const D=w;if(Ue(D)==null){const N=u.Compare(de(E),de(D))|0;if(N!==0)return N|0;a=u,i=Xt(void 0,j(p)),o=Xt(ke(D),j(y));continue e}else{let N,z,M,q,B;switch(Y(p)?Y(y)?N=2:ie(y)!=null?(N=1,q=j(y),B=$(ie(y))):N=2:ie(p)!=null?(N=0,z=j(p),M=$(ie(p))):Y(y)?N=2:ie(y)!=null?(N=1,q=j(y),B=$(ie(y))):N=2,N){case 0:if(M instanceof De){const Q=M;a=u,i=Qe([Ue(Q),Tt(de(Q),void 0,ke(Q),0)],z),o=y;continue e}else{a=u,i=Qe([void 0,Ht(de(M))],z),o=y;continue e}case 1:if(B instanceof De){const Q=B;a=u,i=p,o=Qe([Ue(Q),Tt(de(Q),void 0,ke(Q),0)],q);continue e}else{a=u,i=p,o=Qe([void 0,Ht(de(B))],q);continue e}default:throw new Error("unexpected state in SetTree.compareStacks")}}}else{const D=u.Compare(de(E),de(w))|0;if(D!==0)return D|0;a=u,i=j(p),o=j(y);continue e}}else{$(ie(y));let E,w,D,N,z;switch(Y(p)?Y(y)?E=2:ie(y)!=null?(E=1,N=j(y),z=$(ie(y))):E=2:ie(p)!=null?(E=0,w=j(p),D=$(ie(p))):Y(y)?E=2:ie(y)!=null?(E=1,N=j(y),z=$(ie(y))):E=2,E){case 0:if(D instanceof De){const M=D;a=u,i=Qe([Ue(M),Tt(de(M),void 0,ke(M),0)],w),o=y;continue e}else{a=u,i=Qe([void 0,Ht(de(D))],w),o=y;continue e}case 1:if(z instanceof De){const M=z;a=u,i=p,o=Qe([Ue(M),Tt(de(M),void 0,ke(M),0)],N);continue e}else{a=u,i=p,o=Qe([void 0,Ht(de(z))],N);continue e}default:throw new Error("unexpected state in SetTree.compareStacks")}}else if(ie(p)!=null){$(ie(p));let E,w,D,N,z;switch(Y(p)?Y(y)?E=2:ie(y)!=null?(E=1,N=j(y),z=$(ie(y))):E=2:ie(p)!=null?(E=0,w=j(p),D=$(ie(p))):Y(y)?E=2:ie(y)!=null?(E=1,N=j(y),z=$(ie(y))):E=2,E){case 0:if(D instanceof De){const M=D;a=u,i=Qe([Ue(M),Tt(de(M),void 0,ke(M),0)],w),o=y;continue e}else{a=u,i=Qe([void 0,Ht(de(D))],w),o=y;continue e}case 1:if(z instanceof De){const M=z;a=u,i=p,o=Qe([Ue(M),Tt(de(M),void 0,ke(M),0)],N);continue e}else{a=u,i=p,o=Qe([void 0,Ht(de(z))],N);continue e}default:throw new Error("unexpected state in SetTree.compareStacks")}}else{a=u,i=j(p),o=j(y);continue e}}}function If(a,i,o){return i==null?o==null?0:-1:o==null?1:Fg(a,v(i),v(o))|0}function Jg(a,i,o){let u=o;Hh(p=>{wa(i,u,p),u=u+1|0},a)}function $g(a,i,o){e:for(;;){const u=a,p=i,y=o;if(y["System.Collections.IEnumerator.MoveNext"]()){a=u,i=Sl(u,y["System.Collections.Generic.IEnumerator`1.get_Current"](),p),o=y;continue e}else return p}}function Wg(a,i){return Ib((o,u)=>Sl(a,u,o),void 0,i)}function Ig(a,i){return Un((o,u)=>Sl(a,u,o),void 0,i)}function Pg(a,i){if(Mn(i))return Wg(a,i);if(i instanceof Kt)return Ig(a,i);{const o=kt(i);try{return $g(a,void 0,o)}finally{dt(o)}}}class Go{constructor(i,o){this.comparer=i,this.tree=o}GetHashCode(){return n0(this)|0}Equals(i){let o;const u=this;return i instanceof Go&&(o=i,If(El(u),Pt(u),Pt(o))===0)}toString(){return"set ["+fn("; ",dn(o=>en(o),this))+"]"}get[Symbol.toStringTag](){return"FSharpSet"}toJSON(){const i=this;return Array.from(i)}CompareTo(i){const o=this;return If(El(o),Pt(o),Pt(i))|0}"System.Collections.Generic.ICollection`1.Add2B595"(i){throw new Error("ReadOnlyCollection")}"System.Collections.Generic.ICollection`1.Clear"(){throw new Error("ReadOnlyCollection")}"System.Collections.Generic.ICollection`1.Remove2B595"(i){throw new Error("ReadOnlyCollection")}"System.Collections.Generic.ICollection`1.Contains2B595"(i){const o=this;return _h(El(o),i,Pt(o))}"System.Collections.Generic.ICollection`1.CopyToZ3B4C077E"(i,o){Jg(Pt(this),i,o)}"System.Collections.Generic.ICollection`1.get_IsReadOnly"(){return!0}"System.Collections.Generic.ICollection`1.get_Count"(){return xo(this)|0}"System.Collections.Generic.IReadOnlyCollection`1.get_Count"(){return xo(this)|0}GetEnumerator(){return Wf(Pt(this))}[Symbol.iterator](){return Bo(kt(this))}"System.Collections.IEnumerable.GetEnumerator"(){return Wf(Pt(this))}get size(){return xo(this)|0}add(i){throw new Error("Set cannot be mutated")}clear(){throw new Error("Set cannot be mutated")}delete(i){throw new Error("Set cannot be mutated")}has(i){return kh(this,i)}keys(){return dn(o=>o,this)}values(){return dn(o=>o,this)}entries(){return dn(o=>[o,o],this)}forEach(i,o){const u=this;Lo(p=>{i(p,p,u)},u)}}function Vo(a,i){return new Go(a,i)}function El(a){return a.comparer}function Pt(a){return a.tree}function e0(a){return Vo(a,void 0)}function t0(a,i){return Vo(El(a),Sl(El(a),i,Pt(a)))}function xo(a){return Yg(Pt(a))}function kh(a,i){return _h(El(a),i,Pt(a))}function n0(a){let i=0;const o=kt(a);try{for(;o["System.Collections.IEnumerator.MoveNext"]();){const u=o["System.Collections.Generic.IEnumerator`1.get_Current"]();i=(i<<1)+Rr(u)+631|0}}finally{dt(o)}return Math.abs(i)|0}function Uo(a,i){return kh(i,a)}function r0(a,i){return t0(i,a)}function l0(a){return e0(a)}function a0(a,i){return Vo(i,Pg(i,a))}function i0(){return Fe()}function jo(a){return fn("/",a)}function c0(a,i){const o=new Error("Duplicate SubId");return a(["Duplicate SubId: "+jo(i),o])}function zh(a,i,o){try{dt(o)}catch(u){a(["Error stopping subscription: "+jo(i),u])}}function s0(a,i,o,u){try{return[o,u(i)]}catch(p){a(["Error starting subscription: "+jo(o),p]);return}}function o0(a,i){Pi(o=>{zh(a,o[0],o[1])},i)}function Pf(a,i,o,u,p,y){return Pi(E=>{c0(a,E)},o),Pi(E=>{zh(a,E[0],E[1])},u),ec(p,bh(E=>s0(a,i,E[0],E[1]),y))}function u0(){return[Fe(),l0({Compare:Rn}),Fe()]}function d0(a,i,o,u,p){return Uo(a,u)?[Xt(a,o),u,p]:[o,r0(a,u),Xt([a,i],p)]}function m0(a){return lg((i,o)=>d0(i[0],i[1],o[0],o[1],o[2]),a,u0())}const f0=Fe();function eh(a,i){const o=a0(ac(E=>E[0],a),{Compare:Rn}),u=m0(i),p=u[1],y=u[0];if(o.Equals(p))return[y,Fe(),a,Fe()];{const E=sg(w=>Uo(w[0],p),a);return[y,E[1],E[0],cg(w=>!Uo(w[0],o),u[2])]}}function h0(a,i,o,u){const p=Rn(a,o)|0;if(p===0)throw new Error("The step of a range cannot be zero");const y=p>0;return E=>{const w=Rn(E,i)|0;return y&&w<=0||!y&&w>=0?[E,u(E,a)]:void 0}}function p0(a,i,o,u,p){const y=h0(i,o,u,p);return ee(()=>Ag(y,a))}function y0(a,i,o){return p0(a,i,o,0,(u,p)=>u+p)}class Al extends lc{constructor(i,o){super(),this.tag=i,this.fields=o}cases(){return["Writable","ReadWritable"]}}class b0{constructor(i){this.state=new Al(0,[yh(new Array(Yf(i,10)),0,Yf(i,10),null),0])}}function g0(a){return new b0(a)}function th(a){const i=a.state;if(i.tag===1){const o=i.fields[1]|0,u=i.fields[2]|0,p=i.fields[0],y=(u+1)%p.length|0;return y===o?a.state=new Al(0,[p,o]):a.state=new Al(1,[p,o,y]),tn(Mr(u,p))}else return}function v0(a,i){const o=a.state;if(o.tag===1){const u=o.fields[1]|0,p=o.fields[2]|0,y=o.fields[0];wa(y,u,i);const E=(u+1)%y.length|0;E===p?a.state=new Al(1,[E0(a,p,y),y.length,0]):a.state=new Al(1,[y,E,p])}else{const u=o.fields[1]|0,p=o.fields[0];wa(p,u,i);const y=(u+1)%p.length|0;a.state=new Al(1,[p,y,u])}}function E0(a,i,o){return Array.from(ee(()=>Ke(Cg(i,o),ee(()=>Ke(Dg(i,o),ee(()=>Xe(u=>ue(mn()),y0(0,1,o.length))))))))}class Yo extends Ha{constructor(i,o,u,p,y,E,w){super(),this.init=i,this.update=o,this.subscribe=u,this.view=p,this.setState=y,this.onError=E,this.termination=w}}function Mh(a,i,o){return new Yo(a,i,u=>i0(),o,Or(u=>{const p=or(o)(u);return y=>{p(y)}}),u=>{qg(u[0],u[1])},[u=>!1,u=>{}])}function A0(a,i){return new Yo(i.init,i.update,i.subscribe,i.view,a,i.onError,i.termination)}function N0(a){return a.init}function S0(a,i,o,u,p,y,E){const w=or(a)(E.init),D=So(i)(or(E.update)),N=So(o)(or(E.view)),z=So(u)(or(E.setState));return new Yo(w,Or(D),or(p)(E.subscribe),Or(N),Or(z),E.onError,y(E.termination))}function x0(a,i,o){let u;const p=o.init(i),y=p[0],E=o.subscribe(y),w=o.termination,D=g0(10);let N=!1,z=y,M=f0,q=!1;const B=W=>{q||(v0(D,W),N||(N=!0,Z(),N=!1))},Q=or(a)(B),Z=()=>{let W,ge=th(D);for(;!q&&ge!=null;){const ce=$(ge);if(w[0](ce))o0(o.onError,M),w[1](z),q=!0;else{const ze=o.update(ce,z),Be=ze[0],se=o.subscribe(Be);o.setState(Be,Q),Zf(ct=>{o.onError([Ji(Fi("Error handling the message: %A"))(ce),ct])},Q,ze[1]),z=Be,M=(W=eh(M,se),Pf(o.onError,Q,W[0],W[1],W[2],W[3])),ge=th(D)}}};N=!0,o.setState(y,Q),Zf(W=>{o.onError([Ji(Fi("Error intitializing:")),W])},Q,p[1]),M=(u=eh(M,E),Pf(o.onError,Q,u[0],u[1],u[2],u[3])),Z(),N=!1}function C0(a,i){x0(Or(o=>o),a,i)}var Co={exports:{}},Do={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nh;function D0(){if(nh)return Do;nh=1;var a=tc();function i(M,q){return M===q&&(M!==0||1/M===1/q)||M!==M&&q!==q}var o=typeof Object.is=="function"?Object.is:i,u=a.useState,p=a.useEffect,y=a.useLayoutEffect,E=a.useDebugValue;function w(M,q){var B=q(),Q=u({inst:{value:B,getSnapshot:q}}),Z=Q[0].inst,W=Q[1];return y(function(){Z.value=B,Z.getSnapshot=q,D(Z)&&W({inst:Z})},[M,B,q]),p(function(){return D(Z)&&W({inst:Z}),M(function(){D(Z)&&W({inst:Z})})},[M]),E(B),B}function D(M){var q=M.getSnapshot;M=M.value;try{var B=q();return!o(M,B)}catch{return!0}}function N(M,q){return q()}var z=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?N:w;return Do.useSyncExternalStore=a.useSyncExternalStore!==void 0?a.useSyncExternalStore:z,Do}var rh;function w0(){return rh||(rh=1,Co.exports=D0()),Co.exports}var _0=w0();class H0{constructor(i,o,u){this.arg=o,this.dependencies=u;const p=i(),y=[];this.finalDispatch=void 0;let E;const w=N0(p)(this.arg);let D=w[0],N=w[1];E=[[D,z=>{const M=this.finalDispatch;M==null?y.push(z):M(z)},!1,y],N],this.state=E[0],this.cmd=E[1],this.subscribe=z=>{let M=!1;const q=wo(this.state[0]);return C0(this.arg,A0((B,Q)=>{const Z=this.state;this.finalDispatch=Q,this.state=[B,Z[1],!0,y],B!==Z[0]&&z()},S0((B,Q)=>{const Z=this.cmd;return this.cmd=cc(),[this.state[0],Z]},(B,Q,Z)=>B(Q)(this.state[0]),qf(B=>B),qf(B=>B),Or(B=>B),B=>[Q=>B[0](Q)?!0:q&&M,Q=>{const Z=Q;wo(Z)?dt(Z):B[1](Q)}],p))),()=>{M=!0}}}}function lh(a,i,o){return new H0(a,i,o)}function T0(a){return a.state}function k0(a){return a.subscribe}function z0(a,i,o){return On(a.arg,i)?!On(a.dependencies,o):!0}function Oh(a,i,o){const u=l.useState(()=>lh(a,i,o)),p=u[0];z0(p,i,o)&&u[1](lh(a,i,o));const y=_0.useSyncExternalStore(k0(p),()=>T0(p)),E=y[2],w=y[3],D=y[1];return l.useEffect(()=>{if(E&&w.length>0){let N=kt(w);try{for(;N["System.Collections.IEnumerator.MoveNext"]();){const z=N["System.Collections.Generic.IEnumerator`1.get_Current"]();setTimeout(()=>{D(z)})}}finally{dt(N)}_b(w)}},[E,w]),[y[0],D]}function Zi(a){const i=xg((o,u)=>l.createElement("pre",h(we(ee(()=>Ke(ue(["data-prefix",Eb(o+1)]),ee(()=>Ke(u.indexOf("// ")>=0?ue(["className","text-warning"]):Ah(),ee(()=>{let p;return ue((p=[l.createElement("code",{children:[u]})],["children",m.Children.toArray(Array.from(p))]))})))))))),mh(a,[`
`],void 0,0));return l.createElement("div",{className:"mockup-code",children:m.Children.toArray(Array.from(i))})}function H(a,i,o){let u,p;const y=d([l.createElement("div",{className:"description",children:m.Children.toArray([a])}),(u=d([(p=v(Zi(i)),l.createElement("div",{className:"grid flex-1 h-full",children:m.Children.toArray(Array.from(p))})),l.createElement("div",h(b("divider",d([["children","👉"],["className","text-neutral"],["className","after:bg-opacity-30 before:bg-opacity-30 md:divider-horizontal"]])))),l.createElement("div",{className:"grid flex-1 min-h-[10rem]",children:m.Children.toArray([o])})]),l.createElement("div",{className:"flex flex-col md:flex-row w-full",children:m.Children.toArray(Array.from(u))}))]);return l.createElement("div",{className:"mb-10",children:m.Children.toArray(Array.from(y))})}function M0(){let a,i,o,u,p;const y=[l.createElement("div",{className:"description",children:m.Children.toArray(["After installation just open proper namespace:"])}),(a=v(Zi("open Feliz.DaisyUI")),l.createElement("div",{className:"max-w-xl",children:m.Children.toArray(Array.from(a))})),(i=d(["Now you can start using library. Everything important starts with ",l.createElement("code",{className:"code",children:"Daisy.*"})," module."]),l.createElement("div",{className:"description",children:m.Children.toArray(Array.from(i))})),(o=v(Zi(`Daisy.button.button [\r
    button.primary\r
    prop.text "This is button"\r
]`)),l.createElement("div",{className:"max-w-xl",children:m.Children.toArray(Array.from(o))})),(u=d(["For applying helpers to non-daisy elements, you need to use custom operator ",l.createElement("code",{className:"code",children:"++"})," from ",l.createElement("code",{className:"code",children:"Feliz.DaisyUI.Operators"})," namespace."]),l.createElement("div",{className:"description",children:m.Children.toArray(Array.from(u))})),(p=v(Zi(`open Feliz.DaisyUI.Operators\r
\r
Html.div [\r
    prop.className "my-class"\r
    ++ color.success // note usage of custom operator here\r
]`)),l.createElement("div",{className:"max-w-xl",children:m.Children.toArray(Array.from(p))}))];return l.createElement(l.Fragment,{},...y)}const O0=(()=>{let a,i;const o=l.createElement("div",h(d([["data-theme","cupcake"],(a=[l.createElement("button",h(b("btn",d([["className","btn-primary"],["children","This is cupcake style button"]]))))],["children",m.Children.toArray(Array.from(a))])])));return H(l.createElement("div",h(v((i="Use <code class='code'>theme.YOUR_THEME</code> to apply one of existing themes to any element on a page.",["dangerouslySetInnerHTML",{__html:i}])))),`Html.div [\r
    theme.cupcake // <-- this is the theme\r
    prop.children [\r
        Daisy.button.button [\r
            button.primary\r
            prop.text "This is cupcake style button"\r
        ]\r
    ]\r
]`,o)})(),R0=(()=>{let a,i,o,u,p,y;const E=v(l.createElement("div",h(b("card",d([["data-theme","cyberpunk"],["className","card-border"],(a=[l.createElement("figure",h(d([["className","pt-10"],(i=[l.createElement("img",{src:"https://picsum.photos/id/1005/400/250"})],["children",m.Children.toArray(Array.from(i))])]))),(o=d([l.createElement("h2",{className:"card-title",children:"Some title"}),l.createElement("p",{children:["What a cool library, isn't it?"]}),(u=v(l.createElement("button",h(b("btn",d([["className","btn-primary"],["children","Click or something"]]))))),l.createElement("div",{className:"card-actions",children:m.Children.toArray(Array.from(u))}))]),l.createElement("div",{className:"card-body",children:m.Children.toArray(Array.from(o))}))],["children",m.Children.toArray(Array.from(a))])])))));return y=l.createElement("div",{children:m.Children.toArray(Array.from(E))}),H(l.createElement("div",h(v((p="You can use it on any element or any part of page. Yes, even for whole <code class='code'>&lt;body&gt;</code>!",["dangerouslySetInnerHTML",{__html:p}])))),`Daisy.card [\r
    theme.cyberpunk // <-- use cyberpunk here\r
    card.border\r
    prop.children [\r
        Html.figure [\r
            prop.className "pt-10"\r
            prop.children [\r
                Html.img [ prop.src "https://picsum.photos/id/1005/400/250" ]\r
            ]\r
        ]\r
        Daisy.cardBody [\r
            Daisy.cardTitle "Some title"\r
            Html.p "What a cool library, isn't it?"\r
            Daisy.cardActions [\r
                Daisy.button.button [\r
                    button.primary\r
                    prop.text "Click or something"\r
                ]\r
            ]\r
        ]\r
    ]\r
]`,y)})();function U0(){return l.createElement(l.Fragment,{},O0,R0)}const B0=(()=>{let a,i;const o=d([l.createElement("div",{className:"text-primary",children:"I am primary!"}),l.createElement("div",{className:"text-success",children:"I am success!"}),l.createElement("div",{className:"bg-accent",children:"Background accent"}),l.createElement("div",h(d([at(["className","bg-error"],["className","text-success"]),["children","Success with error background 🤦"]])))]);return i=l.createElement("div",{className:"flex flex-col space-y-4",children:m.Children.toArray(Array.from(o))}),H((a=d([l.createElement("span",{children:["To select one of predefined "]}),l.createElement("a",{className:"link",children:"colors",href:"https://daisyui.com/core/colors"}),l.createElement("span",{dangerouslySetInnerHTML:{__html:", use the <code class='code'>color.YOUR_COLOR</code>"}})]),l.createElement("div",{children:m.Children.toArray(Array.from(a))})),`Html.div [\r
    Html.div [ color.textPrimary; prop.text "I am primary!" ]\r
    Html.div [ color.textSuccess; prop.text "I am success!" ]\r
    Html.div [ color.bgAccent; prop.text "Background accent" ]\r
    Html.div [\r
        // Note the usage of custom operator ++\r
        (color.bgError ++ color.textSuccess)\r
        prop.text "Success with error background 🤦"\r
    ]\r
]`,i)})();function q0(){return l.createElement(l.Fragment,{},B0)}const L0=(()=>{let a,i,o,u,p;return H("Accordion is cool and easy to use",`Html.div [\r
    Daisy.collapse [\r
        color.bgBase200\r
        prop.className "mb-2"\r
        prop.children [\r
            Html.input [ prop.type'.radio; prop.isChecked true; prop.name "my-accordion" ]\r
            Daisy.collapseTitle [\r
                prop.className "text-xl"\r
                prop.text "Click to open this one and close others"\r
            ]\r
            Daisy.collapseContent [\r
                Html.p "Hello"\r
            ]\r
        ]\r
    ]\r
    Daisy.collapse [\r
        color.bgBase200\r
        prop.children [\r
            Html.input [ prop.type'.radio; prop.isChecked true; prop.name "my-accordion" ]\r
            Daisy.collapseTitle [\r
                prop.className "text-xl"\r
                prop.text "Click to open this one and close others"\r
            ]\r
            Daisy.collapseContent [\r
                Html.p "Hello"\r
            ]\r
        ]\r
    ]\r
]`,(a=d([l.createElement("div",h(b("collapse",d([["className","bg-base-200"],["className","mb-2"],(i=[l.createElement("input",{type:"radio",checked:!0,name:"my-accordion"}),l.createElement("div",h(b("collapse-title",d([["className","text-xl"],["children","Click to open this one and close others"]])))),(o=v(l.createElement("p",{children:["Hello"]})),l.createElement("div",{className:"collapse-content",children:m.Children.toArray(Array.from(o))}))],["children",m.Children.toArray(Array.from(i))])])))),l.createElement("div",h(b("collapse",d([["className","bg-base-200"],(u=[l.createElement("input",{type:"radio",checked:!0,name:"my-accordion"}),l.createElement("div",h(b("collapse-title",d([["className","text-xl"],["children","Click to open this one and close others"]])))),(p=v(l.createElement("p",{children:["Hello"]})),l.createElement("div",{className:"collapse-content",children:m.Children.toArray(Array.from(p))}))],["children",m.Children.toArray(Array.from(u))])]))))]),l.createElement("div",{children:m.Children.toArray(Array.from(a))})))})();function G0(){let a,i,o;const u=[(a=d([(i="Accordion uses the same style as the collapse component but it works with radio inputs. You can control which item to be open by checking/unchecking the hidden radio input.",l.createElement("div",{className:"alert",children:i})),(o="All radio inputs with the same name work together and only one of them can be open at a time. If you have more than one set of accordion items on a page, use different names for the radio inputs on each set.",l.createElement("div",{className:"alert",children:o}))]),l.createElement("div",{className:"flex flex-col gap-2",children:m.Children.toArray(Array.from(a))})),L0];return l.createElement(l.Fragment,{},...u)}const V0=H("Use of Alert is rather straightforward.",`Daisy.alert [\r
    alert.info\r
    prop.text "This is info"\r
]`,l.createElement("div",{children:[l.createElement("div",h(b("alert",d([["className","alert-info"],["children","This is info"]]))))]})),j0=(()=>{const a=l.createElement("div",{children:[l.createElement("div",h(b("alert",d([["className","alert-success"],["children","Wow it works so great!"]]))))]});return H(mn(),`Daisy.alert [\r
    alert.success\r
    prop.text "Wow it works so great!"\r
]`,a)})(),Y0=(()=>{const a=l.createElement("div",{children:[l.createElement("div",h(b("alert",d([["className","alert-error"],["children","OMG, something went wrong!"]]))))]});return H(mn(),`Daisy.alert [\r
    alert.error\r
    prop.text "OMG, something went wrong!"\r
]`,a)})(),Q0=(()=>{let a;const i=l.createElement("div",{children:[l.createElement("div",h(b("alert",d([["className","alert-warning"],["className","justify-start"],(a=[l.createElement("i",{className:"fas fa-exclamation-triangle mr-2"}),l.createElement("label",{children:"Warning with cool icon"})],["children",m.Children.toArray(Array.from(a))])]))))]});return H(mn(),`Daisy.alert [\r
    alert.warning\r
    prop.className "justify-start"\r
    prop.children [\r
        Html.i [ prop.className "fas fa-exclamation-triangle mr-2" ]\r
        Html.label [ prop.text "Warning with cool icon" ]\r
    ]\r
]`,i)})();function X0(){return l.createElement(l.Fragment,{},V0,j0,Y0,Q0)}const Z0=(()=>{let a,i;return H("Avatars are also quite easy to use!",`Daisy.avatar [\r
    Html.div [\r
        prop.className "mb-8 w-24 h-24"\r
        prop.children [\r
            Html.img [\r
                prop.src "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"\r
            ]\r
        ]\r
    ]\r
]`,l.createElement("div",{children:[(a=v(l.createElement("div",h(d([["className","mb-8 w-24 h-24"],(i=[l.createElement("img",{src:"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"})],["children",m.Children.toArray(Array.from(i))])])))),l.createElement("div",{className:"avatar",children:m.Children.toArray(Array.from(a))}))]}))})(),K0=(()=>{let a,i,o,u,p,y,E;return H("Group all the avatars!",`Daisy.avatarGroup [\r
    prop.className "-space-x-6"\r
    prop.children [\r
        Daisy.avatar [\r
            Html.div [\r
                prop.className "w-12"\r
                prop.children [\r
                    Html.img [\r
                        prop.src "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"\r
                    ]\r
                ]\r
            ]\r
        ]\r
        Daisy.avatar [\r
            Html.div [\r
                prop.className "w-12"\r
                prop.children [\r
                    Html.img [\r
                        prop.src "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"\r
                    ]\r
                ]\r
            ]\r
        ]\r
        Daisy.avatar [\r
            Html.div [\r
                prop.className "w-12"\r
                prop.children [\r
                    Html.img [\r
                        prop.src "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"\r
                    ]\r
                ]\r
            ]\r
        ]\r
    ]\r
]`,l.createElement("div",{children:[l.createElement("div",h(b("avatar-group",d([["className","-space-x-6"],(a=[(i=v(l.createElement("div",h(d([["className","w-12"],(o=[l.createElement("img",{src:"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"})],["children",m.Children.toArray(Array.from(o))])])))),l.createElement("div",{className:"avatar",children:m.Children.toArray(Array.from(i))})),(u=v(l.createElement("div",h(d([["className","w-12"],(p=[l.createElement("img",{src:"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"})],["children",m.Children.toArray(Array.from(p))])])))),l.createElement("div",{className:"avatar",children:m.Children.toArray(Array.from(u))})),(y=v(l.createElement("div",h(d([["className","w-12"],(E=[l.createElement("img",{src:"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"})],["children",m.Children.toArray(Array.from(E))])])))),l.createElement("div",{className:"avatar",children:m.Children.toArray(Array.from(y))}))],["children",m.Children.toArray(Array.from(a))])]))))]}))})();function F0(){return l.createElement(l.Fragment,{},Z0,K0)}const J0=H("Just a badge.",`Daisy.badge [\r
    badge.lg\r
    badge.error\r
    prop.text "Big error badge"\r
]`,l.createElement("div",{children:[l.createElement("div",h(b("badge",d([["className","badge-lg"],["className","badge-error"],["children","Big error badge"]]))))]})),$0=H("Just a badge. Yup. Again.",`Daisy.badge [\r
    badge.sm\r
    badge.success\r
    prop.text "Success badge"\r
]`,l.createElement("div",{children:[l.createElement("div",h(b("badge",d([["className","badge-sm"],["className","badge-success"],["children","Success badge"]]))))]})),W0=(()=>{let a;return H("And now inside a button!",`Daisy.button.button [\r
    Html.text "This is button"\r
    Daisy.badge [\r
        badge.sm\r
        badge.success\r
        prop.text "NEW"\r
    ]\r
]`,l.createElement("div",{children:[(a=d(["This is button",l.createElement("div",h(b("badge",d([["className","badge-sm"],["className","badge-success"],["children","NEW"]]))))]),l.createElement("button",{className:"btn",children:m.Children.toArray(Array.from(a))}))]}))})();function I0(){return l.createElement(l.Fragment,{},J0,$0,W0)}const P0=(()=>{let a,i;return H("Turn ul/li into beautiful breadcrumbs.",`Daisy.breadcrumbs [\r
    Html.ul [\r
        Html.li "New project"\r
        Html.li ".NET"\r
        Html.li "F# as always"\r
    ]\r
]`,l.createElement("div",{children:[(a=v((i=d([l.createElement("li",{children:["New project"]}),l.createElement("li",{children:[".NET"]}),l.createElement("li",{children:["F# as always"]})]),l.createElement("ul",{children:m.Children.toArray(Array.from(i))}))),l.createElement("div",{className:"breadcrumbs",children:m.Children.toArray(Array.from(a))}))]}))})();function ev(){return l.createElement(l.Fragment,{},P0)}const tv=H("Nicely styled buttons at your service.",`Daisy.button.button [\r
    button.outline\r
    button.primary\r
    button.lg\r
    prop.text "Do NOT click on me!"\r
]`,l.createElement("div",{children:[l.createElement("button",h(b("btn",d([["className","btn-outline"],["className","btn-primary"],["className","btn-lg"],["onClick",i=>{window.alert(tn("Oh, we have a rebel here!"))}],["children","Do NOT click on me!"]]))))]})),nv=(()=>{let a,i;return H("Colors are nice.",`[ "neutral", button.neutral\r
  "primary", button.primary\r
  "secondary", button.secondary\r
  "accent", button.accent\r
  "ghost", button.ghost\r
  "link", button.link ]\r
|> List.map (fun (n,c) ->\r
    Daisy.button.button [\r
        c\r
        prop.text n\r
    ]\r
)\r
|> (fun btns ->\r
    Html.div [\r
        prop.className "flex gap-2"\r
        prop.children [\r
            Daisy.button.button [ prop.text "Default" ]\r
            yield! btns\r
        ]\r
    ]\r
)`,(a=ac(u=>l.createElement("button",h(b("btn",d([u[1],["children",u[0]]])))),d([["neutral",["className","btn-neutral"]],["primary",["className","btn-primary"]],["secondary",["className","btn-secondary"]],["accent",["className","btn-accent"]],["ghost",["className","btn-ghost"]],["link",["className","btn-link"]]])),l.createElement("div",h(d([["className","flex gap-2"],(i=we(ee(()=>Ke(ue(l.createElement("button",h(b("btn",v(["children","Default"]))))),ee(()=>a)))),["children",m.Children.toArray(Array.from(i))])])))))})(),rv=(()=>{let a,i;const o=l.createElement("div",{children:[l.createElement("div",h(d([["className","p-20 bg-cover card bg-base-200"],["style",{backgroundImage:"url('https://picsum.photos/id/314/400/300')"}],(a=[l.createElement("button",h(b("btn",d([["className","glass"],["className","btn-lg"],["onClick",p=>{window.alert(tn("One keep clickin' right?"))}],["children","Glassy is very classy"]]))))],["children",m.Children.toArray(Array.from(a))])])))]});return H((i=d(["See ",l.createElement("a",{className:"link",href:"https://daisyui.com/components/button",children:"original docs"})," for more combinations."]),l.createElement("div",{children:m.Children.toArray(Array.from(i))})),`Html.div [\r
    prop.className "p-20 bg-cover card bg-base-200"\r
    prop.style [ style.backgroundImage "url('https://picsum.photos/id/314/400/300')" ]\r
    prop.children [\r
        Daisy.button.button [\r
            button.glass\r
            button.lg\r
            prop.text "Glassy is very classy"\r
        ]\r
    ]\r
]`,o)})();function lv(){return l.createElement(l.Fragment,{},tv,nv,rv)}const av=(()=>{let a,i,o,u,p;return H("Card with full image",`Daisy.card [\r
    card.border\r
    card.full\r
    prop.children [\r
        Html.figure [Html.img [prop.src "https://picsum.photos/id/1005/400/250"]]\r
        Daisy.cardBody [\r
            Daisy.cardTitle "Image overlay"\r
            Html.p "Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."\r
            Daisy.cardActions [\r
                Daisy.button.button [prop.text "Get started"; button.primary]\r
            ]\r
        ]\r
    ]\r
]`,l.createElement("div",{children:[l.createElement("div",h(b("card",d([["className","card-border"],["className","image-full"],(a=[(i=v(l.createElement("img",{src:"https://picsum.photos/id/1005/400/250"})),l.createElement("figure",{children:m.Children.toArray(Array.from(i))})),(o=d([l.createElement("h2",{className:"card-title",children:"Image overlay"}),(u="Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.",l.createElement("p",{children:[u]})),(p=v(l.createElement("button",h(b("btn",d([["children","Get started"],["className","btn-primary"]]))))),l.createElement("div",{className:"card-actions",children:m.Children.toArray(Array.from(p))}))]),l.createElement("div",{className:"card-body",children:m.Children.toArray(Array.from(o))}))],["children",m.Children.toArray(Array.from(a))])]))))]}))})(),iv=(()=>{let a,i,o,u,p,y;return H("Card with top image",`Daisy.card [\r
    card.border\r
    prop.children [\r
        Html.figure [Html.img [prop.src "https://picsum.photos/id/1005/400/250"]]\r
        Daisy.cardBody [\r
            Daisy.cardTitle [\r
                prop.children [\r
                    Html.span "Top image "\r
                    Daisy.badge [\r
                        badge.lg\r
                        badge.secondary\r
                        prop.text "NEW"\r
                    ]\r
                ]\r
            ]\r
            Html.p "Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."\r
            Daisy.cardActions [\r
                Daisy.button.button [prop.text "More info"; button.secondary]\r
            ]\r
        ]\r
    ]\r
]`,l.createElement("div",{children:[l.createElement("div",h(b("card",d([["className","card-border"],(a=[(i=v(l.createElement("img",{src:"https://picsum.photos/id/1005/400/250"})),l.createElement("figure",{children:m.Children.toArray(Array.from(i))})),(o=d([l.createElement("h2",h(b("card-title",v((u=[l.createElement("span",{children:["Top image "]}),l.createElement("div",h(b("badge",d([["className","badge-lg"],["className","badge-secondary"],["children","NEW"]]))))],["children",m.Children.toArray(Array.from(u))]))))),(p="Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.",l.createElement("p",{children:[p]})),(y=v(l.createElement("button",h(b("btn",d([["children","More info"],["className","btn-secondary"]]))))),l.createElement("div",{className:"card-actions",children:m.Children.toArray(Array.from(y))}))]),l.createElement("div",{className:"card-body",children:m.Children.toArray(Array.from(o))}))],["children",m.Children.toArray(Array.from(a))])]))))]}))})(),cv=(()=>{let a,i,o,u;return H("Card with shadow no image",`Daisy.card [\r
    prop.className "shadow-lg"\r
    prop.children [\r
        Daisy.cardBody [\r
            Daisy.cardTitle "No Images"\r
            Html.p "Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."\r
            Daisy.cardActions [\r
                Daisy.button.button [prop.text "Get Started"; button.primary]\r
                Daisy.button.button [prop.text "More info"; button.ghost]\r
            ]\r
        ]\r
    ]\r
]`,l.createElement("div",{children:[l.createElement("div",h(b("card",d([["className","shadow-lg"],(a=[(i=d([l.createElement("h2",{className:"card-title",children:"Card with shadow no image"}),(o="Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.",l.createElement("p",{children:[o]})),(u=d([l.createElement("button",h(b("btn",d([["children","Get Started"],["className","btn-primary"]])))),l.createElement("button",h(b("btn",d([["children","More info"],["className","btn-ghost"]]))))]),l.createElement("div",{className:"card-actions",children:m.Children.toArray(Array.from(u))}))]),l.createElement("div",{className:"card-body",children:m.Children.toArray(Array.from(i))}))],["children",m.Children.toArray(Array.from(a))])]))))]}))})(),sv=(()=>{let a,i,o,u;return H("Card with border no image",`Daisy.card [\r
    card.border\r
    prop.children [\r
        Daisy.cardBody [\r
            Daisy.cardTitle "No Images"\r
            Html.p "Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."\r
            Daisy.cardActions [\r
                Daisy.button.button [prop.text "Get Started"; button.primary]\r
                Daisy.button.button [prop.text "More info"; button.ghost]\r
            ]\r
        ]\r
    ]\r
]`,l.createElement("div",{children:[l.createElement("div",h(b("card",d([["className","card-border"],(a=[(i=d([l.createElement("h2",{className:"card-title",children:"Card with border no image"}),(o="Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.",l.createElement("p",{children:[o]})),(u=d([l.createElement("button",h(b("btn",d([["children","Get Started"],["className","btn-primary"]])))),l.createElement("button",h(b("btn",d([["children","More info"],["className","btn-ghost"]]))))]),l.createElement("div",{className:"card-actions",children:m.Children.toArray(Array.from(u))}))]),l.createElement("div",{className:"card-body",children:m.Children.toArray(Array.from(i))}))],["children",m.Children.toArray(Array.from(a))])]))))]}))})();function ov(){return l.createElement(l.Fragment,{},sv,cv,iv,av)}const uv=(()=>{let a,i,o,u,p,y,E;return H("Horizontal",`Daisy.carousel [\r
    Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/500/256/144"]]\r
    Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/501/256/144"]]\r
    Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/502/256/144"]]\r
    Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/503/256/144"]]\r
    Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/505/256/144"]]\r
    Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/506/256/144"]]\r
]`,l.createElement("div",{children:[(a=d([(i=v(l.createElement("img",{src:"https://picsum.photos/id/500/256/144"})),l.createElement("div",{className:"carousel-item",children:m.Children.toArray(Array.from(i))})),(o=v(l.createElement("img",{src:"https://picsum.photos/id/501/256/144"})),l.createElement("div",{className:"carousel-item",children:m.Children.toArray(Array.from(o))})),(u=v(l.createElement("img",{src:"https://picsum.photos/id/502/256/144"})),l.createElement("div",{className:"carousel-item",children:m.Children.toArray(Array.from(u))})),(p=v(l.createElement("img",{src:"https://picsum.photos/id/503/256/144"})),l.createElement("div",{className:"carousel-item",children:m.Children.toArray(Array.from(p))})),(y=v(l.createElement("img",{src:"https://picsum.photos/id/505/256/144"})),l.createElement("div",{className:"carousel-item",children:m.Children.toArray(Array.from(y))})),(E=v(l.createElement("img",{src:"https://picsum.photos/id/506/256/144"})),l.createElement("div",{className:"carousel-item",children:m.Children.toArray(Array.from(E))}))]),l.createElement("div",{className:"carousel",children:m.Children.toArray(Array.from(a))}))]}))})(),dv=(()=>{let a,i,o,u,p,y,E;return H("Vertical",`Daisy.carousel [\r
    prop.classes ["w-64"; "h-36"]\r
    carousel.vertical\r
    prop.children [\r
        Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/500/256/144"]]\r
        Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/501/256/144"]]\r
        Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/502/256/144"]]\r
        Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/503/256/144"]]\r
        Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/505/256/144"]]\r
        Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/506/256/144"]]\r
    ]\r
]`,l.createElement("div",{children:[l.createElement("div",h(b("carousel",d([["className",fn(" ",["w-64","h-36"])],["className","carousel-vertical"],(a=[(i=v(l.createElement("img",{src:"https://picsum.photos/id/500/256/144"})),l.createElement("div",{className:"carousel-item",children:m.Children.toArray(Array.from(i))})),(o=v(l.createElement("img",{src:"https://picsum.photos/id/501/256/144"})),l.createElement("div",{className:"carousel-item",children:m.Children.toArray(Array.from(o))})),(u=v(l.createElement("img",{src:"https://picsum.photos/id/502/256/144"})),l.createElement("div",{className:"carousel-item",children:m.Children.toArray(Array.from(u))})),(p=v(l.createElement("img",{src:"https://picsum.photos/id/503/256/144"})),l.createElement("div",{className:"carousel-item",children:m.Children.toArray(Array.from(p))})),(y=v(l.createElement("img",{src:"https://picsum.photos/id/505/256/144"})),l.createElement("div",{className:"carousel-item",children:m.Children.toArray(Array.from(y))})),(E=v(l.createElement("img",{src:"https://picsum.photos/id/506/256/144"})),l.createElement("div",{className:"carousel-item",children:m.Children.toArray(Array.from(E))}))],["children",m.Children.toArray(Array.from(a))])]))))]}))})();function mv(){return l.createElement(l.Fragment,{},uv,dv)}const fv=(()=>{let a,i,o;return H("With start and end",`Html.div [\r
    Daisy.chat [\r
        chat.start\r
        prop.children [\r
            Daisy.chatBubble "Is there anything better than Fable & F#?"\r
        ]\r
    ]\r
    Daisy.chat [\r
        chat.end'\r
        prop.children [\r
            Daisy.chatBubble "No."\r
        ]\r
    ]\r
]`,(a=d([l.createElement("div",h(b("chat",d([["className","chat-start"],(i=[l.createElement("div",{className:"chat-bubble",children:"Is there anything better than Fable & F#?"})],["children",m.Children.toArray(Array.from(i))])])))),l.createElement("div",h(b("chat",d([["className","chat-end"],(o=[l.createElement("div",{className:"chat-bubble",children:"No."})],["children",m.Children.toArray(Array.from(o))])]))))]),l.createElement("div",{children:m.Children.toArray(Array.from(a))})))})(),hv=(()=>{let a,i,o,u,p,y,E;return H("With images",`Html.div [\r
    Daisy.chat [\r
        chat.start\r
        prop.children [\r
            Daisy.chatImage [\r
                avatar.className\r
                prop.children [\r
                    Html.div [\r
                        prop.className "w-10 rounded-full"\r
                        prop.children [ Html.img [ prop.src "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" ] ]\r
                    ]\r
                ]\r
            ]\r
            Daisy.chatBubble "Is anyone here?"\r
        ]\r
    ]\r
    Daisy.chat [\r
        chat.start\r
        prop.children [\r
            Daisy.chatImage [\r
                avatar.className\r
                prop.children [\r
                    Html.div [\r
                        prop.className "w-10 rounded-full"\r
                        prop.children [ Html.img [ prop.src "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" ] ]\r
                    ]\r
                ]\r
            ]\r
            Daisy.chatBubble "Helloooooo!"\r
        ]\r
    ]\r
]`,(a=d([l.createElement("div",h(b("chat",d([["className","chat-start"],(i=[l.createElement("div",h(b("chat-image",d([["className","avatar"],(o=[l.createElement("div",h(d([["className","w-10 rounded-full"],(u=[l.createElement("img",{src:"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"})],["children",m.Children.toArray(Array.from(u))])])))],["children",m.Children.toArray(Array.from(o))])])))),l.createElement("div",{className:"chat-bubble",children:"Is anyone here?"})],["children",m.Children.toArray(Array.from(i))])])))),l.createElement("div",h(b("chat",d([["className","chat-start"],(p=[l.createElement("div",h(b("chat-image",d([["className","avatar"],(y=[l.createElement("div",h(d([["className","w-10 rounded-full"],(E=[l.createElement("img",{src:"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"})],["children",m.Children.toArray(Array.from(E))])])))],["children",m.Children.toArray(Array.from(y))])])))),l.createElement("div",{className:"chat-bubble",children:"Helloooooo!"})],["children",m.Children.toArray(Array.from(p))])]))))]),l.createElement("div",{children:m.Children.toArray(Array.from(a))})))})(),pv=(()=>{let a,i,o,u,p,y,E,w,D;return H("With images",`Html.div [\r
    Daisy.chat [\r
        chat.start\r
        prop.children [\r
            Daisy.chatImage [\r
                avatar.className\r
                prop.children [\r
                    Html.div [\r
                        prop.className "w-10 rounded-full"\r
                        prop.children [ Html.img [ prop.src "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" ] ]\r
                    ]\r
                ]\r
            ]\r
            Daisy.chatHeader [\r
                Html.text "Vincent Noir "\r
                Html.time [ prop.className "text-xs opacity-50"; prop.text "2 hours ago" ]\r
            ]\r
            Daisy.chatBubble "Wind. My only friend!"\r
            Daisy.chatFooter [\r
                prop.className "opacity-50"\r
                prop.text "Delivered"\r
            ]\r
        ]\r
    ]\r
    Daisy.chat [\r
        chat.end'\r
        prop.children [\r
            Daisy.chatImage [\r
                avatar.className\r
                prop.children [\r
                    Html.div [\r
                        prop.className "w-10 rounded-full"\r
                        prop.children [ Html.img [ prop.src "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" ] ]\r
                    ]\r
                ]\r
            ]\r
            Daisy.chatHeader [\r
                Html.text "Wind "\r
                Html.time [ prop.className "text-xs opacity-50"; prop.text "2 hours ago" ]\r
            ]\r
            Daisy.chatBubble "I HATE YOU!"\r
            Daisy.chatFooter [\r
                prop.className "opacity-50"\r
                prop.text "Delivered"\r
            ]\r
        ]\r
    ]\r
]`,(a=d([l.createElement("div",h(b("chat",d([["className","chat-start"],(i=[l.createElement("div",h(b("chat-image",d([["className","avatar"],(o=[l.createElement("div",h(d([["className","w-10 rounded-full"],(u=[l.createElement("img",{src:"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"})],["children",m.Children.toArray(Array.from(u))])])))],["children",m.Children.toArray(Array.from(o))])])))),(p=d(["Vincent Noir ",l.createElement("time",{className:"text-xs opacity-50",children:"2 hours ago"})]),l.createElement("div",{className:"chat-header",children:m.Children.toArray(Array.from(p))})),l.createElement("div",{className:"chat-bubble",children:"Wind. My only friend!"}),l.createElement("div",h(b("chat-footer",d([["className","opacity-50"],["children","Delivered"]]))))],["children",m.Children.toArray(Array.from(i))])])))),l.createElement("div",h(b("chat",d([["className","chat-end"],(y=[l.createElement("div",h(b("chat-image",d([["className","avatar"],(E=[l.createElement("div",h(d([["className","w-10 rounded-full"],(w=[l.createElement("img",{src:"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"})],["children",m.Children.toArray(Array.from(w))])])))],["children",m.Children.toArray(Array.from(E))])])))),(D=d(["Wind ",l.createElement("time",{className:"text-xs opacity-50",children:"2 hours ago"})]),l.createElement("div",{className:"chat-header",children:m.Children.toArray(Array.from(D))})),l.createElement("div",{className:"chat-bubble",children:"I HATE YOU!"}),l.createElement("div",h(b("chat-footer",d([["className","opacity-50"],["children","Delivered"]]))))],["children",m.Children.toArray(Array.from(y))])]))))]),l.createElement("div",{children:m.Children.toArray(Array.from(a))})))})(),yv=(()=>{let a;return H("With colors",`let colors = [\r
    "primary", chatBubble.primary\r
    "secondary", chatBubble.secondary\r
    "accent", chatBubble.accent\r
    "info", chatBubble.info\r
    "success", chatBubble.success\r
    "warning", chatBubble.warning\r
    "error", chatBubble.error\r
]\r
Html.div [\r
    for (n,c) in colors do\r
        Daisy.chat [\r
            chat.start\r
            prop.children [\r
                Daisy.chatBubble [\r
                    c\r
                    prop.text $"This is {n} color"\r
                ]\r
            ]\r
        ]\r
]`,(a=we(ee(()=>Xe(o=>{let u;return ue(l.createElement("div",h(b("chat",d([["className","chat-start"],(u=[l.createElement("div",h(b("chat-bubble",d([o[1],["children",`This is ${o[0]} color`]]))))],["children",m.Children.toArray(Array.from(u))])])))))},[["primary",["className","chat-bubble-primary"]],["secondary",["className","chat-bubble-secondary"]],["accent",["className","chat-bubble-accent"]],["info",["className","chat-bubble-info"]],["success",["className","chat-bubble-success"]],["warning",["className","chat-bubble-warning"]],["error",["className","chat-bubble-error"]]]))),l.createElement("div",{children:m.Children.toArray(Array.from(a))})))})();function bv(){return l.createElement(l.Fragment,{},fv,hv,pv,yv)}const gv=(()=>{let a,i,o;return H("Basic",`Daisy.collapse [\r
    prop.tabIndex 0\r
    prop.children [\r
        Daisy.collapseTitle "I open with focus"\r
        Daisy.collapseContent [Html.p "Collapse content reveals with focus. If you add a checkbox, you can control it using checkbox instead of focus. Or you can force-open/force-close using collapse-open and collapse-close classes. Adding a tabIndex will allow focus."]\r
    ]\r
]`,l.createElement("div",{children:[l.createElement("div",h(b("collapse",d([["tabIndex",0],(a=[l.createElement("div",{className:"collapse-title",children:"I open with focus"}),(i=v((o="Collapse content reveals with focus. If you add a checkbox, you can control it using checkbox instead of focus. Or you can force-open/force-close using collapse-open and collapse-close classes. Adding a tabIndex will allow focus.",l.createElement("p",{children:[o]}))),l.createElement("div",{className:"collapse-content",children:m.Children.toArray(Array.from(i))}))],["children",m.Children.toArray(Array.from(a))])]))))]}))})(),vv=(()=>{let a,i,o;return H("Arrow",`Daisy.collapse [\r
    prop.tabIndex 0\r
    collapse.arrow\r
    prop.className "border"\r
    prop.children [\r
        Daisy.collapseTitle "I open with focus"\r
        Daisy.collapseContent [Html.p "Collapse content reveals with focus. If you add a checkbox, you can control it using checkbox instead of focus. Or you can force-open/force-close using collapse-open and collapse-close classes. Adding a tabIndex will allow focus."]\r
    ]\r
]`,l.createElement("div",{children:[l.createElement("div",h(b("collapse",d([["tabIndex",0],["className","collapse-arrow"],["className","border"],(a=[l.createElement("div",{className:"collapse-title",children:"I open with focus"}),(i=v((o="Collapse content reveals with focus. If you add a checkbox, you can control it using checkbox instead of focus. Or you can force-open/force-close using collapse-open and collapse-close classes. Adding a tabIndex will allow focus.",l.createElement("p",{children:[o]}))),l.createElement("div",{className:"collapse-content",children:m.Children.toArray(Array.from(i))}))],["children",m.Children.toArray(Array.from(a))])]))))]}))})(),Ev=(()=>{let a,i,o;return H("With checkbox",`Daisy.collapse [\r
    collapse.arrow\r
    prop.className "border"\r
    prop.children [\r
        Html.input [prop.type' "checkbox"]\r
        Daisy.collapseTitle "I open with a checkbox"\r
        Daisy.collapseContent [Html.p "Collapse content reveals with focus. If you add a checkbox, you can control it using checkbox instead of focus. Or you can force-open/force-close using collapse-open and collapse-close classes."]\r
    ]\r
]`,l.createElement("div",{children:[l.createElement("div",h(b("collapse",d([["className","collapse-plus"],["className","border"],(a=[l.createElement("input",{type:"checkbox"}),l.createElement("div",{className:"collapse-title",children:"I open with a checkbox"}),(i=v((o="Collapse content reveals with focus. If you add a checkbox, you can control it using checkbox instead of focus. Or you can force-open/force-close using collapse-open and collapse-close classes.",l.createElement("p",{children:[o]}))),l.createElement("div",{className:"collapse-content",children:m.Children.toArray(Array.from(i))}))],["children",m.Children.toArray(Array.from(a))])]))))]}))})();function Av(){return l.createElement(l.Fragment,{},gv,vv,Ev)}let ah=class extends lc{constructor(i){super(),this.tag=0,this.fields=[i]}cases(){return["CountdownChange"]}},Rh=class extends Ha{constructor(i){super(),this.Countdown=i|0}};function Nv(){return[new Rh(60),cc()]}function Sv(a,i){return[new Rh(a.fields[0]),cc()]}function xv(a,i){let o,u;return H("Basic",`Html.div [\r
    Daisy.countdown [Daisy.countdownValue state.Countdown]\r
\r
    Daisy.button.button [\r
        button.xs\r
        button.primary\r
        prop.onClick (fun _ -> CountdownChange(state.Countdown + 1) |> dispatch)\r
        prop.text "⬆️ Up"\r
    ]\r
\r
    Daisy.button.button [\r
        button.xs\r
        button.secondary\r
        prop.onClick (fun _ -> CountdownChange(state.Countdown - 1) |> dispatch)\r
        prop.text "⬇️ Down"\r
    ]\r
]`,(o=d([(u=v(l.createElement("span",{style:{"--value":a.Countdown}})),l.createElement("span",{className:"countdown",children:m.Children.toArray(Array.from(u))})),l.createElement("button",h(b("btn",d([["className","btn-xs"],["className","btn-primary"],["onClick",y=>{i(new ah(a.Countdown+1))}],["children","⬆️ Up"]])))),l.createElement("button",h(b("btn",d([["className","btn-xs"],["className","btn-secondary"],["onClick",y=>{i(new ah(a.Countdown-1))}],["children","⬇️ Down"]]))))]),l.createElement("div",{children:m.Children.toArray(Array.from(o))})))}function Cv(){const a=Oh(()=>Mh(Nv,Sv,(o,u)=>{}),void 0,[]),i=[xv(a[0],a[1])];return l.createElement(l.Fragment,{},...i)}const Dv=(()=>{let a,i,o;return H("Diff component shows a side-by-side comparison of two items.",`Daisy.diff [\r
    prop.className "aspect-[16/9]"\r
    prop.children [\r
        Daisy.diffItem1 [\r
            Html.img [ prop.src "https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp" ]\r
        ]\r
        Daisy.diffItem2 [\r
            Html.img [ prop.src "https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp" ]\r
        ]\r
        Daisy.diffResizer []\r
    ]\r
]`,l.createElement("div",h(b("diff",d([["className","aspect-[16/9]"],(a=[(i=v(l.createElement("img",{src:"https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp"})),l.createElement("div",{className:"diff-item-1",children:m.Children.toArray(Array.from(i))})),(o=v(l.createElement("img",{src:"https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp"})),l.createElement("div",{className:"diff-item-2",children:m.Children.toArray(Array.from(o))})),l.createElement("div",h(b("diff-resizer",Fe())))],["children",m.Children.toArray(Array.from(a))])])))))})(),wv=(()=>{let a,i,o;return H("Diff text",`Daisy.diff [\r
    prop.className "aspect-[16/9]"\r
    prop.children [\r
        Daisy.diffItem1 [\r
            Html.div [\r
                prop.className "bg-primary text-primary-content text-9xl font-black grid place-content-center"\r
                prop.text "F# rulez!"\r
            ]\r
        ]\r
        Daisy.diffItem2 [\r
            Html.div [\r
                prop.className "bg-base-200 text-9xl font-black grid place-content-center"\r
                prop.text "F# rulez!"\r
            ]\r
        ]\r
        Daisy.diffResizer []\r
    ]\r
]`,l.createElement("div",h(b("diff",d([["className","aspect-[16/9]"],(a=[(i=v(l.createElement("div",{className:"bg-primary text-primary-content text-9xl font-black grid place-content-center",children:"F# rulez!"})),l.createElement("div",{className:"diff-item-1",children:m.Children.toArray(Array.from(i))})),(o=v(l.createElement("div",{className:"bg-base-200 text-9xl font-black grid place-content-center",children:"F# rulez!"})),l.createElement("div",{className:"diff-item-2",children:m.Children.toArray(Array.from(o))})),l.createElement("div",h(b("diff-resizer",Fe())))],["children",m.Children.toArray(Array.from(a))])])))))})();function _v(){return l.createElement(l.Fragment,{},Dv,wv)}const Hv=(()=>{let a;return H("Vertical (default)",`Html.div [\r
    prop.className "flex flex-col w-full"\r
    prop.children [\r
        Html.div [\r
            prop.className "grid h-20 card bg-base-300 rounded-box place-items-center"\r
            prop.text "content"\r
        ]\r
        Daisy.divider "OR"\r
        Html.div [\r
            prop.className "grid h-20 card bg-base-300 rounded-box place-items-center"\r
            prop.text "content"\r
        ]\r
    ]\r
]`,l.createElement("div",h(d([["className","flex flex-col w-full"],(a=[l.createElement("div",{className:"grid h-20 card bg-base-300 rounded-box place-items-center",children:"content"}),l.createElement("div",{className:"divider",children:"OR"}),l.createElement("div",{className:"grid h-20 card bg-base-300 rounded-box place-items-center",children:"content"})],["children",m.Children.toArray(Array.from(a))])]))))})(),Tv=(()=>{let a;return H("Vertical",`Html.div [\r
    prop.className "flex flex-row w-full"\r
    prop.children [\r
        Html.div [\r
            prop.className "grid flex-grow h-32 card bg-base-300 rounded-box place-items-center"\r
            prop.text "content"\r
        ]\r
        Daisy.divider [\r
            divider.horizontal\r
            prop.text "OR"\r
        ]\r
        Html.div [\r
            prop.className "grid flex-grow h-32 card bg-base-300 rounded-box place-items-center"\r
            prop.text "content"\r
        ]\r
    ]\r
]`,l.createElement("div",{children:[l.createElement("div",h(d([["className","flex flex-row w-full"],(a=[l.createElement("div",{className:"grid flex-grow h-32 card bg-base-300 rounded-box place-items-center",children:"content"}),l.createElement("div",h(b("divider",d([["className","divider-horizontal"],["children","OR"]])))),l.createElement("div",{className:"grid flex-grow h-32 card bg-base-300 rounded-box place-items-center",children:"content"})],["children",m.Children.toArray(Array.from(a))])])))]}))})();function kv(){return l.createElement(l.Fragment,{},Hv,Tv)}const zv=(()=>{let a,i,o,u,p,y,E;return H("Docked navigation bar",`Daisy.dock [\r
    dock.xl\r
    prop.children [\r
        Html.button [\r
            prop.children [\r
                Svg.svg [\r
                    svg.className "size-[1.2em]"\r
                    svg.viewBox (0, 0, 24, 24)\r
                    svg.children [\r
                        Svg.g [\r
                            svg.fill "currentColor"\r
                            svg.strokeLineJoin "miter"\r
                            svg.strokeLineCap "butt"\r
                            svg.children [\r
                                Svg.polyline [\r
                                    svg.points "3 14 9 14 9 17 15 17 15 14 21 14"\r
                                    svg.strokeMitterLimit 10\r
                                    svg.strokeWidth 2\r
                                ]\r
                                Svg.rect [\r
                                    svg.x 3\r
                                    svg.y 3\r
                                    svg.width 18\r
                                    svg.height 18\r
                                    svg.rx 2\r
                                    svg.ry 2\r
                                    svg.fill "none"\r
                                    svg.stroke "currentColor"\r
                                    svg.strokeLineCap "square"\r
                                    svg.strokeMitterLimit 10\r
                                    svg.strokeWidth 2\r
                                ]\r
                            ]\r
                        ]\r
                    ]\r
                ]\r
                Daisy.dockLabel "Inbox"\r
            ]\r
        ]\r
        Html.button [\r
            dock.active\r
            prop.children [\r
                Svg.svg [\r
                    svg.className "size-[1.2em]"\r
                    svg.viewBox (0, 0, 24, 24)\r
                    svg.children [\r
                        Svg.g [\r
                            svg.fill "currentColor"\r
                            svg.strokeLineJoin "miter"\r
                            svg.strokeLineCap "butt"\r
                            svg.children [\r
                                Svg.polyline [\r
                                    svg.points "3 14 9 14 9 17 15 17 15 14 21 14"\r
                                    svg.strokeMitterLimit 10\r
                                    svg.strokeWidth 2\r
                                ]\r
                                Svg.rect [\r
                                    svg.x 3\r
                                    svg.y 3\r
                                    svg.width 18\r
                                    svg.height 18\r
                                    svg.rx 2\r
                                    svg.ry 2\r
                                    svg.fill "none"\r
                                    svg.stroke "currentColor"\r
                                    svg.strokeLineCap "square"\r
                                    svg.strokeMitterLimit 10\r
                                    svg.strokeWidth 2\r
                                ]\r
                            ]\r
                        ]\r
                    ]\r
                ]\r
                Daisy.dockLabel "Inbox active"\r
            ]\r
        ]\r
    ]\r
]`,l.createElement("div",h(b("dock",d([["className","dock-xl"],(a=[l.createElement("button",h(v((i=[l.createElement("svg",h(d([["className","size-[1.2em]"],["viewBox","0 0 24 24"],(o=v(l.createElement("g",h(d([["fill","currentColor"],["strokeLinejoin","miter"],["strokeLinecap","butt"],(u=d([l.createElement("polyline",{points:"3 14 9 14 9 17 15 17 15 14 21 14",strokeMiterlimit:10,strokeWidth:2}),l.createElement("rect",{x:3,y:3,width:18,height:18,rx:2,ry:2,fill:"none",stroke:"currentColor",strokeLinecap:"square",strokeMiterlimit:10,strokeWidth:2})]),["children",m.Children.toArray(Array.from(u))])])))),["children",m.Children.toArray(Array.from(o))])]))),l.createElement("span",{className:"dock-label",children:"Inbox"})],["children",m.Children.toArray(Array.from(i))])))),l.createElement("button",h(d([["className","dock-active"],(p=[l.createElement("svg",h(d([["className","size-[1.2em]"],["viewBox","0 0 24 24"],(y=v(l.createElement("g",h(d([["fill","currentColor"],["strokeLinejoin","miter"],["strokeLinecap","butt"],(E=d([l.createElement("polyline",{points:"3 14 9 14 9 17 15 17 15 14 21 14",strokeMiterlimit:10,strokeWidth:2}),l.createElement("rect",{x:3,y:3,width:18,height:18,rx:2,ry:2,fill:"none",stroke:"currentColor",strokeLinecap:"square",strokeMiterlimit:10,strokeWidth:2})]),["children",m.Children.toArray(Array.from(E))])])))),["children",m.Children.toArray(Array.from(y))])]))),l.createElement("span",{className:"dock-label",children:"Inbox active"})],["children",m.Children.toArray(Array.from(p))])])))],["children",m.Children.toArray(Array.from(a))])])))))})();function Mv(){return l.createElement(l.Fragment,{},zv)}const Ov=(()=>{let a,i,o,u;return H("Simple",`Daisy.drawer [\r
    prop.className "rounded-lg shadow bg-base-200 h-52"\r
    prop.children [\r
        Daisy.drawerToggle [prop.id "my-drawer"]\r
        Daisy.drawerContent [\r
            prop.className "flex flex-col items-center justify-center"\r
            prop.children [\r
                Daisy.label [\r
                    button.primary\r
                    prop.htmlFor "my-drawer"\r
                    prop.text "Open Menu"\r
                ]\r
            ]\r
        ]\r
        Daisy.drawerSide [\r
            prop.className "absolute h-full"\r
            prop.children [\r
                Daisy.drawerOverlay [prop.htmlFor "my-drawer"]\r
                Daisy.menu [\r
                    prop.className "p-4 h-full overflow-y-auto w-80 bg-base-100 text-base-content"\r
                    prop.children [\r
                        Html.li "Menu item 1"\r
                        Html.li "Menu item 2"\r
                    ]\r
                ]\r
            ]\r
        ]\r
    ]\r
]`,l.createElement("div",h(b("drawer",d([["className","rounded-lg shadow bg-base-200 h-52"],(a=[l.createElement("input",h(b("drawer-toggle",d([["type","checkbox"],["id","my-drawer"]])))),l.createElement("div",h(b("drawer-content",d([["className","flex flex-col items-center justify-center"],(i=[l.createElement("span",h(b("label",d([["className","btn-primary"],["htmlFor","my-drawer"],["children","Open Menu"]]))))],["children",m.Children.toArray(Array.from(i))])])))),l.createElement("div",h(b("drawer-side",d([["className","absolute h-full"],(o=[l.createElement("label",h(b("drawer-overlay",v(["htmlFor","my-drawer"])))),l.createElement("ul",h(b("menu",d([["className","p-4 h-full overflow-y-auto w-80 bg-base-100 text-base-content"],(u=[l.createElement("li",{children:["Menu item 1"]}),l.createElement("li",{children:["Menu item 2"]})],["children",m.Children.toArray(Array.from(u))])]))))],["children",m.Children.toArray(Array.from(o))])]))))],["children",m.Children.toArray(Array.from(a))])])))))})();function Rv(){return l.createElement(l.Fragment,{},Ov)}const Uv=(()=>{let a,i,o,u,p;return H("Simple",`Daisy.dropdown [\r
    Daisy.button.button [\r
        button.primary\r
        prop.text "Dropdown"\r
    ]\r
    Daisy.dropdownContent [\r
        prop.className "p-2 shadow menu bg-base-100 rounded-box w-52"\r
        prop.tabIndex 0\r
        prop.children [\r
            Html.li [Html.a [prop.text "Item 1"]]\r
            Html.li [Html.a [prop.text "Item 2"]]\r
            Html.li [Html.a [prop.text "Item 3"]]\r
        ]\r
    ]\r
]\r
`,(a=d([l.createElement("button",h(b("btn",d([["className","btn-primary"],["children","Dropdown"]])))),l.createElement("ul",h(b("dropdown-content",d([["className","p-2 shadow menu bg-base-100 rounded-box w-52"],["tabIndex",0],(i=[(o=v(l.createElement("a",{children:"Item 1"})),l.createElement("li",{children:m.Children.toArray(Array.from(o))})),(u=v(l.createElement("a",{children:"Item 2"})),l.createElement("li",{children:m.Children.toArray(Array.from(u))})),(p=v(l.createElement("a",{children:"Item 3"})),l.createElement("li",{children:m.Children.toArray(Array.from(p))}))],["children",m.Children.toArray(Array.from(i))])]))))]),l.createElement("div",{className:"dropdown",children:m.Children.toArray(Array.from(a))})))})(),Bv=(()=>{let a,i,o,u,p;return H("Hover",`Daisy.dropdown [\r
    dropdown.hover\r
    prop.children [\r
        Daisy.button.button [\r
            button.primary\r
            prop.text "Hover"\r
        ]\r
        Daisy.dropdownContent [\r
            prop.className "p-2 shadow menu bg-base-100 rounded-box w-52"\r
            prop.tabIndex 0\r
            prop.children [\r
                Html.li [Html.a [prop.text "Item 1"]]\r
                Html.li [Html.a [prop.text "Item 2"]]\r
                Html.li [Html.a [prop.text "Item 3"]]\r
            ]\r
        ]\r
    ]\r
]\r
`,l.createElement("div",{children:[l.createElement("div",h(b("dropdown",d([["className","dropdown-hover"],(a=[l.createElement("button",h(b("btn",d([["className","btn-primary"],["children","Hover"]])))),l.createElement("ul",h(b("dropdown-content",d([["className","p-2 shadow menu bg-base-100 rounded-box w-52"],["tabIndex",0],(i=[(o=v(l.createElement("a",{children:"Item 1"})),l.createElement("li",{children:m.Children.toArray(Array.from(o))})),(u=v(l.createElement("a",{children:"Item 2"})),l.createElement("li",{children:m.Children.toArray(Array.from(u))})),(p=v(l.createElement("a",{children:"Item 3"})),l.createElement("li",{children:m.Children.toArray(Array.from(p))}))],["children",m.Children.toArray(Array.from(i))])]))))],["children",m.Children.toArray(Array.from(a))])]))))]}))})(),qv=(()=>{let a,i,o,u,p;return H("Opened",`Daisy.dropdown [\r
    dropdown.open'\r
    prop.children [\r
        Daisy.button.button [\r
            button.primary\r
            prop.text "Opened"\r
        ]\r
        Daisy.dropdownContent [\r
            prop.className "p-2 shadow menu bg-base-100 rounded-box w-52"\r
            prop.tabIndex 0\r
            prop.children [\r
                Html.li [Html.a [prop.text "Item 1"]]\r
                Html.li [Html.a [prop.text "Item 2"]]\r
                Html.li [Html.a [prop.text "Item 3"]]\r
            ]\r
        ]\r
    ]\r
]\r
`,l.createElement("div",h(b("dropdown",d([["className","dropdown-open"],(a=[l.createElement("button",h(b("btn",d([["className","btn-primary"],["children","Opened"]])))),l.createElement("ul",h(b("dropdown-content",d([["className","p-2 shadow menu bg-base-100 rounded-box w-52"],["tabIndex",0],(i=[(o=v(l.createElement("a",{children:"Item 1"})),l.createElement("li",{children:m.Children.toArray(Array.from(o))})),(u=v(l.createElement("a",{children:"Item 2"})),l.createElement("li",{children:m.Children.toArray(Array.from(u))})),(p=v(l.createElement("a",{children:"Item 3"})),l.createElement("li",{children:m.Children.toArray(Array.from(p))}))],["children",m.Children.toArray(Array.from(i))])]))))],["children",m.Children.toArray(Array.from(a))])])))))})(),Lv=(()=>{let a;return H("Directions",`let dirs = [\r
    dropdown.left , "left" , button.primary\r
    dropdown.end' , "end"  , button.secondary\r
    dropdown.top  , "top"  , button.accent\r
    dropdown.right, "right", button.success\r
]\r
\r
Html.div [\r
    for dir, dirText, buttonColor in dirs do\r
        Daisy.dropdown [\r
            dir\r
            prop.children [\r
                Daisy.button.button [\r
                    buttonColor\r
                    prop.text dirText\r
                ]\r
                Daisy.dropdownContent [\r
                    prop.className "p-2 shadow menu bg-base-100 rounded-box w-52"\r
                    prop.tabIndex 0\r
                    prop.children [\r
                        Html.li [Html.a [prop.text "Item 1"]]\r
                        Html.li [Html.a [prop.text "Item 2"]]\r
                        Html.li [Html.a [prop.text "Item 3"]]\r
                    ]\r
                ]\r
            ]\r
        ]\r
]`,(a=we(ee(()=>Xe(o=>{let u,p,y,E,w;return ue(l.createElement("div",h(b("dropdown",d([o[0],(u=[l.createElement("button",h(b("btn",d([o[2],["children",o[1]]])))),l.createElement("ul",h(b("dropdown-content",d([["className","p-2 shadow menu bg-base-100 rounded-box w-52"],["tabIndex",0],(p=[(y=v(l.createElement("a",{children:"Item 1"})),l.createElement("li",{children:m.Children.toArray(Array.from(y))})),(E=v(l.createElement("a",{children:"Item 2"})),l.createElement("li",{children:m.Children.toArray(Array.from(E))})),(w=v(l.createElement("a",{children:"Item 3"})),l.createElement("li",{children:m.Children.toArray(Array.from(w))}))],["children",m.Children.toArray(Array.from(p))])]))))],["children",m.Children.toArray(Array.from(u))])])))))},[[["className","dropdown-left"],"left",["className","btn-primary"]],[["className","dropdown-end"],"end",["className","btn-secondary"]],[["className","dropdown-top"],"top",["className","btn-accent"]],[["className","dropdown-right"],"right",["className","btn-success"]]]))),l.createElement("div",{children:m.Children.toArray(Array.from(a))})))})();function Gv(){return l.createElement(l.Fragment,{},Uv,Bv,qv,Lv)}const Vv=(()=>{let a;return H("With label and legend",`Daisy.fieldset [\r
    prop.className "bg-base-200 border border-base-300 rounded-box p-4"\r
\r
    prop.children [\r
        Daisy.fieldsetLegend "Page title"\r
        Daisy.input [ prop.placeholder "My awesome page" ]\r
        Daisy.fieldsetLabel "You can edit page title later on from settings"\r
    ]\r
]`,l.createElement("div",{children:[l.createElement("fieldset",h(b("fieldset",d([["className","bg-base-200 border border-base-300 rounded-box p-4"],(a=[l.createElement("legend",{className:"fieldset-legend",children:"Page title"}),l.createElement("input",h(b("input",d([["type","text"],["placeholder","My awesome page"]])))),l.createElement("label",{className:"fieldset-label",children:"You can edit page title later on from settings"})],["children",m.Children.toArray(Array.from(a))])]))))]}))})(),jv=(()=>{let a;return H("Multiple inputs",`Daisy.fieldset [\r
    prop.className "bg-base-200 border border-base-300 rounded-box p-4"\r
\r
    prop.children [\r
        Daisy.fieldsetLegend "Page details"\r
        Daisy.fieldsetLabel "Title"\r
        Daisy.input [ prop.placeholder "My awesome page" ]\r
        Daisy.fieldsetLabel "Slug"\r
        Daisy.input [ prop.placeholder "my-awesome-page" ]\r
        Daisy.fieldsetLabel "Author"\r
        Daisy.input [ prop.placeholder "Name" ]\r
    ]\r
]`,l.createElement("div",{children:[l.createElement("fieldset",h(b("fieldset",d([["className","bg-base-200 border border-base-300 rounded-box p-4"],(a=[l.createElement("legend",{className:"fieldset-legend",children:"Page details"}),l.createElement("label",{className:"fieldset-label",children:"Title"}),l.createElement("input",h(b("input",d([["type","text"],["placeholder","My awesome page"]])))),l.createElement("label",{className:"fieldset-label",children:"Slug"}),l.createElement("input",h(b("input",d([["type","text"],["placeholder","my-awesome-page"]])))),l.createElement("label",{className:"fieldset-label",children:"Author"}),l.createElement("input",h(b("input",d([["type","text"],["placeholder","Name"]]))))],["children",m.Children.toArray(Array.from(a))])]))))]}))})(),Yv=(()=>{let a,i;return H("With joined items",`Daisy.fieldset [\r
    prop.className "bg-base-200 border border-base-300 rounded-box p-4"\r
\r
    prop.children [\r
        Daisy.fieldsetLegend "Settings"\r
        Daisy.join [\r
            Daisy.input [\r
                join.item\r
                prop.text "Product name"\r
            ]\r
            Daisy.button.button [\r
                join.item\r
                prop.text "Save"\r
            ]\r
        ]\r
    ]\r
]`,l.createElement("div",{children:[l.createElement("fieldset",h(b("fieldset",d([["className","bg-base-200 border border-base-300 rounded-box p-4"],(a=[l.createElement("legend",{className:"fieldset-legend",children:"Settings"}),(i=d([l.createElement("input",h(b("input",d([["type","text"],["className","join-item"],["placeholder","Product name"]])))),l.createElement("button",h(b("btn",d([["className","join-item"],["children","Save"]]))))]),l.createElement("div",{className:"join",children:m.Children.toArray(Array.from(i))}))],["children",m.Children.toArray(Array.from(a))])]))))]}))})();function Qv(){return l.createElement(l.Fragment,{},Vv,jv,Yv)}const Xv=(()=>{let a;return H("As form",`Daisy.filter.form [\r
    Daisy.button.value [ prop.text "x" ]\r
    Daisy.button.radio [ prop.name "frameworks"; prop.ariaLabel "Svelte" ]\r
    Daisy.button.radio [ prop.name "frameworks"; prop.ariaLabel "Vue" ]\r
    Daisy.button.radio [ prop.name "frameworks"; prop.ariaLabel "React" ]\r
]`,(a=d([l.createElement("input",h(b("btn",d([["type","reset"],["value","x"]])))),l.createElement("input",h(b("btn",d([["type","radio"],["name","frameworks"],["aria-label","Svelte"]])))),l.createElement("input",h(b("btn",d([["type","radio"],["name","frameworks"],["aria-label","Vue"]])))),l.createElement("input",h(b("btn",d([["type","radio"],["name","frameworks"],["aria-label","React"]]))))]),l.createElement("form",{className:"filter",children:m.Children.toArray(Array.from(a))})))})(),Zv=(()=>{let a;return H("As div",`Daisy.filter.div [\r
    Daisy.filterReset [ prop.name "frameworks2" ]\r
    Daisy.button.radio [ prop.name "frameworks2"; prop.ariaLabel "Svelte" ]\r
    Daisy.button.radio [ prop.name "frameworks2"; prop.ariaLabel "Vue" ]\r
    Daisy.button.radio [ prop.name "frameworks2"; prop.ariaLabel "React" ]\r
]`,(a=d([l.createElement("input",h(b("btn filter-reset",d([["type","radio"],["name","frameworks2"]])))),l.createElement("input",h(b("btn",d([["type","radio"],["name","frameworks2"],["aria-label","Svelte"]])))),l.createElement("input",h(b("btn",d([["type","radio"],["name","frameworks2"],["aria-label","Vue"]])))),l.createElement("input",h(b("btn",d([["type","radio"],["name","frameworks2"],["aria-label","React"]]))))]),l.createElement("div",{className:"filter",children:m.Children.toArray(Array.from(a))})))})();function Kv(){return l.createElement(l.Fragment,{},Xv,Zv)}const Fv=(()=>{let a,i,o,u;return H("Simple, horizontal",`Daisy.footer [\r
    footer.horizontal\r
    prop.className "p-10 bg-neutral text-neutral-content"\r
    prop.children [\r
        Html.div [\r
            Daisy.footerTitle "Services"\r
            Daisy.link [link.hover; prop.text "Branding"]\r
            Daisy.link [link.hover; prop.text "Design"]\r
            Daisy.link [link.hover; prop.text "Marketing"]\r
            Daisy.link [link.hover; prop.text "Advertisement"]\r
        ]\r
        Html.div [\r
            Daisy.footerTitle "Company"\r
            Daisy.link [link.hover; prop.text "About us"]\r
            Daisy.link [link.hover; prop.text "Contact"]\r
            Daisy.link [link.hover; prop.text "Jobs"]\r
            Daisy.link [link.hover; prop.text "Press kit"]\r
        ]\r
        Html.div [\r
            Daisy.footerTitle "Legal"\r
            Daisy.link [link.hover; prop.text "Legal"]\r
            Daisy.link [link.hover; prop.text "Terms of use"]\r
            Daisy.link [link.hover; prop.text "Privacy policy"]\r
            Daisy.link [link.hover; prop.text "Cookie policy"]\r
        ]\r
    ]\r
]`,l.createElement("div",{children:[l.createElement("footer",h(b("footer",d([["className","footer-horizontal"],["className","p-10 bg-neutral text-neutral-content"],(a=[(i=d([l.createElement("span",{className:"footer-title",children:"Services"}),l.createElement("a",h(b("link",d([["className","link-hover"],["children","Branding"]])))),l.createElement("a",h(b("link",d([["className","link-hover"],["children","Design"]])))),l.createElement("a",h(b("link",d([["className","link-hover"],["children","Marketing"]])))),l.createElement("a",h(b("link",d([["className","link-hover"],["children","Advertisement"]]))))]),l.createElement("div",{children:m.Children.toArray(Array.from(i))})),(o=d([l.createElement("span",{className:"footer-title",children:"Company"}),l.createElement("a",h(b("link",d([["className","link-hover"],["children","About us"]])))),l.createElement("a",h(b("link",d([["className","link-hover"],["children","Contact"]])))),l.createElement("a",h(b("link",d([["className","link-hover"],["children","Jobs"]])))),l.createElement("a",h(b("link",d([["className","link-hover"],["children","Press kit"]]))))]),l.createElement("div",{children:m.Children.toArray(Array.from(o))})),(u=d([l.createElement("span",{className:"footer-title",children:"Legal"}),l.createElement("a",h(b("link",d([["className","link-hover"],["children","Legal"]])))),l.createElement("a",h(b("link",d([["className","link-hover"],["children","Terms of use"]])))),l.createElement("a",h(b("link",d([["className","link-hover"],["children","Privacy policy"]])))),l.createElement("a",h(b("link",d([["className","link-hover"],["children","Cookie policy"]]))))]),l.createElement("div",{children:m.Children.toArray(Array.from(u))}))],["children",m.Children.toArray(Array.from(a))])]))))]}))})();function Jv(){return l.createElement(l.Fragment,{},Fv)}const $v=(()=>{let a,i,o,u;return H("Advanced",`Daisy.hero [\r
    prop.className "min-h-screen"\r
    prop.style [style.backgroundImageUrl "https://picsum.photos/id/1005/1600/1400"]\r
    prop.children [\r
        Html.div [prop.className "hero-overlay bg-opacity-60"]\r
        Daisy.heroContent [\r
            prop.className "text-center text-neutral-content"\r
            prop.children [\r
                Html.div [\r
                    prop.className "max-w-md"\r
                    prop.children [\r
                        Html.h1 [prop.className "mb-5 text-5xl font-bold"; prop.text "Hello there"]\r
                        Html.p "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."\r
                        Daisy.button.button [button.primary; prop.text "Get Started"]\r
                    ]\r
                ]\r
            ]\r
        ]\r
    ]\r
]`,l.createElement("div",{children:[l.createElement("div",h(b("hero",d([["className","min-h-screen"],["style",{backgroundImage:"url('https://picsum.photos/id/1005/1600/1400')"}],(a=[l.createElement("div",{className:"hero-overlay bg-opacity-60"}),l.createElement("div",h(b("hero-content",d([["className","text-center text-neutral-content"],(i=[l.createElement("div",h(d([["className","max-w-md"],(o=[l.createElement("h1",{className:"mb-5 text-5xl font-bold",children:"Hello there"}),(u="Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.",l.createElement("p",{children:[u]})),l.createElement("button",h(b("btn",d([["className","btn-primary"],["children","Get Started"]]))))],["children",m.Children.toArray(Array.from(o))])])))],["children",m.Children.toArray(Array.from(i))])]))))],["children",m.Children.toArray(Array.from(a))])]))))]}))})();function Wv(){return l.createElement(l.Fragment,{},$v)}const Iv=(()=>{let a;return H("Simple",`Daisy.indicator [\r
    Daisy.indicatorItem [\r
        prop.className "badge badge-secondary"\r
        prop.text "New"\r
    ]\r
    Html.div [\r
        prop.className "grid w-32 h-32 bg-base-300 place-items-center"\r
        prop.text "Content"\r
    ]\r
]`,(a=d([l.createElement("div",h(b("indicator-item",d([["className","badge badge-secondary"],["children","New"]])))),l.createElement("div",{className:"grid w-32 h-32 bg-base-300 place-items-center",children:"Content"})]),l.createElement("div",{className:"indicator",children:m.Children.toArray(Array.from(a))})))})(),Pv=(()=>{let a;return H("Button",`Daisy.indicator [\r
    Daisy.indicatorItem [prop.text "99+"; prop.className "badge"]\r
    Daisy.button.button [button.primary; prop.text "Inbox"]\r
]`,(a=d([l.createElement("div",h(b("indicator-item",d([["children","99+"],["className","badge"]])))),l.createElement("button",h(b("btn",d([["className","btn-primary"],["children","Inbox"]]))))]),l.createElement("div",{className:"indicator",children:m.Children.toArray(Array.from(a))})))})(),eE=(()=>{let a,i;return H("Avatar",`Daisy.indicator [\r
    prop.className "avatar"\r
    prop.children [\r
        Daisy.indicatorItem [prop.text "typing..."; prop.className "badge"]\r
        Html.div [\r
            prop.className "w-24 h-24 rounded-btn"\r
            prop.children [\r
                Html.img [prop.src "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"]\r
            ]\r
        ]\r
    ]\r
]`,l.createElement("div",h(b("indicator",d([["className","avatar"],(a=[l.createElement("div",h(b("indicator-item",d([["children","typing..."],["className","badge"]])))),l.createElement("div",h(d([["className","w-24 h-24 rounded-btn"],(i=[l.createElement("img",{src:"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"})],["children",m.Children.toArray(Array.from(i))])])))],["children",m.Children.toArray(Array.from(a))])])))))})(),tE=(()=>{let a;return H("All Positions",`Daisy.indicator [\r
    prop.className "m-6"\r
    prop.children [\r
        Daisy.indicatorItem [indicator.top;    indicator.start ; badge.secondary; prop.className "badge"; prop.text "1"]\r
        Daisy.indicatorItem [indicator.top;    indicator.center; badge.secondary; prop.className "badge"; prop.text "2"]\r
        Daisy.indicatorItem [indicator.top;    indicator.end'  ; badge.secondary; prop.className "badge"; prop.text "3"]\r
        Daisy.indicatorItem [indicator.middle; indicator.start ; badge.secondary; prop.className "badge"; prop.text "4"]\r
        Daisy.indicatorItem [indicator.middle; indicator.center; badge.secondary; prop.className "badge"; prop.text "5"]\r
        Daisy.indicatorItem [indicator.middle; indicator.end'  ; badge.secondary; prop.className "badge"; prop.text "6"]\r
        Daisy.indicatorItem [indicator.bottom; indicator.start ; badge.secondary; prop.className "badge"; prop.text "7"]\r
        Daisy.indicatorItem [indicator.bottom; indicator.center; badge.secondary; prop.className "badge"; prop.text "8"]\r
        Daisy.indicatorItem [indicator.bottom; indicator.end'  ; badge.secondary; prop.className "badge"; prop.text "9"]\r
        Html.div [prop.className "grid w-32 h-32 bg-base-300 place-items-center"]\r
    ]\r
]`,l.createElement("div",{children:[l.createElement("div",h(b("indicator",d([["className","m-6"],(a=[l.createElement("div",h(b("indicator-item",d([["className","indicator-top"],["className","indicator-start"],["className","badge-secondary"],["className","badge"],["children","1"]])))),l.createElement("div",h(b("indicator-item",d([["className","indicator-top"],["className","indicator-center"],["className","badge-secondary"],["className","badge"],["children","2"]])))),l.createElement("div",h(b("indicator-item",d([["className","indicator-top"],["className","indicator-end"],["className","badge-secondary"],["className","badge"],["children","3"]])))),l.createElement("div",h(b("indicator-item",d([["className","indicator-middle"],["className","indicator-start"],["className","badge-secondary"],["className","badge"],["children","4"]])))),l.createElement("div",h(b("indicator-item",d([["className","indicator-middle"],["className","indicator-center"],["className","badge-secondary"],["className","badge"],["children","5"]])))),l.createElement("div",h(b("indicator-item",d([["className","indicator-middle"],["className","indicator-end"],["className","badge-secondary"],["className","badge"],["children","6"]])))),l.createElement("div",h(b("indicator-item",d([["className","indicator-bottom"],["className","indicator-start"],["className","badge-secondary"],["className","badge"],["children","7"]])))),l.createElement("div",h(b("indicator-item",d([["className","indicator-bottom"],["className","indicator-center"],["className","badge-secondary"],["className","badge"],["children","8"]])))),l.createElement("div",h(b("indicator-item",d([["className","indicator-bottom"],["className","indicator-end"],["className","badge-secondary"],["className","badge"],["children","9"]])))),l.createElement("div",{className:"grid w-32 h-32 bg-base-300 place-items-center"})],["children",m.Children.toArray(Array.from(a))])]))))]}))})();function nE(){return l.createElement(l.Fragment,{},Iv,Pv,eE,tE)}const rE=(()=>{let a,i;return H("Join is the new ButtonGroup",`Html.div [\r
    Daisy.join [\r
        Daisy.button.button [\r
            button.primary\r
            join.item // note here\r
            prop.text "A"\r
        ]\r
        Daisy.button.button [\r
            button.secondary\r
            join.item // note here\r
            prop.text "B"\r
        ]\r
        Daisy.button.button [\r
            button.warning\r
            join.item // note here\r
            prop.text "C"\r
        ]\r
    ]\r
]`,(a=v((i=d([l.createElement("button",h(b("btn",d([["className","btn-primary"],["className","join-item"],["children","A"]])))),l.createElement("button",h(b("btn",d([["className","btn-secondary"],["className","join-item"],["children","B"]])))),l.createElement("button",h(b("btn",d([["className","btn-warning"],["className","join-item"],["children","C"]]))))]),l.createElement("div",{className:"join",children:m.Children.toArray(Array.from(i))}))),l.createElement("div",{children:m.Children.toArray(Array.from(a))})))})();function lE(){return l.createElement(l.Fragment,{},rE)}const aE=H("Single",'Daisy.kbd "a" ',l.createElement("div",{children:[l.createElement("kbd",{className:"kbd",children:"a"})]})),iE=H("Sizes",`for size in [kbd.lg; kbd.md; kbd.sm; kbd.xs] do\r
    Daisy.kbd [size; prop.text "shift"]`,(()=>{const a=we(ee(()=>dn(i=>l.createElement("kbd",h(b("kbd",d([i,["children","shift"]])))),[["className","kbd-lg"],["className","kbd-md"],["className","kbd-sm"],["className","kbd-xs"]])));return l.createElement("div",{children:m.Children.toArray(Array.from(a))})})()),cE=H("Key Combination",`Daisy.kbd "ctrl"\r
Html.span "+"\r
Daisy.kbd "shift"\r
Html.span "+"\r
Daisy.kbd "del" `,(()=>{const a=d([l.createElement("kbd",{className:"kbd",children:"ctrl"}),l.createElement("span",{children:["+"]}),l.createElement("kbd",{className:"kbd",children:"shift"}),l.createElement("span",{children:["+"]}),l.createElement("kbd",{className:"kbd",children:"del"})]);return l.createElement("div",{children:m.Children.toArray(Array.from(a))})})());function sE(){return l.createElement(l.Fragment,{},aE,iE,cE)}const oE=H("Label for input",`Daisy.label.input [\r
    Daisy.label "https://"\r
    Html.input [ prop.placeholder "URL" ]\r
]`,(()=>{const a=d([l.createElement("span",{className:"label",children:"https://"}),l.createElement("input",{placeholder:"URL"})]);return l.createElement("label",{className:"input",children:m.Children.toArray(Array.from(a))})})()),uE=H("Label for input at the end",`Daisy.label.input [\r
    Html.input [ prop.placeholder "domain name" ]\r
    Daisy.label ".com"\r
] `,(()=>{const a=d([l.createElement("input",{placeholder:"domain name"}),l.createElement("span",{className:"label",children:".com"})]);return l.createElement("label",{className:"input",children:m.Children.toArray(Array.from(a))})})()),dE=(()=>{let a,i;return H("Label for select",`Daisy.label.select [\r
    Daisy.label "Type"\r
    Html.select [\r
        Html.option "Personal"\r
        Html.option "Business"\r
    ]\r
]`,(a=d([l.createElement("span",{className:"label",children:"Type"}),(i=d([l.createElement("option",{children:["Personal"]}),l.createElement("option",{children:["Business"]})]),l.createElement("select",{children:m.Children.toArray(Array.from(i))}))]),l.createElement("label",{className:"select",children:m.Children.toArray(Array.from(a))})))})(),mE=(()=>{let a;return H("Floating label",`Daisy.floatingLabel [\r
    Html.span "Your email"\r
    Daisy.input [ prop.placeholder "mail@site.com" ]\r
]`,(a=d([l.createElement("span",{children:["Your email"]}),l.createElement("input",h(b("input",d([["type","text"],["placeholder","mail@site.com"]]))))]),l.createElement("label",{className:"floating-label",children:m.Children.toArray(Array.from(a))})))})(),fE=(()=>{let a,i,o,u,p,y;return H("Floating label with different sizes",`Html.div [\r
    prop.className "flex flex-col gap-4"\r
\r
    prop.children [\r
        Daisy.floatingLabel [\r
            Daisy.input [ input.xs; prop.placeholder "xs" ]\r
            Html.span "xs"\r
        ]\r
        Daisy.floatingLabel [\r
            Daisy.input [ input.sm; prop.placeholder "sm" ]\r
            Html.span "sm"\r
        ]\r
        Daisy.floatingLabel [\r
            Daisy.input [ input.md; prop.placeholder "md" ]\r
            Html.span "md"\r
        ]\r
        Daisy.floatingLabel [\r
            Daisy.input [ input.lg; prop.placeholder "lg" ]\r
            Html.span "xl"\r
        ]\r
        Daisy.floatingLabel [\r
            Daisy.input [ input.xl; prop.placeholder "xl" ]\r
            Html.span "xl"\r
        ]\r
    ]\r
]`,l.createElement("div",{children:[l.createElement("div",h(d([["className","flex flex-col gap-4"],(a=[(i=d([l.createElement("input",h(b("input",d([["type","text"],["className","input-xs"],["placeholder","xs"]])))),l.createElement("span",{children:["xs"]})]),l.createElement("label",{className:"floating-label",children:m.Children.toArray(Array.from(i))})),(o=d([l.createElement("input",h(b("input",d([["type","text"],["className","input-sm"],["placeholder","sm"]])))),l.createElement("span",{children:["sm"]})]),l.createElement("label",{className:"floating-label",children:m.Children.toArray(Array.from(o))})),(u=d([l.createElement("input",h(b("input",d([["type","text"],["className","input-md"],["placeholder","md"]])))),l.createElement("span",{children:["md"]})]),l.createElement("label",{className:"floating-label",children:m.Children.toArray(Array.from(u))})),(p=d([l.createElement("input",h(b("input",d([["type","text"],["className","input-lg"],["placeholder","lg"]])))),l.createElement("span",{children:["lg"]})]),l.createElement("label",{className:"floating-label",children:m.Children.toArray(Array.from(p))})),(y=d([l.createElement("input",h(b("input",d([["type","text"],["className","input-xl"],["placeholder","xl"]])))),l.createElement("span",{children:["xl"]})]),l.createElement("label",{className:"floating-label",children:m.Children.toArray(Array.from(y))}))],["children",m.Children.toArray(Array.from(a))])])))]}))})();function hE(){return l.createElement(l.Fragment,{},oE,uE,dE,mE,fE)}const pE=H("Basic",'Daisy.link "This is a link" ',l.createElement("div",{children:[l.createElement("a",{className:"link",children:"This is a link"})]})),yE=H("Color",`Daisy.link [\r
    link.secondary\r
    prop.text "This is a link"\r
]`,l.createElement("div",{children:[l.createElement("a",h(b("link",d([["className","link-secondary"],["children","This is a link with color"]]))))]})),bE=H("Hover",`Daisy.link [\r
    link.hover\r
    link.accent\r
    prop.text "This is a link"\r
]\r
`,l.createElement("div",{children:[l.createElement("a",h(b("link",d([["className","link-hover"],["className","link-accent"],["children","This is a link color and hover"]]))))]})),gE=(()=>{let a;return H("Colors",`Html.ol [\r
    let colors =\r
        [ link.primary  , "primary"\r
          link.secondary, "secondary"\r
          link.accent   , "accent"\r
          link.neutral  , "neutral" ]\r
\r
    for color, text in colors do\r
        Html.li [Daisy.link [color; prop.text text]]\r
]`,l.createElement("div",{children:[(a=we(ee(()=>Xe(o=>{let u;return ue((u=v(l.createElement("a",h(b("link",d([o[0],["children",o[1]]]))))),l.createElement("li",{children:m.Children.toArray(Array.from(u))})))},[[["className","link-primary"],"primary"],[["className","link-secondary"],"secondary"],[["className","link-accent"],"accent"],[["className","link-neutral"],"neutral"]]))),l.createElement("ol",{children:m.Children.toArray(Array.from(a))}))]}))})();function vE(){return l.createElement(l.Fragment,{},pE,yE,bE,gE)}const EE=(()=>{let a,i,o,u,p,y,E,w,D,N,z,M,q,B,Q,Z,W,ge,ce;return H("List (third column grows)",`Daisy.list [\r
    prop.className "bg-base-100 rounded-box shadow-md"\r
\r
    prop.children [\r
        Html.li [\r
            prop.className "p-4 pb-2 text-xs opacity-60 tracking-wide"\r
            prop.text "Most played songs this week"\r
        ]\r
\r
        Daisy.listRow [\r
            Html.div [\r
                prop.className "text-4xl font-thin opacity-30 tabular-nums"\r
                prop.text "01"\r
            ]\r
            Html.div [\r
                Html.img [\r
                    prop.className "size-10 rounded-box"\r
                    prop.src "https://img.daisyui.com/images/profile/demo/1@94.webp"\r
                ]\r
            ]\r
            Html.div [\r
                list.colGrow\r
\r
                prop.children [\r
                    Html.div "Dio Lupa"\r
                    Html.div [\r
                        prop.className "text-xs uppercase font-semibold opacity-60"\r
                        prop.text "Remaining Reason"\r
                    ]\r
                ]\r
            ]\r
            Daisy.button.button [\r
                button.ghost\r
                button.square\r
\r
                prop.children [\r
                    Svg.svg [\r
                        svg.className "size-[1.2em]"\r
                        svg.viewBox (0, 0, 24, 24)\r
\r
                        svg.children [\r
                            Svg.g [\r
                                svg.strokeLineJoin "round"\r
                                svg.strokeLineCap "round"\r
                                svg.strokeWidth 2\r
                                svg.fill "none"\r
                                svg.stroke "currentColor"\r
\r
                                svg.children [\r
                                    Svg.path [ svg.d "M6 3L20 12 6 21 6 3z" ]\r
                                ]\r
                            ]\r
                        ]\r
                    ]\r
                ]\r
            ]                    \r
        ]\r
\r
        Daisy.listRow [\r
            Html.div [\r
                prop.className "text-4xl font-thin opacity-30 tabular-nums"\r
                prop.text "02"\r
            ]\r
            Html.div [\r
                Html.img [\r
                    prop.className "size-10 rounded-box"\r
                    prop.src "https://img.daisyui.com/images/profile/demo/4@94.webp"\r
                ]\r
            ]\r
            Html.div [\r
                list.colGrow\r
\r
                prop.children [\r
                    Html.div "Ellie Beilish"\r
                    Html.div [\r
                        prop.className "text-xs uppercase font-semibold opacity-60"\r
                        prop.text "Bears of a fever"\r
                    ]\r
                ]\r
            ]\r
            Daisy.button.button [\r
                button.ghost\r
                button.square\r
\r
                prop.children [\r
                    Svg.svg [\r
                        svg.className "size-[1.2em]"\r
                        svg.viewBox (0, 0, 24, 24)\r
\r
                        svg.children [\r
                            Svg.g [\r
                                svg.strokeLineJoin "round"\r
                                svg.strokeLineCap "round"\r
                                svg.strokeWidth 2\r
                                svg.fill "none"\r
                                svg.stroke "currentColor"\r
\r
                                svg.children [\r
                                    Svg.path [ svg.d "M6 3L20 12 6 21 6 3z" ]\r
                                ]\r
                            ]\r
                        ]\r
                    ]\r
                ]\r
            ]                    \r
        ]\r
\r
        Daisy.listRow [\r
            Html.div [\r
                prop.className "text-4xl font-thin opacity-30 tabular-nums"\r
                prop.text "03"\r
            ]\r
            Html.div [\r
                Html.img [\r
                    prop.className "size-10 rounded-box"\r
                    prop.src "https://img.daisyui.com/images/profile/demo/3@94.webp"\r
                ]\r
            ]\r
            Html.div [\r
                list.colGrow\r
\r
                prop.children [\r
                    Html.div "Sabrino Gardener"\r
                    Html.div [\r
                        prop.className "text-xs uppercase font-semibold opacity-60"\r
                        prop.text "Cappuccino"\r
                    ]\r
                ]\r
            ]\r
            Daisy.button.button [\r
                button.ghost\r
                button.square\r
\r
                prop.children [\r
                    Svg.svg [\r
                        svg.className "size-[1.2em]"\r
                        svg.viewBox (0, 0, 24, 24)\r
\r
                        svg.children [\r
                            Svg.g [\r
                                svg.strokeLineJoin "round"\r
                                svg.strokeLineCap "round"\r
                                svg.strokeWidth 2\r
                                svg.fill "none"\r
                                svg.stroke "currentColor"\r
\r
                                svg.children [\r
                                    Svg.path [ svg.d "M6 3L20 12 6 21 6 3z" ]\r
                                ]\r
                            ]\r
                        ]\r
                    ]\r
                ]\r
            ]                    \r
        ]\r
    ]\r
]`,l.createElement("div",{children:[l.createElement("ul",h(b("list",d([["className","bg-base-100 rounded-box shadow-md"],(a=[l.createElement("li",{className:"p-4 pb-2 text-xs opacity-60 tracking-wide",children:"Most played songs this week"}),(i=d([l.createElement("div",{className:"text-4xl font-thin opacity-30 tabular-nums",children:"01"}),(o=v(l.createElement("img",{className:"size-10 rounded-box",src:"https://img.daisyui.com/images/profile/demo/1@94.webp"})),l.createElement("div",{children:m.Children.toArray(Array.from(o))})),l.createElement("div",h(d([["className","list-col-grow"],(u=[l.createElement("div",{children:["Dio Lupa"]}),l.createElement("div",{className:"text-xs uppercase font-semibold opacity-60",children:"Remaining Reason"})],["children",m.Children.toArray(Array.from(u))])]))),l.createElement("button",h(b("btn",d([["className","btn-ghost"],["className","btn-square"],(p=[l.createElement("svg",h(d([["className","size-[1.2em]"],["viewBox","0 0 24 24"],(y=v(l.createElement("g",h(d([["strokeLinejoin","round"],["strokeLinecap","round"],["strokeWidth",2],["fill","none"],["stroke","currentColor"],(E=v(l.createElement("path",{d:"M6 3L20 12 6 21 6 3z"})),["children",m.Children.toArray(Array.from(E))])])))),["children",m.Children.toArray(Array.from(y))])])))],["children",m.Children.toArray(Array.from(p))])]))))]),l.createElement("li",{className:"list-row",children:m.Children.toArray(Array.from(i))})),(w=d([l.createElement("div",{className:"text-4xl font-thin opacity-30 tabular-nums",children:"02"}),(D=v(l.createElement("img",{className:"size-10 rounded-box",src:"https://img.daisyui.com/images/profile/demo/4@94.webp"})),l.createElement("div",{children:m.Children.toArray(Array.from(D))})),l.createElement("div",h(d([["className","list-col-grow"],(N=[l.createElement("div",{children:["Ellie Beilish"]}),l.createElement("div",{className:"text-xs uppercase font-semibold opacity-60",children:"Bears of a fever"})],["children",m.Children.toArray(Array.from(N))])]))),l.createElement("button",h(b("btn",d([["className","btn-ghost"],["className","btn-square"],(z=[l.createElement("svg",h(d([["className","size-[1.2em]"],["viewBox","0 0 24 24"],(M=v(l.createElement("g",h(d([["strokeLinejoin","round"],["strokeLinecap","round"],["strokeWidth",2],["fill","none"],["stroke","currentColor"],(q=v(l.createElement("path",{d:"M6 3L20 12 6 21 6 3z"})),["children",m.Children.toArray(Array.from(q))])])))),["children",m.Children.toArray(Array.from(M))])])))],["children",m.Children.toArray(Array.from(z))])]))))]),l.createElement("li",{className:"list-row",children:m.Children.toArray(Array.from(w))})),(B=d([l.createElement("div",{className:"text-4xl font-thin opacity-30 tabular-nums",children:"03"}),(Q=v(l.createElement("img",{className:"size-10 rounded-box",src:"https://img.daisyui.com/images/profile/demo/3@94.webp"})),l.createElement("div",{children:m.Children.toArray(Array.from(Q))})),l.createElement("div",h(d([["className","list-col-grow"],(Z=[l.createElement("div",{children:["Sabrino Gardener"]}),l.createElement("div",{className:"text-xs uppercase font-semibold opacity-60",children:"Cappuccino"})],["children",m.Children.toArray(Array.from(Z))])]))),l.createElement("button",h(b("btn",d([["className","btn-ghost"],["className","btn-square"],(W=[l.createElement("svg",h(d([["className","size-[1.2em]"],["viewBox","0 0 24 24"],(ge=v(l.createElement("g",h(d([["strokeLinejoin","round"],["strokeLinecap","round"],["strokeWidth",2],["fill","none"],["stroke","currentColor"],(ce=v(l.createElement("path",{d:"M6 3L20 12 6 21 6 3z"})),["children",m.Children.toArray(Array.from(ce))])])))),["children",m.Children.toArray(Array.from(ge))])])))],["children",m.Children.toArray(Array.from(W))])]))))]),l.createElement("li",{className:"list-row",children:m.Children.toArray(Array.from(B))}))],["children",m.Children.toArray(Array.from(a))])]))))]}))})(),AE=(()=>{let a,i,o,u,p,y,E,w,D,N,z,M,q,B,Q,Z,W,ge,ce,ze,Be,se;return H("List (third column wraps to next row)",`Daisy.list [\r
    prop.className "bg-base-100 rounded-box shadow-md"\r
\r
    prop.children [\r
        Html.li [\r
            prop.className "p-4 pb-2 text-xs opacity-60 tracking-wide"\r
            prop.text "Most played songs this week"\r
        ]\r
\r
        Daisy.listRow [\r
            Html.div [\r
                Html.img [\r
                    prop.className "size-10 rounded-box"\r
                    prop.src "https://img.daisyui.com/images/profile/demo/1@94.webp"\r
                ]\r
            ]\r
            Html.div [\r
                Html.div "Dio Lupa"\r
                Html.div [\r
                    prop.className "text-xs uppercase font-semibold opacity-60"\r
                    prop.text "Remaining Reason"\r
                ]\r
            ]\r
            Html.p [\r
                list.colWrap\r
                prop.text "\\"Remaining Reason\\" became an instant hit, praised for its haunting sound and emotional depth. A viral performance brought it widespread recognition, making it one of Dio Lupa’s most iconic tracks."\r
            ]\r
            Daisy.button.button [\r
                button.ghost\r
                button.square\r
\r
                prop.children [\r
                    Svg.svg [\r
                        svg.className "size-[1.2em]"\r
                        svg.viewBox (0, 0, 24, 24)\r
\r
                        svg.children [\r
                            Svg.g [\r
                                svg.strokeLineJoin "round"\r
                                svg.strokeLineCap "round"\r
                                svg.strokeWidth 2\r
                                svg.fill "none"\r
                                svg.stroke "currentColor"\r
\r
                                svg.children [\r
                                    Svg.path [ svg.d "M6 3L20 12 6 21 6 3z" ]\r
                                ]\r
                            ]\r
                        ]\r
                    ]\r
                ]\r
            ]                    \r
        ]\r
\r
        Daisy.listRow [\r
            Html.div [\r
                Html.img [\r
                    prop.className "size-10 rounded-box"\r
                    prop.src "https://img.daisyui.com/images/profile/demo/4@94.webp"\r
                ]\r
            ]\r
            Html.div [\r
                Html.div "Ellie Beilish"\r
                Html.div [\r
                    prop.className "text-xs uppercase font-semibold opacity-60"\r
                    prop.text "Bears of a fever"\r
                ]\r
            ]\r
            Html.p [\r
                list.colWrap\r
                prop.text "\\"Bears of a Fever\\" captivated audiences with its intense energy and mysterious lyrics. Its popularity skyrocketed after fans shared it widely online, earning Ellie critical acclaim."\r
            ]\r
            Daisy.button.button [\r
                button.ghost\r
                button.square\r
\r
                prop.children [\r
                    Svg.svg [\r
                        svg.className "size-[1.2em]"\r
                        svg.viewBox (0, 0, 24, 24)\r
\r
                        svg.children [\r
                            Svg.g [\r
                                svg.strokeLineJoin "round"\r
                                svg.strokeLineCap "round"\r
                                svg.strokeWidth 2\r
                                svg.fill "none"\r
                                svg.stroke "currentColor"\r
\r
                                svg.children [\r
                                    Svg.path [ svg.d "M6 3L20 12 6 21 6 3z" ]\r
                                ]\r
                            ]\r
                        ]\r
                    ]\r
                ]\r
            ]                    \r
        ]\r
\r
        Daisy.listRow [\r
            Html.div [\r
                Html.img [\r
                    prop.className "size-10 rounded-box"\r
                    prop.src "https://img.daisyui.com/images/profile/demo/3@94.webp"\r
                ]\r
            ]\r
            Html.div [\r
                Html.div "Sabrino Gardener"\r
                Html.div [\r
                    prop.className "text-xs uppercase font-semibold opacity-60"\r
                    prop.text "Cappuccino"\r
                ]\r
            ]\r
            Html.p [\r
                list.colWrap\r
                prop.text "\\"Cappuccino\\" quickly gained attention for its smooth melody and relatable themes. The song’s success propelled Sabrino into the spotlight, solidifying their status as a rising star."\r
            ]\r
            Daisy.button.button [\r
                button.ghost\r
                button.square\r
\r
                prop.children [\r
                    Svg.svg [\r
                        svg.className "size-[1.2em]"\r
                        svg.viewBox (0, 0, 24, 24)\r
\r
                        svg.children [\r
                            Svg.g [\r
                                svg.strokeLineJoin "round"\r
                                svg.strokeLineCap "round"\r
                                svg.strokeWidth 2\r
                                svg.fill "none"\r
                                svg.stroke "currentColor"\r
\r
                                svg.children [\r
                                    Svg.path [ svg.d "M6 3L20 12 6 21 6 3z" ]\r
                                ]\r
                            ]\r
                        ]\r
                    ]\r
                ]\r
            ]                    \r
        ]\r
    ]\r
]`,l.createElement("div",{children:[l.createElement("ul",h(b("list",d([["className","bg-base-100 rounded-box shadow-md"],(a=[l.createElement("li",{className:"p-4 pb-2 text-xs opacity-60 tracking-wide",children:"Most played songs this week"}),(i=d([(o=v(l.createElement("img",{className:"size-10 rounded-box",src:"https://img.daisyui.com/images/profile/demo/1@94.webp"})),l.createElement("div",{children:m.Children.toArray(Array.from(o))})),(u=d([l.createElement("div",{children:["Dio Lupa"]}),l.createElement("div",{className:"text-xs uppercase font-semibold opacity-60",children:"Remaining Reason"})]),l.createElement("div",{children:m.Children.toArray(Array.from(u))})),l.createElement("p",h(d([["className","list-col-wrap"],(p='"Remaining Reason" became an instant hit, praised for its haunting sound and emotional depth. A viral performance brought it widespread recognition, making it one of Dio Lupa’s most iconic tracks.',["children",p])]))),l.createElement("button",h(b("btn",d([["className","btn-ghost"],["className","btn-square"],(y=[l.createElement("svg",h(d([["className","size-[1.2em]"],["viewBox","0 0 24 24"],(E=v(l.createElement("g",h(d([["strokeLinejoin","round"],["strokeLinecap","round"],["strokeWidth",2],["fill","none"],["stroke","currentColor"],(w=v(l.createElement("path",{d:"M6 3L20 12 6 21 6 3z"})),["children",m.Children.toArray(Array.from(w))])])))),["children",m.Children.toArray(Array.from(E))])])))],["children",m.Children.toArray(Array.from(y))])]))))]),l.createElement("li",{className:"list-row",children:m.Children.toArray(Array.from(i))})),(D=d([(N=v(l.createElement("img",{className:"size-10 rounded-box",src:"https://img.daisyui.com/images/profile/demo/4@94.webp"})),l.createElement("div",{children:m.Children.toArray(Array.from(N))})),(z=d([l.createElement("div",{children:["Ellie Beilish"]}),l.createElement("div",{className:"text-xs uppercase font-semibold opacity-60",children:"Bears of a fever"})]),l.createElement("div",{children:m.Children.toArray(Array.from(z))})),l.createElement("p",h(d([["className","list-col-wrap"],(M='"Bears of a Fever" captivated audiences with its intense energy and mysterious lyrics. Its popularity skyrocketed after fans shared it widely online, earning Ellie critical acclaim.',["children",M])]))),l.createElement("button",h(b("btn",d([["className","btn-ghost"],["className","btn-square"],(q=[l.createElement("svg",h(d([["className","size-[1.2em]"],["viewBox","0 0 24 24"],(B=v(l.createElement("g",h(d([["strokeLinejoin","round"],["strokeLinecap","round"],["strokeWidth",2],["fill","none"],["stroke","currentColor"],(Q=v(l.createElement("path",{d:"M6 3L20 12 6 21 6 3z"})),["children",m.Children.toArray(Array.from(Q))])])))),["children",m.Children.toArray(Array.from(B))])])))],["children",m.Children.toArray(Array.from(q))])]))))]),l.createElement("li",{className:"list-row",children:m.Children.toArray(Array.from(D))})),(Z=d([(W=v(l.createElement("img",{className:"size-10 rounded-box",src:"https://img.daisyui.com/images/profile/demo/3@94.webp"})),l.createElement("div",{children:m.Children.toArray(Array.from(W))})),(ge=d([l.createElement("div",{children:["Sabrino Gardener"]}),l.createElement("div",{className:"text-xs uppercase font-semibold opacity-60",children:"Cappuccino"})]),l.createElement("div",{children:m.Children.toArray(Array.from(ge))})),l.createElement("p",h(d([["className","list-col-wrap"],(ce='"Cappuccino" quickly gained attention for its smooth melody and relatable themes. The song’s success propelled Sabrino into the spotlight, solidifying their status as a rising star.',["children",ce])]))),l.createElement("button",h(b("btn",d([["className","btn-ghost"],["className","btn-square"],(ze=[l.createElement("svg",h(d([["className","size-[1.2em]"],["viewBox","0 0 24 24"],(Be=v(l.createElement("g",h(d([["strokeLinejoin","round"],["strokeLinecap","round"],["strokeWidth",2],["fill","none"],["stroke","currentColor"],(se=v(l.createElement("path",{d:"M6 3L20 12 6 21 6 3z"})),["children",m.Children.toArray(Array.from(se))])])))),["children",m.Children.toArray(Array.from(Be))])])))],["children",m.Children.toArray(Array.from(ze))])]))))]),l.createElement("li",{className:"list-row",children:m.Children.toArray(Array.from(Z))}))],["children",m.Children.toArray(Array.from(a))])]))))]}))})();function NE(){return l.createElement(l.Fragment,{},EE,AE)}const SE=(()=>{let a;return H("Use Loading for cool spinners with different sizes",`Html.div [\r
    Daisy.loading [ loading.spinner; loading.xs ]\r
    Daisy.loading [ loading.spinner; loading.sm ]\r
    Daisy.loading [ loading.spinner; loading.md ]\r
    Daisy.loading [ loading.spinner; loading.lg ]\r
]`,(a=d([l.createElement("span",h(b("loading",d([["className","loading-spinner"],["className","loading-xs"]])))),l.createElement("span",h(b("loading",d([["className","loading-spinner"],["className","loading-sm"]])))),l.createElement("span",h(b("loading",d([["className","loading-spinner"],["className","loading-md"]])))),l.createElement("span",h(b("loading",d([["className","loading-spinner"],["className","loading-lg"]]))))]),l.createElement("div",{children:m.Children.toArray(Array.from(a))})))})(),xE=(()=>{let a;return H("And many others",`Html.div [\r
    Daisy.loading [ loading.dots ]\r
    Daisy.loading [ loading.ring ]\r
    Daisy.loading [ loading.ball ]\r
    Daisy.loading [ loading.bars ]\r
    Daisy.loading [ loading.infinity ]\r
]`,(a=d([l.createElement("span",h(b("loading",v(["className","loading-dots"])))),l.createElement("span",h(b("loading",v(["className","loading-ring"])))),l.createElement("span",h(b("loading",v(["className","loading-ball"])))),l.createElement("span",h(b("loading",v(["className","loading-bars"])))),l.createElement("span",h(b("loading",v(["className","loading-infinity"]))))]),l.createElement("div",{children:m.Children.toArray(Array.from(a))})))})(),CE=(()=>{let a;return H("Fancy colors? Oh yeah!",`Html.div [\r
    Daisy.loading [ loading.dots; color.textAccent ]\r
    Daisy.loading [ loading.ring; color.textWarning ]\r
    Daisy.loading [ loading.ball; color.textSecondary ]\r
    Daisy.loading [ loading.bars; color.textSuccess ]\r
    Daisy.loading [ loading.infinity; color.textError ]\r
]`,(a=d([l.createElement("span",h(b("loading",d([["className","loading-dots"],["className","text-accent"]])))),l.createElement("span",h(b("loading",d([["className","loading-ring"],["className","text-warning"]])))),l.createElement("span",h(b("loading",d([["className","loading-ball"],["className","text-secondary"]])))),l.createElement("span",h(b("loading",d([["className","loading-bars"],["className","text-success"]])))),l.createElement("span",h(b("loading",d([["className","loading-infinity"],["className","text-error"]]))))]),l.createElement("div",{children:m.Children.toArray(Array.from(a))})))})();function DE(){return l.createElement(l.Fragment,{},SE,xE,CE)}const wE=H("Basic Shape",`Html.img [\r
    mask.circle\r
    prop.src "https://picsum.photos/id/1005/200/200"\r
]`,l.createElement("div",{children:[l.createElement("img",{className:"mask mask-circle",src:"https://picsum.photos/id/1005/200/200"})]})),_E=(()=>{let a;return H("All Shapes",`let shapes = [\r
    mask.squircle       , "squircle"\r
    mask.heart          , "heart"\r
    mask.hexagon        , "hexagon"\r
    mask.hexagon2       , "hexagon2"\r
    mask.decagon        , "decagon"\r
    mask.pentagon       , "pentagon"\r
    mask.diamond        , "diamond"\r
    mask.square         , "square"\r
    mask.circle         , "circle"\r
    mask.star           , "star"\r
    mask.star2          , "star2"\r
    mask.triangle       , "triangle"\r
    mask.triangle2      , "triangle2"\r
    mask.triangle3      , "triangle3"\r
    mask.triangle4      , "triangle4"\r
]\r
\r
Html.div [\r
    for shape, text in shapes do\r
        Html.div [\r
            Html.span text\r
            Html.img [shape; prop.src "https://picsum.photos/id/1005/200/200"]\r
        ]\r
]`,(a=we(ee(()=>Xe(o=>{let u;return ue((u=d([l.createElement("span",{children:[o[1]]}),l.createElement("img",h(d([o[0],["src","https://picsum.photos/id/1005/200/200"]])))]),l.createElement("div",{children:m.Children.toArray(Array.from(u))})))},[[["className","mask mask-squircle"],"squircle"],[["className","mask mask-heart"],"heart"],[["className","mask mask-hexagon"],"hexagon"],[["className","mask mask-hexagon-2"],"hexagon2"],[["className","mask mask-decagon"],"decagon"],[["className","mask mask-pentagon"],"pentagon"],[["className","mask mask-diamond"],"diamond"],[["className","mask mask-square"],"square"],[["className","mask mask-circle"],"circle"],[["className","mask mask-star"],"star"],[["className","mask mask-star-2"],"star2"],[["className","mask mask-triangle"],"triangle"],[["className","mask mask-triangle-2"],"triangle2"],[["className","mask mask-triangle-3"],"triangle3"],[["className","mask mask-triangle-4"],"triangle4"]]))),l.createElement("div",{children:m.Children.toArray(Array.from(a))})))})();function HE(){return l.createElement(l.Fragment,{},wE,_E)}const TE=(()=>{let a,i,o,u,p,y,E,w;return H("Basic",`Html.div [\r
    prop.className "grid place-content-center rounded-box bg-base-200"\r
    prop.children [\r
        Daisy.menu [\r
            prop.className "bg-base-100 rounded-box"\r
            prop.children [\r
                Daisy.menuTitle "Menu title"\r
                Html.li [Html.a [prop.text "Item without icon"]]\r
                Html.li [\r
                    Html.a [\r
                        Html.i [ prop.className "fas fa-exclamation-triangle mr-2" ]\r
                        Html.span "Item with icon"\r
                    ]\r
                ]\r
                Html.li [\r
                    Html.a [\r
                        Html.i [ prop.className "fas fa-angry mr-2" ]\r
                        Html.span "Item with icon"\r
                        Daisy.badge [badge.success; prop.text "3"]\r
                    ]\r
                ]\r
            ]\r
        ]\r
    ]\r
]`,l.createElement("div",h(d([["className","grid place-content-center rounded-box bg-base-200"],(a=[l.createElement("ul",h(b("menu",d([["className","bg-base-100 rounded-box"],(i=[(o=[l.createElement("span",{children:["Menu title"]})],l.createElement("li",{className:"menu-title",children:m.Children.toArray(Array.from(o))})),(u=v(l.createElement("a",{children:"Item without icon"})),l.createElement("li",{children:m.Children.toArray(Array.from(u))})),(p=v((y=d([l.createElement("i",{className:"fas fa-exclamation-triangle mr-2"}),l.createElement("span",{children:["Item with icon"]})]),l.createElement("a",{children:m.Children.toArray(Array.from(y))}))),l.createElement("li",{children:m.Children.toArray(Array.from(p))})),(E=v((w=d([l.createElement("i",{className:"fas fa-angry mr-2"}),l.createElement("span",{children:["Item with icon"]}),l.createElement("div",h(b("badge",d([["className","badge-success"],["children","3"]]))))]),l.createElement("a",{children:m.Children.toArray(Array.from(w))}))),l.createElement("li",{children:m.Children.toArray(Array.from(E))}))],["children",m.Children.toArray(Array.from(i))])]))))],["children",m.Children.toArray(Array.from(a))])]))))})(),kE=(()=>{let a,i,o,u,p,y;return H("Bordered",`Html.div [\r
    prop.className "grid place-content-center rounded-box bg-base-200"\r
    prop.children [\r
        Daisy.menu [\r
            prop.className "py-3 bg-base-100 rounded-box"\r
            prop.children [\r
                Daisy.menuTitle "Menu title"\r
                Html.li [Html.a [prop.text "Non Bordered"]]\r
                Html.li [\r
                    prop.className "bordered"\r
                    prop.children [\r
                        Html.a [ prop.text "Bordered"]\r
                    ]\r
                ]\r
                Html.li [\r
                    menuItem.disabled\r
                    prop.children [\r
                        Html.a [ prop.text "Disabled" ]\r
                    ]\r
                ]\r
            ]\r
        ]\r
    ]\r
]`,l.createElement("div",h(d([["className","grid place-content-center rounded-box bg-base-200"],(a=[l.createElement("ul",h(b("menu",d([["className","bg-base-100 rounded-box"],(i=[(o=[l.createElement("span",{children:["Menu title"]})],l.createElement("li",{className:"menu-title",children:m.Children.toArray(Array.from(o))})),(u=v(l.createElement("a",{children:"Non Bordered"})),l.createElement("li",{children:m.Children.toArray(Array.from(u))})),l.createElement("li",h(d([["className","border"],(p=[l.createElement("a",{children:"Bordered"})],["children",m.Children.toArray(Array.from(p))])]))),l.createElement("li",h(d([["className","menu-disabled"],(y=[l.createElement("a",{children:"Disabled"})],["children",m.Children.toArray(Array.from(y))])])))],["children",m.Children.toArray(Array.from(i))])]))))],["children",m.Children.toArray(Array.from(a))])]))))})(),zE=(()=>{let a,i,o,u,p,y,E;return H("Horizontal",`Html.div [\r
    prop.className "grid place-content-center rounded-box bg-base-200"\r
    prop.children [\r
        Daisy.menu [\r
            menu.horizontal\r
            prop.className "items-stretch shadow-lg bg-base-100 rounded-box"\r
            prop.children [\r
                Html.li [Html.a [prop.text "With link"]]\r
                Html.li [\r
                    prop.className "bordered"\r
                    prop.children [\r
                        Html.a [ prop.text "Bordered"]\r
                    ]\r
                ]\r
                Html.li [Html.span "With a span"]\r
                Html.li [\r
                    Html.a [\r
                        Html.i [ prop.className "fas fa-exclamation-triangle mr-2" ]\r
                        Html.span "With an icon"\r
                    ]\r
                ]\r
            ]\r
        ]\r
    ]\r
]`,l.createElement("div",h(d([["className","grid place-content-center rounded-box bg-base-200"],(a=[l.createElement("ul",h(b("menu",d([["className","menu-horizontal"],["className","items-stretch shadow-lg bg-base-100 rounded-box"],(i=[(o=v(l.createElement("a",{children:"With link"})),l.createElement("li",{children:m.Children.toArray(Array.from(o))})),l.createElement("li",h(d([["className","bordered"],(u=[l.createElement("a",{children:"Bordered"})],["children",m.Children.toArray(Array.from(u))])]))),(p=v(l.createElement("span",{children:["With a span"]})),l.createElement("li",{children:m.Children.toArray(Array.from(p))})),(y=v((E=d([l.createElement("i",{className:"fas fa-exclamation-triangle mr-2"}),l.createElement("span",{children:["With an icon"]})]),l.createElement("a",{children:m.Children.toArray(Array.from(E))}))),l.createElement("li",{children:m.Children.toArray(Array.from(y))}))],["children",m.Children.toArray(Array.from(i))])]))))],["children",m.Children.toArray(Array.from(a))])]))))})(),ME=(()=>{let a,i,o,u,p,y,E,w,D;return H("Tree",`Html.div [\r
    prop.className "grid place-content-center py-4 rounded-box bg-base-200"\r
    prop.children [\r
        Daisy.menu [\r
            prop.className "bg-base-100 rounded-box"\r
            prop.children [\r
                Daisy.menuTitle "Menu title"\r
                Html.li [Html.a [prop.text "Level 1"]]\r
                Html.li [\r
                    Html.span "Parent"\r
                    Html.ul [\r
                        prop.className "rounded-box p-2 bg-base-100"\r
                        prop.children [\r
                            Html.li [Html.a [prop.text "Level 2/1"]]\r
                            Html.li [Html.a [prop.text "Level 2/2"]]\r
                        ]\r
                    ]\r
                ]\r
            ]\r
        ]\r
    ]\r
]`,l.createElement("div",h(d([["className","grid place-content-center py-4 rounded-box bg-base-200"],(a=[l.createElement("ul",h(b("menu",d([["className","bg-base-100 rounded-box"],(i=[(o=[l.createElement("span",{children:["Menu title"]})],l.createElement("li",{className:"menu-title",children:m.Children.toArray(Array.from(o))})),(u=v(l.createElement("a",{children:"Level 1"})),l.createElement("li",{children:m.Children.toArray(Array.from(u))})),(p=v((y=d([l.createElement("summary",{children:["Parent"]}),l.createElement("ul",h(d([["className","rounded-box p-2 bg-base-100"],(E=[(w=v(l.createElement("a",{children:"Level 2/1"})),l.createElement("li",{children:m.Children.toArray(Array.from(w))})),(D=v(l.createElement("a",{children:"Level 2/2"})),l.createElement("li",{children:m.Children.toArray(Array.from(D))}))],["children",m.Children.toArray(Array.from(E))])])))]),l.createElement("details",{children:m.Children.toArray(Array.from(y))}))),l.createElement("li",{children:m.Children.toArray(Array.from(p))}))],["children",m.Children.toArray(Array.from(i))])]))))],["children",m.Children.toArray(Array.from(a))])]))))})();function OE(){return l.createElement(l.Fragment,{},TE,kE,zE,ME)}const RE=(()=>{let a,i,o,u,p;return H("Modal with toggle",`Html.div [\r
    Daisy.button.label [\r
        prop.htmlFor "my-modal"\r
        button.primary\r
        prop.text "Open Modal"\r
    ]\r
    Daisy.modalToggle [prop.id "my-modal"]\r
    Daisy.modal.div [\r
        prop.children [\r
            Daisy.modalBox.div [\r
                Html.p "Enim dolorem dolorum omnis atque necessitatibus. Consequatur aut adipisci qui iusto illo eaque. Consequatur repudiandae et. Nulla ea quasi eligendi. Saepe velit autem minima."\r
                Daisy.modalAction [\r
                    Daisy.button.label [\r
                        prop.htmlFor "my-modal"\r
                        button.primary\r
                        prop.text "Accept"\r
                    ]\r
                ]\r
            ]\r
        ]\r
    ]\r
]`,(a=d([l.createElement("label",h(b("btn",d([["htmlFor","my-modal"],["className","btn-primary"],["children","Open Modal"]])))),l.createElement("input",h(b("modal-toggle",d([["type","checkbox"],["id","my-modal"]])))),l.createElement("div",h(b("modal",v((i=[(o=d([(u="Enim dolorem dolorum omnis atque necessitatibus. Consequatur aut adipisci qui iusto illo eaque. Consequatur repudiandae et. Nulla ea quasi eligendi. Saepe velit autem minima.",l.createElement("p",{children:[u]})),(p=v(l.createElement("label",h(b("btn",d([["htmlFor","my-modal"],["className","btn-primary"],["children","Accept"]]))))),l.createElement("div",{className:"modal-action",children:m.Children.toArray(Array.from(p))}))]),l.createElement("div",{className:"modal-box",children:m.Children.toArray(Array.from(o))}))],["children",m.Children.toArray(Array.from(i))])))))]),l.createElement("div",{children:m.Children.toArray(Array.from(a))})))})();function UE(){return l.createElement(l.Fragment,{},RE)}const BE=(()=>{let a,i,o,u;return H("Icon and text",`Daisy.navbar [\r
    prop.className "mb-2 shadow-lg bg-neutral text-neutral-content rounded-box"\r
    prop.children [\r
        Html.div [\r
            prop.className "flex-none"\r
            prop.children [\r
                Daisy.button.button [\r
                    button.square\r
                    button.ghost\r
                    prop.children [\r
                        Html.i [ prop.className "fas fa-arrow-left" ++ color.textSuccess ]\r
                    ]\r
                ]\r
            ]\r
        ]\r
        Html.div [\r
            prop.className "flex-1 px-2 mx-2"\r
            prop.children [\r
                Html.span [prop.className "text-lg font-bold"; prop.text "With one icon"]\r
            ]\r
        ]\r
    ]\r
]`,l.createElement("div",{children:[l.createElement("div",h(b("navbar",d([["className","mb-2 shadow-lg bg-neutral text-neutral-content rounded-box"],(a=[l.createElement("div",h(d([["className","flex-none"],(i=[l.createElement("button",h(b("btn",d([["className","btn-square"],["className","btn-ghost"],(o=[l.createElement("i",h(v(at(["className","fas fa-arrow-left"],["className","text-success"]))))],["children",m.Children.toArray(Array.from(o))])]))))],["children",m.Children.toArray(Array.from(i))])]))),l.createElement("div",h(d([["className","flex-1 px-2 mx-2"],(u=[l.createElement("span",{className:"text-lg font-bold",children:"With one icon"})],["children",m.Children.toArray(Array.from(u))])])))],["children",m.Children.toArray(Array.from(a))])]))))]}))})(),qE=(()=>{let a,i,o,u,p,y;return H("Start / Center / End",`Daisy.navbar [\r
    prop.className "mb-2 shadow-lg bg-neutral text-neutral-content rounded-box"\r
    prop.children [\r
        Daisy.navbarStart [\r
            Daisy.button.button [\r
                button.square\r
                button.ghost\r
                prop.children [\r
                    Html.i [ prop.className "fas fa-bars" ]\r
                ]\r
            ]\r
        ]\r
        Daisy.navbarCenter [Html.span "With two icons"]\r
        Daisy.navbarEnd [\r
            Daisy.button.button [\r
                button.square\r
                button.ghost\r
                prop.children [\r
                    Html.i [ prop.className "fas fa-ellipsis-h" ]\r
                ]\r
            ]\r
        ]\r
    ]\r
]`,l.createElement("div",{children:[l.createElement("div",h(b("navbar",d([["className","mb-2 shadow-lg bg-neutral text-neutral-content rounded-box"],(a=[(i=v(l.createElement("button",h(b("btn",d([["className","btn-square"],["className","btn-ghost"],(o=[l.createElement("i",{className:"fas fa-bars"})],["children",m.Children.toArray(Array.from(o))])]))))),l.createElement("div",{className:"navbar-start",children:m.Children.toArray(Array.from(i))})),(u=v(l.createElement("span",{children:["With two icons"]})),l.createElement("div",{className:"navbar-center",children:m.Children.toArray(Array.from(u))})),(p=v(l.createElement("button",h(b("btn",d([["className","btn-square"],["className","btn-ghost"],(y=[l.createElement("i",{className:"fas fa-ellipsis-h"})],["children",m.Children.toArray(Array.from(y))])]))))),l.createElement("div",{className:"navbar-end",children:m.Children.toArray(Array.from(p))}))],["children",m.Children.toArray(Array.from(a))])]))))]}))})(),LE=(()=>{let a,i,o,u,p;return H("With input",`Daisy.navbar [\r
    prop.className "mb-2 shadow-lg bg-neutral text-neutral-content rounded-box"\r
    prop.children [\r
        Html.div [\r
            prop.className "flex-none"\r
            prop.children [\r
                Daisy.fieldset [\r
                    Daisy.input [ input.ghost; prop.placeholder "Search" ]\r
                ]\r
            ]\r
        ]\r
        Html.div [\r
            prop.className "flex-none"\r
            prop.children [\r
                Daisy.button.button [\r
                    button.square\r
                    button.ghost\r
                    prop.children [\r
                        Html.i [ prop.className "fas fa-search" ]\r
                    ]\r
                ]\r
            ]\r
        ]\r
    ]\r
]`,l.createElement("div",{children:[l.createElement("div",h(b("navbar",d([["className","mb-2 shadow-lg bg-neutral text-neutral-content rounded-box"],(a=[l.createElement("div",h(d([["className","flex-none"],(i=[(o=v(l.createElement("input",h(b("input",d([["type","text"],["className","input-ghost"],["placeholder","Search"]]))))),l.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(o))}))],["children",m.Children.toArray(Array.from(i))])]))),l.createElement("div",h(d([["className","flex-none"],(u=[l.createElement("button",h(b("btn",d([["className","btn-square"],["className","btn-ghost"],(p=[l.createElement("i",{className:"fas fa-search"})],["children",m.Children.toArray(Array.from(p))])]))))],["children",m.Children.toArray(Array.from(u))])])))],["children",m.Children.toArray(Array.from(a))])]))))]}))})();function GE(){return l.createElement(l.Fragment,{},BE,qE,LE)}const VE=(()=>{let a;return H("Simple pagination",`Daisy.join [\r
    Daisy.button.button "Previous"\r
    Daisy.button.button "1"\r
    Daisy.button.button [button.active; prop.text "2"]\r
    Daisy.button.button "3"\r
    Daisy.button.button "4"\r
    Daisy.button.button "Next"\r
]`,(a=d([l.createElement("button",{className:"btn",children:"Previous"}),l.createElement("button",{className:"btn",children:"1"}),l.createElement("button",h(b("btn",d([["className","btn-active"],["children","2"]])))),l.createElement("button",{className:"btn",children:"3"}),l.createElement("button",{className:"btn",children:"4"}),l.createElement("button",{className:"btn",children:"Next"})]),l.createElement("div",{className:"join",children:m.Children.toArray(Array.from(a))})))})(),jE=(()=>{let a;return H("Sizes",`let sizes = [\r
    button.xs, nameof button.xs\r
    button.sm, nameof button.sm\r
    button.md, nameof button.md\r
    button.lg, nameof button.lg\r
]\r
Html.div [\r
    for size, sizeText in sizes do\r
        Daisy.join [\r
            Daisy.button.button [size; prop.text "Previous"]\r
            Daisy.button.button [size; prop.text "1"]\r
            Daisy.button.button [size; button.active; prop.text "2"]\r
            Daisy.button.button [size; prop.text "3"]\r
            Daisy.button.button [size; prop.text "4"]\r
            Daisy.button.button [size; prop.text "Next"]\r
        ]\r
]`,(a=we(ee(()=>Xe(o=>{let u;const p=o[0];return ue((u=d([l.createElement("button",h(b("btn",d([p,["children","Previous"]])))),l.createElement("button",h(b("btn",d([p,["children","1"]])))),l.createElement("button",h(b("btn",d([p,["className","btn-active"],["children","2"]])))),l.createElement("button",h(b("btn",d([p,["children","3"]])))),l.createElement("button",h(b("btn",d([p,["children","4"]])))),l.createElement("button",h(b("btn",d([p,["children","Next"]]))))]),l.createElement("div",{className:"join",children:m.Children.toArray(Array.from(u))})))},[[["className","btn-xs"],"xs"],[["className","btn-sm"],"sm"],[["className","btn-md"],"md"],[["className","btn-lg"],"lg"]]))),l.createElement("div",{children:m.Children.toArray(Array.from(a))})))})();function YE(){return l.createElement(l.Fragment,{},VE,jE)}const QE=(()=>{let a;return H("Simple",`Daisy.progress [prop.value 0; prop.max 100]\r
Daisy.progress [prop.value 25; prop.max 100]\r
Daisy.progress [prop.value 50; prop.max 100]\r
Daisy.progress [prop.value 75; prop.max 100]\r
Daisy.progress [prop.value 100; prop.max 100]`,(a=d([l.createElement("progress",h(b("progress",d([["value",0],["max",100]])))),l.createElement("progress",h(b("progress",d([["value",25],["max",100]])))),l.createElement("progress",h(b("progress",d([["value",50],["max",100]])))),l.createElement("progress",h(b("progress",d([["value",75],["max",100]])))),l.createElement("progress",h(b("progress",d([["value",100],["max",100]]))))]),l.createElement("div",{children:m.Children.toArray(Array.from(a))})))})(),XE=(()=>{let a;return H("Colors",`let colors =\r
    [ progress.primary  , "primary"\r
      progress.secondary, "secondary"\r
      progress.accent   , "accent"\r
      progress.info     , "info"\r
      progress.success  , "success"\r
      progress.warning  , "warning"\r
      progress.error    , "error" ]\r
\r
Html.div [\r
    for color, text in colors do\r
        Html.h3 text\r
        Daisy.progress [color; prop.value 0; prop.max 100]\r
        Daisy.progress [color; prop.value 25; prop.max 100]\r
        Daisy.progress [color; prop.value 50; prop.max 100]\r
        Daisy.progress [color; prop.value 75; prop.max 100]\r
        Daisy.progress [color; prop.value 100; prop.max 100]\r
]`,(a=we(ee(()=>Xe(o=>{const u=o[0];return Ke(ue(l.createElement("h3",{children:[o[1]]})),ee(()=>Ke(ue(l.createElement("progress",h(b("progress",d([u,["value",0],["max",100]]))))),ee(()=>Ke(ue(l.createElement("progress",h(b("progress",d([u,["value",25],["max",100]]))))),ee(()=>Ke(ue(l.createElement("progress",h(b("progress",d([u,["value",50],["max",100]]))))),ee(()=>Ke(ue(l.createElement("progress",h(b("progress",d([u,["value",75],["max",100]]))))),ee(()=>ue(l.createElement("progress",h(b("progress",d([u,["value",100],["max",100]])))))))))))))))},[[["className","progress-primary"],"primary"],[["className","progress-secondary"],"secondary"],[["className","progress-accent"],"accent"],[["className","progress-info"],"info"],[["className","progress-success"],"success"],[["className","progress-warning"],"warning"],[["className","progress-error"],"error"]]))),l.createElement("div",{children:m.Children.toArray(Array.from(a))})))})();function ZE(){return l.createElement(l.Fragment,{},QE,XE)}const KE=(()=>{let a;return H("Simple",`Daisy.radialProgress [\r
    prop.style [ style.custom("--value",100) ]\r
    prop.text "100%"\r
]\r
Daisy.radialProgress [\r
    prop.style [ style.custom("--value",70) ]\r
    prop.text "70%"\r
]\r
Daisy.radialProgress [\r
    prop.style [ style.custom("--value",10) ]\r
    prop.text "10%"\r
]\r
Daisy.radialProgress [\r
    prop.style [ style.custom("--value",50) ]\r
    prop.text "50%"\r
]`,(a=d([l.createElement("div",h(b("radial-progress",d([["style",{"--value":100}],["children","100%"]])))),l.createElement("div",h(b("radial-progress",d([["style",{"--value":70}],["children","70%"]])))),l.createElement("div",h(b("radial-progress",d([["style",{"--value":10}],["children","10%"]])))),l.createElement("div",h(b("radial-progress",d([["style",{"--value":50}],["children","50%"]]))))]),l.createElement("div",{children:m.Children.toArray(Array.from(a))})))})(),FE=(()=>{let a;return H("Colors and different sizes",`Daisy.radialProgress [\r
    color.bgPrimary\r
    color.textPrimaryContent\r
    color.borderPrimary\r
    prop.className "border-4"\r
    prop.style [ style.custom("--value",70); style.custom("--size","12rem") ]\r
    prop.text "70%"\r
]`,(a=v(l.createElement("div",h(b("radial-progress",d([["className","bg-primary"],["className","text-primary-content"],["className","border-primary"],["className","border-4"],["style",{"--value":70,"--size":"12rem"}],["children","70%"]]))))),l.createElement("div",{children:m.Children.toArray(Array.from(a))})))})();function JE(){return l.createElement(l.Fragment,{},KE,FE)}const $E=(()=>{let a,i;return H("Large stars",`Daisy.rating [\r
    rating.lg\r
    prop.children [\r
        Html.input [ prop.type'.radio; prop.name "rating-1"; color.bgWarning ++ mask.star ]\r
        Html.input [ prop.type'.radio; prop.name "rating-1"; color.bgWarning ++ mask.star ]\r
        Html.input [ prop.type'.radio; prop.name "rating-1"; color.bgWarning ++ mask.star ]\r
        Html.input [ prop.type'.radio; prop.name "rating-1"; color.bgWarning ++ mask.star; prop.defaultChecked true ]\r
        Html.input [ prop.type'.radio; prop.name "rating-1"; color.bgWarning ++ mask.star ]\r
    ]\r
]`,(a=v(l.createElement("div",h(b("rating",d([["className","rating-lg"],(i=[l.createElement("input",h(d([["type","radio"],["name","rating-1"],at(["className","bg-warning"],["className","mask mask-star"])]))),l.createElement("input",h(d([["type","radio"],["name","rating-1"],at(["className","bg-warning"],["className","mask mask-star"])]))),l.createElement("input",h(d([["type","radio"],["name","rating-1"],at(["className","bg-warning"],["className","mask mask-star"])]))),l.createElement("input",h(d([["type","radio"],["name","rating-1"],at(["className","bg-warning"],["className","mask mask-star"]),["defaultChecked",!0]]))),l.createElement("input",h(d([["type","radio"],["name","rating-1"],at(["className","bg-warning"],["className","mask mask-star"])])))],["children",m.Children.toArray(Array.from(i))])]))))),l.createElement("div",{children:m.Children.toArray(Array.from(a))})))})(),WE=(()=>{let a,i;return H("Small hearts",`Daisy.rating [\r
    prop.className "gap-1"\r
    ++ rating.sm\r
    prop.children [\r
        Html.input [ prop.type'.radio; prop.name "rating-1"; color.bgWarning ++ mask.star ]\r
        Html.input [ prop.type'.radio; prop.name "rating-1"; color.bgWarning ++ mask.star; prop.defaultChecked true ]\r
        Html.input [ prop.type'.radio; prop.name "rating-1"; color.bgWarning ++ mask.star ]\r
        Html.input [ prop.type'.radio; prop.name "rating-1"; color.bgWarning ++ mask.star ]\r
        Html.input [ prop.type'.radio; prop.name "rating-1"; color.bgWarning ++ mask.star ]\r
    ]\r
]`,(a=v(l.createElement("div",h(b("rating",d([at(["className","gap-1"],["className","rating-sm"]),(i=[l.createElement("input",h(d([["type","radio"],["name","rating-2"],at(["className","bg-error"],["className","mask mask-heart"])]))),l.createElement("input",h(d([["type","radio"],["name","rating-2"],at(["className","bg-error"],["className","mask mask-heart"]),["defaultChecked",!0]]))),l.createElement("input",h(d([["type","radio"],["name","rating-2"],at(["className","bg-error"],["className","mask mask-heart"])]))),l.createElement("input",h(d([["type","radio"],["name","rating-2"],at(["className","bg-error"],["className","mask mask-heart"])]))),l.createElement("input",h(d([["type","radio"],["name","rating-2"],at(["className","bg-error"],["className","mask mask-heart"])])))],["children",m.Children.toArray(Array.from(i))])]))))),l.createElement("div",{children:m.Children.toArray(Array.from(a))})))})();function IE(){return l.createElement(l.Fragment,{},$E,WE)}const PE=H("Skeleton is a component that can be used to show a loading state of a component.",`Daisy.skeleton [\r
    prop.className "w-32 h-32"\r
]`,l.createElement("div",h(b("skeleton",v(["className","w-32 h-32"]))))),e1=(()=>{let a;return H("Skeleton - rectangle with content",`Html.div [\r
    prop.className "flex flex-col gap-4 w-52"\r
    prop.children [\r
        Daisy.skeleton [ prop.className "h-32 w-full" ]\r
        Daisy.skeleton [ prop.className "h-4 w-28" ]\r
        Daisy.skeleton [ prop.className "h-4 w-full" ]\r
        Daisy.skeleton [ prop.className "h-4 w-full" ]\r
    ]\r
]`,l.createElement("div",h(d([["className","flex flex-col gap-4 w-52"],(a=[l.createElement("div",h(b("skeleton",v(["className","h-32 w-full"])))),l.createElement("div",h(b("skeleton",v(["className","h-4 w-28"])))),l.createElement("div",h(b("skeleton",v(["className","h-4 w-full"])))),l.createElement("div",h(b("skeleton",v(["className","h-4 w-full"]))))],["children",m.Children.toArray(Array.from(a))])]))))})();function t1(){return l.createElement(l.Fragment,{},PE,e1)}const n1=(()=>{let a;return H("Without stack",`Html.div [\r
    Html.div [\r
        prop.className "grid w-32 h-20 rounded bg-primary text-primary-content place-content-center"\r
        prop.text "1"\r
    ]\r
    Html.div [\r
        prop.className "grid w-32 h-20 rounded bg-accent text-accent-content place-content-center"\r
        prop.text "2"\r
    ]\r
    Html.div [\r
        prop.className "grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center"\r
        prop.text "3"\r
    ]\r
]`,(a=d([l.createElement("div",{className:"grid w-32 h-20 rounded bg-primary text-primary-content place-content-center",children:"1"}),l.createElement("div",{className:"grid w-32 h-20 rounded bg-accent text-accent-content place-content-center",children:"2"}),l.createElement("div",{className:"grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center",children:"3"})]),l.createElement("div",{children:m.Children.toArray(Array.from(a))})))})(),r1=(()=>{let a;return H("With stack",`Daisy.stack [\r
    prop.className "w-32 h-20"\r
    prop.children [\r
        Html.div [\r
            prop.className "grid rounded bg-primary text-primary-content place-content-center"\r
            prop.text "1"\r
        ]\r
        Html.div [\r
            prop.className "grid rounded bg-accent text-accent-content place-content-center"\r
            prop.text "2"\r
        ]\r
        Html.div [\r
            prop.className "grid rounded bg-secondary text-secondary-content place-content-center"\r
            prop.text "3"\r
        ]\r
    ]\r
]`,l.createElement("div",{children:[l.createElement("div",h(b("stack",d([["className","w-32 h-20"],(a=[l.createElement("div",{className:"grid rounded bg-primary text-primary-content place-content-center",children:"1"}),l.createElement("div",{className:"grid rounded bg-accent text-accent-content place-content-center",children:"2"}),l.createElement("div",{className:"grid rounded bg-secondary text-secondary-content place-content-center",children:"3"})],["children",m.Children.toArray(Array.from(a))])]))))]}))})(),l1=(()=>{let a;return H("Stacked images",`Daisy.stack [\r
    Html.img [\r
        prop.src "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"\r
    ]\r
    Html.img [\r
        prop.src "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"\r
    ]\r
    Html.img [\r
        prop.src "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"\r
    ]\r
]`,l.createElement("div",{children:[(a=d([l.createElement("img",{src:"https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"}),l.createElement("img",{src:"https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"}),l.createElement("img",{src:"https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"})]),l.createElement("div",{className:"stack",children:m.Children.toArray(Array.from(a))}))]}))})();function a1(){return l.createElement(l.Fragment,{},n1,r1,l1)}const i1=(()=>{let a,i;return H("Simple",`Daisy.stats [\r
    Daisy.stat [\r
        Daisy.statTitle "Total Page Views"\r
        Daisy.statValue "89,400"\r
        Daisy.statDesc "21% more than last month"\r
    ]\r
]`,l.createElement("div",{children:[(a=v((i=d([l.createElement("div",{className:"stat-title",children:"Total Page Views"}),l.createElement("div",{className:"stat-value",children:"89,400"}),l.createElement("div",{className:"stat-desc",children:"21% more than last month"})]),l.createElement("div",{className:"stat",children:m.Children.toArray(Array.from(i))}))),l.createElement("div",{className:"stats",children:m.Children.toArray(Array.from(a))}))]}))})(),c1=(()=>{let a,i,o,u,p,y,E;return H("With Figure",`Daisy.stats [\r
    prop.className "w-full"\r
    prop.children [\r
        Daisy.stat [\r
            Daisy.statFigure [\r
                Html.i [ prop.className "fas fa-exclamation-triangle mr-2" ]\r
            ]\r
            Daisy.statTitle "Downloads"\r
            Daisy.statValue "310M"\r
            Daisy.statDesc "Jan 1st - Feb 1st"\r
        ]\r
        Daisy.stat [\r
            Daisy.statFigure [\r
                Html.i [ prop.className "fas fa-hand-spock mr-2" ]\r
            ]\r
            Daisy.statTitle "New Users"\r
            Daisy.statValue "4,200"\r
            Daisy.statDesc [prop.className "text-success"; prop.text "↗︎ 400 (22%)"]\r
        ]\r
        Daisy.stat [\r
            Daisy.statFigure [\r
                Html.i [ prop.className "fas fa-layer-group mr-2" ]\r
            ]\r
            Daisy.statTitle "New Registers"\r
            Daisy.statValue "1,200"\r
            Daisy.statDesc [prop.className "text-error"; prop.text "↘︎ 90 (14%)"]\r
        ]\r
    ]\r
]`,l.createElement("div",{children:[l.createElement("div",h(b("stats",d([["className","w-full"],(a=[(i=d([(o=v(l.createElement("i",{className:"fas fa-exclamation-triangle mr-2"})),l.createElement("div",{className:"stat-figure",children:m.Children.toArray(Array.from(o))})),l.createElement("div",{className:"stat-title",children:"Downloads"}),l.createElement("div",{className:"stat-value",children:"310M"}),l.createElement("div",{className:"stat-desc",children:"Jan 1st - Feb 1st"})]),l.createElement("div",{className:"stat",children:m.Children.toArray(Array.from(i))})),(u=d([(p=v(l.createElement("i",{className:"fas fa-hand-spock mr-2"})),l.createElement("div",{className:"stat-figure",children:m.Children.toArray(Array.from(p))})),l.createElement("div",{className:"stat-title",children:"New Users"}),l.createElement("div",{className:"stat-value",children:"4,200"}),l.createElement("div",h(b("stat-desc",d([["className","text-success"],["children","↗︎ 400 (22%)"]]))))]),l.createElement("div",{className:"stat",children:m.Children.toArray(Array.from(u))})),(y=d([(E=v(l.createElement("i",{className:"fas fa-layer-group mr-2"})),l.createElement("div",{className:"stat-figure",children:m.Children.toArray(Array.from(E))})),l.createElement("div",{className:"stat-title",children:"New Registers"}),l.createElement("div",{className:"stat-value",children:"1,200"}),l.createElement("div",h(b("stat-desc",d([["className","text-error"],["children","↘︎ 90 (14%)"]]))))]),l.createElement("div",{className:"stat",children:m.Children.toArray(Array.from(y))}))],["children",m.Children.toArray(Array.from(a))])]))))]}))})(),s1=(()=>{let a,i,o,u;return H("Centered",`Daisy.stats [\r
    prop.className "w-full"\r
    prop.children [\r
        Daisy.stat [\r
            prop.className "place-items-center place-content-center"\r
            prop.children [\r
                Daisy.statTitle "Downloads"\r
                Daisy.statValue "310M"\r
                Daisy.statDesc "Jan 1st - Feb 1st"\r
            ]\r
        ]\r
        Daisy.stat [\r
            prop.className "place-items-center place-content-center"\r
            prop.children [\r
                Daisy.statTitle "New Users"\r
                Daisy.statValue "4,200"\r
                Daisy.statDesc [prop.className "text-success"; prop.text "↗︎ 400 (22%)"]\r
            ]\r
        ]\r
        Daisy.stat [\r
            prop.className "place-items-center place-content-center"\r
            prop.children [\r
                Daisy.statTitle "New Registers"\r
                Daisy.statValue "1,200"\r
                Daisy.statDesc [prop.className "text-error"; prop.text "↘︎ 90 (14%)"]\r
            ]\r
        ]\r
    ]\r
]`,l.createElement("div",{children:[l.createElement("div",h(b("stats",d([["className","w-full"],(a=[l.createElement("div",h(b("stat",d([["className","place-items-center place-content-center"],(i=[l.createElement("div",{className:"stat-title",children:"Downloads"}),l.createElement("div",{className:"stat-value",children:"310M"}),l.createElement("div",{className:"stat-desc",children:"Jan 1st - Feb 1st"})],["children",m.Children.toArray(Array.from(i))])])))),l.createElement("div",h(b("stat",d([["className","place-items-center place-content-center"],(o=[l.createElement("div",{className:"stat-title",children:"New Users"}),l.createElement("div",{className:"stat-value",children:"4,200"}),l.createElement("div",h(b("stat-desc",d([["className","text-success"],["children","↗︎ 400 (22%)"]]))))],["children",m.Children.toArray(Array.from(o))])])))),l.createElement("div",h(b("stat",d([["className","place-items-center place-content-center"],(u=[l.createElement("div",{className:"stat-title",children:"New Registers"}),l.createElement("div",{className:"stat-value",children:"1,200"}),l.createElement("div",h(b("stat-desc",d([["className","text-error"],["children","↘︎ 90 (14%)"]]))))],["children",m.Children.toArray(Array.from(u))])]))))],["children",m.Children.toArray(Array.from(a))])]))))]}))})();function o1(){return l.createElement(l.Fragment,{},i1,c1,s1)}const u1=H("Basic",`Daisy.status [\r
    status.error\r
    status.xl\r
]`,l.createElement("div",{children:[Ro(d([["className","status-error"],["className","status-xl"]]))]})),d1=(()=>{let a,i;return H("Ping animation",`Html.div [\r
    Html.div [\r
        prop.className "inline-grid *:[grid-area:1/1]"\r
        prop.children [\r
            Daisy.status [ status.primary; prop.className "animate-ping" ]\r
            Daisy.status [ status.primary ]\r
        ]\r
    ]\r
    Html.text " Unread messages"\r
]`,(a=d([l.createElement("div",h(d([["className","inline-grid *:[grid-area:1/1]"],(i=[Ro(d([["className","status-primary"],["className","animate-ping"]])),Ro(v(["className","status-primary"]))],["children",m.Children.toArray(Array.from(i))])])))," Unread messages"]),l.createElement("div",{children:m.Children.toArray(Array.from(a))})))})();function m1(){return l.createElement(l.Fragment,{},u1,d1)}const f1=(()=>{let a;return H("Horizontal Steps",`Daisy.steps [\r
    Daisy.step [step.primary; prop.text "Register"]\r
    Daisy.step [step.primary; prop.text "Choose Plan"]\r
    Daisy.step "Purchase"\r
    Daisy.step "Receive Product"\r
]`,l.createElement("div",{children:[(a=d([l.createElement("li",h(b("step",d([["className","step-primary"],["children","Register"]])))),l.createElement("li",h(b("step",d([["className","step-primary"],["children","Choose Plan"]])))),l.createElement("li",{className:"step",children:"Purchase"}),l.createElement("li",{className:"step",children:"Receive Product"})]),l.createElement("ul",{className:"steps",children:m.Children.toArray(Array.from(a))}))]}))})(),h1=(()=>{let a;return H("Vertical Steps",`Daisy.steps [\r
    steps.vertical\r
    prop.children [\r
        Daisy.step [step.primary; prop.text "Register"]\r
        Daisy.step [step.primary; prop.text "Choose Plan"]\r
        Daisy.step "Purchase"\r
        Daisy.step "Receive Product"\r
    ]\r
]`,l.createElement("div",{children:[l.createElement("ul",h(b("steps",d([["className","steps-vertical"],(a=[l.createElement("li",h(b("step",d([["className","step-primary"],["children","Register"]])))),l.createElement("li",h(b("step",d([["className","step-primary"],["children","Choose Plan"]])))),l.createElement("li",{className:"step",children:"Purchase"}),l.createElement("li",{className:"step",children:"Receive Product"})],["children",m.Children.toArray(Array.from(a))])]))))]}))})(),p1=(()=>{let a,i,o,u;return H("Icons",`Daisy.steps [\r
    Daisy.step [\r
        Daisy.stepIcon (Html.text "😕")\r
        Html.text "Step 1"\r
    ]\r
    Daisy.step [\r
        Daisy.stepIcon (Html.text "😃")\r
        Html.text "Step 2"\r
    ]\r
    Daisy.step [\r
        Daisy.stepIcon (Html.text "😍")\r
        Html.text "Step 3"\r
    ]\r
]`,l.createElement("div",{children:[(a=d([(i=d([l.createElement("span",{className:"step-icon",children:m.Children.toArray(["😕"])}),"Step 1"]),l.createElement("li",{className:"step",children:m.Children.toArray(Array.from(i))})),(o=d([l.createElement("span",{className:"step-icon",children:m.Children.toArray(["😃"])}),"Step 2"]),l.createElement("li",{className:"step",children:m.Children.toArray(Array.from(o))})),(u=d([l.createElement("span",{className:"step-icon",children:m.Children.toArray(["😍"])}),"Step 3"]),l.createElement("li",{className:"step",children:m.Children.toArray(Array.from(u))}))]),l.createElement("ul",{className:"steps",children:m.Children.toArray(Array.from(a))}))]}))})(),y1=(()=>{let a;return H("Custom Content",`Daisy.steps [\r
    Daisy.step [step.content "?"; step.primary; prop.text "Step 1"]\r
    Daisy.step [step.content "!"; step.secondary; prop.text "Step 2"]\r
    Daisy.step [step.content "✓"; step.accent; prop.text "Step 3"]\r
    Daisy.step [step.content "✕"; step.error; prop.text "Step 4"]\r
    Daisy.step [step.content "★"; step.info; prop.text "Step 5"]\r
    Daisy.step [step.content ""; step.success; prop.text "Step 6"]\r
    Daisy.step [step.content "✕"; step.warning; prop.text "Step 7"]\r
    Daisy.step [step.content "●"; prop.text "Step 8"]\r
]`,l.createElement("div",{children:[(a=d([l.createElement("li",h(b("step",d([["data-content","?"],["className","step-primary"],["children","Step 1"]])))),l.createElement("li",h(b("step",d([["data-content","!"],["className","step-secondary"],["children","Step 2"]])))),l.createElement("li",h(b("step",d([["data-content","✓"],["className","step-accent"],["children","Step 3"]])))),l.createElement("li",h(b("step",d([["data-content","✕"],["className","step-error"],["children","Step 4"]])))),l.createElement("li",h(b("step",d([["data-content","★"],["className","step-info"],["children","Step 5"]])))),l.createElement("li",h(b("step",d([["data-content",""],["className","step-success"],["children","Step 6"]])))),l.createElement("li",h(b("step",d([["data-content","✕"],["className","step-warning"],["children","Step 7"]])))),l.createElement("li",h(b("step",d([["data-content","●"],["children","Step 8"]]))))]),l.createElement("ul",{className:"steps",children:m.Children.toArray(Array.from(a))}))]}))})();function b1(){return l.createElement(l.Fragment,{},f1,h1,y1,p1)}const g1=(()=>{let a;return H("Swapping is so easy!",`Daisy.swap [\r
    swap.flip\r
    prop.children [\r
        Html.input [ prop.type'.checkbox ]\r
        Daisy.swapOn "Ha! 😈 SWAPPED!"\r
        Daisy.swapOff "Click me to swap"\r
    ]\r
]`,l.createElement("div",{children:[l.createElement("label",h(b("swap",d([["className","swap-flip"],(a=[l.createElement("input",{type:"checkbox"}),l.createElement("div",{className:"swap-on",children:"Ha! 😈 SWAPPED!"}),l.createElement("div",{className:"swap-off",children:"Click me to swap"})],["children",m.Children.toArray(Array.from(a))])]))))]}))})(),v1=(()=>{let a;return H("",`Daisy.swap [\r
    swap.rotate\r
    prop.className "text-9xl"\r
    prop.children [\r
        Html.input [ prop.type'.checkbox ]\r
        Daisy.swapOn "😈"\r
        Daisy.swapOff "😅"\r
    ]\r
]`,l.createElement("div",{children:[l.createElement("label",h(b("swap",d([["className","swap-rotate"],["className","text-9xl"],(a=[l.createElement("input",{type:"checkbox"}),l.createElement("div",{className:"swap-on",children:"😈"}),l.createElement("div",{className:"swap-off",children:"😅"})],["children",m.Children.toArray(Array.from(a))])]))))]}))})();function E1(){return l.createElement(l.Fragment,{},g1,v1)}const A1=(()=>{let a;return H("Simple",`Daisy.tabs [\r
    Daisy.tab "Tab 1"\r
    Daisy.tab [tab.active; prop.text "Tab 2"]\r
    Daisy.tab "Tab 3"\r
]`,l.createElement("div",{children:[(a=d([l.createElement("a",{className:"tab",children:"Tab 1"}),l.createElement("a",h(b("tab",d([["className","tab-active"],["children","Tab 2"]])))),l.createElement("a",{className:"tab",children:"Tab 3"})]),l.createElement("div",{className:"tabs",children:m.Children.toArray(Array.from(a))}))]}))})(),N1=(()=>{let a;return H("Bordered",`Daisy.tabs [\r
    tabs.border\r
    prop.children [\r
        Daisy.tab [prop.text "Tab 1"]\r
        Daisy.tab [tab.active; prop.text "Tab 2"]\r
        Daisy.tab [prop.text "Tab 3"]\r
    ]\r
]`,l.createElement("div",{children:[l.createElement("div",h(b("tabs",d([["className","tabs-border"],(a=[l.createElement("a",h(b("tab",v(["children","Tab 1"])))),l.createElement("a",h(b("tab",d([["className","tab-active"],["children","Tab 2"]])))),l.createElement("a",h(b("tab",v(["children","Tab 3"]))))],["children",m.Children.toArray(Array.from(a))])]))))]}))})(),S1=(()=>{let a;return H("Lifted",`Daisy.tabs [\r
    tabs.lift\r
    prop.children [\r
        Daisy.tab [prop.text "Tab 1"]\r
        Daisy.tab [tab.active; prop.text "Tab 2"]\r
        Daisy.tab [prop.text "Tab 3"]\r
    ]\r
]`,l.createElement("div",{children:[l.createElement("div",h(b("tabs",d([["className","tabs-lift"],(a=[l.createElement("a",h(b("tab",v(["children","Tab 1"])))),l.createElement("a",h(b("tab",d([["className","tab-active"],["children","Tab 2"]])))),l.createElement("a",h(b("tab",v(["children","Tab 3"]))))],["children",m.Children.toArray(Array.from(a))])]))))]}))})(),x1=(()=>{let a;return H("Boxed",`Daisy.tabs [\r
    tabs.box\r
    prop.children [\r
        Daisy.tab [prop.text "Tab 1"]\r
        Daisy.tab [tab.active; prop.text "Tab 2"]\r
        Daisy.tab [prop.text "Tab 3"]\r
    ]\r
]`,l.createElement("div",{children:[l.createElement("div",h(b("tabs",d([["className","tabs-box"],(a=[l.createElement("a",h(b("tab",v(["children","Tab 1"])))),l.createElement("a",h(b("tab",d([["className","tab-active"],["children","Tab 2"]])))),l.createElement("a",h(b("tab",v(["children","Tab 3"]))))],["children",m.Children.toArray(Array.from(a))])]))))]}))})(),C1=(()=>{let a;return H("Sizes",`let sizes = [\r
    tabs.xs, "xs"\r
    tabs.sm, "sm"\r
    tabs.md, "md"\r
    tabs.lg, "lg"\r
]\r
Html.div [\r
    for size, sizeText in sizes do\r
       Html.div [\r
            Daisy.tabs [\r
                size\r
                tabs.lift\r
                prop.children [\r
                    Daisy.tab [prop.text sizeText]\r
                    Daisy.tab [tab.active; prop.text sizeText]\r
                    Daisy.tab [prop.text sizeText]\r
                ]\r
            ]\r
       ]\r
]`,(a=we(ee(()=>Xe(o=>{let u,p;const y=o[1];return ue((u=v(l.createElement("div",h(b("tabs",d([o[0],["className","tabs-lift"],(p=[l.createElement("a",h(b("tab",v(["children",y])))),l.createElement("a",h(b("tab",d([["className","tab-active"],["children",y]])))),l.createElement("a",h(b("tab",v(["children",y]))))],["children",m.Children.toArray(Array.from(p))])]))))),l.createElement("div",{children:m.Children.toArray(Array.from(u))})))},[[["className","tabs-xs"],"xs"],[["className","tabs-sm"],"sm"],[["className","tabs-md"],"md"],[["className","tabs-lg"],"lg"]]))),l.createElement("div",{children:m.Children.toArray(Array.from(a))})))})();function D1(){return l.createElement(l.Fragment,{},A1,N1,S1,x1,C1)}const w1=(()=>{let a,i,o,u,p,y,E,w;return H("Simple",`Daisy.table [\r
    Html.thead [Html.tr [Html.th ""; Html.th "Name"; Html.th "Job"; Html.th "Favorite Color"]]\r
    Html.tbody [\r
        Html.tr [Html.td "1"; Html.td "Cy Ganderton"; Html.td "Quality Control Specialist"; Html.td "Blue"]\r
        Html.tr [Html.td "2"; Html.td "Hart Hagerty"; Html.td "Desktop Support Technician"; Html.td "Purple"]\r
        Html.tr [Html.td "3"; Html.td "Brice Swyre"; Html.td "Tax Accountant"; Html.td "Red"]\r
        Html.tr [Html.td "4"; Html.td "Marjy Ferencz"; Html.td "Office Assistant I"; Html.td "Crimson"]\r
    ]\r
]`,l.createElement("div",{children:[(a=d([(i=v((o=d([l.createElement("th",{children:[""]}),l.createElement("th",{children:["Name"]}),l.createElement("th",{children:["Job"]}),l.createElement("th",{children:["Favorite Color"]})]),l.createElement("tr",{children:m.Children.toArray(Array.from(o))}))),l.createElement("thead",{children:m.Children.toArray(Array.from(i))})),(u=d([(p=d([l.createElement("td",{children:["1"]}),l.createElement("td",{children:["Cy Ganderton"]}),l.createElement("td",{children:["Quality Control Specialist"]}),l.createElement("td",{children:["Blue"]})]),l.createElement("tr",{children:m.Children.toArray(Array.from(p))})),(y=d([l.createElement("td",{children:["2"]}),l.createElement("td",{children:["Hart Hagerty"]}),l.createElement("td",{children:["Desktop Support Technician"]}),l.createElement("td",{children:["Purple"]})]),l.createElement("tr",{children:m.Children.toArray(Array.from(y))})),(E=d([l.createElement("td",{children:["3"]}),l.createElement("td",{children:["Brice Swyre"]}),l.createElement("td",{children:["Tax Accountant"]}),l.createElement("td",{children:["Red"]})]),l.createElement("tr",{children:m.Children.toArray(Array.from(E))})),(w=d([l.createElement("td",{children:["4"]}),l.createElement("td",{children:["Marjy Ferencz"]}),l.createElement("td",{children:["Office Assistant I"]}),l.createElement("td",{children:["Crimson"]})]),l.createElement("tr",{children:m.Children.toArray(Array.from(w))}))]),l.createElement("tbody",{children:m.Children.toArray(Array.from(u))}))]),l.createElement("table",{className:"table",children:m.Children.toArray(Array.from(a))}))]}))})(),_1=(()=>{let a,i,o,u,p,y,E,w;return H("Use your favourite color for making row active",`Daisy.table [\r
    Html.thead [Html.tr [Html.th ""; Html.th "Name"; Html.th "Job"; Html.th "Favorite Color"]]\r
    Html.tbody [\r
        Html.tr [Html.td "1"; Html.td "Cy Ganderton"; Html.td "Quality Control Specialist"; Html.td "Blue"]\r
        Html.tr [prop.className "bg-yellow-300"; prop.children [Html.td "2"; Html.td "Hart Hagerty"; Html.td "Desktop Support Technician"; Html.td "Purple"]]\r
        Html.tr [Html.td "3"; Html.td "Brice Swyre"; Html.td "Tax Accountant"; Html.td "Red"]\r
        Html.tr [Html.td "4"; Html.td "Marjy Ferencz"; Html.td "Office Assistant I"; Html.td "Crimson"]\r
    ]\r
]`,l.createElement("div",{children:[(a=d([(i=v((o=d([l.createElement("th",{children:[""]}),l.createElement("th",{children:["Name"]}),l.createElement("th",{children:["Job"]}),l.createElement("th",{children:["Favorite Color"]})]),l.createElement("tr",{children:m.Children.toArray(Array.from(o))}))),l.createElement("thead",{children:m.Children.toArray(Array.from(i))})),(u=d([(p=d([l.createElement("td",{children:["1"]}),l.createElement("td",{children:["Cy Ganderton"]}),l.createElement("td",{children:["Quality Control Specialist"]}),l.createElement("td",{children:["Blue"]})]),l.createElement("tr",{children:m.Children.toArray(Array.from(p))})),l.createElement("tr",h(d([["className","bg-yellow-300"],(y=[l.createElement("td",{children:["2"]}),l.createElement("td",{children:["Hart Hagerty"]}),l.createElement("td",{children:["Desktop Support Technician"]}),l.createElement("td",{children:["Purple"]})],["children",m.Children.toArray(Array.from(y))])]))),(E=d([l.createElement("td",{children:["3"]}),l.createElement("td",{children:["Brice Swyre"]}),l.createElement("td",{children:["Tax Accountant"]}),l.createElement("td",{children:["Red"]})]),l.createElement("tr",{children:m.Children.toArray(Array.from(E))})),(w=d([l.createElement("td",{children:["4"]}),l.createElement("td",{children:["Marjy Ferencz"]}),l.createElement("td",{children:["Office Assistant I"]}),l.createElement("td",{children:["Crimson"]})]),l.createElement("tr",{children:m.Children.toArray(Array.from(w))}))]),l.createElement("tbody",{children:m.Children.toArray(Array.from(u))}))]),l.createElement("table",{className:"table",children:m.Children.toArray(Array.from(a))}))]}))})(),H1=(()=>{let a,i,o,u,p,y,E,w;return H("Hover row using classic Tailwind approach",`Daisy.table [\r
    Html.thead [Html.tr [Html.th ""; Html.th "Name"; Html.th "Job"; Html.th "Favorite Color"]]\r
    Html.tbody [\r
        Html.tr [Html.td "1"; Html.td "Cy Ganderton"; Html.td "Quality Control Specialist"; Html.td "Blue"]\r
        Html.tr [prop.className "hover:bg-yellow-300"; prop.children [Html.td "2"; Html.td "Hart Hagerty"; Html.td "Desktop Support Technician"; Html.td "Purple"]]\r
        Html.tr [Html.td "3"; Html.td "Brice Swyre"; Html.td "Tax Accountant"; Html.td "Red"]\r
        Html.tr [Html.td "4"; Html.td "Marjy Ferencz"; Html.td "Office Assistant I"; Html.td "Crimson"]\r
    ]\r
]`,l.createElement("div",{children:[(a=d([(i=v((o=d([l.createElement("th",{children:[""]}),l.createElement("th",{children:["Name"]}),l.createElement("th",{children:["Job"]}),l.createElement("th",{children:["Favorite Color"]})]),l.createElement("tr",{children:m.Children.toArray(Array.from(o))}))),l.createElement("thead",{children:m.Children.toArray(Array.from(i))})),(u=d([(p=d([l.createElement("td",{children:["1"]}),l.createElement("td",{children:["Cy Ganderton"]}),l.createElement("td",{children:["Quality Control Specialist"]}),l.createElement("td",{children:["Blue"]})]),l.createElement("tr",{children:m.Children.toArray(Array.from(p))})),l.createElement("tr",h(d([["className","hover:bg-yellow-300"],(y=[l.createElement("td",{children:["2"]}),l.createElement("td",{children:["Hart Hagerty"]}),l.createElement("td",{children:["Desktop Support Technician"]}),l.createElement("td",{children:["Purple"]})],["children",m.Children.toArray(Array.from(y))])]))),(E=d([l.createElement("td",{children:["3"]}),l.createElement("td",{children:["Brice Swyre"]}),l.createElement("td",{children:["Tax Accountant"]}),l.createElement("td",{children:["Red"]})]),l.createElement("tr",{children:m.Children.toArray(Array.from(E))})),(w=d([l.createElement("td",{children:["4"]}),l.createElement("td",{children:["Marjy Ferencz"]}),l.createElement("td",{children:["Office Assistant I"]}),l.createElement("td",{children:["Crimson"]})]),l.createElement("tr",{children:m.Children.toArray(Array.from(w))}))]),l.createElement("tbody",{children:m.Children.toArray(Array.from(u))}))]),l.createElement("table",{className:"table",children:m.Children.toArray(Array.from(a))}))]}))})(),T1=(()=>{let a,i,o,u,p,y,E,w;return H("Zebra",`Daisy.table [\r
    table.zebra\r
    prop.children [\r
        Html.thead [Html.tr [Html.th ""; Html.th "Name"; Html.th "Job"; Html.th "Favorite Color"]]\r
        Html.tbody [\r
            Html.tr [Html.td "1"; Html.td "Cy Ganderton"; Html.td "Quality Control Specialist"; Html.td "Blue"]\r
            Html.tr [Html.td "2"; Html.td "Hart Hagerty"; Html.td "Desktop Support Technician"; Html.td "Purple"]\r
            Html.tr [Html.td "3"; Html.td "Brice Swyre"; Html.td "Tax Accountant"; Html.td "Red"]\r
            Html.tr [Html.td "4"; Html.td "Marjy Ferencz"; Html.td "Office Assistant I"; Html.td "Crimson"]\r
        ]\r
    ]\r
]`,l.createElement("div",{children:[l.createElement("table",h(b("table",d([["className","table-zebra"],(a=[(i=v((o=d([l.createElement("th",{children:[""]}),l.createElement("th",{children:["Name"]}),l.createElement("th",{children:["Job"]}),l.createElement("th",{children:["Favorite Color"]})]),l.createElement("tr",{children:m.Children.toArray(Array.from(o))}))),l.createElement("thead",{children:m.Children.toArray(Array.from(i))})),(u=d([(p=d([l.createElement("td",{children:["1"]}),l.createElement("td",{children:["Cy Ganderton"]}),l.createElement("td",{children:["Quality Control Specialist"]}),l.createElement("td",{children:["Blue"]})]),l.createElement("tr",{children:m.Children.toArray(Array.from(p))})),(y=d([l.createElement("td",{children:["2"]}),l.createElement("td",{children:["Hart Hagerty"]}),l.createElement("td",{children:["Desktop Support Technician"]}),l.createElement("td",{children:["Purple"]})]),l.createElement("tr",{children:m.Children.toArray(Array.from(y))})),(E=d([l.createElement("td",{children:["3"]}),l.createElement("td",{children:["Brice Swyre"]}),l.createElement("td",{children:["Tax Accountant"]}),l.createElement("td",{children:["Red"]})]),l.createElement("tr",{children:m.Children.toArray(Array.from(E))})),(w=d([l.createElement("td",{children:["4"]}),l.createElement("td",{children:["Marjy Ferencz"]}),l.createElement("td",{children:["Office Assistant I"]}),l.createElement("td",{children:["Crimson"]})]),l.createElement("tr",{children:m.Children.toArray(Array.from(w))}))]),l.createElement("tbody",{children:m.Children.toArray(Array.from(u))}))],["children",m.Children.toArray(Array.from(a))])]))))]}))})(),k1=(()=>{let a,i,o,u,p,y,E,w;return H("Table With Visuals",`let row (url: string, name: string, country: string, group: string, title: string, color: string) =\r
    Html.tr [\r
        Html.td [Daisy.checkbox []]\r
        Html.td [\r
            Html.div [\r
                prop.classes ["flex"; "items-center"; "space-x-3"]\r
                prop.children [\r
                    Daisy.avatar [\r
                        Html.div [\r
                            mask.squircle ++ prop.className "w-12 h-12"\r
\r
                            prop.children [\r
                                Html.img [\r
                                    prop.src url\r
                                ]\r
                            ]\r
                        ]\r
                    ]\r
                    Html.div [\r
                        Html.div name\r
                        Html.div country\r
                    ]\r
                ]\r
            ]\r
        ]\r
        Html.td [\r
            Html.span group\r
            Html.br []\r
            Daisy.badge [badge.sm; badge.outline; prop.text title]\r
        ]\r
        Html.td color\r
        Html.td [Daisy.button.button [button.ghost; button.xs; prop.text "Details"]]\r
    ]\r
\r
Daisy.table [\r
    prop.children [\r
        Html.thead [\r
            Html.tr [\r
                Html.th [Daisy.checkbox []]\r
                Html.th "Name"\r
                Html.th "Job"\r
                Html.th "Favorite Color"\r
                Html.th ""\r
            ]\r
        ]\r
\r
\r
        Html.tbody [\r
            row ("https://img.daisyui.com/images/profile/demo/2@94.webp", "Hart Hagerty", "United States", "Zemlak, Daniel and Leannon", "Desktop Support Technician", "Purple")\r
            row ("https://img.daisyui.com/images/profile/demo/3@94.webp", "Brice Swyre", "China", "Carroll Group", "Tax Accountant", "Red")\r
            row ("https://img.daisyui.com/images/profile/demo/4@94.webp", "Marjy Ferencz", "Russia", "Rowe-Schoen", "Office Assistant I", "Crimson")\r
            row ("https://img.daisyui.com/images/profile/demo/5@94.webp", "Yancy Tear", "Brazil", "Wyman-Ledner", "Community Outreach Specialist", "Indigo")\r
        ]\r
        Html.thead [\r
            Html.tr [\r
                Html.th ""\r
                Html.th "Name"\r
                Html.th "Job"\r
                Html.th "Favorite Color"\r
                Html.th ""\r
            ]\r
        ]\r
    ]\r
]`,(a=N=>{let z,M,q,B,Q,Z,W,ge;const ce=d([(z=v(l.createElement("input",h(b("checkbox",v(["type","checkbox"]))))),l.createElement("td",{children:m.Children.toArray(Array.from(z))})),(M=v(l.createElement("div",h(d([["className",fn(" ",["flex","items-center","space-x-3"])],(q=[(B=v(l.createElement("div",h(d([at(["className","mask mask-squircle"],["className","w-12 h-12"]),(Q=[l.createElement("img",{src:N[0]})],["children",m.Children.toArray(Array.from(Q))])])))),l.createElement("div",{className:"avatar",children:m.Children.toArray(Array.from(B))})),(Z=d([l.createElement("div",{children:[N[1]]}),l.createElement("div",{children:[N[2]]})]),l.createElement("div",{children:m.Children.toArray(Array.from(Z))}))],["children",m.Children.toArray(Array.from(q))])])))),l.createElement("td",{children:m.Children.toArray(Array.from(M))})),(W=d([l.createElement("span",{children:[N[3]]}),l.createElement("br",{}),l.createElement("div",h(b("badge",d([["className","badge-sm"],["className","badge-outline"],["children",N[4]]]))))]),l.createElement("td",{children:m.Children.toArray(Array.from(W))})),l.createElement("td",{children:[N[5]]}),(ge=v(l.createElement("button",h(b("btn",d([["className","btn-ghost"],["className","btn-xs"],["children","Details"]]))))),l.createElement("td",{children:m.Children.toArray(Array.from(ge))}))]);return l.createElement("tr",{children:m.Children.toArray(Array.from(ce))})},l.createElement("div",{children:[l.createElement("table",h(b("table",v((i=[(o=v((u=d([(p=v(l.createElement("input",h(b("checkbox",v(["type","checkbox"]))))),l.createElement("th",{children:m.Children.toArray(Array.from(p))})),l.createElement("th",{children:["Name"]}),l.createElement("th",{children:["Job"]}),l.createElement("th",{children:["Favorite Color"]}),l.createElement("th",{children:[""]})]),l.createElement("tr",{children:m.Children.toArray(Array.from(u))}))),l.createElement("thead",{children:m.Children.toArray(Array.from(o))})),(y=d([a(["https://img.daisyui.com/images/profile/demo/2@94.webp","Hart Hagerty","United States","Zemlak, Daniel and Leannon","Desktop Support Technician","Purple"]),a(["https://img.daisyui.com/images/profile/demo/3@94.webp","Brice Swyre","China","Carroll Group","Tax Accountant","Red"]),a(["https://img.daisyui.com/images/profile/demo/4@94.webp","Marjy Ferencz","Russia","Rowe-Schoen","Office Assistant I","Crimson"]),a(["https://img.daisyui.com/images/profile/demo/5@94.webp","Yancy Tear","Brazil","Wyman-Ledner","Community Outreach Specialist","Indigo"])]),l.createElement("tbody",{children:m.Children.toArray(Array.from(y))})),(E=v((w=d([l.createElement("th",{children:[""]}),l.createElement("th",{children:["Name"]}),l.createElement("th",{children:["Job"]}),l.createElement("th",{children:["Favorite Color"]}),l.createElement("th",{children:[""]})]),l.createElement("tr",{children:m.Children.toArray(Array.from(w))}))),l.createElement("thead",{children:m.Children.toArray(Array.from(E))}))],["children",m.Children.toArray(Array.from(i))])))))]})))})(),z1=(()=>{let a,i,o,u,p,y,E;return H("Very tiny table",`let header = ["";"NAME";"JOB";"COMPANY";"LOCATION";"LAST LOGIN";"FAVORITE COLOR"]\r
let data = [\r
    ["1";"Cy Ganderton";"Quality Control Specialist";"Littel; Schaden and Vandervort";"Canada";"12/16/2020";"Blue"]\r
    ["2";"Hart Hagerty";"Desktop Support Technician";"Zemlak; Daniel and Leannon";"United States";"12/5/2020";"Purple"]\r
    ["3";"Brice Swyre";"Tax Accountant";"Carroll Group";"China";"8/15/2020";"Red"]\r
    ["4";"Marjy Ferencz";"Office Assistant I";"Rowe-Schoen";"Russia";"3/25/2021";"Crimson"]\r
    ["5";"Yancy Tear";"Community Outreach Specialist";"Wyman-Ledner";"Brazil";"5/22/2020";"Indigo"]\r
    ["6";"Irma Vasilik";"Editor";"Wiza; Bins and Emard";"Venezuela";"12/8/2020";"Purple"]\r
    ["7";"Meghann Durtnal";"Staff Accountant IV";"Schuster-Schimmel";"Philippines";"2/17/2021";"Yellow"]\r
    ["8";"Sammy Seston";"Accountant I";"O'Hara; Welch and Keebler";"Indonesia";"5/23/2020";"Crimson"]\r
    ["9";"Lesya Tinham";"Safety Technician IV";"Turner-Kuhlman";"Philippines";"2/21/2021";"Maroon"]\r
    ["10";"Zaneta Tewkesbury";"VP Marketing";"Sauer LLC";"Chad";"6/23/2020";"Green"]\r
    ["11";"Andy Tipple";"Librarian";"Hilpert Group";"Poland";"7/9/2020";"Indigo"]\r
    ["12";"Sophi Biles";"Recruiting Manager";"Gutmann Inc";"Indonesia";"2/12/2021";"Maroon"]\r
    ["13";"Florida Garces";"Web Developer IV";"Gaylord; Pacocha and Baumbach";"Poland";"5/31/2020";"Purple"]\r
    ["14";"Maribeth Popping";"Analyst Programmer";"Deckow-Pouros";"Portugal";"4/27/2021";"Aquamarine"]\r
    ["15";"Moritz Dryburgh";"Dental Hygienist";"Schiller; Cole and Hackett";"Sri Lanka";"8/8/2020";"Crimson"]\r
    ["16";"Reid Semiras";"Teacher";"Sporer; Sipes and Rogahn";"Poland";"7/30/2020";"Green"]\r
    ["17";"Alec Lethby";"Teacher";"Reichel; Glover and Hamill";"China";"2/28/2021";"Khaki"]\r
    ["18";"Aland Wilber";"Quality Control Specialist";"Kshlerin; Rogahn and Swaniawski";"Czech Republic";"9/29/2020";"Purple"]\r
    ["19";"Teddie Duerden";"Staff Accountant III";"Pouros; Ullrich and Windler";"France";"10/27/2020";"Aquamarine"]\r
    ["20";"Lorelei Blackstone";"Data Coordiator";"Witting; Kutch and Greenfelder";"Kazakhstan";"6/3/2020";"Red"]\r
]\r
\r
Daisy.table [\r
    table.xs // note sizing here\r
    prop.children [\r
        Html.thead [Html.tr [for h in header do Html.th h]]\r
        Html.tbody [\r
            for row in data do\r
                Html.tr [\r
                    for col in row do Html.td col\r
                ]\r
        ]\r
        Html.tfoot [Html.tr [for h in header do Html.th h]]\r
    ]\r
]`,(a=d(["","NAME","JOB","COMPANY","LOCATION","LAST LOGIN","FAVORITE COLOR"]),l.createElement("div",{children:[l.createElement("table",h(b("table",d([["className","table-xs"],(i=[(o=v((u=we(ee(()=>dn(D=>l.createElement("th",{children:[D]}),a))),l.createElement("tr",{children:m.Children.toArray(Array.from(u))}))),l.createElement("thead",{children:m.Children.toArray(Array.from(o))})),(p=we(ee(()=>dn(D=>{const N=we(ee(()=>dn(z=>l.createElement("td",{children:[z]}),D)));return l.createElement("tr",{children:m.Children.toArray(Array.from(N))})},[d(["1","Cy Ganderton","Quality Control Specialist","Littel; Schaden and Vandervort","Canada","12/16/2020","Blue"]),d(["2","Hart Hagerty","Desktop Support Technician","Zemlak; Daniel and Leannon","United States","12/5/2020","Purple"]),d(["3","Brice Swyre","Tax Accountant","Carroll Group","China","8/15/2020","Red"]),d(["4","Marjy Ferencz","Office Assistant I","Rowe-Schoen","Russia","3/25/2021","Crimson"]),d(["5","Yancy Tear","Community Outreach Specialist","Wyman-Ledner","Brazil","5/22/2020","Indigo"]),d(["6","Irma Vasilik","Editor","Wiza; Bins and Emard","Venezuela","12/8/2020","Purple"]),d(["7","Meghann Durtnal","Staff Accountant IV","Schuster-Schimmel","Philippines","2/17/2021","Yellow"]),d(["8","Sammy Seston","Accountant I","O'Hara; Welch and Keebler","Indonesia","5/23/2020","Crimson"]),d(["9","Lesya Tinham","Safety Technician IV","Turner-Kuhlman","Philippines","2/21/2021","Maroon"]),d(["10","Zaneta Tewkesbury","VP Marketing","Sauer LLC","Chad","6/23/2020","Green"]),d(["11","Andy Tipple","Librarian","Hilpert Group","Poland","7/9/2020","Indigo"]),d(["12","Sophi Biles","Recruiting Manager","Gutmann Inc","Indonesia","2/12/2021","Maroon"]),d(["13","Florida Garces","Web Developer IV","Gaylord; Pacocha and Baumbach","Poland","5/31/2020","Purple"]),d(["14","Maribeth Popping","Analyst Programmer","Deckow-Pouros","Portugal","4/27/2021","Aquamarine"]),d(["15","Moritz Dryburgh","Dental Hygienist","Schiller; Cole and Hackett","Sri Lanka","8/8/2020","Crimson"]),d(["16","Reid Semiras","Teacher","Sporer; Sipes and Rogahn","Poland","7/30/2020","Green"]),d(["17","Alec Lethby","Teacher","Reichel; Glover and Hamill","China","2/28/2021","Khaki"]),d(["18","Aland Wilber","Quality Control Specialist","Kshlerin; Rogahn and Swaniawski","Czech Republic","9/29/2020","Purple"]),d(["19","Teddie Duerden","Staff Accountant III","Pouros; Ullrich and Windler","France","10/27/2020","Aquamarine"]),d(["20","Lorelei Blackstone","Data Coordiator","Witting; Kutch and Greenfelder","Kazakhstan","6/3/2020","Red"])]))),l.createElement("tbody",{children:m.Children.toArray(Array.from(p))})),(y=v((E=we(ee(()=>dn(D=>l.createElement("th",{children:[D]}),a))),l.createElement("tr",{children:m.Children.toArray(Array.from(E))}))),l.createElement("tfoot",{children:m.Children.toArray(Array.from(y))}))],["children",m.Children.toArray(Array.from(i))])]))))]})))})();function M1(){return l.createElement(l.Fragment,{},w1,_1,H1,T1,k1,z1)}const O1=H("If a checked checkbox input or a checked radio input with theme-controller class exists in the page, The page will have the same theme as that input's value.",`Daisy.toggle [\r
    theme.controller\r
    prop.value "synthwave"\r
]`,l.createElement("input",h(b("toggle",d([["type","checkbox"],["className","theme-controller"],["value","synthwave"]])))));function R1(){return l.createElement(l.Fragment,{},O1)}const U1=(()=>{let a,i,o,u,p,y,E;return H("Create easy timeline",`Daisy.timeline [\r
    Html.li [\r
        Daisy.timelineStart "1984"\r
        Daisy.timelineMiddle [ Html.faIcon "fa-solid fa-check-circle" ]\r
        Daisy.timelineEnd [ timeline.box; prop.text "First Macintosh computer" ]\r
        Html.hr []\r
    ]\r
    Html.li [\r
        Html.hr []\r
        Daisy.timelineStart "1998"\r
        Daisy.timelineMiddle [ Html.faIcon "fa-solid fa-check-circle" ]\r
        Daisy.timelineEnd [ timeline.box; prop.text "iMac" ]\r
        Html.hr []\r
    ]\r
    Html.li [\r
        Html.hr []\r
        Daisy.timelineStart "2001"\r
        Daisy.timelineMiddle [ Html.faIcon "fa-solid fa-check-circle" ]\r
        Daisy.timelineEnd [ timeline.box; prop.text "iPod" ]\r
    ]\r
]`,(a=d([(i=d([l.createElement("div",{className:"timeline-start",children:"1984"}),(o=v(l.createElement("i",{className:"fa-solid fa-check-circle"})),l.createElement("div",{className:"timeline-middle",children:m.Children.toArray(Array.from(o))})),l.createElement("div",h(b("timeline-end",d([["className","timeline-box"],["children","First Macintosh computer"]])))),l.createElement("hr",{})]),l.createElement("li",{children:m.Children.toArray(Array.from(i))})),(u=d([l.createElement("hr",{}),l.createElement("div",{className:"timeline-start",children:"1998"}),(p=v(l.createElement("i",{className:"fa-solid fa-check-circle"})),l.createElement("div",{className:"timeline-middle",children:m.Children.toArray(Array.from(p))})),l.createElement("div",h(b("timeline-end",d([["className","timeline-box"],["children","iMac"]])))),l.createElement("hr",{})]),l.createElement("li",{children:m.Children.toArray(Array.from(u))})),(y=d([l.createElement("hr",{}),l.createElement("div",{className:"timeline-start",children:"2001"}),(E=v(l.createElement("i",{className:"fa-solid fa-check-circle"})),l.createElement("div",{className:"timeline-middle",children:m.Children.toArray(Array.from(E))})),l.createElement("div",h(b("timeline-end",d([["className","timeline-box"],["children","iPod"]]))))]),l.createElement("li",{children:m.Children.toArray(Array.from(y))}))]),l.createElement("ul",{className:"timeline",children:m.Children.toArray(Array.from(a))})))})(),B1=(()=>{let a,i,o,u,p,y,E;return H("Timeline can be also vertical and from both sides",`Daisy.timeline [\r
    timeline.vertical\r
    prop.children [\r
        Html.li [\r
            Daisy.timelineStart [ timeline.box; prop.text "1984" ]\r
            Daisy.timelineMiddle [ Html.faIcon "fa-solid fa-check-circle" ]\r
            Html.hr []\r
        ]\r
        Html.li [\r
            Html.hr []\r
            Daisy.timelineMiddle [ Html.faIcon "fa-solid fa-check-circle" ]\r
            Daisy.timelineEnd [ timeline.box; prop.text "iMac" ]\r
            Html.hr [ color.bgPrimary ]\r
        ]\r
        Html.li [\r
            Html.hr [ color.bgPrimary ]\r
            Daisy.timelineStart [ timeline.box; prop.text "iPod" ]\r
            Daisy.timelineMiddle [ Html.faIcon "fa-solid fa-check-circle text-primary" ]\r
        ]\r
\r
    ]\r
]`,l.createElement("ul",h(b("timeline",d([["className","timeline-vertical"],(a=[(i=d([l.createElement("div",h(b("timeline-start",d([["className","timeline-box"],["children","1984"]])))),(o=v(l.createElement("i",{className:"fa-solid fa-check-circle"})),l.createElement("div",{className:"timeline-middle",children:m.Children.toArray(Array.from(o))})),l.createElement("hr",{})]),l.createElement("li",{children:m.Children.toArray(Array.from(i))})),(u=d([l.createElement("hr",{}),(p=v(l.createElement("i",{className:"fa-solid fa-check-circle"})),l.createElement("div",{className:"timeline-middle",children:m.Children.toArray(Array.from(p))})),l.createElement("div",h(b("timeline-end",d([["className","timeline-box"],["children","iMac"]])))),l.createElement("hr",{className:"bg-primary"})]),l.createElement("li",{children:m.Children.toArray(Array.from(u))})),(y=d([l.createElement("hr",{className:"bg-primary"}),l.createElement("div",h(b("timeline-start",d([["className","timeline-box"],["children","iPod"]])))),(E=v(l.createElement("i",{className:"fa-solid fa-check-circle text-primary"})),l.createElement("div",{className:"timeline-middle",children:m.Children.toArray(Array.from(E))}))]),l.createElement("li",{children:m.Children.toArray(Array.from(y))}))],["children",m.Children.toArray(Array.from(a))])])))))})();function q1(){return l.createElement(l.Fragment,{},U1,B1)}function Qo(a){return l.createElement("div",{className:"relative",children:a})}const L1=(()=>{let a;return H("In the middle",`Daisy.toast [\r
    toast.center\r
    toast.middle\r
    prop.children [\r
        Daisy.alert [\r
            alert.info\r
            prop.text "New mail arrived."\r
        ]\r
    ]\r
]`,Qo(l.createElement("div",h(b("toast",d([["className","toast-center"],["className","toast-middle"],["className","absolute"],(a=[l.createElement("div",h(b("alert",d([["className","alert-info"],["children","New mail arrived."]]))))],["children",m.Children.toArray(Array.from(a))])]))))))})(),G1=(()=>{let a;return H("On the bottom right",`Daisy.toast [\r
    toast.bottom\r
    prop.children [\r
        Daisy.alert [\r
            alert.warning\r
            prop.text "F# is awesome!"\r
        ]\r
    ]\r
]`,Qo(l.createElement("div",h(b("toast",d([["className","toast-bottom"],["className","absolute"],(a=[l.createElement("div",h(b("alert",d([["className","alert-warning"],["children","F# is awesome!"]]))))],["children",m.Children.toArray(Array.from(a))])]))))))})(),V1=(()=>{let a;return H("Top left",`Daisy.toast [\r
    toast.top\r
    toast.start\r
    prop.children [\r
        Daisy.alert [\r
            alert.success\r
            prop.text "Payment successful"\r
        ]\r
    ]\r
]`,Qo(l.createElement("div",h(b("toast",d([["className","toast-top"],["className","toast-start"],["className","absolute"],(a=[l.createElement("div",h(b("alert",d([["className","alert-success"],["children","Payment successful"]]))))],["children",m.Children.toArray(Array.from(a))])]))))))})();function j1(){return l.createElement(l.Fragment,{},L1,G1,V1)}const Y1=H("Simple",`Daisy.tooltip [\r
    tooltip.text "hello"\r
    prop.children [Daisy.button.button "Hover me"]\r
]`,l.createElement("div",{children:[l.createElement("div",h(b("tooltip",d([["data-tip","hello"],(()=>{const a=[l.createElement("button",{className:"btn",children:"Hover me"})];return["children",m.Children.toArray(Array.from(a))]})()]))))]})),Q1=(()=>{let a;return H("Directions",`let directions =\r
    [ tooltip.left  , "left"\r
      tooltip.bottom, "bottom"\r
      tooltip.right , "right" ]\r
\r
Html.div [\r
    for direction, directionText in directions do\r
        Daisy.tooltip [\r
            prop.className "ml-8"\r
            tooltip.text directionText\r
            direction\r
            prop.children [Daisy.button.button directionText]\r
        ]\r
]`,(a=we(ee(()=>Xe(o=>{let u;const p=o[1];return ue(l.createElement("div",h(b("tooltip",d([["className","ml-8"],["data-tip",p],o[0],(u=[l.createElement("button",{className:"btn",children:p})],["children",m.Children.toArray(Array.from(u))])])))))},[[["className","tooltip-left"],"left"],[["className","tooltip-bottom"],"bottom"],[["className","tooltip-right"],"right"]]))),l.createElement("div",{children:m.Children.toArray(Array.from(a))})))})(),X1=(()=>{let a;return H("Colors",`let colors =\r
    [ tooltip.primary  , button.primary  , "primary"\r
      tooltip.secondary, button.secondary, "secondary"\r
      tooltip.accent   , button.accent   , "accent"\r
      tooltip.info     , button.info     , "info"\r
      tooltip.success  , button.success  , "success"\r
      tooltip.warning  , button.warning  , "warning"\r
      tooltip.error    , button.error    , "error" ]\r
\r
Html.div [\r
    for color, buttonColor, colorText in colors do\r
        Daisy.tooltip [\r
            prop.className "mt-8"\r
            color\r
            tooltip.open'\r
            tooltip.text colorText\r
            prop.children [Daisy.button.button [buttonColor; prop.text colorText]]\r
        ]\r
]`,(a=we(ee(()=>Xe(o=>{let u;const p=o[2];return ue(l.createElement("div",h(b("tooltip",d([["className","mt-8"],o[0],["className","tooltip-open"],["data-tip",p],(u=[l.createElement("button",h(b("btn",d([o[1],["children",p]]))))],["children",m.Children.toArray(Array.from(u))])])))))},[[["className","tooltip-primary"],["className","btn-primary"],"primary"],[["className","tooltip-secondary"],["className","btn-secondary"],"secondary"],[["className","tooltip-accent"],["className","btn-accent"],"accent"],[["className","tooltip-info"],["className","btn-info"],"info"],[["className","tooltip-success"],["className","btn-success"],"success"],[["className","tooltip-warning"],["className","btn-warning"],"warning"],[["className","tooltip-error"],["className","btn-error"],"error"]]))),l.createElement("div",{children:m.Children.toArray(Array.from(a))})))})();function Z1(){return l.createElement(l.Fragment,{},Y1,Q1,X1)}const K1=(()=>{let a;return H("Validator with hint - try typing an invalid email address and then click away",`Html.div [\r
    Daisy.validator.email [\r
        prop.required true\r
        prop.placeholder "mail@site.com"\r
    ]\r
    Daisy.validatorHint "Enter valid email address"\r
]`,(a=d([l.createElement("input",h(b("input validator",d([["type","email"],["required",!0],["placeholder","mail@site.com"]])))),l.createElement("div",{className:"validator-hint",children:"Enter valid email address"})]),l.createElement("div",{children:m.Children.toArray(Array.from(a))})))})(),F1=(()=>{let a,i;return H("Password validator with hint - try typing something and then click away",`Html.div [\r
    Daisy.validator.password [\r
        prop.required true\r
        prop.placeholder "Password"\r
        prop.minLength 8\r
        prop.pattern (Regex "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")\r
        prop.title "Must be more than 8 characters, including number, lowercase letter, uppercase letter"\r
    ]\r
    Daisy.validatorHint [\r
        Html.text "Must be more than 8 characters, including"\r
        Html.br []\r
        Html.text "At least one number"\r
        Html.br []\r
        Html.text "At least one lowercase letter"\r
        Html.br []\r
        Html.text "At least one uppercase number"\r
        Html.br []\r
    ]\r
]`,(a=d([l.createElement("input",h(b("input validator",d([["type","password"],["required",!0],["placeholder","Password"],["minLength",8],["pattern",/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/gu],["title","Must be more than 8 characters, including number, lowercase letter, uppercase letter"]])))),(i=d(["Must be more than 8 characters, including",l.createElement("br",{}),"At least one number",l.createElement("br",{}),"At least one lowercase letter",l.createElement("br",{}),"At least one uppercase number",l.createElement("br",{})]),l.createElement("div",{className:"validator-hint",children:m.Children.toArray(Array.from(i))}))]),l.createElement("div",{children:m.Children.toArray(Array.from(a))})))})(),J1=(()=>{let a;return H("Toggle validator with hint - try toggling and untoggling",`Html.div [\r
    Daisy.validator.toggle [\r
        prop.required true\r
        prop.title "Required"\r
    ]\r
    Daisy.validatorHint "Required"\r
]`,(a=d([l.createElement("input",h(b("toggle validator",d([["type","checkbox"],["required",!0],["title","Required"]])))),l.createElement("div",{className:"validator-hint",children:"Required"})]),l.createElement("div",{children:m.Children.toArray(Array.from(a))})))})();function $1(){return l.createElement(l.Fragment,{},K1,F1,J1)}const W1=H("File Input with border",`Daisy.fieldset [\r
    Daisy.fieldsetLabel "File Selection"\r
    Daisy.file [file.bordered]\r
]`,l.createElement("div",{children:[(()=>{const a=d([l.createElement("label",{className:"fieldset-label",children:"File Selection"}),l.createElement("input",h(b("file-input",d([["type","file"],["className","file-input-bordered"]]))))]);return l.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(a))})})()]})),I1=(()=>{let a,i;return H("File Input with border",`Daisy.card [\r
    prop.className "p-10 bg-base-200"\r
    prop.children [\r
        Daisy.fieldset [\r
            Daisy.fieldsetLabel "File Selection"\r
            Daisy.file [file.bordered]\r
        ]\r
    ]\r
]`,l.createElement("div",h(b("card",d([["className","p-10 bg-base-200"],(a=[(i=d([l.createElement("label",{className:"fieldset-label",children:"File Selection"}),l.createElement("input",h(b("file-input",d([["type","file"],["className","file-input-bordered"]]))))]),l.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(i))}))],["children",m.Children.toArray(Array.from(a))])])))))})(),P1=(()=>{let a,i;return H("File Input ghost (no background)",`Daisy.card [\r
    prop.className "p-10 bg-base-200"\r
    prop.children [\r
        Daisy.fieldset [\r
            Daisy.fieldsetLabel "File Selection"\r
            Daisy.file [file.ghost]\r
        ]\r
    ]\r
]`,l.createElement("div",h(b("card",d([["className","p-10 bg-base-200"],(a=[(i=d([l.createElement("label",{className:"fieldset-label",children:"File Selection"}),l.createElement("input",h(b("file-input",d([["type","file"],["className","file-input-ghost"]]))))]),l.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(i))}))],["children",m.Children.toArray(Array.from(a))])])))))})(),eA=(()=>{let a;return H("File Input ghost (no background)",`Daisy.fieldset [\r
    Daisy.fieldsetLabel "Disabled file"\r
    Daisy.file [file.bordered; prop.disabled true]\r
]`,(a=d([l.createElement("label",{className:"fieldset-label",children:"Disabled file"}),l.createElement("input",h(b("file-input",d([["type","file"],["className","file-input-bordered"],["disabled",!0]]))))]),l.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(a))})))})(),tA=(()=>{let a;return H("File Input with colors",`let colors = [\r
    file.primary  , "primary"\r
    file.secondary, "secondary"\r
    file.accent   , "accent"\r
    file.info     , "info"\r
    file.success  , "success"\r
    file.warning  , "warning"\r
    file.error    , "error"\r
]\r
Daisy.fieldset [\r
    for color, colorText in colors do\r
        Daisy.fieldsetLabel colorText\r
        Daisy.file [color; file.bordered]\r
]`,(a=we(ee(()=>Xe(o=>Ke(ue(l.createElement("label",{className:"fieldset-label",children:o[1]})),ee(()=>ue(l.createElement("input",h(b("file-input",d([["type","file"],o[0],["className","file-input-bordered"]]))))))),[[["className","file-input-primary"],"primary"],[["className","file-input-secondary"],"secondary"],[["className","file-input-accent"],"accent"],[["className","file-input-info"],"info"],[["className","file-input-success"],"success"],[["className","file-input-warning"],"warning"],[["className","file-input-error"],"error"]]))),l.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(a))})))})(),nA=(()=>{let a;return H("File Input with sizes",`let sizes = [\r
    file.xs, "xs"\r
    file.sm, "sm"\r
    file.md, "md"\r
    file.lg, "lg"\r
]\r
Daisy.fieldset [\r
    for size, sizeText in sizes do\r
        Daisy.fieldsetLabel sizeText\r
        Daisy.file [size; file.bordered]\r
]`,(a=we(ee(()=>Xe(o=>Ke(ue(l.createElement("label",{className:"fieldset-label",children:o[1]})),ee(()=>ue(l.createElement("input",h(b("file-input",d([["type","file"],o[0],["className","file-input-bordered"]]))))))),[[["className","file-input-xs"],"xs"],[["className","file-input-sm"],"sm"],[["className","file-input-md"],"md"],[["className","file-input-lg"],"lg"]]))),l.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(a))})))})(),rA=(()=>{let a,i;return H("File Input with sizes",`Daisy.fieldset [\r
    Daisy.fieldsetLabel "Connected"\r
    Html.div [\r
        prop.className "relative"\r
        prop.children [\r
            Daisy.file [file.bordered; file.primary]\r
            Daisy.button.button [\r
                button.primary\r
                prop.className "absolute top-0 right-0 rounded-l-none"\r
                prop.text "Upload"\r
            ]\r
        ]\r
    ]\r
]`,(a=d([l.createElement("label",{className:"fieldset-label",children:"Connected"}),l.createElement("div",h(d([["className","relative"],(i=[l.createElement("input",h(b("file-input",d([["type","file"],["className","file-input-bordered"],["className","file-input-primary"],["className","w-full pr-16"]])))),l.createElement("button",h(b("btn",d([["className","btn-primary"],["className","absolute top-0 right-0 rounded-l-none"],["children","Upload"]]))))],["children",m.Children.toArray(Array.from(i))])])))]),l.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(a))})))})();function lA(){return l.createElement(l.Fragment,{},W1,I1,P1,eA,tA,nA,rA)}const aA=H("Basic","Daisy.checkbox []",l.createElement("input",h(b("checkbox",v(["type","checkbox"]))))),iA=H("Checked","Daisy.checkbox [prop.defaultChecked true]",l.createElement("input",h(b("checkbox",d([["type","checkbox"],["defaultChecked",!0]]))))),cA=(()=>{let a,i;return H("Basic Label",`Daisy.fieldset [\r
    Daisy.fieldsetLabel [\r
        prop.className "justify-between"\r
        prop.children [\r
            Html.text "Remember me"\r
            Daisy.checkbox []\r
        ]\r
    ]\r
]`,(a=v(l.createElement("label",h(b("fieldset-label",d([["className","justify-between"],(i=["Remember me",l.createElement("input",h(b("checkbox",v(["type","checkbox"]))))],["children",m.Children.toArray(Array.from(i))])]))))),l.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(a))})))})(),sA=(()=>{let a;return H("All Sizes and Colors",`let colors = [\r
    checkbox.primary  , "primary"\r
    checkbox.secondary, "secondary"\r
    checkbox.accent   , "accent"\r
]\r
\r
let sizes = [\r
    checkbox.lg, "lg"\r
    checkbox.md, "md"\r
    checkbox.sm, "sm"\r
    checkbox.xs, "xs"\r
]\r
\r
Html.div [\r
    for size, sizeText in sizes do\r
        for color, colorText in colors do\r
            Daisy.fieldset [\r
                Daisy.fieldsetLabel [\r
                    prop.className "justify-between"\r
                    prop.children [\r
                        Html.text (sprintf "%s - %s" sizeText colorText)\r
                        Daisy.checkbox [color; size; prop.defaultChecked true]\r
                    ]\r
                ]\r
            ]\r
            Daisy.fieldset [\r
                Daisy.fieldsetLabel [\r
                    prop.className "justify-between"\r
                    prop.children [\r
                        Html.text (sprintf "%s - %s (disabled)" sizeText colorText)\r
                        Daisy.checkbox [color; size; prop.disabled true; prop.defaultChecked true]\r
                    ]\r
                ]\r
            ]\r
]`,(a=we(ee(()=>Xe(o=>{const u=o[1],p=o[0];return Xe(y=>{let E,w;const D=y[1],N=y[0];return Ke(ue((E=v(l.createElement("label",h(b("fieldset-label",d([["className","justify-between"],(w=[Ji(Fi("%s - %s"))(u)(D),l.createElement("input",h(b("checkbox",d([["type","checkbox"],N,p,["defaultChecked",!0]]))))],["children",m.Children.toArray(Array.from(w))])]))))),l.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(E))}))),ee(()=>{let z,M;return ue((z=v(l.createElement("label",h(b("fieldset-label",d([["className","justify-between"],(M=[Ji(Fi("%s - %s (disabled)"))(u)(D),l.createElement("input",h(b("checkbox",d([["type","checkbox"],N,p,["disabled",!0],["defaultChecked",!0]]))))],["children",m.Children.toArray(Array.from(M))])]))))),l.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(z))})))}))},[[["className","checkbox-primary"],"primary"],[["className","checkbox-secondary"],"secondary"],[["className","checkbox-accent"],"accent"]])},[[["className","checkbox-lg"],"lg"],[["className","checkbox-md"],"md"],[["className","checkbox-sm"],"sm"],[["className","checkbox-xs"],"xs"]]))),l.createElement("div",{children:m.Children.toArray(Array.from(a))})))})();function oA(){return l.createElement(l.Fragment,{},aA,iA,cA,sA)}const uA=(()=>{let a;return H("Input with border",`Daisy.fieldset [\r
    Daisy.fieldsetLabel "Username"\r
    Daisy.input [ prop.placeholder "Username" ]\r
]`,l.createElement("div",{children:[(a=d([l.createElement("label",{className:"fieldset-label",children:"Username"}),l.createElement("input",h(b("input",d([["type","text"],["placeholder","Username"]]))))]),l.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(a))}))]}))})(),dA=(()=>{let a,i;return H("Input with border",`Daisy.card [\r
    prop.className "p-10 bg-base-200"\r
    prop.children [\r
        Daisy.fieldset [\r
            Daisy.fieldsetLabel "Username"\r
            Daisy.input [prop.placeholder "Username"]\r
        ]\r
    ]\r
]`,l.createElement("div",h(b("card",d([["className","p-10 bg-base-200"],(a=[(i=d([l.createElement("label",{className:"fieldset-label",children:"Username"}),l.createElement("input",h(b("input",d([["type","text"],["placeholder","Username"]]))))]),l.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(i))}))],["children",m.Children.toArray(Array.from(a))])])))))})(),mA=(()=>{let a,i;return H("Input ghost (no background)",`Daisy.card [\r
    prop.className "p-10 bg-base-200"\r
    prop.children [\r
        Daisy.fieldset [\r
            Daisy.fieldsetLabel "Username"\r
            Daisy.input [input.ghost; prop.placeholder "Username"]\r
        ]\r
    ]\r
]`,l.createElement("div",h(b("card",d([["className","p-10 bg-base-200"],(a=[(i=d([l.createElement("label",{className:"fieldset-label",children:"Username"}),l.createElement("input",h(b("input",d([["type","text"],["className","input-ghost"],["placeholder","Username"]]))))]),l.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(i))}))],["children",m.Children.toArray(Array.from(a))])])))))})(),fA=(()=>{let a;return H("Input ghost (no background)",`Daisy.fieldset [\r
    Daisy.fieldsetLabel "Disabled input"\r
    Daisy.input [prop.disabled true; prop.placeholder "Username"]\r
]`,(a=d([l.createElement("label",{className:"fieldset-label",children:"Disabled input"}),l.createElement("input",h(b("input",d([["type","text"],["disabled",!0],["placeholder","Username"]]))))]),l.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(a))})))})(),hA=(()=>{let a;return H("Input with colors",`let colors = [\r
    input.primary  , "primary"\r
    input.secondary, "secondary"\r
    input.accent   , "accent"\r
    input.info     , "info"\r
    input.success  , "success"\r
    input.warning  , "warning"\r
    input.error    , "error"\r
]\r
Daisy.fieldset [\r
    for color, colorText in colors do\r
        Daisy.fieldsetLabel colorText\r
        Daisy.input [color; prop.placeholder "Username"]\r
]`,(a=we(ee(()=>Xe(o=>Ke(ue(l.createElement("label",{className:"fieldset-label",children:o[1]})),ee(()=>ue(l.createElement("input",h(b("input",d([["type","text"],o[0],["placeholder","Username"]]))))))),[[["className","input-primary"],"primary"],[["className","input-secondary"],"secondary"],[["className","input-accent"],"accent"],[["className","input-info"],"info"],[["className","input-success"],"success"],[["className","input-warning"],"warning"],[["className","input-error"],"error"]]))),l.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(a))})))})(),pA=(()=>{let a;return H("Input with sizes",`let sizes = [\r
    input.xs, "xs"\r
    input.sm, "sm"\r
    input.md, "md"\r
    input.lg, "lg"\r
]\r
Daisy.fieldset [\r
    for size, sizeText in sizes do\r
        Daisy.fieldsetLabel sizeText\r
        Daisy.input [size; prop.placeholder "Username"]\r
]`,(a=we(ee(()=>Xe(o=>Ke(ue(l.createElement("label",{className:"fieldset-label",children:o[1]})),ee(()=>ue(l.createElement("input",h(b("input",d([["type","text"],o[0],["placeholder","Username"]]))))))),[[["className","input-xs"],"xs"],[["className","input-sm"],"sm"],[["className","input-md"],"md"],[["className","input-lg"],"lg"]]))),l.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(a))})))})(),yA=(()=>{let a,i;return H("Input with sizes",`Daisy.fieldset [\r
    Daisy.fieldsetLabel "Connected"\r
    Html.div [\r
        prop.className "relative"\r
        prop.children [\r
            Daisy.input [\r
                input.primary\r
                prop.placeholder "Search"\r
                prop.className "w-full pr-16"\r
            ]\r
            Daisy.button.button [\r
                button.primary\r
                prop.className "absolute top-0 right-0 rounded-l-none"\r
                prop.text "Go"\r
            ]\r
        ]\r
    ]\r
]`,(a=d([l.createElement("label",{className:"fieldset-label",children:"Connected"}),l.createElement("div",h(d([["className","relative"],(i=[l.createElement("input",h(b("input",d([["type","text"],["className","input-primary"],["placeholder","Search"],["className","w-full pr-16"]])))),l.createElement("button",h(b("btn",d([["className","btn-primary"],["className","absolute top-0 right-0 rounded-l-none"],["children","Go"]]))))],["children",m.Children.toArray(Array.from(i))])])))]),l.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(a))})))})();function bA(){return l.createElement(l.Fragment,{},uA,dA,mA,fA,hA,pA,yA)}const gA=(()=>{let a,i,o,u,p,y,E,w,D,N,z;return H("Colors",`Daisy.card [\r
    prop.children [\r
        Daisy.fieldset [\r
            Daisy.fieldsetLabel [\r
                prop.className "justify-between"\r
                prop.children [\r
                    Html.text "Neutral"\r
                    Daisy.radio [ prop.name "colors" ]\r
                ]\r
            ]\r
        ]\r
        Daisy.fieldset [\r
            Daisy.fieldsetLabel [\r
                prop.className "justify-between"\r
                prop.children [\r
                    Html.text "Primary"\r
                    Daisy.radio [ radio.primary; prop.name "colors" ]\r
                ]\r
            ]\r
        ]\r
        Daisy.fieldset [\r
            Daisy.fieldsetLabel [\r
                prop.className "justify-between"\r
                prop.children [\r
                    Html.text "Secondary"\r
                    Daisy.radio [ radio.secondary; prop.name "colors" ]\r
                ]\r
            ]\r
        ]\r
        Daisy.fieldset [\r
            Daisy.fieldsetLabel [\r
                prop.className "justify-between"\r
                prop.children [\r
                    Html.text "Accent"\r
                    Daisy.radio [ radio.accent; prop.name "colors" ]\r
                ]\r
            ]\r
        ]\r
        Daisy.fieldset [\r
            Daisy.fieldsetLabel [\r
                prop.className "justify-between"\r
                prop.children [\r
                    Html.text "Disabled"\r
                    Daisy.radio [ prop.disabled true; prop.name "colors" ]\r
                ]\r
            ]\r
        ]\r
    ]\r
]`,l.createElement("div",h(b("card",v((a=[(i=v(l.createElement("label",h(b("fieldset-label",d([["className","justify-between"],(o=["Neutral",l.createElement("input",h(b("radio",d([["type","radio"],["name","colors"]]))))],["children",m.Children.toArray(Array.from(o))])]))))),l.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(i))})),(u=v(l.createElement("label",h(b("fieldset-label",d([["className","justify-between"],(p=["Primary",l.createElement("input",h(b("radio",d([["type","radio"],["className","radio-primary"],["name","colors"]]))))],["children",m.Children.toArray(Array.from(p))])]))))),l.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(u))})),(y=v(l.createElement("label",h(b("fieldset-label",d([["className","justify-between"],(E=["Secondary",l.createElement("input",h(b("radio",d([["type","radio"],["className","radio-secondary"],["name","colors"]]))))],["children",m.Children.toArray(Array.from(E))])]))))),l.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(y))})),(w=v(l.createElement("label",h(b("fieldset-label",d([["className","justify-between"],(D=["Accent",l.createElement("input",h(b("radio",d([["type","radio"],["className","radio-accent"],["name","colors"]]))))],["children",m.Children.toArray(Array.from(D))])]))))),l.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(w))})),(N=v(l.createElement("label",h(b("fieldset-label",d([["className","justify-between"],(z=["Disabled",l.createElement("input",h(b("radio",d([["type","radio"],["disabled",!0],["name","colors"]]))))],["children",m.Children.toArray(Array.from(z))])]))))),l.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(N))}))],["children",m.Children.toArray(Array.from(a))]))))))})(),vA=(()=>{let a,i,o,u,p;return H("Sizes",`Html.div [\r
    Daisy.fieldset [Daisy.radio [radio.xs]]\r
    Daisy.fieldset [Daisy.radio [radio.sm]]\r
    Daisy.fieldset [Daisy.radio [radio.md]]\r
    Daisy.fieldset [Daisy.radio [radio.lg]]\r
]`,(a=d([(i=v(l.createElement("input",h(b("radio",d([["type","radio"],["name","sizes"],["className","radio-xs"]]))))),l.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(i))})),(o=v(l.createElement("input",h(b("radio",d([["type","radio"],["name","sizes"],["className","radio-sm"]]))))),l.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(o))})),(u=v(l.createElement("input",h(b("radio",d([["type","radio"],["name","sizes"],["className","radio-md"]]))))),l.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(u))})),(p=v(l.createElement("input",h(b("radio",d([["type","radio"],["name","sizes"],["className","radio-lg"]]))))),l.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(p))}))]),l.createElement("div",{children:m.Children.toArray(Array.from(a))})))})();function EA(){return l.createElement(l.Fragment,{},gA,vA)}const AA=(()=>{let a;return H("Colors",`Html.div [\r
    Daisy.range [prop.max 100; prop.defaultValue 40]\r
    Daisy.range [prop.max 100; prop.defaultValue 50; range.primary]\r
    Daisy.range [prop.max 100; prop.defaultValue 60; range.secondary]\r
    Daisy.range [prop.max 100; prop.defaultValue 70; range.accent]\r
]`,(a=d([l.createElement("input",h(b("range",d([["type","range"],["max",100],["defaultValue",40]])))),l.createElement("input",h(b("range",d([["type","range"],["max",100],["defaultValue",50],["className","range-primary"]])))),l.createElement("input",h(b("range",d([["type","range"],["max",100],["defaultValue",60],["className","range-secondary"]])))),l.createElement("input",h(b("range",d([["type","range"],["max",100],["defaultValue",70],["className","range-accent"]]))))]),l.createElement("div",{children:m.Children.toArray(Array.from(a))})))})(),NA=(()=>{let a;return H("Sizes",`Html.div [\r
    Daisy.range [prop.max 100; prop.defaultValue 40; range.xs]\r
    Daisy.range [prop.max 100; prop.defaultValue 50; range.sm]\r
    Daisy.range [prop.max 100; prop.defaultValue 60; range.md]\r
    Daisy.range [prop.max 100; prop.defaultValue 70; range.lg]\r
]`,(a=d([l.createElement("input",h(b("range",d([["type","range"],["max",100],["defaultValue",40],["className","range-xs"]])))),l.createElement("input",h(b("range",d([["type","range"],["max",100],["defaultValue",50],["className","range-sm"]])))),l.createElement("input",h(b("range",d([["type","range"],["max",100],["defaultValue",60],["className","range-md"]])))),l.createElement("input",h(b("range",d([["type","range"],["max",100],["defaultValue",70],["className","range-lg"]]))))]),l.createElement("div",{children:m.Children.toArray(Array.from(a))})))})();function SA(){return l.createElement(l.Fragment,{},AA,NA)}const xA=(()=>{let a;return H("Basic",`Daisy.select [\r
    prop.className "w-full max-w-xs"\r
    prop.children [\r
        Html.option "Choose your superpower"\r
        Html.option "telekenesis"\r
        Html.option "time travel"\r
        Html.option "invisibility"\r
    ]\r
]`,l.createElement("select",h(b("select",d([["className","w-full max-w-xs"],(a=[l.createElement("option",{children:["Choose your superpower"]}),l.createElement("option",{children:["telekenesis"]}),l.createElement("option",{children:["time travel"]}),l.createElement("option",{children:["invisibility"]})],["children",m.Children.toArray(Array.from(a))])])))))})(),CA=(()=>{let a;return H("Colors",`let colors = [\r
    select.primary  , "primary"\r
    select.secondary, "secondary"\r
    select.accent   , "accent"\r
    select.ghost    , "ghost"\r
    select.error    , "error"\r
    select.info     , "info"\r
    select.success  , "success"\r
    select.warning  , "warning"\r
]\r
\r
Html.div [\r
    for color, colorText in colors do\r
        Daisy.select [\r
            color\r
            prop.className "w-full max-w-xs"\r
            prop.children [\r
                Html.option colorText\r
                Html.option "telekenesis"\r
                Html.option "time travel"\r
                Html.option "invisibility"\r
            ]\r
        ]\r
]`,(a=we(ee(()=>Xe(o=>{let u;return ue(l.createElement("select",h(b("select",d([o[0],["className","w-full max-w-xs"],(u=[l.createElement("option",{children:[o[1]]}),l.createElement("option",{children:["telekenesis"]}),l.createElement("option",{children:["time travel"]}),l.createElement("option",{children:["invisibility"]})],["children",m.Children.toArray(Array.from(u))])])))))},[[["className","select-primary"],"primary"],[["className","select-secondary"],"secondary"],[["className","select-accent"],"accent"],[["className","select-ghost"],"ghost"],[["className","select-error"],"error"],[["className","select-info"],"info"],[["className","select-success"],"success"],[["className","select-warning"],"warning"]]))),l.createElement("div",{children:m.Children.toArray(Array.from(a))})))})(),DA=(()=>{let a;return H("Sizes",`let colors = [\r
    select.primary  , "primary"\r
    select.secondary, "secondary"\r
    select.accent   , "accent"\r
    select.ghost    , "ghost"\r
    select.error    , "error"\r
    select.info     , "info"\r
    select.success  , "success"\r
    select.warning  , "warning"\r
]\r
\r
Html.div [\r
    for color, colorText in colors do\r
        Daisy.select [\r
            color\r
            prop.className "w-full max-w-xs"\r
            prop.children [\r
                Html.option colorText\r
                Html.option "telekenesis"\r
                Html.option "time travel"\r
                Html.option "invisibility"\r
            ]\r
        ]\r
]`,(a=we(ee(()=>Xe(o=>{let u;return ue(l.createElement("select",h(b("select",d([o[0],["className","w-full max-w-xs"],(u=[l.createElement("option",{children:[o[1]]}),l.createElement("option",{children:["telekenesis"]}),l.createElement("option",{children:["time travel"]}),l.createElement("option",{children:["invisibility"]})],["children",m.Children.toArray(Array.from(u))])])))))},[[["className","select-xs"],"xs"],[["className","select-sm"],"sm"],[["className","select-md"],"md"],[["className","select-lg"],"lg"]]))),l.createElement("div",{children:m.Children.toArray(Array.from(a))})))})(),wA=(()=>{let a;return H("Disabled",`Daisy.select [\r
    prop.disabled true\r
    prop.className "w-full max-w-xs"\r
    prop.children [\r
        Html.option "Choose your superpower"\r
        Html.option "telekinesis"\r
        Html.option "time travel"\r
        Html.option "invisibility"\r
    ]\r
]\r
`,l.createElement("select",h(b("select",d([["disabled",!0],["className","w-full max-w-xs"],(a=[l.createElement("option",{children:["Choose your superpower"]}),l.createElement("option",{children:["telekinesis"]}),l.createElement("option",{children:["time travel"]}),l.createElement("option",{children:["invisibility"]})],["children",m.Children.toArray(Array.from(a))])])))))})();function _A(){return l.createElement(l.Fragment,{},xA,CA,DA,wA)}const HA=(()=>{let a;return H("Basic",`Daisy.fieldset [\r
    Daisy.fieldsetLabel "Your bio"\r
    Daisy.textarea [\r
        prop.placeholder "Bio"\r
        prop.className "h-24"\r
    ]\r
]`,(a=d([l.createElement("label",{className:"fieldset-label",children:"Your bio"}),l.createElement("textarea",h(b("textarea",d([["placeholder","Bio"],["className","h-24"]]))))]),l.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(a))})))})(),TA=(()=>{let a;return H("Colors",`let colors = [\r
    textarea.primary  , "primary"\r
    textarea.secondary, "secondary"\r
    textarea.accent   , "accent"\r
    textarea.info     , "info"\r
    textarea.success  , "success"\r
    textarea.warning  , "warning"\r
    textarea.error    , "error"\r
]\r
Html.div [\r
    for color, colorText in colors do\r
        Daisy.fieldset [\r
            Daisy.fieldsetLabel colorText\r
            Daisy.textarea [\r
                color\r
                prop.placeholder colorText\r
                prop.className "h-24"\r
            ]\r
        ]\r
]`,(a=we(ee(()=>Xe(o=>{let u;const p=o[1];return ue((u=d([l.createElement("label",{className:"fieldset-label",children:p}),l.createElement("textarea",h(b("textarea",d([o[0],["placeholder",p],["className","h-24"]]))))]),l.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(u))})))},[[["className","textarea-primary"],"primary"],[["className","textarea-secondary"],"secondary"],[["className","textarea-accent"],"accent"],[["className","textarea-info"],"info"],[["className","textarea-success"],"success"],[["className","textarea-warning"],"warning"],[["className","textarea-error"],"error"]]))),l.createElement("div",{children:m.Children.toArray(Array.from(a))})))})();function kA(){return l.createElement(l.Fragment,{},HA,TA)}const zA=H("Basic","Daisy.toggle []",l.createElement("input",h(b("toggle",v(["type","checkbox"]))))),MA=(()=>{let a,i,o;return H("Toggle with label and container",`Daisy.card [\r
    prop.children [\r
        card.border\r
        Daisy.fieldset [\r
            Daisy.fieldsetLabel [\r
                prop.className "justify-between"\r
                prop.children [\r
                    Html.text "Remember me"\r
                    Daisy.toggle []\r
                ]\r
            ]\r
        ]\r
    ]\r
]`,l.createElement("div",h(b("card",d([["className","card-border"],(a=[(i=v(l.createElement("label",h(b("fieldset-label",d([["className","justify-between"],(o=["Remember me",l.createElement("input",h(b("toggle",v(["type","checkbox"]))))],["children",m.Children.toArray(Array.from(o))])]))))),l.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(i))}))],["children",m.Children.toArray(Array.from(a))])])))))})(),OA=(()=>{let a;return H("Toggle with label and container",`let colors = [\r
    toggle.primary  , nameof toggle.primary\r
    toggle.secondary, nameof toggle.secondary\r
    toggle.accent   , nameof toggle.accent\r
]\r
Daisy.card [\r
    prop.children [\r
        for color, colorText in colors do\r
            Daisy.fieldset [\r
                Daisy.fieldsetLabel [\r
                    prop.className "justify-between"\r
                    prop.children [\r
                        Html.text colorText\r
                        Daisy.toggle [color; prop.defaultChecked true]\r
                    ]\r
                ]\r
            ]\r
    ]\r
]`,l.createElement("div",h(b("card",d([["className","card-border"],(a=we(ee(()=>Xe(o=>{let u,p;return ue((u=v(l.createElement("label",h(b("fieldset-label",d([["className","justify-between"],(p=[o[1],l.createElement("input",h(b("toggle",d([["type","checkbox"],o[0],["defaultChecked",!0]]))))],["children",m.Children.toArray(Array.from(p))])]))))),l.createElement("fieldset",{className:"fieldset",children:m.Children.toArray(Array.from(u))})))},[[["className","toggle-primary"],"primary"],[["className","toggle-secondary"],"secondary"],[["className","toggle-accent"],"accent"]]))),["children",m.Children.toArray(Array.from(a))])])))))})();function RA(){return l.createElement(l.Fragment,{},zA,MA,OA)}const UA=H("No prefix",'Daisy.mockupCode [Html.pre [Html.code [prop.text "npm i daisyui"]]]',(()=>{let a;const i=v((a=v(l.createElement("code",{children:"npm i daisyui"})),l.createElement("pre",{children:m.Children.toArray(Array.from(a))})));return l.createElement("div",{className:"mockup-code",children:m.Children.toArray(Array.from(i))})})()),BA=(()=>{let a,i;return H("Prefix",`Daisy.mockupCode [\r
    Html.pre [\r
        mockupCode.prefix "$"\r
        prop.children [\r
            Html.code [prop.text "npm i daisyui"]\r
        ]\r
    ]\r
]`,(a=v(l.createElement("pre",h(d([["data-prefix","$"],(i=[l.createElement("code",{children:"npm i daisyui"})],["children",m.Children.toArray(Array.from(i))])])))),l.createElement("div",{className:"mockup-code",children:m.Children.toArray(Array.from(a))})))})();function qA(){return l.createElement(l.Fragment,{},UA,BA)}const LA=(()=>{let a,i;return H("iPhone mockup",`Html.div [\r
    Daisy.mockupPhone [\r
        prop.children [\r
            prop.className "bg-base-300"\r
            Daisy.mockupPhoneCamera []\r
            Daisy.mockupPhoneDisplay [\r
                prop.className "grid place-content-center"\r
                prop.text "Hi."\r
            ]\r
        ]\r
    ]\r
]`,(a=v(l.createElement("div",h(b("mockup-phone",d([["className","bg-base-300"],(i=[l.createElement("div",h(b("mockup-phone-camera",Fe()))),l.createElement("div",h(b("mockup-phone-display",d([["className","grid place-content-center"],["children","Hi."]]))))],["children",m.Children.toArray(Array.from(i))])]))))),l.createElement("div",{children:m.Children.toArray(Array.from(a))})))})(),GA=(()=>{let a,i;return H("iPhone with color",`Html.div [\r
    Daisy.mockupPhone [\r
        prop.className "bg-base-300"\r
        color.borderPrimary\r
        prop.children [\r
            Daisy.mockupPhoneCamera []\r
            Daisy.mockupPhoneDisplay [\r
                prop.className "grid place-content-center"\r
                prop.text "Hi."\r
            ]\r
        ]\r
    ]\r
]`,(a=v(l.createElement("div",h(b("mockup-phone",d([["className","bg-base-300"],["className","border-primary"],(i=[l.createElement("div",h(b("mockup-phone-camera",Fe()))),l.createElement("div",h(b("mockup-phone-display",d([["className","grid place-content-center"],["children","Hi."]]))))],["children",m.Children.toArray(Array.from(i))])]))))),l.createElement("div",{children:m.Children.toArray(Array.from(a))})))})(),VA=(()=>{let a;return H("Phone sizes",`let phones = [\r
    "w-[320px] h-[568px]", "phone1", color.borderPrimary\r
    "w-[375px] h-[667px]", "phone2", color.borderAccent\r
    "w-[414px] h-[736px]", "phone3", color.borderError\r
    "w-[375px] h-[812px]", "phone4", color.borderInfo\r
    "w-[414px] h-[896px]", "phone5", color.borderSuccess\r
    "w-[320px] h-[1024px]", "phone6", color.borderWarning\r
]\r
Html.div [\r
    for phone, phoneText, borderColor in phones do \r
        Daisy.mockupPhone [\r
            prop.className "bg-base-300"\r
            borderColor\r
            prop.children [\r
                Daisy.mockupPhoneCamera []\r
                Daisy.mockupPhoneDisplay [\r
                    prop.className $"grid place-content-center {phone}"\r
                    prop.text phoneText\r
                ]\r
            ]\r
        ]\r
]`,(a=we(ee(()=>Xe(o=>{let u;return ue(l.createElement("div",h(b("mockup-phone",d([["className","bg-base-300"],o[2],(u=[l.createElement("div",h(b("mockup-phone-camera",Fe()))),l.createElement("div",h(b("mockup-phone-display",d([["className",`grid place-content-center ${o[0]}`],["children",o[1]]]))))],["children",m.Children.toArray(Array.from(u))])])))))},[["w-[320px] h-[568px]","phone1",["className","border-primary"]],["w-[375px] h-[667px]","phone2",["className","border-accent"]],["w-[414px] h-[736px]","phone3",["className","border-error"]],["w-[375px] h-[812px]","phone4",["className","border-info"]],["w-[414px] h-[896px]","phone5",["className","border-success"]],["w-[320px] h-[1024px]","phone6",["className","border-warning"]]]))),l.createElement("div",{children:m.Children.toArray(Array.from(a))})))})();function jA(){return l.createElement(l.Fragment,{},LA,GA,VA)}const YA=(()=>{let a;return H("Simple",`Daisy.mockupWindow [\r
    prop.className "border" ++ color.borderBase300\r
    prop.children [\r
        Html.div [\r
            prop.className "flex justify-center px-4 py-16 border-t border-base-300"\r
            prop.text "Hello!"\r
        ]\r
    ]\r
]]`,l.createElement("div",{children:[l.createElement("div",h(b("mockup-window",d([at(["className","border"],["className","border-base-300"]),(a=[l.createElement("div",{className:"flex justify-center px-4 py-16 border-t border-base-300",children:"Hello!"})],["children",m.Children.toArray(Array.from(a))])]))))]}))})(),QA=(()=>{let a;return H("With background color",`Daisy.mockupWindow [\r
    color.bgBase300\r
    prop.children [\r
        Html.div [\r
            prop.className "flex justify-center px-4 py-16" ++ color.bgBase200\r
            prop.text "Hello!"\r
        ]\r
    ]\r
]`,l.createElement("div",{children:[l.createElement("div",h(b("mockup-window",d([["className","bg-base-300"],(a=[l.createElement("div",h(d([at(["className","flex justify-center px-4 py-16"],["className","bg-base-200"]),["children","Hello!"]])))],["children",m.Children.toArray(Array.from(a))])]))))]}))})();function XA(){return l.createElement(l.Fragment,{},YA,QA)}function ZA(){let a,i,o,u,p,y,E;const w=[(a=d(["First of all you need to follow the ",l.createElement("a",{className:"link",href:"https://daisyui.com/docs/install",children:"DaisyUI installation steps"})," and then proceed with installing ",l.createElement("a",{className:"link",href:"https://www.nuget.org/packages/Feliz.DaisyUI",children:"Feliz.DaisyUI NuGet"}),"."]),l.createElement("div",{className:"description",children:m.Children.toArray(Array.from(a))})),l.createElement("div",{className:"description",children:m.Children.toArray(["Using NuGet package command"])}),(i=v((o=v(l.createElement("pre",h(d([["data-prefix","$"],(u=[l.createElement("code",{children:["Install-Package Feliz.DaisyUI"]})],["children",m.Children.toArray(Array.from(u))])])))),l.createElement("div",{className:"mockup-code",children:m.Children.toArray(Array.from(o))}))),l.createElement("div",{className:"max-w-xl",children:m.Children.toArray(Array.from(i))})),l.createElement("div",{className:"description",children:m.Children.toArray(["or Paket"])}),(p=v((y=v(l.createElement("pre",h(d([["data-prefix","$"],(E=[l.createElement("code",{children:["paket add Feliz.DaisyUI"]})],["children",m.Children.toArray(Array.from(E))])])))),l.createElement("div",{className:"mockup-code",children:m.Children.toArray(Array.from(y))}))),l.createElement("div",{className:"max-w-xl",children:m.Children.toArray(Array.from(p))}))];return l.createElement(l.Fragment,{},...w)}class KA extends lc{constructor(i){super(),this.tag=0,this.fields=[i]}cases(){return["UrlChanged"]}}class Uh extends Ha{constructor(i){super(),this.Page=i}}function FA(){const a=Ch(xh(window.location.hash,1));return[new Uh(a),Vg(a)]}function JA(a,i){return[new Uh(a.fields[0]),cc()]}function $A(a,i,o,u,p){let y,E,w,D,N,z,M,q,B,Q,Z;const W=d([(y=d([(E=v((w=v(l.createElement("label",h(b("btn",d([["className","btn-square"],["className","btn-ghost"],["htmlFor","main-menu"],(D=[l.createElement("svg",h(d([["viewBox","0 0 24 24"],["className","inline-block w-6 h-6 stroke-current"],(N=v(l.createElement("path",{d:"M4 6h16M4 12h16M4 18h16",strokeWidth:2})),["children",m.Children.toArray(Array.from(N))])])))],["children",m.Children.toArray(Array.from(D))])]))))),l.createElement("div",{className:"lg:hidden",children:m.Children.toArray(Array.from(w))}))),l.createElement("div",{className:"navbar-start",children:m.Children.toArray(Array.from(E))})),(z=v(l.createElement("div",h(b("dropdown",d([["className","dropdown-end"],["className","z-50"],(M=[l.createElement("div",h(b("btn",d([["tabIndex",0],["className","btn-secondary"],["children","Change Theme"]])))),l.createElement("ul",h(b("dropdown-content",d([["tabIndex",0],(q=[l.createElement("ul",h(b("menu",d([["className","menu-md"],["className","bg-base-200"],["className","text-base-content"],["className","p-4 w-96 h-120 rounded-b-box overflow-y-auto"],(B=we(ee(()=>Xe(ge=>{let ce;return ue((ce=v(l.createElement("input",h(b("input",d([["type","text"],["type","radio"],["className","theme-controller"],["value",ge[0]],["name","theme"],["className","btn btn-sm btn-block btn-ghost justify-start"],["aria-label",ge[1]]]))))),l.createElement("li",{children:m.Children.toArray(Array.from(ce))})))},[["light","🌝 light"],["dark","🌚 dark"],["cupcake","🧁 cupcake"],["bumblebee","🐝 bumblebee"],["emerald","✳️ emerald"],["corporate","🏢 corporate"],["synthwave","🌃 synthwave"],["retro","👴 retro"],["cyberpunk","🤖 cyberpunk"],["valentine","🌸 valentine"],["halloween","🎃 halloween"],["garden","🌷 garden"],["forest","🌲 forest"],["aqua","🐟 aqua"],["lofi","👓 lofi"],["pastel","🖍 pastel"],["️fantasy","🧚‍️ fantasy"],["wireframe","📝 wireframe"],["black","🏴 black"],["luxury","💎 luxury"],["️dracula","🧛‍️ dracula"],["cmyk","🖨 CMYK"],["autumn","🍁 autumn"],["business","💼 business"],["acid","💊 acid"],["lemonade","🍋 lemonade"],["night","🌃 night"],["coffee","☕ coffee"],["winter","❄ winter"],["dim","🔅 dim"],["nord","⛰️ nord"],["sunset","🌆 sunset"],["abyss","🕳️ abyss"],["caramellatte","☕ caramellatte"],["silk","👗 silk"]]))),["children",m.Children.toArray(Array.from(B))])]))))],["children",m.Children.toArray(Array.from(q))])]))))],["children",m.Children.toArray(Array.from(M))])]))))),l.createElement("div",{className:"navbar-end",children:m.Children.toArray(Array.from(z))}))]),l.createElement("div",{className:"navbar",children:m.Children.toArray(Array.from(y))})),(Q=d([l.createElement("h2",h(d([at(["className","text-primary"],["className","my-6 text-5xl font-bold"]),(Z=[o,l.createElement("a",h(b("btn",d([["className","ml-2"],["className","btn-warning"],["className","btn-outline"],["className","btn-xs"],["href",`https://daisyui.com${u}`],["children",m.Children.toArray(["daisyui docs"])]]))))],["children",m.Children.toArray(Array.from(Z))])]))),p]),l.createElement("div",{className:"px-5 py-5 bg-base-100",children:m.Children.toArray(Array.from(Q))}))]);return l.createElement("div",{className:"drawer-content",children:m.Children.toArray(Array.from(W))})}function WA(a){let i,o,u,p,y,E,w,D,N,z,M;const q=(Z,W,ge)=>{const ce=v(l.createElement("a",h(we(ee(()=>{let ze,Be;return Ke(ue(["href",(ze=Oo(ge),Be=ze[1],To($i(se=>Ca(ec(se[0],v(se[1]+gl(Be)))),zo(ze[0])),()=>Ca(v(gl(Be)))))]),ee(()=>Ke(ue(["onClick",se=>{Kf(se)}]),ee(()=>Ke(On(a,ge)?ue(at(["className","menu-active"],["className","justify-between"])):ue(["className","justify-between"]),ee(()=>{let se;return ue((se=[l.createElement("span",{children:[W]}),l.createElement("span",{className:"badge",children:Z})],["children",m.Children.toArray(Array.from(se))]))}))))))})))));return l.createElement("li",{children:m.Children.toArray(Array.from(ce))})},B=(Z,W)=>{const ge=v(l.createElement("a",h(we(ee(()=>Ke(On(a,W)?ue(["className","menu-active"]):Ah(),ee(()=>Ke(ue(["children",Z]),ee(()=>{let ce,ze;return Ke(ue(["href",(ce=Oo(W),ze=ce[1],To($i(Be=>Ca(ec(Be[0],v(Be[1]+gl(ze)))),zo(ce[0])),()=>Ca(v(gl(ze)))))]),ee(()=>ue(["onClick",Be=>{Kf(Be)}])))})))))))));return l.createElement("li",{children:m.Children.toArray(Array.from(ge))})},Q=d([l.createElement("label",h(b("drawer-overlay",v(["htmlFor","main-menu"])))),l.createElement("aside",h(d([["className","flex flex-col border-r w-80 bg-base-100 text-base-content"],(i=[(o=d([l.createElement("span",{className:"text-primary",children:"Feliz."}),"DaisyUI",l.createElement("a",h(d([["href","https://www.nuget.org/packages/Feliz.DaisyUI"],(u=[l.createElement("img",{src:"https://img.shields.io/nuget/v/Feliz.DaisyUI.svg?style=flat-square"})],["children",m.Children.toArray(Array.from(u))])])))]),l.createElement("div",{className:"inline-block text-3xl font-title px-5 py-5 font-bold",children:m.Children.toArray(Array.from(o))})),(p=v(l.createElement("div",h(b("alert",d([["className","alert-info"],(y=[(E=d([l.createElement("div",{dangerouslySetInnerHTML:{__html:"🎉 Now based on <strong>DaisyUI v5!</strong>"}}),(w=v(l.createElement("a",{children:"Read the change log",href:"https://daisyui.com/docs/changelog/#500"})),l.createElement("div",{className:"text-sm self-center underline",children:m.Children.toArray(Array.from(w))}))]),l.createElement("div",{className:"flex flex-col gap-2",children:m.Children.toArray(Array.from(E))}))],["children",m.Children.toArray(Array.from(y))])]))))),l.createElement("div",{className:"p-4",children:m.Children.toArray(Array.from(p))})),l.createElement("ul",h(b("menu",d([["className","menu-md"],["className","flex flex-col p-4 pt-0 w-full"],(D=[(N=v(l.createElement("span",{children:["Docs"]})),l.createElement("li",{className:"menu-title",children:m.Children.toArray(Array.from(N))})),B("Install",new O(0,[])),B("Use",new O(1,[])),B("Themes",new O(2,[])),B("Colors",new O(3,[]))],["children",m.Children.toArray(Array.from(D))])])))),l.createElement("ul",h(b("menu",d([["className","menu-md"],["className","flex flex-col p-4 pt-0 w-full"],(z=[(M=v(l.createElement("span",{children:["Components"]})),l.createElement("li",{className:"menu-title",children:m.Children.toArray(Array.from(M))})),B("Accordion",new O(4,[])),q("updated","Alert",new O(5,[])),B("Avatar",new O(6,[])),q("updated","Badge",new O(7,[])),B("Breadcrumbs",new O(8,[])),q("updated","Button",new O(9,[])),q("updated","Card",new O(10,[])),B("Carousel",new O(11,[])),B("Chat bubble",new O(12,[])),B("Collapse",new O(13,[])),B("Countdown",new O(14,[])),B("Diff",new O(15,[])),B("Divider",new O(16,[])),q("new","Dock",new O(17,[])),B("Drawer",new O(18,[])),q("updated","Dropdown",new O(19,[])),q("new","Fieldset",new O(20,[])),q("new","Filter",new O(21,[])),q("updated","Footer",new O(22,[])),B("Hero",new O(23,[])),B("Indicator",new O(25,[])),B("Join (group items)",new O(24,[])),B("Kbd",new O(26,[])),q("new","Label",new O(27,[])),B("Link",new O(28,[])),q("new","List",new O(29,[])),B("Loading",new O(30,[])),q("updated","Mask",new O(31,[])),q("updated","Menu",new O(32,[])),q("updated","Modal",new O(33,[])),q("updated","Navbar",new O(34,[])),B("Pagination",new O(35,[])),B("Progress",new O(36,[])),B("Radial Progress",new O(37,[])),B("Rating",new O(62,[])),B("Skeleton",new O(38,[])),q("updated","Stack",new O(39,[])),B("Stat",new O(40,[])),q("new","Status",new O(41,[])),q("updated","Steps",new O(42,[])),B("Swap",new O(43,[])),q("updated","Tab",new O(44,[])),B("Table",new O(45,[])),B("Theme Controller",new O(46,[])),B("Timeline",new O(47,[])),B("Toast",new O(48,[])),B("Tooltip",new O(49,[])),q("new","Validator",new O(50,[])),q("updated","File - Input",new O(51,[])),q("updated","Form - Checkbox",new O(52,[])),q("updated","Form - Input",new O(53,[])),q("updated","Form - Radio",new O(54,[])),B("Form - Range",new O(55,[])),q("updated","Form - Select",new O(56,[])),q("updated","Form - Textarea",new O(57,[])),q("updated","Form - Toggle",new O(58,[])),B("MockupCode",new O(59,[])),q("updated","MockupPhone",new O(60,[])),B("MockupWindow",new O(61,[]))],["children",m.Children.toArray(Array.from(z))])]))))],["children",m.Children.toArray(Array.from(i))])])))]);return l.createElement("div",{className:"drawer-side",children:m.Children.toArray(Array.from(Q))})}function IA(a,i,o,u,p,y){let E,w;return l.createElement("div",h(d([["className","bg-base-100 text-base-content h-screen"],(E=[l.createElement("div",h(b("drawer",d([["className","lg:drawer-open"],(w=[l.createElement("input",h(b("drawer-toggle",d([["type","checkbox"],["id","main-menu"]])))),$A(a,i,o,u,y),WA(p)],["children",m.Children.toArray(Array.from(w))])]))))],["children",m.Children.toArray(Array.from(E))])])))}function PA(){let a;const i=Oh(()=>Mh(FA,JA,(E,w)=>{}),void 0,void 0),o=i[0],u=i[1];let p;const y=o.Page;return p=y.tag===1?["How to use","/docs/use",l.createElement(M0,null)]:y.tag===2?["Themes","/docs/default-themes",l.createElement(U0,null)]:y.tag===3?["Colors","/core/colors",l.createElement(q0,null)]:y.tag===4?["Accordion","/components/accordion",l.createElement(G0,null)]:y.tag===5?["Alert","/components/alert",l.createElement(X0,null)]:y.tag===6?["Avatar","/components/avatar",l.createElement(F0,null)]:y.tag===7?["Badge","/components/badge",l.createElement(I0,null)]:y.tag===8?["Breadcrumbs","/components/breadcrumbs",l.createElement(ev,null)]:y.tag===9?["Button","/components/button",l.createElement(lv,null)]:y.tag===10?["Card","/components/card",l.createElement(ov,null)]:y.tag===11?["Carousel","/components/carousel",l.createElement(mv,null)]:y.tag===12?["ChatBubble","/components/chat",l.createElement(bv,null)]:y.tag===13?["Collapse","/components/collapse",l.createElement(Av,null)]:y.tag===14?["Countdown","/components/countdown",l.createElement(Cv,null)]:y.tag===15?["Diff","/components/diff",l.createElement(_v,null)]:y.tag===16?["Divider","/components/divider",l.createElement(kv,null)]:y.tag===17?["Dock","/components/dock",l.createElement(Mv,null)]:y.tag===18?["Drawer","/components/drawer",l.createElement(Rv,null)]:y.tag===19?["Dropdown","/components/dropdown",l.createElement(Gv,null)]:y.tag===20?["Fieldset","/components/fieldset",l.createElement(Qv,null)]:y.tag===21?["Filter","/components/filter",l.createElement(Kv,null)]:y.tag===22?["Footer","/components/footer",l.createElement(Jv,null)]:y.tag===23?["Hero","/components/hero",l.createElement(Wv,null)]:y.tag===25?["Indicator","/components/indicator",l.createElement(nE,null)]:y.tag===24?["Join","/components/join",l.createElement(lE,null)]:y.tag===26?["Kbd","/components/kdb",l.createElement(sE,null)]:y.tag===27?["Label","/components/label",l.createElement(hE,null)]:y.tag===28?["Link","/components/link",l.createElement(vE,null)]:y.tag===29?["List","/components/list",l.createElement(NE,null)]:y.tag===30?["Loading","/components/loading",l.createElement(DE,null)]:y.tag===31?["Mask","/components/mask",l.createElement(HE,null)]:y.tag===32?["Menu","/components/menu",l.createElement(OE,null)]:y.tag===33?["Modal","/components/modal",l.createElement(UE,null)]:y.tag===34?["Navbar","/components/navbar",l.createElement(GE,null)]:y.tag===35?["Pagination","/components/pagination",l.createElement(YE,null)]:y.tag===36?["Progress","/components/progress",l.createElement(ZE,null)]:y.tag===37?["RadialProgress","/components/radial-progress",l.createElement(JE,null)]:y.tag===62?["Rating","/components/rating",l.createElement(IE,null)]:y.tag===38?["Skeleton","/components/skeleton",l.createElement(t1,null)]:y.tag===39?["Stack","/components/stack",l.createElement(a1,null)]:y.tag===40?["Stat","/components/stat",l.createElement(o1,null)]:y.tag===41?["Status","/components/status",l.createElement(m1,null)]:y.tag===42?["Steps","/components/steps",l.createElement(b1,null)]:y.tag===43?["Swap","/components/swap",l.createElement(E1,null)]:y.tag===44?["Tab","/components/tab",l.createElement(D1,null)]:y.tag===45?["Table","/components/table",l.createElement(M1,null)]:y.tag===46?["Theme Controller","/components/theme-controller",l.createElement(R1,null)]:y.tag===47?["Timeline","/components/timeline",l.createElement(q1,null)]:y.tag===48?["Toast","/components/toast",l.createElement(j1,null)]:y.tag===49?["Tooltip","/components/tooltip",l.createElement(Z1,null)]:y.tag===50?["Validator","/components/validator",l.createElement($1,null)]:y.tag===51?["File - Input","/components/file-input",l.createElement(lA,null)]:y.tag===52?["Form - Checkbox","/components/form/checkbox",l.createElement(oA,null)]:y.tag===53?["Form - Input","/components/form/input",l.createElement(bA,null)]:y.tag===54?["Form - Radio","/components/form/radio",l.createElement(EA,null)]:y.tag===55?["Form - Range","/components/form/range",l.createElement(SA,null)]:y.tag===56?["Form - Select","/components/form/select",l.createElement(_A,null)]:y.tag===57?["Form - Textarea","/components/form/textarea",l.createElement(kA,null)]:y.tag===58?["Form - Toggle","/components/form/toggle",l.createElement(RA,null)]:y.tag===59?["MockupCode","/components/mockup/code",l.createElement(qA,null)]:y.tag===60?["MockupPhone","/components/mockup/phone",l.createElement(jA,null)]:y.tag===61?["MockupWindow","/components/mockup/window",l.createElement(XA,null)]:["Installation","/docs/install",l.createElement(ZA,null)],Bg(h(d([["hashMode",1],["onUrlChanged",E=>{u(new KA(Ch(E)))}],(a=v(IA(o,u,p[0],p[1],o.Page,p[2])),["application",l.createElement(l.Fragment,{},...a)])])))}fb.createRoot(document.getElementById("safer-app")).render(l.createElement(PA,null));
