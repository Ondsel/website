"use strict";(self.webpackChunkondsel=self.webpackChunkondsel||[]).push([[7631],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=c(a),u=o,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||n;return a?r.createElement(m,s(s({ref:t},p),{},{components:a})):r.createElement(m,s({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,s=new Array(n);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[h]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<n;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6943:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var r=a(7462),o=(a(7294),a(3905));const n={slug:"default-assembly-workbench-2",title:"Exploring the Assembly 2 workbench",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4"}],tags:["freecad","development","assembly","assembly2"],image:"./titlecard.png",draft:!1},s=void 0,i={permalink:"/blog/default-assembly-workbench-2",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-03-16/assembly-2.md",source:"@site/blog/2023-03-16/assembly-2.md",title:"Exploring the Assembly 2 workbench",description:"This is part two of our series on the need for an integrated default assembly workbench for FreeCAD. Part One gives and introduction and explains our methods. In this part, we take a closer look at Assembly 2, one of the early approaches to adding this feature set to FreeCAD.",date:"2023-03-16T00:00:00.000Z",formattedDate:"March 16, 2023",tags:[{label:"freecad",permalink:"/blog/tags/freecad"},{label:"development",permalink:"/blog/tags/development"},{label:"assembly",permalink:"/blog/tags/assembly"},{label:"assembly2",permalink:"/blog/tags/assembly-2"}],readingTime:5.5,hasTruncateMarker:!1,authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"}],frontMatter:{slug:"default-assembly-workbench-2",title:"Exploring the Assembly 2 workbench",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"}],tags:["freecad","development","assembly","assembly2"],image:"./titlecard.png",draft:!1},nextItem:{title:"FreeCAD needs a default assembly workbench - Introduction",permalink:"/blog/default-assembly-workbench-1"}},l={image:a(3431).Z,authorsImageUrls:[void 0,void 0]},c=[{value:"History",id:"history",level:3},{value:"Workflow and ease of use",id:"workflow-and-ease-of-use",level:3},{value:"Features",id:"features",level:3},{value:"Consistency",id:"consistency",level:3},{value:"Stability",id:"stability",level:3},{value:"Performance",id:"performance",level:3},{value:"Development Status",id:"development-status",level:3},{value:"Summary",id:"summary",level:3},{value:"Next up",id:"next-up",level:3}],p={toc:c};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This is part two of our series on the need for an integrated default assembly workbench for FreeCAD. ",(0,o.kt)("a",{parentName:"p",href:"./blog/default-assembly-workbench-1"},"Part One")," gives and introduction and explains our methods. In this part, we take a closer look at Assembly 2, one of the early approaches to adding this feature set to FreeCAD."),(0,o.kt)("h3",{id:"history"},"History"),(0,o.kt)("p",null,"A FreeCAD user publicly known as Hamish started this project in late 2014. This is the ",(0,o.kt)("a",{parentName:"p",href:"https://forum.freecad.org/viewtopic.php?style=4&t=8577"},"original announcement"),":"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"I have written an assembly workbench for FreeCAD v0.15, which I am posting here for everyone's perusal. ","[...]"," I realize that there is mostly likely heavy development on FreeCAD's inbuilt assembly wb, which i could have just used for my assembly needs.\nHowever since FreeCAD provides such an excellent environment for building custom wbs, I decided to rather write my own wb exactly tailored to my needs ","[...]","\nHope someone else finds the assembly2 wb useful")),(0,o.kt)("p",null,"2015 was the most active year for the project. However, in 2016, the original developer ",(0,o.kt)("a",{parentName:"p",href:"https://forum.freecadweb.org/viewtopic.php?f=17&t=16591"},"stopped writing new code")," and the next maintainer, Roland Frank, ",(0,o.kt)("a",{parentName:"p",href:"https://forum.freecad.org/viewtopic.php?f=8&t=25673"},"passed away in 2017"),". Hamish and another contributor, kbwbe, continued merging occasional pull requests: bug fixes, a Newton solver, and a port to Python 3 to make the workbench generally supported by newer versions of FreeCAD."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"commit graph",src:a(457).Z,width:"1761",height:"548"}),"\n",(0,o.kt)("em",{parentName:"p"},"Assembly2 Commit History")),(0,o.kt)("p",null,"However, in 2018, kbwbe started working on a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kbwbe/A2plus"},"rewrite of Assembly 2")," and eventually dropped out of contributing to this workbench. There have been no changes in the git repository since 2019."),(0,o.kt)("h3",{id:"workflow-and-ease-of-use"},"Workflow and ease of use"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/hamish2014/FreeCAD_assembly2"},"Assembly 2")," only supports the bottom-up approach where you design and save parts as files and then import them for an assembly into a new FreeCAD project. It will read both FreeCAD, OBJ, IGES, and STEP files. The workbench expects that the user either enables the visibility of just one body in the design file or creates files with single-body parts. Sub-assemblies are possible, however."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Graber I3 model by Nemesis81",src:a(6488).Z,width:"2560",height:"1440"}),"\n",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://github.com/Nemesis81/GraberI3_Freecad/"},"Graber I3 model by Nemesis81"))),(0,o.kt)("p",null,"After importing, spatial constraints need to be added and solved. Imported parts can be manually updated when the linked original file changes. Overall, it\u2019s a straightforward workflow: import multiple parts from respective files, select parts\u2019 features, add constraints, solve, done."),(0,o.kt)("p",null,"Problems begin to arise when a change is required. Assembly 2 does not have a dynamic solver. So once you change something like a distance or an angle, you have to create a constraint anew. Moreover, only some features in the workbench support undo/redo."),(0,o.kt)("h3",{id:"features"},"Features"),(0,o.kt)("p",null,"Constraints available in Assembly 2 are limited to circular edge, plane, axial, angular (for planes), and spherical surface. There are a few tools to work with constraints like flipping their directions."),(0,o.kt)("p",null,"Once constraints are done and solved, you can animate degrees of freedom to check for clearances and collisions in any combination of their respective positions. Additionally, it\u2019s possible to check the entire assembly for overlapping parts."),(0,o.kt)("p",null,"Assembly 2 also allows creating a list of parts, for which it uses the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/hamish2014/FreeCAD_drawing_dimensioning"},"Drawing Dimensioning")," workbench by the same original developer. Which, in return, only works with page objects created with the Drawing workbench. It\u2019s also possible to create one object from all or just the selected parts in an assembly to display them in a drawing. Notably, the ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.freecad.org/Drawing_Workbench"},"Drawing")," workbench is now deprecated and replaced by the ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.freecad.org/TechDraw_Workbench"},"TechDraw")," workbench."),(0,o.kt)("h3",{id:"consistency"},"Consistency"),(0,o.kt)("p",null,"The way the user interface is organized is in line with the rest of FreeCAD. However, for people new to assemblies, watching a few tutorials on YouTube will be really helpful. Unfortunately, the documentation on the workbench in the FreeCAD\u2019s wiki is scarce: it only lists available features and doesn\u2019t provide any information on them that you wouldn\u2019t be able to see in the tooltips of the actual user interface."),(0,o.kt)("p",null,"Assembly 2 can work with parts created in other workbenches like ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.freecad.org/SheetMetal_Workbench"},"SheetMetal")," or parts created with \u2018importer\u2019 workbenches like ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.freecad.org/KicadStepUp_Workbench"},"KiCadStepUp")," or ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.freecad.org/Fasteners_Workbench"},"Fasteners"),". However, because it demands just one body to be visible in an imported project and does not allow choosing which body to import, placing an entire board into an enclosure will require a lot of time and patience."),(0,o.kt)("p",null,"The workbench also doesn\u2019t follow the more recent trend of making 3rd party workbenches translatable."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Graber I3 model by Nemesis81",src:a(250).Z,width:"2560",height:"1440"}),"\n",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://github.com/Nemesis81/GraberI3_Freecad/"},"Graber I3 model by Nemesis81"))),(0,o.kt)("h3",{id:"stability"},"Stability"),(0,o.kt)("p",null,"Because this assembly workbench is not maintained, the issue tracker has been deactivated on GitHub. So there\u2019s no aggregated information on bugs and their severity. When used with a recent version of FreeCAD, the workbench has various glitches. The general recommendation appears to be keeping a copy of an older FreeCAD version (typically, v0.16 or v0.17) around to open old files that use this assembly workbench. For new users, the recommendation is to try one of the newer assembly workbenches."),(0,o.kt)("h3",{id:"performance"},"Performance"),(0,o.kt)("p",null,"Despite its simplicity, Assembly 2 can be very slow on medium-to-complex projects. One of the recommendations to deal with that is by creating ",(0,o.kt)("a",{parentName:"p",href:"https://forum.freecad.org/viewtopic.php?p=146813#p146813"},"sub-assemblies"),": effectively saving an assembly as a FreeCAD project, then importing it to another assembly. This removes some complexity from the project but reportedly ",(0,o.kt)("a",{parentName:"p",href:"https://forum.freecad.org/viewtopic.php?style=4&t=26803"},"does not solve")," all performance issues."),(0,o.kt)("p",null,"Moreover, the interference checker takes the simple road of trying all possible pairs, and this can go on for a very long time."),(0,o.kt)("h3",{id:"development-status"},"Development Status"),(0,o.kt)("p",null,"There have never been official versioned releases of Assembly 2. Active development on this workbench ceased in 2016-2017. This workbench has been unmaintained since 2019. One of its features (list of parts) depends on another unmaintained 3rd party workbench by the same original developer, and another feature (consolidation of objects) depends on a deprecated official workbench (Drawing).`"),(0,o.kt)("h3",{id:"summary"},"Summary"),(0,o.kt)("p",null,"Assembly 2 is a fairly straightforward yet very barebone solution for creating assemblies. It imposes a particular way of organizing a project, has a limited set of constraints, requires either a lot of planning or a lot of manual work because of lacking a dynamic solver, relies on obsolete workbenches for some of its features, and has been unmaintained since 2019. As such, it has served its purpose well and is now generally considered superseded by A2plus, Assembly 3, and Assembly 4."),(0,o.kt)("h3",{id:"next-up"},"Next up"),(0,o.kt)("p",null,"In the next installment, we\u2019ll take a close look at the major iteration of this workbench called A2plus."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Note..."),(0,o.kt)("div",null,(0,o.kt)("div",null,"I\u2019m Brad Collette, longtime FreeCAD contributor and CTO of Ondsel, a new open core company built on top of FreeCAD. Ondsel helps you share useful aspects of your solid models without giving away your designs. We\u2019re working on improving collaboration and feature accessibility and integrating with your existing tools. You can read more about my vision for FreeCAD and Ondsel ",(0,o.kt)("a",{href:"https://opencoreventures.com/blog/2023-01-ondsel-freecad-launch/"},"here")),(0,o.kt)("br",null))))}h.isMDXComponent=!0},6488:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/freecad-assembly-2-01-500fa911f5bf96ffd089c232695b49b8.png"},250:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/freecad-assembly-2-02-d34cd09ae326623400b361eed672fa01.png"},457:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/freecad-assembly-2-commit-history-cfa322b6f81b0b460534cef769ef0df3.png"},3431:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/titlecard-5d644b9d6daf746eb58d798dd9fe60a1.png"}}]);