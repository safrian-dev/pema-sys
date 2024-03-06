"use strict";(self.webpackChunkmaterialpro_main=self.webpackChunkmaterialpro_main||[]).push([[578],{79463:(e,s,t)=>{t.d(s,{Z:()=>c});var i=t(72791),a=t(11087),l=t(30690),n=t.n(l),r=t(80184);const c=e=>{let{menuOptions:s,taskId:t,status:l,action:c,progress:d}=e;const[o,h]=(0,i.useState)(!1),u=()=>{h(!1),c()};return(0,r.jsxs)("div",{className:"action",children:[(0,r.jsx)("button",{type:"button",className:"btn-option ".concat(o&&"active"),onClick:()=>h(!0),children:(0,r.jsx)(n(),{icon:"more_vert"})}),o&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"action-overlay",onClick:()=>h(!1)}),(0,r.jsx)("div",{className:"action-options rounded-3",children:null===s||void 0===s?void 0:s.options.map((e=>(0,r.jsx)("div",{children:"button"===e.type?(0,r.jsxs)("button",{type:"button",className:"text-muted",onClick:()=>{return s=e.to,c(t,s),void h(!1);var s},disabled:e.to===l||2===e.to&&0===l||2===e.to&&4===l||0===e.to&&4===l||2===e.to&&100!==d,children:[e.icon,e.label]}):"link"===e.type?(0,r.jsxs)(a.rU,{className:"text-muted",onClick:e.to,children:[e.icon,e.label]}):(0,r.jsx)("div",{className:"action-del",children:(0,r.jsxs)("button",{type:"button",onClick:u,children:[(0,r.jsx)(n(),{icon:"delete_outline"}),"Delete"]})})},e.id)))})]})]})}},31043:(e,s,t)=>{t.d(s,{F:()=>l,Z:()=>n});t(72791);var i=t(65218),a=t(80184);const l=()=>(0,a.jsx)(i.x7,{toastOptions:{className:"",style:{}}}),n=(e,s)=>{((e,s)=>{"success"===e?i.ZP.success(s):"create"===e?(0,i.ZP)(s,{icon:"\ud83e\udd17"}):"start"===e?(0,i.ZP)("Lets get started, cheer up!",{icon:"\ud83d\udcaa"}):"done"===e?(0,i.ZP)("Horeee, task done!",{icon:"\ud83d\udc4f"}):i.ZP.error(s)})(e,s)}},64876:(e,s,t)=>{t.d(s,{Z:()=>c});var i=t(39782),a=t(61443),l=t(57689),n=t(11087),r=t(80184);const c=()=>{const e=(0,l.TH)(),s=e.pathname.split("/")[1],t=e.pathname.split("/")[2];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{className:"text-capitalize",children:"".concat(t||s)}),(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(a.Z,{to:"/",tag:n.rU,className:"text-decoration-none",children:"Home"}),s?(0,r.jsx)(a.Z,{active:!0,children:s}):"",t?(0,r.jsx)(a.Z,{active:!0,children:t}):""]})]})}},54986:(e,s,t)=>{t.r(s),t.d(s,{default:()=>ce});var i=t(72791),a=t(64876),l=t(76807),n=t(43896),r=t(83449),c=t(47283),d=t(82851),o=t(29472),h=t(43464),u=t(49037),m=t(92218),p=t(81296),x=t(74463),v=t(54275),j=t(63009),g=t(39773),y=t(10829),Z=t(30690),b=t.n(Z),f=t(97892),N=t.n(f),C=t(27082),k=t(80915),w=t(93226),S=t(55866),I=t(24750),A=t(71652),_=t(6821),P=t(19127),T=t(61889),O=t(20890),D=t(49768),F=t(64554),q=t(48089),E=t(31043),L=t(80184);const V=(0,k.D)(),M=e=>{let{refetch:s}=e;const[t,a]=i.useState([]),[l,n]=i.useState([]),[r,c]=i.useState(null),[d,o]=i.useState(N()()),[h,u]=i.useState(N()()),[m,p]=i.useState(0),[x,v]=i.useState(null),[Z,f]=i.useState(0),[k,M]=i.useState(!1),K={activity:"",poin:0,start:N()(),end:N()(),category:"",progress:0},Y=(0,q.Z)(),[z,W]=(0,y.h)({queries:[{queryKey:["act"],queryFn:()=>Y.get("dapi/activities").then((e=>e.data.data))},{queryKey:["cat"],queryFn:()=>Y.get("dapi/categories").then((e=>e.data.data))}]});return(0,i.useEffect)((()=>{n(W.data),a(z.data)}),[W.data,z.data]),k?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)("div",{className:"d-flex justify-content-end mb-3",children:(0,L.jsx)(b(),{icon:"close",onClick:async e=>{e.preventDefault(),M(!1)}})}),(0,L.jsx)(w.Z,{value:r,onChange:(e,s)=>{if("string"===typeof s)c({activity:s}),f(0);else if(s&&s.inputValue)c({activity:s.inputValue}),f(0);else{c(s),f(null===s||void 0===s?void 0:s.poin);const e=W.data.filter((e=>e.id===parseInt(null===s||void 0===s?void 0:s.category,10)));(null===e||void 0===e?void 0:e.length)>0&&v(e[0])}},filterOptions:(e,s)=>{const t=V(e,s),{inputValue:i}=s,a=e.some((e=>i===e.activity));return""===i||a||t.push({inputValue:i,activity:'Add "'.concat(i,'"')}),t},selectOnFocus:!0,clearOnBlur:!0,handleHomeEndKeys:!0,id:"free-solo-with-text-demo",options:t||[],getOptionLabel:e=>"string"===typeof e?e:e.inputValue?e.inputValue:e.activity,renderOption:(e,s)=>(0,L.jsx)("li",{...e,children:s.activity}),freeSolo:!0,renderInput:e=>(0,L.jsx)(C.Z,{...e,label:"What are you doing today ?"})}),(0,L.jsxs)(j.Z,{className:"mt-3",children:[(0,L.jsx)(g.Z,{children:(0,L.jsx)(A._,{dateAdapter:I.y,children:(0,L.jsx)(S.h,{children:(0,L.jsx)(_.W,{value:d,onChange:e=>o(e),label:"Mulai"})})})}),(0,L.jsx)(g.Z,{children:(0,L.jsx)(A._,{dateAdapter:I.y,children:(0,L.jsx)(S.h,{children:(0,L.jsx)(_.W,{label:"Selesai",value:h,onChange:e=>u(e)})})})}),(0,L.jsx)(g.Z,{children:(0,L.jsx)(w.Z,{id:"disabled-options-demo",options:l||[],value:x,onChange:(e,s)=>{"string"===typeof s?v({category_name:s}):s&&s.inputValue?v({category_name:s.inputValue}):v(s)},getOptionLabel:e=>"string"===typeof e?e:e.inputValue?e.inputValue:e.category_name,renderOption:(e,s)=>(0,L.jsx)("li",{...e,children:s.category_name}),renderInput:e=>(0,L.jsx)(C.Z,{...e,label:"Category"})})})]}),(0,L.jsx)(F.Z,{sx:{p:2,borderRadius:2,marginTop:2,border:"0.5px solid #C4C4C4"},children:(0,L.jsxs)(T.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,L.jsx)(T.ZP,{item:!0,children:(0,L.jsx)(O.Z,{id:"input-slider",gutterBottom:!0,children:"Progress"})}),(0,L.jsx)(T.ZP,{item:!0,xs:!0,children:(0,L.jsx)(D.ZP,{value:"number"===typeof m?m:0,onChange:(e,s)=>p(s),"aria-labelledby":"input-slider"})}),(0,L.jsx)(T.ZP,{item:!0,children:"".concat(m,"%")})]})}),(0,L.jsx)("div",{className:"d-grid gap-2 mt-3",children:(0,L.jsx)(P.Z,{variant:"dark",size:"lg",onClick:async e=>{e.preventDefault(),null!==r&&void 0!==r&&r.activity&&null!==x&&void 0!==x&&x.id?(K.activity=null===r||void 0===r?void 0:r.activity,K.start=N()(d),K.end=N()(h),K.category=null===x||void 0===x?void 0:x.id,K.progress=m,K.poin=Z,e.preventDefault(),await Y.post("dapi/activit",K).then((()=>{(0,E.Z)("success","Data has been submitted !"),c(null),v(null),p(0),o(N()()),u(N()()),s()})).catch((e=>{(0,E.Z)("error",e)}))):(0,E.Z)("error","Fields Can't Be Empty !!")},children:"SUBMIT"})})]}):(0,L.jsx)("div",{className:"d-grid gap-2 mt-3",children:(0,L.jsx)(P.Z,{variant:"dark",size:"lg",onClick:async e=>{e.preventDefault(),M(!0)},children:"Add New Activity"})})};var K=t(16354),Y=t(46724),z=t(55211),W=t(94938),B=t(55472),U=t(90235),H=t(30337),R=t(79463);t(58988);const G=(0,U.ZP)(),J=e=>{let{data:s,isLoading:t,employe:a,refetch:l}=e;const n={options:[{id:1,icon:(0,L.jsx)(b(),{icon:"edit_note"}),type:"button",label:"Delete",to:1}]},[r,c]=(0,i.useState)([]),[d,o]=(0,i.useState)(),[u,m]=(0,i.useState)(),[p,x]=(0,i.useState)(),[v,j]=(0,i.useState)(!1),[g,y]=(0,i.useState)(!1),[Z,f]=(0,i.useState)(0),[N,C]=(0,i.useState)(!1),[k,w]=(0,i.useState)(),S=(0,q.Z)(),I={id:0,new_member:""},A={id:0,progress:0},_={id:0},T=(e,s)=>{var t;if(j(!v),o(null===(t=e[0])||void 0===t?void 0:t.employe_id),m(s),!v){const s=[];e.map((e=>s.push({label:e.first_name,value:e.employe_id}))),c(s)}},O=(e,s)=>{m(e),y(!g),g||(f(parseInt(s,10)),console.log(e))},F=async(e,s)=>{1===s&&(_.id=e,await(0,H._1)({title:"Are you sure ?",message:"Be careful, what has gone will not come back",buttons:[{label:"Yes",onClick:()=>{S.post("dapi/myactivity/delete",_).then((()=>{(0,E.Z)("success","Activity Deleted !"),l()}))}},{label:"No",onClick:()=>{}}]}))},V=e=>{C(!N),N||w(e)};return t?"Loading":(0,L.jsxs)(L.Fragment,{children:[null===s||void 0===s?void 0:s.map((e=>{var s,t;return(0,L.jsxs)(h.Z,{body:!0,className:"mb-2",children:[(0,L.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,L.jsx)(K.Z,{className:"img-pluss",color:"info",style:{height:"max-content"},children:e.category_name}),100===parseInt(e.progress,10)?(0,L.jsx)("small",{children:e.status}):(0,L.jsx)(R.Z,{menuOptions:n,taskId:e.id,status:parseInt(e.status,10),progress:parseInt(e.progress,10),action:F})]}),(0,L.jsxs)("div",{className:"board-body",children:[(0,L.jsx)("div",{className:"task-title fw-bold",children:e.activity}),(0,L.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,L.jsxs)("small",{className:"text-muted",children:["Start : ",e.start]}),(0,L.jsxs)("small",{className:"text-muted",children:["End : ",e.end]})]})]}),(0,L.jsxs)("div",{className:"d-flex justify-content-between",children:["approve"!==e.status?(0,L.jsxs)("div",{className:"member",children:[null===e||void 0===e||null===(s=e.member)||void 0===s?void 0:s.map(((e,s)=>s<2?(0,L.jsx)("img",{src:null!==e&&void 0!==e&&e.img?null===e||void 0===e?void 0:e.img:"https://i.pinimg.com/736x/10/ec/86/10ec8691f73b787677bd0bbeddbd22e0.jpg",className:"rounded-circle",alt:"avatar",width:"35",height:"35"},null===e||void 0===e?void 0:e.employe_id):"")),"approve"!==(null===e||void 0===e?void 0:e.status)?(0,L.jsx)("div",{onClick:()=>T(null===e||void 0===e?void 0:e.member,null===e||void 0===e?void 0:e.id),children:(0,L.jsx)("img",{src:"https://cdn5.vectorstock.com/i/1000x1000/38/64/color-circle-with-plus-icon-vector-13503864.jpg",className:"rounded-circle img-pluss",alt:"avatar",width:"20",height:"20"})}):""]}):(0,L.jsx)("div",{className:"member",onClick:()=>V(e.member),children:null===e||void 0===e||null===(t=e.member)||void 0===t?void 0:t.map(((e,s)=>s<2?(0,L.jsx)("img",{src:null!==e&&void 0!==e&&e.img?null===e||void 0===e?void 0:e.img:"https://i.pinimg.com/736x/10/ec/86/10ec8691f73b787677bd0bbeddbd22e0.jpg",className:"rounded-circle",alt:"avatar",width:"35",height:"35"},null===e||void 0===e?void 0:e.employe_id):""))}),"approve"===e.status?(0,L.jsxs)(K.Z,{className:"img-pluss",color:0===parseInt(e.progress,10)?"danger":100===parseInt(e.progress,10)?"success":"warning",style:{height:"max-content"},children:["Progress : ",e.progress,"%"]}):(0,L.jsxs)(K.Z,{className:"img-pluss",color:0===parseInt(e.progress,10)?"danger":100===parseInt(e.progress,10)?"success":"warning",style:{height:"max-content"},onClick:()=>O(null===e||void 0===e?void 0:e.id,e.progress),children:["Progress : ",e.progress,"%"]})]})]},e.id)})),(0,L.jsxs)(Y.Z,{isOpen:v,toggle:T,children:[(0,L.jsx)(z.Z,{toggle:T,children:"Add Another Employee"}),(0,L.jsxs)(W.Z,{children:[(0,L.jsx)(B.ZP,{components:G,isMulti:!0,value:r,options:a,onChange:e=>{c(e);const s=e.filter((e=>e.value!==d)),t=["//".concat(d,"//")];s.map((e=>t.push("//".concat(e.value,"//")))),x(t.toLocaleString())},isClearable:r.some((e=>!e.isFixed))}),(0,L.jsx)("div",{className:"d-grid gap-2 mt-3",children:(0,L.jsx)(P.Z,{onClick:async e=>{console.log(p),console.log(u),I.id=u,I.new_member=p,e.preventDefault(),await S.post("dapi/myactivity/update",I).then((()=>{j(!v),(0,E.Z)("success","Task Members has been updated !"),l()}))},children:"Update Data"})})]})]}),(0,L.jsxs)(Y.Z,{isOpen:g,toggle:O,children:[(0,L.jsxs)(z.Z,{toggle:O,children:["Live Progress (","".concat(Z,"%"),")"]}),(0,L.jsxs)(W.Z,{children:[(0,L.jsx)(D.ZP,{value:"number"===typeof Z?Z:0,onChange:(e,s)=>f(s),"aria-labelledby":"input-slider"}),(0,L.jsx)("div",{className:"d-grid gap-2 mt-3",children:(0,L.jsx)(P.Z,{onClick:async e=>{A.id=u,A.progress=Z,console.log(A),e.preventDefault(),await S.post("dapi/myactivity/progress",A).then((()=>{y(!g),(0,E.Z)("success","Progress has been updated !"),l()}))},children:"Submit Update"})})]})]}),(0,L.jsx)(Y.Z,{isOpen:N,toggle:V,children:(0,L.jsx)(W.Z,{children:null===k||void 0===k?void 0:k.map((e=>(0,L.jsx)(K.Z,{color:"primary",className:"me-2",children:e.first_name},e.employe_id)))})})]})},Q=()=>{const[e,s]=(0,i.useState)(),[t,a]=(0,i.useState)(),[l,n]=(0,i.useState)(),[r,c]=(0,i.useState)(),[d,o]=(0,i.useState)(!1),[Z,f]=(0,i.useState)("today"),N=(0,q.Z)(),C=(0,y.h)({queries:[{queryKey:["act",0],queryFn:()=>N.get("dapi/myactivity/".concat(Z)).then((e=>e.data.data))},{queryKey:["cat",1],queryFn:()=>N.get("api/employe/assignment-list").then((e=>e.data.data))}]}),k=C[0].isLoading,{refetch:w}=C[0];(0,i.useEffect)((()=>{var e,t,i,l,r,d,o;const h=null===(e=C[0])||void 0===e||null===(t=e.data)||void 0===t?void 0:t.filter((e=>0===parseInt(e.progress,10))),u=null===(i=C[0])||void 0===i||null===(l=i.data)||void 0===l?void 0:l.filter((e=>parseInt(e.progress,10)>0&&parseInt(e.progress,10)<100)),m=null===(r=C[0])||void 0===r||null===(d=r.data)||void 0===d?void 0:d.filter((e=>100===parseInt(e.progress,10)));s(h),a(u),n(m),c(null===(o=C[1])||void 0===o?void 0:o.data)}),[C[0].data]),(0,i.useEffect)((()=>{w()}),[Z]);const S=e=>{f(e),(0,E.Z)("success","My Activity fitlered by start : ".concat(e))};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(h.Z,{className:"mb-3",children:(0,L.jsx)(u.Z,{className:"p-4",children:(0,L.jsx)(M,{refetch:w})})}),(0,L.jsx)("div",{className:"d-flex justify-content-end",children:(0,L.jsxs)(m.Z,{isOpen:d,toggle:()=>o((e=>!e)),className:"mb-3",children:[(0,L.jsx)(p.Z,{caret:!0,children:(0,L.jsx)(b(),{icon:"filter_alt"})}),(0,L.jsxs)(x.Z,{children:[(0,L.jsx)(v.Z,{onClick:()=>S("today"),children:"Today"}),(0,L.jsx)(v.Z,{onClick:()=>S("yesterday"),children:"Yesterday"}),(0,L.jsx)(v.Z,{onClick:()=>S("week"),children:"This Week"}),(0,L.jsx)(v.Z,{onClick:()=>S("month"),children:"This Month"}),(0,L.jsx)(v.Z,{onClick:()=>S("year"),children:"This Years"}),(0,L.jsx)(v.Z,{onClick:()=>S("all"),children:"All The Time"})]})]})}),(0,L.jsxs)(j.Z,{children:[(0,L.jsxs)(g.Z,{md:"4",children:[(0,L.jsx)(h.Z,{className:"mb-3",body:!0,children:(0,L.jsxs)("h3",{className:"mb-0",children:["Todo(",null===e||void 0===e?void 0:e.length,")"]})}),(0,L.jsx)(J,{data:e,isLoadingAct:k,employe:r,refetch:w})]}),(0,L.jsxs)(g.Z,{md:"4",children:[(0,L.jsx)(h.Z,{className:"mb-3",body:!0,children:(0,L.jsxs)("h3",{className:"mb-0",children:["Progres(",null===t||void 0===t?void 0:t.length,")"]})}),(0,L.jsx)(J,{data:t,isLoadingAct:k,employe:r,refetch:w})]}),(0,L.jsxs)(g.Z,{md:"4",children:[(0,L.jsx)(h.Z,{className:"mb-3",body:!0,children:(0,L.jsxs)("h3",{className:"mb-0",children:["Done(",null===l||void 0===l?void 0:l.length,")"]})}),(0,L.jsx)(J,{data:l,isLoadingAct:k,employe:r,refetch:w})]})]})]})};var X=t(28755),$=t(71513),ee=t(8118),se=t(76167),te=t(42976);const ie=e=>{let{misal:s,refetch:t}=e;const[a,n]=(0,i.useState)(!1),[r,c]=(0,i.useState)(!1),[d,o]=(0,i.useState)(0),[m,p]=(0,i.useState)(""),[x,v]=(0,i.useState)(!1),[j,g]=(0,i.useState)(),[y,Z]=(0,i.useState)(""),[b,f]=(0,i.useState)(0),[N,C]=(0,i.useState)(0),[k,w]=(0,i.useState)(),S={id:0,activity:"",poin:0,category:0,status:"",catatan:""},I=(0,q.Z)(),{data:A}=(0,l.a)({queryKey:["cat"],queryFn:()=>I.get("dapi/categories").then((e=>e.data.data))}),_=e=>{n(!a),a||o(e)},T=e=>{v(!x),x||(o(e.id),g(e),Z(e.activity),f(parseInt(e.poin,10)),C(parseInt(e.category,10)))},O=e=>{c(!r),r||w(e)};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(h.Z,{children:(0,L.jsx)(u.Z,{children:(null===s||void 0===s?void 0:s.length)>0?(0,L.jsxs)(X.Z,{striped:!0,className:"mt-2",children:[(0,L.jsx)("thead",{children:(0,L.jsxs)("tr",{children:[(0,L.jsx)("th",{children:"Activities"}),(0,L.jsx)("th",{children:"Poin"}),(0,L.jsx)("th",{children:"Done By"}),(0,L.jsx)("th",{children:"Progres"}),(0,L.jsx)("th",{children:"Due Date"}),(0,L.jsx)("th",{children:"Action"})]})}),(0,L.jsx)("tbody",{children:null===s||void 0===s?void 0:s.map((e=>{var s,t;return(0,L.jsxs)("tr",{children:[(0,L.jsx)("th",{scope:"row",children:e.activity}),(0,L.jsx)("th",{scope:"row",children:e.poin}),(0,L.jsx)("th",{scope:"row",children:(0,L.jsxs)("div",{className:"member",onClick:()=>O(e.member),children:[null===e||void 0===e||null===(s=e.member)||void 0===s?void 0:s.map(((e,s)=>s<3?(0,L.jsx)("img",{src:null!==e&&void 0!==e&&e.img?null===e||void 0===e?void 0:e.img:"https://i.pinimg.com/736x/10/ec/86/10ec8691f73b787677bd0bbeddbd22e0.jpg",className:"rounded-circle",alt:"avatar",width:"35",height:"35"},null===e||void 0===e?void 0:e.employe_id):"")),(null===e||void 0===e||null===(t=e.member)||void 0===t?void 0:t.length)>3?(0,L.jsx)("img",{src:"https://cdn5.vectorstock.com/i/1000x1000/38/64/color-circle-with-plus-icon-vector-13503864.jpg",className:"rounded-circle img-pluss",alt:"avatar",width:"20",height:"20"}):""]})}),(0,L.jsx)("th",{scope:"row",children:(0,L.jsxs)(K.Z,{color:"success",children:[e.progress," % "]})}),(0,L.jsx)("th",{scope:"row",children:new Date(e.end).toLocaleString()}),(0,L.jsx)("th",{scope:"row",children:(0,L.jsxs)($.Z,{size:"sm",children:[(0,L.jsx)(P.Z,{color:"danger",onClick:()=>_(e.id),children:"Reject"}),(0,L.jsx)(P.Z,{color:"success",onClick:()=>T(e),children:"Approve"})]})})]},e.id)}))})]}):(0,L.jsx)("p",{className:"text-center mt-2",children:"no data available yet, please come back in a moment"})})}),(0,L.jsxs)(Y.Z,{isOpen:a,toggle:_,children:[(0,L.jsx)(z.Z,{toggle:_,children:"What the reason ?"}),(0,L.jsxs)(W.Z,{children:[(0,L.jsx)(ee.Z,{id:"exampleText",name:"text",type:"textarea",value:m,onChange:e=>p(e.target.value)}),(0,L.jsx)("div",{className:"d-grid gap-2 mt-3",children:(0,L.jsx)(P.Z,{onClick:async e=>{S.status="reject",S.catatan=m,S.id=d,""!==m?(e.preventDefault(),await I.post("dapi/mustreview/review",S).then((()=>{(0,E.Z)("success","Rejected Succesfully !!"),p(""),n(!a),t()})).catch((e=>{(0,E.Z)("error",e),n(!a)}))):(n(!a),(0,E.Z)("error","Please Privide your reason !!"))},children:"Submit"})})]})]}),(0,L.jsxs)(Y.Z,{isOpen:x,toggle:T,children:[(0,L.jsx)(z.Z,{toggle:T,children:"Approve Form"}),(0,L.jsxs)(W.Z,{children:[(0,L.jsxs)(se.Z,{children:[(0,L.jsx)(te.Z,{for:"activity",children:"Activity"}),(0,L.jsx)(ee.Z,{id:"activity",name:"activity",onChange:e=>Z(e.target.value),value:y,disabled:0!==parseInt(null===j||void 0===j?void 0:j.poin,10)})]}),(0,L.jsxs)(se.Z,{children:[(0,L.jsx)(te.Z,{for:"activity",children:"Poin"}),(0,L.jsx)(ee.Z,{id:"activity",name:"activity",type:"number",onChange:e=>f(e.target.value),value:parseInt(b,10),disabled:0!==parseInt(null===j||void 0===j?void 0:j.poin,10)})]}),(0,L.jsxs)(se.Z,{children:[(0,L.jsx)(te.Z,{for:"activity",children:"Category"}),(0,L.jsx)(ee.Z,{className:"mb-3",type:"select",value:N,disabled:0!==parseInt(null===j||void 0===j?void 0:j.poin,10),onChange:e=>C(e.target.value),children:null===A||void 0===A?void 0:A.map((e=>(0,L.jsx)("option",{value:e.id,children:e.category_name},e.id)))})]}),(0,L.jsx)("div",{className:"d-grid gap-2 mt-3",children:(0,L.jsx)(P.Z,{onClick:async e=>{S.status="approve",S.id=d,S.poin=b,S.activity=y,S.category=N,0!==b?(e.preventDefault(),await I.post("dapi/mustreview/review",S).then((()=>{(0,E.Z)("success","Approved Succesfully !!"),p(""),v(!x),t()})).catch((e=>{(0,E.Z)("error",e),v(!x)}))):(v(!x),(0,E.Z)("error","The Activity Poin must more than 0 !"))},children:"Approve"})})]})]}),(0,L.jsx)(Y.Z,{isOpen:r,toggle:O,children:(0,L.jsx)(W.Z,{children:null===k||void 0===k?void 0:k.map((e=>(0,L.jsx)(K.Z,{color:"primary",className:"me-2",children:e.first_name},e.employe_id)))})})]})};var ae=t(57823),le=t(19623);const ne=()=>{const[e,s]=(0,i.useState)("today"),[t,a]=(0,i.useState)(!1),[n,r]=(0,i.useState)(),[c,d]=(0,i.useState)(!1),[o,y]=(0,i.useState)(0),[Z,f]=(0,i.useState)(0),[N,C]=(0,i.useState)(0),k=(0,q.Z)(),{data:w,refetch:S,isLoading:I}=(0,l.a)({queryKey:["catdfhds"],queryFn:()=>k.get("dapi/myteam/activities/".concat(e)).then((e=>e.data.data))}),A=e=>{a(!t),t||r(e)},_=e=>{s(e),(0,E.Z)("success","My Activity fitlered by start : ".concat(e))};return(0,i.useEffect)((()=>{S()}),[e]),(0,i.useEffect)((()=>{const e=null===w||void 0===w?void 0:w.filter((e=>0===parseInt(e.progress,10))),s=null===w||void 0===w?void 0:w.filter((e=>parseInt(e.progress,10)>0&&parseInt(e.progress,10)<100)),t=null===w||void 0===w?void 0:w.filter((e=>100===parseInt(e.progress,10)));y(null===e||void 0===e?void 0:e.length),f(null===s||void 0===s?void 0:s.length),C(null===t||void 0===t?void 0:t.length)}),[w]),console.log(w),(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(h.Z,{children:(0,L.jsxs)(u.Z,{children:[(0,L.jsxs)("div",{className:"d-flex justify-content-end",children:[(0,L.jsx)(ae.Z,{children:(0,L.jsxs)(j.Z,{children:[(0,L.jsx)(g.Z,{children:(0,L.jsx)(le.Z,{bg:"danger",icon:"play-circle",title:o,subtitle:"Todo Activity",loading:I})}),(0,L.jsx)(g.Z,{children:(0,L.jsx)(le.Z,{bg:"warning",icon:"arrow-repeat",title:Z,subtitle:"On Process",loading:I})}),(0,L.jsx)(g.Z,{children:(0,L.jsx)(le.Z,{bg:"success",icon:"check-circle",title:N,subtitle:"Done Activity",loading:I})})]})}),(0,L.jsx)("div",{children:(0,L.jsxs)(m.Z,{isOpen:c,toggle:()=>d((e=>!e)),className:"mb-3",children:[(0,L.jsx)(p.Z,{caret:!0,children:(0,L.jsx)(b(),{icon:"filter_alt"})}),(0,L.jsxs)(x.Z,{children:[(0,L.jsx)(v.Z,{onClick:()=>_("today"),children:"Today"}),(0,L.jsx)(v.Z,{onClick:()=>_("yesterday"),children:"Yesterday"}),(0,L.jsx)(v.Z,{onClick:()=>_("week"),children:"This Week"}),(0,L.jsx)(v.Z,{onClick:()=>_("month"),children:"This Month"}),(0,L.jsx)(v.Z,{onClick:()=>_("year"),children:"This Years"}),(0,L.jsx)(v.Z,{onClick:()=>_("all"),children:"All The Time"})]})]})})]}),(null===w||void 0===w?void 0:w.length)>0?(0,L.jsxs)(X.Z,{striped:!0,className:"mt-2",id:"printablediv",children:[(0,L.jsx)("thead",{children:(0,L.jsxs)("tr",{children:[(0,L.jsx)("th",{children:"Activities"}),(0,L.jsx)("th",{children:"Due Date"}),(0,L.jsx)("th",{children:"Poin"}),(0,L.jsx)("th",{children:"Assignee"}),(0,L.jsx)("th",{children:"Progres"}),(0,L.jsx)("th",{children:"Status"})]})}),(0,L.jsx)("tbody",{children:null===w||void 0===w?void 0:w.map((e=>{var s,t;return(0,L.jsxs)("tr",{children:[(0,L.jsx)("th",{scope:"row",children:e.activity}),(0,L.jsx)("th",{scope:"row",children:e.end}),(0,L.jsx)("th",{scope:"row",children:e.poin}),(0,L.jsx)("th",{scope:"row",children:(0,L.jsxs)("div",{className:"member",onClick:()=>A(e.member),children:[null===e||void 0===e||null===(s=e.member)||void 0===s?void 0:s.map(((e,s)=>s<3?(0,L.jsx)("img",{src:null!==e&&void 0!==e&&e.img?null===e||void 0===e?void 0:e.img:"https://i.pinimg.com/736x/10/ec/86/10ec8691f73b787677bd0bbeddbd22e0.jpg",className:"rounded-circle",alt:"avatar",width:"35",height:"35"},null===e||void 0===e?void 0:e.employe_id):"")),(null===e||void 0===e||null===(t=e.member)||void 0===t?void 0:t.length)>3?(0,L.jsx)("img",{src:"https://cdn5.vectorstock.com/i/1000x1000/38/64/color-circle-with-plus-icon-vector-13503864.jpg",className:"rounded-circle img-pluss",alt:"avatar",width:"20",height:"20"}):""]})}),(0,L.jsx)("th",{scope:"row",children:(0,L.jsxs)(K.Z,{color:100===parseInt(null===e||void 0===e?void 0:e.progress,10)?"success":"warning",children:[e.progress," %"]})}),(0,L.jsx)("th",{scope:"row",children:(0,L.jsx)(K.Z,{color:"approve"===(null===e||void 0===e?void 0:e.status)?"success":"warning",children:e.status})})]},e.id)}))})]}):(0,L.jsx)("p",{className:"text-center mt-2",children:"no data available yet, please come back in a moment"})]})}),(0,L.jsx)(Y.Z,{isOpen:t,toggle:A,children:(0,L.jsx)(W.Z,{children:null===n||void 0===n?void 0:n.map((e=>(0,L.jsx)(K.Z,{color:"primary",className:"me-2",children:e.first_name},e.employe_id)))})})]})},re=()=>{const[e,s]=i.useState("1"),t=(0,q.Z)(),{data:a,refetch:u}=(0,l.a)({queryKey:["todos"],queryFn:()=>t.get("dapi/mustreview").then((e=>e.data.data))});return(0,L.jsx)(L.Fragment,{children:(0,L.jsxs)(r.ZP,{value:e,children:[(0,L.jsx)(h.Z,{className:"mb-1",children:(0,L.jsxs)(c.Z,{onChange:(e,t)=>{s(t)},"aria-label":"lab API tabs example",children:[(0,L.jsx)(n.Z,{label:(0,L.jsxs)(o.Z,{badgeContent:0,anchorOrigin:{vertical:"top",horizontal:"right"},color:"primary",children:[(0,L.jsx)("strong",{children:"MY ACTIVITY"})," \xa0\xa0"]}),value:"1"}),(0,L.jsx)(n.Z,{label:(0,L.jsxs)(o.Z,{badgeContent:0,anchorOrigin:{vertical:"top",horizontal:"right"},color:"primary",children:[(0,L.jsx)("strong",{children:"TEAMS ACTIVITY"})," \xa0\xa0"]}),value:"2"}),(0,L.jsx)(n.Z,{label:(0,L.jsxs)(o.Z,{badgeContent:null===a||void 0===a?void 0:a.length,anchorOrigin:{vertical:"top",horizontal:"right"},color:"primary",children:[(0,L.jsx)("strong",{children:"NEED TO REVIEW"})," \xa0\xa0"]}),value:"3"})]})}),(0,L.jsx)(d.Z,{value:"1",className:"ps-0 pe-0",children:(0,L.jsx)(Q,{})}),(0,L.jsx)(d.Z,{value:"2",className:"ps-0 pe-0",children:(0,L.jsx)(ne,{})}),(0,L.jsx)(d.Z,{value:"3",className:"ps-0 pe-0",children:(0,L.jsx)(ie,{misal:a,refetch:u})})]})})},ce=()=>(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(a.Z,{}),(0,L.jsx)(re,{})]})},19623:(e,s,t)=>{t.d(s,{Z:()=>r});var i=t(43464),a=t(49037),l=t(80971),n=t(80184);const r=e=>{let{bg:s,icon:t,title:r,subtitle:c,loading:d}=e;return(0,n.jsx)(i.Z,{className:"rounded-3",children:(0,n.jsx)(a.Z,{children:(0,n.jsxs)("div",{className:"d-flex align-items-center",children:[(0,n.jsx)("span",{className:"circle-box md-box text-dark-white bg-".concat(s),children:(0,n.jsx)("i",{className:"fs-2 bi bi-".concat(t)})}),(0,n.jsxs)("div",{className:"ms-3",children:[(0,n.jsx)("h2",{className:"mb-1 fw-normal",children:d?"...":r}),(0,n.jsx)(l.Z,{className:"fs-6 text-muted",children:c})]})]})})})}}}]);
//# sourceMappingURL=578.1cadc130.chunk.js.map