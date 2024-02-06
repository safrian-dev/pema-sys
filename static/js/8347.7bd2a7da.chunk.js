"use strict";(self.webpackChunkmaterialpro_main=self.webpackChunkmaterialpro_main||[]).push([[8347],{31043:(e,t,n)=>{n.d(t,{F:()=>a,Z:()=>i});n(72791);var r=n(65218),o=n(80184);const a=()=>(0,o.jsx)(r.x7,{toastOptions:{className:"",style:{}}}),i=(e,t)=>{((e,t)=>{"success"===e?r.ZP.success(t):"create"===e?(0,r.ZP)(t,{icon:"\ud83e\udd17"}):"start"===e?(0,r.ZP)("Lets get started, cheer up!",{icon:"\ud83d\udcaa"}):"done"===e?(0,r.ZP)("Horeee, task done!",{icon:"\ud83d\udc4f"}):r.ZP.error(t)})(e,t)}},18347:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var r=n(72791),o=n(63009),a=n(39773),i=n(43464),s=n(49037),l=n(69399),c=n(76167),d=n(42976),u=n(8118),p=n(19127),f=n(57689),m=n(31043),y=n(48089),h=n(17834),b=n(80184);const g=()=>{const{dispatch:e}=(0,h.Z)(),[t,n]=(0,r.useState)(),[g,v]=(0,r.useState)(!1),w=(0,f.s0)(),x=e=>{n((t=>({...t,[e.target.id]:e.target.value})))},j=(0,y.Z)();return(0,b.jsx)(o.Z,{className:"justify-content-center",children:(0,b.jsx)(a.Z,{lg:"8",children:(0,b.jsx)(i.Z,{className:"rounded-4",children:(0,b.jsx)(s.Z,{children:(0,b.jsxs)(l.Z,{onSubmit:async n=>{n.preventDefault(),v(!0),null!==t&&void 0!==t&&t.password?null!==t&&void 0!==t&&t.confirmpassword||(0,m.Z)("error","Confirm New password cannot be empty"):(0,m.Z)("error","New password cannot be empty"),(null===t||void 0===t?void 0:t.password)!==(null===t||void 0===t?void 0:t.confirmpassword)?(0,m.Z)("error","Confirm password does not match"):await j.post("api/auth/change-pas",{newpas:null===t||void 0===t?void 0:t.password}).then((()=>{(0,m.Z)("success","Password changed successfully"),document.getElementById("form-pass").reset(),setTimeout((()=>{e({type:"LOGOUT"}),w("/auth/login")}),2e3)})).catch((()=>(0,m.Z)("error","Something went wrong"))),v(!1)},id:"form-pass",children:[(0,b.jsxs)(c.Z,{children:[(0,b.jsx)(d.Z,{children:"New Password"}),(0,b.jsx)(u.Z,{type:"password",name:"password",id:"password",onChange:e=>x(e),required:!0,minLength:"8"})]}),(0,b.jsxs)(c.Z,{children:[(0,b.jsx)(d.Z,{children:"Confirm New Password"}),(0,b.jsx)(u.Z,{type:"password",name:"confirmpassword",id:"confirmpassword",onChange:e=>x(e),required:!0,minLength:"8"})]}),(0,b.jsx)(c.Z,{children:(0,b.jsx)(p.Z,{type:"submit",disabled:g,children:g?"Loading..":"Save"})})]})})})})})}},69399:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(72791),o=n(52007),a=n.n(o),i=n(9622);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}var l=["className","cssModule","tag","innerRef"];function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===s(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}(this,n)}}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var h={children:a().node,tag:i.iC,innerRef:a().oneOfType([a().object,a().func,a().string]),className:a().string,cssModule:a().object},b=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(s,e);var t,n,o,a=f(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=a.call(this,e)).getRef=t.getRef.bind(m(t)),t.submit=t.submit.bind(m(t)),t}return t=s,(n=[{key:"getRef",value:function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e}},{key:"submit",value:function(){this.ref&&this.ref.submit()}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.cssModule,o=e.tag,a=void 0===o?"form":o,s=e.innerRef,u=d(e,l),p=(0,i.mx)(t,n);return r.createElement(a,c({},u,{ref:s,className:p}))}}])&&u(t.prototype,n),o&&u(t,o),Object.defineProperty(t,"prototype",{writable:!1}),s}(r.Component);b.propTypes=h;const g=b},30168:(e,t,n)=>{function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,{Z:()=>r})},65218:(e,t,n)=>{n.d(t,{x7:()=>ve,ZP:()=>we});var r=n(30168),o=n(72791);let a={data:""},i=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||a,s=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,l=/\/\*[^]*?\*\/|  +/g,c=/\n+/g,d=(e,t)=>{let n="",r="",o="";for(let a in e){let i=e[a];"@"==a[0]?"i"==a[1]?n=a+" "+i+";":r+="f"==a[1]?d(i,a):a+"{"+d(i,"k"==a[1]?"":t)+"}":"object"==typeof i?r+=d(i,t?t.replace(/([^,])+/g,(e=>a.replace(/(^:.*)|([^,])+/g,(t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)))):a):null!=i&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=d.p?d.p(a,i):a+":"+i+";")}return n+(t&&o?t+"{"+o+"}":o)+r},u={},p=e=>{if("object"==typeof e){let t="";for(let n in e)t+=n+p(e[n]);return t}return e},f=(e,t,n,r,o)=>{let a=p(e),i=u[a]||(u[a]=(e=>{let t=0,n=11;for(;t<e.length;)n=101*n+e.charCodeAt(t++)>>>0;return"go"+n})(a));if(!u[i]){let t=a!==e?e:(e=>{let t,n,r=[{}];for(;t=s.exec(e.replace(l,""));)t[4]?r.shift():t[3]?(n=t[3].replace(c," ").trim(),r.unshift(r[0][n]=r[0][n]||{})):r[0][t[1]]=t[2].replace(c," ").trim();return r[0]})(e);u[i]=d(o?{["@keyframes "+i]:t}:t,n?"":"."+i)}let f=n&&u.g?u.g:null;return n&&(u.g=u[i]),((e,t,n,r)=>{r?t.data=t.data.replace(r,e):-1===t.data.indexOf(e)&&(t.data=n?e+t.data:t.data+e)})(u[i],t,r,f),i},m=(e,t,n)=>e.reduce(((e,r,o)=>{let a=t[o];if(a&&a.call){let e=a(n),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;a=t?"."+t:e&&"object"==typeof e?e.props?"":d(e,""):!1===e?"":e}return e+r+(null==a?"":a)}),"");function y(e){let t=this||{},n=e.call?e(t.p):e;return f(n.unshift?n.raw?m(n,[].slice.call(arguments,1),t.p):n.reduce(((e,n)=>Object.assign(e,n&&n.call?n(t.p):n)),{}):n,i(t.target),t.g,t.o,t.k)}y.bind({g:1});let h,b,g,v=y.bind({k:1});function w(e,t){let n=this||{};return function(){let r=arguments;function o(a,i){let s=Object.assign({},a),l=s.className||o.className;n.p=Object.assign({theme:b&&b()},s),n.o=/ *go\d+/.test(l),s.className=y.apply(n,r)+(l?" "+l:""),t&&(s.ref=i);let c=e;return e[0]&&(c=s.as||e,delete s.as),g&&c[0]&&g(s),h(c,s)}return t?t(o):o}}var x,j,O,Z,E,P,k,N,C,S,R,T,_,z,D,I,A=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,L=(()=>{let e=0;return()=>(++e).toString()})(),M=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),F=new Map,H=e=>{if(F.has(e))return;let t=setTimeout((()=>{F.delete(e),G({type:4,toastId:e})}),1e3);F.set(e,t)},B=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&(e=>{let t=F.get(e);t&&clearTimeout(t)})(t.toast.id),{...e,toasts:e.toasts.map((e=>e.id===t.toast.id?{...e,...t.toast}:e))};case 2:let{toast:n}=t;return e.toasts.find((e=>e.id===n.id))?B(e,{type:1,toast:n}):B(e,{type:0,toast:n});case 3:let{toastId:r}=t;return r?H(r):e.toasts.forEach((e=>{H(e.id)})),{...e,toasts:e.toasts.map((e=>e.id===r||void 0===r?{...e,visible:!1}:e))};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter((e=>e.id!==t.toastId))};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map((e=>({...e,pauseDuration:e.pauseDuration+o})))}}},q=[],U={toasts:[],pausedAt:void 0},G=e=>{U=B(U,e),q.forEach((e=>{e(U)}))},Y={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},$=e=>(t,n)=>{let r=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",n=arguments.length>2?arguments[2]:void 0;return{createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(null==n?void 0:n.id)||L()}}(t,e,n);return G({type:2,toast:r}),r.id},J=(e,t)=>$("blank")(e,t);J.error=$("error"),J.success=$("success"),J.loading=$("loading"),J.custom=$("custom"),J.dismiss=e=>{G({type:3,toastId:e})},J.remove=e=>G({type:4,toastId:e}),J.promise=(e,t,n)=>{let r=J.loading(t.loading,{...n,...null==n?void 0:n.loading});return e.then((e=>(J.success(A(t.success,e),{id:r,...n,...null==n?void 0:n.success}),e))).catch((e=>{J.error(A(t.error,e),{id:r,...n,...null==n?void 0:n.error})})),e};var K=(e,t)=>{G({type:1,toast:{id:e,height:t}})},Q=()=>{G({type:5,time:Date.now()})},V=e=>{let{toasts:t,pausedAt:n}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,n]=(0,o.useState)(U);(0,o.useEffect)((()=>(q.push(n),()=>{let e=q.indexOf(n);e>-1&&q.splice(e,1)})),[t]);let r=t.toasts.map((t=>{var n,r;return{...e,...e[t.type],...t,duration:t.duration||(null==(n=e[t.type])?void 0:n.duration)||(null==e?void 0:e.duration)||Y[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}}));return{...t,toasts:r}}(e);(0,o.useEffect)((()=>{if(n)return;let e=Date.now(),r=t.map((t=>{if(t.duration===1/0)return;let n=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(!(n<0))return setTimeout((()=>J.dismiss(t.id)),n);t.visible&&J.dismiss(t.id)}));return()=>{r.forEach((e=>e&&clearTimeout(e)))}}),[t,n]);let r=(0,o.useCallback)((()=>{n&&G({type:6,time:Date.now()})}),[n]),a=(0,o.useCallback)(((e,n)=>{let{reverseOrder:r=!1,gutter:o=8,defaultPosition:a}=n||{},i=t.filter((t=>(t.position||a)===(e.position||a)&&t.height)),s=i.findIndex((t=>t.id===e.id)),l=i.filter(((e,t)=>t<s&&e.visible)).length;return i.filter((e=>e.visible)).slice(...r?[l+1]:[0,l]).reduce(((e,t)=>e+(t.height||0)+o),0)}),[t]);return{toasts:t,handlers:{updateHeight:K,startPause:Q,endPause:r,calculateOffset:a}}},W=v(x||(x=(0,r.Z)(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]))),X=v(j||(j=(0,r.Z)(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),ee=v(O||(O=(0,r.Z)(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]))),te=w("div")(Z||(Z=(0,r.Z)(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"])),(e=>e.primary||"#ff4b4b"),W,X,(e=>e.secondary||"#fff"),ee),ne=v(E||(E=(0,r.Z)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),re=w("div")(P||(P=(0,r.Z)(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"])),(e=>e.secondary||"#e0e0e0"),(e=>e.primary||"#616161"),ne),oe=v(k||(k=(0,r.Z)(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]))),ae=v(N||(N=(0,r.Z)(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]))),ie=w("div")(C||(C=(0,r.Z)(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"])),(e=>e.primary||"#61d345"),oe,ae,(e=>e.secondary||"#fff")),se=w("div")(S||(S=(0,r.Z)(["\n  position: absolute;\n"]))),le=w("div")(R||(R=(0,r.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]))),ce=v(T||(T=(0,r.Z)(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),de=w("div")(_||(_=(0,r.Z)(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"])),ce),ue=e=>{let{toast:t}=e,{icon:n,type:r,iconTheme:a}=t;return void 0!==n?"string"==typeof n?o.createElement(de,null,n):n:"blank"===r?null:o.createElement(le,null,o.createElement(re,{...a}),"loading"!==r&&o.createElement(se,null,"error"===r?o.createElement(te,{...a}):o.createElement(ie,{...a})))},pe=e=>"\n0% {transform: translate3d(0,".concat(-200*e,"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n"),fe=e=>"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,".concat(-150*e,"%,-1px) scale(.6); opacity:0;}\n"),me=w("div")(z||(z=(0,r.Z)(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]))),ye=w("div")(D||(D=(0,r.Z)(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"]))),he=o.memo((e=>{let{toast:t,position:n,style:r,children:a}=e,i=t.height?((e,t)=>{let n=e.includes("top")?1:-1,[r,o]=M()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[pe(n),fe(n)];return{animation:t?"".concat(v(r)," 0.35s cubic-bezier(.21,1.02,.73,1) forwards"):"".concat(v(o)," 0.4s forwards cubic-bezier(.06,.71,.55,1)")}})(t.position||n||"top-center",t.visible):{opacity:0},s=o.createElement(ue,{toast:t}),l=o.createElement(ye,{...t.ariaProps},A(t.message,t));return o.createElement(me,{className:t.className,style:{...i,...r,...t.style}},"function"==typeof a?a({icon:s,message:l}):o.createElement(o.Fragment,null,s,l))}));!function(e,t,n,r){d.p=t,h=e,b=n,g=r}(o.createElement);var be=e=>{let{id:t,className:n,style:r,onHeightUpdate:a,children:i}=e,s=o.useCallback((e=>{if(e){let n=()=>{let n=e.getBoundingClientRect().height;a(t,n)};n(),new MutationObserver(n).observe(e,{subtree:!0,childList:!0,characterData:!0})}}),[t,a]);return o.createElement("div",{ref:s,className:n,style:r},i)},ge=y(I||(I=(0,r.Z)(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]))),ve=e=>{let{reverseOrder:t,position:n="top-center",toastOptions:r,gutter:a,children:i,containerStyle:s,containerClassName:l}=e,{toasts:c,handlers:d}=V(r);return o.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...s},className:l,onMouseEnter:d.startPause,onMouseLeave:d.endPause},c.map((e=>{let r=e.position||n,s=((e,t)=>{let n=e.includes("top"),r=n?{top:0}:{bottom:0},o=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:M()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY(".concat(t*(n?1:-1),"px)"),...r,...o}})(r,d.calculateOffset(e,{reverseOrder:t,gutter:a,defaultPosition:n}));return o.createElement(be,{id:e.id,key:e.id,onHeightUpdate:d.updateHeight,className:e.visible?ge:"",style:s},"custom"===e.type?A(e.message,e):i?i(e):o.createElement(he,{toast:e,position:r}))})))},we=J}}]);
//# sourceMappingURL=8347.7bd2a7da.chunk.js.map