"use strict";(self.webpackChunkmaterialpro_main=self.webpackChunkmaterialpro_main||[]).push([[7977],{31043:(e,n,t)=>{t.d(n,{F:()=>a,Z:()=>s});t(72791);var r=t(65218),i=t(80184);const a=()=>(0,i.jsx)(r.x7,{toastOptions:{className:"",style:{}}}),s=(e,n)=>{((e,n)=>{"success"===e?r.ZP.success(n):"create"===e?(0,r.ZP)(n,{icon:"\ud83e\udd17"}):"start"===e?(0,r.ZP)("Lets get started, cheer up!",{icon:"\ud83d\udcaa"}):"done"===e?(0,r.ZP)("Horeee, task done!",{icon:"\ud83d\udc4f"}):r.ZP.error(n)})(e,n)}},2883:(e,n,t)=>{t.r(n),t.d(n,{default:()=>L});var r=t(72791),i=t(57689),a=t(43896),s=t(83449),l=t(47283),d=t(82851),o=t(29472),c=t(43464),h=t(39773),u=t(19127),x=t(46724),j=t(55211),p=t(94938),m=t(42976),b=t(8118),f=t(73830),v=t(4828),g=t(49037),y=t(31043),w=t(48089),Z=t(80184);const k=e=>{let{activeTab:n,setActiveTab:t,items:k,panels:N,children:P}=e;const{id:O}=(0,i.UO)(),[E,_]=(0,r.useState)(!1),[S,F]=(0,r.useState)(),[T,C]=(0,r.useState)(!1),I=()=>{_(!E)},z=(0,w.Z)();return(0,Z.jsxs)(s.ZP,{value:n,children:[(0,Z.jsx)(c.Z,{className:"mb-1 rounded-3 overflow-hidden",style:{paddingRight:"7px"},children:(0,Z.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[(0,Z.jsx)(h.Z,{md:"10",children:(0,Z.jsx)(l.Z,{"aria-label":"full width tabs example",variant:"fullWidth",onChange:(e,n)=>{t(n)},children:null===k||void 0===k?void 0:k.map((e=>(0,Z.jsx)(a.Z,{label:(0,Z.jsxs)(o.Z,{badgeContent:0,anchorOrigin:{vertical:"top",horizontal:"right"},color:"primary",style:{textTransform:"capitalize"},children:[(0,Z.jsx)("strong",{children:e.title})," \xa0\xa0"]}),value:e.id},e.id)))})}),(0,Z.jsxs)(h.Z,{md:"1",className:"d-flex justify-content-end",children:[(0,Z.jsx)(u.Z,{type:"button",color:"warning",outline:!0,onClick:I.bind(null),children:"Revisi"}),(0,Z.jsxs)(x.Z,{isOpen:E,toggle:I.bind(null),centered:!0,children:[(0,Z.jsx)(j.Z,{toggle:I.bind(null),children:"Revisi"}),(0,Z.jsx)(p.Z,{children:(0,Z.jsxs)("div",{className:"d-flex flex-column ",children:[(0,Z.jsx)(m.Z,{htmlFor:"comment",children:"Komentar"}),(0,Z.jsx)(b.Z,{type:"textarea",id:"comment",rows:"10",name:"comment",onChange:e=>(e=>{F(e.target.value)})(e)})]})}),(0,Z.jsxs)(f.Z,{children:[(0,Z.jsx)(u.Z,{color:"primary",onClick:()=>{(async()=>{C(!0),await z.post("dapi/vendor/verifikasi/".concat(O),{status:"revisi",komentar:S}).then((()=>{(0,y.Z)("success","Informasi revisi telah dikirim")})).catch((()=>{(0,y.Z)("error","Gagal mengirim data")})),_(!1),C(!1)})()},children:T?(0,Z.jsxs)("div",{className:"d-flex align-items-center gap-2",children:[(0,Z.jsx)(v.Z,{size:"sm"}),"Mengirim.."]}):"Kirim"}),(0,Z.jsx)(u.Z,{color:"secondary",outline:!0,onClick:I.bind(null),children:"Cancel"})]})]})]})]})}),null===N||void 0===N?void 0:N.map((e=>(0,Z.jsx)(d.Z,{value:e.id,className:"ps-0 pe-0",children:(0,Z.jsx)(c.Z,{children:(0,Z.jsx)(g.Z,{children:P})})},e.id)))]})};var N=t(76807),P=t(11087);const O=e=>{let{companyId:n}=e;const t=(0,w.Z)(),{isLoading:r,error:i,data:a}=(0,N.a)({queryKey:["general-list"],queryFn:()=>t.get("dapi/vendor/".concat(n,"/list-data-umum")).then((e=>e.data.data))});return r?"Loading..":i?"Something went wrong.":(0,Z.jsx)("table",{className:"w-100",children:(0,Z.jsxs)("tbody",{children:[(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{width:"300",children:"Bentuk Perusahaan"}),(0,Z.jsx)("td",{className:"fw-bold",children:a.bentuk_usaha})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{width:"300",children:"Nama Perusahaan"}),(0,Z.jsx)("td",{className:"fw-bold",children:a.nama_perusahaan})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{width:"300",children:"Unique ID"}),(0,Z.jsx)("td",{className:"fw-bold",children:a.nomor_registrasi})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{width:"300",children:"Tipe Penyedia"}),(0,Z.jsx)("td",{className:"fw-bold",children:a.tipe})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{width:"300",children:"Email Perusahaan"}),(0,Z.jsx)("td",{className:"fw-bold",children:a.email})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{width:"300",children:"NPWP"}),(0,Z.jsx)("td",{className:"fw-bold",children:a.no_npwp})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{width:"300",children:"File NPWP"}),(0,Z.jsx)("td",{className:"fw-bold",children:(0,Z.jsx)(P.rU,{to:"data:application/pdf;base64, ".concat(null===a||void 0===a?void 0:a.npwp_base64),download:"npwp.pdf",children:(0,Z.jsx)(u.Z,{type:"button",size:"sm",color:"light",children:"Download File NPWP"})})})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{width:"300",children:"Kontak"}),(0,Z.jsx)("td",{className:"fw-bold",children:a.hp})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{width:"300",children:"Alamat"}),(0,Z.jsx)("td",{className:"fw-bold",children:a.alamat})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{width:"300",children:"Provinsi"}),(0,Z.jsx)("td",{className:"fw-bold",children:a.provinsi})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{width:"300",children:"File PVD"}),(0,Z.jsx)("td",{className:"fw-bold",children:(0,Z.jsx)(P.rU,{to:"data:application/pdf;base64, ".concat(null===a||void 0===a?void 0:a.base64_pvd),download:"pvd.pdf",children:(0,Z.jsx)(u.Z,{type:"button",size:"sm",color:"light",children:"Download File PVD"})})})]})]})})};var E=t(28755),_=t(63009),S=t(30690),F=t.n(S);const T=e=>{let{title:n,filename:t,mode:r,action:i,base64:a}=e;return(0,Z.jsxs)(_.Z,{className:"align-items-center mb-4",children:[(0,Z.jsx)("span",{children:n}),(0,Z.jsx)(h.Z,{sm:"12",lg:"12",children:(0,Z.jsxs)("div",{className:"d-flex rounded-2 border align-items-center justify-content-between overflow-hidden",children:[(0,Z.jsx)("div",{className:"h-100 d-flex p-3 bg-success",children:(0,Z.jsx)(F(),{icon:"text_snippet",style:{color:"white"}})}),(0,Z.jsx)("div",{className:"d-flex w-100 px-3",children:(0,Z.jsx)("span",{className:"fw-bold",children:t})}),(0,Z.jsx)("div",{className:"d-flex p-2",children:"preview"===r?(0,Z.jsx)(P.rU,{to:"data:application/pdf;base64, ".concat(a),download:"".concat(t,".pdf"),children:(0,Z.jsx)(u.Z,{type:"button",size:"sm",color:"light",children:"Download"})}):(0,Z.jsx)(u.Z,{type:"button",size:"sm",color:"secondary",className:"d-flex",onClick:i,children:"Edit"})})]})})]})},C=e=>{let{companyId:n}=e;const t=(0,w.Z)(),{isLoading:r,error:i,data:a}=(0,N.a)({queryKey:["official-list"],queryFn:()=>t.get("dapi/vendor/".concat(n,"/list-jajaran")).then((e=>e.data.data))});return r?"Loading..":i?"Something went wrong.":(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(E.Z,{hover:!0,bordered:!0,children:[(0,Z.jsx)("thead",{children:(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("th",{width:"50",children:"#"}),(0,Z.jsx)("th",{children:"Nama"}),(0,Z.jsx)("th",{children:"Jabatan"})]})}),(0,Z.jsx)("tbody",{children:null===a||void 0===a?void 0:a.jajaran.map(((e,n)=>(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:n+1}),(0,Z.jsx)("td",{children:e.nama}),(0,Z.jsx)("td",{children:e.jabatan})]},e.id)))})]}),(0,Z.jsx)(T,{filename:"File Struktur dan NPWP Jajaran Direksi/Komisaris Perusahaan",base64:null===a||void 0===a?void 0:a.struktur_base64,mode:"preview"})]})},I=["File Company Profil","File KTP Pengurus","File SK Kemenkumham","File Fakta Integritas","File SPT 3 Tahun Terakhir","File Laporan Pajak 3 Bulan Terakhir","File Laporan Keuangan 3 Tahun Terakhir","File Rekening Koran 3 Bulan Terakhir"],z=e=>{let{companyId:n}=e;const[t,i]=(0,r.useState)(),[a,s]=(0,r.useState)(),[l,d]=(0,r.useState)(),o=(0,w.Z)();return(0,r.useEffect)((()=>{!async function(){await o.get("dapi/vendor/".concat(n,"/list-akta")).then((e=>i(e.data.data)))}(),async function(){await o.get("dapi/vendor/".concat(n,"/list-izin")).then((e=>s(e.data.data)))}(),async function(){await o.get("dapi/vendor/".concat(n,"/list-dokumen")).then((e=>d(e.data.data)))}()}),[]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(h.Z,{children:[(0,Z.jsx)("h4",{children:"Akta Perusahaan"}),(null===t||void 0===t?void 0:t.length)>0?(0,Z.jsxs)(E.Z,{hover:!0,bordered:!0,children:[(0,Z.jsx)("thead",{children:(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("th",{width:"50",children:"#"}),(0,Z.jsx)("th",{children:"Nomor"}),(0,Z.jsx)("th",{children:"Terbit"}),(0,Z.jsx)("th",{children:"Notaris"}),(0,Z.jsx)("th",{children:"Jenis"}),(0,Z.jsx)("th",{children:"File"})]})}),(0,Z.jsx)("tbody",{children:null===t||void 0===t?void 0:t.map(((e,n)=>(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:n+1}),(0,Z.jsx)("td",{children:e.no_akta}),(0,Z.jsx)("td",{children:e.tgl_terbit}),(0,Z.jsx)("td",{children:e.nama_notaris}),(0,Z.jsx)("td",{children:e.jenis}),(0,Z.jsx)("td",{children:(0,Z.jsx)(P.rU,{to:"data:application/pdf;base64, ".concat(e.file_base64),download:"akta_".concat(e.no_akta,".pdf"),children:(0,Z.jsx)(u.Z,{type:"button",size:"sm",color:"light",children:"Download"})})})]},e.id_akta)))})]}):"Loading.."]}),(0,Z.jsxs)(h.Z,{className:"mt-4",children:[(0,Z.jsx)("h4",{children:"Izin Perusahaan"}),(null===a||void 0===a?void 0:a.length)>0?(0,Z.jsxs)(E.Z,{hover:!0,bordered:!0,children:[(0,Z.jsx)("thead",{children:(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("th",{width:"50",children:"#"}),(0,Z.jsx)("th",{children:"Nomor"}),(0,Z.jsx)("th",{children:"Izin"}),(0,Z.jsx)("th",{children:"Terbit"}),(0,Z.jsx)("th",{children:"Berakhir"}),(0,Z.jsx)("th",{children:"File"})]})}),(0,Z.jsx)("tbody",{children:null===a||void 0===a?void 0:a.map(((e,n)=>(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:n+1}),(0,Z.jsx)("td",{children:e.nomor}),(0,Z.jsx)("td",{children:e.nama_izin}),(0,Z.jsx)("td",{children:e.tgl_terbit}),(0,Z.jsx)("td",{children:e.tgl_berakhir}),(0,Z.jsx)("td",{children:(0,Z.jsx)(P.rU,{to:"data:application/pdf;base64, ".concat(e.nomor),download:"izin_berusaha_".concat(e.nomor,".pdf"),children:(0,Z.jsx)(u.Z,{type:"button",size:"sm",color:"light",children:"Download"})})})]},e.id_izin)))})]}):"Loading.."]}),(null===l||void 0===l?void 0:l.length)>0?l.map(((e,n)=>(0,Z.jsx)(h.Z,{sm:"12",md:"8",className:"mt-4",children:(0,Z.jsx)(T,{filename:I[n],mode:"preview",base64:e.base_64})},e.name))):""]})};var R=t(23606);const D=e=>{let{companyId:n}=e;const t=(0,w.Z)(),{isLoading:r,error:i,data:a}=(0,N.a)({queryKey:["portofolio-list"],queryFn:()=>t.get("dapi/vendor/".concat(n,"/list-portofolio")).then((e=>e.data.data))});return r?"Loading..":i?"Something went wrong.":(null===a||void 0===a?void 0:a.length)>0?(0,Z.jsxs)(E.Z,{hover:!0,bordered:!0,children:[(0,Z.jsx)("thead",{children:(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("th",{width:"50",children:"#"}),(0,Z.jsx)("th",{children:"Nama Projek"}),(0,Z.jsx)("th",{children:"Tahun Mulai"}),(0,Z.jsx)("th",{children:"Tahun Selesai"}),(0,Z.jsx)("th",{children:"Durasi (Bulan)"}),(0,Z.jsx)("th",{children:"Owner"}),(0,Z.jsx)("th",{children:"Nilai PO"}),(0,Z.jsx)("th",{children:"SPK"})]})}),(0,Z.jsx)("tbody",{children:a.map(((e,n)=>(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:n+1}),(0,Z.jsx)("td",{children:e.nama_project}),(0,Z.jsx)("td",{children:e.tahun_mulai}),(0,Z.jsx)("td",{children:e.tahun_selesai}),(0,Z.jsx)("td",{children:e.durasi}),(0,Z.jsx)("td",{children:e.owner}),(0,Z.jsx)("td",{children:(0,R.Z)(e.nilai_po)}),(0,Z.jsx)("td",{children:(0,Z.jsx)(P.rU,{to:"data:application/pdf;base64, ".concat(e.base64),download:"spk.pdf",children:(0,Z.jsx)(u.Z,{type:"button",size:"sm",color:"light",children:"Download"})})})]},e.id_porto)))})]}):"Belum ada data."},K=e=>{let{companyId:n}=e;const t=(0,w.Z)(),{isLoading:r,error:i,data:a}=(0,N.a)({queryKey:["kbli-list"],queryFn:()=>t.get("dapi/vendor/".concat(n,"/list-kbli")).then((e=>e.data.data))});return r?"Loading..":i?"Something went wrong.":(null===a||void 0===a?void 0:a.length)>0?(0,Z.jsxs)(E.Z,{hover:!0,bordered:!0,children:[(0,Z.jsx)("thead",{children:(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("th",{width:"50",children:"#"}),(0,Z.jsx)("th",{children:"NIB"}),(0,Z.jsx)("th",{children:"Nama Bidang Usaha"})]})}),(0,Z.jsx)("tbody",{children:null===a||void 0===a?void 0:a.map(((e,n)=>(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:n+1}),(0,Z.jsx)("td",{children:e.nomor_kbli}),(0,Z.jsx)("td",{children:e.nama_kbli})]},e.id_kbli)))})]}):"Belum ada data."},B=[{id:1,title:"Data Umum"},{id:2,title:"Data Jajaran/Komisaris"},{id:3,title:"Dokumen Perusahaan"},{id:4,title:"Portofolio"},{id:5,title:"Bidang Usaha"}],L=()=>{const[e,n]=(0,r.useState)(1),{id:t}=(0,i.UO)();return(0,Z.jsx)(k,{items:B,panels:B,activeTab:e,setActiveTab:n,children:(0,Z.jsxs)(Z.Fragment,{children:[1===e&&(0,Z.jsx)(O,{companyId:t}),2===e&&(0,Z.jsx)(C,{companyId:t}),3===e&&(0,Z.jsx)(z,{companyId:t}),4===e&&(0,Z.jsx)(D,{companyId:t}),5===e&&(0,Z.jsx)(K,{companyId:t})]})})}},23606:(e,n,t)=>{t.d(n,{Z:()=>r});const r=e=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(e)},75660:(e,n,t)=>{t.d(n,{Z:()=>j});var r=t(63366),i=t(87462),a=t(97326),s=t(94578),l=t(72791),d=t(95545);function o(e,n){var t=Object.create(null);return e&&l.Children.map(e,(function(e){return e})).forEach((function(e){t[e.key]=function(e){return n&&(0,l.isValidElement)(e)?n(e):e}(e)})),t}function c(e,n,t){return null!=t[n]?t[n]:e.props[n]}function h(e,n,t){var r=o(e.children),i=function(e,n){function t(t){return t in n?n[t]:e[t]}e=e||{},n=n||{};var r,i=Object.create(null),a=[];for(var s in e)s in n?a.length&&(i[s]=a,a=[]):a.push(s);var l={};for(var d in n){if(i[d])for(r=0;r<i[d].length;r++){var o=i[d][r];l[i[d][r]]=t(o)}l[d]=t(d)}for(r=0;r<a.length;r++)l[a[r]]=t(a[r]);return l}(n,r);return Object.keys(i).forEach((function(a){var s=i[a];if((0,l.isValidElement)(s)){var d=a in n,o=a in r,h=n[a],u=(0,l.isValidElement)(h)&&!h.props.in;!o||d&&!u?o||!d||u?o&&d&&(0,l.isValidElement)(h)&&(i[a]=(0,l.cloneElement)(s,{onExited:t.bind(null,s),in:h.props.in,exit:c(s,"exit",e),enter:c(s,"enter",e)})):i[a]=(0,l.cloneElement)(s,{in:!1}):i[a]=(0,l.cloneElement)(s,{onExited:t.bind(null,s),in:!0,exit:c(s,"exit",e),enter:c(s,"enter",e)})}})),i}var u=Object.values||function(e){return Object.keys(e).map((function(n){return e[n]}))},x=function(e){function n(n,t){var r,i=(r=e.call(this,n,t)||this).handleExited.bind((0,a.Z)(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}(0,s.Z)(n,e);var t=n.prototype;return t.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},t.componentWillUnmount=function(){this.mounted=!1},n.getDerivedStateFromProps=function(e,n){var t,r,i=n.children,a=n.handleExited;return{children:n.firstRender?(t=e,r=a,o(t.children,(function(e){return(0,l.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:c(e,"appear",t),enter:c(e,"enter",t),exit:c(e,"exit",t)})}))):h(e,i,a),firstRender:!1}},t.handleExited=function(e,n){var t=o(this.props.children);e.key in t||(e.props.onExited&&e.props.onExited(n),this.mounted&&this.setState((function(n){var t=(0,i.Z)({},n.children);return delete t[e.key],{children:t}})))},t.render=function(){var e=this.props,n=e.component,t=e.childFactory,i=(0,r.Z)(e,["component","childFactory"]),a=this.state.contextValue,s=u(this.state.children).map(t);return delete i.appear,delete i.enter,delete i.exit,null===n?l.createElement(d.Z.Provider,{value:a},s):l.createElement(d.Z.Provider,{value:a},l.createElement(n,i,s))},n}(l.Component);x.propTypes={},x.defaultProps={component:"div",childFactory:function(e){return e}};const j=x},73830:(e,n,t)=>{t.d(n,{Z:()=>j});var r=t(72791),i=t(52007),a=t.n(i),s=t(81694),l=t.n(s),d=t(9622),o=["className","cssModule","tag"];function c(){return c=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},c.apply(this,arguments)}function h(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u={className:a().string,cssModule:a().object,tag:d.iC};function x(e){var n=e.className,t=e.cssModule,i=e.tag,a=void 0===i?"div":i,s=h(e,o),u=(0,d.mx)(l()(n,"modal-footer"),t);return r.createElement(a,c({},s,{className:u}))}x.propTypes=u;const j=x},28755:(e,n,t)=>{t.d(n,{Z:()=>j});var r=t(72791),i=t(52007),a=t.n(i),s=t(81694),l=t.n(s),d=t(9622),o=["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"];function c(){return c=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},c.apply(this,arguments)}function h(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u={bordered:a().bool,borderless:a().bool,className:a().string,cssModule:a().object,dark:a().bool,hover:a().bool,innerRef:a().oneOfType([a().func,a().string,a().object]),responsive:a().oneOfType([a().bool,a().string]),responsiveTag:d.iC,size:a().string,striped:a().bool,tag:d.iC};function x(e){var n=e.className,t=e.cssModule,i=e.size,a=e.bordered,s=e.borderless,u=e.striped,x=e.dark,j=e.hover,p=e.responsive,m=e.tag,b=void 0===m?"table":m,f=e.responsiveTag,v=void 0===f?"div":f,g=e.innerRef,y=h(e,o),w=(0,d.mx)(l()(n,"table",!!i&&"table-"+i,!!a&&"table-bordered",!!s&&"table-borderless",!!u&&"table-striped",!!x&&"table-dark",!!j&&"table-hover"),t),Z=r.createElement(b,c({},y,{ref:g,className:w}));if(p){var k=(0,d.mx)(!0===p?"table-responsive":"table-responsive-".concat(p),t);return r.createElement(v,{className:k},Z)}return Z}x.propTypes=u;const j=x},76807:(e,n,t)=>{t.d(n,{a:()=>x});var r=t(73734),i=t(21135),a=t(72791),s=t(69538),l=t(97413),d=t(76153),o=t(96403),c=t(30909),h=t(49952),u=t(38447);function x(e,n,t){return function(e,n){const t=(0,o.NL)({context:e.context}),r=(0,c.S)(),i=(0,d._)(),x=t.defaultQueryOptions(e);x._optimisticResults=r?"isRestoring":"optimistic",x.onError&&(x.onError=s.V.batchCalls(x.onError)),x.onSuccess&&(x.onSuccess=s.V.batchCalls(x.onSuccess)),x.onSettled&&(x.onSettled=s.V.batchCalls(x.onSettled)),(0,u.Fb)(x),(0,h.pf)(x,i),(0,h.JN)(i);const[j]=a.useState((()=>new n(t,x))),p=j.getOptimisticResult(x);if((0,l.$)(a.useCallback((e=>{const n=r?()=>{}:j.subscribe(s.V.batchCalls(e));return j.updateResult(),n}),[j,r]),(()=>j.getCurrentResult()),(()=>j.getCurrentResult())),a.useEffect((()=>{j.setOptions(x,{listeners:!1})}),[x,j]),(0,u.SB)(x,p,r))throw(0,u.j8)(x,j,i);if((0,h.KJ)({result:p,errorResetBoundary:i,useErrorBoundary:x.useErrorBoundary,query:j.getCurrentQuery()}))throw p.error;return x.notifyOnChangeProps?p:j.trackResult(p)}((0,r._v)(e,n,t),i.z)}}}]);
//# sourceMappingURL=7977.db25bf2f.chunk.js.map