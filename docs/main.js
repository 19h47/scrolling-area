!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.ScrollingArea=n():t.ScrollingArea=n()}(window,(function(){return function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=52)}([function(t,n,r){(function(n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n&&n)||Function("return this")()}).call(this,r(54))},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n,r){var e=r(1);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n,r){var e=r(27),o=r(29);t.exports=function(t){return e(o(t))}},function(t,n,r){var e=r(3),o=r(30),i=r(10),u=r(13),c=Object.defineProperty;n.f=e?c:function(t,n,r){if(i(t),n=u(n,!0),i(r),o)try{return c(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){var e=r(0),o=r(9).f,i=r(8),u=r(32),c=r(16),f=r(56),a=r(59);t.exports=function(t,n){var r,s,l,p,v,h=t.target,y=t.global,d=t.stat;if(r=y?e:d?e[h]||c(h,{}):(e[h]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(v=o(r,s))&&v.value:r[s],!a(y?s:h+(d?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;f(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),u(r,s,p,t)}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(3),o=r(5),i=r(12);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var e=r(3),o=r(26),i=r(12),u=r(4),c=r(13),f=r(2),a=r(30),s=Object.getOwnPropertyDescriptor;n.f=e?s:function(t,n){if(t=u(t),n=c(n,!0),a)try{return s(t,n)}catch(t){}if(f(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n,r){var e=r(7);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,r){var e=r(0),o=r(18),i=r(2),u=r(19),c=r(22),f=r(43),a=o("wks"),s=e.Symbol,l=f?s:s&&s.withoutSetter||u;t.exports=function(t){return i(a,t)||(c&&i(s,t)?a[t]=s[t]:a[t]=l("Symbol."+t)),a[t]}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e=r(7);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports={}},function(t,n,r){var e=r(38),o=r(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(e[t])||i(o[t]):e[t]&&e[t][n]||o[t]&&o[t][n]}},function(t,n,r){var e=r(0),o=r(8);t.exports=function(t,n){try{o(e,t,n)}catch(r){e[t]=n}return n}},function(t,n,r){var e=r(18),o=r(19),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n,r){var e=r(36),o=r(34);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.5",mode:e?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},function(t,n,r){var e=r(39),o=r(21).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,r){var e=r(1);t.exports=!!Object.getOwnPropertySymbols&&!e((function(){return!String(Symbol())}))},function(t,n,r){var e=r(29);t.exports=function(t){return Object(e(t))}},function(t,n,r){var e=r(39),o=r(21);t.exports=Object.keys||function(t){return e(t,o)}},function(t,n,r){var e=r(66),o=r(27),i=r(23),u=r(40),c=r(68),f=[].push,a=function(t){var n=1==t,r=2==t,a=3==t,s=4==t,l=6==t,p=5==t||l;return function(v,h,y,d){for(var b,g,m=i(v),w=o(m),O=e(h,y,3),S=u(w.length),x=0,j=d||c,P=n?j(v,S):r?j(v,0):void 0;S>x;x++)if((p||x in w)&&(g=O(b=w[x],x,m),t))if(n)P[x]=g;else if(g)switch(t){case 3:return!0;case 5:return b;case 6:return x;case 2:f.call(P,b)}else if(s)return!1;return l?-1:a||s?s:P}};t.exports={forEach:a(0),map:a(1),filter:a(2),some:a(3),every:a(4),find:a(5),findIndex:a(6)}},function(t,n,r){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!e.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:e},function(t,n,r){var e=r(1),o=r(28),i="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,r){var e=r(3),o=r(1),i=r(31);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,r){var e=r(0),o=r(7),i=e.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},function(t,n,r){var e=r(0),o=r(8),i=r(2),u=r(16),c=r(33),f=r(35),a=f.get,s=f.enforce,l=String(String).split("String");(t.exports=function(t,n,r,c){var f=!!c&&!!c.unsafe,a=!!c&&!!c.enumerable,p=!!c&&!!c.noTargetGet;"function"==typeof r&&("string"!=typeof n||i(r,"name")||o(r,"name",n),s(r).source=l.join("string"==typeof n?n:"")),t!==e?(f?!p&&t[n]&&(a=!0):delete t[n],a?t[n]=r:o(t,n,r)):a?t[n]=r:u(n,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&a(this).source||c(this)}))},function(t,n,r){var e=r(34),o=Function.toString;"function"!=typeof e.inspectSource&&(e.inspectSource=function(t){return o.call(t)}),t.exports=e.inspectSource},function(t,n,r){var e=r(0),o=r(16),i=e["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,r){var e,o,i,u=r(55),c=r(0),f=r(7),a=r(8),s=r(2),l=r(17),p=r(14),v=c.WeakMap;if(u){var h=new v,y=h.get,d=h.has,b=h.set;e=function(t,n){return b.call(h,t,n),n},o=function(t){return y.call(h,t)||{}},i=function(t){return d.call(h,t)}}else{var g=l("state");p[g]=!0,e=function(t,n){return a(t,g,n),n},o=function(t){return s(t,g)?t[g]:{}},i=function(t){return s(t,g)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!f(n)||(r=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},function(t,n){t.exports=!1},function(t,n,r){var e=r(15),o=r(20),i=r(42),u=r(10);t.exports=e("Reflect","ownKeys")||function(t){var n=o.f(u(t)),r=i.f;return r?n.concat(r(t)):n}},function(t,n,r){var e=r(0);t.exports=e},function(t,n,r){var e=r(2),o=r(4),i=r(57).indexOf,u=r(14);t.exports=function(t,n){var r,c=o(t),f=0,a=[];for(r in c)!e(u,r)&&e(c,r)&&a.push(r);for(;n.length>f;)e(c,r=n[f++])&&(~i(a,r)||a.push(r));return a}},function(t,n,r){var e=r(41),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,r){var e=r(22);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,r){var e=r(28);t.exports=Array.isArray||function(t){return"Array"==e(t)}},function(t,n,r){var e=r(11);n.f=e},function(t,n,r){var e=r(3),o=r(1),i=r(2),u=Object.defineProperty,c={},f=function(t){throw t};t.exports=function(t,n){if(i(c,t))return c[t];n||(n={});var r=[][t],a=!!i(n,"ACCESSORS")&&n.ACCESSORS,s=i(n,0)?n[0]:f,l=i(n,1)?n[1]:void 0;return c[t]=!!r&&!o((function(){if(a&&!e)return!0;var t={length:-1};a?u(t,1,{enumerable:!0,get:f}):t[1]=1,r.call(t,s,l)}))}},function(t,n,r){"use strict";var e=r(25).forEach,o=r(74),i=r(46),u=o("forEach"),c=i("forEach");t.exports=u&&c?[].forEach:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,n){t.exports=function(t,n,r){return n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}},function(t,n,r){var e=r(81),o=r(82),i=r(83),u=r(85);t.exports=function(t,n){return e(t)||o(t,n)||i(t,n)||u()}},function(t,n){t.exports=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},function(t,n){function r(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}t.exports=function(t,n,e){return n&&r(t.prototype,n),e&&r(t,e),t}},function(t,n,r){"use strict";r.r(n),r.d(n,"default",(function(){return v}));r(53),r(69),r(73),r(75),r(76),r(78),r(79);var e=r(48),o=r.n(e),i=r(49),u=r.n(i),c=r(50),f=r.n(c),a=r(51),s=r.n(a);function l(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.push.apply(r,e)}return r}var p=function(){return window.pageYOffset||document.documentElement.scrollTop},v=function(){function t(n,r){f()(this,t),this.on={scroll:this.scroll.bind(this),resize:this.resize.bind(this),update:this.update.bind(this)},this.$el=n;var e=u()(this.$el.children,1);this.$child=e[0],this.options=function(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){o()(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))}))}return t}({container:r.container||this.$el},r),this.vars={bottom:0,spring:.1,target:0,value:0}}return s()(t,[{key:"init",value:function(){return this.initElements(),this.on.resize(),!(0>Math.round(this.width-this.containerWidth))&&(requestAnimationFrame(this.on.scroll),this.initEvents())}},{key:"initEvents",value:function(){window.addEventListener("resize",this.on.resize)}},{key:"initElements",value:function(){this.$child.style.setProperty("display","inline-block"),this.$child.style.setProperty("white-space","nowrap")}},{key:"scroll",value:function(){var t=p()+this.windowArea,n=(t-this.top)/this.windowArea*100;console.log({windowBottom:t,progression:n}),this.vars.target=Math.max(0,Math.min(n,100)),this.update(),requestAnimationFrame(this.on.scroll)}},{key:"resize",value:function(){var t=this.$child.getBoundingClientRect();this.width=t.width,this.height=t.height,this.top=t.top+p()-this.$child.clientTop,this.containerWidth=this.options.container.clientWidth,this.windowArea=window.innerHeight-this.height}},{key:"update",value:function(){this.vars.value+=(this.vars.target-this.vars.value)*this.vars.spring;var t=Math.round(this.vars.value*Math.abs(this.width-this.containerWidth)/100);this.$child.style.transform="translate3d(".concat(-1*t,"px, 0, 0)")}}]),t}()},function(t,n,r){"use strict";var e=r(6),o=r(0),i=r(15),u=r(36),c=r(3),f=r(22),a=r(43),s=r(1),l=r(2),p=r(44),v=r(7),h=r(10),y=r(23),d=r(4),b=r(13),g=r(12),m=r(60),w=r(24),O=r(20),S=r(63),x=r(42),j=r(9),P=r(5),E=r(26),T=r(8),L=r(32),M=r(18),A=r(17),k=r(14),C=r(19),_=r(11),D=r(45),F=r(64),N=r(65),I=r(35),$=r(25).forEach,z=A("hidden"),R=_("toPrimitive"),W=I.set,G=I.getterFor("Symbol"),V=Object.prototype,H=o.Symbol,q=i("JSON","stringify"),B=j.f,J=P.f,Y=S.f,K=E.f,Q=M("symbols"),U=M("op-symbols"),X=M("string-to-symbol-registry"),Z=M("symbol-to-string-registry"),tt=M("wks"),nt=o.QObject,rt=!nt||!nt.prototype||!nt.prototype.findChild,et=c&&s((function(){return 7!=m(J({},"a",{get:function(){return J(this,"a",{value:7}).a}})).a}))?function(t,n,r){var e=B(V,n);e&&delete V[n],J(t,n,r),e&&t!==V&&J(V,n,e)}:J,ot=function(t,n){var r=Q[t]=m(H.prototype);return W(r,{type:"Symbol",tag:t,description:n}),c||(r.description=n),r},it=a?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof H},ut=function(t,n,r){t===V&&ut(U,n,r),h(t);var e=b(n,!0);return h(r),l(Q,e)?(r.enumerable?(l(t,z)&&t[z][e]&&(t[z][e]=!1),r=m(r,{enumerable:g(0,!1)})):(l(t,z)||J(t,z,g(1,{})),t[z][e]=!0),et(t,e,r)):J(t,e,r)},ct=function(t,n){h(t);var r=d(n),e=w(r).concat(lt(r));return $(e,(function(n){c&&!ft.call(r,n)||ut(t,n,r[n])})),t},ft=function(t){var n=b(t,!0),r=K.call(this,n);return!(this===V&&l(Q,n)&&!l(U,n))&&(!(r||!l(this,n)||!l(Q,n)||l(this,z)&&this[z][n])||r)},at=function(t,n){var r=d(t),e=b(n,!0);if(r!==V||!l(Q,e)||l(U,e)){var o=B(r,e);return!o||!l(Q,e)||l(r,z)&&r[z][e]||(o.enumerable=!0),o}},st=function(t){var n=Y(d(t)),r=[];return $(n,(function(t){l(Q,t)||l(k,t)||r.push(t)})),r},lt=function(t){var n=t===V,r=Y(n?U:d(t)),e=[];return $(r,(function(t){!l(Q,t)||n&&!l(V,t)||e.push(Q[t])})),e};(f||(L((H=function(){if(this instanceof H)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,n=C(t),r=function(t){this===V&&r.call(U,t),l(this,z)&&l(this[z],n)&&(this[z][n]=!1),et(this,n,g(1,t))};return c&&rt&&et(V,n,{configurable:!0,set:r}),ot(n,t)}).prototype,"toString",(function(){return G(this).tag})),L(H,"withoutSetter",(function(t){return ot(C(t),t)})),E.f=ft,P.f=ut,j.f=at,O.f=S.f=st,x.f=lt,D.f=function(t){return ot(_(t),t)},c&&(J(H.prototype,"description",{configurable:!0,get:function(){return G(this).description}}),u||L(V,"propertyIsEnumerable",ft,{unsafe:!0}))),e({global:!0,wrap:!0,forced:!f,sham:!f},{Symbol:H}),$(w(tt),(function(t){F(t)})),e({target:"Symbol",stat:!0,forced:!f},{for:function(t){var n=String(t);if(l(X,n))return X[n];var r=H(n);return X[n]=r,Z[r]=n,r},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(l(Z,t))return Z[t]},useSetter:function(){rt=!0},useSimple:function(){rt=!1}}),e({target:"Object",stat:!0,forced:!f,sham:!c},{create:function(t,n){return void 0===n?m(t):ct(m(t),n)},defineProperty:ut,defineProperties:ct,getOwnPropertyDescriptor:at}),e({target:"Object",stat:!0,forced:!f},{getOwnPropertyNames:st,getOwnPropertySymbols:lt}),e({target:"Object",stat:!0,forced:s((function(){x.f(1)}))},{getOwnPropertySymbols:function(t){return x.f(y(t))}}),q)&&e({target:"JSON",stat:!0,forced:!f||s((function(){var t=H();return"[null]"!=q([t])||"{}"!=q({a:t})||"{}"!=q(Object(t))}))},{stringify:function(t,n,r){for(var e,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(e=n,(v(n)||void 0!==t)&&!it(t))return p(n)||(n=function(t,n){if("function"==typeof e&&(n=e.call(this,t,n)),!it(n))return n}),o[1]=n,q.apply(null,o)}});H.prototype[R]||T(H.prototype,R,H.prototype.valueOf),N(H,"Symbol"),k[z]=!0},function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,n,r){var e=r(0),o=r(33),i=e.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,n,r){var e=r(2),o=r(37),i=r(9),u=r(5);t.exports=function(t,n){for(var r=o(n),c=u.f,f=i.f,a=0;a<r.length;a++){var s=r[a];e(t,s)||c(t,s,f(n,s))}}},function(t,n,r){var e=r(4),o=r(40),i=r(58),u=function(t){return function(n,r,u){var c,f=e(n),a=o(f.length),s=i(u,a);if(t&&r!=r){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},function(t,n,r){var e=r(41),o=Math.max,i=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):i(r,n)}},function(t,n,r){var e=r(1),o=/#|\.prototype\./,i=function(t,n){var r=c[u(t)];return r==a||r!=f&&("function"==typeof n?e(n):!!n)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},f=i.NATIVE="N",a=i.POLYFILL="P";t.exports=i},function(t,n,r){var e,o=r(10),i=r(61),u=r(21),c=r(14),f=r(62),a=r(31),s=r(17),l=s("IE_PROTO"),p=function(){},v=function(t){return"<script>"+t+"<\/script>"},h=function(){try{e=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,n;h=e?function(t){t.write(v("")),t.close();var n=t.parentWindow.Object;return t=null,n}(e):((n=a("iframe")).style.display="none",f.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(v("document.F=Object")),t.close(),t.F);for(var r=u.length;r--;)delete h.prototype[u[r]];return h()};c[l]=!0,t.exports=Object.create||function(t,n){var r;return null!==t?(p.prototype=o(t),r=new p,p.prototype=null,r[l]=t):r=h(),void 0===n?r:i(r,n)}},function(t,n,r){var e=r(3),o=r(5),i=r(10),u=r(24);t.exports=e?Object.defineProperties:function(t,n){i(t);for(var r,e=u(n),c=e.length,f=0;c>f;)o.f(t,r=e[f++],n[r]);return t}},function(t,n,r){var e=r(15);t.exports=e("document","documentElement")},function(t,n,r){var e=r(4),o=r(20).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return u.slice()}}(t):o(e(t))}},function(t,n,r){var e=r(38),o=r(2),i=r(45),u=r(5).f;t.exports=function(t){var n=e.Symbol||(e.Symbol={});o(n,t)||u(n,t,{value:i.f(t)})}},function(t,n,r){var e=r(5).f,o=r(2),i=r(11)("toStringTag");t.exports=function(t,n,r){t&&!o(t=r?t:t.prototype,i)&&e(t,i,{configurable:!0,value:n})}},function(t,n,r){var e=r(67);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 0:return function(){return t.call(n)};case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,r){var e=r(7),o=r(44),i=r(11)("species");t.exports=function(t,n){var r;return o(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!o(r.prototype)?e(r)&&null===(r=r[i])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===n?0:n)}},function(t,n,r){"use strict";var e=r(6),o=r(25).filter,i=r(70),u=r(46),c=i("filter"),f=u("filter");e({target:"Array",proto:!0,forced:!c||!f},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,n,r){var e=r(1),o=r(11),i=r(71),u=o("species");t.exports=function(t){return i>=51||!e((function(){var n=[];return(n.constructor={})[u]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},function(t,n,r){var e,o,i=r(0),u=r(72),c=i.process,f=c&&c.versions,a=f&&f.v8;a?o=(e=a.split("."))[0]+e[1]:u&&(!(e=u.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=u.match(/Chrome\/(\d+)/))&&(o=e[1]),t.exports=o&&+o},function(t,n,r){var e=r(15);t.exports=e("navigator","userAgent")||""},function(t,n,r){"use strict";var e=r(6),o=r(47);e({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,n,r){"use strict";var e=r(1);t.exports=function(t,n){var r=[][t];return!!r&&e((function(){r.call(null,n||function(){throw 1},1)}))}},function(t,n,r){var e=r(6),o=r(1),i=r(4),u=r(9).f,c=r(3),f=o((function(){u(1)}));e({target:"Object",stat:!0,forced:!c||f,sham:!c},{getOwnPropertyDescriptor:function(t,n){return u(i(t),n)}})},function(t,n,r){var e=r(6),o=r(3),i=r(37),u=r(4),c=r(9),f=r(77);e({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){for(var n,r,e=u(t),o=c.f,a=i(e),s={},l=0;a.length>l;)void 0!==(r=o(e,n=a[l++]))&&f(s,n,r);return s}})},function(t,n,r){"use strict";var e=r(13),o=r(5),i=r(12);t.exports=function(t,n,r){var u=e(n);u in t?o.f(t,u,i(0,r)):t[u]=r}},function(t,n,r){var e=r(6),o=r(23),i=r(24);e({target:"Object",stat:!0,forced:r(1)((function(){i(1)}))},{keys:function(t){return i(o(t))}})},function(t,n,r){var e=r(0),o=r(80),i=r(47),u=r(8);for(var c in o){var f=e[c],a=f&&f.prototype;if(a&&a.forEach!==i)try{u(a,"forEach",i)}catch(t){a.forEach=i}}},function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,n){t.exports=function(t){if(Array.isArray(t))return t}},function(t,n){t.exports=function(t,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],e=!0,o=!1,i=void 0;try{for(var u,c=t[Symbol.iterator]();!(e=(u=c.next()).done)&&(r.push(u.value),!n||r.length!==n);e=!0);}catch(t){o=!0,i=t}finally{try{e||null==c.return||c.return()}finally{if(o)throw i}}return r}}},function(t,n,r){var e=r(84);t.exports=function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}},function(t,n){t.exports=function(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}},function(t,n){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}}])}));