"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[593],{593:function(e,n,r){r.r(n),r.d(n,{default:function(){return j}});var t=r(861),i=r(885),s=r(757),c=r.n(s),a=r(791),o=r(689),l=r(643),u=r(414),d=function(e){var n=e.map((function(e){return e.name}));return 0===n.length?"Other":n.length>3?"".concat(n[0],", ").concat(n[1],", 'Others'"):n.join(", ")},h=r(731),v=r(128),p=r(253),x=r(184),f=function(e){var n,r,t,i,s=e.movie,c=s.title,l=s.poster_path,u=s.release_date,d=void 0===u?null:u,f=s.vote_average,j=void 0===f?null:f,g=s.overview,m=s.genres,b=e.getGenres,w=(0,o.TH)();return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{children:[(0,x.jsx)(h.rU,{to:null!==(n=null===(r=w.state)||void 0===r?void 0:r.from)&&void 0!==n?n:"/",children:(0,x.jsxs)("div",{children:[(0,x.jsx)(v.siY,{}),(0,x.jsx)("p",{children:"Go back"})]})}),(0,x.jsx)("div",{children:(0,x.jsx)("img",{src:l?"https://image.tmdb.org/t/p/w500/".concat(l):p,alt:c,width:"300"})}),(0,x.jsxs)("div",{children:[(0,x.jsx)("p",{children:d?"".concat(c," (").concat((i=d,new Date(i).getFullYear()),")"):c}),(0,x.jsx)("p",{children:j?"User Score: ".concat((t=j,10*Math.round(t)),"% "):"User Score: no score"}),(0,x.jsx)("p",{children:"Overview"}),(0,x.jsx)("p",{children:g||"No overview"}),(0,x.jsx)("p",{children:"Genres"}),(0,x.jsx)("p",{children:b(m)})]})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("p",{children:"Additional information"}),(0,x.jsxs)("ul",{children:[(0,x.jsx)("li",{children:(0,x.jsx)(h.OL,{to:"cast",children:"Cast"})}),(0,x.jsx)("li",{children:(0,x.jsx)(h.OL,{to:"reviews",children:"Reviews"})})]})]}),(0,x.jsx)(a.Suspense,{fallback:null,children:(0,x.jsx)(o.j3,{})})]})},j=function(){var e=(0,a.useState)(null),n=(0,i.Z)(e,2),r=n[0],s=n[1],h=(0,a.useState)(!1),v=(0,i.Z)(h,2),p=v[0],j=v[1],g=(0,a.useState)(null),m=(0,i.Z)(g,2),b=m[0],w=m[1],k=(0,o.UO)().movieId;console.log(k),console.log(r);var S=(0,a.useRef)(!0);return(0,a.useEffect)((function(){var e=function(){var e=(0,t.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!S.current){e.next=4;break}return S.current=!1,e.abrupt("return");case 4:return j(!0),e.next=7,(0,u.v)("https://api.themoviedb.org/3/movie/".concat(k,"?api_key=084c550b6f1767443109bcf4bcaee21b&language=en"));case 7:n=e.sent,console.log(n),s(n),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0.message),w(e.t0);case 16:return e.prev=16,j(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[0,12,16,19]])})));return function(){return e.apply(this,arguments)}}();e()}),[k]),(0,x.jsxs)("main",{children:[r&&(0,x.jsx)("div",{children:(0,x.jsx)(f,{movie:r,getGenres:d})}),b&&(0,x.jsx)("p",{children:"Something wrong. Try again later."}),p&&(0,x.jsx)(l.g4,{height:"80",width:"80",radius:"9",color:"blue",ariaLabel:"three-dots-loading",wrapperStyle:{justifyContent:"center"},visible:!0})]})}},414:function(e,n,r){r.d(n,{v:function(){return a}});var t=r(861),i=r(757),s=r.n(i),c=r(388),a=function(){var e=(0,t.Z)(s().mark((function e(n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get(n);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},253:function(e,n,r){e.exports=r.p+"static/media/no-image-icon.b59890b7b479e863e07c.jpg"}}]);
//# sourceMappingURL=593.cf489bf0.chunk.js.map