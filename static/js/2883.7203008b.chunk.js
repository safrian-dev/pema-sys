"use strict";(self.webpackChunkmaterialpro_main=self.webpackChunkmaterialpro_main||[]).push([[2883],{31043:(e,i,a)=>{a.d(i,{F:()=>d,Z:()=>t});a(72791);var n=a(65218),s=a(80184);const d=()=>(0,s.jsx)(n.x7,{toastOptions:{className:"",style:{}}}),t=(e,i)=>{((e,i)=>{"success"===e?n.ZP.success(i):"create"===e?(0,n.ZP)(i,{icon:"\ud83e\udd17"}):"start"===e?(0,n.ZP)("Lets get started, cheer up!",{icon:"\ud83d\udcaa"}):"done"===e?(0,n.ZP)("Horeee, task done!",{icon:"\ud83d\udc4f"}):n.ZP.error(i)})(e,i)}},2883:(e,i,a)=>{a.r(i),a.d(i,{default:()=>O});var n=a(72791),s=a(43464),d=a(49037),t=a(16354),r=a(19127),l=a(46724),c=a(55211),o=a(94938),h=a(42976),x=a(8118),j=a(73830),m=a(4828),u=a(76807),p=a(57689),v=a(43896),g=a(83449),f=a(47283),b=a(82851),w=a(29472),y=a(39773),Z=a(80184);const k=e=>{let{activeTab:i,setActiveTab:a,items:n,panels:t,children:r}=e;return(0,Z.jsxs)(g.ZP,{value:i,children:[(0,Z.jsx)(s.Z,{className:"mb-0 rounded-3 overflow-hidden",style:{paddingRight:"7px"},children:(0,Z.jsx)("div",{className:"d-flex justify-content-between align-items-center",children:(0,Z.jsx)(y.Z,{md:"12",children:(0,Z.jsx)(f.Z,{"aria-label":"full width tabs example",variant:"fullWidth",onChange:(e,i)=>{a(i)},children:null===n||void 0===n?void 0:n.map((e=>(0,Z.jsx)(v.Z,{label:(0,Z.jsxs)(w.Z,{badgeContent:0,anchorOrigin:{vertical:"top",horizontal:"right"},color:"primary",style:{textTransform:"capitalize"},children:[(0,Z.jsx)("strong",{children:e.title})," \xa0\xa0"]}),value:e.id},e.id)))})})})}),null===t||void 0===t?void 0:t.map((e=>(0,Z.jsx)(b.Z,{value:e.id,className:"ps-0 pe-0",children:(0,Z.jsx)(s.Z,{className:"mb-0 rounded-3",children:(0,Z.jsx)(d.Z,{children:r})})},e.id)))]})};var _=a(28755),N=a(11087),P=a(48089);const F=e=>{let{companyId:i,setSelectedName:a}=e;const s=(0,P.Z)(),{isLoading:d,error:t,data:l}=(0,u.a)({queryKey:["general-list"],queryFn:()=>s.get("dapi/vendor/".concat(i,"/list-data-umum")).then((e=>e.data.data))});return(0,n.useEffect)((()=>{a(null===l||void 0===l?void 0:l.nama_perusahaan)}),[l]),console.log(l),d?"Loading..":t?"Something went wrong.":(0,Z.jsx)(_.Z,{className:"w-100",children:(0,Z.jsxs)("tbody",{children:[(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{width:"300",children:"Bentuk Perusahaan"}),(0,Z.jsx)("td",{className:"fw-bold",children:l.bentuk_usaha})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{width:"300",children:"Nama Perusahaan"}),(0,Z.jsx)("td",{className:"fw-bold",children:l.nama_perusahaan})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{width:"300",children:"Unique ID"}),(0,Z.jsx)("td",{className:"fw-bold",children:l.nomor_registrasi})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{width:"300",children:"Tipe Penyedia"}),(0,Z.jsx)("td",{className:"fw-bold",children:l.tipe})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{width:"300",children:"Email Perusahaan"}),(0,Z.jsx)("td",{className:"fw-bold",children:l.email})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{width:"300",children:"NPWP"}),(0,Z.jsx)("td",{className:"fw-bold",children:l.no_npwp})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{width:"300",children:"File NPWP"}),(0,Z.jsx)("td",{className:"fw-bold",children:(0,Z.jsx)(N.rU,{to:"data:application/pdf;base64, ".concat(null===l||void 0===l?void 0:l.base64_npwp),download:"npwp.pdf",children:(0,Z.jsx)(r.Z,{type:"button",size:"sm",color:"light",children:"Download File NPWP"})})})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{width:"300",children:"Kontak"}),(0,Z.jsx)("td",{className:"fw-bold",children:l.hp})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{width:"300",children:"Alamat"}),(0,Z.jsx)("td",{className:"fw-bold",children:l.alamat})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{width:"300",children:"Provinsi"}),(0,Z.jsx)("td",{className:"fw-bold",children:l.provinsi})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{width:"300",children:"File PVD"}),(0,Z.jsx)("td",{className:"fw-bold",children:(0,Z.jsx)(N.rU,{to:"data:application/pdf;base64, ".concat(null===l||void 0===l?void 0:l.base64_pvd),download:"pvd.pdf",children:(0,Z.jsx)(r.Z,{type:"button",size:"sm",color:"light",children:"Download File PVD"})})})]})]})})};var T=a(63009),z=a(30690),S=a.n(z);const D=e=>{let{title:i,filename:a,mode:n,action:s,base64:d}=e;return(0,Z.jsxs)(T.Z,{className:"align-items-center mb-4",children:[(0,Z.jsx)("span",{children:i}),(0,Z.jsx)(y.Z,{sm:"12",lg:"12",children:(0,Z.jsxs)("div",{className:"d-flex rounded-2 border align-items-center justify-content-between overflow-hidden",children:[(0,Z.jsx)("div",{className:"h-100 d-flex p-3 bg-success",children:(0,Z.jsx)(S(),{icon:"text_snippet",style:{color:"white"}})}),(0,Z.jsx)("div",{className:"d-flex w-100 px-3",children:(0,Z.jsx)("span",{className:"fw-bold",children:a})}),(0,Z.jsx)("div",{className:"d-flex p-2",children:"preview"===n?(0,Z.jsx)(N.rU,{to:"data:application/pdf;base64, ".concat(d),download:"".concat(a,".pdf"),children:(0,Z.jsx)(r.Z,{type:"button",size:"sm",color:"light",children:"Download"})}):(0,Z.jsx)(r.Z,{type:"button",size:"sm",color:"secondary",className:"d-flex",onClick:s,children:"Edit"})})]})})]})},I=e=>{let{companyId:i}=e;const a=(0,P.Z)(),{isLoading:n,error:s,data:d}=(0,u.a)({queryKey:["official-list"],queryFn:()=>a.get("dapi/vendor/".concat(i,"/list-jajaran")).then((e=>e.data.data))});return n?"Loading..":s?"Something went wrong.":(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(_.Z,{hover:!0,bordered:!0,children:[(0,Z.jsx)("thead",{children:(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("th",{width:"50",children:"#"}),(0,Z.jsx)("th",{children:"Nama"}),(0,Z.jsx)("th",{children:"Jabatan"})]})}),(0,Z.jsx)("tbody",{children:null===d||void 0===d?void 0:d.jajaran.map(((e,i)=>(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:i+1}),(0,Z.jsx)("td",{children:e.nama}),(0,Z.jsx)("td",{children:e.jabatan})]},e.id)))})]}),(0,Z.jsx)(D,{filename:"File Struktur dan NPWP Jajaran Direksi/Komisaris Perusahaan",base64:null===d||void 0===d?void 0:d.struktur_base64,mode:"preview"})]})},C=["File Company Profil","File KTP Pengurus","File SK Kemenkumham","File Fakta Integritas","File SPT 3 Tahun Terakhir","File Laporan Pajak 3 Bulan Terakhir","File Laporan Keuangan 3 Tahun Terakhir","File Rekening Koran 3 Bulan Terakhir"],L=e=>{let{companyId:i}=e;const[a,s]=(0,n.useState)(),[d,t]=(0,n.useState)(),[l,c]=(0,n.useState)(),o=(0,P.Z)();return(0,n.useEffect)((()=>{!async function(){await o.get("dapi/vendor/".concat(i,"/list-akta")).then((e=>s(e.data.data)))}(),async function(){await o.get("dapi/vendor/".concat(i,"/list-izin")).then((e=>t(e.data.data)))}(),async function(){await o.get("dapi/vendor/".concat(i,"/list-dokumen")).then((e=>c(e.data.data)))}()}),[]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(y.Z,{children:[(0,Z.jsx)("h4",{children:"Akta Perusahaan"}),(null===a||void 0===a?void 0:a.length)>0?(0,Z.jsxs)(_.Z,{hover:!0,bordered:!0,children:[(0,Z.jsx)("thead",{children:(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("th",{width:"50",children:"#"}),(0,Z.jsx)("th",{children:"Nomor"}),(0,Z.jsx)("th",{children:"Terbit"}),(0,Z.jsx)("th",{children:"Notaris"}),(0,Z.jsx)("th",{children:"Jenis"}),(0,Z.jsx)("th",{children:"File"})]})}),(0,Z.jsx)("tbody",{children:null===a||void 0===a?void 0:a.map(((e,i)=>(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:i+1}),(0,Z.jsx)("td",{children:e.no_akta}),(0,Z.jsx)("td",{children:e.tgl_terbit}),(0,Z.jsx)("td",{children:e.nama_notaris}),(0,Z.jsx)("td",{children:e.jenis}),(0,Z.jsx)("td",{children:(0,Z.jsx)(N.rU,{to:"data:application/pdf;base64, ".concat(e.file_base64),download:"akta_".concat(e.no_akta,".pdf"),children:(0,Z.jsx)(r.Z,{type:"button",size:"sm",color:"light",children:"Download"})})})]},e.id_akta)))})]}):"Loading.."]}),(0,Z.jsxs)(y.Z,{className:"mt-4",children:[(0,Z.jsx)("h4",{children:"Izin Perusahaan"}),(null===d||void 0===d?void 0:d.length)>0?(0,Z.jsxs)(_.Z,{hover:!0,bordered:!0,children:[(0,Z.jsx)("thead",{children:(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("th",{width:"50",children:"#"}),(0,Z.jsx)("th",{children:"Nomor"}),(0,Z.jsx)("th",{children:"Izin"}),(0,Z.jsx)("th",{children:"Terbit"}),(0,Z.jsx)("th",{children:"Berakhir"}),(0,Z.jsx)("th",{children:"File"})]})}),(0,Z.jsx)("tbody",{children:null===d||void 0===d?void 0:d.map(((e,i)=>(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:i+1}),(0,Z.jsx)("td",{children:e.nomor}),(0,Z.jsx)("td",{children:e.nama_izin}),(0,Z.jsx)("td",{children:e.tgl_terbit}),(0,Z.jsx)("td",{children:e.tgl_berakhir}),(0,Z.jsx)("td",{children:(0,Z.jsx)(N.rU,{to:"data:application/pdf;base64, ".concat(e.nomor),download:"izin_berusaha_".concat(e.nomor,".pdf"),children:(0,Z.jsx)(r.Z,{type:"button",size:"sm",color:"light",children:"Download"})})})]},e.id_izin)))})]}):"Loading.."]}),(null===l||void 0===l?void 0:l.length)>0?l.map(((e,i)=>(0,Z.jsx)(y.Z,{sm:"12",md:"8",className:"mt-4",children:(0,Z.jsx)(D,{filename:C[i],mode:"preview",base64:e.base_64})},e.name))):""]})};var K=a(23606);const U=e=>{let{companyId:i}=e;const a=(0,P.Z)(),{isLoading:n,error:s,data:d}=(0,u.a)({queryKey:["portofolio-list"],queryFn:()=>a.get("dapi/vendor/".concat(i,"/list-portofolio")).then((e=>e.data.data))});return n?"Loading..":s?"Something went wrong.":(null===d||void 0===d?void 0:d.length)>0?(0,Z.jsxs)(_.Z,{hover:!0,bordered:!0,children:[(0,Z.jsx)("thead",{children:(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("th",{width:"50",children:"#"}),(0,Z.jsx)("th",{children:"Nama Projek"}),(0,Z.jsx)("th",{children:"Tahun Mulai"}),(0,Z.jsx)("th",{children:"Tahun Selesai"}),(0,Z.jsx)("th",{children:"Durasi (Bulan)"}),(0,Z.jsx)("th",{children:"Owner"}),(0,Z.jsx)("th",{children:"Nilai PO"}),(0,Z.jsx)("th",{children:"SPK"})]})}),(0,Z.jsx)("tbody",{children:d.map(((e,i)=>(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:i+1}),(0,Z.jsx)("td",{children:e.nama_project}),(0,Z.jsx)("td",{children:e.tahun_mulai}),(0,Z.jsx)("td",{children:e.tahun_selesai}),(0,Z.jsx)("td",{children:e.durasi}),(0,Z.jsx)("td",{children:e.owner}),(0,Z.jsx)("td",{children:(0,K.Z)(e.nilai_po)}),(0,Z.jsx)("td",{children:(0,Z.jsx)(N.rU,{to:"data:application/pdf;base64, ".concat(e.base64),download:"spk.pdf",children:(0,Z.jsx)(r.Z,{type:"button",size:"sm",color:"light",children:"Download"})})})]},e.id_porto)))})]}):"Belum ada data."},q=e=>{let{companyId:i}=e;const a=(0,P.Z)(),{isLoading:n,error:s,data:d}=(0,u.a)({queryKey:["kbli-list"],queryFn:()=>a.get("dapi/vendor/".concat(i,"/list-kbli")).then((e=>e.data.data))});return n?"Loading..":s?"Something went wrong.":(null===d||void 0===d?void 0:d.length)>0?(0,Z.jsxs)(_.Z,{hover:!0,bordered:!0,children:[(0,Z.jsx)("thead",{children:(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("th",{width:"50",children:"#"}),(0,Z.jsx)("th",{children:"NIB"}),(0,Z.jsx)("th",{children:"Nama Bidang Usaha"})]})}),(0,Z.jsx)("tbody",{children:null===d||void 0===d?void 0:d.map(((e,i)=>(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:i+1}),(0,Z.jsx)("td",{children:e.nomor_kbli}),(0,Z.jsx)("td",{children:e.nama_kbli})]},e.id_kbli)))})]}):"Belum ada data."};var B=a(31043);const A=[{id:1,title:"Data Umum"},{id:2,title:"Data Jajaran/Komisaris"},{id:3,title:"Dokumen Perusahaan"},{id:4,title:"Portofolio"},{id:5,title:"Bidang Usaha"}],O=()=>{const[e,i]=(0,n.useState)(1),{id:a}=(0,p.UO)(),[v,g]=(0,n.useState)(),[f,b]=(0,n.useState)(!1),[w,y]=(0,n.useState)(),[_,N]=(0,n.useState)(!1),[T,z]=(0,n.useState)(!1),S=()=>{N(!_)},D=(0,P.Z)(),{isLoading:C,error:K,data:O,refetch:R}=(0,u.a)({queryKey:["status-verifikasi"],queryFn:()=>D.get("dapi/vendor/company-verify-status/".concat(a)).then((e=>e.data.data))}),W=()=>{z(!T)};return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(k,{items:A,panels:A,activeTab:e,setActiveTab:i,children:(0,Z.jsxs)(Z.Fragment,{children:[1===e&&(0,Z.jsx)(F,{companyId:a,setSelectedName:y}),2===e&&(0,Z.jsx)(I,{companyId:a}),3===e&&(0,Z.jsx)(L,{companyId:a}),4===e&&(0,Z.jsx)(U,{companyId:a}),5===e&&(0,Z.jsx)(q,{companyId:a})]})}),(0,Z.jsxs)(s.Z,{className:"rounded-3",children:[(0,Z.jsxs)(d.Z,{className:"d-flex gap-3 justify-content-between",children:[(0,Z.jsx)("div",{className:"d-flex gap-1 flex-column",children:C?"Loading...":K?"Something went wrong.":(0,Z.jsx)("table",{children:(0,Z.jsxs)("tbody",{children:[(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{width:"150",children:"Admin Umum"}),(0,Z.jsx)("td",{children:":"}),(0,Z.jsxs)("td",{children:[("review_submit"===(null===O||void 0===O?void 0:O.status_verifikasi_umum)||"review_update"===(null===O||void 0===O?void 0:O.status_verifikasi_umum))&&(0,Z.jsx)(t.Z,{color:"warning",style:{textTransform:"capitalize"},children:"Permintaan review dari vendor"}),"revisi"===(null===O||void 0===O?void 0:O.status_verifikasi_umum)&&(0,Z.jsx)(t.Z,{color:"danger",style:{textTransform:"capitalize"},children:"Revisi data oleh Admin"}),"terverifikasi"===(null===O||void 0===O?void 0:O.status_verifikasi_umum)&&(0,Z.jsx)(t.Z,{color:"success",style:{textTransform:"capitalize"},children:"Terverifikasi"})," ",(0,Z.jsx)("small",{children:null!==O&&void 0!==O&&O.umum_updated_at?"at ".concat(null===O||void 0===O?void 0:O.umum_updated_at):""})]})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{width:"150",children:"Admin SCM"}),(0,Z.jsx)("td",{children:":"}),(0,Z.jsxs)("td",{children:[("review_submit"===(null===O||void 0===O?void 0:O.status_verifikasi_scm)||"review_update"===(null===O||void 0===O?void 0:O.status_verifikasi_scm))&&(0,Z.jsx)(t.Z,{color:"warning",style:{textTransform:"capitalize"},children:"Permintaan review dari vendor"}),"revisi"===(null===O||void 0===O?void 0:O.status_verifikasi_scm)&&(0,Z.jsx)(t.Z,{color:"danger",style:{textTransform:"capitalize"},children:"Revisi data oleh Admin"}),"terverifikasi"===(null===O||void 0===O?void 0:O.status_verifikasi_scm)&&(0,Z.jsx)(t.Z,{color:"success",style:{textTransform:"capitalize"},children:"Terverifikasi"})," ",(0,Z.jsxs)("small",{children:[" ",null!==O&&void 0!==O&&O.scm_updated_at?"at ".concat(null===O||void 0===O?void 0:O.scm_updated_at):""]})]})]})]})})}),(0,Z.jsxs)("div",{className:"d-flex gap-3 align-items-center",children:[(0,Z.jsx)("div",{children:(0,Z.jsx)(r.Z,{type:"button",color:"warning",outline:!0,onClick:S.bind(null),children:"Revisi"})}),(0,Z.jsx)("div",{children:(0,Z.jsx)(r.Z,{color:"secondary",onClick:()=>{return e=w,z(!0),void y(e);var e},children:"Approve"})})]})]}),(0,Z.jsxs)(l.Z,{isOpen:_,toggle:S.bind(null),centered:!0,children:[(0,Z.jsx)(c.Z,{toggle:S.bind(null),children:"Revisi Data Perusahaan Vendor"}),(0,Z.jsx)(o.Z,{children:(0,Z.jsxs)("div",{className:"d-flex flex-column ",children:[(0,Z.jsx)(h.Z,{htmlFor:"comment",children:"Catatan"}),(0,Z.jsx)(x.Z,{type:"textarea",id:"comment",rows:"10",name:"comment",onChange:e=>(e=>{g(e.target.value)})(e),placeholder:"Masukkan catatan revisi"})]})}),(0,Z.jsxs)(j.Z,{children:[(0,Z.jsx)(r.Z,{color:"primary",onClick:()=>{(async()=>{b(!0),await D.post("dapi/vendor/verifikasi/".concat(a),{status:"revisi",komentar:v}).then((()=>{R(),(0,B.Z)("success","Informasi revisi telah dikirim")})).catch((()=>{(0,B.Z)("error","Gagal mengirim data")})),N(!1),b(!1)})()},children:f?(0,Z.jsxs)("div",{className:"d-flex align-items-center gap-2",children:[(0,Z.jsx)(m.Z,{size:"sm"}),"Mengirim.."]}):"Kirim"}),(0,Z.jsx)(r.Z,{color:"secondary",outline:!0,onClick:S.bind(null),children:"Cancel"})]})]}),(0,Z.jsxs)(l.Z,{isOpen:T,toggle:W.bind(null),centered:!0,children:[(0,Z.jsx)(c.Z,{toggle:W.bind(null),children:"Konfirmasi"}),(0,Z.jsx)(o.Z,{children:(0,Z.jsx)("div",{className:"d-flex text-center",children:(0,Z.jsxs)("p",{children:[" ","Data perusahaan ",(0,Z.jsx)("strong",{children:w})," akan diubah menjadi terverifikasi dan akan mendapatkan informasi data pengadaan. Lanjutkan?"]})})}),(0,Z.jsxs)(j.Z,{children:[f?(0,Z.jsx)(r.Z,{type:"button",color:"primary",disabled:!0,children:(0,Z.jsxs)("div",{className:"d-flex align-items-center gap-2",children:[(0,Z.jsx)(m.Z,{size:"sm"}),"Loading.."]})}):(0,Z.jsx)(r.Z,{type:"button",color:"primary",onClick:async()=>{b(!0),await D.post("dapi/vendor/verifikasi/".concat(a),{status:"terverifikasi"}).then((()=>{R(),(0,B.Z)("success","Data Perusahaan ".concat(w," telah terverifikasi."))})).catch((()=>{(0,B.Z)("error","Gagal mengirim data")})),z(!1),b(!1)},children:"Ya"}),(0,Z.jsx)(r.Z,{color:"secondary",onClick:W.bind(null),children:"Cancel"})]})]})]})]})}},23606:(e,i,a)=>{a.d(i,{Z:()=>n});const n=e=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(e)}}]);
//# sourceMappingURL=2883.7203008b.chunk.js.map