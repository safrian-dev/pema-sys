"use strict";(self.webpackChunkmaterialpro_main=self.webpackChunkmaterialpro_main||[]).push([[669],{31043:(e,a,n)=>{n.d(a,{F:()=>i,Z:()=>r});n(72791);var s=n(65218),l=n(80184);const i=()=>(0,l.jsx)(s.x7,{toastOptions:{className:"",style:{}}}),r=(e,a)=>{((e,a)=>{"success"===e?s.ZP.success(a):"create"===e?(0,s.ZP)(a,{icon:"\ud83e\udd17"}):"start"===e?(0,s.ZP)("Lets get started, cheer up!",{icon:"\ud83d\udcaa"}):"done"===e?(0,s.ZP)("Horeee, task done!",{icon:"\ud83d\udc4f"}):s.ZP.error(a)})(e,a)}},94328:(e,a,n)=>{n.r(a),n.d(a,{default:()=>g});var s=n(72791),l=n(11087),i=n(39773),r=n(43464),d=n(49037),c=n(14448),t=n(63009),o=n(69399),h=n(76167),k=n(42976),j=n(8118),x=n(19127),m=n(4828),p=n(48089),_=n(37493),u=n(31043),Z=n(80184);const g=()=>{const[e,a]=(0,s.useState)(),[n,g]=(0,s.useState)(!1),[b,f]=(0,s.useState)(!0),[y,v]=(0,s.useState)(!0),[w,P]=(0,s.useState)(),[C,F]=(0,s.useState)(),[N,S]=(0,s.useState)({dok_fakta_integritas:!1,dok_formulir_isian_kualifikasi:!1,dok_hse_plan:!1,dok_jaminan_penawaran:!1,dok_kelengkapan_izin_usaha:!1,dok_list_peralatan:!1,dok_listmanpower_plus_cv:!1,dok_metode_pelaksanaan:!1,dok_penawaran_komersial:!1,dok_perhitungan_tkdn:!1,dok_qaqc_plan:!1,dok_schedule_pekerjaan:!1,dok_struktur_organisasi_pekerjaan:!1,dok_surat_penyampaian_penawaran:!1,dok_wajib_lainnya:!1}),K=(0,p.Z)(),D=e=>{a((a=>({...a,[e.target.id]:e.target.value})))},J=e=>{S((a=>({...a,[e.target.id]:e.target.checked})))},L=async a=>{a.preventDefault(),g(!0),e.pilihan_tender="eksternal project",e.centang_dok_wajib=N,e.dok_tender=w,e.dok_deskripsi_tender=C,await K.post("dapi/vendor/tender",e).then((()=>{(0,u.Z)("success","New tender has been created."),document.getElementById("new-tender").reset()})).catch((()=>{(0,u.Z)("error","Something went wrong.")})),g(!1)};return(0,Z.jsx)(i.Z,{lg:"12",children:(0,Z.jsx)(r.Z,{className:"",children:(0,Z.jsxs)(d.Z,{className:"d-flex flex-column gap-2",children:[(0,Z.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,Z.jsx)(c.Z,{tag:"h4",children:"New Tender"}),(0,Z.jsx)(l.rU,{to:"projects",style:{textDecoration:"none"}})]}),(0,Z.jsx)(t.Z,{className:"mt-3",children:(0,Z.jsxs)(o.Z,{onSubmit:L,id:"new-tender",children:[(0,Z.jsxs)(t.Z,{children:[(0,Z.jsxs)(i.Z,{md:"6",children:[(0,Z.jsxs)(h.Z,{children:[(0,Z.jsx)(k.Z,{htmlFor:"metode_pengadaan",children:"Metode Pengadaan"}),(0,Z.jsxs)(j.Z,{type:"select",name:"metode_pengadaan",id:"metode_pengadaan",onChange:e=>(e=>{D(e),"umum"===e.target.value||"terbatas"===e.target.value?f(!0):f(!1)})(e),defaultValue:"",children:[(0,Z.jsx)("option",{value:"",disabled:!0,children:"- Pilih -"}),(0,Z.jsx)("option",{value:"umum",children:"Umum"}),(0,Z.jsx)("option",{value:"terbatas",children:"Terbatas"}),(0,Z.jsx)("option",{value:"pengadaan langsung",children:"Pengadaan Langsung"}),(0,Z.jsx)("option",{value:"penunjukkan langsung",children:"Penunjukkan Langsung"})]})]}),b&&(0,Z.jsxs)(h.Z,{children:[(0,Z.jsx)(k.Z,{htmlFor:"sistem_kualifikasi",children:"Sistem Kualifikasi"}),(0,Z.jsxs)(j.Z,{type:"select",name:"sistem_kualifikasi",id:"sistem_kualifikasi",onChange:e=>(e=>{D(e),"pasca kualifikasi"===e.target.value?v(!0):v(!1)})(e),defaultValue:"",children:[(0,Z.jsx)("option",{value:"",disabled:!0,children:"- Pilih -"}),(0,Z.jsx)("option",{value:"pasca kualifikasi",children:"Pasca Kualifikasi"}),(0,Z.jsx)("option",{value:"pra kualifikasi",children:"Pra Kualifikasi"})]})]}),(0,Z.jsxs)(h.Z,{children:[(0,Z.jsx)(k.Z,{htmlFor:"nama_tender",children:"Nama Tender"}),(0,Z.jsx)(j.Z,{type:"text",name:"nama_tender",id:"nama_tender",onChange:D})]}),(0,Z.jsxs)(h.Z,{children:[(0,Z.jsx)(k.Z,{htmlFor:"lokasi",children:"Lokasi Pekerjaan"}),(0,Z.jsx)(j.Z,{type:"text",name:"lokasi",id:"lokasi",onChange:D})]}),(0,Z.jsxs)(t.Z,{children:[(0,Z.jsx)(i.Z,{sm:"12",md:"6",children:(0,Z.jsxs)(h.Z,{children:[(0,Z.jsx)(k.Z,{htmlFor:"tgl_pendaftaran",children:"Tanggal Pendaftaran"}),(0,Z.jsx)(j.Z,{type:"date",name:"tgl_pendaftaran",id:"tgl_pendaftaran",onChange:D})]})}),(0,Z.jsx)(i.Z,{sm:"12",md:"6",children:(0,Z.jsxs)(h.Z,{children:[(0,Z.jsx)(k.Z,{htmlFor:"batas_pendaftaran",children:"Batas Pendaftaran"}),(0,Z.jsx)(j.Z,{type:"date",name:"batas_pendaftaran",id:"batas_pendaftaran",onChange:D})]})})]}),b?"":(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(h.Z,{children:[(0,Z.jsx)(k.Z,{htmlFor:"jenis_pengadaan",children:"Jenis Pengadaan"}),(0,Z.jsxs)(j.Z,{type:"select",name:"jenis_pengadaan",id:"jenis_pengadaan",onChange:D,defaultValue:"",children:[(0,Z.jsx)("option",{value:"",disabled:!0,children:"- Pilih -"}),(0,Z.jsx)("option",{value:"barang",children:"Barang"}),(0,Z.jsx)("option",{value:"jasa",children:"Jasa"}),(0,Z.jsx)("option",{value:"jasa konstruksi",children:"Jasa Konstruksi"}),(0,Z.jsx)("option",{value:"jasa konsultasi",children:"Jasa Konsultasi"})]})]}),(0,Z.jsxs)(h.Z,{children:[(0,Z.jsx)(k.Z,{htmlFor:"kbli",children:"Nomor KBLI"}),(0,Z.jsxs)(j.Z,{type:"select",name:"kbli",id:"kbli",onChange:D,defaultValue:"",children:[(0,Z.jsx)("option",{value:"",disabled:!0,children:"- Pilih -"}),(0,Z.jsx)("option",{value:"12345678",children:"12345678 - ABCD"})]})]})]})]}),(0,Z.jsxs)(i.Z,{md:"6",children:[b&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(h.Z,{children:[(0,Z.jsx)(k.Z,{htmlFor:"jenis_pengadaan",children:"Jenis Pengadaan"}),(0,Z.jsxs)(j.Z,{type:"select",name:"jenis_pengadaan",id:"jenis_pengadaan",onChange:D,defaultValue:"",children:[(0,Z.jsx)("option",{value:"",disabled:!0,children:"- Pilih -"}),(0,Z.jsx)("option",{value:"barang",children:"Barang"}),(0,Z.jsx)("option",{value:"jasa",children:"Jasa"}),(0,Z.jsx)("option",{value:"jasa konstruksi",children:"Jasa Konstruksi"}),(0,Z.jsx)("option",{value:"jasa konsultasi",children:"Jasa Konsultasi"})]})]}),(0,Z.jsxs)(h.Z,{children:[(0,Z.jsx)(k.Z,{htmlFor:"kbli",children:"Nomor KBLI"}),(0,Z.jsxs)(j.Z,{type:"select",name:"kbli",id:"kbli",onChange:D,defaultValue:"",children:[(0,Z.jsx)("option",{value:"",disabled:!0,children:"- Pilih -"}),(0,Z.jsx)("option",{value:"12345678",children:"12345678 - ABCD"})]})]})]}),(0,Z.jsxs)(h.Z,{children:[(0,Z.jsx)(k.Z,{htmlFor:"hps",children:"HPS"}),(0,Z.jsx)(j.Z,{type:"text",name:"hps",id:"hps",onChange:D})]}),(0,Z.jsxs)(h.Z,{children:[(0,Z.jsx)(k.Z,{htmlFor:"dok_tender",children:"Dokumen Tender"}),(0,Z.jsx)(j.Z,{type:"file",name:"dok_tender",id:"dok_tender",onChange:e=>{return a=e.target.files[0],void(0,_.Z)(a).then((e=>P(e.split(",")[1]))).catch((e=>console.log(e)));var a},accept:"application/pdf"})]}),(0,Z.jsxs)(h.Z,{children:[(0,Z.jsx)(k.Z,{htmlFor:"dok_deskripsi_tender",children:"Dokumen Deskripsi Tender"}),(0,Z.jsx)(j.Z,{type:"file",name:"dok_deskripsi_tender",id:"dok_deskripsi_tender",onChange:e=>{return a=e.target.files[0],void(0,_.Z)(a).then((e=>F(e.split(",")[1]))).catch((e=>console.log(e)));var a},accept:"application/pdf"})]}),!b&&(0,Z.jsxs)(h.Z,{children:[(0,Z.jsx)(k.Z,{htmlFor:"perusahaan",children:"Perusahaan Yang Ditunjuk"}),(0,Z.jsx)(j.Z,{type:"select",name:"perusahaan",id:"perusahaan",onChange:D,children:(0,Z.jsx)("option",{value:"",children:"ambil dari db"})})]})]})]}),(0,Z.jsxs)(t.Z,{lg:"12",className:"mt-3",children:[(0,Z.jsxs)(i.Z,{lg:"6",children:[(0,Z.jsx)("h4",{className:"fw-bold",children:b&&!y?"Tahap I":"Dokumen Yang Diwajibkan"}),(0,Z.jsxs)(t.Z,{children:[(0,Z.jsxs)(i.Z,{md:"6",children:[(0,Z.jsxs)(h.Z,{check:!0,children:[(0,Z.jsx)(j.Z,{type:"checkbox",id:"dok_surat_penyampaian_penawaran",onChange:J}),(0,Z.jsx)(k.Z,{check:!0,htmlFor:"dok_surat_penyampaian_penawaran",className:"form-label",children:"Surat Penyampaian Penawaran"})]}),(0,Z.jsxs)(h.Z,{check:!0,children:[(0,Z.jsx)(j.Z,{type:"checkbox",id:"dok_formulir_isian_kualifikasi",onChange:J}),(0,Z.jsx)(k.Z,{check:!0,htmlFor:"dok_formulir_isian_kualifikasi",className:"form-label",children:"Formulir Isian Kualifikasi"})]}),(0,Z.jsxs)(h.Z,{check:!0,children:[(0,Z.jsx)(j.Z,{type:"checkbox",id:"dok_fakta_integritas",onChange:J}),(0,Z.jsx)(k.Z,{check:!0,htmlFor:"dok_fakta_integritas",className:"form-label",children:"Pakta Integritas"})]}),(0,Z.jsxs)(h.Z,{check:!0,children:[(0,Z.jsx)(j.Z,{type:"checkbox",id:"dok_hse_plan",onChange:J}),(0,Z.jsx)(k.Z,{check:!0,htmlFor:"dok_hse_plan",className:"form-label",children:"HSE Plan"})]}),(0,Z.jsxs)(h.Z,{check:!0,children:[(0,Z.jsx)(j.Z,{type:"checkbox",id:"dok_listmanpower_plus_cv",onChange:J}),(0,Z.jsx)(k.Z,{check:!0,htmlFor:"dok_listmanpower_plus_cv",className:"form-label",children:"List Man Power + CV"})]}),(0,Z.jsxs)(h.Z,{check:!0,children:[(0,Z.jsx)(j.Z,{type:"checkbox",id:"dok_metode_pelaksanaan",onChange:J}),(0,Z.jsx)(k.Z,{check:!0,htmlFor:"dok_metode_pelaksanaan",className:"form-label",children:"Metode Pelaksanaan (Jasa)"})]}),(0,Z.jsxs)(h.Z,{check:!0,children:[(0,Z.jsx)(j.Z,{type:"checkbox",id:"dok_struktur_organisasi_pekerjaan",onChange:J}),(0,Z.jsx)(k.Z,{check:!0,htmlFor:"dok_struktur_organisasi_pekerjaan",className:"form-label",children:"Struktur Organisasi Pekerjaan"})]}),(0,Z.jsxs)(h.Z,{check:!0,children:[(0,Z.jsx)(j.Z,{type:"checkbox",id:"dok_wajib_lainnya",onChange:J}),(0,Z.jsx)(k.Z,{check:!0,htmlFor:"dok_wajib_lainnya",className:"form-label",children:"*Dokumen Wajib Lainnya"})]})]}),(0,Z.jsxs)(i.Z,{md:"6",children:[(0,Z.jsxs)(h.Z,{check:!0,children:[(0,Z.jsx)(j.Z,{type:"checkbox",id:"dok_qaqc_plan",onChange:J}),(0,Z.jsx)(k.Z,{check:!0,htmlFor:"dok_qaqc_plan",className:"form-label",children:"QA/QC Plan"})]}),(0,Z.jsxs)(h.Z,{check:!0,children:[(0,Z.jsx)(j.Z,{type:"checkbox",id:"dok_perhitungan_tkdn",onChange:J}),(0,Z.jsx)(k.Z,{check:!0,htmlFor:"dok_perhitungan_tkdn",className:"form-label",children:"Perhitungan TKDN"})]}),(0,Z.jsxs)(h.Z,{check:!0,children:[(0,Z.jsx)(j.Z,{type:"checkbox",id:"dok_schedule_pekerjaan",onChange:J}),(0,Z.jsx)(k.Z,{check:!0,htmlFor:"dok_schedule_pekerjaan",className:"form-label",children:"Schedule Pekerjaan"})]}),(0,Z.jsxs)(h.Z,{check:!0,children:[(0,Z.jsx)(j.Z,{type:"checkbox",id:"dok_list_peralatan",onChange:J}),(0,Z.jsx)(k.Z,{check:!0,htmlFor:"dok_list_peralatan",className:"form-label",children:"List Peralatan"})]}),(0,Z.jsxs)(h.Z,{check:!0,children:[(0,Z.jsx)(j.Z,{type:"checkbox",id:"dok_kelengkapan_izin_usaha",onChange:J}),(0,Z.jsx)(k.Z,{check:!0,htmlFor:"dok_kelengkapan_izin_usaha",className:"form-label",children:"Kelengkapan Izin Usaha"})]}),y&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(h.Z,{check:!0,children:[(0,Z.jsx)(j.Z,{type:"checkbox",id:"dok_penawaran_komersial",onChange:J}),(0,Z.jsx)(k.Z,{check:!0,htmlFor:"dok_penawaran_komersial",className:"form-label",children:"Surat Penawaran Komersial"})]}),(0,Z.jsxs)(h.Z,{check:!0,children:[(0,Z.jsx)(j.Z,{type:"checkbox",id:"dok_jaminan_penawaran",onChange:J}),(0,Z.jsx)(k.Z,{check:!0,htmlFor:"dok_jaminan_penawaran",className:"form-label",children:"Jaminan Penawaran"})]})]})]})]})]}),!y&&b&&(0,Z.jsxs)(i.Z,{lg:"6",children:[(0,Z.jsx)("h4",{className:"fw-bold",children:"Tahap II"}),(0,Z.jsxs)(i.Z,{md:"6",children:[(0,Z.jsxs)(h.Z,{check:!0,children:[(0,Z.jsx)(j.Z,{type:"checkbox",id:"dok_penawaran_komersial",onChange:J}),(0,Z.jsx)(k.Z,{check:!0,htmlFor:"dok_penawaran_komersial",className:"form-label",children:"Surat Penawaran Komersial"})]}),(0,Z.jsxs)(h.Z,{check:!0,children:[(0,Z.jsx)(j.Z,{type:"checkbox",id:"dok_penawaran_komersial",onChange:J}),(0,Z.jsx)(k.Z,{check:!0,htmlFor:"dok_penawaran_komersial",className:"form-label",children:"Jaminan Penawaran"})]})]})]})]}),(0,Z.jsx)("div",{className:"d-flex justify-content-end",children:(0,Z.jsxs)("div",{className:"d-flex gap-3",children:[(0,Z.jsx)(x.Z,{color:"secondary",outline:!0,children:"Cancel"}),n?(0,Z.jsx)(x.Z,{type:"button",color:"success",disabled:!0,children:(0,Z.jsxs)("div",{className:"d-flex align-items-center gap-2",children:[(0,Z.jsx)(m.Z,{size:"sm"}),"Menyimpan.."]})}):(0,Z.jsx)(x.Z,{type:"submit",color:"success",onClick:L,children:"Simpan"})]})})]})})]})})})}},37493:(e,a,n)=>{n.d(a,{Z:()=>s});const s=e=>new Promise((a=>{let n="";const s=new FileReader;s.readAsDataURL(e),s.onload=()=>{n=s.result,a(n)}}))},30168:(e,a,n)=>{function s(e,a){return a||(a=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(a)}}))}n.d(a,{Z:()=>s})}}]);
//# sourceMappingURL=669.59621655.chunk.js.map