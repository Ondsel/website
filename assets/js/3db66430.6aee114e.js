"use strict";(self.webpackChunkondsel=self.webpackChunkondsel||[]).push([[8503],{3905:(e,t,o)=>{o.d(t,{Zo:()=>h,kt:()=>m});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},h=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),p=d(o),c=a,m=p["".concat(l,".").concat(c)]||p[c]||u[c]||r;return o?n.createElement(m,s(s({ref:t},h),{},{components:o})):n.createElement(m,s({ref:t},h))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,s=new Array(r);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var d=2;d<r;d++)s[d]=o[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},5507:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var n=o(7462),a=(o(7294),o(3905));const r={slug:"foss-projects-need-product-owners",title:"FOSS projects like FreeCAD suffer without product owners",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4"}],tags:["freecad","development"],image:"./titlecard.png",draft:!1},s=void 0,i={permalink:"/blog/foss-projects-need-product-owners",source:"@site/blog/2024-02-15/product-owners.mdx",title:"FOSS projects like FreeCAD suffer without product owners",description:"FOSS projects often struggle to build and follow a coherent development roadmap that lets contributors add new features while also improving code quality, removing deprecated features, and generally improving the application. After all, it\u2019s more fun to work on new features than it is to write unit tests, refactor code, and fix bugs.",date:"2024-02-15T00:00:00.000Z",formattedDate:"February 15, 2024",tags:[{label:"freecad",permalink:"/blog/tags/freecad"},{label:"development",permalink:"/blog/tags/development"}],readingTime:8.775,hasTruncateMarker:!0,authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"}],frontMatter:{slug:"foss-projects-need-product-owners",title:"FOSS projects like FreeCAD suffer without product owners",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"}],tags:["freecad","development"],image:"./titlecard.png",draft:!1},prevItem:{title:"The typical user doesn't exist: FreeCAD user survey results (part 1)",permalink:"/blog/freecad-user-survey-results-part-1"},nextItem:{title:"Introducing Ondsel ES, an engineering suite with an open-source heart",permalink:"/blog/introducing-ondsel-es"}},l={image:o(8614).Z,authorsImageUrls:[void 0]},d=[{value:"Who is a product owner?",id:"who-is-a-product-owner",level:2},{value:"FreeCAD has done fine without product owners until now. Why change?",id:"freecad-has-done-fine-without-product-owners-until-now-why-change",level:2},{value:"This isn\u2019t a novel concept",id:"this-isnt-a-novel-concept",level:2},{value:"Next steps",id:"next-steps",level:2}],h={toc:d};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"FOSS projects often struggle to build and follow a coherent development roadmap that lets contributors add new features while also improving code quality, removing deprecated features, and generally improving the application. After all, it\u2019s more fun to work on new features than it is to write unit tests, refactor code, and fix bugs."),(0,a.kt)("p",null,"Young projects don\u2019t have much technical debt and usually only have a couple contributors. The code base is small. Most of the people working on it share a common vision and understand how the code serves that purpose. As the project grows and attracts users, contributions come from people who don\u2019t share the original vision. The project may have to choose between accepting a poorly implemented feature or rejecting it and losing a potentially valuable contributor. Technical debt increases and it becomes difficult to make substantial changes."),(0,a.kt)("p",null,"Mature projects, in contrast, have built up systems and processes to manage technical debt. But this transition from adolescence to maturity is rough.  FOSS projects that have successfully made that transition share some similarities. They often have a company or a non-profit organization backing the development. They have strong leadership and well defined guidelines for contributions. They also have both software developers and domain experts contributing to the development roadmap."),(0,a.kt)("p",null,"The importance of the domain experts can\u2019t be overstated. Sometimes called \u201cproduct owner\u201d, this person serves a key role. Let\u2019s talk about this role in software projects: why it\u2019s a must in software development in general, why there aren\u2019t many of them in FOSS projects, and what projects like FreeCAD could do to get them."),(0,a.kt)("h2",{id:"who-is-a-product-owner"},"Who is a product owner?"),(0,a.kt)("p",null,"The \u201cproduct vision\u201d is the future state of the product that an organization is bringing to life. It\u2019s the shared goal about where the development is heading. The main job of a product owner (PO) is to maintain the product vision and ensure its consistent implementation.  This sets a number of expectation of a PO:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Domain expertise.")," The product owner needs to be a generalist, someone who follows the industry, knows about new developments, knows what everybody is talking about and why they are talking about it. Deep technical knowledge is  important but so is understanding how a tool gets used in a wide range of contexts."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Basic understanding of the software development process.")," A good PO doesn\u2019t need to be capable of writing great code, but they should be comfortable translating user language to developers language and back. They should also be at home with basic software development methodologies."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Organization skills.")," POs do not manage the development process, but they help organize it and play a major role in setting priorities: what gets developed first and what should wait until the next step.")),(0,a.kt)("p",null,"Here are some of the things that a product owner might do on a daily basis:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Talk to users and stakeholders to refine the product vision and document it."),(0,a.kt)("li",{parentName:"ul"},"Clarify feature requests and bug reports to understand ",(0,a.kt)("em",{parentName:"li"},"why")," the feature is needed or how a bug is affecting users."),(0,a.kt)("li",{parentName:"ul"},"Make decisions that affect development, such as priority and scope of tasks, as well as trade-offs where they have to keep in mind business value, needs of users, and a variety of constraints."),(0,a.kt)("li",{parentName:"ul"},"Maintain the product backlog and user stories to keep them up-to-date."),(0,a.kt)("li",{parentName:"ul"},"Work with product owners of other applications or other parts of the same application to identify shared goals, communicate priority, find opportunities for collaboration, and avoid risk."),(0,a.kt)("li",{parentName:"ul"},"Manage risks by adjusting priorities, scope of tasks, and allocated resources to support a workable development plan.")),(0,a.kt)("p",null,"POs tend to have a pretty good grasp of reality: what customers want and \u2014 more importantly \u2014 what they ",(0,a.kt)("em",{parentName:"p"},"need"),". The distinction between \u201cwant\u201d and \u201cneed\u201d is vital. POs don\u2019t just understand ",(0,a.kt)("em",{parentName:"p"},"what")," is important, they understand ",(0,a.kt)("em",{parentName:"p"},"why")," it matters and they can explain it."),(0,a.kt)("p",null,"While users might be quick to suggest is a new option or feature, implementing everything without a plan results in application bloat, preference creep,  and makes the overall user experience worse. I knowledgable PO will understand what the user needs and will seek ways to meet the need without comprising application quality.  It takes a particular mindset and set of skills to see the real solution and to get a team to build it."),(0,a.kt)("p",null,"Product owners work closely with the development team.  The understand the strengths and weaknesses of the team and what each person already has on their plate.  The can help schedule and prioritize tasks so the team can move fast to reach goals. They\u2019re often the first to recognize new talent and expand the organization. They are best positioned to make trade-offs between the changes that users request and the time, budget, and technical debt that the change incurs."),(0,a.kt)("p",null,"This means product owners pretty much sit at the junction of UX, technology, and business. That makes them uniquely qualified to guard the vision for the product."),(0,a.kt)("p",null,"In a professional development shop, POs play a vital and necessary role and they have a lot of authority. In FOSS projects, this would never work. Such central control doesn\u2019t exist in projects comprised primarily of volunteers. In order to be effective, a PO would need to excel through encouragement, persuasion, and influence. They need to build consensus and be excellent at communicating."),(0,a.kt)("h2",{id:"freecad-has-done-fine-without-product-owners-until-now-why-change"},"FreeCAD has done fine without product owners until now. Why change?"),(0,a.kt)("p",null,"FreeCAD has historically had maintainers who each oversee a workbench or a functional area. They coordinate development and collectively have the final word on pull requests. This combines the role of the PO (domain expert) and maintainer (code expert) into one person. This model works reasonably well early but tends to break down when the maintainer leaves the project. It\u2019s easy to see why. The loss of a single person eliminates both domain and code expertise and it is nearly impossible to find someone else capable of assuming the role."),(0,a.kt)("p",null,"I can speak from personal experience how difficult it is to maintain a workbench. Even though I\u2019m one of the original authors and current maintainer of the Path (CAM) workbench, I have no professional experience with CNC/CAM. I lack deep domain expertise.   While I get lots of support from our power users, I still struggle to know what features we should build and in what order. As maintainer of Path, I would  welcome a product owner to help establish a vision and organize us to build it."),(0,a.kt)("p",null,"Apart from Path, another example is the FEM workbench. Most contributions lately are coming from ",(0,a.kt)("em",{parentName:"p"},"marioalexis84")," who now has a grant from the FreeCAD Project Association to work on electromagnetic system simulations. But the workbench currently lacks an active captain.  It needs someone in a leadership position to set priorities straight and attract new contributors. To aid that, ",(0,a.kt)("em",{parentName:"p"},"NewJoker")," recently created a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/orgs/FreeCAD/projects/19"},"project board")," for the FEM workbench. We think this could be a great test case for the entire idea of product owners in FreeCAD and we encourage the community to support them."),(0,a.kt)("h2",{id:"this-isnt-a-novel-concept"},"This isn\u2019t a novel concept"),(0,a.kt)("p",null,"FreeCAD wouldn\u2019t be the first project to organize itself this way. There are some great examples of FOSS projects with product owners that we can learn from."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"MuseScore Studio")," (formerly MuseScore) and ",(0,a.kt)("strong",{parentName:"p"},"Audacity"),", both currently under the wing of ",(0,a.kt)("a",{parentName:"p",href:"https://www.mu.se/"},"Muse Group"),". The company originally hired Martin Keary as head of design, who then hired Bradley Kunda to design UX/UI and later promoted him to become the product owner of MuseScore Studio. Bradley played a large role in the v4.0 release in 2022 and supervised the release of v4.1 and v4.2 in 2023 \u2014 all with major new features and quality-of-life improvements."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.blender.org/"},(0,a.kt)("strong",{parentName:"a"},"Blender"))," is the darling of the FOSS community but also quite an exception in terms of how everything is organized. They have a physical location where people come to work, and their Studio team of animators and CG artists has direct access to developers \u2014 a development model that is rather hard to copy for other projects. Blender divides the project into modules and assign module owners. Module owners are primarily developers, but they also \u201cdecide on implementation and design issues ","[...]"," and approve or reject patches and feature requests\u201d. While Blender doesn't use the term \u201cproduct owners\u201d, the important thing is the close working relationship between those responsible for the code and those with deep domain expertise."),(0,a.kt)("h2",{id:"next-steps"},"Next steps"),(0,a.kt)("p",null,"We\u2019re glad to see FreeCAD is starting to take steps in this area and we think the project should go farther and try to identify other areas where product owners could make a positive change by working in parallel with the maintainers.   We\u2019d love to be able to tell you how that should happen, but alas, herein lies the problem."),(0,a.kt)("p",null,"There is no good place to have a discussion about how the project should be managed and a roadmap developed. Moreover, there is simply no established process to assign product owners. Even maintainers just \u201chappen\u201d: people do great work, get silently accepted by the community in a leadership role, then someone with enough privileges on GitHub gives them the rights to merge PRs.  Strangely, this bottom-up organic process has worked and might work equally well for product owners."),(0,a.kt)("p",null,"Ondsel is not calling for a formal structure to be implemented. We\u2019re not asking for product owners to be appointed and rule with an iron fist. We\u2019re suggesting that having people in this role will lead to a different set of conversations. It will lead to a better decision making process and more transparency.  It should lead to less conflict on the forum and better capture of ideas in Github issues."),(0,a.kt)("p",null,"This lack of a formal process is less of an issue than not having product owners in the FreeCAD community. Establishing a way to formally elect or appoint POs can happen down the road if having them improves the development process. The first step is to identify people who can do the work and start building trust and procedures that work. There are multiple communication channels: the forum, the Discord server, /r/FreeCAD, various social networks. Let\u2019s have discussions there and see if there\u2019s a general consensus about the following things:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Who would make good product owners?"),(0,a.kt)("li",{parentName:"ul"},"What FreeCAD modules do you think would benefit from a strategic vision?"),(0,a.kt)("li",{parentName:"ul"},"What other projects do you think have done it well?"),(0,a.kt)("li",{parentName:"ul"},"What can we learn from their experience?")),(0,a.kt)("p",null,"We\u2019ll watch discussions in these communication channels closely and do another post with takeaways."))}p.isMDXComponent=!0},8614:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/titlecard-014c5696ea5bd6493e205eafd4e8a57c.png"}}]);