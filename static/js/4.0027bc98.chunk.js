(this["webpackJsonpSundar-Gutka"]=this["webpackJsonpSundar-Gutka"]||[]).push([[4],{88:function(t,e,n){"use strict";n.r(e),n.d(e,"startInputShims",(function(){return g}));var r=n(3),o=n.n(r),a=n(7),i=n(10),c=new WeakMap,u=function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;c.has(t)!==n&&(n?l(t,e,r):d(t,e))},s=function(t){return t===t.getRootNode().activeElement},l=function(t,e,n){var r=e.parentNode,o=e.cloneNode(!1);o.classList.add("cloned-input"),o.tabIndex=-1,r.appendChild(o),c.set(t,o);var a="rtl"===t.ownerDocument.dir?9999:-9999;t.style.pointerEvents="none",e.style.transform="translate3d(".concat(a,"px,").concat(n,"px,0) scale(0)")},d=function(t,e){var n=c.get(t);n&&(c.delete(t),n.remove()),t.style.pointerEvents="",e.style.transform=""},f=function(t,e,n){if(!n||!e)return function(){};var r=function(n){s(e)&&u(t,e,n)},o=function(){return u(t,e,!1)},a=function(){return r(!0)},c=function(){return r(!1)};return Object(i.a)(n,"ionScrollStart",a),Object(i.a)(n,"ionScrollEnd",c),e.addEventListener("blur",o),function(){Object(i.b)(n,"ionScrollStart",a),Object(i.b)(n,"ionScrollEnd",c),e.addEventListener("ionBlur",o)}},p="input, textarea, [no-blur], [contenteditable]",v=function(t,e,n){var r=t.closest("ion-item,[ion-item]")||t;return m(r.getBoundingClientRect(),e.getBoundingClientRect(),n,t.ownerDocument.defaultView.innerHeight)},m=function(t,e,n,r){var o=t.top,a=t.bottom,i=e.top,c=i+15,u=.75*Math.min(e.bottom,r-n)-a,s=c-o,l=Math.round(u<0?-u:s>0?-s:0),d=Math.min(l,o-i),f=Math.abs(d)/.3;return{scrollAmount:d,scrollDuration:Math.min(400,Math.max(150,f)),scrollPadding:n,inputSafeY:4-(o-c)}},b=function(t,e,n,r,o){var a,c=function(t){a=Object(i.o)(t)},u=function(c){if(a){var u=Object(i.o)(c);w(6,a,u)||s(e)||(c.stopPropagation(),h(t,e,n,r,o))}};return t.addEventListener("touchstart",c,!0),t.addEventListener("touchend",u,!0),function(){t.removeEventListener("touchstart",c,!0),t.removeEventListener("touchend",u,!0)}},h=function(){var t=Object(a.a)(o.a.mark((function t(e,n,r,c,s){var l,d,f,p,m,b;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r||c){t.next=2;break}return t.abrupt("return");case 2:if(l=v(e,r||c,s),!(r&&Math.abs(l.scrollAmount)<4)){t.next=6;break}return n.focus(),t.abrupt("return");case 6:if(u(e,n,!0,l.inputSafeY),n.focus(),Object(i.q)((function(){return e.click()})),"undefined"===typeof window){t.next=22;break}if(f=function(){var t=Object(a.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0!==d&&clearTimeout(d),window.removeEventListener("ionKeyboardDidShow",p),window.removeEventListener("ionKeyboardDidShow",f),!r){t.next=6;break}return t.next=6,r.scrollByPoint(0,l.scrollAmount,l.scrollDuration);case 6:u(e,n,!1,l.inputSafeY),n.focus();case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function t(){window.removeEventListener("ionKeyboardDidShow",t),window.addEventListener("ionKeyboardDidShow",f)},!r){t.next=21;break}return t.next=15,r.getScrollElement();case 15:if(m=t.sent,b=m.scrollHeight-m.clientHeight,!(l.scrollAmount>b-m.scrollTop)){t.next=21;break}return"password"===n.type?(l.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",p)):window.addEventListener("ionKeyboardDidShow",f),d=setTimeout(f,1e3),t.abrupt("return");case 21:f();case 22:case"end":return t.stop()}}),t)})));return function(e,n,r,o,a){return t.apply(this,arguments)}}(),w=function(t,e,n){if(e&&n){var r=e.x-n.x,o=e.y-n.y;return r*r+o*o>t*t}return!1},E=function(t,e){if("INPUT"===t.tagName&&(!t.parentElement||"ION-INPUT"!==t.parentElement.tagName)&&(!t.parentElement||!t.parentElement.parentElement||"ION-SEARCHBAR"!==t.parentElement.parentElement.tagName)){var n=t.closest("ion-content");if(null!==n){var r=n.$ionPaddingTimer;r&&clearTimeout(r),e>0?n.style.setProperty("--keyboard-offset","".concat(e,"px")):n.$ionPaddingTimer=setTimeout((function(){n.style.setProperty("--keyboard-offset","0px")}),120)}}},g=function(t){var e=document,n=t.getNumber("keyboardHeight",290),r=t.getBoolean("scrollAssist",!0),c=t.getBoolean("hideCaretOnScroll",!0),u=t.getBoolean("inputBlurring",!0),s=t.getBoolean("scrollPadding",!0),l=Array.from(e.querySelectorAll("ion-input, ion-textarea")),d=new WeakMap,v=new WeakMap,m=function(){var t=Object(a.a)(o.a.mark((function t(e){var a,u,s,l,p,m;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t){return Object(i.c)(e,t)}));case 2:if(a=e.shadowRoot||e,u=a.querySelector("input")||a.querySelector("textarea"),s=e.closest("ion-content"),l=s?null:e.closest("ion-footer"),u){t.next=8;break}return t.abrupt("return");case 8:s&&c&&!d.has(e)&&(p=f(e,u,s),d.set(e,p)),(s||l)&&r&&!v.has(e)&&(m=b(e,u,s,l,n),v.set(e,m));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();u&&function(){var t=!0,e=!1,n=document,r=function(){e=!0},o=function(){t=!0},a=function(r){if(e)e=!1;else{var o=n.activeElement;if(o&&!o.matches(p)){var a=r.target;a!==o&&(a.matches(p)||a.closest(p)||(t=!1,setTimeout((function(){t||o.blur()}),50)))}}};Object(i.a)(n,"ionScrollStart",r),n.addEventListener("focusin",o,!0),n.addEventListener("touchend",a,!1)}(),s&&function(t){var e=document,n=function(e){E(e.target,t)},r=function(t){E(t.target,0)};e.addEventListener("focusin",n),e.addEventListener("focusout",r)}(n);for(var h=0,w=l;h<w.length;h++){var g=w[h];m(g)}e.addEventListener("ionInputDidLoad",(function(t){m(t.detail)})),e.addEventListener("ionInputDidUnload",(function(t){!function(t){if(c){var e=d.get(t);e&&e(),d.delete(t)}if(r){var n=v.get(t);n&&n(),v.delete(t)}}(t.detail)}))}}}]);
//# sourceMappingURL=4.0027bc98.chunk.js.map