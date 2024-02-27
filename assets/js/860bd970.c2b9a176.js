"use strict";(self.webpackChunkondsel=self.webpackChunkondsel||[]).push([[6259],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=o.createContext({}),p=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,g=u["".concat(c,".").concat(d)]||u[d]||m[d]||n;return r?o.createElement(g,i(i({ref:t},s),{},{components:r})):o.createElement(g,i({ref:t},s))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<n;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},191:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var o=r(7462),a=(r(7294),r(3905));const n={slug:"freecad-topological-naming",title:"Don't hold your breath for FreeCAD's topological naming fix",description:"FreeCAD's topological naming problem is legendary. Some claim it's #1 reason holding back widespread adoption of the program. Will FreeCAD ever have a solution?",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Rebecca Dodd",title:"Contributing Writer",url:"https://www.thebasementoffice.co.uk",image_url:"/img/Rebecca-Dodd-profile.JPEG"}],tags:["freecad","development"],image:"./titlecard.png",draft:!1},i=void 0,l={permalink:"/blog/freecad-topological-naming",source:"@site/blog/2023-02-18/freecad-topological.md",title:"Don't hold your breath for FreeCAD's topological naming fix",description:"FreeCAD's topological naming problem is legendary. Some claim it's #1 reason holding back widespread adoption of the program. Will FreeCAD ever have a solution?",date:"2023-02-18T00:00:00.000Z",formattedDate:"February 18, 2023",tags:[{label:"freecad",permalink:"/blog/tags/freecad"},{label:"development",permalink:"/blog/tags/development"}],readingTime:6.82,hasTruncateMarker:!0,authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Rebecca Dodd",title:"Contributing Writer",url:"https://www.thebasementoffice.co.uk",image_url:"/img/Rebecca-Dodd-profile.JPEG",imageURL:"/img/Rebecca-Dodd-profile.JPEG"}],frontMatter:{slug:"freecad-topological-naming",title:"Don't hold your breath for FreeCAD's topological naming fix",description:"FreeCAD's topological naming problem is legendary. Some claim it's #1 reason holding back widespread adoption of the program. Will FreeCAD ever have a solution?",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Rebecca Dodd",title:"Contributing Writer",url:"https://www.thebasementoffice.co.uk",image_url:"/img/Rebecca-Dodd-profile.JPEG",imageURL:"/img/Rebecca-Dodd-profile.JPEG"}],tags:["freecad","development"],image:"./titlecard.png",draft:!1},prevItem:{title:"I hire people to work on a FOSS project. Here's how I evaluate GitHub profiles",permalink:"/blog/evaluating-github-profile"},nextItem:{title:"ChatGPT acts demonic about open-source software",permalink:"/blog/chatgpt-screwtape"}},c={image:r(7562).Z,authorsImageUrls:[void 0,void 0]},p=[],s={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"FreeCAD's '",(0,a.kt)("a",{parentName:"p",href:"https://wiki.freecad.org/Topological_naming_problem"},"topological naming problem"),"' is legendary. It's frequently cited as the number one reason holding back widespread adoption of FreeCAD for commercial use."),(0,a.kt)("p",null,"Developer ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/realthunder"},"RealThunder")," introduced ",(0,a.kt)("a",{parentName:"p",href:"https://forum.freecad.org/viewtopic.php?t=27278"},"a fix to the problem")," years ago, but it has never been fully incorporated into the core product."),(0,a.kt)("p",null,"Will FreeCAD ",(0,a.kt)("em",{parentName:"p"},"ever")," have a solution? Yes. But it\u2019s going to take time."),(0,a.kt)("p",null,"Let\u2019s back up a bit."))}u.isMDXComponent=!0},7562:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/titlecard-b00633fdbf76d5dc177c51634100fd28.png"}}]);