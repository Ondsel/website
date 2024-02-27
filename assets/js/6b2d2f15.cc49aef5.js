"use strict";(self.webpackChunkondsel=self.webpackChunkondsel||[]).push([[5532],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=o,d=m["".concat(l,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(d,r(r({ref:t},h),{},{components:n})):a.createElement(d,r({ref:t},h))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7826:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const i={slug:"milestone-toponaming-fix-phase-2-done",title:"Milestone: Ondsel and FreeCAD team complete phase 2 of the toponaming fix",description:"We've been working with the FreeCAD community on mitigating the topological naming issue for the past half a year. It's time for a progress update.",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4"}],tags:["freecad","development"],image:"./titlecard.png",draft:!1},r=void 0,s={permalink:"/blog/milestone-toponaming-fix-phase-2-done",source:"@site/blog/2023-07-24/toponaming_update.md",title:"Milestone: Ondsel and FreeCAD team complete phase 2 of the toponaming fix",description:"We've been working with the FreeCAD community on mitigating the topological naming issue for the past half a year. It's time for a progress update.",date:"2023-07-24T00:00:00.000Z",formattedDate:"July 24, 2023",tags:[{label:"freecad",permalink:"/blog/tags/freecad"},{label:"development",permalink:"/blog/tags/development"}],readingTime:6.335,hasTruncateMarker:!0,authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"}],frontMatter:{slug:"milestone-toponaming-fix-phase-2-done",title:"Milestone: Ondsel and FreeCAD team complete phase 2 of the toponaming fix",description:"We've been working with the FreeCAD community on mitigating the topological naming issue for the past half a year. It's time for a progress update.",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"}],tags:["freecad","development"],image:"./titlecard.png",draft:!1},prevItem:{title:"FreeCAD version 0.21 is a major milestone for the community",permalink:"/blog/freecad-021-is-a-major-milestone-for-the-community"},nextItem:{title:"Software bounties are a dumb idea",permalink:"/blog/software-bounties-are-a-dumb-idea"}},l={image:n(3993).Z,authorsImageUrls:[void 0,void 0]},p=[{value:"What\u2019s this toponaming thing anyway?",id:"whats-this-toponaming-thing-anyway",level:2},{value:"The TNP team",id:"the-tnp-team",level:2},{value:"Staging the fix",id:"staging-the-fix",level:2},{value:"Will toponaming solve all the problems with models breaking? Nope.",id:"will-toponaming-solve-all-the-problems-with-models-breaking-nope",level:2},{value:"How work on the TNP fix changed the project",id:"how-work-on-the-tnp-fix-changed-the-project",level:2},{value:"In conclusion",id:"in-conclusion",level:2}],h={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Back in February, we ",(0,o.kt)("a",{parentName:"p",href:"https://ondsel.com/blog/freecad-topological-naming/"},"posted")," an explanation of the toponaming issue in FreeCAD and a proposal of getting this fixed in the upstream project, with RealThunder\u2019s LinkStage3 fork as a guideline. Since then, we\u2019ve made a lot of progress, but even more work is yet to be done."),(0,o.kt)("p",null,"In this post, we\u2019d like to explain how we are separating this work into stages, why FreeCAD 0.21 is not going to be much different from previous releases in terms of toponaming, and what our plan for the next development cycle is."),(0,o.kt)("p",null,"While this progress is cause to celebrate, we also caution users to understand that models can (and will) break for reasons besides toponaming even after this project is done."),(0,o.kt)("h2",{id:"whats-this-toponaming-thing-anyway"},"What\u2019s this toponaming thing anyway?"),(0,o.kt)("p",null,"As models evolve, their geometry changes. Doing a boolean sum of the same object with a different object will create new faces and vertices. So if a feature is attached to an element that no longer exists, the model will break. Topological naming is a way to store all element names in a persistent manner to avoid that scenario. You can read a much more detailed explanation in the ",(0,o.kt)("a",{parentName:"p",href:"https://ondsel.com/blog/freecad-topological-naming/"},"previous post"),". The important thing here is that making topology names persistent implies changing FreeCAD\u2019s source code in many places and the changes are not trivial. This is not a fix you can do on a lazy Sunday afternoon."),(0,o.kt)("h2",{id:"the-tnp-team"},"The TNP team"),(0,o.kt)("p",null,"Before we go any further, let's introduce the team that has been working on the fix all year so far."),(0,o.kt)("p",null,"John Dupuy is an Ondsel employee. He\u2019s project coordinator, does code review, as well as his own share of programming."),(0,o.kt)("p",null,"Chris Hennes is FreeCAD maintainer who also writes code and does code review from other contributors. He did a large part of programming in phases 1 and 2 of the TNP fix (more on that below)."),(0,o.kt)("p",null,"Pesc0 is a new arrival to FreeCAD. When the call for participation at fixing the TNP issue was posted, he picked a few tasks he was interested in, started hacking and \u2014 most importantly \u2014 didn\u2019t drop the ball. He also turned out to be really great at communication with the team."),(0,o.kt)("p",null,"Zheng Lei aka RealThunder (or RT) developed the fix for the toponaming issue in his fork of FreeCAD. His patchset made it possible for the upstream team to study the issue in much more detail, explore possible solutions, and come up with a roadmap. The TNP team uses a lot of his code and the classes he developed. RealThunder was involved in a consulting role and provided some really useful insight."),(0,o.kt)("p",null,"Ajinkya Dahale is an active contributor to the project, and employee at Ondsel. His involvement so far is creating the fix for sketch objects."),(0,o.kt)("h2",{id:"staging-the-fix"},"Staging the fix"),(0,o.kt)("p",null,"After studying the issue and the existing fix in RealThunder\u2019s fork, we came up with a plan to introduce topological naming in five phases."),(0,o.kt)("p",null,"Phase 1: To begin, we need a way to store and manipulate short references names of elements and names serialized from the element mapping. We also need a way to handle element naming as a whole and store all descriptive elements in one place for easy reference. So this is where we wrote several classes \u2014 ",(0,o.kt)("inlineCode",{parentName:"p"},"IndexedName.cpp")," (save the name of an element), ",(0,o.kt)("inlineCode",{parentName:"p"},"MappedName.cs")," (store and manipulate the more-complex mapped-name used by elements and the toponaming algorithm), ",(0,o.kt)("inlineCode",{parentName:"p"},"MappedElement.cpp")," class (save the name parts of an element), ",(0,o.kt)("inlineCode",{parentName:"p"},"ElementMap.h")," (store all descriptive elements in one place for easy reference)."),(0,o.kt)("p",null,"Phase 2: The main objective of this phase is to create a way to generatively express the history of an item, create new names and mappings, but not actually rely on them. This phase mainly touches Sketch and Part workbenches."),(0,o.kt)("p",null,"This is where we are now. Version 0.21 is coming out soon with stage 1 and stage 2 implemented. Some smaller items remain to be completed."),(0,o.kt)("p",null,"Phase 3: This is where we will start applying new names and mappings to geometry elements. We expect that at this point, until optimizations are done, FreeCAD will become somewhat slower. This expected performance regression is one of the main reasons we are not waiting for the entire work to be done to release a new FreeCAD version."),(0,o.kt)("p",null,"Phase 4: At this stage, we are planning to start using the new names when recalculating objects in all workbenches."),(0,o.kt)("p",null,"Phase 5: This final stage is where we do all the optimization to make FreeCAD fast and snappy while toponaming-safe."),(0,o.kt)("p",null,"The plan is to do phases 3 through 5 in the next development cycle leading up to releasing v1.0 some time next year."),(0,o.kt)("h2",{id:"will-toponaming-solve-all-the-problems-with-models-breaking-nope"},"Will toponaming solve all the problems with models breaking? Nope."),(0,o.kt)("p",null,"There are multiple other opportunities for models to break even when toponaming is not involved. A common reason for that is using relative rather than absolute references when constraining elements of sketches. With relative references, FreeCAD will likely try to solve constraints in a different order, which will change geometry."),(0,o.kt)("p",null,"A certain combination of parameters can cause inversion of a part of a sketch. So when you e.g. change a parameter driven via spreadsheet, it will break your model forever, and you won't be able to undo and/or recompute."),(0,o.kt)("p",null,"FreeCAD also does no validation of user input by itself. It will obediently do whatever the user asks it to do, even if it makes the model explode. This can be worked around by using conditional expressions to normalize user-submitted values that don't make sense."),(0,o.kt)("p",null,"Brodie Fairhall covered these and a few other cases in a ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=Yp6cIMA7LsI"},"video")," for FreeCAD User Conference 2023. We highly recommend watching it!"),(0,o.kt)("h2",{id:"how-work-on-the-tnp-fix-changed-the-project"},"How work on the TNP fix changed the project"),(0,o.kt)("p",null,"As a developers community, we\u2019ve already made complex changes to FreeCAD in the past, like switching from Python 2.7 to Python 3, or porting the user interface from Qt 4 to Qt5. But the way we planned that work wasn\u2019t great. Fixing the toponaming issue rivals past challenging projects in virtually every aspect, so it was time to change our approach to planning our work.\nTo do that, we decided to use GitHub\u2019s projects feature, break the entire project into phases, and, most importantly, avoid trying to complete the entire project within one development cycle."),(0,o.kt)("p",null,"Another major change was making unit tests the norm. Until fairly recently, FreeCAD had zero unit tests. It was really bad, because it made discovering and fixing regressions quite a bit of a nightmare. Some work on that had started shortly before our work on TNP began, but we made it the rule that all new code should come with unit tests."),(0,o.kt)("h2",{id:"in-conclusion"},"In conclusion"),(0,o.kt)("p",null,"Seeing a new contributor pick up rather complex tasks and work on them until the job is done has been one of the most rewarding experiences in this project so far. We would definitely appreciate more people following in the footsteps of Pesc0."),(0,o.kt)("p",null,"Here is what you can do. Most of the project conversation is taking place in a ",(0,o.kt)("a",{parentName:"p",href:"https://t.me/toponamingchat"},"dedicated Telegram group"),". The group has be-weekly teleconferences discussing progress and issues. The task list is discussed and built in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/FreeCAD/FreeCAD/issues/8432"},"GitHub issue 8432")," and new issues are made for each task. You can volunteer for one of those, create a PR, copy in the code from the toponaming branch, then start writing tests to build your understanding of what the code is doing, and iteratively accomplish the task."),(0,o.kt)("p",null,"This isn\u2019t the easiest project to accomplish, and as FreeCAD v1.0 release is directly dependent on finalizing the toponaming fix, we encourage all interested developers to join us!"))}m.isMDXComponent=!0},3993:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/titlecard-9c600c988efb52ccfaac0749f87f4cb3.png"}}]);