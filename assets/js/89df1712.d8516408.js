"use strict";(self.webpackChunkondsel=self.webpackChunkondsel||[]).push([[8246],{3905:(e,t,o)=>{o.d(t,{Zo:()=>h,kt:()=>m});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},h=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=d(o),p=a,m=u["".concat(l,".").concat(p)]||u[p]||c[p]||r;return o?n.createElement(m,i(i({ref:t},h),{},{components:o})):n.createElement(m,i({ref:t},h))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<r;d++)i[d]=o[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},9672:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=o(7462),a=(o(7294),o(3905));const r={slug:"how-to-build-3rd-party-addons-for-freecad-that-don\u2019t-suck",title:"How to build 3rd-party addons for FreeCAD that don\u2019t suck",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4"}],tags:["freecad","development","addons"],image:"./titlecard.png",draft:!1},i=void 0,s={permalink:"/blog/how-to-build-3rd-party-addons-for-freecad-that-don\u2019t-suck",source:"@site/blog/2023-10-13/addons.md",title:"How to build 3rd-party addons for FreeCAD that don\u2019t suck",description:"How to build 3rd-party addons for FreeCAD that don\u2019t suck",date:"2023-10-13T00:00:00.000Z",formattedDate:"October 13, 2023",tags:[{label:"freecad",permalink:"/blog/tags/freecad"},{label:"development",permalink:"/blog/tags/development"},{label:"addons",permalink:"/blog/tags/addons"}],readingTime:7.53,hasTruncateMarker:!1,authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"}],frontMatter:{slug:"how-to-build-3rd-party-addons-for-freecad-that-don\u2019t-suck",title:"How to build 3rd-party addons for FreeCAD that don\u2019t suck",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"}],tags:["freecad","development","addons"],image:"./titlecard.png",draft:!1},nextItem:{title:"Ondsel made constraining sketches faster and easier",permalink:"/blog/ondsel-made-constraining-sketches-faster-and-easier"}},l={image:o(7672).Z,authorsImageUrls:[void 0,void 0]},d=[{value:"Technical advice",id:"technical-advice",level:2},{value:"Design the UI with QT Creator and use the .ui files directly.",id:"design-the-ui-with-qt-creator-and-use-the-ui-files-directly",level:3},{value:"Separate the UI logic from the application logic.",id:"separate-the-ui-logic-from-the-application-logic",level:3},{value:"Stick with rules of thumb",id:"stick-with-rules-of-thumb",level:3},{value:"Be on the lookout for things that belong in the core",id:"be-on-the-lookout-for-things-that-belong-in-the-core",level:3},{value:"Design advice",id:"design-advice",level:2},{value:"What to do next",id:"what-to-do-next",level:2}],h={toc:d};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"How to build 3rd-party addons for FreeCAD that don\u2019t suck\nThere\u2019s well over 200 various addons for FreeCAD available just in the official add-on manager. Many more possibly flew under the radar or simply never have been shared with anybody."),(0,a.kt)("p",null,"For some developers, creating an add-on is a way to test ideas and see if they resonate with a larger audience. For others, it\u2019s the first step towards contributing to FreeCAD itself. The add-on ecosystem is hugely important for the community at large."),(0,a.kt)("p",null,"But many great ideas die because the add-on implementation suffers from one or more common and avoidable mistakes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Not designed to make contributions from other developers easy."),(0,a.kt)("li",{parentName:"ul"},"Built with implementations of things that are core FreeCAD features."),(0,a.kt)("li",{parentName:"ul"},"Not built with good software practices in mind, think modular code, unit tests, separation of UI and non-UI logic.")),(0,a.kt)("p",null,"This isn\u2019t a criticism of the addon developers.  Nobody is expert in everything for many open-source contributors, writing an Add-on is their first experience contributing to a large project."),(0,a.kt)("p",null,"Over the last decade, I patched other people\u2019s add-ons and wrote some of my own. In this post, I\u2019d like to share what I think are best practices of developing 3rd-party add-ons for FreeCAD. There\u2019s a technical and a design aspect to this."),(0,a.kt)("h2",{id:"technical-advice"},"Technical advice"),(0,a.kt)("h3",{id:"design-the-ui-with-qt-creator-and-use-the-ui-files-directly"},"Design the UI with QT Creator and use the .ui files directly."),(0,a.kt)("p",null,"There are several reasons why this is a great idea. First off, this makes the code simpler. Hundreds of lines of Qt code are replaced with a single line to load the .ui file like:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Form = FreeCADGui.PySideUic.loadUi(dialog.ui)")),(0,a.kt)("p",null,"The UI logic becomes much cleaner and more testable. Secondly, UI designers are used to working with visual tools.  They can often improve the look and feel of a dialog or task panel quickly. Using the UI files directly rather than hand-coding Qt or converting the .ui file to python makes it much easier for UI designers to contribute.  The wiki has ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.freecad.org/Manual:Creating_interface_tools"},"lots of information")," about designing and using .ui files."),(0,a.kt)("h3",{id:"separate-the-ui-logic-from-the-application-logic"},"Separate the UI logic from the application logic."),(0,a.kt)("p",null,"From the beginning, FreeCAD was designed to run without the GUI at all.  It\u2019s amazing how much you can do with FreeCAD by calling it from external scripts.  So it\u2019s really frustrating to find a great piece of addon functionality that won\u2019t work this way."),(0,a.kt)("p",null,"Ideally, the UI logic is separated from the rest of the application code.  Designing software this way doesn\u2019t come naturally to amateur programmers but it isn\u2019t too difficult and is worth learning. Even a very simple addon or workbench should have at least two Python modules, one with the logic for managing the UI, getting input from the user, and displaying it. The second module does all the interesting stuff, and it should not import FreeCADGui."),(0,a.kt)("h3",{id:"stick-with-rules-of-thumb"},"Stick with rules of thumb"),(0,a.kt)("p",null,"There are some very simple rules that help keep the code clean, readable, and testable.  Like all heuristics, they aren\u2019t written in stone and there are times to ignore them.  That said, take the time to understand why they exist."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"No function longer than 200 lines of code.")," There are various recommendations regarding the length of a function, but 200 LOC seems like a reasonable maximum. The general idea is that a function should do just one logical thing and could be explained in one sentence. This ",(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/posts/475762/revisions"},"list of red flags")," for when a function is too long should serve you well (thanks to Ryan Delucchi)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"No module longer than 1K lines of code.")," For pretty much the same reason \u2014 readability, maintainability etc. \u2014 Python modules shouldn\u2019t be too long.  Keeping python modules short has a subtle effect on code organization. It naturally encourages better encapsulation and separation of concerns, two key concepts in software development."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Write pythonic code.")," Unlike communities around other programming languages, the Python community, is very opinionated about code conventions. Adhering to these conventions makes Python code more readable and more efficient.  Here is a ",(0,a.kt)("a",{parentName:"p",href:"https://towardsdatascience.com/how-to-write-pythonic-code-208ec1513c49"},"very good overview")," by Xiaoxu Gao of what makes code in Python \u201cpythonic\u201d."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Use Black formatting.")," Code formatting is sometimes a contentious issue.  Part of being \u2018pythonic\u2019 is adhering to a community standard for formatting. The standard is formalized in ",(0,a.kt)("a",{parentName:"p",href:"https://peps.python.org/pep-0008/"},"PEP 8")," which asserts a number of code style conventions.   Pycodestyle will check your code against those standards (and complain when you break them). ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/psf/black"},"Black")," automatically reformats your Python code to comply with those conventions."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Write unit tests first.")," Nobody likes writing unit tests but everyone likes having them.  Regressions are easy to introduce and difficult to catch. Unit tests invert that by making regressions harder to introduce and easier to solve. They also have a subtle effect on how you program. When you have to write unit tests, you start to write more testable code. So write unit tests early on to stay on top of it."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Make UI translatable from day 1.")," Popular addons tend to get translated into other languages. Designing an addon with localization in mind from the beginning means you free yourself from redesigning it later on to introduce UI translation support."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Make user-facing objects parametric.")," If the addon adds document objects to the project and expects the user to interact with them after creation, the important attributes of the object should be exposed through properties.  We\u2019ve seen good ideas implemented in such a way that if the user makes an error during the creation of an object, the only recourse is to delete the object and restart.  If the creation of an object involves a task panel, double-clicking on the object in the tree should re-open the same task panel and allow the user to change settings.   FreeCAD wiki has an ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.freecad.org/Create_a_FeaturePython_object_part_I"},"article")," that explains how to write FeaturePython objects the right way."),(0,a.kt)("h3",{id:"be-on-the-lookout-for-things-that-belong-in-the-core"},"Be on the lookout for things that belong in the core"),(0,a.kt)("p",null,"Occasionally features developed in a workbench really ",(0,a.kt)("em",{parentName:"p"},"should")," exist in the core. A good example of that is the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/shaise/FreeCAD_SheetMetal"},"Sheetmetal workbench"),". There\u2019s an interesting bit of logic that unfolds a shape to produce a flattened version. The unfolder is computationally intense and would benefit from being implemented in C++ rather than Python. A powerful and efficient unfolder might also have utility in other workbenches. It sure takes more time and effort to communicate with other developers, get these things written correctly and merged, but it makes addons simpler, faster, and more maintainable."),(0,a.kt)("p",null,"On the other hand, be on the lookout for things that already ",(0,a.kt)("em",{parentName:"p"},"are")," in the core. Inexperienced developers often reinvent the wheel and do it poorly. Experienced developers communicate a lot. So when you design an addon, talk to your peers and discuss your design. It could very well be the case that something you need or already exists and works just right for you."),(0,a.kt)("h2",{id:"design-advice"},"Design advice"),(0,a.kt)("p",null,"FreeCAD has the ",(0,a.kt)("a",{parentName:"p",href:"https://freecad.github.io/DevelopersHandbook/stylebook/"},"beginnings of a style book"),". While work on it is ongoing, here are some important considerations."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don't make the user think.")," In free and open-source software, the concepts of usability and discoverability are often overlooked. Do your best to design an addon with a straightforward workflow that gets users from A to Z in the least possible amount of time. Give the user a result with the minimal amount of input and let them revise and improve the result incrementally. A feature that requires the user to do many things exactly right before outputting anything at all is confusing and will be ignored by most users."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Chunking."),"  If there\u2019s one thing you can do to make your user-interface and workflow better it is to group controls together so users can process them efficiently."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Toolbars should have neither too many nor too few buttons. Seven, plus or minus two, is a guideline often invoked."),(0,a.kt)("li",{parentName:"ul"},"The buttons should be grouped logically.  Consider that the user may hide the toolbar or drag it to another part of the screen.  Menus should use separators to make them easier to process."),(0,a.kt)("li",{parentName:"ul"},"Dialogs should use group boxes, frames, and tabs to allow efficient recognition of controls.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don\u2019t just gravitate to workbenches.")," There seems to be a popular idea that a workbench is the right kind of addon for anything. And so there are some 3rd-party workbenches that should have been a non-workbench addon,  an extension of an existing workbench, or even a core feature. But workbenches are destinations, if you build one, you should expect that people will park there for a while and will be unwilling to jump between workbenches all the time. So when you choose what type of an addon you are creating, think primarily of workflow and tasks."),(0,a.kt)("h2",{id:"what-to-do-next"},"What to do next"),(0,a.kt)("p",null,"If you are planning to write a new FreeCAD addon or improve one you have already created, I recommend paying close attention to ",(0,a.kt)("a",{parentName:"p",href:"https://freecad.github.io/DevelopersHandbook/"},"FreeCAD Developer Guide"),". This is where the team formalizes both programming and design conventions, as well as provides actionable advice. If the guide is missing the information you need, I encourage you to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/FreeCAD/DevelopersHandbook/issues"},"file an issue")," against the guide on GitHub."))}u.isMDXComponent=!0},7672:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/titlecard-1d3d1fb4e1ecd51ef6e1c30d218d1bf4.png"}}]);