"use strict";(self.webpackChunkmaterialpro_main=self.webpackChunkmaterialpro_main||[]).push([[4458],{79463:(e,s,t)=>{t.d(s,{Z:()=>o});var l=t(72791),i=t(11087),a=t(30690),n=t.n(a),d=t(80184);const o=e=>{let{menuOptions:s,taskId:t,status:a,action:o,progress:c,duplicateFn:r}=e;const[v,u]=(0,l.useState)(!1),m=()=>{u(!1),o()};return(0,d.jsxs)("div",{className:"action",children:[(0,d.jsx)("button",{type:"button",className:"btn-option ".concat(v&&"active"),onClick:()=>u(!0),children:(0,d.jsx)(n(),{icon:"more_vert"})}),v&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:"action-overlay",onClick:()=>u(!1)}),(0,d.jsx)("div",{className:"action-options rounded-3",children:null===s||void 0===s?void 0:s.options.map((e=>(0,d.jsx)("div",{children:"duplicate"===e.to?(0,d.jsxs)("button",{type:"button",className:"text-muted",disabled:!0,onClick:()=>r(t),children:[e.icon,"Duplicate"]}):"button"===e.type?(0,d.jsxs)("button",{type:"button",className:"text-muted",onClick:()=>{return s=e.to,o(t,s),void u(!1);var s},disabled:e.to===a||2===e.to&&0===a||2===e.to&&4===a||0===e.to&&4===a||2===e.to&&100!==c,children:[e.icon,e.label]}):"link"===e.type?(0,d.jsxs)(i.rU,{className:"text-muted",onClick:e.to,children:[e.icon,e.label]}):(0,d.jsx)("div",{className:"action-del",children:(0,d.jsxs)("button",{type:"button",onClick:m,children:[(0,d.jsx)(n(),{icon:"delete_outline"}),"Delete"]})})},e.id)))})]})]})}},31043:(e,s,t)=>{t.d(s,{F:()=>a,Z:()=>n});t(72791);var l=t(65218),i=t(80184);const a=()=>(0,i.jsx)(l.x7,{toastOptions:{className:"",style:{}}}),n=(e,s)=>{((e,s)=>{"success"===e?l.ZP.success(s):"create"===e?(0,l.ZP)(s,{icon:"\ud83e\udd17"}):"start"===e?(0,l.ZP)("Lets get started, cheer up!",{icon:"\ud83d\udcaa"}):"done"===e?(0,l.ZP)("Horeee, task done!",{icon:"\ud83d\udc4f"}):l.ZP.error(s)})(e,s)}},21234:(e,s,t)=>{t.d(s,{Z:()=>n});var l=t(72791),i=t(84028),a=t(80184);const n=e=>{const{title:s,id:t}=e,[n,d]=(0,l.useState)(!1);return(0,a.jsx)("span",{children:(0,a.jsx)(i.Z,{placement:"top",isOpen:n,target:"tooltip-".concat(t),toggle:()=>d(!n),children:s})})}},74458:(e,s,t)=>{t.d(s,{Z:()=>D});var l=t(72791),i=t(46724),a=t(55211),n=t(94938),d=t(76167),o=t(42976),c=t(8118),r=t(19127),v=t(16354),u=t(69399),m=t(30690),h=t.n(m),x=t(55472),p=t(90235),j=t(57689),g=t(11087),f=t(79463),_=t(87681),b=t(48089),y=t(90838),k=t(17834),N=t(21234),Z=t(31043),S=t(80184);const D=e=>{var s,t,m,D,w,C,F,z,U,T,O,P,E,A;let{modal:I,setModal:M,toggle:L,task:R,refetch:W,mode:V,name:H}=e;const{projectId:q}=(0,j.UO)(),{auth:B}=(0,k.Z)(),[G,J]=(0,l.useState)(),[K,Q]=(0,l.useState)(!1),[X,Y]=(0,l.useState)(""),[$,ee]=(0,l.useState)([]),[se,te]=(0,l.useState)(),[le,ie]=(0,l.useState)(!1),[ae,ne]=(0,l.useState)(!1),[de,oe]=(0,l.useState)(!1),[ce,re]=(0,l.useState)(),[ve,ue]=(0,l.useState)(),[me,he]=(0,l.useState)(!1),[xe,pe]=(0,l.useState)([]),[je,ge]=(0,l.useState)(),[fe,_e]=(0,l.useState)(),[be,ye]=(0,l.useState)(!1),[ke,Ne]=(0,l.useState)([]),[Ze,Se]=(0,l.useState)(!1),De=(0,l.useRef)(),we=null===B||void 0===B||null===(s=B.user)||void 0===s?void 0:s.roles,Ce=null===B||void 0===B||null===(t=B.user)||void 0===t?void 0:t.employe_id,Fe=(0,b.Z)(),ze=(0,p.ZP)();(0,l.useEffect)((()=>{var e;Y({approval_id:null===R||void 0===R?void 0:R.approval_id,task_title:null===R||void 0===R?void 0:R.task_title,task_desc:null===R||void 0===R?void 0:R.task_desc,task_progress:null===R||void 0===R?void 0:R.task_progress,start_date:null===R||void 0===R?void 0:R.start_date,end_date:null===R||void 0===R?void 0:R.end_date}),null!==R&&void 0!==R&&R.pics&&ee(R.pics.map((e=>({label:e.first_name,value:e.employe_id})))),Ne(null===R||void 0===R?void 0:R.files),async function(){await Fe.get("api/comment/".concat(null===R||void 0===R?void 0:R.task_id)).then((e=>re(e.data.data)))}(),async function(){await Fe.get("api/task/history/".concat(null===R||void 0===R?void 0:R.task_id)).then((e=>{J(e.data.data)}))}(),Se(!(null===R||void 0===R||null===(e=R.pics)||void 0===e||!e.find((e=>e.employe_id.toString()===Ce))))}),[R]),(0,l.useEffect)((()=>{we.includes("Staff")||async function(){await Fe.get("api/employe/assignment-list?search=".concat(H)).then((e=>te(e.data.data))).catch((e=>console.log(e)))}()}),[]),(0,l.useEffect)((()=>{ge(null===G||void 0===G?void 0:G.concat(ce))}),[G,ce]);const Ue=async e=>{var s;e.preventDefault(),0===(null===xe||void 0===xe?void 0:xe.length)?(0,Z.Z)("error","Field cannot be empty"):(null===(s=xe[0])||void 0===s?void 0:s.size)>1e7?(0,Z.Z)("error","Maximum file size is 10mb"):(oe(!0),await Fe.post("api/task/".concat(R.task_id,"/upload"),xe,{headers:{"Content-Type":"multipart/form-data"}}).then((e=>{var s;null===R||void 0===R||null===(s=R.files)||void 0===s||s.push(e.data.file),(0,Z.Z)("success","File has been uploaded.")})).catch((()=>{(0,Z.Z)("error","Upload file failed")})),pe([]),oe(!1))},Te=async e=>{ye(!0),_e(e),await Fe.delete("api/task/file/delete/".concat(e)).then((()=>{W(),M(!1),(0,Z.Z)("success","A file has been deleted")})).catch("error","Delete file failed"),_e(),ye(!1)},Oe={taskId:null===R||void 0===R?void 0:R.task_id,options:[{id:1,type:"delete",to:"toDelete"}]},Pe="https://api.ptpema.co.id/";return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(i.Z,{isOpen:I,toggle:L.bind(null),size:"xl",fade:!1,centered:!0,children:[(0,S.jsx)(a.Z,{toggle:L.bind(null)}),(0,S.jsx)(n.Z,{children:K?(0,S.jsx)("div",{className:"d-flex justify-content-center",style:{height:"400px"},children:"Loading.."}):(0,S.jsxs)("div",{className:"popup-body",children:[(0,S.jsx)("div",{className:"left",children:"activities"===V||2===(null===R||void 0===R?void 0:R.status)||3===(null===R||void 0===R?void 0:R.status)||!Ze&&(null===R||void 0===R?void 0:R.created_by)!==(null===B||void 0===B||null===(m=B.user)||void 0===m?void 0:m.first_name)?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)("div",{className:"top",children:[(0,S.jsxs)("div",{className:"date",children:[(0,S.jsx)("h6",{children:"Start Date "}),(0,S.jsx)("span",{children:(null===X||void 0===X?void 0:X.start_date)||"-"})]}),(0,S.jsxs)("div",{className:"date",children:[(0,S.jsx)("h6",{children:"Due Date"}),(0,S.jsx)("span",{children:(null===X||void 0===X?void 0:X.end_date)||"-"})]})]}),(0,S.jsxs)("div",{className:"bottom mt-3",children:[(0,S.jsxs)(d.Z,{children:[(0,S.jsx)(o.Z,{htmlFor:"taskTitle",children:"Task Title"}),(0,S.jsx)(c.Z,{type:"text",id:"taskTitle",name:"taskTitle",value:(null===X||void 0===X?void 0:X.task_title)||"",readOnly:!0,disabled:!0})]}),(0,S.jsxs)(d.Z,{children:[(0,S.jsx)(o.Z,{htmlFor:"taskDesc",children:"Description"}),(0,S.jsx)(c.Z,{type:"textarea",id:"taskDesc",name:"taskDesc",value:(null===X||void 0===X?void 0:X.task_desc)||"",readOnly:!0,disabled:!0})]}),(0,S.jsxs)(d.Z,{children:[(0,S.jsx)("span",{children:"PICs"}),(0,S.jsx)("br",{}),(0,S.jsx)("div",{className:"d-flex flex-column",children:$.map(((e,s)=>(0,S.jsxs)("div",{className:"d-flex gap-3",children:[(0,S.jsxs)("span",{children:[s+1,"."]}),(0,S.jsx)("span",{children:e.label})]},e.value)))})]})]}),we.includes("Staff")||we.includes("Supervisor")?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)("form",{onSubmit:Ue,className:"mt-2",children:[(0,S.jsxs)("h6",{children:["Attachment files (",(null===R||void 0===R||null===(D=R.files)||void 0===D?void 0:D.length)||0,")"]}),(0,S.jsxs)("div",{className:"d-flex justify-content-between align-items-center bg-light px-2 rounded-3 mt-2",children:[(0,S.jsxs)("div",{className:"d-flex align-items-center gap-1",children:[(0,S.jsxs)("div",{className:"pt-2",id:"tooltip-3",children:[(0,S.jsx)(o.Z,{for:"attach",children:(0,S.jsx)(h(),{icon:"attach_file",className:"btn-icon"})}),(0,S.jsx)("input",{type:"file",id:"attach",name:"attach",hidden:!0,onChange:e=>pe(e.target.files)}),(0,S.jsx)(N.Z,{title:"Upload file",id:"3"})]}),(0,S.jsx)("span",{style:{color:"#1F88E5",fontSize:"12px"},children:xe[0]?null===(w=xe[0])||void 0===w?void 0:w.name:(0,S.jsx)("span",{style:{color:"#68757C"},children:"Max. 10mb"})})]}),(0,S.jsx)(r.Z,{type:"submit",className:"btn",outline:!0,size:"sm",disabled:3===(null===R||void 0===R?void 0:R.status),children:de?"Uploading...":"Upload"})]})]}),(0,S.jsx)("div",{className:"attach",children:(0,S.jsx)("ul",{children:(null===R||void 0===R||null===(C=R.files)||void 0===C?void 0:C.length)>0&&ke.map((e=>{var s;return(null===(s=e.employe_id)||void 0===s?void 0:s.toString())===Ce&&(0,S.jsxs)("div",{className:"d-flex gap-1 align-items-center",children:[(0,S.jsx)("li",{children:(0,S.jsx)(g.rU,{className:"file-link",to:"".concat(Pe,"taskfiles/").concat(e.file_name),target:"_blank",children:e.file_name})}),(0,S.jsx)("button",{type:"button",className:"btn d-flex",style:{color:"#EF6767"},disabled:be,onClick:()=>Te(e.file_id),children:be&&fe===e.file_id?"Deleting..":(0,S.jsx)(h(),{icon:"delete_outline",style:{fontSize:"20px"}})})]},e.file_id)}))})})]}):(0,S.jsxs)("div",{className:"attach",children:[(0,S.jsxs)("h6",{children:["Attachment files (",(null===R||void 0===R||null===(F=R.files)||void 0===F?void 0:F.length)||0,")"]}),(0,S.jsx)("ul",{children:(null===R||void 0===R||null===(z=R.files)||void 0===z?void 0:z.length)>0&&ke.map((e=>(0,S.jsx)("div",{className:"d-flex gap-1 align-items-center",children:(0,S.jsx)("li",{children:(0,S.jsx)(g.rU,{className:"file-link",to:"".concat(Pe,"taskfiles/").concat(e.file_name),target:"_blank",children:e.file_name})})},e.file_id)))})]})]}):(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)("form",{onSubmit:async e=>{e.preventDefault(),ne(!0),0!==$.length?(X.pic=$,X.project_id=q,xe&&(X.files=xe),await Fe.patch("api/task/".concat(null===R||void 0===R?void 0:R.task_id),X).then((()=>{(0,Z.Z)("success","Task has been updated."),M(!1),W()})).catch((()=>(0,Z.Z)("error","Something went wrong")))):(0,Z.Z)("error","Field employee cannot be empty"),ne(!1)},children:[(0,S.jsxs)("div",{className:"top",children:[(0,S.jsxs)("div",{className:"date",children:[(0,S.jsx)("h6",{children:"Start Date"}),(0,S.jsx)(c.Z,{type:"date",name:"start_date",value:(null===X||void 0===X?void 0:X.start_date)||"",onChange:e=>Y({...X,start_date:e.target.value})})]}),(0,S.jsxs)("div",{className:"date",children:[(0,S.jsx)("h6",{children:"Due Date"}),(0,S.jsx)(c.Z,{type:"date",name:"end_date",value:(null===X||void 0===X?void 0:X.end_date)||"",onChange:e=>Y({...X,end_date:e.target.value})})]})]}),(0,S.jsxs)("div",{className:"bottom mt-3",children:[(0,S.jsx)(c.Z,{type:"text",name:"task_title",value:(null===X||void 0===X?void 0:X.task_title)||"",onChange:e=>Y({...X,task_title:e.target.value})}),(0,S.jsx)(c.Z,{type:"textarea",cols:"5",rows:"6",name:"task_desc",value:(null===X||void 0===X?void 0:X.task_desc)||"",onChange:e=>Y({...X,task_desc:e.target.value})}),(null===R||void 0===R?void 0:R.child)>0||null!==(null===R||void 0===R?void 0:R.sub)?"":null===R||void 0===R||null===(U=R.pics)||void 0===U?void 0:U.map((e=>e.employe_id.toString()===(null===B||void 0===B?void 0:B.user.employe_id)&&(0,S.jsxs)("div",{className:"d-flex gap-2 justify-content-between",children:[(0,S.jsx)("div",{className:"col-sm-10",children:(0,S.jsx)(c.Z,{type:"range",defaultValue:R.task_progress,onChange:e=>Y({...X,task_progress:e.target.value})})}),(0,S.jsxs)("div",{className:"col-sm-1 d-flex justify-content-end",children:[null===X||void 0===X?void 0:X.task_progress,"%"]})]},e.id)))]}),(0,S.jsxs)("div",{className:"d-flex justify-content-between align-items-center mt-3",children:[(0,S.jsx)("div",{className:"d-flex align-items-center gap-3",children:(0,S.jsxs)("button",{type:"button",className:"btn-assigne",onClick:()=>{ie(!0)},children:[(0,S.jsx)("i",{className:"bi-person-plus-fill"}),(0,S.jsx)("span",{children:(null===$||void 0===$?void 0:$.length)||0})]})}),(0,S.jsx)(r.Z,{type:"submit",className:"btn",color:"info",disabled:ae||3===(null===R||void 0===R?void 0:R.status),size:"sm",children:ae?"Updating...":"Update"})]})]}),(0,S.jsxs)("form",{onSubmit:Ue,className:"mt-2",children:[(0,S.jsxs)("h6",{children:["Attachment files (",(null===R||void 0===R||null===(T=R.files)||void 0===T?void 0:T.length)||0,")"]}),(0,S.jsxs)("div",{className:"d-flex justify-content-between align-items-center bg-light px-2 rounded-3 mt-2",children:[(0,S.jsxs)("div",{className:"d-flex align-items-center gap-1",children:[(0,S.jsxs)("div",{className:"pt-2",id:"tooltip-3",children:[(0,S.jsx)(o.Z,{for:"attach",children:(0,S.jsx)(h(),{icon:"attach_file",className:"btn-icon"})}),(0,S.jsx)("input",{type:"file",id:"attach",name:"attach",hidden:!0,onChange:e=>pe(e.target.files)}),(0,S.jsx)(N.Z,{title:"Upload file",id:"3"})]}),(0,S.jsx)("span",{style:{color:"#1F88E5",fontSize:"12px"},children:xe[0]?null===(O=xe[0])||void 0===O?void 0:O.name:(0,S.jsx)("span",{style:{color:"#68757C"},children:"Max. 10mb"})})]}),(0,S.jsx)(r.Z,{type:"submit",className:"btn",outline:!0,size:"sm",disabled:3===(null===R||void 0===R?void 0:R.status),children:de?"Uploading...":"Upload"})]})]}),(0,S.jsx)("div",{className:"attach",children:(0,S.jsx)("ul",{children:(null===R||void 0===R||null===(P=R.files)||void 0===P?void 0:P.length)>0&&ke.map((e=>(0,S.jsxs)("div",{className:"d-flex gap-1 align-items-center",children:[(0,S.jsx)("li",{children:(0,S.jsx)(g.rU,{className:"file-link",to:"".concat(Pe,"taskfiles/").concat(e.file_name),target:"_blank",children:e.file_name})}),Ce===e.employe_id.toString()&&(0,S.jsx)("button",{type:"button",className:"btn d-flex",style:{color:"#EF6767"},disabled:be,onClick:()=>Te(e.file_id),children:be?"Deleting..":(0,S.jsx)(h(),{icon:"delete_outline",style:{fontSize:"20px"}})})]},e.file_id)))})})]})}),(0,S.jsxs)("div",{className:"right",children:[(0,S.jsxs)("div",{className:"top",children:[null===R.task_parent?(0,S.jsxs)("div",{className:"status",children:[(0,S.jsx)("span",{className:"badge bg-light-success text-primary rounded-pill d-inline-block fw-bold",children:"Task"}),0===(null===R||void 0===R?void 0:R.status)?(0,S.jsx)(v.Z,{color:"info",children:"To Do"}):1===(null===R||void 0===R?void 0:R.status)?(0,S.jsx)(v.Z,{color:"primary",children:"In Progress"}):2===(null===R||void 0===R?void 0:R.status)?(0,S.jsxs)(v.Z,{color:"light",className:"text-dark",children:[(0,S.jsx)("i",{className:"bi-clock mr-4",style:{fontSize:"12px"}}),"\xa0 Waiting for approval",(0,S.jsx)("strong",{})]}):3===(null===R||void 0===R?void 0:R.status)?(0,S.jsxs)(v.Z,{color:"success",className:"d-flex",children:[" ",(0,S.jsx)("i",{className:"bi-check2-circle mr-4",style:{fontSize:"13px"}}),"\xa0 Approved"]}):(0,S.jsx)(v.Z,{color:"danger",children:"Revision"})]}):(0,S.jsx)("div",{className:"status",children:(0,S.jsx)("span",{className:"badge bg-light-success text-primary rounded-pill d-inline-block fw-bold",children:"Subtask"})}),(Ze||(null===R||void 0===R?void 0:R.created_by)===(null===B||void 0===B||null===(E=B.user)||void 0===E?void 0:E.first_name))&&(0,S.jsx)(f.Z,{menuOptions:Oe,action:async()=>{Q(!0),await Fe.delete("api/task/".concat(R.task_id)).then((()=>(0,Z.Z)("success","Task has been deleted"))).catch((()=>(0,Z.Z)("error","Something went wrong"))),Q(!1),M(!1),W()}})]}),(0,S.jsx)("div",{className:"bottom",children:G&&ce?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)("div",{className:"history-item",children:[(0,S.jsxs)("div",{className:"comment-name",children:[(0,S.jsxs)("span",{children:[(0,S.jsx)("strong",{children:R&&R.created_by})," create this task"]}),(0,S.jsx)("br",{})]}),(0,S.jsx)("small",{children:R&&(0,y.Z)(R.created_at)})]}),null===(Ee=je,A=null===Ee||void 0===Ee?void 0:Ee.sort(((e,s)=>e.created_at.localeCompare(s.created_at))))||void 0===A?void 0:A.map(((e,s)=>null!==e&&void 0!==e&&e.approval_id?(0,S.jsxs)(l.Fragment,{children:[(0,S.jsxs)("div",{className:"history-item",children:[(0,S.jsx)("div",{className:"comment-name",children:0===(null===e||void 0===e?void 0:e.status)&&s<1?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)("span",{children:[(0,S.jsx)("strong",{children:null===e||void 0===e?void 0:e.pic_task})," sdsd"]}),(0,S.jsx)("br",{}),(0,S.jsxs)("span",{style:{fontSize:"12px"},children:["Deadline: ",null===e||void 0===e?void 0:e.end_date]})]}):0===(null===e||void 0===e?void 0:e.status)&&s>0?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)("span",{children:[(0,S.jsx)("strong",{children:null===e||void 0===e?void 0:e.pic_task})," change task to To Do"]}),(0,S.jsx)("br",{}),(0,S.jsxs)("span",{style:{fontSize:"12px"},children:["Deadline: ",null===e||void 0===e?void 0:e.end_date]})]}):0===(null===e||void 0===e?void 0:e.status)?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)("span",{children:[(0,S.jsx)("strong",{children:null===e||void 0===e?void 0:e.pic_task})," was assigned"]}),(0,S.jsx)("br",{}),(0,S.jsxs)("span",{style:{fontSize:"12px"},children:["Deadline: ",null===e||void 0===e?void 0:e.end_date]})]}):1===(null===e||void 0===e?void 0:e.status)?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)("span",{children:[(0,S.jsx)("strong",{children:null===e||void 0===e?void 0:e.pic_task})," change task to In Progress"]}),(0,S.jsx)("br",{}),(0,S.jsxs)("span",{style:{fontSize:"12px"},children:["Deadline: ",null===e||void 0===e?void 0:e.end_date]})]}):2===(null===e||void 0===e?void 0:e.status)?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)("span",{children:[(0,S.jsx)("strong",{children:null===e||void 0===e?void 0:e.pic_task})," change task to Review"]}),(0,S.jsx)("br",{}),(0,S.jsxs)("span",{style:{fontSize:"12px"},children:["Deadline: ",null===e||void 0===e?void 0:e.end_date]})]}):3===(null===e||void 0===e?void 0:e.status)?(0,S.jsxs)("span",{children:[(0,S.jsxs)("strong",{children:[null===e||void 0===e?void 0:e.status_by," "]})," task approved"]}):(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)("span",{children:[(0,S.jsxs)("strong",{children:[null===e||void 0===e?void 0:e.status_by," "]}),"change task to Revision"]}),(0,S.jsx)("br",{}),(0,S.jsxs)("span",{style:{fontSize:"12px"},children:["Deadline: ",null===e||void 0===e?void 0:e.end_date]})]})}),(0,S.jsx)("small",{children:(0,y.Z)(null===e||void 0===e?void 0:e.created_at)})]}),(3===(null===e||void 0===e?void 0:e.status)||4===(null===e||void 0===e?void 0:e.status))&&(0,S.jsx)("div",{className:"comment-item mt-1",children:(0,S.jsx)("div",{className:"comment-user ",children:(0,S.jsxs)("div",{className:"comment-teks ".concat(3===(null===e||void 0===e?void 0:e.status)?"text-success":"text-warning"),children:[(0,S.jsx)("small",{style:{fontWeight:"600"},children:3===(null===e||void 0===e?void 0:e.status)?"Comment":"Notes"}),e.notes]})})})]},null===e||void 0===e?void 0:e.approval_id):(0,S.jsx)("div",{className:"comment-item",children:(0,S.jsxs)("div",{className:"comment-user",children:[(0,S.jsx)("img",{src:_,className:"rounded-circle",alt:"avatar",width:"35",height:"35"}),(0,S.jsxs)("div",{className:"comment-teks",children:[(0,S.jsx)("small",{style:{fontWeight:"600"},children:null===e||void 0===e?void 0:e.first_name}),null===e||void 0===e?void 0:e.comment,(0,S.jsx)("div",{className:"comment-time",children:(0,S.jsx)("small",{children:(0,y.Z)(null===e||void 0===e?void 0:e.created_at)})})]},null===e||void 0===e?void 0:e.comment_id)]})},null===e||void 0===e?void 0:e.comment_id)))]}):"Loading..."}),(0,S.jsx)(u.Z,{onSubmit:async e=>{e.preventDefault(),he(!0),ve.employe_id=B.user.employe_id,ve.task_id=R.task_id,await Fe.post("api/comment",ve).then((e=>ge((s=>[...s,e.data.data])))),he(!1),ue(),e.target.reset()},children:(0,S.jsxs)("div",{className:"input-comment",children:[(0,S.jsx)(c.Z,{type:"text",name:"comment",ref:De,onChange:e=>ue({comment:e.target.value}),autoComplete:"off"}),(0,S.jsx)("div",{className:"",children:(0,S.jsxs)(r.Z,{className:"btn",outline:!0,color:"info",disabled:me,type:"submit",children:[(0,S.jsx)(h(),{icon:"send"}),me?"Sending":"Send"]})})]})})]})]})})]}),(0,S.jsxs)(i.Z,{isOpen:le,size:"md",fade:!1,centered:!0,children:[(0,S.jsx)(a.Z,{toggle:()=>ie(!1),children:"Assigne Employee"}),(0,S.jsx)(n.Z,{children:(0,S.jsx)(x.ZP,{closeMenuOnSelect:!0,components:ze,isMulti:!0,defaultValue:$,options:se,onChange:e=>ee(e)})})]})]});var Ee}},90838:(e,s,t)=>{t.d(s,{Z:()=>l});const l=e=>{if(e){const s=new Date,t=new Date(e),l=t.toDateString()===s.toDateString()?"Today":t.toDateString(),i=t.toLocaleString().split(",")[1];return"".concat(l,", ").concat(i.split(":")[0],":").concat(i.split(":")[1]," ").concat(i.split(" ")[2]||"")}return e}},87681:(e,s,t)=>{e.exports=t.p+"static/media/user1.6ac95ef9bc0c027733ea.jpg"}}]);
//# sourceMappingURL=4458.92606a7a.chunk.js.map