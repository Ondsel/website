"use strict";(self.webpackChunkondsel=self.webpackChunkondsel||[]).push([[3078],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,s=function(e,t){if(null==e)return{};var a,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=r.createContext({}),h=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},c=function(e){var t=h(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=h(a),m=s,d=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return a?r.createElement(d,n(n({ref:t},c),{},{components:a})):r.createElement(d,n({ref:t},c))}));function d(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=a.length,n=new Array(o);n[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:s,n[1]=i;for(var h=2;h<o;h++)n[h]=a[h];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9219:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>h});var r=a(7462),s=(a(7294),a(3905));const o={slug:"default-assembly-workbench-4",title:"Exploring the Assembly 3 workbench",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4"}],tags:["freecad","development","assembly","assembly3"],image:"./titlecard.png",draft:!1},n=void 0,i={permalink:"/blog/default-assembly-workbench-4",source:"@site/blog/2023-03-23/assembly-3.md",title:"Exploring the Assembly 3 workbench",description:"This is the fourth part in the series where we explore the possibility of creating a default assembly workbench for FreeCAD. We started out with a conversation about why we need a default assembly workbench in the program, then reviewed Assembly 2 and A2plus. Now let\u2019s talk about the Assembly 3 workbench.",date:"2023-03-23T00:00:00.000Z",formattedDate:"March 23, 2023",tags:[{label:"freecad",permalink:"/blog/tags/freecad"},{label:"development",permalink:"/blog/tags/development"},{label:"assembly",permalink:"/blog/tags/assembly"},{label:"assembly3",permalink:"/blog/tags/assembly-3"}],readingTime:8.475,hasTruncateMarker:!1,authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"}],frontMatter:{slug:"default-assembly-workbench-4",title:"Exploring the Assembly 3 workbench",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"}],tags:["freecad","development","assembly","assembly3"],image:"./titlecard.png",draft:!1},prevItem:{title:"Exploring the Assembly 4 workbench",permalink:"/blog/default-assembly-workbench-5"},nextItem:{title:"Exploring the A2plus workbench",permalink:"/blog/default-assembly-workbench-3"}},l={image:a(5066).Z,authorsImageUrls:[void 0,void 0]},h=[{value:"History",id:"history",level:2},{value:"Workflow and ease of use",id:"workflow-and-ease-of-use",level:2},{value:"Features",id:"features",level:2},{value:"Consistency",id:"consistency",level:2},{value:"Stability",id:"stability",level:2},{value:"Performance",id:"performance",level:2},{value:"Development Status",id:"development-status",level:2},{value:"Legal Status",id:"legal-status",level:2},{value:"Summary",id:"summary",level:2},{value:"Next up",id:"next-up",level:2}],c={toc:h},p="wrapper";function u(e){let{components:t,...o}=e;return(0,s.kt)(p,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This is the fourth part in the series where we explore the possibility of creating a default assembly workbench for FreeCAD. We started out with a ",(0,s.kt)("a",{parentName:"p",href:"https://ondsel.com/blog/default-assembly-workbench-1"},"conversation")," about why we need a default assembly workbench in the program, then ",(0,s.kt)("a",{parentName:"p",href:"https://ondsel.com/blog/default-assembly-workbench-2"},"reviewed Assembly 2")," and ",(0,s.kt)("a",{parentName:"p",href:"https://ondsel.com/blog/default-assembly-workbench-3/"},"A2plus"),". Now let\u2019s talk about the Assembly 3 workbench."),(0,s.kt)("h2",{id:"history"},"History"),(0,s.kt)("p",null,"In 2013, Jonathan Westhues took the FOSS community by surprise releasing the source code of ",(0,s.kt)("a",{parentName:"p",href:"https://solvespace.com/index.pl"},"SolveSpace"),", his parametric 2D/3D CAD software built around a very capable custom solver. Some 4 years later, Zheng Lei aka \u201crealthunder\u201d created a Python binding for the solver, then used it to create his own assembly workbench for FreeCAD."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Commit to Assembly 3 over time",src:a(2403).Z,width:"1761",height:"554"})),(0,s.kt)("p",null,"Further changes in the workbench required ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/realthunder/FreeCAD_assembly3/wiki/Link"},"patching FreeCAD"),", so realthunder created a friendly fork of the entire program, which over time became his primary project with many other changes and add-ons not available in upstream FreeCAD by default: the pie menu, transparent docks, and others."),(0,s.kt)("p",null,"Some of the architectural changes have already been merged to upstream FreeCAD, others are getting there. The Assembly 3 workbench continues to be maintained and is available to users of upstream FreeCAD as an addon and is now part of this larger project, the \u2018LinkStage\u2019 fork."),(0,s.kt)("h2",{id:"workflow-and-ease-of-use"},"Workflow and ease of use"),(0,s.kt)("p",null,"Assembly 3 is substantially different from other assembly workbenches in multiple aspects. Here are some of its most significant characteristics."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Project hierarchy.")," In A3, an assembly consists of constraints, elements, and parts. Elements are the features of parts that are used to create a constraint, e.g. a point of one part and a plane of another part. Assemblies can contain sub-assemblies, in which case each sub-assembly will carry its own set of constraints, elements, and parts. This approach makes navigating a complex project fairly straightforward."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Project hierarchy in Assembly 3",src:a(5044).Z,width:"2560",height:"1440"})),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/Nemesis81/GraberI3_Freecad"},"Graber I3 model by Nemesis81")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Top-down design model.")," This approach is technically available in A2 and A2plus, but it is not a recommended way of using those workbenches. Assembly 3 makes the top-down design model a first-class citizen. You can create new parts, then drag them into the Parts section of the project tree, then they will become usable in the assembly."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Bottom-up design model.")," This is likely how most A3 users approach creating assemblies. The workbench provides two ways to build an assembly from parts saved as external files: importing from STEP files or linking (see below) FreeCAD projects that are already opened in the program."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Links.")," A3 is not the only assembly workbench to rely on the ",(0,s.kt)("a",{parentName:"p",href:"https://wiki.freecad.org/App_Link"},"App::Link API")," to reference objects instead of copying them, Assembly 4 also does it. But A3 is what this API was designed for in the first place. The general idea is that if you have e.g. 4 screws of the same type to fix a motherboard to a plastic box, you don\u2019t need 4 instances of the same screw geometry. You only need one part that you can reuse via links."),(0,s.kt)("p",null,"Creating a link, however, is all not at all obvious and requires performing a particular sequence of actions: selecting a part (Body object) in the project tree, then selecting an assembly document in the document tabs, then clicking a Link button in the toolbar. Figuring this out without reading documentation or watching a tutorial or asking on the forum is all but impossible."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Fixing parts and freezing sub-assemblies.")," While fixing a part in A2plus is a property of a part, the A3 approach is to select a feature and assign a \u201cLocked\u201d constraint to it to eliminate all or some degrees of freedom (this depends on the type of the selected feature). The idea of locking something entirely goes even further. When working on a complex assembly, a particularly useful way to simplify computations is to freeze a sub-assembly. Such a sub-assembly is considered fixed by the solver and is therefore excluded from update calculations."),(0,s.kt)("h2",{id:"features"},"Features"),(0,s.kt)("p",null,"Assembly 3 is the most feature-packed of all existing assembly WBs. It comes with over 40 constraint types, various helper tools, means to control workplanes, and more. It also has a dynamic solver, so you can move parts under constraints."),(0,s.kt)("p",null,"The workbench does its best to keep track of degrees of freedom to avoid overconstraining an assembly. However, in doing so, it doesn\u2019t make it easy to indicate where the problem is exactly. All it does is notifying the user that there are inconsistent constraints. It is up to the user to locate the offensive elements and constraints."),(0,s.kt)("p",null,"There are more caveats. In particular, the vast amount of features in this workbench raises the expectations for UX/UI. Assembly 3 has an overwhelming UI. It comes with no less than six toolbars, three out of which are different groups of constraints."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Assembly 3 toolbars",src:a(342).Z,width:"1499",height:"214"})),(0,s.kt)("p",null,"There\u2019s the main constraints group and two additional groups of constraints. This takes a lot of getting used to. We\u2019ve seen experienced users of the workbench making really useful elaborate tutorials about it and yet failing to locate the constraint they need on the first attempt."),(0,s.kt)("p",null,"Things don\u2019t get much better with the ",(0,s.kt)("a",{parentName:"p",href:"https://wiki.freecad.org/ModernUI_Workbench"},"ModernUI")," add-on that creates a Ribbon-like top toolbar. You get readable labels (something the late ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Jef_Raskin"},"Jef Raskin")," would appreciate), but you also get a large scrollable area:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Assembly 3 with a Ribbon-like toolbar",src:a(7918).Z,width:"2560",height:"1440"})),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/Nemesis81/GraberI3_Freecad"},"Graber I3 model by Nemesis81")),(0,s.kt)("p",null,"Assembly 3 is not uniquely complex here. Arch, FEM, TechDraw, and a few other workbenches also have a similar or even larger amount of UI to deal with. This suggests that there may be a need for a general UX/UI review and a better strategy for organizing the user interface and designing the interaction \u2014 something that would be solved on the core level and then propagated to all workbenches, default and 3rd-party alike."),(0,s.kt)("p",null,"Three sorely missing features are collision detection, visual control over degrees of freedom, and the generation of BOM. Collision detection was ",(0,s.kt)("a",{parentName:"p",href:"https://forum.freecad.org/viewtopic.php?p=253170#p253170"},"planned")," back in 2018, the idea was to use the ",(0,s.kt)("a",{parentName:"p",href:"https://pybullet.org/"},"Bullet")," physics engine, but this hasn\u2019t materialized yet. Regarding DOF control, it is virtually impossible to find out how many degrees of freedom a part has without trial-and-error by attempting to transform it and \u2014 sometimes \u2014 looking at the output log in the built-in console (A2plus solves that by optionally displaying an indicator for each part in the viewport). And as for BOM, realthunder already ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/realthunder/FreeCAD_assembly3/wiki/Expression-and-Spreadsheet"},"explored in detail")," the requirements for developing BOM generation two years ago, but there is no code yet."),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://wiki.freecad.org/Assembly3_Workbench"},"wiki page")," for the assembly at FreeCAD\u2019s website provides some basic documentation on features, and the project\u2019s ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/realthunder/FreeCAD_assembly3/wiki"},"own wiki")," explores basic concepts of A3 and provides several tutorials. However, neither can serve as a reference guide, hence finding out what some of the features do will require original research by users. Notably, there\u2019s a lot of YouTube tutorials on using Assembly 3. Some of the most prolific A3 educators are ",(0,s.kt)("a",{parentName:"p",href:"https://www.youtube.com/@OficineRobotica/videos"},"Oficine Robotica")," and ",(0,s.kt)("a",{parentName:"p",href:"https://www.youtube.com/@OficineRobotica/videos"},"Joko Engineeringhelp"),"."),(0,s.kt)("h2",{id:"consistency"},"Consistency"),(0,s.kt)("p",null,"The workbench is generally consistent with how the rest of FreeCAD operates. In our testing, nothing stands out as particularly peculiar. A3 will also use parts created with other workbenches as long as the imported parts are moved into the Parts section of the assembly\u2019s hierarchy."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Assembly3 project in LinkStage branch",src:a(2920).Z,width:"2560",height:"1440"})),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/Nemesis81/GraberI3_Freecad"},"Graber I3 model by Nemesis81")),(0,s.kt)("h2",{id:"stability"},"Stability"),(0,s.kt)("p",null,"Assembly 3 currently has over 300 unresolved bugs and feature requests filed to its ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/realthunder/FreeCAD_assembly3/issues"},"issue tracker"),". However, this cannot be used as a sole indicator of the maintainer\u2019s responsiveness: for some reason, it\u2019s fairly common for users to report bugs associated with FreeCAD itself rather than with the workbench in question. Given that the \u2018Linkstage\u2019 fork of FreeCAD also has over 300 unresolved bug reports and feature requests, this is obviously too much for one person to handle, even though he gets some help with triaging reports."),(0,s.kt)("p",null,"None of the currently open bug reports are crash reports for the Assembly 3 workbench. Having said that, we did experience a few random crashes when working with the WB. We also looked at workbench crashes reported in the past and found that realthunder pays a lot of attention to that and typically fixes those within several days."),(0,s.kt)("h2",{id:"performance"},"Performance"),(0,s.kt)("p",null,"While it\u2019s possible to exclude sub-assemblies from computation by freezing them and thus saving the resources for when they are needed, this will not be sufficient in all use cases. With complex assemblies (over a hundred parts), A3 can become really slow. "),(0,s.kt)("p",null,"Moreover, even in simple use cases (two parts, two constraints), Assembly 3 will often fail to perform an axial rotation smoothly with 1 DOF left, while the rotation increment is as small as 1\xb0."),(0,s.kt)("h2",{id:"development-status"},"Development Status"),(0,s.kt)("p",null,"Although there have been contributions from at least a dozen more people, realthunder remains the author of 92% of all commits to the workbench since project\u2019s inception. The project is maintained, however its active development phase ended in 2019. The last workbench release was tagged in 2020 and the latest internal version is 0.11.4 from November 2022. We also found that the development remains uncoupled from the upstream SolveSpace project: multiple changes and new features related to constraints appear to have never made its way to the workbench."),(0,s.kt)("h2",{id:"legal-status"},"Legal Status"),(0,s.kt)("p",null,"Because Assembly 3 relies on a fork of SolveSpace\u2019s source code, it\u2019s available under the terms of GPLv3+. This makes its inclusion in the FreeCAD application problematic. Thus the workbench can only be installed separately in upstream FreeCAD as an addon."),(0,s.kt)("h2",{id:"summary"},"Summary"),(0,s.kt)("p",null,"Assembly 3 is substantially more advanced than either A2 or A2plus workbenches: generally better workflow, better support for bottom-up design, better-designed project hierarchy, vastly more constraint options, and the list goes on. The project also has an avid user community and the developer is typically fast to respond to reports of severe bugs."),(0,s.kt)("p",null,"At the same time, A3 has a number of usability issues and important missing features such as BOM generation. The solver\u2019s license also makes this workbench an unlikely choice for a foundation of a potential default workbench in FreeCAD."),(0,s.kt)("h2",{id:"next-up"},"Next up"),(0,s.kt)("p",null,"Now that we\u2019ve explored Assembly 3, we are getting closer to the end of the series. In the next installment, we\u2019ll take a close look at the Assembly 4 workbench developed by Zolko."))}u.isMDXComponent=!0},2403:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/freecad-assembly3-commits-74dd6007bd2a4cd50c76d386f0c5e1dd.png"},2920:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/freecad-assembly3-graber-i3-model-3108054c6b6643471f01af9c22c78bef.png"},5044:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/freecad-assembly3-project-hierarchy-f069e78b9d5c0571aba74ae9865e8535.png"},342:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/freecad-assembly3-toolbars-d58f25c6ecc6f4d694d53caa0a082150.png"},7918:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/freecad-assembly3-with-ribbon-like-ui-b2272e0aaf11cb3df1e2d74cc428d4cc.png"},5066:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/titlecard-31d5663f356c89f6034ea0e0d24a94c1.png"}}]);