(self.webpackChunkmaterialpro_main=self.webpackChunkmaterialpro_main||[]).push([[977],{31043:(e,t,s)=>{"use strict";s.d(t,{F:()=>i,Z:()=>l});s(72791);var a=s(65218),n=s(80184);const i=()=>(0,n.jsx)(a.x7,{toastOptions:{className:"",style:{}}}),l=(e,t)=>{((e,t)=>{"success"===e?a.ZP.success(t):"create"===e?(0,a.ZP)(t,{icon:"\ud83e\udd17"}):"start"===e?(0,a.ZP)("Lets get started, cheer up!",{icon:"\ud83d\udcaa"}):"done"===e?(0,a.ZP)("Horeee, task done!",{icon:"\ud83d\udc4f"}):a.ZP.error(t)})(e,t)}},64876:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});var a=s(39782),n=s(61443),i=s(57689),l=s(11087),o=s(80184);const r=()=>{const e=(0,i.TH)(),t=e.pathname.split("/")[1],s=e.pathname.split("/")[2];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h4",{className:"text-capitalize",children:"".concat(s||t)}),(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(n.Z,{to:"/",tag:l.rU,className:"text-decoration-none",children:"Home"}),t?(0,o.jsx)(n.Z,{active:!0,children:t}):"",s?(0,o.jsx)(n.Z,{active:!0,children:s}):""]})]})}},48177:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>V});var a=s(72791),n=s(64876),i=s(43464),l=s(49037),o=s(43896),r=s(29472),c=s(83449),d=s(47283),u=s(82851),h=s(10829),m=s(48089),v=s(17834),x=s(55472),p=s(97892),g=s.n(p),j=s(90235),Z=s(19127),y=s(46724),f=s(55211),b=s(94938),S=s(76167),C=s(42976),w=s(8118),N=s(31043),_=s(80184);const P=(0,j.ZP)(),A=e=>{let{refetch:t}=e;const[s,n]=(0,a.useState)(!1),[i,l]=(0,a.useState)([]),[o,r]=(0,a.useState)([]),[c,d]=(0,a.useState)(""),[u,v]=(0,a.useState)(""),[p,j]=(0,a.useState)(""),[A,q]=(0,a.useState)(""),[L,k]=(0,a.useState)(""),[F,D]=(0,a.useState)(""),[R,E]=(0,a.useState)(""),[I,T]=a.useState(""),[z,H]=(0,a.useState)([]),O=()=>{n(!s)},M={name:"",type:"",price:0,vendor:"",acquisition:g()(),file:"",location:"",responsible:"",amount:0},B=(0,m.Z)(),K=(0,h.h)({queries:[{queryKey:["category",0],queryFn:()=>B.get("dapi/inven/category").then((e=>e.data.data))},{queryKey:["assigne",1],queryFn:()=>B.get("api/employe/assignment-list").then((e=>e.data.data))}]});(0,a.useEffect)((()=>{l(K[0].data),r(K[1].data)}),[K[0].data,K[1].data]);const V=e=>{var t;(t=e.target.files[0],new Promise((e=>{let s="";const a=new FileReader;a.readAsDataURL(t),a.onload=()=>{s=a.result,e(s)}}))).then((e=>{D(e)})).catch((e=>{console.log(e)}))};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(Z.Z,{color:"dark",outline:!0,onClick:O,children:"+ New Inventory"}),(0,_.jsxs)(y.Z,{isOpen:s,toggle:O,children:[(0,_.jsx)(f.Z,{toggle:O,children:"New Inventory Data"}),(0,_.jsxs)(b.Z,{children:[(0,_.jsxs)(S.Z,{children:[(0,_.jsx)(C.Z,{for:"in_name",children:"Inventory Name"}),(0,_.jsx)(w.Z,{id:"in_name",name:"in_name",type:"text",onChange:e=>d(e.target.value),value:c})]}),(0,_.jsxs)(S.Z,{children:[(0,_.jsx)(C.Z,{for:"typeselect",children:"Inventory Type"}),(0,_.jsxs)(w.Z,{id:"typeselect",name:"select",type:"select",value:u,onChange:e=>v(e.target.value),children:[(0,_.jsx)("option",{children:"Choose Type"}),null===i||void 0===i?void 0:i.map((e=>(0,_.jsx)("option",{value:null===e||void 0===e?void 0:e.code,children:null===e||void 0===e?void 0:e.name},null===e||void 0===e?void 0:e.id)))]})]}),(0,_.jsxs)(S.Z,{children:[(0,_.jsx)(C.Z,{for:"in_harga_beli",children:"Purchase Price"}),(0,_.jsx)(w.Z,{id:"in_harga_beli",name:"in_harga_beli",type:"number",onChange:e=>j(e.target.value),value:p})]}),(0,_.jsxs)(S.Z,{children:[(0,_.jsxs)(C.Z,{for:"in_vendor",children:["Vendor ",(0,_.jsx)("small",{children:"(optional)"})]}),(0,_.jsx)(w.Z,{id:"in_vendor",name:"in_vendor",type:"text",onChange:e=>E(e.target.value),value:R})]}),(0,_.jsxs)(S.Z,{children:[(0,_.jsx)(C.Z,{for:"time",children:"Acquisition Time"}),(0,_.jsx)(w.Z,{id:"time",name:"date",placeholder:"date placeholder",type:"date",onChange:e=>T(e.target.value),value:I})]}),(0,_.jsxs)(S.Z,{children:[(0,_.jsx)(C.Z,{for:"in_amount",children:"Amount"}),(0,_.jsx)(w.Z,{id:"in_amount",name:"in_amount",type:"number",min:"1",onChange:e=>k(e.target.value),value:L})]}),(0,_.jsxs)(S.Z,{children:[(0,_.jsx)(C.Z,{for:"file",children:"Inventory Image"}),(0,_.jsx)(w.Z,{id:"file",name:"file",type:"file",onChange:e=>V(e),accept:"image/*"})]}),(0,_.jsxs)(S.Z,{children:[(0,_.jsx)(C.Z,{for:"in_location",children:"Detail Location"}),(0,_.jsx)(w.Z,{id:"in_location",name:"in_location",type:"textarea",onChange:e=>q(e.target.value),value:A})]}),(0,_.jsxs)(S.Z,{children:[(0,_.jsx)(C.Z,{for:"in_harga_beli",children:"Responsible"}),(0,_.jsx)(x.ZP,{components:P,isMulti:!0,value:z,options:o,onChange:e=>{H(e)}})]}),(0,_.jsx)(S.Z,{children:(0,_.jsx)("div",{className:"d-grid gap-2 mt-4",children:(0,_.jsx)(Z.Z,{type:"submit",onClick:()=>(async()=>{if(""!==c&&""!==u&&""!==p&&""!==I&&""!==F&&""!==L&&""!==A&&0!==(null===z||void 0===z?void 0:z.length)){const e=[];z.map((t=>e.push("//".concat(null===t||void 0===t?void 0:t.value,"//")))),M.name=c,M.type=u,M.price=p,M.vendor=R,M.acquisition=g()(I),M.file=F,M.amount=L,M.location=A,M.responsible=e.toLocaleString(),t(),await B.post("dapi/inven/add",M).then((e=>{var s;console.log(e),null!==e&&void 0!==e&&null!==(s=e.data)&&void 0!==s&&s.success&&(O(),t(),(0,N.Z)("success","Submitted Succesfully !"),d(""),v(""),j(""),E(""),T(""),D(""),k(""),q(""),H([]))})).catch((e=>{O(),(0,N.Z)("error",e)}))}else O(),(0,N.Z)("error","Fields Can't Be Empty !!")})(),children:"Save Data"})})})]})]})]})};var q=s(43513),L=(s(87369),s(87681));const k=e=>{let{onMe:t,handleChange:s}=e;const[n,i]=(0,a.useState)(""),[l,o]=(0,a.useState)([]),[r,c]=(0,a.useState)(new Date),[d,u]=(0,a.useState)(!1),[h,v]=(0,a.useState)(),[x,p]=(0,a.useState)(),g=(0,m.Z)(),j=e=>{u(!d),d||p(e)},P=[{name:"Photo",selector:e=>(0,_.jsx)("img",{className:"img-thumbnail img-list mt-1 mb-1",alt:e.id,src:"".concat("https://api.ptpema.co.id/","inven").concat(null===e||void 0===e?void 0:e.file,"?s=").concat(r)})},{name:"Asset Number",selector:e=>e.asset_number},{name:"Asset Name",selector:e=>e.name},{name:"Responsible",selector:e=>{var t;return(0,_.jsx)("div",{className:"member",children:null===(t=e.res_list)||void 0===t?void 0:t.map(((e,t)=>t<3?(0,_.jsx)("img",{src:null!==e&&void 0!==e&&e.img?null===e||void 0===e?void 0:e.img:L,className:"rounded-circle",alt:"avatar",width:"35",height:"35"},null===e||void 0===e?void 0:e.employe_id):(0,_.jsx)("img",{src:"https://cdn5.vectorstock.com/i/1000x1000/38/64/color-circle-with-plus-icon-vector-13503864.jpg",className:"rounded-circle img-pluss",alt:"avatar",width:"20",height:"20"})))})}},{name:"Action",selector:e=>(0,_.jsxs)(Z.Z,{color:"primary",outline:!0,size:"sm",onClick:()=>j(e.id),children:[" ","Request Service"]})}];return(0,a.useEffect)((()=>{o(t),c(new Date)}),[t]),(0,a.useEffect)((()=>{const e=null===t||void 0===t?void 0:t.filter((e=>e.name.toLocaleLowerCase().match(n.toLocaleLowerCase())));o(e)}),[n]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(q.ZP,{columns:P,data:l,pagination:!0,subHeader:!0,subHeaderComponent:(0,_.jsx)("div",{className:"d-flex justify-content-end w-100",children:(0,_.jsx)(w.Z,{type:"text",value:n,placeholder:"search . . . . ",className:"w-25",onChange:e=>i(e.target.value)})})}),(0,_.jsxs)(y.Z,{isOpen:d,toggle:j,children:[(0,_.jsx)(f.Z,{toggle:j,children:"Request Service Form"}),(0,_.jsxs)(b.Z,{children:[(0,_.jsxs)(S.Z,{children:[(0,_.jsx)(C.Z,{for:"in_location",children:"Your Complaint"}),(0,_.jsx)(w.Z,{id:"in_location",name:"in_location",type:"textarea",onChange:e=>v(e.target.value),value:h})]}),(0,_.jsx)(S.Z,{children:(0,_.jsx)("div",{className:"d-grid gap-2 mt-4",children:(0,_.jsx)(Z.Z,{type:"submit",onClick:async()=>{const e={complaint:h,asset_child:x};await g.post("dapi/inv/rservice",e).then((e=>{var t;null!==e&&void 0!==e&&null!==(t=e.data)&&void 0!==t&&t.success&&(j(),s("","3"),(0,N.Z)("success","Request Submitted succesfully !"))})).catch((e=>{j(),(0,N.Z)("error",e)}))},children:"Save Data"})})})]})]})]})};var F=s(71513),D=s(57689),R=s(30690),E=s.n(R),I=s(46272);const T=I.mM.create({body:{paddingTop:35,paddingBottom:65,paddingHorizontal:35},text:{margin:10,fontSize:10,textAlign:"justify"},image:{marginVertical:4,marginHorizontal:4,width:50,height:50}}),z=e=>{let{acet:t}=e;return(0,_.jsx)(I.BB,{children:(0,_.jsx)(I.T3,{style:{...T.body,backgroundColor:"#fff"},children:(0,_.jsx)(I.G7,{style:{display:"flex",flexDirection:"row",flexWrap:"wrap"},children:null===t||void 0===t?void 0:t.map((e=>(0,_.jsxs)(I.G7,{style:{display:"flex",flexDirection:"row",gap:"10px",width:"50%",border:"1px solid #000"},children:[(0,_.jsx)(I.Ee,{style:T.image,src:"https://products.aspose.app/barcode/embed/image.Png?BarcodeType=QR&Content=https://sys.ptpema.co.id/inven/".concat(e.id,"&TextLocation=None&Height=118&Width=118")}),(0,_.jsxs)(I.G7,{style:{display:"flex",flexDirection:"column",gap:"5px",marginVertical:8},children:[(0,_.jsx)(I.xv,{style:{fontSize:"15px",fontWeight:"demibold"},children:null===e||void 0===e?void 0:e.number}),(0,_.jsx)(I.xv,{style:{fontSize:"12px",overflow:"hidden",textOverflow:"ellipsis",width:"170px",height:"18px"},children:null===e||void 0===e?void 0:e.name})]})]},e.id)))})})})},H=e=>{let{listAsset:t,refetch:s}=e;const[n,i]=(0,a.useState)(""),[l,o]=(0,a.useState)([]),[r,c]=(0,a.useState)(new Date),[d,u]=(0,a.useState)([]),[h,v]=(0,a.useState)([]),x=(0,D.s0)(),p=(0,m.Z)(),g=[{name:"Photo",selector:e=>(0,_.jsx)("img",{className:"img-thumbnail img-list mt-1 mb-1",alt:e.id,src:"".concat("https://api.ptpema.co.id/","inven").concat(null===e||void 0===e?void 0:e.file,"?s=").concat(r)})},{name:"Asset Number",selector:e=>e.asset_number},{name:"Asset Name",selector:e=>e.name},{name:"Amount",selector:e=>e.amount},{name:"Responsible",selector:e=>{var t;return(0,_.jsx)("div",{className:"member",children:null===(t=e.responsible_list)||void 0===t?void 0:t.map(((e,t)=>t<3?(0,_.jsx)("img",{src:null!==e&&void 0!==e&&e.img?null===e||void 0===e?void 0:e.img:L,className:"rounded-circle",alt:"avatar",width:"35",height:"35"},null===e||void 0===e?void 0:e.employe_id):(0,_.jsx)("img",{src:"https://cdn5.vectorstock.com/i/1000x1000/38/64/color-circle-with-plus-icon-vector-13503864.jpg",className:"rounded-circle img-pluss",alt:"avatar",width:"20",height:"20"})))})}},{name:"Action",selector:e=>(0,_.jsxs)(Z.Z,{color:"primary",outline:!0,onClick:()=>{return t=e,console.log(t),void x("".concat(t.id));var t},size:"sm",children:[" ","Check Detail"]})}];return(0,a.useEffect)((()=>{o(t),c(new Date)}),[t]),(0,a.useEffect)((()=>{const e=null===t||void 0===t?void 0:t.filter((e=>e.name.toLocaleLowerCase().match(n.toLocaleLowerCase())));o(e)}),[n]),(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(q.ZP,{columns:g,data:l,selectableRows:!0,onSelectedRowsChange:e=>{let{selectedRows:t}=e;u(t);const s=[];for(let n=0;n<(null===t||void 0===t?void 0:t.length);n++)for(let e=0;e<(null===(a=t[n].child)||void 0===a?void 0:a.length);e++){var a;s.push({name:t[n].name,number:t[n].child[e].asset_number,id:t[n].child[e].id})}v(s)},pagination:!0,subHeader:!0,subHeaderComponent:(0,_.jsxs)("div",{className:"d-flex justify-content-end w-100",children:[(0,_.jsxs)(F.Z,{className:"me-3",children:[(0,_.jsx)(Z.Z,{color:"danger",outline:!0,className:"pb-0",onClick:async()=>{await p.post("dapi/inven/delete",{data:d}).then((e=>{var t,a,n;null!==e&&void 0!==e&&null!==(t=e.data)&&void 0!==t&&t.success?((0,N.Z)("success","".concat(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.message)),s(),u([])):(0,N.Z)("error","".concat(null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.message))})).catch((e=>{u([]),(0,N.Z)("error",e)}))},children:(0,_.jsx)(E(),{icon:"delete_forever"})}),(0,_.jsx)(Z.Z,{color:"warning",outline:!0,children:(0,_.jsx)(I.WD,{document:(0,_.jsx)(z,{acet:h}),fileName:"SysPEMA-".concat(new Date),children:(0,_.jsx)(E(),{icon:"print"})})})]}),(0,_.jsx)(w.Z,{type:"text",value:n,placeholder:"search . . . . ",className:"w-25",onChange:e=>i(e.target.value)})]})})})};var O=s(52007);const M=e=>{let{reqser:t}=e;return console.log(t),(0,_.jsx)(_.Fragment,{children:"sdgdsg"})};M.propTypes={reqser:s.n(O)().array};const B=M,K=()=>{var e;const[t,s]=a.useState("2"),[n,x]=(0,a.useState)(),{auth:p}=(0,v.Z)(),g=(0,m.Z)(),[j,Z]=(0,a.useState)(),[y,f]=(0,a.useState)(),b=(0,h.h)({queries:[{queryKey:["list",0],queryFn:()=>g.get("".concat(null!==p&&void 0!==p&&p.user.roles.includes("PicAsset")?"dapi/inven":"dapi/inv/onme")).then((e=>e.data.data))},{queryKey:["onMe",1],queryFn:()=>g.get("dapi/inv/onme").then((e=>e.data.data))}]}),S=(e,t)=>{s(t)},{refetch:C}=b[0];return(0,a.useEffect)((()=>{Z(b[0].data),f(b[0].data),x(b[1].data),null!==p&&void 0!==p&&p.user.roles.includes("PicAsset")?s("1"):s("2")}),[b[0].data,b[1].data]),(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)(c.ZP,{value:t,children:[(0,_.jsx)(i.Z,{className:"mb-1",children:(0,_.jsxs)(d.Z,{onChange:S,"aria-label":"lab API tabs example",children:[null!==p&&void 0!==p&&p.user.roles.includes("PicAsset")?(0,_.jsx)(o.Z,{label:(0,_.jsxs)(r.Z,{badgeContent:0,anchorOrigin:{vertical:"top",horizontal:"right"},color:"primary",children:[(0,_.jsx)("strong",{children:"ALL ASSET"})," \xa0\xa0"]}),value:"1"}):"",(0,_.jsx)(o.Z,{label:(0,_.jsxs)(r.Z,{badgeContent:null===(e=b[1].data)||void 0===e?void 0:e.length,anchorOrigin:{vertical:"top",horizontal:"right"},color:"primary",children:[(0,_.jsx)("strong",{children:"MY RESPONSIBILITY"})," \xa0\xa0"]}),value:"2"}),(0,_.jsx)(o.Z,{label:(0,_.jsxs)(r.Z,{badgeContent:0,anchorOrigin:{vertical:"top",horizontal:"right"},color:"primary",children:[(0,_.jsx)("strong",{children:"SERVICE APPLICATION"})," \xa0\xa0"]}),value:"3"})]})}),null!==p&&void 0!==p&&p.user.roles.includes("PicAsset")?(0,_.jsx)(u.Z,{value:"1",className:"ps-0 pe-0",children:(0,_.jsx)(i.Z,{children:(0,_.jsx)(l.Z,{children:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(A,{refetch:C}),(0,_.jsx)(H,{listAsset:j,refetch:C,className:"mt-2"})]})})})}):"",(0,_.jsx)(u.Z,{value:"2",className:"ps-0 pe-0",children:(0,_.jsx)(i.Z,{children:(0,_.jsx)(l.Z,{children:(0,_.jsx)(k,{onMe:n,handleChange:S})})})}),(0,_.jsx)(u.Z,{value:"3",className:"ps-0 pe-0",children:(0,_.jsx)(i.Z,{children:(0,_.jsx)(l.Z,{children:(0,_.jsx)(B,{reqser:y})})})})]})})},V=()=>(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(n.Z,{}),(0,_.jsx)(K,{})]})},87369:()=>{},87681:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/user1.6ac95ef9bc0c027733ea.jpg"},42480:()=>{}}]);
//# sourceMappingURL=977.fbb7b44f.chunk.js.map