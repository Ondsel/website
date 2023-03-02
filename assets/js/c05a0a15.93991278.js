"use strict";(self.webpackChunkondsel=self.webpackChunkondsel||[]).push([[1177],{3905:(e,t,o)=>{o.d(t,{Zo:()=>h,kt:()=>m});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},h=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=d(o),c=n,m=p["".concat(l,".").concat(c)]||p[c]||u[c]||r;return o?a.createElement(m,i(i({ref:t},h),{},{components:o})):a.createElement(m,i({ref:t},h))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var d=2;d<r;d++)i[d]=o[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}c.displayName="MDXCreateElement"},2735:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=o(7462),n=(o(7294),o(3905));const r={slug:"freecad-topological-naming",title:"Don't hold your breath for FreeCAD's topological naming fix",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Rebecca Dodd",title:"Contributing Writer",url:"https://www.thebasementoffice.co.uk",image_url:"https://media.licdn.com/dms/image/C4D03AQGTVXyi5Pa-xg/profile-displayphoto-shrink_800_800/0/1596530840324?e=1681344000&v=beta&t=PjdEzZGYbqOsAqVWUE1bsjNuVxMsknVkZfStHx863-s"}],tags:["freecad","development"],image:"./titlecard.png",draft:!1},i=void 0,s={permalink:"/blog/freecad-topological-naming",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-02-18/freecad-topological.md",source:"@site/blog/2023-02-18/freecad-topological.md",title:"Don't hold your breath for FreeCAD's topological naming fix",description:"FreeCAD's 'topological naming problem' is legendary. It's frequently cited as the number one reason holding back widespread adoption of FreeCAD for commercial use.",date:"2023-02-18T00:00:00.000Z",formattedDate:"February 18, 2023",tags:[{label:"freecad",permalink:"/blog/tags/freecad"},{label:"development",permalink:"/blog/tags/development"}],readingTime:6.805,hasTruncateMarker:!1,authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Rebecca Dodd",title:"Contributing Writer",url:"https://www.thebasementoffice.co.uk",image_url:"https://media.licdn.com/dms/image/C4D03AQGTVXyi5Pa-xg/profile-displayphoto-shrink_800_800/0/1596530840324?e=1681344000&v=beta&t=PjdEzZGYbqOsAqVWUE1bsjNuVxMsknVkZfStHx863-s",imageURL:"https://media.licdn.com/dms/image/C4D03AQGTVXyi5Pa-xg/profile-displayphoto-shrink_800_800/0/1596530840324?e=1681344000&v=beta&t=PjdEzZGYbqOsAqVWUE1bsjNuVxMsknVkZfStHx863-s"}],frontMatter:{slug:"freecad-topological-naming",title:"Don't hold your breath for FreeCAD's topological naming fix",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Rebecca Dodd",title:"Contributing Writer",url:"https://www.thebasementoffice.co.uk",image_url:"https://media.licdn.com/dms/image/C4D03AQGTVXyi5Pa-xg/profile-displayphoto-shrink_800_800/0/1596530840324?e=1681344000&v=beta&t=PjdEzZGYbqOsAqVWUE1bsjNuVxMsknVkZfStHx863-s",imageURL:"https://media.licdn.com/dms/image/C4D03AQGTVXyi5Pa-xg/profile-displayphoto-shrink_800_800/0/1596530840324?e=1681344000&v=beta&t=PjdEzZGYbqOsAqVWUE1bsjNuVxMsknVkZfStHx863-s"}],tags:["freecad","development"],image:"./titlecard.png",draft:!1},prevItem:{title:"I hire people to work on a FOSS project. Here's how I evaluate GitHub profiles",permalink:"/blog/evaluating-github-profile"},nextItem:{title:"ChatGPT acts demonic about open-source software",permalink:"/blog/chatgpt-screwtape"}},l={image:o(9900).Z,authorsImageUrls:[void 0,void 0]},d=[{value:"Why is it so hard to merge?",id:"why-is-it-so-hard-to-merge",level:2},{value:"Progress without regression",id:"progress-without-regression",level:2},{value:"Laying the foundation for long-term change",id:"laying-the-foundation-for-long-term-change",level:2}],h={toc:d};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"FreeCAD's '",(0,n.kt)("a",{parentName:"p",href:"https://wiki.freecad.org/Topological_naming_problem"},"topological naming problem"),"' is legendary. It's frequently cited as the number one reason holding back widespread adoption of FreeCAD for commercial use."),(0,n.kt)("p",null,"Developer ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/realthunder"},"RealThunder")," introduced ",(0,n.kt)("a",{parentName:"p",href:"https://forum.freecad.org/viewtopic.php?t=27278"},"a fix to the problem")," years ago, but it has never been fully incorporated into the core product."),(0,n.kt)("p",null,"Will FreeCAD ",(0,n.kt)("em",{parentName:"p"},"ever")," have a solution? Yes. But it\u2019s going to take time."),(0,n.kt)("p",null,"Let\u2019s back up a bit."),(0,n.kt)("h1",{id:"what-is-topological-naming-and-why-is-it-a-problem-in-freecad"},"What is topological naming, and why is it a problem in FreeCAD?"),(0,n.kt)("p",null,"Topological naming is the process of giving persistent names to elements of a solid model, such as faces, edges, and vertices. By naming these elements, we can attach features, dimensions, and other attributes to them."),(0,n.kt)("p",null,"The hard part of topological naming is making the names persistent even if the model is modified. Modern parametric designs are built up through a series of modifications which change the elements in the model. Faces may merge or be split. Edges may be chamfered, turning into multiple edges. If the computer is unable to maintain correct persistence of the naming\u2014even when the underlying topology changes\u2014the model breaks and recovery is difficult. ",(0,n.kt)("a",{parentName:"p",href:"https://youtu.be/QSsVFu929jo?t=33"},"Maker Tales has a good explanation here"),"."),(0,n.kt)("p",null,"The problem is ubiquitous in CAD. All applications suffer from it to some extent. The problem cannot be ",(0,n.kt)("em",{parentName:"p"},"solved")," in the traditional sense. It can only be mitigated and most applications do a good job of avoiding the problem by either limiting the user\u2019s actions or algorithmically tracking changes to the named features."),(0,n.kt)("p",null,"The current state of FreeCAD is weak in this regard. For simple models, the problem is fairly easy to avoid and a broken model is easy to repair. As models get more complicated, only a very disciplined approach to design will keep models intact. This requires experience that many new and casual users don\u2019t have. That is why the problem is so frustrating\u2014it bites you when you\u2019ve already invested a lot of time learning the tool and building the design."),(0,n.kt)("h1",{id:"realthunders-fix-works-why-not-use-it"},"RealThunder\u2019s fix works. Why not use it?"),(0,n.kt)("p",null,"It seems obvious. We have a working branch of FreeCAD that isn\u2019t plagued by the topological naming problem. Why wouldn\u2019t we just merge it in and be done with it?"),(0,n.kt)("p",null,'\u201cThe fact that this solvable topology naming problem is so serious yet so long-standing, tells me that this is really a people problem in the FreeCAD project. Because of this, as much as I want to use it, I simply can not afford this "free" software. The community needs to push out whomever is standing in the way of progress. And crowd-source some funds to hire a pro to fix the topology-naming issue as well as do some much-needed integration work.\u201d \u2014 ',(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=QSsVFu929jo&lc=UgzY-2eximqNDrWgxkF4AaABAg"},"agnichatian on YouTube")),(0,n.kt)("p",null,"This opinion is understandable and certainly not unusual. As much as we relate to the frustrations expressed here, it\u2019s not as simple as just merging in RealThunder\u2019s branch or bringing in one paid developer to do it once and for all. Why?"),(0,n.kt)("p",null,"It\u2019s important to appreciate how pervasive feature naming is within FreeCAD\u2014or ",(0,n.kt)("em",{parentName:"p"},"any")," CAD. Identifying features and attaching attributes to them is what modern parametric design is all about. Implementing a solution is not a straightforward task and implementing it incorrectly would cause user models to break irreparably. Even a ",(0,n.kt)("em",{parentName:"p"},"properly")," implemented solution is guaranteed to have bugs and border-cases for a long time."),(0,n.kt)("p",null,"For all these reasons, the project leaders have chosen to move cautiously and to allow the solution to stabilize and be proven before merging it into the main branch."),(0,n.kt)("h2",{id:"why-is-it-so-hard-to-merge"},"Why is it so hard to merge?"),(0,n.kt)("p",null,"There are two factors:"),(0,n.kt)("p",null,"First is the sheer size and number of code changes necessary to implement this solution. Many, if not most, files in FreeCAD need to be modified to incorporate the solution.\nSecond is the pace of other development work. The rest of FreeCAD\u2019s development has only accelerated in recent years. Work is being done by many developers in many parts of the application."),(0,n.kt)("p",null,"Before new code can be merged, it has to be rebased onto the current version of source code. If there are conflicts, they have to be resolved manually. With a large, pervasive change like this, there are ",(0,n.kt)("em",{parentName:"p"},"always")," conflicts. By the time rebasing is complete, the master branch has moved ahead and the process has to start again."),(0,n.kt)("p",null,"One solution could be to freeze the master branch and block any further changes until the topological naming solution is merged, but this might take many months to accomplish and just isn\u2019t practical. There are many more features other developers are working on, and, more importantly, problems they are fixing. If we were to freeze the master branch in favor of one fix, other features will again have the same rebasing issue."),(0,n.kt)("p",null,"Of course, users could switch to using RealThunder\u2019s branch exclusively. Some users who are particularly sensitive to the problem have done so successfully. For commercial users this may be hard to sell to leadership because RealThunder\u2019s branch isn\u2019t able to keep pace with the development of new features in the upstream FreeCAD application. They have to make a choice between relatively stable models and having access to the new and advanced features being developed throughout the rest of FreeCAD."),(0,n.kt)("h1",{id:"whats-the-path-forward"},"What\u2019s the path forward?"),(0,n.kt)("p",null,"At the FreeCAD Day meetup in Brussels in February 2023, Ondsel and other project leaders ",(0,n.kt)("a",{parentName:"p",href:"https://forum.freecad.org/viewtopic.php?p=658250#p658250"},"proposed a different strategy for resolving the issue"),": Instead of attempting to merge RealThunder\u2019s solution as a monolithic unit, we would, instead, consider it a proof-of-concept. The solution has been running in RealThunder\u2019s LinksStage3 branch for two years and can be considered proven. Now we need to treat it as a roadmap to guide us towards implementing the solution in FreeCAD itself without disrupting current functionality or slowing down development."),(0,n.kt)("h2",{id:"progress-without-regression"},"Progress without regression"),(0,n.kt)("p",null,"Rather than merging the code directly, our proposal is to break the code into functional pieces, each of which can be merged directly into the master branch without breaking the current functionality. This will require additional testing at each step and might require additional code to permit the merging without regression."),(0,n.kt)("p",null,"With this approach, each piece will be merged directly to master along with the relevant unit tests. This will avoid the need for a long-lived feature branch that requires constant rebasing.  There will be no single point where suddenly the problem is \u2018fixed.\u2019 Instead the necessary changes will be merged gradually and model stability will increase over time."),(0,n.kt)("h2",{id:"laying-the-foundation-for-long-term-change"},"Laying the foundation for long-term change"),(0,n.kt)("p",null,"The first pieces to be merged may not provide any value to the end-user but will provide a solid foundation that later pieces can build on. As each piece is added, additional unit tests can be developed and better code conventions adopted for implementing the actual name resolution."),(0,n.kt)("p",null,"This path isn\u2019t fast. It will take time and the collective expertise of many developers. It will take cooperation throughout the community and patience from our users."),(0,n.kt)("h1",{id:"what-is-ondsels-role-in-all-this-is-ondsel-going-to-solve-the-toponaming-problem"},"What is Ondsel\u2019s role in all this? Is Ondsel going to solve the toponaming problem?"),(0,n.kt)("p",null,"Ondsel has already started a thorough survey of RealThunder\u2019s solution in order to build a roadmap for integrating it."),(0,n.kt)("p",null,"Ondsel will help coordinate the change and will participate in delivering a resolution. We can bring professional engineering talent to the problem but we ",(0,n.kt)("em",{parentName:"p"},"cannot")," do it alone. It will take time and the expertise of many software engineers across the community."),(0,n.kt)("p",null,"There\u2019s no \u201cone and done\u201d fix, which means the FreeCAD development community needs broad institutional knowledge of the solution. The toponaming problem belongs to FreeCAD and, therefore, so must the solution."),(0,n.kt)("p",null,"For more context and to follow developments as we work on breaking down and gradually merging RealThunder\u2019s fix, subscribe to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/FreeCAD/FreeCAD/issues/8432"},"the GitHub issue"),"."),(0,n.kt)("p",null,"To help us make FreeCAD better and build the Ondsel product, consider ",(0,n.kt)("a",{parentName:"p",href:"https://ondsel.com/careers/"},"joining us"),"."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Note..."),(0,n.kt)("div",null,(0,n.kt)("div",null,"I\u2019m Brad Collette, longtime FreeCAD contributor and CTO of Ondsel, a new open core company built on top of FreeCAD. Ondsel helps you share useful aspects of your solid models without giving away your designs. We\u2019re working on improving collaboration and feature accessibility and integrating with your existing tools. You can read more about my vision for FreeCAD and Ondsel ",(0,n.kt)("a",{href:"https://opencoreventures.com/blog/2023-01-ondsel-freecad-launch/"},"here")),(0,n.kt)("br",null))))}p.isMDXComponent=!0},9900:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/titlecard-b00633fdbf76d5dc177c51634100fd28.png"}}]);