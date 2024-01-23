"use strict";(self.webpackChunkondsel=self.webpackChunkondsel||[]).push([[3021],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>p});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),h=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=h(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=h(a),m=n,p=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return a?o.createElement(p,s(s({ref:t},u),{},{components:a})):o.createElement(p,s({ref:t},u))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:n,s[1]=i;for(var h=2;h<r;h++)s[h]=a[h];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8213:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>h});var o=a(7462),n=(a(7294),a(3905));const r={slug:"ondsel-365",title:"365 days of Ondsel",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4"}],tags:["ondsel","freecad","ux","ui"],image:"./titlecard.png",draft:!1},s=void 0,i={permalink:"/blog/ondsel-365",source:"@site/blog/2024-01-08/365days.mdx",title:"365 days of Ondsel",description:"We\u2019ve completed the first year as employees and contractors paid to hack on FreeCAD and build services around it. We do have a few things to brag about. We also had some setbacks and challenges. Since we started Ondsel with a goal to be as honest and transparent as possible, let\u2019s talk about things the team learned this year while figuring things out.",date:"2024-01-08T00:00:00.000Z",formattedDate:"January 8, 2024",tags:[{label:"ondsel",permalink:"/blog/tags/ondsel"},{label:"freecad",permalink:"/blog/tags/freecad"},{label:"ux",permalink:"/blog/tags/ux"},{label:"ui",permalink:"/blog/tags/ui"}],readingTime:8.25,hasTruncateMarker:!1,authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"}],frontMatter:{slug:"ondsel-365",title:"365 days of Ondsel",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"}],tags:["ondsel","freecad","ux","ui"],image:"./titlecard.png",draft:!1},prevItem:{title:"Introducing Ondsel ES, an engineering suite with an open-source heart",permalink:"/blog/introducing-ondsel-es"},nextItem:{title:"Survey: do engineers dream of architecture tools?",permalink:"/blog/survey-engineers-architecture"}},l={image:a(9461).Z,authorsImageUrls:[void 0]},h=[{value:"Being part of the FreeCAD community",id:"being-part-of-the-freecad-community",level:2},{value:"What worked well and what \u2014 not so much",id:"what-worked-well-and-what--not-so-much",level:2},{value:"Exploring the viability of FreeCAD as a pro tool",id:"exploring-the-viability-of-freecad-as-a-pro-tool",level:2},{value:"Takeaways",id:"takeaways",level:2},{value:"What\u2019s next?",id:"whats-next",level:2}],u={toc:h};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"We\u2019ve completed the first year as employees and contractors paid to hack on FreeCAD and build services around it. We do have a few things to brag about. We also had some setbacks and challenges. Since we started Ondsel with a goal to be as honest and transparent as possible, let\u2019s talk about things the team learned this year while figuring things out."),(0,n.kt)("h2",{id:"being-part-of-the-freecad-community"},"Being part of the FreeCAD community"),(0,n.kt)("p",null,"The majority of the team \u2014 employees and contractors alike \u2014 was already involved with the FreeCAD project one way or another prior to the launch of Ondsel."),(0,n.kt)("p",null,"I was one of the original authors of the Path workbench that I still maintain and I\u2019m one of the founding members of the FreeCAD Project Association. Ajinkya and Amritpal were former GSoC students who continued contributing after the program was over. Pierre contributed to the Sketcher workbench. Pieter created the ",(0,n.kt)("a",{parentName:"p",href:"https://osh-autodoc.org"},"OSH Automated Documentation")," workbench. Adrian who recently joined us as contractor had been release manager of FreeCAD for the past couple of years. Alex contributed translation updates and covered FreeCAD news in his blog."),(0,n.kt)("p",null,"In other words, we understand how the project works and what challenges it faces."),(0,n.kt)("p",null,"Ondsel and FreeCAD have a shared interest: making the software great, creating a thriving ecosystem around it, and encouraging more contribution. At the same time, we\u2019re different and our differences provide both opportunity and challenge.  As a startup, Ondsel has to be commercially successful and it absolutely has to hit certain financial goals in a sensible timeframe. On the other hand, Ondsel can do things that would be difficult or impossible for the FreeCAD project to achieve. Things like SaaS collaboration or CAD \u201cvaulting\u201d. We can bring focused development attention to really hard issues like toponaming and we can more effectively respond to the needs of commercial users."),(0,n.kt)("p",null,"Our differences also mean that we ",(0,n.kt)("em",{parentName:"p"},"must")," operate differently. As a company we need more predictability. If we contribute a fix or a new feature, and it passes code review but never gets merged, our effort and money is wasted.  If we want that change for our own customers then our code base starts becoming a hard fork, and those are difficult to maintain with a small team. We want to build on top of the great FreeCAD foundation. We don\u2019t want to fork it.  Early on, we asked for a more reliable process where the queue of pull requests gets reviewed on a regular basis and changes are acted on quickly. The community responded, and the merge process is now running remarkably well."),(0,n.kt)("p",null,"But guess what; It helps the FreeCAD project just as much as it helps us. Contributors don\u2019t really like when their patches are stuck in limbo for years. It hurts morale and drives contributors away. "),(0,n.kt)("h2",{id:"what-worked-well-and-what--not-so-much"},"What worked well and what \u2014 not so much"),(0,n.kt)("p",null,"Some things worked amazingly well. The merge process was definitely a huge win for everybody. The queue of active PRs is now commonly below 25 items."),(0,n.kt)("p",null,"The toponaming project is progressing well despite some tasks taking a lot of time, like the ongoing battle of the TopoShape class with its 94 methods and 5,600 lines of code. The team is now in the middle of the third phase of the project."),(0,n.kt)("p",null,"The integrated assembly workbench is shaping up really nicely, we are beginning to see users  demonstrating complexity beyond what we expected and reporting bugs and requests for improvement. The initial implementation will be minimal yet functional, with a solid foundation for further expansion."),(0,n.kt)("p",null,"Things didn\u2019t go as smoothly with UX/UI fixes. We\u2019ve had some great results with improving major parts of FreeCAD like Sketcher: new tools, ",(0,n.kt)("a",{parentName:"p",href:"https://ondsel.com/blog/floating-input-widgets/"},"floating input widgets, tool settings"),", ",(0,n.kt)("a",{parentName:"p",href:"https://ondsel.com/blog/ondsel-made-constraining-sketches-faster-and-easier/"},"easy dimensioning")," etc. Unfortunately, UI discussions on the forum and in GitHub issues continue to be emotional and often counterproductive."),(0,n.kt)("p",null,"To be honest, we \u2014 the entire FreeCAD development community \u2014 have done a poor job of talking to our users. Too often we\u2019re asking them how they want us to build the application. That\u2019s the wrong set of questions.  Instead we should be asking them ",(0,n.kt)("em",{parentName:"p"},"what they want to accomplish"),". We should be learning why they need the feature they are asking for so we can implement it in a way that makes sense. It isn\u2019t fair to expect our user base and especially our power users to also be experts in software development. That\u2019s not their role in the community."),(0,n.kt)("p",null,"FreeCAD was started by software developers who were also experts in CAD. For a long time, the community had many people like this and made great strides but these are rare people.  Now our community is much larger and has people with a diverse set of skills and experience.  Many of them are using FreeCAD to do amazing things but most aren\u2019t software developers."),(0,n.kt)("p",null,"As the project continues to mature, we need to embrace this reality.  We need to build up a team of experts who can work effectively with developers.  We need people with vision, patience, and the ability to communicate the WHY of things.  "),(0,n.kt)("p",null,"The emerging ",(0,n.kt)("a",{parentName:"p",href:"https://ondsel.com/blog/freecad-breaking-open-source-ux-curse/"},"design review team")," in the FreeCAD community as well as Ondsel haven\u2019t yet gained enough trust from the wider community. Building trust takes time.  It requires us to say what we\u2019re going to do and then follow through. It requires us to demonstrate competence and humility at the same time. I believe that FreeCAD v1.0 release will help a lot with trust simply because of all the much anticipated features and quality-of-life changes it will bring."),(0,n.kt)("h2",{id:"exploring-the-viability-of-freecad-as-a-pro-tool"},"Exploring the viability of FreeCAD as a pro tool"),(0,n.kt)("p",null,"Over the course of the entire last year, I conducted several dozen interviews with users from all walks of life: hobbyists, freelance engineers, small business owners, CTOs of larger companies. The frustrating part is that it\u2019s pretty damn hard to find people who do commercial work with FreeCAD. This is an existential problem for the FreeCAD project and also for Ondsel. "),(0,n.kt)("p",null,"Commercial work is all about turnover, efficiency, and stability. When a software project focuses on building for a commercial audience, the resulting application works for commercial users as well as for hobbyists and other enthusiasts. "),(0,n.kt)("p",null,"Commercial users push development of advanced features and bring resources that can fund that development. But if the project focuses on meeting every niche desire and special case, if it rushes development features that should be more thoroughly investigated and implemented carefully, if it caters exclusively to the enthusiasts, then the result is hard to learn and maintain.  It won\u2019t be adopted by commercial users at all. "),(0,n.kt)("p",null,"The project is maturing and it\u2019s time to be more focused on building relationships with users that will demand stability and ease of use as well as advanced features."),(0,n.kt)("p",null,"In that sense, getting Stephen Hawes from ",(0,n.kt)("a",{parentName:"p",href:"https://www.opulo.io/"},"Opulo")," into the FPA general assembly recently was a smart move. Opulo is a small startup that uses FreeCAD extensively to build their Lumen Pick-and-Place machine."),(0,n.kt)("h2",{id:"takeaways"},"Takeaways"),(0,n.kt)("p",null,"What have we learned?"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Faster release cycles and clear release goals benefit everyone.")," We\u2019ve seen an overwhelmingly positive community\u2019s response to the idea that releases should be more frequent and more focused. It also helps the developers make decisions based on priorities. It worked well for us in the past, e.g. when we built a release goal around migrating to Qt5 and when we focused on supporting Python 3, for example. These kinds of release goals work.  Let\u2019s do more of them."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"We need more \u2018better\u2019 communication.")," Both weekly PR review meetings, bi-weekly TNP meetings, and monthly developer meetings were a tremendous success in terms of helping contributors communicate to each other and sync on their plans. Continuing that is a bare minimum."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"We need more \u2018high expense\u2019 communication.")," When we did the assembly WB review series and offered a path forward, there was very little unproductive discussion. People mostly got on with that. And now the first feedback we are getting is that workflow-wise the integrated assembly workbench is more or less what people had hoped for. But communicating this way is expensive. There\u2019s a lot of research hours put into this project prior to any coding (which is also not cheap). We need more research like that to help unify vision and clarify goals."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"The project needs more trust between stakeholders.")," The FreeCAD project has been going through massive changes for the past few years: new faces, new unusual roles, a non-profit organization backing it, the first company building around FreeCAD commercially etc. This is a lot to take in. We need to find a way to communicate better with each other and build stronger relationships to succeed."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"The \u2018commercial\u2019 user base of FreeCAD is too small.")," The perception among commercial users is that FreeCAD isn\u2019t ready for real work. We think otherwise. Ondsel doesn\u2019t have to be all things to all users. It is perfectly capable of meeting many needs that commercial users have now.  What\u2019s required is a focus on exposing that capability to a wider audience of commercial users and a focus on minimizing the weaknesses as fast as possible. If we want FreeCAD to excel, we need to talk to people who use CAD programs for work, and we need to do it all the time."),(0,n.kt)("h2",{id:"whats-next"},"What\u2019s next?"),(0,n.kt)("p",null,"Our plan is to release a build of FreeCAD that is targeted at commercial users \u2014 with more polish all around and an initial version of the integrated assembly workbench, as well as with collaboration and sharing tools."),(0,n.kt)("p",null,"We have more interviews already scheduled and we\u2019ll continue listening to users \u2014 those who succeeded using FreeCAD for work and those who struggled and chose something else instead. We\u2019ll also invest more time into strengthening our relationship with the FreeCAD community."),(0,n.kt)("p",null,"For now, you can ",(0,n.kt)("a",{parentName:"p",href:"https://ondsel.com/download"},"grab the latest Ondsel build")," of FreeCAD, give it a spin and ",(0,n.kt)("a",{parentName:"p",href:"https://discord.com/invite/7jmzezyyfP"},"join our Discord server")," to tell us about your challenges."))}d.isMDXComponent=!0},9461:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/titlecard-2b8ff0690e483e7f981cf951a5eee9f3.png"}}]);