var B=Object.defineProperty,F=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var E=(e,t,a)=>t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,v=(e,t)=>{for(var a in t||(t={}))k.call(t,a)&&E(e,a,t[a]);if(w)for(var a of w(t))L.call(t,a)&&E(e,a,t[a]);return e},x=(e,t)=>F(e,A(t));var O=(e,t)=>{var a={};for(var r in e)k.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&w)for(var r of w(e))t.indexOf(r)<0&&L.call(e,r)&&(a[r]=e[r]);return a};import{j as n,a as g,F as S,p as H,s as q,d as j,c as C,b as I,g as J,i as W}from"./locales.fecb00a5.js";import{r as m,u as y,c as _,R as b,L as G,a as X,b as Z,H as K,d as Q,e as U,S as Y,f as ee,g as te,h as ne,i as ae}from"./vendor.823f0359.js";const re=e=>{const{searchConfig:t,lang:a}=e;let r=null;m.exports.useEffect(()=>{r&&(r.algoliaOptions.facetFilters=[`lang:${a}`])},[a]),m.exports.useEffect(()=>{t&&(r=window.docsearch(x(v({},t),{transformData:o=>{o.forEach(c=>{c.anchor&&(c.url=c.url+"#"+c.anchor,c.anchor=null)}),t.transformData&&t.transformData(o)},inputSelector:".vant-doc-search",algoliaOptions:{facetFilters:[`lang:${a}`]}})))},[]);const s=t.placeholder||"Search...";return n("input",{className:"vant-doc-search",placeholder:s})};var oe=e=>n("svg",x(v({},e),{viewBox:"0 0 24 24",fill:"currentColor",children:n("path",{d:"M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"})})),se=e=>g("svg",x(v({},e),{viewBox:"0 0 100 100",fill:"currentColor",children:[n("path",{d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),n("polygon",{points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})]})),ce=e=>n("svg",x(v({},e),{fill:"currentColor",viewBox:"0 0 1024 1024",children:n("path",{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326z m1.8 562H232V136h302v216c0 23.2 18.8 42 42 42h216v494z"})})),T=e=>n("svg",x(v({},e),{viewBox:"0 0 1024 1024",fill:"currentColor",children:n("path",{d:"M846.933333 309.333333l-452.266666 452.266667a21.333333 21.333333 0 0 1-30.293334 0l-229.973333-229.973333a21.333333 21.333333 0 0 1 0-30.293334l29.866667-29.866666a21.333333 21.333333 0 0 1 30.293333 0l184.746667 184.746666 407.466666-407.466666a21.76 21.76 0 0 1 30.293334 0l29.866666 30.293333a21.333333 21.333333 0 0 1 0 30.293333z"})})),ie=e=>n("svg",x(v({},e),{viewBox:"0 0 1024 1024",fill:"currentColor",children:n("path",{d:"M541.141333 268.864l61.717334 16.938667-132.394667 482.474666-61.717333-16.938666 132.394666-482.474667zM329.002667 298.666667l44.885333 45.610666-175.36 172.586667 175.04 167.573333-44.266667 46.229334L106.666667 517.504 329.002667 298.666667z m355.882666 0l222.336 218.837333L684.586667 730.666667l-44.266667-46.229334 175.018667-167.573333L640 344.277333 684.885333 298.666667z"})})),le=e=>n("svg",x(v({},e),{viewBox:"0 0 1024 1024",fill:"currentColor",children:n("path",{d:"M737.828571 166.857143l0.457143-0.228572h0.228572L512 36.571429 285.6 166.628571h-0.228571l0.8 0.342858L100 274.285714v475.428572L512 987.428571l412-237.714285V274.285714l-186.171429-107.428571zM478.514286 890.971429L314.971429 796.571429V637.028571L166.857143 552.914286V353.028571l311.657143 179.771429v358.171429zM199.085714 294.285714l153.942857-88.914285 158.742858 91.085714 158.971428-91.314286 154.514286 89.142857-313.028572 180.571429-313.142857-180.571429zM857.142857 553.485714l-147.2 83.542857v158.971429l-164.457143 94.857143V533.028571L857.142857 353.257143v200.228571z"})})),D=e=>n("svg",x(v({},e),{viewBox:"0 0 1024 1024",fill:"currentColor",children:n("path",{d:"M928 256H768V96c0-17.066667-14.933333-32-32-32h-640C78.933333 64 64 78.933333 64 96v640c0 17.066667 14.933333 32 32 32H256v160c0 17.066667 14.933333 32 32 32h640c17.066667 0 32-14.933333 32-32v-640c0-17.066667-14.933333-32-32-32zM128 704V128h576v128H288c-17.066667 0-32 14.933333-32 32V704H128z m768 192H320V320h576v576z"})}));const de=e=>{const{lang:t,config:a,langConfigs:r}=e,{pathname:s}=y(),o=m.exports.useMemo(()=>{const l=r.filter(p=>p.lang!==t);return l.length?l[0]:{}},[t,r]),c=m.exports.useMemo(()=>`#${s.replace(t,o.lang)}`,[o.lang,t,s]),i=m.exports.useMemo(()=>o.label,[o.label]);return n("div",{className:"vant-doc-header",children:n("div",{className:"vant-doc-row",children:g("div",{className:"vant-doc-header__top",children:[a.searchConfig&&n(re,{lang:t,searchConfig:a.searchConfig}),g("ul",{className:"vant-doc-header__top-nav",children:[a.links&&a.links.length&&a.links.map(l=>{var u;const p=((u=l.title)==null?void 0:u.toLowerCase())==="github"&&!l.logo,h=l.logo||p;return n("li",{className:_("vant-doc-header__top-nav-item","vant-doc-header__top-nav-item--link",{"vant-doc-header__top-nav-item--img":h}),children:n("a",{className:"vant-doc-header__cube",target:"_blank",href:l.url,title:l.alt,rel:"noreferrer",children:h?p?n(oe,{alt:l.alt}):n("img",{src:l.logo,alt:l.alt}):g(S,{children:[l.title,n(se,{className:"vant-doc-header__cube--httplink"})]})})},l.url)}),i&&c&&n("li",{className:"vant-doc-header__top-nav-item",children:n("a",{className:"vant-doc-header__cube",href:c,children:i})})]})]})})})};const ue=({versions:e})=>{const t=b.useRef(null),[a,r]=b.useState(!1),s=i=>{t.current.contains(i.target)||r(!1)},o=()=>{const i=!a,l=i?"add":"remove";document.body[`${l}EventListener`]("click",s),r(i)},c=i=>{i.link&&(window.location.href=i.link)};return n("div",{ref:t,style:{width:130},className:"vant-doc-header__top-nav-item",children:g("span",{className:_("vant-doc-header__cube vant-doc-header__version"),onClick:o,children:[H,n("div",{name:"vant-doc-dropdown",children:a&&n("div",{className:"vant-doc-header__version-pop",children:e.map(i=>n("div",{className:"vant-doc-header__version-pop-item",onClick:()=>c(i),children:i.label},i))})})]})})},me=e=>{const{config:t,versions:a=[]}=e;return g("div",{className:"vant-doc-logo",children:[g("a",{className:"vant-doc-logo--main",children:[n("img",{alt:"react vant",src:t.logo}),n("span",{children:t.title})]}),!!a.length&&n(ue,{versions:a})]})};const he=e=>{const{base:t,item:a}=e,{pathname:r}=y(),s=m.exports.useMemo(()=>{const i=(a.title||a.name).split(" ");return`${i[0]} <span>${i.slice(1).join(" ")}</span>`},[a.name,a.title]),o=m.exports.useMemo(()=>`${t}${a.path}`,[t,a.path]),c=m.exports.useMemo(()=>r===o?!0:o.indexOf("/home")!==-1?r===t:!1,[t,o,r]);return n(S,{children:a.path?n(G,{className:_("vant-doc-navlink",{"vant-doc-navlink--active":c}),to:o,dangerouslySetInnerHTML:{__html:s}}):a.link?n("a",{href:a.link,dangerouslySetInnerHTML:{__html:s}}):n("a",{dangerouslySetInnerHTML:{__html:s}})})};const pe=e=>{const{navConfig:t,lang:a,config:r,versions:s}=e,o=m.exports.useMemo(()=>a?`/${a}/`:"/",[a]);return g("div",{className:"vant-doc-nav",children:[n(me,{config:r,versions:s}),t.map(c=>g("div",{className:"vant-doc-nav__group",children:[n("div",{className:"vant-doc-nav__title",children:c.title}),c.items&&c.items.map(i=>n("div",{className:"vant-doc-nav__item",children:n(he,{item:i,base:o})},i.title))]},c.title))]})};var ve=e=>n("div",{className:_("vant-doc-container","vant-doc-row"),children:e.children});var fe=e=>n("div",{className:_("vant-doc-content",`vant-doc-content--${e.currentCompnentName}`),children:e.children});const $=b.createContext({visible:!1,toggleSimulator:()=>null});const ge=e=>{const{src:t}=e;return n($.Consumer,{children:({visible:a})=>n("div",{className:_("vant-doc-simulator"),style:{display:a?"block":"none"},children:n("iframe",{title:"vant-ui-iframe",src:t,frameBorder:"0"})})})};var xe=b.memo(ge,(e,t)=>e.src===t.src);const be=e=>{const{lang:t,versions:a,simulatorSrc:r,langConfigs:s,config:o,hideSimulator:c,currentCompnentName:i}=e,l=!!r&&!c,[p,h]=b.useState(!1),u=b.useCallback(f=>{h(f)},[]);return b.useEffect(()=>{},[]),g("div",{className:"vant-doc",children:[n(pe,{config:o,lang:t,navConfig:o.nav,versions:a}),g(ve,{children:[n(de,{lang:t,config:o,langConfigs:s}),g($.Provider,{value:{visible:p,toggleSimulator:u},children:[n(fe,{currentCompnentName:i,children:e.children}),l&&n(xe,{src:r})]})]})]})},_e="https://codesandbox.io/api/v1/sandboxes/define";function Ne(e){return X.compressToBase64(JSON.stringify(e)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function Ce(e){const t=document.createElement("span");t.innerHTML=e;const a=t.textContent;return t.remove(),a}function we(e){var l,p;const t=e.lang==="tsx",a=t?".tsx":".jsx",r={},s={},o=Object.values(e.dependencies).filter(h=>h.css),c=`App${a}`,i=`index${a}`;return Object.entries(e.dependencies).forEach(([h,{type:u,value:f}])=>{u==="NPM"&&(s[h]=f)}),s["react-dom"]||(s["react-dom"]=s.react||"latest"),r["sandbox.config.json"]={content:JSON.stringify({template:"create-react-app"},null,2)},r["package.json"]={content:JSON.stringify({name:(l=e.meta)==null?void 0:l.title,description:Ce(((p=e.meta)==null?void 0:p.description)||"An auto-generated demo by mdoc"),main:i,dependencies:s,devDependencies:t?{typescript:"^3"}:{}},null,2)},r["index.html"]={content:'<div id="root"></div>'},r[i]={content:`/**
* This is an auto-generated demo by mdoc
* if you think it is not working as expected,
* please report the issue at
* https://github.com/3lang3/vite-plugin-react-mdoc/issues
**/

import React from 'react';
import ReactDOM from 'react-dom';
${o.map(({css:h})=>`import '${h}';`).join(`
`)}
import App from './App';

ReactDOM.render(
  <App />,
  document.querySelector('#root'),
);`},Object.entries(e.dependencies).forEach(([h,{value:u,type:f}])=>{f==="FILE"&&(r[h.startsWith("index")?c:h]={content:u})}),Ne({files:r})}var Se=(e,t=_e)=>{const[a,r]=m.exports.useState();return m.exports.useEffect(()=>{var s;if(e&&Object.keys(e.dependencies||[]).length){const o=document.createElement("form"),c=document.createElement("input"),i=document.createElement("input"),l=we(e);return o.method="POST",o.target="_blank",o.style.display="none",o.action=t,o.appendChild(c),o.appendChild(i),o.setAttribute("data-demo",((s=e.meta)==null?void 0:s.title)||""),c.name="parameters",c.value=l,i.name="query",i.value="resolutionWidth=350&resolutionHeight=675",document.body.appendChild(o),r(()=>()=>o.submit()),()=>o.remove()}return()=>null},[JSON.stringify(e)]),a},V=()=>{const[e,t]=m.exports.useState(),[a,r]=m.exports.useState("ready");return[m.exports.useCallback(o=>{Z(o),r("copied"),e&&clearTimeout(e),t(setTimeout(()=>{r("ready")},2e3))},[]),a]};function ye(e){var a;return((a=e.match(/\.(\w+)$/))==null?void 0:a[1])||"jsx"}const $e=({files:e,defaultCode:t,defaultLang:a})=>{const[r,s]=m.exports.useState({code:t,lang:a}),o=m.exports.useMemo(()=>r.code,[r]),c=m.exports.useMemo(()=>r.lang,[r]);return g("div",{className:"default-previewer__tabs",children:[e.map(([i,l])=>g("div",{onClick:()=>s({code:l.value,lang:ye(i)}),className:_("default-previewer__tabs-plane",{"default-previewer__tabs-plane--active":l.value===o}),children:[n(ce,{})," ",i]},i)),n(M,{code:o,lang:c})]})},M=({code:e,lang:t,showCopy:a})=>{const[r,s]=V();return n(K,x(v({},Q),{code:e,language:t,theme:void 0,children:({className:o,style:c,tokens:i,getLineProps:l,getTokenProps:p})=>g("div",{className:"default-pre",children:[a&&n("button",{type:"button",title:"\u590D\u5236",className:"default-pre__btn",onClick:()=>r(e),children:s==="ready"?n(D,{}):n(T,{className:"default-pre__btn-svg--active"})}),n("pre",{className:o,style:c,children:i.map((h,u)=>n("div",x(v({},l({line:h,key:u})),{children:h.map((f,d)=>n("span",v({},p({token:f,key:d}))))})))})]})}))};var Me=a=>{var r=a,{children:e}=r,t=O(r,["children"]);const s=m.exports.useMemo(()=>Object.entries(t.dependencies||[]),[t.dependencies]),o=m.exports.useMemo(()=>s.filter(([,f])=>f.type==="FILE"),[s]),c=Object.keys((t==null?void 0:t.dependencies)||[]).length>0,i=Se(t),[l,p]=V(),[h,u]=m.exports.useState(c&&!e);return c?g("div",{className:"default-previewer",children:[e&&n("div",{className:"default-previewer__demo",children:e}),g("div",{className:"default-previewer__actions",children:[Object.keys((t==null?void 0:t.dependencies)||[]).length?n(S,{children:n("button",{type:"button",title:"\u5728codesandbox\u4E0A\u5C1D\u8BD5",className:"default-previewer__btn default-previewer__csb",onClick:i,children:n(le,{})})}):null,n("button",{type:"button",title:"\u590D\u5236",className:"default-previewer__btn default-previewer__copy",onClick:()=>l(t.code),children:p==="ready"?n(D,{}):n(T,{className:"default-pre__btn-svg--active"})}),e&&n("button",{type:"button",className:"default-previewer__btn",onClick:()=>u(f=>!f),children:n(ie,{})})]}),h&&n("div",{className:"default-previewer__source",children:o.length===1?n(M,v({},t)):n($e,{files:o,defaultCode:t.code,defaultLang:t.lang})})]}):n(M,x(v({},t),{showCopy:!0}))};var ke=({slugs:e})=>g("div",{className:"vant-doc-md--slugs",children:[n("div",{className:"vant-doc-md--slug-title",children:"#\u76EE\u5F55"}),e.map((t,a)=>+t.depth==2||+t.depth==3?n("a",{href:`#${t.id}`,className:_("vant-doc-md--slug",`vant-doc-md--slug-${t.depth}`),children:t.text},a):null)]});const Le=e=>n(Me,v({},e)),Ee=({toggleSimulator:e,simulatorVisible:t,children:a,frontmatter:r={},slugs:s=[],hideSimulator:o})=>{const{simulator:c=!0,fluid:i,slugs:l=!0,className:p}=r,h=c&&!o,u=b.useMemo(()=>window.location.hash.split("#").filter(Boolean)[0],[]),f=b.useMemo(()=>s?s.map(N=>x(v({},N),{id:`${u}#${N.id}`})):[],[u,s]);b.useEffect(()=>{window.scrollTo(0,0),z(u,".vant-doc-md-page h2"),z(u,".vant-doc-md-page h3")},[u]),b.useEffect(()=>{c!==t&&e(c)},[c,t,e]);const d=!!s.length&&l&&!i;return g("div",{className:_("vant-doc-md-wrapper",{"vant-doc-md-wrapper--simulator":h}),children:[d&&n(ke,{slugs:f}),n("section",{className:_("vant-doc-md-page",{"vant-doc-md-page--fluid":i,"vant-doc-md-page--slug":d},p),children:a({previewer:Le})})]})};var Oe=e=>n($.Consumer,{children:({visible:t,toggleSimulator:a})=>n(Ee,v({simulatorVisible:t,toggleSimulator:a},e))});function z(e,t){[...document.querySelectorAll(t)].filter(r=>r.id).forEach(r=>{r.id=r.id.replace(/(.*)/,`${e}#$1`)})}const{locales:P,defaultLang:He}=C.site;q(He);function je(e){if(e.indexOf("_")!==-1){const t=e.split("_"),a=t.shift();return{component:`${I(a)}`,lang:t.join("-")}}return{component:`${I(e)}`,lang:""}}function R(e){const t=e.split("/")[1];return Object.keys(P).indexOf(t)!==-1?t:J()}const Ie=()=>{const e=[],t=Object.keys(j);function a(r,s){e.push({name:s,exact:!0,path:`/${s||""}`,component:r,state:{lang:s}})}return t.forEach(r=>{const{component:s,lang:o}=je(r),{MdContent:c,frontmatter:i={},slugs:l=[]}=j[r],p=Object.keys(i).reduce((u,f)=>(f.startsWith("mobile-")||(u[f]=i[f]),u),{}),h=u=>n(Oe,x(v({},u),{frontmatter:p,slugs:l,children:({previewer:f})=>n(c,{previewer:f})}));s==="home"&&a(u=>n(h,v({},u)),o),o?e.push({name:`${o}/${s}`,path:`/${o}/${s}`,component:u=>n(h,v({},u)),state:{lang:o,name:s}}):e.push({name:`${s}`,path:`/${s}`,component:u=>n(h,v({},u)),meta:{name:s}})}),P?e.push({path:"*",redirect:r=>`/${R(r)}/`}):e.push({path:"*",redirect:()=>"/"}),e};var Te=Ie();const De=()=>{const{pathname:e}=y(),t=U();m.exports.useEffect(()=>{W&&window.location.replace(`mobile.html${window.location.hash}`)},[]),window.addEventListener("message",d=>{d.data.pathname&&e!==d.data.pathname&&t.push(d.data.pathname)},!1);const r=`${window.location.pathname.replace(/\/index(\.html)?/,"/")}mobile.html${window.location.hash}`,s=m.exports.useMemo(()=>R(e),[e]),o=m.exports.useMemo(()=>e.replace(/\/.*\//,""),[e]),c=m.exports.useMemo(()=>{const{locales:d}=C.site;return d?d[s]:C.site},[s]),i=b.useMemo(()=>{const{locales:d={}}=C.site;return Object.keys(d).map(N=>({lang:N,label:d[N].langLabel||""}))},[]),l=m.exports.useMemo(()=>c.nav.reduce((d,N)=>[...d,...N.items],[]),[c.nav]),p=m.exports.useMemo(()=>l.find(d=>d.path===o),[l,o]),h=m.exports.useMemo(()=>{const{hideSimulator:d=!1}=C.site;return d},[]),u=m.exports.useCallback(()=>{let{title:d}=c;p&&p.title?d=`${p.title} - ${d}`:c.description&&(d+=` - ${c.description}`),document.title=d},[c,p]);m.exports.useEffect(u);const f=b.useMemo(()=>C.site.versions?C.site.versions:[{label:H}],[]);return n(be,{lang:s,config:c,langConfigs:i,versions:f,simulatorSrc:r,hideSimulator:h,currentCompnentName:o,children:n(Y,{children:Te.map(d=>d.redirect?n(ee,{to:d.redirect(e)},d.path):n(te,{exact:d.exact,path:d.path,render:N=>n(d.component,x(v({hideSimulator:h},N),{routes:d.routes}))},d.path))})})};ne.render(n(ae,{children:n(De,{})}),document.getElementById("root"));
