"use strict";(self.webpackChunkondsel=self.webpackChunkondsel||[]).push([[898],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),h=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=h(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=h(a),d=n,m=p["".concat(l,".").concat(d)]||p[d]||c[d]||o;return a?r.createElement(m,i(i({ref:t},u),{},{components:a})):r.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var h=2;h<o;h++)i[h]=a[h];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2695:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>h});var r=a(7462),n=(a(7294),a(3905));const o={slug:"the-road-to-freecad-1-0-is-shorter-than-you-think",title:"The road to FreeCAD 1.0 is shorter than you think",description:"At the hackathon in Vancouver, FreeCAD team members formalized major roadmap items for v1.0 released. Let's talk about respective challenges.",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4"}],tags:["freecad","development"],image:"./titlecard.png",draft:!1},i=void 0,s={permalink:"/blog/the-road-to-freecad-1-0-is-shorter-than-you-think",source:"@site/blog/2023-09-05/roadto1.md",title:"The road to FreeCAD 1.0 is shorter than you think",description:"At the hackathon in Vancouver, FreeCAD team members formalized major roadmap items for v1.0 released. Let's talk about respective challenges.",date:"2023-09-05T00:00:00.000Z",formattedDate:"September 5, 2023",tags:[{label:"freecad",permalink:"/blog/tags/freecad"},{label:"development",permalink:"/blog/tags/development"}],readingTime:6.79,hasTruncateMarker:!1,authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"}],frontMatter:{slug:"the-road-to-freecad-1-0-is-shorter-than-you-think",title:"The road to FreeCAD 1.0 is shorter than you think",description:"At the hackathon in Vancouver, FreeCAD team members formalized major roadmap items for v1.0 released. Let's talk about respective challenges.",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"}],tags:["freecad","development"],image:"./titlecard.png",draft:!1},prevItem:{title:"Live merge meetings: what we learned from merging 75 pull requests in 30 days",permalink:"/blog/merge-meeting"},nextItem:{title:"Don\u2019t lose your (open-source) soul: why we founded Ondsel as a public benefit company",permalink:"/blog/dont-lose-your-open-source-soul"}},l={image:a(7499).Z,authorsImageUrls:[void 0,void 0]},h=[{value:"The toponaming fix",id:"the-toponaming-fix",level:2},{value:"The default Assembly workbench",id:"the-default-assembly-workbench",level:2},{value:"Materials",id:"materials",level:2},{value:"First-run wizard",id:"first-run-wizard",level:2},{value:"And now the fun part: can we get v1.0 out by FOSDEM 2024?",id:"and-now-the-fun-part-can-we-get-v10-out-by-fosdem-2024",level:2}],u={toc:h};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Historically, the duration of FreeCAD development cycles has been uneven, anywhere between a few months and 2+ years."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Timeline of FreeCAD releases",src:a(733).Z,width:"1161",height:"76"})),(0,n.kt)("p",null,"We already talked about reasons and ways to make releases more predictable in ",(0,n.kt)("a",{parentName:"p",href:"https://ondsel.com/blog/freecad-unpredictable-release-schedule-hurts-users-and-developers"},"one of the recent posts"),". But the truth is, this is a much older conversation that has been going on in the community for years now: at FOSDEM, in the forum, and in various other venues and social channels. The hackathon in Vancouver was a perfect opportunity for the developers community to set some boundaries for v1.0."),(0,n.kt)("p",null,"We ended up formalizing a list of ",(0,n.kt)("a",{parentName:"p",href:"https://freecad.github.io/DevelopersHandbook/roadmap/next.html"},"4 major items")," for the v1.0 roadmap that we think are a must-have to constitute the next release. None of these items are big news, we\u2019ve all known about them for a while: the complete topological naming fix, a default Assembly workbench, a new implementation of a materials system, and the first-run wizard."),(0,n.kt)("p",null,"So let\u2019s cast a quick glance at these items and talk about respective challenges."),(0,n.kt)("h2",{id:"the-toponaming-fix"},"The toponaming fix"),(0,n.kt)("p",null,"We\u2019ve already discussed this topic in the past, the ",(0,n.kt)("a",{parentName:"p",href:"https://ondsel.com/blog/milestone-toponaming-fix-phase-2-done"},"latest post from July")," covers the current state of affairs in detail. It looks like we\u2019ve already done a very difficult part of this project. Further work is not going to be easy, but the foundation for the next phases of the fix is sound."),(0,n.kt)("p",null,"The team is now approaching the third phase of the fix (out of five), there\u2019s an ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/FreeCAD/FreeCAD/issues/8432#issuecomment-1676433915"},"initial plan available"),". As the third phase is where FreeCAD actually starts using the new toponaming infrastructure, this will be a perfect opportunity for new contributors to get involved. The ",(0,n.kt)("a",{parentName:"p",href:"https://t.me/toponamingchat"},"dedicated Telegram chat")," is the right place to start."),(0,n.kt)("h2",{id:"the-default-assembly-workbench"},"The default Assembly workbench"),(0,n.kt)("p",null,"This is one of the more challenging items on the list of v1.0 deliverables. We think FreeCAD should have a capable assembly workbench and that really means two things:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"A workbench where the user configures the assembly, adding parts and establishing relationships between them."),(0,n.kt)("li",{parentName:"ol"},"A solver capable of resolving those relationships and moving the parts of the assembly appropriately.")),(0,n.kt)("p",null,"All that should be the default experience, no third-party add-ons."),(0,n.kt)("p",null,"Dr. Aik-Siong Koh, who is an employee at Ondsel, published the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Ondsel-Development/OndselSolver"},"source code of his solver")," during the hackathon. This will be one of the foundations of the coming Assembly workbench."),(0,n.kt)("p",null,"For the user-facing assembly workbench, a lot of work remains. One of the challenges will be coming up with a user interface and workflow that are both discoverable, straightforward, and expandable. It doesn\u2019t need to cover every use case.  Remember that the existing assembly options are still viable and may serve different users well. Rather the integrated solution should strive to be robust, simple to use, consistent with the rest of FreeCAD, and an excellent platform for future expansion."),(0,n.kt)("p",null,"The main challenge here will be building a team similar to the one we have for the TNP fix \u2014 a mix of Ondsel employees, FreeCAD maintainers, and 3rd party contributors. This has proven to be a great balance between interested parties, and we want to replicate that success."),(0,n.kt)("p",null,"The project will be managed as a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/orgs/FreeCAD/projects/7/views/1"},"GitHub project in the FreeCAD organization"),", with cards and issues.  Similarly to the toponaming project, we\u2019ll work in small incremental pull requests and merge the changes directly to the master branch rather than wait until the workbench is fully functional. An initial barebone implementation has already been merged to the main development branch."),(0,n.kt)("h2",{id:"materials"},"Materials"),(0,n.kt)("p",null,"The existing materials system in FreeCAD is overly simplistic, all over the place, and doesn\u2019t even scratch the surface of what users really need it to do. So the program absolutely needs a solid foundation."),(0,n.kt)("p",null,"Earlier this year, we posted an ",(0,n.kt)("a",{parentName:"p",href:"https://ondsel.com/blog/freecad-needs-a-better-materials-system/"},"implementation proposal")," for a new materials system written in collaboration with Dave Carter who volunteered to actually do the work. Dave is, in fact, knee-deep in that project and has made a lot of progress (the branch with his code is ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/davesrocketshop/FreeCAD/tree/post_21"},"public"),"). Moreover, users have been ",(0,n.kt)("a",{parentName:"p",href:"https://forum.freecad.org/viewtopic.php?t=78242"},"very supportive")," of his effort."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Editor for new material cards",src:a(2513).Z,width:"837",height:"574"})),(0,n.kt)("p",null,"The first pull request ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/FreeCAD/FreeCAD/pull/10368"},"has already been filed")," and is undergoing review. Further plan with materials is to apply the toponaming development model: break all further work down into small pieces, so that any developer could be part of that effort. Once the initial patch has been merged and further work has been decomposed into small items, more developers can join the effort. All further work will be done in pull requests. This will make it possible to deliver the minimum viable implementation in time for v1.0."),(0,n.kt)("h2",{id:"first-run-wizard"},"First-run wizard"),(0,n.kt)("p",null,"FreeCAD has a difficult learning curve. Improving the initial user experiences is a topic that resurfaces regularly. We even covered that in a recent blog post. Here is the gist of the issue."),(0,n.kt)("p",null,"First of all, people can\u2019t really agree on the scope of the first-run wizard. There are literally dozens of settings that users requested to be editable when you run the program for the first time. But when you dig deeper into the reasoning, several things become obvious."),(0,n.kt)("p",null,"First there are configuration settings for which a single default will never suffice. Language and the unit system are the two that come to mind."),(0,n.kt)("p",null,"Some configuration options appear to be personal preference but might also have more significant usability implications. For example themes and colors are personal preference, but they become extremely important if you suffer from color deficiency.  Users will never agree with each other about that, so those have to be easily configurable. "),(0,n.kt)("p",null,"Other things that people want to configure should probably be solved in other ways. A great example of this is configuring which workbenches are available and active for a new user.\nShould the system present a bewildering array of workbenches to a new user or should it hide potentially useful tools in an effort to be streamlined? Reasonable people disagree. In this case, the right answer might be to improve the Start workbench. This would provide a fast track to the workbench based on that task that they need to accomplish. Initial mockup was created and then turned into a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/FreeCAD/FreeCAD/pull/10171"},"pull request")," by Qewer during the hackathon. This patch has already been accepted and will be part of v1.0."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Updated start screen",src:a(9744).Z,width:"2560",height:"1440"})),(0,n.kt)("p",null,"On yet another level, this is a conversation about terminology. A much-discussed example here is the distinction between Part and PartDesign \u2014 users inevitably learn to understand the difference, but they are off to a rocky start, and there are some technical issues to take care of on the developers\u2019 part."),(0,n.kt)("p",null,"Hence the plan is to come up with a minimal implementation of the first-run wizard, one that would deal with things that users are split over regardless of how sensible defaults are, and then see take a holistic approach to dealing with the rest."),(0,n.kt)("h2",{id:"and-now-the-fun-part-can-we-get-v10-out-by-fosdem-2024"},"And now the fun part: can we get v1.0 out by FOSDEM 2024?"),(0,n.kt)("p",null,"We think that these goals are within reach and it should be possible to release FreeCAD 1.0 in time for the next FOSDEM. Here\u2019s our thinking behind this goal."),(0,n.kt)("p",null,"The TNP fix and the new Materials system are at the stage where the nature and the amount of work yet to be done are fairly predictable, and a large part of the heavy-lifting has already been done."),(0,n.kt)("p",null,"The initial Assembly workbench will be a challenging project, but now that we have a solver, we can start working on designing UX/UI around common use cases."),(0,n.kt)("p",null,"The design and the implementation of the first-run wizard itself would be a minor development effort, and there are people in the community who already spent a considerable amount of time creating mockups and even writing code. The challenging part will be taking a holistic approach to dealing with configuration and improving initial user experience, but we can make this effort span across multiple releases, there is so much to improve anyway."),(0,n.kt)("p",null,"To reiterate, v1.0 will definitely have changes apart from these 4 items. What we are aiming for is to start making development more predictable. Gaining some focus will help the team with both planning their work and managing expectations of FreeCAD users."))}p.isMDXComponent=!0},2513:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/materials-new-cards-editor-b1bae2dd4b5c40eea6bc33c2082c6ca8.webp"},733:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/release-timeline-a7119bd419c9407666e8f25caa72c935.webp"},7499:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/titlecard-55a9f2b2e4a19e0cd6b25a7a65e936ee.png"},9744:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/updated-start-screen-43314754a338a6b5419904668bee5343.webp"}}]);