(()=>{var t={757:(t,e,r)=>{t.exports=r(666)},666:t=>{var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var a=e&&e.prototype instanceof v?e:v,i=Object.create(a.prototype),o=new $(n||[]);return i._invoke=function(t,e,r){var n=f;return function(a,i){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===a)throw i;return P()}for(r.method=a,r.arg=i;;){var o=r.delegate;if(o){var s=k(o,r);if(s){if(s===m)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var c=l(t,e,r);if("normal"===c.type){if(n=r.done?p:d,c.arg===m)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=p,r.method="throw",r.arg=c.arg)}}}(t,r,o),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f="suspendedStart",d="suspendedYield",h="executing",p="completed",m={};function v(){}function g(){}function _(){}var y={};y[i]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w(O([])));b&&b!==r&&n.call(b,i)&&(y=b);var x=_.prototype=v.prototype=Object.create(y);function C(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(a,i,o,s){var c=l(t[a],t,i);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,o,s)}),(function(t){r("throw",t,o,s)})):e.resolve(f).then((function(t){u.value=t,o(u)}),(function(t){return r("throw",t,o,s)}))}s(c.arg)}var a;this._invoke=function(t,n){function i(){return new e((function(e,a){r(t,n,e,a)}))}return a=a?a.then(i,i):i()}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var a=l(n,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,m;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function $(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function r(){for(;++a<t.length;)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}return{next:P}}function P(){return{value:e,done:!0}}return g.prototype=x.constructor=_,_.constructor=g,g.displayName=c(_,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,c(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},C(S.prototype),S.prototype[o]=function(){return this},t.AsyncIterator=S,t.async=function(e,r,n,a,i){void 0===i&&(i=Promise);var o=new S(u(e,r,n,a),i);return t.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},C(x),c(x,s,"Generator"),x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,$.prototype={constructor:$,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return s.type="throw",s.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],s=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;L(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:O(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}},e={};function r(n){var a=e[n];if(void 0!==a)return a.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=r(757),e=r.n(t);function n(t,e,r,n,a,i,o){try{var s=t[i](o),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(a,i){var o=t.apply(e,r);function s(t){n(o,a,i,s,c,"next",t)}function c(t){n(o,a,i,s,c,"throw",t)}s(void 0)}))}}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null==r)return;var n,a,i=[],o=!0,s=!1;try{for(r=r.call(t);!(o=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);o=!0);}catch(t){s=!0,a=t}finally{try{o||null==r.return||r.return()}finally{if(s)throw a}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function s(t,e,r,n,a,i,o,s){var c,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=r,u._compiled=!0),n&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),o?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=c):a&&(c=s?function(){a.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:a),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,c):[c]}return{exports:t,options:u}}const c=s({props:["data"],data:function(){return{loaded:!1,confirming:!1,unstaged:[],staged:[],meta:{},commit_message:"",up_to_date:!0,ahead:!1,behind:!1,diverged:!1,status:""}},computed:{hasStagedChanges:function(){return this.staged.length>0},canPull:function(){return this.behind||this.diverged},canPush:function(){return this.ahead&&!this.diverged}},created:function(){for(var t=0,e=Object.entries(this.$props.data);t<e.length;t++){var r=i(e[t],2),n=r[0],a=r[1];this[n]=a}this.loaded||this.getStatus()},methods:{getStatus:function(t){var r=this;return a(e().mark((function n(){var a;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t&&(r.loaded=!1),e.next=3,r.$axios.get(cp_url("gitamic/api/status"));case 3:a=e.sent,r.loaded=!0,r.unstaged=a.data.unstaged,r.staged=a.data.staged,r.meta=a.data.meta,r.up_to_date=a.data.up_to_date,r.ahead=a.data.ahead,r.behind=a.data.behind,r.diverged=a.data.diverged,r.status=a.data.status;case 13:case"end":return e.stop()}}),n)})))()},confirmCommit:function(){this.confirming=!0},cancelCommit:function(){this.confirming=!1,this.commit_message=""},doCommit:function(){var t=this;return a(e().mark((function r(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.post(cp_url("gitamic/api/commit"),{commit_message:t.commit_message});case 2:return e.sent,e.next=5,t.getStatus();case 5:t.confirming=!1,t.commit_message="";case 7:case"end":return e.stop()}}),r)})))()},push:function(){var t=this;return a(e().mark((function r(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loaded=!1,e.next=3,t.$axios.post(cp_url("gitamic/api/push"));case 3:return e.next=5,t.getStatus();case 5:t.loaded=!0;case 6:case"end":return e.stop()}}),r)})))()},pull:function(){var t=this;return a(e().mark((function r(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loaded=!1,e.next=3,t.$axios.post(cp_url("gitamic/api/pull"));case 3:return e.next=5,t.getStatus();case 5:t.loaded=!0;case 6:case"end":return e.stop()}}),r)})))()}}},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.confirming?r("confirmation-modal",{attrs:{title:"Commit staged changes",buttonText:"Commit"},on:{confirm:t.doCommit,cancel:t.cancelCommit}},[r("p",[t._v("Are you sure you want to commit these changes?")]),t._v(" "),r("ul",{staticClass:"m-2 list-inside"},t._l(t.staged,(function(e){return r("li",{staticClass:"list-disc"},[t._v(t._s(e.relative_path))])})),0),t._v(" "),r("label",{attrs:{for:"commit_message"}},[t._v("Enter a commit message")]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.commit_message,expression:"commit_message"}],staticClass:"w-full border rounded font-mono p-2 h-48",attrs:{id:"commit_message"},domProps:{value:t.commit_message},on:{input:function(e){e.target.composing||(t.commit_message=e.target.value)}}})]):t._e(),t._v(" "),r("div",{staticClass:"flex mb-3"},[r("h1",{staticClass:"flex-1"},[t._v(t._s(t.__("Gitamic")))]),t._v(" "),r("button",{staticClass:"btn",on:{click:function(e){return e.preventDefault(),t.getStatus(!0)}}},[t._v(t._s(t.__("Refresh")))]),t._v(" "),t.hasStagedChanges?r("button",{staticClass:"ml-2 btn-primary flex items-center",on:{click:t.confirmCommit}},[r("span",[t._v(t._s(t.__("Commit")))])]):t._e(),t._v(" "),t.canPush?r("button",{staticClass:"ml-2 flex btn items-center",class:{"btn-primary":!t.hasStagedChanges},on:{click:t.push}},[r("span",[t._v(t._s(t.__("Push")))])]):t._e(),t._v(" "),t.canPull?r("button",{staticClass:"ml-2 flex btn items-center",class:{"btn-primary":!t.hasStagedChanges},on:{click:t.pull}},[r("span",[t._v(t._s(t.__("Pull")))])]):t._e()]),t._v(" "),t.loaded?t._e():r("div",{staticClass:"card p-3 text-center"},[r("loading-graphic")],1),t._v(" "),t.loaded?r("div",[r("div",{staticClass:"my-4"},[r("h2",{staticClass:"mb-2"},[t._v("Status")]),t._v(" "),r("pre",[t._v(t._s(t.status))])]),t._v(" "),r("div",{staticClass:"my-4"},[r("h2",{staticClass:"mb-2"},[t._v("Staged")]),t._v(" "),r("gitamic-staged",{ref:"staged",attrs:{data:t.staged}})],1),t._v(" "),r("div",{staticClass:"my-4"},[r("h2",{staticClass:"mb-2"},[t._v("Unstaged")]),t._v(" "),r("gitamic-unstaged",{ref:"unstaged",attrs:{data:t.unstaged}})],1),t._v(" "),t._m(0),t._v(" "),t._m(1)]):t._e()],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex justify-center text-center mt-4"},[r("div",{staticClass:"bg-white rounded-full px-3 py-1 shadow-sm text-sm text-grey-70"},[t._v("\n                Something not working?\n                "),r("a",{staticClass:"text-blue hover:text-blue-dark",attrs:{href:"https://github.com/simonhamp/Gitamic/issues/new/choose",target:"_blank"}},[t._v("\n                    Get help\n                ")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"my-4 text-sm text-center text-grey-60 tracking-wide",staticStyle:{"font-variant":"all-small-caps"}},[t._v("\n            Gitamic © "),r("a",{attrs:{href:"https://simonhamp.me/",target:"_blank"}},[t._v("Simon Hamp")])])}],!1,null,null,null).exports;function u(t,e,r,n,a,i,o){try{var s=t[i](o),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,a)}const l=s({props:["data"],data:function(){return{rows:this.data,columns:[{field:"relative_path",label:"Path"},{field:"last_modified",label:"Last modified",fieldtype:"date"}]}},computed:{},watch:{data:function(t,e){this.rows=t}},created:function(){},methods:{beginAction:function(){var t=this;this.rows=Object.values(this.rows).filter((function(e){return!Object.values(t.$refs.list.sharedState.selections).includes(e.id)}))},refresh:function(){var t,r=this;return(t=e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.$root.$refs.status.getStatus();case 2:r.$refs.list.clearSelections();case 3:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,a){var i=t.apply(e,r);function o(t){u(i,n,a,o,s,"next",t)}function s(t){u(i,n,a,o,s,"throw",t)}o(void 0)}))})()},stage:function(t){var e=this,r={selections:[t.id],action:"stage"};Vue.delete(this.rows,t.id),this.$axios.post("api/actions/unstaged",r,{responseType:"blob"}).then((function(t){e.refresh()}))}}},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("data-list",{ref:"list",attrs:{visibleColumns:t.columns,columns:t.columns,rows:t.rows,sortColumn:"path",sortDirection:"asc"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.filteredRows;return r("div",{staticClass:"card p-0 relative"},[r("data-list-bulk-actions",{attrs:{url:"api/actions/unstaged"},on:{started:t.beginAction,completed:t.refresh}}),t._v(" "),r("data-list-table",{attrs:{rows:n,"allow-bulk-actions":"true"},scopedSlots:t._u([{key:"cell-relative_path",fn:function(e){var n=e.row;return[n.is_content&&!n.is_deleted?r("a",{attrs:{href:n.edit_url}},[t._v("\n                            "+t._s(n.relative_path)+"\n                        ")]):n.is_deleted?r("span",{staticClass:"line-through"},[t._v("\n                            "+t._s(n.relative_path)+"\n                        ")]):t._e()]}},{key:"actions",fn:function(e){var n=e.row;e.index;return[r("dropdown-list",[r("dropdown-item",{key:"git.stage",attrs:{text:t.__("Stage")},on:{click:function(e){return t.stage(n)}}})],1)]}}],null,!0)})],1)}}])})],1)}),[],!1,null,null,null).exports;function f(t,e,r,n,a,i,o){try{var s=t[i](o),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,a)}const d=s({props:["data"],data:function(){return{rows:this.data,columns:[{field:"relative_path",label:"Path"},{field:"last_modified",label:"Last modified",fieldtype:"date"}]}},computed:{},watch:{data:function(t,e){this.rows=t}},created:function(){},methods:{beginAction:function(){var t=this;this.rows=this.rows.filter((function(e){return!Object.values(t.$refs.list.sharedState.selections).includes(e.id)}))},refresh:function(){var t,r=this;return(t=e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.$root.$refs.status.getStatus();case 2:r.$refs.list.clearSelections();case 3:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,a){var i=t.apply(e,r);function o(t){f(i,n,a,o,s,"next",t)}function s(t){f(i,n,a,o,s,"throw",t)}o(void 0)}))})()},unstage:function(t){var e=this,r={selections:[t.id],action:"unstage"};this.rows.splice(t.id,1),this.$axios.post("api/actions/staged",r,{responseType:"blob"}).then((function(t){e.refresh()}))}}},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("data-list",{ref:"list",attrs:{visibleColumns:t.columns,columns:t.columns,rows:t.rows,sortColumn:"path",sortDirection:"asc"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.filteredRows;return r("div",{staticClass:"card p-0 relative"},[r("data-list-bulk-actions",{attrs:{url:"api/actions/staged"},on:{started:t.beginAction,completed:t.refresh}}),t._v(" "),r("data-list-table",{attrs:{rows:n,"allow-bulk-actions":"true"},scopedSlots:t._u([{key:"cell-relative_path",fn:function(e){var n=e.row;return[n.is_content&&!n.is_deleted?r("a",{attrs:{href:n.edit_url}},[t._v("\n                        "+t._s(n.relative_path)+"\n                    ")]):n.is_deleted?r("span",{staticClass:"line-through"},[t._v("\n                        "+t._s(n.relative_path)+"\n                    ")]):t._e()]}},{key:"actions",fn:function(e){var n=e.row;e.index;return[r("dropdown-list",[r("dropdown-item",{key:"git.unstage",attrs:{text:t.__("Unstage")},on:{click:function(e){return t.unstage(n)}}})],1)]}}],null,!0)})],1)}}])})],1)}),[],!1,null,null,null).exports;Statamic.booting((function(){Statamic.$components.register("gitamic-status",c),Statamic.$components.register("gitamic-unstaged",l),Statamic.$components.register("gitamic-staged",d)}))})()})();