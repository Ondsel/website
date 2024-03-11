"use strict";(self.webpackChunkondsel=self.webpackChunkondsel||[]).push([[77],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,b=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return r?a.createElement(b,i(i({ref:t},c),{},{components:r})):a.createElement(b,i({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},81042:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const o={slug:"freecad-needs-a-better-materials-system",title:"FreeCAD Needs A Better Materials System",description:"FreeCAD has a basic implementation of a materials system. While it works in some scenarios, we think it can be vastly improved to become a lot more useful.",authors:[{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4"},{name:"Dave Carter",title:"Contributing Writer",url:"https://github.com/davesrocketshop",Image_url:"https://avatars.githubusercontent.com/u/38090157?v=4"}],tags:["freecad","development"],image:"./titlecard.png",draft:!1},i=void 0,s={permalink:"/blog/freecad-needs-a-better-materials-system",source:"@site/blog/2023-06-09/materials.md",title:"FreeCAD Needs A Better Materials System",description:"FreeCAD has a basic implementation of a materials system. While it works in some scenarios, we think it can be vastly improved to become a lot more useful.",date:"2023-06-09T00:00:00.000Z",formattedDate:"June 9, 2023",tags:[{label:"freecad",permalink:"/blog/tags/freecad"},{label:"development",permalink:"/blog/tags/development"}],readingTime:10.175,hasTruncateMarker:!0,authors:[{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"},{name:"Dave Carter",title:"Contributing Writer",url:"https://github.com/davesrocketshop",Image_url:"https://avatars.githubusercontent.com/u/38090157?v=4"}],frontMatter:{slug:"freecad-needs-a-better-materials-system",title:"FreeCAD Needs A Better Materials System",description:"FreeCAD has a basic implementation of a materials system. While it works in some scenarios, we think it can be vastly improved to become a lot more useful.",authors:[{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"},{name:"Dave Carter",title:"Contributing Writer",url:"https://github.com/davesrocketshop",Image_url:"https://avatars.githubusercontent.com/u/38090157?v=4"}],tags:["freecad","development"],image:"./titlecard.png",draft:!1},prevItem:{title:"Let\u2019s Build a Core System for Custom Data Elements in FreeCAD",permalink:"/blog/build-system-for-custom-data-elements"},nextItem:{title:"What does it mean that my GitHub project has 900 open issues?",permalink:"/blog/better-github-issues"}},l={image:r(62184).Z,authorsImageUrls:[void 0,void 0]},u=[],c={toc:u};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"FreeCAD has a basic implementation of a materials system. While it works in some scenarios, we think it can be vastly improved to become a lot more useful. Let\u2019s discuss what\u2019s already available, what\u2019s missing, and what\u2019s a possible way forward with this. But first, why are we even discussing it?"))}m.isMDXComponent=!0},62184:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/titlecard-b87cffa156af0fd62d7287d6469ca5ba.png"}}]);