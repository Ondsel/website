"use strict";(self.webpackChunkondsel=self.webpackChunkondsel||[]).push([[8792],{44216:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(67294),l=n(86010);const r="mainWrapper_IvOH";function c(e){let{className:t="",children:n}=e;return a.createElement("main",{className:(0,l.Z)(t,r)},n)}},11700:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(67294),l=(n(73935),n(29174)),r=n(51774),c=n(52263),s=n(44216);function i(){const e=(0,c.Z)(),{siteConfig:t={}}=e,[n,i]=(0,a.useState)(null),[o,m]=(0,a.useState)(!0),[u,d]=(0,a.useState)(null);return(0,a.useEffect)((()=>{(async()=>{try{fetch("https://lens-api.ondsel.com/agreements?category=privacy-policy").then((e=>{if(e.ok)return e.json()})).then((e=>{const t=e.data[0].current;i(t),m(!1)}))}catch(e){d(e.message)}})()}),[]),o?a.createElement("div",null,"Loading..."):u?a.createElement("div",null,"Error: ",u):a.createElement(r.Z,{title:"Privacy Policy",description:t.tagline},a.createElement(s.Z,{className:"container container--fluid margin-ver--lg row--align-center"},a.createElement("div",{className:"col col--8"},a.createElement("div",{className:"margin-bottom--sm",style:{color:"#888888"}},"version: ",n.version,a.createElement("br",null)),a.createElement(l.D,null,n.markdownContent))))}}}]);