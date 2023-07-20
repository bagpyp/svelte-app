import{s as $,v as z,p as F,g as v,c as S,h as w,z as O,d as j,i as D,k as b,D as H}from"../chunks/scheduler.279f2f81.js";import{S as ee,i as te,d as E,v as se,j as ae,k as ne,m as oe,b as le,t as re,l as ie,e as _,g as u,a as x,n as k,A as ce}from"../chunks/index.6d6e9cbf.js";import{A as Y}from"../chunks/AuthCheck.fed1ec50.js";import{u as A,a as B,i as T,c as V,g as J,e as K,l as Q,r as W,n as X}from"../chunks/firebase.652e1d27.js";import{r as ue}from"../chunks/index.45d3a67f.js";const R="src/routes/login/photo/+page.svelte";function I(o){let e,l="Uploading...",i,s;const t={c:function(){e=v("p"),e.textContent=l,i=S(),s=v("progress"),this.h()},l:function(n){e=w(n,"P",{"data-svelte-h":!0}),O(e)!=="svelte-be0b5h"&&(e.textContent=l),i=j(n),s=w(n,"PROGRESS",{class:!0}),D(s).forEach(_),this.h()},h:function(){b(e,R,48,8,1445),u(s,"class","progress progress-info w-56 mt-6"),b(s,R,49,8,1473)},m:function(n,m){x(n,e,m),x(n,i,m),x(n,s,m)},d:function(n){n&&(_(e),_(i),_(s))}};return E("SvelteRegisterBlock",{block:t,id:I.name,type:"if",source:"(43:6) {#if uploading}",ctx:o}),t}function Z(o){let e,l="Upload a Profile Photo",i,s,t,a,n,m,p,g,r="Pick a file",L,d,y,C,q,f=o[1]&&I(o);const G={c:function(){e=v("h2"),e.textContent=l,i=S(),s=v("form"),t=v("div"),a=v("img"),m=S(),p=v("label"),g=v("span"),g.textContent=r,L=S(),d=v("input"),y=S(),f&&f.c(),this.h()},l:function(c){e=w(c,"H2",{class:!0,"data-svelte-h":!0}),O(e)!=="svelte-1whglfv"&&(e.textContent=l),i=j(c),s=w(c,"FORM",{class:!0});var U=D(s);t=w(U,"DIV",{class:!0});var h=D(t);a=w(h,"IMG",{src:!0,alt:!0,width:!0,height:!0,class:!0}),m=j(h),p=w(h,"LABEL",{for:!0,class:!0});var M=D(p);g=w(M,"SPAN",{class:!0,"data-svelte-h":!0}),O(g)!=="svelte-1xba4c3"&&(g.textContent=r),M.forEach(_),L=j(h),d=w(h,"INPUT",{name:!0,type:!0,class:!0,accept:!0}),y=j(h),f&&f.l(h),h.forEach(_),U.forEach(_),this.h()},h:function(){var c;u(e,"class","card-title"),b(e,R,25,2,749),H(a.src,n=o[0]??((c=o[2])==null?void 0:c.photoURL)??"/user.png")||u(a,"src",n),u(a,"alt","photoURL"),u(a,"width","256"),u(a,"height","256"),u(a,"class","mx-auto"),b(a,R,29,6,920),u(g,"class","label-text"),b(g,R,37,8,1136),u(p,"for","phtoURL"),u(p,"class","label"),b(p,R,36,6,1092),u(d,"name","photoURL"),u(d,"type","file"),u(d,"class","file-input file-input-bordered w-full max-w-xs"),u(d,"accept","image/png, image/jpeg, image/gif, image/webp"),b(d,R,39,6,1201),u(t,"class","form-control w-full max-w-xs my-10 mx-auto text-center"),b(t,R,28,4,845),u(s,"class","max-w-screen-md w-full"),b(s,R,27,2,803)},m:function(c,U){x(c,e,U),x(c,i,U),x(c,s,U),k(s,t),k(t,a),k(t,m),k(t,p),k(p,g),k(t,L),k(t,d),k(t,y),f&&f.m(t,null),C||(q=ce(d,"change",o[3],!1,!1,!1,!1),C=!0)},p:function(c,U){var h;U&5&&!H(a.src,n=c[0]??((h=c[2])==null?void 0:h.photoURL)??"/user.png")&&u(a,"src",n),c[1]?f||(f=I(c),f.c(),f.m(t,null)):f&&(f.d(1),f=null)},d:function(c){c&&(_(e),_(i),_(s)),f&&f.d(),C=!1,q()}};return E("SvelteRegisterBlock",{block:G,id:Z.name,type:"slot",source:"(20:0) <AuthCheck>",ctx:o}),G}function N(o){let e,l;e=new Y({props:{$$slots:{default:[Z]},$$scope:{ctx:o}},$$inline:!0});const i={c:function(){ae(e.$$.fragment)},l:function(t){ne(e.$$.fragment,t)},m:function(t,a){oe(e,t,a),l=!0},p:function(t,[a]){const n={};a&39&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i:function(t){l||(le(e.$$.fragment,t),l=!0)},o:function(t){re(e.$$.fragment,t),l=!1},d:function(t){ie(e,t)}};return E("SvelteRegisterBlock",{block:i,id:N.name,type:"component",source:"",ctx:o}),i}function fe(o,e,l){let i,s;z(A,"user"),F(o,A,r=>l(4,i=r)),z(B,"userData"),F(o,B,r=>l(2,s=r));let{$$slots:t={},$$scope:a}=e;se("Page",t,[]);let n,m=!1;async function p(r){l(1,m=!0);const L=r.target.files[0];l(0,n=URL.createObjectURL(L));const d=W(T,`users/${i.uid}/profile.png`),y=await X(d,L),C=await Q(y.ref);await K(J(V,"users",i.uid),{photoURL:C}),l(1,m=!1)}const g=[];return Object.keys(e).forEach(r=>{!~g.indexOf(r)&&r.slice(0,2)!=="$$"&&r!=="slot"&&console.warn(`<Page> was created with unknown prop '${r}'`)}),o.$capture_state=()=>({AuthCheck:Y,user:A,userData:B,storage:T,db:V,redirect:ue,doc:J,updateDoc:K,getDownloadURL:Q,ref:W,uploadBytes:X,previewURL:n,uploading:m,upload:p,$user:i,$userData:s}),o.$inject_state=r=>{"previewURL"in r&&l(0,n=r.previewURL),"uploading"in r&&l(1,m=r.uploading)},e&&"$$inject"in e&&o.$inject_state(e.$$inject),[n,m,s,p]}class _e extends ee{constructor(e){super(e),te(this,e,fe,N,$,{}),E("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:N.name})}}export{_e as component};