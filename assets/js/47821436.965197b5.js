"use strict";(self.webpackChunkondsel=self.webpackChunkondsel||[]).push([[9539],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||s;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[p]="string"==typeof e?e:o,i[1]=r;for(var c=2;c<s;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},43206:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const s={slug:"ondsel-made-constraining-sketches-faster-and-easier",title:"Ondsel made constraining sketches faster and easier",description:"One of the hallmark features of FreeCAD is increased cognitive load. Our new Dimension tool replaces mutiple other tools and helps constraining sketches faster.",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4"}],tags:["freecad","development","sketcher"],image:"./titlecard.png",draft:!1},i=void 0,r={permalink:"/blog/ondsel-made-constraining-sketches-faster-and-easier",source:"@site/blog/2023-09-29/constraints.md",title:"Ondsel made constraining sketches faster and easier",description:"One of the hallmark features of FreeCAD is increased cognitive load. Our new Dimension tool replaces mutiple other tools and helps constraining sketches faster.",date:"2023-09-29T00:00:00.000Z",formattedDate:"September 29, 2023",tags:[{label:"freecad",permalink:"/blog/tags/freecad"},{label:"development",permalink:"/blog/tags/development"},{label:"sketcher",permalink:"/blog/tags/sketcher"}],readingTime:2.995,hasTruncateMarker:!0,authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"}],frontMatter:{slug:"ondsel-made-constraining-sketches-faster-and-easier",title:"Ondsel made constraining sketches faster and easier",description:"One of the hallmark features of FreeCAD is increased cognitive load. Our new Dimension tool replaces mutiple other tools and helps constraining sketches faster.",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Alexandre Prokoudine",title:"Contributing Writer",url:"https://github.com/prokoudine",image_url:"https://avatars.githubusercontent.com/u/57467?v=4",imageURL:"https://avatars.githubusercontent.com/u/57467?v=4"}],tags:["freecad","development","sketcher"],image:"./titlecard.png",draft:!1},prevItem:{title:"How to build 3rd-party addons for FreeCAD that don\u2019t suck",permalink:"/blog/how-to-build-3rd-party-addons-for-freecad-that-don\u2019t-suck"},nextItem:{title:"Live merge meetings: what we learned from merging 75 pull requests in 30 days",permalink:"/blog/merge-meeting"}},l={image:n(3744).Z,authorsImageUrls:[void 0,void 0]},c=[],u={toc:c};function p(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"One of the hallmark features of FreeCAD is that various parts of its UI have a lot of similar options, which means a lot of cognitive load, especially for beginners. A very popular \u201coffender\u201d here is the geometry constraints toolbar in Sketcher. It has 18 different constraint options, more than most popular commercial CAD offerings like Fusion 360, Onshape, and Creo. That's not a bad thing on its own, but it adds a lot of mileage when you need to dimension an entire complex sketch."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Constraint options in FreeCAD 0.21",src:n(31567).Z,width:"1812",height:"932"})),(0,o.kt)("p",null,"Before joining Ondsel, Pierre-Louis Boyer (@paddle) started implementing a feature called ",(0,o.kt)("em",{parentName:"p"},"contextual constraints")," to help users constrain faster. Since joining Ondsel, he has finished the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/FreeCAD/FreeCAD/pull/9810"},"patch"),", and after some discussion and code review it was merged to become part of future FreeCAD 1.0. This new feature is quite nice and surpasses what many commercial CAD applicaitons are able to do. So let\u2019s take it for a drive and kick the tires!"),(0,o.kt)("p",null,"When you select a geometric feature in a sketch, there\u2019s a finite number of constraints you apply once you select the second feature. For example, if you select a line and then an endpoint of another line, your most meaningful option is a distance constraint. But if you select a line and then another line that\u2019s at an angle to the first one, the angle constraint is the most meaningful option, and your other option is to make those lines equal."),(0,o.kt)("p",null,"Once you know that, you can devise a system that looks at the selected features, suggests the most sensible option by default, and allows switching between possible options easily. This is what the new contextual constraints system does. It helps apply constraints based on the context of what the user has already done.  You select the new Dimension option (",(0,o.kt)("strong",{parentName:"p"},"D")," shortcut) and go over your entire sketch to constraint and dimension various parts of it."),(0,o.kt)("p",null,"The new option combines various pre-existing other ones: constraining distances, radii, diameters, angles, and a constraint lock."),(0,o.kt)("p",null,"Here is a quick example. Take two lines that have different length and are at a random angle and distance to each other:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Original state",src:n(89724).Z,width:"1792",height:"1200"})),(0,o.kt)("p",null,"Then select the Dimension option and set the length of the first line:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Length constraint",src:n(78924).Z,width:"1792",height:"1200"})),(0,o.kt)("p",null,"Set a distance between the two lines by clicking the line and then the closer endpoint of the second line:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Distance constraint",src:n(45770).Z,width:"1792",height:"1200"})),(0,o.kt)("p",null,"Constraint their angle by clicking the first line and the second line:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Angle constraining",src:n(34409).Z,width:"1792",height:"1200"})),(0,o.kt)("p",null,"And finally make both lines equal by clicking the first line and the second line and then pressing ",(0,o.kt)("strong",{parentName:"p"},"M")," to switch to the second contextual constraint option:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Equal length lines",src:n(41163).Z,width:"1792",height:"1200"})),(0,o.kt)("p",null,"You can constrain this sketch further by clicking on an end point of one of the lines and setting a lock, all with the same Dimension option. Most importantly, all of the steps above are completed without needing to choose a different tool in the toolbar."),(0,o.kt)("p",null,"For cases, when you absolutely need to have quick access to individual constraint options (just like in v0.21 and earlier), you can continue using keyboard shortcuts or selecting those options in the drop-down list:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Individual options",src:n(50119).Z,width:"1547",height:"836"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/FreeCAD/FreeCAD/pull/10463"},"Preserving that possibility")," was one of the requests from users."),(0,o.kt)("p",null,"The new option also allows switching between complementary angles depending on the position of the mouse:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Switching between complementary angles",src:n(36842).Z,width:"1792",height:"1200"})),(0,o.kt)("p",null,"This implementation was possible thanks to active discussions both ",(0,o.kt)("a",{parentName:"p",href:"https://forum.freecad.org/viewtopic.php?style=4&t=65521"},"on the forum")," and in the issue tracker. More improvement is still possible.  Join us if you want to be part of making FreeCAD awesome and many thanks to users and contributors for their input!"))}p.isMDXComponent=!0},31567:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/contextual-constraints-0-21-ca0c28f136d7c2b19885bcdfac503e46.webp"},36842:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/contextual-constraints-complementary-angles-ab3f4c2bfba4f9f2062f4dafad2a28f0.gif"},50119:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/contextual-constraints-individual-options-eb9ba3a20823e766d2a23393a353714f.webp"},89724:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/contextual-constraints-step-0-5d05391d314dd9eaecbd7fe30f388611.webp"},78924:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/contextual-constraints-step-1-427a099a5d3ab3b750234d17830273bd.webp"},45770:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/contextual-constraints-step-2-0ae4fd84ec5722aee371ff45753cb326.webp"},34409:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/contextual-constraints-step-3-14968feeaf87ffcfb733e6767264ecef.webp"},41163:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/contextual-constraints-step-4-bd02c7fc09bd19b9a686943a532a89a4.webp"},3744:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/titlecard-ec8529d8d8eac84191f0543b7add53a3.png"}}]);