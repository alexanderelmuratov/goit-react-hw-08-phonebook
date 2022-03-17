/*! For license information please see 875.ef84a330.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[875],{7289:function(n,e,t){var i=t(2791),o=function(){return(o=Object.assign||function(n){for(var e,t=1,i=arguments.length;t<i;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}).apply(this,arguments)},a="styles-module_Editext__button__sxYQX",r="styles-module_Editext__input__2-M50",s="styles-module_Editext__buttons_container__2za5Q",l="styles-module_Editext__buttons_before_aligned__3Eg6w",u="styles-module_Editext__buttons_after_aligned__2ZHQz",d="styles-module_Editext__hide_default_icons__2k5RX";function c(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return Array.apply(void 0,n).filter((function(n){return n})).join(" ")}!function(n,e){void 0===e&&(e={});var t=e.insertAt;if("undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===t&&i.firstChild?i.insertBefore(o,i.firstChild):i.appendChild(o),o.styleSheet?o.styleSheet.cssText=n:o.appendChild(document.createTextNode(n))}}('.styles-module_Editext__button__sxYQX {\n  border-radius: 1px;\n  outline: none;\n  padding: 0.6em;\n  min-width: 30px;\n  height: 100%;\n  border-color: rgb(216, 216, 216) rgb(209, 209, 209) rgb(186, 186, 186);\n  border-style: solid;\n  border-width: 1px;\n}\n\n.styles-module_Editext__button__sxYQX:hover {\n  cursor: pointer;\n  background-color: rgba(241, 241, 241, 1);\n}\n\n.styles-module_Editext__input__2-M50 {\n  width: 100%;\n  border: 1px solid rgb(212, 212, 212);\n  padding: 0.6em;\n  outline: none;\n}\n\n.styles-module_Editext__main_container__2azCD {\n  display: flex;\n  flex-direction: column;\n}\n\n.styles-module_Editext__editing_container__1C4d6 {\n  display: flex;\n  flex: 1;\n  align-items: center;\n}\n\n.styles-module_Editext__view_container__3oSYx {\n  display: flex;\n  align-items: center;\n}\n\n.styles-module_Editext__buttons_container__2za5Q {\n  display: flex;\n}\n\n.styles-module_Editext__buttons_showButtonsOnHover__2Bfsd .styles-module_Editext__buttons_container__2za5Q {\n  visibility: hidden;\n}\n\n.styles-module_Editext__buttons_showButtonsOnHover__2Bfsd:hover .styles-module_Editext__buttons_container__2za5Q {\n  visibility: visible;\n}\n\n.styles-module_Editext__buttons_before_aligned__3Eg6w {\n  margin-right: 5px;\n}\n\n.styles-module_Editext__buttons_after_aligned__2ZHQz {\n  margin-left: 5px;\n}\n\n.styles-module_Editext__validation_message__1puii {\n  font-weight: 500;\n  color: crimson;\n  font-size: 0.7em;\n  margin-top: 3px;\n}\n\n.styles-module_Editext__cancel_button__26sqr {\n  color: crimson;\n}\n\n.styles-module_Editext__cancel_button__26sqr::before {\n  content: "\\2715";\n  margin: 3px;\n}\n\n.styles-module_Editext__edit_button__310_J {\n  color: #000;\n}\n\n.styles-module_Editext__edit_button__310_J::before {\n  content: "\\270E";\n  margin: 3px;\n}\n\n.styles-module_Editext__save_button__1Dlwo {\n  color: darkgreen;\n  margin-right: 3px;\n}\n\n.styles-module_Editext__save_button__1Dlwo::before {\n  content: "\\2713";\n  margin: 3px;\n}\n\n.styles-module_Editext__hide_default_icons__2k5RX::before {\n  content: none;\n  margin: 0;\n}\n\n.styles-module_Editext__hint__EGeV0 {\n  font-weight: 500;\n  color: lightslategray;\n  font-size: 0.7em;\n  margin-top: 3px;\n  text-align: left;\n}\n');var f="view-container",_="input";e.Z=function(n){var e,t=(0,i.useState)(n.editing),p=t[0],m=t[1],v=(0,i.useState)(!0),h=v[0],y=v[1],x=(0,i.useState)(n.value||""),b=x[0],g=x[1],E=(0,i.useState)(void 0),k=E[0],w=E[1],C=(0,i.useState)(!1),N=C[0],O=C[1],P=i.createRef(),B=i.createRef(),z=i.createRef();function D(e){var t,i=[13,"Enter"].some((function(n){return e.key===n||e.code===n})),o=[27,"Escape","Esc"].some((function(n){return e.code===n||e.key===n}));i&&(n.submitOnEnter&&M(),null==e||e.preventDefault()),o&&(n.cancelOnEscape&&U(),e.preventDefault()),(null===(t=n.inputProps)||void 0===t?void 0:t.onKeyDown)&&n.inputProps.onKeyDown(e)}function S(e){var t,i,o=null===(t=z.current)||void 0===t?void 0:t.contains(null==e?void 0:e.relatedTarget);n.cancelOnUnfocus&&!o&&U(),n.submitOnUnfocus&&!o&&!n.cancelOnUnfocus&&M(),(null===(i=n.inputProps)||void 0===i?void 0:i.onBlur)&&n.inputProps.onBlur(e)}function j(e){var t;O(!0),n.startEditingOnFocus&&m(!0),(null===(t=n.viewProps)||void 0===t?void 0:t.onFocus)&&n.viewProps.onFocus(e)}function F(e){var t,i=[13,"Enter"].some((function(n){return e.key===n||e.code===n}))&&N&&n.startEditingOnEnter;i&&e.preventDefault(),i&&m(!0),(null===(t=n.viewProps)||void 0===t?void 0:t.onKeyDown)&&n.viewProps.onKeyDown(e)}function I(e){var t,i;y(!0),g(e.target.value),null===(i=null===(t=n.inputProps)||void 0===t?void 0:t.onChange)||void 0===i||i.call(t,e)}function U(){var e,t=null!=k?k:n.value;y(!0),m(!1),g(t),null===(e=n.onCancel)||void 0===e||e.call(n,t,n.inputProps)}function A(){var e,t;(void 0===(t=n.canEdit)||("function"==typeof t?t():t))&&(m(!0),null===(e=n.onEditingStart)||void 0===e||e.call(n,b,n.inputProps))}function M(){if("function"==typeof n.validation&&!n.validation(b))return y(!1),void(n.onValidationFail&&n.onValidationFail(b));m(!1),w(b),n.onSave(b,n.inputProps)}(0,i.useEffect)((function(){n.cancelOnUnfocus&&n.submitOnUnfocus&&console.warn("EdiText: Both `cancelOnUnfocus` and `submitOnUnfocus` are set to true. `submitOnUnfocus` is ignored in this case. Please remove one of these.")}),[n.cancelOnUnfocus,n.submitOnUnfocus]),(0,i.useEffect)((function(){void 0!==n.value&&(g(n.value),w(n.value)),void 0!==n.editing&&m(n.editing)}),[n.editing,n.value]);var Q,V,R,K,q,H,T,X=p?function(){var e="textarea"===n.type?i.createElement("textarea",o({className:r,editext:_,tabIndex:n.tabIndex},n.inputProps,{onBlur:S,value:b,onChange:I,autoFocus:p})):i.createElement("input",o({className:r,editext:_,tabIndex:n.tabIndex},n.inputProps,{onKeyDown:D,onBlur:S,value:b,type:n.type||"text",onChange:I,autoFocus:p})),t=c(""+a,"styles-module_Editext__save_button__1Dlwo",n.hideIcons&&""+d),f=n.saveButtonClassName||t,m=c(""+a,"styles-module_Editext__cancel_button__26sqr",n.hideIcons&&""+d),v=n.cancelButtonClassName||m,y="styles-module_Editext__editing_container__1C4d6";n.editContainerClassName&&(y=n.editContainerClassName),n.viewContainerClassName&&(y=n.viewContainerClassName);var x=n.buttonsAlign||"after",g=c(s,"before"===x&&""+l,"after"===x&&""+u);return i.createElement("div",null,i.createElement("div",{ref:B,className:y,editext:"edit-container"},"after"===x&&e,i.createElement("div",{className:g,ref:z},i.createElement("button",{ref:P,editext:"save-button",type:"button",className:f,onClick:M},n.saveButtonContent),i.createElement("button",{type:"button",editext:"cancel-button",className:v,onClick:U},n.cancelButtonContent)),"before"===x&&e),!h&&!n.onValidationFail&&i.createElement("div",{className:"styles-module_Editext__validation_message__1puii"},n.validationMessage||"Invalid Value"),n.hint&&i.createElement("div",{className:"styles-module_Editext__hint__EGeV0",editext:"hint"},n.hint))}():(Q=c(""+a,"styles-module_Editext__edit_button__310_J",n.hideIcons&&""+d),V=n.editButtonClassName||Q,R=c(n.viewContainerClassName||"styles-module_Editext__view_container__3oSYx",n.showButtonsOnHover&&"styles-module_Editext__buttons_showButtonsOnHover__2Bfsd"),K=n.buttonsAlign||"after",q=c(s,"before"===K&&""+l,"after"===K&&""+u),H=n.editOnViewClick?A:void 0,T="function"==typeof n.renderValue?n.renderValue(b):b,i.createElement("div",{className:R,editext:f},"after"===K&&i.createElement("div",o({tabIndex:n.tabIndex},n.viewProps,{onKeyDown:F,onFocus:j,onClick:H,editext:"view"}),T),i.createElement("div",{className:q},i.createElement("button",o({type:"button",className:V},n.editButtonProps,{editext:"edit-button",onClick:A}),n.editButtonContent)),"before"===K&&i.createElement("div",o({tabIndex:n.tabIndex},n.viewProps,{onKeyDown:F,onFocus:j,onClick:H,editext:f}),T))),Y=c((null===(e=n.containerProps)||void 0===e?void 0:e.className)||n.mainContainerClassName||"styles-module_Editext__main_container__2azCD",n.className);return i.createElement("div",o({},n.containerProps,{className:Y,editext:"main-container"}),X)}},375:function(n,e,t){t.d(e,{g4:function(){return N}});var i=function(){return i=Object.assign||function(n){for(var e,t=1,i=arguments.length;t<i;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},i.apply(this,arguments)};Object.create;function o(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}Object.create;var a=t(2791),r=t(5751),s=function(n,e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("undefined"!==typeof t[n])return t[n];if(n&&n.indexOf(".")>0){for(var i=n.split("."),o=i.length,a=t[i[0]],r=1;null!=a&&r<o;)a=a[i[r]],r+=1;if("undefined"!==typeof a)return a}return e}};var l,u,d,c,f,_,p,m,v,h=242.776657104492,y=(0,r.keyframes)(l||(l=o(["\n  12.5% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n  43.75% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n  100% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n"],["\n  12.5% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n  43.75% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n  100% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n"])),.14*h,h,.11*h,.35*h,h,.35*h,.01*h,h,.99*h),x=(r.default.path(u||(u=o(["\n  stroke-dasharray: ","px, ",";\n  stroke-dashoffset: 0;\n  animation: "," ","s linear infinite;\n"],["\n  stroke-dasharray: ","px, ",";\n  stroke-dashoffset: 0;\n  animation: "," ","s linear infinite;\n"])),.01*h,h,y,1.6),(0,r.keyframes)(d||(d=o(["\n to {\n    transform: rotate(360deg);\n  }\n"],["\n to {\n    transform: rotate(360deg);\n  }\n"])))),b=(0,r.keyframes)(c||(c=o(["\n  0% {\n    stroke-dasharray: 0, 580, 0, 0, 0, 0, 0, 0, 0;\n  }\n  50% {\n    stroke-dasharray: 0, 450, 10, 30, 10, 30, 10, 30, 10;\n  }\n  100% {\n    stroke-dasharray: 0, 580, 0, 0, 0, 0, 0, 0, 0;\n  }\n"],["\n  0% {\n    stroke-dasharray: 0, 580, 0, 0, 0, 0, 0, 0, 0;\n  }\n  50% {\n    stroke-dasharray: 0, 450, 10, 30, 10, 30, 10, 30, 10;\n  }\n  100% {\n    stroke-dasharray: 0, 580, 0, 0, 0, 0, 0, 0, 0;\n  }\n"]))),g=(r.default.svg(f||(f=o(["\n  width: 230px;\n  height: 230px;\n  transform-origin: 115px 115px;\n  animation: 1.4s linear infinite ",";\n  -webkit-animation: 1.4s linear infinite ",";\n"],["\n  width: 230px;\n  height: 230px;\n  transform-origin: 115px 115px;\n  animation: 1.4s linear infinite ",";\n  -webkit-animation: 1.4s linear infinite ",";\n"])),x,x),r.default.path(_||(_=o(["\n  animation: 1.4s ease-in-out infinite ",";\n  -webkit-animation: 1.4s ease-in-out infinite ",";\n"],["\n  animation: 1.4s ease-in-out infinite ",";\n  -webkit-animation: 1.4s ease-in-out infinite ",";\n"])),b,b),(0,r.keyframes)(p||(p=o(["\n to {\n    transform: rotate(360deg);\n  }\n"],["\n to {\n    transform: rotate(360deg);\n  }\n"]))));r.default.svg(m||(m=o(["\n  animation: "," 0.75s steps(12, end) infinite;\n  animation-duration: ","s;\n"],["\n  animation: "," 0.75s steps(12, end) infinite;\n  animation-duration: ","s;\n"])),g,s("speed","0.75")),r.default.polyline(v||(v=o(["\n  stroke-width: ","px;\n  stroke-linecap: round;\n\n  &:nth-child(12n + 0) {\n    stroke-opacity: 0.08;\n  }\n\n  &:nth-child(12n + 1) {\n    stroke-opacity: 0.17;\n  }\n\n  &:nth-child(12n + 2) {\n    stroke-opacity: 0.25;\n  }\n\n  &:nth-child(12n + 3) {\n    stroke-opacity: 0.33;\n  }\n\n  &:nth-child(12n + 4) {\n    stroke-opacity: 0.42;\n  }\n\n  &:nth-child(12n + 5) {\n    stroke-opacity: 0.5;\n  }\n\n  &:nth-child(12n + 6) {\n    stroke-opacity: 0.58;\n  }\n\n  &:nth-child(12n + 7) {\n    stroke-opacity: 0.66;\n  }\n\n  &:nth-child(12n + 8) {\n    stroke-opacity: 0.75;\n  }\n\n  &:nth-child(12n + 9) {\n    stroke-opacity: 0.83;\n  }\n\n  &:nth-child(12n + 11) {\n    stroke-opacity: 0.92;\n  }\n"],["\n  stroke-width: ","px;\n  stroke-linecap: round;\n\n  &:nth-child(12n + 0) {\n    stroke-opacity: 0.08;\n  }\n\n  &:nth-child(12n + 1) {\n    stroke-opacity: 0.17;\n  }\n\n  &:nth-child(12n + 2) {\n    stroke-opacity: 0.25;\n  }\n\n  &:nth-child(12n + 3) {\n    stroke-opacity: 0.33;\n  }\n\n  &:nth-child(12n + 4) {\n    stroke-opacity: 0.42;\n  }\n\n  &:nth-child(12n + 5) {\n    stroke-opacity: 0.5;\n  }\n\n  &:nth-child(12n + 6) {\n    stroke-opacity: 0.58;\n  }\n\n  &:nth-child(12n + 7) {\n    stroke-opacity: 0.66;\n  }\n\n  &:nth-child(12n + 8) {\n    stroke-opacity: 0.75;\n  }\n\n  &:nth-child(12n + 9) {\n    stroke-opacity: 0.83;\n  }\n\n  &:nth-child(12n + 11) {\n    stroke-opacity: 0.92;\n  }\n"])),(function(n){return n.width}));var E,k,w,C=function(n){return{display:n?"flex":"none"}},N=function(n){var e=n.height,t=void 0===e?80:e,o=n.width,r=void 0===o?80:o,s=n.radius,l=void 0===s?9:s,u=n.color,d=void 0===u?"green":u,c=n.ariaLabel,f=void 0===c?"three-dots-loading":c,_=n.wrapperStyle,p=n.wrapperClass,m=n.visible,v=void 0===m||m;return a.createElement("div",{style:i(i({},C(v)),_),className:p,"data-testid":"three-dots-loading"},a.createElement("svg",{width:r,height:t,viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:d,"aria-label":f,"data-testid":"three-dots-svg"},a.createElement("circle",{cx:"15",cy:"15",r:Number(l)+6},a.createElement("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),a.createElement("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})),a.createElement("circle",{cx:"60",cy:"15",r:l,attributeName:"fill-opacity",from:"1",to:"0.3"},a.createElement("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),a.createElement("animate",{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})),a.createElement("circle",{cx:"105",cy:"15",r:Number(l)+6},a.createElement("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),a.createElement("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}))))},O=(0,r.keyframes)(E||(E=o(["\n to {\n    stroke-dashoffset: 136;\n  }\n"],["\n to {\n    stroke-dashoffset: 136;\n  }\n"])));r.default.polygon(k||(k=o(["\n  stroke-dasharray: 17;\n  animation: "," 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;\n"],["\n  stroke-dasharray: 17;\n  animation: "," 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;\n"])),O),r.default.svg(w||(w=o(["\n  transform-origin: 50% 65%;\n"],["\n  transform-origin: 50% 65%;\n"])))},6916:function(n,e,t){t.d(e,{P1:function(){return l}});var i="NOT_FOUND";var o=function(n,e){return n===e};function a(n,e){var t="object"===typeof e?e:{equalityCheck:e},a=t.equalityCheck,r=void 0===a?o:a,s=t.maxSize,l=void 0===s?1:s,u=t.resultEqualityCheck,d=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var i=e.length,o=0;o<i;o++)if(!n(e[o],t[o]))return!1;return!0}}(r),c=1===l?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:i},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(d):function(n,e){var t=[];function o(n){var o=t.findIndex((function(t){return e(n,t.key)}));if(o>-1){var a=t[o];return o>0&&(t.splice(o,1),t.unshift(a)),a.value}return i}return{get:o,put:function(e,a){o(e)===i&&(t.unshift({key:e,value:a}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(l,d);function f(){var e=c.get(arguments);if(e===i){if(e=n.apply(null,arguments),u){var t=c.getEntries(),o=t.find((function(n){return u(n.value,e)}));o&&(e=o.value)}c.put(arguments,e)}return e}return f.clearCache=function(){return c.clear()},f}function r(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function s(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),i=1;i<e;i++)t[i-1]=arguments[i];var o=function(){for(var e=arguments.length,i=new Array(e),o=0;o<e;o++)i[o]=arguments[o];var a,s=0,l={memoizeOptions:void 0},u=i.pop();if("object"===typeof u&&(l=u,u=i.pop()),"function"!==typeof u)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof u+"]");var d=l,c=d.memoizeOptions,f=void 0===c?t:c,_=Array.isArray(f)?f:[f],p=r(i),m=n.apply(void 0,[function(){return s++,u.apply(null,arguments)}].concat(_)),v=n((function(){for(var n=[],e=p.length,t=0;t<e;t++)n.push(p[t].apply(null,arguments));return a=m.apply(null,n)}));return Object.assign(v,{resultFunc:u,memoizedResultFunc:m,dependencies:p,lastResult:function(){return a},recomputations:function(){return s},resetRecomputations:function(){return s=0}}),v};return o}var l=s(a)}}]);
//# sourceMappingURL=875.ef84a330.chunk.js.map