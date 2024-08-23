"use strict";(self.webpackChunkondsel=self.webpackChunkondsel||[]).push([[8596],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22900:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={slug:"step-on-lens",title:"Introducing STEP support on Lens",description:"Upload, visualize, explore, and share STEP geometry in the online data management system",authors:[{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4"}],tags:["lens","step"],image:"./titlecard.png",draft:!1},i=void 0,s={permalink:"/blog/step-on-lens",source:"@site/blog/2024-08-23/step-on-lens.mdx",title:"Introducing STEP support on Lens",description:"Upload, visualize, explore, and share STEP geometry in the online data management system",date:"2024-08-23T00:00:00.000Z",formattedDate:"August 23, 2024",tags:[{label:"lens",permalink:"/blog/tags/lens"},{label:"step",permalink:"/blog/tags/step"}],readingTime:1.08,hasTruncateMarker:!0,authors:[{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"}],frontMatter:{slug:"step-on-lens",title:"Introducing STEP support on Lens",description:"Upload, visualize, explore, and share STEP geometry in the online data management system",authors:[{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"}],tags:["lens","step"],image:"./titlecard.png",draft:!1},nextItem:{title:"How to share you first 3D CAD project on Lens",permalink:"/blog/share-your-3d-cad-project-on-lens"}},l={image:n(76078).Z,authorsImageUrls:[void 0]},u=[],p=(c="Youtube",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var c;const d={toc:u};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We launched Ondsel Lens in 2023 as a FreeCAD-first product data management system. But there is one thing we cannot deny: STEP is a hugely important standard in the industry. If you go from one 3D CAD program to another, more often than not it\u2019s what you use for model exchange. Even if you go from KiCad to SolidWorks, STEP is how you store your PCB designs for use in assemblies."),(0,o.kt)("p",null,"So we\u2019ve just added support for STEP files in Ondsel Lens. You can upload, version, visualize and explore STEP geometry, you can also create share links for it and allow downloading the original file and STL and OBJ versions of it."),(0,o.kt)(p,{v:"Rk0QE-YZoqw?",mdxType:"Youtube"}),(0,o.kt)("p",null,"For STEP files, we also display the entire model hierarchy in the tree view. This is new, it's something we are not doing for FreeCAD files yet, although we are planning to."),(0,o.kt)("p",null,"The tree view interface also uses checkboxes for selecting objects in the tree. This is a temporary solution, but if the majority of users end up loving it, we might keep it, so we are looking for your feedback."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Tree view in STEP files",src:n(31719).Z,width:"2560",height:"1440"})),(0,o.kt)("p",null,"You can already try yourself: ",(0,o.kt)("a",{parentName:"p",href:"https://lens.ondsel.com/"},"sign in"),", upload a STEP file, and look around."),(0,o.kt)("p",null,"Many more exciting changes are coming, stay tuned!"))}m.isMDXComponent=!0},31719:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/step-treeview-a359ddf1c09eafd3edbdb5bee13ded0f.webp"},76078:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/titlecard-930b1354f3b311b71672565d0cc7d9b7.png"}}]);