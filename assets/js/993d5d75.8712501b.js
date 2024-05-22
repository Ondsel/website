"use strict";(self.webpackChunkondsel=self.webpackChunkondsel||[]).push([[3928],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),h=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=h(o),d=n,m=u["".concat(l,".").concat(d)]||u[d]||c[d]||r;return o?a.createElement(m,i(i({ref:t},p),{},{components:o})):a.createElement(m,i({ref:t},p))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var h=2;h<r;h++)i[h]=o[h];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},66769:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>h});var a=o(87462),n=(o(67294),o(3905));const r={slug:"toponaming-problem-is-history",title:"FreeCAD's topological naming problem is (officially) history",description:"Unstable FreeCAD builds now ship with toponaming fixes. Let\u2019s talk about the amazing work that the community did there.",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4"}],tags:["ondsel","es","freecad","toponaming"],image:"./titlecard.png",draft:!1},i=void 0,s={permalink:"/blog/toponaming-problem-is-history",source:"@site/blog/2024-05-22/tnp-update.md",title:"FreeCAD's topological naming problem is (officially) history",description:"Unstable FreeCAD builds now ship with toponaming fixes. Let\u2019s talk about the amazing work that the community did there.",date:"2024-05-22T00:00:00.000Z",formattedDate:"May 22, 2024",tags:[{label:"ondsel",permalink:"/blog/tags/ondsel"},{label:"es",permalink:"/blog/tags/es"},{label:"freecad",permalink:"/blog/tags/freecad"},{label:"toponaming",permalink:"/blog/tags/toponaming"}],readingTime:4.81,hasTruncateMarker:!0,authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"}],frontMatter:{slug:"toponaming-problem-is-history",title:"FreeCAD's topological naming problem is (officially) history",description:"Unstable FreeCAD builds now ship with toponaming fixes. Let\u2019s talk about the amazing work that the community did there.",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"}],tags:["ondsel","es","freecad","toponaming"],image:"./titlecard.png",draft:!1},nextItem:{title:"Ondsel ES 2024.2 released: more assembly tools and UX/UI polish",permalink:"/blog/ondsel-es-2024-2"}},l={image:o(86361).Z,authorsImageUrls:[void 0,void 0]},h=[{value:"What has been done",id:"what-has-been-done",level:2},{value:"What we have learned",id:"what-we-have-learned",level:2},{value:"What&#39;s next",id:"whats-next",level:2}],p={toc:h};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"One of the questions we've been getting from users regarding the release of Ondsel ES 2024.2 is whether we are shipping it with all the recent toponaming fixes enabled. The answer is 'no'. While most of the work in the TNP project is done, the code is largely untested by the larger community, so we don't feel comfortable shipping it in an actual release of Ondsel ES. However, let's take this opportunity to talk about TNP and the amazing work that the community did there."),(0,n.kt)("h2",{id:"what-has-been-done"},"What has been done"),(0,n.kt)("p",null,"Just to reiterate, the toponaming problem is an inherent side effect of parametric modeling. Models are built up progressively with later features depending on the geometry from earlier steps. If the user goes back to an earlier step and changes it, later steps can break because the base feature they depend on changes. To avoid that, the CAD software needs to keep track of all geometry features you create and provide a way to recover when a certain geometry feature is taken from under another one. "),(0,n.kt)("p",null,"RealThunder developed a solution for the toponaming problem in his own fork of FreeCAD, known as the LinkStage branch. While the code worked (and continues to work), there were two major problems with it: 1) the fork went out of sync with upstream FreeCAD, so LinkStage users couldn\u2019t benefit from newer FreeCAD features, and vice versa, 2) the code wasn\u2019t written in a way that was maintainable by anybody other than RealThunder. So a task force formed to migrate RealThunder's patches back to the upstream project. If you\u2019re curious to learn more, we ",(0,n.kt)("a",{parentName:"p",href:"https://ondsel.com/blog/freecad-topological-naming/"},"wrote about the problem and the solution")," last year."),(0,n.kt)("p",null,"After more than a year of work, the last phase of the toponaming project is now complete. While the team is still finding missing bits of code for Sketcher and PartDesign and adding them, anyone can rebuild the program with the toponaming fix and see that things are beginning to work as expected."),(0,n.kt)("p",null,"Because the application is doing more work to keep track of the geometry, we expected some performance impact. The team has been watching this closely and investigating potential performance regressions. So far, things actually look really good. Performance impact appears to be negligible. Much of that is thanks to RealThunder's extensive optimization."),(0,n.kt)("p",null,"The upstream team will not ship FreeCAD 1.0 without TNP fixes enabled. On Monday, they ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/FreeCAD/FreeCAD/issues/8432#issuecomment-2121349967"},"enabled")," the mitigation patchset in weekly builds by default to start getting the new code to a wider user base (as compared to the team that worked on the toponaming code)."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"TNP announcement on GitHub",src:o(69032).Z,width:"1660",height:"347"})),(0,n.kt)("h2",{id:"what-we-have-learned"},"What we have learned"),(0,n.kt)("p",null,"FreeCAD hasn\u2019t had to tackle very many large-scale initiatives like this in the past. Only two come to mind: the Python3 port and the Qt5 port. So this was also an opportunity to learn and improve. Big projects like this aren\u2019t sexy. They don\u2019t add cool new features or UI/UX polish that thrills users. They are often bigger than a single contributor can achieve working alone and carry a lot of risk. All that means that big projects tend to languish. One answer is professional, paid development."),(0,n.kt)("p",null,"The model where paid contributors ",(0,n.kt)("em",{parentName:"p"},"and")," volunteers work on the same project actually works. In some ways it provides the best of both worlds. We get an army of volunteers who can bring domain expertise, testing, and many small contributions while also encouraging a professional style of development, consistency, and scale."),(0,n.kt)("p",null,"We also witnessed just how much FreeCAD needs paid contributors. This might seem obvious to you, but there's a lot of FOSS lore around the idea that business interests and paid development corrupt free software projects. It doesn't have to be the case! "),(0,n.kt)("p",null,"Paid development opens up a lot of possibilities for the project. While a team of volunteers might be able to deliver good results while working in their spare time, there is no guarantee that solutions will be forthcoming or that contributions will be maintainable when they arrive. We think a hybrid solution is the best way forward and we congratulate the entire team on their success: both RealThunder, Chris Hennes, and Pesc0, who contributed uncountable hours as volunteers, and bgbsww, CalligaroV, and John Dupuy (Ondsel), who did paid development. "),(0,n.kt)("p",null,"But we also should be thanking the legions of users who donated to the FPA and made the FPA grants for CalligaroV and bgbsww possible. Without financial resources, this kind of development is really hard and often impossible. "),(0,n.kt)("p",null,"Finally, starting to use ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/orgs/FreeCAD/projects/2/views/1"},"GitHub projects")," was a rather smart move to improve how larger projects are managed. This brought clarity and better organization. The FPA is continuing to ",(0,n.kt)("a",{parentName:"p",href:"https://fpa.freecad.org/programs/fpadf-announcement"},"expand the use of grants"),". Supported projects now include work on Sketcher, a brand new components library, better infrastructure for the project, and more."),(0,n.kt)("h2",{id:"whats-next"},"What's next"),(0,n.kt)("p",null,"For Ondsel ES users, we will enable the TNP code in the next stable release, 2024.3, as well as in weekly builds leading up to that."),(0,n.kt)("p",null,"Meanwhile, let's remember that model stability is a complex topic, and TNP mitigation helps only for a specific kind of model breakage. Models can still break for reasons that have nothing to do with topological naming. That's not even FreeCAD-specific. SolidWorks does that, Siemens NX does that, and so do other CAD programs: all CAD software can be used to design brittle models and there\u2019s no substitute for good design principles."),(0,n.kt)("p",null,"If you are interested in learning more about those principles, you can start with ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.freecad.org/Feature_editing#Advice_for_creating_stable_models"},"this list")," of suggestions. Following them might sound like doing things backwards, but it will actually make you a better designer."),(0,n.kt)("p",null,"Finally, we encourage you to ",(0,n.kt)("a",{parentName:"p",href:"https://www.freecad.org/sponsor.php"},"donate to the FPA")," so that more complex projects could be tackled, there is no shortage of those in FreeCAD."))}u.isMDXComponent=!0},69032:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/announcement-91b6b8214383214abb0497641c5cc54c.webp"},86361:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/titlecard-081142bd6cf0da00b52ef7639441b89f.png"}}]);