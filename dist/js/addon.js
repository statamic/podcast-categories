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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/resources/js/components/fieldtypes/PodcastCategories.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./src/resources/js/components/fieldtypes/PodcastCategories.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  mixins: [Fieldtype],
  data: function data() {
    return {
      options: ['Arts', 'Arts » Books', 'Arts » Design', 'Arts » Fashion & Beauty', 'Arts » Food', 'Arts » Performing Arts', 'Arts » Visual Arts', 'Business', 'Business » Careers', 'Business » Entrepreneurship', 'Business » Investing', 'Business » Management', 'Business » Marketing', 'Business » Non-Profit', 'Comedy', 'Comedy » Comedy Interviews', 'Comedy » Improv', 'Comedy » Stand-Up', 'Education', 'Education » Courses', 'Education » How To', 'Education » Language Learning', 'Education » Self-Improvement', 'Fiction', 'Fiction » Comedy Fiction', 'Fiction » Drama', 'Fiction » Science Fiction', 'Government', 'History', 'Health & Fitness', 'Health & Fitness » Alternative Health', 'Health & Fitness » Fitness', 'Health & Fitness » Medicine', 'Health & Fitness » Mental Health', 'Health & Fitness » Nutrition', 'Health & Fitness » Sexuality', 'Kids & Family', 'Kids & Family » Education for Kids', 'Kids & Family » Parenting', 'Kids & Family » Pets & Animals', 'Kids & Family » Stories for Kids', 'Leisure', 'Leisure » Animation & Manga', 'Leisure » Automotive', 'Leisure » Aviation', 'Leisure » Crafts', 'Leisure » Games', 'Leisure » Hobbies', 'Leisure » Home & Garden', 'Leisure » Video Games', 'Music', 'Music » Music Commentary', 'Music » Music History', 'Music » Music Interviews', 'News', 'News » Business News', 'News » Daily News', 'News » Entertainment News', 'News » News Commentary', 'News » Politics', 'News » Sports News', 'News » Tech News', 'Religion & Spirituality', 'Religion & Spirituality » Buddhism', 'Religion & Spirituality » Christianity', 'Religion & Spirituality » Hinduism', 'Religion & Spirituality » Islam', 'Religion & Spirituality » Judaism', 'Religion & Spirituality » Religion', 'Religion & Spirituality » Spirituality', 'Science', 'Science » Astronomy', 'Science » Chemistry', 'Science » Earth Sciences', 'Science » Life Sciences', 'Science » Mathematics', 'Science » Natural Sciences', 'Science » Nature', 'Science » Physics', 'Science » Social Sciences', 'Society & Culture', 'Society & Culture » Documentary', 'Society & Culture » Personal Journals', 'Society & Culture » Philosophy', 'Society & Culture » Places & Travel', 'Society & Culture » Relationships', 'Sports', 'Sports » Baseball', 'Sports » Basketball', 'Sports » Cricket', 'Sports » Fantasy Sports', 'Sports » Football', 'Sports » Golf', 'Sports » Hockey', 'Sports » Rugby', 'Sports » Running', 'Sports » Soccer', 'Sports » Swimming', 'Sports » Tennis', 'Sports » Volleyball', 'Sports » Wilderness', 'Sports » Wrestling', 'Technology', 'True Crime', 'TV & Film', 'TV & Film » After Shows', 'TV & Film » Film History', 'TV & Film » Film Interviews', 'TV & Film » Film Reviews', 'TV & Film » TV Reviews']
    };
  },
  computed: {
    selectConfig: function selectConfig() {
      return {
        options: this.options
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/resources/js/components/fieldtypes/PodcastCategories.vue?vue&type=template&id=497b1e66&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/resources/js/components/fieldtypes/PodcastCategories.vue?vue&type=template&id=497b1e66& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("select-fieldtype", {
    attrs: { handle: _vm.handle, value: _vm.value, config: _vm.selectConfig },
    on: { input: _vm.update }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
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
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
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

/***/ "./src/resources/js/addon.js":
/*!***********************************!*\
  !*** ./src/resources/js/addon.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_fieldtypes_PodcastCategories_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/fieldtypes/PodcastCategories.vue */ "./src/resources/js/components/fieldtypes/PodcastCategories.vue");
// Addon JS here...

Statamic.booting(function () {
  Statamic.component('podcast_categories-fieldtype', _components_fieldtypes_PodcastCategories_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);
});

/***/ }),

/***/ "./src/resources/js/components/fieldtypes/PodcastCategories.vue":
/*!**********************************************************************!*\
  !*** ./src/resources/js/components/fieldtypes/PodcastCategories.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PodcastCategories_vue_vue_type_template_id_497b1e66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PodcastCategories.vue?vue&type=template&id=497b1e66& */ "./src/resources/js/components/fieldtypes/PodcastCategories.vue?vue&type=template&id=497b1e66&");
/* harmony import */ var _PodcastCategories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PodcastCategories.vue?vue&type=script&lang=js& */ "./src/resources/js/components/fieldtypes/PodcastCategories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PodcastCategories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PodcastCategories_vue_vue_type_template_id_497b1e66___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PodcastCategories_vue_vue_type_template_id_497b1e66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/resources/js/components/fieldtypes/PodcastCategories.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/resources/js/components/fieldtypes/PodcastCategories.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./src/resources/js/components/fieldtypes/PodcastCategories.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PodcastCategories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PodcastCategories.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/resources/js/components/fieldtypes/PodcastCategories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PodcastCategories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/resources/js/components/fieldtypes/PodcastCategories.vue?vue&type=template&id=497b1e66&":
/*!*****************************************************************************************************!*\
  !*** ./src/resources/js/components/fieldtypes/PodcastCategories.vue?vue&type=template&id=497b1e66& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PodcastCategories_vue_vue_type_template_id_497b1e66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PodcastCategories.vue?vue&type=template&id=497b1e66& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/resources/js/components/fieldtypes/PodcastCategories.vue?vue&type=template&id=497b1e66&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PodcastCategories_vue_vue_type_template_id_497b1e66___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PodcastCategories_vue_vue_type_template_id_497b1e66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi ./src/resources/js/addon.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jack/Sites/sandbox/addons/jackmcdade/podcast-categories/src/resources/js/addon.js */"./src/resources/js/addon.js");


/***/ })

/******/ });