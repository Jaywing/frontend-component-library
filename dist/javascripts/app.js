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
/******/ 	__webpack_require__.p = "/javascripts/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules */ \"./modules/index.js\");\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconsole.log(\"app.js has loaded!\");\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./modules sync recursive ^\\.\\/.*$":
/*!*******************************!*\
  !*** ./modules sync ^\.\/.*$ ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./\": \"./modules/index.js\",\n\t\"./Accordion\": \"./modules/Accordion.js\",\n\t\"./Accordion.js\": \"./modules/Accordion.js\",\n\t\"./Nav\": \"./modules/Nav.js\",\n\t\"./Nav.js\": \"./modules/Nav.js\",\n\t\"./Slider\": \"./modules/Slider.js\",\n\t\"./Slider.js\": \"./modules/Slider.js\",\n\t\"./Toggle\": \"./modules/Toggle.js\",\n\t\"./Toggle.js\": \"./modules/Toggle.js\",\n\t\"./example\": \"./modules/example.js\",\n\t\"./example.js\": \"./modules/example.js\",\n\t\"./index\": \"./modules/index.js\",\n\t\"./index.js\": \"./modules/index.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./modules sync recursive ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack:///./modules_sync_^\\.\\/.*$?");

/***/ }),

/***/ "./modules/Accordion.js":
/*!******************************!*\
  !*** ./modules/Accordion.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Accordion = function () {\n  function Accordion(el) {\n    _classCallCheck(this, Accordion);\n\n    this.el = el;\n    this.init();\n  }\n\n  _createClass(Accordion, [{\n    key: \"init\",\n    value: function init() {\n      this.dom = this.cacheDom();\n      this.addEventListeners();\n    }\n  }, {\n    key: \"cacheDom\",\n    value: function cacheDom() {\n      return {\n        accordionParent: this.el.querySelectorAll(\".c-accordion__toggle\")\n      };\n    }\n  }, {\n    key: \"addEventListeners\",\n    value: function addEventListeners() {\n      var _this = this;\n\n      var _loop = function _loop(i, len) {\n        _this.dom.accordionParent[i].addEventListener(\"click\", function (e) {\n          e.preventDefault();\n          _this.handleParentClick(e, i, _this.dom.accordionParent[i].parentNode);\n        });\n      };\n\n      for (var i = 0, len = this.dom.accordionParent.length; i < len; i++) {\n        _loop(i, len);\n      }\n    }\n  }, {\n    key: \"handleParentClick\",\n    value: function handleParentClick(e, item, itemParent) {\n      if (itemParent.classList.contains(\"is-active\")) {\n        itemParent.classList.remove(\"is-active\");\n      } else {\n        itemParent.classList.add(\"is-active\");\n      }\n    }\n  }]);\n\n  return Accordion;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Accordion);\n\n//# sourceURL=webpack:///./modules/Accordion.js?");

/***/ }),

/***/ "./modules/Nav.js":
/*!************************!*\
  !*** ./modules/Nav.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Nav = function () {\n  function Nav(el) {\n    _classCallCheck(this, Nav);\n\n    this.el = el;\n    this.init();\n  }\n\n  _createClass(Nav, [{\n    key: \"init\",\n    value: function init() {\n      this.dom = this.cacheDom();\n      this.addEventListeners();\n    }\n  }, {\n    key: \"cacheDom\",\n    value: function cacheDom() {\n      return {\n        menuParent: this.el.querySelectorAll(\".is-dropdown-button, .is-accordion-button\")\n      };\n    }\n  }, {\n    key: \"addEventListeners\",\n    value: function addEventListeners() {\n      var _this = this;\n\n      var _loop = function _loop(i, len) {\n        _this.dom.menuParent[i].addEventListener(\"click\", function (e) {\n          e.preventDefault();\n          _this.handleParentClick(e, i, _this.dom.menuParent[i].parentNode);\n        });\n      };\n\n      for (var i = 0, len = this.dom.menuParent.length; i < len; i++) {\n        _loop(i, len);\n      }\n    }\n  }, {\n    key: \"handleParentClick\",\n    value: function handleParentClick(e, item, itemParent) {\n      var items = itemParent.parentNode.querySelectorAll(\".c-nav__item\");\n      if (itemParent.classList.contains(\"is-active\")) {\n        itemParent.classList.remove(\"is-active\");\n      } else {\n        for (var i = 0, len = items.length; i < len; i++) {\n          items[i].classList.remove(\"is-active\");\n        }\n        itemParent.classList.add(\"is-active\");\n      }\n    }\n  }]);\n\n  return Nav;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\n\n//# sourceURL=webpack:///./modules/Nav.js?");

/***/ }),

/***/ "./modules/Slider.js":
/*!***************************!*\
  !*** ./modules/Slider.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Slider = function () {\n  function Slider(el, options) {\n    _classCallCheck(this, Slider);\n\n    var defaults = {\n      type: false,\n      slidesToShow: false,\n      slidesToShowMd: false\n    };\n\n    this.el = el;\n    this.settings = Object.assign(defaults, options);\n    this.init();\n  }\n\n  _createClass(Slider, [{\n    key: \"init\",\n    value: function init() {\n      console.log(this + \" has initialised\");\n      this.dom = this.cacheDom();\n\n      // Make the slider\n      this.makeSlider();\n      if (!Element.prototype.matches) {\n        Element.prototype.matches = Element.prototype.msMatchesSelector;\n      }\n    }\n  }, {\n    key: \"cacheDom\",\n    value: function cacheDom() {\n      return {\n        slides: this.el.querySelector(\".c-slider__slides\"),\n        slide: this.el.querySelectorAll(\".c-slider__slide\"),\n        controls: this.el.querySelector(\".c-slider__controls\"),\n        nextButton: this.el.querySelector(\".c-slider__next\"),\n        previousButton: this.el.querySelector(\".c-slider__previous\"),\n        pips: this.el.querySelector(\".c-slider__pips\")\n      };\n    }\n  }, {\n    key: \"makeSlider\",\n    value: function makeSlider() {\n      var _this = this;\n\n      var sliderNum = 0;\n      var direction = 1;\n      var slidesTotal = this.dom.slide.length;\n\n      // Settings: Reactive slider\n      if (this.settings.slidesToShow) {\n        if (this.settings.slidesToShowMd == 4 && window.jwAtomic.modules.Breakpoint.detail.gtSm) {\n          slidesTotal = this.dom.slide.length / this.settings.slidesToShowMd;\n        } else {\n          slidesTotal = this.dom.slide.length / this.settings.slidesToShow;\n        }\n      }\n\n      for (var i = 0; i < slidesTotal; i++) {\n        if (slidesTotal > 1 && this.dom.slide[i].classList.contains(\"is-active\")) {\n          sliderNum = i;\n        }\n\n        // Hero slider height\n        if (this.settings.type == \"hero\") {\n          var vheight = window.innerHeight - document.querySelector(\".SiteHeader\").offsetHeight;\n          vheight = vheight - vheight * 10 / 100;\n          this.dom.slide[i].style.minHeight = vheight + \"px\";\n        }\n\n        // Create pips\n        if (slidesTotal > 1) {\n          if (i == 0) {\n            this.dom.pips.innerHTML += \"<div class=\\\"c-slider__pip is-active\\\"></div>\";\n          } else {\n            this.dom.pips.innerHTML += \"<div class=\\\"c-slider__pip\\\"></div>\";\n          }\n        }\n      }\n\n      // Reactive slider setup\n      if (this.settings.slidesToShow) {\n        for (var _i = 0; _i < this.dom.slide.length; _i++) {\n          if (this.settings.slidesToShow == 2) {\n            this.dom.slide[_i].style.flex = \"0 0 50%\";\n            this.dom.slide[_i].style.width = \"50%\";\n          } else {\n            this.dom.slide[_i].style.flex = \"0 0 25%\";\n            this.dom.slide[_i].style.width = \"25%\";\n          }\n\n          if (window.jwAtomic.modules.Breakpoint.detail.gtSm) {\n            if (this.settings.slidesToShowMd == 4) {\n              this.dom.slide[_i].style.flex = \"0 0 25%\";\n              this.dom.slide[_i].style.width = \"25%\";\n            }\n          }\n        }\n      }\n\n      if (slidesTotal == 1) {\n        this.dom.controls.style.display = \"none\";\n      }\n\n      var slides = Array.from(this.el.querySelector(\".c-slider__pips\").children);\n\n      var slideForward = function slideForward() {\n        direction = 1;\n        sliderNum += 1;\n        if (sliderNum >= slidesTotal) sliderNum = 0;\n        _this.changeSlide(sliderNum, direction);\n      };\n\n      var slideBackward = function slideBackward() {\n        direction = 0;\n        sliderNum -= 1;\n        if (sliderNum < 0) sliderNum = slidesTotal - 1;\n        _this.changeSlide(sliderNum, direction);\n      };\n\n      var setSlide = function setSlide(event) {\n        direction = 1;\n        if (!event.target.matches(\"div.c-slider__pip\")) return;\n        var slide = event.target;\n        var prevSlide = sliderNum;\n        sliderNum = slides.indexOf(slide);\n        if (prevSlide > sliderNum) {\n          direction = 0;\n        }\n\n        _this.changeSlide(sliderNum, direction);\n      };\n\n      this.dom.nextButton.addEventListener(\"click\", slideForward);\n      this.dom.previousButton.addEventListener(\"click\", slideBackward);\n      this.el.querySelector(\".c-slider__pips\").addEventListener(\"click\", setSlide);\n    }\n  }, {\n    key: \"changeSlide\",\n    value: function changeSlide(sliderNum, direction) {\n      var slidesTotal = this.dom.slide.length;\n\n      if (!this.settings.slidesToShow) {\n        for (var i = 0; i < slidesTotal; i++) {\n          this.dom.slide[i].classList.remove(\"is-active\", \"is-active--next\", \"is-active--previous\", \"is-next\", \"is-previous\");\n        }\n\n        this.dom.slide[sliderNum].classList.add(\"is-active\");\n        if (direction == 1) this.dom.slide[sliderNum].classList.add(\"is-active--next\");\n        if (direction == 0) this.dom.slide[sliderNum].classList.add(\"is-active--previous\");\n        if (this.dom.slide[sliderNum].nextElementSibling) this.dom.slide[sliderNum].nextElementSibling.classList.add(\"is-next\");\n        if (this.dom.slide[sliderNum].previousElementSibling) this.dom.slide[sliderNum].previousElementSibling.classList.add(\"is-previous\");\n      }\n\n      // Reactive slider\n      if (this.settings.slidesToShow) {\n        var slideWidth = this.dom.slide[sliderNum].offsetWidth;\n        var newSlideWidth = slideWidth * this.settings.slidesToShow;\n        if (window.jwAtomic.modules.Breakpoint.detail.gtSm) {\n          if (this.settings.slidesToShowMd == 4) {\n            newSlideWidth = slideWidth * this.settings.slidesToShowMd;\n          }\n        }\n        var transform = sliderNum * newSlideWidth;\n        this.dom.slides.style.transform = \"translateX(-\" + transform + \"px)\";\n      }\n\n      // Set pip\n      this.el.querySelector(\".c-slider__pip.is-active\").classList.remove(\"is-active\");\n      this.el.querySelectorAll(\".c-slider__pip\")[sliderNum].classList.add(\"is-active\");\n    }\n  }]);\n\n  return Slider;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider);\n\n//# sourceURL=webpack:///./modules/Slider.js?");

/***/ }),

/***/ "./modules/Toggle.js":
/*!***************************!*\
  !*** ./modules/Toggle.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Toggle = function () {\n  function Toggle(el, options) {\n    _classCallCheck(this, Toggle);\n\n    var defaults = {\n      activeClass: \"is-active\",\n      target: \"\"\n    };\n    this.el = el;\n    this.settings = Object.assign(defaults, options);\n    this.init();\n  }\n\n  _createClass(Toggle, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      var toggle = function toggle() {\n        var target = _this.settings.target;\n        if (target === \"\") {\n          _this.el.classList.toggle(_this.settings.activeClass);\n        } else {\n          if (typeof target === \"string\") {\n            if (target === \"parent\") {\n              _this.el.parentNode.classList.toggle(_this.settings.activeClass);\n            } else {\n              document.querySelector(target).classList.toggle(_this.settings.activeClass);\n            }\n          }\n        }\n      };\n\n      this.el.addEventListener(\"click\", toggle);\n    }\n  }]);\n\n  return Toggle;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Toggle);\n\n//# sourceURL=webpack:///./modules/Toggle.js?");

/***/ }),

/***/ "./modules/example.js":
/*!****************************!*\
  !*** ./modules/example.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Example = function Example(el) {\n  _classCallCheck(this, Example);\n\n  this.el = el;\n  console.log(el.textContent, \"- From the example module\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Example);\n\n//# sourceURL=webpack:///./modules/example.js?");

/***/ }),

/***/ "./modules/index.js":
/*!**************************!*\
  !*** ./modules/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\r\n  Automatically instantiates modules based on data-attributes\r\n  specifying module file-names.\r\n*/\n\nvar moduleElements = document.querySelectorAll(\"[data-module]\");\n\nfor (var i = 0; i < moduleElements.length; i++) {\n  var el = moduleElements[i];\n  var name = el.getAttribute(\"data-module\");\n  var options = {};\n  var dataOptions = el.getAttribute(\"data-options\");\n  if (dataOptions) {\n    options = JSON.parse(dataOptions);\n  }\n  var Module = __webpack_require__(\"./modules sync recursive ^\\\\.\\\\/.*$\")(\"./\" + name).default;\n  new Module(el, options);\n}\n\n/*\r\n  Usage:\r\n  ======\r\n  html\r\n  ----\r\n  <button data-module=\"disappear\">disappear!</button>\r\n  js\r\n  --\r\n  // modules/disappear.js\r\n  export default class Disappear {\r\n    constructor(el) {\r\n      el.style.display = 'none'\r\n    }\r\n  }\r\n*/\n\n//# sourceURL=webpack:///./modules/index.js?");

/***/ }),

/***/ 0:
/*!********************!*\
  !*** multi app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! app.js */\"./app.js\");\n\n\n//# sourceURL=webpack:///multi_app.js?");

/***/ })

/******/ });