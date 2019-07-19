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

/***/ "../node_modules/webpack/buildin/global.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///../node_modules/webpack/buildin/global.js?");

/***/ }),

/***/ "../node_modules/webpack/buildin/harmony-module.js":
/*!*********************************************************!*\
  !*** ../node_modules/webpack/buildin/harmony-module.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///../node_modules/webpack/buildin/harmony-module.js?");

/***/ }),

/***/ "./lab.js":
/*!****************!*\
  !*** ./lab.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules */ \"./modules/index.js\");\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconsole.log(\"app.js has loaded!\");\n\n//# sourceURL=webpack:///./lab.js?");

/***/ }),

/***/ "./modules sync recursive ^\\.\\/.*$":
/*!*******************************!*\
  !*** ./modules sync ^\.\/.*$ ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./\": \"./modules/index.js\",\n\t\"./Accordion\": \"./modules/Accordion.js\",\n\t\"./Accordion.js\": \"./modules/Accordion.js\",\n\t\"./ExampleCode\": \"./modules/ExampleCode.js\",\n\t\"./ExampleCode.js\": \"./modules/ExampleCode.js\",\n\t\"./LabFrame\": \"./modules/LabFrame.js\",\n\t\"./LabFrame.js\": \"./modules/LabFrame.js\",\n\t\"./Nav\": \"./modules/Nav.js\",\n\t\"./Nav.js\": \"./modules/Nav.js\",\n\t\"./Toggle\": \"./modules/Toggle.js\",\n\t\"./Toggle.js\": \"./modules/Toggle.js\",\n\t\"./example\": \"./modules/example.js\",\n\t\"./example.js\": \"./modules/example.js\",\n\t\"./index\": \"./modules/index.js\",\n\t\"./index.js\": \"./modules/index.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./modules sync recursive ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack:///./modules_sync_^\\.\\/.*$?");

/***/ }),

/***/ "./modules/Accordion.js":
/*!******************************!*\
  !*** ./modules/Accordion.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Accordion = function () {\n  function Accordion(el) {\n    _classCallCheck(this, Accordion);\n\n    this.el = el;\n    this.init();\n  }\n\n  _createClass(Accordion, [{\n    key: \"init\",\n    value: function init() {\n      this.dom = this.cacheDom();\n      this.addEventListeners();\n    }\n  }, {\n    key: \"cacheDom\",\n    value: function cacheDom() {\n      return {\n        accordionParent: this.el.querySelectorAll(\".accordion__title\")\n      };\n    }\n  }, {\n    key: \"addEventListeners\",\n    value: function addEventListeners() {\n      var _this = this;\n\n      var _loop = function _loop(i, len) {\n        _this.dom.accordionParent[i].addEventListener(\"click\", function (e) {\n          e.preventDefault();\n          _this.handleParentClick(e, i, _this.dom.accordionParent[i].parentNode);\n        });\n      };\n\n      for (var i = 0, len = this.dom.accordionParent.length; i < len; i++) {\n        _loop(i, len);\n      }\n    }\n  }, {\n    key: \"handleParentClick\",\n    value: function handleParentClick(e, item, itemParent) {\n      if (itemParent.classList.contains(\"is-active\")) {\n        itemParent.classList.remove(\"is-active\");\n      } else {\n        itemParent.classList.add(\"is-active\");\n      }\n    }\n  }]);\n\n  return Accordion;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Accordion);\n\n//# sourceURL=webpack:///./modules/Accordion.js?");

/***/ }),

/***/ "./modules/ExampleCode.js":
/*!********************************!*\
  !*** ./modules/ExampleCode.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module, global) {var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar ExampleCode = function () {\n  function ExampleCode(el) {\n    _classCallCheck(this, ExampleCode);\n\n    this.el = el;\n    this.syntaxHighlighting();\n    // this.replaceHtmlSymbols();\n  }\n\n  // replaceHtmlSymbols() {\n  //   var actualCode = this.el.querySelector(\"#actualCode\");\n  //   var displayCode = this.el.querySelector(\"#displaycode\");\n\n  //   displayCode.innerHTML = actualCode.innerHTML\n  //     .replace(/</g, \"&lt;\")\n  //     .replace(/>/g, \"&gt;\");\n  // }\n\n  _createClass(ExampleCode, [{\n    key: \"syntaxHighlighting\",\n    value: function syntaxHighlighting() {\n      (function runPrism() {\n        /* PrismJS 1.15.0\r\n        https://prismjs.com/download.html#themes=prism-okaidia&languages=markup+css+clike+javascript */\n        var _self = \"undefined\" != typeof window ? window : \"undefined\" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},\n            Prism = function () {\n          var e = /\\blang(?:uage)?-([\\w-]+)\\b/i,\n              t = 0,\n              n = _self.Prism = {\n            manual: _self.Prism && _self.Prism.manual,\n            disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,\n            util: {\n              encode: function encode(e) {\n                return e instanceof a ? new a(e.type, n.util.encode(e.content), e.alias) : \"Array\" === n.util.type(e) ? e.map(n.util.encode) : e.replace(/&/g, \"&amp;\").replace(/</g, \"&lt;\").replace(/\\u00a0/g, \" \");\n              },\n              type: function type(e) {\n                return Object.prototype.toString.call(e).slice(8, -1);\n              },\n              objId: function objId(e) {\n                return e.__id || Object.defineProperty(e, \"__id\", { value: ++t }), e.__id;\n              },\n              clone: function clone(e, t) {\n                var a = n.util.type(e);\n                switch (t = t || {}, a) {\n                  case \"Object\":\n                    if (t[n.util.objId(e)]) return t[n.util.objId(e)];\n                    var r = {};\n                    t[n.util.objId(e)] = r;\n                    for (var l in e) {\n                      e.hasOwnProperty(l) && (r[l] = n.util.clone(e[l], t));\n                    }return r;\n                  case \"Array\":\n                    if (t[n.util.objId(e)]) return t[n.util.objId(e)];\n                    var r = [];\n                    return t[n.util.objId(e)] = r, e.forEach(function (e, a) {\n                      r[a] = n.util.clone(e, t);\n                    }), r;\n                }\n                return e;\n              }\n            },\n            languages: {\n              extend: function extend(e, t) {\n                var a = n.util.clone(n.languages[e]);\n                for (var r in t) {\n                  a[r] = t[r];\n                }return a;\n              },\n              insertBefore: function insertBefore(e, t, a, r) {\n                r = r || n.languages;\n                var l = r[e],\n                    i = {};\n                for (var o in l) {\n                  if (l.hasOwnProperty(o)) {\n                    if (o == t) for (var s in a) {\n                      a.hasOwnProperty(s) && (i[s] = a[s]);\n                    }a.hasOwnProperty(o) || (i[o] = l[o]);\n                  }\n                }var u = r[e];\n                return r[e] = i, n.languages.DFS(n.languages, function (t, n) {\n                  n === u && t != e && (this[t] = i);\n                }), i;\n              },\n              DFS: function DFS(e, t, a, r) {\n                r = r || {};\n                for (var l in e) {\n                  e.hasOwnProperty(l) && (t.call(e, l, e[l], a || l), \"Object\" !== n.util.type(e[l]) || r[n.util.objId(e[l])] ? \"Array\" !== n.util.type(e[l]) || r[n.util.objId(e[l])] || (r[n.util.objId(e[l])] = !0, n.languages.DFS(e[l], t, l, r)) : (r[n.util.objId(e[l])] = !0, n.languages.DFS(e[l], t, null, r)));\n                }\n              }\n            },\n            plugins: {},\n            highlightAll: function highlightAll(e, t) {\n              n.highlightAllUnder(document, e, t);\n            },\n            highlightAllUnder: function highlightAllUnder(e, t, a) {\n              var r = {\n                callback: a,\n                selector: 'code[class*=\"language-\"], [class*=\"language-\"] code, code[class*=\"lang-\"], [class*=\"lang-\"] code'\n              };\n              n.hooks.run(\"before-highlightall\", r);\n              for (var l, i = r.elements || e.querySelectorAll(r.selector), o = 0; l = i[o++];) {\n                n.highlightElement(l, t === !0, r.callback);\n              }\n            },\n            highlightElement: function highlightElement(t, a, r) {\n              for (var l, i, o = t; o && !e.test(o.className);) {\n                o = o.parentNode;\n              }o && (l = (o.className.match(e) || [, \"\"])[1].toLowerCase(), i = n.languages[l]), t.className = t.className.replace(e, \"\").replace(/\\s+/g, \" \") + \" language-\" + l, t.parentNode && (o = t.parentNode, /pre/i.test(o.nodeName) && (o.className = o.className.replace(e, \"\").replace(/\\s+/g, \" \") + \" language-\" + l));\n              var s = t.textContent,\n                  u = { element: t, language: l, grammar: i, code: s },\n                  g = function g(e) {\n                u.highlightedCode = e, n.hooks.run(\"before-insert\", u), u.element.innerHTML = u.highlightedCode, n.hooks.run(\"after-highlight\", u), n.hooks.run(\"complete\", u), r && r.call(u.element);\n              };\n              if (n.hooks.run(\"before-sanity-check\", u), !u.code) return n.hooks.run(\"complete\", u), void 0;\n              if (n.hooks.run(\"before-highlight\", u), !u.grammar) return g(n.util.encode(u.code)), void 0;\n              if (a && _self.Worker) {\n                var c = new Worker(n.filename);\n                c.onmessage = function (e) {\n                  g(e.data);\n                }, c.postMessage(JSON.stringify({\n                  language: u.language,\n                  code: u.code,\n                  immediateClose: !0\n                }));\n              } else g(n.highlight(u.code, u.grammar, u.language));\n            },\n            highlight: function highlight(e, t, r) {\n              var l = { code: e, grammar: t, language: r };\n              return n.hooks.run(\"before-tokenize\", l), l.tokens = n.tokenize(l.code, l.grammar), n.hooks.run(\"after-tokenize\", l), a.stringify(n.util.encode(l.tokens), l.language);\n            },\n            matchGrammar: function matchGrammar(e, t, a, r, l, i, o) {\n              var s = n.Token;\n              for (var u in a) {\n                if (a.hasOwnProperty(u) && a[u]) {\n                  if (u == o) return;\n                  var g = a[u];\n                  g = \"Array\" === n.util.type(g) ? g : [g];\n                  for (var c = 0; c < g.length; ++c) {\n                    var f = g[c],\n                        h = f.inside,\n                        d = !!f.lookbehind,\n                        m = !!f.greedy,\n                        p = 0,\n                        y = f.alias;\n                    if (m && !f.pattern.global) {\n                      var v = f.pattern.toString().match(/[imuy]*$/)[0];\n                      f.pattern = RegExp(f.pattern.source, v + \"g\");\n                    }\n                    f = f.pattern || f;\n                    for (var b = r, k = l; b < t.length; k += t[b].length, ++b) {\n                      var w = t[b];\n                      if (t.length > e.length) return;\n                      if (!(w instanceof s)) {\n                        if (m && b != t.length - 1) {\n                          f.lastIndex = k;\n                          var _ = f.exec(e);\n                          if (!_) break;\n                          for (var j = _.index + (d ? _[1].length : 0), P = _.index + _[0].length, A = b, O = k, x = t.length; x > A && (P > O || !t[A].type && !t[A - 1].greedy); ++A) {\n                            O += t[A].length, j >= O && (++b, k = O);\n                          }if (t[b] instanceof s) continue;\n                          I = A - b, w = e.slice(k, O), _.index -= k;\n                        } else {\n                          f.lastIndex = 0;\n                          var _ = f.exec(w),\n                              I = 1;\n                        }\n                        if (_) {\n                          d && (p = _[1] ? _[1].length : 0);\n                          var j = _.index + p,\n                              _ = _[0].slice(p),\n                              P = j + _.length,\n                              N = w.slice(0, j),\n                              S = w.slice(P),\n                              E = [b, I];\n                          N && (++b, k += N.length, E.push(N));\n                          var C = new s(u, h ? n.tokenize(_, h) : _, y, _, m);\n                          if (E.push(C), S && E.push(S), Array.prototype.splice.apply(t, E), 1 != I && n.matchGrammar(e, t, a, b, k, !0, u), i) break;\n                        } else if (i) break;\n                      }\n                    }\n                  }\n                }\n              }\n            },\n            tokenize: function tokenize(e, t) {\n              var a = [e],\n                  r = t.rest;\n              if (r) {\n                for (var l in r) {\n                  t[l] = r[l];\n                }delete t.rest;\n              }\n              return n.matchGrammar(e, a, t, 0, 0, !1), a;\n            },\n            hooks: {\n              all: {},\n              add: function add(e, t) {\n                var a = n.hooks.all;\n                a[e] = a[e] || [], a[e].push(t);\n              },\n              run: function run(e, t) {\n                var a = n.hooks.all[e];\n                if (a && a.length) for (var r, l = 0; r = a[l++];) {\n                  r(t);\n                }\n              }\n            }\n          },\n              a = n.Token = function (e, t, n, a, r) {\n            this.type = e, this.content = t, this.alias = n, this.length = 0 | (a || \"\").length, this.greedy = !!r;\n          };\n          if (a.stringify = function (e, t, r) {\n            if (\"string\" == typeof e) return e;\n            if (\"Array\" === n.util.type(e)) return e.map(function (n) {\n              return a.stringify(n, t, e);\n            }).join(\"\");\n            var l = {\n              type: e.type,\n              content: a.stringify(e.content, t, r),\n              tag: \"span\",\n              classes: [\"token\", e.type],\n              attributes: {},\n              language: t,\n              parent: r\n            };\n            if (e.alias) {\n              var i = \"Array\" === n.util.type(e.alias) ? e.alias : [e.alias];\n              Array.prototype.push.apply(l.classes, i);\n            }\n            n.hooks.run(\"wrap\", l);\n            var o = Object.keys(l.attributes).map(function (e) {\n              return e + '=\"' + (l.attributes[e] || \"\").replace(/\"/g, \"&quot;\") + '\"';\n            }).join(\" \");\n            return \"<\" + l.tag + ' class=\"' + l.classes.join(\" \") + '\"' + (o ? \" \" + o : \"\") + \">\" + l.content + \"</\" + l.tag + \">\";\n          }, !_self.document) return _self.addEventListener ? (n.disableWorkerMessageHandler || _self.addEventListener(\"message\", function (e) {\n            var t = JSON.parse(e.data),\n                a = t.language,\n                r = t.code,\n                l = t.immediateClose;\n            _self.postMessage(n.highlight(r, n.languages[a], a)), l && _self.close();\n          }, !1), _self.Prism) : _self.Prism;\n          var r = document.currentScript || [].slice.call(document.getElementsByTagName(\"script\")).pop();\n          return r && (n.filename = r.src, n.manual || r.hasAttribute(\"data-manual\") || (\"loading\" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(n.highlightAll) : window.setTimeout(n.highlightAll, 16) : document.addEventListener(\"DOMContentLoaded\", n.highlightAll))), _self.Prism;\n        }();\n         true && module.exports && (module.exports = Prism), \"undefined\" != typeof global && (global.Prism = Prism);\n        Prism.languages.markup = {\n          comment: /<!--[\\s\\S]*?-->/,\n          prolog: /<\\?[\\s\\S]+?\\?>/,\n          doctype: /<!DOCTYPE[\\s\\S]+?>/i,\n          cdata: /<!\\[CDATA\\[[\\s\\S]*?]]>/i,\n          tag: {\n            pattern: /<\\/?(?!\\d)[^\\s>\\/=$<%]+(?:\\s+[^\\s>\\/=]+(?:=(?:(\"|')(?:\\\\[\\s\\S]|(?!\\1)[^\\\\])*\\1|[^\\s'\">=]+))?)*\\s*\\/?>/i,\n            greedy: !0,\n            inside: {\n              tag: {\n                pattern: /^<\\/?[^\\s>\\/]+/i,\n                inside: { punctuation: /^<\\/?/, namespace: /^[^\\s>\\/:]+:/ }\n              },\n              \"attr-value\": {\n                pattern: /=(?:(\"|')(?:\\\\[\\s\\S]|(?!\\1)[^\\\\])*\\1|[^\\s'\">=]+)/i,\n                inside: {\n                  punctuation: [/^=/, { pattern: /(^|[^\\\\])[\"']/, lookbehind: !0 }]\n                }\n              },\n              punctuation: /\\/?>/,\n              \"attr-name\": {\n                pattern: /[^\\s>\\/]+/,\n                inside: { namespace: /^[^\\s>\\/:]+:/ }\n              }\n            }\n          },\n          entity: /&#?[\\da-z]{1,8};/i\n        }, Prism.languages.markup.tag.inside[\"attr-value\"].inside.entity = Prism.languages.markup.entity, Prism.hooks.add(\"wrap\", function (a) {\n          \"entity\" === a.type && (a.attributes.title = a.content.replace(/&amp;/, \"&\"));\n        }), Prism.languages.xml = Prism.languages.extend(\"markup\", {}), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup;\n        Prism.languages.css = {\n          comment: /\\/\\*[\\s\\S]*?\\*\\//,\n          atrule: {\n            pattern: /@[\\w-]+?[\\s\\S]*?(?:;|(?=\\s*\\{))/i,\n            inside: { rule: /@[\\w-]+/ }\n          },\n          url: /url\\((?:([\"'])(?:\\\\(?:\\r\\n|[\\s\\S])|(?!\\1)[^\\\\\\r\\n])*\\1|.*?)\\)/i,\n          selector: /[^{}\\s][^{};]*?(?=\\s*\\{)/,\n          string: {\n            pattern: /(\"|')(?:\\\\(?:\\r\\n|[\\s\\S])|(?!\\1)[^\\\\\\r\\n])*\\1/,\n            greedy: !0\n          },\n          property: /[-_a-z\\xA0-\\uFFFF][-\\w\\xA0-\\uFFFF]*(?=\\s*:)/i,\n          important: /!important\\b/i,\n          function: /[-a-z0-9]+(?=\\()/i,\n          punctuation: /[(){};:,]/\n        }, Prism.languages.css.atrule.inside.rest = Prism.languages.css, Prism.languages.markup && (Prism.languages.insertBefore(\"markup\", \"tag\", {\n          style: {\n            pattern: /(<style[\\s\\S]*?>)[\\s\\S]*?(?=<\\/style>)/i,\n            lookbehind: !0,\n            inside: Prism.languages.css,\n            alias: \"language-css\",\n            greedy: !0\n          }\n        }), Prism.languages.insertBefore(\"inside\", \"attr-value\", {\n          \"style-attr\": {\n            pattern: /\\s*style=(\"|')(?:\\\\[\\s\\S]|(?!\\1)[^\\\\])*\\1/i,\n            inside: {\n              \"attr-name\": {\n                pattern: /^\\s*style/i,\n                inside: Prism.languages.markup.tag.inside\n              },\n              punctuation: /^\\s*=\\s*['\"]|['\"]\\s*$/,\n              \"attr-value\": { pattern: /.+/i, inside: Prism.languages.css }\n            },\n            alias: \"language-css\"\n          }\n        }, Prism.languages.markup.tag));\n        Prism.languages.clike = {\n          comment: [{ pattern: /(^|[^\\\\])\\/\\*[\\s\\S]*?(?:\\*\\/|$)/, lookbehind: !0 }, { pattern: /(^|[^\\\\:])\\/\\/.*/, lookbehind: !0, greedy: !0 }],\n          string: {\n            pattern: /([\"'])(?:\\\\(?:\\r\\n|[\\s\\S])|(?!\\1)[^\\\\\\r\\n])*\\1/,\n            greedy: !0\n          },\n          \"class-name\": {\n            pattern: /((?:\\b(?:class|interface|extends|implements|trait|instanceof|new)\\s+)|(?:catch\\s+\\())[\\w.\\\\]+/i,\n            lookbehind: !0,\n            inside: { punctuation: /[.\\\\]/ }\n          },\n          keyword: /\\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\\b/,\n          boolean: /\\b(?:true|false)\\b/,\n          function: /\\w+(?=\\()/,\n          number: /\\b0x[\\da-f]+\\b|(?:\\b\\d+\\.?\\d*|\\B\\.\\d+)(?:e[+-]?\\d+)?/i,\n          operator: /--?|\\+\\+?|!=?=?|<=?|>=?|==?=?|&&?|\\|\\|?|\\?|\\*|\\/|~|\\^|%/,\n          punctuation: /[{}[\\];(),.:]/\n        };\n        Prism.languages.javascript = Prism.languages.extend(\"clike\", {\n          \"class-name\": [Prism.languages.clike[\"class-name\"], {\n            pattern: /(^|[^$\\w\\xA0-\\uFFFF])[_$A-Z\\xA0-\\uFFFF][$\\w\\xA0-\\uFFFF]*(?=\\.(?:prototype|constructor))/,\n            lookbehind: !0\n          }],\n          keyword: [{ pattern: /((?:^|})\\s*)(?:catch|finally)\\b/, lookbehind: !0 }, /\\b(?:as|async|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\\b/],\n          number: /\\b(?:(?:0[xX][\\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+)n?|\\d+n|NaN|Infinity)\\b|(?:\\b\\d+\\.?\\d*|\\B\\.\\d+)(?:[Ee][+-]?\\d+)?/,\n          function: /[_$a-zA-Z\\xA0-\\uFFFF][$\\w\\xA0-\\uFFFF]*(?=\\s*\\(|\\.(?:apply|bind|call)\\()/,\n          operator: /-[-=]?|\\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\\|[|=]?|\\*\\*?=?|\\/=?|~|\\^=?|%=?|\\?|\\.{3}/\n        }), Prism.languages.javascript[\"class-name\"][0].pattern = /(\\b(?:class|interface|extends|implements|instanceof|new)\\s+)[\\w.\\\\]+/, Prism.languages.insertBefore(\"javascript\", \"keyword\", {\n          regex: {\n            pattern: /((?:^|[^$\\w\\xA0-\\uFFFF.\"'\\])\\s])\\s*)\\/(\\[(?:[^\\]\\\\\\r\\n]|\\\\.)*]|\\\\.|[^\\/\\\\\\[\\r\\n])+\\/[gimyu]{0,5}(?=\\s*($|[\\r\\n,.;})\\]]))/,\n            lookbehind: !0,\n            greedy: !0\n          },\n          \"function-variable\": {\n            pattern: /[_$a-z\\xA0-\\uFFFF][$\\w\\xA0-\\uFFFF]*(?=\\s*[=:]\\s*(?:async\\s*)?(?:\\bfunction\\b|(?:\\([^()]*\\)|[_$a-z\\xA0-\\uFFFF][$\\w\\xA0-\\uFFFF]*)\\s*=>))/i,\n            alias: \"function\"\n          },\n          parameter: [{\n            pattern: /(function(?:\\s+[_$a-z\\xA0-\\uFFFF][$\\w\\xA0-\\uFFFF]*)?\\s*\\(\\s*)[^\\s()][^()]*?(?=\\s*\\))/,\n            lookbehind: !0,\n            inside: Prism.languages.javascript\n          }, {\n            pattern: /[_$a-z\\xA0-\\uFFFF][$\\w\\xA0-\\uFFFF]*(?=\\s*=>)/,\n            inside: Prism.languages.javascript\n          }, {\n            pattern: /(\\(\\s*)[^\\s()][^()]*?(?=\\s*\\)\\s*=>)/,\n            lookbehind: !0,\n            inside: Prism.languages.javascript\n          }, {\n            pattern: /((?:\\b|\\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)(?![$\\w\\xA0-\\uFFFF]))(?:[_$a-z\\xA0-\\uFFFF][$\\w\\xA0-\\uFFFF]*\\s*)\\(\\s*)[^\\s()][^()]*?(?=\\s*\\)\\s*\\{)/,\n            lookbehind: !0,\n            inside: Prism.languages.javascript\n          }],\n          constant: /\\b[A-Z][A-Z\\d_]*\\b/\n        }), Prism.languages.insertBefore(\"javascript\", \"string\", {\n          \"template-string\": {\n            pattern: /`(?:\\\\[\\s\\S]|\\${[^}]+}|[^\\\\`])*`/,\n            greedy: !0,\n            inside: {\n              interpolation: {\n                pattern: /\\${[^}]+}/,\n                inside: {\n                  \"interpolation-punctuation\": {\n                    pattern: /^\\${|}$/,\n                    alias: \"punctuation\"\n                  },\n                  rest: Prism.languages.javascript\n                }\n              },\n              string: /[\\s\\S]+/\n            }\n          }\n        }), Prism.languages.markup && Prism.languages.insertBefore(\"markup\", \"tag\", {\n          script: {\n            pattern: /(<script[\\s\\S]*?>)[\\s\\S]*?(?=<\\/script>)/i,\n            lookbehind: !0,\n            inside: Prism.languages.javascript,\n            alias: \"language-javascript\",\n            greedy: !0\n          }\n        }), Prism.languages.js = Prism.languages.javascript;\n      })();\n    }\n  }]);\n\n  return ExampleCode;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ExampleCode);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"../node_modules/webpack/buildin/harmony-module.js\")(module), __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ \"../node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./modules/ExampleCode.js?");

/***/ }),

/***/ "./modules/LabFrame.js":
/*!*****************************!*\
  !*** ./modules/LabFrame.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar LabFrame = function () {\n  function LabFrame(el) {\n    _classCallCheck(this, LabFrame);\n\n    this.el = el;\n    this.init();\n  }\n\n  _createClass(LabFrame, [{\n    key: \"init\",\n    value: function init() {\n      var frame = this.el;\n\n      frame.onload = function () {\n        frame.style.height = frame.contentWindow.document.body.scrollHeight + \"px\";\n      };\n    }\n  }]);\n\n  return LabFrame;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LabFrame);\n\n//# sourceURL=webpack:///./modules/LabFrame.js?");

/***/ }),

/***/ "./modules/Nav.js":
/*!************************!*\
  !*** ./modules/Nav.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Nav = function () {\n  function Nav(el) {\n    _classCallCheck(this, Nav);\n\n    this.el = el;\n    this.init();\n  }\n\n  _createClass(Nav, [{\n    key: \"init\",\n    value: function init() {\n      this.dom = this.cacheDom();\n      this.addEventListeners();\n    }\n  }, {\n    key: \"cacheDom\",\n    value: function cacheDom() {\n      return {\n        dropdownMenuParent: this.el.querySelectorAll(\".is-dropdown-button\"),\n        accordionMenuParent: this.el.querySelectorAll(\".is-accordion-button\")\n      };\n    }\n  }, {\n    key: \"addEventListeners\",\n    value: function addEventListeners() {\n      var _this = this;\n\n      var _loop = function _loop(i, len) {\n        _this.dom.dropdownMenuParent[i].addEventListener(\"click\", function (e) {\n          e.preventDefault();\n          _this.handleParentClick(e, i, _this.dom.dropdownMenuParent[i].parentNode);\n        });\n      };\n\n      for (var i = 0, len = this.dom.dropdownMenuParent.length; i < len; i++) {\n        _loop(i, len);\n      }\n\n      var _loop2 = function _loop2(i, len) {\n        _this.dom.accordionMenuParent[i].addEventListener(\"click\", function (e) {\n          e.preventDefault();\n          _this.handleParentClick(e, i, _this.dom.accordionMenuParent[i].parentNode);\n        });\n      };\n\n      for (var i = 0, len = this.dom.accordionMenuParent.length; i < len; i++) {\n        _loop2(i, len);\n      }\n    }\n  }, {\n    key: \"handleParentClick\",\n    value: function handleParentClick(e, item, itemParent) {\n      if (itemParent.classList.contains(\"is-active\")) {\n        itemParent.classList.remove(\"is-active\");\n      } else {\n        itemParent.classList.add(\"is-active\");\n      }\n    }\n  }]);\n\n  return Nav;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\n\n//# sourceURL=webpack:///./modules/Nav.js?");

/***/ }),

/***/ "./modules/Toggle.js":
/*!***************************!*\
  !*** ./modules/Toggle.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Toggle = function () {\n  function Toggle(el, options) {\n    _classCallCheck(this, Toggle);\n\n    var defaults = {\n      activeClass: \"is-active\",\n      target: \"\"\n    };\n    this.el = el;\n    this.settings = Object.assign(defaults, options);\n    this.init();\n  }\n\n  _createClass(Toggle, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      var toggle = function toggle() {\n        var target = _this.settings.target;\n        if (target === \"\") {\n          _this.el.classList.toggle(_this.settings.activeClass);\n        } else {\n          if (typeof target === \"string\") {\n            _this.el.classList.toggle(_this.settings.activeClass);\n            if (target === \"parent\") {\n              _this.el.parentNode.classList.toggle(_this.settings.activeClass);\n            } else {\n              document.querySelector(target).classList.toggle(_this.settings.activeClass);\n            }\n          }\n        }\n      };\n\n      this.el.addEventListener(\"click\", toggle);\n    }\n  }]);\n\n  return Toggle;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Toggle);\n\n//# sourceURL=webpack:///./modules/Toggle.js?");

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
  !*** multi lab.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! lab.js */\"./lab.js\");\n\n\n//# sourceURL=webpack:///multi_lab.js?");

/***/ })

/******/ });