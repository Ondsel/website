"use strict";(self.webpackChunkondsel=self.webpackChunkondsel||[]).push([[4836],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>d});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(o),p=r,d=m["".concat(l,".").concat(p)]||m[p]||h[p]||i;return o?n.createElement(d,a(a({ref:t},c),{},{components:o})):n.createElement(d,a({ref:t},c))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=o[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},658:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=o(7462),r=(o(7294),o(3905));const i={slug:"merge-meeting",title:"Live merge meetings: what we learned from merging 75 pull requests in 30 days",description:"Pull request rot is a quick way to turn off first-time and long-time contributors. The merge meeting is one way to get PRs moving again.",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Rebecca Dodd",title:"Contributing Writer",url:"https://www.thebasementoffice.co.uk",image_url:"/img/Rebecca-Dodd-profile.JPEG"}],tags:["freecad","development"],image:"./titlecard.png",draft:!1},a=void 0,s={permalink:"/blog/merge-meeting",source:"@site/blog/2023-09-19/mergemeeting.md",title:"Live merge meetings: what we learned from merging 75 pull requests in 30 days",description:"Pull request rot is a quick way to turn off first-time and long-time contributors. The merge meeting is one way to get PRs moving again.",date:"2023-09-19T00:00:00.000Z",formattedDate:"September 19, 2023",tags:[{label:"freecad",permalink:"/blog/tags/freecad"},{label:"development",permalink:"/blog/tags/development"}],readingTime:6.915,hasTruncateMarker:!1,authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Rebecca Dodd",title:"Contributing Writer",url:"https://www.thebasementoffice.co.uk",image_url:"/img/Rebecca-Dodd-profile.JPEG",imageURL:"/img/Rebecca-Dodd-profile.JPEG"}],frontMatter:{slug:"merge-meeting",title:"Live merge meetings: what we learned from merging 75 pull requests in 30 days",description:"Pull request rot is a quick way to turn off first-time and long-time contributors. The merge meeting is one way to get PRs moving again.",authors:[{name:"Brad Collette",title:"Ondsel Core Team",url:"https://github.com/sliptonic",image_url:"https://avatars.githubusercontent.com/u/538057?v=4",imageURL:"https://avatars.githubusercontent.com/u/538057?v=4"},{name:"Rebecca Dodd",title:"Contributing Writer",url:"https://www.thebasementoffice.co.uk",image_url:"/img/Rebecca-Dodd-profile.JPEG",imageURL:"/img/Rebecca-Dodd-profile.JPEG"}],tags:["freecad","development"],image:"./titlecard.png",draft:!1},prevItem:{title:"Ondsel made constraining sketches faster and easier",permalink:"/blog/ondsel-made-constraining-sketches-faster-and-easier"},nextItem:{title:"The road to FreeCAD 1.0 is shorter than you think",permalink:"/blog/the-road-to-freecad-1-0-is-shorter-than-you-think"}},l={image:o(5538).Z,authorsImageUrls:[void 0,void 0]},u=[{value:"Why some PRs fail to get merged",id:"why-some-prs-fail-to-get-merged",level:2},{value:"The PR is too large to effectively review",id:"the-pr-is-too-large-to-effectively-review",level:3},{value:"The goals of the PR are too obscure",id:"the-goals-of-the-pr-are-too-obscure",level:3},{value:"Competing solutions exist",id:"competing-solutions-exist",level:3},{value:"Solutions",id:"solutions",level:2},{value:"Bring alignment forward",id:"bring-alignment-forward",level:3},{value:"Set realistic expectations",id:"set-realistic-expectations",level:3},{value:"Reduce the burden of reviewing",id:"reduce-the-burden-of-reviewing",level:3},{value:"Communication",id:"communication",level:3},{value:"Progress over perfection",id:"progress-over-perfection",level:3},{value:"The merge meeting",id:"the-merge-meeting",level:3},{value:"Merge meetings help us move faster now and in the future",id:"merge-meetings-help-us-move-faster-now-and-in-the-future",level:3},{value:"Join us!",id:"join-us",level:2}],c={toc:u};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Pull request rot is a quick way to turn off first-time and long-time contributors. The merge meeting is one way to get PRs moving again."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u201cIt isn\u2019t just about the license, but the way that Hashicorp has maintained the Terraform project. \u2026 there are open issues and pull requests that just get ignored as Hashicorp clearly doesn\u2019t see value in open source contributors.\u201d \u2013 ",(0,r.kt)("a",{parentName:"p",href:"https://news.ycombinator.com/item?id=37135553"},"tedivm on Hacker News"))),(0,r.kt)("p",null,"Tensions around the application of open source philosophy have been discussed a lot in recent weeks, and I want to touch on one of the objections to the recent ",(0,r.kt)("a",{parentName:"p",href:"https://news.ycombinator.com/item?id=37081306"},"Hashicorp news")," here. We\u2019ve talked about ",(0,r.kt)("a",{parentName:"p",href:"https://ondsel.com/blog/better-github-issues"},"stale issues")," on this blog before, and we can see in the above quote that ignored issues and PRs do have a real impact on contributor motivation and sentiment towards a project. There are a lot of reasons why some PRs slip through the cracks, but there are things you can do to catch them."),(0,r.kt)("h2",{id:"why-some-prs-fail-to-get-merged"},"Why some PRs fail to get merged"),(0,r.kt)("p",null,"PRs can suffer death by neglect or by a thousand cuts. Maintainers that ignore PRs or let them get tangled up in dozens of comments (debating the right way to address a problem or implement a feature) can expect one-time or burned-out contributors, slower releases, and a lot of wasted effort on rebasing."),(0,r.kt)("h3",{id:"the-pr-is-too-large-to-effectively-review"},"The PR is too large to effectively review"),(0,r.kt)("p",null,"PRs that do too many things or touch too much of the codebase at once pose a risk of unforeseen side effects. They\u2019re just too unwieldy to review thoroughly (sometimes even ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories#diff-limits"},"GitHub won\u2019t render the entire diff in the PR"),"), so the reviewer doesn\u2019t feel comfortable taking responsibility for merging."),(0,r.kt)("h3",{id:"the-goals-of-the-pr-are-too-obscure"},"The goals of the PR are too obscure"),(0,r.kt)("p",null,"Some PRs don\u2019t explain the original problem sufficiently for someone to be able to test their behavior. That\u2019s one end of the spectrum\u2014at the other, not everyone contributing to a project has the same use cases, goals, or needs. Once the project evolves beyond its initial purpose and scope, you can end up with PRs that touch or implement an obscure feature that maintainers don\u2019t understand or feel confident in reviewing."),(0,r.kt)("h3",{id:"competing-solutions-exist"},"Competing solutions exist"),(0,r.kt)("p",null,"There are usually multiple ways to solve a problem. A PR that implements one solution can devolve into a debate about the merits of that approach over others, because no consensus on direction was reached ahead of time. Sometimes there is no precedent for the reviewer to fall back on, or they lack the institutional knowledge or context to make the call."),(0,r.kt)("p",null,"There\u2019s a lot of overlap with our discussion of ",(0,r.kt)("a",{parentName:"p",href:"https://ondsel.com/blog/freecad-topological-naming/"},"why RealThunder\u2019s branch with a topological naming fix for FreeCAD hasn\u2019t been merged yet"),"."),(0,r.kt)("h2",{id:"solutions"},"Solutions"),(0,r.kt)("h3",{id:"bring-alignment-forward"},"Bring alignment forward"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://ondsel.com/blog/better-github-issues"},"Better issues")," \u2192 better PRs. If you can find alignment (if not consensus) at the issue stage, you avoid a lot of the agonizing over philosophy and implementation in PRs. Documenting best practices and approaches in a project charter or requiring design documents upfront can help with alignment that preempts endless debate."),(0,r.kt)("h3",{id:"set-realistic-expectations"},"Set realistic expectations"),(0,r.kt)("p",null,"Maintainers\u2014even of small projects\u2014need to communicate the expectations and process for successful contribution."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u201cIf you have no plans to maintain hobby code, you should discourage usage. Say it right up front:\n\u2018TagTree is unsupported and not meant for use in a production Dart application, unless you're willing to fork the code and fix any bugs you find yourself.\u2019")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Or if a project is widely used but difficult to contribute to, you should say so up front, like this:\n\u2018Contributing code is one of the more difficult ways to contribute to Guava, and is almost never what the project really needs most ","[...]"," We know it's tempting to submit code before the feature is accepted, but this is not always a good use of your time.\u2019\u201d - ",(0,r.kt)("a",{parentName:"p",href:"https://news.ycombinator.com/item?id=8713694"},"skybrian on Hacker News"))),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FreeCAD/FreeCAD/blob/master/CONTRIBUTING.md"},"contributing policy")," should, at the very least, tell contributors when to expect reviews and how to give their PR the best chance of getting merged."),(0,r.kt)("h3",{id:"reduce-the-burden-of-reviewing"},"Reduce the burden of reviewing"),(0,r.kt)("p",null,"You want reviewers to be able to focus on big-picture factors like the performance impact of a PR or alignment with project direction, not spending time on undifferentiated gruntwork. You can do this by ensuring you have extensive test coverage and automation wherever possible."),(0,r.kt)("h3",{id:"communication"},"Communication"),(0,r.kt)("p",null,"The PR (and related issue) is an act of communication. Both the contributor and the maintainers have a responsibility to communicate effectively."),(0,r.kt)("p",null,"Contributors should make very few assumptions about what the maintainers already know, and make it extremely easy to understand the context of the PR, the original problem, how the solution works, and any concerns.\nMaintainers should ensure that communication is ongoing. Using bots to bump PRs for updates helps to remind reviewers that a PR is outstanding, but also reassures the PR author that it hasn\u2019t been forgotten (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/GoogleCloudPlatform/magic-modules/pull/8671#issuecomment-1681197585"},"for example"),")."),(0,r.kt)("h3",{id:"progress-over-perfection"},"Progress over perfection"),(0,r.kt)("p",null,"You can always iterate after merging. If you spend too much time trying to get the PR perfect, a new contributor may get discouraged and never come back."),(0,r.kt)("h3",{id:"the-merge-meeting"},"The merge meeting"),(0,r.kt)("p",null,"Even if you implement all of the above tactics successfully, sometimes knowing whether or not to merge a PR is hard. When people are uncertain, they will defer to others. Everyone can end up differing and nobody takes action."),(0,r.kt)("p",null,"To combat PR stagnation, FreeCAD has started having synchronous merge meetings including maintainers and contributors to discuss next steps on outstanding PRs. This live session is important and serves a number of purposes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Teasing out concerns and unspoken worry"),(0,r.kt)("li",{parentName:"ul"},"Multiple contributors share the risk of merging a PR"),(0,r.kt)("li",{parentName:"ul"},"Multiple perspectives put concerns into proper context"),(0,r.kt)("li",{parentName:"ul"},"Multiple perspectives offer novel and productive outcomes")),(0,r.kt)("p",null,"Maintainers are referees in the meeting, making sure each contribution is evaluated according to the process. Did it start with an issue? Was there some consensus on the solution? Is the code passing CI?"),(0,r.kt)("p",null,"We won\u2019t hesitate to kick something back if a contributor blatantly ignores the process, but we try not to be militant and will merge good-faith contributions. Sometimes this means merging things we are (mildly) uncomfortable with because the contributor did everything by the book. When that happens, process says you merge."),(0,r.kt)("p",null,"What does this look like in practice?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u201cLet\u2019s ask ","[another contributor]"," for a code review, she knows about this module\u201d"),(0,r.kt)("li",{parentName:"ul"},"\u201cThis PR is really doing two different things. Let\u2019s ask the author to split\u201d"),(0,r.kt)("li",{parentName:"ul"},"\u201cThis PR and that other one are in conflict. Let\u2019s get those two people talking\u201d"),(0,r.kt)("li",{parentName:"ul"},"\u201cThis is low risk. Let\u2019s merge it and see if anyone complains\u201d"),(0,r.kt)("li",{parentName:"ul"},"\u201cThis is a major feature and we\u2019re close to a release. Let\u2019s push this to the next milestone\u201d")),(0,r.kt)("h3",{id:"merge-meetings-help-us-move-faster-now-and-in-the-future"},"Merge meetings help us move faster now and in the future"),(0,r.kt)("p",null,"The value of these meetings is multifold. We clear a lot of our PR backlog quickly, avoiding the bystander effect that sometimes arises from having multiple reviewers assigned to a PR. We rely on early issues and the contributing policy to \u2018push back\u2019 on poorly implemented fixes and rushed code."),(0,r.kt)("p",null,"Apart from the immediate effects of getting more PRs merged faster, there are longer-term effects."),(0,r.kt)("p",null,"The merge meeting naturally encourages more discussion of milestone and release goals. We learn which maintainers have a \u2018bigger picture\u2019 of the project and community, and the ones who don\u2019t get coaching by participating in the process. As you build consensus as a group, you expose and codify the implicit rules and standards that more experienced reviewers use in their assessment of PRs. By working together to agree on standards of what is acceptable, everyone builds their confidence."),(0,r.kt)("p",null,"The merge meeting is a good place for maintainers to learn:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"About the codebase"),(0,r.kt)("li",{parentName:"ul"},"About the project\u2019s policies and why they exist"),(0,r.kt)("li",{parentName:"ul"},"To take appropriate risks"),(0,r.kt)("li",{parentName:"ul"},"How to think about a contribution (maintainers learn from each other how to be better at evaluating code)"),(0,r.kt)("li",{parentName:"ul"},"About the tools available in the platform")),(0,r.kt)("p",null,"It\u2019s also a good place for contributors to learn about how merge decisions get made and to weigh in on others\u2019 PRs (not just advocate for their own)."),(0,r.kt)("h2",{id:"join-us"},"Join us!"),(0,r.kt)("p",null,"The merge meetings are listed on ",(0,r.kt)("a",{parentName:"p",href:"https://www.freecad.org/events.php"},"FreeCAD community calendar")," and are open to anyone.\nJoin the next merge meeting."))}m.isMDXComponent=!0},5538:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/titlecard-fcc8fc80d63b5694ea2fe437ad10fbba.png"}}]);