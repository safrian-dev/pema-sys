"use strict";(self.webpackChunkmaterialpro_main=self.webpackChunkmaterialpro_main||[]).push([[2883],{31043:(e,i,a)=>{a.d(i,{F:()=>t,Z:()=>d});a(72791);var s=a(65218),n=a(80184);const t=()=>(0,n.jsx)(s.x7,{toastOptions:{className:"",style:{}}}),d=(e,i)=>{((e,i)=>{"success"===e?s.ZP.success(i):"create"===e?(0,s.ZP)(i,{icon:"\ud83e\udd17"}):"start"===e?(0,s.ZP)("Lets get started, cheer up!",{icon:"\ud83d\udcaa"}):"done"===e?(0,s.ZP)("Horeee, task done!",{icon:"\ud83d\udc4f"}):s.ZP.error(i)})(e,i)}},2883:(e,i,a)=>{a.r(i),a.d(i,{default:()=>R});var s=a(72791),n=a(43464),t=a(49037),d=a(16354),r=a(19127),l=a(46724),c=a(55211),o=a(94938),h=a(42976),x=a(8118),j=a(73830),m=a(4828),u=a(76807),v=a(57689),p=a(43896),g=a(83449),f=a(47283),b=a(82851),w=a(29472),y=a(39773),k=a(80184);const Z=e=>{let{activeTab:i,setActiveTab:a,items:s,panels:d,children:r}=e;return(0,k.jsxs)(g.ZP,{value:i,children:[(0,k.jsx)(n.Z,{className:"mb-0 rounded-3 overflow-hidden",style:{paddingRight:"7px"},children:(0,k.jsx)("div",{className:"d-flex justify-content-between align-items-center",children:(0,k.jsx)(y.Z,{md:"12",children:(0,k.jsx)(f.Z,{"aria-label":"full width tabs example",variant:"fullWidth",onChange:(e,i)=>{a(i)},children:null===s||void 0===s?void 0:s.map((e=>(0,k.jsx)(p.Z,{label:(0,k.jsxs)(w.Z,{badgeContent:0,anchorOrigin:{vertical:"top",horizontal:"right"},color:"primary",style:{textTransform:"capitalize"},children:[(0,k.jsx)("strong",{children:e.title})," \xa0\xa0"]}),value:e.id},e.id)))})})})}),null===d||void 0===d?void 0:d.map((e=>(0,k.jsx)(b.Z,{value:e.id,className:"ps-0 pe-0",children:(0,k.jsx)(n.Z,{className:"mb-0 rounded-3",children:(0,k.jsx)(t.Z,{children:r})})},e.id)))]})};var _=a(28755),N=a(11087),P=a(48089);const F=e=>{let{companyId:i,setSelectedName:a}=e;const n=(0,P.Z)(),{isLoading:t,error:d,data:l}=(0,u.a)({queryKey:["general-list"],queryFn:()=>n.get("dapi/vendor/".concat(i,"/list-data-umum")).then((e=>e.data.data))});return(0,s.useEffect)((()=>{a(null===l||void 0===l?void 0:l.nama_perusahaan)}),[l]),t?"Loading..":d?"Something went wrong.":(0,k.jsx)(_.Z,{className:"w-100",children:(0,k.jsxs)("tbody",{children:[(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{width:"300",children:"Bentuk Perusahaan"}),(0,k.jsx)("td",{className:"fw-bold",children:l.bentuk_usaha})]}),(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{width:"300",children:"Nama Perusahaan"}),(0,k.jsx)("td",{className:"fw-bold",children:l.nama_perusahaan})]}),(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{width:"300",children:"Unique ID"}),(0,k.jsx)("td",{className:"fw-bold",children:l.nomor_registrasi})]}),(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{width:"300",children:"Tipe Penyedia"}),(0,k.jsx)("td",{className:"fw-bold",children:l.tipe})]}),(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{width:"300",children:"Email Perusahaan"}),(0,k.jsx)("td",{className:"fw-bold",children:l.email})]}),(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{width:"300",children:"NPWP"}),(0,k.jsx)("td",{className:"fw-bold",children:l.no_npwp})]}),(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{width:"300",children:"File NPWP"}),(0,k.jsx)("td",{className:"fw-bold",children:(0,k.jsx)(N.rU,{to:"data:application/pdf;base64, ".concat(null===l||void 0===l?void 0:l.base64_npwp),download:"npwp.pdf",children:(0,k.jsx)(r.Z,{type:"button",size:"sm",color:"light",children:"Download File NPWP"})})})]}),(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{width:"300",children:"Kontak"}),(0,k.jsx)("td",{className:"fw-bold",children:l.hp})]}),(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{width:"300",children:"Alamat"}),(0,k.jsx)("td",{className:"fw-bold",children:l.alamat})]}),(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{width:"300",children:"Provinsi"}),(0,k.jsx)("td",{className:"fw-bold",children:l.provinsi})]}),(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{width:"300",children:"File PVD"}),(0,k.jsx)("td",{className:"fw-bold",children:(0,k.jsx)(N.rU,{to:"data:application/pdf;base64, ".concat(null===l||void 0===l?void 0:l.base64_pvd),download:"pvd.pdf",children:(0,k.jsx)(r.Z,{type:"button",size:"sm",color:"light",children:"Download File PVD"})})})]})]})})};var T=a(63009),z=a(30690),S=a.n(z);const D=e=>{let{title:i,filename:a,mode:s,action:n,base64:t}=e;return(0,k.jsxs)(T.Z,{className:"align-items-center mb-4",children:[(0,k.jsx)("span",{children:i}),(0,k.jsx)(y.Z,{sm:"12",lg:"12",children:(0,k.jsxs)("div",{className:"d-flex rounded-2 border align-items-center justify-content-between overflow-hidden",children:[(0,k.jsx)("div",{className:"h-100 d-flex p-3 bg-success",children:(0,k.jsx)(S(),{icon:"text_snippet",style:{color:"white"}})}),(0,k.jsx)("div",{className:"d-flex w-100 px-3",children:(0,k.jsx)("span",{className:"fw-bold",children:a})}),(0,k.jsx)("div",{className:"d-flex p-2",children:"preview"===s?(0,k.jsx)(N.rU,{to:"data:application/pdf;base64, ".concat(t),download:"".concat(a,".pdf"),children:(0,k.jsx)(r.Z,{type:"button",size:"sm",color:"light",children:"Download"})}):(0,k.jsx)(r.Z,{type:"button",size:"sm",color:"secondary",className:"d-flex",onClick:n,children:"Edit"})})]})})]})},I=e=>{var i;let{companyId:a}=e;const s=(0,P.Z)(),{isLoading:n,error:t,data:d}=(0,u.a)({queryKey:["official-list"],queryFn:()=>s.get("dapi/vendor/".concat(a,"/list-jajaran")).then((e=>e.data.data))});return n?"Loading..":t?"Something went wrong.":(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(_.Z,{hover:!0,bordered:!0,children:[(0,k.jsx)("thead",{children:(0,k.jsxs)("tr",{children:[(0,k.jsx)("th",{width:"50",children:"#"}),(0,k.jsx)("th",{className:"text-center",children:"Nama"}),(0,k.jsx)("th",{className:"text-center",children:"Jabatan"}),(0,k.jsx)("th",{className:"text-center",children:"NPWP"})]})}),(0,k.jsx)("tbody",{children:(null===d||void 0===d||null===(i=d.jajaran)||void 0===i?void 0:i.length)>0?null===d||void 0===d?void 0:d.jajaran.map(((e,i)=>(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{children:i+1}),(0,k.jsx)("td",{children:e.nama}),(0,k.jsx)("td",{children:e.jabatan}),(0,k.jsx)("td",{children:e.no_npwp_direksi})]},e.id))):(0,k.jsx)("tr",{children:(0,k.jsx)("td",{colSpan:3,className:"text-center",children:"Belum ada data jajaran"})})})]}),null!==(null===d||void 0===d?void 0:d.struktur_base64)&&(0,k.jsx)(D,{filename:"File Struktur dan NPWP Jajaran Direksi/Komisaris Perusahaan",base64:null===d||void 0===d?void 0:d.struktur_base64,mode:"preview"})]})},L=["File Company Profil","File KTP Pengurus","File SK Kemenkumham","File Fakta Integritas","File SPT 3 Tahun Terakhir","File Laporan Pajak 3 Bulan Terakhir","File Laporan Keuangan 3 Tahun Terakhir","File Rekening Koran 3 Bulan Terakhir"],C=e=>{let{companyId:i}=e;const[a,n]=(0,s.useState)(),[t,d]=(0,s.useState)(),[l,c]=(0,s.useState)(),[o,h]=(0,s.useState)(!1),[x,j]=(0,s.useState)(!1),[m,u]=(0,s.useState)(!1),v=(0,P.Z)();return(0,s.useEffect)((()=>{!async function(){h(!0),await v.get("dapi/vendor/".concat(i,"/list-akta")).then((e=>{n(e.data.data),h(!1)}))}(),async function(){j(!0),await v.get("dapi/vendor/".concat(i,"/list-izin")).then((e=>{d(e.data.data),j(!1)}))}(),async function(){u(!0),await v.get("dapi/vendor/".concat(i,"/list-dokumen")).then((e=>{c(e.data.data),u(!1)}))}()}),[]),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(y.Z,{children:[(0,k.jsx)("h4",{children:"Akta Perusahaan"}),o?"Loading..":(null===a||void 0===a?void 0:a.length)>0?(0,k.jsxs)(_.Z,{hover:!0,bordered:!0,children:[(0,k.jsx)("thead",{children:(0,k.jsxs)("tr",{children:[(0,k.jsx)("th",{width:"50",children:"#"}),(0,k.jsx)("th",{children:"Nomor"}),(0,k.jsx)("th",{children:"Terbit"}),(0,k.jsx)("th",{children:"Notaris"}),(0,k.jsx)("th",{children:"Jenis"}),(0,k.jsx)("th",{children:"File"})]})}),(0,k.jsx)("tbody",{children:null===a||void 0===a?void 0:a.map(((e,i)=>(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{children:i+1}),(0,k.jsx)("td",{children:e.no_akta}),(0,k.jsx)("td",{children:e.tgl_terbit}),(0,k.jsx)("td",{children:e.nama_notaris}),(0,k.jsx)("td",{children:e.jenis}),(0,k.jsx)("td",{children:(0,k.jsx)(N.rU,{to:"data:application/pdf;base64, ".concat(e.file_base64),download:"akta_".concat(e.no_akta,".pdf"),children:(0,k.jsx)(r.Z,{type:"button",size:"sm",color:"light",children:"Download"})})})]},e.id_akta)))})]}):(0,k.jsx)("div",{children:"Belum ada data akta"})]}),(0,k.jsxs)(y.Z,{className:"mt-4",children:[(0,k.jsx)("h4",{children:"Izin Perusahaan"}),x?"Loading..":(null===t||void 0===t?void 0:t.length)>0?(0,k.jsxs)(_.Z,{hover:!0,bordered:!0,children:[(0,k.jsx)("thead",{children:(0,k.jsxs)("tr",{children:[(0,k.jsx)("th",{width:"50",children:"#"}),(0,k.jsx)("th",{children:"Nomor"}),(0,k.jsx)("th",{children:"Izin"}),(0,k.jsx)("th",{children:"Terbit"}),(0,k.jsx)("th",{children:"Berakhir"}),(0,k.jsx)("th",{children:"File"})]})}),(0,k.jsx)("tbody",{children:null===t||void 0===t?void 0:t.map(((e,i)=>(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{children:i+1}),(0,k.jsx)("td",{children:e.nomor}),(0,k.jsx)("td",{children:e.nama_izin}),(0,k.jsx)("td",{children:e.tgl_terbit}),(0,k.jsx)("td",{children:e.tgl_berakhir}),(0,k.jsx)("td",{children:(0,k.jsx)(N.rU,{to:"data:application/pdf;base64, ".concat(e.file_base64),download:"izin_berusaha_".concat(e.nomor,".pdf"),children:(0,k.jsx)(r.Z,{type:"button",size:"sm",color:"light",children:"Download"})})})]},e.id_izin)))})]}):(0,k.jsx)("div",{children:"Belum ada data izin"})]}),(0,k.jsxs)(y.Z,{sm:"12",md:"8",className:"mt-4",children:[(0,k.jsx)("h4",{children:"Dokumen Perusahaan"}),m?"Loading..":(null===l||void 0===l?void 0:l.length)>0?l.map(((e,i)=>(0,k.jsx)(D,{filename:L[i],mode:"preview",base64:e.base_64},e.name))):(0,k.jsx)("div",{children:"Belum ada data dokumen"})]})]})};var K=a(23606);const B=e=>{let{companyId:i}=e;const a=(0,P.Z)(),{isLoading:s,error:n,data:t}=(0,u.a)({queryKey:["portofolio-list"],queryFn:()=>a.get("dapi/vendor/".concat(i,"/list-portofolio")).then((e=>e.data.data))});return s?"Loading..":n?"Something went wrong.":(null===t||void 0===t?void 0:t.length)>0?(0,k.jsxs)(_.Z,{hover:!0,bordered:!0,children:[(0,k.jsx)("thead",{children:(0,k.jsxs)("tr",{children:[(0,k.jsx)("th",{width:"50",children:"#"}),(0,k.jsx)("th",{children:"Nama Projek"}),(0,k.jsx)("th",{children:"Tahun Mulai"}),(0,k.jsx)("th",{children:"Tahun Selesai"}),(0,k.jsx)("th",{children:"Durasi (Bulan)"}),(0,k.jsx)("th",{children:"Owner"}),(0,k.jsx)("th",{children:"Nilai PO"}),(0,k.jsx)("th",{children:"SPK"})]})}),(0,k.jsx)("tbody",{children:t.map(((e,i)=>(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{children:i+1}),(0,k.jsx)("td",{children:e.nama_project}),(0,k.jsx)("td",{children:e.tahun_mulai}),(0,k.jsx)("td",{children:e.tahun_selesai}),(0,k.jsx)("td",{children:e.durasi}),(0,k.jsx)("td",{children:e.owner}),(0,k.jsx)("td",{children:(0,K.Z)(e.nilai_po)}),(0,k.jsx)("td",{children:(0,k.jsx)(N.rU,{to:"data:application/pdf;base64, ".concat(e.base64),download:"spk.pdf",children:(0,k.jsx)(r.Z,{type:"button",size:"sm",color:"light",children:"Download"})})})]},e.id_porto)))})]}):"Belum ada data."},U=e=>{let{companyId:i}=e;const a=(0,P.Z)(),{isLoading:s,error:n,data:t}=(0,u.a)({queryKey:["kbli-list"],queryFn:()=>a.get("dapi/vendor/".concat(i,"/list-kbli")).then((e=>e.data.data))});return s?"Loading..":n?"Something went wrong.":(null===t||void 0===t?void 0:t.length)>0?(0,k.jsxs)(_.Z,{hover:!0,bordered:!0,children:[(0,k.jsx)("thead",{children:(0,k.jsxs)("tr",{children:[(0,k.jsx)("th",{width:"50",children:"#"}),(0,k.jsx)("th",{children:"NIB"}),(0,k.jsx)("th",{children:"Nama Bidang Usaha"})]})}),(0,k.jsx)("tbody",{children:null===t||void 0===t?void 0:t.map(((e,i)=>(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{children:i+1}),(0,k.jsx)("td",{children:e.nomor_kbli}),(0,k.jsx)("td",{children:e.nama_kbli})]},e.id_kbli)))})]}):"Belum ada data."};var q=a(31043);const A=[{id:1,title:"Data Umum"},{id:2,title:"Data Jajaran/Komisaris"},{id:3,title:"Dokumen Perusahaan"},{id:4,title:"Portofolio"},{id:5,title:"Bidang Usaha"}],R=()=>{const[e,i]=(0,s.useState)(1),{id:a}=(0,v.UO)(),[p,g]=(0,s.useState)(),[f,b]=(0,s.useState)(!1),[w,y]=(0,s.useState)(),[_,N]=(0,s.useState)(!1),[T,z]=(0,s.useState)(!1),S=()=>{N(!_)},D=(0,P.Z)(),{isLoading:L,error:K,data:R,refetch:O}=(0,u.a)({queryKey:["status-verifikasi"],queryFn:()=>D.get("dapi/vendor/company-verify-status/".concat(a)).then((e=>e.data.data))}),W=()=>{z(!T)};return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(Z,{items:A,panels:A,activeTab:e,setActiveTab:i,children:(0,k.jsxs)(k.Fragment,{children:[1===e&&(0,k.jsx)(F,{companyId:a,setSelectedName:y}),2===e&&(0,k.jsx)(I,{companyId:a}),3===e&&(0,k.jsx)(C,{companyId:a}),4===e&&(0,k.jsx)(B,{companyId:a}),5===e&&(0,k.jsx)(U,{companyId:a})]})}),(0,k.jsxs)(n.Z,{className:"rounded-3",children:[(0,k.jsxs)(t.Z,{className:"d-flex gap-3 justify-content-between",children:[(0,k.jsx)("div",{className:"d-flex gap-1 flex-column",children:L?"Loading...":K?"Something went wrong.":(0,k.jsx)("table",{children:(0,k.jsxs)("tbody",{children:[(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{width:"150",children:"Admin Umum"}),(0,k.jsx)("td",{children:":"}),(0,k.jsxs)("td",{children:["register"===(null===R||void 0===R?void 0:R.status_verifikasi_umum)&&(0,k.jsx)(d.Z,{color:"success",style:{textTransform:"capitalize"},children:"Registered"}),("review_submit"===(null===R||void 0===R?void 0:R.status_verifikasi_umum)||"review_update"===(null===R||void 0===R?void 0:R.status_verifikasi_umum))&&(0,k.jsx)(d.Z,{color:"warning",style:{textTransform:"capitalize"},children:"Permintaan review dari vendor"}),"revisi"===(null===R||void 0===R?void 0:R.status_verifikasi_umum)&&(0,k.jsx)(d.Z,{color:"danger",style:{textTransform:"capitalize"},children:"Revisi data oleh Admin"}),"terverifikasi"===(null===R||void 0===R?void 0:R.status_verifikasi_umum)&&(0,k.jsx)(d.Z,{color:"success",style:{textTransform:"capitalize"},children:"Terverifikasi"})," ",(0,k.jsx)("small",{children:null!==R&&void 0!==R&&R.umum_updated_at?"at ".concat(null===R||void 0===R?void 0:R.umum_updated_at):""})]})]}),(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{width:"150",children:"Admin SCM"}),(0,k.jsx)("td",{children:":"}),(0,k.jsxs)("td",{children:["register"===(null===R||void 0===R?void 0:R.status_verifikasi_scm)&&(0,k.jsx)(d.Z,{color:"success",style:{textTransform:"capitalize"},children:"Registered"}),("review_submit"===(null===R||void 0===R?void 0:R.status_verifikasi_scm)||"review_update"===(null===R||void 0===R?void 0:R.status_verifikasi_scm))&&(0,k.jsx)(d.Z,{color:"warning",style:{textTransform:"capitalize"},children:"Permintaan review dari vendor"}),"revisi"===(null===R||void 0===R?void 0:R.status_verifikasi_scm)&&(0,k.jsx)(d.Z,{color:"danger",style:{textTransform:"capitalize"},children:"Revisi data oleh Admin"}),"terverifikasi"===(null===R||void 0===R?void 0:R.status_verifikasi_scm)&&(0,k.jsx)(d.Z,{color:"success",style:{textTransform:"capitalize"},children:"Terverifikasi"}),(0,k.jsxs)("small",{children:[" ",null!==R&&void 0!==R&&R.scm_updated_at?"at ".concat(null===R||void 0===R?void 0:R.scm_updated_at):""]})]})]})]})})}),(0,k.jsxs)("div",{className:"d-flex gap-3 align-items-center",children:[(0,k.jsx)("div",{children:(0,k.jsx)(r.Z,{type:"button",color:"warning",outline:!0,onClick:S.bind(null),children:"Revisi"})}),(0,k.jsx)("div",{children:(0,k.jsx)(r.Z,{color:"secondary",onClick:()=>{return e=w,z(!0),void y(e);var e},children:"Approve"})})]})]}),(0,k.jsxs)(l.Z,{isOpen:_,toggle:S.bind(null),centered:!0,children:[(0,k.jsx)(c.Z,{toggle:S.bind(null),children:"Revisi Data Perusahaan Vendor"}),(0,k.jsx)(o.Z,{children:(0,k.jsxs)("div",{className:"d-flex flex-column ",children:[(0,k.jsx)(h.Z,{htmlFor:"comment",children:"Catatan"}),(0,k.jsx)(x.Z,{type:"textarea",id:"comment",rows:"10",name:"comment",onChange:e=>(e=>{g(e.target.value)})(e),placeholder:"Masukkan catatan revisi"})]})}),(0,k.jsxs)(j.Z,{children:[(0,k.jsx)(r.Z,{color:"primary",onClick:()=>{(async()=>{b(!0),await D.post("dapi/vendor/verifikasi/".concat(a),{status:"revisi",komentar:p}).then((()=>{O(),(0,q.Z)("success","Informasi revisi telah dikirim")})).catch((()=>{(0,q.Z)("error","Gagal mengirim data")})),N(!1),b(!1)})()},children:f?(0,k.jsxs)("div",{className:"d-flex align-items-center gap-2",children:[(0,k.jsx)(m.Z,{size:"sm"}),"Mengirim.."]}):"Kirim"}),(0,k.jsx)(r.Z,{color:"secondary",outline:!0,onClick:S.bind(null),children:"Cancel"})]})]}),(0,k.jsxs)(l.Z,{isOpen:T,toggle:W.bind(null),centered:!0,children:[(0,k.jsx)(c.Z,{toggle:W.bind(null),children:"Konfirmasi"}),(0,k.jsx)(o.Z,{children:(0,k.jsx)("div",{className:"d-flex text-center",children:(0,k.jsxs)("p",{children:[" ","Data perusahaan ",(0,k.jsx)("strong",{children:w})," akan diubah menjadi terverifikasi dan akan mendapatkan informasi data pengadaan. Lanjutkan?"]})})}),(0,k.jsxs)(j.Z,{children:[f?(0,k.jsx)(r.Z,{type:"button",color:"primary",disabled:!0,children:(0,k.jsxs)("div",{className:"d-flex align-items-center gap-2",children:[(0,k.jsx)(m.Z,{size:"sm"}),"Loading.."]})}):(0,k.jsx)(r.Z,{type:"button",color:"primary",onClick:async()=>{b(!0),await D.post("dapi/vendor/verifikasi/".concat(a),{status:"terverifikasi"}).then((()=>{O(),(0,q.Z)("success","Data Perusahaan ".concat(w," telah terverifikasi."))})).catch((()=>{(0,q.Z)("error","Gagal mengirim data")})),z(!1),b(!1)},children:"Ya"}),(0,k.jsx)(r.Z,{color:"secondary",onClick:W.bind(null),children:"Cancel"})]})]})]})]})}},23606:(e,i,a)=>{a.d(i,{Z:()=>s});const s=e=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(e)}}]);
//# sourceMappingURL=2883.7993441a.chunk.js.map