(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const y of document.querySelectorAll('link[rel="modulepreload"]'))d(y);new MutationObserver(y=>{for(const g of y)if(g.type==="childList")for(const x of g.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&d(x)}).observe(document,{childList:!0,subtree:!0});function u(y){const g={};return y.integrity&&(g.integrity=y.integrity),y.referrerPolicy&&(g.referrerPolicy=y.referrerPolicy),y.crossOrigin==="use-credentials"?g.credentials="include":y.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function d(y){if(y.ep)return;y.ep=!0;const g=u(y);fetch(y.href,g)}})();var No={exports:{}},Dr={},Eo={exports:{}},xo={};var kf;function cy(){return kf||(kf=1,(function(l){function r(j,oe){var ae=j.length;j.push(oe);e:for(;0<ae;){var Oe=ae-1>>>1,S=j[Oe];if(0<y(S,oe))j[Oe]=oe,j[ae]=S,ae=Oe;else break e}}function u(j){return j.length===0?null:j[0]}function d(j){if(j.length===0)return null;var oe=j[0],ae=j.pop();if(ae!==oe){j[0]=ae;e:for(var Oe=0,S=j.length,L=S>>>1;Oe<L;){var ne=2*(Oe+1)-1,P=j[ne],Q=ne+1,ye=j[Q];if(0>y(P,ae))Q<S&&0>y(ye,P)?(j[Oe]=ye,j[Q]=ae,Oe=Q):(j[Oe]=P,j[ne]=ae,Oe=ne);else if(Q<S&&0>y(ye,ae))j[Oe]=ye,j[Q]=ae,Oe=Q;else break e}}return oe}function y(j,oe){var ae=j.sortIndex-oe.sortIndex;return ae!==0?ae:j.id-oe.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var g=performance;l.unstable_now=function(){return g.now()}}else{var x=Date,C=x.now();l.unstable_now=function(){return x.now()-C}}var T=[],E=[],R=1,q=null,F=3,Y=!1,Z=!1,re=!1,fe=typeof setTimeout=="function"?setTimeout:null,Ze=typeof clearTimeout=="function"?clearTimeout:null,Te=typeof setImmediate<"u"?setImmediate:null;function dt(j){for(var oe=u(E);oe!==null;){if(oe.callback===null)d(E);else if(oe.startTime<=j)d(E),oe.sortIndex=oe.expirationTime,r(T,oe);else break;oe=u(E)}}function Ot(j){if(re=!1,dt(j),!Z)if(u(T)!==null)Z=!0,bn();else{var oe=u(E);oe!==null&&Nt(Ot,oe.startTime-j)}}var ve=!1,mt=-1,Ln=5,Gn=-1;function te(){return!(l.unstable_now()-Gn<Ln)}function De(){if(ve){var j=l.unstable_now();Gn=j;var oe=!0;try{e:{Z=!1,re&&(re=!1,Ze(mt),mt=-1),Y=!0;var ae=F;try{t:{for(dt(j),q=u(T);q!==null&&!(q.expirationTime>j&&te());){var Oe=q.callback;if(typeof Oe=="function"){q.callback=null,F=q.priorityLevel;var S=Oe(q.expirationTime<=j);if(j=l.unstable_now(),typeof S=="function"){q.callback=S,dt(j),oe=!0;break t}q===u(T)&&d(T),dt(j)}else d(T);q=u(T)}if(q!==null)oe=!0;else{var L=u(E);L!==null&&Nt(Ot,L.startTime-j),oe=!1}}break e}finally{q=null,F=ae,Y=!1}oe=void 0}}finally{oe?Rt():ve=!1}}}var Rt;if(typeof Te=="function")Rt=function(){Te(De)};else if(typeof MessageChannel<"u"){var hn=new MessageChannel,ln=hn.port2;hn.port1.onmessage=De,Rt=function(){ln.postMessage(null)}}else Rt=function(){fe(De,0)};function bn(){ve||(ve=!0,Rt())}function Nt(j,oe){mt=fe(function(){j(l.unstable_now())},oe)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(j){j.callback=null},l.unstable_continueExecution=function(){Z||Y||(Z=!0,bn())},l.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ln=0<j?Math.floor(1e3/j):5},l.unstable_getCurrentPriorityLevel=function(){return F},l.unstable_getFirstCallbackNode=function(){return u(T)},l.unstable_next=function(j){switch(F){case 1:case 2:case 3:var oe=3;break;default:oe=F}var ae=F;F=oe;try{return j()}finally{F=ae}},l.unstable_pauseExecution=function(){},l.unstable_requestPaint=function(){},l.unstable_runWithPriority=function(j,oe){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var ae=F;F=j;try{return oe()}finally{F=ae}},l.unstable_scheduleCallback=function(j,oe,ae){var Oe=l.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?Oe+ae:Oe):ae=Oe,j){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=ae+S,j={id:R++,callback:oe,priorityLevel:j,startTime:ae,expirationTime:S,sortIndex:-1},ae>Oe?(j.sortIndex=ae,r(E,j),u(T)===null&&j===u(E)&&(re?(Ze(mt),mt=-1):re=!0,Nt(Ot,ae-Oe))):(j.sortIndex=S,r(T,j),Z||Y||(Z=!0,bn())),j},l.unstable_shouldYield=te,l.unstable_wrapCallback=function(j){var oe=F;return function(){var ae=F;F=oe;try{return j.apply(this,arguments)}finally{F=ae}}}})(xo)),xo}var Cf;function sy(){return Cf||(Cf=1,Eo.exports=cy()),Eo.exports}var So={exports:{}},ue={};var zf;function oy(){if(zf)return ue;zf=1;var l=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),g=Symbol.for("react.consumer"),x=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),E=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),q=Symbol.iterator;function F(S){return S===null||typeof S!="object"?null:(S=q&&S[q]||S["@@iterator"],typeof S=="function"?S:null)}var Y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Z=Object.assign,re={};function fe(S,L,ne){this.props=S,this.context=L,this.refs=re,this.updater=ne||Y}fe.prototype.isReactComponent={},fe.prototype.setState=function(S,L){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,L,"setState")},fe.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function Ze(){}Ze.prototype=fe.prototype;function Te(S,L,ne){this.props=S,this.context=L,this.refs=re,this.updater=ne||Y}var dt=Te.prototype=new Ze;dt.constructor=Te,Z(dt,fe.prototype),dt.isPureReactComponent=!0;var Ot=Array.isArray,ve={H:null,A:null,T:null,S:null},mt=Object.prototype.hasOwnProperty;function Ln(S,L,ne,P,Q,ye){return ne=ye.ref,{$$typeof:l,type:S,key:L,ref:ne!==void 0?ne:null,props:ye}}function Gn(S,L){return Ln(S.type,L,void 0,void 0,void 0,S.props)}function te(S){return typeof S=="object"&&S!==null&&S.$$typeof===l}function De(S){var L={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(ne){return L[ne]})}var Rt=/\/+/g;function hn(S,L){return typeof S=="object"&&S!==null&&S.key!=null?De(""+S.key):L.toString(36)}function ln(){}function bn(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(ln,ln):(S.status="pending",S.then(function(L){S.status==="pending"&&(S.status="fulfilled",S.value=L)},function(L){S.status==="pending"&&(S.status="rejected",S.reason=L)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function Nt(S,L,ne,P,Q){var ye=typeof S;(ye==="undefined"||ye==="boolean")&&(S=null);var de=!1;if(S===null)de=!0;else switch(ye){case"bigint":case"string":case"number":de=!0;break;case"object":switch(S.$$typeof){case l:case r:de=!0;break;case R:return de=S._init,Nt(de(S._payload),L,ne,P,Q)}}if(de)return Q=Q(S),de=P===""?"."+hn(S,0):P,Ot(Q)?(ne="",de!=null&&(ne=de.replace(Rt,"$&/")+"/"),Nt(Q,L,ne,"",function(Fe){return Fe})):Q!=null&&(te(Q)&&(Q=Gn(Q,ne+(Q.key==null||S&&S.key===Q.key?"":(""+Q.key).replace(Rt,"$&/")+"/")+de)),L.push(Q)),1;de=0;var bt=P===""?".":P+":";if(Ot(S))for(var we=0;we<S.length;we++)P=S[we],ye=bt+hn(P,we),de+=Nt(P,L,ne,ye,Q);else if(we=F(S),typeof we=="function")for(S=we.call(S),we=0;!(P=S.next()).done;)P=P.value,ye=bt+hn(P,we++),de+=Nt(P,L,ne,ye,Q);else if(ye==="object"){if(typeof S.then=="function")return Nt(bn(S),L,ne,P,Q);throw L=String(S),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.")}return de}function j(S,L,ne){if(S==null)return S;var P=[],Q=0;return Nt(S,P,"","",function(ye){return L.call(ne,ye,Q++)}),P}function oe(S){if(S._status===-1){var L=S._result;L=L(),L.then(function(ne){(S._status===0||S._status===-1)&&(S._status=1,S._result=ne)},function(ne){(S._status===0||S._status===-1)&&(S._status=2,S._result=ne)}),S._status===-1&&(S._status=0,S._result=L)}if(S._status===1)return S._result.default;throw S._result}var ae=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var L=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(L))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)};function Oe(){}return ue.Children={map:j,forEach:function(S,L,ne){j(S,function(){L.apply(this,arguments)},ne)},count:function(S){var L=0;return j(S,function(){L++}),L},toArray:function(S){return j(S,function(L){return L})||[]},only:function(S){if(!te(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},ue.Component=fe,ue.Fragment=u,ue.Profiler=y,ue.PureComponent=Te,ue.StrictMode=d,ue.Suspense=T,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ve,ue.act=function(){throw Error("act(...) is not supported in production builds of React.")},ue.cache=function(S){return function(){return S.apply(null,arguments)}},ue.cloneElement=function(S,L,ne){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var P=Z({},S.props),Q=S.key,ye=void 0;if(L!=null)for(de in L.ref!==void 0&&(ye=void 0),L.key!==void 0&&(Q=""+L.key),L)!mt.call(L,de)||de==="key"||de==="__self"||de==="__source"||de==="ref"&&L.ref===void 0||(P[de]=L[de]);var de=arguments.length-2;if(de===1)P.children=ne;else if(1<de){for(var bt=Array(de),we=0;we<de;we++)bt[we]=arguments[we+2];P.children=bt}return Ln(S.type,Q,void 0,void 0,ye,P)},ue.createContext=function(S){return S={$$typeof:x,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:g,_context:S},S},ue.createElement=function(S,L,ne){var P,Q={},ye=null;if(L!=null)for(P in L.key!==void 0&&(ye=""+L.key),L)mt.call(L,P)&&P!=="key"&&P!=="__self"&&P!=="__source"&&(Q[P]=L[P]);var de=arguments.length-2;if(de===1)Q.children=ne;else if(1<de){for(var bt=Array(de),we=0;we<de;we++)bt[we]=arguments[we+2];Q.children=bt}if(S&&S.defaultProps)for(P in de=S.defaultProps,de)Q[P]===void 0&&(Q[P]=de[P]);return Ln(S,ye,void 0,void 0,null,Q)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(S){return{$$typeof:C,render:S}},ue.isValidElement=te,ue.lazy=function(S){return{$$typeof:R,_payload:{_status:-1,_result:S},_init:oe}},ue.memo=function(S,L){return{$$typeof:E,type:S,compare:L===void 0?null:L}},ue.startTransition=function(S){var L=ve.T,ne={};ve.T=ne;try{var P=S(),Q=ve.S;Q!==null&&Q(ne,P),typeof P=="object"&&P!==null&&typeof P.then=="function"&&P.then(Oe,ae)}catch(ye){ae(ye)}finally{ve.T=L}},ue.unstable_useCacheRefresh=function(){return ve.H.useCacheRefresh()},ue.use=function(S){return ve.H.use(S)},ue.useActionState=function(S,L,ne){return ve.H.useActionState(S,L,ne)},ue.useCallback=function(S,L){return ve.H.useCallback(S,L)},ue.useContext=function(S){return ve.H.useContext(S)},ue.useDebugValue=function(){},ue.useDeferredValue=function(S,L){return ve.H.useDeferredValue(S,L)},ue.useEffect=function(S,L){return ve.H.useEffect(S,L)},ue.useId=function(){return ve.H.useId()},ue.useImperativeHandle=function(S,L,ne){return ve.H.useImperativeHandle(S,L,ne)},ue.useInsertionEffect=function(S,L){return ve.H.useInsertionEffect(S,L)},ue.useLayoutEffect=function(S,L){return ve.H.useLayoutEffect(S,L)},ue.useMemo=function(S,L){return ve.H.useMemo(S,L)},ue.useOptimistic=function(S,L){return ve.H.useOptimistic(S,L)},ue.useReducer=function(S,L,ne){return ve.H.useReducer(S,L,ne)},ue.useRef=function(S){return ve.H.useRef(S)},ue.useState=function(S){return ve.H.useState(S)},ue.useSyncExternalStore=function(S,L,ne){return ve.H.useSyncExternalStore(S,L,ne)},ue.useTransition=function(){return ve.H.useTransition()},ue.version="19.0.0",ue}var Af;function qo(){return Af||(Af=1,So.exports=oy()),So.exports}var Do={exports:{}},ht={};var Mf;function uy(){if(Mf)return ht;Mf=1;var l=qo();function r(T){var E="https://react.dev/errors/"+T;if(1<arguments.length){E+="?args[]="+encodeURIComponent(arguments[1]);for(var R=2;R<arguments.length;R++)E+="&args[]="+encodeURIComponent(arguments[R])}return"Minified React error #"+T+"; visit "+E+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var d={d:{f:u,r:function(){throw Error(r(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},y=Symbol.for("react.portal");function g(T,E,R){var q=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:y,key:q==null?null:""+q,children:T,containerInfo:E,implementation:R}}var x=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function C(T,E){if(T==="font")return"";if(typeof E=="string")return E==="use-credentials"?E:""}return ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,ht.createPortal=function(T,E){var R=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!E||E.nodeType!==1&&E.nodeType!==9&&E.nodeType!==11)throw Error(r(299));return g(T,E,null,R)},ht.flushSync=function(T){var E=x.T,R=d.p;try{if(x.T=null,d.p=2,T)return T()}finally{x.T=E,d.p=R,d.d.f()}},ht.preconnect=function(T,E){typeof T=="string"&&(E?(E=E.crossOrigin,E=typeof E=="string"?E==="use-credentials"?E:"":void 0):E=null,d.d.C(T,E))},ht.prefetchDNS=function(T){typeof T=="string"&&d.d.D(T)},ht.preinit=function(T,E){if(typeof T=="string"&&E&&typeof E.as=="string"){var R=E.as,q=C(R,E.crossOrigin),F=typeof E.integrity=="string"?E.integrity:void 0,Y=typeof E.fetchPriority=="string"?E.fetchPriority:void 0;R==="style"?d.d.S(T,typeof E.precedence=="string"?E.precedence:void 0,{crossOrigin:q,integrity:F,fetchPriority:Y}):R==="script"&&d.d.X(T,{crossOrigin:q,integrity:F,fetchPriority:Y,nonce:typeof E.nonce=="string"?E.nonce:void 0})}},ht.preinitModule=function(T,E){if(typeof T=="string")if(typeof E=="object"&&E!==null){if(E.as==null||E.as==="script"){var R=C(E.as,E.crossOrigin);d.d.M(T,{crossOrigin:R,integrity:typeof E.integrity=="string"?E.integrity:void 0,nonce:typeof E.nonce=="string"?E.nonce:void 0})}}else E==null&&d.d.M(T)},ht.preload=function(T,E){if(typeof T=="string"&&typeof E=="object"&&E!==null&&typeof E.as=="string"){var R=E.as,q=C(R,E.crossOrigin);d.d.L(T,R,{crossOrigin:q,integrity:typeof E.integrity=="string"?E.integrity:void 0,nonce:typeof E.nonce=="string"?E.nonce:void 0,type:typeof E.type=="string"?E.type:void 0,fetchPriority:typeof E.fetchPriority=="string"?E.fetchPriority:void 0,referrerPolicy:typeof E.referrerPolicy=="string"?E.referrerPolicy:void 0,imageSrcSet:typeof E.imageSrcSet=="string"?E.imageSrcSet:void 0,imageSizes:typeof E.imageSizes=="string"?E.imageSizes:void 0,media:typeof E.media=="string"?E.media:void 0})}},ht.preloadModule=function(T,E){if(typeof T=="string")if(E){var R=C(E.as,E.crossOrigin);d.d.m(T,{as:typeof E.as=="string"&&E.as!=="script"?E.as:void 0,crossOrigin:R,integrity:typeof E.integrity=="string"?E.integrity:void 0})}else d.d.m(T)},ht.requestFormReset=function(T){d.d.r(T)},ht.unstable_batchedUpdates=function(T,E){return T(E)},ht.useFormState=function(T,E,R){return x.H.useFormState(T,E,R)},ht.useFormStatus=function(){return x.H.useHostTransitionStatus()},ht.version="19.0.0",ht}var Of;function dy(){if(Of)return Do.exports;Of=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(r){console.error(r)}}return l(),Do.exports=uy(),Do.exports}var Rf;function my(){if(Rf)return Dr;Rf=1;var l=sy(),r=qo(),u=dy();function d(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function y(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var g=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),q=Symbol.for("react.provider"),F=Symbol.for("react.consumer"),Y=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),re=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),Ze=Symbol.for("react.memo"),Te=Symbol.for("react.lazy"),dt=Symbol.for("react.offscreen"),Ot=Symbol.for("react.memo_cache_sentinel"),ve=Symbol.iterator;function mt(e){return e===null||typeof e!="object"?null:(e=ve&&e[ve]||e["@@iterator"],typeof e=="function"?e:null)}var Ln=Symbol.for("react.client.reference");function Gn(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ln?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case C:return"Portal";case R:return"Profiler";case E:return"StrictMode";case re:return"Suspense";case fe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Y:return(e.displayName||"Context")+".Provider";case F:return(e._context.displayName||"Context")+".Consumer";case Z:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ze:return t=e.displayName||null,t!==null?t:Gn(e.type)||"Memo";case Te:t=e._payload,e=e._init;try{return Gn(e(t))}catch{}}return null}var te=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,De=Object.assign,Rt,hn;function ln(e){if(Rt===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Rt=t&&t[1]||"",hn=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Rt+e+hn}var bn=!1;function Nt(e,t){if(!e||bn)return"";bn=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var B=function(){throw Error()};if(Object.defineProperty(B.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(B,[])}catch(M){var z=M}Reflect.construct(e,[],B)}else{try{B.call()}catch(M){z=M}e.call(B.prototype)}}else{try{throw Error()}catch(M){z=M}(B=e())&&typeof B.catch=="function"&&B.catch(function(){})}}catch(M){if(M&&z&&typeof M.stack=="string")return[M.stack,z.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=a.DetermineComponentFrameRoot(),p=o[0],v=o[1];if(p&&v){var N=p.split(`
`),w=v.split(`
`);for(i=a=0;a<N.length&&!N[a].includes("DetermineComponentFrameRoot");)a++;for(;i<w.length&&!w[i].includes("DetermineComponentFrameRoot");)i++;if(a===N.length||i===w.length)for(a=N.length-1,i=w.length-1;1<=a&&0<=i&&N[a]!==w[i];)i--;for(;1<=a&&0<=i;a--,i--)if(N[a]!==w[i]){if(a!==1||i!==1)do if(a--,i--,0>i||N[a]!==w[i]){var O=`
`+N[a].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),O}while(1<=a&&0<=i);break}}}finally{bn=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?ln(n):""}function j(e){switch(e.tag){case 26:case 27:case 5:return ln(e.type);case 16:return ln("Lazy");case 13:return ln("Suspense");case 19:return ln("SuspenseList");case 0:case 15:return e=Nt(e.type,!1),e;case 11:return e=Nt(e.type.render,!1),e;case 1:return e=Nt(e.type,!0),e;default:return""}}function oe(e){try{var t="";do t+=j(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function ae(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Oe(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function S(e){if(ae(e)!==e)throw Error(d(188))}function L(e){var t=e.alternate;if(!t){if(t=ae(e),t===null)throw Error(d(188));return t!==e?null:e}for(var n=e,a=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(a=i.return,a!==null){n=a;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return S(i),e;if(o===a)return S(i),t;o=o.sibling}throw Error(d(188))}if(n.return!==a.return)n=i,a=o;else{for(var p=!1,v=i.child;v;){if(v===n){p=!0,n=i,a=o;break}if(v===a){p=!0,a=i,n=o;break}v=v.sibling}if(!p){for(v=o.child;v;){if(v===n){p=!0,n=o,a=i;break}if(v===a){p=!0,a=o,n=i;break}v=v.sibling}if(!p)throw Error(d(189))}}if(n.alternate!==a)throw Error(d(190))}if(n.tag!==3)throw Error(d(188));return n.stateNode.current===n?e:t}function ne(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=ne(e),t!==null)return t;e=e.sibling}return null}var P=Array.isArray,Q=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ye={pending:!1,data:null,method:null,action:null},de=[],bt=-1;function we(e){return{current:e}}function Fe(e){0>bt||(e.current=de[bt],de[bt]=null,bt--)}function qe(e,t){bt++,de[bt]=e.current,e.current=t}var rn=we(null),_l=we(null),Vn=we(null),Ur=we(null);function Br(e,t){switch(qe(Vn,t),qe(_l,e),qe(rn,null),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)&&(t=t.namespaceURI)?af(t):0;break;default:if(e=e===8?t.parentNode:t,t=e.tagName,e=e.namespaceURI)e=af(e),t=lf(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Fe(rn),qe(rn,t)}function Ua(){Fe(rn),Fe(_l),Fe(Vn)}function uc(e){e.memoizedState!==null&&qe(Ur,e);var t=rn.current,n=lf(t,e.type);t!==n&&(qe(_l,e),qe(rn,n))}function qr(e){_l.current===e&&(Fe(rn),Fe(_l)),Ur.current===e&&(Fe(Ur),vr._currentValue=ye)}var dc=Object.prototype.hasOwnProperty,mc=l.unstable_scheduleCallback,fc=l.unstable_cancelCallback,Lp=l.unstable_shouldYield,Gp=l.unstable_requestPaint,cn=l.unstable_now,Vp=l.unstable_getCurrentPriorityLevel,Zo=l.unstable_ImmediatePriority,Ko=l.unstable_UserBlockingPriority,Lr=l.unstable_NormalPriority,jp=l.unstable_LowPriority,Jo=l.unstable_IdlePriority,Yp=l.log,Qp=l.unstable_setDisableYieldValue,Tl=null,Dt=null;function Xp(e){if(Dt&&typeof Dt.onCommitFiberRoot=="function")try{Dt.onCommitFiberRoot(Tl,e,void 0,(e.current.flags&128)===128)}catch{}}function jn(e){if(typeof Yp=="function"&&Qp(e),Dt&&typeof Dt.setStrictMode=="function")try{Dt.setStrictMode(Tl,e)}catch{}}var wt=Math.clz32?Math.clz32:Jp,Zp=Math.log,Kp=Math.LN2;function Jp(e){return e>>>=0,e===0?32:31-(Zp(e)/Kp|0)|0}var Gr=128,Vr=4194304;function ma(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function jr(e,t){var n=e.pendingLanes;if(n===0)return 0;var a=0,i=e.suspendedLanes,o=e.pingedLanes,p=e.warmLanes;e=e.finishedLanes!==0;var v=n&134217727;return v!==0?(n=v&~i,n!==0?a=ma(n):(o&=v,o!==0?a=ma(o):e||(p=v&~p,p!==0&&(a=ma(p))))):(v=n&~i,v!==0?a=ma(v):o!==0?a=ma(o):e||(p=n&~p,p!==0&&(a=ma(p)))),a===0?0:t!==0&&t!==a&&(t&i)===0&&(i=a&-a,p=t&-t,i>=p||i===32&&(p&4194176)!==0)?t:a}function kl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Fp(e,t){switch(e){case 1:case 2:case 4:case 8:return t+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fo(){var e=Gr;return Gr<<=1,(Gr&4194176)===0&&(Gr=128),e}function $o(){var e=Vr;return Vr<<=1,(Vr&62914560)===0&&(Vr=4194304),e}function pc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Cl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function $p(e,t,n,a,i,o){var p=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var v=e.entanglements,N=e.expirationTimes,w=e.hiddenUpdates;for(n=p&~n;0<n;){var O=31-wt(n),B=1<<O;v[O]=0,N[O]=-1;var z=w[O];if(z!==null)for(w[O]=null,O=0;O<z.length;O++){var M=z[O];M!==null&&(M.lane&=-536870913)}n&=~B}a!==0&&Wo(e,a,0),o!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=o&~(p&~t))}function Wo(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-wt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&4194218}function Io(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-wt(n),i=1<<a;i&t|e[a]&t&&(e[a]|=t),n&=~i}}function Po(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function eu(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:Sf(e.type))}function Wp(e,t){var n=Q.p;try{return Q.p=e,t()}finally{Q.p=n}}var Yn=Math.random().toString(36).slice(2),ft="__reactFiber$"+Yn,Et="__reactProps$"+Yn,Ba="__reactContainer$"+Yn,hc="__reactEvents$"+Yn,Ip="__reactListeners$"+Yn,Pp="__reactHandles$"+Yn,tu="__reactResources$"+Yn,zl="__reactMarker$"+Yn;function bc(e){delete e[ft],delete e[Et],delete e[hc],delete e[Ip],delete e[Pp]}function fa(e){var t=e[ft];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ba]||n[ft]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=sf(e);e!==null;){if(n=e[ft])return n;e=sf(e)}return t}e=n,n=e.parentNode}return null}function qa(e){if(e=e[ft]||e[Ba]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Al(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(d(33))}function La(e){var t=e[tu];return t||(t=e[tu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function tt(e){e[zl]=!0}var nu=new Set,au={};function pa(e,t){Ga(e,t),Ga(e+"Capture",t)}function Ga(e,t){for(au[e]=t,e=0;e<t.length;e++)nu.add(t[e])}var yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),eh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lu={},ru={};function th(e){return dc.call(ru,e)?!0:dc.call(lu,e)?!1:eh.test(e)?ru[e]=!0:(lu[e]=!0,!1)}function Yr(e,t,n){if(th(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Qr(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function gn(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function Ut(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function iu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function nh(e){var t=iu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(p){a=""+p,o.call(this,p)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(p){a=""+p},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xr(e){e._valueTracker||(e._valueTracker=nh(e))}function cu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=iu(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Zr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ah=/[\n"\\]/g;function Bt(e){return e.replace(ah,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function yc(e,t,n,a,i,o,p,v){e.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.type=p:e.removeAttribute("type"),t!=null?p==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ut(t)):e.value!==""+Ut(t)&&(e.value=""+Ut(t)):p!=="submit"&&p!=="reset"||e.removeAttribute("value"),t!=null?gc(e,p,Ut(t)):n!=null?gc(e,p,Ut(n)):a!=null&&e.removeAttribute("value"),i==null&&o!=null&&(e.defaultChecked=!!o),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.name=""+Ut(v):e.removeAttribute("name")}function su(e,t,n,a,i,o,p,v){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),t!=null||n!=null){if(!(o!=="submit"&&o!=="reset"||t!=null))return;n=n!=null?""+Ut(n):"",t=t!=null?""+Ut(t):n,v||t===e.value||(e.value=t),e.defaultValue=t}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=v?e.checked:!!a,e.defaultChecked=!!a,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.name=p)}function gc(e,t,n){t==="number"&&Zr(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Va(e,t,n,a){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Ut(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ou(e,t,n){if(t!=null&&(t=""+Ut(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Ut(n):""}function uu(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(d(92));if(P(a)){if(1<a.length)throw Error(d(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=Ut(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a)}function ja(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var lh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function du(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||lh.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function mu(e,t,n){if(t!=null&&typeof t!="object")throw Error(d(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var i in t)a=t[i],t.hasOwnProperty(i)&&n[i]!==a&&du(e,i,a)}else for(var o in t)t.hasOwnProperty(o)&&du(e,o,t[o])}function vc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ih=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Kr(e){return ih.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Nc=null;function Ec(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ya=null,Qa=null;function fu(e){var t=qa(e);if(t&&(e=t.stateNode)){var n=e[Et]||null;e:switch(e=t.stateNode,t.type){case"input":if(yc(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Bt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var i=a[Et]||null;if(!i)throw Error(d(90));yc(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&cu(a)}break e;case"textarea":ou(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Va(e,!!n.multiple,t,!1)}}}var xc=!1;function pu(e,t,n){if(xc)return e(t,n);xc=!0;try{var a=e(t);return a}finally{if(xc=!1,(Ya!==null||Qa!==null)&&(Ci(),Ya&&(t=Ya,e=Qa,Qa=Ya=null,fu(t),e)))for(t=0;t<e.length;t++)fu(e[t])}}function Ml(e,t){var n=e.stateNode;if(n===null)return null;var a=n[Et]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(d(231,t,typeof n));return n}var Sc=!1;if(yn)try{var Ol={};Object.defineProperty(Ol,"passive",{get:function(){Sc=!0}}),window.addEventListener("test",Ol,Ol),window.removeEventListener("test",Ol,Ol)}catch{Sc=!1}var Qn=null,Dc=null,Jr=null;function hu(){if(Jr)return Jr;var e,t=Dc,n=t.length,a,i="value"in Qn?Qn.value:Qn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var p=n-e;for(a=1;a<=p&&t[n-a]===i[o-a];a++);return Jr=i.slice(e,1<a?1-a:void 0)}function Fr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function $r(){return!0}function bu(){return!1}function xt(e){function t(n,a,i,o,p){this._reactName=n,this._targetInst=i,this.type=a,this.nativeEvent=o,this.target=p,this.currentTarget=null;for(var v in e)e.hasOwnProperty(v)&&(n=e[v],this[v]=n?n(o):o[v]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?$r:bu,this.isPropagationStopped=bu,this}return De(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$r)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$r)},persist:function(){},isPersistent:$r}),t}var ha={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wr=xt(ha),Rl=De({},ha,{view:0,detail:0}),ch=xt(Rl),wc,Hc,Ul,Ir=De({},Rl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ul&&(Ul&&e.type==="mousemove"?(wc=e.screenX-Ul.screenX,Hc=e.screenY-Ul.screenY):Hc=wc=0,Ul=e),wc)},movementY:function(e){return"movementY"in e?e.movementY:Hc}}),yu=xt(Ir),sh=De({},Ir,{dataTransfer:0}),oh=xt(sh),uh=De({},Rl,{relatedTarget:0}),_c=xt(uh),dh=De({},ha,{animationName:0,elapsedTime:0,pseudoElement:0}),mh=xt(dh),fh=De({},ha,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ph=xt(fh),hh=De({},ha,{data:0}),gu=xt(hh),bh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=gh[e])?!!t[e]:!1}function Tc(){return vh}var Nh=De({},Rl,{key:function(e){if(e.key){var t=bh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tc,charCode:function(e){return e.type==="keypress"?Fr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Eh=xt(Nh),xh=De({},Ir,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vu=xt(xh),Sh=De({},Rl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tc}),Dh=xt(Sh),wh=De({},ha,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hh=xt(wh),_h=De({},Ir,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Th=xt(_h),kh=De({},ha,{newState:0,oldState:0}),Ch=xt(kh),zh=[9,13,27,32],kc=yn&&"CompositionEvent"in window,Bl=null;yn&&"documentMode"in document&&(Bl=document.documentMode);var Ah=yn&&"TextEvent"in window&&!Bl,Nu=yn&&(!kc||Bl&&8<Bl&&11>=Bl),Eu=" ",xu=!1;function Su(e,t){switch(e){case"keyup":return zh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Du(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xa=!1;function Mh(e,t){switch(e){case"compositionend":return Du(t);case"keypress":return t.which!==32?null:(xu=!0,Eu);case"textInput":return e=t.data,e===Eu&&xu?null:e;default:return null}}function Oh(e,t){if(Xa)return e==="compositionend"||!kc&&Su(e,t)?(e=hu(),Jr=Dc=Qn=null,Xa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Nu&&t.locale!=="ko"?null:t.data;default:return null}}var Rh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Rh[e.type]:t==="textarea"}function Hu(e,t,n,a){Ya?Qa?Qa.push(a):Qa=[a]:Ya=a,t=Ri(t,"onChange"),0<t.length&&(n=new Wr("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var ql=null,Ll=null;function Uh(e){Im(e,0)}function Pr(e){var t=Al(e);if(cu(t))return e}function _u(e,t){if(e==="change")return t}var Tu=!1;if(yn){var Cc;if(yn){var zc="oninput"in document;if(!zc){var ku=document.createElement("div");ku.setAttribute("oninput","return;"),zc=typeof ku.oninput=="function"}Cc=zc}else Cc=!1;Tu=Cc&&(!document.documentMode||9<document.documentMode)}function Cu(){ql&&(ql.detachEvent("onpropertychange",zu),Ll=ql=null)}function zu(e){if(e.propertyName==="value"&&Pr(Ll)){var t=[];Hu(t,Ll,e,Ec(e)),pu(Uh,t)}}function Bh(e,t,n){e==="focusin"?(Cu(),ql=t,Ll=n,ql.attachEvent("onpropertychange",zu)):e==="focusout"&&Cu()}function qh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pr(Ll)}function Lh(e,t){if(e==="click")return Pr(t)}function Gh(e,t){if(e==="input"||e==="change")return Pr(t)}function Vh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ht=typeof Object.is=="function"?Object.is:Vh;function Gl(e,t){if(Ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var i=n[a];if(!dc.call(t,i)||!Ht(e[i],t[i]))return!1}return!0}function Au(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mu(e,t){var n=Au(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Au(n)}}function Ou(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ou(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ru(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Zr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Zr(e.document)}return t}function Ac(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function jh(e,t){var n=Ru(t);t=e.focusedElem;var a=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Ou(t.ownerDocument.documentElement,t)){if(a!==null&&Ac(t)){if(e=a.start,n=a.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var i=t.textContent.length,o=Math.min(a.start,i);a=a.end===void 0?o:Math.min(a.end,i),!n.extend&&o>a&&(i=a,a=o,o=i),i=Mu(t,o);var p=Mu(t,a);i&&p&&(n.rangeCount!==1||n.anchorNode!==i.node||n.anchorOffset!==i.offset||n.focusNode!==p.node||n.focusOffset!==p.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),n.removeAllRanges(),o>a?(n.addRange(e),n.extend(p.node,p.offset)):(e.setEnd(p.node,p.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Yh=yn&&"documentMode"in document&&11>=document.documentMode,Za=null,Mc=null,Vl=null,Oc=!1;function Uu(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Oc||Za==null||Za!==Zr(a)||(a=Za,"selectionStart"in a&&Ac(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Vl&&Gl(Vl,a)||(Vl=a,a=Ri(Mc,"onSelect"),0<a.length&&(t=new Wr("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Za)))}function ba(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ka={animationend:ba("Animation","AnimationEnd"),animationiteration:ba("Animation","AnimationIteration"),animationstart:ba("Animation","AnimationStart"),transitionrun:ba("Transition","TransitionRun"),transitionstart:ba("Transition","TransitionStart"),transitioncancel:ba("Transition","TransitionCancel"),transitionend:ba("Transition","TransitionEnd")},Rc={},Bu={};yn&&(Bu=document.createElement("div").style,"AnimationEvent"in window||(delete Ka.animationend.animation,delete Ka.animationiteration.animation,delete Ka.animationstart.animation),"TransitionEvent"in window||delete Ka.transitionend.transition);function ya(e){if(Rc[e])return Rc[e];if(!Ka[e])return e;var t=Ka[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Bu)return Rc[e]=t[n];return e}var qu=ya("animationend"),Lu=ya("animationiteration"),Gu=ya("animationstart"),Qh=ya("transitionrun"),Xh=ya("transitionstart"),Zh=ya("transitioncancel"),Vu=ya("transitionend"),ju=new Map,Yu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function $t(e,t){ju.set(e,t),pa(t,[e])}var qt=[],Ja=0,Uc=0;function ei(){for(var e=Ja,t=Uc=Ja=0;t<e;){var n=qt[t];qt[t++]=null;var a=qt[t];qt[t++]=null;var i=qt[t];qt[t++]=null;var o=qt[t];if(qt[t++]=null,a!==null&&i!==null){var p=a.pending;p===null?i.next=i:(i.next=p.next,p.next=i),a.pending=i}o!==0&&Qu(n,i,o)}}function ti(e,t,n,a){qt[Ja++]=e,qt[Ja++]=t,qt[Ja++]=n,qt[Ja++]=a,Uc|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Bc(e,t,n,a){return ti(e,t,n,a),ni(e)}function Xn(e,t){return ti(e,null,null,t),ni(e)}function Qu(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var i=!1,o=e.return;o!==null;)o.childLanes|=n,a=o.alternate,a!==null&&(a.childLanes|=n),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(i=!0)),e=o,o=o.return;i&&t!==null&&e.tag===3&&(o=e.stateNode,i=31-wt(n),o=o.hiddenUpdates,e=o[i],e===null?o[i]=[t]:e.push(t),t.lane=n|536870912)}function ni(e){if(50<mr)throw mr=0,Ys=null,Error(d(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Fa={},Xu=new WeakMap;function Lt(e,t){if(typeof e=="object"&&e!==null){var n=Xu.get(e);return n!==void 0?n:(t={value:e,source:t,stack:oe(t)},Xu.set(e,t),t)}return{value:e,source:t,stack:oe(t)}}var $a=[],Wa=0,ai=null,li=0,Gt=[],Vt=0,ga=null,vn=1,Nn="";function va(e,t){$a[Wa++]=li,$a[Wa++]=ai,ai=e,li=t}function Zu(e,t,n){Gt[Vt++]=vn,Gt[Vt++]=Nn,Gt[Vt++]=ga,ga=e;var a=vn;e=Nn;var i=32-wt(a)-1;a&=~(1<<i),n+=1;var o=32-wt(t)+i;if(30<o){var p=i-i%5;o=(a&(1<<p)-1).toString(32),a>>=p,i-=p,vn=1<<32-wt(t)+i|n<<i|a,Nn=o+e}else vn=1<<o|n<<i|a,Nn=e}function qc(e){e.return!==null&&(va(e,1),Zu(e,1,0))}function Lc(e){for(;e===ai;)ai=$a[--Wa],$a[Wa]=null,li=$a[--Wa],$a[Wa]=null;for(;e===ga;)ga=Gt[--Vt],Gt[Vt]=null,Nn=Gt[--Vt],Gt[Vt]=null,vn=Gt[--Vt],Gt[Vt]=null}var yt=null,ct=null,Ee=!1,Wt=null,sn=!1,Gc=Error(d(519));function Na(e){var t=Error(d(418,""));throw Ql(Lt(t,e)),Gc}function Ku(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[ft]=e,t[Et]=a,n){case"dialog":be("cancel",t),be("close",t);break;case"iframe":case"object":case"embed":be("load",t);break;case"video":case"audio":for(n=0;n<pr.length;n++)be(pr[n],t);break;case"source":be("error",t);break;case"img":case"image":case"link":be("error",t),be("load",t);break;case"details":be("toggle",t);break;case"input":be("invalid",t),su(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Xr(t);break;case"select":be("invalid",t);break;case"textarea":be("invalid",t),uu(t,a.value,a.defaultValue,a.children),Xr(t)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||nf(t.textContent,n)?(a.popover!=null&&(be("beforetoggle",t),be("toggle",t)),a.onScroll!=null&&be("scroll",t),a.onScrollEnd!=null&&be("scrollend",t),a.onClick!=null&&(t.onclick=Ui),t=!0):t=!1,t||Na(e)}function Ju(e){for(yt=e.return;yt;)switch(yt.tag){case 3:case 27:sn=!0;return;case 5:case 13:sn=!1;return;default:yt=yt.return}}function jl(e){if(e!==yt)return!1;if(!Ee)return Ju(e),Ee=!0,!1;var t=!1,n;if((n=e.tag!==3&&e.tag!==27)&&((n=e.tag===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||io(e.type,e.memoizedProps)),n=!n),n&&(t=!0),t&&ct&&Na(e),Ju(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){ct=Pt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}ct=null}}else ct=yt?Pt(e.stateNode.nextSibling):null;return!0}function Yl(){ct=yt=null,Ee=!1}function Ql(e){Wt===null?Wt=[e]:Wt.push(e)}var Xl=Error(d(460)),Fu=Error(d(474)),Vc={then:function(){}};function $u(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ri(){}function Wu(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ri,ri),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,e===Xl?Error(d(483)):e;default:if(typeof t.status=="string")t.then(ri,ri);else{if(e=Re,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=a}},function(a){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,e===Xl?Error(d(483)):e}throw Zl=t,Xl}}var Zl=null;function Iu(){if(Zl===null)throw Error(d(459));var e=Zl;return Zl=null,e}var Ia=null,Kl=0;function ii(e){var t=Kl;return Kl+=1,Ia===null&&(Ia=[]),Wu(Ia,e,t)}function Jl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ci(e,t){throw t.$$typeof===g?Error(d(525)):(e=Object.prototype.toString.call(t),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Pu(e){var t=e._init;return t(e._payload)}function ed(e){function t(H,D){if(e){var k=H.deletions;k===null?(H.deletions=[D],H.flags|=16):k.push(D)}}function n(H,D){if(!e)return null;for(;D!==null;)t(H,D),D=D.sibling;return null}function a(H){for(var D=new Map;H!==null;)H.key!==null?D.set(H.key,H):D.set(H.index,H),H=H.sibling;return D}function i(H,D){return H=aa(H,D),H.index=0,H.sibling=null,H}function o(H,D,k){return H.index=k,e?(k=H.alternate,k!==null?(k=k.index,k<D?(H.flags|=33554434,D):k):(H.flags|=33554434,D)):(H.flags|=1048576,D)}function p(H){return e&&H.alternate===null&&(H.flags|=33554434),H}function v(H,D,k,U){return D===null||D.tag!==6?(D=Rs(k,H.mode,U),D.return=H,D):(D=i(D,k),D.return=H,D)}function N(H,D,k,U){var X=k.type;return X===T?O(H,D,k.props.children,U,k.key):D!==null&&(D.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===Te&&Pu(X)===D.type)?(D=i(D,k.props),Jl(D,k),D.return=H,D):(D=wi(k.type,k.key,k.props,null,H.mode,U),Jl(D,k),D.return=H,D)}function w(H,D,k,U){return D===null||D.tag!==4||D.stateNode.containerInfo!==k.containerInfo||D.stateNode.implementation!==k.implementation?(D=Us(k,H.mode,U),D.return=H,D):(D=i(D,k.children||[]),D.return=H,D)}function O(H,D,k,U,X){return D===null||D.tag!==7?(D=Ca(k,H.mode,U,X),D.return=H,D):(D=i(D,k),D.return=H,D)}function B(H,D,k){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return D=Rs(""+D,H.mode,k),D.return=H,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case x:return k=wi(D.type,D.key,D.props,null,H.mode,k),Jl(k,D),k.return=H,k;case C:return D=Us(D,H.mode,k),D.return=H,D;case Te:var U=D._init;return D=U(D._payload),B(H,D,k)}if(P(D)||mt(D))return D=Ca(D,H.mode,k,null),D.return=H,D;if(typeof D.then=="function")return B(H,ii(D),k);if(D.$$typeof===Y)return B(H,xi(H,D),k);ci(H,D)}return null}function z(H,D,k,U){var X=D!==null?D.key:null;if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return X!==null?null:v(H,D,""+k,U);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case x:return k.key===X?N(H,D,k,U):null;case C:return k.key===X?w(H,D,k,U):null;case Te:return X=k._init,k=X(k._payload),z(H,D,k,U)}if(P(k)||mt(k))return X!==null?null:O(H,D,k,U,null);if(typeof k.then=="function")return z(H,D,ii(k),U);if(k.$$typeof===Y)return z(H,D,xi(H,k),U);ci(H,k)}return null}function M(H,D,k,U,X){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return H=H.get(k)||null,v(D,H,""+U,X);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case x:return H=H.get(U.key===null?k:U.key)||null,N(D,H,U,X);case C:return H=H.get(U.key===null?k:U.key)||null,w(D,H,U,X);case Te:var pe=U._init;return U=pe(U._payload),M(H,D,k,U,X)}if(P(U)||mt(U))return H=H.get(k)||null,O(D,H,U,X,null);if(typeof U.then=="function")return M(H,D,k,ii(U),X);if(U.$$typeof===Y)return M(H,D,k,xi(D,U),X);ci(D,U)}return null}function $(H,D,k,U){for(var X=null,pe=null,W=D,ee=D=0,lt=null;W!==null&&ee<k.length;ee++){W.index>ee?(lt=W,W=null):lt=W.sibling;var xe=z(H,W,k[ee],U);if(xe===null){W===null&&(W=lt);break}e&&W&&xe.alternate===null&&t(H,W),D=o(xe,D,ee),pe===null?X=xe:pe.sibling=xe,pe=xe,W=lt}if(ee===k.length)return n(H,W),Ee&&va(H,ee),X;if(W===null){for(;ee<k.length;ee++)W=B(H,k[ee],U),W!==null&&(D=o(W,D,ee),pe===null?X=W:pe.sibling=W,pe=W);return Ee&&va(H,ee),X}for(W=a(W);ee<k.length;ee++)lt=M(W,H,ee,k[ee],U),lt!==null&&(e&&lt.alternate!==null&&W.delete(lt.key===null?ee:lt.key),D=o(lt,D,ee),pe===null?X=lt:pe.sibling=lt,pe=lt);return e&&W.forEach(function(ua){return t(H,ua)}),Ee&&va(H,ee),X}function ie(H,D,k,U){if(k==null)throw Error(d(151));for(var X=null,pe=null,W=D,ee=D=0,lt=null,xe=k.next();W!==null&&!xe.done;ee++,xe=k.next()){W.index>ee?(lt=W,W=null):lt=W.sibling;var ua=z(H,W,xe.value,U);if(ua===null){W===null&&(W=lt);break}e&&W&&ua.alternate===null&&t(H,W),D=o(ua,D,ee),pe===null?X=ua:pe.sibling=ua,pe=ua,W=lt}if(xe.done)return n(H,W),Ee&&va(H,ee),X;if(W===null){for(;!xe.done;ee++,xe=k.next())xe=B(H,xe.value,U),xe!==null&&(D=o(xe,D,ee),pe===null?X=xe:pe.sibling=xe,pe=xe);return Ee&&va(H,ee),X}for(W=a(W);!xe.done;ee++,xe=k.next())xe=M(W,H,ee,xe.value,U),xe!==null&&(e&&xe.alternate!==null&&W.delete(xe.key===null?ee:xe.key),D=o(xe,D,ee),pe===null?X=xe:pe.sibling=xe,pe=xe);return e&&W.forEach(function(iy){return t(H,iy)}),Ee&&va(H,ee),X}function Ye(H,D,k,U){if(typeof k=="object"&&k!==null&&k.type===T&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case x:e:{for(var X=k.key;D!==null;){if(D.key===X){if(X=k.type,X===T){if(D.tag===7){n(H,D.sibling),U=i(D,k.props.children),U.return=H,H=U;break e}}else if(D.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===Te&&Pu(X)===D.type){n(H,D.sibling),U=i(D,k.props),Jl(U,k),U.return=H,H=U;break e}n(H,D);break}else t(H,D);D=D.sibling}k.type===T?(U=Ca(k.props.children,H.mode,U,k.key),U.return=H,H=U):(U=wi(k.type,k.key,k.props,null,H.mode,U),Jl(U,k),U.return=H,H=U)}return p(H);case C:e:{for(X=k.key;D!==null;){if(D.key===X)if(D.tag===4&&D.stateNode.containerInfo===k.containerInfo&&D.stateNode.implementation===k.implementation){n(H,D.sibling),U=i(D,k.children||[]),U.return=H,H=U;break e}else{n(H,D);break}else t(H,D);D=D.sibling}U=Us(k,H.mode,U),U.return=H,H=U}return p(H);case Te:return X=k._init,k=X(k._payload),Ye(H,D,k,U)}if(P(k))return $(H,D,k,U);if(mt(k)){if(X=mt(k),typeof X!="function")throw Error(d(150));return k=X.call(k),ie(H,D,k,U)}if(typeof k.then=="function")return Ye(H,D,ii(k),U);if(k.$$typeof===Y)return Ye(H,D,xi(H,k),U);ci(H,k)}return typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint"?(k=""+k,D!==null&&D.tag===6?(n(H,D.sibling),U=i(D,k),U.return=H,H=U):(n(H,D),U=Rs(k,H.mode,U),U.return=H,H=U),p(H)):n(H,D)}return function(H,D,k,U){try{Kl=0;var X=Ye(H,D,k,U);return Ia=null,X}catch(W){if(W===Xl)throw W;var pe=Xt(29,W,null,H.mode);return pe.lanes=U,pe.return=H,pe}}}var Ea=ed(!0),td=ed(!1),Pa=we(null),si=we(0);function nd(e,t){e=zn,qe(si,e),qe(Pa,t),zn=e|t.baseLanes}function jc(){qe(si,zn),qe(Pa,Pa.current)}function Yc(){zn=si.current,Fe(Pa),Fe(si)}var jt=we(null),on=null;function Zn(e){var t=e.alternate;qe(Pe,Pe.current&1),qe(jt,e),on===null&&(t===null||Pa.current!==null||t.memoizedState!==null)&&(on=e)}function ad(e){if(e.tag===22){if(qe(Pe,Pe.current),qe(jt,e),on===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(on=e)}}else Kn()}function Kn(){qe(Pe,Pe.current),qe(jt,jt.current)}function En(e){Fe(jt),on===e&&(on=null),Fe(Pe)}var Pe=we(0);function oi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Kh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Jh=l.unstable_scheduleCallback,Fh=l.unstable_NormalPriority,et={$$typeof:Y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Qc(){return{controller:new Kh,data:new Map,refCount:0}}function Fl(e){e.refCount--,e.refCount===0&&Jh(Fh,function(){e.controller.abort()})}var $l=null,Xc=0,el=0,tl=null;function $h(e,t){if($l===null){var n=$l=[];Xc=0,el=Ws(),tl={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Xc++,t.then(ld,ld),t}function ld(){if(--Xc===0&&$l!==null){tl!==null&&(tl.status="fulfilled");var e=$l;$l=null,el=0,tl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Wh(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(i){n.push(i)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var i=0;i<n.length;i++)(0,n[i])(t)},function(i){for(a.status="rejected",a.reason=i,i=0;i<n.length;i++)(0,n[i])(void 0)}),a}var rd=te.S;te.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&$h(e,t),rd!==null&&rd(e,t)};var xa=we(null);function Zc(){var e=xa.current;return e!==null?e:Re.pooledCache}function ui(e,t){t===null?qe(xa,xa.current):qe(xa,t.pool)}function id(){var e=Zc();return e===null?null:{parent:et._currentValue,pool:e}}var Jn=0,me=null,ke=null,$e=null,di=!1,nl=!1,Sa=!1,mi=0,Wl=0,al=null,Ih=0;function Ke(){throw Error(d(321))}function Kc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ht(e[n],t[n]))return!1;return!0}function Jc(e,t,n,a,i,o){return Jn=o,me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,te.H=e===null||e.memoizedState===null?Da:Fn,Sa=!1,o=n(a,i),Sa=!1,nl&&(o=sd(t,n,a,i)),cd(e),o}function cd(e){te.H=un;var t=ke!==null&&ke.next!==null;if(Jn=0,$e=ke=me=null,di=!1,Wl=0,al=null,t)throw Error(d(300));e===null||nt||(e=e.dependencies,e!==null&&Ei(e)&&(nt=!0))}function sd(e,t,n,a){me=e;var i=0;do{if(nl&&(al=null),Wl=0,nl=!1,25<=i)throw Error(d(301));if(i+=1,$e=ke=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}te.H=wa,o=t(n,a)}while(nl);return o}function Ph(){var e=te.H,t=e.useState()[0];return t=typeof t.then=="function"?Il(t):t,e=e.useState()[0],(ke!==null?ke.memoizedState:null)!==e&&(me.flags|=1024),t}function Fc(){var e=mi!==0;return mi=0,e}function $c(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Wc(e){if(di){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}di=!1}Jn=0,$e=ke=me=null,nl=!1,Wl=mi=0,al=null}function St(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?me.memoizedState=$e=e:$e=$e.next=e,$e}function We(){if(ke===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var t=$e===null?me.memoizedState:$e.next;if(t!==null)$e=t,ke=e;else{if(e===null)throw me.alternate===null?Error(d(467)):Error(d(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},$e===null?me.memoizedState=$e=e:$e=$e.next=e}return $e}var fi;fi=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Il(e){var t=Wl;return Wl+=1,al===null&&(al=[]),e=Wu(al,e,t),t=me,($e===null?t.memoizedState:$e.next)===null&&(t=t.alternate,te.H=t===null||t.memoizedState===null?Da:Fn),e}function pi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Il(e);if(e.$$typeof===Y)return pt(e)}throw Error(d(438,String(e)))}function Ic(e){var t=null,n=me.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=me.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=fi(),me.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=Ot;return t.index++,n}function xn(e,t){return typeof t=="function"?t(e):t}function hi(e){var t=We();return Pc(t,ke,e)}function Pc(e,t,n){var a=e.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=n;var i=e.baseQueue,o=a.pending;if(o!==null){if(i!==null){var p=i.next;i.next=o.next,o.next=p}t.baseQueue=i=o,a.pending=null}if(o=e.baseState,i===null)e.memoizedState=o;else{t=i.next;var v=p=null,N=null,w=t,O=!1;do{var B=w.lane&-536870913;if(B!==w.lane?(ge&B)===B:(Jn&B)===B){var z=w.revertLane;if(z===0)N!==null&&(N=N.next={lane:0,revertLane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),B===el&&(O=!0);else if((Jn&z)===z){w=w.next,z===el&&(O=!0);continue}else B={lane:0,revertLane:w.revertLane,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},N===null?(v=N=B,p=o):N=N.next=B,me.lanes|=z,la|=z;B=w.action,Sa&&n(o,B),o=w.hasEagerState?w.eagerState:n(o,B)}else z={lane:B,revertLane:w.revertLane,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},N===null?(v=N=z,p=o):N=N.next=z,me.lanes|=B,la|=B;w=w.next}while(w!==null&&w!==t);if(N===null?p=o:N.next=v,!Ht(o,e.memoizedState)&&(nt=!0,O&&(n=tl,n!==null)))throw n;e.memoizedState=o,e.baseState=p,e.baseQueue=N,a.lastRenderedState=o}return i===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function es(e){var t=We(),n=t.queue;if(n===null)throw Error(d(311));n.lastRenderedReducer=e;var a=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var p=i=i.next;do o=e(o,p.action),p=p.next;while(p!==i);Ht(o,t.memoizedState)||(nt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,a]}function od(e,t,n){var a=me,i=We(),o=Ee;if(o){if(n===void 0)throw Error(d(407));n=n()}else n=t();var p=!Ht((ke||i).memoizedState,n);if(p&&(i.memoizedState=n,nt=!0),i=i.queue,as(md.bind(null,a,i,e),[e]),i.getSnapshot!==t||p||$e!==null&&$e.memoizedState.tag&1){if(a.flags|=2048,ll(9,dd.bind(null,a,i,n,t),{destroy:void 0},null),Re===null)throw Error(d(349));o||(Jn&60)!==0||ud(a,t,n)}return n}function ud(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=me.updateQueue,t===null?(t=fi(),me.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function dd(e,t,n,a){t.value=n,t.getSnapshot=a,fd(t)&&pd(e)}function md(e,t,n){return n(function(){fd(t)&&pd(e)})}function fd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ht(e,n)}catch{return!0}}function pd(e){var t=Xn(e,2);t!==null&&gt(t,e,2)}function ts(e){var t=St();if(typeof e=="function"){var n=e;if(e=n(),Sa){jn(!0);try{n()}finally{jn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xn,lastRenderedState:e},t}function hd(e,t,n,a){return e.baseState=n,Pc(e,ke,typeof a=="function"?a:xn)}function eb(e,t,n,a,i){if(gi(e))throw Error(d(485));if(e=t.action,e!==null){var o={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){o.listeners.push(p)}};te.T!==null?n(!0):o.isTransition=!1,a(o),n=t.pending,n===null?(o.next=t.pending=o,bd(t,o)):(o.next=n.next,t.pending=n.next=o)}}function bd(e,t){var n=t.action,a=t.payload,i=e.state;if(t.isTransition){var o=te.T,p={};te.T=p;try{var v=n(i,a),N=te.S;N!==null&&N(p,v),yd(e,t,v)}catch(w){ns(e,t,w)}finally{te.T=o}}else try{o=n(i,a),yd(e,t,o)}catch(w){ns(e,t,w)}}function yd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){gd(e,t,a)},function(a){return ns(e,t,a)}):gd(e,t,n)}function gd(e,t,n){t.status="fulfilled",t.value=n,vd(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,bd(e,n)))}function ns(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,vd(t),t=t.next;while(t!==a)}e.action=null}function vd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Nd(e,t){return t}function Ed(e,t){if(Ee){var n=Re.formState;if(n!==null){e:{var a=me;if(Ee){if(ct){t:{for(var i=ct,o=sn;i.nodeType!==8;){if(!o){i=null;break t}if(i=Pt(i.nextSibling),i===null){i=null;break t}}o=i.data,i=o==="F!"||o==="F"?i:null}if(i){ct=Pt(i.nextSibling),a=i.data==="F!";break e}}Na(a)}a=!1}a&&(t=n[0])}}return n=St(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Nd,lastRenderedState:t},n.queue=a,n=Ld.bind(null,me,a),a.dispatch=n,a=ts(!1),o=ss.bind(null,me,!1,a.queue),a=St(),i={state:t,dispatch:null,action:e,pending:null},a.queue=i,n=eb.bind(null,me,i,o,n),i.dispatch=n,a.memoizedState=e,[t,n,!1]}function xd(e){var t=We();return Sd(t,ke,e)}function Sd(e,t,n){t=Pc(e,t,Nd)[0],e=hi(xn)[0],t=typeof t=="object"&&t!==null&&typeof t.then=="function"?Il(t):t;var a=We(),i=a.queue,o=i.dispatch;return n!==a.memoizedState&&(me.flags|=2048,ll(9,tb.bind(null,i,n),{destroy:void 0},null)),[t,o,e]}function tb(e,t){e.action=t}function Dd(e){var t=We(),n=ke;if(n!==null)return Sd(t,n,e);We(),t=t.memoizedState,n=We();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function ll(e,t,n,a){return e={tag:e,create:t,inst:n,deps:a,next:null},t=me.updateQueue,t===null&&(t=fi(),me.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function wd(){return We().memoizedState}function bi(e,t,n,a){var i=St();me.flags|=e,i.memoizedState=ll(1|t,n,{destroy:void 0},a===void 0?null:a)}function yi(e,t,n,a){var i=We();a=a===void 0?null:a;var o=i.memoizedState.inst;ke!==null&&a!==null&&Kc(a,ke.memoizedState.deps)?i.memoizedState=ll(t,n,o,a):(me.flags|=e,i.memoizedState=ll(1|t,n,o,a))}function Hd(e,t){bi(8390656,8,e,t)}function as(e,t){yi(2048,8,e,t)}function _d(e,t){return yi(4,2,e,t)}function Td(e,t){return yi(4,4,e,t)}function kd(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Cd(e,t,n){n=n!=null?n.concat([e]):null,yi(4,4,kd.bind(null,t,e),n)}function ls(){}function zd(e,t){var n=We();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Kc(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Ad(e,t){var n=We();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Kc(t,a[1]))return a[0];if(a=e(),Sa){jn(!0);try{e()}finally{jn(!1)}}return n.memoizedState=[a,t],a}function rs(e,t,n){return n===void 0||(Jn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=Om(),me.lanes|=e,la|=e,n)}function Md(e,t,n,a){return Ht(n,t)?n:Pa.current!==null?(e=rs(e,n,a),Ht(e,t)||(nt=!0),e):(Jn&42)===0?(nt=!0,e.memoizedState=n):(e=Om(),me.lanes|=e,la|=e,t)}function Od(e,t,n,a,i){var o=Q.p;Q.p=o!==0&&8>o?o:8;var p=te.T,v={};te.T=v,ss(e,!1,t,n);try{var N=i(),w=te.S;if(w!==null&&w(v,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var O=Wh(N,a);Pl(e,t,O,Ct(e))}else Pl(e,t,a,Ct(e))}catch(B){Pl(e,t,{then:function(){},status:"rejected",reason:B},Ct())}finally{Q.p=o,te.T=p}}function nb(){}function is(e,t,n,a){if(e.tag!==5)throw Error(d(476));var i=Rd(e).queue;Od(e,i,t,ye,n===null?nb:function(){return Ud(e),n(a)})}function Rd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ye,baseState:ye,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xn,lastRenderedState:ye},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ud(e){var t=Rd(e).next.queue;Pl(e,t,{},Ct())}function cs(){return pt(vr)}function Bd(){return We().memoizedState}function qd(){return We().memoizedState}function ab(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Ct();e=In(n);var a=Pn(t,e,n);a!==null&&(gt(a,t,n),nr(a,t,n)),t={cache:Qc()},e.payload=t;return}t=t.return}}function lb(e,t,n){var a=Ct();n={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},gi(e)?Gd(t,n):(n=Bc(e,t,n,a),n!==null&&(gt(n,e,a),Vd(n,t,a)))}function Ld(e,t,n){var a=Ct();Pl(e,t,n,a)}function Pl(e,t,n,a){var i={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(gi(e))Gd(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var p=t.lastRenderedState,v=o(p,n);if(i.hasEagerState=!0,i.eagerState=v,Ht(v,p))return ti(e,t,i,0),Re===null&&ei(),!1}catch{}if(n=Bc(e,t,i,a),n!==null)return gt(n,e,a),Vd(n,t,a),!0}return!1}function ss(e,t,n,a){if(a={lane:2,revertLane:Ws(),action:a,hasEagerState:!1,eagerState:null,next:null},gi(e)){if(t)throw Error(d(479))}else t=Bc(e,n,a,2),t!==null&&gt(t,e,2)}function gi(e){var t=e.alternate;return e===me||t!==null&&t===me}function Gd(e,t){nl=di=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vd(e,t,n){if((n&4194176)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Io(e,n)}}var un={readContext:pt,use:pi,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useLayoutEffect:Ke,useInsertionEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useSyncExternalStore:Ke,useId:Ke};un.useCacheRefresh=Ke,un.useMemoCache=Ke,un.useHostTransitionStatus=Ke,un.useFormState=Ke,un.useActionState=Ke,un.useOptimistic=Ke;var Da={readContext:pt,use:pi,useCallback:function(e,t){return St().memoizedState=[e,t===void 0?null:t],e},useContext:pt,useEffect:Hd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,bi(4194308,4,kd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return bi(4194308,4,e,t)},useInsertionEffect:function(e,t){bi(4,2,e,t)},useMemo:function(e,t){var n=St();t=t===void 0?null:t;var a=e();if(Sa){jn(!0);try{e()}finally{jn(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=St();if(n!==void 0){var i=n(t);if(Sa){jn(!0);try{n(t)}finally{jn(!1)}}}else i=t;return a.memoizedState=a.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},a.queue=e,e=e.dispatch=lb.bind(null,me,e),[a.memoizedState,e]},useRef:function(e){var t=St();return e={current:e},t.memoizedState=e},useState:function(e){e=ts(e);var t=e.queue,n=Ld.bind(null,me,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ls,useDeferredValue:function(e,t){var n=St();return rs(n,e,t)},useTransition:function(){var e=ts(!1);return e=Od.bind(null,me,e.queue,!0,!1),St().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=me,i=St();if(Ee){if(n===void 0)throw Error(d(407));n=n()}else{if(n=t(),Re===null)throw Error(d(349));(ge&60)!==0||ud(a,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Hd(md.bind(null,a,o,e),[e]),a.flags|=2048,ll(9,dd.bind(null,a,o,n,t),{destroy:void 0},null),n},useId:function(){var e=St(),t=Re.identifierPrefix;if(Ee){var n=Nn,a=vn;n=(a&~(1<<32-wt(a)-1)).toString(32)+n,t=":"+t+"R"+n,n=mi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ih++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},useCacheRefresh:function(){return St().memoizedState=ab.bind(null,me)}};Da.useMemoCache=Ic,Da.useHostTransitionStatus=cs,Da.useFormState=Ed,Da.useActionState=Ed,Da.useOptimistic=function(e){var t=St();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=ss.bind(null,me,!0,n),n.dispatch=t,[e,t]};var Fn={readContext:pt,use:pi,useCallback:zd,useContext:pt,useEffect:as,useImperativeHandle:Cd,useInsertionEffect:_d,useLayoutEffect:Td,useMemo:Ad,useReducer:hi,useRef:wd,useState:function(){return hi(xn)},useDebugValue:ls,useDeferredValue:function(e,t){var n=We();return Md(n,ke.memoizedState,e,t)},useTransition:function(){var e=hi(xn)[0],t=We().memoizedState;return[typeof e=="boolean"?e:Il(e),t]},useSyncExternalStore:od,useId:Bd};Fn.useCacheRefresh=qd,Fn.useMemoCache=Ic,Fn.useHostTransitionStatus=cs,Fn.useFormState=xd,Fn.useActionState=xd,Fn.useOptimistic=function(e,t){var n=We();return hd(n,ke,e,t)};var wa={readContext:pt,use:pi,useCallback:zd,useContext:pt,useEffect:as,useImperativeHandle:Cd,useInsertionEffect:_d,useLayoutEffect:Td,useMemo:Ad,useReducer:es,useRef:wd,useState:function(){return es(xn)},useDebugValue:ls,useDeferredValue:function(e,t){var n=We();return ke===null?rs(n,e,t):Md(n,ke.memoizedState,e,t)},useTransition:function(){var e=es(xn)[0],t=We().memoizedState;return[typeof e=="boolean"?e:Il(e),t]},useSyncExternalStore:od,useId:Bd};wa.useCacheRefresh=qd,wa.useMemoCache=Ic,wa.useHostTransitionStatus=cs,wa.useFormState=Dd,wa.useActionState=Dd,wa.useOptimistic=function(e,t){var n=We();return ke!==null?hd(n,ke,e,t):(n.baseState=e,[e,n.queue.dispatch])};function os(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:De({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var us={isMounted:function(e){return(e=e._reactInternals)?ae(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Ct(),i=In(a);i.payload=t,n!=null&&(i.callback=n),t=Pn(e,i,a),t!==null&&(gt(t,e,a),nr(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Ct(),i=In(a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Pn(e,i,a),t!==null&&(gt(t,e,a),nr(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ct(),a=In(n);a.tag=2,t!=null&&(a.callback=t),t=Pn(e,a,n),t!==null&&(gt(t,e,n),nr(t,e,n))}};function jd(e,t,n,a,i,o,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,o,p):t.prototype&&t.prototype.isPureReactComponent?!Gl(n,a)||!Gl(i,o):!0}function Yd(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&us.enqueueReplaceState(t,t.state,null)}function Ha(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=De({},n));for(var i in e)n[i]===void 0&&(n[i]=e[i])}return n}var vi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Qd(e){vi(e)}function Xd(e){console.error(e)}function Zd(e){vi(e)}function Ni(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Kd(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function ds(e,t,n){return n=In(n),n.tag=3,n.payload={element:null},n.callback=function(){Ni(e,t)},n}function Jd(e){return e=In(e),e.tag=3,e}function Fd(e,t,n,a){var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var o=a.value;e.payload=function(){return i(o)},e.callback=function(){Kd(t,n,a)}}var p=n.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(e.callback=function(){Kd(t,n,a),typeof i!="function"&&(ra===null?ra=new Set([this]):ra.add(this));var v=a.stack;this.componentDidCatch(a.value,{componentStack:v!==null?v:""})})}function rb(e,t,n,a,i){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&tr(t,n,i,!0),n=jt.current,n!==null){switch(n.tag){case 13:return on===null?Zs():n.alternate===null&&je===0&&(je=3),n.flags&=-257,n.flags|=65536,n.lanes=i,a===Vc?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),Js(e,a,i)),!1;case 22:return n.flags|=65536,a===Vc?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),Js(e,a,i)),!1}throw Error(d(435,n.tag))}return Js(e,a,i),Zs(),!1}if(Ee)return t=jt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,a!==Gc&&(e=Error(d(422),{cause:a}),Ql(Lt(e,n)))):(a!==Gc&&(t=Error(d(423),{cause:a}),Ql(Lt(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,a=Lt(a,n),i=ds(e.stateNode,a,i),Hs(e,i),je!==4&&(je=2)),!1;var o=Error(d(520),{cause:a});if(o=Lt(o,n),ur===null?ur=[o]:ur.push(o),je!==4&&(je=2),t===null)return!0;a=Lt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=ds(n.stateNode,a,e),Hs(n,e),!1;case 1:if(t=n.type,o=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(ra===null||!ra.has(o))))return n.flags|=65536,i&=-i,n.lanes|=i,i=Jd(i),Fd(i,e,n,a),Hs(n,i),!1}n=n.return}while(n!==null);return!1}var $d=Error(d(461)),nt=!1;function st(e,t,n,a){t.child=e===null?td(t,null,n,a):Ea(t,e.child,n,a)}function Wd(e,t,n,a,i){n=n.render;var o=t.ref;if("ref"in a){var p={};for(var v in a)v!=="ref"&&(p[v]=a[v])}else p=a;return Ta(t),a=Jc(e,t,n,p,o,i),v=Fc(),e!==null&&!nt?($c(e,t,i),Sn(e,t,i)):(Ee&&v&&qc(t),t.flags|=1,st(e,t,a,i),t.child)}function Id(e,t,n,a,i){if(e===null){var o=n.type;return typeof o=="function"&&!Os(o)&&o.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=o,Pd(e,t,o,a,i)):(e=wi(n.type,null,a,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!Ns(e,i)){var p=o.memoizedProps;if(n=n.compare,n=n!==null?n:Gl,n(p,a)&&e.ref===t.ref)return Sn(e,t,i)}return t.flags|=1,e=aa(o,a),e.ref=t.ref,e.return=t,t.child=e}function Pd(e,t,n,a,i){if(e!==null){var o=e.memoizedProps;if(Gl(o,a)&&e.ref===t.ref)if(nt=!1,t.pendingProps=a=o,Ns(e,i))(e.flags&131072)!==0&&(nt=!0);else return t.lanes=e.lanes,Sn(e,t,i)}return ms(e,t,n,a,i)}function em(e,t,n){var a=t.pendingProps,i=a.children,o=(t.stateNode._pendingVisibility&2)!==0,p=e!==null?e.memoizedState:null;if(er(e,t),a.mode==="hidden"||o){if((t.flags&128)!==0){if(a=p!==null?p.baseLanes|n:n,e!==null){for(i=t.child=e.child,o=0;i!==null;)o=o|i.lanes|i.childLanes,i=i.sibling;t.childLanes=o&~a}else t.childLanes=0,t.child=null;return tm(e,t,a,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ui(t,p!==null?p.cachePool:null),p!==null?nd(t,p):jc(),ad(t);else return t.lanes=t.childLanes=536870912,tm(e,t,p!==null?p.baseLanes|n:n,n)}else p!==null?(ui(t,p.cachePool),nd(t,p),Kn(),t.memoizedState=null):(e!==null&&ui(t,null),jc(),Kn());return st(e,t,i,n),t.child}function tm(e,t,n,a){var i=Zc();return i=i===null?null:{parent:et._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&ui(t,null),jc(),ad(t),e!==null&&tr(e,t,a,!0),null}function er(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=2097664);else{if(typeof n!="function"&&typeof n!="object")throw Error(d(284));(e===null||e.ref!==n)&&(t.flags|=2097664)}}function ms(e,t,n,a,i){return Ta(t),n=Jc(e,t,n,a,void 0,i),a=Fc(),e!==null&&!nt?($c(e,t,i),Sn(e,t,i)):(Ee&&a&&qc(t),t.flags|=1,st(e,t,n,i),t.child)}function nm(e,t,n,a,i,o){return Ta(t),t.updateQueue=null,n=sd(t,a,n,i),cd(e),a=Fc(),e!==null&&!nt?($c(e,t,o),Sn(e,t,o)):(Ee&&a&&qc(t),t.flags|=1,st(e,t,n,o),t.child)}function am(e,t,n,a,i){if(Ta(t),t.stateNode===null){var o=Fa,p=n.contextType;typeof p=="object"&&p!==null&&(o=pt(p)),o=new n(a,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=us,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=a,o.state=t.memoizedState,o.refs={},Ds(t),p=n.contextType,o.context=typeof p=="object"&&p!==null?pt(p):Fa,o.state=t.memoizedState,p=n.getDerivedStateFromProps,typeof p=="function"&&(os(t,n,p,a),o.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(p=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),p!==o.state&&us.enqueueReplaceState(o,o.state,null),lr(t,a,o,i),ar(),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){o=t.stateNode;var v=t.memoizedProps,N=Ha(n,v);o.props=N;var w=o.context,O=n.contextType;p=Fa,typeof O=="object"&&O!==null&&(p=pt(O));var B=n.getDerivedStateFromProps;O=typeof B=="function"||typeof o.getSnapshotBeforeUpdate=="function",v=t.pendingProps!==v,O||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(v||w!==p)&&Yd(t,o,a,p),Wn=!1;var z=t.memoizedState;o.state=z,lr(t,a,o,i),ar(),w=t.memoizedState,v||z!==w||Wn?(typeof B=="function"&&(os(t,n,B,a),w=t.memoizedState),(N=Wn||jd(t,n,N,a,z,w,p))?(O||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=w),o.props=a,o.state=w,o.context=p,a=N):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{o=t.stateNode,ws(e,t),p=t.memoizedProps,O=Ha(n,p),o.props=O,B=t.pendingProps,z=o.context,w=n.contextType,N=Fa,typeof w=="object"&&w!==null&&(N=pt(w)),v=n.getDerivedStateFromProps,(w=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(p!==B||z!==N)&&Yd(t,o,a,N),Wn=!1,z=t.memoizedState,o.state=z,lr(t,a,o,i),ar();var M=t.memoizedState;p!==B||z!==M||Wn||e!==null&&e.dependencies!==null&&Ei(e.dependencies)?(typeof v=="function"&&(os(t,n,v,a),M=t.memoizedState),(O=Wn||jd(t,n,O,a,z,M,N)||e!==null&&e.dependencies!==null&&Ei(e.dependencies))?(w||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(a,M,N),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(a,M,N)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||p===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=M),o.props=a,o.state=M,o.context=N,a=O):(typeof o.componentDidUpdate!="function"||p===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),a=!1)}return o=a,er(e,t),a=(t.flags&128)!==0,o||a?(o=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:o.render(),t.flags|=1,e!==null&&a?(t.child=Ea(t,e.child,null,i),t.child=Ea(t,null,n,i)):st(e,t,n,i),t.memoizedState=o.state,e=t.child):e=Sn(e,t,i),e}function lm(e,t,n,a){return Yl(),t.flags|=256,st(e,t,n,a),t.child}var fs={dehydrated:null,treeContext:null,retryLane:0};function ps(e){return{baseLanes:e,cachePool:id()}}function hs(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Zt),e}function rm(e,t,n){var a=t.pendingProps,i=!1,o=(t.flags&128)!==0,p;if((p=o)||(p=e!==null&&e.memoizedState===null?!1:(Pe.current&2)!==0),p&&(i=!0,t.flags&=-129),p=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ee){if(i?Zn(t):Kn(),Ee){var v=ct,N;if(N=v){e:{for(N=v,v=sn;N.nodeType!==8;){if(!v){v=null;break e}if(N=Pt(N.nextSibling),N===null){v=null;break e}}v=N}v!==null?(t.memoizedState={dehydrated:v,treeContext:ga!==null?{id:vn,overflow:Nn}:null,retryLane:536870912},N=Xt(18,null,null,0),N.stateNode=v,N.return=t,t.child=N,yt=t,ct=null,N=!0):N=!1}N||Na(t)}if(v=t.memoizedState,v!==null&&(v=v.dehydrated,v!==null))return v.data==="$!"?t.lanes=16:t.lanes=536870912,null;En(t)}return v=a.children,a=a.fallback,i?(Kn(),i=t.mode,v=ys({mode:"hidden",children:v},i),a=Ca(a,i,n,null),v.return=t,a.return=t,v.sibling=a,t.child=v,i=t.child,i.memoizedState=ps(n),i.childLanes=hs(e,p,n),t.memoizedState=fs,a):(Zn(t),bs(t,v))}if(N=e.memoizedState,N!==null&&(v=N.dehydrated,v!==null)){if(o)t.flags&256?(Zn(t),t.flags&=-257,t=gs(e,t,n)):t.memoizedState!==null?(Kn(),t.child=e.child,t.flags|=128,t=null):(Kn(),i=a.fallback,v=t.mode,a=ys({mode:"visible",children:a.children},v),i=Ca(i,v,n,null),i.flags|=2,a.return=t,i.return=t,a.sibling=i,t.child=a,Ea(t,e.child,null,n),a=t.child,a.memoizedState=ps(n),a.childLanes=hs(e,p,n),t.memoizedState=fs,t=i);else if(Zn(t),v.data==="$!"){if(p=v.nextSibling&&v.nextSibling.dataset,p)var w=p.dgst;p=w,a=Error(d(419)),a.stack="",a.digest=p,Ql({value:a,source:null,stack:null}),t=gs(e,t,n)}else if(nt||tr(e,t,n,!1),p=(n&e.childLanes)!==0,nt||p){if(p=Re,p!==null){if(a=n&-n,(a&42)!==0)a=1;else switch(a){case 2:a=1;break;case 8:a=4;break;case 32:a=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:a=64;break;case 268435456:a=134217728;break;default:a=0}if(a=(a&(p.suspendedLanes|n))!==0?0:a,a!==0&&a!==N.retryLane)throw N.retryLane=a,Xn(e,a),gt(p,e,a),$d}v.data==="$?"||Zs(),t=gs(e,t,n)}else v.data==="$?"?(t.flags|=128,t.child=e.child,t=Nb.bind(null,e),v._reactRetry=t,t=null):(e=N.treeContext,ct=Pt(v.nextSibling),yt=t,Ee=!0,Wt=null,sn=!1,e!==null&&(Gt[Vt++]=vn,Gt[Vt++]=Nn,Gt[Vt++]=ga,vn=e.id,Nn=e.overflow,ga=t),t=bs(t,a.children),t.flags|=4096);return t}return i?(Kn(),i=a.fallback,v=t.mode,N=e.child,w=N.sibling,a=aa(N,{mode:"hidden",children:a.children}),a.subtreeFlags=N.subtreeFlags&31457280,w!==null?i=aa(w,i):(i=Ca(i,v,n,null),i.flags|=2),i.return=t,a.return=t,a.sibling=i,t.child=a,a=i,i=t.child,v=e.child.memoizedState,v===null?v=ps(n):(N=v.cachePool,N!==null?(w=et._currentValue,N=N.parent!==w?{parent:w,pool:w}:N):N=id(),v={baseLanes:v.baseLanes|n,cachePool:N}),i.memoizedState=v,i.childLanes=hs(e,p,n),t.memoizedState=fs,a):(Zn(t),n=e.child,e=n.sibling,n=aa(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(p=t.deletions,p===null?(t.deletions=[e],t.flags|=16):p.push(e)),t.child=n,t.memoizedState=null,n)}function bs(e,t){return t=ys({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ys(e,t){return zm(e,t,0,null)}function gs(e,t,n){return Ea(t,e.child,null,n),e=bs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function im(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),xs(e.return,t,n)}function vs(e,t,n,a,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=n,o.tailMode=i)}function cm(e,t,n){var a=t.pendingProps,i=a.revealOrder,o=a.tail;if(st(e,t,a.children,n),a=Pe.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&im(e,n,t);else if(e.tag===19)im(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch(qe(Pe,a),i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&oi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),vs(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&oi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}vs(t,!0,n,null,o);break;case"together":vs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Sn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),la|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(tr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(d(153));if(t.child!==null){for(e=t.child,n=aa(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=aa(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ns(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ei(e)))}function ib(e,t,n){switch(t.tag){case 3:Br(t,t.stateNode.containerInfo),$n(t,et,e.memoizedState.cache),Yl();break;case 27:case 5:uc(t);break;case 4:Br(t,t.stateNode.containerInfo);break;case 10:$n(t,t.type,t.memoizedProps.value);break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Zn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?rm(e,t,n):(Zn(t),e=Sn(e,t,n),e!==null?e.sibling:null);Zn(t);break;case 19:var i=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(tr(e,t,n,!1),a=(n&t.childLanes)!==0),i){if(a)return cm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),qe(Pe,Pe.current),a)break;return null;case 22:case 23:return t.lanes=0,em(e,t,n);case 24:$n(t,et,e.memoizedState.cache)}return Sn(e,t,n)}function sm(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)nt=!0;else{if(!Ns(e,n)&&(t.flags&128)===0)return nt=!1,ib(e,t,n);nt=(e.flags&131072)!==0}else nt=!1,Ee&&(t.flags&1048576)!==0&&Zu(t,li,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var a=t.elementType,i=a._init;if(a=i(a._payload),t.type=a,typeof a=="function")Os(a)?(e=Ha(a,e),t.tag=1,t=am(null,t,a,e,n)):(t.tag=0,t=ms(null,t,a,e,n));else{if(a!=null){if(i=a.$$typeof,i===Z){t.tag=11,t=Wd(null,t,a,e,n);break e}else if(i===Ze){t.tag=14,t=Id(null,t,a,e,n);break e}}throw t=Gn(a)||a,Error(d(306,t,""))}}return t;case 0:return ms(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,i=Ha(a,t.pendingProps),am(e,t,a,i,n);case 3:e:{if(Br(t,t.stateNode.containerInfo),e===null)throw Error(d(387));var o=t.pendingProps;i=t.memoizedState,a=i.element,ws(e,t),lr(t,o,null,n);var p=t.memoizedState;if(o=p.cache,$n(t,et,o),o!==i.cache&&Ss(t,[et],n,!0),ar(),o=p.element,i.isDehydrated)if(i={element:o,isDehydrated:!1,cache:p.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=lm(e,t,o,n);break e}else if(o!==a){a=Lt(Error(d(424)),t),Ql(a),t=lm(e,t,o,n);break e}else for(ct=Pt(t.stateNode.containerInfo.firstChild),yt=t,Ee=!0,Wt=null,sn=!0,n=td(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Yl(),o===a){t=Sn(e,t,n);break e}st(e,t,o,n)}t=t.child}return t;case 26:return er(e,t),e===null?(n=mf(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ee||(n=t.type,e=t.pendingProps,a=Bi(Vn.current).createElement(n),a[ft]=t,a[Et]=e,ot(a,n,e),tt(a),t.stateNode=a):t.memoizedState=mf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return uc(t),e===null&&Ee&&(a=t.stateNode=of(t.type,t.pendingProps,Vn.current),yt=t,sn=!0,ct=Pt(a.firstChild)),a=t.pendingProps.children,e!==null||Ee?st(e,t,a,n):t.child=Ea(t,null,a,n),er(e,t),t.child;case 5:return e===null&&Ee&&((i=a=ct)&&(a=Ub(a,t.type,t.pendingProps,sn),a!==null?(t.stateNode=a,yt=t,ct=Pt(a.firstChild),sn=!1,i=!0):i=!1),i||Na(t)),uc(t),i=t.type,o=t.pendingProps,p=e!==null?e.memoizedProps:null,a=o.children,io(i,o)?a=null:p!==null&&io(i,p)&&(t.flags|=32),t.memoizedState!==null&&(i=Jc(e,t,Ph,null,null,n),vr._currentValue=i),er(e,t),st(e,t,a,n),t.child;case 6:return e===null&&Ee&&((e=n=ct)&&(n=Bb(n,t.pendingProps,sn),n!==null?(t.stateNode=n,yt=t,ct=null,e=!0):e=!1),e||Na(t)),null;case 13:return rm(e,t,n);case 4:return Br(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Ea(t,null,a,n):st(e,t,a,n),t.child;case 11:return Wd(e,t,t.type,t.pendingProps,n);case 7:return st(e,t,t.pendingProps,n),t.child;case 8:return st(e,t,t.pendingProps.children,n),t.child;case 12:return st(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,$n(t,t.type,a.value),st(e,t,a.children,n),t.child;case 9:return i=t.type._context,a=t.pendingProps.children,Ta(t),i=pt(i),a=a(i),t.flags|=1,st(e,t,a,n),t.child;case 14:return Id(e,t,t.type,t.pendingProps,n);case 15:return Pd(e,t,t.type,t.pendingProps,n);case 19:return cm(e,t,n);case 22:return em(e,t,n);case 24:return Ta(t),a=pt(et),e===null?(i=Zc(),i===null&&(i=Re,o=Qc(),i.pooledCache=o,o.refCount++,o!==null&&(i.pooledCacheLanes|=n),i=o),t.memoizedState={parent:a,cache:i},Ds(t),$n(t,et,i)):((e.lanes&n)!==0&&(ws(e,t),lr(t,null,null,n),ar()),i=e.memoizedState,o=t.memoizedState,i.parent!==a?(i={parent:a,cache:a},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),$n(t,et,a)):(a=o.cache,$n(t,et,a),a!==i.cache&&Ss(t,[et],n,!0))),st(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(d(156,t.tag))}var Es=we(null),_a=null,Dn=null;function $n(e,t,n){qe(Es,t._currentValue),t._currentValue=n}function wn(e){e._currentValue=Es.current,Fe(Es)}function xs(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Ss(e,t,n,a){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var o=i.dependencies;if(o!==null){var p=i.child;o=o.firstContext;e:for(;o!==null;){var v=o;o=i;for(var N=0;N<t.length;N++)if(v.context===t[N]){o.lanes|=n,v=o.alternate,v!==null&&(v.lanes|=n),xs(o.return,n,e),a||(p=null);break e}o=v.next}}else if(i.tag===18){if(p=i.return,p===null)throw Error(d(341));p.lanes|=n,o=p.alternate,o!==null&&(o.lanes|=n),xs(p,n,e),p=null}else p=i.child;if(p!==null)p.return=i;else for(p=i;p!==null;){if(p===e){p=null;break}if(i=p.sibling,i!==null){i.return=p.return,p=i;break}p=p.return}i=p}}function tr(e,t,n,a){e=null;for(var i=t,o=!1;i!==null;){if(!o){if((i.flags&524288)!==0)o=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var p=i.alternate;if(p===null)throw Error(d(387));if(p=p.memoizedProps,p!==null){var v=i.type;Ht(i.pendingProps.value,p.value)||(e!==null?e.push(v):e=[v])}}else if(i===Ur.current){if(p=i.alternate,p===null)throw Error(d(387));p.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(vr):e=[vr])}i=i.return}e!==null&&Ss(t,e,n,a),t.flags|=262144}function Ei(e){for(e=e.firstContext;e!==null;){if(!Ht(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ta(e){_a=e,Dn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function pt(e){return om(_a,e)}function xi(e,t){return _a===null&&Ta(e),om(e,t)}function om(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Dn===null){if(e===null)throw Error(d(308));Dn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Dn=Dn.next=t;return n}var Wn=!1;function Ds(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ws(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function In(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Pn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Ge&2)!==0){var i=a.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),a.pending=t,t=ni(e),Qu(e,null,n),t}return ti(e,a,t,n),ni(e)}function nr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194176)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Io(e,n)}}function Hs(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var p={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};o===null?i=o=p:o=o.next=p,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var _s=!1;function ar(){if(_s){var e=tl;if(e!==null)throw e}}function lr(e,t,n,a){_s=!1;var i=e.updateQueue;Wn=!1;var o=i.firstBaseUpdate,p=i.lastBaseUpdate,v=i.shared.pending;if(v!==null){i.shared.pending=null;var N=v,w=N.next;N.next=null,p===null?o=w:p.next=w,p=N;var O=e.alternate;O!==null&&(O=O.updateQueue,v=O.lastBaseUpdate,v!==p&&(v===null?O.firstBaseUpdate=w:v.next=w,O.lastBaseUpdate=N))}if(o!==null){var B=i.baseState;p=0,O=w=N=null,v=o;do{var z=v.lane&-536870913,M=z!==v.lane;if(M?(ge&z)===z:(a&z)===z){z!==0&&z===el&&(_s=!0),O!==null&&(O=O.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});e:{var $=e,ie=v;z=t;var Ye=n;switch(ie.tag){case 1:if($=ie.payload,typeof $=="function"){B=$.call(Ye,B,z);break e}B=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=ie.payload,z=typeof $=="function"?$.call(Ye,B,z):$,z==null)break e;B=De({},B,z);break e;case 2:Wn=!0}}z=v.callback,z!==null&&(e.flags|=64,M&&(e.flags|=8192),M=i.callbacks,M===null?i.callbacks=[z]:M.push(z))}else M={lane:z,tag:v.tag,payload:v.payload,callback:v.callback,next:null},O===null?(w=O=M,N=B):O=O.next=M,p|=z;if(v=v.next,v===null){if(v=i.shared.pending,v===null)break;M=v,v=M.next,M.next=null,i.lastBaseUpdate=M,i.shared.pending=null}}while(!0);O===null&&(N=B),i.baseState=N,i.firstBaseUpdate=w,i.lastBaseUpdate=O,o===null&&(i.shared.lanes=0),la|=p,e.lanes=p,e.memoizedState=B}}function um(e,t){if(typeof e!="function")throw Error(d(191,e));e.call(t)}function dm(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)um(n[e],t)}function rr(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var i=a.next;n=i;do{if((n.tag&e)===e){a=void 0;var o=n.create,p=n.inst;a=o(),p.destroy=a}n=n.next}while(n!==i)}}catch(v){Ae(t,t.return,v)}}function ea(e,t,n){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var o=i.next;a=o;do{if((a.tag&e)===e){var p=a.inst,v=p.destroy;if(v!==void 0){p.destroy=void 0,i=t;var N=n;try{v()}catch(w){Ae(i,N,w)}}}a=a.next}while(a!==o)}}catch(w){Ae(t,t.return,w)}}function mm(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{dm(t,n)}catch(a){Ae(e,e.return,a)}}}function fm(e,t,n){n.props=Ha(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){Ae(e,t,a)}}function ka(e,t){try{var n=e.ref;if(n!==null){var a=e.stateNode;switch(e.tag){case 26:case 27:case 5:var i=a;break;default:i=a}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(o){Ae(e,t,o)}}function _t(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(i){Ae(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(i){Ae(e,t,i)}else n.current=null}function pm(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(i){Ae(e,e.return,i)}}function hm(e,t,n){try{var a=e.stateNode;zb(a,e.type,n,t),a[Et]=t}catch(i){Ae(e,e.return,i)}}function bm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function Ts(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||bm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ks(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ui));else if(a!==4&&a!==27&&(e=e.child,e!==null))for(ks(e,t,n),e=e.sibling;e!==null;)ks(e,t,n),e=e.sibling}function Si(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&a!==27&&(e=e.child,e!==null))for(Si(e,t,n),e=e.sibling;e!==null;)Si(e,t,n),e=e.sibling}var Hn=!1,Ve=!1,Cs=!1,ym=typeof WeakSet=="function"?WeakSet:Set,at=null,gm=!1;function cb(e,t){if(e=e.containerInfo,lo=Yi,e=Ru(e),Ac(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var i=a.anchorOffset,o=a.focusNode;a=a.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var p=0,v=-1,N=-1,w=0,O=0,B=e,z=null;t:for(;;){for(var M;B!==n||i!==0&&B.nodeType!==3||(v=p+i),B!==o||a!==0&&B.nodeType!==3||(N=p+a),B.nodeType===3&&(p+=B.nodeValue.length),(M=B.firstChild)!==null;)z=B,B=M;for(;;){if(B===e)break t;if(z===n&&++w===i&&(v=p),z===o&&++O===a&&(N=p),(M=B.nextSibling)!==null)break;B=z,z=B.parentNode}B=M}n=v===-1||N===-1?null:{start:v,end:N}}else n=null}n=n||{start:0,end:0}}else n=null;for(ro={focusedElem:e,selectionRange:n},Yi=!1,at=t;at!==null;)if(t=at,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,at=e;else for(;at!==null;){switch(t=at,o=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,n=t,i=o.memoizedProps,o=o.memoizedState,a=n.stateNode;try{var $=Ha(n.type,i,n.elementType===n.type);e=a.getSnapshotBeforeUpdate($,o),a.__reactInternalSnapshotBeforeUpdate=e}catch(ie){Ae(n,n.return,ie)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)oo(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":oo(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(d(163))}if(e=t.sibling,e!==null){e.return=t.return,at=e;break}at=t.return}return $=gm,gm=!1,$}function vm(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Tn(e,n),a&4&&rr(5,n);break;case 1:if(Tn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(v){Ae(n,n.return,v)}else{var i=Ha(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Ae(n,n.return,v)}}a&64&&mm(n),a&512&&ka(n,n.return);break;case 3:if(Tn(e,n),a&64&&(a=n.updateQueue,a!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{dm(a,e)}catch(v){Ae(n,n.return,v)}}break;case 26:Tn(e,n),a&512&&ka(n,n.return);break;case 27:case 5:Tn(e,n),t===null&&a&4&&pm(n),a&512&&ka(n,n.return);break;case 12:Tn(e,n);break;case 13:Tn(e,n),a&4&&xm(e,n);break;case 22:if(i=n.memoizedState!==null||Hn,!i){t=t!==null&&t.memoizedState!==null||Ve;var o=Hn,p=Ve;Hn=i,(Ve=t)&&!p?ta(e,n,(n.subtreeFlags&8772)!==0):Tn(e,n),Hn=o,Ve=p}a&512&&(n.memoizedProps.mode==="manual"?ka(n,n.return):_t(n,n.return));break;default:Tn(e,n)}}function Nm(e){var t=e.alternate;t!==null&&(e.alternate=null,Nm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&bc(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ie=null,Tt=!1;function _n(e,t,n){for(n=n.child;n!==null;)Em(e,t,n),n=n.sibling}function Em(e,t,n){if(Dt&&typeof Dt.onCommitFiberUnmount=="function")try{Dt.onCommitFiberUnmount(Tl,n)}catch{}switch(n.tag){case 26:Ve||_t(n,t),_n(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ve||_t(n,t);var a=Ie,i=Tt;for(Ie=n.stateNode,_n(e,t,n),n=n.stateNode,t=n.attributes;t.length;)n.removeAttributeNode(t[0]);bc(n),Ie=a,Tt=i;break;case 5:Ve||_t(n,t);case 6:i=Ie;var o=Tt;if(Ie=null,_n(e,t,n),Ie=i,Tt=o,Ie!==null)if(Tt)try{e=Ie,a=n.stateNode,e.nodeType===8?e.parentNode.removeChild(a):e.removeChild(a)}catch(p){Ae(n,t,p)}else try{Ie.removeChild(n.stateNode)}catch(p){Ae(n,t,p)}break;case 18:Ie!==null&&(Tt?(t=Ie,n=n.stateNode,t.nodeType===8?so(t.parentNode,n):t.nodeType===1&&so(t,n),Sr(t)):so(Ie,n.stateNode));break;case 4:a=Ie,i=Tt,Ie=n.stateNode.containerInfo,Tt=!0,_n(e,t,n),Ie=a,Tt=i;break;case 0:case 11:case 14:case 15:Ve||ea(2,n,t),Ve||ea(4,n,t),_n(e,t,n);break;case 1:Ve||(_t(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&fm(n,t,a)),_n(e,t,n);break;case 21:_n(e,t,n);break;case 22:Ve||_t(n,t),Ve=(a=Ve)||n.memoizedState!==null,_n(e,t,n),Ve=a;break;default:_n(e,t,n)}}function xm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Sr(e)}catch(n){Ae(t,t.return,n)}}function sb(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ym),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ym),t;default:throw Error(d(435,e.tag))}}function zs(e,t){var n=sb(e);t.forEach(function(a){var i=Eb.bind(null,e,a);n.has(a)||(n.add(a),a.then(i,i))})}function Yt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var i=n[a],o=e,p=t,v=p;e:for(;v!==null;){switch(v.tag){case 27:case 5:Ie=v.stateNode,Tt=!1;break e;case 3:Ie=v.stateNode.containerInfo,Tt=!0;break e;case 4:Ie=v.stateNode.containerInfo,Tt=!0;break e}v=v.return}if(Ie===null)throw Error(d(160));Em(o,p,i),Ie=null,Tt=!1,o=i.alternate,o!==null&&(o.return=null),i.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Sm(t,e),t=t.sibling}var It=null;function Sm(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Yt(t,e),Qt(e),a&4&&(ea(3,e,e.return),rr(3,e),ea(5,e,e.return));break;case 1:Yt(t,e),Qt(e),a&512&&(Ve||n===null||_t(n,n.return)),a&64&&Hn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var i=It;if(Yt(t,e),Qt(e),a&512&&(Ve||n===null||_t(n,n.return)),a&4){var o=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,i=i.ownerDocument||i;t:switch(a){case"title":o=i.getElementsByTagName("title")[0],(!o||o[zl]||o[ft]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=i.createElement(a),i.head.insertBefore(o,i.querySelector("head > title"))),ot(o,a,n),o[ft]=e,tt(o),a=o;break e;case"link":var p=hf("link","href",i).get(a+(n.href||""));if(p){for(var v=0;v<p.length;v++)if(o=p[v],o.getAttribute("href")===(n.href==null?null:n.href)&&o.getAttribute("rel")===(n.rel==null?null:n.rel)&&o.getAttribute("title")===(n.title==null?null:n.title)&&o.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){p.splice(v,1);break t}}o=i.createElement(a),ot(o,a,n),i.head.appendChild(o);break;case"meta":if(p=hf("meta","content",i).get(a+(n.content||""))){for(v=0;v<p.length;v++)if(o=p[v],o.getAttribute("content")===(n.content==null?null:""+n.content)&&o.getAttribute("name")===(n.name==null?null:n.name)&&o.getAttribute("property")===(n.property==null?null:n.property)&&o.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute("charset")===(n.charSet==null?null:n.charSet)){p.splice(v,1);break t}}o=i.createElement(a),ot(o,a,n),i.head.appendChild(o);break;default:throw Error(d(468,a))}o[ft]=e,tt(o),a=o}e.stateNode=a}else bf(i,e.type,e.stateNode);else e.stateNode=pf(i,a,e.memoizedProps);else o!==a?(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,a===null?bf(i,e.type,e.stateNode):pf(i,a,e.memoizedProps)):a===null&&e.stateNode!==null&&hm(e,e.memoizedProps,n.memoizedProps)}break;case 27:if(a&4&&e.alternate===null){i=e.stateNode,o=e.memoizedProps;try{for(var N=i.firstChild;N;){var w=N.nextSibling,O=N.nodeName;N[zl]||O==="HEAD"||O==="BODY"||O==="SCRIPT"||O==="STYLE"||O==="LINK"&&N.rel.toLowerCase()==="stylesheet"||i.removeChild(N),N=w}for(var B=e.type,z=i.attributes;z.length;)i.removeAttributeNode(z[0]);ot(i,B,o),i[ft]=e,i[Et]=o}catch($){Ae(e,e.return,$)}}case 5:if(Yt(t,e),Qt(e),a&512&&(Ve||n===null||_t(n,n.return)),e.flags&32){i=e.stateNode;try{ja(i,"")}catch($){Ae(e,e.return,$)}}a&4&&e.stateNode!=null&&(i=e.memoizedProps,hm(e,i,n!==null?n.memoizedProps:i)),a&1024&&(Cs=!0);break;case 6:if(Yt(t,e),Qt(e),a&4){if(e.stateNode===null)throw Error(d(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch($){Ae(e,e.return,$)}}break;case 3:if(Gi=null,i=It,It=qi(t.containerInfo),Yt(t,e),It=i,Qt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Sr(t.containerInfo)}catch($){Ae(e,e.return,$)}Cs&&(Cs=!1,Dm(e));break;case 4:a=It,It=qi(e.stateNode.containerInfo),Yt(t,e),Qt(e),It=a;break;case 12:Yt(t,e),Qt(e);break;case 13:Yt(t,e),Qt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Gs=cn()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,zs(e,a)));break;case 22:if(a&512&&(Ve||n===null||_t(n,n.return)),N=e.memoizedState!==null,w=n!==null&&n.memoizedState!==null,O=Hn,B=Ve,Hn=O||N,Ve=B||w,Yt(t,e),Ve=B,Hn=O,Qt(e),t=e.stateNode,t._current=e,t._visibility&=-3,t._visibility|=t._pendingVisibility&2,a&8192&&(t._visibility=N?t._visibility&-2:t._visibility|1,N&&(t=Hn||Ve,n===null||w||t||rl(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))e:for(n=null,t=e;;){if(t.tag===5||t.tag===26||t.tag===27){if(n===null){w=n=t;try{if(i=w.stateNode,N)o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{p=w.stateNode,v=w.memoizedProps.style;var M=v!=null&&v.hasOwnProperty("display")?v.display:null;p.style.display=M==null||typeof M=="boolean"?"":(""+M).trim()}}catch($){Ae(w,w.return,$)}}}else if(t.tag===6){if(n===null){w=t;try{w.stateNode.nodeValue=N?"":w.memoizedProps}catch($){Ae(w,w.return,$)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,zs(e,n))));break;case 19:Yt(t,e),Qt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,zs(e,a)));break;case 21:break;default:Yt(t,e),Qt(e)}}function Qt(e){var t=e.flags;if(t&2){try{if(e.tag!==27){e:{for(var n=e.return;n!==null;){if(bm(n)){var a=n;break e}n=n.return}throw Error(d(160))}switch(a.tag){case 27:var i=a.stateNode,o=Ts(e);Si(e,o,i);break;case 5:var p=a.stateNode;a.flags&32&&(ja(p,""),a.flags&=-33);var v=Ts(e);Si(e,v,p);break;case 3:case 4:var N=a.stateNode.containerInfo,w=Ts(e);ks(e,w,N);break;default:throw Error(d(161))}}}catch(O){Ae(e,e.return,O)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Dm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Dm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Tn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)vm(e,t.alternate,t),t=t.sibling}function rl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ea(4,t,t.return),rl(t);break;case 1:_t(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&fm(t,t.return,n),rl(t);break;case 26:case 27:case 5:_t(t,t.return),rl(t);break;case 22:_t(t,t.return),t.memoizedState===null&&rl(t);break;default:rl(t)}e=e.sibling}}function ta(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,i=e,o=t,p=o.flags;switch(o.tag){case 0:case 11:case 15:ta(i,o,n),rr(4,o);break;case 1:if(ta(i,o,n),a=o,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(w){Ae(a,a.return,w)}if(a=o,i=a.updateQueue,i!==null){var v=a.stateNode;try{var N=i.shared.hiddenCallbacks;if(N!==null)for(i.shared.hiddenCallbacks=null,i=0;i<N.length;i++)um(N[i],v)}catch(w){Ae(a,a.return,w)}}n&&p&64&&mm(o),ka(o,o.return);break;case 26:case 27:case 5:ta(i,o,n),n&&a===null&&p&4&&pm(o),ka(o,o.return);break;case 12:ta(i,o,n);break;case 13:ta(i,o,n),n&&p&4&&xm(i,o);break;case 22:o.memoizedState===null&&ta(i,o,n),ka(o,o.return);break;default:ta(i,o,n)}t=t.sibling}}function As(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Fl(n))}function Ms(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Fl(e))}function na(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)wm(e,t,n,a),t=t.sibling}function wm(e,t,n,a){var i=t.flags;switch(t.tag){case 0:case 11:case 15:na(e,t,n,a),i&2048&&rr(9,t);break;case 3:na(e,t,n,a),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Fl(e)));break;case 12:if(i&2048){na(e,t,n,a),e=t.stateNode;try{var o=t.memoizedProps,p=o.id,v=o.onPostCommit;typeof v=="function"&&v(p,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(N){Ae(t,t.return,N)}}else na(e,t,n,a);break;case 23:break;case 22:o=t.stateNode,t.memoizedState!==null?o._visibility&4?na(e,t,n,a):ir(e,t):o._visibility&4?na(e,t,n,a):(o._visibility|=4,il(e,t,n,a,(t.subtreeFlags&10256)!==0)),i&2048&&As(t.alternate,t);break;case 24:na(e,t,n,a),i&2048&&Ms(t.alternate,t);break;default:na(e,t,n,a)}}function il(e,t,n,a,i){for(i=i&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var o=e,p=t,v=n,N=a,w=p.flags;switch(p.tag){case 0:case 11:case 15:il(o,p,v,N,i),rr(8,p);break;case 23:break;case 22:var O=p.stateNode;p.memoizedState!==null?O._visibility&4?il(o,p,v,N,i):ir(o,p):(O._visibility|=4,il(o,p,v,N,i)),i&&w&2048&&As(p.alternate,p);break;case 24:il(o,p,v,N,i),i&&w&2048&&Ms(p.alternate,p);break;default:il(o,p,v,N,i)}t=t.sibling}}function ir(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,i=a.flags;switch(a.tag){case 22:ir(n,a),i&2048&&As(a.alternate,a);break;case 24:ir(n,a),i&2048&&Ms(a.alternate,a);break;default:ir(n,a)}t=t.sibling}}var cr=8192;function cl(e){if(e.subtreeFlags&cr)for(e=e.child;e!==null;)Hm(e),e=e.sibling}function Hm(e){switch(e.tag){case 26:cl(e),e.flags&cr&&e.memoizedState!==null&&$b(It,e.memoizedState,e.memoizedProps);break;case 5:cl(e);break;case 3:case 4:var t=It;It=qi(e.stateNode.containerInfo),cl(e),It=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=cr,cr=16777216,cl(e),cr=t):cl(e));break;default:cl(e)}}function _m(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function sr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];at=a,km(a,e)}_m(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Tm(e),e=e.sibling}function Tm(e){switch(e.tag){case 0:case 11:case 15:sr(e),e.flags&2048&&ea(9,e,e.return);break;case 3:sr(e);break;case 12:sr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&4&&(e.return===null||e.return.tag!==13)?(t._visibility&=-5,Di(e)):sr(e);break;default:sr(e)}}function Di(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];at=a,km(a,e)}_m(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ea(8,t,t.return),Di(t);break;case 22:n=t.stateNode,n._visibility&4&&(n._visibility&=-5,Di(t));break;default:Di(t)}e=e.sibling}}function km(e,t){for(;at!==null;){var n=at;switch(n.tag){case 0:case 11:case 15:ea(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Fl(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,at=a;else e:for(n=e;at!==null;){a=at;var i=a.sibling,o=a.return;if(Nm(a),a===n){at=null;break e}if(i!==null){i.return=o,at=i;break e}at=o}}}function ob(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xt(e,t,n,a){return new ob(e,t,n,a)}function Os(e){return e=e.prototype,!(!e||!e.isReactComponent)}function aa(e,t){var n=e.alternate;return n===null?(n=Xt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&31457280,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Cm(e,t){e.flags&=31457282;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function wi(e,t,n,a,i,o){var p=0;if(a=e,typeof e=="function")Os(e)&&(p=1);else if(typeof e=="string")p=Jb(e,n,rn.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case T:return Ca(n.children,i,o,t);case E:p=8,i|=24;break;case R:return e=Xt(12,n,t,i|2),e.elementType=R,e.lanes=o,e;case re:return e=Xt(13,n,t,i),e.elementType=re,e.lanes=o,e;case fe:return e=Xt(19,n,t,i),e.elementType=fe,e.lanes=o,e;case dt:return zm(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case q:case Y:p=10;break e;case F:p=9;break e;case Z:p=11;break e;case Ze:p=14;break e;case Te:p=16,a=null;break e}p=29,n=Error(d(130,e===null?"null":typeof e,"")),a=null}return t=Xt(p,n,t,i),t.elementType=e,t.type=a,t.lanes=o,t}function Ca(e,t,n,a){return e=Xt(7,e,a,t),e.lanes=n,e}function zm(e,t,n,a){e=Xt(22,e,a,t),e.elementType=dt,e.lanes=n;var i={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var o=i._current;if(o===null)throw Error(d(456));if((i._pendingVisibility&2)===0){var p=Xn(o,2);p!==null&&(i._pendingVisibility|=2,gt(p,o,2))}},attach:function(){var o=i._current;if(o===null)throw Error(d(456));if((i._pendingVisibility&2)!==0){var p=Xn(o,2);p!==null&&(i._pendingVisibility&=-3,gt(p,o,2))}}};return e.stateNode=i,e}function Rs(e,t,n){return e=Xt(6,e,null,t),e.lanes=n,e}function Us(e,t,n){return t=Xt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function kn(e){e.flags|=4}function Am(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!yf(t)){if(t=jt.current,t!==null&&((ge&4194176)===ge?on!==null:(ge&62914560)!==ge&&(ge&536870912)===0||t!==on))throw Zl=Vc,Fu;e.flags|=8192}}function Hi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?$o():536870912,e.lanes|=t,ol|=t)}function or(e,t){if(!Ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags&31457280,a|=i.flags&31457280,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function ub(e,t,n){var a=t.pendingProps;switch(Lc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return Le(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),wn(et),Ua(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(jl(t)?kn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Wt!==null&&(Qs(Wt),Wt=null))),Le(t),null;case 26:return n=t.memoizedState,e===null?(kn(t),n!==null?(Le(t),Am(t,n)):(Le(t),t.flags&=-16777217)):n?n!==e.memoizedState?(kn(t),Le(t),Am(t,n)):(Le(t),t.flags&=-16777217):(e.memoizedProps!==a&&kn(t),Le(t),t.flags&=-16777217),null;case 27:qr(t),n=Vn.current;var i=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==a&&kn(t);else{if(!a){if(t.stateNode===null)throw Error(d(166));return Le(t),null}e=rn.current,jl(t)?Ku(t):(e=of(i,a,n),t.stateNode=e,kn(t))}return Le(t),null;case 5:if(qr(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&kn(t);else{if(!a){if(t.stateNode===null)throw Error(d(166));return Le(t),null}if(e=rn.current,jl(t))Ku(t);else{switch(i=Bi(Vn.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?i.createElement(n,{is:a.is}):i.createElement(n)}}e[ft]=t,e[Et]=a;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(ot(e,n,a),n){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&kn(t)}}return Le(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&kn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(d(166));if(e=Vn.current,jl(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,i=yt,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}e[ft]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||nf(e.nodeValue,n)),e||Na(t)}else e=Bi(e).createTextNode(a),e[ft]=t,t.stateNode=e}return Le(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=jl(t),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(d(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(d(317));i[ft]=t}else Yl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Le(t),i=!1}else Wt!==null&&(Qs(Wt),Wt=null),i=!0;if(!i)return t.flags&256?(En(t),t):(En(t),null)}if(En(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=a!==null,e=e!==null&&e.memoizedState!==null,n){a=t.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool);var o=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(o=a.memoizedState.cachePool.pool),o!==i&&(a.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),Hi(t,t.updateQueue),Le(t),null;case 4:return Ua(),e===null&&to(t.stateNode.containerInfo),Le(t),null;case 10:return wn(t.type),Le(t),null;case 19:if(Fe(Pe),i=t.memoizedState,i===null)return Le(t),null;if(a=(t.flags&128)!==0,o=i.rendering,o===null)if(a)or(i,!1);else{if(je!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=oi(e),o!==null){for(t.flags|=128,or(i,!1),e=o.updateQueue,t.updateQueue=e,Hi(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Cm(n,e),n=n.sibling;return qe(Pe,Pe.current&1|2),t.child}e=e.sibling}i.tail!==null&&cn()>_i&&(t.flags|=128,a=!0,or(i,!1),t.lanes=4194304)}else{if(!a)if(e=oi(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Hi(t,e),or(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Ee)return Le(t),null}else 2*cn()-i.renderingStartTime>_i&&n!==536870912&&(t.flags|=128,a=!0,or(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(e=i.last,e!==null?e.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=cn(),t.sibling=null,e=Pe.current,qe(Pe,a?e&1|2:e&1),t):(Le(t),null);case 22:case 23:return En(t),Yc(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),n=t.updateQueue,n!==null&&Hi(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&Fe(xa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),wn(et),Le(t),null;case 25:return null}throw Error(d(156,t.tag))}function db(e,t){switch(Lc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return wn(et),Ua(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return qr(t),null;case 13:if(En(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(d(340));Yl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Fe(Pe),null;case 4:return Ua(),null;case 10:return wn(t.type),null;case 22:case 23:return En(t),Yc(),e!==null&&Fe(xa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return wn(et),null;case 25:return null;default:return null}}function Mm(e,t){switch(Lc(t),t.tag){case 3:wn(et),Ua();break;case 26:case 27:case 5:qr(t);break;case 4:Ua();break;case 13:En(t);break;case 19:Fe(Pe);break;case 10:wn(t.type);break;case 22:case 23:En(t),Yc(),e!==null&&Fe(xa);break;case 24:wn(et)}}var mb={getCacheForType:function(e){var t=pt(et),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},fb=typeof WeakMap=="function"?WeakMap:Map,Ge=0,Re=null,he=null,ge=0,Ue=0,kt=null,Cn=!1,sl=!1,Bs=!1,zn=0,je=0,la=0,za=0,qs=0,Zt=0,ol=0,ur=null,dn=null,Ls=!1,Gs=0,_i=1/0,Ti=null,ra=null,ki=!1,Aa=null,dr=0,Vs=0,js=null,mr=0,Ys=null;function Ct(){if((Ge&2)!==0&&ge!==0)return ge&-ge;if(te.T!==null){var e=el;return e!==0?e:Ws()}return eu()}function Om(){Zt===0&&(Zt=(ge&536870912)===0||Ee?Fo():536870912);var e=jt.current;return e!==null&&(e.flags|=32),Zt}function gt(e,t,n){(e===Re&&Ue===2||e.cancelPendingCommit!==null)&&(ul(e,0),An(e,ge,Zt,!1)),Cl(e,n),((Ge&2)===0||e!==Re)&&(e===Re&&((Ge&2)===0&&(za|=n),je===4&&An(e,ge,Zt,!1)),mn(e))}function Rm(e,t,n){if((Ge&6)!==0)throw Error(d(327));var a=!n&&(t&60)===0&&(t&e.expiredLanes)===0||kl(e,t),i=a?bb(e,t):Ks(e,t,!0),o=a;do{if(i===0){sl&&!a&&An(e,t,0,!1);break}else if(i===6)An(e,t,0,!Cn);else{if(n=e.current.alternate,o&&!pb(n)){i=Ks(e,t,!1),o=!1;continue}if(i===2){if(o=t,e.errorRecoveryDisabledLanes&o)var p=0;else p=e.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){t=p;e:{var v=e;i=ur;var N=v.current.memoizedState.isDehydrated;if(N&&(ul(v,p).flags|=256),p=Ks(v,p,!1),p!==2){if(Bs&&!N){v.errorRecoveryDisabledLanes|=o,za|=o,i=4;break e}o=dn,dn=i,o!==null&&Qs(o)}i=p}if(o=!1,i!==2)continue}}if(i===1){ul(e,0),An(e,t,0,!0);break}e:{switch(a=e,i){case 0:case 1:throw Error(d(345));case 4:if((t&4194176)===t){An(a,t,Zt,!Cn);break e}break;case 2:dn=null;break;case 3:case 5:break;default:throw Error(d(329))}if(a.finishedWork=n,a.finishedLanes=t,(t&62914560)===t&&(o=Gs+300-cn(),10<o)){if(An(a,t,Zt,!Cn),jr(a,0)!==0)break e;a.timeoutHandle=rf(Um.bind(null,a,n,dn,Ti,Ls,t,Zt,za,ol,Cn,2,-0,0),o);break e}Um(a,n,dn,Ti,Ls,t,Zt,za,ol,Cn,0,-0,0)}}break}while(!0);mn(e)}function Qs(e){dn===null?dn=e:dn.push.apply(dn,e)}function Um(e,t,n,a,i,o,p,v,N,w,O,B,z){var M=t.subtreeFlags;if((M&8192||(M&16785408)===16785408)&&(gr={stylesheets:null,count:0,unsuspend:Fb},Hm(t),t=Wb(),t!==null)){e.cancelPendingCommit=t(Ym.bind(null,e,n,a,i,p,v,N,1,B,z)),An(e,o,p,!w);return}Ym(e,n,a,i,p,v,N,O,B,z)}function pb(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var i=n[a],o=i.getSnapshot;i=i.value;try{if(!Ht(o(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function An(e,t,n,a){t&=~qs,t&=~za,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var i=t;0<i;){var o=31-wt(i),p=1<<o;a[o]=-1,i&=~p}n!==0&&Wo(e,n,t)}function Ci(){return(Ge&6)===0?(fr(0),!1):!0}function Xs(){if(he!==null){if(Ue===0)var e=he.return;else e=he,Dn=_a=null,Wc(e),Ia=null,Kl=0,e=he;for(;e!==null;)Mm(e.alternate,e),e=e.return;he=null}}function ul(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Mb(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Xs(),Re=e,he=n=aa(e.current,null),ge=t,Ue=0,kt=null,Cn=!1,sl=kl(e,t),Bs=!1,ol=Zt=qs=za=la=je=0,dn=ur=null,Ls=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var i=31-wt(a),o=1<<i;t|=e[i],a&=~o}return zn=t,ei(),n}function Bm(e,t){me=null,te.H=un,t===Xl?(t=Iu(),Ue=3):t===Fu?(t=Iu(),Ue=4):Ue=t===$d?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,kt=t,he===null&&(je=1,Ni(e,Lt(t,e.current)))}function qm(){var e=te.H;return te.H=un,e===null?un:e}function Lm(){var e=te.A;return te.A=mb,e}function Zs(){je=4,Cn||(ge&4194176)!==ge&&jt.current!==null||(sl=!0),(la&134217727)===0&&(za&134217727)===0||Re===null||An(Re,ge,Zt,!1)}function Ks(e,t,n){var a=Ge;Ge|=2;var i=qm(),o=Lm();(Re!==e||ge!==t)&&(Ti=null,ul(e,t)),t=!1;var p=je;e:do try{if(Ue!==0&&he!==null){var v=he,N=kt;switch(Ue){case 8:Xs(),p=6;break e;case 3:case 2:case 6:jt.current===null&&(t=!0);var w=Ue;if(Ue=0,kt=null,dl(e,v,N,w),n&&sl){p=0;break e}break;default:w=Ue,Ue=0,kt=null,dl(e,v,N,w)}}hb(),p=je;break}catch(O){Bm(e,O)}while(!0);return t&&e.shellSuspendCounter++,Dn=_a=null,Ge=a,te.H=i,te.A=o,he===null&&(Re=null,ge=0,ei()),p}function hb(){for(;he!==null;)Gm(he)}function bb(e,t){var n=Ge;Ge|=2;var a=qm(),i=Lm();Re!==e||ge!==t?(Ti=null,_i=cn()+500,ul(e,t)):sl=kl(e,t);e:do try{if(Ue!==0&&he!==null){t=he;var o=kt;t:switch(Ue){case 1:Ue=0,kt=null,dl(e,t,o,1);break;case 2:if($u(o)){Ue=0,kt=null,Vm(t);break}t=function(){Ue===2&&Re===e&&(Ue=7),mn(e)},o.then(t,t);break e;case 3:Ue=7;break e;case 4:Ue=5;break e;case 7:$u(o)?(Ue=0,kt=null,Vm(t)):(Ue=0,kt=null,dl(e,t,o,7));break;case 5:var p=null;switch(he.tag){case 26:p=he.memoizedState;case 5:case 27:var v=he;if(!p||yf(p)){Ue=0,kt=null;var N=v.sibling;if(N!==null)he=N;else{var w=v.return;w!==null?(he=w,zi(w)):he=null}break t}}Ue=0,kt=null,dl(e,t,o,5);break;case 6:Ue=0,kt=null,dl(e,t,o,6);break;case 8:Xs(),je=6;break e;default:throw Error(d(462))}}yb();break}catch(O){Bm(e,O)}while(!0);return Dn=_a=null,te.H=a,te.A=i,Ge=n,he!==null?0:(Re=null,ge=0,ei(),je)}function yb(){for(;he!==null&&!Lp();)Gm(he)}function Gm(e){var t=sm(e.alternate,e,zn);e.memoizedProps=e.pendingProps,t===null?zi(e):he=t}function Vm(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=nm(n,t,t.pendingProps,t.type,void 0,ge);break;case 11:t=nm(n,t,t.pendingProps,t.type.render,t.ref,ge);break;case 5:Wc(t);default:Mm(n,t),t=he=Cm(t,zn),t=sm(n,t,zn)}e.memoizedProps=e.pendingProps,t===null?zi(e):he=t}function dl(e,t,n,a){Dn=_a=null,Wc(t),Ia=null,Kl=0;var i=t.return;try{if(rb(e,i,t,n,ge)){je=1,Ni(e,Lt(n,e.current)),he=null;return}}catch(o){if(i!==null)throw he=i,o;je=1,Ni(e,Lt(n,e.current)),he=null;return}t.flags&32768?(Ee||a===1?e=!0:sl||(ge&536870912)!==0?e=!1:(Cn=e=!0,(a===2||a===3||a===6)&&(a=jt.current,a!==null&&a.tag===13&&(a.flags|=16384))),jm(t,e)):zi(t)}function zi(e){var t=e;do{if((t.flags&32768)!==0){jm(t,Cn);return}e=t.return;var n=ub(t.alternate,t,zn);if(n!==null){he=n;return}if(t=t.sibling,t!==null){he=t;return}he=t=e}while(t!==null);je===0&&(je=5)}function jm(e,t){do{var n=db(e.alternate,e);if(n!==null){n.flags&=32767,he=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){he=e;return}he=e=n}while(e!==null);je=6,he=null}function Ym(e,t,n,a,i,o,p,v,N,w){var O=te.T,B=Q.p;try{Q.p=2,te.T=null,gb(e,t,n,a,B,i,o,p,v,N,w)}finally{te.T=O,Q.p=B}}function gb(e,t,n,a,i,o,p,v){do ml();while(Aa!==null);if((Ge&6)!==0)throw Error(d(327));var N=e.finishedWork;if(a=e.finishedLanes,N===null)return null;if(e.finishedWork=null,e.finishedLanes=0,N===e.current)throw Error(d(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var w=N.lanes|N.childLanes;if(w|=Uc,$p(e,a,w,o,p,v),e===Re&&(he=Re=null,ge=0),(N.subtreeFlags&10256)===0&&(N.flags&10256)===0||ki||(ki=!0,Vs=w,js=n,xb(Lr,function(){return ml(),null})),n=(N.flags&15990)!==0,(N.subtreeFlags&15990)!==0||n?(n=te.T,te.T=null,o=Q.p,Q.p=2,p=Ge,Ge|=4,cb(e,N),Sm(N,e),jh(ro,e.containerInfo),Yi=!!lo,ro=lo=null,e.current=N,vm(e,N.alternate,N),Gp(),Ge=p,Q.p=o,te.T=n):e.current=N,ki?(ki=!1,Aa=e,dr=a):Qm(e,w),w=e.pendingLanes,w===0&&(ra=null),Xp(N.stateNode),mn(e),t!==null)for(i=e.onRecoverableError,N=0;N<t.length;N++)w=t[N],i(w.value,{componentStack:w.stack});return(dr&3)!==0&&ml(),w=e.pendingLanes,(a&4194218)!==0&&(w&42)!==0?e===Ys?mr++:(mr=0,Ys=e):mr=0,fr(0),null}function Qm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Fl(t)))}function ml(){if(Aa!==null){var e=Aa,t=Vs;Vs=0;var n=Po(dr),a=te.T,i=Q.p;try{if(Q.p=32>n?32:n,te.T=null,Aa===null)var o=!1;else{n=js,js=null;var p=Aa,v=dr;if(Aa=null,dr=0,(Ge&6)!==0)throw Error(d(331));var N=Ge;if(Ge|=4,Tm(p.current),wm(p,p.current,v,n),Ge=N,fr(0,!1),Dt&&typeof Dt.onPostCommitFiberRoot=="function")try{Dt.onPostCommitFiberRoot(Tl,p)}catch{}o=!0}return o}finally{Q.p=i,te.T=a,Qm(e,t)}}return!1}function Xm(e,t,n){t=Lt(n,t),t=ds(e.stateNode,t,2),e=Pn(e,t,2),e!==null&&(Cl(e,2),mn(e))}function Ae(e,t,n){if(e.tag===3)Xm(e,e,n);else for(;t!==null;){if(t.tag===3){Xm(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ra===null||!ra.has(a))){e=Lt(n,e),n=Jd(2),a=Pn(t,n,2),a!==null&&(Fd(n,a,t,e),Cl(a,2),mn(a));break}}t=t.return}}function Js(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new fb;var i=new Set;a.set(t,i)}else i=a.get(t),i===void 0&&(i=new Set,a.set(t,i));i.has(n)||(Bs=!0,i.add(n),e=vb.bind(null,e,t,n),t.then(e,e))}function vb(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Re===e&&(ge&n)===n&&(je===4||je===3&&(ge&62914560)===ge&&300>cn()-Gs?(Ge&2)===0&&ul(e,0):qs|=n,ol===ge&&(ol=0)),mn(e)}function Zm(e,t){t===0&&(t=$o()),e=Xn(e,t),e!==null&&(Cl(e,t),mn(e))}function Nb(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Zm(e,n)}function Eb(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(d(314))}a!==null&&a.delete(t),Zm(e,n)}function xb(e,t){return mc(e,t)}var Ai=null,fl=null,Fs=!1,Mi=!1,$s=!1,Ma=0;function mn(e){e!==fl&&e.next===null&&(fl===null?Ai=fl=e:fl=fl.next=e),Mi=!0,Fs||(Fs=!0,Db(Sb))}function fr(e,t){if(!$s&&Mi){$s=!0;do for(var n=!1,a=Ai;a!==null;){if(e!==0){var i=a.pendingLanes;if(i===0)var o=0;else{var p=a.suspendedLanes,v=a.pingedLanes;o=(1<<31-wt(42|e)+1)-1,o&=i&~(p&~v),o=o&201326677?o&201326677|1:o?o|2:0}o!==0&&(n=!0,Fm(a,o))}else o=ge,o=jr(a,a===Re?o:0),(o&3)===0||kl(a,o)||(n=!0,Fm(a,o));a=a.next}while(n);$s=!1}}function Sb(){Mi=Fs=!1;var e=0;Ma!==0&&(Ab()&&(e=Ma),Ma=0);for(var t=cn(),n=null,a=Ai;a!==null;){var i=a.next,o=Km(a,t);o===0?(a.next=null,n===null?Ai=i:n.next=i,i===null&&(fl=n)):(n=a,(e!==0||(o&3)!==0)&&(Mi=!0)),a=i}fr(e)}function Km(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var p=31-wt(o),v=1<<p,N=i[p];N===-1?((v&n)===0||(v&a)!==0)&&(i[p]=Fp(v,t)):N<=t&&(e.expiredLanes|=v),o&=~v}if(t=Re,n=ge,n=jr(e,e===t?n:0),a=e.callbackNode,n===0||e===t&&Ue===2||e.cancelPendingCommit!==null)return a!==null&&a!==null&&fc(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||kl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&fc(a),Po(n)){case 2:case 8:n=Ko;break;case 32:n=Lr;break;case 268435456:n=Jo;break;default:n=Lr}return a=Jm.bind(null,e),n=mc(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&fc(a),e.callbackPriority=2,e.callbackNode=null,2}function Jm(e,t){var n=e.callbackNode;if(ml()&&e.callbackNode!==n)return null;var a=ge;return a=jr(e,e===Re?a:0),a===0?null:(Rm(e,a,t),Km(e,cn()),e.callbackNode!=null&&e.callbackNode===n?Jm.bind(null,e):null)}function Fm(e,t){if(ml())return null;Rm(e,t,!0)}function Db(e){Ob(function(){(Ge&6)!==0?mc(Zo,e):e()})}function Ws(){return Ma===0&&(Ma=Fo()),Ma}function $m(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Kr(""+e)}function Wm(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function wb(e,t,n,a,i){if(t==="submit"&&n&&n.stateNode===i){var o=$m((i[Et]||null).action),p=a.submitter;p&&(t=(t=p[Et]||null)?$m(t.formAction):p.getAttribute("formAction"),t!==null&&(o=t,p=null));var v=new Wr("action","action",null,a,i);e.push({event:v,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Ma!==0){var N=p?Wm(i,p):new FormData(i);is(n,{pending:!0,data:N,method:i.method,action:o},null,N)}}else typeof o=="function"&&(v.preventDefault(),N=p?Wm(i,p):new FormData(i),is(n,{pending:!0,data:N,method:i.method,action:o},o,N))},currentTarget:i}]})}}for(var Is=0;Is<Yu.length;Is++){var Ps=Yu[Is],Hb=Ps.toLowerCase(),_b=Ps[0].toUpperCase()+Ps.slice(1);$t(Hb,"on"+_b)}$t(qu,"onAnimationEnd"),$t(Lu,"onAnimationIteration"),$t(Gu,"onAnimationStart"),$t("dblclick","onDoubleClick"),$t("focusin","onFocus"),$t("focusout","onBlur"),$t(Qh,"onTransitionRun"),$t(Xh,"onTransitionStart"),$t(Zh,"onTransitionCancel"),$t(Vu,"onTransitionEnd"),Ga("onMouseEnter",["mouseout","mouseover"]),Ga("onMouseLeave",["mouseout","mouseover"]),Ga("onPointerEnter",["pointerout","pointerover"]),Ga("onPointerLeave",["pointerout","pointerover"]),pa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),pa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),pa("onBeforeInput",["compositionend","keypress","textInput","paste"]),pa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),pa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),pa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(pr));function Im(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],i=a.event;a=a.listeners;e:{var o=void 0;if(t)for(var p=a.length-1;0<=p;p--){var v=a[p],N=v.instance,w=v.currentTarget;if(v=v.listener,N!==o&&i.isPropagationStopped())break e;o=v,i.currentTarget=w;try{o(i)}catch(O){vi(O)}i.currentTarget=null,o=N}else for(p=0;p<a.length;p++){if(v=a[p],N=v.instance,w=v.currentTarget,v=v.listener,N!==o&&i.isPropagationStopped())break e;o=v,i.currentTarget=w;try{o(i)}catch(O){vi(O)}i.currentTarget=null,o=N}}}}function be(e,t){var n=t[hc];n===void 0&&(n=t[hc]=new Set);var a=e+"__bubble";n.has(a)||(Pm(t,e,2,!1),n.add(a))}function eo(e,t,n){var a=0;t&&(a|=4),Pm(n,e,a,t)}var Oi="_reactListening"+Math.random().toString(36).slice(2);function to(e){if(!e[Oi]){e[Oi]=!0,nu.forEach(function(n){n!=="selectionchange"&&(Tb.has(n)||eo(n,!1,e),eo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Oi]||(t[Oi]=!0,eo("selectionchange",!1,t))}}function Pm(e,t,n,a){switch(Sf(t)){case 2:var i=ey;break;case 8:i=ty;break;default:i=ho}n=i.bind(null,t,n,e),i=void 0,!Sc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function no(e,t,n,a,i){var o=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var p=a.tag;if(p===3||p===4){var v=a.stateNode.containerInfo;if(v===i||v.nodeType===8&&v.parentNode===i)break;if(p===4)for(p=a.return;p!==null;){var N=p.tag;if((N===3||N===4)&&(N=p.stateNode.containerInfo,N===i||N.nodeType===8&&N.parentNode===i))return;p=p.return}for(;v!==null;){if(p=fa(v),p===null)return;if(N=p.tag,N===5||N===6||N===26||N===27){a=o=p;continue e}v=v.parentNode}}a=a.return}pu(function(){var w=o,O=Ec(n),B=[];e:{var z=ju.get(e);if(z!==void 0){var M=Wr,$=e;switch(e){case"keypress":if(Fr(n)===0)break e;case"keydown":case"keyup":M=Eh;break;case"focusin":$="focus",M=_c;break;case"focusout":$="blur",M=_c;break;case"beforeblur":case"afterblur":M=_c;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=yu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=oh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=Dh;break;case qu:case Lu:case Gu:M=mh;break;case Vu:M=Hh;break;case"scroll":case"scrollend":M=ch;break;case"wheel":M=Th;break;case"copy":case"cut":case"paste":M=ph;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=vu;break;case"toggle":case"beforetoggle":M=Ch}var ie=(t&4)!==0,Ye=!ie&&(e==="scroll"||e==="scrollend"),H=ie?z!==null?z+"Capture":null:z;ie=[];for(var D=w,k;D!==null;){var U=D;if(k=U.stateNode,U=U.tag,U!==5&&U!==26&&U!==27||k===null||H===null||(U=Ml(D,H),U!=null&&ie.push(hr(D,U,k))),Ye)break;D=D.return}0<ie.length&&(z=new M(z,$,null,n,O),B.push({event:z,listeners:ie}))}}if((t&7)===0){e:{if(z=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",z&&n!==Nc&&($=n.relatedTarget||n.fromElement)&&(fa($)||$[Ba]))break e;if((M||z)&&(z=O.window===O?O:(z=O.ownerDocument)?z.defaultView||z.parentWindow:window,M?($=n.relatedTarget||n.toElement,M=w,$=$?fa($):null,$!==null&&(Ye=ae($),ie=$.tag,$!==Ye||ie!==5&&ie!==27&&ie!==6)&&($=null)):(M=null,$=w),M!==$)){if(ie=yu,U="onMouseLeave",H="onMouseEnter",D="mouse",(e==="pointerout"||e==="pointerover")&&(ie=vu,U="onPointerLeave",H="onPointerEnter",D="pointer"),Ye=M==null?z:Al(M),k=$==null?z:Al($),z=new ie(U,D+"leave",M,n,O),z.target=Ye,z.relatedTarget=k,U=null,fa(O)===w&&(ie=new ie(H,D+"enter",$,n,O),ie.target=k,ie.relatedTarget=Ye,U=ie),Ye=U,M&&$)t:{for(ie=M,H=$,D=0,k=ie;k;k=pl(k))D++;for(k=0,U=H;U;U=pl(U))k++;for(;0<D-k;)ie=pl(ie),D--;for(;0<k-D;)H=pl(H),k--;for(;D--;){if(ie===H||H!==null&&ie===H.alternate)break t;ie=pl(ie),H=pl(H)}ie=null}else ie=null;M!==null&&ef(B,z,M,ie,!1),$!==null&&Ye!==null&&ef(B,Ye,$,ie,!0)}}e:{if(z=w?Al(w):window,M=z.nodeName&&z.nodeName.toLowerCase(),M==="select"||M==="input"&&z.type==="file")var X=_u;else if(wu(z))if(Tu)X=Gh;else{X=qh;var pe=Bh}else M=z.nodeName,!M||M.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?w&&vc(w.elementType)&&(X=_u):X=Lh;if(X&&(X=X(e,w))){Hu(B,X,n,O);break e}pe&&pe(e,z,w),e==="focusout"&&w&&z.type==="number"&&w.memoizedProps.value!=null&&gc(z,"number",z.value)}switch(pe=w?Al(w):window,e){case"focusin":(wu(pe)||pe.contentEditable==="true")&&(Za=pe,Mc=w,Vl=null);break;case"focusout":Vl=Mc=Za=null;break;case"mousedown":Oc=!0;break;case"contextmenu":case"mouseup":case"dragend":Oc=!1,Uu(B,n,O);break;case"selectionchange":if(Yh)break;case"keydown":case"keyup":Uu(B,n,O)}var W;if(kc)e:{switch(e){case"compositionstart":var ee="onCompositionStart";break e;case"compositionend":ee="onCompositionEnd";break e;case"compositionupdate":ee="onCompositionUpdate";break e}ee=void 0}else Xa?Su(e,n)&&(ee="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ee="onCompositionStart");ee&&(Nu&&n.locale!=="ko"&&(Xa||ee!=="onCompositionStart"?ee==="onCompositionEnd"&&Xa&&(W=hu()):(Qn=O,Dc="value"in Qn?Qn.value:Qn.textContent,Xa=!0)),pe=Ri(w,ee),0<pe.length&&(ee=new gu(ee,e,null,n,O),B.push({event:ee,listeners:pe}),W?ee.data=W:(W=Du(n),W!==null&&(ee.data=W)))),(W=Ah?Mh(e,n):Oh(e,n))&&(ee=Ri(w,"onBeforeInput"),0<ee.length&&(pe=new gu("onBeforeInput","beforeinput",null,n,O),B.push({event:pe,listeners:ee}),pe.data=W)),wb(B,e,w,n,O)}Im(B,t)})}function hr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ri(e,t){for(var n=t+"Capture",a=[];e!==null;){var i=e,o=i.stateNode;i=i.tag,i!==5&&i!==26&&i!==27||o===null||(i=Ml(e,n),i!=null&&a.unshift(hr(e,i,o)),i=Ml(e,t),i!=null&&a.push(hr(e,i,o))),e=e.return}return a}function pl(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ef(e,t,n,a,i){for(var o=t._reactName,p=[];n!==null&&n!==a;){var v=n,N=v.alternate,w=v.stateNode;if(v=v.tag,N!==null&&N===a)break;v!==5&&v!==26&&v!==27||w===null||(N=w,i?(w=Ml(n,o),w!=null&&p.unshift(hr(n,w,N))):i||(w=Ml(n,o),w!=null&&p.push(hr(n,w,N)))),n=n.return}p.length!==0&&e.push({event:t,listeners:p})}var kb=/\r\n?/g,Cb=/\u0000|\uFFFD/g;function tf(e){return(typeof e=="string"?e:""+e).replace(kb,`
`).replace(Cb,"")}function nf(e,t){return t=tf(t),tf(e)===t}function Ui(){}function Ce(e,t,n,a,i,o){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||ja(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&ja(e,""+a);break;case"className":Qr(e,"class",a);break;case"tabIndex":Qr(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Qr(e,n,a);break;case"style":mu(e,a,o);break;case"data":if(t!=="object"){Qr(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Kr(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(n==="formAction"?(t!=="input"&&Ce(e,t,"name",i.name,i,null),Ce(e,t,"formEncType",i.formEncType,i,null),Ce(e,t,"formMethod",i.formMethod,i,null),Ce(e,t,"formTarget",i.formTarget,i,null)):(Ce(e,t,"encType",i.encType,i,null),Ce(e,t,"method",i.method,i,null),Ce(e,t,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Kr(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=Ui);break;case"onScroll":a!=null&&be("scroll",e);break;case"onScrollEnd":a!=null&&be("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(d(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(d(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Kr(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":be("beforetoggle",e),be("toggle",e),Yr(e,"popover",a);break;case"xlinkActuate":gn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":gn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":gn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":gn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":gn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":gn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":gn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":gn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":gn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Yr(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=rh.get(n)||n,Yr(e,n,a))}}function ao(e,t,n,a,i,o){switch(n){case"style":mu(e,a,o);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(d(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(d(60));e.innerHTML=n}}break;case"children":typeof a=="string"?ja(e,a):(typeof a=="number"||typeof a=="bigint")&&ja(e,""+a);break;case"onScroll":a!=null&&be("scroll",e);break;case"onScrollEnd":a!=null&&be("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Ui);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!au.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(i=n.endsWith("Capture"),t=n.slice(2,i?n.length-7:void 0),o=e[Et]||null,o=o!=null?o[n]:null,typeof o=="function"&&e.removeEventListener(t,o,i),typeof a=="function")){typeof o!="function"&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,i);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):Yr(e,n,a)}}}function ot(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":be("error",e),be("load",e);var a=!1,i=!1,o;for(o in n)if(n.hasOwnProperty(o)){var p=n[o];if(p!=null)switch(o){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:Ce(e,t,o,p,n,null)}}i&&Ce(e,t,"srcSet",n.srcSet,n,null),a&&Ce(e,t,"src",n.src,n,null);return;case"input":be("invalid",e);var v=o=p=i=null,N=null,w=null;for(a in n)if(n.hasOwnProperty(a)){var O=n[a];if(O!=null)switch(a){case"name":i=O;break;case"type":p=O;break;case"checked":N=O;break;case"defaultChecked":w=O;break;case"value":o=O;break;case"defaultValue":v=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(d(137,t));break;default:Ce(e,t,a,O,n,null)}}su(e,o,v,N,w,p,i,!1),Xr(e);return;case"select":be("invalid",e),a=p=o=null;for(i in n)if(n.hasOwnProperty(i)&&(v=n[i],v!=null))switch(i){case"value":o=v;break;case"defaultValue":p=v;break;case"multiple":a=v;default:Ce(e,t,i,v,n,null)}t=o,n=p,e.multiple=!!a,t!=null?Va(e,!!a,t,!1):n!=null&&Va(e,!!a,n,!0);return;case"textarea":be("invalid",e),o=i=a=null;for(p in n)if(n.hasOwnProperty(p)&&(v=n[p],v!=null))switch(p){case"value":a=v;break;case"defaultValue":i=v;break;case"children":o=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(d(91));break;default:Ce(e,t,p,v,n,null)}uu(e,a,i,o),Xr(e);return;case"option":for(N in n)n.hasOwnProperty(N)&&(a=n[N],a!=null)&&(N==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":Ce(e,t,N,a,n,null));return;case"dialog":be("cancel",e),be("close",e);break;case"iframe":case"object":be("load",e);break;case"video":case"audio":for(a=0;a<pr.length;a++)be(pr[a],e);break;case"image":be("error",e),be("load",e);break;case"details":be("toggle",e);break;case"embed":case"source":case"link":be("error",e),be("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(w in n)if(n.hasOwnProperty(w)&&(a=n[w],a!=null))switch(w){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:Ce(e,t,w,a,n,null)}return;default:if(vc(t)){for(O in n)n.hasOwnProperty(O)&&(a=n[O],a!==void 0&&ao(e,t,O,a,n,void 0));return}}for(v in n)n.hasOwnProperty(v)&&(a=n[v],a!=null&&Ce(e,t,v,a,n,null))}function zb(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,o=null,p=null,v=null,N=null,w=null,O=null;for(M in n){var B=n[M];if(n.hasOwnProperty(M)&&B!=null)switch(M){case"checked":break;case"value":break;case"defaultValue":N=B;default:a.hasOwnProperty(M)||Ce(e,t,M,null,a,B)}}for(var z in a){var M=a[z];if(B=n[z],a.hasOwnProperty(z)&&(M!=null||B!=null))switch(z){case"type":o=M;break;case"name":i=M;break;case"checked":w=M;break;case"defaultChecked":O=M;break;case"value":p=M;break;case"defaultValue":v=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(d(137,t));break;default:M!==B&&Ce(e,t,z,M,a,B)}}yc(e,p,v,N,w,O,o,i);return;case"select":M=p=v=z=null;for(o in n)if(N=n[o],n.hasOwnProperty(o)&&N!=null)switch(o){case"value":break;case"multiple":M=N;default:a.hasOwnProperty(o)||Ce(e,t,o,null,a,N)}for(i in a)if(o=a[i],N=n[i],a.hasOwnProperty(i)&&(o!=null||N!=null))switch(i){case"value":z=o;break;case"defaultValue":v=o;break;case"multiple":p=o;default:o!==N&&Ce(e,t,i,o,a,N)}t=v,n=p,a=M,z!=null?Va(e,!!n,z,!1):!!a!=!!n&&(t!=null?Va(e,!!n,t,!0):Va(e,!!n,n?[]:"",!1));return;case"textarea":M=z=null;for(v in n)if(i=n[v],n.hasOwnProperty(v)&&i!=null&&!a.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:Ce(e,t,v,null,a,i)}for(p in a)if(i=a[p],o=n[p],a.hasOwnProperty(p)&&(i!=null||o!=null))switch(p){case"value":z=i;break;case"defaultValue":M=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(d(91));break;default:i!==o&&Ce(e,t,p,i,a,o)}ou(e,z,M);return;case"option":for(var $ in n)z=n[$],n.hasOwnProperty($)&&z!=null&&!a.hasOwnProperty($)&&($==="selected"?e.selected=!1:Ce(e,t,$,null,a,z));for(N in a)z=a[N],M=n[N],a.hasOwnProperty(N)&&z!==M&&(z!=null||M!=null)&&(N==="selected"?e.selected=z&&typeof z!="function"&&typeof z!="symbol":Ce(e,t,N,z,a,M));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in n)z=n[ie],n.hasOwnProperty(ie)&&z!=null&&!a.hasOwnProperty(ie)&&Ce(e,t,ie,null,a,z);for(w in a)if(z=a[w],M=n[w],a.hasOwnProperty(w)&&z!==M&&(z!=null||M!=null))switch(w){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(d(137,t));break;default:Ce(e,t,w,z,a,M)}return;default:if(vc(t)){for(var Ye in n)z=n[Ye],n.hasOwnProperty(Ye)&&z!==void 0&&!a.hasOwnProperty(Ye)&&ao(e,t,Ye,void 0,a,z);for(O in a)z=a[O],M=n[O],!a.hasOwnProperty(O)||z===M||z===void 0&&M===void 0||ao(e,t,O,z,a,M);return}}for(var H in n)z=n[H],n.hasOwnProperty(H)&&z!=null&&!a.hasOwnProperty(H)&&Ce(e,t,H,null,a,z);for(B in a)z=a[B],M=n[B],!a.hasOwnProperty(B)||z===M||z==null&&M==null||Ce(e,t,B,z,a,M)}var lo=null,ro=null;function Bi(e){return e.nodeType===9?e:e.ownerDocument}function af(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function lf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function io(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var co=null;function Ab(){var e=window.event;return e&&e.type==="popstate"?e===co?!1:(co=e,!0):(co=null,!1)}var rf=typeof setTimeout=="function"?setTimeout:void 0,Mb=typeof clearTimeout=="function"?clearTimeout:void 0,cf=typeof Promise=="function"?Promise:void 0,Ob=typeof queueMicrotask=="function"?queueMicrotask:typeof cf<"u"?function(e){return cf.resolve(null).then(e).catch(Rb)}:rf;function Rb(e){setTimeout(function(){throw e})}function so(e,t){var n=t,a=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(a===0){e.removeChild(i),Sr(t);return}a--}else n!=="$"&&n!=="$?"&&n!=="$!"||a++;n=i}while(n);Sr(t)}function oo(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":oo(n),bc(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Ub(e,t,n,a){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[zl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==i.rel||e.getAttribute("href")!==(i.href==null?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var o=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=Pt(e.nextSibling),e===null)break}return null}function Bb(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Pt(e.nextSibling),e===null))return null;return e}function Pt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}function sf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function of(e,t,n){switch(t=Bi(n),e){case"html":if(e=t.documentElement,!e)throw Error(d(452));return e;case"head":if(e=t.head,!e)throw Error(d(453));return e;case"body":if(e=t.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}var Kt=new Map,uf=new Set;function qi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var Mn=Q.d;Q.d={f:qb,r:Lb,D:Gb,C:Vb,L:jb,m:Yb,X:Xb,S:Qb,M:Zb};function qb(){var e=Mn.f(),t=Ci();return e||t}function Lb(e){var t=qa(e);t!==null&&t.tag===5&&t.type==="form"?Ud(t):Mn.r(e)}var hl=typeof document>"u"?null:document;function df(e,t,n){var a=hl;if(a&&typeof t=="string"&&t){var i=Bt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof n=="string"&&(i+='[crossorigin="'+n+'"]'),uf.has(i)||(uf.add(i),e={rel:e,crossOrigin:n,href:t},a.querySelector(i)===null&&(t=a.createElement("link"),ot(t,"link",e),tt(t),a.head.appendChild(t)))}}function Gb(e){Mn.D(e),df("dns-prefetch",e,null)}function Vb(e,t){Mn.C(e,t),df("preconnect",e,t)}function jb(e,t,n){Mn.L(e,t,n);var a=hl;if(a&&e&&t){var i='link[rel="preload"][as="'+Bt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(i+='[imagesrcset="'+Bt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(i+='[imagesizes="'+Bt(n.imageSizes)+'"]')):i+='[href="'+Bt(e)+'"]';var o=i;switch(t){case"style":o=bl(e);break;case"script":o=yl(e)}Kt.has(o)||(e=De({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Kt.set(o,e),a.querySelector(i)!==null||t==="style"&&a.querySelector(br(o))||t==="script"&&a.querySelector(yr(o))||(t=a.createElement("link"),ot(t,"link",e),tt(t),a.head.appendChild(t)))}}function Yb(e,t){Mn.m(e,t);var n=hl;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+Bt(a)+'"][href="'+Bt(e)+'"]',o=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=yl(e)}if(!Kt.has(o)&&(e=De({rel:"modulepreload",href:e},t),Kt.set(o,e),n.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(yr(o)))return}a=n.createElement("link"),ot(a,"link",e),tt(a),n.head.appendChild(a)}}}function Qb(e,t,n){Mn.S(e,t,n);var a=hl;if(a&&e){var i=La(a).hoistableStyles,o=bl(e);t=t||"default";var p=i.get(o);if(!p){var v={loading:0,preload:null};if(p=a.querySelector(br(o)))v.loading=5;else{e=De({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Kt.get(o))&&uo(e,n);var N=p=a.createElement("link");tt(N),ot(N,"link",e),N._p=new Promise(function(w,O){N.onload=w,N.onerror=O}),N.addEventListener("load",function(){v.loading|=1}),N.addEventListener("error",function(){v.loading|=2}),v.loading|=4,Li(p,t,a)}p={type:"stylesheet",instance:p,count:1,state:v},i.set(o,p)}}}function Xb(e,t){Mn.X(e,t);var n=hl;if(n&&e){var a=La(n).hoistableScripts,i=yl(e),o=a.get(i);o||(o=n.querySelector(yr(i)),o||(e=De({src:e,async:!0},t),(t=Kt.get(i))&&mo(e,t),o=n.createElement("script"),tt(o),ot(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},a.set(i,o))}}function Zb(e,t){Mn.M(e,t);var n=hl;if(n&&e){var a=La(n).hoistableScripts,i=yl(e),o=a.get(i);o||(o=n.querySelector(yr(i)),o||(e=De({src:e,async:!0,type:"module"},t),(t=Kt.get(i))&&mo(e,t),o=n.createElement("script"),tt(o),ot(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},a.set(i,o))}}function mf(e,t,n,a){var i=(i=Vn.current)?qi(i):null;if(!i)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=bl(n.href),n=La(i).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=bl(n.href);var o=La(i).hoistableStyles,p=o.get(e);if(p||(i=i.ownerDocument||i,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,p),(o=i.querySelector(br(e)))&&!o._p&&(p.instance=o,p.state.loading=5),Kt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Kt.set(e,n),o||Kb(i,e,n,p.state))),t&&a===null)throw Error(d(528,""));return p}if(t&&a!==null)throw Error(d(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=yl(n),n=La(i).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function bl(e){return'href="'+Bt(e)+'"'}function br(e){return'link[rel="stylesheet"]['+e+"]"}function ff(e){return De({},e,{"data-precedence":e.precedence,precedence:null})}function Kb(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),ot(t,"link",n),tt(t),e.head.appendChild(t))}function yl(e){return'[src="'+Bt(e)+'"]'}function yr(e){return"script[async]"+e}function pf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Bt(n.href)+'"]');if(a)return t.instance=a,tt(a),a;var i=De({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),tt(a),ot(a,"style",i),Li(a,n.precedence,e),t.instance=a;case"stylesheet":i=bl(n.href);var o=e.querySelector(br(i));if(o)return t.state.loading|=4,t.instance=o,tt(o),o;a=ff(n),(i=Kt.get(i))&&uo(a,i),o=(e.ownerDocument||e).createElement("link"),tt(o);var p=o;return p._p=new Promise(function(v,N){p.onload=v,p.onerror=N}),ot(o,"link",a),t.state.loading|=4,Li(o,n.precedence,e),t.instance=o;case"script":return o=yl(n.src),(i=e.querySelector(yr(o)))?(t.instance=i,tt(i),i):(a=n,(i=Kt.get(o))&&(a=De({},n),mo(a,i)),e=e.ownerDocument||e,i=e.createElement("script"),tt(i),ot(i,"link",a),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(d(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Li(a,n.precedence,e));return t.instance}function Li(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,o=i,p=0;p<a.length;p++){var v=a[p];if(v.dataset.precedence===t)o=v;else if(o!==i)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function uo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function mo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Gi=null;function hf(e,t,n){if(Gi===null){var a=new Map,i=Gi=new Map;i.set(n,a)}else i=Gi,a=i.get(n),a||(a=new Map,i.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var o=n[i];if(!(o[zl]||o[ft]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var p=o.getAttribute(t)||"";p=e+p;var v=a.get(p);v?v.push(o):a.set(p,[o])}}return a}function bf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Jb(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function yf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var gr=null;function Fb(){}function $b(e,t,n){if(gr===null)throw Error(d(475));var a=gr;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=bl(n.href),o=e.querySelector(br(i));if(o){e=o._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=Vi.bind(a),e.then(a,a)),t.state.loading|=4,t.instance=o,tt(o);return}o=e.ownerDocument||e,n=ff(n),(i=Kt.get(i))&&uo(n,i),o=o.createElement("link"),tt(o);var p=o;p._p=new Promise(function(v,N){p.onload=v,p.onerror=N}),ot(o,"link",n),t.instance=o}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(a.count++,t=Vi.bind(a),e.addEventListener("load",t),e.addEventListener("error",t))}}function Wb(){if(gr===null)throw Error(d(475));var e=gr;return e.stylesheets&&e.count===0&&fo(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&fo(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function Vi(){if(this.count--,this.count===0){if(this.stylesheets)fo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ji=null;function fo(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ji=new Map,t.forEach(Ib,e),ji=null,Vi.call(e))}function Ib(e,t){if(!(t.state.loading&4)){var n=ji.get(e);if(n)var a=n.get(null);else{n=new Map,ji.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<i.length;o++){var p=i[o];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(n.set(p.dataset.precedence,p),a=p)}a&&n.set(null,a)}i=t.instance,p=i.getAttribute("data-precedence"),o=n.get(p)||a,o===a&&n.set(null,i),n.set(p,i),this.count++,a=Vi.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),o?o.parentNode.insertBefore(i,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var vr={$$typeof:Y,Provider:null,Consumer:null,_currentValue:ye,_currentValue2:ye,_threadCount:0};function Pb(e,t,n,a,i,o,p,v){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=pc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pc(0),this.hiddenUpdates=pc(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=o,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function gf(e,t,n,a,i,o,p,v,N,w,O,B){return e=new Pb(e,t,n,p,v,N,w,B),t=1,o===!0&&(t|=24),o=Xt(3,null,null,t),e.current=o,o.stateNode=e,t=Qc(),t.refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:a,isDehydrated:n,cache:t},Ds(o),e}function vf(e){return e?(e=Fa,e):Fa}function Nf(e,t,n,a,i,o){i=vf(i),a.context===null?a.context=i:a.pendingContext=i,a=In(t),a.payload={element:n},o=o===void 0?null:o,o!==null&&(a.callback=o),n=Pn(e,a,t),n!==null&&(gt(n,e,t),nr(n,e,t))}function Ef(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function po(e,t){Ef(e,t),(e=e.alternate)&&Ef(e,t)}function xf(e){if(e.tag===13){var t=Xn(e,67108864);t!==null&&gt(t,e,67108864),po(e,67108864)}}var Yi=!0;function ey(e,t,n,a){var i=te.T;te.T=null;var o=Q.p;try{Q.p=2,ho(e,t,n,a)}finally{Q.p=o,te.T=i}}function ty(e,t,n,a){var i=te.T;te.T=null;var o=Q.p;try{Q.p=8,ho(e,t,n,a)}finally{Q.p=o,te.T=i}}function ho(e,t,n,a){if(Yi){var i=bo(a);if(i===null)no(e,t,a,Qi,n),Df(e,a);else if(ay(i,e,t,n,a))a.stopPropagation();else if(Df(e,a),t&4&&-1<ny.indexOf(e)){for(;i!==null;){var o=qa(i);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var p=ma(o.pendingLanes);if(p!==0){var v=o;for(v.pendingLanes|=2,v.entangledLanes|=2;p;){var N=1<<31-wt(p);v.entanglements[1]|=N,p&=~N}mn(o),(Ge&6)===0&&(_i=cn()+500,fr(0))}}break;case 13:v=Xn(o,2),v!==null&&gt(v,o,2),Ci(),po(o,2)}if(o=bo(a),o===null&&no(e,t,a,Qi,n),o===i)break;i=o}i!==null&&a.stopPropagation()}else no(e,t,a,null,n)}}function bo(e){return e=Ec(e),yo(e)}var Qi=null;function yo(e){if(Qi=null,e=fa(e),e!==null){var t=ae(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=Oe(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Qi=e,null}function Sf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Vp()){case Zo:return 2;case Ko:return 8;case Lr:case jp:return 32;case Jo:return 268435456;default:return 32}default:return 32}}var go=!1,ia=null,ca=null,sa=null,Nr=new Map,Er=new Map,oa=[],ny="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Df(e,t){switch(e){case"focusin":case"focusout":ia=null;break;case"dragenter":case"dragleave":ca=null;break;case"mouseover":case"mouseout":sa=null;break;case"pointerover":case"pointerout":Nr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Er.delete(t.pointerId)}}function xr(e,t,n,a,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:o,targetContainers:[i]},t!==null&&(t=qa(t),t!==null&&xf(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function ay(e,t,n,a,i){switch(t){case"focusin":return ia=xr(ia,e,t,n,a,i),!0;case"dragenter":return ca=xr(ca,e,t,n,a,i),!0;case"mouseover":return sa=xr(sa,e,t,n,a,i),!0;case"pointerover":var o=i.pointerId;return Nr.set(o,xr(Nr.get(o)||null,e,t,n,a,i)),!0;case"gotpointercapture":return o=i.pointerId,Er.set(o,xr(Er.get(o)||null,e,t,n,a,i)),!0}return!1}function wf(e){var t=fa(e.target);if(t!==null){var n=ae(t);if(n!==null){if(t=n.tag,t===13){if(t=Oe(n),t!==null){e.blockedOn=t,Wp(e.priority,function(){if(n.tag===13){var a=Ct(),i=Xn(n,a);i!==null&&gt(i,n,a),po(n,a)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bo(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Nc=a,n.target.dispatchEvent(a),Nc=null}else return t=qa(n),t!==null&&xf(t),e.blockedOn=n,!1;t.shift()}return!0}function Hf(e,t,n){Xi(e)&&n.delete(t)}function ly(){go=!1,ia!==null&&Xi(ia)&&(ia=null),ca!==null&&Xi(ca)&&(ca=null),sa!==null&&Xi(sa)&&(sa=null),Nr.forEach(Hf),Er.forEach(Hf)}function Zi(e,t){e.blockedOn===t&&(e.blockedOn=null,go||(go=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,ly)))}var Ki=null;function _f(e){Ki!==e&&(Ki=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){Ki===e&&(Ki=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],i=e[t+2];if(typeof a!="function"){if(yo(a||n)===null)continue;break}var o=qa(n);o!==null&&(e.splice(t,3),t-=3,is(o,{pending:!0,data:i,method:n.method,action:a},a,i))}}))}function Sr(e){function t(N){return Zi(N,e)}ia!==null&&Zi(ia,e),ca!==null&&Zi(ca,e),sa!==null&&Zi(sa,e),Nr.forEach(t),Er.forEach(t);for(var n=0;n<oa.length;n++){var a=oa[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<oa.length&&(n=oa[0],n.blockedOn===null);)wf(n),n.blockedOn===null&&oa.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var i=n[a],o=n[a+1],p=i[Et]||null;if(typeof o=="function")p||_f(n);else if(p){var v=null;if(o&&o.hasAttribute("formAction")){if(i=o,p=o[Et]||null)v=p.formAction;else if(yo(i)!==null)continue}else v=p.action;typeof v=="function"?n[a+1]=v:(n.splice(a,3),a-=3),_f(n)}}}function vo(e){this._internalRoot=e}Ji.prototype.render=vo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(d(409));var n=t.current,a=Ct();Nf(n,a,e,t,null,null)},Ji.prototype.unmount=vo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;e.tag===0&&ml(),Nf(e.current,2,null,e,null,null),Ci(),t[Ba]=null}};function Ji(e){this._internalRoot=e}Ji.prototype.unstable_scheduleHydration=function(e){if(e){var t=eu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<oa.length&&t!==0&&t<oa[n].priority;n++);oa.splice(n,0,e),n===0&&wf(e)}};var Tf=r.version;if(Tf!=="19.0.0")throw Error(d(527,Tf,"19.0.0"));Q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=L(t),e=e!==null?ne(e):null,e=e===null?null:e.stateNode,e};var ry={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:te,findFiberByHostInstance:fa,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fi.isDisabled&&Fi.supportsFiber)try{Tl=Fi.inject(ry),Dt=Fi}catch{}}return Dr.createRoot=function(e,t){if(!y(e))throw Error(d(299));var n=!1,a="",i=Qd,o=Xd,p=Zd,v=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(p=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(v=t.unstable_transitionCallbacks)),t=gf(e,1,!1,null,null,n,a,i,o,p,v,null),e[Ba]=t.current,to(e.nodeType===8?e.parentNode:e),new vo(t)},Dr.hydrateRoot=function(e,t,n){if(!y(e))throw Error(d(299));var a=!1,i="",o=Qd,p=Xd,v=Zd,N=null,w=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(o=n.onUncaughtError),n.onCaughtError!==void 0&&(p=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(N=n.unstable_transitionCallbacks),n.formState!==void 0&&(w=n.formState)),t=gf(e,1,!0,t,n??null,a,i,o,p,v,N,w),t.context=vf(null),n=t.current,a=Ct(),i=In(a),i.callback=null,Pn(n,i,a),t.current.lanes=a,Cl(t,a),mn(t),e[Ba]=t.current,to(e),new Ji(t)},Dr.version="19.0.0",Dr}var Uf;function fy(){if(Uf)return No.exports;Uf=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(r){console.error(r)}}return l(),No.exports=my(),No.exports}var py=fy(),m=qo();const cp={Utc:1};class Ne{constructor(r){this.message=r??""}}function Un(l){return Array.isArray(l)||ArrayBuffer.isView(l)}function hy(l){return l!=null&&typeof l.GetEnumerator=="function"}function by(l){return l!=null&&typeof l.CompareTo=="function"}function yy(l){return l!=null&&typeof l.Equals=="function"}function gy(l){return l!=null&&typeof l.GetHashCode=="function"}function To(l){return l!=null&&typeof l.Dispose=="function"}function ut(l){To(l)&&l.Dispose()}function h(){return null}function Ii(l,r){return Object.getPrototypeOf(l)?.constructor===Object.getPrototypeOf(r)?.constructor}class vy{constructor(r){this.current=h(),this.iter=r}"System.Collections.Generic.IEnumerator`1.get_Current"(){return this.current}"System.Collections.IEnumerator.get_Current"(){return this.current}"System.Collections.IEnumerator.MoveNext"(){const r=this.iter.next();return this.current=r.value,!r.done}"System.Collections.IEnumerator.Reset"(){throw new Ne("JS iterators cannot be reset")}Dispose(){}}function Mt(l){return hy(l)?l.GetEnumerator():new vy(l[Symbol.iterator]())}function Lo(l){return{next(){const r=l["System.Collections.IEnumerator.MoveNext"](),u=r?l["System.Collections.Generic.IEnumerator`1.get_Current"]():void 0;return{done:!r,value:u}}}}function Bf(l,r){return l.toString(10).padStart(r,"0")}function qf(l){const r=l;return typeof r.offset=="number"?r.offset:l.kind===cp.Utc?0:l.getTimezoneOffset()*-6e4}function Ny(l,r){return l=l,l.toString(r)}class da{static id(r){return da.idMap.has(r)||da.idMap.set(r,++da.count),da.idMap.get(r)}}da.idMap=new WeakMap;da.count=0;function sp(l){let r=0,u=5381;const d=l.length;for(;r<d;)u=u*33^l.charCodeAt(r++);return u}function ko(l){return l*2654435761|0}function Ey(l){return sp(l.toString(32))}function lc(l){let r=0;const u=l.length;for(let d=0;d<u;d++){const y=l[d];r=(r<<5)+r^y}return r}function xy(l){return l.getTime()}function Sy(l){const r=l.length,u=new Array(r);for(let d=0;d<r;d++)u[d]=Ra(l[d]);return lc(u)}function Ra(l){if(l==null)return 0;switch(typeof l){case"boolean":return l?1:0;case"number":return ko(l);case"bigint":return Ey(l);case"string":return sp(l);default:{if(gy(l))return l.GetHashCode();if(Un(l))return Sy(l);if(l instanceof Date)return xy(l);if(Object.getPrototypeOf(l)?.constructor===Object){const r=Object.values(l).map(u=>Ra(u));return lc(r)}else return ko(da.id(l))}}}function Dy(l,r,u){if(l==null)return r==null;if(r==null||l.length!==r.length)return!1;for(let d=0;d<l.length;d++)if(!u(l[d],r[d]))return!1;return!0}function op(l,r){return Dy(l,r,nn)}function wy(l,r){const u=Object.keys(l),d=Object.keys(r);if(u.length!==d.length)return!1;u.sort(),d.sort();for(let y=0;y<u.length;y++)if(u[y]!==d[y]||!nn(l[u[y]],r[d[y]]))return!1;return!0}function nn(l,r){return l===r?!0:l==null?r==null:r==null?!1:yy(l)?l.Equals(r):Un(l)?Un(r)&&op(l,r):typeof l!="object"?!1:l instanceof Date?r instanceof Date&&up(l,r)===0:Object.getPrototypeOf(l)?.constructor===Object&&wy(l,r)}function up(l,r){let u,d;return"offset"in l&&"offset"in r?(u=l.getTime(),d=r.getTime()):(u=l.getTime()+qf(l),d=r.getTime()+qf(r)),u===d?0:u<d?-1:1}function Hy(l,r,u){if(l==null)return r==null?0:1;if(r==null)return-1;if(l.length!==r.length)return l.length<r.length?-1:1;for(let d=0,y=0;d<l.length;d++)if(y=u(l[d],r[d]),y!==0)return y;return 0}function dp(l,r){return Hy(l,r,Bn)}function _y(l,r){const u=Object.keys(l),d=Object.keys(r);if(u.length!==d.length)return u.length<d.length?-1:1;u.sort(),d.sort();for(let y=0,g=0;y<u.length;y++){const x=u[y];if(x!==d[y])return x<d[y]?-1:1;if(g=Bn(l[x],r[x]),g!==0)return g}return 0}function Bn(l,r){return l===r?0:l==null?r==null?0:-1:r==null?1:by(l)?l.CompareTo(r):Un(l)?Un(r)?dp(l,r):-1:typeof l!="object"?l<r?-1:1:l instanceof Date?r instanceof Date?up(l,r):-1:Object.getPrototypeOf(l)?.constructor===Object?_y(l,r):-1}function Cr(l){const r={};for(const u of l)r[u[0]]=u[1];return r}function Ty(l){Un(l)?l.splice(0):l.clear()}const rc=new WeakMap;function Nl(l){if(l==null)return null;const r=(u,d)=>l(u)(d);return rc.set(r,l),r}function Oa(l){return rc.get(l)??(r=>u=>l(r,u))}function Lf(l){if(l==null)return null;const r=(u,d,y)=>l(u)(d)(y);return rc.set(r,l),r}function wo(l){return rc.get(l)??(r=>u=>d=>l(r,u,d))}function ky(l){let r=0,u="[";for(const d of l){if(r===0)u+=fn(d);else if(r===100){u+="; ...";break}else u+="; "+fn(d);r++}return u+"]"}function fn(l,r=0){if(l!=null&&typeof l=="object"){if(typeof l.toString=="function"&&l.toString!==Object.prototype.toString)return l.toString();if(Symbol.iterator in l)return ky(l);{const u=Object.getPrototypeOf(l)?.constructor;return u===Object&&r<10?"{ "+Object.entries(l).map(([d,y])=>d+" = "+fn(y,r+1)).join(`
  `)+" }":u?.name??""}}return String(l)}function Cy(l,r){if(r.length===0)return l;{let u,d=!0;return r.length===1?(u=fn(r[0]),d=u.indexOf(" ")>=0):u=r.map(y=>fn(y)).join(", "),l+(d?" (":" ")+u+(d?")":"")}}class ic{get name(){return this.cases()[this.tag]}toJSON(){return this.fields.length===0?this.name:[this.name].concat(this.fields)}toString(){return Cy(this.name,this.fields)}GetHashCode(){const r=this.fields.map(u=>Ra(u));return r.splice(0,0,ko(this.tag)),lc(r)}Equals(r){return this===r?!0:Ii(this,r)&&this.tag===r.tag?op(this.fields,r.fields):!1}CompareTo(r){return this===r?0:Ii(this,r)?this.tag===r.tag?dp(this.fields,r.fields):this.tag<r.tag?-1:1:-1}}function zy(l){const r={},u=Object.keys(l);for(let d=0;d<u.length;d++)r[u[d]]=l[u[d]];return r}function Ay(l){return"{ "+Object.entries(l).map(([r,u])=>r+" = "+fn(u)).join(`
  `)+" }"}function My(l){const r=Object.values(l).map(u=>Ra(u));return lc(r)}function Oy(l,r){if(l===r)return!0;if(Ii(l,r)){const u=Object.keys(l);for(let d=0;d<u.length;d++)if(!nn(l[u[d]],r[u[d]]))return!1;return!0}else return!1}function Ry(l,r){if(l===r)return 0;if(Ii(l,r)){const u=Object.keys(l);for(let d=0;d<u.length;d++){const y=Bn(l[u[d]],r[u[d]]);if(y!==0)return y}return 0}else return-1}class Mr{toJSON(){return zy(this)}toString(){return Ay(this)}GetHashCode(){return My(this)}Equals(r){return Oy(this,r)}CompareTo(r){return Ry(this,r)}}const wl=Symbol("numeric");function Uy(l){return typeof l=="number"||typeof l=="bigint"||l?.[wl]}function By(l,r){return typeof l=="number"||typeof l=="bigint"?l<r?-1:l>r?1:0:l.CompareTo(r)}function qy(l,r){return typeof l=="number"?l*r:typeof l=="bigint"?l*BigInt(r):l[wl]().multiply(r)}function Ly(l,r){return typeof l=="number"?l.toFixed(r):typeof l=="bigint"?l.toString():l[wl]().toFixed(r)}function Gf(l,r){return typeof l=="number"?l.toPrecision(r):typeof l=="bigint"?l.toString():l[wl]().toPrecision(r)}function Vf(l,r){return typeof l=="number"?l.toExponential(r):typeof l=="bigint"?l:l[wl]().toExponential(r)}function jf(l){return typeof l=="number"?(Number(l)>>>0).toString(16):typeof l=="bigint"?BigInt.asUintN(64,l).toString(16):l[wl]().toHex()}function Gy(l){const r=l<0;l=Math.abs(l);const u=~~(l/36e5),d=l%36e5/6e4;return(r?"-":"+")+Bf(u,2)+":"+Bf(d,2)}function Vy(l,r){return new Date(l.getTime()+(l.offset??0)).toISOString().replace(/\.\d+/,"").replace(/[A-Z]|\.\d+/g," ")+Gy(l.offset??0)}function jy(l,r){return l.kind===cp.Utc?l.toUTCString():l.toLocaleString()}function Yy(l,r,u){return l.offset!=null?Vy(l):jy(l)}function mp(l){return l.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}const wr=/(^|[^%])%([0+\- ]*)(\*|\d+)?(?:\.(\d+))?(\w)/g;function Qy(l,r){return By(l,r)<0}function _r(l){return{input:l,cont:Ky(l)}}function Xy(l,r){return typeof r=="string"?l(r):r.cont(l)}function Tr(l){return Xy(r=>r,l)}function Zy(l,r,u,d,y){let g="";if(r=r||"",y=y||"",Uy(l))switch(y.toLowerCase()!=="x"&&(Qy(l,0)?(l=qy(l,-1),g="-"):r.indexOf(" ")>=0?g=" ":r.indexOf("+")>=0&&(g="+")),d=d==null?null:parseInt(d,10),y){case"f":case"F":d=d??6,l=Ly(l,d);break;case"g":case"G":l=d!=null?Gf(l,d):Gf(l);break;case"e":case"E":l=d!=null?Vf(l,d):Vf(l);break;case"x":l=jf(l);break;case"X":l=jf(l).toUpperCase();break;default:l=String(l);break}else l instanceof Date?l=Yy(l):l=fn(l);if(u=typeof u=="number"?u:parseInt(u,10),isNaN(u))l=g+l;else{const x=r.indexOf("0")>=0,C=r.indexOf("-")>=0,T=C||!x?" ":"0";T==="0"?(l=Yf(l,u-g.length,T,C),l=g+l):l=Yf(g+l,u,T,C)}return l}function fp(l,r,u,d="",y=-1){return(...g)=>{let x=d;const C=r.slice(),T=u.slice();for(const E of g){const[,,R,q,F,Y]=T[0];let Z=q;if(y>=0)Z=y,y=-1;else if(Z==="*"){if(E<0)throw new Ne("Non-negative number required");y=E;continue}x+=C[0],x+=Zy(E,R,Z,F,Y),C.splice(0,1),T.splice(0,1)}return T.length===0?(x+=C[0],l(x)):fp(l,C,T,x,y)}}function Ky(l){return r=>{wr.lastIndex=0;const u=[],d=[];let y=0,g=wr.exec(l);for(;g;){const x=g.index+(g[1]||"").length;u.push(l.substring(y,x).replace(/%%/g,"%")),d.push(g),y=wr.lastIndex,wr.lastIndex-=1,g=wr.exec(l)}return u.length===0?r(l.replace(/%%/g,"%")):(u.push(l.substring(y).replace(/%%/g,"%")),fp(r,u,d))}}function Jy(l){return typeof l!="string"||l.length===0}function Fy(l){return typeof l!="string"||/^\s*$/.test(l)}function Go(...l){return l.map(r=>String(r)).join("")}function pn(l,r){return Array.isArray(r)?r.join(l):Array.from(r).join(l)}function Yf(l,r,u,d){u=u||" ",r=r-l.length;for(let y=0;y<r;y++)l=d?l+u:u+l;return l}function pp(l,r,u,d){if(u=typeof u=="number"?u:void 0,d=typeof d=="number"?d:0,u&&u<0)throw new Ne("Count cannot be less than zero");if(u===0)return[];const y=(d&1)===1,g=(d&2)===2;r=r||[],r=r.filter(R=>R).map(mp),r=r.length>0?r:["\\s"];const x=[],C=new RegExp(r.join("|"),"g");let T=!0,E=0;do{const R=C.exec(l);if(R===null){const q=g?l.substring(E).trim():l.substring(E);(!y||q.length>0)&&x.push(q),T=!1}else{const q=g?l.substring(E,R.index).trim():l.substring(E,R.index);(!y||q.length>0)&&(u!=null&&x.length+1===u?(x.push(g?l.substring(E).trim():l.substring(E)),T=!1):x.push(q)),E=C.lastIndex}}while(T);return x}function $y(l,...r){return r.length===0?l.trimEnd():l.replace(new RegExp("["+mp(r.join(""))+"]+$"),"")}function hp(l,r,u){if(r+(u||0)>l.length)throw new Ne("Invalid startIndex and/or length");return u!=null?l.substr(r,u):l.substr(r)}class Sl{constructor(r){this.value=r}toJSON(){return this.value}toString(){return String(this.value)}GetHashCode(){return Ra(this.value)}Equals(r){return r==null?!1:nn(this.value,r instanceof Sl?r.value:r)}CompareTo(r){return r==null?1:Bn(this.value,r instanceof Sl?r.value:r)}}function J(l){if(l==null)throw new Ne("Option has no value");return l instanceof Sl?l.value:l}function an(l){return l==null||l instanceof Sl?new Sl(l):l}function Qf(l,r){return l!=null?J(l):r}function Co(l,r){return l!=null?J(l):r()}function zo(l,r){return r!=null?an(l(J(r))):void 0}const bp="Collection was empty.",Wy="Value cannot be null.",Iy=" (Parameter '";class Py extends Ne{constructor(r){super(r)}}function yp(l){return new Py(l)}class eg extends Ne{constructor(r){super(r)}}function $i(l){return new eg(l)}class tg extends Ne{constructor(r,u){super(Jy(u)?r:r+Iy+u+"')"),this.paramName=u}}class ng extends tg{constructor(r,u){super(u,r)}}function ag(l,r){return new ng(l,r)}function lg(l){return ag(l,Wy)}function Ho(l){return!!nn(l,h())}function rg(l,r){if(nn(r,h()))throw lg(l);return r}function ig(l,r){return new Array(r)}function Xf(l,r){return l>r?l:r}function gp(l,r,u,d){const y=r|0;return l.fill(d,y,y+u)}function cg(l,r){const u=ig(r,1);return zr(u,0,l),u}function sg(l,r,u){const d=l;return u.reduce(d,r)}function Zf(l,r,u){if(Ho(r))return!!Ho(u);if(Ho(u))return!1;{let d=0,y=!0;const g=r.length|0,x=u.length|0;if(g>x)return!1;if(g<x)return!1;for(;d<g&&y;)y=l(On(d,r),On(d,u)),d=d+1|0;return y}}function On(l,r){if(l<0||l>=r.length)throw new Ne("Index was outside the bounds of the array.\\nParameter name: index");return r[l]}function zr(l,r,u){if(r<0||r>=l.length)throw new Ne("Index was outside the bounds of the array.\\nParameter name: index");l[r]=u}function og(l,r,u){return r.reduceRight(((d,y)=>l(y,d)),u)}const ug="Enumeration already finished.",dg="Enumeration has not started. Call MoveNext.",vp="The input sequence has an insufficient number of elements.",mg="Reset is not supported on this enumerator.";function fg(){throw $i(mg)}function Vo(){throw yp(dg)}function Ao(){throw yp(ug)}class pg{constructor(r){this.f=r}toString(){const r=this;let u=0,d="seq [";const y=Mt(r);try{for(;u<4&&y["System.Collections.IEnumerator.MoveNext"]();)u>0&&(d=d+"; "),d=d+fn(y["System.Collections.Generic.IEnumerator`1.get_Current"]()),u=u+1|0;return u===4&&(d=d+"; ..."),d+"]"}finally{ut(y)}}GetEnumerator(){return this.f()}[Symbol.iterator](){return Lo(Mt(this))}"System.Collections.IEnumerable.GetEnumerator"(){return this.f()}}function hg(l){return new pg(l)}class bg{constructor(r,u,d){this.current=r,this.next=u,this.dispose=d}"System.Collections.Generic.IEnumerator`1.get_Current"(){return this.current()}"System.Collections.IEnumerator.get_Current"(){return this.current()}"System.Collections.IEnumerator.MoveNext"(){return this.next()}"System.Collections.IEnumerator.Reset"(){fg()}Dispose(){this.dispose()}}function cc(l,r,u){return new bg(l,r,u)}function yg(l){let r,u,d=!1,y=!1,g;const x=()=>{if(y=!0,u!=null){const C=J(u);try{ut(C)}finally{u=void 0}}if(r!=null){const C=J(r);try{ut(C)}finally{r=void 0}}};return cc(()=>(d?y&&Ao():Vo(),g!=null?J(g):Ao()),()=>{if(d||(d=!0),y)return!1;{let C;for(;C==null;){let T;const E=r,R=u;if(E!=null)if(R!=null){const q=J(R);if(q["System.Collections.IEnumerator.MoveNext"]())g=an(q["System.Collections.Generic.IEnumerator`1.get_Current"]()),C=!0;else try{ut(q)}finally{u=void 0}}else{const q=J(E);q["System.Collections.IEnumerator.MoveNext"]()?u=(T=q["System.Collections.Generic.IEnumerator`1.get_Current"](),Mt(T)):(x(),C=!1)}else r=Mt(l)}return J(C)}},()=>{y||x()})}function gg(l,r){return cc(()=>r["System.Collections.Generic.IEnumerator`1.get_Current"](),()=>r["System.Collections.IEnumerator.MoveNext"](),()=>{ut(r)})}function Np(l,r,u){let d=!1,y,g=an(l());const x=()=>{if(g!=null){const T=J(g);try{u(T)}finally{g=void 0}}},C=()=>{try{x()}finally{y=void 0}};return cc(()=>(d||Vo(),y!=null?J(y):Ao()),()=>{if(d||(d=!0),g!=null){const T=J(g);let E;try{E=r(T)}catch(R){throw C(),R}return E!=null?(y=E,!0):(C(),!1)}else return!1},x)}function vg(l,r){let u,d=r;return cc(()=>{if(u!=null){const y=J(u)[0];return J(u)[1],y}else return Vo()},()=>(u=l(d),u!=null?(J(u)[0],d=J(u)[1],!0):!1),()=>{})}function Hl(l){return hg(l)}function Or(l){return Mt(rg("source",l))}function I(l){return Hl(()=>Mt(l()))}function Ep(l){return Hl(()=>yg(l))}function Ng(l,r){return Hl(()=>vg(l,r))}function xp(){return I(()=>new Array(0))}function ce(l){return I(()=>cg(l))}function _e(l){return Un(l)?s(l):l instanceof vt?l:Ag(l)}function Eg(l,r,u){return Hl(()=>Np(l,r,u))}function Sp(l,r,u){return Hl(()=>{let d=-1;return Np(l,y=>(d=d+1|0,r(d,y)),u)})}function Je(l,r){return Ep([l,r])}function xg(l,r,u){const d=Or(u);try{let y=r;for(;d["System.Collections.IEnumerator.MoveNext"]();)y=l(y,d["System.Collections.Generic.IEnumerator`1.get_Current"]());return y}finally{ut(d)}}function Sg(l,r){xg((u,d)=>{l(d)},void 0,r)}function Rn(l,r){return Eg(()=>Or(r),u=>u["System.Collections.IEnumerator.MoveNext"]()?an(l(u["System.Collections.Generic.IEnumerator`1.get_Current"]())):void 0,u=>{ut(u)})}function Dg(l,r){return Sp(()=>Or(r),(u,d)=>d["System.Collections.IEnumerator.MoveNext"]()?an(l(u,d["System.Collections.Generic.IEnumerator`1.get_Current"]())):void 0,u=>{ut(u)})}function wg(l,r){return Hl(()=>{const u=Or(r);try{for(let d=1;d<=l;d++)if(!u["System.Collections.IEnumerator.MoveNext"]())throw new Ne(vp+"\\nParameter name: source");return gg(()=>{},u)}catch(d){throw ut(u),d}})}function Hg(l,r){return Sp(()=>Or(r),(u,d)=>{if(u<l){if(d["System.Collections.IEnumerator.MoveNext"]())return an(d["System.Collections.Generic.IEnumerator`1.get_Current"]());throw new Ne(vp+"\\nParameter name: source")}else return},u=>{ut(u)})}function Xe(l,r){return I(()=>Ep(Rn(l,r)))}class vt extends Mr{constructor(r,u){super(),this.head=r,this.tail=u}toString(){return"["+pn("; ",this)+"]"}Equals(r){const u=this;return u===r?!0:r instanceof vt?((g,x)=>{e:for(;;){const C=g,T=x,E=C.tail,R=T.tail;if(E!=null)if(R!=null){const q=J(E),F=J(R);if(nn(C.head,T.head)){g=q,x=F;continue e}else return!1}else return!1;else return R==null}})(u,r):!1}GetHashCode(){return((d,y,g)=>{e:for(;;){const x=d,C=y,T=g,E=T.tail;if(E!=null){const R=J(E);if(x>18)return C|0;d=x+1,y=(C<<1)+Ra(T.head)+631*x,g=R;continue e}else return C|0}})(0,0,this)|0}toJSON(){return Array.from(this)}CompareTo(r){const u=this;return r instanceof vt?((g,x)=>{e:for(;;){const C=g,T=x,E=C.tail,R=T.tail;if(E!=null)if(R!=null){const q=J(E),F=J(R),Y=Bn(C.head,T.head)|0;if(Y===0){g=q,x=F;continue e}else return Y|0}else return 1;else return R!=null?-1:0}})(u,r)|0:1}GetEnumerator(){return Tg(this)}[Symbol.iterator](){return Lo(Mt(this))}"System.Collections.IEnumerable.GetEnumerator"(){return Mt(this)}}class _g{constructor(r){this.xs=r,this.it=this.xs,this.current=h()}"System.Collections.Generic.IEnumerator`1.get_Current"(){return this.current}"System.Collections.IEnumerator.get_Current"(){return this.current}"System.Collections.IEnumerator.MoveNext"(){const r=this,u=r.it.tail;if(u!=null){const d=J(u);return r.current=r.it.head,r.it=d,!0}else return!1}"System.Collections.IEnumerator.Reset"(){const r=this;r.it=r.xs,r.current=h()}Dispose(){}}function Tg(l){return new _g(l)}function it(){return new vt(h(),void 0)}function Rr(l,r){return new vt(l,r)}function Ar(l){return l.tail==null}function kg(l){return((u,d)=>{e:for(;;){const y=u,x=d.tail;if(x!=null){u=y+1,d=J(x);continue e}else return y|0}})(0,l)|0}function Pi(l){if(l.tail!=null)return l.head;throw new Ne(bp+"\\nParameter name: list")}function Ft(l){const r=l.tail;if(r!=null)return J(r);throw new Ne(bp+"\\nParameter name: list")}function Se(){return it()}function Jt(l,r){return Rr(l,r)}function f(l){return Rr(l,it())}function V(l){return Ar(l)}function le(l){return Pi(l)}function G(l){return Ft(l)}function Cg(l){const r=kg(l)|0,u=gp(new Array(r),0,r,null);return((y,g)=>{e:for(;;){const x=y,C=g;if(!Ar(C)){zr(u,x,Pi(C)),y=x+1,g=Ft(C);continue e}break}})(0,l),u}function qn(l,r,u){let d=r,y=u;for(;!Ar(y);)d=l(d,le(y)),y=Ft(y);return d}function ec(l){return qn((r,u)=>Rr(u,r),it(),l)}function zg(l,r,u){return og(l,Cg(r),u)}function tc(l,r){qn((u,d)=>{l(d)},void 0,r)}function Qe(l,r){let u=r;for(let d=l.length-1;d>=0;d--)u=Rr(On(d,l),u);return u}function s(l){return Qe(l,it())}function Ag(l){if(Un(l))return s(l);if(l instanceof vt)return l;{const r=it();let u=r;const d=Mt(l);try{for(;d["System.Collections.IEnumerator.MoveNext"]();){let x,C;const T=d["System.Collections.Generic.IEnumerator`1.get_Current"]();u=(x=u,C=new vt(T,void 0),x.tail=C,C)}}finally{ut(d)}const y=u,g=it();return y.tail=g,Ft(r)}}function nc(l,r){return qn((u,d)=>Rr(d,u),r,ec(l))}function Mg(l,r){const u=it();let d=u,y=r;for(;!Ar(y);){let C=l(Pi(y));for(;!Ar(C);){let T,E;d=(T=d,E=new vt(Pi(C),void 0),T.tail=E,E),C=Ft(C)}y=Ft(y)}const g=d,x=it();return g.tail=x,Ft(u)}function sc(l,r){const u=it(),d=qn((g,x)=>{const C=new vt(l(x),void 0);return g.tail=C,C},u,r),y=it();return d.tail=y,Ft(u)}function Og(l,r){const u=it(),d=qn((g,x)=>{if(l(x)){const C=new vt(x,void 0);return g.tail=C,C}else return g},u,r),y=it();return d.tail=y,Ft(u)}function Dp(l,r){const u=it(),d=it(),y=u,g=qn((T,E)=>{let R,q;const F=T[0],Y=T[1];return l(E)?[(R=new vt(E,void 0),F.tail=R,R),Y]:[F,(q=new vt(E,void 0),Y.tail=q,q)]},[y,d],r),x=it();g[0].tail=x;const C=it();return g[1].tail=C,[Ft(y),Ft(d)]}function wp(l,r){const u=it(),d=qn((g,x)=>{const C=l(x);if(C==null)return g;{const T=new vt(J(C),void 0);return g.tail=T,T}},u,r),y=it();return d.tail=y,Ft(u)}function kr(l,r){if(r.startsWith(l))return r}function Kf(l,r){if(r.endsWith(l))return r}function gl(l){const r=pn("&",sc(u=>pn("=",[encodeURIComponent(u[0]),encodeURIComponent(u[1])]),l));return r===""?"":"?"+r}function Rg(l){return r=>{let u;const d=kr("/",r);if(d!=null)return"#"+d;{const y=kr("#/",r);if(y!=null)return y;{const g=kr("#",r);return g!=null?(u=g,"#/"+hp(u,1,u.length-1)):"#/"+r}}}}function Hr(l,r){return Rg()(pn("/",sc(u=>u.indexOf("?")>=0||u.startsWith("#")||u.startsWith("/")?u:encodeURIComponent(u),l)))}function Mo(l){const r=ec(l);if(!V(r))return V(G(r))?[Se(),le(r)]:[ec(G(r)),le(r)]}function Oo(l,r,u){history.pushState(void 0,"",Hr(l));const d=document.createEvent("CustomEvent");d.initEvent("CUSTOM_NAVIGATION_EVENT",!0,!0),window.dispatchEvent(d)}function Hp(l,r){return Mg(u=>{if(Fy(u))return Se();{const d=$y(u,"#");if(d==="?")return Se();if(kr("?",d)!=null)return f(d);{const y=d.split("?");if(!Zf((g,x)=>g===x,y,h())&&y.length===1){const g=On(0,y);return f(decodeURIComponent(g))}else if(!Zf((g,x)=>g===x,y,h())&&y.length===2)if(On(1,y)===""){const g=On(0,y);return f(decodeURIComponent(g))}else{const g=On(0,y),x=On(1,y);return s([decodeURIComponent(g),"?"+x])}else return Se()}}},s(pp(kr("#",l)!=null?hp(l,1,l.length-1):r===1&&(Kf("#",l)!=null||Kf("#/",l)!=null)?"":l,["/"],void 0,0)))}function Ug(l,r,u){return r(Hp(l===2?window.location.pathname+window.location.search:window.location.hash,l))}const Bg=m.memo(l=>{const r=m.useCallback(d=>{const y=Qf(l.onUrlChanged,g=>{});Ug(Qf(l.hashMode,1),y)});m.useEffect(()=>(()=>{let y;return window.navigator.userAgent.indexOf("Trident")>=0||window.navigator.userAgent.indexOf("MSIE")>=0?window.addEventListener("hashchange",r):window.addEventListener("popstate",r),window.addEventListener("CUSTOM_NAVIGATION_EVENT",r),y={Dispose(){window.navigator.userAgent.indexOf("Trident")>=0||window.navigator.userAgent.indexOf("MSIE")>=0?window.removeEventListener("hashchange",r):window.removeEventListener("popstate",r),window.removeEventListener("CUSTOM_NAVIGATION_EVENT",r)}},()=>{ut(y)}})(),[]),m.useEffect(()=>{const d=document.createEvent("CustomEvent");d.initEvent("CUSTOM_NAVIGATION_EVENT",!0,!0),window.dispatchEvent(d)},[]);const u=l.application;return u??h()});function qg(l,r){console.error(an(l),r)}function Jf(l,r,u){tc(d=>{try{d(r)}catch(y){l(y)}},u)}function oc(){return Se()}function Lg(l){return f(l)}class A extends ic{constructor(r,u){super(),this.tag=r,this.fields=u}cases(){return["Install","Use","Themes","Colors","Accordion","Alert","Avatar","Badge","Breadcrumbs","Button","Card","Carousel","ChatBubble","Collapse","Countdown","Diff","Divider","Dock","Drawer","Dropdown","Fieldset","Filter","Footer","Hero","Join","Indicator","Kbd","Label","Link","List","Loading","Mask","Menu","Modal","Navbar","Pagination","Progress","RadialProgress","Skeleton","Stack","Stat","Status","Steps","Swap","Tab","Table","ThemeController","Timeline","Toast","Tooltip","Validator","FileInput","FormCheckbox","FormInput","FormRadio","FormRange","FormSelect","FormTextarea","FormToggle","MockupCode","MockupPhone","MockupWindow","Rating"]}}const Gg=new A(0,[]);function _p(l){let r;if(V(l))r=62;else switch(le(l)){case"use":{V(G(l))?r=0:r=63;break}case"themes":{V(G(l))?r=1:r=63;break}case"colors":{V(G(l))?r=2:r=63;break}case"alert":{V(G(l))?r=3:r=63;break}case"accordion":{V(G(l))?r=4:r=63;break}case"avatar":{V(G(l))?r=5:r=63;break}case"badge":{V(G(l))?r=6:r=63;break}case"breadcrumbs":{V(G(l))?r=7:r=63;break}case"button":{V(G(l))?r=8:r=63;break}case"card":{V(G(l))?r=9:r=63;break}case"carousel":{V(G(l))?r=10:r=63;break}case"chatbubble":{V(G(l))?r=11:r=63;break}case"collapse":{V(G(l))?r=12:r=63;break}case"countdown":{V(G(l))?r=13:r=63;break}case"diff":{V(G(l))?r=14:r=63;break}case"divider":{V(G(l))?r=15:r=63;break}case"dock":{V(G(l))?r=16:r=63;break}case"drawer":{V(G(l))?r=17:r=63;break}case"dropdown":{V(G(l))?r=18:r=63;break}case"fieldset":{V(G(l))?r=19:r=63;break}case"filter":{V(G(l))?r=20:r=63;break}case"footer":{V(G(l))?r=21:r=63;break}case"hero":{V(G(l))?r=22:r=63;break}case"indicator":{V(G(l))?r=23:r=63;break}case"join":{V(G(l))?r=24:r=63;break}case"kbd":{V(G(l))?r=25:r=63;break}case"label":{V(G(l))?r=26:r=63;break}case"link":{V(G(l))?r=27:r=63;break}case"list":{V(G(l))?r=28:r=63;break}case"loading":{V(G(l))?r=29:r=63;break}case"mask":{V(G(l))?r=30:r=63;break}case"menu":{V(G(l))?r=31:r=63;break}case"modal":{V(G(l))?r=32:r=63;break}case"navbar":{V(G(l))?r=33:r=63;break}case"pagination":{V(G(l))?r=34:r=63;break}case"progress":{V(G(l))?r=35:r=63;break}case"radialprogress":{V(G(l))?r=36:r=63;break}case"skeleton":{V(G(l))?r=37:r=63;break}case"stack":{V(G(l))?r=38:r=63;break}case"stat":{V(G(l))?r=39:r=63;break}case"status":{V(G(l))?r=40:r=63;break}case"steps":{V(G(l))?r=41:r=63;break}case"swap":{V(G(l))?r=42:r=63;break}case"tab":{V(G(l))?r=43:r=63;break}case"table":{V(G(l))?r=44:r=63;break}case"themecontroller":{V(G(l))?r=45:r=63;break}case"timeline":{V(G(l))?r=46:r=63;break}case"toast":{V(G(l))?r=47:r=63;break}case"tooltip":{V(G(l))?r=48:r=63;break}case"validator":{V(G(l))?r=49:r=63;break}case"fileinput":{V(G(l))?r=50:r=63;break}case"formcheckbox":{V(G(l))?r=51:r=63;break}case"forminput":{V(G(l))?r=52:r=63;break}case"formradio":{V(G(l))?r=53:r=63;break}case"formrange":{V(G(l))?r=54:r=63;break}case"formselect":{V(G(l))?r=55:r=63;break}case"formtextarea":{V(G(l))?r=56:r=63;break}case"formtoggle":{V(G(l))?r=57:r=63;break}case"mockupcode":{V(G(l))?r=58:r=63;break}case"mockupphone":{V(G(l))?r=59:r=63;break}case"mockupwindow":{V(G(l))?r=60:r=63;break}case"rating":{V(G(l))?r=61:r=63;break}default:r=63}switch(r){case 0:return new A(1,[]);case 1:return new A(2,[]);case 2:return new A(3,[]);case 3:return new A(5,[]);case 4:return new A(4,[]);case 5:return new A(6,[]);case 6:return new A(7,[]);case 7:return new A(8,[]);case 8:return new A(9,[]);case 9:return new A(10,[]);case 10:return new A(11,[]);case 11:return new A(12,[]);case 12:return new A(13,[]);case 13:return new A(14,[]);case 14:return new A(15,[]);case 15:return new A(16,[]);case 16:return new A(17,[]);case 17:return new A(18,[]);case 18:return new A(19,[]);case 19:return new A(20,[]);case 20:return new A(21,[]);case 21:return new A(22,[]);case 22:return new A(23,[]);case 23:return new A(25,[]);case 24:return new A(24,[]);case 25:return new A(26,[]);case 26:return new A(27,[]);case 27:return new A(28,[]);case 28:return new A(29,[]);case 29:return new A(30,[]);case 30:return new A(31,[]);case 31:return new A(32,[]);case 32:return new A(33,[]);case 33:return new A(34,[]);case 34:return new A(35,[]);case 35:return new A(36,[]);case 36:return new A(37,[]);case 37:return new A(38,[]);case 38:return new A(39,[]);case 39:return new A(40,[]);case 40:return new A(41,[]);case 41:return new A(42,[]);case 42:return new A(43,[]);case 43:return new A(44,[]);case 44:return new A(45,[]);case 45:return new A(46,[]);case 46:return new A(47,[]);case 47:return new A(48,[]);case 48:return new A(49,[]);case 49:return new A(50,[]);case 50:return new A(51,[]);case 51:return new A(52,[]);case 52:return new A(53,[]);case 53:return new A(54,[]);case 54:return new A(55,[]);case 55:return new A(56,[]);case 56:return new A(57,[]);case 57:return new A(58,[]);case 58:return new A(59,[]);case 59:return new A(60,[]);case 60:return new A(61,[]);case 61:return new A(62,[]);case 62:return new A(0,[]);default:return Gg}}function K(l){return[l,Se()]}function Ro(l){switch(l.tag){case 1:return K(f("use"));case 2:return K(f("themes"));case 3:return K(f("colors"));case 4:return K(f("accordion"));case 5:return K(f("alert"));case 6:return K(f("avatar"));case 7:return K(f("badge"));case 8:return K(f("breadcrumbs"));case 9:return K(f("button"));case 10:return K(f("card"));case 11:return K(f("carousel"));case 13:return K(f("collapse"));case 12:return K(f("chatbubble"));case 14:return K(f("countdown"));case 15:return K(f("diff"));case 16:return K(f("divider"));case 17:return K(f("dock"));case 18:return K(f("drawer"));case 19:return K(f("dropdown"));case 20:return K(f("fieldset"));case 21:return K(f("filter"));case 22:return K(f("footer"));case 23:return K(f("hero"));case 25:return K(f("indicator"));case 24:return K(f("join"));case 26:return K(f("kbd"));case 27:return K(f("label"));case 28:return K(f("link"));case 29:return K(f("list"));case 30:return K(f("loading"));case 31:return K(f("mask"));case 32:return K(f("menu"));case 33:return K(f("modal"));case 34:return K(f("navbar"));case 35:return K(f("pagination"));case 36:return K(f("progress"));case 37:return K(f("radialprogress"));case 38:return K(f("skeleton"));case 39:return K(f("stack"));case 40:return K(f("stat"));case 41:return K(f("status"));case 42:return K(f("steps"));case 43:return K(f("swap"));case 44:return K(f("tab"));case 45:return K(f("table"));case 46:return K(f("themecontroller"));case 47:return K(f("timeline"));case 48:return K(f("toast"));case 49:return K(f("tooltip"));case 50:return K(f("validator"));case 51:return K(f("fileinput"));case 52:return K(f("formcheckbox"));case 53:return K(f("forminput"));case 54:return K(f("formradio"));case 55:return K(f("formrange"));case 56:return K(f("formselect"));case 57:return K(f("formtextarea"));case 58:return K(f("formtoggle"));case 59:return K(f("mockupcode"));case 60:return K(f("mockupphone"));case 61:return K(f("mockupwindow"));case 62:return K(f("rating"));default:return K(Se())}}function Ff(l){l.preventDefault(),Oo(f(l.currentTarget.attributes.href.value))}function Vg(l){const r=Ro(l);return Lg(u=>{const d=r[1];Co(zo(y=>{Oo(nc(y[0],f(y[1]+gl(d))))},Mo(r[0])),()=>{Oo(f(gl(d)))})})}function jg(l,r){const u=Array.from(r);for(let d=0;d<u.length;d++)if(u[d][0]===l){const y=u[d];return u[d]=u[u.length-1],u.pop(),[u,y]}return[u,null]}function c(l,r){const u=jg("children",r);return u[1]==null?m.createElement(l,Cr(u[0])):m.createElement(l,Cr(u[0]),...u[1][1])}function Yg(l){return qn((r,u)=>{const d=r[0],y=r[1],g=u;return g[0]==="className"?[Jt(fn(g[1]),d),y]:[d,Jt(u,y)]},[Se(),Se()],ec(l))}function b(l,r){const u=Yg(r);return Jt(["className",pn(" ",Jt(l,u[0]))],u[1])}function Uo(l){return c("div",b("status",l))}function ze(l,r){const u=Dp(C=>C[0]!=="children",r);let d,y,g,x;return V(u[1])?(d=1,x=u[0]):le(u[1])[0]==="children"&&V(G(u[1]))?(d=0,y=le(u[1])[1],g=u[0]):(d=1,x=u[0]),d===0?m.createElement(l,Cr(g),...y):m.createElement(l,Cr(x))}function rt(l,r){return["className",pn(" ",wp(u=>{const d=u;if(d[0]==="className")return fn(d[1])},s([l,r])))]}class Tp{constructor(r){this.k=r}}function zt(l){return new Tp(l)}function se(l){return l.k}class He extends Tp{constructor(r,u,d,y){super(r),this.left=u,this.right=d,this.h=y|0}}function At(l,r,u,d){return new He(l,r,u,d)}function Be(l){return l.left}function Me(l){return l.right}function vl(l){return l.h|0}function kp(l,r){e:for(;;){const u=l,d=r;if(u!=null){const y=J(u);if(y instanceof He){const g=y;l=Be(g),r=kp(Me(g),d+1);continue e}else return d+1|0}else return d|0}}function Qg(l){return kp(l,0)|0}function en(l,r,u){let d,y,g;const x=l;if(x!=null){const R=J(x);g=R instanceof He?(d=R,vl(d)):1}else g=0;let C;const T=u;if(T!=null){const R=J(T);C=R instanceof He?(y=R,vl(y)):1}else C=0;const E=(g<C?C:g)|0;return E===0?zt(r):At(r,l,u,E+1)}function $f(l,r,u){let d,y,g,x,C,T,E,R,q;const F=l;if(F!=null){const re=J(F);q=re instanceof He?(d=re,vl(d)):1}else q=0;let Y;const Z=u;if(Z!=null){const re=J(Z);Y=re instanceof He?(y=re,vl(y)):1}else Y=0;if(Y>q+2){const re=J(u);if(re instanceof He){const fe=re;if(g=Be(fe),(g!=null?(x=J(g),x instanceof He?(C=x,vl(C)):1):0)>q+1){const Ze=J(Be(fe));if(Ze instanceof He){const Te=Ze;return en(en(l,r,Be(Te)),se(Te),en(Me(Te),se(fe),Me(fe)))}else throw new Ne("internal error: Set.rebalance")}else return en(en(l,r,Be(fe)),se(fe),Me(fe))}else throw new Ne("internal error: Set.rebalance")}else if(q>Y+2){const re=J(l);if(re instanceof He){const fe=re;if(T=Me(fe),(T!=null?(E=J(T),E instanceof He?(R=E,vl(R)):1):0)>Y+1){const Ze=J(Me(fe));if(Ze instanceof He){const Te=Ze;return en(en(Be(fe),se(fe),Be(Te)),se(Te),en(Me(Te),r,u))}else throw new Ne("internal error: Set.rebalance")}else return en(Be(fe),se(fe),en(Me(fe),r,u))}else throw new Ne("internal error: Set.rebalance")}else return en(l,r,u)}function Dl(l,r,u){if(u!=null){const d=J(u),y=l.Compare(r,se(d))|0;if(d instanceof He){const g=d;return y<0?$f(Dl(l,r,Be(g)),se(g),Me(g)):y===0?u:$f(Be(g),se(g),Dl(l,r,Me(g)))}else{const g=l.Compare(r,se(d))|0;return g<0?At(r,void 0,u,2):g===0?u:At(r,u,void 0,2)}}else return zt(r)}function Cp(l,r,u){e:for(;;){const d=l,y=r,g=u;if(g!=null){const x=J(g),C=d.Compare(y,se(x))|0;if(x instanceof He){const T=x;if(C<0){l=d,r=y,u=Be(T);continue e}else{if(C===0)return!0;l=d,r=y,u=Me(T);continue e}}else return C===0}else return!1}}function zp(l,r){e:for(;;){const u=l,d=r;if(d!=null){const y=J(d);if(y instanceof He){const g=y;zp(u,Be(g)),u(se(g)),l=u,r=Me(g);continue e}else u(se(y))}break}}class Xg extends Mr{constructor(r,u){super(),this.stack=r,this.started=u}}function Ap(l){e:for(;;){const r=l;if(V(r))return Se();{const u=le(r),d=G(r);if(u!=null){const y=J(u);if(y instanceof He){const g=y;l=Qe([Be(g),zt(se(g)),Me(g)],d);continue e}else return r}else{l=d;continue e}}}}function Wf(l){return new Xg(Ap(f(l)),!1)}function Zg(){throw new Ne("Enumeration not started")}function Kg(){throw new Ne("Enumeration already started")}function If(l){if(l.started){const r=l.stack;if(V(r))return Kg();if(le(r)!=null){const u=J(le(r));return se(u)}else throw new Ne("Please report error: Set iterator, unexpected stack for current")}else return Zg()}function Jg(l){if(l.started){const r=l.stack;if(V(r))return!1;if(le(r)!=null){if(J(le(r))instanceof He)throw new Ne("Please report error: Set iterator, unexpected stack for moveNext");return l.stack=Ap(G(r)),!V(l.stack)}else throw new Ne("Please report error: Set iterator, unexpected stack for moveNext")}else return l.started=!0,!V(l.stack)}function Pf(l){let r=Wf(l);return{"System.Collections.Generic.IEnumerator`1.get_Current"(){return If(r)},"System.Collections.IEnumerator.get_Current"(){return If(r)},"System.Collections.IEnumerator.MoveNext"(){return Jg(r)},"System.Collections.IEnumerator.Reset"(){r=Wf(l)},Dispose(){}}}function Fg(l,r,u){e:for(;;){const d=l,y=r,g=u;if(V(y))return V(g)?0:-1;if(V(g))return 1;if(le(g)!=null)if(le(y)!=null){const x=J(le(y)),C=J(le(g));if(x instanceof He){const T=x;if(Be(T)==null)if(C instanceof He){const E=C;if(Be(E)==null){const R=d.Compare(se(T),se(E))|0;if(R!==0)return R|0;l=d,r=Jt(Me(T),G(y)),u=Jt(Me(E),G(g));continue e}else{let R,q,F,Y,Z;switch(V(y)?V(g)?R=2:le(g)!=null?(R=1,Y=G(g),Z=J(le(g))):R=2:le(y)!=null?(R=0,q=G(y),F=J(le(y))):V(g)?R=2:le(g)!=null?(R=1,Y=G(g),Z=J(le(g))):R=2,R){case 0:if(F instanceof He){const re=F;l=d,r=Qe([Be(re),At(se(re),void 0,Me(re),0)],q),u=g;continue e}else{l=d,r=Qe([void 0,zt(se(F))],q),u=g;continue e}case 1:if(Z instanceof He){const re=Z;l=d,r=y,u=Qe([Be(re),At(se(re),void 0,Me(re),0)],Y);continue e}else{l=d,r=y,u=Qe([void 0,zt(se(Z))],Y);continue e}default:throw new Ne("unexpected state in SetTree.compareStacks")}}}else{const E=d.Compare(se(T),se(C))|0;if(E!==0)return E|0;l=d,r=Jt(Me(T),G(y)),u=Jt(void 0,G(g));continue e}else{let E,R,q,F,Y;switch(V(y)?V(g)?E=2:le(g)!=null?(E=1,F=G(g),Y=J(le(g))):E=2:le(y)!=null?(E=0,R=G(y),q=J(le(y))):V(g)?E=2:le(g)!=null?(E=1,F=G(g),Y=J(le(g))):E=2,E){case 0:if(q instanceof He){const Z=q;l=d,r=Qe([Be(Z),At(se(Z),void 0,Me(Z),0)],R),u=g;continue e}else{l=d,r=Qe([void 0,zt(se(q))],R),u=g;continue e}case 1:if(Y instanceof He){const Z=Y;l=d,r=y,u=Qe([Be(Z),At(se(Z),void 0,Me(Z),0)],F);continue e}else{l=d,r=y,u=Qe([void 0,zt(se(Y))],F);continue e}default:throw new Ne("unexpected state in SetTree.compareStacks")}}}else if(C instanceof He){const T=C;if(Be(T)==null){const E=d.Compare(se(x),se(T))|0;if(E!==0)return E|0;l=d,r=Jt(void 0,G(y)),u=Jt(Me(T),G(g));continue e}else{let E,R,q,F,Y;switch(V(y)?V(g)?E=2:le(g)!=null?(E=1,F=G(g),Y=J(le(g))):E=2:le(y)!=null?(E=0,R=G(y),q=J(le(y))):V(g)?E=2:le(g)!=null?(E=1,F=G(g),Y=J(le(g))):E=2,E){case 0:if(q instanceof He){const Z=q;l=d,r=Qe([Be(Z),At(se(Z),void 0,Me(Z),0)],R),u=g;continue e}else{l=d,r=Qe([void 0,zt(se(q))],R),u=g;continue e}case 1:if(Y instanceof He){const Z=Y;l=d,r=y,u=Qe([Be(Z),At(se(Z),void 0,Me(Z),0)],F);continue e}else{l=d,r=y,u=Qe([void 0,zt(se(Y))],F);continue e}default:throw new Ne("unexpected state in SetTree.compareStacks")}}}else{const T=d.Compare(se(x),se(C))|0;if(T!==0)return T|0;l=d,r=G(y),u=G(g);continue e}}else{J(le(g));let x,C,T,E,R;switch(V(y)?V(g)?x=2:le(g)!=null?(x=1,E=G(g),R=J(le(g))):x=2:le(y)!=null?(x=0,C=G(y),T=J(le(y))):V(g)?x=2:le(g)!=null?(x=1,E=G(g),R=J(le(g))):x=2,x){case 0:if(T instanceof He){const q=T;l=d,r=Qe([Be(q),At(se(q),void 0,Me(q),0)],C),u=g;continue e}else{l=d,r=Qe([void 0,zt(se(T))],C),u=g;continue e}case 1:if(R instanceof He){const q=R;l=d,r=y,u=Qe([Be(q),At(se(q),void 0,Me(q),0)],E);continue e}else{l=d,r=y,u=Qe([void 0,zt(se(R))],E);continue e}default:throw new Ne("unexpected state in SetTree.compareStacks")}}else if(le(y)!=null){J(le(y));let x,C,T,E,R;switch(V(y)?V(g)?x=2:le(g)!=null?(x=1,E=G(g),R=J(le(g))):x=2:le(y)!=null?(x=0,C=G(y),T=J(le(y))):V(g)?x=2:le(g)!=null?(x=1,E=G(g),R=J(le(g))):x=2,x){case 0:if(T instanceof He){const q=T;l=d,r=Qe([Be(q),At(se(q),void 0,Me(q),0)],C),u=g;continue e}else{l=d,r=Qe([void 0,zt(se(T))],C),u=g;continue e}case 1:if(R instanceof He){const q=R;l=d,r=y,u=Qe([Be(q),At(se(q),void 0,Me(q),0)],E);continue e}else{l=d,r=y,u=Qe([void 0,zt(se(R))],E);continue e}default:throw new Ne("unexpected state in SetTree.compareStacks")}}else{l=d,r=G(y),u=G(g);continue e}}}function ep(l,r,u){return r==null?u==null?0:-1:u==null?1:Fg(l,f(r),f(u))|0}function $g(l,r,u){let d=u;zp(y=>{zr(r,d,y),d=d+1|0},l)}function Wg(l,r,u){e:for(;;){const d=l,y=r,g=u;if(g["System.Collections.IEnumerator.MoveNext"]()){l=d,r=Dl(d,g["System.Collections.Generic.IEnumerator`1.get_Current"](),y),u=g;continue e}else return y}}function Ig(l,r){return sg((u,d)=>Dl(l,d,u),void 0,r)}function Pg(l,r){return qn((u,d)=>Dl(l,d,u),void 0,r)}function e0(l,r){if(Un(r))return Ig(l,r);if(r instanceof vt)return Pg(l,r);{const u=Mt(r);try{return Wg(l,void 0,u)}finally{ut(u)}}}class ac{constructor(r,u){this.comparer=r,this.tree=u}GetHashCode(){return a0(this)|0}Equals(r){let u;const d=this;return r instanceof ac&&(u=r,ep(El(d),tn(d),tn(u))===0)}toString(){return"set ["+pn("; ",this)+"]"}get[Symbol.toStringTag](){return"FSharpSet"}toJSON(){return Array.from(this)}CompareTo(r){let u;const d=this;return(r instanceof ac?(u=r,ep(El(d),tn(d),tn(u))):1)|0}"System.Collections.Generic.ICollection`1.Add2B595"(r){throw $i("ReadOnlyCollection")}"System.Collections.Generic.ICollection`1.Clear"(){throw $i("ReadOnlyCollection")}"System.Collections.Generic.ICollection`1.Remove2B595"(r){throw $i("ReadOnlyCollection")}"System.Collections.Generic.ICollection`1.Contains2B595"(r){const u=this;return Cp(El(u),r,tn(u))}"System.Collections.Generic.ICollection`1.CopyToZ3B4C077E"(r,u){$g(tn(this),r,u)}"System.Collections.Generic.ICollection`1.get_IsReadOnly"(){return!0}"System.Collections.Generic.ICollection`1.get_Count"(){return _o(this)|0}"System.Collections.Generic.IReadOnlyCollection`1.get_Count"(){return _o(this)|0}GetEnumerator(){return Pf(tn(this))}[Symbol.iterator](){return Lo(Mt(this))}"System.Collections.IEnumerable.GetEnumerator"(){return Pf(tn(this))}get size(){return _o(this)|0}add(r){throw new Ne("Set cannot be mutated")}clear(){throw new Ne("Set cannot be mutated")}delete(r){throw new Ne("Set cannot be mutated")}has(r){return Mp(this,r)}keys(){return Rn(u=>u,this)}values(){return Rn(u=>u,this)}entries(){return Rn(u=>[u,u],this)}forEach(r,u){const d=this;Sg(y=>{r(y,y,d)},d)}}function jo(l,r){return new ac(l,r)}function El(l){return l.comparer}function tn(l){return l.tree}function t0(l){return jo(l,void 0)}function n0(l,r){return jo(El(l),Dl(El(l),r,tn(l)))}function _o(l){return Qg(tn(l))|0}function Mp(l,r){return Cp(El(l),r,tn(l))}function a0(l){let r=0;const u=Mt(l);try{for(;u["System.Collections.IEnumerator.MoveNext"]();){const d=u["System.Collections.Generic.IEnumerator`1.get_Current"]();r=(r<<1)+Ra(d)+631|0}}finally{ut(u)}return Math.abs(r)|0}function Bo(l,r){return Mp(r,l)}function l0(l,r){return n0(r,l)}function r0(l){return t0(l)}function i0(l,r){return jo(r,e0(r,l))}function c0(){return Se()}function Yo(l){return pn("/",l)}function s0(l,r){const u=new Ne("Duplicate SubId");return l(["Duplicate SubId: "+Yo(r),u])}function Op(l,r,u){try{ut(u)}catch(d){l(["Error stopping subscription: "+Yo(r),d])}}function o0(l,r,u,d){try{return[u,d(r)]}catch(y){l(["Error starting subscription: "+Yo(u),y]);return}}function u0(l,r){tc(u=>{Op(l,u[0],u[1])},r)}function tp(l,r,u,d,y,g){return tc(x=>{s0(l,x)},u),tc(x=>{Op(l,x[0],x[1])},d),nc(y,wp(x=>o0(l,r,x[0],x[1]),g))}function d0(){return[Se(),r0({Compare:(l,r)=>Bn(l,r)|0}),Se()]}function m0(l,r,u,d,y){return Bo(l,d)?[Jt(l,u),d,y]:[u,l0(l,d),Jt([l,r],y)]}function f0(l){return zg((r,u)=>m0(r[0],r[1],u[0],u[1],u[2]),l,d0())}const p0=Se();function np(l,r){const u=i0(sc(x=>x[0],l),{Compare:(x,C)=>Bn(x,C)|0}),d=f0(r),y=d[1],g=d[0];if(u.Equals(y))return[g,Se(),l,Se()];{const x=Dp(C=>Bo(C[0],y),l);return[g,x[1],x[0],Og(C=>!Bo(C[0],u),d[2])]}}function h0(l,r,u,d){const y=Bn(l,u)|0;if(y===0)throw new Ne("The step of a range cannot be zero");const g=y>0;return x=>{const C=Bn(x,r)|0;return g&&C<=0||!g&&C>=0?[x,d(x,l)]:void 0}}function b0(l,r,u,d,y){const g=h0(r,u,d,y);return I(()=>Ng(g,l))}function y0(l,r,u){return b0(l,r,u,0,(d,y)=>d+y)}class xl extends ic{constructor(r,u){super(),this.tag=r,this.fields=u}cases(){return["Writable","ReadWritable"]}}class g0{constructor(r){this.state=new xl(0,[gp(new Array(Xf(r,10)),0,Xf(r,10),null),0])}}function v0(l){return new g0(l)}function ap(l){const r=l.state;if(r.tag===1){const u=r.fields[1]|0,d=r.fields[2]|0,y=r.fields[0],g=(d+1)%y.length|0;return g===u?l.state=new xl(0,[y,u]):l.state=new xl(1,[y,u,g]),an(On(d,y))}else return}function N0(l,r){const u=l.state;if(u.tag===1){const d=u.fields[1]|0,y=u.fields[2]|0,g=u.fields[0];zr(g,d,r);const x=(d+1)%g.length|0;x===y?l.state=new xl(1,[E0(l,y,g),g.length,0]):l.state=new xl(1,[g,x,y])}else{const d=u.fields[1]|0,y=u.fields[0];zr(y,d,r);const g=(d+1)%y.length|0;l.state=new xl(1,[y,g,d])}}function E0(l,r,u){return Array.from(I(()=>Je(wg(r,u),I(()=>Je(Hg(r,u),I(()=>Xe(d=>ce(h()),y0(0,1,u.length))))))))}class Qo extends Mr{constructor(r,u,d,y,g,x,C){super(),this.init=r,this.update=u,this.subscribe=d,this.view=y,this.setState=g,this.onError=x,this.termination=C}}function Rp(l,r,u){return new Qo(l,r,d=>c0(),u,Nl(d=>{const y=Oa(u)(d);return g=>{y(g)}}),d=>{qg(d[0],d[1])},[d=>!1,d=>{}])}function x0(l,r){return new Qo(r.init,r.update,r.subscribe,r.view,l,r.onError,r.termination)}function S0(l){return l.init}function D0(l,r,u,d,y,g,x){const C=Oa(l)(x.init),T=wo(r)(Oa(x.update)),E=wo(u)(Oa(x.view)),R=wo(d)(Oa(x.setState));return new Qo(C,Nl(T),Oa(y)(x.subscribe),Nl(E),Nl(R),x.onError,g(x.termination))}function w0(l,r,u){let d;const y=u.init(r),g=y[0],x=u.subscribe(g),C=u.termination,T=v0(10);let E=!1,R=g,q=p0,F=!1;const Y=fe=>{F||(N0(T,fe),E||(E=!0,re(),E=!1))},Z=Oa(l)(Y),re=()=>{let fe=ap(T);for(;!F&&fe!=null;){let Ze;const Te=J(fe);try{if(C[0](Te))u0(u.onError,q),C[1](R),F=!0;else{const dt=u.update(Te,R),Ot=dt[0],ve=u.subscribe(Ot);u.setState(Ot,Z),q=(Ze=np(q,ve),tp(u.onError,Z,Ze[0],Ze[1],Ze[2],Ze[3])),Jf(mt=>{u.onError([Tr(_r("Error handling the message: %A"))(Te),mt])},Z,dt[1]),R=Ot}}catch(dt){u.onError([Tr(_r("Unable to process the message: %A"))(Te),dt])}fe=ap(T)}};E=!0,u.setState(g,Z),q=(d=np(q,x),tp(u.onError,Z,d[0],d[1],d[2],d[3])),Jf(fe=>{u.onError([Tr(_r("Error intitializing:")),fe])},Z,y[1]),re(),E=!1}function H0(l,r){w0(Nl(u=>u),l,r)}class _0{constructor(r,u,d){this.arg=u,this.dependencies=d;const y=r(),g=[];this.finalDispatch=void 0;let x;const C=S0(y)(this.arg);let T=C[0],E=C[1];x=[[T,R=>{const q=this.finalDispatch;q==null?g.push(R):q(R)},!1,g],E],this.state=x[0],this.cmd=x[1],this.subscribe=(R=>{let q=!1;const F=To(this.state[0]);return H0(this.arg,x0((Y,Z)=>{const re=this.state;this.finalDispatch=Z,this.state=[Y,re[1],!0,g],Y!==re[0]&&R()},D0((Y,Z)=>{const re=this.cmd;return this.cmd=oc(),[this.state[0],re]},(Y,Z,re)=>Y(Z)(this.state[0]),Lf(Y=>Y),Lf(Y=>Y),Nl(Y=>Y),Y=>[Z=>Y[0](Z)?!0:F&&q,Z=>{const re=Z;To(re)?ut(re):Y[1](Z)}],y))),()=>{q=!0}})}}function lp(l,r,u){return new _0(l,r,u)}function rp(l){return l.state}function T0(l){return l.subscribe}function k0(l,r,u){return nn(l.arg,r)?!nn(l.dependencies,u):!0}function Up(l,r,u){const d=m.useState(()=>lp(l,r,u)),y=d[0];k0(y,r,u)&&d[1](lp(l,r,u));const g=m.useSyncExternalStore(T0(y),()=>rp(y),()=>rp(y)),x=g[2],C=g[3],T=g[1];return m.useEffect(()=>{if(x&&C.length>0){let E=Mt(C);try{for(;E["System.Collections.IEnumerator.MoveNext"]();){const R=E["System.Collections.Generic.IEnumerator`1.get_Current"]();setTimeout(()=>{T(R)})}}finally{ut(E)}Ty(C)}},[x,C]),[g[0],T]}function Wi(l){return c("div",s([["className","mockup-code"],["children",Dg((r,u)=>c("pre",_e(I(()=>Je(ce(["data-prefix",Ny(r+1)]),I(()=>Je(u.indexOf("// ")>=0?ce(["className","text-warning"]):xp(),I(()=>ce(["children",[m.createElement("code",h(),u)]])))))))),pp(l,[`
`],void 0,0))]]))}function _(l,r,u){return c("div",s([["className","mb-10"],["children",[c("div",s([["className","description"],["children",[l]]])),c("div",s([["className","flex flex-col md:flex-row w-full"],["children",[c("div",s([["className","grid flex-1 h-full"],["children",[Wi(r)]]])),c("div",b("divider",s([["children",f("👉")],["className","text-neutral"],["className","after:bg-opacity-30 before:bg-opacity-30 md:divider-horizontal"]]))),c("div",s([["className","grid flex-1 min-h-[10rem]"],["children",[u]]]))]]]))]]]))}function C0(){const l=[c("div",s([["className","description"],["children",["After installation just open proper namespace:"]]])),c("div",s([["className","max-w-xl"],["children",[Wi("open Feliz.DaisyUI")]]])),c("div",s([["className","description"],["children",["Now you can start using library. Everything important starts with ",c("code",s([["className","code"],["children",f("Daisy.*")]]))," module."]]])),c("div",s([["className","max-w-xl"],["children",[Wi(`Daisy.button.button [\r
    button.primary\r
    prop.text "This is button"\r
]`)]]])),c("div",s([["className","description"],["children",["For applying helpers to non-daisy elements, you need to use custom operator ",c("code",s([["className","code"],["children",f("++")]]))," from ",c("code",s([["className","code"],["children",f("Feliz.DaisyUI.Operators")]]))," namespace."]]])),c("div",s([["className","max-w-xl"],["children",[Wi(`open Feliz.DaisyUI.Operators\r
\r
Html.div [\r
    prop.className "my-class"\r
    ++ color.success // note usage of custom operator here\r
]`)]]]))];return m.createElement(m.Fragment,h(),...l)}const z0=(()=>{let l;const r=c("div",s([["data-theme","cupcake"],["children",[c("button",b("btn",s([["className","btn-primary"],["children",f("This is cupcake style button")]])))]]]));return _(c("div",f((l="Use <code class='code'>theme.YOUR_THEME</code> to apply one of existing themes to any element on a page.",["dangerouslySetInnerHTML",{__html:l}]))),`Html.div [\r
    theme.cupcake // <-- this is the theme\r
    prop.children [\r
        Daisy.button.button [\r
            button.primary\r
            prop.text "This is cupcake style button"\r
        ]\r
    ]\r
]`,r)})(),A0=(()=>{let l,r;const u=f(c("div",b("card",s([["data-theme","cyberpunk"],["className","card-border"],["children",[c("figure",s([["className","pt-10"],["children",[c("img",f(["src","https://picsum.photos/id/1005/400/250"]))]]])),c("div",s([["className","card-body"],["children",[c("h2",s([["className","card-title"],["children",f("Some title")]])),m.createElement("p",h(),"What a cool library, isn't it?"),c("div",s([["className","card-actions"],["children",[c("button",b("btn",s([["className","btn-primary"],["children",f("Click or something")]])))]]]))]]]))]]]))));return r=m.createElement("div",h(),...u),_(c("div",f((l="You can use it on any element or any part of page. Yes, even for whole <code class='code'>&lt;body&gt;</code>!",["dangerouslySetInnerHTML",{__html:l}]))),`Daisy.card [\r
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
]`,r)})();function M0(){return m.createElement(m.Fragment,h(),z0,A0)}const O0=(()=>{let l;const r=c("div",s([["className","flex flex-col space-y-4"],["children",[c("div",s([["className","text-primary"],["children",f("I am primary!")]])),c("div",s([["className","text-success"],["children",f("I am success!")]])),c("div",s([["className","bg-accent"],["children",f("Background accent")]])),c("div",s([rt(["className","bg-error"],["className","text-success"]),["children",f("Success with error background 🤦")]]))]]]));return _((l=s([m.createElement("span",h(),"To select one of predefined "),c("a",s([["className","link"],["children",f("colors")],["href","https://daisyui.com/core/colors"]])),c("span",f(["dangerouslySetInnerHTML",{__html:", use the <code class='code'>color.YOUR_COLOR</code>"}]))]),m.createElement("div",h(),...l)),`Html.div [\r
    Html.div [ color.textPrimary; prop.text "I am primary!" ]\r
    Html.div [ color.textSuccess; prop.text "I am success!" ]\r
    Html.div [ color.bgAccent; prop.text "Background accent" ]\r
    Html.div [\r
        // Note the usage of custom operator ++\r
        (color.bgError ++ color.textSuccess)\r
        prop.text "Success with error background 🤦"\r
    ]\r
]`,r)})();function R0(){return m.createElement(m.Fragment,h(),O0)}const U0=(()=>{let l;return _("Accordion is cool and easy to use",`Html.div [\r
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
]`,(l=s([c("div",b("collapse",s([["className","bg-base-200"],["className","mb-2"],["children",[c("input",s([["type","radio"],["checked",!0],["name","my-accordion"]])),c("div",b("collapse-title",s([["className","text-xl"],["children",f("Click to open this one and close others")]]))),c("div",s([["className","collapse-content"],["children",[m.createElement("p",h(),"Hello")]]]))]]]))),c("div",b("collapse",s([["className","bg-base-200"],["children",[c("input",s([["type","radio"],["checked",!0],["name","my-accordion"]])),c("div",b("collapse-title",s([["className","text-xl"],["children",f("Click to open this one and close others")]]))),c("div",s([["className","collapse-content"],["children",[m.createElement("p",h(),"Hello")]]]))]]])))]),m.createElement("div",h(),...l)))})();function B0(){let l,r;const u=[c("div",s([["className","flex flex-col gap-2"],["children",[(l="Accordion uses the same style as the collapse component but it works with radio inputs. You can control which item to be open by checking/unchecking the hidden radio input.",c("div",s([["className","alert"],["children",f(l)]]))),(r="All radio inputs with the same name work together and only one of them can be open at a time. If you have more than one set of accordion items on a page, use different names for the radio inputs on each set.",c("div",s([["className","alert"],["children",f(r)]])))]]])),U0];return m.createElement(m.Fragment,h(),...u)}const q0=_("Use of Alert is rather straightforward.",`Daisy.alert [\r
    alert.info\r
    prop.text "This is info"\r
]`,(()=>{const l=c("div",b("alert",s([["className","alert-info"],["children",f("This is info")]])));return m.createElement("div",h(),l)})()),L0=(()=>{let l;const r=c("div",b("alert",s([["className","alert-success"],["children",f("Wow it works so great!")]])));return l=m.createElement("div",h(),r),_(h(),`Daisy.alert [\r
    alert.success\r
    prop.text "Wow it works so great!"\r
]`,l)})(),G0=(()=>{let l;const r=c("div",b("alert",s([["className","alert-error"],["children",f("OMG, something went wrong!")]])));return l=m.createElement("div",h(),r),_(h(),`Daisy.alert [\r
    alert.error\r
    prop.text "OMG, something went wrong!"\r
]`,l)})(),V0=(()=>{let l;const r=c("div",b("alert",s([["className","alert-warning"],["className","justify-start"],["children",[c("i",f(["className","fas fa-exclamation-triangle mr-2"])),c("label",f(["children",f("Warning with cool icon")]))]]])));return l=m.createElement("div",h(),r),_(h(),`Daisy.alert [\r
    alert.warning\r
    prop.className "justify-start"\r
    prop.children [\r
        Html.i [ prop.className "fas fa-exclamation-triangle mr-2" ]\r
        Html.label [ prop.text "Warning with cool icon" ]\r
    ]\r
]`,l)})();function j0(){return m.createElement(m.Fragment,h(),q0,L0,G0,V0)}const Y0=(()=>{let l;return _("Avatars are also quite easy to use!",`Daisy.avatar [\r
    Html.div [\r
        prop.className "mb-8 w-24 h-24"\r
        prop.children [\r
            Html.img [\r
                prop.src "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"\r
            ]\r
        ]\r
    ]\r
]`,(l=c("div",s([["className","avatar"],["children",[c("div",s([["className","mb-8 w-24 h-24"],["children",[c("img",f(["src","https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"]))]]]))]]])),m.createElement("div",h(),l)))})(),Q0=(()=>{let l;return _("Group all the avatars!",`Daisy.avatarGroup [\r
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
]`,(l=c("div",b("avatar-group",s([["className","-space-x-6"],["children",[c("div",s([["className","avatar"],["children",[c("div",s([["className","w-12"],["children",[c("img",f(["src","https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"]))]]]))]]])),c("div",s([["className","avatar"],["children",[c("div",s([["className","w-12"],["children",[c("img",f(["src","https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"]))]]]))]]])),c("div",s([["className","avatar"],["children",[c("div",s([["className","w-12"],["children",[c("img",f(["src","https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"]))]]]))]]]))]]]))),m.createElement("div",h(),l)))})();function X0(){return m.createElement(m.Fragment,h(),Y0,Q0)}const Z0=_("Just a badge.",`Daisy.badge [\r
    badge.lg\r
    badge.error\r
    prop.text "Big error badge"\r
]`,(()=>{const l=c("div",b("badge",s([["className","badge-lg"],["className","badge-error"],["children",f("Big error badge")]])));return m.createElement("div",h(),l)})()),K0=_("Just a badge. Yup. Again.",`Daisy.badge [\r
    badge.sm\r
    badge.success\r
    prop.text "Success badge"\r
]`,(()=>{const l=c("div",b("badge",s([["className","badge-sm"],["className","badge-success"],["children",f("Success badge")]])));return m.createElement("div",h(),l)})()),J0=(()=>{let l;return _("And now inside a button!",`Daisy.button.button [\r
    Html.text "This is button"\r
    Daisy.badge [\r
        badge.sm\r
        badge.success\r
        prop.text "NEW"\r
    ]\r
]`,(l=c("button",s([["className","btn"],["children",["This is button",c("div",b("badge",s([["className","badge-sm"],["className","badge-success"],["children",f("NEW")]])))]]])),m.createElement("div",h(),l)))})();function F0(){return m.createElement(m.Fragment,h(),Z0,K0,J0)}const $0=(()=>{let l,r;return _("Turn ul/li into beautiful breadcrumbs.",`Daisy.breadcrumbs [\r
    Html.ul [\r
        Html.li "New project"\r
        Html.li ".NET"\r
        Html.li "F# as always"\r
    ]\r
]`,(l=c("div",s([["className","breadcrumbs"],["children",[(r=s([m.createElement("li",h(),"New project"),m.createElement("li",h(),".NET"),m.createElement("li",h(),"F# as always")]),m.createElement("ul",h(),...r))]]])),m.createElement("div",h(),l)))})();function W0(){return m.createElement(m.Fragment,h(),$0)}const I0=(()=>{let l;return _("Nicely styled buttons at your service.",`Daisy.button.button [\r
    button.outline\r
    button.primary\r
    button.lg\r
    prop.text "Do NOT click on me!"\r
]`,(l=c("button",b("btn",s([["className","btn-outline"],["className","btn-primary"],["className","btn-lg"],["onClick",u=>{window.alert(an("Oh, we have a rebel here!"))}],["children",f("Do NOT click on me!")]]))),m.createElement("div",h(),l)))})(),P0=(()=>{let l;return _("Colors are nice.",`[ "neutral", button.neutral\r
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
)`,(l=sc(u=>c("button",b("btn",s([u[1],["children",f(u[0])]]))),s([["neutral",["className","btn-neutral"]],["primary",["className","btn-primary"]],["secondary",["className","btn-secondary"]],["accent",["className","btn-accent"]],["ghost",["className","btn-ghost"]],["link",["className","btn-link"]]])),c("div",s([["className","flex gap-2"],["children",_e(I(()=>Je(ce(c("button",b("btn",f(["children",f("Default")])))),I(()=>l))))]]))))})(),ev=(()=>{let l,r;const u=c("div",s([["className","p-20 bg-cover card bg-base-200"],["style",{backgroundImage:"url('https://picsum.photos/id/314/400/300')"}],["children",[c("button",b("btn",s([["className","glass"],["className","btn-lg"],["onClick",y=>{window.alert(an("One keep clickin' right?"))}],["children",f("Glassy is very classy")]])))]]]));return r=m.createElement("div",h(),u),_((l=s(["See ",c("a",s([["className","link"],["href","https://daisyui.com/components/button"],["children",f("original docs")]]))," for more combinations."]),m.createElement("div",h(),...l)),`Html.div [\r
    prop.className "p-20 bg-cover card bg-base-200"\r
    prop.style [ style.backgroundImage "url('https://picsum.photos/id/314/400/300')" ]\r
    prop.children [\r
        Daisy.button.button [\r
            button.glass\r
            button.lg\r
            prop.text "Glassy is very classy"\r
        ]\r
    ]\r
]`,r)})();function tv(){return m.createElement(m.Fragment,h(),I0,P0,ev)}const nv=(()=>{let l,r,u;return _("Card with full image",`Daisy.card [\r
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
]`,(l=c("div",b("card",s([["className","card-border"],["className","image-full"],["children",[(r=f(c("img",f(["src","https://picsum.photos/id/1005/400/250"]))),m.createElement("figure",h(),...r)),c("div",s([["className","card-body"],["children",[c("h2",s([["className","card-title"],["children",f("Image overlay")]])),(u="Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.",m.createElement("p",h(),u)),c("div",s([["className","card-actions"],["children",[c("button",b("btn",s([["children",f("Get started")],["className","btn-primary"]])))]]]))]]]))]]]))),m.createElement("div",h(),l)))})(),av=(()=>{let l,r,u;return _("Card with top image",`Daisy.card [\r
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
]`,(l=c("div",b("card",s([["className","card-border"],["children",[(r=f(c("img",f(["src","https://picsum.photos/id/1005/400/250"]))),m.createElement("figure",h(),...r)),c("div",s([["className","card-body"],["children",[c("h2",b("card-title",f(["children",[m.createElement("span",h(),"Top image "),c("div",b("badge",s([["className","badge-lg"],["className","badge-secondary"],["children",f("NEW")]])))]]))),(u="Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.",m.createElement("p",h(),u)),c("div",s([["className","card-actions"],["children",[c("button",b("btn",s([["children",f("More info")],["className","btn-secondary"]])))]]]))]]]))]]]))),m.createElement("div",h(),l)))})(),lv=(()=>{let l,r;return _("Card with shadow no image",`Daisy.card [\r
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
]`,(l=c("div",b("card",s([["className","shadow-lg"],["children",[c("div",s([["className","card-body"],["children",[c("h2",s([["className","card-title"],["children",f("Card with shadow no image")]])),(r="Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.",m.createElement("p",h(),r)),c("div",s([["className","card-actions"],["children",[c("button",b("btn",s([["children",f("Get Started")],["className","btn-primary"]]))),c("button",b("btn",s([["children",f("More info")],["className","btn-ghost"]])))]]]))]]]))]]]))),m.createElement("div",h(),l)))})(),rv=(()=>{let l,r;return _("Card with border no image",`Daisy.card [\r
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
]`,(l=c("div",b("card",s([["className","card-border"],["children",[c("div",s([["className","card-body"],["children",[c("h2",s([["className","card-title"],["children",f("Card with border no image")]])),(r="Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.",m.createElement("p",h(),r)),c("div",s([["className","card-actions"],["children",[c("button",b("btn",s([["children",f("Get Started")],["className","btn-primary"]]))),c("button",b("btn",s([["children",f("More info")],["className","btn-ghost"]])))]]]))]]]))]]]))),m.createElement("div",h(),l)))})();function iv(){return m.createElement(m.Fragment,h(),rv,lv,av,nv)}const cv=(()=>{let l;return _("Horizontal",`Daisy.carousel [\r
    Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/500/256/144"]]\r
    Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/501/256/144"]]\r
    Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/502/256/144"]]\r
    Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/503/256/144"]]\r
    Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/505/256/144"]]\r
    Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/506/256/144"]]\r
]`,(l=c("div",s([["className","carousel"],["children",[c("div",s([["className","carousel-item"],["children",[c("img",f(["src","https://picsum.photos/id/500/256/144"]))]]])),c("div",s([["className","carousel-item"],["children",[c("img",f(["src","https://picsum.photos/id/501/256/144"]))]]])),c("div",s([["className","carousel-item"],["children",[c("img",f(["src","https://picsum.photos/id/502/256/144"]))]]])),c("div",s([["className","carousel-item"],["children",[c("img",f(["src","https://picsum.photos/id/503/256/144"]))]]])),c("div",s([["className","carousel-item"],["children",[c("img",f(["src","https://picsum.photos/id/505/256/144"]))]]])),c("div",s([["className","carousel-item"],["children",[c("img",f(["src","https://picsum.photos/id/506/256/144"]))]]]))]]])),m.createElement("div",h(),l)))})(),sv=(()=>{let l;return _("Vertical",`Daisy.carousel [\r
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
]`,(l=c("div",b("carousel",s([["className",pn(" ",["w-64","h-36"])],["className","carousel-vertical"],["children",[c("div",s([["className","carousel-item"],["children",[c("img",f(["src","https://picsum.photos/id/500/256/144"]))]]])),c("div",s([["className","carousel-item"],["children",[c("img",f(["src","https://picsum.photos/id/501/256/144"]))]]])),c("div",s([["className","carousel-item"],["children",[c("img",f(["src","https://picsum.photos/id/502/256/144"]))]]])),c("div",s([["className","carousel-item"],["children",[c("img",f(["src","https://picsum.photos/id/503/256/144"]))]]])),c("div",s([["className","carousel-item"],["children",[c("img",f(["src","https://picsum.photos/id/505/256/144"]))]]])),c("div",s([["className","carousel-item"],["children",[c("img",f(["src","https://picsum.photos/id/506/256/144"]))]]]))]]]))),m.createElement("div",h(),l)))})();function ov(){return m.createElement(m.Fragment,h(),cv,sv)}const uv=(()=>{let l;return _("With start and end",`Html.div [\r
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
]`,(l=s([c("div",b("chat",s([["className","chat-start"],["children",[c("div",s([["className","chat-bubble"],["children",f("Is there anything better than Fable & F#?")]]))]]]))),c("div",b("chat",s([["className","chat-end"],["children",[c("div",s([["className","chat-bubble"],["children",f("No.")]]))]]])))]),m.createElement("div",h(),...l)))})(),dv=(()=>{let l;return _("With images",`Html.div [\r
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
]`,(l=s([c("div",b("chat",s([["className","chat-start"],["children",[c("div",b("chat-image",s([["className","avatar"],["children",[c("div",s([["className","w-10 rounded-full"],["children",[c("img",f(["src","https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"]))]]]))]]]))),c("div",s([["className","chat-bubble"],["children",f("Is anyone here?")]]))]]]))),c("div",b("chat",s([["className","chat-start"],["children",[c("div",b("chat-image",s([["className","avatar"],["children",[c("div",s([["className","w-10 rounded-full"],["children",[c("img",f(["src","https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"]))]]]))]]]))),c("div",s([["className","chat-bubble"],["children",f("Helloooooo!")]]))]]])))]),m.createElement("div",h(),...l)))})(),mv=(()=>{let l;return _("With images",`Html.div [\r
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
]`,(l=s([c("div",b("chat",s([["className","chat-start"],["children",[c("div",b("chat-image",s([["className","avatar"],["children",[c("div",s([["className","w-10 rounded-full"],["children",[c("img",f(["src","https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"]))]]]))]]]))),c("div",s([["className","chat-header"],["children",["Vincent Noir ",c("time",s([["className","text-xs opacity-50"],["children",f("2 hours ago")]]))]]])),c("div",s([["className","chat-bubble"],["children",f("Wind. My only friend!")]])),c("div",b("chat-footer",s([["className","opacity-50"],["children",f("Delivered")]])))]]]))),c("div",b("chat",s([["className","chat-end"],["children",[c("div",b("chat-image",s([["className","avatar"],["children",[c("div",s([["className","w-10 rounded-full"],["children",[c("img",f(["src","https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"]))]]]))]]]))),c("div",s([["className","chat-header"],["children",["Wind ",c("time",s([["className","text-xs opacity-50"],["children",f("2 hours ago")]]))]]])),c("div",s([["className","chat-bubble"],["children",f("I HATE YOU!")]])),c("div",b("chat-footer",s([["className","opacity-50"],["children",f("Delivered")]])))]]])))]),m.createElement("div",h(),...l)))})(),fv=(()=>{let l;return _("With colors",`let colors = [\r
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
]`,(l=_e(I(()=>Xe(u=>ce(c("div",b("chat",s([["className","chat-start"],["children",[c("div",b("chat-bubble",s([u[1],["children",f(Go("This is ",u[0],..." color"))]])))]]])))),[["primary",["className","chat-bubble-primary"]],["secondary",["className","chat-bubble-secondary"]],["accent",["className","chat-bubble-accent"]],["info",["className","chat-bubble-info"]],["success",["className","chat-bubble-success"]],["warning",["className","chat-bubble-warning"]],["error",["className","chat-bubble-error"]]]))),m.createElement("div",h(),...l)))})();function pv(){return m.createElement(m.Fragment,h(),uv,dv,mv,fv)}const hv=(()=>{let l,r;return _("Basic",`Daisy.collapse [\r
    prop.tabIndex 0\r
    prop.children [\r
        Daisy.collapseTitle "I open with focus"\r
        Daisy.collapseContent [Html.p "Collapse content reveals with focus. If you add a checkbox, you can control it using checkbox instead of focus. Or you can force-open/force-close using collapse-open and collapse-close classes. Adding a tabIndex will allow focus."]\r
    ]\r
]`,(l=c("div",b("collapse",s([["tabIndex",0],["children",[c("div",s([["className","collapse-title"],["children",f("I open with focus")]])),c("div",s([["className","collapse-content"],["children",[(r="Collapse content reveals with focus. If you add a checkbox, you can control it using checkbox instead of focus. Or you can force-open/force-close using collapse-open and collapse-close classes. Adding a tabIndex will allow focus.",m.createElement("p",h(),r))]]]))]]]))),m.createElement("div",h(),l)))})(),bv=(()=>{let l,r;return _("Arrow",`Daisy.collapse [\r
    prop.tabIndex 0\r
    collapse.arrow\r
    prop.className "border"\r
    prop.children [\r
        Daisy.collapseTitle "I open with focus"\r
        Daisy.collapseContent [Html.p "Collapse content reveals with focus. If you add a checkbox, you can control it using checkbox instead of focus. Or you can force-open/force-close using collapse-open and collapse-close classes. Adding a tabIndex will allow focus."]\r
    ]\r
]`,(l=c("div",b("collapse",s([["tabIndex",0],["className","collapse-arrow"],["className","border"],["children",[c("div",s([["className","collapse-title"],["children",f("I open with focus")]])),c("div",s([["className","collapse-content"],["children",[(r="Collapse content reveals with focus. If you add a checkbox, you can control it using checkbox instead of focus. Or you can force-open/force-close using collapse-open and collapse-close classes. Adding a tabIndex will allow focus.",m.createElement("p",h(),r))]]]))]]]))),m.createElement("div",h(),l)))})(),yv=(()=>{let l,r;return _("With checkbox",`Daisy.collapse [\r
    collapse.arrow\r
    prop.className "border"\r
    prop.children [\r
        Html.input [prop.type' "checkbox"]\r
        Daisy.collapseTitle "I open with a checkbox"\r
        Daisy.collapseContent [Html.p "Collapse content reveals with focus. If you add a checkbox, you can control it using checkbox instead of focus. Or you can force-open/force-close using collapse-open and collapse-close classes."]\r
    ]\r
]`,(l=c("div",b("collapse",s([["className","collapse-plus"],["className","border"],["children",[c("input",f(["type","checkbox"])),c("div",s([["className","collapse-title"],["children",f("I open with a checkbox")]])),c("div",s([["className","collapse-content"],["children",[(r="Collapse content reveals with focus. If you add a checkbox, you can control it using checkbox instead of focus. Or you can force-open/force-close using collapse-open and collapse-close classes.",m.createElement("p",h(),r))]]]))]]]))),m.createElement("div",h(),l)))})();function gv(){return m.createElement(m.Fragment,h(),hv,bv,yv)}let ip=class extends ic{constructor(r){super(),this.tag=0,this.fields=[r]}cases(){return["CountdownChange"]}},Bp=class extends Mr{constructor(r){super(),this.Countdown=r|0}};function vv(){return[new Bp(60),oc()]}function Nv(l,r){return[new Bp(l.fields[0]),oc()]}function Ev(l,r){let u;return _("Basic",`Html.div [\r
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
]`,(u=s([c("span",s([["className","countdown"],["children",[c("span",f(["style",{"--value":l.Countdown}]))]]])),c("button",b("btn",s([["className","btn-xs"],["className","btn-primary"],["onClick",y=>{r(new ip(l.Countdown+1))}],["children",f("⬆️ Up")]]))),c("button",b("btn",s([["className","btn-xs"],["className","btn-secondary"],["onClick",y=>{r(new ip(l.Countdown-1))}],["children",f("⬇️ Down")]])))]),m.createElement("div",h(),...u)))}function xv(){const l=Up(()=>Rp(vv,Nv,(u,d)=>{}),void 0,[]),r=[Ev(l[0],l[1])];return m.createElement(m.Fragment,h(),...r)}const Sv=_("Diff component shows a side-by-side comparison of two items.",`Daisy.diff [\r
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
]`,c("div",b("diff",s([["className","aspect-[16/9]"],["children",[c("div",s([["className","diff-item-1"],["children",[c("img",f(["src","https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp"]))]]])),c("div",s([["className","diff-item-2"],["children",[c("img",f(["src","https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp"]))]]])),c("div",b("diff-resizer",Se()))]]])))),Dv=_("Diff text",`Daisy.diff [\r
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
]`,c("div",b("diff",s([["className","aspect-[16/9]"],["children",[c("div",s([["className","diff-item-1"],["children",[c("div",s([["className","bg-primary text-primary-content text-9xl font-black grid place-content-center"],["children",f("F# rulez!")]]))]]])),c("div",s([["className","diff-item-2"],["children",[c("div",s([["className","bg-base-200 text-9xl font-black grid place-content-center"],["children",f("F# rulez!")]]))]]])),c("div",b("diff-resizer",Se()))]]]))));function wv(){return m.createElement(m.Fragment,h(),Sv,Dv)}const Hv=_("Vertical (default)",`Html.div [\r
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
]`,c("div",s([["className","flex flex-col w-full"],["children",[c("div",s([["className","grid h-20 card bg-base-300 rounded-box place-items-center"],["children",f("content")]])),c("div",s([["className","divider"],["children",f("OR")]])),c("div",s([["className","grid h-20 card bg-base-300 rounded-box place-items-center"],["children",f("content")]]))]]]))),_v=(()=>{let l;return _("Vertical",`Html.div [\r
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
]`,(l=c("div",s([["className","flex flex-row w-full"],["children",[c("div",s([["className","grid flex-grow h-32 card bg-base-300 rounded-box place-items-center"],["children",f("content")]])),c("div",b("divider",s([["className","divider-horizontal"],["children",f("OR")]]))),c("div",s([["className","grid flex-grow h-32 card bg-base-300 rounded-box place-items-center"],["children",f("content")]]))]]])),m.createElement("div",h(),l)))})();function Tv(){return m.createElement(m.Fragment,h(),Hv,_v)}const kv=_("Docked navigation bar",`Daisy.dock [\r
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
]`,c("div",b("dock",s([["className","dock-xl"],["children",[c("button",f(["children",[ze("svg",s([["className","size-[1.2em]"],["viewBox","0 0 24 24"],["children",f(ze("g",s([["fill","currentColor"],["strokeLinejoin","miter"],["strokeLinecap","butt"],["children",s([ze("polyline",s([["points","3 14 9 14 9 17 15 17 15 14 21 14"],["strokeMiterlimit",10],["strokeWidth",2]])),ze("rect",s([["x",3],["y",3],["width",18],["height",18],["rx",2],["ry",2],["fill","none"],["stroke","currentColor"],["strokeLinecap","square"],["strokeMiterlimit",10],["strokeWidth",2]]))])]])))]])),c("span",s([["className","dock-label"],["children",f("Inbox")]]))]])),c("button",s([["className","dock-active"],["children",[ze("svg",s([["className","size-[1.2em]"],["viewBox","0 0 24 24"],["children",f(ze("g",s([["fill","currentColor"],["strokeLinejoin","miter"],["strokeLinecap","butt"],["children",s([ze("polyline",s([["points","3 14 9 14 9 17 15 17 15 14 21 14"],["strokeMiterlimit",10],["strokeWidth",2]])),ze("rect",s([["x",3],["y",3],["width",18],["height",18],["rx",2],["ry",2],["fill","none"],["stroke","currentColor"],["strokeLinecap","square"],["strokeMiterlimit",10],["strokeWidth",2]]))])]])))]])),c("span",s([["className","dock-label"],["children",f("Inbox active")]]))]]]))]]]))));function Cv(){return m.createElement(m.Fragment,h(),kv)}const zv=_("Simple",`Daisy.drawer [
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
]`,c("div",b("drawer",s([["className","rounded-lg shadow bg-base-200 h-52"],["children",[c("input",b("drawer-toggle",s([["type","checkbox"],["id","my-drawer"]]))),c("div",b("drawer-content",s([["className","flex flex-col items-center justify-center"],["children",[c("label",b("btn drawer-button",s([["className","btn-primary"],["htmlFor","my-drawer"],["children",f("Open Menu")]])))]]]))),c("div",b("drawer-side",s([["className","absolute h-full"],["children",[c("label",b("drawer-overlay",f(["htmlFor","my-drawer"]))),c("ul",b("menu",s([["className","p-4 h-full overflow-y-auto w-80 bg-base-100 text-base-content"],["children",[m.createElement("li",h(),"Menu item 1"),m.createElement("li",h(),"Menu item 2")]]])))]]])))]]]))));function Av(){return m.createElement(m.Fragment,h(),zv)}const Mv=(()=>{let l,r,u;return _("Simple",`Daisy.dropdown [\r
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
`,c("div",s([["className","dropdown"],["children",[c("button",b("btn",s([["className","btn-primary"],["children",f("Dropdown")]]))),c("ul",b("dropdown-content",s([["className","p-2 shadow menu bg-base-100 rounded-box w-52"],["tabIndex",0],["children",[(l=f(c("a",f(["children",f("Item 1")]))),m.createElement("li",h(),...l)),(r=f(c("a",f(["children",f("Item 2")]))),m.createElement("li",h(),...r)),(u=f(c("a",f(["children",f("Item 3")]))),m.createElement("li",h(),...u))]]])))]]])))})(),Ov=(()=>{let l,r,u,d;return _("Hover",`Daisy.dropdown [\r
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
`,(l=c("div",b("dropdown",s([["className","dropdown-hover"],["children",[c("button",b("btn",s([["className","btn-primary"],["children",f("Hover")]]))),c("ul",b("dropdown-content",s([["className","p-2 shadow menu bg-base-100 rounded-box w-52"],["tabIndex",0],["children",[(r=f(c("a",f(["children",f("Item 1")]))),m.createElement("li",h(),...r)),(u=f(c("a",f(["children",f("Item 2")]))),m.createElement("li",h(),...u)),(d=f(c("a",f(["children",f("Item 3")]))),m.createElement("li",h(),...d))]]])))]]]))),m.createElement("div",h(),l)))})(),Rv=(()=>{let l,r,u;return _("Opened",`Daisy.dropdown [\r
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
`,c("div",b("dropdown",s([["className","dropdown-open"],["children",[c("button",b("btn",s([["className","btn-primary"],["children",f("Opened")]]))),c("ul",b("dropdown-content",s([["className","p-2 shadow menu bg-base-100 rounded-box w-52"],["tabIndex",0],["children",[(l=f(c("a",f(["children",f("Item 1")]))),m.createElement("li",h(),...l)),(r=f(c("a",f(["children",f("Item 2")]))),m.createElement("li",h(),...r)),(u=f(c("a",f(["children",f("Item 3")]))),m.createElement("li",h(),...u))]]])))]]]))))})(),Uv=(()=>{let l;return _("Directions",`let dirs = [\r
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
]`,(l=_e(I(()=>Xe(u=>{let d,y,g;return ce(c("div",b("dropdown",s([u[0],["children",[c("button",b("btn",s([u[2],["children",f(u[1])]]))),c("ul",b("dropdown-content",s([["className","p-2 shadow menu bg-base-100 rounded-box w-52"],["tabIndex",0],["children",[(d=f(c("a",f(["children",f("Item 1")]))),m.createElement("li",h(),...d)),(y=f(c("a",f(["children",f("Item 2")]))),m.createElement("li",h(),...y)),(g=f(c("a",f(["children",f("Item 3")]))),m.createElement("li",h(),...g))]]])))]]]))))},[[["className","dropdown-left"],"left",["className","btn-primary"]],[["className","dropdown-end"],"end",["className","btn-secondary"]],[["className","dropdown-top"],"top",["className","btn-accent"]],[["className","dropdown-right"],"right",["className","btn-success"]]]))),m.createElement("div",h(),...l)))})();function Bv(){return m.createElement(m.Fragment,h(),Mv,Ov,Rv,Uv)}const qv=(()=>{let l;return _("With label and legend",`Daisy.fieldset [\r
    prop.className "bg-base-200 border border-base-300 rounded-box p-4"\r
\r
    prop.children [\r
        Daisy.fieldsetLegend "Page title"\r
        Daisy.input [ prop.placeholder "My awesome page" ]\r
        Daisy.fieldsetLabel "You can edit page title later on from settings"\r
    ]\r
]`,(l=c("fieldset",b("fieldset",s([["className","bg-base-200 border border-base-300 rounded-box p-4"],["children",[c("legend",s([["className","fieldset-legend"],["children",f("Page title")]])),c("input",b("input",s([["type","text"],["placeholder","My awesome page"]]))),c("label",s([["className","fieldset-label"],["children",f("You can edit page title later on from settings")]]))]]]))),m.createElement("div",h(),l)))})(),Lv=(()=>{let l;return _("Multiple inputs",`Daisy.fieldset [\r
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
]`,(l=c("fieldset",b("fieldset",s([["className","bg-base-200 border border-base-300 rounded-box p-4"],["children",[c("legend",s([["className","fieldset-legend"],["children",f("Page details")]])),c("label",s([["className","fieldset-label"],["children",f("Title")]])),c("input",b("input",s([["type","text"],["placeholder","My awesome page"]]))),c("label",s([["className","fieldset-label"],["children",f("Slug")]])),c("input",b("input",s([["type","text"],["placeholder","my-awesome-page"]]))),c("label",s([["className","fieldset-label"],["children",f("Author")]])),c("input",b("input",s([["type","text"],["placeholder","Name"]])))]]]))),m.createElement("div",h(),l)))})(),Gv=(()=>{let l;return _("With joined items",`Daisy.fieldset [\r
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
]`,(l=c("fieldset",b("fieldset",s([["className","bg-base-200 border border-base-300 rounded-box p-4"],["children",[c("legend",s([["className","fieldset-legend"],["children",f("Settings")]])),c("div",s([["className","join"],["children",[c("input",b("input",s([["type","text"],["className","join-item"],["placeholder","Product name"]]))),c("button",b("btn",s([["className","join-item"],["children",f("Save")]])))]]]))]]]))),m.createElement("div",h(),l)))})();function Vv(){return m.createElement(m.Fragment,h(),qv,Lv,Gv)}const jv=_("As form",`Daisy.filter.form [\r
    Daisy.button.value [ prop.text "x" ]\r
    Daisy.button.radio [ prop.name "frameworks"; prop.ariaLabel "Svelte" ]\r
    Daisy.button.radio [ prop.name "frameworks"; prop.ariaLabel "Vue" ]\r
    Daisy.button.radio [ prop.name "frameworks"; prop.ariaLabel "React" ]\r
]`,c("form",s([["className","filter"],["children",[c("input",b("btn",s([["type","reset"],["value","x"]]))),c("input",b("btn",s([["type","radio"],["name","frameworks"],["aria-label","Svelte"]]))),c("input",b("btn",s([["type","radio"],["name","frameworks"],["aria-label","Vue"]]))),c("input",b("btn",s([["type","radio"],["name","frameworks"],["aria-label","React"]])))]]]))),Yv=_("As div",`Daisy.filter.div [\r
    Daisy.filterReset [ prop.name "frameworks2" ]\r
    Daisy.button.radio [ prop.name "frameworks2"; prop.ariaLabel "Svelte" ]\r
    Daisy.button.radio [ prop.name "frameworks2"; prop.ariaLabel "Vue" ]\r
    Daisy.button.radio [ prop.name "frameworks2"; prop.ariaLabel "React" ]\r
]`,c("div",s([["className","filter"],["children",[c("input",b("btn filter-reset",s([["type","radio"],["name","frameworks2"]]))),c("input",b("btn",s([["type","radio"],["name","frameworks2"],["aria-label","Svelte"]]))),c("input",b("btn",s([["type","radio"],["name","frameworks2"],["aria-label","Vue"]]))),c("input",b("btn",s([["type","radio"],["name","frameworks2"],["aria-label","React"]])))]]])));function Qv(){return m.createElement(m.Fragment,h(),jv,Yv)}const Xv=(()=>{let l,r,u,d;return _("Simple, horizontal",`Daisy.footer [\r
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
]`,(l=c("footer",b("footer",s([["className","footer-horizontal"],["className","p-10 bg-neutral text-neutral-content"],["children",[(r=s([c("span",s([["className","footer-title"],["children",f("Services")]])),c("a",b("link",s([["className","link-hover"],["children",f("Branding")]]))),c("a",b("link",s([["className","link-hover"],["children",f("Design")]]))),c("a",b("link",s([["className","link-hover"],["children",f("Marketing")]]))),c("a",b("link",s([["className","link-hover"],["children",f("Advertisement")]])))]),m.createElement("div",h(),...r)),(u=s([c("span",s([["className","footer-title"],["children",f("Company")]])),c("a",b("link",s([["className","link-hover"],["children",f("About us")]]))),c("a",b("link",s([["className","link-hover"],["children",f("Contact")]]))),c("a",b("link",s([["className","link-hover"],["children",f("Jobs")]]))),c("a",b("link",s([["className","link-hover"],["children",f("Press kit")]])))]),m.createElement("div",h(),...u)),(d=s([c("span",s([["className","footer-title"],["children",f("Legal")]])),c("a",b("link",s([["className","link-hover"],["children",f("Legal")]]))),c("a",b("link",s([["className","link-hover"],["children",f("Terms of use")]]))),c("a",b("link",s([["className","link-hover"],["children",f("Privacy policy")]]))),c("a",b("link",s([["className","link-hover"],["children",f("Cookie policy")]])))]),m.createElement("div",h(),...d))]]]))),m.createElement("div",h(),l)))})();function Zv(){return m.createElement(m.Fragment,h(),Xv)}const Kv=(()=>{let l,r;return _("Advanced",`Daisy.hero [\r
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
]`,(l=c("div",b("hero",s([["className","min-h-screen"],["style",{backgroundImage:"url('https://picsum.photos/id/1005/1600/1400')"}],["children",[c("div",f(["className","hero-overlay bg-opacity-60"])),c("div",b("hero-content",s([["className","text-center text-neutral-content"],["children",[c("div",s([["className","max-w-md"],["children",[c("h1",s([["className","mb-5 text-5xl font-bold"],["children",f("Hello there")]])),(r="Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.",m.createElement("p",h(),r)),c("button",b("btn",s([["className","btn-primary"],["children",f("Get Started")]])))]]]))]]])))]]]))),m.createElement("div",h(),l)))})();function Jv(){return m.createElement(m.Fragment,h(),Kv)}const Fv=_("Simple",`Daisy.indicator [\r
    Daisy.indicatorItem [\r
        prop.className "badge badge-secondary"\r
        prop.text "New"\r
    ]\r
    Html.div [\r
        prop.className "grid w-32 h-32 bg-base-300 place-items-center"\r
        prop.text "Content"\r
    ]\r
]`,c("div",s([["className","indicator"],["children",[c("div",b("indicator-item",s([["className","badge badge-secondary"],["children",f("New")]]))),c("div",s([["className","grid w-32 h-32 bg-base-300 place-items-center"],["children",f("Content")]]))]]]))),$v=_("Button",`Daisy.indicator [\r
    Daisy.indicatorItem [prop.text "99+"; prop.className "badge"]\r
    Daisy.button.button [button.primary; prop.text "Inbox"]\r
]`,c("div",s([["className","indicator"],["children",[c("div",b("indicator-item",s([["children",f("99+")],["className","badge"]]))),c("button",b("btn",s([["className","btn-primary"],["children",f("Inbox")]])))]]]))),Wv=_("Avatar",`Daisy.indicator [\r
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
]`,c("div",b("indicator",s([["className","avatar"],["children",[c("div",b("indicator-item",s([["children",f("typing...")],["className","badge"]]))),c("div",s([["className","w-24 h-24 rounded-btn"],["children",[c("img",f(["src","https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"]))]]]))]]])))),Iv=(()=>{let l;return _("All Positions",`Daisy.indicator [\r
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
]`,(l=c("div",b("indicator",s([["className","m-6"],["children",[c("div",b("indicator-item",s([["className","indicator-top"],["className","indicator-start"],["className","badge-secondary"],["className","badge"],["children",f("1")]]))),c("div",b("indicator-item",s([["className","indicator-top"],["className","indicator-center"],["className","badge-secondary"],["className","badge"],["children",f("2")]]))),c("div",b("indicator-item",s([["className","indicator-top"],["className","indicator-end"],["className","badge-secondary"],["className","badge"],["children",f("3")]]))),c("div",b("indicator-item",s([["className","indicator-middle"],["className","indicator-start"],["className","badge-secondary"],["className","badge"],["children",f("4")]]))),c("div",b("indicator-item",s([["className","indicator-middle"],["className","indicator-center"],["className","badge-secondary"],["className","badge"],["children",f("5")]]))),c("div",b("indicator-item",s([["className","indicator-middle"],["className","indicator-end"],["className","badge-secondary"],["className","badge"],["children",f("6")]]))),c("div",b("indicator-item",s([["className","indicator-bottom"],["className","indicator-start"],["className","badge-secondary"],["className","badge"],["children",f("7")]]))),c("div",b("indicator-item",s([["className","indicator-bottom"],["className","indicator-center"],["className","badge-secondary"],["className","badge"],["children",f("8")]]))),c("div",b("indicator-item",s([["className","indicator-bottom"],["className","indicator-end"],["className","badge-secondary"],["className","badge"],["children",f("9")]]))),c("div",f(["className","grid w-32 h-32 bg-base-300 place-items-center"]))]]]))),m.createElement("div",h(),l)))})();function Pv(){return m.createElement(m.Fragment,h(),Fv,$v,Wv,Iv)}const e1=(()=>{let l;return _("Join is the new ButtonGroup",`Html.div [\r
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
]`,(l=f(c("div",s([["className","join"],["children",[c("button",b("btn",s([["className","btn-primary"],["className","join-item"],["children",f("A")]]))),c("button",b("btn",s([["className","btn-secondary"],["className","join-item"],["children",f("B")]]))),c("button",b("btn",s([["className","btn-warning"],["className","join-item"],["children",f("C")]])))]]]))),m.createElement("div",h(),...l)))})();function t1(){return m.createElement(m.Fragment,h(),e1)}const n1=_("Single",'Daisy.kbd "a" ',(()=>{const l=c("kbd",s([["className","kbd"],["children",f("a")]]));return m.createElement("div",h(),l)})()),a1=_("Sizes",`for size in [kbd.lg; kbd.md; kbd.sm; kbd.xs] do\r
    Daisy.kbd [size; prop.text "shift"]`,(()=>{const l=_e(I(()=>Rn(r=>c("kbd",b("kbd",s([r,["children",f("shift")]]))),[["className","kbd-lg"],["className","kbd-md"],["className","kbd-sm"],["className","kbd-xs"]])));return m.createElement("div",h(),...l)})()),l1=_("Key Combination",`Daisy.kbd "ctrl"\r
Html.span "+"\r
Daisy.kbd "shift"\r
Html.span "+"\r
Daisy.kbd "del" `,(()=>{const l=s([c("kbd",s([["className","kbd"],["children",f("ctrl")]])),m.createElement("span",h(),"+"),c("kbd",s([["className","kbd"],["children",f("shift")]])),m.createElement("span",h(),"+"),c("kbd",s([["className","kbd"],["children",f("del")]]))]);return m.createElement("div",h(),...l)})());function r1(){return m.createElement(m.Fragment,h(),n1,a1,l1)}const i1=_("Label for input",`Daisy.label.input [\r
    Daisy.label "https://"\r
    Html.input [ prop.placeholder "URL" ]\r
]`,c("label",s([["className","input"],["children",[c("span",s([["className","label"],["children",f("https://")]])),c("input",f(["placeholder","URL"]))]]]))),c1=_("Label for input at the end",`Daisy.label.input [\r
    Html.input [ prop.placeholder "domain name" ]\r
    Daisy.label ".com"\r
] `,c("label",s([["className","input"],["children",[c("input",f(["placeholder","domain name"])),c("span",s([["className","label"],["children",f(".com")]]))]]]))),s1=(()=>{let l;return _("Label for select",`Daisy.label.select [\r
    Daisy.label "Type"\r
    Html.select [\r
        Html.option "Personal"\r
        Html.option "Business"\r
    ]\r
]`,c("label",s([["className","select"],["children",[c("span",s([["className","label"],["children",f("Type")]])),(l=s([m.createElement("option",h(),"Personal"),m.createElement("option",h(),"Business")]),m.createElement("select",h(),...l))]]])))})(),o1=_("Floating label",`Daisy.floatingLabel [\r
    Html.span "Your email"\r
    Daisy.input [ prop.placeholder "mail@site.com" ]\r
]`,c("label",s([["className","floating-label"],["children",[m.createElement("span",h(),"Your email"),c("input",b("input",s([["type","text"],["placeholder","mail@site.com"]])))]]]))),u1=(()=>{let l;return _("Floating label with different sizes",`Html.div [\r
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
]`,(l=c("div",s([["className","flex flex-col gap-4"],["children",[c("label",s([["className","floating-label"],["children",[c("input",b("input",s([["type","text"],["className","input-xs"],["placeholder","xs"]]))),m.createElement("span",h(),"xs")]]])),c("label",s([["className","floating-label"],["children",[c("input",b("input",s([["type","text"],["className","input-sm"],["placeholder","sm"]]))),m.createElement("span",h(),"sm")]]])),c("label",s([["className","floating-label"],["children",[c("input",b("input",s([["type","text"],["className","input-md"],["placeholder","md"]]))),m.createElement("span",h(),"md")]]])),c("label",s([["className","floating-label"],["children",[c("input",b("input",s([["type","text"],["className","input-lg"],["placeholder","lg"]]))),m.createElement("span",h(),"lg")]]])),c("label",s([["className","floating-label"],["children",[c("input",b("input",s([["type","text"],["className","input-xl"],["placeholder","xl"]]))),m.createElement("span",h(),"xl")]]]))]]])),m.createElement("div",h(),l)))})();function d1(){return m.createElement(m.Fragment,h(),i1,c1,s1,o1,u1)}const m1=_("Basic",'Daisy.link "This is a link" ',(()=>{const l=c("a",s([["className","link"],["children",f("This is a link")]]));return m.createElement("div",h(),l)})()),f1=_("Color",`Daisy.link [\r
    link.secondary\r
    prop.text "This is a link"\r
]`,(()=>{const l=c("a",b("link",s([["className","link-secondary"],["children",f("This is a link with color")]])));return m.createElement("div",h(),l)})()),p1=_("Hover",`Daisy.link [\r
    link.hover\r
    link.accent\r
    prop.text "This is a link"\r
]\r
`,(()=>{const l=c("a",b("link",s([["className","link-hover"],["className","link-accent"],["children",f("This is a link color and hover")]])));return m.createElement("div",h(),l)})()),h1=(()=>{let l,r;return _("Colors",`Html.ol [\r
    let colors =\r
        [ link.primary  , "primary"\r
          link.secondary, "secondary"\r
          link.accent   , "accent"\r
          link.neutral  , "neutral" ]\r
\r
    for color, text in colors do\r
        Html.li [Daisy.link [color; prop.text text]]\r
]`,(l=(r=_e(I(()=>Xe(d=>{let y;return ce((y=f(c("a",b("link",s([d[0],["children",f(d[1])]])))),m.createElement("li",h(),...y)))},[[["className","link-primary"],"primary"],[["className","link-secondary"],"secondary"],[["className","link-accent"],"accent"],[["className","link-neutral"],"neutral"]]))),m.createElement("ol",h(),...r)),m.createElement("div",h(),l)))})();function b1(){return m.createElement(m.Fragment,h(),m1,f1,p1,h1)}const y1=(()=>{let l,r,u,d;return _("List (third column grows)",`Daisy.list [\r
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
]`,(l=c("ul",b("list",s([["className","bg-base-100 rounded-box shadow-md"],["children",[c("li",s([["className","p-4 pb-2 text-xs opacity-60 tracking-wide"],["children",f("Most played songs this week")]])),c("li",s([["className","list-row"],["children",[c("div",s([["className","text-4xl font-thin opacity-30 tabular-nums"],["children",f("01")]])),(r=f(c("img",s([["className","size-10 rounded-box"],["src","https://img.daisyui.com/images/profile/demo/1@94.webp"]]))),m.createElement("div",h(),...r)),c("div",s([["className","list-col-grow"],["children",[m.createElement("div",h(),"Dio Lupa"),c("div",s([["className","text-xs uppercase font-semibold opacity-60"],["children",f("Remaining Reason")]]))]]])),c("button",b("btn",s([["className","btn-ghost"],["className","btn-square"],["children",[ze("svg",s([["className","size-[1.2em]"],["viewBox","0 0 24 24"],["children",f(ze("g",s([["strokeLinejoin","round"],["strokeLinecap","round"],["strokeWidth",2],["fill","none"],["stroke","currentColor"],["children",f(ze("path",f(["d","M6 3L20 12 6 21 6 3z"])))]])))]]))]]])))]]])),c("li",s([["className","list-row"],["children",[c("div",s([["className","text-4xl font-thin opacity-30 tabular-nums"],["children",f("02")]])),(u=f(c("img",s([["className","size-10 rounded-box"],["src","https://img.daisyui.com/images/profile/demo/4@94.webp"]]))),m.createElement("div",h(),...u)),c("div",s([["className","list-col-grow"],["children",[m.createElement("div",h(),"Ellie Beilish"),c("div",s([["className","text-xs uppercase font-semibold opacity-60"],["children",f("Bears of a fever")]]))]]])),c("button",b("btn",s([["className","btn-ghost"],["className","btn-square"],["children",[ze("svg",s([["className","size-[1.2em]"],["viewBox","0 0 24 24"],["children",f(ze("g",s([["strokeLinejoin","round"],["strokeLinecap","round"],["strokeWidth",2],["fill","none"],["stroke","currentColor"],["children",f(ze("path",f(["d","M6 3L20 12 6 21 6 3z"])))]])))]]))]]])))]]])),c("li",s([["className","list-row"],["children",[c("div",s([["className","text-4xl font-thin opacity-30 tabular-nums"],["children",f("03")]])),(d=f(c("img",s([["className","size-10 rounded-box"],["src","https://img.daisyui.com/images/profile/demo/3@94.webp"]]))),m.createElement("div",h(),...d)),c("div",s([["className","list-col-grow"],["children",[m.createElement("div",h(),"Sabrino Gardener"),c("div",s([["className","text-xs uppercase font-semibold opacity-60"],["children",f("Cappuccino")]]))]]])),c("button",b("btn",s([["className","btn-ghost"],["className","btn-square"],["children",[ze("svg",s([["className","size-[1.2em]"],["viewBox","0 0 24 24"],["children",f(ze("g",s([["strokeLinejoin","round"],["strokeLinecap","round"],["strokeWidth",2],["fill","none"],["stroke","currentColor"],["children",f(ze("path",f(["d","M6 3L20 12 6 21 6 3z"])))]])))]]))]]])))]]]))]]]))),m.createElement("div",h(),l)))})(),g1=(()=>{let l,r,u,d,y,g,x,C,T,E;return _("List (third column wraps to next row)",`Daisy.list [\r
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
]`,(l=c("ul",b("list",s([["className","bg-base-100 rounded-box shadow-md"],["children",[c("li",s([["className","p-4 pb-2 text-xs opacity-60 tracking-wide"],["children",f("Most played songs this week")]])),c("li",s([["className","list-row"],["children",[(r=f(c("img",s([["className","size-10 rounded-box"],["src","https://img.daisyui.com/images/profile/demo/1@94.webp"]]))),m.createElement("div",h(),...r)),(u=s([m.createElement("div",h(),"Dio Lupa"),c("div",s([["className","text-xs uppercase font-semibold opacity-60"],["children",f("Remaining Reason")]]))]),m.createElement("div",h(),...u)),c("p",s([["className","list-col-wrap"],(d='"Remaining Reason" became an instant hit, praised for its haunting sound and emotional depth. A viral performance brought it widespread recognition, making it one of Dio Lupa’s most iconic tracks.',["children",f(d)])])),c("button",b("btn",s([["className","btn-ghost"],["className","btn-square"],["children",[ze("svg",s([["className","size-[1.2em]"],["viewBox","0 0 24 24"],["children",f(ze("g",s([["strokeLinejoin","round"],["strokeLinecap","round"],["strokeWidth",2],["fill","none"],["stroke","currentColor"],["children",f(ze("path",f(["d","M6 3L20 12 6 21 6 3z"])))]])))]]))]]])))]]])),c("li",s([["className","list-row"],["children",[(y=f(c("img",s([["className","size-10 rounded-box"],["src","https://img.daisyui.com/images/profile/demo/4@94.webp"]]))),m.createElement("div",h(),...y)),(g=s([m.createElement("div",h(),"Ellie Beilish"),c("div",s([["className","text-xs uppercase font-semibold opacity-60"],["children",f("Bears of a fever")]]))]),m.createElement("div",h(),...g)),c("p",s([["className","list-col-wrap"],(x='"Bears of a Fever" captivated audiences with its intense energy and mysterious lyrics. Its popularity skyrocketed after fans shared it widely online, earning Ellie critical acclaim.',["children",f(x)])])),c("button",b("btn",s([["className","btn-ghost"],["className","btn-square"],["children",[ze("svg",s([["className","size-[1.2em]"],["viewBox","0 0 24 24"],["children",f(ze("g",s([["strokeLinejoin","round"],["strokeLinecap","round"],["strokeWidth",2],["fill","none"],["stroke","currentColor"],["children",f(ze("path",f(["d","M6 3L20 12 6 21 6 3z"])))]])))]]))]]])))]]])),c("li",s([["className","list-row"],["children",[(C=f(c("img",s([["className","size-10 rounded-box"],["src","https://img.daisyui.com/images/profile/demo/3@94.webp"]]))),m.createElement("div",h(),...C)),(T=s([m.createElement("div",h(),"Sabrino Gardener"),c("div",s([["className","text-xs uppercase font-semibold opacity-60"],["children",f("Cappuccino")]]))]),m.createElement("div",h(),...T)),c("p",s([["className","list-col-wrap"],(E='"Cappuccino" quickly gained attention for its smooth melody and relatable themes. The song’s success propelled Sabrino into the spotlight, solidifying their status as a rising star.',["children",f(E)])])),c("button",b("btn",s([["className","btn-ghost"],["className","btn-square"],["children",[ze("svg",s([["className","size-[1.2em]"],["viewBox","0 0 24 24"],["children",f(ze("g",s([["strokeLinejoin","round"],["strokeLinecap","round"],["strokeWidth",2],["fill","none"],["stroke","currentColor"],["children",f(ze("path",f(["d","M6 3L20 12 6 21 6 3z"])))]])))]]))]]])))]]]))]]]))),m.createElement("div",h(),l)))})();function v1(){return m.createElement(m.Fragment,h(),y1,g1)}const N1=(()=>{let l;return _("Use Loading for cool spinners with different sizes",`Html.div [\r
    Daisy.loading [ loading.spinner; loading.xs ]\r
    Daisy.loading [ loading.spinner; loading.sm ]\r
    Daisy.loading [ loading.spinner; loading.md ]\r
    Daisy.loading [ loading.spinner; loading.lg ]\r
]`,(l=s([c("span",b("loading",s([["className","loading-spinner"],["className","loading-xs"]]))),c("span",b("loading",s([["className","loading-spinner"],["className","loading-sm"]]))),c("span",b("loading",s([["className","loading-spinner"],["className","loading-md"]]))),c("span",b("loading",s([["className","loading-spinner"],["className","loading-lg"]])))]),m.createElement("div",h(),...l)))})(),E1=(()=>{let l;return _("And many others",`Html.div [\r
    Daisy.loading [ loading.dots ]\r
    Daisy.loading [ loading.ring ]\r
    Daisy.loading [ loading.ball ]\r
    Daisy.loading [ loading.bars ]\r
    Daisy.loading [ loading.infinity ]\r
]`,(l=s([c("span",b("loading",f(["className","loading-dots"]))),c("span",b("loading",f(["className","loading-ring"]))),c("span",b("loading",f(["className","loading-ball"]))),c("span",b("loading",f(["className","loading-bars"]))),c("span",b("loading",f(["className","loading-infinity"])))]),m.createElement("div",h(),...l)))})(),x1=(()=>{let l;return _("Fancy colors? Oh yeah!",`Html.div [\r
    Daisy.loading [ loading.dots; color.textAccent ]\r
    Daisy.loading [ loading.ring; color.textWarning ]\r
    Daisy.loading [ loading.ball; color.textSecondary ]\r
    Daisy.loading [ loading.bars; color.textSuccess ]\r
    Daisy.loading [ loading.infinity; color.textError ]\r
]`,(l=s([c("span",b("loading",s([["className","loading-dots"],["className","text-accent"]]))),c("span",b("loading",s([["className","loading-ring"],["className","text-warning"]]))),c("span",b("loading",s([["className","loading-ball"],["className","text-secondary"]]))),c("span",b("loading",s([["className","loading-bars"],["className","text-success"]]))),c("span",b("loading",s([["className","loading-infinity"],["className","text-error"]])))]),m.createElement("div",h(),...l)))})();function S1(){return m.createElement(m.Fragment,h(),N1,E1,x1)}const D1=_("Basic Shape",`Html.img [\r
    mask.circle\r
    prop.src "https://picsum.photos/id/1005/200/200"\r
]`,(()=>{const l=c("img",s([["className","mask mask-circle"],["src","https://picsum.photos/id/1005/200/200"]]));return m.createElement("div",h(),l)})()),w1=(()=>{let l;return _("All Shapes",`let shapes = [\r
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
]`,(l=_e(I(()=>Xe(u=>{let d;return ce((d=s([m.createElement("span",h(),u[1]),c("img",s([u[0],["src","https://picsum.photos/id/1005/200/200"]]))]),m.createElement("div",h(),...d)))},[[["className","mask mask-squircle"],"squircle"],[["className","mask mask-heart"],"heart"],[["className","mask mask-hexagon"],"hexagon"],[["className","mask mask-hexagon-2"],"hexagon2"],[["className","mask mask-decagon"],"decagon"],[["className","mask mask-pentagon"],"pentagon"],[["className","mask mask-diamond"],"diamond"],[["className","mask mask-square"],"square"],[["className","mask mask-circle"],"circle"],[["className","mask mask-star"],"star"],[["className","mask mask-star-2"],"star2"],[["className","mask mask-triangle"],"triangle"],[["className","mask mask-triangle-2"],"triangle2"],[["className","mask mask-triangle-3"],"triangle3"],[["className","mask mask-triangle-4"],"triangle4"]]))),m.createElement("div",h(),...l)))})();function H1(){return m.createElement(m.Fragment,h(),D1,w1)}const _1=(()=>{let l,r,u,d,y;return _("Basic",`Html.div [\r
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
]`,c("div",s([["className","grid place-content-center rounded-box bg-base-200"],["children",[c("ul",b("menu",s([["className","bg-base-100 rounded-box"],["children",[c("li",s([["className","menu-title"],["children",[m.createElement("span",h(),"Menu title")]]])),(l=f(c("a",f(["children",f("Item without icon")]))),m.createElement("li",h(),...l)),(r=f((u=s([c("i",f(["className","fas fa-exclamation-triangle mr-2"])),m.createElement("span",h(),"Item with icon")]),m.createElement("a",h(),...u))),m.createElement("li",h(),...r)),(d=f((y=s([c("i",f(["className","fas fa-angry mr-2"])),m.createElement("span",h(),"Item with icon"),c("div",b("badge",s([["className","badge-success"],["children",f("3")]])))]),m.createElement("a",h(),...y))),m.createElement("li",h(),...d))]]])))]]])))})(),T1=(()=>{let l;return _("Bordered",`Html.div [\r
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
]`,c("div",s([["className","grid place-content-center rounded-box bg-base-200"],["children",[c("ul",b("menu",s([["className","bg-base-100 rounded-box"],["children",[c("li",s([["className","menu-title"],["children",[m.createElement("span",h(),"Menu title")]]])),(l=f(c("a",f(["children",f("Non Bordered")]))),m.createElement("li",h(),...l)),c("li",s([["className","border"],["children",[c("a",f(["children",f("Bordered")]))]]])),c("li",s([["className","menu-disabled"],["children",[c("a",f(["children",f("Disabled")]))]]]))]]])))]]])))})(),k1=(()=>{let l,r,u,d;return _("Horizontal",`Html.div [\r
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
]`,c("div",s([["className","grid place-content-center rounded-box bg-base-200"],["children",[c("ul",b("menu",s([["className","menu-horizontal"],["className","items-stretch shadow-lg bg-base-100 rounded-box"],["children",[(l=f(c("a",f(["children",f("With link")]))),m.createElement("li",h(),...l)),c("li",s([["className","bordered"],["children",[c("a",f(["children",f("Bordered")]))]]])),(r=f(m.createElement("span",h(),"With a span")),m.createElement("li",h(),...r)),(u=f((d=s([c("i",f(["className","fas fa-exclamation-triangle mr-2"])),m.createElement("span",h(),"With an icon")]),m.createElement("a",h(),...d))),m.createElement("li",h(),...u))]]])))]]])))})(),C1=(()=>{let l,r,u,d,y;return _("Tree",`Html.div [\r
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
]`,c("div",s([["className","grid place-content-center py-4 rounded-box bg-base-200"],["children",[c("ul",b("menu",s([["className","bg-base-100 rounded-box"],["children",[c("li",s([["className","menu-title"],["children",[m.createElement("span",h(),"Menu title")]]])),(l=f(c("a",f(["children",f("Level 1")]))),m.createElement("li",h(),...l)),(r=f((u=s([m.createElement("summary",h(),"Parent"),c("ul",s([["className","rounded-box p-2 bg-base-100"],["children",[(d=f(c("a",f(["children",f("Level 2/1")]))),m.createElement("li",h(),...d)),(y=f(c("a",f(["children",f("Level 2/2")]))),m.createElement("li",h(),...y))]]]))]),m.createElement("details",h(),...u))),m.createElement("li",h(),...r))]]])))]]])))})();function z1(){return m.createElement(m.Fragment,h(),_1,T1,k1,C1)}const A1=(()=>{let l,r;return _("Modal with toggle",`Html.div [\r
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
]`,(l=s([c("label",b("btn",s([["htmlFor","my-modal"],["className","btn-primary"],["children",f("Open Modal")]]))),c("input",b("modal-toggle",s([["type","checkbox"],["id","my-modal"]]))),c("div",b("modal",f(["children",[c("div",s([["className","modal-box"],["children",[(r="Enim dolorem dolorum omnis atque necessitatibus. Consequatur aut adipisci qui iusto illo eaque. Consequatur repudiandae et. Nulla ea quasi eligendi. Saepe velit autem minima.",m.createElement("p",h(),r)),c("div",s([["className","modal-action"],["children",[c("label",b("btn",s([["htmlFor","my-modal"],["className","btn-primary"],["children",f("Accept")]])))]]]))]]]))]])))]),m.createElement("div",h(),...l)))})();function M1(){return m.createElement(m.Fragment,h(),A1)}const O1=(()=>{let l;return _("Icon and text",`Daisy.navbar [\r
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
]`,(l=c("div",b("navbar",s([["className","mb-2 shadow-lg bg-neutral text-neutral-content rounded-box"],["children",[c("div",s([["className","flex-none"],["children",[c("button",b("btn",s([["className","btn-square"],["className","btn-ghost"],["children",[c("i",f(rt(["className","fas fa-arrow-left"],["className","text-success"])))]]])))]]])),c("div",s([["className","flex-1 px-2 mx-2"],["children",[c("span",s([["className","text-lg font-bold"],["children",f("With one icon")]]))]]]))]]]))),m.createElement("div",h(),l)))})(),R1=(()=>{let l;return _("Start / Center / End",`Daisy.navbar [\r
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
]`,(l=c("div",b("navbar",s([["className","mb-2 shadow-lg bg-neutral text-neutral-content rounded-box"],["children",[c("div",s([["className","navbar-start"],["children",[c("button",b("btn",s([["className","btn-square"],["className","btn-ghost"],["children",[c("i",f(["className","fas fa-bars"]))]]])))]]])),c("div",s([["className","navbar-center"],["children",[m.createElement("span",h(),"With two icons")]]])),c("div",s([["className","navbar-end"],["children",[c("button",b("btn",s([["className","btn-square"],["className","btn-ghost"],["children",[c("i",f(["className","fas fa-ellipsis-h"]))]]])))]]]))]]]))),m.createElement("div",h(),l)))})(),U1=(()=>{let l;return _("With input",`Daisy.navbar [\r
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
]`,(l=c("div",b("navbar",s([["className","mb-2 shadow-lg bg-neutral text-neutral-content rounded-box"],["children",[c("div",s([["className","flex-none"],["children",[c("fieldset",s([["className","fieldset"],["children",[c("input",b("input",s([["type","text"],["className","input-ghost"],["placeholder","Search"]])))]]]))]]])),c("div",s([["className","flex-none"],["children",[c("button",b("btn",s([["className","btn-square"],["className","btn-ghost"],["children",[c("i",f(["className","fas fa-search"]))]]])))]]]))]]]))),m.createElement("div",h(),l)))})();function B1(){return m.createElement(m.Fragment,h(),O1,R1,U1)}const q1=_("Simple pagination",`Daisy.join [\r
    Daisy.button.button "Previous"\r
    Daisy.button.button "1"\r
    Daisy.button.button [button.active; prop.text "2"]\r
    Daisy.button.button "3"\r
    Daisy.button.button "4"\r
    Daisy.button.button "Next"\r
]`,c("div",s([["className","join"],["children",[c("button",s([["className","btn"],["children",f("Previous")]])),c("button",s([["className","btn"],["children",f("1")]])),c("button",b("btn",s([["className","btn-active"],["children",f("2")]]))),c("button",s([["className","btn"],["children",f("3")]])),c("button",s([["className","btn"],["children",f("4")]])),c("button",s([["className","btn"],["children",f("Next")]]))]]]))),L1=(()=>{let l;return _("Sizes",`let sizes = [\r
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
]`,(l=_e(I(()=>Xe(u=>{const d=u[0];return ce(c("div",s([["className","join"],["children",[c("button",b("btn",s([d,["children",f("Previous")]]))),c("button",b("btn",s([d,["children",f("1")]]))),c("button",b("btn",s([d,["className","btn-active"],["children",f("2")]]))),c("button",b("btn",s([d,["children",f("3")]]))),c("button",b("btn",s([d,["children",f("4")]]))),c("button",b("btn",s([d,["children",f("Next")]])))]]])))},[[["className","btn-xs"],"xs"],[["className","btn-sm"],"sm"],[["className","btn-md"],"md"],[["className","btn-lg"],"lg"]]))),m.createElement("div",h(),...l)))})();function G1(){return m.createElement(m.Fragment,h(),q1,L1)}const V1=(()=>{let l;return _("Simple",`Daisy.progress [prop.value 0; prop.max 100]\r
Daisy.progress [prop.value 25; prop.max 100]\r
Daisy.progress [prop.value 50; prop.max 100]\r
Daisy.progress [prop.value 75; prop.max 100]\r
Daisy.progress [prop.value 100; prop.max 100]`,(l=s([c("progress",b("progress",s([["value",0],["max",100]]))),c("progress",b("progress",s([["value",25],["max",100]]))),c("progress",b("progress",s([["value",50],["max",100]]))),c("progress",b("progress",s([["value",75],["max",100]]))),c("progress",b("progress",s([["value",100],["max",100]])))]),m.createElement("div",h(),...l)))})(),j1=(()=>{let l;return _("Colors",`let colors =\r
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
]`,(l=_e(I(()=>Xe(u=>{const d=u[0];return Je(ce(m.createElement("h3",h(),u[1])),I(()=>Je(ce(c("progress",b("progress",s([d,["value",0],["max",100]])))),I(()=>Je(ce(c("progress",b("progress",s([d,["value",25],["max",100]])))),I(()=>Je(ce(c("progress",b("progress",s([d,["value",50],["max",100]])))),I(()=>Je(ce(c("progress",b("progress",s([d,["value",75],["max",100]])))),I(()=>ce(c("progress",b("progress",s([d,["value",100],["max",100]]))))))))))))))},[[["className","progress-primary"],"primary"],[["className","progress-secondary"],"secondary"],[["className","progress-accent"],"accent"],[["className","progress-info"],"info"],[["className","progress-success"],"success"],[["className","progress-warning"],"warning"],[["className","progress-error"],"error"]]))),m.createElement("div",h(),...l)))})();function Y1(){return m.createElement(m.Fragment,h(),V1,j1)}const Q1=(()=>{let l;return _("Simple",`Daisy.radialProgress [\r
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
]`,(l=s([c("div",b("radial-progress",s([["style",{"--value":100}],["children",f("100%")]]))),c("div",b("radial-progress",s([["style",{"--value":70}],["children",f("70%")]]))),c("div",b("radial-progress",s([["style",{"--value":10}],["children",f("10%")]]))),c("div",b("radial-progress",s([["style",{"--value":50}],["children",f("50%")]])))]),m.createElement("div",h(),...l)))})(),X1=(()=>{let l;return _("Colors and different sizes",`Daisy.radialProgress [\r
    color.bgPrimary\r
    color.textPrimaryContent\r
    color.borderPrimary\r
    prop.className "border-4"\r
    prop.style [ style.custom("--value",70); style.custom("--size","12rem") ]\r
    prop.text "70%"\r
]`,(l=f(c("div",b("radial-progress",s([["className","bg-primary"],["className","text-primary-content"],["className","border-primary"],["className","border-4"],["style",{"--value":70,"--size":"12rem"}],["children",f("70%")]])))),m.createElement("div",h(),...l)))})();function Z1(){return m.createElement(m.Fragment,h(),Q1,X1)}const K1=(()=>{let l;return _("Large stars",`Daisy.rating [\r
    rating.lg\r
    prop.children [\r
        Html.input [ prop.type'.radio; prop.name "rating-1"; color.bgWarning ++ mask.star ]\r
        Html.input [ prop.type'.radio; prop.name "rating-1"; color.bgWarning ++ mask.star ]\r
        Html.input [ prop.type'.radio; prop.name "rating-1"; color.bgWarning ++ mask.star ]\r
        Html.input [ prop.type'.radio; prop.name "rating-1"; color.bgWarning ++ mask.star; prop.defaultChecked true ]\r
        Html.input [ prop.type'.radio; prop.name "rating-1"; color.bgWarning ++ mask.star ]\r
    ]\r
]`,(l=f(c("div",b("rating",s([["className","rating-lg"],["children",[c("input",s([["type","radio"],["name","rating-1"],rt(["className","bg-warning"],["className","mask mask-star"])])),c("input",s([["type","radio"],["name","rating-1"],rt(["className","bg-warning"],["className","mask mask-star"])])),c("input",s([["type","radio"],["name","rating-1"],rt(["className","bg-warning"],["className","mask mask-star"])])),c("input",s([["type","radio"],["name","rating-1"],rt(["className","bg-warning"],["className","mask mask-star"]),["defaultChecked",!0]])),c("input",s([["type","radio"],["name","rating-1"],rt(["className","bg-warning"],["className","mask mask-star"])]))]]])))),m.createElement("div",h(),...l)))})(),J1=(()=>{let l;return _("Small hearts",`Daisy.rating [\r
    prop.className "gap-1"\r
    ++ rating.sm\r
    prop.children [\r
        Html.input [ prop.type'.radio; prop.name "rating-1"; color.bgWarning ++ mask.star ]\r
        Html.input [ prop.type'.radio; prop.name "rating-1"; color.bgWarning ++ mask.star; prop.defaultChecked true ]\r
        Html.input [ prop.type'.radio; prop.name "rating-1"; color.bgWarning ++ mask.star ]\r
        Html.input [ prop.type'.radio; prop.name "rating-1"; color.bgWarning ++ mask.star ]\r
        Html.input [ prop.type'.radio; prop.name "rating-1"; color.bgWarning ++ mask.star ]\r
    ]\r
]`,(l=f(c("div",b("rating",s([rt(["className","gap-1"],["className","rating-sm"]),["children",[c("input",s([["type","radio"],["name","rating-2"],rt(["className","bg-error"],["className","mask mask-heart"])])),c("input",s([["type","radio"],["name","rating-2"],rt(["className","bg-error"],["className","mask mask-heart"]),["defaultChecked",!0]])),c("input",s([["type","radio"],["name","rating-2"],rt(["className","bg-error"],["className","mask mask-heart"])])),c("input",s([["type","radio"],["name","rating-2"],rt(["className","bg-error"],["className","mask mask-heart"])])),c("input",s([["type","radio"],["name","rating-2"],rt(["className","bg-error"],["className","mask mask-heart"])]))]]])))),m.createElement("div",h(),...l)))})();function F1(){return m.createElement(m.Fragment,h(),K1,J1)}const $1=_("Skeleton is a component that can be used to show a loading state of a component.",`Daisy.skeleton [\r
    prop.className "w-32 h-32"\r
]`,c("div",b("skeleton",f(["className","w-32 h-32"])))),W1=_("Skeleton - rectangle with content",`Html.div [\r
    prop.className "flex flex-col gap-4 w-52"\r
    prop.children [\r
        Daisy.skeleton [ prop.className "h-32 w-full" ]\r
        Daisy.skeleton [ prop.className "h-4 w-28" ]\r
        Daisy.skeleton [ prop.className "h-4 w-full" ]\r
        Daisy.skeleton [ prop.className "h-4 w-full" ]\r
    ]\r
]`,c("div",s([["className","flex flex-col gap-4 w-52"],["children",[c("div",b("skeleton",f(["className","h-32 w-full"]))),c("div",b("skeleton",f(["className","h-4 w-28"]))),c("div",b("skeleton",f(["className","h-4 w-full"]))),c("div",b("skeleton",f(["className","h-4 w-full"])))]]])));function I1(){return m.createElement(m.Fragment,h(),$1,W1)}const P1=(()=>{let l;return _("Without stack",`Html.div [\r
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
]`,(l=s([c("div",s([["className","grid w-32 h-20 rounded bg-primary text-primary-content place-content-center"],["children",f("1")]])),c("div",s([["className","grid w-32 h-20 rounded bg-accent text-accent-content place-content-center"],["children",f("2")]])),c("div",s([["className","grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center"],["children",f("3")]]))]),m.createElement("div",h(),...l)))})(),eN=(()=>{let l;return _("With stack",`Daisy.stack [\r
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
]`,(l=c("div",b("stack",s([["className","w-32 h-20"],["children",[c("div",s([["className","grid rounded bg-primary text-primary-content place-content-center"],["children",f("1")]])),c("div",s([["className","grid rounded bg-accent text-accent-content place-content-center"],["children",f("2")]])),c("div",s([["className","grid rounded bg-secondary text-secondary-content place-content-center"],["children",f("3")]]))]]]))),m.createElement("div",h(),l)))})(),tN=(()=>{let l;return _("Stacked images",`Daisy.stack [\r
    Html.img [\r
        prop.src "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"\r
    ]\r
    Html.img [\r
        prop.src "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"\r
    ]\r
    Html.img [\r
        prop.src "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"\r
    ]\r
]`,(l=c("div",s([["className","stack"],["children",[c("img",f(["src","https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"])),c("img",f(["src","https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"])),c("img",f(["src","https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"]))]]])),m.createElement("div",h(),l)))})();function nN(){return m.createElement(m.Fragment,h(),P1,eN,tN)}const aN=(()=>{let l;return _("Simple",`Daisy.stats [\r
    Daisy.stat [\r
        Daisy.statTitle "Total Page Views"\r
        Daisy.statValue "89,400"\r
        Daisy.statDesc "21% more than last month"\r
    ]\r
]`,(l=c("div",s([["className","stats"],["children",[c("div",s([["className","stat"],["children",[c("div",s([["className","stat-title"],["children",f("Total Page Views")]])),c("div",s([["className","stat-value"],["children",f("89,400")]])),c("div",s([["className","stat-desc"],["children",f("21% more than last month")]]))]]]))]]])),m.createElement("div",h(),l)))})(),lN=(()=>{let l;return _("With Figure",`Daisy.stats [\r
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
]`,(l=c("div",b("stats",s([["className","w-full"],["children",[c("div",s([["className","stat"],["children",[c("div",s([["className","stat-figure"],["children",[c("i",f(["className","fas fa-exclamation-triangle mr-2"]))]]])),c("div",s([["className","stat-title"],["children",f("Downloads")]])),c("div",s([["className","stat-value"],["children",f("310M")]])),c("div",s([["className","stat-desc"],["children",f("Jan 1st - Feb 1st")]]))]]])),c("div",s([["className","stat"],["children",[c("div",s([["className","stat-figure"],["children",[c("i",f(["className","fas fa-hand-spock mr-2"]))]]])),c("div",s([["className","stat-title"],["children",f("New Users")]])),c("div",s([["className","stat-value"],["children",f("4,200")]])),c("div",b("stat-desc",s([["className","text-success"],["children",f("↗︎ 400 (22%)")]])))]]])),c("div",s([["className","stat"],["children",[c("div",s([["className","stat-figure"],["children",[c("i",f(["className","fas fa-layer-group mr-2"]))]]])),c("div",s([["className","stat-title"],["children",f("New Registers")]])),c("div",s([["className","stat-value"],["children",f("1,200")]])),c("div",b("stat-desc",s([["className","text-error"],["children",f("↘︎ 90 (14%)")]])))]]]))]]]))),m.createElement("div",h(),l)))})(),rN=(()=>{let l;return _("Centered",`Daisy.stats [\r
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
]`,(l=c("div",b("stats",s([["className","w-full"],["children",[c("div",b("stat",s([["className","place-items-center place-content-center"],["children",[c("div",s([["className","stat-title"],["children",f("Downloads")]])),c("div",s([["className","stat-value"],["children",f("310M")]])),c("div",s([["className","stat-desc"],["children",f("Jan 1st - Feb 1st")]]))]]]))),c("div",b("stat",s([["className","place-items-center place-content-center"],["children",[c("div",s([["className","stat-title"],["children",f("New Users")]])),c("div",s([["className","stat-value"],["children",f("4,200")]])),c("div",b("stat-desc",s([["className","text-success"],["children",f("↗︎ 400 (22%)")]])))]]]))),c("div",b("stat",s([["className","place-items-center place-content-center"],["children",[c("div",s([["className","stat-title"],["children",f("New Registers")]])),c("div",s([["className","stat-value"],["children",f("1,200")]])),c("div",b("stat-desc",s([["className","text-error"],["children",f("↘︎ 90 (14%)")]])))]]])))]]]))),m.createElement("div",h(),l)))})();function iN(){return m.createElement(m.Fragment,h(),aN,lN,rN)}const cN=_("Basic",`Daisy.status [\r
    status.error\r
    status.xl\r
]`,(()=>{const l=Uo(s([["className","status-error"],["className","status-xl"]]));return m.createElement("div",h(),l)})()),sN=(()=>{let l;return _("Ping animation",`Html.div [\r
    Html.div [\r
        prop.className "inline-grid *:[grid-area:1/1]"\r
        prop.children [\r
            Daisy.status [ status.primary; prop.className "animate-ping" ]\r
            Daisy.status [ status.primary ]\r
        ]\r
    ]\r
    Html.text " Unread messages"\r
]`,(l=s([c("div",s([["className","inline-grid *:[grid-area:1/1]"],["children",[Uo(s([["className","status-primary"],["className","animate-ping"]])),Uo(f(["className","status-primary"]))]]]))," Unread messages"]),m.createElement("div",h(),...l)))})();function oN(){return m.createElement(m.Fragment,h(),cN,sN)}const uN=(()=>{let l;return _("Horizontal Steps",`Daisy.steps [\r
    Daisy.step [step.primary; prop.text "Register"]\r
    Daisy.step [step.primary; prop.text "Choose Plan"]\r
    Daisy.step "Purchase"\r
    Daisy.step "Receive Product"\r
]`,(l=c("ul",s([["className","steps"],["children",[c("li",b("step",s([["className","step-primary"],["children",f("Register")]]))),c("li",b("step",s([["className","step-primary"],["children",f("Choose Plan")]]))),c("li",s([["className","step"],["children",f("Purchase")]])),c("li",s([["className","step"],["children",f("Receive Product")]]))]]])),m.createElement("div",h(),l)))})(),dN=(()=>{let l;return _("Vertical Steps",`Daisy.steps [\r
    steps.vertical\r
    prop.children [\r
        Daisy.step [step.primary; prop.text "Register"]\r
        Daisy.step [step.primary; prop.text "Choose Plan"]\r
        Daisy.step "Purchase"\r
        Daisy.step "Receive Product"\r
    ]\r
]`,(l=c("ul",b("steps",s([["className","steps-vertical"],["children",[c("li",b("step",s([["className","step-primary"],["children",f("Register")]]))),c("li",b("step",s([["className","step-primary"],["children",f("Choose Plan")]]))),c("li",s([["className","step"],["children",f("Purchase")]])),c("li",s([["className","step"],["children",f("Receive Product")]]))]]]))),m.createElement("div",h(),l)))})(),mN=(()=>{let l;return _("Icons",`Daisy.steps [\r
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
]`,(l=c("ul",s([["className","steps"],["children",[c("li",s([["className","step"],["children",[c("span",s([["className","step-icon"],["children",["😕"]]])),"Step 1"]]])),c("li",s([["className","step"],["children",[c("span",s([["className","step-icon"],["children",["😃"]]])),"Step 2"]]])),c("li",s([["className","step"],["children",[c("span",s([["className","step-icon"],["children",["😍"]]])),"Step 3"]]]))]]])),m.createElement("div",h(),l)))})(),fN=(()=>{let l;return _("Custom Content",`Daisy.steps [\r
    Daisy.step [step.content "?"; step.primary; prop.text "Step 1"]\r
    Daisy.step [step.content "!"; step.secondary; prop.text "Step 2"]\r
    Daisy.step [step.content "✓"; step.accent; prop.text "Step 3"]\r
    Daisy.step [step.content "✕"; step.error; prop.text "Step 4"]\r
    Daisy.step [step.content "★"; step.info; prop.text "Step 5"]\r
    Daisy.step [step.content ""; step.success; prop.text "Step 6"]\r
    Daisy.step [step.content "✕"; step.warning; prop.text "Step 7"]\r
    Daisy.step [step.content "●"; prop.text "Step 8"]\r
]`,(l=c("ul",s([["className","steps"],["children",[c("li",b("step",s([["data-content","?"],["className","step-primary"],["children",f("Step 1")]]))),c("li",b("step",s([["data-content","!"],["className","step-secondary"],["children",f("Step 2")]]))),c("li",b("step",s([["data-content","✓"],["className","step-accent"],["children",f("Step 3")]]))),c("li",b("step",s([["data-content","✕"],["className","step-error"],["children",f("Step 4")]]))),c("li",b("step",s([["data-content","★"],["className","step-info"],["children",f("Step 5")]]))),c("li",b("step",s([["data-content",""],["className","step-success"],["children",f("Step 6")]]))),c("li",b("step",s([["data-content","✕"],["className","step-warning"],["children",f("Step 7")]]))),c("li",b("step",s([["data-content","●"],["children",f("Step 8")]])))]]])),m.createElement("div",h(),l)))})();function pN(){return m.createElement(m.Fragment,h(),uN,dN,fN,mN)}const hN=(()=>{let l;return _("Swapping is so easy!",`Daisy.swap [\r
    swap.flip\r
    prop.children [\r
        Html.input [ prop.type'.checkbox ]\r
        Daisy.swapOn "Ha! 😈 SWAPPED!"\r
        Daisy.swapOff "Click me to swap"\r
    ]\r
]`,(l=c("label",b("swap",s([["className","swap-flip"],["children",[c("input",f(["type","checkbox"])),c("div",s([["className","swap-on"],["children",f("Ha! 😈 SWAPPED!")]])),c("div",s([["className","swap-off"],["children",f("Click me to swap")]]))]]]))),m.createElement("div",h(),l)))})(),bN=(()=>{let l;return _("",`Daisy.swap [\r
    swap.rotate\r
    prop.className "text-9xl"\r
    prop.children [\r
        Html.input [ prop.type'.checkbox ]\r
        Daisy.swapOn "😈"\r
        Daisy.swapOff "😅"\r
    ]\r
]`,(l=c("label",b("swap",s([["className","swap-rotate"],["className","text-9xl"],["children",[c("input",f(["type","checkbox"])),c("div",s([["className","swap-on"],["children",f("😈")]])),c("div",s([["className","swap-off"],["children",f("😅")]]))]]]))),m.createElement("div",h(),l)))})();function yN(){return m.createElement(m.Fragment,h(),hN,bN)}const gN=(()=>{let l;return _("Simple",`Daisy.tabs [\r
    Daisy.tab "Tab 1"\r
    Daisy.tab [tab.active; prop.text "Tab 2"]\r
    Daisy.tab "Tab 3"\r
]`,(l=c("div",s([["className","tabs"],["children",[c("a",s([["className","tab"],["children",f("Tab 1")]])),c("a",b("tab",s([["className","tab-active"],["children",f("Tab 2")]]))),c("a",s([["className","tab"],["children",f("Tab 3")]]))]]])),m.createElement("div",h(),l)))})(),vN=(()=>{let l;return _("Bordered",`Daisy.tabs [\r
    tabs.border\r
    prop.children [\r
        Daisy.tab [prop.text "Tab 1"]\r
        Daisy.tab [tab.active; prop.text "Tab 2"]\r
        Daisy.tab [prop.text "Tab 3"]\r
    ]\r
]`,(l=c("div",b("tabs",s([["className","tabs-border"],["children",[c("a",b("tab",f(["children",f("Tab 1")]))),c("a",b("tab",s([["className","tab-active"],["children",f("Tab 2")]]))),c("a",b("tab",f(["children",f("Tab 3")])))]]]))),m.createElement("div",h(),l)))})(),NN=(()=>{let l;return _("Lifted",`Daisy.tabs [\r
    tabs.lift\r
    prop.children [\r
        Daisy.tab [prop.text "Tab 1"]\r
        Daisy.tab [tab.active; prop.text "Tab 2"]\r
        Daisy.tab [prop.text "Tab 3"]\r
    ]\r
]`,(l=c("div",b("tabs",s([["className","tabs-lift"],["children",[c("a",b("tab",f(["children",f("Tab 1")]))),c("a",b("tab",s([["className","tab-active"],["children",f("Tab 2")]]))),c("a",b("tab",f(["children",f("Tab 3")])))]]]))),m.createElement("div",h(),l)))})(),EN=(()=>{let l;return _("Boxed",`Daisy.tabs [\r
    tabs.box\r
    prop.children [\r
        Daisy.tab [prop.text "Tab 1"]\r
        Daisy.tab [tab.active; prop.text "Tab 2"]\r
        Daisy.tab [prop.text "Tab 3"]\r
    ]\r
]`,(l=c("div",b("tabs",s([["className","tabs-box"],["children",[c("a",b("tab",f(["children",f("Tab 1")]))),c("a",b("tab",s([["className","tab-active"],["children",f("Tab 2")]]))),c("a",b("tab",f(["children",f("Tab 3")])))]]]))),m.createElement("div",h(),l)))})(),xN=(()=>{let l;return _("Sizes",`let sizes = [\r
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
]`,(l=_e(I(()=>Xe(u=>{let d;const y=u[1];return ce((d=f(c("div",b("tabs",s([u[0],["className","tabs-lift"],["children",[c("a",b("tab",f(["children",f(y)]))),c("a",b("tab",s([["className","tab-active"],["children",f(y)]]))),c("a",b("tab",f(["children",f(y)])))]]])))),m.createElement("div",h(),...d)))},[[["className","tabs-xs"],"xs"],[["className","tabs-sm"],"sm"],[["className","tabs-md"],"md"],[["className","tabs-lg"],"lg"]]))),m.createElement("div",h(),...l)))})();function SN(){return m.createElement(m.Fragment,h(),gN,vN,NN,EN,xN)}const DN=(()=>{let l,r,u,d,y,g,x,C;return _("Simple",`Daisy.table [\r
    Html.thead [Html.tr [Html.th ""; Html.th "Name"; Html.th "Job"; Html.th "Favorite Color"]]\r
    Html.tbody [\r
        Html.tr [Html.td "1"; Html.td "Cy Ganderton"; Html.td "Quality Control Specialist"; Html.td "Blue"]\r
        Html.tr [Html.td "2"; Html.td "Hart Hagerty"; Html.td "Desktop Support Technician"; Html.td "Purple"]\r
        Html.tr [Html.td "3"; Html.td "Brice Swyre"; Html.td "Tax Accountant"; Html.td "Red"]\r
        Html.tr [Html.td "4"; Html.td "Marjy Ferencz"; Html.td "Office Assistant I"; Html.td "Crimson"]\r
    ]\r
]`,(l=c("table",s([["className","table"],["children",[(r=f((u=s([m.createElement("th",h(),""),m.createElement("th",h(),"Name"),m.createElement("th",h(),"Job"),m.createElement("th",h(),"Favorite Color")]),m.createElement("tr",h(),...u))),m.createElement("thead",h(),...r)),(d=s([(y=s([m.createElement("td",h(),"1"),m.createElement("td",h(),"Cy Ganderton"),m.createElement("td",h(),"Quality Control Specialist"),m.createElement("td",h(),"Blue")]),m.createElement("tr",h(),...y)),(g=s([m.createElement("td",h(),"2"),m.createElement("td",h(),"Hart Hagerty"),m.createElement("td",h(),"Desktop Support Technician"),m.createElement("td",h(),"Purple")]),m.createElement("tr",h(),...g)),(x=s([m.createElement("td",h(),"3"),m.createElement("td",h(),"Brice Swyre"),m.createElement("td",h(),"Tax Accountant"),m.createElement("td",h(),"Red")]),m.createElement("tr",h(),...x)),(C=s([m.createElement("td",h(),"4"),m.createElement("td",h(),"Marjy Ferencz"),m.createElement("td",h(),"Office Assistant I"),m.createElement("td",h(),"Crimson")]),m.createElement("tr",h(),...C))]),m.createElement("tbody",h(),...d))]]])),m.createElement("div",h(),l)))})(),wN=(()=>{let l,r,u,d,y,g,x;return _("Use your favourite color for making row active",`Daisy.table [\r
    Html.thead [Html.tr [Html.th ""; Html.th "Name"; Html.th "Job"; Html.th "Favorite Color"]]\r
    Html.tbody [\r
        Html.tr [Html.td "1"; Html.td "Cy Ganderton"; Html.td "Quality Control Specialist"; Html.td "Blue"]\r
        Html.tr [prop.className "bg-yellow-300"; prop.children [Html.td "2"; Html.td "Hart Hagerty"; Html.td "Desktop Support Technician"; Html.td "Purple"]]\r
        Html.tr [Html.td "3"; Html.td "Brice Swyre"; Html.td "Tax Accountant"; Html.td "Red"]\r
        Html.tr [Html.td "4"; Html.td "Marjy Ferencz"; Html.td "Office Assistant I"; Html.td "Crimson"]\r
    ]\r
]`,(l=c("table",s([["className","table"],["children",[(r=f((u=s([m.createElement("th",h(),""),m.createElement("th",h(),"Name"),m.createElement("th",h(),"Job"),m.createElement("th",h(),"Favorite Color")]),m.createElement("tr",h(),...u))),m.createElement("thead",h(),...r)),(d=s([(y=s([m.createElement("td",h(),"1"),m.createElement("td",h(),"Cy Ganderton"),m.createElement("td",h(),"Quality Control Specialist"),m.createElement("td",h(),"Blue")]),m.createElement("tr",h(),...y)),c("tr",s([["className","bg-yellow-300"],["children",[m.createElement("td",h(),"2"),m.createElement("td",h(),"Hart Hagerty"),m.createElement("td",h(),"Desktop Support Technician"),m.createElement("td",h(),"Purple")]]])),(g=s([m.createElement("td",h(),"3"),m.createElement("td",h(),"Brice Swyre"),m.createElement("td",h(),"Tax Accountant"),m.createElement("td",h(),"Red")]),m.createElement("tr",h(),...g)),(x=s([m.createElement("td",h(),"4"),m.createElement("td",h(),"Marjy Ferencz"),m.createElement("td",h(),"Office Assistant I"),m.createElement("td",h(),"Crimson")]),m.createElement("tr",h(),...x))]),m.createElement("tbody",h(),...d))]]])),m.createElement("div",h(),l)))})(),HN=(()=>{let l,r,u,d,y,g,x;return _("Hover row using classic Tailwind approach",`Daisy.table [\r
    Html.thead [Html.tr [Html.th ""; Html.th "Name"; Html.th "Job"; Html.th "Favorite Color"]]\r
    Html.tbody [\r
        Html.tr [Html.td "1"; Html.td "Cy Ganderton"; Html.td "Quality Control Specialist"; Html.td "Blue"]\r
        Html.tr [prop.className "hover:bg-yellow-300"; prop.children [Html.td "2"; Html.td "Hart Hagerty"; Html.td "Desktop Support Technician"; Html.td "Purple"]]\r
        Html.tr [Html.td "3"; Html.td "Brice Swyre"; Html.td "Tax Accountant"; Html.td "Red"]\r
        Html.tr [Html.td "4"; Html.td "Marjy Ferencz"; Html.td "Office Assistant I"; Html.td "Crimson"]\r
    ]\r
]`,(l=c("table",s([["className","table"],["children",[(r=f((u=s([m.createElement("th",h(),""),m.createElement("th",h(),"Name"),m.createElement("th",h(),"Job"),m.createElement("th",h(),"Favorite Color")]),m.createElement("tr",h(),...u))),m.createElement("thead",h(),...r)),(d=s([(y=s([m.createElement("td",h(),"1"),m.createElement("td",h(),"Cy Ganderton"),m.createElement("td",h(),"Quality Control Specialist"),m.createElement("td",h(),"Blue")]),m.createElement("tr",h(),...y)),c("tr",s([["className","hover:bg-yellow-300"],["children",[m.createElement("td",h(),"2"),m.createElement("td",h(),"Hart Hagerty"),m.createElement("td",h(),"Desktop Support Technician"),m.createElement("td",h(),"Purple")]]])),(g=s([m.createElement("td",h(),"3"),m.createElement("td",h(),"Brice Swyre"),m.createElement("td",h(),"Tax Accountant"),m.createElement("td",h(),"Red")]),m.createElement("tr",h(),...g)),(x=s([m.createElement("td",h(),"4"),m.createElement("td",h(),"Marjy Ferencz"),m.createElement("td",h(),"Office Assistant I"),m.createElement("td",h(),"Crimson")]),m.createElement("tr",h(),...x))]),m.createElement("tbody",h(),...d))]]])),m.createElement("div",h(),l)))})(),_N=(()=>{let l,r,u,d,y,g,x,C;return _("Zebra",`Daisy.table [\r
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
]`,(l=c("table",b("table",s([["className","table-zebra"],["children",[(r=f((u=s([m.createElement("th",h(),""),m.createElement("th",h(),"Name"),m.createElement("th",h(),"Job"),m.createElement("th",h(),"Favorite Color")]),m.createElement("tr",h(),...u))),m.createElement("thead",h(),...r)),(d=s([(y=s([m.createElement("td",h(),"1"),m.createElement("td",h(),"Cy Ganderton"),m.createElement("td",h(),"Quality Control Specialist"),m.createElement("td",h(),"Blue")]),m.createElement("tr",h(),...y)),(g=s([m.createElement("td",h(),"2"),m.createElement("td",h(),"Hart Hagerty"),m.createElement("td",h(),"Desktop Support Technician"),m.createElement("td",h(),"Purple")]),m.createElement("tr",h(),...g)),(x=s([m.createElement("td",h(),"3"),m.createElement("td",h(),"Brice Swyre"),m.createElement("td",h(),"Tax Accountant"),m.createElement("td",h(),"Red")]),m.createElement("tr",h(),...x)),(C=s([m.createElement("td",h(),"4"),m.createElement("td",h(),"Marjy Ferencz"),m.createElement("td",h(),"Office Assistant I"),m.createElement("td",h(),"Crimson")]),m.createElement("tr",h(),...C))]),m.createElement("tbody",h(),...d))]]]))),m.createElement("div",h(),l)))})(),TN=(()=>{let l,r,u,d,y,g,x,C;return _("Table With Visuals",`let row (url: string, name: string, country: string, group: string, title: string, color: string) =\r
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
]`,(l=(E=>{let R,q,F,Y,Z;const re=s([(R=f(c("input",b("checkbox",f(["type","checkbox"])))),m.createElement("td",h(),...R)),(q=f(c("div",s([["className",pn(" ",["flex","items-center","space-x-3"])],["children",[c("div",s([["className","avatar"],["children",[c("div",s([rt(["className","mask mask-squircle"],["className","w-12 h-12"]),["children",[c("img",f(["src",E[0]]))]]]))]]])),(F=s([m.createElement("div",h(),E[1]),m.createElement("div",h(),E[2])]),m.createElement("div",h(),...F))]]]))),m.createElement("td",h(),...q)),(Y=s([m.createElement("span",h(),E[3]),c("br",Se()),c("div",b("badge",s([["className","badge-sm"],["className","badge-outline"],["children",f(E[4])]])))]),m.createElement("td",h(),...Y)),m.createElement("td",h(),E[5]),(Z=f(c("button",b("btn",s([["className","btn-ghost"],["className","btn-xs"],["children",f("Details")]])))),m.createElement("td",h(),...Z))]);return m.createElement("tr",h(),...re)}),r=c("table",b("table",f(["children",[(u=f((d=s([(y=f(c("input",b("checkbox",f(["type","checkbox"])))),m.createElement("th",h(),...y)),m.createElement("th",h(),"Name"),m.createElement("th",h(),"Job"),m.createElement("th",h(),"Favorite Color"),m.createElement("th",h(),"")]),m.createElement("tr",h(),...d))),m.createElement("thead",h(),...u)),(g=s([l(["https://img.daisyui.com/images/profile/demo/2@94.webp","Hart Hagerty","United States","Zemlak, Daniel and Leannon","Desktop Support Technician","Purple"]),l(["https://img.daisyui.com/images/profile/demo/3@94.webp","Brice Swyre","China","Carroll Group","Tax Accountant","Red"]),l(["https://img.daisyui.com/images/profile/demo/4@94.webp","Marjy Ferencz","Russia","Rowe-Schoen","Office Assistant I","Crimson"]),l(["https://img.daisyui.com/images/profile/demo/5@94.webp","Yancy Tear","Brazil","Wyman-Ledner","Community Outreach Specialist","Indigo"])]),m.createElement("tbody",h(),...g)),(x=f((C=s([m.createElement("th",h(),""),m.createElement("th",h(),"Name"),m.createElement("th",h(),"Job"),m.createElement("th",h(),"Favorite Color"),m.createElement("th",h(),"")]),m.createElement("tr",h(),...C))),m.createElement("thead",h(),...x))]]))),m.createElement("div",h(),r)))})(),kN=(()=>{let l,r,u,d,y,g,x;return _("Very tiny table",`let header = ["";"NAME";"JOB";"COMPANY";"LOCATION";"LAST LOGIN";"FAVORITE COLOR"]\r
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
]`,(l=s(["","NAME","JOB","COMPANY","LOCATION","LAST LOGIN","FAVORITE COLOR"]),r=c("table",b("table",s([["className","table-xs"],["children",[(u=f((d=_e(I(()=>Rn(T=>m.createElement("th",h(),T),l))),m.createElement("tr",h(),...d))),m.createElement("thead",h(),...u)),(y=_e(I(()=>Rn(T=>{const E=_e(I(()=>Rn(R=>m.createElement("td",h(),R),T)));return m.createElement("tr",h(),...E)},[s(["1","Cy Ganderton","Quality Control Specialist","Littel; Schaden and Vandervort","Canada","12/16/2020","Blue"]),s(["2","Hart Hagerty","Desktop Support Technician","Zemlak; Daniel and Leannon","United States","12/5/2020","Purple"]),s(["3","Brice Swyre","Tax Accountant","Carroll Group","China","8/15/2020","Red"]),s(["4","Marjy Ferencz","Office Assistant I","Rowe-Schoen","Russia","3/25/2021","Crimson"]),s(["5","Yancy Tear","Community Outreach Specialist","Wyman-Ledner","Brazil","5/22/2020","Indigo"]),s(["6","Irma Vasilik","Editor","Wiza; Bins and Emard","Venezuela","12/8/2020","Purple"]),s(["7","Meghann Durtnal","Staff Accountant IV","Schuster-Schimmel","Philippines","2/17/2021","Yellow"]),s(["8","Sammy Seston","Accountant I","O'Hara; Welch and Keebler","Indonesia","5/23/2020","Crimson"]),s(["9","Lesya Tinham","Safety Technician IV","Turner-Kuhlman","Philippines","2/21/2021","Maroon"]),s(["10","Zaneta Tewkesbury","VP Marketing","Sauer LLC","Chad","6/23/2020","Green"]),s(["11","Andy Tipple","Librarian","Hilpert Group","Poland","7/9/2020","Indigo"]),s(["12","Sophi Biles","Recruiting Manager","Gutmann Inc","Indonesia","2/12/2021","Maroon"]),s(["13","Florida Garces","Web Developer IV","Gaylord; Pacocha and Baumbach","Poland","5/31/2020","Purple"]),s(["14","Maribeth Popping","Analyst Programmer","Deckow-Pouros","Portugal","4/27/2021","Aquamarine"]),s(["15","Moritz Dryburgh","Dental Hygienist","Schiller; Cole and Hackett","Sri Lanka","8/8/2020","Crimson"]),s(["16","Reid Semiras","Teacher","Sporer; Sipes and Rogahn","Poland","7/30/2020","Green"]),s(["17","Alec Lethby","Teacher","Reichel; Glover and Hamill","China","2/28/2021","Khaki"]),s(["18","Aland Wilber","Quality Control Specialist","Kshlerin; Rogahn and Swaniawski","Czech Republic","9/29/2020","Purple"]),s(["19","Teddie Duerden","Staff Accountant III","Pouros; Ullrich and Windler","France","10/27/2020","Aquamarine"]),s(["20","Lorelei Blackstone","Data Coordiator","Witting; Kutch and Greenfelder","Kazakhstan","6/3/2020","Red"])]))),m.createElement("tbody",h(),...y)),(g=f((x=_e(I(()=>Rn(T=>m.createElement("th",h(),T),l))),m.createElement("tr",h(),...x))),m.createElement("tfoot",h(),...g))]]]))),m.createElement("div",h(),r)))})();function CN(){return m.createElement(m.Fragment,h(),DN,wN,HN,_N,TN,kN)}const zN=_("If a checked checkbox input or a checked radio input with theme-controller class exists in the page, The page will have the same theme as that input's value.",`Daisy.toggle [\r
    theme.controller\r
    prop.value "synthwave"\r
]`,c("input",b("toggle",s([["type","checkbox"],["className","theme-controller"],["value","synthwave"]]))));function AN(){return m.createElement(m.Fragment,h(),zN)}const MN=(()=>{let l,r,u;return _("Create easy timeline",`Daisy.timeline [\r
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
]`,c("ul",s([["className","timeline"],["children",[(l=s([c("div",s([["className","timeline-start"],["children",f("1984")]])),c("div",s([["className","timeline-middle"],["children",[c("i",f(["className","fa-solid fa-check-circle"]))]]])),c("div",b("timeline-end",s([["className","timeline-box"],["children",f("First Macintosh computer")]]))),c("hr",Se())]),m.createElement("li",h(),...l)),(r=s([c("hr",Se()),c("div",s([["className","timeline-start"],["children",f("1998")]])),c("div",s([["className","timeline-middle"],["children",[c("i",f(["className","fa-solid fa-check-circle"]))]]])),c("div",b("timeline-end",s([["className","timeline-box"],["children",f("iMac")]]))),c("hr",Se())]),m.createElement("li",h(),...r)),(u=s([c("hr",Se()),c("div",s([["className","timeline-start"],["children",f("2001")]])),c("div",s([["className","timeline-middle"],["children",[c("i",f(["className","fa-solid fa-check-circle"]))]]])),c("div",b("timeline-end",s([["className","timeline-box"],["children",f("iPod")]])))]),m.createElement("li",h(),...u))]]])))})(),ON=(()=>{let l,r,u;return _("Timeline can be also vertical and from both sides",`Daisy.timeline [\r
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
]`,c("ul",b("timeline",s([["className","timeline-vertical"],["children",[(l=s([c("div",b("timeline-start",s([["className","timeline-box"],["children",f("1984")]]))),c("div",s([["className","timeline-middle"],["children",[c("i",f(["className","fa-solid fa-check-circle"]))]]])),c("hr",Se())]),m.createElement("li",h(),...l)),(r=s([c("hr",Se()),c("div",s([["className","timeline-middle"],["children",[c("i",f(["className","fa-solid fa-check-circle"]))]]])),c("div",b("timeline-end",s([["className","timeline-box"],["children",f("iMac")]]))),c("hr",f(["className","bg-primary"]))]),m.createElement("li",h(),...r)),(u=s([c("hr",f(["className","bg-primary"])),c("div",b("timeline-start",s([["className","timeline-box"],["children",f("iPod")]]))),c("div",s([["className","timeline-middle"],["children",[c("i",f(["className","fa-solid fa-check-circle text-primary"]))]]]))]),m.createElement("li",h(),...u))]]]))))})();function RN(){return m.createElement(m.Fragment,h(),MN,ON)}function Xo(l){return c("div",s([["className","relative"],["children",f(l)]]))}const UN=_("In the middle",`Daisy.toast [\r
    toast.center\r
    toast.middle\r
    prop.children [\r
        Daisy.alert [\r
            alert.info\r
            prop.text "New mail arrived."\r
        ]\r
    ]\r
]`,Xo(c("div",b("toast",s([["className","toast-center"],["className","toast-middle"],["className","absolute"],["children",[c("div",b("alert",s([["className","alert-info"],["children",f("New mail arrived.")]])))]]]))))),BN=_("On the bottom right",`Daisy.toast [\r
    toast.bottom\r
    prop.children [\r
        Daisy.alert [\r
            alert.warning\r
            prop.text "F# is awesome!"\r
        ]\r
    ]\r
]`,Xo(c("div",b("toast",s([["className","toast-bottom"],["className","absolute"],["children",[c("div",b("alert",s([["className","alert-warning"],["children",f("F# is awesome!")]])))]]]))))),qN=_("Top left",`Daisy.toast [\r
    toast.top\r
    toast.start\r
    prop.children [\r
        Daisy.alert [\r
            alert.success\r
            prop.text "Payment successful"\r
        ]\r
    ]\r
]`,Xo(c("div",b("toast",s([["className","toast-top"],["className","toast-start"],["className","absolute"],["children",[c("div",b("alert",s([["className","alert-success"],["children",f("Payment successful")]])))]]])))));function LN(){return m.createElement(m.Fragment,h(),UN,BN,qN)}const GN=_("Simple",`Daisy.tooltip [\r
    tooltip.text "hello"\r
    prop.children [Daisy.button.button "Hover me"]\r
]`,(()=>{const l=c("div",b("tooltip",s([["data-tip","hello"],["children",[c("button",s([["className","btn"],["children",f("Hover me")]]))]]])));return m.createElement("div",h(),l)})()),VN=(()=>{let l;return _("Directions",`let directions =\r
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
]`,(l=_e(I(()=>Xe(u=>{const d=u[1];return ce(c("div",b("tooltip",s([["className","ml-8"],["data-tip",d],u[0],["children",[c("button",s([["className","btn"],["children",f(d)]]))]]]))))},[[["className","tooltip-left"],"left"],[["className","tooltip-bottom"],"bottom"],[["className","tooltip-right"],"right"]]))),m.createElement("div",h(),...l)))})(),jN=(()=>{let l;return _("Colors",`let colors =\r
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
]`,(l=_e(I(()=>Xe(u=>{const d=u[2];return ce(c("div",b("tooltip",s([["className","mt-8"],u[0],["className","tooltip-open"],["data-tip",d],["children",[c("button",b("btn",s([u[1],["children",f(d)]])))]]]))))},[[["className","tooltip-primary"],["className","btn-primary"],"primary"],[["className","tooltip-secondary"],["className","btn-secondary"],"secondary"],[["className","tooltip-accent"],["className","btn-accent"],"accent"],[["className","tooltip-info"],["className","btn-info"],"info"],[["className","tooltip-success"],["className","btn-success"],"success"],[["className","tooltip-warning"],["className","btn-warning"],"warning"],[["className","tooltip-error"],["className","btn-error"],"error"]]))),m.createElement("div",h(),...l)))})();function YN(){return m.createElement(m.Fragment,h(),GN,VN,jN)}const QN=(()=>{let l;return _("Validator with hint - try typing an invalid email address and then click away",`Html.div [\r
    Daisy.validator.email [\r
        prop.required true\r
        prop.placeholder "mail@site.com"\r
    ]\r
    Daisy.validatorHint "Enter valid email address"\r
]`,(l=s([c("input",b("input validator",s([["type","email"],["required",!0],["placeholder","mail@site.com"]]))),c("div",s([["className","validator-hint"],["children",f("Enter valid email address")]]))]),m.createElement("div",h(),...l)))})(),XN=(()=>{let l;return _("Password validator with hint - try typing something and then click away",`Html.div [\r
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
]`,(l=s([c("input",b("input validator",s([["type","password"],["required",!0],["placeholder","Password"],["minLength",8],["pattern",/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/gu],["title","Must be more than 8 characters, including number, lowercase letter, uppercase letter"]]))),c("div",s([["className","validator-hint"],["children",["Must be more than 8 characters, including",c("br",Se()),"At least one number",c("br",Se()),"At least one lowercase letter",c("br",Se()),"At least one uppercase number",c("br",Se())]]]))]),m.createElement("div",h(),...l)))})(),ZN=(()=>{let l;return _("Toggle validator with hint - try toggling and untoggling",`Html.div [\r
    Daisy.validator.toggle [\r
        prop.required true\r
        prop.title "Required"\r
    ]\r
    Daisy.validatorHint "Required"\r
]`,(l=s([c("input",b("toggle validator",s([["type","checkbox"],["required",!0],["title","Required"]]))),c("div",s([["className","validator-hint"],["children",f("Required")]]))]),m.createElement("div",h(),...l)))})();function KN(){return m.createElement(m.Fragment,h(),QN,XN,ZN)}const JN=_("File Input with border",`Daisy.fieldset [\r
    Daisy.fieldsetLabel "File Selection"\r
    Daisy.file [file.bordered]\r
]`,(()=>{const l=c("fieldset",s([["className","fieldset"],["children",[c("label",s([["className","fieldset-label"],["children",f("File Selection")]])),c("input",b("file-input",s([["type","file"],["className","file-input-bordered"]])))]]]));return m.createElement("div",h(),l)})()),FN=_("File Input with border",`Daisy.card [\r
    prop.className "p-10 bg-base-200"\r
    prop.children [\r
        Daisy.fieldset [\r
            Daisy.fieldsetLabel "File Selection"\r
            Daisy.file [file.bordered]\r
        ]\r
    ]\r
]`,c("div",b("card",s([["className","p-10 bg-base-200"],["children",[c("fieldset",s([["className","fieldset"],["children",[c("label",s([["className","fieldset-label"],["children",f("File Selection")]])),c("input",b("file-input",s([["type","file"],["className","file-input-bordered"]])))]]]))]]])))),$N=_("File Input ghost (no background)",`Daisy.card [\r
    prop.className "p-10 bg-base-200"\r
    prop.children [\r
        Daisy.fieldset [\r
            Daisy.fieldsetLabel "File Selection"\r
            Daisy.file [file.ghost]\r
        ]\r
    ]\r
]`,c("div",b("card",s([["className","p-10 bg-base-200"],["children",[c("fieldset",s([["className","fieldset"],["children",[c("label",s([["className","fieldset-label"],["children",f("File Selection")]])),c("input",b("file-input",s([["type","file"],["className","file-input-ghost"]])))]]]))]]])))),WN=_("File Input ghost (no background)",`Daisy.fieldset [\r
    Daisy.fieldsetLabel "Disabled file"\r
    Daisy.file [file.bordered; prop.disabled true]\r
]`,c("fieldset",s([["className","fieldset"],["children",[c("label",s([["className","fieldset-label"],["children",f("Disabled file")]])),c("input",b("file-input",s([["type","file"],["className","file-input-bordered"],["disabled",!0]])))]]]))),IN=_("File Input with colors",`let colors = [\r
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
]`,c("fieldset",s([["className","fieldset"],["children",_e(I(()=>Xe(r=>Je(ce(c("label",s([["className","fieldset-label"],["children",f(r[1])]]))),I(()=>ce(c("input",b("file-input",s([["type","file"],r[0],["className","file-input-bordered"]])))))),[[["className","file-input-primary"],"primary"],[["className","file-input-secondary"],"secondary"],[["className","file-input-accent"],"accent"],[["className","file-input-info"],"info"],[["className","file-input-success"],"success"],[["className","file-input-warning"],"warning"],[["className","file-input-error"],"error"]])))]]))),PN=_("File Input with sizes",`let sizes = [\r
    file.xs, "xs"\r
    file.sm, "sm"\r
    file.md, "md"\r
    file.lg, "lg"\r
]\r
Daisy.fieldset [\r
    for size, sizeText in sizes do\r
        Daisy.fieldsetLabel sizeText\r
        Daisy.file [size; file.bordered]\r
]`,c("fieldset",s([["className","fieldset"],["children",_e(I(()=>Xe(r=>Je(ce(c("label",s([["className","fieldset-label"],["children",f(r[1])]]))),I(()=>ce(c("input",b("file-input",s([["type","file"],r[0],["className","file-input-bordered"]])))))),[[["className","file-input-xs"],"xs"],[["className","file-input-sm"],"sm"],[["className","file-input-md"],"md"],[["className","file-input-lg"],"lg"]])))]]))),e2=_("File Input with sizes",`Daisy.fieldset [\r
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
]`,c("fieldset",s([["className","fieldset"],["children",[c("label",s([["className","fieldset-label"],["children",f("Connected")]])),c("div",s([["className","relative"],["children",[c("input",b("file-input",s([["type","file"],["className","file-input-bordered"],["className","file-input-primary"],["className","w-full pr-16"]]))),c("button",b("btn",s([["className","btn-primary"],["className","absolute top-0 right-0 rounded-l-none"],["children",f("Upload")]])))]]]))]]])));function t2(){return m.createElement(m.Fragment,h(),JN,FN,$N,WN,IN,PN,e2)}const n2=_("Basic","Daisy.checkbox []",c("input",b("checkbox",f(["type","checkbox"])))),a2=_("Checked","Daisy.checkbox [prop.defaultChecked true]",c("input",b("checkbox",s([["type","checkbox"],["defaultChecked",!0]])))),l2=_("Basic Label",`Daisy.fieldset [\r
    Daisy.fieldsetLabel [\r
        prop.className "justify-between"\r
        prop.children [\r
            Html.text "Remember me"\r
            Daisy.checkbox []\r
        ]\r
    ]\r
]`,c("fieldset",s([["className","fieldset"],["children",[c("label",b("fieldset-label",s([["className","justify-between"],["children",["Remember me",c("input",b("checkbox",f(["type","checkbox"])))]]])))]]]))),r2=(()=>{let l;return _("All Sizes and Colors",`let colors = [\r
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
]`,(l=_e(I(()=>Xe(u=>{const d=u[1],y=u[0];return Xe(g=>{const x=g[1],C=g[0];return Je(ce(c("fieldset",s([["className","fieldset"],["children",[c("label",b("fieldset-label",s([["className","justify-between"],["children",[Tr(_r("%s - %s"))(d)(x),c("input",b("checkbox",s([["type","checkbox"],C,y,["defaultChecked",!0]])))]]])))]]]))),I(()=>ce(c("fieldset",s([["className","fieldset"],["children",[c("label",b("fieldset-label",s([["className","justify-between"],["children",[Tr(_r("%s - %s (disabled)"))(d)(x),c("input",b("checkbox",s([["type","checkbox"],C,y,["disabled",!0],["defaultChecked",!0]])))]]])))]]])))))},[[["className","checkbox-primary"],"primary"],[["className","checkbox-secondary"],"secondary"],[["className","checkbox-accent"],"accent"]])},[[["className","checkbox-lg"],"lg"],[["className","checkbox-md"],"md"],[["className","checkbox-sm"],"sm"],[["className","checkbox-xs"],"xs"]]))),m.createElement("div",h(),...l)))})();function i2(){return m.createElement(m.Fragment,h(),n2,a2,l2,r2)}const c2=(()=>{let l;return _("Input with border",`Daisy.fieldset [\r
    Daisy.fieldsetLabel "Username"\r
    Daisy.input [ prop.placeholder "Username" ]\r
]`,(l=c("fieldset",s([["className","fieldset"],["children",[c("label",s([["className","fieldset-label"],["children",f("Username")]])),c("input",b("input",s([["type","text"],["placeholder","Username"]])))]]])),m.createElement("div",h(),l)))})(),s2=_("Input with border",`Daisy.card [\r
    prop.className "p-10 bg-base-200"\r
    prop.children [\r
        Daisy.fieldset [\r
            Daisy.fieldsetLabel "Username"\r
            Daisy.input [prop.placeholder "Username"]\r
        ]\r
    ]\r
]`,c("div",b("card",s([["className","p-10 bg-base-200"],["children",[c("fieldset",s([["className","fieldset"],["children",[c("label",s([["className","fieldset-label"],["children",f("Username")]])),c("input",b("input",s([["type","text"],["placeholder","Username"]])))]]]))]]])))),o2=_("Input ghost (no background)",`Daisy.card [\r
    prop.className "p-10 bg-base-200"\r
    prop.children [\r
        Daisy.fieldset [\r
            Daisy.fieldsetLabel "Username"\r
            Daisy.input [input.ghost; prop.placeholder "Username"]\r
        ]\r
    ]\r
]`,c("div",b("card",s([["className","p-10 bg-base-200"],["children",[c("fieldset",s([["className","fieldset"],["children",[c("label",s([["className","fieldset-label"],["children",f("Username")]])),c("input",b("input",s([["type","text"],["className","input-ghost"],["placeholder","Username"]])))]]]))]]])))),u2=_("Input ghost (no background)",`Daisy.fieldset [\r
    Daisy.fieldsetLabel "Disabled input"\r
    Daisy.input [prop.disabled true; prop.placeholder "Username"]\r
]`,c("fieldset",s([["className","fieldset"],["children",[c("label",s([["className","fieldset-label"],["children",f("Disabled input")]])),c("input",b("input",s([["type","text"],["disabled",!0],["placeholder","Username"]])))]]]))),d2=_("Input with colors",`let colors = [\r
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
]`,c("fieldset",s([["className","fieldset"],["children",_e(I(()=>Xe(r=>Je(ce(c("label",s([["className","fieldset-label"],["children",f(r[1])]]))),I(()=>ce(c("input",b("input",s([["type","text"],r[0],["placeholder","Username"]])))))),[[["className","input-primary"],"primary"],[["className","input-secondary"],"secondary"],[["className","input-accent"],"accent"],[["className","input-info"],"info"],[["className","input-success"],"success"],[["className","input-warning"],"warning"],[["className","input-error"],"error"]])))]]))),m2=_("Input with sizes",`let sizes = [\r
    input.xs, "xs"\r
    input.sm, "sm"\r
    input.md, "md"\r
    input.lg, "lg"\r
]\r
Daisy.fieldset [\r
    for size, sizeText in sizes do\r
        Daisy.fieldsetLabel sizeText\r
        Daisy.input [size; prop.placeholder "Username"]\r
]`,c("fieldset",s([["className","fieldset"],["children",_e(I(()=>Xe(r=>Je(ce(c("label",s([["className","fieldset-label"],["children",f(r[1])]]))),I(()=>ce(c("input",b("input",s([["type","text"],r[0],["placeholder","Username"]])))))),[[["className","input-xs"],"xs"],[["className","input-sm"],"sm"],[["className","input-md"],"md"],[["className","input-lg"],"lg"]])))]]))),f2=_("Input with sizes",`Daisy.fieldset [\r
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
]`,c("fieldset",s([["className","fieldset"],["children",[c("label",s([["className","fieldset-label"],["children",f("Connected")]])),c("div",s([["className","relative"],["children",[c("input",b("input",s([["type","text"],["className","input-primary"],["placeholder","Search"],["className","w-full pr-16"]]))),c("button",b("btn",s([["className","btn-primary"],["className","absolute top-0 right-0 rounded-l-none"],["children",f("Go")]])))]]]))]]])));function p2(){return m.createElement(m.Fragment,h(),c2,s2,o2,u2,d2,m2,f2)}const h2=_("Colors",`Daisy.card [\r
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
]`,c("div",b("card",f(["children",[c("fieldset",s([["className","fieldset"],["children",[c("label",b("fieldset-label",s([["className","justify-between"],["children",["Neutral",c("input",b("radio",s([["type","radio"],["name","colors"]])))]]])))]]])),c("fieldset",s([["className","fieldset"],["children",[c("label",b("fieldset-label",s([["className","justify-between"],["children",["Primary",c("input",b("radio",s([["type","radio"],["className","radio-primary"],["name","colors"]])))]]])))]]])),c("fieldset",s([["className","fieldset"],["children",[c("label",b("fieldset-label",s([["className","justify-between"],["children",["Secondary",c("input",b("radio",s([["type","radio"],["className","radio-secondary"],["name","colors"]])))]]])))]]])),c("fieldset",s([["className","fieldset"],["children",[c("label",b("fieldset-label",s([["className","justify-between"],["children",["Accent",c("input",b("radio",s([["type","radio"],["className","radio-accent"],["name","colors"]])))]]])))]]])),c("fieldset",s([["className","fieldset"],["children",[c("label",b("fieldset-label",s([["className","justify-between"],["children",["Disabled",c("input",b("radio",s([["type","radio"],["disabled",!0],["name","colors"]])))]]])))]]]))]])))),b2=(()=>{let l;return _("Sizes",`Html.div [\r
    Daisy.fieldset [Daisy.radio [radio.xs]]\r
    Daisy.fieldset [Daisy.radio [radio.sm]]\r
    Daisy.fieldset [Daisy.radio [radio.md]]\r
    Daisy.fieldset [Daisy.radio [radio.lg]]\r
]`,(l=s([c("fieldset",s([["className","fieldset"],["children",[c("input",b("radio",s([["type","radio"],["name","sizes"],["className","radio-xs"]])))]]])),c("fieldset",s([["className","fieldset"],["children",[c("input",b("radio",s([["type","radio"],["name","sizes"],["className","radio-sm"]])))]]])),c("fieldset",s([["className","fieldset"],["children",[c("input",b("radio",s([["type","radio"],["name","sizes"],["className","radio-md"]])))]]])),c("fieldset",s([["className","fieldset"],["children",[c("input",b("radio",s([["type","radio"],["name","sizes"],["className","radio-lg"]])))]]]))]),m.createElement("div",h(),...l)))})();function y2(){return m.createElement(m.Fragment,h(),h2,b2)}const g2=(()=>{let l;return _("Colors",`Html.div [\r
    Daisy.range [prop.max 100; prop.defaultValue 40]\r
    Daisy.range [prop.max 100; prop.defaultValue 50; range.primary]\r
    Daisy.range [prop.max 100; prop.defaultValue 60; range.secondary]\r
    Daisy.range [prop.max 100; prop.defaultValue 70; range.accent]\r
]`,(l=s([c("input",b("range",s([["type","range"],["max",100],["defaultValue",40]]))),c("input",b("range",s([["type","range"],["max",100],["defaultValue",50],["className","range-primary"]]))),c("input",b("range",s([["type","range"],["max",100],["defaultValue",60],["className","range-secondary"]]))),c("input",b("range",s([["type","range"],["max",100],["defaultValue",70],["className","range-accent"]])))]),m.createElement("div",h(),...l)))})(),v2=(()=>{let l;return _("Sizes",`Html.div [\r
    Daisy.range [prop.max 100; prop.defaultValue 40; range.xs]\r
    Daisy.range [prop.max 100; prop.defaultValue 50; range.sm]\r
    Daisy.range [prop.max 100; prop.defaultValue 60; range.md]\r
    Daisy.range [prop.max 100; prop.defaultValue 70; range.lg]\r
]`,(l=s([c("input",b("range",s([["type","range"],["max",100],["defaultValue",40],["className","range-xs"]]))),c("input",b("range",s([["type","range"],["max",100],["defaultValue",50],["className","range-sm"]]))),c("input",b("range",s([["type","range"],["max",100],["defaultValue",60],["className","range-md"]]))),c("input",b("range",s([["type","range"],["max",100],["defaultValue",70],["className","range-lg"]])))]),m.createElement("div",h(),...l)))})();function N2(){return m.createElement(m.Fragment,h(),g2,v2)}const E2=_("Basic",`Daisy.select [\r
    prop.className "w-full max-w-xs"\r
    prop.children [\r
        Html.option "Choose your superpower"\r
        Html.option "telekenesis"\r
        Html.option "time travel"\r
        Html.option "invisibility"\r
    ]\r
]`,c("select",b("select",s([["className","w-full max-w-xs"],["children",[m.createElement("option",h(),"Choose your superpower"),m.createElement("option",h(),"telekenesis"),m.createElement("option",h(),"time travel"),m.createElement("option",h(),"invisibility")]]])))),x2=(()=>{let l;return _("Colors",`let colors = [\r
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
]`,(l=_e(I(()=>Xe(u=>ce(c("select",b("select",s([u[0],["className","w-full max-w-xs"],["children",[m.createElement("option",h(),u[1]),m.createElement("option",h(),"telekenesis"),m.createElement("option",h(),"time travel"),m.createElement("option",h(),"invisibility")]]])))),[[["className","select-primary"],"primary"],[["className","select-secondary"],"secondary"],[["className","select-accent"],"accent"],[["className","select-ghost"],"ghost"],[["className","select-error"],"error"],[["className","select-info"],"info"],[["className","select-success"],"success"],[["className","select-warning"],"warning"]]))),m.createElement("div",h(),...l)))})(),S2=(()=>{let l;return _("Sizes",`let colors = [\r
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
]`,(l=_e(I(()=>Xe(u=>ce(c("select",b("select",s([u[0],["className","w-full max-w-xs"],["children",[m.createElement("option",h(),u[1]),m.createElement("option",h(),"telekenesis"),m.createElement("option",h(),"time travel"),m.createElement("option",h(),"invisibility")]]])))),[[["className","select-xs"],"xs"],[["className","select-sm"],"sm"],[["className","select-md"],"md"],[["className","select-lg"],"lg"]]))),m.createElement("div",h(),...l)))})(),D2=_("Disabled",`Daisy.select [\r
    prop.disabled true\r
    prop.className "w-full max-w-xs"\r
    prop.children [\r
        Html.option "Choose your superpower"\r
        Html.option "telekinesis"\r
        Html.option "time travel"\r
        Html.option "invisibility"\r
    ]\r
]\r
`,c("select",b("select",s([["disabled",!0],["className","w-full max-w-xs"],["children",[m.createElement("option",h(),"Choose your superpower"),m.createElement("option",h(),"telekinesis"),m.createElement("option",h(),"time travel"),m.createElement("option",h(),"invisibility")]]]))));function w2(){return m.createElement(m.Fragment,h(),E2,x2,S2,D2)}const H2=_("Basic",`Daisy.fieldset [\r
    Daisy.fieldsetLabel "Your bio"\r
    Daisy.textarea [\r
        prop.placeholder "Bio"\r
        prop.className "h-24"\r
    ]\r
]`,c("fieldset",s([["className","fieldset"],["children",[c("label",s([["className","fieldset-label"],["children",f("Your bio")]])),c("textarea",b("textarea",s([["placeholder","Bio"],["className","h-24"]])))]]]))),_2=(()=>{let l;return _("Colors",`let colors = [\r
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
]`,(l=_e(I(()=>Xe(u=>{const d=u[1];return ce(c("fieldset",s([["className","fieldset"],["children",[c("label",s([["className","fieldset-label"],["children",f(d)]])),c("textarea",b("textarea",s([u[0],["placeholder",d],["className","h-24"]])))]]])))},[[["className","textarea-primary"],"primary"],[["className","textarea-secondary"],"secondary"],[["className","textarea-accent"],"accent"],[["className","textarea-info"],"info"],[["className","textarea-success"],"success"],[["className","textarea-warning"],"warning"],[["className","textarea-error"],"error"]]))),m.createElement("div",h(),...l)))})();function T2(){return m.createElement(m.Fragment,h(),H2,_2)}const k2=_("Basic","Daisy.toggle []",c("input",b("toggle",f(["type","checkbox"])))),C2=_("Toggle with label and container",`Daisy.card [\r
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
]`,c("div",b("card",s([["className","card-border"],["children",[c("fieldset",s([["className","fieldset"],["children",[c("label",b("fieldset-label",s([["className","justify-between"],["children",["Remember me",c("input",b("toggle",f(["type","checkbox"])))]]])))]]]))]]])))),z2=_("Toggle with label and container",`let colors = [\r
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
]`,c("div",b("card",s([["className","card-border"],["children",_e(I(()=>Xe(r=>ce(c("fieldset",s([["className","fieldset"],["children",[c("label",b("fieldset-label",s([["className","justify-between"],["children",[r[1],c("input",b("toggle",s([["type","checkbox"],r[0],["defaultChecked",!0]])))]]])))]]]))),[[["className","toggle-primary"],"primary"],[["className","toggle-secondary"],"secondary"],[["className","toggle-accent"],"accent"]])))]]))));function A2(){return m.createElement(m.Fragment,h(),k2,C2,z2)}const M2=_("No prefix",'Daisy.mockupCode [Html.pre [Html.code [prop.text "npm i daisyui"]]]',c("div",s([["className","mockup-code"],["children",[(()=>{const l=f(c("code",f(["children",f("npm i daisyui")])));return m.createElement("pre",h(),...l)})()]]]))),O2=_("Prefix",`Daisy.mockupCode [\r
    Html.pre [\r
        mockupCode.prefix "$"\r
        prop.children [\r
            Html.code [prop.text "npm i daisyui"]\r
        ]\r
    ]\r
]`,c("div",s([["className","mockup-code"],["children",[c("pre",s([["data-prefix","$"],["children",[c("code",f(["children",f("npm i daisyui")]))]]]))]]])));function R2(){return m.createElement(m.Fragment,h(),M2,O2)}const U2=(()=>{let l;return _("iPhone mockup",`Html.div [\r
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
]`,(l=f(c("div",b("mockup-phone",s([["className","bg-base-300"],["children",[c("div",b("mockup-phone-camera",Se())),c("div",b("mockup-phone-display",s([["className","grid place-content-center"],["children",f("Hi.")]])))]]])))),m.createElement("div",h(),...l)))})(),B2=(()=>{let l;return _("iPhone with color",`Html.div [\r
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
]`,(l=f(c("div",b("mockup-phone",s([["className","bg-base-300"],["className","border-primary"],["children",[c("div",b("mockup-phone-camera",Se())),c("div",b("mockup-phone-display",s([["className","grid place-content-center"],["children",f("Hi.")]])))]]])))),m.createElement("div",h(),...l)))})(),q2=(()=>{let l;return _("Phone sizes",`let phones = [\r
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
]`,(l=_e(I(()=>Xe(u=>ce(c("div",b("mockup-phone",s([["className","bg-base-300"],u[2],["children",[c("div",b("mockup-phone-camera",Se())),c("div",b("mockup-phone-display",s([["className",Go("grid place-content-center ",...u[0])],["children",f(u[1])]])))]]])))),[["w-[320px] h-[568px]","phone1",["className","border-primary"]],["w-[375px] h-[667px]","phone2",["className","border-accent"]],["w-[414px] h-[736px]","phone3",["className","border-error"]],["w-[375px] h-[812px]","phone4",["className","border-info"]],["w-[414px] h-[896px]","phone5",["className","border-success"]],["w-[320px] h-[1024px]","phone6",["className","border-warning"]]]))),m.createElement("div",h(),...l)))})();function L2(){return m.createElement(m.Fragment,h(),U2,B2,q2)}const G2=(()=>{let l;return _("Simple",`Daisy.mockupWindow [\r
    prop.className "border" ++ color.borderBase300\r
    prop.children [\r
        Html.div [\r
            prop.className "flex justify-center px-4 py-16 border-t border-base-300"\r
            prop.text "Hello!"\r
        ]\r
    ]\r
]]`,(l=c("div",b("mockup-window",s([rt(["className","border"],["className","border-base-300"]),["children",[c("div",s([["className","flex justify-center px-4 py-16 border-t border-base-300"],["children",f("Hello!")]]))]]]))),m.createElement("div",h(),l)))})(),V2=(()=>{let l;return _("With background color",`Daisy.mockupWindow [\r
    color.bgBase300\r
    prop.children [\r
        Html.div [\r
            prop.className "flex justify-center px-4 py-16" ++ color.bgBase200\r
            prop.text "Hello!"\r
        ]\r
    ]\r
]`,(l=c("div",b("mockup-window",s([["className","bg-base-300"],["children",[c("div",s([rt(["className","flex justify-center px-4 py-16"],["className","bg-base-200"]),["children",f("Hello!")]]))]]]))),m.createElement("div",h(),l)))})();function j2(){return m.createElement(m.Fragment,h(),G2,V2)}function Y2(){const l=[c("div",s([["className","description"],["children",["First of all you need to follow the ",c("a",s([["className","link"],["href","https://daisyui.com/docs/install"],["children",f("DaisyUI installation steps")]]))," and then proceed with installing ",c("a",s([["className","link"],["href","https://www.nuget.org/packages/Feliz.DaisyUI"],["children",f("Feliz.DaisyUI NuGet")]])),"."]]])),c("div",s([["className","description"],["children",["Using NuGet package command"]]])),c("div",s([["className","max-w-xl"],["children",[c("div",s([["className","mockup-code"],["children",[c("pre",s([["data-prefix","$"],["children",[m.createElement("code",h(),"Install-Package Feliz.DaisyUI")]]]))]]]))]]])),c("div",s([["className","description"],["children",["or Paket"]]])),c("div",s([["className","max-w-xl"],["children",[c("div",s([["className","mockup-code"],["children",[c("pre",s([["data-prefix","$"],["children",[m.createElement("code",h(),"paket add Feliz.DaisyUI")]]]))]]]))]]]))];return m.createElement(m.Fragment,h(),...l)}function Q2(l,r){return r}class X2 extends ic{constructor(r){super(),this.tag=0,this.fields=[r]}cases(){return["UrlChanged"]}}class qp extends Mr{constructor(r){super(),this.Page=r}}function Z2(){const l=_p(Hp(window.location.hash,1));return[new qp(l),Vg(l)]}function K2(l,r){return[new qp(l.fields[0]),oc()]}function J2(l,r,u,d,y){return c("div",s([["className","drawer-content"],["children",[c("div",s([["className","navbar"],["children",[c("div",s([["className","navbar-start"],["children",[c("div",s([["className","lg:hidden"],["children",[c("label",b("btn",s([["className","btn-square"],["className","btn-ghost"],["htmlFor","main-menu"],["children",[ze("svg",s([["viewBox","0 0 24 24"],["className","inline-block w-6 h-6 stroke-current"],["children",f(ze("path",s([["d","M4 6h16M4 12h16M4 18h16"],["strokeWidth",2]])))]]))]]])))]]]))]]])),c("div",s([["className","navbar-end"],["children",[c("div",b("dropdown",s([["className","dropdown-end"],["className","z-50"],["children",[c("div",b("btn",s([["tabIndex",0],["className","btn-secondary"],["children",f("Change Theme")]]))),c("ul",b("dropdown-content",s([["tabIndex",0],["children",[c("ul",b("menu",s([["className","menu-md"],["className","bg-base-200"],["className","text-base-content"],["className","p-4 w-96 h-120 rounded-b-box overflow-y-auto"],["children",_e(I(()=>Xe(g=>{let x;return ce((x=f(c("input",b("input",s([["type","text"],["type","radio"],["className","theme-controller"],["value",g[0]],["name","theme"],["className","btn btn-sm btn-block btn-ghost justify-start"],["aria-label",g[1]]])))),m.createElement("li",h(),...x)))},[["light","🌝 light"],["dark","🌚 dark"],["cupcake","🧁 cupcake"],["bumblebee","🐝 bumblebee"],["emerald","✳️ emerald"],["corporate","🏢 corporate"],["synthwave","🌃 synthwave"],["retro","👴 retro"],["cyberpunk","🤖 cyberpunk"],["valentine","🌸 valentine"],["halloween","🎃 halloween"],["garden","🌷 garden"],["forest","🌲 forest"],["aqua","🐟 aqua"],["lofi","👓 lofi"],["pastel","🖍 pastel"],["️fantasy","🧚‍️ fantasy"],["wireframe","📝 wireframe"],["black","🏴 black"],["luxury","💎 luxury"],["️dracula","🧛‍️ dracula"],["cmyk","🖨 CMYK"],["autumn","🍁 autumn"],["business","💼 business"],["acid","💊 acid"],["lemonade","🍋 lemonade"],["night","🌃 night"],["coffee","☕ coffee"],["winter","❄ winter"],["dim","🔅 dim"],["nord","⛰️ nord"],["sunset","🌆 sunset"],["caramellatte","☕ caramellatte"],["abyss","🕳️ abyss"],["silk","👗 silk"]])))]])))]]])))]]])))]]]))]]])),c("div",s([["className","px-5 py-5 bg-base-100"],["children",[c("h2",s([rt(["className","text-primary"],["className","my-6 text-5xl font-bold"]),["children",[u,c("a",b("btn",s([["className","ml-2"],["className","btn-warning"],["className","btn-outline"],["className","btn-xs"],["href",Go("https://daisyui.com",...d)],["children",["daisyui docs"]]])))]]])),y]]]))]]]))}function F2(l){const r=(d,y,g)=>{const x=f(c("a",_e(I(()=>{let C,T;return Je(ce(["href",(C=Ro(g),T=C[1],Co(zo(E=>Hr(nc(E[0],f(E[1]+gl(T)))),Mo(C[0])),()=>Hr(f(gl(T)))))]),I(()=>Je(ce(["onClick",E=>{Ff(E)}]),I(()=>Je(nn(l,g)?ce(rt(["className","menu-active"],["className","justify-between"])):ce(["className","justify-between"]),I(()=>ce(["children",[m.createElement("span",h(),y),c("span",s([["className","badge"],["children",f(d)]]))]])))))))}))));return m.createElement("li",h(),...x)},u=(d,y)=>{const g=f(c("a",_e(I(()=>Je(nn(l,y)?ce(["className","menu-active"]):xp(),I(()=>Je(ce(["children",f(d)]),I(()=>{let x,C;return Je(ce(["href",(x=Ro(y),C=x[1],Co(zo(T=>Hr(nc(T[0],f(T[1]+gl(C)))),Mo(x[0])),()=>Hr(f(gl(C)))))]),I(()=>ce(["onClick",T=>{Ff(T)}])))}))))))));return m.createElement("li",h(),...g)};return c("div",s([["className","drawer-side"],["children",[c("label",b("drawer-overlay",f(["htmlFor","main-menu"]))),c("aside",s([["className","flex flex-col border-r w-80 bg-base-100 text-base-content"],["children",[c("div",s([["className","inline-block text-3xl font-title px-5 py-5 font-bold"],["children",[c("span",s([["className","text-primary"],["children",f("Feliz.")]])),"DaisyUI",c("a",s([["href","https://www.nuget.org/packages/Feliz.DaisyUI"],["children",[c("img",f(["src","https://img.shields.io/nuget/v/Feliz.DaisyUI.svg?style=flat-square"]))]]]))]]])),c("div",s([["className","p-4"],["children",[c("div",b("alert",s([["className","alert-info"],["children",[c("div",s([["className","flex flex-col gap-2"],["children",[c("div",f(["dangerouslySetInnerHTML",{__html:"🎉 Now based on <strong>DaisyUI v5!</strong>"}])),c("div",s([["className","text-sm self-center underline"],["children",[c("a",s([["children",f("Read the change log")],["href","https://daisyui.com/docs/changelog/#500"]]))]]]))]]]))]]])))]]])),c("ul",b("menu",s([["className","menu-md"],["className","flex flex-col p-4 pt-0 w-full"],["children",[c("li",s([["className","menu-title"],["children",[m.createElement("span",h(),"Docs")]]])),u("Install",new A(0,[])),u("Use",new A(1,[])),u("Themes",new A(2,[])),u("Colors",new A(3,[]))]]]))),c("ul",b("menu",s([["className","menu-md"],["className","flex flex-col p-4 pt-0 w-full"],["children",[c("li",s([["className","menu-title"],["children",[m.createElement("span",h(),"Components")]]])),u("Accordion",new A(4,[])),r("updated","Alert",new A(5,[])),u("Avatar",new A(6,[])),r("updated","Badge",new A(7,[])),u("Breadcrumbs",new A(8,[])),r("updated","Button",new A(9,[])),r("updated","Card",new A(10,[])),u("Carousel",new A(11,[])),u("Chat bubble",new A(12,[])),u("Collapse",new A(13,[])),u("Countdown",new A(14,[])),u("Diff",new A(15,[])),u("Divider",new A(16,[])),r("new","Dock",new A(17,[])),u("Drawer",new A(18,[])),r("updated","Dropdown",new A(19,[])),r("new","Fieldset",new A(20,[])),r("new","Filter",new A(21,[])),r("updated","Footer",new A(22,[])),u("Hero",new A(23,[])),u("Indicator",new A(25,[])),u("Join (group items)",new A(24,[])),u("Kbd",new A(26,[])),r("new","Label",new A(27,[])),u("Link",new A(28,[])),r("new","List",new A(29,[])),u("Loading",new A(30,[])),r("updated","Mask",new A(31,[])),r("updated","Menu",new A(32,[])),r("updated","Modal",new A(33,[])),r("updated","Navbar",new A(34,[])),u("Pagination",new A(35,[])),u("Progress",new A(36,[])),u("Radial Progress",new A(37,[])),u("Rating",new A(62,[])),u("Skeleton",new A(38,[])),r("updated","Stack",new A(39,[])),u("Stat",new A(40,[])),r("new","Status",new A(41,[])),r("updated","Steps",new A(42,[])),u("Swap",new A(43,[])),r("updated","Tab",new A(44,[])),u("Table",new A(45,[])),u("Theme Controller",new A(46,[])),u("Timeline",new A(47,[])),u("Toast",new A(48,[])),u("Tooltip",new A(49,[])),r("new","Validator",new A(50,[])),r("updated","File - Input",new A(51,[])),r("updated","Form - Checkbox",new A(52,[])),r("updated","Form - Input",new A(53,[])),r("updated","Form - Radio",new A(54,[])),u("Form - Range",new A(55,[])),r("updated","Form - Select",new A(56,[])),r("updated","Form - Textarea",new A(57,[])),r("updated","Form - Toggle",new A(58,[])),u("MockupCode",new A(59,[])),r("updated","MockupPhone",new A(60,[])),u("MockupWindow",new A(61,[]))]]])))]]]))]]]))}function $2(l,r,u,d,y,g){return c("div",s([["className","bg-base-100 text-base-content h-screen"],["children",[c("div",b("drawer",s([["className","lg:drawer-open"],["children",[c("input",b("drawer-toggle",s([["type","checkbox"],["id","main-menu"]]))),J2(l,r,u,d,g),F2(y)]]])))]]]))}function W2(){let l;const r=Up(()=>Rp(Z2,K2,(C,T)=>{}),void 0,void 0),u=r[0],d=r[1];let y;const g=u.Page;y=g.tag===1?["How to use","/docs/use",m.createElement(C0,null)]:g.tag===2?["Themes","/docs/default-themes",m.createElement(M0,null)]:g.tag===3?["Colors","/core/colors",m.createElement(R0,null)]:g.tag===4?["Accordion","/components/accordion",m.createElement(B0,null)]:g.tag===5?["Alert","/components/alert",m.createElement(j0,null)]:g.tag===6?["Avatar","/components/avatar",m.createElement(X0,null)]:g.tag===7?["Badge","/components/badge",m.createElement(F0,null)]:g.tag===8?["Breadcrumbs","/components/breadcrumbs",m.createElement(W0,null)]:g.tag===9?["Button","/components/button",m.createElement(tv,null)]:g.tag===10?["Card","/components/card",m.createElement(iv,null)]:g.tag===11?["Carousel","/components/carousel",m.createElement(ov,null)]:g.tag===12?["ChatBubble","/components/chat",m.createElement(pv,null)]:g.tag===13?["Collapse","/components/collapse",m.createElement(gv,null)]:g.tag===14?["Countdown","/components/countdown",m.createElement(xv,null)]:g.tag===15?["Diff","/components/diff",m.createElement(wv,null)]:g.tag===16?["Divider","/components/divider",m.createElement(Tv,null)]:g.tag===17?["Dock","/components/dock",m.createElement(Cv,null)]:g.tag===18?["Drawer","/components/drawer",m.createElement(Av,null)]:g.tag===19?["Dropdown","/components/dropdown",m.createElement(Bv,null)]:g.tag===20?["Fieldset","/components/fieldset",m.createElement(Vv,null)]:g.tag===21?["Filter","/components/filter",m.createElement(Qv,null)]:g.tag===22?["Footer","/components/footer",m.createElement(Zv,null)]:g.tag===23?["Hero","/components/hero",m.createElement(Jv,null)]:g.tag===25?["Indicator","/components/indicator",m.createElement(Pv,null)]:g.tag===24?["Join","/components/join",m.createElement(t1,null)]:g.tag===26?["Kbd","/components/kdb",m.createElement(r1,null)]:g.tag===27?["Label","/components/label",m.createElement(d1,null)]:g.tag===28?["Link","/components/link",m.createElement(b1,null)]:g.tag===29?["List","/components/list",m.createElement(v1,null)]:g.tag===30?["Loading","/components/loading",m.createElement(S1,null)]:g.tag===31?["Mask","/components/mask",m.createElement(H1,null)]:g.tag===32?["Menu","/components/menu",m.createElement(z1,null)]:g.tag===33?["Modal","/components/modal",m.createElement(M1,null)]:g.tag===34?["Navbar","/components/navbar",m.createElement(B1,null)]:g.tag===35?["Pagination","/components/pagination",m.createElement(G1,null)]:g.tag===36?["Progress","/components/progress",m.createElement(Y1,null)]:g.tag===37?["RadialProgress","/components/radial-progress",m.createElement(Z1,null)]:g.tag===62?["Rating","/components/rating",m.createElement(F1,null)]:g.tag===38?["Skeleton","/components/skeleton",m.createElement(I1,null)]:g.tag===39?["Stack","/components/stack",m.createElement(nN,null)]:g.tag===40?["Stat","/components/stat",m.createElement(iN,null)]:g.tag===41?["Status","/components/status",m.createElement(oN,null)]:g.tag===42?["Steps","/components/steps",m.createElement(pN,null)]:g.tag===43?["Swap","/components/swap",m.createElement(yN,null)]:g.tag===44?["Tab","/components/tab",m.createElement(SN,null)]:g.tag===45?["Table","/components/table",m.createElement(CN,null)]:g.tag===46?["Theme Controller","/components/theme-controller",m.createElement(AN,null)]:g.tag===47?["Timeline","/components/timeline",m.createElement(RN,null)]:g.tag===48?["Toast","/components/toast",m.createElement(LN,null)]:g.tag===49?["Tooltip","/components/tooltip",m.createElement(YN,null)]:g.tag===50?["Validator","/components/validator",m.createElement(KN,null)]:g.tag===51?["File - Input","/components/file-input",m.createElement(t2,null)]:g.tag===52?["Form - Checkbox","/components/form/checkbox",m.createElement(i2,null)]:g.tag===53?["Form - Input","/components/form/input",m.createElement(p2,null)]:g.tag===54?["Form - Radio","/components/form/radio",m.createElement(y2,null)]:g.tag===55?["Form - Range","/components/form/range",m.createElement(N2,null)]:g.tag===56?["Form - Select","/components/form/select",m.createElement(w2,null)]:g.tag===57?["Form - Textarea","/components/form/textarea",m.createElement(T2,null)]:g.tag===58?["Form - Toggle","/components/form/toggle",m.createElement(A2,null)]:g.tag===59?["MockupCode","/components/mockup/code",m.createElement(R2,null)]:g.tag===60?["MockupPhone","/components/mockup/phone",m.createElement(L2,null)]:g.tag===61?["MockupWindow","/components/mockup/window",m.createElement(j2,null)]:["Installation","/docs/install",m.createElement(Y2,null)];const x=Cr(s([["hashMode",1],["onUrlChanged",C=>{d(new X2(_p(C)))}],(l=f($2(u,d,y[0],y[1],u.Page,y[2])),["application",m.createElement(m.Fragment,h(),...l)])]));return x!==null&&typeof x=="object"&&!Array.isArray(x)||console.error(an("React.memoRender: props must be an object.")),m.createElement(Bg,Q2(void 0,x))}py.createRoot(document.getElementById("safer-app")).render(m.createElement(W2,null));
