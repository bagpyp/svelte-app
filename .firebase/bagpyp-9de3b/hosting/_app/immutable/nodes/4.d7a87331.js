import{_ as Z,R as $,k as ee,b as te,d as ae,c as se}from"../chunks/firebase.2e63ac87.js";import{e as K}from"../chunks/index.45d3a67f.js";import{s as ne,g as k,c as M,l as I,B as oe,h as P,d as O,i as B,m as N,k as R,C as Q,w as j,D as le}from"../chunks/scheduler.fd6e2bc0.js";import{S as ce,i as ie,d as H,p as V,v as re,e as v,g as m,n as _,a as W,s as X}from"../chunks/index.f16fb1b7.js";const ue=async({params:t})=>{var u,n;const a=Z(se,"users"),o=$(a,te("username","==",t.username),ee(1)),r=await ae(o),b=(u=r.docs[0])==null?void 0:u.exists(),e=(n=r.docs[0])==null?void 0:n.data();if(!b)throw K(404,"that user does not exist!");if(!e.published)throw K(403,`The profile of @${e.username} is not public!`);return{username:e.username,photoURL:e.photoURL,bio:e.bio,links:e.links??[]}},pe=Object.freeze(Object.defineProperty({__proto__:null,load:ue},Symbol.toStringTag,{value:"Module"})),y="src/routes/[username]/+page.svelte";function Y(t,a,o){const r=t.slice();return r[1]=a[o],r}function z(t){const a={c:function(){{const r=t[1];console.log({item:r});debugger}},l:j,m:j,d:j};return H("SvelteRegisterBlock",{block:a,id:z.name,type:"each",source:"(24:8) {#each data.links as item}",ctx:t}),a}function G(t){let a,o,r,b,e,u,n,E=t[0].username+"",S,C,h,x,T,w,L=(t[0].bio??"no bio yet...")+"",U,A,p;document.title=a="@"+t[0].username+" Links";let g=V(t[0].links),i=[];for(let f=0;f<g.length;f+=1)i[f]=z(Y(t,g,f));const F={c:function(){o=k("meta"),b=M(),e=k("main"),u=k("h1"),n=I("@"),S=I(E),C=M(),h=k("img"),T=M(),w=k("p"),U=I(L),A=M(),p=k("ul");for(let s=0;s<i.length;s+=1)i[s].c();this.h()},l:function(s){const d=oe("svelte-1yq7ltg",document.head);o=P(d,"META",{name:!0,content:!0}),d.forEach(v),b=O(s),e=P(s,"MAIN",{class:!0});var l=B(e);u=P(l,"H1",{class:!0});var c=B(u);n=N(c,"@"),S=N(c,E),c.forEach(v),C=O(l),h=P(l,"IMG",{src:!0,alt:!0,width:!0,class:!0}),T=O(l),w=P(l,"P",{class:!0});var q=B(w);U=N(q,L),q.forEach(v),A=O(l),p=P(l,"UL",{class:!0});var J=B(p);for(let D=0;D<i.length;D+=1)i[D].l(J);J.forEach(v),l.forEach(v),this.h()},h:function(){m(o,"name","description"),m(o,"content",r=t[0].bio),R(o,y,8,4,106),m(u,"class","text-7xl text-purple-500"),R(u,y,13,4,220),Q(h.src,x=t[0].photoURL??"/user.png")||m(h,"src",x),m(h,"alt","photoURL"),m(h,"width","256"),m(h,"class","mx-auto"),R(h,y,17,4,298),m(w,"class","text-xl my-8"),R(w,y,24,4,425),m(p,"class","list-none"),R(p,y,25,4,487),m(e,"class","prose text-center mx-auto mt-8"),R(e,y,11,0,169)},m:function(s,d){_(document.head,o),W(s,b,d),W(s,e,d),_(e,u),_(u,n),_(u,S),_(e,C),_(e,h),_(e,T),_(e,w),_(w,U),_(e,A),_(e,p);for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(p,null)},p:function(s,[d]){if(d&1&&a!==(a="@"+s[0].username+" Links")&&(document.title=a),d&1&&r!==(r=s[0].bio)&&m(o,"content",r),d&1&&E!==(E=s[0].username+"")&&X(S,E),d&1&&!Q(h.src,x=s[0].photoURL??"/user.png")&&m(h,"src",x),d&1&&L!==(L=(s[0].bio??"no bio yet...")+"")&&X(U,L),d&1){const l=g.length;g=V(s[0].links);let c;for(c=l;c<g.length;c+=1){const q=Y(s,g,c);i[c]||(i[c]=z(q),i[c].c(),i[c].m(p,null))}for(c=g.length;c<l;c+=1)i[c].d(1);i.length=g.length}},i:j,o:j,d:function(s){s&&(v(b),v(e)),v(o),le(i,s)}};return H("SvelteRegisterBlock",{block:F,id:G.name,type:"component",source:"",ctx:t}),F}function de(t,a,o){let{$$slots:r={},$$scope:b}=a;re("Page",r,[]);let{data:e}=a;t.$$.on_mount.push(function(){e===void 0&&!("data"in a||t.$$.bound[t.$$.props.data])&&console.warn("<Page> was created without expected prop 'data'")});const u=["data"];return Object.keys(a).forEach(n=>{!~u.indexOf(n)&&n.slice(0,2)!=="$$"&&n!=="slot"&&console.warn(`<Page> was created with unknown prop '${n}'`)}),t.$$set=n=>{"data"in n&&o(0,e=n.data)},t.$capture_state=()=>({data:e}),t.$inject_state=n=>{"data"in n&&o(0,e=n.data)},a&&"$$inject"in a&&t.$inject_state(a.$$inject),[e]}class ge extends ce{constructor(a){super(a),ie(this,a,de,G,ne,{data:0}),H("SvelteRegisterComponent",{component:this,tagName:"Page",options:a,id:G.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(a){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{ge as component,pe as universal};
