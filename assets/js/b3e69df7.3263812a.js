"use strict";(self.webpackChunkondsel=self.webpackChunkondsel||[]).push([[285],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),h=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=h(a),d=o,m=c["".concat(l,".").concat(d)]||c[d]||p[d]||s;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,i=new Array(s);i[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[c]="string"==typeof e?e:o,i[1]=r;for(var h=2;h<s;h++)i[h]=a[h];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9981:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>h});var n=a(7462),o=(a(7294),a(3905));const s={slug:"build-system-for-custom-data-elements",title:"Let\u2019s Build a Core System for Custom Data Elements in FreeCAD",authors:[{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4"},{name:"Ajinkya Dahale",title:"Contributing Writer",url:"https://github.com/AjinkyaDahale",Image_url:"https://avatars.githubusercontent.com/u/4316933?v=4"}],tags:["freecad","development"],image:"./titlecard.png",draft:!1},i=void 0,r={permalink:"/blog/build-system-for-custom-data-elements",source:"@site/blog/2023-06-24/customDataElements.md",title:"Let\u2019s Build a Core System for Custom Data Elements in FreeCAD",description:"One of the sorely missing features in FreeCAD is a convenient system for creating custom data elements and interacting with them.",date:"2023-06-24T00:00:00.000Z",formattedDate:"June 24, 2023",tags:[{label:"freecad",permalink:"/blog/tags/freecad"},{label:"development",permalink:"/blog/tags/development"}],readingTime:12.795,hasTruncateMarker:!1,authors:[{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"},{name:"Ajinkya Dahale",title:"Contributing Writer",url:"https://github.com/AjinkyaDahale",Image_url:"https://avatars.githubusercontent.com/u/4316933?v=4"}],frontMatter:{slug:"build-system-for-custom-data-elements",title:"Let\u2019s Build a Core System for Custom Data Elements in FreeCAD",authors:[{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"},{name:"Ajinkya Dahale",title:"Contributing Writer",url:"https://github.com/AjinkyaDahale",Image_url:"https://avatars.githubusercontent.com/u/4316933?v=4"}],tags:["freecad","development"],image:"./titlecard.png",draft:!1},nextItem:{title:"FreeCAD Needs A Better Materials System",permalink:"/blog/freecad-needs-a-better-materials-system"}},l={image:a(3298).Z,authorsImageUrls:[void 0,void 0]},h=[{value:"Elements or Properties?",id:"elements-or-properties",level:2},{value:"Benchmark",id:"benchmark",level:2},{value:"Existing solutions",id:"existing-solutions",level:2},{value:"The Spreadsheet workbench",id:"the-spreadsheet-workbench",level:3},{value:"Property Bag in Path",id:"property-bag-in-path",level:3},{value:"The DynamicData workbench",id:"the-dynamicdata-workbench",level:3},{value:"UserData in Assembly 4",id:"userdata-in-assembly-4",level:3},{value:"Summary",id:"summary",level:3},{value:"What The Solution Should Look Like",id:"what-the-solution-should-look-like",level:2},{value:"Our Proposal",id:"our-proposal",level:2},{value:"How You Can Get Involved",id:"how-you-can-get-involved",level:2}],u={toc:h},c="wrapper";function p(e){let{components:t,...s}=e;return(0,o.kt)(c,(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"One of the sorely missing features in FreeCAD is a convenient system for creating custom data elements and interacting with them."),(0,o.kt)("p",null,"A common use case is constraining multiple features in a sketch to the same value. Instead of tweaking every instance of a horizontal distance constraint, you would create a custom data element (or property) called \u201cLength\u201d and then reference it via the Expression Engine. Then every time you change the value of that custom element, the entire sketch is updated automatically."),(0,o.kt)("p",null,"This is an extremely handy feature, so there is a strong community demand for this. Most recently, it was brought up twice during the ",(0,o.kt)("a",{parentName:"p",href:"https://forum.freecad.org/viewtopic.php?t=75768"},'"Complaint Session"')," at FOSDEM. And even a quick glance at the larger CAD market suggests that it\u2019s useful for more than just a group of FreeCAD users: Inventor, SolidWorks, NX, Creo all have a way to create a custom data element and use it with expressions."),(0,o.kt)("p",null,"Much like with ",(0,o.kt)("a",{parentName:"p",href:"https://ondsel.com/blog/default-assembly-workbench-1"},"assemblies"),", the community made several attempts to create a solution, but all of them have various shortcomings which we\u2019ll discuss below."),(0,o.kt)("p",null,"Fixing this benefits the entire FreeCAD ecosystem. Users would get a convenient tool for manipulating their designs, it would be immediately available and maintained as an inherent part of the project. For companies like Ondsel who want to build around FreeCAD, this system is the prerequisite for integrating it into external services."),(0,o.kt)("p",null,"A large part of this system is therefore parameters introspection. This is a complicated topic that probably deserves a separate discussion. But the basic idea is this. When you design a real-life part, some of the custom data elements you create are convenience tools like in the use case above. They contribute to making the design truly parametric yet do not need to be accessed and manipulated externally. But when FreeCAD is used in headless mode in a pipeline, whatever external tools you rely on better be able to tell which properties they need to expose to the user (dimensions, color, material etc.) and which ones have to be omitted. Essentially, custom parameters need to carry some useful context."),(0,o.kt)("p",null,"So let\u2019s talk about existing options, where they shine and fail, and what we think a sensible solution would look like based on what we learned."),(0,o.kt)("p",null,"In this post, we are also introducing another new author. Ajinkya Dahale has been a FreeCAD contributor since 2016. His contributions are mostly in the Sketcher, PartDesign, and FEM workbenches. Ajinkya\u2019s latest major involvement, improving B-spline ",(0,o.kt)("a",{parentName:"p",href:"https://forum.freecad.org/viewtopic.php?t=71130"},"constraints")," and ",(0,o.kt)("a",{parentName:"p",href:"https://forum.freecad.org/viewtopic.php?t=75950"},"construction"),", was sponsored by the FreeCAD community both directly and ",(0,o.kt)("a",{parentName:"p",href:"https://blog.freecad.org/2022/09/26/first-fpa-sponsored-development/"},"via the FreeCAD Project Association"),". He also received a ",(0,o.kt)("a",{parentName:"p",href:"https://opentoolchain.org/2023/02/26/FOSDEM-2023/"},"grant from the Open Toolchain Foundation"),". Since early 2023, he has been working for Ondsel and continues hacking on FreeCAD."),(0,o.kt)("h2",{id:"elements-or-properties"},"Elements or Properties?"),(0,o.kt)("p",null,"Before we get to the gist of the topic, we need to explain why we use the terminology \u201ccustom data elements\u201d and not \u201ccustom properties\u201d when we talk about the future system. Calling this type of data a property implies a particular solution \u2014 storing this data in the project tree and making it accessible for editing in the Combo View dock. But we are not yet certain this is exactly the way to do this. For now, we are using the term \u201ccustom data elements\u201d."),(0,o.kt)("h2",{id:"benchmark"},"Benchmark"),(0,o.kt)("p",null,"To understand how well various existing solutions work, we need a kind of a benchmark \u2014 a realistic workflow that allows working with custom data elements efficiently. We can describe it with a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/User_story"},"user story"),":"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The user begins to set the constraint and realizes they would like to make the value a custom field. The constraint panel would have a button to add a custom field."),(0,o.kt)("li",{parentName:"ol"},"The button would allow the user to add a new item to a collection of custom data elements."),(0,o.kt)("li",{parentName:"ol"},"The result would be returned and inserted via the Expression Engine.")),(0,o.kt)("p",null,"This workflow obviously applies to the Sketcher workbench, but there are many more use cases for custom data elements. You could be using them when designing a house, a 3D-printable part, or a part for CNC milling, or a thousand more things. So this better be a core feature.\nThere are multiple possible approaches to exposing custom data elements to users in the UI \u2014 pressing a shortcut to activate a floating window, editing an object in the document tree, or editing a value in a new tab in the property viewer. But for now, let\u2019s call this a benchmark and see how existing solutions stack up against it."),(0,o.kt)("h2",{id:"existing-solutions"},"Existing solutions"),(0,o.kt)("p",null,"We found 4 attempts to implement this feature."),(0,o.kt)("h3",{id:"the-spreadsheet-workbench"},"The Spreadsheet workbench"),(0,o.kt)("p",null,"This WB was designed for many uses, so it\u2019s not entirely fair to call it a custom data elements system. The workbench has two major benefits: it\u2019s both powerful (e.g. cells in the spreadsheet can contain expressions) and it\u2019s already part of FreeCAD, available immediately after program\u2019s installation."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"The Spreadsheet workbench in FreeCAD",src:a(7516).Z,width:"753",height:"571"})),(0,o.kt)("p",null,"The way spreadsheets work in FreeCAD, this is the assumed workflow:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The user exits Sketcher"),(0,o.kt)("li",{parentName:"ol"},"Switches to the Spreadsheet workbench"),(0,o.kt)("li",{parentName:"ol"},"Creates a spreadsheet"),(0,o.kt)("li",{parentName:"ol"},"Double-clicks the spreadsheet in the tree"),(0,o.kt)("li",{parentName:"ol"},"Selects a cell and enters a value"),(0,o.kt)("li",{parentName:"ol"},"Selects the cell a second time"),(0,o.kt)("li",{parentName:"ol"},"Clicks the button to set an alias"),(0,o.kt)("li",{parentName:"ol"},"Types in the alias name and presses OK"),(0,o.kt)("li",{parentName:"ol"},"Double-clicks the sketch icon in the tree to reopen Sketcher"),(0,o.kt)("li",{parentName:"ol"},"Selects the constraint and uses the Expression Engine to reference the aliased cell")),(0,o.kt)("p",null,"Compared to the benchmark above, this isn\u2019t very user-friendly. FreeCAD contributors attempted to make their life easier by ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.freecad.org/Macro_EasyAlias"},"simplifying alias creation"),", but that fixes only a small portion of issues with spreadsheets. While we definitely can improve its subpar performance and UX/UI, tables are still not very convenient for extracting values without launching FreeCAD and using its GUI."),(0,o.kt)("h3",{id:"property-bag-in-path"},"Property Bag in Path"),(0,o.kt)("p",null,"This feature is part of the default FreeCAD\u2019s Path workbench. You can create groups of properties, which is convenient when you have a lot of those, and there is a sensible choice of property types available."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Groups of properties in Property Bag",src:a(6240).Z,width:"832",height:"676"})),(0,o.kt)("p",null,"But while custom properties in the \u201cbag\u201d are perfectly accessible from other workbenches via the Expression Engine, you can only create and modify properties when you are in the Path workbench. So it\u2019s not competitive against the benchmark. This feature is also written in Python, so it\u2019s entirely possible it would have to be ripped out of Path and rewritten in C++."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Editing properties in Property Bag",src:a(3333).Z,width:"832",height:"676"})),(0,o.kt)("h3",{id:"the-dynamicdata-workbench"},"The DynamicData workbench"),(0,o.kt)("p",null,"This is a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mwganson/DynamicData"},"3rd party add-on")," that allows creating project-level custom properties accessible through the Expression Engine from any workbench. You can create any number of containers of properties, one per each object if you like. There is a very long list of property types available."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"The DynamicData workbench in FreeCAD",src:a(4367).Z,width:"832",height:"676"})),(0,o.kt)("p",null,"Workflow-wise, this is not a very convenient solution. There are some cosmetic UX issues (e.g. you have to switch to this workbench first for the toolbar to show in other workbenches), but we can deal with those. What\u2019s worse is that properties can\u2019t be added on the fly, while you are sketching in 2D."),(0,o.kt)("p",null,"Theoretically, DynamicData could work as a foundation for a better solution. However:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The WB is written in Python, but FreeCAD needs this as a core feature, hence it should most likely be C++ code."),(0,o.kt)("li",{parentName:"ul"},"The entire feature set is only accessible via GUI, which is not great for running FreeCAD in headless mode.")),(0,o.kt)("h3",{id:"userdata-in-assembly-4"},"UserData in Assembly 4"),(0,o.kt)("p",null,"The variables system in the Assembly 4 workbench is designed primarily for creating animations in the viewport. Here is how it works:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a variable like \u201crotation\u201d"),(0,o.kt)("li",{parentName:"ol"},"Pick a part, set its rotation value to use the variable via the Expression Engine"),(0,o.kt)("li",{parentName:"ol"},"Open the animation dialog, set start/end values, set step size"),(0,o.kt)("li",{parentName:"ol"},"Run the animation")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"UserData in Assembly 4",src:a(9907).Z,width:"1065",height:"609"})),(0,o.kt)("p",null,"The core system behind this feature is capable. The list of possible data types can (and should) be extended, but it\u2019s good for a start. There are some small issues. E.g. there\u2019s no way to edit an existing variable, the user can only create and delete them."),(0,o.kt)("p",null,"A much larger issue is that the feature is workbench-specific and written in Python. Thus, it would have to be extracted from the Assembly 4 code and most likely rewritten in C++. Then we\u2019d have to write an entirely new UI on top of it."),(0,o.kt)("h3",{id:"summary"},"Summary"),(0,o.kt)("p",null,"Reusing any of the existing solutions we explored seems unlikely for the following reasons:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"For the most part, they are not part of the FreeCAD core. The DynamicData and Assembly 4 workbenches need to be installed separately, and in case of Property Bag, the functionality needs to be moved out of the Path workbench and generalized.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"None of the 4 solutions here are accessible from C++ code, so no core feature can use custom data elements. So far, this hasn't really been an issue, but it\u2019s best to build future-proof core features.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"For the Python interface, there should be some sort of keyword-based system to set these values to these custom data elements. This way users can skip certain parameters like description.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Custom data elements in existing solutions carry no context. This makes it difficult for an external tool to sift through available parameters and pick the ones that should be exposed to users in the UI of that external tool. This can be resolved by making the user create a specific kind of document object or name it a certain way, but it would put an unnecessary cognitive burden on users.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The Spreadsheet workbench is the only core feature among the ones we studied. Spreadsheet serves and important role and isn\u2019t going anywhere.  However its UX is so far from the assumed workflow and so inaccessible from CLI that we shouldn\u2019t try to force it to serve this purpose.  In fact, Spreadsheet may be come even more useful in conjunction with a core data element feature."))),(0,o.kt)("p",null,"In a nutshell, there\u2019s no existing solution that can be used as-is."),(0,o.kt)("h2",{id:"what-the-solution-should-look-like"},"What The Solution Should Look Like"),(0,o.kt)("p",null,"After analyzing existing solutions (including those of proprietary CAD programs), some obvious use cases, as well as user requests, we came up with the following list of requirements for a native custom data elements system in FreeCAD."),(0,o.kt)("p",null,"Architecturally, there should be a single container with a possibility to create groups of data elements inside it.\nSecondly, there\u2019s the topic of element types. The system should support all core data types: Length, Angle, Enum, String etc."),(0,o.kt)("p",null,"When we start thinking about this from users\u2019 standpoint, this is where things get a little vague. There are benefits to having elements as properties in the project tree, but a kind of a dedicated registry or central management tool  (SolidWorks-style) makes about as much sense. What we are certain of is that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Adding new data elements from Sketcher and other WBs should be simple and obvious."),(0,o.kt)("li",{parentName:"ul"},"Tooltips for data elements should be possible so that collaborators could figure out your project easily."),(0,o.kt)("li",{parentName:"ul"},"Expression Engine should be supported.")),(0,o.kt)("p",null,"When we talk about adding data elements easily, what we mean is that users should be able to create those from anywhere in the application and in the middle of a transaction like editing a sketch. Think of the way you can create named parameters in Inventor by just typing \u201cLength=530mm\u201d in the constraint input box to create a linked \u201cLength\u201d property and setting it to 530mm."),(0,o.kt)("p",null,"Moreover, users should be able to create and access custom data elements through CLI so that models could be adjusted when FreeCAD is running remotely, and possibly automated as macros. Example: load a gridfinity template, set the number of height units, choose a color, output an STL, send it to OctoPrint."),(0,o.kt)("p",null,"Finally, on a more technical note, users should be able to create and access custom data elements from code in either C++ or Python. That is, the feature should be accessible for core features, default workbenches, and 3rd party workbenches. This can be ensured by creating the framework in C++ and adding Python bindings."),(0,o.kt)("h2",{id:"our-proposal"},"Our Proposal"),(0,o.kt)("p",null,"We see this as a multi-stage project with work on expanding the FreeCAD file format accordingly, programming a C++ class and Python bindings, as well as designing and implementing the user interface. We have already settled on the document structure for our proposal \u2014 a single container with custom data elements, just like we mentioned above.\n3rd-party developers would be able to use C++ or Python to access custom data elements: get a list of them, create a new data element, or get an existing one and then set a value to it. This is how we picture the custom data elements can be accessed through Python:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"my_doc = App.ActiveDocument()\nmy_doc.CustomData # The container for Custom Data elements\nmy_doc.CustomData.setProperty(\u201cApp::PropertyFloat\u201d, name=\u201dmyDim\u201d, 1.23) # Setting a double\nmy_doc.CustomData.getProperty(\u201cmyDim\u201d) # Getting the value of the property\nmy_doc.CustomData.setProperty(\u201cApp::PropertyString\u201d, \u201cmyText\u201d, \u201chello\u201d, desc=\u201dText to be printed on name plate\u201d) # Setting a string with description\nmy_doc.CustomData.setProperty(\u201cApp::PropertyEnum\u201d, \u201cmyEnum\u201d, value=0, enum_values=[\u201cOption1\u201d, \u201cOption2\u201d, \u201cOption3\u201d]) # Setting an enum along with the values it can take. Selected value is \u201cOption1\u201d.\nmy_doc.CustomData.setProperty(\u201cApp::PropertyEnum\u201d, \u201cmyEnum\u201d, value=\u201dOption1\u201d, enum_values=[\u201cOption1\u201d, \u201cOption2\u201d, \u201cOption3\u201d]) # Setting an enum along with the values it can take (alternative)\n")),(0,o.kt)("p",null,"An (incomplete) example implementation is available in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Ondsel-Development/FreeCAD/tree/core-custom-data"},"this branch"),".\nWe think that users who rely on external tools for interacting with FreeCAD projects should be able to make a choice which custom data elements should be seen as private and which should be seen as public. This distinction is somewhat artificial, because everything is open in FreeCAD files. But it provides a simple way for external tools to expose only a subset of custom data elements \u2014 the ones that are supposed to be interacted with in UI. This is what we want Ondsel\u2019s cloud service to do when it comes to mass customization of designs."),(0,o.kt)("p",null,"We are still figuring out the interaction model and the UI. The quick and dirty solution is to add those to a new tab called \u201cCustom\u201d right next to \u201cView\u201d and \u201cData\u201d in the left dock. This can work as a simple temporary solution, but we think the View/Data separation is a superficial one and needs to be done away with (a story for another day). When a user uploads a document to our web view and sets only one dimension of the project to \u2018public\u2019 (e.g. only the length of a box but not its width or height), we expect that other users viewing this document would get to control only that dimension."),(0,o.kt)("p",null,"Here is an early UI wireframe:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Early UI wireframe for custom data elements",src:a(9394).Z,width:"832",height:"676"})),(0,o.kt)("p",null,"There are other approaches to designing the interaction, like what Inventor and Fusion 360 do with the properties table."),(0,o.kt)("h2",{id:"how-you-can-get-involved"},"How You Can Get Involved"),(0,o.kt)("p",null,"We are interested in general feedback about our proposal, but we are also specifically looking for your input on these two topics:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"What are your use cases for custom data elements? What kind of problems do you try to solve with those?"),(0,o.kt)("li",{parentName:"ul"},"What are your frustrations with both existing solutions in FreeCAD and other CAD programs?")),(0,o.kt)("p",null,"This would help us build a sensible interaction model and user interface for custom data elements in FreeCAD. Please provide your feedback in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Ondsel-Development/FreeCAD/issues/5"},"issue tracker"),"."))}p.isMDXComponent=!0},9907:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/assembly4-user-data-469f7d9f9e45e9799dea9f4c6574f684.png"},4367:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dynamic-data-ui-46df2f5d64594309adf6c9db5f91e280.png"},9394:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/preliminary-ui-wireframe-46df2f5d64594309adf6c9db5f91e280.png"},3333:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/property-bag-editing-properties-46df2f5d64594309adf6c9db5f91e280.png"},6240:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/propertybag-groups-of-properties-206907fbd34728d83da07c360ceecfe5.png"},7516:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/spreadsheet-wb-in-freecad-3b7d1d264cd5b4fd6c87e83319c2df71.png"},3298:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/titlecard-aec697e58940fac3ff4e3fc8a94c2fb0.png"}}]);