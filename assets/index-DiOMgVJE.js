var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,ee||(ee=!0,C());else{var t=n(l);t!==null&&se(x,t.startTime-e)}}}var ee=!1,te=-1,S=5,ne=-1;function re(){return g?!0:!(e.unstable_now()-ne<S)}function ie(){if(g=!1,ee){var t=e.unstable_now();ne=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(te),te=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&re());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&se(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}}}finally{i?C():ee=!1}}}var C;if(typeof y==`function`)C=function(){y(ie)};else if(typeof MessageChannel<`u`){var ae=new MessageChannel,oe=ae.port2;ae.port1.onmessage=ie,C=function(){oe.postMessage(null)}}else C=function(){_(ie,0)};function se(t,n){te=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):S=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(te),te=-1):h=!0,se(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,C()))),r},e.unstable_shouldYield=re,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function te(){}var S={H:null,A:null,T:null,S:null},ne=Object.prototype.hasOwnProperty;function re(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ie(e,t){return re(e.type,t,e.props)}function C(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ae(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var oe=/\/+/g;function se(e,t){return typeof e==`object`&&e&&e.key!=null?ae(``+e.key):t.toString(36)}function ce(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(te,te):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function w(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,w(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+se(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(oe,`$&/`)+`/`),w(o,r,i,``,function(e){return e})):o!=null&&(C(o)&&(o=ie(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(oe,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+se(a,u),c+=w(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+se(a,u++),c+=w(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return w(ce(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function le(e,t,n){if(e==null)return e;var r=[],i=0;return w(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ue(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var T=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},E={map:le,forEach:function(e,t,n){le(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return le(e,function(){t++}),t},toArray:function(e){return le(e,function(e){return e})||[]},only:function(e){if(!C(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=E,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=S,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return S.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ne.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return re(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ne.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return re(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=C,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ue}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=S.T,n={};S.T=n;try{var r=e(),i=S.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(te,T)}catch(e){T(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),S.T=t}},e.unstable_useCacheRefresh=function(){return S.H.useCacheRefresh()},e.use=function(e){return S.H.use(e)},e.useActionState=function(e,t,n){return S.H.useActionState(e,t,n)},e.useCallback=function(e,t){return S.H.useCallback(e,t)},e.useContext=function(e){return S.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return S.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return S.H.useEffect(e,t)},e.useEffectEvent=function(e){return S.H.useEffectEvent(e)},e.useId=function(){return S.H.useId()},e.useImperativeHandle=function(e,t,n){return S.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return S.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return S.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return S.H.useMemo(e,t)},e.useOptimistic=function(e,t){return S.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return S.H.useReducer(e,t,n)},e.useRef=function(e){return S.H.useRef(e)},e.useState=function(e){return S.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return S.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return S.H.useTransition()},e.version=`19.2.8`})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=f();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.8`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=u(),n=f(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),te=Symbol.for(`react.context`),S=Symbol.for(`react.forward_ref`),ne=Symbol.for(`react.suspense`),re=Symbol.for(`react.suspense_list`),ie=Symbol.for(`react.memo`),C=Symbol.for(`react.lazy`),ae=Symbol.for(`react.activity`),oe=Symbol.for(`react.memo_cache_sentinel`),se=Symbol.iterator;function ce(e){return typeof e!=`object`||!e?null:(e=se&&e[se]||e[`@@iterator`],typeof e==`function`?e:null)}var w=Symbol.for(`react.client.reference`);function le(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===w?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case ne:return`Suspense`;case re:return`SuspenseList`;case ae:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case te:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case S:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ie:return t=e.displayName||null,t===null?le(e.type)||`Memo`:t;case C:t=e._payload,e=e._init;try{return le(e(t))}catch{}}return null}var ue=Array.isArray,T=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de={pending:!1,data:null,method:null,action:null},fe=[],pe=-1;function me(e){return{current:e}}function he(e){0>pe||(e.current=fe[pe],fe[pe]=null,pe--)}function D(e,t){pe++,fe[pe]=e.current,e.current=t}var ge=me(null),_e=me(null),ve=me(null),ye=me(null);function be(e,t){switch(D(ve,t),D(_e,e),D(ge,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}he(ge),D(ge,e)}function xe(){he(ge),he(_e),he(ve)}function Se(e){e.memoizedState!==null&&D(ye,e);var t=ge.current,n=Hd(t,e.type);t!==n&&(D(_e,e),D(ge,n))}function Ce(e){_e.current===e&&(he(ge),he(_e)),ye.current===e&&(he(ye),Qf._currentValue=de)}var we,Te;function Ee(e){if(we===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);we=t&&t[1]||``,Te=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+we+e+Te}var De=!1;function Oe(e,t){if(!e||De)return``;De=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{De=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ee(n):``}function ke(e,t){switch(e.tag){case 26:case 27:case 5:return Ee(e.type);case 16:return Ee(`Lazy`);case 13:return e.child!==t&&t!==null?Ee(`Suspense Fallback`):Ee(`Suspense`);case 19:return Ee(`SuspenseList`);case 0:case 15:return Oe(e.type,!1);case 11:return Oe(e.type.render,!1);case 1:return Oe(e.type,!0);case 31:return Ee(`Activity`);default:return``}}function Ae(e){try{var t=``,n=null;do t+=ke(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var je=Object.prototype.hasOwnProperty,Me=t.unstable_scheduleCallback,Ne=t.unstable_cancelCallback,Pe=t.unstable_shouldYield,Fe=t.unstable_requestPaint,Ie=t.unstable_now,Le=t.unstable_getCurrentPriorityLevel,Re=t.unstable_ImmediatePriority,ze=t.unstable_UserBlockingPriority,Be=t.unstable_NormalPriority,Ve=t.unstable_LowPriority,He=t.unstable_IdlePriority,Ue=t.log,We=t.unstable_setDisableYieldValue,Ge=null,Ke=null;function qe(e){if(typeof Ue==`function`&&We(e),Ke&&typeof Ke.setStrictMode==`function`)try{Ke.setStrictMode(Ge,e)}catch{}}var Je=Math.clz32?Math.clz32:Ze,Ye=Math.log,Xe=Math.LN2;function Ze(e){return e>>>=0,e===0?32:31-(Ye(e)/Xe|0)|0}var Qe=256,O=262144,$e=4194304;function et(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function tt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=et(n))):i=et(o):i=et(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=et(n))):i=et(o)):i=et(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function nt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function rt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function it(){var e=$e;return $e<<=1,!($e&62914560)&&($e=4194304),e}function at(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ot(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function st(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Je(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&ct(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function ct(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Je(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function lt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Je(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ut(e,t){var n=t&-t;return n=n&42?1:dt(n),(n&(e.suspendedLanes|t))===0?n:0}function dt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ft(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function pt(){var e=E.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function mt(e,t){var n=E.p;try{return E.p=e,t()}finally{E.p=n}}var ht=Math.random().toString(36).slice(2),gt=`__reactFiber$`+ht,_t=`__reactProps$`+ht,vt=`__reactContainer$`+ht,yt=`__reactEvents$`+ht,bt=`__reactListeners$`+ht,xt=`__reactHandles$`+ht,St=`__reactResources$`+ht,Ct=`__reactMarker$`+ht;function wt(e){delete e[gt],delete e[_t],delete e[yt],delete e[bt],delete e[xt]}function Tt(e){var t=e[gt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vt]||n[gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[gt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Et(e){if(e=e[gt]||e[vt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Dt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Ot(e){var t=e[St];return t||=e[St]={hoistableStyles:new Map,hoistableScripts:new Map},t}function kt(e){e[Ct]=!0}var At=new Set,jt={};function Mt(e,t){Nt(e,t),Nt(e+`Capture`,t)}function Nt(e,t){for(jt[e]=t,e=0;e<t.length;e++)At.add(t[e])}var Pt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Ft={},It={};function Lt(e){return je.call(It,e)?!0:je.call(Ft,e)?!1:Pt.test(e)?It[e]=!0:(Ft[e]=!0,!1)}function Rt(e,t,n){if(Lt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}}function zt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Bt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Vt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Ht(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ut(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Wt(e){if(!e._valueTracker){var t=Ht(e)?`checked`:`value`;e._valueTracker=Ut(e,t,``+e[t])}}function Gt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Ht(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function Kt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var qt=/[\n"\\]/g;function Jt(e){return e.replace(qt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Yt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Vt(t)):e.value!==``+Vt(t)&&(e.value=``+Vt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Zt(e,o,Vt(n)):Zt(e,o,Vt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Vt(s):e.removeAttribute(`name`)}function Xt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Wt(e);return}n=n==null?``:``+Vt(n),t=t==null?n:``+Vt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Wt(e)}function Zt(e,t,n){t===`number`&&Kt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Qt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Vt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function $t(e,t,n){if(t!=null&&(t=``+Vt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Vt(n)}function en(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ue(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Vt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Wt(e)}function tn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var nn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function rn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||nn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function an(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&rn(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&rn(e,o,t[o])}function on(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var sn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),cn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ln(e){return cn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function un(){}var dn=null;function fn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pn=null,mn=null;function hn(e){var t=Et(e);if(t&&(e=t.stateNode)){var n=e[_t]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Yt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Jt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[_t]||null;if(!a)throw Error(i(90));Yt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Gt(r)}break a;case`textarea`:$t(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Qt(e,!!n.multiple,t,!1)}}}var gn=!1;function _n(e,t,n){if(gn)return e(t,n);gn=!0;try{return e(t)}finally{if(gn=!1,(pn!==null||mn!==null)&&(vu(),pn&&(t=pn,e=mn,mn=pn=null,hn(t),e)))for(t=0;t<e.length;t++)hn(e[t])}}function vn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[_t]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var yn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),bn=!1;if(yn)try{var xn={};Object.defineProperty(xn,"passive",{get:function(){bn=!0}}),window.addEventListener(`test`,xn,xn),window.removeEventListener(`test`,xn,xn)}catch{bn=!1}var Sn=null,Cn=null,wn=null;function Tn(){if(wn)return wn;var e,t=Cn,n=t.length,r,i=`value`in Sn?Sn.value:Sn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return wn=i.slice(e,1<r?1-r:void 0)}function En(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Dn(){return!0}function On(){return!1}function kn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Dn:On,this.isPropagationStopped=On,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Dn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Dn)},persist:function(){},isPersistent:Dn}),t}var An={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jn=kn(An),Mn=h({},An,{view:0,detail:0}),Nn=kn(Mn),Pn,Fn,In,Ln=h({},Mn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==In&&(In&&e.type===`mousemove`?(Pn=e.screenX-In.screenX,Fn=e.screenY-In.screenY):Fn=Pn=0,In=e),Pn)},movementY:function(e){return`movementY`in e?e.movementY:Fn}}),Rn=kn(Ln),zn=kn(h({},Ln,{dataTransfer:0})),k=kn(h({},Mn,{relatedTarget:0})),Bn=kn(h({},An,{animationName:0,elapsedTime:0,pseudoElement:0})),Vn=kn(h({},An,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Hn=kn(h({},An,{data:0})),A={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},j={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Un={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Wn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Un[e])?!!t[e]:!1}function Gn(){return Wn}var Kn=kn(h({},Mn,{key:function(e){if(e.key){var t=A[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=En(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?j[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gn,charCode:function(e){return e.type===`keypress`?En(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?En(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),qn=kn(h({},Ln,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Jn=kn(h({},Mn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gn})),Yn=kn(h({},An,{propertyName:0,elapsedTime:0,pseudoElement:0})),Xn=kn(h({},Ln,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Zn=kn(h({},An,{newState:0,oldState:0})),Qn=[9,13,27,32],$n=yn&&`CompositionEvent`in window,er=null;yn&&`documentMode`in document&&(er=document.documentMode);var tr=yn&&`TextEvent`in window&&!er,nr=yn&&(!$n||er&&8<er&&11>=er),rr=` `,ir=!1;function ar(e,t){switch(e){case`keyup`:return Qn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function or(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var sr=!1;function M(e,t){switch(e){case`compositionend`:return or(t);case`keypress`:return t.which===32?(ir=!0,rr):null;case`textInput`:return e=t.data,e===rr&&ir?null:e;default:return null}}function cr(e,t){if(sr)return e===`compositionend`||!$n&&ar(e,t)?(e=Tn(),wn=Cn=Sn=null,sr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return nr&&t.locale!==`ko`?null:t.data;default:return null}}var N={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function P(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!N[e.type]:t===`textarea`}function F(e,t,n,r){pn?mn?mn.push(r):mn=[r]:pn=r,t=Td(t,`onChange`),0<t.length&&(n=new jn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var I=null,lr=null;function ur(e){vd(e,0)}function dr(e){if(Gt(Dt(e)))return e}function fr(e,t){if(e===`change`)return t}var pr=!1;if(yn){var mr;if(yn){var L=`oninput`in document;if(!L){var hr=document.createElement(`div`);hr.setAttribute(`oninput`,`return;`),L=typeof hr.oninput==`function`}mr=L}else mr=!1;pr=mr&&(!document.documentMode||9<document.documentMode)}function gr(){I&&(I.detachEvent(`onpropertychange`,_r),lr=I=null)}function _r(e){if(e.propertyName===`value`&&dr(lr)){var t=[];F(t,lr,e,fn(e)),_n(ur,t)}}function vr(e,t,n){e===`focusin`?(gr(),I=t,lr=n,I.attachEvent(`onpropertychange`,_r)):e===`focusout`&&gr()}function yr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return dr(lr)}function br(e,t){if(e===`click`)return dr(t)}function xr(e,t){if(e===`input`||e===`change`)return dr(t)}function Sr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Cr=typeof Object.is==`function`?Object.is:Sr;function wr(e,t){if(Cr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!je.call(t,i)||!Cr(e[i],t[i]))return!1}return!0}function Tr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Er(e,t){var n=Tr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Tr(n)}}function Dr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Dr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Or(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Kt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Kt(e.document)}return t}function kr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Ar=yn&&`documentMode`in document&&11>=document.documentMode,jr=null,Mr=null,Nr=null,Pr=!1;function Fr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pr||jr==null||jr!==Kt(r)||(r=jr,`selectionStart`in r&&kr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Nr&&wr(Nr,r)||(Nr=r,r=Td(Mr,`onSelect`),0<r.length&&(t=new jn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=jr)))}function R(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Ir={animationend:R(`Animation`,`AnimationEnd`),animationiteration:R(`Animation`,`AnimationIteration`),animationstart:R(`Animation`,`AnimationStart`),transitionrun:R(`Transition`,`TransitionRun`),transitionstart:R(`Transition`,`TransitionStart`),transitioncancel:R(`Transition`,`TransitionCancel`),transitionend:R(`Transition`,`TransitionEnd`)},Lr={},z={};yn&&(z=document.createElement(`div`).style,`AnimationEvent`in window||(delete Ir.animationend.animation,delete Ir.animationiteration.animation,delete Ir.animationstart.animation),`TransitionEvent`in window||delete Ir.transitionend.transition);function Rr(e){if(Lr[e])return Lr[e];if(!Ir[e])return e;var t=Ir[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in z)return Lr[e]=t[n];return e}var zr=Rr(`animationend`),Br=Rr(`animationiteration`),Vr=Rr(`animationstart`),B=Rr(`transitionrun`),Hr=Rr(`transitionstart`),V=Rr(`transitioncancel`),Ur=Rr(`transitionend`),H=new Map,Wr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Wr.push(`scrollEnd`);function Gr(e,t){H.set(e,t),Mt(t,[e])}var Kr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},U=[],W=0,qr=0;function Jr(){for(var e=W,t=qr=W=0;t<e;){var n=U[t];U[t++]=null;var r=U[t];U[t++]=null;var i=U[t];U[t++]=null;var a=U[t];if(U[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&Zr(n,i,a)}}function G(e,t,n,r){U[W++]=e,U[W++]=t,U[W++]=n,U[W++]=r,qr|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Yr(e,t,n,r){return G(e,t,n,r),Qr(e)}function Xr(e,t){return G(e,null,null,t),Qr(e)}function Zr(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Je(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function Qr(e){if(50<lu)throw lu=0,uu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var $r={};function ei(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(e,t,n,r){return new ei(e,t,n,r)}function ni(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ri(e,t){var n=e.alternate;return n===null?(n=ti(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function ii(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ai(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)ni(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,ge.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ae:return e=ti(31,n,t,a),e.elementType=ae,e.lanes=o,e;case y:return oi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=ti(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case ne:return e=ti(13,n,t,a),e.elementType=ne,e.lanes=o,e;case re:return e=ti(19,n,t,a),e.elementType=re,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case te:s=10;break a;case ee:s=9;break a;case S:s=11;break a;case ie:s=14;break a;case C:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=ti(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function oi(e,t,n,r){return e=ti(7,e,r,t),e.lanes=n,e}function si(e,t,n){return e=ti(6,e,null,t),e.lanes=n,e}function ci(e){var t=ti(18,null,null,0);return t.stateNode=e,t}function li(e,t,n){return t=ti(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ui=new WeakMap;function di(e,t){if(typeof e==`object`&&e){var n=ui.get(e);return n===void 0?(t={value:e,source:t,stack:Ae(t)},ui.set(e,t),t):n}return{value:e,source:t,stack:Ae(t)}}var fi=[],pi=0,mi=null,hi=0,gi=[],_i=0,vi=null,yi=1,bi=``;function xi(e,t){fi[pi++]=hi,fi[pi++]=mi,mi=e,hi=t}function Si(e,t,n){gi[_i++]=yi,gi[_i++]=bi,gi[_i++]=vi,vi=e;var r=yi;e=bi;var i=32-Je(r)-1;r&=~(1<<i),n+=1;var a=32-Je(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,yi=1<<32-Je(t)+i|n<<i|r,bi=a+e}else yi=1<<a|n<<i|r,bi=e}function Ci(e){e.return!==null&&(xi(e,1),Si(e,1,0))}function wi(e){for(;e===mi;)mi=fi[--pi],fi[pi]=null,hi=fi[--pi],fi[pi]=null;for(;e===vi;)vi=gi[--_i],gi[_i]=null,bi=gi[--_i],gi[_i]=null,yi=gi[--_i],gi[_i]=null}function Ti(e,t){gi[_i++]=yi,gi[_i++]=bi,gi[_i++]=vi,yi=t.id,bi=t.overflow,vi=e}var Ei=null,Di=null,K=!1,Oi=null,ki=!1,Ai=Error(i(519));function ji(e){throw Li(di(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Ai}function Mi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[gt]=e,t[_t]=r,n){case`dialog`:$(`cancel`,t),$(`close`,t);break;case`iframe`:case`object`:case`embed`:$(`load`,t);break;case`video`:case`audio`:for(n=0;n<gd.length;n++)$(gd[n],t);break;case`source`:$(`error`,t);break;case`img`:case`image`:case`link`:$(`error`,t),$(`load`,t);break;case`details`:$(`toggle`,t);break;case`input`:$(`invalid`,t),Xt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:$(`invalid`,t);break;case`textarea`:$(`invalid`,t),en(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||jd(t.textContent,n)?(r.popover!=null&&($(`beforetoggle`,t),$(`toggle`,t)),r.onScroll!=null&&$(`scroll`,t),r.onScrollEnd!=null&&$(`scrollend`,t),r.onClick!=null&&(t.onclick=un),t=!0):t=!1,t||ji(e,!0)}function Ni(e){for(Ei=e.return;Ei;)switch(Ei.tag){case 5:case 31:case 13:ki=!1;return;case 27:case 3:ki=!0;return;default:Ei=Ei.return}}function Pi(e){if(e!==Ei)return!1;if(!K)return Ni(e),K=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Ud(e.type,e.memoizedProps)),n=!n),n&&Di&&ji(e),Ni(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Di=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Di=uf(e)}else t===27?(t=Di,Zd(e.type)?(e=lf,lf=null,Di=e):Di=t):Di=Ei?cf(e.stateNode.nextSibling):null;return!0}function Fi(){Di=Ei=null,K=!1}function Ii(){var e=Oi;return e!==null&&(Yl===null?Yl=e:Yl.push.apply(Yl,e),Oi=null),e}function Li(e){Oi===null?Oi=[e]:Oi.push(e)}var Ri=me(null),zi=null,Bi=null;function Vi(e,t,n){D(Ri,t._currentValue),t._currentValue=n}function Hi(e){e._currentValue=Ri.current,he(Ri)}function Ui(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Wi(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Ui(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Ui(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Gi(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Cr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ye.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&Wi(t,e,n,r),t.flags|=262144}function Ki(e){for(e=e.firstContext;e!==null;){if(!Cr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function qi(e){zi=e,Bi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ji(e){return Xi(zi,e)}function Yi(e,t){return zi===null&&qi(e),Xi(e,t)}function Xi(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Bi===null){if(e===null)throw Error(i(308));Bi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Bi=Bi.next=t;return n}var Zi=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Qi=t.unstable_scheduleCallback,$i=t.unstable_NormalPriority,ea={$$typeof:te,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ta(){return{controller:new Zi,data:new Map,refCount:0}}function na(e){e.refCount--,e.refCount===0&&Qi($i,function(){e.controller.abort()})}var ra=null,ia=0,aa=0,oa=null;function sa(e,t){if(ra===null){var n=ra=[];ia=0,aa=ud(),oa={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ia++,t.then(ca,ca),t}function ca(){if(--ia===0&&ra!==null){oa!==null&&(oa.status=`fulfilled`);var e=ra;ra=null,aa=0,oa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function la(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ua=T.S;T.S=function(e,t){Ql=Ie(),typeof t==`object`&&t&&typeof t.then==`function`&&sa(e,t),ua!==null&&ua(e,t)};var da=me(null);function fa(){var e=da.current;return e===null?Il.pooledCache:e}function pa(e,t){t===null?D(da,da.current):D(da,t.pool)}function ma(){var e=fa();return e===null?null:{parent:ea._currentValue,pool:e}}var ha=Error(i(460)),ga=Error(i(474)),_a=Error(i(542)),va={then:function(){}};function ya(e){return e=e.status,e===`fulfilled`||e===`rejected`}function ba(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(un,un),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,wa(e),e;default:if(typeof t.status==`string`)t.then(un,un);else{if(e=Il,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,wa(e),e}throw Sa=t,ha}}function xa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Sa=e,ha):e}}var Sa=null;function Ca(){if(Sa===null)throw Error(i(459));var e=Sa;return Sa=null,e}function wa(e){if(e===ha||e===_a)throw Error(i(483))}var q=null,Ta=0;function Ea(e){var t=Ta;return Ta+=1,q===null&&(q=[]),ba(q,e,t)}function Da(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Oa(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function ka(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=ri(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=si(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===C&&xa(i)===t.type)?(t=a(t,n.props),Da(t,n),t.return=e,t):(t=ai(n.type,n.key,n.props,null,e.mode,r),Da(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=li(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=oi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=si(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=ai(t.type,t.key,t.props,null,e.mode,n),Da(n,t),n.return=e,n;case v:return t=li(t,e.mode,n),t.return=e,t;case C:return t=xa(t),f(e,t,n)}if(ue(t)||ce(t))return t=oi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ea(t),n);if(t.$$typeof===te)return f(e,Yi(e,t),n);Oa(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case C:return n=xa(n),p(e,t,n,r)}if(ue(n)||ce(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ea(n),r);if(n.$$typeof===te)return p(e,t,Yi(e,n),r);Oa(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case C:return r=xa(r),m(e,t,n,r,i)}if(ue(r)||ce(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ea(r),i);if(r.$$typeof===te)return m(e,t,n,Yi(t,r),i);Oa(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),K&&xi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return K&&xi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),K&&xi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),K&&xi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return K&&xi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),K&&xi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===C&&xa(l)===r.type){n(e,r.sibling),c=a(r,o.props),Da(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===y?(c=oi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=ai(o.type,o.key,o.props,null,e.mode,c),Da(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=li(o,e.mode,c),c.return=e,e=c}return s(e);case C:return o=xa(o),b(e,r,o,c)}if(ue(o))return h(e,r,o,c);if(ce(o)){if(l=ce(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Ea(o),c);if(o.$$typeof===te)return b(e,r,Yi(e,o),c);Oa(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=si(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ta=0;var i=b(e,t,n,r);return q=null,i}catch(t){if(t===ha||t===_a)throw t;var a=ti(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Aa=ka(!0),ja=ka(!1),Ma=!1;function Na(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Pa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Fa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ia(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Y&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Qr(e),Zr(e,null,n),t}return G(e,r,t,n),Qr(e)}function La(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}function Ra(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var za=!1;function Ba(){if(za){var e=oa;if(e!==null)throw e}}function Va(e,t,n,r){za=!1;var i=e.updateQueue;Ma=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Z&f)===f:(r&f)===f){f!==0&&f===aa&&(za=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ma=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Ul|=o,e.lanes=o,e.memoizedState=d}}function Ha(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Ua(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ha(n[e],t)}var Wa=me(null),Ga=me(0);function Ka(e,t){e=Vl,D(Ga,e),D(Wa,t),Vl=e|t.baseLanes}function qa(){D(Ga,Vl),D(Wa,Wa.current)}function Ja(){Vl=Ga.current,he(Wa),he(Ga)}var Ya=me(null),Xa=null;function Za(e){var t=e.alternate;D(no,no.current&1),D(Ya,e),Xa===null&&(t===null||Wa.current!==null||t.memoizedState!==null)&&(Xa=e)}function Qa(e){D(no,no.current),D(Ya,e),Xa===null&&(Xa=e)}function $a(e){e.tag===22?(D(no,no.current),D(Ya,e),Xa===null&&(Xa=e)):eo(e)}function eo(){D(no,no.current),D(Ya,Ya.current)}function to(e){he(Ya),Xa===e&&(Xa=null),he(no)}var no=me(0);function ro(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var io=0,J=null,ao=null,oo=null,so=!1,co=!1,lo=!1,uo=0,fo=0,po=null,mo=0;function ho(){throw Error(i(321))}function go(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Cr(e[n],t[n]))return!1;return!0}function _o(e,t,n,r,i,a){return io=a,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?Ps:Fs,lo=!1,a=n(r,i),lo=!1,co&&(a=yo(t,n,r,i)),vo(e),a}function vo(e){T.H=Ns;var t=ao!==null&&ao.next!==null;if(io=0,oo=ao=J=null,so=!1,fo=0,po=null,t)throw Error(i(300));e===null||Qs||(e=e.dependencies,e!==null&&Ki(e)&&(Qs=!0))}function yo(e,t,n,r){J=e;var a=0;do{if(co&&(po=null),fo=0,co=!1,25<=a)throw Error(i(301));if(a+=1,oo=ao=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}T.H=Is,o=t(n,r)}while(co);return o}function bo(){var e=T.H,t=e.useState()[0];return t=typeof t.then==`function`?Do(t):t,e=e.useState()[0],(ao===null?null:ao.memoizedState)!==e&&(J.flags|=1024),t}function xo(){var e=uo!==0;return uo=0,e}function So(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Co(e){if(so){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}so=!1}io=0,oo=ao=J=null,co=!1,fo=uo=0,po=null}function wo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oo===null?J.memoizedState=oo=e:oo=oo.next=e,oo}function To(){if(ao===null){var e=J.alternate;e=e===null?null:e.memoizedState}else e=ao.next;var t=oo===null?J.memoizedState:oo.next;if(t!==null)oo=t,ao=e;else{if(e===null)throw J.alternate===null?Error(i(467)):Error(i(310));ao=e,e={memoizedState:ao.memoizedState,baseState:ao.baseState,baseQueue:ao.baseQueue,queue:ao.queue,next:null},oo===null?J.memoizedState=oo=e:oo=oo.next=e}return oo}function Eo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Do(e){var t=fo;return fo+=1,po===null&&(po=[]),e=ba(po,e,t),t=J,(oo===null?t.memoizedState:oo.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?Ps:Fs),e}function Oo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Do(e);if(e.$$typeof===te)return Ji(e)}throw Error(i(438,String(e)))}function ko(e){var t=null,n=J.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=J.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Eo(),J.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=oe;return t.index++,n}function Ao(e,t){return typeof t==`function`?t(e):t}function jo(e){return Mo(To(),ao,e)}function Mo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(io&f)===f:(Z&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===aa&&(d=!0);else if((io&p)===p){u=u.next,p===aa&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,J.lanes|=p,Ul|=p;f=u.action,lo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,J.lanes|=f,Ul|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Cr(o,e.memoizedState)&&(Qs=!0,d&&(n=oa,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function No(e){var t=To(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Cr(o,t.memoizedState)||(Qs=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Po(e,t,n){var r=J,a=To(),o=K;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Cr((ao||a).memoizedState,n);if(s&&(a.memoizedState=n,Qs=!0),a=a.queue,as(Lo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||oo!==null&&oo.memoizedState.tag&1){if(r.flags|=2048,es(9,{destroy:void 0},Io.bind(null,r,a,n,t),null),Il===null)throw Error(i(349));o||io&127||Fo(r,t,n)}return n}function Fo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=J.updateQueue,t===null?(t=Eo(),J.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Io(e,t,n,r){t.value=n,t.getSnapshot=r,Ro(t)&&zo(e)}function Lo(e,t,n){return n(function(){Ro(t)&&zo(e)})}function Ro(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Cr(e,n)}catch{return!0}}function zo(e){var t=Xr(e,2);t!==null&&pu(t,e,2)}function Bo(e){var t=wo();if(typeof e==`function`){var n=e;if(e=n(),lo){qe(!0);try{n()}finally{qe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ao,lastRenderedState:e},t}function Vo(e,t,n,r){return e.baseState=n,Mo(e,ao,typeof r==`function`?r:Ao)}function Ho(e,t,n,r,a){if(As(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};T.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Uo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Uo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=T.T,o={};T.T=o;try{var s=n(i,r),c=T.S;c!==null&&c(o,s),Wo(e,t,s)}catch(n){Ko(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),T.T=a}}else try{a=n(i,r),Wo(e,t,a)}catch(n){Ko(e,t,n)}}function Wo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Go(e,t,n)},function(n){return Ko(e,t,n)}):Go(e,t,n)}function Go(e,t,n){t.status=`fulfilled`,t.value=n,qo(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Uo(e,n)))}function Ko(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,qo(t),t=t.next;while(t!==r)}e.action=null}function qo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Jo(e,t){return t}function Yo(e,t){if(K){var n=Il.formState;if(n!==null){a:{var r=J;if(K){if(Di){b:{for(var i=Di,a=ki;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){Di=cf(i.nextSibling),r=i.data===`F!`;break a}}ji(r)}r=!1}r&&(t=n[0])}}return n=wo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jo,lastRenderedState:t},n.queue=r,n=Ds.bind(null,J,r),r.dispatch=n,r=Bo(!1),a=ks.bind(null,J,!1,r.queue),r=wo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Ho.bind(null,J,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Xo(e){return Zo(To(),ao,e)}function Zo(e,t,n){if(t=Mo(e,t,Jo)[0],e=jo(Ao)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Do(t)}catch(e){throw e===ha?_a:e}else r=t;t=To();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(J.flags|=2048,es(9,{destroy:void 0},Qo.bind(null,i,n),null)),[r,a,e]}function Qo(e,t){e.action=t}function $o(e){var t=To(),n=ao;if(n!==null)return Zo(t,n,e);To(),t=t.memoizedState,n=To();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function es(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=J.updateQueue,t===null&&(t=Eo(),J.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ts(){return To().memoizedState}function ns(e,t,n,r){var i=wo();J.flags|=e,i.memoizedState=es(1|t,{destroy:void 0},n,r===void 0?null:r)}function rs(e,t,n,r){var i=To();r=r===void 0?null:r;var a=i.memoizedState.inst;ao!==null&&r!==null&&go(r,ao.memoizedState.deps)?i.memoizedState=es(t,a,n,r):(J.flags|=e,i.memoizedState=es(1|t,a,n,r))}function is(e,t){ns(8390656,8,e,t)}function as(e,t){rs(2048,8,e,t)}function os(e){J.flags|=4;var t=J.updateQueue;if(t===null)t=Eo(),J.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ss(e){var t=To().memoizedState;return os({ref:t,nextImpl:e}),function(){if(Y&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function cs(e,t){return rs(4,2,e,t)}function ls(e,t){return rs(4,4,e,t)}function us(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ds(e,t,n){n=n==null?null:n.concat([e]),rs(4,4,us.bind(null,t,e),n)}function fs(){}function ps(e,t){var n=To();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&go(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ms(e,t){var n=To();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&go(t,r[1]))return r[0];if(r=e(),lo){qe(!0);try{e()}finally{qe(!1)}}return n.memoizedState=[r,t],r}function hs(e,t,n){return n===void 0||io&1073741824&&!(Z&261930)?e.memoizedState=t:(e.memoizedState=n,e=fu(),J.lanes|=e,Ul|=e,n)}function gs(e,t,n,r){return Cr(n,t)?n:Wa.current===null?!(io&42)||io&1073741824&&!(Z&261930)?(Qs=!0,e.memoizedState=n):(e=fu(),J.lanes|=e,Ul|=e,t):(e=hs(e,n,r),Cr(e,t)||(Qs=!0),e)}function _s(e,t,n,r,i){var a=E.p;E.p=a!==0&&8>a?a:8;var o=T.T,s={};T.T=s,ks(e,!1,t,n);try{var c=i(),l=T.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Os(e,t,la(c,r),du(e)):Os(e,t,r,du(e))}catch(n){Os(e,t,{then:function(){},status:`rejected`,reason:n},du())}finally{E.p=a,o!==null&&s.types!==null&&(o.types=s.types),T.T=o}}function vs(){}function ys(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=bs(e).queue;_s(e,a,t,de,n===null?vs:function(){return xs(e),n(r)})}function bs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:de,baseState:de,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ao,lastRenderedState:de},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ao,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function xs(e){var t=bs(e);t.next===null&&(t=e.alternate.memoizedState),Os(e,t.next.queue,{},du())}function Ss(){return Ji(Qf)}function Cs(){return To().memoizedState}function ws(){return To().memoizedState}function Ts(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=du();e=Fa(n);var r=Ia(t,e,n);r!==null&&(pu(r,t,n),La(r,t,n)),t={cache:ta()},e.payload=t;return}t=t.return}}function Es(e,t,n){var r=du();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},As(e)?js(t,n):(n=Yr(e,t,n,r),n!==null&&(pu(n,e,r),Ms(n,t,r)))}function Ds(e,t,n){Os(e,t,n,du())}function Os(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(As(e))js(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Cr(s,o))return G(e,t,i,0),Il===null&&Jr(),!1}catch{}if(n=Yr(e,t,i,r),n!==null)return pu(n,e,r),Ms(n,t,r),!0}return!1}function ks(e,t,n,r){if(r={lane:2,revertLane:ud(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},As(e)){if(t)throw Error(i(479))}else t=Yr(e,n,r,2),t!==null&&pu(t,e,2)}function As(e){var t=e.alternate;return e===J||t!==null&&t===J}function js(e,t){co=so=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ms(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}var Ns={readContext:Ji,use:Oo,useCallback:ho,useContext:ho,useEffect:ho,useImperativeHandle:ho,useLayoutEffect:ho,useInsertionEffect:ho,useMemo:ho,useReducer:ho,useRef:ho,useState:ho,useDebugValue:ho,useDeferredValue:ho,useTransition:ho,useSyncExternalStore:ho,useId:ho,useHostTransitionStatus:ho,useFormState:ho,useActionState:ho,useOptimistic:ho,useMemoCache:ho,useCacheRefresh:ho};Ns.useEffectEvent=ho;var Ps={readContext:Ji,use:Oo,useCallback:function(e,t){return wo().memoizedState=[e,t===void 0?null:t],e},useContext:Ji,useEffect:is,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ns(4194308,4,us.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ns(4194308,4,e,t)},useInsertionEffect:function(e,t){ns(4,2,e,t)},useMemo:function(e,t){var n=wo();t=t===void 0?null:t;var r=e();if(lo){qe(!0);try{e()}finally{qe(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=wo();if(n!==void 0){var i=n(t);if(lo){qe(!0);try{n(t)}finally{qe(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Es.bind(null,J,e),[r.memoizedState,e]},useRef:function(e){var t=wo();return e={current:e},t.memoizedState=e},useState:function(e){e=Bo(e);var t=e.queue,n=Ds.bind(null,J,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:fs,useDeferredValue:function(e,t){return hs(wo(),e,t)},useTransition:function(){var e=Bo(!1);return e=_s.bind(null,J,e.queue,!0,!1),wo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=J,a=wo();if(K){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Il===null)throw Error(i(349));Z&127||Fo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,is(Lo.bind(null,r,o,e),[e]),r.flags|=2048,es(9,{destroy:void 0},Io.bind(null,r,o,n,t),null),n},useId:function(){var e=wo(),t=Il.identifierPrefix;if(K){var n=bi,r=yi;n=(r&~(1<<32-Je(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=uo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=mo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ss,useFormState:Yo,useActionState:Yo,useOptimistic:function(e){var t=wo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=ks.bind(null,J,!0,n),n.dispatch=t,[e,t]},useMemoCache:ko,useCacheRefresh:function(){return wo().memoizedState=Ts.bind(null,J)},useEffectEvent:function(e){var t=wo(),n={impl:e};return t.memoizedState=n,function(){if(Y&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Fs={readContext:Ji,use:Oo,useCallback:ps,useContext:Ji,useEffect:as,useImperativeHandle:ds,useInsertionEffect:cs,useLayoutEffect:ls,useMemo:ms,useReducer:jo,useRef:ts,useState:function(){return jo(Ao)},useDebugValue:fs,useDeferredValue:function(e,t){return gs(To(),ao.memoizedState,e,t)},useTransition:function(){var e=jo(Ao)[0],t=To().memoizedState;return[typeof e==`boolean`?e:Do(e),t]},useSyncExternalStore:Po,useId:Cs,useHostTransitionStatus:Ss,useFormState:Xo,useActionState:Xo,useOptimistic:function(e,t){return Vo(To(),ao,e,t)},useMemoCache:ko,useCacheRefresh:ws};Fs.useEffectEvent=ss;var Is={readContext:Ji,use:Oo,useCallback:ps,useContext:Ji,useEffect:as,useImperativeHandle:ds,useInsertionEffect:cs,useLayoutEffect:ls,useMemo:ms,useReducer:No,useRef:ts,useState:function(){return No(Ao)},useDebugValue:fs,useDeferredValue:function(e,t){var n=To();return ao===null?hs(n,e,t):gs(n,ao.memoizedState,e,t)},useTransition:function(){var e=No(Ao)[0],t=To().memoizedState;return[typeof e==`boolean`?e:Do(e),t]},useSyncExternalStore:Po,useId:Cs,useHostTransitionStatus:Ss,useFormState:$o,useActionState:$o,useOptimistic:function(e,t){var n=To();return ao===null?(n.baseState=e,[e,n.queue.dispatch]):Vo(n,ao,e,t)},useMemoCache:ko,useCacheRefresh:ws};Is.useEffectEvent=ss;function Ls(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Rs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=du(),i=Fa(r);i.payload=t,n!=null&&(i.callback=n),t=Ia(e,i,r),t!==null&&(pu(t,e,r),La(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=du(),i=Fa(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ia(e,i,r),t!==null&&(pu(t,e,r),La(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=du(),r=Fa(n);r.tag=2,t!=null&&(r.callback=t),t=Ia(e,r,n),t!==null&&(pu(t,e,n),La(t,e,n))}};function zs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!wr(n,r)||!wr(i,a):!0}function Bs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Rs.enqueueReplaceState(t,t.state,null)}function Vs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Hs(e){Kr(e)}function Us(e){console.error(e)}function Ws(e){Kr(e)}function Gs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Ks(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function qs(e,t,n){return n=Fa(n),n.tag=3,n.payload={element:null},n.callback=function(){Gs(e,t)},n}function Js(e){return e=Fa(e),e.tag=3,e}function Ys(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Ks(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Ks(t,n,r),typeof i!=`function`&&(tu===null?tu=new Set([this]):tu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Xs(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Gi(t,n,a,!0),n=Ya.current,n!==null){switch(n.tag){case 31:case 13:return Xa===null?Tu():n.alternate===null&&Hl===0&&(Hl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===va?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Wu(e,r,a)),!1;case 22:return n.flags|=65536,r===va?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Wu(e,r,a)),!1}throw Error(i(435,n.tag))}return Wu(e,r,a),Tu(),!1}if(K)return t=Ya.current,t===null?(r!==Ai&&(t=Error(i(423),{cause:r}),Li(di(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=di(r,n),a=qs(e.stateNode,r,a),Ra(e,a),Hl!==4&&(Hl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Ai&&(e=Error(i(422),{cause:r}),Li(di(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=di(o,n),Jl===null?Jl=[o]:Jl.push(o),Hl!==4&&(Hl=2),t===null)return!0;r=di(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=qs(n.stateNode,r,e),Ra(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(tu===null||!tu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Js(a),Ys(a,e,n,r),Ra(n,a),!1}n=n.return}while(n!==null);return!1}var Zs=Error(i(461)),Qs=!1;function $s(e,t,n,r){t.child=e===null?ja(t,null,n,r):Aa(t,e.child,n,r)}function ec(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return qi(t),r=_o(e,t,n,o,a,i),s=xo(),e!==null&&!Qs?(So(e,t,i),wc(e,t,i)):(K&&s&&Ci(t),t.flags|=1,$s(e,t,r,i),t.child)}function tc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ni(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,nc(e,t,a,r,i)):(e=ai(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Tc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?wr:n,n(o,r)&&e.ref===t.ref)return wc(e,t,i)}return t.flags|=1,e=ri(a,r),e.ref=t.ref,e.return=t,t.child=e}function nc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(wr(a,r)&&e.ref===t.ref){if(Qs=!1,t.pendingProps=r=a,Tc(e,i))e.flags&131072&&(Qs=!0);else return t.lanes=e.lanes,wc(e,t,i)}}return uc(e,t,n,r,i)}function rc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return ac(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&pa(t,a===null?null:a.cachePool),a===null?qa():Ka(t,a),$a(t);else return r=t.lanes=536870912,ac(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&pa(t,null),qa(),eo(t)):(pa(t,a.cachePool),Ka(t,a),eo(t),t.memoizedState=null);return $s(e,t,i,n),t.child}function ic(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function ac(e,t,n,r,i){var a=fa();return a=a===null?null:{parent:ea._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&pa(t,null),qa(),$a(t),e!==null&&Gi(e,t,r,!0),t.childLanes=i,null}function oc(e,t){return t=yc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function sc(e,t,n){return Aa(t,e.child,null,n),e=oc(t,t.pendingProps),e.flags|=2,to(t),t.memoizedState=null,e}function cc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(K){if(r.mode===`hidden`)return e=oc(t,r),t.lanes=536870912,ic(null,e);if(Qa(t),(e=Di)?(e=rf(e,ki),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:vi===null?null:{id:yi,overflow:bi},retryLane:536870912,hydrationErrors:null},n=ci(e),n.return=t,t.child=n,Ei=t,Di=null)):e=null,e===null)throw ji(t);return t.lanes=536870912,null}return oc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(Qa(t),a){if(t.flags&256)t.flags&=-257,t=sc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(Qs||Gi(e,t,n,!1),a=(n&e.childLanes)!==0,Qs||a){if(r=Il,r!==null&&(s=ut(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,Xr(e,s),pu(r,e,s),Zs;Tu(),t=sc(e,t,n)}else e=o.treeContext,Di=cf(s.nextSibling),Ei=t,K=!0,Oi=null,ki=!1,e!==null&&Ti(t,e),t=oc(t,r),t.flags|=4096;return t}return e=ri(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function lc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function uc(e,t,n,r,i){return qi(t),n=_o(e,t,n,r,void 0,i),r=xo(),e!==null&&!Qs?(So(e,t,i),wc(e,t,i)):(K&&r&&Ci(t),t.flags|=1,$s(e,t,n,i),t.child)}function dc(e,t,n,r,i,a){return qi(t),t.updateQueue=null,n=yo(t,r,n,i),vo(e),r=xo(),e!==null&&!Qs?(So(e,t,a),wc(e,t,a)):(K&&r&&Ci(t),t.flags|=1,$s(e,t,n,a),t.child)}function fc(e,t,n,r,i){if(qi(t),t.stateNode===null){var a=$r,o=n.contextType;typeof o==`object`&&o&&(a=Ji(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Rs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Na(t),o=n.contextType,a.context=typeof o==`object`&&o?Ji(o):$r,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Ls(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Rs.enqueueReplaceState(a,a.state,null),Va(t,r,a,i),Ba(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Vs(n,s);a.props=c;var l=a.context,u=n.contextType;o=$r,typeof u==`object`&&u&&(o=Ji(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Bs(t,a,r,o),Ma=!1;var f=t.memoizedState;a.state=f,Va(t,r,a,i),Ba(),l=t.memoizedState,s||f!==l||Ma?(typeof d==`function`&&(Ls(t,n,d,r),l=t.memoizedState),(c=Ma||zs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Pa(e,t),o=t.memoizedProps,u=Vs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=$r,typeof l==`object`&&l&&(c=Ji(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Bs(t,a,r,c),Ma=!1,f=t.memoizedState,a.state=f,Va(t,r,a,i),Ba();var p=t.memoizedState;o!==d||f!==p||Ma||e!==null&&e.dependencies!==null&&Ki(e.dependencies)?(typeof s==`function`&&(Ls(t,n,s,r),p=t.memoizedState),(u=Ma||zs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Ki(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,lc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Aa(t,e.child,null,i),t.child=Aa(t,null,n,i)):$s(e,t,n,i),t.memoizedState=a.state,e=t.child):e=wc(e,t,i),e}function pc(e,t,n,r){return Fi(),t.flags|=256,$s(e,t,n,r),t.child}var mc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hc(e){return{baseLanes:e,cachePool:ma()}}function gc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Kl),e}function _c(e,t,n){var r=t.pendingProps,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(no.current&2)),s&&(a=!0,t.flags&=-129),s=!!(t.flags&32),t.flags&=-33,e===null){if(K){if(a?Za(t):eo(t),(e=Di)?(e=rf(e,ki),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:vi===null?null:{id:yi,overflow:bi},retryLane:536870912,hydrationErrors:null},n=ci(e),n.return=t,t.child=n,Ei=t,Di=null)):e=null,e===null)throw ji(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(eo(t),a=t.mode,c=yc({mode:`hidden`,children:c},a),r=oi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=hc(n),r.childLanes=gc(e,s,n),t.memoizedState=mc,ic(null,r)):(Za(t),vc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(Za(t),t.flags&=-257,t=bc(e,t,n)):t.memoizedState===null?(eo(t),c=r.fallback,a=t.mode,r=yc({mode:`visible`,children:r.children},a),c=oi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Aa(t,e.child,null,n),r=t.child,r.memoizedState=hc(n),r.childLanes=gc(e,s,n),t.memoizedState=mc,t=ic(null,r)):(eo(t),t.child=e.child,t.flags|=128,t=null);else if(Za(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Li({value:r,source:null,stack:null}),t=bc(e,t,n)}else if(Qs||Gi(e,t,n,!1),s=(n&e.childLanes)!==0,Qs||s){if(s=Il,s!==null&&(r=ut(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,Xr(e,r),pu(s,e,r),Zs;af(c)||Tu(),t=bc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Di=cf(c.nextSibling),Ei=t,K=!0,Oi=null,ki=!1,e!==null&&Ti(t,e),t=vc(t,r.children),t.flags|=4096);return t}return a?(eo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=ri(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=oi(c,a,n,null),c.flags|=2):c=ri(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,ic(null,r),r=t.child,c=e.child.memoizedState,c===null?c=hc(n):(a=c.cachePool,a===null?a=ma():(l=ea._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=gc(e,s,n),t.memoizedState=mc,ic(e.child,r)):(Za(t),n=e.child,e=n.sibling,n=ri(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function vc(e,t){return t=yc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function yc(e,t){return e=ti(22,e,null,t),e.lanes=0,e}function bc(e,t,n){return Aa(t,e.child,null,n),e=vc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function xc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ui(e.return,t,n)}function Sc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Cc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=no.current,s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,D(no,o),$s(e,t,r,n),r=K?hi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xc(e,n,t);else if(e.tag===19)xc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ro(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Sc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ro(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Sc(t,!0,n,null,a,r);break;case`together`:Sc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function wc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ul|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(Gi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=ri(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ri(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Tc(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&Ki(e)))}function Ec(e,t,n){switch(t.tag){case 3:be(t,t.stateNode.containerInfo),Vi(t,ea,e.memoizedState.cache),Fi();break;case 27:case 5:Se(t);break;case 4:be(t,t.stateNode.containerInfo);break;case 10:Vi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Qa(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(Za(t),e=wc(e,t,n),e===null?null:e.sibling):_c(e,t,n):(Za(t),t.flags|=128,null);Za(t);break;case 19:var i=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=(Gi(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Cc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),D(no,no.current),r)break;return null;case 22:return t.lanes=0,rc(e,t,n,t.pendingProps);case 24:Vi(t,ea,e.memoizedState.cache)}return wc(e,t,n)}function Dc(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)Qs=!0;else{if(!Tc(e,n)&&!(t.flags&128))return Qs=!1,Ec(e,t,n);Qs=!!(e.flags&131072)}}else Qs=!1,K&&t.flags&1048576&&Si(t,hi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=xa(t.elementType),t.type=e,typeof e==`function`)ni(e)?(r=Vs(e,r),t.tag=1,t=fc(null,t,e,r,n)):(t.tag=0,t=uc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===S){t.tag=11,t=ec(null,t,e,r,n);break a}if(a===ie){t.tag=14,t=tc(null,t,e,r,n);break a}}throw t=le(e)||e,Error(i(306,t,``))}}return t;case 0:return uc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Vs(r,t.pendingProps),fc(e,t,r,a,n);case 3:a:{if(be(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Pa(e,t),Va(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Vi(t,ea,r),r!==o.cache&&Wi(t,[ea],n,!0),Ba(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=pc(e,t,r,n);break a}if(r!==a){a=di(Error(i(424)),t),Li(a),t=pc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(Di=cf(e.firstChild),Ei=t,K=!0,Oi=null,ki=!0,n=ja(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Fi(),r===a){t=wc(e,t,n);break a}$s(e,t,r,n)}t=t.child}return t;case 26:return lc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:K||(n=t.type,e=t.pendingProps,r=Bd(ve.current).createElement(n),r[gt]=t,r[_t]=e,Pd(r,n,e),kt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Se(t),e===null&&K&&(r=t.stateNode=ff(t.type,t.pendingProps,ve.current),Ei=t,ki=!0,a=Di,Zd(t.type)?(lf=a,Di=cf(r.firstChild)):Di=a),$s(e,t,t.pendingProps.children,n),lc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&K&&((a=r=Di)&&(r=tf(r,t.type,t.pendingProps,ki),r===null?a=!1:(t.stateNode=r,Ei=t,Di=cf(r.firstChild),ki=!1,a=!0)),a||ji(t)),Se(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=_o(e,t,bo,null,null,n),Qf._currentValue=a),lc(e,t),$s(e,t,r,n),t.child;case 6:return e===null&&K&&((e=n=Di)&&(n=nf(n,t.pendingProps,ki),n===null?e=!1:(t.stateNode=n,Ei=t,Di=null,e=!0)),e||ji(t)),null;case 13:return _c(e,t,n);case 4:return be(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Aa(t,null,r,n):$s(e,t,r,n),t.child;case 11:return ec(e,t,t.type,t.pendingProps,n);case 7:return $s(e,t,t.pendingProps,n),t.child;case 8:return $s(e,t,t.pendingProps.children,n),t.child;case 12:return $s(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Vi(t,t.type,r.value),$s(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,qi(t),a=Ji(a),r=r(a),t.flags|=1,$s(e,t,r,n),t.child;case 14:return tc(e,t,t.type,t.pendingProps,n);case 15:return nc(e,t,t.type,t.pendingProps,n);case 19:return Cc(e,t,n);case 31:return cc(e,t,n);case 22:return rc(e,t,n,t.pendingProps);case 24:return qi(t),r=Ji(ea),e===null?(a=fa(),a===null&&(a=Il,o=ta(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Na(t),Vi(t,ea,a)):((e.lanes&n)!==0&&(Pa(e,t),Va(t,null,null,n),Ba()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Vi(t,ea,r),r!==a.cache&&Wi(t,[ea],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Vi(t,ea,r))),$s(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Oc(e){e.flags|=4}function kc(e,t,n,r,i){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Su())e.flags|=8192;else throw Sa=va,ga}}else e.flags&=-16777217}function Ac(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t)){if(Su())e.flags|=8192;else throw Sa=va,ga}}function jc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:it(),e.lanes|=t,ql|=t)}function Mc(e,t){if(!K)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Nc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Pc(e,t,n){var r=t.pendingProps;switch(wi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nc(t),null;case 1:return Nc(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Hi(ea),xe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Pi(t)?Oc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ii())),Nc(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Oc(t),o===null?(Nc(t),kc(t,a,null,r,n)):(Nc(t),Ac(t,o))):o?o===e.memoizedState?(Nc(t),t.flags&=-16777217):(Oc(t),Nc(t),Ac(t,o)):(e=e.memoizedProps,e!==r&&Oc(t),Nc(t),kc(t,a,e,r,n)),null;case 27:if(Ce(t),n=ve.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Oc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Nc(t),null}e=ge.current,Pi(t)?Mi(t,e):(e=ff(a,r,n),t.stateNode=e,Oc(t))}return Nc(t),null;case 5:if(Ce(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Oc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Nc(t),null}if(o=ge.current,Pi(t))Mi(t,o);else{var s=Bd(ve.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[gt]=t,o[_t]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Oc(t)}}return Nc(t),kc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Oc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ve.current,Pi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Ei,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[gt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||jd(e.nodeValue,n)),e||ji(t,!0)}else e=Bd(e).createTextNode(r),e[gt]=t,t.stateNode=e}return Nc(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Pi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[gt]=t}else Fi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Nc(t),e=!1}else n=Ii(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(to(t),t):(to(t),null);if(t.flags&128)throw Error(i(558))}return Nc(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Pi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[gt]=t}else Fi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Nc(t),a=!1}else a=Ii(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(to(t),t):(to(t),null)}return to(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),jc(t,t.updateQueue),Nc(t),null);case 4:return xe(),e===null&&xd(t.stateNode.containerInfo),Nc(t),null;case 10:return Hi(t.type),Nc(t),null;case 19:if(he(no),r=t.memoizedState,r===null)return Nc(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)Mc(r,!1);else{if(Hl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ro(e),o!==null){for(t.flags|=128,Mc(r,!1),e=o.updateQueue,t.updateQueue=e,jc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)ii(n,e),n=n.sibling;return D(no,no.current&1|2),K&&xi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ie()>$l&&(t.flags|=128,a=!0,Mc(r,!1),t.lanes=4194304)}}else{if(!a){if(e=ro(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,jc(t,e),Mc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!K)return Nc(t),null}else 2*Ie()-r.renderingStartTime>$l&&n!==536870912&&(t.flags|=128,a=!0,Mc(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(Nc(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ie(),e.sibling=null,n=no.current,D(no,a?n&1|2:n&1),K&&xi(t,r.treeForkCount),e);case 22:case 23:return to(t),Ja(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Nc(t),t.subtreeFlags&6&&(t.flags|=8192)):Nc(t),n=t.updateQueue,n!==null&&jc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&he(da),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Hi(ea),Nc(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Fc(e,t){switch(wi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Hi(ea),xe(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ce(t),null;case 31:if(t.memoizedState!==null){if(to(t),t.alternate===null)throw Error(i(340));Fi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(to(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Fi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return he(no),null;case 4:return xe(),null;case 10:return Hi(t.type),null;case 22:case 23:return to(t),Ja(),e!==null&&he(da),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Hi(ea),null;case 25:return null;default:return null}}function Ic(e,t){switch(wi(t),t.tag){case 3:Hi(ea),xe();break;case 26:case 27:case 5:Ce(t);break;case 4:xe();break;case 31:t.memoizedState!==null&&to(t);break;case 13:to(t);break;case 19:he(no);break;case 10:Hi(t.type);break;case 22:case 23:to(t),Ja(),e!==null&&he(da);break;case 24:Hi(ea)}}function Lc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Uu(t,t.return,e)}}function Rc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Uu(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Uu(t,t.return,e)}}function zc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ua(t,n)}catch(t){Uu(e,e.return,t)}}}function Bc(e,t,n){n.props=Vs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Uu(e,t,n)}}function Vc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Uu(e,t,n)}}function Hc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Uu(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Uu(e,t,n)}else n.current=null}}function Uc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Uu(e,e.return,t)}}function Wc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[_t]=t}catch(t){Uu(e,e.return,t)}}function Gc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Kc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Gc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=un));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(qc(e,t,n),e=e.sibling;e!==null;)qc(e,t,n),e=e.sibling}function Jc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Jc(e,t,n),e=e.sibling;e!==null;)Jc(e,t,n),e=e.sibling}function Yc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[gt]=e,t[_t]=n}catch(t){Uu(e,e.return,t)}}var Xc=!1,Zc=!1,Qc=!1,$c=typeof WeakSet==`function`?WeakSet:Set,el=null;function tl(e,t){if(e=e.containerInfo,Rd=sp,e=Or(e),kr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,el=t;el!==null;)if(t=el,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,el=e;else for(;el!==null;){switch(t=el,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Vs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Uu(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,el=e;break}el=t.return}}function nl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:_l(e,n),r&4&&Lc(5,n);break;case 1:if(_l(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Uu(n,n.return,e)}else{var i=Vs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Uu(n,n.return,e)}}}r&64&&zc(n),r&512&&Vc(n,n.return);break;case 3:if(_l(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ua(e,t)}catch(e){Uu(n,n.return,e)}}break;case 27:t===null&&r&4&&Yc(n);case 26:case 5:_l(e,n),t===null&&r&4&&Uc(n),r&512&&Vc(n,n.return);break;case 12:_l(e,n);break;case 31:_l(e,n),r&4&&cl(e,n);break;case 13:_l(e,n),r&4&&ll(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=qu.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||Xc,!r){t=t!==null&&t.memoizedState!==null||Zc,i=Xc;var a=Zc;Xc=r,(Zc=t)&&!a?yl(e,n,!!(n.subtreeFlags&8772)):_l(e,n),Xc=i,Zc=a}break;case 30:break;default:_l(e,n)}}function rl(e){var t=e.alternate;t!==null&&(e.alternate=null,rl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&wt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var il=null,al=!1;function ol(e,t,n){for(n=n.child;n!==null;)sl(e,t,n),n=n.sibling}function sl(e,t,n){if(Ke&&typeof Ke.onCommitFiberUnmount==`function`)try{Ke.onCommitFiberUnmount(Ge,n)}catch{}switch(n.tag){case 26:Zc||Hc(n,t),ol(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Zc||Hc(n,t);var r=il,i=al;Zd(n.type)&&(il=n.stateNode,al=!1),ol(e,t,n),pf(n.stateNode),il=r,al=i;break;case 5:Zc||Hc(n,t);case 6:if(r=il,i=al,il=null,ol(e,t,n),il=r,al=i,il!==null){if(al)try{(il.nodeType===9?il.body:il.nodeName===`HTML`?il.ownerDocument.body:il).removeChild(n.stateNode)}catch(e){Uu(n,t,e)}else try{il.removeChild(n.stateNode)}catch(e){Uu(n,t,e)}}break;case 18:il!==null&&(al?(e=il,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(il,n.stateNode));break;case 4:r=il,i=al,il=n.stateNode.containerInfo,al=!0,ol(e,t,n),il=r,al=i;break;case 0:case 11:case 14:case 15:Rc(2,n,t),Zc||Rc(4,n,t),ol(e,t,n);break;case 1:Zc||(Hc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Bc(n,t,r)),ol(e,t,n);break;case 21:ol(e,t,n);break;case 22:Zc=(r=Zc)||n.memoizedState!==null,ol(e,t,n),Zc=r;break;default:ol(e,t,n)}}function cl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Uu(t,t.return,e)}}}function ll(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Uu(t,t.return,e)}}function ul(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new $c),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new $c),t;default:throw Error(i(435,e.tag))}}function dl(e,t){var n=ul(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Ju.bind(null,e,t);t.then(r,r)}})}function fl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){il=c.stateNode,al=!1;break a}break;case 5:il=c.stateNode,al=!1;break a;case 3:case 4:il=c.stateNode.containerInfo,al=!0;break a}c=c.return}if(il===null)throw Error(i(160));sl(o,s,a),il=null,al=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ml(t,e),t=t.sibling}var pl=null;function ml(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:fl(t,e),hl(e),r&4&&(Rc(3,e,e.return),Lc(3,e),Rc(5,e,e.return));break;case 1:fl(t,e),hl(e),r&512&&(Zc||n===null||Hc(n,n.return)),r&64&&Xc&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=pl;if(fl(t,e),hl(e),r&512&&(Zc||n===null||Hc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null){if(r===null){if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[Ct]||o[gt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[gt]=e,kt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[gt]=e,kt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode)}else e.stateNode=If(a,r,e.memoizedProps)}else o===r?r===null&&e.stateNode!==null&&Wc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:fl(t,e),hl(e),r&512&&(Zc||n===null||Hc(n,n.return)),n!==null&&r&4&&Wc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(fl(t,e),hl(e),r&512&&(Zc||n===null||Hc(n,n.return)),e.flags&32){a=e.stateNode;try{tn(a,``)}catch(t){Uu(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Wc(e,a,n===null?a:n.memoizedProps)),r&1024&&(Qc=!0);break;case 6:if(fl(t,e),hl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Uu(e,e.return,t)}}break;case 3:if(Bf=null,a=pl,pl=gf(t.containerInfo),fl(t,e),pl=a,hl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Uu(e,e.return,t)}Qc&&(Qc=!1,gl(e));break;case 4:r=pl,pl=gf(e.stateNode.containerInfo),fl(t,e),hl(e),pl=r;break;case 12:fl(t,e),hl(e);break;case 31:fl(t,e),hl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,dl(e,r)));break;case 13:fl(t,e),hl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Zl=Ie()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,dl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=Xc,d=Zc;if(Xc=u||a,Zc=d||l,fl(t,e),Zc=d,Xc=u,hl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||Xc||Zc||vl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Uu(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Uu(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Uu(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,dl(e,n))));break;case 19:fl(t,e),hl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,dl(e,r)));break;case 30:break;case 21:break;default:fl(t,e),hl(e)}}function hl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Gc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Jc(e,Kc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(tn(o,``),n.flags&=-33),Jc(e,Kc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;qc(e,Kc(e),s);break;default:throw Error(i(161))}}catch(t){Uu(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function gl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;gl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function _l(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)nl(e,t.alternate,t),t=t.sibling}function vl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Rc(4,t,t.return),vl(t);break;case 1:Hc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Bc(t,t.return,n),vl(t);break;case 27:pf(t.stateNode);case 26:case 5:Hc(t,t.return),vl(t);break;case 22:t.memoizedState===null&&vl(t);break;case 30:vl(t);break;default:vl(t)}e=e.sibling}}function yl(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:yl(i,a,n),Lc(4,a);break;case 1:if(yl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Uu(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Ha(c[i],s)}catch(e){Uu(r,r.return,e)}}n&&o&64&&zc(a),Vc(a,a.return);break;case 27:Yc(a);case 26:case 5:yl(i,a,n),n&&r===null&&o&4&&Uc(a),Vc(a,a.return);break;case 12:yl(i,a,n);break;case 31:yl(i,a,n),n&&o&4&&cl(i,a);break;case 13:yl(i,a,n),n&&o&4&&ll(i,a);break;case 22:a.memoizedState===null&&yl(i,a,n),Vc(a,a.return);break;case 30:break;default:yl(i,a,n)}t=t.sibling}}function bl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&na(n))}function xl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&na(e))}function Sl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Cl(e,t,n,r),t=t.sibling}function Cl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Sl(e,t,n,r),i&2048&&Lc(9,t);break;case 1:Sl(e,t,n,r);break;case 3:Sl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&na(e)));break;case 12:if(i&2048){Sl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Uu(t,t.return,e)}}else Sl(e,t,n,r);break;case 31:Sl(e,t,n,r);break;case 13:Sl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Sl(e,t,n,r):(a._visibility|=2,wl(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):a._visibility&2?Sl(e,t,n,r):Tl(e,t),i&2048&&bl(o,t);break;case 24:Sl(e,t,n,r),i&2048&&xl(t.alternate,t);break;default:Sl(e,t,n,r)}}function wl(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:wl(a,o,s,c,i),Lc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,wl(a,o,s,c,i)):u._visibility&2?wl(a,o,s,c,i):Tl(a,o),i&&l&2048&&bl(o.alternate,o);break;case 24:wl(a,o,s,c,i),i&&l&2048&&xl(o.alternate,o);break;default:wl(a,o,s,c,i)}t=t.sibling}}function Tl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Tl(n,r),i&2048&&bl(r.alternate,r);break;case 24:Tl(n,r),i&2048&&xl(r.alternate,r);break;default:Tl(n,r)}t=t.sibling}}var El=8192;function Dl(e,t,n){if(e.subtreeFlags&El)for(e=e.child;e!==null;)Ol(e,t,n),e=e.sibling}function Ol(e,t,n){switch(e.tag){case 26:Dl(e,t,n),e.flags&El&&e.memoizedState!==null&&Gf(n,pl,e.memoizedState,e.memoizedProps);break;case 5:Dl(e,t,n);break;case 3:case 4:var r=pl;pl=gf(e.stateNode.containerInfo),Dl(e,t,n),pl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=El,El=16777216,Dl(e,t,n),El=r):Dl(e,t,n));break;default:Dl(e,t,n)}}function kl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Al(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];el=r,Nl(r,e)}kl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)jl(e),e=e.sibling}function jl(e){switch(e.tag){case 0:case 11:case 15:Al(e),e.flags&2048&&Rc(9,e,e.return);break;case 3:Al(e);break;case 12:Al(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ml(e)):Al(e);break;default:Al(e)}}function Ml(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];el=r,Nl(r,e)}kl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Rc(8,t,t.return),Ml(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ml(t));break;default:Ml(t)}e=e.sibling}}function Nl(e,t){for(;el!==null;){var n=el;switch(n.tag){case 0:case 11:case 15:Rc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:na(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,el=r;else a:for(n=e;el!==null;){r=el;var i=r.sibling,a=r.return;if(rl(r),r===n){el=null;break a}if(i!==null){i.return=a,el=i;break a}el=a}}}var Pl={getCacheForType:function(e){var t=Ji(ea),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Ji(ea).controller.signal}},Fl=typeof WeakMap==`function`?WeakMap:Map,Y=0,Il=null,X=null,Z=0,Q=0,Ll=null,Rl=!1,zl=!1,Bl=!1,Vl=0,Hl=0,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=null,Yl=null,Xl=!1,Zl=0,Ql=0,$l=1/0,eu=null,tu=null,nu=0,ru=null,iu=null,au=0,ou=0,su=null,cu=null,lu=0,uu=null;function du(){return Y&2&&Z!==0?Z&-Z:T.T===null?pt():ud()}function fu(){if(Kl===0){if(!(Z&536870912)||K){var e=O;O<<=1,!(O&3932160)&&(O=262144),Kl=e}else Kl=536870912}return e=Ya.current,e!==null&&(e.flags|=32),Kl}function pu(e,t,n){(e===Il&&(Q===2||Q===9)||e.cancelPendingCommit!==null)&&(bu(e,0),_u(e,Z,Kl,!1)),ot(e,n),(!(Y&2)||e!==Il)&&(e===Il&&(!(Y&2)&&(Wl|=n),Hl===4&&_u(e,Z,Kl,!1)),nd(e))}function mu(e,t,n){if(Y&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||nt(e,t),a=r?Ou(e,t):Eu(e,t,!0),o=r;do{if(a===0){zl&&!r&&_u(e,t,0,!1);break}if(n=e.current.alternate,o&&!gu(n)){a=Eu(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Jl;var l=c.current.memoizedState.isDehydrated;if(l&&(bu(c,s).flags|=256),s=Eu(c,s,!1),s!==2){if(Bl&&!l){c.errorRecoveryDisabledLanes|=o,Wl|=o,a=4;break a}o=Yl,Yl=a,o!==null&&(Yl===null?Yl=o:Yl.push.apply(Yl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){bu(e,0),_u(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:_u(r,t,Kl,!Rl);break a;case 2:Yl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=Zl+300-Ie(),10<a)){if(_u(r,t,Kl,!Rl),tt(r,0,!0)!==0)break a;au=t,r.timeoutHandle=Kd(hu.bind(null,r,n,Yl,eu,Xl,t,Kl,Wl,ql,Rl,o,`Throttled`,-0,0),a);break a}hu(r,n,Yl,eu,Xl,t,Kl,Wl,ql,Rl,o,null,-0,0)}break}while(1);nd(e)}function hu(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:un},Ol(t,a,d);var m=(a&62914560)===a?Zl-Ie():(a&4194048)===a?Ql-Ie():0;if(m=qf(d,m),m!==null){au=a,e.cancelPendingCommit=m(Fu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),_u(e,a,o,!l);return}}Fu(e,t,a,n,r,i,o,s,c)}function gu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Cr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _u(e,t,n,r){t&=~Gl,t&=~Wl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Je(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&ct(e,n,t)}function vu(){return Y&6?!0:(rd(0,!1),!1)}function yu(){if(X!==null){if(Q===0)var e=X.return;else e=X,Bi=zi=null,Co(e),q=null,Ta=0,e=X;for(;e!==null;)Ic(e.alternate,e),e=e.return;X=null}}function bu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),au=0,yu(),Il=e,X=n=ri(e.current,null),Z=t,Q=0,Ll=null,Rl=!1,zl=nt(e,t),Bl=!1,ql=Kl=Gl=Wl=Ul=Hl=0,Yl=Jl=null,Xl=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Je(r),a=1<<i;t|=e[i],r&=~a}return Vl=t,Jr(),n}function xu(e,t){J=null,T.H=Ns,t===ha||t===_a?(t=Ca(),Q=3):t===ga?(t=Ca(),Q=4):Q=t===Zs?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Ll=t,X===null&&(Hl=1,Gs(e,di(t,e.current)))}function Su(){var e=Ya.current;return e===null?!0:(Z&4194048)===Z?Xa===null:(Z&62914560)===Z||Z&536870912?e===Xa:!1}function Cu(){var e=T.H;return T.H=Ns,e===null?Ns:e}function wu(){var e=T.A;return T.A=Pl,e}function Tu(){Hl=4,Rl||(Z&4194048)!==Z&&Ya.current!==null||(zl=!0),!(Ul&134217727)&&!(Wl&134217727)||Il===null||_u(Il,Z,Kl,!1)}function Eu(e,t,n){var r=Y;Y|=2;var i=Cu(),a=wu();(Il!==e||Z!==t)&&(eu=null,bu(e,t)),t=!1;var o=Hl;a:do try{if(Q!==0&&X!==null){var s=X,c=Ll;switch(Q){case 8:yu(),o=6;break a;case 3:case 2:case 9:case 6:Ya.current===null&&(t=!0);var l=Q;if(Q=0,Ll=null,Mu(e,s,c,l),n&&zl){o=0;break a}break;default:l=Q,Q=0,Ll=null,Mu(e,s,c,l)}}Du(),o=Hl;break}catch(t){xu(e,t)}while(1);return t&&e.shellSuspendCounter++,Bi=zi=null,Y=r,T.H=i,T.A=a,X===null&&(Il=null,Z=0,Jr()),o}function Du(){for(;X!==null;)Au(X)}function Ou(e,t){var n=Y;Y|=2;var r=Cu(),a=wu();Il!==e||Z!==t?(eu=null,$l=Ie()+500,bu(e,t)):zl=nt(e,t);a:do try{if(Q!==0&&X!==null){t=X;var o=Ll;b:switch(Q){case 1:Q=0,Ll=null,Mu(e,t,o,1);break;case 2:case 9:if(ya(o)){Q=0,Ll=null,ju(t);break}t=function(){Q!==2&&Q!==9||Il!==e||(Q=7),nd(e)},o.then(t,t);break a;case 3:Q=7;break a;case 4:Q=5;break a;case 7:ya(o)?(Q=0,Ll=null,ju(t)):(Q=0,Ll=null,Mu(e,t,o,7));break;case 5:var s=null;switch(X.tag){case 26:s=X.memoizedState;case 5:case 27:var c=X;if(s?Wf(s):c.stateNode.complete){Q=0,Ll=null;var l=c.sibling;if(l!==null)X=l;else{var u=c.return;u===null?X=null:(X=u,Nu(u))}break b}}Q=0,Ll=null,Mu(e,t,o,5);break;case 6:Q=0,Ll=null,Mu(e,t,o,6);break;case 8:yu(),Hl=6;break a;default:throw Error(i(462))}}ku();break}catch(t){xu(e,t)}while(1);return Bi=zi=null,T.H=r,T.A=a,Y=n,X===null?(Il=null,Z=0,Jr(),Hl):0}function ku(){for(;X!==null&&!Pe();)Au(X)}function Au(e){var t=Dc(e.alternate,e,Vl);e.memoizedProps=e.pendingProps,t===null?Nu(e):X=t}function ju(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=dc(n,t,t.pendingProps,t.type,void 0,Z);break;case 11:t=dc(n,t,t.pendingProps,t.type.render,t.ref,Z);break;case 5:Co(t);default:Ic(n,t),t=X=ii(t,Vl),t=Dc(n,t,Vl)}e.memoizedProps=e.pendingProps,t===null?Nu(e):X=t}function Mu(e,t,n,r){Bi=zi=null,Co(t),q=null,Ta=0;var i=t.return;try{if(Xs(e,i,t,n,Z)){Hl=1,Gs(e,di(n,e.current)),X=null;return}}catch(t){if(i!==null)throw X=i,t;Hl=1,Gs(e,di(n,e.current)),X=null;return}t.flags&32768?(K||r===1?e=!0:zl||Z&536870912?e=!1:(Rl=e=!0,(r===2||r===9||r===3||r===6)&&(r=Ya.current,r!==null&&r.tag===13&&(r.flags|=16384))),Pu(t,e)):Nu(t)}function Nu(e){var t=e;do{if(t.flags&32768){Pu(t,Rl);return}e=t.return;var n=Pc(t.alternate,t,Vl);if(n!==null){X=n;return}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);Hl===0&&(Hl=5)}function Pu(e,t){do{var n=Fc(e.alternate,e);if(n!==null){n.flags&=32767,X=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){X=e;return}X=e=n}while(e!==null);Hl=6,X=null}function Fu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Bu();while(nu!==0);if(Y&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=qr,st(e,n,o,s,c,l),e===Il&&(X=Il=null,Z=0),iu=t,ru=e,au=n,ou=o,su=a,cu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Yu(Be,function(){return Vu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=T.T,T.T=null,a=E.p,E.p=2,s=Y,Y|=4;try{tl(e,t,n)}finally{Y=s,E.p=a,T.T=r}}nu=1,Iu(),Lu(),Ru()}}function Iu(){if(nu===1){nu=0;var e=ru,t=iu,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=Y;Y|=4;try{ml(t,e);var a=zd,o=Or(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Dr(s.ownerDocument.documentElement,s)){if(c!==null&&kr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Er(s,h),v=Er(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{Y=i,E.p=r,T.T=n}}e.current=t,nu=2}}function Lu(){if(nu===2){nu=0;var e=ru,t=iu,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=Y;Y|=4;try{nl(e,t.alternate,t)}finally{Y=i,E.p=r,T.T=n}}nu=3}}function Ru(){if(nu===4||nu===3){nu=0,Fe();var e=ru,t=iu,n=au,r=cu;t.subtreeFlags&10256||t.flags&10256?nu=5:(nu=0,iu=ru=null,zu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(tu=null),ft(n),t=t.stateNode,Ke&&typeof Ke.onCommitFiberRoot==`function`)try{Ke.onCommitFiberRoot(Ge,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=T.T,i=E.p,E.p=2,T.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{T.T=t,E.p=i}}au&3&&Bu(),nd(e),i=e.pendingLanes,n&261930&&i&42?e===uu?lu++:(lu=0,uu=e):lu=0,rd(0,!1)}}function zu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,na(t)))}function Bu(){return Iu(),Lu(),Ru(),Vu()}function Vu(){if(nu!==5)return!1;var e=ru,t=ou;ou=0;var n=ft(au),r=T.T,a=E.p;try{E.p=32>n?32:n,T.T=null,n=su,su=null;var o=ru,s=au;if(nu=0,iu=ru=null,au=0,Y&6)throw Error(i(331));var c=Y;if(Y|=4,jl(o.current),Cl(o,o.current,s,n),Y=c,rd(0,!1),Ke&&typeof Ke.onPostCommitFiberRoot==`function`)try{Ke.onPostCommitFiberRoot(Ge,o)}catch{}return!0}finally{E.p=a,T.T=r,zu(e,t)}}function Hu(e,t,n){t=di(n,t),t=qs(e.stateNode,t,2),e=Ia(e,t,2),e!==null&&(ot(e,2),nd(e))}function Uu(e,t,n){if(e.tag===3)Hu(e,e,n);else for(;t!==null;){if(t.tag===3){Hu(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(tu===null||!tu.has(r))){e=di(n,e),n=Js(2),r=Ia(t,n,2),r!==null&&(Ys(n,r,t,e),ot(r,2),nd(r));break}}t=t.return}}function Wu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Fl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Bl=!0,i.add(n),e=Gu.bind(null,e,t,n),t.then(e,e))}function Gu(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Il===e&&(Z&n)===n&&(Hl===4||Hl===3&&(Z&62914560)===Z&&300>Ie()-Zl?!(Y&2)&&bu(e,0):Gl|=n,ql===Z&&(ql=0)),nd(e)}function Ku(e,t){t===0&&(t=it()),e=Xr(e,t),e!==null&&(ot(e,t),nd(e))}function qu(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ku(e,n)}function Ju(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),Ku(e,n)}function Yu(e,t){return Me(e,t)}var Xu=null,Zu=null,Qu=!1,$u=!1,ed=!1,td=0;function nd(e){e!==Zu&&e.next===null&&(Zu===null?Xu=Zu=e:Zu=Zu.next=e),$u=!0,Qu||(Qu=!0,ld())}function rd(e,t){if(!ed&&$u){ed=!0;do for(var n=!1,r=Xu;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Je(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,cd(r,a))}else a=Z,a=tt(r,r===Il?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||nt(r,a)||(n=!0,cd(r,a))}r=r.next}while(n);ed=!1}}function id(){ad()}function ad(){$u=Qu=!1;var e=0;td!==0&&Gd()&&(e=td);for(var t=Ie(),n=null,r=Xu;r!==null;){var i=r.next,a=od(r,t);a===0?(r.next=null,n===null?Xu=i:n.next=i,i===null&&(Zu=n)):(n=r,(e!==0||a&3)&&($u=!0)),r=i}nu!==0&&nu!==5||rd(e,!1),td!==0&&(td=0)}function od(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Je(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=rt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Il,n=Z,n=tt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Q===2||Q===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ne(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||nt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ne(r),ft(n)){case 2:case 8:n=ze;break;case 32:n=Be;break;case 268435456:n=He;break;default:n=Be}return r=sd.bind(null,e),n=Me(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ne(r),e.callbackPriority=2,e.callbackNode=null,2}function sd(e,t){if(nu!==0&&nu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Bu()&&e.callbackNode!==n)return null;var r=Z;return r=tt(e,e===Il?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(mu(e,r,t),od(e,Ie()),e.callbackNode!=null&&e.callbackNode===n?sd.bind(null,e):null)}function cd(e,t){if(Bu())return null;mu(e,t,!0)}function ld(){Yd(function(){Y&6?Me(Re,id):ad()})}function ud(){if(td===0){var e=aa;e===0&&(e=Qe,Qe<<=1,!(Qe&261888)&&(Qe=256)),td=e}return td}function dd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:ln(``+e)}function fd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function pd(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=dd((i[_t]||null).action),o=r.submitter;o&&(t=(t=o[_t]||null)?dd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new jn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(td!==0){var e=o?fd(i,o):new FormData(i);ys(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?fd(i,o):new FormData(i),ys(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var md=0;md<Wr.length;md++){var hd=Wr[md];Gr(hd.toLowerCase(),`on`+(hd[0].toUpperCase()+hd.slice(1)))}Gr(zr,`onAnimationEnd`),Gr(Br,`onAnimationIteration`),Gr(Vr,`onAnimationStart`),Gr(`dblclick`,`onDoubleClick`),Gr(`focusin`,`onFocus`),Gr(`focusout`,`onBlur`),Gr(B,`onTransitionRun`),Gr(Hr,`onTransitionStart`),Gr(V,`onTransitionCancel`),Gr(Ur,`onTransitionEnd`),Nt(`onMouseEnter`,[`mouseout`,`mouseover`]),Nt(`onMouseLeave`,[`mouseout`,`mouseover`]),Nt(`onPointerEnter`,[`pointerout`,`pointerover`]),Nt(`onPointerLeave`,[`pointerout`,`pointerover`]),Mt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Mt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Mt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Mt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Mt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Mt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var gd=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),_d=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(gd));function vd(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Kr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Kr(e)}i.currentTarget=null,a=c}}}}function $(e,t){var n=t[yt];n===void 0&&(n=t[yt]=new Set);var r=e+`__bubble`;n.has(r)||(Sd(t,e,2,!1),n.add(r))}function yd(e,t,n){var r=0;t&&(r|=4),Sd(n,e,r,t)}var bd=`_reactListening`+Math.random().toString(36).slice(2);function xd(e){if(!e[bd]){e[bd]=!0,At.forEach(function(t){t!==`selectionchange`&&(_d.has(t)||yd(t,!1,e),yd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[bd]||(t[bd]=!0,yd(`selectionchange`,!1,t))}}function Sd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!bn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Cd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Tt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}_n(function(){var r=a,i=fn(n),s=[];a:{var c=H.get(e);if(c!==void 0){var l=jn,u=e;switch(e){case`keypress`:if(En(n)===0)break a;case`keydown`:case`keyup`:l=Kn;break;case`focusin`:u=`focus`,l=k;break;case`focusout`:u=`blur`,l=k;break;case`beforeblur`:case`afterblur`:l=k;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Rn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=zn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Jn;break;case zr:case Br:case Vr:l=Bn;break;case Ur:l=Yn;break;case`scroll`:case`scrollend`:l=Nn;break;case`wheel`:l=Xn;break;case`copy`:case`cut`:case`paste`:l=Vn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=qn;break;case`toggle`:case`beforetoggle`:l=Zn}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=vn(m,p),g!=null&&d.push(wd(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==dn&&(u=n.relatedTarget||n.fromElement)&&(Tt(u)||u[vt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?Tt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Rn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=qn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Dt(l),h=u==null?c:Dt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,Tt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Ed,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Dd(s,c,l,d,!1),u!==null&&f!==null&&Dd(s,f,u,d,!0)}}a:{if(c=r?Dt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=fr;else if(P(c)){if(pr)v=xr;else{v=yr;var y=vr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&on(r.elementType)&&(v=fr):v=br;if(v&&=v(e,r)){F(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Zt(c,`number`,c.value)}switch(y=r?Dt(r):window,e){case`focusin`:(P(y)||y.contentEditable===`true`)&&(jr=y,Mr=r,Nr=null);break;case`focusout`:Nr=Mr=jr=null;break;case`mousedown`:Pr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Pr=!1,Fr(s,n,i);break;case`selectionchange`:if(Ar)break;case`keydown`:case`keyup`:Fr(s,n,i)}var b;if($n)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else sr?ar(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(nr&&n.locale!==`ko`&&(sr||x!==`onCompositionStart`?x===`onCompositionEnd`&&sr&&(b=Tn()):(Sn=i,Cn=`value`in Sn?Sn.value:Sn.textContent,sr=!0)),y=Td(r,x),0<y.length&&(x=new Hn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=or(n),b!==null&&(x.data=b)))),(b=tr?M(e,n):cr(e,n))&&(x=Td(r,`onBeforeInput`),0<x.length&&(y=new Hn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),pd(s,e,r,n,i)}vd(s,t)})}function wd(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Td(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=vn(e,n),i!=null&&r.unshift(wd(e,i,a)),i=vn(e,t),i!=null&&r.push(wd(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Ed(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Dd(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=vn(n,a),l!=null&&o.unshift(wd(n,l,c))):i||(l=vn(n,a),l!=null&&o.push(wd(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Od=/\r\n?/g,kd=/\u0000|\uFFFD/g;function Ad(e){return(typeof e==`string`?e:``+e).replace(Od,`
`).replace(kd,``)}function jd(e,t){return t=Ad(t),Ad(e)===t}function Md(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||tn(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&tn(e,``+r);break;case`className`:zt(e,`class`,r);break;case`tabIndex`:zt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:zt(e,n,r);break;case`style`:an(e,r,o);break;case`data`:if(t!==`object`){zt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=ln(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&Md(e,t,`name`,a.name,a,null),Md(e,t,`formEncType`,a.formEncType,a,null),Md(e,t,`formMethod`,a.formMethod,a,null),Md(e,t,`formTarget`,a.formTarget,a,null)):(Md(e,t,`encType`,a.encType,a,null),Md(e,t,`method`,a.method,a,null),Md(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=ln(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=un);break;case`onScroll`:r!=null&&$(`scroll`,e);break;case`onScrollEnd`:r!=null&&$(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=ln(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:$(`beforetoggle`,e),$(`toggle`,e),Rt(e,`popover`,r);break;case`xlinkActuate`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Rt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=sn.get(n)||n,Rt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:an(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?tn(e,r):(typeof r==`number`||typeof r==`bigint`)&&tn(e,``+r);break;case`onScroll`:r!=null&&$(`scroll`,e);break;case`onScrollEnd`:r!=null&&$(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=un);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!jt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[_t]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Rt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:$(`error`,e),$(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Md(e,t,o,s,n,null)}}a&&Md(e,t,`srcSet`,n.srcSet,n,null),r&&Md(e,t,`src`,n.src,n,null);return;case`input`:$(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:Md(e,t,r,d,n,null)}}Xt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in $(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:Md(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Qt(e,!!r,n,!0):Qt(e,!!r,t,!1);return;case`textarea`:for(s in $(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:Md(e,t,s,c,n,null)}en(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Md(e,t,l,r,n,null)}return;case`dialog`:$(`beforetoggle`,e),$(`toggle`,e),$(`cancel`,e),$(`close`,e);break;case`iframe`:case`object`:$(`load`,e);break;case`video`:case`audio`:for(r=0;r<gd.length;r++)$(gd[r],e);break;case`image`:$(`error`,e),$(`load`,e);break;case`details`:$(`toggle`,e);break;case`embed`:case`source`:case`link`:$(`error`,e),$(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Md(e,t,u,r,n,null)}return;default:if(on(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Md(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Md(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&Md(e,t,p,m,r,f)}}Yt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||Md(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&Md(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Qt(e,!!n,n?[]:``,!1):Qt(e,!!n,t,!0)):Qt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Md(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&Md(e,t,s,a,r,o)}$t(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Md(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Md(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Md(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:Md(e,t,u,p,r,m)}return;default:if(on(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Md(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Md(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e!==Wd&&(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Ct]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body)}n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),wt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[Ct])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);wt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=E.d;E.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=vu();return e||t}function yf(e){var t=Et(e);t!==null&&t.tag===5&&t.type===`form`?xs(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Jt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),kt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Jt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Jt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Jt(n.imageSizes)+`"]`)):i+=`[href="`+Jt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),kt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Jt(r)+`"][href="`+Jt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),kt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Ot(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);kt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Ot(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),kt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Ot(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),kt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=ve.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Ot(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Ot(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Ot(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Jt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),kt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Jt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Jt(n.href)+`"]`);if(r)return t.instance=r,kt(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),kt(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,kt(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),kt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,kt(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),kt(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Ct]||a[gt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,kt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),kt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:te,Provider:null,Consumer:null,_currentValue:de,_currentValue2:de,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=at(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=at(0),this.hiddenUpdates=at(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=ti(3,null,null,t),e.current=a,a.stateNode=e,t=ta(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Na(a),e}function tp(e){return e?(e=$r,e):$r}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Fa(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ia(e,r,t),n!==null&&(pu(n,e,t),La(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=Xr(e,67108864);t!==null&&pu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=du();t=dt(t);var n=Xr(e,t);n!==null&&pu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=2,up(e,t,n,r)}finally{E.p=a,T.T=i}}function lp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=8,up(e,t,n,r)}finally{E.p=a,T.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)Cd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Et(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=et(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Je(o);s.entanglements[1]|=c,o&=~c}nd(a),!(Y&6)&&($l=Ie()+500,rd(0,!1))}}break;case 31:case 13:s=Xr(a,2),s!==null&&pu(s,a,2),vu(),ip(a,2)}if(a=dp(r),a===null&&Cd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Cd(e,t,r,null,n)}}function dp(e){return e=fn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=Tt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Le()){case Re:return 2;case ze:return 8;case Be:case Ve:return 32;case He:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Et(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=Tt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,mt(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,mt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);dn=r,n.target.dispatchEvent(r),dn=null}else return t=Et(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Et(n);a!==null&&(e.splice(t,3),t-=3,ys(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[_t]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[_t]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,du(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),vu(),t[vt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=pt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.8`)throw Error(i(527,Lp,`19.2.8`));E.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:T,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ge=zp.inject(Rp),Ke=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Hs,s=Us,c=Ws;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[vt]=t.current,xd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(f(),1),v=g(),y={Unspecified:0,Utc:1,Local:2},b=class{constructor(e,t){this.message=e??``,this.innerException=t}toString(){return this.message}};function x(e){return Array.isArray(e)||ArrayBuffer.isView(e)}function ee(e){return e!=null&&typeof e.GetEnumerator==`function`}function te(e){return e!=null&&typeof e.CompareTo==`function`}function S(e){return e!=null&&typeof e.Equals==`function`}function ne(e){return e!=null&&typeof e.GetHashCode==`function`}function re(e){return e!=null&&typeof e.Dispose==`function`}function ie(e){re(e)&&e.Dispose()}function C(){return null}function ae(e,t){return Object.getPrototypeOf(e)?.constructor===Object.getPrototypeOf(t)?.constructor}var oe=class{constructor(e){this.current=C(),this.iter=e}"System.Collections.Generic.IEnumerator`1.get_Current"(){return this.current}"System.Collections.IEnumerator.get_Current"(){return this.current}"System.Collections.IEnumerator.MoveNext"(){let e=this.iter.next();return this.current=e.value,!e.done}"System.Collections.IEnumerator.Reset"(){throw new b(`JS iterators cannot be reset`)}Dispose(){}};function se(e){return ee(e)?e.GetEnumerator():new oe(e[Symbol.iterator]())}function ce(e){return{next(){let t=e[`System.Collections.IEnumerator.MoveNext`](),n=t?e["System.Collections.Generic.IEnumerator`1.get_Current"]():void 0;return{done:!t,value:n}}}}function w(e,t){return e.toString(10).padStart(t,`0`)}function le(e){let t=e;return typeof t.offset==`number`?t.offset:e.kind===y.Utc?0:e.getTimezoneOffset()*-6e4}function ue(e,t){return e=e<0&&t!=null&&t!==10?4294967295+e+1:e,e.toString(t)}var T=class e{static id(t){return e.idMap.has(t)||e.idMap.set(t,++e.count),e.idMap.get(t)}};T.idMap=new WeakMap,T.count=0;function E(e){let t=0,n=5381,r=e.length;for(;t<r;)n=n*33^e.charCodeAt(t++);return n}function de(e){return e*2654435761|0}function fe(e){return E(e.toString(32))}function pe(e){let t=0,n=e.length;for(let r=0;r<n;r++){let n=e[r];t=(t<<5)+t^n}return t}function me(e){return e.getTime()}function he(e){let t=e.length,n=Array(t);for(let r=0;r<t;r++)n[r]=D(e[r]);return pe(n)}function D(e){if(e==null)return 0;switch(typeof e){case`boolean`:return+!!e;case`number`:return de(e);case`bigint`:return fe(e);case`string`:return E(e);default:return ne(e)?e.GetHashCode():x(e)?he(e):e instanceof Date?me(e):Object.getPrototypeOf(e)?.constructor===Object?pe(Object.values(e).map(e=>D(e))):de(T.id(e))}}function ge(e,t,n){if(e==null)return t==null;if(t==null||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(!n(e[r],t[r]))return!1;return!0}function _e(e,t){return ge(e,t,ye)}function ve(e,t){let n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;n.sort(),r.sort();for(let i=0;i<n.length;i++)if(n[i]!==r[i]||!ye(e[n[i]],t[r[i]]))return!1;return!0}function ye(e,t){return e===t?!0:e==null?t==null:t==null?!1:S(e)?e.Equals(t):x(e)?x(t)&&_e(e,t):typeof e==`object`?e instanceof Date?t instanceof Date&&be(e,t)===0:Object.getPrototypeOf(e)?.constructor===Object&&ve(e,t):!1}function be(e,t){let n,r;return`offset`in e&&`offset`in t?(n=e.getTime(),r=t.getTime()):(n=e.getTime()+le(e),r=t.getTime()+le(t)),n===r?0:n<r?-1:1}function xe(e,t){return e===t?0:e<t?-1:e>t?1:Number.isNaN(e)?Number.isNaN(t)?0:-1:1}function Se(e,t,n){if(e==null)return t==null?0:1;if(t==null)return-1;if(e.length!==t.length)return e.length<t.length?-1:1;for(let r=0,i=0;r<e.length;r++)if(i=n(e[r],t[r]),i!==0)return i;return 0}function Ce(e,t){return Se(e,t,Te)}function we(e,t){let n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return n.length<r.length?-1:1;n.sort(),r.sort();for(let i=0,a=0;i<n.length;i++){let o=n[i];if(o!==r[i])return o<r[i]?-1:1;if(a=Te(e[o],t[o]),a!==0)return a}return 0}function Te(e,t){return e===t?0:e==null?t==null?0:-1:t==null?1:te(e)?e.CompareTo(t):x(e)?x(t)?Ce(e,t):-1:typeof e==`object`?e instanceof Date?t instanceof Date?be(e,t):-1:Object.getPrototypeOf(e)?.constructor===Object?we(e,t):-1:xe(e,t)}function Ee(e){let t={};for(let n of e)t[n[0]]=n[1];return t}function De(e){x(e)?e.splice(0):e.clear()}var Oe=new WeakMap;function ke(e){if(e==null)return null;let t=(t,n)=>e(t)(n);return Oe.set(t,e),t}function Ae(e){return Oe.get(e)??(t=>n=>e(t,n))}function je(e){if(e==null)return null;let t=(t,n,r)=>e(t)(n)(r);return Oe.set(t,e),t}function Me(e){return Oe.get(e)??(t=>n=>r=>e(t,n,r))}function Ne(e){let t=0,n=`[`;for(let r of e){if(t===0)n+=Pe(r);else if(t===100){n+=`; ...`;break}else n+=`; `+Pe(r);t++}return n+`]`}function Pe(e,t=0){return typeof e==`string`?`"`+e+`"`:Fe(e,t)}function Fe(e,t=0){if(typeof e==`object`&&e){if(typeof e.toString==`function`&&e.toString!==Object.prototype.toString)return e.toString();if(Symbol.iterator in e)return Ne(e);{let n=Object.getPrototypeOf(e)?.constructor;return n===Object&&t<10?`{ `+Object.entries(e).map(([e,n])=>e+` = `+Pe(n,t+1)).join(`
  `)+` }`:n?.name??``}}return String(e)}function Ie(e,t){if(t.length===0)return e;{let n,r=!0;return t.length===1?(n=Pe(t[0]),r=n.indexOf(` `)>=0):n=t.map(e=>Pe(e)).join(`, `),e+(r?` (`:` `)+n+(r?`)`:``)}}var Le=class{get name(){return this.cases()[this.tag]}toJSON(){return this.fields.length===0?this.name:[this.name].concat(this.fields)}toString(){return Ie(this.name,this.fields)}GetHashCode(){let e=this.fields.map(e=>D(e));return e.splice(0,0,de(this.tag)),pe(e)}Equals(e){return this===e?!0:ae(this,e)?this.tag===e.tag&&_e(this.fields,e.fields):!1}CompareTo(e){return this===e?0:ae(this,e)?this.tag===e.tag?Ce(this.fields,e.fields):this.tag<e.tag?-1:1:-1}};function Re(e){let t={},n=Object.keys(e);for(let r=0;r<n.length;r++)t[n[r]]=e[n[r]];return t}function ze(e){return`{ `+Object.entries(e).map(([e,t])=>e+` = `+Pe(t)).join(`
  `)+` }`}function Be(e){return pe(Object.values(e).map(e=>D(e)))}function Ve(e,t){if(e===t)return!0;if(ae(e,t)){let n=Object.keys(e);for(let r=0;r<n.length;r++)if(!ye(e[n[r]],t[n[r]]))return!1;return!0}return!1}function He(e,t){if(e===t)return 0;if(ae(e,t)){let n=Object.keys(e);for(let r=0;r<n.length;r++){let i=Te(e[n[r]],t[n[r]]);if(i!==0)return i}return 0}return-1}var Ue=class{toJSON(){return Re(this)}toString(){return ze(this)}GetHashCode(){return Be(this)}Equals(e){return Ve(this,e)}CompareTo(e){return He(this,e)}},We=Symbol(`numeric`);function Ge(e){return typeof e==`number`||typeof e==`bigint`||e?.[We]}function Ke(e,t){return typeof e==`number`||typeof e==`bigint`?e<t?-1:+(e>t):e.CompareTo(t)}function qe(e,t){return typeof e==`number`?e*t:typeof e==`bigint`?e*BigInt(t):e[We]().multiply(t)}function Je(e,t){return typeof e==`number`?e.toFixed(t):typeof e==`bigint`?e.toString():e[We]().toFixed(t)}function Ye(e,t){return typeof e==`number`?e.toPrecision(t):typeof e==`bigint`?e.toString():e[We]().toPrecision(t)}function Xe(e,t){return typeof e==`number`?e.toExponential(t):typeof e==`bigint`?e:e[We]().toExponential(t)}function Ze(e){return typeof e==`number`?(Number(e)>>>0).toString(16):typeof e==`bigint`?BigInt.asUintN(64,e).toString(16):e[We]().toHex()}var Qe=class e{constructor(e){this.value=e}toJSON(){return this.value}toString(){return String(this.value)}GetHashCode(){return D(this.value)}Equals(t){return t!=null&&ye(this.value,t instanceof e?t.value:t)}CompareTo(t){return t==null?1:Te(this.value,t instanceof e?t.value:t)}};function O(e){if(e==null)throw new b(`Option has no value`);return e instanceof Qe?e.value:e}function $e(e){return e==null||e instanceof Qe?new Qe(e):e}function et(e,t){return e==null?t:O(e)}var tt=`Collection was empty.`,nt=`Value cannot be null.`,rt=` (Parameter '`,it=[`Sun`,`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`],at=[`Sunday`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`],ot=[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`],st=[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`];function ct(e,t,n){let r=0,i=t;for(;i<e.length&&e[i]===n;)i++,r++;return r}function lt(e,t){return t>=e.length-1?-1:e.charCodeAt(t+1)}function ut(e,t){let n=t,r=e[t],i=``,a=!1;for(;t<e.length;){t++;let n=e[t];if(n===r){a=!0;break}if(n===`\\`){if(t<e.length)t++,i+=e[t];else throw new b(`Invalid string format`)}else i+=n}if(!a)throw new b(`Invalid string format could not find matching quote for ${r}`);return[i,t-n+1]}function dt(e,t,n){let r=0,i=0,a=``,o=n?Ot(e.getTime(),y.Utc):e;for(;r<t.length;){let e=t[r];switch(e){case`d`:switch(i=ct(t,r,`d`),r+=i,i){case 1:a+=jt(o);break;case 2:a+=w(jt(o),2);break;case 3:a+=it[Rt(o)];break;default:a+=at[Rt(o)]}break;case`f`:if(i=ct(t,r,`f`),r+=i,i<=3){let e=10**(3-i);a+=w(Math.floor(Nt(o)/e),i)}else if(i<=7)a+=(``+Nt(o)).padEnd(i,`0`);else throw`Input string was not in a correct format.`;break;case`F`:if(i=ct(t,r,`F`),r+=i,i<=3){let e=10**(3-i),t=Math.floor(Nt(o)/e);t!=0&&(a+=w(t,i))}else if(i<=7){let e=Nt(o);e!=0&&(a+=w(e,3))}else throw`Input string was not in a correct format.`;break;case`g`:i=ct(t,r,`g`),r+=i,a+=`A.D.`;break;case`h`:switch(i=ct(t,r,`h`),r+=i,i){case 1:let e=Mt(o)%12;a+=e||12;break;default:let t=Mt(o)%12;a+=w(t||12,2)}break;case`H`:switch(i=ct(t,r,`H`),r+=i,i){case 1:a+=Mt(o);break;default:a+=w(Mt(o),2)}break;case`K`:if(i=ct(t,r,`K`),r+=i,i===1)switch(ft(o)){case y.Utc:a+=`Z`;break;case y.Local:a+=pt(o.getTimezoneOffset()*-6e4);break;case y.Unspecified:}break;case`m`:switch(i=ct(t,r,`m`),r+=i,i){case 1:a+=Pt(o);break;default:a+=w(Pt(o),2)}break;case`M`:switch(i=ct(t,r,`M`),r+=i,i){case 1:a+=Ft(o);break;case 2:a+=w(Ft(o),2);break;case 3:a+=ot[Ft(o)-1];break;default:a+=st[Ft(o)-1]}break;case`s`:switch(i=ct(t,r,`s`),r+=i,i){case 1:a+=It(o);break;default:a+=w(It(o),2)}break;case`t`:switch(i=ct(t,r,`t`),r+=i,i){case 1:a+=o.getHours()<12?`A`:`P`;break;default:a+=o.getHours()<12?`AM`:`PM`}break;case`y`:switch(i=ct(t,r,`y`),r+=i,i){case 1:a+=Lt(o)%100;break;case 2:a+=w(Lt(o)%100,2);break;default:a+=w(Lt(o),i)}break;case`z`:i=ct(t,r,`z`),r+=i;let s=``;switch(ft(o)){case y.Utc:s=`+00:00`;break;case y.Local:s=pt(o.getTimezoneOffset()*-6e4);break;case y.Unspecified:s=pt(At(o).getTimezoneOffset()*-6e4)}let c=s[0]===`-`?`-`:`+`,l=parseInt(s.substring(1,3),10),u=parseInt(s.substring(4,6),10);switch(i){case 1:a+=`${c}${l}`;break;case 2:a+=`${c}${w(l,2)}`;break;default:a+=`${c}${w(l,2)}:${w(u,2)}`}break;case`:`:a+=`:`,r++;break;case`/`:a+=`/`,r++;break;case`'`:case`"`:let[d,f]=ut(t,r);a+=d,r+=f;break;case`%`:let p=lt(t,r);if(p>=0&&p!==37)r+=2,a+=dt(o,String.fromCharCode(p),n);else throw new b(`Invalid format string`);break;case`\\`:let m=lt(t,r);if(m>=0)r+=2,a+=String.fromCharCode(m);else throw new b(`Invalid format string`);break;default:r++,a+=e}}return a}function ft(e){return e.kind??y.Unspecified}function pt(e){let t=e<0;e=Math.abs(e);let n=~~(e/36e5),r=e%36e5/6e4;return(t?`-`:`+`)+w(n,2)+`:`+w(r,2)}function mt(e,t){if(t)return e.toISOString();{let t=e.kind==null||e.kind===y.Local;return w(e.getFullYear(),4)+`-`+w(e.getMonth()+1,2)+`-`+w(e.getDate(),2)+`T`+w(e.getHours(),2)+`:`+w(e.getMinutes(),2)+`:`+w(e.getSeconds(),2)+`.`+w(e.getMilliseconds(),3)+(t?pt(e.getTimezoneOffset()*-6e4):``)}}function ht(e,t){let n=e.toISOString();return n.substring(0,n.length-1)+pt(t)}function gt(e,t){let n=new Date(e.getTime()+(e.offset??0));if(typeof t!=`string`)return n.toISOString().replace(/\.\d+/,``).replace(/[A-Z]|\.\d+/g,` `)+pt(e.offset??0);if(t.length===1)switch(t){case`D`:return _t(n);case`d`:return vt(n);case`F`:return _t(n)+` `+yt(n);case`f`:return _t(n)+` `+bt(n);case`G`:return vt(n)+` `+yt(n);case`g`:return vt(n)+` `+bt(n);case`M`:case`m`:return wt(n);case`O`:case`o`:return ht(n,e.offset??0);case`R`:case`r`:return xt(Ot(e.getTime(),y.Utc));case`s`:return St(kt(n));case`T`:return yt(kt(n));case`t`:return bt(kt(n));case`u`:return Ct(Ot(e.getTime(),y.Utc));case`U`:{let t=Ot(e.getTime(),y.Utc);return _t(t)+` `+yt(t)}case`Y`:case`y`:return Tt(n);default:throw new b(`Unrecognized Date print format`)}else return dt(n,t,!0)}function _t(e){return at[Rt(e)]+`, `+w(jt(e),2)+` `+st[Ft(e)-1]+` `+Lt(e)}function vt(e){return w(Ft(e),2)+`/`+w(jt(e),2)+`/`+Lt(e)}function yt(e){return w(Mt(e),2)+`:`+w(Pt(e),2)+`:`+w(It(e),2)}function bt(e){return w(Mt(e),2)+`:`+w(Pt(e),2)}function xt(e){let t=kt(e);return it[Rt(t)]+`, `+w(jt(t),2)+` `+ot[Ft(t)-1]+` `+Lt(t)+` `+w(Mt(t),2)+`:`+w(Pt(t),2)+`:`+w(It(t),2)+` GMT`}function St(e){return w(Lt(e),4)+`-`+w(Ft(e),2)+`-`+w(jt(e),2)+`T`+w(Mt(e),2)+`:`+w(Pt(e),2)+`:`+w(It(e),2)}function Ct(e){let t=kt(e);return w(Lt(t),4)+`-`+w(Ft(t),2)+`-`+w(jt(t),2)+` `+w(Mt(t),2)+`:`+w(Pt(t),2)+`:`+w(It(t),2)+`Z`}function wt(e){return st[Ft(e)-1]+` `+w(jt(e),2)}function Tt(e){return Lt(e)+` `+st[Ft(e)-1]}function Et(e,t){let n=e.kind===y.Utc;if(typeof t!=`string`)return vt(e)+` `+yt(e);if(t.length===1)switch(t){case`D`:return _t(e);case`d`:return vt(e);case`F`:return _t(e)+` `+yt(e);case`f`:return _t(e)+` `+bt(e);case`G`:return vt(e)+` `+yt(e);case`g`:return vt(e)+` `+bt(e);case`M`:case`m`:return wt(e);case`O`:case`o`:return mt(e,n);case`R`:case`r`:return xt(e);case`s`:return St(e);case`T`:return yt(e);case`t`:return bt(e);case`u`:return Ct(e);case`U`:return _t(kt(e))+` `+yt(kt(e));case`Y`:case`y`:return Tt(e);default:throw new b(`Unrecognized Date print format`)}else return dt(e,t,n)}function Dt(e,t,n){return e.offset==null?Et(e,t):gt(e,t)}function Ot(e,t){let n=new Date(e);return n.kind=t??y.Unspecified,n}function kt(e){return e.kind===y.Utc?e:Ot(e.getTime(),y.Utc)}function At(e){return e.kind===y.Local?e:Ot(e.getTime(),y.Local)}function jt(e){return e.kind===y.Utc?e.getUTCDate():e.getDate()}function Mt(e){return e.kind===y.Utc?e.getUTCHours():e.getHours()}function Nt(e){return e.kind===y.Utc?e.getUTCMilliseconds():e.getMilliseconds()}function Pt(e){return e.kind===y.Utc?e.getUTCMinutes():e.getMinutes()}function Ft(e){return(e.kind===y.Utc?e.getUTCMonth():e.getMonth())+1}function It(e){return e.kind===y.Utc?e.getUTCSeconds():e.getSeconds()}function Lt(e){return e.kind===y.Utc?e.getUTCFullYear():e.getFullYear()}function Rt(e){return e.kind===y.Utc?e.getUTCDay():e.getDay()}function zt(e){return e.replace(/[$()*+.?[\\\^{|}\]]/g,`\\$&`)}var Bt=/(^|[^%])%([0+\- ]*)(\*|\d+)?(?:\.(\d+))?(\w)/g;function Vt(e,t){return Ke(e,t)<0}function Ht(e){return{input:e,cont:qt(e)}}function Ut(e,t){return typeof t==`string`?e(t):t.cont(e)}function Wt(e){return Ut(e=>e,e)}function Gt(e,t,n,r,i){let a=``;if(t||=``,i||=``,Ge(e))switch(i.toLowerCase()!==`x`&&(Vt(e,0)?(e=qe(e,-1),a=`-`):t.indexOf(` `)>=0?a=` `:t.indexOf(`+`)>=0&&(a=`+`)),r=r==null?null:parseInt(r,10),i){case`f`:case`F`:r??=6,e=Je(e,r);break;case`g`:case`G`:e=r==null?Ye(e):Ye(e,r);break;case`e`:case`E`:e=r==null?Xe(e):Xe(e,r);break;case`x`:e=Ze(e);break;case`X`:e=Ze(e).toUpperCase();break;default:e=String(e)}else e=e instanceof Date?Dt(e):i===`A`&&typeof e==`string`?`"`+e+`"`:Fe(e);if(n=typeof n==`number`?n:parseInt(n,10),isNaN(n))e=a+e;else{let r=t.indexOf(`0`)>=0,i=t.indexOf(`-`)>=0,o=i||!r?` `:`0`;o===`0`?(e=Qt(e,n-a.length,o,i),e=a+e):e=Qt(a+e,n,o,i)}return e}function Kt(e,t,n,r=``,i=-1){return(...a)=>{let o=r,s=t.slice(),c=n.slice();for(let e of a){let[,,t,n,r,a]=c[0],l=n;if(i>=0)l=i,i=-1;else if(l===`*`){if(e<0)throw new b(`Non-negative number required`);i=e;continue}o+=s[0],o+=Gt(e,t,l,r,a),s.splice(0,1),c.splice(0,1)}return c.length===0?(o+=s[0],e(o)):Kt(e,s,c,o,i)}}function qt(e){return t=>{Bt.lastIndex=0;let n=[],r=[],i=0,a=Bt.exec(e);for(;a;){let t=a.index+(a[1]||``).length;n.push(e.substring(i,t).replace(/%%/g,`%`)),r.push(a),i=Bt.lastIndex,--Bt.lastIndex,a=Bt.exec(e)}return n.length===0?t(e.replace(/%%/g,`%`)):(n.push(e.substring(i).replace(/%%/g,`%`)),Kt(t,n,r))}}function Jt(e){return typeof e!=`string`||e.length===0}function Yt(e){return typeof e!=`string`||/^\s*$/.test(e)}function Xt(...e){return e.map(e=>String(e)).join(``)}function Zt(e,t){return Array.isArray(t)?t.join(e):Array.from(t).join(e)}function Qt(e,t,n,r){n||=` `,t-=e.length;for(let i=0;i<t;i++)e=r?e+n:n+e;return e}function $t(e,t,n,r){if(n=typeof n==`number`?n:void 0,r=typeof r==`number`?r:0,n&&n<0)throw new b(`Count cannot be less than zero`);if(n===0)return[];let i=(r&1)==1,a=(r&2)==2;t||=[],t=t.filter(e=>e).map(zt),t=t.length>0?t:[`\\s`];let o=[],s=new RegExp(t.join(`|`),`g`),c=!0,l=0;do{let t=s.exec(e);if(t===null){let t=a?e.substring(l).trim():e.substring(l);(!i||t.length>0)&&o.push(t),c=!1}else{let r=a?e.substring(l,t.index).trim():e.substring(l,t.index);(!i||r.length>0)&&(n!=null&&o.length+1===n?(o.push(a?e.substring(l).trim():e.substring(l)),c=!1):o.push(r)),l=s.lastIndex}}while(c);return o}function en(e,...t){return t.length===0?e.trimEnd():e.replace(RegExp(`[`+zt(t.join(``))+`]+$`),``)}function tn(e,t,n){if(t+(n||0)>e.length)throw new b(`Invalid startIndex and/or length`);return n==null?e.substr(t):e.substr(t,n)}var nn=class extends b{constructor(e){super(e)}};function rn(e){return new nn(e)}var an=class extends b{constructor(e){super(e)}};function on(e){return new an(e)}var sn=class extends b{constructor(e,t,n){super(Jt(t)?e:e+rt+t+`')`,n),this.paramName=t}},cn=class extends sn{constructor(e,t){super(t,e,C())}};function ln(e,t){return new cn(e,t)}function un(e){return ln(e,nt)}function dn(e,t){if(e==null)return Array(t);{let n=e;return typeof n==`function`?new n(t):Array(t)}}function fn(e,t){return Math.max(e,t)}function pn(e,t,n,r){let i=t|0;return e.fill(r,i,i+n)}function mn(e,t,n,r,i){let a,o=et(n,0)|0,s=et((a=r,a==null?void 0:o+O(a)),e.length)|0;return(n=>{loop:for(;;){let r=n;if(r>=s)return-1;if(i.Equals(t,yn(r,e)))return r|0;n=r+1;continue loop}})(o)|0}function hn(e,t){let n=dn(t,1);return bn(n,0,e),n}function gn(e,t,n){let r=mn(t,e,void 0,void 0,n)|0;return r>-1&&(t.splice(r,1),!0)}function _n(e,t,n){let r=e;return n.reduce(r,t)}function vn(e,t,n){if(Sn(t))return!!Sn(n);if(Sn(n))return!1;{let r=0,i=!0,a=t.length|0,o=n.length|0;if(a>o||a<o)return!1;for(;r<a&&i;)i=e(yn(r,t),yn(r,n)),r=r+1|0;return i}}function yn(e,t){if(e<0||e>=t.length)throw new b(`Index was outside the bounds of the array. (Parameter 'index')`);return t[e]}function bn(e,t,n){if(t<0||t>=e.length)throw new b(`Index was outside the bounds of the array. (Parameter 'index')`);e[t]=n}function xn(e,t,n){return t.reduceRight(((t,n)=>e(n,t)),n)}function Sn(e){return!!ye(e,C())}function Cn(e,t){if(ye(t,C()))throw un(e);return t}var wn=`Enumeration already finished.`,Tn=`Enumeration has not started. Call MoveNext.`,En=`Reset is not supported on this enumerator.`;function Dn(){throw on(En)}function On(){throw rn(Tn)}function kn(){throw rn(wn)}var An=class{constructor(e){this.f=e}toString(){let e=this,t=0,n=`seq [`,r=se(e);try{for(;t<4&&r[`System.Collections.IEnumerator.MoveNext`]();)t>0&&(n+=`; `),n+=Fe(r["System.Collections.Generic.IEnumerator`1.get_Current"]()),t=t+1|0;return t===4&&(n+=`; ...`),n+`]`}finally{ie(r)}}GetEnumerator(){return this.f()}[Symbol.iterator](){return ce(se(this))}"System.Collections.IEnumerable.GetEnumerator"(){return this.f()}};function jn(e){return new An(e)}var Mn=class{constructor(e,t,n){this.current=e,this.next=t,this.dispose=n}"System.Collections.Generic.IEnumerator`1.get_Current"(){return this.current()}"System.Collections.IEnumerator.get_Current"(){return this.current()}"System.Collections.IEnumerator.MoveNext"(){return this.next()}"System.Collections.IEnumerator.Reset"(){Dn()}Dispose(){this.dispose()}};function Nn(e,t,n){return new Mn(e,t,n)}function Pn(e){let t,n,r=!1,i=!1,a,o=()=>{if(i=!0,n!=null){let e=O(n);try{ie(e)}finally{n=void 0}}if(t!=null){let e=O(t);try{ie(e)}finally{t=void 0}}};return Nn(()=>(r?i&&kn():On(),a==null?kn():O(a)),()=>{if(r||=!0,i)return!1;{let r;for(;r==null;){let i,s=t,c=n;if(s!=null){if(c!=null){let e=O(c);if(e[`System.Collections.IEnumerator.MoveNext`]())a=$e(e["System.Collections.Generic.IEnumerator`1.get_Current"]()),r=!0;else try{ie(e)}finally{n=void 0}}else{let e=O(s);e[`System.Collections.IEnumerator.MoveNext`]()?n=(i=e["System.Collections.Generic.IEnumerator`1.get_Current"](),se(i)):(o(),r=!1)}}else t=se(e)}return O(r)}},()=>{i||o()})}function Fn(e,t){return Nn(()=>t["System.Collections.Generic.IEnumerator`1.get_Current"](),()=>t[`System.Collections.IEnumerator.MoveNext`](),()=>{try{ie(t)}finally{e()}})}function In(e,t,n){let r=!1,i,a=$e(e()),o=()=>{if(a!=null){let e=O(a);try{n(e)}finally{a=void 0}}},s=()=>{try{o()}finally{i=void 0}};return Nn(()=>(r||On(),i==null?kn():O(i)),()=>{if(r||=!0,a!=null){let e=O(a),n;try{n=t(e)}catch(e){throw s(),e}return n==null?(s(),!1):(i=n,!0)}return!1},o)}function Ln(e,t){let n,r=t;return Nn(()=>{if(n!=null){let e=O(n)[0];return O(n)[1],e}return On()},()=>(n=e(r),n!=null&&(O(n)[0],r=O(n)[1],!0)),()=>{})}function Rn(e){return jn(e)}function zn(e){return se(Cn(`source`,e))}function k(e){return Rn(()=>se(e()))}function Bn(e){return Rn(()=>Pn(e))}function Vn(e,t){return Rn(()=>Ln(e,t))}function Hn(){return k(()=>[])}function A(e){return k(()=>hn(e))}function j(e){return x(e)?L(e):e instanceof $n?e:hr(e)}function Un(e,t,n){return Rn(()=>In(e,t,n))}function Wn(e,t,n){return Rn(()=>{let r=-1;return In(e,e=>(r=r+1|0,t(r,e)),n)})}function Gn(e,t){return Bn([e,t])}function Kn(e,t,n){let r=zn(n);try{let n=t;for(;r[`System.Collections.IEnumerator.MoveNext`]();)n=e(n,r["System.Collections.Generic.IEnumerator`1.get_Current"]());return n}finally{ie(r)}}function qn(e,t){Kn((t,n)=>{e(n)},void 0,t)}function Jn(e,t){return Un(()=>zn(t),t=>t[`System.Collections.IEnumerator.MoveNext`]()?$e(e(t["System.Collections.Generic.IEnumerator`1.get_Current"]())):void 0,e=>{ie(e)})}function Yn(e,t){return Wn(()=>zn(t),(t,n)=>n[`System.Collections.IEnumerator.MoveNext`]()?$e(e(t,n["System.Collections.Generic.IEnumerator`1.get_Current"]())):void 0,e=>{ie(e)})}function Xn(e,t){return Rn(()=>{let n=zn(t);try{for(let t=1;t<=e;t++)if(!n[`System.Collections.IEnumerator.MoveNext`]())throw new b(`The input sequence has an insufficient number of elements. (Parameter 'source')`);return Fn(()=>{},n)}catch(e){throw ie(n),e}})}function Zn(e,t){return Wn(()=>zn(t),(t,n)=>{if(t<e){if(n[`System.Collections.IEnumerator.MoveNext`]())return $e(n["System.Collections.Generic.IEnumerator`1.get_Current"]());throw new b(`The input sequence has an insufficient number of elements. (Parameter 'source')`)}},e=>{ie(e)})}function Qn(e,t){return k(()=>Bn(Jn(e,t)))}var $n=class e extends Ue{constructor(e,t){super(),this.head=e,this.tail=t}toString(){let e=this,t=`[`,n=!0,r=se(e);try{for(;r[`System.Collections.IEnumerator.MoveNext`]();){let e,i,a,o=r["System.Collections.Generic.IEnumerator`1.get_Current"]();t=(n?t:t+`; `)+(e=o,i=e,typeof i==`string`?(a=i,`"`+a+`"`):Fe(e)),n=!1}}finally{ie(r)}return t+`]`}Equals(t){let n=this;return n===t||t instanceof e&&((e,t)=>{loop:for(;;){let n=e,r=t,i=n.tail,a=r.tail;if(i!=null){if(a!=null){let o=O(i),s=O(a);if(ye(n.head,r.head)){e=o,t=s;continue loop}return!1}return!1}return a==null}})(n,t)}GetHashCode(){return((e,t,n)=>{loop:for(;;){let r=e,i=t,a=n,o=a.tail;if(o!=null){let s=O(o);if(r>18)return i|0;e=r+1,t=(i<<1)+D(a.head)+631*r,n=s;continue loop}return i|0}})(0,0,this)|0}toJSON(){let e=this;return Array.from(e)}CompareTo(t){let n=this;return t instanceof e?((e,t)=>{loop:for(;;){let n=e,r=t,i=n.tail,a=r.tail;if(i!=null){if(a!=null){let o=O(i),s=O(a),c=Te(n.head,r.head)|0;if(c===0){e=o,t=s;continue loop}return c|0}return 1}return a==null?0:-1}})(n,t)|0:1}GetEnumerator(){return tr(this)}[Symbol.iterator](){return ce(se(this))}"System.Collections.IEnumerable.GetEnumerator"(){return se(this)}},er=class{constructor(e){this.xs=e,this.it=this.xs,this.current=C()}"System.Collections.Generic.IEnumerator`1.get_Current"(){return this.current}"System.Collections.IEnumerator.get_Current"(){return this.current}"System.Collections.IEnumerator.MoveNext"(){let e=this,t=e.it.tail;if(t!=null){let n=O(t);return e.current=e.it.head,e.it=n,!0}return!1}"System.Collections.IEnumerator.Reset"(){let e=this;e.it=e.xs,e.current=C()}Dispose(){}};function tr(e){return new er(e)}function nr(){return new $n(C(),void 0)}function rr(e,t){return new $n(e,t)}function ir(e){return e.tail==null}function ar(e){return((e,t)=>{loop:for(;;){let n=e,r=t.tail;if(r!=null){e=n+1,t=O(r);continue loop}return n|0}})(0,e)|0}function or(e){if(e.tail!=null)return e.head;throw new b(tt+` (Parameter 'list')`)}function sr(e){let t=e.tail;if(t!=null)return O(t);throw new b(tt+` (Parameter 'list')`)}function M(){return nr()}function cr(e,t){return rr(e,t)}function N(e){return rr(e,nr())}function P(e){return ir(e)}function F(e){return or(e)}function I(e){return sr(e)}function lr(e){let t=ar(e)|0,n=pn(Array(t),0,t,null);return((e,t)=>{loop:for(;;){let r=e,i=t;if(!ir(i)){bn(n,r,or(i)),e=r+1,t=sr(i);continue loop}break}})(0,e),n}function ur(e,t,n){let r=t,i=n;for(;!ir(i);)r=e(r,F(i)),i=sr(i);return r}function dr(e){return ur((e,t)=>rr(t,e),nr(),e)}function fr(e,t,n){return xn(e,lr(t),n)}function pr(e,t){ur((t,n)=>{e(n)},void 0,t)}function mr(e,t){let n=t;for(let t=e.length-1;t>=0;t--)n=rr(yn(t,e),n);return n}function L(e){return mr(e,nr())}function hr(e){if(x(e))return L(e);if(e instanceof $n)return e;{let t=nr(),n=t,r=se(e);try{for(;r[`System.Collections.IEnumerator.MoveNext`]();){let e,t,i=r["System.Collections.Generic.IEnumerator`1.get_Current"]();n=(e=n,t=new $n(i,void 0),e.tail=t,t)}}finally{ie(r)}let i=n;return i.tail=nr(),sr(t)}}function gr(e,t){return ur((e,t)=>rr(t,e),t,dr(e))}function _r(e,t){let n=nr(),r=n,i=t;for(;!ir(i);){let t=e(or(i));for(;!ir(t);){let e,n;r=(e=r,n=new $n(or(t),void 0),e.tail=n,n),t=sr(t)}i=sr(i)}let a=r;return a.tail=nr(),sr(n)}function vr(e,t){let n=nr(),r=ur((t,n)=>{let r=new $n(e(n),void 0);return t.tail=r,r},n,t);return r.tail=nr(),sr(n)}function yr(e,t){let n=nr(),r=ur((t,n)=>{if(e(n)){let e=new $n(n,void 0);return t.tail=e,e}return t},n,t);return r.tail=nr(),sr(n)}function br(e,t){let n=nr(),r=nr(),i=n,a=ur((t,n)=>{let r,i,a=t[0],o=t[1];return e(n)?[(r=new $n(n,void 0),a.tail=r,r),o]:[a,(i=new $n(n,void 0),o.tail=i,i)]},[i,r],t),o=nr();a[0].tail=o;let s=nr();return a[1].tail=s,[sr(i),sr(r)]}function xr(e,t){let n=nr(),r=ur((t,n)=>{let r=e(n);if(r==null)return t;{let e=new $n(O(r),void 0);return t.tail=e,e}},n,t);return r.tail=nr(),sr(n)}function Sr(e,t){if(t.startsWith(e))return t}function Cr(e,t){if(t.endsWith(e))return t}function wr(e){let t=Zt(`&`,vr(e=>Zt(`=`,[encodeURIComponent(e[0]),encodeURIComponent(e[1])]),e));return t===``?``:`?`+t}function Tr(e){return e===1?e=>{let t,n=Sr(`/`,e);if(n!=null)return`#`+n;{let n=Sr(`#/`,e);if(n!=null)return n;{let n=Sr(`#`,e);return n==null?`#/`+e:(t=n,`#/`+tn(t,1,t.length-1))}}}:e=>{let t,n=Sr(`/`,e);return n==null?`/`+e:(t=n,t)}}function Er(e,t){return Tr(t)(Zt(`/`,vr(e=>e.indexOf(`?`)>=0||e.startsWith(`#`)||e.startsWith(`/`)?e:encodeURIComponent(e),e)))}function Dr(e){let t=dr(e);if(!P(t))return P(I(t))?[M(),F(t)]:[dr(I(t)),F(t)]}function Or(e,t,n){t===1?history.pushState(void 0,``,Er(e,n)):history.replaceState(void 0,``,Er(e,n));let r=document.createEvent(`CustomEvent`);r.initEvent(`CUSTOM_NAVIGATION_EVENT`,!0,!0),window.dispatchEvent(r)}function kr(e,t){return _r(e=>{if(Yt(e))return M();{let t=en(e,`#`);if(t===`?`)return M();if(Sr(`?`,t)!=null)return N(t);{let e=t.split(`?`);if(!vn((e,t)=>e===t,e,C())&&e.length===1){let t=yn(0,e);return N(decodeURIComponent(t))}if(!vn((e,t)=>e===t,e,C())&&e.length===2){if(yn(1,e)===``){let t=yn(0,e);return N(decodeURIComponent(t))}{let t=yn(0,e),n=yn(1,e);return L([decodeURIComponent(t),`?`+n])}}return M()}}},L($t(Sr(`#`,e)==null?t===1?Cr(`#`,e)==null&&Cr(`#/`,e)==null?e:``:e:tn(e,1,e.length-1),[`/`],void 0,0)))}function Ar(e,t,n){return t(kr(e===2?window.location.pathname+window.location.search:window.location.hash,e))}var jr=(0,_.memo)(e=>{let t=(0,_.useCallback)(t=>{let n=et(e.onUrlChanged,e=>{});Ar(et(e.hashMode,1),n,t)});return(0,_.useEffect)(()=>(()=>{let e;return window.navigator.userAgent.indexOf(`Trident`)>=0||window.navigator.userAgent.indexOf(`MSIE`)>=0?window.addEventListener(`hashchange`,t):window.addEventListener(`popstate`,t),window.addEventListener(`CUSTOM_NAVIGATION_EVENT`,t),e={Dispose(){window.navigator.userAgent.indexOf(`Trident`)>=0||window.navigator.userAgent.indexOf(`MSIE`)>=0?window.removeEventListener(`hashchange`,t):window.removeEventListener(`popstate`,t),window.removeEventListener(`CUSTOM_NAVIGATION_EVENT`,t)}},()=>{ie(e)}})(),[]),(0,_.useEffect)(()=>{let e=document.createEvent(`CustomEvent`);e.initEvent(`CUSTOM_NAVIGATION_EVENT`,!0,!0),window.dispatchEvent(e)},[]),e.application??C()});function Mr(e,t){console.error(e,t)}function Nr(e,t,n){pr(n=>{try{n(t)}catch(t){e(t)}},n)}function Pr(){return M()}function Fr(e){return N(e)}var R=class e extends Le{constructor(e,t){super(),this.tag=e,this.fields=t}cases(){return`Install.Use.Themes.Colors.Accordion.Alert.Aura.Avatar.Badge.Breadcrumbs.Button.Card.Carousel.ChatBubble.Collapse.Countdown.Diff.Divider.Dock.Drawer.Dropdown.Fab.Fieldset.Filter.Footer.Hero.Hover3D.HoverGallery.Join.Indicator.Kbd.Label.Link.List.Loading.Mask.Menu.Megamenu.Modal.Navbar.Otp.Pagination.Progress.RadialProgress.Skeleton.Stack.Stat.Status.Steps.Swap.Tab.Table.TextRotate.ThemeController.Timeline.Toast.Tooltip.Validator.FileInput.FormCheckbox.FormInput.FormRadio.FormRange.FormSelect.FormTextarea.FormToggle.MockupBrowser.MockupCode.MockupPhone.MockupWindow.Rating`.split(`.`)}static Install=new e(0,[]);static Use=new e(1,[]);static Themes=new e(2,[]);static Colors=new e(3,[]);static Accordion=new e(4,[]);static Alert=new e(5,[]);static Aura=new e(6,[]);static Avatar=new e(7,[]);static Badge=new e(8,[]);static Breadcrumbs=new e(9,[]);static Button=new e(10,[]);static Card=new e(11,[]);static Carousel=new e(12,[]);static ChatBubble=new e(13,[]);static Collapse=new e(14,[]);static Countdown=new e(15,[]);static Diff=new e(16,[]);static Divider=new e(17,[]);static Dock=new e(18,[]);static Drawer=new e(19,[]);static Dropdown=new e(20,[]);static Fab=new e(21,[]);static Fieldset=new e(22,[]);static Filter=new e(23,[]);static Footer=new e(24,[]);static Hero=new e(25,[]);static Hover3D=new e(26,[]);static HoverGallery=new e(27,[]);static Join=new e(28,[]);static Indicator=new e(29,[]);static Kbd=new e(30,[]);static Label=new e(31,[]);static Link=new e(32,[]);static List=new e(33,[]);static Loading=new e(34,[]);static Mask=new e(35,[]);static Menu=new e(36,[]);static Megamenu=new e(37,[]);static Modal=new e(38,[]);static Navbar=new e(39,[]);static Otp=new e(40,[]);static Pagination=new e(41,[]);static Progress=new e(42,[]);static RadialProgress=new e(43,[]);static Skeleton=new e(44,[]);static Stack=new e(45,[]);static Stat=new e(46,[]);static Status=new e(47,[]);static Steps=new e(48,[]);static Swap=new e(49,[]);static Tab=new e(50,[]);static Table=new e(51,[]);static TextRotate=new e(52,[]);static ThemeController=new e(53,[]);static Timeline=new e(54,[]);static Toast=new e(55,[]);static Tooltip=new e(56,[]);static Validator=new e(57,[]);static FileInput=new e(58,[]);static FormCheckbox=new e(59,[]);static FormInput=new e(60,[]);static FormRadio=new e(61,[]);static FormRange=new e(62,[]);static FormSelect=new e(63,[]);static FormTextarea=new e(64,[]);static FormToggle=new e(65,[]);static MockupBrowser=new e(66,[]);static MockupCode=new e(67,[]);static MockupPhone=new e(68,[]);static MockupWindow=new e(69,[]);static Rating=new e(70,[])},Ir=R.Install;function Lr(e){let t;if(P(e))t=70;else switch(F(e)){case`use`:t=P(I(e))?0:71;break;case`themes`:t=P(I(e))?1:71;break;case`colors`:t=P(I(e))?2:71;break;case`alert`:t=P(I(e))?3:71;break;case`aura`:t=P(I(e))?4:71;break;case`accordion`:t=P(I(e))?5:71;break;case`avatar`:t=P(I(e))?6:71;break;case`badge`:t=P(I(e))?7:71;break;case`breadcrumbs`:t=P(I(e))?8:71;break;case`button`:t=P(I(e))?9:71;break;case`card`:t=P(I(e))?10:71;break;case`carousel`:t=P(I(e))?11:71;break;case`chatbubble`:t=P(I(e))?12:71;break;case`collapse`:t=P(I(e))?13:71;break;case`countdown`:t=P(I(e))?14:71;break;case`diff`:t=P(I(e))?15:71;break;case`divider`:t=P(I(e))?16:71;break;case`dock`:t=P(I(e))?17:71;break;case`drawer`:t=P(I(e))?18:71;break;case`dropdown`:t=P(I(e))?19:71;break;case`fab`:t=P(I(e))?20:71;break;case`fieldset`:t=P(I(e))?21:71;break;case`filter`:t=P(I(e))?22:71;break;case`footer`:t=P(I(e))?23:71;break;case`hero`:t=P(I(e))?24:71;break;case`hover3d`:t=P(I(e))?25:71;break;case`hovergallery`:t=P(I(e))?26:71;break;case`indicator`:t=P(I(e))?27:71;break;case`join`:t=P(I(e))?28:71;break;case`kbd`:t=P(I(e))?29:71;break;case`label`:t=P(I(e))?30:71;break;case`link`:t=P(I(e))?31:71;break;case`list`:t=P(I(e))?32:71;break;case`loading`:t=P(I(e))?33:71;break;case`mask`:t=P(I(e))?34:71;break;case`menu`:t=P(I(e))?35:71;break;case`megamenu`:t=P(I(e))?36:71;break;case`modal`:t=P(I(e))?37:71;break;case`navbar`:t=P(I(e))?38:71;break;case`otp`:t=P(I(e))?39:71;break;case`pagination`:t=P(I(e))?40:71;break;case`progress`:t=P(I(e))?41:71;break;case`radialprogress`:t=P(I(e))?42:71;break;case`skeleton`:t=P(I(e))?43:71;break;case`stack`:t=P(I(e))?44:71;break;case`stat`:t=P(I(e))?45:71;break;case`status`:t=P(I(e))?46:71;break;case`steps`:t=P(I(e))?47:71;break;case`swap`:t=P(I(e))?48:71;break;case`tab`:t=P(I(e))?49:71;break;case`table`:t=P(I(e))?50:71;break;case`textrotate`:t=P(I(e))?51:71;break;case`themecontroller`:t=P(I(e))?52:71;break;case`timeline`:t=P(I(e))?53:71;break;case`toast`:t=P(I(e))?54:71;break;case`tooltip`:t=P(I(e))?55:71;break;case`validator`:t=P(I(e))?56:71;break;case`fileinput`:t=P(I(e))?57:71;break;case`formcheckbox`:t=P(I(e))?58:71;break;case`forminput`:t=P(I(e))?59:71;break;case`formradio`:t=P(I(e))?60:71;break;case`formrange`:t=P(I(e))?61:71;break;case`formselect`:t=P(I(e))?62:71;break;case`formtextarea`:t=P(I(e))?63:71;break;case`formtoggle`:t=P(I(e))?64:71;break;case`mockupbrowser`:t=P(I(e))?65:71;break;case`mockupcode`:t=P(I(e))?66:71;break;case`mockupphone`:t=P(I(e))?67:71;break;case`mockupwindow`:t=P(I(e))?68:71;break;case`rating`:t=P(I(e))?69:71;break;default:t=71}switch(t){case 0:return R.Use;case 1:return R.Themes;case 2:return R.Colors;case 3:return R.Alert;case 4:return R.Aura;case 5:return R.Accordion;case 6:return R.Avatar;case 7:return R.Badge;case 8:return R.Breadcrumbs;case 9:return R.Button;case 10:return R.Card;case 11:return R.Carousel;case 12:return R.ChatBubble;case 13:return R.Collapse;case 14:return R.Countdown;case 15:return R.Diff;case 16:return R.Divider;case 17:return R.Dock;case 18:return R.Drawer;case 19:return R.Dropdown;case 20:return R.Fab;case 21:return R.Fieldset;case 22:return R.Filter;case 23:return R.Footer;case 24:return R.Hero;case 25:return R.Hover3D;case 26:return R.HoverGallery;case 27:return R.Indicator;case 28:return R.Join;case 29:return R.Kbd;case 30:return R.Label;case 31:return R.Link;case 32:return R.List;case 33:return R.Loading;case 34:return R.Mask;case 35:return R.Menu;case 36:return R.Megamenu;case 37:return R.Modal;case 38:return R.Navbar;case 39:return R.Otp;case 40:return R.Pagination;case 41:return R.Progress;case 42:return R.RadialProgress;case 43:return R.Skeleton;case 44:return R.Stack;case 45:return R.Stat;case 46:return R.Status;case 47:return R.Steps;case 48:return R.Swap;case 49:return R.Tab;case 50:return R.Table;case 51:return R.TextRotate;case 52:return R.ThemeController;case 53:return R.Timeline;case 54:return R.Toast;case 55:return R.Tooltip;case 56:return R.Validator;case 57:return R.FileInput;case 58:return R.FormCheckbox;case 59:return R.FormInput;case 60:return R.FormRadio;case 61:return R.FormRange;case 62:return R.FormSelect;case 63:return R.FormTextarea;case 64:return R.FormToggle;case 65:return R.MockupBrowser;case 66:return R.MockupCode;case 67:return R.MockupPhone;case 68:return R.MockupWindow;case 69:return R.Rating;case 70:return R.Install;default:return Ir}}function z(e){return[e,M()]}function Rr(e){switch(e.tag){case 1:return z(N(`use`));case 2:return z(N(`themes`));case 3:return z(N(`colors`));case 4:return z(N(`accordion`));case 5:return z(N(`alert`));case 6:return z(N(`aura`));case 7:return z(N(`avatar`));case 8:return z(N(`badge`));case 9:return z(N(`breadcrumbs`));case 10:return z(N(`button`));case 11:return z(N(`card`));case 12:return z(N(`carousel`));case 14:return z(N(`collapse`));case 13:return z(N(`chatbubble`));case 15:return z(N(`countdown`));case 16:return z(N(`diff`));case 17:return z(N(`divider`));case 18:return z(N(`dock`));case 19:return z(N(`drawer`));case 20:return z(N(`dropdown`));case 21:return z(N(`fab`));case 22:return z(N(`fieldset`));case 23:return z(N(`filter`));case 24:return z(N(`footer`));case 25:return z(N(`hero`));case 26:return z(N(`hover3d`));case 27:return z(N(`hovergallery`));case 29:return z(N(`indicator`));case 28:return z(N(`join`));case 30:return z(N(`kbd`));case 31:return z(N(`label`));case 32:return z(N(`link`));case 33:return z(N(`list`));case 34:return z(N(`loading`));case 35:return z(N(`mask`));case 36:return z(N(`menu`));case 37:return z(N(`megamenu`));case 38:return z(N(`modal`));case 39:return z(N(`navbar`));case 40:return z(N(`otp`));case 41:return z(N(`pagination`));case 42:return z(N(`progress`));case 43:return z(N(`radialprogress`));case 44:return z(N(`skeleton`));case 45:return z(N(`stack`));case 46:return z(N(`stat`));case 47:return z(N(`status`));case 48:return z(N(`steps`));case 49:return z(N(`swap`));case 50:return z(N(`tab`));case 51:return z(N(`table`));case 52:return z(N(`textrotate`));case 53:return z(N(`themecontroller`));case 54:return z(N(`timeline`));case 55:return z(N(`toast`));case 56:return z(N(`tooltip`));case 57:return z(N(`validator`));case 58:return z(N(`fileinput`));case 59:return z(N(`formcheckbox`));case 60:return z(N(`forminput`));case 61:return z(N(`formradio`));case 62:return z(N(`formrange`));case 63:return z(N(`formselect`));case 64:return z(N(`formtextarea`));case 65:return z(N(`formtoggle`));case 66:return z(N(`mockupbrowser`));case 67:return z(N(`mockupcode`));case 68:return z(N(`mockupphone`));case 69:return z(N(`mockupwindow`));case 70:return z(N(`rating`));default:return z(M())}}function zr(e){e.preventDefault(),Or(N(e.currentTarget.attributes.href.value),1,1)}function Br(e){let t=Rr(e);return Fr(e=>{let n,r=t[1],i,a=Dr(t[0]);i=a==null?void 0:$e((n=a,Or(gr(n[0],N(n[1]+wr(r))),1,1))),i==null?Or(N(wr(r)),1,1):O(i)})}function Vr(e,t){let n=Array.from(t);for(let t=0;t<n.length;t++)if(n[t][0]===e){let e=n[t];return n[t]=n[n.length-1],n.pop(),[n,e]}return[n,null]}function B(e,t){let n=Vr(`children`,t);return n[1]==null?(0,_.createElement)(e,Ee(n[0])):(0,_.createElement)(e,Ee(n[0]),...n[1][1])}function Hr(e){return ur((e,t)=>{let n=e[0],r=e[1],i=t;return i[0]===`className`?[cr(Fe(i[1]),n),r]:[n,cr(t,r)]},[M(),M()],dr(e))}function V(e,t){let n=Hr(t);return cr([`className`,Zt(` `,cr(e,n[0]))],n[1])}function Ur(e){return B(`div`,V(`status`,e))}function H(e,t){let n=br(e=>e[0]!==`children`,t),r,i,a,o;switch(P(n[1])?(r=1,o=n[0]):F(n[1])[0]===`children`&&P(I(n[1]))?(r=0,i=F(n[1])[1],a=n[0]):(r=1,o=n[0]),r){case 0:return(0,_.createElement)(e,Ee(a),...i);default:return(0,_.createElement)(e,Ee(o))}}function Wr(e,t){return[`className`,Zt(` `,xr(e=>{let t=e;if(t[0]===`className`)return Fe(t[1])},L([e,t])))]}var Gr=class{constructor(e){this.k=e}};function Kr(e){return new Gr(e)}function U(e){return e.k}var W=class extends Gr{constructor(e,t,n,r){super(e),this.left=t,this.right=n,this.h=r|0}};function qr(e,t,n,r){return new W(e,t,n,r)}function Jr(e){return e.left}function G(e){return e.right}function Yr(e){return e.h|0}function Xr(e,t){SetTreeModule_countAux:for(;;){let n=e,r=t;if(n!=null){let i=O(n);if(i instanceof W){let n=i;e=Jr(n),t=Xr(G(n),r+1);continue SetTreeModule_countAux}return r+1|0}return r|0}}function Zr(e){return Xr(e,0)|0}function Qr(e,t,n){let r,i,a,o=e;if(o!=null){let e=O(o);a=e instanceof W?(r=e,Yr(r)):1}else a=0;let s,c=n;if(c!=null){let e=O(c);s=e instanceof W?(i=e,Yr(i)):1}else s=0;let l=(a<s?s:a)|0;return l===0?Kr(t):qr(t,e,n,l+1)}function $r(e,t,n){let r,i,a,o,s,c,l,u,d,f=e;if(f!=null){let e=O(f);d=e instanceof W?(r=e,Yr(r)):1}else d=0;let p,m=n;if(m!=null){let e=O(m);p=e instanceof W?(i=e,Yr(i)):1}else p=0;if(p>d+2){let r=O(n);if(r instanceof W){let n=r;if(a=Jr(n),(a==null?0:(o=O(a),o instanceof W?(s=o,Yr(s)):1))>d+1){let r=O(Jr(n));if(r instanceof W){let i=r;return Qr(Qr(e,t,Jr(i)),U(i),Qr(G(i),U(n),G(n)))}throw new b(`internal error: Set.rebalance`)}return Qr(Qr(e,t,Jr(n)),U(n),G(n))}throw new b(`internal error: Set.rebalance`)}if(d>p+2){let r=O(e);if(r instanceof W){let e=r;if(c=G(e),(c==null?0:(l=O(c),l instanceof W?(u=l,Yr(u)):1))>p+1){let r=O(G(e));if(r instanceof W){let i=r;return Qr(Qr(Jr(e),U(e),Jr(i)),U(i),Qr(G(i),t,n))}throw new b(`internal error: Set.rebalance`)}return Qr(Jr(e),U(e),Qr(G(e),t,n))}throw new b(`internal error: Set.rebalance`)}return Qr(e,t,n)}function ei(e,t,n){if(n!=null){let r=O(n),i=e.Compare(t,U(r))|0;if(r instanceof W){let a=r;return i<0?$r(ei(e,t,Jr(a)),U(a),G(a)):i===0?n:$r(Jr(a),U(a),ei(e,t,G(a)))}{let i=e.Compare(t,U(r))|0;return i<0?qr(t,void 0,n,2):i===0?n:qr(t,n,void 0,2)}}return Kr(t)}function ti(e,t,n){SetTreeModule_mem:for(;;){let r=e,i=t,a=n;if(a!=null){let o=O(a),s=r.Compare(i,U(o))|0;if(o instanceof W){let a=o;if(s<0){e=r,t=i,n=Jr(a);continue SetTreeModule_mem}if(s===0)return!0;e=r,t=i,n=G(a);continue SetTreeModule_mem}return s===0}return!1}}function ni(e,t){SetTreeModule_iter:for(;;){let n=e,r=t;if(r!=null){let i=O(r);if(i instanceof W){let r=i;ni(n,Jr(r)),n(U(r)),e=n,t=G(r);continue SetTreeModule_iter}n(U(i))}break}}var ri=class extends Ue{constructor(e,t){super(),this.stack=e,this.started=t}};function ii(e){SetTreeModule_collapseLHS:for(;;){let t=e;if(P(t))return M();{let n=F(t),r=I(t);if(n!=null){let i=O(n);if(i instanceof W){let t=i;e=mr([Jr(t),Kr(U(t)),G(t)],r);continue SetTreeModule_collapseLHS}return t}e=r;continue SetTreeModule_collapseLHS}}}function ai(e){return new ri(ii(N(e)),!1)}function oi(){throw new b(`Enumeration not started`)}function si(){throw new b(`Enumeration already started`)}function ci(e){if(e.started){let t=e.stack;if(P(t))return si();if(F(t)!=null)return U(O(F(t)));throw new b(`Please report error: Set iterator, unexpected stack for current`)}return oi()}function li(e){if(e.started){let t=e.stack;if(P(t))return!1;if(F(t)!=null){if(O(F(t))instanceof W)throw new b(`Please report error: Set iterator, unexpected stack for moveNext`);return e.stack=ii(I(t)),!P(e.stack)}throw new b(`Please report error: Set iterator, unexpected stack for moveNext`)}return e.started=!0,!P(e.stack)}function ui(e){let t=ai(e);return{"System.Collections.Generic.IEnumerator`1.get_Current"(){return ci(t)},"System.Collections.IEnumerator.get_Current"(){return ci(t)},"System.Collections.IEnumerator.MoveNext"(){return li(t)},"System.Collections.IEnumerator.Reset"(){t=ai(e)},Dispose(){}}}function di(e,t,n){SetTreeModule_compareStacks:for(;;){let r=e,i=t,a=n;if(!P(i)){if(P(a))return 1;if(F(a)!=null){if(F(i)!=null){let o=O(F(i)),s=O(F(a));if(o instanceof W){let c=o;if(Jr(c)==null){if(s instanceof W){let o=s;if(Jr(o)==null){let s=r.Compare(U(c),U(o))|0;if(s!==0)return s|0;e=r,t=cr(G(c),I(i)),n=cr(G(o),I(a));continue SetTreeModule_compareStacks}{let o,s,c,l,u;switch(P(i)||F(i)==null?P(a)||F(a)==null?o=2:(o=1,l=I(a),u=O(F(a))):(o=0,s=I(i),c=O(F(i))),o){case 0:if(c instanceof W){let i=c;e=r,t=mr([Jr(i),qr(U(i),void 0,G(i),0)],s),n=a;continue SetTreeModule_compareStacks}e=r,t=mr([void 0,Kr(U(c))],s),n=a;continue SetTreeModule_compareStacks;case 1:if(u instanceof W){let a=u;e=r,t=i,n=mr([Jr(a),qr(U(a),void 0,G(a),0)],l);continue SetTreeModule_compareStacks}e=r,t=i,n=mr([void 0,Kr(U(u))],l);continue SetTreeModule_compareStacks;default:throw new b(`unexpected state in SetTree.compareStacks`)}}}else{let o=r.Compare(U(c),U(s))|0;if(o!==0)return o|0;e=r,t=cr(G(c),I(i)),n=cr(void 0,I(a));continue SetTreeModule_compareStacks}}else{let o,s,c,l,u;switch(P(i)||F(i)==null?P(a)||F(a)==null?o=2:(o=1,l=I(a),u=O(F(a))):(o=0,s=I(i),c=O(F(i))),o){case 0:if(c instanceof W){let i=c;e=r,t=mr([Jr(i),qr(U(i),void 0,G(i),0)],s),n=a;continue SetTreeModule_compareStacks}e=r,t=mr([void 0,Kr(U(c))],s),n=a;continue SetTreeModule_compareStacks;case 1:if(u instanceof W){let a=u;e=r,t=i,n=mr([Jr(a),qr(U(a),void 0,G(a),0)],l);continue SetTreeModule_compareStacks}e=r,t=i,n=mr([void 0,Kr(U(u))],l);continue SetTreeModule_compareStacks;default:throw new b(`unexpected state in SetTree.compareStacks`)}}}else if(s instanceof W){let c=s;if(Jr(c)==null){let s=r.Compare(U(o),U(c))|0;if(s!==0)return s|0;e=r,t=cr(void 0,I(i)),n=cr(G(c),I(a));continue SetTreeModule_compareStacks}{let o,s,c,l,u;switch(P(i)||F(i)==null?P(a)||F(a)==null?o=2:(o=1,l=I(a),u=O(F(a))):(o=0,s=I(i),c=O(F(i))),o){case 0:if(c instanceof W){let i=c;e=r,t=mr([Jr(i),qr(U(i),void 0,G(i),0)],s),n=a;continue SetTreeModule_compareStacks}e=r,t=mr([void 0,Kr(U(c))],s),n=a;continue SetTreeModule_compareStacks;case 1:if(u instanceof W){let a=u;e=r,t=i,n=mr([Jr(a),qr(U(a),void 0,G(a),0)],l);continue SetTreeModule_compareStacks}e=r,t=i,n=mr([void 0,Kr(U(u))],l);continue SetTreeModule_compareStacks;default:throw new b(`unexpected state in SetTree.compareStacks`)}}}else{let c=r.Compare(U(o),U(s))|0;if(c!==0)return c|0;e=r,t=I(i),n=I(a);continue SetTreeModule_compareStacks}}else{O(F(a));let o,s,c,l,u;switch(P(i)||F(i)==null?P(a)||F(a)==null?o=2:(o=1,l=I(a),u=O(F(a))):(o=0,s=I(i),c=O(F(i))),o){case 0:if(c instanceof W){let i=c;e=r,t=mr([Jr(i),qr(U(i),void 0,G(i),0)],s),n=a;continue SetTreeModule_compareStacks}e=r,t=mr([void 0,Kr(U(c))],s),n=a;continue SetTreeModule_compareStacks;case 1:if(u instanceof W){let a=u;e=r,t=i,n=mr([Jr(a),qr(U(a),void 0,G(a),0)],l);continue SetTreeModule_compareStacks}e=r,t=i,n=mr([void 0,Kr(U(u))],l);continue SetTreeModule_compareStacks;default:throw new b(`unexpected state in SetTree.compareStacks`)}}}else if(F(i)!=null){O(F(i));let o,s,c,l,u;switch(P(i)||F(i)==null?P(a)||F(a)==null?o=2:(o=1,l=I(a),u=O(F(a))):(o=0,s=I(i),c=O(F(i))),o){case 0:if(c instanceof W){let i=c;e=r,t=mr([Jr(i),qr(U(i),void 0,G(i),0)],s),n=a;continue SetTreeModule_compareStacks}e=r,t=mr([void 0,Kr(U(c))],s),n=a;continue SetTreeModule_compareStacks;case 1:if(u instanceof W){let a=u;e=r,t=i,n=mr([Jr(a),qr(U(a),void 0,G(a),0)],l);continue SetTreeModule_compareStacks}e=r,t=i,n=mr([void 0,Kr(U(u))],l);continue SetTreeModule_compareStacks;default:throw new b(`unexpected state in SetTree.compareStacks`)}}else{e=r,t=I(i),n=I(a);continue SetTreeModule_compareStacks}}else if(P(a))return 0;else return-1;break}}function fi(e,t,n){return t==null?n==null?0:-1:n==null?1:di(e,N(t),N(n))|0}function pi(e,t,n){let r=n;ni(e=>{bn(t,r,e),r=r+1|0},e)}function mi(e,t,n){SetTreeModule_mkFromEnumerator:for(;;){let r=e,i=t,a=n;if(a[`System.Collections.IEnumerator.MoveNext`]()){e=r,t=ei(r,a["System.Collections.Generic.IEnumerator`1.get_Current"](),i),n=a;continue SetTreeModule_mkFromEnumerator}return i}}function hi(e,t){return _n((t,n)=>ei(e,n,t),void 0,t)}function gi(e,t){return ur((t,n)=>ei(e,n,t),void 0,t)}function _i(e,t){if(x(t))return hi(e,t);if(t instanceof $n)return gi(e,t);{let n=se(t);try{return mi(e,void 0,n)}finally{ie(n)}}}var vi=class e{constructor(e,t){this.comparer=e,this.tree=t}GetHashCode(){return Ei(this)|0}Equals(t){let n,r=this;return t instanceof e&&(n=t,fi(bi(r),xi(r),xi(n))===0)}toString(){let e=this,t=`set [`,n=!0,r=se(e);try{for(;r[`System.Collections.IEnumerator.MoveNext`]();){let e,i,a,o=r["System.Collections.Generic.IEnumerator`1.get_Current"]();t=(n?t:t+`; `)+(e=o,i=e,typeof i==`string`?(a=i,`"`+a+`"`):Fe(e)),n=!1}}finally{ie(r)}return t+`]`}get[Symbol.toStringTag](){return`FSharpSet`}toJSON(){let e=this;return Array.from(e)}CompareTo(t){let n,r=this;return(t instanceof e?(n=t,fi(bi(r),xi(r),xi(n))):1)|0}"System.Collections.Generic.ICollection`1.Add2B595"(e){throw on(`ReadOnlyCollection`)}"System.Collections.Generic.ICollection`1.Clear"(){throw on(`ReadOnlyCollection`)}"System.Collections.Generic.ICollection`1.Remove2B595"(e){throw on(`ReadOnlyCollection`)}"System.Collections.Generic.ICollection`1.Contains2B595"(e){let t=this;return ti(bi(t),e,xi(t))}"System.Collections.Generic.ICollection`1.CopyToZ3B4C077E"(e,t){pi(xi(this),e,t)}"System.Collections.Generic.ICollection`1.get_IsReadOnly"(){return!0}"System.Collections.Generic.ICollection`1.get_Count"(){return wi(this)|0}"System.Collections.Generic.IReadOnlyCollection`1.get_Count"(){return wi(this)|0}GetEnumerator(){return ui(xi(this))}[Symbol.iterator](){return ce(se(this))}"System.Collections.IEnumerable.GetEnumerator"(){return ui(xi(this))}get size(){return wi(this)|0}add(e){throw new b(`Set cannot be mutated`)}clear(){throw new b(`Set cannot be mutated`)}delete(e){throw new b(`Set cannot be mutated`)}has(e){return Ti(this,e)}keys(){return Jn(e=>e,this)}values(){return Jn(e=>e,this)}entries(){return Jn(e=>[e,e],this)}forEach(e,t){let n=this;qn(t=>{e(t,t,n)},n)}};function yi(e,t){return new vi(e,t)}function bi(e){return e.comparer}function xi(e){return e.tree}function Si(e){return yi(e,void 0)}function Ci(e,t){return yi(bi(e),ei(bi(e),t,xi(e)))}function wi(e){return Zr(xi(e))|0}function Ti(e,t){return ti(bi(e),t,xi(e))}function Ei(e){let t=0,n=se(e);try{for(;n[`System.Collections.IEnumerator.MoveNext`]();){let e=n["System.Collections.Generic.IEnumerator`1.get_Current"]();t=(t<<1)+D(e)+631|0}}finally{ie(n)}return Math.abs(t)|0}function Di(e,t){return Ti(t,e)}function K(e,t){return Ci(t,e)}function Oi(e){return Si(e)}function ki(e,t){return yi(t,_i(t,e))}function Ai(){return M()}function ji(e){return Zt(`/`,e)}function Mi(e,t){let n=new b(`Duplicate SubId`);return e([`Duplicate SubId: `+ji(t),n])}function Ni(e,t,n){try{ie(n)}catch(n){e([`Error stopping subscription: `+ji(t),n])}}function Pi(e,t,n,r){try{return[n,r(t)]}catch(t){e([`Error starting subscription: `+ji(n),t]);return}}function Fi(e,t){pr(t=>{Ni(e,t[0],t[1])},t)}function Ii(e,t,n,r,i,a){return pr(t=>{Mi(e,t)},n),pr(t=>{Ni(e,t[0],t[1])},r),gr(i,xr(n=>Pi(e,t,n[0],n[1]),a))}function Li(){return[M(),Oi({Compare:(e,t)=>Te(e,t)|0}),M()]}function Ri(e,t,n,r,i){return Di(e,r)?[cr(e,n),r,i]:[n,K(e,r),cr([e,t],i)]}function zi(e){return fr((e,t)=>Ri(e[0],e[1],t[0],t[1],t[2]),e,Li())}var Bi=M();function Vi(e,t){let n=ki(vr(e=>e[0],e),{Compare:(e,t)=>Te(e,t)|0}),r=zi(t),i=r[1],a=r[0];if(n.Equals(i))return[a,M(),e,M()];{let t=br(e=>Di(e[0],i),e);return[a,t[1],t[0],yr(e=>!Di(e[0],n),r[2])]}}function Hi(e,t,n,r){let i=Te(e,n)|0;if(i===0)throw new b(`The step of a range cannot be zero`);let a=i>0;return n=>{let i=Te(n,t)|0;return a&&i<=0||!a&&i>=0?[n,r(n,e)]:void 0}}function Ui(e,t,n,r,i){let a=Hi(t,n,r,i);return k(()=>Vn(a,e))}function Wi(e,t,n){return Ui(e,t,n,0,(e,t)=>e+t)}var Gi=class extends Le{constructor(e,t){super(),this.tag=e,this.fields=t}cases(){return[`Writable`,`ReadWritable`]}},Ki=class{constructor(e){this.state=new Gi(0,[pn(Array(fn(e,10)),0,fn(e,10),null),0])}};function qi(e){return new Ki(e)}function Ji(e){let t=e.state;if(t.tag===1){let n=t.fields[1]|0,r=t.fields[2]|0,i=t.fields[0],a=(r+1)%i.length|0;return e.state=a===n?new Gi(0,[i,n]):new Gi(1,[i,n,a]),$e(yn(r,i))}}function Yi(e,t){let n=e.state;if(n.tag===1){let r=n.fields[1]|0,i=n.fields[2]|0,a=n.fields[0];bn(a,r,t);let o=(r+1)%a.length|0;e.state=o===i?new Gi(1,[Xi(e,i,a),a.length,0]):new Gi(1,[a,o,i])}else{let r=n.fields[1]|0,i=n.fields[0];bn(i,r,t),e.state=new Gi(1,[i,(r+1)%i.length|0,r])}}function Xi(e,t,n){return Array.from(k(()=>Gn(Xn(t,n),k(()=>Gn(Zn(t,n),k(()=>Qn(e=>A(C()),Wi(0,1,n.length))))))))}var Zi=class extends Ue{constructor(e,t,n,r,i,a,o){super(),this.init=e,this.update=t,this.subscribe=n,this.view=r,this.setState=i,this.onError=a,this.termination=o}};function Qi(e,t,n){return new Zi(e,t,e=>Ai(),n,ke(e=>{let t=Ae(n)(e);return e=>{t(e)}}),e=>{Mr(e[0],e[1])},[e=>!1,e=>{}])}function $i(e,t){return new Zi(t.init,t.update,t.subscribe,t.view,t.setState,e,t.termination)}function ea(e){return e.onError}function ta(e,t){return new Zi(t.init,t.update,t.subscribe,t.view,e,t.onError,t.termination)}function na(e){return e.init}function ra(e,t,n,r,i,a,o){let s=Ae(e)(o.init),c=Me(t)(Ae(o.update)),l=Me(n)(Ae(o.view)),u=Me(r)(Ae(o.setState));return new Zi(s,ke(c),Ae(i)(o.subscribe),ke(l),ke(u),o.onError,a(o.termination))}function ia(e,t,n){let r,i=n.init(t),a=i[0],o=n.subscribe(a),s=n.termination,c=qi(10),l=!1,u=a,d=Bi,f=!1,p=Ae(e)(e=>{f||(Yi(c,e),l||=(l=!0,m(),!1))}),m=()=>{let e=Ji(c);for(;!f&&e!=null;){let t,r=O(e);try{if(s[0](r))Fi(n.onError,d),s[1](u),f=!0;else{let e=n.update(r,u),i=e[0],a=n.subscribe(i);n.setState(i,p),d=(t=Vi(d,a),Ii(n.onError,p,t[0],t[1],t[2],t[3])),Nr(e=>{n.onError([Wt(Ht(`Error handling the message: %A`))(r),e])},p,e[1]),u=i}}catch(e){n.onError([Wt(Ht(`Unable to process the message: %A`))(r),e])}e=Ji(c)}};l=!0,n.setState(a,p),d=(r=Vi(d,o),Ii(n.onError,p,r[0],r[1],r[2],r[3])),Nr(e=>{n.onError([Wt(Ht(`Error intitializing:`)),e])},p,i[1]),m(),l=!1}function aa(e,t){ia(ke(e=>e),e,t)}function oa(e,t){return e==null?t:$i(e,t)}var sa=class{constructor(e,t,n){this.arg=t,this.dependencies=n;let r=e(),i=[];this.trackedSubscriptionDisposables=[],this.finalDispatch=void 0,this.lastDisposedModel=void 0,this.unmountCleanupAlreadyRan=!1,this.onError=ea(r);let a,o=na(r)(this.arg);a=[[o[0],e=>{let t=this.finalDispatch;t==null?i.push(e):t(e)},!1,i],o[1]],this.state=a[0],this.cmd=a[1],this.subscribe=(e=>{let t=!1;return aa(this.arg,ta((t,n)=>{let r=this.state;this.finalDispatch=n,this.state=[t,r[1],!0,i],t!==r[0]&&e()},ra((e,t)=>{let n=this.unmountCleanupAlreadyRan?e(t):[this.state[0],this.cmd];return this.cmd=Pr(),[n[0],n[1]]},(e,n,r)=>{let i=this.state[0];return t?[i,Pr()]:e(n)(i)},je(e=>e),je(e=>e),(e,t)=>Sa(this,e,t),e=>[n=>{let r=this.state,i=t&&ga(this,r[0]);return e[0](n)?!0:i},t=>{re(t)?xa(this):e[1](t)}],r))),()=>{t=!0,ba(this)}})}};function ca(e,t,n){return new sa(e,t,n)}function la(e){return e.state}function ua(e){return e.subscribe}function da(e){e.unmountCleanupAlreadyRan=!1}function fa(e){e.unmountCleanupAlreadyRan||(e.unmountCleanupAlreadyRan=!0,ba(e),xa(e))}function pa(e,t,n){return!ye(e.arg,t)||!ye(e.dependencies,n)}function ma(e,t,n){e.onError([t,n])}function ha(e,t){if(!Sn(t)){let e=t.fields;return Sn(e)?void 0:e}}function ga(e,t){let n=e=>!!re(e);if(n(t))return!0;{let r=ha(e,t);return r!=null&&r.some(n)}}function _a(e,t){let n=!1,r=t=>{if(re(t)){let r=t;n=!0;try{ie(r)}catch(t){ma(e,`Unable to dispose model state value.`,t)}}};r(t);let i=ha(e,t);if(i!=null){let e=i;for(let t=0;t<=e.length-1;t++)r(yn(t,e))}return n}function va(e,t){gn(t,e.trackedSubscriptionDisposables,{Equals:ye,GetHashCode:e=>D(e)|0})}function ya(e,t){let n=!1,r,i={Dispose(){if(!n){n=!0,r==null||va(e,r);try{ie(t)}catch(t){ma(e,`Unable to dispose subscription.`,t)}}}};return r=i,e.trackedSubscriptionDisposables.push(i),i}function ba(e){if(e.trackedSubscriptionDisposables.length>0){let t=e.trackedSubscriptionDisposables.slice();De(e.trackedSubscriptionDisposables);for(let e=0;e<=t.length-1;e++)ie(yn(e,t))}}function xa(e){let t,n=e.state[0];t=e.lastDisposedModel,(t==null||O(t)!==n||(O(t),!1))&&_a(e,n)&&(e.lastDisposedModel=$e(n))}function Sa(e,t,n){return vr(t=>[t[0],n=>ya(e,t[1](n))],t(n))}function Ca(e,t,n){let r=(0,_.useState)(()=>ca(e,t,n)),i=r[0];pa(i,t,n)&&r[1](ca(e,t,n));let a=(0,_.useSyncExternalStore)(ua(i),()=>la(i),()=>la(i)),o=a[2],s=a[3],c=a[1];return(0,_.useEffect)(()=>(da(i),()=>{fa(i)}),[i]),(0,_.useEffect)(()=>{if(o&&s.length>0){let e=se(s);try{for(;e[`System.Collections.IEnumerator.MoveNext`]();){let t=e["System.Collections.Generic.IEnumerator`1.get_Current"]();setTimeout(()=>{c(t)})}}finally{ie(e)}De(s)}},[o,s]),[a[0],c]}function wa(e){return B(`div`,L([[`className`,`mockup-code`],[`children`,Yn((e,t)=>B(`pre`,j(k(()=>Gn(A([`data-prefix`,ue(e+1)]),k(()=>Gn(t.indexOf(`// `)>=0?A([`className`,`text-warning`]):Hn(),k(()=>A([`children`,[(0,_.createElement)(`code`,C(),t)]])))))))),$t(e,[`
`],void 0,0))]]))}function q(e,t,n){return B(`div`,L([[`className`,`mb-10`],[`children`,[B(`div`,L([[`className`,`description`],[`children`,[e]]])),B(`div`,L([[`className`,`flex flex-col md:flex-row w-full`],[`children`,[B(`div`,L([[`className`,`grid flex-1 h-full`],[`children`,[wa(t)]]])),B(`div`,V(`divider`,L([[`children`,N(`👉`)],[`className`,`text-neutral`],[`className`,`after:bg-opacity-30 before:bg-opacity-30 md:divider-horizontal`]]))),B(`div`,L([[`className`,`grid flex-1 min-h-[10rem]`],[`children`,[n]]]))]]]))]]]))}function Ta(){let e=[B(`div`,L([[`className`,`description`],[`children`,[`After installation just open proper namespace:`]]])),B(`div`,L([[`className`,`max-w-xl`],[`children`,[wa(`open Feliz.DaisyUI`)]]])),B(`div`,L([[`className`,`description`],[`children`,[`Now you can start using library. Everything important starts with `,B(`code`,L([[`className`,`code`],[`children`,N(`Daisy.*`)]])),` module.`]]])),B(`div`,L([[`className`,`max-w-xl`],[`children`,[wa(`Daisy.button.button [\r
    button.primary\r
    prop.text "This is button"\r
]`)]]])),B(`div`,L([[`className`,`description`],[`children`,[`For applying helpers to non-daisy elements, you need to use custom operator `,B(`code`,L([[`className`,`code`],[`children`,N(`++`)]])),` from `,B(`code`,L([[`className`,`code`],[`children`,N(`Feliz.DaisyUI.Operators`)]])),` namespace.`]]])),B(`div`,L([[`className`,`max-w-xl`],[`children`,[wa(`open Feliz.DaisyUI.Operators\r
\r
Html.div [\r
    prop.className "my-class"\r
    ++ color.success // note usage of custom operator here\r
]`)]]]))];return(0,_.createElement)(_.Fragment,C(),...e)}var Ea=(()=>{let e,t=B(`div`,L([[`data-theme`,`cupcake`],[`children`,[B(`button`,V(`btn`,L([[`className`,`btn-primary`],[`children`,N(`This is cupcake style button`)]])))]]]));return q(B(`div`,N((e=`Use <code class='code'>theme.YOUR_THEME</code> to apply one of existing themes to any element on a page.`,[`dangerouslySetInnerHTML`,{__html:e}]))),`Html.div [\r
    theme.cupcake // <-- this is the theme\r
    prop.children [\r
        Daisy.button.button [\r
            button.primary\r
            prop.text "This is cupcake style button"\r
        ]\r
    ]\r
]`,t)})(),Da=(()=>{let e,t,n=N(B(`div`,V(`card`,L([[`data-theme`,`cyberpunk`],[`className`,`card-border`],[`children`,[B(`figure`,L([[`className`,`pt-10`],[`children`,[B(`img`,N([`src`,`https://picsum.photos/id/1005/400/250`]))]]])),B(`div`,L([[`className`,`card-body`],[`children`,[B(`h2`,L([[`className`,`card-title`],[`children`,N(`Some title`)]])),(0,_.createElement)(`p`,C(),`What a cool library, isn't it?`),B(`div`,L([[`className`,`card-actions`],[`children`,[B(`button`,V(`btn`,L([[`className`,`btn-primary`],[`children`,N(`Click or something`)]])))]]]))]]]))]]]))));return t=(0,_.createElement)(`div`,C(),...n),q(B(`div`,N((e=`You can use it on any element or any part of page. Yes, even for whole <code class='code'>&lt;body&gt;</code>!`,[`dangerouslySetInnerHTML`,{__html:e}]))),`Daisy.card [\r
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
]`,t)})();function Oa(){return(0,_.createElement)(_.Fragment,C(),Ea,Da)}var ka=(()=>{let e,t=B(`div`,L([[`className`,`flex flex-col space-y-4`],[`children`,[B(`div`,L([[`className`,`text-primary`],[`children`,N(`I am primary!`)]])),B(`div`,L([[`className`,`text-success`],[`children`,N(`I am success!`)]])),B(`div`,L([[`className`,`bg-accent`],[`children`,N(`Background accent`)]])),B(`div`,L([Wr([`className`,`bg-error`],[`className`,`text-success`]),[`children`,N(`Success with error background 🤦`)]])),B(`div`,L([[`className`,`bg-info`],[`className`,`text-info-content`],[`children`,N(`Info content on info`)]])),B(`div`,L([[`className`,`bg-success`],[`className`,`text-success-content`],[`children`,N(`Success content on success`)]])),B(`div`,L([[`className`,`bg-warning`],[`className`,`text-warning-content`],[`children`,N(`Warning content on warning`)]])),B(`div`,L([[`className`,`bg-error`],[`className`,`text-error-content`],[`children`,N(`Error content on error`)]]))]]]));return q((e=L([(0,_.createElement)(`span`,C(),`To select one of predefined `),B(`a`,L([[`className`,`link`],[`children`,N(`colors`)],[`href`,`https://daisyui.com/core/colors`]])),B(`span`,N([`dangerouslySetInnerHTML`,{__html:`, use the <code class='code'>color.YOUR_COLOR</code>`}]))]),(0,_.createElement)(`div`,C(),...e)),`Html.div [\r
    Html.div [ color.textPrimary; prop.text "I am primary!" ]\r
    Html.div [ color.textSuccess; prop.text "I am success!" ]\r
    Html.div [ color.bgAccent; prop.text "Background accent" ]\r
    Html.div [\r
        // Note the usage of custom operator ++\r
        (color.bgError ++ color.textSuccess)
        prop.text "Success with error background 🤦"
    ]
    Html.div [ color.bgInfo; color.textInfoContent; prop.text "Info content on info" ]
    Html.div [ color.bgSuccess; color.textSuccessContent; prop.text "Success content on success" ]
    Html.div [ color.bgWarning; color.textWarningContent; prop.text "Warning content on warning" ]
    Html.div [ color.bgError; color.textErrorContent; prop.text "Error content on error" ]
]`,t)})();function Aa(){return(0,_.createElement)(_.Fragment,C(),ka)}var ja=(()=>{let e;return q(`Accordion is cool and easy to use`,`Html.div [\r
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
]`,(e=L([B(`div`,V(`collapse`,L([[`className`,`bg-base-200`],[`className`,`mb-2`],[`children`,[B(`input`,L([[`type`,`radio`],[`checked`,!0],[`name`,`my-accordion`]])),B(`div`,V(`collapse-title`,L([[`className`,`text-xl`],[`children`,N(`Click to open this one and close others`)]]))),B(`div`,L([[`className`,`collapse-content`],[`children`,[(0,_.createElement)(`p`,C(),`Hello`)]]]))]]]))),B(`div`,V(`collapse`,L([[`className`,`bg-base-200`],[`children`,[B(`input`,L([[`type`,`radio`],[`checked`,!0],[`name`,`my-accordion`]])),B(`div`,V(`collapse-title`,L([[`className`,`text-xl`],[`children`,N(`Click to open this one and close others`)]]))),B(`div`,L([[`className`,`collapse-content`],[`children`,[(0,_.createElement)(`p`,C(),`Hello`)]]]))]]])))]),(0,_.createElement)(`div`,C(),...e)))})();function Ma(){let e,t,n=[B(`div`,L([[`className`,`flex flex-col gap-2`],[`children`,[(e=`Accordion uses the same style as the collapse component but it works with radio inputs. You can control which item to be open by checking/unchecking the hidden radio input.`,B(`div`,L([[`className`,`alert`],[`children`,N(e)]]))),(t=`All radio inputs with the same name work together and only one of them can be open at a time. If you have more than one set of accordion items on a page, use different names for the radio inputs on each set.`,B(`div`,L([[`className`,`alert`],[`children`,N(t)]])))]]])),ja];return(0,_.createElement)(_.Fragment,C(),...n)}var Na=q(`Use of Alert is rather straightforward.`,`Daisy.alert [\r
    alert.info\r
    prop.text "This is info"\r
]`,(()=>{let e=B(`div`,V(`alert`,L([[`className`,`alert-info`],[`children`,N(`This is info`)]])));return(0,_.createElement)(`div`,C(),e)})()),Pa=(()=>{let e,t=B(`div`,V(`alert`,L([[`className`,`alert-success`],[`children`,N(`Wow it works so great!`)]])));return e=(0,_.createElement)(`div`,C(),t),q(C(),`Daisy.alert [\r
    alert.success\r
    prop.text "Wow it works so great!"\r
]`,e)})(),Fa=(()=>{let e,t=B(`div`,V(`alert`,L([[`className`,`alert-error`],[`children`,N(`OMG, something went wrong!`)]])));return e=(0,_.createElement)(`div`,C(),t),q(C(),`Daisy.alert [\r
    alert.error\r
    prop.text "OMG, something went wrong!"\r
]`,e)})(),Ia=(()=>{let e,t=B(`div`,V(`alert`,L([[`className`,`alert-warning`],[`className`,`justify-start`],[`children`,[B(`i`,N([`className`,`fas fa-exclamation-triangle mr-2`])),B(`label`,N([`children`,N(`Warning with cool icon`)]))]]])));return e=(0,_.createElement)(`div`,C(),t),q(C(),`Daisy.alert [\r
    alert.warning\r
    prop.className "justify-start"\r
    prop.children [\r
        Html.i [ prop.className "fas fa-exclamation-triangle mr-2" ]\r
        Html.label [ prop.text "Warning with cool icon" ]\r
    ]\r
]`,e)})();function La(){return(0,_.createElement)(_.Fragment,C(),Na,Pa,Fa,Ia)}var Ra=q(`Aura styles and sizes`,`Html.div [
    prop.className "flex flex-wrap items-center justify-center gap-8"
    prop.children [
        Daisy.aura [
            color.textPrimary
            prop.children [ Daisy.button.button "Primary aura" ]
        ]
        Daisy.aura [
            aura.rainbow
            aura.lg
            prop.children [ Daisy.button.button "Rainbow aura" ]
        ]
        Daisy.aura [
            aura.glow
            color.textSecondary
            prop.children [ Daisy.badge "Glow" ]
        ]
    ]
]`,B(`div`,L([[`className`,`flex flex-wrap items-center justify-center gap-8`],[`children`,[B(`div`,V(`aura`,L([[`className`,`text-primary`],[`children`,[B(`button`,L([[`className`,`btn`],[`children`,N(`Primary aura`)]]))]]]))),B(`div`,V(`aura`,L([[`className`,`aura-rainbow`],[`className`,`aura-lg`],[`children`,[B(`button`,L([[`className`,`btn`],[`children`,N(`Rainbow aura`)]]))]]]))),B(`div`,V(`aura`,L([[`className`,`aura-glow`],[`className`,`text-secondary`],[`children`,[B(`div`,L([[`className`,`badge`],[`children`,N(`Glow`)]]))]]])))]]])));function za(){return(0,_.createElement)(_.Fragment,C(),Ra)}var Ba=(()=>{let e;return q(`Avatars are also quite easy to use!`,`Daisy.avatar [\r
    Html.div [\r
        prop.className "mb-8 w-24 h-24"\r
        prop.children [\r
            Html.img [\r
                prop.src "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"\r
            ]\r
        ]\r
    ]\r
]`,(e=B(`div`,L([[`className`,`avatar`],[`children`,[B(`div`,L([[`className`,`mb-8 w-24 h-24`],[`children`,[B(`img`,N([`src`,`https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp`]))]]]))]]])),(0,_.createElement)(`div`,C(),e)))})(),Va=(()=>{let e;return q(`Group all the avatars!`,`Daisy.avatarGroup [\r
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
]`,(e=B(`div`,V(`avatar-group`,L([[`className`,`-space-x-6`],[`children`,[B(`div`,L([[`className`,`avatar`],[`children`,[B(`div`,L([[`className`,`w-12`],[`children`,[B(`img`,N([`src`,`https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp`]))]]]))]]])),B(`div`,L([[`className`,`avatar`],[`children`,[B(`div`,L([[`className`,`w-12`],[`children`,[B(`img`,N([`src`,`https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp`]))]]]))]]])),B(`div`,L([[`className`,`avatar`],[`children`,[B(`div`,L([[`className`,`w-12`],[`children`,[B(`img`,N([`src`,`https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp`]))]]]))]]]))]]]))),(0,_.createElement)(`div`,C(),e)))})();function Ha(){return(0,_.createElement)(_.Fragment,C(),Ba,Va)}var Ua=q(`Just a badge.`,`Daisy.badge [\r
    badge.lg\r
    badge.error\r
    prop.text "Big error badge"\r
]`,(()=>{let e=B(`div`,V(`badge`,L([[`className`,`badge-lg`],[`className`,`badge-error`],[`children`,N(`Big error badge`)]])));return(0,_.createElement)(`div`,C(),e)})()),Wa=q(`Just a badge. Yup. Again.`,`Daisy.badge [\r
    badge.sm\r
    badge.success\r
    prop.text "Success badge"\r
]`,(()=>{let e=B(`div`,V(`badge`,L([[`className`,`badge-sm`],[`className`,`badge-success`],[`children`,N(`Success badge`)]])));return(0,_.createElement)(`div`,C(),e)})()),Ga=(()=>{let e;return q(`And now inside a button!`,`Daisy.button.button [\r
    Html.text "This is button"\r
    Daisy.badge [\r
        badge.sm\r
        badge.success\r
        prop.text "NEW"\r
    ]\r
]`,(e=B(`button`,L([[`className`,`btn`],[`children`,[`This is button`,B(`div`,V(`badge`,L([[`className`,`badge-sm`],[`className`,`badge-success`],[`children`,N(`NEW`)]])))]]])),(0,_.createElement)(`div`,C(),e)))})();function Ka(){return(0,_.createElement)(_.Fragment,C(),Ua,Wa,Ga)}var qa=(()=>{let e,t;return q(`Turn ul/li into beautiful breadcrumbs.`,`Daisy.breadcrumbs [\r
    Html.ul [\r
        Html.li "New project"\r
        Html.li ".NET"\r
        Html.li "F# as always"\r
    ]\r
]`,(e=B(`div`,L([[`className`,`breadcrumbs`],[`children`,[(t=L([(0,_.createElement)(`li`,C(),`New project`),(0,_.createElement)(`li`,C(),`.NET`),(0,_.createElement)(`li`,C(),`F# as always`)]),(0,_.createElement)(`ul`,C(),...t))]]])),(0,_.createElement)(`div`,C(),e)))})();function Ja(){return(0,_.createElement)(_.Fragment,C(),qa)}var Ya=(()=>{let e;return q(`Nicely styled buttons at your service.`,`Daisy.button.button [\r
    button.outline\r
    button.primary\r
    button.lg\r
    prop.text "Do NOT click on me!"\r
]`,(e=B(`button`,V(`btn`,L([[`className`,`btn-outline`],[`className`,`btn-primary`],[`className`,`btn-lg`],[`onClick`,e=>{window.alert($e(`Oh, we have a rebel here!`))}],[`children`,N(`Do NOT click on me!`)]]))),(0,_.createElement)(`div`,C(),e)))})(),Xa=(()=>{let e;return q(`Colors are nice.`,`[ "neutral", button.neutral\r
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
)`,(e=vr(e=>B(`button`,V(`btn`,L([e[1],[`children`,N(e[0])]]))),L([[`neutral`,[`className`,`btn-neutral`]],[`primary`,[`className`,`btn-primary`]],[`secondary`,[`className`,`btn-secondary`]],[`accent`,[`className`,`btn-accent`]],[`ghost`,[`className`,`btn-ghost`]],[`link`,[`className`,`btn-link`]]])),B(`div`,L([[`className`,`flex gap-2`],[`children`,j(k(()=>Gn(A(B(`button`,V(`btn`,N([`children`,N(`Default`)])))),k(()=>e))))]]))))})(),Za=(()=>{let e,t,n=B(`div`,L([[`className`,`p-20 bg-cover card bg-base-200`],[`style`,{backgroundImage:`url('https://picsum.photos/id/314/400/300')`}],[`children`,[B(`button`,V(`btn`,L([[`className`,`glass`],[`className`,`btn-lg`],[`onClick`,e=>{window.alert($e(`One keep clickin' right?`))}],[`children`,N(`Glassy is very classy`)]])))]]]));return t=(0,_.createElement)(`div`,C(),n),q((e=L([`See `,B(`a`,L([[`className`,`link`],[`href`,`https://daisyui.com/components/button`],[`children`,N(`original docs`)]])),` for more combinations.`]),(0,_.createElement)(`div`,C(),...e)),`Html.div [\r
    prop.className "p-20 bg-cover card bg-base-200"\r
    prop.style [ style.backgroundImage "url('https://picsum.photos/id/314/400/300')" ]\r
    prop.children [\r
        Daisy.button.button [\r
            button.glass\r
            button.lg\r
            prop.text "Glassy is very classy"\r
        ]\r
    ]\r
]`,t)})();function Qa(){return(0,_.createElement)(_.Fragment,C(),Ya,Xa,Za)}var $a=(()=>{let e,t,n;return q(`Card with full image`,`Daisy.card [\r
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
]`,(e=B(`div`,V(`card`,L([[`className`,`card-border`],[`className`,`image-full`],[`children`,[(t=N(B(`img`,N([`src`,`https://picsum.photos/id/1005/400/250`]))),(0,_.createElement)(`figure`,C(),...t)),B(`div`,L([[`className`,`card-body`],[`children`,[B(`h2`,L([[`className`,`card-title`],[`children`,N(`Image overlay`)]])),(n=`Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.`,(0,_.createElement)(`p`,C(),n)),B(`div`,L([[`className`,`card-actions`],[`children`,[B(`button`,V(`btn`,L([[`children`,N(`Get started`)],[`className`,`btn-primary`]])))]]]))]]]))]]]))),(0,_.createElement)(`div`,C(),e)))})(),eo=(()=>{let e,t,n;return q(`Card with top image`,`Daisy.card [\r
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
]`,(e=B(`div`,V(`card`,L([[`className`,`card-border`],[`children`,[(t=N(B(`img`,N([`src`,`https://picsum.photos/id/1005/400/250`]))),(0,_.createElement)(`figure`,C(),...t)),B(`div`,L([[`className`,`card-body`],[`children`,[B(`h2`,V(`card-title`,N([`children`,[(0,_.createElement)(`span`,C(),`Top image `),B(`div`,V(`badge`,L([[`className`,`badge-lg`],[`className`,`badge-secondary`],[`children`,N(`NEW`)]])))]]))),(n=`Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.`,(0,_.createElement)(`p`,C(),n)),B(`div`,L([[`className`,`card-actions`],[`children`,[B(`button`,V(`btn`,L([[`children`,N(`More info`)],[`className`,`btn-secondary`]])))]]]))]]]))]]]))),(0,_.createElement)(`div`,C(),e)))})(),to=(()=>{let e,t;return q(`Card with shadow no image`,`Daisy.card [\r
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
]`,(e=B(`div`,V(`card`,L([[`className`,`shadow-lg`],[`children`,[B(`div`,L([[`className`,`card-body`],[`children`,[B(`h2`,L([[`className`,`card-title`],[`children`,N(`Card with shadow no image`)]])),(t=`Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.`,(0,_.createElement)(`p`,C(),t)),B(`div`,L([[`className`,`card-actions`],[`children`,[B(`button`,V(`btn`,L([[`children`,N(`Get Started`)],[`className`,`btn-primary`]]))),B(`button`,V(`btn`,L([[`children`,N(`More info`)],[`className`,`btn-ghost`]])))]]]))]]]))]]]))),(0,_.createElement)(`div`,C(),e)))})(),no=(()=>{let e,t;return q(`Card with border no image`,`Daisy.card [\r
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
]`,(e=B(`div`,V(`card`,L([[`className`,`card-border`],[`children`,[B(`div`,L([[`className`,`card-body`],[`children`,[B(`h2`,L([[`className`,`card-title`],[`children`,N(`Card with border no image`)]])),(t=`Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.`,(0,_.createElement)(`p`,C(),t)),B(`div`,L([[`className`,`card-actions`],[`children`,[B(`button`,V(`btn`,L([[`children`,N(`Get Started`)],[`className`,`btn-primary`]]))),B(`button`,V(`btn`,L([[`children`,N(`More info`)],[`className`,`btn-ghost`]])))]]]))]]]))]]]))),(0,_.createElement)(`div`,C(),e)))})();function ro(){return(0,_.createElement)(_.Fragment,C(),no,to,eo,$a)}var io=(()=>{let e;return q(`Horizontal`,`Daisy.carousel [\r
    Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/500/256/144"]]\r
    Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/501/256/144"]]\r
    Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/502/256/144"]]\r
    Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/503/256/144"]]\r
    Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/505/256/144"]]\r
    Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/506/256/144"]]\r
]`,(e=B(`div`,L([[`className`,`carousel`],[`children`,[B(`div`,L([[`className`,`carousel-item`],[`children`,[B(`img`,N([`src`,`https://picsum.photos/id/500/256/144`]))]]])),B(`div`,L([[`className`,`carousel-item`],[`children`,[B(`img`,N([`src`,`https://picsum.photos/id/501/256/144`]))]]])),B(`div`,L([[`className`,`carousel-item`],[`children`,[B(`img`,N([`src`,`https://picsum.photos/id/502/256/144`]))]]])),B(`div`,L([[`className`,`carousel-item`],[`children`,[B(`img`,N([`src`,`https://picsum.photos/id/503/256/144`]))]]])),B(`div`,L([[`className`,`carousel-item`],[`children`,[B(`img`,N([`src`,`https://picsum.photos/id/505/256/144`]))]]])),B(`div`,L([[`className`,`carousel-item`],[`children`,[B(`img`,N([`src`,`https://picsum.photos/id/506/256/144`]))]]]))]]])),(0,_.createElement)(`div`,C(),e)))})(),J=(()=>{let e;return q(`Vertical`,`Daisy.carousel [\r
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
]`,(e=B(`div`,V(`carousel`,L([[`className`,Zt(` `,[`w-64`,`h-36`])],[`className`,`carousel-vertical`],[`children`,[B(`div`,L([[`className`,`carousel-item`],[`children`,[B(`img`,N([`src`,`https://picsum.photos/id/500/256/144`]))]]])),B(`div`,L([[`className`,`carousel-item`],[`children`,[B(`img`,N([`src`,`https://picsum.photos/id/501/256/144`]))]]])),B(`div`,L([[`className`,`carousel-item`],[`children`,[B(`img`,N([`src`,`https://picsum.photos/id/502/256/144`]))]]])),B(`div`,L([[`className`,`carousel-item`],[`children`,[B(`img`,N([`src`,`https://picsum.photos/id/503/256/144`]))]]])),B(`div`,L([[`className`,`carousel-item`],[`children`,[B(`img`,N([`src`,`https://picsum.photos/id/505/256/144`]))]]])),B(`div`,L([[`className`,`carousel-item`],[`children`,[B(`img`,N([`src`,`https://picsum.photos/id/506/256/144`]))]]]))]]]))),(0,_.createElement)(`div`,C(),e)))})();function ao(){return(0,_.createElement)(_.Fragment,C(),io,J)}var oo=(()=>{let e;return q(`With start and end`,`Html.div [\r
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
]`,(e=L([B(`div`,V(`chat`,L([[`className`,`chat-start`],[`children`,[B(`div`,L([[`className`,`chat-bubble`],[`children`,N(`Is there anything better than Fable & F#?`)]]))]]]))),B(`div`,V(`chat`,L([[`className`,`chat-end`],[`children`,[B(`div`,L([[`className`,`chat-bubble`],[`children`,N(`No.`)]]))]]])))]),(0,_.createElement)(`div`,C(),...e)))})(),so=(()=>{let e;return q(`With images`,`Html.div [\r
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
]`,(e=L([B(`div`,V(`chat`,L([[`className`,`chat-start`],[`children`,[B(`div`,V(`chat-image`,L([[`className`,`avatar`],[`children`,[B(`div`,L([[`className`,`w-10 rounded-full`],[`children`,[B(`img`,N([`src`,`https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp`]))]]]))]]]))),B(`div`,L([[`className`,`chat-bubble`],[`children`,N(`Is anyone here?`)]]))]]]))),B(`div`,V(`chat`,L([[`className`,`chat-start`],[`children`,[B(`div`,V(`chat-image`,L([[`className`,`avatar`],[`children`,[B(`div`,L([[`className`,`w-10 rounded-full`],[`children`,[B(`img`,N([`src`,`https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp`]))]]]))]]]))),B(`div`,L([[`className`,`chat-bubble`],[`children`,N(`Helloooooo!`)]]))]]])))]),(0,_.createElement)(`div`,C(),...e)))})(),co=(()=>{let e;return q(`With images`,`Html.div [\r
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
]`,(e=L([B(`div`,V(`chat`,L([[`className`,`chat-start`],[`children`,[B(`div`,V(`chat-image`,L([[`className`,`avatar`],[`children`,[B(`div`,L([[`className`,`w-10 rounded-full`],[`children`,[B(`img`,N([`src`,`https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp`]))]]]))]]]))),B(`div`,L([[`className`,`chat-header`],[`children`,[`Vincent Noir `,B(`time`,L([[`className`,`text-xs opacity-50`],[`children`,N(`2 hours ago`)]]))]]])),B(`div`,L([[`className`,`chat-bubble`],[`children`,N(`Wind. My only friend!`)]])),B(`div`,V(`chat-footer`,L([[`className`,`opacity-50`],[`children`,N(`Delivered`)]])))]]]))),B(`div`,V(`chat`,L([[`className`,`chat-end`],[`children`,[B(`div`,V(`chat-image`,L([[`className`,`avatar`],[`children`,[B(`div`,L([[`className`,`w-10 rounded-full`],[`children`,[B(`img`,N([`src`,`https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp`]))]]]))]]]))),B(`div`,L([[`className`,`chat-header`],[`children`,[`Wind `,B(`time`,L([[`className`,`text-xs opacity-50`],[`children`,N(`2 hours ago`)]]))]]])),B(`div`,L([[`className`,`chat-bubble`],[`children`,N(`I HATE YOU!`)]])),B(`div`,V(`chat-footer`,L([[`className`,`opacity-50`],[`children`,N(`Delivered`)]])))]]])))]),(0,_.createElement)(`div`,C(),...e)))})(),lo=(()=>{let e;return q(`With colors`,`let colors = [\r
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
]`,(e=j(k(()=>Qn(e=>A(B(`div`,V(`chat`,L([[`className`,`chat-start`],[`children`,[B(`div`,V(`chat-bubble`,L([e[1],[`children`,N(Xt(`This is `,e[0],` color`))]])))]]])))),[[`primary`,[`className`,`chat-bubble-primary`]],[`secondary`,[`className`,`chat-bubble-secondary`]],[`accent`,[`className`,`chat-bubble-accent`]],[`info`,[`className`,`chat-bubble-info`]],[`success`,[`className`,`chat-bubble-success`]],[`warning`,[`className`,`chat-bubble-warning`]],[`error`,[`className`,`chat-bubble-error`]]]))),(0,_.createElement)(`div`,C(),...e)))})();function uo(){return(0,_.createElement)(_.Fragment,C(),oo,so,co,lo)}var fo=(()=>{let e,t;return q(`Basic`,`Daisy.collapse [\r
    prop.tabIndex 0\r
    prop.children [\r
        Daisy.collapseTitle "I open with focus"\r
        Daisy.collapseContent [Html.p "Collapse content reveals with focus. If you add a checkbox, you can control it using checkbox instead of focus. Or you can force-open/force-close using collapse-open and collapse-close classes. Adding a tabIndex will allow focus."]\r
    ]\r
]`,(e=B(`div`,V(`collapse`,L([[`tabIndex`,0],[`children`,[B(`div`,L([[`className`,`collapse-title`],[`children`,N(`I open with focus`)]])),B(`div`,L([[`className`,`collapse-content`],[`children`,[(t=`Collapse content reveals with focus. If you add a checkbox, you can control it using checkbox instead of focus. Or you can force-open/force-close using collapse-open and collapse-close classes. Adding a tabIndex will allow focus.`,(0,_.createElement)(`p`,C(),t))]]]))]]]))),(0,_.createElement)(`div`,C(),e)))})(),po=(()=>{let e,t;return q(`Arrow`,`Daisy.collapse [\r
    prop.tabIndex 0\r
    collapse.arrow\r
    prop.className "border"\r
    prop.children [\r
        Daisy.collapseTitle "I open with focus"\r
        Daisy.collapseContent [Html.p "Collapse content reveals with focus. If you add a checkbox, you can control it using checkbox instead of focus. Or you can force-open/force-close using collapse-open and collapse-close classes. Adding a tabIndex will allow focus."]\r
    ]\r
]`,(e=B(`div`,V(`collapse`,L([[`tabIndex`,0],[`className`,`collapse-arrow`],[`className`,`border`],[`children`,[B(`div`,L([[`className`,`collapse-title`],[`children`,N(`I open with focus`)]])),B(`div`,L([[`className`,`collapse-content`],[`children`,[(t=`Collapse content reveals with focus. If you add a checkbox, you can control it using checkbox instead of focus. Or you can force-open/force-close using collapse-open and collapse-close classes. Adding a tabIndex will allow focus.`,(0,_.createElement)(`p`,C(),t))]]]))]]]))),(0,_.createElement)(`div`,C(),e)))})(),mo=(()=>{let e,t;return q(`With checkbox`,`Daisy.collapse [\r
    collapse.arrow\r
    prop.className "border"\r
    prop.children [\r
        Html.input [prop.type' "checkbox"]\r
        Daisy.collapseTitle "I open with a checkbox"\r
        Daisy.collapseContent [Html.p "Collapse content reveals with focus. If you add a checkbox, you can control it using checkbox instead of focus. Or you can force-open/force-close using collapse-open and collapse-close classes."]\r
    ]\r
]`,(e=B(`div`,V(`collapse`,L([[`className`,`collapse-plus`],[`className`,`border`],[`children`,[B(`input`,N([`type`,`checkbox`])),B(`div`,L([[`className`,`collapse-title`],[`children`,N(`I open with a checkbox`)]])),B(`div`,L([[`className`,`collapse-content`],[`children`,[(t=`Collapse content reveals with focus. If you add a checkbox, you can control it using checkbox instead of focus. Or you can force-open/force-close using collapse-open and collapse-close classes.`,(0,_.createElement)(`p`,C(),t))]]]))]]]))),(0,_.createElement)(`div`,C(),e)))})();function ho(){return(0,_.createElement)(_.Fragment,C(),fo,po,mo)}var go=class extends Le{constructor(e){super(),this.tag=0,this.fields=[e]}cases(){return[`CountdownChange`]}},_o=class extends Ue{constructor(e){super(),this.Countdown=e|0}};function vo(){return[new _o(60),Pr()]}function yo(e,t){return[new _o(e.fields[0]),Pr()]}function bo(e,t){let n;return q(`Basic`,`Html.div [\r
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
]`,(n=L([B(`span`,L([[`className`,`countdown`],[`children`,[B(`span`,N([`style`,{"--value":e.Countdown}]))]]])),B(`button`,V(`btn`,L([[`className`,`btn-xs`],[`className`,`btn-primary`],[`onClick`,n=>{t(new go(e.Countdown+1))}],[`children`,N(`⬆️ Up`)]]))),B(`button`,V(`btn`,L([[`className`,`btn-xs`],[`className`,`btn-secondary`],[`onClick`,n=>{t(new go(e.Countdown-1))}],[`children`,N(`⬇️ Down`)]])))]),(0,_.createElement)(`div`,C(),...n)))}function xo(){let e=Ca(()=>oa(void 0,Qi(vo,yo,(e,t)=>{})),void 0,[]),t=[bo(e[0],e[1])];return(0,_.createElement)(_.Fragment,C(),...t)}var So=q(`Diff component shows a side-by-side comparison of two items.`,`Daisy.diff [\r
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
]`,B(`div`,V(`diff`,L([[`className`,`aspect-[16/9]`],[`children`,[B(`div`,L([[`className`,`diff-item-1`],[`children`,[B(`img`,N([`src`,`https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp`]))]]])),B(`div`,L([[`className`,`diff-item-2`],[`children`,[B(`img`,N([`src`,`https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp`]))]]])),B(`div`,V(`diff-resizer`,M()))]]])))),Co=q(`Diff text`,`Daisy.diff [\r
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
]`,B(`div`,V(`diff`,L([[`className`,`aspect-[16/9]`],[`children`,[B(`div`,L([[`className`,`diff-item-1`],[`children`,[B(`div`,L([[`className`,`bg-primary text-primary-content text-9xl font-black grid place-content-center`],[`children`,N(`F# rulez!`)]]))]]])),B(`div`,L([[`className`,`diff-item-2`],[`children`,[B(`div`,L([[`className`,`bg-base-200 text-9xl font-black grid place-content-center`],[`children`,N(`F# rulez!`)]]))]]])),B(`div`,V(`diff-resizer`,M()))]]]))));function wo(){return(0,_.createElement)(_.Fragment,C(),So,Co)}var To=q(`Vertical (default)`,`Html.div [\r
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
]`,B(`div`,L([[`className`,`flex flex-col w-full`],[`children`,[B(`div`,L([[`className`,`grid h-20 card bg-base-300 rounded-box place-items-center`],[`children`,N(`content`)]])),B(`div`,L([[`className`,`divider`],[`children`,N(`OR`)]])),B(`div`,L([[`className`,`grid h-20 card bg-base-300 rounded-box place-items-center`],[`children`,N(`content`)]]))]]]))),Eo=(()=>{let e;return q(`Vertical`,`Html.div [\r
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
]`,(e=B(`div`,L([[`className`,`flex flex-row w-full`],[`children`,[B(`div`,L([[`className`,`grid flex-grow h-32 card bg-base-300 rounded-box place-items-center`],[`children`,N(`content`)]])),B(`div`,V(`divider`,L([[`className`,`divider-horizontal`],[`children`,N(`OR`)]]))),B(`div`,L([[`className`,`grid flex-grow h-32 card bg-base-300 rounded-box place-items-center`],[`children`,N(`content`)]]))]]])),(0,_.createElement)(`div`,C(),e)))})();function Do(){return(0,_.createElement)(_.Fragment,C(),To,Eo)}var Oo=q(`Docked navigation bar`,`Daisy.dock [\r
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
]`,B(`div`,V(`dock`,L([[`className`,`dock-xl`],[`children`,[B(`button`,N([`children`,[H(`svg`,L([[`className`,`size-[1.2em]`],[`viewBox`,`0 0 24 24`],[`children`,N(H(`g`,L([[`fill`,`currentColor`],[`strokeLinejoin`,`miter`],[`strokeLinecap`,`butt`],[`children`,L([H(`polyline`,L([[`points`,`3 14 9 14 9 17 15 17 15 14 21 14`],[`strokeMiterlimit`,10],[`strokeWidth`,2]])),H(`rect`,L([[`x`,3],[`y`,3],[`width`,18],[`height`,18],[`rx`,2],[`ry`,2],[`fill`,`none`],[`stroke`,`currentColor`],[`strokeLinecap`,`square`],[`strokeMiterlimit`,10],[`strokeWidth`,2]]))])]])))]])),B(`span`,L([[`className`,`dock-label`],[`children`,N(`Inbox`)]]))]])),B(`button`,L([[`className`,`dock-active`],[`children`,[H(`svg`,L([[`className`,`size-[1.2em]`],[`viewBox`,`0 0 24 24`],[`children`,N(H(`g`,L([[`fill`,`currentColor`],[`strokeLinejoin`,`miter`],[`strokeLinecap`,`butt`],[`children`,L([H(`polyline`,L([[`points`,`3 14 9 14 9 17 15 17 15 14 21 14`],[`strokeMiterlimit`,10],[`strokeWidth`,2]])),H(`rect`,L([[`x`,3],[`y`,3],[`width`,18],[`height`,18],[`rx`,2],[`ry`,2],[`fill`,`none`],[`stroke`,`currentColor`],[`strokeLinecap`,`square`],[`strokeMiterlimit`,10],[`strokeWidth`,2]]))])]])))]])),B(`span`,L([[`className`,`dock-label`],[`children`,N(`Inbox active`)]]))]]]))]]]))));function ko(){return(0,_.createElement)(_.Fragment,C(),Oo)}var Ao=q(`Simple`,`Daisy.drawer [
    prop.className "rounded-lg shadow bg-base-200 h-52"
    prop.children [
        Daisy.drawerToggle [prop.id "my-drawer"]
        Daisy.drawerContent [
            prop.className "flex flex-col items-center justify-center"
            prop.children [
                Daisy.drawerButton [
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
]`,B(`div`,V(`drawer`,L([[`className`,`rounded-lg shadow bg-base-200 h-52`],[`children`,[B(`input`,V(`drawer-toggle`,L([[`type`,`checkbox`],[`id`,`my-drawer`]]))),B(`div`,V(`drawer-content`,L([[`className`,`flex flex-col items-center justify-center`],[`children`,[B(`label`,V(`btn drawer-button`,L([[`className`,`btn-primary`],[`htmlFor`,`my-drawer`],[`children`,N(`Open Menu`)]])))]]]))),B(`div`,V(`drawer-side`,L([[`className`,`absolute h-full`],[`children`,[B(`label`,V(`drawer-overlay`,N([`htmlFor`,`my-drawer`]))),B(`ul`,V(`menu`,L([[`className`,`p-4 h-full overflow-y-auto w-80 bg-base-100 text-base-content`],[`children`,[(0,_.createElement)(`li`,C(),`Menu item 1`),(0,_.createElement)(`li`,C(),`Menu item 2`)]]])))]]])))]]]))));function jo(){return(0,_.createElement)(_.Fragment,C(),Ao)}var Mo=(()=>{let e,t,n;return q(`Simple`,`Daisy.dropdown [\r
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
`,B(`div`,L([[`className`,`dropdown`],[`children`,[B(`button`,V(`btn`,L([[`className`,`btn-primary`],[`children`,N(`Dropdown`)]]))),B(`ul`,V(`dropdown-content`,L([[`className`,`p-2 shadow menu bg-base-100 rounded-box w-52`],[`tabIndex`,0],[`children`,[(e=N(B(`a`,N([`children`,N(`Item 1`)]))),(0,_.createElement)(`li`,C(),...e)),(t=N(B(`a`,N([`children`,N(`Item 2`)]))),(0,_.createElement)(`li`,C(),...t)),(n=N(B(`a`,N([`children`,N(`Item 3`)]))),(0,_.createElement)(`li`,C(),...n))]]])))]]])))})(),No=(()=>{let e,t,n,r;return q(`Hover`,`Daisy.dropdown [\r
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
`,(e=B(`div`,V(`dropdown`,L([[`className`,`dropdown-hover`],[`children`,[B(`button`,V(`btn`,L([[`className`,`btn-primary`],[`children`,N(`Hover`)]]))),B(`ul`,V(`dropdown-content`,L([[`className`,`p-2 shadow menu bg-base-100 rounded-box w-52`],[`tabIndex`,0],[`children`,[(t=N(B(`a`,N([`children`,N(`Item 1`)]))),(0,_.createElement)(`li`,C(),...t)),(n=N(B(`a`,N([`children`,N(`Item 2`)]))),(0,_.createElement)(`li`,C(),...n)),(r=N(B(`a`,N([`children`,N(`Item 3`)]))),(0,_.createElement)(`li`,C(),...r))]]])))]]]))),(0,_.createElement)(`div`,C(),e)))})(),Po=(()=>{let e,t,n;return q(`Opened`,`Daisy.dropdown [\r
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
`,B(`div`,V(`dropdown`,L([[`className`,`dropdown-open`],[`children`,[B(`button`,V(`btn`,L([[`className`,`btn-primary`],[`children`,N(`Opened`)]]))),B(`ul`,V(`dropdown-content`,L([[`className`,`p-2 shadow menu bg-base-100 rounded-box w-52`],[`tabIndex`,0],[`children`,[(e=N(B(`a`,N([`children`,N(`Item 1`)]))),(0,_.createElement)(`li`,C(),...e)),(t=N(B(`a`,N([`children`,N(`Item 2`)]))),(0,_.createElement)(`li`,C(),...t)),(n=N(B(`a`,N([`children`,N(`Item 3`)]))),(0,_.createElement)(`li`,C(),...n))]]])))]]]))))})(),Fo=(()=>{let e;return q(`Directions`,`let dirs = [\r
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
]`,(e=j(k(()=>Qn(e=>{let t,n,r;return A(B(`div`,V(`dropdown`,L([e[0],[`children`,[B(`button`,V(`btn`,L([e[2],[`children`,N(e[1])]]))),B(`ul`,V(`dropdown-content`,L([[`className`,`p-2 shadow menu bg-base-100 rounded-box w-52`],[`tabIndex`,0],[`children`,[(t=N(B(`a`,N([`children`,N(`Item 1`)]))),(0,_.createElement)(`li`,C(),...t)),(n=N(B(`a`,N([`children`,N(`Item 2`)]))),(0,_.createElement)(`li`,C(),...n)),(r=N(B(`a`,N([`children`,N(`Item 3`)]))),(0,_.createElement)(`li`,C(),...r))]]])))]]]))))},[[[`className`,`dropdown-left`],`left`,[`className`,`btn-primary`]],[[`className`,`dropdown-end`],`end`,[`className`,`btn-secondary`]],[[`className`,`dropdown-top`],`top`,[`className`,`btn-accent`]],[[`className`,`dropdown-right`],`right`,[`className`,`btn-success`]]]))),(0,_.createElement)(`div`,C(),...e)))})();function Io(){return(0,_.createElement)(_.Fragment,C(),Mo,No,Po,Fo)}var Lo=q(`Click or focus the main action to reveal the FAB actions`,`Daisy.fab [
    prop.children [
        Daisy.button.button [
            prop.tabIndex 0
            button.circle
            button.primary
            prop.text "+"
        ]
        Daisy.fabClose [
            button.circle
            button.secondary
            prop.text "×"
        ]
        Daisy.button.button [ button.circle; prop.text "A" ]
        Daisy.button.button [ button.circle; prop.text "B" ]
        Daisy.button.button [ button.circle; prop.text "C" ]
    ]
]`,B(`div`,L([[`className`,`relative min-h-72`],[`children`,[B(`div`,V(`fab`,L([[`className`,`absolute`],[`children`,[B(`button`,V(`btn`,L([[`tabIndex`,0],[`className`,`btn-circle`],[`className`,`btn-primary`],[`children`,N(`+`)]]))),B(`button`,V(`btn fab-close`,L([[`className`,`btn-circle`],[`className`,`btn-secondary`],[`children`,N(`×`)]]))),B(`button`,V(`btn`,L([[`className`,`btn-circle`],[`children`,N(`A`)]]))),B(`button`,V(`btn`,L([[`className`,`btn-circle`],[`children`,N(`B`)]]))),B(`button`,V(`btn`,L([[`className`,`btn-circle`],[`children`,N(`C`)]])))]]])))]]]))),Ro=q(`Flower layout with a persistent main action`,`Daisy.fab [
    fab.flower
    prop.children [
        Daisy.button.button [ prop.tabIndex 0; button.circle; button.accent; prop.text "+" ]
        Daisy.fabMainAction [ button.circle; button.primary; prop.text "★" ]
        Daisy.button.button [ button.circle; prop.text "1" ]
        Daisy.button.button [ button.circle; prop.text "2" ]
        Daisy.button.button [ button.circle; prop.text "3" ]
    ]
]`,B(`div`,L([[`className`,`relative min-h-72`],[`children`,[B(`div`,V(`fab`,L([[`className`,`fab-flower`],[`className`,`absolute`],[`children`,[B(`button`,V(`btn`,L([[`tabIndex`,0],[`className`,`btn-circle`],[`className`,`btn-accent`],[`children`,N(`+`)]]))),B(`button`,V(`btn fab-main-action`,L([[`className`,`btn-circle`],[`className`,`btn-primary`],[`children`,N(`★`)]]))),B(`button`,V(`btn`,L([[`className`,`btn-circle`],[`children`,N(`1`)]]))),B(`button`,V(`btn`,L([[`className`,`btn-circle`],[`children`,N(`2`)]]))),B(`button`,V(`btn`,L([[`className`,`btn-circle`],[`children`,N(`3`)]])))]]])))]]])));function zo(){return(0,_.createElement)(_.Fragment,C(),Lo,Ro)}var Bo=(()=>{let e;return q(`With label and legend`,`Daisy.fieldset [\r
    prop.className "bg-base-200 border border-base-300 rounded-box p-4"\r
\r
    prop.children [\r
        Daisy.fieldsetLegend "Page title"\r
        Daisy.input [ prop.placeholder "My awesome page" ]\r
        Daisy.fieldsetLabel "You can edit page title later on from settings"\r
    ]\r
]`,(e=B(`fieldset`,V(`fieldset`,L([[`className`,`bg-base-200 border border-base-300 rounded-box p-4`],[`children`,[B(`legend`,L([[`className`,`fieldset-legend`],[`children`,N(`Page title`)]])),B(`input`,V(`input`,L([[`type`,`text`],[`placeholder`,`My awesome page`]]))),B(`label`,L([[`className`,`fieldset-label`],[`children`,N(`You can edit page title later on from settings`)]]))]]]))),(0,_.createElement)(`div`,C(),e)))})(),Vo=(()=>{let e;return q(`Multiple inputs`,`Daisy.fieldset [\r
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
]`,(e=B(`fieldset`,V(`fieldset`,L([[`className`,`bg-base-200 border border-base-300 rounded-box p-4`],[`children`,[B(`legend`,L([[`className`,`fieldset-legend`],[`children`,N(`Page details`)]])),B(`label`,L([[`className`,`fieldset-label`],[`children`,N(`Title`)]])),B(`input`,V(`input`,L([[`type`,`text`],[`placeholder`,`My awesome page`]]))),B(`label`,L([[`className`,`fieldset-label`],[`children`,N(`Slug`)]])),B(`input`,V(`input`,L([[`type`,`text`],[`placeholder`,`my-awesome-page`]]))),B(`label`,L([[`className`,`fieldset-label`],[`children`,N(`Author`)]])),B(`input`,V(`input`,L([[`type`,`text`],[`placeholder`,`Name`]])))]]]))),(0,_.createElement)(`div`,C(),e)))})(),Ho=(()=>{let e;return q(`With joined items`,`Daisy.fieldset [\r
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
]`,(e=B(`fieldset`,V(`fieldset`,L([[`className`,`bg-base-200 border border-base-300 rounded-box p-4`],[`children`,[B(`legend`,L([[`className`,`fieldset-legend`],[`children`,N(`Settings`)]])),B(`div`,L([[`className`,`join`],[`children`,[B(`input`,V(`input`,L([[`type`,`text`],[`className`,`join-item`],[`placeholder`,`Product name`]]))),B(`button`,V(`btn`,L([[`className`,`join-item`],[`children`,N(`Save`)]])))]]]))]]]))),(0,_.createElement)(`div`,C(),e)))})();function Uo(){return(0,_.createElement)(_.Fragment,C(),Bo,Vo,Ho)}var Wo=q(`As form`,`Daisy.filter.form [\r
    Daisy.button.value [ prop.text "x" ]\r
    Daisy.button.radio [ prop.name "frameworks"; prop.ariaLabel "Svelte" ]\r
    Daisy.button.radio [ prop.name "frameworks"; prop.ariaLabel "Vue" ]\r
    Daisy.button.radio [ prop.name "frameworks"; prop.ariaLabel "React" ]\r
]`,B(`form`,L([[`className`,`filter`],[`children`,[B(`input`,V(`btn`,L([[`type`,`reset`],[`value`,`x`]]))),B(`input`,V(`btn`,L([[`type`,`radio`],[`name`,`frameworks`],[`aria-label`,`Svelte`]]))),B(`input`,V(`btn`,L([[`type`,`radio`],[`name`,`frameworks`],[`aria-label`,`Vue`]]))),B(`input`,V(`btn`,L([[`type`,`radio`],[`name`,`frameworks`],[`aria-label`,`React`]])))]]]))),Go=q(`As div`,`Daisy.filter.div [\r
    Daisy.filterReset [ prop.name "frameworks2" ]\r
    Daisy.button.radio [ prop.name "frameworks2"; prop.ariaLabel "Svelte" ]\r
    Daisy.button.radio [ prop.name "frameworks2"; prop.ariaLabel "Vue" ]\r
    Daisy.button.radio [ prop.name "frameworks2"; prop.ariaLabel "React" ]\r
]`,B(`div`,L([[`className`,`filter`],[`children`,[B(`input`,V(`btn filter-reset`,L([[`type`,`radio`],[`name`,`frameworks2`]]))),B(`input`,V(`btn`,L([[`type`,`radio`],[`name`,`frameworks2`],[`aria-label`,`Svelte`]]))),B(`input`,V(`btn`,L([[`type`,`radio`],[`name`,`frameworks2`],[`aria-label`,`Vue`]]))),B(`input`,V(`btn`,L([[`type`,`radio`],[`name`,`frameworks2`],[`aria-label`,`React`]])))]]])));function Ko(){return(0,_.createElement)(_.Fragment,C(),Wo,Go)}var qo=(()=>{let e,t,n,r;return q(`Simple, horizontal`,`Daisy.footer [\r
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
]`,(e=B(`footer`,V(`footer`,L([[`className`,`footer-horizontal`],[`className`,`p-10 bg-neutral text-neutral-content`],[`children`,[(t=L([B(`span`,L([[`className`,`footer-title`],[`children`,N(`Services`)]])),B(`a`,V(`link`,L([[`className`,`link-hover`],[`children`,N(`Branding`)]]))),B(`a`,V(`link`,L([[`className`,`link-hover`],[`children`,N(`Design`)]]))),B(`a`,V(`link`,L([[`className`,`link-hover`],[`children`,N(`Marketing`)]]))),B(`a`,V(`link`,L([[`className`,`link-hover`],[`children`,N(`Advertisement`)]])))]),(0,_.createElement)(`div`,C(),...t)),(n=L([B(`span`,L([[`className`,`footer-title`],[`children`,N(`Company`)]])),B(`a`,V(`link`,L([[`className`,`link-hover`],[`children`,N(`About us`)]]))),B(`a`,V(`link`,L([[`className`,`link-hover`],[`children`,N(`Contact`)]]))),B(`a`,V(`link`,L([[`className`,`link-hover`],[`children`,N(`Jobs`)]]))),B(`a`,V(`link`,L([[`className`,`link-hover`],[`children`,N(`Press kit`)]])))]),(0,_.createElement)(`div`,C(),...n)),(r=L([B(`span`,L([[`className`,`footer-title`],[`children`,N(`Legal`)]])),B(`a`,V(`link`,L([[`className`,`link-hover`],[`children`,N(`Legal`)]]))),B(`a`,V(`link`,L([[`className`,`link-hover`],[`children`,N(`Terms of use`)]]))),B(`a`,V(`link`,L([[`className`,`link-hover`],[`children`,N(`Privacy policy`)]]))),B(`a`,V(`link`,L([[`className`,`link-hover`],[`children`,N(`Cookie policy`)]])))]),(0,_.createElement)(`div`,C(),...r))]]]))),(0,_.createElement)(`div`,C(),e)))})();function Jo(){return(0,_.createElement)(_.Fragment,C(),qo)}var Yo=(()=>{let e,t;return q(`Advanced`,`Daisy.hero [\r
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
]`,(e=B(`div`,V(`hero`,L([[`className`,`min-h-screen`],[`style`,{backgroundImage:`url('https://picsum.photos/id/1005/1600/1400')`}],[`children`,[B(`div`,N([`className`,`hero-overlay bg-opacity-60`])),B(`div`,V(`hero-content`,L([[`className`,`text-center text-neutral-content`],[`children`,[B(`div`,L([[`className`,`max-w-md`],[`children`,[B(`h1`,L([[`className`,`mb-5 text-5xl font-bold`],[`children`,N(`Hello there`)]])),(t=`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.`,(0,_.createElement)(`p`,C(),t)),B(`button`,V(`btn`,L([[`className`,`btn-primary`],[`children`,N(`Get Started`)]])))]]]))]]])))]]]))),(0,_.createElement)(`div`,C(),e)))})();function Xo(){return(0,_.createElement)(_.Fragment,C(),Yo)}var Zo=j(k(()=>Qn(e=>A(B(`div`,M())),Wi(1,1,8)))),Qo=q(`Move the pointer across the card for a 3D tilt effect`,`Daisy.hover3d [
    prop.children [
        Daisy.card [
            prop.className "relative w-64 bg-base-200 shadow-xl"
            prop.children [
                Html.figure [ Html.img [ prop.src "image.webp"; prop.alt "Example" ] ]
                Daisy.cardBody [ Daisy.cardTitle "Hover me" ]
            ]
        ]
        // Eight empty elements form the 3 × 3 hover sensor grid.
        for _ in 1 .. 8 do Html.div []
    ]
]`,B(`div`,V(`hover-3d`,L([[`className`,`m-auto`],[`children`,j(k(()=>{let e;return Gn(A(B(`div`,V(`card`,L([[`className`,`relative w-64 bg-base-200 shadow-xl`],[`children`,[(e=N(B(`img`,L([[`src`,`https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp`],[`alt`,`Strawberries`]]))),(0,_.createElement)(`figure`,C(),...e)),B(`div`,L([[`className`,`card-body`],[`children`,[B(`h2`,L([[`className`,`card-title`],[`children`,N(`Hover me`)]]))]]]))]]])))),k(()=>Zo))}))]]))));function $o(){return(0,_.createElement)(_.Fragment,C(),Qo)}var es=q(`Hover over a thumbnail to show it as the main image`,`Daisy.hoverGallery [
    prop.className "max-w-80 rounded-box"
    prop.children [
        Html.img [ prop.src "image-1.webp"; prop.alt "Gallery item" ]
        Html.img [ prop.src "image-2.webp"; prop.alt "Gallery item" ]
        Html.img [ prop.src "image-3.webp"; prop.alt "Gallery item" ]
        Html.img [ prop.src "image-4.webp"; prop.alt "Gallery item" ]
    ]
]`,B(`figure`,V(`hover-gallery`,L([[`className`,`max-w-80 rounded-box`],[`children`,vr(e=>B(`img`,L([[`src`,e],[`alt`,`Gallery item`]])),L([`https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp`,`https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp`,`https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp`,`https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp`]))]]))));function ts(){return(0,_.createElement)(_.Fragment,C(),es)}var ns=q(`Simple`,`Daisy.indicator [\r
    Daisy.indicatorItem [\r
        prop.className "badge badge-secondary"\r
        prop.text "New"\r
    ]\r
    Html.div [\r
        prop.className "grid w-32 h-32 bg-base-300 place-items-center"\r
        prop.text "Content"\r
    ]\r
]`,B(`div`,L([[`className`,`indicator`],[`children`,[B(`div`,V(`indicator-item`,L([[`className`,`badge badge-secondary`],[`children`,N(`New`)]]))),B(`div`,L([[`className`,`grid w-32 h-32 bg-base-300 place-items-center`],[`children`,N(`Content`)]]))]]]))),rs=q(`Button`,`Daisy.indicator [\r
    Daisy.indicatorItem [prop.text "99+"; prop.className "badge"]\r
    Daisy.button.button [button.primary; prop.text "Inbox"]\r
]`,B(`div`,L([[`className`,`indicator`],[`children`,[B(`div`,V(`indicator-item`,L([[`children`,N(`99+`)],[`className`,`badge`]]))),B(`button`,V(`btn`,L([[`className`,`btn-primary`],[`children`,N(`Inbox`)]])))]]]))),is=q(`Avatar`,`Daisy.indicator [\r
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
]`,B(`div`,V(`indicator`,L([[`className`,`avatar`],[`children`,[B(`div`,V(`indicator-item`,L([[`children`,N(`typing...`)],[`className`,`badge`]]))),B(`div`,L([[`className`,`w-24 h-24 rounded-btn`],[`children`,[B(`img`,N([`src`,`https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp`]))]]]))]]])))),as=(()=>{let e;return q(`All Positions`,`Daisy.indicator [\r
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
]`,(e=B(`div`,V(`indicator`,L([[`className`,`m-6`],[`children`,[B(`div`,V(`indicator-item`,L([[`className`,`indicator-top`],[`className`,`indicator-start`],[`className`,`badge-secondary`],[`className`,`badge`],[`children`,N(`1`)]]))),B(`div`,V(`indicator-item`,L([[`className`,`indicator-top`],[`className`,`indicator-center`],[`className`,`badge-secondary`],[`className`,`badge`],[`children`,N(`2`)]]))),B(`div`,V(`indicator-item`,L([[`className`,`indicator-top`],[`className`,`indicator-end`],[`className`,`badge-secondary`],[`className`,`badge`],[`children`,N(`3`)]]))),B(`div`,V(`indicator-item`,L([[`className`,`indicator-middle`],[`className`,`indicator-start`],[`className`,`badge-secondary`],[`className`,`badge`],[`children`,N(`4`)]]))),B(`div`,V(`indicator-item`,L([[`className`,`indicator-middle`],[`className`,`indicator-center`],[`className`,`badge-secondary`],[`className`,`badge`],[`children`,N(`5`)]]))),B(`div`,V(`indicator-item`,L([[`className`,`indicator-middle`],[`className`,`indicator-end`],[`className`,`badge-secondary`],[`className`,`badge`],[`children`,N(`6`)]]))),B(`div`,V(`indicator-item`,L([[`className`,`indicator-bottom`],[`className`,`indicator-start`],[`className`,`badge-secondary`],[`className`,`badge`],[`children`,N(`7`)]]))),B(`div`,V(`indicator-item`,L([[`className`,`indicator-bottom`],[`className`,`indicator-center`],[`className`,`badge-secondary`],[`className`,`badge`],[`children`,N(`8`)]]))),B(`div`,V(`indicator-item`,L([[`className`,`indicator-bottom`],[`className`,`indicator-end`],[`className`,`badge-secondary`],[`className`,`badge`],[`children`,N(`9`)]]))),B(`div`,N([`className`,`grid w-32 h-32 bg-base-300 place-items-center`]))]]]))),(0,_.createElement)(`div`,C(),e)))})();function os(){return(0,_.createElement)(_.Fragment,C(),ns,rs,is,as)}var ss=(()=>{let e;return q(`Join is the new ButtonGroup`,`Html.div [\r
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
]`,(e=N(B(`div`,L([[`className`,`join`],[`children`,[B(`button`,V(`btn`,L([[`className`,`btn-primary`],[`className`,`join-item`],[`children`,N(`A`)]]))),B(`button`,V(`btn`,L([[`className`,`btn-secondary`],[`className`,`join-item`],[`children`,N(`B`)]]))),B(`button`,V(`btn`,L([[`className`,`btn-warning`],[`className`,`join-item`],[`children`,N(`C`)]])))]]]))),(0,_.createElement)(`div`,C(),...e)))})();function cs(){return(0,_.createElement)(_.Fragment,C(),ss)}var ls=q(`Single`,`Daisy.kbd "a" `,(()=>{let e=B(`kbd`,L([[`className`,`kbd`],[`children`,N(`a`)]]));return(0,_.createElement)(`div`,C(),e)})()),us=q(`Sizes`,`for size in [kbd.lg; kbd.md; kbd.sm; kbd.xs] do\r
    Daisy.kbd [size; prop.text "shift"]`,(()=>{let e=j(k(()=>Jn(e=>B(`kbd`,V(`kbd`,L([e,[`children`,N(`shift`)]]))),[[`className`,`kbd-lg`],[`className`,`kbd-md`],[`className`,`kbd-sm`],[`className`,`kbd-xs`]])));return(0,_.createElement)(`div`,C(),...e)})()),ds=q(`Key Combination`,`Daisy.kbd "ctrl"\r
Html.span "+"\r
Daisy.kbd "shift"\r
Html.span "+"\r
Daisy.kbd "del" `,(()=>{let e=L([B(`kbd`,L([[`className`,`kbd`],[`children`,N(`ctrl`)]])),(0,_.createElement)(`span`,C(),`+`),B(`kbd`,L([[`className`,`kbd`],[`children`,N(`shift`)]])),(0,_.createElement)(`span`,C(),`+`),B(`kbd`,L([[`className`,`kbd`],[`children`,N(`del`)]]))]);return(0,_.createElement)(`div`,C(),...e)})());function fs(){return(0,_.createElement)(_.Fragment,C(),ls,us,ds)}var ps=q(`Label for input`,`Daisy.label.input [\r
    Daisy.label "https://"\r
    Html.input [ prop.placeholder "URL" ]\r
]`,B(`label`,L([[`className`,`input`],[`children`,[B(`span`,L([[`className`,`label`],[`children`,N(`https://`)]])),B(`input`,N([`placeholder`,`URL`]))]]]))),ms=q(`Label for input at the end`,`Daisy.label.input [\r
    Html.input [ prop.placeholder "domain name" ]\r
    Daisy.label ".com"\r
] `,B(`label`,L([[`className`,`input`],[`children`,[B(`input`,N([`placeholder`,`domain name`])),B(`span`,L([[`className`,`label`],[`children`,N(`.com`)]]))]]]))),hs=(()=>{let e;return q(`Label for select`,`Daisy.label.select [\r
    Daisy.label "Type"\r
    Html.select [\r
        Html.option "Personal"\r
        Html.option "Business"\r
    ]\r
]`,B(`label`,L([[`className`,`select`],[`children`,[B(`span`,L([[`className`,`label`],[`children`,N(`Type`)]])),(e=L([(0,_.createElement)(`option`,C(),`Personal`),(0,_.createElement)(`option`,C(),`Business`)]),(0,_.createElement)(`select`,C(),...e))]]])))})(),gs=q(`Floating label`,`Daisy.floatingLabel [\r
    Html.span "Your email"\r
    Daisy.input [ prop.placeholder "mail@site.com" ]\r
]`,B(`label`,L([[`className`,`floating-label`],[`children`,[(0,_.createElement)(`span`,C(),`Your email`),B(`input`,V(`input`,L([[`type`,`text`],[`placeholder`,`mail@site.com`]])))]]]))),_s=(()=>{let e;return q(`Floating label with different sizes`,`Html.div [\r
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
]`,(e=B(`div`,L([[`className`,`flex flex-col gap-4`],[`children`,[B(`label`,L([[`className`,`floating-label`],[`children`,[B(`input`,V(`input`,L([[`type`,`text`],[`className`,`input-xs`],[`placeholder`,`xs`]]))),(0,_.createElement)(`span`,C(),`xs`)]]])),B(`label`,L([[`className`,`floating-label`],[`children`,[B(`input`,V(`input`,L([[`type`,`text`],[`className`,`input-sm`],[`placeholder`,`sm`]]))),(0,_.createElement)(`span`,C(),`sm`)]]])),B(`label`,L([[`className`,`floating-label`],[`children`,[B(`input`,V(`input`,L([[`type`,`text`],[`className`,`input-md`],[`placeholder`,`md`]]))),(0,_.createElement)(`span`,C(),`md`)]]])),B(`label`,L([[`className`,`floating-label`],[`children`,[B(`input`,V(`input`,L([[`type`,`text`],[`className`,`input-lg`],[`placeholder`,`lg`]]))),(0,_.createElement)(`span`,C(),`lg`)]]])),B(`label`,L([[`className`,`floating-label`],[`children`,[B(`input`,V(`input`,L([[`type`,`text`],[`className`,`input-xl`],[`placeholder`,`xl`]]))),(0,_.createElement)(`span`,C(),`xl`)]]]))]]])),(0,_.createElement)(`div`,C(),e)))})();function vs(){return(0,_.createElement)(_.Fragment,C(),ps,ms,hs,gs,_s)}var ys=q(`Basic`,`Daisy.link "This is a link" `,(()=>{let e=B(`a`,L([[`className`,`link`],[`children`,N(`This is a link`)]]));return(0,_.createElement)(`div`,C(),e)})()),bs=q(`Color`,`Daisy.link [\r
    link.secondary\r
    prop.text "This is a link"\r
]`,(()=>{let e=B(`a`,V(`link`,L([[`className`,`link-secondary`],[`children`,N(`This is a link with color`)]])));return(0,_.createElement)(`div`,C(),e)})()),xs=q(`Hover`,`Daisy.link [\r
    link.hover\r
    link.accent\r
    prop.text "This is a link"\r
]\r
`,(()=>{let e=B(`a`,V(`link`,L([[`className`,`link-hover`],[`className`,`link-accent`],[`children`,N(`This is a link color and hover`)]])));return(0,_.createElement)(`div`,C(),e)})()),Ss=(()=>{let e,t;return q(`Colors`,`Html.ol [\r
    let colors =\r
        [ link.primary  , "primary"\r
          link.secondary, "secondary"\r
          link.accent   , "accent"\r
          link.neutral  , "neutral" ]\r
\r
    for color, text in colors do\r
        Html.li [Daisy.link [color; prop.text text]]\r
]`,(e=(t=j(k(()=>Qn(e=>{let t;return A((t=N(B(`a`,V(`link`,L([e[0],[`children`,N(e[1])]])))),(0,_.createElement)(`li`,C(),...t)))},[[[`className`,`link-primary`],`primary`],[[`className`,`link-secondary`],`secondary`],[[`className`,`link-accent`],`accent`],[[`className`,`link-neutral`],`neutral`]]))),(0,_.createElement)(`ol`,C(),...t)),(0,_.createElement)(`div`,C(),e)))})();function Cs(){return(0,_.createElement)(_.Fragment,C(),ys,bs,xs,Ss)}var ws=(()=>{let e,t,n,r;return q(`List (third column grows)`,`Daisy.list [\r
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
            ]\r
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
            ]\r
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
            ]\r
        ]\r
    ]\r
]`,(e=B(`ul`,V(`list`,L([[`className`,`bg-base-100 rounded-box shadow-md`],[`children`,[B(`li`,L([[`className`,`p-4 pb-2 text-xs opacity-60 tracking-wide`],[`children`,N(`Most played songs this week`)]])),B(`li`,L([[`className`,`list-row`],[`children`,[B(`div`,L([[`className`,`text-4xl font-thin opacity-30 tabular-nums`],[`children`,N(`01`)]])),(t=N(B(`img`,L([[`className`,`size-10 rounded-box`],[`src`,`https://img.daisyui.com/images/profile/demo/1@94.webp`]]))),(0,_.createElement)(`div`,C(),...t)),B(`div`,L([[`className`,`list-col-grow`],[`children`,[(0,_.createElement)(`div`,C(),`Dio Lupa`),B(`div`,L([[`className`,`text-xs uppercase font-semibold opacity-60`],[`children`,N(`Remaining Reason`)]]))]]])),B(`button`,V(`btn`,L([[`className`,`btn-ghost`],[`className`,`btn-square`],[`children`,[H(`svg`,L([[`className`,`size-[1.2em]`],[`viewBox`,`0 0 24 24`],[`children`,N(H(`g`,L([[`strokeLinejoin`,`round`],[`strokeLinecap`,`round`],[`strokeWidth`,2],[`fill`,`none`],[`stroke`,`currentColor`],[`children`,N(H(`path`,N([`d`,`M6 3L20 12 6 21 6 3z`])))]])))]]))]]])))]]])),B(`li`,L([[`className`,`list-row`],[`children`,[B(`div`,L([[`className`,`text-4xl font-thin opacity-30 tabular-nums`],[`children`,N(`02`)]])),(n=N(B(`img`,L([[`className`,`size-10 rounded-box`],[`src`,`https://img.daisyui.com/images/profile/demo/4@94.webp`]]))),(0,_.createElement)(`div`,C(),...n)),B(`div`,L([[`className`,`list-col-grow`],[`children`,[(0,_.createElement)(`div`,C(),`Ellie Beilish`),B(`div`,L([[`className`,`text-xs uppercase font-semibold opacity-60`],[`children`,N(`Bears of a fever`)]]))]]])),B(`button`,V(`btn`,L([[`className`,`btn-ghost`],[`className`,`btn-square`],[`children`,[H(`svg`,L([[`className`,`size-[1.2em]`],[`viewBox`,`0 0 24 24`],[`children`,N(H(`g`,L([[`strokeLinejoin`,`round`],[`strokeLinecap`,`round`],[`strokeWidth`,2],[`fill`,`none`],[`stroke`,`currentColor`],[`children`,N(H(`path`,N([`d`,`M6 3L20 12 6 21 6 3z`])))]])))]]))]]])))]]])),B(`li`,L([[`className`,`list-row`],[`children`,[B(`div`,L([[`className`,`text-4xl font-thin opacity-30 tabular-nums`],[`children`,N(`03`)]])),(r=N(B(`img`,L([[`className`,`size-10 rounded-box`],[`src`,`https://img.daisyui.com/images/profile/demo/3@94.webp`]]))),(0,_.createElement)(`div`,C(),...r)),B(`div`,L([[`className`,`list-col-grow`],[`children`,[(0,_.createElement)(`div`,C(),`Sabrino Gardener`),B(`div`,L([[`className`,`text-xs uppercase font-semibold opacity-60`],[`children`,N(`Cappuccino`)]]))]]])),B(`button`,V(`btn`,L([[`className`,`btn-ghost`],[`className`,`btn-square`],[`children`,[H(`svg`,L([[`className`,`size-[1.2em]`],[`viewBox`,`0 0 24 24`],[`children`,N(H(`g`,L([[`strokeLinejoin`,`round`],[`strokeLinecap`,`round`],[`strokeWidth`,2],[`fill`,`none`],[`stroke`,`currentColor`],[`children`,N(H(`path`,N([`d`,`M6 3L20 12 6 21 6 3z`])))]])))]]))]]])))]]]))]]]))),(0,_.createElement)(`div`,C(),e)))})(),Ts=(()=>{let e,t,n,r,i,a,o,s,c,l;return q(`List (third column wraps to next row)`,`Daisy.list [\r
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
            ]\r
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
            ]\r
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
            ]\r
        ]\r
    ]\r
]`,(e=B(`ul`,V(`list`,L([[`className`,`bg-base-100 rounded-box shadow-md`],[`children`,[B(`li`,L([[`className`,`p-4 pb-2 text-xs opacity-60 tracking-wide`],[`children`,N(`Most played songs this week`)]])),B(`li`,L([[`className`,`list-row`],[`children`,[(t=N(B(`img`,L([[`className`,`size-10 rounded-box`],[`src`,`https://img.daisyui.com/images/profile/demo/1@94.webp`]]))),(0,_.createElement)(`div`,C(),...t)),(n=L([(0,_.createElement)(`div`,C(),`Dio Lupa`),B(`div`,L([[`className`,`text-xs uppercase font-semibold opacity-60`],[`children`,N(`Remaining Reason`)]]))]),(0,_.createElement)(`div`,C(),...n)),B(`p`,L([[`className`,`list-col-wrap`],(r=`"Remaining Reason" became an instant hit, praised for its haunting sound and emotional depth. A viral performance brought it widespread recognition, making it one of Dio Lupa’s most iconic tracks.`,[`children`,N(r)])])),B(`button`,V(`btn`,L([[`className`,`btn-ghost`],[`className`,`btn-square`],[`children`,[H(`svg`,L([[`className`,`size-[1.2em]`],[`viewBox`,`0 0 24 24`],[`children`,N(H(`g`,L([[`strokeLinejoin`,`round`],[`strokeLinecap`,`round`],[`strokeWidth`,2],[`fill`,`none`],[`stroke`,`currentColor`],[`children`,N(H(`path`,N([`d`,`M6 3L20 12 6 21 6 3z`])))]])))]]))]]])))]]])),B(`li`,L([[`className`,`list-row`],[`children`,[(i=N(B(`img`,L([[`className`,`size-10 rounded-box`],[`src`,`https://img.daisyui.com/images/profile/demo/4@94.webp`]]))),(0,_.createElement)(`div`,C(),...i)),(a=L([(0,_.createElement)(`div`,C(),`Ellie Beilish`),B(`div`,L([[`className`,`text-xs uppercase font-semibold opacity-60`],[`children`,N(`Bears of a fever`)]]))]),(0,_.createElement)(`div`,C(),...a)),B(`p`,L([[`className`,`list-col-wrap`],(o=`"Bears of a Fever" captivated audiences with its intense energy and mysterious lyrics. Its popularity skyrocketed after fans shared it widely online, earning Ellie critical acclaim.`,[`children`,N(o)])])),B(`button`,V(`btn`,L([[`className`,`btn-ghost`],[`className`,`btn-square`],[`children`,[H(`svg`,L([[`className`,`size-[1.2em]`],[`viewBox`,`0 0 24 24`],[`children`,N(H(`g`,L([[`strokeLinejoin`,`round`],[`strokeLinecap`,`round`],[`strokeWidth`,2],[`fill`,`none`],[`stroke`,`currentColor`],[`children`,N(H(`path`,N([`d`,`M6 3L20 12 6 21 6 3z`])))]])))]]))]]])))]]])),B(`li`,L([[`className`,`list-row`],[`children`,[(s=N(B(`img`,L([[`className`,`size-10 rounded-box`],[`src`,`https://img.daisyui.com/images/profile/demo/3@94.webp`]]))),(0,_.createElement)(`div`,C(),...s)),(c=L([(0,_.createElement)(`div`,C(),`Sabrino Gardener`),B(`div`,L([[`className`,`text-xs uppercase font-semibold opacity-60`],[`children`,N(`Cappuccino`)]]))]),(0,_.createElement)(`div`,C(),...c)),B(`p`,L([[`className`,`list-col-wrap`],(l=`"Cappuccino" quickly gained attention for its smooth melody and relatable themes. The song’s success propelled Sabrino into the spotlight, solidifying their status as a rising star.`,[`children`,N(l)])])),B(`button`,V(`btn`,L([[`className`,`btn-ghost`],[`className`,`btn-square`],[`children`,[H(`svg`,L([[`className`,`size-[1.2em]`],[`viewBox`,`0 0 24 24`],[`children`,N(H(`g`,L([[`strokeLinejoin`,`round`],[`strokeLinecap`,`round`],[`strokeWidth`,2],[`fill`,`none`],[`stroke`,`currentColor`],[`children`,N(H(`path`,N([`d`,`M6 3L20 12 6 21 6 3z`])))]])))]]))]]])))]]]))]]]))),(0,_.createElement)(`div`,C(),e)))})();function Es(){return(0,_.createElement)(_.Fragment,C(),ws,Ts)}var Ds=(()=>{let e;return q(`Use Loading for cool spinners with different sizes`,`Html.div [\r
    Daisy.loading [ loading.spinner; loading.xs ]\r
    Daisy.loading [ loading.spinner; loading.sm ]\r
    Daisy.loading [ loading.spinner; loading.md ]\r
    Daisy.loading [ loading.spinner; loading.lg ]\r
]`,(e=L([B(`span`,V(`loading`,L([[`className`,`loading-spinner`],[`className`,`loading-xs`]]))),B(`span`,V(`loading`,L([[`className`,`loading-spinner`],[`className`,`loading-sm`]]))),B(`span`,V(`loading`,L([[`className`,`loading-spinner`],[`className`,`loading-md`]]))),B(`span`,V(`loading`,L([[`className`,`loading-spinner`],[`className`,`loading-lg`]])))]),(0,_.createElement)(`div`,C(),...e)))})(),Os=(()=>{let e;return q(`And many others`,`Html.div [\r
    Daisy.loading [ loading.dots ]\r
    Daisy.loading [ loading.ring ]\r
    Daisy.loading [ loading.ball ]\r
    Daisy.loading [ loading.bars ]\r
    Daisy.loading [ loading.infinity ]\r
]`,(e=L([B(`span`,V(`loading`,N([`className`,`loading-dots`]))),B(`span`,V(`loading`,N([`className`,`loading-ring`]))),B(`span`,V(`loading`,N([`className`,`loading-ball`]))),B(`span`,V(`loading`,N([`className`,`loading-bars`]))),B(`span`,V(`loading`,N([`className`,`loading-infinity`])))]),(0,_.createElement)(`div`,C(),...e)))})(),ks=(()=>{let e;return q(`Fancy colors? Oh yeah!`,`Html.div [\r
    Daisy.loading [ loading.dots; color.textAccent ]\r
    Daisy.loading [ loading.ring; color.textWarning ]\r
    Daisy.loading [ loading.ball; color.textSecondary ]\r
    Daisy.loading [ loading.bars; color.textSuccess ]\r
    Daisy.loading [ loading.infinity; color.textError ]\r
]`,(e=L([B(`span`,V(`loading`,L([[`className`,`loading-dots`],[`className`,`text-accent`]]))),B(`span`,V(`loading`,L([[`className`,`loading-ring`],[`className`,`text-warning`]]))),B(`span`,V(`loading`,L([[`className`,`loading-ball`],[`className`,`text-secondary`]]))),B(`span`,V(`loading`,L([[`className`,`loading-bars`],[`className`,`text-success`]]))),B(`span`,V(`loading`,L([[`className`,`loading-infinity`],[`className`,`text-error`]])))]),(0,_.createElement)(`div`,C(),...e)))})();function As(){return(0,_.createElement)(_.Fragment,C(),Ds,Os,ks)}var js=q(`Basic Shape`,`Html.img [\r
    mask.circle\r
    prop.src "https://picsum.photos/id/1005/200/200"\r
]`,(()=>{let e=B(`img`,L([[`className`,`mask mask-circle`],[`src`,`https://picsum.photos/id/1005/200/200`]]));return(0,_.createElement)(`div`,C(),e)})()),Ms=(()=>{let e;return q(`All Shapes`,`let shapes = [\r
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
]`,(e=j(k(()=>Qn(e=>{let t;return A((t=L([(0,_.createElement)(`span`,C(),e[1]),B(`img`,L([e[0],[`src`,`https://picsum.photos/id/1005/200/200`]]))]),(0,_.createElement)(`div`,C(),...t)))},[[[`className`,`mask mask-squircle`],`squircle`],[[`className`,`mask mask-heart`],`heart`],[[`className`,`mask mask-hexagon`],`hexagon`],[[`className`,`mask mask-hexagon-2`],`hexagon2`],[[`className`,`mask mask-decagon`],`decagon`],[[`className`,`mask mask-pentagon`],`pentagon`],[[`className`,`mask mask-diamond`],`diamond`],[[`className`,`mask mask-square`],`square`],[[`className`,`mask mask-circle`],`circle`],[[`className`,`mask mask-star`],`star`],[[`className`,`mask mask-star-2`],`star2`],[[`className`,`mask mask-triangle`],`triangle`],[[`className`,`mask mask-triangle-2`],`triangle2`],[[`className`,`mask mask-triangle-3`],`triangle3`],[[`className`,`mask mask-triangle-4`],`triangle4`]]))),(0,_.createElement)(`div`,C(),...e)))})();function Ns(){return(0,_.createElement)(_.Fragment,C(),js,Ms)}var Ps=(()=>{let e,t,n,r,i;return q(`Basic`,`Html.div [\r
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
]`,B(`div`,L([[`className`,`grid place-content-center rounded-box bg-base-200`],[`children`,[B(`ul`,V(`menu`,L([[`className`,`bg-base-100 rounded-box`],[`children`,[B(`li`,L([[`className`,`menu-title`],[`children`,[(0,_.createElement)(`span`,C(),`Menu title`)]]])),(e=N(B(`a`,N([`children`,N(`Item without icon`)]))),(0,_.createElement)(`li`,C(),...e)),(t=N((n=L([B(`i`,N([`className`,`fas fa-exclamation-triangle mr-2`])),(0,_.createElement)(`span`,C(),`Item with icon`)]),(0,_.createElement)(`a`,C(),...n))),(0,_.createElement)(`li`,C(),...t)),(r=N((i=L([B(`i`,N([`className`,`fas fa-angry mr-2`])),(0,_.createElement)(`span`,C(),`Item with icon`),B(`div`,V(`badge`,L([[`className`,`badge-success`],[`children`,N(`3`)]])))]),(0,_.createElement)(`a`,C(),...i))),(0,_.createElement)(`li`,C(),...r))]]])))]]])))})(),Fs=(()=>{let e;return q(`Bordered`,`Html.div [\r
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
]`,B(`div`,L([[`className`,`grid place-content-center rounded-box bg-base-200`],[`children`,[B(`ul`,V(`menu`,L([[`className`,`bg-base-100 rounded-box`],[`children`,[B(`li`,L([[`className`,`menu-title`],[`children`,[(0,_.createElement)(`span`,C(),`Menu title`)]]])),(e=N(B(`a`,N([`children`,N(`Non Bordered`)]))),(0,_.createElement)(`li`,C(),...e)),B(`li`,L([[`className`,`border`],[`children`,[B(`a`,N([`children`,N(`Bordered`)]))]]])),B(`li`,L([[`className`,`menu-disabled`],[`children`,[B(`a`,N([`children`,N(`Disabled`)]))]]]))]]])))]]])))})(),Is=(()=>{let e,t,n,r;return q(`Horizontal`,`Html.div [\r
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
]`,B(`div`,L([[`className`,`grid place-content-center rounded-box bg-base-200`],[`children`,[B(`ul`,V(`menu`,L([[`className`,`menu-horizontal`],[`className`,`items-stretch shadow-lg bg-base-100 rounded-box`],[`children`,[(e=N(B(`a`,N([`children`,N(`With link`)]))),(0,_.createElement)(`li`,C(),...e)),B(`li`,L([[`className`,`bordered`],[`children`,[B(`a`,N([`children`,N(`Bordered`)]))]]])),(t=N((0,_.createElement)(`span`,C(),`With a span`)),(0,_.createElement)(`li`,C(),...t)),(n=N((r=L([B(`i`,N([`className`,`fas fa-exclamation-triangle mr-2`])),(0,_.createElement)(`span`,C(),`With an icon`)]),(0,_.createElement)(`a`,C(),...r))),(0,_.createElement)(`li`,C(),...n))]]])))]]])))})(),Ls=(()=>{let e,t,n,r,i;return q(`Tree`,`Html.div [\r
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
]`,B(`div`,L([[`className`,`grid place-content-center py-4 rounded-box bg-base-200`],[`children`,[B(`ul`,V(`menu`,L([[`className`,`bg-base-100 rounded-box`],[`children`,[B(`li`,L([[`className`,`menu-title`],[`children`,[(0,_.createElement)(`span`,C(),`Menu title`)]]])),(e=N(B(`a`,N([`children`,N(`Level 1`)]))),(0,_.createElement)(`li`,C(),...e)),(t=N((n=L([(0,_.createElement)(`summary`,C(),`Parent`),B(`ul`,L([[`className`,`rounded-box p-2 bg-base-100`],[`children`,[(r=N(B(`a`,N([`children`,N(`Level 2/1`)]))),(0,_.createElement)(`li`,C(),...r)),(i=N(B(`a`,N([`children`,N(`Level 2/2`)]))),(0,_.createElement)(`li`,C(),...i))]]]))]),(0,_.createElement)(`details`,C(),...n))),(0,_.createElement)(`li`,C(),...t))]]])))]]])))})();function Rs(){return(0,_.createElement)(_.Fragment,C(),Ps,Fs,Is,Ls)}function zs(e,t){return B(`div`,L([[`id`,e],[`popover`,``],[`className`,`p-6 shadow-lg`],[`children`,[B(`ul`,L([[`className`,`grid min-w-48 gap-2`],[`children`,vr(e=>{let t=N(B(`a`,L([[`href`,`#`],[`children`,N(e)]])));return(0,_.createElement)(`li`,C(),...t)},t)]]))]]]))}var Bs=q(`Megamenu using the native Popover API`,`Daisy.megamenu [
    megamenu.wide
    prop.children [
        Html.button [ prop.custom ("popovertarget", "products-menu"); prop.text "Products" ]
        Html.div [
            prop.id "products-menu"
            prop.custom ("popover", "")
            prop.children [ Html.text "Products menu content" ]
        ]
        Html.button [ prop.custom ("popovertarget", "resources-menu"); prop.text "Resources" ]
        Html.div [
            prop.id "resources-menu"
            prop.custom ("popover", "")
            prop.children [ Html.text "Resources menu content" ]
        ]
        Daisy.megamenuActive []
    ]
]`,B(`div`,V(`megamenu`,L([[`className`,`megamenu-wide`],[`className`,`m-auto border border-base-300`],[`children`,[B(`button`,L([[`popovertarget`,`products-menu`],[`children`,N(`Products`)]])),zs(`products-menu`,L([`Components`,`Themes`,`Templates`])),B(`button`,L([[`popovertarget`,`resources-menu`],[`children`,N(`Resources`)]])),zs(`resources-menu`,L([`Documentation`,`Examples`,`Community`])),B(`span`,V(`megamenu-active`,M()))]]]))));function Vs(){return(0,_.createElement)(_.Fragment,C(),Bs)}var Hs=B(`div`,V(`alert`,L([[`className`,`alert-info`],[`className`,`mb-10`],[`children`,[(()=>{let e,t,n,r,i,a=L([B(`h3`,L([[`className`,`font-bold`],[`children`,N(`Using native HTML Popover attributes`)]])),(e=`Feliz does not currently provide typed properties for the Popover API. Pass them through prop.custom:`,(0,_.createElement)(`p`,C(),e)),B(`ul`,L([[`className`,`mt-2 list-inside list-disc font-mono`],[`children`,[(t=N((0,_.createElement)(`code`,C(),`prop.custom ("popover", "")`)),(0,_.createElement)(`li`,C(),...t)),(n=N((0,_.createElement)(`code`,C(),`prop.custom ("popovertarget", modalId)`)),(0,_.createElement)(`li`,C(),...n)),(r=N((0,_.createElement)(`code`,C(),`prop.custom ("popovertargetaction", "hide")`)),(0,_.createElement)(`li`,C(),...r))]]])),B(`p`,L([[`className`,`mt-2`],(i=`Use a unique modal ID and pass the same value to every popovertarget that opens or closes it. The popover attribute uses an empty value for the default auto behavior.`,[`children`,N(i)])])),B(`a`,L([[`className`,`link`],[`href`,`https://daisyui.com/components/modal/`],[`children`,N(`See the current daisyUI Modal documentation`)]]))]);return(0,_.createElement)(`div`,C(),...a)})()]]]))),Us=(()=>{let e;return q(`Modal using the native HTML Popover API`,`let modalId = "popover-modal"

Html.div [
    Daisy.button.button [
        button.primary
        prop.custom ("popovertarget", modalId)
        prop.text "Open Modal"
    ]
    Daisy.modal.div [
        prop.id modalId
        prop.custom ("popover", "")
        prop.children [
            Daisy.modalBox.div [
                Html.h3 [ prop.className "text-lg font-bold"; prop.text "Hello!" ]
                Html.p [
                    prop.className "py-4"
                    prop.text "Press ESC or use the button below to close."
                ]
                Daisy.modalAction [
                    Daisy.button.button [
                        prop.custom ("popovertarget", modalId)
                        prop.custom ("popovertargetaction", "hide")
                        prop.text "Close"
                    ]
                ]
            ]
        ]
    ]
]`,(e=L([B(`button`,V(`btn`,L([[`className`,`btn-primary`],[`popovertarget`,`popover-modal`],[`children`,N(`Open Modal`)]]))),B(`div`,V(`modal`,L([[`id`,`popover-modal`],[`popover`,``],[`children`,[B(`div`,L([[`className`,`modal-box`],[`children`,[B(`h3`,L([[`className`,`text-lg font-bold`],[`children`,N(`Hello!`)]])),B(`p`,L([[`className`,`py-4`],[`children`,N(`Press ESC or use the button below to close.`)]])),B(`div`,L([[`className`,`modal-action`],[`children`,[B(`button`,V(`btn`,L([[`popovertarget`,`popover-modal`],[`popovertargetaction`,`hide`],[`children`,N(`Close`)]])))]]]))]]]))]]])))]),(0,_.createElement)(`div`,C(),...e)))})(),Ws=(()=>{let e;return q(`Popover modal that closes when clicked outside`,`let modalId = "popover-modal-backdrop"

Html.div [
    Daisy.button.button [
        button.primary
        prop.custom ("popovertarget", modalId)
        prop.text "Open Modal"
    ]
    Daisy.modal.div [
        prop.id modalId
        prop.custom ("popover", "")
        prop.children [
            Daisy.modalBox.div [
                Html.h3 [ prop.className "text-lg font-bold"; prop.text "Hello!" ]
                Html.p [
                    prop.className "py-4"
                    prop.text "Press ESC, click outside, or use the backdrop to close."
                ]
            ]
            Html.div [
                prop.className "modal-backdrop"
                prop.children [
                    Html.button [
                        prop.custom ("popovertarget", modalId)
                        prop.custom ("popovertargetaction", "hide")
                        prop.text "Close"
                    ]
                ]
            ]
        ]
    ]
]`,(e=L([B(`button`,V(`btn`,L([[`className`,`btn-primary`],[`popovertarget`,`popover-modal-backdrop`],[`children`,N(`Open Modal`)]]))),B(`div`,V(`modal`,L([[`id`,`popover-modal-backdrop`],[`popover`,``],[`children`,[B(`div`,L([[`className`,`modal-box`],[`children`,[B(`h3`,L([[`className`,`text-lg font-bold`],[`children`,N(`Hello!`)]])),B(`p`,L([[`className`,`py-4`],[`children`,N(`Press ESC, click outside, or use the backdrop to close.`)]]))]]])),B(`div`,L([[`className`,`modal-backdrop`],[`children`,[B(`button`,L([[`popovertarget`,`popover-modal-backdrop`],[`popovertargetaction`,`hide`],[`children`,N(`Close`)]]))]]]))]]])))]),(0,_.createElement)(`div`,C(),...e)))})(),Gs=(()=>{let e,t;return q(`Modal with toggle (legacy checkbox method)`,`Html.div [\r
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
]`,(e=L([B(`label`,V(`btn`,L([[`htmlFor`,`my-modal`],[`className`,`btn-primary`],[`children`,N(`Open Modal`)]]))),B(`input`,V(`modal-toggle`,L([[`type`,`checkbox`],[`id`,`my-modal`]]))),B(`div`,V(`modal`,N([`children`,[B(`div`,L([[`className`,`modal-box`],[`children`,[(t=`Enim dolorem dolorum omnis atque necessitatibus. Consequatur aut adipisci qui iusto illo eaque. Consequatur repudiandae et. Nulla ea quasi eligendi. Saepe velit autem minima.`,(0,_.createElement)(`p`,C(),t)),B(`div`,L([[`className`,`modal-action`],[`children`,[B(`label`,V(`btn`,L([[`htmlFor`,`my-modal`],[`className`,`btn-primary`],[`children`,N(`Accept`)]])))]]]))]]]))]])))]),(0,_.createElement)(`div`,C(),...e)))})();function Ks(){return(0,_.createElement)(_.Fragment,C(),Hs,Us,Ws,Gs)}var qs=(()=>{let e;return q(`Icon and text`,`Daisy.navbar [\r
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
]`,(e=B(`div`,V(`navbar`,L([[`className`,`mb-2 shadow-lg bg-neutral text-neutral-content rounded-box`],[`children`,[B(`div`,L([[`className`,`flex-none`],[`children`,[B(`button`,V(`btn`,L([[`className`,`btn-square`],[`className`,`btn-ghost`],[`children`,[B(`i`,N(Wr([`className`,`fas fa-arrow-left`],[`className`,`text-success`])))]]])))]]])),B(`div`,L([[`className`,`flex-1 px-2 mx-2`],[`children`,[B(`span`,L([[`className`,`text-lg font-bold`],[`children`,N(`With one icon`)]]))]]]))]]]))),(0,_.createElement)(`div`,C(),e)))})(),Js=(()=>{let e;return q(`Start / Center / End`,`Daisy.navbar [\r
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
]`,(e=B(`div`,V(`navbar`,L([[`className`,`mb-2 shadow-lg bg-neutral text-neutral-content rounded-box`],[`children`,[B(`div`,L([[`className`,`navbar-start`],[`children`,[B(`button`,V(`btn`,L([[`className`,`btn-square`],[`className`,`btn-ghost`],[`children`,[B(`i`,N([`className`,`fas fa-bars`]))]]])))]]])),B(`div`,L([[`className`,`navbar-center`],[`children`,[(0,_.createElement)(`span`,C(),`With two icons`)]]])),B(`div`,L([[`className`,`navbar-end`],[`children`,[B(`button`,V(`btn`,L([[`className`,`btn-square`],[`className`,`btn-ghost`],[`children`,[B(`i`,N([`className`,`fas fa-ellipsis-h`]))]]])))]]]))]]]))),(0,_.createElement)(`div`,C(),e)))})(),Ys=(()=>{let e;return q(`With input`,`Daisy.navbar [\r
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
]`,(e=B(`div`,V(`navbar`,L([[`className`,`mb-2 shadow-lg bg-neutral text-neutral-content rounded-box`],[`children`,[B(`div`,L([[`className`,`flex-none`],[`children`,[B(`fieldset`,L([[`className`,`fieldset`],[`children`,[B(`input`,V(`input`,L([[`type`,`text`],[`className`,`input-ghost`],[`placeholder`,`Search`]])))]]]))]]])),B(`div`,L([[`className`,`flex-none`],[`children`,[B(`button`,V(`btn`,L([[`className`,`btn-square`],[`className`,`btn-ghost`],[`children`,[B(`i`,N([`className`,`fas fa-search`]))]]])))]]]))]]]))),(0,_.createElement)(`div`,C(),e)))})();function Xs(){return(0,_.createElement)(_.Fragment,C(),qs,Js,Ys)}function Zs(e){return B(`input`,L([[`type`,`text`],[`autocomplete`,`one-time-code`],[`inputmode`,`numeric`],[`maxlength`,e],[`pattern`,`[0-9]{${e}}`],[`required`,!0],[`aria-label`,`One-time password`]]))}function Qs(e){return j(k(()=>Qn(e=>A(B(`span`,M())),Wi(1,1,e))))}var $s=q(`One-time password inputs; the number of empty spans sets the code length`,`Daisy.otp [
    otp.primary
    prop.children [
        for _ in 1 .. 4 do Html.span []
        Html.input [
            prop.type'.text
            prop.custom ("autocomplete", "one-time-code")
            prop.custom ("inputmode", "numeric")
            prop.custom ("maxlength", 4)
            prop.custom ("pattern", "[0-9]{4}")
            prop.required true
        ]
    ]
]`,B(`div`,L([[`className`,`m-auto flex flex-col gap-6`],[`children`,[B(`label`,V(`otp`,L([[`className`,`otp-primary`],[`children`,j(k(()=>Gn(Qs(4),k(()=>A(Zs(4))))))]]))),B(`label`,V(`otp`,L([[`className`,`otp-joined`],[`className`,`otp-success`],[`className`,`otp-lg`],[`children`,j(k(()=>Gn(Qs(6),k(()=>A(Zs(6))))))]])))]]])));function ec(){return(0,_.createElement)(_.Fragment,C(),$s)}var tc=q(`Simple pagination`,`Daisy.join [\r
    Daisy.button.button "Previous"\r
    Daisy.button.button "1"\r
    Daisy.button.button [button.active; prop.text "2"]\r
    Daisy.button.button "3"\r
    Daisy.button.button "4"\r
    Daisy.button.button "Next"\r
]`,B(`div`,L([[`className`,`join`],[`children`,[B(`button`,L([[`className`,`btn`],[`children`,N(`Previous`)]])),B(`button`,L([[`className`,`btn`],[`children`,N(`1`)]])),B(`button`,V(`btn`,L([[`className`,`btn-active`],[`children`,N(`2`)]]))),B(`button`,L([[`className`,`btn`],[`children`,N(`3`)]])),B(`button`,L([[`className`,`btn`],[`children`,N(`4`)]])),B(`button`,L([[`className`,`btn`],[`children`,N(`Next`)]]))]]]))),nc=(()=>{let e;return q(`Sizes`,`let sizes = [\r
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
]`,(e=j(k(()=>Qn(e=>{let t=e[0];return A(B(`div`,L([[`className`,`join`],[`children`,[B(`button`,V(`btn`,L([t,[`children`,N(`Previous`)]]))),B(`button`,V(`btn`,L([t,[`children`,N(`1`)]]))),B(`button`,V(`btn`,L([t,[`className`,`btn-active`],[`children`,N(`2`)]]))),B(`button`,V(`btn`,L([t,[`children`,N(`3`)]]))),B(`button`,V(`btn`,L([t,[`children`,N(`4`)]]))),B(`button`,V(`btn`,L([t,[`children`,N(`Next`)]])))]]])))},[[[`className`,`btn-xs`],`xs`],[[`className`,`btn-sm`],`sm`],[[`className`,`btn-md`],`md`],[[`className`,`btn-lg`],`lg`]]))),(0,_.createElement)(`div`,C(),...e)))})();function rc(){return(0,_.createElement)(_.Fragment,C(),tc,nc)}var ic=(()=>{let e;return q(`Simple`,`Daisy.progress [prop.value 0; prop.max 100]\r
Daisy.progress [prop.value 25; prop.max 100]\r
Daisy.progress [prop.value 50; prop.max 100]\r
Daisy.progress [prop.value 75; prop.max 100]\r
Daisy.progress [prop.value 100; prop.max 100]`,(e=L([B(`progress`,V(`progress`,L([[`value`,0],[`max`,100]]))),B(`progress`,V(`progress`,L([[`value`,25],[`max`,100]]))),B(`progress`,V(`progress`,L([[`value`,50],[`max`,100]]))),B(`progress`,V(`progress`,L([[`value`,75],[`max`,100]]))),B(`progress`,V(`progress`,L([[`value`,100],[`max`,100]])))]),(0,_.createElement)(`div`,C(),...e)))})(),ac=(()=>{let e;return q(`Colors`,`let colors =\r
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
]`,(e=j(k(()=>Qn(e=>{let t=e[0];return Gn(A((0,_.createElement)(`h3`,C(),e[1])),k(()=>Gn(A(B(`progress`,V(`progress`,L([t,[`value`,0],[`max`,100]])))),k(()=>Gn(A(B(`progress`,V(`progress`,L([t,[`value`,25],[`max`,100]])))),k(()=>Gn(A(B(`progress`,V(`progress`,L([t,[`value`,50],[`max`,100]])))),k(()=>Gn(A(B(`progress`,V(`progress`,L([t,[`value`,75],[`max`,100]])))),k(()=>A(B(`progress`,V(`progress`,L([t,[`value`,100],[`max`,100]]))))))))))))))},[[[`className`,`progress-primary`],`primary`],[[`className`,`progress-secondary`],`secondary`],[[`className`,`progress-accent`],`accent`],[[`className`,`progress-info`],`info`],[[`className`,`progress-success`],`success`],[[`className`,`progress-warning`],`warning`],[[`className`,`progress-error`],`error`]]))),(0,_.createElement)(`div`,C(),...e)))})();function oc(){return(0,_.createElement)(_.Fragment,C(),ic,ac)}var sc=(()=>{let e;return q(`Simple`,`Daisy.radialProgress [\r
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
]`,(e=L([B(`div`,V(`radial-progress`,L([[`style`,{"--value":100}],[`children`,N(`100%`)]]))),B(`div`,V(`radial-progress`,L([[`style`,{"--value":70}],[`children`,N(`70%`)]]))),B(`div`,V(`radial-progress`,L([[`style`,{"--value":10}],[`children`,N(`10%`)]]))),B(`div`,V(`radial-progress`,L([[`style`,{"--value":50}],[`children`,N(`50%`)]])))]),(0,_.createElement)(`div`,C(),...e)))})(),cc=(()=>{let e;return q(`Colors and different sizes`,`Daisy.radialProgress [\r
    color.bgPrimary\r
    color.textPrimaryContent\r
    color.borderPrimary\r
    prop.className "border-4"\r
    prop.style [ style.custom("--value",70); style.custom("--size","12rem") ]\r
    prop.text "70%"\r
]`,(e=N(B(`div`,V(`radial-progress`,L([[`className`,`bg-primary`],[`className`,`text-primary-content`],[`className`,`border-primary`],[`className`,`border-4`],[`style`,{"--value":70,"--size":`12rem`}],[`children`,N(`70%`)]])))),(0,_.createElement)(`div`,C(),...e)))})();function lc(){return(0,_.createElement)(_.Fragment,C(),sc,cc)}var uc=(()=>{let e;return q(`Large stars`,`Daisy.rating [\r
    rating.lg\r
    prop.children [\r
        Html.input [ prop.type'.radio; prop.name "rating-1"; color.bgWarning ++ mask.star ]\r
        Html.input [ prop.type'.radio; prop.name "rating-1"; color.bgWarning ++ mask.star ]\r
        Html.input [ prop.type'.radio; prop.name "rating-1"; color.bgWarning ++ mask.star ]\r
        Html.input [ prop.type'.radio; prop.name "rating-1"; color.bgWarning ++ mask.star; prop.defaultChecked true ]\r
        Html.input [ prop.type'.radio; prop.name "rating-1"; color.bgWarning ++ mask.star ]\r
    ]\r
]`,(e=N(B(`div`,V(`rating`,L([[`className`,`rating-lg`],[`children`,[B(`input`,L([[`type`,`radio`],[`name`,`rating-1`],Wr([`className`,`bg-warning`],[`className`,`mask mask-star`])])),B(`input`,L([[`type`,`radio`],[`name`,`rating-1`],Wr([`className`,`bg-warning`],[`className`,`mask mask-star`])])),B(`input`,L([[`type`,`radio`],[`name`,`rating-1`],Wr([`className`,`bg-warning`],[`className`,`mask mask-star`])])),B(`input`,L([[`type`,`radio`],[`name`,`rating-1`],Wr([`className`,`bg-warning`],[`className`,`mask mask-star`]),[`defaultChecked`,!0]])),B(`input`,L([[`type`,`radio`],[`name`,`rating-1`],Wr([`className`,`bg-warning`],[`className`,`mask mask-star`])]))]]])))),(0,_.createElement)(`div`,C(),...e)))})(),dc=(()=>{let e;return q(`Small hearts`,`Daisy.rating [\r
    prop.className "gap-1"\r
    ++ rating.sm\r
    prop.children [\r
        Html.input [ prop.type'.radio; prop.name "rating-1"; color.bgWarning ++ mask.star ]\r
        Html.input [ prop.type'.radio; prop.name "rating-1"; color.bgWarning ++ mask.star; prop.defaultChecked true ]\r
        Html.input [ prop.type'.radio; prop.name "rating-1"; color.bgWarning ++ mask.star ]\r
        Html.input [ prop.type'.radio; prop.name "rating-1"; color.bgWarning ++ mask.star ]\r
        Html.input [ prop.type'.radio; prop.name "rating-1"; color.bgWarning ++ mask.star ]\r
    ]\r
]`,(e=N(B(`div`,V(`rating`,L([Wr([`className`,`gap-1`],[`className`,`rating-sm`]),[`children`,[B(`input`,L([[`type`,`radio`],[`name`,`rating-2`],Wr([`className`,`bg-error`],[`className`,`mask mask-heart`])])),B(`input`,L([[`type`,`radio`],[`name`,`rating-2`],Wr([`className`,`bg-error`],[`className`,`mask mask-heart`]),[`defaultChecked`,!0]])),B(`input`,L([[`type`,`radio`],[`name`,`rating-2`],Wr([`className`,`bg-error`],[`className`,`mask mask-heart`])])),B(`input`,L([[`type`,`radio`],[`name`,`rating-2`],Wr([`className`,`bg-error`],[`className`,`mask mask-heart`])])),B(`input`,L([[`type`,`radio`],[`name`,`rating-2`],Wr([`className`,`bg-error`],[`className`,`mask mask-heart`])]))]]])))),(0,_.createElement)(`div`,C(),...e)))})();function fc(){return(0,_.createElement)(_.Fragment,C(),uc,dc)}var pc=q(`Skeleton is a component that can be used to show a loading state of a component.`,`Daisy.skeleton [\r
    prop.className "w-32 h-32"\r
]`,B(`div`,V(`skeleton`,N([`className`,`w-32 h-32`])))),mc=q(`Skeleton - rectangle with content`,`Html.div [\r
    prop.className "flex flex-col gap-4 w-52"\r
    prop.children [\r
        Daisy.skeleton [ prop.className "h-32 w-full" ]\r
        Daisy.skeleton [ prop.className "h-4 w-28" ]\r
        Daisy.skeleton [ prop.className "h-4 w-full" ]\r
        Daisy.skeleton [ prop.className "h-4 w-full" ]\r
    ]\r
]`,B(`div`,L([[`className`,`flex flex-col gap-4 w-52`],[`children`,[B(`div`,V(`skeleton`,N([`className`,`h-32 w-full`]))),B(`div`,V(`skeleton`,N([`className`,`h-4 w-28`]))),B(`div`,V(`skeleton`,N([`className`,`h-4 w-full`]))),B(`div`,V(`skeleton`,N([`className`,`h-4 w-full`])))]]])));function hc(){return(0,_.createElement)(_.Fragment,C(),pc,mc)}var gc=(()=>{let e;return q(`Without stack`,`Html.div [\r
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
]`,(e=L([B(`div`,L([[`className`,`grid w-32 h-20 rounded bg-primary text-primary-content place-content-center`],[`children`,N(`1`)]])),B(`div`,L([[`className`,`grid w-32 h-20 rounded bg-accent text-accent-content place-content-center`],[`children`,N(`2`)]])),B(`div`,L([[`className`,`grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center`],[`children`,N(`3`)]]))]),(0,_.createElement)(`div`,C(),...e)))})(),_c=(()=>{let e;return q(`With stack`,`Daisy.stack [\r
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
]`,(e=B(`div`,V(`stack`,L([[`className`,`w-32 h-20`],[`children`,[B(`div`,L([[`className`,`grid rounded bg-primary text-primary-content place-content-center`],[`children`,N(`1`)]])),B(`div`,L([[`className`,`grid rounded bg-accent text-accent-content place-content-center`],[`children`,N(`2`)]])),B(`div`,L([[`className`,`grid rounded bg-secondary text-secondary-content place-content-center`],[`children`,N(`3`)]]))]]]))),(0,_.createElement)(`div`,C(),e)))})(),vc=(()=>{let e;return q(`Stacked images`,`Daisy.stack [\r
    Html.img [\r
        prop.src "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"\r
    ]\r
    Html.img [\r
        prop.src "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"\r
    ]\r
    Html.img [\r
        prop.src "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"\r
    ]\r
]`,(e=B(`div`,L([[`className`,`stack`],[`children`,[B(`img`,N([`src`,`https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp`])),B(`img`,N([`src`,`https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp`])),B(`img`,N([`src`,`https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp`]))]]])),(0,_.createElement)(`div`,C(),e)))})();function yc(){return(0,_.createElement)(_.Fragment,C(),gc,_c,vc)}var bc=(()=>{let e;return q(`Simple`,`Daisy.stats [\r
    Daisy.stat [\r
        Daisy.statTitle "Total Page Views"\r
        Daisy.statValue "89,400"\r
        Daisy.statDesc "21% more than last month"\r
    ]\r
]`,(e=B(`div`,L([[`className`,`stats`],[`children`,[B(`div`,L([[`className`,`stat`],[`children`,[B(`div`,L([[`className`,`stat-title`],[`children`,N(`Total Page Views`)]])),B(`div`,L([[`className`,`stat-value`],[`children`,N(`89,400`)]])),B(`div`,L([[`className`,`stat-desc`],[`children`,N(`21% more than last month`)]]))]]]))]]])),(0,_.createElement)(`div`,C(),e)))})(),xc=(()=>{let e;return q(`With Figure`,`Daisy.stats [\r
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
]`,(e=B(`div`,V(`stats`,L([[`className`,`w-full`],[`children`,[B(`div`,L([[`className`,`stat`],[`children`,[B(`div`,L([[`className`,`stat-figure`],[`children`,[B(`i`,N([`className`,`fas fa-exclamation-triangle mr-2`]))]]])),B(`div`,L([[`className`,`stat-title`],[`children`,N(`Downloads`)]])),B(`div`,L([[`className`,`stat-value`],[`children`,N(`310M`)]])),B(`div`,L([[`className`,`stat-desc`],[`children`,N(`Jan 1st - Feb 1st`)]]))]]])),B(`div`,L([[`className`,`stat`],[`children`,[B(`div`,L([[`className`,`stat-figure`],[`children`,[B(`i`,N([`className`,`fas fa-hand-spock mr-2`]))]]])),B(`div`,L([[`className`,`stat-title`],[`children`,N(`New Users`)]])),B(`div`,L([[`className`,`stat-value`],[`children`,N(`4,200`)]])),B(`div`,V(`stat-desc`,L([[`className`,`text-success`],[`children`,N(`↗︎ 400 (22%)`)]])))]]])),B(`div`,L([[`className`,`stat`],[`children`,[B(`div`,L([[`className`,`stat-figure`],[`children`,[B(`i`,N([`className`,`fas fa-layer-group mr-2`]))]]])),B(`div`,L([[`className`,`stat-title`],[`children`,N(`New Registers`)]])),B(`div`,L([[`className`,`stat-value`],[`children`,N(`1,200`)]])),B(`div`,V(`stat-desc`,L([[`className`,`text-error`],[`children`,N(`↘︎ 90 (14%)`)]])))]]]))]]]))),(0,_.createElement)(`div`,C(),e)))})(),Sc=(()=>{let e;return q(`Centered`,`Daisy.stats [\r
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
]`,(e=B(`div`,V(`stats`,L([[`className`,`w-full`],[`children`,[B(`div`,V(`stat`,L([[`className`,`place-items-center place-content-center`],[`children`,[B(`div`,L([[`className`,`stat-title`],[`children`,N(`Downloads`)]])),B(`div`,L([[`className`,`stat-value`],[`children`,N(`310M`)]])),B(`div`,L([[`className`,`stat-desc`],[`children`,N(`Jan 1st - Feb 1st`)]]))]]]))),B(`div`,V(`stat`,L([[`className`,`place-items-center place-content-center`],[`children`,[B(`div`,L([[`className`,`stat-title`],[`children`,N(`New Users`)]])),B(`div`,L([[`className`,`stat-value`],[`children`,N(`4,200`)]])),B(`div`,V(`stat-desc`,L([[`className`,`text-success`],[`children`,N(`↗︎ 400 (22%)`)]])))]]]))),B(`div`,V(`stat`,L([[`className`,`place-items-center place-content-center`],[`children`,[B(`div`,L([[`className`,`stat-title`],[`children`,N(`New Registers`)]])),B(`div`,L([[`className`,`stat-value`],[`children`,N(`1,200`)]])),B(`div`,V(`stat-desc`,L([[`className`,`text-error`],[`children`,N(`↘︎ 90 (14%)`)]])))]]])))]]]))),(0,_.createElement)(`div`,C(),e)))})();function Cc(){return(0,_.createElement)(_.Fragment,C(),bc,xc,Sc)}var wc=q(`Basic`,`Daisy.status [\r
    status.error\r
    status.xl\r
]`,(()=>{let e=Ur(L([[`className`,`status-error`],[`className`,`status-xl`]]));return(0,_.createElement)(`div`,C(),e)})()),Tc=(()=>{let e;return q(`Ping animation`,`Html.div [\r
    Html.div [\r
        prop.className "inline-grid *:[grid-area:1/1]"\r
        prop.children [\r
            Daisy.status [ status.primary; prop.className "animate-ping" ]\r
            Daisy.status [ status.primary ]\r
        ]\r
    ]\r
    Html.text " Unread messages"\r
]`,(e=L([B(`div`,L([[`className`,`inline-grid *:[grid-area:1/1]`],[`children`,[Ur(L([[`className`,`status-primary`],[`className`,`animate-ping`]])),Ur(N([`className`,`status-primary`]))]]])),` Unread messages`]),(0,_.createElement)(`div`,C(),...e)))})();function Ec(){return(0,_.createElement)(_.Fragment,C(),wc,Tc)}var Dc=(()=>{let e;return q(`Horizontal Steps`,`Daisy.steps [\r
    Daisy.step [step.primary; prop.text "Register"]\r
    Daisy.step [step.primary; prop.text "Choose Plan"]\r
    Daisy.step "Purchase"\r
    Daisy.step "Receive Product"\r
]`,(e=B(`ul`,L([[`className`,`steps`],[`children`,[B(`li`,V(`step`,L([[`className`,`step-primary`],[`children`,N(`Register`)]]))),B(`li`,V(`step`,L([[`className`,`step-primary`],[`children`,N(`Choose Plan`)]]))),B(`li`,L([[`className`,`step`],[`children`,N(`Purchase`)]])),B(`li`,L([[`className`,`step`],[`children`,N(`Receive Product`)]]))]]])),(0,_.createElement)(`div`,C(),e)))})(),Oc=(()=>{let e;return q(`Vertical Steps`,`Daisy.steps [\r
    steps.vertical\r
    prop.children [\r
        Daisy.step [step.primary; prop.text "Register"]\r
        Daisy.step [step.primary; prop.text "Choose Plan"]\r
        Daisy.step "Purchase"\r
        Daisy.step "Receive Product"\r
    ]\r
]`,(e=B(`ul`,V(`steps`,L([[`className`,`steps-vertical`],[`children`,[B(`li`,V(`step`,L([[`className`,`step-primary`],[`children`,N(`Register`)]]))),B(`li`,V(`step`,L([[`className`,`step-primary`],[`children`,N(`Choose Plan`)]]))),B(`li`,L([[`className`,`step`],[`children`,N(`Purchase`)]])),B(`li`,L([[`className`,`step`],[`children`,N(`Receive Product`)]]))]]]))),(0,_.createElement)(`div`,C(),e)))})(),kc=(()=>{let e;return q(`Icons`,`Daisy.steps [\r
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
]`,(e=B(`ul`,L([[`className`,`steps`],[`children`,[B(`li`,L([[`className`,`step`],[`children`,[B(`span`,L([[`className`,`step-icon`],[`children`,[`😕`]]])),`Step 1`]]])),B(`li`,L([[`className`,`step`],[`children`,[B(`span`,L([[`className`,`step-icon`],[`children`,[`😃`]]])),`Step 2`]]])),B(`li`,L([[`className`,`step`],[`children`,[B(`span`,L([[`className`,`step-icon`],[`children`,[`😍`]]])),`Step 3`]]]))]]])),(0,_.createElement)(`div`,C(),e)))})(),Ac=(()=>{let e;return q(`Custom Content`,`Daisy.steps [\r
    Daisy.step [step.content "?"; step.primary; prop.text "Step 1"]\r
    Daisy.step [step.content "!"; step.secondary; prop.text "Step 2"]\r
    Daisy.step [step.content "✓"; step.accent; prop.text "Step 3"]\r
    Daisy.step [step.content "✕"; step.error; prop.text "Step 4"]\r
    Daisy.step [step.content "★"; step.info; prop.text "Step 5"]\r
    Daisy.step [step.content ""; step.success; prop.text "Step 6"]\r
    Daisy.step [step.content "✕"; step.warning; prop.text "Step 7"]\r
    Daisy.step [step.content "●"; prop.text "Step 8"]\r
]`,(e=B(`ul`,L([[`className`,`steps`],[`children`,[B(`li`,V(`step`,L([[`data-content`,`?`],[`className`,`step-primary`],[`children`,N(`Step 1`)]]))),B(`li`,V(`step`,L([[`data-content`,`!`],[`className`,`step-secondary`],[`children`,N(`Step 2`)]]))),B(`li`,V(`step`,L([[`data-content`,`✓`],[`className`,`step-accent`],[`children`,N(`Step 3`)]]))),B(`li`,V(`step`,L([[`data-content`,`✕`],[`className`,`step-error`],[`children`,N(`Step 4`)]]))),B(`li`,V(`step`,L([[`data-content`,`★`],[`className`,`step-info`],[`children`,N(`Step 5`)]]))),B(`li`,V(`step`,L([[`data-content`,``],[`className`,`step-success`],[`children`,N(`Step 6`)]]))),B(`li`,V(`step`,L([[`data-content`,`✕`],[`className`,`step-warning`],[`children`,N(`Step 7`)]]))),B(`li`,V(`step`,L([[`data-content`,`●`],[`children`,N(`Step 8`)]])))]]])),(0,_.createElement)(`div`,C(),e)))})();function jc(){return(0,_.createElement)(_.Fragment,C(),Dc,Oc,Ac,kc)}var Mc=(()=>{let e;return q(`Swapping is so easy!`,`Daisy.swap [\r
    swap.flip\r
    prop.children [\r
        Html.input [ prop.type'.checkbox ]\r
        Daisy.swapOn "Ha! 😈 SWAPPED!"\r
        Daisy.swapOff "Click me to swap"\r
    ]\r
]`,(e=B(`label`,V(`swap`,L([[`className`,`swap-flip`],[`children`,[B(`input`,N([`type`,`checkbox`])),B(`div`,L([[`className`,`swap-on`],[`children`,N(`Ha! 😈 SWAPPED!`)]])),B(`div`,L([[`className`,`swap-off`],[`children`,N(`Click me to swap`)]]))]]]))),(0,_.createElement)(`div`,C(),e)))})(),Nc=(()=>{let e;return q(``,`Daisy.swap [\r
    swap.rotate\r
    prop.className "text-9xl"\r
    prop.children [\r
        Html.input [ prop.type'.checkbox ]\r
        Daisy.swapOn "😈"\r
        Daisy.swapOff "😅"\r
    ]\r
]`,(e=B(`label`,V(`swap`,L([[`className`,`swap-rotate`],[`className`,`text-9xl`],[`children`,[B(`input`,N([`type`,`checkbox`])),B(`div`,L([[`className`,`swap-on`],[`children`,N(`😈`)]])),B(`div`,L([[`className`,`swap-off`],[`children`,N(`😅`)]]))]]]))),(0,_.createElement)(`div`,C(),e)))})();function Pc(){return(0,_.createElement)(_.Fragment,C(),Mc,Nc)}var Fc=(()=>{let e;return q(`Simple`,`Daisy.tabs [\r
    Daisy.tab "Tab 1"\r
    Daisy.tab [tab.active; prop.text "Tab 2"]\r
    Daisy.tab "Tab 3"\r
]`,(e=B(`div`,L([[`className`,`tabs`],[`children`,[B(`a`,L([[`className`,`tab`],[`children`,N(`Tab 1`)]])),B(`a`,V(`tab`,L([[`className`,`tab-active`],[`children`,N(`Tab 2`)]]))),B(`a`,L([[`className`,`tab`],[`children`,N(`Tab 3`)]]))]]])),(0,_.createElement)(`div`,C(),e)))})(),Ic=(()=>{let e;return q(`Bordered`,`Daisy.tabs [\r
    tabs.border\r
    prop.children [\r
        Daisy.tab [prop.text "Tab 1"]\r
        Daisy.tab [tab.active; prop.text "Tab 2"]\r
        Daisy.tab [prop.text "Tab 3"]\r
    ]\r
]`,(e=B(`div`,V(`tabs`,L([[`className`,`tabs-border`],[`children`,[B(`a`,V(`tab`,N([`children`,N(`Tab 1`)]))),B(`a`,V(`tab`,L([[`className`,`tab-active`],[`children`,N(`Tab 2`)]]))),B(`a`,V(`tab`,N([`children`,N(`Tab 3`)])))]]]))),(0,_.createElement)(`div`,C(),e)))})(),Lc=(()=>{let e;return q(`Lifted`,`Daisy.tabs [\r
    tabs.lift\r
    prop.children [\r
        Daisy.tab [prop.text "Tab 1"]\r
        Daisy.tab [tab.active; prop.text "Tab 2"]\r
        Daisy.tab [prop.text "Tab 3"]\r
    ]\r
]`,(e=B(`div`,V(`tabs`,L([[`className`,`tabs-lift`],[`children`,[B(`a`,V(`tab`,N([`children`,N(`Tab 1`)]))),B(`a`,V(`tab`,L([[`className`,`tab-active`],[`children`,N(`Tab 2`)]]))),B(`a`,V(`tab`,N([`children`,N(`Tab 3`)])))]]]))),(0,_.createElement)(`div`,C(),e)))})(),Rc=(()=>{let e;return q(`Boxed`,`Daisy.tabs [\r
    tabs.box\r
    prop.children [\r
        Daisy.tab [prop.text "Tab 1"]\r
        Daisy.tab [tab.active; prop.text "Tab 2"]\r
        Daisy.tab [prop.text "Tab 3"]\r
    ]\r
]`,(e=B(`div`,V(`tabs`,L([[`className`,`tabs-box`],[`children`,[B(`a`,V(`tab`,N([`children`,N(`Tab 1`)]))),B(`a`,V(`tab`,L([[`className`,`tab-active`],[`children`,N(`Tab 2`)]]))),B(`a`,V(`tab`,N([`children`,N(`Tab 3`)])))]]]))),(0,_.createElement)(`div`,C(),e)))})(),zc=(()=>{let e;return q(`Sizes`,`let sizes = [\r
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
]`,(e=j(k(()=>Qn(e=>{let t,n=e[1];return A((t=N(B(`div`,V(`tabs`,L([e[0],[`className`,`tabs-lift`],[`children`,[B(`a`,V(`tab`,N([`children`,N(n)]))),B(`a`,V(`tab`,L([[`className`,`tab-active`],[`children`,N(n)]]))),B(`a`,V(`tab`,N([`children`,N(n)])))]]])))),(0,_.createElement)(`div`,C(),...t)))},[[[`className`,`tabs-xs`],`xs`],[[`className`,`tabs-sm`],`sm`],[[`className`,`tabs-md`],`md`],[[`className`,`tabs-lg`],`lg`]]))),(0,_.createElement)(`div`,C(),...e)))})();function Bc(){return(0,_.createElement)(_.Fragment,C(),Fc,Ic,Lc,Rc,zc)}var Vc=(()=>{let e,t,n,r,i,a,o,s;return q(`Simple`,`Daisy.table [\r
    Html.thead [Html.tr [Html.th ""; Html.th "Name"; Html.th "Job"; Html.th "Favorite Color"]]\r
    Html.tbody [\r
        Html.tr [Html.td "1"; Html.td "Cy Ganderton"; Html.td "Quality Control Specialist"; Html.td "Blue"]\r
        Html.tr [Html.td "2"; Html.td "Hart Hagerty"; Html.td "Desktop Support Technician"; Html.td "Purple"]\r
        Html.tr [Html.td "3"; Html.td "Brice Swyre"; Html.td "Tax Accountant"; Html.td "Red"]\r
        Html.tr [Html.td "4"; Html.td "Marjy Ferencz"; Html.td "Office Assistant I"; Html.td "Crimson"]\r
    ]\r
]`,(e=B(`table`,L([[`className`,`table`],[`children`,[(t=N((n=L([(0,_.createElement)(`th`,C(),``),(0,_.createElement)(`th`,C(),`Name`),(0,_.createElement)(`th`,C(),`Job`),(0,_.createElement)(`th`,C(),`Favorite Color`)]),(0,_.createElement)(`tr`,C(),...n))),(0,_.createElement)(`thead`,C(),...t)),(r=L([(i=L([(0,_.createElement)(`td`,C(),`1`),(0,_.createElement)(`td`,C(),`Cy Ganderton`),(0,_.createElement)(`td`,C(),`Quality Control Specialist`),(0,_.createElement)(`td`,C(),`Blue`)]),(0,_.createElement)(`tr`,C(),...i)),(a=L([(0,_.createElement)(`td`,C(),`2`),(0,_.createElement)(`td`,C(),`Hart Hagerty`),(0,_.createElement)(`td`,C(),`Desktop Support Technician`),(0,_.createElement)(`td`,C(),`Purple`)]),(0,_.createElement)(`tr`,C(),...a)),(o=L([(0,_.createElement)(`td`,C(),`3`),(0,_.createElement)(`td`,C(),`Brice Swyre`),(0,_.createElement)(`td`,C(),`Tax Accountant`),(0,_.createElement)(`td`,C(),`Red`)]),(0,_.createElement)(`tr`,C(),...o)),(s=L([(0,_.createElement)(`td`,C(),`4`),(0,_.createElement)(`td`,C(),`Marjy Ferencz`),(0,_.createElement)(`td`,C(),`Office Assistant I`),(0,_.createElement)(`td`,C(),`Crimson`)]),(0,_.createElement)(`tr`,C(),...s))]),(0,_.createElement)(`tbody`,C(),...r))]]])),(0,_.createElement)(`div`,C(),e)))})(),Hc=(()=>{let e,t,n,r,i,a,o;return q(`Use your favourite color for making row active`,`Daisy.table [\r
    Html.thead [Html.tr [Html.th ""; Html.th "Name"; Html.th "Job"; Html.th "Favorite Color"]]\r
    Html.tbody [\r
        Html.tr [Html.td "1"; Html.td "Cy Ganderton"; Html.td "Quality Control Specialist"; Html.td "Blue"]\r
        Html.tr [prop.className "bg-yellow-300"; prop.children [Html.td "2"; Html.td "Hart Hagerty"; Html.td "Desktop Support Technician"; Html.td "Purple"]]\r
        Html.tr [Html.td "3"; Html.td "Brice Swyre"; Html.td "Tax Accountant"; Html.td "Red"]\r
        Html.tr [Html.td "4"; Html.td "Marjy Ferencz"; Html.td "Office Assistant I"; Html.td "Crimson"]\r
    ]\r
]`,(e=B(`table`,L([[`className`,`table`],[`children`,[(t=N((n=L([(0,_.createElement)(`th`,C(),``),(0,_.createElement)(`th`,C(),`Name`),(0,_.createElement)(`th`,C(),`Job`),(0,_.createElement)(`th`,C(),`Favorite Color`)]),(0,_.createElement)(`tr`,C(),...n))),(0,_.createElement)(`thead`,C(),...t)),(r=L([(i=L([(0,_.createElement)(`td`,C(),`1`),(0,_.createElement)(`td`,C(),`Cy Ganderton`),(0,_.createElement)(`td`,C(),`Quality Control Specialist`),(0,_.createElement)(`td`,C(),`Blue`)]),(0,_.createElement)(`tr`,C(),...i)),B(`tr`,L([[`className`,`bg-yellow-300`],[`children`,[(0,_.createElement)(`td`,C(),`2`),(0,_.createElement)(`td`,C(),`Hart Hagerty`),(0,_.createElement)(`td`,C(),`Desktop Support Technician`),(0,_.createElement)(`td`,C(),`Purple`)]]])),(a=L([(0,_.createElement)(`td`,C(),`3`),(0,_.createElement)(`td`,C(),`Brice Swyre`),(0,_.createElement)(`td`,C(),`Tax Accountant`),(0,_.createElement)(`td`,C(),`Red`)]),(0,_.createElement)(`tr`,C(),...a)),(o=L([(0,_.createElement)(`td`,C(),`4`),(0,_.createElement)(`td`,C(),`Marjy Ferencz`),(0,_.createElement)(`td`,C(),`Office Assistant I`),(0,_.createElement)(`td`,C(),`Crimson`)]),(0,_.createElement)(`tr`,C(),...o))]),(0,_.createElement)(`tbody`,C(),...r))]]])),(0,_.createElement)(`div`,C(),e)))})(),Uc=(()=>{let e,t,n,r,i,a,o;return q(`Hover row using classic Tailwind approach`,`Daisy.table [\r
    Html.thead [Html.tr [Html.th ""; Html.th "Name"; Html.th "Job"; Html.th "Favorite Color"]]\r
    Html.tbody [\r
        Html.tr [Html.td "1"; Html.td "Cy Ganderton"; Html.td "Quality Control Specialist"; Html.td "Blue"]\r
        Html.tr [prop.className "hover:bg-yellow-300"; prop.children [Html.td "2"; Html.td "Hart Hagerty"; Html.td "Desktop Support Technician"; Html.td "Purple"]]\r
        Html.tr [Html.td "3"; Html.td "Brice Swyre"; Html.td "Tax Accountant"; Html.td "Red"]\r
        Html.tr [Html.td "4"; Html.td "Marjy Ferencz"; Html.td "Office Assistant I"; Html.td "Crimson"]\r
    ]\r
]`,(e=B(`table`,L([[`className`,`table`],[`children`,[(t=N((n=L([(0,_.createElement)(`th`,C(),``),(0,_.createElement)(`th`,C(),`Name`),(0,_.createElement)(`th`,C(),`Job`),(0,_.createElement)(`th`,C(),`Favorite Color`)]),(0,_.createElement)(`tr`,C(),...n))),(0,_.createElement)(`thead`,C(),...t)),(r=L([(i=L([(0,_.createElement)(`td`,C(),`1`),(0,_.createElement)(`td`,C(),`Cy Ganderton`),(0,_.createElement)(`td`,C(),`Quality Control Specialist`),(0,_.createElement)(`td`,C(),`Blue`)]),(0,_.createElement)(`tr`,C(),...i)),B(`tr`,L([[`className`,`hover:bg-yellow-300`],[`children`,[(0,_.createElement)(`td`,C(),`2`),(0,_.createElement)(`td`,C(),`Hart Hagerty`),(0,_.createElement)(`td`,C(),`Desktop Support Technician`),(0,_.createElement)(`td`,C(),`Purple`)]]])),(a=L([(0,_.createElement)(`td`,C(),`3`),(0,_.createElement)(`td`,C(),`Brice Swyre`),(0,_.createElement)(`td`,C(),`Tax Accountant`),(0,_.createElement)(`td`,C(),`Red`)]),(0,_.createElement)(`tr`,C(),...a)),(o=L([(0,_.createElement)(`td`,C(),`4`),(0,_.createElement)(`td`,C(),`Marjy Ferencz`),(0,_.createElement)(`td`,C(),`Office Assistant I`),(0,_.createElement)(`td`,C(),`Crimson`)]),(0,_.createElement)(`tr`,C(),...o))]),(0,_.createElement)(`tbody`,C(),...r))]]])),(0,_.createElement)(`div`,C(),e)))})(),Wc=(()=>{let e,t,n,r,i,a,o,s;return q(`Zebra`,`Daisy.table [\r
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
]`,(e=B(`table`,V(`table`,L([[`className`,`table-zebra`],[`children`,[(t=N((n=L([(0,_.createElement)(`th`,C(),``),(0,_.createElement)(`th`,C(),`Name`),(0,_.createElement)(`th`,C(),`Job`),(0,_.createElement)(`th`,C(),`Favorite Color`)]),(0,_.createElement)(`tr`,C(),...n))),(0,_.createElement)(`thead`,C(),...t)),(r=L([(i=L([(0,_.createElement)(`td`,C(),`1`),(0,_.createElement)(`td`,C(),`Cy Ganderton`),(0,_.createElement)(`td`,C(),`Quality Control Specialist`),(0,_.createElement)(`td`,C(),`Blue`)]),(0,_.createElement)(`tr`,C(),...i)),(a=L([(0,_.createElement)(`td`,C(),`2`),(0,_.createElement)(`td`,C(),`Hart Hagerty`),(0,_.createElement)(`td`,C(),`Desktop Support Technician`),(0,_.createElement)(`td`,C(),`Purple`)]),(0,_.createElement)(`tr`,C(),...a)),(o=L([(0,_.createElement)(`td`,C(),`3`),(0,_.createElement)(`td`,C(),`Brice Swyre`),(0,_.createElement)(`td`,C(),`Tax Accountant`),(0,_.createElement)(`td`,C(),`Red`)]),(0,_.createElement)(`tr`,C(),...o)),(s=L([(0,_.createElement)(`td`,C(),`4`),(0,_.createElement)(`td`,C(),`Marjy Ferencz`),(0,_.createElement)(`td`,C(),`Office Assistant I`),(0,_.createElement)(`td`,C(),`Crimson`)]),(0,_.createElement)(`tr`,C(),...s))]),(0,_.createElement)(`tbody`,C(),...r))]]]))),(0,_.createElement)(`div`,C(),e)))})(),Gc=(()=>{let e,t,n,r,i,a,o,s;return q(`Table With Visuals`,`let row (url: string, name: string, country: string, group: string, title: string, color: string) =\r
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
]`,(e=(e=>{let t,n,r,i,a,o=L([(t=N(B(`input`,V(`checkbox`,N([`type`,`checkbox`])))),(0,_.createElement)(`td`,C(),...t)),(n=N(B(`div`,L([[`className`,Zt(` `,[`flex`,`items-center`,`space-x-3`])],[`children`,[B(`div`,L([[`className`,`avatar`],[`children`,[B(`div`,L([Wr([`className`,`mask mask-squircle`],[`className`,`w-12 h-12`]),[`children`,[B(`img`,N([`src`,e[0]]))]]]))]]])),(r=L([(0,_.createElement)(`div`,C(),e[1]),(0,_.createElement)(`div`,C(),e[2])]),(0,_.createElement)(`div`,C(),...r))]]]))),(0,_.createElement)(`td`,C(),...n)),(i=L([(0,_.createElement)(`span`,C(),e[3]),B(`br`,M()),B(`div`,V(`badge`,L([[`className`,`badge-sm`],[`className`,`badge-outline`],[`children`,N(e[4])]])))]),(0,_.createElement)(`td`,C(),...i)),(0,_.createElement)(`td`,C(),e[5]),(a=N(B(`button`,V(`btn`,L([[`className`,`btn-ghost`],[`className`,`btn-xs`],[`children`,N(`Details`)]])))),(0,_.createElement)(`td`,C(),...a))]);return(0,_.createElement)(`tr`,C(),...o)}),t=B(`table`,V(`table`,N([`children`,[(n=N((r=L([(i=N(B(`input`,V(`checkbox`,N([`type`,`checkbox`])))),(0,_.createElement)(`th`,C(),...i)),(0,_.createElement)(`th`,C(),`Name`),(0,_.createElement)(`th`,C(),`Job`),(0,_.createElement)(`th`,C(),`Favorite Color`),(0,_.createElement)(`th`,C(),``)]),(0,_.createElement)(`tr`,C(),...r))),(0,_.createElement)(`thead`,C(),...n)),(a=L([e([`https://img.daisyui.com/images/profile/demo/2@94.webp`,`Hart Hagerty`,`United States`,`Zemlak, Daniel and Leannon`,`Desktop Support Technician`,`Purple`]),e([`https://img.daisyui.com/images/profile/demo/3@94.webp`,`Brice Swyre`,`China`,`Carroll Group`,`Tax Accountant`,`Red`]),e([`https://img.daisyui.com/images/profile/demo/4@94.webp`,`Marjy Ferencz`,`Russia`,`Rowe-Schoen`,`Office Assistant I`,`Crimson`]),e([`https://img.daisyui.com/images/profile/demo/5@94.webp`,`Yancy Tear`,`Brazil`,`Wyman-Ledner`,`Community Outreach Specialist`,`Indigo`])]),(0,_.createElement)(`tbody`,C(),...a)),(o=N((s=L([(0,_.createElement)(`th`,C(),``),(0,_.createElement)(`th`,C(),`Name`),(0,_.createElement)(`th`,C(),`Job`),(0,_.createElement)(`th`,C(),`Favorite Color`),(0,_.createElement)(`th`,C(),``)]),(0,_.createElement)(`tr`,C(),...s))),(0,_.createElement)(`thead`,C(),...o))]]))),(0,_.createElement)(`div`,C(),t)))})(),Kc=(()=>{let e,t,n,r,i,a,o;return q(`Very tiny table`,`let header = ["";"NAME";"JOB";"COMPANY";"LOCATION";"LAST LOGIN";"FAVORITE COLOR"]\r
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
]`,(e=L([``,`NAME`,`JOB`,`COMPANY`,`LOCATION`,`LAST LOGIN`,`FAVORITE COLOR`]),t=B(`table`,V(`table`,L([[`className`,`table-xs`],[`children`,[(n=N((r=j(k(()=>Jn(e=>(0,_.createElement)(`th`,C(),e),e))),(0,_.createElement)(`tr`,C(),...r))),(0,_.createElement)(`thead`,C(),...n)),(i=j(k(()=>Jn(e=>{let t=j(k(()=>Jn(e=>(0,_.createElement)(`td`,C(),e),e)));return(0,_.createElement)(`tr`,C(),...t)},[L([`1`,`Cy Ganderton`,`Quality Control Specialist`,`Littel; Schaden and Vandervort`,`Canada`,`12/16/2020`,`Blue`]),L([`2`,`Hart Hagerty`,`Desktop Support Technician`,`Zemlak; Daniel and Leannon`,`United States`,`12/5/2020`,`Purple`]),L([`3`,`Brice Swyre`,`Tax Accountant`,`Carroll Group`,`China`,`8/15/2020`,`Red`]),L([`4`,`Marjy Ferencz`,`Office Assistant I`,`Rowe-Schoen`,`Russia`,`3/25/2021`,`Crimson`]),L([`5`,`Yancy Tear`,`Community Outreach Specialist`,`Wyman-Ledner`,`Brazil`,`5/22/2020`,`Indigo`]),L([`6`,`Irma Vasilik`,`Editor`,`Wiza; Bins and Emard`,`Venezuela`,`12/8/2020`,`Purple`]),L([`7`,`Meghann Durtnal`,`Staff Accountant IV`,`Schuster-Schimmel`,`Philippines`,`2/17/2021`,`Yellow`]),L([`8`,`Sammy Seston`,`Accountant I`,`O'Hara; Welch and Keebler`,`Indonesia`,`5/23/2020`,`Crimson`]),L([`9`,`Lesya Tinham`,`Safety Technician IV`,`Turner-Kuhlman`,`Philippines`,`2/21/2021`,`Maroon`]),L([`10`,`Zaneta Tewkesbury`,`VP Marketing`,`Sauer LLC`,`Chad`,`6/23/2020`,`Green`]),L([`11`,`Andy Tipple`,`Librarian`,`Hilpert Group`,`Poland`,`7/9/2020`,`Indigo`]),L([`12`,`Sophi Biles`,`Recruiting Manager`,`Gutmann Inc`,`Indonesia`,`2/12/2021`,`Maroon`]),L([`13`,`Florida Garces`,`Web Developer IV`,`Gaylord; Pacocha and Baumbach`,`Poland`,`5/31/2020`,`Purple`]),L([`14`,`Maribeth Popping`,`Analyst Programmer`,`Deckow-Pouros`,`Portugal`,`4/27/2021`,`Aquamarine`]),L([`15`,`Moritz Dryburgh`,`Dental Hygienist`,`Schiller; Cole and Hackett`,`Sri Lanka`,`8/8/2020`,`Crimson`]),L([`16`,`Reid Semiras`,`Teacher`,`Sporer; Sipes and Rogahn`,`Poland`,`7/30/2020`,`Green`]),L([`17`,`Alec Lethby`,`Teacher`,`Reichel; Glover and Hamill`,`China`,`2/28/2021`,`Khaki`]),L([`18`,`Aland Wilber`,`Quality Control Specialist`,`Kshlerin; Rogahn and Swaniawski`,`Czech Republic`,`9/29/2020`,`Purple`]),L([`19`,`Teddie Duerden`,`Staff Accountant III`,`Pouros; Ullrich and Windler`,`France`,`10/27/2020`,`Aquamarine`]),L([`20`,`Lorelei Blackstone`,`Data Coordiator`,`Witting; Kutch and Greenfelder`,`Kazakhstan`,`6/3/2020`,`Red`])]))),(0,_.createElement)(`tbody`,C(),...i)),(a=N((o=j(k(()=>Jn(e=>(0,_.createElement)(`th`,C(),e),e))),(0,_.createElement)(`tr`,C(),...o))),(0,_.createElement)(`tfoot`,C(),...a))]]]))),(0,_.createElement)(`div`,C(),t)))})();function qc(){return(0,_.createElement)(_.Fragment,C(),Vc,Hc,Uc,Wc,Gc,Kc)}var Jc=(()=>{let e;return q(`Rotate through up to six text items`,`Html.div [
    Html.text "Feliz.DaisyUI is "
    Daisy.textRotate [
        color.textPrimary
        prop.children [
            Html.span [
                Html.span "typed"
                Html.span "expressive"
                Html.span "productive"
            ]
        ]
    ]
]`,B(`div`,L([[`className`,`m-auto text-3xl font-bold`],[`children`,[`Feliz.DaisyUI is `,B(`span`,V(`text-rotate`,L([[`className`,`text-primary`],[`children`,[(e=L([(0,_.createElement)(`span`,C(),`typed`),(0,_.createElement)(`span`,C(),`expressive`),(0,_.createElement)(`span`,C(),`productive`)]),(0,_.createElement)(`span`,C(),...e))]]])))]]])))})();function Yc(){return(0,_.createElement)(_.Fragment,C(),Jc)}var Xc=q(`If a checked checkbox input or a checked radio input with theme-controller class exists in the page, The page will have the same theme as that input's value.`,`Daisy.toggle [\r
    theme.controller\r
    prop.value "synthwave"\r
]`,B(`input`,V(`toggle`,L([[`type`,`checkbox`],[`className`,`theme-controller`],[`value`,`synthwave`]]))));function Zc(){return(0,_.createElement)(_.Fragment,C(),Xc)}var Qc=(()=>{let e,t,n;return q(`Create easy timeline`,`Daisy.timeline [\r
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
]`,B(`ul`,L([[`className`,`timeline`],[`children`,[(e=L([B(`div`,L([[`className`,`timeline-start`],[`children`,N(`1984`)]])),B(`div`,L([[`className`,`timeline-middle`],[`children`,[B(`i`,N([`className`,`fa-solid fa-check-circle`]))]]])),B(`div`,V(`timeline-end`,L([[`className`,`timeline-box`],[`children`,N(`First Macintosh computer`)]]))),B(`hr`,M())]),(0,_.createElement)(`li`,C(),...e)),(t=L([B(`hr`,M()),B(`div`,L([[`className`,`timeline-start`],[`children`,N(`1998`)]])),B(`div`,L([[`className`,`timeline-middle`],[`children`,[B(`i`,N([`className`,`fa-solid fa-check-circle`]))]]])),B(`div`,V(`timeline-end`,L([[`className`,`timeline-box`],[`children`,N(`iMac`)]]))),B(`hr`,M())]),(0,_.createElement)(`li`,C(),...t)),(n=L([B(`hr`,M()),B(`div`,L([[`className`,`timeline-start`],[`children`,N(`2001`)]])),B(`div`,L([[`className`,`timeline-middle`],[`children`,[B(`i`,N([`className`,`fa-solid fa-check-circle`]))]]])),B(`div`,V(`timeline-end`,L([[`className`,`timeline-box`],[`children`,N(`iPod`)]])))]),(0,_.createElement)(`li`,C(),...n))]]])))})(),$c=(()=>{let e,t,n;return q(`Timeline can be also vertical and from both sides`,`Daisy.timeline [\r
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
]`,B(`ul`,V(`timeline`,L([[`className`,`timeline-vertical`],[`children`,[(e=L([B(`div`,V(`timeline-start`,L([[`className`,`timeline-box`],[`children`,N(`1984`)]]))),B(`div`,L([[`className`,`timeline-middle`],[`children`,[B(`i`,N([`className`,`fa-solid fa-check-circle`]))]]])),B(`hr`,M())]),(0,_.createElement)(`li`,C(),...e)),(t=L([B(`hr`,M()),B(`div`,L([[`className`,`timeline-middle`],[`children`,[B(`i`,N([`className`,`fa-solid fa-check-circle`]))]]])),B(`div`,V(`timeline-end`,L([[`className`,`timeline-box`],[`children`,N(`iMac`)]]))),B(`hr`,N([`className`,`bg-primary`]))]),(0,_.createElement)(`li`,C(),...t)),(n=L([B(`hr`,N([`className`,`bg-primary`])),B(`div`,V(`timeline-start`,L([[`className`,`timeline-box`],[`children`,N(`iPod`)]]))),B(`div`,L([[`className`,`timeline-middle`],[`children`,[B(`i`,N([`className`,`fa-solid fa-check-circle text-primary`]))]]]))]),(0,_.createElement)(`li`,C(),...n))]]]))))})();function el(){return(0,_.createElement)(_.Fragment,C(),Qc,$c)}function tl(e){return B(`div`,L([[`className`,`relative`],[`children`,N(e)]]))}var nl=q(`In the middle`,`Daisy.toast [\r
    toast.center\r
    toast.middle\r
    prop.children [\r
        Daisy.alert [\r
            alert.info\r
            prop.text "New mail arrived."\r
        ]\r
    ]\r
]`,tl(B(`div`,V(`toast`,L([[`className`,`toast-center`],[`className`,`toast-middle`],[`className`,`absolute`],[`children`,[B(`div`,V(`alert`,L([[`className`,`alert-info`],[`children`,N(`New mail arrived.`)]])))]]]))))),rl=q(`On the bottom right`,`Daisy.toast [\r
    toast.bottom\r
    prop.children [\r
        Daisy.alert [\r
            alert.warning\r
            prop.text "F# is awesome!"\r
        ]\r
    ]\r
]`,tl(B(`div`,V(`toast`,L([[`className`,`toast-bottom`],[`className`,`absolute`],[`children`,[B(`div`,V(`alert`,L([[`className`,`alert-warning`],[`children`,N(`F# is awesome!`)]])))]]]))))),il=q(`Top left`,`Daisy.toast [\r
    toast.top\r
    toast.start\r
    prop.children [\r
        Daisy.alert [\r
            alert.success\r
            prop.text "Payment successful"\r
        ]\r
    ]\r
]`,tl(B(`div`,V(`toast`,L([[`className`,`toast-top`],[`className`,`toast-start`],[`className`,`absolute`],[`children`,[B(`div`,V(`alert`,L([[`className`,`alert-success`],[`children`,N(`Payment successful`)]])))]]])))));function al(){return(0,_.createElement)(_.Fragment,C(),nl,rl,il)}var ol=q(`Simple`,`Daisy.tooltip [\r
    tooltip.text "hello"\r
    prop.children [Daisy.button.button "Hover me"]\r
]`,(()=>{let e=B(`div`,V(`tooltip`,L([[`data-tip`,`hello`],[`children`,[B(`button`,L([[`className`,`btn`],[`children`,N(`Hover me`)]]))]]])));return(0,_.createElement)(`div`,C(),e)})()),sl=(()=>{let e;return q(`Directions`,`let directions =\r
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
]`,(e=j(k(()=>Qn(e=>{let t=e[1];return A(B(`div`,V(`tooltip`,L([[`className`,`ml-8`],[`data-tip`,t],e[0],[`children`,[B(`button`,L([[`className`,`btn`],[`children`,N(t)]]))]]]))))},[[[`className`,`tooltip-left`],`left`],[[`className`,`tooltip-bottom`],`bottom`],[[`className`,`tooltip-right`],`right`]]))),(0,_.createElement)(`div`,C(),...e)))})(),cl=(()=>{let e;return q(`Colors`,`let colors =\r
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
]`,(e=j(k(()=>Qn(e=>{let t=e[2];return A(B(`div`,V(`tooltip`,L([[`className`,`mt-8`],e[0],[`className`,`tooltip-open`],[`data-tip`,t],[`children`,[B(`button`,V(`btn`,L([e[1],[`children`,N(t)]])))]]]))))},[[[`className`,`tooltip-primary`],[`className`,`btn-primary`],`primary`],[[`className`,`tooltip-secondary`],[`className`,`btn-secondary`],`secondary`],[[`className`,`tooltip-accent`],[`className`,`btn-accent`],`accent`],[[`className`,`tooltip-info`],[`className`,`btn-info`],`info`],[[`className`,`tooltip-success`],[`className`,`btn-success`],`success`],[[`className`,`tooltip-warning`],[`className`,`btn-warning`],`warning`],[[`className`,`tooltip-error`],[`className`,`btn-error`],`error`]]))),(0,_.createElement)(`div`,C(),...e)))})();function ll(){return(0,_.createElement)(_.Fragment,C(),ol,sl,cl)}var ul=(()=>{let e;return q(`Validator with hint - try typing an invalid email address and then click away`,`Html.div [\r
    Daisy.validator.email [\r
        prop.required true\r
        prop.placeholder "mail@site.com"\r
    ]\r
    Daisy.validatorHint "Enter valid email address"\r
]`,(e=L([B(`input`,V(`input validator`,L([[`type`,`email`],[`required`,!0],[`placeholder`,`mail@site.com`]]))),B(`div`,L([[`className`,`validator-hint`],[`children`,N(`Enter valid email address`)]]))]),(0,_.createElement)(`div`,C(),...e)))})(),dl=(()=>{let e;return q(`Password validator with hint - try typing something and then click away`,`Html.div [\r
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
]`,(e=L([B(`input`,V(`input validator`,L([[`type`,`password`],[`required`,!0],[`placeholder`,`Password`],[`minLength`,8],[`pattern`,/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/gu],[`title`,`Must be more than 8 characters, including number, lowercase letter, uppercase letter`]]))),B(`div`,L([[`className`,`validator-hint`],[`children`,[`Must be more than 8 characters, including`,B(`br`,M()),`At least one number`,B(`br`,M()),`At least one lowercase letter`,B(`br`,M()),`At least one uppercase number`,B(`br`,M())]]]))]),(0,_.createElement)(`div`,C(),...e)))})(),fl=(()=>{let e;return q(`Toggle validator with hint - try toggling and untoggling`,`Html.div [\r
    Daisy.validator.toggle [\r
        prop.required true\r
        prop.title "Required"\r
    ]\r
    Daisy.validatorHint "Required"\r
]`,(e=L([B(`input`,V(`toggle validator`,L([[`type`,`checkbox`],[`required`,!0],[`title`,`Required`]]))),B(`div`,L([[`className`,`validator-hint`],[`children`,N(`Required`)]]))]),(0,_.createElement)(`div`,C(),...e)))})();function pl(){return(0,_.createElement)(_.Fragment,C(),ul,dl,fl)}var ml=q(`Default file input`,`Daisy.fieldset [\r
    Daisy.fieldsetLabel "File Selection"\r
    Daisy.file []
]`,(()=>{let e=B(`fieldset`,L([[`className`,`fieldset`],[`children`,[B(`label`,L([[`className`,`fieldset-label`],[`children`,N(`File Selection`)]])),B(`input`,V(`file-input`,N([`type`,`file`])))]]]));return(0,_.createElement)(`div`,C(),e)})()),hl=q(`Default file input on a background`,`Daisy.card [\r
    prop.className "p-10 bg-base-200"\r
    prop.children [\r
        Daisy.fieldset [\r
            Daisy.fieldsetLabel "File Selection"\r
            Daisy.file []
        ]\r
    ]\r
]`,B(`div`,V(`card`,L([[`className`,`p-10 bg-base-200`],[`children`,[B(`fieldset`,L([[`className`,`fieldset`],[`children`,[B(`label`,L([[`className`,`fieldset-label`],[`children`,N(`File Selection`)]])),B(`input`,V(`file-input`,N([`type`,`file`])))]]]))]]])))),gl=q(`File Input ghost (no background)`,`Daisy.card [\r
    prop.className "p-10 bg-base-200"\r
    prop.children [\r
        Daisy.fieldset [\r
            Daisy.fieldsetLabel "File Selection"\r
            Daisy.file [file.ghost]\r
        ]\r
    ]\r
]`,B(`div`,V(`card`,L([[`className`,`p-10 bg-base-200`],[`children`,[B(`fieldset`,L([[`className`,`fieldset`],[`children`,[B(`label`,L([[`className`,`fieldset-label`],[`children`,N(`File Selection`)]])),B(`input`,V(`file-input`,L([[`type`,`file`],[`className`,`file-input-ghost`]])))]]]))]]])))),_l=q(`Disabled file input`,`Daisy.fieldset [\r
    Daisy.fieldsetLabel "Disabled file"\r
    Daisy.file [prop.disabled true]
]`,B(`fieldset`,L([[`className`,`fieldset`],[`children`,[B(`label`,L([[`className`,`fieldset-label`],[`children`,N(`Disabled file`)]])),B(`input`,V(`file-input`,L([[`type`,`file`],[`disabled`,!0]])))]]]))),vl=q(`File Input with colors`,`let colors = [\r
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
        Daisy.file [color]
]`,B(`fieldset`,L([[`className`,`fieldset`],[`children`,j(k(()=>Qn(e=>Gn(A(B(`label`,L([[`className`,`fieldset-label`],[`children`,N(e[1])]]))),k(()=>A(B(`input`,V(`file-input`,L([[`type`,`file`],e[0]])))))),[[[`className`,`file-input-primary`],`primary`],[[`className`,`file-input-secondary`],`secondary`],[[`className`,`file-input-accent`],`accent`],[[`className`,`file-input-info`],`info`],[[`className`,`file-input-success`],`success`],[[`className`,`file-input-warning`],`warning`],[[`className`,`file-input-error`],`error`]])))]]))),yl=q(`File Input with sizes`,`let sizes = [\r
    file.xs, "xs"\r
    file.sm, "sm"\r
    file.md, "md"\r
    file.lg, "lg"\r
]\r
Daisy.fieldset [\r
    for size, sizeText in sizes do\r
        Daisy.fieldsetLabel sizeText\r
        Daisy.file [size]
]`,B(`fieldset`,L([[`className`,`fieldset`],[`children`,j(k(()=>Qn(e=>Gn(A(B(`label`,L([[`className`,`fieldset-label`],[`children`,N(e[1])]]))),k(()=>A(B(`input`,V(`file-input`,L([[`type`,`file`],e[0]])))))),[[[`className`,`file-input-xs`],`xs`],[[`className`,`file-input-sm`],`sm`],[[`className`,`file-input-md`],`md`],[[`className`,`file-input-lg`],`lg`]])))]]))),bl=q(`File input with button`,`Daisy.fieldset [\r
    Daisy.fieldsetLabel "Connected"\r
    Html.div [\r
        prop.className "relative"\r
        prop.children [\r
            Daisy.file [file.primary]
            Daisy.button.button [\r
                button.primary\r
                prop.className "absolute top-0 right-0 rounded-l-none"\r
                prop.text "Upload"\r
            ]\r
        ]\r
    ]\r
]`,B(`fieldset`,L([[`className`,`fieldset`],[`children`,[B(`label`,L([[`className`,`fieldset-label`],[`children`,N(`Connected`)]])),B(`div`,L([[`className`,`relative`],[`children`,[B(`input`,V(`file-input`,L([[`type`,`file`],[`className`,`file-input-primary`],[`className`,`w-full pr-16`]]))),B(`button`,V(`btn`,L([[`className`,`btn-primary`],[`className`,`absolute top-0 right-0 rounded-l-none`],[`children`,N(`Upload`)]])))]]]))]]])));function xl(){return(0,_.createElement)(_.Fragment,C(),ml,hl,gl,_l,vl,yl,bl)}var Sl=q(`Basic`,`Daisy.checkbox []`,B(`input`,V(`checkbox`,N([`type`,`checkbox`])))),Cl=q(`Checked`,`Daisy.checkbox [prop.defaultChecked true]`,B(`input`,V(`checkbox`,L([[`type`,`checkbox`],[`defaultChecked`,!0]])))),wl=q(`Basic Label`,`Daisy.fieldset [\r
    Daisy.fieldsetLabel [\r
        prop.className "justify-between"\r
        prop.children [\r
            Html.text "Remember me"\r
            Daisy.checkbox []\r
        ]\r
    ]\r
]`,B(`fieldset`,L([[`className`,`fieldset`],[`children`,[B(`label`,V(`fieldset-label`,L([[`className`,`justify-between`],[`children`,[`Remember me`,B(`input`,V(`checkbox`,N([`type`,`checkbox`])))]]])))]]]))),Tl=(()=>{let e;return q(`All Sizes and Colors`,`let colors = [\r
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
]`,(e=j(k(()=>Qn(e=>{let t=e[1],n=e[0];return Qn(e=>{let r=e[1],i=e[0];return Gn(A(B(`fieldset`,L([[`className`,`fieldset`],[`children`,[B(`label`,V(`fieldset-label`,L([[`className`,`justify-between`],[`children`,[Wt(Ht(`%s - %s`))(t)(r),B(`input`,V(`checkbox`,L([[`type`,`checkbox`],i,n,[`defaultChecked`,!0]])))]]])))]]]))),k(()=>A(B(`fieldset`,L([[`className`,`fieldset`],[`children`,[B(`label`,V(`fieldset-label`,L([[`className`,`justify-between`],[`children`,[Wt(Ht(`%s - %s (disabled)`))(t)(r),B(`input`,V(`checkbox`,L([[`type`,`checkbox`],i,n,[`disabled`,!0],[`defaultChecked`,!0]])))]]])))]]])))))},[[[`className`,`checkbox-primary`],`primary`],[[`className`,`checkbox-secondary`],`secondary`],[[`className`,`checkbox-accent`],`accent`]])},[[[`className`,`checkbox-lg`],`lg`],[[`className`,`checkbox-md`],`md`],[[`className`,`checkbox-sm`],`sm`],[[`className`,`checkbox-xs`],`xs`]]))),(0,_.createElement)(`div`,C(),...e)))})();function El(){return(0,_.createElement)(_.Fragment,C(),Sl,Cl,wl,Tl)}var Dl=(()=>{let e;return q(`Input with border`,`Daisy.fieldset [\r
    Daisy.fieldsetLabel "Username"\r
    Daisy.input [ prop.placeholder "Username" ]\r
]`,(e=B(`fieldset`,L([[`className`,`fieldset`],[`children`,[B(`label`,L([[`className`,`fieldset-label`],[`children`,N(`Username`)]])),B(`input`,V(`input`,L([[`type`,`text`],[`placeholder`,`Username`]])))]]])),(0,_.createElement)(`div`,C(),e)))})(),Ol=q(`Input with border`,`Daisy.card [\r
    prop.className "p-10 bg-base-200"\r
    prop.children [\r
        Daisy.fieldset [\r
            Daisy.fieldsetLabel "Username"\r
            Daisy.input [prop.placeholder "Username"]\r
        ]\r
    ]\r
]`,B(`div`,V(`card`,L([[`className`,`p-10 bg-base-200`],[`children`,[B(`fieldset`,L([[`className`,`fieldset`],[`children`,[B(`label`,L([[`className`,`fieldset-label`],[`children`,N(`Username`)]])),B(`input`,V(`input`,L([[`type`,`text`],[`placeholder`,`Username`]])))]]]))]]])))),kl=q(`Input ghost (no background)`,`Daisy.card [\r
    prop.className "p-10 bg-base-200"\r
    prop.children [\r
        Daisy.fieldset [\r
            Daisy.fieldsetLabel "Username"\r
            Daisy.input [input.ghost; prop.placeholder "Username"]\r
        ]\r
    ]\r
]`,B(`div`,V(`card`,L([[`className`,`p-10 bg-base-200`],[`children`,[B(`fieldset`,L([[`className`,`fieldset`],[`children`,[B(`label`,L([[`className`,`fieldset-label`],[`children`,N(`Username`)]])),B(`input`,V(`input`,L([[`type`,`text`],[`className`,`input-ghost`],[`placeholder`,`Username`]])))]]]))]]])))),Al=q(`Input ghost (no background)`,`Daisy.fieldset [\r
    Daisy.fieldsetLabel "Disabled input"\r
    Daisy.input [prop.disabled true; prop.placeholder "Username"]\r
]`,B(`fieldset`,L([[`className`,`fieldset`],[`children`,[B(`label`,L([[`className`,`fieldset-label`],[`children`,N(`Disabled input`)]])),B(`input`,V(`input`,L([[`type`,`text`],[`disabled`,!0],[`placeholder`,`Username`]])))]]]))),jl=q(`Input with colors`,`let colors = [\r
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
]`,B(`fieldset`,L([[`className`,`fieldset`],[`children`,j(k(()=>Qn(e=>Gn(A(B(`label`,L([[`className`,`fieldset-label`],[`children`,N(e[1])]]))),k(()=>A(B(`input`,V(`input`,L([[`type`,`text`],e[0],[`placeholder`,`Username`]])))))),[[[`className`,`input-primary`],`primary`],[[`className`,`input-secondary`],`secondary`],[[`className`,`input-accent`],`accent`],[[`className`,`input-info`],`info`],[[`className`,`input-success`],`success`],[[`className`,`input-warning`],`warning`],[[`className`,`input-error`],`error`]])))]]))),Ml=q(`Input with sizes`,`let sizes = [\r
    input.xs, "xs"\r
    input.sm, "sm"\r
    input.md, "md"\r
    input.lg, "lg"\r
]\r
Daisy.fieldset [\r
    for size, sizeText in sizes do\r
        Daisy.fieldsetLabel sizeText\r
        Daisy.input [size; prop.placeholder "Username"]\r
]`,B(`fieldset`,L([[`className`,`fieldset`],[`children`,j(k(()=>Qn(e=>Gn(A(B(`label`,L([[`className`,`fieldset-label`],[`children`,N(e[1])]]))),k(()=>A(B(`input`,V(`input`,L([[`type`,`text`],e[0],[`placeholder`,`Username`]])))))),[[[`className`,`input-xs`],`xs`],[[`className`,`input-sm`],`sm`],[[`className`,`input-md`],`md`],[[`className`,`input-lg`],`lg`]])))]]))),Nl=q(`Input with sizes`,`Daisy.fieldset [\r
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
]`,B(`fieldset`,L([[`className`,`fieldset`],[`children`,[B(`label`,L([[`className`,`fieldset-label`],[`children`,N(`Connected`)]])),B(`div`,L([[`className`,`relative`],[`children`,[B(`input`,V(`input`,L([[`type`,`text`],[`className`,`input-primary`],[`placeholder`,`Search`],[`className`,`w-full pr-16`]]))),B(`button`,V(`btn`,L([[`className`,`btn-primary`],[`className`,`absolute top-0 right-0 rounded-l-none`],[`children`,N(`Go`)]])))]]]))]]])));function Pl(){return(0,_.createElement)(_.Fragment,C(),Dl,Ol,kl,Al,jl,Ml,Nl)}var Fl=q(`Colors`,`Daisy.card [\r
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
]`,B(`div`,V(`card`,N([`children`,[B(`fieldset`,L([[`className`,`fieldset`],[`children`,[B(`label`,V(`fieldset-label`,L([[`className`,`justify-between`],[`children`,[`Neutral`,B(`input`,V(`radio`,L([[`type`,`radio`],[`name`,`colors`]])))]]])))]]])),B(`fieldset`,L([[`className`,`fieldset`],[`children`,[B(`label`,V(`fieldset-label`,L([[`className`,`justify-between`],[`children`,[`Primary`,B(`input`,V(`radio`,L([[`type`,`radio`],[`className`,`radio-primary`],[`name`,`colors`]])))]]])))]]])),B(`fieldset`,L([[`className`,`fieldset`],[`children`,[B(`label`,V(`fieldset-label`,L([[`className`,`justify-between`],[`children`,[`Secondary`,B(`input`,V(`radio`,L([[`type`,`radio`],[`className`,`radio-secondary`],[`name`,`colors`]])))]]])))]]])),B(`fieldset`,L([[`className`,`fieldset`],[`children`,[B(`label`,V(`fieldset-label`,L([[`className`,`justify-between`],[`children`,[`Accent`,B(`input`,V(`radio`,L([[`type`,`radio`],[`className`,`radio-accent`],[`name`,`colors`]])))]]])))]]])),B(`fieldset`,L([[`className`,`fieldset`],[`children`,[B(`label`,V(`fieldset-label`,L([[`className`,`justify-between`],[`children`,[`Disabled`,B(`input`,V(`radio`,L([[`type`,`radio`],[`disabled`,!0],[`name`,`colors`]])))]]])))]]]))]])))),Y=(()=>{let e;return q(`Sizes`,`Html.div [\r
    Daisy.fieldset [Daisy.radio [radio.xs]]\r
    Daisy.fieldset [Daisy.radio [radio.sm]]\r
    Daisy.fieldset [Daisy.radio [radio.md]]\r
    Daisy.fieldset [Daisy.radio [radio.lg]]\r
]`,(e=L([B(`fieldset`,L([[`className`,`fieldset`],[`children`,[B(`input`,V(`radio`,L([[`type`,`radio`],[`name`,`sizes`],[`className`,`radio-xs`]])))]]])),B(`fieldset`,L([[`className`,`fieldset`],[`children`,[B(`input`,V(`radio`,L([[`type`,`radio`],[`name`,`sizes`],[`className`,`radio-sm`]])))]]])),B(`fieldset`,L([[`className`,`fieldset`],[`children`,[B(`input`,V(`radio`,L([[`type`,`radio`],[`name`,`sizes`],[`className`,`radio-md`]])))]]])),B(`fieldset`,L([[`className`,`fieldset`],[`children`,[B(`input`,V(`radio`,L([[`type`,`radio`],[`name`,`sizes`],[`className`,`radio-lg`]])))]]]))]),(0,_.createElement)(`div`,C(),...e)))})();function Il(){return(0,_.createElement)(_.Fragment,C(),Fl,Y)}var X=(()=>{let e;return q(`Colors`,`Html.div [\r
    Daisy.range [prop.max 100; prop.defaultValue 40]\r
    Daisy.range [prop.max 100; prop.defaultValue 50; range.primary]\r
    Daisy.range [prop.max 100; prop.defaultValue 60; range.secondary]\r
    Daisy.range [prop.max 100; prop.defaultValue 70; range.accent]\r
]`,(e=L([B(`input`,V(`range`,L([[`type`,`range`],[`max`,100],[`defaultValue`,40]]))),B(`input`,V(`range`,L([[`type`,`range`],[`max`,100],[`defaultValue`,50],[`className`,`range-primary`]]))),B(`input`,V(`range`,L([[`type`,`range`],[`max`,100],[`defaultValue`,60],[`className`,`range-secondary`]]))),B(`input`,V(`range`,L([[`type`,`range`],[`max`,100],[`defaultValue`,70],[`className`,`range-accent`]])))]),(0,_.createElement)(`div`,C(),...e)))})(),Z=(()=>{let e;return q(`Sizes`,`Html.div [\r
    Daisy.range [prop.max 100; prop.defaultValue 40; range.xs]\r
    Daisy.range [prop.max 100; prop.defaultValue 50; range.sm]\r
    Daisy.range [prop.max 100; prop.defaultValue 60; range.md]\r
    Daisy.range [prop.max 100; prop.defaultValue 70; range.lg]\r
]`,(e=L([B(`input`,V(`range`,L([[`type`,`range`],[`max`,100],[`defaultValue`,40],[`className`,`range-xs`]]))),B(`input`,V(`range`,L([[`type`,`range`],[`max`,100],[`defaultValue`,50],[`className`,`range-sm`]]))),B(`input`,V(`range`,L([[`type`,`range`],[`max`,100],[`defaultValue`,60],[`className`,`range-md`]]))),B(`input`,V(`range`,L([[`type`,`range`],[`max`,100],[`defaultValue`,70],[`className`,`range-lg`]])))]),(0,_.createElement)(`div`,C(),...e)))})();function Q(){return(0,_.createElement)(_.Fragment,C(),X,Z)}var Ll=q(`Basic`,`Daisy.select [\r
    prop.className "w-full max-w-xs"\r
    prop.children [\r
        Html.option "Choose your superpower"\r
        Html.option "telekenesis"\r
        Html.option "time travel"\r
        Html.option "invisibility"\r
    ]\r
]`,B(`select`,V(`select`,L([[`className`,`w-full max-w-xs`],[`children`,[(0,_.createElement)(`option`,C(),`Choose your superpower`),(0,_.createElement)(`option`,C(),`telekenesis`),(0,_.createElement)(`option`,C(),`time travel`),(0,_.createElement)(`option`,C(),`invisibility`)]]])))),Rl=(()=>{let e;return q(`Colors`,`let colors = [\r
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
]`,(e=j(k(()=>Qn(e=>A(B(`select`,V(`select`,L([e[0],[`className`,`w-full max-w-xs`],[`children`,[(0,_.createElement)(`option`,C(),e[1]),(0,_.createElement)(`option`,C(),`telekenesis`),(0,_.createElement)(`option`,C(),`time travel`),(0,_.createElement)(`option`,C(),`invisibility`)]]])))),[[[`className`,`select-primary`],`primary`],[[`className`,`select-secondary`],`secondary`],[[`className`,`select-accent`],`accent`],[[`className`,`select-ghost`],`ghost`],[[`className`,`select-error`],`error`],[[`className`,`select-info`],`info`],[[`className`,`select-success`],`success`],[[`className`,`select-warning`],`warning`]]))),(0,_.createElement)(`div`,C(),...e)))})(),zl=(()=>{let e;return q(`Sizes`,`let colors = [\r
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
]`,(e=j(k(()=>Qn(e=>A(B(`select`,V(`select`,L([e[0],[`className`,`w-full max-w-xs`],[`children`,[(0,_.createElement)(`option`,C(),e[1]),(0,_.createElement)(`option`,C(),`telekenesis`),(0,_.createElement)(`option`,C(),`time travel`),(0,_.createElement)(`option`,C(),`invisibility`)]]])))),[[[`className`,`select-xs`],`xs`],[[`className`,`select-sm`],`sm`],[[`className`,`select-md`],`md`],[[`className`,`select-lg`],`lg`]]))),(0,_.createElement)(`div`,C(),...e)))})(),Bl=q(`Disabled`,`Daisy.select [\r
    prop.disabled true\r
    prop.className "w-full max-w-xs"\r
    prop.children [\r
        Html.option "Choose your superpower"\r
        Html.option "telekinesis"\r
        Html.option "time travel"\r
        Html.option "invisibility"\r
    ]\r
]\r
`,B(`select`,V(`select`,L([[`disabled`,!0],[`className`,`w-full max-w-xs`],[`children`,[(0,_.createElement)(`option`,C(),`Choose your superpower`),(0,_.createElement)(`option`,C(),`telekinesis`),(0,_.createElement)(`option`,C(),`time travel`),(0,_.createElement)(`option`,C(),`invisibility`)]]]))));function Vl(){return(0,_.createElement)(_.Fragment,C(),Ll,Rl,zl,Bl)}var Hl=q(`Basic`,`Daisy.fieldset [\r
    Daisy.fieldsetLabel "Your bio"\r
    Daisy.textarea [\r
        prop.placeholder "Bio"\r
        prop.className "h-24"\r
    ]\r
]`,B(`fieldset`,L([[`className`,`fieldset`],[`children`,[B(`label`,L([[`className`,`fieldset-label`],[`children`,N(`Your bio`)]])),B(`textarea`,V(`textarea`,L([[`placeholder`,`Bio`],[`className`,`h-24`]])))]]]))),Ul=(()=>{let e;return q(`Colors`,`let colors = [\r
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
]`,(e=j(k(()=>Qn(e=>{let t=e[1];return A(B(`fieldset`,L([[`className`,`fieldset`],[`children`,[B(`label`,L([[`className`,`fieldset-label`],[`children`,N(t)]])),B(`textarea`,V(`textarea`,L([e[0],[`placeholder`,t],[`className`,`h-24`]])))]]])))},[[[`className`,`textarea-primary`],`primary`],[[`className`,`textarea-secondary`],`secondary`],[[`className`,`textarea-accent`],`accent`],[[`className`,`textarea-info`],`info`],[[`className`,`textarea-success`],`success`],[[`className`,`textarea-warning`],`warning`],[[`className`,`textarea-error`],`error`]]))),(0,_.createElement)(`div`,C(),...e)))})();function Wl(){return(0,_.createElement)(_.Fragment,C(),Hl,Ul)}var Gl=q(`Basic`,`Daisy.toggle []`,B(`input`,V(`toggle`,N([`type`,`checkbox`])))),Kl=q(`Toggle with label and container`,`Daisy.card [\r
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
]`,B(`div`,V(`card`,L([[`className`,`card-border`],[`children`,[B(`fieldset`,L([[`className`,`fieldset`],[`children`,[B(`label`,V(`fieldset-label`,L([[`className`,`justify-between`],[`children`,[`Remember me`,B(`input`,V(`toggle`,N([`type`,`checkbox`])))]]])))]]]))]]])))),ql=q(`Toggle with label and container`,`let colors = [\r
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
]`,B(`div`,V(`card`,L([[`className`,`card-border`],[`children`,j(k(()=>Qn(e=>A(B(`fieldset`,L([[`className`,`fieldset`],[`children`,[B(`label`,V(`fieldset-label`,L([[`className`,`justify-between`],[`children`,[e[1],B(`input`,V(`toggle`,L([[`type`,`checkbox`],e[0],[`defaultChecked`,!0]])))]]])))]]]))),[[[`className`,`toggle-primary`],`primary`],[[`className`,`toggle-secondary`],`secondary`],[[`className`,`toggle-accent`],`accent`]])))]]))));function Jl(){return(0,_.createElement)(_.Fragment,C(),Gl,Kl,ql)}var Yl=q(`Browser mockup with toolbar`,`Daisy.mockupBrowser [
    prop.className "border" ++ color.borderBase300
    prop.children [
        Daisy.mockupBrowserToolbar [
            Html.div [
                prop.className "input"
                prop.text "https://daisyui.com"
            ]
        ]
        Html.div [
            prop.className "grid h-48 place-content-center border-t border-base-300"
            prop.text "Hello!"
        ]
    ]
]`,B(`div`,V(`mockup-browser`,L([Wr([`className`,`border`],[`className`,`border-base-300`]),[`children`,[B(`div`,L([[`className`,`mockup-browser-toolbar`],[`children`,[B(`div`,L([[`className`,`input`],[`children`,N(`https://daisyui.com`)]]))]]])),B(`div`,L([[`className`,`grid h-48 place-content-center border-t border-base-300`],[`children`,N(`Hello!`)]]))]]]))));function Xl(){return(0,_.createElement)(_.Fragment,C(),Yl)}var Zl=q(`No prefix`,`Daisy.mockupCode [Html.pre [Html.code [prop.text "npm i daisyui"]]]`,B(`div`,L([[`className`,`mockup-code`],[`children`,[(()=>{let e=N(B(`code`,N([`children`,N(`npm i daisyui`)])));return(0,_.createElement)(`pre`,C(),...e)})()]]]))),Ql=q(`Prefix`,`Daisy.mockupCode [\r
    Html.pre [\r
        mockupCode.prefix "$"\r
        prop.children [\r
            Html.code [prop.text "npm i daisyui"]\r
        ]\r
    ]\r
]`,B(`div`,L([[`className`,`mockup-code`],[`children`,[B(`pre`,L([[`data-prefix`,`$`],[`children`,[B(`code`,N([`children`,N(`npm i daisyui`)]))]]]))]]])));function $l(){return(0,_.createElement)(_.Fragment,C(),Zl,Ql)}var eu=(()=>{let e;return q(`iPhone mockup`,`Html.div [\r
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
]`,(e=N(B(`div`,V(`mockup-phone`,L([[`className`,`bg-base-300`],[`children`,[B(`div`,V(`mockup-phone-camera`,M())),B(`div`,V(`mockup-phone-display`,L([[`className`,`grid place-content-center`],[`children`,N(`Hi.`)]])))]]])))),(0,_.createElement)(`div`,C(),...e)))})(),tu=(()=>{let e;return q(`iPhone with color`,`Html.div [\r
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
]`,(e=N(B(`div`,V(`mockup-phone`,L([[`className`,`bg-base-300`],[`className`,`border-primary`],[`children`,[B(`div`,V(`mockup-phone-camera`,M())),B(`div`,V(`mockup-phone-display`,L([[`className`,`grid place-content-center`],[`children`,N(`Hi.`)]])))]]])))),(0,_.createElement)(`div`,C(),...e)))})(),nu=(()=>{let e;return q(`Phone sizes`,`let phones = [\r
    "w-[320px] h-[568px]", "phone1", color.borderPrimary\r
    "w-[375px] h-[667px]", "phone2", color.borderAccent\r
    "w-[414px] h-[736px]", "phone3", color.borderError\r
    "w-[375px] h-[812px]", "phone4", color.borderInfo\r
    "w-[414px] h-[896px]", "phone5", color.borderSuccess\r
    "w-[320px] h-[1024px]", "phone6", color.borderWarning\r
]\r
Html.div [\r
    for phone, phoneText, borderColor in phones do\r
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
]`,(e=j(k(()=>Qn(e=>A(B(`div`,V(`mockup-phone`,L([[`className`,`bg-base-300`],e[2],[`children`,[B(`div`,V(`mockup-phone-camera`,M())),B(`div`,V(`mockup-phone-display`,L([[`className`,Xt(`grid place-content-center `,e[0])],[`children`,N(e[1])]])))]]])))),[[`w-[320px] h-[568px]`,`phone1`,[`className`,`border-primary`]],[`w-[375px] h-[667px]`,`phone2`,[`className`,`border-accent`]],[`w-[414px] h-[736px]`,`phone3`,[`className`,`border-error`]],[`w-[375px] h-[812px]`,`phone4`,[`className`,`border-info`]],[`w-[414px] h-[896px]`,`phone5`,[`className`,`border-success`]],[`w-[320px] h-[1024px]`,`phone6`,[`className`,`border-warning`]]]))),(0,_.createElement)(`div`,C(),...e)))})();function ru(){return(0,_.createElement)(_.Fragment,C(),eu,tu,nu)}var iu=(()=>{let e;return q(`Simple`,`Daisy.mockupWindow [\r
    prop.className "border" ++ color.borderBase300\r
    prop.children [\r
        Html.div [\r
            prop.className "flex justify-center px-4 py-16 border-t border-base-300"\r
            prop.text "Hello!"\r
        ]\r
    ]\r
]]`,(e=B(`div`,V(`mockup-window`,L([Wr([`className`,`border`],[`className`,`border-base-300`]),[`children`,[B(`div`,L([[`className`,`flex justify-center px-4 py-16 border-t border-base-300`],[`children`,N(`Hello!`)]]))]]]))),(0,_.createElement)(`div`,C(),e)))})(),au=(()=>{let e;return q(`With background color`,`Daisy.mockupWindow [\r
    color.bgBase300\r
    prop.children [\r
        Html.div [\r
            prop.className "flex justify-center px-4 py-16" ++ color.bgBase200\r
            prop.text "Hello!"\r
        ]\r
    ]\r
]`,(e=B(`div`,V(`mockup-window`,L([[`className`,`bg-base-300`],[`children`,[B(`div`,L([Wr([`className`,`flex justify-center px-4 py-16`],[`className`,`bg-base-200`]),[`children`,N(`Hello!`)]]))]]]))),(0,_.createElement)(`div`,C(),e)))})();function ou(){return(0,_.createElement)(_.Fragment,C(),iu,au)}function su(){let e=[B(`div`,L([[`className`,`description`],[`children`,[`First of all you need to follow the `,B(`a`,L([[`className`,`link`],[`href`,`https://daisyui.com/docs/install`],[`children`,N(`DaisyUI installation steps`)]])),` and then proceed with installing `,B(`a`,L([[`className`,`link`],[`href`,`https://www.nuget.org/packages/Feliz.DaisyUI`],[`children`,N(`Feliz.DaisyUI NuGet`)]])),`.`]]])),B(`div`,L([[`className`,`description`],[`children`,[`Using NuGet package command`]]])),B(`div`,L([[`className`,`max-w-xl`],[`children`,[B(`div`,L([[`className`,`mockup-code`],[`children`,[B(`pre`,L([[`data-prefix`,`$`],[`children`,[(0,_.createElement)(`code`,C(),`Install-Package Feliz.DaisyUI`)]]]))]]]))]]])),B(`div`,L([[`className`,`description`],[`children`,[`or Paket`]]])),B(`div`,L([[`className`,`max-w-xl`],[`children`,[B(`div`,L([[`className`,`mockup-code`],[`children`,[B(`pre`,L([[`data-prefix`,`$`],[`children`,[(0,_.createElement)(`code`,C(),`paket add Feliz.DaisyUI`)]]]))]]]))]]]))];return(0,_.createElement)(_.Fragment,C(),...e)}function cu(e,t){return e==null||(t.key=e(t)),t}var lu=class extends Le{constructor(e){super(),this.tag=0,this.fields=[e]}cases(){return[`UrlChanged`]}},uu=class extends Ue{constructor(e){super(),this.Page=e}};function du(){let e=Lr(kr(window.location.hash,1));return[new uu(e),Br(e)]}function fu(e,t){return[new uu(e.fields[0]),Pr()]}function pu(e,t,n,r,i){return B(`div`,L([[`className`,`drawer-content`],[`children`,[B(`div`,L([[`className`,`navbar`],[`children`,[B(`div`,L([[`className`,`navbar-start`],[`children`,[B(`div`,L([[`className`,`lg:hidden`],[`children`,[B(`label`,V(`btn`,L([[`className`,`btn-square`],[`className`,`btn-ghost`],[`htmlFor`,`main-menu`],[`children`,[H(`svg`,L([[`viewBox`,`0 0 24 24`],[`className`,`inline-block w-6 h-6 stroke-current`],[`children`,N(H(`path`,L([[`d`,`M4 6h16M4 12h16M4 18h16`],[`strokeWidth`,2]])))]]))]]])))]]]))]]])),B(`div`,L([[`className`,`navbar-end`],[`children`,[B(`div`,V(`dropdown`,L([[`className`,`dropdown-end`],[`className`,`z-50`],[`children`,[B(`div`,V(`btn`,L([[`tabIndex`,0],[`className`,`btn-secondary`],[`children`,N(`Change Theme`)]]))),B(`ul`,V(`dropdown-content`,L([[`tabIndex`,0],[`children`,[B(`ul`,V(`menu`,L([[`className`,`menu-md`],[`className`,`bg-base-200`],[`className`,`text-base-content`],[`className`,`p-4 w-96 h-120 rounded-b-box overflow-y-auto`],[`children`,j(k(()=>Qn(e=>{let t;return A((t=N(B(`input`,V(`input`,L([[`type`,`text`],[`type`,`radio`],[`className`,`theme-controller`],[`value`,e[0]],[`name`,`theme`],[`className`,`btn btn-sm btn-block btn-ghost justify-start`],[`aria-label`,e[1]]])))),(0,_.createElement)(`li`,C(),...t)))},[[`light`,`🌝 light`],[`dark`,`🌚 dark`],[`cupcake`,`🧁 cupcake`],[`bumblebee`,`🐝 bumblebee`],[`emerald`,`✳️ emerald`],[`corporate`,`🏢 corporate`],[`synthwave`,`🌃 synthwave`],[`retro`,`👴 retro`],[`cyberpunk`,`🤖 cyberpunk`],[`valentine`,`🌸 valentine`],[`halloween`,`🎃 halloween`],[`garden`,`🌷 garden`],[`forest`,`🌲 forest`],[`aqua`,`🐟 aqua`],[`lofi`,`👓 lofi`],[`pastel`,`🖍 pastel`],[`️fantasy`,`🧚‍️ fantasy`],[`wireframe`,`📝 wireframe`],[`black`,`🏴 black`],[`luxury`,`💎 luxury`],[`️dracula`,`🧛‍️ dracula`],[`cmyk`,`🖨 CMYK`],[`autumn`,`🍁 autumn`],[`business`,`💼 business`],[`acid`,`💊 acid`],[`lemonade`,`🍋 lemonade`],[`night`,`🌃 night`],[`coffee`,`☕ coffee`],[`winter`,`❄ winter`],[`dim`,`🔅 dim`],[`nord`,`⛰️ nord`],[`sunset`,`🌆 sunset`],[`caramellatte`,`☕ caramellatte`],[`abyss`,`🕳️ abyss`],[`silk`,`👗 silk`]])))]])))]]])))]]])))]]]))]]])),B(`div`,L([[`className`,`px-5 py-5 bg-base-100`],[`children`,[B(`h2`,L([Wr([`className`,`text-primary`],[`className`,`my-6 text-5xl font-bold`]),[`children`,[n,B(`a`,V(`btn`,L([[`className`,`ml-2`],[`className`,`btn-warning`],[`className`,`btn-outline`],[`className`,`btn-xs`],[`href`,Xt(`https://daisyui.com`,r)],[`children`,[`daisyui docs`]]])))]]])),i]]]))]]]))}function mu(e){let t=(t,n,r)=>{let i=N(B(`a`,j(k(()=>{let i,a,o,s,c;return Gn(A([`href`,(i=Rr(r),a=i[1],o=(s=Dr(i[0]),s==null?void 0:(c=s,Er(gr(c[0],N(c[1]+wr(a))),1))),o??Er(N(wr(a)),1))]),k(()=>Gn(A([`onClick`,e=>{zr(e)}]),k(()=>Gn(ye(e,r)?A(Wr([`className`,`menu-active`],[`className`,`justify-between`])):A([`className`,`justify-between`]),k(()=>A([`children`,[(0,_.createElement)(`span`,C(),n),B(`span`,L([[`className`,`badge`],[`children`,N(t)]]))]])))))))}))));return(0,_.createElement)(`li`,C(),...i)},n=(t,n)=>{let r=N(B(`a`,j(k(()=>Gn(ye(e,n)?A([`className`,`menu-active`]):Hn(),k(()=>Gn(A([`children`,N(t)]),k(()=>{let e,t,r,i,a;return Gn(A([`href`,(e=Rr(n),t=e[1],r=(i=Dr(e[0]),i==null?void 0:(a=i,Er(gr(a[0],N(a[1]+wr(t))),1))),r??Er(N(wr(t)),1))]),k(()=>A([`onClick`,e=>{zr(e)}])))}))))))));return(0,_.createElement)(`li`,C(),...r)},r=()=>B(`li`,M());return B(`div`,L([[`className`,`drawer-side`],[`children`,[B(`label`,V(`drawer-overlay`,N([`htmlFor`,`main-menu`]))),B(`aside`,L([[`className`,`flex flex-col border-r w-80 bg-base-100 text-base-content`],[`children`,[B(`div`,L([[`className`,`inline-block text-3xl font-title px-5 py-5 font-bold`],[`children`,[B(`span`,L([[`className`,`text-primary`],[`children`,N(`Feliz.`)]])),`DaisyUI`,B(`a`,L([[`href`,`https://www.nuget.org/packages/Feliz.DaisyUI`],[`children`,[B(`img`,N([`src`,`https://img.shields.io/nuget/v/Feliz.DaisyUI.svg?style=flat-square`]))]]]))]]])),B(`div`,L([[`className`,`p-4`],[`children`,[B(`div`,V(`alert`,L([[`className`,`alert-info`],[`children`,[B(`div`,L([[`className`,`flex flex-col gap-2`],[`children`,[B(`div`,N([`dangerouslySetInnerHTML`,{__html:`🎉 Now based on <strong>DaisyUI v5!</strong>`}])),B(`div`,L([[`className`,`text-sm self-center underline`],[`children`,[B(`a`,L([[`children`,N(`Read the change log`)],[`href`,`https://daisyui.com/docs/changelog/#500`]]))]]]))]]]))]]])))]]])),B(`ul`,V(`menu`,L([[`className`,`menu-md`],[`className`,`flex flex-col p-4 pt-0 w-full`],[`children`,[B(`li`,L([[`className`,`menu-title`],[`children`,[(0,_.createElement)(`span`,C(),`Docs`)]]])),n(`Install`,R.Install),n(`Use`,R.Use),n(`Themes`,R.Themes),n(`Colors`,R.Colors)]]]))),B(`ul`,V(`menu`,L([[`className`,`menu-md`],[`className`,`flex flex-col p-4 pt-0 w-full`],[`children`,[B(`li`,L([[`className`,`menu-title`],[`children`,[(0,_.createElement)(`span`,C(),`Components`)]]])),B(`li`,L([[`className`,`menu-title`],[`children`,[(0,_.createElement)(`span`,C(),`Actions`)]]])),n(`Button`,R.Button),n(`Dropdown`,R.Dropdown),n(`FAB / Speed Dial`,R.Fab),n(`Modal`,R.Modal),n(`Swap`,R.Swap),n(`Theme Controller`,R.ThemeController),r(),B(`li`,L([[`className`,`menu-title`],[`children`,[(0,_.createElement)(`span`,C(),`Data display`)]]])),n(`Accordion`,R.Accordion),n(`Avatar`,R.Avatar),t(`new`,`Aura`,R.Aura),n(`Badge`,R.Badge),n(`Card`,R.Card),n(`Carousel`,R.Carousel),n(`Chat bubble`,R.ChatBubble),n(`Collapse`,R.Collapse),n(`Countdown`,R.Countdown),n(`Diff`,R.Diff),n(`Hover 3D card`,R.Hover3D),n(`Hover Gallery`,R.HoverGallery),n(`Kbd`,R.Kbd),n(`List`,R.List),n(`Stat`,R.Stat),n(`Status`,R.Status),n(`Table`,R.Table),n(`Text Rotate`,R.TextRotate),n(`Timeline`,R.Timeline),r(),B(`li`,L([[`className`,`menu-title`],[`children`,[(0,_.createElement)(`span`,C(),`Navigation`)]]])),n(`Breadcrumbs`,R.Breadcrumbs),n(`Dock`,R.Dock),n(`Link`,R.Link),t(`new`,`Megamenu`,R.Megamenu),n(`Menu`,R.Menu),n(`Navbar`,R.Navbar),n(`Pagination`,R.Pagination),n(`Steps`,R.Steps),n(`Tab`,R.Tab),r(),B(`li`,L([[`className`,`menu-title`],[`children`,[(0,_.createElement)(`span`,C(),`Feedback`)]]])),n(`Alert`,R.Alert),n(`Loading`,R.Loading),n(`Progress`,R.Progress),n(`Radial progress`,R.RadialProgress),n(`Skeleton`,R.Skeleton),n(`Toast`,R.Toast),n(`Tooltip`,R.Tooltip),r(),B(`li`,L([[`className`,`menu-title`],[`children`,[(0,_.createElement)(`span`,C(),`Data input`)]]])),n(`Checkbox`,R.FormCheckbox),n(`Fieldset`,R.Fieldset),n(`File Input`,R.FileInput),n(`Filter`,R.Filter),n(`Label`,R.Label),n(`Radio`,R.FormRadio),n(`Range`,R.FormRange),n(`Rating`,R.Rating),n(`Select`,R.FormSelect),n(`Input field`,R.FormInput),n(`Textarea`,R.FormTextarea),n(`Toggle`,R.FormToggle),n(`Validator`,R.Validator),t(`new`,`OTP`,R.Otp),r(),B(`li`,L([[`className`,`menu-title`],[`children`,[(0,_.createElement)(`span`,C(),`Layout`)]]])),n(`Divider`,R.Divider),n(`Drawer sidebar`,R.Drawer),n(`Footer`,R.Footer),n(`Hero`,R.Hero),n(`Indicator`,R.Indicator),n(`Join (group items)`,R.Join),n(`Mask`,R.Mask),n(`Stack`,R.Stack),r(),B(`li`,L([[`className`,`menu-title`],[`children`,[(0,_.createElement)(`span`,C(),`Mockup`)]]])),n(`Browser`,R.MockupBrowser),n(`Code`,R.MockupCode),n(`Phone`,R.MockupPhone),n(`Window`,R.MockupWindow)]]])))]]]))]]]))}function hu(e,t,n,r,i,a){return B(`div`,L([[`className`,`bg-base-100 text-base-content h-screen`],[`children`,[B(`div`,V(`drawer`,L([[`className`,`lg:drawer-open`],[`children`,[B(`input`,V(`drawer-toggle`,L([[`type`,`checkbox`],[`id`,`main-menu`]]))),pu(e,t,n,r,a),mu(i)]]])))]]]))}function gu(){let e,t=Ca(()=>oa(void 0,Qi(du,fu,(e,t)=>{})),void 0,void 0),n=t[0],r=t[1],i,a=n.Page;i=a.tag===1?[`How to use`,`/docs/use`,(0,_.createElement)(Ta,null)]:a.tag===2?[`Themes`,`/docs/default-themes`,(0,_.createElement)(Oa,null)]:a.tag===3?[`Colors`,`/core/colors`,(0,_.createElement)(Aa,null)]:a.tag===4?[`Accordion`,`/components/accordion`,(0,_.createElement)(Ma,null)]:a.tag===5?[`Alert`,`/components/alert`,(0,_.createElement)(La,null)]:a.tag===6?[`Aura`,`/components/aura`,(0,_.createElement)(za,null)]:a.tag===7?[`Avatar`,`/components/avatar`,(0,_.createElement)(Ha,null)]:a.tag===8?[`Badge`,`/components/badge`,(0,_.createElement)(Ka,null)]:a.tag===9?[`Breadcrumbs`,`/components/breadcrumbs`,(0,_.createElement)(Ja,null)]:a.tag===10?[`Button`,`/components/button`,(0,_.createElement)(Qa,null)]:a.tag===11?[`Card`,`/components/card`,(0,_.createElement)(ro,null)]:a.tag===12?[`Carousel`,`/components/carousel`,(0,_.createElement)(ao,null)]:a.tag===13?[`ChatBubble`,`/components/chat`,(0,_.createElement)(uo,null)]:a.tag===14?[`Collapse`,`/components/collapse`,(0,_.createElement)(ho,null)]:a.tag===15?[`Countdown`,`/components/countdown`,(0,_.createElement)(xo,null)]:a.tag===16?[`Diff`,`/components/diff`,(0,_.createElement)(wo,null)]:a.tag===17?[`Divider`,`/components/divider`,(0,_.createElement)(Do,null)]:a.tag===18?[`Dock`,`/components/dock`,(0,_.createElement)(ko,null)]:a.tag===19?[`Drawer`,`/components/drawer`,(0,_.createElement)(jo,null)]:a.tag===20?[`Dropdown`,`/components/dropdown`,(0,_.createElement)(Io,null)]:a.tag===21?[`FAB`,`/components/fab`,(0,_.createElement)(zo,null)]:a.tag===22?[`Fieldset`,`/components/fieldset`,(0,_.createElement)(Uo,null)]:a.tag===23?[`Filter`,`/components/filter`,(0,_.createElement)(Ko,null)]:a.tag===24?[`Footer`,`/components/footer`,(0,_.createElement)(Jo,null)]:a.tag===25?[`Hero`,`/components/hero`,(0,_.createElement)(Xo,null)]:a.tag===26?[`Hover 3D`,`/components/hover-3d`,(0,_.createElement)($o,null)]:a.tag===27?[`Hover Gallery`,`/components/hover-gallery`,(0,_.createElement)(ts,null)]:a.tag===29?[`Indicator`,`/components/indicator`,(0,_.createElement)(os,null)]:a.tag===28?[`Join`,`/components/join`,(0,_.createElement)(cs,null)]:a.tag===30?[`Kbd`,`/components/kdb`,(0,_.createElement)(fs,null)]:a.tag===31?[`Label`,`/components/label`,(0,_.createElement)(vs,null)]:a.tag===32?[`Link`,`/components/link`,(0,_.createElement)(Cs,null)]:a.tag===33?[`List`,`/components/list`,(0,_.createElement)(Es,null)]:a.tag===34?[`Loading`,`/components/loading`,(0,_.createElement)(As,null)]:a.tag===35?[`Mask`,`/components/mask`,(0,_.createElement)(Ns,null)]:a.tag===36?[`Menu`,`/components/menu`,(0,_.createElement)(Rs,null)]:a.tag===37?[`Megamenu`,`/components/megamenu`,(0,_.createElement)(Vs,null)]:a.tag===38?[`Modal`,`/components/modal`,(0,_.createElement)(Ks,null)]:a.tag===39?[`Navbar`,`/components/navbar`,(0,_.createElement)(Xs,null)]:a.tag===40?[`OTP`,`/components/otp`,(0,_.createElement)(ec,null)]:a.tag===41?[`Pagination`,`/components/pagination`,(0,_.createElement)(rc,null)]:a.tag===42?[`Progress`,`/components/progress`,(0,_.createElement)(oc,null)]:a.tag===43?[`RadialProgress`,`/components/radial-progress`,(0,_.createElement)(lc,null)]:a.tag===70?[`Rating`,`/components/rating`,(0,_.createElement)(fc,null)]:a.tag===44?[`Skeleton`,`/components/skeleton`,(0,_.createElement)(hc,null)]:a.tag===45?[`Stack`,`/components/stack`,(0,_.createElement)(yc,null)]:a.tag===46?[`Stat`,`/components/stat`,(0,_.createElement)(Cc,null)]:a.tag===47?[`Status`,`/components/status`,(0,_.createElement)(Ec,null)]:a.tag===48?[`Steps`,`/components/steps`,(0,_.createElement)(jc,null)]:a.tag===49?[`Swap`,`/components/swap`,(0,_.createElement)(Pc,null)]:a.tag===50?[`Tab`,`/components/tab`,(0,_.createElement)(Bc,null)]:a.tag===51?[`Table`,`/components/table`,(0,_.createElement)(qc,null)]:a.tag===52?[`Text Rotate`,`/components/text-rotate`,(0,_.createElement)(Yc,null)]:a.tag===53?[`Theme Controller`,`/components/theme-controller`,(0,_.createElement)(Zc,null)]:a.tag===54?[`Timeline`,`/components/timeline`,(0,_.createElement)(el,null)]:a.tag===55?[`Toast`,`/components/toast`,(0,_.createElement)(al,null)]:a.tag===56?[`Tooltip`,`/components/tooltip`,(0,_.createElement)(ll,null)]:a.tag===57?[`Validator`,`/components/validator`,(0,_.createElement)(pl,null)]:a.tag===58?[`File - Input`,`/components/file-input`,(0,_.createElement)(xl,null)]:a.tag===59?[`Form - Checkbox`,`/components/form/checkbox`,(0,_.createElement)(El,null)]:a.tag===60?[`Form - Input`,`/components/form/input`,(0,_.createElement)(Pl,null)]:a.tag===61?[`Form - Radio`,`/components/form/radio`,(0,_.createElement)(Il,null)]:a.tag===62?[`Form - Range`,`/components/form/range`,(0,_.createElement)(Q,null)]:a.tag===63?[`Form - Select`,`/components/form/select`,(0,_.createElement)(Vl,null)]:a.tag===64?[`Form - Textarea`,`/components/form/textarea`,(0,_.createElement)(Wl,null)]:a.tag===65?[`Form - Toggle`,`/components/form/toggle`,(0,_.createElement)(Jl,null)]:a.tag===66?[`Browser Mockup`,`/components/mockup-browser`,(0,_.createElement)(Xl,null)]:a.tag===67?[`MockupCode`,`/components/mockup/code`,(0,_.createElement)($l,null)]:a.tag===68?[`MockupPhone`,`/components/mockup/phone`,(0,_.createElement)(ru,null)]:a.tag===69?[`MockupWindow`,`/components/mockup/window`,(0,_.createElement)(ou,null)]:[`Installation`,`/docs/install`,(0,_.createElement)(su,null)];let o=Ee(L([[`hashMode`,1],[`onUrlChanged`,e=>{r(new lu(Lr(e)))}],(e=N(hu(n,r,i[0],i[1],n.Page,i[2])),[`application`,(0,_.createElement)(_.Fragment,C(),...e)])]));return typeof o==`object`&&o&&!Array.isArray(o)||console.error(`React.memoRender: props must be an object.`),(0,_.createElement)(jr,cu(void 0,o))}(0,v.createRoot)(document.getElementById(`safer-app`)).render((0,_.createElement)(gu,null));