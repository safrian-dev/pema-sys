"use strict";(self.webpackChunkmaterialpro_main=self.webpackChunkmaterialpro_main||[]).push([[1607],{1607:(e,t,s)=>{s.r(t),s.d(t,{default:()=>h});var n=s(72791),d=s(57689),a=s(16354),l=s(57823),i=s(43464),c=s(49037),r=s(63009),o=s(39773),m=s(43513),x=s(23606),u=(s(87369),s(80184));const h=()=>{var e,t,s,h,j,v,p,N,b,g,y,f;const Z="https://api.ptpema.co.id/",{assetId:w}=(0,d.UO)(),[_,k]=(0,n.useState)(new Date),[A,D]=(0,n.useState)([]),I={weekday:"long",year:"numeric",month:"short",day:"numeric"},S=[{name:"Asset Number",selector:e=>e.asset_number},{name:"Responsible",selector:e=>{var t;return(0,u.jsx)(u.Fragment,{children:null===e||void 0===e||null===(t=e.res_list)||void 0===t?void 0:t.map((e=>(0,u.jsx)(a.Z,{color:"primary",className:"ms-2",children:null===e||void 0===e?void 0:e.first_name},null===e||void 0===e?void 0:e.employe_id)))})}},{name:"Last Udpate",selector:e=>"".concat(new Date(e.updated_at).toLocaleDateString("en-us",I)," ").concat(new Date(e.updated_at).toLocaleTimeString()," ")}];return(0,n.useEffect)((()=>{fetch("".concat(Z,"dapi/inven/").concat(w)).then((e=>e.json())).then((e=>{D(e),k(new Date)}))}),[w]),console.log(A),(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(l.Z,{children:(0,u.jsx)(i.Z,{className:"mt-4",children:(0,u.jsxs)(c.Z,{children:[(0,u.jsxs)(r.Z,{className:"content",children:[(0,u.jsx)(o.Z,{xs:"12",sm:"12",lg:"5",className:" py-4 image",style:{backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundImage:"url('".concat(Z,"inven").concat(null===(e=A.data)||void 0===e?void 0:e.file,"?s=").concat(_,"')")}}),(0,u.jsxs)(o.Z,{xs:"12",sm:"12",lg:"7",className:"py-4 text",children:[(0,u.jsx)("div",{className:"d-flex justify-content-between",children:(0,u.jsx)("h2",{className:"text-bold mb-0",children:null===(t=A.data)||void 0===t?void 0:t.name})}),(0,u.jsx)("hr",{}),(0,u.jsx)("table",{className:"w-100",children:(0,u.jsxs)("tbody",{children:[(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:"Parent Asset Number"}),(0,u.jsx)("td",{className:"text-end",children:null===(s=A.data)||void 0===s?void 0:s.asset_number})]}),(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:"Type"}),(0,u.jsx)("td",{className:"text-end",children:null===(h=A.data)||void 0===h?void 0:h.type_name})]}),(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:"Acquisition Price"}),(0,u.jsx)("td",{className:"text-end",children:(0,x.Z)(null===(j=A.data)||void 0===j?void 0:j.price)})]}),(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:"Current Asset Value"}),(0,u.jsx)("td",{className:"text-end",children:(0,x.Z)(null===(v=A.data)||void 0===v?void 0:v.current)})]}),(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:"Vendor"}),(0,u.jsx)("td",{className:"text-end",children:null===(p=A.data)||void 0===p?void 0:p.vendor})]}),(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:"Acquisition Time"}),(0,u.jsx)("td",{className:"text-end",children:null===(N=A.data)||void 0===N?void 0:N.acquisition})]}),(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:"Age "}),(0,u.jsx)("td",{className:"text-end",children:null===(b=A.data)||void 0===b?void 0:b.old})]}),(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:"Amount "}),(0,u.jsxs)("td",{className:"text-end",children:[null===(g=A.data)||void 0===g?void 0:g.amount," items"]})]}),(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:"Location "}),(0,u.jsx)("td",{className:"text-end",children:null===(y=A.data)||void 0===y?void 0:y.location})]})]})})]})]}),(0,u.jsx)(m.ZP,{className:"mt-0",columns:S,data:null===(f=A.data)||void 0===f?void 0:f.child})]})})})})}},23606:(e,t,s)=>{s.d(t,{Z:()=>n});const n=e=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(e)},87369:()=>{}}]);
//# sourceMappingURL=1607.405930c2.chunk.js.map