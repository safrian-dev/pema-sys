"use strict";(self.webpackChunkmaterialpro_main=self.webpackChunkmaterialpro_main||[]).push([[7939],{37939:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var r=n(72791),s=n(11087),l=n(76807),a=n(43464),i=n(49037),c=n(14448),o=n(16354),d=n(48089),h=n(80184);const u=()=>{const[e,t]=(0,r.useState)([]),n=(0,d.Z)(),{isLoading:u,error:p,data:x}=(0,l.a)({queryKey:["general-list-company"],queryFn:()=>n.get("dapi/vendor/company").then((e=>e.data.data))});(0,r.useEffect)((()=>{t(x)}),[x]);return(0,h.jsx)(a.Z,{children:(0,h.jsxs)(i.Z,{children:[(0,h.jsxs)("div",{className:"d-flex justify-content-between mb-4",children:[(0,h.jsx)(c.Z,{tag:"h4",children:"List Of Vendors"}),(0,h.jsx)("div",{className:"md-6",children:(0,h.jsx)("input",{type:"search",className:"form-control w-100",placeholder:"Cari nama perusahaan",onChange:e=>(e=>{const n=x.filter((t=>t.nama_perusahaan.toLowerCase().includes(e.toLowerCase())));t(n)})(e.target.value)})})]}),u?(0,h.jsx)("p",{className:"text-center",children:"Loading.."}):p?(0,h.jsx)("p",{className:"text-center",children:"Something went wrong."}):(0,h.jsx)("div",{className:"table-responsive",children:(0,h.jsxs)("table",{className:"table table-bordered table-hover",children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{width:"50",style:{textAlign:"center"},children:"ID"}),(0,h.jsx)("th",{width:"420",style:{textAlign:"center"},children:"Vendor"}),(0,h.jsx)("th",{style:{textAlign:"center"},children:"Email"}),(0,h.jsx)("th",{style:{textAlign:"center"},children:"Phone Number"}),(0,h.jsx)("th",{style:{textAlign:"center"},children:"Status"}),(0,h.jsx)("th",{style:{textAlign:"center"},children:"Action"})]})}),(0,h.jsx)("tbody",{children:(null===e||void 0===e?void 0:e.length)>0?null===e||void 0===e?void 0:e.map(((e,t)=>(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{style:{verticalAlign:"middle",textAlign:"center"},children:t+1}),(0,h.jsx)("td",{children:(0,h.jsxs)("div",{className:"d-flex flex-column gap-0",children:[(0,h.jsx)("span",{className:"fw-bold",style:{fontSize:"16px"},children:"".concat(e.bentuk_usaha," ").concat(e.nama_perusahaan)}),(0,h.jsx)("span",{className:"text-muted mb-0",children:e.tipe})]})}),(0,h.jsx)("td",{style:{verticalAlign:"middle"},children:e.email===e.email_alternatif?e.email:(0,h.jsxs)("div",{className:"d-flex flex-column",children:[(0,h.jsx)("span",{children:e.email}),(0,h.jsx)("span",{children:e.email_alternatif})]})}),(0,h.jsx)("td",{style:{verticalAlign:"middle"},children:e.hp}),(0,h.jsxs)("td",{style:{verticalAlign:"middle",textAlign:"center"},children:[null===e.status_verifikasi&&(0,h.jsx)(o.Z,{color:"primary",children:"Register"}),"terverifikasi"===e.status_verifikasi&&(0,h.jsx)(o.Z,{color:"success",children:"Terverifikasi"}),"revisi"===e.status_verifikasi&&(0,h.jsx)(o.Z,{color:"warning",children:"Revisi Data"})]}),(0,h.jsx)("td",{style:{verticalAlign:"middle"},children:(0,h.jsx)(s.rU,{to:"/vendor/requests/check/".concat(e.id),children:(0,h.jsx)("button",{type:"button",className:"btn btn-outline-secondary btn-sm",style:{width:"100%"},children:"Detail"})})})]},e.id))):(0,h.jsx)("tr",{children:(0,h.jsx)("td",{colSpan:6,style:{textAlign:"center"},children:"No Data"})})})]})})]})})},p=()=>(0,h.jsx)(u,{})},16354:(e,t,n)=>{n.d(t,{Z:()=>x});var r=n(72791),s=n(52007),l=n.n(s),a=n(81694),i=n.n(a),c=n(9622),o=["className","cssModule","color","innerRef","pill","tag"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function h(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var u={children:l().node,className:l().string,color:l().string,cssModule:l().object,innerRef:l().oneOfType([l().object,l().func,l().string]),pill:l().bool,tag:c.iC};function p(e){var t=e.className,n=e.cssModule,s=e.color,l=void 0===s?"secondary":s,a=e.innerRef,u=e.pill,p=void 0!==u&&u,x=e.tag,m=void 0===x?"span":x,f=h(e,o),j=(0,c.mx)(i()(t,"badge","bg-"+l,!!p&&"rounded-pill"),n);return f.href&&"span"===m&&(m="a"),r.createElement(m,d({},f,{className:j,ref:a}))}p.propTypes=u;const x=p},14448:(e,t,n)=>{n.d(t,{Z:()=>x});var r=n(72791),s=n(52007),l=n.n(s),a=n(81694),i=n.n(a),c=n(9622),o=["className","cssModule","tag"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function h(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var u={className:l().string,cssModule:l().object,tag:c.iC};function p(e){var t=e.className,n=e.cssModule,s=e.tag,l=void 0===s?"div":s,a=h(e,o),u=(0,c.mx)(i()(t,"card-title"),n);return r.createElement(l,d({},a,{className:u}))}p.propTypes=u;const x=p}}]);
//# sourceMappingURL=7939.f99148a8.chunk.js.map