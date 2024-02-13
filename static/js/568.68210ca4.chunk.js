(self.webpackChunkmaterialpro_main=self.webpackChunkmaterialpro_main||[]).push([[568],{16581:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>S});var s=l(72791),i=l(76807),n=l(39773),d=l(43464),r=l(49037),o=l(14448),a=l(19127),c=l(63009),h=l(8118),x=l(16354),j=l(4828),m=l(30690),u=l.n(m),v=l(46272),b=l(11087),g=l(74458),p=l(14097),f=l(48089),y=l(87681),w=l(17834),k=l(31043),C=l(21234),N=(l(42459),l(35754),l(80184));const S=()=>{const{auth:e}=(0,w.Z)(),[t,l]=(0,s.useState)(!1),[m,S]=(0,s.useState)(void 0),[Z,_]=(0,s.useState)(),[z,G]=(0,s.useState)(),[D,T]=(0,s.useState)(!1),[F,A]=(0,s.useState)(),[R,W]=(0,s.useState)(),P=(0,f.Z)(),{isLoading:B,error:L,data:I,refetch:M}=(0,i.a)({queryKey:["inprogresstasks"],queryFn:()=>P.get("api/task/director/inprogress/list").then((e=>(A(e.data.project),e.data.data)))});(0,s.useEffect)((()=>{W(I)}),[I]);const U=e=>{l(!0),S(e)},q=async t=>{_(t),G(!0),await P.post("api/task/".concat(null===e||void 0===e?void 0:e.user.employe_id,"/").concat(t,"/favorite")).then((e=>{M(),(0,k.Z)("success",e.data.message)})).catch((()=>{(0,k.Z)("error","Something went wrong.")})),_(),G(!1)},E=["Director"],H=["Manager"];(0,s.useEffect)((()=>{null!==e&&void 0!==e&&e.user.roles.find((e=>E.includes(e)))&&T(!0)}),[e]);return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(n.Z,{children:(0,N.jsx)(d.Z,{className:"rounded-3",children:(0,N.jsxs)(r.Z,{children:[(0,N.jsx)(o.Z,{tag:"h4",children:(0,N.jsxs)("div",{className:"d-flex justify-content-between",children:["Inprogress Tasks",(0,N.jsx)(b.rU,{to:"/",style:{textDecoration:"none"},children:(0,N.jsxs)(a.Z,{size:"sm",color:"info",outline:!0,className:"d-flex align-items-center",children:[(0,N.jsx)(u(),{icon:"chevron_left"}),"Back to Dashboard"]})})]})}),B?"loading...":L?"Something went wrong.":(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(n.Z,{className:"bg-light-secondary my-auto p-2 rounded-3",children:(0,N.jsxs)(c.Z,{children:[(0,N.jsx)(n.Z,{sm:"12 mb-2",md:"6",children:(0,N.jsxs)("div",{className:"d-flex gap-2",children:[(0,N.jsxs)(a.Z,{type:"button",className:"d-flex align-items-center gap-2 rounded-3",color:"light",size:"sm",children:[(0,N.jsx)(u(),{icon:"filter_list",style:{fontSize:"12px"}}),"Sort"]}),(0,N.jsxs)(a.Z,{type:"button",className:"d-flex align-items-center gap-2 rounded-3",color:"light",size:"sm",children:[(0,N.jsx)(u(),{icon:"tune",style:{fontSize:"12px"}}),"Filters"]})]})}),(0,N.jsx)(n.Z,{sm:"12",md:"6",children:(0,N.jsxs)("div",{className:"d-flex gap-3 col-md-6 w-100",children:[(0,N.jsx)("div",{className:"w-100 position-relative",children:(0,N.jsx)(h.Z,{type:"text",className:"rounded-3",bsSize:"md",placeholder:"Search task...",onChange:e=>(e=>{const t=I.filter((t=>t.task_title.toLowerCase().includes(e.toLowerCase())));W(t)})(e.target.value)})}),(null===e||void 0===e?void 0:e.user.roles.find((e=>H.includes(e))))&&(0,N.jsx)(v.WD,{document:(0,N.jsx)(p.Z,{projectTitle:F,data:I}),fileName:"Task Report - ".concat(null===F||void 0===F?void 0:F.project_number," - ").concat(null===F||void 0===F?void 0:F.division),style:{textDecoration:"none"},children:(0,N.jsx)(a.Z,{type:"button",className:"btn btn-light-info text-info rounded-3 d-flex py-2",children:(0,N.jsx)(u(),{icon:"file_download",style:{fontSize:"18px"}})})})]})})]})}),(0,N.jsxs)(n.Z,{sm:"12 overflow-auto",children:[(0,N.jsxs)("h6",{className:"fw-bold mt-3",children:["List of tasks from ",null===F||void 0===F?void 0:F.division]}),(0,N.jsxs)("table",{className:"rounded-corners",children:[(0,N.jsx)("thead",{children:(0,N.jsxs)("tr",{children:[(0,N.jsx)("th",{width:"30",children:"#"}),(0,N.jsx)("th",{children:"Task title"}),(0,N.jsx)("th",{width:"",children:"Status"}),(0,N.jsx)("th",{children:"Progress"}),(0,N.jsx)("th",{width:"100",children:"PIC"}),D&&(0,N.jsx)("th",{width:"50"})]})}),(0,N.jsx)("tbody",{children:(null===R||void 0===R?void 0:R.length)>0?null===R||void 0===R?void 0:R.map(((e,t)=>{var l,i,n,d,r,o;return(0,N.jsxs)(s.Fragment,{children:[(0,N.jsxs)("tr",{children:[(0,N.jsxs)("td",{children:[t+1,"."]}),(0,N.jsxs)("td",{style:{cursor:"pointer"},onClick:()=>U(e),children:[(0,N.jsx)("span",{style:{fontWeight:"600"},children:e.task_title}),(0,N.jsx)("br",{}),(0,N.jsxs)(x.Z,{color:"light",className:"text-muted",children:[null===e||void 0===e||null===(l=e.subtasks)||void 0===l?void 0:l.length," subtask"]}),"  ",(0,N.jsxs)(x.Z,{color:"light",className:"text-muted",children:[(0,N.jsx)(u(),{icon:"comment",style:{fontSize:"12px"}}),e.comments]})]}),(0,N.jsx)("td",{children:0===e.status?(0,N.jsx)(x.Z,{color:"light",className:"text-dark",children:"To Do"}):1===e.status?(0,N.jsx)(x.Z,{color:"warning",children:"In Progress"}):2===e.status?(0,N.jsx)(x.Z,{color:"light",className:"text-dark",children:"Under Review"}):3===e.status?(0,N.jsx)(x.Z,{color:"success",children:"Approved"}):(0,N.jsx)(x.Z,{color:"danger",children:"Revision"})}),(0,N.jsx)("td",{children:(0,N.jsxs)("span",{className:"badge bg-light-success text-primary rounded-pill d-inline-block fw-bold",children:[null===e||void 0===e||null===(i=e.task_progress)||void 0===i?void 0:i.toFixed(),"%"]})}),(0,N.jsx)("td",{children:(0,N.jsx)("div",{className:"members",children:(0,N.jsxs)("div",{className:"members-item",children:[null===e||void 0===e||null===(n=e.pics)||void 0===n?void 0:n.map(((e,t)=>{var l;return t<2&&(0,N.jsxs)(s.Fragment,{children:[(0,N.jsx)("img",{id:"tooltip-".concat(e.id),src:y,className:"ava-pic rounded-circle",alt:"avatar",width:"35",height:"35"}),(0,N.jsx)(C.Z,{title:e.first_name,id:null===(l=e.id)||void 0===l?void 0:l.toString()})]},e.id)})),(null===e||void 0===e||null===(d=e.pics)||void 0===d?void 0:d.length)>2&&(0,N.jsxs)("div",{className:"member-plus bg-light-info text-info fw-bold",children:["+",(null===e||void 0===e||null===(r=e.pics)||void 0===r?void 0:r.length)-2]})]})})}),D&&(0,N.jsx)("td",{className:"text-center",children:z&&Z===e.task_id?(0,N.jsx)(j.Z,{size:"sm",color:"warning"}):(0,N.jsx)("abbr",{title:"Mark task",style:{textDecoration:"none"},children:(0,N.jsx)("button",{type:"button",className:"fav-btn",onClick:()=>q(e.task_id),children:(0,N.jsx)(u(),{icon:"star",className:"".concat(e.isFavorite&&"is_favorite")})})})})]}),(null===e||void 0===e||null===(o=e.subtasks)||void 0===o?void 0:o.length)>0&&e.subtasks.map((e=>{var t,l,i;return(0,N.jsxs)("tr",{children:[(0,N.jsx)("td",{}),(0,N.jsxs)("td",{onClick:()=>U(e),style:{cursor:"pointer"},children:[e.task_title,(0,N.jsx)("br",{}),(0,N.jsxs)(x.Z,{color:"light",className:"text-muted",children:[(0,N.jsx)(u(),{icon:"comment",style:{fontSize:"12px"}}),e.comments]})]}),(0,N.jsx)("td",{children:"-"}),(0,N.jsx)("td",{children:(0,N.jsxs)("span",{className:"badge bg-light-primary text-primary rounded-pill d-inline-block fw-bold",children:[null===e||void 0===e||null===(t=e.task_progress)||void 0===t?void 0:t.toFixed(),"%"]})}),(0,N.jsx)("td",{children:(0,N.jsx)("div",{className:"members",children:(0,N.jsxs)("div",{className:"members-item",children:[null===e||void 0===e||null===(l=e.pics)||void 0===l?void 0:l.map(((e,t)=>{var l;return t<2&&(0,N.jsxs)(s.Fragment,{children:[(0,N.jsx)("img",{id:"tooltip-".concat(e.id),src:y,className:"ava-pic rounded-circle",alt:"avatar",width:"35",height:"35"},e.id),(0,N.jsx)(C.Z,{title:e.first_name,id:null===(l=e.id)||void 0===l?void 0:l.toString()})]},e.id)})),(null===e||void 0===e||null===(i=e.pics)||void 0===i?void 0:i.length)>2&&(0,N.jsxs)("div",{className:"member-plus bg-light-info text-info fw-bold",children:["+",e.pics.length-2]})]})})}),D&&(0,N.jsx)("td",{className:"text-center",children:z&&Z===e.task_id?(0,N.jsx)(j.Z,{size:"sm",color:"warning"}):(0,N.jsx)("abbr",{title:"Mark task",style:{textDecoration:"none"},children:(0,N.jsx)("button",{type:"button",className:"fav-btn",onClick:()=>q(e.task_id),children:(0,N.jsx)(u(),{icon:"star",className:"".concat(e.isFavorite&&"is_favorite")})})})})]},e.task_id)}))]},e.task_id)})):(0,N.jsx)("tr",{children:(0,N.jsx)("td",{colSpan:"5",align:"center",children:"Data not found."})})})]})]})]})]})})}),t&&(0,N.jsx)(g.Z,{modal:t,setModal:l,toggle:()=>{l(!t)},task:m,mode:"activities"})]})}},14097:(e,t,l)=>{"use strict";l.d(t,{Z:()=>o});var s=l(72791),i=l(46272),n=l(80184);const d=i.mM.create({body:{paddingTop:35,paddingBottom:65,paddingHorizontal:35},title:{fontSize:10,textAlign:"center"},text:{margin:10,fontSize:10,textAlign:"justify"},image:{marginVertical:4,marginHorizontal:15,width:50,height:50},header:{fontSize:10,marginBottom:5,textAlign:"left",color:"#3f3f3f",fontWeight:"bold"},pageNumber:{position:"absolute",fontSize:10,bottom:30,left:0,right:0,textAlign:"center",color:"grey"},printAt:{position:"absolute",fontSize:8,bottom:30,left:35,right:0,textAlign:"left",color:"grey"},table:{display:"table",width:"auto",borderStyle:"solid",borderWidth:1,borderRightWidth:0,borderBottomWidth:0,color:"#3f3f3f"},tableRow:{margin:"auto",flexDirection:"row"},tableCol:{borderStyle:"solid",borderWidth:1,borderLeftWidth:0,borderTopWidth:0},tableCell:{marginTop:3,marginBottom:3,marginLeft:3,marginRight:3,fontSize:10}}),r=()=>{const e=new Date;return"".concat(e.toDateString(),", ").concat(e.toLocaleString().split(",")[1])},o=e=>{let{projectTitle:t,data:l}=e;return(0,n.jsx)(i.BB,{children:(0,n.jsxs)(i.T3,{style:{...d.body,backgroundColor:"#fff"},children:[(0,n.jsxs)(i.xv,{style:d.header,fixed:!0,children:["Project : ",null===t||void 0===t?void 0:t.project_name]}),(0,n.jsxs)(i.xv,{style:d.header,fixed:!0,children:["Partner : ",null===t||void 0===t?void 0:t.partner]}),(0,n.jsxs)(i.xv,{style:d.header,fixed:!0,children:["Division : ",null===t||void 0===t?void 0:t.division]}),(0,n.jsxs)(i.xv,{style:d.header,fixed:!0,children:["Phase : ",null===t||void 0===t?void 0:t.phase]}),(0,n.jsxs)(i.xv,{style:d.header,fixed:!0,children:["Schema : ","jo"===(null===t||void 0===t?void 0:t.schema)?"Join Operational":"Join Venture"]}),(0,n.jsxs)(i.G7,{style:d.table,children:[(0,n.jsxs)(i.G7,{style:d.tableRow,children:[(0,n.jsx)(i.G7,{style:{...d.tableCol,width:"5%"},children:(0,n.jsx)(i.xv,{style:d.tableCell,children:"No."})}),(0,n.jsx)(i.G7,{style:{...d.tableCol,width:"35%"},children:(0,n.jsx)(i.xv,{style:d.tableCell,children:"Task Title"})}),(0,n.jsx)(i.G7,{style:{...d.tableCol,width:"15%"},children:(0,n.jsx)(i.xv,{style:d.tableCell,children:"Status"})}),(0,n.jsx)(i.G7,{style:{...d.tableCol,width:"15%"},children:(0,n.jsx)(i.xv,{style:d.tableCell,children:"Deadline"})}),(0,n.jsx)(i.G7,{style:{...d.tableCol,width:"30%"},children:(0,n.jsx)(i.xv,{style:d.tableCell,children:"PIC"})})]}),null===l||void 0===l?void 0:l.map(((e,t)=>(0,n.jsxs)(s.Fragment,{children:[(0,n.jsxs)(i.G7,{style:d.tableRow,children:[(0,n.jsx)(i.G7,{style:{...d.tableCol,width:"5%"},children:(0,n.jsx)(i.xv,{style:{...d.tableCell,textAlign:"center"},children:t+1})}),(0,n.jsx)(i.G7,{style:{...d.tableCol,width:"35%"},children:(0,n.jsx)(i.xv,{style:d.tableCell,children:e.task_title})}),(0,n.jsx)(i.G7,{style:{...d.tableCol,width:"15%"},children:(0,n.jsx)(i.xv,{style:{...d.tableCell,fontSize:"10px"},children:0===e.status?"To do":1===e.status?"In progress":2===e.status?"Under review":3===e.status?"Approved":"Revision"})}),(0,n.jsx)(i.G7,{style:{...d.tableCol,width:"15%"},children:(0,n.jsx)(i.xv,{style:d.tableCell,children:e.end_date})}),(0,n.jsx)(i.G7,{style:{...d.tableCol,width:"30%"},children:e.pics.map((e=>(0,n.jsx)(i.xv,{style:d.tableCell,children:e.first_name},e.id)))})]}),e.subtasks.map((e=>(0,n.jsxs)(i.G7,{style:d.tableRow,children:[(0,n.jsx)(i.G7,{style:{...d.tableCol,width:"5%"},children:(0,n.jsx)(i.xv,{style:d.tableCell})}),(0,n.jsx)(i.G7,{style:{...d.tableCol,width:"35%"},children:(0,n.jsx)(i.xv,{style:d.tableCell,children:e.task_title})}),(0,n.jsx)(i.G7,{style:{...d.tableCol,width:"15%"},children:(0,n.jsx)(i.xv,{style:d.tableCell,children:"-"})}),(0,n.jsx)(i.G7,{style:{...d.tableCol,width:"15%"},children:(0,n.jsx)(i.xv,{style:d.tableCell,children:e.end_date})}),(0,n.jsx)(i.G7,{style:{...d.tableCol,width:"30%"},children:e.pics.map((e=>(0,n.jsx)(i.xv,{style:d.tableCell,children:e.first_name},e.id)))})]},e.task_id)))]},e.task_id)))]}),(0,n.jsx)(i.xv,{style:d.pageNumber,render:e=>{let{pageNumber:t,totalPages:l}=e;return"".concat(t," / ").concat(l)}}),(0,n.jsx)(i.xv,{style:d.printAt,render:r})]})})}},35754:()=>{},42459:()=>{},42480:()=>{}}]);
//# sourceMappingURL=568.68210ca4.chunk.js.map