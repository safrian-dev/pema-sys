"use strict";(self.webpackChunkmaterialpro_main=self.webpackChunkmaterialpro_main||[]).push([[847],{79463:(e,s,t)=>{t.d(s,{Z:()=>o});var l=t(72791),i=t(11087),a=t(30690),n=t.n(a),d=t(80184);const o=e=>{let{menuOptions:s,taskId:t,status:a,action:o,progress:c}=e;const[r,v]=(0,l.useState)(!1),u=()=>{v(!1),o()};return(0,d.jsxs)("div",{className:"action",children:[(0,d.jsx)("button",{type:"button",className:"btn-option ".concat(r&&"active"),onClick:()=>v(!0),children:(0,d.jsx)(n(),{icon:"more_vert"})}),r&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:"action-overlay",onClick:()=>v(!1)}),(0,d.jsx)("div",{className:"action-options",children:null===s||void 0===s?void 0:s.options.map((e=>(0,d.jsx)("div",{children:"button"===e.type?(0,d.jsxs)("button",{type:"button",className:"text-muted",onClick:()=>{return s=e.to,o(t,s),void v(!1);var s},disabled:e.to===a||2===e.to&&0===a||2===e.to&&4===a||0===e.to&&4===a||2===e.to&&100!==c,children:[e.icon,e.label]}):"link"===e.type?(0,d.jsxs)(i.rU,{className:"text-muted",onClick:e.to,children:[e.icon,e.label]}):(0,d.jsx)("div",{className:"action-del",children:(0,d.jsxs)("button",{type:"button",onClick:u,children:[(0,d.jsx)(n(),{icon:"delete_outline"}),"Delete"]})})},e.id)))})]})]})}},31043:(e,s,t)=>{t.d(s,{F:()=>a,Z:()=>n});t(72791);var l=t(65218),i=t(80184);const a=()=>(0,i.jsx)(l.x7,{toastOptions:{className:"",style:{}}}),n=(e,s)=>{((e,s)=>{"success"===e?l.ZP.success(s):"create"===e?(0,l.ZP)(s,{icon:"\ud83e\udd17"}):"start"===e?(0,l.ZP)("Lets get started, cheer up!",{icon:"\ud83d\udcaa"}):"done"===e?(0,l.ZP)("Horeee, task done!",{icon:"\ud83d\udc4f"}):l.ZP.error(s)})(e,s)}},21234:(e,s,t)=>{t.d(s,{Z:()=>n});var l=t(72791),i=t(84028),a=t(80184);const n=e=>{const{title:s,id:t}=e,[n,d]=(0,l.useState)(!1);return(0,a.jsx)("span",{children:(0,a.jsx)(i.Z,{placement:"top",isOpen:n,target:"tooltip-".concat(t),toggle:()=>d(!n),children:s})})}},24944:(e,s,t)=>{t.d(s,{Z:()=>i});t(72791);var l=t(80184);const i=e=>{let{data:s,color:t}=e;return(0,l.jsx)("div",{className:"flex-wrapper",children:(0,l.jsx)("div",{className:"single-chart",children:(0,l.jsxs)("svg",{viewBox:"0 0 36 36",className:"circular-chart ".concat(100===s?"green":100!==s?"blue":t),children:[(0,l.jsx)("path",{className:"circle-bg",d:"M18 2.0845\r a 15.9155 15.9155 0 0 1 0 31.831\r a 15.9155 15.9155 0 0 1 0 -31.831"}),(0,l.jsx)("path",{className:"circle",strokeDasharray:"".concat(s,", 100"),d:"M18 2.0845\r a 15.9155 15.9155 0 0 1 0 31.831\r a 15.9155 15.9155 0 0 1 0 -31.831"}),100===s?(0,l.jsx)("text",{x:"18",y:"22.35",className:"percentage",style:{fontSize:"14px"},children:"\u2714"}):(0,l.jsxs)("text",{x:"18",y:"22.35",className:"percentage",children:[s,"%"]})]})})})}},74458:(e,s,t)=>{t.d(s,{Z:()=>S});var l=t(72791),i=t(46724),a=t(55211),n=t(94938),d=t(76167),o=t(42976),c=t(8118),r=t(19127),v=t(16354),u=t(69399),m=t(30690),x=t.n(m),h=t(55472),p=t(90235),j=t(11087),g=t(79463),f=t(87681),_=t(48089),b=t(90838),k=t(17834),y=t(21234),N=t(31043),Z=t(80184);const S=e=>{var s,t,m,S,D,w,F,C;let{modal:z,setModal:T,toggle:O,task:P,refetch:M,mode:U}=e;const{auth:E}=(0,k.Z)(),[A,I]=(0,l.useState)(),[L,R]=(0,l.useState)(!1),[J,W]=(0,l.useState)(""),[V,q]=(0,l.useState)([]),[B,H]=(0,l.useState)(),[Y,G]=(0,l.useState)(!1),[K,Q]=(0,l.useState)(!1),[X,$]=(0,l.useState)(!1),[ee,se]=(0,l.useState)(),[te,le]=(0,l.useState)(),[ie,ae]=(0,l.useState)(!1),[ne,de]=(0,l.useState)([]),[oe,ce]=(0,l.useState)(),re=(0,l.useRef)(),ve=(0,_.Z)(),ue=(0,p.ZP)();(0,l.useEffect)((()=>{W({approval_id:null===P||void 0===P?void 0:P.approval_id,task_title:null===P||void 0===P?void 0:P.task_title,task_desc:null===P||void 0===P?void 0:P.task_desc,task_progress:null===P||void 0===P?void 0:P.task_progress,start_date:null===P||void 0===P?void 0:P.start_date,end_date:null===P||void 0===P?void 0:P.end_date}),null!==P&&void 0!==P&&P.pics&&q(P.pics.map((e=>({label:e.first_name,value:e.employe_id})))),async function(){await ve.get("api/comment/".concat(null===P||void 0===P?void 0:P.task_id)).then((e=>se(e.data.data)))}(),async function(){await ve.get("api/task/history/".concat(null===P||void 0===P?void 0:P.task_id)).then((e=>{I(e.data.data)}))}()}),[P]),(0,l.useEffect)((()=>{!async function(){await ve.get("api/employe/assignment-list").then((e=>H(e.data.data))).catch((e=>console.log(e)))}()}),[]),(0,l.useEffect)((()=>{ce(null===A||void 0===A?void 0:A.concat(ee))}),[A,ee]);const me={taskId:null===P||void 0===P?void 0:P.task_id,options:[{id:1,type:"delete",to:"toDelete"}]},xe="https://api.ptpema.co.id/";return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(i.Z,{isOpen:z,toggle:O.bind(null),size:"xl",fade:!1,centered:!0,children:[(0,Z.jsx)(a.Z,{toggle:O.bind(null)}),(0,Z.jsx)(n.Z,{children:L?(0,Z.jsx)("div",{className:"d-flex justify-content-center",style:{height:"400px"},children:"Loading.."}):(0,Z.jsxs)("div",{className:"popup-body",children:[(0,Z.jsx)("div",{className:"left",children:"activities"===U||2===(null===P||void 0===P?void 0:P.status)||3===(null===P||void 0===P?void 0:P.status)?(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)("div",{className:"top",children:[(0,Z.jsxs)("div",{className:"date",children:[(0,Z.jsx)("h6",{children:"Start Date "}),(0,Z.jsx)("span",{children:(null===J||void 0===J?void 0:J.start_date)||"-"})]}),(0,Z.jsxs)("div",{className:"date",children:[(0,Z.jsx)("h6",{children:"Due Date"}),(0,Z.jsx)("span",{children:(null===J||void 0===J?void 0:J.end_date)||"-"})]})]}),(0,Z.jsxs)("div",{className:"bottom mt-3",children:[(0,Z.jsxs)(d.Z,{children:[(0,Z.jsx)(o.Z,{htmlFor:"taskTitle",children:"Task Title"}),(0,Z.jsx)(c.Z,{type:"text",id:"taskTitle",name:"taskTitle",value:(null===J||void 0===J?void 0:J.task_title)||"",readOnly:!0,disabled:!0})]}),(0,Z.jsxs)(d.Z,{children:[(0,Z.jsx)(o.Z,{htmlFor:"taskDesc",children:"Description"}),(0,Z.jsx)(c.Z,{type:"textarea",id:"taskDesc",name:"taskDesc",value:(null===J||void 0===J?void 0:J.task_desc)||"",readOnly:!0,disabled:!0})]}),(0,Z.jsxs)(d.Z,{children:[(0,Z.jsx)("span",{children:"PICs"}),(0,Z.jsx)("br",{}),(0,Z.jsx)("div",{className:"d-flex flex-column",children:V.map(((e,s)=>(0,Z.jsxs)("div",{className:"d-flex gap-3",children:[(0,Z.jsxs)("span",{children:[s+1,"."]}),(0,Z.jsx)("span",{children:e.label})]},e.value)))})]})]}),(0,Z.jsxs)("div",{className:"attach",children:[(0,Z.jsxs)("h6",{children:["Attachment files (",(null===P||void 0===P||null===(s=P.files)||void 0===s?void 0:s.length)||0,")"]}),(0,Z.jsx)("ul",{children:(null===P||void 0===P||null===(t=P.files)||void 0===t?void 0:t.length)>0&&(null===P||void 0===P?void 0:P.files.map((e=>(0,Z.jsxs)("div",{className:"d-flex gap-1 align-items-center",children:[(0,Z.jsx)("li",{children:(0,Z.jsx)(j.rU,{className:"file-link",to:"".concat(xe,"taskfiles/").concat(e.file_name),target:"_blank",children:e.file_name})}),(null===E||void 0===E?void 0:E.user.employe_id)===(null===P||void 0===P?void 0:P.employe_id)&&(0,Z.jsx)("button",{type:"button",className:"btn d-flex",style:{color:"#EF6767"},children:(0,Z.jsx)(x(),{icon:"delete_outline",style:{fontSize:"20px"}})})]},e.file_id))))})]})]})}):(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)("form",{onSubmit:async e=>{e.preventDefault(),Q(!0),J.task_pic=V,ne&&(J.files=ne),await ve.patch("api/task/".concat(null===P||void 0===P?void 0:P.task_id),J).then((()=>{(0,N.Z)("success","Task has been updated.")})),T(!1),M(),Q(!1)},children:[(0,Z.jsxs)("div",{className:"top",children:[(0,Z.jsxs)("div",{className:"date",children:[(0,Z.jsx)("h6",{children:"Start Date"}),(0,Z.jsx)(c.Z,{type:"date",name:"start_date",value:(null===J||void 0===J?void 0:J.start_date)||"",onChange:e=>W({...J,start_date:e.target.value})})]}),(0,Z.jsxs)("div",{className:"date",children:[(0,Z.jsx)("h6",{children:"Due Date"}),(0,Z.jsx)(c.Z,{type:"date",name:"end_date",value:(null===J||void 0===J?void 0:J.end_date)||"",onChange:e=>W({...J,end_date:e.target.value})})]})]}),(0,Z.jsxs)("div",{className:"bottom mt-3",children:[(0,Z.jsx)(c.Z,{type:"text",name:"task_title",value:(null===J||void 0===J?void 0:J.task_title)||"",onChange:e=>W({...J,task_title:e.target.value})}),(0,Z.jsx)(c.Z,{type:"textarea",cols:"5",rows:"6",name:"task_desc",value:(null===J||void 0===J?void 0:J.task_desc)||"",onChange:e=>W({...J,task_desc:e.target.value})}),(null===P||void 0===P||null===(m=P.subtasks)||void 0===m?void 0:m.length)>0?"":null===P||void 0===P||null===(S=P.pics)||void 0===S?void 0:S.map((e=>e.employe_id.toString()===(null===E||void 0===E?void 0:E.user.employe_id)&&(0,Z.jsxs)("div",{className:"d-flex gap-2 justify-content-between",children:[(0,Z.jsx)("div",{className:"col-sm-10",children:(0,Z.jsx)(c.Z,{type:"range",defaultValue:P.task_progress,onChange:e=>W({...J,task_progress:e.target.value})})}),(0,Z.jsxs)("div",{className:"col-sm-1 d-flex justify-content-end",children:[null===J||void 0===J?void 0:J.task_progress,"%"]})]},e.id)))]}),(0,Z.jsxs)("div",{className:"d-flex justify-content-between align-items-center mt-3",children:[(0,Z.jsx)("div",{className:"d-flex align-items-center gap-3",children:(0,Z.jsxs)("button",{type:"button",className:"btn-assigne",onClick:()=>{G(!0)},children:[(0,Z.jsx)("i",{className:"bi-person-plus-fill"}),(0,Z.jsx)("span",{children:(null===V||void 0===V?void 0:V.length)||0})]})}),(0,Z.jsx)(r.Z,{type:"submit",className:"btn",color:"info",disabled:K||3===(null===P||void 0===P?void 0:P.status),size:"sm",children:K?"Updating...":"Update"})]})]}),(0,Z.jsxs)("form",{onSubmit:async e=>{e.preventDefault(),$(!0),await ve.post("api/task/".concat(P.task_id,"/upload"),ne,{headers:{"Content-Type":"multipart/form-data"}}).then((e=>{var s;null===P||void 0===P||null===(s=P.files)||void 0===s||s.push(e.data.file),(0,N.Z)("success","File has been uploaded.")})).catch((e=>console.log(e))),de([]),$(!1)},className:"mt-2",children:[(0,Z.jsxs)("h6",{children:["Attachment files (",(null===P||void 0===P||null===(D=P.files)||void 0===D?void 0:D.length)||0,")"]}),(0,Z.jsxs)("div",{className:"d-flex justify-content-between align-items-center bg-light px-2 rounded-3 mt-2",children:[(0,Z.jsxs)("div",{className:"d-flex align-items-center gap-1",children:[(0,Z.jsxs)("div",{className:"pt-2",id:"tooltip-3",children:[(0,Z.jsx)(o.Z,{for:"attach",children:(0,Z.jsx)(x(),{icon:"attach_file",className:"btn-icon"})}),(0,Z.jsx)("input",{type:"file",id:"attach",name:"attach",hidden:!0,onChange:e=>de(e.target.files),required:!0}),(0,Z.jsx)(y.Z,{title:"Upload file",id:"3"})]}),(0,Z.jsx)("span",{style:{color:"#1F88E5",fontSize:"12px"},children:null===(w=ne[0])||void 0===w?void 0:w.name})]}),(0,Z.jsx)(r.Z,{type:"submit",className:"btn",outline:!0,size:"sm",disabled:3===(null===P||void 0===P?void 0:P.status),children:X?"Uploading...":"Upload"})]})]}),(0,Z.jsx)("div",{className:"attach",children:(0,Z.jsx)("ul",{children:(null===P||void 0===P||null===(F=P.files)||void 0===F?void 0:F.length)>0&&(null===P||void 0===P?void 0:P.files.map((e=>(0,Z.jsxs)("div",{className:"d-flex gap-1 align-items-center",children:[(0,Z.jsx)("li",{children:(0,Z.jsx)(j.rU,{className:"file-link",to:"".concat(xe,"taskfiles/").concat(e.file_name),target:"_blank",children:e.file_name})}),(0,Z.jsx)("button",{type:"button",className:"btn d-flex",style:{color:"#EF6767"},children:(0,Z.jsx)(x(),{icon:"delete_outline",style:{fontSize:"20px"}})})]},e.file_id))))})})]})}),(0,Z.jsxs)("div",{className:"right",children:[(0,Z.jsxs)("div",{className:"top",children:[null===P.task_parent?(0,Z.jsxs)("div",{className:"status",children:[(0,Z.jsx)("span",{className:"badge bg-light-success text-primary rounded-pill d-inline-block fw-bold",children:"Task"}),0===(null===P||void 0===P?void 0:P.status)?(0,Z.jsx)(v.Z,{color:"info",children:"To Do"}):1===(null===P||void 0===P?void 0:P.status)?(0,Z.jsx)(v.Z,{color:"primary",children:"In Progress"}):2===(null===P||void 0===P?void 0:P.status)?(0,Z.jsxs)(v.Z,{color:"light",className:"text-dark",children:[(0,Z.jsx)("i",{className:"bi-clock mr-4",style:{fontSize:"12px"}}),"\xa0 Waiting for approval",(0,Z.jsx)("strong",{})]}):3===(null===P||void 0===P?void 0:P.status)?(0,Z.jsxs)(v.Z,{color:"success",className:"d-flex",children:[" ",(0,Z.jsx)("i",{className:"bi-check2-circle mr-4",style:{fontSize:"13px"}}),"\xa0 Approved"]}):(0,Z.jsx)(v.Z,{color:"danger",children:"Revision"})]}):(0,Z.jsx)("div",{className:"status",children:(0,Z.jsx)("span",{className:"badge bg-light-success text-primary rounded-pill d-inline-block fw-bold",children:"Subtask"})}),(null===E||void 0===E?void 0:E.user.employe_id)===P.employe_id&&(0,Z.jsx)(g.Z,{menuOptions:me,action:async()=>{R(!0),await ve.delete("api/task/".concat(P.task_id)).then((()=>(0,N.Z)("success","Task has been deleted"))).catch((()=>(0,N.Z)("error","Something went wrong"))),R(!1),T(!1),M()}})]}),(0,Z.jsx)("div",{className:"bottom",children:A&&ee?(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)("div",{className:"history-item",children:[(0,Z.jsxs)("div",{className:"comment-name",children:[(0,Z.jsxs)("span",{children:[(0,Z.jsx)("strong",{children:P&&P.created_by})," create this task"]}),(0,Z.jsx)("br",{})]}),(0,Z.jsx)("small",{children:P&&(0,b.Z)(P.created_at)})]}),null===(he=oe,C=null===he||void 0===he?void 0:he.sort(((e,s)=>e.created_at.localeCompare(s.created_at))))||void 0===C?void 0:C.map(((e,s)=>null!==e&&void 0!==e&&e.approval_id?(0,Z.jsxs)(l.Fragment,{children:[(0,Z.jsxs)("div",{className:"history-item",children:[(0,Z.jsx)("div",{className:"comment-name",children:0===(null===e||void 0===e?void 0:e.status)&&s<1?(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)("span",{children:[(0,Z.jsx)("strong",{children:null===e||void 0===e?void 0:e.pic_task})," sdsd"]}),(0,Z.jsx)("br",{}),(0,Z.jsxs)("span",{style:{fontSize:"12px"},children:["Deadline: ",null===e||void 0===e?void 0:e.end_date]})]}):0===(null===e||void 0===e?void 0:e.status)&&s>0?(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)("span",{children:[(0,Z.jsx)("strong",{children:null===e||void 0===e?void 0:e.pic_task})," change task to To Do"]}),(0,Z.jsx)("br",{}),(0,Z.jsxs)("span",{style:{fontSize:"12px"},children:["Deadline: ",null===e||void 0===e?void 0:e.end_date]})]}):0===(null===e||void 0===e?void 0:e.status)?(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)("span",{children:[(0,Z.jsx)("strong",{children:null===e||void 0===e?void 0:e.pic_task})," was assigned"]}),(0,Z.jsx)("br",{}),(0,Z.jsxs)("span",{style:{fontSize:"12px"},children:["Deadline: ",null===e||void 0===e?void 0:e.end_date]})]}):1===(null===e||void 0===e?void 0:e.status)?(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)("span",{children:[(0,Z.jsx)("strong",{children:null===e||void 0===e?void 0:e.pic_task})," change task to In Progress"]}),(0,Z.jsx)("br",{}),(0,Z.jsxs)("span",{style:{fontSize:"12px"},children:["Deadline: ",null===e||void 0===e?void 0:e.end_date]})]}):2===(null===e||void 0===e?void 0:e.status)?(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)("span",{children:[(0,Z.jsx)("strong",{children:null===e||void 0===e?void 0:e.pic_task})," change task to Review"]}),(0,Z.jsx)("br",{}),(0,Z.jsxs)("span",{style:{fontSize:"12px"},children:["Deadline: ",null===e||void 0===e?void 0:e.end_date]})]}):3===(null===e||void 0===e?void 0:e.status)?(0,Z.jsxs)("span",{children:[(0,Z.jsxs)("strong",{children:[null===e||void 0===e?void 0:e.status_by," "]})," task approved"]}):(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)("span",{children:[(0,Z.jsxs)("strong",{children:[null===e||void 0===e?void 0:e.status_by," "]}),"change task to Revision"]}),(0,Z.jsx)("br",{}),(0,Z.jsxs)("span",{style:{fontSize:"12px"},children:["Deadline: ",null===e||void 0===e?void 0:e.end_date]})]})}),(0,Z.jsx)("small",{children:(0,b.Z)(null===e||void 0===e?void 0:e.created_at)})]}),(3===(null===e||void 0===e?void 0:e.status)||4===(null===e||void 0===e?void 0:e.status))&&(0,Z.jsx)("div",{className:"comment-item mt-1",children:(0,Z.jsx)("div",{className:"comment-user ",children:(0,Z.jsxs)("div",{className:"comment-teks ".concat(3===(null===e||void 0===e?void 0:e.status)?"text-success":"text-warning"),children:[(0,Z.jsx)("small",{style:{fontWeight:"600"},children:3===(null===e||void 0===e?void 0:e.status)?"Comment":"Notes"}),e.notes]})})})]},(0,b.Z)(null===e||void 0===e?void 0:e.created_at)):(0,Z.jsx)("div",{className:"comment-item",children:(0,Z.jsxs)("div",{className:"comment-user",children:[(0,Z.jsx)("img",{src:f,className:"rounded-circle",alt:"avatar",width:"35",height:"35"}),(0,Z.jsxs)("div",{className:"comment-teks",children:[(0,Z.jsx)("small",{style:{fontWeight:"600"},children:null===e||void 0===e?void 0:e.first_name}),null===e||void 0===e?void 0:e.comment,(0,Z.jsx)("div",{className:"comment-time",children:(0,Z.jsx)("small",{children:(0,b.Z)(null===e||void 0===e?void 0:e.created_at)})})]},null===e||void 0===e?void 0:e.comment_id)]})},null===e||void 0===e?void 0:e.comment_id)))]}):"Loading..."}),(0,Z.jsx)(u.Z,{onSubmit:async e=>{e.preventDefault(),ae(!0),te.employe_id=E.user.employe_id,te.task_id=P.task_id,await ve.post("api/comment",te).then((e=>ce((s=>[...s,e.data.data])))),ae(!1),le(),e.target.reset()},children:(0,Z.jsxs)("div",{className:"input-comment",children:[(0,Z.jsx)(c.Z,{type:"text",name:"comment",ref:re,onChange:e=>le({comment:e.target.value}),autoComplete:"off"}),(0,Z.jsx)("div",{className:"",children:(0,Z.jsxs)(r.Z,{className:"btn",outline:!0,color:"info",disabled:ie,type:"submit",children:[(0,Z.jsx)(x(),{icon:"send"}),ie?"Sending":"Send"]})})]})})]})]})})]}),(0,Z.jsxs)(i.Z,{isOpen:Y,size:"md",fade:!1,centered:!0,children:[(0,Z.jsx)(a.Z,{toggle:()=>G(!1),children:"Assigne Employee"}),(0,Z.jsx)(n.Z,{children:(0,Z.jsx)(h.ZP,{closeMenuOnSelect:!1,components:ue,isMulti:!0,defaultValue:V,options:B,onChange:e=>q(e),isDisabled:!0})})]})]});var he}},87535:(e,s,t)=>{t.d(s,{Z:()=>l});const l=e=>{const s=new Date(e);return"".concat(s.getDate()," ").concat(["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Aug","Sep","Oct","Nov","Des"][s.getMonth()]," ").concat(s.getFullYear())}},90838:(e,s,t)=>{t.d(s,{Z:()=>l});const l=e=>{if(e){const s=new Date(e),t=s.toDateString(),l=s.toLocaleString().split(",")[1];return"".concat(t,", ").concat(l.split(":")[0],":").concat(l.split(":")[1]," ").concat(l.split(" ")[2]||"")}return e}},87681:(e,s,t)=>{e.exports=t.p+"static/media/user1.6ac95ef9bc0c027733ea.jpg"}}]);
//# sourceMappingURL=847.f2d9b31c.chunk.js.map