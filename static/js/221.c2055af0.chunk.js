"use strict";(self.webpackChunkmaterialpro_main=self.webpackChunkmaterialpro_main||[]).push([[221],{31043:(e,s,t)=>{t.d(s,{F:()=>i,Z:()=>d});t(72791);var n=t(65218),l=t(80184);const i=()=>(0,l.jsx)(n.x7,{toastOptions:{className:"",style:{}}}),d=(e,s)=>{((e,s)=>{"success"===e?n.ZP.success(s):"create"===e?(0,n.ZP)(s,{icon:"\ud83e\udd17"}):"start"===e?(0,n.ZP)("Lets get started, cheer up!",{icon:"\ud83d\udcaa"}):"done"===e?(0,n.ZP)("Horeee, task done!",{icon:"\ud83d\udc4f"}):n.ZP.error(s)})(e,s)}},39221:(e,s,t)=>{t.r(s),t.d(s,{default:()=>L});var n=t(72791),l=t(39773),i=t(11087),d=t(43464),a=t(49037),c=t(14448),r=t(19127),o=t(28755),h=t(76807),j=t(30690),x=t.n(j),u=t(46724),m=t(55211),p=t(69399),v=t(94938),g=t(76167),Z=t(42976),b=t(8118),f=t(63009),_=t(8453),y=t(71971),N=t(73830),w=t(4828),C=t(48089),S=t(17834),P=t(31043),k=t(80184);const F=e=>{var s,t,i;let{modal:d,setModal:a,toggle:c,refetch:o}=e;const{auth:h}=(0,S.Z)(),[j,x]=(0,n.useState)({}),[F,D]=(0,n.useState)({}),[E,L]=(0,n.useState)({}),[M,z]=(0,n.useState)([]),[V,A]=(0,n.useState)(!1),O=(0,C.Z)();(0,n.useEffect)((()=>{!async function(){await O.get("api/project/business/options").then((e=>L(e.data))).catch((e=>console.log(e)))}(),async function(){await O.get("api/employe/division/".concat(null===h||void 0===h?void 0:h.user.employe_id)).then((e=>D(e.data.division))).catch((e=>console.log(e)))}(),async function(){await O.get("api/project/partner/options").then((e=>z(e.data.data))).catch((e=>console.log(e)))}()}),[]);const R=e=>{x((s=>({...s,[e.target.name]:e.target.value})))};return(0,k.jsxs)(u.Z,{isOpen:d,toggle:c.bind(null),size:"lg",fade:!1,children:[(0,k.jsx)(m.Z,{toggle:c.bind(null),children:"New Project"}),(0,k.jsxs)(p.Z,{onSubmit:async e=>{e.preventDefault(),A(!0),j.division=F.organization_id,await O.post("api/project",j).then((()=>{(0,P.Z)("success","Project has been created."),o()})).catch((e=>{console.log(e),(0,P.Z)("error","Something went wrong.")})),a(!1),A(!1)},children:[(0,k.jsxs)(v.Z,{children:[(0,k.jsxs)(g.Z,{children:[(0,k.jsx)(Z.Z,{htmlFor:"project_number",children:"Project Number"}),(0,k.jsx)(b.Z,{type:"text",name:"project_number",id:"project_number",placeholder:"Project number here",onChange:R})]}),(0,k.jsxs)(g.Z,{children:[(0,k.jsx)(Z.Z,{htmlFor:"project_name",children:"Project name"}),(0,k.jsx)(b.Z,{type:"text",name:"project_name",id:"project_name",placeholder:"Project name here",onChange:R})]}),(0,k.jsxs)(f.Z,{children:[(0,k.jsx)(l.Z,{md:"6",children:(0,k.jsxs)(g.Z,{children:[(0,k.jsx)(Z.Z,{for:"start_date",children:"Start date"}),(0,k.jsx)(b.Z,{type:"date",id:"start_date",name:"start_date",onChange:R})]})}),(0,k.jsx)(l.Z,{md:"6",children:(0,k.jsxs)(g.Z,{children:[(0,k.jsx)(Z.Z,{for:"end_date",children:"End date"}),(0,k.jsx)(b.Z,{type:"date",id:"end_date",name:"end_date",onChange:R})]})})]}),(0,k.jsxs)(g.Z,{children:[(0,k.jsx)(Z.Z,{htmlFor:"goals",children:"Goals"}),(0,k.jsx)(b.Z,{type:"textarea",id:"goals",name:"goals",placeholder:"Explain the goals of the project here",rows:"3",onChange:R})]}),(0,k.jsxs)(f.Z,{children:[(0,k.jsx)(l.Z,{md:"6",children:(0,k.jsxs)(g.Z,{children:[(0,k.jsx)(Z.Z,{for:"level_id",children:"Activity level"}),(0,k.jsxs)(b.Z,{type:"select",id:"level_id",name:"level_id",defaultValue:"al",onChange:R,children:[(0,k.jsx)("option",{disabled:!0,value:"al",children:"- Select -"}),null===E||void 0===E||null===(s=E.activity_level)||void 0===s?void 0:s.map((e=>(0,k.jsx)("option",{value:e.level_id,children:e.level_desc},e.level_id)))]})]})}),(0,k.jsx)(l.Z,{md:"6",children:(0,k.jsxs)(g.Z,{children:[(0,k.jsx)(Z.Z,{for:"category",children:"Category"}),(0,k.jsxs)(b.Z,{type:"select",id:"category",name:"category",defaultValue:"cat",onChange:R,children:[(0,k.jsx)("option",{disabled:!0,value:"cat",children:"- Select -"}),(0,k.jsx)("option",{value:"business",children:"Business"}),(0,k.jsx)("option",{value:"non-business",children:"Non-business"})]})]})})]}),"business"===(null===j||void 0===j?void 0:j.category)&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(g.Z,{children:[(0,k.jsx)(Z.Z,{for:"partner",children:"Partner"}),(0,k.jsxs)(b.Z,{type:"select",id:"partner",name:"partner",defaultValue:"pa",onChange:R,children:[(0,k.jsx)("option",{disabled:!0,value:"pa",children:"- Select -"}),M.length>0&&M.map((e=>(0,k.jsx)("option",{value:e.id,children:e.name},e.id)))]})]}),(0,k.jsxs)(g.Z,{children:[(0,k.jsx)(Z.Z,{htmlFor:"desc",children:"Description for Initiation & Definition phase"}),(0,k.jsx)(b.Z,{type:"textarea",id:"desc",name:"desc",placeholder:"Description of the phase here",rows:"3",onChange:R})]}),(0,k.jsxs)(f.Z,{children:[(0,k.jsx)(l.Z,{md:"6",children:(0,k.jsxs)(g.Z,{children:[(0,k.jsx)(Z.Z,{htmlFor:"estimated_income",children:"Estimated income"}),(0,k.jsxs)(_.Z,{children:[(0,k.jsx)(y.Z,{children:"Rp."}),(0,k.jsx)(b.Z,{type:"text",id:"estimated_income",name:"estimated_income",onChange:R})]})]})}),(0,k.jsx)(l.Z,{md:"6",children:(0,k.jsxs)(g.Z,{children:[(0,k.jsx)(Z.Z,{htmlFor:"estimated_cost",children:"Estimated cost"}),(0,k.jsxs)(_.Z,{children:[(0,k.jsx)(y.Z,{children:"Rp."}),(0,k.jsx)(b.Z,{type:"text",id:"estimated_cost",name:"estimated_cost",onChange:R})]})]})})]})]}),(0,k.jsxs)(f.Z,{children:[(0,k.jsx)(l.Z,{md:"6",children:(0,k.jsxs)(g.Z,{children:[(0,k.jsx)(Z.Z,{for:"base_id",children:"Activity base"}),(0,k.jsxs)(b.Z,{type:"select",id:"base_id",name:"base_id",defaultValue:"ab",onChange:R,style:{textOverflow:"ellipsis"},children:[(0,k.jsx)("option",{disabled:!0,value:"ab",children:"- Select -"}),null===E||void 0===E||null===(t=E.activity_base)||void 0===t?void 0:t.map((e=>(0,k.jsx)("option",{value:e.base_id,style:{width:"4rem",textOverflow:"ellipsis"},children:e.base_description},e.base_id)))]})]})}),(0,k.jsx)(l.Z,{md:"6",children:(0,k.jsxs)(g.Z,{children:[(0,k.jsx)(Z.Z,{for:"business_id",className:"text-muted",children:"Business plan"}),(0,k.jsx)(b.Z,{type:"select",id:"business_id",name:"business_id",disabled:"3"!==(null===j||void 0===j?void 0:j.base_id),onChange:R,defaultValue:"",children:"3"===(null===j||void 0===j?void 0:j.base_id)&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("option",{value:"",children:"- Select -"}),null===E||void 0===E||null===(i=E.business_plan)||void 0===i?void 0:i.map((e=>(0,k.jsx)("option",{value:e.business_id,children:e.business_desc},e.business_id)))]})})]})})]})]}),(0,k.jsxs)(N.Z,{children:[(0,k.jsx)(r.Z,{type:"submit",color:"info",disabled:V,children:V?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(w.Z,{className:"me-2",size:"sm",color:"light"}),"Loading ..."]}):"Submit"}),(0,k.jsx)(r.Z,{color:"secondary",outline:!0,onClick:c.bind(null),children:"Cancel"})]})]})]})};t(42459);const D=e=>{let{nav:s}=e;const{auth:t}=(0,S.Z)(),[j,u]=(0,n.useState)(!1),m=()=>{u(!j)},p=(0,C.Z)(),{isLoading:v,error:g,data:Z,refetch:b,isRefetching:f}=(0,h.a)({queryKey:["projects"],queryFn:()=>p.get("".concat(1===s||null!==t&&void 0!==t&&t.user.roles.includes("Director")?"api/project":"api/project/".concat(null===t||void 0===t?void 0:t.user.employe_id,"/list")," ")).then((e=>e.data.data))});(0,n.useEffect)((()=>{b()}),[s]);const _=["Staff","Manager"];return(0,k.jsx)("div",{children:(0,k.jsx)(d.Z,{children:(0,k.jsxs)(a.Z,{style:{position:"relative"},children:[(0,k.jsxs)(l.Z,{className:"d-flex justify-content-between mb-3",col:"12",children:[(0,k.jsx)("div",{className:"",children:(0,k.jsxs)(c.Z,{tag:"h5",className:"fw-bold",children:[1===s||null!==t&&void 0!==t&&t.user.roles.includes("Director")?"All":"My"," Project Listing"]})}),(null===t||void 0===t?void 0:t.user.roles.find((e=>null===_||void 0===_?void 0:_.includes(e))))&&2===s&&(0,k.jsxs)("div",{className:"",children:[(0,k.jsxs)(r.Z,{className:"btn d-flex gap-1 align-items-center",outline:!0,color:"info",onClick:m.bind(null),size:"sm",children:[(0,k.jsx)(x(),{icon:"add"}),"Create New Project"]}),(0,k.jsx)(F,{modal:j,setModal:u,toggle:m,refetch:b})]})]}),v||f?(0,k.jsx)("div",{className:"d-flex justify-content-center",children:(0,k.jsx)("h6",{children:"Loading..."})}):g?(0,k.jsx)("div",{className:"d-flex justify-content-center",children:(0,k.jsx)("h6",{children:"Something went wrong."})}):Z.length>0?(0,k.jsxs)(o.Z,{className:"no-wrap mt-0 align-middle",responsive:!0,hover:!0,children:[(0,k.jsx)("thead",{children:(0,k.jsxs)("tr",{children:[(0,k.jsx)("th",{children:"No."}),(0,k.jsx)("th",{children:"Projects"}),(0,k.jsx)("th",{children:"Numbers"}),(0,k.jsx)("th",{children:"Levels"}),(0,k.jsx)("th",{children:"Start at"}),(0,k.jsx)("th",{children:"Status"})]})}),(0,k.jsx)("tbody",{style:{overflow:"hidden"},children:null===Z||void 0===Z?void 0:Z.map(((e,s)=>{var t,n,l,d,a,c,r;return(0,k.jsxs)("tr",{className:"border-top",children:[(0,k.jsxs)("td",{children:[s+1,"."]}),(0,k.jsxs)("td",{className:"text-success",children:[(0,k.jsx)(i.rU,{className:"fw-bold",to:"details/".concat(e.project_id),style:{textDecoration:"none"},children:e.project_name}),(0,k.jsx)("br",{}),(0,k.jsx)("span",{className:"fs-7 text-muted fw-bold",children:e.organization_name})]}),(0,k.jsx)("td",{className:"text-muted",children:e.project_number}),(0,k.jsx)("td",{className:"text-muted",children:e.level_desc}),(0,k.jsx)("td",{className:"text-muted",children:"".concat(null===e||void 0===e||null===(t=e.current_stage)||void 0===t||null===(n=t.start_date)||void 0===n?void 0:n.split("-")[2],"-").concat(null===e||void 0===e||null===(l=e.current_stage)||void 0===l||null===(d=l.start_date)||void 0===d?void 0:d.split("-")[1],"-").concat(null===e||void 0===e||null===(a=e.current_stage)||void 0===a||null===(c=a.start_date)||void 0===c?void 0:c.split("-")[0])}),(0,k.jsx)("td",{children:"business"===(null===e||void 0===e?void 0:e.category)?(0,k.jsxs)(k.Fragment,{children:["new"===e.status&&(0,k.jsx)("span",{className:"badge bg-light-info text-info rounded-pill d-inline-block fw-bold",children:"New"}),"ongoing"===e.status&&(0,k.jsx)("span",{className:"badge bg-light-primary text-primary rounded-pill d-inline-block fw-bold",children:null===e||void 0===e||null===(r=e.current_stage)||void 0===r?void 0:r.phase}),"done"===e.status&&(0,k.jsx)("span",{className:"badge bg-light-success text-success rounded-pill d-inline-block fw-bold",children:"Done"})]}):(0,k.jsx)("span",{className:"badge bg-light-success text-success rounded-pill d-inline-block fw-bold",children:"New"})})]},e.project_id)}))})]}):(0,k.jsx)("div",{className:"d-flex justify-content-center",children:(0,k.jsx)("h6",{children:"No project yet."})})]})})})};t(35754);const E=()=>{const{auth:e}=(0,S.Z)(),[s,t]=(0,n.useState)(2),d=["Manager"];return(0,k.jsxs)(k.Fragment,{children:[(null===e||void 0===e?void 0:e.user.roles.find((e=>d.includes(e))))&&(0,k.jsx)(l.Z,{children:(0,k.jsx)(l.Z,{md:"12",className:"d-flex justify-content-between mb-3 align-items-center",children:(0,k.jsxs)("div",{className:"project-nav",children:[(0,k.jsx)(i.rU,{className:"".concat(1===s&&"active"," text-muted fw-bold"),onClick:()=>t(1),children:"All Projects"}),(0,k.jsx)(i.rU,{className:"".concat(2===s&&"active"," text-muted fw-bold"),onClick:()=>t(2),children:"My Projects"})]})})}),(0,k.jsx)(D,{nav:s})]})},L=()=>(0,k.jsx)(E,{})},35754:()=>{},42459:()=>{}}]);
//# sourceMappingURL=221.c2055af0.chunk.js.map