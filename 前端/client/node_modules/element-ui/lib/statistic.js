module.exports =
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 127);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
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
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/statistic/src/main.vue?vue&type=template&id=76339aa7&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "el-statistic" }, [
    _c(
      "div",
      { staticClass: "head" },
      [
        _vm._t("title", [
          _c("span", { staticClass: "title" }, [
            _vm._v("\n        " + _vm._s(_vm.title) + "\n      ")
          ])
        ])
      ],
      2
    ),
    _c("div", { staticClass: "con" }, [
      _c(
        "span",
        { staticClass: "prefix" },
        [
          _vm._t("prefix", [
            _vm._v("\n        " + _vm._s(_vm.prefix) + "\n      ")
          ])
        ],
        2
      ),
      _c(
        "span",
        { staticClass: "number", style: _vm.valueStyle },
        [_vm._t("formatter", [_vm._v(" " + _vm._s(_vm.disposeValue))])],
        2
      ),
      _c(
        "span",
        { staticClass: "suffix" },
        [
          _vm._t("suffix", [
            _vm._v("\n        " + _vm._s(_vm.suffix) + "\n      ")
          ])
        ],
        2
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/statistic/src/main.vue?vue&type=template&id=76339aa7&

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(28);
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/statistic/src/main.vue?vue&type=script&lang=js&
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
//
//
//
//



// const dayjs = require('dayjs');

/* harmony default export */ var mainvue_type_script_lang_js_ = ({
  name: 'ElStatistic',
  data: function data() {
    return {
      disposeValue: '',
      timeTask: undefined,
      REFRESH_INTERVAL: 1000 / 30
    };
  },

  props: {
    decimalSeparator: {
      type: String,
      default: '.'
    },
    groupSeparator: {
      type: String,
      default: ''
    },
    precision: {
      type: Number,
      default: 0
    },
    value: {
      type: [String, Number],
      default: ''
    },
    prefix: {
      type: String,
      default: ''
    },
    suffix: {
      type: String,
      default: ''
    },
    title: {
      type: [String, Number],
      default: ''
    },
    timeIndices: {
      type: Boolean,
      default: false
    },
    valueStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    format: {
      type: String,
      default: 'HH:mm:ss:SSS'
    },
    rate: {
      type: Number,
      default: 1000
    }

  },
  created: function created() {
    this.branch();
  },

  watch: {
    value: function value() {
      this.branch();
    }
  },
  methods: {
    branch: function branch() {
      if (this.timeIndices) {
        clearInterval(this.timeTask);
        this.countDown();
      } else {
        this.dispose();
      }
    },
    magnification: function magnification(num) {
      var _mulriple = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;

      var _groupSeparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ',';

      // magnification factor
      var level = String(_mulriple).length - 1;
      var reg = new RegExp('\\d{1,' + level + '}(?=(\\d{' + level + '})+$)', 'g');
      var result = String(num).replace(reg, '$&,').split(',').join(_groupSeparator);
      return result;
    },
    dispose: function dispose() {
      var value = this.value,
          precision = this.precision,
          groupSeparator = this.groupSeparator,
          rate = this.rate;


      if (!external_lodash_default.a.isNumber(value)) return false;
      if (precision) {
        value = external_lodash_default.a.ceil(value, precision);
      }

      var integer = String(value).split('.')[0];
      var decimals = String(value).split('.')[1] || (precision ? external_lodash_default.a.fill(Array(precision), 0).join('') : '');
      var result = 0;
      // 1000 multiplying power
      if (groupSeparator) {
        integer = this.magnification(integer, rate, groupSeparator);
      }

      result = [integer, decimals].join(decimals ? this.decimalSeparator || '.' : '');
      this.disposeValue = result;
      return result;
    },
    diffDate: function diffDate(minuend, subtrahend) {
      return external_lodash_default.a.subtract(minuend, subtrahend);
    },
    suspend: function suspend(isStop) {
      if (isStop) {
        clearInterval(this.timeTask);
      } else {
        this.branch();
      }
      return this.disposeValue;
    },
    countDown: function countDown() {
      var format = this.format,
          value = this.value,
          REFRESH_INTERVAL = this.REFRESH_INTERVAL,
          diffDate = this.diffDate,
          suspend = this.suspend;

      var diffTiem = diffDate(value, Date.now());
      var formatTimeStr = function formatTimeStr(format, time) {
        var timeUnits = [['Y', 1000 * 60 * 60 * 24 * 365], // years
        ['M', 1000 * 60 * 60 * 24 * 30], // months
        ['D', 1000 * 60 * 60 * 24], // days
        ['H', 1000 * 60 * 60], // hours
        ['m', 1000 * 60], // minutes
        ['s', 1000], // seconds
        ['S', 1] // million seconds
        ];
        return external_lodash_default.a.reduce(timeUnits, function (con, item) {
          var name = item[0];
          return con.replace(new RegExp(name + '+', 'g'), function (match) {
            var sum = external_lodash_default.a.chain(time).divide(item[1]).floor().value();
            time -= external_lodash_default.a.multiply(sum, item[1]);
            sum = external_lodash_default.a.padStart(String(sum), String(match).length, 0); // autoCompletion
            if (!sum) suspend();
            return sum;
          });
        }, format);
      };
      var than = this;
      var disappearTime = function disappearTime(time) {
        var result = true; // stop
        if (value > Date.now()) {
          than.$emit('change', time);

          result = false;
        } else {
          result = true;

          than.$emit('finish', true);
        }
        return result;
      };
      this.timeTask = setInterval(function () {
        if (disappearTime(diffTiem)) clearInterval(than.timeTask);
        diffTiem = diffTiem < REFRESH_INTERVAL ? 0 : diffTiem - REFRESH_INTERVAL;
        than.disposeValue = formatTimeStr(format, diffTiem);
      }, REFRESH_INTERVAL);
    }
  }
});
// CONCATENATED MODULE: ./packages/statistic/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_mainvue_type_script_lang_js_ = (mainvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/statistic/src/main.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_mainvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/statistic/src/main.vue"
/* harmony default export */ var main = (component.exports);
// CONCATENATED MODULE: ./packages/statistic/index.js


/* istanbul ignore next */
main.install = function (Vue) {
  Vue.component(main.name, main);
};

/* harmony default export */ var statistic = __webpack_exports__["default"] = (main);

/***/ }),

/***/ 28:
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ })

/******/ });