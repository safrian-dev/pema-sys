(self.webpackChunkmaterialpro_main=self.webpackChunkmaterialpro_main||[]).push([[4804],{31043:(e,s,t)=>{"use strict";t.d(s,{F:()=>l,Z:()=>i});t(72791);var a=t(65218),n=t(80184);const l=()=>(0,n.jsx)(a.x7,{toastOptions:{className:"",style:{}}}),i=(e,s)=>{((e,s)=>{"success"===e?a.ZP.success(s):"create"===e?(0,a.ZP)(s,{icon:"\ud83e\udd17"}):"start"===e?(0,a.ZP)("Lets get started, cheer up!",{icon:"\ud83d\udcaa"}):"done"===e?(0,a.ZP)("Horeee, task done!",{icon:"\ud83d\udc4f"}):a.ZP.error(s)})(e,s)}},64876:(e,s,t)=>{"use strict";t.d(s,{Z:()=>o});var a=t(39782),n=t(61443),l=t(57689),i=t(11087),r=t(80184);const o=()=>{const e=(0,l.TH)(),s=e.pathname.split("/")[1],t=e.pathname.split("/")[2];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{className:"text-capitalize",children:"".concat(t||s)}),(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(n.Z,{to:"/",tag:i.rU,className:"text-decoration-none",children:"Home"}),s?(0,r.jsx)(n.Z,{active:!0,children:s}):"",t?(0,r.jsx)(n.Z,{active:!0,children:t}):""]})]})}},48177:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>U});var a=t(72791),n=t(64876),l=t(43464),i=t(49037),r=t(43896),o=t(29472),c=t(83449),d=t(47283),u=t(82851),h=t(10829),m=t(48089),v=t(17834),x=t(55472),g=t(97892),p=t.n(g),j=t(90235),Z=t(19127),f=t(46724),y=t(55211),b=t(94938),S=t(76167),C=t(42976),w=t(8118),_=t(31043),N=t(80184);const P=(0,j.ZP)(),k=e=>{let{refetch:s}=e;const[t,n]=(0,a.useState)(!1),[l,i]=(0,a.useState)([]),[r,o]=(0,a.useState)([]),[c,d]=(0,a.useState)(""),[u,v]=(0,a.useState)(""),[g,j]=(0,a.useState)(""),[k,A]=(0,a.useState)(""),[q,O]=(0,a.useState)(""),[F,R]=(0,a.useState)(""),[D,L]=(0,a.useState)(""),[I,z]=a.useState(""),[E,T]=(0,a.useState)([]),B=()=>{n(!t)},H={name:"",type:"",price:0,vendor:"",acquisition:p()(),file:"",location:"",responsible:"",amount:0},M=(0,m.Z)(),K=(0,h.h)({queries:[{queryKey:["category",0],queryFn:()=>M.get("dapi/inven/category").then((e=>e.data.data))},{queryKey:["assigne",1],queryFn:()=>M.get("api/employe/assignment-list?search=all").then((e=>e.data.data))}]});(0,a.useEffect)((()=>{i(K[0].data),o(K[1].data)}),[K[0].data,K[1].data]);const V=e=>{var s;(s=e.target.files[0],new Promise((e=>{let t="";const a=new FileReader;a.readAsDataURL(s),a.onload=()=>{t=a.result,e(t)}}))).then((e=>{R(e)})).catch((e=>{console.log(e)}))};return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(Z.Z,{color:"dark",outline:!0,onClick:B,children:"+ New Inventory"}),(0,N.jsxs)(f.Z,{isOpen:t,toggle:B,children:[(0,N.jsx)(y.Z,{toggle:B,children:"New Inventory Data"}),(0,N.jsxs)(b.Z,{children:[(0,N.jsxs)(S.Z,{children:[(0,N.jsx)(C.Z,{for:"in_name",children:"Inventory Name"}),(0,N.jsx)(w.Z,{id:"in_name",name:"in_name",type:"text",onChange:e=>d(e.target.value),value:c})]}),(0,N.jsxs)(S.Z,{children:[(0,N.jsx)(C.Z,{for:"typeselect",children:"Inventory Type"}),(0,N.jsxs)(w.Z,{id:"typeselect",name:"select",type:"select",value:u,onChange:e=>v(e.target.value),children:[(0,N.jsx)("option",{children:"Choose Type"}),null===l||void 0===l?void 0:l.map((e=>(0,N.jsx)("option",{value:null===e||void 0===e?void 0:e.code,children:null===e||void 0===e?void 0:e.name},null===e||void 0===e?void 0:e.id)))]})]}),(0,N.jsxs)(S.Z,{children:[(0,N.jsx)(C.Z,{for:"in_harga_beli",children:"Purchase Price"}),(0,N.jsx)(w.Z,{id:"in_harga_beli",name:"in_harga_beli",type:"number",onChange:e=>j(e.target.value),value:g})]}),(0,N.jsxs)(S.Z,{children:[(0,N.jsxs)(C.Z,{for:"in_vendor",children:["Vendor ",(0,N.jsx)("small",{children:"(optional)"})]}),(0,N.jsx)(w.Z,{id:"in_vendor",name:"in_vendor",type:"text",onChange:e=>L(e.target.value),value:D})]}),(0,N.jsxs)(S.Z,{children:[(0,N.jsx)(C.Z,{for:"time",children:"Acquisition Time"}),(0,N.jsx)(w.Z,{id:"time",name:"date",placeholder:"date placeholder",type:"date",onChange:e=>z(e.target.value),value:I})]}),(0,N.jsxs)(S.Z,{children:[(0,N.jsx)(C.Z,{for:"in_amount",children:"Amount"}),(0,N.jsx)(w.Z,{id:"in_amount",name:"in_amount",type:"number",min:"1",onChange:e=>O(e.target.value),value:q})]}),(0,N.jsxs)(S.Z,{children:[(0,N.jsx)(C.Z,{for:"file",children:"Inventory Image"}),(0,N.jsx)(w.Z,{id:"file",name:"file",type:"file",onChange:e=>V(e),accept:"image/*"})]}),(0,N.jsxs)(S.Z,{children:[(0,N.jsx)(C.Z,{for:"in_location",children:"Detail Location"}),(0,N.jsx)(w.Z,{id:"in_location",name:"in_location",type:"textarea",onChange:e=>A(e.target.value),value:k})]}),(0,N.jsxs)(S.Z,{children:[(0,N.jsx)(C.Z,{for:"in_harga_beli",children:"Responsible"}),(0,N.jsx)(x.ZP,{components:P,isMulti:!0,value:E,options:r,onChange:e=>{T(e)}})]}),(0,N.jsx)(S.Z,{children:(0,N.jsx)("div",{className:"d-grid gap-2 mt-4",children:(0,N.jsx)(Z.Z,{type:"submit",onClick:()=>(async()=>{if(""!==c&&""!==u&&""!==g&&""!==I&&""!==F&&""!==q&&""!==k&&0!==(null===E||void 0===E?void 0:E.length)){const e=[];E.map((s=>e.push("//".concat(null===s||void 0===s?void 0:s.value,"//")))),H.name=c,H.type=u,H.price=g,H.vendor=D,H.acquisition=p()(I),H.file=F,H.amount=q,H.location=k,H.responsible=e.toLocaleString(),s(),await M.post("dapi/inven/add",H).then((e=>{var t;console.log(e),null!==e&&void 0!==e&&null!==(t=e.data)&&void 0!==t&&t.success&&(B(),s(),(0,_.Z)("success","Submitted Succesfully !"),d(""),v(""),j(""),L(""),z(""),R(""),O(""),A(""),T([]))})).catch((e=>{B(),(0,_.Z)("error",e)}))}else B(),(0,_.Z)("error","Fields Can't Be Empty !!")})(),children:"Save Data"})})})]})]})]})};var A=t(43513),q=t(57689),O=(t(87369),t(87681));const F=e=>{let{onMe:s,handleChange:t,refetch1:n,refetch2:l}=e;const[i,r]=(0,a.useState)(""),[o,c]=(0,a.useState)([]),[d,u]=(0,a.useState)(new Date),[h,v]=(0,a.useState)(!1),[x,g]=(0,a.useState)(),[p,j]=(0,a.useState)(),P=(0,q.s0)(),k=(0,m.Z)(),F=e=>{v(!h),h||j(e)},R=[{name:"Photo",selector:e=>(0,N.jsx)("img",{className:"img-thumbnail img-list mt-1 mb-1",alt:e.id,src:"".concat("https://api.ptpema.co.id/","inven").concat(null===e||void 0===e?void 0:e.file,"?s=").concat(d)})},{name:"Asset Number",selector:e=>e.asset_number},{name:"Asset Name",selector:e=>e.name},{name:"Responsible",selector:e=>{var s;return(0,N.jsx)("div",{className:"member",children:null===(s=e.res_list)||void 0===s?void 0:s.map(((e,s)=>s<3?(0,N.jsx)("img",{src:null!==e&&void 0!==e&&e.img?null===e||void 0===e?void 0:e.img:O,className:"rounded-circle",alt:"avatar",width:"35",height:"35"},null===e||void 0===e?void 0:e.employe_id):(0,N.jsx)("img",{src:"https://cdn5.vectorstock.com/i/1000x1000/38/64/color-circle-with-plus-icon-vector-13503864.jpg",className:"rounded-circle img-pluss",alt:"avatar",width:"20",height:"20"})))})}},{name:"Action",selector:e=>(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(Z.Z,{color:"primary",outline:!0,size:"sm",onClick:()=>F(e.id),disabled:e.request_service,children:e.request_service?"Service Requested":"Request Service"}),(0,N.jsxs)(Z.Z,{color:"primary",outline:!0,onClick:()=>{return s=e,console.log(s),void P("".concat(s.id));var s},size:"sm",children:[" ","Check Detail"]})]})}];return(0,a.useEffect)((()=>{c(s),u(new Date)}),[s]),(0,a.useEffect)((()=>{const e=null===s||void 0===s?void 0:s.filter((e=>e.name.toLocaleLowerCase().match(i.toLocaleLowerCase())));c(e)}),[i]),(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(A.ZP,{columns:R,data:o,pagination:!0,subHeader:!0,subHeaderComponent:(0,N.jsx)("div",{className:"d-flex justify-content-end w-100",children:(0,N.jsx)(w.Z,{type:"text",value:i,placeholder:"search . . . . ",className:"w-25",onChange:e=>r(e.target.value)})})}),(0,N.jsxs)(f.Z,{isOpen:h,toggle:F,children:[(0,N.jsx)(y.Z,{toggle:F,children:"Request Service Form"}),(0,N.jsxs)(b.Z,{children:[(0,N.jsxs)(S.Z,{children:[(0,N.jsx)(C.Z,{for:"in_location",children:"Your Complaint"}),(0,N.jsx)(w.Z,{id:"in_location",name:"in_location",type:"textarea",onChange:e=>g(e.target.value),value:x})]}),(0,N.jsx)(S.Z,{children:(0,N.jsx)("div",{className:"d-grid gap-2 mt-4",children:(0,N.jsx)(Z.Z,{type:"submit",onClick:async()=>{const e={complaint:x,asset_child:p};await k.post("dapi/inv/rservice",e).then((e=>{var s;null!==e&&void 0!==e&&null!==(s=e.data)&&void 0!==s&&s.success&&(F(),t("","3"),(0,_.Z)("success","Request Submitted succesfully !"),l(),n())})).catch((e=>{F(),(0,_.Z)("error",e)}))},children:"Save Data"})})})]})]})]})};var R=t(71513),D=t(30690),L=t.n(D),I=t(46272);const z=I.mM.create({body:{paddingTop:35,paddingBottom:65,paddingHorizontal:35},text:{margin:10,fontSize:10,textAlign:"justify"},image:{marginVertical:4,marginHorizontal:4,width:50,height:50}}),E=e=>{let{acet:s}=e;return(0,N.jsx)(I.BB,{children:(0,N.jsx)(I.T3,{style:{...z.body,backgroundColor:"#fff"},children:(0,N.jsx)(I.G7,{style:{display:"flex",flexDirection:"row",flexWrap:"wrap"},children:null===s||void 0===s?void 0:s.map((e=>(0,N.jsxs)(I.G7,{style:{display:"flex",flexDirection:"row",gap:"10px",width:"50%",border:"1px solid #000"},children:[(0,N.jsx)(I.Ee,{style:z.image,src:"https://products.aspose.app/barcode/embed/image.Png?BarcodeType=QR&Content=https://sys.ptpema.co.id/asset/".concat(e.id,"&TextLocation=None&Height=118&Width=118")}),(0,N.jsxs)(I.G7,{style:{display:"flex",flexDirection:"column",gap:"5px",marginVertical:8},children:[(0,N.jsx)(I.xv,{style:{fontSize:"15px",fontWeight:"demibold"},children:null===e||void 0===e?void 0:e.number}),(0,N.jsx)(I.xv,{style:{fontSize:"12px",overflow:"hidden",textOverflow:"ellipsis",width:"170px",height:"18px"},children:null===e||void 0===e?void 0:e.name})]})]},e.id)))})})})};var T=t(78194);const B=e=>{let{listAsset:s,refetch:t,loading1:n}=e;const[l,i]=(0,a.useState)(""),[r,o]=(0,a.useState)([]),[c,d]=(0,a.useState)(new Date),[u,h]=(0,a.useState)([]),[v,x]=(0,a.useState)([]),g=(0,q.s0)(),p=(0,m.Z)(),j=[{name:"Photo",selector:e=>(0,N.jsx)("img",{className:"img-thumbnail img-list mt-1 mb-1",alt:e.id,src:"".concat("https://api.ptpema.co.id/","inven").concat(null===e||void 0===e?void 0:e.file,"?s=").concat(c)})},{name:"Asset Number",selector:e=>e.asset_number},{name:"Asset Name",selector:e=>e.name},{name:"Amount",selector:e=>e.amount},{name:"Responsible",selector:e=>{var s;return(0,N.jsx)("div",{className:"member",children:null===(s=e.responsible_list)||void 0===s?void 0:s.map(((e,s)=>s<3?(0,N.jsx)("img",{src:null!==e&&void 0!==e&&e.img?null===e||void 0===e?void 0:e.img:O,className:"rounded-circle",alt:"avatar",width:"35",height:"35"},null===e||void 0===e?void 0:e.employe_id):(0,N.jsx)("img",{src:"https://cdn5.vectorstock.com/i/1000x1000/38/64/color-circle-with-plus-icon-vector-13503864.jpg",className:"rounded-circle img-pluss",alt:"avatar",width:"20",height:"20"})))})}},{name:"Action",selector:e=>(0,N.jsxs)(Z.Z,{color:"primary",outline:!0,onClick:()=>{return s=e,console.log(s),void g("".concat(s.id));var s},size:"sm",children:[" ","Check Detail"]})}];return(0,a.useEffect)((()=>{o(s),d(new Date),console.log()}),[s]),(0,a.useEffect)((()=>{const e=null===s||void 0===s?void 0:s.filter((e=>e.name.toLocaleLowerCase().match(l.toLocaleLowerCase())));o(e),console.log(A.ZP.c)}),[l]),(0,N.jsx)(N.Fragment,{children:n?(0,N.jsx)(T.Z,{}):(0,N.jsx)(A.ZP,{columns:j,data:r,selectableRows:!0,onSelectedRowsChange:e=>{let{selectedRows:s}=e;h(s);const t=[];for(let n=0;n<(null===s||void 0===s?void 0:s.length);n++)for(let e=0;e<(null===(a=s[n].child)||void 0===a?void 0:a.length);e++){var a;t.push({name:s[n].name,number:s[n].child[e].asset_number,id:s[n].child[e].id})}x(t)},onChangePage:e=>{console.log(e),localStorage.setItem("page",e)},pagination:!0,paginationDefaultPage:null===localStorage.getItem("page")?1:localStorage.getItem("page"),subHeader:!0,subHeaderComponent:(0,N.jsxs)("div",{className:"d-flex justify-content-end w-100",children:[(0,N.jsxs)(R.Z,{className:"me-3",children:[(0,N.jsx)(Z.Z,{color:"danger",outline:!0,className:"pb-0",onClick:async()=>{await p.post("dapi/inven/delete",{data:u}).then((e=>{var s,a,n;null!==e&&void 0!==e&&null!==(s=e.data)&&void 0!==s&&s.success?((0,_.Z)("success","".concat(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.message)),t(),h([])):(0,_.Z)("error","".concat(null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.message))})).catch((e=>{h([]),(0,_.Z)("error",e)}))},children:(0,N.jsx)(L(),{icon:"delete_forever"})}),(0,N.jsx)(Z.Z,{color:"warning",outline:!0,children:(0,N.jsx)(I.WD,{document:(0,N.jsx)(E,{acet:v}),fileName:"SysPEMA-".concat(new Date),children:(0,N.jsx)(L(),{icon:"print"})})})]}),(0,N.jsx)(w.Z,{type:"text",value:l,placeholder:"search . . . . ",className:"w-25",onChange:e=>i(e.target.value)})]})})})};var H=t(16354),M=t(63009),K=t(39773),V=t(73830),W=t(30337);t(58988);const Y=e=>{let{reqser:s,refetch2:t}=e;const n=(0,a.useRef)(null),{auth:l}=(0,v.Z)(),[i,r]=(0,a.useState)(!1),[o,c]=(0,a.useState)(!1),[d,u]=(0,a.useState)(),[h,x]=(0,a.useState)(),[g,p]=(0,a.useState)(),j=(0,m.Z)(),P=()=>r(!i),k=()=>c(!o),q=e=>{u(e),console.log(e)},O=e=>{var s;(s=e.target.files[0],new Promise((e=>{let t="";const a=new FileReader;a.readAsDataURL(s),a.onload=()=>{t=a.result,e(t)}}))).then((e=>{(async e=>{const s={id:d.id,base64file:e.slice(e.lastIndexOf(",")+1),asset_number:d.asset_number};console.log(s),await j.post("dapi/inven/service/upload",s).then((e=>{var s,t;null!==e&&void 0!==e&&null!==(s=e.data)&&void 0!==s&&s.success&&p(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.data.filename)})).catch((e=>{(0,_.Z)("error",e)}))})(e)})).catch((e=>{console.log(e)}))},F=[{name:"Asset Number",selector:e=>e.asset_number},{name:"Asset Name",selector:e=>e.asset_name},{name:"Complaint",selector:e=>e.complaint},{name:"Request By",selector:e=>e.requester},{name:"Requested at",selector:e=>new Date(e.created_at).toLocaleString()},{name:(0,N.jsx)(N.Fragment,{children:l.user.roles.includes("PicAsset")?"Action":"Status"}),selector:e=>(0,N.jsx)(N.Fragment,{children:l.user.roles.includes("PicAsset")?(0,N.jsx)(N.Fragment,{children:"submit"===e.status?(0,N.jsx)(Z.Z,{size:"sm",onClick:()=>{P(),q(e)},children:"Check"}):(0,N.jsx)(N.Fragment,{children:"progress"===e.status?(0,N.jsx)(Z.Z,{size:"sm",color:"success",onClick:()=>{q(e),k()},children:"Report"}):""})}):(0,N.jsx)(H.Z,{color:"secondary",children:e.status})})}];return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(A.ZP,{columns:F,data:s,pagination:!0}),(0,N.jsxs)(f.Z,{isOpen:i,toggle:P,children:[(0,N.jsx)(y.Z,{toggle:P,children:null===d||void 0===d?void 0:d.asset_name}),(0,N.jsx)(b.Z,{children:(0,N.jsxs)(M.Z,{children:[(0,N.jsx)(K.Z,{xs:5,children:"Nomor Aset"}),(0,N.jsxs)(K.Z,{xs:7,children:[": ",null===d||void 0===d?void 0:d.asset_number]}),(0,N.jsx)(K.Z,{xs:5,children:"Keluhan"}),(0,N.jsxs)(K.Z,{xs:7,children:[": ",null===d||void 0===d?void 0:d.complaint]}),(0,N.jsx)(K.Z,{xs:5,children:"Location"}),(0,N.jsxs)(K.Z,{xs:7,children:[": ",null===d||void 0===d?void 0:d.location]}),(0,N.jsx)(K.Z,{xs:5,children:"Detail"}),(0,N.jsxs)(K.Z,{xs:7,children:[":"," ",(0,N.jsx)("a",{href:"/asset/".concat(null===d||void 0===d?void 0:d.asset_id),target:"_blank",rel:"noreferrer",children:"view"})]})]})}),(0,N.jsxs)(V.Z,{children:[(0,N.jsx)(Z.Z,{className:"btn btn-warning",size:"sm",onClick:async()=>{const e={id:d.id,status:"progress"};await j.post("dapi/inven/service/update",e).then((e=>{var s;null!==e&&void 0!==e&&null!==(s=e.data)&&void 0!==s&&s.success&&((0,_.Z)("success","service status changed succesfully !"),t(),P())})).catch((e=>{(0,_.Z)("error",e)}))},children:"Process"}),(0,N.jsx)(Z.Z,{className:"btn btn-danger",size:"sm",onClick:()=>(async()=>{P(),await(0,W._1)({title:"Are you sure ?",message:"Be careful, what has gone will not come back",buttons:[{label:"Yes",onClick:()=>{const e={id:d.id,status:"reject"};j.post("dapi/inven/service/update",e).then((e=>{var s;null!==e&&void 0!==e&&null!==(s=e.data)&&void 0!==s&&s.success&&((0,_.Z)("success","service status changed succesfully !"),t(),P())})).catch((e=>{(0,_.Z)("error",e)}))}},{label:"No",onClick:()=>{}}]})})(),children:"Reject"})]})]}),(0,N.jsxs)(f.Z,{isOpen:o,toggle:k,children:[(0,N.jsx)(y.Z,{toggle:k,children:null===d||void 0===d?void 0:d.asset_name}),(0,N.jsxs)(b.Z,{children:[(0,N.jsxs)(S.Z,{children:[(0,N.jsx)(C.Z,{for:"in_name",children:"Biaya Service (dalam rupiah)"}),(0,N.jsx)(w.Z,{id:"in_cost",name:"in_cost",type:"number",onChange:e=>x(e.target.value),value:h})]}),(0,N.jsxs)(S.Z,{children:[(0,N.jsx)(C.Z,{for:"in_name",children:"Bukti Service (dalam pdf)"}),(0,N.jsx)(w.Z,{id:"in_file",name:"in_file",type:"text",value:g,onClick:()=>{n.current.click()}})]})]}),(0,N.jsx)(V.Z,{children:(0,N.jsx)(Z.Z,{className:"btn btn-success",onClick:async()=>{const e={cost:h,proof:g,id:d.id};await j.post("dapi/inven/service/done",e).then((e=>{var s;null!==e&&void 0!==e&&null!==(s=e.data)&&void 0!==s&&s.success&&((0,_.Z)("success","service done !"),t(),k())})).catch((e=>{(0,_.Z)("error",e)}))},children:"Done"})})]}),(0,N.jsx)("input",{style:{display:"none"},ref:n,type:"file",accept:"application/pdf",onChange:e=>O(e)})]})},G=()=>{var e,s;const[t,n]=(0,a.useState)("2"),[x,g]=(0,a.useState)(),{auth:p}=(0,v.Z)(),j=(0,m.Z)(),[Z,f]=(0,a.useState)(),[y,b]=(0,a.useState)(),S=(0,h.h)({queries:[{queryKey:["list",0],queryFn:()=>j.get("".concat(null!==p&&void 0!==p&&p.user.roles.includes("PicAsset")?"dapi/inven":"dapi/inv/onme")).then((e=>e.data.data))},{queryKey:["onMe",1],queryFn:()=>j.get("dapi/inv/onme").then((e=>e.data.data))},{queryKey:["req",2],queryFn:()=>j.get("dapi/inv/getrservice").then((e=>e.data.data))}]}),C=(e,s)=>{n(s)},{refetch:w}=S[0],_=(0,a.useCallback)((()=>{S[1].refetch()}),[S[1]]),P=S[0].isLoading,A=(0,a.useCallback)((()=>{S[2].refetch()}),[S[2]]);return(0,a.useEffect)((()=>{null!==p&&void 0!==p&&p.user.roles.includes("PicAsset")?n("1"):n("2")}),[p]),(0,a.useEffect)((()=>{f(S[0].data),b(S[2].data),console.log(y),g(S[1].data),console.log(x)}),[S[0].data,S[1].data,S[2].data]),(0,N.jsx)(N.Fragment,{children:(0,N.jsxs)(c.ZP,{value:t,children:[(0,N.jsx)(l.Z,{className:"mb-1",children:(0,N.jsxs)(d.Z,{onChange:C,"aria-label":"lab API tabs example",vertical:"sm",variant:"scrollable",scrollButtons:"on",children:[null!==p&&void 0!==p&&p.user.roles.includes("PicAsset")?(0,N.jsx)(r.Z,{label:(0,N.jsxs)(o.Z,{badgeContent:0,anchorOrigin:{vertical:"top",horizontal:"right"},color:"primary",children:[(0,N.jsx)("strong",{children:"ALL ASSET"})," \xa0\xa0"]}),value:"1"}):"",(0,N.jsx)(r.Z,{label:(0,N.jsxs)(o.Z,{badgeContent:null===(e=S[1].data)||void 0===e?void 0:e.length,anchorOrigin:{vertical:"top",horizontal:"right"},color:"primary",children:[(0,N.jsx)("strong",{children:"MY RESPONSIBILITY"})," \xa0\xa0"]}),value:"2"}),(0,N.jsx)(r.Z,{label:(0,N.jsxs)(o.Z,{badgeContent:null===(s=S[2].data)||void 0===s?void 0:s.length,anchorOrigin:{vertical:"top",horizontal:"right"},color:"warning",children:[(0,N.jsx)("strong",{children:"SERVICE APPLICATION"})," \xa0\xa0"]}),value:"3"})]})}),null!==p&&void 0!==p&&p.user.roles.includes("PicAsset")?(0,N.jsx)(u.Z,{value:"1",className:"ps-0 pe-0",children:(0,N.jsx)(l.Z,{children:(0,N.jsx)(i.Z,{children:(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(k,{refetch:w}),(0,N.jsx)(B,{listAsset:Z,refetch:w,loading1:P,className:"mt-2"})]})})})}):"",(0,N.jsx)(u.Z,{value:"2",className:"ps-0 pe-0",children:(0,N.jsx)(l.Z,{children:(0,N.jsx)(i.Z,{children:(0,N.jsx)(F,{onMe:x,handleChange:C,refetch1:_,refetch2:A})})})}),(0,N.jsx)(u.Z,{value:"3",className:"ps-0 pe-0",children:(0,N.jsx)(l.Z,{children:(0,N.jsx)(i.Z,{children:(0,N.jsx)(Y,{reqser:y,refetch2:A})})})})]})})},U=()=>(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(n.Z,{}),(0,N.jsx)(G,{})]})},73830:(e,s,t)=>{"use strict";t.d(s,{Z:()=>v});var a=t(72791),n=t(52007),l=t.n(n),i=t(81694),r=t.n(i),o=t(9622),c=["className","cssModule","tag"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var t=arguments[s];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},d.apply(this,arguments)}function u(e,s){if(null==e)return{};var t,a,n=function(e,s){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],s.indexOf(t)>=0||(n[t]=e[t]);return n}(e,s);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],s.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var h={className:l().string,cssModule:l().object,tag:o.iC};function m(e){var s=e.className,t=e.cssModule,n=e.tag,l=void 0===n?"div":n,i=u(e,c),h=(0,o.mx)(r()(s,"modal-footer"),t);return a.createElement(l,d({},i,{className:h}))}m.propTypes=h;const v=m},87369:()=>{},87681:(e,s,t)=>{"use strict";e.exports=t.p+"static/media/user1.6ac95ef9bc0c027733ea.jpg"},42480:()=>{}}]);
//# sourceMappingURL=4804.8e475eaf.chunk.js.map