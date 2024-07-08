"use strict";(self.webpackChunkondsel=self.webpackChunkondsel||[]).push([[6725],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>d});var o=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),m=u(a),p=r,d=m["".concat(l,".").concat(p)]||m[p]||c[p]||n;return a?o.createElement(d,s(s({ref:t},h),{},{components:a})):o.createElement(d,s({ref:t},h))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,s=new Array(n);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var u=2;u<n;u++)s[u]=a[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},80701:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>u});var o=a(87462),r=(a(67294),a(3905));const n={slug:"introducing-bom-tool",title:"BOM generation should be a core feature, so let's do it",description:"Ondsel recently implemented a bill of materials tool as part of the integrated assembly workbench.",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4"}],tags:["ondsel es","freecad","bom","assembly"],image:"./titlecard.jpg",draft:!1},s=void 0,i={permalink:"/blog/introducing-bom-tool",source:"@site/blog/2024-07-03/bom-tool.md",title:"BOM generation should be a core feature, so let's do it",description:"Ondsel recently implemented a bill of materials tool as part of the integrated assembly workbench.",date:"2024-07-03T00:00:00.000Z",formattedDate:"July 3, 2024",tags:[{label:"ondsel es",permalink:"/blog/tags/ondsel-es"},{label:"freecad",permalink:"/blog/tags/freecad"},{label:"bom",permalink:"/blog/tags/bom"},{label:"assembly",permalink:"/blog/tags/assembly"}],readingTime:6.83,hasTruncateMarker:!0,authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"}],frontMatter:{slug:"introducing-bom-tool",title:"BOM generation should be a core feature, so let's do it",description:"Ondsel recently implemented a bill of materials tool as part of the integrated assembly workbench.",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"}],tags:["ondsel es","freecad","bom","assembly"],image:"./titlecard.jpg",draft:!1},prevItem:{title:"Ondsel 2024.2.2 released",permalink:"/blog/ondsel-es-2024-2-2-released"},nextItem:{title:"FreeCAD bug hunt has begun! Crush silly bugs. Win awesome swag",permalink:"/blog/hunt-uncaught-freecad-errors"}},l={image:a(52080).Z,authorsImageUrls:[void 0,void 0]},u=[{value:"BOM? Which one?",id:"bom-which-one",level:2},{value:"The problems with existing implementations",id:"the-problems-with-existing-implementations",level:2},{value:"Design and workflow",id:"design-and-workflow",level:2},{value:"Known limitations",id:"known-limitations",level:2},{value:"What\u2019s next",id:"whats-next",level:2}],h=(m="Youtube",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var m;const c={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Back when we did the ",(0,r.kt)("a",{parentName:"p",href:"https://ondsel.com/blog/freecad-user-survey-results-part-1/"},"user survey"),", the generation of bills of materials (BOM) was the next important thing after the ability to create assemblies. People don\u2019t even need collision detection as much as they need their BOMs. Based on this data, Pierre-Louis Boyer (Ondsel) recently added a Bill of Materials tool to the Assembly workbench for the upcoming Ondsel ES v2024.3 and FreeCAD v1.0. It is already available in weekly builds of Ondsel ES and the upstream project. "),(0,r.kt)(h,{v:"K0Ggtt2eTjQ",mdxType:"Youtube"}),(0,r.kt)("p",null,"The implementation differs from that of other existing BOM solutions for FreeCAD. Let\u2019s talk about why we did it that way and what the future might bring."),(0,r.kt)("h2",{id:"bom-which-one"},"BOM? Which one?"),(0,r.kt)("p",null,"First of all, there isn\u2019t just one kind of BOM. \u201cBill of materials\u201d is a rather generic name for any list of parts. In fact, BOMs differ in type and structure depending on their use. Sure, you can generate a spreadsheet that lists all the parts in a project, lists part numbers, and says how many of each there are, and what the cost is. Well, that would likely be a flat engineering bill of materials: "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example of an engineering bill of materials",src:a(46221).Z,width:"1357",height:"1229"})," "),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Source: ",(0,r.kt)("a",{parentName:"em",href:"https://www.researchgate.net/publication/330335978_Design_of_A_Fluidized_Bed_Reactor_For_Biomass_Pyrolysis"},"Design of A Fluidized Bed Reactor For Biomass Pyrolysis, by Alaba Bamido (ResearchGate)"))),(0,r.kt)("p",null,"If you want to represent the structure of the product and list out components per each part, that\u2019s a multi-level, or indented BOM. Or maybe you are fine with just a list of sub-assemblies. That\u2019s a single-level BOM."),(0,r.kt)("p",null,"If we want to show how to assemble the product, then we need a manufacturing BOM with a list of parts next to a drawing, with numbered parts. So we are talking about a BOM on a TechDraw page and automatically numbered parts in views."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Manufacturing bill of materials example",src:a(31692).Z,width:"1920",height:"1357"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Source: ",(0,r.kt)("a",{parentName:"em",href:"https://en.wikipedia.org/wiki/Bill_of_materials"},"Wikipedia"))),(0,r.kt)("p",null,"Or we could be talking about service BOMs where a technician has no use for a BOM of an entire product and only needs to know about parts where the repair will be happening. So you need to generate a subset of the original bill of materials."),(0,r.kt)("p",null,"There are ",(0,r.kt)("a",{parentName:"p",href:"https://www.optiproerp.com/blog/10-types-boms-explained/"},"even more types of BOMs")," out there. Is it possible to handle this variety of use cases with existing implementations? Not really, and here is why."),(0,r.kt)("h2",{id:"the-problems-with-existing-implementations"},"The problems with existing implementations"),(0,r.kt)("p",null,"With just one exception (more on that below), existing BOM generators for FreeCAD are workbench-specific:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The built-in BOM generator in Fasteners WB collects information on all nuts and bolts inserted into your project but disregards the rest of the objects. It also uses extended names of bolts rather than names of objects visible in the project tree \u2014 a nice touch."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/amrit3701/FreeCAD-Reinforcement"},"Reinforcement")," workbench has a tool for creating rebar-specific bills of materials, with dimensions data, as well as total length, diameter, and weight of reinforcement."),(0,r.kt)("li",{parentName:"ul"},"The BOM generator in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dprojects/Woodworking"},"Woodworking")," WB is more like a cut list really and is similar to the one in Reinforcement: it also inserts specific data such as dimensions for pieces of wood and sorts them by thickness."),(0,r.kt)("li",{parentName:"ul"},"Both ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kbwbe/A2plus"},"A2plus")," and ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Zolko-123/FreeCAD_Assembly4"},"Assembly4")," have BOM generators that are specific to those workbenches as well.")),(0,r.kt)("p",null,"The recent ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/APEbbers/BillOfMaterials-WB"},"Bill of Materials")," workbench by Paul Ebbers is interesting because it seems to be the first attempt to create a more generic BOM functionality: it supports multiple existing assembly workbenches, as well as the Arch/BIM workbench."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"BOM workbench by Paul Ebbers",src:a(37516).Z,width:"2560",height:"1440"})),(0,r.kt)("p",null,"Alas, it suffers from the same issue as other existing solutions we mentioned above: as soon as you make changes and trigger the tool again, it will simply overwrite the existing BOM. So if you insert any custom data (such as price per unit), you will have to add this data once again."),(0,r.kt)("h2",{id:"design-and-workflow"},"Design and workflow"),(0,r.kt)("p",null,"This particular design flaw \u2014 completely overwriting spreadsheets \u2014 is why the BOM tool developed by Ondsel creates a new parametric object in the project tree every time you use it. Internally, the BOM object is a subclass of spreadsheet, so it has its features like columns, but also some special features to generate spreadsheet data."),(0,r.kt)("p",null,"Creating parametric objects in the tree has two major benefits:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can have as many bills of materials as you like \u2014 single-level or multi-level, each with a different set of columns, etc.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Your custom data doesn\u2019t get overwritten when you recreate the BOM."))),(0,r.kt)("p",null,"The workflow is simply this, as seen in the video at the beginning of this post:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Double-click on an assembly object")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose the BOM tool icon in the toolbar"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Launch the Assembly BOM tool",src:a(34239).Z,width:"2560",height:"1440"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Select the type of the BOM")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Select type of BOM",src:a(82988).Z,width:"2560",height:"1440"})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Add and reorganize columns")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Customize columns",src:a(24649).Z,width:"1377",height:"1047"})),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Click OK to confirm")),(0,r.kt)("p",null,"This creates a BOM object in the tree\u2026"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Generated parametric object",src:a(65954).Z,width:"2560",height:"1440"})),(0,r.kt)("p",null,"\u2026and a spreadsheet that you can edit and export."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Generated spreadsheet",src:a(49249).Z,width:"2560",height:"1440"})),(0,r.kt)("p",null,"At any point in time, you can double-click the BOM object in the tree and change some settings. E.g. you can add a new column and update the spreadsheet without losing all the custom data that you added previously."),(0,r.kt)("p",null,"We also made it possible to use the BOM tool outside of assemblies. All you need is to switch from any other workbench (e.g. Rocket) to Assembly and click the BOM tool button on the toolbar. The workflow is the same."),(0,r.kt)("h2",{id:"known-limitations"},"Known limitations"),(0,r.kt)("p",null,"The initial implementation has several limitations, most of them stemming from underlying issues in the core of FreeCAD."),(0,r.kt)("p",null,"When you make multiple links to the same object in an assembly, the program will add numbers to their names and increment them as you add more links. The BOM tool handles that well. However, when you select multiple pockets and insert screws from the Fasteners WB, you get copies rather than links, and the BOM tool cannot handle this. The solution is likely to improve Fasteners, but there\u2019s also a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FreeCAD/FreeCAD/issues/12139"},"core issue")," to fix here."),(0,r.kt)("p",null,"Secondly, it would be rather useful to have customizable object names in the tree, this is also a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FreeCAD/FreeCAD/issues/12141"},"core issue"),"."),(0,r.kt)("p",null,"Contributor \u2018pierreporte\u2018 also makes a good point that FreeCAD in general and the BOM tool, in particular, would greatly benefit from a better metadata implementation, as outlined in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FreeCAD/FreeCAD/issues/12136"},"this core feature request"),". "),(0,r.kt)("p",null,"Finally, there is currently no way to make a regular flat bill of materials. This is on the radar and will be implemented."),(0,r.kt)("h2",{id:"whats-next"},"What\u2019s next"),(0,r.kt)("p",null,"The initial implementation has been merged into upstream FreeCAD and is available in weekly builds of both Ondsel ES and the upstream project. We think this minimal implementation should work for starters, but there\u2019s more that can be done:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We think that the BOM functionality should be a core feature ready to use by bundled and 3rd party workbenches alike. So we likely need to move the tool to the core. Workbench developers then can use the new API in scripts and reuse the parametric object for their purposes. "),(0,r.kt)("li",{parentName:"ul"},"It would be great to be able to generate a BOM directly from a view on a TechDraw page. "),(0,r.kt)("li",{parentName:"ul"},"BOM generation from a view on a TD page typically involves numbering parts on views as well, this might mean that we need to implement auto-ballooning in TechDraw (it\u2019s a useful feature regardless).")),(0,r.kt)("p",null,"For now, we are shipping the BOM tool as part of the Assembly workbench, but the plan is to make it a feature that looks and behaves more like a core feature. You can already use it even if there is no assembly in your project, but you have to switch to the Assembly workbench to use it. And that is one of the things where we want your feedback. "),(0,r.kt)("p",null,"We requested a conversation with the upstream design working group, and for that, it would be great to have more use cases readily available to discuss. So we are looking for feedback from developers and users alike to tell us if our approach is sound and allows for the possible use cases we listed above. You can drop by the upstream ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FreeCAD/FreeCAD/issues"},"issue tracker")," and file a request or a bug report or you can join our ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/7jmzezyyfP"},"Discord server")," (the #assembly-wb chat) and tell us what you think."))}p.isMDXComponent=!0},49249:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/assembly-bom-generated-spreadsheet-212e1bd2ea617081c1c70c4f495b7699.webp"},24649:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/assembly-bom-new-columns-c6a25369cbd07767bf09d66e7d78b140.webp"},65954:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/assembly-bom-parametric-object-5460e98f90eef9920baad9c5be83ebe0.webp"},82988:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/assembly-bom-select-type-17e72e4ca199533e17594e5a2a8bf209.webp"},34239:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/assembly-bom-toolbar-0b0ebdea64bbc6f52bd1f47b5587679b.webp"},37516:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/bom-workbench-paul-ebbers-a6faaeb93bb02502c2273ee6b4f1fd93.webp"},46221:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/engineering-bom-example-d8d2cc317d89fb424979141101d7fc9f.webp"},31692:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/manufacturing-bom-example-347da0b5c74dc5dd1e630db63b093fde.webp"},52080:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/titlecard-18bbd3afb48e010fe443cf687c65da71.jpg"}}]);