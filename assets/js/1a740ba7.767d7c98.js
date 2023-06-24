"use strict";(self.webpackChunkondsel=self.webpackChunkondsel||[]).push([[7846],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var r=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(o),d=a,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||n;return o?r.createElement(m,i(i({ref:t},u),{},{components:o})):r.createElement(m,i({ref:t},u))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<n;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},5163:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var r=o(7462),a=(o(7294),o(3905));const n={slug:"chatgpt-screwtape",title:"ChatGPT acts demonic about open-source software",authors:{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://github.com/sliptonic.png"},tags:["chatGPT","fun","foss"],image:"/img/Ondsel_OpenGraph.jpg"},i=void 0,s={permalink:"/blog/chatgpt-screwtape",source:"@site/blog/2023-02-17/chatgpt-screwtape.md",title:"ChatGPT acts demonic about open-source software",description:"I recently came across an audio recording of C.S. Lewis's famous The Screwtape Letters read by John Cleese. It's excellent and made me wonder what Uncle Screwtape would think of the modern world, software development, and open-source software.  I was inspired to ask ChatGPT.  What follows is an unedited transcript.",date:"2023-02-17T00:00:00.000Z",formattedDate:"February 17, 2023",tags:[{label:"chatGPT",permalink:"/blog/tags/chat-gpt"},{label:"fun",permalink:"/blog/tags/fun"},{label:"foss",permalink:"/blog/tags/foss"}],readingTime:3.355,hasTruncateMarker:!1,authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://github.com/sliptonic.png",imageURL:"https://github.com/sliptonic.png"}],frontMatter:{slug:"chatgpt-screwtape",title:"ChatGPT acts demonic about open-source software",authors:{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://github.com/sliptonic.png",imageURL:"https://github.com/sliptonic.png"},tags:["chatGPT","fun","foss"],image:"/img/Ondsel_OpenGraph.jpg"},prevItem:{title:"Don't hold your breath for FreeCAD's topological naming fix",permalink:"/blog/freecad-topological-naming"},nextItem:{title:"When your Definition of Done is a barrier to contributors (and other reasons working with first-timers is hard)",permalink:"/blog/contribution-barriers"}},l={authorsImageUrls:[void 0]},c=[],u={toc:c},p="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"I recently came across an audio recording of C.S. Lewis's famous ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/playlist?list=PLA8BAC9375345E6C7"},(0,a.kt)("em",{parentName:"a"},"The Screwtape Letters")," read by John Cleese"),". It's excellent and made me wonder what Uncle Screwtape would think of the modern world, software development, and open-source software.  I was inspired to ask ",(0,a.kt)("a",{parentName:"p",href:"https://openai.com/blog/chatgpt/"},"ChatGPT"),".  What follows is an unedited transcript."),(0,a.kt)("p",null,"I'm not sure what impresses me more; how well it understands open-source or how well it imitates a demon!"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{alt:"sliptonic",src:o(898).Z,width:"32",height:"32"}),' Contributors to an open-source software project need to feel appreciated. Write a paragraph in the style of "The Screwtape letters" that illustrates this point. Pretend that you are Uncle Screwtape')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{alt:"screwtape",src:o(6389).Z,width:"30",height:"30"})," My dear Wormwood,")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"It is imperative that we do all in our power to discourage appreciation for the contributors of this open-source software project. You see, gratitude breeds contentment and a sense of fulfillment, and these are not emotions that befit those who toil in our Father Below's fields.\nWe must strive to keep these contributors feeling unacknowledged, for when they feel appreciated, they are less likely to become discouraged and more likely to continue their good work. Encourage neglect, apathy, and disregard towards their contributions. Keep them from feeling valued, for when they feel valued, they are less likely to become restless and more likely to remain steadfast in their labors.\nThe more we can sow the seeds of discontent and frustration in the hearts of these contributors, the more likely they will be to become bitter and discouraged, and the less likely they will be to continue in their contributions to this project. So let us be vigilant, my dear Wormwood, and do all in our power to undermine appreciation and cultivate discontent in these contributors.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Yours affectionately,"),(0,a.kt)("p",{parentName:"blockquote"},"Uncle Screwtape")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{alt:"sliptonic",src:o(898).Z,width:"32",height:"32"})," Failing to acknowledge good work also makes the contributors think the work is unimportant. Write a p.s. to the letter expressing this")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{alt:"screwtape",src:o(6389).Z,width:"30",height:"30"})," P.S. I nearly forgot, my dear Wormwood, to mention the added benefit of neglecting to acknowledge the good work of these contributors. Failing to show appreciation for their work will not only discourage them and make them feel unvalued, but it will also make them question the importance of their work. If they believe that their contributions are insignificant and go unnoticed, they are less likely to put forth the effort and care that they would if they felt their work was valued and appreciated.\nThus, by fostering a sense of neglect and disregard, we can effectively accomplish two of our goals at once: keep the contributors discouraged and undermine the value and importance of their work. An added bonus, don't you agree?")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Yours ever more devotedly,"),(0,a.kt)("p",{parentName:"blockquote"},"Uncle Screwtape")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{alt:"sliptonic",src:o(898).Z,width:"32",height:"32"})," Assume that commercial software companies are evil. How would Screwtape explain why open-source software should be discouraged?")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{alt:"screwtape",src:o(6389).Z,width:"30",height:"30"})," My dear Wormwood,")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Commercial software companies, as you well know, are instruments of our Father Below, furthering his dark designs through the propagation of their products. However, the open-source software movement threatens to disrupt this grand scheme.\nOpen-source software, with its emphasis on collaboration and community, encourages individuals to work together for the betterment of society as a whole. Such a cooperative and selfless spirit, left unchecked, can lead to the growth of goodness and light, which are anathema to our cause.\nIt is therefore imperative that we do all in our power to discourage the development and use of open-source software. We must sow the seeds of discontent among its contributors, as I mentioned in my previous letter, and encourage selfishness and greed among its users. By doing so, we can corrupt the very spirit that gives open-source software its strength, and turn it into a tool for furthering our own dark purposes.\nRemember, the success of open-source software is a threat to the power of commercial software companies, which are our allies in the great battle for the souls of humanity. Let us do all in our power to ensure that the threat of open-source software is neutralized, so that our Father Below may reign supreme.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Yours in service,"),(0,a.kt)("p",{parentName:"blockquote"},"Uncle Screwtape")))}h.isMDXComponent=!0},898:(e,t,o)=>{o.d(t,{Z:()=>r});const r="data:image/webp;base64,UklGRkoBAABXRUJQVlA4ID4BAADQBgCdASogACAAPok4lkelI6IhMAwAoBEJaQATjmRAj0nfH9GCTmxk+0BGPSSDPe4ljn9DcU3cfn/NzvHf3YAA/u5lkj+Ex1di3FsDO49YA0U1+jQfirkLJQXHH/SEfZfg99hOafhgtxu+EwJhMaB6I3UGY4hHdJq3qZFp4hwuvhYx8QcG0UpAzzf44tzk/pYfyPvksOozkiQ5W3oGXx1ig2fddOzMRbsILH3/ZZJd9ns1xvaxzjv9acDR+rjhYmuwvCHLVg+NwbblQi1KtzffbXFgxCKGmwojE8GpQ5UJ+esfYobkfFPSS9ccd4l1vZtxUwSzH6dRENxES34evDaJxv7KapSVeA1NVgO6WsEtEo1oKme/9xY3Ju0Ev3IR5mlYmJkB0rPnDLXWuAv8ZT7rbZl3VLr72wYZG7T2IAA="},6389:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/unclescrewtape-6a8d0fde71188e48aae583075e8b2268.png"}}]);