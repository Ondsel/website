"use strict";(self.webpackChunkondsel=self.webpackChunkondsel||[]).push([[4594],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,g=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1511:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={slug:"ondsel-made-constraining-sketches-faster-and-easier",title:"Ondsel made constraining sketches faster and easier",description:"One of the hallmark features of FreeCAD is increased cognitive load. Our new Dimension tool replaces mutiple other tools and helps constraining sketches faster.",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4"}],tags:["freecad","development","sketcher"],image:"./titlecard.png",draft:!1},i=void 0,s={permalink:"/blog/ondsel-made-constraining-sketches-faster-and-easier",source:"@site/blog/2023-09-29/constraints.md",title:"Ondsel made constraining sketches faster and easier",description:"One of the hallmark features of FreeCAD is increased cognitive load. Our new Dimension tool replaces mutiple other tools and helps constraining sketches faster.",date:"2023-09-29T00:00:00.000Z",formattedDate:"September 29, 2023",tags:[{label:"freecad",permalink:"/blog/tags/freecad"},{label:"development",permalink:"/blog/tags/development"},{label:"sketcher",permalink:"/blog/tags/sketcher"}],readingTime:2.995,hasTruncateMarker:!0,authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"}],frontMatter:{slug:"ondsel-made-constraining-sketches-faster-and-easier",title:"Ondsel made constraining sketches faster and easier",description:"One of the hallmark features of FreeCAD is increased cognitive load. Our new Dimension tool replaces mutiple other tools and helps constraining sketches faster.",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"}],tags:["freecad","development","sketcher"],image:"./titlecard.png",draft:!1},prevItem:{title:"How to build 3rd-party addons for FreeCAD that don\u2019t suck",permalink:"/blog/how-to-build-3rd-party-addons-for-freecad-that-don\u2019t-suck"},nextItem:{title:"Live merge meetings: what we learned from merging 75 pull requests in 30 days",permalink:"/blog/merge-meeting"}},l={image:r(3744).Z,authorsImageUrls:[void 0,void 0]},c=[],u={toc:c};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"One of the hallmark features of FreeCAD is that various parts of its UI have a lot of similar options, which means a lot of cognitive load, especially for beginners. A very popular \u201coffender\u201d here is the geometry constraints toolbar in Sketcher. It has 18 different constraint options, more than most popular commercial CAD offerings like Fusion 360, Onshape, and Creo. That's not a bad thing on its own, but it adds a lot of mileage when you need to dimension an entire complex sketch."))}m.isMDXComponent=!0},3744:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/titlecard-ec8529d8d8eac84191f0543b7add53a3.png"}}]);