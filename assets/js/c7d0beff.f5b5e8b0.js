"use strict";(self.webpackChunkondsel=self.webpackChunkondsel||[]).push([[4175],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),h=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=h(a),p=i,m=d["".concat(l,".").concat(p)]||d[p]||c[p]||o;return a?n.createElement(m,r(r({ref:t},u),{},{components:a})):n.createElement(m,r({ref:t},u))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var h=2;h<o;h++)r[h]=a[h];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},47342:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>h});var n=a(87462),i=(a(67294),a(3905));const o={slug:"native-ifc",title:"Autodesk\u2019s way of handling the IFC standard is helping nobody",description:"Let\u2019s talk about IFC and why Autodesk should take notes from emerging free and open-source tools for building information modeling (BIM) authoring.",authors:[{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4"},{name:"Yorik van Havre",title:"Contributing Writer",url:"https://github.com/yorikvanhavre",image_url:"https://avatars.githubusercontent.com/u/1136856?v=4"}],tags:["autodesk","freecad","blenderbim","ifc"],image:"./titlecard.png",draft:!1},r=void 0,s={permalink:"/blog/native-ifc",source:"@site/blog/2024-03-21/native-ifc.mdx",title:"Autodesk\u2019s way of handling the IFC standard is helping nobody",description:"Let\u2019s talk about IFC and why Autodesk should take notes from emerging free and open-source tools for building information modeling (BIM) authoring.",date:"2024-03-21T00:00:00.000Z",formattedDate:"March 21, 2024",tags:[{label:"autodesk",permalink:"/blog/tags/autodesk"},{label:"freecad",permalink:"/blog/tags/freecad"},{label:"blenderbim",permalink:"/blog/tags/blenderbim"},{label:"ifc",permalink:"/blog/tags/ifc"}],readingTime:9.815,hasTruncateMarker:!0,authors:[{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"},{name:"Yorik van Havre",title:"Contributing Writer",url:"https://github.com/yorikvanhavre",image_url:"https://avatars.githubusercontent.com/u/1136856?v=4",imageURL:"https://avatars.githubusercontent.com/u/1136856?v=4"}],frontMatter:{slug:"native-ifc",title:"Autodesk\u2019s way of handling the IFC standard is helping nobody",description:"Let\u2019s talk about IFC and why Autodesk should take notes from emerging free and open-source tools for building information modeling (BIM) authoring.",authors:[{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"},{name:"Yorik van Havre",title:"Contributing Writer",url:"https://github.com/yorikvanhavre",image_url:"https://avatars.githubusercontent.com/u/1136856?v=4",imageURL:"https://avatars.githubusercontent.com/u/1136856?v=4"}],tags:["autodesk","freecad","blenderbim","ifc"],image:"./titlecard.png",draft:!1},nextItem:{title:"Over 75% of FreeCAD users are willing to pay to see it improved",permalink:"/blog/freecad-user-survey-results-part-3"}},l={image:a(99214).Z,authorsImageUrls:[void 0,void 0]},h=[{value:"IFC? BIM?",id:"ifc-bim",level:2},{value:"What\u2019s up with Revit\u2019s interoperability and IFC support?",id:"whats-up-with-revits-interoperability-and-ifc-support",level:2},{value:"Native IFC and FOSS",id:"native-ifc-and-foss",level:2}],u=(d="Youtube",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var d;const c={toc:h};function p(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Even calm and steady professionals can get to the point where they\u2019ve just had enough. And for many architects out there, having to use Autodesk Revit on a daily basis is really that kind of a frustrating experience."),(0,i.kt)("p",null,"Revit is what most architects learn at school and then use at work. To give credit where credit is due, it has many fine points. You don\u2019t get to be #1 if you don\u2019t get the job done. However, it\u2019s really slow, there are data intellectual property concerns, the subscription price is rising year over year, Autodesk management doesn\u2019t seem to have a coherent vision for the product\u2019s future and they don\u2019t listen to customers nearly as much as they should have, and that\u2019s not even the entire list of issues."),(0,i.kt)("p",null,"In this post, we\u2019ll focus on just one aspect of this love-hate relationship: interoperability. Let\u2019s talk about IFC and why Autodesk should take notes from emerging free and open-source tools for building information modeling (BIM) authoring."),(0,i.kt)("p",null,"This post was written in collaboration with Yorik van Havre, maintainer of the Arch and BIM workbenches. To add context to this article, we\u2019ve also included insights from Ryan Schultz, a US-based architect with 20+ of experience, founder of ",(0,i.kt)("a",{parentName:"p",href:"http://openingdesign.com/"},"OpeningDESIGN")," and active member of the ",(0,i.kt)("a",{parentName:"p",href:"https://osarch.org/"},"OSArch")," community."),(0,i.kt)("h2",{id:"ifc-bim"},"IFC? BIM?"),(0,i.kt)("p",null,"If you are new to the topic, here is a quick introduction. In \u201ctraditional\u201d architecture you have multiple plans of a building. Structural engineers have their own plan, and so do ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Mechanical,_electrical,_and_plumbing"},"MEP")," engineers and ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Heating,_ventilation,_and_air_conditioning"},"HVAC")," people. And because plans go through revisions, they don\u2019t necessarily match by the time construction starts. And so you could get issues like beams going through ductwork (not great at all), electric wires running near water pipes (really messed up), or natural gas pipes interfering with ventilation ducts (\u2018holy mother of god\u2019 bad). Which sounds like a comic exaggeration except when it\u2019s not."),(0,i.kt)("p",null,"Building information modeling, or BIM for short, is a design methodology that assumes having a full model of a building, both geometric data (walls, slabs, ceiling etc.) and all the engineering systems. This allows analyzing the full model for clashes like the ones mentioned above. It\u2019s ",(0,i.kt)("a",{parentName:"p",href:"https://bimcorner.com/benefits-of-using-bim-technology/"},"a lot more than that")," though. Because it\u2019s all one model, there\u2019s easier generation of bill of materials, finer cost calculation, better scheduling of the life cycle etc., but above all \u2014 better communication between all involved parties."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Gantt chart generation",src:a(17587).Z,width:"2000",height:"1013"})),(0,i.kt)("p",null,"This is where the Industry Foundation Classes standard, or IFC, becomes important. It\u2019s the way you exchange project data between collaborators, especially when they use a different BIM authoring program like ArchiCAD or Tekla Structures."),(0,i.kt)("p",null,"IFC is first and foremost a data schema that describes what kind of information can be represented, what metadata can be attached to that information, and how different bits of information are connected to each other. As demands grow, the IFC schema changes over time, with each major revision including something new. So BIM software has to adapt."),(0,i.kt)("p",null,"Somewhat confusingly, there is no single file format for IFC. It\u2019s many file formats that represent the same information in different ways, each suitable for a particular application. Perhaps, the most commonly used file format is IFC-SPF. It\u2019s a text format based on STEP as defined by ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ISO_10303-21"},"ISO 10303-21"),"."),(0,i.kt)("h2",{id:"whats-up-with-revits-interoperability-and-ifc-support"},"What\u2019s up with Revit\u2019s interoperability and IFC support?"),(0,i.kt)("p",null,"For Revit and other similar BIM authoring applications, there are two major workflows that involve exchanging data and IFC. The less popular workflow is exchanging full models, which only works for smaller projects. The more popular workflow is exporting one part of the entire project to IFC, handing it over to e.g. a MEP engineer, then getting back the revision and linking that file in the master project."),(0,i.kt)("p",null,"For the company that actually kickstarted IFC back in 1994, Autodesk is handling its support in a rather unusual way. IFC linking and exporting in Revit is implemented as an ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Autodesk/revit-ifc"},"open-source plugin")," that has been available for over a decade. Releases are regular, they are managed by an Autodesk employee, but a large part of development is still done by the person who wrote the original code in his Autodesk years and then went to work at a different company. It\u2019s not a terribly active project either:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Commits to revit-ifc git repo as per OpenHub data",src:a(85982).Z,width:"1748",height:"545"})),(0,i.kt)("p",null,"Nor is there a lot of active contributors:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"revit-ifc contributors as per OpenHub data",src:a(28295).Z,width:"1748",height:"843"})),(0,i.kt)("p",null,"Revit-ifc is not a code dump, but it doesn\u2019t have great leadership either. Of course, there could be a case made for the availability of the source code for modifying and distribution (LGPL 2.1). After all, if regular open-source projects are allowed to say \u201cif you don\u2019t like it, patch it\u201d (which tends to be frowned upon), doesn\u2019t it apply to Autodesk as well? But if you are an architecture bureau that pays a hefty, ever-increasing subscription fee to a software vendor, doing the vendor\u2019s job is likely not on your TOP10 list of things to do."),(0,i.kt)("p",null,"The net outcome is that Revit\u2019s interoperability with other applications is not great, to put it mildly. It was one of the main subjects raised by architects in multiple open letters in 2020 and 2022."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://letters-to-autodesk.com/letter-to-autodesk.pdf"},"original open letter"),", signed in 2020 by ",(0,i.kt)("a",{parentName:"p",href:"https://www.architectsjournal.co.uk/news/big-name-architects-hit-out-at-cost-and-performance-of-revit"},"some of the big companies")," in Great Britain, mentioned \u201cinsufficient interoperability between programs, especially when exchanging IFC\u201d and then requested \u201ca commitment to continuously improving ","[..]"," industry interoperability (including IFC) as well as expanding geometry support and alignment to international data standards\u201d."),(0,i.kt)("p",null,"To Autodesk\u2019s credit, they ",(0,i.kt)("a",{parentName:"p",href:"https://adsknews.autodesk.com/en/views/reply-to-open-letter-on-revit/"},"admitted")," they could have done a much better job and started more actively engaging with customers."),(0,i.kt)("p",null,"Two years later, an ",(0,i.kt)("a",{parentName:"p",href:"https://letters-to-autodesk.com/"},"update")," of the open letter was published. While the authors applauded the creation of a ",(0,i.kt)("a",{parentName:"p",href:"https://blogs.autodesk.com/aec/roadmap/"},"public roadmap")," and other changes, they also felt that the company wasn\u2019t interested in foundational changes:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The feeling remains that Autodesk has deliberately avoided investment in appropriate tools, instead expanding their compliance staffing and revenues. \u2026 The need remains for a strategic re-boot in order to create a platform that is fit for purpose for the interoperable design and delivery of the next generation of global projects. Clearly this is a difficult thing to do whilst tied to the RVT file format.")),(0,i.kt)("p",null,"This sentiment was largely shared by a large group of architects from Norway, Denmark, Finland, and Iceland, who wrote ",(0,i.kt)("a",{parentName:"p",href:"https://the-nordic-letter.com/"},"The Nordic Letter")," (signed by 326 architectural bureaus representing over 14,000 architects) also in 2022. The authors of The Nordic Letter went even further, citing insufficient interoperability between Autodesk\u2019s own products, Revit and Civil 3D:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The experience, however, is that interoperability and subsequent workflow between these two Autodesk owned programs is poor to say the least, requiring several workarounds just to be able to exchange vital project data.")),(0,i.kt)("p",null,"So it seems like a substantial part of the global community feels like Autodesk isn\u2019t interested in investing into interoperability, even if we are talking about its own products."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"As a user you can drum the beat about wanting a certain feature. But if the company doesn\u2019t want to do it, your hands are tied. However with open-source, the more drumbeats you have, the more users say \u201cwe want this\u201d, the more likely it is that you can organize financing for development of a feature. It\u2019s a beautiful feedback loop \u2014 Ryan Schultz")),(0,i.kt)("h2",{id:"native-ifc-and-foss"},"Native IFC and FOSS"),(0,i.kt)("p",null,"So how do emerging free and open-source BIM authoring tools change this picture?"),(0,i.kt)("p",null,"The important thing to understand here is that proprietary BIM authoring applications are not IFC editors. When they import an IFC file, they convert it to its own document object model. When they export an IFC file, they convert internal representation of the building information to STEP geometry and IFC metadata. The consequences of that are multifold."),(0,i.kt)("p",null,"First of all, they insert vendor-specific metadata that effectively creates a superset of the standard. This metadata doesn\u2019t travel well across BIM authoring applications. And then some non-specific data gets lost because of roundtripping errors."),(0,i.kt)("p",null,"Secondly, there\u2019s ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.osarch.org/index.php?title=Revit_setup_for_OpenBIM/Revit_and_IFC_classes"},"a lot of extra work")," involved to create a mapping between IFC classes and Revit objects when importing and exporting."),(0,i.kt)("p",null,"And lastly, you can\u2019t have a workflow with atomic changes between revisions. And the latter means that you can\u2019t easily locate the difference between two data points or, better yet, make a sensible visualization of changes. This is one of those cases where something is technically correct to do, but really isn\u2019t helpful at all."),(0,i.kt)("p",null,"And it\u2019s precisely where free and open-source applications are beginning to show their teeth, because ",(0,i.kt)("a",{parentName:"p",href:"https://blenderbim.org/"},"BlenderBIM")," and FreeCAD are switching to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/brunopostle/ifcmerge/blob/main/docs/whitepaper.rst"},"Native IFC methodology"),"."),(0,i.kt)(u,{v:"Ooh05WF__80",mdxType:"Youtube"}),(0,i.kt)("p",null,"In a nutshell, Native IFC is a way for a BIM authoring application to introduce extremely small changes to pre-existing IFC files. The basic rules are simple:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Never change ID of an IFC entity when you edit its attributes "),(0,i.kt)("li",{parentName:"ul"},"If you remove an entity, don\u2019t reuse its numeric ID "),(0,i.kt)("li",{parentName:"ul"},"Always write entities in the same format that was already used in the IFC file")),(0,i.kt)("p",null,"All that means that original data is mangled as little as possible. Which allows putting IFC files into a version control system. And ",(0,i.kt)("em",{parentName:"p"},"that"),", in return, makes it possible to create sensible diffs between revisions and perform audit (",(0,i.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/git-blame"},"git blame"),")."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"There\u2019s a lot of potential in being able to pull, review, and merge someone else\u2019s changes, although very few people in architecture do it right now. If the software industry was more like the AEC industry, everyone in the IT industry would be in their own silos \u2014 unable to share the true fidelity of their code with each other. \u2014 Ryan Schultz")),(0,i.kt)("p",null,"And because both BlenderBIM and FreeCAD rely on the ",(0,i.kt)("a",{parentName:"p",href:"https://ifcopenshell.org/"},"IfcOpenShell")," library, they write geometry and metadata the same standard-compliant way. Which means that you can exchange data between users of both applications and get atomic, trackable changes that can be visualized. BlenderBIM already comes with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/brunopostle/ifcmerge"},"IfcMerge"),", a tool by Bruno Postle for managing IFC files in a git repository, and an initial implementation of a visual difference visualization:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"BlenderBIM, visual diffing",src:a(66843).Z,width:"1366",height:"768"})),(0,i.kt)("p",null,"The implementation has some issues, but unless we are missing something, this is pretty much the first visual diff tool for IFC in the entire industry, proprietary applications included."),(0,i.kt)("p",null,"As a BIM authoring application, BlenderBIM is growing at an incredible pace and comes with both architecture and MEP tools, has means for planning, cost calculation, generation of 2D documentation, its own materials library etc."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"BlenderBIM, MEP tools",src:a(88338).Z,width:"1920",height:"1055"})),(0,i.kt)("p",null,"And, which is also important for architectural visualization, BlenderBIM is built on top of Blender with its rich 3D animation and rendering capabilities."),(0,i.kt)("p",null,"FreeCAD\u2019s ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/yorikvanhavre/FreeCAD-NativeIFC"},"NativeIFC module")," is a work in progress. This project is being worked on by Yorik van Havre, original Arch and BIM workbenches developer. His work is sponsored by the ",(0,i.kt)("a",{parentName:"p",href:"https://opentoolchain.org/"},"Open Toolchain Foundation")," and ",(0,i.kt)("a",{parentName:"p",href:"https://nlnet.nl/"},"NLnet Foundation"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"NativeIFC in FreeCAD",src:a(81990).Z,width:"1917",height:"1008"})),(0,i.kt)("p",null,"While BlenderBIM has already switched to using IFC-SPF as a native file format instead of .blend, Yorik\u2019s approach is slightly different. Once the module has been merged, you will have two options. FreeCAD will be able to open IFC files directly and save back to them, but it will also be able to store original IFC data in a container inside a regular FreeCAD file."),(0,i.kt)("p",null,"The Native IFC module also plugs into FreeCAD\u2019s existing set of architecture modeling tools that have already been used in production in smaller projects."),(0,i.kt)("p",null,"While neither project is currently polished enough to be used for a large-scale architecture project on a deadline, their foundation is exactly what 21st century BIM authoring tools should be based on. They are treating IFC the way it's supposed to be treated. And with a solid foundation like that, getting mature is a \u2018when\u2019, not an \u2018if\u2019."),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Screenshots courtesy by Dion Moult (BlenderBIM) and Yorik van Havre (FreeCAD)"))}p.isMDXComponent=!0},66843:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/blenderbim-1-1ab482f982b3fc0d419884058a27588a.webp"},88338:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/blenderbim-2-3329ed2ae33c5bb90e222a0a3332d6bb.webp"},17587:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/gantt-a316e03498b636958558ada8b4325b8a.webp"},81990:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/native-ifc-freecad-b50dd26257a5be526d21ea2868ba7dca.webp"},85982:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/revit-ifc-commits-a7806f61f083eed9aafa7ae8105208b5.webp"},28295:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/revit-ifc-contributors-07f591ad1f9123a37d430349fb6c898d.webp"},99214:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/titlecard-22edebde2a038ae4ea402dbcb826d775.png"}}]);