"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[685],{8603:function(n,e,t){t.d(e,{Kp:function(){return b},Y:function(){return v},Z6:function(){return j},dH:function(){return g},g:function(){return p},gy:function(){return Z},iG:function(){return y},ic:function(){return w},o$:function(){return x}});var r,o,i,a,c,s,l,u,f,d=t(168),m=t(5867),h=t(6355),p=m.ZP.ul(r||(r=(0,d.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: start;\n  gap: 2.4rem;\n  padding: 1.2rem 2.4rem;\n"]))),g=m.ZP.li(o||(o=(0,d.Z)(["\n  border-radius: 0.4rem;\n  overflow: hidden;\n\n  @media (max-width: 520px) {\n    display: block;\n    width: 40rem;\n    height: 60rem;\n  }\n"]))),x=m.ZP.div(i||(i=(0,d.Z)(["\n  /* background-color: ","; */\n  background-color: ",";\n\n  border-radius: 0.4rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  overflow: hidden;\n  width: 20rem;\n  height: 36rem;\n\n  @media (max-width: 520px) {\n    display: block;\n    width: 100%;\n    height: 100%;\n  }\n"])),(function(n){return n.theme.colors.darkBgColor}),(function(n){return n.theme.colors.moviesWrapDarkColor})),v=m.ZP.div(a||(a=(0,d.Z)(["\n  padding: 2.4rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  /* align-items: center; */\n  justify-content: start;\n"]))),Z=m.ZP.span(c||(c=(0,d.Z)(["\n  color: ",";\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 1.6rem;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.16;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  /* border-bottom: 1px solid transparent; */\n\n  &:hover {\n    text-decoration: underline;\n    /* border-bottom: 1px solid #050505; */\n  }\n\n  @media (max-width: 520px) {\n    font-size: 2.4rem;\n  }\n"])),(function(n){return n.theme.colors.lightTextColor})),w=m.ZP.img(s||(s=(0,d.Z)(["\n  width: 100%;\n  height: 100%;\n"]))),y=m.ZP.span(l||(l=(0,d.Z)(["\n  color: ",";\n  font-size: 1.6rem;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: 500;\n  line-height: 1.25;\n"])),(function(n){return 0!==n.value?n.theme.colors.white:n.theme.colors.btnBgColor})),b=(0,m.ZP)(h.QJe)(u||(u=(0,d.Z)(["\n  color: ",";\n  font-size: 1.6rem;\n"])),(function(n){return 0!==n.value?n.theme.colors.accent:n.theme.colors.btnBgColor})),j=m.ZP.div(f||(f=(0,d.Z)(["\n  display: flex;\n  gap: 0.8rem;\n  align-items: center;\n"])))},1256:function(n,e,t){t.d(e,{KY:function(){return g},OW:function(){return h},Qj:function(){return d},S7:function(){return u},ZP:function(){return s}});var r=t(4165),o=t(5861),i=t(1243),a="https://api.themoviedb.org/3",c="96525b58fad95f33b6786cec803d2857";function s(){return l.apply(this,arguments)}function l(){return(l=(0,o.Z)((0,r.Z)().mark((function n(){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(a,"/trending/movie/day?api_key=").concat(c));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function u(n,e){return f.apply(this,arguments)}function f(){return(f=(0,o.Z)((0,r.Z)().mark((function n(e,t){var o;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(a,"/search/movie?api_key=").concat(c,"&query=").concat(e,"&page=").concat(t));case 2:return o=n.sent,n.abrupt("return",o.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return m.apply(this,arguments)}function m(){return(m=(0,o.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(a,"/movie/").concat(e,"?api_key=").concat(c));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return p.apply(this,arguments)}function p(){return(p=(0,o.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(a,"/movie/").concat(e,"/credits?api_key=").concat(c));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return x.apply(this,arguments)}function x(){return(x=(0,o.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(a,"/movie/").concat(e,"/reviews?api_key=").concat(c));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},4685:function(n,e,t){t.r(e),t.d(e,{default:function(){return sn}});var r,o,i,a,c,s,l,u,f,d,m,h,p,g,x,v,Z,w,y,b,j,k,P,C=t(4165),z=t(5861),B=t(9439),_=t(2791),A=t(168),H=t(5867),R=t(1087),U=t(9126),F=H.ZP.div(r||(r=(0,A.Z)(["\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: start;\n  padding: 4.8rem 2.4rem;\n  background: linear-gradient(to bottom, #e9ecef 10%, #343a40);\n"]))),D=H.ZP.div(o||(o=(0,A.Z)(["\n  position: relative;\n  display: flex;\n  width: 60%;\n  gap: 2.4rem;\n  border: 0.1rem solid ",";\n  padding: 2.4rem;\n  border-radius: 1.2rem;\n  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.2);\n\n  @media (max-width: 1450px) {\n    width: 80%;\n  }\n  @media (max-width: 1000px) {\n    width: 90%;\n  }\n  @media (max-width: 630px) {\n    width: 100%;\n  }\n  @media (max-width: 550px) {\n    flex-direction: column;\n  }\n"])),(function(n){return n.theme.colors.btnBgColor})),I=H.ZP.div(i||(i=(0,A.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 1.4rem;\n  /* width: 48rem; */\n"]))),O=H.ZP.img(a||(a=(0,A.Z)(["\n  width: 100%;\n  height: 100%;\n  width: 24rem;\n  height: 36rem;\n  /* height: auto; */\n"]))),Q=H.ZP.h2(c||(c=(0,A.Z)(["\n  color: ",";\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 3.6rem;\n  font-weight: 600;\n  line-height: 1.2;\n  text-transform: uppercase;\n\n  @media (max-width: 1200px) {\n    font-size: 2.4rem;\n  }\n"])),(function(n){return n.theme.colors.darkBgColor})),S=H.ZP.span(s||(s=(0,A.Z)(["\n  color: #050505;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 1.4rem;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 1.2;\n  text-transform: uppercase;\n"]))),W=H.ZP.div(l||(l=(0,A.Z)(["\n  display: flex;\n  gap: 1.2rem;\n"]))),G=H.ZP.span(u||(u=(0,A.Z)(["\n  overflow: hidden;\n  color: rgba(5, 5, 5, 0.7);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 1.4rem;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.4; /* 140% */\n"]))),K=H.ZP.p(f||(f=(0,A.Z)(["\n  color: ",";\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 1.4rem;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.28;\n"])),(function(n){return n.theme.colors.darkBgColor})),T=H.ZP.div(d||(d=(0,A.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),Y=(H.ZP.span(m||(m=(0,A.Z)(["\n  color: ",";\n  font-size: 1.6rem;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: 600;\n  line-height: 1.25;\n"])),(function(n){return 0!==n.value?n.theme.colors.darkBgColor:n.theme.colors.btnBgColor})),H.ZP.button(h||(h=(0,A.Z)(["\n  position: absolute;\n  top: -3.4rem;\n  left: 2.4rem;\n  border: none;\n  outline: none;\n  background-color: transparent;\n  /* padding: 1rem 2rem; */\n  /* border-radius: 1.2rem; */\n  cursor: pointer;\n  color: ",";\n  display: flex;\n  align-items: center;\n  gap: 1.2rem;\n\n  &:hover {\n    border-bottom: 0.1rem solid #000;\n  }\n"])),(function(n){return n.theme.colors.white}))),q=(0,H.ZP)(R.rU)(p||(p=(0,A.Z)(["\n  color: ",";\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 1.6rem;\n  font-weight: 500;\n  line-height: 1.25;\n"])),(function(n){return n.theme.colors.moviesWrapDarkColor})),E=(0,H.ZP)(U.And)(g||(g=(0,A.Z)(["\n  font-size: 1.6rem;\n  color: ",";\n"])),(function(n){return n.theme.colors.darkBgColor})),J=(0,H.ZP)(U.S9U)(x||(x=(0,A.Z)(["\n  font-size: 1.6rem;\n  transition: 0.3s;\n"]))),M=(0,H.ZP)(R.rU)(v||(v=(0,A.Z)(["\n  border: none;\n  outline: none;\n  /* background-color: ","; */\n  /* color: ","; */\n  cursor: pointer;\n  transition: 0.4s ease-in-out;\n\n  color: #050505;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 1.4rem;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 1.2;\n  text-transform: uppercase;\n  /* border-bottom: 0.1rem solid #000; */\n  display: flex;\n  align-items: center;\n  gap: 0.2rem;\n  width: 9rem;\n\n  &:hover {\n    & > "," {\n      color: ",";\n    }\n  }\n"])),(function(n){return n.theme.colors.btnBgColor}),(function(n){return n.theme.colors.darkBgColor}),J,(function(n){return n.theme.colors.accent})),$=H.ZP.ul(Z||(Z=(0,A.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 1.2rem;\n"]))),L=H.ZP.li(w||(w=(0,A.Z)(["\n  width: 100%;\n"]))),N=(t(8603),t(7689)),V=t(1256),X=(0,H.ZP)(U.kRm)(y||(y=(0,A.Z)(["\n  color: ",";\n  font-size: 1.6rem;\n"])),(function(n){return 0!==n.value?n.theme.colors.accent:n.theme.colors.btnBgColor})),nn=(0,H.ZP)(U.RrZ)(b||(b=(0,A.Z)(["\n  color: ",";\n  font-size: 1.6rem;\n"])),(function(n){return 0!==n.value?n.theme.colors.accent:n.theme.colors.btnBgColor})),en=t(184);function tn(n){var e=n.full,t=n.value;return(0,en.jsx)(en.Fragment,{children:e?(0,en.jsx)(X,{value:t}):(0,en.jsx)(nn,{value:t})})}var rn=H.ZP.div(j||(j=(0,A.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  gap: 0.1rem;\n"]))),on=H.ZP.p(k||(k=(0,A.Z)(["\n  margin-left: 0.7rem;\n  color: ",";\n  font-size: 1.6rem;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: 600;\n  line-height: 1.25;\n"])),(function(n){return 0!==n.value?n.theme.colors.darkBgColor:n.theme.colors.btnBgColor})),an=H.ZP.div(P||(P=(0,A.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  width: 100%;\n"])));function cn(n){var e=n.rating,t=n.maxRating,r=n.value;return(0,en.jsx)(an,{children:(0,en.jsxs)(rn,{children:[Array.from({length:t},(function(n,t){return(0,en.jsx)(tn,{value:r,full:e>=t+1},crypto.randomUUID())})),(0,en.jsx)(on,{value:e,children:e})]})})}function sn(){var n,e,t=(0,N.UO)().movieId,r=(0,N.TH)(),o=(0,_.useState)([]),i=(0,B.Z)(o,2),a=i[0],c=i[1],s=null!==(n=null===(e=r.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies";function l(n){return n%1===0?Math.floor(n):n}(0,_.useEffect)((function(){function n(){return(n=(0,z.Z)((0,C.Z)().mark((function n(){var e;return(0,C.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,V.Qj)(t);case 2:e=n.sent,console.log(e),c(e);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[t,c]);var u=a.title,f=a.genres,d=a.overview,m=a.release_date,h=a.poster_path,p=a.vote_average,g=a.id;return(0,en.jsx)(F,{children:(0,en.jsxs)(D,{children:[(0,en.jsxs)(en.Fragment,{children:[(0,en.jsxs)(Y,{children:[(0,en.jsx)(E,{}),(0,en.jsx)(q,{to:s,children:"Back to movies"})]}),(0,en.jsx)(O,{src:h?"\nhttp://image.tmdb.org/t/p/w200".concat(h):"".concat("/goit-react-hw-05-movies","/images/noImage.webp"),alt:u})]}),(0,en.jsxs)(I,{children:[(0,en.jsx)(Q,{children:u}),(0,en.jsxs)(T,{children:[(0,en.jsx)(S,{children:"Genres:"}),(0,en.jsx)(W,{children:void 0===f?"":(0,en.jsx)(en.Fragment,{children:f.map((function(n){var e=n.name;return(0,en.jsx)(G,{children:e},e)}))})})]}),(0,en.jsxs)(T,{children:[(0,en.jsx)(S,{children:"Release Date:"}),(0,en.jsx)(G,{children:m})]}),(0,en.jsx)(cn,{maxRating:10,rating:void 0!==p&&l(p.toFixed(1)),value:void 0!==p&&l(p.toFixed(1))}),(0,en.jsxs)(T,{children:[(0,en.jsx)(S,{children:"Overview:"}),(0,en.jsx)(K,{children:d})]}),(0,en.jsxs)($,{children:[(0,en.jsx)(L,{children:(0,en.jsxs)(M,{to:"/movies/".concat(g,"/cast"),children:["Cast",(0,en.jsx)(J,{})]})}),(0,en.jsx)(L,{children:(0,en.jsxs)(M,{to:"/movies/".concat(g,"/reviews"),children:["Reviews",(0,en.jsx)(J,{})]})})]}),(0,en.jsx)(N.j3,{})]})]})})}}}]);
//# sourceMappingURL=685.dcbae556.chunk.js.map