(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    137: function(t, s, e) {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 });
      var i,
        n = e(354),
        o = (i = n) && i.__esModule ? i : { default: i };
      s.default = function t(s, e) {
        !(function(t, s) {
          if (!(t instanceof s))
            throw new TypeError("Cannot call a class as a function");
        })(this, t);
        (this.el = s),
          (this.settings = Object.assign({ stickyItem: ".sticky__item" }, e));
        (0, o.default)(this.settings.stickyItem);
      };
    },
    354: function(t, s, e) {
      "use strict";
      e.r(s);
      /**
  stickybits - Stickybits is a lightweight alternative to `position: sticky` polyfills
  @version v3.6.8
  @link https://github.com/dollarshaveclub/stickybits#readme
  @author Jeff Wainwright <yowainwright@gmail.com> (https://jeffry.in)
  @license MIT
**/
      var i = (function() {
        function t(t, s) {
          var e = void 0 !== s ? s : {};
          (this.version = "3.6.8"),
            (this.userAgent =
              window.navigator.userAgent ||
              "no `userAgent` provided by the browser"),
            (this.props = {
              customStickyChangeNumber: e.customStickyChangeNumber || null,
              noStyles: e.noStyles || !1,
              stickyBitStickyOffset: e.stickyBitStickyOffset || 0,
              parentClass: e.parentClass || "js-stickybit-parent",
              scrollEl:
                "string" == typeof e.scrollEl
                  ? document.querySelector(e.scrollEl)
                  : e.scrollEl || window,
              stickyClass: e.stickyClass || "js-is-sticky",
              stuckClass: e.stuckClass || "js-is-stuck",
              stickyChangeClass: e.stickyChangeClass || "js-is-sticky--change",
              useStickyClasses: e.useStickyClasses || !1,
              useFixed: e.useFixed || !1,
              useGetBoundingClientRect: e.useGetBoundingClientRect || !1,
              verticalPosition: e.verticalPosition || "top"
            }),
            (this.props.positionVal = this.definePosition() || "fixed"),
            (this.instances = []);
          var i = this.props,
            n = i.positionVal,
            o = i.verticalPosition,
            a = i.noStyles,
            l = i.stickyBitStickyOffset,
            r = "top" !== o || a ? "" : l + "px",
            c = "fixed" !== n ? n : "";
          (this.els = "string" == typeof t ? document.querySelectorAll(t) : t),
            "length" in this.els || (this.els = [this.els]);
          for (var u = 0; u < this.els.length; u++) {
            var f = this.els[u];
            (f.style[o] = r),
              (f.style.position = c),
              this.instances.push(this.addInstance(f, this.props));
          }
        }
        var s = t.prototype;
        return (
          (s.definePosition = function() {
            var t;
            if (this.props.useFixed) t = "fixed";
            else {
              for (
                var s = ["", "-o-", "-webkit-", "-moz-", "-ms-"],
                  e = document.head.style,
                  i = 0;
                i < s.length;
                i += 1
              )
                e.position = s[i] + "sticky";
              (t = e.position ? e.position : "fixed"), (e.position = "");
            }
            return t;
          }),
          (s.addInstance = function(t, s) {
            var e = this,
              i = { el: t, parent: t.parentNode, props: s };
            if ("fixed" === s.positionVal || s.useStickyClasses) {
              this.isWin = this.props.scrollEl === window;
              var n = this.isWin
                ? window
                : this.getClosestParent(i.el, i.props.scrollEl);
              this.computeScrollOffsets(i),
                (i.parent.className += " " + s.parentClass),
                (i.state = "default"),
                (i.stateContainer = function() {
                  return e.manageState(i);
                }),
                n.addEventListener("scroll", i.stateContainer);
            }
            return i;
          }),
          (s.getClosestParent = function(t, s) {
            var e = s,
              i = t;
            if (i.parentElement === e) return e;
            for (; i.parentElement !== e; ) i = i.parentElement;
            return e;
          }),
          (s.getTopPosition = function(t) {
            if (this.props.useGetBoundingClientRect)
              return (
                t.getBoundingClientRect().top +
                (this.props.scrollEl.pageYOffset ||
                  document.documentElement.scrollTop)
              );
            var s = 0;
            do {
              s = t.offsetTop + s;
            } while ((t = t.offsetParent));
            return s;
          }),
          (s.computeScrollOffsets = function(t) {
            var s = t,
              e = s.props,
              i = s.el,
              n = s.parent,
              o = !this.isWin && "fixed" === e.positionVal,
              a = "bottom" !== e.verticalPosition,
              l = o ? this.getTopPosition(e.scrollEl) : 0,
              r = o ? this.getTopPosition(n) - l : this.getTopPosition(n),
              c =
                null !== e.customStickyChangeNumber
                  ? e.customStickyChangeNumber
                  : i.offsetHeight,
              u = r + n.offsetHeight;
            (s.offset = o ? 0 : l + e.stickyBitStickyOffset),
              (s.stickyStart = a ? r - s.offset : 0),
              (s.stickyChange = s.stickyStart + c),
              (s.stickyStop = a
                ? u - (i.offsetHeight + s.offset)
                : u - window.innerHeight);
          }),
          (s.toggleClasses = function(t, s, e) {
            var i = t,
              n = i.className.split(" ");
            e && -1 === n.indexOf(e) && n.push(e);
            var o = n.indexOf(s);
            -1 !== o && n.splice(o, 1), (i.className = n.join(" "));
          }),
          (s.manageState = function(t) {
            var s = t,
              e = s.el,
              i = s.props,
              n = s.state,
              o = s.stickyStart,
              a = s.stickyChange,
              l = s.stickyStop,
              r = e.style,
              c = i.noStyles,
              u = i.positionVal,
              f = i.scrollEl,
              p = i.stickyClass,
              h = i.stickyChangeClass,
              d = i.stuckClass,
              y = i.verticalPosition,
              k = "bottom" !== y,
              g = function(t) {
                t();
              },
              m =
                (this.isWin &&
                  (window.requestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.msRequestAnimationFrame)) ||
                g,
              C = this.toggleClasses,
              v = this.isWin
                ? window.scrollY || window.pageYOffset
                : f.scrollTop,
              w = k && v <= o && ("sticky" === n || "stuck" === n),
              S = v >= l && "sticky" === n;
            v > o && v < l && ("default" === n || "stuck" === n)
              ? ((s.state = "sticky"),
                m(function() {
                  C(e, d, p),
                    (r.position = u),
                    c ||
                      ((r.bottom = ""),
                      (r[y] = i.stickyBitStickyOffset + "px"));
                }))
              : w
              ? ((s.state = "default"),
                m(function() {
                  C(e, p), C(e, d), "fixed" === u && (r.position = "");
                }))
              : S &&
                ((s.state = "stuck"),
                m(function() {
                  C(e, p, d),
                    "fixed" !== u ||
                      c ||
                      ((r.top = ""),
                      (r.bottom = "0"),
                      (r.position = "absolute"));
                }));
            var b = v >= a && v <= l;
            v < a / 2 || v > l
              ? m(function() {
                  C(e, h);
                })
              : b &&
                m(function() {
                  C(e, "stub", h);
                });
          }),
          (s.update = function(t) {
            var s = this;
            return (
              void 0 === t && (t = null),
              this.instances.forEach(function(e) {
                s.computeScrollOffsets(e),
                  t &&
                    Object.keys(t).forEach(function(s) {
                      e.props[s] = t[s];
                    });
              }),
              this
            );
          }),
          (s.removeInstance = function(t) {
            var s = t.el,
              e = t.props,
              i = this.toggleClasses;
            (s.style.position = ""),
              (s.style[e.verticalPosition] = ""),
              i(s, e.stickyClass),
              i(s, e.stuckClass),
              i(s.parentNode, e.parentClass);
          }),
          (s.cleanup = function() {
            for (var t = 0; t < this.instances.length; t += 1) {
              var s = this.instances[t];
              s.stateContainer &&
                s.props.scrollEl.removeEventListener(
                  "scroll",
                  s.stateContainer
                ),
                this.removeInstance(s);
            }
            (this.manageState = !1), (this.instances = []);
          }),
          t
        );
      })();
      s.default = function(t, s) {
        return new i(t, s);
      };
    }
  }
]);
