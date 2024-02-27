"use strict";(self.webpackChunkondsel=self.webpackChunkondsel||[]).push([[5892],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),d=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(a),p=n,m=u["".concat(l,".").concat(p)]||u[p]||h[p]||r;return a?o.createElement(m,i(i({ref:t},c),{},{components:a})):o.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var d=2;d<r;d++)i[d]=a[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},7536:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=a(7462),n=(a(7294),a(3905));const r={slug:"assembly-workbench-preview",title:"Ondsel added integrated assembly to the FreeCAD core finally solving the largest missing feature",description:"The basics of an integrated assembly workbench in FreeCAD are now functional and will soon be ready for wider testing.",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4"}],tags:["freecad","assembly"],image:"./titlecard.png",draft:!1},i=void 0,s={permalink:"/blog/assembly-workbench-preview",source:"@site/blog/2023-11-06/assembly-wb-preview.mdx",title:"Ondsel added integrated assembly to the FreeCAD core finally solving the largest missing feature",description:"The basics of an integrated assembly workbench in FreeCAD are now functional and will soon be ready for wider testing.",date:"2023-11-06T00:00:00.000Z",formattedDate:"November 6, 2023",tags:[{label:"freecad",permalink:"/blog/tags/freecad"},{label:"assembly",permalink:"/blog/tags/assembly"}],readingTime:8.28,hasTruncateMarker:!0,authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"}],frontMatter:{slug:"assembly-workbench-preview",title:"Ondsel added integrated assembly to the FreeCAD core finally solving the largest missing feature",description:"The basics of an integrated assembly workbench in FreeCAD are now functional and will soon be ready for wider testing.",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"}],tags:["freecad","assembly"],image:"./titlecard.png",draft:!1},prevItem:{title:"Open Source UX/UI is notoriously bad. How FreeCAD is breaking the curse",permalink:"/blog/freecad-breaking-open-source-ux-curse"},nextItem:{title:"FreeCAD sketcher getting a major upgrade with floating input widgets",permalink:"/blog/floating-input-widgets"}},l={image:a(4463).Z,authorsImageUrls:[void 0,void 0]},d=[{value:"The research",id:"the-research",level:2},{value:"Assembly data structure",id:"assembly-data-structure",level:2},{value:"Workflow considerations",id:"workflow-considerations",level:2},{value:"So what can the integrated assembly workbench do?",id:"so-what-can-the-integrated-assembly-workbench-do",level:2},{value:"Project organization",id:"project-organization",level:2},{value:"What\u2019s next",id:"whats-next",level:2}],c=(u="Youtube",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var u;const h={toc:d};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The basics of an integrated assembly workbench in FreeCAD are now functional and will be ready for wider testing once ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/FreeCAD/FreeCAD/pull/10764"},"another pull request")," is merged. This means you can play with it now in the development version of FreeCAD and when version 1.0 is out, you will be able to create or link parts, create joints between them, and solve the assembly \u2014 in just a few clicks, out of the box, without installing any add-ons."),(0,n.kt)("p",null,"This quick video by Pierre-Louis Boyer demonstrates all that:"),(0,n.kt)(c,{v:"mFsieFzOPls",mdxType:"Youtube"}),(0,n.kt)("p",null,"This is by no means the complete implementation that we have in mind for FreeCAD, but it\u2019s a solid foundation. And because we like to be open about our process, let\u2019s talk about how we got to this point, how we made design decisions, what\u2019s already available, and what else is in the pipeline."),(0,n.kt)("h2",{id:"the-research"},"The research"),(0,n.kt)("p",null,"Users have been asking for an integrated assembly workbench for a very long time. And because writing add-ons has always been the preferable way to implement major new features in FreeCAD, people did just that: multiple 3rd-party options, each with its own workflow, incompatible with one another."),(0,n.kt)("p",null,"Doing extensive research of multiple assembly workbenches is really a lot to ask. And thus, users got more than what they bargained for: a solution wrapped up in confusion. Whenever a new user arrived and asked for recommendations, a very common response would be along the lines of \u201cI don\u2019t really know about those other workbenches, I only bothered to learn this one\u201d."),(0,n.kt)("p",null,"This gave us three basic options:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Pick one existing workbench, improve it, make it the default"),(0,n.kt)("li",{parentName:"ol"},"Create a new workbench based on one or more of the existing alternatives"),(0,n.kt)("li",{parentName:"ol"},"Create a new workbench entirely from scratch")),(0,n.kt)("p",null,"We started with a deep dive into four popular workbenches \u2014 Assembly 2, A2plus, Assembly3, and Assembly4 \u2014 and then looked at a few assembly-like add-ons. If you missed that series, ",(0,n.kt)("a",{parentName:"p",href:"https://ondsel.com/blog/default-assembly-workbench-7/"},"this final post")," has all the links and discusses our plan forward at the time."),(0,n.kt)("p",null,"The most important takeaway from the research was that every available option had some kind of workflow and/or UX/UI problem deeply rooted into its design. So we came up with the following recommendations:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Agree on the data structure with stakeholders to help making all assembly workbenches mutually compatible"),(0,n.kt)("li",{parentName:"ol"},"Create or reuse an existing performant 3D solver"),(0,n.kt)("li",{parentName:"ol"},"Build a clean new solution that could be iterated upon later to add advanced features"),(0,n.kt)("li",{parentName:"ol"},"Ship a working basic implementation as part of the next big release after v0.21")),(0,n.kt)("h2",{id:"assembly-data-structure"},"Assembly data structure"),(0,n.kt)("p",null,"After the research, we proceeded with standardization of the data structure. So far, only Zolko (Assembly4) has been up to discussing this. Both A2plus and Assembly3 developers haven\u2019t yet responded to an invitation to talk about it. With luck we\u2019ll get all major stakeholders to agree on something and/or provide conversion scripts for existing assembly projects."),(0,n.kt)("p",null,"We ended up designing the assembly as a Part container, just like in Assembly 4. However, multiple assemblies can be created in one document. We are not married to this design decision though and will happily reconsider if users speak up."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Assembly project structure",src:a(1987).Z,width:"1795",height:"841"})),(0,n.kt)("h2",{id:"workflow-considerations"},"Workflow considerations"),(0,n.kt)("p",null,"Before designing the new workbench, we looked at existing implementations in various proprietary CAD programs. We were mostly interested in how the workflow is organized and what program demands the least amount of clicks and learning from users."),(0,n.kt)("p",null,"There are two major approaches to constraining parts in 3D: either you select geometric features and mate them directly, or you create a local coordinate system (LCS) per each feature involved and then align those LCSs. Our implementation is a bit of both: the user does choose a pair of geometric features to connect, but FreeCAD also creates (and displays) a local joint coordinate system (JCS) for each feature."),(0,n.kt)("p",null,"We also found that, regardless of the workflow approach, developers of other programs indeed try to reduce the amount of clicks to an absolute minimum and make it easy to move parts under constraints."),(0,n.kt)("p",null,"Since we decided in favor of LCS (kinda), we\u2019d be better off looking at something like T-FLEX CAD rather than Assembly4 for workflow tips. And in most proprietary CAD programs, moving a part means you just grab it and then drag it, whereas in Assembly3 you have three movement options in the toolbar (and it\u2019s the least of your problems there)."),(0,n.kt)("p",null,"The most approachable assembly workflow that we discovered was the Onshape\u2019s one, hence much of our interaction design is loosely based on it."),(0,n.kt)("h2",{id:"so-what-can-the-integrated-assembly-workbench-do"},"So what can the integrated assembly workbench do?"),(0,n.kt)("p",null,"Our intention with this project is to create a solution that Just Works\u2122 nine times out of ten. For the things it can\u2019t do, the addon workbenches are still available and still good choices. The current state of the integrated workbench is a lean, minimally functional solution. It is, however, a solid foundation for building future functionality."),(0,n.kt)("p",null,"First off, it will support both top-down and bottom-up design approaches. Right now, you can create the assembly project, then proceed linking parts from existing FreeCAD projects. Or you can switch to Part Design and start building your parts, then go back to Assembly to constrain those parts."),(0,n.kt)("p",null,"Once you have all the parts you need in the project, choose a joint type in the toolbar."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Joints toolbar",src:a(4419).Z,width:"1263",height:"485"})),(0,n.kt)("p",null,"So far, available joint types are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed joint: zero degrees of freedom, parts are permanently locked together"),(0,n.kt)("li",{parentName:"ul"},"Revolute joint: allow rotation around a single axis between selected parts"),(0,n.kt)("li",{parentName:"ul"},"Cylindrical joint: allow rotation along one axis and movement along the same axis between two parts"),(0,n.kt)("li",{parentName:"ul"},"Slider joint: allow movement along one axis between two parts"),(0,n.kt)("li",{parentName:"ul"},"Ball joint: allow unrestricted movement of two parts as long as their connection points remain in contact"),(0,n.kt)("li",{parentName:"ul"},"Planar joint: two selected features must be in the same plane, movement is restricted to that plane"),(0,n.kt)("li",{parentName:"ul"},"Parallel joint: constrain relative movement of selected features to parallel translations"),(0,n.kt)("li",{parentName:"ul"},"Tangent joint: forces two geometric features to be tangent, restrict movement to smooth transitions along their contact surface.")),(0,n.kt)("p",null,"When you select a joint type and hover a geometric feature of a part, FreeCAD displays a joint coordinate system for that feature:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Assembly JCS preview",src:a(886).Z,width:"2560",height:"1440"})),(0,n.kt)("p",null,"So all you need to do is click on the hovered feature to add it to the selection (displayed in a floating dialog on the right), then pick a geometric feature of the second part and click OK."),(0,n.kt)("p",null,"Once all parts are connected with joints, you can move them under constraints. You don\u2019t need an extra tool for that. Just grab a part and drag it."),(0,n.kt)("h2",{id:"project-organization"},"Project organization"),(0,n.kt)("p",null,"We were really pleased with the way the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/orgs/FreeCAD/projects/2"},"TNP project")," operated, so we decided to model the assembly workbench project after it: public project board on GitHub (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/orgs/FreeCAD/projects/7"},"done"),"), a mix of Ondsel employees and FreeCAD contributors (done), and atomic pull requests into the main development branch (done)."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Kanban board for the assembly project on GitHub",src:a(5620).Z,width:"2560",height:"1440"})),(0,n.kt)("p",null,"Our lead developer for the assembly workbench project is Pierre-Louis Boyer (\u2018Paddle\u2019 on the FreeCAD forum) who already has a lot of experience improving UX/UI in FreeCAD."),(0,n.kt)("p",null,"Something we were missing was expertise in 3D solvers. We hired Dr. Aik-Siong Koh who has decades of experience in programming kinematic and multi-body dynamics solvers. He also has an existing solver originally written in Smalltalk. Dr. Koh ported his solver to C++ and made it ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Ondsel-Development/OndselSolver"},"available")," under the terms of LGPL 2.1+."),(0,n.kt)("p",null,"Another Ondsel employee (and co-founder) John Dupuy contributed to turning Ondsel Solver into a shared library and fixing build issues on supported platforms."),(0,n.kt)("p",null,"Outside of Ondsel, FreeCAD maintainers Werner Mayer and Chris Hennes have been doing code review of all the pull requests we submitted."),(0,n.kt)("p",null,"We were also fortunate to receive contributions from the design review team early on: Qewer ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/FreeCAD/FreeCAD/issues/10662#issuecomment-1716991225"},"contributed icons")," for joints and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/FreeCAD/FreeCAD/pull/10767"},"improved")," the appearance of JCS previews. Additionally, Tobias Falk and howie-j have been participating in the UX/UI discussions and providing ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/FreeCAD/FreeCAD/pull/11158"},"patches"),"."),(0,n.kt)("p",null,"Based on our experience with the TNP and the assembly projects so far we are confident suggesting that this collaboration model should be used more in FreeCAD. Hopefully, more companies will adopt it."),(0,n.kt)("h2",{id:"whats-next"},"What\u2019s next"),(0,n.kt)("p",null,"Our attention right now is focused on ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/FreeCAD/FreeCAD/pull/10764"},"completing")," the use of Ondsel Solver and cleaning up the rest. If the intention to release FreeCAD 1.0 around FOSDEM 2024 is still strong among maintainers, that gives us close to three months of leeway."),(0,n.kt)("p",null,"Implementing major new features in the workbench in time for v1.0 seems unlikely to happen, although minor enhancements like easily inserting fasteners is a possibility. So we will mostly be finishing what we have already started to deliver a lean, minimalistic, well-tested integrated assembly workbench in the v1.0 release."),(0,n.kt)("p",null,"After that the floor will be open to all sorts of things: BOM generation, collision detection, assembly explosion, animation etc. We are particularly excited about the possibilities that the new materials system by Dave Carter will bring to us. If you ever needed to calculate the weight of an entire assembly or locate its center of mass, you definitely know why."),(0,n.kt)("p",null,"We invite everyone to help us test and improve the new workbench. There is a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/orgs/FreeCAD/projects/7"},"public kanban board")," on GitHub where assembly-specific tasks are managed. Right now, we need testers even more than we need programmers. So come talk to us. Report a bug or  pick a card you would like to work on and comment on the related issue to get things going."),(0,n.kt)("p",null,"And finally, we believe this workbench will become an important part of the FreeCAD design kit.  We are confident that many great things can be built on top of this foundation and we\u2019re not wasting time. We have already started an internal project to expand the feature set beyond what you would expect from an assembly workbench with a kinematic solver. Stay tuned for updates!"))}p.isMDXComponent=!0},5620:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/assembly-github-board-8783d55360618acc197a018e1ba3641f.webp"},886:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/assembly-jcs-preview-5b3335cd84c0a4c24a2a887a2a35f054.webp"},4419:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/assembly-joints-toolbar-752ccc03f94e23b76939d9a729ec8862.webp"},1987:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/assembly-project-structure-70e5f23666038a702e1a778db385c1b2.webp"},4463:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/titlecard-d7c0a82cc10e737c4570c34d3f8c4475.png"}}]);