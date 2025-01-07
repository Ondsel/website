"use strict";(self.webpackChunkondsel=self.webpackChunkondsel||[]).push([[3887],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),h=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=h(a),p=s,m=d["".concat(l,".").concat(p)]||d[p]||u[p]||r;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,o=new Array(r);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:s,o[1]=i;for(var h=2;h<r;h++)o[h]=a[h];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},96149:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>h});var n=a(87462),s=(a(67294),a(3905));const r={slug:"catia-suffers-from-the-same-problems",title:"CATIA suffers from the same problems that Ondsel / FreeCAD are solving. And it's expensive",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Aleksandr Prokudin",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4"}],tags:["ondsel","freecad","catia"],image:"./titlecard.png",draft:!1},o=void 0,i={permalink:"/blog/catia-suffers-from-the-same-problems",source:"@site/blog/2024-04-22/catia.mdx",title:"CATIA suffers from the same problems that Ondsel / FreeCAD are solving. And it's expensive",description:"\u201cOnce you get past the part design workbench in software], it becomes apparent that [software] is like 10 different software packages integrated into one.\u201d \u2014 [r53toucan on Reddit.",date:"2024-04-22T00:00:00.000Z",formattedDate:"April 22, 2024",tags:[{label:"ondsel",permalink:"/blog/tags/ondsel"},{label:"freecad",permalink:"/blog/tags/freecad"},{label:"catia",permalink:"/blog/tags/catia"}],readingTime:6.17,hasTruncateMarker:!0,authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Aleksandr Prokudin",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"}],frontMatter:{slug:"catia-suffers-from-the-same-problems",title:"CATIA suffers from the same problems that Ondsel / FreeCAD are solving. And it's expensive",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Aleksandr Prokudin",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"}],tags:["ondsel","freecad","catia"],image:"./titlecard.png",draft:!1},prevItem:{title:"Exploded Views:  New tool enhances TechDraw and Assembly workbenches",permalink:"/blog/exploded-views-in-assembly-workbench"},nextItem:{title:"Addons like SheetMetal need to be planned and developed like the rest of FreeCAD",permalink:"/blog/sheetmetal-strategy"}},l={image:a(26424).Z,authorsImageUrls:[void 0,void 0]},h=[{value:"A bit of history",id:"a-bit-of-history",level:2},{value:"Advantages and struggles",id:"advantages-and-struggles",level:2},{value:"Collaboration",id:"collaboration",level:2},{value:"The cost",id:"the-cost",level:2},{value:"Putting things in perspective",id:"putting-things-in-perspective",level:2},{value:"How Ondsel/FreeCAD is handling the same issues",id:"how-ondselfreecad-is-handling-the-same-issues",level:2},{value:"Do users care?",id:"do-users-care",level:2},{value:"Is it right for you?",id:"is-it-right-for-you",level:2}],c={toc:h};function d(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u201cOnce you get past the part design workbench in ","[software]",", it becomes apparent that ","[software]"," is like 10 different software packages integrated into one.\u201d \u2014 ",(0,s.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/engineering/comments/djj2q9/comment/f45ikk9/"},"r53toucan on Reddit"),".")),(0,s.kt)("p",null,"if you think this user is talking about FreeCAD, you're wrong. It\u2019s CATIA \u2014 a generations-old 3D CAD program that served as an inspiration in the early days of FreeCAD. The two programs share more than just some core concepts: they\u2019ve been struggling with many of the same issues and went in different directions to fix them."),(0,s.kt)("p",null,"A lot of companies that use CATIA are interested in migrating away and are looking at open-source alternatives. It's a good time to look at the reasons why and consider what they could be looking for in an open-source program such as Ondsel ES."),(0,s.kt)("h2",{id:"a-bit-of-history"},"A bit of history"),(0,s.kt)("p",null,"First off, CATIA isn\u2019t just old, it\u2019s ",(0,s.kt)("em",{parentName:"p"},"ancient"),". The project was started in 1977 by Dassault Syst\xe8mes for designing fighter jets. That was back when Jimmy Carter was president, and disco was all the rage. Even today, when you ask which Dassault\u2019s software you should pick, CATIA or SolidWorks, you are likely to hear something along the lines of \u201cif it has wheels or wings, go CATIA\u201d. Many big names in the automotive and aerospace industries rely on this software, both in the US and the EU."),(0,s.kt)("p",null,"Dassault has been very conservative about updating the software, and users are equally conservative about upgrading. They released v5 in 1998, then v6 in 2009. Both are still widely used.  Since 2014 they\u2019ve been trying hard to get everyone to switch to 3DEXPERIENCE CATIA."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u201c...in aerospace most projects are decades old at this point, so you must learn the older version in order to support them.\u201d - ",(0,s.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/engineering/comments/51rnly/comment/d7ebs0k/"},"XAeroR35"))),(0,s.kt)("h2",{id:"advantages-and-struggles"},"Advantages and struggles"),(0,s.kt)("p",null,"For the original desktop software (v5 and v6), some of the benefits (e.g. over SolidWorks) are very decent performance when handling large assemblies, stability, and great surfacing tools. More than that, CATIA v5/v6 comes with a file-based product lifecycle management (PLM) system."),(0,s.kt)("p",null,"But software packages don\u2019t get to be 47 years old and retain their users without making some serious trade-offs. In the case of CATIA, that seems to be largely about user experience. Both v5 and v6 are difficult to master. They have a dated UI that clearly shows its design origins in the 1990\u2019s. Some of these issues will look painfully familiar to users of FreeCAD:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"UX/UI in CATIA",src:a(65396).Z,width:"893",height:"586"})),(0,s.kt)("p",null,"Source: ",(0,s.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/CATIA/comments/1bd27vs/what_is_this_icon_how_can_i_access_the_sketches/"},"what is this icon?! How can I access the sketches on this element?")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"UX/UI in FreeCAD",src:a(83906).Z,width:"1255",height:"657"})),(0,s.kt)("p",null,"Source: ",(0,s.kt)("a",{parentName:"p",href:"https://forum.freecad.org/viewtopic.php?t=77373"},"What does this little purple icon near sketch icon mean?")),(0,s.kt)("p",null,"As software goes, CATIA v5/v6 is unforgiving. You have to use the functions exactly as they're made, and you don\u2019t have the luxury of shortcuts and keyboard accelerators for tools. UI customization is limited or non-existent."),(0,s.kt)("p",null,"It\u2019s not that the original CATIA is poorly designed \u2014 it isn\u2019t. It simply hasn\u2019t kept up with the times."),(0,s.kt)("h2",{id:"collaboration"},"Collaboration"),(0,s.kt)("p",null,"Dassault clearly understands the importance of collaboration and has for a long time.  They included a native PLM solution long ago. A while back, Dassault started to work on their UI/UX problems and they started by updating their collaboration tools. 3DEXPERIENCE is a newer cloud-based suite that includes a PLM platform and a modernized version of CATIA.  Unfortunately, both the new CATIA and the underlying platform arrived with their own quirks that have alienated many customers."),(0,s.kt)("p",null,"Users commonly cite frustrations with frequent crashes especially when performing complex operations, and documentation never catching up with development etc. The database approach to organizing projects (you need to tag files) and managing revisions sometimes leads to loss of important data. The experience is sufficiently infuriating that some users want to go back to older PDM/PLM solutions by Dassault or switch to newer ones by other vendors."),(0,s.kt)("h2",{id:"the-cost"},"The cost"),(0,s.kt)("p",null,"And let\u2019s take a minute to talk about the cost. The pricing varies a lot year to year, but also depends on what modules you need and other factors that Dassault doesn\u2019t disclose openly. You need to request a quote from a distributor. But there\u2019s no arguing that CATIA is expensive \u2014 really expensive. It\u2019s at least in the early 5 figures for the one-time payment and at least $2,000 for further annual license maintenance \u2014 per seat."),(0,s.kt)("p",null,"Pretty much the same goes for 3DEXPERIENCE CATIA. At this price point the product still causes a lot of frustration with frequent bugs and lukewarm customer support (a thread like ",(0,s.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/SolidWorks/comments/1al1jtr/3dexperience_really_that_bad/"},"this one")," will give you a pretty good idea)."),(0,s.kt)("h2",{id:"putting-things-in-perspective"},"Putting things in perspective"),(0,s.kt)("p",null,"While some customers need the stability of this old software and its proven performance, many are looking at the rapidly improving landscape of alternatives \u2014 including open-source ones \u2014 and are interested in migrating. This is evident even by looking at this Google Trends chart:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"CATIA interest over years",src:a(31006).Z,width:"2106",height:"786"})),(0,s.kt)("p",null,"Let\u2019s put things in perspective and compare that to some other commercial offerings:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"CATIA vs SolidWorks, NX, Inventor",src:a(12854).Z,width:"2106",height:"786"})),(0,s.kt)("p",null,"Blue: CATIA. Red: NX. Yellow: SolidWorks. Green: Inventor. "),(0,s.kt)("p",null,"Did the new 3DEXPERIENCE platform help things along? If you trust Google Trends data, it appears that the new platform hasn\u2019t succeeded in picking up the waning interest in CATIA."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"CATIA vs 3DEXPERIENCE",src:a(16197).Z,width:"2106",height:"786"})),(0,s.kt)("p",null,"Blue: CATIA. Red: 3DEXPERIENCE"),(0,s.kt)("h2",{id:"how-ondselfreecad-is-handling-the-same-issues"},"How Ondsel/FreeCAD is handling the same issues"),(0,s.kt)("p",null,"Comparing CATIA and Ondsel/FreeCAD is comparing apples and oranges. They have different users, history, architecture and geometry kernels. But FreeCAD was ",(0,s.kt)("a",{parentName:"p",href:"https://wiki.freecad.org/History"},"heavily inspired by CATIA")," and shares many core concepts. FreeCAD\u2019s UI borrows ideas from CATIA and, subsequently, suffers many of the same shortcomings. It\u2019s enlightening to see how the open-source community addresses the same problems."),(0,s.kt)("p",null,"For the UI/UX challenges, the larger FreeCAD community is doing something that Dassault isn\u2019t doing. Rather than scrapping everything and starting all over again (with mixed results), it is working to resolve the problems incrementally: mitigating the toponaming issue, improving UX/UI, building a better materials system, adding an integrated assembly workbench, and more. "),(0,s.kt)("p",null,"At Ondsel, we\u2019re working to address the collaboration piece. Our PDM system (Lens) integrates directly into the desktop software. We\u2019re also shipping our own flavor of the desktop software with Lens integration and an even more polished user experience."),(0,s.kt)("h2",{id:"do-users-care"},"Do users care?"),(0,s.kt)("p",null,"The recent user survey came with several eye-openers, one of them being a ",(0,s.kt)("a",{parentName:"p",href:"https://ondsel.com/blog/freecad-user-survey-results-part-1/"},"larger percentage")," of professional FreeCAD users than we expected \u2014 nearly 45% of the sampling (650 respondents). This doesn\u2019t mean that FreeCAD could be a drop-in replacement for any other commercial CAD program (it simply doesn\u2019t work that way). But, again, once you put things in perspective, things have been changing\u2026"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"CATIA vs FreeCAD",src:a(81110).Z,width:"2106",height:"786"})),(0,s.kt)("p",null,"Blue: CATIA. Red: FreeCAD."),(0,s.kt)("p",null,"It\u2019s easy to argue that the price point of either FreeCAD or Ondsel ES + Lens makes them a more favorable choice as compared to Dassault\u2019s offerings. But that is not the only decision factor, and for a good reason."),(0,s.kt)("h2",{id:"is-it-right-for-you"},"Is it right for you?"),(0,s.kt)("p",null,"Ondsel probably isn\u2019t the right choice for the most demanding engineering tasks yet but it is moving in that direction.  In the meantime, Ondsel users are enjoying a powerful, efficient, and attractive design tool at a fraction of the cost of commercial tools like CATIA.  And it comes with an enthusiastic community and new updates that happen more frequently than the US census."),(0,s.kt)("p",null,"You can follow our progress in the ",(0,s.kt)("a",{parentName:"p",href:"https://ondsel.com/blog"},"blog")," and on ",(0,s.kt)("a",{parentName:"p",href:"https://ondsel.com/contact/"},"social media")," or ",(0,s.kt)("a",{parentName:"p",href:"https://lens.ondsel.com/download-and-explore"},"try the software")," for yourself today."))}d.isMDXComponent=!0},31006:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/catia-through-the-years-9af7d761867f39cd49369152fb28e641.webp"},16197:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/catia-vs-3dx-09eb50b987031a56072f74af402aa9fa.webp"},81110:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/catia-vs-freecad-bc6ba407fba416194426e24060b2db85.webp"},12854:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/catia-vs-nx-sw-inv-f1fc7cd89da5c45c2409340633d6e5ae.webp"},26424:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/titlecard-0d2b6163c4486aeba2ec15b196afa232.png"},65396:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ux-ui-catia-cd3e65ecb905a82d552dc832f6f5bd86.webp"},83906:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ux-ui-freecad-fb876b349802a2b5146f0e1fbb19b67b.webp"}}]);