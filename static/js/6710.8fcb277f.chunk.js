"use strict";(self.webpackChunkmaterialpro_main=self.webpackChunkmaterialpro_main||[]).push([[6710],{31043:(e,s,t)=>{t.d(s,{F:()=>l,Z:()=>r});t(72791);var n=t(65218),a=t(80184);const l=()=>(0,a.jsx)(n.x7,{toastOptions:{className:"",style:{}}}),r=(e,s)=>{((e,s)=>{"success"===e?n.ZP.success(s):"create"===e?(0,n.ZP)(s,{icon:"\ud83e\udd17"}):"start"===e?(0,n.ZP)("Lets get started, cheer up!",{icon:"\ud83d\udcaa"}):"done"===e?(0,n.ZP)("Horeee, task done!",{icon:"\ud83d\udc4f"}):n.ZP.error(s)})(e,s)}},76710:(e,s,t)=>{t.r(s),t.d(s,{default:()=>z});var n=t(72791),a=t(11087),l=t(39773),r=t(80184);const i=e=>{const{items:s,navActive:t,setNavActive:n,count:i}=e;return(0,r.jsx)(l.Z,{children:(0,r.jsx)(l.Z,{md:"12",className:"d-flex justify-content-between mb-3 align-items-center",children:(0,r.jsx)("div",{className:"nav-tab",children:s.map((e=>(0,r.jsxs)(a.rU,{className:"".concat(t===e.id&&"active"," text-muted fw-bold"),onClick:()=>n(e.id),children:[e.label,e.countable&&(0,r.jsx)("div",{className:"count bg-success text-white",children:i})]},e.id)))})})})};var c=t(30690),d=t.n(c),o=t(63009),u=t(43464),h=t(49037),x=t(14448),j=t(19127),m=t(46724),p=t(55211),g=t(94938),b=t(76167),f=t(42976),v=t(8118),y=t(73830),Z=t(4828),N=t(55472),O=t(90235),k=t(76807),w=t(17834),S=t(48089),C=t(31043),P=t(28755),q=t(16354),M=t(87681),T=t(87535);const _=e=>{let{ticket:s,isOpen:t,setIsOpen:a,refetch:i}=e;const{auth:c}=(0,w.Z)(),[x,m]=(0,n.useState)([]),[p,g]=(0,n.useState)(),[b,f]=(0,n.useState)(!1),[y,k]=(0,n.useState)(),[P,q]=(0,n.useState)(),_=(0,O.ZP)(),E=(0,S.Z)();(0,n.useEffect)((()=>{t&&document.body.classList.add("s-hide")}),[t]);(0,n.useEffect)((()=>{!async function(){await E.get("api/employe/division-member/".concat(null===c||void 0===c?void 0:c.user.employe_id)).then((e=>{g(e.data.data)})).catch((e=>console.log(e)))}()}),[]);return t&&(0,r.jsx)("div",{className:"ticket-popup",children:(0,r.jsx)(l.Z,{sm:"10",md:"10",lg:"10",children:(0,r.jsx)(u.Z,{className:"card-cust rounded-3",children:(0,r.jsxs)(h.Z,{children:[(0,r.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,r.jsx)("h5",{className:"fw-bold",children:"Ticket Info"}),b?(0,r.jsx)("div",{className:"d-flex align-items-center gap-2",children:(0,r.jsx)("span",{className:"text-info fw-bold",children:"Loading.."})}):(0,r.jsx)(d(),{icon:"close",onClick:()=>{a(!1),document.body.classList.remove("s-hide")},style:{cursor:"pointer"}})]}),(0,r.jsxs)(o.Z,{children:[(0,r.jsxs)(l.Z,{lg:"7",className:"mb-3",children:[(0,r.jsxs)(o.Z,{className:"justify-content-between align-items-center mb-3",children:[(0,r.jsx)(l.Z,{md:"8",children:(0,r.jsxs)("span",{children:["# ",null===s||void 0===s?void 0:s.ticket_number]})}),(0,r.jsx)(l.Z,{md:"4",children:(0,r.jsxs)(v.Z,{type:"select",defaultValue:P===s.status?P:s.status,onChange:e=>(async e=>{f(!0),await E.patch("api/ticket/".concat(null===s||void 0===s?void 0:s.id),{status:e}).then((e=>{q(e.data.data.status),i(),(0,C.Z)("success","Request status has been updated")})).catch((e=>console.log(e))),f(!1)})(e.target.value),children:[(0,r.jsx)("option",{value:"submitted",disabled:"submitted"===s.status,children:"Submitted"}),(0,r.jsx)("option",{value:"onprocess",disabled:"onprocess"===s.status,children:"Onprocess"}),(0,r.jsx)("option",{value:"pending",disabled:"pending"===s.status,children:"Pending"}),(0,r.jsx)("option",{value:"closed",disabled:"closed"===s.status,children:"Closed"})]})})]}),(0,r.jsxs)(l.Z,{children:[(0,r.jsx)("span",{className:"fw-bold",children:null===s||void 0===s?void 0:s.title}),(0,r.jsx)(o.Z,{children:(0,r.jsxs)("small",{className:"text-muted",style:{fontSize:"12px"},children:["Created at ",(0,r.jsx)("span",{className:"text-dark",children:(0,T.Z)(null===s||void 0===s?void 0:s.created_at)})]})}),(0,r.jsx)("p",{className:"mt-3",children:null===s||void 0===s?void 0:s.desc}),(0,r.jsxs)(l.Z,{children:[(0,r.jsx)("span",{children:"Attachments"}),(0,r.jsxs)("div",{className:"d-flex gap-3 mt-1",children:[(0,r.jsx)("div",{className:"file-container bg-light py-2 px-4 rounded-3",children:(0,r.jsx)("span",{children:"secreenshoot1.jpg "})}),(0,r.jsx)("div",{className:"file-container bg-light py-2 px-4 rounded-3",children:(0,r.jsx)("span",{children:"secreenshoot2.jpg "})})]})]})]})]}),(0,r.jsx)(l.Z,{lg:"5",children:(0,r.jsxs)("div",{className:"d-flex flex-column gap-3 rounded-3 p-3",style:{border:"1px dashed #7460EE"},children:[(0,r.jsxs)("div",{className:"d-flex flex-column gap-1",children:[(0,r.jsx)("small",{children:"Requester"}),(0,r.jsxs)("div",{className:"d-flex gap-3 align-items-center",children:[(0,r.jsx)("img",{src:M,className:"rounded-circle",alt:"avatar",width:"40",height:"40"}),(0,r.jsxs)("div",{className:"d-flex flex-column",children:[(0,r.jsx)("span",{className:"text-dark",children:null===s||void 0===s?void 0:s.requester}),(0,r.jsx)("small",{className:"text-muted",children:null===s||void 0===s?void 0:s.requester_position})]})]})]}),(0,r.jsxs)("div",{className:"d-flex flex-column gap-1",children:[(0,r.jsx)("small",{children:"PIC"}),(0,r.jsxs)("div",{className:"d-flex gap-3 align-items-center",children:[(0,r.jsx)("img",{src:M,className:"rounded-circle",alt:"avatar",width:"40",height:"40"}),(0,r.jsxs)("div",{className:"d-flex flex-column",children:[(0,r.jsx)("span",{className:"text-dark",children:null===s||void 0===s?void 0:s.pic}),(0,r.jsx)("small",{className:"text-muted",children:null===s||void 0===s?void 0:s.pic_position})]})]})]}),(0,r.jsxs)("div",{className:"d-flex flex-column gap-1 bg-light p-2 rounded-3",children:["closed"===s.status||"onprocess"===s.status?(0,r.jsx)("small",{children:"Assigned to:"}):(0,r.jsx)("small",{children:"Assign to:"}),(0,r.jsx)("div",{className:"d-flex gap-2",children:"submitted"===s.status||"pending"===s.status?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{style:{flex:"1"},children:(0,r.jsx)(N.ZP,{components:_,defaultValue:x,options:p,onChange:e=>m(e)})}),(0,r.jsx)(j.Z,{type:"button",color:"info",disabled:y,onClick:async()=>{k(!0),await E.post("api/ticket/assign-task",{employe_id:x.value,employe_name:x.label}).then((e=>{(0,C.Z)("success","Assignment has been sent to ".concat(e.data.data.employe_name))})).catch((e=>console.log(e))),k(!1)},children:y?(0,r.jsxs)("div",{className:"d-flex align-items-center gap-2",children:[(0,r.jsx)(Z.Z,{size:"sm"})," Sending.."]}):"Send"})]}):"nama staff"})]})]})})]})]})})})})},E=e=>{let{data:s,tab:t,refetch:a}=e;const[l,i]=(0,n.useState)(),[c,o]=(0,n.useState)({});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(P.Z,{className:"no-wrap mt-3 align-middle",responsive:!0,hover:!0,children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"#"}),(0,r.jsx)("th",{children:"requests"===t?"Requester":"To"}),(0,r.jsx)("th",{children:"Number"}),(0,r.jsx)("th",{children:"Title"}),(0,r.jsx)("th",{children:"Priority"}),(0,r.jsx)("th",{children:"Subject"}),(0,r.jsx)("th",{colSpan:"2",children:"Status"})]})}),(0,r.jsx)("tbody",{children:null===s||void 0===s?void 0:s.map(((e,s)=>(0,r.jsxs)("tr",{style:{cursor:"pointer"},onClick:()=>{return s=e,i(!0),void o(s);var s},children:[(0,r.jsx)("td",{children:s+1}),(0,r.jsx)("td",{children:(0,r.jsx)("div",{className:"d-flex flex-column",children:"requests"===t?(0,r.jsxs)(r.Fragment,{children:[e.requester,(0,r.jsx)("div",{children:(0,r.jsx)("span",{className:"badge bg-light text-muted rounded-pill d-inline-block fw-bold",children:e.requester_division})})]}):(0,r.jsxs)(r.Fragment,{children:[e.pic,(0,r.jsx)("div",{children:(0,r.jsx)("span",{className:"badge bg-light text-muted rounded-pill d-inline-block fw-bold",children:e.pic_division})})]})})}),(0,r.jsx)("td",{className:"text-dark",children:e.ticket_number}),(0,r.jsx)("td",{className:"text-dark",children:e.title}),(0,r.jsx)("td",{className:"text-dark",children:(0,r.jsxs)("div",{className:"d-flex",children:["minor"===e.priority?(0,r.jsx)(d(),{icon:"expand_more",className:"text-primary"}):"major"===e.priority?(0,r.jsx)(d(),{icon:"expand_less",className:"text-danger"}):(0,r.jsx)(d(),{icon:"keyboard_double_arrow_up",className:"text-danger"}),e.priority]})}),(0,r.jsx)("td",{className:"text-dark",children:(0,r.jsx)(q.Z,{color:"".concat("request"===e.subject?"success":"info"),children:e.subject})}),(0,r.jsx)("td",{className:"text-dark",children:(0,r.jsx)("span",{className:"badge bg-light-".concat("submitted"===e.status?"primary":"onprocess"===e.status?"info":"pending"===e.status?"danger":"success"," text-").concat("submitted"===e.status?"primary":"onprocess"===e.status?"info":"pending"===e.status?"danger":"success"," rounded-pill d-inline-block fw-bold"),children:e.status})})]},e.id)))})]}),(0,r.jsx)(_,{ticket:c,isOpen:l,setIsOpen:i,refetch:a})]})},R=()=>{const{auth:e}=(0,w.Z)(),[s,t]=(0,n.useState)(),[a,i]=(0,n.useState)(),[c,P]=(0,n.useState)(),[q,M]=(0,n.useState)(""),[T,_]=(0,n.useState)(""),[R,F]=(0,n.useState)(""),[A,L]=(0,n.useState)(""),[z,I]=(0,n.useState)(!1),D=()=>{t(!s)},V=(0,O.ZP)(),J=(0,S.Z)(),{isLoading:K,error:H,data:U,refetch:Y}=(0,k.a)({queryKey:["ticketlist"],queryFn:()=>J.get("api/ticket/employe").then((e=>e.data.data))});(0,n.useEffect)((()=>{!async function(){await J.get("api/employe/assignment-list").then((e=>{i(e.data.data.filter((e=>null===e||void 0===e?void 0:e.roles.includes("Manager"))))})).catch((e=>console.log(e)))}()}),[]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(o.Z,{children:(0,r.jsxs)(l.Z,{lg:"12",children:[(0,r.jsx)(u.Z,{children:(0,r.jsxs)(h.Z,{children:[(0,r.jsxs)(l.Z,{className:"d-flex justify-content-between",col:"12",children:[(0,r.jsx)("div",{className:"",children:(0,r.jsx)(x.Z,{tag:"h5",className:"fw-bold",children:"Tickets Listing"})}),(0,r.jsxs)(j.Z,{className:"btn d-flex gap-1 align-items-center",outline:!0,color:"info",size:"sm",onClick:D.bind(null),children:[(0,r.jsx)(d(),{icon:"add"}),"New Ticket"]})]}),K?"Loading...":H?"Something went wrong.":U.length>0?(0,r.jsx)(E,{data:U}):(0,r.jsx)("div",{className:"d-flex justify-content-center",children:"No data yet."})]})}),(0,r.jsx)(m.Z,{isOpen:s,fade:!1,toggle:D.bind(null),size:"lg",children:(0,r.jsxs)("form",{onSubmit:async e=>{e.preventDefault();const s={title:T,subject:q,desc:R,pic:c.value,priority:A};I(!0),await J.post("api/ticket",s).then((e=>{Y(),(0,C.Z)("success",e.data.message)})).catch((()=>{(0,C.Z)("error","Submit ticket failed.")})),t(!1),I(!1)},children:[(0,r.jsx)(p.Z,{toggle:D.bind(null),children:"New Request"}),(0,r.jsxs)(g.Z,{children:[(0,r.jsx)(b.Z,{children:(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(f.Z,{sm:"3",children:"Requester"}),(0,r.jsx)(l.Z,{sm:"9",children:(0,r.jsx)(v.Z,{type:"text",value:null===e||void 0===e?void 0:e.user.first_name,readOnly:!0,disabled:!0})})]})}),(0,r.jsx)(b.Z,{children:(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(f.Z,{sm:"3",children:"Subject"}),(0,r.jsx)(l.Z,{sm:"9",children:(0,r.jsxs)(v.Z,{type:"select",defaultValue:"choose",onChange:e=>M(e.target.value),children:[(0,r.jsx)("option",{value:"choose",disabled:!0,children:"Choose..."}),(0,r.jsx)("option",{value:"request",children:"Request"}),(0,r.jsx)("option",{value:"troubleshoot",children:"Troubleshoot"})]})})]})}),(0,r.jsx)(b.Z,{children:(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(f.Z,{sm:"3",children:"Title"}),(0,r.jsx)(l.Z,{sm:"9",children:(0,r.jsx)(v.Z,{type:"text",onChange:e=>_(e.target.value)})})]})}),(0,r.jsx)(b.Z,{children:(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(f.Z,{sm:"3",children:"Description"}),(0,r.jsx)(l.Z,{sm:"9",children:(0,r.jsx)(v.Z,{type:"textarea",onChange:e=>F(e.target.value)})})]})}),(0,r.jsx)(b.Z,{children:(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(f.Z,{sm:"3",children:"To"}),(0,r.jsx)(l.Z,{sm:"9",children:(0,r.jsx)(N.ZP,{components:V,options:a,onChange:e=>P(e)})})]})}),(0,r.jsx)(b.Z,{children:(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(f.Z,{sm:"3",children:"Priority"}),(0,r.jsx)(l.Z,{sm:"9",children:(0,r.jsxs)(v.Z,{type:"select",defaultValue:"choose",onChange:e=>L(e.target.value),children:[(0,r.jsx)("option",{value:"choose",disabled:!0,children:"Choose..."}),(0,r.jsx)("option",{value:"minor",children:"Minor"}),(0,r.jsx)("option",{value:"major",children:"Major"}),(0,r.jsx)("option",{value:"emergency",children:"Emergency"})]})})]})}),(0,r.jsx)(b.Z,{children:(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(f.Z,{sm:"3",children:"Attachment"}),(0,r.jsx)(l.Z,{sm:"9",children:(0,r.jsx)(v.Z,{type:"file",onChange:e=>L(e.target.value)})})]})})]}),(0,r.jsxs)(y.Z,{children:[(0,r.jsx)(j.Z,{color:"secondary",onClick:D.bind(null),children:"Cancel"}),(0,r.jsx)(j.Z,{type:"submit",color:"primary",disabled:z,children:z?(0,r.jsxs)("div",{className:"d-flex align-items-center gap-1",children:[(0,r.jsx)(Z.Z,{size:"sm"}),"Submitting"]}):"Submit"})]})]})})]})})})},F=()=>{const e=(0,S.Z)(),{isLoading:s,error:t,data:n,refetch:a}=(0,k.a)({queryKey:["requestlist"],queryFn:()=>e.get("api/ticket/manager").then((e=>e.data.data))});return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(o.Z,{children:(0,r.jsx)(l.Z,{lg:"12",children:(0,r.jsx)(u.Z,{children:(0,r.jsxs)(h.Z,{children:[(0,r.jsx)(l.Z,{className:"d-flex justify-content-between",col:"12",children:(0,r.jsx)("div",{className:"",children:(0,r.jsx)(x.Z,{tag:"h5",className:"fw-bold",children:"Requests Listing"})})}),s?"Loading...":t?"Something went wrong.":n.length>0?(0,r.jsx)(E,{data:n,refetch:a,tab:"requests"}):(0,r.jsx)("div",{className:"d-flex justify-content-center",children:"No data yet."})]})})})})})},A=[{id:1,label:"My Tickets",countable:!1},{id:2,label:"Support Requests",countable:!0}],L=()=>{const{auth:e}=(0,w.Z)(),[s,t]=(0,n.useState)(1),[a,l]=(0,n.useState)(0),c=(0,S.Z)(),d=null===e||void 0===e?void 0:e.user.roles.includes("Manager");return(0,n.useEffect)((()=>{d&&async function(){await c.get("api/ticket/manager?type=count").then((e=>{l(e.data.data)})).catch((()=>{l(0)}))}()}),[]),(0,r.jsxs)(r.Fragment,{children:[d&&(0,r.jsx)(i,{items:A,navActive:s,setNavActive:t,count:a}),1===s?(0,r.jsx)(R,{}):(0,r.jsx)(F,{setTotalRequest:l})]})},z=()=>(0,r.jsx)(L,{})},87535:(e,s,t)=>{t.d(s,{Z:()=>n});const n=e=>{const s=new Date(e);return"".concat(s.getDate()," ").concat(["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Aug","Sep","Oct","Nov","Des"][s.getMonth()]," ").concat(s.getFullYear())}},16354:(e,s,t)=>{t.d(s,{Z:()=>j});var n=t(72791),a=t(52007),l=t.n(a),r=t(81694),i=t.n(r),c=t(9622),d=["className","cssModule","color","innerRef","pill","tag"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var t=arguments[s];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function u(e,s){if(null==e)return{};var t,n,a=function(e,s){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],s.indexOf(t)>=0||(a[t]=e[t]);return a}(e,s);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],s.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var h={children:l().node,className:l().string,color:l().string,cssModule:l().object,innerRef:l().oneOfType([l().object,l().func,l().string]),pill:l().bool,tag:c.iC};function x(e){var s=e.className,t=e.cssModule,a=e.color,l=void 0===a?"secondary":a,r=e.innerRef,h=e.pill,x=void 0!==h&&h,j=e.tag,m=void 0===j?"span":j,p=u(e,d),g=(0,c.mx)(i()(s,"badge","bg-"+l,!!x&&"rounded-pill"),t);return p.href&&"span"===m&&(m="a"),n.createElement(m,o({},p,{className:g,ref:r}))}x.propTypes=h;const j=x},14448:(e,s,t)=>{t.d(s,{Z:()=>j});var n=t(72791),a=t(52007),l=t.n(a),r=t(81694),i=t.n(r),c=t(9622),d=["className","cssModule","tag"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var t=arguments[s];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function u(e,s){if(null==e)return{};var t,n,a=function(e,s){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],s.indexOf(t)>=0||(a[t]=e[t]);return a}(e,s);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],s.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var h={className:l().string,cssModule:l().object,tag:c.iC};function x(e){var s=e.className,t=e.cssModule,a=e.tag,l=void 0===a?"div":a,r=u(e,d),h=(0,c.mx)(i()(s,"card-title"),t);return n.createElement(l,o({},r,{className:h}))}x.propTypes=h;const j=x},73830:(e,s,t)=>{t.d(s,{Z:()=>j});var n=t(72791),a=t(52007),l=t.n(a),r=t(81694),i=t.n(r),c=t(9622),d=["className","cssModule","tag"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var t=arguments[s];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function u(e,s){if(null==e)return{};var t,n,a=function(e,s){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],s.indexOf(t)>=0||(a[t]=e[t]);return a}(e,s);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],s.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var h={className:l().string,cssModule:l().object,tag:c.iC};function x(e){var s=e.className,t=e.cssModule,a=e.tag,l=void 0===a?"div":a,r=u(e,d),h=(0,c.mx)(i()(s,"modal-footer"),t);return n.createElement(l,o({},r,{className:h}))}x.propTypes=h;const j=x},28755:(e,s,t)=>{t.d(s,{Z:()=>j});var n=t(72791),a=t(52007),l=t.n(a),r=t(81694),i=t.n(r),c=t(9622),d=["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var t=arguments[s];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function u(e,s){if(null==e)return{};var t,n,a=function(e,s){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],s.indexOf(t)>=0||(a[t]=e[t]);return a}(e,s);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],s.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var h={bordered:l().bool,borderless:l().bool,className:l().string,cssModule:l().object,dark:l().bool,hover:l().bool,innerRef:l().oneOfType([l().func,l().string,l().object]),responsive:l().oneOfType([l().bool,l().string]),responsiveTag:c.iC,size:l().string,striped:l().bool,tag:c.iC};function x(e){var s=e.className,t=e.cssModule,a=e.size,l=e.bordered,r=e.borderless,h=e.striped,x=e.dark,j=e.hover,m=e.responsive,p=e.tag,g=void 0===p?"table":p,b=e.responsiveTag,f=void 0===b?"div":b,v=e.innerRef,y=u(e,d),Z=(0,c.mx)(i()(s,"table",!!a&&"table-"+a,!!l&&"table-bordered",!!r&&"table-borderless",!!h&&"table-striped",!!x&&"table-dark",!!j&&"table-hover"),t),N=n.createElement(g,o({},y,{ref:v,className:Z}));if(m){var O=(0,c.mx)(!0===m?"table-responsive":"table-responsive-".concat(m),t);return n.createElement(f,{className:O},N)}return N}x.propTypes=h;const j=x},87681:(e,s,t)=>{e.exports=t.p+"static/media/user1.6ac95ef9bc0c027733ea.jpg"}}]);
//# sourceMappingURL=6710.8fcb277f.chunk.js.map