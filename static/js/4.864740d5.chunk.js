(this["webpackJsonptwitch-clip-queue"]=this["webpackJsonptwitch-clip-queue"]||[]).push([[4],{107:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var c=r(15),n=r(109),s=(r(0),r(2)),i=["className","colour","children","onClick"],l=function(e,t){switch(t=(t||"")+" ",e){case"red":return t+"bg-red-500 border-red-700 hover:bg-red-400 hover:border-red-500";case"green":return t+"bg-green-500 border-green-700 hover:bg-green-400 hover:border-green-500";case"yellow":return t+"bg-yellow-500 border-yellow-700 hover:bg-yellow-400 hover:border-yellow-500"}return t+"bg-purple-500 border-purple-700 hover:bg-purple-400 hover:border-purple-500"};t.b=function(e){var t=e.className,r=e.colour,o=e.children,a=e.onClick,h=Object(n.a)(e,i),u=l(r,t);return Object(s.jsx)("button",Object(c.a)(Object(c.a)({},h),{},{className:u,onClick:a,children:o}))}},109:function(e,t,r){"use strict";function c(e,t){if(null==e)return{};var r,c,n=function(e,t){if(null==e)return{};var r,c,n={},s=Object.keys(e);for(c=0;c<s.length;c++)r=s[c],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(c=0;c<s.length;c++)r=s[c],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}r.d(t,"a",(function(){return c}))},110:function(e,t,r){"use strict";r(0);var c=r(2);var n=function(){return Object(c.jsxs)("footer",{className:"text-xs mt-4 ml-16",children:["Created by"," ",Object(c.jsx)("span",{className:"font-bold",children:Object(c.jsx)("a",{href:"https://github.com/JakeMiki",target:"_blank",rel:"noreferrer",children:"JakeMiki"})})]})},s=r(1),i=r.n(s),l=r(3),o=r(6),a=r(107),h=r(22),u=r(10);var d=function(){var e=Object(o.c)(u.c);return Object(c.jsxs)("header",{className:"flex mb-4 pl-16 pr-32 pt-2 pb-2 bg-gray-800",children:[Object(c.jsx)("h1",{children:"Twitch Clip Queue"}),Object(c.jsx)("div",{className:"flex-grow"}),Object(c.jsx)("div",{children:e.get()?Object(c.jsx)(a.b,{onClick:Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.e)();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),children:"Logout"}):Object(c.jsx)(a.b,{onClick:function(){return h.a.redirectToLogin()},children:"Login with Twitch"})})]})};t.a=function(e){var t=e.children,r=e.fullWidth,s=void 0!==r&&r?"w-full px-16":"lg:container lg:mx-auto";return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(d,{}),Object(c.jsx)("div",{className:s,children:t}),Object(c.jsx)(n,{})]})}},115:function(e,t,r){},134:function(e,t,r){"use strict";r.r(t);r(0);var c=r(110),n=r(22),s=r.p+"static/media/screenshot.bd045114.png",i=(r(115),r(2));t.default=function(){return Object(i.jsxs)(c.a,{children:[Object(i.jsx)("section",{className:"mb-4",children:Object(i.jsx)("p",{children:"Enqueue and play clips from your Twitch Chat using nothing more than your web browser"})}),Object(i.jsxs)("section",{className:"mb-4 leading-relaxed",children:[Object(i.jsx)("h2",{children:"Quickstart"}),Object(i.jsxs)("p",{className:"items-baseline",children:["Simply ",Object(i.jsx)("a",{href:n.a.getLoginUrl(),children:"Login with Twitch"}),". You'll be redirected to Twitch and asked to allow the application to get your username and read chat. Any information received from Twitch is not sent anywhere but Twitch. By default you'll join your channel's chat, but you can change the channel afterwards. The only thing left to do is to open the clip floodgates and wait for some to be posted in chat."]})]}),Object(i.jsxs)("section",{className:"mb-4 leading-relaxed",children:[Object(i.jsx)("h2",{children:"Features"}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:Object(i.jsx)("strong",{children:"Supports Twitch clip, VOD and YouTube video links"})}),Object(i.jsxs)("li",{children:[Object(i.jsx)("strong",{children:"Integrates with Twitch chat"}),Object(i.jsx)("p",{children:"gathers links from messages to build the queue, by default from your chat but can join arbitrary channels"})]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("strong",{children:"Deduplicates clips"}),Object(i.jsx)("p",{children:"prevents from adding the same clip to the queue multiple times, persists remembered clips between queues"})]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("strong",{children:"Recognizes clip popularity"}),Object(i.jsx)("p",{children:"when the same clip is posted by multiple users it will be moved up in the queue"})]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("strong",{children:"Offers basic queue management"}),Object(i.jsx)("p",{children:"allows playing clips out of order, removing clips from queue, clearing the queue and purging persistant clip memory"})]}),Object(i.jsxs)("li",{children:[Object(i.jsxs)("strong",{children:[Object(i.jsx)("span",{className:"text-purple-400",children:"NEW"})," Handles deleted messages and timed out users"]}),Object(i.jsx)("p",{children:"when a message with clip link is deleted from chat it is removed from the queue as well"}),Object(i.jsx)("p",{children:"if a user that submitted clips is timed out their clips are removed from the queue (unless someone else submitted the as well)"})]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("strong",{children:"Respects privacy"}),Object(i.jsx)("p",{children:"does not store any personal data, does not communicate with any third party services"}),Object(i.jsx)("p",{children:"requires permission only to get your username and read chat"})]})]})]}),Object(i.jsxs)("section",{children:[Object(i.jsx)("h2",{children:"Screenshot"}),Object(i.jsx)("a",{href:s,target:"_blank",rel:"noreferrer",className:"block mx-auto screenshot border-gray-200",children:Object(i.jsx)("img",{src:s,alt:"Screenshot"})})]})]})}}}]);
//# sourceMappingURL=4.864740d5.chunk.js.map