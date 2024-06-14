"use strict";(self.webpackChunkmaterialpro_main=self.webpackChunkmaterialpro_main||[]).push([[578],{79463:(e,s,t)=>{t.d(s,{Z:()=>c});var i=t(72791),a=t(11087),l=t(30690),n=t.n(l),r=t(80184);const c=e=>{let{menuOptions:s,taskId:t,status:l,action:c,progress:o,duplicateFn:d}=e;const[h,u]=(0,i.useState)(!1),p=()=>{u(!1),c()};return(0,r.jsxs)("div",{className:"action",children:[(0,r.jsx)("button",{type:"button",className:"btn-option ".concat(h&&"active"),onClick:()=>u(!0),children:(0,r.jsx)(n(),{icon:"more_vert"})}),h&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"action-overlay",onClick:()=>u(!1)}),(0,r.jsx)("div",{className:"action-options rounded-3",children:null===s||void 0===s?void 0:s.options.map((e=>(0,r.jsx)("div",{children:"duplicate"===e.to?(0,r.jsxs)("button",{type:"button",className:"text-muted",disabled:!0,onClick:()=>d(t),children:[e.icon,"Duplicate"]}):"button"===e.type?(0,r.jsxs)("button",{type:"button",className:"text-muted",onClick:()=>{return s=e.to,c(t,s),void u(!1);var s},disabled:e.to===l||2===e.to&&0===l||2===e.to&&4===l||0===e.to&&4===l||2===e.to&&100!==o,children:[e.icon,e.label]}):"link"===e.type?(0,r.jsxs)(a.rU,{className:"text-muted",onClick:e.to,children:[e.icon,e.label]}):(0,r.jsx)("div",{className:"action-del",children:(0,r.jsxs)("button",{type:"button",onClick:p,children:[(0,r.jsx)(n(),{icon:"delete_outline"}),"Delete"]})})},e.id)))})]})]})}},31043:(e,s,t)=>{t.d(s,{F:()=>l,Z:()=>n});t(72791);var i=t(65218),a=t(80184);const l=()=>(0,a.jsx)(i.x7,{toastOptions:{className:"",style:{}}}),n=(e,s)=>{((e,s)=>{"success"===e?i.ZP.success(s):"create"===e?(0,i.ZP)(s,{icon:"\ud83e\udd17"}):"start"===e?(0,i.ZP)("Lets get started, cheer up!",{icon:"\ud83d\udcaa"}):"done"===e?(0,i.ZP)("Horeee, task done!",{icon:"\ud83d\udc4f"}):i.ZP.error(s)})(e,s)}},64876:(e,s,t)=>{t.d(s,{Z:()=>c});var i=t(39782),a=t(61443),l=t(57689),n=t(11087),r=t(80184);const c=()=>{const e=(0,l.TH)(),s=e.pathname.split("/")[1],t=e.pathname.split("/")[2];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{className:"text-capitalize",children:"".concat(t||s)}),(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(a.Z,{to:"/",tag:n.rU,className:"text-decoration-none",children:"Home"}),s?(0,r.jsx)(a.Z,{active:!0,children:s}):"",t?(0,r.jsx)(a.Z,{active:!0,children:t}):""]})]})}},54986:(e,s,t)=>{t.r(s),t.d(s,{default:()=>he});var i=t(72791),a=t(64876),l=t(76807),n=t(43896),r=t(83449),c=t(47283),o=t(82851),d=t(29472),h=t(43464),u=t(49037),p=t(92218),m=t(81296),x=t(74463),v=t(54275),j=t(63009),g=t(39773),y=t(10829),Z=t(30690),b=t.n(Z),f=t(97892),N=t.n(f),C=t(27082),k=t(80915),w=t(93226),S=t(55866),A=t(24750),_=t(71652),I=t(6821),P=t(19127),D=t(61889),T=t(20890),O=t(49768),F=t(64554),q=t(48089),E=t(31043),L=t(80184);const M=(0,k.D)(),V=e=>{let{refetch:s}=e;const[t,a]=i.useState([]),[l,n]=i.useState([]),[r,c]=i.useState(null),[o,d]=i.useState(N()()),[h,u]=i.useState(N()()),[p,m]=i.useState(0),[x,v]=i.useState(null),[Z,f]=i.useState(0),[k,V]=i.useState(!1),z={activity:"",poin:0,start:N()(),end:N()(),category:"",progress:0},Y=(0,q.Z)(),[K,B]=(0,y.h)({queries:[{queryKey:["act"],queryFn:()=>Y.get("dapi/activities").then((e=>e.data.data))},{queryKey:["cat"],queryFn:()=>Y.get("dapi/categories").then((e=>e.data.data))}]});return(0,i.useEffect)((()=>{n(B.data),a(K.data)}),[B.data,K.data]),k?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)("div",{className:"d-flex justify-content-end mb-3",children:(0,L.jsx)(b(),{icon:"close",onClick:async e=>{e.preventDefault(),V(!1)}})}),(0,L.jsx)(w.Z,{value:r,onChange:(e,s)=>{if("string"===typeof s)c({activity:s}),f(0);else if(s&&s.inputValue)c({activity:s.inputValue}),f(0);else{c(s),f(null===s||void 0===s?void 0:s.poin);const e=B.data.filter((e=>e.id===parseInt(null===s||void 0===s?void 0:s.category,10)));(null===e||void 0===e?void 0:e.length)>0&&v(e[0])}},filterOptions:(e,s)=>{const t=M(e,s),{inputValue:i}=s,a=e.some((e=>i===e.activity));return""===i||a||t.push({inputValue:i,activity:'Add "'.concat(i,'"')}),t},selectOnFocus:!0,clearOnBlur:!0,handleHomeEndKeys:!0,id:"free-solo-with-text-demo",options:t||[],getOptionLabel:e=>"string"===typeof e?e:e.inputValue?e.inputValue:e.activity,renderOption:(e,s)=>(0,L.jsx)("li",{...e,children:s.activity}),freeSolo:!0,renderInput:e=>(0,L.jsx)(C.Z,{...e,label:"What are you doing today ?"})}),(0,L.jsxs)(j.Z,{className:"mt-3",children:[(0,L.jsx)(g.Z,{children:(0,L.jsx)(_._,{dateAdapter:A.y,children:(0,L.jsx)(S.h,{children:(0,L.jsx)(I.W,{value:o,onChange:e=>d(e),label:"Mulai"})})})}),(0,L.jsx)(g.Z,{children:(0,L.jsx)(_._,{dateAdapter:A.y,children:(0,L.jsx)(S.h,{children:(0,L.jsx)(I.W,{label:"Selesai",value:h,onChange:e=>u(e)})})})}),(0,L.jsx)(g.Z,{children:(0,L.jsx)(w.Z,{id:"disabled-options-demo",options:l||[],value:x,onChange:(e,s)=>{"string"===typeof s?v({category_name:s}):s&&s.inputValue?v({category_name:s.inputValue}):v(s)},getOptionLabel:e=>"string"===typeof e?e:e.inputValue?e.inputValue:e.category_name,renderOption:(e,s)=>(0,L.jsx)("li",{...e,children:s.category_name}),renderInput:e=>(0,L.jsx)(C.Z,{...e,label:"Category"})})})]}),(0,L.jsx)(F.Z,{sx:{p:2,borderRadius:2,marginTop:2,border:"0.5px solid #C4C4C4"},children:(0,L.jsxs)(D.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,L.jsx)(D.ZP,{item:!0,children:(0,L.jsx)(T.Z,{id:"input-slider",gutterBottom:!0,children:"Progress"})}),(0,L.jsx)(D.ZP,{item:!0,xs:!0,children:(0,L.jsx)(O.ZP,{value:"number"===typeof p?p:0,onChange:(e,s)=>m(s),"aria-labelledby":"input-slider"})}),(0,L.jsx)(D.ZP,{item:!0,children:"".concat(p,"%")})]})}),(0,L.jsx)("div",{className:"d-grid gap-2 mt-3",children:(0,L.jsx)(P.Z,{variant:"dark",size:"lg",onClick:async e=>{e.preventDefault(),null!==r&&void 0!==r&&r.activity&&null!==x&&void 0!==x&&x.id?(z.activity=null===r||void 0===r?void 0:r.activity,z.start=N()(o),z.end=N()(h),z.category=null===x||void 0===x?void 0:x.id,z.progress=p,z.poin=Z,e.preventDefault(),await Y.post("dapi/activit",z).then((()=>{(0,E.Z)("success","Data has been submitted !"),c(null),v(null),m(0),d(N()()),u(N()()),s()})).catch((e=>{(0,E.Z)("error",e)}))):(0,E.Z)("error","Fields Can't Be Empty !!")},children:"SUBMIT"})})]}):(0,L.jsx)("div",{className:"d-grid gap-2 mt-3",children:(0,L.jsx)(P.Z,{variant:"dark",size:"lg",onClick:async e=>{e.preventDefault(),V(!0)},children:"Add New Activity"})})};var z=t(16354),Y=t(46724),K=t(55211),B=t(94938),W=t(55472),R=t(90235),U=t(30337),H=t(79463);t(58988);const J=(0,R.ZP)(),G=e=>{let{data:s,isLoading:t,employe:a,refetch:l}=e;const n={options:[{id:1,icon:(0,L.jsx)(b(),{icon:"edit_note"}),type:"button",label:"Delete",to:1}]},[r,c]=(0,i.useState)([]),[o,d]=(0,i.useState)(),[u,p]=(0,i.useState)(),[m,x]=(0,i.useState)(),[v,j]=(0,i.useState)(!1),[g,y]=(0,i.useState)(!1),[Z,f]=(0,i.useState)(0),[N,C]=(0,i.useState)(!1),[k,w]=(0,i.useState)(),S=(0,q.Z)(),A={id:0,new_member:""},_={id:0,progress:0},I={id:0},D=(e,s)=>{var t;if(j(!v),d(null===(t=e[0])||void 0===t?void 0:t.employe_id),p(s),!v){const s=[];e.map((e=>s.push({label:e.first_name,value:e.employe_id}))),c(s)}},T=(e,s)=>{p(e),y(!g),g||(f(parseInt(s,10)),console.log(e))},F=async(e,s)=>{1===s&&(I.id=e,await(0,U._1)({title:"Are you sure ?",message:"Be careful, what has gone will not come back",buttons:[{label:"Yes",onClick:()=>{S.post("dapi/myactivity/delete",I).then((()=>{(0,E.Z)("success","Activity Deleted !"),l()}))}},{label:"No",onClick:()=>{}}]}))},M=e=>{C(!N),N||w(e)};return t?"Loading":(0,L.jsxs)(L.Fragment,{children:[null===s||void 0===s?void 0:s.map((e=>{var s,t;return(0,L.jsxs)(h.Z,{body:!0,className:"mb-2",children:[(0,L.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,L.jsx)(z.Z,{className:"img-pluss",color:"info",style:{height:"max-content"},children:e.category_name}),100===parseInt(e.progress,10)?(0,L.jsx)("small",{children:e.status}):(0,L.jsx)(H.Z,{menuOptions:n,taskId:e.id,status:parseInt(e.status,10),progress:parseInt(e.progress,10),action:F})]}),(0,L.jsxs)("div",{className:"board-body",children:[(0,L.jsx)("div",{className:"task-title fw-bold",children:e.activity}),(0,L.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,L.jsxs)("small",{className:"text-muted",children:["Start : ",e.start]}),(0,L.jsxs)("small",{className:"text-muted",children:["End : ",e.end]})]})]}),(0,L.jsxs)("div",{className:"d-flex justify-content-between",children:["approve"!==e.status?(0,L.jsxs)("div",{className:"member",children:[null===e||void 0===e||null===(s=e.member)||void 0===s?void 0:s.map(((e,s)=>s<2?(0,L.jsx)("img",{src:null!==e&&void 0!==e&&e.img?null===e||void 0===e?void 0:e.img:"https://i.pinimg.com/736x/10/ec/86/10ec8691f73b787677bd0bbeddbd22e0.jpg",className:"rounded-circle",alt:"avatar",width:"35",height:"35"},null===e||void 0===e?void 0:e.employe_id):"")),"approve"!==(null===e||void 0===e?void 0:e.status)?(0,L.jsx)("div",{onClick:()=>D(null===e||void 0===e?void 0:e.member,null===e||void 0===e?void 0:e.id),children:(0,L.jsx)("img",{src:"https://cdn5.vectorstock.com/i/1000x1000/38/64/color-circle-with-plus-icon-vector-13503864.jpg",className:"rounded-circle img-pluss",alt:"avatar",width:"20",height:"20"})}):""]}):(0,L.jsx)("div",{className:"member",onClick:()=>M(e.member),children:null===e||void 0===e||null===(t=e.member)||void 0===t?void 0:t.map(((e,s)=>s<2?(0,L.jsx)("img",{src:null!==e&&void 0!==e&&e.img?null===e||void 0===e?void 0:e.img:"https://i.pinimg.com/736x/10/ec/86/10ec8691f73b787677bd0bbeddbd22e0.jpg",className:"rounded-circle",alt:"avatar",width:"35",height:"35"},null===e||void 0===e?void 0:e.employe_id):""))}),"approve"===e.status?(0,L.jsxs)(z.Z,{className:"img-pluss",color:0===parseInt(e.progress,10)?"danger":100===parseInt(e.progress,10)?"success":"warning",style:{height:"max-content"},children:["Progress : ",e.progress,"%"]}):(0,L.jsxs)(z.Z,{className:"img-pluss",color:0===parseInt(e.progress,10)?"danger":100===parseInt(e.progress,10)?"success":"warning",style:{height:"max-content"},onClick:()=>T(null===e||void 0===e?void 0:e.id,e.progress),children:["Progress : ",e.progress,"%"]})]})]},e.id)})),(0,L.jsxs)(Y.Z,{isOpen:v,toggle:D,children:[(0,L.jsx)(K.Z,{toggle:D,children:"Add Another Employee"}),(0,L.jsxs)(B.Z,{children:[(0,L.jsx)(W.ZP,{components:J,isMulti:!0,value:r,options:a,onChange:e=>{c(e);const s=e.filter((e=>e.value!==o)),t=["//".concat(o,"//")];s.map((e=>t.push("//".concat(e.value,"//")))),x(t.toLocaleString())},isClearable:r.some((e=>!e.isFixed))}),(0,L.jsx)("div",{className:"d-grid gap-2 mt-3",children:(0,L.jsx)(P.Z,{onClick:async e=>{console.log(m),console.log(u),A.id=u,A.new_member=m,e.preventDefault(),await S.post("dapi/myactivity/update",A).then((()=>{j(!v),(0,E.Z)("success","Task Members has been updated !"),l()}))},children:"Update Data"})})]})]}),(0,L.jsxs)(Y.Z,{isOpen:g,toggle:T,children:[(0,L.jsxs)(K.Z,{toggle:T,children:["Live Progress (","".concat(Z,"%"),")"]}),(0,L.jsxs)(B.Z,{children:[(0,L.jsx)(O.ZP,{value:"number"===typeof Z?Z:0,onChange:(e,s)=>f(s),"aria-labelledby":"input-slider"}),(0,L.jsx)("div",{className:"d-grid gap-2 mt-3",children:(0,L.jsx)(P.Z,{onClick:async e=>{_.id=u,_.progress=Z,console.log(_),e.preventDefault(),await S.post("dapi/myactivity/progress",_).then((()=>{y(!g),(0,E.Z)("success","Progress has been updated !"),l()}))},children:"Submit Update"})})]})]}),(0,L.jsx)(Y.Z,{isOpen:N,toggle:M,children:(0,L.jsx)(B.Z,{children:null===k||void 0===k?void 0:k.map((e=>(0,L.jsx)(z.Z,{color:"primary",className:"me-2",children:e.first_name},e.employe_id)))})})]})},Q=()=>{const[e,s]=(0,i.useState)(),[t,a]=(0,i.useState)(),[l,n]=(0,i.useState)(),[r,c]=(0,i.useState)(),[o,d]=(0,i.useState)(!1),[Z,f]=(0,i.useState)("today"),N=(0,q.Z)(),C=(0,y.h)({queries:[{queryKey:["act",0],queryFn:()=>N.get("dapi/myactivity/".concat(Z)).then((e=>e.data.data))},{queryKey:["cat",1],queryFn:()=>N.get("api/employe/assignment-list?search=all").then((e=>e.data.data))}]}),k=C[0].isLoading,{refetch:w}=C[0];(0,i.useEffect)((()=>{var e,t,i,l,r,o,d;const h=null===(e=C[0])||void 0===e||null===(t=e.data)||void 0===t?void 0:t.filter((e=>0===parseInt(e.progress,10))),u=null===(i=C[0])||void 0===i||null===(l=i.data)||void 0===l?void 0:l.filter((e=>parseInt(e.progress,10)>0&&parseInt(e.progress,10)<100)),p=null===(r=C[0])||void 0===r||null===(o=r.data)||void 0===o?void 0:o.filter((e=>100===parseInt(e.progress,10)));s(h),a(u),n(p),c(null===(d=C[1])||void 0===d?void 0:d.data)}),[C[0].data]),(0,i.useEffect)((()=>{w()}),[Z]);const S=e=>{f(e),(0,E.Z)("success","My Activity fitlered by start : ".concat(e))};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(h.Z,{className:"mb-3",children:(0,L.jsx)(u.Z,{className:"p-4",children:(0,L.jsx)(V,{refetch:w})})}),(0,L.jsx)("div",{className:"d-flex justify-content-end",children:(0,L.jsxs)(p.Z,{isOpen:o,toggle:()=>d((e=>!e)),className:"mb-3",children:[(0,L.jsx)(m.Z,{caret:!0,children:(0,L.jsx)(b(),{icon:"filter_alt"})}),(0,L.jsxs)(x.Z,{children:[(0,L.jsx)(v.Z,{onClick:()=>S("today"),children:"Today"}),(0,L.jsx)(v.Z,{onClick:()=>S("yesterday"),children:"Yesterday"}),(0,L.jsx)(v.Z,{onClick:()=>S("week"),children:"This Week"}),(0,L.jsx)(v.Z,{onClick:()=>S("month"),children:"This Month"}),(0,L.jsx)(v.Z,{onClick:()=>S("year"),children:"This Years"}),(0,L.jsx)(v.Z,{onClick:()=>S("all"),children:"All The Time"})]})]})}),(0,L.jsxs)(j.Z,{children:[(0,L.jsxs)(g.Z,{md:"4",children:[(0,L.jsx)(h.Z,{className:"mb-3",body:!0,children:(0,L.jsxs)("h3",{className:"mb-0",children:["Todo(",null===e||void 0===e?void 0:e.length,")"]})}),(0,L.jsx)(G,{data:e,isLoadingAct:k,employe:r,refetch:w})]}),(0,L.jsxs)(g.Z,{md:"4",children:[(0,L.jsx)(h.Z,{className:"mb-3",body:!0,children:(0,L.jsxs)("h3",{className:"mb-0",children:["Progres(",null===t||void 0===t?void 0:t.length,")"]})}),(0,L.jsx)(G,{data:t,isLoadingAct:k,employe:r,refetch:w})]}),(0,L.jsxs)(g.Z,{md:"4",children:[(0,L.jsx)(h.Z,{className:"mb-3",body:!0,children:(0,L.jsxs)("h3",{className:"mb-0",children:["Done(",null===l||void 0===l?void 0:l.length,")"]})}),(0,L.jsx)(G,{data:l,isLoadingAct:k,employe:r,refetch:w})]})]})]})};var X=t(17834),$=t(28755),ee=t(71513),se=t(8118),te=t(76167),ie=t(42976);const ae=e=>{let{misal:s,refetch:t}=e;const[a,n]=(0,i.useState)(!1),[r,c]=(0,i.useState)(!1),[o,d]=(0,i.useState)(0),[p,m]=(0,i.useState)(""),[x,v]=(0,i.useState)(!1),[j,g]=(0,i.useState)(),[y,Z]=(0,i.useState)(""),[b,f]=(0,i.useState)(0),[N,C]=(0,i.useState)(0),[k,w]=(0,i.useState)(),S={id:0,activity:"",poin:0,category:0,status:"",catatan:""},A=(0,q.Z)(),{data:_}=(0,l.a)({queryKey:["cat"],queryFn:()=>A.get("dapi/categories").then((e=>e.data.data))}),I=e=>{n(!a),a||d(e)},D=e=>{v(!x),x||(d(e.id),g(e),Z(e.activity),f(parseInt(e.poin,10)),C(parseInt(e.category,10)))},T=e=>{c(!r),r||w(e)};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(h.Z,{children:(0,L.jsx)(u.Z,{children:(null===s||void 0===s?void 0:s.length)>0?(0,L.jsxs)($.Z,{striped:!0,className:"mt-2",responsive:!0,children:[(0,L.jsx)("thead",{children:(0,L.jsxs)("tr",{children:[(0,L.jsx)("th",{children:"Activities"}),(0,L.jsx)("th",{children:"Poin"}),(0,L.jsx)("th",{children:"Done By"}),(0,L.jsx)("th",{children:"Progres"}),(0,L.jsx)("th",{children:"Due Date"}),(0,L.jsx)("th",{children:"Action"})]})}),(0,L.jsx)("tbody",{children:null===s||void 0===s?void 0:s.map((e=>{var s,t;return(0,L.jsxs)("tr",{children:[(0,L.jsx)("th",{scope:"row",children:e.activity}),(0,L.jsx)("th",{scope:"row",children:e.poin}),(0,L.jsx)("th",{scope:"row",children:(0,L.jsxs)("div",{className:"member",onClick:()=>T(e.member),children:[null===e||void 0===e||null===(s=e.member)||void 0===s?void 0:s.map(((e,s)=>s<3?(0,L.jsx)("img",{src:null!==e&&void 0!==e&&e.img?null===e||void 0===e?void 0:e.img:"https://i.pinimg.com/736x/10/ec/86/10ec8691f73b787677bd0bbeddbd22e0.jpg",className:"rounded-circle",alt:"avatar",width:"35",height:"35"},null===e||void 0===e?void 0:e.employe_id):"")),(null===e||void 0===e||null===(t=e.member)||void 0===t?void 0:t.length)>3?(0,L.jsx)("img",{src:"https://cdn5.vectorstock.com/i/1000x1000/38/64/color-circle-with-plus-icon-vector-13503864.jpg",className:"rounded-circle img-pluss",alt:"avatar",width:"20",height:"20"}):""]})}),(0,L.jsx)("th",{scope:"row",children:(0,L.jsxs)(z.Z,{color:"success",children:[e.progress," % "]})}),(0,L.jsx)("th",{scope:"row",children:new Date(e.end).toLocaleString()}),(0,L.jsx)("th",{scope:"row",children:(0,L.jsxs)(ee.Z,{size:"sm",children:[(0,L.jsx)(P.Z,{color:"danger",onClick:()=>I(e.id),children:"Reject"}),(0,L.jsx)(P.Z,{color:"success",onClick:()=>D(e),children:"Approve"})]})})]},e.id)}))})]}):(0,L.jsx)("p",{className:"text-center mt-2",children:"no data available yet, please come back in a moment"})})}),(0,L.jsxs)(Y.Z,{isOpen:a,toggle:I,children:[(0,L.jsx)(K.Z,{toggle:I,children:"What the reason ?"}),(0,L.jsxs)(B.Z,{children:[(0,L.jsx)(se.Z,{id:"exampleText",name:"text",type:"textarea",value:p,onChange:e=>m(e.target.value)}),(0,L.jsx)("div",{className:"d-grid gap-2 mt-3",children:(0,L.jsx)(P.Z,{onClick:async e=>{S.status="reject",S.catatan=p,S.id=o,""!==p?(e.preventDefault(),await A.post("dapi/mustreview/review",S).then((()=>{(0,E.Z)("success","Rejected Succesfully !!"),m(""),n(!a),t()})).catch((e=>{(0,E.Z)("error",e),n(!a)}))):(n(!a),(0,E.Z)("error","Please Privide your reason !!"))},children:"Submit"})})]})]}),(0,L.jsxs)(Y.Z,{isOpen:x,toggle:D,children:[(0,L.jsx)(K.Z,{toggle:D,children:"Approve Form"}),(0,L.jsxs)(B.Z,{children:[(0,L.jsxs)(te.Z,{children:[(0,L.jsx)(ie.Z,{for:"activity",children:"Activity"}),(0,L.jsx)(se.Z,{id:"activity",name:"activity",onChange:e=>Z(e.target.value),value:y,disabled:0!==parseInt(null===j||void 0===j?void 0:j.poin,10)})]}),(0,L.jsxs)(te.Z,{children:[(0,L.jsx)(ie.Z,{for:"activity",children:"Poin"}),(0,L.jsx)(se.Z,{id:"activity",name:"activity",type:"number",onChange:e=>f(e.target.value),value:parseInt(b,10),disabled:0!==parseInt(null===j||void 0===j?void 0:j.poin,10)})]}),(0,L.jsxs)(te.Z,{children:[(0,L.jsx)(ie.Z,{for:"activity",children:"Category"}),(0,L.jsx)(se.Z,{className:"mb-3",type:"select",value:N,disabled:0!==parseInt(null===j||void 0===j?void 0:j.poin,10),onChange:e=>C(e.target.value),children:null===_||void 0===_?void 0:_.map((e=>(0,L.jsx)("option",{value:e.id,children:e.category_name},e.id)))})]}),(0,L.jsx)("div",{className:"d-grid gap-2 mt-3",children:(0,L.jsx)(P.Z,{onClick:async e=>{S.status="approve",S.id=o,S.poin=b,S.activity=y,S.category=N,0!==b?(e.preventDefault(),await A.post("dapi/mustreview/review",S).then((()=>{(0,E.Z)("success","Approved Succesfully !!"),m(""),v(!x),t()})).catch((e=>{(0,E.Z)("error",e),v(!x)}))):(v(!x),(0,E.Z)("error","The Activity Poin must more than 0 !"))},children:"Approve"})})]})]}),(0,L.jsx)(Y.Z,{isOpen:r,toggle:T,children:(0,L.jsx)(B.Z,{children:null===k||void 0===k?void 0:k.map((e=>(0,L.jsx)(z.Z,{color:"primary",className:"me-2",children:e.first_name},e.employe_id)))})})]})};var le=t(34045),ne=t(57823),re=t(19623),ce=t(87535);const oe=e=>{let{tipetab:s}=e;const[t,a]=(0,i.useState)("today"),[n,r]=(0,i.useState)(!1),[c,o]=(0,i.useState)(),[d,y]=(0,i.useState)(!1),[Z,f]=(0,i.useState)(0),[N,C]=(0,i.useState)(0),[k,w]=(0,i.useState)(0),S=(0,q.Z)(),{auth:A}=(0,X.Z)(),{data:_,refetch:I,isLoading:D}=(0,l.a)({queryKey:["catdfhds"],queryFn:()=>S.get("dapi/".concat(null!==A&&void 0!==A&&A.user.roles.includes("AllDaily")&&"all"===s?"all":"myteam","/activities/").concat(t)).then((e=>e.data.data))}),T=e=>{r(!n),n||o(e)},O=e=>{a(e),(0,E.Z)("success","My Activity fitlered by start : ".concat(e))};(0,i.useEffect)((()=>{I()}),[t]),(0,i.useEffect)((()=>{const e=null===_||void 0===_?void 0:_.filter((e=>0===parseInt(e.progress,10))),s=null===_||void 0===_?void 0:_.filter((e=>parseInt(e.progress,10)>0&&parseInt(e.progress,10)<100)),t=null===_||void 0===_?void 0:_.filter((e=>100===parseInt(e.progress,10)));f(null===e||void 0===e?void 0:e.length),C(null===s||void 0===s?void 0:s.length),w(null===t||void 0===t?void 0:t.length)}),[_]);return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(h.Z,{children:(0,L.jsxs)(u.Z,{children:[(0,L.jsxs)("div",{className:"d-flex justify-content-end",children:[(0,L.jsx)(ne.Z,{children:(0,L.jsxs)(j.Z,{children:[(0,L.jsx)(g.Z,{children:(0,L.jsx)(re.Z,{bg:"danger",icon:"play-circle",title:Z,subtitle:"Todo Activity",loading:D})}),(0,L.jsx)(g.Z,{children:(0,L.jsx)(re.Z,{bg:"warning",icon:"arrow-repeat",title:N,subtitle:"On Process",loading:D})}),(0,L.jsx)(g.Z,{children:(0,L.jsx)(re.Z,{bg:"success",icon:"check-circle",title:k,subtitle:"Done Activity",loading:D})})]})}),(0,L.jsx)("div",{className:"me-2",children:null!==A&&void 0!==A&&A.user.roles.includes("AllDaily")&&"all"===s?(0,L.jsx)(P.Z,{color:"warning",onClick:()=>{console.log("te",_);const e=_.map((e=>({activity:e.activity,category:e.category_name,member:e.member.map((e=>e.first_name)).toString(),progress:e.progress,status:e.status,poin:e.poin,start:e.start,end:e.end})));console.log(e);const s=le.P6.book_new(),i=le.P6.json_to_sheet(e);le.P6.book_append_sheet(s,i,"Products"),le.P6.sheet_add_aoa(i,[["Activity Name","Category","Members","Progress","Status","Poin","Start","End"]]),le.NC(s,"Report-daily-".concat(t,"-").concat((0,ce.Z)(new Date),".xlsx"),{compression:!0})},children:(0,L.jsx)(b(),{icon:"print",size:"lg"})}):""}),(0,L.jsx)("div",{children:(0,L.jsxs)(p.Z,{isOpen:d,toggle:()=>y((e=>!e)),className:"mb-3",children:[(0,L.jsx)(m.Z,{caret:!0,children:(0,L.jsx)(b(),{icon:"filter_alt"})}),(0,L.jsxs)(x.Z,{children:[(0,L.jsx)(v.Z,{onClick:()=>O("today"),children:"Today"}),(0,L.jsx)(v.Z,{onClick:()=>O("yesterday"),children:"Yesterday"}),(0,L.jsx)(v.Z,{onClick:()=>O("week"),children:"This Week"}),(0,L.jsx)(v.Z,{onClick:()=>O("month"),children:"This Month"}),(0,L.jsx)(v.Z,{onClick:()=>O("year"),children:"This Years"}),(0,L.jsx)(v.Z,{onClick:()=>O("all"),children:"All The Time"})]})]})})]}),(null===_||void 0===_?void 0:_.length)>0?(0,L.jsxs)($.Z,{striped:!0,className:"mt-2",id:"printablediv",responsive:!0,children:[(0,L.jsx)("thead",{children:(0,L.jsxs)("tr",{children:[(0,L.jsx)("th",{children:"Activities"}),(0,L.jsx)("th",{children:"Due Date"}),(0,L.jsx)("th",{children:"Poin"}),(0,L.jsx)("th",{children:"Assignee"}),(0,L.jsx)("th",{children:"Progres"}),(0,L.jsx)("th",{children:"Status"})]})}),(0,L.jsx)("tbody",{children:null===_||void 0===_?void 0:_.map((e=>{var s,t;return(0,L.jsxs)("tr",{children:[(0,L.jsx)("th",{scope:"row",children:e.activity}),(0,L.jsx)("th",{scope:"row",children:e.end}),(0,L.jsx)("th",{scope:"row",children:e.poin}),(0,L.jsx)("th",{scope:"row",children:(0,L.jsxs)("div",{className:"member",onClick:()=>T(e.member),children:[null===e||void 0===e||null===(s=e.member)||void 0===s?void 0:s.map(((e,s)=>s<3?(0,L.jsx)("img",{src:null!==e&&void 0!==e&&e.img?null===e||void 0===e?void 0:e.img:"https://i.pinimg.com/736x/10/ec/86/10ec8691f73b787677bd0bbeddbd22e0.jpg",className:"rounded-circle",alt:"avatar",width:"35",height:"35"},null===e||void 0===e?void 0:e.employe_id):"")),(null===e||void 0===e||null===(t=e.member)||void 0===t?void 0:t.length)>3?(0,L.jsx)("img",{src:"https://cdn5.vectorstock.com/i/1000x1000/38/64/color-circle-with-plus-icon-vector-13503864.jpg",className:"rounded-circle img-pluss",alt:"avatar",width:"20",height:"20"}):""]})}),(0,L.jsx)("th",{scope:"row",children:(0,L.jsxs)(z.Z,{color:100===parseInt(null===e||void 0===e?void 0:e.progress,10)?"success":"warning",children:[e.progress," %"]})}),(0,L.jsx)("th",{scope:"row",children:(0,L.jsx)(z.Z,{color:"approve"===(null===e||void 0===e?void 0:e.status)?"success":"warning",children:e.status})})]},e.id)}))})]}):(0,L.jsx)("p",{className:"text-center mt-2",children:"no data available yet, please come back in a moment"})]})}),(0,L.jsx)(Y.Z,{isOpen:n,toggle:T,children:(0,L.jsx)(B.Z,{children:null===c||void 0===c?void 0:c.map((e=>(0,L.jsx)(z.Z,{color:"primary",className:"me-2",children:e.first_name},e.employe_id)))})})]})},de=()=>{const[e,s]=i.useState("1"),t=(0,q.Z)(),{auth:a}=(0,X.Z)(),{data:u,refetch:p}=(0,l.a)({queryKey:["todos"],queryFn:()=>t.get("dapi/mustreview").then((e=>e.data.data))});return(0,L.jsx)(L.Fragment,{children:(0,L.jsxs)(r.ZP,{value:e,children:[(0,L.jsx)(h.Z,{className:"mb-1",children:(0,L.jsxs)(c.Z,{onChange:(e,t)=>{s(t)},"aria-label":"lab API tabs example",variant:"scrollable",scrollButtons:"auto",children:[(0,L.jsx)(n.Z,{label:(0,L.jsxs)(d.Z,{badgeContent:0,anchorOrigin:{vertical:"top",horizontal:"right"},color:"primary",children:[(0,L.jsx)("strong",{children:"MY ACTIVITY"})," \xa0\xa0"]}),value:"1"}),(0,L.jsx)(n.Z,{label:(0,L.jsxs)(d.Z,{badgeContent:0,anchorOrigin:{vertical:"top",horizontal:"right"},color:"primary",children:[(0,L.jsx)("strong",{children:"TEAMS ACTIVITY"})," \xa0\xa0"]}),value:"2"}),(0,L.jsx)(n.Z,{label:(0,L.jsxs)(d.Z,{badgeContent:null===u||void 0===u?void 0:u.length,anchorOrigin:{vertical:"top",horizontal:"right"},color:"primary",children:[(0,L.jsx)("strong",{children:"NEED TO REVIEW"})," \xa0\xa0"]}),value:"3"}),null!==a&&void 0!==a&&a.user.roles.includes("AllDaily")?(0,L.jsx)(n.Z,{label:(0,L.jsxs)(d.Z,{badgeContent:0,anchorOrigin:{vertical:"top",horizontal:"right"},color:"primary",children:[(0,L.jsx)("strong",{children:"ALL ACTIVITIES"})," \xa0\xa0"]}),value:"4"}):""]})}),(0,L.jsx)(o.Z,{value:"1",className:"ps-0 pe-0",children:(0,L.jsx)(Q,{})}),(0,L.jsx)(o.Z,{value:"2",className:"ps-0 pe-0",children:(0,L.jsx)(oe,{tipetab:"team"})}),(0,L.jsx)(o.Z,{value:"3",className:"ps-0 pe-0",children:(0,L.jsx)(ae,{misal:u,refetch:p})}),(0,L.jsx)(o.Z,{value:"4",className:"ps-0 pe-0",children:(0,L.jsx)(oe,{tipetab:"all"})})]})})},he=()=>(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(a.Z,{}),(0,L.jsx)(de,{})]})},87535:(e,s,t)=>{t.d(s,{Z:()=>i});const i=e=>{const s=new Date(e);return"".concat(s.getDate()," ").concat(["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Aug","Sep","Oct","Nov","Des"][s.getMonth()]," ").concat(s.getFullYear())}},19623:(e,s,t)=>{t.d(s,{Z:()=>r});var i=t(43464),a=t(49037),l=t(80971),n=t(80184);const r=e=>{let{bg:s,icon:t,title:r,subtitle:c,loading:o}=e;return(0,n.jsx)(i.Z,{className:"rounded-3",children:(0,n.jsx)(a.Z,{children:(0,n.jsxs)("div",{className:"d-flex align-items-center",children:[(0,n.jsx)("span",{className:"circle-box md-box text-dark-white bg-".concat(s),children:(0,n.jsx)("i",{className:"fs-2 bi bi-".concat(t)})}),(0,n.jsxs)("div",{className:"ms-3",children:[(0,n.jsx)("h2",{className:"mb-1 fw-normal",children:o?"...":r}),(0,n.jsx)(l.Z,{className:"fs-6 text-muted",children:c})]})]})})})}}}]);
//# sourceMappingURL=578.cf450be3.chunk.js.map