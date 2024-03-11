"use strict";(self.webpackChunkondsel=self.webpackChunkondsel||[]).push([[7716],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(r),p=a,h=m["".concat(i,".").concat(p)]||m[p]||b[p]||o;return r?n.createElement(h,l(l({ref:t},u),{},{components:r})):n.createElement(h,l({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},88312:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={slug:"default-assembly-workbench-5",title:"Exploring the Assembly 4 workbench",description:"In this next installment of the assembly series we are looking at Assembly4, the workbench with workflow built around local coordinate systems.",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4"}],tags:["freecad","development","assembly","assembly4"],image:"./titlecard.png",draft:!1},l=void 0,s={permalink:"/blog/default-assembly-workbench-5",source:"@site/blog/2023-03-28/assembly-5.md",title:"Exploring the Assembly 4 workbench",description:"In this next installment of the assembly series we are looking at Assembly4, the workbench with workflow built around local coordinate systems.",date:"2023-03-28T00:00:00.000Z",formattedDate:"March 28, 2023",tags:[{label:"freecad",permalink:"/blog/tags/freecad"},{label:"development",permalink:"/blog/tags/development"},{label:"assembly",permalink:"/blog/tags/assembly"},{label:"assembly4",permalink:"/blog/tags/assembly-4"}],readingTime:6.45,hasTruncateMarker:!0,authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"}],frontMatter:{slug:"default-assembly-workbench-5",title:"Exploring the Assembly 4 workbench",description:"In this next installment of the assembly series we are looking at Assembly4, the workbench with workflow built around local coordinate systems.",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"}],tags:["freecad","development","assembly","assembly4"],image:"./titlecard.png",draft:!1},prevItem:{title:"Exploring BodyBuilder, Manipulator, and Part-o-magic",permalink:"/blog/default-assembly-workbench-6"},nextItem:{title:"Exploring the Assembly 3 workbench",permalink:"/blog/default-assembly-workbench-4"}},i={image:r(61096).Z,authorsImageUrls:[void 0,void 0]},c=[],u={toc:c};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In the previous posts in this series, we talked about the need for a ",(0,a.kt)("a",{parentName:"p",href:"https://ondsel.com/blog/default-assembly-workbench-1"},"default assembly workbench")," in FreeCAD and reviewed ",(0,a.kt)("a",{parentName:"p",href:"https://ondsel.com/blog/default-assembly-workbench-2"},"Assembly 2"),", ",(0,a.kt)("a",{parentName:"p",href:"https://ondsel.com/blog/default-assembly-workbench-3"},"A2plus"),", and ",(0,a.kt)("a",{parentName:"p",href:"https://ondsel.com/blog/default-assembly-workbench-4"},"Assembly 3"),". Let\u2019s talk about Assembly 4."))}m.isMDXComponent=!0},61096:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/titlecard-6b8e5b7358868063ae18e9c9724b7ab1.png"}}]);