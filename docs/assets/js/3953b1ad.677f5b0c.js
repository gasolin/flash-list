"use strict";(self.webpackChunkflash_list=self.webpackChunkflash_list||[]).push([[582],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),m=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=m(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=m(n),p=a,h=c["".concat(l,".").concat(p)]||c[p]||u[p]||r;return n?i.createElement(h,o(o({ref:t},d),{},{components:n})):i.createElement(h,o({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var m=2;m<r;m++)o[m]=n[m];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8903:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return d},default:function(){return c}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=["components"],s={id:"estimated-item-size",title:"Estimated Item Size Prop",slug:"/estimated-item-size",sidebar_position:2},l=void 0,m={unversionedId:"fundamentals/estimated-item-size",id:"fundamentals/estimated-item-size",title:"Estimated Item Size Prop",description:"estimatedItemSize is a single numeric value that hints FlashList about the approximate size of the items before they're rendered. FlashList can then use this information to decide how many items it needs to draw on the screen before initial load and while scrolling. If most of the items are of different sizes, you can think of an average or median value and if most items are of the same size, just use that number. A quick look at Element Inspector can help you determine this. If you're confused between two values, the smaller value is a better choice.",source:"@site/docs/fundamentals/estimated-item-size.md",sourceDirName:"fundamentals",slug:"/estimated-item-size",permalink:"/flash-list/docs/estimated-item-size",editUrl:"https://github.com/Shopify/flash-list/blob/main/documentation/docs/fundamentals/estimated-item-size.md",tags:[],version:"current",lastUpdatedBy:"Parbez",lastUpdatedAt:1710533574,formattedLastUpdatedAt:"3/15/2024",sidebarPosition:2,frontMatter:{id:"estimated-item-size",title:"Estimated Item Size Prop",slug:"/estimated-item-size",sidebar_position:2},sidebar:"autoSidebar",previous:{title:"Performance troubleshooting",permalink:"/flash-list/docs/performance-troubleshooting"},next:{title:"Writing performant components",permalink:"/flash-list/docs/fundamentals/performant-components"}},d=[{value:"How to calculate",id:"how-to-calculate",children:[],level:3},{value:"Deep dive",id:"deep-dive",children:[{value:"Impact on scroll",id:"impact-on-scroll",children:[],level:3},{value:"Impact of number of items drawn on responsiveness",id:"impact-of-number-of-items-drawn-on-responsiveness",children:[],level:3},{value:"Impact of having wrong <code>estimatedItemSize</code>",id:"impact-of-having-wrong-estimateditemsize",children:[],level:3},{value:"Future Revisions",id:"future-revisions",children:[],level:3}],level:2}],u={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"estimatedItemSize")," is a single numeric value that hints ",(0,r.kt)("inlineCode",{parentName:"p"},"FlashList")," about the approximate size of the items before they're rendered. ",(0,r.kt)("inlineCode",{parentName:"p"},"FlashList")," can then use this information to decide how many items it needs to draw on the screen before initial load and while scrolling. If most of the items are of ",(0,r.kt)("strong",{parentName:"p"},"different sizes"),", you can think of an average or median value and if most items are of ",(0,r.kt)("strong",{parentName:"p"},"the same size"),", just use that number. A quick look at ",(0,r.kt)("inlineCode",{parentName:"p"},"Element Inspector")," can help you determine this. If you're confused between two values, the smaller value is a better choice."),(0,r.kt)("h3",{id:"how-to-calculate"},"How to calculate"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use the average item size from the first render - this will be a part of the warning if you don't specify ",(0,r.kt)("inlineCode",{parentName:"li"},"estimatedItemSize"),"."),(0,r.kt)("li",{parentName:"ul"},"If most items are of ",(0,r.kt)("strong",{parentName:"li"},"similar heights")," or ",(0,r.kt)("strong",{parentName:"li"},"widths")," (if horizontal), just open up element inspector from ",(0,r.kt)("inlineCode",{parentName:"li"},"react-native's")," dev menu, check the size of one of the items, and use it. Don't worry about different devices. We have enough tolerance to work around it."),(0,r.kt)("li",{parentName:"ul"},"If the items ",(0,r.kt)("strong",{parentName:"li"},"have a lot of different sizes"),", choose a few that are pretty different, use element inspector, read their sizes, and calculate an average. This average will work great, don't worry about solving for different devices sizes. There's enough tolerance internally."),(0,r.kt)("li",{parentName:"ul"},"If you run into a situation where more than one value seems like a good fit, pick the smaller one.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://user-images.githubusercontent.com/7811728/159806998-ce6b0c27-576c-4fe1-8170-cfa23788cfae.png",width:"700"})),(0,r.kt)("h2",{id:"deep-dive"},"Deep dive"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"FlashList")," doesn't know the size of its children before they're rendered. When the list is loading, it needs to decide how many items to render. There are only few choices here:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Render a fixed number of items:")," A default number of items to render on load may not be right for all devices and it should ideally depend on screen size. Drawing smaller number of items will show up blank space on load and drawing too many will increase load time."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Use a default value for ",(0,r.kt)("inlineCode",{parentName:"strong"},"estimatedItemSize"),":")," If we use a default size for items on launch, we still run into problems. Let's say we use ",(0,r.kt)("inlineCode",{parentName:"li"},"50px")," as the default, without you being aware of this, and you're rendering a list with large items like a news feed where items are complex. Let's say the actual rendered size is around ",(0,r.kt)("inlineCode",{parentName:"li"},"500px"),". Based on this assumption, we will draw ",(0,r.kt)("inlineCode",{parentName:"li"},"20")," items on load if the screen size is ",(0,r.kt)("inlineCode",{parentName:"li"},"1000px")," while we should only draw 2. This result is not optimal, and you may not even realize how much faster loads can be."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Take ",(0,r.kt)("inlineCode",{parentName:"strong"},"estimatedItemSize")," from developers:")," Instead of trying to hide away this requirement, we're letting you make the decision. We have decided to use a size estimate and not an initial count to render because size is a more stable value across device sizes.")),(0,r.kt)("p",null,"We currently keep ",(0,r.kt)("inlineCode",{parentName:"p"},"estimatedItemSize")," optional but ",(0,r.kt)("strong",{parentName:"p"},"strongly")," recommend you to set it. If you don't, you will get a warning with suggestion to set it to a value equal to the average item size from the first render."),(0,r.kt)("h3",{id:"impact-on-scroll"},"Impact on scroll"),(0,r.kt)("p",null,"During very quick scrolls, if offsets are changing very quickly, ",(0,r.kt)("inlineCode",{parentName:"p"},"FlashList")," might run into a situation where it needs to prepare more than one item. This is just another version of the same problem. If your estimates are too big compared to actual sizes, ",(0,r.kt)("inlineCode",{parentName:"p"},"FlashList")," might think that a small number of items is enough to fill the screen and you might see blanks. ",(0,r.kt)("em",{parentName:"p"},"This is the primary reason we suggest using a smaller value if you're confused between the two of them.")," Drawing a few more items is better than showing blanks. With ",(0,r.kt)("inlineCode",{parentName:"p"},"FlashList"),", we don't expect blanks unless components are very slow or ",(0,r.kt)("inlineCode",{parentName:"p"},"estimatedItemSize")," is too big compared to actual sizes."),(0,r.kt)("h3",{id:"impact-of-number-of-items-drawn-on-responsiveness"},"Impact of number of items drawn on responsiveness"),(0,r.kt)("p",null,"Having a few items on the screen is great for performance and responsiveness. Small render tree is much faster to update. Let's say there's a checkbox within your list items and you store their selected state in a store. You'd want this checkbox to be extremely responsive while changing states and having a large render tree will prevent that from happening. Many of you might have seen this problem in ",(0,r.kt)("inlineCode",{parentName:"p"},"FlatList"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"FlatList")," has a default ",(0,r.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/optimizing-flatlist-configuration#windowsize"},(0,r.kt)("inlineCode",{parentName:"a"},"windowSize"))," of ",(0,r.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/optimizing-flatlist-configuration#windowsize"},(0,r.kt)("inlineCode",{parentName:"a"},"21"))," which means that, on a ",(0,r.kt)("inlineCode",{parentName:"p"},"1000px")," tall device, it will draw about ",(0,r.kt)("inlineCode",{parentName:"p"},"10,000px")," at the bottom and at the top of currently visible window. ",(0,r.kt)("inlineCode",{parentName:"p"},"FlashList")," in comparison will only draw ",(0,r.kt)("inlineCode",{parentName:"p"},"250px")," extra on the top and bottom irrespective of the screen size. You will be amazed with how responsive things become when we have a very small number of items and that's why we care so much about it."),(0,r.kt)("h3",{id:"impact-of-having-wrong-estimateditemsize"},"Impact of having wrong ",(0,r.kt)("inlineCode",{parentName:"h3"},"estimatedItemSize")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Please note ",(0,r.kt)("inlineCode",{parentName:"li"},"FlashList")," will not overlap or show gaps between items due to incorrect values provided here."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"If the estimate is much higher than actual values"),", you may see few items load on screen and then immediately more will show up. During fast scroll you may see some blank area. It's not because things have become slow. The list just doesn't know that it has not drawn enough. Once the list knows the actual sizes of items it won't rely on estimates and that's why on scrolling up you may not see the same problem.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://user-images.githubusercontent.com/7811728/159801541-5540820d-4d90-491d-9645-dd43b684c437.png",width:"700"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"If the estimate is much smaller than actual values"),", not much will change visibly but you will be drawing more than necessary. If your components are complex, load times might increase.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://user-images.githubusercontent.com/7811728/159801594-51a26edc-8f5b-4fb5-a268-c138b525bd3c.png",width:"700"})),(0,r.kt)("h3",{id:"future-revisions"},"Future Revisions"),(0,r.kt)("p",null,"We're looking at ways to remove this requirement by leveraging ",(0,r.kt)("inlineCode",{parentName:"p"},"Fabric"),". In the short term, we plan to compute this average after the initial load to prevent issues during quick scrolls. The value provided will be also more relevant for load time optimization."))}c.isMDXComponent=!0}}]);