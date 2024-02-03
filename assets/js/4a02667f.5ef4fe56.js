"use strict";(self.webpackChunkondsel=self.webpackChunkondsel||[]).push([[5888],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)a=s[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)a=s[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),h=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=h(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=h(a),p=n,m=d["".concat(l,".").concat(p)]||d[p]||c[p]||s;return a?o.createElement(m,r(r({ref:t},u),{},{components:a})):o.createElement(m,r({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,r=new Array(s);r[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:n,r[1]=i;for(var h=2;h<s;h++)r[h]=a[h];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},7938:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>h});var o=a(7462),n=(a(7294),a(3905));const s={slug:"default-assembly-workbench-7",title:"Assembly Workbench: What We Learned and What's Coming Next",description:"Now that the study of assembly workbenches and tools is done, let's discuss key takeaways and propose a way forward for the project.",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4"}],tags:["freecad","development","assembly"],image:"./titlecard.png",draft:!1},r=void 0,i={permalink:"/blog/default-assembly-workbench-7",source:"@site/blog/2023-04-10/assembly-7.md",title:"Assembly Workbench: What We Learned and What's Coming Next",description:"Now that the study of assembly workbenches and tools is done, let's discuss key takeaways and propose a way forward for the project.",date:"2023-04-10T00:00:00.000Z",formattedDate:"April 10, 2023",tags:[{label:"freecad",permalink:"/blog/tags/freecad"},{label:"development",permalink:"/blog/tags/development"},{label:"assembly",permalink:"/blog/tags/assembly"}],readingTime:10.98,hasTruncateMarker:!1,authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"}],frontMatter:{slug:"default-assembly-workbench-7",title:"Assembly Workbench: What We Learned and What's Coming Next",description:"Now that the study of assembly workbenches and tools is done, let's discuss key takeaways and propose a way forward for the project.",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"}],tags:["freecad","development","assembly"],image:"./titlecard.png",draft:!1},prevItem:{title:"Ondsel at 100...Days",permalink:"/blog/ondsel-100-days"},nextItem:{title:"Exploring BodyBuilder, Manipulator, and Part-o-magic",permalink:"/blog/default-assembly-workbench-6"}},l={image:a(3264).Z,authorsImageUrls:[void 0,void 0]},h=[{value:"Key Insights",id:"key-insights",level:2},{value:"The Long-Term Vision",id:"the-long-term-vision",level:3},{value:"The Need for a Common Data Structure",id:"the-need-for-a-common-data-structure",level:3},{value:"Why We Should Talk About Solvers Separately",id:"why-we-should-talk-about-solvers-separately",level:3},{value:"Why People are Passionate About Existing Solutions",id:"why-people-are-passionate-about-existing-solutions",level:3},{value:"What About the Workflow and UX/UI?",id:"what-about-the-workflow-and-uxui",level:3},{value:"Recommendations",id:"recommendations",level:2},{value:"Integrated Assembly Workbench",id:"integrated-assembly-workbench",level:3},{value:"Standardized Data Structure",id:"standardized-data-structure",level:3},{value:"Powerful, Performant, 3D Solver",id:"powerful-performant-3d-solver",level:3},{value:"Shipping the MVP",id:"shipping-the-mvp",level:3},{value:"In Conclusion",id:"in-conclusion",level:2}],u={toc:h};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"We started this series with the ",(0,n.kt)("a",{parentName:"p",href:"https://ondsel.com/blog/default-assembly-workbench-1"},"assumption")," that there is a strong community demand for a default assembly workbench in FreeCAD. The community discussion that followed that article confirmed our belief. We then researched existing options \u2014 ",(0,n.kt)("a",{parentName:"p",href:"https://ondsel.com/blog/default-assembly-workbench-2"},"Assembly 2"),", ",(0,n.kt)("a",{parentName:"p",href:"https://ondsel.com/blog/default-assembly-workbench-3"},"A2plus"),", ",(0,n.kt)("a",{parentName:"p",href:"https://ondsel.com/blog/default-assembly-workbench-4"},"Assembly 3"),", and ",(0,n.kt)("a",{parentName:"p",href:"https://ondsel.com/blog/default-assembly-workbench-5"},"Assembly 4")," \u2014 and even quickly studied ",(0,n.kt)("a",{parentName:"p",href:"https://ondsel.com/blog/default-assembly-workbench-6"},"related workbenches and macros"),"."),(0,n.kt)("p",null,"Our research had a number of limitations though. We avoided exploring the earliest solutions such as the ",(0,n.kt)("a",{parentName:"p",href:"https://forum.freecad.org/viewtopic.php?t=3828"},"original workbench")," by J\xfcrgen Riegel and ",(0,n.kt)("a",{parentName:"p",href:"https://forum.freecad.org/viewtopic.php?t=1523"},"FreeGCS")," because they were incomplete. We also decided against studying both ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/JMG1/ExplodedAssembly"},"Exploded Assembly")," and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/microelly2/Animation"},"Animation")," workbenches because this type of feature deserves dedicated attention."),(0,n.kt)("p",null,"From this research and the discussion that followed, we came away with a handful of important takeaways. We suggest that these ideas should influence the direction of the FreeCAD project."),(0,n.kt)("p",null,"In this article, we\u2019ll describe what we learned. We\u2019ve taken the liberty of making some specific recommendations for a way forward and we also discuss what we believe is Ondsel\u2019s role."),(0,n.kt)("h2",{id:"key-insights"},"Key Insights"),(0,n.kt)("h3",{id:"the-long-term-vision"},"The Long-Term Vision"),(0,n.kt)("p",null,"We started this conversation by calling for a solution that covers 80% of use cases. Based on our research and community feedback, we conclude that there is strong consensus around the higher-level characteristics of this integrated assembly workbench:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Both top-down and bottom-up approaches equally first-class citizens"),(0,n.kt)("li",{parentName:"ul"},"Simple enough to make quick alignments, but powerful enough for complex projects with nested sub-assemblies"),(0,n.kt)("li",{parentName:"ul"},"Ability to resolve assembly constraints automatically and eventually simulate multi-body dynamics"),(0,n.kt)("li",{parentName:"ul"},"An easy way to animate the assembly and detect collisions"),(0,n.kt)("li",{parentName:"ul"},"Built-in BOM generation"),(0,n.kt)("li",{parentName:"ul"},"PDM-ready"),(0,n.kt)("li",{parentName:"ul"},"Compatible with other parts of FreeCAD and alternative assembly workbenches"),(0,n.kt)("li",{parentName:"ul"},"Same license as FreeCAD (LGPL v2.1)")),(0,n.kt)("h3",{id:"the-need-for-a-common-data-structure"},"The Need for a Common Data Structure"),(0,n.kt)("p",null,"The existing assembly workbenches for FreeCAD are not mutually compatible. It isn\u2019t possible for a user to switch between the options without losing data. This kind of compatibility is important and it starts with the data structure. Early in the forum discussion, Zolko noted the need for a standard, and we think he\u2019s exactly right:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u2026what we need is a default assembly DATA FORMAT that every assembly workbench can use. You can design solids in Part and PartDesign workbenches, where you begin with one, continue with the other, use Draft en-passant, and finish with some Part Booleans. You can even mix this with Curved Shape surfaces, Sheet Metal bending, and they all COOPERATE! Why should it be different for assemblies? What IS needed is to say: to be called a FreeCAD assembly workbench it needs to use the following data structure ","[\u2026]"," and then let people implement the best approaches for that.")),(0,n.kt)("p",null,"We see the development of the common data structure as a priority requirement for an integrated solution. Users should be able to move between existing workbenches or migrate to newer ones without redoing an entire project."),(0,n.kt)("p",null,"A standardized data structure would also simplify developing in-house niche solutions where you need to run some extra simulations."),(0,n.kt)("h3",{id:"why-we-should-talk-about-solvers-separately"},"Why We Should Talk About Solvers Separately"),(0,n.kt)("p",null,"Past discussions about an assembly workbench have lumped the solver and the workbench into the same conversation. Separating the discussion has been helpful since these are, in fact, very different things. It is the solver which has been the most controversial part of previous discussions. Assembly 4 and Manipulator workbenches have demonstrated that, at least for some use cases, a solver isn\u2019t even needed at all."),(0,n.kt)("p",null,"Among those who emphasize the need for a solver, agreement about requirements has been hard to find. The real world is messy and complex and full of unique problems that require custom solutions. One solver cannot possibly handle the variety of use cases that exist (think combined mechanical-thermal-electromagnetic simulations)."),(0,n.kt)("p",null,"Some problems can be handled by 2D solvers, and we have some very nice options, including the one in the Sketcher workbench. "),(0,n.kt)("p",null,"Other problems ",(0,n.kt)("em",{parentName:"p"},"require")," a capable 3D solver and if we want FreeCAD to be competitive, it needs one. Unfortunately, we currently have no options at all. SolveSpace comes closest but its licensing (GPL v3+) makes it an unlikely choice for FreeCAD (LGPL v2.1). The development of solvers, both open and proprietary, is an area of rapid innovation. We have no way of knowing what will be available even five years from now."),(0,n.kt)("p",null,"Our insight is that the future integrated assembly workbench should have the following three essential characteristics with respect to a solver:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Minimally functional and easy-to-use without any solver at all"),(0,n.kt)("li",{parentName:"ul"},"Capable of using a solver if one exists"),(0,n.kt)("li",{parentName:"ul"},"Solver-agnostic, with a possibility to use new solvers in the future")),(0,n.kt)("p",null,"Building the assembly workbench to be solver-independent provides the greatest flexibility for the project as a whole, users, and partners like Ondsel. It also provides the most options in the future."),(0,n.kt)("h3",{id:"why-people-are-passionate-about-existing-solutions"},"Why People are Passionate About Existing Solutions"),(0,n.kt)("p",null,"From past experience, we understood that this discussion might get emotional at times. Users are very passionate about the existing options. What we noticed was that their passion stems from two sources."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Investment in climbing the learning curve.")," With three actively developed assembly workbenches today, users first have to learn enough to make a choice. Having made that choice, they don\u2019t want to revisit it. Some users refuse to invest in even making the choice. They give up and move on. Here are a few examples from discussions about our initial proposal:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u201cAs a fairly new freeCAD user I have spent an innumerable amount of time attempting to choose which assembly workbench to use and more importantly learn how to use\u201d (",(0,n.kt)("a",{parentName:"li",href:"https://forum.freecad.org/viewtopic.php?p=667457&sid=3bec9fb58279fa4feba78c322c3c6b43#p667457"},"FC forum"),")"),(0,n.kt)("li",{parentName:"ul"},"\u201cI tried switching to FreeCAD a couple of years ago and the plethora of conflicting assembly solutions prevented me from doing so\u201d (",(0,n.kt)("a",{parentName:"li",href:"https://forum.freecad.org/viewtopic.php?p=669635#p669635"},"FC forum"),")"),(0,n.kt)("li",{parentName:"ul"},"\u201cI haven\u2019t explored any of the assembly benches as there is a big curve to even selecting one of them\u201d (",(0,n.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/FreeCAD/comments/11r9j78/comment/jcajyiq/?utm_source=reddit&utm_medium=web2x&context=3"},"Reddit"),")"),(0,n.kt)("li",{parentName:"ul"},"\u201cIt's painful to train anyone if there are four different assembly plugins and they all work slightly or drastically different\u201d (",(0,n.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/FreeCAD/comments/11r9j78/comment/jc9j3tu/?utm_source=reddit&utm_medium=web2x&context=3"},"Reddit"),")")),(0,n.kt)("p",null,"Users who made a choice also made a significant investment to become proficient, because they saw the benefits of the tool they use. As a result, they often have little or no knowledge of the other options and no interest in learning if the current option meets their needs. At the risk of oversimplifying:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A2plus users think it has a simple, natural, and straightforward workflow"),(0,n.kt)("li",{parentName:"ul"},"A3 users think it\u2019s the most feature-complete workbench of all"),(0,n.kt)("li",{parentName:"ul"},"A4 users like how robust the LCS-based workflow is")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Investment in their current models and assemblies.")," Users also have a large collection of projects that are built using one particular workbench. They are naturally reluctant to switch solutions if it means losing or redoing that work from scratch. Basically, they made a huge investment in their assembly WB of choice, and because of the lack of compatibility, they are now in an unintended vendor lock-in situation."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"What about features?")," Surprisingly, one thing we didn\u2019t hear much was users championing one solution or another because it offered specific features. While the different solutions had strengths and weaknesses, all of the options offer similar capabilities."),(0,n.kt)("p",null,"Our key insight is that protecting the investment users have made is extremely important. Change will be hard, but we believe users will be willing to adopt an integrated solution if it is robust, relatively easy to learn, well documented, and if existing models can be migrated to it with minimal rework. They shouldn\u2019t be forced to make the change before they are ready or before an integrated solution is mature enough for their needs."),(0,n.kt)("h3",{id:"what-about-the-workflow-and-uxui"},"What About the Workflow and UX/UI?"),(0,n.kt)("p",null,"Once solvers and data format are removed from the discussion, what\u2019s left to discuss is the workflow. Regardless of how passionate the users are, the reality is that none of the existing assembly workbenches has a perfect workflow or user interface:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A2plus requires conversion of parts created with other WBs."),(0,n.kt)("li",{parentName:"ul"},"A3 has so many constraint types that even experienced users get confused."),(0,n.kt)("li",{parentName:"ul"},"A4 requires time to set up local coordinate systems for all features that should be attached.")),(0,n.kt)("p",null,"There are ideas to borrow from all of them, but we don\u2019t consider the workflow and UX/UI of any of the existing options, in their present form, to meet the long-term goals. Assembly 4, by virtue of its simplicity and solid design, would be a good starting point."),(0,n.kt)("h2",{id:"recommendations"},"Recommendations"),(0,n.kt)("h3",{id:"integrated-assembly-workbench"},"Integrated Assembly Workbench"),(0,n.kt)("p",null,"We suggest that FreeCAD must commit itself to an integrated assembly workbench \u2014 with great UX, documentation, translations, and compatibility with the rest of FreeCAD. "),(0,n.kt)("p",null,"While the first iteration of the workbench can be feature-incomplete, this WB should support both simple and complex workflows. It should provide a solid foundation for future development of PDM integration, BOM extraction, collision detection, exploded assembly views, and animations."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Ondsel\u2019s role.")," We can participate in the planning, help organize the work, contribute code, test, and refine the solution. We can also contribute to the documentation and other essential parts of the project."),(0,n.kt)("h3",{id:"standardized-data-structure"},"Standardized Data Structure"),(0,n.kt)("p",null,"We already explained the importance of having a common data structure earlier. Our recommendation is simply that this should be the first step, and it should involve all key stakeholders: core developers, maintainers of the other Assembly workbenches (kbwbe, Realthunder, and Zolko), and Ondsel. This should be undertaken and completed early enough that other workbenches can either support the standard directly or provide migration tools."),(0,n.kt)("p",null,"The approach in Assembly 4 is a serious contender for a starting point. Zolko has some very sensible ideas like having only one root assembly element in the project, wrapped into a Part container, with parts and sub-assemblies available as child elements."),(0,n.kt)("p",null,"The working group should also investigate what ISO 10303 has to offer but regardless of what is found, the focus should be on providing the best solution for FreeCAD and its users."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Ondsel\u2019s role"),". Again, we can participate but we can\u2019t impose a standard unilaterally. In this case, we feel Ondsel\u2019s participation not only represents our own interests but the interest of other future partners. "),(0,n.kt)("h3",{id:"powerful-performant-3d-solver"},"Powerful, Performant, 3D Solver"),(0,n.kt)("p",null,"Let\u2019s reiterate: a 3D solver is critical to make FreeCAD competitive for professional and commercial work. No viable solutions that are license-compatible currently exist."),(0,n.kt)("p",null,"The solver has to be written in C++ or another compiled language for acceptable performance. The development of a 3D solver is a massive, time consuming, and expensive endeavor. It is, by far, the hardest part of doing assembly right."),(0,n.kt)("p",null,"For ease of distribution, it\u2019s best to make the solver part of the core FreeCAD. This also gives us a better shot at maintaining it and also makes it available for use in other workbenches (think Robot)."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Ondsel\u2019s role.")," We want a solution that is fast, powerful, and supports future functionality like multi-body dynamics. Ondsel intends to begin developing such a solution, release its code under an appropriately permissive license, and submit PRs to include it in the FreeCAD source. Based on our understanding of the ",(0,n.kt)("a",{parentName:"p",href:"https://opencoreventures.notion.site/Open-Core-Business-Model-525879f382cb430e81274f669a026c15#764604b5c6db4107bb84bbc427d81b87"},"\u2018Buyer-Based\u2019 Open Core Model"),", we think this is the right decision."),(0,n.kt)("p",null,"Having said that, it is essential to understand that Ondsel is a for-profit company and we are not profitable yet. We might fail before a solution is available. The project should not bet its future on our success. Moreover, the need to survive might force us to make the 3D solver or specific features available as paid options. This is also a risk area for the FreeCAD project. The community should prudently take steps to minimize the impact and ensure the viability of the integrated assembly workbench. "),(0,n.kt)("p",null,"This aligns with our recommendation that the assembly workbench should be solver-agnostic, usable in solverless mode, supporting less powerful 2D solvers, but also able to take advantage of more powerful technology \u2014 including commercial options \u2014 if and when they are available."),(0,n.kt)("h3",{id:"shipping-the-mvp"},"Shipping the MVP"),(0,n.kt)("p",null,"We believe that a minimum viable assembly workbench (proof-of-workbench, if you will) should be shipped as part of FreeCAD as soon as possible to become a platform for testing the new 3D solver. The goal shouldn\u2019t be feature completeness. Rather, we should focus on simplicity and stability and then iterate upon that to improve the workflow and user experience."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Ondsel\u2019s role.")," Once again, we can participate by providing leadership, organization, code, testing, and documentation but we cannot do it alone. We\u2019re ready to start immediately."),(0,n.kt)("h2",{id:"in-conclusion"},"In Conclusion"),(0,n.kt)("p",null,"We thank everyone who participated in the discussion. Being able to test our ideas and expectations against feedback from avid users of existing assembly workbenches is priceless. "),(0,n.kt)("p",null,"We know that the road to a world-class assembly system won\u2019t be short and there will be plenty of bumps along the way. We also know we can\u2019t do it alone. We look forward to collaborating with the FreeCAD community to bring this vision to life."),(0,n.kt)("p",null,"We are interested to hear your feedback on this plan. Please let us know what you think by commenting ",(0,n.kt)("a",{parentName:"p",href:"https://forum.freecad.org/viewtopic.php?t=76799"},"in the forum")," or ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/orgs/Ondsel-Development/discussions/2"},"on GitHub"),". We will create a project in the GitHub tracker to plan the work and coordinate the many people it will require. Please let us know if you want to contribute to this effort."))}d.isMDXComponent=!0},3264:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/titlecard-268046dacab91c08f60ad70ae0045ce3.png"}}]);