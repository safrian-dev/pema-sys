"use strict";(self.webpackChunkmaterialpro_main=self.webpackChunkmaterialpro_main||[]).push([[497],{31043:(e,n,a)=>{a.d(n,{F:()=>r,Z:()=>i});a(72791);var t=a(65218),s=a(80184);const r=()=>(0,s.jsx)(t.x7,{toastOptions:{className:"",style:{}}}),i=(e,n)=>{((e,n)=>{"success"===e?t.ZP.success(n):"create"===e?(0,t.ZP)(n,{icon:"\ud83e\udd17"}):"start"===e?(0,t.ZP)("Lets get started, cheer up!",{icon:"\ud83d\udcaa"}):"done"===e?(0,t.ZP)("Horeee, task done!",{icon:"\ud83d\udc4f"}):t.ZP.error(n)})(e,n)}},39497:(e,n,a)=>{a.r(n),a.d(n,{default:()=>Z});var t=a(72791),s=a(76807),r=a(39773),i=a(43464),o=a(49037),l=a(14448),c=a(69399),d=a(63009),u=a(76167),h=a(42976),p=a(8118),k=a(19127),j=a(4828),m=a(30690),_=a.n(m),x=a(57689),f=a(11087),g=a(48089),v=a(31043),b=a(37493),y=a(80184);const Z=()=>{const{id:e}=(0,x.UO)(),[n,a]=(0,t.useState)(!1),[m,Z]=(0,t.useState)(),[w,C]=(0,t.useState)(!1),[P,N]=(0,t.useState)(!1),[O,F]=(0,t.useState)(!0),[S,R]=(0,t.useState)(!0),[T,D]=(0,t.useState)(),[E,K]=(0,t.useState)(),[J,B]=(0,t.useState)({dok_fakta_integritas:!1,dok_formulir_isian_kualifikasi:!1,dok_hse_plan:!1,dok_jaminan_penawaran:!1,dok_kelengkapan_izin_usaha:!1,dok_list_peralatan:!1,dok_listmanpower_plus_cv:!1,dok_metode_pelaksanaan:!1,dok_penawaran_komersial:!1,dok_perhitungan_tkdn:!1,dok_qaqc_plan:!1,dok_schedule_pekerjaan:!1,dok_struktur_organisasi_pekerjaan:!1,dok_surat_penyampaian_penawaran:!1,dok_wajib_lainnya:!1}),q=(0,g.Z)(),{data:L,refetch:I}=(0,s.a)({queryKey:["tenderbyid"],queryFn:()=>q.get("dapi/vendor/tender/".concat(e)).then((e=>e.data.data))});(0,t.useEffect)((()=>{Z(L),"umum"===(null===L||void 0===L?void 0:L.metode_pengadaan)||"terbatas"===(null===L||void 0===L?void 0:L.metode_pengadaan)?(C(!0),"pasca kualifikasi"===(null===L||void 0===L?void 0:L.sistem_kualifikasi)?N(!0):N(!1)):C(!1),B((null===L||void 0===L?void 0:L.centang_dok_wajib)&&JSON.parse(null===L||void 0===L?void 0:L.centang_dok_wajib))}),[L]);const M=e=>{Z((n=>({...n,[e.target.id]:e.target.value})))},U=e=>{B((n=>({...n,[e.target.id]:e.target.checked})))};return(0,y.jsx)(r.Z,{lg:"12",children:(0,y.jsx)(i.Z,{children:(0,y.jsxs)(o.Z,{className:"d-flex flex-column gap-2",children:[(0,y.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,y.jsxs)(l.Z,{tag:"h4",className:"fw-bold",children:[(null===L||void 0===L?void 0:L.nama_tender)||"..",(0,y.jsx)("br",{}),(0,y.jsx)("small",{style:{fontWeight:"lighter"},children:"Update Tender"})]}),(0,y.jsx)(f.rU,{to:"projects",style:{textDecoration:"none"}})]}),(0,y.jsxs)(c.Z,{onSubmit:async e=>{e.preventDefault(),a(!0),m.id=null===m||void 0===m?void 0:m.id_tender,m.centang_dok_wajib=J,m.dok_tender=T,m.dok_deskripsi_tender=E,await q.post("dapi/vendor/tender/update",m).then((()=>{(0,v.Z)("success","Tender updated successfully."),I()})).catch((()=>{(0,v.Z)("error","Something went wrong.")})),F(!0),R(!0),a(!1)},children:[(0,y.jsxs)(d.Z,{lg:"12",children:[(0,y.jsxs)(r.Z,{md:"6",children:[(0,y.jsxs)(u.Z,{children:[(0,y.jsx)(h.Z,{htmlFor:"metode_pengadaan",children:"Metode Pengadaan"}),(0,y.jsxs)(p.Z,{type:"select",name:"metode_pengadaan",id:"metode_pengadaan",onChange:e=>{(e=>{M(e),"umum"===e.target.value||"terbatas"===e.target.value?C(!0):C(!1)})(e)},value:(null===m||void 0===m?void 0:m.metode_pengadaan)||"",children:[(0,y.jsx)("option",{value:"umum",children:"Umum"}),(0,y.jsx)("option",{value:"terbatas",children:"Terbatas"}),(0,y.jsx)("option",{value:"pengadaan langsung",children:"Pengadaan Langsung"}),(0,y.jsx)("option",{value:"penunjukkan langsung",children:"Penunjukkan Langsung"})]})]}),w&&(0,y.jsxs)(u.Z,{children:[(0,y.jsx)(h.Z,{htmlFor:"sistem_kualifikasi",children:"Sistem Kualifikasi"}),(0,y.jsxs)(p.Z,{type:"select",name:"sistem_kualifikasi",id:"sistem_kualifikasi",onChange:e=>(e=>{M(e),"pasca kualifikasi"===e.target.value?N(!0):N(!1)})(e),value:(null===m||void 0===m?void 0:m.sistem_kualifikasi)||"",children:[(0,y.jsx)("option",{value:"pasca kualifikasi",children:"Pasca Kualifikasi"}),(0,y.jsx)("option",{value:"pra kualifikasi",children:"Pra Kualifikasi"})]})]}),(0,y.jsxs)(u.Z,{children:[(0,y.jsx)(h.Z,{htmlFor:"nama_tender",children:"Nama Tender"}),(0,y.jsx)(p.Z,{type:"text",name:"nama_tender",id:"nama_tender",value:(null===m||void 0===m?void 0:m.nama_tender)||"",onChange:M})]}),(0,y.jsxs)(u.Z,{children:[(0,y.jsx)(h.Z,{htmlFor:"lokasi",children:"Lokasi Pekerjaan"}),(0,y.jsx)(p.Z,{type:"text",name:"lokasi",id:"lokasi",value:(null===m||void 0===m?void 0:m.lokasi)||"",onChange:M})]}),(0,y.jsxs)(d.Z,{children:[(0,y.jsx)(r.Z,{md:"6",children:(0,y.jsxs)(u.Z,{children:[(0,y.jsx)(h.Z,{htmlFor:"tgl_pendaftaran",children:"Tanggal Pendaftaran"}),(0,y.jsx)(p.Z,{type:"date",name:"tgl_pendaftaran",id:"tgl_pendaftaran",value:(null===m||void 0===m?void 0:m.tgl_pendaftaran)||"",onChange:M})]})}),(0,y.jsx)(r.Z,{md:"6",children:(0,y.jsxs)(u.Z,{children:[(0,y.jsx)(h.Z,{htmlFor:"batas_pendaftaran",children:"Batas Pendaftaran"}),(0,y.jsx)(p.Z,{type:"date",name:"batas_pendaftaran",id:"batas_pendaftaran",value:(null===m||void 0===m?void 0:m.batas_pendaftaran)||"",onChange:M})]})})]}),w?"":(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(u.Z,{children:[(0,y.jsx)(h.Z,{htmlFor:"jenis_pengadaan",children:"Jenis Pengadaan"}),(0,y.jsxs)(p.Z,{type:"select",name:"jenis_pengadaan",id:"jenis_pengadaan",onChange:M,value:(null===m||void 0===m?void 0:m.jenis_pengadaan)||"",children:[(0,y.jsx)("option",{value:"barang",children:"Barang"}),(0,y.jsx)("option",{value:"jasa",children:"Jasa"}),(0,y.jsx)("option",{value:"jasa konstruksi",children:"Jasa Konstruksi"}),(0,y.jsx)("option",{value:"jasa konsultasi",children:"Jasa Konsultasi"})]})]}),(0,y.jsxs)(u.Z,{children:[(0,y.jsx)(h.Z,{htmlFor:"kbli",children:"Nomor KBLI"}),(0,y.jsxs)(p.Z,{type:"select",name:"kbli",id:"kbli",onChange:M,value:"",children:[(0,y.jsx)("option",{value:"",disabled:!0,children:"- Pilih -"}),(0,y.jsx)("option",{value:"12345678",children:"12345678 - ABCD"})]})]})]})]}),(0,y.jsxs)(r.Z,{md:"6",children:[w&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(u.Z,{children:[(0,y.jsx)(h.Z,{htmlFor:"jenis_pengadaan",children:"Jenis Pengadaan"}),(0,y.jsxs)(p.Z,{type:"select",name:"jenis_pengadaan",id:"jenis_pengadaan",onChange:M,value:(null===m||void 0===m?void 0:m.jenis_pengadaan)||"",children:[(0,y.jsx)("option",{value:"barang",children:"Barang"}),(0,y.jsx)("option",{value:"jasa",children:"Jasa"}),(0,y.jsx)("option",{value:"jasa konstruksi",children:"Jasa Konstruksi"}),(0,y.jsx)("option",{value:"jasa konsultasi",children:"Jasa Konsultasi"})]})]}),(0,y.jsxs)(u.Z,{children:[(0,y.jsx)(h.Z,{htmlFor:"kbli",children:"Nomor KBLI"}),(0,y.jsxs)(p.Z,{type:"select",name:"kbli",id:"kbli",onChange:M,value:"",children:[(0,y.jsx)("option",{value:"",disabled:!0,children:"- Pilih -"}),(0,y.jsx)("option",{value:"12345678",children:"12345678 - ABCD"})]})]})]}),(0,y.jsxs)(u.Z,{children:[(0,y.jsx)(h.Z,{htmlFor:"hps",children:"HPS"}),(0,y.jsx)(p.Z,{type:"text",name:"hps",id:"hps",value:(null===m||void 0===m?void 0:m.hps)||"",onChange:M})]}),(0,y.jsxs)(d.Z,{children:[(0,y.jsx)(r.Z,{md:"10",children:(0,y.jsxs)(u.Z,{children:[(0,y.jsx)(h.Z,{htmlFor:"dok_tender",children:"Dokumen Tender"}),O?(0,y.jsx)(r.Z,{className:"py-2",children:(0,y.jsx)(f.rU,{children:"File Dokumen Tender"})}):(0,y.jsx)(p.Z,{type:"file",name:"dok_tender",id:"dok_tender",onChange:e=>{return n=e.target.files[0],void(0,b.Z)(n).then((e=>D(e.split(",")[1]))).catch((e=>console.log(e)));var n},accept:"application/pdf"})]})}),(0,y.jsx)(r.Z,{md:"2",className:"d-flex justify-content-end align-items-center pt-4",children:(0,y.jsx)("button",{type:"button",style:{border:"none",background:"none"},children:(0,y.jsx)(_(),{icon:"".concat(O?"edit":"close"),onClick:()=>{F(!O),D()},className:"text-muted",style:{fontSize:"20px"}})})})]}),(0,y.jsxs)(d.Z,{children:[(0,y.jsx)(r.Z,{md:"10",children:(0,y.jsxs)(u.Z,{children:[(0,y.jsx)(h.Z,{htmlFor:"dok_deskripsi_tender",children:"Dokumen Deskripsi Tender"}),S?(0,y.jsx)(r.Z,{className:"py-2",children:(0,y.jsx)(f.rU,{children:"File Dokumen Deskripsi Tender"})}):(0,y.jsx)(p.Z,{type:"file",name:"dok_deskripsi_tender",id:"dok_deskripsi_tender",onChange:e=>{return n=e.target.files[0],void(0,b.Z)(n).then((e=>K(e.split(",")[1]))).catch((e=>console.log(e)));var n},accept:"application/pdf"})]})}),(0,y.jsx)(r.Z,{md:"2",className:"d-flex justify-content-end align-items-center pt-4",children:(0,y.jsx)("button",{type:"button",style:{border:"none",background:"none"},children:(0,y.jsx)(_(),{icon:"".concat(S?"edit":"close"),onClick:()=>{R(!S),K()},className:"text-muted",style:{fontSize:"20px"}})})})]}),!w&&(0,y.jsxs)(u.Z,{children:[(0,y.jsx)(h.Z,{htmlFor:"perusahaan",children:"Perusahaan Yang Ditunjuk"}),(0,y.jsx)(p.Z,{type:"select",name:"perusahaan",id:"perusahaan",onChange:M,children:(0,y.jsx)("option",{value:"",children:"ambil dari db"})})]})]})]}),(0,y.jsxs)(d.Z,{lg:"12",className:"mt-3",children:[(0,y.jsxs)(r.Z,{lg:"6",children:[(0,y.jsx)("h4",{className:"fw-bold",children:w&&!P?"Tahap I":"Dokumen Yang Diwajibkan"}),(0,y.jsxs)(d.Z,{children:[(0,y.jsxs)(r.Z,{md:"6",children:[(0,y.jsxs)(u.Z,{check:!0,children:[(0,y.jsx)(p.Z,{type:"checkbox",id:"dok_surat_penyampaian_penawaran",onChange:U,checked:(null===J||void 0===J?void 0:J.dok_surat_penyampaian_penawaran)||""}),(0,y.jsx)(h.Z,{check:!0,htmlFor:"dok_surat_penyampaian_penawaran",className:"form-label",children:"Surat Penyampaian Penawaran"})]}),(0,y.jsxs)(u.Z,{check:!0,children:[(0,y.jsx)(p.Z,{type:"checkbox",id:"dok_formulir_isian_kualifikasi",onChange:U,checked:(null===J||void 0===J?void 0:J.dok_formulir_isian_kualifikasi)||""}),(0,y.jsx)(h.Z,{check:!0,htmlFor:"dok_formulir_isian_kualifikasi",className:"form-label",children:"Formulir Isian Kualifikasi"})]}),(0,y.jsxs)(u.Z,{check:!0,children:[(0,y.jsx)(p.Z,{type:"checkbox",id:"dok_fakta_integritas",onChange:U,checked:(null===J||void 0===J?void 0:J.dok_fakta_integritas)||""}),(0,y.jsx)(h.Z,{check:!0,htmlFor:"dok_fakta_integritas",className:"form-label",children:"Pakta Integritas"})]}),(0,y.jsxs)(u.Z,{check:!0,children:[(0,y.jsx)(p.Z,{type:"checkbox",id:"dok_hse_plan",onChange:U,checked:(null===J||void 0===J?void 0:J.dok_hse_plan)||""}),(0,y.jsx)(h.Z,{check:!0,htmlFor:"dok_hse_plan",className:"form-label",children:"HSE Plan"})]}),(0,y.jsxs)(u.Z,{check:!0,children:[(0,y.jsx)(p.Z,{type:"checkbox",id:"dok_listmanpower_plus_cv",onChange:U,checked:(null===J||void 0===J?void 0:J.dok_listmanpower_plus_cv)||""}),(0,y.jsx)(h.Z,{check:!0,htmlFor:"dok_listmanpower_plus_cv",className:"form-label",children:"List Man Power + CV"})]}),(0,y.jsxs)(u.Z,{check:!0,children:[(0,y.jsx)(p.Z,{type:"checkbox",id:"dok_metode_pelaksanaan",onChange:U,checked:(null===J||void 0===J?void 0:J.dok_metode_pelaksanaan)||""}),(0,y.jsx)(h.Z,{check:!0,htmlFor:"dok_metode_pelaksanaan",className:"form-label",children:"Metode Pelaksanaan (Jasa)"})]}),(0,y.jsxs)(u.Z,{check:!0,children:[(0,y.jsx)(p.Z,{type:"checkbox",id:"dok_struktur_organisasi_pekerjaan",onChange:U,checked:(null===J||void 0===J?void 0:J.dok_struktur_organisasi_pekerjaan)||""}),(0,y.jsx)(h.Z,{check:!0,htmlFor:"dok_struktur_organisasi_pekerjaan",className:"form-label",children:"Struktur Organisasi Pekerjaan"})]}),(0,y.jsxs)(u.Z,{check:!0,children:[(0,y.jsx)(p.Z,{type:"checkbox",id:"dok_wajib_lainnya",onChange:U,checked:(null===J||void 0===J?void 0:J.dok_wajib_lainnya)||""}),(0,y.jsx)(h.Z,{check:!0,htmlFor:"dok_wajib_lainnya",className:"form-label",children:"*Dokumen Wajib Lainnya"})]})]}),(0,y.jsxs)(r.Z,{md:"6",children:[(0,y.jsxs)(u.Z,{check:!0,children:[(0,y.jsx)(p.Z,{type:"checkbox",id:"dok_qaqc_plan",onChange:U,checked:(null===J||void 0===J?void 0:J.dok_qaqc_plan)||""}),(0,y.jsx)(h.Z,{check:!0,htmlFor:"dok_qaqc_plan",className:"form-label",children:"QA/QC Plan"})]}),(0,y.jsxs)(u.Z,{check:!0,children:[(0,y.jsx)(p.Z,{type:"checkbox",id:"dok_perhitungan_tkdn",onChange:U,checked:(null===J||void 0===J?void 0:J.dok_perhitungan_tkdn)||""}),(0,y.jsx)(h.Z,{check:!0,htmlFor:"dok_perhitungan_tkdn",className:"form-label",children:"Perhitungan TKDN"})]}),(0,y.jsxs)(u.Z,{check:!0,children:[(0,y.jsx)(p.Z,{type:"checkbox",id:"dok_schedule_pekerjaan",onChange:U,checked:(null===J||void 0===J?void 0:J.dok_schedule_pekerjaan)||""}),(0,y.jsx)(h.Z,{check:!0,htmlFor:"dok_schedule_pekerjaan",className:"form-label",children:"Schedule Pekerjaan"})]}),(0,y.jsxs)(u.Z,{check:!0,children:[(0,y.jsx)(p.Z,{type:"checkbox",id:"dok_list_peralatan",onChange:U,checked:(null===J||void 0===J?void 0:J.dok_list_peralatan)||""}),(0,y.jsx)(h.Z,{check:!0,htmlFor:"dok_list_peralatan",className:"form-label",children:"List Peralatan"})]}),(0,y.jsxs)(u.Z,{check:!0,children:[(0,y.jsx)(p.Z,{type:"checkbox",id:"dok_kelengkapan_izin_usaha",onChange:U,checked:(null===J||void 0===J?void 0:J.dok_kelengkapan_izin_usaha)||""}),(0,y.jsx)(h.Z,{check:!0,htmlFor:"dok_kelengkapan_izin_usaha",className:"form-label",children:"Kelengkapan Izin Usaha"})]}),P&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(u.Z,{check:!0,children:[(0,y.jsx)(p.Z,{type:"checkbox",id:"dok_penawaran_komersial",onChange:U,checked:(null===J||void 0===J?void 0:J.dok_penawaran_komersial)||""}),(0,y.jsx)(h.Z,{check:!0,htmlFor:"dok_penawaran_komersial",className:"form-label",children:"Surat Penawaran Komersial"})]}),(0,y.jsxs)(u.Z,{check:!0,children:[(0,y.jsx)(p.Z,{type:"checkbox",id:"dok_jaminan_penawaran",onChange:U,checked:(null===J||void 0===J?void 0:J.dok_jaminan_penawaran)||""}),(0,y.jsx)(h.Z,{check:!0,htmlFor:"dok_jaminan_penawaran",className:"form-label",children:"Jaminan Penawaran"})]})]})]})]})]}),!P&&w&&(0,y.jsxs)(r.Z,{lg:"6",children:[(0,y.jsx)("h4",{className:"fw-bold",children:"Tahap II"}),(0,y.jsxs)(r.Z,{md:"6",children:[(0,y.jsxs)(u.Z,{check:!0,children:[(0,y.jsx)(p.Z,{type:"checkbox",id:"dok_penawaran_komersial",onChange:U,checked:(null===J||void 0===J?void 0:J.dok_penawaran_komersial)||""}),(0,y.jsx)(h.Z,{check:!0,htmlFor:"dok_penawaran_komersial",className:"form-label",children:"Surat Penawaran Komersial"})]}),(0,y.jsxs)(u.Z,{check:!0,children:[(0,y.jsx)(p.Z,{type:"checkbox",id:"dok_jaminan_penawaran",onChange:U,checked:(null===J||void 0===J?void 0:J.dok_jaminan_penawaran)||""}),(0,y.jsx)(h.Z,{check:!0,htmlFor:"dok_jaminan_penawaran",className:"form-label",children:"Jaminan Penawaran"})]})]})]})]}),(0,y.jsx)("div",{className:"d-flex justify-content-end",children:(0,y.jsxs)("div",{className:"d-flex gap-3",children:[(0,y.jsx)(f.rU,{to:"/vendor",children:(0,y.jsx)(k.Z,{type:"button",color:"secondary",outline:!0,children:"Cancel"})}),n?(0,y.jsx)(k.Z,{type:"button",color:"success",disabled:!0,children:(0,y.jsxs)("div",{className:"d-flex align-items-center gap-2",children:[(0,y.jsx)(j.Z,{size:"sm"}),"Menyimpan.."]})}):(0,y.jsx)(k.Z,{type:"submit",color:"success",children:"Update"})]})})]})]})})})}},37493:(e,n,a)=>{a.d(n,{Z:()=>t});const t=e=>new Promise((n=>{let a="";const t=new FileReader;t.readAsDataURL(e),t.onload=()=>{a=t.result,n(a)}}))},14448:(e,n,a)=>{a.d(n,{Z:()=>k});var t=a(72791),s=a(52007),r=a.n(s),i=a(81694),o=a.n(i),l=a(9622),c=["className","cssModule","tag"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},d.apply(this,arguments)}function u(e,n){if(null==e)return{};var a,t,s=function(e,n){if(null==e)return{};var a,t,s={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(s[a]=e[a]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var h={className:r().string,cssModule:r().object,tag:l.iC};function p(e){var n=e.className,a=e.cssModule,s=e.tag,r=void 0===s?"div":s,i=u(e,c),h=(0,l.mx)(o()(n,"card-title"),a);return t.createElement(r,d({},i,{className:h}))}p.propTypes=h;const k=p},69399:(e,n,a)=>{a.d(n,{Z:()=>x});var t=a(72791),s=a(52007),r=a.n(s),i=a(9622);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}var l=["className","cssModule","tag","innerRef"];function c(){return c=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},c.apply(this,arguments)}function d(e,n){if(null==e)return{};var a,t,s=function(e,n){if(null==e)return{};var a,t,s={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(s[a]=e[a]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}function u(e,n){for(var a=0;a<n.length;a++){var t=n[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function h(e,n){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},h(e,n)}function p(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,t=j(e);if(n){var s=j(this).constructor;a=Reflect.construct(t,arguments,s)}else a=t.apply(this,arguments);return function(e,n){if(n&&("object"===o(n)||"function"===typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return k(e)}(this,a)}}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}var m={children:r().node,tag:i.iC,innerRef:r().oneOfType([r().object,r().func,r().string]),className:r().string,cssModule:r().object},_=function(e){!function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&h(e,n)}(o,e);var n,a,s,r=p(o);function o(e){var n;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,o),(n=r.call(this,e)).getRef=n.getRef.bind(k(n)),n.submit=n.submit.bind(k(n)),n}return n=o,(a=[{key:"getRef",value:function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e}},{key:"submit",value:function(){this.ref&&this.ref.submit()}},{key:"render",value:function(){var e=this.props,n=e.className,a=e.cssModule,s=e.tag,r=void 0===s?"form":s,o=e.innerRef,u=d(e,l),h=(0,i.mx)(n,a);return t.createElement(r,c({},u,{ref:o,className:h}))}}])&&u(n.prototype,a),s&&u(n,s),Object.defineProperty(n,"prototype",{writable:!1}),o}(t.Component);_.propTypes=m;const x=_},76807:(e,n,a)=>{a.d(n,{a:()=>p});var t=a(73734),s=a(21135),r=a(72791),i=a(69538),o=a(97413),l=a(76153),c=a(96403),d=a(30909),u=a(49952),h=a(38447);function p(e,n,a){return function(e,n){const a=(0,c.NL)({context:e.context}),t=(0,d.S)(),s=(0,l._)(),p=a.defaultQueryOptions(e);p._optimisticResults=t?"isRestoring":"optimistic",p.onError&&(p.onError=i.V.batchCalls(p.onError)),p.onSuccess&&(p.onSuccess=i.V.batchCalls(p.onSuccess)),p.onSettled&&(p.onSettled=i.V.batchCalls(p.onSettled)),(0,h.Fb)(p),(0,u.pf)(p,s),(0,u.JN)(s);const[k]=r.useState((()=>new n(a,p))),j=k.getOptimisticResult(p);if((0,o.$)(r.useCallback((e=>{const n=t?()=>{}:k.subscribe(i.V.batchCalls(e));return k.updateResult(),n}),[k,t]),(()=>k.getCurrentResult()),(()=>k.getCurrentResult())),r.useEffect((()=>{k.setOptions(p,{listeners:!1})}),[p,k]),(0,h.SB)(p,j,t))throw(0,h.j8)(p,k,s);if((0,u.KJ)({result:j,errorResetBoundary:s,useErrorBoundary:p.useErrorBoundary,query:k.getCurrentQuery()}))throw j.error;return p.notifyOnChangeProps?j:k.trackResult(j)}((0,t._v)(e,n,a),s.z)}}}]);
//# sourceMappingURL=497.b12defc5.chunk.js.map