"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[395],{5873:function(e,t,n){n.d(t,{ck:function(){return x},nf:function(){return Z},aV:function(){return E},_V:function(){return _},XC:function(){return p},Wf:function(){return C},ZP:function(){return i}});var r=n(1413),o=n(7689),a=n(184),i=function(e){var t=e.movies,n=e.linkTo,i=void 0!==n&&n,s=(0,o.TH)();return(0,a.jsx)(E,{children:t.map((function(e){return(0,a.jsx)(x,{children:i?(0,a.jsx)(Z,{to:"".concat(i,"/").concat(e.id),state:{from:s},children:(0,a.jsx)(p,(0,r.Z)({},e))}):(0,a.jsx)(Z,{to:"".concat(e.id),state:{from:s},children:(0,a.jsx)(p,(0,r.Z)({},e))})},e.id)}))})},s=n(2007),c=n.n(s),u=n(253),l=n(6444),f=n(407),d=(0,l.ZP)("div")(f.FK,f.$_,f.Dh,f.bK,f.GQ,f.Cg,f.AF),p=function(e){var t=e.poster_path,n=e.title,r=e.name;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(C,{children:(0,a.jsx)("img",{src:t?"https://image.tmdb.org/t/p/w500/".concat(t):u,alt:n||r})}),(0,a.jsx)(d,{as:"div",p:[2],children:(0,a.jsx)(_,{children:n||r})})]})};p.propStyles={poster_path:c().string,title:c().string,name:c().string};var m,h,v,g,y,b=n(168),T=n(6731),E=l.ZP.ul(m||(m=(0,b.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: calc(-1 * ","px);\n  margin-left: calc(-1 * ","px);\n"])),(function(e){return e.theme.space[5]}),(function(e){return e.theme.space[5]})),x=l.ZP.li(h||(h=(0,b.Z)(["\n  margin-top: ","px;\n  margin-left: ","px;\n  flex-basis: calc(100% / 5 - ","px);\n\n  overflow: hidden;\n\n  list-style: none;\n  border-radius: ",";\n  box-shadow: ",";\n\n  transform: scale(1);\n  transition: box-shadow 250ms, transform 250ms;\n\n  :hover,\n  :focus {\n    transform: scale(1.1);\n  }\n"])),(function(e){return e.theme.space[5]}),(function(e){return e.theme.space[5]}),(function(e){return e.theme.space[5]}),(function(e){return e.theme.radii.normal}),(function(e){return e.theme.shadows.first})),Z=(0,l.ZP)(T.rU)(v||(v=(0,b.Z)(["\n  display: block;\n  height: 100%;\n\n  text-decoration: none;\n"]))),C=l.ZP.div(g||(g=(0,b.Z)(["\n  height: 300px;\n\n  img {\n    width: 100%;\n    height: 100%;\n  }\n"]))),_=l.ZP.p(y||(y=(0,b.Z)(["\n  font-family: ",";\n  font-weight: ",";\n  font-size: ",";\n  color: ",";\n"])),(function(e){return e.theme.fonts.body}),(function(e){return e.theme.fontWeights.body}),(function(e){return e.theme.fontSizes.xs}),(function(e){return e.theme.colors.movieNameColor}))},8126:function(e,t,n){n.d(t,{s:function(){return a}});var r,o=n(168),a=n(6444).ZP.p(r||(r=(0,o.Z)(["\n  font-family: ",";\n  font-weight: ",";\n  font-size: ",";\n\n  text-align: center;\n"])),(function(e){return e.theme.fonts.heading}),(function(e){return e.theme.fontWeights.heading}),(function(e){return e.theme.fontSizes.l}))},3395:function(e,t,n){n.r(t),n.d(t,{default:function(){return ce}});var r=n(5243),o=n(4942),a=n(885),i=n(1413);function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=n(2982),u=n(2791);function l(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=l(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}var f=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=l(e))&&(r&&(r+=" "),r+=t);return r},d=["theme","type"],p=["delay","staleId"],m=function(e){return"number"==typeof e&&!isNaN(e)},h=function(e){return"string"==typeof e},v=function(e){return"function"==typeof e},g=function(e){return h(e)||v(e)?e:null},y=function(e){return(0,u.isValidElement)(e)||h(e)||v(e)||m(e)};function b(e){var t=e.enter,n=e.exit,r=e.appendPosition,o=void 0!==r&&r,a=e.collapse,i=void 0===a||a,s=e.collapseDuration,l=void 0===s?300:s;return function(e){var r=e.children,a=e.position,s=e.preventExitTransition,f=e.done,d=e.nodeRef,p=e.isIn,m=o?"".concat(t,"--").concat(a):t,h=o?"".concat(n,"--").concat(a):n,v=(0,u.useRef)(0);return(0,u.useLayoutEffect)((function(){var e,t=d.current,n=m.split(" "),r=function e(r){var o;r.target===d.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===v.current&&"animationcancel"!==r.type&&(o=t.classList).remove.apply(o,(0,c.Z)(n)))};(e=t.classList).add.apply(e,(0,c.Z)(n)),t.addEventListener("animationend",r),t.addEventListener("animationcancel",r)}),[]),(0,u.useEffect)((function(){var e=d.current,t=function t(){e.removeEventListener("animationend",t),i?function(e,t,n){void 0===n&&(n=300);var r=e.scrollHeight,o=e.style;requestAnimationFrame((function(){o.minHeight="initial",o.height=r+"px",o.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)}))}))}(e,f,l):f()};p||(s?t():(v.current=1,e.className+=" ".concat(h),e.addEventListener("animationend",t)))}),[p]),u.createElement(u.Fragment,null,r)}}function T(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}var E={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(r){var o=setTimeout((function(){r.apply(void 0,(0,c.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(o)}))}},x=function(e){var t=e.theme,n=e.type,r=s(e,d);return u.createElement("svg",(0,i.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},r))},Z={info:function(e){return u.createElement(x,(0,i.Z)({},e),u.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return u.createElement(x,(0,i.Z)({},e),u.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return u.createElement(x,(0,i.Z)({},e),u.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return u.createElement(x,(0,i.Z)({},e),u.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return u.createElement("div",{className:"Toastify__spinner"})}};function C(e){var t=(0,u.useReducer)((function(e){return e+1}),0),n=(0,a.Z)(t,2)[1],r=(0,u.useState)([]),o=(0,a.Z)(r,2),l=o[0],f=o[1],d=(0,u.useRef)(null),b=(0,u.useRef)(new Map).current,x=function(e){return-1!==l.indexOf(e)},C=(0,u.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:x,getToast:function(e){return b.get(e)}}).current;function _(e){var t=e.containerId;!C.props.limit||t&&C.containerId!==t||(C.count-=C.queue.length,C.queue=[])}function I(e){f((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function w(){var e=C.queue.shift();L(e.toastContent,e.toastProps,e.staleId)}function O(e,t){var r=t.delay,o=t.staleId,a=s(t,p);if(y(e)&&!function(e){return!d.current||C.props.enableMultiContainer&&e.containerId!==C.props.containerId||b.has(e.toastId)&&null==e.updateId}(a)){var c=a.toastId,l=a.updateId,f=a.data,x=C.props,_=function(){return I(c)},O=null==l;O&&C.count++;var k,P,N=(0,i.Z)((0,i.Z)((0,i.Z)({},x),{},{style:x.toastStyle,key:C.toastKey++},a),{},{toastId:c,updateId:l,data:f,closeToast:_,isIn:!1,className:g(a.className||x.toastClassName),bodyClassName:g(a.bodyClassName||x.bodyClassName),progressClassName:g(a.progressClassName||x.progressClassName),autoClose:!a.isLoading&&(k=a.autoClose,P=x.autoClose,!1===k||m(k)&&k>0?k:P),deleteToast:function(){var e=T(b.get(c),"removed");b.delete(c),E.emit(4,e);var t=C.queue.length;if(C.count=null==c?C.count-C.displayedToast:C.count-1,C.count<0&&(C.count=0),t>0){var r=null==c?C.props.limit:1;if(1===t||1===r)C.displayedToast++,w();else{var o=r>t?t:r;C.displayedToast=o;for(var a=0;a<o;a++)w()}}else n()}});N.iconOut=function(e){var t=e.theme,n=e.type,r=e.isLoading,o=e.icon,a=null,i={theme:t,type:n};return!1===o||(v(o)?a=o(i):(0,u.isValidElement)(o)?a=(0,u.cloneElement)(o,i):h(o)||m(o)?a=o:r?a=Z.spinner():function(e){return e in Z}(n)&&(a=Z[n](i))),a}(N),v(a.onOpen)&&(N.onOpen=a.onOpen),v(a.onClose)&&(N.onClose=a.onClose),N.closeButton=x.closeButton,!1===a.closeButton||y(a.closeButton)?N.closeButton=a.closeButton:!0===a.closeButton&&(N.closeButton=!y(x.closeButton)||x.closeButton);var R=e;(0,u.isValidElement)(e)&&!h(e.type)?R=(0,u.cloneElement)(e,{closeToast:_,toastProps:N,data:f}):v(e)&&(R=e({closeToast:_,toastProps:N,data:f})),x.limit&&x.limit>0&&C.count>x.limit&&O?C.queue.push({toastContent:R,toastProps:N,staleId:o}):m(r)?setTimeout((function(){L(R,N,o)}),r):L(R,N,o)}}function L(e,t,n){var r=t.toastId;n&&b.delete(n);var o={content:e,props:t};b.set(r,o),f((function(e){return[].concat((0,c.Z)(e),[r]).filter((function(e){return e!==n}))})),E.emit(4,T(o,null==o.props.updateId?"added":"updated"))}return(0,u.useEffect)((function(){return C.containerId=e.containerId,E.cancelEmit(3).on(0,O).on(1,(function(e){return d.current&&I(e)})).on(5,_).emit(2,C),function(){b.clear(),E.emit(3,C)}}),[]),(0,u.useEffect)((function(){C.props=e,C.isToastActive=x,C.displayedToast=l.length})),{getToastToRender:function(t){var n=new Map,r=Array.from(b.values());return e.newestOnTop&&r.reverse(),r.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:d,isToastActive:x}}function _(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function I(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function w(e){var t=(0,u.useState)(!1),n=(0,a.Z)(t,2),r=n[0],o=n[1],i=(0,u.useState)(!1),s=(0,a.Z)(i,2),c=s[0],l=s[1],f=(0,u.useRef)(null),d=(0,u.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,u.useRef)(e),m=e.autoClose,h=e.pauseOnHover,g=e.closeToast,y=e.onClick,b=e.closeOnClick;function T(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),d.didMove=!1,document.addEventListener("mousemove",C),document.addEventListener("mouseup",w),document.addEventListener("touchmove",C),document.addEventListener("touchend",w);var n=f.current;d.canCloseOnClick=!0,d.canDrag=!0,d.boundingRect=n.getBoundingClientRect(),n.style.transition="",d.x=_(t.nativeEvent),d.y=I(t.nativeEvent),"x"===e.draggableDirection?(d.start=d.x,d.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(d.start=d.y,d.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function E(t){if(d.boundingRect){var n=d.boundingRect,r=n.top,o=n.bottom,a=n.left,i=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&d.x>=a&&d.x<=i&&d.y>=r&&d.y<=o?Z():x()}}function x(){o(!0)}function Z(){o(!1)}function C(t){var n=f.current;d.canDrag&&n&&(d.didMove=!0,r&&Z(),d.x=_(t),d.y=I(t),d.delta="x"===e.draggableDirection?d.x-d.start:d.y-d.start,d.start!==d.x&&(d.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(d.delta,"px)"),n.style.opacity=""+(1-Math.abs(d.delta/d.removalDistance)))}function w(){document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",w),document.removeEventListener("touchmove",C),document.removeEventListener("touchend",w);var t=f.current;if(d.canDrag&&d.didMove&&t){if(d.canDrag=!1,Math.abs(d.delta)>d.removalDistance)return l(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,u.useEffect)((function(){p.current=e})),(0,u.useEffect)((function(){return f.current&&f.current.addEventListener("d",x,{once:!0}),v(e.onOpen)&&e.onOpen((0,u.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;v(e.onClose)&&e.onClose((0,u.isValidElement)(e.children)&&e.children.props)}}),[]),(0,u.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||Z(),window.addEventListener("focus",x),window.addEventListener("blur",Z)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",x),window.removeEventListener("blur",Z))}}),[e.pauseOnFocusLoss]);var O={onMouseDown:T,onTouchStart:T,onMouseUp:E,onTouchEnd:E};return m&&h&&(O.onMouseEnter=Z,O.onMouseLeave=x),b&&(O.onClick=function(e){y&&y(e),d.canCloseOnClick&&g()}),{playToast:x,pauseToast:Z,isRunning:r,preventExitTransition:c,toastRef:f,eventHandlers:O}}function O(e){var t=e.closeToast,n=e.theme,r=e.ariaLabel,o=void 0===r?"close":r;return u.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":o},u.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},u.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function L(e){var t=e.delay,n=e.isRunning,r=e.closeToast,a=e.type,s=void 0===a?"default":a,c=e.hide,l=e.className,d=e.style,p=e.controlledProgress,m=e.progress,h=e.rtl,g=e.isIn,y=e.theme,b=c||p&&0===m,T=(0,i.Z)((0,i.Z)({},d),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:b?0:1});p&&(T.transform="scaleX(".concat(m,")"));var E=f("Toastify__progress-bar",p?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(y),"Toastify__progress-bar--".concat(s),{"Toastify__progress-bar--rtl":h}),x=v(l)?l({rtl:h,type:s,defaultClassName:E}):f(E,l);return u.createElement("div",(0,o.Z)({role:"progressbar","aria-hidden":b?"true":"false","aria-label":"notification timer",className:x,style:T},p&&m>=1?"onTransitionEnd":"onAnimationEnd",p&&m<1?null:function(){g&&r()}))}var k=function(e){var t=w(e),n=t.isRunning,r=t.preventExitTransition,o=t.toastRef,a=t.eventHandlers,s=e.closeButton,c=e.children,l=e.autoClose,d=e.onClick,p=e.type,m=e.hideProgressBar,h=e.closeToast,g=e.transition,y=e.position,b=e.className,T=e.style,E=e.bodyClassName,x=e.bodyStyle,Z=e.progressClassName,C=e.progressStyle,_=e.updateId,I=e.role,k=e.progress,P=e.rtl,N=e.toastId,R=e.deleteToast,M=e.isIn,S=e.isLoading,j=e.iconOut,B=e.closeOnClick,A=e.theme,D=f("Toastify__toast","Toastify__toast-theme--".concat(A),"Toastify__toast--".concat(p),{"Toastify__toast--rtl":P},{"Toastify__toast--close-on-click":B}),z=v(b)?b({rtl:P,position:y,type:p,defaultClassName:D}):f(D,b),q=!!k||!l,F={closeToast:h,type:p,theme:A},Q=null;return!1===s||(Q=v(s)?s(F):(0,u.isValidElement)(s)?(0,u.cloneElement)(s,F):O(F)),u.createElement(g,{isIn:M,done:R,position:y,preventExitTransition:r,nodeRef:o},u.createElement("div",(0,i.Z)((0,i.Z)({id:N,onClick:d,className:z},a),{},{style:T,ref:o}),u.createElement("div",(0,i.Z)((0,i.Z)({},M&&{role:I}),{},{className:v(E)?E({type:p}):f("Toastify__toast-body",E),style:x}),null!=j&&u.createElement("div",{className:f("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!S})},j),u.createElement("div",null,c)),Q,u.createElement(L,(0,i.Z)((0,i.Z)({},_&&!q?{key:"pb-".concat(_)}:{}),{},{rtl:P,theme:A,delay:l,isRunning:n,isIn:M,closeToast:h,hide:m,type:p,style:C,className:Z,controlledProgress:q,progress:k||0}))))},P=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},N=b(P("bounce",!0)),R=(b(P("slide",!0)),b(P("zoom")),b(P("flip")),(0,u.forwardRef)((function(e,t){var n=C(e),r=n.getToastToRender,o=n.containerRef,a=n.isToastActive,s=e.className,c=e.style,l=e.rtl,d=e.containerId;function p(e){var t=f("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":l});return v(s)?s({position:e,rtl:l,defaultClassName:t}):f(t,g(s))}return(0,u.useEffect)((function(){t&&(t.current=o.current)}),[]),u.createElement("div",{ref:o,className:"Toastify",id:d},r((function(e,t){var n=t.length?(0,i.Z)({},c):(0,i.Z)((0,i.Z)({},c),{},{pointerEvents:"none"});return u.createElement("div",{className:p(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var r=e.content,o=e.props;return u.createElement(k,(0,i.Z)((0,i.Z)({},o),{},{isIn:a(o.toastId),style:(0,i.Z)((0,i.Z)({},o.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(o.key)}),r)})))})))})));R.displayName="ToastContainer",R.defaultProps={position:"top-right",transition:N,autoClose:5e3,closeButton:O,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var M,S=new Map,j=[],B=1;function A(){return""+B++}function D(e){return e&&(h(e.toastId)||m(e.toastId))?e.toastId:A()}function z(e,t){return S.size>0?E.emit(0,e,t):j.push({content:e,options:t}),t.toastId}function q(e,t){return(0,i.Z)((0,i.Z)({},t),{},{type:t&&t.type||e,toastId:D(t)})}function F(e){return function(t,n){return z(t,q(e,n))}}function Q(e,t){return z(e,q("default",t))}Q.loading=function(e,t){return z(e,q("default",(0,i.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},Q.promise=function(e,t,n){var r,o=t.pending,a=t.error,s=t.success;o&&(r=h(o)?Q.loading(o,n):Q.loading(o.render,(0,i.Z)((0,i.Z)({},n),o)));var c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},u=function(e,t,o){if(null!=t){var a=(0,i.Z)((0,i.Z)((0,i.Z)({type:e},c),n),{},{data:o}),s=h(t)?{render:t}:t;return r?Q.update(r,(0,i.Z)((0,i.Z)({},a),s)):Q(s.render,(0,i.Z)((0,i.Z)({},a),s)),o}Q.dismiss(r)},l=v(e)?e():e;return l.then((function(e){return u("success",s,e)})).catch((function(e){return u("error",a,e)})),l},Q.success=F("success"),Q.info=F("info"),Q.error=F("error"),Q.warning=F("warning"),Q.warn=Q.warning,Q.dark=function(e,t){return z(e,q("default",(0,i.Z)({theme:"dark"},t)))},Q.dismiss=function(e){S.size>0?E.emit(1,e):j=j.filter((function(t){return null!=e&&t.options.toastId!==e}))},Q.clearWaitingQueue=function(e){return void 0===e&&(e={}),E.emit(5,e)},Q.isActive=function(e){var t=!1;return S.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},Q.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,r=S.get(n||M);return r&&r.getToast(e)}(e,t);if(n){var r=n.props,o=n.content,a=(0,i.Z)((0,i.Z)((0,i.Z)({},r),t),{},{toastId:t.toastId||e,updateId:A()});a.toastId!==e&&(a.staleId=e);var s=a.render||o;delete a.render,z(s,a)}}),0)},Q.done=function(e){Q.update(e,{progress:1})},Q.onChange=function(e){return E.on(4,e),function(){E.off(4,e)}},Q.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},Q.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},E.on(2,(function(e){M=e.containerId||e,S.set(M,e),j.forEach((function(e){E.emit(0,e.content,e.options)})),j=[]})).on(3,(function(e){S.delete(e.containerId||e),0===S.size&&E.off(0).off(1).off(5)}));var H,V,W,U=n(5861),G=n(7757),K=n.n(G),X=n(6731),Y=n(1414),$=n(168),J=n(6444),ee=J.ZP.form(H||(H=(0,$.Z)(["\n  text-align: center;\n  margin-bottom: ","px;\n"])),(function(e){return e.theme.space[5]})),te=J.ZP.input(V||(V=(0,$.Z)(["\n  margin-right: ","px;\n  padding: ","px;\n\n  width: 300px;\n  height: 40px;\n\n  border-radius: ",";\n\n  &:not(:placeholder-shown) {\n    border-color: ",";\n  }\n"])),(function(e){return e.theme.space[3]}),(function(e){return e.theme.space[3]}),(function(e){return e.theme.radii.normal}),(function(e){return e.theme.colors.accent})),ne=J.ZP.button(W||(W=(0,$.Z)(["\n  padding-left: ","px;\n  padding-right: ","px;\n  height: 40px;\n  color: ",";\n  background-color: ",";\n\n  border: ",";\n  border-radius: ",";\n  cursor: pointer;\n\n  transition: color 250ms, background-color 250ms;\n\n  :hover,\n  :focus {\n    color: ",";\n    background-color: ",";\n  }\n"])),(function(e){return e.theme.space[4]}),(function(e){return e.theme.space[4]}),(function(e){return e.theme.colors.primaryText}),(function(e){return e.theme.colors.backgroundBtn}),(function(e){return e.theme.radii.none}),(function(e){return e.theme.radii.normal}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.backgroundAccentBtn})),re=n(184),oe=function(e){var t=e.handleSubmit,n=e.value,r=e.setQueryMovie;return(0,re.jsxs)(ee,{onSubmit:t,children:[(0,re.jsx)("label",{children:(0,re.jsx)(te,{autoComplete:"off",placeholder:"Search movie",name:"query",value:n,onChange:function(e){return r(e.target.value)}})}),(0,re.jsx)(ne,{type:"submit",children:"Search"})]})},ae=n(5873),ie=n(8126),se=n(3484),ce=function(){var e=function(){var e,t=(0,u.useState)(""),n=(0,a.Z)(t,2),r=n[0],o=n[1],i=(0,u.useState)([]),s=(0,a.Z)(i,2),c=s[0],l=s[1],f=(0,u.useState)(!1),d=(0,a.Z)(f,2),p=d[0],m=d[1],h=(0,u.useState)(null),v=(0,a.Z)(h,2),g=v[0],y=v[1],b=(0,X.lr)(),T=(0,a.Z)(b,2),E=T[0],x=T[1],Z=null!==(e=E.get("query"))&&void 0!==e?e:"";return(0,u.useEffect)((function(){var e=function(){var e=(0,U.Z)(K().mark((function e(){var t,n;return K().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,""!==Z){e.next=3;break}return e.abrupt("return");case 3:return m(!0),e.next=6,(0,Y.v)("https://api.themoviedb.org/3/search/movie?api_key=084c550b6f1767443109bcf4bcaee21b&query=".concat(Z,"&language=en-US&page=1&include_adult=false"));case 6:if(t=e.sent,!((n=t.results).length<1)){e.next=11;break}return Q.info('Sorry, nothing found for your search "'.concat(Z,'" ! Try another query.')),e.abrupt("return");case 11:l(n),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0.mesage),y(e.t0);case 18:return e.prev=18,m(!1),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[0,14,18,21]])})));return function(){return e.apply(this,arguments)}}();e()}),[Z]),{queryMovie:r,setQueryMovie:o,movies:c,loaded:p,error:g,setSearchParams:x,query:Z}}(),t=e.queryMovie,n=e.setQueryMovie,o=e.movies,i=e.loaded,s=e.error,c=e.setSearchParams,l=e.query;return(0,re.jsxs)("main",{children:[(0,re.jsx)("section",{children:(0,re.jsxs)(se.W,{children:[(0,re.jsx)(oe,{handleSubmit:function(e){e.preventDefault();var n=e.target.elements.query.value.toLowerCase();c(""!==t?{query:n}:{})},value:t,setQueryMovie:n}),l&&(0,re.jsx)(ae.ZP,{movies:o}),s&&(0,re.jsx)(ie.s,{children:"Something wrong. Try again later."}),i&&(0,re.jsx)(r.g4,{height:"80",width:"80",radius:"9",color:"blue",ariaLabel:"three-dots-loading",wrapperStyle:{justifyContent:"center"},visible:!0})]})}),(0,re.jsx)(R,{})]})}},1414:function(e,t,n){n.d(t,{v:function(){return s}});var r=n(5861),o=n(7757),a=n.n(o),i=n(2388),s=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},253:function(e,t,n){e.exports=n.p+"static/media/no-image-icon.b59890b7b479e863e07c.jpg"}}]);
//# sourceMappingURL=395.ffd16049.chunk.js.map