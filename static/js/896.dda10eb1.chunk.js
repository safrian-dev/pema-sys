"use strict";(self.webpackChunkmaterialpro_main=self.webpackChunkmaterialpro_main||[]).push([[896],{40896:(t,e,l)=>{l.r(e),l.d(e,{default:()=>p});var n=l(72791),i=l(66184),a=l(63009),d=l(43464),s=l(49037),r=l(46724),o=l(55211),c=l(94938),h=l(16354),u=l(73830),x=l(19127),j=l(76807),v=l(48089),g=l(90838),m=l(80184);const p=()=>{var t,e,l,p;const[f,D]=(0,n.useState)(0),[Z,S]=(0,n.useState)([]),[k,w]=(0,n.useState)([]),[b,y]=(0,n.useState)(!1),[C,N]=(0,n.useState)(),T=()=>{y(!b)},_=(0,v.Z)(),{data:F}=(0,j.a)({queryKey:["timeline-list"],queryFn:()=>_.get("api/project/timeline/list-data").then((t=>t.data.data))});(0,n.useEffect)((()=>{const t=null===F||void 0===F?void 0:F.filter((t=>(null===t||void 0===t?void 0:t.task)>0));S(t)}),[F]),(0,n.useEffect)((()=>{const t=Z;for(let e=0;e<(null===Z||void 0===Z?void 0:Z.length);e++)for(let l=0;l<t[e].data.length;l++)t[e].data[l].startDate=Z[e].data[l].start_date?new Date(Z[e].data[l].start_date):new Date,t[e].data[l].endDate=new Date(Z[e].data[l].end_date);w(t)}),[Z]);return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(a.Z,{style:{minHeight:"660px"},children:[(null===k||void 0===k?void 0:k.length)>0?(0,m.jsx)(d.Z,{children:(0,m.jsx)(s.Z,{children:(0,m.jsx)("section",{className:"bg-info",children:(0,m.jsx)(i.b,{data:k,onTileClick:t=>(t=>{y(!0),N(t)})(t),onFilterData:()=>{D(1)},onClearFilterData:()=>{D(0)},config:{zoom:0,filterButtonState:f}})})})}):"Loading..",(0,m.jsxs)(r.Z,{isOpen:b,toggle:T.bind(null),centered:!0,size:"lg",children:[(0,m.jsx)(o.Z,{toggle:T.bind(null),children:"Task Info"}),(0,m.jsx)(c.Z,{children:(0,m.jsx)("table",{className:"w-100",children:(0,m.jsxs)("tbody",{children:[(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{width:"200",children:"Status"}),(0,m.jsx)("td",{children:":"}),(0,m.jsx)("td",{className:"text-dark",children:0===(null===C||void 0===C?void 0:C.status)?(0,m.jsx)(h.Z,{color:"primary",children:"To do"}):1===(null===C||void 0===C?void 0:C.status)?(0,m.jsx)(h.Z,{color:"warning",children:"Inprogress"}):(0,m.jsx)(h.Z,{color:"success",children:"Done"})})]}),(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{children:"Task Title"}),(0,m.jsx)("td",{children:":"}),(0,m.jsx)("td",{className:"text-dark",children:null===C||void 0===C?void 0:C.title})]}),(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{children:"Start date"}),(0,m.jsx)("td",{children:":"}),(0,m.jsx)("td",{className:"text-dark",children:null===(t=(0,g.Z)(null===C||void 0===C||null===(e=C.startDate)||void 0===e?void 0:e.toLocaleString()))||void 0===t?void 0:t.split(",")[0]})]}),(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{children:"End date"}),(0,m.jsx)("td",{children:":"}),(0,m.jsx)("td",{className:"text-dark",children:null===(l=(0,g.Z)(null===C||void 0===C||null===(p=C.endDate)||void 0===p?void 0:p.toLocaleString()))||void 0===l?void 0:l.split(",")[0]})]})]})})}),(0,m.jsx)(u.Z,{children:(0,m.jsx)(x.Z,{color:"secondary",size:"sm",outline:!0,onClick:T.bind(null),children:"Close"})})]})]})})}},90838:(t,e,l)=>{l.d(e,{Z:()=>n});const n=t=>{if(t){const e=new Date,l=new Date(t),n=l.toDateString()===e.toDateString()?"Today":l.toDateString(),i=l.toLocaleString().split(",")[1];return"".concat(n,", ").concat(i.split(":")[0],":").concat(i.split(":")[1]," ").concat(i.split(" ")[2]||"")}return t}}}]);
//# sourceMappingURL=896.dda10eb1.chunk.js.map