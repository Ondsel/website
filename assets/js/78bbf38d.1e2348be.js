"use strict";(self.webpackChunkondsel=self.webpackChunkondsel||[]).push([[2405],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),h=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=h(r),d=n,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||o;return r?a.createElement(m,i(i({ref:t},c),{},{components:r})):a.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var h=2;h<o;h++)i[h]=r[h];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4e3:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>h});var a=r(7462),n=(r(7294),r(3905));const o={slug:"freecad-breaking-open-source-ux-curse",title:"Open Source UX/UI is notoriously bad. How FreeCAD is breaking the curse",description:"This new initiative by FreeCAD contributors will hopefully bring much desired systemic UX/UI improvements to the program.",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4"}],tags:["freecad","ux","ui"],image:"./titlecard.png",draft:!1},i=void 0,s={permalink:"/blog/freecad-breaking-open-source-ux-curse",source:"@site/blog/2023-11-15/ui-ux-curse.mdx",title:"Open Source UX/UI is notoriously bad. How FreeCAD is breaking the curse",description:"This new initiative by FreeCAD contributors will hopefully bring much desired systemic UX/UI improvements to the program.",date:"2023-11-15T00:00:00.000Z",formattedDate:"November 15, 2023",tags:[{label:"freecad",permalink:"/blog/tags/freecad"},{label:"ux",permalink:"/blog/tags/ux"},{label:"ui",permalink:"/blog/tags/ui"}],readingTime:4.43,hasTruncateMarker:!1,authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"}],frontMatter:{slug:"freecad-breaking-open-source-ux-curse",title:"Open Source UX/UI is notoriously bad. How FreeCAD is breaking the curse",description:"This new initiative by FreeCAD contributors will hopefully bring much desired systemic UX/UI improvements to the program.",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"}],tags:["freecad","ux","ui"],image:"./titlecard.png",draft:!1},prevItem:{title:"Christmas comes early! A pre-release of the integrated assembly workbench",permalink:"/blog/assembly-wb-prerelease"},nextItem:{title:"Ondsel added integrated assembly to the FreeCAD core finally solving the largest missing feature",permalink:"/blog/assembly-workbench-preview"}},l={image:r(5380).Z,authorsImageUrls:[void 0]},h=[],c={toc:h};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Free and Open-Source Software has a reputation for poor usability and user experience (UX).  FreeCAD is no exception. Some of the most common complaints raised by users are about the steep learning curve, inconsistent workflow, and ugly, confusing user-interface (UI). There are dozens of threads on the forum going back years where someone has come forward with a vision to \u2018fix\u2019 the usability problem. These efforts always devolve into bike-shedding, and nitpicking. Nothing changes."),(0,n.kt)("p",null,"Why does this keep happening?  After all, UI/UX is an established discipline. There are books and published research about it.  There are ",(0,n.kt)("a",{parentName:"p",href:"https://www.nngroup.com/"},"consultants")," and \u2018best practices\u2019.  Why is it so hard to make progress?"),(0,n.kt)("p",null,"The answer is that like other parts of the umbrella discipline called ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Human_factors_and_ergonomics"},"\u2018human factors\u2019"),", UI/UX is all about humans and humans are messy.   Unlike source code that either works or doesn\u2019t, there are many ways to skin the usability cat.  Most of us use software all the time with no appreciation or understanding of why it\u2019s good or bad. We know good design when we see it but most of us can\u2019t say why it\u2019s good.  When we use software that we like, we attribute our positive perception to whichever UI elements we notice.  We overlook the thousands of other elements that don\u2019t catch our attention because they just work right."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Mary likes the way DoodlyCAD uses ribbon bars.  FreeCAD doesn\u2019t have ribbon bars and that\u2019s why she hates FreeCAD.  She didn\u2019t notice that DoodlyCAD has consistent task panels, great use of screen real estate, and excellent discoverability of features.")),(0,n.kt)("p",null,"\u201cOk, smart guy\u201d, I hear you say.  \u201cIs the situation hopeless?  Can we possibly make progress in this area?\u201d.  Yes, dear reader, I think we can.  In fact, I think we are!  A small but industrious team led by Obelisk on the FreeCAD Discord server has started an initiative that aims to avoid the pitfalls of the past and move us in a direction that is data- and research-driven, productive, and sustainable. "),(0,n.kt)("p",null,"The approach they are taking starts with first principles of UI/UX design.  If you spend time reading the channel, you\u2019ll hear terms like ",(0,n.kt)("a",{parentName:"p",href:"https://lawsofux.com/fittss-law/"},"Fitts law"),", ",(0,n.kt)("a",{parentName:"p",href:"https://medium.com/weavedesign/the-doherty-threshold-and-designing-for-human-computer-interaction-f0a47c8ab583"},"Doherty threshold"),", ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hick%27s_law"},"Hick-Hyman"),", and ",(0,n.kt)("a",{parentName:"p",href:"https://www.nngroup.com/articles/ten-usability-heuristics/"},"Usability-Heuristics"),". Rather than focusing on individual features, they are establishing an overarching conception of how the user experience should be organized.  This isn\u2019t a bold new vision with grand unattainable goals.  It first seeks to understand and document how the FreeCAD experience works when it works well. That documentation is the ",(0,n.kt)("a",{parentName:"p",href:"https://freecad.github.io/DevelopersHandbook/stylebook/"},"Design Guide"),"."),(0,n.kt)("p",null,"As the design guide matures, we can use the guidelines to review the user experience when it doesn\u2019t work well and improve it without introducing new inconsistencies."),(0,n.kt)("p",null,"The project has larger goals.  They\u2019re spending considerable time talking about zones of the UI, task flow, and what the default configuration should be.  They\u2019re also thinking about how UI templates can be created that make it easier for developers to implement new functionality without needing to reinvent the wheel every time.   Effort has been spent on recommendations for color use, code structure, and other details that will help addon developers make their contributions feel like a native part of FreeCAD."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\"After more than 20 years of development by a global community of volunteers, an incredibly complex and advanced set of features is available in FreeCAD. My hope is to leverage all of the incredible time and effort invested by that community to present a coherent vision for both beginner and advanced users that is based on strong principles. With the highly anticipated 1.0 release on the horizon an opportunity to help provide a positive 'out-of-the-box' experience and improve general productivity is extremely exciting.\" -Joe Sardos (Obelisk)")),(0,n.kt)("p",null,"Yet, it\u2019s the short-term objectives that are likely to make the biggest difference soon.  Identifying the easy fixes where user pain can be alleviated fast doesn\u2019t just fix the problems, it gives new developers an easy on-ramp to start contributing code that will get merged.  Documenting the glossary helps with documentation, translation, and the design of future features. Clear guidelines on UI elements makes it easier to develop features and it also speeds up the review and approval process which takes load off of the maintainers.  It also makes documentation easier to write and faster to translate."),(0,n.kt)("p",null,"If our enthusiasm for this project isn\u2019t clear, let me give you a few more reasons why we\u2019re so excited this is happening and so honored to participate.   First, the data-driven and research based approach helps eliminate the toxic in-fighting on the forum.  That\u2019s something we can all get behind.  The effort is community-led but not developer driven.  In our opinion, it\u2019s wonderful to see other kinds of experts getting involved in open-source work.  We would love to see FOSS being a place for UI/UX experts to build experience and ultimately a career.  And finally, it provides another opportunity for the FPA to financially advance the project. The FPA is now ",(0,n.kt)("a",{parentName:"p",href:"https://fpa.freecad.org/programs/fpadf-announcement"},"offering grants")," to train UI/UX contributors who commit to work on this for an extended period. "),(0,n.kt)("p",null,"Unlike other development efforts like the ",(0,n.kt)("a",{parentName:"p",href:"https://ondsel.com/blog/freecad-needs-a-better-materials-system/"},"Material system overhaul")," or the ",(0,n.kt)("a",{parentName:"p",href:"https://ondsel.com/blog/default-assembly-workbench-7/"},"Assembly Workbench"),",  improving the UI is a long-term commitment.  It\u2019s many, ",(0,n.kt)("em",{parentName:"p"},"many")," small improvements over time and not a single major push from a few people.  It will take time but it will work.  We\u2019re on our way to a great user experience.  Forward!"))}u.isMDXComponent=!0},5380:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/titlecard-b749e31c3475b53baa4ec4746a2dd757.png"}}]);