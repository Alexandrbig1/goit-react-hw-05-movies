"use strict";(self.webpackChunkreact_movie_info_app=self.webpackChunkreact_movie_info_app||[]).push([[685],{1256:function(n,e,t){t.d(e,{KY:function(){return x},OW:function(){return m},Qj:function(){return h},S7:function(){return u},ZP:function(){return c}});var r=t(4165),o=t(5861),i=t(1243),a="https://api.themoviedb.org/3",s="96525b58fad95f33b6786cec803d2857";function c(){return l.apply(this,arguments)}function l(){return(l=(0,o.Z)((0,r.Z)().mark((function n(){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(a,"/trending/movie/day?api_key=").concat(s));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function u(n,e){return f.apply(this,arguments)}function f(){return(f=(0,o.Z)((0,r.Z)().mark((function n(e,t){var o;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(a,"/search/movie?api_key=").concat(s,"&query=").concat(e,"&page=").concat(t));case 2:return o=n.sent,n.abrupt("return",o.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return d.apply(this,arguments)}function d(){return(d=(0,o.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(a,"/movie/").concat(e,"?api_key=").concat(s));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return p.apply(this,arguments)}function p(){return(p=(0,o.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(a,"/movie/").concat(e,"/credits?api_key=").concat(s));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return g.apply(this,arguments)}function g(){return(g=(0,o.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(a,"/movie/").concat(e,"/reviews?api_key=").concat(s));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},4685:function(n,e,t){t.r(e),t.d(e,{default:function(){return ln}});var r,o,i,a,s,c=t(4165),l=t(5861),u=t(9439),f=t(2791),h=t(7689),d=t(1256),m=t(168),p=t(5867),x=t(9126),g=(0,p.ZP)(x.kRm)(r||(r=(0,m.Z)(["\n  color: ",";\n  font-size: 1.6rem;\n"])),(function(n){return 0!==n.value?n.theme.colors.accent:n.theme.colors.btnBgColor})),v=(0,p.ZP)(x.RrZ)(o||(o=(0,m.Z)(["\n  color: ",";\n  font-size: 1.6rem;\n"])),(function(n){return 0!==n.value?n.theme.colors.accent:n.theme.colors.btnBgColor})),Z=t(184);function w(n){var e=n.full,t=n.value;return(0,Z.jsx)(Z.Fragment,{children:e?(0,Z.jsx)(g,{value:t}):(0,Z.jsx)(v,{value:t})})}var y=p.ZP.div(i||(i=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  gap: 0.1rem;\n"]))),j=p.ZP.p(a||(a=(0,m.Z)(["\n  margin-left: 0.7rem;\n  color: ",";\n  font-size: 1.6rem;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: 600;\n  line-height: 1.25;\n"])),(function(n){return 0!==n.value?n.theme.colors.darkBgColor:n.theme.colors.btnBgColor})),b=p.ZP.div(s||(s=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  width: 100%;\n"])));function k(n){var e=n.rating,t=n.maxRating,r=n.value;return(0,Z.jsx)(b,{children:(0,Z.jsxs)(y,{children:[Array.from({length:t},(function(n,t){return(0,Z.jsx)(w,{value:r,full:e>=t+1},crypto.randomUUID())})),(0,Z.jsx)(j,{value:e,children:e})]})})}var P,C,R,z,_,B,F,O,U,A,D,I,S,H,Q,W,q,E,G=t(7596),K=t(1087),M=p.ZP.div(P||(P=(0,m.Z)(["\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: start;\n  padding: 4.8rem 2.4rem;\n  background: linear-gradient(to bottom, #e9ecef 10%, #343a40);\n"]))),T=p.ZP.div(C||(C=(0,m.Z)(["\n  position: relative;\n  display: flex;\n  width: 60%;\n  gap: 2.4rem;\n  border: 0.1rem solid ",";\n  padding: 2.4rem;\n  border-radius: 1.2rem;\n  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.2);\n\n  @media (max-width: 1450px) {\n    width: 80%;\n  }\n  @media (max-width: 1000px) {\n    width: 90%;\n  }\n  @media (max-width: 630px) {\n    width: 100%;\n  }\n  @media (max-width: 550px) {\n    flex-direction: column;\n  }\n"])),(function(n){return n.theme.colors.btnBgColor})),Y=p.ZP.div(R||(R=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 1.4rem;\n"]))),J=p.ZP.img(z||(z=(0,m.Z)(["\n  width: 100%;\n  height: 100%;\n  width: 24rem;\n  height: 36rem;\n"]))),L=p.ZP.h2(_||(_=(0,m.Z)(["\n  color: ",';\n  font-family: "Roboto", sans-serif;\n  font-size: 3.6rem;\n  font-weight: 600;\n  line-height: 1.2;\n  text-transform: uppercase;\n\n  @media (max-width: 1200px) {\n    font-size: 2.4rem;\n  }\n'])),(function(n){return n.theme.colors.darkBgColor})),N=p.ZP.span(B||(B=(0,m.Z)(['\n  color: #050505;\n  font-family: "Roboto", sans-serif;\n  font-size: 1.4rem;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 1.2;\n  text-transform: uppercase;\n']))),V=p.ZP.div(F||(F=(0,m.Z)(["\n  display: flex;\n  gap: 1.2rem;\n"]))),X=p.ZP.span(O||(O=(0,m.Z)(['\n  overflow: hidden;\n  color: rgba(5, 5, 5, 0.7);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-family: "Roboto", sans-serif;\n  font-size: 1.4rem;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.4;\n']))),$=p.ZP.p(U||(U=(0,m.Z)(["\n  color: ",';\n  font-family: "Roboto", sans-serif;\n  font-size: 1.4rem;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.28;\n'])),(function(n){return n.theme.colors.darkBgColor})),nn=p.ZP.div(A||(A=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),en=(p.ZP.span(D||(D=(0,m.Z)(["\n  color: ",';\n  font-size: 1.6rem;\n  font-family: "Roboto", sans-serif;\n  font-weight: 600;\n  line-height: 1.25;\n'])),(function(n){return 0!==n.value?n.theme.colors.darkBgColor:n.theme.colors.btnBgColor})),p.ZP.button(I||(I=(0,m.Z)(["\n  position: absolute;\n  top: -3.4rem;\n  left: 2.4rem;\n  border: none;\n  outline: none;\n  background-color: transparent;\n  cursor: pointer;\n  color: ",";\n  display: flex;\n  align-items: center;\n  gap: 1.2rem;\n\n  &:hover {\n    border-bottom: 0.1rem solid #000;\n  }\n"])),(function(n){return n.theme.colors.white}))),tn=(0,p.ZP)(K.rU)(S||(S=(0,m.Z)(["\n  color: ",';\n  font-family: "Roboto", sans-serif;\n  font-size: 1.6rem;\n  font-weight: 500;\n  line-height: 1.25;\n'])),(function(n){return n.theme.colors.moviesWrapDarkColor})),rn=(0,p.ZP)(x.And)(H||(H=(0,m.Z)(["\n  font-size: 1.6rem;\n  color: ",";\n"])),(function(n){return n.theme.colors.darkBgColor})),on=(0,p.ZP)(x.lzl)(Q||(Q=(0,m.Z)(["\n  font-size: 1.6rem;\n  transition: 0.3s;\n"]))),an=(0,p.ZP)(K.rU)(W||(W=(0,m.Z)(['\n  border: none;\n  outline: none;\n  cursor: pointer;\n  transition: 0.4s ease-in-out;\n\n  color: #050505;\n  font-family: "Roboto", sans-serif;\n  font-size: 1.4rem;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 1.2;\n  text-transform: uppercase;\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  width: 10rem;\n\n  &:hover {\n    & > '," {\n      color: ",";\n      margin-left: 0.8rem;\n    }\n  }\n"])),on,(function(n){return n.theme.colors.accent})),sn=p.ZP.ul(q||(q=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 1.2rem;\n"]))),cn=p.ZP.li(E||(E=(0,m.Z)(["\n  width: 100%;\n"])));function ln(){var n,e,t=(0,h.UO)().movieId,r=(0,h.TH)(),o=(0,f.useState)([]),i=(0,u.Z)(o,2),a=i[0],s=i[1],m=(0,f.useRef)(null!==(n=null===(e=r.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies");function p(n){return n%1===0?Math.floor(n):n}(0,f.useEffect)((function(){function n(){return(n=(0,l.Z)((0,c.Z)().mark((function n(){var e;return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,d.Qj)(t);case 3:e=n.sent,s(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),G.Am.error("Oops, something went wrong! Reload this page!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,progress:void 0,theme:"light"});case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}t&&function(){n.apply(this,arguments)}()}),[t]);var x=a.title,g=a.genres,v=a.overview,w=a.release_date,y=a.poster_path,j=a.vote_average,b=a.id;return(0,Z.jsx)(M,{children:(0,Z.jsxs)(T,{children:[(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(en,{children:[(0,Z.jsx)(rn,{}),(0,Z.jsx)(tn,{to:m.current,children:"Back to movies"})]}),(0,Z.jsx)(J,{src:y?"\nhttp://image.tmdb.org/t/p/w200".concat(y):"".concat("/movies-info","/images/noImage.webp"),alt:x})]}),(0,Z.jsxs)(Y,{children:[(0,Z.jsx)(L,{children:x}),(0,Z.jsxs)(nn,{children:[(0,Z.jsx)(N,{children:"Genres:"}),(0,Z.jsx)(V,{children:void 0===g?"":(0,Z.jsx)(Z.Fragment,{children:g.map((function(n){var e=n.name;return(0,Z.jsx)(X,{children:e},e)}))})})]}),(0,Z.jsxs)(nn,{children:[(0,Z.jsx)(N,{children:"Release Date:"}),(0,Z.jsx)(X,{children:w})]}),(0,Z.jsx)(k,{maxRating:10,rating:void 0!==j&&p(j.toFixed(1)),value:void 0!==j&&p(j.toFixed(1))}),(0,Z.jsxs)(nn,{children:[(0,Z.jsx)(N,{children:"Overview:"}),(0,Z.jsx)($,{children:v})]}),(0,Z.jsxs)(sn,{children:[(0,Z.jsx)(cn,{children:(0,Z.jsxs)(an,{to:"/movies/".concat(b,"/cast"),children:["Cast",(0,Z.jsx)(on,{})]})}),(0,Z.jsx)(cn,{children:(0,Z.jsxs)(an,{to:"/movies/".concat(b,"/reviews"),children:["Reviews",(0,Z.jsx)(on,{})]})})]}),(0,Z.jsx)(f.Suspense,{children:(0,Z.jsx)(h.j3,{})})]})]})})}}}]);
//# sourceMappingURL=685.6f7533b7.chunk.js.map