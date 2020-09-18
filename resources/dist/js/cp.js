/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Status_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Status_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Status_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Untracked_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Untracked_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_Untracked_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Staged_vue__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Staged_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Staged_vue__);




Statamic.booting(function () {
    Statamic.$components.register('gitamic-status', __WEBPACK_IMPORTED_MODULE_0__components_Status_vue___default.a);
    Statamic.$components.register('gitamic-untracked', __WEBPACK_IMPORTED_MODULE_1__components_Untracked_vue___default.a);
    Statamic.$components.register('gitamic-staged', __WEBPACK_IMPORTED_MODULE_2__components_Staged_vue___default.a);
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(8)
/* script */
var __vue_script__ = __webpack_require__(9)
/* template */
var __vue_template__ = __webpack_require__(10)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/Status.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ed6f95c6", Component.options)
  } else {
    hotAPI.reload("data-v-ed6f95c6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({

    props: [],

    data: function data() {
        return {
            loaded: false,
            untracked: [],
            staged: [],
            meta: {}
        };
    },


    computed: {},

    watch: {},

    created: function created() {
        this.rows = this.getStatus();

        this.$events.$on('composer-finished', this.getStatus);
    },


    methods: {
        getStatus: function getStatus() {
            var _this = this;

            this.$axios.get(cp_url('gitamic/api/status')).then(function (response) {
                _this.loaded = true;
                _this.untracked = response.data.untracked;
                _this.staged = response.data.staged;
                _this.meta = response.data.meta;
            });
        }
    }
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    !_vm.loaded
      ? _c(
          "div",
          { staticClass: "card p-3 text-center" },
          [_c("loading-graphic")],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.loaded
      ? _c(
          "div",
          [
            _vm._m(0),
            _vm._v(" "),
            _c("gitamic-staged", {
              ref: "staged",
              attrs: { data: _vm.staged }
            }),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _c("gitamic-untracked", {
              ref: "untracked",
              attrs: { data: _vm.untracked }
            })
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex my-3" }, [
      _c("h2", [_vm._v("Staged")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex my-3" }, [
      _c("h2", [_vm._v("Untracked")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ed6f95c6", module.exports)
  }
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(8)
/* script */
var __vue_script__ = __webpack_require__(12)
/* template */
var __vue_template__ = __webpack_require__(13)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/Untracked.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-32f237d4", Component.options)
  } else {
    hotAPI.reload("data-v-32f237d4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({

    props: ['data'],

    data: function data() {
        return {
            rows: this.data,
            columns: [{
                'field': 'relative_path',
                'label': 'Path'
            }, {
                'field': 'last_modified',
                'label': 'Last modified',
                'fieldtype': 'date'
            }]
        };
    },


    computed: {},

    watch: {},

    created: function created() {},


    methods: {}
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("data-list", {
        attrs: {
          visibleColumns: _vm.columns,
          columns: _vm.columns,
          rows: _vm.rows,
          sortColumn: "path",
          sortDirection: "asc"
        },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function(ref) {
              var rows = ref.filteredRows
              return _c(
                "div",
                { staticClass: "card p-0 relative" },
                [
                  _c("data-list-bulk-actions", {
                    attrs: { url: "api/actions/untracked" }
                  }),
                  _vm._v(" "),
                  _c("data-list-table", {
                    attrs: { rows: rows, "allow-bulk-actions": "true" },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "cell-relative_path",
                          fn: function(ref) {
                            var file = ref.row
                            return [
                              file.is_content
                                ? _c("a", { attrs: { href: file.edit_url } }, [
                                    _vm._v(_vm._s(file.relative_path))
                                  ])
                                : _vm._e()
                            ]
                          }
                        },
                        {
                          key: "actions",
                          fn: function(ref) {
                            var file = ref.row
                            var index = ref.index
                            return [
                              _c(
                                "dropdown-list",
                                [
                                  _c("dropdown-item", {
                                    attrs: { text: _vm.__("Add") }
                                  }),
                                  _vm._v(" "),
                                  _c("dropdown-item", {
                                    attrs: { text: _vm.__("Stash") }
                                  }),
                                  _vm._v(" "),
                                  _c("dropdown-item", {
                                    attrs: { text: _vm.__("Ignore") }
                                  }),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "divider" }),
                                  _vm._v(" "),
                                  _c("dropdown-item", {
                                    staticClass: "warning",
                                    attrs: { text: _vm.__("Delete") }
                                  })
                                ],
                                1
                              )
                            ]
                          }
                        }
                      ],
                      null,
                      true
                    )
                  })
                ],
                1
              )
            }
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-32f237d4", module.exports)
  }
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(8)
/* script */
var __vue_script__ = __webpack_require__(15)
/* template */
var __vue_template__ = __webpack_require__(16)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/Staged.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-85136f5e", Component.options)
  } else {
    hotAPI.reload("data-v-85136f5e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({

    props: ['data'],

    data: function data() {
        return {
            rows: this.data,
            columns: [{
                'field': 'relative_path',
                'label': 'Path'
            }, {
                'field': 'last_modified',
                'label': 'Last modified',
                'fieldtype': 'date'
            }]
        };
    },


    computed: {},

    watch: {},

    created: function created() {},


    methods: {}
});

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("data-list", {
        attrs: {
          visibleColumns: _vm.columns,
          columns: _vm.columns,
          rows: _vm.rows,
          sortColumn: "path",
          sortDirection: "asc"
        },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function(ref) {
              var rows = ref.filteredRows
              return _c(
                "div",
                { staticClass: "card p-0 relative" },
                [
                  _c("data-list-bulk-actions", {
                    attrs: { url: "api/actions/staged" }
                  }),
                  _vm._v(" "),
                  _c("data-list-table", {
                    attrs: { rows: rows, "allow-bulk-actions": "true" },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "cell-relative_path",
                          fn: function(ref) {
                            var file = ref.row
                            return [
                              file.is_content
                                ? _c("a", { attrs: { href: file.edit_url } }, [
                                    _vm._v(_vm._s(file.relative_path))
                                  ])
                                : _vm._e()
                            ]
                          }
                        },
                        {
                          key: "actions",
                          fn: function(ref) {
                            var file = ref.row
                            var index = ref.index
                            return [
                              _c(
                                "dropdown-list",
                                [
                                  _c("dropdown-item", {
                                    attrs: { text: _vm.__("Unstage") }
                                  })
                                ],
                                1
                              )
                            ]
                          }
                        }
                      ],
                      null,
                      true
                    )
                  })
                ],
                1
              )
            }
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-85136f5e", module.exports)
  }
}

/***/ })
/******/ ]);