"use strict";(self.webpackChunkondsel=self.webpackChunkondsel||[]).push([[8068],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},h=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=u(a),p=o,m=d["".concat(l,".").concat(p)]||d[p]||c[p]||i;return a?r.createElement(m,n(n({ref:t},h),{},{components:a})):r.createElement(m,n({ref:t},h))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,n=new Array(i);n[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,n[1]=s;for(var u=2;u<i;u++)n[u]=a[u];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8542:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=a(7462),o=(a(7294),a(3905));const i={slug:"freecad-needs-a-first-run-wizard",title:"FreeCAD needs a first-run wizard, but nobody knows what it should do",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4"}],tags:["freecad","development"],image:"./titlecard.png",draft:!1},n=void 0,s={permalink:"/blog/freecad-needs-a-first-run-wizard",source:"@site/blog/2023-08-27/frw.md",title:"FreeCAD needs a first-run wizard, but nobody knows what it should do",description:"FreeCAD is commonly criticized for being difficult to get started with.",date:"2023-08-27T00:00:00.000Z",formattedDate:"August 27, 2023",tags:[{label:"freecad",permalink:"/blog/tags/freecad"},{label:"development",permalink:"/blog/tags/development"}],readingTime:12.035,hasTruncateMarker:!1,authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"}],frontMatter:{slug:"freecad-needs-a-first-run-wizard",title:"FreeCAD needs a first-run wizard, but nobody knows what it should do",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"}],tags:["freecad","development"],image:"./titlecard.png",draft:!1},nextItem:{title:"Someday an archeologist will study the bones of your pull request",permalink:"/blog/archeologists-will-study-the-bones-of-your-pull-request"}},l={image:a(9972).Z,authorsImageUrls:[void 0,void 0]},u=[{value:"What\u2019s wrong with the feature request?",id:"whats-wrong-with-the-feature-request",level:2},{value:"What other programs do",id:"what-other-programs-do",level:2},{value:"Our proposal",id:"our-proposal",level:2},{value:"Minimal first-run wizard",id:"minimal-first-run-wizard",level:3},{value:"Better defaults",id:"better-defaults",level:3},{value:"Continuous UX/UI improvement",id:"continuous-uxui-improvement",level:3},{value:"What\u2019s next",id:"whats-next",level:2}],h={toc:u};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"FreeCAD is commonly criticized for being difficult to get started with. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Quote 1",src:a(1259).Z,width:"1421",height:"199"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Quote 2",src:a(1785).Z,width:"1421",height:"199"})),(0,o.kt)("p",null,"This criticism, while possibly overstated, is valid."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Features get more development attention and the UX/UI design is usually an afterthought and \u201canything goes\u201d. As a result, there\u2019s not much consistency across the program."),(0,o.kt)("li",{parentName:"ul"},"The learning curve for modern CAD systems is a wall. There is even occasionally pushback against simplifying UX, because \u201cCAD programs are ",(0,o.kt)("em",{parentName:"li"},"supposed"),' to be difficult and take a lot of time to learn". Effort to improve UI is seen as "dumbing it down\u201d.'),(0,o.kt)("li",{parentName:"ul"},"The program is trying to be many things at once: a 2D drafting program, a 3D design program, an Arch/BIM program, a CNC program, a structural analysis program \u2014 and that\u2019s just a subset of workbenches available by default. All the while not much thought has been given to help users navigate the options when they see it for the first time, or customize FreeCAD for their use cases."),(0,o.kt)("li",{parentName:"ul"},"Terminology used in the program is inconsistent and confusing. Part vs PartDesign is one of the recurring topics in the community. But also \u201cpath\u201d could mean a toolpath, a sweep path, or a file path depending on where in the program the word is used. These are just a couple examples.")),(0,o.kt)("p",null,"For a long time there have been calls for a first-run wizard (FRW) as the way to fix some of these problems. If you are not familiar with the concept, the idea behind FRW is a feature that runs the first time a user launches a program and helps orient the user to the software by allowing them to choose how the program will look and behave or by onboarding them in other ways."),(0,o.kt)("p",null,"While investigating this feature request, we looked into what other programs have to offer, and our conclusion is that while something is needed this request is problematic and the specific solution has poor consensus."),(0,o.kt)("h2",{id:"whats-wrong-with-the-feature-request"},"What\u2019s wrong with the feature request?"),(0,o.kt)("p",null,"First and foremost, the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/FreeCAD/FreeCAD/issues/5772"},"issue")," is poorly defined. This issue predates the current contributing policy, it doesn\u2019t start by identifying the problem but jumps immediately to the solution. People have seen similar solutions in other applications and have an intuition about them. But the notion of a first-run wizard brings different ideas to mind. In fact, our research showed that these tools are employed to address at least three different problems:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"User preferences make a big difference to usability but the settings are difficult to find or scattered in many places."),(0,o.kt)("li",{parentName:"ul"},"The optimum configuration of the software varies depending on the specific task the user is undertaking."),(0,o.kt)("li",{parentName:"ul"},"Important features are occasionally overlooked by users leading to frustration and increased support demand on the forum.")),(0,o.kt)("p",null,"These are three very different problems and their solutions are unlikely to be the same thing. It makes sense to address them independently."),(0,o.kt)("p",null,"Even if we narrow the focus and assume the feature request is only about customizing the software for the user\u2019s needs, we still have a challenge. Consider this bewildering list of things that people have suggested should be configurable when you first run FreeCAD. We call it The Problematic Wishlist:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Simple vs advanced layout (e.g. don\u2019t show FEM workbench to a newbie, show less buttons in toolbars etc.)"),(0,o.kt)("li",{parentName:"ul"},"Which workbenches (WBs) should be visible in the UI, with presets (Mechanical CAD, Arch/BIM etc.)"),(0,o.kt)("li",{parentName:"ul"},"What WB is selected on startup"),(0,o.kt)("li",{parentName:"ul"},"UI language"),(0,o.kt)("li",{parentName:"ul"},"Units and unit schemes"),(0,o.kt)("li",{parentName:"ul"},"Theme (dark/light/classic)"),(0,o.kt)("li",{parentName:"ul"},"Enabling/disabling Treeview Glass theme"),(0,o.kt)("li",{parentName:"ul"},"Icon theme"),(0,o.kt)("li",{parentName:"ul"},"Highlight color"),(0,o.kt)("li",{parentName:"ul"},"Icon size"),(0,o.kt)("li",{parentName:"ul"},"Font size"),(0,o.kt)("li",{parentName:"ul"},"Viewport background color"),(0,o.kt)("li",{parentName:"ul"},"Navigation style"),(0,o.kt)("li",{parentName:"ul"},"Enabling/disabling warnings in weekly builds"),(0,o.kt)("li",{parentName:"ul"},"Enabling/disabling \u201cWhat\u2019s This?\u201d button"),(0,o.kt)("li",{parentName:"ul"},"Monitor aspect ratio selection for optimized layouts"),(0,o.kt)("li",{parentName:"ul"},"Panel layout options"),(0,o.kt)("li",{parentName:"ul"},"Default file storage location"),(0,o.kt)("li",{parentName:"ul"},"Autosave and backup policy"),(0,o.kt)("li",{parentName:"ul"},"Authoring and license info")),(0,o.kt)("p",null,"While it may be technically possible to implement all this in a first-run wizard,  it would be a perfect example of creating a bigger problem by trying to fix a smaller one.  It would be overwhelming to the user trying to get started and would complicate development since configuration would have to be maintained in both the FRW and the system preferences."),(0,o.kt)("h2",{id:"what-other-programs-do"},"What other programs do"),(0,o.kt)("p",null,"As part of the research phase, we looked at what other programs offer in terms of customizing UX the first time you run a program. The question we asked was just this: do other teams solve the same issues by offering a first-run wizard or do they do something else?"),(0,o.kt)("p",null,"We started with CAD programs and then moved to other kinds of applications (3D modeling, image editing, vector graphics editing, audio production). Basically, any sophisticated program with lots of configuration options, aimed at professionals and designed for multiple use cases is worth looking at."),(0,o.kt)("p",null,"Right off the bat, among non-FOSS ",(0,o.kt)("strong",{parentName:"p"},"CAD")," packages, only BricsCAD provides something that vaguely approaches a first-run wizard. Every time you launch the program, a dialog asks what kind of work the user wants to do: 2D drafting, 3D modeling, mechanical design, or BIM. The same launcher window also asks whether the user wants metric or imperial units. And this is it. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Start screen in BricsCAD",src:a(4967).Z,width:"1420",height:"946"})),(0,o.kt)("p",null,"But you don\u2019t even need a dialog for that. Multiple programs provide a simple choice over the type of project you create. In some cases, it\u2019s just a drop-down list of project types or a library of templates."),(0,o.kt)("p",null,"The only two programs that do have a first-run wizard are FOSS programs. LibreCAD asks for the default unit, GUI language, and command language. QCad asks for GUI language, default unit, default paper size, decimal point, and background color (black or white). Not too surprising, as the former is a fork of the latter."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"First-run wizard in LibreCAD",src:a(790).Z,width:"1102",height:"484"})),(0,o.kt)("p",null,"The situation is pretty much the same across other industries we looked at."),(0,o.kt)("p",null,"Blender seems to be the only major ",(0,o.kt)("strong",{parentName:"p"},"3D modeling")," package that has a first-run wizard. You can set UI language, shortcuts preset, right-click vs left-click for selection, spacebar behavior, UI theme."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"First-run wizard in Blender",src:a(499).Z,width:"884",height:"825"})),(0,o.kt)("p",null,"None of the big boys in ",(0,o.kt)("strong",{parentName:"p"},"image editing"),", like Adobe Photoshop and Affinity Photo, have a first-run wizard. Ironically, GIMP is the program that used to have one, got rid of it, but is likely to have one again. In short, the original wizard asked questions that could be automatically detected from various system settings, and users found it annoying. But then developers made changes to defaults (enforced default dark theme and symbolic/colorless icons, as well as grouped tool icons in the toolbar), and that, too, annoyed half the user base. So they want to reintroduce the first-run wizard at some point in the future."),(0,o.kt)("p",null,"Similarly, Inkscape seems to be the only ",(0,o.kt)("strong",{parentName:"p"},"vector graphics")," program with a first-run wizard: you can choose canvas look (transparent checkerboard, white opaque etc.), shortcuts theme, icons theme, dark vs system UI theme."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"First-run wizard in Inkscape",src:a(5959).Z,width:"1403",height:"1333"})),(0,o.kt)("p",null,"Among proprietary ",(0,o.kt)("strong",{parentName:"p"},"digital audio workstations")," Cubase seems to be the only one that bothers users with questions, and even that during installation when you need to select a preferred audio interface. Once again, a FOSS program is an exception: the first time you run Ardour, a wizard asks for GUI and font scaling and the default folder for new sessions. The first part of that, however, is a toolkit limitation. Ardour still uses GTK2 for some part of its UI, and GTK2 is notoriously oblivious of HiDPI displays."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"First-run wizard in Ardour",src:a(8205).Z,width:"760",height:"542"})),(0,o.kt)("p",null,"Across many industries, developers recognize that learning to use their software efficiently takes time, so they build links to training materials into the user interface. This is something FOSS developers are beginning to do, too. For example, MuseScore has links to educational videos on YouTube, and FreeCAD has links to the wiki."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Learning center in MuseScore",src:a(2810).Z,width:"2560",height:"1440"})),(0,o.kt)("p",null,"So what did we learn from this?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Very few programs actually provide a first-run wizard.")," Proprietary programs typically enforce a certain choice of defaults even for controversial things like the look and feel, but, to their credit, usually make it rather easy to customize certain things."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"There are obvious polarizing topics.")," Some of the defaults are things that users just can\u2019t stop arguing about. This is exactly what first-run wizards in FOSS programs like Blender and Inkscape focus on."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Measure units surprisingly do not cause all that much controversy.")," Figuring out the right units from locale settings is perfectly doable, so it\u2019s possible that this is why very few CAD programs even bother exposing those when you run them the first time or create a new project. Typically, there is a global configuration that applies to new projects and a simple way to override it on a per-project basis (an unfinished patch for the latter ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/FreeCAD/FreeCAD/pull/9521"},"exists")," for FreeCAD)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"There\u2019s usually a very obvious way to get to the right tools.")," Applications like Inventor make it very easy to create a 2D design or a 3D model. Usually, it\u2019s just one or two clicks away, and the UI for that is in a very obvious place."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"CAD programs usually have a learning center for newly arrived users.")," This is something FreeCAD already does, but there are ways to improve it. A topic for another day.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Learning center in Autocad LT",src:a(5747).Z,width:"2560",height:"1440"})),(0,o.kt)("h2",{id:"our-proposal"},"Our proposal"),(0,o.kt)("p",null,"Based on our findings, we think it\u2019s best to attack the issue of suboptimal first user experience from three angles: minimal first-run wizard, better defaults, and continuous UX/UI improvement."),(0,o.kt)("h3",{id:"minimal-first-run-wizard"},"Minimal first-run wizard"),(0,o.kt)("p",null,"Let\u2019s learn from the experience of other projects. Right-click selection in Blender was a huge annoyance for new users right up to the point where left-click selection was finally implemented and the first-run wizard started offering the choice between the two options. The lesson here is that there will always be things that users are split over, we are not going to change everyone\u2019s mind, ever."),(0,o.kt)("p",null,"Therefore the first part of the solution is to build a minimalistic first-run wizard that will cover just that: visual style, navigation style, units, GUI language. We can further refine the wizard based on feedback from users. Designing and implementing the dialog is not too complicated, and there have been several approaches to do so already."),(0,o.kt)("h3",{id:"better-defaults"},"Better defaults"),(0,o.kt)("p",null,"Certain things on the wishlist above could absolutely be better defaults. For example, we can enable backups by default and set a sensible number of versions to be saved."),(0,o.kt)("p",null,"The tricky part here is coming up with a definition of what constitutes a sensible default. This is something we will have to further explore."),(0,o.kt)("p",null,"In our experience, it\u2019s useful to keep each conversation about defaults narrowly focused. For example, we\u2019ve already had a lively if slightly heated discussion over disabling some of the workbenches in the workbench selector by default. Breaking that conversation into several dedicated GitHub issues has helped to keep the discussion productive, so now there is a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/orgs/FreeCAD/projects/16"},"GitHub project")," for cleaning up the workbench selector."),(0,o.kt)("p",null,"This task of making good defaults will likely never be 100% completed as FreeCAD keeps changing. So we should treat it as a continuous effort."),(0,o.kt)("h3",{id:"continuous-uxui-improvement"},"Continuous UX/UI improvement"),(0,o.kt)("p",null,"This last part of the solution is a lot more interesting. Let\u2019s analyze the rest and see how we can improve the UX/UI to improve the initial user experience and maybe remove the need for configuring certain things when users run the program for the first time."),(0,o.kt)("p",null,"Here is an example. One of the ideas for the first-run wizard is to allow users to configure what workbenches they want visible by default. To reiterate, someone who, for all we know, is probably looking at the program for the first time, is supposed to somehow guess what workbenches they actually need without having ever used them. That doesn\u2019t sound like a very likely scenario."),(0,o.kt)("p",null,"And then some experienced users could have different uses for the program. You can be an architect who needs Draft, Arch/BIM, and just a few more WBs. But you also tinker with stuff in your spare time, so PartDesign and Path are no strangers to you."),(0,o.kt)("p",null,"Basically, FreeCAD needs to adapt the UI based on context. There are several established approaches to deal with that. Named workspaces is one of them. But another approach is to improve the start screen. If you create an architectural project, you automatically get a certain set of workbenches available to you. You can further refine that selection, if you want to, but the default user experience will already be streamlined for you to a large extent based on the type of a project you create."),(0,o.kt)("p",null,"The first step towards that has already been done. Thanks to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/FreeCAD/FreeCAD/pull/10171"},"Qewer"),", v1.0 will be coming with an update start screen listing several typical new projects that are basically a fast track to a particular workbench."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"New start page in FreeCAD",src:a(1635).Z,width:"2560",height:"1440"})),(0,o.kt)("p",null,"The full implementation of that would eliminate two items from the wishlist: 1) what WBs should be visible in the UI, and 2) what WB is selected on startup."),(0,o.kt)("p",null,"This kind of a holistic approach to designing UX/UI should serve the project much better than what we have had so far. We also don\u2019t have to deliver the full UX/UI redesign of FreeCAD for v1.0, this kind of refinement can go on for as many development cycles as we can handle."),(0,o.kt)("h2",{id:"whats-next"},"What\u2019s next"),(0,o.kt)("p",null,"Improving the user\u2019s initial experience of FreeCAD is not a single work effort.  There has been good work done in this area already including an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/FreeCAD/FreeCAD/issues/5772"},"ongoing discussion")," about the first-run wizard in the issue tracker, but discrete, solvable issues need to be extracted from that and solutions built for each of them."),(0,o.kt)("p",null,"The first issue to address is the narrowly defined set of configuration options  which users routinely disagree about: language, units, navigation style, and theme."),(0,o.kt)("p",null,"Tailoring the application to the task should be addressed by improving the start page and providing better defaults whenever possible.  As noted above, some work has already been done."),(0,o.kt)("p",null,"That leaves the more subjective work of explicitly educating the user about FreeCAD conventions, UI tools, shortcuts, and the general UX/UI improvements.   Both of these need more research and feedback from the community. This is an area where we need better and more actionable data from community power users and moderators about where users are confused."),(0,o.kt)("p",null,"There will likely be a GitHub project focusing on UX/UI cleanup. Stay tuned for more news on that."))}d.isMDXComponent=!0},8205:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/ardour-frw-681f780085b156b00152d296962d0466.webp"},5747:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/autocad-lt-learning-center-01cdd9a60a51c2e7812d8769545c5c43.webp"},499:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/blender-frw-82c25b3c77508dffe5df53091f099492.webp"},4967:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/bricscad-start-screen-7fab41fb6de424cef5f34bb217272b6b.webp"},1635:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/freecad-new-start-page-8504802fe5942707cae5aaa1488034ec.webp"},5959:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/inkscape-frw-7f8a721255348eae90c578fa4febd3d3.webp"},790:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/librecad-frw-3615f4974dfd0420b3b3bb9927b8051a.webp"},2810:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/musescore-learning-center-76599ccbe989c6d526f0472515bbad3e.webp"},1259:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/quote1-62e8e4811650f6e6373d08f546f83e18.webp"},1785:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/quote2-9bdfb35d09fdf1d321bb9843df2bbe1f.webp"},9972:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/titlecard-937b8ceecfc87f17e3d9a3e5d92f2482.png"}}]);