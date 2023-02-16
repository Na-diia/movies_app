"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{7100:function(A,n,e){e.d(n,{Z:function(){return c}});var t,r,o=e(168),C=e(6444),g=C.ZP.div(t||(t=(0,o.Z)(["\n    display: flex;\n    margin-left: 28px;\n"]))),a=C.ZP.button(r||(r=(0,o.Z)(["\n    background-color: #fff;\n    color:  #432A68 ;\n    font-size: 16px;\n    padding: 10px 20px;\n    display: inline-block;\n    border-radius: 100px;\n    border-color: transparent;\n    transition: all .2s;\n    margin-right: 12px;\n    margin-bottom: 20px;\n\n    &:hover, &:focus {\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);\n    color: #8E0E00;\n    font-weight: bold;\n    }\n    &:disabled {\n    cursor: not-allowed;\n    opacity: 0.4;\n    color:  #432A68 ;\n    font-weight: 400;\n    }\n"]))),i=e(184),c=function(A){var n=A.page,e=A.totalPages,t=A.onClick;return(0,i.jsxs)(g,{children:[n>=2&&(0,i.jsx)(a,{type:"button",disabled:1===n,onClick:function(){return t(n-1)},children:"Prev page"}),(0,i.jsx)(a,{type:"button",onClick:function(){return t(n+1)},disabled:n===e,children:"Next page"})]})}},6061:function(A,n,e){e.d(n,{Z:function(){return d}});var t,r,o,C=e(7689),g=e(168),a=e(6444),i=e(1087),c=e(2776),s=a.ZP.li(t||(t=(0,g.Z)(['\n    padding: 5px;\n    margin-left: 10px;\n    position: relative;\n    display: flex;\n\n    &::before{\n    content: "";\n    background-image: url(',");\n    background-size: cover;\n    position: absolute;\n    width: 20px;\n    height: 20px;\n    left: -25px;\n}\n"])),c),u=a.ZP.ul(r||(r=(0,g.Z)(["\n    list-style: none;\n    margin-left: 25px;\n"]))),Q=(0,a.ZP)(i.rU)(o||(o=(0,g.Z)(["\n    text-decoration: none;\n    color: #22211B  ;\n    font-size: 20px;\n    font-weight: 500;\n\n    &:hover, &:focus{\n    transform: translateX(20px); \n   }\n"]))),l=e(184),k=function(A){var n=A.movies,e=(0,C.TH)(),t=n.map((function(A){var n=A.title,t=A.id;return(0,l.jsx)(s,{children:(0,l.jsx)(Q,{state:{from:e},to:"/movies/".concat(t),children:n})},t)}));return(0,l.jsx)(u,{children:t})},d=k;k.defaultProps={movies:[]}},9544:function(A,n,e){e.r(n);var t=e(5861),r=e(9439),o=e(7757),C=e.n(o),g=e(2791),a=e(2579),i=(e(5862),e(6061)),c=e(7100),s=e(7118),u=e(5545),Q=e(184);n.default=function(){var A=(0,g.useState)([]),n=(0,r.Z)(A,2),e=n[0],o=n[1],l=(0,g.useState)(null),k=(0,r.Z)(l,2),d=k[0],f=k[1],p=(0,g.useState)(1),I=(0,r.Z)(p,2),J=I[0],h=I[1],K=(0,g.useState)("idle"),v=(0,r.Z)(K,2),B=v[0],x=v[1];(0,g.useEffect)((function(){x("pending");var A=function(){var A=(0,t.Z)(C().mark((function A(){var n;return C().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,(0,s.WJ)(J);case 3:n=A.sent,o(n),h(J),x("resolved"),A.next=13;break;case 9:A.prev=9,A.t0=A.catch(0),x("rejected"),f(A.t0.message);case 13:case"end":return A.stop()}}),A,null,[[0,9]])})));return function(){return A.apply(this,arguments)}}();A()}),[J]);var b=(0,g.useCallback)((function(A){h(A)}),[h]);return(0,Q.jsxs)(u.W,{children:[d&&(0,Q.jsx)("h2",{children:"Something went wrong. Try again later."}),(0,Q.jsx)(u.U,{children:"Trending today:"}),(0,Q.jsx)(a.y,{baseColor:"#E0CEA7",highlightColor:"#a5a5a5",children:e?(0,Q.jsxs)("div",{children:[(0,Q.jsx)(i.Z,{movies:e}),J&&0!==e.length&&"pending"!==B&&(0,Q.jsx)(c.Z,{page:J,totalPages:e.total_pages,onClick:b})]}):(0,Q.jsx)(a.Z,{count:15,style:{height:30,width:300,marginTop:15}})})]})}},5545:function(A,n,e){e.d(n,{U:function(){return i},W:function(){return a}});var t,r,o=e(168),C=e(6444),g=e(875),a=C.ZP.div(t||(t=(0,o.Z)(['\n  max-width: 1200px;\n  height: 100vh;\n  margin: 0px auto;\n  padding: 0px 0px;\n\n  &::before {\n    content: "";\n    background-image: url(',");\n    background-size: cover;\n    background-position: center center;\n    background-repeat: no-repeat;\n    position: fixed;\n    top: 0px;\n    left: 0px;\n    width: 100%;\n    height: 100%;\n    z-index: -10;\n    opacity: 0.7;\n}"])),g),i=C.ZP.h2(r||(r=(0,o.Z)(['\n  font-family: \'Gambetta\', serif;\n  transition: 700ms ease;\n  font-variation-settings: "wght" 311;\n  margin-bottom: 0.8rem;\n  font-weight: bold;\n  margin-left: 20px;\n  font-size: 28px;\n  text-transform: uppercase;\n  transition: 700ms ease;\n   color: #090907 ;\n\n  &:hover {\n    font-variation-settings: "wght" 582; \n    letter-spacing: 1px;\n    }\n'])))},7118:function(A,n,e){e.d(n,{M1:function(){return u},TP:function(){return s},V0:function(){return c},WJ:function(){return i},_p:function(){return a},tx:function(){return Q}});var t=e(5861),r=e(7757),o=e.n(r),C=e(1912);C.Z.defaults.baseURL="https://api.themoviedb.org/3/";var g="0d4113c4d386d0ed78ee145d93be1c52",a="https://image.tmdb.org/t/p/w500",i=function(){var A=(0,t.Z)(o().mark((function A(n){var e;return o().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,C.Z.get("trending/movie/day?api_key=".concat(g,"&page=").concat(n));case 2:return e=A.sent,A.abrupt("return",e.data.results);case 4:case"end":return A.stop()}}),A)})));return function(n){return A.apply(this,arguments)}}(),c=function(){var A=(0,t.Z)(o().mark((function A(n,e){var t;return o().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,C.Z.get("search/movie?api_key=".concat(g,"&language=en-US&query=").concat(n,"&page=").concat(e,"&include_adult=false"));case 2:return t=A.sent,A.abrupt("return",t.data.results);case 4:case"end":return A.stop()}}),A)})));return function(n,e){return A.apply(this,arguments)}}(),s=function(){var A=(0,t.Z)(o().mark((function A(n){var e;return o().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,C.Z.get("movie/".concat(n,"?api_key=").concat(g,"&language=en-US"));case 2:return e=A.sent,A.abrupt("return",e.data);case 4:case"end":return A.stop()}}),A)})));return function(n){return A.apply(this,arguments)}}(),u=function(){var A=(0,t.Z)(o().mark((function A(n){var e;return o().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,C.Z.get("movie/".concat(n,"/credits?api_key=").concat(g,"&language=en-US"));case 2:return e=A.sent,A.abrupt("return",e.data.cast);case 4:case"end":return A.stop()}}),A)})));return function(n){return A.apply(this,arguments)}}(),Q=function(){var A=(0,t.Z)(o().mark((function A(n){var e;return o().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,C.Z.get("movie/".concat(n,"/reviews?api_key=").concat(g,"&language=en-US&page=1"));case 2:return e=A.sent,A.abrupt("return",e.data.results);case 4:case"end":return A.stop()}}),A)})));return function(n){return A.apply(this,arguments)}}()},5862:function(){},875:function(A,n,e){A.exports=e.p+"static/media/background-img.615afe74c2ea1340004c.jpg"},2776:function(A){A.exports="data:image/png;base64,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"},2579:function(A,n,e){e.d(n,{Z:function(){return c},y:function(){return s}});var t=e(9439),r=e(1413),o=e(4925),C=e(2791),g=["count","wrapper","className","containerClassName","containerTestId","circle","style"],a=["children"],i=C.createContext({});function c(A){for(var n,e,a,c=A.count,s=void 0===c?1:c,u=A.wrapper,Q=A.className,l=A.containerClassName,k=A.containerTestId,d=A.circle,f=void 0!==d&&d,p=A.style,I=(0,o.Z)(A,g),J=C.useContext(i),h=(0,r.Z)({},I),K=0,v=Object.entries(I);K<v.length;K++){var B=(0,t.Z)(v[K],2),x=B[0];"undefined"===typeof B[1]&&delete h[x]}var b=(0,r.Z)((0,r.Z)((0,r.Z)({},J),h),{},{circle:f}),m=(0,r.Z)((0,r.Z)({},p),function(A){var n=A.baseColor,e=A.highlightColor,t=A.width,r=A.height,o=A.borderRadius,C=A.circle,g=A.direction,a=A.duration,i=A.enableAnimation,c=void 0===i||i,s={};return"rtl"===g&&(s["--animation-direction"]="reverse"),"number"===typeof a&&(s["--animation-duration"]="".concat(a,"s")),c||(s["--pseudo-element-display"]="none"),"string"!==typeof t&&"number"!==typeof t||(s.width=t),"string"!==typeof r&&"number"!==typeof r||(s.height=r),"string"!==typeof o&&"number"!==typeof o||(s.borderRadius=o),C&&(s.borderRadius="50%"),"undefined"!==typeof n&&(s["--base-color"]=n),"undefined"!==typeof e&&(s["--highlight-color"]=e),s}(b)),E="react-loading-skeleton";Q&&(E+=" ".concat(Q));for(var y=null!==(n=b.inline)&&void 0!==n&&n,w=[],P=Math.ceil(s),Z=0;Z<P;Z++){var S=m;if(P>s&&Z===P-1){var j=null!==(e=S.width)&&void 0!==e?e:"100%",H=s%1,z="number"===typeof j?j*H:"calc(".concat(j," * ").concat(H,")");S=(0,r.Z)((0,r.Z)({},S),{},{width:z})}var U=C.createElement("span",{className:E,style:S,key:Z},"\u200c");y?w.push(U):w.push(C.createElement(C.Fragment,{key:Z},U,C.createElement("br",null)))}return C.createElement("span",{className:l,"data-testid":k,"aria-live":"polite","aria-busy":null===(a=b.enableAnimation)||void 0===a||a},u?w.map((function(A,n){return C.createElement(u,{key:n},A)})):w)}function s(A){var n=A.children,e=(0,o.Z)(A,a);return C.createElement(i.Provider,{value:e},n)}}}]);
//# sourceMappingURL=544.56b9ede5.chunk.js.map